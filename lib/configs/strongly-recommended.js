/**
 * @file plugin:san/strongly-recommended
 */

module.exports = {
    extends: require.resolve('./essential'),
    rules: {
        'san/attribute-hyphenation': 'warn',
        'san/html-end-tags': 'warn',
        'san/html-self-closing': 'warn',
        // 'san/html-indent': 'warn',
        'san/max-attributes-per-line': 'warn',
        'san/mustache-interpolation-spacing': 'warn',
        'san/no-multi-spaces': 'warn',
        'san/name-property-casing': 'warn'
    }
};
