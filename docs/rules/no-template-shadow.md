---
pageClass: rule-details
sidebarDepth: 0
title: san/no-template-shadow
description: disallow variable declarations from shadowing variables declared in the outer scope
---
# san/no-template-shadow
> disallow variable declarations from shadowing variables declared in the outer scope

- :gear: This rule is included in all of `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.

`no-template-shadow` should report variable definitions of s-for directives or scope attributes if those shadows the variables in parent scopes.

## :book: Rule Details

This rule aims to eliminate shadowed variable declarations of s-for directives or scope attributes.

<eslint-code-block :rules="{'san/no-template-shadow': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div s-for="i in 5"></div>
  <div s-for="j in 5"></div>

  <!-- ✗ BAD -->
  <div>
    <div s-for="k in 5">
      <div s-for="k in 10"></div>
    </div>
  </div>
  <div s-for="l in 5"></div>
</template>

<script>
  export default {
    initData () {
      return {
        l: false
      }
    }
  }
</script>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/master/lib/rules/no-template-shadow.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/blob/master/tests/lib/rules/no-template-shadow.js)
