import { defineComponent } from 'vue';

export default function (app: any) {
  return defineComponent({
    name: 'FormDate',
    template: `
      
    `,
    props: {
      ...useFormkitField.props
    },
    setup(props, ctx) {
        const mixin = useFormkitField(props, ctx);

        return {
          ...mixin
        };
    },
  });
}
