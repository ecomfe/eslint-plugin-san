# San 代码规范

[TOC]

## 1 前言

任何问题或建议，欢迎跟我们讨论: [fe-styleguide@baidu.com](mailto:fe-styleguide@baidu.com)

## 2 代码风格

### 2.1 模块书写顺序

#### [建议] `template` -> `script` -> `style`

## 3 template 部分

### 3.1 根节点

#### [强制] `template` 根节点只允许包含一个直接子节点，以下情况都是不允许的：

* 根结点为空；
* 根结点是文字；
* 根结点有多个元素；
* 在根结点使用循环；
* 在根结点使用 template 和 slot；

```html
// bad
<template></template>
<template>hello</template>
<template><div>one</div><div>two</div></template>
<template><div s-for="x in list"></div></template>
<template><template>hello</template></template>

// good
<template><div>one</div></template>
```

### 3.2 标签

#### [强制] 自定义组件的标签名不得使用 HTML 中预留的标签（reserved HTML elements）；并且要求至少由两个单词组成，符合 `kebab-case`

解释：

避免和 HTML 保留字段冲突导致错误。

```html
// bad
<template>
    <sub/>
</template>

<script>
import OtherComponent from './OtherComponent.san';

export default {
    components: {
        sub: OtherComponent
    }
}
</script>

// good
<template>
    <other-component/>
</template>

<script>
import OtherComponent from './OtherComponent.san';

export default {
    components: {
        OtherComponent
    }
}
</script>

// bad
<component/>
<mycomponent/>
<myComponent/>
<MyComponent/>

// good
<my-component/>
```

> 预留的 html 标签包括：

> `html`,`body`,`base`,`head`,`link`,`meta`,`style`,`title`,`address`,`article`,`aside`,`footer`,`header`,`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`hgroup`,`nav`,`section`,`div`,`dd`,`dl`,`dt`,`figcaption`,`figure`,`picture`,`hr`,`img`,`li`,`main`,`ol`,`p`,`pre`,`ul`,`a`,`b`,`abbr`,`bdi`,`bdo`,`br`,`cite`,`code`,`data`,`dfn`,`em`,`i`,`kbd`,`mark`,`q`,`rp`,`rt`,`rtc`,`ruby`,`s`,`samp`,`small`,`span`,`strong`,`sub`,`sup`,`time`,`u`,`var`,`wbr`,`area`,`audio`,`map`,`track`,`video`,`embed`,`object`,`param`,`source`,`canvas`,`script`,`noscript`,`del`,`ins`,`caption`,`col`,`colgroup`,`table`,`thead`,`tbody`,`td`,`th`,`tr`,`button`,`datalist`,`fieldset`,`form`,`input`,`label`,`legend`,`meter`,`optgroup`,`option`,`output`,`progress`,`select`,`textarea`,`details`,`dialog`,`menu`,`menuitem`,`summary`,`content`,`element`,`shadow`,`template`,`blockquote`,`iframe`,`tfoot`；

> 预留的 SVG 标签包括：

> `svg`,`animate`,`circle`,`clippath`,`cursor`,`defs`,`desc`,`ellipse`,`filter`,`font-face`,`foreignObject`,`g`,`glyph`,`image`,`line`,`marker`,`mask`,`missing-glyph`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`switch`,`symbol`,`text`,`textpath`,`tspan`,`use`,`view`

#### [强制] [HTML Void Element](https://www.w3.org/TR/html51/syntax.html#void-elements) 不需要闭合，其它类型标签都需要闭合

```html
// bad
<input></input>
<br></br>

// good
<input>
<br>
```

#### [强制] `fragment`标签或者非根结点的 `template` 标签，必须有一个以上的子结点

```html
// bad
<ul>
    <template>
        <li></li>
    </template>
</ul>

// good
<ul>
    <li></li>
</ul>

// good
<ul>
    <template>
        <li></li>
        <li></li>
    </template>
</ul>
```

#### [强制] 如果自定义标签中没有内容，需要以自闭合标签形式出现

```html
// bad
<c-title url="{{url}}" label-type="{{type}}"></c-title>

// good
<c-title url="{{url}}" label-type="{{type}}"/>
```

#### [强制] 标签右括号 `>` 的位置：

* 元素只有一行时，右括号与元素保持在同一行。
* 多行元素（元素最后一个属性与左括号 `<` 不在同一行）时，右括号 `>` 需要另起一行，缩进与左括号 `<` 保持对齐。

```html
// bad
<div id="foo" class="bar"
></div>

// good
<div id="foo" class="bar"></div>

// bad
<div
    id="foo"
    class="bar">
</div>

// good
<div
    id="foo"
    class="bar"
>
    some message
</div>

// bad
<c-title
    text="{{text}}"
    url="{{url}}"
    label-type="{{type}}"/>

// good
<c-title
    text="{{text}}"
    url="{{url}}"
    label-type="{{type}}"
/>
```


### 3.3 属性

#### [强制] 属性值必须用双引号包围

```html
// bad
<div class='c-color'></div>

// good
<div class="c-color"></div>
```


#### [强制] 模板中的属性命名需要符合 `kebab-case`

```html
// bad
<my-component greetingText="hi"/>

// good
<my-component greeting-text="hi"/>
```


#### [强制] `class` / `style` 属性值不能设置空字符串

```html
// bad
<div class=""></div>
<div style=""></div>

// good
<div></div>
```


#### [建议] 布尔类型的属性值为 `true` 时，建议不添加属性值

```html
// bad
<c-title text="带箭头标题" arrow="{{true}}"/>

// good
<input type="text" disabled>
<c-title text="带箭头标题" arrow/>
<c-title text="带箭头标题" arrow="{{false}}"/>
```


#### [强制] 当组件的属性多于 `2` 个时，必须分成多行，每行写一个属性；只有属性个数小于或等于 `2` 个时，可以写在一行内

```html
// bad
<c-title text="{{text}}" url="{{url}}" label-type="{{type}}"/>

// good
<c-title text="{{text}}" url="{{url}}"/>
<c-title
    text="{{text}}"
    url="{{url}}"
    label-type="{{type}}"
/>
```


#### [建议] 当元素有多个属性时，应该按照统一的顺序书写

优先级顺序：

1. 条件渲染（元素是否渲染/显示）
    - s-if
    - s-else-if / s-elif
    - s-else
2. 列表渲染（创建多个变化的相同元素）
    - s-for
3. 动态组件
    - s-is
4. 全局感知（需要超越组件的知识）
    - id
5. 唯一的特性（需要唯一值的特性）
    - s-ref
    - slot
6. 未绑定的属性
7. 绑定的属性
8. 事件（组件事件监听器）
    - on-
9. 内容（覆写元素的内容）

#### [强制] 不能有重复的属性，包括`class` 和 `style` 

```html
// bad
<c-title foo="abc" foo="{{def}}"/>
<c-title foo="def" foo="abc"/>
<c-title class="def" class="abc"/>
<c-title style="def" style="abc"/>
<c-title
    class="c-color"
    class="{{selected ? 'c-selected' : ''}}"
/>

// good
<c-title foo="{{def}}"/>
<c-title foo="abc"/>
<c-title class="c-color {{selected ? 'c-selected' : ''}}"/>
<c-title
    style="color: #000; width: 100px"
/>
```

#### [建议] `slot` 命名采用 `kebab-case`

```html
<slot name="header-left"></slot>

<div slot="header-left"></div>
```

#### [建议] `ref` 命名采用 `camelCase`

```html
<div s-ref="userInfo"></div>
```

### 3.4 指令

#### [建议] 不要把 `s-if` 和 `s-for` 同时用在同一个元素上

解释：

引入这个规则是为了避免引起困惑。

```html
// bad
<ul>
    <li
        s-for="user in users"
        s-if="user.isActive"
    >
        {{ user.name }}
    </li>
</ul>

// good
<template>
    <ul>
        <li
            s-for="user in activeUsers"
        >
            {{ user.name }}
        </li>
    </ul>
</template>
<script>
export default {
    computed: {
        activeUsers: function () {
            return this.data.get('users').filter(function (user) {
                return user.isActive;
            });
        }
    }
}
</script>
```

### 3.5 插值（Mustache）

#### [建议] 插值左右添加一个空格

```html
// bad
<div>{{   text   }}</div>
<div>{{text}}</div>

// good
<div>{{ text }}</div>
```


### 3.6 空格

#### [强制] 不能有多余空格

```html
// bad
<div     class="foo"
      style="{{bar}}"         >   </div>

// good
<div class="foo" style="{{bar}}"></div>
```


### 3.7 变量

#### [强制] 不能有多余的变量

```html
// bad
<ol><!-- "i" is defined but never used. -->
    <li s-for="i in 5">item</li>
</ol>

// good
<ol>
    <li s-for="i in 5">{{ i }}</li>
</ol>
```


#### [强制] 禁止在插值中使用 `this`

```html
// bad
<a href="{{this.url}}">
    {{ this.text }}
</a>

// good
<a href="{{url}}">
    {{ text }}
</a>
```


## 4 javascript 部分

### 4.1 dataTypes

#### [强制] 在 `dataTypes` 中声明的属性，其属性名应该始终符合 `camelCase`

```html
// bad
<script>
export default {
    dataTypes: {
        'greeting-text': DataTypes.string
    }
};
</script>

// good
<script>
export default {
    dataTypes: {
        greetingText: DataTypes.string
    }
};
</script>
```

#### [建议] 指定 `dataTypes` 类型

```html
// good
<script>
export default {
    dataTypes: {
        status: DataTypes.string
    }
};
```

### 4.2 data

#### [强制] `initData` 必须是一个函数

```html
// bad
<script>
export default {
    initData: {
        b: 1
    }
}
</script>

// good
<script>
export default {
    initData() {
        return {
            b: 1
        };
    }
}
</script>
```


#### [强制] `initData` 中禁止使用 `computed` 中的变量

```html
// bad
<script>
export default {
    dataTypes: {
        a: DataTypes.string
    },

    initData() {
        return {
            d: this.data.get('f')
        };
    },

    computed: {
        f() {
            return this.data.get('a') * 10;
        }
    }
};
</script>
```

#### [强制] `dataTypes`, `initData`, `computed` 中不能有重复的 `key`

```html
// bad
<script>
export default {
    dataTypes: {
        foo: DataTypes.string
    },

    initData() {
        return {
            foo: null
        };
    },

    computed: {
        foo() {
            return 'foo';
        }
    }
}
</script>

// good
<script>
export default {
    dataTypes: {
        foo: DataTypes.string
    },

    data() {
        return {
            bar: null
        };
    },

    computed: {
        baz() {
            return foo + bar;
        }
    }
}
</script>
```

### 4.3 变量

#### [强制] 不能使用 San 中的保留字段命名变量

```html
// bad
<script>
export default {
    dataTypes: {
        el: DataTypes.string
    },

    data() {
        return {
            _foo: null
        };
    },

    computed: {
        fire() {
            return 2;
        }
    },

    nextTick() {
    }
}
</script>
```

### 4.4 其它

#### [建议] 组件中使用 `fire`或`dispatch` 事件时携带的参数，个数不应该超过 `1` 个。建议将数据参数以 `Object` 形式传递

```javascript
// bad
onClick(event) {
    const {value1, value2} = this.data.get();
    this.fire('click', value1, value2, event);
}

// good
onClick(event) {
    const {value1, value2} = this.data.get();
    this.fire(
        'click',
        {
           value1,
           value2,
           event
        }
    );
}

// good
onClick(event) {
   this.fire('click', event);
}
```

## 5 style 部分

#### [建议] 为组件样式设置作用域

```html
<style scoped>
.button {
    border: none;
    border-radius: 2px;
}
</style>
```

## 6 参考

* [ecomfe HTML 编码规范](https://github.com/ecomfe/spec/blob/master/html-style-guide.md)
* [ecomfe JavaScript 编码规范](https://github.com/ecomfe/spec/blob/master/javascript-style-guide.md)
* [ecomfe JavaScript 编码规范 - ESNext 补充篇（草案）](https://github.com/ecomfe/spec/blob/master/es-next-style-guide.md)
* [ecomfe CSS 编码规范](https://github.com/ecomfe/spec/blob/master/css-style-guide.md)
* [ecomfe less 编码规范](https://github.com/ecomfe/spec/blob/master/less-code-style.md)
