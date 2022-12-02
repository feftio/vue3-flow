import ActorsPage from '../pages/ActorsPage.vue'
import ActorPage from '../pages/ActorPage.vue'

export default (context) => {
  context.addPage('ActorsPage', {
    component: ActorsPage,
    events: {
      tap: (actor) => {
        context.modify('ActorPage', options => {
          options.props.actor = actor
          return options
        })
        context.next(1)
      }
    }
  })

  context.addPage('ActorPage', {
    component: ActorPage,
    events: {
      back: () => context.next('ActorsPage')
    }
  })

  context.addFlow('ErrorFlow', {
    flow: (context) => {
      context.addPage('ErrorPage', {
        component: () => import('../pages/ErrorPage.vue')
      })
    }
  })
}
