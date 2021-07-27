/**
 * @fileoverview Don&#39;t introduce side effects in computed properties
 * @author Michał Sajnóg
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-side-effects-in-computed-properties');
const RuleTester = require('eslint').RuleTester;

const parserOptions = {
    ecmaVersion: 2020,
    sourceType: 'module'
};

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run('no-side-effects-in-computed-properties', rule, {
    valid: [
        {
            code: `
              san.defineComponent({
                  ...foo,
                  computed: {
                      ...test0({}),
                      test1() {
                          return this.data.get('firstName') + ' ' + this.data.get('lastName');
                      },
                      test2() {
                          return this.data.get('something').slice(0).reverse();
                      },
                      test3() {
                          const example = this.data.get('something') * 2;
                          return example + 'test';
                      },
                      test4() {
                          return {
                              ...this.data.get('something'),
                              test: 'example'
                          };
                      },
                      test5: {
                          get() {
                              return this.firstName + ' ' + this.lastName;
                          },
                          set(newValue) {
                              const names = newValue.split(' ');
                              this.firstName = names[0];
                              this.lastName = names[names.length - 1];
                          }
                      },
                      test6: {
                          get() {
                              return this.data.get('something').slice(0).reverse();
                          }
                      },
                      test7: {
                          get() {
                              const example = this.data.get('something') * 2;
                              return example + 'test';
                          }
                      },
                      test8: {
                          get() {
                              return {
                                  ...this.data.get('something'),
                                  test: 'example'
                              };
                          }
                      },
                      test9() {
                          return Object.keys(this.data.get('something')).sort();
                      },
                      test10() {
                          return this.data.get('something').a.popasdasd();
                      },
                      test11() {
                          const categories = {};

                          this.data.get('something').forEach((c) => {
                              categories[c.category] = categories[c.category] || [];
                              categories[c.category].push(c);
                          });

                          return categories;
                      },
                      test12() {
                          return this.data.get('something').map((t) => {
                              // [].push('xxx')
                              return t;
                          });
                      },
                      test13() {
                          this.data.get('something').forEach((arr) => console.log(arr));
                      }
                  }
              });
            `,
            parserOptions
        },
        {
            code: `
            san.defineComponent({
              computed: {
                test1() {
                  const num = 0
                  const something = {
                    a: 'val',
                    b: ['1', '2']
                  }
                  num++
                  something.a = 'something'
                  something.b.reverse()
                  return something.b
                }
              }
            })`,
            parserOptions
        },
        {
            code: `
            san.defineComponent({
                name: 'something',
                data() {
                    return {}
                }
            })`,
            parserOptions
        },
        {
            code: `
            san.defineComponent({
                computed: {
                    test () {
                        let a;
                        a = this.data.get('something')
                        return a
                    },
                }
            })`,
            parserOptions
        },
        {
            code: `
            san.defineComponent({
              computed: {
                test () {
                  return {
                    action1() {
                      this.data.get('something')
                    },
                    action2() {
                      this.data.set('something', 1)
                    },
                    action3() {
                      this.data.get('something').reverse()
                    }
                  }
                },
              }
            })`,
            parserOptions
        },
        {
            code: `
              san.defineComponent({
                computed: {
                  test () {
                    return this.data.get('something')['a']().reverse()
                  },
                }
              })`,
            parserOptions
        },
        {
            code: `
              const test = { el: '#app' }
              san.defineComponent({
                el: test.el
              })`,
            parserOptions
        },
        {
            code: `
              san.defineComponent({
                computed: {
                  test () {
                    return [...this.data.get('something')].reverse()
                  },
                }
              })`,
            parserOptions
        }
    ],
    invalid: [
        {
            code: `san.defineComponent({
              computed: {
                test1() {
                  this.data.set('something', 'lorem')
                  asd.qwe.zxc = 'lorem'
                  return this.data.get('firstName') + ' ' + this.data.get('lastName')
                },
                test2() {
                  this.data.set('count', this.data.get('count') + 2);
                  asd.qwe.zxc = 'lorem'
                  return this.data.get('count');
                },
                test3() {
                  return this.data.get('something').reverse()
                },
                test4() {
                  const test = this.data.get('something').something.push('example')
                  return 'something'
                },
                test5() {
                  this.data.get('something')[index] = thing[index]
                  return this.data.get('something')
                },
                test6() {
                  return this.data.get('something').keys.sort()
                }
              }
            })`,
            parserOptions,
            errors: [
                {
                    line: 4,
                    message: 'Unexpected side effect in "test1" computed property.'
                },
                {
                    line: 9,
                    message: 'Unexpected side effect in "test2" computed property.'
                },
                {
                    line: 14,
                    message: 'Unexpected side effect in "test3" computed property.'
                },
                {
                    line: 17,
                    message: 'Unexpected side effect in "test4" computed property.'
                },
                {
                    line: 21,
                    message: 'Unexpected side effect in "test5" computed property.'
                },
                {
                    line: 25,
                    message: 'Unexpected side effect in "test6" computed property.'
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
        export default {
          computed: {
            test1() : string {
              return this.data.get('something').reverse()
            }
          }
        };
      `,
            parserOptions,
            errors: [
                {
                    line: 5,
                    message: 'Unexpected side effect in "test1" computed property.'
                }
            ],
            parser: require.resolve('@typescript-eslint/parser')
        },

        {
            code: `app.component({
        computed: {
          test1() {
            this.data.set('something', 'lorem')
            asd.qwe.zxc = 'lorem'
            return this.data.get('firstName') + ' ' + this.data.get('lastName')
          },
        }
      })`,
            parserOptions,
            errors: [
                {
                    line: 4,
                    message: 'Unexpected side effect in "test1" computed property.'
                }
            ]
        },
        {
            code: `san.defineComponent({
        computed: {
          test1() {
            return this.data.get('something', 'lorem').reverse?.()
          },
          test2() {
            return this.data.get('something', 'lorem').reverse?.()
          },
          test3() {
            return (this.data.get('something', 'lorem').reverse)?.()
          },
        }
      })`,
            parserOptions,
            errors: [
                'Unexpected side effect in "test1" computed property.',
                'Unexpected side effect in "test2" computed property.',
                'Unexpected side effect in "test3" computed property.'
            ]
        }
    ]
});
