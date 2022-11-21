<template>
  <div>Template for CPage</div>
  <flow-page :flow="flow" />
</template>

<script setup>
import { FlowPage, defineAction } from '@@'
import bflow from '@/flows/bflow'

const props = defineProps({
  action: {
    type: Function,
    required: true
  }
})

const flow = (ctx) => {
  ctx.addPage('APage', {
    component: () => import('@/pages/APage.vue'),
    props: {
      action: defineAction({
        finish: () => {
          ctx.next()
        }
      })
    }
  })

  ctx.addFlow('BFlow', {
    flow: bflow,
    events: {
      onFinish: () => {
        console.dir('BFlow finished')
        props.action('finish')
      }
    }
  })
}
</script>
