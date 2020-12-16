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

This rule aims to enforce ordering of component attributes. The default order is:

- `LIST_RENDERING`
  e.g. 's-for item in items'
- `CONDITIONALS`
  e.g. 's-if', 's-else-if', 's-else'
- `GLOBAL`
  e.g. 'id'
- `UNIQUE`
  e.g. 'ref', 'key', 's-slot', 'slot'
- `OTHER_ATTR`
  e.g. 'custom-prop="foo"', 's-bind={{ {prop: foo} }}', 'prop="{{foo}}"'
- `EVENTS`
  e.g. 's-on="event"'

### the default order

<eslint-code-block fix :rules="{'san/attributes-order': ['error']}">

```vue
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

## :wrench: Options
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

### `"alphabetical": true` 

<eslint-code-block fix :rules="{'san/attributes-order': ['error', {alphabetical: true}]}">

```vue
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

### Custom orders

#### `['LIST_RENDERING', 'CONDITIONALS', 'RENDER_MODIFIERS', 'GLOBAL', 'UNIQUE', 'TWO_WAY_BINDING', 'DEFINITION', 'OTHER_DIRECTIVES', 'OTHER_ATTR', 'EVENTS', 'CONTENT']`

<eslint-code-block fix :rules="{'san/attributes-order': ['error', {order: ['LIST_RENDERING', 'CONDITIONALS', 'RENDER_MODIFIERS', 'GLOBAL', 'UNIQUE', 'TWO_WAY_BINDING', 'DEFINITION', 'OTHER_DIRECTIVES', 'OTHER_ATTR', 'EVENTS', 'CONTENT']}]}">

```vue
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

```vue
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

## :mag: Implementation

- [Rule source](https://github.com/ecomefe/eslint-plugin-san/blob/master/lib/rules/attributes-order.js)
- [Test source](https://github.com/ecomefe/eslint-plugin-san/blob/master/tests/lib/rules/attributes-order.js)
