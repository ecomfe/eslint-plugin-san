---
pageClass: rule-details
sidebarDepth: 0
title: san/valid-template-root
description: enforce valid template root
---
# san/valid-template-root
> enforce valid template root

- :gear: This rule is included in all of `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.

This rule checks whether every template root is valid.

## :book: Rule Details

This rule reports the template root in the following cases:

<eslint-code-block :rules="{'san/valid-template-root': ['error']}">

```vue
<!-- There is no root element -->
<template></template>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/master/lib/rules/valid-template-root.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/blob/master/tests/lib/rules/valid-template-root.js)
