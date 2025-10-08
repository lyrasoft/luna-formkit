import { defineComponent } from "vue";
const formTime = defineComponent({
  name: "FormTime",
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
  }
});
export {
  formTime as default
};
//# sourceMappingURL=form-time.js.map
