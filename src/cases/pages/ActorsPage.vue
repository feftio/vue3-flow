<template>
  <ul>
    <li
      v-for="actor in actors"
      :key="actor.id"
      style="cursor: pointer"
      @click="$emit('tap', actor)"
    >
      {{ actor.name }}
    </li>
  </ul>
</template>
<script setup>
import { ref } from 'vue'
const actors = ref([
  {
    id: 0,
    name: 'Robert De Niro',
    films: ['Analyze That', 'Red Lights', 'Joker']
  },
  {
    id: 1,
    name: 'Jack Nicholson',
    films: ['Heartburn', 'The Two Jakes', 'Blood and Wine']
  },
  {
    id: 2,
    name: 'Tom Hanks',
    films: ['Forrest Gump', 'That Thing You Do!', 'The Green Mile']
  }
])
</script>
