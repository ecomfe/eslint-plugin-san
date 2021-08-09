san.defineComponent({
    template: `
        <div>
        <!-- ✓ GOOD -->
        <div s-for="i in 5">1</div>
        <div s-for="j in 5">2</div>
      
        <!-- ✗ BAD -->
        <div>
          <div s-for="k in 5">
            <div s-for="k in 10">1</div>
          </div>
        </div>
        <div s-for="l in 5">1</div>
        </div>
    `,
})

// @san/component
export class A {
    static template = `
        <div>
        <!-- ✓ GOOD -->
        <div s-for="i in 5">1</div>
        <div s-for="j in 5">2</div>
      
        <!-- ✗ BAD -->
        <div>
          <div s-for="k in 5">
            <div s-for="k in 10">1</div>
          </div>
        </div>
        <div s-for="l in 5">1</div>
        </div>
    `;
}

export default {
    template: `
        <div>
        <!-- ✓ GOOD -->
        <div s-for="i in 5">1</div>
        <div s-for="j in 5">2</div>
      
        <!-- ✗ BAD -->
        <div>
          <div s-for="k in 5">
            <div s-for="k in 10">1</div>
          </div>
        </div>
        <div s-for="l in 5">1</div>
        </div>
    `,
}
