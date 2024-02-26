<template>
	<div class="container">
		<div class="ips">
			<template v-for="(item, index) in ipss" :key="index">
				<VInput
					:placeholder="item.placeholder"
					@update:modelValue="getInpValue(index, $event)"
				/>
			</template>
		</div>
		<hr />
		<div class="">인풋 출력 값: {{ ipssText }}</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import VInput from '../../components/element/VInput.vue';

const ipssText = ref([]);

const ipss = ref([
	{
		placeholder: 'p1',
	},
	{
		placeholder: 'p2',
	},
	{
		placeholder: 'p3',
	},
]);

const getInpValue = (index, updatedValue) => {
	console.log('ipss: ', ipss, ' index: ', index);
	ipss.value[index].value = updatedValue;
	const allInputs = ipss.value.map(item => item.value).join('');
	ipssText.value = allInputs;
};
</script>

<style lang="scss" scoped>
.ips {
	display: flex;
	align-items: center;
	gap: 20px;
	margin-top: 20px;
	> * {
		flex: 1 1 0;
	}
}
div {
	overflow-wrap: anywhere;
}
</style>
