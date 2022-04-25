<script setup>
import {ref} from "vue"
import axios from 'axios'
import { BASE_URL } from '../assets/env'
import { useRouter } from 'vue-router'
const router = useRouter()

const file = ref(null)

async function onSubmit(title, content) {
    const user_id = localStorage.getItem('user_id')
    const data = new FormData();
    // console.log(file)
    // console.log(e)
    // console.log(file.value.files)
    data.append("file", file.value.files[0]);
    data.append("title", title)
    data.append("content", content)
    data.append("user_id", user_id)
    const resp = await axios({
        method: 'POST',
        url: 'post/create',
        headers: {'Content-Type': 'multipart/form-data'},
        baseURL: BASE_URL,
        data: data
    }).then(rsp => {
        console.log(rsp)
        router.push({ name: 'posts', params: {'id': user_id}})
    }).catch((error) => {
        console.log(error)
    })
	
}

// function uploadFile() {
//     console.log("selected file")
// }

</script>

<template>
    <div class="container">
        
        <div class="custom-post-form row">
            <div class="col-xs-12 col-md-6">
            <h1> Post Create</h1>
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
                    <input ref="file" type="file" class="form-control" id="file" placeholder="file" required/>
                </div>
                <div class="text-center" >
                    <button type="submit" class="btn btn-md btn-outline-success ">Create</button>
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
