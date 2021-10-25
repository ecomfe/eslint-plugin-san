---
pageClass: rule-details
sidebarDepth: 0
title: san/multiline-html-element-content-newline
description: require a line break before and after the contents of a multiline element
---
# san/multiline-html-element-content-newline
> 要求在多行元素的内容前后换行

- :gear: 此规则包含于 `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.
- :wrench: [命令行](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems)中的`--fix`选项可以自动修复此规则报告的一些问题。

## :book: 规则细节

此规则要求在多行元素的内容前后强制换行。

<eslint-code-block fix :rules="{'san/multiline-html-element-content-newline': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div>
    multiline
    content
  </div>

  <pre>some
  content</pre>

  <div
    attr
  >
    multiline start tag
  </div>

  <table>
    <tr>
      <td>multiline</td>
      <td>children</td>
    </tr>
  </table>

  <div>
    <!-- multiline
         comment -->
  </div>

  <div
  >
  </div>

  <div attr>singleline element</div>

  <!-- ✗ BAD -->
  <div>multiline
    content</div>

  <div
    attr
  >multiline start tag</div>
  
  <table><tr><td>multiline</td>
    <td>children</td></tr></table>
  
  <div><!-- multiline
    comment --></div>

  <div
  ></div>
</template>
```

</eslint-code-block>

## :wrench: 配置

```js
{
    "san/multiline-html-element-content-newline": ["error", {
        "ignoreWhenEmpty": true,
        "ignores": ["pre", "textarea", ...INLINE_ELEMENTS],
        "allowEmptyLines": false
    }]
}
```

- `ignoreWhenEmpty` ... 当元素没有内容时禁止报错。 默认为`true`

- `igonres` ... 忽略换行符的元素名称的配置。 默认` ["pre", "textarea", ...INLINE_ELEMENTS]`。

- `allowEmptyLines` ... 如果为 true，则它允许内容周围有空行。 如果您想禁止多个空行，请结合使用[no-multiple-empty-lines]。默认`false`

::: tip
  所有`INLINE_ELEMENTS`都可以在[这里](https://github.com/ecomfe/eslint-plugin-san/blob/master/lib/utils/inline-non-void-elements.json)找到 .
:::

### `"ignores": ["SanComponent", "pre", "textarea"]`

<eslint-code-block fix :rules="{'san/multiline-html-element-content-newline': ['error', { ignores: ['SanComponent', 'pre', 'textarea'] }]}">

```vue
<template>
  <!-- ✓ GOOD -->
  <SanComponent>multiline
  content</SanComponent>

  <pre>some
  content</pre>

  <SanComponent><span
    class="bold">For example,</span>
  Defines the San component that accepts preformatted text.</SanComponent>
</template>
```

</eslint-code-block>

### `"allowEmptyLines": true`

<eslint-code-block fix :rules="{'san/multiline-html-element-content-newline': ['error', { allowEmptyLines: true }]}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div>
    content
  </div>
  <div>

    content

  </div>

  <!-- ✗ BAD -->
  <div>content
    content</div>
</template>
```

</eslint-code-block>

## :books: 深入阅读

- [no-multiple-empty-lines]

[no-multiple-empty-lines]: https://eslint.org/docs/rules/no-multiple-empty-lines

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/multiline-html-element-content-newline.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/multiline-html-element-content-newline.test.js)
