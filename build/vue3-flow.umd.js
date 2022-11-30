(function(l,n){typeof exports=="object"&&typeof module<"u"?n(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],n):(l=typeof globalThis<"u"?globalThis:l||self,n(l["vue3-flow"]={},l.Vue))})(this,function(l,n){"use strict";function p(t,e,o){if(typeof o=="string")return e.value=o,e.value;const i=Object.keys(t),s=i.indexOf(e.value);s+1<i.length&&(e.value=i[s+1])}function d(t,e,o){if(e in t)throw new Error(`Node "${e}" is already exist`);if(t[e]={},!("component"in o))throw new Error(`Field "component" of "${e}" is not defined`);if(typeof o.component=="function")t[e].component=n.markRaw(n.defineAsyncComponent(o.component));else if(typeof o.component.render=="function"||typeof o.component.setup=="function")t[e].component=n.markRaw(o.component);else throw new Error(`Field "component" of "${e}" must be function or object`);t[e].props="props"in o?o.props:{},t[e].events="events"in o?o.events:{},t[e].show="show"in o?o.show:!0,t[e].type="page"}function w(t,e,o){if(e in t)throw new Error(`Node "${e}" is already exist`);if(t[e]={},t[e].props="props"in o?o.props:{},!("flow"in o))throw new Error(`Field "flow" of "${e}" is not defined`);if(typeof o.flow=="function")t[e].props={...t[e].props,flow:o.flow};else throw new Error(`Field "flow" of "${e}" must be function`);t[e].component=n.markRaw(n.defineAsyncComponent(()=>Promise.resolve().then(()=>y))),t[e].events="events"in o?o.events:{},t[e].show="show"in o?o.show:!0,t[e].type="flow"}const u=Object.assign({inheritAttrs:!1},{__name:"FlowPage",props:{flow:{type:Function,required:!0},hooks:{type:Object,default(){return{}}}},setup(t){const e=t,o=n.reactive({}),i=n.ref(null),s={nodes:o,get:()=>i.value,next:r=>p(o,i,r),addPage:(r,c)=>d(o,r,c),addFlow:(r,c)=>w(o,r,c),store:n.reactive({}),props:n.useAttrs()};"__before__"in e.hooks&&e.hooks.__before__(s),e.flow(s),"__after__"in e.hooks&&e.hooks.__after__(s),i.value=Object.keys(o)[0];const f=n.computed(()=>o[i.value]);return(r,c)=>n.unref(f).show?(n.openBlock(),n.createBlock(n.resolveDynamicComponent(n.unref(f).component),n.mergeProps({key:0},n.unref(f).props,n.toHandlers(n.unref(f).events)),null,16)):n.createCommentVNode("",!0)}}),y=Object.freeze(Object.defineProperty({__proto__:null,default:u},Symbol.toStringTag,{value:"Module"})),k={name:"FlowView",props:{flow:{type:Function,required:!0},hooks:{type:Object,default(){return{}}}},setup(t){return()=>n.h(u,{flow:t.flow,hooks:t.hooks})}},g={inheritAttrs:!1,props:{flow:{type:Function,required:!0},hooks:{type:Object,default(){return{}}}},setup(t){const e=n.reactive({}),o=n.ref(null),i={nodes:e,get:()=>o.value,next:f=>p(e,o,f),addPage:(f,r)=>d(e,f,r),addFlow:(f,r)=>w(e,f,r),store:n.reactive({}),props:n.useAttrs()};"__before__"in t.hooks&&t.hooks.__before__(i),t.flow(i),"__after__"in t.hooks&&t.hooks.__after__(i),o.value=Object.keys(e)[0];const s=n.computed(()=>e[o.value]);return()=>n.h(s.value.component,{...s.value.props,...s.value.events})}};function _(t){return t.search(/__(.+)__/)>=0}function a(t,e){return Object.fromEntries(Object.entries(t).filter(e))}function h(t){const e=a(Object.values(t.main)[0],([r])=>!_(r)),o=a(Object.values(t.main)[0],([r])=>_(r)),i=t.root===void 0||t.root===null||t.root===!0?!0:t.root,s=t.children,f=[];return Object.entries(e).forEach(([r,c])=>{f.push({path:i?`/${r}`:r,name:r,props:{flow:c,hooks:o},component:u}),s&&(f.at(-1).children=h({...s,root:!1}))}),f}function m(t){return(e,...o)=>{if(!Object.keys(t).includes(e))throw new Error(`Called action "${e}" is not defined`);return t[e](...o)}}function F(t){return()=>{const e=n.getCurrentInstance();return(o,...i)=>{if(!Object.keys(t).includes(o))throw new Error(`Called event "${o}" is not defined`);Object.values(t).forEach(s=>{if(!s(...i))throw new Error(`Emitted event "${o}" is not valid`)}),e.emit(o,...i)}}}function O(){return n.getCurrentInstance().emit}l.FlowPage=g,l.FlowPageVue=u,l.FlowView=k,l.defineAction=m,l.defineEmit=F,l.getEmit=O,l.registerFlowTree=h,Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
