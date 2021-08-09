san.defineComponent({
    template: `
        <div>${template}</div><div>
    </div>`,
    attach() {
        // ...
    }
})

// @san/component
export class A {
    static template = `
        <div>${template}</div><div>
    </div>`;
}

export default {
    template: `
        <div>${template}</div><div>
    </div>`,
}
