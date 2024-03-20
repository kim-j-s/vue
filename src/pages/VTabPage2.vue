<template>
  <div class="container">
    <VTabList :tablist="sendtab1" v-model="tabActive" />
    <div class="tabsContent">
      <transition :name="transitionName">
        <div class="tabsContentItem" v-if="tabActive === 'act1'">act1</div>
        <div class="tabsContentItem" v-else-if="tabActive === 'act2'">act2</div>
        <div class="tabsContentItem" v-else-if="tabActive === 'act3'">act3</div>
      </transition>
    </div>

    <br />
    model value: {{ tabActive }}
    <br />
    <!-- model value: {{ tabActive.name }} -->
    <br />
    <!-- model value: {{ tabActive.index }} -->
    <br />

    v-model로 탭 과 컨텐츠를 동기화
    <br /><br />
  </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'
import VTabList from '../components/element/VTabList.vue'

const tabActive = ref('act1')
const tabObj = reactive({ tabActive })
const sendtab1 = ref([
  {
    id: 'tab1',
    text: '탭 2 1',
    name: 'act1'
  },
  {
    id: 'tab2',
    text: '탭 2 2',
    name: 'act2'
  },
  {
    id: 'tab3',
    text: '탭 2 3',
    name: 'act3'
  }
])

const transitionName = ref(null)

watch(tabObj, (newValue, oldValue) => {
  console.log('신규 값 : ', newValue)
  console.log('기존 값 : ', oldValue)
  if (oldValue < newValue) {
    transitionName.value = 'slide-rtl'
  } else {
    transitionName.value = 'slide-ltr'
  }
})

// watch(
//   () => tabActive,
//   (newValue, oldValue) => {
//     console.log('신규 값 : ', newValue)
//     console.log('기존 값 : ', oldValue)
//     if (oldValue < newValue) {
//       transitionName.value = 'slide-rtl'
//     } else {
//       transitionName.value = 'slide-ltr'
//     }
//   }
// )
</script>

<style lang="scss" scoped>
@import '../assets/component/tab.scss';
.xxx {
  margin: 0 20px;
  padding: 20px;
  border-radius: 10px;
}
</style>
../components/element/VTabList.vue
