/**
 * @fileoverview Keep order of properties in components
 * @author Michał Sajnóg
 */
'use strict';

const rule = require('../../../lib/rules/valid-components-name');
const RuleTester = require('eslint').RuleTester;
require('@typescript-eslint/parser');


const ruleTester = new RuleTester({
    parser: require.resolve('san-eslint-parser'),
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module'
    }
});

ruleTester.run('valid-components-name', rule, {
    valid: [
        // 没有 template 与 components
        {
            filename: 'test.san',
            code: `<template>
        <div>
          <a-b />
        </div>
      </template>
      <script>
        export default {
          components: {
            'a-b':A
          }
        }
      </script>`
        },
        {
            filename: 'test.san',
            code: `<script>
                    export default {
                        initData () {
                            return {
                                msg: 'Welcome to Your San.js App'
                            }
                        }
                    }
                </script>`
        },
        {
            filename: 'test.san',
            code: `<template>
                    <a-b></a-b>
                </template>
                <script>
                    export default {
                        initData () {
                            return {
                                msg: 'Welcome to Your San.js App'
                            }
                        },
                        components: {
                            'a-c': A
                        }
                    }
                </script>`
        },
        {
            filename: 'test.ts',
            code: `
                // @san/component
                class A {
                    static template = '<a-b></a-b>';
                    static components = {
                        'a-c': A
                    };
                    initData() {
                        return {
                            b: 1
                        }
                    }
                    static computed = {
                        a() {
                            return 3;
                        }
                    };
                }
                san.defineComponent({
                    template: '<a-b></a-b>',
                    components: {'a-c': A},
                    initDdata () {
                        return {
                            msg: 'Welcome to Your San.js App'
                        }
                    }
                })
                export default {
                    template: '<a-b></a-b>',
                    components: {'a-c': A},
                    initDdata () {
                        return {
                            msg: 'Welcome to Your San.js App'
                        }
                    }
                }
            `,
            parser: require.resolve('san-eslint-parser'),
            parserOptions: {
                parser: require.resolve('@typescript-eslint/parser'),
                ecmaVersion: 6,
                sourceType: "module",
                ecmaFeatures: {
                    classes: true
                }
            }
        },
        {
            filename: 'test.ts',
            code: `
                // @san/component
                class A {
                    static template = '<a-b></a-b>';
                    static components = {
                        'a-c': A
                    };
                    initData() {
                        return {
                            b: 1
                        }
                    }
                    static computed = {
                        a() {
                            return 3;
                        }
                    };
                }
            `,
            parser: require.resolve('san-eslint-parser'),
            parserOptions: {
                parser: require.resolve('@typescript-eslint/parser'),
                ecmaVersion: 6,
                sourceType: "module",
                ecmaFeatures: {
                    classes: true
                }
            }
        }
    ],

    invalid: [
        {
            filename: 'test.ts',
            code: `
                // @san/component
                class A {
                    static template = '<aB></aB>';
                    static components = {
                        'aB': A
                    };
                    initData() {
                        return {
                            b: 1
                        }
                    }
                    static computed = {
                        a() {
                            return 3;
                        }
                    };
                }
                san.defineComponent({
                    template: '<a_B></a_B>',
                    components: {'a_B': A},
                    initDdata () {
                        return {
                            msg: 'Welcome to Your San.js App'
                        }
                    }
                })
                san.defineComponent({
                    template: '<a-b></a-b>',
                    components: {'a-b': A},
                    initDdata () {
                        return {
                            msg: 'Welcome to Your San.js App'
                        }
                    }
                })
                export default {
                    template: '<aB></aB>',
                    components: {'aB': A},
                    initDdata () {
                        return {
                            msg: 'Welcome to Your San.js App'
                        }
                    }
                }
            `,
            parser: require.resolve('san-eslint-parser'),
            parserOptions: {
                parser: require.resolve('@typescript-eslint/parser'),
                ecmaVersion: 6,
                sourceType: "module",
                ecmaFeatures: {
                    classes: true
                }
            },
            output: `
                // @san/component
                class A {
                    static template = '<a-b></a-b>';
                    static components = {
                        'a-b': A
                    };
                    initData() {
                        return {
                            b: 1
                        }
                    }
                    static computed = {
                        a() {
                            return 3;
                        }
                    };
                }
                san.defineComponent({
                    template: '<a-b></a-b>',
                    components: {'a-b': A},
                    initDdata () {
                        return {
                            msg: 'Welcome to Your San.js App'
                        }
                    }
                })
                san.defineComponent({
                    template: '<a-b></a-b>',
                    components: {'a-b': A},
                    initDdata () {
                        return {
                            msg: 'Welcome to Your San.js App'
                        }
                    }
                })
                export default {
                    template: '<a-b></a-b>',
                    components: {'aB': A},
                    initDdata () {
                        return {
                            msg: 'Welcome to Your San.js App'
                        }
                    }
                }
            `,
            errors: [
                {
                    message: 'Component name aB must be kebab-case.',
                    line: 4,
                    column: 40,
                    endLine: 4,
                    endColumn: 49
                  },
                  {
                    message: 'Component name aB must be kebab-case.',
                    line: 6,
                    column: 25,
                    endLine: 6,
                    endColumn: 32,
                  },
                  {
                    message: 'Component name a_B must be kebab-case.',
                    line: 20,
                    column: 32,
                    endLine: 20,
                    endColumn: 43
                  },
                  {
                    message: 'Component name a_B must be kebab-case.',
                    line: 21,
                    column: 34,
                    endLine: 21,
                    endColumn: 42,
                  },
                  {
                    message: 'Component name aB must be kebab-case.',
                    line: 38,
                    column: 32,
                    endLine: 38,
                    endColumn: 41
                  }
            ]
        }
    ]
});
