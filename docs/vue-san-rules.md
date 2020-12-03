[TOC]

# Available rules


## Base Rules (Enabling Correct ESLint Parsing)

Enforce all the rules in this category, as well as all higher priority rules, with:

```json
{
  "extends": "plugin:vue/base"
}
```

| Rule ID | Description | San | Reason |
|:--------|:------------|:---|---------|
| [vue/comment-directive](./comment-directive.md) | support comment-directives in `<template>` | :white_check_mark: | |
| [vue/experimental-script-setup-vars](./experimental-script-setup-vars.md) | prevent variables defined in `<script setup>` to be marked as undefined | | No |
| [vue/jsx-uses-vars](./jsx-uses-vars.md) | prevent variables used in JSX to be marked as unused |  | No |



## Priority A: Essential (Error Prevention) 

Enforce all the rules in this category, as well as all higher priority rules, with:

```json
{
  "extends": "plugin:vue/essential"
}
```

| Rule ID | Description | San | Reason | Remark |
|:--------|:------------|:---|---------|---------|
| [vue/custom-event-name-casing](./custom-event-name-casing.md) | enforce custom event names always use "kebab-case" |  | |  |
| [vue/no-arrow-functions-in-watch](./no-arrow-functions-in-watch.md) | disallow using arrow functions to define watcher |  | |  |
| [vue/no-async-in-computed-properties](./no-async-in-computed-properties.md) | disallow asynchronous actions in computed properties | :white_check_mark: | |  |
| [vue/no-custom-modifiers-on-v-model](./no-custom-modifiers-on-v-model.md) | disallow custom modifiers on v-model used on the component |  | |  |
| [vue/no-dupe-keys](./no-dupe-keys.md) | disallow duplication of field names | :white_check_mark: | |  |
| [vue/no-dupe-v-else-if](./no-dupe-v-else-if.md) | disallow duplicate conditions in `v-if` / `v-else-if` chains |  | |  |
| [vue/no-duplicate-attributes](./no-duplicate-attributes.md) | disallow duplication of attributes | :white_check_mark: | |  |
| [vue/no-multiple-template-root](./no-multiple-template-root.md) | disallow adding multiple root nodes to the template |  | |  |
| [vue/no-mutating-props](./no-mutating-props.md) | disallow mutation of component props |  | |  |
| [vue/no-parsing-error](./no-parsing-error.md) | disallow parsing errors in `<template>` | :white_check_mark: | |  |
| [vue/no-reserved-keys](./no-reserved-keys.md) | disallow overwriting reserved keys | :white_check_mark: | |  |
| [vue/no-shared-component-data](./no-shared-component-data.md) | enforce component's data property to be a function | :white_check_mark: | |  |
| [vue/no-side-effects-in-computed-properties](./no-side-effects-in-computed-properties.md) | disallow side effects in computed properties | :white_check_mark: | |  |
| [vue/no-template-key](./no-template-key.md) | disallow `key` attribute on `<template>` | :white_check_mark: | |  |
| [vue/no-textarea-mustache](./no-textarea-mustache.md) | disallow mustaches in `<textarea>` | :white_check_mark: | |  |
| [vue/no-unused-components](./no-unused-components.md) | disallow registering components that are not used inside templates |  | |  |
| [vue/no-unused-vars](./no-unused-vars.md) | disallow unused variable definitions of v-for directives or scope attributes | :white_check_mark: | |  |
| [vue/no-use-v-if-with-v-for](./no-use-v-if-with-v-for.md) | disallow use v-if on the same element as v-for |  | |  |
| [vue/no-v-for-template-key](./no-v-for-template-key.md) | disallow `key` attribute on `<template v-for>` |  | No |  |
| [vue/no-v-model-argument](./no-v-model-argument.md) | disallow adding an argument to `v-model` used in custom component |  | |  |
| [vue/require-component-is](./require-component-is.md) | require `v-bind:is` of `<component>` elements |  | No |  |
| [vue/require-prop-type-constructor](./require-prop-type-constructor.md) | require prop type to be a constructor |  | |  |
| [vue/require-render-return](./require-render-return.md) | enforce render function to always return value |  | |  |
| [vue/require-v-for-key](./require-v-for-key.md) | require `v-bind:key` with `v-for` directives |  | |  |
| [vue/require-valid-default-prop](./require-valid-default-prop.md) | enforce props default values to be valid | :white_check_mark: | |  |
| [vue/return-in-computed-property](./return-in-computed-property.md) | enforce that a return statement is present in computed property | :white_check_mark: | |  |
| [vue/use-v-on-exact](./use-v-on-exact.md) | enforce usage of `exact` modifier on `v-on` |  | |  |
| [vue/valid-template-root](./valid-template-root.md) | enforce valid template root | :white_check_mark: | |  |
| [vue/valid-v-bind-sync](./valid-v-bind-sync.md) | enforce valid `.sync` modifier on `v-bind` directives |  | No |  |
| [vue/valid-v-bind](./valid-v-bind.md) | enforce valid `v-bind` directives |  | No |  |
| [vue/valid-v-cloak](./valid-v-cloak.md) | enforce valid `v-cloak` directives |  | No |  |
| [vue/valid-v-else-if](./valid-v-else-if.md) | enforce valid `v-else-if` directives | :white_check_mark: | | san/valid-s-elif |
| [vue/valid-v-else](./valid-v-else.md) | enforce valid `v-else` directives | :white_check_mark: | | san/valid-s-else |
| [vue/valid-v-for](./valid-v-for.md) | enforce valid `v-for` directives | :white_check_mark: | | san/valid-s-for |
| [vue/valid-v-html](./valid-v-html.md) | enforce valid `v-html` directives | :white_check_mark: | | san/valid-s-html |
| [vue/valid-v-if](./valid-v-if.md) | enforce valid `v-if` directives | :white_check_mark: | | san/valid-s-if |
| [vue/valid-v-model](./valid-v-model.md) | enforce valid `v-model` directives |  | No |  |
| [vue/valid-v-on](./valid-v-on.md) | enforce valid `v-on` directives | :white_check_mark: | | san/valid-on |
| [vue/valid-v-once](./valid-v-once.md) | enforce valid `v-once` directives |  | No |  |
| [vue/valid-v-pre](./valid-v-pre.md) | enforce valid `v-pre` directives |  | No |  |
| [vue/valid-v-show](./valid-v-show.md) | enforce valid `v-show` directives |  |  |  |
| [vue/valid-v-slot](./valid-v-slot.md) | enforce valid `v-slot` directives |  | | <slot name="xx"> |
| [vue/valid-v-text](./valid-v-text.md) | enforce valid `v-text` directives |  | No |  |

## Priority B: Strongly Recommended (Improving Readability) 

Enforce all the rules in this category, as well as all higher priority rules, with:

```json
{
  "extends": "plugin:vue/strongly-recommended"
}
```

| Rule ID | Description | San | Reason | Remark |
|:--------|:------------|:---|---------|---------|
| [vue/attribute-hyphenation](./attribute-hyphenation.md) | enforce attribute naming style on custom components in template | :white_check_mark: | |  |
| [vue/component-definition-name-casing](./component-definition-name-casing.md) | enforce specific casing for component definition name |  | |  |
| [vue/html-closing-bracket-newline](./html-closing-bracket-newline.md) | require or disallow a line break before tag's closing brackets |  | |  |
| [vue/html-closing-bracket-spacing](./html-closing-bracket-spacing.md) | require or disallow a space before tag's closing brackets |  | |  |
| [vue/html-end-tags](./html-end-tags.md) | enforce end tag style | :white_check_mark: | |  |
| [vue/html-indent](./html-indent.md) | enforce consistent indentation in `<template>` | :white_check_mark: | |  |
| [vue/html-quotes](./html-quotes.md) | enforce quotes style of HTML attributes | :white_check_mark: | |  |
| [vue/html-self-closing](./html-self-closing.md) | enforce self-closing style | :white_check_mark: | |  |
| [vue/max-attributes-per-line](./max-attributes-per-line.md) | enforce the maximum number of attributes per line | :white_check_mark: | |  |
| [vue/multiline-html-element-content-newline](./multiline-html-element-content-newline.md) | require a line break before and after the contents of a multiline element |  | |  |
| [vue/mustache-interpolation-spacing](./mustache-interpolation-spacing.md) | enforce unified spacing in mustache interpolations | :white_check_mark: | |  |
| [vue/no-multi-spaces](./no-multi-spaces.md) | disallow multiple spaces | :white_check_mark: | |  |
| [vue/no-spaces-around-equal-signs-in-attribute](./no-spaces-around-equal-signs-in-attribute.md) | disallow spaces around equal signs in attribute |  | |  |
| [vue/no-template-shadow](./no-template-shadow.md) | disallow variable declarations from shadowing variables declared in the outer scope |  | |  |
| [vue/one-component-per-file](./one-component-per-file.md) | enforce that each component should be in its own file |  | |  |
| [vue/prop-name-casing](./prop-name-casing.md) | enforce specific casing for the Prop name in Vue components |  | |  |
| [vue/require-default-prop](./require-default-prop.md) | require default value for props | :white_check_mark: | |  |
| [vue/require-prop-types](./require-prop-types.md) | require type definitions in props | :white_check_mark: | |  |
| [vue/singleline-html-element-content-newline](./singleline-html-element-content-newline.md) | require a line break before and after the contents of a singleline element |  | |  |
| [vue/v-bind-style](./v-bind-style.md) | enforce `v-bind` directive style |  | |  |
| [vue/v-on-style](./v-on-style.md) | enforce `v-on` directive style |  | |  |
| [vue/v-slot-style](./v-slot-style.md) | enforce `v-slot` directive style |  | |  |

## Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead) 

Enforce all the rules in this category, as well as all higher priority rules, with:

```json
{
  "extends": "plugin:vue/recommended"
}
```

| Rule ID | Description | San | Reason | Remark |
|:--------|:------------|:---|---------|---------|
| [vue/attributes-order](./attributes-order.md) | enforce order of attributes | :white_check_mark: | |  |
| [vue/component-tags-order](./component-tags-order.md) | enforce order of component top-level elements |  | |  |
| [vue/no-lone-template](./no-lone-template.md) | disallow unnecessary `<template>` |  | |  |
| [vue/no-multiple-slot-args](./no-multiple-slot-args.md) | disallow to pass multiple arguments to scoped slots |  | |  |
| [vue/no-v-html](./no-v-html.md) | disallow use of v-html to prevent XSS attack |  | |  |
| [vue/order-in-components](./order-in-components.md) | enforce order of properties in components | :white_check_mark: | |  |
| [vue/this-in-template](./this-in-template.md) | disallow usage of `this` in template |  | |  |

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

| Rule ID | Description | San | Reason | Remark |
|:--------|:------------|:---|---------|---------|
| [vue/component-name-in-template-casing](./component-name-in-template-casing.md) | enforce specific casing for the component naming style in template |  |  |  |
| [vue/html-comment-content-newline](./html-comment-content-newline.md) | enforce unified line brake in HTML comments |  | |  |
| [vue/html-comment-content-spacing](./html-comment-content-spacing.md) | enforce unified spacing in HTML comments |  | |  |
| [vue/html-comment-indent](./html-comment-indent.md) | enforce consistent indentation in HTML comments |  | |  |
| [vue/match-component-file-name](./match-component-file-name.md) | require component name property to match its file name |  | |  |
| [vue/no-bare-strings-in-template](./no-bare-strings-in-template.md) | disallow the use of bare strings in `<template>` |  | |  |
| [vue/no-boolean-default](./no-boolean-default.md) | disallow boolean defaults |  | |  |
| [vue/no-duplicate-attr-inheritance](./no-duplicate-attr-inheritance.md) | enforce `inheritAttrs` to be set to `false` when using `v-bind="$attrs"` |  | No |  |
| [vue/no-empty-component-block](./no-empty-component-block.md) | disallow the `<template>` `<script>` `<style>` block to be empty |  | |  |
| [vue/no-multiple-objects-in-class](./no-multiple-objects-in-class.md) | disallow to pass multiple objects into array to class |  | |  |
| [vue/no-potential-component-option-typo](./no-potential-component-option-typo.md) | disallow a potential typo in your component property |  | |  |
| [vue/no-reserved-component-names](./no-reserved-component-names.md) | disallow the use of reserved names in component definitions |  | |  |
| [vue/no-restricted-component-options](./no-restricted-component-options.md) | disallow specific component option |  | |  |
| [vue/no-restricted-static-attribute](./no-restricted-static-attribute.md) | disallow specific attribute |  | |  |
| [vue/no-restricted-v-bind](./no-restricted-v-bind.md) | disallow specific argument in `v-bind` |  | |  |
| [vue/no-static-inline-styles](./no-static-inline-styles.md) | disallow static inline `style` attributes |  | |  |
| [vue/no-template-target-blank](./no-template-target-blank.md) | disallow target="_blank" attribute without rel="noopener noreferrer" |  | |  |
| [vue/no-unregistered-components](./no-unregistered-components.md) | disallow using components that are not registered inside templates |  | |  |
| [vue/no-unsupported-features](./no-unsupported-features.md) | disallow unsupported Vue.js syntax on the specified version |  | |  |
| [vue/no-unused-properties](./no-unused-properties.md) | disallow unused properties |  | |  |
| [vue/no-useless-mustaches](./no-useless-mustaches.md) | disallow unnecessary mustache interpolations |  | |  |
| [vue/no-useless-v-bind](./no-useless-v-bind.md) | disallow unnecessary `v-bind` directives |  | No |  |
| [vue/padding-line-between-blocks](./padding-line-between-blocks.md) | require or disallow padding lines between blocks |  | |  |
| [vue/require-direct-export](./require-direct-export.md) | require the component to be directly exported |  | |  |
| [vue/require-name-property](./require-name-property.md) | require a name property in Vue components |  | |  |
| [vue/script-indent](./script-indent.md) | enforce consistent indentation in `<script>` |  | |  |
| [vue/sort-keys](./sort-keys.md) | enforce sort-keys in a manner that is compatible with order-in-components |  | |  |
| [vue/static-class-names-order](./static-class-names-order.md) | enforce static class names order |  | |  |
| [vue/v-for-delimiter-style](./v-for-delimiter-style.md) | enforce `v-for` directive's delimiter style |  | |  |
| [vue/v-on-function-call](./v-on-function-call.md) | enforce or forbid parentheses after method calls without arguments in `v-on` directives |  | |  |

### Extension Rules

The following rules extend the rules provided by ESLint itself and apply them to the expressions in the `<template>`.

| Rule ID | Description | San | Reason | Remark |
|:--------|:------------|:---| |---------|
| [vue/array-bracket-spacing](./array-bracket-spacing.md) | enforce consistent spacing inside array brackets |  | Baidu |  |
| [vue/arrow-spacing](./arrow-spacing.md) | enforce consistent spacing before and after the arrow in arrow functions |  | Baidu |  |
| [vue/block-spacing](./block-spacing.md) | disallow or enforce spaces inside of blocks after opening block and before  | | Baidu |  |
| [vue/brace-style](./brace-style.md) | enforce consistent brace style for blocks |  | Baidu |  |
| [vue/camelcase](./camelcase.md) | enforce camelcase naming convention |  | Baidu |  |
| [vue/comma-dangle](./comma-dangle.md) | require or disallow trailing commas |  | Baidu |  |
| [vue/comma-spacing](./comma-spacing.md) | enforce consistent spacing before and after commas |  | Baidu |  |
| [vue/comma-style](./comma-style.md) | enforce consistent comma style |  | Baidu |  |
| [vue/dot-location](./dot-location.md) | enforce consistent newlines before and after dots |  | Baidu |  |
| [vue/dot-notation](./dot-notation.md) | enforce dot notation whenever possible |  | Baidu |  |
| [vue/eqeqeq](./eqeqeq.md) | require the use of `===` and `!==` |  | Baidu |  |
| [vue/func-call-spacing](./func-call-spacing.md) | require or disallow spacing between function identifiers and their  | | Baidu |  |
| [vue/key-spacing](./key-spacing.md) | enforce consistent spacing between keys and values in object literal properties |  | Baidu |  |
| [vue/keyword-spacing](./keyword-spacing.md) | enforce consistent spacing before and after keywords |  | Baidu |  |
| [vue/max-len](./max-len.md) | enforce a maximum line length |  | Baidu |  |
| [vue/no-empty-pattern](./no-empty-pattern.md) | disallow empty destructuring patterns |  | Baidu |  |
| [vue/no-extra-parens](./no-extra-parens.md) | disallow unnecessary parentheses |  | Baidu |  |
| [vue/no-irregular-whitespace](./no-irregular-whitespace.md) | disallow irregular whitespace |  | Baidu |  |
| [vue/no-restricted-syntax](./no-restricted-syntax.md) | disallow specified syntax |  | Baidu |  |
| [vue/no-sparse-arrays](./no-sparse-arrays.md) | disallow sparse arrays |  | Baidu |  |
| [vue/no-useless-concat](./no-useless-concat.md) | disallow unnecessary concatenation of literals or template literals |  | Baidu |  |
| [vue/object-curly-newline](./object-curly-newline.md) | enforce consistent line breaks inside braces |  | Baidu |  |
| [vue/object-curly-spacing](./object-curly-spacing.md) | enforce consistent spacing inside braces |  | Baidu |  |
| [vue/object-property-newline](./object-property-newline.md) | enforce placing object properties on separate lines |  | Baidu |  |
| [vue/operator-linebreak](./operator-linebreak.md) | enforce consistent linebreak style for operators |  | Baidu |  |
| [vue/prefer-template](./prefer-template.md) | require template literals instead of string concatenation |  | Baidu |  |
| [vue/space-in-parens](./space-in-parens.md) | enforce consistent spacing inside parentheses |  | Baidu |  |
| [vue/space-infix-ops](./space-infix-ops.md) | require spacing around infix operators |  | Baidu |  |
| [vue/space-unary-ops](./space-unary-ops.md) | enforce consistent spacing before or after unary operators |  | Baidu |  |
| [vue/template-curly-spacing](./template-curly-spacing.md) | require or disallow spacing around embedded expressions of  | | Baidu |  |

## Deprecated

- :warning: We're going to remove deprecated rules in the next major release. Please migrate to successor/new rules.
- :innocent: We don't fix bugs which are in deprecated rules since we don't have enough resources.

| Rule ID   | Replaced by  | San | Reason | Remark |
| :-------------- | :---------- | ---- | ---- | --------------- |
| [vue/name-property-casing](./name-property-casing.md) | [vue/component-definition-name-casing](./component-definition-name-casing.md) |  :white_check_mark:    |      | |
| [vue/no-confusing-v-for-v-if](./no-confusing-v-for-v-if.md) | [vue/no-use-v-if-with-v-for](./no-use-v-if-with-v-for.md)    |   :white_check_mark:   |      | |
