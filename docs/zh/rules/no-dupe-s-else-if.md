---
pageClass: rule-details
sidebarDepth: 0
title: san/no-dupe-s-else-if
description: disallow duplicate conditions in `s-if` / `s-else-if` chains
---
# san/no-dupe-s-else-if
> 禁止在 `s-if` / `s-else-if` 链中出现重复条件

- :gear: 此规则包含于 `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.

## :book: 规则细节

此规则不允许在同一 `s-if` / `s-else-if` 链中出现重复条件。

<eslint-code-block :rules="{'san/no-dupe-s-else-if': ['error']}">

```html
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

这个规则也可以检测一些条件不相同的情况，例如由于`||`和`&& ` 运算符，分支也永远无法执行。

<eslint-code-block :rules="{'san/no-dupe-s-else-if': ['error']}">

```html
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

## :wrench: 配置

暂无。

## :couple: 相关规则

- [no-dupe-else-if]

[no-dupe-else-if]: https://eslint.org/docs/rules/no-dupe-else-if

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/no-dupe-s-else-if.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/no-dupe-s-else-if.test.js)
