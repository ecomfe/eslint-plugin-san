[TOC]

# Available rules


## Base Rules (Enabling Correct ESLint Parsing)

Enforce all the rules in this category, as well as all higher priority rules, with:

```json
{
  "extends": "plugin:vue/base"
}
```

| Rule ID | Description | San | Desc | Schedule |
|:--------|:------------|:---|---------|---------|
| [vue/comment-directive](https://eslint.vuejs.org/rules/comment-directive.html) | support comment-directives in `<template>` | ✅ | | 已完成 |
| [vue/experimental-script-setup-vars](https://eslint.vuejs.org/rules/experimental-script-setup-vars.html) | prevent variables defined in `<script setup>` to be marked as undefined | ❌ |  |  |
| [vue/jsx-uses-vars](https://eslint.vuejs.org/rules/jsx-uses-vars.html) | prevent variables used in JSX to be marked as unused | ❌ |  |  |



## Priority A: Essential (Error Prevention) 

Enforce all the rules in this category, as well as all higher priority rules, with:

```json
{
  "extends": "plugin:vue/essential"
}
```

| Rule ID | Description | San | Desc | Schedule |
|:--------|:------------|:---|---------|---------|
| [vue/custom-event-name-casing](https://eslint.vuejs.org/rules/custom-event-name-casing.html) | enforce custom event names always use "kebab-case" | ✅ | | 已完成 |
| [vue/no-arrow-functions-in-watch](https://eslint.vuejs.org/rules/no-arrow-functions-in-watch.html) | disallow using arrow functions to define watcher | ❌ | 没有相关语法 |  |
| [vue/no-async-in-computed-properties](https://eslint.vuejs.org/rules/no-async-in-computed-properties.html) | disallow asynchronous actions in computed properties | ✅ | | 已完成 |
| [vue/no-custom-modifiers-on-v-model](https://eslint.vuejs.org/rules/no-custom-modifiers-on-v-model.html) | disallow custom modifiers on v-model used on the component | ❌ | 没有相关语法 |  |
| [vue/no-dupe-keys](https://eslint.vuejs.org/rules/no-dupe-keys.html) | disallow duplication of field names | ✅ | | **待开发** |
| [vue/no-dupe-v-else-if](https://eslint.vuejs.org/rules/no-dupe-v-else-if.html) | disallow duplicate conditions in `v-if` / `v-else-if` chains | ✅ | | 已完成 |
| [vue/no-duplicate-attributes](https://eslint.vuejs.org/rules/no-duplicate-attributes.html) | disallow duplication of attributes | ✅ | | 已完成 |
| [vue/no-multiple-template-root](https://eslint.vuejs.org/rules/no-multiple-template-root.html) | disallow adding multiple root nodes to the template | ✅ | | 已完成 |
| [vue/no-mutating-props](https://eslint.vuejs.org/rules/no-mutating-props.html) | disallow mutation of component props | ❌ | 没有相关语法 |  |
| [vue/no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html) | disallow parsing errors in `<template>` | ✅ | | 已完成 |
| [vue/no-reserved-keys](https://eslint.vuejs.org/rules/no-reserved-keys.html) | disallow overwriting reserved keys | ✅ | | 已完成 |
| [vue/no-shared-component-data](https://eslint.vuejs.org/rules/no-shared-component-data.html) | enforce component's data property to be a function | ✅ | | 已完成 |
| [vue/no-side-effects-in-computed-properties](https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties.html) | disallow side effects in computed properties | ✅ | | 已完成 |
| [vue/no-template-key](https://eslint.vuejs.org/rules/no-template-key.html) | disallow `key` attribute on `<template>` | ✅ | | 已完成 |
| [vue/no-textarea-mustache](https://eslint.vuejs.org/rules/no-textarea-mustache.html) | disallow mustaches in `<textarea>` | ✅ | | 已完成 |
| [vue/no-unused-components](https://eslint.vuejs.org/rules/no-unused-components.html) | disallow registering components that are not used inside templates | ✅ | | 已完成 |
| [vue/no-unused-vars](https://eslint.vuejs.org/rules/no-unused-vars.html) | disallow unused variable definitions of v-for directives or scope attributes | ✅ | | 已完成 |
| [vue/no-use-v-if-with-v-for](https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html) | disallow use v-if on the same element as v-for | ✅ | | 已完成 |
| [vue/no-v-for-template-key](https://eslint.vuejs.org/rules/no-v-for-template-key.html) | disallow `key` attribute on `<template v-for>` | ❌ |  |  |
| [vue/no-v-model-argument](https://eslint.vuejs.org/rules/no-v-model-argument.html) | disallow adding an argument to `v-model` used in custom component | ❌ | |  |
| [vue/require-component-is](https://eslint.vuejs.org/rules/require-component-is.html) | require `v-bind:is` of `<component>` elements | ❌ |  |  |
| [vue/require-prop-type-constructor](https://eslint.vuejs.org/rules/require-prop-type-constructor.html) | require prop type to be a constructor | ❌ | |  |
| [vue/require-render-return](https://eslint.vuejs.org/rules/require-render-return.html) | enforce render function to always return value | ❌ | |  |
| [vue/require-v-for-key](https://eslint.vuejs.org/rules/require-v-for-key.html) | require `v-bind:key` with `v-for` directives | ❌ | |  |
| [vue/require-valid-default-prop](https://eslint.vuejs.org/rules/require-valid-default-prop.html) | enforce props default values to be valid | ❌ | |  |
| [vue/return-in-computed-property](https://eslint.vuejs.org/rules/return-in-computed-property.html) | enforce that a return statement is present in computed property | ✅ | | 已完成 |
| [vue/use-v-on-exact](https://eslint.vuejs.org/rules/use-v-on-exact.html) | enforce usage of `exact` modifier on `v-on` | ❌ | |  |
| [vue/valid-template-root](https://eslint.vuejs.org/rules/valid-template-root.html) | enforce valid template root | ✅ | | 已完成 |
| [vue/valid-v-bind-sync](https://eslint.vuejs.org/rules/valid-v-bind-sync.html) | enforce valid `.sync` modifier on `v-bind` directives | ❌ |  |  |
| [vue/valid-v-bind](https://eslint.vuejs.org/rules/valid-v-bind.html) | enforce valid `v-bind` directives | ❌ |  |  |
| [vue/valid-v-cloak](https://eslint.vuejs.org/rules/valid-v-cloak.html) | enforce valid `v-cloak` directives | ❌ |  |  |
| [vue/valid-v-else-if](https://eslint.vuejs.org/rules/valid-v-else-if.html) | enforce valid `v-else-if` directives | ✅ | san/valid-s-else-if | 已完成 |
| [vue/valid-v-else](https://eslint.vuejs.org/rules/valid-v-else.html) | enforce valid `v-else` directives | ✅ | san/valid-s-else | 已完成 |
| [vue/valid-v-for](https://eslint.vuejs.org/rules/valid-v-for.html) | enforce valid `v-for` directives | ✅ | san/valid-s-for | 已完成 |
| [vue/valid-v-html](https://eslint.vuejs.org/rules/valid-v-html.html) | enforce valid `v-html` directives | ❌ | san/valid-s-html |  |
| [vue/valid-v-if](https://eslint.vuejs.org/rules/valid-v-if.html) | enforce valid `v-if` directives | ✅ | san/valid-s-if | 已完成 |
| [vue/valid-v-model](https://eslint.vuejs.org/rules/valid-v-model.html) | enforce valid `v-model` directives | ❌ |  |  |
| [vue/valid-v-on](https://eslint.vuejs.org/rules/valid-v-on.html) | enforce valid `v-on` directives | ✅ | san/valid-on | **待开发** |
| [vue/valid-v-once](https://eslint.vuejs.org/rules/valid-v-once.html) | enforce valid `v-once` directives | ❌ |  |  |
| [vue/valid-v-pre](https://eslint.vuejs.org/rules/valid-v-pre.html) | enforce valid `v-pre` directives | ❌ |  |  |
| [vue/valid-v-show](https://eslint.vuejs.org/rules/valid-v-show.html) | enforce valid `v-show` directives | ✅ |  | 已完成 |
| [vue/valid-v-slot](https://eslint.vuejs.org/rules/valid-v-slot.html) | enforce valid `v-slot` directives | ❌ |  |  |
| [vue/valid-v-text](https://eslint.vuejs.org/rules/valid-v-text.html) | enforce valid `v-text` directives | ❌ |  |  |

## Priority B: Strongly Recommended (Improving Readability) 

Enforce all the rules in this category, as well as all higher priority rules, with:

```json
{
  "extends": "plugin:vue/strongly-recommended"
}
```

| eRule ID | Description | San | Desc | Schedule |
|:--------|:------------|:---|---------|---------|
| [vue/attribute-hyphenation](https://eslint.vuejs.org/rules/attribute-hyphenation.html) | enforce attribute naming style on custom components in template | ✅ | | 已完成 |
| [vue/component-definition-name-casing](https://eslint.vuejs.org/rules/component-definition-name-casing.html) | enforce specific casing for component definition name | ❌ | |  |
| [vue/html-closing-bracket-newline](https://eslint.vuejs.org/rules/html-closing-bracket-newline.html) | require or disallow a line break before tag's closing brackets | ✅ | | 已完成 |
| [vue/html-closing-bracket-spacing](https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html) | require or disallow a space before tag's closing brackets | ✅ | | 已完成 |
| [vue/html-end-tags](https://eslint.vuejs.org/rules/html-end-tags.html) | enforce end tag style | ✅ | | 已完成 |
| [vue/html-indent](https://eslint.vuejs.org/rules/html-indent.html) | enforce consistent indentation in `<template>` | ✅ | | 已完成 |
| [vue/html-quotes](https://eslint.vuejs.org/rules/html-quotes.html) | enforce quotes style of HTML attributes | ✅ | | 已完成 |
| [vue/html-self-closing](https://eslint.vuejs.org/rules/html-self-closing.html) | enforce self-closing style | ✅ | | 已完成 |
| [vue/max-attributes-per-line](https://eslint.vuejs.org/rules/max-attributes-per-line.html) | enforce the maximum number of attributes per line | ✅ | | 已完成 |
| [vue/multiline-html-element-content-newline](https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html) | require a line break before and after the contents of a multiline element | ✅ | | 已完成 |
| [vue/mustache-interpolation-spacing](https://eslint.vuejs.org/rules/mustache-interpolation-spacing.html) | enforce unified spacing in mustache interpolations | ✅ | | 已完成 |
| [vue/no-multi-spaces](https://eslint.vuejs.org/rules/no-multi-spaces.html) | disallow multiple spaces | ✅ | | 已完成 |
| [vue/no-spaces-around-equal-signs-in-attribute](https://eslint.vuejs.org/rules/no-spaces-around-equal-signs-in-attribute.html) | disallow spaces around equal signs in attribute | ✅ | | 已完成 |
| [vue/no-template-shadow](https://eslint.vuejs.org/rules/no-template-shadow.html) | disallow variable declarations from shadowing variables declared in the outer scope | ✅ | | 已完成 |
| [vue/one-component-per-file](https://eslint.vuejs.org/rules/one-component-per-file.html) | enforce that each component should be in its own file | ✅ | | 已完成 |
| [vue/prop-name-casing](https://eslint.vuejs.org/rules/prop-name-casing.html) | enforce specific casing for the Prop name in Vue components | ❌ | prop |  |
| [vue/require-default-prop](https://eslint.vuejs.org/rules/require-default-prop.html) | require default value for props | ❌ | |  |
| [vue/require-prop-types](https://eslint.vuejs.org/rules/require-prop-types.html) | require type definitions in props | ❌ | |  |
| [vue/singleline-html-element-content-newline](https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html) | require a line break before and after the contents of a singleline element | ✅ | | 已完成 |
| [vue/v-bind-style](https://eslint.vuejs.org/rules/v-bind-style.html) | enforce `v-bind` directive style | ❌ | |  |
| [vue/v-on-style](https://eslint.vuejs.org/rules/v-on-style.html) | enforce `v-on` directive style | ❌ | v-on 与 @ |  |
| [vue/v-slot-style](https://eslint.vuejs.org/rules/v-slot-style.html) | enforce `v-slot` directive style | ❌ | |  |

## Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead) 

Enforce all the rules in this category, as well as all higher priority rules, with:

```json
{
  "extends": "plugin:vue/recommended"
}
```

| Rule ID | Description | San | Desc | Sechdule |
|:--------|:------------|:---|---------|---------|
| [vue/attributes-order](https://eslint.vuejs.org/rules/attributes-order.html) | enforce order of attributes | ✅ | | 已完成 |
| [vue/component-tags-order](https://eslint.vuejs.org/rules/component-tags-order.html) | enforce order of component top-level elements | ✅ | | 已完成 |
| [vue/no-lone-template](https://eslint.vuejs.org/rules/no-lone-template.html) | disallow unnecessary `<template>` | ✅ | | 已完成 |
| [vue/no-multiple-slot-args](https://eslint.vuejs.org/rules/no-multiple-slot-args.html) | disallow to pass multiple arguments to scoped slots | ❌ | |  |
| [vue/no-v-html](https://eslint.vuejs.org/rules/no-v-html.html) | disallow use of v-html to prevent XSS attack | ❌ | |  |
| [vue/order-in-components](https://eslint.vuejs.org/rules/order-in-components.html) | enforce order of properties in components | ✅ | | 已完成 |
| [vue/this-in-template](https://eslint.vuejs.org/rules/this-in-template.html) | disallow usage of `this` in template | ✅ | | 已完成 |

## Uncategorized

No preset enables the rules in this category.
Please enable each rule if you want.

For example:

```json
{
  "rules": {
    "vue/component-name-in-template-casing": "error"
  }
}
```

| Rule ID | Description | San | Desc | Schedule |
|:--------|:------------|:---|---------|---------|
| [vue/component-name-in-template-casing](https://eslint.vuejs.org/rules/component-name-in-template-casing.html) | enforce specific casing for the component naming style in template |  |  |  |
| [vue/html-comment-content-newline](https://eslint.vuejs.org/rules/html-comment-content-newline.html) | enforce unified line brake in HTML comments |  | |  |
| [vue/html-comment-content-spacing](https://eslint.vuejs.org/rules/html-comment-content-spacing.html) | enforce unified spacing in HTML comments |  | |  |
| [vue/html-comment-indent](https://eslint.vuejs.org/rules/html-comment-indent.html) | enforce consistent indentation in HTML comments |  | |  |
| [vue/match-component-file-name](https://eslint.vuejs.org/rules/match-component-file-name.html) | require component name property to match its file name |  | |  |
| [vue/no-bare-strings-in-template](https://eslint.vuejs.org/rules/no-bare-strings-in-template.html) | disallow the use of bare strings in `<template>` |  | |  |
| [vue/no-boolean-default](https://eslint.vuejs.org/rules/no-boolean-default.html) | disallow boolean defaults |  | |  |
| [vue/no-duplicate-attr-inheritance](https://eslint.vuejs.org/rules/no-duplicate-attr-inheritance.html) | enforce `inheritAttrs` to be set to `false` when using `v-bind="$attrs"` | ❌ |  |  |
| [vue/no-empty-component-block](https://eslint.vuejs.org/rules/no-empty-component-block.html) | disallow the `<template>` `<script>` `<style>` block to be empty |  | |  |
| [vue/no-multiple-objects-in-class](https://eslint.vuejs.org/rules/no-multiple-objects-in-class.html) | disallow to pass multiple objects into array to class |  | |  |
| [vue/no-potential-component-option-typo](https://eslint.vuejs.org/rules/no-potential-component-option-typo.html) | disallow a potential typo in your component property |  | |  |
| [vue/no-reserved-component-names](https://eslint.vuejs.org/rules/no-reserved-component-names.html) | disallow the use of reserved names in component definitions |  | |  |
| [vue/no-restricted-component-options](https://eslint.vuejs.org/rules/no-restricted-component-options.html) | disallow specific component option |  | |  |
| [vue/no-restricted-static-attribute](https://eslint.vuejs.org/rules/no-restricted-static-attribute.html) | disallow specific attribute |  | |  |
| [vue/no-restricted-v-bind](https://eslint.vuejs.org/rules/no-restricted-v-bind.html) | disallow specific argument in `v-bind` |  | |  |
| [vue/no-static-inline-styles](https://eslint.vuejs.org/rules/no-static-inline-styles.html) | disallow static inline `style` attributes |  | |  |
| [vue/no-template-target-blank](https://eslint.vuejs.org/rules/no-template-target-blank.html) | disallow target="_blank" attribute without rel="noopener noreferrer" |  | |  |
| [vue/no-unregistered-components](https://eslint.vuejs.org/rules/no-unregistered-components.html) | disallow using components that are not registered inside templates |  | |  |
| [vue/no-unsupported-features](https://eslint.vuejs.org/rules/no-unsupported-features.html) | disallow unsupported Vue.js syntax on the specified version |  | |  |
| [vue/no-unused-properties](https://eslint.vuejs.org/rules/no-unused-properties.html) | disallow unused properties |  | |  |
| [vue/no-useless-mustaches](https://eslint.vuejs.org/rules/no-useless-mustaches.html) | disallow unnecessary mustache interpolations |  | |  |
| [vue/no-useless-v-bind](https://eslint.vuejs.org/rules/no-useless-v-bind.html) | disallow unnecessary `v-bind` directives | ❌ |  |  |
| [vue/padding-line-between-blocks](https://eslint.vuejs.org/rules/padding-line-between-blocks.html) | require or disallow padding lines between blocks |  | |  |
| [vue/require-direct-export](https://eslint.vuejs.org/rules/require-direct-export.html) | require the component to be directly exported |  | |  |
| [vue/require-name-property](https://eslint.vuejs.org/rules/require-name-property.html) | require a name property in Vue components |  | |  |
| [vue/script-indent](https://eslint.vuejs.org/rules/script-indent.html) | enforce consistent indentation in `<script>` |  | |  |
| [vue/sort-keys](https://eslint.vuejs.org/rules/sort-keys.html) | enforce sort-keys in a manner that is compatible with order-in-components |  | |  |
| [vue/static-class-names-order](https://eslint.vuejs.org/rules/static-class-names-order.html) | enforce static class names order |  | |  |
| [vue/v-for-delimiter-style](https://eslint.vuejs.org/rules/v-for-delimiter-style.html) | enforce `v-for` directive's delimiter style |  | |  |
| [vue/v-on-function-call](https://eslint.vuejs.org/rules/v-on-function-call.html) | enforce or forbid parentheses after method calls without arguments in `v-on` directives |  | |  |

### Extension Rules

The following rules extend the rules provided by ESLint itself and apply them to the expressions in the `<template>`.

| Rule ID | Description | San | Desc | Sechdule |
|:--------|:------------|:---|---------|---------|
| [vue/array-bracket-spacing](https://eslint.vuejs.org/rules/array-bracket-spacing.html) | enforce consistent spacing inside array brackets |  | Baidu |  |
| [vue/arrow-spacing](https://eslint.vuejs.org/rules/arrow-spacing.html) | enforce consistent spacing before and after the arrow in arrow functions |  | Baidu |  |
| [vue/block-spacing](https://eslint.vuejs.org/rules/block-spacing.html) | disallow or enforce spaces inside of blocks after opening block and before  | | Baidu |  |
| [vue/brace-style](https://eslint.vuejs.org/rules/brace-style.html) | enforce consistent brace style for blocks |  | Baidu |  |
| [vue/camelcase](https://eslint.vuejs.org/rules/camelcase.html) | enforce camelcase naming convention |  | Baidu |  |
| [vue/comma-dangle](https://eslint.vuejs.org/rules/comma-dangle.html) | require or disallow trailing commas |  | Baidu |  |
| [vue/comma-spacing](https://eslint.vuejs.org/rules/comma-spacing.html) | enforce consistent spacing before and after commas |  | Baidu |  |
| [vue/comma-style](https://eslint.vuejs.org/rules/comma-style.html) | enforce consistent comma style |  | Baidu |  |
| [vue/dot-location](https://eslint.vuejs.org/rules/dot-location.html) | enforce consistent newlines before and after dots |  | Baidu |  |
| [vue/dot-notation](https://eslint.vuejs.org/rules/dot-notation.html) | enforce dot notation whenever possible |  | Baidu |  |
| [vue/eqeqeq](https://eslint.vuejs.org/rules/eqeqeq.html) | require the use of `===` and `!==` |  | Baidu |  |
| [vue/func-call-spacing](https://eslint.vuejs.org/rules/func-call-spacing.html) | require or disallow spacing between function identifiers and their  | | Baidu |  |
| [vue/key-spacing](https://eslint.vuejs.org/rules/key-spacing.html) | enforce consistent spacing between keys and values in object literal properties |  | Baidu |  |
| [vue/keyword-spacing](https://eslint.vuejs.org/rules/keyword-spacing.html) | enforce consistent spacing before and after keywords |  | Baidu |  |
| [vue/max-len](https://eslint.vuejs.org/rules/max-len.html) | enforce a maximum line length |  | Baidu |  |
| [vue/no-empty-pattern](https://eslint.vuejs.org/rules/no-empty-pattern.html) | disallow empty destructuring patterns |  | Baidu |  |
| [vue/no-extra-parens](https://eslint.vuejs.org/rules/no-extra-parens.html) | disallow unnecessary parentheses |  | Baidu |  |
| [vue/no-irregular-whitespace](https://eslint.vuejs.org/rules/no-irregular-whitespace.html) | disallow irregular whitespace |  | Baidu |  |
| [vue/no-restricted-syntax](https://eslint.vuejs.org/rules/no-restricted-syntax.html) | disallow specified syntax |  | Baidu |  |
| [vue/no-sparse-arrays](https://eslint.vuejs.org/rules/no-sparse-arrays.html) | disallow sparse arrays |  | Baidu |  |
| [vue/no-useless-concat](https://eslint.vuejs.org/rules/no-useless-concat.html) | disallow unnecessary concatenation of literals or template literals |  | Baidu |  |
| [vue/object-curly-newline](https://eslint.vuejs.org/rules/object-curly-newline.html) | enforce consistent line breaks inside braces |  | Baidu |  |
| [vue/object-curly-spacing](https://eslint.vuejs.org/rules/object-curly-spacing.html) | enforce consistent spacing inside braces |  | Baidu |  |
| [vue/object-property-newline](https://eslint.vuejs.org/rules/object-property-newline.html) | enforce placing object properties on separate lines |  | Baidu |  |
| [vue/operator-linebreak](https://eslint.vuejs.org/rules/operator-linebreak.html) | enforce consistent linebreak style for operators |  | Baidu |  |
| [vue/prefer-template](https://eslint.vuejs.org/rules/prefer-template.html) | require template literals instead of string concatenation |  | Baidu |  |
| [vue/space-in-parens](https://eslint.vuejs.org/rules/space-in-parens.html) | enforce consistent spacing inside parentheses |  | Baidu |  |
| [vue/space-infix-ops](https://eslint.vuejs.org/rules/space-infix-ops.html) | require spacing around infix operators |  | Baidu |  |
| [vue/space-unary-ops](https://eslint.vuejs.org/rules/space-unary-ops.html) | enforce consistent spacing before or after unary operators |  | Baidu |  |
| [vue/template-curly-spacing](https://eslint.vuejs.org/rules/template-curly-spacing.html) | require or disallow spacing around embedded expressions of  | | Baidu |  |

## Deprecated

- :warning: We're going to remove deprecated rules in the next major release. Please migrate to successor/new rules.
- :innocent: We don't fix bugs which are in deprecated rules since we don't have enough resources.

| Rule ID   | Replaced by  | San | Desc | Schedule |
| :-------------- | :---------- | ---- | ---- | --------------- |
| [vue/name-property-casing](https://eslint.vuejs.org/rules/name-property-casing.html) | [vue/component-definition-name-casing](https://eslint.vuejs.org/rules/component-definition-name-casing.html) |  ❌   |      | |
| [vue/no-confusing-v-for-v-if](https://eslint.vuejs.org/rules/no-confusing-v-for-v-if.html) | [vue/no-use-v-if-with-v-for](https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html)    |   ❌   |      | |
