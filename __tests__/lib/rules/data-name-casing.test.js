/**
 * @author jinjingxuan
 */
 'use strict';

 // ------------------------------------------------------------------------------
 // Requirements
 // ------------------------------------------------------------------------------
 
 const rule = require('../../../lib/rules/data-name-casing');
 
 const RuleTester = require('eslint').RuleTester;
 
 // ------------------------------------------------------------------------------
 // Tests
 // ------------------------------------------------------------------------------

 const tester = new RuleTester({
    parser: require.resolve('san-eslint-parser'),
    parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'module'
    }
});

tester.run('data-name-casing', rule, {
    valid: [
        {
            filename: 'test.san',
            code: `
                <script>
                export default {
                    dataTypes: {
                        greetingText: DataTypes.string
                    },
                    computed: {
                        aText() {
                            return this.data.get('text') + 1;
                        },
                        bText() {
                            return this.data.get('text') + 2;
                        }
                    },
                    initData() {
                        return {
                            text: 1
                        }
                    },
                }
                </script>
            `
        },
    ],
    invalid: [
        {
            filename: 'test.san',
            code: `
                <script>
                export default {
                    dataTypes: {
                        'greeting-text': DataTypes.string
                    },
                    computed: {
                        'a-text'() {
                            return this.data.get('text') + 1;
                        },
                        'b_text'() {
                            return this.data.get('text') + 2;
                        }
                    },
                    initData() {
                        return {
                            text: 1,
                            's-text': 2,
                        }
                    },
                }
                </script>
            `,
            errors: [
                {
                    message: "dataTypes 'greeting-text' must be camel case",
                    line: 5,
                    column: 25,
                    endLine: 5,
                    endColumn: 40,
                },
                {
                    message: "computed 'a-text' must be camel case",
                    line: 8,
                    column: 25,
                },
                {
                    message: "computed 'b_text' must be camel case",
                    line: 11,
                    column: 25,
                },
                {
                    message: "initData 's-text' must be camel case",
                    line: 18,
                    column: 29,
                }
            ]
        },
    ]
})

