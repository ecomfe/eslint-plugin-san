san.defineComponent({
    template: `
        <div>
            <div s-if/>
            <div s-if="{{ {aaa: bar} }}"/>
            <div s-if="{{ {bbb: bar} }}"/>
            <div
                s-if="foo"
                s-else
            />
            <div
                s-if="foo"
                s-else-if="bar"
            />
        </div>
    `,
})

// @san/component
export class A {
    static template = `
        <div>
            <div s-if/>
            <div s-if="{{ {aaa: bar} }}"/>
            <div s-if="{{ {bbb: bar} }}"/>
            <div
                s-if="foo"
                s-else
            />
            <div
                s-if="foo"
                s-else-if="bar"
            />
        </div>
    `;
}

export default {
    template: `
        <div>
            <div s-if/>
            <div s-if="{{ {aaa: bar} }}"/>
            <div s-if="{{ {bbb: bar} }}"/>
            <div
                s-if="foo"
                s-else
            />
            <div
                s-if="foo"
                s-else-if="bar"
            />
        </div>
    `,
}
