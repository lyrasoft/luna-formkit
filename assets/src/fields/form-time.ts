import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormTime',
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
