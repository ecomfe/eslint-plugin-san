/**
 * @file plugin:san/strongly-recommended
 */

module.exports = {
    extends: require.resolve('./essential'),
    rules: {
        'san/attribute-hyphenation': 'warn',
        'san/component-definition-name-casing': 'warn',
        'san/html-closing-bracket-newline': 'warn',
        'san/html-closing-bracket-spacing': 'warn',
        'san/html-end-tags': 'warn',
        'san/html-indent': 'warn',
        'san/html-quotes': 'warn',
        'san/html-self-closing': 'warn',
        'san/max-attributes-per-line': 'warn',
        'san/multiline-html-element-content-newline': 'warn',
        'san/mustache-interpolation-spacing': 'warn',
        'san/no-multi-spaces': 'warn',
        'san/no-spaces-around-equal-signs-in-attribute': 'warn',
        'san/no-template-shadow': 'warn',
        'san/one-component-per-file': 'warn',
        'san/prop-name-casing': 'warn',
        'san/require-default-prop': 'warn',
        'san/require-prop-types': 'warn',
        'san/singleline-html-element-content-newline': 'warn',
        'san/v-bind-style': 'warn',
        'san/v-on-style': 'warn',
        'san/v-slot-style': 'warn'
    }
};