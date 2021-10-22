---
pageClass: rule-details
sidebarDepth: 0
title: san/no-dupe-keys
description: disallow duplication of field names
---
# san/no-dupe-keys
> 禁止字段名称重复

- :gear: 此规则包含于 `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.

此规则防止使用重复名称。

## :book: 规则细节

此规则目的是防止在 san 实例的`"this.data"`中出现重复的属性名称。

<eslint-code-block :rules="{'san/no-dupe-keys': ['error']}">

```vue
<script>
/* ✗ BAD */
export default {
  computed: {
    foo() {
      return this.data.get('a')
    }
  },

  initData() {
    return {
      foo: null
    }
  },

  foo () {}
}
</script>
```

</eslint-code-block>

## :wrench: 配置

暂无。

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/no-dupe-keys.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/no-dupe-keys.test.js)
