/**
 * @author Toru Nagashima
 * @copyright 2017 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-parsing-error');
const RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const tester = new RuleTester({
    parser: require.resolve('san-eslint-parser'),
    parserOptions: {ecmaVersion: 2015}
});

tester.run('no-parsing-error', rule, {
    valid: [
        {
            filename: 'test.san',
            code: ''
        },
        {
            filename: 'test.san',
            code: '<template>a b c</template>'
        },
        {
            filename: 'test.san',
            code: '<template><div a="{=123=}"></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><slot a="{=123=}"></slot></template>'
        },
        {
            filename: 'test.san',
            code: '<template>{{a + b + c}}</template>'
        },
        {
            filename: 'test.san',
            code: '<template><svg class="icon"><use xlink:href="#chevron"></use></svg></template>'
        },
        {
            filename: 'test.san',
            code: '<template><svg viewBox="0 0 40 40"></svg></template>'
        },
        {
            filename: 'test.san',
            code: '<table><tr><td></td></tr></table>'
        },
        {
            filename: 'test.san',
            code: '<a @click="foo(); bar()">link</a>'
        },
        {
            
            filename: 'test.san',
            code: `<template s-for="x of list"><slot name="item" /></template>`
        },
        {
            filename: 'test.san',
            code: `<template><!--></template>`,
            options: [{'abrupt-closing-of-empty-comment': false}]
        },
        {
            filename: 'test.san',
            code: `<template><!---></template>`,
            options: [{'abrupt-closing-of-empty-comment': false}]
        },
        {
            filename: 'test.san',
            code: `<template>&#qux;</template>`,
            options: [{'absence-of-digits-in-numeric-character-reference': false}]
        },
        {
            filename: 'test.san',
            code: '<template><![CDATA[cdata]]></template>',
            options: [{'cdata-in-html-content': false}]
        },
        {
            filename: 'test.san',
            code: '<template>&#1234567;</template>',
            options: [{'character-reference-outside-unicode-range': false}]
        },
        {
            filename: 'test.san',
            code: '<template>\u0003</template>',
            options: [{'control-character-in-input-stream': false}]
        },
        {
            filename: 'test.san',
            code: '<template>&#0003;</template>',
            options: [{'control-character-reference': false}]
        },
        {
            filename: 'test.san',
            code: '<template><',
            options: [{'eof-before-tag-name': false}]
        },
        {
            filename: 'test.san',
            code: '<template><svg><![CDATA[cdata',
            options: [{'eof-in-cdata': false}],
            errors: ['Parsing error: eof-in-cdata.']
        },
        {
            filename: 'test.san',
            code: '<template><!--comment',
            options: [{'eof-in-comment': false}],
            errors: ['Parsing error: eof-in-comment.']
        },
        {
            filename: 'test.san',
            code: '<template><div class=""',
            options: [{'eof-in-tag': false}]
        },
        {
            filename: 'test.san',
            code: '<template><!--comment--!></template>',
            options: [{'incorrectly-closed-comment': false}]
        },
        {
            filename: 'test.san',
            code: '<template><!ELEMENT br EMPTY></template>',
            options: [{'incorrectly-opened-comment': false}]
        },
        {
            filename: 'test.san',
            code: '<template><👍>/template>',
            options: [{'invalid-first-character-of-tag-name': false}]
        },
        {
            filename: 'test.san',
            code: '<template><div id=></template>',
            options: [{'missing-attribute-value': false}]
        },
        {
            filename: 'test.san',
            code: '<template></></template>',
            options: [{'missing-end-tag-name': false}]
        },
        {
            filename: 'test.san',
            code: '<template>&amp</template>',
            options: [{'missing-semicolon-after-character-reference': false}]
        },
        {
            filename: 'test.san',
            code: '<template><div id="foo"class="bar"></template>',
            options: [{'missing-whitespace-between-attributes': false}]
        },
        {
            filename: 'test.san',
            code: '<template><!--a<!--b--></template>',
            options: [{'nested-comment': false}]
        },
        {
            filename: 'test.san',
            code: '<template>&#xFFFE;</template>',
            options: [{'noncharacter-character-reference': false}]
        },
        {
            filename: 'test.san',
            code: '<template>\uFFFE</template>',
            options: [{'noncharacter-in-input-stream': false}]
        },
        {
            filename: 'test.san',
            code: '<template>&#0000;</template>',
            options: [{'null-character-reference': false}]
        },
        {
            filename: 'test.san',
            code: '<template>&#xD800;</template>',
            options: [{'surrogate-character-reference': false}]
        },
        {
            filename: 'test.san',
            code: '<template>\uD800</template>',
            options: [{'surrogate-in-input-stream': false}]
        },
        {
            filename: 'test.san',
            code: '<template><div a"bc=""></template>',
            options: [{'unexpected-character-in-attribute-name': false}]
        },
        {
            filename: 'test.san',
            code: '<template><div foo=bar"></template>',
            options: [{'unexpected-character-in-unquoted-attribute-value': false}]
        },
        {
            filename: 'test.san',
            code: '<template><div =foo></template>',
            options: [{'unexpected-equals-sign-before-attribute-name': false}]
        },
        {
            filename: 'test.san',
            code: '<template>\u0000</template>',
            options: [{'unexpected-null-character': false}]
        },
        {
            filename: 'test.san',
            code: '<template><?xml?></template>',
            options: [{'unexpected-question-mark-instead-of-tag-name': false}]
        },
        {
            filename: 'test.san',
            code: '<template><div id="" / class=""></template>',
            options: [{'unexpected-solidus-in-tag': false}]
        },
        {
            filename: 'test.san',
            code: '<template>&unknown;</template>',
            options: [{'unknown-named-character-reference': false}]
        },
        {
            filename: 'test.san',
            code: '<template><div></div id=""></template>',
            options: [{'end-tag-with-attributes': false}]
        },
        {
            filename: 'test.san',
            code: '<template><div id="" id=""></div></template>',
            options: [{'duplicate-attribute': false}]
        },
        {
            filename: 'test.san',
            code: '<template><div></div/></template>',
            options: [{'end-tag-with-trailing-solidus': false}]
        },
        {
            filename: 'test.san',
            code: '<template><div/></template>',
            options: [{'non-void-html-element-start-tag-with-trailing-solidus': false}]
        },
        {
            filename: 'test.san',
            code: '<template></div></template>',
            options: [{'x-invalid-end-tag': false}],
            errors: ['Parsing error: x-invalid-end-tag.']
        },
        {
            filename: 'test.san',
            code: '<template><div xmlns=""></template>',
            options: [{'x-invalid-namespace': false}]
        },
        '<template><div/></template>',
        '<template><div s-show="">hello</div></template>',
        '<template><div>{{ }}</div></template>'
    ],
    invalid: [
        {
            filename: 'test.san',
            code: '<template><div s-if="{=123=}"></div></template>',
            errors: ['Parsing error: Unexpected token =.']
        },
        {
            filename: 'test.san',
            code: '<template><slot s-for="{=123=}"></slot></template>',
            errors: ["Parsing error: '{=123=}' is invalid directive for s-for."]
        },
        {
            filename: 'test.san',
            code: '<template><slot s-if="{=123=}"></slot></template>',
            errors: ['Parsing error: Unexpected token =.']
        },
        {
            filename: 'test.san',
            code: '<template><slot var-n="{=123=}"></slot></template>',
            errors: ['Parsing error: Unexpected token =.']
        },
        {
            
            filename: 'test.san',
            code: '<template>{{a b c}}</template>',
            errors: ['Parsing error: Unexpected token b.']
        },
        {
            
            filename: 'test.san',
            code: '<template><div>{{a b c}}</div></template>',
            errors: ['Parsing error: Unexpected token b.']
        },
        {
            
            filename: 'test.san',
            code: '<template><div s-show="a b c">hello</div></template>',
            errors: ['Parsing error: Unexpected token b.']
        },
        {
            
            filename: 'test.san',
            code: '<template><div s-show="a;b;">hello</div></template>',
            errors: ['Parsing error: Unexpected token ;.']
        },
        {
            
            filename: 'test.san',
            code: '<template><div s-show=" ">hello</div></template>',
            errors: [
                {
                    message: 'Parsing error: Expected to be an expression, but got empty.',
                    column: 24
                }
            ]
        },
        {
            
            filename: 'test.san',
            code: '<template><div s-for="foo">hello</div></template>',
            errors: [{message: "Parsing error: 'foo' is invalid directive for s-for.", column: 23}]
        },
        {
            
            filename: 'test.san',
            code: '<template><div s-for="foo() in list">hello</div></template>',
            errors: [{message: "Parsing error: 'foo() in list' is invalid directive for s-for.", column: 23}]
        },
        {
            filename: 'test.san',
            code: `<template><!--></template>`,
            options: [{'abrupt-closing-of-empty-comment': true}],
            errors: ['Parsing error: abrupt-closing-of-empty-comment.']
        },
        {
            filename: 'test.san',
            code: `<template><!---></template>`,
            options: [{'abrupt-closing-of-empty-comment': true}],
            errors: ['Parsing error: abrupt-closing-of-empty-comment.']
        },
        {
            filename: 'test.san',
            code: `<template>&#qux;</template>`,
            options: [{'absence-of-digits-in-numeric-character-reference': true}],
            errors: ['Parsing error: absence-of-digits-in-numeric-character-reference.']
        },
        {
            filename: 'test.san',
            code: '<template><![CDATA[cdata]]></template>',
            options: [{'cdata-in-html-content': true}],
            errors: ['Parsing error: cdata-in-html-content.']
        },
        {
            filename: 'test.san',
            code: '<template>&#1234567;</template>',
            options: [{'character-reference-outside-unicode-range': true}],
            errors: ['Parsing error: character-reference-outside-unicode-range.']
        },
        {
            filename: 'test.san',
            code: '<template>\u0003</template>',
            options: [{'control-character-in-input-stream': true}],
            errors: ['Parsing error: control-character-in-input-stream.']
        },
        {
            filename: 'test.san',
            code: '<template>&#0003;</template>',
            options: [{'control-character-reference': true}],
            errors: ['Parsing error: control-character-reference.']
        },
        {
            filename: 'test.san',
            code: '<template><',
            options: [{'eof-before-tag-name': true}],
            errors: ['Parsing error: eof-before-tag-name.']
        },
        {
            filename: 'test.san',
            code: '<template><svg><![CDATA[cdata',
            options: [{'eof-in-cdata': true}],
            errors: ['Parsing error: eof-in-cdata.']
        },
        {
            filename: 'test.san',
            code: '<template><!--comment',
            options: [{'eof-in-comment': true}],
            errors: ['Parsing error: eof-in-comment.']
        },
        {
            filename: 'test.san',
            code: '<template><div class=""',
            options: [{'eof-in-tag': true}],
            errors: ['Parsing error: eof-in-tag.']
        },
        {
            filename: 'test.san',
            code: '<template><!--comment--!></template>',
            options: [{'incorrectly-closed-comment': true}],
            errors: ['Parsing error: incorrectly-closed-comment.']
        },
        {
            filename: 'test.san',
            code: '<template><!ELEMENT br EMPTY></template>',
            options: [{'incorrectly-opened-comment': true}],
            errors: ['Parsing error: incorrectly-opened-comment.']
        },
        {
            filename: 'test.san',
            code: '<template><👍>/template>',
            options: [{'invalid-first-character-of-tag-name': true}],
            errors: ['Parsing error: invalid-first-character-of-tag-name.']
        },
        {
            filename: 'test.san',
            code: '<template><div id=></template>',
            options: [{'missing-attribute-value': true}],
            errors: ['Parsing error: missing-attribute-value.']
        },
        {
            filename: 'test.san',
            code: '<template></></template>',
            options: [{'missing-end-tag-name': true}],
            errors: ['Parsing error: missing-end-tag-name.']
        },
        {
            filename: 'test.san',
            code: '<template>&amp</template>',
            options: [{'missing-semicolon-after-character-reference': true}],
            errors: ['Parsing error: missing-semicolon-after-character-reference.']
        },
        {
            filename: 'test.san',
            code: '<template><div id="foo"class="bar"></template>',
            options: [{'missing-whitespace-between-attributes': true}],
            errors: ['Parsing error: missing-whitespace-between-attributes.']
        },
        {
            filename: 'test.san',
            code: '<template><!--a<!--b--></template>',
            options: [{'nested-comment': true}],
            errors: ['Parsing error: nested-comment.']
        },
        {
            filename: 'test.san',
            code: '<template>&#xFFFE;</template>',
            options: [{'noncharacter-character-reference': true}],
            errors: ['Parsing error: noncharacter-character-reference.']
        },
        {
            filename: 'test.san',
            code: '<template>\uFFFE</template>',
            options: [{'noncharacter-in-input-stream': true}],
            errors: ['Parsing error: noncharacter-in-input-stream.']
        },
        {
            filename: 'test.san',
            code: '<template>&#0000;</template>',
            options: [{'null-character-reference': true}],
            errors: ['Parsing error: null-character-reference.']
        },
        {
            filename: 'test.san',
            code: '<template>&#xD800;</template>',
            options: [{'surrogate-character-reference': true}],
            errors: ['Parsing error: surrogate-character-reference.']
        },
        {
            filename: 'test.san',
            code: '<template>\uD800</template>',
            options: [{'surrogate-in-input-stream': true}],
            errors: ['Parsing error: surrogate-in-input-stream.']
        },
        {
            filename: 'test.san',
            code: '<template><div a"bc=""></template>',
            options: [{'unexpected-character-in-attribute-name': true}],
            errors: ['Parsing error: unexpected-character-in-attribute-name.']
        },
        {
            filename: 'test.san',
            code: '<template><div foo=bar"></template>',
            options: [{'unexpected-character-in-unquoted-attribute-value': true}],
            errors: ['Parsing error: unexpected-character-in-unquoted-attribute-value.']
        },
        {
            filename: 'test.san',
            code: '<template><div =foo></template>',
            options: [{'unexpected-equals-sign-before-attribute-name': true}],
            errors: ['Parsing error: unexpected-equals-sign-before-attribute-name.']
        },
        {
            filename: 'test.san',
            code: '<template>\u0000</template>',
            options: [{'unexpected-null-character': true}],
            errors: ['Parsing error: unexpected-null-character.']
        },
        {
            filename: 'test.san',
            code: '<template><?xml?></template>',
            options: [{'unexpected-question-mark-instead-of-tag-name': true}],
            errors: ['Parsing error: unexpected-question-mark-instead-of-tag-name.']
        },
        {
            filename: 'test.san',
            code: '<template><div id="" / class=""></template>',
            options: [{'unexpected-solidus-in-tag': true}],
            errors: ['Parsing error: unexpected-solidus-in-tag.']
        },
        {
            filename: 'test.san',
            code: '<template>&unknown;</template>',
            options: [{'unknown-named-character-reference': true}],
            errors: ['Parsing error: unknown-named-character-reference.']
        },
        {
            filename: 'test.san',
            code: '<template><div></div id=""></template>',
            options: [{'end-tag-with-attributes': true}],
            errors: ['Parsing error: end-tag-with-attributes.']
        },
        {
            filename: 'test.san',
            code: '<template><div id="" id=""></div></template>',
            options: [{'duplicate-attribute': true}],
            errors: ['Parsing error: duplicate-attribute.']
        },
        {
            filename: 'test.san',
            code: '<template><div></div/></template>',
            options: [{'end-tag-with-trailing-solidus': true}],
            errors: ['Parsing error: end-tag-with-trailing-solidus.']
        },
        {
            filename: 'test.san',
            code: '<template><div/></template>',
            options: [{'non-void-html-element-start-tag-with-trailing-solidus': true}],
            errors: ['Parsing error: non-void-html-element-start-tag-with-trailing-solidus.']
        },
        {
            filename: 'test.san',
            code: '<template></div></template>',
            options: [{'x-invalid-end-tag': true}],
            errors: ['Parsing error: x-invalid-end-tag.']
        },
        {
            filename: 'test.san',
            code: '<template><div xmlns=""></template>',
            options: [{'x-invalid-namespace': true}],
            errors: ['Parsing error: x-invalid-namespace.']
        },
        {
            filename: 'test.san',
            code: `<template><!--></template>`,
            errors: ['Parsing error: abrupt-closing-of-empty-comment.']
        },
        {
            filename: 'test.san',
            code: `<template><!---></template>`,
            errors: ['Parsing error: abrupt-closing-of-empty-comment.']
        },
        {
            filename: 'test.san',
            code: `<template>&#qux;</template>`,
            errors: ['Parsing error: absence-of-digits-in-numeric-character-reference.']
        },
        {
            filename: 'test.san',
            code: '<template><![CDATA[cdata]]></template>',
            errors: ['Parsing error: cdata-in-html-content.']
        },
        {
            filename: 'test.san',
            code: '<template>&#1234567;</template>',
            errors: ['Parsing error: character-reference-outside-unicode-range.']
        },
        {
            filename: 'test.san',
            code: '<template>\u0003</template>',
            errors: ['Parsing error: control-character-in-input-stream.']
        },
        {
            filename: 'test.san',
            code: '<template>&#0003;</template>',
            errors: ['Parsing error: control-character-reference.']
        },
        {
            filename: 'test.san',
            code: '<template><',
            errors: ['Parsing error: eof-before-tag-name.']
        },
        {
            filename: 'test.san',
            code: '<template><svg><![CDATA[cdata',
            errors: ['Parsing error: eof-in-cdata.']
        },
        {
            filename: 'test.san',
            code: '<template><!--comment',
            errors: ['Parsing error: eof-in-comment.']
        },
        {
            filename: 'test.san',
            code: '<template><div class=""',
            errors: ['Parsing error: eof-in-tag.']
        },
        {
            filename: 'test.san',
            code: '<template><!--comment--!></template>',
            errors: ['Parsing error: incorrectly-closed-comment.']
        },
        {
            filename: 'test.san',
            code: '<template><!ELEMENT br EMPTY></template>',
            errors: ['Parsing error: incorrectly-opened-comment.']
        },
        {
            filename: 'test.san',
            code: '<template><👍>/template>',
            errors: ['Parsing error: invalid-first-character-of-tag-name.']
        },
        {
            filename: 'test.san',
            code: '<template><div id=></template>',
            errors: ['Parsing error: missing-attribute-value.']
        },
        {
            filename: 'test.san',
            code: '<template></></template>',
            errors: ['Parsing error: missing-end-tag-name.']
        },
        {
            filename: 'test.san',
            code: '<template>&amp</template>',
            errors: ['Parsing error: missing-semicolon-after-character-reference.']
        },
        {
            filename: 'test.san',
            code: '<template><div id="foo"class="bar"></template>',
            errors: ['Parsing error: missing-whitespace-between-attributes.']
        },
        {
            filename: 'test.san',
            code: '<template><!--a<!--b--></template>',
            errors: ['Parsing error: nested-comment.']
        },
        {
            filename: 'test.san',
            code: '<template>&#xFFFE;</template>',
            errors: ['Parsing error: noncharacter-character-reference.']
        },
        {
            filename: 'test.san',
            code: '<template>\uFFFE</template>',
            errors: ['Parsing error: noncharacter-in-input-stream.']
        },
        {
            filename: 'test.san',
            code: '<template>&#0000;</template>',
            errors: ['Parsing error: null-character-reference.']
        },
        {
            filename: 'test.san',
            code: '<template>&#xD800;</template>',
            errors: ['Parsing error: surrogate-character-reference.']
        },
        {
            filename: 'test.san',
            code: '<template>\uD800</template>',
            errors: ['Parsing error: surrogate-in-input-stream.']
        },
        {
            filename: 'test.san',
            code: '<template><div a"bc=""></template>',
            errors: ['Parsing error: unexpected-character-in-attribute-name.']
        },
        {
            filename: 'test.san',
            code: '<template><div foo=bar"></template>',
            errors: ['Parsing error: unexpected-character-in-unquoted-attribute-value.']
        },
        {
            filename: 'test.san',
            code: '<template><div =foo></template>',
            errors: ['Parsing error: unexpected-equals-sign-before-attribute-name.']
        },
        {
            filename: 'test.san',
            code: '<template>\u0000</template>',
            errors: ['Parsing error: unexpected-null-character.']
        },
        {
            filename: 'test.san',
            code: '<template><?xml?></template>',
            errors: ['Parsing error: unexpected-question-mark-instead-of-tag-name.']
        },
        {
            filename: 'test.san',
            code: '<template><div id="" / class=""></template>',
            errors: ['Parsing error: unexpected-solidus-in-tag.']
        },
        {
            filename: 'test.san',
            code: '<template>&unknown;</template>',
            errors: ['Parsing error: unknown-named-character-reference.']
        },
        {
            filename: 'test.san',
            code: '<template><div></div id=""></template>',
            errors: ['Parsing error: end-tag-with-attributes.']
        },
        {
            filename: 'test.san',
            code: '<template><div id="" id=""></div></template>',
            errors: ['Parsing error: duplicate-attribute.']
        },
        {
            filename: 'test.san',
            code: '<template><div></div/></template>',
            errors: ['Parsing error: end-tag-with-trailing-solidus.']
        },
        {
            filename: 'test.san',
            code: '<template></div></template>',
            errors: ['Parsing error: x-invalid-end-tag.']
        },
        {
            filename: 'test.san',
            code: '<template><div xmlns=""></template>',
            errors: ['Parsing error: x-invalid-namespace.']
        }
    ]
});
