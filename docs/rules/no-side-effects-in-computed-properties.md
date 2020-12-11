---
pageClass: rule-details
sidebarDepth: 0
title: san/no-side-effects-in-computed-properties
description: disallow side effects in computed properties
---
# san/no-side-effects-in-computed-properties
> disallow side effects in computed properties

- :gear: This rule is included in all of `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.

## :book: Rule Details

This rule is aimed at preventing the code which makes side effects in computed properties.

It is considered a very bad practice to introduce side effects inside computed properties. It makes the code not predictable and hard to understand.

<eslint-code-block :rules="{'san/no-side-effects-in-computed-properties': ['error']}">

```vue
<script>
/* ✓ GOOD */
export default {
  computed: {
    fullName () {
      const firstName = this.data.get('firstName')
      const lastName = this.data.get('lastName')

      return `${this.firstName} ${this.lastName}`
    },
    reversedArray () {
      return this.data.get('array').slice(0).reverse() // .slice makes a copy of the array, instead of mutating the orginal
    }
  }
}
</script>
```

</eslint-code-block>

<eslint-code-block :rules="{'san/no-side-effects-in-computed-properties': ['error']}">

```vue
<script>
/* ✗ BAD */
export default {
  computed: {
    fullName () {
      this.data.set('firstName') = 'lorem' // <- side effect
      return `${this.data.set('firstName')} ${this.data.set('lastName')}`
    },
    reversedArray () {
      return this.data.get('array').reverse() // <- side effect - orginal array is being mutated
    }
  }
}
</script>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :books: Further Reading

- [Guide - Computed](https://baidu.github.io/san/tutorial/component/#计算数据)

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/master/lib/rules/no-side-effects-in-computed-properties.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/blob/master/tests/lib/rules/no-side-effects-in-computed-properties.js)
