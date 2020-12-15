---
pageClass: rule-details
sidebarDepth: 0
title: san/valid-s-else
description: enforce valid `s-else` directives
---
# san/valid-s-else
> enforce valid `s-else` directives

- :gear: This rule is included in all of `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.

This rule checks whether every `s-else` directive is valid.

## :book: Rule Details

This rule reports `s-else` directives in the following cases:

- The directive has that argument. E.g. `<div s-if="foo"></div><div s-else="{{ {aaa: bar} }}"></div>`
- The directive has that modifier. E.g. `<div s-if="foo"></div><div s-else="{{ {bbb: bar} }}"></div>`
- The directive has that attribute value. E.g. `<div s-if="foo"></div><div s-else="bar"></div>`
- The directive is on the elements that the previous element don't have `s-if`/`s-else-if` directives. E.g. `<div s-else></div>`
- The directive is on the elements which have `s-if`/`s-else-if` directives. E.g. `<div s-if="foo" s-else></div>`

<eslint-code-block :rules="{'san/valid-s-else': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div s-if="foo"/>
  <div s-else/>

  <!-- ✗ BAD -->
  <div s-else="foo"/>
  <div s-else="{{ {aaa: bar} }}"/>
  <div s-else="{{ {bbb: bar} }}"/>
</template>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :couple: Related Rules

- [san/valid-s-if]
- [san/valid-s-else-if]
- [san/no-parsing-error]

[san/valid-s-if]: ./valid-s-if.md
[san/valid-s-else-if]: ./valid-s-else-if.md
[san/no-parsing-error]: ./no-parsing-error.md

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/master/lib/rules/valid-s-else.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/blob/master/tests/lib/rules/valid-s-else.js)
