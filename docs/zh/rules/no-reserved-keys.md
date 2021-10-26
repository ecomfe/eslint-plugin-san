---
pageClass: rule-details
sidebarDepth: 0
title: san/no-reserved-keys
description: disallow overwriting reserved keys
---
# san/no-reserved-keys
> 禁止覆盖保留字

- :gear: 此规则包含于 `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.

## :book: 规则细节

此规则禁止使用 [保留字](https://github.com/ecomfe/eslint-plugin-san/blob/master/lib/utils/san-reserved.json) 以避免冲突和意外行为。

<eslint-code-block :rules="{'san/no-reserved-keys': ['error']}">

```html
<script>
/* ✗ BAD */
export default {
  dataTypes: {
    el: DataTypes.string
  },

  computed: {
    fire() {
      return 3;
    }
  },
  
  nextTick () {}
}
</script>
```

</eslint-code-block>

## :wrench: 配置

暂无。

## :books: 深入阅读

- [保留字列表](https://github.com/ecomfe/eslint-plugin-san/blob/master/lib/utils/san-reserved.json)

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/no-reserved-keys.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/no-reserved-keys.test.js)
