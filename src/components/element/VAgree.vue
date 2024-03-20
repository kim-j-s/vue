<template>
  <div class="agree">
    <template v-if="agreeTitle">
      <label class="label" :class="{ single: !agreeTitle }">
        <input
          type="checkbox"
          :name="acName"
          :id="acId"
          :checked="allChk"
          :disabled="acDisabled"
          @change="chAll($event)"
        />
        <span class="text">{{ agreeTitle }}</span>
        <i></i>
      </label>
      <p>부모의 isChecked: {{ allChk }}</p>
    </template>

    <div class="agreeDetailWrap">
      <div
        class="agreeDetail"
        :style="{ marginTop: index === 0 ? '0' : '20px' }"
        v-for="(item, index) in agreeContent"
        :key="index"
      >
        <label class="label" :class="{ single: !item.text }">
          <input
            type="checkbox"
            :name="item.name"
            :id="item.id"
            :text="item.text"
            :checked="item.isChecked"
            :disabled="item.isDisabled"
            @change="chkItem(index, $event)"
          />
          <span class="text" v-if="item.text">{{ item.text }}</span>
          <i></i>
        </label>
        <div class="more" v-if="item.agreeDept">
          <label class="label" v-for="(deptItem, index) in item.agreeDept" :key="index">
            <input
              type="checkbox"
              :name="deptItem.name"
              :id="deptItem.id"
              :text="deptItem.text"
              :checked="deptItem.isChecked"
              :disabled="deptItem.isDisabled"
              @change="deptChkItem(item, index, $event)"
            />
            <span class="text" v-if="deptItem.text">{{ deptItem.text }}</span>
            <i></i>
          </label>
        </div>
      </div>

      <div style="margin-top: 20px">초기값? : {{ agreeContent }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const props = defineProps({
  agreeTitle: {
    type: String
  },
  acName: {
    type: String
  },
  acId: {
    type: String
  },
  acChecked: {
    type: Boolean
  },
  acDisabled: {
    type: Boolean
  },
  agreeContent: {
    type: Array
  },
  name: {
    type: String
  },
  id: {
    type: String
  },
  isChecked: {
    type: Boolean
  },
  isDisabled: {
    type: Boolean
  },
  text: {
    type: String
  },
  agreeDept: {
    type: Array
  }
})

const allChk = ref(false)

const emits = defineEmits(['update:agreeContent'])

// 전체동의 이벤트
const chAll = (event) => {
  const chkedStatus = event.target.checked
  console.log('상태: ', chkedStatus)
  allChk.value = chkedStatus
  // 부모 컴포넌트로 값을 emit으로 올리기
  const updatedAgreeContent = props.agreeContent.map((term) => ({
    ...term,
    isChecked: chkedStatus
  }))
  emits('update:agreeContent', updatedAgreeContent)
}

// 개별 체크박스 이벤트
const chkItem = (index, event) => {
  const isChecked = event.target.checked
  // 부모 컴포넌트로 값을 emit으로 올리기
  const updatedAgreeContent = props.agreeContent.map((term, i) =>
    i === index ? { ...term, isChecked } : term
  )
  allChk.value = updatedAgreeContent.every((term) => term.isChecked)
  emits('update:agreeContent', updatedAgreeContent)

  console.log('바뀜')
}

// 개별 체크박스 뎁스 이벤트
const deptChkItem = (parentItem, index, event) => {
  const isChecked = event.target.checked
  parentItem.agreeDept[index].isChecked = isChecked

  const allDeptChecked = parentItem.agreeDept.every((deptItem) => deptItem.isChecked)
  if (allDeptChecked) {
    const updatedAgreeContent = props.agreeContent.map((item) => {
      if (item === parentItem) {
        return { ...item, isChecked: true }
      }
      return item
    })
    emits('update:agreeContent', updatedAgreeContent)
  } else {
    const updatedAgreeContent = props.agreeContent.map((item) => {
      if (item === parentItem) {
        return { ...item, isChecked: false }
      }
      return item
    })
    emits('update:agreeContent', updatedAgreeContent)
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/component/agree.scss';
</style>
