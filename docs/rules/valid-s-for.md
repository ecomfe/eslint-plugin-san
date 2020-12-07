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

- The directive has that argument. E.g. `<div s-for:aaa></div>`
- The directive has that modifier. E.g. `<div s-for.bbb></div>`
- The directive does not have that attribute value. E.g. `<div s-for></div>`
- If the element which has the directive is a custom component, the component does not have `s-bind:key` directive. E.g. `<your-component s-for="item in list"></your-component>`
- The `s-bind:key` directive does not use the variables which are defined by the `s-for` directive. E.g. `<div s-for="x in list" :key="foo"></div>`

If the element which has the directive is a reserved element, this rule does not report it even if the element does not have `s-bind:key` directive because it's not fatal error. [san/require-s-for-key] rule reports it.

<eslint-code-block :rules="{'san/valid-s-for': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div s-for="todo in todos"/>
  <MyComponent
    s-for="todo in todos"
    :key="todo.id"
  />
  <div
    s-for="todo in todos"
    :is="MyComponent"
    :key="todo.id"
  />

  <!-- ✗ BAD -->
  <div s-for/>
  <div s-for:aaa="todo in todos"/>
  <div s-for.bbb="todo in todos"/>
  <div
    s-for="todo in todos"
    is="MyComponent"
  />
  <MyComponent s-for="todo in todos"/>
  <MyComponent
    s-for="todo in todos"
    :key="foo"
  />
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

- [Rule source](https://github.com/vuejs/eslint-plugin-san/blob/master/lib/rules/valid-s-for.js)
- [Test source](https://github.com/vuejs/eslint-plugin-san/blob/master/tests/lib/rules/valid-s-for.js)
