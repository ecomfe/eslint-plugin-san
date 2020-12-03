/**
 * @file plugin:san/base
 */

module.exports = {
    parser: require.resolve('san-eslint-parser'),
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
        'san/comment-directive': 'error'
    }
};
