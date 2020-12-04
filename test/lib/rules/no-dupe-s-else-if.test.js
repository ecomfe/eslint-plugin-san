/**
 * @author Yosuke Ota
 * See LICENSE file in root directory for full license.
 */
'use strict';

const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/no-dupe-s-else-if');

const tester = new RuleTester({
    parser: require.resolve('san-eslint-parser'),
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module'
    }
});

tester.run('no-dupe-s-else-if', rule, {
    valid: [
        {
            filename: 'test.san',
            code: `
                <template>
                    <div s-if="foo" />
                    <div s-else-if="bar" />
                    <div s-else-if="baz" />
                </template>
            `
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <div s-if="foo" >
                        <div s-else-if="foo" />
                    </div>
                </template>
            `
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <div s-if="foo" />
                    <div s-else-if="bar" />
                    <div s-if="bar" />
                    <div s-else-if="foo" />
                </template>
            `
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <div s-if="isSomething(x)" />
                    <div s-else-if="isSomethingElse(x)" />

                    <div s-if="a" />
                    <div s-else-if="b" />
                    <div s-else-if="c && d" />
                    <div s-else-if="c && e" />

                    <div s-if="n === 1" />
                    <div s-else-if="n === 2" />
                    <div s-else-if="n === 3" />
                    <div s-else-if="n === 4" />
                    <div s-else-if="n === 5" />
                </template>
            `
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <div s-if="foo" />
                    <div />
                    <div s-else-if="foo" />
                </template>
            `
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <div s-if />
                    <div s-else-if />
                </template>
            `
        },
        // parse error
        {
            filename: 'test.san',
            code: `
                <template>
                    <div s-if="foo." />
                    <div s-else-if="foo." />
                </template>
            `
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <div s-else-if="foo." />
                    <div s-else-if="foo" />
                </template>
            `
        },

        // Referred to the ESLint core rule.
        '<template><div s-if="a" /><div s-else-if="b" /></template>',
        '<template><div s-if="a" /><div s-else-if="b" /><div s-else-if="c" /></template>',
        '<template><div s-if="true" /><div s-else-if="false" /></template>',
        '<template><div s-if="1" /><div s-else-if="2" /></template>',
        '<template><div s-if="f" /><div s-else-if="f()" /></template>',
        '<template><div s-if="f(a)" /><div s-else-if="g(a)" /></template>',
        '<template><div s-if="f(a)" /><div s-else-if="f(b)" /></template>',
        '<template><div s-if="a === 1" /><div s-else-if="a === 2" /></template>',
        '<template><div s-if="a === 1" /><div s-else-if="b === 1" /></template>',
        '<template><div s-if="a" /></template>',
        '<template><div s-if="a"><div s-if="a" /></div></template>',
        '<template><div s-if="a"><div s-if="b" /></div><div s-else-if="b" /></template>',
        '<template><div s-if="a"><div s-if="b" /><div s-else-if="a" /></div></template>',
        '<template><div s-if="a" /><div s-else-if="!!a" /></template>',
        '<template><div s-if="a === 1" /><div s-else-if="a === (1)" /></template>',
        '<template><div s-if="a || b" /><div s-else-if="c || d" /></template>',
        '<template><div s-if="a || b" /><div s-else-if="a || c" /></template>',
        '<template><div s-if="a" /><div s-else-if="a || b" /></template>',
        '<template><div s-if="a" /><div s-else-if="b" /><div s-else-if="a || b || c" /></template>',
        '<template><div s-if="a && b" /><div s-else-if="a" /><div s-else-if="b" /></template>',
        '<template><div s-if="a && b" /><div s-else-if="b && c" /><div s-else-if="a && c" /></template>',
        '<template><div s-if="a && b" /><div s-else-if="b || c" /></template>',
        '<template><div s-if="a" /><div s-else-if="b && (a || c)" /></template>',
        '<template><div s-if="a" /><div s-else-if="b && (c || d && a)" /></template>',
        '<template><div s-if="a && b && c" /><div s-else-if="a && b && (c || d)" /></template>'
    ],
    invalid: [
        {
            filename: 'test.san',
            code: `
                <template>
                    <div s-if="foo" />
                    <div s-else-if="foo" />
                </template>
            `,
            errors: [
                {
                    message:
                        'This branch can never execute. Its condition is a duplicate or covered by previous conditions in the `s-if` / `s-else-if` chain.',
                    line: 4,
                    column: 37,
                    endLine: 4,
                    endColumn: 40
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <div s-if="isSomething(x)" />
                    <div s-else-if="isSomething(x)" />
                </template>
            `,
            errors: [
                {
                    messageId: 'unexpected',
                    line: 4
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <div s-if="a" />
                    <div s-else-if="b" />
                    <div s-else-if="c && d" />
                    <div s-else-if="c && d" />
                </template>
            `,
            errors: [
                {
                    messageId: 'unexpected',
                    line: 6
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <div s-if="n === 1" />
                    <div s-else-if="n === 2" />
                    <div s-else-if="n === 3" />
                    <div s-else-if="n === 2" />
                    <div s-else-if="n === 5" />
                </template>
            `,
            errors: [
                {
                    messageId: 'unexpected',
                    line: 6
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <div s-if="a || b" />
                    <div s-else-if="a" />
                </template>
            `,
            errors: [
                {
                    messageId: 'unexpected',
                    line: 4
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <div s-if="a" />
                    <div s-else-if="b" />
                    <div s-else-if="a || b" />
                </template>
            `,
            errors: [
                {
                    messageId: 'unexpected',
                    line: 5
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <div s-if="a" />
                    <div s-else-if="a && b" />
                </template>
            `,
            errors: [
                {
                    messageId: 'unexpected',
                    line: 4
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <div s-if="a && b" />
                    <div s-else-if="a && b && c" />
                </template>
            `,
            errors: [
                {
                    messageId: 'unexpected',
                    line: 4
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <div s-if="a || b" />
                    <div s-else-if="b && c" />
                </template>
            `,
            errors: [
                {
                    messageId: 'unexpected',
                    line: 4
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <div s-if="a" />
                    <div s-else-if="b && c" />
                    <div s-else-if="d && (c && e && b || a)" />
                </template>
            `,
            errors: [
                {
                    messageId: 'unexpected',
                    line: 5
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <div s-if="foo" />
                    <div s-else-if="foo && bar" />
                    <div s-else-if="baz && foo" />
                </template>
            `,
            errors: [
                {
                    messageId: 'unexpected',
                    line: 4,
                    column: 37,
                    endLine: 4,
                    endColumn: 40
                },
                {
                    messageId: 'unexpected',
                    line: 5,
                    column: 44,
                    endLine: 5,
                    endColumn: 47
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <div s-if="a && b" />
                    <div s-else-if="a && b && c" />
                    <div s-else-if="a && c && b" />
                </template>
            `,
            errors: [
                {messageId: 'unexpected', line: 4},
                {messageId: 'unexpected', line: 5}
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <div s-if="a || b" />
                    <div s-else-if="a" />
                    <div s-else-if="b" />
                </template>
            `,
            errors: [
                {messageId: 'unexpected', line: 4},
                {messageId: 'unexpected', line: 5}
            ]
        },
        {
            filename: 'foo.san',
            code: `
                <template>
                    <div s-if      ="((f && e) || d) && c || (b && a)" />
                    <div s-else-if ="(a && b) || (c && (d || (e && f)))" />
                    <div s-else-if ="(a && b) || (c && (d || (e && f)))" />
                </template>
            `,
            errors: [{messageId: 'unexpected'}, {messageId: 'unexpected'}]
        },

        // Referred to the ESLint core rule.
        {
            filename: 'test.san',
            code: '<template><div s-if="a" /><div s-else-if="a" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code:
                '<template><div s-if="a" /><div s-else-if="b" /><div s-else-if="a" /><div s-else-if="c" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a" /><div s-else-if="b" /><div s-else-if="a" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code:
                '<template><div s-if="a" /><div s-else-if="b" /><div s-else-if="c" /><div s-else-if="a" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a" /><div s-else-if="b" /><div s-else-if="b" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code:
                '<template><div s-if="a" /><div s-else-if="b" /><div s-else-if="c" /><div s-else-if="b" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code:
                '<template><div s-if="a" /><div s-else-if="b" /><div s-else-if="c" /><div s-else-if="b" /><div s-else-if="d" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code:
                '<template><div s-if="a" /><div s-else-if="b" /><div s-else-if="c" /><div s-else-if="d" /><div s-else-if="b" /><div s-else-if="e" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a" /><div s-else-if="a" /><div s-else-if="a" /></template>',
            errors: [{messageId: 'unexpected'}, {messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code:
                '<template><div s-if="a" /><div s-else-if="b" /><div s-else-if="a" /><div s-else-if="b" /><div s-else-if="a" /></template>',
            errors: [{messageId: 'unexpected'}, {messageId: 'unexpected'}, {messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a"><div s-if="b" /></div><div s-else-if="a" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a === 1" /><div s-else-if="a === 1" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="1 < a" /><div s-else-if="1 < a" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="true" /><div s-else-if="true" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a && b" /><div s-else-if="a && b" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a && b || c" /><div s-else-if="a && b || c" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="f(a)" /><div s-else-if="f(a)" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a === 1" /><div s-else-if="a===1" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a === 1" /><div s-else-if="a === /* comment */ 1" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a || b" /><div s-else-if="a" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a || b" /><div s-else-if="a" /><div s-else-if="b" /></template>',
            errors: [{messageId: 'unexpected'}, {messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a || b" /><div s-else-if="b || a" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a" /><div s-else-if="b" /><div s-else-if="a || b" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a || b" /><div s-else-if="c || d" /><div s-else-if="a || d" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="(a === b && fn(c)) || d" /><div s-else-if="fn(c) && a === b" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a" /><div s-else-if="a && b" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a && b" /><div s-else-if="a && b && c" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a || c" /><div s-else-if="a && b || c" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a" /><div s-else-if="b" /><div s-else-if="c && a || b" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a" /><div s-else-if="b" /><div s-else-if="c && (a || b)" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code:
                '<template><div s-if="a" /><div s-else-if="b && c" /><div s-else-if="d && (a || e && c && b)" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a || b && c" /><div s-else-if="b && c && d" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a || b" /><div s-else-if="b && c" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a" /><div s-else-if="b" /><div s-else-if="(a || b) && c" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="(a && (b || c)) || d" /><div s-else-if="(c || b) && e && a" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a && b || b && c" /><div s-else-if="a && b && c" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code:
                '<template><div s-if="a" /><div s-else-if="b && c" /><div s-else-if="d && (c && e && b || a)" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a || (b && (c || d))" /><div s-else-if="(d || c) && b" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a || b" /><div s-else-if="(b || a) && c" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code:
                '<template><div s-if="a || b" /><div s-else-if="c" /><div s-else-if="d" /><div s-else-if="b && (a || c)" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a || b || c" /><div s-else-if="a || (b && d) || (c && e)" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a || (b || c)" /><div s-else-if="a || (b && c)" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code:
                '<template><div s-if="a || b" /><div s-else-if="c" /><div s-else-if="d" /><div s-else-if="(a || c) && (b || d)" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a" /><div s-else-if="b" /><div s-else-if="c && (a || d && b)" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a" /><div s-else-if="a || a" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a || a" /><div s-else-if="a || a" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a || a" /><div s-else-if="a" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a" /><div s-else-if="a && a" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a && a" /><div s-else-if="a && a" /></template>',
            errors: [{messageId: 'unexpected'}]
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="a && a" /><div s-else-if="a" /></template>',
            errors: [{messageId: 'unexpected'}]
        }
    ]
});
