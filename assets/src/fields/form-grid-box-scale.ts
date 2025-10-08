import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormGridBoxScale',
  template: `
    <div class="mt-3">
      <GridOptions v-model="item" icon="far fa-square" />
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
