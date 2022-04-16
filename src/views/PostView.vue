<script setup>
import Navbar from '@/components/Navbar.vue'
import Subbar from '@/components/Subbar.vue'
import Posts from '@/components/Posts.vue'
</script>

<template>
  <main>
    <Navbar />
    <div class="container">
      <Subbar />
      <Posts />
    </div>
  </main>
</template>
