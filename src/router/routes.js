import { FlowPageVue } from 'vue3-flow'

function loadCases () {
  const routes = []
  Object.entries(import.meta.glob('@/cases/*/flow.js', { eager: true, import: 'default' })).forEach(([name, flow], index) => {
    routes.push({
      path: '/case' + (index + 1),
      name: 'case' + (index + 1),
      component: FlowPageVue,
      props: { flow }
    })
  })
  return routes
}

const routes = [
  ...loadCases()
]

export default routes
