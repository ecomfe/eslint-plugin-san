san.defineComponent({
    template: `<textarea>{{ message }}</textarea>`,
})

// @san/component
export class A {
    static template = `<textarea>{{ message }}</textarea>`;
}

export default {
    template: `<textarea>{{ message }}</textarea>`,
}
