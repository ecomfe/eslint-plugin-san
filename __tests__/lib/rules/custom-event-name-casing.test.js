/**
 * @author Yosuke Ota
 * See LICENSE file in root directory for full license.
 */
'use strict';

const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/custom-event-name-casing');

const tester = new RuleTester({
    parser: require.resolve('san-eslint-parser'),
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    }
});

tester.run('custom-event-name-casing', rule, {
    valid: [
        {
            filename: 'test.san',
            code: `
                <template>
                    <input on-click="fire('foo-bar')">
                </template>
                <script>
                export default {
                    onClick() {
                        this.fire('baz-qux')
                        this.fire('update:fooBar')
                    }
                }
                </script>
            `
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <input on-click="fire('update:fooBar', value)">
                </template>
                <script>
                export default {
                    onClick(evt) {
                        this.fire('foo-bar')
                        this.fire('update:fooBar', evt)
                    }
                }
                </script>
            `
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <input on-click="fire('update:fooBar', value)">
                </template>
                <script>
                export default {
                    onClick(evt) {
                        fire('foo-bar')
                        fire('update:fooBar', evt)
                    }
                }
                </script>
            `
        }
    ],
    invalid: [
        {
            filename: 'test.san',
            code: `
                <template>
                    <input on-click="fire('fooBar')">
                </template>
                <script>
                export default {
                    onClick() {
                        this.fire('bazQux')
                        this.fire('update:fooBar')
                    }
                }
                </script>
            `,
            errors: [
                {
                    message: "Custom event name 'fooBar' must be kebab-case.",
                    line: 3,
                    column: 43,
                    endLine: 3,
                    endColumn: 51
                },
                {
                    message: "Custom event name 'bazQux' must be kebab-case.",
                    line: 8,
                    column: 35,
                    endLine: 8,
                    endColumn: 43
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <input on-click="fire?.('fooBar')">
                </template>
                <script>
                export default {
                    onClick() {
                        this?.fire?.('bazQux')
                        this?.fire?.('update:fooBar')
                    }
                }
                </script>
            `,
            errors: [
                {
                    message: "Custom event name 'fooBar' must be kebab-case.",
                    line: 3,
                    column: 45,
                    endLine: 3,
                    endColumn: 53
                },
                {
                    message: "Custom event name 'bazQux' must be kebab-case.",
                    line: 8,
                    column: 38,
                    endLine: 8,
                    endColumn: 46
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <input on-click="fire?.('fooBar')">
                </template>
                <script>
                export default {
                    onClick() {
                        this?.fire?.('bazQux')
                        this?.fire?.('update:fooBar')
                    }
                }
                </script>
            `,
            errors: [
                "Custom event name 'fooBar' must be kebab-case.",
                "Custom event name 'bazQux' must be kebab-case."
            ]
        }
    ]
});
