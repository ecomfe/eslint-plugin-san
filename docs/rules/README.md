---
sidebarDepth: 0
---
# San Spec 设计


## 规范

### 必要

使用以下配置，执行本章规则：

```json
{
  "extends": "plugin:san/essential"
}
```

|状态| Rule ID | Description |
|:--------|:------------|
| Draft | [san/no-async-in-computed-properties](./no-async-in-computed-properties.md) | 禁止计算数据方法有异步操作 |
| Draft | [san/no-dupe-keys](./no-dupe-keys.md) | 禁止数据项和计算数据重名 |
| Draft | [san/no-duplicate-attributes](./no-duplicate-attributes.md) | 禁止属性名重复 |
| Draft | [san/no-parsing-error](./no-parsing-error.md) | 禁止template语法解析错误 |  parser's job
| Draft | [san/no-reserved-keys](./no-reserved-keys.md) | 禁止覆写保留关键字 |   ？
| Draft | [san/no-shared-component-data](./no-shared-component-data.md) | 禁止组件实例共享data, initData必须为返回有效值的函数 | done
| Draft | [san/no-side-effects-in-computed-properties](./no-side-effects-in-computed-properties.md) | 禁止有副作用的计算数据方法 | done
| Draft |[san/no-textarea-mustache](./no-textarea-mustache.md) | 禁止`<textarea>`使用插值 |  done
| Draft | [san/return-in-computed-property](./return-in-computed-property.md) | 强制计算数据方法提供返回值 | done
| Draft | [san/valid-template-root](./valid-template-root.md) | 禁止无效模板根节点 | done
| Draft | [san/valid-s-html](./valid-s-html.md) | 正确使用`s-html` | done
| Draft | [san/valid-s-if](./valid-s-if.md) | 正确使用`s-if` | done
| Draft | [san/valid-s-elif](./valid-s-elif.md) | 正确使用`s-elif`  |  done
| Draft | [san/valid-s-else](./valid-s-else.md) | 正确使用`s-else` | done



| Draft | [san/no-template-key](./no-template-key.md) | 禁止`<template>`使用属性 |  ? 应该是属性和指令都没有
| Draft | [san/valid-on](./valid-on.md) | 正确使用`on` | done (依赖parser解析)
| Draft | [san/valid-twoway-binding](./valid-twoway-binding.md) | 强制双向绑定使用正确表达式 | done (依赖parser解析)
| Draft | [san/valid-s-for](./valid-s-for.md) | 正确使用`s-for` | done
| Draft | [san/no-unused-vars](./no-unused-vars.md) | 禁止s-for指令有未使用的变量定义 | (依赖parser解析s-for, s-for语法与v-for语法不同)
| Draft | [san/require-valid-default-prop](./require-valid-default-prop.md) | 强制属性默认值类型与属性类型一致 |  San的数据类型校验机制和Vue不一样，默认值通过initData给的，所以不用去掉？

### 强烈推荐

使用以下配置，执行本章规则，并覆盖上级规则：

```json
{
  "extends": "plugin:san/strongly-recommended"
}
```

|状态    | Rule ID | 详情 |
|:---|:--------|:------------|
| Draft | [san/attribute-hyphenation](./attribute-hyphenation.md) | 强制模板属性命名 |  改成camelCase？
| Draft | [san/html-end-tags](./html-end-tags.md) | 强制模板标签命名 | 不需要改
| Draft | [san/html-self-closing](./html-self-closing.md) | 强制模板标签自闭合 |  不需要改
| Draft | [san/html-indent](./html-indent.md) | 强制模板缩进 |  把selector改下
| Draft | [san/max-attributes-per-line](./max-attributes-per-line.md) | 强制单行最大属性数量 | done
| Draft | [san/mustache-interpolation-spacing](./mustache-interpolation-spacing.md) | 强制插值内无空白 | done
| Draft | [san/no-multi-spaces](./no-multi-spaces.md) | 禁止多余的空格 | 不需要改
| Draft | [san/name-property-casing](./name-property-casing.md) | 组件名称大小写 | ?parser会将大写component name转成小写的，FooBar -> foobar


| ？ 转推荐  | [san/require-default-prop](./require-default-prop.md) | 需要定义属性默认值 |
| ？ 转推荐 | [san/require-prop-types](./require-prop-types.md) | 需要定义属性默认类型 |

### 推荐

使用以下配置，执行本章规则，并覆盖上级规则：

```json
{
  "extends": "plugin:san/recommended"
}
```

|状态    | Rule ID | 详情 |
|:---|:--------|:------------|
| Draft | [san/html-quotes](./html-quotes.md) | 属性引号的使用 |  不需要修改
| Draft | [san/order-in-components](./order-in-components.md) | 组件属性声明顺序 |  done
| Draft | [san/no-confusing-s-for-s-if](./no-confusing-v-for-v-if.md) | 在一个元素上 不应该同时定义 `s-for` 和 `s-if` | done
| Draft | [san/attributes-order](./attributes-order.md) | 模板属性声明顺序 |  done  // 需要parse识别model(双绑)和bind(单绑)


| Draft | [san/data-method-in-components](./data-method-in-components.md) | 使用数据操作方法，禁止引用操作或拷贝覆盖 |

## 实现

### eslint-plugin-san

### fecs

