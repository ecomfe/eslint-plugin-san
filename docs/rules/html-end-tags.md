---
pageClass: rule-details
sidebarDepth: 0
title: san/html-end-tags
description: enforce end tag style
---
# san/html-end-tags
> enforce end tag style

- :gear: This rule is included in all of `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.
- :wrench: The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

## :book: Rule Details

This rule aims to disallow lacking end tags.

<eslint-code-block fix :rules="{'san/html-end-tags': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div></div>
  <p></p>
  <p></p>
  <input>
  <br>

  <!-- ✗ BAD -->
  <div>
  <p>
</template>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/master/lib/rules/html-end-tags.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/blob/master/tests/lib/rules/html-end-tags.js)
