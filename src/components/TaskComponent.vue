<script setup>
import { ref, defineProps } from 'vue';
import { toggleCompletedTask } from '@/hooks/task-hook';
const props = defineProps(['task']);
const task = ref(props.task);



</script>

<template>
  <li @click="toggleCompletedTask(task.id)" class="list-group-item" :class="task.completed ? 'completed': ''">
    {{ task.title }}:{{ task.description }}
  </li>
</template>
<style scoped>
.completed{
  text-decoration: line-through;
}
</style>
