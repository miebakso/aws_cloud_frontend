<script setup>
import Navbar from '@/components/Navbar.vue'
import UserPosts from '@/components/UserPosts.vue'
import UserSubbar from '@/components/UserSubbar.vue'
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { BASE_URL } from '../assets/env'


</script>

<template>
  <main>
    <Navbar />
    <div class="container">
      <UserSubbar />
      <UserPosts />
    </div>
  </main>
</template>