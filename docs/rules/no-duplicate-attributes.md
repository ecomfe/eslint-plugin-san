---
pageClass: rule-details
sidebarDepth: 0
title: san/no-duplicate-attributes
description: disallow duplication of attributes
---
# san/no-duplicate-attributes
> disallow duplication of attributes

- :gear: This rule is included in all of `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.

When duplicate arguments exist, only the last one is valid.
It's possibly mistakes.

## :book: Rule Details

This rule reports duplicate attributes.

<eslint-code-block :rules="{'san/no-duplicate-attributes': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <MyComponent :foo="abc" />
  <MyComponent foo="abc" />
  <MyComponent class="abc" :class="def" />

  <!-- ✗ BAD -->
  <MyComponent :foo="abc" foo="def" />
  <MyComponent foo="abc" :foo="def" />
  <MyComponent foo="abc" foo="def" />
  <MyComponent :foo.a="abc" :foo.b="def" />
  <MyComponent class="abc" class="def" />
</template>
```

</eslint-code-block>

## :wrench: Options

```json
{
  "san/no-duplicate-attributes": ["error", {
    "allowCoexistClass": true,
    "allowCoexistStyle": true
  }]
}
```

- `allowCoexistClass` (`boolean`) ... Enables [`s-bind:class`] directive can coexist with the plain `class` attribute. Default is `true`.
- `allowCoexistStyle` (`boolean`) ... Enables [`s-bind:style`] directive can coexist with the plain `style` attribute. Default is `true`.

[`s-bind:class`]: https://v3.vuejs.org/guide/class-and-style.html
[`s-bind:style`]: https://v3.vuejs.org/guide/class-and-style.html

### `"allowCoexistClass": false, "allowCoexistStyle": false`

<eslint-code-block :rules="{'san/no-duplicate-attributes': ['error', {allowCoexistClass: false, allowCoexistStyle: false}]}">

```vue
<template>
  <!-- ✗ BAD -->
  <MyComponent class="abc" :class="def" />
  <MyComponent style="abc" :style="def" />
</template>
```

</eslint-code-block>

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-san/blob/master/lib/rules/no-duplicate-attributes.js)
- [Test source](https://github.com/vuejs/eslint-plugin-san/blob/master/tests/lib/rules/no-duplicate-attributes.js)
