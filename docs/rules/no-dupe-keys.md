---
pageClass: rule-details
sidebarDepth: 0
title: san/no-dupe-keys
description: disallow duplication of field names
---
# san/no-dupe-keys
> disallow duplication of field names

- :gear: This rule is included in all of `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.

This rule prevents to use duplicated names.

## :book: Rule Details

This rule is aimed at preventing duplicated property names.

<eslint-code-block :rules="{'san/no-dupe-keys': ['error']}">

```vue
<script>
/* ✗ BAD */
export default {
  props: {
    foo: String
  },
  computed: {
    foo: {
      get () {}
    }
  },
  data: {
    foo: null
  },
  methods: {
    foo () {}
  }
}
</script>
```

</eslint-code-block>

## :wrench: Options

```json
{
  "san/no-dupe-keys": ["error", {
    "groups": []
  }]
}
```

- `"groups"` (`string[]`) Array of additional groups to search for duplicates. Default is empty.

### `"groups": ["firebase"]`

<eslint-code-block :rules="{'san/no-dupe-keys': ['error', {groups: ['firebase']}]}">

```vue
<script>
/* ✗ BAD */
export default {
  computed: {
    foo () {}
  },
  firebase: {
    foo () {}
  }
}
</script>
```

</eslint-code-block>

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-san/blob/master/lib/rules/no-dupe-keys.js)
- [Test source](https://github.com/vuejs/eslint-plugin-san/blob/master/tests/lib/rules/no-dupe-keys.js)
