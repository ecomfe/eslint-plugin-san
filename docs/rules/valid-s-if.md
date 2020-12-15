---
pageClass: rule-details
sidebarDepth: 0
title: san/valid-s-if
description: enforce valid `s-if` directives
---
# san/valid-s-if
> enforce valid `s-if` directives

- :gear: This rule is included in all of `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.

This rule checks whether every `s-if` directive is valid.

## :book: Rule Details

This rule reports `s-if` directives in the following cases:

- The directive has that argument. E.g. `<div s-if="{{ {aaa: bar} }}"></div>`
- The directive has that modifier. E.g. `<div s-if="{{ {bbb: bar} }}"></div>`
- The directive does not have that attribute value. E.g. `<div s-if></div>`
- The directive is on the elements which have `s-else`/`s-else-if` directives. E.g. `<div s-else s-if="foo"></div>`

<eslint-code-block :rules="{'san/valid-s-if': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div s-if="foo"/>
  <div s-else-if="bar"/>
  <div s-else/>

  <!-- ✗ BAD -->
  <div s-if/>
  <div s-if="{{ {aaa: bar} }}"/>
  <div s-if="{{ {bbb: bar} }}"/>
  <div
    s-if="foo"
    s-else
  />
  <div
    s-if="foo"
    s-else-if="bar"
  />
</template>
```

</eslint-code-block>

::: warning Note
This rule does not check syntax errors in directives because it's checked by [san/no-parsing-error] rule.
:::

## :wrench: Options

Nothing.

## :couple: Related Rules

- [san/valid-s-else]
- [san/valid-s-else-if]
- [san/no-parsing-error]

[san/valid-s-else]: ./valid-s-else.md
[san/valid-s-else-if]: ./valid-s-else-if.md
[san/no-parsing-error]: ./no-parsing-error.md

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/master/lib/rules/valid-s-if.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/blob/master/tests/lib/rules/valid-s-if.js)
