<template>

<br>
 <input class="search-txt" placeholder="Search" v-model="search">
 <div class="creer">
        <router-link class="monlien" to="/post">CREATE POST...</router-link>
    </div>

      <div class="barre">
        <div id="non">Best</div>
        <div class="tests">Hot</div>
        <div class="tests">New</div>
        <div class="tests">
            <i class="fas fa-ellipsis-h"></i>
        </div>
    </div>
<div class="container">

    <ul class="post" v-for="post in filteredPosts" v-bind:key="post.id">  
      
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
            commentcontent: "",
            search: ""
        }
    },
    computed: {
        filteredPosts() {
            return this.posts.filter(post =>
                post.title.toLowerCase().includes(this.search.toLowerCase()))
        }
    },
    created() {
        axios
            .get('http://localhost:3000/postbyid', {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then((response) => {
                console.log(response.data)
                this.posts = response.data;
            });
        axios
            .get('http://localhost:3000/comments', {
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
        addcomments() {
            axios
                .post('http://localhost:3000/comments',
                    { comment: this.commentcontent })
                .then(function (response) {
                    console.log(response);
                })
        }
    },


}
</script>


<style scoped>

.search-txt {
  margin-top: 20px;
  margin-left: 50px;
  height: 40px;
  width: 650px;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  border-radius: 10px;
}
#non {
    display: inline;
}
.tests {
    display: inline;
    margin-left: 10px;
}
hr {
    color: white;
}
.monlien {
    text-decoration: none;
    color: white;
}
h1 {
    font-size: 20px;
}
.creer {
    width: 650px;
    background: rgba(255, 255, 255, 0.5);
    margin-left: 410px;
    height: 30px;
    padding: 5px;
    text-align: left;
    margin-top: 50px;
}
.barre {
    width: 650px;
    background: rgba(255, 255, 255, 0.5);
    margin-left: 410px;
    margin-top: 0px;
    margin-bottom: 0px;
    height: 30px;
    padding: 5px;
    text-align: left;
    margin-top: 20px;
    margin-bottom: 50px;
}
#oui {
    width: 200px;
    height: 50px;
    vertical-align: middle;
    background-color: white;
    border: none;
}

#oui:hover {
    background-color: tomato;
}

.post {
    width: 00px;
    height: 650px;
    background: rgba(255, 255, 255, 0.5);
    flex-basis: 50%;
    display: inline;
}
#newtopic {
    margin-right: 60px;
    padding: 5px;
}
h5 {
    font-size: 30px;
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


.content {
    font: italic 1.2em "Fira Sans", serif;
    color: white;
    text-align: center;
}

.container {
    margin-left: 400px;
    width: 100%;
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
    font-size: 10px;
    line-height: 28px;
    text-align: center;
    color: #979595;
    margin-left: 103px;
}

input {
    height: 50px;
    width: 500px;
}

.post {
    
    height: 500px;
    width: 650px;
   
    margin-left: 100px;
    opacity: 50%;
    display: block;
    margin-left: 200px;
    margin-right: auto;
}

.post1{
    margin-left:100px;
   
}

button {
    position: absolute;
    color: red;
    margin-top: 10px;
}

button:hover {
    background-color: red;
    border: 1px solid #00aced;
}

li {
    display: flex;

    justify-content: space-between;
    font-size: 10px;
}
h2 {
    text-align: left;
    padding-top: 15px;
}
h3 {
    text-align: left;
    padding-top: 15px;
    font-size: 20px;
}

p {

    text-align: right;
    padding-top: 190px;
    color: red;
    font-size: 10px;
    display: inline-block;
    width: 8%;
}

.post {
    background: rgba(255, 255, 255, 0.5);
    margin-left: 0px;
}

h5 {
    font-size: 25px;
}
</style>
