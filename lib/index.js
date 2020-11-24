/**
 * @file 主文件
 */

'use strict';

const requireRule = require('./utils/utils').requireRule;

const rules = [
    // base
    'comment-directive',
    'experimental-script-setup-vars',

    // essential
    // 'no-async-in-computed-properties',
    // 'no-dupe-keys',
    'no-duplicate-attributes',
    'no-parsing-error',
    // 'no-reserved-keys',
    // 'no-shared-component-data',
    // 'no-side-effects-in-computed-properties',
    // 'no-textarea-mustache',
    // 'return-in-computed-property',
    // 'valid-template-root',
    'valid-s-show',
    'valid-s-if',
    'valid-s-else-if',
    'valid-s-else',
    'no-template-key',
    // 'valid-on',
    // 'valid-twoway-binding',
    'valid-s-for',
    // 'no-unused-vars',
    // 'require-valid-default-prop',

    // // strongly-recommended
    // 'attribute-hyphenation',
    'html-end-tags',
    'html-self-closing',
    // 'html-indent',
    // 'max-attributes-per-line',
    // 'mustache-interpolation-spacing',
    // 'no-multi-spaces',
    // 'name-property-casing',
    // 'require-default-prop',
    // 'require-prop-types',

    // // recommended
    'html-quotes',
    // 'order-in-components',
    // 'no-confusing-s-for-s-if',
    // 'attributes-order',
    // 'data-method-in-components'
];

const extend = rules => {
    let map = {};
    rules.forEach(rule => {
        map[rule] = requireRule(rule);
    });
    return map;
};

module.exports = {
    rules: extend(rules),
    configs: {
        base: require('./configs/base'),
        essential: require('./configs/essential'),
        'no-layout-rules': require('./configs/no-layout-rules'),
        recommended: require('./configs/recommended'),
        'strongly-recommended': require('./configs/strongly-recommended')
    },
    processors: {
        '.san': require('./processor')
    }
};
