<script setup>
import TaskComponent from '@/components/TaskComponent.vue';
import { removeBoard } from '@/hooks/board-hook';
import { defineProps } from 'vue';
import router from '@/router';
defineProps(['board'])
function updateBoard(id){
  router.push({
    name: 'update-board',
    params: {
      id: id
    },
  });
}



</script>

<template>
  <div class="col g-3">
  <div class="card">
    <div class="card-header"> 
      <button type="button" @click="updateBoard(board.id)" class="btn btn-outline-primary float-start">Edit</button>
      <button type="button" @click="$emit('removeBoard', board.id)" class="btn btn-outline-danger float-end">Delete</button>
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ board.title }}</h5>
      <p class="card-text">{{ board.description}}</p>
    </div>
    <ul class="list-group list-group-flush text-left">
      <TaskComponent :task="task" v-for="task in board.tasks" :key="task.id"></TaskComponent>
    </ul>
  </div>
</div>
</template>

