san.defineComponent({
    template: `
        <div>
        <!-- ✓ GOOD -->
        <div
          class="foo"
          style="{{bar}}" />
        <i
          class="{{
            isExpanded ? 'fa-angle-up' : 'fa-angle-down'
          }}"
        />
      
        <!-- ✗ BAD -->
        <div class="foo"
          style = "{{bar}}" />
        <i
          class="{{
            isExpanded ? 'fa-angle-up'   : '',
            !isExpanded ? 'fa-angle-down' : '',
          }}"
        />
        </div>
    `,
})

// @san/component
export class A {
    static template = `
        <div>
        <!-- ✓ GOOD -->
        <div
          class="foo"
          style="{{bar}}" />
        <i
          class="{{
            isExpanded ? 'fa-angle-up' : 'fa-angle-down'
          }}"
        />
      
        <!-- ✗ BAD -->
        <div class="foo"
          style = "{{bar}}" />
        <i
          class="{{
            isExpanded ? 'fa-angle-up'   : '',
            !isExpanded ? 'fa-angle-down' : '',
          }}"
        />
        </div>
    `;
}

export default {
    template: `
        <div>
        <!-- ✓ GOOD -->
        <div
          class="foo"
          style="{{bar}}" />
        <i
          class="{{
            isExpanded ? 'fa-angle-up' : 'fa-angle-down'
          }}"
        />
      
        <!-- ✗ BAD -->
        <div class="foo"
          style = "{{bar}}" />
        <i
          class="{{
            isExpanded ? 'fa-angle-up'   : '',
            !isExpanded ? 'fa-angle-down' : '',
          }}"
        />
        </div>
    `,
}
