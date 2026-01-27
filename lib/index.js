/**
 * @file 主文件
 */

'use strict';

const rules = [
    // base
    'comment-directive',

    // essential
    'valid-components-name',
    'custom-event-name-casing',
    'data-name-casing',
    'no-async-in-computed-properties',
    'no-dupe-keys',
    'no-dupe-s-else-if',
    'no-duplicate-attributes',
    'no-empty-attributes',
    'no-multiple-template-root',
    'no-parsing-error',
    'no-reserved-keys',
    'initdata-in-component',
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
    'boolean-value',
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
    'this-in-template',
    'no-expression-in-template-literals'
];

const extend = rules => {
    let map = {};
    rules.forEach(rule => {
        map[rule] = require(`./rules/${rule}.js`);
    });
    return map;
};

// Build rules object
const rulesMap = extend(rules);

// Processor
const processor = require('./processor');

// Legacy configs (ESLint 7/8 eslintrc format)
const legacyConfigs = {
    base: require('./configs/base'),
    essential: require('./configs/essential'),
    // 'no-layout-rules': require('./configs/no-layout-rules'),
    recommended: require('./configs/recommended'),
    'strongly-recommended': require('./configs/strongly-recommended')
};

// ESLint 9 flat config format
const plugin = {
    meta: {
        name: 'eslint-plugin-san',
        version: '1.0.5'
    },
    rules: rulesMap,
    processors: {
        '.san': processor,
        '.ts': processor,
        '.js': processor,
        // ESLint 9 flat config processor format
        san: processor
    }
};

// Base rules for flat config
const baseRules = {
    'san/comment-directive': 'error'
};

// Essential rules for flat config
const essentialRules = {
    ...baseRules,
    'san/valid-components-name': 'error',
    'san/custom-event-name-casing': 'error',
    'san/data-name-casing': 'error',
    'san/no-async-in-computed-properties': 'error',
    'san/no-dupe-keys': 'error',
    'san/no-dupe-s-else-if': 'error',
    'san/no-duplicate-attributes': 'error',
    'san/no-empty-attributes': 'error',
    'san/no-multiple-template-root': 'error',
    'san/no-parsing-error': 'error',
    'san/no-reserved-keys': 'error',
    'san/initdata-in-component': 'error',
    'san/no-side-effects-in-computed-properties': 'error',
    'san/no-textarea-mustache': 'error',
    'san/no-unused-components': 'error',
    'san/no-unused-vars': 'error',
    'san/no-use-s-if-with-s-for': 'error',
    'san/return-in-computed-property': 'error',
    'san/valid-template-root': 'error',
    'san/valid-s-else-if': 'error',
    'san/valid-s-else': 'error',
    'san/valid-s-for': 'error',
    'san/valid-s-if': 'error',
    'san/valid-s-show': 'error'
};

// Strongly recommended rules for flat config
const stronglyRecommendedRules = {
    ...essentialRules,
    'san/boolean-value': 'warn',
    'san/attribute-hyphenation': 'warn',
    'san/html-closing-bracket-newline': 'warn',
    'san/html-closing-bracket-spacing': 'warn',
    'san/html-end-tags': 'warn',
    'san/html-quotes': 'warn',
    'san/html-self-closing': 'warn',
    'san/max-attributes-per-line': 'warn',
    'san/multiline-html-element-content-newline': 'warn',
    'san/mustache-interpolation-spacing': 'warn',
    'san/no-multi-spaces': 'warn',
    'san/no-spaces-around-equal-signs-in-attribute': 'warn',
    'san/no-template-shadow': 'warn',
    'san/one-component-per-file': 'warn',
    'san/singleline-html-element-content-newline': 'warn',
    'san/html-indent': ['error', 4],
};

// Recommended rules for flat config
const recommendedRules = {
    ...stronglyRecommendedRules,
    'san/attributes-order': 'warn',
    'san/component-tags-order': 'warn',
    'san/no-lone-template': 'warn',
    'san/order-in-components': 'warn',
    'san/this-in-template': 'warn',
    'san/no-expression-in-template-literals': 'warn'
};

/**
 * Create flat config for ESLint 9+
 * @param {Object} rules - Rules configuration
 * @returns {Object} Flat config object
 */
function createFlatConfig(rules) {
    return {
        name: 'san',
        plugins: {
            san: plugin
        },
        processor: 'san/san',
        languageOptions: {
            parser: require('san-eslint-parser'),
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module'
            },
            globals: {
                // browser globals
                window: 'readonly',
                document: 'readonly',
                navigator: 'readonly',
                console: 'readonly',
                // ES6 globals
                Promise: 'readonly',
                Map: 'readonly',
                Set: 'readonly',
                Symbol: 'readonly'
            }
        },
        rules
    };
}

// Flat configs for ESLint 9+
const flatConfigs = {
    'flat/base': createFlatConfig(baseRules),
    'flat/essential': createFlatConfig(essentialRules),
    'flat/strongly-recommended': createFlatConfig(stronglyRecommendedRules),
    'flat/recommended': createFlatConfig(recommendedRules)
};

// Export
module.exports = {
    // Plugin metadata
    meta: plugin.meta,
    // Rules
    rules: rulesMap,
    // Legacy configs (ESLint 7/8)
    configs: {
        ...legacyConfigs,
        ...flatConfigs
    },
    // Processors
    processors: {
        '.san': processor,
        '.ts': processor,
        '.js': processor,
        san: processor
    }
};
