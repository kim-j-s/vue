<template>
	<div class="tbl">
		<table :class="tblClass">
			<caption v-if="caption">
				{{
					caption
				}}
			</caption>
			<slot name="tColgroup"></slot>
			<slot name="tHeader"></slot>
			<slot name="tFooter"></slot>
			<slot></slot>
		</table>
	</div>
</template>

<script setup>
defineProps({
	tblClass: {
		type: String,
	},
	caption: {
		type: String,
	},
});
</script>

<style lang="scss" scoped>
.tbl {
	margin: 0 20px;
	border-top: 1px solid #000;
	> table {
		table-layout: fixed;
		width: 100%;
		border-bottom: 1px solid #000;
		border-bottom: 1px solid red;
	}
	:deep(thead) {
		th {
			background-color: red;
		}
	}
	:deep(tbody) {
		td {
			text-align: left;
		}
	}
	:deep(tfoot) {
		td {
			text-align: right;
			background-color: #ddd;
		}
	}
}
</style>
