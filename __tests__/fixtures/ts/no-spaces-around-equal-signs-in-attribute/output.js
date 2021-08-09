san.defineComponent({
    template: `
        <div>
          <!-- ✗ BAD -->
          <div class="item"></div>
          <!-- ✓ GOOD -->
          <div class="item">1</div>
        </div>
    `,
})

// @san/component
export class A {
    static template = `
        <div>
          <!-- ✗ BAD -->
          <div class="item"></div>
          <!-- ✓ GOOD -->
          <div class="item">1</div>
        </div>
    `;
}

export default {
    template: `
        <div>
          <!-- ✗ BAD -->
          <div class="item"></div>
          <!-- ✓ GOOD -->
          <div class="item">1</div>
        </div>
    `,
}
