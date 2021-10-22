---
pageClass: rule-details
sidebarDepth: 0
title: san/no-lone-template
description: disallow unnecessary `<template>`
---
# san/no-lone-template
> disallow unnecessary `<template>`

- :gear: This rule is included in `"plugin:san/recommended"`.

## :book: Rule Details

This rule aims to eliminate unnecessary and potentially confusing `<template>`.  

<eslint-code-block :rules="{'san/no-lone-template': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <template s-if="foo">...</template>
  <template s-else-if="bar">...</template>
  <template s-else>...</template>
  <template s-for="e in list">...</template>
  <template s-slot>...</template>

  <!-- ✗ BAD -->
  <template>...</template>
  <template/>
</template>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :couple: Related Rules

- [no-lone-blocks]

[no-lone-blocks]: https://eslint.org/docs/rules/no-lone-blocks

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/no-lone-template.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/no-lone-template.test.js)
