san.defineComponent({
    template: `
        <div>
            <div>
                <template>
                <a href="{{this.data.get('url')}}">
                    {{ this.data.get('text') }}
                </a>
                </template>
            </div>
        </div>
    `,
})

// @san/component
export class A {
    static template = `
        <div>
            <div>
                <template>
                <a href="{{this.data.get('url')}}">
                    {{ this.data.get('text') }}
                </a>
                </template>
            </div>
        </div>
    `;
}

export default {
    template: `
        <div>
            <div>
                <template>
                <a href="{{this.data.get('url')}}">
                    {{ this.data.get('text') }}
                </a>
                </template>
            </div>
        </div>
    `,
}
