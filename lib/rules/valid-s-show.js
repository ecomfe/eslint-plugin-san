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
            description: 'enforce valid `s-show` directives',
            categories: ['essential'],
            url: 'https://ecomfe.github.io/eslint-plugin-san/rules/valid-s-show.html'
        },
        fixable: null,
        schema: []
    },
    /** @param {RuleContext} context */
    create(context) {
        return utils.defineTemplateBodyVisitor(context, {

            /** @param {VDirective} node */
            'VAttribute[directive=true][key.name.name="show"]'(node) {
                if (node.key.argument) {
                    context.report({
                        node,
                        loc: node.loc,
                        message: "'s-show' directives require no argument."
                    });
                }
                if (node.key.modifiers.length > 0) {
                    context.report({
                        node,
                        loc: node.loc,
                        message: "'s-show' directives require no modifier."
                    });
                }
                if (!node.value || utils.isEmptyValueDirective(node, context)) {
                    context.report({
                        node,
                        loc: node.loc,
                        message: "'s-show' directives require that attribute value."
                    });
                }
            }
        });
    }
};
