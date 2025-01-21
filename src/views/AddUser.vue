<script setup lang="ts">
import {reactive} from "vue";
import User from "../models/User.ts";

import {UserService} from "../services/UserService.ts";

const user = reactive(new User(0, "", "", ""));

const {addUser} = UserService.addUser(user);
const onSubmit = () => {
  if(user.username === "" || user.password === "" || user.retypePassword === "")
  {
    alert("Please type username and password.");
  }
  else if(user.password !== user.retypePassword)
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
  <div>
    <p>Add User</p>
    <form @submit.prevent="onSubmit">
      <label>Username</label><br />
      <input type="text" v-model="user.username"/>
      <br />
      <label>Password</label><br />
      <input type="password" v-model="user.password"/>
      <br />
      <label>Retype Password</label><br />
      <input type="password" v-model="user.retypePassword"/>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped>

</style>