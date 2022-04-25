<script setup>
import { useRouter } from 'vue-router'
import axios from 'axios'
import {BASE_URL} from '../assets/env.js'

const router = useRouter()

async function onSubmit(e) {
    console.log(e.target.username.value)
    console.log(e.target.password.value)
    console.log(BASE_URL)
    const login_detail = {
        'username': e.target.username.value,
        'password': e.target.password.value
    }
    try {    
        const resp = await axios({
            method: 'POST',
            url: 'register',
            baseURL: BASE_URL,
            data: login_detail
        })
        
        if (resp.status == 200) {
            router.push({ name: 'login'})
        } 

    } catch(error) {
        console.log(error)
        alert("Username must be unique")
    }
}
</script>

<template>
    <div class="container">
        
        <div class="custom-login-form row">
            
            <div class="col-xs-12 col-md-6">
            <h1>Register</h1>
            <form @submit.prevent="onSubmit">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" name="username" class="form-control" id="username" placeholder="username">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" class="form-control" id="password" placeholder="password">
                </div>
                <div class="text-center" >
                    <button type="submit" class="btn btn-md btn-outline-success ">Register</button>
                </div>
            </form>
            </div>
        </div>
        
    </div>
</template>

<style scoped>

.custom-login-form {
    height: 100%;
    padding: 15%;
    justify-content: center;
}
.custom-login-form > div {
    padding: 20px;
    background-color: rgb(245, 245, 245);
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
