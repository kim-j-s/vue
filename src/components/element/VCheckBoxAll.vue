<template>
	<label class="label at" :class="{ single: !text }">
		<input
			type="checkbox"
			:text="text"
			:name="name"
			:id="id"
			:checked="props.자식체크박스"
			@click="자식체크박스변경()"
			:disabled="isDisabled"
		/>
		<!-- @change="chAll" -->
		<span class="text" v-if="text">{{ text }}</span>
		<i></i>
	</label>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
	text: {
		type: String,
	},
	name: {
		type: String,
	},
	id: {
		type: String,
	},
	isChecked: {
		type: Boolean,
	},
	value: {
		type: Boolean,
	},
	isDisabled: {
		type: Boolean,
	},
	자식체크박스: {
		type: Boolean,
	},
});

const emits = defineEmits(['부모체크박스변경해']);

// const chAll = event => {
// 	emits('update:실행시킬함수명', event.target.checked, props.text);
// 	console.log(event.target.checked, props.text);
// };

function 자식체크박스변경() {
	console.log('부모체크박스변경');
	emits('부모체크박스변경해');
}
</script>

<style lang="scss" scoped>
/*
@import '../../assets/component/input.scss';
*/
</style>
