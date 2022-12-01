<!-- eslint-disable import/first -->
<template>
  <component
    :is="current.component"
    v-if="current.show"
    v-bind="current.props"
    v-on="current.events"
  />
</template>
<script setup>
import { reactive, ref, computed, useAttrs } from 'vue'
import { next, addPage, addFlow, modify } from '../context'

const props = defineProps({
  flow: {
    type: Function,
    required: true
  },
  hooks: {
    type: Object,
    default () {
      return {}
    }
  }
})

const nodes = reactive({})

const node = ref(null)

const context = {
  nodes,
  current: () => node.value,
  next: (name) => next(nodes, node, name),
  addPage: (name, object) => addPage(nodes, name, object),
  addFlow: (name, object) => addFlow(nodes, name, object),
  modify: (name, callback) => modify(nodes, name, callback),
  store: reactive({}),
  props: useAttrs()
}

if ('__before__' in props.hooks) props.hooks.__before__(context)

props.flow(context)

if ('__after__' in props.hooks) props.hooks.__after__(context)

node.value = Object.keys(nodes)[0]

const current = computed(() => nodes[node.value])
</script>

<script>
export default {
  inheritAttrs: false
}
</script>
