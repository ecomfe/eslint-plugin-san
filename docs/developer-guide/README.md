# 开发指南

欢迎贡献代码。

## :bug: Bug 解决

如果你发现了一个 bug，请在 GitHub 上 [创建一个新的issue](https://github.com/ecomfe/eslint-plugin-san/issues/new?labels=&template=bug_report.md) 或者直接提交 pr 。

同时请提供尽可能多的详细信息，以帮助我们正确解决您的问题。 如果我们需要对问题进行分类并了解更多细节，那么就浪费了很多时间。 希望您在问题中包含尽可能多的细节，来帮助我们提高效率。

## :sparkles: 提出新规则或更改规则

要添加新规则或更改规则，你可以：

- 在 GitHub 上创建问题并描述提出的规则
- 使用 [official yeoman generator](https://github.com/eslint/generator-eslint) 生成新规则
- 运行`npm start`
- 编写测试场景并实现逻辑
- 在 `docs` 文件中描述规则
- 确保所有测试用例都通过
- 运行 `npm run lint` 并修复错误
- 运行 `npm run update` 以更新`README`和推荐配置
- 创建 PR 并且在描述中写下 issue 的链接

欢迎贡献代码。 如果您有任何建议、想法或问题，请随时添加新的 [issue](https://github.com/ecomfe/eslint-plugin-san/issues)，但首先请确保你的问题没有和之前的问题重复。

## :fire: 规则运行原理

在开始编写新规则之前，请阅读 [官方 ESLint 指南](https://eslint.org/docs/developer-guide/working-with-rules)。

接下来，为了了解您要检查的代码的 AST 是什么样的，请使用 [astexplorer.net]。

[astexplorer.net] 是检查 AST 的好工具，还支持 San 模板。

打开[astexplorer.net]后，选择`San`作为语法，`san-eslint-parser`作为解析器。

[astexplorer.net]: https://astexplorer.net/

由于 San 中的单个文件组件不是纯 JavaScript，我们不能使用默认解析器，我们不得不引入额外的解析器：`san-eslint-parser`，它生成增强的 AST，其节点代表模板语法的特定部分 ，以及 `<script>` 标签内的内容。

要了解有关生成的 AST 中某些节点的更多信息，请访问此处：
- [ESTree docs](https://github.com/estree/estree)
- [san-eslint-parser AST docs](https://github.com/mysticatea/san-eslint-parser/blob/master/docs/ast.md)

`san-eslint-parser` 提供了一些有用的解析器服务，以帮助遍历生成的 AST 和模板中的 Token：

- `context.parserServices.defineTemplateBodyVisitor(visitor, scriptVisitor)`
- `context.parserServices.getTemplateBodyTokenStore()`

查看 [示例规则](https://github.com/ecomfe/eslint-plugin-san/blob/main/lib/rules/mustache-interpolation-spacing.js) 以更好地了解这些规则是如何工作的。

请注意，如果你在单测中编写代码示例，你必须相应地在 `RuleTester` 中设置解析器（不过，您可以在每个测试用例的基础上进行设置）。 [在这里查看示例](https://github.com/ecomfe/eslint-plugin-san/tree/main/__tests__/lib/rules/attribute-hyphenation.test.js#L19)

如果您遇到困难，其实已经有很多规则可供您学习，如果您找不到正确的解决方案，请联系我们。

## :white_check_mark: 使用 TypeScript 进行 JSDoc 类型检查

我们通过 TypeScript 和 JSDoc 启用了类型检查。

执行类型检查的命令是：`npm run tsc`

这只是为了帮助您编写规则，而不是进行严格的类型检查。 如果您发现难以解决类型检查警告，请使用 `// @ts-nocheck` 和 `// @ts-ignore` 注释来限制警告。
