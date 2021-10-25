---
pageClass: rule-details
sidebarDepth: 0
title: san/initdata-in-component
description: enforce component's data property to be a function
---
# san/initdata-in-component
> 强制组件的data属性是一个函数

- :gear: 此规则包含于 `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.
- :wrench: [命令行](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems)中的`--fix`选项可以自动修复此规则报告的一些问题。

在组件上使用 data 属性时，值必须是一个返回对象的函数。

## :book: 规则细节

<eslint-code-block fix :rules="{'san/initdata-in-component': ['error']}">

```vue
<script>
/* ✓ GOOD */
export default class SomeComp extends san.Component {
  initData () {
    return {
      foo: 'bar'
    }
  }
}
</script>
```

</eslint-code-block>

<eslint-code-block fix :rules="{'san/initdata-in-component': ['error']}">

```vue
<script>
/* ✗ BAD */
export default {
  initData: {
    foo: 'bar'
  }
}
</script>
```

</eslint-code-block>

## :wrench: 配置

暂无。

## :books: 深入阅读

- [数据操作](https://baidu.github.io/san/tutorial/data-method/)

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/initdata-in-component.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/initdata-in-component.test.js)
