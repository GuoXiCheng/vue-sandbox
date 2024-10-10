<template>
  <div class="div-box">
    <button @click="todoId++">Fetch Todo</button>
    <p v-if="data">{{ data }}</p>
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue'
const todoId = ref(1)
const data = ref(null)

// #region snippet
watch(
  todoId,
  async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
    data.value = await response.json()
  },
  { immediate: true }
)
// #endregion snippet
</script>
