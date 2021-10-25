---
pageClass: rule-details
sidebarDepth: 0
title: san/valid-components-name
description: disallow expression in the template in template literals
---
# san/valid-components-name
- :gear: This rule is included in `"plugin:san/essential"`.

## :book: Rule Details
> The component name must be kebab-case, it will not work when the component name is camelCase or PascalCase.

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

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/valid-components-name.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/valid-components-name.test.js)
