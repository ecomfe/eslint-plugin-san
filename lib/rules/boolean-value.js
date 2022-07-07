/**
 * @fileoverview Define a style for the props casing in templates.
 * @author Armano
 */
'use strict';

/* eslint-disable */
// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------
const utils = require('../utils');

// ------------------------------------------------------------------------------
// Helper
// ------------------------------------------------------------------------------
function isAlways(configuration, exceptions, propName) {
    const isException = exceptions.has(propName);
    if (configuration === ALWAYS) {
        return !isException;
    }
    return isException;
}

function isNever(configuration, exceptions, propName) {
    const isException = exceptions.has(propName);
    if (configuration === NEVER) {
        return !isException;
    }
    return isException;
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------
const exceptionsSchema = {
    type: 'array',
    items: {type: 'string', minLength: 1},
    uniqueItems: true
};

const ALWAYS = 'always';
const NEVER = 'never';

module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            description: '',
            categories: ['strongly-recommended'],
            url: 'https://ecomfe.github.io/eslint-plugin-san/rules/boolean-value.html'
        },
        fixable: 'code',
        // TODO
        schema: {
            anyOf: [
                {
                    type: 'array',
                    items: [{enum: [ALWAYS, NEVER]}],
                    additionalItems: false
                },
                {
                    type: 'array',
                    items: [
                        {
                            enum: [ALWAYS]
                        },
                        {
                            type: 'object',
                            additionalProperties: false,
                            properties: {
                                [NEVER]: exceptionsSchema
                            }
                        }
                    ],
                    additionalItems: false
                },
                {
                    type: 'array',
                    items: [
                        {
                            enum: [NEVER]
                        },
                        {
                            type: 'object',
                            additionalProperties: false,
                            properties: {
                                [ALWAYS]: exceptionsSchema
                            }
                        }
                    ],
                    additionalItems: false
                }
            ]
        },
        messages: {
            omitBoolean: 'Value must be omitted for boolean attributes{{name}}',
            omitBoolean_noMessage: 'Value must be omitted for boolean attributes',
            setBoolean: 'Value must be set for boolean attributes{{name}}',
            setBoolean_noMessage: 'Value must be set for boolean attributes'
        }
    },
    /** @param {RuleContext} context */
    create(context) {
        const sourceCode = context.getSourceCode();
        const configuration = context.options[0] || NEVER;
        const configObject = context.options[1] || {};
        const exceptions = new Set((configuration === ALWAYS ? configObject[NEVER] : configObject[ALWAYS]) || []);

        return utils.defineTemplateBodyVisitor(context, {
            VAttribute(node) {
                if (!node) {
                    return {};
                }
                const propName = node.key.name;
                const value = node.value;

                if (isAlways(configuration, exceptions, propName) && value === null) {
                    const message = 'Value must be set for boolean attributes {{name}}';
                    context.report({
                        node,
                        loc: node.loc,
                        message,
                        data: {
                            name: node.key.rawName
                        },
                        fix: fixer => {
                            return fixer.insertTextAfter(node, '="{{true}}"');
                        }
                    });
                }

                if (isNever(configuration, exceptions, propName) && value) {
                    const message = 'Value must be omitted for boolean attributes {{name}}';
                    if (/\{[\s]*\{[\s]*true[\s]*\}[\s]*\}/.test(node.value.value)) {
                        context.report({
                            node,
                            loc: node.loc,
                            message,
                            data: {
                                name: node.key.rawName
                            },
                            fix: fixer => {
                                const name = node.key.name;
                                const relativeStartLoc = name.length;
                                const startLoc = node.range[0] + relativeStartLoc;
                                const range = [startLoc, node.value.range[1]];
                                return fixer.removeRange(range);
                            }
                        });
                    }
                }
            }
        });
    }
};
