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

> Event names will never be used as variable or property names in JavaScript, so there’s no reason to use camelCase or PascalCase. Additionally, `s-on` event listeners inside DOM templates will be automatically transformed to lowercase (due to HTML’s case-insensitivity), so `s-on:myEvent` would become `s-on:myevent` – making `myEvent` impossible to listen to.
>
> For these reasons, we recommend you **always use kebab-case for event names**.

See [Guide - Custom Events] for more details.

<eslint-code-block :rules="{'san/custom-event-name-casing': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <button @click="$emit('my-event')" />

  <!-- ✗ BAD -->
  <button @click="$emit('myEvent')" />
</template>
<script>
export default {
  methods: {
    onClick () {
      /* ✓ GOOD */
      this.$emit('my-event')
      this.$emit('update:myProp', myProp)

      /* ✗ BAD */
      this.$emit('myEvent')
    }
  }
}
</script>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :books: Further Reading

- [Guide - Custom Events]

[Guide - Custom Events]: https://v3.vuejs.org/guide/component-custom-events.html
[Guide (for v2) - Custom Events]: https://vuejs.org/v2/guide/components-custom-events.html

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-san/blob/master/lib/rules/custom-event-name-casing.js)
- [Test source](https://github.com/vuejs/eslint-plugin-san/blob/master/tests/lib/rules/custom-event-name-casing.js)
