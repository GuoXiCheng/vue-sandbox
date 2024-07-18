<template>
    <div class="div-box">
        <!-- 内联字面量 -->
        <div :class="{ active: isActive }">Class Bind Obj Active</div>
        <!-- 内联对象 -->
        <div class="static" :class="classObj">Class Bind Obj Not Active</div>
    </div>
</template>

<script setup lang="ts">

const isActive = true;

const classObj = {
    active: !isActive,
    "text-danger": isActive
}

</script>

<style scoped>
.active {
    color: red;
}

.static {
    font-size: 20px;
    font-weight: bold;
}

.text-danger {
    background-color: yellow;
}
</style>