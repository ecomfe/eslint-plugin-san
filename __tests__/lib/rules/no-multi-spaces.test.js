/**
 * @fileoverview This rule warns about the usage of extra whitespaces between attributes
 * @author Armano
 */
'use strict';

/* eslint-disable */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-multi-spaces');
const RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester({
    parser: require.resolve('san-eslint-parser'),
    parserOptions: {ecmaVersion: 2015, sourceType: 'module'}
});

ruleTester.run('no-multi-spaces', rule, {
    valid: [
        '',
        '<template></template>',
        '<template><div /></template>',
        '<template><div class="foo"></div></template>',
        '<template><div class="     foo   " style="     foo   "></div></template>',
        '<template><div class="foo" @click="bar"></div></template>',
        '<template><div class="foo"\n          :style="foo"></div></template>',
        '<template><div class="foo"\n\t\t\t:style="foo"></div></template>',
        '<template><div class="foo"\n      :style="foo"\n      ></div></template>',
        '<template><div class="foo"\n                       :style="foo" /></template>',
        '<template><div class="foo"\n                       :style="foo"\n                            /></template>',
        '<template><div>{{ test }}</div></template>',
        '<template><div>{{test}}</div></template>',
        '<template><div>{{test}}<!-- fooo --></div></template>',
        '<template><div>{{test}} <!--        fooo           --></div></template>',
        '<template><div s-for="i in b">{{ i }}</div></template>',
        '<template><div s-for=" i in b ">{{ i }}</div></template>',
        '<template><div :test="`           `"> {{ a }} </div></template>',
        '<template><div :test="`           `">          \n        {{ a }} </div></template>',
        {
            filename: 'test.js',
            code: 'export default { }'
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <i
                        :class="{
                            'fa-angle-up'   : isExpanded,
                            'fa-angle-down' : !isExpanded,
                        }"
                    />
                </template>
            `,
            options: [
                {
                    ignoreProperties: true
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <i
                        :class="{
                            'fa-angle-up':   isExpanded,
                            'fa-angle-down': !isExpanded,
                        }"
                    />
                </template>
            `,
            options: [
                {
                    ignoreProperties: true
                }
            ]
        }
    ],
    invalid: [
        {
            filename: 'test.san',
            code: '<template><div     /></template>',
            output: '<template><div /></template>',
            errors: [
                {
                    message: "Multiple spaces found before '/>'.",
                    type: 'HTMLSelfClosingTagClose'
                }
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div   class="foo"  /></template>',
            output: '<template><div class="foo" /></template>',
            errors: [
                {
                    message: "Multiple spaces found before 'class'.",
                    type: 'HTMLIdentifier'
                },
                {
                    message: "Multiple spaces found before '/>'.",
                    type: 'HTMLSelfClosingTagClose'
                }
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div\t\tclass="foo"\t\t/></template>',
            output: '<template><div class="foo" /></template>',
            errors: [
                {
                    message: "Multiple spaces found before 'class'.",
                    type: 'HTMLIdentifier'
                },
                {
                    message: "Multiple spaces found before '/>'.",
                    type: 'HTMLSelfClosingTagClose'
                }
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div   :class="foo"  /></template>',
            output: '<template><div :class="foo" /></template>',
            errors: [
                {
                    message: "Multiple spaces found before ':'.",
                    type: 'Punctuator'
                },
                {
                    message: "Multiple spaces found before '/>'.",
                    type: 'HTMLSelfClosingTagClose'
                }
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div :foo="" class="foo"  /></template>',
            output: '<template><div :foo="" class="foo" /></template>',
            errors: [
                {
                    message: "Multiple spaces found before '/>'.",
                    type: 'HTMLSelfClosingTagClose'
                }
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div foo="" class="foo"  /></template>',
            output: '<template><div foo="" class="foo" /></template>',
            errors: [
                {
                    message: "Multiple spaces found before '/>'.",
                    type: 'HTMLSelfClosingTagClose'
                }
            ]
        },
        {
            filename: 'test.san',
            code: '<template><foo s-foo="" class="foo"  /></template>',
            output: '<template><foo s-foo="" class="foo" /></template>',
            errors: [
                {
                    message: "Multiple spaces found before '/>'.",
                    type: 'HTMLSelfClosingTagClose'
                }
            ]
        },
        {
            filename: 'test.san',
            code: '<template><foo s-foo="" \n         class="foo"    /></template>',
            output: '<template><foo s-foo="" \n         class="foo" /></template>',
            errors: [
                {
                    message: "Multiple spaces found before '/>'.",
                    type: 'HTMLSelfClosingTagClose'
                }
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div>{{  test  }}</div></template>',
            output: '<template><div>{{ test }}</div></template>',
            errors: [
                {
                    message: "Multiple spaces found before 'test'.",
                    type: 'Identifier'
                },
                {
                    message: "Multiple spaces found before '}}'.",
                    type: 'VExpressionEnd'
                }
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div               ></div></template>',
            output: '<template><div ></div></template>',
            errors: [
                {
                    message: "Multiple spaces found before '>'.",
                    type: 'HTMLTagClose'
                }
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div s-for="      i    in    b       ">{{ test }}</div></template>',
            output: '<template><div s-for=" i in b ">{{ test }}</div></template>',
            errors: [
                {
                    message: "Multiple spaces found before 'i'.",
                    type: 'Identifier'
                },
                {
                    message: "Multiple spaces found before 'in'.",
                    type: 'Keyword'
                },
                {
                    message: "Multiple spaces found before 'b'.",
                    type: 'Identifier'
                },
                {
                    message: "Multiple spaces found before '\"'.",
                    type: 'Punctuator'
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <i
                        :class="{
                            'fa-angle-up'   : isExpanded,
                            'fa-angle-down' : !isExpanded,
                        }"
                    />
                </template>
            `,
            output: `
                <template>
                    <i
                        :class="{
                            'fa-angle-up' : isExpanded,
                            'fa-angle-down' : !isExpanded,
                        }"
                    />
                </template>
            `,
            errors: [
                {
                    message: "Multiple spaces found before ':'.",
                    type: 'Punctuator'
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
                <template>
                    <i
                        :class="{
                            'fa-angle-up':   isExpanded,
                            'fa-angle-down': !isExpanded,
                        }"
                    />
                </template>
            `,
            output: `
                <template>
                    <i
                        :class="{
                            'fa-angle-up': isExpanded,
                            'fa-angle-down': !isExpanded,
                        }"
                    />
                </template>
            `,
            errors: [
                {
                    message: "Multiple spaces found before 'isExpanded'.",
                    type: 'Identifier'
                }
            ]
        }
    ]
});
