---
sidebarDepth: 0
---

# San Spec 设计


## 规范

### 基础(base)

使用以下配置，执行本章规则：

```json
{
  "extends": "plugin:san/base"
}
```

|状态| Rule ID | 详情 | 进展 |
|:---|:------------|:------------|:---|
| Draft | [san/comment-directive](./rules/comment-directive.md) | 禁用/开启 HTML 注释指令 ||
| Draft | [san/experimental-script-setup-vars](./rules/san/experimental-script-setup-vars.md) | 禁止通过`<script setup>`暴露 方法/属性 ||

### 必要(essential)

使用以下配置，执行本章规则：

```json
{
  "extends": "plugin:san/essential"
}
```

|状态| Rule ID | 详情 | 进展 |
|:---|:------------|:------------|:---|
| Draft | [san/no-async-in-computed-properties](./rules/no-async-in-computed-properties.md) | 禁止计算数据方法有异步操作 ||
| Draft | [san/no-dupe-keys](./rules/no-dupe-keys.md) | 禁止数据项和计算数据重名 ||
| Draft | [san/no-duplicate-attributes](./rules/no-duplicate-attributes.md) | 禁止属性名重复 |Done|
| Draft | [san/no-parsing-error](./rules/no-parsing-error.md) | 禁止template语法解析错误 |   |
| Draft | [san/no-reserved-keys](./rules/no-reserved-keys.md) | 禁止覆写保留关键字 |   |
| Draft | [san/no-shared-component-data](./rules/no-shared-component-data.md) | 禁止组件实例共享data, initData必须为返回有效值的函数 |  |
| Draft | [san/no-side-effects-in-computed-properties](./rules/no-side-effects-in-computed-properties.md) | 禁止有副作用的计算数据方法 |  |
| Draft |[san/no-textarea-mustache](./rules/no-textarea-mustache.md) | 禁止`<textarea>`使用插值 |   |
| Draft | [san/return-in-computed-property](./rules/return-in-computed-property.md) | 强制计算数据方法提供返回值 |  |
| Draft | [san/valid-template-root](./rules/valid-template-root.md) | 禁止无效模板根节点 |  |
| Draft | [san/valid-s-show](./rules/valid-s-show.md) | 正确使用`s-show` |  |
| Draft | [san/valid-s-if](./rules/valid-s-if.md) | 正确使用`s-if` |  |
| Draft | [san/valid-s-else-if](./rules/valid-s-else-if.md) | 正确使用`s-else-if`  |   |
| Draft | [san/valid-s-else](./rules/valid-s-else.md) | 正确使用`s-else` |  |
| Draft | [san/no-template-key](./rules/no-template-key.md) | 禁止`<template>`使用属性 |    |
| Draft | [san/valid-on](./rules/valid-on.md) | 正确使用`on` |  |
| Draft | [san/valid-twoway-binding](./rules/valid-twoway-binding.md) | 强制双向绑定使用正确表达式 |  |
| Draft | [san/valid-s-for](./rules/valid-s-for.md) | 正确使用`s-for` |  |
| Draft | [san/no-unused-vars](./rules/no-unused-vars.md) | 禁止s-for指令有未使用的变量定义 |  |

### 强烈推荐(strongly-recommended)

使用以下配置，执行本章规则，并覆盖上级规则：

```json
{
  "extends": "plugin:san/strongly-recommended"
}
```

|状态| Rule ID | 详情 | 进展 |
|:---|:------------|:------------|:---|
| Draft | [san/attribute-hyphenation](./rules/attribute-hyphenation.md) | 强制模板属性命名 |
| Draft | [san/html-end-tags](./rules/html-end-tags.md) | 强制模板标签命名 |
| Draft | [san/html-self-closing](./rules/html-self-closing.md) | 强制模板标签自闭合 |
| Draft | [san/html-indent](./rules/html-indent.md) | 强制模板缩进 |
| Draft | [san/max-attributes-per-line](./rules/max-attributes-per-line.md) | 强制单行最大属性数量 |
| Draft | [san/mustache-interpolation-spacing](./rules/mustache-interpolation-spacing.md) | 强制插值内无空白 |
| Draft | [san/no-multi-spaces](./rules/no-multi-spaces.md) | 禁止多余的空格 |
| Draft | [san/name-property-casing](./rules/name-property-casing.md) | 组件名称大小写 |

### 推荐(recommended)

使用以下配置，执行本章规则，并覆盖上级规则：

```json
{
  "extends": "plugin:san/recommended"
}
```

|状态| Rule ID | 详情 | 进展 |
|:---|:------------|:------------|:---|
| Draft | [san/html-quotes](./rules/html-quotes.md) | 属性引号的使用 |   |
| Draft | [san/order-in-components](./rules/order-in-components.md) | 组件属性声明顺序 |   |
| Draft | [san/no-confusing-s-for-s-if](./rules/no-confusing-v-for-v-if.md) | 在一个元素上 不应该同时定义 `s-for` 和 `s-if` |  |
| Draft | [san/attributes-order](./rules/attributes-order.md) | 模板属性声明顺序 |   |
| Draft | [san/data-method-in-components](./rules/data-method-in-components.md) | 使用数据操作方法，禁止引用操作或拷贝覆盖 | |

## 实现

### eslint-plugin-vue

### fecs


