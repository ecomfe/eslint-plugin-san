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
 * Check whether the given attribute is using the variables which are defined by `s-for` directives.
 * @param {VDirective} vFor The attribute node of `s-for` to check.
 * @param {VDirective} vBindKey The attribute node of `s-bind:key` to check.
 * @returns {boolean} `true` if the node is using the variables which are defined by `s-for` directives.
 */
function isUsingIterationVar(vFor, vBindKey) {
    if (vBindKey.value == null) {
        return false;
    }
    const references = vBindKey.value.references;
    const variables = vFor.parent.parent.variables;
    return references.some(reference =>
        variables.some(variable => variable.id.name === reference.id.name && variable.kind === 's-for')
    );
}

/**
 * Check the child element in tempalte s-for about `s-bind:key` attributes.
 * @param {RuleContext} context The rule context to report.
 * @param {VDirective} vFor The attribute node of `s-for` to check.
 * @param {VElement} child The child node to check.
 */
function checkChildKey(context, vFor, child) {
    const childFor = utils.getDirective(child, 'for');
    // if child has s-for, check if parent iterator is used in s-for
    if (childFor != null) {
        const childForRefs = (childFor.value && childFor.value.references) || [];
        const variables = vFor.parent.parent.variables;
        const usedInFor = childForRefs.some(cref =>
            variables.some(variable => cref.id.name === variable.id.name && variable.kind === 's-for')
        );
        // if parent iterator is used, skip other checks
        // iterator usage will be checked later by child s-for
        if (usedInFor) {
            return;
        }
    }
    // otherwise, check if parent iterator is directly used in child's key
    checkKey(context, vFor, child);
}

/**
 * Check the given element about `s-bind:key` attributes.
 * @param {RuleContext} context The rule context to report.
 * @param {VDirective} vFor The attribute node of `s-for` to check.
 * @param {VElement} element The element node to check.
 */
function checkKey(context, vFor, element) {
    const vBindKey = utils.getDirective(element, 'bind', 'key');

    if (vBindKey == null && element.name === 'template') {
        for (const child of element.children) {
            if (child.type === 'VElement') {
                checkChildKey(context, vFor, child);
            }
        }
        return;
    }

    if (utils.isCustomComponent(element) && vBindKey == null) {
        context.report({
            node: element.startTag,
            loc: element.startTag.loc,
            message: "Custom elements in iteration require 's-bind:key' directives."
        });
    }
    if (vBindKey != null && !isUsingIterationVar(vFor, vBindKey)) {
        context.report({
            node: vBindKey,
            loc: vBindKey.loc,
            message: "Expected 's-bind:key' directive to use the variables which are defined by the 's-for' directive."
        });
    }
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'enforce valid `s-for` directives',
            categories: ['essential'],
            url: 'https://ecomfe.github.io/eslint-plugin-san/rules/valid-s-for.html'
        },
        fixable: null,
        schema: []
    },
    /** @param {RuleContext} context */
    create(context) {
        const sourceCode = context.getSourceCode();

        return utils.defineTemplateBodyVisitor(context, {
            /** @param {VDirective} node */
            "VAttribute[directive=true][key.name.name='for']"(node) {
                const element = node.parent.parent;

                checkKey(context, node, element);

                if (node.key.argument) {
                    context.report({
                        node,
                        loc: node.loc,
                        message: "'s-for' directives require no argument."
                    });
                }
                if (node.key.modifiers.length > 0) {
                    context.report({
                        node,
                        loc: node.loc,
                        message: "'s-for' directives require no modifier."
                    });
                }
                if (!node.value || utils.isEmptyValueDirective(node, context)) {
                    context.report({
                        node,
                        loc: node.loc,
                        message: "'s-for' directives require that attribute value."
                    });
                    return;
                }

                const expr = node.value.expression;
                if (expr == null) {
                    return;
                }
                if (expr.type !== 'VForExpression') {
                    context.report({
                        node: node.value,
                        loc: node.value.loc,
                        message: "'s-for' directives require the special syntax '<alias> in <expression>'."
                    });
                    return;
                }

                const lhs = expr.left;
                const value = lhs[0];
                const key = lhs[1];
                const index = lhs[2];

                if (value === null) {
                    context.report({
                        node: expr,
                        message: "Invalid alias ''."
                    });
                }
                if (key !== undefined && (!key || key.type !== 'Identifier')) {
                    context.report({
                        node: key || expr,
                        loc: key && key.loc,
                        message: "Invalid alias '{{text}}'.",
                        data: {text: key ? sourceCode.getText(key) : ''}
                    });
                }
                if (index !== undefined && (!index || index.type !== 'Identifier')) {
                    context.report({
                        node: index || expr,
                        loc: index && index.loc,
                        message: "Invalid alias '{{text}}'.",
                        data: {text: index ? sourceCode.getText(index) : ''}
                    });
                }
            }
        });
    }
};
