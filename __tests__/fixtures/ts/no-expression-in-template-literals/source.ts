san.defineComponent({
    template: `
        <div>${template}</div>
    `,
})

// @san/component
export class A {
    static template = `
        <div>${template}</div>
    `;
}

export default {
    template: `
        <div>${template}</div>
    `,
}

export class B {
    static template = `
        <div>2</div>
    `;
}

san.defineComponent({
  template: `
      <div>1</div>
  `,
})
