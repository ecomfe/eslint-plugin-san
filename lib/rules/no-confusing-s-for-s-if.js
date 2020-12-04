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
// Helpers
// ------------------------------------------------------------------------------

/**
 * Check whether the given `s-if` node is using the variable which is defined by the `s-for` directive.
 * @param {VDirective} vIf The `s-if` attribute node to check.
 * @returns {boolean} `true` if the `s-if` is using the variable which is defined by the `s-for` directive.
 */
function isUsingIterationVar(vIf) {
    const element = vIf.parent.parent;
    return Boolean(
        vIf.value &&
            vIf.value.references.some(reference =>
                element.variables.some(variable => variable.id.name === reference.id.name && variable.kind === 's-for')
            )
    );
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'disallow confusing `s-for` and `s-if` on the same element',
            categories: ['recommended'],
            url: 'https://eslint.vuejs.org/rules/no-confusing-s-for-s-if.html',
            replacedBy: ['no-use-s-if-with-s-for']
        },
        deprecated: true,
        fixable: null,
        schema: []
    },
    /** @param {RuleContext} context */
    create(context) {
        return utils.defineTemplateBodyVisitor(context, {
            "VAttribute[directive=true][key.name.name='if']"(node) {
                const element = node.parent.parent;

                if (utils.hasDirective(element, 'for') && !isUsingIterationVar(node)) {
                    context.report({
                        node,
                        loc: node.loc,
                        message: "This 's-if' should be moved to the wrapper element."
                    });
                }
            }
        });
    }
};
