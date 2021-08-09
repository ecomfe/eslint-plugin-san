san.defineComponent({
    template: `
        <div>
        <!-- ✓ GOOD -->
        <div>{{ text }}</div>
        <div>{{ text }}</div><!-- Use san/no-multi-spaces rule to disallow multiple spaces. -->
      
        <!-- ✗ BAD -->
        <div>{{text}}</div>
        </div>
    `,
})

// @san/component
export class A {
    static template = `
        <div>
        <!-- ✓ GOOD -->
        <div>{{ text }}</div>
        <div>{{ text }}</div><!-- Use san/no-multi-spaces rule to disallow multiple spaces. -->
      
        <!-- ✗ BAD -->
        <div>{{text}}</div>
        </div>
    `;
}

export default {
    template: `
        <div>
        <!-- ✓ GOOD -->
        <div>{{ text }}</div>
        <div>{{ text }}</div><!-- Use san/no-multi-spaces rule to disallow multiple spaces. -->
      
        <!-- ✗ BAD -->
        <div>{{text}}</div>
        </div>
    `,
}
