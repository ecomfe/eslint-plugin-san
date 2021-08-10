---
pageClass: rule-details
sidebarDepth: 0
title: san/valid-components-name
description: disallow expression in the template in template literals
---
# san/valid-components-name
> disallow expression in the template in template literals

- :gear: This rule is included in `"plugin:san/recommended"`.

## :book: Rule Details

disallow expression in the template in template literals

<eslint-code-block :rules="{'san/valid-components-name': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <a-b a="{{true}}" on-click="fire('myEvent')" />

  <!-- ✗ BAD -->
  <aB a on-click="fire('my-event')" />
</template>
```

</eslint-code-block>

## :wrench: Options
nothing

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/master/lib/rules/valid-components-name.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/blob/master/tests/lib/rules/valid-components-name.js)
