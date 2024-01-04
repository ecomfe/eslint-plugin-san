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
            description: 'disallow mustaches in `<textarea>`',
            categories: ['essential'],
            url: 'https://ecomfe.github.io/eslint-plugin-san/rules/no-textarea-mustache.html'
        },
        fixable: null,
        schema: []
    },
    /** @param {RuleContext} context */
    create(context) {
        return utils.defineTemplateBodyVisitor(context, {
            /** @param {VExpressionContainer} node */
            "VElement[name='textarea'] VExpressionContainer"(node) {
                if (node.parent.type !== 'VElement') {
                    return;
                }

                context.report({
                    node,
                    loc: node.loc,
                    message: "Unexpected mustache. Use `{= expression =}` instead."
                });
            }
        });
    }
};