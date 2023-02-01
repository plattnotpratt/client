<script setup>
  import { ref } from 'vue';
  import BoardForm from '@/components/BoardForm.vue';
  import { updateBoard, getBoard } from '@/hooks/board-hook';
  import { useRoute } from 'vue-router';
  const router = useRoute();
  const id = router.params.id;
  const currentBoard = await getBoard( id );
  const board = ref({
    id: id,
    title: currentBoard.title,
    description: currentBoard.description,
  });
  
</script>

<template>
  <div class="row m-5">
    <h1>Update Board</h1>
  </div>
  <BoardForm
  @submit-form="updateBoard" 
  :board="board"
  >
  <template #submit-button>
    Update
  </template>
  </BoardForm>
</template>