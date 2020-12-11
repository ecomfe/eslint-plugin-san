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

```vue
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
      TheButton,
      TheModal
    }
  }
</script>
```

</eslint-code-block>

<eslint-code-block :rules="{'san/no-unused-components': ['error']}">

```vue
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

```json
{
  "san/no-unused-components": ["error", {
    "ignoreWhenBindingPresent": true
  }]
}
```

- `ignoreWhenBindingPresent` ... suppresses all errors if binding has been detected in the template
    default `true`

### `ignoreWhenBindingPresent: false`

<eslint-code-block :rules="{'san/no-unused-components': ['error', { 'ignoreWhenBindingPresent': false }]}">

```vue
<!-- ✓ GOOD -->
<template>
  <div>
    <h2>Lorem ipsum</h2>
    <the-button s-if="" />
    <the-select s-else-if="" />
    <the-input s-else="" />
  </div>
</template>

<script>
  import TheButton from 'components/TheButton.san'
  import TheSelect from 'components/TheSelect.san'
  import TheInput from 'components/TheInput.san'

  export default {
    components: {
      'the-button': TheButton,
      'the-select': TheSelect,
      'the-input': TheInput,
    },
  }
</script>
```

</eslint-code-block>

<eslint-code-block :rules="{'san/no-unused-components': ['error', { 'ignoreWhenBindingPresent': false }]}">

```vue
<!-- ✗ BAD -->
<template>
  <div>
    <h2>Lorem ipsum</h2>
    <computedComponent />
  </div>
</template>

<script>
  import TheButton from 'components/TheButton.san'
  import TheSelect from 'components/TheSelect.san'
  import TheInput from 'components/TheInput.san'

  export default {
    components: {
      'the-button': TheButton, // <- not used
      'the-select': TheSelect, // <- not used
      'the-input': TheInput, // <- not used
    },
    computed: {
      computedComponent() {
      }
    }
  }
</script>
```

</eslint-code-block>

## :mag: Implementation

- [Rule source](https://github.com/ecom/eslint-plugin-san/blob/master/lib/rules/no-unused-components.js)
- [Test source](https://github.com/ecom/eslint-plugin-san/blob/master/tests/lib/rules/no-unused-components.js)
