<script setup>

</script>

<template>
    <div class="container">
        
        <div class="custom-login-form row">
            
            <div class="col-xs-12 col-md-6">
            <h1> Stock Forum Login</h1>
            <form>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username" placeholder="username">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="password">
                </div>
                <div class="text-center" >
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
