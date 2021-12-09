<template>
<div class=image>
   
<div id="shadow">
            <div id="email">
                <div id="registration">
                <p> Login</p>
                <p><router-link to="/register"> Register </router-link></p>
            </div>
                
              <form @submit.prevent="Log()" id="form" method="post">
                  <div>
                      <label for="email"> Email</label>
                        <input type="email" v-model="email" name="email" placeholder="Email" id="email" required> 
                  </div>
                  <div>
                       <label for="email"> Password</label>
                        <input type="password" v-model="password" name="password" placeholder="Password" id="password" required>
                  </div>
                  <div>
                        <button @v-on:click="Log()" id="css" type="submit"> Log </button>
                  </div>
                       
              </form>
            </div>
            
        </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
        return {
            user :[

            ],
            email: "",
            password: "",
        }

    },

    mounted(){
        axios.post("http://localhost:3000/login", {   
            headers: { "Content-Type": "application/json"},
        })
        .then(response => {
                console.log(response.data)
            }) 
    },


    methods:{
        Log(){
            axios.post("http://localhost:3000/login",{
                email:this.email,
                password:this.password, 
            })
            .then(function(response){
                console.log(response.data);
                if (response.data.message == "good") {
                   this.$router.push("USER_GETinfos")
                } else if (response.data.message == "Incorect email and/or password") {
                    this.$router.push("login")
                    alert("Incorect email and/or password")
                }

                /*if (response.data == "OK"){
                    this.$toast.success("You are victorious !");
                    this.$router.push("You are victorious !");
                } else {
                    this.$toast.error();("You failed : something wrong !");
                    this.$router.push("Login");
                }*/
            }) 
        }
    }

}
</script>

<style scoped>

/*img {
    position: fixed;
 top: 0;
 left: 0;
 min-width: 100%;
 min-height: 100%;                                                            
 
}
#shadow {
    box-shadow: 0px 0px 10px rgb(0, 0, 0);
    width: 500px;
    height: 500px;
    border-radius: 20px;
    background-color: #393E46;
    opacity: 0,20;
    margin-left: auto;
    margin-right: auto;
   
}

body
{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background-size: 100%;
    /*background-image: url("Home-page-floue.png");
}

#registration
{
    font-family: Arial, Helvetica, sans-serif;
    color: white;
}

#registration a {
    text-decoration: none;
    color: #608f92;
}

#registration a:hover {
    text-shadow: 0px 0px 10px #608f92;
    transition: 0.5s;
}

#shadow #email div #css{
    background-color: #608f92;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #608f92;
    font-size: 21px;
    color: white;
    margin-top: 20px;
    padding: 20px;
}

#shadow input {
    border: none;
    border-radius: 10px;
    box-shadow: 0px 0px 1px black;
    font-size: 21px;
    color: black;
    margin-top: 20px;
    padding: 20px;
}

#email label {
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(41, 41, 41);
}

#email p
{
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    font-size: x-large;
    padding-top: 50px;
}
    */
</style>