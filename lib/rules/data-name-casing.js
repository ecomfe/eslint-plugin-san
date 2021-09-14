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
const GROUP_NAMES = ['dataTypes', 'initData', 'computed'];

module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'require datatypes is camelcase',
            categories: ['essential'],
            url: ''
        },
        fixable: null,
        schema: []
    },
    /** @param {RuleContext} context */
    create(context) {
        const groups = new Set(GROUP_NAMES);

        // ----------------------------------------------------------------------
        // Public
        // ----------------------------------------------------------------------

        return utils.executeOnSan(context, obj => {
            const properties = utils.iterateProperties(obj, groups);
            
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
