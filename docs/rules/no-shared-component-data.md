---
pageClass: rule-details
sidebarDepth: 0
title: san/no-shared-component-data
description: enforce component's data property to be a function
---
# san/no-shared-component-data
> enforce component's data property to be a function

- :gear: This rule is included in all of `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.
- :wrench: The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

When using the data property on a component , the value must be a function that returns an object.

## :book: Rule Details

When the value of `data` is an object, it’s shared across all instances of a component.

<eslint-code-block fix :rules="{'san/no-shared-component-data': ['error']}">

```vue
<script>
/* ✓ GOOD */
export default class SomeComp extends san.Component {
  initData () {
    return {
      foo: 'bar'
    }
  }
}

export default {
  initData () {
    return {
      foo: 'bar'
    }
  }
}
</script>
```

</eslint-code-block>

<eslint-code-block fix :rules="{'san/no-shared-component-data': ['error']}">

```vue
<script>
/* ✗ BAD */
export default class SomeComp extends san.Component {
  static initData = {
    foo: 'bar'
  }
})

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

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/master/lib/rules/no-shared-component-data.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/blob/master/tests/lib/rules/no-shared-component-data.js)
