<template>
  <h2>
    {{ props.actor.name }}
  </h2>
  <ul>
    <li
      v-for="(film, i) in props.actor.films"
      :key="i"
    >
      {{ film }}
    </li>
  </ul>
  <button @click="emit('back')">
    Back
  </button>
</template>
<script setup>
const props = defineProps({
  actor: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['back'])
</script>
