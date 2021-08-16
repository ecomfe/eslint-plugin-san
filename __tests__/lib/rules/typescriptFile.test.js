/**
 * @file
 */
//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const fs = require("fs")
const path = require("path")
const RuleTester = require('eslint').RuleTester;
const eslint = require('eslint');
const assert = require('assert');
require('@typescript-eslint/parser');
require('san-eslint-parser');

// ------------------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------------------
const ROOT = path.join(__dirname, "../../fixtures/ts")
const TARGETS = fs.readdirSync(ROOT).filter(i => i !== 'comment-directive');

function runWithSingleRule() {
    for (const name of TARGETS) {
        const ruleTester = new RuleTester();

        const sourceFileName = fs
            .readdirSync(path.join(ROOT, name))
            .find(f => f.startsWith("source."));
        const sourcePath = path.join(ROOT, `${name}/${sourceFileName}`);
        const source = fs.readFileSync(sourcePath, "utf8");

        const errorsPath = path.join(ROOT, `${name}/errors.js`);
        const errors = require(errorsPath);

        const rule = require(`../../../lib/rules/${name}`);
        const invalidItem = {
            filename: "test.ts",
            code: source,
            parser: require.resolve('san-eslint-parser'),
            parserOptions: {
                parser: require.resolve('@typescript-eslint/parser'),
                ecmaVersion: 6,
                sourceType: "module",
                ecmaFeatures: {
                    classes: true
                }
            },
            errors
        };

        const outputPath = path.join(ROOT, `${name}/output.js`);
        let output = '';
        try {
            output = fs.readFileSync(outputPath, "utf8");
        } catch(err) {}
        output && (invalidItem.output = output);

        ruleTester.run(name, rule, {
            valid: [],
            invalid: [invalidItem]
        })
    }
}
runWithSingleRule();

function runWithMultiRules(name, rulesName, cb) {
    const rules = rulesName.reduce((rules, cur) => {
        const name = `san/${cur}`;
        rules[name] = 'error';
        return rules;
    }, {});
    const sourceFileName = fs
        .readdirSync(path.join(ROOT, name))
        .find(f => f.startsWith("source."))
    const sourcePath = path.join(ROOT, `${name}/${sourceFileName}`)
    // Initialize linter.
    const linter = new eslint.CLIEngine({
        parser: require.resolve('san-eslint-parser'),
        parserOptions: {
            parser: require.resolve('@typescript-eslint/parser'),
            ecmaVersion: 6,
            sourceType: "module",
            ecmaFeatures: {
                classes: true
            }
        },
        plugins: ['san'],
        rules,
        useEslintrc: false
    });

    describe(name, () => {
        it(name, () => {
            const messages = linter.executeOnFiles([sourcePath], 'test.ts').results[0].messages;
            cb(messages);
        });
    })
}

runWithMultiRules('comment-directive', [
    'max-attributes-per-line',
    'comment-directive'
], messages => {assert(messages.length === 0);});
