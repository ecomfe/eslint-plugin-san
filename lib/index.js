/**
 * @file 主文件
 */

'use strict';

const rules = [
    // base
    'comment-directive',

    // essential
    'custom-event-name-casing',
    'no-async-in-computed-properties',
    'no-dupe-keys',
    'no-dupe-s-else-if',
    'no-duplicate-attributes',
    'no-multiple-template-root',
    'no-parsing-error',
    'no-reserved-keys',
    'no-shared-component-data',
    'no-side-effects-in-computed-properties',
    'no-textarea-mustache',
    'no-unused-components',
    'no-unused-vars',
    'no-use-s-if-with-s-for',
    'return-in-computed-property',
    'valid-template-root',
    'valid-s-else-if',
    'valid-s-else',
    'valid-s-for',
    'valid-s-if',
    'valid-s-show',
    // 'valid-on',
    // 'valid-twoway-binding'

    // strongly-recommended
    'attribute-hyphenation',
    'html-closing-bracket-newline',
    'html-closing-bracket-spacing',
    'html-end-tags',
    'html-quotes',
    'html-self-closing',
    'max-attributes-per-line',
    'multiline-html-element-content-newline',
    'mustache-interpolation-spacing',
    'no-multi-spaces',
    'no-spaces-around-equal-signs-in-attribute',
    'no-template-shadow',
    'one-component-per-file',
    'singleline-html-element-content-newline',
    'html-indent',

    // recommended
    'attributes-order',
    'component-tags-order',
    'no-lone-template',
    'order-in-components',
    'this-in-template'
];

const extend = rules => {
    let map = {};
    rules.forEach(rule => {
        map[rule] = require(`./rules/${rule}.js`);
    });
    return map;
};

module.exports = {
    rules: extend(rules),
    configs: {
        base: require('./configs/base'),
        essential: require('./configs/essential'),
        // 'no-layout-rules': require('./configs/no-layout-rules'),
        recommended: require('./configs/recommended'),
        'strongly-recommended': require('./configs/strongly-recommended')
    },
    processors: {
        '.san': require('./processor')
    }
};
