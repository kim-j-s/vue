<template>
  <div class="input" :class="{ isSearch: isSearchBtn }">
    <input
      :type="type"
      :placeholder="placeholder"
      :readonly="isReadonly"
      :disabled="isDisabled"
      @input="emitUpdate($event.target.value)"
    />
    <!-- @blur="inpEvent" -->
    <button type="button" class="btn btn-search" v-if="isSearchBtn">
      <span class="text">검색</span>
    </button>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'
defineProps({
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: 'placeholder'
  },
  value: {
    type: String
  },
  isDisabled: {
    type: Boolean
  },
  isReadonly: {
    type: Boolean
  },
  isSearchBtn: {
    type: Boolean
  }
})

const emitUpdate = (updatedValue) => {
  emit('update:modelValue', updatedValue)
}

const emit = defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
// @import '../../assets/component/input.scss';
</style>
