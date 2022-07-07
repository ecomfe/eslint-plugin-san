/**
 * @author BUPTlhuanyu
 */
'use strict';

const rule = require('../../../lib/rules/boolean-value');
const RuleTester = require('eslint').RuleTester;
require('@typescript-eslint/parser');


const ruleTester = new RuleTester({
    parser: require.resolve('san-eslint-parser'),
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module'
    }
});

ruleTester.run('boolean-value', rule, {
    valid: [
        {
            filename: 'test.san',
            code: `<template><div a b="{{ a }}" c="{{a}}">123</div></template>`
        },
        {
            filename: 'test.san',
            code: `<template><div b="{{ 
                a }}" c="{{a}}">123</div></template>`
        },
        {
            filename: 'test.ts',
            code: `
                // @san/component
                class A {
                    static template = '<a-b b="{{ a }}" c="{{a}}"></a-b>';
                }
                san.defineComponent({
                    template: '<a-b b="{{ a }}" c="{    {a}}"></a-b>',
                })
                export default {
                    template: '<a-b b="{{ a }}" c="{{a}}"></a-b>',
                }
            `,
            parser: require.resolve('san-eslint-parser'),
            parserOptions: {
                parser: require.resolve('@typescript-eslint/parser'),
                ecmaVersion: 6,
                sourceType: "module",
                ecmaFeatures: {
                    classes: true
                }
            }
        }
    ],

    invalid: [
        // default: nerver
        {
            filename: 'test.ts',
            code: `
                // @san/component
                class A {
                    static template = '<a-b b="{{ true }}" c="{{false}}" d-e="{{true}}" attr="{{true}}"></a-b>';
                }
                san.defineComponent({
                    template: '<a-b b="{{ false }}" c="{  {true}}" d-e="{{true} }" attr="{{ true }}"></a-b>',
                })
                export default {
                    template: '<a-b b="{{ true }}" c ="{{false}}" d-e="{{false}}" attr="{{false}}"></a-b>',
                }
            `,
            parser: require.resolve('san-eslint-parser'),
            parserOptions: {
                parser: require.resolve('@typescript-eslint/parser'),
                ecmaVersion: 6,
                sourceType: "module",
                ecmaFeatures: {
                    classes: true
                }
            },
            output: `
                // @san/component
                class A {
                    static template = '<a-b b c="{{false}}" d-e attr></a-b>';
                }
                san.defineComponent({
                    template: '<a-b b="{{ false }}" c d-e attr></a-b>',
                })
                export default {
                    template: '<a-b b c ="{{false}}" d-e="{{false}}" attr="{{false}}"></a-b>',
                }
            `,
            errors: [
                {
                    message: 'Value must be omitted for boolean attributes b',
                    line: 4,
                    column: 45,
                    endLine: 4,
                    endColumn: 59,
                },
                {
                    message: 'Value must be omitted for boolean attributes d-e',
                    line: 4,
                    column: 74,
                    endLine: 4,
                    endColumn: 88,
                },
                {
                    message: 'Value must be omitted for boolean attributes attr',
                    line: 4,
                    column: 89,
                    endLine: 4,
                    endColumn: 104,
                },
                {
                    message: 'Value must be omitted for boolean attributes c',
                    line: 7,
                    column: 53,
                    endLine: 7,
                    endColumn: 67,
                },
                {
                    message: 'Value must be omitted for boolean attributes d-e',
                    line: 7,
                    column: 68,
                    endLine: 7,
                    endColumn: 83,
                },
                {
                    message: 'Value must be omitted for boolean attributes attr',
                    line: 7,
                    column: 84,
                    endLine: 7,
                    endColumn: 101,
                },
                {
                    message: 'Value must be omitted for boolean attributes b',
                    line: 10,
                    column: 37,
                    endLine: 10,
                    endColumn: 51,
                }
            ]
        },
        // 'never', { "always": ["c"] }
        {
            filename: 'test.ts',
            code: `
                // @san/component
                class A {
                    static template = '<a-b b="{{ true }}" c="{{false}}"></a-b>';
                }
                san.defineComponent({
                    template: '<a-b b="{{ false }}" c="{  {true}}"></a-b>',
                })
                export default {
                    template: '<a-b b="{{ true }}" c ="{{false}}"></a-b>',
                }
            `,
            options: ['never', { "always": ["c"] }],
            parser: require.resolve('san-eslint-parser'),
            parserOptions: {
                parser: require.resolve('@typescript-eslint/parser'),
                ecmaVersion: 6,
                sourceType: "module",
                ecmaFeatures: {
                    classes: true
                }
            },
            output: `
                // @san/component
                class A {
                    static template = '<a-b b c="{{false}}"></a-b>';
                }
                san.defineComponent({
                    template: '<a-b b="{{ false }}" c="{  {true}}"></a-b>',
                })
                export default {
                    template: '<a-b b c ="{{false}}"></a-b>',
                }
            `,
            errors: [
                {
                    message: 'Value must be omitted for boolean attributes b',
                    line: 4,
                    column: 45,
                    endLine: 4,
                    endColumn: 59,
                },
                {
                    message: 'Value must be omitted for boolean attributes b',
                    line: 10,
                    column: 37,
                    endLine: 10,
                    endColumn: 51,
                }
            ]
        },
        // always, 
        {
            filename: 'test.ts',
            code: `
                // @san/component
                class A {
                    static template = '<a-b b c></a-b>';
                }
                san.defineComponent({
                    template: '<a-b b c=></a-b>',
                })
                export default {
                    template: '<a-b b c></a-b>',
                }
            `,
            parser: require.resolve('san-eslint-parser'),
            parserOptions: {
                parser: require.resolve('@typescript-eslint/parser'),
                ecmaVersion: 6,
                sourceType: "module",
                ecmaFeatures: {
                    classes: true
                }
            },
            options: ['always'],
            output: `
                // @san/component
                class A {
                    static template = '<a-b b="{{true}}" c="{{true}}"></a-b>';
                }
                san.defineComponent({
                    template: '<a-b b="{{true}}" c=="{{true}}"></a-b>',
                })
                export default {
                    template: '<a-b b="{{true}}" c="{{true}}"></a-b>',
                }
            `,
            errors: [
                {
                    message: 'Value must be set for boolean attributes b',
                    line: 4,
                    column: 45,
                    endLine: 4,
                    endColumn: 46,
                },
                {
                    message: 'Value must be set for boolean attributes c',
                    line: 4,
                    column: 47,
                    endLine: 4,
                    endColumn: 48,
                },
                {
                    message: 'Value must be set for boolean attributes b',
                    line: 7,
                    column: 37,
                    endLine: 7,
                    endColumn: 38,
                },
                {
                    message: 'Value must be set for boolean attributes c',
                    line: 7,
                    column: 39,
                    endLine: 7,
                    endColumn: 41,
                },
                {
                    message: 'Value must be set for boolean attributes b',
                    line: 10,
                    column: 37,
                    endLine: 10,
                    endColumn: 38,
                },
                {
                    message: 'Value must be set for boolean attributes c',
                    line: 10,
                    column: 39,
                    endLine: 10,
                    endColumn: 40,
                }
            ]
        },
        // 'always', { "never": ["c"] }
        {
            filename: 'test.ts',
            code: `
                // @san/component
                class A {
                    static template = '<a-b b c></a-b>';
                }
                san.defineComponent({
                    template: '<a-b b c=></a-b>',
                })
                export default {
                    template: '<a-b b c></a-b>',
                }
            `,
            parser: require.resolve('san-eslint-parser'),
            parserOptions: {
                parser: require.resolve('@typescript-eslint/parser'),
                ecmaVersion: 6,
                sourceType: "module",
                ecmaFeatures: {
                    classes: true
                }
            },
            options: ['always', { "never": ["c"] }],
            output: `
                // @san/component
                class A {
                    static template = '<a-b b="{{true}}" c></a-b>';
                }
                san.defineComponent({
                    template: '<a-b b="{{true}}" c=></a-b>',
                })
                export default {
                    template: '<a-b b="{{true}}" c></a-b>',
                }
            `,
            errors: [
                {
                    message: 'Value must be set for boolean attributes b',
                    line: 4,
                    column: 45,
                    endLine: 4,
                    endColumn: 46,
                  },
                  {
                    message: 'Value must be set for boolean attributes b',
                    line: 7,
                    column: 37,
                    endLine: 7,
                    endColumn: 38,
                  },
                  {
                    message: 'Value must be set for boolean attributes b',
                    line: 10,
                    column: 37,
                    endLine: 10,
                    endColumn: 38,
                  }
            ]
        },
    ]
});
