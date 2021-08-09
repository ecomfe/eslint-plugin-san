san.defineComponent({
    template: `
        <div>
            <div s-show/>
            <div s-show:aaa="foo"/>
            <div s-show.bbb="foo"/>
        </div>
    `, 
})

// @san/component
export class A {
    static template = `
        <div>
            <div s-show/>
            <div s-show:aaa="foo"/>
            <div s-show.bbb="foo"/>
        </div>
    `;
}

export default {
    template: `
        <div>
            <div s-show/>
            <div s-show:aaa="foo"/>
            <div s-show.bbb="foo"/>
        </div>
    `, 
}
