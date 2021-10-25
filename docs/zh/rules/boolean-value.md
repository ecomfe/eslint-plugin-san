---
pageClass: rule-details
sidebarDepth: 0
title: san/boolean-value
description: Enforce boolean attributes notation in template
---
# san/boolean-value
> 强制 template 中布尔属性符号。

- :gear: 此规则包含于 `"plugin:san/strongly-recommended"`.
- :wrench: [命令行](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems)中的`--fix`选项可以自动修复此规则报告的一些问题。

## :book: 规则细节

此规则要求 template 中的布尔属性符号。


## :wrench: 配置

```json
{
  "san/attribute-hyphenation": ["warn", "always" | "never", {
    "always" | "never": []
  }]
}
```
这个规则有两个参数。 如果第一个参数是`"always"`，那么它会在丢失属性值时发出警告。 如果是`"never"`，则当属性值为`true`时它会报出警告。 此选项的默认值为`"never"`。

第二个参数是可选的：如果提供，它必须是一个具有 `"never"` 属性的对象（如果第一个参数是 `"always"`），或一个 `"always"` 属性（如果第一个参数是 ` "never"`）。 此属性的值必须是表示属性名称的字符串数组。


### `["warn", "never"]` (默认)

<eslint-code-block :rules="{'san/boolean-value': ['warn']}">

```html
<template>
  <!-- ✓ GOOD -->
  <x a on-click="fire('my-event')" />

  <!-- ✗ BAD -->
  <x a="{{true}}" on-click="fire('myEvent')" />
</template>
```

</eslint-code-block>

### `["warn", "never", {"always": ["c"]}]` 

<eslint-code-block :rules="{'san/boolean-value': ['warn', 'never', {'always': ['c']}]}">

```html
<template>
  <!-- ✓ GOOD -->
  <x a c="{{false}}" on-click="fire('my-event')" />
  <x a c="{{true}}" on-click="fire('my-event')" />
  <x a="{{false}}" c="{{true}}" on-click="fire('my-event')" />

  <!-- ✗ BAD -->
  <x a="{{true}}" c="{{true}}" on-click="fire('myEvent')" />
  <x a="{{true}}" c="{{false}}" on-click="fire('myEvent')" />
</template>
```

</eslint-code-block>

### `["warn", "always"]`

<eslint-code-block :rules="{'san/boolean-value': ['warn', 'always']}">

```html
<template>
  <!-- ✓ GOOD -->
  <x a="{{true}}" on-click="fire('myEvent')" />

  <!-- ✗ BAD -->
  <x a on-click="fire('my-event')" />
</template>
```

</eslint-code-block>

### `["warn", "always", {"never": ["c"]}]`

<eslint-code-block :rules="{'san/boolean-value': ['warn', 'always', {'never': ['c']}]}">

```html
<template>
  <!-- ✓ GOOD -->
  <x a="{{true}}" c on-click="fire('myEvent')" />

  <!-- ✗ BAD -->
  <x a="{{true}}" c="{{true}}" on-click="fire('myEvent')" />
</template>
```

</eslint-code-block>

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/boolean-value.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/boolean-value.test.js)
