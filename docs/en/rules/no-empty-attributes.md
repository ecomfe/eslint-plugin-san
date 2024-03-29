---
pageClass: rule-details
sidebarDepth: 0
title: san/no-empty-attributes
description: disallow empty of attributes
---
# san/no-empty-attributes
> disallow empty of attributes

- :gear: This rule is included in all of `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.

## :book: Rule Details

This rule requires that the class attribute and style attribute cannot be empty by default.

<eslint-code-block :rules="{'san/no-empty-attributes': ['error']}">

```html
<template>
  <!-- ✓ GOOD -->
  <div class="abc" />
  <div style="abc" />

  <!-- ✗ BAD -->
  <div class="" />
  <div style="" />
  <div class=" " />
  <div style=" " />
</template>
```

</eslint-code-block>

## :wrench: Options
```js
{
    "san/no-empty-attributes": ["error", {
        groups: ['attr']
    }],
}
```

* `groups`：In addition to the class  and style, you can also add additional attributes that cannot be empty through group.

### `groups: ['attr']`

<eslint-code-block :rules="{'san/no-empty-attributes': ['error', { groups: ['attr'] }]}">

```html
<template>
  <!-- ✓ GOOD -->
  <div class="abc" />
  <div style="abc" />
  <div attr="abc" />

  <!-- ✗ BAD -->
  <div class="" />
  <div style="" />
  <div attr="" />
  <div attr=" " />
</template>
```

</eslint-code-block>

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/no-empty-attributes.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/blob/main/__tests__/lib/rules/no-empty-attributes.test.js)