/**
 * @author BUPTlhuanyu
 */
'use strict';

/* eslint-disable */
// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'disallow expression in the template in template literals',
            categories: ['recommended'],
            url: 'https://ecomfe.github.io/eslint-plugin-san/rules/no-expression-in-template-literals.html'
        },
        fixable: null,
        schema: []
    },
    /**
     * @param {RuleContext} context - The rule context.
     * @returns {RuleListener} AST event handlers.
     */
    create(context) {
        return {
            'ClassProperty, Property'(node) {
                if (!node) {
                    return;
                }
                if (node.key.name === 'template' && node.value.type === 'TemplateLiteral') {
                    const expressions = node.value.expressions;
                    expressions.forEach(exp => {
                        if (exp) {
                            context.report({
                                node: exp,
                                loc: exp.loc,
                                message: "The template disallows expression."
                            });
                        }
                    });
                }
            }
        };
    }
};
