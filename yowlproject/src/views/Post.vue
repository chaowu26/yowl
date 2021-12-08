<template>
  <h1>Create A Post</h1>
  <div class="home">
    <ul>   
            <li>Post</li>
            <li>Image/Video</li>
            <li>Link</li>
    </ul>
     <input v-model='posttitle' placeholder = "Title...">
     <input v-model='postcontent' placeholder = "Content(Optional)...">
     
      <div >
       <button type="button">
                Save As Draft
            </button>
            <router-link to="Main">
            <button @click="addcomments()" type="button">
                Post
            </button>
            </router-link>
  </div>
  </div>
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
      posttitle:"",
      postcontent:"",      
    }
  },
methods: {
     addcomments(){ 
      axios
      .post('http://localhost:3000/Posts',
      {title: this.posttitle,
      content:this.postcontent})
      .then(function (response) {
    console.log(response.id);
  })
      } 
},
}
</script>
<style>
h1{
    color:red;
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
  color:red;
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
  display:inline-block;
  width: 15%;

  justify-content: space-between;
  font-size:15px;
  margin-top:20px;
  
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