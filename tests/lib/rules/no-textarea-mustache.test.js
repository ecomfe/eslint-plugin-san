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
const rule = require('../../../lib/rules/no-textarea-mustache');

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const tester = new RuleTester({
    parser: require.resolve('san-eslint-parser'),
    parserOptions: {ecmaVersion: 2015}
});

tester.run('no-textarea-mustache', rule, {
    valid: [
        {
            filename: 'test.san',
            code: ''
        },
        {
            filename: 'test.san',
            code: '<template><div><textarea value="{= line =}"></textarea></div></template>'
        }
    ],
    invalid: [
        {
            filename: 'test.san',
            code: '<template><div><textarea>{{text}}</textarea></div></template>',
            errors: ["Unexpected mustache. Use `{= expression =}` instead."]
        },
        {
            filename: 'test.san',
            code: '<template><div><textarea>{{text}} and {{text}}</textarea></div></template>',
            errors: ["Unexpected mustache. Use `{= expression =}` instead.", "Unexpected mustache. Use `{= expression =}` instead."]
        }
    ]
});
