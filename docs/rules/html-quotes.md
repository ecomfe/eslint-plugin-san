---
pageClass: rule-details
sidebarDepth: 0
title: san/html-quotes
description: enforce quotes style of HTML attributes
---
# san/html-quotes
> 要求 HTML 属性中的引号样式

- :gear: 此规则包含于 `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.
- :wrench: [命令行](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems)中的`--fix`选项可以自动修复此规则报告的一些问题。

您可以从以下选项中选择 HTML 属性的引号：

- 双引号：`<div class="foo">`
- 单引号：`<div class='foo'>`
- 没有引号：`<div class=foo>`

此规则要求 HTML 属性中的引号样式。

## :book: 规则细节

如果属性的引号与配置中不同，则此规则会提示错误。

<eslint-code-block fix :rules="{'san/html-quotes': ['error']}">

```html
<template>
  <!-- ✓ GOOD -->
  <img src="./logo.png">

  <!-- ✗ BAD -->
  <img src='./logo.png'>
  <img src=./logo.png>
</template>
```

</eslint-code-block>

## :wrench: 配置

默认设置为 `double`（双引号）。

```json
{
  "san/html-quotes": [ "error", "double" | "single", { "avoidEscape": false } ]
}
```

字符串选项：

- `"double"` (默认) ...需要双引号。
- `"single"` ... 需要单引号。

对象选项：

- `avoidEscape` ...如果为`true`，则允许字符串使用单引号或双引号，只要字符串里包含必须以其他方式转义的引号。

### `"single"`

<eslint-code-block fix :rules="{'san/html-quotes': ['error', 'single']}">

```html
<template>
  <!-- ✓ GOOD -->
  <img src='./logo.png'>

  <!-- ✗ BAD -->
  <img src="./logo.png">
  <img src=./logo.png>
</template>
```

</eslint-code-block>

### `"double", { "avoidEscape": true }`

<eslint-code-block fix :rules="{'san/html-quotes': ['error', 'double', { avoidEscape: true }]}">

```html
<template>
  <!-- ✓ GOOD -->
  <img title='a string containing "double" quotes'>

  <!-- ✗ BAD -->
  <img title='foo'>
  <img title=bar>
</template>
```

</eslint-code-block>

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/html-quotes.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/html-quotes.test.js)
