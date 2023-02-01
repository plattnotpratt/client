<script  setup>
import { ref } from 'vue';
import { getBoard } from '@/hooks/board-hook';
import { useRoute } from 'vue-router';
import TaskComponent from '@/components/TaskComponent.vue';
  const router = useRoute();
  const boardId = router.params.id;
  const board = ref({});
  board.value = await getBoard( boardId );
  
</script>

<template>
  <div>{{ board.title }}</div>
  <div>{{ board.description }}</div>
  <TaskComponent :task="task" v-for="task in board.tasks" :key="task.id"></TaskComponent>
  <!-- <div @click="task.completed = !task.completed" class='task-wrapper'>
      <div :class="task.completed ? 'completed' : ''  ">{{ task.title }}</div>
      <div>{{ task.description }}</div>
      <div v-if="task.dueAt">{{ task.dueAt }}</div>
  
    </div> -->
</template>

<style scoped>
.completed{
  text-decoration: line-through;
}
</style>
