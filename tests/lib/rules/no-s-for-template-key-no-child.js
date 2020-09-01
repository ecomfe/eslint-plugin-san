/**
 * @fileoverview s-for避免无循环数据使用
 * @author yanghongxue
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const RuleTester = require("eslint").RuleTester;
const rule = require("../../../lib/rules/no-s-for-template-key-no-child");


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

ruleTester.run("no-s-for-template-key-no-child", rule, {
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
