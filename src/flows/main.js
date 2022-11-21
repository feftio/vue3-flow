import { defineAction, defineEmit } from '~'
import bflow from './bflow'

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
    flow: bflow,
    events: {
      finish: () => ctx.next()
    }
  })

  ctx.addPage('CPage', {
    component: () => import('@/pages/CPage.vue'),
    props: {
      action: defineAction({
        finish: () => {
          ctx.next('BFlow')
        }
      })
    }
  })
}
