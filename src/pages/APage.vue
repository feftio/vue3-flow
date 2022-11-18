<template>
  <div>APage</div>
  <button @click="props.action('finish')">
    Button
  </button>
</template>

<script setup>
const props = defineProps({
  action: {
    type: Function,
    required: true
  }
})
</script>
