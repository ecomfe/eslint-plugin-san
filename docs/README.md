# San 规则

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
| Draft | [san/comment-directive](./rules/comment-directive.md) | 禁用/开启 HTML 注释指令 |Done|

### 必要(essential)

使用以下配置，执行本章规则：

```json
{
  "extends": "plugin:san/essential"
}
```

|状态| Rule ID | 详情 | 进展 |
|:---|:------------|:------------|:---|
| Draft | [san/custom-event-name-casing](./rules/custom-event-name-casing.md) | 统一自定义事件名称大小写样式 |Done|
| Draft | [san/no-async-in-computed-properties](./rules/no-async-in-computed-properties.md) | 禁止计算数据方法有异步操作 |Done|
| Draft | [san/no-dupe-keys](./rules/no-dupe-keys.md) | 禁止数据项和计算数据重名 |Done|
| Draft | [san/no-dupe-v-else-if](./rules/no-dupe-v-else-if.md) | 禁止v-if/v-else-if出现重复条件 |Done|
| Draft | [san/no-duplicate-attributes](./rules/no-duplicate-attributes.md) | 禁止属性名重复 |Done|
| Draft | [san/no-multiple-template-root](./rules/no-multiple-template-root.md) | 禁止template出现多个根元素 |Done|
| Draft | [san/no-parsing-error](./rules/no-parsing-error.md) | 禁止template语法解析错误 | Done |
| Draft | [san/no-reserved-keys](./rules/no-reserved-keys.md) | 禁止覆写保留关键字 | Done |
| Draft | [san/no-shared-component-data](./rules/no-shared-component-data.md) | 禁止组件实例共享data, initData必须为返回有效值的函数 | Done |
| Draft | [san/no-side-effects-in-computed-properties](./rules/no-side-effects-in-computed-properties.md) | 禁止有副作用的计算数据方法 | Done |
| Draft | [san/no-template-key](./rules/no-template-key.md) | 禁止`<template>`使用属性 | Done |
| Draft | [san/no-textarea-mustache](./rules/no-textarea-mustache.md) | 禁止`<textarea>`使用插值 | Done |
| Draft | [san/no-unused-components](./rules/no-unused-components.md) | 报告`template`未使用的组件 | Done |
| Draft | [san/no-unused-vars](./rules/no-unused-vars.md) | 禁止s-for指令有未使用的变量定义 | Done |
| Draft | [san/no-use-v-if-with-v-for](./rules/no-use-v-if-with-v-for.md) | 禁止同时使用s-if和s-for指令 | Done |
| Draft | [san/return-in-computed-property](./rules/return-in-computed-property.md) | 强制计算数据方法提供返回值 | Done |
| Draft | [san/valid-template-root](./rules/valid-template-root.md) | 禁止无效模板根节点 | Done |
| Draft | [san/valid-s-else-if](./rules/valid-s-else-if.md) | 正确使用`s-else-if`  | Done |
| Draft | [san/valid-s-else](./rules/valid-s-else.md) | 正确使用`s-else` | Done |
| Draft | [san/valid-s-for](./rules/valid-s-for.md) | 正确使用`s-for` | Done |
| Draft | [san/valid-s-if](./rules/valid-s-if.md) | 正确使用`s-if` | Done |
| Draft | [san/valid-s-show](./rules/valid-s-show.md) | 正确使用`s-show` | Done |

### 强烈推荐(strongly-recommended)

使用以下配置，执行本章规则，并覆盖上级规则：

```json
{
  "extends": "plugin:san/strongly-recommended"
}
```

|状态| Rule ID | 详情 | 进展 |
|:---|:------------|:------------|:---|
| Draft | [san/attribute-hyphenation](./rules/attribute-hyphenation.md) | 强制模板属性命名 |Done|
| Draft | [san/html-closing-bracket-newline](./rules/html-closing-bracket-newline.md) | 强制右尖括号`>`换行 |Done|
| Draft | [san/html-closing-bracket-spacing](./rules/html-closing-bracket-spacing.md) | 强制右尖括号`>`前统一空格 |Done|
| Draft | [san/html-end-tags](./rules/html-end-tags.md) | 强制模板标签命名 |Done|
| Draft | [san/html-indent](./rules/html-indent.md) | 强制模板缩进 |Done|
| Draft | [san/html-quotes](./rules/html-quotes.md) | 属性引号的使用 | Done |
| Draft | [san/html-self-closing](./rules/html-self-closing.md) | 强制模板标签自闭合 |Done|
| Draft | [san/max-attributes-per-line](./rules/max-attributes-per-line.md) | 强制单行最大属性数量 |Done|
| Draft | [san/multiline-html-element-content-newline](./rules/multiline-html-element-content-newline.md) | 强制多行内容换行 |Done|
| Draft | [san/mustache-interpolation-spacing](./rules/mustache-interpolation-spacing.md) | 强制插值内无空白 |Done|
| Draft | [san/no-multi-spaces](./rules/no-multi-spaces.md) | 禁止多余的空格 |Done|
| Draft | [san/no-spaces-around-equal-signs-in-attribute](./rules/no-spaces-around-equal-signs-in-attribute.md) | 禁止属性中等号前后空格 |Done|
| Draft | [san/no-template-shadow](./rules/no-template-shadow.md) | 禁止template中变量声明冲突（s-for） |Done|
| Draft | [san/one-component-per-file](./rules/one-component-per-file.md) | 禁止在单文件定义多组件 |Done|
| Draft | [san/singleline-html-element-content-newline](./rules/singleline-html-element-content-newline.md) | 强制单行元素执行换行符 |Done|

### 推荐(recommended)

使用以下配置，执行本章规则，并覆盖上级规则：

```json
{
  "extends": "plugin:san/recommended"
}
```

|状态| Rule ID | 详情 | 进展 |
|:---|:------------|:------------|:---|
| Draft | [san/attributes-order](./rules/attributes-order.md) | 模板属性声明顺序 | Done |
| Draft | [san/component-tags-order](./rules/component-tags-order.md) | 强制组件顶层元素的顺序 | Done |
| Draft | [san/no-lone-template](./rules/no-lone-template.md) | 禁止无用的`<template>` | Done |
| Draft | [san/order-in-components](./rules/order-in-components.md) | 组件属性声明顺序 | Done |
| Draft | [san/this-in-template](./rules/this-in-template.md) | 禁止template使用`this` | Done |

