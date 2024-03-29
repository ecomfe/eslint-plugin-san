---
pageClass: rule-details
sidebarDepth: 0
title: san/component-tags-order
description: enforce order of component top-level elements
---
# san/component-tags-order
> enforce order of component top-level elements

- :gear: This rule is included in `"plugin:san/recommended"`.

## :book: Rule Details

This rule warns about the order of the `<script>`, `<template>` & `<style>` tags.

## :wrench: Options

```json
{
  "san/component-tags-order": ["error", {
    "order": [ [ "script", "template" ], "style" ]
  }]
}
```

- `order` (`(string|string[])[]`) ... The order of top-level element names. default `[ [ "script", "template" ], "style" ]`.

### `{ "order": [ [ "script", "template" ], "style" ] }` (default)

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

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/component-tags-order.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/component-tags-order.test.js)
