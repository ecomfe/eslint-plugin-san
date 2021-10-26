---
pageClass: rule-details
sidebarDepth: 0
title: san/no-expression-in-template-literals
description: disallow expression in the template in template literals
---
# san/no-expression-in-template-literals
> 不允许在 template 中使用 template 表达式

- :gear: 此规则包含于 `"plugin:san/recommended"`.

## :book: 规则细节

不允许在 template 中使用 template 表达式

```typescript
// GOOD
export class B {
    static template = `
        <div>2</div>
    `;
}

san.defineComponent({
  template: `
      <div>1</div>
  `,
})

// BAD
san.defineComponent({
    template: `
        <div>${template}</div>
    `,
})

// @san/component
export class A {
    static template = `
        <div>${template}</div>
    `;
}

export default {
    template: `
        <div>${template}</div>
    `,
}
```

## :wrench: 配置
暂无。

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/no-expression-in-template-literals.js)
