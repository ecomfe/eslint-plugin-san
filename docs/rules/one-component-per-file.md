---
pageClass: rule-details
sidebarDepth: 0
title: san/one-component-per-file
description: enforce that each component should be in its own file
---
# san/one-component-per-file
> enforce that each component should be in its own file

- :gear: This rule is included in all of `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.

## :book: Rule Details

This rule checks if there is only one component per file.

<eslint-code-block filename="a.js" language="javascript" :rules="{'san/one-component-per-file': ['error']}">

```js
/* ✗ BAD */

export class UIAlert extends san.Component {
  // ...
}

export class UIAlert extends san.Component {
  // ...
}
```

</eslint-code-block>

<eslint-code-block :rules="{'san/one-component-per-file': ['error']}">

```vue
<script>
/* ✓ GOOD */
export default {
  name: 'ui-alert'
}
</script>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/master/lib/rules/one-component-per-file.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/blob/master/tests/lib/rules/one-component-per-file.js)
