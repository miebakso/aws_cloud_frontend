<script setup>
import { useRouter, useRoute } from 'vue-router'
import { onMounted, ref } from "vue";
import axios from 'axios'
import { BASE_URL } from '../assets/env'

const router = useRouter()
const route = useRoute()
const p_id = route.query.id
const data = ref(null)

console.log(p_id)

const h_like = ref(true)


onMounted(async () => {
	try {    
		const resp = await axios({
			method: 'GET',
			url: 'post/'+p_id,
			baseURL: BASE_URL,
		}).then(rsp => {
			data.value = rsp.data
            console.log(rsp.data)
		})
	} catch(error) {
		console.log(error)
	}
    
})


async function commentPost(msg) {
    try {   
        const user_id = localStorage.getItem('user_id')
        const data1 = {
            'message': msg,
            'user_id': user_id,
            'post_id': p_id,
            
        } 
        const resp = await axios({
            method: 'POST',
            url: 'post/comment',
            baseURL: BASE_URL,
            data: data1
        })
        if (resp.status == 200) {
            router.push({ name: 'post', query: {'id': p_id}})
        } 
        router.push({ name: 'post', query: {'id': p_id}})
    } catch(error) {
        console.log(error)
        
    }
}

async function like(p_id){
	try {    
        const user_id = localStorage.getItem('user_id')
		const resp = await axios({
			method: 'GET',
			url: 'user/has/like?post_id='+p_id+'&user_id='+user_id,
			baseURL: BASE_URL,
		}).then(rsp => {
			h_like.value = rsp.data
            console.log(h_like.value)
		})
	} catch(error) {
		console.log(error)
	}
    if(h_like.value){
        console.log('aaaaa')
        try {    
            const u_id = localStorage.getItem('user_id')
            const resp = await axios({
                method: 'POST',
                url: 'post/unlike',
                baseURL: BASE_URL,
                data: {
                    'user_id': u_id,
                    'post_id': p_id
                }
            }).then(rsp => {
                h_like.value = rsp.data
                console.log(h_like.value)
            })
        } catch(error) {
            console.log(error)
        }
    } else {
        console.log('bbbbb')
        try {    
            const u_id = localStorage.getItem('user_id')
            const resp = await axios({
                method: 'POST',
                url: 'post/like',
                baseURL: BASE_URL,
                data: {
                    'user_id': u_id,
                    'post_id': p_id
                }
            }).then(rsp => {
                h_like.value = rsp.data
                console.log(h_like.value)
            })
        } catch(error) {
            console.log(error)
        }
    }
    router.push({name: 'post', query: {'id': p_id}})
}

</script>

<template>
<div class="row justify-content-center">
    <div class="row">
        <div class="col-md-3 custom-chat">
            <form @submit.prevent="commentPost(msg)">
                <div class="form-group">
                <h4>Message</h4>
                <textarea  v-model="msg" class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                </div>
                <button type="submit" class="button-custom btn btn-lg btn-outline-success">Send </button>
            </form>
        </div>
    </div>

    <div class="col-md-6 ">
        <div v-if="data">
            <div class="custom-card card" >
                <img v-bind:src="data.s3_img" class="card-img-top" alt="">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12">
                        <h5 class="card-title">{{data.title}}</h5>
                        </div>
                    </div>
                    <div class="row">
                         <div class="col-md-4">
                            <b>{{data.username}}</b>
                        </div>
                        <div class="col-md-4 d-flex justify-content-end" @click="like(data.id)">
                            <div><i class="fa-solid fa-heart"></i>{{data.n_like}}</div>
                        </div>
                        <div class="col-md-4 d-flex justify-content-end">
                            <p>{{data.post_datetime}}</p>
                        </div>
                    </div>
                    <div class="row custom-comment">
                        <p>{{data.content}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="data">
        <div v-for="comment in data['comments']" :key="comment.id">
            <div class="custom-card card" >
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-8">
                        <p class="card-title">{{comment.username}}</p>
                        </div>
                        <div class="col-md-4 text-right d-flex justify-content-end">
                            <p>{{comment.msg_datetime}}</p>
                        </div>
                    </div>
                    <div class="row">
                        <p>{{comment.message}}</p>
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
.custom-comment {
    margin-top: 10px;
}
.custom-chat {
    position:fixed;
    bottom:0;
    right: 5px;
    margin-bottom: 10px;
    border-radius: 20px;
    border: 3px solid #189407;
    padding: 10px;
}
.button-custom {
    margin-top: 10px;

}

</style>
