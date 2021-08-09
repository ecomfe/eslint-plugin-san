san.defineComponent({
    template: `<button on-click="fire('my-event')" />`,
    onClick () {
        /* ✓ GOOD */
        this.fire('my-event')
        this.fire('my-event', params1, params2)

        /* ✗ BAD */
        this.fire('myEvent')
    }
})

// @san/component
export class A {
    static template = `<button on-click="fire('myEvent')" on-touch="fire('my-event')" />`;
    onClick () {
        /* ✓ GOOD */
        this.fire('my-event')
        this.fire('my-event', params1, params2)

        /* ✗ BAD */
        this.fire('myEvent')
    }
}

export default {
    template: `<button on-click="fire('my-event')" />`,
    onClick () {
        /* ✓ GOOD */
        this.fire('my-event')
        this.fire('my-event', params1, params2)

        /* ✗ BAD */
        this.fire('myEvent')
    }
}
