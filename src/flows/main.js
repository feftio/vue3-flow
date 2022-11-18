import { defineAction } from '~'

export function main (ctx) {
  ctx.addPage('APage', {
    component: () => import('@/pages/APage.vue'),
    props: {
      action: defineAction({
        finish: () => {
          ctx.next()
        }
      })
    },
    events: {},
    show: true
  })

  ctx.addFlow('BFlow', {
    flow: (ctx) => {
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
              ctx.props.action('finish')
            }
          })
        }
      })
    },
    props: {
      action: defineAction({
        finish: () => {
          ctx.next()
        }
      })
    }
  })

  ctx.addPage('CPage', {
    component: () => import('@/pages/CPage.vue'),
    props: {
      action: defineAction({
        finish: () => {

        }
      })
    }
  })
}
