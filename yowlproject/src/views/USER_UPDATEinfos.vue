<template>
    <div>
        <div class="list-infos">
            <ul v-for="user in users" v-bind:key="user.id">
                <li> {{user.username}} </li>
                <li> {{user.email}} </li>
                <li> {{user.age}} </li>
                <li> {{user.password}} </li>
                <li> {{user.country}}</li>
            </ul>
        </div>
        <div class="btn">
           <!-- <router-link>-->
                <button> SAVE </button>
                <button> CANCEL </button>
            <!--<router-link>-->
        </div>
    <div>
        <!-- <router-link to=""> -->
            <button class="BTN"> Change profile picture </button>
        <!-- </router-link> -->
        <ul class="list-user" v-for="user in users" v-bind:key="user.id">
            <li> {{ user.username }} </li> 
            <li> {{ user.age }} </li>  
        </ul>
    </div>
    <div>
        <!-- <router-link>-->
        <button class="AddPost"> New Post </button>
       <!-- </router-link>-->
    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
        return {
            users :[],
            username:"",
            email: "",
            password: "",
            age:"",
            country:"",

            comment :[],
        }
    },

    mounted(){
        axios.get("http://localhost:3000/users", {
            headers: { "Content-Type": "application/json"},
        })
        .then((response) => {
                console.log(response.data)
                this.users = response.data;
            })   
        },
    methods: {
        Update(){
        axios.put("http://localhost:3000/users/" + this.$route.param.id, {
            username : this.username,
            email : this.email,
            age : this.age,
            password : this.password,
            country : this.country,
        }) 
        .then((response) => {
            console.log(response.data)
            this.users = response.data;
        })
        }


    }
}
</script>