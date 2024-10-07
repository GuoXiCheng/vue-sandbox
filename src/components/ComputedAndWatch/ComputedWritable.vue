<template>
  <div class="div-box">
    <input type="text" v-model="fullName" />
    <p>First name: {{ firstName }}</p>
    <p>Last name: {{ lastName }}</p>
    <p>Full name: {{ fullName }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    // 注意：这里使用的是解构赋值语法
    ;[firstName.value, lastName.value] = newValue.split(' ')
  }
})
</script>
