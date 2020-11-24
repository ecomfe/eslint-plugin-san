/**
 * @author Toru Nagashima
 * @copyright 2017 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const RuleTester = require('eslint').RuleTester;
const requireRule = require('../../../lib/utils/utils').requireRule;
const rule = requireRule('valid-s-show');

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const tester = new RuleTester({
    parser: require.resolve('san-eslint-parser'),
    parserOptions: {ecmaVersion: 2015}
});

tester.run('valid-s-show', rule, {
    valid: [
        {
            filename: 'test.san',
            code: ''
        },
        {
            filename: 'test.san',
            code: '<template><div s-show="foo"></div></template>'
        },
        // parsing error
        {
            filename: 'parsing-error.san',
            code: '<template><MyComponent s-show="." /></template>'
        },
        // comment value (parsing error)
        {
            filename: 'comment-value.san',
            code: '<template><MyComponent s-show="/**/" /></template>'
        }
    ],
    invalid: [
        {
            filename: 'test.san',
            code: '<template><div s-show:aaa="foo"></div></template>',
            errors: ["'s-show' directives require no argument."]
        },
        {
            filename: 'test.san',
            code: '<template><div s-show.aaa="foo"></div></template>',
            errors: ["'s-show' directives require no modifier."]
        },
        {
            filename: 'test.san',
            code: '<template><div s-show></div></template>',
            errors: ["'s-show' directives require that attribute value."]
        },
        // empty value
        {
            filename: 'empty-value.san',
            code: '<template><div s-show=""></div></template>',
            errors: ["'s-show' directives require that attribute value."]
        }
    ]
});
