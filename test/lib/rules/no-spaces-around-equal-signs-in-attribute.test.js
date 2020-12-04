/**
 * @author Yosuke Ota
 */
'use strict';

/* eslint-disable */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-spaces-around-equal-signs-in-attribute');
const RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const tester = new RuleTester({
    parser: require.resolve('san-eslint-parser')
});

tester.run('no-spaces-around-equal-signs-in-attribute', rule, {
    valid: [
        '<template><div attr="value" /></template>',
        '<template><div attr="" /></template>',
        "<template><div attr='value' /></template>",
        '<template><div attr=value /></template>',
        '<template><div attr /></template>',
        '<template><div/></template>',
        `<template>
            <div
                is="header"
                v-for="item in items"
                v-if="!visible"
                v-once
                id="uniqueID"
                ref="header"
                v-model="headerData"
                myProp="prop"
                @click="functionCall"
                v-text="textContent">
            </div>
        </template>`
    ],
    invalid: [
        {
            code: '<template><div attr = "value" /></template>',
            output: '<template><div attr="value" /></template>',
            errors: [
                {
                    message: 'Unexpected spaces found around equal signs.',
                    line: 1,
                    column: 20,
                    endLine: 1,
                    endColumn: 23
                }
            ]
        },
        {
            code: '<template><div attr = "" /></template>',
            output: '<template><div attr="" /></template>',
            errors: [
                {
                    message: 'Unexpected spaces found around equal signs.',
                    line: 1,
                    column: 20,
                    endLine: 1,
                    endColumn: 23
                }
            ]
        },
        {
            code: "<template><div attr = 'value' /></template>",
            output: "<template><div attr='value' /></template>",
            errors: [
                {
                    message: 'Unexpected spaces found around equal signs.',
                    line: 1,
                    column: 20,
                    endLine: 1,
                    endColumn: 23
                }
            ]
        },
        {
            code: '<template><div attr = value /></template>',
            output: '<template><div attr=value /></template>',
            errors: [
                {
                    message: 'Unexpected spaces found around equal signs.',
                    line: 1,
                    column: 20,
                    endLine: 1,
                    endColumn: 23
                }
            ]
        },
        {
            code: '<template><div attr \t\n   =   \t\n "value" /></template>',
            output: '<template><div attr="value" /></template>',
            errors: [
                {
                    message: 'Unexpected spaces found around equal signs.',
                    line: 1,
                    column: 20,
                    endLine: 3,
                    endColumn: 2
                }
            ]
        },
        {
            code: '<template><div attr ="value" /></template>',
            output: '<template><div attr="value" /></template>',
            errors: [
                {
                    message: 'Unexpected spaces found around equal signs.',
                    line: 1,
                    column: 20,
                    endLine: 1,
                    endColumn: 22
                }
            ]
        },
        {
            code: '<template><div attr= "value" /></template>',
            output: '<template><div attr="value" /></template>',
            errors: [
                {
                    message: 'Unexpected spaces found around equal signs.',
                    line: 1,
                    column: 20,
                    endLine: 1,
                    endColumn: 22
                }
            ]
        },
        {
            code: `<template>
                <div
                    is = "header"
                    v-for = "item in items"
                    v-if = "!visible"
                    v-once
                    id = "uniqueID"
                    ref = "header"
                    v-model = "headerData"
                    myProp = "prop"
                    @click = "functionCall"
                    v-text = "textContent">
                </div>
            </template>`,
            output: `<template>
                <div
                    is="header"
                    v-for="item in items"
                    v-if="!visible"
                    v-once
                    id="uniqueID"
                    ref="header"
                    v-model="headerData"
                    myProp="prop"
                    @click="functionCall"
                    v-text="textContent">
                </div>
            </template>`,
            errors: [
                {
                    message: 'Unexpected spaces found around equal signs.',
                    line: 3,
                    column: 23,
                    endLine: 3,
                    endColumn: 26
                },
                {
                    message: 'Unexpected spaces found around equal signs.',
                    line: 4,
                    column: 26,
                    endLine: 4,
                    endColumn: 29
                },
                {
                    message: 'Unexpected spaces found around equal signs.',
                    line: 5,
                    column: 25,
                    endLine: 5,
                    endColumn: 28
                },
                {
                    message: 'Unexpected spaces found around equal signs.',
                    line: 7,
                    column: 23,
                    endLine: 7,
                    endColumn: 26
                },
                {
                    message: 'Unexpected spaces found around equal signs.',
                    line: 8,
                    column: 24,
                    endLine: 8,
                    endColumn: 27
                },
                {
                    message: 'Unexpected spaces found around equal signs.',
                    line: 9,
                    column: 28,
                    endLine: 9,
                    endColumn: 31
                },
                {
                    message: 'Unexpected spaces found around equal signs.',
                    line: 10,
                    column: 27,
                    endLine: 10,
                    endColumn: 30
                },
                {
                    message: 'Unexpected spaces found around equal signs.',
                    line: 11,
                    column: 27,
                    endLine: 11,
                    endColumn: 30
                },
                {
                    message: 'Unexpected spaces found around equal signs.',
                    line: 12,
                    column: 27,
                    endLine: 12,
                    endColumn: 30
                }
            ]
        }
    ]
});
