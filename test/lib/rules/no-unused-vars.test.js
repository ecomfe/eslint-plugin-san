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
            code: '<template><ol s-for="i in 5"><li>{{i}}</li></ol></template>'
        },
        {
            code: '<template><ol s-for="i in 5"><li :prop="i"></li></ol></template>'
        },
        {
            code: '<template s-for="i in 5"><comp s-for="j in 10">{{i}}{{j}}</comp></template>'
        },
        {
            code: '<template><ol s-for="i in data"><li s-for="f in i">{{ f.bar.baz }}</li></ol></template>'
        },
        {
            code: '<template><template scope="props">{{props}}</template></template>'
        },
        {
            code: '<template><template scope="props"><span s-if="props"></span></template></template>'
        },
        {
            code: '<template><div s-for="(item, key) in items" :key="key">{{item.name}}</div></template>'
        },
        {
            code: '<template><div s-for="(v, i, c) in foo">{{c}}</div></template>'
        },
        {
            code: '<template><div s-for="x in foo">{{value | f(x)}}</div></template>'
        },
        {
            code: '<template><div s-for="x in foo" :[x]></div></template>'
        },
        {
            code: '<template><div s-for="_ in foo" ></div></template>',
            options: [{ignorePattern: '^_'}]
        },
        {
            code: '<template><div s-for="ignorei in foo" ></div></template>',
            options: [{ignorePattern: '^ignore'}]
        },
        {
            code: '<template><div s-for="thisisignore in foo" ></div></template>',
            options: [{ignorePattern: 'ignore$'}]
        }
    ],
    invalid: [
        {
            code: '<template><ol s-for="i in 5"><li></li></ol></template>',
            errors: ["'i' is defined but never used."]
        },
        {
            code: '<template><template scope="props"></template></template>',
            errors: ["'props' is defined but never used."]
        },
        {
            code: '<template><span slot-scope="props"></span></template>',
            errors: ["'props' is defined but never used."]
        },
        {
            code: '<template><span><template scope="props"></template></span></template>',
            errors: ["'props' is defined but never used."]
        },
        {
            code: '<template><div s-for="i in 5"><comp s-for="j in 10">{{i}}{{i}}</comp></div></template>',
            errors: ["'j' is defined but never used."]
        },
        {
            code: '<template><ol s-for="i in data"><li s-for="f in i"></li></ol></template>',
            errors: ["'f' is defined but never used."]
        },
        {
            code: '<template><div s-for="(a, b, c) in foo"></div></template>',
            errors: [
                "'a' is defined but never used.",
                "'b' is defined but never used.",
                "'c' is defined but never used."
            ]
        },
        {
            code: '<template><div s-for="(a, b, c) in foo">{{a}}</div></template>',
            errors: ["'b' is defined but never used.", "'c' is defined but never used."]
        },
        {
            code: '<template><div s-for="(a, b, c) in foo">{{b}}</div></template>',
            errors: ["'c' is defined but never used."]
        },
        {
            code: '<template><div s-for="(item, key) in items" :key="item.id">{{item.name}}</div></template>',
            errors: ["'key' is defined but never used."]
        },
        {
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
            code: '<template><div s-for="x in items">{{value}}</div></template>',
            options: [{ignorePattern: 'ignore$'}],
            errors: ["'x' is defined but never used."]
        },
        {
            code: '<template><span slot-scope="props"></span></template>',
            errors: ["'props' is defined but never used."],
            options: [{ignorePattern: '^ignore'}]
        },
        {
            code: '<template><span><template scope="props"></template></span></template>',
            errors: ["'props' is defined but never used."],
            options: [{ignorePattern: '^ignore'}]
        },
        {
            code: '<template><div s-for="_i in foo" ></div></template>',
            errors: ["'_i' is defined but never used."]
        },
        {
            code: '<template><div s-for="(a, _i) in foo" ></div></template>',
            options: [{ignorePattern: '^_'}],
            errors: ["'a' is defined but never used."]
        },
        {
            code: '<template><my-component s-slot="a" >{{d}}</my-component></template>',
            errors: ["'a' is defined but never used."]
        },
        {
            code: '<template><my-component s-for="i in foo" s-slot="a" >{{a}}</my-component></template>',
            errors: ["'i' is defined but never used."]
        },
        {
            code: '<template><my-component s-for="i in foo" s-slot="a" >{{i}}</my-component></template>',
            errors: ["'a' is defined but never used."]
        },
        {
            code: '<template><div s-for="({a, b}, [c, d], e, f) in foo" >{{f}}</div></template>',
            errors: [
                "'a' is defined but never used.",
                "'b' is defined but never used.",
                "'c' is defined but never used.",
                "'d' is defined but never used."
            ]
        },
        {
            code: '<template><div s-for="({a, b}, c, [d], e, f) in foo" >{{f}}</div></template>',
            errors: [
                "'a' is defined but never used.",
                "'b' is defined but never used.",
                "'d' is defined but never used."
            ]
        },
        {
            code: '<template><my-component s-slot="{a, b, c, d}" >{{d}}</my-component></template>',
            errors: [
                "'a' is defined but never used.",
                "'b' is defined but never used.",
                "'c' is defined but never used."
            ]
        },
        {
            code: '<template><div s-for="({a, b: bar}, c = 1, [d], e, f) in foo" >{{f}}</div></template>',
            errors: [
                "'a' is defined but never used.",
                "'bar' is defined but never used.",
                "'d' is defined but never used."
            ]
        }
    ]
});
