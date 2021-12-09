<template>


  <nav>

    <router-link class="logo" to="/"><span id="logo">Land</span></router-link>
    
      <router-link class="maison" to="/main">HOME</router-link>
    <router-link class="connexion" to="/connexion">CONNEXION</router-link>
   
  </nav>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}

</script>

<style>
img {
  margin-left: 15px;
  margin-top: 15px;
  width: 30px;
}

* {
  box-sizing: border-box;
}
.logo {
  float: left;
}
.search-txt::placeholder {
  color: black;
  margin-left: 10px;
}
body {
  background-image: url("../public/assets/fond.jpeg");
  min-height: 100vh;
  display: flex;
  font-weight: 400;
  font-family: 'Fira Sans', sans-serif;
}

h1, h2, h3, h4, h5, h6, label, span {
  font-weight: 500;
  font-family: 'Fira Sans', sans-serif;
}
.maison {
  font-size: 30px;
  text-decoration: none;
  color: white;
  font-family: Rock Salt;
  float: center;
}
.connexion {
  text-decoration: none;
  color: white;
  float: right;
  margin-top: 30px;
  margin-right: 20px;
  font-family: Rock Salt;
}

body, html, #app, #root, .auth-wrapper {
  width: 100%;
  height: 100%;
}
.search-txt {
  margin-top: 20px;
  margin-left: -300px;
  height: 40px;
  width: 700px;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  border-radius: 10px;
}

.search-btn {
  vertical-align: middle;
  font-size: 30px;
  color: white;
  margin-left: 5px;
}

#app {
  text-align: center;
}

nav {
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  text-decoration: none;
  height: 50px;
  text-align: center;
  vertical-align: middle;
}
router-link {
  text-decoration: none;
  font-size: 30px;
}

.auth-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
}

.auth-inner {
  width: 450px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all .3s;
}

.auth-wrapper .form-control:focus {
  border-color: #167bff;
  box-shadow: none;
}

.auth-wrapper h3 {
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}

.custom-control-label {
  font-weight: 400;
}

.forgot-password,
.forgot-password a {
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7f7d7d;
  margin: 0;
}

.forgot-password a {
  color: #167bff;
}

#logo {

font-family: Rock Salt;
font-style: Regular;
font-size: 36px;
line-height: 86px;
line-height: 100%;
text-align: Center;
Vertical-align: Top;
width: 134px;
height: 40px;
top: -40px;
left: 36px;
text-decoration: none;
color: white;

}

#logo:hover {
  color: #167bff;
}
.logo {
  text-decoration: none;
  margin-top: 20px;
  margin-left: 20px;
}

body {
  font-family: 'montserrat', sans-serif;
}
header {
  width: 100vw;
  background-color: #222;
  padding: 15px;
}
</style>
