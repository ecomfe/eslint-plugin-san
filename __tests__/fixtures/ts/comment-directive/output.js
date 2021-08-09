san.defineComponent({
    template: `
        <div>
        <!-- ✓ GOOD -->
        <div
          s-for="item in items"
          s-if="!visible"
          id="uniqueID"
          ref="header"
          my-prop="prop"
          on-click="functionCall"
        >1
        </div>
        <div
          s-for="item in items"
          s-if="!visible"
          prop-one="{{prop}}"
          prop-two="{{prop}}"
          prop-three="{{prop}}"
          on-click="functionCall"
         >1
        </div>
        <div
          prop-one="prop"
          prop-two="{{prop}}"
          prop-three="prop">1
        </div>
      
        <!-- ✗ BAD -->
        <div
          s-for="item in items"
          ref="header"
          id="uniqueID"
          s-if="!visible"
          my-prop="prop"
          on-click="functionCall">1
        </div>
        </div>
    `,
    attach() {
        // ...
    }
})

// @san/component
export class A {
    static template = `
        <div>
        <!-- ✓ GOOD -->
        <div
          s-for="item in items"
          s-if="!visible"
          id="uniqueID"
          ref="header"
          my-prop="prop"
          on-click="functionCall"
        >1
        </div>
        <div
          s-for="item in items"
          s-if="!visible"
          prop-one="{{prop}}"
          prop-two="{{prop}}"
          prop-three="{{prop}}"
          on-click="functionCall"
         >1
        </div>
        <div
          prop-one="prop"
          prop-two="{{prop}}"
          prop-three="prop">1
        </div>
      
        <!-- ✗ BAD -->
        <div
          s-for="item in items"
          ref="header"
          id="uniqueID"
          s-if="!visible"
          my-prop="prop"
          on-click="functionCall">1
        </div>
        </div>
    `;
}

export default {
    template: `
        <div>
        <!-- ✓ GOOD -->
        <div
          s-for="item in items"
          s-if="!visible"
          id="uniqueID"
          ref="header"
          my-prop="prop"
          on-click="functionCall"
        >1
        </div>
        <div
          s-for="item in items"
          s-if="!visible"
          prop-one="{{prop}}"
          prop-two="{{prop}}"
          prop-three="{{prop}}"
          on-click="functionCall"
         >1
        </div>
        <div
          prop-one="prop"
          prop-two="{{prop}}"
          prop-three="prop">1
        </div>
      
        <!-- ✗ BAD -->
        <div
          s-for="item in items"
          ref="header"
          id="uniqueID"
          s-if="!visible"
          my-prop="prop"
          on-click="functionCall">1
        </div>
        </div>
    `,
    dataTypes: {},
    components: {
        propA: Number,
    }
}
