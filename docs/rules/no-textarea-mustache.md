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
  <textarea s-model="message" />

  <!-- ✗ BAD -->
  <textarea>{{ message }}</textarea>
</template>
```

</eslint-code-block>

::: warning Note
Interpolation on textareas (`<textarea>{{text}}</textarea>`) won't work. Use `s-model` instead.
[https://v3.vuejs.org/guide/forms.html#multiline-text](https://v3.vuejs.org/guide/forms.html#multiline-text)
:::

## :wrench: Options

Nothing.

## :books: Further Reading

- [Guide - Form Input Bindings / Multiline text](https://v3.vuejs.org/guide/forms.html#multiline-text)

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-san/blob/master/lib/rules/no-textarea-mustache.js)
- [Test source](https://github.com/vuejs/eslint-plugin-san/blob/master/tests/lib/rules/no-textarea-mustache.js)
