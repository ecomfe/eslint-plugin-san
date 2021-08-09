san.defineComponent({
    template : `
        <div>
            <!-- ✓ GOOD -->
            <MyComponent lorem="1"/>
            <MyComponent
            lorem="1"
            ipsum="2"
            />
            <MyComponent
            lorem="1"
            ipsum="2"
            dolor="3"
            />
        
            <!-- ✗ BAD -->
            <MyComponent lorem="1" ipsum="2"/>
            <MyComponent
            lorem="1" ipsum="2"
            />
            <MyComponent
            lorem="1" ipsum="2"
            dolor="3"
            />
        </div>
    `,
})

// @san/component
export class A {
    static template = `
        <div>
            <!-- ✓ GOOD -->
            <MyComponent lorem="1"/>
            <MyComponent
            lorem="1"
            ipsum="2"
            />
            <MyComponent
            lorem="1"
            ipsum="2"
            dolor="3"
            />
        
            <!-- ✗ BAD -->
            <MyComponent lorem="1" ipsum="2"/>
            <MyComponent
            lorem="1" ipsum="2"
            />
            <MyComponent
            lorem="1" ipsum="2"
            dolor="3"
            />
        </div>
    `;
}

export default {
    template : `
        <div>
            <!-- ✓ GOOD -->
            <MyComponent lorem="1"/>
            <MyComponent
            lorem="1"
            ipsum="2"
            />
            <MyComponent
            lorem="1"
            ipsum="2"
            dolor="3"
            />
        
            <!-- ✗ BAD -->
            <MyComponent lorem="1" ipsum="2"/>
            <MyComponent
            lorem="1" ipsum="2"
            />
            <MyComponent
            lorem="1" ipsum="2"
            dolor="3"
            />
        </div>
    `,
}
