---
pageClass: rule-details
sidebarDepth: 0
title: san/valid-s-else
description: enforce valid `s-else` directives
---
# san/valid-s-else
> 禁止无效的 `s-else` 指令

- :gear: 此规则包含于 `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.

此规则检查每个 `s-else` 指令是否有效。

## :book: 规则细节

此规则在以下情况下会提示 `s-else` 指令出现错误：

- 该指令具有该属性值。 例如。 `<div s-if="foo"></div><div s-else="bar"></div>`

- 该指令位于前一个元素没有 `s-if`/`s-else-if` 指令的元素上。 例如。 `<div s-else></div>`

- 该指令位于具有 `s-if`/`s-else-if` 指令的元素上。 例如。 `<div s-if="foo" s-else></div>`

<eslint-code-block :rules="{'san/valid-s-else': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div s-if="foo"/>
  <div s-else/>

  <!-- ✗ BAD -->
  <div s-else="foo"/>
  <div s-if="foo" s-else></div>
</template>
```

</eslint-code-block>

## :wrench: 配置

暂无。

## :couple: 相关规则

- [san/valid-s-if]
- [san/valid-s-else-if]
- [san/no-parsing-error]

[san/valid-s-if]: ./valid-s-if.md
[san/valid-s-else-if]: ./valid-s-else-if.md
[san/no-parsing-error]: ./no-parsing-error.md

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/valid-s-else.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/valid-s-else.test.js)
