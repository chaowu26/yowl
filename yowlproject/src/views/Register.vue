<template>
  <form @submit.prevent="handleSubmit()">
     
    <div class="form-group">
      <input type="text" class="form-control" v-model="first_name" placeholder="FIRST NAME" />
    </div>

    <div class="form-group">
      <input type="text" class="form-control" v-model="last_name" placeholder="LAST NAME" />
    </div>

    <div class="form-group">
      <input type="email" class="form-control" v-model="email" placeholder="EMAIL" />
    </div>

     <div class="form-group">
      <input type="text" class="form-control" v-model="age" placeholder="EMAIL" />
    </div>

      <div class="form-group">
      <input type="text" class="form-control" v-model="age" placeholder="EMAIL" />
    </div>

    <div class="form-group">
      <input type="password" class="form-control" v-model="password" placeholder="PASSWORD" />
    </div>

    <div class="form-group">
      <input type="password" class="form-control" v-model="password_confirm" placeholder="CONFIRM PASSWORD" />
    </div>
    <br />
    <button class="btn btn-primary btn-block">READY TO REGISTER</button>
  </form>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirm: "",
    }
  },
  methods: {
    handleSubmit() {
      const data = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        password_confirm: this.password_confirm,
      };
      console.log(data);
    },
  },
};
</script>

<style scoped>

form {
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
  width: 500px;
  height: 300px;
  border-radius: 10px;
  margin-top: 100px;
}

body {
  background-image: url("../../public/assets/fond.jpeg");
  background-position: center center;
}

h3 {
  font-size: 30px;
}

::placeholder {
  color: white;
}
input {
  color: white;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
  font-size: 30px;
  background-color: black;
  border: 2px solid white;
  border-radius: 5px;
}

label {
  margin-top: 10px;
  margin-bottom: 5px;
}
button {
  color: white;
  font-size: 20px;
  width: 250px;
  height: 50px;
  border-radius: 5px;
  border: solid 2px white;
  margin-top: 5px;
  background-color: black;
  border: 1px solid #fffbfb;
  box-shadow: inset 10px 4px 4px rgba(0, 0, 0, 0.25);
}
button:hover {
  background-color: lightcyan;
  color: black;
}
</style>