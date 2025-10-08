import { defineComponent } from "vue";
function formDate(app) {
  return defineComponent({
    name: "FormDate",
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
}
export {
  formDate as default
};
//# sourceMappingURL=form-date.js.map
