/**
 * @fileoverview Report used components
 * @author Michał Sajnóg
 */
'use strict';
// TODO: san文件中的san组件模板不会被检测，需要将san-eslint-parser的templateBody都替换成数组
/* eslint-disable */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const utils = require('../utils');

// ------------------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------------------
class SanCompBlockManager {
    constructor() {
        this.blocks = new Map();
    }

    setBlock(registeredComponents, obj) {
        if (obj && Array.isArray(obj.range)) {
            const range = obj.range;
            const name = range.join('-');
            this.blocks.set(name, {
                registeredComponents,
                range,
                usedComponents: new Set()
            });
        }
    }

    setUsedComp(range, value) {
        if (this.checkRange(range)) {
            const [nodeStart, nodeEnd] = range;
            for (let [name, block] of this.blocks) {
                if (this.checkRange(block.range)) {
                    const [start, end] = block.range;
                    if (nodeStart > start && nodeEnd < end) {
                        block.usedComponents.add(value);
                        break;
                    }
                }
            }
        }
    }

    checkRange(range) {
        return Array.isArray(range) && range.length === 2
    }
}

function isHost(node) {
    if (
        (!utils.isHtmlElementNode(node) && !utils.isSvgElementNode(node)) ||
        utils.isHtmlWellKnownElementName(node.rawName) ||
        utils.isSvgWellKnownElementName(node.rawName)
    ) {
        return true;
    }
    return false;
}

function isHostName(name) {
    if (
        utils.isHtmlWellKnownElementName(name) ||
        utils.isSvgWellKnownElementName(name)
    ) {
        return true;
    }
    return false;
}

function isExpression(node) {
    if (
        !node.value ||
        node.value.type !== 'VExpressionContainer' ||
        !node.value.expression
    ) {
        return true;
    }
    return false;
}

function isExportDefaultDeclaration(node) {
    let res = false;
    while (node) {
        if (node.type === 'ExportDefaultDeclaration') {
            res = true;
            break;
        }
        node = node.parent;
    }
    return res;
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'disallow registering components that are not used inside templates',
            categories: ['essential'],
            url: 'https://ecomfe.github.io/eslint-plugin-san/rules/no-unused-components.html'
        },
        fixable: null,
        schema: []
    },
    /** @param {RuleContext} context */
    create(context) {
        const isSanFile = utils.isSanFile(context.getFilename());

        function check(registeredComponents, usedComponents) {
            registeredComponents
                .filter(({name}) => {
                    return !usedComponents.has(name);
                })
                .forEach(({node, name}) =>
                    {
                        let hostCompMsg = '';
                        if (isHostName(name)) {
                            hostCompMsg = ' because the "{{name}}" is a host html tag name'
                        }
                        context.report({
                            node,
                            message: `The "{{name}}" component has been registered but not used${hostCompMsg}.`,
                            data: {
                                name
                            }
                        })   
                    }
                );
        }

        if (isSanFile) {
            const usedComponents = new Set();
            /** @type { { node: Property, name: string }[] } */
            let registeredComponents = [];
            let ignoreReporting = false;
            /** @type {Position} */
            let templateLocation;
    
            return utils.defineTemplateBodyVisitor(
                context,
                {
                    /** @param {VElement} node */
                    VElement(node) {
                        if (!isHost(node)) {
                            usedComponents.add(node.rawName);
                        }
                    },
                    /** @param {VDirective} node */
                    "VAttribute[key.name.name='is']"(node) {
                        if (!isExpression(node)) {
                            if (node.value.expression.type === 'Literal') {
                                // 字符串
                                usedComponents.add(node.value.expression.value);
                            } else {
                                ignoreReporting = true;
                            }
                        };
                    },
                    /** @param {VElement} node */
                    "VElement[name='template']"(node) {
                        templateLocation = templateLocation || node.loc.start;
                    },
                    /** @param {VElement} node */
                    "VElement[name='template']:exit"(node) {
                        if (node.loc.start !== templateLocation || ignoreReporting) {
                            return;
                        }
                        check(registeredComponents, usedComponents);
                    }
                },
                utils.executeOnSan(context, obj => {
                    if (isExportDefaultDeclaration(obj)) {
                        registeredComponents = utils.getRegisteredComponents(obj);
                    }
                })
            );
        } else {
            const sanBlocks = new SanCompBlockManager();
            let ignoreReporting = false;
    
            function rootExit(node) {
                const blocks = sanBlocks.blocks;
                for (let [_, block] of blocks) {
                    const {registeredComponents, usedComponents} = block;
                    check(registeredComponents, usedComponents);
                }
            }
    
            function getTemplateBodyVisitor() {
                return {
                    /** @param {VElement} node */
                    VElement(node) {
                        if (!isHost(node)) {
                            sanBlocks.setUsedComp(node.range, node.rawName);
                        }
                    },
                    /** @param {VDirective} node */
                    "VAttribute[key.name.name='is']"(node) {
                        // https://baidu.github.io/san/tutorial/component/#%E5%8A%A8%E6%80%81%E5%AD%90%E7%BB%84%E4%BB%B6
                        if (!isExpression(node)) {
                            if (node.value.expression.type === 'Literal') {
                                // 字符串
                                sanBlocks.setUsedComp(node.value.expression.range, node.value.expression.value);
                            } else {
                                ignoreReporting = true;
                            }
                        };
                    }
                };
            }
    
            return utils.defineTemplateBodyVisitor(
                context,
                getTemplateBodyVisitor(),
                Object.assign({}, {
                    "Program:exit"(program) {
                        if (ignoreReporting) {
                            return;
                        }
                        const node = program.templateBody;
                        if (node == null) {
                            return;
                        }
                        if (Array.isArray(node)) {
                            for (const templateBody of node) {
                                rootExit(templateBody);
                            }
                        } else {
                            rootExit(node);
                        }
                    }
                }, utils.executeOnSan(context, obj => {
                    const registeredComponents = utils.getRegisteredComponents(obj);
                    sanBlocks.setBlock(registeredComponents, obj);
                }))
            );
        }
    }
};
