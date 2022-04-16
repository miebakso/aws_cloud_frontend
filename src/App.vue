
<script setup>
import { RouterLink, RouterView } from 'vue-router'

let script = document.createElement('script')
script.onload = () => {
  esolve(import(someComponent))
}
script.async = true
script.src = 'https://kit.fontawesome.com/6ad3c19d7c.js'
document.head.appendChild(script)
</script>

<template>
  <RouterView />
</template>

