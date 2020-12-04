/**
 * @fileoverview disallow usage of `this` in template.
 * @author Armano
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/this-in-template');

const RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester({
    parser: require.resolve('san-eslint-parser'),
    parserOptions: {ecmaVersion: 2020}
});

function createValidTests(prefix, options) {
    const comment = options.join('');
    return [
        {
            code: `<template><div>{{ ${prefix}foo.bar }}</div></template><!-- ${comment} -->`,
            options
        },
        {
            code: `<template><div s-for="foo in ${prefix}bar">{{ foo }}</div></template><!-- ${comment} -->`,
            options
        },
        {
            code: `<template><div s-if="${prefix}foo">{{ ${prefix}foo }}</div></template><!-- ${comment} -->`,
            options
        },
        {
            code: `<template><div :class="${prefix}foo">{{ ${prefix}foo }}</div></template><!-- ${comment} -->`,
            options
        },
        {
            code: `<template><div :class="{this: ${prefix}foo}">{{ ${prefix}foo }}</div></template><!-- ${comment} -->`,
            options
        },
        {
            code: `<template><div s-for="bar in ${prefix}foo" s-if="bar">{{ bar }}</div></template><!-- ${comment} -->`,
            options
        },
        {
            code: `<template><div s-if="${prefix}foo()">{{ ${prefix}bar }}</div></template><!-- ${comment} -->`,
            options
        },
        {
            code: `<template><div :parent="this"></div></template><!-- ${comment} -->`,
            options
        },
        {
            code: `<template><div s-for="x of ${prefix}xs">{{this.x}}</div></template><!-- ${comment} -->`,
            options
        },
        {
            code: `<template><div s-for="x of ${prefix}xs">{{this.x()}}</div></template><!-- ${comment} -->`,
            options
        },
        {
            code: `<template><div s-for="x of ${prefix}xs">{{this.x.y()}}</div></template><!-- ${comment} -->`,
            options
        },
        {
            code: `<template><div s-for="x of ${prefix}xs">{{this.x['foo']}}</div></template><!-- ${comment} -->`,
            options
        },
        {
            code: `<template><div s-for="x of ${prefix}xs">{{this['x']}}</div></template><!-- ${comment} -->`,
            options
        },
        {
            code: `<template><div>{{ this.class }}</div></template><!-- ${comment} -->`,
            options
        },
        {
            code: `<template><div>{{ this['0'] }}</div></template><!-- ${comment} -->`,
            options
        },
        {
            code: `<template><div>{{ this['this'] }}</div></template><!-- ${comment} -->`,
            options
        },
        {
            code: `<template><div>{{ this['foo bar'] }}</div></template><!-- ${comment} -->`,
            options
        },
        {
            code: `<template><div>{{ }}</div></template><!-- ${comment} -->`,
            options
        },
        {
            code: `
            <template>
                <div>
                    <div s-for="bar in ${prefix}foo" s-if="bar">{{ bar }}</div>
                    <div s-for="ssa in ${prefix}sss" s-if="ssa">
                        <div s-for="ssf in ssa" s-if="ssa">{{ ssf }}</div>
                    </div>
                </div>
            </template><!-- ${comment} -->`,
            options
        },

        // We cannot use `.` in dynamic arguments because the right of the `.` becomes a modifier.
        {
            code: `<template><div s-on:[x]="1"></div></template><!-- ${comment} -->`,
            options
        }
    ];
}

function createInvalidTests(prefix, options, message, type) {
    const comment = options.join('');
    return [
        {
            code: `<template><div>{{ ${prefix}foo }}</div></template><!-- ${comment} -->`,
            errors: [{message, type}],
            options
        },
        {
            code: `<template><div>{{ ${prefix}foo() }}</div></template><!-- ${comment} -->`,
            errors: [{message, type}],
            options
        },
        {
            code: `<template><div>{{ ${prefix}foo.bar() }}</div></template><!-- ${comment} -->`,
            errors: [{message, type}],
            options
        },
        {
            code: `<template><div :class="${prefix}foo"></div></template><!-- ${comment} -->`,
            errors: [{message, type}],
            options
        },
        {
            code: `<template><div :class="{foo: ${prefix}foo}"></div></template><!-- ${comment} -->`,
            errors: [{message, type}],
            options
        },
        {
            code: `<template><div :class="{foo: ${prefix}foo()}"></div></template><!-- ${comment} -->`,
            errors: [{message, type}],
            options
        },
        {
            code: `<template><div s-if="${prefix}foo"></div></template><!-- ${comment} -->`,
            errors: [{message, type}],
            options
        },
        {
            code: `<template><div s-for="foo in ${prefix}bar"></div></template><!-- ${comment} -->`,
            errors: [{message, type}],
            options
        }

        // We cannot use `.` in dynamic arguments because the right of the `.` becomes a modifier.
        // {
        //   code: `<template><div s-on:[${prefix}name]="1"></div></template><!-- ${comment} -->`,
        //   errors: [{ message, type }],
        //   options
        // }
    ].concat(
        options[0] === 'always'
            ? []
            : [
                  {
                      code: `<template><div>{{ this['xs'] }}</div></template><!-- ${comment} -->`,
                      errors: [{message, type}],
                      options
                  },
                  {
                      code: `<template><div>{{ this['xs0AZ_foo'] }}</div></template><!-- ${comment} -->`,
                      errors: [{message, type}],
                      options
                  }
              ]
    );
}

ruleTester.run('this-in-template', rule, {
    valid: ['', '<template></template>', '<template><div></div></template>']
        .concat(createValidTests('', []))
        .concat(createValidTests('', ['never']))
        .concat(createValidTests('this.', ['always']))
        .concat(createValidTests('this?.', ['always'])),
    invalid: []
        .concat(
            createInvalidTests('this.', [], "Unexpected usage of 'this'.", 'ThisExpression'),
            createInvalidTests('this?.', [], "Unexpected usage of 'this'.", 'ThisExpression')
        )
        .concat(
            createInvalidTests('this.', ['never'], "Unexpected usage of 'this'.", 'ThisExpression'),
            createInvalidTests('this?.', ['never'], "Unexpected usage of 'this'.", 'ThisExpression')
        )
        .concat(createInvalidTests('', ['always'], "Expected 'this'.", 'Identifier'))
});
