---
pageClass: rule-details
sidebarDepth: 0
title: san/valid-s-for
description: enforce valid `s-for` directives
---
# san/valid-s-for
> enforce valid `s-for` directives

- :gear: This rule is included in all of `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.

This rule checks whether every `s-for` directive is valid.

## :book: Rule Details

This rule reports `s-for` directives in the following cases:

- The directive has that argument. E.g. `<div s-for="{{ {aaa: bar} }}"></div>`
- The directive has that modifier. E.g. `<div s-for="{{ {bbb: bar} }}"></div>`
- The directive does not have that attribute value. E.g. `<div s-for></div>`


<eslint-code-block :rules="{'san/valid-s-for': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div s-for="todo in todos"/>

  <!-- ✗ BAD -->
  <div s-for/>
  <div s-for:aaa="todo in todos"/>
  <div s-for.bbb="todo in todos"/>
</template>
```

</eslint-code-block>

::: warning Note
This rule does not check syntax errors in directives. [san/no-parsing-error] rule reports it.
The following cases are syntax errors:

- The directive's value isn't `alias in expr`. E.g. `<div s-for="foo"></div>`
- The alias isn't LHS. E.g. `<div s-for="foo() in list"></div>`
:::

## :wrench: Options

Nothing.

## :couple: Related Rules

- [san/require-s-for-key]
- [san/no-parsing-error]

[san/require-s-for-key]: ./require-s-for-key.md
[san/no-parsing-error]: ./no-parsing-error.md

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/master/lib/rules/valid-s-for.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/blob/master/tests/lib/rules/valid-s-for.js)
