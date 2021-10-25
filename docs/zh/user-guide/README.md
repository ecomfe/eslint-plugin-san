# 用户指南

## :cd: 安装

通过 [npm](https://www.npmjs.com/):

```bash
npm install --save-dev eslint eslint-plugin-san
```

通过 [yarn](https://yarnpkg.com/):

```bash
yarn add -D eslint eslint-plugin-san
```

::: tip 要求

- ESLint v6.2.0 及以上
- Node.js v8.10.0 及以上

:::

## :book: 用法

### 配置

使用 `.eslintrc.*` 文件来配置规则。可以参考: [https://eslint.org/docs/user-guide/configuring](https://eslint.org/docs/user-guide/configuring).

例子 **.eslintrc.js**:

```js
module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:san/recommended'
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'san/no-unused-vars': 'error'
  }
}
```

请查看 [规则列表](../rules/README.md) 来获取插件所提供的 `extends` 和 `rules` 。

#### 预定义配置

这个插件提供了一些预定义的配置。你可以通过将以下配置添加到`extends`来使用它们。

- `"plugin:san/base"` ... 能够使 Eslint 正确解析的设置和规则。
- `"plugin:san/essential"` ...在 `base`基础上加上避免错误或意外行为的规则。
- `"plugin:san/strongly-recommended"` ... 在以上两种规则集的基础上添加提高代码可读性和开发经验的规则。
- `"plugin:san/recommended"` ... 在以上三种规则集的基础上添加社区主观上默认的规则以确保代码平滑性。

:::warning 规则报告
默认情况下，**base** 和 **essential** 中的所有规则都会报告 ESLint 的 **errors**。而其他规则因为它们不能引起应用程序中的错误，将只会报告 **warnings**。默认情况如果没有出现错误（只有警告），它将以成功的状态退出，但如果你愿意，你可以设置一个阈值并在出现一定数量的 **warnings** 后以错误的状态退出。更多可点击 [这里](https://eslint.org/docs/user-guide/command-line-interface#handling-warnings).
:::

### 从命令行运行 ESLint

如果你想从命令行运行 `eslint` , 请确保使用 [--ext](https://eslint.org/docs/user-guide/configuring#specifying-target-files-to-lint) 或者`glob pattern`时包含`.san` 扩展名，因为默认情况下 ESLint 仅针对 `.js` 文件。

例子:

```bash
eslint --ext .js,.san src
eslint "src/**/*.{js,san}"
```

::: tip
如果你安装了 [@san/cli-plugin-eslint](https://github.com/ecomfe/san-cli/tree/dev/packages/%40san/cli-plugin-eslint), 你应该将 `lint` 脚本添加到你的 `package.json` 中。 这意味着你可以运行 `yarn lint` 或 `npm run lint`。
:::

### 如何使用自定义解析器？

如果你想使用自定义解析器，例如 [babel-eslint](https://www.npmjs.com/package/babel-eslint) 或 @typescript-eslint/parser，你必须使用 `parserOptions.parser` 选项而不是 `parser` 选项。 因为 eslint-plugin-san 需要[san-eslint-parser](https://www.npmjs.com/package/san-eslint-parser)来解析`.san`文件，如果你覆盖了`parser`，这个插件就不起作用了。

```diff
- "parser": "babel-eslint",
+ "parser": "san-eslint-parser",
  "parseOptions": {
+     "parser": "babel-eslint",
      "sourceType": "module"
  }
```

### ESLint 如何检测组件？

默认情况下，所有与组件相关的规则都应用于以下形式的组件代码：

- `export default {}` and `san.defineComponent({})` in `.san/.js/.ts` file
- `static template` and `template: '...'` in `.san/.js/.ts` file

但是，如果自定义了San 组件对象，这时你想使用规则，可能需要使用特殊注释 `// @san/component` 将下一行中的对象标记为 San 组件，例如：

```js
// @san/component
const CustomComponent = {
  template: '<div></div>'
}
```

```js
export default class UINoticeBar extends san.Component {
    initData() {
        return {
            a: 1
        }
    }
}
```

另外，如果你想忽略模板检查，你可以使用 `/* eslint-disable */` 和 `/* eslint-enable */` 块来包装 `template` 代码块，例如：
```js
// @san/component
export default class A {
    /* eslint-disable */
    static template = `
        <div>${template}</div><div>
    </div>`;
    /* eslint-enable */
    initData() {
        return {
            a: 1
        }
    }
    static computed = {
        a() {
            return 3;
        }
    };
}

```

### 通过 `<!-- eslint-disable -->` 禁用规则

你可以在 `<template>` 和 `.san` 文件的块级元素使用 `<!-- eslint-disable -->` 类HTML 注释的方式来暂时禁用某个规则。

举个例子:

```html
<template>
  <!-- eslint-disable-next-line san/max-attributes-per-line -->
  <div a="1" b="2" c="3" d="4">
  </div>
</template>
```

如果您想在 `<template>`中禁用 eslint-disable 功能，请禁用 [san/comment-directive](../rules/comment-directive.md) 规则。 

## :computer: 编辑器集成

### Visual Studio Code

使用微软官方提供的 [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 扩展。

你必须配置扩展的 `eslint.validate` 选项来检查 `.san` 文件，因为扩展默认只针对 `*.js` 文件。

例子 **.vscode/settings.json**:

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "san"
  ]
}
```

### Sublime Text

使用 Package Control 安装 **SublimeLinter** 及其 ESLint 扩展 [SublimeLinter-eslint](https://github.com/SublimeLinter/SublimeLinter-eslint)。

在菜单中转到`Preferences > Package Settings > SublimeLinter > Settings` 并粘贴：

```json
{
  "linters": {
    "eslint": {
      "selector": "text.html.san, source.js - meta.attribute-with-value"
    }
  }
}
```

### Atom 编辑器

进入`Settings -> Packages -> linter-eslint`，在 "List of scopes to run eslint on" 选项下，添加`text.html.san`。 您可能需要重新启动 Atom。

### IntelliJ IDEA / JetBrains WebStorm

在 **Settings/Preferences** 对话框中 (`Cmd+,`/`Ctrl+Alt+S`), 在 **Languages and Frameworks** 中选择 JavaScript 然后在 **Code Quality Tools** 中 选择 **ESLint**。在打开的 **ESLint page** 中, 选择 *Enable* 复选框.

如果您的 ESLint 配置已更新（手动或从您的版本控制），请在编辑器中打开它并在上下文菜单中选择 **Apply ESLint Code Style Rules**。

了解更多: [JetBrains - ESLint](https://www.jetbrains.com/help/idea/eslint.html)

## :question: 常见问题

### "Use the latest san-eslint-parser" 错误是什么？

大多数 `eslint-plugin-san` 规则要求使用 `san-eslint-parser` 来解析 `<template>` 抽象语法树。

确保您的 **.eslintrc** 中有以下设置之一：

- `"extends": ["plugin:san/base"]`

如果你已经使用了另一个解析器（例如 `"parser": "babel-eslint"`），请将它移到 `parseOptions` 中，这样它就不会与这个插件配置使用的 `san-eslint-parser` 冲突：

```diff
- "parser": "babel-eslint",
+ "parser": "san-eslint-parser",
  "parseOptions": {
+     "parser": "babel-eslint",
      "ecmaVersion": 2020,
      "sourceType": "module"
  }
```

另请参阅："[如何使用自定义解析器？](#如何使用自定义解析器)"部分。

### 为什么规则在 .san 文件中不生效？

1. 确保你的配置中没有 `eslint-plugin-html`。 `eslint-plugin-html` 从 `<script>` 标签中提取内容，但 `eslint-plugin-san` 需要 `<script>` 标签和 `<template>` 标签，以便在单文件组件中区分 template 和 script。

  ```diff
    "plugins": [
      "san",
  -   "html"
    ]
  ```

2. 确保你的工具设置了检测 `.san` 文件。
  - 默认情况下，CLI 仅针对 `.js` 文件。 您必须使用 `--ext` 选项或 glob pattern 指定其他扩展名。 例如。 `eslint "src/**/*.{js,san}"` 或 `eslint src --ext .san`。 如果你使用 `@san/cli-plugin-eslint` 和 `san-cli-service lint` 命令那么你不必担心它。
  - 如果您在配置编辑器时遇到问题，请阅读 [编辑器集成](#编辑器集成)

### 与 [Prettier] 冲突

如果 Prettier 与此插件提供的可共享配置冲突，请使用 [eslint-config-prettier] 解决。

例子 **.eslintrc.js**:

```js
module.exports = {
  // ...
  extends: [
    // ...
    // 'eslint:recommended',
    // ...
    'plugin:san/recommended',
    // ...
    "prettier",
    "prettier/san",
    // "prettier/@typescript-eslint", // required if you are using @typescript-eslint.
    // Other settings may be required depending on the plugin you are using. See the eslint-config-prettier documentation for more details.
  ],
  // ...
}
```

如果 [Prettier] 与你设置的规则冲突，请关闭该规则。

例子 **.eslintrc.js**:

 `san/html-indent` 规则与 [Prettier]() 冲突的情况。

```diff
module.exports = {
  // ...
  rules: {
    // ...
-    "san/html-indent": "error",
+    "san/html-indent": "off",
    // ...
  },
  // ...
}
```

[prettier]: https://prettier.io/
[eslint-config-prettier]: https://github.com/prettier/eslint-config-prettier

### Visual Studio Code 中的一些问题

- 关闭 ESLint 配置文件中的规则不会忽略警告。
- 使用 `<!-- eslint-disable -->` 注释不会限制警告。
- 警告重复显示。
- 使用了 `babel-eslint`，但模板仍然显示 `san/no-parsing-error` 警告。