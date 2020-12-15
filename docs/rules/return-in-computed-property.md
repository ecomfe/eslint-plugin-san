---
pageClass: rule-details
sidebarDepth: 0
title: san/return-in-computed-property
description: enforce that a return statement is present in computed property
---
# san/return-in-computed-property
> enforce that a return statement is present in computed property

- :gear: This rule is included in all of `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.

## :book: Rule Details

This rule enforces that a `return` statement is present in `computed` properties.

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

## :wrench: Options

```json
{
  "san/return-in-computed-property": ["error", {
    "treatUndefinedAsUnspecified": true
  }]
}
```

This rule has an object option:
- `"treatUndefinedAsUnspecified"`: `true` (default) disallows implicitly returning undefined with a `return` statement.

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

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/master/lib/rules/return-in-computed-property.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/blob/master/tests/lib/rules/return-in-computed-property.js)
