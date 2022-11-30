import { reactive, ref, computed, useAttrs, h } from 'vue'
import { addPage, addFlow, next } from '../context'

export default {
  inheritAttrs: false,
  props: {
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
  },
  setup (props) {
    const nodes = reactive({})

    const node = ref(null)

    const context = {
      nodes,
      get: () => node.value,
      next: (name) => next(nodes, node, name),
      addPage: (name, object) => addPage(nodes, name, object),
      addFlow: (name, object) => addFlow(nodes, name, object),
      store: reactive({}),
      props: useAttrs()
    }

    if ('__before__' in props.hooks) props.hooks.__before__(context)

    props.flow(context)

    if ('__after__' in props.hooks) props.hooks.__after__(context)

    node.value = Object.keys(nodes)[0]

    const current = computed(() => nodes[node.value])

    return () => h(current.value.component, {
      ...current.value.props,
      ...current.value.events
    })
  }
}
