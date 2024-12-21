import oe, { useState as Hr, useRef as dr, useEffect as K, useLayoutEffect as Xe, createContext as ae, useContext as yt, useMemo as qe, useCallback as Wt, useId as Je, forwardRef as U } from "https://cdn.jsdelivr.net/npm/react@18.2.0/+esm";
import Ke from "https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm";
var Vr = { exports: {} }, vr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yt;
function Qe() {
  if (Yt) return vr;
  Yt = 1;
  var r = oe, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), e = Object.prototype.hasOwnProperty, i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, u, y) {
    var p, m = {}, g = null, v = null;
    y !== void 0 && (g = "" + y), u.key !== void 0 && (g = "" + u.key), u.ref !== void 0 && (v = u.ref);
    for (p in u) e.call(u, p) && !a.hasOwnProperty(p) && (m[p] = u[p]);
    if (c && c.defaultProps) for (p in u = c.defaultProps, u) m[p] === void 0 && (m[p] = u[p]);
    return { $$typeof: t, type: c, key: g, ref: v, props: m, _owner: i.current };
  }
  return vr.Fragment = n, vr.jsx = s, vr.jsxs = s, vr;
}
var $r = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bt;
function Ze() {
  return Bt || (Bt = 1, process.env.NODE_ENV !== "production" && function() {
    var r = oe, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), w = Symbol.iterator, k = "@@iterator";
    function j(o) {
      if (o === null || typeof o != "object")
        return null;
      var f = w && o[w] || o[k];
      return typeof f == "function" ? f : null;
    }
    var E = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(o) {
      {
        for (var f = arguments.length, d = new Array(f > 1 ? f - 1 : 0), b = 1; b < f; b++)
          d[b - 1] = arguments[b];
        O("error", o, d);
      }
    }
    function O(o, f, d) {
      {
        var b = E.ReactDebugCurrentFrame, x = b.getStackAddendum();
        x !== "" && (f += "%s", d = d.concat([x]));
        var C = d.map(function(S) {
          return String(S);
        });
        C.unshift("Warning: " + f), Function.prototype.apply.call(console[o], console, C);
      }
    }
    var M = !1, H = !1, _ = !1, F = !1, N = !1, W;
    W = Symbol.for("react.module.reference");
    function mr(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === e || o === a || N || o === i || o === y || o === p || F || o === v || M || H || _ || typeof o == "object" && o !== null && (o.$$typeof === g || o.$$typeof === m || o.$$typeof === s || o.$$typeof === c || o.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === W || o.getModuleId !== void 0));
    }
    function yr(o, f, d) {
      var b = o.displayName;
      if (b)
        return b;
      var x = f.displayName || f.name || "";
      return x !== "" ? d + "(" + x + ")" : d;
    }
    function Tr(o) {
      return o.displayName || "Context";
    }
    function Y(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case e:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case y:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case c:
            var f = o;
            return Tr(f) + ".Consumer";
          case s:
            var d = o;
            return Tr(d._context) + ".Provider";
          case u:
            return yr(o, o.render, "ForwardRef");
          case m:
            var b = o.displayName || null;
            return b !== null ? b : Y(o.type) || "Memo";
          case g: {
            var x = o, C = x._payload, S = x._init;
            try {
              return Y(S(C));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, X = 0, kr, jr, Pr, Or, Nr, Mr, Ar;
    function Fr() {
    }
    Fr.__reactDisabledLog = !0;
    function Ur() {
      {
        if (X === 0) {
          kr = console.log, jr = console.info, Pr = console.warn, Or = console.error, Nr = console.group, Mr = console.groupCollapsed, Ar = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: Fr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        X++;
      }
    }
    function Xr() {
      {
        if (X--, X === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, o, {
              value: kr
            }),
            info: z({}, o, {
              value: jr
            }),
            warn: z({}, o, {
              value: Pr
            }),
            error: z({}, o, {
              value: Or
            }),
            group: z({}, o, {
              value: Nr
            }),
            groupCollapsed: z({}, o, {
              value: Mr
            }),
            groupEnd: z({}, o, {
              value: Ar
            })
          });
        }
        X < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var gr = E.ReactCurrentDispatcher, br;
    function nr(o, f, d) {
      {
        if (br === void 0)
          try {
            throw Error();
          } catch (x) {
            var b = x.stack.trim().match(/\n( *(at )?)/);
            br = b && b[1] || "";
          }
        return `
` + br + o;
      }
    }
    var hr = !1, or;
    {
      var qr = typeof WeakMap == "function" ? WeakMap : Map;
      or = new qr();
    }
    function Lr(o, f) {
      if (!o || hr)
        return "";
      {
        var d = or.get(o);
        if (d !== void 0)
          return d;
      }
      var b;
      hr = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var C;
      C = gr.current, gr.current = null, Ur();
      try {
        if (f) {
          var S = function() {
            throw Error();
          };
          if (Object.defineProperty(S.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(S, []);
            } catch (L) {
              b = L;
            }
            Reflect.construct(o, [], S);
          } else {
            try {
              S.call();
            } catch (L) {
              b = L;
            }
            o.call(S.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (L) {
            b = L;
          }
          o();
        }
      } catch (L) {
        if (L && b && typeof L.stack == "string") {
          for (var $ = L.stack.split(`
`), A = b.stack.split(`
`), T = $.length - 1, P = A.length - 1; T >= 1 && P >= 0 && $[T] !== A[P]; )
            P--;
          for (; T >= 1 && P >= 0; T--, P--)
            if ($[T] !== A[P]) {
              if (T !== 1 || P !== 1)
                do
                  if (T--, P--, P < 0 || $[T] !== A[P]) {
                    var I = `
` + $[T].replace(" at new ", " at ");
                    return o.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", o.displayName)), typeof o == "function" && or.set(o, I), I;
                  }
                while (T >= 1 && P >= 0);
              break;
            }
        }
      } finally {
        hr = !1, gr.current = C, Xr(), Error.prepareStackTrace = x;
      }
      var cr = o ? o.displayName || o.name : "", J = cr ? nr(cr) : "";
      return typeof o == "function" && or.set(o, J), J;
    }
    function Jr(o, f, d) {
      return Lr(o, !1);
    }
    function Kr(o) {
      var f = o.prototype;
      return !!(f && f.isReactComponent);
    }
    function ar(o, f, d) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return Lr(o, Kr(o));
      if (typeof o == "string")
        return nr(o);
      switch (o) {
        case y:
          return nr("Suspense");
        case p:
          return nr("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case u:
            return Jr(o.render);
          case m:
            return ar(o.type, f, d);
          case g: {
            var b = o, x = b._payload, C = b._init;
            try {
              return ar(C(x), f, d);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, Ir = {}, Dr = E.ReactDebugCurrentFrame;
    function ir(o) {
      if (o) {
        var f = o._owner, d = ar(o.type, o._source, f ? f.type : null);
        Dr.setExtraStackFrame(d);
      } else
        Dr.setExtraStackFrame(null);
    }
    function Tt(o, f, d, b, x) {
      {
        var C = Function.call.bind(q);
        for (var S in o)
          if (C(o, S)) {
            var $ = void 0;
            try {
              if (typeof o[S] != "function") {
                var A = Error((b || "React class") + ": " + d + " type `" + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[S] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw A.name = "Invariant Violation", A;
              }
              $ = o[S](f, S, b, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              $ = T;
            }
            $ && !($ instanceof Error) && (ir(x), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", b || "React class", d, S, typeof $), ir(null)), $ instanceof Error && !($.message in Ir) && (Ir[$.message] = !0, ir(x), R("Failed %s type: %s", d, $.message), ir(null));
          }
      }
    }
    var Ee = Array.isArray;
    function Qr(o) {
      return Ee(o);
    }
    function Te(o) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, d = f && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return d;
      }
    }
    function ke(o) {
      try {
        return kt(o), !1;
      } catch {
        return !0;
      }
    }
    function kt(o) {
      return "" + o;
    }
    function jt(o) {
      if (ke(o))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Te(o)), kt(o);
    }
    var Pt = E.ReactCurrentOwner, je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ot, Nt;
    function Pe(o) {
      if (q.call(o, "ref")) {
        var f = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Oe(o) {
      if (q.call(o, "key")) {
        var f = Object.getOwnPropertyDescriptor(o, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Ne(o, f) {
      typeof o.ref == "string" && Pt.current;
    }
    function Me(o, f) {
      {
        var d = function() {
          Ot || (Ot = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        d.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: d,
          configurable: !0
        });
      }
    }
    function Ae(o, f) {
      {
        var d = function() {
          Nt || (Nt = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        d.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: d,
          configurable: !0
        });
      }
    }
    var Fe = function(o, f, d, b, x, C, S) {
      var $ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: o,
        key: f,
        ref: d,
        props: S,
        // Record the component responsible for creating this element.
        _owner: C
      };
      return $._store = {}, Object.defineProperty($._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty($, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.defineProperty($, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.freeze && (Object.freeze($.props), Object.freeze($)), $;
    };
    function Le(o, f, d, b, x) {
      {
        var C, S = {}, $ = null, A = null;
        d !== void 0 && (jt(d), $ = "" + d), Oe(f) && (jt(f.key), $ = "" + f.key), Pe(f) && (A = f.ref, Ne(f, x));
        for (C in f)
          q.call(f, C) && !je.hasOwnProperty(C) && (S[C] = f[C]);
        if (o && o.defaultProps) {
          var T = o.defaultProps;
          for (C in T)
            S[C] === void 0 && (S[C] = T[C]);
        }
        if ($ || A) {
          var P = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          $ && Me(S, P), A && Ae(S, P);
        }
        return Fe(o, $, A, x, b, Pt.current, S);
      }
    }
    var Zr = E.ReactCurrentOwner, Mt = E.ReactDebugCurrentFrame;
    function sr(o) {
      if (o) {
        var f = o._owner, d = ar(o.type, o._source, f ? f.type : null);
        Mt.setExtraStackFrame(d);
      } else
        Mt.setExtraStackFrame(null);
    }
    var rt;
    rt = !1;
    function tt(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function At() {
      {
        if (Zr.current) {
          var o = Y(Zr.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function Ie(o) {
      return "";
    }
    var Ft = {};
    function De(o) {
      {
        var f = At();
        if (!f) {
          var d = typeof o == "string" ? o : o.displayName || o.name;
          d && (f = `

Check the top-level render call using <` + d + ">.");
        }
        return f;
      }
    }
    function Lt(o, f) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var d = De(f);
        if (Ft[d])
          return;
        Ft[d] = !0;
        var b = "";
        o && o._owner && o._owner !== Zr.current && (b = " It was passed a child from " + Y(o._owner.type) + "."), sr(o), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, b), sr(null);
      }
    }
    function It(o, f) {
      {
        if (typeof o != "object")
          return;
        if (Qr(o))
          for (var d = 0; d < o.length; d++) {
            var b = o[d];
            tt(b) && Lt(b, f);
          }
        else if (tt(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var x = j(o);
          if (typeof x == "function" && x !== o.entries)
            for (var C = x.call(o), S; !(S = C.next()).done; )
              tt(S.value) && Lt(S.value, f);
        }
      }
    }
    function Ve(o) {
      {
        var f = o.type;
        if (f == null || typeof f == "string")
          return;
        var d;
        if (typeof f == "function")
          d = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === m))
          d = f.propTypes;
        else
          return;
        if (d) {
          var b = Y(f);
          Tt(d, o.props, "prop", b, o);
        } else if (f.PropTypes !== void 0 && !rt) {
          rt = !0;
          var x = Y(f);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function We(o) {
      {
        for (var f = Object.keys(o.props), d = 0; d < f.length; d++) {
          var b = f[d];
          if (b !== "children" && b !== "key") {
            sr(o), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", b), sr(null);
            break;
          }
        }
        o.ref !== null && (sr(o), R("Invalid attribute `ref` supplied to `React.Fragment`."), sr(null));
      }
    }
    var Dt = {};
    function Vt(o, f, d, b, x, C) {
      {
        var S = mr(o);
        if (!S) {
          var $ = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && ($ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var A = Ie();
          A ? $ += A : $ += At();
          var T;
          o === null ? T = "null" : Qr(o) ? T = "array" : o !== void 0 && o.$$typeof === t ? (T = "<" + (Y(o.type) || "Unknown") + " />", $ = " Did you accidentally export a JSX literal instead of a component?") : T = typeof o, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, $);
        }
        var P = Le(o, f, d, x, C);
        if (P == null)
          return P;
        if (S) {
          var I = f.children;
          if (I !== void 0)
            if (b)
              if (Qr(I)) {
                for (var cr = 0; cr < I.length; cr++)
                  It(I[cr], o);
                Object.freeze && Object.freeze(I);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              It(I, o);
        }
        if (q.call(f, "key")) {
          var J = Y(o), L = Object.keys(f).filter(function(Ue) {
            return Ue !== "key";
          }), et = L.length > 0 ? "{key: someKey, " + L.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Dt[J + et]) {
            var Ge = L.length > 0 ? "{" + L.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, et, J, Ge, J), Dt[J + et] = !0;
          }
        }
        return o === e ? We(P) : Ve(P), P;
      }
    }
    function Ye(o, f, d) {
      return Vt(o, f, d, !0);
    }
    function Be(o, f, d) {
      return Vt(o, f, d, !1);
    }
    var He = Be, ze = Ye;
    $r.Fragment = e, $r.jsx = He, $r.jsxs = ze;
  }()), $r;
}
var Ht;
function rn() {
  return Ht || (Ht = 1, process.env.NODE_ENV === "production" ? Vr.exports = Qe() : Vr.exports = Ze()), Vr.exports;
}
var h = rn();
function B(r) {
  return Object.keys(r);
}
function nt(r) {
  return r && typeof r == "object" && !Array.isArray(r);
}
function gt(r, t) {
  const n = { ...r }, e = t;
  return nt(r) && nt(t) && Object.keys(t).forEach((i) => {
    nt(e[i]) && i in r ? n[i] = gt(n[i], e[i]) : n[i] = e[i];
  }), n;
}
function tn(r) {
  return r.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
function en(r) {
  var t;
  return typeof r != "string" || !r.includes("var(--mantine-scale)") ? r : (t = r.match(/^calc\((.*?)\)$/)) == null ? void 0 : t[1].split("*")[0].trim();
}
function nn(r) {
  const t = en(r);
  return typeof t == "number" ? t : typeof t == "string" ? t.includes("calc") || t.includes("var") ? t : t.includes("px") ? Number(t.replace("px", "")) : t.includes("rem") ? Number(t.replace("rem", "")) * 16 : t.includes("em") ? Number(t.replace("em", "")) * 16 : Number(t) : NaN;
}
function ot(r) {
  return r === "0rem" ? "0rem" : `calc(${r} * var(--mantine-scale))`;
}
function ie(r, { shouldScale: t = !1 } = {}) {
  function n(e) {
    if (e === 0 || e === "0")
      return `0${r}`;
    if (typeof e == "number") {
      const i = `${e / 16}${r}`;
      return t ? ot(i) : i;
    }
    if (typeof e == "string") {
      if (e === "" || e.startsWith("calc(") || e.startsWith("clamp(") || e.includes("rgba("))
        return e;
      if (e.includes(","))
        return e.split(",").map((a) => n(a)).join(",");
      if (e.includes(" "))
        return e.split(" ").map((a) => n(a)).join(" ");
      if (e.includes(r))
        return t ? ot(e) : e;
      const i = e.replace("px", "");
      if (!Number.isNaN(Number(i))) {
        const a = `${Number(i) / 16}${r}`;
        return t ? ot(a) : a;
      }
    }
    return e;
  }
  return n;
}
const l = ie("rem", { shouldScale: !0 }), zt = ie("em");
function bt(r) {
  return Object.keys(r).reduce((t, n) => (r[n] !== void 0 && (t[n] = r[n]), t), {});
}
function se(r) {
  if (typeof r == "number")
    return !0;
  if (typeof r == "string") {
    if (r.startsWith("calc(") || r.startsWith("var(") || r.includes(" ") && r.trim() !== "")
      return !0;
    const t = /^[+-]?[0-9]+(\.[0-9]+)?(px|em|rem|ex|ch|lh|rlh|vw|vh|vmin|vmax|vb|vi|svw|svh|lvw|lvh|dvw|dvh|cm|mm|in|pt|pc|q|cqw|cqh|cqi|cqb|cqmin|cqmax|%)?$/;
    return r.trim().split(/\s+/).every((e) => t.test(e));
  }
  return !1;
}
function Q(r, t = "size", n = !0) {
  if (r !== void 0)
    return se(r) ? n ? l(r) : r : `var(--${t}-${r})`;
}
function ce(r) {
  return r === void 0 ? "var(--mantine-radius-default)" : Q(r, "mantine-radius");
}
function zr(r) {
  return Q(r, "mantine-font-size");
}
function on(r, t) {
  try {
    return r.addEventListener("change", t), () => r.removeEventListener("change", t);
  } catch {
    return r.addListener(t), () => r.removeListener(t);
  }
}
function an(r, t) {
  return typeof window < "u" && "matchMedia" in window ? window.matchMedia(r).matches : !1;
}
function sn(r, t, { getInitialValueInEffect: n } = {
  getInitialValueInEffect: !0
}) {
  const [e, i] = Hr(
    n ? t : an(r)
  ), a = dr(null);
  return K(() => {
    if ("matchMedia" in window)
      return a.current = window.matchMedia(r), i(a.current.matches), on(a.current, (s) => i(s.matches));
  }, [r]), e;
}
const le = typeof document < "u" ? Xe : K;
function cn(r, t) {
  const n = dr(!1);
  K(
    () => () => {
      n.current = !1;
    },
    []
  ), K(() => {
    if (n.current)
      return r();
    n.current = !0;
  }, t);
}
function ln(r, t) {
  return sn("(prefers-reduced-motion: reduce)", r, t);
}
function fe(r) {
  var t, n, e = "";
  if (typeof r == "string" || typeof r == "number") e += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var i = r.length;
    for (t = 0; t < i; t++) r[t] && (n = fe(r[t])) && (e && (e += " "), e += n);
  } else for (n in r) r[n] && (e && (e += " "), e += n);
  return e;
}
function rr() {
  for (var r, t, n = 0, e = "", i = arguments.length; n < i; n++) (r = arguments[n]) && (t = fe(r)) && (e && (e += " "), e += t);
  return e;
}
const fn = {};
function un(r) {
  const t = {};
  return r.forEach((n) => {
    Object.entries(n).forEach(([e, i]) => {
      t[e] ? t[e] = rr(t[e], i) : t[e] = i;
    });
  }), t;
}
function ht({ theme: r, classNames: t, props: n, stylesCtx: e }) {
  const a = (Array.isArray(t) ? t : [t]).map(
    (s) => typeof s == "function" ? s(r, n, e) : s || fn
  );
  return un(a);
}
function ut({ theme: r, styles: t, props: n, stylesCtx: e }) {
  return (Array.isArray(t) ? t : [t]).reduce((a, s) => typeof s == "function" ? { ...a, ...s(r, n, e) } : { ...a, ...s }, {});
}
const ue = ae(null);
function tr() {
  const r = yt(ue);
  if (!r)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return r;
}
function dn() {
  return tr().cssVariablesResolver;
}
function pn() {
  return tr().classNamesPrefix;
}
function vt() {
  return tr().getStyleNonce;
}
function mn() {
  return tr().withStaticClasses;
}
function yn() {
  return tr().headless;
}
function gn() {
  var r;
  return (r = tr().stylesTransform) == null ? void 0 : r.sx;
}
function bn() {
  var r;
  return (r = tr().stylesTransform) == null ? void 0 : r.styles;
}
function hn(r) {
  return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(r);
}
function vn(r) {
  let t = r.replace("#", "");
  if (t.length === 3) {
    const s = t.split("");
    t = [
      s[0],
      s[0],
      s[1],
      s[1],
      s[2],
      s[2]
    ].join("");
  }
  if (t.length === 8) {
    const s = parseInt(t.slice(6, 8), 16) / 255;
    return {
      r: parseInt(t.slice(0, 2), 16),
      g: parseInt(t.slice(2, 4), 16),
      b: parseInt(t.slice(4, 6), 16),
      a: s
    };
  }
  const n = parseInt(t, 16), e = n >> 16 & 255, i = n >> 8 & 255, a = n & 255;
  return {
    r: e,
    g: i,
    b: a,
    a: 1
  };
}
function $n(r) {
  const [t, n, e, i] = r.replace(/[^0-9,./]/g, "").split(/[/,]/).map(Number);
  return { r: t, g: n, b: e, a: i || 1 };
}
function Sn(r) {
  const t = /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i, n = r.match(t);
  if (!n)
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  const e = parseInt(n[1], 10), i = parseInt(n[2], 10) / 100, a = parseInt(n[3], 10) / 100, s = n[5] ? parseFloat(n[5]) : void 0, c = (1 - Math.abs(2 * a - 1)) * i, u = e / 60, y = c * (1 - Math.abs(u % 2 - 1)), p = a - c / 2;
  let m, g, v;
  return u >= 0 && u < 1 ? (m = c, g = y, v = 0) : u >= 1 && u < 2 ? (m = y, g = c, v = 0) : u >= 2 && u < 3 ? (m = 0, g = c, v = y) : u >= 3 && u < 4 ? (m = 0, g = y, v = c) : u >= 4 && u < 5 ? (m = y, g = 0, v = c) : (m = c, g = 0, v = y), {
    r: Math.round((m + p) * 255),
    g: Math.round((g + p) * 255),
    b: Math.round((v + p) * 255),
    a: s || 1
  };
}
function $t(r) {
  return hn(r) ? vn(r) : r.startsWith("rgb") ? $n(r) : r.startsWith("hsl") ? Sn(r) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function Wr(r, t) {
  if (r.startsWith("var("))
    return `color-mix(in srgb, ${r}, black ${t * 100}%)`;
  const { r: n, g: e, b: i, a } = $t(r), s = 1 - t, c = (u) => Math.round(u * s);
  return `rgba(${c(n)}, ${c(e)}, ${c(i)}, ${a})`;
}
function Cr(r, t) {
  return typeof r.primaryShade == "number" ? r.primaryShade : t === "dark" ? r.primaryShade.dark : r.primaryShade.light;
}
function at(r) {
  return r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4;
}
function wn(r) {
  const t = r.match(/oklch\((.*?)%\s/);
  return t ? parseFloat(t[1]) : null;
}
function xn(r) {
  if (r.startsWith("oklch("))
    return (wn(r) || 0) / 100;
  const { r: t, g: n, b: e } = $t(r), i = t / 255, a = n / 255, s = e / 255, c = at(i), u = at(a), y = at(s);
  return 0.2126 * c + 0.7152 * u + 0.0722 * y;
}
function Sr(r, t = 0.179) {
  return r.startsWith("var(") ? !1 : xn(r) > t;
}
function Rr({
  color: r,
  theme: t,
  colorScheme: n
}) {
  if (typeof r != "string")
    throw new Error(
      `[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof r}`
    );
  if (r === "bright")
    return {
      color: r,
      value: n === "dark" ? t.white : t.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: Sr(
        n === "dark" ? t.white : t.black,
        t.luminanceThreshold
      ),
      variable: "--mantine-color-bright"
    };
  if (r === "dimmed")
    return {
      color: r,
      value: n === "dark" ? t.colors.dark[2] : t.colors.gray[7],
      shade: void 0,
      isThemeColor: !1,
      isLight: Sr(
        n === "dark" ? t.colors.dark[2] : t.colors.gray[6],
        t.luminanceThreshold
      ),
      variable: "--mantine-color-dimmed"
    };
  if (r === "white" || r === "black")
    return {
      color: r,
      value: r === "white" ? t.white : t.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: Sr(
        r === "white" ? t.white : t.black,
        t.luminanceThreshold
      ),
      variable: `--mantine-color-${r}`
    };
  const [e, i] = r.split("."), a = i ? Number(i) : void 0, s = e in t.colors;
  if (s) {
    const c = a !== void 0 ? t.colors[e][a] : t.colors[e][Cr(t, n || "light")];
    return {
      color: e,
      value: c,
      shade: a,
      isThemeColor: s,
      isLight: Sr(c, t.luminanceThreshold),
      variable: i ? `--mantine-color-${e}-${a}` : `--mantine-color-${e}-filled`
    };
  }
  return {
    color: r,
    value: r,
    isThemeColor: s,
    isLight: Sr(r, t.luminanceThreshold),
    shade: a,
    variable: void 0
  };
}
function dt(r, t) {
  const n = Rr({ color: r || t.primaryColor, theme: t });
  return n.variable ? `var(${n.variable})` : r;
}
function Gt(r, t) {
  const n = {
    from: (r == null ? void 0 : r.from) || t.defaultGradient.from,
    to: (r == null ? void 0 : r.to) || t.defaultGradient.to,
    deg: (r == null ? void 0 : r.deg) || t.defaultGradient.deg || 0
  }, e = dt(n.from, t), i = dt(n.to, t);
  return `linear-gradient(${n.deg}deg, ${e} 0%, ${i} 100%)`;
}
function G(r, t) {
  if (typeof r != "string" || t > 1 || t < 0)
    return "rgba(0, 0, 0, 1)";
  if (r.startsWith("var(")) {
    const a = (1 - t) * 100;
    return `color-mix(in srgb, ${r}, transparent ${a}%)`;
  }
  if (r.startsWith("oklch"))
    return r.includes("/") ? r.replace(/\/\s*[\d.]+\s*\)/, `/ ${t})`) : r.replace(")", ` / ${t})`);
  const { r: n, g: e, b: i } = $t(r);
  return `rgba(${n}, ${e}, ${i}, ${t})`;
}
const lr = G, Cn = ({
  color: r,
  theme: t,
  variant: n,
  gradient: e,
  autoContrast: i
}) => {
  const a = Rr({ color: r, theme: t }), s = typeof i == "boolean" ? i : t.autoContrast;
  if (n === "filled") {
    const c = s && a.isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
    return a.isThemeColor ? a.shade === void 0 ? {
      background: `var(--mantine-color-${r}-filled)`,
      hover: `var(--mantine-color-${r}-filled-hover)`,
      color: c,
      border: `${l(1)} solid transparent`
    } : {
      background: `var(--mantine-color-${a.color}-${a.shade})`,
      hover: `var(--mantine-color-${a.color}-${a.shade === 9 ? 8 : a.shade + 1})`,
      color: c,
      border: `${l(1)} solid transparent`
    } : {
      background: r,
      hover: Wr(r, 0.1),
      color: c,
      border: `${l(1)} solid transparent`
    };
  }
  if (n === "light") {
    if (a.isThemeColor) {
      if (a.shade === void 0)
        return {
          background: `var(--mantine-color-${r}-light)`,
          hover: `var(--mantine-color-${r}-light-hover)`,
          color: `var(--mantine-color-${r}-light-color)`,
          border: `${l(1)} solid transparent`
        };
      const c = t.colors[a.color][a.shade];
      return {
        background: G(c, 0.1),
        hover: G(c, 0.12),
        color: `var(--mantine-color-${a.color}-${Math.min(a.shade, 6)})`,
        border: `${l(1)} solid transparent`
      };
    }
    return {
      background: G(r, 0.1),
      hover: G(r, 0.12),
      color: r,
      border: `${l(1)} solid transparent`
    };
  }
  if (n === "outline")
    return a.isThemeColor ? a.shade === void 0 ? {
      background: "transparent",
      hover: `var(--mantine-color-${r}-outline-hover)`,
      color: `var(--mantine-color-${r}-outline)`,
      border: `${l(1)} solid var(--mantine-color-${r}-outline)`
    } : {
      background: "transparent",
      hover: G(t.colors[a.color][a.shade], 0.05),
      color: `var(--mantine-color-${a.color}-${a.shade})`,
      border: `${l(1)} solid var(--mantine-color-${a.color}-${a.shade})`
    } : {
      background: "transparent",
      hover: G(r, 0.05),
      color: r,
      border: `${l(1)} solid ${r}`
    };
  if (n === "subtle") {
    if (a.isThemeColor) {
      if (a.shade === void 0)
        return {
          background: "transparent",
          hover: `var(--mantine-color-${r}-light-hover)`,
          color: `var(--mantine-color-${r}-light-color)`,
          border: `${l(1)} solid transparent`
        };
      const c = t.colors[a.color][a.shade];
      return {
        background: "transparent",
        hover: G(c, 0.12),
        color: `var(--mantine-color-${a.color}-${Math.min(a.shade, 6)})`,
        border: `${l(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: G(r, 0.12),
      color: r,
      border: `${l(1)} solid transparent`
    };
  }
  return n === "transparent" ? a.isThemeColor ? a.shade === void 0 ? {
    background: "transparent",
    hover: "transparent",
    color: `var(--mantine-color-${r}-light-color)`,
    border: `${l(1)} solid transparent`
  } : {
    background: "transparent",
    hover: "transparent",
    color: `var(--mantine-color-${a.color}-${Math.min(a.shade, 6)})`,
    border: `${l(1)} solid transparent`
  } : {
    background: "transparent",
    hover: "transparent",
    color: r,
    border: `${l(1)} solid transparent`
  } : n === "white" ? a.isThemeColor ? a.shade === void 0 ? {
    background: "var(--mantine-color-white)",
    hover: Wr(t.white, 0.01),
    color: `var(--mantine-color-${r}-filled)`,
    border: `${l(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: Wr(t.white, 0.01),
    color: `var(--mantine-color-${a.color}-${a.shade})`,
    border: `${l(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: Wr(t.white, 0.01),
    color: r,
    border: `${l(1)} solid transparent`
  } : n === "gradient" ? {
    background: Gt(e, t),
    hover: Gt(e, t),
    color: "var(--mantine-color-white)",
    border: "none"
  } : n === "default" ? {
    background: "var(--mantine-color-default)",
    hover: "var(--mantine-color-default-hover)",
    color: "var(--mantine-color-default-color)",
    border: `${l(1)} solid var(--mantine-color-default-border)`
  } : {};
}, Rn = {
  dark: [
    "#C9C9C9",
    "#b8b8b8",
    "#828282",
    "#696969",
    "#424242",
    "#3b3b3b",
    "#2e2e2e",
    "#242424",
    "#1f1f1f",
    "#141414"
  ],
  gray: [
    "#f8f9fa",
    "#f1f3f5",
    "#e9ecef",
    "#dee2e6",
    "#ced4da",
    "#adb5bd",
    "#868e96",
    "#495057",
    "#343a40",
    "#212529"
  ],
  red: [
    "#fff5f5",
    "#ffe3e3",
    "#ffc9c9",
    "#ffa8a8",
    "#ff8787",
    "#ff6b6b",
    "#fa5252",
    "#f03e3e",
    "#e03131",
    "#c92a2a"
  ],
  pink: [
    "#fff0f6",
    "#ffdeeb",
    "#fcc2d7",
    "#faa2c1",
    "#f783ac",
    "#f06595",
    "#e64980",
    "#d6336c",
    "#c2255c",
    "#a61e4d"
  ],
  grape: [
    "#f8f0fc",
    "#f3d9fa",
    "#eebefa",
    "#e599f7",
    "#da77f2",
    "#cc5de8",
    "#be4bdb",
    "#ae3ec9",
    "#9c36b5",
    "#862e9c"
  ],
  violet: [
    "#f3f0ff",
    "#e5dbff",
    "#d0bfff",
    "#b197fc",
    "#9775fa",
    "#845ef7",
    "#7950f2",
    "#7048e8",
    "#6741d9",
    "#5f3dc4"
  ],
  indigo: [
    "#edf2ff",
    "#dbe4ff",
    "#bac8ff",
    "#91a7ff",
    "#748ffc",
    "#5c7cfa",
    "#4c6ef5",
    "#4263eb",
    "#3b5bdb",
    "#364fc7"
  ],
  blue: [
    "#e7f5ff",
    "#d0ebff",
    "#a5d8ff",
    "#74c0fc",
    "#4dabf7",
    "#339af0",
    "#228be6",
    "#1c7ed6",
    "#1971c2",
    "#1864ab"
  ],
  cyan: [
    "#e3fafc",
    "#c5f6fa",
    "#99e9f2",
    "#66d9e8",
    "#3bc9db",
    "#22b8cf",
    "#15aabf",
    "#1098ad",
    "#0c8599",
    "#0b7285"
  ],
  teal: [
    "#e6fcf5",
    "#c3fae8",
    "#96f2d7",
    "#63e6be",
    "#38d9a9",
    "#20c997",
    "#12b886",
    "#0ca678",
    "#099268",
    "#087f5b"
  ],
  green: [
    "#ebfbee",
    "#d3f9d8",
    "#b2f2bb",
    "#8ce99a",
    "#69db7c",
    "#51cf66",
    "#40c057",
    "#37b24d",
    "#2f9e44",
    "#2b8a3e"
  ],
  lime: [
    "#f4fce3",
    "#e9fac8",
    "#d8f5a2",
    "#c0eb75",
    "#a9e34b",
    "#94d82d",
    "#82c91e",
    "#74b816",
    "#66a80f",
    "#5c940d"
  ],
  yellow: [
    "#fff9db",
    "#fff3bf",
    "#ffec99",
    "#ffe066",
    "#ffd43b",
    "#fcc419",
    "#fab005",
    "#f59f00",
    "#f08c00",
    "#e67700"
  ],
  orange: [
    "#fff4e6",
    "#ffe8cc",
    "#ffd8a8",
    "#ffc078",
    "#ffa94d",
    "#ff922b",
    "#fd7e14",
    "#f76707",
    "#e8590c",
    "#d9480f"
  ]
}, Ut = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji", St = {
  scale: 1,
  fontSmoothing: !0,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: Rn,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: Cn,
  autoContrast: !1,
  luminanceThreshold: 0.3,
  fontFamily: Ut,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: !1,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: Ut,
    fontWeight: "700",
    textWrap: "wrap",
    sizes: {
      h1: { fontSize: l(34), lineHeight: "1.3" },
      h2: { fontSize: l(26), lineHeight: "1.35" },
      h3: { fontSize: l(22), lineHeight: "1.4" },
      h4: { fontSize: l(18), lineHeight: "1.45" },
      h5: { fontSize: l(16), lineHeight: "1.5" },
      h6: { fontSize: l(14), lineHeight: "1.5" }
    }
  },
  fontSizes: {
    xs: l(12),
    sm: l(14),
    md: l(16),
    lg: l(18),
    xl: l(20)
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65"
  },
  radius: {
    xs: l(2),
    sm: l(4),
    md: l(8),
    lg: l(16),
    xl: l(32)
  },
  spacing: {
    xs: l(10),
    sm: l(12),
    md: l(16),
    lg: l(20),
    xl: l(32)
  },
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em"
  },
  shadows: {
    xs: `0 ${l(1)} ${l(3)} rgba(0, 0, 0, 0.05), 0 ${l(1)} ${l(2)} rgba(0, 0, 0, 0.1)`,
    sm: `0 ${l(1)} ${l(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${l(10)} ${l(
      15
    )} ${l(-5)}, rgba(0, 0, 0, 0.04) 0 ${l(7)} ${l(7)} ${l(-5)}`,
    md: `0 ${l(1)} ${l(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${l(20)} ${l(
      25
    )} ${l(-5)}, rgba(0, 0, 0, 0.04) 0 ${l(10)} ${l(10)} ${l(-5)}`,
    lg: `0 ${l(1)} ${l(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${l(28)} ${l(
      23
    )} ${l(-7)}, rgba(0, 0, 0, 0.04) 0 ${l(12)} ${l(12)} ${l(-7)}`,
    xl: `0 ${l(1)} ${l(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${l(36)} ${l(
      28
    )} ${l(-7)}, rgba(0, 0, 0, 0.04) 0 ${l(17)} ${l(17)} ${l(-7)}`
  },
  other: {},
  components: {}
};
function Xt(r) {
  return r === "auto" || r === "dark" || r === "light";
}
function _n({
  key: r = "mantine-color-scheme-value"
} = {}) {
  let t;
  return {
    get: (n) => {
      if (typeof window > "u")
        return n;
      try {
        const e = window.localStorage.getItem(r);
        return Xt(e) ? e : n;
      } catch {
        return n;
      }
    },
    set: (n) => {
      try {
        window.localStorage.setItem(r, n);
      } catch (e) {
        console.warn(
          "[@mantine/core] Local storage color scheme manager was unable to save color scheme.",
          e
        );
      }
    },
    subscribe: (n) => {
      t = (e) => {
        e.storageArea === window.localStorage && e.key === r && Xt(e.newValue) && n(e.newValue);
      }, window.addEventListener("storage", t);
    },
    unsubscribe: () => {
      window.removeEventListener("storage", t);
    },
    clear: () => {
      window.localStorage.removeItem(r);
    }
  };
}
const En = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color", qt = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function it(r) {
  return r < 0 || r > 9 ? !1 : parseInt(r.toString(), 10) === r;
}
function Jt(r) {
  if (!(r.primaryColor in r.colors))
    throw new Error(En);
  if (typeof r.primaryShade == "object" && (!it(r.primaryShade.dark) || !it(r.primaryShade.light)))
    throw new Error(qt);
  if (typeof r.primaryShade == "number" && !it(r.primaryShade))
    throw new Error(qt);
}
function Tn(r, t) {
  var e;
  if (!t)
    return Jt(r), r;
  const n = gt(r, t);
  return t.fontFamily && !((e = t.headings) != null && e.fontFamily) && (n.headings.fontFamily = t.fontFamily), Jt(n), n;
}
const wt = ae(null), kn = () => yt(wt) || St;
function er() {
  const r = yt(wt);
  if (!r)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return r;
}
function de({
  theme: r,
  children: t,
  inherit: n = !0
}) {
  const e = kn(), i = qe(
    () => Tn(n ? e : St, r),
    [r, e, n]
  );
  return /* @__PURE__ */ h.jsx(wt.Provider, { value: i, children: t });
}
de.displayName = "@mantine/core/MantineThemeProvider";
function jn() {
  const r = er(), t = vt(), n = B(r.breakpoints).reduce((e, i) => {
    const a = r.breakpoints[i].includes("px"), s = nn(r.breakpoints[i]), c = a ? `${s - 0.1}px` : zt(s - 0.1), u = a ? `${s}px` : zt(s);
    return `${e}@media (max-width: ${c}) {.mantine-visible-from-${i} {display: none !important;}}@media (min-width: ${u}) {.mantine-hidden-from-${i} {display: none !important;}}`;
  }, "");
  return /* @__PURE__ */ h.jsx(
    "style",
    {
      "data-mantine-styles": "classes",
      nonce: t == null ? void 0 : t(),
      dangerouslySetInnerHTML: { __html: n }
    }
  );
}
function st(r) {
  return Object.entries(r).map(([t, n]) => `${t}: ${n};`).join("");
}
function wr(r, t) {
  return (Array.isArray(r) ? r : [r]).reduce((e, i) => `${i}{${e}}`, t);
}
function Pn(r, t) {
  const n = st(r.variables), e = n ? wr(t, n) : "", i = st(r.dark), a = st(r.light), s = i ? wr(t === ":host" ? `${t}([data-mantine-color-scheme="dark"])` : `${t}[data-mantine-color-scheme="dark"]`, i) : "", c = a ? wr(t === ":host" ? `${t}([data-mantine-color-scheme="light"])` : `${t}[data-mantine-color-scheme="light"]`, a) : "";
  return `${e}${s}${c}`;
}
function On({ color: r, theme: t, autoContrast: n }) {
  return (typeof n == "boolean" ? n : t.autoContrast) && Rr({ color: r || t.primaryColor, theme: t }).isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
}
function Kt(r, t) {
  return On({
    color: r.colors[r.primaryColor][Cr(r, t)],
    theme: r,
    autoContrast: null
  });
}
function Yr({
  theme: r,
  color: t,
  colorScheme: n,
  name: e = t,
  withColorValues: i = !0
}) {
  if (!r.colors[t])
    return {};
  if (n === "light") {
    const c = Cr(r, "light"), u = {
      [`--mantine-color-${e}-text`]: `var(--mantine-color-${e}-filled)`,
      [`--mantine-color-${e}-filled`]: `var(--mantine-color-${e}-${c})`,
      [`--mantine-color-${e}-filled-hover`]: `var(--mantine-color-${e}-${c === 9 ? 8 : c + 1})`,
      [`--mantine-color-${e}-light`]: lr(r.colors[t][c], 0.1),
      [`--mantine-color-${e}-light-hover`]: lr(r.colors[t][c], 0.12),
      [`--mantine-color-${e}-light-color`]: `var(--mantine-color-${e}-${c})`,
      [`--mantine-color-${e}-outline`]: `var(--mantine-color-${e}-${c})`,
      [`--mantine-color-${e}-outline-hover`]: lr(r.colors[t][c], 0.05)
    };
    return i ? {
      [`--mantine-color-${e}-0`]: r.colors[t][0],
      [`--mantine-color-${e}-1`]: r.colors[t][1],
      [`--mantine-color-${e}-2`]: r.colors[t][2],
      [`--mantine-color-${e}-3`]: r.colors[t][3],
      [`--mantine-color-${e}-4`]: r.colors[t][4],
      [`--mantine-color-${e}-5`]: r.colors[t][5],
      [`--mantine-color-${e}-6`]: r.colors[t][6],
      [`--mantine-color-${e}-7`]: r.colors[t][7],
      [`--mantine-color-${e}-8`]: r.colors[t][8],
      [`--mantine-color-${e}-9`]: r.colors[t][9],
      ...u
    } : u;
  }
  const a = Cr(r, "dark"), s = {
    [`--mantine-color-${e}-text`]: `var(--mantine-color-${e}-4)`,
    [`--mantine-color-${e}-filled`]: `var(--mantine-color-${e}-${a})`,
    [`--mantine-color-${e}-filled-hover`]: `var(--mantine-color-${e}-${a === 9 ? 8 : a + 1})`,
    [`--mantine-color-${e}-light`]: lr(
      r.colors[t][Math.max(0, a - 2)],
      0.15
    ),
    [`--mantine-color-${e}-light-hover`]: lr(
      r.colors[t][Math.max(0, a - 2)],
      0.2
    ),
    [`--mantine-color-${e}-light-color`]: `var(--mantine-color-${e}-${Math.max(a - 5, 0)})`,
    [`--mantine-color-${e}-outline`]: `var(--mantine-color-${e}-${Math.max(a - 4, 0)})`,
    [`--mantine-color-${e}-outline-hover`]: lr(
      r.colors[t][Math.max(a - 4, 0)],
      0.05
    )
  };
  return i ? {
    [`--mantine-color-${e}-0`]: r.colors[t][0],
    [`--mantine-color-${e}-1`]: r.colors[t][1],
    [`--mantine-color-${e}-2`]: r.colors[t][2],
    [`--mantine-color-${e}-3`]: r.colors[t][3],
    [`--mantine-color-${e}-4`]: r.colors[t][4],
    [`--mantine-color-${e}-5`]: r.colors[t][5],
    [`--mantine-color-${e}-6`]: r.colors[t][6],
    [`--mantine-color-${e}-7`]: r.colors[t][7],
    [`--mantine-color-${e}-8`]: r.colors[t][8],
    [`--mantine-color-${e}-9`]: r.colors[t][9],
    ...s
  } : s;
}
function Nn(r) {
  return !!r && typeof r == "object" && "mantine-virtual-color" in r;
}
function fr(r, t, n) {
  B(t).forEach(
    (e) => Object.assign(r, { [`--mantine-${n}-${e}`]: t[e] })
  );
}
const pe = (r) => {
  const t = Cr(r, "light"), n = r.defaultRadius in r.radius ? r.radius[r.defaultRadius] : l(r.defaultRadius), e = {
    variables: {
      "--mantine-scale": r.scale.toString(),
      "--mantine-cursor-type": r.cursorType,
      "--mantine-color-scheme": "light dark",
      "--mantine-webkit-font-smoothing": r.fontSmoothing ? "antialiased" : "unset",
      "--mantine-moz-font-smoothing": r.fontSmoothing ? "grayscale" : "unset",
      "--mantine-color-white": r.white,
      "--mantine-color-black": r.black,
      "--mantine-line-height": r.lineHeights.md,
      "--mantine-font-family": r.fontFamily,
      "--mantine-font-family-monospace": r.fontFamilyMonospace,
      "--mantine-font-family-headings": r.headings.fontFamily,
      "--mantine-heading-font-weight": r.headings.fontWeight,
      "--mantine-heading-text-wrap": r.headings.textWrap,
      "--mantine-radius-default": n,
      // Primary colors
      "--mantine-primary-color-filled": `var(--mantine-color-${r.primaryColor}-filled)`,
      "--mantine-primary-color-filled-hover": `var(--mantine-color-${r.primaryColor}-filled-hover)`,
      "--mantine-primary-color-light": `var(--mantine-color-${r.primaryColor}-light)`,
      "--mantine-primary-color-light-hover": `var(--mantine-color-${r.primaryColor}-light-hover)`,
      "--mantine-primary-color-light-color": `var(--mantine-color-${r.primaryColor}-light-color)`
    },
    light: {
      "--mantine-primary-color-contrast": Kt(r, "light"),
      "--mantine-color-bright": "var(--mantine-color-black)",
      "--mantine-color-text": r.black,
      "--mantine-color-body": r.white,
      "--mantine-color-error": "var(--mantine-color-red-6)",
      "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
      "--mantine-color-anchor": `var(--mantine-color-${r.primaryColor}-${t})`,
      "--mantine-color-default": "var(--mantine-color-white)",
      "--mantine-color-default-hover": "var(--mantine-color-gray-0)",
      "--mantine-color-default-color": "var(--mantine-color-black)",
      "--mantine-color-default-border": "var(--mantine-color-gray-4)",
      "--mantine-color-dimmed": "var(--mantine-color-gray-6)"
    },
    dark: {
      "--mantine-primary-color-contrast": Kt(r, "dark"),
      "--mantine-color-bright": "var(--mantine-color-white)",
      "--mantine-color-text": "var(--mantine-color-dark-0)",
      "--mantine-color-body": "var(--mantine-color-dark-7)",
      "--mantine-color-error": "var(--mantine-color-red-8)",
      "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
      "--mantine-color-anchor": `var(--mantine-color-${r.primaryColor}-4)`,
      "--mantine-color-default": "var(--mantine-color-dark-6)",
      "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
      "--mantine-color-default-color": "var(--mantine-color-white)",
      "--mantine-color-default-border": "var(--mantine-color-dark-4)",
      "--mantine-color-dimmed": "var(--mantine-color-dark-2)"
    }
  };
  fr(e.variables, r.breakpoints, "breakpoint"), fr(e.variables, r.spacing, "spacing"), fr(e.variables, r.fontSizes, "font-size"), fr(e.variables, r.lineHeights, "line-height"), fr(e.variables, r.shadows, "shadow"), fr(e.variables, r.radius, "radius"), r.colors[r.primaryColor].forEach((a, s) => {
    e.variables[`--mantine-primary-color-${s}`] = `var(--mantine-color-${r.primaryColor}-${s})`;
  }), B(r.colors).forEach((a) => {
    const s = r.colors[a];
    if (Nn(s)) {
      Object.assign(
        e.light,
        Yr({
          theme: r,
          name: s.name,
          color: s.light,
          colorScheme: "light",
          withColorValues: !0
        })
      ), Object.assign(
        e.dark,
        Yr({
          theme: r,
          name: s.name,
          color: s.dark,
          colorScheme: "dark",
          withColorValues: !0
        })
      );
      return;
    }
    s.forEach((c, u) => {
      e.variables[`--mantine-color-${a}-${u}`] = c;
    }), Object.assign(
      e.light,
      Yr({
        theme: r,
        color: a,
        colorScheme: "light",
        withColorValues: !1
      })
    ), Object.assign(
      e.dark,
      Yr({
        theme: r,
        color: a,
        colorScheme: "dark",
        withColorValues: !1
      })
    );
  });
  const i = r.headings.sizes;
  return B(i).forEach((a) => {
    e.variables[`--mantine-${a}-font-size`] = i[a].fontSize, e.variables[`--mantine-${a}-line-height`] = i[a].lineHeight, e.variables[`--mantine-${a}-font-weight`] = i[a].fontWeight || r.headings.fontWeight;
  }), e;
};
function Mn({ theme: r, generator: t }) {
  const n = pe(r), e = t == null ? void 0 : t(r);
  return e ? gt(n, e) : n;
}
const ct = pe(St);
function An(r) {
  const t = {
    variables: {},
    light: {},
    dark: {}
  };
  return B(r.variables).forEach((n) => {
    ct.variables[n] !== r.variables[n] && (t.variables[n] = r.variables[n]);
  }), B(r.light).forEach((n) => {
    ct.light[n] !== r.light[n] && (t.light[n] = r.light[n]);
  }), B(r.dark).forEach((n) => {
    ct.dark[n] !== r.dark[n] && (t.dark[n] = r.dark[n]);
  }), t;
}
function Fn(r) {
  return `
  ${r}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${r}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function me({
  cssVariablesSelector: r,
  deduplicateCssVariables: t
}) {
  const n = er(), e = vt(), i = dn(), a = Mn({ theme: n, generator: i }), s = r === ":root" && t, c = s ? An(a) : a, u = Pn(c, r);
  return u ? /* @__PURE__ */ h.jsx(
    "style",
    {
      "data-mantine-styles": !0,
      nonce: e == null ? void 0 : e(),
      dangerouslySetInnerHTML: {
        __html: `${u}${s ? "" : Fn(r)}`
      }
    }
  ) : null;
}
me.displayName = "@mantine/CssVariables";
function Ln() {
  const r = console.error;
  console.error = (...t) => {
    t.length > 1 && typeof t[0] == "string" && t[0].toLowerCase().includes("extra attributes from the server") && typeof t[1] == "string" && t[1].toLowerCase().includes("data-mantine-color-scheme") || r(...t);
  };
}
function ur(r, t) {
  var i;
  const n = typeof window < "u" && "matchMedia" in window && window.matchMedia("(prefers-color-scheme: dark)").matches, e = r !== "auto" ? r : n ? "dark" : "light";
  (i = t()) == null || i.setAttribute("data-mantine-color-scheme", e);
}
function In({
  manager: r,
  defaultColorScheme: t,
  getRootElement: n,
  forceColorScheme: e
}) {
  const i = dr(null), [a, s] = Hr(() => r.get(t)), c = e || a, u = Wt(
    (p) => {
      e || (ur(p, n), s(p), r.set(p));
    },
    [r.set, c, e]
  ), y = Wt(() => {
    s(t), ur(t, n), r.clear();
  }, [r.clear, t]);
  return K(() => (r.subscribe(u), r.unsubscribe), [r.subscribe, r.unsubscribe]), le(() => {
    ur(r.get(t), n);
  }, []), K(() => {
    var m;
    if (e)
      return ur(e, n), () => {
      };
    e === void 0 && ur(a, n), typeof window < "u" && "matchMedia" in window && (i.current = window.matchMedia("(prefers-color-scheme: dark)"));
    const p = (g) => {
      a === "auto" && ur(g.matches ? "dark" : "light", n);
    };
    return (m = i.current) == null || m.addEventListener("change", p), () => {
      var g;
      return (g = i.current) == null ? void 0 : g.removeEventListener("change", p);
    };
  }, [a, e]), { colorScheme: c, setColorScheme: u, clearColorScheme: y };
}
function Dn({
  respectReducedMotion: r,
  getRootElement: t
}) {
  le(() => {
    var n;
    r && ((n = t()) == null || n.setAttribute("data-respect-reduced-motion", "true"));
  }, [r]);
}
Ln();
function ye({
  theme: r,
  children: t,
  getStyleNonce: n,
  withStaticClasses: e = !0,
  withGlobalClasses: i = !0,
  deduplicateCssVariables: a = !0,
  withCssVariables: s = !0,
  cssVariablesSelector: c = ":root",
  classNamesPrefix: u = "mantine",
  colorSchemeManager: y = _n(),
  defaultColorScheme: p = "light",
  getRootElement: m = () => document.documentElement,
  cssVariablesResolver: g,
  forceColorScheme: v,
  stylesTransform: w
}) {
  const { colorScheme: k, setColorScheme: j, clearColorScheme: E } = In({
    defaultColorScheme: p,
    forceColorScheme: v,
    manager: y,
    getRootElement: m
  });
  return Dn({
    respectReducedMotion: (r == null ? void 0 : r.respectReducedMotion) || !1,
    getRootElement: m
  }), /* @__PURE__ */ h.jsx(
    ue.Provider,
    {
      value: {
        colorScheme: k,
        setColorScheme: j,
        clearColorScheme: E,
        getRootElement: m,
        classNamesPrefix: u,
        getStyleNonce: n,
        cssVariablesResolver: g,
        cssVariablesSelector: c,
        withStaticClasses: e,
        stylesTransform: w
      },
      children: /* @__PURE__ */ h.jsxs(de, { theme: r, children: [
        s && /* @__PURE__ */ h.jsx(
          me,
          {
            cssVariablesSelector: c,
            deduplicateCssVariables: a
          }
        ),
        i && /* @__PURE__ */ h.jsx(jn, {}),
        t
      ] })
    }
  );
}
ye.displayName = "@mantine/core/MantineProvider";
const Vn = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function Wn({ theme: r, options: t, unstyled: n }) {
  return rr(
    (t == null ? void 0 : t.focusable) && !n && (r.focusClassName || Vn[r.focusRing]),
    (t == null ? void 0 : t.active) && !n && r.activeClassName
  );
}
function Yn({
  selector: r,
  stylesCtx: t,
  options: n,
  props: e,
  theme: i
}) {
  return ht({
    theme: i,
    classNames: n == null ? void 0 : n.classNames,
    props: (n == null ? void 0 : n.props) || e,
    stylesCtx: t
  })[r];
}
function Qt({
  selector: r,
  stylesCtx: t,
  theme: n,
  classNames: e,
  props: i
}) {
  return ht({ theme: n, classNames: e, props: i, stylesCtx: t })[r];
}
function Bn({ rootSelector: r, selector: t, className: n }) {
  return r === t ? n : void 0;
}
function Hn({ selector: r, classes: t, unstyled: n }) {
  return n ? void 0 : t[r];
}
function zn({
  themeName: r,
  classNamesPrefix: t,
  selector: n,
  withStaticClass: e
}) {
  return e === !1 ? [] : r.map((i) => `${t}-${i}-${n}`);
}
function Gn({
  themeName: r,
  theme: t,
  selector: n,
  props: e,
  stylesCtx: i
}) {
  return r.map(
    (a) => {
      var s, c;
      return (c = ht({
        theme: t,
        classNames: (s = t.components[a]) == null ? void 0 : s.classNames,
        props: e,
        stylesCtx: i
      })) == null ? void 0 : c[n];
    }
  );
}
function Un({
  options: r,
  classes: t,
  selector: n,
  unstyled: e
}) {
  return r != null && r.variant && !e ? t[`${n}--${r.variant}`] : void 0;
}
function Xn({
  theme: r,
  options: t,
  themeName: n,
  selector: e,
  classNamesPrefix: i,
  classNames: a,
  classes: s,
  unstyled: c,
  className: u,
  rootSelector: y,
  props: p,
  stylesCtx: m,
  withStaticClasses: g,
  headless: v,
  transformedStyles: w
}) {
  return rr(
    Wn({ theme: r, options: t, unstyled: c || v }),
    Gn({ theme: r, themeName: n, selector: e, props: p, stylesCtx: m }),
    Un({ options: t, classes: s, selector: e, unstyled: c }),
    Qt({ selector: e, stylesCtx: m, theme: r, classNames: a, props: p }),
    Qt({ selector: e, stylesCtx: m, theme: r, classNames: w, props: p }),
    Yn({ selector: e, stylesCtx: m, options: t, props: p, theme: r }),
    Bn({ rootSelector: y, selector: e, className: u }),
    Hn({ selector: e, classes: s, unstyled: c || v }),
    g && !v && zn({
      themeName: n,
      classNamesPrefix: i,
      selector: e,
      withStaticClass: t == null ? void 0 : t.withStaticClass
    }),
    t == null ? void 0 : t.className
  );
}
function qn({
  theme: r,
  themeName: t,
  props: n,
  stylesCtx: e,
  selector: i
}) {
  return t.map(
    (a) => {
      var s;
      return ut({
        theme: r,
        styles: (s = r.components[a]) == null ? void 0 : s.styles,
        props: n,
        stylesCtx: e
      })[i];
    }
  ).reduce((a, s) => ({ ...a, ...s }), {});
}
function pt({ style: r, theme: t }) {
  return Array.isArray(r) ? [...r].reduce(
    (n, e) => ({ ...n, ...pt({ style: e, theme: t }) }),
    {}
  ) : typeof r == "function" ? r(t) : r ?? {};
}
function Jn(r) {
  return r.reduce((t, n) => (n && Object.keys(n).forEach((e) => {
    t[e] = { ...t[e], ...bt(n[e]) };
  }), t), {});
}
function Kn({
  vars: r,
  varsResolver: t,
  theme: n,
  props: e,
  stylesCtx: i,
  selector: a,
  themeName: s,
  headless: c
}) {
  var u;
  return (u = Jn([
    c ? {} : t == null ? void 0 : t(n, e, i),
    ...s.map((y) => {
      var p, m, g;
      return (g = (m = (p = n.components) == null ? void 0 : p[y]) == null ? void 0 : m.vars) == null ? void 0 : g.call(m, n, e, i);
    }),
    r == null ? void 0 : r(n, e, i)
  ])) == null ? void 0 : u[a];
}
function Qn({
  theme: r,
  themeName: t,
  selector: n,
  options: e,
  props: i,
  stylesCtx: a,
  rootSelector: s,
  styles: c,
  style: u,
  vars: y,
  varsResolver: p,
  headless: m,
  withStylesTransform: g
}) {
  return {
    ...!g && qn({ theme: r, themeName: t, props: i, stylesCtx: a, selector: n }),
    ...!g && ut({ theme: r, styles: c, props: i, stylesCtx: a })[n],
    ...!g && ut({ theme: r, styles: e == null ? void 0 : e.styles, props: (e == null ? void 0 : e.props) || i, stylesCtx: a })[n],
    ...Kn({ theme: r, props: i, stylesCtx: a, vars: y, varsResolver: p, selector: n, themeName: t, headless: m }),
    ...s === n ? pt({ style: u, theme: r }) : null,
    ...pt({ style: e == null ? void 0 : e.style, theme: r })
  };
}
function Zn({ props: r, stylesCtx: t, themeName: n }) {
  var s;
  const e = er(), i = (s = bn()) == null ? void 0 : s();
  return {
    getTransformedStyles: (c) => i ? [
      ...c.map(
        (y) => i(y, { props: r, theme: e, ctx: t })
      ),
      ...n.map(
        (y) => {
          var p;
          return i((p = e.components[y]) == null ? void 0 : p.styles, { props: r, theme: e, ctx: t });
        }
      )
    ].filter(Boolean) : [],
    withStylesTransform: !!i
  };
}
function _r({
  name: r,
  classes: t,
  props: n,
  stylesCtx: e,
  className: i,
  style: a,
  rootSelector: s = "root",
  unstyled: c,
  classNames: u,
  styles: y,
  vars: p,
  varsResolver: m
}) {
  const g = er(), v = pn(), w = mn(), k = yn(), j = (Array.isArray(r) ? r : [r]).filter((O) => O), { withStylesTransform: E, getTransformedStyles: R } = Zn({
    props: n,
    stylesCtx: e,
    themeName: j
  });
  return (O, M) => ({
    className: Xn({
      theme: g,
      options: M,
      themeName: j,
      selector: O,
      classNamesPrefix: v,
      classNames: u,
      classes: t,
      unstyled: c,
      className: i,
      rootSelector: s,
      props: n,
      stylesCtx: e,
      withStaticClasses: w,
      headless: k,
      transformedStyles: R([M == null ? void 0 : M.styles, y])
    }),
    style: Qn({
      theme: g,
      themeName: j,
      selector: O,
      options: M,
      props: n,
      stylesCtx: e,
      rootSelector: s,
      styles: y,
      style: a,
      vars: p,
      varsResolver: m,
      headless: k,
      withStylesTransform: E
    })
  });
}
function Z(r, t, n) {
  var s;
  const e = er(), i = (s = e.components[r]) == null ? void 0 : s.defaultProps, a = typeof i == "function" ? i(e) : i;
  return { ...t, ...a, ...bt(n) };
}
function lt(r) {
  return B(r).reduce(
    (t, n) => r[n] !== void 0 ? `${t}${tn(n)}:${r[n]};` : t,
    ""
  ).trim();
}
function ro({ selector: r, styles: t, media: n, container: e }) {
  const i = t ? lt(t) : "", a = Array.isArray(n) ? n.map((c) => `@media${c.query}{${r}{${lt(c.styles)}}}`) : [], s = Array.isArray(e) ? e.map(
    (c) => `@container ${c.query}{${r}{${lt(c.styles)}}}`
  ) : [];
  return `${i ? `${r}{${i}}` : ""}${a.join("")}${s.join("")}`.trim();
}
function to(r) {
  const t = vt();
  return /* @__PURE__ */ h.jsx(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: t == null ? void 0 : t(),
      dangerouslySetInnerHTML: { __html: ro(r) }
    }
  );
}
function eo(r) {
  const {
    m: t,
    mx: n,
    my: e,
    mt: i,
    mb: a,
    ml: s,
    mr: c,
    me: u,
    ms: y,
    p,
    px: m,
    py: g,
    pt: v,
    pb: w,
    pl: k,
    pr: j,
    pe: E,
    ps: R,
    bd: O,
    bg: M,
    c: H,
    opacity: _,
    ff: F,
    fz: N,
    fw: W,
    lts: mr,
    ta: yr,
    lh: Tr,
    fs: Y,
    tt: z,
    td: X,
    w: kr,
    miw: jr,
    maw: Pr,
    h: Or,
    mih: Nr,
    mah: Mr,
    bgsz: Ar,
    bgp: Fr,
    bgr: Ur,
    bga: Xr,
    pos: gr,
    top: br,
    left: nr,
    bottom: hr,
    right: or,
    inset: qr,
    display: Lr,
    flex: Jr,
    hiddenFrom: Kr,
    visibleFrom: ar,
    lightHidden: q,
    darkHidden: Ir,
    sx: Dr,
    ...ir
  } = r;
  return { styleProps: bt({
    m: t,
    mx: n,
    my: e,
    mt: i,
    mb: a,
    ml: s,
    mr: c,
    me: u,
    ms: y,
    p,
    px: m,
    py: g,
    pt: v,
    pb: w,
    pl: k,
    pr: j,
    pe: E,
    ps: R,
    bd: O,
    bg: M,
    c: H,
    opacity: _,
    ff: F,
    fz: N,
    fw: W,
    lts: mr,
    ta: yr,
    lh: Tr,
    fs: Y,
    tt: z,
    td: X,
    w: kr,
    miw: jr,
    maw: Pr,
    h: Or,
    mih: Nr,
    mah: Mr,
    bgsz: Ar,
    bgp: Fr,
    bgr: Ur,
    bga: Xr,
    pos: gr,
    top: br,
    left: nr,
    bottom: hr,
    right: or,
    inset: qr,
    display: Lr,
    flex: Jr,
    hiddenFrom: Kr,
    visibleFrom: ar,
    lightHidden: q,
    darkHidden: Ir,
    sx: Dr
  }), rest: ir };
}
const no = {
  m: { type: "spacing", property: "margin" },
  mt: { type: "spacing", property: "marginTop" },
  mb: { type: "spacing", property: "marginBottom" },
  ml: { type: "spacing", property: "marginLeft" },
  mr: { type: "spacing", property: "marginRight" },
  ms: { type: "spacing", property: "marginInlineStart" },
  me: { type: "spacing", property: "marginInlineEnd" },
  mx: { type: "spacing", property: "marginInline" },
  my: { type: "spacing", property: "marginBlock" },
  p: { type: "spacing", property: "padding" },
  pt: { type: "spacing", property: "paddingTop" },
  pb: { type: "spacing", property: "paddingBottom" },
  pl: { type: "spacing", property: "paddingLeft" },
  pr: { type: "spacing", property: "paddingRight" },
  ps: { type: "spacing", property: "paddingInlineStart" },
  pe: { type: "spacing", property: "paddingInlineEnd" },
  px: { type: "spacing", property: "paddingInline" },
  py: { type: "spacing", property: "paddingBlock" },
  bd: { type: "border", property: "border" },
  bg: { type: "color", property: "background" },
  c: { type: "textColor", property: "color" },
  opacity: { type: "identity", property: "opacity" },
  ff: { type: "fontFamily", property: "fontFamily" },
  fz: { type: "fontSize", property: "fontSize" },
  fw: { type: "identity", property: "fontWeight" },
  lts: { type: "size", property: "letterSpacing" },
  ta: { type: "identity", property: "textAlign" },
  lh: { type: "lineHeight", property: "lineHeight" },
  fs: { type: "identity", property: "fontStyle" },
  tt: { type: "identity", property: "textTransform" },
  td: { type: "identity", property: "textDecoration" },
  w: { type: "spacing", property: "width" },
  miw: { type: "spacing", property: "minWidth" },
  maw: { type: "spacing", property: "maxWidth" },
  h: { type: "spacing", property: "height" },
  mih: { type: "spacing", property: "minHeight" },
  mah: { type: "spacing", property: "maxHeight" },
  bgsz: { type: "size", property: "backgroundSize" },
  bgp: { type: "identity", property: "backgroundPosition" },
  bgr: { type: "identity", property: "backgroundRepeat" },
  bga: { type: "identity", property: "backgroundAttachment" },
  pos: { type: "identity", property: "position" },
  top: { type: "size", property: "top" },
  left: { type: "size", property: "left" },
  bottom: { type: "size", property: "bottom" },
  right: { type: "size", property: "right" },
  inset: { type: "size", property: "inset" },
  display: { type: "identity", property: "display" },
  flex: { type: "identity", property: "flex" }
};
function xt(r, t) {
  const n = Rr({ color: r, theme: t });
  return n.color === "dimmed" ? "var(--mantine-color-dimmed)" : n.color === "bright" ? "var(--mantine-color-bright)" : n.variable ? `var(${n.variable})` : n.color;
}
function oo(r, t) {
  const n = Rr({ color: r, theme: t });
  return n.isThemeColor && n.shade === void 0 ? `var(--mantine-color-${n.color}-text)` : xt(r, t);
}
function ao(r, t) {
  if (typeof r == "number")
    return l(r);
  if (typeof r == "string") {
    const [n, e, ...i] = r.split(" ").filter((s) => s.trim() !== "");
    let a = `${l(n)}`;
    return e && (a += ` ${e}`), i.length > 0 && (a += ` ${xt(i.join(" "), t)}`), a.trim();
  }
  return r;
}
const Zt = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  monospace: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)",
  headings: "var(--mantine-font-family-headings)"
};
function io(r) {
  return typeof r == "string" && r in Zt ? Zt[r] : r;
}
const so = ["h1", "h2", "h3", "h4", "h5", "h6"];
function co(r, t) {
  return typeof r == "string" && r in t.fontSizes ? `var(--mantine-font-size-${r})` : typeof r == "string" && so.includes(r) ? `var(--mantine-${r}-font-size)` : typeof r == "number" || typeof r == "string" ? l(r) : r;
}
function lo(r) {
  return r;
}
const fo = ["h1", "h2", "h3", "h4", "h5", "h6"];
function uo(r, t) {
  return typeof r == "string" && r in t.lineHeights ? `var(--mantine-line-height-${r})` : typeof r == "string" && fo.includes(r) ? `var(--mantine-${r}-line-height)` : r;
}
function po(r) {
  return typeof r == "number" ? l(r) : r;
}
function mo(r, t) {
  if (typeof r == "number")
    return l(r);
  if (typeof r == "string") {
    const n = r.replace("-", "");
    if (!(n in t.spacing))
      return l(r);
    const e = `--mantine-spacing-${n}`;
    return r.startsWith("-") ? `calc(var(${e}) * -1)` : `var(${e})`;
  }
  return r;
}
const ft = {
  color: xt,
  textColor: oo,
  fontSize: co,
  spacing: mo,
  identity: lo,
  size: po,
  lineHeight: uo,
  fontFamily: io,
  border: ao
};
function re(r) {
  return r.replace("(min-width: ", "").replace("em)", "");
}
function yo({
  media: r,
  ...t
}) {
  const e = Object.keys(r).sort((i, a) => Number(re(i)) - Number(re(a))).map((i) => ({ query: i, styles: r[i] }));
  return { ...t, media: e };
}
function go(r) {
  if (typeof r != "object" || r === null)
    return !1;
  const t = Object.keys(r);
  return !(t.length === 1 && t[0] === "base");
}
function bo(r) {
  return typeof r == "object" && r !== null ? "base" in r ? r.base : void 0 : r;
}
function ho(r) {
  return typeof r == "object" && r !== null ? B(r).filter((t) => t !== "base") : [];
}
function vo(r, t) {
  return typeof r == "object" && r !== null && t in r ? r[t] : r;
}
function $o({
  styleProps: r,
  data: t,
  theme: n
}) {
  return yo(
    B(r).reduce(
      (e, i) => {
        if (i === "hiddenFrom" || i === "visibleFrom" || i === "sx")
          return e;
        const a = t[i], s = Array.isArray(a.property) ? a.property : [a.property], c = bo(r[i]);
        if (!go(r[i]))
          return s.forEach((y) => {
            e.inlineStyles[y] = ft[a.type](c, n);
          }), e;
        e.hasResponsiveStyles = !0;
        const u = ho(r[i]);
        return s.forEach((y) => {
          c && (e.styles[y] = ft[a.type](c, n)), u.forEach((p) => {
            const m = `(min-width: ${n.breakpoints[p]})`;
            e.media[m] = {
              ...e.media[m],
              [y]: ft[a.type](
                vo(r[i], p),
                n
              )
            };
          });
        }), e;
      },
      {
        hasResponsiveStyles: !1,
        styles: {},
        inlineStyles: {},
        media: {}
      }
    )
  );
}
function So() {
  return `__m__-${Je().replace(/:/g, "")}`;
}
function ge(r) {
  return r.startsWith("data-") ? r : `data-${r}`;
}
function wo(r) {
  return Object.keys(r).reduce((t, n) => {
    const e = r[n];
    return e === void 0 || e === "" || e === !1 || e === null || (t[ge(n)] = r[n]), t;
  }, {});
}
function be(r) {
  return r ? typeof r == "string" ? { [ge(r)]: !0 } : Array.isArray(r) ? [...r].reduce(
    (t, n) => ({ ...t, ...be(n) }),
    {}
  ) : wo(r) : null;
}
function mt(r, t) {
  return Array.isArray(r) ? [...r].reduce(
    (n, e) => ({ ...n, ...mt(e, t) }),
    {}
  ) : typeof r == "function" ? r(t) : r ?? {};
}
function xo({
  theme: r,
  style: t,
  vars: n,
  styleProps: e
}) {
  const i = mt(t, r), a = mt(n, r);
  return { ...i, ...a, ...e };
}
const he = U(
  ({
    component: r,
    style: t,
    __vars: n,
    className: e,
    variant: i,
    mod: a,
    size: s,
    hiddenFrom: c,
    visibleFrom: u,
    lightHidden: y,
    darkHidden: p,
    renderRoot: m,
    __size: g,
    ...v
  }, w) => {
    var N;
    const k = er(), j = r || "div", { styleProps: E, rest: R } = eo(v), O = gn(), M = (N = O == null ? void 0 : O()) == null ? void 0 : N(E.sx), H = So(), _ = $o({
      styleProps: E,
      theme: k,
      data: no
    }), F = {
      ref: w,
      style: xo({
        theme: k,
        style: t,
        vars: n,
        styleProps: _.inlineStyles
      }),
      className: rr(e, M, {
        [H]: _.hasResponsiveStyles,
        "mantine-light-hidden": y,
        "mantine-dark-hidden": p,
        [`mantine-hidden-from-${c}`]: c,
        [`mantine-visible-from-${u}`]: u
      }),
      "data-variant": i,
      "data-size": se(s) ? void 0 : s || void 0,
      size: g,
      ...be(a),
      ...R
    };
    return /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
      _.hasResponsiveStyles && /* @__PURE__ */ h.jsx(
        to,
        {
          selector: `.${H}`,
          styles: _.styles,
          media: _.media
        }
      ),
      typeof m == "function" ? m(F) : /* @__PURE__ */ h.jsx(j, { ...F })
    ] });
  }
);
he.displayName = "@mantine/core/Box";
const D = he;
function ve(r) {
  return r;
}
function Ct(r) {
  const t = U(r);
  return t.extend = ve, t.withProps = (n) => {
    const e = U((i, a) => /* @__PURE__ */ h.jsx(t, { ...n, ...i, ref: a }));
    return e.extend = t.extend, e.displayName = `WithProps(${t.displayName})`, e;
  }, t;
}
function $e(r) {
  const t = U(r);
  return t.withProps = (n) => {
    const e = U((i, a) => /* @__PURE__ */ h.jsx(t, { ...n, ...i, ref: a }));
    return e.extend = t.extend, e.displayName = `WithProps(${t.displayName})`, e;
  }, t.extend = ve, t;
}
var Se = { root: "m_87cf2631" };
const Co = {
  __staticSelector: "UnstyledButton"
}, Rt = $e(
  (r, t) => {
    const n = Z("UnstyledButton", Co, r), {
      className: e,
      component: i = "button",
      __staticSelector: a,
      unstyled: s,
      classNames: c,
      styles: u,
      style: y,
      ...p
    } = n, m = _r({
      name: a,
      props: n,
      classes: Se,
      className: e,
      style: y,
      classNames: c,
      styles: u,
      unstyled: s
    });
    return /* @__PURE__ */ h.jsx(
      D,
      {
        ...m("root", { focusable: !0 }),
        component: i,
        ref: t,
        type: i === "button" ? "button" : void 0,
        ...p
      }
    );
  }
);
Rt.classes = Se;
Rt.displayName = "@mantine/core/UnstyledButton";
const xr = (r) => ({
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${l(r === "bottom" ? 10 : -10)})` },
  transitionProperty: "transform, opacity"
}), Br = {
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 },
    transitionProperty: "opacity"
  },
  "fade-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: `translateY(${l(30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: `translateY(${l(-30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: `translateX(${l(30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: `translateX(${l(-30)}` },
    transitionProperty: "opacity, transform"
  },
  scale: {
    in: { opacity: 1, transform: "scale(1)" },
    out: { opacity: 0, transform: "scale(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-y": {
    in: { opacity: 1, transform: "scaleY(1)" },
    out: { opacity: 0, transform: "scaleY(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-x": {
    in: { opacity: 1, transform: "scaleX(1)" },
    out: { opacity: 0, transform: "scaleX(0)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "skew-up": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: `translateY(${l(-20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: `translateY(${l(20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${l(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${l(20)}) rotate(5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(-100%)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(100%)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "slide-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(100%)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "slide-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(-100%)" },
    common: { transformOrigin: "right" },
    transitionProperty: "transform, opacity"
  },
  pop: {
    ...xr("bottom"),
    common: { transformOrigin: "center center" }
  },
  "pop-bottom-left": {
    ...xr("bottom"),
    common: { transformOrigin: "bottom left" }
  },
  "pop-bottom-right": {
    ...xr("bottom"),
    common: { transformOrigin: "bottom right" }
  },
  "pop-top-left": {
    ...xr("top"),
    common: { transformOrigin: "top left" }
  },
  "pop-top-right": {
    ...xr("top"),
    common: { transformOrigin: "top right" }
  }
}, te = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function Ro({
  transition: r,
  state: t,
  duration: n,
  timingFunction: e
}) {
  const i = {
    transitionDuration: `${n}ms`,
    transitionTimingFunction: e
  };
  return typeof r == "string" ? r in Br ? {
    transitionProperty: Br[r].transitionProperty,
    ...i,
    ...Br[r].common,
    ...Br[r][te[t]]
  } : {} : {
    transitionProperty: r.transitionProperty,
    ...i,
    ...r.common,
    ...r[te[t]]
  };
}
function _o({
  duration: r,
  exitDuration: t,
  timingFunction: n,
  mounted: e,
  onEnter: i,
  onExit: a,
  onEntered: s,
  onExited: c,
  enterDelay: u,
  exitDelay: y
}) {
  const p = er(), m = ln(), g = p.respectReducedMotion ? m : !1, [v, w] = Hr(g ? 0 : r), [k, j] = Hr(e ? "entered" : "exited"), E = dr(-1), R = dr(-1), O = dr(-1), M = (_) => {
    const F = _ ? i : a, N = _ ? s : c;
    window.clearTimeout(E.current);
    const W = g ? 0 : _ ? r : t;
    w(W), W === 0 ? (typeof F == "function" && F(), typeof N == "function" && N(), j(_ ? "entered" : "exited")) : O.current = requestAnimationFrame(() => {
      Ke.flushSync(() => {
        j(_ ? "pre-entering" : "pre-exiting");
      }), O.current = requestAnimationFrame(() => {
        typeof F == "function" && F(), j(_ ? "entering" : "exiting"), E.current = window.setTimeout(() => {
          typeof N == "function" && N(), j(_ ? "entered" : "exited");
        }, W);
      });
    });
  }, H = (_) => {
    if (window.clearTimeout(R.current), typeof (_ ? u : y) != "number") {
      M(_);
      return;
    }
    R.current = window.setTimeout(
      () => {
        M(_);
      },
      _ ? u : y
    );
  };
  return cn(() => {
    H(e);
  }, [e]), K(
    () => () => {
      window.clearTimeout(E.current), cancelAnimationFrame(O.current);
    },
    []
  ), {
    transitionDuration: v,
    transitionStatus: k,
    transitionTimingFunction: n || "ease"
  };
}
function we({
  keepMounted: r,
  transition: t = "fade",
  duration: n = 250,
  exitDuration: e = n,
  mounted: i,
  children: a,
  timingFunction: s = "ease",
  onExit: c,
  onEntered: u,
  onEnter: y,
  onExited: p,
  enterDelay: m,
  exitDelay: g
}) {
  const { transitionDuration: v, transitionStatus: w, transitionTimingFunction: k } = _o({
    mounted: i,
    exitDuration: e,
    duration: n,
    timingFunction: s,
    onExit: c,
    onEntered: u,
    onEnter: y,
    onExited: p,
    enterDelay: m,
    exitDelay: g
  });
  return v === 0 ? i ? /* @__PURE__ */ h.jsx(h.Fragment, { children: a({}) }) : r ? a({ display: "none" }) : null : w === "exited" ? r ? a({ display: "none" }) : null : /* @__PURE__ */ h.jsx(h.Fragment, { children: a(
    Ro({
      transition: t,
      duration: v,
      state: w,
      timingFunction: k
    })
  ) });
}
we.displayName = "@mantine/core/Transition";
var V = { root: "m_5ae2e3c", barsLoader: "m_7a2bd4cd", bar: "m_870bb79", "bars-loader-animation": "m_5d2b3b9d", dotsLoader: "m_4e3f22d7", dot: "m_870c4af", "loader-dots-animation": "m_aac34a1", ovalLoader: "m_b34414df", "oval-loader-animation": "m_f8e89c4b" };
const xe = U(({ className: r, ...t }, n) => /* @__PURE__ */ h.jsxs(D, { component: "span", className: rr(V.barsLoader, r), ...t, ref: n, children: [
  /* @__PURE__ */ h.jsx("span", { className: V.bar }),
  /* @__PURE__ */ h.jsx("span", { className: V.bar }),
  /* @__PURE__ */ h.jsx("span", { className: V.bar })
] }));
xe.displayName = "@mantine/core/Bars";
const Ce = U(({ className: r, ...t }, n) => /* @__PURE__ */ h.jsxs(D, { component: "span", className: rr(V.dotsLoader, r), ...t, ref: n, children: [
  /* @__PURE__ */ h.jsx("span", { className: V.dot }),
  /* @__PURE__ */ h.jsx("span", { className: V.dot }),
  /* @__PURE__ */ h.jsx("span", { className: V.dot })
] }));
Ce.displayName = "@mantine/core/Dots";
const Re = U(({ className: r, ...t }, n) => /* @__PURE__ */ h.jsx(D, { component: "span", className: rr(V.ovalLoader, r), ...t, ref: n }));
Re.displayName = "@mantine/core/Oval";
const _e = {
  bars: xe,
  oval: Re,
  dots: Ce
}, Eo = {
  loaders: _e,
  type: "oval"
}, To = (r, { size: t, color: n }) => ({
  root: {
    "--loader-size": Q(t, "loader-size"),
    "--loader-color": n ? dt(n, r) : void 0
  }
}), Gr = Ct((r, t) => {
  const n = Z("Loader", Eo, r), {
    size: e,
    color: i,
    type: a,
    vars: s,
    className: c,
    style: u,
    classNames: y,
    styles: p,
    unstyled: m,
    loaders: g,
    variant: v,
    children: w,
    ...k
  } = n, j = _r({
    name: "Loader",
    props: n,
    classes: V,
    className: c,
    style: u,
    classNames: y,
    styles: p,
    unstyled: m,
    vars: s,
    varsResolver: To
  });
  return w ? /* @__PURE__ */ h.jsx(D, { ...j("root"), ref: t, ...k, children: w }) : /* @__PURE__ */ h.jsx(
    D,
    {
      ...j("root"),
      ref: t,
      component: g[a],
      variant: v,
      size: e,
      ...k
    }
  );
});
Gr.defaultLoaders = _e;
Gr.classes = V;
Gr.displayName = "@mantine/core/Loader";
var pr = { root: "m_77c9d27d", inner: "m_80f1301b", label: "m_811560b9", section: "m_a74036a", loader: "m_a25b86ee", group: "m_80d6d844", groupSection: "m_70be2a01" };
const ee = {
  orientation: "horizontal"
}, ko = (r, { borderWidth: t }) => ({
  group: { "--button-border-width": l(t) }
}), _t = Ct((r, t) => {
  const n = Z("ButtonGroup", ee, r), {
    className: e,
    style: i,
    classNames: a,
    styles: s,
    unstyled: c,
    orientation: u,
    vars: y,
    borderWidth: p,
    variant: m,
    mod: g,
    ...v
  } = Z("ButtonGroup", ee, r), w = _r({
    name: "ButtonGroup",
    props: n,
    classes: pr,
    className: e,
    style: i,
    classNames: a,
    styles: s,
    unstyled: c,
    vars: y,
    varsResolver: ko,
    rootSelector: "group"
  });
  return /* @__PURE__ */ h.jsx(
    D,
    {
      ...w("group"),
      ref: t,
      variant: m,
      mod: [{ "data-orientation": u }, g],
      role: "group",
      ...v
    }
  );
});
_t.classes = pr;
_t.displayName = "@mantine/core/ButtonGroup";
const ne = {}, jo = (r, { radius: t, color: n, gradient: e, variant: i, autoContrast: a, size: s }) => {
  const c = r.variantColorResolver({
    color: n || r.primaryColor,
    theme: r,
    gradient: e,
    variant: i || "filled",
    autoContrast: a
  });
  return {
    groupSection: {
      "--section-height": Q(s, "section-height"),
      "--section-padding-x": Q(s, "section-padding-x"),
      "--section-fz": s != null && s.includes("compact") ? zr(s.replace("compact-", "")) : zr(s),
      "--section-radius": t === void 0 ? void 0 : ce(t),
      "--section-bg": n || i ? c.background : void 0,
      "--section-color": c.color,
      "--section-bd": n || i ? c.border : void 0
    }
  };
}, Et = Ct((r, t) => {
  const n = Z("ButtonGroupSection", ne, r), {
    className: e,
    style: i,
    classNames: a,
    styles: s,
    unstyled: c,
    vars: u,
    variant: y,
    gradient: p,
    radius: m,
    autoContrast: g,
    ...v
  } = Z("ButtonGroupSection", ne, r), w = _r({
    name: "ButtonGroupSection",
    props: n,
    classes: pr,
    className: e,
    style: i,
    classNames: a,
    styles: s,
    unstyled: c,
    vars: u,
    varsResolver: jo,
    rootSelector: "groupSection"
  });
  return /* @__PURE__ */ h.jsx(D, { ...w("groupSection"), ref: t, variant: y, ...v });
});
Et.classes = pr;
Et.displayName = "@mantine/core/ButtonGroupSection";
const Po = {
  in: { opacity: 1, transform: `translate(-50%, calc(-50% + ${l(1)}))` },
  out: { opacity: 0, transform: "translate(-50%, -200%)" },
  common: { transformOrigin: "center" },
  transitionProperty: "transform, opacity"
}, Oo = {}, No = (r, { radius: t, color: n, gradient: e, variant: i, size: a, justify: s, autoContrast: c }) => {
  const u = r.variantColorResolver({
    color: n || r.primaryColor,
    theme: r,
    gradient: e,
    variant: i || "filled",
    autoContrast: c
  });
  return {
    root: {
      "--button-justify": s,
      "--button-height": Q(a, "button-height"),
      "--button-padding-x": Q(a, "button-padding-x"),
      "--button-fz": a != null && a.includes("compact") ? zr(a.replace("compact-", "")) : zr(a),
      "--button-radius": t === void 0 ? void 0 : ce(t),
      "--button-bg": n || i ? u.background : void 0,
      "--button-hover": n || i ? u.hover : void 0,
      "--button-color": u.color,
      "--button-bd": n || i ? u.border : void 0,
      "--button-hover-color": n || i ? u.hoverColor : void 0
    }
  };
}, Er = $e((r, t) => {
  const n = Z("Button", Oo, r), {
    style: e,
    vars: i,
    className: a,
    color: s,
    disabled: c,
    children: u,
    leftSection: y,
    rightSection: p,
    fullWidth: m,
    variant: g,
    radius: v,
    loading: w,
    loaderProps: k,
    gradient: j,
    classNames: E,
    styles: R,
    unstyled: O,
    "data-disabled": M,
    autoContrast: H,
    mod: _,
    ...F
  } = n, N = _r({
    name: "Button",
    props: n,
    classes: pr,
    className: a,
    style: e,
    classNames: E,
    styles: R,
    unstyled: O,
    vars: i,
    varsResolver: No
  }), W = !!y, mr = !!p;
  return /* @__PURE__ */ h.jsxs(
    Rt,
    {
      ref: t,
      ...N("root", { active: !c && !w && !M }),
      unstyled: O,
      variant: g,
      disabled: c || w,
      mod: [
        {
          disabled: c || M,
          loading: w,
          block: m,
          "with-left-section": W,
          "with-right-section": mr
        },
        _
      ],
      ...F,
      children: [
        /* @__PURE__ */ h.jsx(we, { mounted: !!w, transition: Po, duration: 150, children: (yr) => /* @__PURE__ */ h.jsx(D, { component: "span", ...N("loader", { style: yr }), "aria-hidden": !0, children: /* @__PURE__ */ h.jsx(
          Gr,
          {
            color: "var(--button-color)",
            size: "calc(var(--button-height) / 1.8)",
            ...k
          }
        ) }) }),
        /* @__PURE__ */ h.jsxs("span", { ...N("inner"), children: [
          y && /* @__PURE__ */ h.jsx(D, { component: "span", ...N("section"), mod: { position: "left" }, children: y }),
          /* @__PURE__ */ h.jsx(D, { component: "span", mod: { loading: w }, ...N("label"), children: u }),
          p && /* @__PURE__ */ h.jsx(D, { component: "span", ...N("section"), mod: { position: "right" }, children: p })
        ] })
      ]
    }
  );
});
Er.classes = pr;
Er.displayName = "@mantine/core/Button";
Er.Group = _t;
Er.GroupSection = Et;
function Fo() {
  return /* @__PURE__ */ h.jsx(ye, { children: /* @__PURE__ */ h.jsx(Er, { children: "Hello from Mantine Component 2" }) });
}
export {
  Fo as default
};
