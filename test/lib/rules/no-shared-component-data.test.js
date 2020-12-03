/**
 * @fileoverview Enforces component's data property to be a function.
 * @author Armano
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-shared-component-data');

const RuleTester = require('eslint').RuleTester;

const parserOptions = {
    ecmaVersion: 2018,
    sourceType: 'module'
};

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run('no-shared-component-data', rule, {
    valid: [
        {
            filename: 'test.js',
            code: `
                san.defineComponent({
                  initData: function () {
                        return {
                            foo: 'bar'
                        }
                    }
                })
            `,
            parserOptions
        },
        {
            filename: 'test.js',
            code: `
                san.defineComponent({
                    ...initData,
                    initData () {
                        return {
                            foo: 'bar'
                        }
                    }
                })
            `,
            parserOptions
        },
        {
            filename: 'test.js',
            code: `
                san.defineComponent('some-comp', {
                    initData: function () {
                        return {
                            foo: 'bar'
                        }
                    }
                })
            `,
            parserOptions
        },
        {
            filename: 'test.san',
            code: `
                export default {
                    initData: function () {
                        return {
                            foo: 'bar'
                        }
                    }
                }
            `,
            parserOptions
        },
        {
            filename: 'test.san',
            code: `
                export default {
                    ...foo
                }
            `,
            parserOptions
        },
        {
            filename: 'test.san',
            code: `
                export default {
                    initData
                }
            `,
            parserOptions
        },
        {
            filename: 'test.san',
            code: `
                export default {
                    initData: () => {

                    }
                }
            `,
            parserOptions
        }
    ],

    invalid: [
        {
            filename: 'test.js',
            code: `
                san.component('some-comp', {
                    initData: {
                        foo: 'bar'
                    }
                })
            `,
            output: `
                san.component('some-comp', {
                    initData: function() {
return {
                        foo: 'bar'
                    };
}
                })
            `,
            parserOptions,
            errors: [
                {
                    message: '`initData` property in component must be a function.',
                    line: 3
                }
            ]
        },
        {
            filename: 'test.js',
            code: `
                app.component('some-comp', {
                    initData: {
                        foo: 'bar'
                    }
                })
            `,
            output: `
                app.component('some-comp', {
                    initData: function() {
return {
                        foo: 'bar'
                    };
}
                })
            `,
            parserOptions,
            errors: [
                {
                    message: '`initData` property in component must be a function.',
                    line: 3
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                export default {
                    initData: {
                        foo: 'bar'
                    }
                }
            `,
            output: `
                export default {
                    initData: function() {
return {
                        foo: 'bar'
                    };
}
                }
            `,
            parserOptions,
            errors: [
                {
                    message: '`initData` property in component must be a function.',
                    line: 3
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                export default {
                    initData: /*a*/ (/*b*/{
                        foo: 'bar'
                    })
                }
            `,
            output: `
                export default {
                    initData: /*a*/ function() {
return (/*b*/{
                        foo: 'bar'
                    });
}
                }
            `,
            parserOptions,
            errors: [
                {
                    message: '`initData` property in component must be a function.',
                    line: 3
                }
            ]
        },
        {
            filename: 'test.js',
            code: `
                san.defineComponent({
                    initData: {
                        foo: 'bar'
                    }
                })
            `,
            output: `
                san.defineComponent({
                    initData: function() {
return {
                        foo: 'bar'
                    };
}
                })
            `,
            parserOptions,
            errors: [
                {
                    message: '`initData` property in component must be a function.',
                    line: 3
                }
            ]
        },
    ]
});
