/**
 * @file plugin:san/essential
 */

module.exports = {
    extends: require.resolve('./base'),
    rules: {
        'san/no-async-in-computed-properties': 'error',
        'san/no-dupe-keys': 'error',
        'san/no-duplicate-attributes': 'error',
        'san/no-parsing-error': 'error',
        'san/no-reserved-keys': 'error',
        'san/no-shared-component-data': 'error',
        'san/no-side-effects-in-computed-properties': 'error',
        'san/no-textarea-mustache': 'error',
        'san/return-in-computed-property': 'error',
        'san/valid-template-root': 'error',
        'san/valid-s-show': 'error',
        'san/valid-s-if': 'error',
        'san/valid-s-else-if': 'error',
        'san/valid-s-else': 'error',
        'san/valid-s-for': 'error',
        'san/no-template-key': 'error',
        'san/no-unused-vars': 'error',
        // 'san/valid-on': 'error',
        // 'san/valid-twoway-binding': 'error',

        'san/custom-event-name-casing': 'error',
        'san/no-dupe-v-else-if': 'error'
    }
};
