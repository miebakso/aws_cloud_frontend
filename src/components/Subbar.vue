<script setup>
import { useRouter, useRoute } from 'vue-router'
import { reactive } from 'vue'

import axios from 'axios'
import { BASE_URL } from '../assets/env'
import { onMounted, ref } from "vue";

const props = defineProps(['searchkey'])
const router = useRouter()
const route = useRoute()

const keyword = props.searchkey

const data = ref([])

function onSubmit(keyword) {
	router.push({ name: 'search', query:{'keyword': keyword}})
}

async function searhPosts(word){
	try {    
		const resp = await axios({
			method: 'GET',
			url: 'search?keyword='+word,
			baseURL: BASE_URL,
		}).then(rsp => {
			console.log(rsp)
			data.value = rsp.data
		})
	} catch(error) {
		console.log(error)
	}
}

if (keyword != null ){
	console.log(keyword)
	searhPosts(keyword)
}




const has_like = ref(null)
const p_id = route.query.id






function viewPostDetail(id){
	console.log('asdasdasdasda')
    router.push({ name: 'post', query: {'id': id}})
}

</script>

<template>
<div>
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
	<div v-if="data != null">
		<div class="row justify-content-center">
				<div class="col-md-6 ">
					<div v-for="(post) in data" :key="post.id">
						<div class="custom-card card" >
							<img v-bind:src="post.s3_img" @click="viewPostDetail(post.id)" class="card-img-top" alt="...">
							<div class="card-body">
								<div class="row">
									<div class="col-md-12">
									<h5 class="card-title">{{post.title}}</h5>
									</div>
								</div>
								<div class="row">
									<div class="col-md-5">
										{{post.username}}
									</div>
									<div class="col-md-3">
										<i class="fa-solid fa-heart"></i>{{post.n_like}}
									</div>
									<div class="col-md-4">
										{{post.post_datetime}}
									</div>
								</div>
								<p class="card-text">{{post.content}}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
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
.custom-card {
    margin-top: 20px;
}
</style>
