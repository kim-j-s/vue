<template>
	<VHeader />
	<router-view></router-view>
	<VFooter />
</template>

<script setup>
import VHeader from './components/layout/VHeader.vue';
import VFooter from './components/layout/VFooter.vue';
</script>

<style lang="scss" scoped></style>
