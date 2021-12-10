<template>

<div class=post>
    <h3>{{post["name"]}}.Posted at {{post["created_time"]}}</h3>
     <h2>{{post["title"]}}</h2>  
          <li>{{post["content"]}}</li>
             <p>Comments</p>
          <p>Like</p>
          <p>Share</p>
          <p>Save</p>
          <p>...</p>
          <li>Comment as {{post["name"]}} </li>
</div>
     <input v-model='commentcontent' placeholder = "your thought...">    
  
            <button @click="addcomments()" type="button">
                Comment
            </button>
                  <button @click="deletepost()" type="button">
                Delete
            </button>
                <div>
            <ul class="post" v-for="comment in comments" v-bind:key="comment.id">   
            <li>{{comment.name}}</li>
            <li>Comment at {{comment.created_time}}</li>
            <li>{{comment.comment}}</li>
            <input v-model='souscomment' placeholder = "comment..."> 
            <router-link :to="{ path: '/souscomment', query: { id: comment.id}}"> 
              <button @click="addcomments()" type="button">
                Comment
            </button>
          
            
            </router-link>

          <p>Like</p>
          <p>Share</p>
          <p>Save</p>
          <p>...</p>
    

            </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return { 
      post: [
    
      ],
      comments: [
      ],
      commentcontent:"",
      name:"",     
    }
  },


  created() {

    console.log(this.$route.query.id)
    axios
      .get('http://localhost:3000/posts/' + this.$route.query.id )
      .then((response) => {
        console.log( response.data)
        this.post = response.data;
      });

      axios
      .get('http://localhost:3000/comments',{
        headers: {
          "Content-Type": "application/json"
        },
        params: {
          id : this.$route.query.id
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
      {comment: this.commentcontent,
      post_id: this.$route.query.id }, 
      )
      .then(function (response) {
    console.log(response.id);
  })
  } 
},
deletepost() {
       axios
       .delete(`http://localhost:3000/posts/` + this.$route.query.id)
           .then(function (response) {
                    console.log(response);
                })
    }

}  
</script>
<style>
.soucomment{
  height:20px
}

input{
  height:50px;
  width : 500px;
}
.home{
  height:500px;
  width:1000px;
  background:yellow;
  margin-left:200px;
  opacity:50%;
}
.post{
  color:green;
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