import ActorsPage from '../pages/ActorsPage.vue'
import ActorPage from '../pages/ActorPage.vue'

export default (context) => {
  context.addPage('ActorsPage', {
    component: ActorsPage,
    events: {
      tap: (actor) => {
        // context.modify('ActorPage', {
        //   props: {
        //     actor
        //   }
        // })
        // context.next('ActorPage')
        // context.modify('Flow', (node) => {
        //   console.dir(node)
        // })

        context.modify('ActorPage', (page) => {
          page.props.actor = actor
          return page
        })

        console.dir(context.nodes)

        context.next('ActorPage')
      }
    }
  })

  context.addPage('ActorPage', {
    component: ActorPage
  })

  context.addFlow('Flow', {
    flow: (context) => {
      context.addPage('ActorPage', {
        component: ActorPage
      })
    }
  })
}
