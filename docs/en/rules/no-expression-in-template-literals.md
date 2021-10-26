---
pageClass: rule-details
sidebarDepth: 0
title: san/no-expression-in-template-literals
description: disallow expression in the template in template literals
---
# san/no-expression-in-template-literals
> disallow expression in the template in template literals

- :gear: This rule is included in `"plugin:san/recommended"`.

## :book: Rule Details

disallow expression in the template in template literals

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

## :wrench: Options
nothing

## :mag: Implementation

- [Rule source](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/no-expression-in-template-literals.js)
