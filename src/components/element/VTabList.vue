<template>
  <div class="tabs">
    <ul class="tabsList">
      <li v-for="(item, index) in tablist" :key="index">
        <button
          class="vtab-btn"
          :class="{ active: item.name === modelValue }"
          @click="activeChnage(index)"
        >
          <span class="text">{{ item.text }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: String
  },
  tablist: {
    type: Array
  }
})
const emit = defineEmits(['update:modelValue'])

const activeChnage = (index) => {
  // console.log('이벤트 : ', props.tablist[index].name)
  emit('update:modelValue', props.tablist[index].name)
  // emit('update:modelValue', { name: props.tablist[index].name, index: index })
}

onMounted(() => {
  //console.log('sdf');
  console.log('마운트 됨')
})
</script>

<style lang="scss" scoped>
@import '../../assets/component/tab.scss';
</style>
