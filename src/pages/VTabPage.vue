<template>
	<div class="container">
		<div class="tabs">
			<ul class="tabsList">
				<li v-for="(item, index) in sendtab1" :key="index">
					<button
						class="vtab-btn"
						:class="{ active: index === tabActive1 }"
						@click="activeChnage($event, index)"
					>
						<span class="text">{{ item.text }}</span>
					</button>
				</li>
			</ul>
		</div>
		<div class="tabsContent">
			<transition name="slide">
				<div v-if="tabActive1 < 1">
					{{ tabActive1 }}
				</div>
			</transition>
		</div>

		<br />
		model value: {{ tabActive1 }}
		<br />

		v-model로 탭 과 컨텐츠를 동기화
		<br /><br />
		<button class="xxx" @click="counter()">counter</button>
		<transition name="showing">
			<p v-if="count === 1">
				{{ count }}
			</p>
		</transition>
	</div>
</template>

<script setup>
import { ref } from 'vue';
// import VTabWrap from '../components/element/VTabWrap.vue';
// import VTab from '../components/element/VTab.vue';
// import VTabContent from '../components/element/VTabContent.vue';

const count = ref(0);

const counter = () => {
	count.value++;
	tabActive1.value = count.value;
};

const tabActive1 = ref(1);
const sendtab1 = ref([
	{
		id: 'tab1',
		text: '탭 1',
		name: 'active1',
	},
	{
		id: 'tab2',
		text: '탭 2',
		name: 'active2',
	},
	{
		id: 'tab3',
		text: '탭 3',
		name: 'active3',
	},
]);

const activeChnage = (event, index) => {
	// console.log('인덱스: ', index);
	tabActive1.value = index;
	const $this = sendtab1.value[index].name;
	console.log($this);
	// console.log('id : ', sendtab1.value[index].id);
};
</script>

<style lang="scss" scoped>
@import '../assets/component/tab.scss';
.showing-enter-active,
.showing-leave-active {
	transition: opacity 0.5s ease;
}

.showing-enter-from,
.showing-leave-to {
	opacity: 0;
}

.xxx {
	margin: 0 20px;
	padding: 20px;
	border-radius: 10px;
}
</style>
