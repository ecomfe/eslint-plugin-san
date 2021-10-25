---
pageClass: rule-details
sidebarDepth: 0
title: san/valid-s-else-if
description: enforce valid `s-else-if` directives
---
# san/valid-s-else-if
> 禁止无效的 `s-else-if` 指令

- :gear: 此规则包含于 `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.

此规则检查每个 `s-else-if` 指令是否有效。

## :book: 规则细节

此规则在以下情况下会提示 `s-else-if` 指令出现错误：

- 该指令没有该属性值。 例如。 `<div s-if="foo"></div><div s-else-if></div>`

- 该指令位于前一个元素没有 `s-if`/`s-else-if` 指令的元素上。 例如。 `<div s-else-if="bar"></div>`

- 该指令位于具有 `s-if`/`s-else` 指令的元素上。 例如。 `<div s-if="foo" s-else-if="bar"></div>`

<eslint-code-block :rules="{'san/valid-s-else-if': ['error']}">

```html
<template>
  <!-- ✓ GOOD -->
  <div s-if="foo"/>
  <div s-else-if="bar"/>

  <!-- ✗ BAD -->
  <div s-else-if/>
  <div s-if="foo" s-else-if="bar"/>
</template>
```

</eslint-code-block>

::: warning 注意
此规则不检查指令中的语法错误，因为它由 [san/no-parsing-error] 规则检查。
:::

## :wrench: 配置

暂无。

## :couple: 相关规则

- [san/valid-s-if]
- [san/valid-s-else]
- [san/no-parsing-error]

[san/valid-s-if]: ./valid-s-if.md
[san/valid-s-else]: ./valid-s-else.md
[san/no-parsing-error]: ./no-parsing-error.md

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/valid-s-else-if.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/valid-s-else-if.test.js)
