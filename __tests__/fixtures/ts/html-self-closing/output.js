san.defineComponent({
    template: `
        <div>
        <!-- ✓ GOOD -->
        <div />
        <img>
        <MyComponent />
        <svg><path d="" /></svg>
      
        <!-- ✗ BAD -->
        <div/>
        <img>
        <MyComponent/>
        <svg><path d=""/></svg>
        </div>
    `,
})

// @san/component
export class A {
    static template = `
        <div>
        <!-- ✓ GOOD -->
        <div />
        <img>
        <MyComponent />
        <svg><path d="" /></svg>
      
        <!-- ✗ BAD -->
        <div/>
        <img>
        <MyComponent/>
        <svg><path d=""/></svg>
        </div>
    `;
}

export default {
    template: `
        <div>
        <!-- ✓ GOOD -->
        <div />
        <img>
        <MyComponent />
        <svg><path d="" /></svg>
      
        <!-- ✗ BAD -->
        <div/>
        <img>
        <MyComponent/>
        <svg><path d=""/></svg>
        </div>
    `,
}
