/**
 * @file plugin:san/recommended
 */

module.exports = {
    extends: require.resolve('./strongly-recommended'),
    rules: {
        // 'san/order-in-components': 'warn',
        // 'san/attributes-order': 'warn',
        // 'san/data-method-in-components': 'warn',
        'san/html-quotes': 'warn',
        // 'san/no-confusing-s-for-s-if': 'warn'
    }
};
