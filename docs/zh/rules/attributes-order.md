---
pageClass: rule-details
sidebarDepth: 0
title: san/attributes-order
description: enforce order of attributes
---
# san/attributes-order
> 要求属性顺序

- :gear: 此规则包含于 `"plugin:san/recommended"`。

- :wrench:[命令行](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems)中的`--fix`选项可以自动修复此规则报告的一些问题。

## :book: 规则细节

此规则目的是强制对组件属性进行排序。 默认顺序是：

- `列表渲染属性`
  例如. 's-for item in items'
- `条件属性`
  例如. 's-if', 's-else-if', 's-else'
- `全局属性`
  例如. 'id'
- `特殊属性`
  例如. 'ref', 'key', 's-slot', 'slot'
- `其他属性`
  例如. 'custom-prop="foo"', 's-bind={{ {prop: foo} }}', 'prop="{{foo}}"'
- `事件`
  例如. 's-on="event"'

### 默认顺序

<eslint-code-block fix :rules="{'san/attributes-order': ['error']}">

```html
<template>
  <!-- ✓ GOOD -->
  <div
    s-for="item in items"
    s-if="!visible"
    id="uniqueID"
    ref="header"
    my-prop="prop"
    on-click="functionCall"
  >
  </div>
  <div
    s-for="item in items"
    s-if="!visible"
    prop-one="{{prop}}"
    prop-two="{{prop}}"
    prop-three="{{prop}}"
    on-click="functionCall"
   >
  </div>
  <div
    prop-one="prop"
    prop-two="{{prop}}"
    prop-three="prop">
  </div>

  <!-- ✗ BAD -->
  <div
    ref="header"
    s-for="item in items"
    id="uniqueID"
    my-prop="prop"
    s-if="!visible"
    on-click="functionCall">
  </div>
</template>
```

</eslint-code-block>

## :wrench: 配置
```json
{
  "san/attributes-order": ["error", {
    "order": [
      "LIST_RENDERING",
      "CONDITIONALS",
      "GLOBAL",
      "UNIQUE",
      "OTHER_ATTR",
      "EVENTS"
    ],
    "alphabetical": false
  }]
}
```

### `"alphabetical": true` 按字母顺序

<eslint-code-block fix :rules="{'san/attributes-order': ['error', {alphabetical: true}]}">

```html
<template>
  <!-- ✓ GOOD -->
    <div
      a-custom-prop="value"
      another-custom-prop="{{value}}"
      blue-color="{{false}}"
      boolean-prop
      class="foo"
      class="{{bar}}"
      z-prop="Z"
      on-[c]="functionCall"
      on-change="functionCall"
      on-click="functionCall"
      on-input="functionCall">
    </div>

  <!-- ✗ BAD -->
    <div
      z-prop="Z"
      a-prop="A">
    </div>

    <div
      on-input="bar"
      on-change="foo">
    </div>

    <div
      on-click="functionCall"
      on-[c]="functionCall">
    </div>

    <div
      z-prop="{{Z}}"
      a-prop="{{A}}">
    </div>

    <div
      class="{{foo}}"
      class="bar">
    </div>

</template>
```

</eslint-code-block>

### 自定义顺序

#### `['LIST_RENDERING', 'CONDITIONALS', 'RENDER_MODIFIERS', 'GLOBAL', 'UNIQUE', 'TWO_WAY_BINDING', 'DEFINITION', 'OTHER_DIRECTIVES', 'OTHER_ATTR', 'EVENTS', 'CONTENT']`

<eslint-code-block fix :rules="{'san/attributes-order': ['error', {order: ['LIST_RENDERING', 'CONDITIONALS', 'RENDER_MODIFIERS', 'GLOBAL', 'UNIQUE', 'TWO_WAY_BINDING', 'DEFINITION', 'OTHER_DIRECTIVES', 'OTHER_ATTR', 'EVENTS', 'CONTENT']}]}">

```html
<template>
  <!-- ✓ GOOD -->
  <div
    ref="header"
    prop-one="prop"
    prop-two="prop">
  </div>

  <!-- ✗ BAD -->
  <div
    ref="header"
    prop-one="prop">
  </div>
</template>
```

</eslint-code-block>

#### `[['LIST_RENDERING', 'CONDITIONALS', 'RENDER_MODIFIERS'], ['DEFINITION', 'GLOBAL', 'UNIQUE'], 'TWO_WAY_BINDING', 'OTHER_DIRECTIVES', 'OTHER_ATTR', 'EVENTS', 'CONTENT']`

<eslint-code-block fix :rules="{'san/attributes-order': ['error', {order: [['LIST_RENDERING', 'CONDITIONALS', 'RENDER_MODIFIERS'], ['DEFINITION', 'GLOBAL', 'UNIQUE'], 'TWO_WAY_BINDING', 'OTHER_DIRECTIVES', 'OTHER_ATTR', 'EVENTS', 'CONTENT']}]}">

```html
<template>
  <!-- ✓ GOOD -->
  <div
    ref="header"
    prop-one="prop"
    prop-two="prop">
  </div>
  <div
    ref="header"
    prop-one="prop"
    prop-two="prop">
  </div>
</template>
```

</eslint-code-block>

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/master/lib/rules/attributes-order.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/attributes-order.test.js)
