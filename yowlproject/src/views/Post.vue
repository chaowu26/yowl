<template>

   <h4>CREATE A POST</h4>
    <div class="container">
                <div class="post">
                    <div class="up">
                        <button id="oui"><i class="fas fa-bars"></i>Post</button>
                        <router-link to="postimage">
                        <button id="oui"><i class="fas fa-images"></i>Image & Video</button>
                         </router-link>
                        <button id="oui"><i class="fas fa-link"></i>Link</button>
                    </div>
                    <hr>
                    <div class="titre">
                       <input v-model='posttitle' placeholder = "Title...">
                    </div>
     <textarea v-model='postcontent' placeholder = "Content(Optional)..."></textarea>       
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
        <div class="tt">
            <div class="content">
                <h5>TOP TOPICS</h5>
                <br>
                <h3>1.</h3>
                <hr>
                <br>
                <h3>2.</h3><hr><br>
                <h3>3.</h3><hr><br>
                <h3>4.</h3><hr><br>
                <h3>5.</h3><hr><br>
                <button id="newtopic">CREATE A NEW TOPIC</button>
            </div>
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
    console.log(response);
  })
      } 
},
}
</script>




<style scoped>
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




hr {
    color: white;
}

h1 {
    font-size: 20px;
}
i {
    margin-right: 5px;
}
h5 {
    font-size: 30px;
}
#oui {
    width: 200px;
    height: 50px;
    vertical-align: middle;
    background-color: white;
    border: none;
}

#oui:hover {
    background-color: rgb(37, 37, 235);;
}

.post {
   width: 775px;
   height: 650px;
   background: rgba(255, 255, 255, 0.5);
   flex-basis: 50%;
}

textarea {
    width: 680px;
    height: 400px;
    border: solid 1px white;
    margin-top: 10px;
    color: white;
    background: none;
    resize: none;
    padding: 5px;
}
textarea::placeholder {
    color: white;
}
input {
    padding: 10px;
    width: 680px;
    vertical-align: middle;
    justify-content: center;
    margin-top: 10px;
}

.titre {
    width: 700px;
    padding: 5px;
    height: 70px;
    opacity: 0.5;
    background-color: white;
    justify-content: center;
    margin: 0 auto;
}

.tt {
    padding: 10px;
    width: 430px;
    height: 600px;
    border: 1px solid #000000;
    flex-basis: 25%;
    background: rgba(227, 220, 194, 0.5);
   
}
.content {
    font: italic 1.2em "Fira Sans", serif;
    color: white;
    text-align: center;
}

.container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.up {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 696px;
    height: 64px;
    text-align: center;
    align-items: center;
    margin-top: 20px;
}

button {
    float: right;
    margin-right: 10px;
    font-size: 15px;
    background: rgba(227, 220, 194, 0.5);
    padding: 3px;
    border: none;
}

button:hover {
    background-color: rgb(47, 47, 228);
}

h4 {
    width: 200px;
    height: 28px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #979595;
    margin-left: 103px;
    margin-top: 100px;
}
#newtopic{
    margin-right: 60px;
    padding: 5px;
}


</style>