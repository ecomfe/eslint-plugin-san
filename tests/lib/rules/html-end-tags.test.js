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

const rule = require('../../../lib/rules/html-end-tags');
const RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const tester = new RuleTester({
    parser: require.resolve('san-eslint-parser'),
    parserOptions: {ecmaVersion: 2015}
});

tester.run('html-end-tags', rule, {
    valid: [
        {
            filename: 'test.san',
            code: ''
        },
        {
            filename: 'test.san',
            code: '<template><div><div></div></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><p></p></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><br></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><input></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><img></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><self-closing-custom-element/></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><div/></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div a="b>test</div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><!--</div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><svg><![CDATA[test</svg></div></template>'
        }
    ],
    invalid: [
        {
            filename: 'test.san',
            code: '<template><div><div></div></template>',
            output: '<template><div><div></div></div></template>',
            errors: ["'<div>' should have end tag."]
        },
        {
            filename: 'test.san',
            code: '<template><div><p></div></template>',
            output: '<template><div><p></p></div></template>',
            errors: ["'<p>' should have end tag."]
        }
    ]
});
