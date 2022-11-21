import FlowPage from './templates/FlowPage.vue'

function isHook (name) {
  return name.search(/__(.+)__/) >= 0
}

function filterFlows (flows, callback) {
  return Object.fromEntries(Object.entries(flows).filter(callback))
}

export function registerFlowTree (tree) {
  const flows = filterFlows(Object.values(tree.main)[0], ([name]) => !isHook(name))
  const hooks = filterFlows(Object.values(tree.main)[0], ([name]) => isHook(name))
  const root = (tree.root === undefined || tree.root === null || tree.root === true)
    ? true
    : tree.root
  const children = tree.children
  const routes = []
  Object.entries(flows).forEach(([name, flow]) => {
    routes.push({
      path: (root) ? `/${name}` : name,
      name,
      props: {
        flow,
        hooks
      },
      component: FlowPage
    })
    if (children) routes.at(-1).children = registerFlowTree({ ...children, root: false })
  })
  return routes
}
