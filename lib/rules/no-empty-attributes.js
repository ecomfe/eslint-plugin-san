/**
 * @author jinjingxuan
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

/** @type {GroupName[]} */
const GROUP_NAMES = ['class', 'style'];

module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'disallow empty attribute',
            categories: ['essential'],
            url: ''
        },
        fixable: null,
        schema: [
            {
                type: 'object',
                properties: {
                    groups: {
                        type: 'array'
                    }
                },
                additionalProperties: false
            }
        ]
    },
    /** @param {RuleContext} context */
    create(context) {
        const options = context.options[0] || {};
        const groups = GROUP_NAMES.concat(options.groups || []);

        return utils.defineTemplateBodyVisitor(context, {
            VAttribute(node) {
                if (groups.includes(node.key.name) 
                    && (node.value === null || node.value.value === '')
                ) {
                    context.report({
                        node: node,
                        message: "disallow attribute '{{name}}' is empty",
                        data: {
                            name: node.key.name
                        }
                    });
                }
            }
        });
    }
};
