san.defineComponent({
    template: `
        <div>
        <!-- ✓ GOOD -->
        <div>
        <div foo>
        <div foo="bar">
        </div>
        <div />
        <div foo />
        <div foo="bar" />

        <!-- ✗ BAD -->
        <div >
        <div foo >
        <div foo="bar" >
        </div >
        <div/>
        <div foo/>
        <div foo="bar"/>
        </div>
    `,
})

// @san/component
export class A {
    static template = `
        <div>
        <!-- ✓ GOOD -->
        <div>
        <div foo>
        <div foo="bar">
        </div>
        <div />
        <div foo />
        <div foo="bar" />

        <!-- ✗ BAD -->
        <div >
        <div foo >
        <div foo="bar" >
        </div >
        <div/>
        <div foo/>
        <div foo="bar"/>
        </div>
    `;
}

export default {
    template: `
        <div>
        <!-- ✓ GOOD -->
        <div>
        <div foo>
        <div foo="bar">
        </div>
        <div />
        <div foo />
        <div foo="bar" />

        <!-- ✗ BAD -->
        <div >
        <div foo >
        <div foo="bar" >
        </div >
        <div/>
        <div foo/>
        <div foo="bar"/>
        </div>
    `,
}
