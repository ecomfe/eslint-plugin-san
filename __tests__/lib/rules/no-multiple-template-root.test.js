/**
 * @fileoverview disallow adding multiple root nodes to the template
 * @author Przemyslaw Falowski (@przemkow)
 */
'use strict';

/* eslint-disable */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-multiple-template-root');

const RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester({
    parser: require.resolve('san-eslint-parser'),
    parserOptions: {ecmaVersion: 2015}
});
ruleTester.run('no-multiple-template-root', rule, {
    valid: [
        {
            filename: 'test.san',
            code: '<template><div>abc</div></template>'
        },
        {
            filename: 'test.san',
            code: '<template>\n    <div>abc</div>\n</template>'
        },
        {
            filename: 'test.san',
            code: '<template>\n    <!-- comment -->\n    <div>abc</div>\n</template>'
        },
        {
            filename: 'test.san',
            code:
                '<template>\n    <!-- comment -->\n    <div s-if="foo">abc</div>\n    <div s-else>abc</div>\n</template>'
        },
        {
            filename: 'test.san',
            code:
                '<template>\n    <!-- comment -->\n    <div s-if="foo">abc</div>\n    <div s-else-if="bar">abc</div>\n    <div s-else>abc</div>\n</template>'
        },
        {
            filename: 'test.san',
            code: `<template>\n    <c1 s-if="1" />\n    <c2 s-else-if="1" />\n    <c3 s-else />\n</template>`
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="foo"></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="foo"></div><div s-else-if="bar"></div></template>'
        }
    ],
    invalid: [
        {
            filename: 'test.san',
            code: '<template><div></div><div></div></template>',
            errors: ['The template root requires exactly one element.']
        },
        {
            filename: 'test.san',
            code: '<template>\n    <div></div>\n    <div></div>\n</template>',
            errors: ['The template root requires exactly one element.']
        },
        {
            filename: 'test.san',
            code: '<template>{{a b c}}</template>',
            errors: ['The template root requires an element rather than texts.']
        },
        {
            filename: 'test.san',
            code: '<template><div></div>aaaaaa</template>',
            errors: ['The template root requires an element rather than texts.']
        },
        {
            filename: 'test.san',
            code: '<template>aaaaaa<div></div></template>',
            errors: ['The template root requires an element rather than texts.']
        },
        {
            filename: 'test.san',
            code: '<template><div s-for="x in list"></div></template>',
            errors: ["The template root disallows 's-for' directives."]
        },
        {
            filename: 'test.san',
            code: '<template><slot></slot></template>',
            errors: ["The template root disallows '<slot>' elements."]
        },
        {
            filename: 'test.san',
            code: '<template><template></template></template>',
            errors: ["The template root disallows '<template>' elements."]
        }
    ]
});
