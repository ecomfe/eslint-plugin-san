---
pageClass: rule-details
sidebarDepth: 0
title: san/valid-s-for
description: enforce valid `s-for` directives
---
# san/valid-s-for
> 禁止无效的 `s-for` 指令

- :gear: 此规则包含于 `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.

此规则检查每个 `s-for` 指令是否有效。

## :book: 规则细节

- 此规则在以下情况下提示 `s-for` 指令出现错误：

  - 该指令没有该属性值。 例如。 `<div s-for></div>`


<eslint-code-block :rules="{'san/valid-s-for': ['error']}">

```html
<template>
  <!-- ✓ GOOD -->
  <div s-for="todo in todos"/>

  <!-- ✗ BAD -->
  <div s-for/>
</template>
```

</eslint-code-block>

::: warning 注意
此规则不检查指令中的语法错误。 [san/no-parsing-error] 规则会检查它。
以下情况属于语法错误：

- `s-for`不是`alias in expr`语法形式， 例如。 `<div s-for="foo"></div>`
- 其中的`alias`不是 LHS。 例如。 `<div s-for="foo() in list"></div>`

:::

## :wrench: 配置

暂无。

## :couple: 相关规则

- [san/no-parsing-error]

[san/no-parsing-error]: ./no-parsing-error.md

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/valid-s-for.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/valid-s-for.test.js)
