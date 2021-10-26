---
pageClass: rule-details
sidebarDepth: 0
title: san/max-attributes-per-line
description: enforce the maximum number of attributes per line
---
# san/max-attributes-per-line
> 限制每行的最大属性数量

- :gear: 此规则包含于 `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.
- :wrench: [命令行](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems)中的`--fix`选项可以自动修复此规则报告的一些问题。

限制每行最大的属性数量以提高可读性。

## :book: 规则细节

此规则目的是限制模板中每行的多个属性。它检查模板中的所有元素并验证每行的属性数是否不超过定义的最大值。当两个属性之间有换行符时，一个属性被认为是在一个新行中。

单行情况下可接受的属性数量是可配置的（默认 1），以及多行情况下每行可接受的属性数量（默认 1）。

<eslint-code-block fix :rules="{'san/max-attributes-per-line': ['error']}">

```html
<template>
  <!-- ✓ GOOD -->
  <MyComponent lorem="1"/>
  <MyComponent
    lorem="1"
    ipsum="2"
  />
  <MyComponent
    lorem="1"
    ipsum="2"
    dolor="3"
  />

  <!-- ✗ BAD -->
  <MyComponent lorem="1" ipsum="2"/>
  <MyComponent
    lorem="1" ipsum="2"
  />
  <MyComponent
    lorem="1" ipsum="2"
    dolor="3"
  />
</template>
```

</eslint-code-block>

## :wrench: 配置

```json
{
  "san/max-attributes-per-line": ["error", {
    "singleline": 1,
    "multiline": {
      "max": 1,
      "allowFirstLine": false
    }
  }]
}
```

- singleline (number) ... 当标签处于一行中时，每行的最大属性数。 默认值为 1。

- multiline.max (number) ... 当标签处于多行中时，每行的最大属性数。 默认值为 1。如果未配置allowFirstLine 属性，应该是 { multiline: 1 } 而不是 { multiline: { max: 1 }} 。

- multiline.allowFirstLine (boolean) ... 如果为 true，则允许属性与标签位于同一行。 默认为`false`。

### `"singleline": 3`

<eslint-code-block fix :rules="{'san/max-attributes-per-line': ['error', {singleline: 3}]}">

```html
<template>
  <!-- ✓ GOOD -->
  <MyComponent lorem="1" ipsum="2" dolor="3" />

  <!-- ✗ BAD -->
  <MyComponent lorem="1" ipsum="2" dolor="3" sit="4" />
</template>
```

</eslint-code-block>

### `"multiline": 2`

<eslint-code-block fix :rules="{'san/max-attributes-per-line': ['error', {multiline: 2}]}">

```html
<template>
  <!-- ✓ GOOD -->
  <MyComponent
    lorem="1" ipsum="2"
    dolor="3"
  />

  <!-- ✗ BAD -->
  <MyComponent
    lorem="1" ipsum="2" dolor="3"
    sit="4"
  />
</template>
```

</eslint-code-block>

### `"multiline": 1, "allowFirstLine": true`

<eslint-code-block fix :rules="{'san/max-attributes-per-line': ['error', {multiline: { allowFirstLine: true }}]}">

```html
<template>
  <!-- ✓ GOOD -->
  <MyComponent lorem="1"
               ipsum="2"
               dolor="3"
  />
</template>
```

</eslint-code-block>

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/max-attributes-per-line.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/max-attributes-per-line.test.js)
