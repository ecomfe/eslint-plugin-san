/**
 * @author Toru Nagashima
 * @copyright 2017 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/html-quotes');
const RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const tester = new RuleTester({
    parser: require.resolve('san-eslint-parser'),
    parserOptions: {ecmaVersion: 2015}
});

tester.run('html-quotes', rule, {
    valid: [
        {
            filename: 'test.san',
            code: ''
        },
        {
            filename: 'test.san',
            code: '<template><div class="foo"></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div :class="foo"></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div class="foo"></div></template>',
            options: ['double']
        },
        {
            filename: 'test.san',
            code: '<template><div :class="foo"></div></template>',
            options: ['double']
        },
        {
            filename: 'test.san',
            code: "<template><div class='foo'></div></template>",
            options: ['single']
        },
        {
            filename: 'test.san',
            code: "<template><div :class='foo'></div></template>",
            options: ['single']
        },
        // avoidEscape
        {
            filename: 'test.san',
            code: "<template><div attr='foo\"bar'></div></template>",
            options: ['double', {avoidEscape: true}]
        },
        {
            filename: 'test.san',
            code: '<template><div attr="foo\'bar"></div></template>',
            options: ['single', {avoidEscape: true}]
        },

        // Invalid EOF
        {
            code: '<template><div class="foo></div></template>',
            options: ['single']
        },
        {
            code: "<template><div class='foo></div></template>",
            options: ['double']
        }
    ],
    invalid: [
        {
            filename: 'test.san',
            code: '<template><div class=foo></div></template>',
            output: '<template><div class="foo"></div></template>',
            errors: ['Expected to be enclosed by double quotes.']
        },
        {
            filename: 'test.san',
            code: "<template><div class='foo'></div></template>",
            output: '<template><div class="foo"></div></template>',
            errors: ['Expected to be enclosed by double quotes.']
        },
        {
            filename: 'test.san',
            code: '<template><div :class=foo></div></template>',
            output: '<template><div :class="foo"></div></template>',
            errors: ['Expected to be enclosed by double quotes.']
        },
        {
            filename: 'test.san',
            code: "<template><div :class='foo'></div></template>",
            output: '<template><div :class="foo"></div></template>',
            errors: ['Expected to be enclosed by double quotes.']
        },
        {
            filename: 'test.san',
            code: '<template><div :class=foo+"bar"></div></template>',
            output: '<template><div :class="foo+&quot;bar&quot;"></div></template>',
            errors: ['Expected to be enclosed by double quotes.']
        },
        {
            filename: 'test.san',
            code: '<template><div class=foo></div></template>',
            output: '<template><div class="foo"></div></template>',
            options: ['double'],
            errors: ['Expected to be enclosed by double quotes.']
        },
        {
            filename: 'test.san',
            code: "<template><div class='foo'></div></template>",
            output: '<template><div class="foo"></div></template>',
            options: ['double'],
            errors: ['Expected to be enclosed by double quotes.']
        },
        {
            filename: 'test.san',
            code: '<template><div :class=foo></div></template>',
            output: '<template><div :class="foo"></div></template>',
            options: ['double'],
            errors: ['Expected to be enclosed by double quotes.']
        },
        {
            filename: 'test.san',
            code: "<template><div :class='foo'></div></template>",
            output: '<template><div :class="foo"></div></template>',
            options: ['double'],
            errors: ['Expected to be enclosed by double quotes.']
        },
        {
            filename: 'test.san',
            code: '<template><div :class=foo+"bar"></div></template>',
            output: '<template><div :class="foo+&quot;bar&quot;"></div></template>',
            options: ['double'],
            errors: ['Expected to be enclosed by double quotes.']
        },
        {
            filename: 'test.san',
            code: '<template><div class=foo></div></template>',
            output: "<template><div class='foo'></div></template>",
            options: ['single'],
            errors: ['Expected to be enclosed by single quotes.']
        },
        {
            filename: 'test.san',
            code: '<template><div class="foo"></div></template>',
            output: "<template><div class='foo'></div></template>",
            options: ['single'],
            errors: ['Expected to be enclosed by single quotes.']
        },
        {
            filename: 'test.san',
            code: '<template><div :class=foo></div></template>',
            output: "<template><div :class='foo'></div></template>",
            options: ['single'],
            errors: ['Expected to be enclosed by single quotes.']
        },
        {
            filename: 'test.san',
            code: '<template><div :class="foo"></div></template>',
            output: "<template><div :class='foo'></div></template>",
            options: ['single'],
            errors: ['Expected to be enclosed by single quotes.']
        },
        {
            filename: 'test.san',
            code: "<template><div :class=foo+'bar'></div></template>",
            output: "<template><div :class='foo+&apos;bar&apos;'></div></template>",
            options: ['single'],
            errors: ['Expected to be enclosed by single quotes.']
        },
        // avoidEscape
        {
            filename: 'test.san',
            code: "<template><div attr='foo'></div></template>",
            output: '<template><div attr="foo"></div></template>',
            options: ['double', {avoidEscape: true}],
            errors: ['Expected to be enclosed by double quotes.']
        },
        {
            filename: 'test.san',
            code: '<template><div attr="bar"></div></template>',
            output: "<template><div attr='bar'></div></template>",
            options: ['single', {avoidEscape: true}],
            errors: ['Expected to be enclosed by single quotes.']
        },
        {
            filename: 'test.san',
            code: '<template><div attr=foo"bar></div></template>',
            output: "<template><div attr='foo\"bar'></div></template>",
            options: ['double', {avoidEscape: true}],
            errors: ['Expected to be enclosed by double quotes.']
        },
        {
            filename: 'test.san',
            code: "<template><div attr=foo'bar></div></template>",
            output: '<template><div attr="foo\'bar"></div></template>',
            options: ['single', {avoidEscape: true}],
            errors: ['Expected to be enclosed by single quotes.']
        },
        {
            filename: 'test.san',
            code: '<template><div attr=foo"bar\'baz></div></template>',
            output: '<template><div attr="foo&quot;bar\'baz"></div></template>',
            options: ['double', {avoidEscape: true}],
            errors: ['Expected to be enclosed by double quotes.']
        },
        {
            filename: 'test.san',
            code: '<template><div attr=foo"bar\'baz></div></template>',
            output: "<template><div attr='foo\"bar&apos;baz'></div></template>",
            options: ['single', {avoidEscape: true}],
            errors: ['Expected to be enclosed by single quotes.']
        }
    ]
});
