---
pageClass: rule-details
sidebarDepth: 0
title: san/valid-template-root
description: enforce valid template root
---
# san/valid-template-root
> 禁止无效的 template 根节点

- :gear: 此规则包含于 `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.

此规则检查每个 template 根节点是否有效。

## :book: 规则细节

此规则在以下情况下提示 template 根节点错误：

<eslint-code-block :rules="{'san/valid-template-root': ['error']}">

```vue
<!-- There is no root element -->
<template></template>
```

</eslint-code-block>

## :wrench: 配置

暂无。

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/valid-template-root.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/valid-template-root.test.js)
