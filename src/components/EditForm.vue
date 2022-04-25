<script setup>
import {onMounted, ref} from "vue"
import axios from 'axios'
import { BASE_URL } from '../assets/env'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()

const route = useRoute()

const p_id = route.query.id

const file = ref(null)

const title = ref('')
const content = ref('')

async function onSubmit(title, content) {
    const user_id = localStorage.getItem('user_id')
    const data = new FormData();
    if (file.value.files.length != 0){
        console.log(file)
        console.log(file.value)
        console.log(file.value.files)
        console.log("asda")
        data.append("file", file.value.files[0]);
    }
    data.append("title", title)
    data.append("content", content)
    data.append("post_id", p_id)
    const resp = await axios({
        method: 'POST',
        url: 'post/update',
        headers: {'Content-Type': 'multipart/form-data'},
        baseURL: BASE_URL,
        data: data
    }).then(rsp => {
        console.log(rsp)
        
    }).catch((error) => {
        console.log(error)
    })
	router.push({ name: 'post', query: {'id': p_id}})
}

const has_like = ref(null)

onMounted(async () => {
	try {    
		const resp = await axios({
			method: 'GET',
			url: 'post/'+p_id,
			baseURL: BASE_URL,
		}).then(rsp => {
			title.value = rsp.data.title
            content.value = rsp.data.content
            console.log(rsp.data)
		})
	} catch(error) {
		console.log(error)
	}
    // try {    
	// 	const res = await axios({
	// 		method: 'GET',
	// 		url: 'user/has/like?post_id='+p_id+'&user_id='+,
	// 		baseURL: BASE_URL,
	// 	}).then(rsp => {
	// 		title.value = rsp.data.title
    //         content.value = rsp.data.content
    //         console.log(rsp.data)
	// 	})
	// } catch(error) {
	// 	console.log(error)
	// }
    
})



</script>

<template>
    <div class="container">
        
        <div class="custom-post-form row">
            <div class="col-xs-12 col-md-6">
            <h1> Post Edit</h1>
            <form @submit.prevent="onSubmit(title, content)">
                <div class="form-group" >
                    <label for="title">Title</label>
                    <input type="text" v-model="title" class="form-control" id="title" placeholder="title" required/>
                </div>
                <div class="form-group">
                    <label for="content">Content</label>
                    <textarea class="form-control" v-model="content" rows="4" id="content" placeholder="content" required/>
                </div>
                <div class="form-group">
                    <label for="img">Image</label>
                    <input ref="file" type="file" class="form-control" id="file" placeholder="file" />
                </div>
                <div class="text-center" >
                    <button type="submit" class="btn btn-md btn-outline-success ">Update</button>
                </div>
            </form>
            </div>
        </div>
        
    </div>
</template>

<style scoped>

.custom-post-form {
    height: 100%;
    padding: 10%;
    justify-content: center;
}
.custom-post-form > div {
    padding: 20px;
    background-color: rgb(255, 255, 255);
    border-radius: 25px;
    border: 4px solid #189407;
}

form > div {
    padding: 5px;
}
h1 {
    text-align: center;
}

</style>
