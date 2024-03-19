<template>
  <div class="container">
    <div class="tabs">
      <ul class="tabsList">
        <li v-for="(item, index) in sendtab1" :key="index">
          <button
            class="vtab-btn"
            :class="{ active: item.name === tabActive1 }"
            @click="activeChnage($event, index)"
          >
            <span class="text">{{ item.text }}</span>
          </button>
        </li>
      </ul>
    </div>
    <div class="tabsContent" :class="transitionName">
      <transition :name="transitionName">
        <div class="tabsContentItem" v-if="tabActive1 === 'act1'">act1</div>
        <div class="tabsContentItem" v-else-if="tabActive1 === 'act2'">act2</div>
        <div class="tabsContentItem" v-else-if="tabActive1 === 'act3'">act3</div>
      </transition>
    </div>

    <br />
    model value: {{ tabActive1 }}
    <br />
    tab Index : {{ tabIndex }} <br /><br /><br /><br />

    v-model로 탭 과 컨텐츠를 동기화
    <br /><br />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const tabActive1 = ref('act1')
const sendtab1 = ref([
  {
    id: 'tab1',
    text: '탭 1',
    name: 'act1'
  },
  {
    id: 'tab2',
    text: '탭 2',
    name: 'act2'
  },
  {
    id: 'tab3',
    text: '탭 3',
    name: 'act3'
  }
])

const transitionName = ref(null)
const tabIndex = ref(0)

const activeChnage = (event, index) => {
  // console.log('인덱스: ', index);
  const $this = sendtab1.value[index].name
  console.log('Tab Name : ', $this)
  tabIndex.value = index
  tabActive1.value = $this
}

watch(tabIndex, (newValue, oldValue) => {
  if (oldValue < newValue) {
    transitionName.value = 'slide-rtl'
  } else {
    transitionName.value = 'slide-ltr'
  }
})
</script>

<style lang="scss" scoped>
@import '../assets/component/tab.scss';
.xxx {
  margin: 0 20px;
  padding: 20px;
  border-radius: 10px;
}
</style>
