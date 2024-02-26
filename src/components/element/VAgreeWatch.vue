<template>
	<div class="agree" :id="id">
		<!-- 최 상위 '전체동의' 체크박스 -->
		<div class="agreeAll">
			<label class="label">
				<!-- 최 상위 '전체동의' 체크박스의 상태를 제어하는 input 요소 -->
				<input
					type="checkbox"
					:checked="allChk"
					:disabled="isDisabled"
					@change="toggleAll($event)"
				/>
				<span class="text">{{ allText }}</span>
				<i></i>
			</label>
		</div>
		<p>{{ allChk }}</p>

		<!-- 체크박스 그룹 -->
		<div class="agreeDetailWrap">
			<!-- 각 체크박스 아이템 및 그 하위 항목들을 렌더링 -->
			<div
				class="agreeDetail"
				v-for="(item, index) in getCheckbox"
				:key="index"
			>
				<!-- 체크박스 아이템 -->
				<label class="label">
					<input
						type="checkbox"
						:checked="item.isChecked"
						@change="toggleItem(item)"
					/>
					<span class="text">{{ item.text }}</span>
					<i></i>
				</label>

				<!-- 체크박스 아이템의 하위 항목들 -->
				<div class="more" v-if="item.agreeDept">
					<label
						class="label"
						v-for="(deptItem, index) in item.agreeDept"
						:key="index"
					>
						<input
							type="checkbox"
							:checked="deptItem.isChecked"
							@change="toggleDeptItem(item, deptItem)"
						/>
						<span class="text" v-if="deptItem.text">{{ deptItem.text }}</span>
						<i></i>
					</label>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, watch } from 'vue';

// 최 상위 '전체동의' 체크박스의 상태
const allChk = ref(false);

// 프로퍼티 정의
const props = defineProps({
	allText: {
		type: String,
		default: '전체동의',
	},
	isDisabled: {
		type: Boolean,
	},
	id: {
		type: String,
	},
	getCheckbox: {
		type: Array,
	},
});

// 최 상위 '전체동의' 체크박스의 상태가 변경될 때마다 하위 체크박스의 상태를 업데이트
watch(
	() => props.allChk,
	newValue => {
		allChk.value = newValue;
		props.getCheckbox.forEach(item => {
			item.isChecked = newValue;
			if (item.agreeDept) {
				item.agreeDept.forEach(deptItem => {
					deptItem.isChecked = newValue;
				});
			}
		});
	},
);

// 최 상위 '전체동의' 체크박스를 토글하는 메서드
const toggleAll = () => {
	console.log('전체 동의 상태: ', allChk.value);
	console.log('전체 동의 상태 (부정): ', !allChk.value);
	// 최초의 false 상태를 !로 부정처리 해서 false -> true로 변환하고 이를 true로 반환한다.
	allChk.value = !allChk.value;
	// data를 forEach로 연산하면서 전체 checkbox의 상태값을 allChk.value 의 값으로 변경
	props.getCheckbox.forEach(item => {
		item.isChecked = allChk.value;
		if (item.agreeDept) {
			item.agreeDept.forEach(deptItem => {
				deptItem.isChecked = allChk.value;
			});
		}
	});
};

// 체크박스 아이템을 토글하는 메서드
const toggleItem = item => {
	item.isChecked = !item.isChecked;
	// data 하위에 agreeDept 데이터가 있으면 모두 checked로 변환
	if (item.agreeDept) {
		item.agreeDept.forEach(deptItem => {
			deptItem.isChecked = item.isChecked;
		});
	}
	// props.getCheckbox item의 checked가 checked 되었을 경우 전체 체크를 확인하는 기능을 수행
	checkAll();
};

// 하위 체크박스 아이템을 토글하는 메서드
const toggleDeptItem = (item, deptItem) => {
	deptItem.isChecked = !deptItem.isChecked;
	const allDeptChecked = item.agreeDept.every(deptItem => deptItem.isChecked);
	console.log(allDeptChecked);
	// 상위 데이터의 checked의 상태값을 allDeptChecked 대응한다.
	item.isChecked = allDeptChecked;
	checkAll();
};

// 모든 체크박스가 체크되었는지 확인하여 최 상위 '전체동의' 체크박스 상태를 변경하는 메서드
const checkAll = () => {
	const allChecked = props.getCheckbox.every(item => item.isChecked);
	allChk.value = allChecked;
};
</script>

<style lang="scss" scoped>
@import '../../assets/component/agree.scss';
</style>
