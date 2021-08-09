san.defineComponent({
    template: `
        <div>
        <!-- ✓ GOOD -->
        <img src="./logo.png">
      
        <!-- ✗ BAD -->
        <img src='./logo.png'>
        <img src=./logo.png>
        </div>
    `,
})

// @san/component
export class A {
    static template = `
        <div>
        <!-- ✓ GOOD -->
        <img src="./logo.png">
      
        <!-- ✗ BAD -->
        <img src='./logo.png'>
        <img src=./logo.png>
        </div>
    `;
}

export default {
    template: `
        <div>
        <!-- ✓ GOOD -->
        <img src="./logo.png">
      
        <!-- ✗ BAD -->
        <img src='./logo.png'>
        <img src=./logo.png>
        </div>
    `,
}
