import { markRaw as p, defineAsyncComponent as w, reactive as i, ref as _, useAttrs as y, onBeforeMount as U, onBeforeUpdate as m, onBeforeUnmount as B, onMounted as v, onUpdated as E, onUnmounted as k, computed as M, unref as c, openBlock as b, createBlock as P, resolveDynamicComponent as C, mergeProps as A, toHandlers as N, createCommentVNode as q, h as O, getCurrentInstance as F } from "vue";
function g(e, o, n) {
  if (typeof n == "string")
    return o.value = n, o.value;
  const s = Object.keys(e), u = s.indexOf(o.value);
  u + 1 < s.length && (o.value = s[u + 1]);
}
function x(e, o, n) {
  if (o in e)
    throw new Error(`Node "${o}" is already exist`);
  if (e[o] = {}, !("component" in n))
    throw new Error(`Field "component" of "${o}" is not defined`);
  if (typeof n.component == "function")
    e[o].component = p(w(n.component));
  else if (typeof n.component.render == "function")
    e[o].component = p(n.component);
  else
    throw new Error(`Field "component" of "${o}" must be function or object`);
  e[o].props = "props" in n ? n.props : {}, e[o].events = "events" in n ? n.events : {}, e[o].show = "show" in n ? n.show : !0, e[o].type = "page";
}
function $(e, o, n) {
  if (o in e)
    throw new Error(`Node "${o}" is already exist`);
  if (e[o] = {}, e[o].props = "props" in n ? n.props : {}, !("flow" in n))
    throw new Error(`Field "flow" of "${o}" is not defined`);
  if (typeof n.flow == "function")
    e[o].props = { ...e[o].props, flow: n.flow };
  else
    throw new Error(`Field "flow" of "${o}" must be function`);
  e[o].component = p(w(() => Promise.resolve().then(() => H))), e[o].events = "events" in n ? n.events : {}, e[o].show = "show" in n ? n.show : !0, e[o].type = "flow";
}
const V = {
  inheritAttrs: !1
}, l = /* @__PURE__ */ Object.assign(V, {
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
    const o = e, n = {
      onBeforeMount: [],
      onBeforeUpdate: [],
      onBeforeUnmount: [],
      onMounted: [],
      onUpdated: [],
      onUnmounted: []
    }, s = i({}), u = _(null), f = {
      nodes: s,
      get: () => u.value,
      next: (r) => g(s, u, r),
      addPage: (r, a) => x(s, r, a),
      addFlow: (r, a) => $(s, r, a),
      store: i({}),
      props: y(),
      onBeforeMount: (r) => {
        n.onBeforeMount.push(r);
      },
      onBeforeUpdate: (r) => {
        n.onBeforeUpdate.push(r);
      },
      onBeforeUnmount: (r) => {
        n.onBeforeUnmount.push(r);
      },
      onMounted: (r) => {
        n.onMounted.push(r);
      },
      onUpdated: (r) => {
        n.onUpdated.push(r);
      },
      onUnmounted: (r) => {
        n.onUnmounted.push(r);
      }
    };
    "__before__" in o.hooks && o.hooks.__before__(f), o.flow(f), "__after__" in o.hooks && o.hooks.__after__(f), U(async () => {
      n.onBeforeMount.forEach(async (r) => await r());
    }), m(async () => {
      n.onBeforeUpdate.forEach(async (r) => await r());
    }), B(async () => {
      n.onBeforeUnmount.forEach(async (r) => await r());
    }), v(async () => {
      n.onMounted.forEach(async (r) => await r());
    }), E(async () => {
      n.onUpdated.forEach(async (r) => await r());
    }), k(async () => {
      n.onUnmounted.forEach(async (r) => await r());
    }), u.value = Object.keys(s)[0];
    const t = M(() => s[u.value]);
    return (r, a) => c(t).show ? (b(), P(C(c(t).component), A({ key: 0 }, c(t).props, N(c(t).events)), null, 16)) : q("", !0);
  }
}), H = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: l
}, Symbol.toStringTag, { value: "Module" })), T = {
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
    return () => O(l, { flow: e.flow, hooks: e.hooks });
  }
}, z = {
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
    const o = {
      onBeforeMount: [],
      onBeforeUpdate: [],
      onBeforeUnmount: [],
      onMounted: [],
      onUpdated: [],
      onUnmounted: []
    }, n = i({}), s = _(null), u = {
      nodes: n,
      get: () => s.value,
      next: (t) => g(n, s, t),
      addPage: (t, r) => x(n, t, r),
      addFlow: (t, r) => $(n, t, r),
      store: i({}),
      props: y(),
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
    "__before__" in e.hooks && e.hooks.__before__(u), e.flow(u), "__after__" in e.hooks && e.hooks.__after__(u), U(async () => {
      o.onBeforeMount.forEach(async (t) => await t());
    }), m(async () => {
      o.onBeforeUpdate.forEach(async (t) => await t());
    }), B(async () => {
      o.onBeforeUnmount.forEach(async (t) => await t());
    }), v(async () => {
      o.onMounted.forEach(async (t) => await t());
    }), E(async () => {
      o.onUpdated.forEach(async (t) => await t());
    }), k(async () => {
      o.onUnmounted.forEach(async (t) => await t());
    }), s.value = Object.keys(n)[0];
    const f = M(() => n[s.value]);
    return () => O(f.value.component, {
      ...f.value.props,
      ...f.value.events
    });
  }
};
function d(e) {
  return e.search(/__(.+)__/) >= 0;
}
function h(e, o) {
  return Object.fromEntries(Object.entries(e).filter(o));
}
function I(e) {
  const o = h(Object.values(e.main)[0], ([t]) => !d(t)), n = h(Object.values(e.main)[0], ([t]) => d(t)), s = e.root === void 0 || e.root === null || e.root === !0 ? !0 : e.root, u = e.children, f = [];
  return Object.entries(o).forEach(([t, r]) => {
    f.push({
      path: s ? `/${t}` : t,
      name: t,
      props: {
        flow: r,
        hooks: n
      },
      component: l
    }), u && (f.at(-1).children = I({ ...u, root: !1 }));
  }), f;
}
function D(e) {
  return (o, ...n) => {
    if (!Object.keys(e).includes(o))
      throw new Error(`Called action "${o}" is not defined`);
    return e[o](...n);
  };
}
function R(e) {
  return () => {
    const o = F();
    return (n, ...s) => {
      if (!Object.keys(e).includes(n))
        throw new Error(`Called event "${n}" is not defined`);
      Object.values(e).forEach((u) => {
        if (!u(...s))
          throw new Error(`Emitted event "${n}" is not valid`);
      }), o.emit(n, ...s);
    };
  };
}
function j() {
  return F().emit;
}
export {
  z as FlowPage,
  T as FlowView,
  D as defineAction,
  R as defineEmit,
  j as getEmit,
  I as registerFlowTree
};
