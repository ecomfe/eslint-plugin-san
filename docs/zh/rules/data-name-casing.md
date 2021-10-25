---
pageClass: rule-details
sidebarDepth: 0
title: san/data-name-casing
description: data names always use "camel-case"
---
# san/data-name-casing
> 要求数据名使用驼峰命名法

- :gear: 此规则包含于 `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` 和`"plugin:san/recommended"`.

## :book: 规则细节

`computed`、`dataTypes`、`initData` 属性名必须使用驼峰命名法，不可以使用下划线命名，短横线命名和大驼峰命名法。

<eslint-code-block :rules="{'san/data-name-casing': ['error']}">

```vue
<script>
export default {
  /* ✓ GOOD */
  dataTypes: {
    datatypeText: DataTypes.string
  },
  computed: {
    aText() {
      return this.data.get('text') + 'a';
    }
  },
  initData() {
    return {
      text: 'text'
    }
  },
  
  /* ✗ BAD */
  dataTypes: {
    'datatype-text': DataTypes.string
  },
  computed: {
    /* PascalCase */
    'AText'() {
      return this.data.get('text_bad') + 'a';
    },
    /* snakeCase */
    'b_text'() {
      return this.data.get('text_bad') + 'b';
    },
    /* kebabCase */
    'c-text'() {
      return this.data.get('text_bad') + 'c';
    }
  },
  initData() {
    return {
      text_bad: 'text'
    }
  },
}
</script>
```

</eslint-code-block>

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/data-name-casing.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/data-name-casing.test.js)

