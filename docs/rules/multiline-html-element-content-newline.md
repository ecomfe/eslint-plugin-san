---
pageClass: rule-details
sidebarDepth: 0
title: san/multiline-html-element-content-newline
description: require a line break before and after the contents of a multiline element
---
# san/multiline-html-element-content-newline
> require a line break before and after the contents of a multiline element

- :gear: This rule is included in all of `"plugin:san/strongly-recommended"` and `"plugin:san/recommended"`.
- :wrench: The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

## :book: Rule Details

This rule enforces a line break before and after the contents of a multiline element.

<eslint-code-block fix :rules="{'san/multiline-html-element-content-newline': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div>
    multiline
    content
  </div>

  <pre>some
  content</pre>

  <div
    attr
  >
    multiline start tag
  </div>

  <table>
    <tr>
      <td>multiline</td>
      <td>children</td>
    </tr>
  </table>

  <div>
    <!-- multiline
         comment -->
  </div>

  <div
  >
  </div>

  <div attr>singleline element</div>

  <!-- ✗ BAD -->
  <div>multiline
    content</div>

  <div
    attr
  >multiline start tag</div>
  
  <table><tr><td>multiline</td>
    <td>children</td></tr></table>
  
  <div><!-- multiline
    comment --></div>

  <div
  ></div>
</template>
```

</eslint-code-block>

## :wrench: Options

```js
{
    "san/multiline-html-element-content-newline": ["error", {
        "ignoreWhenEmpty": true,
        "ignores": ["pre", "textarea", ...INLINE_ELEMENTS],
        "allowEmptyLines": false
    }]
}
```

- `ignoreWhenEmpty` ... disables reporting when element has no content.
    default `true`
- `ignores` ... the configuration for element names to ignore line breaks style.
    default `["pre", "textarea", ...INLINE_ELEMENTS]`.
- `allowEmptyLines` ... if `true`, it allows empty lines around content. If you want to disallow multiple empty lines, use [no-multiple-empty-lines] in combination.  
    default `false`

::: info
  All inline non void elements can be found [here](https://github.com/vuejs/eslint-plugin-san/blob/master/lib/utils/inline-non-void-elements.json).
:::

### `"ignores": ["VueComponent", "pre", "textarea"]`

<eslint-code-block fix :rules="{'san/multiline-html-element-content-newline': ['error', { ignores: ['VueComponent', 'pre', 'textarea'] }]}">

```vue
<template>
  <!-- ✓ GOOD -->
  <SanComponent>multiline
  content</SanComponent>

  <pre>some
  content</pre>

  <SanComponent><span
    class="bold">For example,</span>
  Defines the Vue component that accepts preformatted text.</SanComponent>
</template>
```

</eslint-code-block>

### `"allowEmptyLines": true`

<eslint-code-block fix :rules="{'san/multiline-html-element-content-newline': ['error', { allowEmptyLines: true }]}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div>
    content
  </div>
  <div>

    content

  </div>

  <!-- ✗ BAD -->
  <div>content
    content</div>
</template>
```

</eslint-code-block>

## :books: Further Reading

- [no-multiple-empty-lines]

[no-multiple-empty-lines]: https://eslint.org/docs/rules/no-multiple-empty-lines

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/master/lib/rules/multiline-html-element-content-newline.js)
- [Test source](https://github.com/ecomfe/eslint-plugin-san/blob/master/tests/lib/rules/multiline-html-element-content-newline.js)
