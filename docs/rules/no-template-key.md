---
pageClass: rule-details
sidebarDepth: 0
title: san/no-template-key
description: disallow `key` attribute on `<template>`
---
# san/no-template-key
> disallow `key` attribute on `<template>`

- :gear: This rule is included in all of `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.

Vue.js disallows `key` attribute on `<template>` elements.

## :book: Rule Details

This rule reports the `<template>` elements which have `key` attribute.

<eslint-code-block :rules="{'san/no-template-key': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div key="foo"> ... </div>
  <template> ... </template>

  <!-- It's valid for Vue.js 3.x -->
  <template s-for="item in list" :key="item.id"> ... </template>

  <!-- ✗ BAD -->
  <template key="foo"> ... </template>
  <template s-bind:key="bar"> ... </template>
  <template :key="baz"> ... </template>
</template>
```

</eslint-code-block>

::: tip Note
This rule does not report keys placed on `<template s-for>`. It's valid for Vue.js 3.x. If you want to report keys placed on `<template s-for>` invalid for Vue.js 2.x, use [san/no-s-for-template-key] rule.
:::

## :wrench: Options

Nothing.

## :couple: Related Rules

- [san/no-s-for-template-key]

[san/no-s-for-template-key]: ./no-s-for-template-key.md

## :books: Further Reading

- [API - Special Attributes - key](https://v3.vuejs.org/api/special-attributes.html#key)

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-san/blob/master/lib/rules/no-template-key.js)
- [Test source](https://github.com/vuejs/eslint-plugin-san/blob/master/tests/lib/rules/no-template-key.js)
