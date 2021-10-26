---
pageClass: rule-details
sidebarDepth: 0
title: san/no-unused-components
description: disallow registering components that are not used inside templates
---
# san/no-unused-components
> disallow registering components that are not used inside templates

- :gear: This rule is included in all of `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.

## :book: Rule Details

This rule reports components that haven't been used in the template.

<eslint-code-block :rules="{'san/no-unused-components': ['error']}">

```html
<!-- ✓ GOOD -->
<template>
  <div>
    <h2>Lorem ipsum</h2>
    <the-modal>
      <the-button>CTA</the-button>
    </the-modal>
  </div>
</template>

<script>
  import TheButton from 'components/TheButton.san'
  import TheModal from 'components/TheModal.san'

  export default {
    components: {
      'the-button': TheButton,
      'the-modal': TheModal
    }
  }
</script>
```

</eslint-code-block>

<eslint-code-block :rules="{'san/no-unused-components': ['error']}">

```html
<!-- ✗ BAD -->
<template>
  <div>
    <h2>Lorem ipsum</h2>
    <the-modal />
  </div>
</template>

<script>
  import TheButton from 'components/TheButton.san'
  import TheModal from 'components/TheModal.san'

  export default {
    components: {
      'the-button': TheButton, // Unused component
      'the-modal': TheModal // Used component
    }
  }
</script>
```

</eslint-code-block>


## :wrench: Options

nothing

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/no-unused-components.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/blob/main/__tests__/lib/rules/no-unused-components.test.js)
