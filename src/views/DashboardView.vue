<script setup>
  import router from '@/router';
  import BoardListComponent from '@/components/BoardListComponent.vue';
  import { getBoards, removeBoard } from '@/hooks/board-hook';
  import { ref, defineEmits} from 'vue';

  const boards = ref([]);
  boards.value = await getBoards();

  async function reloadBoards(){
    boards.value = await getBoards();
  }
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

    <BoardListComponent 
    @remove-board="removeBoard"
    @reload="reloadBoards"
    v-for="board in boards" 
    :key="board.id" 
    :board="board" >
    </BoardListComponent>

  </div>
</div>
</template>


