<template>
  <ComputedBasic />
  <ComputedWritable />
  <WatchBasic />
  <WatchRef />
  <WatchGetter />
  <WatchArr />
  <WatchDeep />
  <WatchEffectWatch />
  <WatchEffect />
</template>

<script setup>
import ComputedBasic from '@/components/ComputedAndWatch/ComputedBasic.vue'
import ComputedWritable from '@/components/ComputedAndWatch/ComputedWritable.vue'
import WatchArr from '@/components/ComputedAndWatch/WatchArr.vue'
import WatchBasic from '@/components/ComputedAndWatch/WatchBasic.vue'
import WatchDeep from '@/components/ComputedAndWatch/WatchDeep.vue'
import WatchEffectWatch from '@/components/ComputedAndWatch/WatchEffectWatch.vue'
import WatchEffect from '@/components/ComputedAndWatch/WatchEffect.vue'
import WatchGetter from '@/components/ComputedAndWatch/WatchGetter.vue'
import WatchRef from '@/components/ComputedAndWatch/WatchRef.vue'
</script>
