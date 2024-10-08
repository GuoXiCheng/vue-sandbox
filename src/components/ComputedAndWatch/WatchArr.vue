<template>
  <div class="div-box">
    <input type="number" v-model="x" />
    <input type="number" v-model="y" />
    <p>{{ msg }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
const x = ref(0)
const y = ref(0)
const msg = ref('X + Y is not changed')

watch([x, () => y.value], ([newX, newY], [oldX, oldY]) => {
  msg.value = `X + Y changed from ${oldX} + ${oldY} to ${newX} + ${newY}`
})
</script>
