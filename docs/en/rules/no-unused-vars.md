---
pageClass: rule-details
sidebarDepth: 0
title: san/no-unused-vars
description: disallow unused variable definitions of s-for directives or scope attributes
---
# san/no-unused-vars
> disallow unused variable definitions of s-for directives or scope attributes

- :gear: This rule is included in all of `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.

## :book: Rule Details

This rule report variable definitions of s-for directives or scope attributes if those are not used.

<eslint-code-block :rules="{'san/no-unused-vars': ['error']}">

```html
<template>
  <!-- ✓ GOOD -->
  <div s-for="i in 5">
    <div>{{ i }}</li>
  </div>

  <div s-for="i in 5">
    <div class="{{i}}"></li>
  </div>

  <!-- ✗ BAD -->
  <div s-for="i in 5">
    <div>item</div>
  </div>

  <div s-for="i in 5">
    <div class="i"></li>
  </div>
</template>
```

</eslint-code-block>

## :wrench: Options

```js
{
    "san/no-unused-vars": ["error", {
        "ignorePattern": "^_"
    }]
}
```

- `ignorePattern` ... disables reporting when your definitions of s-for directives or scope attributes match your ignorePattern Regular expression. default `null`, will ignore nothing

## :rocket: Suggestion

- When your ignorePattern set to `^_`, we could provide a suggestion which add a prefix`_` to your variable and no more eslint error

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/no-unused-vars.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/blob/main/__tests__/lib/rules/no-unused-vars.test.js)
