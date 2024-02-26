<template>
	<div class="container">
		<h4>기본 Swiper</h4>
		<swiper
			:slides-per-view="1.3"
			:space-between="20"
			:speed="1000"
			@swiper="onSwiper"
			@slideChange="onSlideChange"
		>
			<swiper-slide>Slide 1</swiper-slide>
			<swiper-slide>Slide 2</swiper-slide>
			<swiper-slide>Slide 3</swiper-slide>
		</swiper>

		<h4>기본 Pager - Bullet / auto play &amp; loop</h4>
		<swiper
			class="pager"
			:modules="modules"
			navigation
			:speed="1000"
			:autoplay="{
				delay: 4000,
				disableOnInteraction: true,
			}"
			:loop="true"
			:pagination="{ clickable: true }"
			:space-between="20"
			@swiper="onSwiper2"
			@slideChange="onSlideChange2"
		>
			<swiper-slide>Slide 1</swiper-slide>
			<swiper-slide>Slide 2</swiper-slide>
			<swiper-slide>Slide 3</swiper-slide>
			<swiper-slide>Slide 4</swiper-slide>
		</swiper>
		<h4>기본 Pager - Fraction</h4>
		<swiper
			class="pager"
			:modules="modules"
			navigation
			:loop="true"
			:pagination="{
				type: 'fraction',
			}"
			:space-between="20"
			@swiper="onSwiper2"
			@slideChange="onSlideChange2"
		>
			<swiper-slide>Slide 1</swiper-slide>
			<swiper-slide>Slide 2</swiper-slide>
			<swiper-slide>Slide 3</swiper-slide>
			<swiper-slide>Slide 4</swiper-slide>
		</swiper>
	</div>
</template>

<script setup>
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const onSwiper = swiper => {
	console.log(swiper);
};
const onSlideChange = () => {
	console.log('slide change');
};

const onSwiper2 = swiper => {
	console.log(swiper, ' : 2');
};
const onSlideChange2 = () => {
	console.log('slide change 2');
};

const modules = [Navigation, Pagination, Autoplay];
</script>

<style lang="scss" scoped>
.container {
	h4 {
		padding: 10px 0;
		margin-bottom: 20px;
		text-align: center;
		border-top: 1px solid #333;
		border-bottom: 1px solid #333;
		background-color: #f7f7f7;

		& ~ h4 {
			margin-top: 20px;
		}
	}
}
.swiper {
	position: relative;
	padding: 0 20px;

	&.pager {
		padding-bottom: 30px;
		.swiper-pagination {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100px;
			text-align: left;
		}
	}

	.swiper-slide {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100px;
		border-radius: 10px;
		border: 1px solid #000;
		background-color: #ddd;
		&:nth-child(odd) {
			background-color: #f7f7f7;
		}
	}
}
</style>
