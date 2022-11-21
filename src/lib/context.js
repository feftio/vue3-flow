import { markRaw, defineAsyncComponent } from 'vue'

export function next (nodes, page, name) {
  if (typeof name === 'string') {
    page.value = name
    return page.value
  }
  const pageNames = Object.keys(nodes)
  const pageIndex = pageNames.indexOf(page.value)
  if (pageIndex + 1 < pageNames.length) {
    page.value = pageNames[pageIndex + 1]
  }
}

export function addPage (nodes, name, object) {
  if (name in nodes) { throw new Error(`Node "${name}" is already exist`) }
  nodes[name] = {}
  if (!('component' in object)) {
    throw new Error(`Field "component" of "${name}" is not defined`)
  }
  if (typeof object.component === 'function') {
    nodes[name].component = markRaw(defineAsyncComponent(object.component))
  } else if ((typeof object.component.render === 'function')) {
    nodes[name].component = markRaw(object.component)
  } else {
    throw new Error(`Field "component" of "${name}" must be function or object`)
  }
  nodes[name].props = ('props' in object) ? object.props : {}
  nodes[name].events = ('events' in object) ? object.events : {}
  nodes[name].show = ('show' in object) ? object.show : true
  nodes[name].type = 'page'
}

export function addFlow (nodes, name, object) {
  if (name in nodes) { throw new Error(`Node "${name}" is already exist`) }
  nodes[name] = {}
  nodes[name].props = ('props' in object) ? object.props : {}
  if (!('flow' in object)) {
    throw new Error(`Field "flow" of "${name}" is not defined`)
  }
  if (typeof object.flow === 'function') {
    nodes[name].props = { ...nodes[name].props, flow: object.flow }
  } else {
    throw new Error(`Field "flow" of "${name}" must be function`)
  }
  nodes[name].component = markRaw(defineAsyncComponent(() => import('./templates/FlowPage.vue')))
  nodes[name].events = ('events' in object) ? object.events : {}
  nodes[name].show = ('show' in object) ? object.show : true
  nodes[name].type = 'flow'
}
