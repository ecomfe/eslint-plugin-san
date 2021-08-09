san.defineComponent({
    template: `
        <div>
            <div s-for/>
            <div s-for:aaa="todo in todos"/>
            <div s-for.bbb="todo in todos"/>
        </div>
    `,

})

// @san/component
export class A {
    static template = `
        <div>
            <div s-for/>
            <div s-for:aaa="todo in todos"/>
            <div s-for.bbb="todo in todos"/>
        </div>
    `;
}

export default {
    template: `
        <div>
            <div s-for/>
            <div s-for:aaa="todo in todos"/>
            <div s-for.bbb="todo in todos"/>
        </div>
    `,

}
