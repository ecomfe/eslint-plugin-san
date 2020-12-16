---
pageClass: rule-details
sidebarDepth: 0
title: san/no-reserved-keys
description: disallow overwriting reserved keys
---
# san/no-reserved-keys
> disallow overwriting reserved keys

- :gear: This rule is included in all of `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.

## :book: Rule Details

This rule prevents to use [reserved names](https://github.com/ecomfe/eslint-plugin-san/blob/master/lib/utils/san-reserved.json) to avoid conflicts and unexpected behavior.

<eslint-code-block :rules="{'san/no-reserved-keys': ['error']}">

```vue
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

## :wrench: Options

Nothing.

## :books: Further Reading

- [List of reserved keys](https://github.com/ecomfe/eslint-plugin-san/blob/master/lib/utils/san-reserved.json)

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/master/lib/rules/no-reserved-keys.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/blob/master/tests/lib/rules/no-reserved-keys.js)
