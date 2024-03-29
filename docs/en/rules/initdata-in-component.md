---
pageClass: rule-details
sidebarDepth: 0
title: san/initdata-in-component
description: enforce component's data property to be a function
---
# san/initdata-in-component
> enforce component's data property to be a function

- :gear: This rule is included in all of `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.
- :wrench: The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

When using the data property on a component , the value must be a function that returns an object.

## :book: Rule Details

<eslint-code-block fix :rules="{'san/initdata-in-component': ['error']}">

```html
<script>
/* ✓ GOOD */
export default class SomeComp extends san.Component {
  initData () {
    return {
      foo: 'bar'
    }
  }
}
</script>
```

</eslint-code-block>

<eslint-code-block fix :rules="{'san/initdata-in-component': ['error']}">

```html
<script>
/* ✗ BAD */
export default {
  initData: {
    foo: 'bar'
  }
}
</script>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :books: Further Reading

- [API - data](https://baidu.github.io/san/tutorial/data-method/)

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/initdata-in-component.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/initdata-in-component.test.js)
