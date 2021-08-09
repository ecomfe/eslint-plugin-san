san.defineComponent({
    template: `
    <div s-if="isSomething(x)" />
    <div s-else-if="isSomething(x)" />
  
    <div s-if="a" />
    <div s-else-if="b" />
    <div s-else-if="c && d" />
    <div s-else-if="c && d" />
  
    <div s-if="n === 1" />
    <div s-else-if="n === 2" />
    <div s-else-if="n === 3" />
    <div s-else-if="n === 2" />
    <div s-else-if="n === 5" />
  
    <!-- ✓ GOOD -->
    <div s-if="isSomething(x)" />
    <div s-else-if="isSomethingElse(x)" />
  
    <div s-if="a" />
    <div s-else-if="b" />
    <div s-else-if="c && d" />
    <div s-else-if="c && e" />
  
    <div s-if="n === 1" />
    <div s-else-if="n === 2" />
    <div s-else-if="n === 3" />
    <div s-else-if="n === 4" />
    <div s-else-if="n === 5" />
    `,
})

// @san/component
export class A {
    static template = `
    <div s-if="isSomething(x)" />
    <div s-else-if="isSomething(x)" />
  
    <div s-if="a" />
    <div s-else-if="b" />
    <div s-else-if="c && d" />
    <div s-else-if="c && d" />
  
    <div s-if="n === 1" />
    <div s-else-if="n === 2" />
    <div s-else-if="n === 3" />
    <div s-else-if="n === 2" />
    <div s-else-if="n === 5" />
  
    <!-- ✓ GOOD -->
    <div s-if="isSomething(x)" />
    <div s-else-if="isSomethingElse(x)" />
  
    <div s-if="a" />
    <div s-else-if="b" />
    <div s-else-if="c && d" />
    <div s-else-if="c && e" />
  
    <div s-if="n === 1" />
    <div s-else-if="n === 2" />
    <div s-else-if="n === 3" />
    <div s-else-if="n === 4" />
    <div s-else-if="n === 5" />
    `;
}

export default {
    template: `
    <div s-if="isSomething(x)" />
    <div s-else-if="isSomething(x)" />
  
    <div s-if="a" />
    <div s-else-if="b" />
    <div s-else-if="c && d" />
    <div s-else-if="c && d" />
  
    <div s-if="n === 1" />
    <div s-else-if="n === 2" />
    <div s-else-if="n === 3" />
    <div s-else-if="n === 2" />
    <div s-else-if="n === 5" />
  
    <!-- ✓ GOOD -->
    <div s-if="isSomething(x)" />
    <div s-else-if="isSomethingElse(x)" />
  
    <div s-if="a" />
    <div s-else-if="b" />
    <div s-else-if="c && d" />
    <div s-else-if="c && e" />
  
    <div s-if="n === 1" />
    <div s-else-if="n === 2" />
    <div s-else-if="n === 3" />
    <div s-else-if="n === 4" />
    <div s-else-if="n === 5" />
    `,
}
