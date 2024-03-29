---
pageClass: rule-details
sidebarDepth: 0
title: san/html-closing-bracket-spacing
description: require or disallow a space before tag's closing brackets
---
# san/html-closing-bracket-spacing
> require or disallow a space before tag's closing brackets

- :gear: This rule is included in all of `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.
- :wrench: The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

## :book: Rule Details

This rule aims to enforce consistent spacing style before closing brackets `>` of tags.

<eslint-code-block fix :rules="{'san/html-closing-bracket-spacing': ['error']}">

```html
<template>
  <!-- ✓ GOOD -->
  <div>
  <div foo>
  <div foo="bar">
  </div>
  <div />
  <div foo />
  <div foo="bar" />

  <!-- ✗ BAD -->
  <div >
  <div foo >
  <div foo="bar" >
  </div >
  <div/>
  <div foo/>
  <div foo="bar"/>
</template>
```

</eslint-code-block>

## :wrench: Options

```json
{
  "san/html-closing-bracket-spacing": ["error", {
    "startTag": "always" | "never",
    "endTag": "always" | "never",
    "selfClosingTag": "always" | "never"
  }]
}
```

- `startTag` (`"always" | "never"`) ... Setting for the `>` of start tags (e.g. `<div>`). Default is `"never"`.
    - `"always"` ... requires one or more spaces.
    - `"never"` ... disallows spaces.
- `endTag` (`"always" | "never"`) ... Setting for the `>` of end tags (e.g. `</div>`). Default is `"never"`.
    - `"always"` ... requires one or more spaces.
    - `"never"` ... disallows spaces.
- `selfClosingTag` (`"always" | "never"`) ... Setting for the `/>` of self-closing tags (e.g. `<div/>`). Default is `"always"`.
    - `"always"` ... requires one or more spaces.
    - `"never"` ... disallows spaces.

### `"startTag": "always", "endTag": "always", "selfClosingTag": "always"`

<eslint-code-block fix :rules="{'san/html-closing-bracket-spacing': ['error', {startTag: 'always', endTag: 'always', selfClosingTag: 'always' }]}">

```html
<template>
  <!-- ✓ GOOD -->
  <div >
  <div foo >
  <div foo="bar" >
  </div >
  <div />
  <div foo />
  <div foo="bar" />
</template>
```

</eslint-code-block>

## :couple: Related Rules

- [san/no-multi-spaces](./no-multi-spaces.md)
- [san/html-closing-bracket-newline](./html-closing-bracket-newline.md)

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/html-closing-bracket-spacing.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/html-closing-bracket-spacing.test.js)
