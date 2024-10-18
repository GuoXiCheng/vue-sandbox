<template>
  <div class="div-box">
    <h1>Basic Store</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const count = computed(() => store.state.count)

const increment = () => store.commit('increment')
const decrement = () => store.commit('decrement')
</script>
