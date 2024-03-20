<template>
  <div class="tabWrapList">
    <ul class="tabList" :class="{ inline: inline === true }">
      <li v-for="(item, index) in tabs" :key="index">
        <button
          type="button"
          class="vtab-btn"
          :class="{ active: tabActive === index }"
          @click="changeTab(index)"
        >
          <span class="text">{{ item.text }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onUpdated } from 'vue'
const { tabs, modelValue } = defineProps({
  tabs: {
    type: Array,
    required: true
  },
  modelValue: {
    type: Number,
    required: true
  },
  inline: {
    type: Boolean
  }
})

const tabActive = ref(modelValue)
const selectedIndex = ref(modelValue)
const baseCount = ref(0)

const changeTab = (index) => {
  tabActive.value = index
  selectedIndex.value = index
}

onUpdated(() => {
  console.log('업데이트 tabActive : ', tabActive)
  console.log('업데이트 selectedIndex : ', selectedIndex)
  console.log('업데이트 baseCount : ', baseCount)
})

// watch(tabActive, (newValue, oldValue) => {
// 	console.log('신규 값 : ', newValue);
// 	console.log('올드 값 : ', oldValue);
// 	// baseCount.value = oldValue;
// });
</script>

<style lang="scss" scoped>
@import '../../assets/component/tab.scss';
</style>
