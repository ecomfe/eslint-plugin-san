---
pageClass: rule-details
sidebarDepth: 0
title: san/attribute-hyphenation
description: enforce attribute naming style on custom components in template
---
# san/attribute-hyphenation
> enforce attribute naming style on custom components in template

- :gear: This rule is included in all of `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.
- :wrench: The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

## :book: Rule Details

This rule enforces using hyphenated attribute names on custom components in San templates.

<eslint-code-block fix :rules="{'san/attribute-hyphenation': ['error', 'always']}">

```html
<template>
  <!-- ✓ GOOD -->
  <MyComponent my-prop="prop" />

  <!-- ✗ BAD -->
  <MyComponent myProp="prop" />
</template>
```

</eslint-code-block>

## :wrench: Options

```json
{
  "san/attribute-hyphenation": ["error", "always" | "never", {
    "ignore": []
  }]
}
```

Default casing is set to `always` with `['data-', 'aria-', 'slot-scope']` set to be ignored

- `"always"` (default) ... Use hyphenated name.
- `"never"` ... Don't use hyphenated name except `data-`, `aria-` and `slot-scope`.
- `"ignore"` ... Array of ignored names

### `"always"`
It errors on upper case letters.

<eslint-code-block fix :rules="{'san/attribute-hyphenation': ['error', 'always']}">

```html
<template>
  <!-- ✓ GOOD -->
  <MyComponent my-prop="prop" />

  <!-- ✗ BAD -->
  <MyComponent myProp="prop" />
</template>
```

</eslint-code-block>

### `"never"`
It errors on hyphens except `data-`, `aria-` and `slot-scope`.

<eslint-code-block fix :rules="{'san/attribute-hyphenation': ['error', 'never']}">

```html
<template>
  <!-- ✓ GOOD -->
  <MyComponent myProp="prop" />
  <MyComponent data-id="prop" />
  <MyComponent aria-role="button" />
  <MyComponent slot-scope="prop" />

  <!-- ✗ BAD -->
  <MyComponent my-prop="prop" />
</template>
```

</eslint-code-block>

### `"never", { "ignore": ["custom-prop"] }`
Don't use hyphenated name but allow custom attributes

<eslint-code-block fix :rules="{'san/attribute-hyphenation': ['error', 'never', { ignore: ['custom-prop']}]}">

```html
<template>
  <!-- ✓ GOOD -->
  <MyComponent myProp="prop" />
  <MyComponent custom-prop="prop" />
  <MyComponent data-id="prop" />
  <MyComponent aria-role="button" />
  <MyComponent slot-scope="prop" />

  <!-- ✗ BAD -->
  <MyComponent my-prop="prop" />
</template>
```

</eslint-code-block>

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/attribute-hyphenation.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/attribute-hyphenation.test.js)
