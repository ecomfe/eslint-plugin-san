/**
 * @author Yosuke Ota
 * issue https://github.com/vuejs/eslint-plugin-vue/issues/140
 */
'use strict';

/* eslint-disable */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const utils = require('../utils');

const DEFAULT_ORDER = Object.freeze([['script', 'template'], 'style']);

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'enforce order of component top-level elements',
            categories: ['recommended'],
            url: 'https://ecomfe.github.io/eslint-plugin-san/rules/component-tags-order.html'
        },
        fixable: null,
        schema: [
            {
                type: 'object',
                properties: {
                    order: {
                        type: 'array',
                        items: {
                            anyOf: [{type: 'string'}, {type: 'array', items: {type: 'string'}, uniqueItems: true}]
                        },
                        uniqueItems: true,
                        additionalItems: false
                    }
                }
            }
        ],
        messages: {
            unexpected: 'The <{{name}}> should be above the <{{firstUnorderedName}}> on line {{line}}.'
        }
    },
    /**
     * 创建 ESLint 规则处理器
     *
     * 该函数返回一个包含 AST 事件处理器的对象，用于检查组件的顶层元素顺序
     *
     * @param {RuleContext} context - ESLint 规则上下文对象
     * @returns {RuleListener} 包含 Program 事件处理器的对象，用于验证组件标签顺序
     */
    create(context) {
        if (!utils.isSanFile(context.getFilename())) {
            return {};
        }
        /** @type {Map<string, number>} */
        const orderMap = new Map();
        /** @type {(string|string[])[]} */
        const orderOptions = (context.options[0] && context.options[0].order) || DEFAULT_ORDER;
        orderOptions.forEach((nameOrNames, index) => {
            if (Array.isArray(nameOrNames)) {
                for (const name of nameOrNames) {
                    orderMap.set(name, index);
                }
            } else {
                orderMap.set(nameOrNames, index);
            }
        });

        /**
         * @param {string} name
         */
        function getOrderPosition(name) {
            const num = orderMap.get(name);
            return num == null ? -1 : num;
        }

        // ESLint 9 compatibility: use utils.getParserServices helper
        const parserServices = utils.getParserServices(context);
        const documentFragment =
            parserServices &&
            parserServices.getDocumentFragment &&
            parserServices.getDocumentFragment();

        function getTopLevelHTMLElements() {
            if (documentFragment) {
                return documentFragment.children.filter(utils.isVElement);
            }
            return [];
        }

        /**
         * @param {VElement} element
         * @param {VElement} firstUnorderedElement
         */
        function report(element, firstUnorderedElement) {
            context.report({
                node: element,
                loc: element.loc,
                messageId: 'unexpected',
                data: {
                    name: element.name,
                    firstUnorderedName: firstUnorderedElement.name,
                    line: firstUnorderedElement.loc.start.line
                }
            });
        }

        return {
            Program(node) {
                if (utils.hasInvalidEOF(node)) {
                    return;
                }
                const elements = getTopLevelHTMLElements();

                elements.forEach((element, index) => {
                    const expectedIndex = getOrderPosition(element.name);
                    if (expectedIndex < 0) {
                        return;
                    }
                    const firstUnordered = elements
                        .slice(0, index)
                        .filter(e => expectedIndex < getOrderPosition(e.name))
                        .sort((e1, e2) => getOrderPosition(e1.name) - getOrderPosition(e2.name))[0];
                    if (firstUnordered) {
                        report(element, firstUnordered);
                    }
                });
            }
        };
    }
};
