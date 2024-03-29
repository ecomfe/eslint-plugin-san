/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

/* eslint-disable */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const indentCommon = require('../utils/indent-common');
const utils = require('../utils');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
    /** @param {RuleContext} context */
    create(context) {
        // 只在 .san 文件中有意义，indentCommon.defineVisitor 会做处理
        const tokenStore =
            context.parserServices.getTemplateBodyTokenStore && context.parserServices.getTemplateBodyTokenStore();
        const visitor = indentCommon.defineVisitor(context, tokenStore, {
            baseIndent: 1
        });

        return utils.defineTemplateBodyVisitor(context, visitor);
    },
    meta: {
        type: 'layout',
        docs: {
            description: 'enforce consistent indentation in `<template>`',
            categories: ['strongly-recommended'],
            url: 'https://ecomfe.github.io/eslint-plugin-san/rules/html-indent.html'
        },
        fixable: 'whitespace',
        schema: [
            {
                anyOf: [{type: 'integer', minimum: 1}, {enum: ['tab']}]
            },
            {
                type: 'object',
                properties: {
                    attribute: {type: 'integer', minimum: 0},
                    baseIndent: {type: 'integer', minimum: 0},
                    closeBracket: {
                        anyOf: [
                            {type: 'integer', minimum: 0},
                            {
                                type: 'object',
                                properties: {
                                    startTag: {type: 'integer', minimum: 0},
                                    endTag: {type: 'integer', minimum: 0},
                                    selfClosingTag: {type: 'integer', minimum: 0}
                                },
                                additionalProperties: false
                            }
                        ]
                    },
                    switchCase: {type: 'integer', minimum: 0},
                    alignAttributesVertically: {type: 'boolean'},
                    ignores: {
                        type: 'array',
                        items: {
                            allOf: [
                                {type: 'string'},
                                {not: {type: 'string', pattern: ':exit$'}},
                                {not: {type: 'string', pattern: '^\\s*$'}}
                            ]
                        },
                        uniqueItems: true,
                        additionalItems: false
                    }
                },
                additionalProperties: false
            }
        ]
    }
};
