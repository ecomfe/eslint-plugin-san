---
pageClass: rule-details
sidebarDepth: 0
title: san/no-spaces-around-equal-signs-in-attribute
description: disallow spaces around equal signs in attribute
---
# san/no-spaces-around-equal-signs-in-attribute
> 禁止在属性中的等号周围有空格

- :gear: 此规则包含于 `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.
- :wrench: [命令行](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems)中的`--fix`选项可以自动修复此规则报告的一些问题。

## :book: 规则细节

此规则不允许属性中的等号周围有空格。

<eslint-code-block fix :rules="{'san/no-spaces-around-equal-signs-in-attribute': ['error']}">

```html
<template>
  <!-- ✗ BAD -->
  <div class = "item"></div>
  <!-- ✓ GOOD -->
  <div class="item"></div>
</template>
```

</eslint-code-block>

::: tip Info
HTML5 允许等号周围有空格。 但是无空格更容易阅读，并且可以更好地将实体组合在一起。
:::

## :wrench: 配置

```json
{
  "san/no-spaces-around-equal-signs-in-attribute": ["error"]
}
```

## :books: 深入阅读

* [HTML5 Style Guide - W3Schools *Spaces and Equal Signs*](https://www.w3schools.com/html/html5_syntax.asp)

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/no-spaces-around-equal-signs-in-attribute.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/no-spaces-around-equal-signs-in-attribute.test.js)
