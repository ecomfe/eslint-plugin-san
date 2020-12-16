---
pageClass: rule-details
sidebarDepth: 0
title: san/mustache-interpolation-spacing
description: enforce unified spacing in mustache interpolations
---
# san/mustache-interpolation-spacing
> enforce unified spacing in mustache interpolations

- :gear: This rule is included in all of `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.
- :wrench: The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

## :book: Rule Details

This rule aims at enforcing unified spacing in mustache interpolations.

<eslint-code-block fix :rules="{'san/mustache-interpolation-spacing': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div>{{ text }}</div>
  <div>{{   text   }}</div><!-- Use san/no-multi-spaces rule to disallow multiple spaces. -->

  <!-- ✗ BAD -->
  <div>{{text}}</div>
</template>
```

</eslint-code-block>

## :wrench: Options

```json
{
  "san/mustache-interpolation-spacing": ["error", "always" | "never"]
}
```

- `"always"` (default) ... Expect one space between expression and curly brackets.
- `"never"` ... Expect no spaces between expression and curly brackets.

### `"never"`

<eslint-code-block fix :rules="{'san/mustache-interpolation-spacing': ['error', 'never']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div>{{text}}</div>

  <!-- ✗ BAD -->
  <div>{{   text   }}</div>
  <div>{{ text }}</div>
</template>
```

</eslint-code-block>

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/master/lib/rules/mustache-interpolation-spacing.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/blob/master/tests/lib/rules/mustache-interpolation-spacing.js)
