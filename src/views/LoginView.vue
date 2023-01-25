<script setup>
import { storeAuthToken } from '@/hooks/auth-hook';
import router from '@/router';
import { ref } from 'vue';
const email = ref('');
const password = ref('');
const API_URL = 'http://localhost:4242/auth/login'


async function loginUser() {
  const response = await fetch(API_URL, {
    method: "POST",
    headers:{
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  });
  const json = await response.json();
  storeAuthToken(json.token);
  router.push({name: 'dashboard'});
}
</script>

<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="row m-5">
    <h1>Login</h1>
  </div>
  <div class="row">
    <form @submit.prevent="loginUser">
      <!-- Email input -->
      <div class="form-outline mb-4">
        <input v-model="email" type="email" id="email" name="email" class="form-control" />
      <label class="form-label" for="form2Emaple1">Email address</label>
    </div>

    <!-- Password input -->
    <div class="form-outline mb-4">
      <input v-model="password" type="password" id="password" name="password" class="form-control" />
      <label class="form-label" for="password">Password</label>
    </div>

    <!-- 2 column grid layout for inline styling -->
    <div class="row mb-4">
      <div class="col d-flex justify-content-center">
        <!-- Checkbox -->
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
          <label class="form-check-label" for="form2Example31"> Remember me </label>
        </div>
      </div>

      <div class="col">
        <!-- Simple link -->
        <a href="#!">Forgot password?</a>
      </div>
    </div>

    <!-- Submit button -->
    <button  type="submit" class="btn btn-primary btn-block mb-4">Login</button>

  </form>
</div>
</template>

