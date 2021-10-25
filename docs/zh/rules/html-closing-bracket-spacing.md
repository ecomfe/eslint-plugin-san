---
pageClass: rule-details
sidebarDepth: 0
title: san/html-closing-bracket-spacing
description: require or disallow a space before tag's closing brackets
---
# san/html-closing-bracket-spacing
> 要求在标签的右括号之前有空格（或没有空格）

- :gear: 此规则包含于 `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.
- :wrench: [命令行](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems)中的`--fix`选项可以自动修复此规则报告的一些问题。

## :book: 规则细节

此规则目的是在标签的闭合括号 `>` 之前要求一致的空格样式。

<eslint-code-block fix :rules="{'san/html-closing-bracket-spacing': ['error']}">

```vue
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

## :wrench: 配置

```json
{
  "san/html-closing-bracket-spacing": ["error", {
    "startTag": "always" | "never",
    "endTag": "always" | "never",
    "selfClosingTag": "always" | "never"
  }]
}
```

- `startTag` (`"always" | "never"`) ... 设置开始标签的 `>`（例如 `<div>`）。 默认为`"never"`。
   - `"always"` ... 需要一个或多个空格。
   - `"never"` ... 不允许使用空格。
- `endTag` (`"always" | "never"`) ... 设置结束标签的 `>`（例如 `</div>`）。 默认为`"never"`。
   - `"always"` ... 需要一个或多个空格。
   - `"never"` ... 不允许使用空格。
- `selfClosingTag` (`"always" | "never"`) ... 设置自闭合标签的 `/>`（例如 `<div/>`）。 默认为`"always"`。
   - `"always"` ... 需要一个或多个空格。
   - `"never"` ... 不允许使用空格。

### `"startTag": "always", "endTag": "always", "selfClosingTag": "always"`

<eslint-code-block fix :rules="{'san/html-closing-bracket-spacing': ['error', {startTag: 'always', endTag: 'always', selfClosingTag: 'always' }]}">

```vue
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

## :couple: 相关规则

- [san/no-multi-spaces](./no-multi-spaces.md)
- [san/html-closing-bracket-newline](./html-closing-bracket-newline.md)

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/html-closing-bracket-spacing.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/html-closing-bracket-spacing.test.js)
