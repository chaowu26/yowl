<template>
<div>
    <div class="lists-container">
            <div class="list">
                <h2 class="list-title">
                    Comments 
                </h2>
                <ul class="list-items" v-for="post in posts" v-bind:key="post.id">
                    <p>
                        <router-link to="/USER_UPDATEposts">
                            <li>{{ post.user_id }} <button @click="beforeDelete(post.id)" type="button">X</button></li>
                        </router-link>
                    </p>
                </ul>
            </div>
    </div>
    <div>
        <router-link to="">
            <button class="BTN"> Change profile picture </button>
        </router-link>
        <ul class="list-user" v-for="user in users" v-bind:key="user.id">
            <li> {{ user.username }} </li> 
            <li> {{ user.age }} </li>  
        </ul>
    </div>
    <div>
        <button class="AddPost"> New Post </button>
    </div>
</div>
</template>

<script>
export default {
  data() {
        return {
            user :[],
            username:"",
            email: "",
            password: "",
            age:"",

            posts :[],
            user_id:"",
        }
    }
}
</script>