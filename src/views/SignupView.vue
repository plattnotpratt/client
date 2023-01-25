<script setup>
  import { storeAuthToken } from '@/hooks/auth-hook';
  import router from '@/router';
  import { ref } from 'vue';
  const email = ref('');
  const password = ref('');
  const lname = ref('');
  const fname = ref('');
  const API_URL = 'http://localhost:4242/auth/signup'


  async function signupUser() {
    const response = await fetch(API_URL, {
      method: "POST",
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        email: email.value,
        password: password.value,
        fname: fname.value,
        lname: lname.value,
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
    <h1>Signup</h1>
  </div>
  <div class="row justify-content-center">
    <div class="col-8">
      <form @submit.prevent="signupUser">
        <div class="form-outline mb-4">
          <input v-model="fname" type="text" id="fname" name="fname" class="form-control" />
          <label class="form-label" for="fname">First Name</label>
        </div>
        <div class="form-outline mb-4">
          <input v-model="lname" type="text" id="lname" name="lname" class="form-control" />
          <label class="form-label" for="lname">Last Name</label>
        </div>
        <div class="form-outline mb-4">
          <input v-model="email" type="email" id="email" name="email" class="form-control" />
          <label class="form-label" for="form2Emaple1">Email address</label>
        </div>
        <div class="form-outline mb-4">
          <input v-model="password" type="password" id="password" name="password" class="form-control" />
          <label class="form-label" for="password">Password</label>
        </div>

      <!-- Submit button -->
      <button  type="submit" @keyup.enter="submit" class="btn btn-primary btn-block mb-4">Signup</button>
    </form>
  </div>
</div>
</template>


