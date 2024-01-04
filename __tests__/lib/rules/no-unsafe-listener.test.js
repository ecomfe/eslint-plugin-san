'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-unsafe-listener');
const RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    }
});
ruleTester.run('no-unsafe-listener', rule, {
    valid: [
        {
            filename: 'testValid.san',
            code: `
            export default {
                attached() {
                    window.addEventListener('scroll', run);
            
                    window.addEventListener('hover', func);
                    
                    console.log(123)
            
                    this.registerEvent();
                    addEventListener('click', this.click)
                },
                detached() {
                    removeEventListener('hover', func)
            
                    removeEventListener('scroll', run)
                },

                click() {

                },

                other() {
                    removeEventListener('click', this.click)
                },
            
                initData () {
                    return {
                        bar: ''
                    }
                },
            }
            `
        },
        {
            filename: 'testClassValid.san',
            code: `
            import {Component} from 'san';
            import {test} from '@baidu/node-utils';
            // import type {TypeTest} from '@types/node-utils';

            export default class App extends Component {
                attached() {
                    window.addEventListener('scroll', run);
            
                    window.addEventListener('hover', func);
                    
                    console.log(123)
            
                    this.registerEvent();
                }

                detached() {
                    removeEventListener('hover', func)
            
                    removeEventListener('scroll', run)
            
                }
            
                initData () {
                    return {
                        bar: ''
                    }
                }
            }
            `
        }
    ],

    invalid: [
        {
            filename: 'testInvalid.san',
            code: `
            export default {
                attached() {
                    window.addEventListener('scroll', () => {
            
                    })
            
                    addEventListener('scroll', function() {
            
                    })
            
            
                    window.addEventListener('scroll', run);
            
                    window.addEventListener('hover', func);
                    
                    console.log(123)
            
                    this.registerEvent();

                    addEventListener('click', this.click)
                },
                detached() {
                    removeEventListener('click', () => {
                        
                    })
            
                    removeEventListener('scroll', run)
            
                    window.removeEventListener('hover', run);
            
                    removeEventListener('blur', run)
                },
            
                initData () {
                    return {
                        bar: ''
                    }
                },
                _foo () {
                    window.addEventListener('scroll', () => {
            
                    })
            
                    addEventListener('scroll', function() {
            
                    })

                    removeEventListener('click', run)
                },
                test () {}
                }
            `,
            errors: [
                {
                    message: 'addEventListener Cannot use anonymous functions.',
                    line: 4
                },
                {
                    message: 'addEventListener Cannot use anonymous functions.',
                    line: 8
                },
                {
                    message: 'addEventListener(\'hover\', func) is not matched removeEventListener(\'hover\', func).',
                    line: 15
                },
                {
                    message: 'addEventListener(\'click\', this.click) is not matched removeEventListener(\'click\', this.click).',
                    line: 21
                },
                {
                    message: 'removeEventListener Cannot use anonymous functions.',
                    line: 24
                },
                {
                    message: 'removeEventListener(\'hover\', run) is not matched addEventListener(\'hover\', func).',
                    line: 30
                },
                {
                    message: 'removeEventListener(\'blur\', run) Cannot matched addEventListener(\'blur\', run).',
                    line: 32
                },
                {
                    message: 'addEventListener Cannot use anonymous functions.',
                    line: 41
                },
                {
                    message: 'addEventListener Cannot use anonymous functions.',
                    line: 45
                },
                {
                    message: 'removeEventListener(\'click\', run) is not matched addEventListener(\'click\', this.click).',
                    line: 49
                }
            ]
        },
        {
            filename: 'testClassInvalid.san',
            code: `
            import {Component} from 'san';
            import {test} from '@baidu/node-utils';
            export default class App extends Component {
                initData() {
                    return {
            
                    };
                }
            
                attached() {
                    window.addEventListener('scroll', () => {
                    })
            
                    addEventListener('scroll', function() {
            
                    })
                
                    window.addEventListener('scroll', run);
            
                    window.addEventListener('hover', func);

                    addEventListener('click', this.click)
                }
            
                detached() {
                    removeEventListener('test', () => {
                        
                    })
            
                    removeEventListener('scroll', run)
            
                    window.removeEventListener('hover', run);
            
                    removeEventListener('blur', run)
                }

                foo() {
                    removeEventListener('click', run)
                }

                click() {
                }
            }
            `,
            errors: [
                {
                    message: 'addEventListener Cannot use anonymous functions.',
                    line: 12
                },
                {
                    message: 'addEventListener Cannot use anonymous functions.',
                    line: 15
                },
                {
                    message: 'addEventListener(\'hover\', func) is not matched removeEventListener(\'hover\', func).',
                    line: 21
                },
                {
                    message: 'addEventListener(\'click\', this.click) is not matched removeEventListener(\'click\', this.click).',
                    line: 23
                },
                {
                    message: 'removeEventListener Cannot use anonymous functions.',
                    line: 27
                },
                {
                    message: 'removeEventListener(\'hover\', run) is not matched addEventListener(\'hover\', func).',
                    line: 33
                },
                {
                    message: "removeEventListener('blur', run) Cannot matched addEventListener('blur', run).",
                    line: 35,
                  },
                  {
                    message: "removeEventListener('click', run) is not matched addEventListener('click', this.click).",
                    line: 39,
                  }
            ]
        }
    ]
});
