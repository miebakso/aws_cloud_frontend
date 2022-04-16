<script setup>

</script>

<template>
	<div class="row subbar-custom">
		<div class="col-md-8 col-xs-12">
			<ul class="custom-nav nav">
				<li class="nav-item">
					<router-link class="nav-link" to="/posts">Newest</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/popular">Popular</router-link>
				</li>
			</ul>
		</div>
		<div class="col-md-4 col-xs-12">
			<form class="d-flex justify-content-right">
				<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
				<button class="btn btn-outline-success" type="submit">Search</button>
			</form>
		</div>
		

	</div>
</template>

<style scoped>
.custom-nav > li > a{
	color: black;
	font-size: 1.2rem;
}
.subbar-custom {
	background-color: rgb(238, 237, 237);
	padding: 0.8rem;
	margin-top: 20px;
}
</style>
