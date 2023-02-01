<script setup>
import { getTasksFromBoard } from '@/hooks/task-hook';
import { defineProps, ref } from 'vue';
  const props = defineProps(['task', 'boardId']);
  const task = ref(props.task);
  const boardId = ref(props.boardId);
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <form @submit.prevent="$emit('submitForm', task, boardId)">

        <div class="form-outline mb-4">
          <input v-model="task.title" type="text" id="title" name="title" class="form-control" />
          <label class="form-label" for="title">Task Title</label>
        </div>
        <div class="form-outline mb-4">
          <textarea v-model="task.description" type="text" id="description" name="description" class="form-control"></textarea>
          <label class="form-label" for="description">Task Description</label>
        </div>
        <div class="form-outline mb-4">
          <input v-model="task.dueAt" type="date" id="due-at" name="due-at" class="form-control">
          <label class="form-label" for="due-at">Task Due At</label>
        </div>

        <!-- Submit button -->
        <button  type="submit" class="btn btn-primary btn-block mb-4">
          <slot name="submit-button" />
        </button>
        <!-- <input type="hidden" @keyup.enter="submit" > -->
      </form>
    </div>
  </div>
</template>
