/**
 * @file utils
 */

'use strict';

const requireRule = function (rule) {
    return require(`eslint-plugin-vue/lib/rules/${rule}`);
};

exports.requireRule = requireRule;
