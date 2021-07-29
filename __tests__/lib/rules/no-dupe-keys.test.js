/**
 * @fileoverview Prevents duplication of field names.
 * @author Armano
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-dupe-keys');
const RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    }
});
ruleTester.run('no-dupe-keys', rule, {
    valid: [
        {
            filename: 'test.san',
            code: `
                export default {
                    dataTypes: {
                        foo: DataTypes.bool
                    },
                    computed: {
                        bar () {
                        }
                    },
                    initData () {
                        return
                    },
                    _foo () {},
                    test () {}
                }
            `
        },
        {
            filename: 'test.san',
            code: `
                export default {
                    dataTypes: {
                        foo: DataTypes.bool
                    },
                    computed: {
                        bar () {
                        }
                    },
                    initData () {
                        return {
                            dat: null
                        }
                    },
                    _foo () {},
                    test () {}
                }
            `
        }
    ],

    invalid: [
        {
            filename: 'test.san',
            code: `
                export default {
                    dataTypes: {
                        foo: DataTypes.bool
                    },
                    computed: {
                        foo () {
                        }
                    },
                    foo () {
                    },
                    initData () {
                        const foo = ref(1)

                        return {
                            foo
                        }
                    }
                }
            `,
            errors: [
                {
                    message: "Duplicated key 'foo'.",
                    line: 16
                }
            ]
        },
        {
            filename: 'test.js',
            code: `
                san.defineComponent({
                    foo: {
                        bar: String
                    },
                    initData: {
                        bar: null
                    },
                })
            `,
            options: [{groups: ['foo']}],
            errors: [
                {
                    message: "Duplicated key 'bar'.",
                    line: 7
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                export default {
                    initData () {
                        return {
                            get foo() {},
                            set foo(v) {},
                            get foo() {},
                        }
                    }
                }
            `,
            errors: [
                {
                    message: "Duplicated key 'foo'.",
                    line: 7
                }
            ]
        }
    ]
});
