<template>
    <div class="containeur">
        <div class="p1">
<a href="#">Posts </a> |
<a href="#">Comments </a> |
<a href="#">Saved </a> |
<a href="#">Liked </a> |
<a href="#">Shared </a> |
<a href="#">Follower </a> |

<br>
<br>
<hr>
<br>
<hr>
<br>
<hr>
<br>
<hr>
<br>
<hr>
<br>
<hr>
        </div>

        <div class="p2">
            <img src="../../public/assets/avatar.png">
            <br>
            <div class="vertical-center">
                <br>
            <button>Change profile photo</button></div>
<br>
            <h5>USER_NAME</h5>
            <br>
            21/03/1992
 <div class="vertical-center">
                <br>
            <router-link class="monlien" to="/post"><button>New post</button></router-link></div>
        </div>


    </div>
</template>

<style scoped>

.containeur {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
}
.p1 a {
    text-decoration: none;
    color: white;
}
.p1 {
    text-decoration: none;
    font-size: 35px;
    flex-basis: 65%;
    margin-right: 10px;
    width: 1222px;
    height: 600px;
    background-color: #E3DCC2;
}

.p2 {
    width: 761px;
    height: 484px;
    flex-basis: 35%;
    background-color: #beb79c;
}
img {
    width: 150px;
}

button {
    font-size: 15px;
}
.vertical-center {
  margin: 0 auto;
}
h5 {
    font-size: 35px;
    font-weight: bold;
}
</style>