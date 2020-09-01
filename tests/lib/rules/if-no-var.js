/**
 * @fileoverview if语句中不要使用var
 * @author yanghongxue
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const RuleTester = require("eslint").RuleTester;
const rule = require("../../../lib/rules/if-no-var");


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

ruleTester.run("if-no-var", rule, {
    valid: [
        {
            code: 'if(true){}'
        }
    ],

    invalid: [
        {
            code: "if(true){var a = 'a'}",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
