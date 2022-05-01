<script setup>
import Navbar from '@/components/Navbar.vue'
import Subbar from '@/components/Subbar.vue'
import Posts from '@/components/Posts.vue'
import axios from 'axios'
import { BASE_URL } from '../assets/env'
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
const data = ref([])

onMounted(async () => {
	try {    
		const resp = await axios({
			method: 'GET',
			url: 'posts?popular=false',
			baseURL: BASE_URL,
		}).then(rsp => {
			data.value = rsp.data
			// console.log(rsp.data)
		})
	} catch(error) {
		console.log(error)
	}
})

function viewPostDetail(id){
    router.push({ name: 'post', query: {'id': id}})
}

</script>

<template>
<main>
	<Navbar />
	<div class="container">
		<Subbar />

		<!-- <Posts :data="data"/> -->
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
</main>
</template>

<style scoped>
.custom-card {
    margin-top: 20px;
}
</style>
