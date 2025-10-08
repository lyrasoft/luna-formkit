import { defineComponent } from "vue";
const formSelect = defineComponent({
  name: "FormSelect",
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
  }
});
export {
  formSelect as default
};
//# sourceMappingURL=form-select.js.map
