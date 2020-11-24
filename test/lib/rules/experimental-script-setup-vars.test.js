/**
 * @author Yosuke Ota
 */
'use strict';

const {RuleTester} = require('eslint');
const requireRule = require('../../../lib/utils/utils').requireRule;
const rule = requireRule('experimental-script-setup-vars');

const tester = new RuleTester({
    parser: require.resolve('san-eslint-parser'),
    parserOptions: {ecmaVersion: 2020, sourceType: 'module'}
});

tester.run('experimental-script-setup-vars', rule, {
    valid: [
        `
            <script setup="props, { emit }">
                import { watchEffect } from 'vue';

                watchEffect(() => console.log(props.msg))
                emit('foo')
            </script>`,
        `
            <script setup>
                export let count = 1
            </script>`,
        `
            <script>
                import { watchEffect } from 'vue'

                export default {
                    setup (props, { emit }) {
                        watchEffect(() => console.log(props.msg))
                        emit('foo')
                        return {}
                    }
                }
            </script>`,
        `
            <template>
                <div />
            </template>`
        ],
    invalid: [
        {
            code: `
                <script setup="a - b">
                </script>
            `,
            errors: [
                {
                    message: 'Parsing error.',
                    line: 2
                }
            ]
        }
    ]
});
