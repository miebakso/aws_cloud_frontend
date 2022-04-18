<script setup>
import Navbar from '@/components/Navbar.vue'
import Subbar from '@/components/Subbar.vue'
import Posts from '@/components/Posts.vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()


// console.log('abc')
// console.log(route.query.keyword)
</script>

<template>
  <main>
    <Navbar />
    <div class="container">
      <Subbar :searchkey="route.query.keyword" />
      <Posts />
    </div>
  </main>
</template>