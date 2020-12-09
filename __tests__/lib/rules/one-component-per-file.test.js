/**
 * @fileoverview enforce that each component should be in its own file
 * @author Armano
 */
'use strict';

/* eslint-disable */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/one-component-per-file');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    }
});

ruleTester.run('one-component-per-file', rule, {
    valid: [
        {
            filename: 'test.js',
            code: `san.defineComponent({})`
        },
        {
            filename: 'test.js',
            code: `
                const foo = {}
                san.defineComponent({})
            `
        },
        {
            filename: 'test.san',
            code: `export default {}`
        },
        {
            filename: 'test.san',
            code: `export default {
                components: {
                    test: {
                        name: 'foo'
                    }
                }
            }`
        }
    ],
    invalid: [
        {
            filename: 'test.js',
            code: `
                san.defineComponent({})
                san.defineComponent({})
            `,
            errors: ['There is more than one component in this file.', 'There is more than one component in this file.']
        },
        {
            filename: 'test.js',
            code: `
                san.defineComponent({
                    // ...
                })

                san.defineComponent({
                    // ...
                })
                export default {}
            `,
            errors: ['There is more than one component in this file.', 'There is more than one component in this file.']
        },
        {
            filename: 'test.san',
            code: `
                san.defineComponent({})
                export default {}
            `,
            errors: ['There is more than one component in this file.', 'There is more than one component in this file.']
        }
    ]
});
