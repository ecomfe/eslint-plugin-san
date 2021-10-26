---
pageClass: rule-details
sidebarDepth: 0
title: san/no-dupe-keys
description: disallow duplication of field names
---
# san/no-dupe-keys
> disallow duplication of field names

- :gear: This rule is included in all of `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.

This rule prevents to use duplicated names.

## :book: Rule Details

This rule is aimed at preventing duplicated property names in `this.data` of a san instance.

<eslint-code-block :rules="{'san/no-dupe-keys': ['error']}">

```html
<script>
/* ✗ BAD */
export default {
  computed: {
    foo() {
      return this.data.get('a')
    }
  },

  initData() {
    return {
      foo: null
    }
  },

  foo () {}
}
</script>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/no-dupe-keys.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/no-dupe-keys.test.js)
