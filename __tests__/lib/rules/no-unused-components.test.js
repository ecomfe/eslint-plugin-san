/**
 * @fileoverview Report used components
 * @author Michał Sajnóg
 */
'use strict';

/* eslint-disable */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/no-unused-components');

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const tester = new RuleTester({
    parser: require.resolve('san-eslint-parser'),
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    }
});

tester.run('no-unused-components', rule, {
    valid: [
        {
            filename: 'test.san',
            code: `<template><div>Lorem ipsum</div></template>`
        },
        {
            filename: 'test.san',
            code: `<template>
        <div>
          <h2>Lorem ipsum</h2>
        </div>
      </template>`
        },
        {
            filename: 'test.san',
            code: `<template>
        <div>
          <TheButton />
        </div>
      </template>
      <script>
        export default {
          components: {
            TheButton
          }
        }
      </script>`
        },
        {
            filename: 'test.san',
            code: `<template>
        <svg>
          <TheCircle />
        </svg>
      </template>
      <script>
        export default {
          components: {
            TheCircle
          }
        }
      </script>`
        },
        {
            filename: 'test.san',
            code: `<template>
        <circle cx="0" cy="0" :d="radius" />
      </template>
      <script>
        export default {}
      </script>`
        },
        {
            filename: 'test.san',
            code: `<template>
        <div>
          <component s-is="'TheButton'" />
        </div>
      </template>
      <script>
        export default {
          components: {
            TheButton
          }
        }
      </script>`
        },
        {
            filename: 'test.san',
            code: `<template>
        <div>
          <component s-is="'TheButton'" />
        </div>
      </template>
      <script>
        export default {
          components: {
            TheButton
          }
        }
      </script>`
        },
        {
            filename: 'test.san',
            code: `<template>
        <div>
          <component s-is="theButton" />
        </div>
      </template>
      <script>
        export default {
          components: {
            TheButton
          }
        }
      </script>`
        },
        {
            filename: 'test.san',
            code: `<template>
        <div>
          <component s-is="The-button" />
        </div>
      </template>
      <script>
        export default {
          components: {
            TheButton
          }
        }
      </script>`
        },
        {
            filename: 'test.san',
            code: `<template>
        <div>
          <component s-is="the-Button" />
        </div>
      </template>
      <script>
        export default {
          components: {
            TheButton
          }
        }
      </script>`
        },
        {
            filename: 'test.san',
            code: `<template>
        <div>
          <the-button />
          <next_Button />
        </div>
      </template>
      <script>
        export default {
          components: {
            'the-button': TheButton,
            'next_Button': NextButton
          }
        }
      </script>`
        },
        {
            filename: 'test.san',
            code: `<template>
        <div>
          <component s-is="the-button" />
          <component s-is="next_Button" />
        </div>
      </template>
      <script>
        export default {
          components: {
            'the-button': TheButton,
            'next_Button': NextButton
          }
        }
      </script>`
        },
        {
            filename: 'test.san',
            code: `<template>
        <div>
          <h2>Lorem ipsum</h2>
          <component s-is="TheButton" />
        </div>
      </template>
      <script>
        export default {
          components: {
            TheButton
          }
        }
      </script>`
        },
        {
            filename: 'test.san',
            code: `<template>
        <div id="app">
          <Header></Header>
          <div class="content">
            <router-view></router-view>
          </div>
          <Footer />
        </div>
      </template>
      <script>
        import Header from 'components/Layout/Header';
        import Footer from 'components/Layout/Footer';

        export default {
          name: 'App',
          components: {
            Header,
            Footer,
          },
        };
      </script>`
        },

        // Ignore when `render` is used instead of template
        {
            filename: 'test.san',
            code: `
      <script>
        export default {
          components: {
            TheButton
          },
          render() {
            return
          }
        }
      </script>`
        },

        // empty `s-is`
        {
            filename: 'test.san',
            code: `
      <template>
        <component s-is=""></component>
      </template>`
        },
        {
            filename: 'test.san',
            code: `
      <template>
        <component s-is></component>
      </template>`
        },

        // computed properties
        {
            filename: 'test.san',
            code: `
      <template>
        <div />
      </template>
      <script>
        export default {
          components: {
            [foo.bar]: baz
          }
        }
      </script>`
        },
        {
            filename: 'test.san',
            code: `
      <template>
        <div />
      </template>
      <script>
        export default {
          components: {
            [foo]: Bar
          }
        }
      </script>`
        },
        {
            filename: 'test.san',
            code: `
      <template>
        <foo />
      </template>
      <script>
        export default {
          components: {
            ['foo']: Foo
          }
        }
      </script>`
        },
        {
            filename: 'test.san',
            code: `
        <template>
          <div s-is="'CustomComponent'" />
        </template>
        <script>
        export default {
          components: {
            CustomComponent
          }
        }
        </script>
      `
        }
    ],
    invalid: [
        {
            filename: 'test.san',
            code: `<template>
        <div>
          <the-button />
        </div>
      </template>
      <script>
        export default {
          components: {
            theButton
          }
        }
      </script>`,
          errors: [
              {
                  message: 'The "theButton" component has been registered but not used.',
                  line: 9
              }
          ]
        },
        {
            filename: 'test.san',
            code: `<template>
        <div>
          <the-button />
        </div>
      </template>
      <script>
        export default {
          components: {
            TheButton
          }
        }
      </script>`,
          errors: [
              {
                  message: 'The "TheButton" component has been registered but not used.',
                  line: 9
              }
          ]
        },
        {
            filename: 'test.san',
            code: `<template>
        <div>
          <theButton />
        </div>
      </template>
      <script>
        export default {
          components: {
            TheButton
          }
        }
      </script>`,
            errors: [
                {
                    message: 'The "TheButton" component has been registered but not used.',
                    line: 9
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
        <template>
          <div>
            <h2>Lorem ipsum</h2>
          </div>
        </template>
        <script>
          export default {
            components: {
              TheButton
            },
          }
        </script>
      `,
            errors: [
                {
                    message: 'The "TheButton" component has been registered but not used.',
                    line: 10
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
        <template>
          <div>
            <h2>Lorem ipsum</h2>
            <the_button />
          </div>
        </template>
        <script>
          export default {
            components: {
              TheButton
            },
          }
        </script>
      `,
            errors: [
                {
                    message: 'The "TheButton" component has been registered but not used.',
                    line: 11
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
        <template>
          <div>
            <h2>Lorem ipsum</h2>
            <TheButton />
          </div>
        </template>
        <script>
          export default {
            components: {
              'the-button': TheButton
            },
          }
        </script>
      `,
            errors: [
                {
                    message: 'The "the-button" component has been registered but not used.',
                    line: 11
                }
            ]
        },

        // empty `:is`
        {
            filename: 'test.san',
            code: `
      <template>
        <component s-is=""></component>
      </template>
      <script>
        export default {
          components: {
            Foo,
          },
        }
      </script>`,
            errors: [
                {
                    message: 'The "Foo" component has been registered but not used.',
                    line: 8
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
      <template>
        <component s-is></component>
      </template>
      <script>
        export default {
          components: {
            Foo,
          },
        }
      </script>`,
            errors: [
                {
                    message: 'The "Foo" component has been registered but not used.',
                    line: 8
                }
            ]
        },

        // computed properties
        {
            filename: 'test.san',
            code: `
      <template>
        <div />
      </template>
      <script>
        export default {
          components: {
            ['foo']: Foo,
            [\`bar\`]: Bar,
            ['baz']: Baz,
            [qux]: Qux,
            ...components,
            quux,
          }
        }
      </script>`,
            errors: [
                {
                    message: 'The "foo" component has been registered but not used.',
                    line: 8
                },
                {
                    message: 'The "bar" component has been registered but not used.',
                    line: 9
                },
                {
                    message: 'The "baz" component has been registered but not used.',
                    line: 10
                },
                {
                    message: 'The "quux" component has been registered but not used.',
                    line: 13
                }
            ]
        }
    ]
});
