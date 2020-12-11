---
pageClass: rule-details
sidebarDepth: 0
title: san/no-textarea-mustache
description: disallow mustaches in `<textarea>`
---
# san/no-textarea-mustache
> disallow mustaches in `<textarea>`

- :gear: This rule is included in all of `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.

## :book: Rule Details

This rule reports mustaches in `<textarea>`.

<eslint-code-block :rules="{'san/no-textarea-mustache': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <textarea value="{=message=}" />

  <!-- ✗ BAD -->
  <textarea>{{ message }}</textarea>
</template>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :books: Further Reading

- [Guide - Form Input Bindings / Multiline text](https://baidu.github.io/san/tutorial/form/#输入框)

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/master/lib/rules/no-textarea-mustache.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/blob/master/tests/lib/rules/no-textarea-mustache.js)
