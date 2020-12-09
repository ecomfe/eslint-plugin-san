/**
 * @author Toru Nagashima
 * @copyright 2017 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-duplicate-attributes');
const RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const tester = new RuleTester({
    parser: require.resolve('san-eslint-parser'),
    parserOptions: {ecmaVersion: 2015}
});

tester.run('no-duplicate-attributes', rule, {
    valid: [
        {
            filename: 'test.san',
            code: ''
        },
        {
            filename: 'test.san',
            code: '<template><div><div foo :bar baz></div></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><div @click="foo" @click="bar"></div></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><div style :style></div></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><div class :class></div></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><div :class="a" class="b"></div></div></template>',
            options: [{allowCoexistStyle: true}]
        },
        {
            filename: 'test.san',
            code: '<template><div><div :style="a" style="b"></div></div></template>',
            options: [{allowCoexistStyle: true}]
        },
        {
            filename: 'test.san',
            code: '<template><my-component foo :[foo]></my-component></template>'
        },
        {
            filename: 'test.san',
            code: '<template><my-component :foo :[foo]></my-component></template>'
        }
    ],
    invalid: [
        {
          filename: 'test.san',
          code: '<template><div><div foo foo></div></div></template>',
          errors: ["Duplicate attribute 'foo'."]
        },
        {
            filename: 'test.san',
            code: '<template><div><div foo :foo></div></div></template>',
            errors: ["Duplicate attribute 'foo'."]
        },
        {
            filename: 'test.san',
            code: '<template><div><div style :style></div></div></template>',
            errors: ["Duplicate attribute 'style'."],
            options: [{allowCoexistStyle: false}]
        },
        {
            filename: 'test.san',
            code: '<template><div><div class :class></div></div></template>',
            errors: ["Duplicate attribute 'class'."],
            options: [{allowCoexistClass: false}]
        },
        {
            filename: 'test.san',
            code: '<template><div><div :style style></div></div></template>',
            errors: ["Duplicate attribute 'style'."],
            options: [{allowCoexistStyle: false}]
        },
        {
            filename: 'test.san',
            code: '<template><div><div :class class></div></div></template>',
            errors: ["Duplicate attribute 'class'."],
            options: [{allowCoexistClass: false}]
        }
    ]
});
