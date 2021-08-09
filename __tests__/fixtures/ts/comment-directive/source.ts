san.defineComponent({
    template : `
        <div>
            <!-- eslint-disable-next-line san/max-attributes-per-line -->
            <div a="1" b="2" c="3" d="4" />
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
            <!-- eslint-disable-next-line san/max-attributes-per-line -->·
            <div a="1" b="2" c="3" d="4" />
        </div>
    `;
}

export default {
    template : `
        <div>
            <!-- eslint-disable-next-line san/max-attributes-per-line -->
            <div a="1" b="2" c="3" d="4" />
        </div>
    `,
    dataTypes: {},
    components: {
        propA: Number,
    }
}
