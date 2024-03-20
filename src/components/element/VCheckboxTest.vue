<template>
  <div class="agree" :id="id">
    <div class="agreeAll">
      <label class="label">
        <input type="checkbox" :checked="isChecked" v-model="allChk" @change="allChange($event)" />
        <span class="text">전체 선택1</span>
        <i></i>
      </label>
    </div>
    <p>{{ allChk }}</p>
    <div class="agreeDetailWrap">
      <div class="agreeDetail" v-for="(item, index) in getCheckbox" :key="index">
        <label class="label">
          <input
            type="checkbox"
            :checked="item.isChecked"
            :disabled="item.isDisabled"
            v-model="item.isChecked"
          />
          <span class="text">{{ item.text }}</span>
          <i></i>
        </label>
        <div class="more" v-if="item.agreeDept">
          <label class="label" v-for="(deptItem, index) in item.agreeDept" :key="index">
            <input
              type="checkbox"
              :name="deptItem.name"
              :id="deptItem.id"
              :checked="deptItem.isChecked"
              :disabled="deptItem.isDisabled"
            />
            <!-- @change="deptChkItem(item, index, $event)" -->
            <span class="text" v-if="deptItem.text">{{ deptItem.text }}</span>
            <i></i>
          </label>
        </div>
      </div>
    </div>
    <div style="margin-top: 20px">
      {{ chkedStatus }}
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const allChk = ref()

const chkedStatus = ref()

const props = defineProps({
  id: {
    type: String
  },
  isChecked: {
    type: Boolean
  },
  isDisabled: {
    type: Boolean
  },
  getCheckbox: {
    type: Array
  },
  agreeDept: {
    type: Array
  }
})

const allChange = (event) => {
  const status = event.target.checked
  props.getCheckbox.map((item) => (item.isChecked = status))

  // props.getCheckbox.forEach(item => {
  // item.isChecked = status;
  // });
}

watch(
  // 변경된 후 감지
  () => props.getCheckbox.map((item) => item.isChecked),
  (newValue) => {
    console.log('하위 체크박스의 상태가 변경되었습니다.')
    const allChecked = newValue.every((isChecked) => isChecked)
    allChk.value = allChecked
    chkedStatus.value = props.getCheckbox.map((item) => item.isChecked)
  }
)
</script>

<style lang="scss" scoped>
@import '../../assets/component/agree.scss';
</style>
