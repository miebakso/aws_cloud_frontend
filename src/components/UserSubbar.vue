<script setup>
import { useRouter } from 'vue-router'


const router = useRouter()

function createPost() {
	router.push({ name: 'create'})
}

</script>

<template>
    <div class="row justify-content-center">
        <div class="custom col-md-6 col-xs-12">
            <button class="btn btn-outline-success" @click="createPost()" >New Post</button>
        </div>
    </div>
</template>

<style scoped>
.custom {
    margin-top: 20px;
}
</style>
