/**
 * @fileoverview Prevents duplication of field names.
 * @author Armano
 */
'use strict';

/* eslint-disable */

const utils = require('../utils');

/**
 * @typedef {import('../utils').GroupName} GroupName
 */

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------
/** @type {GroupName[]} */
const GROUP_NAMES = ['computed', 'initData', 'dataTypes', 'data'];

module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'disallow duplication of field names',
            categories: ['essential'],
            url: 'https://ecomfe.github.io/eslint-plugin-san/rules/no-dupe-keys.html'
        },
        fixable: null, // or "code" or "whitespace"
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
        const groups = new Set(GROUP_NAMES.concat(options.groups || []));

        // ----------------------------------------------------------------------
        // Public
        // ----------------------------------------------------------------------

        return utils.executeOnSan(context, obj => {
            const usedNames = [];
            const properties = utils.iterateProperties(obj, groups);

            for (const o of properties) {
                if (usedNames.indexOf(o.name) !== -1) {
                    context.report({
                        node: o.node,
                        message: "Duplicated key '{{name}}'.",
                        data: {
                            name: o.name
                        }
                    });
                }

                usedNames.push(o.name);
            }
        });
    }
};
