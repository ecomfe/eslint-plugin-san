/**
 * @fileoverview Prevent overwrite reserved keys
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

const RESERVED_KEYS = require('../utils/san-reserved.json');
/** @type {GroupName[]} */
const GROUP_NAMES = ['dataTypes', 'computed', 'initData', 'data'];

module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'disallow overwriting reserved keys',
            categories: ['essential'],
            url: 'https://ecomfe.github.io/eslint-plugin-san/rules/no-reserved-keys.html'
        },
        fixable: null,
        schema: [
            {
                type: 'object',
                properties: {
                    reserved: {
                        type: 'array'
                    },
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
        const reservedKeys = new Set(RESERVED_KEYS.concat(options.reserved || []));
        const groups = new Set(GROUP_NAMES.concat(options.groups || []));

        // ----------------------------------------------------------------------
        // Public
        // ----------------------------------------------------------------------

        return utils.executeOnSan(context, obj => {
            // modify by kidnes
            for (const item of obj.properties) {
                if (item.type !== 'Property') {
                    continue;
                }

                const name = utils.getStaticPropertyName(item);
                if (!name || RESERVED_KEYS.indexOf(name) === -1) continue;

                context.report({
                    node: item,
                    message: "Key '{{name}}' is reserved.",
                    data: {
                        name
                    }
                });
            }

            const properties = utils.iterateProperties(obj, groups);
            for (const o of properties) {
                if ((o.groupName === 'data' || o.groupName === 'initData') && o.name[0] === '_') {
                    context.report({
                        node: o.node,
                        message: "Keys starting with with '_' are reserved in '{{name}}' group.",
                        data: {
                            name: o.name
                        }
                    });
                } else if (reservedKeys.has(o.name)) {
                    context.report({
                        node: o.node,
                        message: "Key '{{name}}' is reserved.",
                        data: {
                            name: o.name
                        }
                    });
                }
            }
        });
    }
};
