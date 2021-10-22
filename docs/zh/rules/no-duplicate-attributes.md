---
pageClass: rule-details
sidebarDepth: 0
title: san/no-duplicate-attributes
description: disallow duplication of attributes
---
# san/no-duplicate-attributes
> 不允许重复的属性

- :gear: 此规则包含于 `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.

当存在重复参数时，只有最后一个是有效的。
但也可能是错误。

## :book: 规则细节

此规则提示出现的重复属性。

<eslint-code-block :rules="{'san/no-duplicate-attributes': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <MyComponent foo="abc" />
  <MyComponent class="abc" :class="def" />

  <!-- ✗ BAD -->
  <MyComponent foo="abc" foo="def" />
  <MyComponent class="abc" class="def" />
</template>
```

</eslint-code-block>

## :wrench: 配置
暂无。

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/no-duplicate-attributes.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/blob/master/__tests__/lib/rules/no-duplicate-attributes.test.js)

