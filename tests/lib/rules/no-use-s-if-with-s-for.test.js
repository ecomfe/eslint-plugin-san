/**
 * @author Yosuke Ota
 */
'use strict';

/* eslint-disable */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/no-use-s-if-with-s-for');

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const tester = new RuleTester({
    parser: require.resolve('san-eslint-parser'),
    parserOptions: {ecmaVersion: 2015}
});

tester.run('no-use-s-if-with-s-for', rule, {
    valid: [
        {
            filename: 'test.san',
            code: ''
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-for="x in list" s-if="x"></div></div></template>',
            options: [{allowUsingIterationVar: true}]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-for="x in list" s-if="x.foo"></div></div></template>',
            options: [{allowUsingIterationVar: true}]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-for="(x,i) in list" s-if="i%2==0"></div></div></template>',
            options: [{allowUsingIterationVar: true}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="shown"><div s-for="(x,i) in list"></div></div></template>'
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <ul>
                        <li
                            s-for="user in activeUsers"
                            :key="user.id"
                        >
                            {{ user.name }}
                        <li>
                    </ul>
                </template>
            `
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <ul s-if="shouldShowUsers">
                        <li
                            s-for="user in users"
                            :key="user.id"
                        >
                            {{ user.name }}
                        <li>
                    </ul>
                </template>
            `
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-for="{x} in list" s-if="x"></div></div></template>',
            options: [{allowUsingIterationVar: true}]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-for="{x,y,z} in list" s-if="y.foo"></div></div></template>',
            options: [{allowUsingIterationVar: true}]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-for="({x,y,z},i) in list" s-if="i%2==0"></div></div></template>',
            options: [{allowUsingIterationVar: true}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="shown"><div s-for="({x,y,z},i) in list"></div></div></template>'
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <ul>
                        <li
                            s-for="{user} in activeUsers"
                            :key="user.id"
                        >
                            {{ user.name }}
                        <li>
                    </ul>
                </template>
            `
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <ul s-if="shouldShowUsers">
                        <li
                            s-for="{user} in users"
                            :key="user.id"
                        >
                            {{ user.name }}
                        <li>
                    </ul>
                </template>
            `
        }
    ],
    invalid: [
        {
            filename: 'test.san',
            code: '<template><div><div s-for="x in list" s-if="shown"></div></div></template>',
            errors: [
                {
                    message: "This 's-if' should be moved to the wrapper element.",
                    line: 1
                }
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-for="x in list" s-if="list.length&gt;0"></div></div></template>',
            errors: [
                {
                    message: "This 's-if' should be moved to the wrapper element.",
                    line: 1
                }
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-for="x in list" s-if="x.isActive"></div></div></template>',
            errors: [
                {
                    message:
                        "The 'list' variable inside 's-for' directive should be replaced with a computed property that returns filtered array instead. You should not mix 's-for' with 's-if'.",
                    line: 1
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <ul>
                        <li
                            s-for="user in users"
                            s-if="user.isActive"
                            :key="user.id"
                        >
                            {{ user.name }}
                        <li>
                    </ul>
                </template>
            `,
            errors: [
                {
                    message:
                        "The 'users' variable inside 's-for' directive should be replaced with a computed property that returns filtered array instead. You should not mix 's-for' with 's-if'.",
                    line: 6
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <ul>
                        <li
                            s-for="user in users"
                            s-if="shouldShowUsers"
                            :key="user.id"
                        >
                            {{ user.name }}
                        <li>
                    </ul>
                </template>
            `,
            errors: [
                {
                    message: "This 's-if' should be moved to the wrapper element.",
                    line: 6
                }
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-for="{x,y,z} in list" s-if="z.isActive"></div></div></template>',
            errors: [
                {
                    message:
                        "The 'list' variable inside 's-for' directive should be replaced with a computed property that returns filtered array instead. You should not mix 's-for' with 's-if'.",
                    line: 1
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <ul>
                        <li
                            s-for="{foo, bar, user} in users"
                            s-if="user.isActive"
                            :key="user.id"
                        >
                            {{ user.name }}
                        <li>
                    </ul>
                </template>
            `,
            errors: [
                {
                    message:
                        "The 'users' variable inside 's-for' directive should be replaced with a computed property that returns filtered array instead. You should not mix 's-for' with 's-if'.",
                    line: 6
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <ul>
                        <li
                            s-for="{foo, bar, user} in users"
                            s-if="shouldShowUsers"
                            :key="user.id"
                        >
                            {{ user.name }}
                        <li>
                    </ul>
                </template>
            `,
            errors: [
                {
                    message: "This 's-if' should be moved to the wrapper element.",
                    line: 6
                }
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-for="{x} in list()" s-if="x.isActive"></div></div></template>',
            errors: [
                {
                    message:
                        "The 'list()' expression inside 's-for' directive should be replaced with a computed property that returns filtered array instead. You should not mix 's-for' with 's-if'.",
                    line: 1
                }
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div><div s-for="i in 5" s-if="i"></div></div></template>',
            errors: [
                {
                    message:
                        "The '5' expression inside 's-for' directive should be replaced with a computed property that returns filtered array instead. You should not mix 's-for' with 's-if'.",
                    line: 1
                }
            ]
        }
    ]
});
