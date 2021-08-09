san.defineComponent({
    template: `
        <div>
            <div s-else="foo"/>
            <div s-else="{{ {aaa: bar} }}"/>
            <div s-else="{{ {bbb: bar} }}"/>
        </div>
    `,
})

// @san/component
export class A {
    static template = `
        <div>
            <div s-else="foo"/>
            <div s-else="{{ {aaa: bar} }}"/>
            <div s-else="{{ {bbb: bar} }}"/>
        </div>
    `;
}

export default {
    template: `
        <div>
            <div s-else="foo"/>
            <div s-else="{{ {aaa: bar} }}"/>
            <div s-else="{{ {bbb: bar} }}"/>
        </div>
    `,
}
