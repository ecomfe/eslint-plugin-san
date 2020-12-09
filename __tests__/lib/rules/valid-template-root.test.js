/**
 * @author Toru Nagashima
 * @copyright 2017 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/valid-template-root');

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const tester = new RuleTester({
    parser: require.resolve('san-eslint-parser'),
    parserOptions: {ecmaVersion: 2015}
});

tester.run('valid-template-root', rule, {
    valid: [
        {
            filename: 'test.san',
            code: ''
        },
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
        },
        {
            filename: 'test.san',
            code: '<template src="foo.html"></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div><textarea/>test</div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><table><custom-thead></custom-thead></table></template>'
        },
        {
            filename: 'test.san',
            code: '<template lang="pug">test</template>'
        },
        {
            filename: 'test.san',
            code: '<template><div></div><div></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template>\n    <div></div>\n    <div></div>\n</template>'
        },
        {
            filename: 'test.san',
            code: '<template>{{a b c}}</template>'
        },
        {
            filename: 'test.san',
            code: '<template><div></div>aaaaaa</template>'
        },
        {
            filename: 'test.san',
            code: '<template>aaaaaa<div></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div s-for="x in list"></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><slot></slot></template>'
        },
        {
            filename: 'test.san',
            code: '<template><template></template></template>'
        }
    ],
    invalid: [
        {
            filename: 'test.san',
            code: '<template>\n</template>',
            errors: ['The template requires child element.']
        },
        {
            filename: 'test.san',
            code: '<template src="foo.html">abc</template>',
            errors: ["The template root with 'src' attribute is required to be empty."]
        },
        {
            filename: 'test.san',
            code: '<template src="foo.html"><div></div></template>',
            errors: ["The template root with 'src' attribute is required to be empty."]
        }
    ]
});
