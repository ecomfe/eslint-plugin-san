san.defineComponent({
    template: `
        <div>
        <!-- ✓ GOOD -->
        <div attr>
          content
        </div>
        
        <tr attr>
          <td>
            {{ data1 }}
          </td>
          <td>
            {{ data2 }}
          </td>
        </tr>
        
        <div attr>
          <!-- comment -->
        </div>
        
        <!-- ✗ BAD -->
        <div attr>
content
</div>
        
        <tr attr>
<td>{{ data1 }}</td><td>{{ data2 }}</td>
</tr>
        
        <div attr>
<!-- comment -->
</div>
        </div>
    `,
})

// @san/component
export class A {
    static template = `
        <div>
        <!-- ✓ GOOD -->
        <div attr>
          content
        </div>
        
        <tr attr>
          <td>
            {{ data1 }}
          </td>
          <td>
            {{ data2 }}
          </td>
        </tr>
        
        <div attr>
          <!-- comment -->
        </div>
        
        <!-- ✗ BAD -->
        <div attr>
content
</div>
        
        <tr attr>
<td>{{ data1 }}</td><td>{{ data2 }}</td>
</tr>
        
        <div attr>
<!-- comment -->
</div>
        </div>
    `;
}

export default {
    template: `
        <div>
        <!-- ✓ GOOD -->
        <div attr>
          content
        </div>
        
        <tr attr>
          <td>
            {{ data1 }}
          </td>
          <td>
            {{ data2 }}
          </td>
        </tr>
        
        <div attr>
          <!-- comment -->
        </div>
        
        <!-- ✗ BAD -->
        <div attr>
content
</div>
        
        <tr attr>
<td>{{ data1 }}</td><td>{{ data2 }}</td>
</tr>
        
        <div attr>
<!-- comment -->
</div>
        </div>
    `,
}
