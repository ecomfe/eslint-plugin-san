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
In Vue.js 2.x, the `<template>` elements that have no specific directives have no effect.  
In Vue.js 3.x, the `<template>` elements that have no specific directives render the `<template>` elements as is, but in most cases this may not be what you intended.

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

```json
{
  "san/no-lone-template": ["error", {
    "ignoreAccessible": false
  }]
}
```

- `ignoreAccessible` ... If `true`, ignore accessible `<template>` elements. default `false`.  
  Note: this option is useless if you are using Vue.js 2.x.

### `"ignoreAccessible": true`

<eslint-code-block :rules="{'san/no-lone-template': ['error', { 'ignoreAccessible': true }]}">

```vue
<template>
  <!-- ✓ GOOD -->
  <template ref="foo">...</template>
  <template id="bar">...</template>

  <!-- ✗ BAD -->
  <template class="baz">...</template>
</template>
```

</eslint-code-block>

## :mute: When Not To Use It

If you are using Vue.js 3.x and want to define the `<template>` element intentionally, you will have to turn this rule off or use `"ignoreAccessible"` option.

## :couple: Related Rules

- [san/no-template-key]
- [no-lone-blocks]

[no-lone-blocks]: https://eslint.org/docs/rules/no-lone-blocks
[san/no-template-key]: ./no-template-key.md

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-san/blob/master/lib/rules/no-lone-template.js)
- [Test source](https://github.com/vuejs/eslint-plugin-san/blob/master/tests/lib/rules/no-lone-template.js)
