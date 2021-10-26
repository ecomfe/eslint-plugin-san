---
pageClass: rule-details
sidebarDepth: 0
title: san/valid-s-show
description: enforce valid `s-show` directives
---
# san/valid-s-show
> 禁止无效的 `s-show` 指令

- :gear: 此规则包含于 `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.

此规则检查每个 `s-show` 指令是否有效。

## :book: 规则细节

此规则在以下情况下提示 `s-show` 指令出现错误：

- 该指令没有该属性值。 例如。 `<div s-show></div>`

<eslint-code-block :rules="{'san/valid-s-show': ['error']}">

```html
<template>
  <!-- ✓ GOOD -->
  <div s-show="foo"/>

  <!-- ✗ BAD -->
  <div s-show/>
</template>
```

</eslint-code-block>

::: warning 注意
此规则不检查指令中的语法错误，因为它由 [san/no-parsing-error] 规则检查。
:::

## :wrench: 配置

暂无。

## :couple: 相关规则

- [san/no-parsing-error]

[san/no-parsing-error]: ./no-parsing-error.md

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/valid-s-show.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/blob/main/__tests__/lib/rules/valid-s-show.test.js)
