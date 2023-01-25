<script setup>
  import router from '@/router';
  import BoardComponent from '@/components/BoardComponent.vue';
  import { getBoards, removeBoard } from '@/hooks/board-hook';
  import { ref } from 'vue';
  
  const boards = ref([]);
  boards.value = await getBoards();
</script>
<template>
  <div>
  <div class="row m-5">
    <h1>Dashboard</h1>
  </div>

  <div class="row">
    <router-link to="/create-board" type="button" class="btn btn-success">Create Board</router-link>
  </div>
  <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1">

    <BoardComponent 
    @remove-board="removeBoard" 
    v-for="board in boards" 
    :key="board.id" 
    :board="board" >
    </BoardComponent>

  </div>
</div>
</template>


