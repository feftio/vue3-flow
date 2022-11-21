import { h } from 'vue'
import FlowPage from './FlowPage.vue'

export default {
  name: 'FlowView',
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
    return () => h(FlowPage, { flow: props.flow, hooks: props.hooks })
  }
}
