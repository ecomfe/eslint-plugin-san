san.defineComponent({
    template: `
        <div>
            <MyComponent myProp="prop" />
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
            <MyComponent myProp="prop" />
        </div>
    `;
}

export default {
    template: `
        <div>
            <MyComponent myProp="prop" />
        </div>
    `,
    dataTypes: {},
    components: {
        propA: Number,
    }
}
