<script setup>
import { ref} from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { BASE_URL } from '../assets/env'


const router = useRouter()

function register() {
    router.push({name: 'register'})
}

async function onSubmit(e) {
    const login_detail = {
        'username': e.target.username.value,
        'password': e.target.password.value
    }
    try {    
        const resp = await axios({
            method: 'POST',
            url: 'login',
            baseURL: BASE_URL,
            data: login_detail
        })
        if (resp.status == 200) {
            const data = resp.data
            localStorage.setItem("user_id", data.id);
            localStorage.setItem("user_name", data.username);
            localStorage.setItem("role", data.role_id);
            router.push({ name: 'posts'})
        } 

    } catch(error) {
        console.log(error)
        alert("Wrong username / password")
    }
}
</script>

<template>
    <div class="container">
        
        <div class="custom-login-form row">
            
            <div class="col-xs-12 col-md-6">
            <h1> Stock Forum Login</h1>
            <form @submit.prevent="onSubmit">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input name="username"  type="text" class="form-control" id="username" placeholder="username">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input name="password"  type="password" class="form-control" id="password" placeholder="password">
                </div>
                <div class="text-center" >
                    <button @click="register" style="margin-right: 40px;" class="btn btn-md btn-outline-info ">Register</button>
                    <button type="submit" class="btn btn-md btn-outline-success ">Login</button>
                    
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
