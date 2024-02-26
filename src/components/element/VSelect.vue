<template>
	<div class="selectbox" :class="{ focused: isFocused }">
		<select
			class="class"
			:class="selectClass"
			:disabled="isDisabled"
			@focus="isFocused = true"
			@blur="isFocused = false"
		>
			<option v-for="(item, index) in options" :key="index" :value="item.value">
				{{ item.text }}
			</option>
		</select>
		<!-- @change="isFocused = false" -->
		<span> {{ isFocused }} </span>
	</div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
	isDisabled: {
		type: Boolean,
	},
	selectClass: {
		type: String,
	},
	options: {
		type: Array,
	},
});

let isFocused = ref(false);

// const onChange = event => {
// 	console.log(event.target.value);
// };
</script>

<style lang="scss" scoped>
@import '../../assets/component/select.scss';
</style>
