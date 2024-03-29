/**
 * @fileoverview disallow adding multiple root nodes to the template
 * @author Przemyslaw Falowski (@przemkow)
 */
'use strict';

/* eslint-disable */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const utils = require('../utils');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'disallow adding multiple root nodes to the template',
            categories: ['essential'],
            url: 'https://ecomfe.github.io/eslint-plugin-san/rules/no-multiple-template-root.html'
        },
        fixable: null,
        schema: []
    },
    /**
     * @param {RuleContext} context - The rule context.
     * @returns {RuleListener} AST event handlers.
     */
    create(context) {
        const sourceCode = context.getSourceCode();

        function check(element) {
            const rootElements = [];
            let extraText = null;
            let extraElement = null;
            let vIf = false;
            for (const child of element.children) {
                if (child.type === 'VElement') {
                    if (rootElements.length === 0) {
                        rootElements.push(child);
                        vIf = utils.hasDirective(child, 'if');
                    } else if (vIf && utils.hasDirective(child, 'else-if')) {
                        rootElements.push(child);
                    } else if (vIf && utils.hasDirective(child, 'else')) {
                        rootElements.push(child);
                        vIf = false;
                    } else {
                        extraElement = child;
                    }
                } else if (sourceCode.getText(child).trim() !== '') {
                    extraText = child;
                }
            }

            if (extraText != null) {
                context.report({
                    node: extraText,
                    loc: extraText.loc,
                    message: 'The template root requires an element rather than texts.'
                });
            } else if (extraElement != null) {
                context.report({
                    node: extraElement,
                    loc: extraElement.loc,
                    message: 'The template root requires exactly one element.'
                });
            } else {
                for (const element of rootElements) {
                    const tag = element.startTag;
                    const name = element.name;

                    if (name === 'template' || name === 'slot') {
                        context.report({
                            node: tag,
                            loc: tag.loc,
                            message: "The template root disallows '<{{name}}>' elements.",
                            data: {name}
                        });
                    }
                    if (utils.hasDirective(element, 'for')) {
                        context.report({
                            node: tag,
                            loc: tag.loc,
                            message: "The template root disallows 's-for' directives."
                        });
                    }
                }
            }
        }

        return {
            Program(program) {
                const element = program.templateBody;
                if (element == null) {
                    return;
                }

                if (Array.isArray(element)) {
                    for (const templateBody of element) {
                        check(templateBody);
                    }
                } else {
                    check(element);
                }
            }
        };
    }
};
