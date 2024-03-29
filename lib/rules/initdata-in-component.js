/**
 * @fileoverview Enforces component's data property to be a function.
 * @author Armano
 */
'use strict';

/* eslint-disable */

const utils = require('../utils');

/** @param {Token} token  */
function isOpenParen(token) {
    return token.type === 'Punctuator' && token.value === '(';
}

/** @param {Token} token  */
function isCloseParen(token) {
    return token.type === 'Punctuator' && token.value === ')';
}

/**
 * @param {Expression} node
 * @param {SourceCode} sourceCode
 */
function getFirstAndLastTokens(node, sourceCode) {
    let first = sourceCode.getFirstToken(node);
    let last = sourceCode.getLastToken(node);

    // If the value enclosed by parentheses, update the 'first' and 'last' by the parentheses.
    while (true) {
        const prev = sourceCode.getTokenBefore(first);
        const next = sourceCode.getTokenAfter(last);
        if (isOpenParen(prev) && isCloseParen(next)) {
            first = prev;
            last = next;
        } else {
            return {first, last};
        }
    }
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: "enforce component's data property to be a function",
            categories: ['essential'],
            url: 'https://ecomfe.github.io/eslint-plugin-san/rules/no-shared-component-data.html'
        },
        fixable: 'code',
        schema: []
    },
    /** @param {RuleContext} context */
    create(context) {
        const sourceCode = context.getSourceCode();

        return utils.executeOnSanComponent(context, obj => {
            const invalidData = utils.findProperty(
                obj,
                'initData',
                p =>
                    !p.value ||
                    (
                        p.value &&
                        p.value.type !== 'FunctionExpression' &&
                        p.value.type !== 'ArrowFunctionExpression' &&
                        p.value.type !== 'Identifier'
                    )
            );
            if (invalidData) {
                context.report({
                    node: invalidData,
                    message: '`initData` property in component must be a function.',
                    fix(fixer) {
                        const tokens = getFirstAndLastTokens(invalidData.value || invalidData, sourceCode);

                        return [
                            fixer.insertTextBefore(tokens.first, 'function() {\nreturn '),
                            fixer.insertTextAfter(tokens.last, ';\n}')
                        ];
                    }
                });
            }
        });
    }
};
