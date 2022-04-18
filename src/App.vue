
<script setup>
import { RouterLink, RouterView } from 'vue-router'

let script = document.createElement('script')
script.async = true
script.src = 'https://kit.fontawesome.com/6ad3c19d7c.js'
document.head.appendChild(script)
</script>

<template>
  <main style="height:100vh;margin:0;padding:0; background-color: rgb(240, 240, 240);">
    <RouterView />
  </main>
</template>

<style scoped>

</style>

