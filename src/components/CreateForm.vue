<script setup>
import {ref} from "vue"

const file = ref(null)

function onSubmit(title, content) {
	console.log(title)
    console.log(content)
    console.log(file.value.files)
	// router.push({ name: 'search', query:{'keyword': keyword}})
}
function uploadFile() {
    console.log("selected file",)
}

</script>

<template>
    <div class="container">
        
        <div class="custom-post-form row">
            <div class="col-xs-12 col-md-6">
            <h1> Stock Forum Login</h1>
            <form @submit.prevent="onSubmit(title, content)">
                <div class="form-group" >
                    <label for="title">Title</label>
                    <input type="text" v-model="title" class="form-control" id="title" placeholder="title" required/>
                </div>
                <div class="form-group">
                    <label for="content">Content</label>
                    <textarea class="form-control" v-model="content" rows="4" id="content" placeholder="content" required/>
                </div>
                <div class="form-group">
                    <label for="img">Image</label>
                    <input ref="file" type="file" class="form-control" id="file" placeholder="file" required/>
                </div>
                <div class="text-center" >
                    <button type="submit" class="btn btn-md btn-outline-success ">Create</button>
                </div>
            </form>
            </div>
        </div>
        
    </div>
</template>

<style scoped>

.custom-post-form {
    height: 100%;
    padding: 10%;
    justify-content: center;
}
.custom-post-form > div {
    padding: 20px;
    background-color: rgb(255, 255, 255);
    border-radius: 25px;
    border: 4px solid #189407;
}

form > div {
    padding: 5px;
}
h1 {
    text-align: center;
}

</style>
