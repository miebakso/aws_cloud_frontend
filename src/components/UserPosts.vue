<script setup>
import { useRouter, useRoute } from 'vue-router'

const data = {
    'posts': [
        { 
            'id': 0,
            'title': 'Post 1 Title',
            'img': 'img url',
            'user_id': 1,
            'username': 'Matthew Ariel',
            'likes': 100,
            'date': '2022-02-01',
            'content': 'asdasd asd asd asd asd asd asd asd asd asd asd asd asd a'
        },
        { 
            'id': 1,
            'title': 'Post 1 Title',
            'img': 'img url',
            'user_id': 1,
            'username': 'Matthew Ariel',
            'likes': 100,
            'date': '2022-02-01',
            'content': 'asdasd asd asd asd asd asd asd asd asd asd asd asd asd a'
        }
    ]
}
const router = useRouter()

const viewPostDetail  = function(id){
    router.push({ name: 'post', params: {'id': id}})
}

function edit(id) {
    router.push({name: 'edit', query: {'id': id}})
}
function remove(id) {
    router.push({name: 'remove', query: {'id': id}})
}
</script>

<template>
<div class="row justify-content-center">
    <div class="col-md-6 ">
        <div v-for="(post) in data['posts']" :key="post.id">
            <div class="custom-card card" >
                <img @click="viewPostDetail(post.id)" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="row">
                        <h5 class="card-title">{{post.title}}</h5>
                        
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            <i class="fa-solid fa-heart"></i>{{post.likes}}
                        </div>
                        <div class="col-md-3">
                            {{post.date}}
                        </div>
                        <div class="col-md-7 col-md-3 d-flex justify-content-end">
                            <button class="custom-btn btn btn-sm btn-outline-warning" @click="edit(id=1)">Edit</button>
                            <button class="custom-btn btn btn-sm btn-outline-danger" @click="remove(1)">Remove</button>
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
