---
pageClass: rule-details
sidebarDepth: 0
title: san/no-template-shadow
description: disallow variable declarations from shadowing variables declared in the outer scope
---
# san/no-template-shadow
> 禁止声明遮盖外部作用域变量的变量。

- :gear: 此规则包含于 `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.

`no-template-shadow` 会指出 s-for 指令或 scope 属性中遮盖了父作用域中的变量。

## :book: 规则细节

该规则目的是避免 s-for 指令或scope 属性中声明遮盖了父作用域中的变量。

<eslint-code-block :rules="{'san/no-template-shadow': ['error']}">

```html
<template>
  <!-- ✓ GOOD -->
  <div s-for="i in 5"></div>
  <div s-for="j in 5"></div>

  <!-- ✗ BAD -->
  <div>
    <div s-for="k in 5">
      <div s-for="k in 10"></div>
    </div>
  </div>
  <div s-for="l in 5"></div>
</template>

<script>
  export default {
    initData () {
      return {
        l: false
      }
    }
  }
</script>
```

</eslint-code-block>

## :wrench: 配置

暂无。

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/no-template-shadow.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/no-template-shadow.test.js)
