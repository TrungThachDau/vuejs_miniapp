<script lang="ts" setup>
import { watch} from "vue";

import {UserService} from "../services/UserService.ts";

const { result} = UserService.getAllUser();

 // const users = computed(() => result.value?.users ?? []);
  watch(result, (newResult) => {
    console.log(newResult.value?.users);
  });

</script>

<template>
  <div class="container">
    <table class="table table-striped">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Username</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in result.users" :key="user.id">
        <th scope="row">{{ user.id }}</th>
        <td>{{user.username}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
</style>