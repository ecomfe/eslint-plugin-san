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
            code: '<template><div><div s-for="x of list"></div></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-for="(x, i, k) in list"></div></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-for="(x, i, k) of list"></div></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-for="({id, name}, i, k) of list"></div></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-for="([id, name], i, k) of list"></div></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><your-component s-for="x in list" :key="x.id"></your-component></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><div is="your-component" s-for="x in list" :key="x.id"></div></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><div :is="your-component" s-for="x in list" :key="x.id"></div></div></template>'
        },
        {
            filename: 'test.san',
            code:
                '<template><div><template s-for="x in list"><custom-component :key="x"></custom-component></template></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><template s-for="x in list"><div :key="x"></div></template></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><template s-for="x in list"><div></div></template></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><template s-for="x of list"><slot name="item" /></template></template>'
        },
        {
            filename: 'test.san',
            code: '<template><template s-for="x of list">foo<div></div></template></template>'
        },
        {
            filename: 'test.san',
            code:
                '<template><div><template s-for="x of list"><div s-for="foo of x" :key="foo"></div></template></div></template>'
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <template s-for="x in xs">
                        <template s-for="y in x.ys">
                            <li s-for="z in y.zs" :key="z.id">
                                123
                            </li>
                        </template>
                    </template>
                </template>
            `
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <template s-for="x in xs">
                        <template s-for="y in ys">
                            <li s-for="z in zs" :key="x.id + y.id + z.id">
                                123
                            </li>
                        </template>
                    </template>
                </template>
            `
        },
        {
            filename: 'test.san',
            code: '<template><div><template s-for="x in list" s-bind:key="x"><div /></template></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><template s-for="x in list" s-bind:key="x"><MyComp /></template></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><template s-for="x in list" :key="x"><div /></template></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><template s-for="x in list" :key="x"><MyComp /></template></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><template s-for="x in list" :key="x.id"><div /></template></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><template s-for="x in list" :key="x.id"><MyComp /></template></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><template s-for="(x, i) in list" :key="i"><div /></template></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><template s-for="(x, i) in list" :key="i"><MyComp /></template></div></template>'
        },
        {
            filename: 'test.san',
            code:
                '<template><div><template s-for="x in list" :key="x"><custom-component></custom-component></template></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><slot s-for="x in list" :key="x"><div /></slot></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><slot s-for="x in list" :key="x"><MyComp /></slot></div></template>'
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
        {
            filename: 'test.san',
            code: '<template><div><div s-for="(,a,b) in list"></div></div></template>',
            errors: ["Invalid alias ''."]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-for="(a,,b) in list"></div></div></template>',
            errors: ["Invalid alias ''."]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-for="(a,b,,) in list"></div></div></template>',
            errors: ["Invalid alias ''."]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-for="(a,{b,c}) in list"></div></div></template>',
            errors: ["Invalid alias '{b,c}'."]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-for="(a,b,{c,d}) in list"></div></div></template>',
            errors: ["Invalid alias '{c,d}'."]
        },
        {
            filename: 'test.san',
            code: '<template><div><your-component s-for="x in list"></your-component></div></template>',
            errors: ["Custom elements in iteration require 's-bind:key' directives."]
        },
        {
            filename: 'test.san',
            code: '<template><div><div is="your-component" s-for="x in list"></div></div></template>',
            errors: ["Custom elements in iteration require 's-bind:key' directives."]
        },
        {
            filename: 'test.san',
            code: '<template><div><div :is="your-component" s-for="x in list"></div></div></template>',
            errors: ["Custom elements in iteration require 's-bind:key' directives."]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-bind:is="your-component" s-for="x in list"></div></div></template>',
            errors: ["Custom elements in iteration require 's-bind:key' directives."]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-for="x in list" :key="100"></div></div></template>',
            errors: ["Expected 's-bind:key' directive to use the variables which are defined by the 's-for' directive."]
        },
        {
            filename: 'test.san',
            code: '<template><div><custom-component s-for="x in list" :key="100"></custom-component></div></template>',
            errors: ["Expected 's-bind:key' directive to use the variables which are defined by the 's-for' directive."]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-for="x in list" :key="foo"></div></div></template>',
            errors: ["Expected 's-bind:key' directive to use the variables which are defined by the 's-for' directive."]
        },
        {
            filename: 'test.san',
            code: '<template><div><custom-component s-for="x in list" :key="foo"></custom-component></div></template>',
            errors: ["Expected 's-bind:key' directive to use the variables which are defined by the 's-for' directive."]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-for="(item, index) in suggestions" :key></div></div></template>',
            errors: ["Expected 's-bind:key' directive to use the variables which are defined by the 's-for' directive."]
        },
        {
            filename: 'test.san',
            code:
                '<template><div><template s-for="x of list"><div s-for="foo of y" :key="foo"></div></template></div></template>',
            errors: ["Expected 's-bind:key' directive to use the variables which are defined by the 's-for' directive."]
        },
        {
            filename: 'test.san',
            errors: [
                "Expected 's-bind:key' directive to use the variables which are defined by the 's-for' directive."
            ],
            code: `
                <template>
                    <template s-for="x in xs">
                        <template s-for="y in a.ys">
                            <li s-for="z in y.zs" :key="z.id">
                                123
                            </li>
                        </template>
                    </template>
                </template>
            `
        },
        {
            filename: 'test.san',
            errors: [
                "Expected 's-bind:key' directive to use the variables which are defined by the 's-for' directive."
            ],
            code: `
                <template>
                    <template s-for="x in xs">
                        <template s-for="y in x.ys">
                            <li s-for="z in a.zs" :key="z.id">
                                123
                            </li>
                        </template>
                    </template>
                </template>
            `
        },
        {
            filename: 'test.san',
            errors: [
                "Expected 's-bind:key' directive to use the variables which are defined by the 's-for' directive."
            ],
            code: `
                <template>
                    <template s-for="x in xs">
                        <template s-for="y in x.ys">
                            <li s-for="z in x.zs" :key="z.id">
                                123
                            </li>
                        </template>
                    </template>
                </template>
            `
        },
        // empty value
        {
            filename: 'empty-value.san',
            code: '<template><div s-for=""></div></template>',
            errors: ["'s-for' directives require that attribute value."]
        }
    ]
});
