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
const rule = require('../../../lib/rules/no-confusing-s-for-s-if');

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const tester = new RuleTester({
    parser: require.resolve('san-eslint-parser'),
    parserOptions: {ecmaVersion: 2015}
});

tester.run('no-confusing-s-for-s-if', rule, {
    valid: [
        {
            filename: 'test.san',
            code: ''
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-for="x in list" s-if="x"></div></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-for="x in list" s-if="x.foo"></div></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-for="(x,i) in list" s-if="i%2==0"></div></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="shown"><div s-for="(x,i) in list"></div></div></template>'
        }
    ],
    invalid: [
        {
            filename: 'test.san',
            code: '<template><div><div s-for="x in list" s-if="shown"></div></div></template>',
            errors: ["This 's-if' should be moved to the wrapper element."]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-for="x in list" s-if="list.length&gt;0"></div></div></template>',
            errors: ["This 's-if' should be moved to the wrapper element."]
        }
    ]
});
