<template>
    <div class="div-box">
        <!--  v-if in template  -->
        <template v-if="ok">
            <h1>Title</h1>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
        </template>
    </div>
</template>

<script setup lang="ts">
const ok = true;
</script>