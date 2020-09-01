/**
 * @fileoverview <template s-for> key should be placed on the <template> tag.
 * @author yanghongxue
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'disallow key of `<template s-for>` placed on child elements',
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ],
        messages: {
            sForTemplateKeyPlacement:
                '`<template s-for>` key should be placed on the `<template>` tag.'
        }
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
            // method
        };
    }
};
