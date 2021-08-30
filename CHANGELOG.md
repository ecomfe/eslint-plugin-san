### V1.0.2
## Fix
* Fix a bug that `no-unused-components` check every component name as a host html tag name.
* Fix a bug that `no-unused-vars` report incorrect message when the second variable used in `s-for`.
* Fix a bug that `no-unused-vars` report incorrect message when the `var-*` used.

### V1.0.1
## Add
* Add message to notation if the component name is host html tag name in `no-unused-components`.
## Fix
* Fix `indent-common` cannot check and fix the code of .ts/.js file.
* Fix a bug that `no-expression-in-template-literals` parse template without value incorrectly.
* Fix a bug that `no-unused-vars` parse variables of `s-for` incorrectly.


### V1.0.0

## Remove
* Remove a rule: `no-template-key` and `no-shared-component-data`.

## Add
* Add a feature in all rules to parse the template in ts/js files.
* Add a feature to parse the interpolation in attribute.
* Add a rule [initdata-in-component](https://github.com/ecomfe/eslint-plugin-san/blob/main/docs/rules/initdata-in-component.md).
* Add a rule [no-expression-in-template-literals](https://github.com/ecomfe/eslint-plugin-san/blob/main/docs/rules/no-expression-in-template-literals.md).
* Add a rule [boolean-value](https://github.com/ecomfe/eslint-plugin-san/blob/main/docs/rules/boolean-value.md)

## Fix
* Fix a bug that `comment-directive` can not handle ts/js files.
* Fix a bug that `no-dupe-keys` check the property in `san instance` but not the `data`.
* Fix a bug that `no-reserved-keys` check the property name in `computed dataTypes data initData` but not the `san instance`.
* Fix a bug that `order-in-components` give the incorrect order by default.
* Fix a bug that `valid-s-for` will check the `:key` in the tag and remove the supporting for complexity expression in `s-for`.
* Fix a bug that `no-side-effects-in-computed-propertiess` will check the expression like `this.data` but not `this.data.set`.
* Fix a bug that `max-attributes-per-line` fix the code incorrectly.
* Fix a bug that `html-closing-bracket-newline` fix the code properly.
