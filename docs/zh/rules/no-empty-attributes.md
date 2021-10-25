---
pageClass: rule-details
sidebarDepth: 0
title: san/no-empty-attributes
description: disallow empty of attributes
---
# san/no-empty-attributes
> disallow empty of attributes

- :gear: 此规则包含于 `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.

## :book: 规则细节

该规则要求class属性和style属性默认不能为空。

<eslint-code-block :rules="{'san/no-empty-attributes': ['error']}">

```html
<template>
  <!-- ✓ GOOD -->
  <div class="abc" />
  <div style="abc" />

  <!-- ✗ BAD -->
  <div class="" />
  <div style="" />
  <div class=" " />
  <div style=" " />
</template>
```

</eslint-code-block>

## :wrench: 配置
```js
{
    "san/no-empty-attributes": ["error", {
        groups: ['attr']
    }],
}
```

* `groups`：除了 class 和 style，还可以通过 group 添加其他不能为空的属性。

### `groups: ['attr']`

<eslint-code-block :rules="{'san/no-empty-attributes': ['error', { groups: ['attr'] }]}">

```html
<template>
  <!-- ✓ GOOD -->
  <div class="abc" />
  <div style="abc" />
  <div attr="abc" />

  <!-- ✗ BAD -->
  <div class="" />
  <div style="" />
  <div attr="" />
  <div attr=" " />
</template>
```

</eslint-code-block>

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/no-empty-attributes.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/blob/main/__tests__/lib/rules/no-empty-attributes.test.js)