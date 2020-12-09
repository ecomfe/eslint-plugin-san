/**
 * @author Toru Nagashima
 * @copyright 2017 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/valid-s-else');
const RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const tester = new RuleTester({
    parser: require.resolve('san-eslint-parser'),
    parserOptions: {ecmaVersion: 2015}
});

tester.run('valid-s-else', rule, {
    valid: [
        {
            filename: 'test.san',
            code: ''
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-if="foo"></div><div s-else></div></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-if="foo"></div><div s-else-if="foo"></div><div s-else></div></div></template>'
        },
        {
            filename: 'test.san',
            code: `<template>\n    <c1 s-if="1" />\n    <c2 s-else-if="1" />\n    <c3 s-else />\n</template>`
        }
    ],
    invalid: [
        {
            filename: 'test.san',
            code: '<template><template s-else><div></div></template></template>',
            // eslint-disable-next-line
            errors: ["'s-else' directives require being preceded by the element which has a 's-if' or 's-else-if' directive."]
        },
        {
            filename: 'test.san',
            code: '<template><div s-else></div></template>',
            // eslint-disable-next-line
            errors: ["'s-else' directives require being preceded by the element which has a 's-if' or 's-else-if' directive."]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-else></div></div></template>',
            // eslint-disable-next-line
            errors: ["'s-else' directives require being preceded by the element which has a 's-if' or 's-else-if' directive."]
        },
        {
            filename: 'test.san',
            code: '<template><div><div></div><div s-else></div></div></template>',
            errors: ["'s-else' directives require being preceded by the element which has a 's-if' or 's-else-if' directive."]
        },
        {
            filename: 'test.san',
            code: '<template><div><div if="foo"></div><div s-else></div></div></template>',
            errors: ["'s-else' directives require being preceded by the element which has a 's-if' or 's-else-if' directive."]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-if="foo"></div><div></div><div s-else></div></div></template>',
            errors: [
                "'s-else' directives require being preceded by the element which has a 's-if' or 's-else-if' directive."
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-if="foo"></div><div s-else s-if="bar"></div></div></template>',
            errors: [
                "'s-else' and 's-if' directives can't exist on the same element. You may want 's-else-if' directives."
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-if="foo"></div><div s-else s-else-if="foo"></div></div></template>',
            errors: ["'s-else' and 's-else-if' directives can't exist on the same element."]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-if="foo"></div><div s-else:aaa></div></div></template>',
            errors: ["'s-else' directives require no argument."]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-if="foo"></div><div s-else.aaa></div></div></template>',
            errors: ["'s-else' directives require no modifier."]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-if="foo"></div><div s-else="foo"></div></div></template>',
            errors: ["'s-else' directives require no attribute value."]
        },
        // parsing error
        {
            filename: 'parsing-error.san',
            code: '<template><div s-if="foo"></div><div s-else="."></div></template>',
            errors: ["'s-else' directives require no attribute value."]
        },
        // comment value
        {
            filename: 'comment-value.san',
            code: '<template><div s-if="foo"></div><div s-else="/**/"></div></template>',
            errors: ["'s-else' directives require no attribute value."]
        },
        // empty value
        {
            filename: 'empty-value.san',
            code: '<template><div s-if="foo"></div><div s-else=""></div></template>',
            errors: ["'s-else' directives require no attribute value."]
        }
    ]
});
