/**
 * @file plugin:san/base
 */

module.exports = {
    parser: require.resolve('vue-eslint-parser'),
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    env: {
        browser: true,
        es6: true
    },
    plugins: ['san'],
    rules: {
        'san/comment-directive': 'error',
        'san/experimental-script-setup-vars': 'error',
        // 'san/jsx-uses-vars': 'error'
    }
};
