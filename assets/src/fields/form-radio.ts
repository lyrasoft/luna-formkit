import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormRadio',
  template: `
    <div class="mt-3">
      <SelectOptions v-model="item" icon="far fa-circle" other />
    </div>
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
