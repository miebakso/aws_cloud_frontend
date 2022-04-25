<script setup>
import Navbar from '@/components/Navbar.vue'
import Subbar from '@/components/Subbar.vue'
import Posts from '@/components/Posts.vue'
import { useRoute } from 'vue-router'


const route = useRoute()

const keyword = route.query.keyword


</script>

<template>
  <main>
    <Navbar />
    <div class="container">
      <Subbar :searchkey="route.query.keyword" />
      
    </div>
  </main>
</template>