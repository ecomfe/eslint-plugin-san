---
pageClass: rule-details
sidebarDepth: 0
title: san/no-unused-components
description: disallow registering components that are not used inside templates
---
# san/no-unused-components
> 禁止注册未在 templates 中使用的组件

- :gear: 此规则包含于 `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.

## :book: 规则细节

该规则会提示组件未在 template 中使用。

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
      'the-button': TheButton,
      'the-modal': TheModal
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


## :wrench: 配置

暂无。

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/no-unused-components.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/blob/main/__tests__/lib/rules/no-unused-components.test.js)
