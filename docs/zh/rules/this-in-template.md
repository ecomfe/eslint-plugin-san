---
pageClass: rule-details
sidebarDepth: 0
title: san/this-in-template
description: disallow usage of `this` in template
---
# san/this-in-template
> 禁止在 template 中使用 `this`

- :gear: 此规则包含于 `"plugin:san/recommended"`.

## :book: 规则细节

此规则目的是防止在 San 模板中使用"this"。

<eslint-code-block :rules="{'san/this-in-template': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <a href="{{url}}">
    {{ text }}
  </a>
  
  <!-- ✗ BAD -->
  <a href="{{this.data.get('url')}}">
    {{ this.data.get('text') }}
  </a>
</template>
```

</eslint-code-block>

## :wrench: 配置

```json
{
  "san/this-in-template": ["error", "always" | "never"]
}
```
- `"always"` ... 在 San 中访问属性时始终使用 `this`。
- `"never"` (默认) ... 不要在表达式中使用 `this` 关键字。

### `"always"`

<eslint-code-block :rules="{'san/this-in-template': ['error', 'always']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <a href="{{this.data.get('url')}}">
    {{ this.data.get('text') }}
  </a>
  
  <!-- ✗ BAD -->
  <a href="{{url}}">
    {{ text }}
  </a>
</template>
```

</eslint-code-block>

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/this-in-template.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/this-in-template.test.js)
