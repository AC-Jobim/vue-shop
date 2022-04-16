<template>
	<el-menu background-color="#333744" text-color="#fff" active-text-color="#409EFF">
		<!-- 一级菜单 -->
		<el-submenu index="1">
			<!-- 一级菜单的模板区域 -->
			<template slot="title">
				<!-- 图标 -->
				<i class="el-icon-location"></i>
				<!-- 文本 -->
				<span>导航一</span>
			</template>
			<!-- 二级菜单 -->
			<el-menu-item index="1-4-1">
				<template slot="title">
					<!-- 图标 -->
					<i class="el-icon-menu"></i>
					<!-- 文本 -->
					<span>导航一</span>
				</template>
			</el-menu-item>
		</el-submenu>
	</el-menu>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
</style>