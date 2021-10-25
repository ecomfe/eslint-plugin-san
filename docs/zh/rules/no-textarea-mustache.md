---
pageClass: rule-details
sidebarDepth: 0
title: san/no-textarea-mustache
description: disallow mustaches in `<textarea>`
---
# san/no-textarea-mustache
> 禁止在 `<textarea>`中使用插值表达式

- :gear: 此规则包含于 `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.

## :book: 规则细节

该规则会提示在  `<textarea>` 中使用插值表达式的错误。

<eslint-code-block :rules="{'san/no-textarea-mustache': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <textarea value="{=message=}" />

  <!-- ✗ BAD -->
  <textarea>{{ message }}</textarea>
</template>
```

</eslint-code-block>

## :wrench: 配置

暂无。

## :books: 深入阅读

- [表单输入绑定/多行文本](https://baidu.github.io/san/tutorial/form/#输入框)

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/no-textarea-mustache.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/no-textarea-mustache.test.js)
