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
            description: 'enforce valid `s-for` directives',
            categories: ['essential'],
            url: 'https://ecomfe.github.io/eslint-plugin-san/rules/valid-s-for.html'
        },
        fixable: null,
        schema: []
    },
    /** @param {RuleContext} context */
    create(context) {
        if (!utils.isSanFile(context.getFilename())) {
            return {};
        }
        return utils.defineTemplateBodyVisitor(context, {
            /** @param {VDirective} node */
            "VAttribute[directive=true][key.name.name='for']"(node) {
                if (node.key.argument) {
                    // s-for:a san 没有这种语法
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

                // TODO: san-eslint-parser 需要增加便于对下面语法进行检测的语法节点
                // s-for="item, in list"
                // s-for=", index in list"
                // s-for="(item, index) in list"
                // s-for="item of list"
            }
        });
    }
};
