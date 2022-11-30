import { markRaw as c, defineAsyncComponent as d, reactive as l, ref as a, useAttrs as h, computed as v, unref as u, openBlock as E, createBlock as m, resolveDynamicComponent as x, mergeProps as $, toHandlers as P, createCommentVNode as b, h as y, getCurrentInstance as k } from "vue";
function F(o, e, t) {
  if (typeof t == "string")
    return e.value = t, e.value;
  const r = Object.keys(o), i = r.indexOf(e.value);
  i + 1 < r.length && (e.value = r[i + 1]);
}
function O(o, e, t) {
  if (e in o)
    throw new Error(`Node "${e}" is already exist`);
  if (o[e] = {}, !("component" in t))
    throw new Error(`Field "component" of "${e}" is not defined`);
  if (typeof t.component == "function")
    o[e].component = c(d(t.component));
  else if (typeof t.component.render == "function" || typeof t.component.setup == "function")
    o[e].component = c(t.component);
  else
    throw new Error(`Field "component" of "${e}" must be function or object`);
  o[e].props = "props" in t ? t.props : {}, o[e].events = "events" in t ? t.events : {}, o[e].show = "show" in t ? t.show : !0, o[e].type = "page";
}
function g(o, e, t) {
  if (e in o)
    throw new Error(`Node "${e}" is already exist`);
  if (o[e] = {}, o[e].props = "props" in t ? t.props : {}, !("flow" in t))
    throw new Error(`Field "flow" of "${e}" is not defined`);
  if (typeof t.flow == "function")
    o[e].props = { ...o[e].props, flow: t.flow };
  else
    throw new Error(`Field "flow" of "${e}" must be function`);
  o[e].component = c(d(() => Promise.resolve().then(() => A))), o[e].events = "events" in t ? t.events : {}, o[e].show = "show" in t ? t.show : !0, o[e].type = "flow";
}
const C = {
  inheritAttrs: !1
}, p = /* @__PURE__ */ Object.assign(C, {
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
  setup(o) {
    const e = o, t = l({}), r = a(null), i = {
      nodes: t,
      get: () => r.value,
      next: (n) => F(t, r, n),
      addPage: (n, f) => O(t, n, f),
      addFlow: (n, f) => g(t, n, f),
      store: l({}),
      props: h()
    };
    "__before__" in e.hooks && e.hooks.__before__(i), e.flow(i), "__after__" in e.hooks && e.hooks.__after__(i), r.value = Object.keys(t)[0];
    const s = v(() => t[r.value]);
    return (n, f) => u(s).show ? (E(), m(x(u(s).component), $({ key: 0 }, u(s).props, P(u(s).events)), null, 16)) : b("", !0);
  }
}), A = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: p
}, Symbol.toStringTag, { value: "Module" })), q = {
  name: "FlowView",
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
  setup(o) {
    return () => y(p, { flow: o.flow, hooks: o.hooks });
  }
}, B = {
  inheritAttrs: !1,
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
  setup(o) {
    const e = l({}), t = a(null), r = {
      nodes: e,
      get: () => t.value,
      next: (s) => F(e, t, s),
      addPage: (s, n) => O(e, s, n),
      addFlow: (s, n) => g(e, s, n),
      store: l({}),
      props: h()
    };
    "__before__" in o.hooks && o.hooks.__before__(r), o.flow(r), "__after__" in o.hooks && o.hooks.__after__(r), t.value = Object.keys(e)[0];
    const i = v(() => e[t.value]);
    return () => y(i.value.component, {
      ...i.value.props,
      ...i.value.events
    });
  }
};
function w(o) {
  return o.search(/__(.+)__/) >= 0;
}
function _(o, e) {
  return Object.fromEntries(Object.entries(o).filter(e));
}
function N(o) {
  const e = _(Object.values(o.main)[0], ([n]) => !w(n)), t = _(Object.values(o.main)[0], ([n]) => w(n)), r = o.root === void 0 || o.root === null || o.root === !0 ? !0 : o.root, i = o.children, s = [];
  return Object.entries(e).forEach(([n, f]) => {
    s.push({
      path: r ? `/${n}` : n,
      name: n,
      props: {
        flow: f,
        hooks: t
      },
      component: p
    }), i && (s.at(-1).children = N({ ...i, root: !1 }));
  }), s;
}
function H(o) {
  return (e, ...t) => {
    if (!Object.keys(o).includes(e))
      throw new Error(`Called action "${e}" is not defined`);
    return o[e](...t);
  };
}
function I(o) {
  return () => {
    const e = k();
    return (t, ...r) => {
      if (!Object.keys(o).includes(t))
        throw new Error(`Called event "${t}" is not defined`);
      Object.values(o).forEach((i) => {
        if (!i(...r))
          throw new Error(`Emitted event "${t}" is not valid`);
      }), e.emit(t, ...r);
    };
  };
}
function S() {
  return k().emit;
}
export {
  B as FlowPage,
  p as FlowPageVue,
  q as FlowView,
  H as defineAction,
  I as defineEmit,
  S as getEmit,
  N as registerFlowTree
};
