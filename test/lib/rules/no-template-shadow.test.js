/**
 * @fileoverview Disallow variable declarations from shadowing variables declared in the outer scope.
 * @author Armano
 */
'use strict';

/* eslint-disable */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-template-shadow');
const RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester({
    parser: require.resolve('san-eslint-parser'),
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    }
});

ruleTester.run('no-template-shadow', rule, {
    valid: [
        '',
        '<template><div></div></template>',
        '<template><div s-for="i in 5"></div></template>',
        '<template><div s-for="i in 5"><div s-for="b in 5"></div></div></template>',
        '<template><div s-for="i in 5"></div><div s-for="i in 5"></div></template>',
        '<template> <ul s-for="i in 5"> <li> <span s-for="j in 10">{{i}},{{j}}</span> </li> </ul> </template>',
        {
            filename: 'test.san',
            code: `<template>
                <div s-for="i in 5"></div>
                <div s-for="i in f"></div>
                <div s-for="i in 5"></div>
            </template>
            <script>
                export default {
                    computed: {
                        f () { }
                    }
                }
            </script>`
        },
        {
            filename: 'test.san',
            code: `<template>
                <div s-for="i in b" />
                <div s-for="b in c" />
                <div s-for="d in f" />
            </template>
            <script>
                export default {
                    ...a,
                    initData() {
                        return {
                            ...b,
                            c: [1, 2, 3]
                        }
                    },
                    computed: {
                        ...d,
                        e,
                        ['f']: [1, 2],
                    }
                }
            </script>`
        },
        {
            filename: 'test.san',
            code: `<template>
                <div s-for="i in b" />
                <div s-for="b in c" />
                <div s-for="d in f" />
            </template>
            <script>
                export default {
                    ...a,
                    initData: () => {
                        return {
                            ...b,
                            c: [1, 2, 3]
                        }
                    },
                    computed: {
                        ...d,
                        e,
                        ['f']: [1, 2],
                    }
                }
            </script>`
        },
        {
            filename: 'test.san',
            code: `<template>
                <div s-for="i in b" />
                <div s-for="b in c" />
                <div s-for="d in f" />
            </template>
            <script>
                export default {
                    ...a,
                    initData: () => ({
                        ...b,
                        c: [1, 2, 3]
                    }),
                    computed: {
                        ...d,
                        e,
                        ['f']: [1, 2],
                    }
                }
            </script>`
        }
    ],

    invalid: [
        {
            filename: 'test.san',
            code: '<template><div s-for="i in 5"><div s-for="i in 5"></div></div></template>',
            errors: [
                {
                    message: "Variable 'i' is already declared in the upper scope.",
                    type: 'Identifier'
                }
            ]
        },
        {
            filename: 'test.san',
            code: `<template>
                <div s-for="i in 5"></div>
            </template>
            <script>
                export default {
                    initData () {
                        return {
                            i: 7
                        };
                    }
                }
            </script>`,
            errors: [
                {
                    message: "Variable 'i' is already declared in the upper scope.",
                    type: 'Identifier',
                    line: 2
                }
            ]
        },
        {
            filename: 'test.san',
            code: `<template>
                <div s-for="i in 5"></div>
                <div s-for="i in 5"></div>
            </template>
            <script>
                export default {
                    initData () {
                        return {
                            i: 7
                        };
                    }
                }
            </script>`,
            errors: [
                {
                    message: "Variable 'i' is already declared in the upper scope.",
                    type: 'Identifier',
                    line: 2
                },
                {
                    message: "Variable 'i' is already declared in the upper scope.",
                    type: 'Identifier',
                    line: 3
                }
            ]
        },
        {
            filename: 'test.san',
            code: `<template>
                <div s-for="i in 5">
                    <div s-for="i in 5"></div>
                </div>
            </template>
            <script>
                export default {
                    initData () {
                        return {
                            i: 7
                        };
                    }
                }
            </script>`,
            errors: [
                {
                    message: "Variable 'i' is already declared in the upper scope.",
                    type: 'Identifier',
                    line: 2
                },
                {
                    message: "Variable 'i' is already declared in the upper scope.",
                    type: 'Identifier',
                    line: 3
                }
            ]
        },
        {
            filename: 'test.san',
            code: `<template>
                <div s-for="i in 5"></div>
                <div s-for="f in 5"></div>
            </template>
            <script>
                export default {
                    computed: {
                        i () { }
                    },
                    f () { }
                }
            </script>`,
            errors: [
                {
                    message: "Variable 'i' is already declared in the upper scope.",
                    type: 'Identifier',
                    line: 2
                },
                {
                    message: "Variable 'f' is already declared in the upper scope.",
                    type: 'Identifier',
                    line: 3
                }
            ]
        },
        {
            filename: 'test.san',
            code: `<template>
                <div s-for="i in c" />
                <div s-for="a in c" />
                <div s-for="b in c" />
                <div s-for="d in c" />
                <div s-for="e in f" />
                <div s-for="f in c" />
            </template>
            <script>
                export default {
                    ...a,
                    initData() {
                        return {
                            ...b,
                            c: [1, 2, 3]
                        }
                    },
                    computed: {
                        ...d,
                        e,
                        ['f']: [1, 2],
                    }
                }
            </script>`,
            errors: [
                {
                    message: "Variable 'e' is already declared in the upper scope.",
                    type: 'Identifier',
                    line: 6
                },
                {
                    message: "Variable 'f' is already declared in the upper scope.",
                    type: 'Identifier',
                    line: 7
                }
            ]
        },
        {
            filename: 'test.san',
            code: `<template>
                <div s-for="i in c" />
                <div s-for="a in c" />
                <div s-for="b in c" />
                <div s-for="d in c" />
                <div s-for="e in f" />
                <div s-for="f in c" />
            </template>
            <script>
                export default {
                    ...a,
                    initData: () => {
                        return {
                            ...b,
                            c: [1, 2, 3]
                        }
                    },
                    computed: {
                        ...d,
                        e,
                        ['f']: [1, 2],
                    }
                }
            </script>`,
            errors: [
                {
                    message: "Variable 'e' is already declared in the upper scope.",
                    type: 'Identifier',
                    line: 6
                },
                {
                    message: "Variable 'f' is already declared in the upper scope.",
                    type: 'Identifier',
                    line: 7
                }
            ]
        },
        {
            filename: 'test.san',
            code: `<template>
                <div s-for="i in c" />
                <div s-for="a in c" />
                <div s-for="b in c" />
                <div s-for="d in c" />
                <div s-for="e in f" />
                <div s-for="f in c" />
            </template>
            <script>
                export default {
                    ...a,
                    initData: () => ({
                        ...b,
                        c: [1, 2, 3]
                    }),
                    computed: {
                        ...d,
                        e,
                        ['f']: [1, 2],
                    }
                }
            </script>`,
            errors: [
                {
                    message: "Variable 'e' is already declared in the upper scope.",
                    type: 'Identifier',
                    line: 6
                },
                {
                    message: "Variable 'f' is already declared in the upper scope.",
                    type: 'Identifier',
                    line: 7
                }
            ]
        }
    ]
});
