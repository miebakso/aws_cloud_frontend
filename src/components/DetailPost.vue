<script setup>

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
    ]
}
</script>

<template>
<div class="row justify-content-center">
    <div class="col-md-6 ">
        <div v-for="(post, index) in data['posts']" :key="post.id">
            {{index}}. {{post.name}}
            <div class="card" >
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{post.title}}</h5>
                    <p class="card-text">{{post.content}}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>

</style>
