<template>
  <div>APage</div>
  <button @click="props.action('finish')">
    Button
  </button>
  <button @click="emit('action')">
    EmitButton
  </button>
</template>

<script setup>
const props = defineProps({
  action: {
    type: Function,
    required: true
  }
})

const emit = defineEmits(['action'])
</script>
