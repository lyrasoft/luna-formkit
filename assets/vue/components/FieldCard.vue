<script setup lang="ts">
import TypeSelector from '@vue/components/TypeSelector.vue';
import vTextareaAutoResize from '@vue/directives/v-textarea-auto-resize';
import type { FormType, FormTypeParams } from '@vue/types';
import { BFormCheckbox, vBTooltip } from 'bootstrap-vue-next';
import { computed, inject, unref, watch } from 'vue';

defineProps<{
  isFocused: boolean;
}>();

const startComponent = inject('field.card.start', null);
const endComponent = inject('field.card.end', null);
const toolbarComponent = inject('field.card.toolbar', null);

const emits = defineEmits(['focus', 'add', 'copy', 'remove']);
const item = defineModel<FormTypeParams>({
  required: true
});

function onUpdate(v) {
  item.value = unref(v);
}

function copy(item: any) {
  emits('copy', item);
}

async function remove(item: any) {
  if (await u.confirm('您確定要刪除嗎？')) {
    emits('remove', item);
  }
}

const types = inject<Record<string, FormType>>('form.types')!;

watch(() => item.value.type, (type) => {
  item.value = {
    ...(types[type].params),
    ...item.value
  };
});

const fieldForm = computed(() => {
  const type = types[item.value.type];

  if (!type) {
    return null;
  }

  return type.componentName;
});
</script>

<template>
  <div class="card border-left border-primary"
    :style="[ isFocused ? 'border-left-width: 8px !important;' : 'border-left-width: 3px !important;' ]"
    @click="$emit('focus')">
    <div class="h-handle text-center position-absolute w-100" style="top: 0; cursor: move;">
      <span class="far fa-ellipsis-h"></span>
    </div>

    <div class="card-body d-flex flex-column gap-2">
      <div class="row">
        <div class="col-lg-8">
          <input type="text" v-model="item.label" class="form-control form-control-lg"
            placeholder="欄位標題" />
        </div>
        <div class="col">
          <TypeSelector v-model="item.type"></TypeSelector>
        </div>
      </div>

      <div v-if="isFocused" class="form-group">
      <textarea rows="1" v-model="item.description"
        class="form-control"
        v-textarea-auto-resize="{ maxHeight: 300 }"
        placeholder="描述"></textarea>
      </div>

      <template v-if="isFocused">
        <component v-if="startComponent" :is="startComponent" v-model="item" />

        <component v-if="fieldForm" :is="fieldForm" :model-value="item" @update:model-value="onUpdate" />

        <component v-if="endComponent" :is="endComponent" v-model="item" />
      </template>
    </div>

    <div class="card-footer" v-if="isFocused">
      <div class="d-flex align-items-center gap-3">
        <div class="">
          <button type="button" class="btn btn-outline-secondary btn-sm"
            @click.stop="$emit('add')">
            <span class="far fa-plus"></span>
            新增
          </button>
        </div>

        <component v-if="toolbarComponent" :is="toolbarComponent" v-model="item" />

        <div class="ms-auto">
          <BFormCheckbox v-model="item.grid_preview" name="grid-preview" switch
            v-b-tooltip="'在後台提交列表中預覽這個欄位'">
            列表預覽
          </BFormCheckbox>
        </div>
        <div class="">
          <BFormCheckbox v-model="item.required" name="check-button" switch>
            必填
          </BFormCheckbox>
        </div>
        <div class="d-flex gap-2">
          <button type="button" class="btn btn-outline-secondary btn-sm"
            @click.stop="copy(item)">
            <span class="far fa-copy"></span>
            複製
          </button>

          <button type="button" class="btn btn-outline-secondary btn-sm"
            @click="remove(item)">
            <span class="far fa-trash"></span>
            刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
