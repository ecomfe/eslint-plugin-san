# eslint-plugin-san

> Official ESLint plugin for San. Inspired by [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-san`:

```
$ npm install eslint-plugin-san --save-dev
```


## Usage

Add `san` to the plugins section of your `.eslintrc` configuration file.

```json
{
    "extends": ["plugin:san/essential"],
    "parserOptions": {
        "parser": "babel-eslint"
    }
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "san/rule-name": 2
    }
}
```

### Supported on `VS Code`
On VS Code using [ESlint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to support.
By default, Eslint extension is NOT support San, you shoud config `eslint.validate` option like this in `settings.json`:

```json
{
    "eslint.validate": [
        "san"
    ]
}
```


## Supported Rules

* Fill in provided rules here





