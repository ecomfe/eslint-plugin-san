---
pageClass: rule-details
sidebarDepth: 0
title: san/no-duplicate-attributes
description: disallow duplication of attributes
---
# san/no-duplicate-attributes
> disallow duplication of attributes

- :gear: This rule is included in all of `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.

When duplicate arguments exist, only the last one is valid.
It's possibly mistakes.

## :book: Rule Details

This rule reports duplicate attributes.

<eslint-code-block :rules="{'san/no-duplicate-attributes': ['error']}">

```html
<template>
  <!-- ✓ GOOD -->
  <MyComponent foo="abc" />
  <MyComponent class="abc" :class="def" />

  <!-- ✗ BAD -->
  <MyComponent foo="abc" foo="def" />
  <MyComponent class="abc" class="def" />
</template>
```

</eslint-code-block>

## :wrench: Options
Nothing.

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/no-duplicate-attributes.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/blob/master/__tests__/lib/rules/no-duplicate-attributes.test.js)
