---
pageClass: rule-details
sidebarDepth: 0
title: san/no-unused-vars
description: disallow unused variable definitions of s-for directives or scope attributes
---
# san/no-unused-vars
> 禁止 s-for 指令或 scope 属性中定义未使用的变量

- :gear: 此规则包含于 `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.

## :book: 规则细节

此规则会指出 s-for 指令或 scope 属性中定义的未使用的变量。

<eslint-code-block :rules="{'san/no-unused-vars': ['error']}">

```html
<template>
  <!-- ✓ GOOD -->
  <div s-for="i in 5">
    <div>{{ i }}</li>
  </div>

  <div s-for="i in 5">
    <div class="{{i}}"></li>
  </div>

  <!-- ✗ BAD -->
  <div s-for="i in 5">
    <div>item</div>
  </div>

  <div s-for="i in 5">
    <div class="i"></li>
  </div>
</template>
```

</eslint-code-block>

## :wrench: 配置

```js
{
    "san/no-unused-vars": ["error", {
        "ignorePattern": "^_"
    }]
}
```

- `ignorePattern` ...当你的 s-for 指令或范围属性的定义与您的 ignorePattern 正则表达式匹配时禁用规则。 默认`null`，不会忽略任何内容

## :rocket: Suggestion

- 当 ignorePattern 设置为 `^_` 时，我们可以提供一个建议，为您的变量添加一个前缀 `_` 那样就不会再出现 eslint 错误。

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/no-unused-vars.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/blob/main/__tests__/lib/rules/no-unused-vars.test.js)
