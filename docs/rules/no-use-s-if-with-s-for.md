---
pageClass: rule-details
sidebarDepth: 0
title: san/no-use-s-if-with-s-for
description: disallow use s-if on the same element as s-for
---
# san/no-use-s-if-with-s-for
> 禁止在与 s-for 相同的元素上使用 s-if

- :gear: 此规则包含于 `"plugin:san/essential"`, `"plugin:san/strongly-recommended"` 和 `"plugin:san/recommended"`.

## :book: 规则细节

此规则目的是防止在同一元素上使用 `s-for` 指令和 `s-if` 指令。

有两种常见的情况可能会很常见：

  * 过滤列表中的项目（例如`s-for="user in users" s-if="user.isActive"`）。 在这些情况下，用返回过滤列表的新计算属性替换"users"（例如"activeUsers"）。
  * 为了避免在应该隐藏的情况下展示列表（例如`s-for="user in users" s-if="shouldShowUsers"`）。 在这些情况下，将 `s-if` 移动到容器元素（例如 `ul`、`ol`）。

<eslint-code-block :rules="{'san/no-use-s-if-with-s-for': ['error']}">

```html
<template>
  <!-- ✓ GOOD -->
  <ul s-if="complete">
    <todo-item
      s-for="todo in todos"
      todo="{{todo}}"
    />
  </ul>
  <todo-item
    s-for="todo in shownTodos"
    todo="{{todo}}"
  />

  <!-- ✗ BAD -->
  <todo-item
    s-if="complete"
    s-for="todo in todos"
    todo="{{todo}}"
  /><!-- ↑ In this case, the `s-if` should be written on the wrapper element. -->
  <todo-item
    s-for="todo in todos"
    s-if="todo.shown"
    todo="{{todo}}"
  /><!-- ↑ In this case, the `s-for` list variable should be replace with a computed property that returns your filtered list. -->
</template>
```

</eslint-code-block>

## :wrench: 配置

```json
{
  "san/no-use-s-if-with-s-for": ["error", {
    "allowUsingIterationVar": false
  }]
}
```

- `allowUsingIterationVar` (`boolean`) ... 使 `s-if` 指令能够使用由 `s-for` 指令定义的变量。 默认为`false`。

### `"allowUsingIterationVar": true`

<eslint-code-block :rules="{'san/no-use-s-if-with-s-for': ['error', {allowUsingIterationVar: true}]}">

```html
<template>
  <!-- ✓ GOOD -->
  <todo-item
    s-for="todo in todos"
    s-if="todo.shown"
    todo="{{todo}}"
  />

  <!-- ✗ BAD -->
  <todo-item
    s-for="todo in todos"
    s-if="shown"
    todo="{{todo}}"
  />
</template>
```

</eslint-code-block>


## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/no-use-s-if-with-s-for.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/blob/main/__tests__/lib/rules/no-use-s-if-with-s-for.test.js)

