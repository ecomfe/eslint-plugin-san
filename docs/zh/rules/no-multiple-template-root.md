---
pageClass: rule-details
sidebarDepth: 0
title: san/no-multiple-template-root
description: disallow adding multiple root nodes to the template
---
# san/no-multiple-template-root
> 不允许向模板添加多个根节点

- :gear: 此规则包含于 `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.

## :book: 规则细节

此规则检查 San 中的 template 是否只包含单个根元素。

<eslint-code-block :rules="{'san/no-multiple-template-root': ['error']}">

```html
<!-- The root is text -->
<template>Lorem ipsum</template>
```

</eslint-code-block>

<eslint-code-block :rules="{'san/no-multiple-template-root': ['error']}">

```html
<!-- There are multiple root elements -->
<template>
  <div>hello</div>
  <div>hello</div>
</template>
```

</eslint-code-block>

<eslint-code-block :rules="{'san/no-multiple-template-root': ['error']}">

```html
<!-- The root element has `s-for` directives -->
<template>
  <div s-for="item in items"/>
</template>
```

</eslint-code-block>

<eslint-code-block :rules="{'san/no-multiple-template-root': ['error']}">

```html
<!-- The root element is `<template>` or `<slot>` -->
<template>
  <slot />
</template>
```

</eslint-code-block>

## :wrench: 配置

暂无。

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/no-multiple-template-root.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/no-multiple-template-root.test.js)
