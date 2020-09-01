/**
 * @fileoverview if语句中不要使用var
 * @author demo
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            description: "if语句中不要使用var",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            "IfStatement > BlockStatement > VariableDeclaration" (node) {
                node.kind === 'var' &&
                    context.report({
                        node: node,
                        message: "error:var in if"
                    });
            }
        };
    }
};
