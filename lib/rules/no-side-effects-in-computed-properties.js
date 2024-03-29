/**
 * @fileoverview Don't introduce side effects in computed properties
 * @author Michał Sajnóg
 */
'use strict';

/* eslint-disable */

const utils = require('../utils');

/**
 * @typedef {import('../utils').SanObjectData} SanObjectData
 * @typedef {import('../utils').ComponentComputedProperty} ComponentComputedProperty
 */

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'disallow side effects in computed properties',
            categories: ['essential'],
            url: 'https://ecomfe.github.io/eslint-plugin-san/rules/no-side-effects-in-computed-properties.html'
        },
        fixable: null,
        schema: []
    },
    /** @param {RuleContext} context */
    create(context) {
        /** @type {Map<ObjectExpression, ComponentComputedProperty[]>} */
        const computedPropertiesMap = new Map();

        /**
         * @typedef {object} ScopeStack
         * @property {ScopeStack | null} upper
         * @property {BlockStatement | Expression | null} body
         */
        /**
         * @type {ScopeStack | null}
         */
        let scopeStack = null;

        /** @param {FunctionExpression | ArrowFunctionExpression | FunctionDeclaration} node */
        function onFunctionEnter(node) {
            scopeStack = {
                upper: scopeStack,
                body: node.body
            };
        }

        function onFunctionExit() {
            scopeStack = scopeStack && scopeStack.upper;
        }

        return utils.defineSanVisitor(context, {
            onSanObjectEnter(node) {
                computedPropertiesMap.set(node, utils.getComputedProperties(node));
            },
            ':function': onFunctionEnter,
            ':function:exit': onFunctionExit,

            /**
             * @param {(Identifier | ThisExpression) & {parent: MemberExpression}} node
             * @param {SanObjectData} data
             */
            'MemberExpression > :matches(Identifier, ThisExpression)'(node, {node: sanNode}) {
                if (!scopeStack) {
                    return;
                }
                const targetBody = scopeStack.body;
                const computedProperty = /** @type {ComponentComputedProperty[]} */ computedPropertiesMap
                    .get(sanNode)
                    .find(cp => {
                        return (
                            (cp.value &&
                            node.loc.start.line >= cp.value.loc.start.line &&
                            node.loc.end.line <= cp.value.loc.end.line &&
                            targetBody === cp.value)
                        );
                    });
                if (!computedProperty) {
                    return;
                }

                if (!utils.isThis(node, context)) {
                    return;
                }

                const mem = node.parent;
                if (mem.object !== node) {
                    return;
                }

                if (mem.property && mem.property.name !== 'data') {
                    context.report({
                        node: mem,
                        message: 'Can not access "this.{{key}}" in computed property of san components',
                        data: {key: mem.property.name || 'Unknown'}
                    });
                    return;
                }

                const invalid = utils.findMutating(mem);
                if (invalid) {
                    context.report({
                        node: invalid.node,
                        message: 'Unexpected side effect in "{{key}}" computed property.',
                        data: {key: computedProperty.key || 'Unknown'}
                    });
                }
            }
        });
    }
};
