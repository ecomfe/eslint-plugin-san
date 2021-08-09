/**
 * @fileoverview Keep order of properties in components
 * @author Michał Sajnóg
 */
'use strict';

const rule = require('../../../lib/rules/order-in-components');
const RuleTester = require('eslint').RuleTester;
require('@typescript-eslint/parser');
require('san-eslint-parser');

const ruleTester = new RuleTester();

const parserOptions = {
    ecmaVersion: 2020,
    sourceType: 'module'
};

ruleTester.run('order-in-components', rule, {
    valid: [
        {
            filename: 'test.san',
            code: `
                export default {
                    el: 'app',
                    template: '<div></div>',
                    initData () {
                        return {
                            msg: 'Welcome to Your San.js App'
                        }
                    },
                }
            `,
            parserOptions
        },
        {
            filename: 'example.san',
            code: `
                export default {
                    // 视图
                    'el': '#app',
                    'template': '<div></div>',
                    'components': {},
                
                    // 消息
                    'messages': {},

                    // 数据
                    'dataTypes': {},
                    'computed': {},
                    'filters': {},
                    'initData'() {return {}},
                
                    // 生命周期
                    'compiled'() {},
                    'inited'() {},
                    'created'() {},
                    'attached'() {},
                    'updated'() {},
                    'detached'() {},
                    'disposed'() {}
                };
            `,
            parserOptions
        },
        {
            filename: 'test.san',
            code: `
                export default {}
            `,
            parserOptions
        },
        {
            filename: 'test.san',
            code: `
                export default 'example-text'
            `,
            parserOptions
        },
        {
            filename: 'test.js',
            code: `
                san.defineComponent({
                    name: 'app',
                    components: {},
                    data () {
                        return {
                            msg: 'Welcome to Your San.js App'
                        }
                    }
                })
            `,
            parserOptions: {ecmaVersion: 6}
        },
        {
            filename: 'test.js',
            code: `
                san.defineComponent('example')
            `,
            parserOptions: {ecmaVersion: 6}
        },
        {
            filename: 'test.js',
            code: `
                san.defineComponent({
                    components: {},
                    initDdata () {
                        return {
                            msg: 'Welcome to Your San.js App'
                        }
                    }
                })
            `,
            parserOptions: {ecmaVersion: 6}
        },
        {
            filename: 'test.js',
            code: `
                san.defineComponent({
                    components: {},
                    initData () {
                        return {
                            msg: 'Welcome to Your San.js App'
                        }
                    }
                })
            `,
            parserOptions: {ecmaVersion: 6}
        },
        {
            filename: 'test.js',
            code: `
                san.defineComponent()
            `,
            parserOptions: {ecmaVersion: 6}
        }
    ],

    invalid: [
        {
            filename: 'test.ts',
            code: `
                // @san/component
                class A {
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
            },
            output: `
                // @san/component
                class A {
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
            errors: [
                {
                    message: 'The "computed" property should be above the "initData" property on line 4.',
                    line: 9
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                export default {
                    dataTypes: {},
                    components: {
                        propA: Number,
                    }
                }
            `,
            parserOptions,
            output: `
                export default {
                    components: {
                        propA: Number,
                    },
                    dataTypes: {}
                }
            `,
            errors: [
                {
                    message: 'The "components" property should be above the "dataTypes" property on line 3.',
                    line: 4
                }
            ]
        },
        {
            filename: 'test.js',
            code: `
                san.defineComponent({
                    template: '<div></div>',
                    initData () {
                        return {
                            msg: 'Welcome to Your San.js App'
                        }
                    },
                    components: {}
                })
            `,
            parserOptions: {ecmaVersion: 6},
            output: `
                san.defineComponent({
                    template: '<div></div>',
                    components: {},
                    initData () {
                        return {
                            msg: 'Welcome to Your San.js App'
                        }
                    }
                })
            `,
            errors: [
                {
                    message: 'The "components" property should be above the "initData" property on line 4.',
                    line: 9
                }
            ]
        },
        {
            filename: 'test.js',
            code: `
                app.component({
                    compiled() {},
                    template: '<div></div>'
                })
            `,
            parserOptions: {ecmaVersion: 6},
            output: `
                app.component({
                    template: '<div></div>',
                    compiled() {}
                })
            `,
            errors: [
                {
                    message: 'The "template" property should be above the "compiled" property on line 3.',
                    line: 4
                }
            ]
        },
        {
            filename: 'example.san',
            code: `
                export default {
                    /** compiled of san component */
                    compiled() {
                    },
                    /** template of san component */
                    template() {}
                };
            `,
            parserOptions,
            output: `
                export default {
                    /** template of san component */
                    template() {},
                    /** compiled of san component */
                    compiled() {
                    }
                };
            `,
            errors: [
                {
                    message: 'The "template" property should be above the "compiled" property on line 4.',
                    line: 7
                }
            ]
        },
        {
            filename: 'example.san',
            code: `
                export default {
                    components: {},
                    filters: {},
                    template: '<div></div>'
                };
            `,
            parserOptions,
            output: `
                export default {
                    components: {},
                    template: '<div></div>',
                    filters: {}
                };
            `,
            options: [{order: ['components', 'template', 'filters']}],
            errors: [
                {
                    message: 'The "template" property should be above the "filters" property on line 4.',
                    line: 5
                }
            ]
        },
        {
            filename: 'example.san',
            code: `
                export default {
                    messages: {},
                    computed: {},
                    template: '<div></div>'
                };
            `,
            parserOptions,
            output: `
                export default {
                    template: '<div></div>',
                    messages: {},
                    computed: {}
                };
            `,
            errors: [
                {
                    message: 'The "template" property should be above the "messages" property on line 3.',
                    line: 5
                }
            ]
        },
        {
            // side-effects CallExpression
            filename: 'example.san',
            code: `
                export default {
                    components: {},
                    test: obj.fn(),
                    template: '<div></div>'
                };
            `,
            parserOptions,
            output: null,
            errors: [
                {
                    message: 'The "template" property should be above the "components" property on line 3.',
                    line: 5
                }
            ]
        },
        {
            // side-effects NewExpression
            filename: 'example.san',
            code: `
                export default {
                    components: {},
                    test: new MyClass(),
                    template: '<div></div>'
                };
            `,
            parserOptions,
            output: null,
            errors: [
                {
                    message: 'The "template" property should be above the "components" property on line 3.',
                    line: 5
                }
            ]
        },
        {
            // side-effects UpdateExpression
            filename: 'example.san',
            code: `
                export default {
                    components: {},
                    test: i++,
                    template: '<div></div>'
                };
            `,
            parserOptions,
            output: null,
            errors: [
                {
                    message: 'The "template" property should be above the "components" property on line 3.',
                    line: 5
                }
            ]
        },
        {
            // side-effects AssignmentExpression
            filename: 'example.san',
            code: `
                export default {
                    components: {},
                    test: i = 0,
                    template: '<div></div>'
                };
            `,
            parserOptions,
            output: null,
            errors: [
                {
                    message: 'The "template" property should be above the "components" property on line 3.',
                    line: 5
                }
            ]
        },
        {
            // side-effects TaggedTemplateExpression
            filename: 'example.san',
            code: `
                export default {
                    components: {},
                    test: template\`\${foo}\`,
                    template: '<div></div>'
                };
            `,
            parserOptions,
            output: null,
            errors: [
                {
                    message: 'The "template" property should be above the "components" property on line 3.',
                    line: 5
                }
            ]
        },
        {
            // side-effects key
            filename: 'example.san',
            code: `
                export default {
                    components: {},
                    [obj.fn()]: 'test',
                    template: '<div></div>'
                };
            `,
            parserOptions,
            output: null,
            errors: [
                {
                    message: 'The "template" property should be above the "components" property on line 3.',
                    line: 5
                }
            ]
        },
        {
            // side-effects object deep props
            filename: 'example.san',
            code: `
                export default {
                    components: {},
                    test: {test: obj.fn()},
                    template: '<div></div>'
                };
            `,
            parserOptions,
            output: null,
            errors: [
                {
                    message: 'The "template" property should be above the "components" property on line 3.',
                    line: 5
                }
            ]
        },
        {
            // side-effects array elements
            filename: 'example.san',
            code: `
                export default {
                    components: {},
                    test: [obj.fn(), 1],
                    template: '<div></div>'
                };
            `,
            parserOptions,
            output: null,
            errors: [
                {
                    message: 'The "template" property should be above the "components" property on line 3.',
                    line: 5
                }
            ]
        },
        {
            // side-effects call at middle
            filename: 'example.san',
            code: `
                export default {
                    components: {},
                    test: obj.fn().prop,
                    template: '<div></div>'
                };
            `,
            parserOptions,
            output: null,
            errors: [
                {
                    message: 'The "template" property should be above the "components" property on line 3.',
                    line: 5
                }
            ]
        },
        {
            // side-effects delete
            filename: 'example.san',
            code: `
                export default {
                    components: {},
                    test: delete obj.prop,
                    template: '<div></div>'
                };
            `,
            parserOptions,
            output: null,
            errors: [
                {
                    message: 'The "template" property should be above the "components" property on line 3.',
                    line: 5
                }
            ]
        },
        {
            // side-effects within BinaryExpression
            filename: 'example.san',
            code: `
                export default {
                    components: {},
                    test: fn() + a + b,
                    template: '<div></div>'
                };
            `,
            parserOptions,
            output: null,
            errors: [
                {
                    message: 'The "template" property should be above the "components" property on line 3.',
                    line: 5
                }
            ]
        },
        {
            // side-effects within ConditionalExpression
            filename: 'example.san',
            code: `
                export default {
                    components: {},
                    test: a ? fn() : null,
                    template: '<div></div>'
                };
            `,
            parserOptions,
            output: null,
            errors: [
                {
                    message: 'The "template" property should be above the "components" property on line 3.',
                    line: 5
                }
            ]
        },
        {
            // side-effects within TemplateLiteral
            filename: 'example.san',
            code: `
                export default {
                    components: {},
                    test: \`test \${fn()} \${a}\`,
                    template: '<div></div>'
                };
            `,
            parserOptions,
            output: null,
            errors: [
                {
                    message: 'The "template" property should be above the "components" property on line 3.',
                    line: 5
                }
            ]
        },
        {
            // without side-effects
            filename: 'example.san',
            code: `
                export default {
                    components: {},
                    template: '<div></div>',
                    test: \`test \${fn()} \${a}\`,
                };
            `,
            parserOptions,
            output: `
                export default {
                    template: '<div></div>',
                    components: {},
                    test: \`test \${fn()} \${a}\`,
                };
            `,
            errors: [
                {
                    message: 'The "template" property should be above the "components" property on line 3.',
                    line: 4
                }
            ]
        },
        {
            // don't side-effects
            filename: 'example.san',
            code: `
                export default {
                    components: {},
                    testArray: [1, 2, 3, true, false, 'a', 'b', 'c'],
                    testRegExp: /[a-z]*/,
                    testSpreadElement: [...array],
                    testOperator: (!!(a - b + c * d / e % f)) || (a && b),
                    testArrow: (a) => a,
                    testConditional: a ? b : c,
                    testYield: function* () {},
                    testTemplate: \`a:\${a},b:\${b},c:\${c}.\`,
                    testNullish: a ?? b,
                    testOptionalChaining: a?.b?.c,
                    template: '<div></div>',
                };
            `,
            parserOptions,
            output: `
                export default {
                    template: '<div></div>',
                    components: {},
                    testArray: [1, 2, 3, true, false, 'a', 'b', 'c'],
                    testRegExp: /[a-z]*/,
                    testSpreadElement: [...array],
                    testOperator: (!!(a - b + c * d / e % f)) || (a && b),
                    testArrow: (a) => a,
                    testConditional: a ? b : c,
                    testYield: function* () {},
                    testTemplate: \`a:\${a},b:\${b},c:\${c}.\`,
                    testNullish: a ?? b,
                    testOptionalChaining: a?.b?.c,
                };
            `,
            errors: [
                {
                    message: 'The "template" property should be above the "components" property on line 3.',
                    line: 14
                }
            ]
        }
    ]
});
