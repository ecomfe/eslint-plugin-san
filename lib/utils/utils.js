/**
 * @file utils
 */

'use strict';
const fs = require('fs');
const path = require('path');

const resolve = p => path.resolve(__dirname, p);

const requireRule = function (rule) {
    if (fs.existsSync(resolve(`../rules/${rule}.js`))) {
        return require(resolve(`../rules/${rule}.js`));
    }
    // return require(`eslint-plugin-vue/lib/rules/${rule}`);
};

exports.requireRule = requireRule;
