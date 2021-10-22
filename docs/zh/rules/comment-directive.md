---
pageClass: rule-details
sidebarDepth: 0
title: san/comment-directive
description: support comment-directives in `<template>`
---
# san/comment-directive
> 支持 `<template>` 中的注释指令

- :gear: 此规则包含于 `"plugin:san/base"`, `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.

此规则的唯一目的是在 `<template>` 和块级元素提供 `eslint-disable` 功能。
它支持使用以下注释：

- `eslint-disable`
- `eslint-enable`
- `eslint-disable-line`
- `eslint-disable-next-line`

::: warning 注意
我们不能在标签内写 HTML 注释。
:::

## :book: 规则细节

ESLint 不提供任何 API 来增强`eslint-disable`功能，并且 ESLint 规则不能影响其他规则。 但是 ESLint 提供了 [processors API](https://eslint.org/docs/developer-guide/working-with-plugins#processors-in-plugins)。

此规则将所有类似`eslint-disable`的注释作为错误发送到`.san`文件处理器中的`post-process`，然后`post-process`删除所有`san/comment-directive`错误及禁用区域中提示的错误 .

<eslint-code-block :rules="{'san/comment-directive': ['error'], 'san/max-attributes-per-line': ['error']}">

```vue
<template>
  <!-- eslint-disable-next-line san/max-attributes-per-line -->
  <div a="1" b="2" c="3" d="4" />
</template>
```

</eslint-code-block>

 `eslint-disable` 的注释可以在 `<template>` 中或块级元素级别使用。

<eslint-code-block :rules="{'san/comment-directive': ['error'], 'san/max-attributes-per-line': ['error'], 'san/component-tags-order': ['error'] }">

```vue
<template>
  <!-- eslint-disable-next-line san/max-attributes-per-line -->
  <div a="1" b="2" c="3" d="4" />
</template>

<!-- eslint-disable-next-line san/component-tags-order -->
<style>
</style>
```

</eslint-code-block>

`eslint-disable` 注释在一个块级元素过后则无效。

<eslint-code-block :rules="{'san/comment-directive': ['error'], 'san/max-attributes-per-line': ['error'], 'san/component-tags-order': ['error'] }">

```vue
<style>
</style>

<!-- eslint-disable -->
<script> /* <- Warning has been disabled. */
</script>

<template> <!-- <- Warning are not disabled. -->
</template>

```

</eslint-code-block>

`eslint-disable` 注释可以包含说明来解释为什么需要注释。 说明必须出现在指令之后，并由两个或多个连续的 - 字符与指令分隔。 例如：

<eslint-code-block :rules="{'san/comment-directive': ['error'], 'san/max-attributes-per-line': ['error']}">

```vue
<template>
  <!-- eslint-disable-next-line san/max-attributes-per-line -- Here's a description about why this disabling is necessary. -->
  <div a="1" b="2" c="3" d="4" />
</template>
```

</eslint-code-block>

## :wrench: 配置

```json
{
  "san/comment-directive": ["error", {
    "reportUnusedDisableDirectives": false
  }]
}
```

- `reportUnusedDisableDirectives` ... 如果为 `true`，将提示未得到使用（因此不需要）的禁用指令。 默认`false`

### `{ "reportUnusedDisableDirectives": true }`

<eslint-code-block :rules="{'san/comment-directive': ['error', {reportUnusedDisableDirectives: true} ], 'san/max-attributes-per-line': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <!-- eslint-disable-next-line san/max-attributes-per-line -->
  <div a="1" b="2" c="3" d="4" />

  <!-- ✗ BAD -->
  <!-- eslint-disable-next-line san/max-attributes-per-line -->
  <div a="1" />
</template>
```

</eslint-code-block>

::: warning 注意
如果没有使用到禁用注释，将会提示不能用`eslint-disable` 注释来限制。
:::

## :books: 深入阅读

- [使用注释禁用规则]

[使用注释禁用规则]: https://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/comment-directive.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/comment-directive.test.js)
