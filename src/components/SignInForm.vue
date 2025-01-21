<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { UserService } from "../services/UserService.ts";
import User from "../models/User.ts";

const credentials = reactive(new User("","","",""));
const { result } = UserService.login(credentials);

const router = useRouter();

const login = () => {
  if (credentials.username === "" || credentials.password === "") {
    alert("Please type username and password.");
  } else {
    try{
      if(result.value?.login.username === credentials.username && result.value?.login.password === credentials.password)
      {
        router.push("/users");
      }
    }
    catch (e) {
      alert("Invalid username or password.");
      console.log(e);
    }
  }
};
</script>

<template>
  <div>
    <p>Login page</p>

    <form @submit.prevent="login">
      <label>Username</label><br />
      <input type="text" v-model="credentials.username" />
      <br />
      <label>Password</label><br />
      <input type="password" v-model="credentials.password" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped>
.custom-form {
  width: 400px;
  margin: auto;
}
</style>
