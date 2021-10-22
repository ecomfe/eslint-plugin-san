---
pageClass: rule-details
sidebarDepth: 0
title: san/html-self-closing
description: enforce self-closing style
---
# san/html-self-closing
> 要求自闭合样式

- :gear: 此规则包含于 `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`。
- :wrench: [命令行](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems)中的`--fix`选项可以自动修复此规则报告的一些问题。

## :book: 规则细节

此规则目的是要求将自闭合标签应用为配置的样式。

在 San.js 模板中，我们可以为没有内容的元素使用两种样式。

1. `<YourComponent></YourComponent>`

2. `<YourComponent/>`（自闭合）

自闭合简单且更短，但 HTML 规范不支持它。

<eslint-code-block fix :rules="{'san/html-self-closing': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div/>
  <img>
  <MyComponent/>
  <svg><path d=""/></svg>

  <!-- ✗ BAD -->
  <div></div>
  <img/>
  <MyComponent></MyComponent>
  <svg><path d=""></path></svg>
</template>
```

</eslint-code-block>

## :wrench: 配置

```json
{
  "san/html-self-closing": ["error", {
    "html": {
      "void": "never",
      "normal": "always",
      "component": "always"
    },
    "svg": "always",
    "math": "always"
  }]
}
```

- `html.void`（默认`"nerver"`）... HTML 空元素的样式。

- `html.normal`（默认`"always"`）... HTML 除了空元素的样式。

- `html.component` ( 默认`"always"`) ... San.js 自定义组件的样式。

- `svg`(默认`"always"`) ....  SVG 元素的样式。

- `math`(默认`"always"`) .... MathML 元素的样式。

每个选项都可以设置为以下值之一：

* `"always"`...要求在没有内容的元素上自闭合。

*  ` "nerver"`... 禁止自闭合。

*   `"any" `... 不要强制执行自闭合。

### `html: {normal: "never", void: "always"}`

<eslint-code-block fix :rules="{'san/html-self-closing': ['error', {html: {normal: 'never', void: 'always'}}]}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div></div>
  <img/>
  <MyComponent/>
  <svg><path d=""/></svg>

  <!-- ✗ BAD -->
  <div/>
  <img>
  <MyComponent></MyComponent>
  <svg><path d=""></path></svg>
</template>
```

</eslint-code-block>

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/html-self-closing.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/html-self-closing.test.js)
