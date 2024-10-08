<template>
  <div class="div-box">
    <p>
      Ask a yes/no question:
      <input v-model="question" :disabled="loading" />
    </p>
    <p>{{ answer }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const loading = ref(false)

watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.includes('?')) {
    loading.value = true
    answer.value = 'Thinking...'
    try {
      const res = await fetch(`https://yesno.wtf/api`)
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error fetching data. Please try again later.'
    } finally {
      loading.value = false
    }
  }
})
</script>
