<template>
	<div class="container">
		<VAgreeWatch :getCheckbox="agreeContentDept" allText="전체동의 1" />

		<br /><br />

		<VAgreeWatch :getCheckbox="agreeContentDept2" />

		체크박스 복수의 checked 값 추출
		<br />
		외부 이벤트 요소로 true / false 값 변경
		<br />
		체크박스 모두 선택 시 외부 적용 가능하도록 진행
	</div>
</template>

<script setup>
import { ref } from 'vue';
// import VCheckboxTest from '../components/element/VCheckboxTest.vue';
import VAgreeWatch from '../components/element/VAgreeWatch.vue';

const agreeContentDept = ref([
	{ text: '약관 1', isChecked: false },
	{ text: '약관 1', isChecked: false, isDisabled: true },
	{
		text: 'SMS',
		isChecked: false,
		agreeDept: [
			{ text: '문자', isChecked: false },
			{ text: '카카오톡', isChecked: false },
		],
	},
	{
		text: '응답',
		isChecked: false,
		agreeDept: [
			{ text: '문자', isChecked: false },
			{ text: '카카오톡', isChecked: false },
			{ text: 'SNS', isChecked: false },
		],
	},
]);

const agreeContentDept2 = ref([
	{ text: '22약관 1', isChecked: false },
	{ text: '22 약관 1', isChecked: false, isDisabled: true },
	{
		text: 'SMS',
		isChecked: false,
		agreeDept: [
			{ text: '문자', isChecked: false },
			{ text: '카카오톡', isChecked: false },
		],
	},
]);

// const agreeContent = ref([
// 	{ text: 'agree 1', isChecked: false },
// 	{ text: 'agree 2', isChecked: false },
// 	{ text: 'agree 3', isChecked: false },
// ]);
</script>

<style scoped></style>
