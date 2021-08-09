san.defineComponent({
    template: `
        <div>
        <!-- ✓ GOOD -->
        <div />
        <img>
        <MyComponent />
        <svg><path d="" /></svg>
      
        <!-- ✗ BAD -->
        <div></div>
        <img/>
        <MyComponent></MyComponent>
        <svg><path d=""></path></svg>
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
        <div></div>
        <img/>
        <MyComponent></MyComponent>
        <svg><path d=""></path></svg>
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
        <div></div>
        <img/>
        <MyComponent></MyComponent>
        <svg><path d=""></path></svg>
        </div>
    `,
}
