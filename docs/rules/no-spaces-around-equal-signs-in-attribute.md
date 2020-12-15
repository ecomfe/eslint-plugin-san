---
pageClass: rule-details
sidebarDepth: 0
title: san/no-spaces-around-equal-signs-in-attribute
description: disallow spaces around equal signs in attribute
---
# san/no-spaces-around-equal-signs-in-attribute
> disallow spaces around equal signs in attribute

- :gear: This rule is included in all of `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.
- :wrench: The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

## :book: Rule Details

This rule disallow spaces around equal signs in attribute.

<eslint-code-block fix :rules="{'san/no-spaces-around-equal-signs-in-attribute': ['error']}">

```vue
<template>
  <!-- ✗ BAD -->
  <div class = "item"></div>
  <!-- ✓ GOOD -->
  <div class="item"></div>
</template>
```

</eslint-code-block>

::: tip Info
HTML5 allows spaces around equal signs. But space-less is easier to read, and groups entities better together.
:::

## :wrench: Options

```json
{
  "san/no-spaces-around-equal-signs-in-attribute": ["error"]
}
```

## :books: Further Reading

* [HTML5 Style Guide - W3Schools *Spaces and Equal Signs*](https://www.w3schools.com/html/html5_syntax.asp)

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/master/lib/rules/no-spaces-around-equal-signs-in-attribute.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/blob/master/tests/lib/rules/no-spaces-around-equal-signs-in-attribute.js)
