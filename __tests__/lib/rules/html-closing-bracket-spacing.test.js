/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 */

'use strict';

/* eslint-disable */

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/html-closing-bracket-spacing');

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester({
    parser: require.resolve('san-eslint-parser'),
    parserOptions: {
        ecmaVersion: 2015
    }
});

ruleTester.run('html-closing-bracket-spacing', rule, {
    valid: [
        '',
        '<template><div></div><div /></template>',
        '<template><div foo></div><div foo /></template>',
        '<template><div foo=a></div><div foo=a /></template>',
        '<template><div foo="a"></div><div foo="a" /></template>',
        {
            filename: 'test.san',
            code: '<template ><div ></div><div /></template>',
            options: [{startTag: 'always'}]
        },
        {
            filename: 'test.san',
            code: '<template><div></div ><div /></template >',
            options: [{endTag: 'always'}]
        },
        {
            filename: 'test.san',
            code: '<template><div></div><div/></template>',
            options: [{selfClosingTag: 'never'}]
        },
        '<template><div',
        '<template><div></div',
        {
            filename: 'test.san',
            code: '<template><div',
            options: [{startTag: 'never', endTag: 'never'}]
        },
        {
            filename: 'test.san',
            code: '<template><div></div',
            options: [{startTag: 'never', endTag: 'never'}]
        }
    ],
    invalid: [
        {
            filename: 'test.san',
            code: '<template>\n  <div >\n  </div >\n  <div/>\n</template>',
            output: '<template>\n  <div>\n  </div>\n  <div />\n</template>',
            errors: [
                {
                    message: "Expected no space before '>', but found.",
                    line: 2,
                    column: 7,
                    endColumn: 9
                },
                {
                    message: "Expected no space before '>', but found.",
                    line: 3,
                    column: 8,
                    endColumn: 10
                },
                {
                    message: "Expected a space before '/>', but not found.",
                    line: 4,
                    column: 7,
                    endColumn: 9
                }
            ]
        },
        {
            filename: 'test.san',
            code: '<template>\n  <div foo ></div>\n  <div foo/>\n</template>',
            output: '<template>\n  <div foo></div>\n  <div foo />\n</template>',
            errors: [
                {
                    message: "Expected no space before '>', but found.",
                    line: 2,
                    column: 11,
                    endColumn: 13
                },
                {
                    message: "Expected a space before '/>', but not found.",
                    line: 3,
                    column: 11,
                    endColumn: 13
                }
            ]
        },
        {
            filename: 'test.san',
            code: '<template>\n  <div foo="1" ></div>\n  <div foo="1"/>\n</template>',
            output: '<template>\n  <div foo="1"></div>\n  <div foo="1" />\n</template>',
            errors: [
                {
                    message: "Expected no space before '>', but found.",
                    line: 2,
                    column: 15,
                    endColumn: 17
                },
                {
                    message: "Expected a space before '/>', but not found.",
                    line: 3,
                    column: 15,
                    endColumn: 17
                }
            ]
        },
        {
            filename: 'test.san',
            code: '<template >\n  <div>\n  </div>\n  <div />\n</template >',
            output: '<template >\n  <div >\n  </div >\n  <div/>\n</template >',
            options: [
                {
                    startTag: 'always',
                    endTag: 'always',
                    selfClosingTag: 'never'
                }
            ],
            errors: [
                {
                    message: "Expected a space before '>', but not found.",
                    line: 2,
                    column: 7,
                    endColumn: 8
                },
                {
                    message: "Expected a space before '>', but not found.",
                    line: 3,
                    column: 8,
                    endColumn: 9
                },
                {
                    message: "Expected no space before '/>', but found.",
                    line: 4,
                    column: 7,
                    endColumn: 10
                }
            ]
        }
    ]
});
