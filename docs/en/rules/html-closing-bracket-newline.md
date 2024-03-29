---
pageClass: rule-details
sidebarDepth: 0
title: san/html-closing-bracket-newline
description: require or disallow a line break before tag's closing brackets
---
# san/html-closing-bracket-newline
> require or disallow a line break before tag's closing brackets

- :gear: This rule is included in all of `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.
- :wrench: The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

People have their own preference about the location of closing brackets.
This rule enforces a line break (or no line break) before tag's closing brackets.

```html
<div
  id="foo"
  class="bar"> <!-- On the same line with the last attribute. -->
</div>

<div
  id="foo"
  class="bar"
> <!-- On the next line. -->
</div>
```

## :book: Rule Details

This rule aims to warn the right angle brackets which are at the location other than the configured location.

<eslint-code-block fix :rules="{'san/html-closing-bracket-newline': ['error']}">

```html
<template>
  <!-- ✓ GOOD -->
  <div id="foo" class="bar">
  <div
    id="foo"
    class="bar"
  >

  <!-- ✗ BAD -->
  <div id="foo" class="bar"
  >
  <div
    id="foo"
    class="bar">
</template>
```

</eslint-code-block>

## :wrench: Options

```json
{
  "san/html-closing-bracket-newline": ["error", {
    "singleline": "never",
    "multiline": "always"
  }]
}
```

- `singleline` ... the configuration for single-line elements. It's a single-line element if the element does not have attributes or the last attribute is on the same line as the opening bracket.
    - `"never"` (default) ... disallow line breaks before the closing bracket.
    - `"always"` ... require one line break before the closing bracket.
- `multiline` ... the configuration for multiline elements. It's a multiline element if the last attribute is not on the same line of the opening bracket.
    - `"never"` ... disallow line breaks before the closing bracket.
    - `"always"` (default) ... require one line break before the closing bracket.

Plus, you can use [`san/html-indent`](./html-indent.md) rule to enforce indent-level of the closing brackets.

### `"multiline": "never"`

<eslint-code-block fix :rules="{'san/html-closing-bracket-newline': ['error', { 'multiline': 'never' }]}">

```html
<template>
  <!-- ✓ GOOD -->
  <div
    id="foo"
    class="bar">

  <!-- ✗ BAD -->
  <div
    id="foo"
    class="bar"
  >
</template>
```

</eslint-code-block>

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/html-closing-bracket-newline.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/html-closing-bracket-newline.test.js)
