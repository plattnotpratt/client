<script setup>
  import { getAuthToken, removeAuthToken } from '@/hooks/auth-hook';
</script>

<template>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Task Manager</a>
      <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <div v-if='!getAuthToken()'>
          <RouterLink  to='/login' class="btn btn-primary">
            Login
          </RouterLink>
        </div>
        <div v-if='getAuthToken()'>
          <button @click="removeAuthToken()" class="btn btn-primary">
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
