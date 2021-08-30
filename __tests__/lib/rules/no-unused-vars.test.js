/**
 * @author 薛定谔的猫<hh_2013@foxmail.com>
 * @copyright 2017 薛定谔的猫. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/no-unused-vars');

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const tester = new RuleTester({
    parser: require.resolve('san-eslint-parser'),
    parserOptions: {ecmaVersion: 2015}
});

tester.run('no-unused-vars', rule, {
    valid: [
        {
            filename: 'test.san',
            code: '<template><ol s-for="i in 5"><li><slot var-x="i"></slot></li></ol></template>'
        },
        {
            filename: 'test.san',
            code: '<template><ol s-for="i in 5"><li>{{i}}</li></ol></template>'
        },
        {
            filename: 'test.san',
            code: '<template><ol s-for="i, j in 5"><li>{{j}}</li></ol></template>'
        },
        {
            filename: 'test.san',
            code: '<template><ol s-for="i, j in 5" class="{{j}}"><li>1</li></ol></template>'
        },
        {
            filename: 'test.san',
            code: '<template s-for="i in 5"><comp s-for="j in 10">{{i}}{{j}}</comp></template>'
        },
        {
            filename: 'test.san',
            code: '<template><ol s-for="i in data"><li s-for="f in i">{{ f.bar.baz }}</li></ol></template>'
        },
        {
            filename: 'test.san',
            code: '<template><template scope="props">{{props}}</template></template>'
        },
        {
            filename: 'test.san',
            code: '<template><template scope="props"><span s-if="props"></span></template></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div s-for="item, key in items" key="{{key}}">{{item.name}}</div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div s-for="x in foo">{{value | f(x)}}</div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div s-for="_ in foo" ></div></template>',
            options: [{ignorePattern: '^_'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-for="ignorei in foo" ></div></template>',
            options: [{ignorePattern: '^ignore'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-for="thisisignore in foo" ></div></template>',
            options: [{ignorePattern: 'ignore$'}]
        }
    ],
    invalid: [
        {
            filename: 'test.san',
            code: '<template><ol s-for="i in 5"><li></li></ol></template>',
            errors: ["'i' is defined but never used."]
        },
        {
            filename: 'test.san',
            code: '<template><div s-for="i in 5"><comp s-for="j in 10">{{i}}{{i}}</comp></div></template>',
            errors: ["'j' is defined but never used."]
        },
        {
            filename: 'test.san',
            code: '<template><ol s-for="i in data"><li s-for="f in i"></li></ol></template>',
            errors: ["'f' is defined but never used."]
        },
        {
            filename: 'test.san',
            code: '<template><div s-for="a, b in foo"></div></template>',
            errors: [
                "'a' is defined but never used.",
                "'b' is defined but never used."
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div s-for="a, b in foo">{{a}}</div></template>',
            errors: ["'b' is defined but never used."]
        },
        {
            filename: 'test.san',
            code: '<template><div s-for="item, key in items" key="{{item.id}}">{{item.name}}</div></template>',
            errors: ["'key' is defined but never used."]
        },
        {
            filename: 'test.san',
            code: '<template><div s-for="x in items">{{value | x}}</div></template>',
            errors: [
                {
                    message: "'x' is defined but never used.",
                    suggestions: [
                        {
                            desc: 'Replace the x with _x',
                            output: '<template><div s-for="_x in items">{{value | x}}</div></template>'
                        }
                    ]
                }
            ],
            options: [{ignorePattern: '^_'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-for="x in items">{{value}}</div></template>',
            options: [{ignorePattern: 'ignore$'}],
            errors: ["'x' is defined but never used."]
        },
        {
            filename: 'test.san',
            code: '<template><div s-for="_i in foo" ></div></template>',
            errors: ["'_i' is defined but never used."]
        },
        {
            filename: 'test.san',
            code: '<template><div s-for="a, _i in foo" ></div></template>',
            options: [{ignorePattern: '^_'}],
            errors: ["'a' is defined but never used."]
        }
    ]
});
