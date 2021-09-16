---
pageClass: rule-details
sidebarDepth: 0
title: san/data-name-casing
description: data names always use "camel-case"
---
# san/data-name-casing
> enforce data names always use "camel-case"

- :gear: This rule is included in all of `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.

## :book: Rule Details

`computed`、`dataTypes`、`initData` properties name must be camel-case , it will not work when the property name is snakeCase、kebabCase or PascalCase.

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

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/master/lib/rules/data-name-casing.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/blob/master/tests/lib/rules/data-name-casing.js)

