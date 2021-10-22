---
pageClass: rule-details
sidebarDepth: 0
title: san/one-component-per-file
description: enforce that each component should be in its own file
---
# san/one-component-per-file
> 要求每个文件中只有一个组件

- :gear: 此规则包含于 `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.

## :book: 规则细节

此规则会检查每个文件是否只有一个组件。

<eslint-code-block filename="a.js" language="javascript" :rules="{'san/one-component-per-file': ['error']}">

```js
/* ✗ BAD */

export class UIAlert extends san.Component {
  // ...
}

export class UIAlert extends san.Component {
  // ...
}
```

</eslint-code-block>

<eslint-code-block :rules="{'san/one-component-per-file': ['error']}">

```vue
<script>
/* ✓ GOOD */
export default {
  name: 'ui-alert'
}
</script>
```

</eslint-code-block>

## :wrench: 配置

暂无。

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/one-component-per-file.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/one-component-per-file.test.js)
