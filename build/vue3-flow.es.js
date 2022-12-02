import { markRaw as w, defineAsyncComponent as _, reactive as l, ref as y, useAttrs as v, computed as m, unref as u, openBlock as N, createBlock as P, resolveDynamicComponent as $, mergeProps as x, toHandlers as T, createCommentVNode as C, h as b, getCurrentInstance as O } from "vue";
function p(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function j(e) {
  return typeof e == "boolean";
}
function A(e, o) {
  const t = {};
  if (!("component" in o))
    throw new Error(`Option "component" of "${e}" node is not defined`);
  if (typeof o.component == "function")
    t.component = w(_(o.component));
  else if (typeof o.component.render == "function" || typeof o.component.setup == "function")
    t.component = w(o.component);
  else
    throw new Error(`Option "component" of "${e}" node must be function or object`);
  return t.props = p(o.props) ? o.props : {}, t.events = p(o.events) ? o.events : {}, t.show = j(o.show) ? o.show : !0, t.type = "page", t;
}
function V(e, o) {
  const t = {};
  if (t.props = p(o.props) ? o.props : {}, !("flow" in o))
    throw new Error(`Option "flow" of "${e}" node is not defined`);
  if (typeof o.flow == "function")
    t.props = { ...t.props, flow: o.flow };
  else
    throw new Error(`Option "flow" of "${e}" node must be function`);
  return t.component = w(_(() => Promise.resolve().then(() => z))), t.events = p(o.events) ? o.events : {}, t.show = j(o.show) ? o.show : !0, t.type = "flow", t;
}
function q(e) {
  if (e.type !== "page")
    throw new Error('Node type must be "page" for NodeToPage transformation');
  return {
    component: e.component,
    props: e.props,
    events: e.events,
    show: e.show
  };
}
function B(e) {
  if (e.type !== "flow")
    throw new Error('Node type must be "flow" for NodeToFlow transformation');
  const o = e.props.flow;
  return delete e.props.flow, {
    flow: o,
    props: e.props,
    events: e.events,
    show: e.show
  };
}
function S(e) {
  return {
    component: e.component,
    props: e.props,
    events: e.events,
    show: e.show
  };
}
function H(e) {
  return {
    props: {
      ...e.props,
      flow: e.flow
    },
    events: e.events,
    show: e.show
  };
}
function g(e, o, t) {
  if (typeof t == "string" && !(t in e))
    throw new Error(`Node "${t}" is not defined`);
  if (typeof t == "string" && t in e)
    return o.value = t, o.value;
  const r = Object.keys(e), n = r.indexOf(o.value);
  n + 1 < r.length && (o.value = r[n + 1]);
}
function k(e, o, t) {
  if (o in e)
    throw new Error(`Node "${o}" is already exist`);
  return e[o] = A(o, t), e[o];
}
function E(e, o, t) {
  if (o in e)
    throw new Error(`Node "${o}" is already exist`);
  return e[o] = V(o, t), e[o];
}
function F(e, o, t) {
  if (!(o in e))
    throw new Error(`Node "${o}" is not exist`);
  let r;
  const n = e[o];
  if (n.type === "page")
    r = t(q(n)), Object.assign(n, S(r));
  else if (n.type === "flow")
    r = t(B(n)), Object.assign(n, H(r));
  else
    throw new Error(`Node type "${n.type}" is invalid`);
  return n;
}
const I = {
  inheritAttrs: !1
}, a = /* @__PURE__ */ Object.assign(I, {
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
    var s;
    const o = e, t = l({}), r = y(null), n = {
      nodes: t,
      current: () => r.value,
      next: (f) => g(t, r, f),
      addPage: (f, i) => k(t, f, i),
      addFlow: (f, i) => E(t, f, i),
      modify: (f, i) => F(t, f, i),
      store: l({}),
      props: v()
    };
    "__before__" in o.hooks && o.hooks.__before__(n), o.flow(n), "__after__" in o.hooks && o.hooks.__after__(n), (s = r.value) != null || (r.value = Object.keys(t)[0]);
    const c = m(() => t[r.value]);
    return (f, i) => u(c).show ? (N(), P($(u(c).component), x({ key: 0 }, u(c).props, T(u(c).events)), null, 16)) : C("", !0);
  }
}), z = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: a
}, Symbol.toStringTag, { value: "Module" })), R = {
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
  setup(e) {
    return () => b(a, { flow: e.flow, hooks: e.hooks });
  }
}, G = {
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
  setup(e) {
    var c;
    const o = l({}), t = y(null), r = {
      nodes: o,
      current: () => t.value,
      next: (s) => g(o, t, s),
      addPage: (s, f) => k(o, s, f),
      addFlow: (s, f) => E(o, s, f),
      modify: (s, f) => F(o, s, f),
      store: l({}),
      props: v()
    };
    "__before__" in e.hooks && e.hooks.__before__(r), e.flow(r), "__after__" in e.hooks && e.hooks.__after__(r), (c = t.value) != null || (t.value = Object.keys(o)[0]);
    const n = m(() => o[t.value]);
    return () => b(n.value.component, {
      ...n.value.props,
      ...n.value.events
    });
  }
};
function d(e) {
  return e.search(/__(.+)__/) >= 0;
}
function h(e, o) {
  return Object.fromEntries(Object.entries(e).filter(o));
}
function D(e) {
  const o = h(Object.values(e.main)[0], ([s]) => !d(s)), t = h(Object.values(e.main)[0], ([s]) => d(s)), r = e.root === void 0 || e.root === null || e.root === !0 ? !0 : e.root, n = e.children, c = [];
  return Object.entries(o).forEach(([s, f]) => {
    c.push({
      path: r ? `/${s}` : s,
      name: s,
      props: {
        flow: f,
        hooks: t
      },
      component: a
    }), n && (c.at(-1).children = D({ ...n, root: !1 }));
  }), c;
}
function J(e) {
  return (o, ...t) => {
    if (!Object.keys(e).includes(o))
      throw new Error(`Called action "${o}" is not defined`);
    return e[o](...t);
  };
}
function K(e) {
  return () => {
    const o = O();
    return (t, ...r) => {
      if (!Object.keys(e).includes(t))
        throw new Error(`Called event "${t}" is not defined`);
      Object.values(e).forEach((n) => {
        if (!n(...r))
          throw new Error(`Emitted event "${t}" is not valid`);
      }), o.emit(t, ...r);
    };
  };
}
function L() {
  return O().emit;
}
export {
  G as FlowPage,
  a as FlowPageVue,
  R as FlowView,
  J as defineAction,
  K as defineEmit,
  L as getEmit,
  D as registerFlowTree
};
