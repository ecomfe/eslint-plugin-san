---
pageClass: rule-details
sidebarDepth: 0
title: san/no-multi-spaces
description: disallow multiple spaces
---
# san/no-multi-spaces
> 不允许多余的空格

- :gear: 此规则包含于 `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.
- :wrench: [命令行](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems)中的`--fix`选项可以自动修复此规则报告的一些问题。

## :book: 规则细节

此规则目的是删除标签中不用于缩进的多个空格。

<eslint-code-block fix :rules="{'san/no-multi-spaces': ['error']}">

```html
<template>
  <!-- ✓ GOOD -->
  <div
    class="foo"
    style="{{bar}}" />
  <i
    class="{{
      isExpanded ? 'fa-angle-up' : 'fa-angle-down'
    }}"
  />

  <!-- ✗ BAD -->
  <div     class="foo"
    style =  "{{bar}}"         />
  <i
    class="{{
      isExpanded ? 'fa-angle-up'   : '',
      !isExpanded ? 'fa-angle-down' : '',
    }}"
  />
</template>
```

</eslint-code-block>

## :wrench: 配置

```json
{
  "san/no-multi-spaces": ["error", {
    "ignoreProperties": false
  }]
}
```

- `ignoreProperties` ... 是否应该忽略对象的属性。 默认`false`

### `"ignoreProperties": true`

<eslint-code-block fix :rules="{'san/no-multi-spaces': ['error', { 'ignoreProperties': true }]}">

```html
<template>
  <!-- ✓ GOOD -->
  <i
    class="{{
      isExpanded ? 'fa-angle-up'   : '',
      !isExpanded ? 'fa-angle-down' : '',
    }}"
  />
</template>
```

</eslint-code-block>

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/no-multi-spaces.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/no-multi-spaces.test.js)
