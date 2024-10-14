<template>
  <div class="div-box">
    <button @click="say('hello')">Say hello</button>
    <button @click="say('bye')">Say bye</button>
  </div>
</template>

<script setup lang="ts">
function say(message: string) {
  alert(message)
}
</script>
