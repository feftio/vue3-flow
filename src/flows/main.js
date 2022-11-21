import { defineAction } from '@@'
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
    events: {
      action: () => {
        console.dir('asdasd')
      }
    }
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
          ctx.next('APage')
        }
      })
    }
  })
}
