<script setup>
  import { ref } from 'vue';
  import { createTask } from '@/hooks/task-hook';
  import TaskForm from '@/components/TaskForm.vue';
  import { useRoute } from 'vue-router';
  const router = useRoute();
  const task = ref({
    title: "",
    description: "",
    dueAt: null,
  });
  const boardId = router.params.id;
  
</script>

<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="row m-5">
    <h1>Create Task</h1>
  </div>
  <TaskForm
    @submit-form="createTask" 
    :task="task"
    :boardId="boardId"
    >
    <template #submit-button>
      Create
    </template>
  </TaskForm>
</template>