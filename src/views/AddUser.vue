<script setup lang="ts">
import {reactive, ref} from "vue";
import User from "../models/User.ts";

import {UserService} from "../services/UserService.ts";

const user = reactive(new User("", "", 0));
let retypePassword = ref("");
const {addUser} = UserService.addUser(user);
const onSubmit = () => {
  if(user.username === "" || user.password === "" || retypePassword.value === "")
  {
    alert("Please type username and password.");
  }
  else if(user.password !== retypePassword.value)
  {
    alert("Password and retype password must be the same.");
  }
  else
  {
    try{
      addUser().then(() => {
        alert("User added successfully.");
      });
    }
    catch (e) {
      alert("Failed to add user.");
      console.log(e);
    }
  }
};

</script>

<template>
  <div class="container">
    <div class="custom-form">
    <h5>Add User</h5>
    <form @submit.prevent="onSubmit" @keyup.enter="onSubmit">
    <div class="mb-3">
      <label class="form-label">Username</label>
      <input type="text" class="form-control" v-model="user.username">
    </div>
    <div class="mb-3">
      <label class="form-label">Password</label>
      <input type="password" class="form-control" v-model="user.password">
    </div>
    <div class="mb-3">
      <label class="form-label">Retype Password</label>
      <input type="password" class="form-control" v-model="retypePassword">
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  </div>
  </div>

</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.custom-form {
  width: 500px;
  margin: auto;
}
</style>