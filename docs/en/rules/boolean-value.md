---
pageClass: rule-details
sidebarDepth: 0
title: san/boolean-value
description: Enforce boolean attributes notation in template
---
# san/boolean-value
> Enforce boolean attributes notation in template

- :gear: This rule is included in `"plugin:san/strongly-recommended"`.
- :wrench: The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

## :book: Rule Details

Enforce boolean attributes notation in template


## :wrench: Options

```json
{
  "san/attribute-hyphenation": ["warn", "always" | "never", {
    "always" | "never": []
  }]
}
```
This rule takes two arguments. If the first argument is `"always"` then it warns whenever an attribute is missing its value. If `"never"` then it warns if an attribute has a true value. The default value of this option is `"never"`.

The second argument is optional: if provided, it must be an object with a `"never"` property (if the first argument is `"always"`), or an `"always"` property (if the first argument is `"never"`). This property’s value must be an array of strings representing prop names.


### `["warn", "never"]` (default)

<eslint-code-block :rules="{'san/boolean-value': ['warn']}">

```html
<template>
  <!-- ✓ GOOD -->
  <x a on-click="fire('my-event')" />

  <!-- ✗ BAD -->
  <x a="{{true}}" on-click="fire('myEvent')" />
</template>
```

</eslint-code-block>

### `["warn", "never", {"always": ["c"]}]` 

<eslint-code-block :rules="{'san/boolean-value': ['warn', 'never', {'always': ['c']}]}">

```html
<template>
  <!-- ✓ GOOD -->
  <x a c="{{false}}" on-click="fire('my-event')" />
  <x a c="{{true}}" on-click="fire('my-event')" />
  <x a="{{false}}" c="{{true}}" on-click="fire('my-event')" />

  <!-- ✗ BAD -->
  <x a="{{true}}" c="{{true}}" on-click="fire('myEvent')" />
  <x a="{{true}}" c="{{false}}" on-click="fire('myEvent')" />
</template>
```

</eslint-code-block>

### `["warn", "always"]`

<eslint-code-block :rules="{'san/boolean-value': ['warn', 'always']}">

```html
<template>
  <!-- ✓ GOOD -->
  <x a="{{true}}" on-click="fire('myEvent')" />

  <!-- ✗ BAD -->
  <x a on-click="fire('my-event')" />
</template>
```

</eslint-code-block>

### `["warn", "always", {"never": ["c"]}]`

<eslint-code-block :rules="{'san/boolean-value': ['warn', 'always', {'never': ['c']}]}">

```html
<template>
  <!-- ✓ GOOD -->
  <x a="{{true}}" c on-click="fire('myEvent')" />

  <!-- ✗ BAD -->
  <x a="{{true}}" c="{{true}}" on-click="fire('myEvent')" />
</template>
```

</eslint-code-block>

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/boolean-value.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/boolean-value.test.js)
