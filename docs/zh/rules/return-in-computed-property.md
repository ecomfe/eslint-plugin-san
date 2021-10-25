---
pageClass: rule-details
sidebarDepth: 0
title: san/return-in-computed-property
description: enforce that a return statement is present in computed property
---
# san/return-in-computed-property
> 要求计算属性中存在 return 语句

- :gear: 此规则包含于 `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.

## :book: 规则细节

此规则会检查是否在"计算"属性中存在`return`语句。

<eslint-code-block :rules="{'san/return-in-computed-property': ['error']}">

```vue
<script>
export default {
  computed: {
    /* ✓ GOOD */
    foo() {
      if (this.data.get('bar')) {
        return this.data.get('baz')
      } else {
        return this.data.get('baf')
      }
    },
    bar: function () {
      return false
    },
    /* ✗ BAD */
    baz () {
      const baf = this.data.get('baf')
      if (baf) {
        return baf
      }
    },
    baf: function () {}
  }
}
</script>
```

</eslint-code-block>

## :wrench: 配置

```json
{
  "san/return-in-computed-property": ["error", {
    "treatUndefinedAsUnspecified": true
  }]
}
```

此规则有一个 object 选项：

- `"treatUndefinedAsUnspecified"`：`true`（默认）不允许使用 `return` 语句隐式返回 undefined。

### `treatUndefinedAsUnspecified: false`

<eslint-code-block :rules="{'san/return-in-computed-property': ['error', { treatUndefinedAsUnspecified: false }]}">

```vue
<script>
export default {
  computed: {
    /* ✓ GOOD */
    foo () {
      if (this.data.get('bar')) {
        return undefined
      } else {
        return
      }
    },
    bar: function () {
      return
    },
    /* ✗ BAD */
    baz () {
      const baf = this.data.get('baf')
      if (baf) {
        return baf
      }
    },
    baf: function () {}
  }
}
</script>
```

</eslint-code-block>

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/return-in-computed-property.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/return-in-computed-property.test.js)
