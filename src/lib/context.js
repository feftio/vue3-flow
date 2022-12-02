import {
  createPage, createFlow
} from './creations'
import {
  transformFlowToNode, transformNodeToFlow, transformNodeToPage, transformPageToNode
} from './transforms'

export function next (nodes, page, name) {
  if (typeof name === 'string' && (!(name in nodes))) {
    throw new Error(`Node "${name}" is not defined`)
  }

  if (typeof name === 'string' && name in nodes) {
    page.value = name
    return page.value
  }

  const pageNames = Object.keys(nodes)
  const pageIndex = pageNames.indexOf(page.value)

  if (pageIndex + 1 < pageNames.length) {
    page.value = pageNames[pageIndex + 1]
  }
}

export function addPage (nodes, name, options) {
  if (name in nodes) {
    throw new Error(`Node "${name}" is already exist`)
  }

  nodes[name] = createPage(name, options)
  return nodes[name]
}

export function addFlow (nodes, name, options) {
  if (name in nodes) {
    throw new Error(`Node "${name}" is already exist`)
  }

  nodes[name] = createFlow(name, options)
  return nodes[name]
}

export function modify (nodes, name, callback) {
  if (!(name in nodes)) {
    throw new Error(`Node "${name}" is not exist`)
  }

  let modified
  const node = nodes[name]

  if (node.type === 'page') {
    modified = callback(transformNodeToPage(node))
    Object.assign(node, transformPageToNode(modified))
  } else if (node.type === 'flow') {
    modified = callback(transformNodeToFlow(node))
    Object.assign(node, transformFlowToNode(modified))
  } else {
    throw new Error(`Node type "${node.type}" is invalid`)
  }

  return node
}
