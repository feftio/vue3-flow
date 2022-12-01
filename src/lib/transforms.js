
/*

nodePage = {
  component: <CustomComponentVueComponent>,
  props: {},
  events: {},
  show: true || false
  type: 'page'
}

nodeFlow = {
  component: <FlowPageVueComponent>,
  props: {
    flow: () => {}
  },
  events: {},
  show: true || false,
  type: 'flow'
}

exposedNode = {
  component: <CustomComponentVueComponent>,
  props: {},
  events: {},
  show: true || false
}

*/

export function transformNodeToPage (node) {
  if (node.type !== 'page') {
    throw new Error('Node type must be "page" for NodeToPage transformation')
  }
  return {
    component: node.component,
    props: node.props,
    events: node.events,
    show: node.show
  }
}

export function transformNodeToFlow (node) {
  if (node.type !== 'flow') {
    throw new Error('Node type must be "flow" for NodeToFlow transformation')
  }
  const flow = node.props.flow
  delete node.props.flow
  return {
    flow,
    props: node.props,
    events: node.events,
    show: node.show
  }
}

export function transformPageToNode (page) {
  return {
    component: page.component,
    props: page.props,
    events: page.events,
    show: page.show
  }
}

export function transformFlowToNode (flow) {
  return {
    props: {
      ...flow.props,
      flow: flow.flow
    },
    events: flow.events,
    show: flow.show
  }
}
