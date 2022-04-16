<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

function redirectMain(){
    router.push('/posts')
}
</script>


<template>
    <main>
    <div class="container">
        <div class="row justify-content-center">
            <div class="custom col-md-4">
                <h2>404 NOT FOUND</h2>
                <div class="text-center" >
                    <button class="btn btn-outline-success" @click="redirectMain()"> Main Page</button>
                </div>
            </div>
        </div>
    </div>
    </main>
</template>

<style scoped>
h2 {
    text-align: center;
}
.custom {
    margin-top: 20%;
}
</style>