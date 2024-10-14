<template>
  <div class="div-box">
    <button @click="greet">Greet</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const name = ref('Vue.js')

function greet(event: Event) {
  alert(`Hello ${name.value}!`)

  if (event) {
    const target = event.target as HTMLElement
    alert(target?.tagName)
  }
}
</script>
