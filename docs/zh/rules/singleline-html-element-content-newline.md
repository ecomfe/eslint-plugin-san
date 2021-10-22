---
pageClass: rule-details
sidebarDepth: 0
title: san/singleline-html-element-content-newline
description: require a line break before and after the contents of a singleline element
---
# san/singleline-html-element-content-newline
> 要求在单行元素的内容前后换行

- :gear: 此规则包含于 `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.
- :wrench: [命令行](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems)中的`--fix`选项可以自动修复此规则报告的一些问题。

## :book: 规则细节

此规则要求在单行元素的内容前后强制换行。


<eslint-code-block fix :rules="{'san/singleline-html-element-content-newline': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div attr>
    content
  </div>
  
  <tr attr>
    <td>
      {{ data1 }}
    </td>
    <td>
      {{ data2 }}
    </td>
  </tr>
  
  <div attr>
    <!-- comment -->
  </div>
  
  <!-- ✗ BAD -->
  <div attr>content</div>
  
  <tr attr><td>{{ data1 }}</td><td>{{ data2 }}</td></tr>
  
  <div attr><!-- comment --></div>
</template>
```

</eslint-code-block>

## :wrench: 配置

```js
{
  "san/singleline-html-element-content-newline": ["error", {
    "ignoreWhenNoAttributes": true,
    "ignoreWhenEmpty": true,
    "ignores": ["pre", "textarea", ...INLINE_ELEMENTS]
  }]
}
```

- `ignoreWhenNoAttributes` ... 当给定元素没有属性时，允许处在一行中并包含内容。
   默认`"true"`
- `ignoreWhenEmpty` ...当元素没有内容时忽略检查。
   默认`"true"`
- `ignores` ... 忽略检查的元素。默认`["pre", "textarea", ...INLINE_ELEMENTS]`。

::: tip

所有`INLINE_ELEMENTS`都可以在[这里](https://github.com/ecomfe/eslint-plugin-san/blob/master/lib/utils/inline-non-void-elements.json)找到。

:::


### `"ignoreWhenNoAttributes": true`

<eslint-code-block fix :rules="{'san/singleline-html-element-content-newline': ['error', {'ignoreWhenNoAttributes': true}]}">

```vue
<template>
  <!-- ✗ BAD -->
  <div attr>content</div>
  
  <tr attr><td>{{ data1 }}</td><td>{{ data2 }}</td></tr>
  
  <div attr><!-- comment --></div>
</template>
```

</eslint-code-block>

### `"ignoreWhenNoAttributes": false`

<eslint-code-block fix :rules="{'san/singleline-html-element-content-newline': ['error', {'ignoreWhenNoAttributes': false}]}">

```vue
<template>
  <!-- ✗ BAD -->
  <div>content</div>
  
  <tr><td>{{ data1 }}</td><td>{{ data2 }}</td></tr>

  <div><!-- comment --></div>
</template>
```

</eslint-code-block>

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/singleline-html-element-content-newline.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/singleline-html-element-content-newline.test.js)
