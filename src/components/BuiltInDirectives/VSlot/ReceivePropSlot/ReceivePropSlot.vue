<template>
    <div class="div-box">
        <h1>v-slot 指令: 接收 prop 的具名插槽</h1>
        <InfiniteScroll :items="data" @load-more="fetchMore">
            <template v-slot:item="slotProps">
                <div>
                    {{ slotProps.item.text }}
                </div>
            </template>
        </InfiniteScroll>
    </div>
</template>

<script>
import InfiniteScroll from './InfiniteScroll.vue';

export default {
    name: 'ReceivePropSlot',
    components: {
        InfiniteScroll
    },
    data() {
        return {
            data: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }]
        };
    },
    methods: {
        fetchMore() {
            const moreData = { id: this.data.length + 1, text: `Item ${this.data.length + 1}` };
            this.data.push(moreData);
        }
    }
}
</script>