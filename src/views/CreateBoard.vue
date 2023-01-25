<script setup>
  import BoardForm from '@/components/BoardForm.vue';
  import { ref } from 'vue';
  import { createBoard } from '@/hooks/board-hook';
  const board = ref({
    title: "",
    description: "",
  });
  
</script>

<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="row m-5">
    <h1>Create Board</h1>
  </div>
  <BoardForm
  @submit-form="createBoard" 
  :board="board"
  >
  <template #submit-button>
    Create
  </template>
  </BoardForm>
</template>