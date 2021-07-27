---
pageClass: rule-details
sidebarDepth: 0
title: san/order-in-components
description: enforce order of properties in components
---
# san/order-in-components
> enforce order of properties in components

- :gear: This rule is included in `"plugin:san/recommended"`.
- :wrench: The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

## :book: Rule Details

This rule makes sure you keep declared order of properties in components.

<eslint-code-block fix :rules="{'san/order-in-components': ['error']}">

```vue
<script>
/* ✓ GOOD */
export default {
  dataTypes: {
    name: DataTypes.string
  },

  initData () {
    return {
      msg: 'Welcome to Your San App'
    }
  }
}
</script>
```

</eslint-code-block>

<eslint-code-block fix :rules="{'san/order-in-components': ['error']}">

```vue
<script>
/* ✗ BAD */
export default {
  initData () {
    return {
      msg: 'Welcome to Your San App'
    }
  },

  dataTypes: {
    name: DataTypes.string
  }
}
</script>
```

</eslint-code-block>

## :wrench: Options

```json
{
  "san/order-in-components": ["error", {
    "order": [
      // 视图
      "template",
      "components",

      // 数据
      "dataTypes",
      "initData",
      "computed",
      "filters",

      // 消息
      "messages",

      // 生命周期
      "LIFECYCLE_HOOKS",

      // 其他
      "trimWhitespace"
    ]
  }]
}
```

- `order` (`(string | string[])[]`) ... The order of properties. Elements are the property names or one of the following groups:

  - `LIFECYCLE_HOOKS`: [San Lifecycle Events](https://baidu.github.io/san/tutorial/component/#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F), in the order they are called

  If an element is an array of strings, it means any of those can be placed there unordered. Default is above.

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/master/lib/rules/order-in-components.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/blob/master/tests/lib/rules/order-in-components.js)
