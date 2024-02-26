<template>
	<div class="container">
		<VTable class="type1" caption="캡션내용" tblClass="tbType1">
			<template #tHeader>
				<thead>
					<tr>
						<th>1</th>
						<th>2</th>
					</tr>
				</thead>
			</template>
			<tbody>
				<tr>
					<td>a</td>
					<td>b</td>
				</tr>
				<tr>
					<td>a</td>
					<td>b</td>
				</tr>
			</tbody>
			<template #tFooter>
				<tfoot>
					<tr>
						<td>f1</td>
						<td>f2</td>
					</tr>
				</tfoot>
			</template>
		</VTable>
	</div>
</template>

<script setup>
import VTable from '../../components/element/VTable.vue';
</script>

<style lang="scss" scoped></style>
