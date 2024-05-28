import { openBlock as r, createElementBlock as s, createTextVNode as i, renderSlot as l } from "vue";
const p = (e, n) => {
  const o = e.__vccOpts || e;
  for (const [c, a] of n)
    o[c] = a;
  return o;
}, d = {}, f = {
  "aria-label": "navegacion",
  class: "navegacion-principal"
};
function _(e, n) {
  return r(), s("nav", f, [
    i(" navegacion principal prueba 1 "),
    l(e.$slots, "default")
  ]);
}
const u = /* @__PURE__ */ p(d, [["render", _]]), v = {
  NavegacionPrincipal: u
}, t = v, m = {
  install(e) {
    Object.keys(t).forEach((n) => {
      e.component(n, t[n]);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(m);
export {
  m as default
};
