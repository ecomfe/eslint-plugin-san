/**
 * @author Toru Nagashima
 * @copyright 2017 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/valid-s-for');
const RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const tester = new RuleTester({
    parser: require.resolve('san-eslint-parser'),
    parserOptions: {ecmaVersion: 2015}
});

tester.run('valid-s-for', rule, {
    valid: [
        {
            filename: 'test.san',
            code: ''
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-for="x in list"></div></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><your-component s-for="x in list"></your-component></div></template>'
        },
        // parsing error
        {
            filename: 'parsing-error.san',
            code: '<template><div s-for="."></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><template s-for="xin list"><div></div></template></div></template>'
        },
        // comment value (parsing error)
        {
            filename: 'comment-value.san',
            code: '<template><div s-for="/**/"></div></template>'
        }
    ],
    invalid: [
        {
            filename: 'test.san',
            code: '<template><div><div s-for:aaa="x in list"></div></div></template>',
            errors: ["'s-for' directives require no argument."]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-for.aaa="x in list"></div></div></template>',
            errors: ["'s-for' directives require no modifier."]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-for></div></div></template>',
            errors: ["'s-for' directives require that attribute value."]
        },
        // empty value
        {
            filename: 'empty-value.san',
            code: '<template><div s-for=""></div></template>',
            errors: ["'s-for' directives require that attribute value."]
        }
    ]
});
