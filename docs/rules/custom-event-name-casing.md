---
pageClass: rule-details
sidebarDepth: 0
title: san/custom-event-name-casing
description: enforce custom event names always use "kebab-case"
---
# san/custom-event-name-casing
> enforce custom event names always use "kebab-case"

- :gear: This rule is included in all of `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.

## :book: Rule Details

This rule enforces using kebab-case custom event names.

See [Guide - Custom Events] for more details.

<eslint-code-block :rules="{'san/custom-event-name-casing': ['error']}">

```html
<template>
  <!-- ✓ GOOD -->
  <button on-click="fire('my-event')" />

  <!-- ✗ BAD -->
  <button on-click="fire('myEvent')" />
</template>
<script>
export default {
  onClick () {
    /* ✓ GOOD */
    this.fire('my-event')
    this.fire('my-event', params1, params2)

    /* ✗ BAD */
    this.fire('myEvent')
  }
}
</script>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :books: Further Reading

- [Guide - Custom Events]

[Guide - Custom Events]: https://baidu.github.io/san/tutorial/event/#自定义事件

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/custom-event-name-casing.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/custom-event-name-casing.test.js)
