san.defineComponent({
    template: `
        <div>
        <!-- ✓ GOOD -->
        <div>
          multiline
          content
        </div>
      
        <pre>some
        content</pre>
      
        <div
          attr
        >
          multiline start tag
        </div>
      
        <table>
          <tr>
            <td>multiline</td>
            <td>children</td>
          </tr>
        </table>
      
        <div>
          <!-- multiline
               comment -->
        </div>
      
        <div>
        </div>
      
        <div attr>singleline element</div>
      
        <!-- ✗ BAD -->
        <div>multiline
          content</div>
      
        <div
          attr
        >multiline start tag</div>
        
        <table><tr><td>multiline</td>
          <td>children</td></tr></table>
        
        <div><!-- multiline
          comment --></div>
      
        <div
        ></div>
        </div>
    `,
})

// @san/component
export class A {
    static template = `
        <div>
        <!-- ✓ GOOD -->
        <div>
          multiline
          content
        </div>
      
        <pre>some
        content</pre>
      
        <div
          attr
        >
          multiline start tag
        </div>
      
        <table>
          <tr>
            <td>multiline</td>
            <td>children</td>
          </tr>
        </table>
      
        <div>
          <!-- multiline
               comment -->
        </div>
      
        <div>
        </div>
      
        <div attr>singleline element</div>
      
        <!-- ✗ BAD -->
        <div>multiline
          content</div>
      
        <div
          attr
        >multiline start tag</div>
        
        <table><tr><td>multiline</td>
          <td>children</td></tr></table>
        
        <div><!-- multiline
          comment --></div>
      
        <div
        ></div>
        </div>
    `;
}

export default {
    template: `
        <div>
        <!-- ✓ GOOD -->
        <div>
          multiline
          content
        </div>
      
        <pre>some
        content</pre>
      
        <div
          attr
        >
          multiline start tag
        </div>
      
        <table>
          <tr>
            <td>multiline</td>
            <td>children</td>
          </tr>
        </table>
      
        <div>
          <!-- multiline
               comment -->
        </div>
      
        <div>
        </div>
      
        <div attr>singleline element</div>
      
        <!-- ✗ BAD -->
        <div>multiline
          content</div>
      
        <div
          attr
        >multiline start tag</div>
        
        <table><tr><td>multiline</td>
          <td>children</td></tr></table>
        
        <div><!-- multiline
          comment --></div>
      
        <div
        ></div>
        </div>
    `,
}
