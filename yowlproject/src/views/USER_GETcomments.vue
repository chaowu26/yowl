<template>
<div>
    <div class="lists-container">
            <div class="list">
                <h2 class="list-title">
                    Comments 
                </h2>
                <ul class="list-items" v-for="comment in comments" v-bind:key="comment.id">
                    <p>
                        <router-link to="/USER_UPDATEcomments">
                            <li>{{ comment }} <button @click="beforeDelete(comment.id)" type="button">X</button></li>
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
        <!-- <router-link>-->
        <button class="AddPost"> New Post </button>
       <!-- </router-link>-->
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

            comment :[],
        }
    }
}
</script>
