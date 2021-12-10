<template>
    <form @submit.prevent="handleSubmit()">
        <h3></h3>


        <div class="form-group">
            <input type="email" class="form-control" v-model="email" placeholder="Email" />
        </div>

        <div class="form-group">
            <input type="password" class="form-control" v-model="password" placeholder="Password" />
        </div>
        <br>
        <button class="btn btn-primary btn-block">READY TO LAND</button>
    </form>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        handleSubmit() {
            const data = {
                email: this.email,
                password: this.password,
            }
            console.log(data);
        }
    }
}
</script>

<style scoped>

h3 {
    font-size: 30px;
}
form {
    font-size: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 500px;
    height: 300px;
    border-radius: 10px;
    margin-top: 100px;
}
::placeholder {
    color: white;
}
input {
    color: white;
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: 10px;
    font-size: 30px;
    background-color: black;
    border: 2px solid white;
    border-radius: 5px;
   
}

label {
    margin-top: 10px;
    margin-bottom: 5px;
}

button {
    color: white;
    font-size: 20px;
    width: 250px;
    height: 50px;
    border-radius: 5px;
    border: solid 2px white;
    margin-top: 5px;
    background-color: black;
    border: 1px solid #FFFBFB;
    box-shadow: inset 10px 4px 4px rgba(0, 0, 0, 0.25);
}
button:hover {
    background-color: lightcyan;
    color: black;
}


</style>