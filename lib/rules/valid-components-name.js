/**
 * @author BUPTlhuanyu
 */
'use strict';

/* eslint-disable */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const utils = require('../utils');
const casing = require('../utils/casing');

// ------------------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------------------
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

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce custom components name',
            categories: ['essential'],
            url: 'https://ecomfe.github.io/eslint-plugin-san/rules/valid-components-name.html'
        },
        fixable: 'code',
        schema: []
    },
    /** @param {RuleContext} context */
    create(context) {
        const sourceCode = context.getSourceCode();
        function check(node, name, fix) {
            if (!casing.isKebabCase(name)) {
                context.report({
                    node,
                    loc: node.loc,
                    message: 'Component name {{name}} must be kebab-case.',
                    data: {
                        name
                    },
                    fix
                })
            }
        }

        function replace(fixer, node, name) {
            const tagStr = sourceCode.getText(node);
            const relativeStartLoc = tagStr.indexOf(name);
            if (relativeStartLoc === -1) {
                return;
            }
            const startLoc = node.range[0] + relativeStartLoc;
            const range = [startLoc, startLoc + name.length]
            const text = casing.kebabCase(name);
            return fixer.replaceTextRange(range, text);
        }

        return utils.defineTemplateBodyVisitor(
            context,
            {
                /** @param {VElement} node */
                VElement(node) {
                    if (node && !isHost(node)) {
                        check(node, node.rawName, fixer => {
                            const fixedRes = [];
                            const name = node.rawName;

                            node.startTag && fixedRes.push(replace(fixer, node.startTag, name)); // startTag
                            node.endTag && fixedRes.push(replace(fixer, node.endTag, name)); // endTag
                            return fixedRes;
                        });
                    }
                }
            },
            utils.executeOnSan(context, obj => {
                const registeredComponents = utils.getRegisteredComponents(obj);
                registeredComponents.forEach(node => {
                    if (!node || !node.node) {
                        return;
                    }
                    check(node.node, node.name, fixer => {
                        const range = node.node.key.range;
                        const raw = node.node.key.raw;
                        const text = casing.kebabCase(node.name);
                        const newRaw = raw.replace(node.name, text);
                        return fixer.replaceTextRange(range, newRaw);
                    });
                })
            })
        );
    }
};
