san.defineComponent({
    template: `
        <div>
            <MyComponent my-prop="prop" />
        </div>
    `,
    attach() {
        // ...
    }
})

// @san/component
export class A {
    static template = `
        <div>
            <MyComponent my-prop="prop" />
        </div>
    `;
}

export default {
    template: `
        <div>
            <MyComponent my-prop="prop" />
        </div>
    `,
    dataTypes: {},
    components: {
        propA: Number,
    }
}
