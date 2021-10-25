---
pageClass: rule-details
sidebarDepth: 0
title: san/html-indent
description: enforce consistent indentation in `<template>`
---
# san/html-indent
> 在 `<template>` 中使用一致的缩进

- :gear: 此规则包含于 `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.
- :wrench: [命令行](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems)中的`--fix`选项可以自动修复此规则报告的一些问题。

## :book: 规则细节

此规则在 `<template>` 中要求使用一致的缩进样式。 默认样式为 2 个空格。

- 此规则检查所有标签，指令以及插值语法中的所有表达式。
- 在表达式中，此规则支持 ECMAScript 2020 语法。 它会忽略未知的 AST 节点，但可能会被非标准语法混淆。

<eslint-code-block fix :rules="{'san/html-indent': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div class="foo">
    Hello.
  </div>
  <div class="foo">
    Hello.
  </div>
  <div 
    class="foo"
    foo="{{bar}}"
  >
    World.
  </div>
  <div
    id="a"
    class="b"
    other-attr="{{
      {aaa: 1, bbb: 2}
    }}"
    on-other-attr2="foo()"
  >
    {{
      displayMessage
    }}
  </div>

  <!-- ✗ BAD -->
 <div class="foo">
   Hello.
    </div>
</template>
```

</eslint-code-block>

## :wrench: 配置

```json
{
  "san/html-indent": ["error", {
    "attribute": 1,
    "baseIndent": 1,
    "closeBracket": 0,
    "alignAttributesVertically": true,
    "ignores": []
  }]
}
```

- `type` (`number | "tab"`) ... 缩进的类型。默认值为"2"。如果这是一个数字，它是一个缩进的空格数。如果这是`"tab"`，它使用一个制表符缩进一个。
- `attribute` (`integer`) ... 属性缩进的乘数。默认值为"1"。
- `baseIndent` (`integer`) ... 最外层语句的缩进倍数。默认值为"1"。
- `closeBracket` (`integer | object`) ... 右括号缩进的乘数。默认值为"0"。
  您可以通过设置数值来应用以下内容。
  - `closeBracket.startTag` (`integer`) ... 开始标签右括号的缩进倍数 (`<div>`)。默认值为"0"。
  - `closeBracket.endTag` (`integer`) ... 结束标签右括号的缩进倍数 (`</div>`)。默认值为"0"。
  - `closeBracket.selfClosingTag` (`integer`) ... 自闭合标签右括号的缩进倍数 (`<div/>`)。默认值为"0"。
- `alignAttributesVertically` (`boolean`) ... 在多行情况下，属性是否应该垂直对齐到第一个属性的条件。默认为`true`
- `ignores` (`string[]`) ... 忽略节点的选择器。您可以使用 [esquery](https://github.com/estools/esquery#readme) 来选择节点。默认是一个空数组。

### `2, {"attribute": 1, "closeBracket": 1}`

<eslint-code-block fix :rules="{'san/html-indent': ['error', 2, {attribute: 1, closeBracket: 1}]}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div
    id="a"
    class="b"
    other-attr=
      "{{ {longname: longvalue} }}"
    other-attr2
      ="{{ {longname: longvalue} }}"
    >
    Text
  </div>
</template>
```

</eslint-code-block>

### `2, {"attribute": 2, "closeBracket": 1}`

<eslint-code-block fix :rules="{'san/html-indent': ['error', 2, {attribute: 2, closeBracket: 1}]}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div
      id="a"
      class="b"
      other-attr=
        "{{ {longname: longvalue} }}"
      other-attr2
        ="{{ {longname: longvalue} }}"
    >
    Text
  </div>
</template>
```

</eslint-code-block>

### `2, {"ignores": ["VAttribute"]}`

<eslint-code-block fix :rules="{'san/html-indent': ['error', 2, {ignores: ['VAttribute']}]}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div
  id=""
    class=""
  />
</template>
```

</eslint-code-block>

### `2, {"alignAttributesVertically": false}`

<eslint-code-block fix :rules="{'san/html-indent': ['error', 2, {alignAttributesVertically: false}]}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div id=""
    class=""
    some-attr=""
  />

  <!-- ✗ BAD -->
  <div id=""
       class=""
       some-attr=""
  />
</template>
```

</eslint-code-block>

### `2, {"baseIndent": 0}`

<eslint-code-block fix :rules="{'san/html-indent': ['error', 2, {baseIndent: 0}]}">

```vue
<template>
<!-- ✓ GOOD -->
<div>
  <span>
    Hello!
  </span>
</div>

  <!-- ✗ BAD -->
  <div>
    <span>
      Hello!
    </span>
  </div>
</template>
```

</eslint-code-block>

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/html-indent.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/html-indent.test.js)
