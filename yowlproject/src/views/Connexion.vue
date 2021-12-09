<template>
<div class="alors">
<div class="oui">Don't have an account yet?<br>
    <router-link class="lien" to="/register">Register here</router-link>
</div>
<div class="non">Already have an Account?<br>
    <router-link class="lien" to="/login">Login here</router-link>
</div>
</div>
</template>

<script>

export default {
  name: 'App',
  components: {
 
  }
}

</script>

<style scoped>
.alors{
    width: 900px;
    margin: 0 auto;
    margin-top: 250px;
    display: flex;
    column-gap: 20px;
}
.oui {
    background: rgba(227, 220, 194, 0.5);
    font: italic 1.2em "Fira Sans", serif;
    color: white;
    flex-basis: 50%;
    font-size: 30px;
    border-radius: 50px;
    row-gap: 20px;
    padding: 10px;
}
.non {
    background: rgba(227, 220, 194, 0.5);
    font: italic 1.2em "Fira Sans", serif;
    color: white;
    font-size: 30px;
    flex-basis: 50%;
    border-radius: 50px;
    padding: 10px;
    vertical-align: middle;

}
.lien {
    text-decoration: none;
    color: rgb(47, 47, 228);
    font-weight: bold;
}
</style>