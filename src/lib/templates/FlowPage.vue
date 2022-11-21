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
import {
  reactive, ref, computed, useAttrs,
  onBeforeMount, onBeforeUpdate, onBeforeUnmount, onMounted, onUpdated, onUnmounted
} from 'vue'
import { addPage, addFlow, next } from '../context'

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

const callbacks = {
  onBeforeMount: [],
  onBeforeUpdate: [],
  onBeforeUnmount: [],
  onMounted: [],
  onUpdated: [],
  onUnmounted: []
}

const nodes = reactive({})

const node = ref(null)

const context = {
  nodes,
  get: () => node.value,
  next: (name) => next(nodes, node, name),
  addPage: (name, object) => addPage(nodes, name, object),
  addFlow: (name, object) => addFlow(nodes, name, object),
  store: reactive({}),
  props: useAttrs(),
  onBeforeMount: (callback) => {
    callbacks.onBeforeMount.push(callback)
  },
  onBeforeUpdate: (callback) => {
    callbacks.onBeforeUpdate.push(callback)
  },
  onBeforeUnmount: (callback) => {
    callbacks.onBeforeUnmount.push(callback)
  },
  onMounted: (callback) => {
    callbacks.onMounted.push(callback)
  },
  onUpdated: (callback) => {
    callbacks.onUpdated.push(callback)
  },
  onUnmounted: (callback) => {
    callbacks.onUnmounted.push(callback)
  }
}

if ('__before__' in props.hooks) props.hooks.__before__(context)

props.flow(context)

if ('__after__' in props.hooks) props.hooks.__after__(context)

onBeforeMount(async () => {
  callbacks.onBeforeMount.forEach(async (callback) => await callback())
})

onBeforeUpdate(async () => {
  callbacks.onBeforeUpdate.forEach(async (callback) => await callback())
})

onBeforeUnmount(async () => {
  callbacks.onBeforeUnmount.forEach(async (callback) => await callback())
})

onMounted(async () => {
  callbacks.onMounted.forEach(async (callback) => await callback())
})

onUpdated(async () => {
  callbacks.onUpdated.forEach(async (callback) => await callback())
})

onUnmounted(async () => {
  callbacks.onUnmounted.forEach(async (callback) => await callback())
})

node.value = Object.keys(nodes)[0]

const current = computed(() => nodes[node.value])
</script>

<script>
export default {
  inheritAttrs: false
}
</script>
