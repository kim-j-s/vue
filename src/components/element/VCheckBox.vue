<template>
	<label class="label" :class="{ single: !text }">
		<input
			type="checkbox"
			:name="name"
			:id="id"
			:checked="isChecked"
			:disabled="isDisabled"
		/>
		<!-- @change="handleChange" -->
		<span class="text" v-if="text">{{ text }}</span>
		<i></i>
	</label>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
	name: {
		type: String,
	},
	id: {
		type: String,
	},
	isChecked: {
		type: Boolean,
	},
	isDisabled: {
		type: Boolean,
	},
	text: {
		type: String,
	},
});

// const emits = defineEmits(['update:modelValue']);

// const handleChange = event => {
// 	emits('update:modelValue', event.target.checked, props.text);
// 	console.log(event.target.checked, props.text);
// };
</script>

<style lang="scss" scoped>
// @import '../../assets/component/input.scss';
</style>
