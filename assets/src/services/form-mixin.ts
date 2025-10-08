import { type Ref, ref, watch } from 'vue';
import type { SetupContext } from 'vue';
import { FieldEditCotent } from '~formkit/types';

export default function useFormkitField(props: Record<string, any>, ctx: SetupContext) {
  const item = ref<FieldEditCotent>(props.modelValue);

  const emit = ctx.emit;

  watch(() => item, (v) => {
    emit('update:modelValue', v);
  }, { deep: true });

  function getId(suffix = '') {
    let id = `input-${item.value.uid}`;

    if (suffix !== '') {
      id += '-' + suffix;
    }

    return id;
  }

  return { item, getId };
};

useFormkitField.props = {
  modelValue: Object,
};

window.useFormkitField = useFormkitField;
