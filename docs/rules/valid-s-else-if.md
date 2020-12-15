---
pageClass: rule-details
sidebarDepth: 0
title: san/valid-s-else-if
description: enforce valid `s-else-if` directives
---
# san/valid-s-else-if
> enforce valid `s-else-if` directives

- :gear: This rule is included in all of `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.

This rule checks whether every `s-else-if` directive is valid.

## :book: Rule Details

This rule reports `s-else-if` directives in the following cases:

- The directive has that argument. E.g. `<div s-if="foo"></div><div s-else-if="{{ {aaa: bar} }}"></div>`
- The directive has that modifier. E.g. `<div s-if="foo"></div><div s-else-if="{{ {bbb: bar} }}"></div>`
- The directive does not have that attribute value. E.g. `<div s-if="foo"></div><div s-else-if></div>`
- The directive is on the elements that the previous element don't have `s-if`/`s-else-if` directives. E.g. `<div s-else-if="bar"></div>`
- The directive is on the elements which have `s-if`/`s-else` directives. E.g. `<div s-if="foo" s-else-if="bar"></div>`

<eslint-code-block :rules="{'san/valid-s-else-if': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div s-if="foo"/>
  <div s-else-if="bar"/>

  <!-- ✗ BAD -->
  <div s-else-if/>
  <div s-else-if="{{ {aaa: bar} }}"/>
  <div s-else-if="{{ {bbb: bar} }}"/>
</template>
```

</eslint-code-block>

::: warning Note
This rule does not check syntax errors in directives because it's checked by [san/no-parsing-error] rule.
:::

## :wrench: Options

Nothing.

## :couple: Related Rules

- [san/valid-s-if]
- [san/valid-s-else]
- [san/no-parsing-error]

[san/valid-s-if]: ./valid-s-if.md
[san/valid-s-else]: ./valid-s-else.md
[san/no-parsing-error]: ./no-parsing-error.md

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/master/lib/rules/valid-s-else-if.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/blob/master/tests/lib/rules/valid-s-else-if.js)
