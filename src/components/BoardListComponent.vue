<script setup>
import TaskComponent from '@/components/TaskComponent.vue';
import { getBoards, removeBoard } from '@/hooks/board-hook';
import { defineProps , defineEmits} from 'vue';
import router from '@/router';
defineProps(['board'])
const emit = defineEmits(['reload']);
function updateBoard(id){
  router.push({
    name: 'update-board',
    params: {
      id: id
    },
  });
}
function viewBoard(id){
  router.push({
    name: 'view-board',
    params: {
      id: id
    },
  });
}
function addTask(boardId){
  router.push({
    name: 'create-task',
    params: {
      id: boardId,
    }
  })
}



</script>

<template>
  <div class="col g-3">
  <div class="card">
    <div class="card-header"> 
      
      <button type="button" @click="viewBoard(board.id);$emit('reload');" class="btn btn-outline-success m-1">View</button>
      <button type="button" @click="updateBoard(board.id)" class="btn btn-outline-primary m-1">Edit</button>
      <button type="button" @click="removeBoard(board.id);$emit('reload');" class="btn btn-outline-danger m-1">Delete</button>
      <button type="button" @click="addTask(board.id);$emit('reload');" class="btn btn-outline-warning m-1">Add Task</button>
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

