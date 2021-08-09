/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

/* eslint-disable */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/html-closing-bracket-newline');
const RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const tester = new RuleTester({
    parser: require.resolve('san-eslint-parser'),
    parserOptions: {
        ecmaVersion: 2015
    }
});

tester.run('html-closing-bracket-newline', rule, {
    valid: [
        `<template><div></div></template>`,
        `
        <template>
            <div
                id=""
            >
            </div>
        </template>
        `,
        {
            filename: 'test.san',
            code: `<template><div></div></template>`,
            options: [
                {
                    singleline: 'never',
                    multiline: 'never'
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <div
                        id="">
                    </div>
                </template>
            `,
            options: [
                {
                    singleline: 'never',
                    multiline: 'never'
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <div
                        id=""
                        >
                    </div>
                </template>
            `,
            options: [
                {
                    singleline: 'never',
                    multiline: 'always'
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <div id="">
                    </div>
                </template>
            `,
            options: [
                {
                    singleline: 'never',
                    multiline: 'always'
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template
                >
                    <div
                        id="">
                    </div
                    >
                </template
                >
            `,
            options: [
                {
                    singleline: 'always',
                    multiline: 'never'
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template
                >
                    <div id=""
                    >
                    </div
                    >
                </template
                >
            `,
            options: [
                {
                    singleline: 'always',
                    multiline: 'never'
                }
            ]
        },

        // Ignore if no closing brackets
        `
        <template>
            <div
                id=
                ""
        `
    ],
    invalid: [
        {
            filename: 'test.san',
            code: `
                <template>
                    <div
                    ></div

                    >
                </template>
            `,
            output: `
                <template>
                    <div></div>
                </template>
            `,
            errors: [
                'Expected no line breaks before closing bracket, but 1 line break found.',
                'Expected no line breaks before closing bracket, but 2 line breaks found.'
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <div
                        id="">
                    </div>
                </template>
            `,
            output: `
                <template>
                    <div
                        id=""
                    >
                    </div>
                </template>
            `,
            errors: ['Expected 1 line break before closing bracket, but no line breaks found.']
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <div
                    ></div

                    >
                </template>
            `,
            output: `
                <template>
                    <div></div>
                </template>
            `,
            options: [
                {
                    singleline: 'never',
                    multiline: 'never'
                }
            ],
            errors: [
                'Expected no line breaks before closing bracket, but 1 line break found.',
                'Expected no line breaks before closing bracket, but 2 line breaks found.'
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <div
                        id=""
                        >
                    </div>
                </template>
            `,
            output: `
                <template>
                    <div
                        id="">
                    </div>
                </template>
            `,
            options: [
                {
                    singleline: 'never',
                    multiline: 'never'
                }
            ],
            errors: ['Expected no line breaks before closing bracket, but 1 line break found.']
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <div
                        id="">
                    </div>
                </template>
            `,
            output: `
                <template>
                    <div
                        id=""
                    >
                    </div>
                </template>
            `,
            options: [
                {
                    singleline: 'never',
                    multiline: 'always'
                }
            ],
            errors: ['Expected 1 line break before closing bracket, but no line breaks found.']
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <div id=""
                    >
                    </div
                    >
                </template>
            `,
            output: `
                <template>
                    <div id="">
                    </div>
                </template>
            `,
            options: [
                {
                    singleline: 'never',
                    multiline: 'always'
                }
            ],
            errors: [
                'Expected no line breaks before closing bracket, but 1 line break found.',
                'Expected no line breaks before closing bracket, but 1 line break found.'
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template
                >
                    <div
                        id=""
                        >
                    </div>
                </template
                >
            `,
            output: `
                <template
                >
                    <div
                        id="">
                    </div
                    >
                </template
                >
            `,
            options: [
                {
                    singleline: 'always',
                    multiline: 'never'
                }
            ],
            errors: [
                'Expected no line breaks before closing bracket, but 1 line break found.',
                'Expected 1 line break before closing bracket, but no line breaks found.'
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template
                >
                    <div id="">
                    </div>
                </template
                >
            `,
            output: `
                <template
                >
                    <div id=""
                    >
                    </div
                    >
                </template
                >
            `,
            options: [
                {
                    singleline: 'always',
                    multiline: 'never'
                }
            ],
            errors: [
                'Expected 1 line break before closing bracket, but no line breaks found.',
                'Expected 1 line break before closing bracket, but no line breaks found.'
            ]
        }
    ]
});
