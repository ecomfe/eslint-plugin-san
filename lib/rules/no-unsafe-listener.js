'use strict';

/* eslint-disable */

const utils = require('../utils');

/**
 * @typedef {import('../utils').GroupName} GroupName
 */

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'addEventListener must be released.',
            categories: ['recommended'],
            url: 'https://ecomfe.github.io/eslint-plugin-san/rules/no-unsafe-listener.html'
        },
        fixable: null, // or "code" or "whitespace"
    },
    /** @param {RuleContext} context */
    create(context) {
        const listener = new Map();

        // ----------------------------------------------------------------------
        // Public
        // ----------------------------------------------------------------------

        function getEventInfo(expression) {
            let key, name;
            if (expression.arguments.length === 2 && expression.arguments[0].type === 'Literal') {
                // addEventListener('scroll', function() {})
                const target = expression.arguments[1];

                if (target.type === 'Identifier') {
                    // addEventListener('scroll', scroll);
                    key = expression.arguments[0].value;
                    name = target.name;
                } else if (target.type === 'MemberExpression') {
                    //  addEventListener('scroll', this.scroll);
                    const isThis = target.object.type === 'ThisExpression';
                    key = expression.arguments[0].value;
                    name = isThis ? `this.${target.property.name}` : target.property.name;
                } else if (target.type === 'ArrowFunctionExpression' || target.type === 'FunctionExpression') {
                    //  addEventListener('scroll', () => {});
                    //  addEventListener('scroll', function(){});
                    return {
                        invalid: true,
                        type: 'anonymous',
                        expression
                    };
                } else {
                    return {
                        invalid: true,
                        type: 'invalid',
                        expression
                    };
                }
            }

            return {
                key,
                name,
                expression
            };
        }

        function recordListener(key, name, expression) {
            listener.set(key, {
                name: name,
                node: expression,
                removed: 0
            });
        }

        function matchRemoveName(key, name, expression) {
            if (!listener.has(key)) {
                context.report({
                    node: expression.arguments[0],
                    message: `removeEventListener('${key}', ${name}) Cannot matched addEventListener('${key}', ${name}).`
                });
            } else {
                const item = listener.get(key);
                // removeEventListener 的函数名和 addEventListener 不同
                if (item.name !== name) {
                    context.report({
                        node: expression.arguments[1],
                        message: `removeEventListener('${key}', ${name}) is not matched addEventListener('${key}', ${item.name}).`
                    });
                } else {
                    listener.set(key, {
                        ...listener.get(key),
                        removed: (listener.get(key).removed ?? 0) + 1
                    });
                }
            }
        }

        function iterateFunctionExpression(node, key, cb) {
            for (const n of node.body.body) {
                if (n.type === 'ExpressionStatement' && n.expression.type === 'CallExpression') {
                    const t = n.expression.callee;
                    if (t.type === 'Identifier') {
                        if (t.name === key) {
                            cb(n.expression);
                        }
                    } else if (t.type === 'MemberExpression') {
                        if (t.property.name === key) {
                            cb(n.expression);
                        }
                    }
                }
            }
        }

        return utils.executeOnSan(context, (obj) => {
            if (obj.type === 'ObjectExpression') {
                obj.properties.forEach((n) => {
                    if (['FunctionExpression', 'ArrowFunctionExpression'].includes(n.value.type)) {
                        iterateFunctionExpression(n.value, 'addEventListener', (e) => {
                            const {type, key, name, invalid, expression} = getEventInfo(e);
                            if (invalid) {
                                context.report({
                                    node: expression.arguments[1],
                                    message: `addEventListener Cannot use ${type} functions.`
                                });
                            } else {
                                recordListener(key, name, expression);
                            }
                        });

                        iterateFunctionExpression(n.value, 'removeEventListener', (e) => {
                            const {type, key, name, invalid, expression} = getEventInfo(e);
                            if (invalid) {
                                context.report({
                                    node: expression.arguments[1],
                                    message: `removeEventListener Cannot use ${type} functions.`
                                });
                            } else {
                                matchRemoveName(key, name, expression);
                            }
                        });
                    }
                });
            } else if (obj.type === 'ClassBody') {
                const body = obj.body;
                for (const item of body) {
                    if (item.value && ['FunctionExpression', 'ArrowFunctionExpression'].includes(item.value.type)) {
                        iterateFunctionExpression(item.value, 'addEventListener', (e) => {
                            const {type, key, name, invalid, expression} = getEventInfo(e);
                            if (invalid) {
                                context.report({
                                    node: expression.arguments[1],
                                    message: `addEventListener Cannot use ${type} functions.`
                                });
                            } else {
                                recordListener(key, name, expression);
                            }
                        });

                        iterateFunctionExpression(item.value, 'removeEventListener', (e) => {
                            const {type, key, name, invalid, expression} = getEventInfo(e);
                            if (invalid) {
                                context.report({
                                    node: expression.arguments[1],
                                    message: `removeEventListener Cannot use ${type} functions.`
                                });
                            } else {
                                matchRemoveName(key, name, expression);
                            }
                        });
                    }
                }
            }

            // 还有没处理的 eventListener, 提示没有释放
            if (listener.size) {
                Array.from(listener.keys()).forEach((key) => {
                    const item = listener.get(key);
                    if (item.removed === 0) {
                        context.report({
                            node: item.node,
                            message: `addEventListener('${key}', ${item.name}) is not matched removeEventListener('${key}', ${item.name}).`
                        });
                    }
                });
            }
        });
    }
};
