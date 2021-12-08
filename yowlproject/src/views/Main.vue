<template>
    <router-link to="Post">
    <input placeholder="Create Post">
    </router-link>

   
    
    <ul class="post" v-for="post in posts" v-bind:key="post.id">  
     <router-link :to="{path: '/comment', query: {id: post.id}}"> 
          <h3>{{post.name}} .Posted at {{post.created_time}}</h3>
          <h2>{{post.title}}</h2>  
          <li>{{post.content}}</li>
          <p>Comments</p>
          <p>Like</p>
          <p>Share</p>
          <p>Save</p>
          <p>...</p>
           </router-link>
    </ul>

    
 
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return { 
      posts: [
      ],
      comments: [
      ],

      commentcontent:"",

      
    }
  },
  created() {
    axios
      .get('http://localhost:3000/posts',{
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response) => {
        console.log(response.data)
        this.posts = response.data;
      });

   

      axios
      .get('http://localhost:3000/comments',{
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response) => {
        console.log(response.data)
        this.comments = response.data;
      })
  },

methods: {
     addcomments(){    
      axios
      .post('http://localhost:3000/comments',
      {comment: this.commentcontent})
      .then(function (response) {
    console.log(response.id);
  })
      } 
},
} 
</script>
<style>

input{
  height:50px;
  width : 500px;
}

.post{
  color:red;
   height:500px;
  width:1000px;
  background:yellow;
  margin-left:200px;
  opacity:50%;
  display: block;
    margin-left: auto;
    margin-right: auto 
}

button{
   positioning: absolute;
   color:red;
    margin-top:10px;
}

button:hover {
  
    background-color: red;
    border: 1px solid  #00aced;
}

li {
  display: flex;

  justify-content: space-between;
  font-size:10px;
  
}
h2{
 text-align:left;
  padding-top:15px;

}
h3 {
  text-align:left;
  padding-top:15px;
}

p{
 text-align:right;
  padding-top:40px;
  color:red;
  font-size:10px;
  display:inline-block;
  width:8%;
  
  

}

body {
  background-image: url("../../public/assets/back.jpeg");
}

</style>