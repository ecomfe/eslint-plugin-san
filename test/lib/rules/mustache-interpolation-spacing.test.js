/**
 * @fileoverview enforce unified spacing in mustache interpolations.
 * @author Armano
 */
'use strict';

/* eslint-disable */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/mustache-interpolation-spacing');
const RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester({
    parser: require.resolve('san-eslint-parser'),
    parserOptions: {ecmaVersion: 2015}
});

ruleTester.run('mustache-interpolation-spacing', rule, {
    valid: [
        {
            filename: 'test.san',
            code: '<template></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template>             <div id="               "></div>         </template>'
        },
        {
            filename: 'test.san',
            code: '<template> <div :style="  " :class="       foo      " s-if=foo   ></div>      </template>'
        },
        {
            filename: 'test.san',
            code: '<template><div>{{ text }}</div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div>{{ }}</div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div>{{ }}</div></template>',
            options: ['always']
        },
        {
            filename: 'test.san',
            code: '<template><div>{{}}</div></template>',
            options: ['never']
        },
        {
            filename: 'test.san',
            code: '<template><div>{{text}}</div></template>',
            options: ['never']
        },
        {
            filename: 'test.san',
            code: '<template><div>{{ text }}</div></template>',
            options: ['always']
        },
        {
            filename: 'test.san',
            code: '<template><div>{{         }}</div></template>',
            options: ['always']
        },
        {
            filename: 'test.san',
            code: '<template><div>{{         }}</div></template>',
            options: ['never']
        },
        {
            filename: 'test.san',
            code: '<template><div>{{   text   }}</div></template>',
            options: ['always']
        }
    ],

    invalid: [
        {
            filename: 'test.san',
            code: '<template><div>{{ text}}</div></template>',
            output: '<template><div>{{ text }}</div></template>',
            options: ['always'],
            errors: ["Expected 1 space before '}}', but not found."]
        },
        {
            filename: 'test.san',
            code: '<template><div>{{text }}</div></template>',
            output: '<template><div>{{ text }}</div></template>',
            options: ['always'],
            errors: ["Expected 1 space after '{{', but not found."]
        },
        {
            filename: 'test.san',
            code: '<template><div>{{ text}}</div></template>',
            output: '<template><div>{{text}}</div></template>',
            options: ['never'],
            errors: ["Expected no space after '{{', but found."]
        },
        {
            filename: 'test.san',
            code: '<template><div>{{text }}</div></template>',
            output: '<template><div>{{text}}</div></template>',
            options: ['never'],
            errors: ["Expected no space before '}}', but found."]
        },
        {
            filename: 'test.san',
            code: '<template><div>{{text}}</div></template>',
            output: '<template><div>{{ text }}</div></template>',
            options: ['always'],
            errors: ["Expected 1 space after '{{', but not found.", "Expected 1 space before '}}', but not found."]
        },
        {
            filename: 'test.san',
            code: '<template><div>{{ text }}</div></template>',
            output: '<template><div>{{text}}</div></template>',
            options: ['never'],
            errors: ["Expected no space after '{{', but found.", "Expected no space before '}}', but found."]
        },
        {
            filename: 'test.san',
            code: '<template><div>{{   text   }}</div></template>',
            output: '<template><div>{{text}}</div></template>',
            options: ['never'],
            errors: ["Expected no space after '{{', but found.", "Expected no space before '}}', but found."]
        }
    ]
});
