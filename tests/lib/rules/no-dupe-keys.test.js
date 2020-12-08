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
                    data () {
                        return {
                            foo: null
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
                    line: 7
                },
                {
                    message: "Duplicated key 'foo'.",
                    line: 12
                },
                {
                    message: "Duplicated key 'foo'.",
                    line: 21
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
                    dataTypes: {
                        foo: DataTypes.bool
                    },
                    initData () {
                        return {
                            get foo() {
                                return foo
                            },
                            set foo(v) {
                                foo = v
                            }
                        }
                    }
                }
            `,
            errors: [
                {
                    message: "Duplicated key 'foo'.",
                    line: 8
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                export default {
                    dataTypes: {
                        foo: DataTypes.bool
                    },
                    data () {
                        return {
                            set foo(v) {},
                            get foo() {}
                        }
                    }
                }
            `,
            errors: [
                {
                    message: "Duplicated key 'foo'.",
                    line: 9
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                export default {
                    dataTypes: {
                        foo: DataTypes.bool
                    },
                    data () {
                        return {
                            set foo(v) {}
                        }
                    }
                }
            `,
            errors: [
                {
                    message: "Duplicated key 'foo'.",
                    line: 8
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
        },
        {
            filename: 'test.san',
            code: `
                export default {
                    data () {
                        return {
                            get foo() {},
                            set foo(v) {},
                            set foo(v) {},
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
