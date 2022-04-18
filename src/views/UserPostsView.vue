<script setup>
import Navbar from '@/components/Navbar.vue'
import UserPosts from '@/components/UserPosts.vue'
import UserSubbar from '@/components/UserSubbar.vue'
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