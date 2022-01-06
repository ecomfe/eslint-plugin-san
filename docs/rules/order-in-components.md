---
pageClass: rule-details
sidebarDepth: 0
title: san/order-in-components
description: enforce order of properties in components
---
# san/order-in-components
> 要求组件中属性的顺序

- :gear: 此规则包含于 `"plugin:san/recommended"`.
- :wrench: [命令行](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems)中的`--fix`选项可以自动修复此规则报告的一些问题。

## :book: 规则细节

此规则会检查组件中属性的声明顺序。

<eslint-code-block fix :rules="{'san/order-in-components': ['error']}">

```html
<script>
/* ✓ GOOD */
export default {
  dataTypes: {
    name: DataTypes.string
  },

  initData () {
    return {
      msg: 'Welcome to Your San App'
    }
  }
}
</script>
```

</eslint-code-block>

<eslint-code-block fix :rules="{'san/order-in-components': ['error']}">

```html
<script>
/* ✗ BAD */
export default {
  initData () {
    return {
      msg: 'Welcome to Your San App'
    }
  },

  dataTypes: {
    name: DataTypes.string
  }
}
</script>
```

</eslint-code-block>

## :wrench: 配置

```json
{
  "san/order-in-components": ["error", {
    "order": [
      // 视图
      "template",
      "components",
      "trimWhitespace",

      // 事件
      "messages",

      // 数据
      "dataTypes",
      "computed",
      "filters",
      "initData",

      // 生命周期
      "LIFECYCLE_HOOKS",
      // 其他函数方法
      // "OTHER_METHODS"
    ]
  }]
}
```

* `order` (`(string | string[])[]`) ... 属性的顺序。 元素可以是以下：

  * `LIFECYCLE_HOOKS` [San 生命周期]()，按照它们被调用的顺序

  如果一个元素是一个字符串数组，这意味着其中任何一个都可以无序放置。

在上面的配置中，`order` 数组中每一项中间可以添加任何方法，但是如果你不想让每一项之间插入其他方法，并且其他所有方法应该放到生命周期函数即 `LIFECYCLE_HOOKS` 后面。那么你可以这样配置：
```json
{
  "san/order-in-components": ["error", {
    "order": [
      // 视图
      "template",
      "components",
      "trimWhitespace",

      // 事件
      "messages",

      // 数据
      "dataTypes",
      "computed",
      "filters",
      "initData",

      // 生命周期
      "LIFECYCLE_HOOKS",
      // 其他函数方法
      "OTHER_METHODS"
    ]
  }]
}
```
那么下面的代码会报错:

<eslint-code-block 
  fix 
  :rules="{
    'san/order-in-components':
      [
        'error', 
            "order": [
              "template",
              "components",
              "trimWhitespace",
              "messages",
              "dataTypes",
              "computed",
              "filters",
              "initData",
              "LIFECYCLE_HOOKS",
              "OTHER_METHODS"
            ]
      ]}"
>

```html
<script>
/* ✗ BAD */
export default {
  custom2() {

  },
  initData () {
    return {
      msg: 'Welcome to Your San App'
    }
  },

  dataTypes: {
    name: DataTypes.string
  }
}
</script>
```

</eslint-code-block>

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/order-in-components.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/order-in-components.test.js)

[San 生命周期]: https://baidu.github.io/san/tutorial/component/#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F

