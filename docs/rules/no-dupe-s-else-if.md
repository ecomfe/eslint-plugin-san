---
pageClass: rule-details
sidebarDepth: 0
title: san/no-dupe-s-else-if
description: disallow duplicate conditions in `s-if` / `s-else-if` chains
---
# san/no-dupe-s-else-if
> disallow duplicate conditions in `s-if` / `s-else-if` chains

- :gear: This rule is included in all of `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.

## :book: Rule Details

This rule disallows duplicate conditions in the same `s-if` / `s-else-if` chain.

<eslint-code-block :rules="{'san/no-dupe-s-else-if': ['error']}">

```vue
<template>
  <!-- ✗ BAD -->
  <div s-if="isSomething(x)" />
  <div s-else-if="isSomething(x)" />

  <div s-if="a" />
  <div s-else-if="b" />
  <div s-else-if="c && d" />
  <div s-else-if="c && d" />

  <div s-if="n === 1" />
  <div s-else-if="n === 2" />
  <div s-else-if="n === 3" />
  <div s-else-if="n === 2" />
  <div s-else-if="n === 5" />

  <!-- ✓ GOOD -->
  <div s-if="isSomething(x)" />
  <div s-else-if="isSomethingElse(x)" />

  <div s-if="a" />
  <div s-else-if="b" />
  <div s-else-if="c && d" />
  <div s-else-if="c && e" />

  <div s-if="n === 1" />
  <div s-else-if="n === 2" />
  <div s-else-if="n === 3" />
  <div s-else-if="n === 4" />
  <div s-else-if="n === 5" />
</template>
```

</eslint-code-block>

This rule can also detect some cases where the conditions are not identical, but the branch can never execute due to the logic of `||` and `&&` operators.

<eslint-code-block :rules="{'san/no-dupe-s-else-if': ['error']}">

```vue
<template>
  <!-- ✗ BAD -->
  <div s-if="a || b" />
  <div s-else-if="a" />

  <div s-if="a" />
  <div s-else-if="b" />
  <div s-else-if="a || b" />

  <div s-if="a" />
  <div s-else-if="a && b" />

  <div s-if="a && b" />
  <div s-else-if="a && b && c" />

  <div s-if="a || b" />
  <div s-else-if="b && c" />

  <div s-if="a" />
  <div s-else-if="b && c" />
  <div s-else-if="d && (c && e && b || a)" />
</template>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :couple: Related Rules

- [no-dupe-else-if]

[no-dupe-else-if]: https://eslint.org/docs/rules/no-dupe-else-if

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/master/lib/rules/no-dupe-s-else-if.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/blob/master/tests/lib/rules/no-dupe-s-else-if.js)
