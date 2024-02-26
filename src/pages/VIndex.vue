<template>
	<main>
		<div class="flex">
			<VInput value="value" isDisabled></VInput>
			<VInput placeholder="placeholder" isReadonly></VInput>
			<VInput type="submit"></VInput>
		</div>
		<div class="flex">
			<VSelect :options="sendOptions"></VSelect>
			<VSelect
				is-disabled
				class=""
				selectClass="customClass"
				:options="sendOptions"
			></VSelect>
		</div>

		<div class="flex">
			<div class="text-center">
				<VCheckBox text="레이블" />
			</div>
			<div class="text-center">
				<VCheckBox text="레이블" is-checked />
			</div>
			<div class="text-center">
				<VCheckBox text="레이블" is-disabled />
			</div>
		</div>

		<div class="flex">
			<VInput placeholder="값 입력" isSearchBtn></VInput>
		</div>
		<div class="text-center">
			<router-link :to="{ name: 'notiDetail' }">상세화면</router-link>
		</div>
		<router-view></router-view>
	</main>
</template>

<script setup>
import { ref } from 'vue';
import VTab from '../components/element/VTab.vue';
import VSelect from '../components/element/VSelect.vue';
import VInput from '../components/element/VInput.vue';
import VCheckBox from '../components/element/VCheckBox.vue';

const sendOptions = ref([
	{
		value: 'o1',
		text: '옵션 1',
	},
	{
		value: 'o2',
		text: '옵션 2',
	},
	{
		value: 'o3',
		text: '옵션 3',
	},
]);
</script>

<style lang="scss" scoped></style>
