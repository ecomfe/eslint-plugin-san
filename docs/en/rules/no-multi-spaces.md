---
pageClass: rule-details
sidebarDepth: 0
title: san/no-multi-spaces
description: disallow multiple spaces
---
# san/no-multi-spaces
> disallow multiple spaces

- :gear: This rule is included in all of `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.
- :wrench: The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

## :book: Rule Details

This rule aims at removing multiple spaces in tags, which are not used for indentation.

<eslint-code-block fix :rules="{'san/no-multi-spaces': ['error']}">

```html
<template>
  <!-- ✓ GOOD -->
  <div
    class="foo"
    style="{{bar}}" />
  <i
    class="{{
      isExpanded ? 'fa-angle-up' : 'fa-angle-down'
    }}"
  />

  <!-- ✗ BAD -->
  <div     class="foo"
    style =  "{{bar}}"         />
  <i
    class="{{
      isExpanded ? 'fa-angle-up'   : '',
      !isExpanded ? 'fa-angle-down' : '',
    }}"
  />
</template>
```

</eslint-code-block>

## :wrench: Options

```json
{
  "san/no-multi-spaces": ["error", {
    "ignoreProperties": false
  }]
}
```

- `ignoreProperties` ... whether or not objects' properties should be ignored. default `false`

### `"ignoreProperties": true`

<eslint-code-block fix :rules="{'san/no-multi-spaces': ['error', { 'ignoreProperties': true }]}">

```html
<template>
  <!-- ✓ GOOD -->
  <i
    class="{{
      isExpanded ? 'fa-angle-up'   : '',
      !isExpanded ? 'fa-angle-down' : '',
    }}"
  />
</template>
```

</eslint-code-block>

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/no-multi-spaces.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/no-multi-spaces.test.js)
