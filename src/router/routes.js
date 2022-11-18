import { registerFlowTree } from '~/registers'

const routes = [
  ...registerFlowTree({
    main: import.meta.glob('@/flows/main.js', { eager: true })
  })
]

export default routes
