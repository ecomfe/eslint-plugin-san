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

```vue
<template>
  <!-- ✓ GOOD -->
  <ol s-for="i in 5">
    <li>{{ i }}</li>
  </ol>

  <!-- ✗ BAD -->
  <ol s-for="i in 5">
    <li>item</li>
  </ol>
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

- [Rule source](https://github.com/ecom/eslint-plugin-san/blob/master/lib/rules/no-unused-vars.js)
- [Test source](https://github.com/ecom/eslint-plugin-san/blob/master/tests/lib/rules/no-unused-vars.js)
