/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
'use strict';

const rules = require('../../tools/lib/rules');

const uncategorizedRules = rules.filter(
    rule => !rule.meta.docs.categories && !rule.meta.docs.extensionRule && !rule.meta.deprecated
);
const uncategorizedExtensionRule = rules.filter(
    rule => !rule.meta.docs.categories && rule.meta.docs.extensionRule && !rule.meta.deprecated
);
const deprecatedRules = rules.filter(rule => rule.meta.deprecated);

const sidebarCategories = [
    {
        title: 'Base Rules',
        categoryIds: ['base']
    },
    {
        title: 'Priority A: Essential',
        categoryIds: ['essential']
    },
    {
        title: 'Priority B: Strongly Recommended',
        categoryIds: ['strongly-recommended']
    },
    {
        title: 'Priority C: Recommended',
        categoryIds: ['recommended']
    }
];

const categorizedRules = [];
for (const {title, categoryIds} of sidebarCategories) {
    const categoryRules = rules
        .filter(rule => rule.meta.docs.categories && !rule.meta.deprecated)
        .filter(rule => categoryIds.every(categoryId => rule.meta.docs.categories.includes(categoryId)));
    const children = categoryRules
        .filter(({ruleId}) => {
            const exists = categorizedRules.some(({children}) =>
                children.some(([, alreadyRuleId]) => alreadyRuleId === ruleId)
            );
            return !exists;
        })
        .map(({ruleId, name}) => [`/rules/${name}`, ruleId]);

    if (children.length === 0) {
        continue;
    }
    categorizedRules.push({
        title,
        collapsable: false,
        children
    });
}

const extraCategories = [];
if (uncategorizedRules.length > 0) {
    extraCategories.push({
        title: 'Uncategorized',
        collapsable: false,
        children: uncategorizedRules.map(({ruleId, name}) => [`/rules/${name}`, ruleId])
    });
}
if (uncategorizedExtensionRule.length > 0) {
    extraCategories.push({
        title: 'Extension Rules',
        collapsable: false,
        children: uncategorizedExtensionRule.map(({ruleId, name}) => [`/rules/${name}`, ruleId])
    });
}
if (deprecatedRules.length > 0) {
    extraCategories.push({
        title: 'Deprecated',
        collapsable: false,
        children: deprecatedRules.map(({ruleId, name}) => [`/rules/${name}`, ruleId])
    });
}

module.exports = {
    configureWebpack(_config, _isServer) {
        return {
            resolve: {
                alias: {
                    module: require.resolve('./shim/module')
                }
            }
        };
    },

    base: '/eslint-plugin-san/',
    title: 'eslint-plugin-san',
    description: 'Official ESLint plugin for San',
    evergreen: true,
    head: [['link', {rel: 'icon', href: '/favicon.ico'}]],

    plugins: {
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: true
        }
    },

    themeConfig: {
        repo: 'ecomfe/eslint-plugin-san',
        docsRepo: 'ecomfe/eslint-plugin-san',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        lastUpdated: true,

        nav: [
            {text: '用户指南', link: '/user-guide/'},
            {text: '开发指南', link: '/developer-guide/'},
            {text: '规则', link: '/rules/'},
            {text: '代码规范', link: '/style-guide/'}
        ],

        sidebar: {
            '/rules/': [
                // Rules in each category.
                ...categorizedRules,

                // Rules in no category.
                ...extraCategories
            ],

            '/': ['/user-guide/', '/developer-guide/', '/rules/', '/style-guide/']
        },

        algolia: {
            apiKey: 'b2b69365da747a9a9635cda391317c36',
            indexName: 'eslint-plugin-san'
        }
    }

};
