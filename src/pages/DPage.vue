<template>
  <div>DPage</div>
  <button @click="emit('finish')">
    Button
  </button>
</template>

<script setup>
const emit = defineEmits(['finish'])
</script>
