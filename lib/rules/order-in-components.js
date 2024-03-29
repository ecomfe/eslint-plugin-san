/**
 * @fileoverview Keep order of properties in components
 * @author Michał Sajnóg
 */
'use strict';

/* eslint-disable */

const utils = require('../utils');
const traverseNodes = require('san-eslint-parser').AST.traverseNodes;

/**
 * @typedef {import('eslint-visitor-keys').VisitorKeys} VisitorKeys
 */

const defaultOrder = [
    // 视图
    'template',
    'components',
    'trimWhitespace',

    // 事件
    'messages',

    // 数据
    'dataTypes',
    'computed',
    'filters',
    'initData',

    // 生命周期
    'LIFECYCLE_HOOKS',

    // 额外参数，除了上面声明的其他方法放到最后
    // 'OTHER_METHODS'
];

/** @type { { [key: string]: string[] } } */
const groups = {
    LIFECYCLE_HOOKS: [
        'compiled',
        'inited',
        'created',
        'attached',
        'updated',
        'detached',
        'disposed'
    ]
};

/**
 * @param {(string | string[])[]} order
 */
function getOrderMap(order) {
    /** @type {Map<string, number>} */
    const orderMap = new Map();

    order.forEach((property, i) => {
        if (Array.isArray(property)) {
            property.forEach(p => orderMap.set(p, i));
        } else {
            orderMap.set(property, i);
        }
    });

    return orderMap;
}

/**
 * @param {Token} node
 */
function isComma(node) {
    return node.type === 'Punctuator' && node.value === ',';
}

const ARITHMETIC_OPERATORS = ['+', '-', '*', '/', '%', '**' /* es2016 */];
const BITWISE_OPERATORS = ['&', '|', '^', '~', '<<', '>>', '>>>'];
const COMPARISON_OPERATORS = ['==', '!=', '===', '!==', '>', '>=', '<', '<='];
const RELATIONAL_OPERATORS = ['in', 'instanceof'];
const ALL_BINARY_OPERATORS = [
    ...ARITHMETIC_OPERATORS,
    ...BITWISE_OPERATORS,
    ...COMPARISON_OPERATORS,
    ...RELATIONAL_OPERATORS
];
const LOGICAL_OPERATORS = ['&&', '||', '??' /* es2020 */];

/**
 * Result `true` if the node is sure that there are no side effects
 *
 * Currently known side effects types
 *
 * node.type === 'CallExpression'
 * node.type === 'NewExpression'
 * node.type === 'UpdateExpression'
 * node.type === 'AssignmentExpression'
 * node.type === 'TaggedTemplateExpression'
 * node.type === 'UnaryExpression' && node.operator === 'delete'
 *
 * @param  {ASTNode} node target node
 * @param  {VisitorKeys} visitorKeys sourceCode.visitorKey
 * @returns {boolean} no side effects
 */
function isNotSideEffectsNode(node, visitorKeys) {
    let result = true;
    /** @type {ASTNode | null} */
    let skipNode = null;
    traverseNodes(node, {
        visitorKeys,
        enterNode(node) {
            if (!result || skipNode) {
                return;
            }

            if (
                // no side effects node
                node.type === 'FunctionExpression' ||
                node.type === 'Identifier' ||
                node.type === 'Literal' ||
                // es2015
                node.type === 'ArrowFunctionExpression' ||
                node.type === 'TemplateElement'
            ) {
                skipNode = node;
            } else if (
                node.type !== 'Property' &&
                node.type !== 'ObjectExpression' &&
                node.type !== 'ArrayExpression' &&
                (node.type !== 'UnaryExpression' || !['!', '~', '+', '-', 'typeof'].includes(node.operator)) &&
                (node.type !== 'BinaryExpression' || !ALL_BINARY_OPERATORS.includes(node.operator)) &&
                (node.type !== 'LogicalExpression' || !LOGICAL_OPERATORS.includes(node.operator)) &&
                node.type !== 'MemberExpression' &&
                node.type !== 'ConditionalExpression' &&
                // es2015
                node.type !== 'SpreadElement' &&
                node.type !== 'TemplateLiteral' &&
                // es2020
                node.type !== 'ChainExpression'
            ) {
                // Can not be sure that a node has no side effects
                result = false;
            }
        },
        leaveNode(node) {
            if (skipNode === node) {
                skipNode = null;
            }
        }
    });

    return result;
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'enforce order of properties in components',
            categories: ['recommended'],
            url: 'https://ecomfe.github.io/eslint-plugin-san/rules/order-in-components.html'
        },
        fixable: 'code', // null or "code" or "whitespace"
        schema: [
            {
                type: 'object',
                properties: {
                    order: {
                        type: 'array'
                    }
                },
                additionalProperties: false
            }
        ]
    },
    /** @param {RuleContext} context */
    create(context) {
        const options = context.options[0] || {};
        /** @type {(string|string[])[]} */
        const order = options.order || defaultOrder;
        /** @type {(string|string[])[]} */
        const extendedOrder = order.map(property => (typeof property === 'string' && groups[property]) || property);
        const orderMap = getOrderMap(extendedOrder);
        const sourceCode = context.getSourceCode();

        function filterProp(prop) {
            return utils.isProperty(prop) || utils.isClassProperty(prop) || utils.isMethodDefinition(prop);
        }

        /**
         * @param {string} name
         */
        function getOrderPosition(name) {
            const num = orderMap.get(name);
            let otherMethodsOrder = orderMap.get('OTHER_METHODS');
            if (otherMethodsOrder == null) {
                otherMethodsOrder = -1;
            }
            return num == null ? otherMethodsOrder : num;
        }

        /**
         * @param {(Property | SpreadElement)[]} propertiesNodes
         */
        function checkOrder(propertiesNodes) {
            if (!Array.isArray(propertiesNodes)) {
                return;
            }
            debugger;
            const properties = propertiesNodes.filter(filterProp).map(property => {
                return {
                    node: property,
                    name:
                        utils.getStaticPropertyName(property) ||
                        (property.key.type === 'Identifier' && property.key.name) ||
                        ''
                };
            });

            properties.forEach((property, i) => {
                const orderPos = getOrderPosition(property.name);
                if (orderPos < 0) {
                    return;
                }
                const propertiesAbove = properties.slice(0, i);
                const unorderedProperties1 = propertiesAbove
                    .filter(p => getOrderPosition(p.name) > getOrderPosition(property.name));
                const unorderedProperties = unorderedProperties1.sort((p1, p2) => (getOrderPosition(p1.name) > getOrderPosition(p2.name) ? 1 : -1));

                const firstUnorderedProperty = unorderedProperties[0];

                if (firstUnorderedProperty) {
                    const line = firstUnorderedProperty.node.loc.start.line;
                    context.report({
                        node: property.node,
                        message: `The "{{name}}" property should be above the "{{firstUnorderedPropertyName}}" property on line {{line}}.`,
                        data: {
                            name: property.name,
                            firstUnorderedPropertyName: firstUnorderedProperty.name,
                            line
                        },
                        *fix(fixer) {
                            const propertyNode = property.node;
                            const firstUnorderedPropertyNode = firstUnorderedProperty.node;
                            const hasSideEffectsPossibility = propertiesNodes
                                .slice(
                                    propertiesNodes.indexOf(firstUnorderedPropertyNode),
                                    propertiesNodes.indexOf(propertyNode) + 1
                                )
                                .some(property => !isNotSideEffectsNode(property, sourceCode.visitorKeys));
                            if (hasSideEffectsPossibility) {
                                return;
                            }
                            const afterComma = sourceCode.getTokenAfter(propertyNode);
                            const hasAfterComma = isComma(afterComma);

                            const beforeComma = sourceCode.getTokenBefore(propertyNode);
                            const codeStart = beforeComma.range[1]; // to include comments
                            const codeEnd = hasAfterComma ? afterComma.range[1] : propertyNode.range[1];

                            const removeStart = hasAfterComma ? codeStart : beforeComma.range[0];
                            yield fixer.removeRange([removeStart, codeEnd]);

                            const propertyCode = sourceCode.text.slice(codeStart, codeEnd) + (hasAfterComma ? '' : ',');
                            const insertTarget = sourceCode.getTokenBefore(firstUnorderedPropertyNode);

                            yield fixer.insertTextAfter(insertTarget, propertyCode);
                        }
                    });
                }
            });
        }

        return utils.executeOnSan(context, obj => {
            if (obj.type === 'ClassBody') {
                checkOrder(obj.body);
            } else {
                checkOrder(obj.properties);
            }
        });
    }
};
