<script setup>
import { useRouter } from 'vue-router'
import { onMounted, ref } from "vue";
import axios from 'axios'
import { BASE_URL } from '../assets/env'

const router = useRouter()


const viewPostDetail  = function(id){
    router.push({ name: 'post', query: {'id': id}})
}

function edit(id) {
    router.push({name: 'edit', query: {'id': id}})
}

async function remove(id) {
    try {    
		const resp = await axios({
			method: 'POST',
			url: 'post/delete',
			baseURL: BASE_URL,
            data: {"id":id}
		}).then(rsp => {
			console.log(rsp)
		})
	} catch(error) {
		console.log(error)
	}
    router.push({name: 'userpost'})
}

const data = ref([])
const user_id = localStorage.getItem('user_id')

onMounted(async () => {
	try {    
		const resp = await axios({
			method: 'GET',
			url: 'user/posts/'+user_id,
			baseURL: BASE_URL,
		}).then(rsp => {
			data.value = rsp.data
		})
	} catch(error) {
		console.log(error)
	}
})
</script>

<template>
<div class="row justify-content-center">
    <div class="col-md-6 ">
        <div v-for="(post) in data" :key="post.id">
            <div class="custom-card card" >
                <img @click="viewPostDetail(post.id)" v-bind:src="post.s3_img" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="row">
                        <h5 class="card-title">{{post.title}}</h5>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            <i class="fa-solid fa-heart"></i>{{post.n_like}}
                        </div>
                        <div class="col-md-5">
                            {{post.post_datetime}}
                        </div>
                        <div class="col-md-5 col-md-3 d-flex justify-content-end">
                            <button class="custom-btn btn btn-sm btn-outline-warning" @click="edit(post.id)">Edit</button>
                            <button class="custom-btn btn btn-sm btn-outline-danger" @click="remove(post.id)">Remove</button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            {{post.content}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.custom-card {
    margin-top: 20px;
}
.custom-btn {
    margin-left: 20px;
}
</style>
