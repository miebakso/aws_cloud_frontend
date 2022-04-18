<script setup>
import { useRouter, useRoute } from 'vue-router'
import { defineProps, reactive } from 'vue'

const props = defineProps(['searchkey'])
const router = useRouter()

const keyword = props.searchkey
console.log('print pros value')
console.log(props.searchkey)
function onSubmit(keyword) {
	console.log(keyword)
	router.push({ name: 'search', query:{'keyword': keyword}})
}

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
			<form class="d-flex justify-content-right" @submit.prevent="onSubmit(keyword)">
				<input class="form-control me-2" v-model="keyword" type="text" placeholder="Search" aria-label="Search">
				<button class="btn btn-outline-success" type="submit" >Search</button>
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
	background-color: rgb(220, 220, 220);
	padding: 0.8rem;
	margin-top: 20px;
}
</style>
