---
pageClass: rule-details
sidebarDepth: 0
title: san/no-lone-template
description: disallow unnecessary `<template>`
---
# san/no-lone-template
> 不允许不必要的 `<template>`

- :gear: 此规则包含于 `"plugin:san/recommended"`.

## :book: 规则细节

该规则目的是消除不必要的和潜在混淆的 `<template>`。

<eslint-code-block :rules="{'san/no-lone-template': ['error']}">

```html
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

## :wrench: 配置

暂无。

## :couple: 相关规则

- [no-lone-blocks]

[no-lone-blocks]: https://eslint.org/docs/rules/no-lone-blocks

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/no-lone-template.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/no-lone-template.test.js)
