<script setup lang="ts">
import {reactive, ref} from "vue";
import { useRouter } from "vue-router";
import { UserService } from "../services/UserService.ts";
import User from "../models/User.ts";

const credentials = reactive(new User("",""));
const { result } = UserService.login(credentials);
const router = useRouter();
const loading =ref(false);
const login = () => {
  if (credentials.username === "" || credentials.password === "") {
    alert("Please type username and password.");
  } else {
    try{
      loading.value = true;
      if(result.value?.login.username === credentials.username && result.value?.login.password === credentials.password)
      {
        router.push("/users");
      }
    }
    catch (e) {
      loading.value = false;
      alert("Invalid username or password.");
      console.log(e);
    }
  }
};
</script>

<template>
  <div class="custom-form" >
  <h4><a>Login</a></h4>
    <form @submit.prevent="login" @keyup.enter="login">
      <div class="mb-3">
        <label  class="form-label">Username</label>
        <input type="text" v-model="credentials.username" class="form-control" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label  class="form-label">Password</label>
        <input type="password" v-model="credentials.password" class="form-control" >
      </div>
      <div v-if="loading">
        Loading...
      </div>
      <button type="submit" class="btn btn-primary" :disabled="loading">Submit</button>
    </form>
  </div>
</template>

<style scoped>
.custom-form {
  width: 500px;
  margin: auto;
}
</style>
