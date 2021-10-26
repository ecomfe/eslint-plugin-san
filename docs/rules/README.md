# eslint-plugin-san

> San 官方 ESlint 插件

## 安装

首先你需要安装 [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

然后, 安装 `eslint-plugin-san`:

```
$ npm install eslint-plugin-san --save-dev
```


## 使用

将`san`添加到`.eslintrc`配置文件的插件部分。

```json
{
    "extends": ["plugin:san/essential"],
    "parserOptions": {
        "parser": "babel-eslint"
    }
}
```


然后在规则部分配置您要使用的规则。

```json
{
    "rules": {
        "san/rule-name": 2
    }
}
```

###  支持 `VS Code` 
在 VS Code 上使用 [ESlint 扩展](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)来支持。 默认情况下，Eslint 扩展不支持 San，你应该在 settings.json 中像这样配置 eslint.validate 选项：

```json
{
    "eslint.validate": [
        "san"
    ]
}
```


## 支持的规则

* 详情请查看文档





