san.defineComponent({
    template: `<div>1</div>`,
    components: {
        'the-button': F, // Unused component
        'the-modal': F // Used component
    }
})

// @san/component
export class A {
    static template = `<div>1</div>`;
    components = {
        'the-button': F, // Unused component
        'the-modal': F // Used component
    }
}

export default {
    template: `<div>1</div>`,
    components: {
        'the-button': F, // Unused component
        'the-modal': F // Used component
    }
}
