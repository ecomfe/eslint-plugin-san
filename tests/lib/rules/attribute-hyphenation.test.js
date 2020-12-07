/**
 * @fileoverview Define a style for the props casing in templates.
 * @author Armano
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/attribute-hyphenation');
const RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester({
    parser: require.resolve('san-eslint-parser'),
    parserOptions: {ecmaVersion: 2015}
});

ruleTester.run('attribute-hyphenation', rule, {
    valid: [
        {
            filename: 'test.san',
            code: ''
        },
        {
            filename: 'test.san',
            code:
                '<template><div><custom data-id="foo" aria-test="bar" slot-scope="{ data }" my-prop="prop"></custom></div></template>',
            options: ['always']
        },
        {
            filename: 'test.san',
            code:
                '<template><div><custom data-id="foo" aria-test="bar" slot-scope="{ data }" myProp="prop"></custom></div></template>',
            options: ['never']
        },
        {
            filename: 'test.san',
            code:
                '<template><div data-id="foo" aria-test="bar" slot-scope="{ data }"><a onClick="" my-prop="prop"></a></div></template>',
            options: ['never']
        },
        {
            filename: 'test.san',
            code:
                '<template><custom data-id="foo" aria-test="bar" slot-scope="{ data }" custom-hyphen="foo" second-custom="bar"><a onClick="" my-prop="prop"></a></custom></template>',
            options: ['never', {ignore: ['custom-hyphen', 'second-custom']}]
        },
        {
            filename: 'test.san',
            code: '<template><my-component :[fooBar]></my-component></template>',
            options: ['always']
        },
        {
            filename: 'test.san',
            code: '<template><my-component :[foo-bar]></my-component></template>',
            options: ['never']
        }
    ],

    invalid: [
        {
            filename: 'test.san',
            code: '<template><div><custom my-prop="foo"></custom></div></template>',
            output: '<template><div><custom myProp="foo"></custom></div></template>',
            options: ['never'],
            errors: [
                {
                    message: "Attribute 'my-prop' can't be hyphenated.",
                    type: 'VIdentifier',
                    line: 1
                }
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div><custom MyProp="Bar"></custom></div></template>',
            output: '<template><div><custom my-prop="Bar"></custom></div></template>',
            options: ['always'],
            errors: [
                {
                    message: "Attribute 'MyProp' must be hyphenated.",
                    type: 'VIdentifier',
                    line: 1
                }
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div><custom my-prop="prop"></custom></div></template>',
            output: '<template><div><custom myProp="prop"></custom></div></template>',
            options: ['never'],
            errors: [
                {
                    message: "Attribute 'my-prop' can't be hyphenated.",
                    type: 'VIdentifier',
                    line: 1
                }
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div><custom MyProp="prop"></custom></div></template>',
            output: '<template><div><custom my-prop="prop"></custom></div></template>',
            options: ['always'],
            errors: [
                {
                    message: "Attribute 'MyProp' must be hyphenated.",
                    type: 'VIdentifier',
                    line: 1
                }
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div><custom my-prop="prop" second-prop="test"></custom></div></template>',
            output: '<template><div><custom my-prop="prop" secondProp="test"></custom></div></template>',
            options: ['never', {ignore: ['my-prop']}],
            errors: [
                {
                    message: "Attribute 'second-prop' can't be hyphenated.",
                    type: 'VIdentifier',
                    line: 1
                }
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div><custom myProp="prop" secondProp="test"></custom></div></template>',
            output: '<template><div><custom my-prop="prop" secondProp="test"></custom></div></template>',
            options: ['always', {ignore: ['secondProp']}],
            errors: [
                {
                    message: "Attribute 'myProp' must be hyphenated.",
                    type: 'VIdentifier',
                    line: 1
                }
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div><custom propID="prop" secondPropID="test"></custom></div></template>',
            output: '<template><div><custom prop-i-d="prop" secondPropID="test"></custom></div></template>',
            options: ['always', {ignore: ['secondPropID']}],
            errors: [
                {
                    message: "Attribute 'propID' must be hyphenated.",
                    type: 'VIdentifier',
                    line: 1
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <custom data-id="foo" aria-test="bar" slot-scope="{ data }" custom-hyphen="foo" second-custom="baz" third-custom="bar">
                        <a onClick="" my-prop="prop"></a>
                    </custom>
                </template>
            `,
            output: `
                <template>
                    <custom data-id="foo" aria-test="bar" slot-scope="{ data }" custom-hyphen="foo" second-custom="baz" thirdCustom="bar">
                        <a onClick="" my-prop="prop"></a>
                    </custom>
                </template>
            `,
            options: ['never', {ignore: ['custom-hyphen', 'second-custom']}],
            errors: [
                {
                    message: "Attribute 'third-custom' can't be hyphenated.",
                    type: 'VIdentifier',
                    line: 3
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <custom data-id="foo" aria-test="bar" slot-scope="{ data }" custom-hyphen="foo" second-custom="baz" thirdCustom="bar">
                        <a onClick="" my-prop="prop"></a>
                    </custom>
                </template>
            `,
            output: `
                <template>
                    <custom data-id="foo" aria-test="bar" slot-scope="{ data }" customHyphen="foo" secondCustom="baz" thirdCustom="bar">
                        <a onClick="" my-prop="prop"></a>
                    </custom>
                </template>
            `,
            options: ['never'],
            errors: [
                {
                    message: "Attribute 'custom-hyphen' can't be hyphenated.",
                    type: 'VIdentifier',
                    line: 3
                },
                {
                    message: "Attribute 'second-custom' can't be hyphenated.",
                    type: 'VIdentifier',
                    line: 3
                }
            ]
        }
    ]
});
