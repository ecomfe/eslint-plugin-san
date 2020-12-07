/**
 * @author Yosuke Ota
 * See LICENSE file in root directory for full license.
 */
'use strict';

const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/no-lone-template');

const tester = new RuleTester({
    parser: require.resolve('san-eslint-parser'),
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module'
    }
});

tester.run('no-lone-template', rule, {
    valid: [
        {
            filename: 'test.san',
            code: `
                <template>
                    <template s-if="foo">...</template>
                    <template s-else-if="bar">...</template>
                    <template s-else>...</template>
                </template>
            `
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <template s-for="e in list">...</template>
                </template>
            `
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <template s-slot>...</template>
                </template>
            `
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <CoolButton>
                    <template slot="foo">...</template>
                    </CoolButton>
                </template>
            `
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <CoolButton>
                    <template slot-scope="foo">...</template>
                    </CoolButton>
                </template>
            `
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <CoolButton>
                    <template scope="foo">...</template>
                    </CoolButton>
                </template>
            `
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <template id="a">...</template>
                </template>
            `,
            options: [{ignoreAccessible: true}]
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <template :id="a">...</template>
                </template>
            `,
            options: [{ignoreAccessible: true}]
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <template ref="b">...</template>
                </template>
            `,
            options: [{ignoreAccessible: true}]
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <template :ref="b">...</template>
                </template>
            `,
            options: [{ignoreAccessible: true}]
        }
    ],
    invalid: [
        {
            filename: 'test.san',
            code: `
                <template>
                    <template>...</template>
                </template>
            `,
            errors: [
                {
                    message: '`<template>` require directive.',
                    line: 3,
                    column: 21,
                    endLine: 3,
                    endColumn: 31
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <template/>
                </template>
            `,
            errors: ['`<template>` require directive.']
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <template s-on:id="a">...</template>
                </template>
            `,
            options: [{ignoreAccessible: true}],
            errors: ['`<template>` require directive.']
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <template s-bind="id">...</template>
                </template>
            `,
            options: [{ignoreAccessible: true}],
            errors: ['`<template>` require directive.']
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <template s-bind:[foo]="id">...</template>
                </template>
            `,
            options: [{ignoreAccessible: true}],
            errors: ['`<template>` require directive.']
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <template class="b">...</template>
                </template>
            `,
            options: [{ignoreAccessible: true}],
            errors: ['`<template>` require directive.']
        }
    ]
});
