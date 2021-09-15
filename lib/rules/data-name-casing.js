/**
 * @author jinjingxuan
 */
'use strict';

/* eslint-disable */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const utils = require('../utils');
const {isCamelCase} = require('../utils/casing');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

/** @type {GroupName[]} */
const GROUP_NAMES = new Set(['dataTypes', 'initData', 'computed']);

module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'require datatypes is camelcase',
            categories: ['essential'],
            url: 'https://ecomfe.github.io/eslint-plugin-san/rules/data-name-casing.html'
        },
        fixable: null,
        schema: []
    },
    /** @param {RuleContext} context */
    create(context) {

        // ----------------------------------------------------------------------
        // Public
        // ----------------------------------------------------------------------

        return utils.executeOnSan(context, obj => {
            const properties = utils.iterateProperties(obj, GROUP_NAMES);
            
            for (const o of properties) {
                if (!isCamelCase(o.name)) {
                    context.report({
                        node: o.node,
                        message: "{{group}} '{{name}}' must be camel case",
                        data: {
                            name: o.name,
                            group: o.groupName,
                        }
                    });
                }
            }
        });
    }
};
