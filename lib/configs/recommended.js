/**
 * @file plugin:san/recommended
 */

module.exports = {
    extends: require.resolve('./strongly-recommended'),
    rules: {
        'san/attributes-order': 'warn',
        'san/component-tags-order': 'warn',
        'san/no-lone-template': 'warn',
        'san/no-multiple-slot-args': 'warn',
        'san/no-v-html': 'warn',
        'san/order-in-components': 'warn',
        'san/this-in-template': 'warn'
    }
};
