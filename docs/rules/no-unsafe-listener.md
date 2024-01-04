---
pageClass: rule-details
sidebarDepth: 0
title: san/no-unsafe-listener
description: disallow unsafe eventListener
---
# san/no-unsafe-listener
> 禁止 addEventListener 监听器使用匿名函数，禁止未释放的 addEventListener

- :gear: 此规则包含于 `"plugin:san/recommended"`.

## :book: 规则细节

此规则会检测未释放的 addEventListener，并且会检测 addEventListener 使用匿名函数。

```typescript
/* ✗ BAD */
export default {
    attached() {
        /* ✗ BAD */
        addEventListener('click', click());
        /* ✗ BAD */
        addEventListener('test', () => {});
        /* ✗ BAD */
        addEventListener('anything', function() {});
    }
    initData() {
        return {
        foo: null
        }
    }
    foo () {}
}
```

```typescript
/* ✓ GOOD */
const scroll = () => {}

export default {
    attached() {
        addEventListener('scroll', scroll);

        addEventListener('foo', this.foo);
    }
    initData() {
        return {
        foo: null
        }
    },
    detached() {
        removeEventListener('scroll', scroll);
        removeEventListener('foo', this.foo);
    }

    foo () {}
}
```

## :wrench: 配置
暂无

## :mag: 实现

- [规则源码](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/no-unsafe-listener.js)
- [测试用例](https://github.com/ecomfe/eslint-plugin-san/blob/main/__tests__/lib/rules/no-unsafe-listener.test.js)
