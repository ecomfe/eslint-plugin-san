---
pageClass: rule-details
sidebarDepth: 0
title: san/mustache-interpolation-spacing
description: enforce unified spacing in mustache interpolations
---
# san/mustache-interpolation-spacing
> 插值表达式统一空格

- :gear: 此规则包含于 `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.
- :wrench: [命令行](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems)中的`--fix`选项可以自动修复此规则报告的一些问题。

## :book: 规则细节

该规则目的是在插值表达式中要求统一空格。

<eslint-code-block fix :rules="{'san/mustache-interpolation-spacing': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div>{{ text }}</div>
  <div>{{   text   }}</div><!-- Use san/no-multi-spaces rule to disallow multiple spaces. -->

  <!-- ✗ BAD -->
  <div>{{text}}</div>
</template>
```

</eslint-code-block>

## :wrench: 配置

```json
{
  "san/mustache-interpolation-spacing": ["error", "always" | "never"]
}
```

- `"always"`（默认）... 表达式和大括号之间需要一个空格。
- `"never"`......表达式和大括号之间没有空格。

### `"never"`

<eslint-code-block fix :rules="{'san/mustache-interpolation-spacing': ['error', 'never']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div>{{text}}</div>

  <!-- ✗ BAD -->
  <div>{{   text   }}</div>
  <div>{{ text }}</div>
</template>
```

</eslint-code-block>

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/mustache-interpolation-spacing.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/mustache-interpolation-spacing.test.js)
