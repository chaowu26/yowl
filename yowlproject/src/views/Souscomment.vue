<template>
<div class=post>
    <h3>{{comment["name"]}}.Posted at {{comment["created_time"]}}</h3>
          <li>{{comment["comment"]}}</li>
             <p>Comments</p>
          <p>Like</p>
          <p>Share</p>
          <p>Save</p>
          <p>...</p>
          <li>Comment as {{post["name"]}} </li>
     <input v-model='commenton' placeholder = "your thought...">
         <button @click="addsouscomments()" type="button">
                Comment
            </button>
            <ul class="post" v-for="comment in comments" v-bind:key="comment.id">   
            <li>{{comment.name}}</li>
            <li>Comment at {{comment.created_time}}</li>
            <li>{{comment.comment}}</li>
            
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
      comment: [
      ],
      commentcontent:"",
      name:"",     
    }
  },
  created() {
    axios
      .get('http://localhost:3000/comments/' + this.$route.query.id)
      .then((response) => {
        console.log( response.data)
        this.comment = response.data;
      }),
      
  axios
      .get('http://localhost:3000/souscomment',{
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
     addsouscomments(){     
      axios
      .post('http://localhost:3000/commentoncomment',
      {comment: this.commenton,
      parent_id: this.$route.query.id }, 
      )
      .then(function (response) {
    console.log(response.id);
  })
  } 
},
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