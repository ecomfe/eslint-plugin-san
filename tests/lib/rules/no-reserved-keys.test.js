/**
 * @fileoverview Prevent overwrite reserved keys
 * @author Armano
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-reserved-keys');
const RuleTester = require('eslint').RuleTester;

const parserOptions = {
    ecmaVersion: 2018,
    sourceType: 'module'
};

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run('no-reserved-keys', rule, {
    valid: [
        {
            filename: 'test.san',
            code: `
                export default {
                    computed: {
                        bar() {}
                    },
                    initData() {
                        return {
                            dat: null
                        };
                    },
                    _foo() {},
                    test() {}
                };
            `,
            parserOptions
        },
        {
            filename: 'test.san',
            code: `
                export default {
                    computed: {
                        bar() {}
                    },
                    initData: () => {
                        return {
                            dat: null
                        };
                    },
                    _foo() {},
                    test() {}
                };
            `,
            parserOptions
        },
        {
            filename: 'test.san',
            code: `
                export default {
                    dataTypes: ['foo'],
                    computed: {
                        bar() {}
                    },
                    initData: () => ({
                        dat: null
                    }),
                    _foo() {},
                    test() {}
                };
            `,
            parserOptions
        },
        {
            filename: 'test.san',
            code: `
                export default {
                    dataTypes: {
                        foo: DataTypes.string
                    },
                    computed: {
                        bar() {}
                    },
                    initData: () => ({
                        dat: null
                    }),
                    _foo() {},
                    test() {}
                };
            `,
            parserOptions
        }
    ],

    invalid: [
        {
            filename: 'test.js',
            code: `
                san.defineComponent({
                    dataTypes: {
                        el: DataTypes.string
                    }
                })
            `,
            parserOptions: {ecmaVersion: 6},
            errors: [
                {
                    message: "Key 'el' is reserved.",
                    line: 4
                }
            ]
        },
        {
            filename: 'test.js',
            code: `
                san.defineComponent({
                    data: {
                        _foo: ''
                    }
                })
            `,
            parserOptions: {ecmaVersion: 6},
            errors: [
                {
                    message: "Keys starting with with '_' are reserved in '_foo' group.",
                    line: 4
                }
            ]
        },
        {
            filename: 'test.js',
            code: `
                san.defineComponent({
                    initData: () => {
                        return {
                            _foo: ''
                        }
                    }
                })
            `,
            parserOptions: {ecmaVersion: 6},
            errors: [
                {
                    message: "Keys starting with with '_' are reserved in '_foo' group.",
                    line: 5
                }
            ]
        },
        {
            filename: 'test.js',
            code: `
                san.defineComponent({
                    data: {
                        _foo: ''
                    }
                })
            `,
            parserOptions: {ecmaVersion: 6},
            errors: [
                {
                    message: "Keys starting with with '_' are reserved in '_foo' group.",
                    line: 4
                }
            ]
        },
        {
            filename: 'test.js',
            code: `
                san.defineComponent({
                    initData: () => ({
                        _foo: ''
                    })
                })
            `,
            parserOptions: {ecmaVersion: 6},
            errors: [
                {
                    message: "Keys starting with with '_' are reserved in '_foo' group.",
                    line: 4
                }
            ]
        },
        {
            filename: 'test.js',
            code: `
                san.defineComponent({
                    el() {}
                })
            `,
            parserOptions: {ecmaVersion: 6},
            errors: [
                {
                    message: "Key 'el' is reserved.",
                    line: 3
                }
            ]
        },
        {
            filename: 'test.js',
            code: `
                san.defineComponent({
                    foo: {
                        bar: ''
                    }
                })
            `,
            options: [{reserved: ['bar'], groups: ['foo']}],
            parserOptions: {ecmaVersion: 6},
            errors: [
                {
                    message: "Key 'bar' is reserved.",
                    line: 4
                }
            ]
        }
    ]
});
