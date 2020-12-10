---
pageClass: rule-details
sidebarDepth: 0
title: san/no-multiple-template-root
description: disallow adding multiple root nodes to the template
---
# san/no-multiple-template-root
> disallow adding multiple root nodes to the template

- :gear: This rule is included in all of `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.

## :book: Rule Details

This rule checks whether template contains single root element valid for San.

<eslint-code-block :rules="{'san/no-multiple-template-root': ['error']}">

```vue
<!-- The root is text -->
<template>Lorem ipsum</template>
```

</eslint-code-block>

<eslint-code-block :rules="{'san/no-multiple-template-root': ['error']}">

```vue
<!-- There are multiple root elements -->
<template>
  <div>hello</div>
  <div>hello</div>
</template>
```

</eslint-code-block>

<eslint-code-block :rules="{'san/no-multiple-template-root': ['error']}">

```vue
<!-- The root element has `s-for` directives -->
<template>
  <div s-for="item in items"/>
</template>
```

</eslint-code-block>

<eslint-code-block :rules="{'san/no-multiple-template-root': ['error']}">

```vue
<!-- The root element is `<template>` or `<slot>` -->
<template>
  <slot />
</template>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/master/lib/rules/no-multiple-template-root.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/blob/master/tests/lib/rules/no-multiple-template-root.js)
