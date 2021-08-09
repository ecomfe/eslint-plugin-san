/**
 * @author Toru Nagashima
 * @copyright 2017 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
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
            description: 'enforce valid `s-else-if` directives',
            categories: ['essential'],
            url: 'https://ecomfe.github.io/eslint-plugin-san/rules/valid-s-else-if.html'
        },
        fixable: null,
        schema: []
    },

    /** @param {RuleContext} context */
    create(context) {
        return utils.defineTemplateBodyVisitor(context, {

            /** @param {VDirective} node */
            'VAttribute[directive=true][key.name.name="else-if"]'(node) {
                const element = node.parent.parent;

                if (!utils.prevElementHasIf(element)) {
                    context.report({
                        node,
                        loc: node.loc,
                        message:
                            "'s-else-if' directives require being preceded by the element which has a 's-if' or 's-else-if' directive."
                    });
                }
                if (utils.hasDirective(element, 'if')) {
                    context.report({
                        node,
                        loc: node.loc,
                        message: "'s-else-if' and 's-if' directives can't exist on the same element."
                    });
                }
                if (utils.hasDirective(element, 'else')) {
                    context.report({
                        node,
                        loc: node.loc,
                        message: "'s-else-if' and 's-else' directives can't exist on the same element."
                    });
                }
                if (node.key.argument) {
                    context.report({
                        node,
                        loc: node.loc,
                        message: "'s-else-if' directives require no argument."
                    });
                }
                if (node.key.modifiers.length > 0) {
                    context.report({
                        node,
                        loc: node.loc,
                        message: "'s-else-if' directives require no modifier."
                    });
                }
                if (!node.value || utils.isEmptyValueDirective(node, context)) {
                    context.report({
                        node,
                        loc: node.loc,
                        message: "'s-else-if' directives require that attribute value."
                    });
                }
            }
        });
    }
};
