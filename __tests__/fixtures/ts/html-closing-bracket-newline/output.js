san.defineComponent({
    template: `
        <div>
        <div id="foo" class="bar">
        <div
          id="foo"
          class="bar"
        >

        <!-- ✗ BAD -->
        <div id="foo" class="bar">
        <div
          id="foo"
          class="bar"
        >
        </div>
    `,
})

// @san/component
export class A {
    static template = `
        <div>
            <div></div>
            <div id="foo" class="bar"></div>
            <div
                id="foo"
                class="bar"
            >
            </div>

            <!-- ✗ BAD -->
            <div id="foo" class="bar"></div>
            <div
            id="foo"
            class="bar"
            >
            </div>
        </div>
    `;
}

export default {
    template: `
        <div>
        <div id="foo" class="bar">
        <div
          id="foo"
          class="bar"
        >

        <!-- ✗ BAD -->
        <div id="foo" class="bar">
        <div
          id="foo"
          class="bar"
        >
        </div>
    `,
}
