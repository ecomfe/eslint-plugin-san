/**
 * @fileoverview enforce ordering of attributes
 * @author Erin Depew
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/attributes-order');
const RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const tester = new RuleTester({
    parser: require.resolve('san-eslint-parser'),
    parserOptions: {ecmaVersion: 2015}
});
tester.run('attributes-order', rule, {
    valid: [
        {
            filename: 'test.san',
            code: '<template><div></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div is="header"></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div s-for="item in items"></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div s-if="!visible"></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div s-else-if="!visible"></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div s-else="!visible"></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div s-show="!visible"></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div s-cloak></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div s-pre></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div s-once></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div id="header"></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div key="id"></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div s-html="htmlContent"></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div s-text="textContent"></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div s-model="toggle"></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div s-custom-directive></div></template>'
        },
        {
            filename: 'test.san',
            code: `<template>
        <div
          s-model="toggle"
          :bindingProp="foo"
          propOne="bar"
          model="baz">
        </div>
      </template>`
        },
        {
            filename: 'test.san',
            code: '<template><div click="functionCall"></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div myProp="prop"></div></template>'
        },
        {
            filename: 'test.san',
            code: `<template>
          <div
            is="header"
            s-for="item in items"
            s-if="!visible"
            s-once
            id="uniqueID"
            ref="header"
            s-model="headerData"
            myProp="prop"
            @click="functionCall"
            s-text="textContent">
          </div>
        </template>`
        },
        {
            filename: 'test.san',
            code: `<template>
          <div
            is="header"
            s-for="item in items"
            s-if="!visible"
            s-once
            id="uniqueID"
            ref="header"
            s-model="headerData"
            :myProp="prop"
            s-on="functionCall"
            s-text="textContent">
          </div>
        </template>`
        },
        {
            filename: 'test.san',
            code: `<template>
          <div
            is="header"
            s-for="item in items"
            s-if="!visible"
            s-once
            id="uniqueID"
            ref="header"
            :prop="headerData"
            myProp="prop"
            s-on:click="functionCall"
            s-text="textContent">
          </div>
        </template>`
        },
        {
            filename: 'test.san',
            code: `<template>
          <div
            s-for="item in items"
            s-if="!visible"
            propone="prop"
            :proptwo="prop"
            propthree="prop"
            @click="functionCall"
            s-text="textContent">
          </div>
        </template>`
        },
        {
            filename: 'test.san',
            code: '<template><div propone="prop" proptwo="prop" propthree="prop"></div></template>'
        },
        {
            filename: 'test.san',
            code: '<template><div propone="prop" proptwo="prop" is="header"></div></template>',
            options: [
                {
                    order: [
                        'LIST_RENDERING',
                        'CONDITIONALS',
                        'RENDER_MODIFIERS',
                        'GLOBAL',
                        'UNIQUE',
                        'TWO_WAY_BINDING',
                        'OTHER_DIRECTIVES',
                        'OTHER_ATTR',
                        'EVENTS',
                        'CONTENT',
                        'DEFINITION'
                    ]
                }
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div ref="header" is="header" propone="prop" proptwo="prop"></div></template>',
            options: [
                {
                    order: [
                        'LIST_RENDERING',
                        'CONDITIONALS',
                        'RENDER_MODIFIERS',
                        'GLOBAL',
                        'UNIQUE',
                        'TWO_WAY_BINDING',
                        'DEFINITION',
                        'OTHER_DIRECTIVES',
                        'OTHER_ATTR',
                        'EVENTS',
                        'CONTENT'
                    ]
                }
            ]
        },
        {
            filename: 'test.san',
            code: `<template>
          <div
            s-if="!visible"
            s-for="item in items"
            s-once
            is="header"
            s-on:click="functionCall"
            ref="header"
            s-text="textContent"
            id="uniqueID"
            :prop="headerData"
            myProp="prop"
            >
          </div>
        </template>`,
            options: [
                {
                    order: [
                        'CONDITIONALS',
                        'LIST_RENDERING',
                        'RENDER_MODIFIERS',
                        'DEFINITION',
                        'EVENTS',
                        'UNIQUE',
                        'TWO_WAY_BINDING',
                        'CONTENT',
                        'GLOBAL',
                        'OTHER_ATTR',
                        'OTHER_DIRECTIVES'
                    ]
                }
            ]
        },
        {
            filename: 'test.san',
            code: `<template>
          <div
            s-if="!visible"
            class="content"
            :class="className"
            s-text="textContent"
            >
          </div>
        </template>`,
            options: [
                {
                    order: [
                        'CONDITIONALS',
                        'LIST_RENDERING',
                        'RENDER_MODIFIERS',
                        'DEFINITION',
                        'EVENTS',
                        'UNIQUE',
                        ['BINDING', 'OTHER_ATTR'],
                        'CONTENT',
                        'GLOBAL'
                    ]
                }
            ]
        },
        {
            filename: 'test.san',
            code: `<template>
          <div
            id="uniqueID"
            ref="header"
            :prop="headerData"
            :[a+b]="headerData"
            :[prop]="headerData"
            myProp="prop"
            s-on:click="functionCall"
            s-on:[c]="functionCall"
            s-text="textContent">
          </div>
        </template>`
        },
        {
            filename: 'test.san',
            code: `<template>
          <div
            a-custom-prop="value"
            :another-custom-prop="value"
            :blue-color="false"
            boolean-prop
            z-prop="Z"
            s-on:[c]="functionCall"
            @change="functionCall"
            s-on:click="functionCall"
            @input="functionCall"
            s-text="textContent">
          </div>
        </template>`,
            options: [{alphabetical: true}]
        },
        {
            filename: 'test.san',
            code: `<template>
          <div
            class="foo"
            :class="bar">
          </div>
        </template>`,
            options: [{alphabetical: true}]
        },
        {
            filename: 'duplicate.san',
            code: `<template>
          <div
            class="foo"
            class="bar">
          </div>
        </template>`,
            options: [{alphabetical: true}]
        },
        {
            filename: 'duplicate.san',
            code: `<template>
          <div
            :class="foo"
            :class="bar">
          </div>
        </template>`,
            options: [{alphabetical: true}]
        },
        {
            filename: 'test.san',
            code: `<template>
          <div
            s-if="foo"
            s-show="bar">
          </div>
        </template>`,
            options: [{alphabetical: true}]
        },
        {
            filename: 'test.san',
            code: `<template>
          <div
            s-bar="bar"
            s-foo="foo">
          </div>
        </template>`,
            options: [{alphabetical: true}]
        },
        {
            filename: 'test.san',
            code: `<template>
          <div
            s-foo.a="a"
            s-foo.b="b">
          </div>
        </template>`,
            options: [{alphabetical: true}]
        }
    ],

    invalid: [
        {
            filename: 'test.san',
            code: '<template><div s-cloak is="header"></div></template>',
            output: '<template><div is="header" s-cloak></div></template>',
            errors: [
                {
                    message: 'Attribute "is" should go before "s-cloak".',
                    type: 'VIdentifier'
                }
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div id="uniqueID" s-cloak></div></template>',
            output: '<template><div s-cloak id="uniqueID"></div></template>',
            errors: [
                {
                    message: 'Attribute "s-cloak" should go before "id".',
                    type: 'VDirectiveKey'
                }
            ]
        },
        {
            filename: 'test.san',
            code: `<template>
            <div
              model="baz"
              s-model="toggle"
              propOne="bar"
              :id="foo">
            </div>
          </template>`,
            output: `<template>
            <div
              s-model="toggle"
              model="baz"
              :id="foo"
              propOne="bar">
            </div>
          </template>`,
            errors: [
                {
                    message: 'Attribute "s-model" should go before "model".',
                    type: 'VDirectiveKey'
                },
                {
                    message: 'Attribute ":id" should go before "propOne".',
                    type: 'VDirectiveKey'
                }
            ]
        },
        {
            filename: 'test.san',
            code: `<template>
            <div
              :bindingProp="foo"
              model="baz"
              s-on="functionCall"
              s-model="toggle"
              propOne="bar">
            </div>
          </template>`,
            output: `<template>
            <div
              :bindingProp="foo"
              model="baz"
              s-model="toggle"
              s-on="functionCall"
              propOne="bar">
            </div>
          </template>`,
            errors: [
                {
                    message: 'Attribute "s-model" should go before "s-on".',
                    type: 'VDirectiveKey'
                },
                {
                    message: 'Attribute "propOne" should go before "s-on".',
                    type: 'VIdentifier'
                }
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div data-id="foo" aria-test="bar" is="custom" myProp="prop"></div></template>',
            output: '<template><div data-id="foo" is="custom" aria-test="bar" myProp="prop"></div></template>',
            errors: [
                {
                    message: 'Attribute "is" should go before "aria-test".',
                    type: 'VIdentifier'
                }
            ]
        },
        {
            filename: 'test.san',
            code: '<template><div ref="header" propone="prop" is="header" ></div></template>',
            options: [
                {
                    order: [
                        'LIST_RENDERING',
                        'CONDITIONALS',
                        'RENDER_MODIFIERS',
                        'GLOBAL',
                        'UNIQUE',
                        'TWO_WAY_BINDING',
                        'DEFINITION',
                        'OTHER_DIRECTIVES',
                        'OTHER_ATTR',
                        'EVENTS',
                        'CONTENT'
                    ]
                }
            ],
            output: '<template><div ref="header" is="header" propone="prop" ></div></template>',
            errors: [
                {
                    message: 'Attribute "is" should go before "propone".',
                    type: 'VIdentifier'
                }
            ]
        },
        {
            filename: 'test.san',
            code: `<template>
            <div s-cloak
              is="header">
            </div>
          </template>`,
            output: `<template>
            <div is="header"
              s-cloak>
            </div>
          </template>`,
            errors: [
                {
                    message: 'Attribute "is" should go before "s-cloak".',
                    type: 'VIdentifier'
                }
            ]
        },
        {
            filename: 'test.san',
            code: `<template>
            <div
              s-if="!visible"
              s-for="item in items"
              s-once
              is="header"
              s-on:click="functionCall"
              ref="header"
              :prop="headerData"
              s-text="textContent"
              id="uniqueID"
              myProp="prop"
              >
            </div>
          </template>`,
            output: `<template>
            <div
              s-for="item in items"
              s-if="!visible"
              is="header"
              s-once
              ref="header"
              s-on:click="functionCall"
              :prop="headerData"
              id="uniqueID"
              s-text="textContent"
              myProp="prop"
              >
            </div>
          </template>`,
            errors: [
                {
                    message: 'Attribute "s-for" should go before "s-if".',
                    type: 'VDirectiveKey'
                },
                {
                    message: 'Attribute "is" should go before "s-once".',
                    type: 'VIdentifier'
                },
                {
                    message: 'Attribute "ref" should go before "s-on:click".',
                    type: 'VIdentifier'
                },
                {
                    message: 'Attribute ":prop" should go before "s-on:click".',
                    type: 'VDirectiveKey'
                },
                {
                    message: 'Attribute "id" should go before "s-text".',
                    type: 'VIdentifier'
                },
                {
                    message: 'Attribute "myProp" should go before "s-text".',
                    type: 'VIdentifier'
                }
            ]
        },
        {
            filename: 'test.san',
            code: `<template>
            <div
              s-if="!visible"
              s-for="item in items"
              s-once
              is="header"
              s-on:click="functionCall"
              ref="header"
              :prop="headerData"
              s-text="textContent"
              id="uniqueID"
              myProp="prop"
              >
            </div>
          </template>`,
            options: [
                {
                    order: [
                        'EVENTS',
                        'TWO_WAY_BINDING',
                        'UNIQUE',
                        'DEFINITION',
                        'CONDITIONALS',
                        'LIST_RENDERING',
                        'RENDER_MODIFIERS',
                        'GLOBAL',
                        'OTHER_ATTR',
                        'OTHER_DIRECTIVES',
                        'CONTENT'
                    ]
                }
            ],
            output: `<template>
            <div
              s-if="!visible"
              s-for="item in items"
              is="header"
              s-once
              s-on:click="functionCall"
              ref="header"
              :prop="headerData"
              id="uniqueID"
              s-text="textContent"
              myProp="prop"
              >
            </div>
          </template>`,
            errors: [
                {
                    message: 'Attribute "is" should go before "s-once".',
                    type: 'VIdentifier'
                },
                {
                    message: 'Attribute "s-on:click" should go before "s-once".',
                    type: 'VDirectiveKey'
                },
                {
                    message: 'Attribute "ref" should go before "s-once".',
                    type: 'VIdentifier'
                },
                {
                    message: 'Attribute "id" should go before "s-text".',
                    type: 'VIdentifier'
                },
                {
                    message: 'Attribute "myProp" should go before "s-text".',
                    type: 'VIdentifier'
                }
            ]
        },
        {
            code: `<template>
            <div
              class="content"
              s-if="!visible"
              :class="className"
              s-text="textContent"
              >
            </div>
          </template>`,
            options: [
                {
                    order: [
                        'CONDITIONALS',
                        'LIST_RENDERING',
                        'RENDER_MODIFIERS',
                        'DEFINITION',
                        'EVENTS',
                        'UNIQUE',
                        ['BINDING', 'OTHER_ATTR'],
                        'CONTENT',
                        'GLOBAL'
                    ]
                }
            ],
            output: `<template>
            <div
              s-if="!visible"
              class="content"
              :class="className"
              s-text="textContent"
              >
            </div>
          </template>`,
            errors: [
                {
                    message: 'Attribute "s-if" should go before "class".',
                    type: 'VDirectiveKey'
                }
            ]
        },
        {
            code: `<template>
            <my-component
              s-if="!visible"
              s-model="content"
              s-slot="textContent"
              >
            </my-component>
          </template>`,
            output: `<template>
            <my-component
              s-if="!visible"
              s-slot="textContent"
              s-model="content"
              >
            </my-component>
          </template>`,
            errors: [
                {
                    message: 'Attribute "s-slot" should go before "s-model".',
                    type: 'VDirectiveKey'
                }
            ]
        },
        {
            filename: 'test.san',
            code: `<template>
          <div
            z-prop="Z"
            a-prop="A">
          </div>
        </template>`,
            options: [{alphabetical: true}],
            output: `<template>
          <div
            a-prop="A"
            z-prop="Z">
          </div>
        </template>`,
            errors: [
                {
                    message: 'Attribute "a-prop" should go before "z-prop".',
                    type: 'VIdentifier'
                }
            ]
        },
        {
            filename: 'test.san',
            code: `<template>
          <div
            :z-prop="Z"
            :a-prop="A">
          </div>
        </template>`,
            options: [{alphabetical: true}],
            output: `<template>
          <div
            :a-prop="A"
            :z-prop="Z">
          </div>
        </template>`,
            errors: [
                {
                    message: 'Attribute ":a-prop" should go before ":z-prop".',
                    type: 'VDirectiveKey'
                }
            ]
        },
        {
            filename: 'test.san',
            code: `<template>
          <div
            @input="bar"
            @change="foo">
          </div>
        </template>`,
            options: [{alphabetical: true}],
            output: `<template>
          <div
            @change="foo"
            @input="bar">
          </div>
        </template>`,
            errors: [
                {
                    message: 'Attribute "@change" should go before "@input".',
                    type: 'VDirectiveKey'
                }
            ]
        },
        {
            filename: 'test.san',
            code: `<template>
          <div
            z-prop="value"
            boolean-prop>
          </div>
        </template>`,
            options: [{alphabetical: true}],
            output: `<template>
          <div
            boolean-prop
            z-prop="value">
          </div>
        </template>`,
            errors: [
                {
                    message: 'Attribute "boolean-prop" should go before "z-prop".',
                    type: 'VIdentifier'
                }
            ]
        },
        {
            filename: 'test.san',
            code: `<template>
          <div
            s-on:click="functionCall"
            s-on:[c]="functionCall">
          </div>
        </template>`,
            options: [{alphabetical: true}],
            output: `<template>
          <div
            s-on:[c]="functionCall"
            s-on:click="functionCall">
          </div>
        </template>`,
            errors: [
                {
                    message: 'Attribute "s-on:[c]" should go before "s-on:click".',
                    type: 'VDirectiveKey'
                }
            ]
        },
        {
            filename: 'test.san',
            code: `<template>
          <div
            s-text="textContent"
            s-on:click="functionCall">
          </div>
        </template>`,
            options: [{alphabetical: true}],
            output: `<template>
          <div
            s-on:click="functionCall"
            s-text="textContent">
          </div>
        </template>`,
            errors: [
                {
                    message: 'Attribute "s-on:click" should go before "s-text".',
                    type: 'VDirectiveKey'
                }
            ]
        },
        {
            filename: 'test.san',
            code: `<template>
          <div
            :class="foo"
            class="bar">
          </div>
        </template>`,
            options: [{alphabetical: true}],
            output: `<template>
          <div
            class="bar"
            :class="foo">
          </div>
        </template>`,
            errors: [
                {
                    message: 'Attribute "class" should go before ":class".'
                }
            ]
        },
        {
            filename: 'test.san',
            code: `<template>
          <div
            s-show="foo"
            s-if="bar">
          </div>
        </template>`,
            options: [{alphabetical: true}],
            output: `<template>
          <div
            s-if="bar"
            s-show="foo">
          </div>
        </template>`,
            errors: [
                {
                    message: 'Attribute "s-if" should go before "s-show".'
                }
            ]
        },
        {
            filename: 'test.san',
            code: `<template>
          <div
            s-foo="foo"
            s-bar="bar">
          </div>
        </template>`,
            options: [{alphabetical: true}],
            output: `<template>
          <div
            s-bar="bar"
            s-foo="foo">
          </div>
        </template>`,
            errors: [
                {
                    message: 'Attribute "s-bar" should go before "s-foo".'
                }
            ]
        },
        {
            filename: 'test.san',
            code: `<template>
          <div
            s-foo.b="b"
            s-foo.a="a">
          </div>
        </template>`,
            options: [{alphabetical: true}],
            output: `<template>
          <div
            s-foo.a="a"
            s-foo.b="b">
          </div>
        </template>`,
            errors: [
                {
                    message: 'Attribute "s-foo.a" should go before "s-foo.b".'
                }
            ]
        },

        {
            filename: 'test.san',
            code: '<template><div s-cloak s-is="foo"></div></template>',
            output: '<template><div s-is="foo" s-cloak></div></template>',
            errors: [
                {
                    message: 'Attribute "s-is" should go before "s-cloak".'
                }
            ]
        }
    ]
});
