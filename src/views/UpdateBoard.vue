<script setup>
  import BoardForm from '@/components/BoardForm.vue';
  import { ref} from 'vue';
  import { createBoard, getBoard } from '@/hooks/board-hook';
import { useRoute } from 'vue-router';
  const router = useRoute();
  const id = router.params.id;
  const currentBoard = await getBoard( id );
  console.log(currentBoard);
  const board = ref({
    title: currentBoard.title,
    description: currentBoard.description,
  });
  
</script>

<!-- eslint-disable vuejs-accessibility/label-has-for -->
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