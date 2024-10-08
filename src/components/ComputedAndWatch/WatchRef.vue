<template>
  <div class="div-box">
    <input type="number" v-model="xRef" />
    <p>X Msg: {{ xMsg }}</p>
    <p>Y=2X Msg: {{ yMsg }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
const xRef = ref(0)
const xMsg = ref('X is not changed')
const yMsg = ref('Y is not changed')

watch(xRef, (newX, oldX) => {
  xMsg.value = `X changed from ${oldX} to ${newX}`
})

const y = computed(() => xRef.value * 2)
watch(y, (newY, oldY) => {
  yMsg.value = `Y changed from ${oldY} to ${newY}`
})
</script>
