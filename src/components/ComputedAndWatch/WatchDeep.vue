<template>
  <div class="div-box">
    <button @click="changeObj">changeObj</button>
    <button @click="replaceObj">replaceObj</button>
    <p>{{ isEqual }}</p>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch, ref } from 'vue'
const isEqual = ref()
const obj = reactive({
  count: 0,
  someObj: {
    a: 1
  }
})

// 隐式深层监听：嵌套属性变更时触发
watch(obj, (newObj, oldObj) => {
  // 此处的 newObj 和 oldObj 是同一个对象
})

// 返回不同对象时触发
watch(
  () => obj.someObj,
  (newObj, oldObj) => {
    // 仅当 obj.someObj 被替换时触发
  }
)

const changeObj = () => obj.someObj.a++

const replaceObj = () => {
  obj.someObj = { a: obj.someObj.a + 1 }
}

// 强制深层监听
watch(
  () => obj.someObj,
  (newObj, oldObj) => {
    // 除非 obj.someObj 被整个替换: obj.someObj = { a: 2 }
    // 否则此处的 newObj 和 oldObj 是同一个对象: obj.someObj.a++
    isEqual.value = newObj === oldObj
  },
  { deep: true }
)
</script>
