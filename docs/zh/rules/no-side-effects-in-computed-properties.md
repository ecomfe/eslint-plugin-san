---
pageClass: rule-details
sidebarDepth: 0
title: san/no-side-effects-in-computed-properties
description: disallow side effects in computed properties
---
# san/no-side-effects-in-computed-properties
> 禁止计算属性中的副作用

- :gear: 此规则包含于 `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.

## :book: 规则细节

此规则目的是防止在计算属性中产生副作用。

在计算属性中引入副作用被认为是一种非常糟糕的做法。 它使代码不可预测且难以理解。

<eslint-code-block :rules="{'san/no-side-effects-in-computed-properties': ['error']}">

```vue
<script>
/* ✓ GOOD */
export default {
  computed: {
    fullName () {
      const firstName = this.data.get('firstName')
      const lastName = this.data.get('lastName')

      return `${this.firstName} ${this.lastName}`
    },
    reversedArray () {
      return this.data.get('array').slice(0).reverse() // .slice makes a copy of the array, instead of mutating the orginal
    }
  }
}
</script>
```

</eslint-code-block>

<eslint-code-block :rules="{'san/no-side-effects-in-computed-properties': ['error']}">

```vue
<script>
/* ✗ BAD */
export default {
  computed: {
    fullName () {
      this.data.set('firstName', 'lorem') // <- side effect
      return `${this.data.get('firstName')} ${this.data.get('lastName')}`
    },
    reversedArray () {
      return this.data.get('array').reverse() // <- side effect - orginal array is being mutated
    }
  }
}
</script>
```

</eslint-code-block>

## :wrench: 配置

暂无。

## :books: 深入阅读

- [计算属性](https://baidu.github.io/san/tutorial/component/#计算数据)

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/no-side-effects-in-computed-properties.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/no-side-effects-in-computed-properties.test.js)
