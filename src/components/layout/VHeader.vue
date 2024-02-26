<template>
	<header>
		<div class="inner">
			<h1>타이틀 22</h1>

			<nav>
				<ul>
					<li>
						<router-link :to="{ name: 'home' }">Go Home Name</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'tab' }">Go Tab</router-link>
					</li>
					<li>
						<router-link :to="{ path: '/pages/swiper' }">Go Swiper</router-link>
					</li>
					<li>
						<router-link :to="{ path: '/pages/agree' }">Go Agree</router-link>
					</li>
					<li>
						<strong>공지사항</strong>
						<ul class="dept">
							<li>
								<router-link :to="{ name: 'notiList' }">목록</router-link>
							</li>
							<li>
								<router-link :to="{ name: 'notiDetail' }">상세</router-link>
							</li>
						</ul>
					</li>
				</ul>
			</nav>

			<div class="units">
				<template v-if="!headerUnitContent">
					<span>1</span>
					<span>2</span>
					<span>3</span>
				</template>
				<div v-else>
					<button>검색버튼</button>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup>
import { computed } from 'vue';

// $route를 사용하기 위해 inject로 router 가져오기
import { useRouter } from 'vue-router';

const router = useRouter();

const headerUnitContent = computed(() => {
	// 현재 라우트의 meta에서 headerUnit 값을 확인하여 버튼을 노출할지 결정
	return router.currentRoute.value.meta.headerUnit || false;
});
</script>

<style lang="scss"></style>
