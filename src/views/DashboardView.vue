<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div>
  <div class="row m-5">
    <h1>Dashboard</h1>
  </div>

  <div class="row">
    <BoardComponent v-for="board in boards" :key="board.id">{{ board }}</BoardComponent>

  </div>
</div>
</template>

<script setup>
  import router from '@/router';
  import BoardComponent from '@/components/BoardComponent.vue';
  import { ref } from 'vue';

  const API_URL = 'http://localhost:4242/api/v1/boards/'
  const boards = ref([]);
  async function getBoards() {
    const response = await fetch(API_URL, {
      headers:{
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.token}`,
      },
    });
    const boards = await response.json();
    console.log(boards);
    return boards;
  }

  boards.value = await getBoards();
  console.log(boards.value);
</script>
