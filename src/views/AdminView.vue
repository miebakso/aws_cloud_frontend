<script setup>
import Navbar from '@/components/Navbar.vue'
import Subbar from '@/components/Subbar.vue'
import Posts from '@/components/Posts.vue'
import axios from 'axios'
import { BASE_URL } from '../assets/env'
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
const data = ref([])



async function backup(){
    try {    
		const resp = await axios({
			method: 'GET',
			url: 'https://c0zbd689mf.execute-api.us-east-1.amazonaws.com/test/',
		}).then(rsp => {
			console.log(rsp)
            data.value = rsp.data
		})
	} catch(error) {
		console.log(error)
	}
}

</script>

<template>
<main>
	<Navbar />
	<div class="container">

		<!-- <Posts :data="data"/> -->
		<div class="row justify-content-center custom">
			<div class="col-md-6 ">
				<button @click="backup" class="btn btn-md btn-outline-success ">Backup S3</button>
			</div>
            {{data.value}}
		</div>
	</div>
</main>
</template>

<style scoped>
.custom {
    margin-top: 20px;
}
</style>
