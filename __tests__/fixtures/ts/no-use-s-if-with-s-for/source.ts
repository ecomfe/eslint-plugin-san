san.defineComponent({
    template: `
    <div>
    <div
    s-if="complete"
    s-for="todo in todos"
    todo="{{todo}}"
  /></div>
    `,
})

// @san/component
export class A {
    static template = `
    <div>
    <div
    s-if="complete"
    s-for="todo in todos"
    todo="{{todo}}"
  /></div>
    `;
}

export default {
    template: `
    <div>
    <div
    s-if="complete"
    s-for="todo in todos"
    todo="{{todo}}"
  /></div>
    `,
}
