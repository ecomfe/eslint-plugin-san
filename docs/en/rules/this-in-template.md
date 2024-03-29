---
pageClass: rule-details
sidebarDepth: 0
title: san/this-in-template
description: disallow usage of `this` in template
---
# san/this-in-template
> disallow usage of `this` in template

- :gear: This rule is included in `"plugin:san/recommended"`.

## :book: Rule Details

This rule aims at preventing usage of `this` in San templates.

<eslint-code-block :rules="{'san/this-in-template': ['error']}">

```html
<template>
  <!-- ✓ GOOD -->
  <a href="{{url}}">
    {{ text }}
  </a>
  
  <!-- ✗ BAD -->
  <a href="{{this.data.get('url')}}">
    {{ this.data.get('text') }}
  </a>
</template>
```

</eslint-code-block>

## :wrench: Options

```json
{
  "san/this-in-template": ["error", "always" | "never"]
}
```
- `"always"` ... Always use `this` while accessing properties from San.
- `"never"` (default) ... Never use `this` keyword in expressions.

### `"always"`

<eslint-code-block :rules="{'san/this-in-template': ['error', 'always']}">

```html
<template>
  <!-- ✓ GOOD -->
  <a href="{{this.data.get('url')}}">
    {{ this.data.get('text') }}
  </a>
  
  <!-- ✗ BAD -->
  <a href="{{url}}">
    {{ text }}
  </a>
</template>
```

</eslint-code-block>

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/this-in-template.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/this-in-template.test.js)
