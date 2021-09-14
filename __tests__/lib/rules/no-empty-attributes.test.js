/**
 * @author jinjingxuan
 */
 'use strict';

 // ------------------------------------------------------------------------------
 // Requirements
 // ------------------------------------------------------------------------------
 
 const rule = require('../../../lib/rules/no-empty-attributes');
 
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

tester.run('no-empty-attributes', rule, {
    valid: [
        {
            filename: 'test.san',
            code: `
                <template>
                    <div>
                        <div class="a"></div>
                        <div style="b"></div>
                    </div>
                </template>
            `
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <div>
                        <div class="a"></div>
                        <div style="b"></div>
                        <div attr=""></div>
                        <div attr></div>
                    </div>
                </template>
            `
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <div>
                        <div class="a"></div>
                        <div style="b"></div>
                        <div attr="c"></div>
                    </div>
                </template>
            `,
            options: [{groups: ['attr']}]
        }
    ],
    invalid: [
        {
            filename: 'test.san',
            code: `
                <template>
                    <div>
                        <div class=""></div>
                        <div style=""></div>
                        <div class></div>
                        <div style></div>
                    </div>
                </template>
            `,
            errors: [
                {
                    message: "disallow attribute 'class' is empty",
                    line: 4,
                    column: 30,
                },
                {
                    message: "disallow attribute 'style' is empty",
                    line: 5,
                    column: 30,
                },
                {
                    message: "disallow attribute 'class' is empty",
                    line: 6,
                    column: 30,
                },
                {
                    message: "disallow attribute 'style' is empty",
                    line: 7,
                    column: 30,
                }
            ],
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <div>
                        <div class="a"></div>
                        <div style="b"></div>
                        <div attr=""></div>
                    </div>
                </template>
            `,
            errors: [
                {
                    message: "disallow attribute 'attr' is empty",
                    line: 6,
                    column: 30,
                }
            ],
            options: [{groups: ['attr']}]
        },
    ]
})

