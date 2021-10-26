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
        titleZh: '基础规则',
        categoryIds: ['base']
    },
    {
        title: 'Priority A: Essential',
        titleZh: '优先级 A: 必要',
        categoryIds: ['essential']
    },
    {
        title: 'Priority B: Strongly Recommended',
        titleZh: '优先级 B: 强烈推荐',
        categoryIds: ['strongly-recommended']
    },
    {
        title: 'Priority C: Recommended',
        titleZh: '优先级 C: 推荐',
        categoryIds: ['recommended']
    }
];

const createCategorizedRules = function(languageRoute = '') {
    const categorizedRules = [];
    for (const {title, titleZh, categoryIds} of sidebarCategories) {
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
            .map(({ruleId, name}) => [`${languageRoute}/rules/${name}`, ruleId]);

        if (children.length === 0) {
            continue;
        }
        categorizedRules.push({
            title: languageRoute ? titleZh : title,
            collapsable: false,
            children
        });
    }
    return categorizedRules
}

const createExtraCategories = function(languageRoute) {
    const extraCategories = [];
    if (uncategorizedRules.length > 0) {
        extraCategories.push({
            title: 'Uncategorized',
            collapsable: false,
            children: uncategorizedRules.map(({ruleId, name}) => [`${languageRoute}/rules/${name}`, ruleId])
        });
    }
    if (uncategorizedExtensionRule.length > 0) {
        extraCategories.push({
            title: 'Extension Rules',
            collapsable: false,
            children: uncategorizedExtensionRule.map(({ruleId, name}) => [`${languageRoute}/rules/${name}`, ruleId])
        });
    }
    if (deprecatedRules.length > 0) {
        extraCategories.push({
            title: 'Deprecated',
            collapsable: false,
            children: deprecatedRules.map(({ruleId, name}) => [`${languageRoute}/rules/${name}`, ruleId])
        });
    }
    return extraCategories
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
        algolia: {
            apiKey: 'b2b69365da747a9a9635cda391317c36',
            indexName: 'eslint-plugin-san'
        },
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',

                nav: [
                    {text: 'User Guide', link: '/user-guide/'},
                    {text: 'Developer Guide', link: '/developer-guide/'},
                    {text: 'Rules', link: '/rules/'},
                    {text: 'Style Guide', link: '/style-guide/'}
                ],

                sidebar: {
                    '/rules/': [
                        // Rules in each category.
                        ...createCategorizedRules(),

                        // Rules in no category.
                        ...createExtraCategories()
                    ],

                    '/': ['/user-guide/', '/developer-guide/', '/rules/', '/style-guide/']
                }
            },

            '/zh/': {
                selectText: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                label: '简体中文',
                lastUpdated: '最后更新',

                nav: [
                    {text: '用户指南', link: '/zh/user-guide/'},
                    {text: '开发指南', link: '/zh/developer-guide/'},
                    {text: '规则', link: '/zh/rules/'},
                    {text: '样式指南', link: '/zh/style-guide/'}
                ],

                sidebar: {
                    '/zh/rules/': [
                        // Rules in each category.
                        ...createCategorizedRules('/zh'),

                        // Rules in no category.
                        ...createExtraCategories('/zh')
                    ],

                    '/zh/': ['/zh/user-guide/', '/zh/developer-guide/', '/zh/rules/', '/zh/style-guide/']
                }
            }
        }
    },

    locales: {
        '/': {
            lang: 'en-US'
        },
        '/zh/': {
            lang: 'zh-CN'
        }
    }

};
