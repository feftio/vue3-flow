import { markRaw as d, defineAsyncComponent as w, reactive as p, ref as y, useAttrs as m, onBeforeMount as E, onBeforeUpdate as v, onBeforeUnmount as U, onMounted as B, onUpdated as k, onUnmounted as O, computed as g, unref as c, openBlock as F, createBlock as M, resolveDynamicComponent as $, mergeProps as x, toHandlers as P, createCommentVNode as C, getCurrentInstance as h } from "vue";
function A(e, n, o) {
  if (typeof o == "string")
    return n.value = o, n.value;
  const r = Object.keys(e), s = r.indexOf(n.value);
  s + 1 < r.length && (n.value = r[s + 1]);
}
function N(e, n, o) {
  if (n in e)
    throw new Error(`Node "${n}" is already exist`);
  if (e[n] = {}, !("component" in o))
    throw new Error(`Field "component" of "${n}" is not defined`);
  if (typeof o.component == "function")
    e[n].component = d(w(o.component));
  else if (typeof o.component.render == "function")
    e[n].component = o.component;
  else
    throw new Error(`Field "component" of "${n}" must be function or object`);
  e[n].props = "props" in o ? o.props : {}, e[n].events = "events" in o ? o.events : {}, e[n].show = "show" in o ? o.show : !0, e[n].type = "page";
}
function b(e, n, o) {
  if (n in e)
    throw new Error(`Node "${n}" is already exist`);
  if (e[n] = {}, e[n].props = "props" in o ? o.props : {}, !("flow" in o))
    throw new Error(`Field "flow" of "${n}" is not defined`);
  if (typeof o.flow == "function")
    e[n].props = { ...e[n].props, flow: o.flow };
  else
    throw new Error(`Field "flow" of "${n}" must be function`);
  e[n].component = d(w(() => Promise.resolve().then(() => I))), e[n].events = "events" in o ? o.events : {}, e[n].show = "show" in o ? o.show : !0, e[n].type = "flow";
}
const H = {
  inheritAttrs: !1
}, _ = /* @__PURE__ */ Object.assign(H, {
  __name: "FlowPage",
  props: {
    flow: {
      type: Function,
      required: !0
    },
    hooks: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(e) {
    const n = e, o = {
      onBeforeMount: [],
      onBeforeUpdate: [],
      onBeforeUnmount: [],
      onMounted: [],
      onUpdated: [],
      onUnmounted: []
    }, r = p({}), s = y(null), f = {
      nodes: r,
      get: () => s.value,
      next: (t) => A(r, s, t),
      addPage: (t, u) => N(r, t, u),
      addFlow: (t, u) => b(r, t, u),
      store: p({}),
      props: m(),
      onBeforeMount: (t) => {
        o.onBeforeMount.push(t);
      },
      onBeforeUpdate: (t) => {
        o.onBeforeUpdate.push(t);
      },
      onBeforeUnmount: (t) => {
        o.onBeforeUnmount.push(t);
      },
      onMounted: (t) => {
        o.onMounted.push(t);
      },
      onUpdated: (t) => {
        o.onUpdated.push(t);
      },
      onUnmounted: (t) => {
        o.onUnmounted.push(t);
      }
    };
    "__before__" in n.hooks && n.hooks.__before__(f), n.flow(f), "__after__" in n.hooks && n.hooks.__after__(f), E(async () => {
      o.onBeforeMount.forEach(async (t) => await t());
    }), v(async () => {
      o.onBeforeUpdate.forEach(async (t) => await t());
    }), U(async () => {
      o.onBeforeUnmount.forEach(async (t) => await t());
    }), B(async () => {
      o.onMounted.forEach(async (t) => await t());
    }), k(async () => {
      o.onUpdated.forEach(async (t) => await t());
    }), O(async () => {
      o.onUnmounted.forEach(async (t) => await t());
    }), s.value = Object.keys(r)[0];
    const i = g(() => r[s.value]);
    return (t, u) => c(i).show ? (F(), M($(c(i).component), x({ key: 0 }, c(i).props, P(c(i).events)), null, 16)) : C("", !0);
  }
}), I = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _
}, Symbol.toStringTag, { value: "Module" }));
function l(e) {
  return e.search(/__(.+)__/) >= 0;
}
function a(e, n) {
  return Object.fromEntries(Object.entries(e).filter(n));
}
function S(e) {
  const n = a(Object.values(e.main)[0], ([i]) => !l(i)), o = a(Object.values(e.main)[0], ([i]) => l(i)), r = e.root === void 0 || e.root === null || e.root === !0 ? !0 : e.root, s = e.children, f = [];
  return Object.entries(n).forEach(([i, t]) => {
    f.push({
      path: r ? `/${i}` : i,
      name: i,
      props: {
        flow: t,
        hooks: o
      },
      component: _
    }), s && (f.at(-1).children = S({ ...s, root: !1 }));
  }), f;
}
function q(e) {
  return (n, ...o) => {
    if (!Object.keys(e).includes(n))
      throw new Error(`Called action "${n}" is not defined`);
    return e[n](...o);
  };
}
function z(e) {
  return () => {
    const n = h();
    return (o, ...r) => {
      if (!Object.keys(e).includes(o))
        throw new Error(`Called event "${o}" is not defined`);
      Object.values(e).forEach((s) => {
        if (!s(...r))
          throw new Error(`Emitted event "${o}" is not valid`);
      }), n.emit(o, ...r);
    };
  };
}
function D() {
  return h().emit;
}
export {
  q as defineAction,
  z as defineEmit,
  D as getEmit,
  S as registerFlowTree
};
