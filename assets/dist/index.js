import { ref, watch } from "vue";
function useFormkitField(props, ctx) {
  const item = ref(props.modelValue);
  const emit = ctx.emit;
  watch(() => item, (v) => {
    emit("update:modelValue", v);
  }, { deep: true });
  function getId(suffix = "") {
    let id = `input-${item.value.uid}`;
    if (suffix !== "") {
      id += "-" + suffix;
    }
    return id;
  }
  return { item, getId };
}
useFormkitField.props = {
  modelValue: Object
};
window.useFormkitField = useFormkitField;
const fieldComponents = {};
function useFieldComponents(field, component) {
  if (typeof field === "object") {
    Object.assign(fieldComponents, field);
  } else if (typeof field === "string" && component) {
    fieldComponents[field] = component;
  }
  return fieldComponents;
}
function useFormkit() {
  return import("./chunks/formkit.js");
}
async function useFormkitEditor() {
  const { createFormkitEditor } = await import("./chunks/formkit-editor.js");
  return createFormkitEditor();
}
export {
  useFieldComponents,
  useFormkit,
  useFormkitEditor
};
//# sourceMappingURL=index.js.map
