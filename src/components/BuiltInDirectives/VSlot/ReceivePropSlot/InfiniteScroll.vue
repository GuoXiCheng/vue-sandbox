<template>
    <div>
        <template v-for="item in items" :key="item.id">
            <slot name="item" :item="item"></slot>
        </template>
    </div>
    <button @click="handleScroll">Load more</button>
</template>

<script>
export default {
    name: 'InfiniteScroll',
    props: ['items'],
    emits: ['loadMore'],
    methods: {
        handleScroll(event) {
            this.$emit('load-more');
        }
    }
}
</script>