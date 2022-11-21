import { defineAction, getEmit } from '@@'

export default function bflow (ctx) {
  const emit = getEmit()

  ctx.addPage('B1Page', {
    component: () => import('@/pages/B1Page.vue'),
    props: {
      action: defineAction({
        finish: () => {
          ctx.next()
        }
      })
    }
  })

  ctx.addPage('B2Page', {
    component: () => import('@/pages/B2Page.vue'),
    props: {
      action: defineAction({
        finish: () => {
          emit('finish')
          // ctx.props.action('finish')
        }
      })
    }
  })
}
