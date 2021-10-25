---
pageClass: rule-details
sidebarDepth: 0
title: san/component-tags-order
description: enforce order of component top-level elements
---
# san/component-tags-order
> 要求组件顶级元素的顺序

- :gear: 此规则包含于 `"plugin:san/recommended"`.

## :book: 规则细节

此规则会要求`<script>`、`<template>` 和`<style>` 标签的顺序。

## :wrench: 配置

```json
{
  "san/component-tags-order": ["error", {
    "order": [ [ "script", "template" ], "style" ]
  }]
}
```

- `order` (`(string|string[])[]`) ... 组件顶级元素的顺序。默认 `[ [ "script", "template" ], "style" ]`.

### `{ "order": [ [ "script", "template" ], "style" ] }` (默认)

<eslint-code-block :rules="{'san/component-tags-order': ['error']}">

```html
<!-- ✓ GOOD -->
<script>/* ... */</script>
<template>...</template>
<style>/* ... */</style>
```

</eslint-code-block>

<eslint-code-block :rules="{'san/component-tags-order': ['error']}">

```html
<!-- ✓ GOOD -->
<template>...</template>
<script>/* ... */</script>
<style>/* ... */</style>
```

</eslint-code-block>

<eslint-code-block :rules="{'san/component-tags-order': ['error']}">

```html
<!-- ✗ BAD -->
<style>/* ... */</style>
<script>/* ... */</script>
<template>...</template>
```

</eslint-code-block>

### `{ "order": ["template", "script", "style"] }`

<eslint-code-block :rules="{'san/component-tags-order': ['error', { 'order': ['template', 'script', 'style'] }]}">

```html
<!-- ✓ GOOD -->
<template>...</template>
<script>/* ... */</script>
<style>/* ... */</style>
```

</eslint-code-block>

<eslint-code-block :rules="{'san/component-tags-order': ['error', { 'order': ['template', 'script', 'style'] }]}">

```html
<!-- ✗ BAD -->
<script>/* ... */</script>
<template>...</template>
<style>/* ... */</style>
```

</eslint-code-block>

### `{ "order": ["docs", "template", "script", "style"] }`

<eslint-code-block :rules="{'san/component-tags-order': ['error', { 'order': ['docs', 'template', 'script', 'style'] }]}">

```html
<!-- ✓ GOOD -->
<docs> documents </docs>
<template>...</template>
<script>/* ... */</script>
<style>/* ... */</style>
```

</eslint-code-block>

<eslint-code-block :rules="{'san/component-tags-order': ['error', { 'order': ['docs', 'template', 'script', 'style'] }]}">

```html
<!-- ✗ BAD -->
<template>...</template>
<script>/* ... */</script>
<docs> documents </docs>
<style>/* ... */</style>
```

</eslint-code-block>

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/component-tags-order.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/component-tags-order.test.js)
