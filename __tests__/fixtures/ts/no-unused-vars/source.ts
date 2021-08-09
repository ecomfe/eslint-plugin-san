san.defineComponent({
    template: `<div>
    <ol s-for="i in 5">
    <li>item</li>
  </ol></div>
    `,
})

// @san/component
export class A {
    static template = `<div>
    <ol s-for="i in 5">
    <li>item</li>
  </ol></div>
    `;
}

export default {
    template: `<div>
    <ol s-for="i in 5">
    <li>item</li>
  </ol></div>
    `,
}
