san.defineComponent({
    template: `
        <div>
          <!-- ✓ GOOD -->
          <a href="{{url}}">
            {{ text }}
          </a>
          
          <!-- ✗ BAD -->
          <a href="{{this.data.get('url')}}">
            {{ this.data.get('text') }}
          </a>
        </div>
    `,
})

// @san/component
export class A {
    static template = `
        <div>
          <!-- ✓ GOOD -->
          <a href="{{url}}">
            {{ text }}
          </a>
          
          <!-- ✗ BAD -->
          <a href="{{this.data.get('url')}}">
            {{ this.data.get('text') }}
          </a>
        </div>
    `;
}

export default {
    template: `
        <div>
          <!-- ✓ GOOD -->
          <a href="{{url}}">
            {{ text }}
          </a>
          
          <!-- ✗ BAD -->
          <a href="{{this.data.get('url')}}">
            {{ this.data.get('text') }}
          </a>
        </div>
    `,
}
