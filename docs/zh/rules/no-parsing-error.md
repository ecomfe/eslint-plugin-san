---
pageClass: rule-details
sidebarDepth: 0
title: san/no-parsing-error
description: disallow parsing errors in `<template>`
---
# san/no-parsing-error
> 不允许`<template>`中语法错误

- :gear: 此规则包含于 `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.

此规则会提示 `<template>` 中的语法错误。 例如：

- 指令中脚本的语法错误。

- 插值表达式中的语法错误。

- HTML 的语法错误。
  
   - 无效的结束标签。
   
   - 结束标签中的属性。
   
   - ...
   
   - 另请参阅：[WHATWG HTML 规范](https://html.spec.whatwg.org/multipage/parsing.html#parse-errors)

## :book: 规则细节

此规则尝试通过解析 `<script>` 的解析器来解析 `<template>` 中的指令/插值表达式。
然后提示语法错误。

<eslint-code-block :rules="{'san/no-parsing-error': ['error']}">

```vue
<template>
  <!-- ✗ BAD -->
  {{ . }}
  {{ foo bar }}
  <div class={{*abc*}} / on-click="def(">
    </span>
  </div id="ghi">
  <span s-html="'&#xe733'" />
</template>
```

</eslint-code-block>

> 字符引用必须以 `U+003B (;) `分号结束。 https://html.spec.whatwg.org/multipage/parsing.html#hexademical-character-reference-state

## :wrench: 配置

```json
{
  "san/no-parsing-error": ["error", {
    "abrupt-closing-of-empty-comment": true,
    "absence-of-digits-in-numeric-character-reference": true,
    "cdata-in-html-content": true,
    "character-reference-outside-unicode-range": true,
    "control-character-in-input-stream": true,
    "control-character-reference": true,
    "eof-before-tag-name": true,
    "eof-in-cdata": true,
    "eof-in-comment": true,
    "eof-in-tag": true,
    "incorrectly-closed-comment": true,
    "incorrectly-opened-comment": true,
    "invalid-first-character-of-tag-name": true,
    "missing-attribute-value": true,
    "missing-end-tag-name": true,
    "missing-semicolon-after-character-reference": true,
    "missing-whitespace-between-attributes": true,
    "nested-comment": true,
    "noncharacter-character-reference": true,
    "noncharacter-in-input-stream": true,
    "null-character-reference": true,
    "surrogate-character-reference": true,
    "surrogate-in-input-stream": true,
    "unexpected-character-in-attribute-name": true,
    "unexpected-character-in-unquoted-attribute-value": true,
    "unexpected-equals-sign-before-attribute-name": true,
    "unexpected-null-character": true,
    "unexpected-question-mark-instead-of-tag-name": true,
    "unexpected-solidus-in-tag": true,
    "unknown-named-character-reference": true,
    "end-tag-with-attributes": true,
    "duplicate-attribute": true,
    "end-tag-with-trailing-solidus": true,
    "non-void-html-element-start-tag-with-trailing-solidus": false,
    "x-invalid-end-tag": true,
    "x-invalid-namespace": true
  }]
}
```

您可以通过配置禁用 HTML 语法错误。 请参阅 [WHATWG HTML 规范](https://html.spec.whatwg.org/multipage/parsing.html#parse-errors) 了解 HTML 语法错误的详细信息。
因为 San.js 支持自闭合标签，所以只有 `non-void-html-element-start-tag-with-trailing-solidus` 默认被禁用。

::: warning 注意
此规则不支持捕获（比如有关 DOCTYPE 的错误）。
:::

带有 `x-` 前缀的错误是这条规则独创的，因为树构建阶段的错误还没有被编码。

- `x-invalid-end-tag` 启用自闭合元素含有结束标签的错误。
- `x-invalid-namespace` 启用关于无效 `xmlns` 属性的错误。 另请参阅 [step 10. of "create an element for a token"](https://html.spec.whatwg.org/multipage/parsing.html#create-an-element-for-the-token)

## :books: 深入阅读

- [WHATWG HTML 规范](https://html.spec.whatwg.org/multipage/parsing.html#parse-errors)

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/no-parsing-error.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/no-parsing-error.test.js)

