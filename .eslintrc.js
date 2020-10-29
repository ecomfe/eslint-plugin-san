/**
 * @file eslint
 */

'use strict';

module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2018
    },
    env: {
        es6: true,
        node: true,
        mocha: true
    },
    extends: ['plugin:eslint-plugin/recommended', 'prettier'],
    plugins: ['eslint-plugin', 'prettier'],
    rules: {
        'no-dupe-keys': 2,

        'prettier/prettier': 'error',
        'eslint-plugin/report-message-format': ['error', '^[A-Z`\'{].*\\.$'],
        'eslint-plugin/prefer-placeholders': 'error',
        'eslint-plugin/consistent-output': 'error'
    },
    overrides: [
        {
            files: ['**/*.san'],
            parser: require.resolve('san-eslint-parser'),
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module'
            }
        }
    ]
};
