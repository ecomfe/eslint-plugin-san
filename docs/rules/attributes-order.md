---
pageClass: rule-details
sidebarDepth: 0
title: san/attributes-order
description: enforce order of attributes
---
# san/attributes-order
> enforce order of attributes

- :gear: This rule is included in `"plugin:san/recommended"`.
- :wrench: The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

## :book: Rule Details

This rule aims to enforce ordering of component attributes. The default order is specified in the [Vue.js Style Guide](https://v3.vuejs.org/style-guide/#element-attribute-order-recommended) and is:

- `DEFINITION`
  e.g. 'is', 's-is'
- `LIST_RENDERING`
  e.g. 's-for item in items'
- `CONDITIONALS`
  e.g. 's-if', 's-else-if', 's-else', 's-show', 's-cloak'
- `RENDER_MODIFIERS`
  e.g. 's-once', 's-pre'
- `GLOBAL`
  e.g. 'id'
- `UNIQUE`
  e.g. 'ref', 'key', 's-slot', 'slot'
- `TWO_WAY_BINDING`
  e.g. 's-model'
- `OTHER_DIRECTIVES`
  e.g. 's-custom-directive'
- `OTHER_ATTR`
  e.g. 'custom-prop="foo"', 's-bind:prop="foo"', ':prop="foo"'
- `EVENTS`
  e.g. '@click="functionCall"', 's-on="event"'
- `CONTENT`
  e.g. 's-text', 's-html'

### the default order

<eslint-code-block fix :rules="{'san/attributes-order': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div
    is="header"
    s-for="item in items"
    s-if="!visible"
    s-once
    id="uniqueID"
    ref="header"
    s-model="headerData"
    my-prop="prop"
    @click="functionCall"
    s-text="textContent">
  </div>
  <div
    s-for="item in items"
    s-if="!visible"
    prop-one="prop"
    :prop-two="prop"
    prop-three="prop"
    @click="functionCall"
    s-text="textContent">
  </div>
  <div
    prop-one="prop"
    :prop-two="prop"
    prop-three="prop">
  </div>

  <!-- ✗ BAD -->
  <div
    ref="header"
    s-for="item in items"
    s-once
    id="uniqueID"
    s-model="headerData"
    my-prop="prop"
    s-if="!visible"
    is="header"
    @click="functionCall"
    s-text="textContent">
  </div>
</template>
```

</eslint-code-block>

## :wrench: Options
```json
{
  "san/attributes-order": ["error", {
    "order": [
      "DEFINITION",
      "LIST_RENDERING",
      "CONDITIONALS",
      "RENDER_MODIFIERS",
      "GLOBAL",
      "UNIQUE",
      "TWO_WAY_BINDING",
      "OTHER_DIRECTIVES",
      "OTHER_ATTR",
      "EVENTS",
      "CONTENT"
    ],
    "alphabetical": false
  }]
}
```

### `"alphabetical": true` 

<eslint-code-block fix :rules="{'san/attributes-order': ['error', {alphabetical: true}]}">

```vue
<template>
  <!-- ✓ GOOD -->
    <div
      a-custom-prop="value"
      :another-custom-prop="value"
      :blue-color="false"
      boolean-prop
      class="foo"
      :class="bar"
      z-prop="Z"
      s-on:[c]="functionCall"
      @change="functionCall"
      s-on:click="functionCall"
      @input="functionCall"
      s-text="textContent">
    </div>

  <!-- ✗ BAD -->
    <div
      z-prop="Z"
      a-prop="A">
    </div>

    <div
      @input="bar"
      @change="foo">
    </div>

    <div
      s-on:click="functionCall"
      s-on:[c]="functionCall">
    </div>

    <div
      :z-prop="Z"
      :a-prop="A">
    </div>

    <div
      :class="foo"
      class="bar">
    </div>

</template>
```

</eslint-code-block>

### Custom orders

#### `['LIST_RENDERING', 'CONDITIONALS', 'RENDER_MODIFIERS', 'GLOBAL', 'UNIQUE', 'TWO_WAY_BINDING', 'DEFINITION', 'OTHER_DIRECTIVES', 'OTHER_ATTR', 'EVENTS', 'CONTENT']`

<eslint-code-block fix :rules="{'san/attributes-order': ['error', {order: ['LIST_RENDERING', 'CONDITIONALS', 'RENDER_MODIFIERS', 'GLOBAL', 'UNIQUE', 'TWO_WAY_BINDING', 'DEFINITION', 'OTHER_DIRECTIVES', 'OTHER_ATTR', 'EVENTS', 'CONTENT']}]}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div
    ref="header"
    is="header"
    prop-one="prop"
    prop-two="prop">
  </div>

  <!-- ✗ BAD -->
  <div
    ref="header"
    prop-one="prop"
    is="header">
  </div>
</template>
```

</eslint-code-block>

#### `[['LIST_RENDERING', 'CONDITIONALS', 'RENDER_MODIFIERS'], ['DEFINITION', 'GLOBAL', 'UNIQUE'], 'TWO_WAY_BINDING', 'OTHER_DIRECTIVES', 'OTHER_ATTR', 'EVENTS', 'CONTENT']`

<eslint-code-block fix :rules="{'san/attributes-order': ['error', {order: [['LIST_RENDERING', 'CONDITIONALS', 'RENDER_MODIFIERS'], ['DEFINITION', 'GLOBAL', 'UNIQUE'], 'TWO_WAY_BINDING', 'OTHER_DIRECTIVES', 'OTHER_ATTR', 'EVENTS', 'CONTENT']}]}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div
    ref="header"
    is="header"
    prop-one="prop"
    prop-two="prop">
  </div>
  <div
    is="header"
    ref="header"
    prop-one="prop"
    prop-two="prop">
  </div>
</template>
```

</eslint-code-block>

## :books: Further Reading

- [Style guide - Element attribute order](https://v3.vuejs.org/style-guide/#element-attribute-order-recommended)
- [Style guide (for v2) - Element attribute order](https://vuejs.org/v2/style-guide/#Element-attribute-order-recommended)

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-san/blob/master/lib/rules/attributes-order.js)
- [Test source](https://github.com/vuejs/eslint-plugin-san/blob/master/tests/lib/rules/attributes-order.js)
