/**
 * @fileoverview Prevents duplication of field names.
 * @author Armano
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-dupe-keys');
const RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    }
});
ruleTester.run('no-dupe-keys', rule, {
    valid: [
        {
            filename: 'test.san',
            code: `
        export default {
          props: ['foo'],
          computed: {
            bar () {
            }
          },
          data () {
            return {
              dat: null
            }
          },
          initData () {
            return
          },
          methods: {
            _foo () {},
            test () {
            }
          }
        }
      `
        },
        {
            filename: 'test.san',
            code: `
        export default {
          props: ['foo'],
          initData () {
            return {
              dat: null
            }
          },
          data () {
            return
          },
          methods: {
            _foo () {},
            test () {
            }
          },
          setup () {
            const _foo = () => {}
            const dat = ref(null)
            const bar = computed(() => 'bar')

            return {
              bar
            }
          }
        }
      `
        },

        {
            filename: 'test.san',
            code: `
        export default {
          props: ['foo'],
          computed: {
            bar () {
            }
          },
          initData: () => {
            return {
              dat: null
            }
          },
          data: () => {
            return
          },
          methods: {
            _foo () {},
            test () {
            }
          }
        }
      `
        },

        {
            filename: 'test.san',
            code: `
        export default {
          props: ['foo'],
          computed: {
            bar () {
            }
          },
          initData: () => ({
            dat: null
          }),
          data: () => {
            return
          },
          methods: {
            _foo () {},
            test () {
            }
          }
        }
      `
        },

        {
            filename: 'test.san',
            code: `
        export default {
          ...foo(),
          props: {
            ...foo(),
            foo: String
          },
          computed: {
            ...mapGetters({
              test: 'getTest'
            }),
            bar: {
              get () {
              }
            }
          },
          data: {
            ...foo(),
            dat: null
          },
          methods: {
            ...foo(),
            test () {
            }
          },
          initData () {
            return {
              ...dat
            }
          },
        }
      `
        },

        {
            filename: 'test.san',
            code: `
        export default {
          ...foo(),
          props: {
            ...foo(),
            foo: String
          },
          computed: {
            ...mapGetters({
              test: 'getTest'
            }),
            bar: {
              get () {
              }
            }
          },
          data: {
            ...foo(),
            dat: null
          },
          methods: {
            ...foo(),
            test () {
            }
          },
          initData () {
            return {
              ...dat
            }
          },
          setup () {
            const com = computed(() => 1)

            return {
              ...foo(),
              com
            }
          }
        }
      `
        },

        {
            filename: 'test.san',
            code: `
        export default {
          ...foo(),
          props: {
            ...foo(),
            foo: String
          },
          computed: {
            ...mapGetters({
              test: 'getTest'
            }),
            bar: {
              get () {
              }
            }
          },
          data: {
            ...foo(),
            dat: null
          },
          methods: {
            ...foo(),
            test () {
            }
          },
          initData: () => {
            return {
              ...dat
            }
          },
        }
      `
        },

        {
            filename: 'test.san',
            code: `
        export default {
          ...foo(),
          props: {
            ...foo(),
            foo: String
          },
          computed: {
            ...mapGetters({
              test: 'getTest'
            }),
            bar: {
              get () {
              }
            }
          },
          data: {
            ...foo(),
            dat: null
          },
          methods: {
            ...foo(),
            test () {
            }
          },
          initData: () => ({
            ...dat
          }),
        }
      `
        },

        {
            filename: 'test.js',
            code: `
        // @san/component
        export const compA = {
          props: {
            propA: String
          }
        }

        // @san/component
        export const compB = {
          props: {
            propA: String
          }
        }
      `
        },
        {
            filename: 'test.san',
            code: `
        // @san/component
        export const compA = {
          props: {
            propA: String
          },
          setup (props) {
            const com = computed(() => props.propA)

            return {
              com
            }
          }
        }

        // @san/component
        export const compB = {
          props: {
            propA: String
          },
          setup (props) {
            const com = computed(() => props.propA)

            return {
              com
            }
          }
        }
      `
        },
        {
            filename: 'test.san',
            code: `
      export default {
        data () {
          return {
            get foo() {
              return foo
            },
            set foo(v) {
              foo = v
            }
          }
        }
      }
      `
        },
        {
            filename: 'test.san',
            code: `
      export default {
        data () {
          return {
            set foo(v) {
              foo = v
            },
            get foo() {
              return foo
            }
          }
        }
      }
      `
        },
        {
            filename: 'test.san',
            code: `
      export default {
        data () {
          return {
            get foo() {
              return foo
            },
            bar,
            set foo(v) {
              foo = v
            }
          }
        }
      }
      `
        }
    ],

    invalid: [
        {
            filename: 'test.san',
            code: `
        export default {
          props: ['foo'],
          computed: {
            foo () {
            }
          },
          data () {
            return {
              foo: null
            }
          },
          methods: {
            foo () {
            }
          },
          initData () {
            const foo = ref(1)

            return {
              foo
            }
          }
        }
      `,
            errors: [
                {
                    message: "Duplicated key 'foo'.",
                    line: 5
                },
                {
                    message: "Duplicated key 'foo'.",
                    line: 10
                },
                {
                    message: "Duplicated key 'foo'.",
                    line: 14
                },
                {
                    message: "Duplicated key 'foo'.",
                    line: 21
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
        export default {
          props: ['foo'],
          computed: {
            foo () {
            }
          },
          initData: () => {
            return {
              foo: null
            }
          },
          methods: {
            foo () {
            }
          },
          setup: () => {
            const foo = computed(() => 0)

            return {
              foo
            }
          }
        }
      `,
            errors: [
                {
                    message: "Duplicated key 'foo'.",
                    line: 5
                },
                {
                    message: "Duplicated key 'foo'.",
                    line: 10
                },
                {
                    message: "Duplicated key 'foo'.",
                    line: 14
                },
                {
                    message: "Duplicated key 'foo'.",
                    line: 21
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
        export default {
          props: ['foo'],
          computed: {
            foo () {
            }
          },
          initData: () => ({
            foo: null
          }),
          methods: {
            foo () {
            }
          }
        }
      `,
            errors: [
                {
                    message: "Duplicated key 'foo'.",
                    line: 5
                },
                {
                    message: "Duplicated key 'foo'.",
                    line: 9
                },
                {
                    message: "Duplicated key 'foo'.",
                    line: 12
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
        export default {
          props: {
            foo: String
          },
          computed: {
            foo: {
              get () {
              }
            }
          },
          initData: {
            foo: null
          },
          methods: {
            foo () {
            }
          },
          setup (props) {
            const foo = computed(() => props.foo)

            return {
              foo
            }
          }
        }
      `,
            errors: [
                {
                    message: "Duplicated key 'foo'.",
                    line: 7
                },
                {
                    message: "Duplicated key 'foo'.",
                    line: 13
                },
                {
                    message: "Duplicated key 'foo'.",
                    line: 16
                },
                {
                    message: "Duplicated key 'foo'.",
                    line: 23
                }
            ]
        },
        {
            filename: 'test.js',
            code: `
        san.defineComponent({
          foo: {
            bar: String
          },
          initData: {
            bar: null
          },
        })
      `,
            options: [{groups: ['foo']}],
            errors: [
                {
                    message: "Duplicated key 'bar'.",
                    line: 7
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
        export default {
          methods: {
            foo () {
              return 0
            }
          },
          setup () {
            const foo = () => 0

            return {
              foo
            }
          }
        }
      `,
            errors: [
                {
                    message: "Duplicated key 'foo'.",
                    line: 12
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
        export default {
          methods: {
            foo () {
              return 0
            }
          },
          setup () {
            return {
              foo: () => 0
            }
          }
        }
      `,
            errors: [
                {
                    message: "Duplicated key 'foo'.",
                    line: 10
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
        export default {
          methods: {
            foo () {
              return 0
            }
          },
          setup: () => ({
            foo: () => 0
          })
        }
      `,
            errors: [
                {
                    message: "Duplicated key 'foo'.",
                    line: 9
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
        export default {
          computed: {
            foo () {
              return 0
            }
          },
          setup: () => ({
            foo: computed(() => 0)
          })
        }
      `,
            errors: [
                {
                    message: "Duplicated key 'foo'.",
                    line: 9
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
        export default {
          data() {
            return {
              foo: 0
            }
          },
          setup: () => ({
            foo: ref(0)
          })
        }
      `,
            errors: [
                {
                    message: "Duplicated key 'foo'.",
                    line: 9
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
        export default {
          data() {
            return {
              foo: 0
            }
          },
          setup: () => ({
            foo: 0
          })
        }
      `,
            errors: [
                {
                    message: "Duplicated key 'foo'.",
                    line: 9
                }
            ]
        },
        {
            filename: 'test.js',
            code: `
        san.defineComponent({
          foo: {
            bar: String
          },
          data: {
            bar: null
          },
        })
      `,
            options: [{groups: ['foo']}],
            errors: [
                {
                    message: "Duplicated key 'bar'.",
                    line: 7
                }
            ]
        },
        {
            filename: 'test.js',
            code: `
        export default defineComponent({
          foo: {
            bar: String
          },
          data: {
            bar: null
          },
        })
      `,
            options: [{groups: ['foo']}],
            errors: [
                {
                    message: "Duplicated key 'bar'.",
                    line: 7
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
      export default {
        props: ['foo'],
        data () {
          return {
            get foo() {
              return foo
            },
            set foo(v) {
              foo = v
            }
          }
        }
      }
      `,
            errors: [
                {
                    message: "Duplicated key 'foo'.",
                    line: 6
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
      export default {
        props: ['foo'],
        data () {
          return {
            set foo(v) {},
            get foo() {}
          }
        }
      }
      `,
            errors: [
                {
                    message: "Duplicated key 'foo'.",
                    line: 7
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
      export default {
        props: ['foo'],
        data () {
          return {
            set foo(v) {}
          }
        }
      }
      `,
            errors: [
                {
                    message: "Duplicated key 'foo'.",
                    line: 6
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
      export default {
        initData () {
          return {
            get foo() {},
            set foo(v) {},
            get foo() {},
          }
        }
      }
      `,
            errors: [
                {
                    message: "Duplicated key 'foo'.",
                    line: 7
                }
            ]
        },
        {
            filename: 'test.san',
            code: `
      export default {
        data () {
          return {
            get foo() {},
            set foo(v) {},
            set foo(v) {},
          }
        }
      }
      `,
            errors: [
                {
                    message: "Duplicated key 'foo'.",
                    line: 7
                }
            ]
        }
    ]
});
