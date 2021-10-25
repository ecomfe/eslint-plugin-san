---
pageClass: rule-details
sidebarDepth: 0
title: san/html-closing-bracket-newline
description: require or disallow a line break before tag's closing brackets
---
# san/html-closing-bracket-newline
> 要求在标签的右括号之前换行（或不换行）

- :gear: 此规则包含于 `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.
- :wrench: [命令行](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems)中的`--fix`选项可以自动修复此规则报告的一些问题。

每个人对右括号的位置都有自己的偏好。此规则要求在标签的右尖括号之前换行（或不换行）。

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

## :book: 规则细节

此规则目的在于提示不符合配置的右尖括号的错误。

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

## :wrench: 配置

```json
{
  "san/html-closing-bracket-newline": ["error", {
    "singleline": "never",
    "multiline": "always"
  }]
}
```

- `singleline` ... 单行元素的配置。 如果元素没有属性或最后一个属性与左括号在同一行，则它是一个单行元素。
   - `"never"` (默认) ... 禁止在右括号前换行。
   - `"always"` ... 需要在右括号前换行。
- `multiline` ... 多行元素的配置。 如果最后一个属性不在左括号的同一行上，则它是一个多行元素。
   - `"never"` ... 禁止在右括号前换行。
   - `"always"` (默认) ... 需要在右括号前换行。

另外，您可以使用 [`san/html-indent`](./html-indent.md) 规则来强制结束括号的缩进级别。

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

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/html-closing-bracket-newline.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/html-closing-bracket-newline.test.js)
