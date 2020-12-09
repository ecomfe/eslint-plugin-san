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

const rule = require('../../../lib/rules/valid-s-else-if');
const RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const tester = new RuleTester({
    parser: require.resolve('san-eslint-parser'),
    parserOptions: {ecmaVersion: 2015}
});

tester.run('valid-s-else-if', rule, {
    valid: [
        {
            filename: 'test.san',
            code: ''
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-if="foo"></div><div s-else-if="foo"></div></div></template>'
        },
        {
            filename: 'test.san',
            code:
                '<template><div><div s-if="foo"></div><div s-else-if="foo"></div><div s-else-if="foo"></div></div></template>'
        },
        {
            filename: 'test.san',
            code: `<template>\n    <c1 s-if="1" />\n    <c2 s-else-if="1" />\n    <c3 s-else />\n</template>`
        },
        // parsing error
        {
            filename: 'parsing-error.san',
            code: '<template><div s-if="foo"></div><div s-else-if="."></div></template>'
        },
        // comment value (parsing error)
        {
            filename: 'comment-value.san',
            code: '<template><div s-if="foo"></div><div s-else-if="/**/"></div></template>'
        }
    ],
    invalid: [
        {
            filename: 'test.san',
            code: '<template><template s-else-if="foo"><div></div></template></template>',
            errors: [
                "'s-else-if' directives require being preceded by the element which has a 's-if' or 's-else-if' directive."
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div s-else-if="foo"></div></template>',
            errors: [
                "'s-else-if' directives require being preceded by the element which has a 's-if' or 's-else-if' directive."
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-else-if="foo"></div></div></template>',
            errors: [
                "'s-else-if' directives require being preceded by the element which has a 's-if' or 's-else-if' directive."
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div><div></div><div s-else-if="foo"></div></div></template>',
            errors: [
                "'s-else-if' directives require being preceded by the element which has a 's-if' or 's-else-if' directive."
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div><div if="foo"></div><div s-else-if="foo"></div></div></template>',
            errors: [
                "'s-else-if' directives require being preceded by the element which has a 's-if' or 's-else-if' directive."
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-if="foo"></div><div></div><div s-else-if="foo"></div></div></template>',
            errors: [
                "'s-else-if' directives require being preceded by the element which has a 's-if' or 's-else-if' directive."
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-if="foo"></div><div s-else-if="foo" s-if="bar"></div></div></template>',
            errors: ["'s-else-if' and 's-if' directives can't exist on the same element."]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-if="foo"></div><div s-else-if="foo" s-else></div></div></template>',
            errors: ["'s-else-if' and 's-else' directives can't exist on the same element."]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-if="foo"></div><div s-else-if:aaa="foo"></div></div></template>',
            errors: ["'s-else-if' directives require no argument."]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-if="foo"></div><div s-else-if.aaa="foo"></div></div></template>',
            errors: ["'s-else-if' directives require no modifier."]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-if="foo"></div><div s-else-if></div></div></template>',
            errors: ["'s-else-if' directives require that attribute value."]
        },
        // empty value
        {
            filename: 'empty-value.san',
            code: '<template><div s-if="foo"></div><div s-else-if=""></div></template>',
            errors: ["'s-else-if' directives require that attribute value."]
        }
    ]
});
