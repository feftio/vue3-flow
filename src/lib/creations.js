import { markRaw, defineAsyncComponent } from 'vue'
import { isObject, isBoolean } from './utils'

export function createPage (name, options) {
  const node = {}

  if (!('component' in options)) {
    throw new Error(`Option "component" of "${name}" node is not defined`)
  }

  if (typeof options.component === 'function') {
    node.component = markRaw(defineAsyncComponent(options.component))
  } else if ((typeof options.component.render === 'function') || (typeof options.component.setup === 'function')) {
    node.component = markRaw(options.component)
  } else {
    throw new Error(`Option "component" of "${name}" node must be function or object`)
  }

  node.props = (isObject(options.props)) ? options.props : {}
  node.events = (isObject(options.events)) ? options.events : {}
  node.show = (isBoolean(options.show)) ? options.show : true
  node.type = 'page'

  return node
}

export function createFlow (name, options) {
  const node = {}
  node.props = (isObject(options.props)) ? options.props : {}

  if (!('flow' in options)) {
    throw new Error(`Option "flow" of "${name}" node is not defined`)
  }

  if (typeof options.flow === 'function') {
    node.props = { ...node.props, flow: options.flow }
  } else {
    throw new Error(`Option "flow" of "${name}" node must be function`)
  }

  node.component = markRaw(defineAsyncComponent(() => import('./templates/FlowPage.vue')))
  node.events = (isObject(options.events)) ? options.events : {}
  node.show = (isBoolean(options.show)) ? options.show : true
  node.type = 'flow'
  return node
}
