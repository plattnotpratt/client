<script setup>
import { defineProps, ref } from 'vue';
  const props = defineProps(['board']);
  const board = ref({
    title: props.board.title,
    description: props.board.description
  })
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <form @submit.prevent="$emit('submitForm', board)">
        <div class="form-outline mb-4">
          <input v-model="board.title" type="text" id="title" name="title" class="form-control" />
          <label class="form-label" for="title">Board Title</label>
        </div>
        <div class="form-outline mb-4">
          <textarea v-model="board.description" type="text" id="description" name="description" class="form-control"></textarea>
          <label class="form-label" for="description">Board Description</label>
        </div>
        <!-- Submit button -->
        <button  type="submit" @click="submit" class="btn btn-primary btn-block mb-4">
          <slot name="submit-button" />
        </button>
        <input type="hidden" @keyup.enter="submit" >
      </form>
    </div>
  </div>
</template>
