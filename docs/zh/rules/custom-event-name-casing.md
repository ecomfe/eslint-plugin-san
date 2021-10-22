---
pageClass: rule-details
sidebarDepth: 0
title: san/custom-event-name-casing
description: enforce custom event names always use "kebab-case"
---
# san/custom-event-name-casing
> 强制自定义事件名称始终使用短横线命名

- :gear: 此规则包含于 `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.

## :book: 规则细节

此规则要求使用短横线自定义事件名称。

查看 [自定义事件] 了解更多细节。

<eslint-code-block :rules="{'san/custom-event-name-casing': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <button on-click="fire('my-event')" />

  <!-- ✗ BAD -->
  <button on-click="fire('myEvent')" />
</template>
<script>
export default {
  onClick () {
    /* ✓ GOOD */
    this.fire('my-event')
    this.fire('my-event', params1, params2)

    /* ✗ BAD */
    this.fire('myEvent')
  }
}
</script>
```

</eslint-code-block>

## :wrench: 配置

暂无。

## :books: 深入阅读

- [自定义事件]

[自定义事件]: https://baidu.github.io/san/tutorial/event/#自定义事件

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/custom-event-name-casing.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/custom-event-name-casing.test.js)
