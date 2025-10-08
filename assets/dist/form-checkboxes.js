import { defineComponent } from "vue";
const formCheckboxes = defineComponent({
  name: "FormCheckboxes",
  template: `
      <div class="mt-3">
        <SelectOptions v-model="item" icon="far fa-square" other />
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
  formCheckboxes as default
};
//# sourceMappingURL=form-checkboxes.js.map
