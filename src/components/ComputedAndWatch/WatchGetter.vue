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

watch(
  () => x.value + y.value,
  (newVal, oldVal) => {
    msg.value = `X + Y changed from ${oldVal} to ${newVal}`
  }
)
</script>
