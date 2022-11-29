import { registerFlowTree, FlowPage } from '@@'

const routes = [
  ...registerFlowTree({
    main: import.meta.glob('@/flows/main.js', { eager: true })
  }),
  {
    path: '/test',
    name: 'test',
    component: FlowPage,
    props: {
      flow: (context) => {
        context.addPage('DPage', {
          component: () => import('@/pages/DPage.vue'),
          events: {
            onFinish: () => {
              console.dir('finish emitted')
            }
          }
        })
      }
    }
  }
]

export default routes
