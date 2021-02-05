# User Guide

## :cd: Installation

Via [npm](https://www.npmjs.com/):

```bash
npm install --save-dev eslint eslint-plugin-san
```

Via [yarn](https://yarnpkg.com/):

```bash
yarn add -D eslint eslint-plugin-san
```

::: tip Requirements

- ESLint v6.2.0 and above
- Node.js v8.10.0 and above

:::

## :book: Usage

### Configuration

Use `.eslintrc.*` file to configure rules. See also: [https://eslint.org/docs/user-guide/configuring](https://eslint.org/docs/user-guide/configuring).

Example **.eslintrc.js**:

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

See [the rule list](../rules/README.md) to get the `extends` &amp; `rules` that this plugin provides.

#### Bundle Configurations

This plugin provides some predefined configs.
You can use the following configs by adding them to `extends`.

- `"plugin:san/base"` ... Settings and rules to enable correct ESLint parsing.
- `"plugin:san/essential"` ... `base`, plus rules to prevent errors or unintended behavior.
- `"plugin:san/strongly-recommended"` ... Above, plus rules to considerably improve code readability and/or dev experience.
- `"plugin:san/recommended"` ... Above, plus rules to enforce subjective community defaults to ensure consistency

:::warning Reporting rules
By default all rules from **base** and **essential** categories report ESLint errors. Other rules - because they're not covering potential bugs in the application - report warnings. What does it mean? By default - nothing, but if you want - you can set up a threshold and break the build after a certain amount of warnings, instead of any. More information [here](https://eslint.org/docs/user-guide/command-line-interface#handling-warnings).
:::

### Running ESLint from the command line

If you want to run `eslint` from the command line, make sure you include the `.san` extension using [the `--ext` option](https://eslint.org/docs/user-guide/configuring#specifying-target-files-to-lint) or a glob pattern, because ESLint targets only `.js` files by default.

Examples:

```bash
eslint --ext .js,.san src
eslint "src/**/*.{js,san}"
```

::: tip
If you installed [@san/cli-plugin-eslint](https://github.com/ecomfe/san-cli/tree/dev/packages/%40san/cli-plugin-eslint), you should have the `lint` script added to your `package.json`. That means you can just run `yarn lint` or `npm run lint`.
:::

### How to use a custom parser?

If you want to use custom parsers such as [babel-eslint](https://www.npmjs.com/package/babel-eslint) or [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser), you have to use the `parserOptions.parser` option instead of the `parser` option. Because this plugin requires [san-eslint-parser](https://www.npmjs.com/package/san-eslint-parser) to parse `.san` files, this plugin doesn't work if you overwrite the `parser` option.

```diff
- "parser": "babel-eslint",
+ "parser": "san-eslint-parser",
  "parserOptions": {
+     "parser": "babel-eslint",
      "sourceType": "module"
  }
```

### How does ESLint detect components?

All component-related rules are applied to code that passes any of the following checks:

- `export default {}` in `.san` or `.js` file

However, if you want to take advantage of the rules in any of your custom objects that are San components, you might need to use the special comment `// @san/component` that marks an object in the next line as a San component in any file, e.g.:

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

### Disabling rules via `<!-- eslint-disable -->`

You can use `<!-- eslint-disable -->`-like HTML comments in the `<template>` and in the block level of `.san` files to disable a certain rule temporarily.

For example:

```vue
<template>
  <!-- eslint-disable-next-line san/max-attributes-per-line -->
  <div a="1" b="2" c="3" d="4">
  </div>
</template>
```

If you want to disallow `eslint-disable` functionality in `<template>`, disable the [san/comment-directive](../rules/comment-directive.md) rule.

## :computer: Editor integrations

### Visual Studio Code

Use the [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension that Microsoft provides officially.

You have to configure the `eslint.validate` option of the extension to check `.san` files, because the extension targets only `*.js` files by default.

Example **.vscode/settings.json**:

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

Use Package Control to install **SublimeLinter** and its ESLint extension **[SublimeLinter-eslint](https://github.com/SublimeLinter/SublimeLinter-eslint)**.

In the menu go to `Preferences > Package Settings > SublimeLinter > Settings` and paste in this:

```json
{
  "linters": {
    "eslint": {
      "selector": "text.html.san, source.js - meta.attribute-with-value"
    }
  }
}
```

### Atom editor

Go into `Settings -> Packages -> linter-eslint`, under the option "List of scopes to run eslint on", add `text.html.san`. You may need to restart Atom.

### IntelliJ IDEA / JetBrains WebStorm

In the **Settings/Preferences** dialog (`Cmd+,`/`Ctrl+Alt+S`), choose JavaScript under **Languages and Frameworks** and then choose **ESLint** under **Code Quality Tools**.
On the **ESLint page** that opens, select the *Enable* checkbox.

If your ESLint configuration is updated (manually or from your version control), open it in the editor and choose **Apply ESLint Code Style Rules** in the context menu.

read more: [JetBrains - ESLint](https://www.jetbrains.com/help/idea/eslint.html)

## :question: FAQ

### What is the "Use the latest san-eslint-parser" error?

Most `eslint-plugin-san` rules require `san-eslint-parser` to check `<template>` ASTs.

Make sure you have one of the following settings in your **.eslintrc**:

- `"extends": ["plugin:san/base"]`

If you already use another parser (e.g. `"parser": "babel-eslint"`), please move it into `parserOptions`, so it doesn't collide with the `san-eslint-parser` used by this plugin's configuration:

```diff
- "parser": "babel-eslint",
+ "parser": "san-eslint-parser",
  "parserOptions": {
+     "parser": "babel-eslint",
      "ecmaVersion": 2020,
      "sourceType": "module"
  }
```

See also: "[How to use a custom parser?](#how-to-use-a-custom-parser)" section.

### Why doesn't it work on .san files?

1. Make sure you don't have `eslint-plugin-html` in your config. The `eslint-plugin-html` extracts the content from `<script>` tags, but `eslint-plugin-san` requires `<script>` tags and `<template>` tags in order to distinguish template and script in single file components.

  ```diff
    "plugins": [
      "san",
  -   "html"
    ]
  ```

2. Make sure your tool is set to lint `.san` files.
  - CLI targets only `.js` files by default. You have to specify additional extensions with the `--ext` option or glob patterns. E.g. `eslint "src/**/*.{js,san}"` or `eslint src --ext .san`. If you use `@san/cli-plugin-eslint` and the `san-cli-service lint` command - you don't have to worry about it.
  - If you are having issues with configuring editor, please read [editor integrations](#editor-integrations)

### Conflict with [Prettier]

If the [Prettier] conflicts with the shareable config provided by this plugin, use [eslint-config-prettier] to resolve it.

Example **.eslintrc.js**:

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

If the [Prettier] conflicts with the rule you have set, turn off that rule.

Example **.eslintrc.js**:

When the `san/html-indent` rule conflict with [Prettier].

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

### Trouble with Visual Studio Code

- Turning off the rule in the ESLint configuration file does not ignore the warning.
- Using the `<!-- eslint-disable -->` comment does not suppress warnings.
- Duplicate warnings are displayed.
- Used `babel-eslint`, but the template still show `san/no-parsing-error` warnings.