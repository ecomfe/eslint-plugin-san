---
pageClass: rule-details
sidebarDepth: 0
title: san/max-attributes-per-line
description: enforce the maximum number of attributes per line
---
# san/max-attributes-per-line
> enforce the maximum number of attributes per line

- :gear: This rule is included in all of `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.
- :wrench: The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

Limits the maximum number of attributes/properties per line to improve readability.

## :book: Rule Details

This rule aims to enforce a number of attributes per line in templates.
It checks all the elements in a template and verifies that the number of attributes per line does not exceed the defined maximum.
An attribute is considered to be in a new line when there is a line break between two attributes.

There is a configurable number of attributes that are acceptable in one-line case (default 1), as well as how many attributes are acceptable per line in multi-line case (default 1).

<eslint-code-block fix :rules="{'san/max-attributes-per-line': ['error']}">

```html
<template>
  <!-- ✓ GOOD -->
  <MyComponent lorem="1"/>
  <MyComponent
    lorem="1"
    ipsum="2"
  />
  <MyComponent
    lorem="1"
    ipsum="2"
    dolor="3"
  />

  <!-- ✗ BAD -->
  <MyComponent lorem="1" ipsum="2"/>
  <MyComponent
    lorem="1" ipsum="2"
  />
  <MyComponent
    lorem="1" ipsum="2"
    dolor="3"
  />
</template>
```

</eslint-code-block>

## :wrench: Options

```json
{
  "san/max-attributes-per-line": ["error", {
    "singleline": 1,
    "multiline": {
      "max": 1,
      "allowFirstLine": false
    }
  }]
}
```

- `singleline` (`number`) ... The number of maximum attributes per line when the opening tag is in a single line. Default is `1`.
- `multiline.max` (`number`) ... The max number of attributes per line when the opening tag is in multiple lines. Default is `1`. This can be `{ multiline: 1 }` instead of `{ multiline: { max: 1 }}` if you don't configure `allowFirstLine` property.
- `multiline.allowFirstLine` (`boolean`) ... If `true`, it allows attributes on the same line as that tag name. Default is `false`.

### `"singleline": 3`

<eslint-code-block fix :rules="{'san/max-attributes-per-line': ['error', {singleline: 3}]}">

```html
<template>
  <!-- ✓ GOOD -->
  <MyComponent lorem="1" ipsum="2" dolor="3" />

  <!-- ✗ BAD -->
  <MyComponent lorem="1" ipsum="2" dolor="3" sit="4" />
</template>
```

</eslint-code-block>

### `"multiline": 2`

<eslint-code-block fix :rules="{'san/max-attributes-per-line': ['error', {multiline: 2}]}">

```html
<template>
  <!-- ✓ GOOD -->
  <MyComponent
    lorem="1" ipsum="2"
    dolor="3"
  />

  <!-- ✗ BAD -->
  <MyComponent
    lorem="1" ipsum="2" dolor="3"
    sit="4"
  />
</template>
```

</eslint-code-block>

### `"multiline": 1, "allowFirstLine": true`

<eslint-code-block fix :rules="{'san/max-attributes-per-line': ['error', {multiline: { allowFirstLine: true }}]}">

```html
<template>
  <!-- ✓ GOOD -->
  <MyComponent lorem="1"
               ipsum="2"
               dolor="3"
  />
</template>
```

</eslint-code-block>

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/max-attributes-per-line.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/max-attributes-per-line.test.js)
