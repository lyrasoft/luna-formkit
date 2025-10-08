import { defineComponent } from "vue";
const formGridRadioScale = defineComponent({
  name: "FormGridRadioScale",
  template: `
    <div class="mt-3">
      <GridOptions v-model="item" icon="far fa-circle" />
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
  }
});
export {
  formGridRadioScale as default
};
//# sourceMappingURL=form-grid-radio-scale.js.map
