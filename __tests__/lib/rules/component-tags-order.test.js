/**
 * @author Yosuke Ota
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/component-tags-order');
const RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const tester = new RuleTester({
    parser: require.resolve('san-eslint-parser')
});

tester.run('component-tags-order', rule, {
    valid: [
        // default
        '<script></script><template></template><style></style>',
        '<template></template><script></script><style></style>',
        '<script> /*script*/ </script><template><div id="id">text <!--comment--> </div><br></template><style>.button{ color: red; }</style>',
        '<docs></docs><script></script><template></template><style></style>',
        '<script></script><docs></docs><template></template><style></style>',
        '<docs></docs><template></template><script></script><style></style>',
        '<template></template><script></script><docs></docs><style></style>',
        '<script></script><template></template>',
        '<template></template><script></script>',
        `
            <template>
            </template>

            <script>
            </script>

            <style>
            </style>
        `,
        `
            <script>
            </script>

            <template>
            </template>

            <style>
            </style>
        `,

        // order
        {
            filename: 'test.san',
            code: '<script></script><template></template><style></style>',
            output: null,
            options: [{order: ['script', 'template', 'style']}]
        },
        {
            filename: 'test.san',
            code: '<template></template><script></script><style></style>',
            output: null,
            options: [{order: ['template', 'script', 'style']}]
        },
        {
            filename: 'test.san',
            code: '<style></style><template></template><script></script>',
            output: null,
            options: [{order: ['style', 'template', 'script']}]
        },
        {
            filename: 'test.san',
            code: '<template></template><script></script><style></style>',
            output: null,
            options: [{order: ['template', 'docs', 'script', 'style']}]
        },
        {
            filename: 'test.san',
            code: '<template></template><docs></docs><script></script><style></style>',
            output: null,
            options: [{order: ['template', 'script', 'style']}]
        },
        {
            filename: 'test.san',
            code:
                '<docs><div id="id">text <!--comment--> </div><br></docs><script></script><template></template><style></style>',
            output: null,
            options: [{order: ['docs', 'script', 'template', 'style']}]
        },
        {
            filename: 'test.san',
            code: '<template></template><docs></docs><script></script><style></style>',
            output: null,
            options: [{order: [['docs', 'script', 'template'], 'style']}]
        },

        `<script></script><style></style>`,

        // Invalid EOF
        '<template><div a=">test</div></template><style></style>',
        '<template><div><!--test</div></template><style></style>'
    ],
    invalid: [
        {
            filename: 'test.san',
            code: '<style></style><template></template><script></script>',
            errors: [
                {
                    message: 'The <template> should be above the <style> on line 1.',
                    line: 1,
                    column: 16
                },
                {
                    message: 'The <script> should be above the <style> on line 1.',
                    line: 1,
                    column: 37
                }
            ]
        },
        {
            filename: 'test.san',
            code: '<template></template><script></script><style></style>',
            options: [{order: ['script', 'template', 'style']}],
            errors: [
                {
                    message: 'The <script> should be above the <template> on line 1.',
                    line: 1,
                    column: 22
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
            <template></template>

            <style></style>

            <script></script>`,
            errors: [
                {
                    message: 'The <script> should be above the <style> on line 4.',
                    line: 6
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template></template>
                <script></script>
                <style></style>
            `,
            options: [{order: ['script', 'template', 'style']}],
            errors: [
                {
                    message: 'The <script> should be above the <template> on line 2.',
                    line: 3
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <script></script>
                <template></template>
                <style></style>
            `,
            options: [{order: ['template', 'script', 'style']}],
            errors: [
                {
                    message: 'The <template> should be above the <script> on line 2.',
                    line: 3
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template></template>
                <docs></docs>
                <script></script>
                <style></style>
            `,
            options: [{order: ['docs', 'template', 'script', 'style']}],
            errors: [
                {
                    message: 'The <docs> should be above the <template> on line 2.',
                    line: 3
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template></template>
                <docs></docs>
                <script></script>
                <style></style>
            `,
            options: [{order: ['script', 'template', 'style']}],
            errors: [
                {
                    message: 'The <script> should be above the <template> on line 2.',
                    line: 4
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template></template>
                <docs>
                </docs>
                <script></script>
                <style></style>
            `,
            options: [{order: ['script', 'template', 'style']}],
            errors: [
                {
                    message: 'The <script> should be above the <template> on line 2.',
                    line: 5
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <script></script>
                <template></template>
            `,
            options: [{order: ['template', 'script']}],
            errors: [
                {
                    message: 'The <template> should be above the <script> on line 2.',
                    line: 3
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <style></style>
                <template></template>
                <script></script>
            `,
            errors: [
                {
                    message: 'The <template> should be above the <style> on line 2.',
                    line: 3
                },
                {
                    message: 'The <script> should be above the <style> on line 2.',
                    line: 4
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <style></style>
                <docs></docs>
                <template></template>
                <script></script>
            `,
            errors: [
                {
                    message: 'The <template> should be above the <style> on line 2.',
                    line: 4
                },
                {
                    message: 'The <script> should be above the <style> on line 2.',
                    line: 5
                }
            ]
        },
        // no <template>
        {
            filename: 'test.san',
            code: `
                <style></style>
                <script></script>
            `,
            errors: [
                {
                    message: 'The <script> should be above the <style> on line 2.',
                    line: 3
                }
            ]
        }
    ]
});
