---
pageClass: rule-details
sidebarDepth: 0
title: san/attribute-hyphenation
description: enforce attribute naming style on custom components in template
---
# san/attribute-hyphenation
> template 中的自定义组件属性名要求使用短横线命名。

- :gear: 此规则包含于 `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`当中。

- :wrench: [命令行](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems)中的`--fix`选项可以自动修复此规则报告的一些问题。

## :book: 规则细节

此规则要求在 San 模板中的自定义组件上使用短横线命名属性。

<eslint-code-block fix :rules="{'san/attribute-hyphenation': ['error', 'always']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <MyComponent my-prop="prop" />

  <!-- ✗ BAD -->
  <MyComponent myProp="prop" />
</template>
```

</eslint-code-block>

## :wrench: 配置

```json
{
  "san/attribute-hyphenation": ["error", "always" | "never", {
    "ignore": []
  }]
}
```

默认选项设置为`always`，`ignore`设置为` ['data-', 'aria-', 'slot-scope']` 即这三个属性名会忽略检查。

- `"always"` ：（默认）所有属性名均要求使用短横线命名。

- `"never"` ：除了 `data-`、`aria-` 和 `slot-scope`属性忽略检查外，其他不允许使用短横线命名。

- `"ignore"` ：忽略检查的属性名数组。

### `"always"`
所有属性名均要求使用短横线命名，否则会报错。

<eslint-code-block fix :rules="{'san/attribute-hyphenation': ['error', 'always']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <MyComponent my-prop="prop" />

  <!-- ✗ BAD -->
  <MyComponent myProp="prop" />
</template>
```

</eslint-code-block>

### `"never"`
除了`data-`、`aria-`和`slot-scope`之外，其他属性名不允许使用短横线命名，否则会报错。

<eslint-code-block fix :rules="{'san/attribute-hyphenation': ['error', 'never']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <MyComponent myProp="prop" />
  <MyComponent data-id="prop" />
  <MyComponent aria-role="button" />
  <MyComponent slot-scope="prop" />

  <!-- ✗ BAD -->
  <MyComponent my-prop="prop" />
</template>
```

</eslint-code-block>

### `"never", { "ignore": ["custom-prop"] }`
除了默认的`data-`、`aria-`和`slot-scope`属性和配置的`custom-prop`属性外，其他属性名不允许使用短横线命名。

<eslint-code-block fix :rules="{'san/attribute-hyphenation': ['error', 'never', { ignore: ['custom-prop']}]}">

```vue
<template>
  <!-- ✓ GOOD -->
  <MyComponent myProp="prop" />
  <MyComponent custom-prop="prop" />
  <MyComponent data-id="prop" />
  <MyComponent aria-role="button" />
  <MyComponent slot-scope="prop" />

  <!-- ✗ BAD -->
  <MyComponent my-prop="prop" />
</template>
```

</eslint-code-block>

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/attribute-hyphenation.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/attribute-hyphenation.test.js)

