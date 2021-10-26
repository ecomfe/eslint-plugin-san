---
pageClass: rule-details
sidebarDepth: 0
title: san/valid-components-name
description: disallow expression in the template in template literals
---
# san/valid-components-name
- :gear: 此规则包含于 `"plugin:san/essential"`.

## :book: 规则细节
> 组件名称必须是短横线命名，不允许驼峰或大驼峰命名。

<eslint-code-block :rules="{'san/valid-components-name': ['error']}">

```html
<template>
  <!-- ✓ GOOD -->
  <a-b a="{{true}}" on-click="fire('myEvent')" />

  <!-- ✗ BAD -->
  <aB a on-click="fire('my-event')" />
</template>
```

</eslint-code-block>

## :wrench: 配置
暂无。

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/valid-components-name.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/valid-components-name.test.js)
