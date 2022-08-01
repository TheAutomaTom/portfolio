<template>
  <a :href="props.url"
    ><h3 class="mx-2">
      <i class="pi px-1" :class="icon"></i>{{ props.label }}
    </h3></a
  >
</template>

<script setup lang="ts">
const props = defineProps({ url: String, icon: String, label: String });
</script>
<style scoped lang="scss"></style>
