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
            description: 'enforce valid `s-if` directives',
            categories: ['essential'],
            url: 'https://ecomfe.github.io/eslint-plugin-san/rules/valid-s-if.html'
        },
        fixable: null,
        schema: []
    },

    /** @param {RuleContext} context */
    create(context) {
        return utils.defineTemplateBodyVisitor(context, {

            /** @param {VDirective} node */
            'VAttribute[directive=true][key.name.name="if"]'(node) {
                const element = node.parent.parent;

                if (utils.hasDirective(element, 'else')) {
                    context.report({
                        node,
                        loc: node.loc,
                        message: "'s-if' and 's-else' directives can't exist on the same element. You may want 's-else-if' directives."
                    });
                }
                if (utils.hasDirective(element, 'else-if')) {
                    context.report({
                        node,
                        loc: node.loc,
                        message: "'s-if' and 's-else-if' directives can't exist on the same element."
                    });
                }
                if (node.key.argument) {
                    context.report({
                        node,
                        loc: node.loc,
                        message: "'s-if' directives require no argument."
                    });
                }
                if (node.key.modifiers.length > 0) {
                    context.report({
                        node,
                        loc: node.loc,
                        message: "'s-if' directives require no modifier."
                    });
                }
                if (!node.value || utils.isEmptyValueDirective(node, context)) {
                    context.report({
                        node,
                        loc: node.loc,
                        message: "'s-if' directives require that attribute value."
                    });
                }
            }
        });
    }
};
