---
pageClass: rule-details
sidebarDepth: 0
title: san/no-async-in-computed-properties
description: disallow asynchronous actions in computed properties
---
# san/no-async-in-computed-properties
> computed 属性中不允许异步行为。

- :gear: 此规则包含于 `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.

计算属性应该是同步的。 它们内部的异步操作可能无法按预期工作，并可能导致意外行为，应该避免使用它们。

## :book: 规则细节

此规则目的是防止在计算属性中调用异步方法。

<eslint-code-block :rules="{'san/no-async-in-computed-properties': ['error']}">

```vue
<script>
export default {
  computed: {
    /* ✓ GOOD */
    foo () {
      var bar = 0
      try {
        bar = bar / this.data.get('a')
      } catch (e) {
        return 0
      } finally {
        return bar
      }
    },

    /* ✗ BAD */
    pro () {
      return Promise.all([new Promise((resolve, reject) => {})])
    },
    foo1: async function () {
      return await someFunc()
    },
    bar () {
      return fetch(url).then(response => {})
    },
    tim () {
      setTimeout(() => { }, 0)
    },
    inter () {
      setInterval(() => { }, 0)
    },
    anim () {
      requestAnimationFrame(() => {})
    }
  }
}
</script>
```

</eslint-code-block>

## :wrench: 配置

暂无。

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/no-async-in-computed-properties.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/no-async-in-computed-properties.test.js)
