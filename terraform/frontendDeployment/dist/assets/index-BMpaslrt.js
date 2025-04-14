var tT = Object.defineProperty;
var zb = (e) => {
  throw TypeError(e);
};
var nT = (e, n, a) =>
  n in e
    ? tT(e, n, { enumerable: !0, configurable: !0, writable: !0, value: a })
    : (e[n] = a);
var un = (e, n, a) => nT(e, typeof n != "symbol" ? n + "" : n, a),
  xh = (e, n, a) => n.has(e) || zb("Cannot " + a);
var B = (e, n, a) => (
    xh(e, n, "read from private field"), a ? a.call(e) : n.get(e)
  ),
  Me = (e, n, a) =>
    n.has(e)
      ? zb("Cannot add the same private member more than once")
      : n instanceof WeakSet
      ? n.add(e)
      : n.set(e, a),
  ve = (e, n, a, i) => (
    xh(e, n, "write to private field"), i ? i.call(e, a) : n.set(e, a), a
  ),
  Pe = (e, n, a) => (xh(e, n, "access private method"), a);
var jc = (e, n, a, i) => ({
  set _(o) {
    ve(e, n, o, a);
  },
  get _() {
    return B(e, n, i);
  },
});
function rT(e, n) {
  for (var a = 0; a < n.length; a++) {
    const i = n[a];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const o in i)
        if (o !== "default" && !(o in e)) {
          const u = Object.getOwnPropertyDescriptor(i, o);
          u &&
            Object.defineProperty(
              e,
              o,
              u.get ? u : { enumerable: !0, get: () => i[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) i(o);
  new MutationObserver((o) => {
    for (const u of o)
      if (u.type === "childList")
        for (const f of u.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && i(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(o) {
    const u = {};
    return (
      o.integrity && (u.integrity = o.integrity),
      o.referrerPolicy && (u.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (u.credentials = "omit")
        : (u.credentials = "same-origin"),
      u
    );
  }
  function i(o) {
    if (o.ep) return;
    o.ep = !0;
    const u = a(o);
    fetch(o.href, u);
  }
})();
function nx(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Eh = { exports: {} },
  _l = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kb;
function aT() {
  if (kb) return _l;
  kb = 1;
  var e = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.fragment");
  function a(i, o, u) {
    var f = null;
    if (
      (u !== void 0 && (f = "" + u),
      o.key !== void 0 && (f = "" + o.key),
      "key" in o)
    ) {
      u = {};
      for (var d in o) d !== "key" && (u[d] = o[d]);
    } else u = o;
    return (
      (o = u.ref),
      { $$typeof: e, type: i, key: f, ref: o !== void 0 ? o : null, props: u }
    );
  }
  return (_l.Fragment = n), (_l.jsx = a), (_l.jsxs = a), _l;
}
var Bb;
function iT() {
  return Bb || ((Bb = 1), (Eh.exports = aT())), Eh.exports;
}
var U = iT(),
  Rh = { exports: {} },
  He = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ub;
function sT() {
  if (Ub) return He;
  Ub = 1;
  var e = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    u = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    d = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    h = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    y = Symbol.iterator;
  function x(k) {
    return k === null || typeof k != "object"
      ? null
      : ((k = (y && k[y]) || k["@@iterator"]),
        typeof k == "function" ? k : null);
  }
  var C = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    b = Object.assign,
    S = {};
  function w(k, ee, me) {
    (this.props = k),
      (this.context = ee),
      (this.refs = S),
      (this.updater = me || C);
  }
  (w.prototype.isReactComponent = {}),
    (w.prototype.setState = function (k, ee) {
      if (typeof k != "object" && typeof k != "function" && k != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, k, ee, "setState");
    }),
    (w.prototype.forceUpdate = function (k) {
      this.updater.enqueueForceUpdate(this, k, "forceUpdate");
    });
  function O() {}
  O.prototype = w.prototype;
  function _(k, ee, me) {
    (this.props = k),
      (this.context = ee),
      (this.refs = S),
      (this.updater = me || C);
  }
  var T = (_.prototype = new O());
  (T.constructor = _), b(T, w.prototype), (T.isPureReactComponent = !0);
  var D = Array.isArray,
    M = { H: null, A: null, T: null, S: null },
    $ = Object.prototype.hasOwnProperty;
  function L(k, ee, me, he, ce, be) {
    return (
      (me = be.ref),
      {
        $$typeof: e,
        type: k,
        key: ee,
        ref: me !== void 0 ? me : null,
        props: be,
      }
    );
  }
  function K(k, ee) {
    return L(k.type, ee, void 0, void 0, void 0, k.props);
  }
  function P(k) {
    return typeof k == "object" && k !== null && k.$$typeof === e;
  }
  function R(k) {
    var ee = { "=": "=0", ":": "=2" };
    return (
      "$" +
      k.replace(/[=:]/g, function (me) {
        return ee[me];
      })
    );
  }
  var V = /\/+/g;
  function Q(k, ee) {
    return typeof k == "object" && k !== null && k.key != null
      ? R("" + k.key)
      : ee.toString(36);
  }
  function J() {}
  function le(k) {
    switch (k.status) {
      case "fulfilled":
        return k.value;
      case "rejected":
        throw k.reason;
      default:
        switch (
          (typeof k.status == "string"
            ? k.then(J, J)
            : ((k.status = "pending"),
              k.then(
                function (ee) {
                  k.status === "pending" &&
                    ((k.status = "fulfilled"), (k.value = ee));
                },
                function (ee) {
                  k.status === "pending" &&
                    ((k.status = "rejected"), (k.reason = ee));
                }
              )),
          k.status)
        ) {
          case "fulfilled":
            return k.value;
          case "rejected":
            throw k.reason;
        }
    }
    throw k;
  }
  function ne(k, ee, me, he, ce) {
    var be = typeof k;
    (be === "undefined" || be === "boolean") && (k = null);
    var xe = !1;
    if (k === null) xe = !0;
    else
      switch (be) {
        case "bigint":
        case "string":
        case "number":
          xe = !0;
          break;
        case "object":
          switch (k.$$typeof) {
            case e:
            case n:
              xe = !0;
              break;
            case g:
              return (xe = k._init), ne(xe(k._payload), ee, me, he, ce);
          }
      }
    if (xe)
      return (
        (ce = ce(k)),
        (xe = he === "" ? "." + Q(k, 0) : he),
        D(ce)
          ? ((me = ""),
            xe != null && (me = xe.replace(V, "$&/") + "/"),
            ne(ce, ee, me, "", function (Ae) {
              return Ae;
            }))
          : ce != null &&
            (P(ce) &&
              (ce = K(
                ce,
                me +
                  (ce.key == null || (k && k.key === ce.key)
                    ? ""
                    : ("" + ce.key).replace(V, "$&/") + "/") +
                  xe
              )),
            ee.push(ce)),
        1
      );
    xe = 0;
    var $e = he === "" ? "." : he + ":";
    if (D(k))
      for (var Te = 0; Te < k.length; Te++)
        (he = k[Te]), (be = $e + Q(he, Te)), (xe += ne(he, ee, me, be, ce));
    else if (((Te = x(k)), typeof Te == "function"))
      for (k = Te.call(k), Te = 0; !(he = k.next()).done; )
        (he = he.value),
          (be = $e + Q(he, Te++)),
          (xe += ne(he, ee, me, be, ce));
    else if (be === "object") {
      if (typeof k.then == "function") return ne(le(k), ee, me, he, ce);
      throw (
        ((ee = String(k)),
        Error(
          "Objects are not valid as a React child (found: " +
            (ee === "[object Object]"
              ? "object with keys {" + Object.keys(k).join(", ") + "}"
              : ee) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return xe;
  }
  function F(k, ee, me) {
    if (k == null) return k;
    var he = [],
      ce = 0;
    return (
      ne(k, he, "", "", function (be) {
        return ee.call(me, be, ce++);
      }),
      he
    );
  }
  function ie(k) {
    if (k._status === -1) {
      var ee = k._result;
      (ee = ee()),
        ee.then(
          function (me) {
            (k._status === 0 || k._status === -1) &&
              ((k._status = 1), (k._result = me));
          },
          function (me) {
            (k._status === 0 || k._status === -1) &&
              ((k._status = 2), (k._result = me));
          }
        ),
        k._status === -1 && ((k._status = 0), (k._result = ee));
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var fe =
    typeof reportError == "function"
      ? reportError
      : function (k) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var ee = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof k == "object" &&
                k !== null &&
                typeof k.message == "string"
                  ? String(k.message)
                  : String(k),
              error: k,
            });
            if (!window.dispatchEvent(ee)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", k);
            return;
          }
          console.error(k);
        };
  function ue() {}
  return (
    (He.Children = {
      map: F,
      forEach: function (k, ee, me) {
        F(
          k,
          function () {
            ee.apply(this, arguments);
          },
          me
        );
      },
      count: function (k) {
        var ee = 0;
        return (
          F(k, function () {
            ee++;
          }),
          ee
        );
      },
      toArray: function (k) {
        return (
          F(k, function (ee) {
            return ee;
          }) || []
        );
      },
      only: function (k) {
        if (!P(k))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return k;
      },
    }),
    (He.Component = w),
    (He.Fragment = a),
    (He.Profiler = o),
    (He.PureComponent = _),
    (He.StrictMode = i),
    (He.Suspense = m),
    (He.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = M),
    (He.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (He.cache = function (k) {
      return function () {
        return k.apply(null, arguments);
      };
    }),
    (He.cloneElement = function (k, ee, me) {
      if (k == null)
        throw Error(
          "The argument must be a React element, but you passed " + k + "."
        );
      var he = b({}, k.props),
        ce = k.key,
        be = void 0;
      if (ee != null)
        for (xe in (ee.ref !== void 0 && (be = void 0),
        ee.key !== void 0 && (ce = "" + ee.key),
        ee))
          !$.call(ee, xe) ||
            xe === "key" ||
            xe === "__self" ||
            xe === "__source" ||
            (xe === "ref" && ee.ref === void 0) ||
            (he[xe] = ee[xe]);
      var xe = arguments.length - 2;
      if (xe === 1) he.children = me;
      else if (1 < xe) {
        for (var $e = Array(xe), Te = 0; Te < xe; Te++)
          $e[Te] = arguments[Te + 2];
        he.children = $e;
      }
      return L(k.type, ce, void 0, void 0, be, he);
    }),
    (He.createContext = function (k) {
      return (
        (k = {
          $$typeof: f,
          _currentValue: k,
          _currentValue2: k,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (k.Provider = k),
        (k.Consumer = { $$typeof: u, _context: k }),
        k
      );
    }),
    (He.createElement = function (k, ee, me) {
      var he,
        ce = {},
        be = null;
      if (ee != null)
        for (he in (ee.key !== void 0 && (be = "" + ee.key), ee))
          $.call(ee, he) &&
            he !== "key" &&
            he !== "__self" &&
            he !== "__source" &&
            (ce[he] = ee[he]);
      var xe = arguments.length - 2;
      if (xe === 1) ce.children = me;
      else if (1 < xe) {
        for (var $e = Array(xe), Te = 0; Te < xe; Te++)
          $e[Te] = arguments[Te + 2];
        ce.children = $e;
      }
      if (k && k.defaultProps)
        for (he in ((xe = k.defaultProps), xe))
          ce[he] === void 0 && (ce[he] = xe[he]);
      return L(k, be, void 0, void 0, null, ce);
    }),
    (He.createRef = function () {
      return { current: null };
    }),
    (He.forwardRef = function (k) {
      return { $$typeof: d, render: k };
    }),
    (He.isValidElement = P),
    (He.lazy = function (k) {
      return { $$typeof: g, _payload: { _status: -1, _result: k }, _init: ie };
    }),
    (He.memo = function (k, ee) {
      return { $$typeof: h, type: k, compare: ee === void 0 ? null : ee };
    }),
    (He.startTransition = function (k) {
      var ee = M.T,
        me = {};
      M.T = me;
      try {
        var he = k(),
          ce = M.S;
        ce !== null && ce(me, he),
          typeof he == "object" &&
            he !== null &&
            typeof he.then == "function" &&
            he.then(ue, fe);
      } catch (be) {
        fe(be);
      } finally {
        M.T = ee;
      }
    }),
    (He.unstable_useCacheRefresh = function () {
      return M.H.useCacheRefresh();
    }),
    (He.use = function (k) {
      return M.H.use(k);
    }),
    (He.useActionState = function (k, ee, me) {
      return M.H.useActionState(k, ee, me);
    }),
    (He.useCallback = function (k, ee) {
      return M.H.useCallback(k, ee);
    }),
    (He.useContext = function (k) {
      return M.H.useContext(k);
    }),
    (He.useDebugValue = function () {}),
    (He.useDeferredValue = function (k, ee) {
      return M.H.useDeferredValue(k, ee);
    }),
    (He.useEffect = function (k, ee) {
      return M.H.useEffect(k, ee);
    }),
    (He.useId = function () {
      return M.H.useId();
    }),
    (He.useImperativeHandle = function (k, ee, me) {
      return M.H.useImperativeHandle(k, ee, me);
    }),
    (He.useInsertionEffect = function (k, ee) {
      return M.H.useInsertionEffect(k, ee);
    }),
    (He.useLayoutEffect = function (k, ee) {
      return M.H.useLayoutEffect(k, ee);
    }),
    (He.useMemo = function (k, ee) {
      return M.H.useMemo(k, ee);
    }),
    (He.useOptimistic = function (k, ee) {
      return M.H.useOptimistic(k, ee);
    }),
    (He.useReducer = function (k, ee, me) {
      return M.H.useReducer(k, ee, me);
    }),
    (He.useRef = function (k) {
      return M.H.useRef(k);
    }),
    (He.useState = function (k) {
      return M.H.useState(k);
    }),
    (He.useSyncExternalStore = function (k, ee, me) {
      return M.H.useSyncExternalStore(k, ee, me);
    }),
    (He.useTransition = function () {
      return M.H.useTransition();
    }),
    (He.version = "19.0.0"),
    He
  );
}
var Lb;
function Qm() {
  return Lb || ((Lb = 1), (Rh.exports = sT())), Rh.exports;
}
var E = Qm();
const Ue = nx(E),
  em = rT({ __proto__: null, default: Ue }, [E]);
var Ch = { exports: {} },
  Dl = {},
  wh = { exports: {} },
  Th = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jb;
function oT() {
  return (
    jb ||
      ((jb = 1),
      (function (e) {
        function n(F, ie) {
          var fe = F.length;
          F.push(ie);
          e: for (; 0 < fe; ) {
            var ue = (fe - 1) >>> 1,
              k = F[ue];
            if (0 < o(k, ie)) (F[ue] = ie), (F[fe] = k), (fe = ue);
            else break e;
          }
        }
        function a(F) {
          return F.length === 0 ? null : F[0];
        }
        function i(F) {
          if (F.length === 0) return null;
          var ie = F[0],
            fe = F.pop();
          if (fe !== ie) {
            F[0] = fe;
            e: for (var ue = 0, k = F.length, ee = k >>> 1; ue < ee; ) {
              var me = 2 * (ue + 1) - 1,
                he = F[me],
                ce = me + 1,
                be = F[ce];
              if (0 > o(he, fe))
                ce < k && 0 > o(be, he)
                  ? ((F[ue] = be), (F[ce] = fe), (ue = ce))
                  : ((F[ue] = he), (F[me] = fe), (ue = me));
              else if (ce < k && 0 > o(be, fe))
                (F[ue] = be), (F[ce] = fe), (ue = ce);
              else break e;
            }
          }
          return ie;
        }
        function o(F, ie) {
          var fe = F.sortIndex - ie.sortIndex;
          return fe !== 0 ? fe : F.id - ie.id;
        }
        if (
          ((e.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var u = performance;
          e.unstable_now = function () {
            return u.now();
          };
        } else {
          var f = Date,
            d = f.now();
          e.unstable_now = function () {
            return f.now() - d;
          };
        }
        var m = [],
          h = [],
          g = 1,
          y = null,
          x = 3,
          C = !1,
          b = !1,
          S = !1,
          w = typeof setTimeout == "function" ? setTimeout : null,
          O = typeof clearTimeout == "function" ? clearTimeout : null,
          _ = typeof setImmediate < "u" ? setImmediate : null;
        function T(F) {
          for (var ie = a(h); ie !== null; ) {
            if (ie.callback === null) i(h);
            else if (ie.startTime <= F)
              i(h), (ie.sortIndex = ie.expirationTime), n(m, ie);
            else break;
            ie = a(h);
          }
        }
        function D(F) {
          if (((S = !1), T(F), !b))
            if (a(m) !== null) (b = !0), le();
            else {
              var ie = a(h);
              ie !== null && ne(D, ie.startTime - F);
            }
        }
        var M = !1,
          $ = -1,
          L = 5,
          K = -1;
        function P() {
          return !(e.unstable_now() - K < L);
        }
        function R() {
          if (M) {
            var F = e.unstable_now();
            K = F;
            var ie = !0;
            try {
              e: {
                (b = !1), S && ((S = !1), O($), ($ = -1)), (C = !0);
                var fe = x;
                try {
                  t: {
                    for (
                      T(F), y = a(m);
                      y !== null && !(y.expirationTime > F && P());

                    ) {
                      var ue = y.callback;
                      if (typeof ue == "function") {
                        (y.callback = null), (x = y.priorityLevel);
                        var k = ue(y.expirationTime <= F);
                        if (((F = e.unstable_now()), typeof k == "function")) {
                          (y.callback = k), T(F), (ie = !0);
                          break t;
                        }
                        y === a(m) && i(m), T(F);
                      } else i(m);
                      y = a(m);
                    }
                    if (y !== null) ie = !0;
                    else {
                      var ee = a(h);
                      ee !== null && ne(D, ee.startTime - F), (ie = !1);
                    }
                  }
                  break e;
                } finally {
                  (y = null), (x = fe), (C = !1);
                }
                ie = void 0;
              }
            } finally {
              ie ? V() : (M = !1);
            }
          }
        }
        var V;
        if (typeof _ == "function")
          V = function () {
            _(R);
          };
        else if (typeof MessageChannel < "u") {
          var Q = new MessageChannel(),
            J = Q.port2;
          (Q.port1.onmessage = R),
            (V = function () {
              J.postMessage(null);
            });
        } else
          V = function () {
            w(R, 0);
          };
        function le() {
          M || ((M = !0), V());
        }
        function ne(F, ie) {
          $ = w(function () {
            F(e.unstable_now());
          }, ie);
        }
        (e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (F) {
            F.callback = null;
          }),
          (e.unstable_continueExecution = function () {
            b || C || ((b = !0), le());
          }),
          (e.unstable_forceFrameRate = function (F) {
            0 > F || 125 < F
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (L = 0 < F ? Math.floor(1e3 / F) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (e.unstable_getFirstCallbackNode = function () {
            return a(m);
          }),
          (e.unstable_next = function (F) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var ie = 3;
                break;
              default:
                ie = x;
            }
            var fe = x;
            x = ie;
            try {
              return F();
            } finally {
              x = fe;
            }
          }),
          (e.unstable_pauseExecution = function () {}),
          (e.unstable_requestPaint = function () {}),
          (e.unstable_runWithPriority = function (F, ie) {
            switch (F) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                F = 3;
            }
            var fe = x;
            x = F;
            try {
              return ie();
            } finally {
              x = fe;
            }
          }),
          (e.unstable_scheduleCallback = function (F, ie, fe) {
            var ue = e.unstable_now();
            switch (
              (typeof fe == "object" && fe !== null
                ? ((fe = fe.delay),
                  (fe = typeof fe == "number" && 0 < fe ? ue + fe : ue))
                : (fe = ue),
              F)
            ) {
              case 1:
                var k = -1;
                break;
              case 2:
                k = 250;
                break;
              case 5:
                k = 1073741823;
                break;
              case 4:
                k = 1e4;
                break;
              default:
                k = 5e3;
            }
            return (
              (k = fe + k),
              (F = {
                id: g++,
                callback: ie,
                priorityLevel: F,
                startTime: fe,
                expirationTime: k,
                sortIndex: -1,
              }),
              fe > ue
                ? ((F.sortIndex = fe),
                  n(h, F),
                  a(m) === null &&
                    F === a(h) &&
                    (S ? (O($), ($ = -1)) : (S = !0), ne(D, fe - ue)))
                : ((F.sortIndex = k), n(m, F), b || C || ((b = !0), le())),
              F
            );
          }),
          (e.unstable_shouldYield = P),
          (e.unstable_wrapCallback = function (F) {
            var ie = x;
            return function () {
              var fe = x;
              x = ie;
              try {
                return F.apply(this, arguments);
              } finally {
                x = fe;
              }
            };
          });
      })(Th)),
    Th
  );
}
var $b;
function lT() {
  return $b || (($b = 1), (wh.exports = oT())), wh.exports;
}
var Ah = { exports: {} },
  pn = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hb;
function uT() {
  if (Hb) return pn;
  Hb = 1;
  var e = Qm();
  function n(m) {
    var h = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        h += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return (
      "Minified React error #" +
      m +
      "; visit " +
      h +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function a() {}
  var i = {
      d: {
        f: a,
        r: function () {
          throw Error(n(522));
        },
        D: a,
        C: a,
        L: a,
        m: a,
        X: a,
        S: a,
        M: a,
      },
      p: 0,
      findDOMNode: null,
    },
    o = Symbol.for("react.portal");
  function u(m, h, g) {
    var y =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: y == null ? null : "" + y,
      children: m,
      containerInfo: h,
      implementation: g,
    };
  }
  var f = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(m, h) {
    if (m === "font") return "";
    if (typeof h == "string") return h === "use-credentials" ? h : "";
  }
  return (
    (pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    (pn.createPortal = function (m, h) {
      var g =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!h || (h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11))
        throw Error(n(299));
      return u(m, h, null, g);
    }),
    (pn.flushSync = function (m) {
      var h = f.T,
        g = i.p;
      try {
        if (((f.T = null), (i.p = 2), m)) return m();
      } finally {
        (f.T = h), (i.p = g), i.d.f();
      }
    }),
    (pn.preconnect = function (m, h) {
      typeof m == "string" &&
        (h
          ? ((h = h.crossOrigin),
            (h =
              typeof h == "string"
                ? h === "use-credentials"
                  ? h
                  : ""
                : void 0))
          : (h = null),
        i.d.C(m, h));
    }),
    (pn.prefetchDNS = function (m) {
      typeof m == "string" && i.d.D(m);
    }),
    (pn.preinit = function (m, h) {
      if (typeof m == "string" && h && typeof h.as == "string") {
        var g = h.as,
          y = d(g, h.crossOrigin),
          x = typeof h.integrity == "string" ? h.integrity : void 0,
          C = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
        g === "style"
          ? i.d.S(m, typeof h.precedence == "string" ? h.precedence : void 0, {
              crossOrigin: y,
              integrity: x,
              fetchPriority: C,
            })
          : g === "script" &&
            i.d.X(m, {
              crossOrigin: y,
              integrity: x,
              fetchPriority: C,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
      }
    }),
    (pn.preinitModule = function (m, h) {
      if (typeof m == "string")
        if (typeof h == "object" && h !== null) {
          if (h.as == null || h.as === "script") {
            var g = d(h.as, h.crossOrigin);
            i.d.M(m, {
              crossOrigin: g,
              integrity: typeof h.integrity == "string" ? h.integrity : void 0,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
          }
        } else h == null && i.d.M(m);
    }),
    (pn.preload = function (m, h) {
      if (
        typeof m == "string" &&
        typeof h == "object" &&
        h !== null &&
        typeof h.as == "string"
      ) {
        var g = h.as,
          y = d(g, h.crossOrigin);
        i.d.L(m, g, {
          crossOrigin: y,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          nonce: typeof h.nonce == "string" ? h.nonce : void 0,
          type: typeof h.type == "string" ? h.type : void 0,
          fetchPriority:
            typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
          referrerPolicy:
            typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
          imageSrcSet:
            typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
          imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
          media: typeof h.media == "string" ? h.media : void 0,
        });
      }
    }),
    (pn.preloadModule = function (m, h) {
      if (typeof m == "string")
        if (h) {
          var g = d(h.as, h.crossOrigin);
          i.d.m(m, {
            as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
            crossOrigin: g,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          });
        } else i.d.m(m);
    }),
    (pn.requestFormReset = function (m) {
      i.d.r(m);
    }),
    (pn.unstable_batchedUpdates = function (m, h) {
      return m(h);
    }),
    (pn.useFormState = function (m, h, g) {
      return f.H.useFormState(m, h, g);
    }),
    (pn.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (pn.version = "19.0.0"),
    pn
  );
}
var Pb;
function rx() {
  if (Pb) return Ah.exports;
  Pb = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (n) {
        console.error(n);
      }
  }
  return e(), (Ah.exports = uT()), Ah.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fb;
function cT() {
  if (Fb) return Dl;
  Fb = 1;
  var e = lT(),
    n = Qm(),
    a = rx();
  function i(t) {
    var r = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      r += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var s = 2; s < arguments.length; s++)
        r += "&args[]=" + encodeURIComponent(arguments[s]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      r +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  var u = Symbol.for("react.element"),
    f = Symbol.for("react.transitional.element"),
    d = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    h = Symbol.for("react.strict_mode"),
    g = Symbol.for("react.profiler"),
    y = Symbol.for("react.provider"),
    x = Symbol.for("react.consumer"),
    C = Symbol.for("react.context"),
    b = Symbol.for("react.forward_ref"),
    S = Symbol.for("react.suspense"),
    w = Symbol.for("react.suspense_list"),
    O = Symbol.for("react.memo"),
    _ = Symbol.for("react.lazy"),
    T = Symbol.for("react.offscreen"),
    D = Symbol.for("react.memo_cache_sentinel"),
    M = Symbol.iterator;
  function $(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (M && t[M]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var L = Symbol.for("react.client.reference");
  function K(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === L ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case m:
        return "Fragment";
      case d:
        return "Portal";
      case g:
        return "Profiler";
      case h:
        return "StrictMode";
      case S:
        return "Suspense";
      case w:
        return "SuspenseList";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case C:
          return (t.displayName || "Context") + ".Provider";
        case x:
          return (t._context.displayName || "Context") + ".Consumer";
        case b:
          var r = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = r.displayName || r.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case O:
          return (
            (r = t.displayName || null), r !== null ? r : K(t.type) || "Memo"
          );
        case _:
          (r = t._payload), (t = t._init);
          try {
            return K(t(r));
          } catch {}
      }
    return null;
  }
  var P = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    R = Object.assign,
    V,
    Q;
  function J(t) {
    if (V === void 0)
      try {
        throw Error();
      } catch (s) {
        var r = s.stack.trim().match(/\n( *(at )?)/);
        (V = (r && r[1]) || ""),
          (Q =
            -1 <
            s.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < s.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      V +
      t +
      Q
    );
  }
  var le = !1;
  function ne(t, r) {
    if (!t || le) return "";
    le = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (r) {
              var oe = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(oe.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(oe, []);
                } catch (re) {
                  var Y = re;
                }
                Reflect.construct(t, [], oe);
              } else {
                try {
                  oe.call();
                } catch (re) {
                  Y = re;
                }
                t.call(oe.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (re) {
                Y = re;
              }
              (oe = t()) &&
                typeof oe.catch == "function" &&
                oe.catch(function () {});
            }
          } catch (re) {
            if (re && Y && typeof re.stack == "string")
              return [re.stack, Y.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      c &&
        c.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var p = l.DetermineComponentFrameRoot(),
        v = p[0],
        A = p[1];
      if (v && A) {
        var N = v.split(`
`),
          H = A.split(`
`);
        for (
          c = l = 0;
          l < N.length && !N[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; c < H.length && !H[c].includes("DetermineComponentFrameRoot"); )
          c++;
        if (l === N.length || c === H.length)
          for (
            l = N.length - 1, c = H.length - 1;
            1 <= l && 0 <= c && N[l] !== H[c];

          )
            c--;
        for (; 1 <= l && 0 <= c; l--, c--)
          if (N[l] !== H[c]) {
            if (l !== 1 || c !== 1)
              do
                if ((l--, c--, 0 > c || N[l] !== H[c])) {
                  var ae =
                    `
` + N[l].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      ae.includes("<anonymous>") &&
                      (ae = ae.replace("<anonymous>", t.displayName)),
                    ae
                  );
                }
              while (1 <= l && 0 <= c);
            break;
          }
      }
    } finally {
      (le = !1), (Error.prepareStackTrace = s);
    }
    return (s = t ? t.displayName || t.name : "") ? J(s) : "";
  }
  function F(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return J(t.type);
      case 16:
        return J("Lazy");
      case 13:
        return J("Suspense");
      case 19:
        return J("SuspenseList");
      case 0:
      case 15:
        return (t = ne(t.type, !1)), t;
      case 11:
        return (t = ne(t.type.render, !1)), t;
      case 1:
        return (t = ne(t.type, !0)), t;
      default:
        return "";
    }
  }
  function ie(t) {
    try {
      var r = "";
      do (r += F(t)), (t = t.return);
      while (t);
      return r;
    } catch (s) {
      return (
        `
Error generating stack: ` +
        s.message +
        `
` +
        s.stack
      );
    }
  }
  function fe(t) {
    var r = t,
      s = t;
    if (t.alternate) for (; r.return; ) r = r.return;
    else {
      t = r;
      do (r = t), r.flags & 4098 && (s = r.return), (t = r.return);
      while (t);
    }
    return r.tag === 3 ? s : null;
  }
  function ue(t) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        (r === null && ((t = t.alternate), t !== null && (r = t.memoizedState)),
        r !== null)
      )
        return r.dehydrated;
    }
    return null;
  }
  function k(t) {
    if (fe(t) !== t) throw Error(i(188));
  }
  function ee(t) {
    var r = t.alternate;
    if (!r) {
      if (((r = fe(t)), r === null)) throw Error(i(188));
      return r !== t ? null : t;
    }
    for (var s = t, l = r; ; ) {
      var c = s.return;
      if (c === null) break;
      var p = c.alternate;
      if (p === null) {
        if (((l = c.return), l !== null)) {
          s = l;
          continue;
        }
        break;
      }
      if (c.child === p.child) {
        for (p = c.child; p; ) {
          if (p === s) return k(c), t;
          if (p === l) return k(c), r;
          p = p.sibling;
        }
        throw Error(i(188));
      }
      if (s.return !== l.return) (s = c), (l = p);
      else {
        for (var v = !1, A = c.child; A; ) {
          if (A === s) {
            (v = !0), (s = c), (l = p);
            break;
          }
          if (A === l) {
            (v = !0), (l = c), (s = p);
            break;
          }
          A = A.sibling;
        }
        if (!v) {
          for (A = p.child; A; ) {
            if (A === s) {
              (v = !0), (s = p), (l = c);
              break;
            }
            if (A === l) {
              (v = !0), (l = p), (s = c);
              break;
            }
            A = A.sibling;
          }
          if (!v) throw Error(i(189));
        }
      }
      if (s.alternate !== l) throw Error(i(190));
    }
    if (s.tag !== 3) throw Error(i(188));
    return s.stateNode.current === s ? t : r;
  }
  function me(t) {
    var r = t.tag;
    if (r === 5 || r === 26 || r === 27 || r === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((r = me(t)), r !== null)) return r;
      t = t.sibling;
    }
    return null;
  }
  var he = Array.isArray,
    ce = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    be = { pending: !1, data: null, method: null, action: null },
    xe = [],
    $e = -1;
  function Te(t) {
    return { current: t };
  }
  function Ae(t) {
    0 > $e || ((t.current = xe[$e]), (xe[$e] = null), $e--);
  }
  function Se(t, r) {
    $e++, (xe[$e] = t.current), (t.current = r);
  }
  var ke = Te(null),
    _e = Te(null),
    We = Te(null),
    Le = Te(null);
  function rt(t, r) {
    switch ((Se(We, r), Se(_e, t), Se(ke, null), (t = r.nodeType), t)) {
      case 9:
      case 11:
        r = (r = r.documentElement) && (r = r.namespaceURI) ? lb(r) : 0;
        break;
      default:
        if (
          ((t = t === 8 ? r.parentNode : r),
          (r = t.tagName),
          (t = t.namespaceURI))
        )
          (t = lb(t)), (r = ub(t, r));
        else
          switch (r) {
            case "svg":
              r = 1;
              break;
            case "math":
              r = 2;
              break;
            default:
              r = 0;
          }
    }
    Ae(ke), Se(ke, r);
  }
  function Ut() {
    Ae(ke), Ae(_e), Ae(We);
  }
  function Ft(t) {
    t.memoizedState !== null && Se(Le, t);
    var r = ke.current,
      s = ub(r, t.type);
    r !== s && (Se(_e, t), Se(ke, s));
  }
  function z(t) {
    _e.current === t && (Ae(ke), Ae(_e)),
      Le.current === t && (Ae(Le), (wl._currentValue = be));
  }
  var G = Object.prototype.hasOwnProperty,
    X = e.unstable_scheduleCallback,
    de = e.unstable_cancelCallback,
    Z = e.unstable_shouldYield,
    pe = e.unstable_requestPaint,
    ge = e.unstable_now,
    ze = e.unstable_getCurrentPriorityLevel,
    dt = e.unstable_ImmediatePriority,
    pt = e.unstable_UserBlockingPriority,
    qt = e.unstable_NormalPriority,
    wr = e.unstable_LowPriority,
    Cn = e.unstable_IdlePriority,
    at = e.log,
    Tr = e.unstable_setDisableYieldValue,
    wn = null,
    Jt = null;
  function Oe(t) {
    if (Jt && typeof Jt.onCommitFiberRoot == "function")
      try {
        Jt.onCommitFiberRoot(wn, t, void 0, (t.current.flags & 128) === 128);
      } catch {}
  }
  function Ke(t) {
    if (
      (typeof at == "function" && Tr(t),
      Jt && typeof Jt.setStrictMode == "function")
    )
      try {
        Jt.setStrictMode(wn, t);
      } catch {}
  }
  var et = Math.clz32 ? Math.clz32 : FR,
    wa = Math.log,
    Au = Math.LN2;
  function FR(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((wa(t) / Au) | 0)) | 0;
  }
  var Ou = 128,
    Mu = 4194304;
  function pi(t) {
    var r = t & 42;
    if (r !== 0) return r;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function _u(t, r) {
    var s = t.pendingLanes;
    if (s === 0) return 0;
    var l = 0,
      c = t.suspendedLanes,
      p = t.pingedLanes,
      v = t.warmLanes;
    t = t.finishedLanes !== 0;
    var A = s & 134217727;
    return (
      A !== 0
        ? ((s = A & ~c),
          s !== 0
            ? (l = pi(s))
            : ((p &= A),
              p !== 0
                ? (l = pi(p))
                : t || ((v = A & ~v), v !== 0 && (l = pi(v)))))
        : ((A = s & ~c),
          A !== 0
            ? (l = pi(A))
            : p !== 0
            ? (l = pi(p))
            : t || ((v = s & ~v), v !== 0 && (l = pi(v)))),
      l === 0
        ? 0
        : r !== 0 &&
          r !== l &&
          !(r & c) &&
          ((c = l & -l),
          (v = r & -r),
          c >= v || (c === 32 && (v & 4194176) !== 0))
        ? r
        : l
    );
  }
  function Bo(t, r) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & r) === 0;
  }
  function qR(t, r) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
        return r + 250;
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ey() {
    var t = Ou;
    return (Ou <<= 1), !(Ou & 4194176) && (Ou = 128), t;
  }
  function ty() {
    var t = Mu;
    return (Mu <<= 1), !(Mu & 62914560) && (Mu = 4194304), t;
  }
  function gd(t) {
    for (var r = [], s = 0; 31 > s; s++) r.push(t);
    return r;
  }
  function Uo(t, r) {
    (t.pendingLanes |= r),
      r !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function VR(t, r, s, l, c, p) {
    var v = t.pendingLanes;
    (t.pendingLanes = s),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= s),
      (t.entangledLanes &= s),
      (t.errorRecoveryDisabledLanes &= s),
      (t.shellSuspendCounter = 0);
    var A = t.entanglements,
      N = t.expirationTimes,
      H = t.hiddenUpdates;
    for (s = v & ~s; 0 < s; ) {
      var ae = 31 - et(s),
        oe = 1 << ae;
      (A[ae] = 0), (N[ae] = -1);
      var Y = H[ae];
      if (Y !== null)
        for (H[ae] = null, ae = 0; ae < Y.length; ae++) {
          var re = Y[ae];
          re !== null && (re.lane &= -536870913);
        }
      s &= ~oe;
    }
    l !== 0 && ny(t, l, 0),
      p !== 0 && c === 0 && t.tag !== 0 && (t.suspendedLanes |= p & ~(v & ~r));
  }
  function ny(t, r, s) {
    (t.pendingLanes |= r), (t.suspendedLanes &= ~r);
    var l = 31 - et(r);
    (t.entangledLanes |= r),
      (t.entanglements[l] = t.entanglements[l] | 1073741824 | (s & 4194218));
  }
  function ry(t, r) {
    var s = (t.entangledLanes |= r);
    for (t = t.entanglements; s; ) {
      var l = 31 - et(s),
        c = 1 << l;
      (c & r) | (t[l] & r) && (t[l] |= r), (s &= ~c);
    }
  }
  function ay(t) {
    return (
      (t &= -t), 2 < t ? (8 < t ? (t & 134217727 ? 32 : 268435456) : 8) : 2
    );
  }
  function iy() {
    var t = ce.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Ab(t.type));
  }
  function GR(t, r) {
    var s = ce.p;
    try {
      return (ce.p = t), r();
    } finally {
      ce.p = s;
    }
  }
  var Ta = Math.random().toString(36).slice(2),
    fn = "__reactFiber$" + Ta,
    Tn = "__reactProps$" + Ta,
    is = "__reactContainer$" + Ta,
    yd = "__reactEvents$" + Ta,
    IR = "__reactListeners$" + Ta,
    YR = "__reactHandles$" + Ta,
    sy = "__reactResources$" + Ta,
    Lo = "__reactMarker$" + Ta;
  function vd(t) {
    delete t[fn], delete t[Tn], delete t[yd], delete t[IR], delete t[YR];
  }
  function hi(t) {
    var r = t[fn];
    if (r) return r;
    for (var s = t.parentNode; s; ) {
      if ((r = s[is] || s[fn])) {
        if (
          ((s = r.alternate),
          r.child !== null || (s !== null && s.child !== null))
        )
          for (t = db(t); t !== null; ) {
            if ((s = t[fn])) return s;
            t = db(t);
          }
        return r;
      }
      (t = s), (s = t.parentNode);
    }
    return null;
  }
  function ss(t) {
    if ((t = t[fn] || t[is])) {
      var r = t.tag;
      if (r === 5 || r === 6 || r === 13 || r === 26 || r === 27 || r === 3)
        return t;
    }
    return null;
  }
  function jo(t) {
    var r = t.tag;
    if (r === 5 || r === 26 || r === 27 || r === 6) return t.stateNode;
    throw Error(i(33));
  }
  function os(t) {
    var r = t[sy];
    return (
      r ||
        (r = t[sy] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      r
    );
  }
  function en(t) {
    t[Lo] = !0;
  }
  var oy = new Set(),
    ly = {};
  function mi(t, r) {
    ls(t, r), ls(t + "Capture", r);
  }
  function ls(t, r) {
    for (ly[t] = r, t = 0; t < r.length; t++) oy.add(r[t]);
  }
  var Xr = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    QR = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    uy = {},
    cy = {};
  function KR(t) {
    return G.call(cy, t)
      ? !0
      : G.call(uy, t)
      ? !1
      : QR.test(t)
      ? (cy[t] = !0)
      : ((uy[t] = !0), !1);
  }
  function Du(t, r, s) {
    if (KR(r))
      if (s === null) t.removeAttribute(r);
      else {
        switch (typeof s) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(r);
            return;
          case "boolean":
            var l = r.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              t.removeAttribute(r);
              return;
            }
        }
        t.setAttribute(r, "" + s);
      }
  }
  function Nu(t, r, s) {
    if (s === null) t.removeAttribute(r);
    else {
      switch (typeof s) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(r);
          return;
      }
      t.setAttribute(r, "" + s);
    }
  }
  function Wr(t, r, s, l) {
    if (l === null) t.removeAttribute(s);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(s);
          return;
      }
      t.setAttributeNS(r, s, "" + l);
    }
  }
  function Gn(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function fy(t) {
    var r = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (r === "checkbox" || r === "radio")
    );
  }
  function XR(t) {
    var r = fy(t) ? "checked" : "value",
      s = Object.getOwnPropertyDescriptor(t.constructor.prototype, r),
      l = "" + t[r];
    if (
      !t.hasOwnProperty(r) &&
      typeof s < "u" &&
      typeof s.get == "function" &&
      typeof s.set == "function"
    ) {
      var c = s.get,
        p = s.set;
      return (
        Object.defineProperty(t, r, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (v) {
            (l = "" + v), p.call(this, v);
          },
        }),
        Object.defineProperty(t, r, { enumerable: s.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (v) {
            l = "" + v;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[r];
          },
        }
      );
    }
  }
  function zu(t) {
    t._valueTracker || (t._valueTracker = XR(t));
  }
  function dy(t) {
    if (!t) return !1;
    var r = t._valueTracker;
    if (!r) return !0;
    var s = r.getValue(),
      l = "";
    return (
      t && (l = fy(t) ? (t.checked ? "true" : "false") : t.value),
      (t = l),
      t !== s ? (r.setValue(t), !0) : !1
    );
  }
  function ku(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var WR = /[\n"\\]/g;
  function In(t) {
    return t.replace(WR, function (r) {
      return "\\" + r.charCodeAt(0).toString(16) + " ";
    });
  }
  function bd(t, r, s, l, c, p, v, A) {
    (t.name = ""),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (t.type = v)
        : t.removeAttribute("type"),
      r != null
        ? v === "number"
          ? ((r === 0 && t.value === "") || t.value != r) &&
            (t.value = "" + Gn(r))
          : t.value !== "" + Gn(r) && (t.value = "" + Gn(r))
        : (v !== "submit" && v !== "reset") || t.removeAttribute("value"),
      r != null
        ? Sd(t, v, Gn(r))
        : s != null
        ? Sd(t, v, Gn(s))
        : l != null && t.removeAttribute("value"),
      c == null && p != null && (t.defaultChecked = !!p),
      c != null &&
        (t.checked = c && typeof c != "function" && typeof c != "symbol"),
      A != null &&
      typeof A != "function" &&
      typeof A != "symbol" &&
      typeof A != "boolean"
        ? (t.name = "" + Gn(A))
        : t.removeAttribute("name");
  }
  function py(t, r, s, l, c, p, v, A) {
    if (
      (p != null &&
        typeof p != "function" &&
        typeof p != "symbol" &&
        typeof p != "boolean" &&
        (t.type = p),
      r != null || s != null)
    ) {
      if (!((p !== "submit" && p !== "reset") || r != null)) return;
      (s = s != null ? "" + Gn(s) : ""),
        (r = r != null ? "" + Gn(r) : s),
        A || r === t.value || (t.value = r),
        (t.defaultValue = r);
    }
    (l = l ?? c),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (t.checked = A ? t.checked : !!l),
      (t.defaultChecked = !!l),
      v != null &&
        typeof v != "function" &&
        typeof v != "symbol" &&
        typeof v != "boolean" &&
        (t.name = v);
  }
  function Sd(t, r, s) {
    (r === "number" && ku(t.ownerDocument) === t) ||
      t.defaultValue === "" + s ||
      (t.defaultValue = "" + s);
  }
  function us(t, r, s, l) {
    if (((t = t.options), r)) {
      r = {};
      for (var c = 0; c < s.length; c++) r["$" + s[c]] = !0;
      for (s = 0; s < t.length; s++)
        (c = r.hasOwnProperty("$" + t[s].value)),
          t[s].selected !== c && (t[s].selected = c),
          c && l && (t[s].defaultSelected = !0);
    } else {
      for (s = "" + Gn(s), r = null, c = 0; c < t.length; c++) {
        if (t[c].value === s) {
          (t[c].selected = !0), l && (t[c].defaultSelected = !0);
          return;
        }
        r !== null || t[c].disabled || (r = t[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function hy(t, r, s) {
    if (
      r != null &&
      ((r = "" + Gn(r)), r !== t.value && (t.value = r), s == null)
    ) {
      t.defaultValue !== r && (t.defaultValue = r);
      return;
    }
    t.defaultValue = s != null ? "" + Gn(s) : "";
  }
  function my(t, r, s, l) {
    if (r == null) {
      if (l != null) {
        if (s != null) throw Error(i(92));
        if (he(l)) {
          if (1 < l.length) throw Error(i(93));
          l = l[0];
        }
        s = l;
      }
      s == null && (s = ""), (r = s);
    }
    (s = Gn(r)),
      (t.defaultValue = s),
      (l = t.textContent),
      l === s && l !== "" && l !== null && (t.value = l);
  }
  function cs(t, r) {
    if (r) {
      var s = t.firstChild;
      if (s && s === t.lastChild && s.nodeType === 3) {
        s.nodeValue = r;
        return;
      }
    }
    t.textContent = r;
  }
  var ZR = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function gy(t, r, s) {
    var l = r.indexOf("--") === 0;
    s == null || typeof s == "boolean" || s === ""
      ? l
        ? t.setProperty(r, "")
        : r === "float"
        ? (t.cssFloat = "")
        : (t[r] = "")
      : l
      ? t.setProperty(r, s)
      : typeof s != "number" || s === 0 || ZR.has(r)
      ? r === "float"
        ? (t.cssFloat = s)
        : (t[r] = ("" + s).trim())
      : (t[r] = s + "px");
  }
  function yy(t, r, s) {
    if (r != null && typeof r != "object") throw Error(i(62));
    if (((t = t.style), s != null)) {
      for (var l in s)
        !s.hasOwnProperty(l) ||
          (r != null && r.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? t.setProperty(l, "")
            : l === "float"
            ? (t.cssFloat = "")
            : (t[l] = ""));
      for (var c in r)
        (l = r[c]), r.hasOwnProperty(c) && s[c] !== l && gy(t, c, l);
    } else for (var p in r) r.hasOwnProperty(p) && gy(t, p, r[p]);
  }
  function xd(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var JR = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    eC =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Bu(t) {
    return eC.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var Ed = null;
  function Rd(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var fs = null,
    ds = null;
  function vy(t) {
    var r = ss(t);
    if (r && (t = r.stateNode)) {
      var s = t[Tn] || null;
      e: switch (((t = r.stateNode), r.type)) {
        case "input":
          if (
            (bd(
              t,
              s.value,
              s.defaultValue,
              s.defaultValue,
              s.checked,
              s.defaultChecked,
              s.type,
              s.name
            ),
            (r = s.name),
            s.type === "radio" && r != null)
          ) {
            for (s = t; s.parentNode; ) s = s.parentNode;
            for (
              s = s.querySelectorAll(
                'input[name="' + In("" + r) + '"][type="radio"]'
              ),
                r = 0;
              r < s.length;
              r++
            ) {
              var l = s[r];
              if (l !== t && l.form === t.form) {
                var c = l[Tn] || null;
                if (!c) throw Error(i(90));
                bd(
                  l,
                  c.value,
                  c.defaultValue,
                  c.defaultValue,
                  c.checked,
                  c.defaultChecked,
                  c.type,
                  c.name
                );
              }
            }
            for (r = 0; r < s.length; r++)
              (l = s[r]), l.form === t.form && dy(l);
          }
          break e;
        case "textarea":
          hy(t, s.value, s.defaultValue);
          break e;
        case "select":
          (r = s.value), r != null && us(t, !!s.multiple, r, !1);
      }
    }
  }
  var Cd = !1;
  function by(t, r, s) {
    if (Cd) return t(r, s);
    Cd = !0;
    try {
      var l = t(r);
      return l;
    } finally {
      if (
        ((Cd = !1),
        (fs !== null || ds !== null) &&
          (vc(), fs && ((r = fs), (t = ds), (ds = fs = null), vy(r), t)))
      )
        for (r = 0; r < t.length; r++) vy(t[r]);
    }
  }
  function $o(t, r) {
    var s = t.stateNode;
    if (s === null) return null;
    var l = s[Tn] || null;
    if (l === null) return null;
    s = l[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) ||
          ((t = t.type),
          (l = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !l);
        break e;
      default:
        t = !1;
    }
    if (t) return null;
    if (s && typeof s != "function") throw Error(i(231, r, typeof s));
    return s;
  }
  var wd = !1;
  if (Xr)
    try {
      var Ho = {};
      Object.defineProperty(Ho, "passive", {
        get: function () {
          wd = !0;
        },
      }),
        window.addEventListener("test", Ho, Ho),
        window.removeEventListener("test", Ho, Ho);
    } catch {
      wd = !1;
    }
  var Aa = null,
    Td = null,
    Uu = null;
  function Sy() {
    if (Uu) return Uu;
    var t,
      r = Td,
      s = r.length,
      l,
      c = "value" in Aa ? Aa.value : Aa.textContent,
      p = c.length;
    for (t = 0; t < s && r[t] === c[t]; t++);
    var v = s - t;
    for (l = 1; l <= v && r[s - l] === c[p - l]; l++);
    return (Uu = c.slice(t, 1 < l ? 1 - l : void 0));
  }
  function Lu(t) {
    var r = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && r === 13 && (t = 13))
        : (t = r),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function ju() {
    return !0;
  }
  function xy() {
    return !1;
  }
  function An(t) {
    function r(s, l, c, p, v) {
      (this._reactName = s),
        (this._targetInst = c),
        (this.type = l),
        (this.nativeEvent = p),
        (this.target = v),
        (this.currentTarget = null);
      for (var A in t)
        t.hasOwnProperty(A) && ((s = t[A]), (this[A] = s ? s(p) : p[A]));
      return (
        (this.isDefaultPrevented = (
          p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1
        )
          ? ju
          : xy),
        (this.isPropagationStopped = xy),
        this
      );
    }
    return (
      R(r.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var s = this.nativeEvent;
          s &&
            (s.preventDefault
              ? s.preventDefault()
              : typeof s.returnValue != "unknown" && (s.returnValue = !1),
            (this.isDefaultPrevented = ju));
        },
        stopPropagation: function () {
          var s = this.nativeEvent;
          s &&
            (s.stopPropagation
              ? s.stopPropagation()
              : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0),
            (this.isPropagationStopped = ju));
        },
        persist: function () {},
        isPersistent: ju,
      }),
      r
    );
  }
  var gi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    $u = An(gi),
    Po = R({}, gi, { view: 0, detail: 0 }),
    tC = An(Po),
    Ad,
    Od,
    Fo,
    Hu = R({}, Po, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: _d,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Fo &&
              (Fo && t.type === "mousemove"
                ? ((Ad = t.screenX - Fo.screenX), (Od = t.screenY - Fo.screenY))
                : (Od = Ad = 0),
              (Fo = t)),
            Ad);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Od;
      },
    }),
    Ey = An(Hu),
    nC = R({}, Hu, { dataTransfer: 0 }),
    rC = An(nC),
    aC = R({}, Po, { relatedTarget: 0 }),
    Md = An(aC),
    iC = R({}, gi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    sC = An(iC),
    oC = R({}, gi, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    lC = An(oC),
    uC = R({}, gi, { data: 0 }),
    Ry = An(uC),
    cC = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    fC = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    dC = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function pC(t) {
    var r = this.nativeEvent;
    return r.getModifierState
      ? r.getModifierState(t)
      : (t = dC[t])
      ? !!r[t]
      : !1;
  }
  function _d() {
    return pC;
  }
  var hC = R({}, Po, {
      key: function (t) {
        if (t.key) {
          var r = cC[t.key] || t.key;
          if (r !== "Unidentified") return r;
        }
        return t.type === "keypress"
          ? ((t = Lu(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? fC[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: _d,
      charCode: function (t) {
        return t.type === "keypress" ? Lu(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Lu(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    mC = An(hC),
    gC = R({}, Hu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Cy = An(gC),
    yC = R({}, Po, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: _d,
    }),
    vC = An(yC),
    bC = R({}, gi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    SC = An(bC),
    xC = R({}, Hu, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    EC = An(xC),
    RC = R({}, gi, { newState: 0, oldState: 0 }),
    CC = An(RC),
    wC = [9, 13, 27, 32],
    Dd = Xr && "CompositionEvent" in window,
    qo = null;
  Xr && "documentMode" in document && (qo = document.documentMode);
  var TC = Xr && "TextEvent" in window && !qo,
    wy = Xr && (!Dd || (qo && 8 < qo && 11 >= qo)),
    Ty = " ",
    Ay = !1;
  function Oy(t, r) {
    switch (t) {
      case "keyup":
        return wC.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function My(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var ps = !1;
  function AC(t, r) {
    switch (t) {
      case "compositionend":
        return My(r);
      case "keypress":
        return r.which !== 32 ? null : ((Ay = !0), Ty);
      case "textInput":
        return (t = r.data), t === Ty && Ay ? null : t;
      default:
        return null;
    }
  }
  function OC(t, r) {
    if (ps)
      return t === "compositionend" || (!Dd && Oy(t, r))
        ? ((t = Sy()), (Uu = Td = Aa = null), (ps = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || (r.ctrlKey && r.altKey)) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return wy && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var MC = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function _y(t) {
    var r = t && t.nodeName && t.nodeName.toLowerCase();
    return r === "input" ? !!MC[t.type] : r === "textarea";
  }
  function Dy(t, r, s, l) {
    fs ? (ds ? ds.push(l) : (ds = [l])) : (fs = l),
      (r = Rc(r, "onChange")),
      0 < r.length &&
        ((s = new $u("onChange", "change", null, s, l)),
        t.push({ event: s, listeners: r }));
  }
  var Vo = null,
    Go = null;
  function _C(t) {
    rb(t, 0);
  }
  function Pu(t) {
    var r = jo(t);
    if (dy(r)) return t;
  }
  function Ny(t, r) {
    if (t === "change") return r;
  }
  var zy = !1;
  if (Xr) {
    var Nd;
    if (Xr) {
      var zd = "oninput" in document;
      if (!zd) {
        var ky = document.createElement("div");
        ky.setAttribute("oninput", "return;"),
          (zd = typeof ky.oninput == "function");
      }
      Nd = zd;
    } else Nd = !1;
    zy = Nd && (!document.documentMode || 9 < document.documentMode);
  }
  function By() {
    Vo && (Vo.detachEvent("onpropertychange", Uy), (Go = Vo = null));
  }
  function Uy(t) {
    if (t.propertyName === "value" && Pu(Go)) {
      var r = [];
      Dy(r, Go, t, Rd(t)), by(_C, r);
    }
  }
  function DC(t, r, s) {
    t === "focusin"
      ? (By(), (Vo = r), (Go = s), Vo.attachEvent("onpropertychange", Uy))
      : t === "focusout" && By();
  }
  function NC(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Pu(Go);
  }
  function zC(t, r) {
    if (t === "click") return Pu(r);
  }
  function kC(t, r) {
    if (t === "input" || t === "change") return Pu(r);
  }
  function BC(t, r) {
    return (t === r && (t !== 0 || 1 / t === 1 / r)) || (t !== t && r !== r);
  }
  var Un = typeof Object.is == "function" ? Object.is : BC;
  function Io(t, r) {
    if (Un(t, r)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof r != "object" ||
      r === null
    )
      return !1;
    var s = Object.keys(t),
      l = Object.keys(r);
    if (s.length !== l.length) return !1;
    for (l = 0; l < s.length; l++) {
      var c = s[l];
      if (!G.call(r, c) || !Un(t[c], r[c])) return !1;
    }
    return !0;
  }
  function Ly(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function jy(t, r) {
    var s = Ly(t);
    t = 0;
    for (var l; s; ) {
      if (s.nodeType === 3) {
        if (((l = t + s.textContent.length), t <= r && l >= r))
          return { node: s, offset: r - t };
        t = l;
      }
      e: {
        for (; s; ) {
          if (s.nextSibling) {
            s = s.nextSibling;
            break e;
          }
          s = s.parentNode;
        }
        s = void 0;
      }
      s = Ly(s);
    }
  }
  function $y(t, r) {
    return t && r
      ? t === r
        ? !0
        : t && t.nodeType === 3
        ? !1
        : r && r.nodeType === 3
        ? $y(t, r.parentNode)
        : "contains" in t
        ? t.contains(r)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(r) & 16)
        : !1
      : !1;
  }
  function Hy(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var r = ku(t.document); r instanceof t.HTMLIFrameElement; ) {
      try {
        var s = typeof r.contentWindow.location.href == "string";
      } catch {
        s = !1;
      }
      if (s) t = r.contentWindow;
      else break;
      r = ku(t.document);
    }
    return r;
  }
  function kd(t) {
    var r = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      r &&
      ((r === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        r === "textarea" ||
        t.contentEditable === "true")
    );
  }
  function UC(t, r) {
    var s = Hy(r);
    r = t.focusedElem;
    var l = t.selectionRange;
    if (
      s !== r &&
      r &&
      r.ownerDocument &&
      $y(r.ownerDocument.documentElement, r)
    ) {
      if (l !== null && kd(r)) {
        if (
          ((t = l.start),
          (s = l.end),
          s === void 0 && (s = t),
          "selectionStart" in r)
        )
          (r.selectionStart = t),
            (r.selectionEnd = Math.min(s, r.value.length));
        else if (
          ((s = ((t = r.ownerDocument || document) && t.defaultView) || window),
          s.getSelection)
        ) {
          s = s.getSelection();
          var c = r.textContent.length,
            p = Math.min(l.start, c);
          (l = l.end === void 0 ? p : Math.min(l.end, c)),
            !s.extend && p > l && ((c = l), (l = p), (p = c)),
            (c = jy(r, p));
          var v = jy(r, l);
          c &&
            v &&
            (s.rangeCount !== 1 ||
              s.anchorNode !== c.node ||
              s.anchorOffset !== c.offset ||
              s.focusNode !== v.node ||
              s.focusOffset !== v.offset) &&
            ((t = t.createRange()),
            t.setStart(c.node, c.offset),
            s.removeAllRanges(),
            p > l
              ? (s.addRange(t), s.extend(v.node, v.offset))
              : (t.setEnd(v.node, v.offset), s.addRange(t)));
        }
      }
      for (t = [], s = r; (s = s.parentNode); )
        s.nodeType === 1 &&
          t.push({ element: s, left: s.scrollLeft, top: s.scrollTop });
      for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
        (s = t[r]),
          (s.element.scrollLeft = s.left),
          (s.element.scrollTop = s.top);
    }
  }
  var LC = Xr && "documentMode" in document && 11 >= document.documentMode,
    hs = null,
    Bd = null,
    Yo = null,
    Ud = !1;
  function Py(t, r, s) {
    var l =
      s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    Ud ||
      hs == null ||
      hs !== ku(l) ||
      ((l = hs),
      "selectionStart" in l && kd(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Yo && Io(Yo, l)) ||
        ((Yo = l),
        (l = Rc(Bd, "onSelect")),
        0 < l.length &&
          ((r = new $u("onSelect", "select", null, r, s)),
          t.push({ event: r, listeners: l }),
          (r.target = hs))));
  }
  function yi(t, r) {
    var s = {};
    return (
      (s[t.toLowerCase()] = r.toLowerCase()),
      (s["Webkit" + t] = "webkit" + r),
      (s["Moz" + t] = "moz" + r),
      s
    );
  }
  var ms = {
      animationend: yi("Animation", "AnimationEnd"),
      animationiteration: yi("Animation", "AnimationIteration"),
      animationstart: yi("Animation", "AnimationStart"),
      transitionrun: yi("Transition", "TransitionRun"),
      transitionstart: yi("Transition", "TransitionStart"),
      transitioncancel: yi("Transition", "TransitionCancel"),
      transitionend: yi("Transition", "TransitionEnd"),
    },
    Ld = {},
    Fy = {};
  Xr &&
    ((Fy = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ms.animationend.animation,
      delete ms.animationiteration.animation,
      delete ms.animationstart.animation),
    "TransitionEvent" in window || delete ms.transitionend.transition);
  function vi(t) {
    if (Ld[t]) return Ld[t];
    if (!ms[t]) return t;
    var r = ms[t],
      s;
    for (s in r) if (r.hasOwnProperty(s) && s in Fy) return (Ld[t] = r[s]);
    return t;
  }
  var qy = vi("animationend"),
    Vy = vi("animationiteration"),
    Gy = vi("animationstart"),
    jC = vi("transitionrun"),
    $C = vi("transitionstart"),
    HC = vi("transitioncancel"),
    Iy = vi("transitionend"),
    Yy = new Map(),
    Qy =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " "
      );
  function fr(t, r) {
    Yy.set(t, r), mi(r, [t]);
  }
  var Yn = [],
    gs = 0,
    jd = 0;
  function Fu() {
    for (var t = gs, r = (jd = gs = 0); r < t; ) {
      var s = Yn[r];
      Yn[r++] = null;
      var l = Yn[r];
      Yn[r++] = null;
      var c = Yn[r];
      Yn[r++] = null;
      var p = Yn[r];
      if (((Yn[r++] = null), l !== null && c !== null)) {
        var v = l.pending;
        v === null ? (c.next = c) : ((c.next = v.next), (v.next = c)),
          (l.pending = c);
      }
      p !== 0 && Ky(s, c, p);
    }
  }
  function qu(t, r, s, l) {
    (Yn[gs++] = t),
      (Yn[gs++] = r),
      (Yn[gs++] = s),
      (Yn[gs++] = l),
      (jd |= l),
      (t.lanes |= l),
      (t = t.alternate),
      t !== null && (t.lanes |= l);
  }
  function $d(t, r, s, l) {
    return qu(t, r, s, l), Vu(t);
  }
  function Oa(t, r) {
    return qu(t, null, null, r), Vu(t);
  }
  function Ky(t, r, s) {
    t.lanes |= s;
    var l = t.alternate;
    l !== null && (l.lanes |= s);
    for (var c = !1, p = t.return; p !== null; )
      (p.childLanes |= s),
        (l = p.alternate),
        l !== null && (l.childLanes |= s),
        p.tag === 22 &&
          ((t = p.stateNode), t === null || t._visibility & 1 || (c = !0)),
        (t = p),
        (p = p.return);
    c &&
      r !== null &&
      t.tag === 3 &&
      ((p = t.stateNode),
      (c = 31 - et(s)),
      (p = p.hiddenUpdates),
      (t = p[c]),
      t === null ? (p[c] = [r]) : t.push(r),
      (r.lane = s | 536870912));
  }
  function Vu(t) {
    if (50 < vl) throw ((vl = 0), (Gp = null), Error(i(185)));
    for (var r = t.return; r !== null; ) (t = r), (r = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var ys = {},
    Xy = new WeakMap();
  function Qn(t, r) {
    if (typeof t == "object" && t !== null) {
      var s = Xy.get(t);
      return s !== void 0
        ? s
        : ((r = { value: t, source: r, stack: ie(r) }), Xy.set(t, r), r);
    }
    return { value: t, source: r, stack: ie(r) };
  }
  var vs = [],
    bs = 0,
    Gu = null,
    Iu = 0,
    Kn = [],
    Xn = 0,
    bi = null,
    Zr = 1,
    Jr = "";
  function Si(t, r) {
    (vs[bs++] = Iu), (vs[bs++] = Gu), (Gu = t), (Iu = r);
  }
  function Wy(t, r, s) {
    (Kn[Xn++] = Zr), (Kn[Xn++] = Jr), (Kn[Xn++] = bi), (bi = t);
    var l = Zr;
    t = Jr;
    var c = 32 - et(l) - 1;
    (l &= ~(1 << c)), (s += 1);
    var p = 32 - et(r) + c;
    if (30 < p) {
      var v = c - (c % 5);
      (p = (l & ((1 << v) - 1)).toString(32)),
        (l >>= v),
        (c -= v),
        (Zr = (1 << (32 - et(r) + c)) | (s << c) | l),
        (Jr = p + t);
    } else (Zr = (1 << p) | (s << c) | l), (Jr = t);
  }
  function Hd(t) {
    t.return !== null && (Si(t, 1), Wy(t, 1, 0));
  }
  function Pd(t) {
    for (; t === Gu; )
      (Gu = vs[--bs]), (vs[bs] = null), (Iu = vs[--bs]), (vs[bs] = null);
    for (; t === bi; )
      (bi = Kn[--Xn]),
        (Kn[Xn] = null),
        (Jr = Kn[--Xn]),
        (Kn[Xn] = null),
        (Zr = Kn[--Xn]),
        (Kn[Xn] = null);
  }
  var bn = null,
    sn = null,
    Ze = !1,
    dr = null,
    Ar = !1,
    Fd = Error(i(519));
  function xi(t) {
    var r = Error(i(418, ""));
    throw (Xo(Qn(r, t)), Fd);
  }
  function Zy(t) {
    var r = t.stateNode,
      s = t.type,
      l = t.memoizedProps;
    switch (((r[fn] = t), (r[Tn] = l), s)) {
      case "dialog":
        Ye("cancel", r), Ye("close", r);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ye("load", r);
        break;
      case "video":
      case "audio":
        for (s = 0; s < Sl.length; s++) Ye(Sl[s], r);
        break;
      case "source":
        Ye("error", r);
        break;
      case "img":
      case "image":
      case "link":
        Ye("error", r), Ye("load", r);
        break;
      case "details":
        Ye("toggle", r);
        break;
      case "input":
        Ye("invalid", r),
          py(
            r,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0
          ),
          zu(r);
        break;
      case "select":
        Ye("invalid", r);
        break;
      case "textarea":
        Ye("invalid", r), my(r, l.value, l.defaultValue, l.children), zu(r);
    }
    (s = l.children),
      (typeof s != "string" && typeof s != "number" && typeof s != "bigint") ||
      r.textContent === "" + s ||
      l.suppressHydrationWarning === !0 ||
      ob(r.textContent, s)
        ? (l.popover != null && (Ye("beforetoggle", r), Ye("toggle", r)),
          l.onScroll != null && Ye("scroll", r),
          l.onScrollEnd != null && Ye("scrollend", r),
          l.onClick != null && (r.onclick = Cc),
          (r = !0))
        : (r = !1),
      r || xi(t);
  }
  function Jy(t) {
    for (bn = t.return; bn; )
      switch (bn.tag) {
        case 3:
        case 27:
          Ar = !0;
          return;
        case 5:
        case 13:
          Ar = !1;
          return;
        default:
          bn = bn.return;
      }
  }
  function Qo(t) {
    if (t !== bn) return !1;
    if (!Ze) return Jy(t), (Ze = !0), !1;
    var r = !1,
      s;
    if (
      ((s = t.tag !== 3 && t.tag !== 27) &&
        ((s = t.tag === 5) &&
          ((s = t.type),
          (s =
            !(s !== "form" && s !== "button") || lh(t.type, t.memoizedProps))),
        (s = !s)),
      s && (r = !0),
      r && sn && xi(t),
      Jy(t),
      t.tag === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(i(317));
      e: {
        for (t = t.nextSibling, r = 0; t; ) {
          if (t.nodeType === 8)
            if (((s = t.data), s === "/$")) {
              if (r === 0) {
                sn = hr(t.nextSibling);
                break e;
              }
              r--;
            } else (s !== "$" && s !== "$!" && s !== "$?") || r++;
          t = t.nextSibling;
        }
        sn = null;
      }
    } else sn = bn ? hr(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Ko() {
    (sn = bn = null), (Ze = !1);
  }
  function Xo(t) {
    dr === null ? (dr = [t]) : dr.push(t);
  }
  var Wo = Error(i(460)),
    e0 = Error(i(474)),
    qd = { then: function () {} };
  function t0(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function Yu() {}
  function n0(t, r, s) {
    switch (
      ((s = t[s]),
      s === void 0 ? t.push(r) : s !== r && (r.then(Yu, Yu), (r = s)),
      r.status)
    ) {
      case "fulfilled":
        return r.value;
      case "rejected":
        throw ((t = r.reason), t === Wo ? Error(i(483)) : t);
      default:
        if (typeof r.status == "string") r.then(Yu, Yu);
        else {
          if (((t = xt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(i(482));
          (t = r),
            (t.status = "pending"),
            t.then(
              function (l) {
                if (r.status === "pending") {
                  var c = r;
                  (c.status = "fulfilled"), (c.value = l);
                }
              },
              function (l) {
                if (r.status === "pending") {
                  var c = r;
                  (c.status = "rejected"), (c.reason = l);
                }
              }
            );
        }
        switch (r.status) {
          case "fulfilled":
            return r.value;
          case "rejected":
            throw ((t = r.reason), t === Wo ? Error(i(483)) : t);
        }
        throw ((Zo = r), Wo);
    }
  }
  var Zo = null;
  function r0() {
    if (Zo === null) throw Error(i(459));
    var t = Zo;
    return (Zo = null), t;
  }
  var Ss = null,
    Jo = 0;
  function Qu(t) {
    var r = Jo;
    return (Jo += 1), Ss === null && (Ss = []), n0(Ss, t, r);
  }
  function el(t, r) {
    (r = r.props.ref), (t.ref = r !== void 0 ? r : null);
  }
  function Ku(t, r) {
    throw r.$$typeof === u
      ? Error(i(525))
      : ((t = Object.prototype.toString.call(r)),
        Error(
          i(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(r).join(", ") + "}"
              : t
          )
        ));
  }
  function a0(t) {
    var r = t._init;
    return r(t._payload);
  }
  function i0(t) {
    function r(q, j) {
      if (t) {
        var I = q.deletions;
        I === null ? ((q.deletions = [j]), (q.flags |= 16)) : I.push(j);
      }
    }
    function s(q, j) {
      if (!t) return null;
      for (; j !== null; ) r(q, j), (j = j.sibling);
      return null;
    }
    function l(q) {
      for (var j = new Map(); q !== null; )
        q.key !== null ? j.set(q.key, q) : j.set(q.index, q), (q = q.sibling);
      return j;
    }
    function c(q, j) {
      return (q = Ha(q, j)), (q.index = 0), (q.sibling = null), q;
    }
    function p(q, j, I) {
      return (
        (q.index = I),
        t
          ? ((I = q.alternate),
            I !== null
              ? ((I = I.index), I < j ? ((q.flags |= 33554434), j) : I)
              : ((q.flags |= 33554434), j))
          : ((q.flags |= 1048576), j)
      );
    }
    function v(q) {
      return t && q.alternate === null && (q.flags |= 33554434), q;
    }
    function A(q, j, I, se) {
      return j === null || j.tag !== 6
        ? ((j = Lp(I, q.mode, se)), (j.return = q), j)
        : ((j = c(j, I)), (j.return = q), j);
    }
    function N(q, j, I, se) {
      var Ee = I.type;
      return Ee === m
        ? ae(q, j, I.props.children, se, I.key)
        : j !== null &&
          (j.elementType === Ee ||
            (typeof Ee == "object" &&
              Ee !== null &&
              Ee.$$typeof === _ &&
              a0(Ee) === j.type))
        ? ((j = c(j, I.props)), el(j, I), (j.return = q), j)
        : ((j = pc(I.type, I.key, I.props, null, q.mode, se)),
          el(j, I),
          (j.return = q),
          j);
    }
    function H(q, j, I, se) {
      return j === null ||
        j.tag !== 4 ||
        j.stateNode.containerInfo !== I.containerInfo ||
        j.stateNode.implementation !== I.implementation
        ? ((j = jp(I, q.mode, se)), (j.return = q), j)
        : ((j = c(j, I.children || [])), (j.return = q), j);
    }
    function ae(q, j, I, se, Ee) {
      return j === null || j.tag !== 7
        ? ((j = Di(I, q.mode, se, Ee)), (j.return = q), j)
        : ((j = c(j, I)), (j.return = q), j);
    }
    function oe(q, j, I) {
      if (
        (typeof j == "string" && j !== "") ||
        typeof j == "number" ||
        typeof j == "bigint"
      )
        return (j = Lp("" + j, q.mode, I)), (j.return = q), j;
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case f:
            return (
              (I = pc(j.type, j.key, j.props, null, q.mode, I)),
              el(I, j),
              (I.return = q),
              I
            );
          case d:
            return (j = jp(j, q.mode, I)), (j.return = q), j;
          case _:
            var se = j._init;
            return (j = se(j._payload)), oe(q, j, I);
        }
        if (he(j) || $(j))
          return (j = Di(j, q.mode, I, null)), (j.return = q), j;
        if (typeof j.then == "function") return oe(q, Qu(j), I);
        if (j.$$typeof === C) return oe(q, cc(q, j), I);
        Ku(q, j);
      }
      return null;
    }
    function Y(q, j, I, se) {
      var Ee = j !== null ? j.key : null;
      if (
        (typeof I == "string" && I !== "") ||
        typeof I == "number" ||
        typeof I == "bigint"
      )
        return Ee !== null ? null : A(q, j, "" + I, se);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case f:
            return I.key === Ee ? N(q, j, I, se) : null;
          case d:
            return I.key === Ee ? H(q, j, I, se) : null;
          case _:
            return (Ee = I._init), (I = Ee(I._payload)), Y(q, j, I, se);
        }
        if (he(I) || $(I)) return Ee !== null ? null : ae(q, j, I, se, null);
        if (typeof I.then == "function") return Y(q, j, Qu(I), se);
        if (I.$$typeof === C) return Y(q, j, cc(q, I), se);
        Ku(q, I);
      }
      return null;
    }
    function re(q, j, I, se, Ee) {
      if (
        (typeof se == "string" && se !== "") ||
        typeof se == "number" ||
        typeof se == "bigint"
      )
        return (q = q.get(I) || null), A(j, q, "" + se, Ee);
      if (typeof se == "object" && se !== null) {
        switch (se.$$typeof) {
          case f:
            return (
              (q = q.get(se.key === null ? I : se.key) || null), N(j, q, se, Ee)
            );
          case d:
            return (
              (q = q.get(se.key === null ? I : se.key) || null), H(j, q, se, Ee)
            );
          case _:
            var Ge = se._init;
            return (se = Ge(se._payload)), re(q, j, I, se, Ee);
        }
        if (he(se) || $(se))
          return (q = q.get(I) || null), ae(j, q, se, Ee, null);
        if (typeof se.then == "function") return re(q, j, I, Qu(se), Ee);
        if (se.$$typeof === C) return re(q, j, I, cc(j, se), Ee);
        Ku(j, se);
      }
      return null;
    }
    function Re(q, j, I, se) {
      for (
        var Ee = null, Ge = null, we = j, De = (j = 0), rn = null;
        we !== null && De < I.length;
        De++
      ) {
        we.index > De ? ((rn = we), (we = null)) : (rn = we.sibling);
        var Je = Y(q, we, I[De], se);
        if (Je === null) {
          we === null && (we = rn);
          break;
        }
        t && we && Je.alternate === null && r(q, we),
          (j = p(Je, j, De)),
          Ge === null ? (Ee = Je) : (Ge.sibling = Je),
          (Ge = Je),
          (we = rn);
      }
      if (De === I.length) return s(q, we), Ze && Si(q, De), Ee;
      if (we === null) {
        for (; De < I.length; De++)
          (we = oe(q, I[De], se)),
            we !== null &&
              ((j = p(we, j, De)),
              Ge === null ? (Ee = we) : (Ge.sibling = we),
              (Ge = we));
        return Ze && Si(q, De), Ee;
      }
      for (we = l(we); De < I.length; De++)
        (rn = re(we, q, De, I[De], se)),
          rn !== null &&
            (t &&
              rn.alternate !== null &&
              we.delete(rn.key === null ? De : rn.key),
            (j = p(rn, j, De)),
            Ge === null ? (Ee = rn) : (Ge.sibling = rn),
            (Ge = rn));
      return (
        t &&
          we.forEach(function (Ya) {
            return r(q, Ya);
          }),
        Ze && Si(q, De),
        Ee
      );
    }
    function Be(q, j, I, se) {
      if (I == null) throw Error(i(151));
      for (
        var Ee = null,
          Ge = null,
          we = j,
          De = (j = 0),
          rn = null,
          Je = I.next();
        we !== null && !Je.done;
        De++, Je = I.next()
      ) {
        we.index > De ? ((rn = we), (we = null)) : (rn = we.sibling);
        var Ya = Y(q, we, Je.value, se);
        if (Ya === null) {
          we === null && (we = rn);
          break;
        }
        t && we && Ya.alternate === null && r(q, we),
          (j = p(Ya, j, De)),
          Ge === null ? (Ee = Ya) : (Ge.sibling = Ya),
          (Ge = Ya),
          (we = rn);
      }
      if (Je.done) return s(q, we), Ze && Si(q, De), Ee;
      if (we === null) {
        for (; !Je.done; De++, Je = I.next())
          (Je = oe(q, Je.value, se)),
            Je !== null &&
              ((j = p(Je, j, De)),
              Ge === null ? (Ee = Je) : (Ge.sibling = Je),
              (Ge = Je));
        return Ze && Si(q, De), Ee;
      }
      for (we = l(we); !Je.done; De++, Je = I.next())
        (Je = re(we, q, De, Je.value, se)),
          Je !== null &&
            (t &&
              Je.alternate !== null &&
              we.delete(Je.key === null ? De : Je.key),
            (j = p(Je, j, De)),
            Ge === null ? (Ee = Je) : (Ge.sibling = Je),
            (Ge = Je));
      return (
        t &&
          we.forEach(function (eT) {
            return r(q, eT);
          }),
        Ze && Si(q, De),
        Ee
      );
    }
    function Nt(q, j, I, se) {
      if (
        (typeof I == "object" &&
          I !== null &&
          I.type === m &&
          I.key === null &&
          (I = I.props.children),
        typeof I == "object" && I !== null)
      ) {
        switch (I.$$typeof) {
          case f:
            e: {
              for (var Ee = I.key; j !== null; ) {
                if (j.key === Ee) {
                  if (((Ee = I.type), Ee === m)) {
                    if (j.tag === 7) {
                      s(q, j.sibling),
                        (se = c(j, I.props.children)),
                        (se.return = q),
                        (q = se);
                      break e;
                    }
                  } else if (
                    j.elementType === Ee ||
                    (typeof Ee == "object" &&
                      Ee !== null &&
                      Ee.$$typeof === _ &&
                      a0(Ee) === j.type)
                  ) {
                    s(q, j.sibling),
                      (se = c(j, I.props)),
                      el(se, I),
                      (se.return = q),
                      (q = se);
                    break e;
                  }
                  s(q, j);
                  break;
                } else r(q, j);
                j = j.sibling;
              }
              I.type === m
                ? ((se = Di(I.props.children, q.mode, se, I.key)),
                  (se.return = q),
                  (q = se))
                : ((se = pc(I.type, I.key, I.props, null, q.mode, se)),
                  el(se, I),
                  (se.return = q),
                  (q = se));
            }
            return v(q);
          case d:
            e: {
              for (Ee = I.key; j !== null; ) {
                if (j.key === Ee)
                  if (
                    j.tag === 4 &&
                    j.stateNode.containerInfo === I.containerInfo &&
                    j.stateNode.implementation === I.implementation
                  ) {
                    s(q, j.sibling),
                      (se = c(j, I.children || [])),
                      (se.return = q),
                      (q = se);
                    break e;
                  } else {
                    s(q, j);
                    break;
                  }
                else r(q, j);
                j = j.sibling;
              }
              (se = jp(I, q.mode, se)), (se.return = q), (q = se);
            }
            return v(q);
          case _:
            return (Ee = I._init), (I = Ee(I._payload)), Nt(q, j, I, se);
        }
        if (he(I)) return Re(q, j, I, se);
        if ($(I)) {
          if (((Ee = $(I)), typeof Ee != "function")) throw Error(i(150));
          return (I = Ee.call(I)), Be(q, j, I, se);
        }
        if (typeof I.then == "function") return Nt(q, j, Qu(I), se);
        if (I.$$typeof === C) return Nt(q, j, cc(q, I), se);
        Ku(q, I);
      }
      return (typeof I == "string" && I !== "") ||
        typeof I == "number" ||
        typeof I == "bigint"
        ? ((I = "" + I),
          j !== null && j.tag === 6
            ? (s(q, j.sibling), (se = c(j, I)), (se.return = q), (q = se))
            : (s(q, j), (se = Lp(I, q.mode, se)), (se.return = q), (q = se)),
          v(q))
        : s(q, j);
    }
    return function (q, j, I, se) {
      try {
        Jo = 0;
        var Ee = Nt(q, j, I, se);
        return (Ss = null), Ee;
      } catch (we) {
        if (we === Wo) throw we;
        var Ge = er(29, we, null, q.mode);
        return (Ge.lanes = se), (Ge.return = q), Ge;
      } finally {
      }
    };
  }
  var Ei = i0(!0),
    s0 = i0(!1),
    xs = Te(null),
    Xu = Te(0);
  function o0(t, r) {
    (t = ca), Se(Xu, t), Se(xs, r), (ca = t | r.baseLanes);
  }
  function Vd() {
    Se(Xu, ca), Se(xs, xs.current);
  }
  function Gd() {
    (ca = Xu.current), Ae(xs), Ae(Xu);
  }
  var Wn = Te(null),
    Or = null;
  function Ma(t) {
    var r = t.alternate;
    Se(Kt, Kt.current & 1),
      Se(Wn, t),
      Or === null &&
        (r === null || xs.current !== null || r.memoizedState !== null) &&
        (Or = t);
  }
  function l0(t) {
    if (t.tag === 22) {
      if ((Se(Kt, Kt.current), Se(Wn, t), Or === null)) {
        var r = t.alternate;
        r !== null && r.memoizedState !== null && (Or = t);
      }
    } else _a();
  }
  function _a() {
    Se(Kt, Kt.current), Se(Wn, Wn.current);
  }
  function ea(t) {
    Ae(Wn), Or === t && (Or = null), Ae(Kt);
  }
  var Kt = Te(0);
  function Wu(t) {
    for (var r = t; r !== null; ) {
      if (r.tag === 13) {
        var s = r.memoizedState;
        if (
          s !== null &&
          ((s = s.dehydrated), s === null || s.data === "$?" || s.data === "$!")
        )
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return null;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
    return null;
  }
  var PC =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              r = (this.signal = {
                aborted: !1,
                addEventListener: function (s, l) {
                  t.push(l);
                },
              });
            this.abort = function () {
              (r.aborted = !0),
                t.forEach(function (s) {
                  return s();
                });
            };
          },
    FC = e.unstable_scheduleCallback,
    qC = e.unstable_NormalPriority,
    Xt = {
      $$typeof: C,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Id() {
    return { controller: new PC(), data: new Map(), refCount: 0 };
  }
  function tl(t) {
    t.refCount--,
      t.refCount === 0 &&
        FC(qC, function () {
          t.controller.abort();
        });
  }
  var nl = null,
    Yd = 0,
    Es = 0,
    Rs = null;
  function VC(t, r) {
    if (nl === null) {
      var s = (nl = []);
      (Yd = 0),
        (Es = Jp()),
        (Rs = {
          status: "pending",
          value: void 0,
          then: function (l) {
            s.push(l);
          },
        });
    }
    return Yd++, r.then(u0, u0), r;
  }
  function u0() {
    if (--Yd === 0 && nl !== null) {
      Rs !== null && (Rs.status = "fulfilled");
      var t = nl;
      (nl = null), (Es = 0), (Rs = null);
      for (var r = 0; r < t.length; r++) (0, t[r])();
    }
  }
  function GC(t, r) {
    var s = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (c) {
          s.push(c);
        },
      };
    return (
      t.then(
        function () {
          (l.status = "fulfilled"), (l.value = r);
          for (var c = 0; c < s.length; c++) (0, s[c])(r);
        },
        function (c) {
          for (l.status = "rejected", l.reason = c, c = 0; c < s.length; c++)
            (0, s[c])(void 0);
        }
      ),
      l
    );
  }
  var c0 = P.S;
  P.S = function (t, r) {
    typeof r == "object" &&
      r !== null &&
      typeof r.then == "function" &&
      VC(t, r),
      c0 !== null && c0(t, r);
  };
  var Ri = Te(null);
  function Qd() {
    var t = Ri.current;
    return t !== null ? t : xt.pooledCache;
  }
  function Zu(t, r) {
    r === null ? Se(Ri, Ri.current) : Se(Ri, r.pool);
  }
  function f0() {
    var t = Qd();
    return t === null ? null : { parent: Xt._currentValue, pool: t };
  }
  var Da = 0,
    Ve = null,
    lt = null,
    Vt = null,
    Ju = !1,
    Cs = !1,
    Ci = !1,
    ec = 0,
    rl = 0,
    ws = null,
    IC = 0;
  function Lt() {
    throw Error(i(321));
  }
  function Kd(t, r) {
    if (r === null) return !1;
    for (var s = 0; s < r.length && s < t.length; s++)
      if (!Un(t[s], r[s])) return !1;
    return !0;
  }
  function Xd(t, r, s, l, c, p) {
    return (
      (Da = p),
      (Ve = r),
      (r.memoizedState = null),
      (r.updateQueue = null),
      (r.lanes = 0),
      (P.H = t === null || t.memoizedState === null ? wi : Na),
      (Ci = !1),
      (p = s(l, c)),
      (Ci = !1),
      Cs && (p = p0(r, s, l, c)),
      d0(t),
      p
    );
  }
  function d0(t) {
    P.H = Mr;
    var r = lt !== null && lt.next !== null;
    if (((Da = 0), (Vt = lt = Ve = null), (Ju = !1), (rl = 0), (ws = null), r))
      throw Error(i(300));
    t === null ||
      tn ||
      ((t = t.dependencies), t !== null && uc(t) && (tn = !0));
  }
  function p0(t, r, s, l) {
    Ve = t;
    var c = 0;
    do {
      if ((Cs && (ws = null), (rl = 0), (Cs = !1), 25 <= c))
        throw Error(i(301));
      if (((c += 1), (Vt = lt = null), t.updateQueue != null)) {
        var p = t.updateQueue;
        (p.lastEffect = null),
          (p.events = null),
          (p.stores = null),
          p.memoCache != null && (p.memoCache.index = 0);
      }
      (P.H = Ti), (p = r(s, l));
    } while (Cs);
    return p;
  }
  function YC() {
    var t = P.H,
      r = t.useState()[0];
    return (
      (r = typeof r.then == "function" ? al(r) : r),
      (t = t.useState()[0]),
      (lt !== null ? lt.memoizedState : null) !== t && (Ve.flags |= 1024),
      r
    );
  }
  function Wd() {
    var t = ec !== 0;
    return (ec = 0), t;
  }
  function Zd(t, r, s) {
    (r.updateQueue = t.updateQueue), (r.flags &= -2053), (t.lanes &= ~s);
  }
  function Jd(t) {
    if (Ju) {
      for (t = t.memoizedState; t !== null; ) {
        var r = t.queue;
        r !== null && (r.pending = null), (t = t.next);
      }
      Ju = !1;
    }
    (Da = 0), (Vt = lt = Ve = null), (Cs = !1), (rl = ec = 0), (ws = null);
  }
  function On() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Vt === null ? (Ve.memoizedState = Vt = t) : (Vt = Vt.next = t), Vt;
  }
  function Gt() {
    if (lt === null) {
      var t = Ve.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = lt.next;
    var r = Vt === null ? Ve.memoizedState : Vt.next;
    if (r !== null) (Vt = r), (lt = t);
    else {
      if (t === null)
        throw Ve.alternate === null ? Error(i(467)) : Error(i(310));
      (lt = t),
        (t = {
          memoizedState: lt.memoizedState,
          baseState: lt.baseState,
          baseQueue: lt.baseQueue,
          queue: lt.queue,
          next: null,
        }),
        Vt === null ? (Ve.memoizedState = Vt = t) : (Vt = Vt.next = t);
    }
    return Vt;
  }
  var tc;
  tc = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function al(t) {
    var r = rl;
    return (
      (rl += 1),
      ws === null && (ws = []),
      (t = n0(ws, t, r)),
      (r = Ve),
      (Vt === null ? r.memoizedState : Vt.next) === null &&
        ((r = r.alternate),
        (P.H = r === null || r.memoizedState === null ? wi : Na)),
      t
    );
  }
  function nc(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return al(t);
      if (t.$$typeof === C) return dn(t);
    }
    throw Error(i(438, String(t)));
  }
  function ep(t) {
    var r = null,
      s = Ve.updateQueue;
    if ((s !== null && (r = s.memoCache), r == null)) {
      var l = Ve.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (r = {
              data: l.data.map(function (c) {
                return c.slice();
              }),
              index: 0,
            })));
    }
    if (
      (r == null && (r = { data: [], index: 0 }),
      s === null && ((s = tc()), (Ve.updateQueue = s)),
      (s.memoCache = r),
      (s = r.data[r.index]),
      s === void 0)
    )
      for (s = r.data[r.index] = Array(t), l = 0; l < t; l++) s[l] = D;
    return r.index++, s;
  }
  function ta(t, r) {
    return typeof r == "function" ? r(t) : r;
  }
  function rc(t) {
    var r = Gt();
    return tp(r, lt, t);
  }
  function tp(t, r, s) {
    var l = t.queue;
    if (l === null) throw Error(i(311));
    l.lastRenderedReducer = s;
    var c = t.baseQueue,
      p = l.pending;
    if (p !== null) {
      if (c !== null) {
        var v = c.next;
        (c.next = p.next), (p.next = v);
      }
      (r.baseQueue = c = p), (l.pending = null);
    }
    if (((p = t.baseState), c === null)) t.memoizedState = p;
    else {
      r = c.next;
      var A = (v = null),
        N = null,
        H = r,
        ae = !1;
      do {
        var oe = H.lane & -536870913;
        if (oe !== H.lane ? (Xe & oe) === oe : (Da & oe) === oe) {
          var Y = H.revertLane;
          if (Y === 0)
            N !== null &&
              (N = N.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: H.action,
                  hasEagerState: H.hasEagerState,
                  eagerState: H.eagerState,
                  next: null,
                }),
              oe === Es && (ae = !0);
          else if ((Da & Y) === Y) {
            (H = H.next), Y === Es && (ae = !0);
            continue;
          } else
            (oe = {
              lane: 0,
              revertLane: H.revertLane,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null,
            }),
              N === null ? ((A = N = oe), (v = p)) : (N = N.next = oe),
              (Ve.lanes |= Y),
              (Pa |= Y);
          (oe = H.action),
            Ci && s(p, oe),
            (p = H.hasEagerState ? H.eagerState : s(p, oe));
        } else
          (Y = {
            lane: oe,
            revertLane: H.revertLane,
            action: H.action,
            hasEagerState: H.hasEagerState,
            eagerState: H.eagerState,
            next: null,
          }),
            N === null ? ((A = N = Y), (v = p)) : (N = N.next = Y),
            (Ve.lanes |= oe),
            (Pa |= oe);
        H = H.next;
      } while (H !== null && H !== r);
      if (
        (N === null ? (v = p) : (N.next = A),
        !Un(p, t.memoizedState) && ((tn = !0), ae && ((s = Rs), s !== null)))
      )
        throw s;
      (t.memoizedState = p),
        (t.baseState = v),
        (t.baseQueue = N),
        (l.lastRenderedState = p);
    }
    return c === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
  }
  function np(t) {
    var r = Gt(),
      s = r.queue;
    if (s === null) throw Error(i(311));
    s.lastRenderedReducer = t;
    var l = s.dispatch,
      c = s.pending,
      p = r.memoizedState;
    if (c !== null) {
      s.pending = null;
      var v = (c = c.next);
      do (p = t(p, v.action)), (v = v.next);
      while (v !== c);
      Un(p, r.memoizedState) || (tn = !0),
        (r.memoizedState = p),
        r.baseQueue === null && (r.baseState = p),
        (s.lastRenderedState = p);
    }
    return [p, l];
  }
  function h0(t, r, s) {
    var l = Ve,
      c = Gt(),
      p = Ze;
    if (p) {
      if (s === void 0) throw Error(i(407));
      s = s();
    } else s = r();
    var v = !Un((lt || c).memoizedState, s);
    if (
      (v && ((c.memoizedState = s), (tn = !0)),
      (c = c.queue),
      ip(y0.bind(null, l, c, t), [t]),
      c.getSnapshot !== r || v || (Vt !== null && Vt.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        Ts(9, g0.bind(null, l, c, s, r), { destroy: void 0 }, null),
        xt === null)
      )
        throw Error(i(349));
      p || Da & 60 || m0(l, r, s);
    }
    return s;
  }
  function m0(t, r, s) {
    (t.flags |= 16384),
      (t = { getSnapshot: r, value: s }),
      (r = Ve.updateQueue),
      r === null
        ? ((r = tc()), (Ve.updateQueue = r), (r.stores = [t]))
        : ((s = r.stores), s === null ? (r.stores = [t]) : s.push(t));
  }
  function g0(t, r, s, l) {
    (r.value = s), (r.getSnapshot = l), v0(r) && b0(t);
  }
  function y0(t, r, s) {
    return s(function () {
      v0(r) && b0(t);
    });
  }
  function v0(t) {
    var r = t.getSnapshot;
    t = t.value;
    try {
      var s = r();
      return !Un(t, s);
    } catch {
      return !0;
    }
  }
  function b0(t) {
    var r = Oa(t, 2);
    r !== null && Sn(r, t, 2);
  }
  function rp(t) {
    var r = On();
    if (typeof t == "function") {
      var s = t;
      if (((t = s()), Ci)) {
        Ke(!0);
        try {
          s();
        } finally {
          Ke(!1);
        }
      }
    }
    return (
      (r.memoizedState = r.baseState = t),
      (r.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ta,
        lastRenderedState: t,
      }),
      r
    );
  }
  function S0(t, r, s, l) {
    return (t.baseState = s), tp(t, lt, typeof l == "function" ? l : ta);
  }
  function QC(t, r, s, l, c) {
    if (sc(t)) throw Error(i(485));
    if (((t = r.action), t !== null)) {
      var p = {
        payload: c,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (v) {
          p.listeners.push(v);
        },
      };
      P.T !== null ? s(!0) : (p.isTransition = !1),
        l(p),
        (s = r.pending),
        s === null
          ? ((p.next = r.pending = p), x0(r, p))
          : ((p.next = s.next), (r.pending = s.next = p));
    }
  }
  function x0(t, r) {
    var s = r.action,
      l = r.payload,
      c = t.state;
    if (r.isTransition) {
      var p = P.T,
        v = {};
      P.T = v;
      try {
        var A = s(c, l),
          N = P.S;
        N !== null && N(v, A), E0(t, r, A);
      } catch (H) {
        ap(t, r, H);
      } finally {
        P.T = p;
      }
    } else
      try {
        (p = s(c, l)), E0(t, r, p);
      } catch (H) {
        ap(t, r, H);
      }
  }
  function E0(t, r, s) {
    s !== null && typeof s == "object" && typeof s.then == "function"
      ? s.then(
          function (l) {
            R0(t, r, l);
          },
          function (l) {
            return ap(t, r, l);
          }
        )
      : R0(t, r, s);
  }
  function R0(t, r, s) {
    (r.status = "fulfilled"),
      (r.value = s),
      C0(r),
      (t.state = s),
      (r = t.pending),
      r !== null &&
        ((s = r.next),
        s === r ? (t.pending = null) : ((s = s.next), (r.next = s), x0(t, s)));
  }
  function ap(t, r, s) {
    var l = t.pending;
    if (((t.pending = null), l !== null)) {
      l = l.next;
      do (r.status = "rejected"), (r.reason = s), C0(r), (r = r.next);
      while (r !== l);
    }
    t.action = null;
  }
  function C0(t) {
    t = t.listeners;
    for (var r = 0; r < t.length; r++) (0, t[r])();
  }
  function w0(t, r) {
    return r;
  }
  function T0(t, r) {
    if (Ze) {
      var s = xt.formState;
      if (s !== null) {
        e: {
          var l = Ve;
          if (Ze) {
            if (sn) {
              t: {
                for (var c = sn, p = Ar; c.nodeType !== 8; ) {
                  if (!p) {
                    c = null;
                    break t;
                  }
                  if (((c = hr(c.nextSibling)), c === null)) {
                    c = null;
                    break t;
                  }
                }
                (p = c.data), (c = p === "F!" || p === "F" ? c : null);
              }
              if (c) {
                (sn = hr(c.nextSibling)), (l = c.data === "F!");
                break e;
              }
            }
            xi(l);
          }
          l = !1;
        }
        l && (r = s[0]);
      }
    }
    return (
      (s = On()),
      (s.memoizedState = s.baseState = r),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: w0,
        lastRenderedState: r,
      }),
      (s.queue = l),
      (s = V0.bind(null, Ve, l)),
      (l.dispatch = s),
      (l = rp(!1)),
      (p = cp.bind(null, Ve, !1, l.queue)),
      (l = On()),
      (c = { state: r, dispatch: null, action: t, pending: null }),
      (l.queue = c),
      (s = QC.bind(null, Ve, c, p, s)),
      (c.dispatch = s),
      (l.memoizedState = t),
      [r, s, !1]
    );
  }
  function A0(t) {
    var r = Gt();
    return O0(r, lt, t);
  }
  function O0(t, r, s) {
    (r = tp(t, r, w0)[0]),
      (t = rc(ta)[0]),
      (r =
        typeof r == "object" && r !== null && typeof r.then == "function"
          ? al(r)
          : r);
    var l = Gt(),
      c = l.queue,
      p = c.dispatch;
    return (
      s !== l.memoizedState &&
        ((Ve.flags |= 2048),
        Ts(9, KC.bind(null, c, s), { destroy: void 0 }, null)),
      [r, p, t]
    );
  }
  function KC(t, r) {
    t.action = r;
  }
  function M0(t) {
    var r = Gt(),
      s = lt;
    if (s !== null) return O0(r, s, t);
    Gt(), (r = r.memoizedState), (s = Gt());
    var l = s.queue.dispatch;
    return (s.memoizedState = t), [r, l, !1];
  }
  function Ts(t, r, s, l) {
    return (
      (t = { tag: t, create: r, inst: s, deps: l, next: null }),
      (r = Ve.updateQueue),
      r === null && ((r = tc()), (Ve.updateQueue = r)),
      (s = r.lastEffect),
      s === null
        ? (r.lastEffect = t.next = t)
        : ((l = s.next), (s.next = t), (t.next = l), (r.lastEffect = t)),
      t
    );
  }
  function _0() {
    return Gt().memoizedState;
  }
  function ac(t, r, s, l) {
    var c = On();
    (Ve.flags |= t),
      (c.memoizedState = Ts(
        1 | r,
        s,
        { destroy: void 0 },
        l === void 0 ? null : l
      ));
  }
  function ic(t, r, s, l) {
    var c = Gt();
    l = l === void 0 ? null : l;
    var p = c.memoizedState.inst;
    lt !== null && l !== null && Kd(l, lt.memoizedState.deps)
      ? (c.memoizedState = Ts(r, s, p, l))
      : ((Ve.flags |= t), (c.memoizedState = Ts(1 | r, s, p, l)));
  }
  function D0(t, r) {
    ac(8390656, 8, t, r);
  }
  function ip(t, r) {
    ic(2048, 8, t, r);
  }
  function N0(t, r) {
    return ic(4, 2, t, r);
  }
  function z0(t, r) {
    return ic(4, 4, t, r);
  }
  function k0(t, r) {
    if (typeof r == "function") {
      t = t();
      var s = r(t);
      return function () {
        typeof s == "function" ? s() : r(null);
      };
    }
    if (r != null)
      return (
        (t = t()),
        (r.current = t),
        function () {
          r.current = null;
        }
      );
  }
  function B0(t, r, s) {
    (s = s != null ? s.concat([t]) : null), ic(4, 4, k0.bind(null, r, t), s);
  }
  function sp() {}
  function U0(t, r) {
    var s = Gt();
    r = r === void 0 ? null : r;
    var l = s.memoizedState;
    return r !== null && Kd(r, l[1]) ? l[0] : ((s.memoizedState = [t, r]), t);
  }
  function L0(t, r) {
    var s = Gt();
    r = r === void 0 ? null : r;
    var l = s.memoizedState;
    if (r !== null && Kd(r, l[1])) return l[0];
    if (((l = t()), Ci)) {
      Ke(!0);
      try {
        t();
      } finally {
        Ke(!1);
      }
    }
    return (s.memoizedState = [l, r]), l;
  }
  function op(t, r, s) {
    return s === void 0 || Da & 1073741824
      ? (t.memoizedState = r)
      : ((t.memoizedState = s), (t = $v()), (Ve.lanes |= t), (Pa |= t), s);
  }
  function j0(t, r, s, l) {
    return Un(s, r)
      ? s
      : xs.current !== null
      ? ((t = op(t, s, l)), Un(t, r) || (tn = !0), t)
      : Da & 42
      ? ((t = $v()), (Ve.lanes |= t), (Pa |= t), r)
      : ((tn = !0), (t.memoizedState = s));
  }
  function $0(t, r, s, l, c) {
    var p = ce.p;
    ce.p = p !== 0 && 8 > p ? p : 8;
    var v = P.T,
      A = {};
    (P.T = A), cp(t, !1, r, s);
    try {
      var N = c(),
        H = P.S;
      if (
        (H !== null && H(A, N),
        N !== null && typeof N == "object" && typeof N.then == "function")
      ) {
        var ae = GC(N, l);
        il(t, r, ae, Hn(t));
      } else il(t, r, l, Hn(t));
    } catch (oe) {
      il(t, r, { then: function () {}, status: "rejected", reason: oe }, Hn());
    } finally {
      (ce.p = p), (P.T = v);
    }
  }
  function XC() {}
  function lp(t, r, s, l) {
    if (t.tag !== 5) throw Error(i(476));
    var c = H0(t).queue;
    $0(
      t,
      c,
      r,
      be,
      s === null
        ? XC
        : function () {
            return P0(t), s(l);
          }
    );
  }
  function H0(t) {
    var r = t.memoizedState;
    if (r !== null) return r;
    r = {
      memoizedState: be,
      baseState: be,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ta,
        lastRenderedState: be,
      },
      next: null,
    };
    var s = {};
    return (
      (r.next = {
        memoizedState: s,
        baseState: s,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ta,
          lastRenderedState: s,
        },
        next: null,
      }),
      (t.memoizedState = r),
      (t = t.alternate),
      t !== null && (t.memoizedState = r),
      r
    );
  }
  function P0(t) {
    var r = H0(t).next.queue;
    il(t, r, {}, Hn());
  }
  function up() {
    return dn(wl);
  }
  function F0() {
    return Gt().memoizedState;
  }
  function q0() {
    return Gt().memoizedState;
  }
  function WC(t) {
    for (var r = t.return; r !== null; ) {
      switch (r.tag) {
        case 24:
        case 3:
          var s = Hn();
          t = Ba(s);
          var l = Ua(r, t, s);
          l !== null && (Sn(l, r, s), ll(l, r, s)),
            (r = { cache: Id() }),
            (t.payload = r);
          return;
      }
      r = r.return;
    }
  }
  function ZC(t, r, s) {
    var l = Hn();
    (s = {
      lane: l,
      revertLane: 0,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      sc(t)
        ? G0(r, s)
        : ((s = $d(t, r, s, l)), s !== null && (Sn(s, t, l), I0(s, r, l)));
  }
  function V0(t, r, s) {
    var l = Hn();
    il(t, r, s, l);
  }
  function il(t, r, s, l) {
    var c = {
      lane: l,
      revertLane: 0,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (sc(t)) G0(r, c);
    else {
      var p = t.alternate;
      if (
        t.lanes === 0 &&
        (p === null || p.lanes === 0) &&
        ((p = r.lastRenderedReducer), p !== null)
      )
        try {
          var v = r.lastRenderedState,
            A = p(v, s);
          if (((c.hasEagerState = !0), (c.eagerState = A), Un(A, v)))
            return qu(t, r, c, 0), xt === null && Fu(), !1;
        } catch {
        } finally {
        }
      if (((s = $d(t, r, c, l)), s !== null))
        return Sn(s, t, l), I0(s, r, l), !0;
    }
    return !1;
  }
  function cp(t, r, s, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: Jp(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      sc(t))
    ) {
      if (r) throw Error(i(479));
    } else (r = $d(t, s, l, 2)), r !== null && Sn(r, t, 2);
  }
  function sc(t) {
    var r = t.alternate;
    return t === Ve || (r !== null && r === Ve);
  }
  function G0(t, r) {
    Cs = Ju = !0;
    var s = t.pending;
    s === null ? (r.next = r) : ((r.next = s.next), (s.next = r)),
      (t.pending = r);
  }
  function I0(t, r, s) {
    if (s & 4194176) {
      var l = r.lanes;
      (l &= t.pendingLanes), (s |= l), (r.lanes = s), ry(t, s);
    }
  }
  var Mr = {
    readContext: dn,
    use: nc,
    useCallback: Lt,
    useContext: Lt,
    useEffect: Lt,
    useImperativeHandle: Lt,
    useLayoutEffect: Lt,
    useInsertionEffect: Lt,
    useMemo: Lt,
    useReducer: Lt,
    useRef: Lt,
    useState: Lt,
    useDebugValue: Lt,
    useDeferredValue: Lt,
    useTransition: Lt,
    useSyncExternalStore: Lt,
    useId: Lt,
  };
  (Mr.useCacheRefresh = Lt),
    (Mr.useMemoCache = Lt),
    (Mr.useHostTransitionStatus = Lt),
    (Mr.useFormState = Lt),
    (Mr.useActionState = Lt),
    (Mr.useOptimistic = Lt);
  var wi = {
    readContext: dn,
    use: nc,
    useCallback: function (t, r) {
      return (On().memoizedState = [t, r === void 0 ? null : r]), t;
    },
    useContext: dn,
    useEffect: D0,
    useImperativeHandle: function (t, r, s) {
      (s = s != null ? s.concat([t]) : null),
        ac(4194308, 4, k0.bind(null, r, t), s);
    },
    useLayoutEffect: function (t, r) {
      return ac(4194308, 4, t, r);
    },
    useInsertionEffect: function (t, r) {
      ac(4, 2, t, r);
    },
    useMemo: function (t, r) {
      var s = On();
      r = r === void 0 ? null : r;
      var l = t();
      if (Ci) {
        Ke(!0);
        try {
          t();
        } finally {
          Ke(!1);
        }
      }
      return (s.memoizedState = [l, r]), l;
    },
    useReducer: function (t, r, s) {
      var l = On();
      if (s !== void 0) {
        var c = s(r);
        if (Ci) {
          Ke(!0);
          try {
            s(r);
          } finally {
            Ke(!1);
          }
        }
      } else c = r;
      return (
        (l.memoizedState = l.baseState = c),
        (t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: c,
        }),
        (l.queue = t),
        (t = t.dispatch = ZC.bind(null, Ve, t)),
        [l.memoizedState, t]
      );
    },
    useRef: function (t) {
      var r = On();
      return (t = { current: t }), (r.memoizedState = t);
    },
    useState: function (t) {
      t = rp(t);
      var r = t.queue,
        s = V0.bind(null, Ve, r);
      return (r.dispatch = s), [t.memoizedState, s];
    },
    useDebugValue: sp,
    useDeferredValue: function (t, r) {
      var s = On();
      return op(s, t, r);
    },
    useTransition: function () {
      var t = rp(!1);
      return (
        (t = $0.bind(null, Ve, t.queue, !0, !1)),
        (On().memoizedState = t),
        [!1, t]
      );
    },
    useSyncExternalStore: function (t, r, s) {
      var l = Ve,
        c = On();
      if (Ze) {
        if (s === void 0) throw Error(i(407));
        s = s();
      } else {
        if (((s = r()), xt === null)) throw Error(i(349));
        Xe & 60 || m0(l, r, s);
      }
      c.memoizedState = s;
      var p = { value: s, getSnapshot: r };
      return (
        (c.queue = p),
        D0(y0.bind(null, l, p, t), [t]),
        (l.flags |= 2048),
        Ts(9, g0.bind(null, l, p, s, r), { destroy: void 0 }, null),
        s
      );
    },
    useId: function () {
      var t = On(),
        r = xt.identifierPrefix;
      if (Ze) {
        var s = Jr,
          l = Zr;
        (s = (l & ~(1 << (32 - et(l) - 1))).toString(32) + s),
          (r = ":" + r + "R" + s),
          (s = ec++),
          0 < s && (r += "H" + s.toString(32)),
          (r += ":");
      } else (s = IC++), (r = ":" + r + "r" + s.toString(32) + ":");
      return (t.memoizedState = r);
    },
    useCacheRefresh: function () {
      return (On().memoizedState = WC.bind(null, Ve));
    },
  };
  (wi.useMemoCache = ep),
    (wi.useHostTransitionStatus = up),
    (wi.useFormState = T0),
    (wi.useActionState = T0),
    (wi.useOptimistic = function (t) {
      var r = On();
      r.memoizedState = r.baseState = t;
      var s = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (r.queue = s), (r = cp.bind(null, Ve, !0, s)), (s.dispatch = r), [t, r]
      );
    });
  var Na = {
    readContext: dn,
    use: nc,
    useCallback: U0,
    useContext: dn,
    useEffect: ip,
    useImperativeHandle: B0,
    useInsertionEffect: N0,
    useLayoutEffect: z0,
    useMemo: L0,
    useReducer: rc,
    useRef: _0,
    useState: function () {
      return rc(ta);
    },
    useDebugValue: sp,
    useDeferredValue: function (t, r) {
      var s = Gt();
      return j0(s, lt.memoizedState, t, r);
    },
    useTransition: function () {
      var t = rc(ta)[0],
        r = Gt().memoizedState;
      return [typeof t == "boolean" ? t : al(t), r];
    },
    useSyncExternalStore: h0,
    useId: F0,
  };
  (Na.useCacheRefresh = q0),
    (Na.useMemoCache = ep),
    (Na.useHostTransitionStatus = up),
    (Na.useFormState = A0),
    (Na.useActionState = A0),
    (Na.useOptimistic = function (t, r) {
      var s = Gt();
      return S0(s, lt, t, r);
    });
  var Ti = {
    readContext: dn,
    use: nc,
    useCallback: U0,
    useContext: dn,
    useEffect: ip,
    useImperativeHandle: B0,
    useInsertionEffect: N0,
    useLayoutEffect: z0,
    useMemo: L0,
    useReducer: np,
    useRef: _0,
    useState: function () {
      return np(ta);
    },
    useDebugValue: sp,
    useDeferredValue: function (t, r) {
      var s = Gt();
      return lt === null ? op(s, t, r) : j0(s, lt.memoizedState, t, r);
    },
    useTransition: function () {
      var t = np(ta)[0],
        r = Gt().memoizedState;
      return [typeof t == "boolean" ? t : al(t), r];
    },
    useSyncExternalStore: h0,
    useId: F0,
  };
  (Ti.useCacheRefresh = q0),
    (Ti.useMemoCache = ep),
    (Ti.useHostTransitionStatus = up),
    (Ti.useFormState = M0),
    (Ti.useActionState = M0),
    (Ti.useOptimistic = function (t, r) {
      var s = Gt();
      return lt !== null
        ? S0(s, lt, t, r)
        : ((s.baseState = t), [t, s.queue.dispatch]);
    });
  function fp(t, r, s, l) {
    (r = t.memoizedState),
      (s = s(l, r)),
      (s = s == null ? r : R({}, r, s)),
      (t.memoizedState = s),
      t.lanes === 0 && (t.updateQueue.baseState = s);
  }
  var dp = {
    isMounted: function (t) {
      return (t = t._reactInternals) ? fe(t) === t : !1;
    },
    enqueueSetState: function (t, r, s) {
      t = t._reactInternals;
      var l = Hn(),
        c = Ba(l);
      (c.payload = r),
        s != null && (c.callback = s),
        (r = Ua(t, c, l)),
        r !== null && (Sn(r, t, l), ll(r, t, l));
    },
    enqueueReplaceState: function (t, r, s) {
      t = t._reactInternals;
      var l = Hn(),
        c = Ba(l);
      (c.tag = 1),
        (c.payload = r),
        s != null && (c.callback = s),
        (r = Ua(t, c, l)),
        r !== null && (Sn(r, t, l), ll(r, t, l));
    },
    enqueueForceUpdate: function (t, r) {
      t = t._reactInternals;
      var s = Hn(),
        l = Ba(s);
      (l.tag = 2),
        r != null && (l.callback = r),
        (r = Ua(t, l, s)),
        r !== null && (Sn(r, t, s), ll(r, t, s));
    },
  };
  function Y0(t, r, s, l, c, p, v) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(l, p, v)
        : r.prototype && r.prototype.isPureReactComponent
        ? !Io(s, l) || !Io(c, p)
        : !0
    );
  }
  function Q0(t, r, s, l) {
    (t = r.state),
      typeof r.componentWillReceiveProps == "function" &&
        r.componentWillReceiveProps(s, l),
      typeof r.UNSAFE_componentWillReceiveProps == "function" &&
        r.UNSAFE_componentWillReceiveProps(s, l),
      r.state !== t && dp.enqueueReplaceState(r, r.state, null);
  }
  function Ai(t, r) {
    var s = r;
    if ("ref" in r) {
      s = {};
      for (var l in r) l !== "ref" && (s[l] = r[l]);
    }
    if ((t = t.defaultProps)) {
      s === r && (s = R({}, s));
      for (var c in t) s[c] === void 0 && (s[c] = t[c]);
    }
    return s;
  }
  var oc =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var r = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(r)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function K0(t) {
    oc(t);
  }
  function X0(t) {
    console.error(t);
  }
  function W0(t) {
    oc(t);
  }
  function lc(t, r) {
    try {
      var s = t.onUncaughtError;
      s(r.value, { componentStack: r.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Z0(t, r, s) {
    try {
      var l = t.onCaughtError;
      l(s.value, {
        componentStack: s.stack,
        errorBoundary: r.tag === 1 ? r.stateNode : null,
      });
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  function pp(t, r, s) {
    return (
      (s = Ba(s)),
      (s.tag = 3),
      (s.payload = { element: null }),
      (s.callback = function () {
        lc(t, r);
      }),
      s
    );
  }
  function J0(t) {
    return (t = Ba(t)), (t.tag = 3), t;
  }
  function ev(t, r, s, l) {
    var c = s.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var p = l.value;
      (t.payload = function () {
        return c(p);
      }),
        (t.callback = function () {
          Z0(r, s, l);
        });
    }
    var v = s.stateNode;
    v !== null &&
      typeof v.componentDidCatch == "function" &&
      (t.callback = function () {
        Z0(r, s, l),
          typeof c != "function" &&
            (Fa === null ? (Fa = new Set([this])) : Fa.add(this));
        var A = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: A !== null ? A : "",
        });
      });
  }
  function JC(t, r, s, l, c) {
    if (
      ((s.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((r = s.alternate),
        r !== null && ol(r, s, c, !0),
        (s = Wn.current),
        s !== null)
      ) {
        switch (s.tag) {
          case 13:
            return (
              Or === null ? Qp() : s.alternate === null && Dt === 0 && (Dt = 3),
              (s.flags &= -257),
              (s.flags |= 65536),
              (s.lanes = c),
              l === qd
                ? (s.flags |= 16384)
                : ((r = s.updateQueue),
                  r === null ? (s.updateQueue = new Set([l])) : r.add(l),
                  Xp(t, l, c)),
              !1
            );
          case 22:
            return (
              (s.flags |= 65536),
              l === qd
                ? (s.flags |= 16384)
                : ((r = s.updateQueue),
                  r === null
                    ? ((r = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (s.updateQueue = r))
                    : ((s = r.retryQueue),
                      s === null ? (r.retryQueue = new Set([l])) : s.add(l)),
                  Xp(t, l, c)),
              !1
            );
        }
        throw Error(i(435, s.tag));
      }
      return Xp(t, l, c), Qp(), !1;
    }
    if (Ze)
      return (
        (r = Wn.current),
        r !== null
          ? (!(r.flags & 65536) && (r.flags |= 256),
            (r.flags |= 65536),
            (r.lanes = c),
            l !== Fd && ((t = Error(i(422), { cause: l })), Xo(Qn(t, s))))
          : (l !== Fd && ((r = Error(i(423), { cause: l })), Xo(Qn(r, s))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (c &= -c),
            (t.lanes |= c),
            (l = Qn(l, s)),
            (c = pp(t.stateNode, l, c)),
            Op(t, c),
            Dt !== 4 && (Dt = 2)),
        !1
      );
    var p = Error(i(520), { cause: l });
    if (
      ((p = Qn(p, s)),
      gl === null ? (gl = [p]) : gl.push(p),
      Dt !== 4 && (Dt = 2),
      r === null)
    )
      return !0;
    (l = Qn(l, s)), (s = r);
    do {
      switch (s.tag) {
        case 3:
          return (
            (s.flags |= 65536),
            (t = c & -c),
            (s.lanes |= t),
            (t = pp(s.stateNode, l, t)),
            Op(s, t),
            !1
          );
        case 1:
          if (
            ((r = s.type),
            (p = s.stateNode),
            (s.flags & 128) === 0 &&
              (typeof r.getDerivedStateFromError == "function" ||
                (p !== null &&
                  typeof p.componentDidCatch == "function" &&
                  (Fa === null || !Fa.has(p)))))
          )
            return (
              (s.flags |= 65536),
              (c &= -c),
              (s.lanes |= c),
              (c = J0(c)),
              ev(c, t, s, l),
              Op(s, c),
              !1
            );
      }
      s = s.return;
    } while (s !== null);
    return !1;
  }
  var tv = Error(i(461)),
    tn = !1;
  function on(t, r, s, l) {
    r.child = t === null ? s0(r, null, s, l) : Ei(r, t.child, s, l);
  }
  function nv(t, r, s, l, c) {
    s = s.render;
    var p = r.ref;
    if ("ref" in l) {
      var v = {};
      for (var A in l) A !== "ref" && (v[A] = l[A]);
    } else v = l;
    return (
      Mi(r),
      (l = Xd(t, r, s, v, p, c)),
      (A = Wd()),
      t !== null && !tn
        ? (Zd(t, r, c), na(t, r, c))
        : (Ze && A && Hd(r), (r.flags |= 1), on(t, r, l, c), r.child)
    );
  }
  function rv(t, r, s, l, c) {
    if (t === null) {
      var p = s.type;
      return typeof p == "function" &&
        !Up(p) &&
        p.defaultProps === void 0 &&
        s.compare === null
        ? ((r.tag = 15), (r.type = p), av(t, r, p, l, c))
        : ((t = pc(s.type, null, l, r, r.mode, c)),
          (t.ref = r.ref),
          (t.return = r),
          (r.child = t));
    }
    if (((p = t.child), !Ep(t, c))) {
      var v = p.memoizedProps;
      if (
        ((s = s.compare), (s = s !== null ? s : Io), s(v, l) && t.ref === r.ref)
      )
        return na(t, r, c);
    }
    return (
      (r.flags |= 1),
      (t = Ha(p, l)),
      (t.ref = r.ref),
      (t.return = r),
      (r.child = t)
    );
  }
  function av(t, r, s, l, c) {
    if (t !== null) {
      var p = t.memoizedProps;
      if (Io(p, l) && t.ref === r.ref)
        if (((tn = !1), (r.pendingProps = l = p), Ep(t, c)))
          t.flags & 131072 && (tn = !0);
        else return (r.lanes = t.lanes), na(t, r, c);
    }
    return hp(t, r, s, l, c);
  }
  function iv(t, r, s) {
    var l = r.pendingProps,
      c = l.children,
      p = (r.stateNode._pendingVisibility & 2) !== 0,
      v = t !== null ? t.memoizedState : null;
    if ((sl(t, r), l.mode === "hidden" || p)) {
      if (r.flags & 128) {
        if (((l = v !== null ? v.baseLanes | s : s), t !== null)) {
          for (c = r.child = t.child, p = 0; c !== null; )
            (p = p | c.lanes | c.childLanes), (c = c.sibling);
          r.childLanes = p & ~l;
        } else (r.childLanes = 0), (r.child = null);
        return sv(t, r, l, s);
      }
      if (s & 536870912)
        (r.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Zu(r, v !== null ? v.cachePool : null),
          v !== null ? o0(r, v) : Vd(),
          l0(r);
      else
        return (
          (r.lanes = r.childLanes = 536870912),
          sv(t, r, v !== null ? v.baseLanes | s : s, s)
        );
    } else
      v !== null
        ? (Zu(r, v.cachePool), o0(r, v), _a(), (r.memoizedState = null))
        : (t !== null && Zu(r, null), Vd(), _a());
    return on(t, r, c, s), r.child;
  }
  function sv(t, r, s, l) {
    var c = Qd();
    return (
      (c = c === null ? null : { parent: Xt._currentValue, pool: c }),
      (r.memoizedState = { baseLanes: s, cachePool: c }),
      t !== null && Zu(r, null),
      Vd(),
      l0(r),
      t !== null && ol(t, r, l, !0),
      null
    );
  }
  function sl(t, r) {
    var s = r.ref;
    if (s === null) t !== null && t.ref !== null && (r.flags |= 2097664);
    else {
      if (typeof s != "function" && typeof s != "object") throw Error(i(284));
      (t === null || t.ref !== s) && (r.flags |= 2097664);
    }
  }
  function hp(t, r, s, l, c) {
    return (
      Mi(r),
      (s = Xd(t, r, s, l, void 0, c)),
      (l = Wd()),
      t !== null && !tn
        ? (Zd(t, r, c), na(t, r, c))
        : (Ze && l && Hd(r), (r.flags |= 1), on(t, r, s, c), r.child)
    );
  }
  function ov(t, r, s, l, c, p) {
    return (
      Mi(r),
      (r.updateQueue = null),
      (s = p0(r, l, s, c)),
      d0(t),
      (l = Wd()),
      t !== null && !tn
        ? (Zd(t, r, p), na(t, r, p))
        : (Ze && l && Hd(r), (r.flags |= 1), on(t, r, s, p), r.child)
    );
  }
  function lv(t, r, s, l, c) {
    if ((Mi(r), r.stateNode === null)) {
      var p = ys,
        v = s.contextType;
      typeof v == "object" && v !== null && (p = dn(v)),
        (p = new s(l, p)),
        (r.memoizedState =
          p.state !== null && p.state !== void 0 ? p.state : null),
        (p.updater = dp),
        (r.stateNode = p),
        (p._reactInternals = r),
        (p = r.stateNode),
        (p.props = l),
        (p.state = r.memoizedState),
        (p.refs = {}),
        Tp(r),
        (v = s.contextType),
        (p.context = typeof v == "object" && v !== null ? dn(v) : ys),
        (p.state = r.memoizedState),
        (v = s.getDerivedStateFromProps),
        typeof v == "function" && (fp(r, s, v, l), (p.state = r.memoizedState)),
        typeof s.getDerivedStateFromProps == "function" ||
          typeof p.getSnapshotBeforeUpdate == "function" ||
          (typeof p.UNSAFE_componentWillMount != "function" &&
            typeof p.componentWillMount != "function") ||
          ((v = p.state),
          typeof p.componentWillMount == "function" && p.componentWillMount(),
          typeof p.UNSAFE_componentWillMount == "function" &&
            p.UNSAFE_componentWillMount(),
          v !== p.state && dp.enqueueReplaceState(p, p.state, null),
          cl(r, l, p, c),
          ul(),
          (p.state = r.memoizedState)),
        typeof p.componentDidMount == "function" && (r.flags |= 4194308),
        (l = !0);
    } else if (t === null) {
      p = r.stateNode;
      var A = r.memoizedProps,
        N = Ai(s, A);
      p.props = N;
      var H = p.context,
        ae = s.contextType;
      (v = ys), typeof ae == "object" && ae !== null && (v = dn(ae));
      var oe = s.getDerivedStateFromProps;
      (ae =
        typeof oe == "function" ||
        typeof p.getSnapshotBeforeUpdate == "function"),
        (A = r.pendingProps !== A),
        ae ||
          (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
            typeof p.componentWillReceiveProps != "function") ||
          ((A || H !== v) && Q0(r, p, l, v)),
        (ka = !1);
      var Y = r.memoizedState;
      (p.state = Y),
        cl(r, l, p, c),
        ul(),
        (H = r.memoizedState),
        A || Y !== H || ka
          ? (typeof oe == "function" &&
              (fp(r, s, oe, l), (H = r.memoizedState)),
            (N = ka || Y0(r, s, N, l, Y, H, v))
              ? (ae ||
                  (typeof p.UNSAFE_componentWillMount != "function" &&
                    typeof p.componentWillMount != "function") ||
                  (typeof p.componentWillMount == "function" &&
                    p.componentWillMount(),
                  typeof p.UNSAFE_componentWillMount == "function" &&
                    p.UNSAFE_componentWillMount()),
                typeof p.componentDidMount == "function" &&
                  (r.flags |= 4194308))
              : (typeof p.componentDidMount == "function" &&
                  (r.flags |= 4194308),
                (r.memoizedProps = l),
                (r.memoizedState = H)),
            (p.props = l),
            (p.state = H),
            (p.context = v),
            (l = N))
          : (typeof p.componentDidMount == "function" && (r.flags |= 4194308),
            (l = !1));
    } else {
      (p = r.stateNode),
        Ap(t, r),
        (v = r.memoizedProps),
        (ae = Ai(s, v)),
        (p.props = ae),
        (oe = r.pendingProps),
        (Y = p.context),
        (H = s.contextType),
        (N = ys),
        typeof H == "object" && H !== null && (N = dn(H)),
        (A = s.getDerivedStateFromProps),
        (H =
          typeof A == "function" ||
          typeof p.getSnapshotBeforeUpdate == "function") ||
          (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
            typeof p.componentWillReceiveProps != "function") ||
          ((v !== oe || Y !== N) && Q0(r, p, l, N)),
        (ka = !1),
        (Y = r.memoizedState),
        (p.state = Y),
        cl(r, l, p, c),
        ul();
      var re = r.memoizedState;
      v !== oe ||
      Y !== re ||
      ka ||
      (t !== null && t.dependencies !== null && uc(t.dependencies))
        ? (typeof A == "function" && (fp(r, s, A, l), (re = r.memoizedState)),
          (ae =
            ka ||
            Y0(r, s, ae, l, Y, re, N) ||
            (t !== null && t.dependencies !== null && uc(t.dependencies)))
            ? (H ||
                (typeof p.UNSAFE_componentWillUpdate != "function" &&
                  typeof p.componentWillUpdate != "function") ||
                (typeof p.componentWillUpdate == "function" &&
                  p.componentWillUpdate(l, re, N),
                typeof p.UNSAFE_componentWillUpdate == "function" &&
                  p.UNSAFE_componentWillUpdate(l, re, N)),
              typeof p.componentDidUpdate == "function" && (r.flags |= 4),
              typeof p.getSnapshotBeforeUpdate == "function" &&
                (r.flags |= 1024))
            : (typeof p.componentDidUpdate != "function" ||
                (v === t.memoizedProps && Y === t.memoizedState) ||
                (r.flags |= 4),
              typeof p.getSnapshotBeforeUpdate != "function" ||
                (v === t.memoizedProps && Y === t.memoizedState) ||
                (r.flags |= 1024),
              (r.memoizedProps = l),
              (r.memoizedState = re)),
          (p.props = l),
          (p.state = re),
          (p.context = N),
          (l = ae))
        : (typeof p.componentDidUpdate != "function" ||
            (v === t.memoizedProps && Y === t.memoizedState) ||
            (r.flags |= 4),
          typeof p.getSnapshotBeforeUpdate != "function" ||
            (v === t.memoizedProps && Y === t.memoizedState) ||
            (r.flags |= 1024),
          (l = !1));
    }
    return (
      (p = l),
      sl(t, r),
      (l = (r.flags & 128) !== 0),
      p || l
        ? ((p = r.stateNode),
          (s =
            l && typeof s.getDerivedStateFromError != "function"
              ? null
              : p.render()),
          (r.flags |= 1),
          t !== null && l
            ? ((r.child = Ei(r, t.child, null, c)),
              (r.child = Ei(r, null, s, c)))
            : on(t, r, s, c),
          (r.memoizedState = p.state),
          (t = r.child))
        : (t = na(t, r, c)),
      t
    );
  }
  function uv(t, r, s, l) {
    return Ko(), (r.flags |= 256), on(t, r, s, l), r.child;
  }
  var mp = { dehydrated: null, treeContext: null, retryLane: 0 };
  function gp(t) {
    return { baseLanes: t, cachePool: f0() };
  }
  function yp(t, r, s) {
    return (t = t !== null ? t.childLanes & ~s : 0), r && (t |= tr), t;
  }
  function cv(t, r, s) {
    var l = r.pendingProps,
      c = !1,
      p = (r.flags & 128) !== 0,
      v;
    if (
      ((v = p) ||
        (v =
          t !== null && t.memoizedState === null ? !1 : (Kt.current & 2) !== 0),
      v && ((c = !0), (r.flags &= -129)),
      (v = (r.flags & 32) !== 0),
      (r.flags &= -33),
      t === null)
    ) {
      if (Ze) {
        if ((c ? Ma(r) : _a(), Ze)) {
          var A = sn,
            N;
          if ((N = A)) {
            e: {
              for (N = A, A = Ar; N.nodeType !== 8; ) {
                if (!A) {
                  A = null;
                  break e;
                }
                if (((N = hr(N.nextSibling)), N === null)) {
                  A = null;
                  break e;
                }
              }
              A = N;
            }
            A !== null
              ? ((r.memoizedState = {
                  dehydrated: A,
                  treeContext: bi !== null ? { id: Zr, overflow: Jr } : null,
                  retryLane: 536870912,
                }),
                (N = er(18, null, null, 0)),
                (N.stateNode = A),
                (N.return = r),
                (r.child = N),
                (bn = r),
                (sn = null),
                (N = !0))
              : (N = !1);
          }
          N || xi(r);
        }
        if (
          ((A = r.memoizedState),
          A !== null && ((A = A.dehydrated), A !== null))
        )
          return A.data === "$!" ? (r.lanes = 16) : (r.lanes = 536870912), null;
        ea(r);
      }
      return (
        (A = l.children),
        (l = l.fallback),
        c
          ? (_a(),
            (c = r.mode),
            (A = bp({ mode: "hidden", children: A }, c)),
            (l = Di(l, c, s, null)),
            (A.return = r),
            (l.return = r),
            (A.sibling = l),
            (r.child = A),
            (c = r.child),
            (c.memoizedState = gp(s)),
            (c.childLanes = yp(t, v, s)),
            (r.memoizedState = mp),
            l)
          : (Ma(r), vp(r, A))
      );
    }
    if (
      ((N = t.memoizedState), N !== null && ((A = N.dehydrated), A !== null))
    ) {
      if (p)
        r.flags & 256
          ? (Ma(r), (r.flags &= -257), (r = Sp(t, r, s)))
          : r.memoizedState !== null
          ? (_a(), (r.child = t.child), (r.flags |= 128), (r = null))
          : (_a(),
            (c = l.fallback),
            (A = r.mode),
            (l = bp({ mode: "visible", children: l.children }, A)),
            (c = Di(c, A, s, null)),
            (c.flags |= 2),
            (l.return = r),
            (c.return = r),
            (l.sibling = c),
            (r.child = l),
            Ei(r, t.child, null, s),
            (l = r.child),
            (l.memoizedState = gp(s)),
            (l.childLanes = yp(t, v, s)),
            (r.memoizedState = mp),
            (r = c));
      else if ((Ma(r), A.data === "$!")) {
        if (((v = A.nextSibling && A.nextSibling.dataset), v)) var H = v.dgst;
        (v = H),
          (l = Error(i(419))),
          (l.stack = ""),
          (l.digest = v),
          Xo({ value: l, source: null, stack: null }),
          (r = Sp(t, r, s));
      } else if (
        (tn || ol(t, r, s, !1), (v = (s & t.childLanes) !== 0), tn || v)
      ) {
        if (((v = xt), v !== null)) {
          if (((l = s & -s), l & 42)) l = 1;
          else
            switch (l) {
              case 2:
                l = 1;
                break;
              case 8:
                l = 4;
                break;
              case 32:
                l = 16;
                break;
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
                l = 64;
                break;
              case 268435456:
                l = 134217728;
                break;
              default:
                l = 0;
            }
          if (
            ((l = l & (v.suspendedLanes | s) ? 0 : l),
            l !== 0 && l !== N.retryLane)
          )
            throw ((N.retryLane = l), Oa(t, l), Sn(v, t, l), tv);
        }
        A.data === "$?" || Qp(), (r = Sp(t, r, s));
      } else
        A.data === "$?"
          ? ((r.flags |= 128),
            (r.child = t.child),
            (r = hw.bind(null, t)),
            (A._reactRetry = r),
            (r = null))
          : ((t = N.treeContext),
            (sn = hr(A.nextSibling)),
            (bn = r),
            (Ze = !0),
            (dr = null),
            (Ar = !1),
            t !== null &&
              ((Kn[Xn++] = Zr),
              (Kn[Xn++] = Jr),
              (Kn[Xn++] = bi),
              (Zr = t.id),
              (Jr = t.overflow),
              (bi = r)),
            (r = vp(r, l.children)),
            (r.flags |= 4096));
      return r;
    }
    return c
      ? (_a(),
        (c = l.fallback),
        (A = r.mode),
        (N = t.child),
        (H = N.sibling),
        (l = Ha(N, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = N.subtreeFlags & 31457280),
        H !== null ? (c = Ha(H, c)) : ((c = Di(c, A, s, null)), (c.flags |= 2)),
        (c.return = r),
        (l.return = r),
        (l.sibling = c),
        (r.child = l),
        (l = c),
        (c = r.child),
        (A = t.child.memoizedState),
        A === null
          ? (A = gp(s))
          : ((N = A.cachePool),
            N !== null
              ? ((H = Xt._currentValue),
                (N = N.parent !== H ? { parent: H, pool: H } : N))
              : (N = f0()),
            (A = { baseLanes: A.baseLanes | s, cachePool: N })),
        (c.memoizedState = A),
        (c.childLanes = yp(t, v, s)),
        (r.memoizedState = mp),
        l)
      : (Ma(r),
        (s = t.child),
        (t = s.sibling),
        (s = Ha(s, { mode: "visible", children: l.children })),
        (s.return = r),
        (s.sibling = null),
        t !== null &&
          ((v = r.deletions),
          v === null ? ((r.deletions = [t]), (r.flags |= 16)) : v.push(t)),
        (r.child = s),
        (r.memoizedState = null),
        s);
  }
  function vp(t, r) {
    return (
      (r = bp({ mode: "visible", children: r }, t.mode)),
      (r.return = t),
      (t.child = r)
    );
  }
  function bp(t, r) {
    return Uv(t, r, 0, null);
  }
  function Sp(t, r, s) {
    return (
      Ei(r, t.child, null, s),
      (t = vp(r, r.pendingProps.children)),
      (t.flags |= 2),
      (r.memoizedState = null),
      t
    );
  }
  function fv(t, r, s) {
    t.lanes |= r;
    var l = t.alternate;
    l !== null && (l.lanes |= r), Cp(t.return, r, s);
  }
  function xp(t, r, s, l, c) {
    var p = t.memoizedState;
    p === null
      ? (t.memoizedState = {
          isBackwards: r,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: s,
          tailMode: c,
        })
      : ((p.isBackwards = r),
        (p.rendering = null),
        (p.renderingStartTime = 0),
        (p.last = l),
        (p.tail = s),
        (p.tailMode = c));
  }
  function dv(t, r, s) {
    var l = r.pendingProps,
      c = l.revealOrder,
      p = l.tail;
    if ((on(t, r, l.children, s), (l = Kt.current), l & 2))
      (l = (l & 1) | 2), (r.flags |= 128);
    else {
      if (t !== null && t.flags & 128)
        e: for (t = r.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && fv(t, s, r);
          else if (t.tag === 19) fv(t, s, r);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === r) break e;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === r) break e;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      l &= 1;
    }
    switch ((Se(Kt, l), c)) {
      case "forwards":
        for (s = r.child, c = null; s !== null; )
          (t = s.alternate),
            t !== null && Wu(t) === null && (c = s),
            (s = s.sibling);
        (s = c),
          s === null
            ? ((c = r.child), (r.child = null))
            : ((c = s.sibling), (s.sibling = null)),
          xp(r, !1, c, s, p);
        break;
      case "backwards":
        for (s = null, c = r.child, r.child = null; c !== null; ) {
          if (((t = c.alternate), t !== null && Wu(t) === null)) {
            r.child = c;
            break;
          }
          (t = c.sibling), (c.sibling = s), (s = c), (c = t);
        }
        xp(r, !0, s, null, p);
        break;
      case "together":
        xp(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function na(t, r, s) {
    if (
      (t !== null && (r.dependencies = t.dependencies),
      (Pa |= r.lanes),
      !(s & r.childLanes))
    )
      if (t !== null) {
        if ((ol(t, r, s, !1), (s & r.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && r.child !== t.child) throw Error(i(153));
    if (r.child !== null) {
      for (
        t = r.child, s = Ha(t, t.pendingProps), r.child = s, s.return = r;
        t.sibling !== null;

      )
        (t = t.sibling),
          (s = s.sibling = Ha(t, t.pendingProps)),
          (s.return = r);
      s.sibling = null;
    }
    return r.child;
  }
  function Ep(t, r) {
    return t.lanes & r ? !0 : ((t = t.dependencies), !!(t !== null && uc(t)));
  }
  function ew(t, r, s) {
    switch (r.tag) {
      case 3:
        rt(r, r.stateNode.containerInfo),
          za(r, Xt, t.memoizedState.cache),
          Ko();
        break;
      case 27:
      case 5:
        Ft(r);
        break;
      case 4:
        rt(r, r.stateNode.containerInfo);
        break;
      case 10:
        za(r, r.type, r.memoizedProps.value);
        break;
      case 13:
        var l = r.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (Ma(r), (r.flags |= 128), null)
            : s & r.child.childLanes
            ? cv(t, r, s)
            : (Ma(r), (t = na(t, r, s)), t !== null ? t.sibling : null);
        Ma(r);
        break;
      case 19:
        var c = (t.flags & 128) !== 0;
        if (
          ((l = (s & r.childLanes) !== 0),
          l || (ol(t, r, s, !1), (l = (s & r.childLanes) !== 0)),
          c)
        ) {
          if (l) return dv(t, r, s);
          r.flags |= 128;
        }
        if (
          ((c = r.memoizedState),
          c !== null &&
            ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          Se(Kt, Kt.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (r.lanes = 0), iv(t, r, s);
      case 24:
        za(r, Xt, t.memoizedState.cache);
    }
    return na(t, r, s);
  }
  function pv(t, r, s) {
    if (t !== null)
      if (t.memoizedProps !== r.pendingProps) tn = !0;
      else {
        if (!Ep(t, s) && !(r.flags & 128)) return (tn = !1), ew(t, r, s);
        tn = !!(t.flags & 131072);
      }
    else (tn = !1), Ze && r.flags & 1048576 && Wy(r, Iu, r.index);
    switch (((r.lanes = 0), r.tag)) {
      case 16:
        e: {
          t = r.pendingProps;
          var l = r.elementType,
            c = l._init;
          if (((l = c(l._payload)), (r.type = l), typeof l == "function"))
            Up(l)
              ? ((t = Ai(l, t)), (r.tag = 1), (r = lv(null, r, l, t, s)))
              : ((r.tag = 0), (r = hp(null, r, l, t, s)));
          else {
            if (l != null) {
              if (((c = l.$$typeof), c === b)) {
                (r.tag = 11), (r = nv(null, r, l, t, s));
                break e;
              } else if (c === O) {
                (r.tag = 14), (r = rv(null, r, l, t, s));
                break e;
              }
            }
            throw ((r = K(l) || l), Error(i(306, r, "")));
          }
        }
        return r;
      case 0:
        return hp(t, r, r.type, r.pendingProps, s);
      case 1:
        return (l = r.type), (c = Ai(l, r.pendingProps)), lv(t, r, l, c, s);
      case 3:
        e: {
          if ((rt(r, r.stateNode.containerInfo), t === null))
            throw Error(i(387));
          var p = r.pendingProps;
          (c = r.memoizedState), (l = c.element), Ap(t, r), cl(r, p, null, s);
          var v = r.memoizedState;
          if (
            ((p = v.cache),
            za(r, Xt, p),
            p !== c.cache && wp(r, [Xt], s, !0),
            ul(),
            (p = v.element),
            c.isDehydrated)
          )
            if (
              ((c = { element: p, isDehydrated: !1, cache: v.cache }),
              (r.updateQueue.baseState = c),
              (r.memoizedState = c),
              r.flags & 256)
            ) {
              r = uv(t, r, p, s);
              break e;
            } else if (p !== l) {
              (l = Qn(Error(i(424)), r)), Xo(l), (r = uv(t, r, p, s));
              break e;
            } else
              for (
                sn = hr(r.stateNode.containerInfo.firstChild),
                  bn = r,
                  Ze = !0,
                  dr = null,
                  Ar = !0,
                  s = s0(r, null, p, s),
                  r.child = s;
                s;

              )
                (s.flags = (s.flags & -3) | 4096), (s = s.sibling);
          else {
            if ((Ko(), p === l)) {
              r = na(t, r, s);
              break e;
            }
            on(t, r, p, s);
          }
          r = r.child;
        }
        return r;
      case 26:
        return (
          sl(t, r),
          t === null
            ? (s = gb(r.type, null, r.pendingProps, null))
              ? (r.memoizedState = s)
              : Ze ||
                ((s = r.type),
                (t = r.pendingProps),
                (l = wc(We.current).createElement(s)),
                (l[fn] = r),
                (l[Tn] = t),
                ln(l, s, t),
                en(l),
                (r.stateNode = l))
            : (r.memoizedState = gb(
                r.type,
                t.memoizedProps,
                r.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          Ft(r),
          t === null &&
            Ze &&
            ((l = r.stateNode = pb(r.type, r.pendingProps, We.current)),
            (bn = r),
            (Ar = !0),
            (sn = hr(l.firstChild))),
          (l = r.pendingProps.children),
          t !== null || Ze ? on(t, r, l, s) : (r.child = Ei(r, null, l, s)),
          sl(t, r),
          r.child
        );
      case 5:
        return (
          t === null &&
            Ze &&
            ((c = l = sn) &&
              ((l = _w(l, r.type, r.pendingProps, Ar)),
              l !== null
                ? ((r.stateNode = l),
                  (bn = r),
                  (sn = hr(l.firstChild)),
                  (Ar = !1),
                  (c = !0))
                : (c = !1)),
            c || xi(r)),
          Ft(r),
          (c = r.type),
          (p = r.pendingProps),
          (v = t !== null ? t.memoizedProps : null),
          (l = p.children),
          lh(c, p) ? (l = null) : v !== null && lh(c, v) && (r.flags |= 32),
          r.memoizedState !== null &&
            ((c = Xd(t, r, YC, null, null, s)), (wl._currentValue = c)),
          sl(t, r),
          on(t, r, l, s),
          r.child
        );
      case 6:
        return (
          t === null &&
            Ze &&
            ((t = s = sn) &&
              ((s = Dw(s, r.pendingProps, Ar)),
              s !== null
                ? ((r.stateNode = s), (bn = r), (sn = null), (t = !0))
                : (t = !1)),
            t || xi(r)),
          null
        );
      case 13:
        return cv(t, r, s);
      case 4:
        return (
          rt(r, r.stateNode.containerInfo),
          (l = r.pendingProps),
          t === null ? (r.child = Ei(r, null, l, s)) : on(t, r, l, s),
          r.child
        );
      case 11:
        return nv(t, r, r.type, r.pendingProps, s);
      case 7:
        return on(t, r, r.pendingProps, s), r.child;
      case 8:
        return on(t, r, r.pendingProps.children, s), r.child;
      case 12:
        return on(t, r, r.pendingProps.children, s), r.child;
      case 10:
        return (
          (l = r.pendingProps),
          za(r, r.type, l.value),
          on(t, r, l.children, s),
          r.child
        );
      case 9:
        return (
          (c = r.type._context),
          (l = r.pendingProps.children),
          Mi(r),
          (c = dn(c)),
          (l = l(c)),
          (r.flags |= 1),
          on(t, r, l, s),
          r.child
        );
      case 14:
        return rv(t, r, r.type, r.pendingProps, s);
      case 15:
        return av(t, r, r.type, r.pendingProps, s);
      case 19:
        return dv(t, r, s);
      case 22:
        return iv(t, r, s);
      case 24:
        return (
          Mi(r),
          (l = dn(Xt)),
          t === null
            ? ((c = Qd()),
              c === null &&
                ((c = xt),
                (p = Id()),
                (c.pooledCache = p),
                p.refCount++,
                p !== null && (c.pooledCacheLanes |= s),
                (c = p)),
              (r.memoizedState = { parent: l, cache: c }),
              Tp(r),
              za(r, Xt, c))
            : (t.lanes & s && (Ap(t, r), cl(r, null, null, s), ul()),
              (c = t.memoizedState),
              (p = r.memoizedState),
              c.parent !== l
                ? ((c = { parent: l, cache: l }),
                  (r.memoizedState = c),
                  r.lanes === 0 &&
                    (r.memoizedState = r.updateQueue.baseState = c),
                  za(r, Xt, l))
                : ((l = p.cache),
                  za(r, Xt, l),
                  l !== c.cache && wp(r, [Xt], s, !0))),
          on(t, r, r.pendingProps.children, s),
          r.child
        );
      case 29:
        throw r.pendingProps;
    }
    throw Error(i(156, r.tag));
  }
  var Rp = Te(null),
    Oi = null,
    ra = null;
  function za(t, r, s) {
    Se(Rp, r._currentValue), (r._currentValue = s);
  }
  function aa(t) {
    (t._currentValue = Rp.current), Ae(Rp);
  }
  function Cp(t, r, s) {
    for (; t !== null; ) {
      var l = t.alternate;
      if (
        ((t.childLanes & r) !== r
          ? ((t.childLanes |= r), l !== null && (l.childLanes |= r))
          : l !== null && (l.childLanes & r) !== r && (l.childLanes |= r),
        t === s)
      )
        break;
      t = t.return;
    }
  }
  function wp(t, r, s, l) {
    var c = t.child;
    for (c !== null && (c.return = t); c !== null; ) {
      var p = c.dependencies;
      if (p !== null) {
        var v = c.child;
        p = p.firstContext;
        e: for (; p !== null; ) {
          var A = p;
          p = c;
          for (var N = 0; N < r.length; N++)
            if (A.context === r[N]) {
              (p.lanes |= s),
                (A = p.alternate),
                A !== null && (A.lanes |= s),
                Cp(p.return, s, t),
                l || (v = null);
              break e;
            }
          p = A.next;
        }
      } else if (c.tag === 18) {
        if (((v = c.return), v === null)) throw Error(i(341));
        (v.lanes |= s),
          (p = v.alternate),
          p !== null && (p.lanes |= s),
          Cp(v, s, t),
          (v = null);
      } else v = c.child;
      if (v !== null) v.return = c;
      else
        for (v = c; v !== null; ) {
          if (v === t) {
            v = null;
            break;
          }
          if (((c = v.sibling), c !== null)) {
            (c.return = v.return), (v = c);
            break;
          }
          v = v.return;
        }
      c = v;
    }
  }
  function ol(t, r, s, l) {
    t = null;
    for (var c = r, p = !1; c !== null; ) {
      if (!p) {
        if (c.flags & 524288) p = !0;
        else if (c.flags & 262144) break;
      }
      if (c.tag === 10) {
        var v = c.alternate;
        if (v === null) throw Error(i(387));
        if (((v = v.memoizedProps), v !== null)) {
          var A = c.type;
          Un(c.pendingProps.value, v.value) ||
            (t !== null ? t.push(A) : (t = [A]));
        }
      } else if (c === Le.current) {
        if (((v = c.alternate), v === null)) throw Error(i(387));
        v.memoizedState.memoizedState !== c.memoizedState.memoizedState &&
          (t !== null ? t.push(wl) : (t = [wl]));
      }
      c = c.return;
    }
    t !== null && wp(r, t, s, l), (r.flags |= 262144);
  }
  function uc(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Un(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Mi(t) {
    (Oi = t),
      (ra = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function dn(t) {
    return hv(Oi, t);
  }
  function cc(t, r) {
    return Oi === null && Mi(t), hv(t, r);
  }
  function hv(t, r) {
    var s = r._currentValue;
    if (((r = { context: r, memoizedValue: s, next: null }), ra === null)) {
      if (t === null) throw Error(i(308));
      (ra = r),
        (t.dependencies = { lanes: 0, firstContext: r }),
        (t.flags |= 524288);
    } else ra = ra.next = r;
    return s;
  }
  var ka = !1;
  function Tp(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Ap(t, r) {
    (t = t.updateQueue),
      r.updateQueue === t &&
        (r.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function Ba(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Ua(t, r, s) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), Mt & 2)) {
      var c = l.pending;
      return (
        c === null ? (r.next = r) : ((r.next = c.next), (c.next = r)),
        (l.pending = r),
        (r = Vu(t)),
        Ky(t, null, s),
        r
      );
    }
    return qu(t, l, r, s), Vu(t);
  }
  function ll(t, r, s) {
    if (
      ((r = r.updateQueue), r !== null && ((r = r.shared), (s & 4194176) !== 0))
    ) {
      var l = r.lanes;
      (l &= t.pendingLanes), (s |= l), (r.lanes = s), ry(t, s);
    }
  }
  function Op(t, r) {
    var s = t.updateQueue,
      l = t.alternate;
    if (l !== null && ((l = l.updateQueue), s === l)) {
      var c = null,
        p = null;
      if (((s = s.firstBaseUpdate), s !== null)) {
        do {
          var v = {
            lane: s.lane,
            tag: s.tag,
            payload: s.payload,
            callback: null,
            next: null,
          };
          p === null ? (c = p = v) : (p = p.next = v), (s = s.next);
        } while (s !== null);
        p === null ? (c = p = r) : (p = p.next = r);
      } else c = p = r;
      (s = {
        baseState: l.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: p,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (t.updateQueue = s);
      return;
    }
    (t = s.lastBaseUpdate),
      t === null ? (s.firstBaseUpdate = r) : (t.next = r),
      (s.lastBaseUpdate = r);
  }
  var Mp = !1;
  function ul() {
    if (Mp) {
      var t = Rs;
      if (t !== null) throw t;
    }
  }
  function cl(t, r, s, l) {
    Mp = !1;
    var c = t.updateQueue;
    ka = !1;
    var p = c.firstBaseUpdate,
      v = c.lastBaseUpdate,
      A = c.shared.pending;
    if (A !== null) {
      c.shared.pending = null;
      var N = A,
        H = N.next;
      (N.next = null), v === null ? (p = H) : (v.next = H), (v = N);
      var ae = t.alternate;
      ae !== null &&
        ((ae = ae.updateQueue),
        (A = ae.lastBaseUpdate),
        A !== v &&
          (A === null ? (ae.firstBaseUpdate = H) : (A.next = H),
          (ae.lastBaseUpdate = N)));
    }
    if (p !== null) {
      var oe = c.baseState;
      (v = 0), (ae = H = N = null), (A = p);
      do {
        var Y = A.lane & -536870913,
          re = Y !== A.lane;
        if (re ? (Xe & Y) === Y : (l & Y) === Y) {
          Y !== 0 && Y === Es && (Mp = !0),
            ae !== null &&
              (ae = ae.next =
                {
                  lane: 0,
                  tag: A.tag,
                  payload: A.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var Re = t,
              Be = A;
            Y = r;
            var Nt = s;
            switch (Be.tag) {
              case 1:
                if (((Re = Be.payload), typeof Re == "function")) {
                  oe = Re.call(Nt, oe, Y);
                  break e;
                }
                oe = Re;
                break e;
              case 3:
                Re.flags = (Re.flags & -65537) | 128;
              case 0:
                if (
                  ((Re = Be.payload),
                  (Y = typeof Re == "function" ? Re.call(Nt, oe, Y) : Re),
                  Y == null)
                )
                  break e;
                oe = R({}, oe, Y);
                break e;
              case 2:
                ka = !0;
            }
          }
          (Y = A.callback),
            Y !== null &&
              ((t.flags |= 64),
              re && (t.flags |= 8192),
              (re = c.callbacks),
              re === null ? (c.callbacks = [Y]) : re.push(Y));
        } else
          (re = {
            lane: Y,
            tag: A.tag,
            payload: A.payload,
            callback: A.callback,
            next: null,
          }),
            ae === null ? ((H = ae = re), (N = oe)) : (ae = ae.next = re),
            (v |= Y);
        if (((A = A.next), A === null)) {
          if (((A = c.shared.pending), A === null)) break;
          (re = A),
            (A = re.next),
            (re.next = null),
            (c.lastBaseUpdate = re),
            (c.shared.pending = null);
        }
      } while (!0);
      ae === null && (N = oe),
        (c.baseState = N),
        (c.firstBaseUpdate = H),
        (c.lastBaseUpdate = ae),
        p === null && (c.shared.lanes = 0),
        (Pa |= v),
        (t.lanes = v),
        (t.memoizedState = oe);
    }
  }
  function mv(t, r) {
    if (typeof t != "function") throw Error(i(191, t));
    t.call(r);
  }
  function gv(t, r) {
    var s = t.callbacks;
    if (s !== null)
      for (t.callbacks = null, t = 0; t < s.length; t++) mv(s[t], r);
  }
  function fl(t, r) {
    try {
      var s = r.updateQueue,
        l = s !== null ? s.lastEffect : null;
      if (l !== null) {
        var c = l.next;
        s = c;
        do {
          if ((s.tag & t) === t) {
            l = void 0;
            var p = s.create,
              v = s.inst;
            (l = p()), (v.destroy = l);
          }
          s = s.next;
        } while (s !== c);
      }
    } catch (A) {
      ht(r, r.return, A);
    }
  }
  function La(t, r, s) {
    try {
      var l = r.updateQueue,
        c = l !== null ? l.lastEffect : null;
      if (c !== null) {
        var p = c.next;
        l = p;
        do {
          if ((l.tag & t) === t) {
            var v = l.inst,
              A = v.destroy;
            if (A !== void 0) {
              (v.destroy = void 0), (c = r);
              var N = s;
              try {
                A();
              } catch (H) {
                ht(c, N, H);
              }
            }
          }
          l = l.next;
        } while (l !== p);
      }
    } catch (H) {
      ht(r, r.return, H);
    }
  }
  function yv(t) {
    var r = t.updateQueue;
    if (r !== null) {
      var s = t.stateNode;
      try {
        gv(r, s);
      } catch (l) {
        ht(t, t.return, l);
      }
    }
  }
  function vv(t, r, s) {
    (s.props = Ai(t.type, t.memoizedProps)), (s.state = t.memoizedState);
    try {
      s.componentWillUnmount();
    } catch (l) {
      ht(t, r, l);
    }
  }
  function _i(t, r) {
    try {
      var s = t.ref;
      if (s !== null) {
        var l = t.stateNode;
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var c = l;
            break;
          default:
            c = l;
        }
        typeof s == "function" ? (t.refCleanup = s(c)) : (s.current = c);
      }
    } catch (p) {
      ht(t, r, p);
    }
  }
  function Ln(t, r) {
    var s = t.ref,
      l = t.refCleanup;
    if (s !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (c) {
          ht(t, r, c);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof s == "function")
        try {
          s(null);
        } catch (c) {
          ht(t, r, c);
        }
      else s.current = null;
  }
  function bv(t) {
    var r = t.type,
      s = t.memoizedProps,
      l = t.stateNode;
    try {
      e: switch (r) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          s.autoFocus && l.focus();
          break e;
        case "img":
          s.src ? (l.src = s.src) : s.srcSet && (l.srcset = s.srcSet);
      }
    } catch (c) {
      ht(t, t.return, c);
    }
  }
  function Sv(t, r, s) {
    try {
      var l = t.stateNode;
      ww(l, t.type, s, r), (l[Tn] = r);
    } catch (c) {
      ht(t, t.return, c);
    }
  }
  function xv(t) {
    return (
      t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 || t.tag === 4
    );
  }
  function _p(t) {
    e: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || xv(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 27 && t.tag !== 18;

      ) {
        if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Dp(t, r, s) {
    var l = t.tag;
    if (l === 5 || l === 6)
      (t = t.stateNode),
        r
          ? s.nodeType === 8
            ? s.parentNode.insertBefore(t, r)
            : s.insertBefore(t, r)
          : (s.nodeType === 8
              ? ((r = s.parentNode), r.insertBefore(t, s))
              : ((r = s), r.appendChild(t)),
            (s = s._reactRootContainer),
            s != null || r.onclick !== null || (r.onclick = Cc));
    else if (l !== 4 && l !== 27 && ((t = t.child), t !== null))
      for (Dp(t, r, s), t = t.sibling; t !== null; )
        Dp(t, r, s), (t = t.sibling);
  }
  function fc(t, r, s) {
    var l = t.tag;
    if (l === 5 || l === 6)
      (t = t.stateNode), r ? s.insertBefore(t, r) : s.appendChild(t);
    else if (l !== 4 && l !== 27 && ((t = t.child), t !== null))
      for (fc(t, r, s), t = t.sibling; t !== null; )
        fc(t, r, s), (t = t.sibling);
  }
  var ia = !1,
    _t = !1,
    Np = !1,
    Ev = typeof WeakSet == "function" ? WeakSet : Set,
    nn = null,
    Rv = !1;
  function tw(t, r) {
    if (((t = t.containerInfo), (sh = Dc), (t = Hy(t)), kd(t))) {
      if ("selectionStart" in t)
        var s = { start: t.selectionStart, end: t.selectionEnd };
      else
        e: {
          s = ((s = t.ownerDocument) && s.defaultView) || window;
          var l = s.getSelection && s.getSelection();
          if (l && l.rangeCount !== 0) {
            s = l.anchorNode;
            var c = l.anchorOffset,
              p = l.focusNode;
            l = l.focusOffset;
            try {
              s.nodeType, p.nodeType;
            } catch {
              s = null;
              break e;
            }
            var v = 0,
              A = -1,
              N = -1,
              H = 0,
              ae = 0,
              oe = t,
              Y = null;
            t: for (;;) {
              for (
                var re;
                oe !== s || (c !== 0 && oe.nodeType !== 3) || (A = v + c),
                  oe !== p || (l !== 0 && oe.nodeType !== 3) || (N = v + l),
                  oe.nodeType === 3 && (v += oe.nodeValue.length),
                  (re = oe.firstChild) !== null;

              )
                (Y = oe), (oe = re);
              for (;;) {
                if (oe === t) break t;
                if (
                  (Y === s && ++H === c && (A = v),
                  Y === p && ++ae === l && (N = v),
                  (re = oe.nextSibling) !== null)
                )
                  break;
                (oe = Y), (Y = oe.parentNode);
              }
              oe = re;
            }
            s = A === -1 || N === -1 ? null : { start: A, end: N };
          } else s = null;
        }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (
      oh = { focusedElem: t, selectionRange: s }, Dc = !1, nn = r;
      nn !== null;

    )
      if (
        ((r = nn), (t = r.child), (r.subtreeFlags & 1028) !== 0 && t !== null)
      )
        (t.return = r), (nn = t);
      else
        for (; nn !== null; ) {
          switch (((r = nn), (p = r.alternate), (t = r.flags), r.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (t & 1024 && p !== null) {
                (t = void 0),
                  (s = r),
                  (c = p.memoizedProps),
                  (p = p.memoizedState),
                  (l = s.stateNode);
                try {
                  var Re = Ai(s.type, c, s.elementType === s.type);
                  (t = l.getSnapshotBeforeUpdate(Re, p)),
                    (l.__reactInternalSnapshotBeforeUpdate = t);
                } catch (Be) {
                  ht(s, s.return, Be);
                }
              }
              break;
            case 3:
              if (t & 1024) {
                if (
                  ((t = r.stateNode.containerInfo), (s = t.nodeType), s === 9)
                )
                  fh(t);
                else if (s === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      fh(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if (t & 1024) throw Error(i(163));
          }
          if (((t = r.sibling), t !== null)) {
            (t.return = r.return), (nn = t);
            break;
          }
          nn = r.return;
        }
    return (Re = Rv), (Rv = !1), Re;
  }
  function Cv(t, r, s) {
    var l = s.flags;
    switch (s.tag) {
      case 0:
      case 11:
      case 15:
        oa(t, s), l & 4 && fl(5, s);
        break;
      case 1:
        if ((oa(t, s), l & 4))
          if (((t = s.stateNode), r === null))
            try {
              t.componentDidMount();
            } catch (A) {
              ht(s, s.return, A);
            }
          else {
            var c = Ai(s.type, r.memoizedProps);
            r = r.memoizedState;
            try {
              t.componentDidUpdate(c, r, t.__reactInternalSnapshotBeforeUpdate);
            } catch (A) {
              ht(s, s.return, A);
            }
          }
        l & 64 && yv(s), l & 512 && _i(s, s.return);
        break;
      case 3:
        if ((oa(t, s), l & 64 && ((l = s.updateQueue), l !== null))) {
          if (((t = null), s.child !== null))
            switch (s.child.tag) {
              case 27:
              case 5:
                t = s.child.stateNode;
                break;
              case 1:
                t = s.child.stateNode;
            }
          try {
            gv(l, t);
          } catch (A) {
            ht(s, s.return, A);
          }
        }
        break;
      case 26:
        oa(t, s), l & 512 && _i(s, s.return);
        break;
      case 27:
      case 5:
        oa(t, s), r === null && l & 4 && bv(s), l & 512 && _i(s, s.return);
        break;
      case 12:
        oa(t, s);
        break;
      case 13:
        oa(t, s), l & 4 && Av(t, s);
        break;
      case 22:
        if (((c = s.memoizedState !== null || ia), !c)) {
          r = (r !== null && r.memoizedState !== null) || _t;
          var p = ia,
            v = _t;
          (ia = c),
            (_t = r) && !v ? ja(t, s, (s.subtreeFlags & 8772) !== 0) : oa(t, s),
            (ia = p),
            (_t = v);
        }
        l & 512 &&
          (s.memoizedProps.mode === "manual"
            ? _i(s, s.return)
            : Ln(s, s.return));
        break;
      default:
        oa(t, s);
    }
  }
  function wv(t) {
    var r = t.alternate;
    r !== null && ((t.alternate = null), wv(r)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((r = t.stateNode), r !== null && vd(r)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var It = null,
    jn = !1;
  function sa(t, r, s) {
    for (s = s.child; s !== null; ) Tv(t, r, s), (s = s.sibling);
  }
  function Tv(t, r, s) {
    if (Jt && typeof Jt.onCommitFiberUnmount == "function")
      try {
        Jt.onCommitFiberUnmount(wn, s);
      } catch {}
    switch (s.tag) {
      case 26:
        _t || Ln(s, r),
          sa(t, r, s),
          s.memoizedState
            ? s.memoizedState.count--
            : s.stateNode && ((s = s.stateNode), s.parentNode.removeChild(s));
        break;
      case 27:
        _t || Ln(s, r);
        var l = It,
          c = jn;
        for (
          It = s.stateNode, sa(t, r, s), s = s.stateNode, r = s.attributes;
          r.length;

        )
          s.removeAttributeNode(r[0]);
        vd(s), (It = l), (jn = c);
        break;
      case 5:
        _t || Ln(s, r);
      case 6:
        c = It;
        var p = jn;
        if (((It = null), sa(t, r, s), (It = c), (jn = p), It !== null))
          if (jn)
            try {
              (t = It),
                (l = s.stateNode),
                t.nodeType === 8
                  ? t.parentNode.removeChild(l)
                  : t.removeChild(l);
            } catch (v) {
              ht(s, r, v);
            }
          else
            try {
              It.removeChild(s.stateNode);
            } catch (v) {
              ht(s, r, v);
            }
        break;
      case 18:
        It !== null &&
          (jn
            ? ((r = It),
              (s = s.stateNode),
              r.nodeType === 8
                ? ch(r.parentNode, s)
                : r.nodeType === 1 && ch(r, s),
              Ml(r))
            : ch(It, s.stateNode));
        break;
      case 4:
        (l = It),
          (c = jn),
          (It = s.stateNode.containerInfo),
          (jn = !0),
          sa(t, r, s),
          (It = l),
          (jn = c);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        _t || La(2, s, r), _t || La(4, s, r), sa(t, r, s);
        break;
      case 1:
        _t ||
          (Ln(s, r),
          (l = s.stateNode),
          typeof l.componentWillUnmount == "function" && vv(s, r, l)),
          sa(t, r, s);
        break;
      case 21:
        sa(t, r, s);
        break;
      case 22:
        _t || Ln(s, r),
          (_t = (l = _t) || s.memoizedState !== null),
          sa(t, r, s),
          (_t = l);
        break;
      default:
        sa(t, r, s);
    }
  }
  function Av(t, r) {
    if (
      r.memoizedState === null &&
      ((t = r.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Ml(t);
      } catch (s) {
        ht(r, r.return, s);
      }
  }
  function nw(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var r = t.stateNode;
        return r === null && (r = t.stateNode = new Ev()), r;
      case 22:
        return (
          (t = t.stateNode),
          (r = t._retryCache),
          r === null && (r = t._retryCache = new Ev()),
          r
        );
      default:
        throw Error(i(435, t.tag));
    }
  }
  function zp(t, r) {
    var s = nw(t);
    r.forEach(function (l) {
      var c = mw.bind(null, t, l);
      s.has(l) || (s.add(l), l.then(c, c));
    });
  }
  function Zn(t, r) {
    var s = r.deletions;
    if (s !== null)
      for (var l = 0; l < s.length; l++) {
        var c = s[l],
          p = t,
          v = r,
          A = v;
        e: for (; A !== null; ) {
          switch (A.tag) {
            case 27:
            case 5:
              (It = A.stateNode), (jn = !1);
              break e;
            case 3:
              (It = A.stateNode.containerInfo), (jn = !0);
              break e;
            case 4:
              (It = A.stateNode.containerInfo), (jn = !0);
              break e;
          }
          A = A.return;
        }
        if (It === null) throw Error(i(160));
        Tv(p, v, c),
          (It = null),
          (jn = !1),
          (p = c.alternate),
          p !== null && (p.return = null),
          (c.return = null);
      }
    if (r.subtreeFlags & 13878)
      for (r = r.child; r !== null; ) Ov(r, t), (r = r.sibling);
  }
  var pr = null;
  function Ov(t, r) {
    var s = t.alternate,
      l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Zn(r, t),
          Jn(t),
          l & 4 && (La(3, t, t.return), fl(3, t), La(5, t, t.return));
        break;
      case 1:
        Zn(r, t),
          Jn(t),
          l & 512 && (_t || s === null || Ln(s, s.return)),
          l & 64 &&
            ia &&
            ((t = t.updateQueue),
            t !== null &&
              ((l = t.callbacks),
              l !== null &&
                ((s = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = s === null ? l : s.concat(l)))));
        break;
      case 26:
        var c = pr;
        if (
          (Zn(r, t),
          Jn(t),
          l & 512 && (_t || s === null || Ln(s, s.return)),
          l & 4)
        ) {
          var p = s !== null ? s.memoizedState : null;
          if (((l = t.memoizedState), s === null))
            if (l === null)
              if (t.stateNode === null) {
                e: {
                  (l = t.type),
                    (s = t.memoizedProps),
                    (c = c.ownerDocument || c);
                  t: switch (l) {
                    case "title":
                      (p = c.getElementsByTagName("title")[0]),
                        (!p ||
                          p[Lo] ||
                          p[fn] ||
                          p.namespaceURI === "http://www.w3.org/2000/svg" ||
                          p.hasAttribute("itemprop")) &&
                          ((p = c.createElement(l)),
                          c.head.insertBefore(
                            p,
                            c.querySelector("head > title")
                          )),
                        ln(p, l, s),
                        (p[fn] = t),
                        en(p),
                        (l = p);
                      break e;
                    case "link":
                      var v = bb("link", "href", c).get(l + (s.href || ""));
                      if (v) {
                        for (var A = 0; A < v.length; A++)
                          if (
                            ((p = v[A]),
                            p.getAttribute("href") ===
                              (s.href == null ? null : s.href) &&
                              p.getAttribute("rel") ===
                                (s.rel == null ? null : s.rel) &&
                              p.getAttribute("title") ===
                                (s.title == null ? null : s.title) &&
                              p.getAttribute("crossorigin") ===
                                (s.crossOrigin == null ? null : s.crossOrigin))
                          ) {
                            v.splice(A, 1);
                            break t;
                          }
                      }
                      (p = c.createElement(l)),
                        ln(p, l, s),
                        c.head.appendChild(p);
                      break;
                    case "meta":
                      if (
                        (v = bb("meta", "content", c).get(
                          l + (s.content || "")
                        ))
                      ) {
                        for (A = 0; A < v.length; A++)
                          if (
                            ((p = v[A]),
                            p.getAttribute("content") ===
                              (s.content == null ? null : "" + s.content) &&
                              p.getAttribute("name") ===
                                (s.name == null ? null : s.name) &&
                              p.getAttribute("property") ===
                                (s.property == null ? null : s.property) &&
                              p.getAttribute("http-equiv") ===
                                (s.httpEquiv == null ? null : s.httpEquiv) &&
                              p.getAttribute("charset") ===
                                (s.charSet == null ? null : s.charSet))
                          ) {
                            v.splice(A, 1);
                            break t;
                          }
                      }
                      (p = c.createElement(l)),
                        ln(p, l, s),
                        c.head.appendChild(p);
                      break;
                    default:
                      throw Error(i(468, l));
                  }
                  (p[fn] = t), en(p), (l = p);
                }
                t.stateNode = l;
              } else Sb(c, t.type, t.stateNode);
            else t.stateNode = vb(c, l, t.memoizedProps);
          else
            p !== l
              ? (p === null
                  ? s.stateNode !== null &&
                    ((s = s.stateNode), s.parentNode.removeChild(s))
                  : p.count--,
                l === null
                  ? Sb(c, t.type, t.stateNode)
                  : vb(c, l, t.memoizedProps))
              : l === null &&
                t.stateNode !== null &&
                Sv(t, t.memoizedProps, s.memoizedProps);
        }
        break;
      case 27:
        if (l & 4 && t.alternate === null) {
          (c = t.stateNode), (p = t.memoizedProps);
          try {
            for (var N = c.firstChild; N; ) {
              var H = N.nextSibling,
                ae = N.nodeName;
              N[Lo] ||
                ae === "HEAD" ||
                ae === "BODY" ||
                ae === "SCRIPT" ||
                ae === "STYLE" ||
                (ae === "LINK" && N.rel.toLowerCase() === "stylesheet") ||
                c.removeChild(N),
                (N = H);
            }
            for (var oe = t.type, Y = c.attributes; Y.length; )
              c.removeAttributeNode(Y[0]);
            ln(c, oe, p), (c[fn] = t), (c[Tn] = p);
          } catch (Re) {
            ht(t, t.return, Re);
          }
        }
      case 5:
        if (
          (Zn(r, t),
          Jn(t),
          l & 512 && (_t || s === null || Ln(s, s.return)),
          t.flags & 32)
        ) {
          c = t.stateNode;
          try {
            cs(c, "");
          } catch (Re) {
            ht(t, t.return, Re);
          }
        }
        l & 4 &&
          t.stateNode != null &&
          ((c = t.memoizedProps), Sv(t, c, s !== null ? s.memoizedProps : c)),
          l & 1024 && (Np = !0);
        break;
      case 6:
        if ((Zn(r, t), Jn(t), l & 4)) {
          if (t.stateNode === null) throw Error(i(162));
          (l = t.memoizedProps), (s = t.stateNode);
          try {
            s.nodeValue = l;
          } catch (Re) {
            ht(t, t.return, Re);
          }
        }
        break;
      case 3:
        if (
          ((Oc = null),
          (c = pr),
          (pr = Tc(r.containerInfo)),
          Zn(r, t),
          (pr = c),
          Jn(t),
          l & 4 && s !== null && s.memoizedState.isDehydrated)
        )
          try {
            Ml(r.containerInfo);
          } catch (Re) {
            ht(t, t.return, Re);
          }
        Np && ((Np = !1), Mv(t));
        break;
      case 4:
        (l = pr),
          (pr = Tc(t.stateNode.containerInfo)),
          Zn(r, t),
          Jn(t),
          (pr = l);
        break;
      case 12:
        Zn(r, t), Jn(t);
        break;
      case 13:
        Zn(r, t),
          Jn(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (s !== null && s.memoizedState !== null) &&
            (Fp = ge()),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), zp(t, l)));
        break;
      case 22:
        if (
          (l & 512 && (_t || s === null || Ln(s, s.return)),
          (N = t.memoizedState !== null),
          (H = s !== null && s.memoizedState !== null),
          (ae = ia),
          (oe = _t),
          (ia = ae || N),
          (_t = oe || H),
          Zn(r, t),
          (_t = oe),
          (ia = ae),
          Jn(t),
          (r = t.stateNode),
          (r._current = t),
          (r._visibility &= -3),
          (r._visibility |= r._pendingVisibility & 2),
          l & 8192 &&
            ((r._visibility = N ? r._visibility & -2 : r._visibility | 1),
            N && ((r = ia || _t), s === null || H || r || As(t)),
            t.memoizedProps === null || t.memoizedProps.mode !== "manual"))
        )
          e: for (s = null, r = t; ; ) {
            if (r.tag === 5 || r.tag === 26 || r.tag === 27) {
              if (s === null) {
                H = s = r;
                try {
                  if (((c = H.stateNode), N))
                    (p = c.style),
                      typeof p.setProperty == "function"
                        ? p.setProperty("display", "none", "important")
                        : (p.display = "none");
                  else {
                    (v = H.stateNode), (A = H.memoizedProps.style);
                    var re =
                      A != null && A.hasOwnProperty("display")
                        ? A.display
                        : null;
                    v.style.display =
                      re == null || typeof re == "boolean"
                        ? ""
                        : ("" + re).trim();
                  }
                } catch (Re) {
                  ht(H, H.return, Re);
                }
              }
            } else if (r.tag === 6) {
              if (s === null) {
                H = r;
                try {
                  H.stateNode.nodeValue = N ? "" : H.memoizedProps;
                } catch (Re) {
                  ht(H, H.return, Re);
                }
              }
            } else if (
              ((r.tag !== 22 && r.tag !== 23) ||
                r.memoizedState === null ||
                r === t) &&
              r.child !== null
            ) {
              (r.child.return = r), (r = r.child);
              continue;
            }
            if (r === t) break e;
            for (; r.sibling === null; ) {
              if (r.return === null || r.return === t) break e;
              s === r && (s = null), (r = r.return);
            }
            s === r && (s = null),
              (r.sibling.return = r.return),
              (r = r.sibling);
          }
        l & 4 &&
          ((l = t.updateQueue),
          l !== null &&
            ((s = l.retryQueue),
            s !== null && ((l.retryQueue = null), zp(t, s))));
        break;
      case 19:
        Zn(r, t),
          Jn(t),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), zp(t, l)));
        break;
      case 21:
        break;
      default:
        Zn(r, t), Jn(t);
    }
  }
  function Jn(t) {
    var r = t.flags;
    if (r & 2) {
      try {
        if (t.tag !== 27) {
          e: {
            for (var s = t.return; s !== null; ) {
              if (xv(s)) {
                var l = s;
                break e;
              }
              s = s.return;
            }
            throw Error(i(160));
          }
          switch (l.tag) {
            case 27:
              var c = l.stateNode,
                p = _p(t);
              fc(t, p, c);
              break;
            case 5:
              var v = l.stateNode;
              l.flags & 32 && (cs(v, ""), (l.flags &= -33));
              var A = _p(t);
              fc(t, A, v);
              break;
            case 3:
            case 4:
              var N = l.stateNode.containerInfo,
                H = _p(t);
              Dp(t, H, N);
              break;
            default:
              throw Error(i(161));
          }
        }
      } catch (ae) {
        ht(t, t.return, ae);
      }
      t.flags &= -3;
    }
    r & 4096 && (t.flags &= -4097);
  }
  function Mv(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var r = t;
        Mv(r),
          r.tag === 5 && r.flags & 1024 && r.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function oa(t, r) {
    if (r.subtreeFlags & 8772)
      for (r = r.child; r !== null; ) Cv(t, r.alternate, r), (r = r.sibling);
  }
  function As(t) {
    for (t = t.child; t !== null; ) {
      var r = t;
      switch (r.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          La(4, r, r.return), As(r);
          break;
        case 1:
          Ln(r, r.return);
          var s = r.stateNode;
          typeof s.componentWillUnmount == "function" && vv(r, r.return, s),
            As(r);
          break;
        case 26:
        case 27:
        case 5:
          Ln(r, r.return), As(r);
          break;
        case 22:
          Ln(r, r.return), r.memoizedState === null && As(r);
          break;
        default:
          As(r);
      }
      t = t.sibling;
    }
  }
  function ja(t, r, s) {
    for (s = s && (r.subtreeFlags & 8772) !== 0, r = r.child; r !== null; ) {
      var l = r.alternate,
        c = t,
        p = r,
        v = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          ja(c, p, s), fl(4, p);
          break;
        case 1:
          if (
            (ja(c, p, s),
            (l = p),
            (c = l.stateNode),
            typeof c.componentDidMount == "function")
          )
            try {
              c.componentDidMount();
            } catch (H) {
              ht(l, l.return, H);
            }
          if (((l = p), (c = l.updateQueue), c !== null)) {
            var A = l.stateNode;
            try {
              var N = c.shared.hiddenCallbacks;
              if (N !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < N.length; c++)
                  mv(N[c], A);
            } catch (H) {
              ht(l, l.return, H);
            }
          }
          s && v & 64 && yv(p), _i(p, p.return);
          break;
        case 26:
        case 27:
        case 5:
          ja(c, p, s), s && l === null && v & 4 && bv(p), _i(p, p.return);
          break;
        case 12:
          ja(c, p, s);
          break;
        case 13:
          ja(c, p, s), s && v & 4 && Av(c, p);
          break;
        case 22:
          p.memoizedState === null && ja(c, p, s), _i(p, p.return);
          break;
        default:
          ja(c, p, s);
      }
      r = r.sibling;
    }
  }
  function kp(t, r) {
    var s = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (s = t.memoizedState.cachePool.pool),
      (t = null),
      r.memoizedState !== null &&
        r.memoizedState.cachePool !== null &&
        (t = r.memoizedState.cachePool.pool),
      t !== s && (t != null && t.refCount++, s != null && tl(s));
  }
  function Bp(t, r) {
    (t = null),
      r.alternate !== null && (t = r.alternate.memoizedState.cache),
      (r = r.memoizedState.cache),
      r !== t && (r.refCount++, t != null && tl(t));
  }
  function $a(t, r, s, l) {
    if (r.subtreeFlags & 10256)
      for (r = r.child; r !== null; ) _v(t, r, s, l), (r = r.sibling);
  }
  function _v(t, r, s, l) {
    var c = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        $a(t, r, s, l), c & 2048 && fl(9, r);
        break;
      case 3:
        $a(t, r, s, l),
          c & 2048 &&
            ((t = null),
            r.alternate !== null && (t = r.alternate.memoizedState.cache),
            (r = r.memoizedState.cache),
            r !== t && (r.refCount++, t != null && tl(t)));
        break;
      case 12:
        if (c & 2048) {
          $a(t, r, s, l), (t = r.stateNode);
          try {
            var p = r.memoizedProps,
              v = p.id,
              A = p.onPostCommit;
            typeof A == "function" &&
              A(
                v,
                r.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (N) {
            ht(r, r.return, N);
          }
        } else $a(t, r, s, l);
        break;
      case 23:
        break;
      case 22:
        (p = r.stateNode),
          r.memoizedState !== null
            ? p._visibility & 4
              ? $a(t, r, s, l)
              : dl(t, r)
            : p._visibility & 4
            ? $a(t, r, s, l)
            : ((p._visibility |= 4),
              Os(t, r, s, l, (r.subtreeFlags & 10256) !== 0)),
          c & 2048 && kp(r.alternate, r);
        break;
      case 24:
        $a(t, r, s, l), c & 2048 && Bp(r.alternate, r);
        break;
      default:
        $a(t, r, s, l);
    }
  }
  function Os(t, r, s, l, c) {
    for (c = c && (r.subtreeFlags & 10256) !== 0, r = r.child; r !== null; ) {
      var p = t,
        v = r,
        A = s,
        N = l,
        H = v.flags;
      switch (v.tag) {
        case 0:
        case 11:
        case 15:
          Os(p, v, A, N, c), fl(8, v);
          break;
        case 23:
          break;
        case 22:
          var ae = v.stateNode;
          v.memoizedState !== null
            ? ae._visibility & 4
              ? Os(p, v, A, N, c)
              : dl(p, v)
            : ((ae._visibility |= 4), Os(p, v, A, N, c)),
            c && H & 2048 && kp(v.alternate, v);
          break;
        case 24:
          Os(p, v, A, N, c), c && H & 2048 && Bp(v.alternate, v);
          break;
        default:
          Os(p, v, A, N, c);
      }
      r = r.sibling;
    }
  }
  function dl(t, r) {
    if (r.subtreeFlags & 10256)
      for (r = r.child; r !== null; ) {
        var s = t,
          l = r,
          c = l.flags;
        switch (l.tag) {
          case 22:
            dl(s, l), c & 2048 && kp(l.alternate, l);
            break;
          case 24:
            dl(s, l), c & 2048 && Bp(l.alternate, l);
            break;
          default:
            dl(s, l);
        }
        r = r.sibling;
      }
  }
  var pl = 8192;
  function Ms(t) {
    if (t.subtreeFlags & pl)
      for (t = t.child; t !== null; ) Dv(t), (t = t.sibling);
  }
  function Dv(t) {
    switch (t.tag) {
      case 26:
        Ms(t),
          t.flags & pl &&
            t.memoizedState !== null &&
            Vw(pr, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Ms(t);
        break;
      case 3:
      case 4:
        var r = pr;
        (pr = Tc(t.stateNode.containerInfo)), Ms(t), (pr = r);
        break;
      case 22:
        t.memoizedState === null &&
          ((r = t.alternate),
          r !== null && r.memoizedState !== null
            ? ((r = pl), (pl = 16777216), Ms(t), (pl = r))
            : Ms(t));
        break;
      default:
        Ms(t);
    }
  }
  function Nv(t) {
    var r = t.alternate;
    if (r !== null && ((t = r.child), t !== null)) {
      r.child = null;
      do (r = t.sibling), (t.sibling = null), (t = r);
      while (t !== null);
    }
  }
  function hl(t) {
    var r = t.deletions;
    if (t.flags & 16) {
      if (r !== null)
        for (var s = 0; s < r.length; s++) {
          var l = r[s];
          (nn = l), kv(l, t);
        }
      Nv(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) zv(t), (t = t.sibling);
  }
  function zv(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        hl(t), t.flags & 2048 && La(9, t, t.return);
        break;
      case 3:
        hl(t);
        break;
      case 12:
        hl(t);
        break;
      case 22:
        var r = t.stateNode;
        t.memoizedState !== null &&
        r._visibility & 4 &&
        (t.return === null || t.return.tag !== 13)
          ? ((r._visibility &= -5), dc(t))
          : hl(t);
        break;
      default:
        hl(t);
    }
  }
  function dc(t) {
    var r = t.deletions;
    if (t.flags & 16) {
      if (r !== null)
        for (var s = 0; s < r.length; s++) {
          var l = r[s];
          (nn = l), kv(l, t);
        }
      Nv(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((r = t), r.tag)) {
        case 0:
        case 11:
        case 15:
          La(8, r, r.return), dc(r);
          break;
        case 22:
          (s = r.stateNode),
            s._visibility & 4 && ((s._visibility &= -5), dc(r));
          break;
        default:
          dc(r);
      }
      t = t.sibling;
    }
  }
  function kv(t, r) {
    for (; nn !== null; ) {
      var s = nn;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          La(8, s, r);
          break;
        case 23:
        case 22:
          if (s.memoizedState !== null && s.memoizedState.cachePool !== null) {
            var l = s.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          tl(s.memoizedState.cache);
      }
      if (((l = s.child), l !== null)) (l.return = s), (nn = l);
      else
        e: for (s = t; nn !== null; ) {
          l = nn;
          var c = l.sibling,
            p = l.return;
          if ((wv(l), l === s)) {
            nn = null;
            break e;
          }
          if (c !== null) {
            (c.return = p), (nn = c);
            break e;
          }
          nn = p;
        }
    }
  }
  function rw(t, r, s, l) {
    (this.tag = t),
      (this.key = s),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = r),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function er(t, r, s, l) {
    return new rw(t, r, s, l);
  }
  function Up(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function Ha(t, r) {
    var s = t.alternate;
    return (
      s === null
        ? ((s = er(t.tag, r, t.key, t.mode)),
          (s.elementType = t.elementType),
          (s.type = t.type),
          (s.stateNode = t.stateNode),
          (s.alternate = t),
          (t.alternate = s))
        : ((s.pendingProps = r),
          (s.type = t.type),
          (s.flags = 0),
          (s.subtreeFlags = 0),
          (s.deletions = null)),
      (s.flags = t.flags & 31457280),
      (s.childLanes = t.childLanes),
      (s.lanes = t.lanes),
      (s.child = t.child),
      (s.memoizedProps = t.memoizedProps),
      (s.memoizedState = t.memoizedState),
      (s.updateQueue = t.updateQueue),
      (r = t.dependencies),
      (s.dependencies =
        r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }),
      (s.sibling = t.sibling),
      (s.index = t.index),
      (s.ref = t.ref),
      (s.refCleanup = t.refCleanup),
      s
    );
  }
  function Bv(t, r) {
    t.flags &= 31457282;
    var s = t.alternate;
    return (
      s === null
        ? ((t.childLanes = 0),
          (t.lanes = r),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = s.childLanes),
          (t.lanes = s.lanes),
          (t.child = s.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = s.memoizedProps),
          (t.memoizedState = s.memoizedState),
          (t.updateQueue = s.updateQueue),
          (t.type = s.type),
          (r = s.dependencies),
          (t.dependencies =
            r === null
              ? null
              : { lanes: r.lanes, firstContext: r.firstContext })),
      t
    );
  }
  function pc(t, r, s, l, c, p) {
    var v = 0;
    if (((l = t), typeof t == "function")) Up(t) && (v = 1);
    else if (typeof t == "string")
      v = Fw(t, s, ke.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      e: switch (t) {
        case m:
          return Di(s.children, c, p, r);
        case h:
          (v = 8), (c |= 24);
          break;
        case g:
          return (
            (t = er(12, s, r, c | 2)), (t.elementType = g), (t.lanes = p), t
          );
        case S:
          return (t = er(13, s, r, c)), (t.elementType = S), (t.lanes = p), t;
        case w:
          return (t = er(19, s, r, c)), (t.elementType = w), (t.lanes = p), t;
        case T:
          return Uv(s, c, p, r);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case y:
              case C:
                v = 10;
                break e;
              case x:
                v = 9;
                break e;
              case b:
                v = 11;
                break e;
              case O:
                v = 14;
                break e;
              case _:
                (v = 16), (l = null);
                break e;
            }
          (v = 29),
            (s = Error(i(130, t === null ? "null" : typeof t, ""))),
            (l = null);
      }
    return (
      (r = er(v, s, r, c)), (r.elementType = t), (r.type = l), (r.lanes = p), r
    );
  }
  function Di(t, r, s, l) {
    return (t = er(7, t, l, r)), (t.lanes = s), t;
  }
  function Uv(t, r, s, l) {
    (t = er(22, t, l, r)), (t.elementType = T), (t.lanes = s);
    var c = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var p = c._current;
        if (p === null) throw Error(i(456));
        if (!(c._pendingVisibility & 2)) {
          var v = Oa(p, 2);
          v !== null && ((c._pendingVisibility |= 2), Sn(v, p, 2));
        }
      },
      attach: function () {
        var p = c._current;
        if (p === null) throw Error(i(456));
        if (c._pendingVisibility & 2) {
          var v = Oa(p, 2);
          v !== null && ((c._pendingVisibility &= -3), Sn(v, p, 2));
        }
      },
    };
    return (t.stateNode = c), t;
  }
  function Lp(t, r, s) {
    return (t = er(6, t, null, r)), (t.lanes = s), t;
  }
  function jp(t, r, s) {
    return (
      (r = er(4, t.children !== null ? t.children : [], t.key, r)),
      (r.lanes = s),
      (r.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      r
    );
  }
  function la(t) {
    t.flags |= 4;
  }
  function Lv(t, r) {
    if (r.type !== "stylesheet" || r.state.loading & 4) t.flags &= -16777217;
    else if (((t.flags |= 16777216), !xb(r))) {
      if (
        ((r = Wn.current),
        r !== null &&
          ((Xe & 4194176) === Xe
            ? Or !== null
            : ((Xe & 62914560) !== Xe && !(Xe & 536870912)) || r !== Or))
      )
        throw ((Zo = qd), e0);
      t.flags |= 8192;
    }
  }
  function hc(t, r) {
    r !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((r = t.tag !== 22 ? ty() : 536870912), (t.lanes |= r), (Ds |= r));
  }
  function ml(t, r) {
    if (!Ze)
      switch (t.tailMode) {
        case "hidden":
          r = t.tail;
          for (var s = null; r !== null; )
            r.alternate !== null && (s = r), (r = r.sibling);
          s === null ? (t.tail = null) : (s.sibling = null);
          break;
        case "collapsed":
          s = t.tail;
          for (var l = null; s !== null; )
            s.alternate !== null && (l = s), (s = s.sibling);
          l === null
            ? r || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function Ot(t) {
    var r = t.alternate !== null && t.alternate.child === t.child,
      s = 0,
      l = 0;
    if (r)
      for (var c = t.child; c !== null; )
        (s |= c.lanes | c.childLanes),
          (l |= c.subtreeFlags & 31457280),
          (l |= c.flags & 31457280),
          (c.return = t),
          (c = c.sibling);
    else
      for (c = t.child; c !== null; )
        (s |= c.lanes | c.childLanes),
          (l |= c.subtreeFlags),
          (l |= c.flags),
          (c.return = t),
          (c = c.sibling);
    return (t.subtreeFlags |= l), (t.childLanes = s), r;
  }
  function aw(t, r, s) {
    var l = r.pendingProps;
    switch ((Pd(r), r.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ot(r), null;
      case 1:
        return Ot(r), null;
      case 3:
        return (
          (s = r.stateNode),
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          r.memoizedState.cache !== l && (r.flags |= 2048),
          aa(Xt),
          Ut(),
          s.pendingContext &&
            ((s.context = s.pendingContext), (s.pendingContext = null)),
          (t === null || t.child === null) &&
            (Qo(r)
              ? la(r)
              : t === null ||
                (t.memoizedState.isDehydrated && !(r.flags & 256)) ||
                ((r.flags |= 1024), dr !== null && (Ip(dr), (dr = null)))),
          Ot(r),
          null
        );
      case 26:
        return (
          (s = r.memoizedState),
          t === null
            ? (la(r),
              s !== null ? (Ot(r), Lv(r, s)) : (Ot(r), (r.flags &= -16777217)))
            : s
            ? s !== t.memoizedState
              ? (la(r), Ot(r), Lv(r, s))
              : (Ot(r), (r.flags &= -16777217))
            : (t.memoizedProps !== l && la(r), Ot(r), (r.flags &= -16777217)),
          null
        );
      case 27:
        z(r), (s = We.current);
        var c = r.type;
        if (t !== null && r.stateNode != null) t.memoizedProps !== l && la(r);
        else {
          if (!l) {
            if (r.stateNode === null) throw Error(i(166));
            return Ot(r), null;
          }
          (t = ke.current),
            Qo(r) ? Zy(r) : ((t = pb(c, l, s)), (r.stateNode = t), la(r));
        }
        return Ot(r), null;
      case 5:
        if ((z(r), (s = r.type), t !== null && r.stateNode != null))
          t.memoizedProps !== l && la(r);
        else {
          if (!l) {
            if (r.stateNode === null) throw Error(i(166));
            return Ot(r), null;
          }
          if (((t = ke.current), Qo(r))) Zy(r);
          else {
            switch (((c = wc(We.current)), t)) {
              case 1:
                t = c.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                t = c.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    t = c.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    t = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    (t = c.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof l.is == "string"
                        ? c.createElement("select", { is: l.is })
                        : c.createElement("select")),
                      l.multiple
                        ? (t.multiple = !0)
                        : l.size && (t.size = l.size);
                    break;
                  default:
                    t =
                      typeof l.is == "string"
                        ? c.createElement(s, { is: l.is })
                        : c.createElement(s);
                }
            }
            (t[fn] = r), (t[Tn] = l);
            e: for (c = r.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6) t.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                (c.child.return = c), (c = c.child);
                continue;
              }
              if (c === r) break e;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === r) break e;
                c = c.return;
              }
              (c.sibling.return = c.return), (c = c.sibling);
            }
            r.stateNode = t;
            e: switch ((ln(t, s, l), s)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!l.autoFocus;
                break e;
              case "img":
                t = !0;
                break e;
              default:
                t = !1;
            }
            t && la(r);
          }
        }
        return Ot(r), (r.flags &= -16777217), null;
      case 6:
        if (t && r.stateNode != null) t.memoizedProps !== l && la(r);
        else {
          if (typeof l != "string" && r.stateNode === null) throw Error(i(166));
          if (((t = We.current), Qo(r))) {
            if (
              ((t = r.stateNode),
              (s = r.memoizedProps),
              (l = null),
              (c = bn),
              c !== null)
            )
              switch (c.tag) {
                case 27:
                case 5:
                  l = c.memoizedProps;
              }
            (t[fn] = r),
              (t = !!(
                t.nodeValue === s ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                ob(t.nodeValue, s)
              )),
              t || xi(r);
          } else (t = wc(t).createTextNode(l)), (t[fn] = r), (r.stateNode = t);
        }
        return Ot(r), null;
      case 13:
        if (
          ((l = r.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((c = Qo(r)), l !== null && l.dehydrated !== null)) {
            if (t === null) {
              if (!c) throw Error(i(318));
              if (
                ((c = r.memoizedState),
                (c = c !== null ? c.dehydrated : null),
                !c)
              )
                throw Error(i(317));
              c[fn] = r;
            } else
              Ko(),
                !(r.flags & 128) && (r.memoizedState = null),
                (r.flags |= 4);
            Ot(r), (c = !1);
          } else dr !== null && (Ip(dr), (dr = null)), (c = !0);
          if (!c) return r.flags & 256 ? (ea(r), r) : (ea(r), null);
        }
        if ((ea(r), r.flags & 128)) return (r.lanes = s), r;
        if (
          ((s = l !== null), (t = t !== null && t.memoizedState !== null), s)
        ) {
          (l = r.child),
            (c = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (c = l.alternate.memoizedState.cachePool.pool);
          var p = null;
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (p = l.memoizedState.cachePool.pool),
            p !== c && (l.flags |= 2048);
        }
        return (
          s !== t && s && (r.child.flags |= 8192),
          hc(r, r.updateQueue),
          Ot(r),
          null
        );
      case 4:
        return Ut(), t === null && rh(r.stateNode.containerInfo), Ot(r), null;
      case 10:
        return aa(r.type), Ot(r), null;
      case 19:
        if ((Ae(Kt), (c = r.memoizedState), c === null)) return Ot(r), null;
        if (((l = (r.flags & 128) !== 0), (p = c.rendering), p === null))
          if (l) ml(c, !1);
          else {
            if (Dt !== 0 || (t !== null && t.flags & 128))
              for (t = r.child; t !== null; ) {
                if (((p = Wu(t)), p !== null)) {
                  for (
                    r.flags |= 128,
                      ml(c, !1),
                      t = p.updateQueue,
                      r.updateQueue = t,
                      hc(r, t),
                      r.subtreeFlags = 0,
                      t = s,
                      s = r.child;
                    s !== null;

                  )
                    Bv(s, t), (s = s.sibling);
                  return Se(Kt, (Kt.current & 1) | 2), r.child;
                }
                t = t.sibling;
              }
            c.tail !== null &&
              ge() > mc &&
              ((r.flags |= 128), (l = !0), ml(c, !1), (r.lanes = 4194304));
          }
        else {
          if (!l)
            if (((t = Wu(p)), t !== null)) {
              if (
                ((r.flags |= 128),
                (l = !0),
                (t = t.updateQueue),
                (r.updateQueue = t),
                hc(r, t),
                ml(c, !0),
                c.tail === null &&
                  c.tailMode === "hidden" &&
                  !p.alternate &&
                  !Ze)
              )
                return Ot(r), null;
            } else
              2 * ge() - c.renderingStartTime > mc &&
                s !== 536870912 &&
                ((r.flags |= 128), (l = !0), ml(c, !1), (r.lanes = 4194304));
          c.isBackwards
            ? ((p.sibling = r.child), (r.child = p))
            : ((t = c.last),
              t !== null ? (t.sibling = p) : (r.child = p),
              (c.last = p));
        }
        return c.tail !== null
          ? ((r = c.tail),
            (c.rendering = r),
            (c.tail = r.sibling),
            (c.renderingStartTime = ge()),
            (r.sibling = null),
            (t = Kt.current),
            Se(Kt, l ? (t & 1) | 2 : t & 1),
            r)
          : (Ot(r), null);
      case 22:
      case 23:
        return (
          ea(r),
          Gd(),
          (l = r.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== l && (r.flags |= 8192)
            : l && (r.flags |= 8192),
          l
            ? s & 536870912 &&
              !(r.flags & 128) &&
              (Ot(r), r.subtreeFlags & 6 && (r.flags |= 8192))
            : Ot(r),
          (s = r.updateQueue),
          s !== null && hc(r, s.retryQueue),
          (s = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (s = t.memoizedState.cachePool.pool),
          (l = null),
          r.memoizedState !== null &&
            r.memoizedState.cachePool !== null &&
            (l = r.memoizedState.cachePool.pool),
          l !== s && (r.flags |= 2048),
          t !== null && Ae(Ri),
          null
        );
      case 24:
        return (
          (s = null),
          t !== null && (s = t.memoizedState.cache),
          r.memoizedState.cache !== s && (r.flags |= 2048),
          aa(Xt),
          Ot(r),
          null
        );
      case 25:
        return null;
    }
    throw Error(i(156, r.tag));
  }
  function iw(t, r) {
    switch ((Pd(r), r.tag)) {
      case 1:
        return (
          (t = r.flags), t & 65536 ? ((r.flags = (t & -65537) | 128), r) : null
        );
      case 3:
        return (
          aa(Xt),
          Ut(),
          (t = r.flags),
          t & 65536 && !(t & 128) ? ((r.flags = (t & -65537) | 128), r) : null
        );
      case 26:
      case 27:
      case 5:
        return z(r), null;
      case 13:
        if (
          (ea(r), (t = r.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (r.alternate === null) throw Error(i(340));
          Ko();
        }
        return (
          (t = r.flags), t & 65536 ? ((r.flags = (t & -65537) | 128), r) : null
        );
      case 19:
        return Ae(Kt), null;
      case 4:
        return Ut(), null;
      case 10:
        return aa(r.type), null;
      case 22:
      case 23:
        return (
          ea(r),
          Gd(),
          t !== null && Ae(Ri),
          (t = r.flags),
          t & 65536 ? ((r.flags = (t & -65537) | 128), r) : null
        );
      case 24:
        return aa(Xt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function jv(t, r) {
    switch ((Pd(r), r.tag)) {
      case 3:
        aa(Xt), Ut();
        break;
      case 26:
      case 27:
      case 5:
        z(r);
        break;
      case 4:
        Ut();
        break;
      case 13:
        ea(r);
        break;
      case 19:
        Ae(Kt);
        break;
      case 10:
        aa(r.type);
        break;
      case 22:
      case 23:
        ea(r), Gd(), t !== null && Ae(Ri);
        break;
      case 24:
        aa(Xt);
    }
  }
  var sw = {
      getCacheForType: function (t) {
        var r = dn(Xt),
          s = r.data.get(t);
        return s === void 0 && ((s = t()), r.data.set(t, s)), s;
      },
    },
    ow = typeof WeakMap == "function" ? WeakMap : Map,
    Mt = 0,
    xt = null,
    Ie = null,
    Xe = 0,
    Et = 0,
    $n = null,
    ua = !1,
    _s = !1,
    $p = !1,
    ca = 0,
    Dt = 0,
    Pa = 0,
    Ni = 0,
    Hp = 0,
    tr = 0,
    Ds = 0,
    gl = null,
    _r = null,
    Pp = !1,
    Fp = 0,
    mc = 1 / 0,
    gc = null,
    Fa = null,
    yc = !1,
    zi = null,
    yl = 0,
    qp = 0,
    Vp = null,
    vl = 0,
    Gp = null;
  function Hn() {
    if (Mt & 2 && Xe !== 0) return Xe & -Xe;
    if (P.T !== null) {
      var t = Es;
      return t !== 0 ? t : Jp();
    }
    return iy();
  }
  function $v() {
    tr === 0 && (tr = !(Xe & 536870912) || Ze ? ey() : 536870912);
    var t = Wn.current;
    return t !== null && (t.flags |= 32), tr;
  }
  function Sn(t, r, s) {
    ((t === xt && Et === 2) || t.cancelPendingCommit !== null) &&
      (Ns(t, 0), fa(t, Xe, tr, !1)),
      Uo(t, s),
      (!(Mt & 2) || t !== xt) &&
        (t === xt && (!(Mt & 2) && (Ni |= s), Dt === 4 && fa(t, Xe, tr, !1)),
        Dr(t));
  }
  function Hv(t, r, s) {
    if (Mt & 6) throw Error(i(327));
    var l = (!s && (r & 60) === 0 && (r & t.expiredLanes) === 0) || Bo(t, r),
      c = l ? cw(t, r) : Kp(t, r, !0),
      p = l;
    do {
      if (c === 0) {
        _s && !l && fa(t, r, 0, !1);
        break;
      } else if (c === 6) fa(t, r, 0, !ua);
      else {
        if (((s = t.current.alternate), p && !lw(s))) {
          (c = Kp(t, r, !1)), (p = !1);
          continue;
        }
        if (c === 2) {
          if (((p = r), t.errorRecoveryDisabledLanes & p)) var v = 0;
          else
            (v = t.pendingLanes & -536870913),
              (v = v !== 0 ? v : v & 536870912 ? 536870912 : 0);
          if (v !== 0) {
            r = v;
            e: {
              var A = t;
              c = gl;
              var N = A.current.memoizedState.isDehydrated;
              if ((N && (Ns(A, v).flags |= 256), (v = Kp(A, v, !1)), v !== 2)) {
                if ($p && !N) {
                  (A.errorRecoveryDisabledLanes |= p), (Ni |= p), (c = 4);
                  break e;
                }
                (p = _r), (_r = c), p !== null && Ip(p);
              }
              c = v;
            }
            if (((p = !1), c !== 2)) continue;
          }
        }
        if (c === 1) {
          Ns(t, 0), fa(t, r, 0, !0);
          break;
        }
        e: {
          switch (((l = t), c)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((r & 4194176) === r) {
                fa(l, r, tr, !ua);
                break e;
              }
              break;
            case 2:
              _r = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if (
            ((l.finishedWork = s),
            (l.finishedLanes = r),
            (r & 62914560) === r && ((p = Fp + 300 - ge()), 10 < p))
          ) {
            if ((fa(l, r, tr, !ua), _u(l, 0) !== 0)) break e;
            l.timeoutHandle = cb(
              Pv.bind(null, l, s, _r, gc, Pp, r, tr, Ni, Ds, ua, 2, -0, 0),
              p
            );
            break e;
          }
          Pv(l, s, _r, gc, Pp, r, tr, Ni, Ds, ua, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Dr(t);
  }
  function Ip(t) {
    _r === null ? (_r = t) : _r.push.apply(_r, t);
  }
  function Pv(t, r, s, l, c, p, v, A, N, H, ae, oe, Y) {
    var re = r.subtreeFlags;
    if (
      (re & 8192 || (re & 16785408) === 16785408) &&
      ((Cl = { stylesheets: null, count: 0, unsuspend: qw }),
      Dv(r),
      (r = Gw()),
      r !== null)
    ) {
      (t.cancelPendingCommit = r(Qv.bind(null, t, s, l, c, v, A, N, 1, oe, Y))),
        fa(t, p, v, !H);
      return;
    }
    Qv(t, s, l, c, v, A, N, ae, oe, Y);
  }
  function lw(t) {
    for (var r = t; ; ) {
      var s = r.tag;
      if (
        (s === 0 || s === 11 || s === 15) &&
        r.flags & 16384 &&
        ((s = r.updateQueue), s !== null && ((s = s.stores), s !== null))
      )
        for (var l = 0; l < s.length; l++) {
          var c = s[l],
            p = c.getSnapshot;
          c = c.value;
          try {
            if (!Un(p(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (((s = r.child), r.subtreeFlags & 16384 && s !== null))
        (s.return = r), (r = s);
      else {
        if (r === t) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === t) return !0;
          r = r.return;
        }
        (r.sibling.return = r.return), (r = r.sibling);
      }
    }
    return !0;
  }
  function fa(t, r, s, l) {
    (r &= ~Hp),
      (r &= ~Ni),
      (t.suspendedLanes |= r),
      (t.pingedLanes &= ~r),
      l && (t.warmLanes |= r),
      (l = t.expirationTimes);
    for (var c = r; 0 < c; ) {
      var p = 31 - et(c),
        v = 1 << p;
      (l[p] = -1), (c &= ~v);
    }
    s !== 0 && ny(t, s, r);
  }
  function vc() {
    return Mt & 6 ? !0 : (bl(0), !1);
  }
  function Yp() {
    if (Ie !== null) {
      if (Et === 0) var t = Ie.return;
      else (t = Ie), (ra = Oi = null), Jd(t), (Ss = null), (Jo = 0), (t = Ie);
      for (; t !== null; ) jv(t.alternate, t), (t = t.return);
      Ie = null;
    }
  }
  function Ns(t, r) {
    (t.finishedWork = null), (t.finishedLanes = 0);
    var s = t.timeoutHandle;
    s !== -1 && ((t.timeoutHandle = -1), Aw(s)),
      (s = t.cancelPendingCommit),
      s !== null && ((t.cancelPendingCommit = null), s()),
      Yp(),
      (xt = t),
      (Ie = s = Ha(t.current, null)),
      (Xe = r),
      (Et = 0),
      ($n = null),
      (ua = !1),
      (_s = Bo(t, r)),
      ($p = !1),
      (Ds = tr = Hp = Ni = Pa = Dt = 0),
      (_r = gl = null),
      (Pp = !1),
      r & 8 && (r |= r & 32);
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= r; 0 < l; ) {
        var c = 31 - et(l),
          p = 1 << c;
        (r |= t[c]), (l &= ~p);
      }
    return (ca = r), Fu(), s;
  }
  function Fv(t, r) {
    (Ve = null),
      (P.H = Mr),
      r === Wo
        ? ((r = r0()), (Et = 3))
        : r === e0
        ? ((r = r0()), (Et = 4))
        : (Et =
            r === tv
              ? 8
              : r !== null &&
                typeof r == "object" &&
                typeof r.then == "function"
              ? 6
              : 1),
      ($n = r),
      Ie === null && ((Dt = 1), lc(t, Qn(r, t.current)));
  }
  function qv() {
    var t = P.H;
    return (P.H = Mr), t === null ? Mr : t;
  }
  function Vv() {
    var t = P.A;
    return (P.A = sw), t;
  }
  function Qp() {
    (Dt = 4),
      ua || ((Xe & 4194176) !== Xe && Wn.current !== null) || (_s = !0),
      (!(Pa & 134217727) && !(Ni & 134217727)) ||
        xt === null ||
        fa(xt, Xe, tr, !1);
  }
  function Kp(t, r, s) {
    var l = Mt;
    Mt |= 2;
    var c = qv(),
      p = Vv();
    (xt !== t || Xe !== r) && ((gc = null), Ns(t, r)), (r = !1);
    var v = Dt;
    e: do
      try {
        if (Et !== 0 && Ie !== null) {
          var A = Ie,
            N = $n;
          switch (Et) {
            case 8:
              Yp(), (v = 6);
              break e;
            case 3:
            case 2:
            case 6:
              Wn.current === null && (r = !0);
              var H = Et;
              if (((Et = 0), ($n = null), zs(t, A, N, H), s && _s)) {
                v = 0;
                break e;
              }
              break;
            default:
              (H = Et), (Et = 0), ($n = null), zs(t, A, N, H);
          }
        }
        uw(), (v = Dt);
        break;
      } catch (ae) {
        Fv(t, ae);
      }
    while (!0);
    return (
      r && t.shellSuspendCounter++,
      (ra = Oi = null),
      (Mt = l),
      (P.H = c),
      (P.A = p),
      Ie === null && ((xt = null), (Xe = 0), Fu()),
      v
    );
  }
  function uw() {
    for (; Ie !== null; ) Gv(Ie);
  }
  function cw(t, r) {
    var s = Mt;
    Mt |= 2;
    var l = qv(),
      c = Vv();
    xt !== t || Xe !== r
      ? ((gc = null), (mc = ge() + 500), Ns(t, r))
      : (_s = Bo(t, r));
    e: do
      try {
        if (Et !== 0 && Ie !== null) {
          r = Ie;
          var p = $n;
          t: switch (Et) {
            case 1:
              (Et = 0), ($n = null), zs(t, r, p, 1);
              break;
            case 2:
              if (t0(p)) {
                (Et = 0), ($n = null), Iv(r);
                break;
              }
              (r = function () {
                Et === 2 && xt === t && (Et = 7), Dr(t);
              }),
                p.then(r, r);
              break e;
            case 3:
              Et = 7;
              break e;
            case 4:
              Et = 5;
              break e;
            case 7:
              t0(p)
                ? ((Et = 0), ($n = null), Iv(r))
                : ((Et = 0), ($n = null), zs(t, r, p, 7));
              break;
            case 5:
              var v = null;
              switch (Ie.tag) {
                case 26:
                  v = Ie.memoizedState;
                case 5:
                case 27:
                  var A = Ie;
                  if (!v || xb(v)) {
                    (Et = 0), ($n = null);
                    var N = A.sibling;
                    if (N !== null) Ie = N;
                    else {
                      var H = A.return;
                      H !== null ? ((Ie = H), bc(H)) : (Ie = null);
                    }
                    break t;
                  }
              }
              (Et = 0), ($n = null), zs(t, r, p, 5);
              break;
            case 6:
              (Et = 0), ($n = null), zs(t, r, p, 6);
              break;
            case 8:
              Yp(), (Dt = 6);
              break e;
            default:
              throw Error(i(462));
          }
        }
        fw();
        break;
      } catch (ae) {
        Fv(t, ae);
      }
    while (!0);
    return (
      (ra = Oi = null),
      (P.H = l),
      (P.A = c),
      (Mt = s),
      Ie !== null ? 0 : ((xt = null), (Xe = 0), Fu(), Dt)
    );
  }
  function fw() {
    for (; Ie !== null && !Z(); ) Gv(Ie);
  }
  function Gv(t) {
    var r = pv(t.alternate, t, ca);
    (t.memoizedProps = t.pendingProps), r === null ? bc(t) : (Ie = r);
  }
  function Iv(t) {
    var r = t,
      s = r.alternate;
    switch (r.tag) {
      case 15:
      case 0:
        r = ov(s, r, r.pendingProps, r.type, void 0, Xe);
        break;
      case 11:
        r = ov(s, r, r.pendingProps, r.type.render, r.ref, Xe);
        break;
      case 5:
        Jd(r);
      default:
        jv(s, r), (r = Ie = Bv(r, ca)), (r = pv(s, r, ca));
    }
    (t.memoizedProps = t.pendingProps), r === null ? bc(t) : (Ie = r);
  }
  function zs(t, r, s, l) {
    (ra = Oi = null), Jd(r), (Ss = null), (Jo = 0);
    var c = r.return;
    try {
      if (JC(t, c, r, s, Xe)) {
        (Dt = 1), lc(t, Qn(s, t.current)), (Ie = null);
        return;
      }
    } catch (p) {
      if (c !== null) throw ((Ie = c), p);
      (Dt = 1), lc(t, Qn(s, t.current)), (Ie = null);
      return;
    }
    r.flags & 32768
      ? (Ze || l === 1
          ? (t = !0)
          : _s || Xe & 536870912
          ? (t = !1)
          : ((ua = t = !0),
            (l === 2 || l === 3 || l === 6) &&
              ((l = Wn.current),
              l !== null && l.tag === 13 && (l.flags |= 16384))),
        Yv(r, t))
      : bc(r);
  }
  function bc(t) {
    var r = t;
    do {
      if (r.flags & 32768) {
        Yv(r, ua);
        return;
      }
      t = r.return;
      var s = aw(r.alternate, r, ca);
      if (s !== null) {
        Ie = s;
        return;
      }
      if (((r = r.sibling), r !== null)) {
        Ie = r;
        return;
      }
      Ie = r = t;
    } while (r !== null);
    Dt === 0 && (Dt = 5);
  }
  function Yv(t, r) {
    do {
      var s = iw(t.alternate, t);
      if (s !== null) {
        (s.flags &= 32767), (Ie = s);
        return;
      }
      if (
        ((s = t.return),
        s !== null &&
          ((s.flags |= 32768), (s.subtreeFlags = 0), (s.deletions = null)),
        !r && ((t = t.sibling), t !== null))
      ) {
        Ie = t;
        return;
      }
      Ie = t = s;
    } while (t !== null);
    (Dt = 6), (Ie = null);
  }
  function Qv(t, r, s, l, c, p, v, A, N, H) {
    var ae = P.T,
      oe = ce.p;
    try {
      (ce.p = 2), (P.T = null), dw(t, r, s, l, oe, c, p, v, A, N, H);
    } finally {
      (P.T = ae), (ce.p = oe);
    }
  }
  function dw(t, r, s, l, c, p, v, A) {
    do ks();
    while (zi !== null);
    if (Mt & 6) throw Error(i(327));
    var N = t.finishedWork;
    if (((l = t.finishedLanes), N === null)) return null;
    if (((t.finishedWork = null), (t.finishedLanes = 0), N === t.current))
      throw Error(i(177));
    (t.callbackNode = null),
      (t.callbackPriority = 0),
      (t.cancelPendingCommit = null);
    var H = N.lanes | N.childLanes;
    if (
      ((H |= jd),
      VR(t, l, H, p, v, A),
      t === xt && ((Ie = xt = null), (Xe = 0)),
      (!(N.subtreeFlags & 10256) && !(N.flags & 10256)) ||
        yc ||
        ((yc = !0),
        (qp = H),
        (Vp = s),
        gw(qt, function () {
          return ks(), null;
        })),
      (s = (N.flags & 15990) !== 0),
      N.subtreeFlags & 15990 || s
        ? ((s = P.T),
          (P.T = null),
          (p = ce.p),
          (ce.p = 2),
          (v = Mt),
          (Mt |= 4),
          tw(t, N),
          Ov(N, t),
          UC(oh, t.containerInfo),
          (Dc = !!sh),
          (oh = sh = null),
          (t.current = N),
          Cv(t, N.alternate, N),
          pe(),
          (Mt = v),
          (ce.p = p),
          (P.T = s))
        : (t.current = N),
      yc ? ((yc = !1), (zi = t), (yl = l)) : Kv(t, H),
      (H = t.pendingLanes),
      H === 0 && (Fa = null),
      Oe(N.stateNode),
      Dr(t),
      r !== null)
    )
      for (c = t.onRecoverableError, N = 0; N < r.length; N++)
        (H = r[N]), c(H.value, { componentStack: H.stack });
    return (
      yl & 3 && ks(),
      (H = t.pendingLanes),
      l & 4194218 && H & 42
        ? t === Gp
          ? vl++
          : ((vl = 0), (Gp = t))
        : (vl = 0),
      bl(0),
      null
    );
  }
  function Kv(t, r) {
    (t.pooledCacheLanes &= r) === 0 &&
      ((r = t.pooledCache), r != null && ((t.pooledCache = null), tl(r)));
  }
  function ks() {
    if (zi !== null) {
      var t = zi,
        r = qp;
      qp = 0;
      var s = ay(yl),
        l = P.T,
        c = ce.p;
      try {
        if (((ce.p = 32 > s ? 32 : s), (P.T = null), zi === null)) var p = !1;
        else {
          (s = Vp), (Vp = null);
          var v = zi,
            A = yl;
          if (((zi = null), (yl = 0), Mt & 6)) throw Error(i(331));
          var N = Mt;
          if (
            ((Mt |= 4),
            zv(v.current),
            _v(v, v.current, A, s),
            (Mt = N),
            bl(0, !1),
            Jt && typeof Jt.onPostCommitFiberRoot == "function")
          )
            try {
              Jt.onPostCommitFiberRoot(wn, v);
            } catch {}
          p = !0;
        }
        return p;
      } finally {
        (ce.p = c), (P.T = l), Kv(t, r);
      }
    }
    return !1;
  }
  function Xv(t, r, s) {
    (r = Qn(s, r)),
      (r = pp(t.stateNode, r, 2)),
      (t = Ua(t, r, 2)),
      t !== null && (Uo(t, 2), Dr(t));
  }
  function ht(t, r, s) {
    if (t.tag === 3) Xv(t, t, s);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Xv(r, t, s);
          break;
        } else if (r.tag === 1) {
          var l = r.stateNode;
          if (
            typeof r.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (Fa === null || !Fa.has(l)))
          ) {
            (t = Qn(s, t)),
              (s = J0(2)),
              (l = Ua(r, s, 2)),
              l !== null && (ev(s, l, r, t), Uo(l, 2), Dr(l));
            break;
          }
        }
        r = r.return;
      }
  }
  function Xp(t, r, s) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new ow();
      var c = new Set();
      l.set(r, c);
    } else (c = l.get(r)), c === void 0 && ((c = new Set()), l.set(r, c));
    c.has(s) ||
      (($p = !0), c.add(s), (t = pw.bind(null, t, r, s)), r.then(t, t));
  }
  function pw(t, r, s) {
    var l = t.pingCache;
    l !== null && l.delete(r),
      (t.pingedLanes |= t.suspendedLanes & s),
      (t.warmLanes &= ~s),
      xt === t &&
        (Xe & s) === s &&
        (Dt === 4 || (Dt === 3 && (Xe & 62914560) === Xe && 300 > ge() - Fp)
          ? !(Mt & 2) && Ns(t, 0)
          : (Hp |= s),
        Ds === Xe && (Ds = 0)),
      Dr(t);
  }
  function Wv(t, r) {
    r === 0 && (r = ty()), (t = Oa(t, r)), t !== null && (Uo(t, r), Dr(t));
  }
  function hw(t) {
    var r = t.memoizedState,
      s = 0;
    r !== null && (s = r.retryLane), Wv(t, s);
  }
  function mw(t, r) {
    var s = 0;
    switch (t.tag) {
      case 13:
        var l = t.stateNode,
          c = t.memoizedState;
        c !== null && (s = c.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    l !== null && l.delete(r), Wv(t, s);
  }
  function gw(t, r) {
    return X(t, r);
  }
  var Sc = null,
    Bs = null,
    Wp = !1,
    xc = !1,
    Zp = !1,
    ki = 0;
  function Dr(t) {
    t !== Bs &&
      t.next === null &&
      (Bs === null ? (Sc = Bs = t) : (Bs = Bs.next = t)),
      (xc = !0),
      Wp || ((Wp = !0), vw(yw));
  }
  function bl(t, r) {
    if (!Zp && xc) {
      Zp = !0;
      do
        for (var s = !1, l = Sc; l !== null; ) {
          if (t !== 0) {
            var c = l.pendingLanes;
            if (c === 0) var p = 0;
            else {
              var v = l.suspendedLanes,
                A = l.pingedLanes;
              (p = (1 << (31 - et(42 | t) + 1)) - 1),
                (p &= c & ~(v & ~A)),
                (p = p & 201326677 ? (p & 201326677) | 1 : p ? p | 2 : 0);
            }
            p !== 0 && ((s = !0), eb(l, p));
          } else
            (p = Xe),
              (p = _u(l, l === xt ? p : 0)),
              !(p & 3) || Bo(l, p) || ((s = !0), eb(l, p));
          l = l.next;
        }
      while (s);
      Zp = !1;
    }
  }
  function yw() {
    xc = Wp = !1;
    var t = 0;
    ki !== 0 && (Tw() && (t = ki), (ki = 0));
    for (var r = ge(), s = null, l = Sc; l !== null; ) {
      var c = l.next,
        p = Zv(l, r);
      p === 0
        ? ((l.next = null),
          s === null ? (Sc = c) : (s.next = c),
          c === null && (Bs = s))
        : ((s = l), (t !== 0 || p & 3) && (xc = !0)),
        (l = c);
    }
    bl(t);
  }
  function Zv(t, r) {
    for (
      var s = t.suspendedLanes,
        l = t.pingedLanes,
        c = t.expirationTimes,
        p = t.pendingLanes & -62914561;
      0 < p;

    ) {
      var v = 31 - et(p),
        A = 1 << v,
        N = c[v];
      N === -1
        ? (!(A & s) || A & l) && (c[v] = qR(A, r))
        : N <= r && (t.expiredLanes |= A),
        (p &= ~A);
    }
    if (
      ((r = xt),
      (s = Xe),
      (s = _u(t, t === r ? s : 0)),
      (l = t.callbackNode),
      s === 0 || (t === r && Et === 2) || t.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && de(l),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if (!(s & 3) || Bo(t, s)) {
      if (((r = s & -s), r === t.callbackPriority)) return r;
      switch ((l !== null && de(l), ay(s))) {
        case 2:
        case 8:
          s = pt;
          break;
        case 32:
          s = qt;
          break;
        case 268435456:
          s = Cn;
          break;
        default:
          s = qt;
      }
      return (
        (l = Jv.bind(null, t)),
        (s = X(s, l)),
        (t.callbackPriority = r),
        (t.callbackNode = s),
        r
      );
    }
    return (
      l !== null && l !== null && de(l),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Jv(t, r) {
    var s = t.callbackNode;
    if (ks() && t.callbackNode !== s) return null;
    var l = Xe;
    return (
      (l = _u(t, t === xt ? l : 0)),
      l === 0
        ? null
        : (Hv(t, l, r),
          Zv(t, ge()),
          t.callbackNode != null && t.callbackNode === s
            ? Jv.bind(null, t)
            : null)
    );
  }
  function eb(t, r) {
    if (ks()) return null;
    Hv(t, r, !0);
  }
  function vw(t) {
    Ow(function () {
      Mt & 6 ? X(dt, t) : t();
    });
  }
  function Jp() {
    return ki === 0 && (ki = ey()), ki;
  }
  function tb(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : Bu("" + t);
  }
  function nb(t, r) {
    var s = r.ownerDocument.createElement("input");
    return (
      (s.name = r.name),
      (s.value = r.value),
      t.id && s.setAttribute("form", t.id),
      r.parentNode.insertBefore(s, r),
      (t = new FormData(t)),
      s.parentNode.removeChild(s),
      t
    );
  }
  function bw(t, r, s, l, c) {
    if (r === "submit" && s && s.stateNode === c) {
      var p = tb((c[Tn] || null).action),
        v = l.submitter;
      v &&
        ((r = (r = v[Tn] || null)
          ? tb(r.formAction)
          : v.getAttribute("formAction")),
        r !== null && ((p = r), (v = null)));
      var A = new $u("action", "action", null, l, c);
      t.push({
        event: A,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (ki !== 0) {
                  var N = v ? nb(c, v) : new FormData(c);
                  lp(
                    s,
                    { pending: !0, data: N, method: c.method, action: p },
                    null,
                    N
                  );
                }
              } else
                typeof p == "function" &&
                  (A.preventDefault(),
                  (N = v ? nb(c, v) : new FormData(c)),
                  lp(
                    s,
                    { pending: !0, data: N, method: c.method, action: p },
                    p,
                    N
                  ));
            },
            currentTarget: c,
          },
        ],
      });
    }
  }
  for (var eh = 0; eh < Qy.length; eh++) {
    var th = Qy[eh],
      Sw = th.toLowerCase(),
      xw = th[0].toUpperCase() + th.slice(1);
    fr(Sw, "on" + xw);
  }
  fr(qy, "onAnimationEnd"),
    fr(Vy, "onAnimationIteration"),
    fr(Gy, "onAnimationStart"),
    fr("dblclick", "onDoubleClick"),
    fr("focusin", "onFocus"),
    fr("focusout", "onBlur"),
    fr(jC, "onTransitionRun"),
    fr($C, "onTransitionStart"),
    fr(HC, "onTransitionCancel"),
    fr(Iy, "onTransitionEnd"),
    ls("onMouseEnter", ["mouseout", "mouseover"]),
    ls("onMouseLeave", ["mouseout", "mouseover"]),
    ls("onPointerEnter", ["pointerout", "pointerover"]),
    ls("onPointerLeave", ["pointerout", "pointerover"]),
    mi(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    mi(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    mi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    mi(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    mi(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    mi(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Sl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Ew = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Sl)
    );
  function rb(t, r) {
    r = (r & 4) !== 0;
    for (var s = 0; s < t.length; s++) {
      var l = t[s],
        c = l.event;
      l = l.listeners;
      e: {
        var p = void 0;
        if (r)
          for (var v = l.length - 1; 0 <= v; v--) {
            var A = l[v],
              N = A.instance,
              H = A.currentTarget;
            if (((A = A.listener), N !== p && c.isPropagationStopped()))
              break e;
            (p = A), (c.currentTarget = H);
            try {
              p(c);
            } catch (ae) {
              oc(ae);
            }
            (c.currentTarget = null), (p = N);
          }
        else
          for (v = 0; v < l.length; v++) {
            if (
              ((A = l[v]),
              (N = A.instance),
              (H = A.currentTarget),
              (A = A.listener),
              N !== p && c.isPropagationStopped())
            )
              break e;
            (p = A), (c.currentTarget = H);
            try {
              p(c);
            } catch (ae) {
              oc(ae);
            }
            (c.currentTarget = null), (p = N);
          }
      }
    }
  }
  function Ye(t, r) {
    var s = r[yd];
    s === void 0 && (s = r[yd] = new Set());
    var l = t + "__bubble";
    s.has(l) || (ab(r, t, 2, !1), s.add(l));
  }
  function nh(t, r, s) {
    var l = 0;
    r && (l |= 4), ab(s, t, l, r);
  }
  var Ec = "_reactListening" + Math.random().toString(36).slice(2);
  function rh(t) {
    if (!t[Ec]) {
      (t[Ec] = !0),
        oy.forEach(function (s) {
          s !== "selectionchange" && (Ew.has(s) || nh(s, !1, t), nh(s, !0, t));
        });
      var r = t.nodeType === 9 ? t : t.ownerDocument;
      r === null || r[Ec] || ((r[Ec] = !0), nh("selectionchange", !1, r));
    }
  }
  function ab(t, r, s, l) {
    switch (Ab(r)) {
      case 2:
        var c = Qw;
        break;
      case 8:
        c = Kw;
        break;
      default:
        c = gh;
    }
    (s = c.bind(null, r, s, t)),
      (c = void 0),
      !wd ||
        (r !== "touchstart" && r !== "touchmove" && r !== "wheel") ||
        (c = !0),
      l
        ? c !== void 0
          ? t.addEventListener(r, s, { capture: !0, passive: c })
          : t.addEventListener(r, s, !0)
        : c !== void 0
        ? t.addEventListener(r, s, { passive: c })
        : t.addEventListener(r, s, !1);
  }
  function ah(t, r, s, l, c) {
    var p = l;
    if (!(r & 1) && !(r & 2) && l !== null)
      e: for (;;) {
        if (l === null) return;
        var v = l.tag;
        if (v === 3 || v === 4) {
          var A = l.stateNode.containerInfo;
          if (A === c || (A.nodeType === 8 && A.parentNode === c)) break;
          if (v === 4)
            for (v = l.return; v !== null; ) {
              var N = v.tag;
              if (
                (N === 3 || N === 4) &&
                ((N = v.stateNode.containerInfo),
                N === c || (N.nodeType === 8 && N.parentNode === c))
              )
                return;
              v = v.return;
            }
          for (; A !== null; ) {
            if (((v = hi(A)), v === null)) return;
            if (((N = v.tag), N === 5 || N === 6 || N === 26 || N === 27)) {
              l = p = v;
              continue e;
            }
            A = A.parentNode;
          }
        }
        l = l.return;
      }
    by(function () {
      var H = p,
        ae = Rd(s),
        oe = [];
      e: {
        var Y = Yy.get(t);
        if (Y !== void 0) {
          var re = $u,
            Re = t;
          switch (t) {
            case "keypress":
              if (Lu(s) === 0) break e;
            case "keydown":
            case "keyup":
              re = mC;
              break;
            case "focusin":
              (Re = "focus"), (re = Md);
              break;
            case "focusout":
              (Re = "blur"), (re = Md);
              break;
            case "beforeblur":
            case "afterblur":
              re = Md;
              break;
            case "click":
              if (s.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              re = Ey;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              re = rC;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              re = vC;
              break;
            case qy:
            case Vy:
            case Gy:
              re = sC;
              break;
            case Iy:
              re = SC;
              break;
            case "scroll":
            case "scrollend":
              re = tC;
              break;
            case "wheel":
              re = EC;
              break;
            case "copy":
            case "cut":
            case "paste":
              re = lC;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              re = Cy;
              break;
            case "toggle":
            case "beforetoggle":
              re = CC;
          }
          var Be = (r & 4) !== 0,
            Nt = !Be && (t === "scroll" || t === "scrollend"),
            q = Be ? (Y !== null ? Y + "Capture" : null) : Y;
          Be = [];
          for (var j = H, I; j !== null; ) {
            var se = j;
            if (
              ((I = se.stateNode),
              (se = se.tag),
              (se !== 5 && se !== 26 && se !== 27) ||
                I === null ||
                q === null ||
                ((se = $o(j, q)), se != null && Be.push(xl(j, se, I))),
              Nt)
            )
              break;
            j = j.return;
          }
          0 < Be.length &&
            ((Y = new re(Y, Re, null, s, ae)),
            oe.push({ event: Y, listeners: Be }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (
            ((Y = t === "mouseover" || t === "pointerover"),
            (re = t === "mouseout" || t === "pointerout"),
            Y &&
              s !== Ed &&
              (Re = s.relatedTarget || s.fromElement) &&
              (hi(Re) || Re[is]))
          )
            break e;
          if (
            (re || Y) &&
            ((Y =
              ae.window === ae
                ? ae
                : (Y = ae.ownerDocument)
                ? Y.defaultView || Y.parentWindow
                : window),
            re
              ? ((Re = s.relatedTarget || s.toElement),
                (re = H),
                (Re = Re ? hi(Re) : null),
                Re !== null &&
                  ((Nt = fe(Re)),
                  (Be = Re.tag),
                  Re !== Nt || (Be !== 5 && Be !== 27 && Be !== 6)) &&
                  (Re = null))
              : ((re = null), (Re = H)),
            re !== Re)
          ) {
            if (
              ((Be = Ey),
              (se = "onMouseLeave"),
              (q = "onMouseEnter"),
              (j = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((Be = Cy),
                (se = "onPointerLeave"),
                (q = "onPointerEnter"),
                (j = "pointer")),
              (Nt = re == null ? Y : jo(re)),
              (I = Re == null ? Y : jo(Re)),
              (Y = new Be(se, j + "leave", re, s, ae)),
              (Y.target = Nt),
              (Y.relatedTarget = I),
              (se = null),
              hi(ae) === H &&
                ((Be = new Be(q, j + "enter", Re, s, ae)),
                (Be.target = I),
                (Be.relatedTarget = Nt),
                (se = Be)),
              (Nt = se),
              re && Re)
            )
              t: {
                for (Be = re, q = Re, j = 0, I = Be; I; I = Us(I)) j++;
                for (I = 0, se = q; se; se = Us(se)) I++;
                for (; 0 < j - I; ) (Be = Us(Be)), j--;
                for (; 0 < I - j; ) (q = Us(q)), I--;
                for (; j--; ) {
                  if (Be === q || (q !== null && Be === q.alternate)) break t;
                  (Be = Us(Be)), (q = Us(q));
                }
                Be = null;
              }
            else Be = null;
            re !== null && ib(oe, Y, re, Be, !1),
              Re !== null && Nt !== null && ib(oe, Nt, Re, Be, !0);
          }
        }
        e: {
          if (
            ((Y = H ? jo(H) : window),
            (re = Y.nodeName && Y.nodeName.toLowerCase()),
            re === "select" || (re === "input" && Y.type === "file"))
          )
            var Ee = Ny;
          else if (_y(Y))
            if (zy) Ee = kC;
            else {
              Ee = NC;
              var Ge = DC;
            }
          else
            (re = Y.nodeName),
              !re ||
              re.toLowerCase() !== "input" ||
              (Y.type !== "checkbox" && Y.type !== "radio")
                ? H && xd(H.elementType) && (Ee = Ny)
                : (Ee = zC);
          if (Ee && (Ee = Ee(t, H))) {
            Dy(oe, Ee, s, ae);
            break e;
          }
          Ge && Ge(t, Y, H),
            t === "focusout" &&
              H &&
              Y.type === "number" &&
              H.memoizedProps.value != null &&
              Sd(Y, "number", Y.value);
        }
        switch (((Ge = H ? jo(H) : window), t)) {
          case "focusin":
            (_y(Ge) || Ge.contentEditable === "true") &&
              ((hs = Ge), (Bd = H), (Yo = null));
            break;
          case "focusout":
            Yo = Bd = hs = null;
            break;
          case "mousedown":
            Ud = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Ud = !1), Py(oe, s, ae);
            break;
          case "selectionchange":
            if (LC) break;
          case "keydown":
          case "keyup":
            Py(oe, s, ae);
        }
        var we;
        if (Dd)
          e: {
            switch (t) {
              case "compositionstart":
                var De = "onCompositionStart";
                break e;
              case "compositionend":
                De = "onCompositionEnd";
                break e;
              case "compositionupdate":
                De = "onCompositionUpdate";
                break e;
            }
            De = void 0;
          }
        else
          ps
            ? Oy(t, s) && (De = "onCompositionEnd")
            : t === "keydown" &&
              s.keyCode === 229 &&
              (De = "onCompositionStart");
        De &&
          (wy &&
            s.locale !== "ko" &&
            (ps || De !== "onCompositionStart"
              ? De === "onCompositionEnd" && ps && (we = Sy())
              : ((Aa = ae),
                (Td = "value" in Aa ? Aa.value : Aa.textContent),
                (ps = !0))),
          (Ge = Rc(H, De)),
          0 < Ge.length &&
            ((De = new Ry(De, t, null, s, ae)),
            oe.push({ event: De, listeners: Ge }),
            we
              ? (De.data = we)
              : ((we = My(s)), we !== null && (De.data = we)))),
          (we = TC ? AC(t, s) : OC(t, s)) &&
            ((De = Rc(H, "onBeforeInput")),
            0 < De.length &&
              ((Ge = new Ry("onBeforeInput", "beforeinput", null, s, ae)),
              oe.push({ event: Ge, listeners: De }),
              (Ge.data = we))),
          bw(oe, t, H, s, ae);
      }
      rb(oe, r);
    });
  }
  function xl(t, r, s) {
    return { instance: t, listener: r, currentTarget: s };
  }
  function Rc(t, r) {
    for (var s = r + "Capture", l = []; t !== null; ) {
      var c = t,
        p = c.stateNode;
      (c = c.tag),
        (c !== 5 && c !== 26 && c !== 27) ||
          p === null ||
          ((c = $o(t, s)),
          c != null && l.unshift(xl(t, c, p)),
          (c = $o(t, r)),
          c != null && l.push(xl(t, c, p))),
        (t = t.return);
    }
    return l;
  }
  function Us(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function ib(t, r, s, l, c) {
    for (var p = r._reactName, v = []; s !== null && s !== l; ) {
      var A = s,
        N = A.alternate,
        H = A.stateNode;
      if (((A = A.tag), N !== null && N === l)) break;
      (A !== 5 && A !== 26 && A !== 27) ||
        H === null ||
        ((N = H),
        c
          ? ((H = $o(s, p)), H != null && v.unshift(xl(s, H, N)))
          : c || ((H = $o(s, p)), H != null && v.push(xl(s, H, N)))),
        (s = s.return);
    }
    v.length !== 0 && t.push({ event: r, listeners: v });
  }
  var Rw = /\r\n?/g,
    Cw = /\u0000|\uFFFD/g;
  function sb(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        Rw,
        `
`
      )
      .replace(Cw, "");
  }
  function ob(t, r) {
    return (r = sb(r)), sb(t) === r;
  }
  function Cc() {}
  function ut(t, r, s, l, c, p) {
    switch (s) {
      case "children":
        typeof l == "string"
          ? r === "body" || (r === "textarea" && l === "") || cs(t, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            r !== "body" &&
            cs(t, "" + l);
        break;
      case "className":
        Nu(t, "class", l);
        break;
      case "tabIndex":
        Nu(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Nu(t, s, l);
        break;
      case "style":
        yy(t, l, p);
        break;
      case "data":
        if (r !== "object") {
          Nu(t, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (r !== "a" || s !== "href")) {
          t.removeAttribute(s);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          t.removeAttribute(s);
          break;
        }
        (l = Bu("" + l)), t.setAttribute(s, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(
            s,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof p == "function" &&
            (s === "formAction"
              ? (r !== "input" && ut(t, r, "name", c.name, c, null),
                ut(t, r, "formEncType", c.formEncType, c, null),
                ut(t, r, "formMethod", c.formMethod, c, null),
                ut(t, r, "formTarget", c.formTarget, c, null))
              : (ut(t, r, "encType", c.encType, c, null),
                ut(t, r, "method", c.method, c, null),
                ut(t, r, "target", c.target, c, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(s);
          break;
        }
        (l = Bu("" + l)), t.setAttribute(s, l);
        break;
      case "onClick":
        l != null && (t.onclick = Cc);
        break;
      case "onScroll":
        l != null && Ye("scroll", t);
        break;
      case "onScrollEnd":
        l != null && Ye("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(i(61));
          if (((s = l.__html), s != null)) {
            if (c.children != null) throw Error(i(60));
            t.innerHTML = s;
          }
        }
        break;
      case "multiple":
        t.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        t.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (s = Bu("" + l)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(s, "" + l)
          : t.removeAttribute(s);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(s, "")
          : t.removeAttribute(s);
        break;
      case "capture":
      case "download":
        l === !0
          ? t.setAttribute(s, "")
          : l !== !1 &&
            l != null &&
            typeof l != "function" &&
            typeof l != "symbol"
          ? t.setAttribute(s, l)
          : t.removeAttribute(s);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? t.setAttribute(s, l)
          : t.removeAttribute(s);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? t.removeAttribute(s)
          : t.setAttribute(s, l);
        break;
      case "popover":
        Ye("beforetoggle", t), Ye("toggle", t), Du(t, "popover", l);
        break;
      case "xlinkActuate":
        Wr(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        Wr(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        Wr(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        Wr(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        Wr(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        Wr(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        Wr(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        Wr(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        Wr(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        Du(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < s.length) ||
          (s[0] !== "o" && s[0] !== "O") ||
          (s[1] !== "n" && s[1] !== "N")) &&
          ((s = JR.get(s) || s), Du(t, s, l));
    }
  }
  function ih(t, r, s, l, c, p) {
    switch (s) {
      case "style":
        yy(t, l, p);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(i(61));
          if (((s = l.__html), s != null)) {
            if (c.children != null) throw Error(i(60));
            t.innerHTML = s;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? cs(t, l)
          : (typeof l == "number" || typeof l == "bigint") && cs(t, "" + l);
        break;
      case "onScroll":
        l != null && Ye("scroll", t);
        break;
      case "onScrollEnd":
        l != null && Ye("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = Cc);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!ly.hasOwnProperty(s))
          e: {
            if (
              s[0] === "o" &&
              s[1] === "n" &&
              ((c = s.endsWith("Capture")),
              (r = s.slice(2, c ? s.length - 7 : void 0)),
              (p = t[Tn] || null),
              (p = p != null ? p[s] : null),
              typeof p == "function" && t.removeEventListener(r, p, c),
              typeof l == "function")
            ) {
              typeof p != "function" &&
                p !== null &&
                (s in t
                  ? (t[s] = null)
                  : t.hasAttribute(s) && t.removeAttribute(s)),
                t.addEventListener(r, l, c);
              break e;
            }
            s in t
              ? (t[s] = l)
              : l === !0
              ? t.setAttribute(s, "")
              : Du(t, s, l);
          }
    }
  }
  function ln(t, r, s) {
    switch (r) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ye("error", t), Ye("load", t);
        var l = !1,
          c = !1,
          p;
        for (p in s)
          if (s.hasOwnProperty(p)) {
            var v = s[p];
            if (v != null)
              switch (p) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  c = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, r));
                default:
                  ut(t, r, p, v, s, null);
              }
          }
        c && ut(t, r, "srcSet", s.srcSet, s, null),
          l && ut(t, r, "src", s.src, s, null);
        return;
      case "input":
        Ye("invalid", t);
        var A = (p = v = c = null),
          N = null,
          H = null;
        for (l in s)
          if (s.hasOwnProperty(l)) {
            var ae = s[l];
            if (ae != null)
              switch (l) {
                case "name":
                  c = ae;
                  break;
                case "type":
                  v = ae;
                  break;
                case "checked":
                  N = ae;
                  break;
                case "defaultChecked":
                  H = ae;
                  break;
                case "value":
                  p = ae;
                  break;
                case "defaultValue":
                  A = ae;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (ae != null) throw Error(i(137, r));
                  break;
                default:
                  ut(t, r, l, ae, s, null);
              }
          }
        py(t, p, A, N, H, v, c, !1), zu(t);
        return;
      case "select":
        Ye("invalid", t), (l = v = p = null);
        for (c in s)
          if (s.hasOwnProperty(c) && ((A = s[c]), A != null))
            switch (c) {
              case "value":
                p = A;
                break;
              case "defaultValue":
                v = A;
                break;
              case "multiple":
                l = A;
              default:
                ut(t, r, c, A, s, null);
            }
        (r = p),
          (s = v),
          (t.multiple = !!l),
          r != null ? us(t, !!l, r, !1) : s != null && us(t, !!l, s, !0);
        return;
      case "textarea":
        Ye("invalid", t), (p = c = l = null);
        for (v in s)
          if (s.hasOwnProperty(v) && ((A = s[v]), A != null))
            switch (v) {
              case "value":
                l = A;
                break;
              case "defaultValue":
                c = A;
                break;
              case "children":
                p = A;
                break;
              case "dangerouslySetInnerHTML":
                if (A != null) throw Error(i(91));
                break;
              default:
                ut(t, r, v, A, s, null);
            }
        my(t, l, c, p), zu(t);
        return;
      case "option":
        for (N in s)
          if (s.hasOwnProperty(N) && ((l = s[N]), l != null))
            switch (N) {
              case "selected":
                t.selected =
                  l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                ut(t, r, N, l, s, null);
            }
        return;
      case "dialog":
        Ye("cancel", t), Ye("close", t);
        break;
      case "iframe":
      case "object":
        Ye("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Sl.length; l++) Ye(Sl[l], t);
        break;
      case "image":
        Ye("error", t), Ye("load", t);
        break;
      case "details":
        Ye("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Ye("error", t), Ye("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (H in s)
          if (s.hasOwnProperty(H) && ((l = s[H]), l != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, r));
              default:
                ut(t, r, H, l, s, null);
            }
        return;
      default:
        if (xd(r)) {
          for (ae in s)
            s.hasOwnProperty(ae) &&
              ((l = s[ae]), l !== void 0 && ih(t, r, ae, l, s, void 0));
          return;
        }
    }
    for (A in s)
      s.hasOwnProperty(A) && ((l = s[A]), l != null && ut(t, r, A, l, s, null));
  }
  function ww(t, r, s, l) {
    switch (r) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var c = null,
          p = null,
          v = null,
          A = null,
          N = null,
          H = null,
          ae = null;
        for (re in s) {
          var oe = s[re];
          if (s.hasOwnProperty(re) && oe != null)
            switch (re) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                N = oe;
              default:
                l.hasOwnProperty(re) || ut(t, r, re, null, l, oe);
            }
        }
        for (var Y in l) {
          var re = l[Y];
          if (((oe = s[Y]), l.hasOwnProperty(Y) && (re != null || oe != null)))
            switch (Y) {
              case "type":
                p = re;
                break;
              case "name":
                c = re;
                break;
              case "checked":
                H = re;
                break;
              case "defaultChecked":
                ae = re;
                break;
              case "value":
                v = re;
                break;
              case "defaultValue":
                A = re;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (re != null) throw Error(i(137, r));
                break;
              default:
                re !== oe && ut(t, r, Y, re, l, oe);
            }
        }
        bd(t, v, A, N, H, ae, p, c);
        return;
      case "select":
        re = v = A = Y = null;
        for (p in s)
          if (((N = s[p]), s.hasOwnProperty(p) && N != null))
            switch (p) {
              case "value":
                break;
              case "multiple":
                re = N;
              default:
                l.hasOwnProperty(p) || ut(t, r, p, null, l, N);
            }
        for (c in l)
          if (
            ((p = l[c]),
            (N = s[c]),
            l.hasOwnProperty(c) && (p != null || N != null))
          )
            switch (c) {
              case "value":
                Y = p;
                break;
              case "defaultValue":
                A = p;
                break;
              case "multiple":
                v = p;
              default:
                p !== N && ut(t, r, c, p, l, N);
            }
        (r = A),
          (s = v),
          (l = re),
          Y != null
            ? us(t, !!s, Y, !1)
            : !!l != !!s &&
              (r != null ? us(t, !!s, r, !0) : us(t, !!s, s ? [] : "", !1));
        return;
      case "textarea":
        re = Y = null;
        for (A in s)
          if (
            ((c = s[A]),
            s.hasOwnProperty(A) && c != null && !l.hasOwnProperty(A))
          )
            switch (A) {
              case "value":
                break;
              case "children":
                break;
              default:
                ut(t, r, A, null, l, c);
            }
        for (v in l)
          if (
            ((c = l[v]),
            (p = s[v]),
            l.hasOwnProperty(v) && (c != null || p != null))
          )
            switch (v) {
              case "value":
                Y = c;
                break;
              case "defaultValue":
                re = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(i(91));
                break;
              default:
                c !== p && ut(t, r, v, c, l, p);
            }
        hy(t, Y, re);
        return;
      case "option":
        for (var Re in s)
          if (
            ((Y = s[Re]),
            s.hasOwnProperty(Re) && Y != null && !l.hasOwnProperty(Re))
          )
            switch (Re) {
              case "selected":
                t.selected = !1;
                break;
              default:
                ut(t, r, Re, null, l, Y);
            }
        for (N in l)
          if (
            ((Y = l[N]),
            (re = s[N]),
            l.hasOwnProperty(N) && Y !== re && (Y != null || re != null))
          )
            switch (N) {
              case "selected":
                t.selected =
                  Y && typeof Y != "function" && typeof Y != "symbol";
                break;
              default:
                ut(t, r, N, Y, l, re);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Be in s)
          (Y = s[Be]),
            s.hasOwnProperty(Be) &&
              Y != null &&
              !l.hasOwnProperty(Be) &&
              ut(t, r, Be, null, l, Y);
        for (H in l)
          if (
            ((Y = l[H]),
            (re = s[H]),
            l.hasOwnProperty(H) && Y !== re && (Y != null || re != null))
          )
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (Y != null) throw Error(i(137, r));
                break;
              default:
                ut(t, r, H, Y, l, re);
            }
        return;
      default:
        if (xd(r)) {
          for (var Nt in s)
            (Y = s[Nt]),
              s.hasOwnProperty(Nt) &&
                Y !== void 0 &&
                !l.hasOwnProperty(Nt) &&
                ih(t, r, Nt, void 0, l, Y);
          for (ae in l)
            (Y = l[ae]),
              (re = s[ae]),
              !l.hasOwnProperty(ae) ||
                Y === re ||
                (Y === void 0 && re === void 0) ||
                ih(t, r, ae, Y, l, re);
          return;
        }
    }
    for (var q in s)
      (Y = s[q]),
        s.hasOwnProperty(q) &&
          Y != null &&
          !l.hasOwnProperty(q) &&
          ut(t, r, q, null, l, Y);
    for (oe in l)
      (Y = l[oe]),
        (re = s[oe]),
        !l.hasOwnProperty(oe) ||
          Y === re ||
          (Y == null && re == null) ||
          ut(t, r, oe, Y, l, re);
  }
  var sh = null,
    oh = null;
  function wc(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function lb(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function ub(t, r) {
    if (t === 0)
      switch (r) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && r === "foreignObject" ? 0 : t;
  }
  function lh(t, r) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof r.children == "string" ||
      typeof r.children == "number" ||
      typeof r.children == "bigint" ||
      (typeof r.dangerouslySetInnerHTML == "object" &&
        r.dangerouslySetInnerHTML !== null &&
        r.dangerouslySetInnerHTML.__html != null)
    );
  }
  var uh = null;
  function Tw() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === uh
        ? !1
        : ((uh = t), !0)
      : ((uh = null), !1);
  }
  var cb = typeof setTimeout == "function" ? setTimeout : void 0,
    Aw = typeof clearTimeout == "function" ? clearTimeout : void 0,
    fb = typeof Promise == "function" ? Promise : void 0,
    Ow =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof fb < "u"
        ? function (t) {
            return fb.resolve(null).then(t).catch(Mw);
          }
        : cb;
  function Mw(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function ch(t, r) {
    var s = r,
      l = 0;
    do {
      var c = s.nextSibling;
      if ((t.removeChild(s), c && c.nodeType === 8))
        if (((s = c.data), s === "/$")) {
          if (l === 0) {
            t.removeChild(c), Ml(r);
            return;
          }
          l--;
        } else (s !== "$" && s !== "$?" && s !== "$!") || l++;
      s = c;
    } while (s);
    Ml(r);
  }
  function fh(t) {
    var r = t.firstChild;
    for (r && r.nodeType === 10 && (r = r.nextSibling); r; ) {
      var s = r;
      switch (((r = r.nextSibling), s.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          fh(s), vd(s);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (s.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(s);
    }
  }
  function _w(t, r, s, l) {
    for (; t.nodeType === 1; ) {
      var c = s;
      if (t.nodeName.toLowerCase() !== r.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (l) {
        if (!t[Lo])
          switch (r) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((p = t.getAttribute("rel")),
                p === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                p !== c.rel ||
                t.getAttribute("href") !== (c.href == null ? null : c.href) ||
                t.getAttribute("crossorigin") !==
                  (c.crossOrigin == null ? null : c.crossOrigin) ||
                t.getAttribute("title") !== (c.title == null ? null : c.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((p = t.getAttribute("src")),
                (p !== (c.src == null ? null : c.src) ||
                  t.getAttribute("type") !== (c.type == null ? null : c.type) ||
                  t.getAttribute("crossorigin") !==
                    (c.crossOrigin == null ? null : c.crossOrigin)) &&
                  p &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (r === "input" && t.type === "hidden") {
        var p = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && t.getAttribute("name") === p) return t;
      } else return t;
      if (((t = hr(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Dw(t, r, s) {
    if (r === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !s) ||
        ((t = hr(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function hr(t) {
    for (; t != null; t = t.nextSibling) {
      var r = t.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (
          ((r = t.data),
          r === "$" || r === "$!" || r === "$?" || r === "F!" || r === "F")
        )
          break;
        if (r === "/$") return null;
      }
    }
    return t;
  }
  function db(t) {
    t = t.previousSibling;
    for (var r = 0; t; ) {
      if (t.nodeType === 8) {
        var s = t.data;
        if (s === "$" || s === "$!" || s === "$?") {
          if (r === 0) return t;
          r--;
        } else s === "/$" && r++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function pb(t, r, s) {
    switch (((r = wc(s)), t)) {
      case "html":
        if (((t = r.documentElement), !t)) throw Error(i(452));
        return t;
      case "head":
        if (((t = r.head), !t)) throw Error(i(453));
        return t;
      case "body":
        if (((t = r.body), !t)) throw Error(i(454));
        return t;
      default:
        throw Error(i(451));
    }
  }
  var nr = new Map(),
    hb = new Set();
  function Tc(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.ownerDocument;
  }
  var da = ce.d;
  ce.d = { f: Nw, r: zw, D: kw, C: Bw, L: Uw, m: Lw, X: $w, S: jw, M: Hw };
  function Nw() {
    var t = da.f(),
      r = vc();
    return t || r;
  }
  function zw(t) {
    var r = ss(t);
    r !== null && r.tag === 5 && r.type === "form" ? P0(r) : da.r(t);
  }
  var Ls = typeof document > "u" ? null : document;
  function mb(t, r, s) {
    var l = Ls;
    if (l && typeof r == "string" && r) {
      var c = In(r);
      (c = 'link[rel="' + t + '"][href="' + c + '"]'),
        typeof s == "string" && (c += '[crossorigin="' + s + '"]'),
        hb.has(c) ||
          (hb.add(c),
          (t = { rel: t, crossOrigin: s, href: r }),
          l.querySelector(c) === null &&
            ((r = l.createElement("link")),
            ln(r, "link", t),
            en(r),
            l.head.appendChild(r)));
    }
  }
  function kw(t) {
    da.D(t), mb("dns-prefetch", t, null);
  }
  function Bw(t, r) {
    da.C(t, r), mb("preconnect", t, r);
  }
  function Uw(t, r, s) {
    da.L(t, r, s);
    var l = Ls;
    if (l && t && r) {
      var c = 'link[rel="preload"][as="' + In(r) + '"]';
      r === "image" && s && s.imageSrcSet
        ? ((c += '[imagesrcset="' + In(s.imageSrcSet) + '"]'),
          typeof s.imageSizes == "string" &&
            (c += '[imagesizes="' + In(s.imageSizes) + '"]'))
        : (c += '[href="' + In(t) + '"]');
      var p = c;
      switch (r) {
        case "style":
          p = js(t);
          break;
        case "script":
          p = $s(t);
      }
      nr.has(p) ||
        ((t = R(
          {
            rel: "preload",
            href: r === "image" && s && s.imageSrcSet ? void 0 : t,
            as: r,
          },
          s
        )),
        nr.set(p, t),
        l.querySelector(c) !== null ||
          (r === "style" && l.querySelector(El(p))) ||
          (r === "script" && l.querySelector(Rl(p))) ||
          ((r = l.createElement("link")),
          ln(r, "link", t),
          en(r),
          l.head.appendChild(r)));
    }
  }
  function Lw(t, r) {
    da.m(t, r);
    var s = Ls;
    if (s && t) {
      var l = r && typeof r.as == "string" ? r.as : "script",
        c =
          'link[rel="modulepreload"][as="' + In(l) + '"][href="' + In(t) + '"]',
        p = c;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          p = $s(t);
      }
      if (
        !nr.has(p) &&
        ((t = R({ rel: "modulepreload", href: t }, r)),
        nr.set(p, t),
        s.querySelector(c) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (s.querySelector(Rl(p))) return;
        }
        (l = s.createElement("link")),
          ln(l, "link", t),
          en(l),
          s.head.appendChild(l);
      }
    }
  }
  function jw(t, r, s) {
    da.S(t, r, s);
    var l = Ls;
    if (l && t) {
      var c = os(l).hoistableStyles,
        p = js(t);
      r = r || "default";
      var v = c.get(p);
      if (!v) {
        var A = { loading: 0, preload: null };
        if ((v = l.querySelector(El(p)))) A.loading = 5;
        else {
          (t = R({ rel: "stylesheet", href: t, "data-precedence": r }, s)),
            (s = nr.get(p)) && dh(t, s);
          var N = (v = l.createElement("link"));
          en(N),
            ln(N, "link", t),
            (N._p = new Promise(function (H, ae) {
              (N.onload = H), (N.onerror = ae);
            })),
            N.addEventListener("load", function () {
              A.loading |= 1;
            }),
            N.addEventListener("error", function () {
              A.loading |= 2;
            }),
            (A.loading |= 4),
            Ac(v, r, l);
        }
        (v = { type: "stylesheet", instance: v, count: 1, state: A }),
          c.set(p, v);
      }
    }
  }
  function $w(t, r) {
    da.X(t, r);
    var s = Ls;
    if (s && t) {
      var l = os(s).hoistableScripts,
        c = $s(t),
        p = l.get(c);
      p ||
        ((p = s.querySelector(Rl(c))),
        p ||
          ((t = R({ src: t, async: !0 }, r)),
          (r = nr.get(c)) && ph(t, r),
          (p = s.createElement("script")),
          en(p),
          ln(p, "link", t),
          s.head.appendChild(p)),
        (p = { type: "script", instance: p, count: 1, state: null }),
        l.set(c, p));
    }
  }
  function Hw(t, r) {
    da.M(t, r);
    var s = Ls;
    if (s && t) {
      var l = os(s).hoistableScripts,
        c = $s(t),
        p = l.get(c);
      p ||
        ((p = s.querySelector(Rl(c))),
        p ||
          ((t = R({ src: t, async: !0, type: "module" }, r)),
          (r = nr.get(c)) && ph(t, r),
          (p = s.createElement("script")),
          en(p),
          ln(p, "link", t),
          s.head.appendChild(p)),
        (p = { type: "script", instance: p, count: 1, state: null }),
        l.set(c, p));
    }
  }
  function gb(t, r, s, l) {
    var c = (c = We.current) ? Tc(c) : null;
    if (!c) throw Error(i(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof s.precedence == "string" && typeof s.href == "string"
          ? ((r = js(s.href)),
            (s = os(c).hoistableStyles),
            (l = s.get(r)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              s.set(r, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          s.rel === "stylesheet" &&
          typeof s.href == "string" &&
          typeof s.precedence == "string"
        ) {
          t = js(s.href);
          var p = os(c).hoistableStyles,
            v = p.get(t);
          if (
            (v ||
              ((c = c.ownerDocument || c),
              (v = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              p.set(t, v),
              (p = c.querySelector(El(t))) &&
                !p._p &&
                ((v.instance = p), (v.state.loading = 5)),
              nr.has(t) ||
                ((s = {
                  rel: "preload",
                  as: "style",
                  href: s.href,
                  crossOrigin: s.crossOrigin,
                  integrity: s.integrity,
                  media: s.media,
                  hrefLang: s.hrefLang,
                  referrerPolicy: s.referrerPolicy,
                }),
                nr.set(t, s),
                p || Pw(c, t, s, v.state))),
            r && l === null)
          )
            throw Error(i(528, ""));
          return v;
        }
        if (r && l !== null) throw Error(i(529, ""));
        return null;
      case "script":
        return (
          (r = s.async),
          (s = s.src),
          typeof s == "string" &&
          r &&
          typeof r != "function" &&
          typeof r != "symbol"
            ? ((r = $s(s)),
              (s = os(c).hoistableScripts),
              (l = s.get(r)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                s.set(r, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(i(444, t));
    }
  }
  function js(t) {
    return 'href="' + In(t) + '"';
  }
  function El(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function yb(t) {
    return R({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Pw(t, r, s, l) {
    t.querySelector('link[rel="preload"][as="style"][' + r + "]")
      ? (l.loading = 1)
      : ((r = t.createElement("link")),
        (l.preload = r),
        r.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        r.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        ln(r, "link", s),
        en(r),
        t.head.appendChild(r));
  }
  function $s(t) {
    return '[src="' + In(t) + '"]';
  }
  function Rl(t) {
    return "script[async]" + t;
  }
  function vb(t, r, s) {
    if ((r.count++, r.instance === null))
      switch (r.type) {
        case "style":
          var l = t.querySelector('style[data-href~="' + In(s.href) + '"]');
          if (l) return (r.instance = l), en(l), l;
          var c = R({}, s, {
            "data-href": s.href,
            "data-precedence": s.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (t.ownerDocument || t).createElement("style")),
            en(l),
            ln(l, "style", c),
            Ac(l, s.precedence, t),
            (r.instance = l)
          );
        case "stylesheet":
          c = js(s.href);
          var p = t.querySelector(El(c));
          if (p) return (r.state.loading |= 4), (r.instance = p), en(p), p;
          (l = yb(s)),
            (c = nr.get(c)) && dh(l, c),
            (p = (t.ownerDocument || t).createElement("link")),
            en(p);
          var v = p;
          return (
            (v._p = new Promise(function (A, N) {
              (v.onload = A), (v.onerror = N);
            })),
            ln(p, "link", l),
            (r.state.loading |= 4),
            Ac(p, s.precedence, t),
            (r.instance = p)
          );
        case "script":
          return (
            (p = $s(s.src)),
            (c = t.querySelector(Rl(p)))
              ? ((r.instance = c), en(c), c)
              : ((l = s),
                (c = nr.get(p)) && ((l = R({}, s)), ph(l, c)),
                (t = t.ownerDocument || t),
                (c = t.createElement("script")),
                en(c),
                ln(c, "link", l),
                t.head.appendChild(c),
                (r.instance = c))
          );
        case "void":
          return null;
        default:
          throw Error(i(443, r.type));
      }
    else
      r.type === "stylesheet" &&
        !(r.state.loading & 4) &&
        ((l = r.instance), (r.state.loading |= 4), Ac(l, s.precedence, t));
    return r.instance;
  }
  function Ac(t, r, s) {
    for (
      var l = s.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        c = l.length ? l[l.length - 1] : null,
        p = c,
        v = 0;
      v < l.length;
      v++
    ) {
      var A = l[v];
      if (A.dataset.precedence === r) p = A;
      else if (p !== c) break;
    }
    p
      ? p.parentNode.insertBefore(t, p.nextSibling)
      : ((r = s.nodeType === 9 ? s.head : s), r.insertBefore(t, r.firstChild));
  }
  function dh(t, r) {
    t.crossOrigin == null && (t.crossOrigin = r.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = r.referrerPolicy),
      t.title == null && (t.title = r.title);
  }
  function ph(t, r) {
    t.crossOrigin == null && (t.crossOrigin = r.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = r.referrerPolicy),
      t.integrity == null && (t.integrity = r.integrity);
  }
  var Oc = null;
  function bb(t, r, s) {
    if (Oc === null) {
      var l = new Map(),
        c = (Oc = new Map());
      c.set(s, l);
    } else (c = Oc), (l = c.get(s)), l || ((l = new Map()), c.set(s, l));
    if (l.has(t)) return l;
    for (
      l.set(t, null), s = s.getElementsByTagName(t), c = 0;
      c < s.length;
      c++
    ) {
      var p = s[c];
      if (
        !(
          p[Lo] ||
          p[fn] ||
          (t === "link" && p.getAttribute("rel") === "stylesheet")
        ) &&
        p.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var v = p.getAttribute(r) || "";
        v = t + v;
        var A = l.get(v);
        A ? A.push(p) : l.set(v, [p]);
      }
    }
    return l;
  }
  function Sb(t, r, s) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        s,
        r === "title" ? t.querySelector("head > title") : null
      );
  }
  function Fw(t, r, s) {
    if (s === 1 || r.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof r.precedence != "string" ||
          typeof r.href != "string" ||
          r.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof r.rel != "string" ||
          typeof r.href != "string" ||
          r.href === "" ||
          r.onLoad ||
          r.onError
        )
          break;
        switch (r.rel) {
          case "stylesheet":
            return (
              (t = r.disabled), typeof r.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          r.async &&
          typeof r.async != "function" &&
          typeof r.async != "symbol" &&
          !r.onLoad &&
          !r.onError &&
          r.src &&
          typeof r.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function xb(t) {
    return !(t.type === "stylesheet" && !(t.state.loading & 3));
  }
  var Cl = null;
  function qw() {}
  function Vw(t, r, s) {
    if (Cl === null) throw Error(i(475));
    var l = Cl;
    if (
      r.type === "stylesheet" &&
      (typeof s.media != "string" || matchMedia(s.media).matches !== !1) &&
      !(r.state.loading & 4)
    ) {
      if (r.instance === null) {
        var c = js(s.href),
          p = t.querySelector(El(c));
        if (p) {
          (t = p._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = Mc.bind(l)), t.then(l, l)),
            (r.state.loading |= 4),
            (r.instance = p),
            en(p);
          return;
        }
        (p = t.ownerDocument || t),
          (s = yb(s)),
          (c = nr.get(c)) && dh(s, c),
          (p = p.createElement("link")),
          en(p);
        var v = p;
        (v._p = new Promise(function (A, N) {
          (v.onload = A), (v.onerror = N);
        })),
          ln(p, "link", s),
          (r.instance = p);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(r, t),
        (t = r.state.preload) &&
          !(r.state.loading & 3) &&
          (l.count++,
          (r = Mc.bind(l)),
          t.addEventListener("load", r),
          t.addEventListener("error", r));
    }
  }
  function Gw() {
    if (Cl === null) throw Error(i(475));
    var t = Cl;
    return (
      t.stylesheets && t.count === 0 && hh(t, t.stylesheets),
      0 < t.count
        ? function (r) {
            var s = setTimeout(function () {
              if ((t.stylesheets && hh(t, t.stylesheets), t.unsuspend)) {
                var l = t.unsuspend;
                (t.unsuspend = null), l();
              }
            }, 6e4);
            return (
              (t.unsuspend = r),
              function () {
                (t.unsuspend = null), clearTimeout(s);
              }
            );
          }
        : null
    );
  }
  function Mc() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) hh(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var _c = null;
  function hh(t, r) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (_c = new Map()),
        r.forEach(Iw, t),
        (_c = null),
        Mc.call(t));
  }
  function Iw(t, r) {
    if (!(r.state.loading & 4)) {
      var s = _c.get(t);
      if (s) var l = s.get(null);
      else {
        (s = new Map()), _c.set(t, s);
        for (
          var c = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            p = 0;
          p < c.length;
          p++
        ) {
          var v = c[p];
          (v.nodeName === "LINK" || v.getAttribute("media") !== "not all") &&
            (s.set(v.dataset.precedence, v), (l = v));
        }
        l && s.set(null, l);
      }
      (c = r.instance),
        (v = c.getAttribute("data-precedence")),
        (p = s.get(v) || l),
        p === l && s.set(null, c),
        s.set(v, c),
        this.count++,
        (l = Mc.bind(this)),
        c.addEventListener("load", l),
        c.addEventListener("error", l),
        p
          ? p.parentNode.insertBefore(c, p.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(c, t.firstChild)),
        (r.state.loading |= 4);
    }
  }
  var wl = {
    $$typeof: C,
    Provider: null,
    Consumer: null,
    _currentValue: be,
    _currentValue2: be,
    _threadCount: 0,
  };
  function Yw(t, r, s, l, c, p, v, A) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = gd(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = gd(0)),
      (this.hiddenUpdates = gd(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = c),
      (this.onCaughtError = p),
      (this.onRecoverableError = v),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = A),
      (this.incompleteTransitions = new Map());
  }
  function Eb(t, r, s, l, c, p, v, A, N, H, ae, oe) {
    return (
      (t = new Yw(t, r, s, v, A, N, H, oe)),
      (r = 1),
      p === !0 && (r |= 24),
      (p = er(3, null, null, r)),
      (t.current = p),
      (p.stateNode = t),
      (r = Id()),
      r.refCount++,
      (t.pooledCache = r),
      r.refCount++,
      (p.memoizedState = { element: l, isDehydrated: s, cache: r }),
      Tp(p),
      t
    );
  }
  function Rb(t) {
    return t ? ((t = ys), t) : ys;
  }
  function Cb(t, r, s, l, c, p) {
    (c = Rb(c)),
      l.context === null ? (l.context = c) : (l.pendingContext = c),
      (l = Ba(r)),
      (l.payload = { element: s }),
      (p = p === void 0 ? null : p),
      p !== null && (l.callback = p),
      (s = Ua(t, l, r)),
      s !== null && (Sn(s, t, r), ll(s, t, r));
  }
  function wb(t, r) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var s = t.retryLane;
      t.retryLane = s !== 0 && s < r ? s : r;
    }
  }
  function mh(t, r) {
    wb(t, r), (t = t.alternate) && wb(t, r);
  }
  function Tb(t) {
    if (t.tag === 13) {
      var r = Oa(t, 67108864);
      r !== null && Sn(r, t, 67108864), mh(t, 67108864);
    }
  }
  var Dc = !0;
  function Qw(t, r, s, l) {
    var c = P.T;
    P.T = null;
    var p = ce.p;
    try {
      (ce.p = 2), gh(t, r, s, l);
    } finally {
      (ce.p = p), (P.T = c);
    }
  }
  function Kw(t, r, s, l) {
    var c = P.T;
    P.T = null;
    var p = ce.p;
    try {
      (ce.p = 8), gh(t, r, s, l);
    } finally {
      (ce.p = p), (P.T = c);
    }
  }
  function gh(t, r, s, l) {
    if (Dc) {
      var c = yh(l);
      if (c === null) ah(t, r, l, Nc, s), Ob(t, l);
      else if (Ww(c, t, r, s, l)) l.stopPropagation();
      else if ((Ob(t, l), r & 4 && -1 < Xw.indexOf(t))) {
        for (; c !== null; ) {
          var p = ss(c);
          if (p !== null)
            switch (p.tag) {
              case 3:
                if (((p = p.stateNode), p.current.memoizedState.isDehydrated)) {
                  var v = pi(p.pendingLanes);
                  if (v !== 0) {
                    var A = p;
                    for (A.pendingLanes |= 2, A.entangledLanes |= 2; v; ) {
                      var N = 1 << (31 - et(v));
                      (A.entanglements[1] |= N), (v &= ~N);
                    }
                    Dr(p), !(Mt & 6) && ((mc = ge() + 500), bl(0));
                  }
                }
                break;
              case 13:
                (A = Oa(p, 2)), A !== null && Sn(A, p, 2), vc(), mh(p, 2);
            }
          if (((p = yh(l)), p === null && ah(t, r, l, Nc, s), p === c)) break;
          c = p;
        }
        c !== null && l.stopPropagation();
      } else ah(t, r, l, null, s);
    }
  }
  function yh(t) {
    return (t = Rd(t)), vh(t);
  }
  var Nc = null;
  function vh(t) {
    if (((Nc = null), (t = hi(t)), t !== null)) {
      var r = fe(t);
      if (r === null) t = null;
      else {
        var s = r.tag;
        if (s === 13) {
          if (((t = ue(r)), t !== null)) return t;
          t = null;
        } else if (s === 3) {
          if (r.stateNode.current.memoizedState.isDehydrated)
            return r.tag === 3 ? r.stateNode.containerInfo : null;
          t = null;
        } else r !== t && (t = null);
      }
    }
    return (Nc = t), null;
  }
  function Ab(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ze()) {
          case dt:
            return 2;
          case pt:
            return 8;
          case qt:
          case wr:
            return 32;
          case Cn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var bh = !1,
    qa = null,
    Va = null,
    Ga = null,
    Tl = new Map(),
    Al = new Map(),
    Ia = [],
    Xw =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Ob(t, r) {
    switch (t) {
      case "focusin":
      case "focusout":
        qa = null;
        break;
      case "dragenter":
      case "dragleave":
        Va = null;
        break;
      case "mouseover":
      case "mouseout":
        Ga = null;
        break;
      case "pointerover":
      case "pointerout":
        Tl.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Al.delete(r.pointerId);
    }
  }
  function Ol(t, r, s, l, c, p) {
    return t === null || t.nativeEvent !== p
      ? ((t = {
          blockedOn: r,
          domEventName: s,
          eventSystemFlags: l,
          nativeEvent: p,
          targetContainers: [c],
        }),
        r !== null && ((r = ss(r)), r !== null && Tb(r)),
        t)
      : ((t.eventSystemFlags |= l),
        (r = t.targetContainers),
        c !== null && r.indexOf(c) === -1 && r.push(c),
        t);
  }
  function Ww(t, r, s, l, c) {
    switch (r) {
      case "focusin":
        return (qa = Ol(qa, t, r, s, l, c)), !0;
      case "dragenter":
        return (Va = Ol(Va, t, r, s, l, c)), !0;
      case "mouseover":
        return (Ga = Ol(Ga, t, r, s, l, c)), !0;
      case "pointerover":
        var p = c.pointerId;
        return Tl.set(p, Ol(Tl.get(p) || null, t, r, s, l, c)), !0;
      case "gotpointercapture":
        return (
          (p = c.pointerId), Al.set(p, Ol(Al.get(p) || null, t, r, s, l, c)), !0
        );
    }
    return !1;
  }
  function Mb(t) {
    var r = hi(t.target);
    if (r !== null) {
      var s = fe(r);
      if (s !== null) {
        if (((r = s.tag), r === 13)) {
          if (((r = ue(s)), r !== null)) {
            (t.blockedOn = r),
              GR(t.priority, function () {
                if (s.tag === 13) {
                  var l = Hn(),
                    c = Oa(s, l);
                  c !== null && Sn(c, s, l), mh(s, l);
                }
              });
            return;
          }
        } else if (r === 3 && s.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function zc(t) {
    if (t.blockedOn !== null) return !1;
    for (var r = t.targetContainers; 0 < r.length; ) {
      var s = yh(t.nativeEvent);
      if (s === null) {
        s = t.nativeEvent;
        var l = new s.constructor(s.type, s);
        (Ed = l), s.target.dispatchEvent(l), (Ed = null);
      } else return (r = ss(s)), r !== null && Tb(r), (t.blockedOn = s), !1;
      r.shift();
    }
    return !0;
  }
  function _b(t, r, s) {
    zc(t) && s.delete(r);
  }
  function Zw() {
    (bh = !1),
      qa !== null && zc(qa) && (qa = null),
      Va !== null && zc(Va) && (Va = null),
      Ga !== null && zc(Ga) && (Ga = null),
      Tl.forEach(_b),
      Al.forEach(_b);
  }
  function kc(t, r) {
    t.blockedOn === r &&
      ((t.blockedOn = null),
      bh ||
        ((bh = !0),
        e.unstable_scheduleCallback(e.unstable_NormalPriority, Zw)));
  }
  var Bc = null;
  function Db(t) {
    Bc !== t &&
      ((Bc = t),
      e.unstable_scheduleCallback(e.unstable_NormalPriority, function () {
        Bc === t && (Bc = null);
        for (var r = 0; r < t.length; r += 3) {
          var s = t[r],
            l = t[r + 1],
            c = t[r + 2];
          if (typeof l != "function") {
            if (vh(l || s) === null) continue;
            break;
          }
          var p = ss(s);
          p !== null &&
            (t.splice(r, 3),
            (r -= 3),
            lp(p, { pending: !0, data: c, method: s.method, action: l }, l, c));
        }
      }));
  }
  function Ml(t) {
    function r(N) {
      return kc(N, t);
    }
    qa !== null && kc(qa, t),
      Va !== null && kc(Va, t),
      Ga !== null && kc(Ga, t),
      Tl.forEach(r),
      Al.forEach(r);
    for (var s = 0; s < Ia.length; s++) {
      var l = Ia[s];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < Ia.length && ((s = Ia[0]), s.blockedOn === null); )
      Mb(s), s.blockedOn === null && Ia.shift();
    if (((s = (t.ownerDocument || t).$$reactFormReplay), s != null))
      for (l = 0; l < s.length; l += 3) {
        var c = s[l],
          p = s[l + 1],
          v = c[Tn] || null;
        if (typeof p == "function") v || Db(s);
        else if (v) {
          var A = null;
          if (p && p.hasAttribute("formAction")) {
            if (((c = p), (v = p[Tn] || null))) A = v.formAction;
            else if (vh(c) !== null) continue;
          } else A = v.action;
          typeof A == "function" ? (s[l + 1] = A) : (s.splice(l, 3), (l -= 3)),
            Db(s);
        }
      }
  }
  function Sh(t) {
    this._internalRoot = t;
  }
  (Uc.prototype.render = Sh.prototype.render =
    function (t) {
      var r = this._internalRoot;
      if (r === null) throw Error(i(409));
      var s = r.current,
        l = Hn();
      Cb(s, l, t, r, null, null);
    }),
    (Uc.prototype.unmount = Sh.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var r = t.containerInfo;
          t.tag === 0 && ks(),
            Cb(t.current, 2, null, t, null, null),
            vc(),
            (r[is] = null);
        }
      });
  function Uc(t) {
    this._internalRoot = t;
  }
  Uc.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var r = iy();
      t = { blockedOn: null, target: t, priority: r };
      for (var s = 0; s < Ia.length && r !== 0 && r < Ia[s].priority; s++);
      Ia.splice(s, 0, t), s === 0 && Mb(t);
    }
  };
  var Nb = n.version;
  if (Nb !== "19.0.0") throw Error(i(527, Nb, "19.0.0"));
  ce.findDOMNode = function (t) {
    var r = t._reactInternals;
    if (r === void 0)
      throw typeof t.render == "function"
        ? Error(i(188))
        : ((t = Object.keys(t).join(",")), Error(i(268, t)));
    return (
      (t = ee(r)),
      (t = t !== null ? me(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Jw = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: P,
    findFiberByHostInstance: hi,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Lc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Lc.isDisabled && Lc.supportsFiber)
      try {
        (wn = Lc.inject(Jw)), (Jt = Lc);
      } catch {}
  }
  return (
    (Dl.createRoot = function (t, r) {
      if (!o(t)) throw Error(i(299));
      var s = !1,
        l = "",
        c = K0,
        p = X0,
        v = W0,
        A = null;
      return (
        r != null &&
          (r.unstable_strictMode === !0 && (s = !0),
          r.identifierPrefix !== void 0 && (l = r.identifierPrefix),
          r.onUncaughtError !== void 0 && (c = r.onUncaughtError),
          r.onCaughtError !== void 0 && (p = r.onCaughtError),
          r.onRecoverableError !== void 0 && (v = r.onRecoverableError),
          r.unstable_transitionCallbacks !== void 0 &&
            (A = r.unstable_transitionCallbacks)),
        (r = Eb(t, 1, !1, null, null, s, l, c, p, v, A, null)),
        (t[is] = r.current),
        rh(t.nodeType === 8 ? t.parentNode : t),
        new Sh(r)
      );
    }),
    (Dl.hydrateRoot = function (t, r, s) {
      if (!o(t)) throw Error(i(299));
      var l = !1,
        c = "",
        p = K0,
        v = X0,
        A = W0,
        N = null,
        H = null;
      return (
        s != null &&
          (s.unstable_strictMode === !0 && (l = !0),
          s.identifierPrefix !== void 0 && (c = s.identifierPrefix),
          s.onUncaughtError !== void 0 && (p = s.onUncaughtError),
          s.onCaughtError !== void 0 && (v = s.onCaughtError),
          s.onRecoverableError !== void 0 && (A = s.onRecoverableError),
          s.unstable_transitionCallbacks !== void 0 &&
            (N = s.unstable_transitionCallbacks),
          s.formState !== void 0 && (H = s.formState)),
        (r = Eb(t, 1, !0, r, s ?? null, l, c, p, v, A, N, H)),
        (r.context = Rb(null)),
        (s = r.current),
        (l = Hn()),
        (c = Ba(l)),
        (c.callback = null),
        Ua(s, c, l),
        (r.current.lanes = l),
        Uo(r, l),
        Dr(r),
        (t[is] = r.current),
        rh(t),
        new Uc(r)
      );
    }),
    (Dl.version = "19.0.0"),
    Dl
  );
}
var qb;
function fT() {
  if (qb) return Ch.exports;
  qb = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (n) {
        console.error(n);
      }
  }
  return e(), (Ch.exports = cT()), Ch.exports;
}
var dT = fT(),
  Nl = {},
  Vb;
function pT() {
  if (Vb) return Nl;
  (Vb = 1),
    Object.defineProperty(Nl, "__esModule", { value: !0 }),
    (Nl.parse = f),
    (Nl.serialize = h);
  const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    n = /^[\u0021-\u003A\u003C-\u007E]*$/,
    a =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    i = /^[\u0020-\u003A\u003D-\u007E]*$/,
    o = Object.prototype.toString,
    u = (() => {
      const x = function () {};
      return (x.prototype = Object.create(null)), x;
    })();
  function f(x, C) {
    const b = new u(),
      S = x.length;
    if (S < 2) return b;
    const w = (C == null ? void 0 : C.decode) || g;
    let O = 0;
    do {
      const _ = x.indexOf("=", O);
      if (_ === -1) break;
      const T = x.indexOf(";", O),
        D = T === -1 ? S : T;
      if (_ > D) {
        O = x.lastIndexOf(";", _ - 1) + 1;
        continue;
      }
      const M = d(x, O, _),
        $ = m(x, _, M),
        L = x.slice(M, $);
      if (b[L] === void 0) {
        let K = d(x, _ + 1, D),
          P = m(x, D, K);
        const R = w(x.slice(K, P));
        b[L] = R;
      }
      O = D + 1;
    } while (O < S);
    return b;
  }
  function d(x, C, b) {
    do {
      const S = x.charCodeAt(C);
      if (S !== 32 && S !== 9) return C;
    } while (++C < b);
    return b;
  }
  function m(x, C, b) {
    for (; C > b; ) {
      const S = x.charCodeAt(--C);
      if (S !== 32 && S !== 9) return C + 1;
    }
    return b;
  }
  function h(x, C, b) {
    const S = (b == null ? void 0 : b.encode) || encodeURIComponent;
    if (!e.test(x)) throw new TypeError(`argument name is invalid: ${x}`);
    const w = S(C);
    if (!n.test(w)) throw new TypeError(`argument val is invalid: ${C}`);
    let O = x + "=" + w;
    if (!b) return O;
    if (b.maxAge !== void 0) {
      if (!Number.isInteger(b.maxAge))
        throw new TypeError(`option maxAge is invalid: ${b.maxAge}`);
      O += "; Max-Age=" + b.maxAge;
    }
    if (b.domain) {
      if (!a.test(b.domain))
        throw new TypeError(`option domain is invalid: ${b.domain}`);
      O += "; Domain=" + b.domain;
    }
    if (b.path) {
      if (!i.test(b.path))
        throw new TypeError(`option path is invalid: ${b.path}`);
      O += "; Path=" + b.path;
    }
    if (b.expires) {
      if (!y(b.expires) || !Number.isFinite(b.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${b.expires}`);
      O += "; Expires=" + b.expires.toUTCString();
    }
    if (
      (b.httpOnly && (O += "; HttpOnly"),
      b.secure && (O += "; Secure"),
      b.partitioned && (O += "; Partitioned"),
      b.priority)
    )
      switch (
        typeof b.priority == "string" ? b.priority.toLowerCase() : void 0
      ) {
        case "low":
          O += "; Priority=Low";
          break;
        case "medium":
          O += "; Priority=Medium";
          break;
        case "high":
          O += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${b.priority}`);
      }
    if (b.sameSite)
      switch (
        typeof b.sameSite == "string" ? b.sameSite.toLowerCase() : b.sameSite
      ) {
        case !0:
        case "strict":
          O += "; SameSite=Strict";
          break;
        case "lax":
          O += "; SameSite=Lax";
          break;
        case "none":
          O += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${b.sameSite}`);
      }
    return O;
  }
  function g(x) {
    if (x.indexOf("%") === -1) return x;
    try {
      return decodeURIComponent(x);
    } catch {
      return x;
    }
  }
  function y(x) {
    return o.call(x) === "[object Date]";
  }
  return Nl;
}
pT();
/**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Gb = "popstate";
function hT(e = {}) {
  function n(i, o) {
    let { pathname: u, search: f, hash: d } = i.location;
    return tm(
      "",
      { pathname: u, search: f, hash: d },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function a(i, o) {
    return typeof o == "string" ? o : Jl(o);
  }
  return gT(n, a, null, e);
}
function At(e, n) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(n);
}
function Sr(e, n) {
  if (!e) {
    typeof console < "u" && console.warn(n);
    try {
      throw new Error(n);
    } catch {}
  }
}
function mT() {
  return Math.random().toString(36).substring(2, 10);
}
function Ib(e, n) {
  return { usr: e.state, key: e.key, idx: n };
}
function tm(e, n, a = null, i) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...(typeof n == "string" ? Co(n) : n),
    state: a,
    key: (n && n.key) || i || mT(),
  };
}
function Jl({ pathname: e = "/", search: n = "", hash: a = "" }) {
  return (
    n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n),
    a && a !== "#" && (e += a.charAt(0) === "#" ? a : "#" + a),
    e
  );
}
function Co(e) {
  let n = {};
  if (e) {
    let a = e.indexOf("#");
    a >= 0 && ((n.hash = e.substring(a)), (e = e.substring(0, a)));
    let i = e.indexOf("?");
    i >= 0 && ((n.search = e.substring(i)), (e = e.substring(0, i))),
      e && (n.pathname = e);
  }
  return n;
}
function gT(e, n, a, i = {}) {
  let { window: o = document.defaultView, v5Compat: u = !1 } = i,
    f = o.history,
    d = "POP",
    m = null,
    h = g();
  h == null && ((h = 0), f.replaceState({ ...f.state, idx: h }, ""));
  function g() {
    return (f.state || { idx: null }).idx;
  }
  function y() {
    d = "POP";
    let w = g(),
      O = w == null ? null : w - h;
    (h = w), m && m({ action: d, location: S.location, delta: O });
  }
  function x(w, O) {
    d = "PUSH";
    let _ = tm(S.location, w, O);
    h = g() + 1;
    let T = Ib(_, h),
      D = S.createHref(_);
    try {
      f.pushState(T, "", D);
    } catch (M) {
      if (M instanceof DOMException && M.name === "DataCloneError") throw M;
      o.location.assign(D);
    }
    u && m && m({ action: d, location: S.location, delta: 1 });
  }
  function C(w, O) {
    d = "REPLACE";
    let _ = tm(S.location, w, O);
    h = g();
    let T = Ib(_, h),
      D = S.createHref(_);
    f.replaceState(T, "", D),
      u && m && m({ action: d, location: S.location, delta: 0 });
  }
  function b(w) {
    let O = o.location.origin !== "null" ? o.location.origin : o.location.href,
      _ = typeof w == "string" ? w : Jl(w);
    return (
      (_ = _.replace(/ $/, "%20")),
      At(
        O,
        `No window.location.(origin|href) available to create URL for href: ${_}`
      ),
      new URL(_, O)
    );
  }
  let S = {
    get action() {
      return d;
    },
    get location() {
      return e(o, f);
    },
    listen(w) {
      if (m) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Gb, y),
        (m = w),
        () => {
          o.removeEventListener(Gb, y), (m = null);
        }
      );
    },
    createHref(w) {
      return n(o, w);
    },
    createURL: b,
    encodeLocation(w) {
      let O = b(w);
      return { pathname: O.pathname, search: O.search, hash: O.hash };
    },
    push: x,
    replace: C,
    go(w) {
      return f.go(w);
    },
  };
  return S;
}
function ax(e, n, a = "/") {
  return yT(e, n, a, !1);
}
function yT(e, n, a, i) {
  let o = typeof n == "string" ? Co(n) : n,
    u = ci(o.pathname || "/", a);
  if (u == null) return null;
  let f = ix(e);
  vT(f);
  let d = null;
  for (let m = 0; d == null && m < f.length; ++m) {
    let h = MT(u);
    d = AT(f[m], h, i);
  }
  return d;
}
function ix(e, n = [], a = [], i = "") {
  let o = (u, f, d) => {
    let m = {
      relativePath: d === void 0 ? u.path || "" : d,
      caseSensitive: u.caseSensitive === !0,
      childrenIndex: f,
      route: u,
    };
    m.relativePath.startsWith("/") &&
      (At(
        m.relativePath.startsWith(i),
        `Absolute route path "${m.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (m.relativePath = m.relativePath.slice(i.length)));
    let h = Sa([i, m.relativePath]),
      g = a.concat(m);
    u.children &&
      u.children.length > 0 &&
      (At(
        u.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${h}".`
      ),
      ix(u.children, n, g, h)),
      !(u.path == null && !u.index) &&
        n.push({ path: h, score: wT(h, u.index), routesMeta: g });
  };
  return (
    e.forEach((u, f) => {
      var d;
      if (u.path === "" || !((d = u.path) != null && d.includes("?"))) o(u, f);
      else for (let m of sx(u.path)) o(u, f, m);
    }),
    n
  );
}
function sx(e) {
  let n = e.split("/");
  if (n.length === 0) return [];
  let [a, ...i] = n,
    o = a.endsWith("?"),
    u = a.replace(/\?$/, "");
  if (i.length === 0) return o ? [u, ""] : [u];
  let f = sx(i.join("/")),
    d = [];
  return (
    d.push(...f.map((m) => (m === "" ? u : [u, m].join("/")))),
    o && d.push(...f),
    d.map((m) => (e.startsWith("/") && m === "" ? "/" : m))
  );
}
function vT(e) {
  e.sort((n, a) =>
    n.score !== a.score
      ? a.score - n.score
      : TT(
          n.routesMeta.map((i) => i.childrenIndex),
          a.routesMeta.map((i) => i.childrenIndex)
        )
  );
}
var bT = /^:[\w-]+$/,
  ST = 3,
  xT = 2,
  ET = 1,
  RT = 10,
  CT = -2,
  Yb = (e) => e === "*";
function wT(e, n) {
  let a = e.split("/"),
    i = a.length;
  return (
    a.some(Yb) && (i += CT),
    n && (i += xT),
    a
      .filter((o) => !Yb(o))
      .reduce((o, u) => o + (bT.test(u) ? ST : u === "" ? ET : RT), i)
  );
}
function TT(e, n) {
  return e.length === n.length && e.slice(0, -1).every((i, o) => i === n[o])
    ? e[e.length - 1] - n[n.length - 1]
    : 0;
}
function AT(e, n, a = !1) {
  let { routesMeta: i } = e,
    o = {},
    u = "/",
    f = [];
  for (let d = 0; d < i.length; ++d) {
    let m = i[d],
      h = d === i.length - 1,
      g = u === "/" ? n : n.slice(u.length) || "/",
      y = hf(
        { path: m.relativePath, caseSensitive: m.caseSensitive, end: h },
        g
      ),
      x = m.route;
    if (
      (!y &&
        h &&
        a &&
        !i[i.length - 1].route.index &&
        (y = hf(
          { path: m.relativePath, caseSensitive: m.caseSensitive, end: !1 },
          g
        )),
      !y)
    )
      return null;
    Object.assign(o, y.params),
      f.push({
        params: o,
        pathname: Sa([u, y.pathname]),
        pathnameBase: zT(Sa([u, y.pathnameBase])),
        route: x,
      }),
      y.pathnameBase !== "/" && (u = Sa([u, y.pathnameBase]));
  }
  return f;
}
function hf(e, n) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [a, i] = OT(e.path, e.caseSensitive, e.end),
    o = n.match(a);
  if (!o) return null;
  let u = o[0],
    f = u.replace(/(.)\/+$/, "$1"),
    d = o.slice(1);
  return {
    params: i.reduce((h, { paramName: g, isOptional: y }, x) => {
      if (g === "*") {
        let b = d[x] || "";
        f = u.slice(0, u.length - b.length).replace(/(.)\/+$/, "$1");
      }
      const C = d[x];
      return (
        y && !C ? (h[g] = void 0) : (h[g] = (C || "").replace(/%2F/g, "/")), h
      );
    }, {}),
    pathname: u,
    pathnameBase: f,
    pattern: e,
  };
}
function OT(e, n = !1, a = !0) {
  Sr(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let i = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (f, d, m) => (
            i.push({ paramName: d, isOptional: m != null }),
            m ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (i.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : a
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, n ? void 0 : "i"), i]
  );
}
function MT(e) {
  try {
    return e
      .split("/")
      .map((n) => decodeURIComponent(n).replace(/\//g, "%2F"))
      .join("/");
  } catch (n) {
    return (
      Sr(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`
      ),
      e
    );
  }
}
function ci(e, n) {
  if (n === "/") return e;
  if (!e.toLowerCase().startsWith(n.toLowerCase())) return null;
  let a = n.endsWith("/") ? n.length - 1 : n.length,
    i = e.charAt(a);
  return i && i !== "/" ? null : e.slice(a) || "/";
}
function _T(e, n = "/") {
  let {
    pathname: a,
    search: i = "",
    hash: o = "",
  } = typeof e == "string" ? Co(e) : e;
  return {
    pathname: a ? (a.startsWith("/") ? a : DT(a, n)) : n,
    search: kT(i),
    hash: BT(o),
  };
}
function DT(e, n) {
  let a = n.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? a.length > 1 && a.pop() : o !== "." && a.push(o);
    }),
    a.length > 1 ? a.join("/") : "/"
  );
}
function Oh(e, n, a, i) {
  return `Cannot include a '${e}' character in a manually specified \`to.${n}\` field [${JSON.stringify(
    i
  )}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function NT(e) {
  return e.filter(
    (n, a) => a === 0 || (n.route.path && n.route.path.length > 0)
  );
}
function Km(e) {
  let n = NT(e);
  return n.map((a, i) => (i === n.length - 1 ? a.pathname : a.pathnameBase));
}
function Xm(e, n, a, i = !1) {
  let o;
  typeof e == "string"
    ? (o = Co(e))
    : ((o = { ...e }),
      At(
        !o.pathname || !o.pathname.includes("?"),
        Oh("?", "pathname", "search", o)
      ),
      At(
        !o.pathname || !o.pathname.includes("#"),
        Oh("#", "pathname", "hash", o)
      ),
      At(!o.search || !o.search.includes("#"), Oh("#", "search", "hash", o)));
  let u = e === "" || o.pathname === "",
    f = u ? "/" : o.pathname,
    d;
  if (f == null) d = a;
  else {
    let y = n.length - 1;
    if (!i && f.startsWith("..")) {
      let x = f.split("/");
      for (; x[0] === ".."; ) x.shift(), (y -= 1);
      o.pathname = x.join("/");
    }
    d = y >= 0 ? n[y] : "/";
  }
  let m = _T(o, d),
    h = f && f !== "/" && f.endsWith("/"),
    g = (u || f === ".") && a.endsWith("/");
  return !m.pathname.endsWith("/") && (h || g) && (m.pathname += "/"), m;
}
var Sa = (e) => e.join("/").replace(/\/\/+/g, "/"),
  zT = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  kT = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  BT = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function UT(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
var ox = ["POST", "PUT", "PATCH", "DELETE"];
new Set(ox);
var LT = ["GET", ...ox];
new Set(LT);
var wo = E.createContext(null);
wo.displayName = "DataRouter";
var Lf = E.createContext(null);
Lf.displayName = "DataRouterState";
var lx = E.createContext({ isTransitioning: !1 });
lx.displayName = "ViewTransition";
var jT = E.createContext(new Map());
jT.displayName = "Fetchers";
var $T = E.createContext(null);
$T.displayName = "Await";
var Er = E.createContext(null);
Er.displayName = "Navigation";
var du = E.createContext(null);
du.displayName = "Location";
var Qr = E.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Qr.displayName = "Route";
var Wm = E.createContext(null);
Wm.displayName = "RouteError";
function HT(e, { relative: n } = {}) {
  At(
    To(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: a, navigator: i } = E.useContext(Er),
    { hash: o, pathname: u, search: f } = hu(e, { relative: n }),
    d = u;
  return (
    a !== "/" && (d = u === "/" ? a : Sa([a, u])),
    i.createHref({ pathname: d, search: f, hash: o })
  );
}
function To() {
  return E.useContext(du) != null;
}
function di() {
  return (
    At(
      To(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    E.useContext(du).location
  );
}
var ux =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function cx(e) {
  E.useContext(Er).static || E.useLayoutEffect(e);
}
function pu() {
  let { isDataRoute: e } = E.useContext(Qr);
  return e ? JT() : PT();
}
function PT() {
  At(
    To(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = E.useContext(wo),
    { basename: n, navigator: a } = E.useContext(Er),
    { matches: i } = E.useContext(Qr),
    { pathname: o } = di(),
    u = JSON.stringify(Km(i)),
    f = E.useRef(!1);
  return (
    cx(() => {
      f.current = !0;
    }),
    E.useCallback(
      (m, h = {}) => {
        if ((Sr(f.current, ux), !f.current)) return;
        if (typeof m == "number") {
          a.go(m);
          return;
        }
        let g = Xm(m, JSON.parse(u), o, h.relative === "path");
        e == null &&
          n !== "/" &&
          (g.pathname = g.pathname === "/" ? n : Sa([n, g.pathname])),
          (h.replace ? a.replace : a.push)(g, h.state, h);
      },
      [n, a, u, o, e]
    )
  );
}
E.createContext(null);
function hu(e, { relative: n } = {}) {
  let { matches: a } = E.useContext(Qr),
    { pathname: i } = di(),
    o = JSON.stringify(Km(a));
  return E.useMemo(() => Xm(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function FT(e, n) {
  return fx(e, n);
}
function fx(e, n, a, i) {
  var _;
  At(
    To(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: o, static: u } = E.useContext(Er),
    { matches: f } = E.useContext(Qr),
    d = f[f.length - 1],
    m = d ? d.params : {},
    h = d ? d.pathname : "/",
    g = d ? d.pathnameBase : "/",
    y = d && d.route;
  {
    let T = (y && y.path) || "";
    dx(
      h,
      !y || T.endsWith("*") || T.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${T}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${T}"> to <Route path="${
        T === "/" ? "*" : `${T}/*`
      }">.`
    );
  }
  let x = di(),
    C;
  if (n) {
    let T = typeof n == "string" ? Co(n) : n;
    At(
      g === "/" || ((_ = T.pathname) == null ? void 0 : _.startsWith(g)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${T.pathname}" was given in the \`location\` prop.`
    ),
      (C = T);
  } else C = x;
  let b = C.pathname || "/",
    S = b;
  if (g !== "/") {
    let T = g.replace(/^\//, "").split("/");
    S = "/" + b.replace(/^\//, "").split("/").slice(T.length).join("/");
  }
  let w =
    !u && a && a.matches && a.matches.length > 0
      ? a.matches
      : ax(e, { pathname: S });
  Sr(
    y || w != null,
    `No routes matched location "${C.pathname}${C.search}${C.hash}" `
  ),
    Sr(
      w == null ||
        w[w.length - 1].route.element !== void 0 ||
        w[w.length - 1].route.Component !== void 0 ||
        w[w.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let O = YT(
    w &&
      w.map((T) =>
        Object.assign({}, T, {
          params: Object.assign({}, m, T.params),
          pathname: Sa([
            g,
            o.encodeLocation
              ? o.encodeLocation(T.pathname).pathname
              : T.pathname,
          ]),
          pathnameBase:
            T.pathnameBase === "/"
              ? g
              : Sa([
                  g,
                  o.encodeLocation
                    ? o.encodeLocation(T.pathnameBase).pathname
                    : T.pathnameBase,
                ]),
        })
      ),
    f,
    a,
    i
  );
  return n && O
    ? E.createElement(
        du.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...C,
            },
            navigationType: "POP",
          },
        },
        O
      )
    : O;
}
function qT() {
  let e = ZT(),
    n = UT(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    a = e instanceof Error ? e.stack : null,
    i = "rgba(200,200,200, 0.5)",
    o = { padding: "0.5rem", backgroundColor: i },
    u = { padding: "2px 4px", backgroundColor: i },
    f = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", e),
    (f = E.createElement(
      E.Fragment,
      null,
      E.createElement("p", null, "💿 Hey developer 👋"),
      E.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        E.createElement("code", { style: u }, "ErrorBoundary"),
        " or",
        " ",
        E.createElement("code", { style: u }, "errorElement"),
        " prop on your route."
      )
    )),
    E.createElement(
      E.Fragment,
      null,
      E.createElement("h2", null, "Unexpected Application Error!"),
      E.createElement("h3", { style: { fontStyle: "italic" } }, n),
      a ? E.createElement("pre", { style: o }, a) : null,
      f
    )
  );
}
var VT = E.createElement(qT, null),
  GT = class extends E.Component {
    constructor(e) {
      super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, n) {
      return n.location !== e.location ||
        (n.revalidation !== "idle" && e.revalidation === "idle")
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : n.error,
            location: n.location,
            revalidation: e.revalidation || n.revalidation,
          };
    }
    componentDidCatch(e, n) {
      console.error(
        "React Router caught the following error during render",
        e,
        n
      );
    }
    render() {
      return this.state.error !== void 0
        ? E.createElement(
            Qr.Provider,
            { value: this.props.routeContext },
            E.createElement(Wm.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function IT({ routeContext: e, match: n, children: a }) {
  let i = E.useContext(wo);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    E.createElement(Qr.Provider, { value: e }, a)
  );
}
function YT(e, n = [], a = null, i = null) {
  if (e == null) {
    if (!a) return null;
    if (a.errors) e = a.matches;
    else if (n.length === 0 && !a.initialized && a.matches.length > 0)
      e = a.matches;
    else return null;
  }
  let o = e,
    u = a == null ? void 0 : a.errors;
  if (u != null) {
    let m = o.findIndex(
      (h) => h.route.id && (u == null ? void 0 : u[h.route.id]) !== void 0
    );
    At(
      m >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        u
      ).join(",")}`
    ),
      (o = o.slice(0, Math.min(o.length, m + 1)));
  }
  let f = !1,
    d = -1;
  if (a)
    for (let m = 0; m < o.length; m++) {
      let h = o[m];
      if (
        ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (d = m),
        h.route.id)
      ) {
        let { loaderData: g, errors: y } = a,
          x =
            h.route.loader &&
            !g.hasOwnProperty(h.route.id) &&
            (!y || y[h.route.id] === void 0);
        if (h.route.lazy || x) {
          (f = !0), d >= 0 ? (o = o.slice(0, d + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((m, h, g) => {
    let y,
      x = !1,
      C = null,
      b = null;
    a &&
      ((y = u && h.route.id ? u[h.route.id] : void 0),
      (C = h.route.errorElement || VT),
      f &&
        (d < 0 && g === 0
          ? (dx(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (x = !0),
            (b = null))
          : d === g &&
            ((x = !0), (b = h.route.hydrateFallbackElement || null))));
    let S = n.concat(o.slice(0, g + 1)),
      w = () => {
        let O;
        return (
          y
            ? (O = C)
            : x
            ? (O = b)
            : h.route.Component
            ? (O = E.createElement(h.route.Component, null))
            : h.route.element
            ? (O = h.route.element)
            : (O = m),
          E.createElement(IT, {
            match: h,
            routeContext: { outlet: m, matches: S, isDataRoute: a != null },
            children: O,
          })
        );
      };
    return a && (h.route.ErrorBoundary || h.route.errorElement || g === 0)
      ? E.createElement(GT, {
          location: a.location,
          revalidation: a.revalidation,
          component: C,
          error: y,
          children: w(),
          routeContext: { outlet: null, matches: S, isDataRoute: !0 },
        })
      : w();
  }, null);
}
function Zm(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function QT(e) {
  let n = E.useContext(wo);
  return At(n, Zm(e)), n;
}
function KT(e) {
  let n = E.useContext(Lf);
  return At(n, Zm(e)), n;
}
function XT(e) {
  let n = E.useContext(Qr);
  return At(n, Zm(e)), n;
}
function Jm(e) {
  let n = XT(e),
    a = n.matches[n.matches.length - 1];
  return (
    At(
      a.route.id,
      `${e} can only be used on routes that contain a unique "id"`
    ),
    a.route.id
  );
}
function WT() {
  return Jm("useRouteId");
}
function ZT() {
  var i;
  let e = E.useContext(Wm),
    n = KT("useRouteError"),
    a = Jm("useRouteError");
  return e !== void 0 ? e : (i = n.errors) == null ? void 0 : i[a];
}
function JT() {
  let { router: e } = QT("useNavigate"),
    n = Jm("useNavigate"),
    a = E.useRef(!1);
  return (
    cx(() => {
      a.current = !0;
    }),
    E.useCallback(
      async (o, u = {}) => {
        Sr(a.current, ux),
          a.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : await e.navigate(o, { fromRouteId: n, ...u }));
      },
      [e, n]
    )
  );
}
var Qb = {};
function dx(e, n, a) {
  !n && !Qb[e] && ((Qb[e] = !0), Sr(!1, a));
}
E.memo(eA);
function eA({ routes: e, future: n, state: a }) {
  return fx(e, void 0, a, n);
}
function px({ to: e, replace: n, state: a, relative: i }) {
  At(
    To(),
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: o } = E.useContext(Er);
  Sr(
    !o,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: u } = E.useContext(Qr),
    { pathname: f } = di(),
    d = pu(),
    m = Xm(e, Km(u), f, i === "path"),
    h = JSON.stringify(m);
  return (
    E.useEffect(() => {
      d(JSON.parse(h), { replace: n, state: a, relative: i });
    }, [d, h, i, n, a]),
    null
  );
}
function Ks(e) {
  At(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function tA({
  basename: e = "/",
  children: n = null,
  location: a,
  navigationType: i = "POP",
  navigator: o,
  static: u = !1,
}) {
  At(
    !To(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let f = e.replace(/^\/*/, "/"),
    d = E.useMemo(
      () => ({ basename: f, navigator: o, static: u, future: {} }),
      [f, o, u]
    );
  typeof a == "string" && (a = Co(a));
  let {
      pathname: m = "/",
      search: h = "",
      hash: g = "",
      state: y = null,
      key: x = "default",
    } = a,
    C = E.useMemo(() => {
      let b = ci(m, f);
      return b == null
        ? null
        : {
            location: { pathname: b, search: h, hash: g, state: y, key: x },
            navigationType: i,
          };
    }, [f, m, h, g, y, x, i]);
  return (
    Sr(
      C != null,
      `<Router basename="${f}"> is not able to match the URL "${m}${h}${g}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    C == null
      ? null
      : E.createElement(
          Er.Provider,
          { value: d },
          E.createElement(du.Provider, { children: n, value: C })
        )
  );
}
function hx({ children: e, location: n }) {
  return FT(nm(e), n);
}
function nm(e, n = []) {
  let a = [];
  return (
    E.Children.forEach(e, (i, o) => {
      if (!E.isValidElement(i)) return;
      let u = [...n, o];
      if (i.type === E.Fragment) {
        a.push.apply(a, nm(i.props.children, u));
        return;
      }
      At(
        i.type === Ks,
        `[${
          typeof i.type == "string" ? i.type : i.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        At(
          !i.props.index || !i.props.children,
          "An index route cannot have child routes."
        );
      let f = {
        id: i.props.id || u.join("-"),
        caseSensitive: i.props.caseSensitive,
        element: i.props.element,
        Component: i.props.Component,
        index: i.props.index,
        path: i.props.path,
        loader: i.props.loader,
        action: i.props.action,
        hydrateFallbackElement: i.props.hydrateFallbackElement,
        HydrateFallback: i.props.HydrateFallback,
        errorElement: i.props.errorElement,
        ErrorBoundary: i.props.ErrorBoundary,
        hasErrorBoundary:
          i.props.hasErrorBoundary === !0 ||
          i.props.ErrorBoundary != null ||
          i.props.errorElement != null,
        shouldRevalidate: i.props.shouldRevalidate,
        handle: i.props.handle,
        lazy: i.props.lazy,
      };
      i.props.children && (f.children = nm(i.props.children, u)), a.push(f);
    }),
    a
  );
}
var Wc = "get",
  Zc = "application/x-www-form-urlencoded";
function jf(e) {
  return e != null && typeof e.tagName == "string";
}
function nA(e) {
  return jf(e) && e.tagName.toLowerCase() === "button";
}
function rA(e) {
  return jf(e) && e.tagName.toLowerCase() === "form";
}
function aA(e) {
  return jf(e) && e.tagName.toLowerCase() === "input";
}
function iA(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function sA(e, n) {
  return e.button === 0 && (!n || n === "_self") && !iA(e);
}
var $c = null;
function oA() {
  if ($c === null)
    try {
      new FormData(document.createElement("form"), 0), ($c = !1);
    } catch {
      $c = !0;
    }
  return $c;
}
var lA = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Mh(e) {
  return e != null && !lA.has(e)
    ? (Sr(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zc}"`
      ),
      null)
    : e;
}
function uA(e, n) {
  let a, i, o, u, f;
  if (rA(e)) {
    let d = e.getAttribute("action");
    (i = d ? ci(d, n) : null),
      (a = e.getAttribute("method") || Wc),
      (o = Mh(e.getAttribute("enctype")) || Zc),
      (u = new FormData(e));
  } else if (nA(e) || (aA(e) && (e.type === "submit" || e.type === "image"))) {
    let d = e.form;
    if (d == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let m = e.getAttribute("formaction") || d.getAttribute("action");
    if (
      ((i = m ? ci(m, n) : null),
      (a = e.getAttribute("formmethod") || d.getAttribute("method") || Wc),
      (o =
        Mh(e.getAttribute("formenctype")) ||
        Mh(d.getAttribute("enctype")) ||
        Zc),
      (u = new FormData(d, e)),
      !oA())
    ) {
      let { name: h, type: g, value: y } = e;
      if (g === "image") {
        let x = h ? `${h}.` : "";
        u.append(`${x}x`, "0"), u.append(`${x}y`, "0");
      } else h && u.append(h, y);
    }
  } else {
    if (jf(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (a = Wc), (i = null), (o = Zc), (f = e);
  }
  return (
    u && o === "text/plain" && ((f = u), (u = void 0)),
    { action: i, method: a.toLowerCase(), encType: o, formData: u, body: f }
  );
}
function eg(e, n) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(n);
}
async function cA(e, n) {
  if (e.id in n) return n[e.id];
  try {
    let a = await import(e.module);
    return (n[e.id] = a), a;
  } catch (a) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`
      ),
      console.error(a),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function fA(e) {
  return e == null
    ? !1
    : e.href == null
    ? e.rel === "preload" &&
      typeof e.imageSrcSet == "string" &&
      typeof e.imageSizes == "string"
    : typeof e.rel == "string" && typeof e.href == "string";
}
async function dA(e, n, a) {
  let i = await Promise.all(
    e.map(async (o) => {
      let u = n.routes[o.route.id];
      if (u) {
        let f = await cA(u, a);
        return f.links ? f.links() : [];
      }
      return [];
    })
  );
  return gA(
    i
      .flat(1)
      .filter(fA)
      .filter((o) => o.rel === "stylesheet" || o.rel === "preload")
      .map((o) =>
        o.rel === "stylesheet"
          ? { ...o, rel: "prefetch", as: "style" }
          : { ...o, rel: "prefetch" }
      )
  );
}
function Kb(e, n, a, i, o, u) {
  let f = (m, h) => (a[h] ? m.route.id !== a[h].route.id : !0),
    d = (m, h) => {
      var g;
      return (
        a[h].pathname !== m.pathname ||
        (((g = a[h].route.path) == null ? void 0 : g.endsWith("*")) &&
          a[h].params["*"] !== m.params["*"])
      );
    };
  return u === "assets"
    ? n.filter((m, h) => f(m, h) || d(m, h))
    : u === "data"
    ? n.filter((m, h) => {
        var y;
        let g = i.routes[m.route.id];
        if (!g || !g.hasLoader) return !1;
        if (f(m, h) || d(m, h)) return !0;
        if (m.route.shouldRevalidate) {
          let x = m.route.shouldRevalidate({
            currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
            currentParams: ((y = a[0]) == null ? void 0 : y.params) || {},
            nextUrl: new URL(e, window.origin),
            nextParams: m.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof x == "boolean") return x;
        }
        return !0;
      })
    : [];
}
function pA(e, n) {
  return hA(
    e
      .map((a) => {
        let i = n.routes[a.route.id];
        if (!i) return [];
        let o = [i.module];
        return i.imports && (o = o.concat(i.imports)), o;
      })
      .flat(1)
  );
}
function hA(e) {
  return [...new Set(e)];
}
function mA(e) {
  let n = {},
    a = Object.keys(e).sort();
  for (let i of a) n[i] = e[i];
  return n;
}
function gA(e, n) {
  let a = new Set();
  return (
    new Set(n),
    e.reduce((i, o) => {
      let u = JSON.stringify(mA(o));
      return a.has(u) || (a.add(u), i.push({ key: u, link: o })), i;
    }, [])
  );
}
function yA(e) {
  let n =
    typeof e == "string"
      ? new URL(
          e,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : e;
  return (
    n.pathname === "/"
      ? (n.pathname = "_root.data")
      : (n.pathname = `${n.pathname.replace(/\/$/, "")}.data`),
    n
  );
}
function vA() {
  let e = E.useContext(wo);
  return (
    eg(
      e,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    e
  );
}
function bA() {
  let e = E.useContext(Lf);
  return (
    eg(
      e,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    e
  );
}
var tg = E.createContext(void 0);
tg.displayName = "FrameworkContext";
function mx() {
  let e = E.useContext(tg);
  return (
    eg(e, "You must render this element inside a <HydratedRouter> element"), e
  );
}
function SA(e, n) {
  let a = E.useContext(tg),
    [i, o] = E.useState(!1),
    [u, f] = E.useState(!1),
    {
      onFocus: d,
      onBlur: m,
      onMouseEnter: h,
      onMouseLeave: g,
      onTouchStart: y,
    } = n,
    x = E.useRef(null);
  E.useEffect(() => {
    if ((e === "render" && f(!0), e === "viewport")) {
      let S = (O) => {
          O.forEach((_) => {
            f(_.isIntersecting);
          });
        },
        w = new IntersectionObserver(S, { threshold: 0.5 });
      return (
        x.current && w.observe(x.current),
        () => {
          w.disconnect();
        }
      );
    }
  }, [e]),
    E.useEffect(() => {
      if (i) {
        let S = setTimeout(() => {
          f(!0);
        }, 100);
        return () => {
          clearTimeout(S);
        };
      }
    }, [i]);
  let C = () => {
      o(!0);
    },
    b = () => {
      o(!1), f(!1);
    };
  return a
    ? e !== "intent"
      ? [u, x, {}]
      : [
          u,
          x,
          {
            onFocus: zl(d, C),
            onBlur: zl(m, b),
            onMouseEnter: zl(h, C),
            onMouseLeave: zl(g, b),
            onTouchStart: zl(y, C),
          },
        ]
    : [!1, x, {}];
}
function zl(e, n) {
  return (a) => {
    e && e(a), a.defaultPrevented || n(a);
  };
}
function xA({ page: e, ...n }) {
  let { router: a } = vA(),
    i = E.useMemo(() => ax(a.routes, e, a.basename), [a.routes, e, a.basename]);
  return i ? E.createElement(RA, { page: e, matches: i, ...n }) : null;
}
function EA(e) {
  let { manifest: n, routeModules: a } = mx(),
    [i, o] = E.useState([]);
  return (
    E.useEffect(() => {
      let u = !1;
      return (
        dA(e, n, a).then((f) => {
          u || o(f);
        }),
        () => {
          u = !0;
        }
      );
    }, [e, n, a]),
    i
  );
}
function RA({ page: e, matches: n, ...a }) {
  let i = di(),
    { manifest: o, routeModules: u } = mx(),
    { loaderData: f, matches: d } = bA(),
    m = E.useMemo(() => Kb(e, n, d, o, i, "data"), [e, n, d, o, i]),
    h = E.useMemo(() => Kb(e, n, d, o, i, "assets"), [e, n, d, o, i]),
    g = E.useMemo(() => {
      if (e === i.pathname + i.search + i.hash) return [];
      let C = new Set(),
        b = !1;
      if (
        (n.forEach((w) => {
          var _;
          let O = o.routes[w.route.id];
          !O ||
            !O.hasLoader ||
            ((!m.some((T) => T.route.id === w.route.id) &&
              w.route.id in f &&
              (_ = u[w.route.id]) != null &&
              _.shouldRevalidate) ||
            O.hasClientLoader
              ? (b = !0)
              : C.add(w.route.id));
        }),
        C.size === 0)
      )
        return [];
      let S = yA(e);
      return (
        b &&
          C.size > 0 &&
          S.searchParams.set(
            "_routes",
            n
              .filter((w) => C.has(w.route.id))
              .map((w) => w.route.id)
              .join(",")
          ),
        [S.pathname + S.search]
      );
    }, [f, i, o, m, n, e, u]),
    y = E.useMemo(() => pA(h, o), [h, o]),
    x = EA(h);
  return E.createElement(
    E.Fragment,
    null,
    g.map((C) =>
      E.createElement("link", {
        key: C,
        rel: "prefetch",
        as: "fetch",
        href: C,
        ...a,
      })
    ),
    y.map((C) =>
      E.createElement("link", { key: C, rel: "modulepreload", href: C, ...a })
    ),
    x.map(({ key: C, link: b }) => E.createElement("link", { key: C, ...b }))
  );
}
function CA(...e) {
  return (n) => {
    e.forEach((a) => {
      typeof a == "function" ? a(n) : a != null && (a.current = n);
    });
  };
}
var gx =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  gx && (window.__reactRouterVersion = "7.1.5");
} catch {}
function wA({ basename: e, children: n, window: a }) {
  let i = E.useRef();
  i.current == null && (i.current = hT({ window: a, v5Compat: !0 }));
  let o = i.current,
    [u, f] = E.useState({ action: o.action, location: o.location }),
    d = E.useCallback(
      (m) => {
        E.startTransition(() => f(m));
      },
      [f]
    );
  return (
    E.useLayoutEffect(() => o.listen(d), [o, d]),
    E.createElement(tA, {
      basename: e,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: o,
    })
  );
}
var yx = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ng = E.forwardRef(function (
    {
      onClick: n,
      discover: a = "render",
      prefetch: i = "none",
      relative: o,
      reloadDocument: u,
      replace: f,
      state: d,
      target: m,
      to: h,
      preventScrollReset: g,
      viewTransition: y,
      ...x
    },
    C
  ) {
    let { basename: b } = E.useContext(Er),
      S = typeof h == "string" && yx.test(h),
      w,
      O = !1;
    if (typeof h == "string" && S && ((w = h), gx))
      try {
        let P = new URL(window.location.href),
          R = h.startsWith("//") ? new URL(P.protocol + h) : new URL(h),
          V = ci(R.pathname, b);
        R.origin === P.origin && V != null
          ? (h = V + R.search + R.hash)
          : (O = !0);
      } catch {
        Sr(
          !1,
          `<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let _ = HT(h, { relative: o }),
      [T, D, M] = SA(i, x),
      $ = MA(h, {
        replace: f,
        state: d,
        target: m,
        preventScrollReset: g,
        relative: o,
        viewTransition: y,
      });
    function L(P) {
      n && n(P), P.defaultPrevented || $(P);
    }
    let K = E.createElement("a", {
      ...x,
      ...M,
      href: w || _,
      onClick: O || u ? n : L,
      ref: CA(C, D),
      target: m,
      "data-discover": !S && a === "render" ? "true" : void 0,
    });
    return T && !S
      ? E.createElement(E.Fragment, null, K, E.createElement(xA, { page: _ }))
      : K;
  });
ng.displayName = "Link";
var TA = E.forwardRef(function (
  {
    "aria-current": n = "page",
    caseSensitive: a = !1,
    className: i = "",
    end: o = !1,
    style: u,
    to: f,
    viewTransition: d,
    children: m,
    ...h
  },
  g
) {
  let y = hu(f, { relative: h.relative }),
    x = di(),
    C = E.useContext(Lf),
    { navigator: b, basename: S } = E.useContext(Er),
    w = C != null && kA(y) && d === !0,
    O = b.encodeLocation ? b.encodeLocation(y).pathname : y.pathname,
    _ = x.pathname,
    T =
      C && C.navigation && C.navigation.location
        ? C.navigation.location.pathname
        : null;
  a ||
    ((_ = _.toLowerCase()),
    (T = T ? T.toLowerCase() : null),
    (O = O.toLowerCase())),
    T && S && (T = ci(T, S) || T);
  const D = O !== "/" && O.endsWith("/") ? O.length - 1 : O.length;
  let M = _ === O || (!o && _.startsWith(O) && _.charAt(D) === "/"),
    $ =
      T != null &&
      (T === O || (!o && T.startsWith(O) && T.charAt(O.length) === "/")),
    L = { isActive: M, isPending: $, isTransitioning: w },
    K = M ? n : void 0,
    P;
  typeof i == "function"
    ? (P = i(L))
    : (P = [
        i,
        M ? "active" : null,
        $ ? "pending" : null,
        w ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let R = typeof u == "function" ? u(L) : u;
  return E.createElement(
    ng,
    {
      ...h,
      "aria-current": K,
      className: P,
      ref: g,
      style: R,
      to: f,
      viewTransition: d,
    },
    typeof m == "function" ? m(L) : m
  );
});
TA.displayName = "NavLink";
var AA = E.forwardRef(
  (
    {
      discover: e = "render",
      fetcherKey: n,
      navigate: a,
      reloadDocument: i,
      replace: o,
      state: u,
      method: f = Wc,
      action: d,
      onSubmit: m,
      relative: h,
      preventScrollReset: g,
      viewTransition: y,
      ...x
    },
    C
  ) => {
    let b = NA(),
      S = zA(d, { relative: h }),
      w = f.toLowerCase() === "get" ? "get" : "post",
      O = typeof d == "string" && yx.test(d),
      _ = (T) => {
        if ((m && m(T), T.defaultPrevented)) return;
        T.preventDefault();
        let D = T.nativeEvent.submitter,
          M = (D == null ? void 0 : D.getAttribute("formmethod")) || f;
        b(D || T.currentTarget, {
          fetcherKey: n,
          method: M,
          navigate: a,
          replace: o,
          state: u,
          relative: h,
          preventScrollReset: g,
          viewTransition: y,
        });
      };
    return E.createElement("form", {
      ref: C,
      method: w,
      action: S,
      onSubmit: i ? m : _,
      ...x,
      "data-discover": !O && e === "render" ? "true" : void 0,
    });
  }
);
AA.displayName = "Form";
function OA(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function vx(e) {
  let n = E.useContext(wo);
  return At(n, OA(e)), n;
}
function MA(
  e,
  {
    target: n,
    replace: a,
    state: i,
    preventScrollReset: o,
    relative: u,
    viewTransition: f,
  } = {}
) {
  let d = pu(),
    m = di(),
    h = hu(e, { relative: u });
  return E.useCallback(
    (g) => {
      if (sA(g, n)) {
        g.preventDefault();
        let y = a !== void 0 ? a : Jl(m) === Jl(h);
        d(e, {
          replace: y,
          state: i,
          preventScrollReset: o,
          relative: u,
          viewTransition: f,
        });
      }
    },
    [m, d, h, a, i, n, e, o, u, f]
  );
}
var _A = 0,
  DA = () => `__${String(++_A)}__`;
function NA() {
  let { router: e } = vx("useSubmit"),
    { basename: n } = E.useContext(Er),
    a = WT();
  return E.useCallback(
    async (i, o = {}) => {
      let { action: u, method: f, encType: d, formData: m, body: h } = uA(i, n);
      if (o.navigate === !1) {
        let g = o.fetcherKey || DA();
        await e.fetch(g, a, o.action || u, {
          preventScrollReset: o.preventScrollReset,
          formData: m,
          body: h,
          formMethod: o.method || f,
          formEncType: o.encType || d,
          flushSync: o.flushSync,
        });
      } else
        await e.navigate(o.action || u, {
          preventScrollReset: o.preventScrollReset,
          formData: m,
          body: h,
          formMethod: o.method || f,
          formEncType: o.encType || d,
          replace: o.replace,
          state: o.state,
          fromRouteId: a,
          flushSync: o.flushSync,
          viewTransition: o.viewTransition,
        });
    },
    [e, n, a]
  );
}
function zA(e, { relative: n } = {}) {
  let { basename: a } = E.useContext(Er),
    i = E.useContext(Qr);
  At(i, "useFormAction must be used inside a RouteContext");
  let [o] = i.matches.slice(-1),
    u = { ...hu(e || ".", { relative: n }) },
    f = di();
  if (e == null) {
    u.search = f.search;
    let d = new URLSearchParams(u.search),
      m = d.getAll("index");
    if (m.some((g) => g === "")) {
      d.delete("index"),
        m.filter((y) => y).forEach((y) => d.append("index", y));
      let g = d.toString();
      u.search = g ? `?${g}` : "";
    }
  }
  return (
    (!e || e === ".") &&
      o.route.index &&
      (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
    a !== "/" && (u.pathname = u.pathname === "/" ? a : Sa([a, u.pathname])),
    Jl(u)
  );
}
function kA(e, n = {}) {
  let a = E.useContext(lx);
  At(
    a != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: i } = vx("useViewTransitionState"),
    o = hu(e, { relative: n.relative });
  if (!a.isTransitioning) return !1;
  let u = ci(a.currentLocation.pathname, i) || a.currentLocation.pathname,
    f = ci(a.nextLocation.pathname, i) || a.nextLocation.pathname;
  return hf(o.pathname, f) != null || hf(o.pathname, u) != null;
}
new TextEncoder();
var Ao = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  es = typeof window > "u" || "Deno" in globalThis;
function ar() {}
function BA(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function rm(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function bx(e, n) {
  return Math.max(e + (n || 0) - Date.now(), 0);
}
function Zs(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function yr(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function Xb(e, n) {
  const {
    type: a = "all",
    exact: i,
    fetchStatus: o,
    predicate: u,
    queryKey: f,
    stale: d,
  } = e;
  if (f) {
    if (i) {
      if (n.queryHash !== rg(f, n.options)) return !1;
    } else if (!eu(n.queryKey, f)) return !1;
  }
  if (a !== "all") {
    const m = n.isActive();
    if ((a === "active" && !m) || (a === "inactive" && m)) return !1;
  }
  return !(
    (typeof d == "boolean" && n.isStale() !== d) ||
    (o && o !== n.state.fetchStatus) ||
    (u && !u(n))
  );
}
function Wb(e, n) {
  const { exact: a, status: i, predicate: o, mutationKey: u } = e;
  if (u) {
    if (!n.options.mutationKey) return !1;
    if (a) {
      if (ts(n.options.mutationKey) !== ts(u)) return !1;
    } else if (!eu(n.options.mutationKey, u)) return !1;
  }
  return !((i && n.state.status !== i) || (o && !o(n)));
}
function rg(e, n) {
  return ((n == null ? void 0 : n.queryKeyHashFn) || ts)(e);
}
function ts(e) {
  return JSON.stringify(e, (n, a) =>
    am(a)
      ? Object.keys(a)
          .sort()
          .reduce((i, o) => ((i[o] = a[o]), i), {})
      : a
  );
}
function eu(e, n) {
  return e === n
    ? !0
    : typeof e != typeof n
    ? !1
    : e && n && typeof e == "object" && typeof n == "object"
    ? !Object.keys(n).some((a) => !eu(e[a], n[a]))
    : !1;
}
function Sx(e, n) {
  if (e === n) return e;
  const a = Zb(e) && Zb(n);
  if (a || (am(e) && am(n))) {
    const i = a ? e : Object.keys(e),
      o = i.length,
      u = a ? n : Object.keys(n),
      f = u.length,
      d = a ? [] : {};
    let m = 0;
    for (let h = 0; h < f; h++) {
      const g = a ? h : u[h];
      ((!a && i.includes(g)) || a) && e[g] === void 0 && n[g] === void 0
        ? ((d[g] = void 0), m++)
        : ((d[g] = Sx(e[g], n[g])), d[g] === e[g] && e[g] !== void 0 && m++);
    }
    return o === f && m === o ? e : d;
  }
  return n;
}
function mf(e, n) {
  if (!n || Object.keys(e).length !== Object.keys(n).length) return !1;
  for (const a in e) if (e[a] !== n[a]) return !1;
  return !0;
}
function Zb(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function am(e) {
  if (!Jb(e)) return !1;
  const n = e.constructor;
  if (n === void 0) return !0;
  const a = n.prototype;
  return !(
    !Jb(a) ||
    !a.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Jb(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function UA(e) {
  return new Promise((n) => {
    setTimeout(n, e);
  });
}
function im(e, n, a) {
  return typeof a.structuralSharing == "function"
    ? a.structuralSharing(e, n)
    : a.structuralSharing !== !1
    ? Sx(e, n)
    : n;
}
function LA(e, n, a = 0) {
  const i = [...e, n];
  return a && i.length > a ? i.slice(1) : i;
}
function jA(e, n, a = 0) {
  const i = [n, ...e];
  return a && i.length > a ? i.slice(0, -1) : i;
}
var ag = Symbol();
function xx(e, n) {
  return !e.queryFn && n != null && n.initialPromise
    ? () => n.initialPromise
    : !e.queryFn || e.queryFn === ag
    ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
var qi,
  Za,
  no,
  IS,
  $A =
    ((IS = class extends Ao {
      constructor() {
        super();
        Me(this, qi);
        Me(this, Za);
        Me(this, no);
        ve(this, no, (n) => {
          if (!es && window.addEventListener) {
            const a = () => n();
            return (
              window.addEventListener("visibilitychange", a, !1),
              () => {
                window.removeEventListener("visibilitychange", a);
              }
            );
          }
        });
      }
      onSubscribe() {
        B(this, Za) || this.setEventListener(B(this, no));
      }
      onUnsubscribe() {
        var n;
        this.hasListeners() ||
          ((n = B(this, Za)) == null || n.call(this), ve(this, Za, void 0));
      }
      setEventListener(n) {
        var a;
        ve(this, no, n),
          (a = B(this, Za)) == null || a.call(this),
          ve(
            this,
            Za,
            n((i) => {
              typeof i == "boolean" ? this.setFocused(i) : this.onFocus();
            })
          );
      }
      setFocused(n) {
        B(this, qi) !== n && (ve(this, qi, n), this.onFocus());
      }
      onFocus() {
        const n = this.isFocused();
        this.listeners.forEach((a) => {
          a(n);
        });
      }
      isFocused() {
        var n;
        return typeof B(this, qi) == "boolean"
          ? B(this, qi)
          : ((n = globalThis.document) == null ? void 0 : n.visibilityState) !==
              "hidden";
      }
    }),
    (qi = new WeakMap()),
    (Za = new WeakMap()),
    (no = new WeakMap()),
    IS),
  ig = new $A(),
  ro,
  Ja,
  ao,
  YS,
  HA =
    ((YS = class extends Ao {
      constructor() {
        super();
        Me(this, ro, !0);
        Me(this, Ja);
        Me(this, ao);
        ve(this, ao, (n) => {
          if (!es && window.addEventListener) {
            const a = () => n(!0),
              i = () => n(!1);
            return (
              window.addEventListener("online", a, !1),
              window.addEventListener("offline", i, !1),
              () => {
                window.removeEventListener("online", a),
                  window.removeEventListener("offline", i);
              }
            );
          }
        });
      }
      onSubscribe() {
        B(this, Ja) || this.setEventListener(B(this, ao));
      }
      onUnsubscribe() {
        var n;
        this.hasListeners() ||
          ((n = B(this, Ja)) == null || n.call(this), ve(this, Ja, void 0));
      }
      setEventListener(n) {
        var a;
        ve(this, ao, n),
          (a = B(this, Ja)) == null || a.call(this),
          ve(this, Ja, n(this.setOnline.bind(this)));
      }
      setOnline(n) {
        B(this, ro) !== n &&
          (ve(this, ro, n),
          this.listeners.forEach((i) => {
            i(n);
          }));
      }
      isOnline() {
        return B(this, ro);
      }
    }),
    (ro = new WeakMap()),
    (Ja = new WeakMap()),
    (ao = new WeakMap()),
    YS),
  gf = new HA();
function sm() {
  let e, n;
  const a = new Promise((o, u) => {
    (e = o), (n = u);
  });
  (a.status = "pending"), a.catch(() => {});
  function i(o) {
    Object.assign(a, o), delete a.resolve, delete a.reject;
  }
  return (
    (a.resolve = (o) => {
      i({ status: "fulfilled", value: o }), e(o);
    }),
    (a.reject = (o) => {
      i({ status: "rejected", reason: o }), n(o);
    }),
    a
  );
}
function PA(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Ex(e) {
  return (e ?? "online") === "online" ? gf.isOnline() : !0;
}
var Rx = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function _h(e) {
  return e instanceof Rx;
}
function Cx(e) {
  let n = !1,
    a = 0,
    i = !1,
    o;
  const u = sm(),
    f = (S) => {
      var w;
      i || (x(new Rx(S)), (w = e.abort) == null || w.call(e));
    },
    d = () => {
      n = !0;
    },
    m = () => {
      n = !1;
    },
    h = () =>
      ig.isFocused() &&
      (e.networkMode === "always" || gf.isOnline()) &&
      e.canRun(),
    g = () => Ex(e.networkMode) && e.canRun(),
    y = (S) => {
      var w;
      i ||
        ((i = !0),
        (w = e.onSuccess) == null || w.call(e, S),
        o == null || o(),
        u.resolve(S));
    },
    x = (S) => {
      var w;
      i ||
        ((i = !0),
        (w = e.onError) == null || w.call(e, S),
        o == null || o(),
        u.reject(S));
    },
    C = () =>
      new Promise((S) => {
        var w;
        (o = (O) => {
          (i || h()) && S(O);
        }),
          (w = e.onPause) == null || w.call(e);
      }).then(() => {
        var S;
        (o = void 0), i || (S = e.onContinue) == null || S.call(e);
      }),
    b = () => {
      if (i) return;
      let S;
      const w = a === 0 ? e.initialPromise : void 0;
      try {
        S = w ?? e.fn();
      } catch (O) {
        S = Promise.reject(O);
      }
      Promise.resolve(S)
        .then(y)
        .catch((O) => {
          var $;
          if (i) return;
          const _ = e.retry ?? (es ? 0 : 3),
            T = e.retryDelay ?? PA,
            D = typeof T == "function" ? T(a, O) : T,
            M =
              _ === !0 ||
              (typeof _ == "number" && a < _) ||
              (typeof _ == "function" && _(a, O));
          if (n || !M) {
            x(O);
            return;
          }
          a++,
            ($ = e.onFail) == null || $.call(e, a, O),
            UA(D)
              .then(() => (h() ? void 0 : C()))
              .then(() => {
                n ? x(O) : b();
              });
        });
    };
  return {
    promise: u,
    cancel: f,
    continue: () => (o == null || o(), u),
    cancelRetry: d,
    continueRetry: m,
    canStart: g,
    start: () => (g() ? b() : C().then(b), u),
  };
}
function FA() {
  let e = [],
    n = 0,
    a = (d) => {
      d();
    },
    i = (d) => {
      d();
    },
    o = (d) => setTimeout(d, 0);
  const u = (d) => {
      n
        ? e.push(d)
        : o(() => {
            a(d);
          });
    },
    f = () => {
      const d = e;
      (e = []),
        d.length &&
          o(() => {
            i(() => {
              d.forEach((m) => {
                a(m);
              });
            });
          });
    };
  return {
    batch: (d) => {
      let m;
      n++;
      try {
        m = d();
      } finally {
        n--, n || f();
      }
      return m;
    },
    batchCalls:
      (d) =>
      (...m) => {
        u(() => {
          d(...m);
        });
      },
    schedule: u,
    setNotifyFunction: (d) => {
      a = d;
    },
    setBatchNotifyFunction: (d) => {
      i = d;
    },
    setScheduler: (d) => {
      o = d;
    },
  };
}
var Zt = FA(),
  Vi,
  QS,
  wx =
    ((QS = class {
      constructor() {
        Me(this, Vi);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          rm(this.gcTime) &&
            ve(
              this,
              Vi,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (es ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        B(this, Vi) && (clearTimeout(B(this, Vi)), ve(this, Vi, void 0));
      }
    }),
    (Vi = new WeakMap()),
    QS),
  io,
  so,
  rr,
  Gi,
  mn,
  lu,
  Ii,
  mr,
  ga,
  KS,
  qA =
    ((KS = class extends wx {
      constructor(n) {
        super();
        Me(this, mr);
        Me(this, io);
        Me(this, so);
        Me(this, rr);
        Me(this, Gi);
        Me(this, mn);
        Me(this, lu);
        Me(this, Ii);
        ve(this, Ii, !1),
          ve(this, lu, n.defaultOptions),
          this.setOptions(n.options),
          (this.observers = []),
          ve(this, Gi, n.client),
          ve(this, rr, B(this, Gi).getQueryCache()),
          (this.queryKey = n.queryKey),
          (this.queryHash = n.queryHash),
          ve(this, io, VA(this.options)),
          (this.state = n.state ?? B(this, io)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var n;
        return (n = B(this, mn)) == null ? void 0 : n.promise;
      }
      setOptions(n) {
        (this.options = { ...B(this, lu), ...n }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          B(this, rr).remove(this);
      }
      setData(n, a) {
        const i = im(this.state.data, n, this.options);
        return (
          Pe(this, mr, ga).call(this, {
            data: i,
            type: "success",
            dataUpdatedAt: a == null ? void 0 : a.updatedAt,
            manual: a == null ? void 0 : a.manual,
          }),
          i
        );
      }
      setState(n, a) {
        Pe(this, mr, ga).call(this, {
          type: "setState",
          state: n,
          setStateOptions: a,
        });
      }
      cancel(n) {
        var i, o;
        const a = (i = B(this, mn)) == null ? void 0 : i.promise;
        return (
          (o = B(this, mn)) == null || o.cancel(n),
          a ? a.then(ar).catch(ar) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(B(this, io));
      }
      isActive() {
        return this.observers.some((n) => yr(n.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === ag ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
          ? this.observers.some((n) => n.getCurrentResult().isStale)
          : this.state.data === void 0;
      }
      isStaleByTime(n = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !bx(this.state.dataUpdatedAt, n)
        );
      }
      onFocus() {
        var a;
        const n = this.observers.find((i) => i.shouldFetchOnWindowFocus());
        n == null || n.refetch({ cancelRefetch: !1 }),
          (a = B(this, mn)) == null || a.continue();
      }
      onOnline() {
        var a;
        const n = this.observers.find((i) => i.shouldFetchOnReconnect());
        n == null || n.refetch({ cancelRefetch: !1 }),
          (a = B(this, mn)) == null || a.continue();
      }
      addObserver(n) {
        this.observers.includes(n) ||
          (this.observers.push(n),
          this.clearGcTimeout(),
          B(this, rr).notify({
            type: "observerAdded",
            query: this,
            observer: n,
          }));
      }
      removeObserver(n) {
        this.observers.includes(n) &&
          ((this.observers = this.observers.filter((a) => a !== n)),
          this.observers.length ||
            (B(this, mn) &&
              (B(this, Ii)
                ? B(this, mn).cancel({ revert: !0 })
                : B(this, mn).cancelRetry()),
            this.scheduleGc()),
          B(this, rr).notify({
            type: "observerRemoved",
            query: this,
            observer: n,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          Pe(this, mr, ga).call(this, { type: "invalidate" });
      }
      fetch(n, a) {
        var m, h, g;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && a != null && a.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (B(this, mn))
            return B(this, mn).continueRetry(), B(this, mn).promise;
        }
        if ((n && this.setOptions(n), !this.options.queryFn)) {
          const y = this.observers.find((x) => x.options.queryFn);
          y && this.setOptions(y.options);
        }
        const i = new AbortController(),
          o = (y) => {
            Object.defineProperty(y, "signal", {
              enumerable: !0,
              get: () => (ve(this, Ii, !0), i.signal),
            });
          },
          u = () => {
            const y = xx(this.options, a),
              x = {
                client: B(this, Gi),
                queryKey: this.queryKey,
                meta: this.meta,
              };
            return (
              o(x),
              ve(this, Ii, !1),
              this.options.persister ? this.options.persister(y, x, this) : y(x)
            );
          },
          f = {
            fetchOptions: a,
            options: this.options,
            queryKey: this.queryKey,
            client: B(this, Gi),
            state: this.state,
            fetchFn: u,
          };
        o(f),
          (m = this.options.behavior) == null || m.onFetch(f, this),
          ve(this, so, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((h = f.fetchOptions) == null ? void 0 : h.meta)) &&
            Pe(this, mr, ga).call(this, {
              type: "fetch",
              meta: (g = f.fetchOptions) == null ? void 0 : g.meta,
            });
        const d = (y) => {
          var x, C, b, S;
          (_h(y) && y.silent) ||
            Pe(this, mr, ga).call(this, { type: "error", error: y }),
            _h(y) ||
              ((C = (x = B(this, rr).config).onError) == null ||
                C.call(x, y, this),
              (S = (b = B(this, rr).config).onSettled) == null ||
                S.call(b, this.state.data, y, this)),
            this.scheduleGc();
        };
        return (
          ve(
            this,
            mn,
            Cx({
              initialPromise: a == null ? void 0 : a.initialPromise,
              fn: f.fetchFn,
              abort: i.abort.bind(i),
              onSuccess: (y) => {
                var x, C, b, S;
                if (y === void 0) {
                  d(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(y);
                } catch (w) {
                  d(w);
                  return;
                }
                (C = (x = B(this, rr).config).onSuccess) == null ||
                  C.call(x, y, this),
                  (S = (b = B(this, rr).config).onSettled) == null ||
                    S.call(b, y, this.state.error, this),
                  this.scheduleGc();
              },
              onError: d,
              onFail: (y, x) => {
                Pe(this, mr, ga).call(this, {
                  type: "failed",
                  failureCount: y,
                  error: x,
                });
              },
              onPause: () => {
                Pe(this, mr, ga).call(this, { type: "pause" });
              },
              onContinue: () => {
                Pe(this, mr, ga).call(this, { type: "continue" });
              },
              retry: f.options.retry,
              retryDelay: f.options.retryDelay,
              networkMode: f.options.networkMode,
              canRun: () => !0,
            })
          ),
          B(this, mn).start()
        );
      }
    }),
    (io = new WeakMap()),
    (so = new WeakMap()),
    (rr = new WeakMap()),
    (Gi = new WeakMap()),
    (mn = new WeakMap()),
    (lu = new WeakMap()),
    (Ii = new WeakMap()),
    (mr = new WeakSet()),
    (ga = function (n) {
      const a = (i) => {
        switch (n.type) {
          case "failed":
            return {
              ...i,
              fetchFailureCount: n.failureCount,
              fetchFailureReason: n.error,
            };
          case "pause":
            return { ...i, fetchStatus: "paused" };
          case "continue":
            return { ...i, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...i,
              ...Tx(i.data, this.options),
              fetchMeta: n.meta ?? null,
            };
          case "success":
            return {
              ...i,
              data: n.data,
              dataUpdateCount: i.dataUpdateCount + 1,
              dataUpdatedAt: n.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!n.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const o = n.error;
            return _h(o) && o.revert && B(this, so)
              ? { ...B(this, so), fetchStatus: "idle" }
              : {
                  ...i,
                  error: o,
                  errorUpdateCount: i.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: i.fetchFailureCount + 1,
                  fetchFailureReason: o,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...i, isInvalidated: !0 };
          case "setState":
            return { ...i, ...n.state };
        }
      };
      (this.state = a(this.state)),
        Zt.batch(() => {
          this.observers.forEach((i) => {
            i.onQueryUpdate();
          }),
            B(this, rr).notify({ query: this, type: "updated", action: n });
        });
    }),
    KS);
function Tx(e, n) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Ex(n.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function VA(e) {
  const n =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    a = n !== void 0,
    i = a
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: n,
    dataUpdateCount: 0,
    dataUpdatedAt: a ? i ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: a ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Br,
  XS,
  GA =
    ((XS = class extends Ao {
      constructor(n = {}) {
        super();
        Me(this, Br);
        (this.config = n), ve(this, Br, new Map());
      }
      build(n, a, i) {
        const o = a.queryKey,
          u = a.queryHash ?? rg(o, a);
        let f = this.get(u);
        return (
          f ||
            ((f = new qA({
              client: n,
              queryKey: o,
              queryHash: u,
              options: n.defaultQueryOptions(a),
              state: i,
              defaultOptions: n.getQueryDefaults(o),
            })),
            this.add(f)),
          f
        );
      }
      add(n) {
        B(this, Br).has(n.queryHash) ||
          (B(this, Br).set(n.queryHash, n),
          this.notify({ type: "added", query: n }));
      }
      remove(n) {
        const a = B(this, Br).get(n.queryHash);
        a &&
          (n.destroy(),
          a === n && B(this, Br).delete(n.queryHash),
          this.notify({ type: "removed", query: n }));
      }
      clear() {
        Zt.batch(() => {
          this.getAll().forEach((n) => {
            this.remove(n);
          });
        });
      }
      get(n) {
        return B(this, Br).get(n);
      }
      getAll() {
        return [...B(this, Br).values()];
      }
      find(n) {
        const a = { exact: !0, ...n };
        return this.getAll().find((i) => Xb(a, i));
      }
      findAll(n = {}) {
        const a = this.getAll();
        return Object.keys(n).length > 0 ? a.filter((i) => Xb(n, i)) : a;
      }
      notify(n) {
        Zt.batch(() => {
          this.listeners.forEach((a) => {
            a(n);
          });
        });
      }
      onFocus() {
        Zt.batch(() => {
          this.getAll().forEach((n) => {
            n.onFocus();
          });
        });
      }
      onOnline() {
        Zt.batch(() => {
          this.getAll().forEach((n) => {
            n.onOnline();
          });
        });
      }
    }),
    (Br = new WeakMap()),
    XS),
  Ur,
  xn,
  Yi,
  Lr,
  Ka,
  WS,
  IA =
    ((WS = class extends wx {
      constructor(n) {
        super();
        Me(this, Lr);
        Me(this, Ur);
        Me(this, xn);
        Me(this, Yi);
        (this.mutationId = n.mutationId),
          ve(this, xn, n.mutationCache),
          ve(this, Ur, []),
          (this.state = n.state || Ax()),
          this.setOptions(n.options),
          this.scheduleGc();
      }
      setOptions(n) {
        (this.options = n), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(n) {
        B(this, Ur).includes(n) ||
          (B(this, Ur).push(n),
          this.clearGcTimeout(),
          B(this, xn).notify({
            type: "observerAdded",
            mutation: this,
            observer: n,
          }));
      }
      removeObserver(n) {
        ve(
          this,
          Ur,
          B(this, Ur).filter((a) => a !== n)
        ),
          this.scheduleGc(),
          B(this, xn).notify({
            type: "observerRemoved",
            mutation: this,
            observer: n,
          });
      }
      optionalRemove() {
        B(this, Ur).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : B(this, xn).remove(this));
      }
      continue() {
        var n;
        return (
          ((n = B(this, Yi)) == null ? void 0 : n.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(n) {
        var o, u, f, d, m, h, g, y, x, C, b, S, w, O, _, T, D, M, $, L;
        ve(
          this,
          Yi,
          Cx({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(n)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (K, P) => {
              Pe(this, Lr, Ka).call(this, {
                type: "failed",
                failureCount: K,
                error: P,
              });
            },
            onPause: () => {
              Pe(this, Lr, Ka).call(this, { type: "pause" });
            },
            onContinue: () => {
              Pe(this, Lr, Ka).call(this, { type: "continue" });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => B(this, xn).canRun(this),
          })
        );
        const a = this.state.status === "pending",
          i = !B(this, Yi).canStart();
        try {
          if (!a) {
            Pe(this, Lr, Ka).call(this, {
              type: "pending",
              variables: n,
              isPaused: i,
            }),
              await ((u = (o = B(this, xn).config).onMutate) == null
                ? void 0
                : u.call(o, n, this));
            const P = await ((d = (f = this.options).onMutate) == null
              ? void 0
              : d.call(f, n));
            P !== this.state.context &&
              Pe(this, Lr, Ka).call(this, {
                type: "pending",
                context: P,
                variables: n,
                isPaused: i,
              });
          }
          const K = await B(this, Yi).start();
          return (
            await ((h = (m = B(this, xn).config).onSuccess) == null
              ? void 0
              : h.call(m, K, n, this.state.context, this)),
            await ((y = (g = this.options).onSuccess) == null
              ? void 0
              : y.call(g, K, n, this.state.context)),
            await ((C = (x = B(this, xn).config).onSettled) == null
              ? void 0
              : C.call(
                  x,
                  K,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((S = (b = this.options).onSettled) == null
              ? void 0
              : S.call(b, K, null, n, this.state.context)),
            Pe(this, Lr, Ka).call(this, { type: "success", data: K }),
            K
          );
        } catch (K) {
          try {
            throw (
              (await ((O = (w = B(this, xn).config).onError) == null
                ? void 0
                : O.call(w, K, n, this.state.context, this)),
              await ((T = (_ = this.options).onError) == null
                ? void 0
                : T.call(_, K, n, this.state.context)),
              await ((M = (D = B(this, xn).config).onSettled) == null
                ? void 0
                : M.call(
                    D,
                    void 0,
                    K,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((L = ($ = this.options).onSettled) == null
                ? void 0
                : L.call($, void 0, K, n, this.state.context)),
              K)
            );
          } finally {
            Pe(this, Lr, Ka).call(this, { type: "error", error: K });
          }
        } finally {
          B(this, xn).runNext(this);
        }
      }
    }),
    (Ur = new WeakMap()),
    (xn = new WeakMap()),
    (Yi = new WeakMap()),
    (Lr = new WeakSet()),
    (Ka = function (n) {
      const a = (i) => {
        switch (n.type) {
          case "failed":
            return {
              ...i,
              failureCount: n.failureCount,
              failureReason: n.error,
            };
          case "pause":
            return { ...i, isPaused: !0 };
          case "continue":
            return { ...i, isPaused: !1 };
          case "pending":
            return {
              ...i,
              context: n.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: n.isPaused,
              status: "pending",
              variables: n.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...i,
              data: n.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...i,
              data: void 0,
              error: n.error,
              failureCount: i.failureCount + 1,
              failureReason: n.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = a(this.state)),
        Zt.batch(() => {
          B(this, Ur).forEach((i) => {
            i.onMutationUpdate(n);
          }),
            B(this, xn).notify({ mutation: this, type: "updated", action: n });
        });
    }),
    WS);
function Ax() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var va,
  gr,
  uu,
  ZS,
  YA =
    ((ZS = class extends Ao {
      constructor(n = {}) {
        super();
        Me(this, va);
        Me(this, gr);
        Me(this, uu);
        (this.config = n),
          ve(this, va, new Set()),
          ve(this, gr, new Map()),
          ve(this, uu, 0);
      }
      build(n, a, i) {
        const o = new IA({
          mutationCache: this,
          mutationId: ++jc(this, uu)._,
          options: n.defaultMutationOptions(a),
          state: i,
        });
        return this.add(o), o;
      }
      add(n) {
        B(this, va).add(n);
        const a = Hc(n);
        if (typeof a == "string") {
          const i = B(this, gr).get(a);
          i ? i.push(n) : B(this, gr).set(a, [n]);
        }
        this.notify({ type: "added", mutation: n });
      }
      remove(n) {
        if (B(this, va).delete(n)) {
          const a = Hc(n);
          if (typeof a == "string") {
            const i = B(this, gr).get(a);
            if (i)
              if (i.length > 1) {
                const o = i.indexOf(n);
                o !== -1 && i.splice(o, 1);
              } else i[0] === n && B(this, gr).delete(a);
          }
        }
        this.notify({ type: "removed", mutation: n });
      }
      canRun(n) {
        const a = Hc(n);
        if (typeof a == "string") {
          const i = B(this, gr).get(a),
            o =
              i == null ? void 0 : i.find((u) => u.state.status === "pending");
          return !o || o === n;
        } else return !0;
      }
      runNext(n) {
        var i;
        const a = Hc(n);
        if (typeof a == "string") {
          const o =
            (i = B(this, gr).get(a)) == null
              ? void 0
              : i.find((u) => u !== n && u.state.isPaused);
          return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        Zt.batch(() => {
          B(this, va).forEach((n) => {
            this.notify({ type: "removed", mutation: n });
          }),
            B(this, va).clear(),
            B(this, gr).clear();
        });
      }
      getAll() {
        return Array.from(B(this, va));
      }
      find(n) {
        const a = { exact: !0, ...n };
        return this.getAll().find((i) => Wb(a, i));
      }
      findAll(n = {}) {
        return this.getAll().filter((a) => Wb(n, a));
      }
      notify(n) {
        Zt.batch(() => {
          this.listeners.forEach((a) => {
            a(n);
          });
        });
      }
      resumePausedMutations() {
        const n = this.getAll().filter((a) => a.state.isPaused);
        return Zt.batch(() =>
          Promise.all(n.map((a) => a.continue().catch(ar)))
        );
      }
    }),
    (va = new WeakMap()),
    (gr = new WeakMap()),
    (uu = new WeakMap()),
    ZS);
function Hc(e) {
  var n;
  return (n = e.options.scope) == null ? void 0 : n.id;
}
function e1(e) {
  return {
    onFetch: (n, a) => {
      var g, y, x, C, b;
      const i = n.options,
        o =
          (x =
            (y = (g = n.fetchOptions) == null ? void 0 : g.meta) == null
              ? void 0
              : y.fetchMore) == null
            ? void 0
            : x.direction,
        u = ((C = n.state.data) == null ? void 0 : C.pages) || [],
        f = ((b = n.state.data) == null ? void 0 : b.pageParams) || [];
      let d = { pages: [], pageParams: [] },
        m = 0;
      const h = async () => {
        let S = !1;
        const w = (T) => {
            Object.defineProperty(T, "signal", {
              enumerable: !0,
              get: () => (
                n.signal.aborted
                  ? (S = !0)
                  : n.signal.addEventListener("abort", () => {
                      S = !0;
                    }),
                n.signal
              ),
            });
          },
          O = xx(n.options, n.fetchOptions),
          _ = async (T, D, M) => {
            if (S) return Promise.reject();
            if (D == null && T.pages.length) return Promise.resolve(T);
            const $ = {
              client: n.client,
              queryKey: n.queryKey,
              pageParam: D,
              direction: M ? "backward" : "forward",
              meta: n.options.meta,
            };
            w($);
            const L = await O($),
              { maxPages: K } = n.options,
              P = M ? jA : LA;
            return {
              pages: P(T.pages, L, K),
              pageParams: P(T.pageParams, D, K),
            };
          };
        if (o && u.length) {
          const T = o === "backward",
            D = T ? QA : t1,
            M = { pages: u, pageParams: f },
            $ = D(i, M);
          d = await _(M, $, T);
        } else {
          const T = e ?? u.length;
          do {
            const D = m === 0 ? f[0] ?? i.initialPageParam : t1(i, d);
            if (m > 0 && D == null) break;
            (d = await _(d, D)), m++;
          } while (m < T);
        }
        return d;
      };
      n.options.persister
        ? (n.fetchFn = () => {
            var S, w;
            return (w = (S = n.options).persister) == null
              ? void 0
              : w.call(
                  S,
                  h,
                  {
                    client: n.client,
                    queryKey: n.queryKey,
                    meta: n.options.meta,
                    signal: n.signal,
                  },
                  a
                );
          })
        : (n.fetchFn = h);
    },
  };
}
function t1(e, { pages: n, pageParams: a }) {
  const i = n.length - 1;
  return n.length > 0 ? e.getNextPageParam(n[i], n, a[i], a) : void 0;
}
function QA(e, { pages: n, pageParams: a }) {
  var i;
  return n.length > 0
    ? (i = e.getPreviousPageParam) == null
      ? void 0
      : i.call(e, n[0], n, a[0], a)
    : void 0;
}
var Bt,
  ei,
  ti,
  oo,
  lo,
  ni,
  uo,
  co,
  JS,
  KA =
    ((JS = class {
      constructor(e = {}) {
        Me(this, Bt);
        Me(this, ei);
        Me(this, ti);
        Me(this, oo);
        Me(this, lo);
        Me(this, ni);
        Me(this, uo);
        Me(this, co);
        ve(this, Bt, e.queryCache || new GA()),
          ve(this, ei, e.mutationCache || new YA()),
          ve(this, ti, e.defaultOptions || {}),
          ve(this, oo, new Map()),
          ve(this, lo, new Map()),
          ve(this, ni, 0);
      }
      mount() {
        jc(this, ni)._++,
          B(this, ni) === 1 &&
            (ve(
              this,
              uo,
              ig.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), B(this, Bt).onFocus());
              })
            ),
            ve(
              this,
              co,
              gf.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), B(this, Bt).onOnline());
              })
            ));
      }
      unmount() {
        var e, n;
        jc(this, ni)._--,
          B(this, ni) === 0 &&
            ((e = B(this, uo)) == null || e.call(this),
            ve(this, uo, void 0),
            (n = B(this, co)) == null || n.call(this),
            ve(this, co, void 0));
      }
      isFetching(e) {
        return B(this, Bt).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return B(this, ei).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var a;
        const n = this.defaultQueryOptions({ queryKey: e });
        return (a = B(this, Bt).get(n.queryHash)) == null
          ? void 0
          : a.state.data;
      }
      ensureQueryData(e) {
        const n = this.defaultQueryOptions(e),
          a = B(this, Bt).build(this, n),
          i = a.state.data;
        return i === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              a.isStaleByTime(Zs(n.staleTime, a)) &&
              this.prefetchQuery(n),
            Promise.resolve(i));
      }
      getQueriesData(e) {
        return B(this, Bt)
          .findAll(e)
          .map(({ queryKey: n, state: a }) => {
            const i = a.data;
            return [n, i];
          });
      }
      setQueryData(e, n, a) {
        const i = this.defaultQueryOptions({ queryKey: e }),
          o = B(this, Bt).get(i.queryHash),
          u = o == null ? void 0 : o.state.data,
          f = BA(n, u);
        if (f !== void 0)
          return B(this, Bt)
            .build(this, i)
            .setData(f, { ...a, manual: !0 });
      }
      setQueriesData(e, n, a) {
        return Zt.batch(() =>
          B(this, Bt)
            .findAll(e)
            .map(({ queryKey: i }) => [i, this.setQueryData(i, n, a)])
        );
      }
      getQueryState(e) {
        var a;
        const n = this.defaultQueryOptions({ queryKey: e });
        return (a = B(this, Bt).get(n.queryHash)) == null ? void 0 : a.state;
      }
      removeQueries(e) {
        const n = B(this, Bt);
        Zt.batch(() => {
          n.findAll(e).forEach((a) => {
            n.remove(a);
          });
        });
      }
      resetQueries(e, n) {
        const a = B(this, Bt),
          i = { type: "active", ...e };
        return Zt.batch(
          () => (
            a.findAll(e).forEach((o) => {
              o.reset();
            }),
            this.refetchQueries(i, n)
          )
        );
      }
      cancelQueries(e, n = {}) {
        const a = { revert: !0, ...n },
          i = Zt.batch(() =>
            B(this, Bt)
              .findAll(e)
              .map((o) => o.cancel(a))
          );
        return Promise.all(i).then(ar).catch(ar);
      }
      invalidateQueries(e, n = {}) {
        return Zt.batch(() => {
          if (
            (B(this, Bt)
              .findAll(e)
              .forEach((i) => {
                i.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none")
          )
            return Promise.resolve();
          const a = {
            ...e,
            type:
              (e == null ? void 0 : e.refetchType) ??
              (e == null ? void 0 : e.type) ??
              "active",
          };
          return this.refetchQueries(a, n);
        });
      }
      refetchQueries(e, n = {}) {
        const a = { ...n, cancelRefetch: n.cancelRefetch ?? !0 },
          i = Zt.batch(() =>
            B(this, Bt)
              .findAll(e)
              .filter((o) => !o.isDisabled())
              .map((o) => {
                let u = o.fetch(void 0, a);
                return (
                  a.throwOnError || (u = u.catch(ar)),
                  o.state.fetchStatus === "paused" ? Promise.resolve() : u
                );
              })
          );
        return Promise.all(i).then(ar);
      }
      fetchQuery(e) {
        const n = this.defaultQueryOptions(e);
        n.retry === void 0 && (n.retry = !1);
        const a = B(this, Bt).build(this, n);
        return a.isStaleByTime(Zs(n.staleTime, a))
          ? a.fetch(n)
          : Promise.resolve(a.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(ar).catch(ar);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = e1(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(ar).catch(ar);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = e1(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return gf.isOnline()
          ? B(this, ei).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return B(this, Bt);
      }
      getMutationCache() {
        return B(this, ei);
      }
      getDefaultOptions() {
        return B(this, ti);
      }
      setDefaultOptions(e) {
        ve(this, ti, e);
      }
      setQueryDefaults(e, n) {
        B(this, oo).set(ts(e), { queryKey: e, defaultOptions: n });
      }
      getQueryDefaults(e) {
        const n = [...B(this, oo).values()],
          a = {};
        return (
          n.forEach((i) => {
            eu(e, i.queryKey) && Object.assign(a, i.defaultOptions);
          }),
          a
        );
      }
      setMutationDefaults(e, n) {
        B(this, lo).set(ts(e), { mutationKey: e, defaultOptions: n });
      }
      getMutationDefaults(e) {
        const n = [...B(this, lo).values()];
        let a = {};
        return (
          n.forEach((i) => {
            eu(e, i.mutationKey) && (a = { ...a, ...i.defaultOptions });
          }),
          a
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const n = {
          ...B(this, ti).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          n.queryHash || (n.queryHash = rg(n.queryKey, n)),
          n.refetchOnReconnect === void 0 &&
            (n.refetchOnReconnect = n.networkMode !== "always"),
          n.throwOnError === void 0 && (n.throwOnError = !!n.suspense),
          !n.networkMode && n.persister && (n.networkMode = "offlineFirst"),
          n.queryFn === ag && (n.enabled = !1),
          n
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...B(this, ti).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        B(this, Bt).clear(), B(this, ei).clear();
      }
    }),
    (Bt = new WeakMap()),
    (ei = new WeakMap()),
    (ti = new WeakMap()),
    (oo = new WeakMap()),
    (lo = new WeakMap()),
    (ni = new WeakMap()),
    (uo = new WeakMap()),
    (co = new WeakMap()),
    JS),
  _n,
  Qe,
  cu,
  En,
  Qi,
  fo,
  ri,
  jr,
  fu,
  po,
  ho,
  Ki,
  Xi,
  ai,
  mo,
  ot,
  Fl,
  om,
  lm,
  um,
  cm,
  fm,
  dm,
  pm,
  Ox,
  ex,
  XA =
    ((ex = class extends Ao {
      constructor(n, a) {
        super();
        Me(this, ot);
        Me(this, _n);
        Me(this, Qe);
        Me(this, cu);
        Me(this, En);
        Me(this, Qi);
        Me(this, fo);
        Me(this, ri);
        Me(this, jr);
        Me(this, fu);
        Me(this, po);
        Me(this, ho);
        Me(this, Ki);
        Me(this, Xi);
        Me(this, ai);
        Me(this, mo, new Set());
        (this.options = a),
          ve(this, _n, n),
          ve(this, jr, null),
          ve(this, ri, sm()),
          this.options.experimental_prefetchInRender ||
            B(this, ri).reject(
              new Error(
                "experimental_prefetchInRender feature flag is not enabled"
              )
            ),
          this.bindMethods(),
          this.setOptions(a);
      }
      bindMethods() {
        this.refetch = this.refetch.bind(this);
      }
      onSubscribe() {
        this.listeners.size === 1 &&
          (B(this, Qe).addObserver(this),
          n1(B(this, Qe), this.options)
            ? Pe(this, ot, Fl).call(this)
            : this.updateResult(),
          Pe(this, ot, cm).call(this));
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy();
      }
      shouldFetchOnReconnect() {
        return hm(B(this, Qe), this.options, this.options.refetchOnReconnect);
      }
      shouldFetchOnWindowFocus() {
        return hm(B(this, Qe), this.options, this.options.refetchOnWindowFocus);
      }
      destroy() {
        (this.listeners = new Set()),
          Pe(this, ot, fm).call(this),
          Pe(this, ot, dm).call(this),
          B(this, Qe).removeObserver(this);
      }
      setOptions(n, a) {
        const i = this.options,
          o = B(this, Qe);
        if (
          ((this.options = B(this, _n).defaultQueryOptions(n)),
          this.options.enabled !== void 0 &&
            typeof this.options.enabled != "boolean" &&
            typeof this.options.enabled != "function" &&
            typeof yr(this.options.enabled, B(this, Qe)) != "boolean")
        )
          throw new Error(
            "Expected enabled to be a boolean or a callback that returns a boolean"
          );
        Pe(this, ot, pm).call(this),
          B(this, Qe).setOptions(this.options),
          i._defaulted &&
            !mf(this.options, i) &&
            B(this, _n)
              .getQueryCache()
              .notify({
                type: "observerOptionsUpdated",
                query: B(this, Qe),
                observer: this,
              });
        const u = this.hasListeners();
        u && r1(B(this, Qe), o, this.options, i) && Pe(this, ot, Fl).call(this),
          this.updateResult(a),
          u &&
            (B(this, Qe) !== o ||
              yr(this.options.enabled, B(this, Qe)) !==
                yr(i.enabled, B(this, Qe)) ||
              Zs(this.options.staleTime, B(this, Qe)) !==
                Zs(i.staleTime, B(this, Qe))) &&
            Pe(this, ot, om).call(this);
        const f = Pe(this, ot, lm).call(this);
        u &&
          (B(this, Qe) !== o ||
            yr(this.options.enabled, B(this, Qe)) !==
              yr(i.enabled, B(this, Qe)) ||
            f !== B(this, ai)) &&
          Pe(this, ot, um).call(this, f);
      }
      getOptimisticResult(n) {
        const a = B(this, _n).getQueryCache().build(B(this, _n), n),
          i = this.createResult(a, n);
        return (
          ZA(this, i) &&
            (ve(this, En, i),
            ve(this, fo, this.options),
            ve(this, Qi, B(this, Qe).state)),
          i
        );
      }
      getCurrentResult() {
        return B(this, En);
      }
      trackResult(n, a) {
        const i = {};
        return (
          Object.keys(n).forEach((o) => {
            Object.defineProperty(i, o, {
              configurable: !1,
              enumerable: !0,
              get: () => (this.trackProp(o), a == null || a(o), n[o]),
            });
          }),
          i
        );
      }
      trackProp(n) {
        B(this, mo).add(n);
      }
      getCurrentQuery() {
        return B(this, Qe);
      }
      refetch({ ...n } = {}) {
        return this.fetch({ ...n });
      }
      fetchOptimistic(n) {
        const a = B(this, _n).defaultQueryOptions(n),
          i = B(this, _n).getQueryCache().build(B(this, _n), a);
        return i.fetch().then(() => this.createResult(i, a));
      }
      fetch(n) {
        return Pe(this, ot, Fl)
          .call(this, { ...n, cancelRefetch: n.cancelRefetch ?? !0 })
          .then(() => (this.updateResult(), B(this, En)));
      }
      createResult(n, a) {
        var K;
        const i = B(this, Qe),
          o = this.options,
          u = B(this, En),
          f = B(this, Qi),
          d = B(this, fo),
          h = n !== i ? n.state : B(this, cu),
          { state: g } = n;
        let y = { ...g },
          x = !1,
          C;
        if (a._optimisticResults) {
          const P = this.hasListeners(),
            R = !P && n1(n, a),
            V = P && r1(n, i, a, o);
          (R || V) && (y = { ...y, ...Tx(g.data, n.options) }),
            a._optimisticResults === "isRestoring" && (y.fetchStatus = "idle");
        }
        let { error: b, errorUpdatedAt: S, status: w } = y;
        if (a.select && y.data !== void 0)
          if (
            u &&
            y.data === (f == null ? void 0 : f.data) &&
            a.select === B(this, fu)
          )
            C = B(this, po);
          else
            try {
              ve(this, fu, a.select),
                (C = a.select(y.data)),
                (C = im(u == null ? void 0 : u.data, C, a)),
                ve(this, po, C),
                ve(this, jr, null);
            } catch (P) {
              ve(this, jr, P);
            }
        else C = y.data;
        if (a.placeholderData !== void 0 && C === void 0 && w === "pending") {
          let P;
          if (
            u != null &&
            u.isPlaceholderData &&
            a.placeholderData === (d == null ? void 0 : d.placeholderData)
          )
            P = u.data;
          else if (
            ((P =
              typeof a.placeholderData == "function"
                ? a.placeholderData(
                    (K = B(this, ho)) == null ? void 0 : K.state.data,
                    B(this, ho)
                  )
                : a.placeholderData),
            a.select && P !== void 0)
          )
            try {
              (P = a.select(P)), ve(this, jr, null);
            } catch (R) {
              ve(this, jr, R);
            }
          P !== void 0 &&
            ((w = "success"),
            (C = im(u == null ? void 0 : u.data, P, a)),
            (x = !0));
        }
        B(this, jr) &&
          ((b = B(this, jr)),
          (C = B(this, po)),
          (S = Date.now()),
          (w = "error"));
        const O = y.fetchStatus === "fetching",
          _ = w === "pending",
          T = w === "error",
          D = _ && O,
          M = C !== void 0,
          L = {
            status: w,
            fetchStatus: y.fetchStatus,
            isPending: _,
            isSuccess: w === "success",
            isError: T,
            isInitialLoading: D,
            isLoading: D,
            data: C,
            dataUpdatedAt: y.dataUpdatedAt,
            error: b,
            errorUpdatedAt: S,
            failureCount: y.fetchFailureCount,
            failureReason: y.fetchFailureReason,
            errorUpdateCount: y.errorUpdateCount,
            isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
            isFetchedAfterMount:
              y.dataUpdateCount > h.dataUpdateCount ||
              y.errorUpdateCount > h.errorUpdateCount,
            isFetching: O,
            isRefetching: O && !_,
            isLoadingError: T && !M,
            isPaused: y.fetchStatus === "paused",
            isPlaceholderData: x,
            isRefetchError: T && M,
            isStale: sg(n, a),
            refetch: this.refetch,
            promise: B(this, ri),
          };
        if (this.options.experimental_prefetchInRender) {
          const P = (Q) => {
              L.status === "error"
                ? Q.reject(L.error)
                : L.data !== void 0 && Q.resolve(L.data);
            },
            R = () => {
              const Q = ve(this, ri, (L.promise = sm()));
              P(Q);
            },
            V = B(this, ri);
          switch (V.status) {
            case "pending":
              n.queryHash === i.queryHash && P(V);
              break;
            case "fulfilled":
              (L.status === "error" || L.data !== V.value) && R();
              break;
            case "rejected":
              (L.status !== "error" || L.error !== V.reason) && R();
              break;
          }
        }
        return L;
      }
      updateResult(n) {
        const a = B(this, En),
          i = this.createResult(B(this, Qe), this.options);
        if (
          (ve(this, Qi, B(this, Qe).state),
          ve(this, fo, this.options),
          B(this, Qi).data !== void 0 && ve(this, ho, B(this, Qe)),
          mf(i, a))
        )
          return;
        ve(this, En, i);
        const o = {},
          u = () => {
            if (!a) return !0;
            const { notifyOnChangeProps: f } = this.options,
              d = typeof f == "function" ? f() : f;
            if (d === "all" || (!d && !B(this, mo).size)) return !0;
            const m = new Set(d ?? B(this, mo));
            return (
              this.options.throwOnError && m.add("error"),
              Object.keys(B(this, En)).some((h) => {
                const g = h;
                return B(this, En)[g] !== a[g] && m.has(g);
              })
            );
          };
        (n == null ? void 0 : n.listeners) !== !1 && u() && (o.listeners = !0),
          Pe(this, ot, Ox).call(this, { ...o, ...n });
      }
      onQueryUpdate() {
        this.updateResult(), this.hasListeners() && Pe(this, ot, cm).call(this);
      }
    }),
    (_n = new WeakMap()),
    (Qe = new WeakMap()),
    (cu = new WeakMap()),
    (En = new WeakMap()),
    (Qi = new WeakMap()),
    (fo = new WeakMap()),
    (ri = new WeakMap()),
    (jr = new WeakMap()),
    (fu = new WeakMap()),
    (po = new WeakMap()),
    (ho = new WeakMap()),
    (Ki = new WeakMap()),
    (Xi = new WeakMap()),
    (ai = new WeakMap()),
    (mo = new WeakMap()),
    (ot = new WeakSet()),
    (Fl = function (n) {
      Pe(this, ot, pm).call(this);
      let a = B(this, Qe).fetch(this.options, n);
      return (n != null && n.throwOnError) || (a = a.catch(ar)), a;
    }),
    (om = function () {
      Pe(this, ot, fm).call(this);
      const n = Zs(this.options.staleTime, B(this, Qe));
      if (es || B(this, En).isStale || !rm(n)) return;
      const i = bx(B(this, En).dataUpdatedAt, n) + 1;
      ve(
        this,
        Ki,
        setTimeout(() => {
          B(this, En).isStale || this.updateResult();
        }, i)
      );
    }),
    (lm = function () {
      return (
        (typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(B(this, Qe))
          : this.options.refetchInterval) ?? !1
      );
    }),
    (um = function (n) {
      Pe(this, ot, dm).call(this),
        ve(this, ai, n),
        !(
          es ||
          yr(this.options.enabled, B(this, Qe)) === !1 ||
          !rm(B(this, ai)) ||
          B(this, ai) === 0
        ) &&
          ve(
            this,
            Xi,
            setInterval(() => {
              (this.options.refetchIntervalInBackground || ig.isFocused()) &&
                Pe(this, ot, Fl).call(this);
            }, B(this, ai))
          );
    }),
    (cm = function () {
      Pe(this, ot, om).call(this),
        Pe(this, ot, um).call(this, Pe(this, ot, lm).call(this));
    }),
    (fm = function () {
      B(this, Ki) && (clearTimeout(B(this, Ki)), ve(this, Ki, void 0));
    }),
    (dm = function () {
      B(this, Xi) && (clearInterval(B(this, Xi)), ve(this, Xi, void 0));
    }),
    (pm = function () {
      const n = B(this, _n).getQueryCache().build(B(this, _n), this.options);
      if (n === B(this, Qe)) return;
      const a = B(this, Qe);
      ve(this, Qe, n),
        ve(this, cu, n.state),
        this.hasListeners() &&
          (a == null || a.removeObserver(this), n.addObserver(this));
    }),
    (Ox = function (n) {
      Zt.batch(() => {
        n.listeners &&
          this.listeners.forEach((a) => {
            a(B(this, En));
          }),
          B(this, _n)
            .getQueryCache()
            .notify({ query: B(this, Qe), type: "observerResultsUpdated" });
      });
    }),
    ex);
function WA(e, n) {
  return (
    yr(n.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    !(e.state.status === "error" && n.retryOnMount === !1)
  );
}
function n1(e, n) {
  return WA(e, n) || (e.state.data !== void 0 && hm(e, n, n.refetchOnMount));
}
function hm(e, n, a) {
  if (yr(n.enabled, e) !== !1) {
    const i = typeof a == "function" ? a(e) : a;
    return i === "always" || (i !== !1 && sg(e, n));
  }
  return !1;
}
function r1(e, n, a, i) {
  return (
    (e !== n || yr(i.enabled, e) === !1) &&
    (!a.suspense || e.state.status !== "error") &&
    sg(e, a)
  );
}
function sg(e, n) {
  return yr(n.enabled, e) !== !1 && e.isStaleByTime(Zs(n.staleTime, e));
}
function ZA(e, n) {
  return !mf(e.getCurrentResult(), n);
}
var ii,
  si,
  Dn,
  ba,
  xa,
  Jc,
  mm,
  tx,
  JA =
    ((tx = class extends Ao {
      constructor(a, i) {
        super();
        Me(this, xa);
        Me(this, ii);
        Me(this, si);
        Me(this, Dn);
        Me(this, ba);
        ve(this, ii, a),
          this.setOptions(i),
          this.bindMethods(),
          Pe(this, xa, Jc).call(this);
      }
      bindMethods() {
        (this.mutate = this.mutate.bind(this)),
          (this.reset = this.reset.bind(this));
      }
      setOptions(a) {
        var o;
        const i = this.options;
        (this.options = B(this, ii).defaultMutationOptions(a)),
          mf(this.options, i) ||
            B(this, ii)
              .getMutationCache()
              .notify({
                type: "observerOptionsUpdated",
                mutation: B(this, Dn),
                observer: this,
              }),
          i != null &&
          i.mutationKey &&
          this.options.mutationKey &&
          ts(i.mutationKey) !== ts(this.options.mutationKey)
            ? this.reset()
            : ((o = B(this, Dn)) == null ? void 0 : o.state.status) ===
                "pending" && B(this, Dn).setOptions(this.options);
      }
      onUnsubscribe() {
        var a;
        this.hasListeners() ||
          (a = B(this, Dn)) == null ||
          a.removeObserver(this);
      }
      onMutationUpdate(a) {
        Pe(this, xa, Jc).call(this), Pe(this, xa, mm).call(this, a);
      }
      getCurrentResult() {
        return B(this, si);
      }
      reset() {
        var a;
        (a = B(this, Dn)) == null || a.removeObserver(this),
          ve(this, Dn, void 0),
          Pe(this, xa, Jc).call(this),
          Pe(this, xa, mm).call(this);
      }
      mutate(a, i) {
        var o;
        return (
          ve(this, ba, i),
          (o = B(this, Dn)) == null || o.removeObserver(this),
          ve(
            this,
            Dn,
            B(this, ii).getMutationCache().build(B(this, ii), this.options)
          ),
          B(this, Dn).addObserver(this),
          B(this, Dn).execute(a)
        );
      }
    }),
    (ii = new WeakMap()),
    (si = new WeakMap()),
    (Dn = new WeakMap()),
    (ba = new WeakMap()),
    (xa = new WeakSet()),
    (Jc = function () {
      var i;
      const a = ((i = B(this, Dn)) == null ? void 0 : i.state) ?? Ax();
      ve(this, si, {
        ...a,
        isPending: a.status === "pending",
        isSuccess: a.status === "success",
        isError: a.status === "error",
        isIdle: a.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      });
    }),
    (mm = function (a) {
      Zt.batch(() => {
        var i, o, u, f, d, m, h, g;
        if (B(this, ba) && this.hasListeners()) {
          const y = B(this, si).variables,
            x = B(this, si).context;
          (a == null ? void 0 : a.type) === "success"
            ? ((o = (i = B(this, ba)).onSuccess) == null ||
                o.call(i, a.data, y, x),
              (f = (u = B(this, ba)).onSettled) == null ||
                f.call(u, a.data, null, y, x))
            : (a == null ? void 0 : a.type) === "error" &&
              ((m = (d = B(this, ba)).onError) == null ||
                m.call(d, a.error, y, x),
              (g = (h = B(this, ba)).onSettled) == null ||
                g.call(h, void 0, a.error, y, x));
        }
        this.listeners.forEach((y) => {
          y(B(this, si));
        });
      });
    }),
    tx),
  Mx = E.createContext(void 0),
  _x = (e) => {
    const n = E.useContext(Mx);
    if (!n)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return n;
  },
  eO = ({ client: e, children: n }) => (
    E.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    U.jsx(Mx.Provider, { value: e, children: n })
  ),
  Dx = E.createContext(!1),
  tO = () => E.useContext(Dx);
Dx.Provider;
function nO() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
var rO = E.createContext(nO()),
  aO = () => E.useContext(rO);
function Nx(e, n) {
  return typeof e == "function" ? e(...n) : !!e;
}
function gm() {}
var iO = (e, n) => {
    (e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
      (n.isReset() || (e.retryOnMount = !1));
  },
  sO = (e) => {
    E.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  oO = ({
    result: e,
    errorResetBoundary: n,
    throwOnError: a,
    query: i,
    suspense: o,
  }) =>
    e.isError &&
    !n.isReset() &&
    !e.isFetching &&
    i &&
    ((o && e.data === void 0) || Nx(a, [e.error, i])),
  lO = (e) => {
    const n = e.staleTime;
    e.suspense &&
      ((e.staleTime =
        typeof n == "function"
          ? (...a) => Math.max(n(...a), 1e3)
          : Math.max(n ?? 1e3, 1e3)),
      typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
  },
  uO = (e, n) => e.isLoading && e.isFetching && !n,
  cO = (e, n) => (e == null ? void 0 : e.suspense) && n.isPending,
  a1 = (e, n, a) =>
    n.fetchOptimistic(e).catch(() => {
      a.clearReset();
    });
function fO(e, n, a) {
  var y, x, C, b, S;
  const i = _x(),
    o = tO(),
    u = aO(),
    f = i.defaultQueryOptions(e);
  (x =
    (y = i.getDefaultOptions().queries) == null
      ? void 0
      : y._experimental_beforeQuery) == null || x.call(y, f),
    (f._optimisticResults = o ? "isRestoring" : "optimistic"),
    lO(f),
    iO(f, u),
    sO(u);
  const d = !i.getQueryCache().get(f.queryHash),
    [m] = E.useState(() => new n(i, f)),
    h = m.getOptimisticResult(f),
    g = !o && e.subscribed !== !1;
  if (
    (E.useSyncExternalStore(
      E.useCallback(
        (w) => {
          const O = g ? m.subscribe(Zt.batchCalls(w)) : gm;
          return m.updateResult(), O;
        },
        [m, g]
      ),
      () => m.getCurrentResult(),
      () => m.getCurrentResult()
    ),
    E.useEffect(() => {
      m.setOptions(f, { listeners: !1 });
    }, [f, m]),
    cO(f, h))
  )
    throw a1(f, m, u);
  if (
    oO({
      result: h,
      errorResetBoundary: u,
      throwOnError: f.throwOnError,
      query: i.getQueryCache().get(f.queryHash),
      suspense: f.suspense,
    })
  )
    throw h.error;
  if (
    ((b =
      (C = i.getDefaultOptions().queries) == null
        ? void 0
        : C._experimental_afterQuery) == null || b.call(C, f, h),
    f.experimental_prefetchInRender && !es && uO(h, o))
  ) {
    const w = d
      ? a1(f, m, u)
      : (S = i.getQueryCache().get(f.queryHash)) == null
      ? void 0
      : S.promise;
    w == null ||
      w.catch(gm).finally(() => {
        m.updateResult();
      });
  }
  return f.notifyOnChangeProps ? h : m.trackResult(h);
}
function og(e, n) {
  return fO(e, XA);
}
function lg(e, n) {
  const a = _x(),
    [i] = E.useState(() => new JA(a, e));
  E.useEffect(() => {
    i.setOptions(e);
  }, [i, e]);
  const o = E.useSyncExternalStore(
      E.useCallback((f) => i.subscribe(Zt.batchCalls(f)), [i]),
      () => i.getCurrentResult(),
      () => i.getCurrentResult()
    ),
    u = E.useCallback(
      (f, d) => {
        i.mutate(f, d).catch(gm);
      },
      [i]
    );
  if (o.error && Nx(i.options.throwOnError, [o.error])) throw o.error;
  return { ...o, mutate: u, mutateAsync: o.mutate };
}
function zx(e, n) {
  return function () {
    return e.apply(n, arguments);
  };
}
const { toString: dO } = Object.prototype,
  { getPrototypeOf: ug } = Object,
  $f = ((e) => (n) => {
    const a = dO.call(n);
    return e[a] || (e[a] = a.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Rr = (e) => ((e = e.toLowerCase()), (n) => $f(n) === e),
  Hf = (e) => (n) => typeof n === e,
  { isArray: Oo } = Array,
  tu = Hf("undefined");
function pO(e) {
  return (
    e !== null &&
    !tu(e) &&
    e.constructor !== null &&
    !tu(e.constructor) &&
    qn(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const kx = Rr("ArrayBuffer");
function hO(e) {
  let n;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (n = ArrayBuffer.isView(e))
      : (n = e && e.buffer && kx(e.buffer)),
    n
  );
}
const mO = Hf("string"),
  qn = Hf("function"),
  Bx = Hf("number"),
  Pf = (e) => e !== null && typeof e == "object",
  gO = (e) => e === !0 || e === !1,
  ef = (e) => {
    if ($f(e) !== "object") return !1;
    const n = ug(e);
    return (
      (n === null ||
        n === Object.prototype ||
        Object.getPrototypeOf(n) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  yO = Rr("Date"),
  vO = Rr("File"),
  bO = Rr("Blob"),
  SO = Rr("FileList"),
  xO = (e) => Pf(e) && qn(e.pipe),
  EO = (e) => {
    let n;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (qn(e.append) &&
          ((n = $f(e)) === "formdata" ||
            (n === "object" &&
              qn(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  RO = Rr("URLSearchParams"),
  [CO, wO, TO, AO] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Rr
  ),
  OO = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function mu(e, n, { allOwnKeys: a = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let i, o;
  if ((typeof e != "object" && (e = [e]), Oo(e)))
    for (i = 0, o = e.length; i < o; i++) n.call(null, e[i], i, e);
  else {
    const u = a ? Object.getOwnPropertyNames(e) : Object.keys(e),
      f = u.length;
    let d;
    for (i = 0; i < f; i++) (d = u[i]), n.call(null, e[d], d, e);
  }
}
function Ux(e, n) {
  n = n.toLowerCase();
  const a = Object.keys(e);
  let i = a.length,
    o;
  for (; i-- > 0; ) if (((o = a[i]), n === o.toLowerCase())) return o;
  return null;
}
const $i =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Lx = (e) => !tu(e) && e !== $i;
function ym() {
  const { caseless: e } = (Lx(this) && this) || {},
    n = {},
    a = (i, o) => {
      const u = (e && Ux(n, o)) || o;
      ef(n[u]) && ef(i)
        ? (n[u] = ym(n[u], i))
        : ef(i)
        ? (n[u] = ym({}, i))
        : Oo(i)
        ? (n[u] = i.slice())
        : (n[u] = i);
    };
  for (let i = 0, o = arguments.length; i < o; i++)
    arguments[i] && mu(arguments[i], a);
  return n;
}
const MO = (e, n, a, { allOwnKeys: i } = {}) => (
    mu(
      n,
      (o, u) => {
        a && qn(o) ? (e[u] = zx(o, a)) : (e[u] = o);
      },
      { allOwnKeys: i }
    ),
    e
  ),
  _O = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  DO = (e, n, a, i) => {
    (e.prototype = Object.create(n.prototype, i)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: n.prototype }),
      a && Object.assign(e.prototype, a);
  },
  NO = (e, n, a, i) => {
    let o, u, f;
    const d = {};
    if (((n = n || {}), e == null)) return n;
    do {
      for (o = Object.getOwnPropertyNames(e), u = o.length; u-- > 0; )
        (f = o[u]), (!i || i(f, e, n)) && !d[f] && ((n[f] = e[f]), (d[f] = !0));
      e = a !== !1 && ug(e);
    } while (e && (!a || a(e, n)) && e !== Object.prototype);
    return n;
  },
  zO = (e, n, a) => {
    (e = String(e)),
      (a === void 0 || a > e.length) && (a = e.length),
      (a -= n.length);
    const i = e.indexOf(n, a);
    return i !== -1 && i === a;
  },
  kO = (e) => {
    if (!e) return null;
    if (Oo(e)) return e;
    let n = e.length;
    if (!Bx(n)) return null;
    const a = new Array(n);
    for (; n-- > 0; ) a[n] = e[n];
    return a;
  },
  BO = (
    (e) => (n) =>
      e && n instanceof e
  )(typeof Uint8Array < "u" && ug(Uint8Array)),
  UO = (e, n) => {
    const i = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = i.next()) && !o.done; ) {
      const u = o.value;
      n.call(e, u[0], u[1]);
    }
  },
  LO = (e, n) => {
    let a;
    const i = [];
    for (; (a = e.exec(n)) !== null; ) i.push(a);
    return i;
  },
  jO = Rr("HTMLFormElement"),
  $O = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (a, i, o) {
      return i.toUpperCase() + o;
    }),
  i1 = (
    ({ hasOwnProperty: e }) =>
    (n, a) =>
      e.call(n, a)
  )(Object.prototype),
  HO = Rr("RegExp"),
  jx = (e, n) => {
    const a = Object.getOwnPropertyDescriptors(e),
      i = {};
    mu(a, (o, u) => {
      let f;
      (f = n(o, u, e)) !== !1 && (i[u] = f || o);
    }),
      Object.defineProperties(e, i);
  },
  PO = (e) => {
    jx(e, (n, a) => {
      if (qn(e) && ["arguments", "caller", "callee"].indexOf(a) !== -1)
        return !1;
      const i = e[a];
      if (qn(i)) {
        if (((n.enumerable = !1), "writable" in n)) {
          n.writable = !1;
          return;
        }
        n.set ||
          (n.set = () => {
            throw Error("Can not rewrite read-only method '" + a + "'");
          });
      }
    });
  },
  FO = (e, n) => {
    const a = {},
      i = (o) => {
        o.forEach((u) => {
          a[u] = !0;
        });
      };
    return Oo(e) ? i(e) : i(String(e).split(n)), a;
  },
  qO = () => {},
  VO = (e, n) => (e != null && Number.isFinite((e = +e)) ? e : n),
  Dh = "abcdefghijklmnopqrstuvwxyz",
  s1 = "0123456789",
  $x = { DIGIT: s1, ALPHA: Dh, ALPHA_DIGIT: Dh + Dh.toUpperCase() + s1 },
  GO = (e = 16, n = $x.ALPHA_DIGIT) => {
    let a = "";
    const { length: i } = n;
    for (; e--; ) a += n[(Math.random() * i) | 0];
    return a;
  };
function IO(e) {
  return !!(
    e &&
    qn(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const YO = (e) => {
    const n = new Array(10),
      a = (i, o) => {
        if (Pf(i)) {
          if (n.indexOf(i) >= 0) return;
          if (!("toJSON" in i)) {
            n[o] = i;
            const u = Oo(i) ? [] : {};
            return (
              mu(i, (f, d) => {
                const m = a(f, o + 1);
                !tu(m) && (u[d] = m);
              }),
              (n[o] = void 0),
              u
            );
          }
        }
        return i;
      };
    return a(e, 0);
  },
  QO = Rr("AsyncFunction"),
  KO = (e) => e && (Pf(e) || qn(e)) && qn(e.then) && qn(e.catch),
  Hx = ((e, n) =>
    e
      ? setImmediate
      : n
      ? ((a, i) => (
          $i.addEventListener(
            "message",
            ({ source: o, data: u }) => {
              o === $i && u === a && i.length && i.shift()();
            },
            !1
          ),
          (o) => {
            i.push(o), $i.postMessage(a, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (a) => setTimeout(a))(
    typeof setImmediate == "function",
    qn($i.postMessage)
  ),
  XO =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind($i)
      : (typeof process < "u" && process.nextTick) || Hx,
  W = {
    isArray: Oo,
    isArrayBuffer: kx,
    isBuffer: pO,
    isFormData: EO,
    isArrayBufferView: hO,
    isString: mO,
    isNumber: Bx,
    isBoolean: gO,
    isObject: Pf,
    isPlainObject: ef,
    isReadableStream: CO,
    isRequest: wO,
    isResponse: TO,
    isHeaders: AO,
    isUndefined: tu,
    isDate: yO,
    isFile: vO,
    isBlob: bO,
    isRegExp: HO,
    isFunction: qn,
    isStream: xO,
    isURLSearchParams: RO,
    isTypedArray: BO,
    isFileList: SO,
    forEach: mu,
    merge: ym,
    extend: MO,
    trim: OO,
    stripBOM: _O,
    inherits: DO,
    toFlatObject: NO,
    kindOf: $f,
    kindOfTest: Rr,
    endsWith: zO,
    toArray: kO,
    forEachEntry: UO,
    matchAll: LO,
    isHTMLForm: jO,
    hasOwnProperty: i1,
    hasOwnProp: i1,
    reduceDescriptors: jx,
    freezeMethods: PO,
    toObjectSet: FO,
    toCamelCase: $O,
    noop: qO,
    toFiniteNumber: VO,
    findKey: Ux,
    global: $i,
    isContextDefined: Lx,
    ALPHABET: $x,
    generateString: GO,
    isSpecCompliantForm: IO,
    toJSONObject: YO,
    isAsyncFn: QO,
    isThenable: KO,
    setImmediate: Hx,
    asap: XO,
  };
function je(e, n, a, i, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    n && (this.code = n),
    a && (this.config = a),
    i && (this.request = i),
    o && ((this.response = o), (this.status = o.status ? o.status : null));
}
W.inherits(je, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: W.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Px = je.prototype,
  Fx = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Fx[e] = { value: e };
});
Object.defineProperties(je, Fx);
Object.defineProperty(Px, "isAxiosError", { value: !0 });
je.from = (e, n, a, i, o, u) => {
  const f = Object.create(Px);
  return (
    W.toFlatObject(
      e,
      f,
      function (m) {
        return m !== Error.prototype;
      },
      (d) => d !== "isAxiosError"
    ),
    je.call(f, e.message, n, a, i, o),
    (f.cause = e),
    (f.name = e.name),
    u && Object.assign(f, u),
    f
  );
};
const WO = null;
function vm(e) {
  return W.isPlainObject(e) || W.isArray(e);
}
function qx(e) {
  return W.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function o1(e, n, a) {
  return e
    ? e
        .concat(n)
        .map(function (o, u) {
          return (o = qx(o)), !a && u ? "[" + o + "]" : o;
        })
        .join(a ? "." : "")
    : n;
}
function ZO(e) {
  return W.isArray(e) && !e.some(vm);
}
const JO = W.toFlatObject(W, {}, null, function (n) {
  return /^is[A-Z]/.test(n);
});
function Ff(e, n, a) {
  if (!W.isObject(e)) throw new TypeError("target must be an object");
  (n = n || new FormData()),
    (a = W.toFlatObject(
      a,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (S, w) {
        return !W.isUndefined(w[S]);
      }
    ));
  const i = a.metaTokens,
    o = a.visitor || g,
    u = a.dots,
    f = a.indexes,
    m = (a.Blob || (typeof Blob < "u" && Blob)) && W.isSpecCompliantForm(n);
  if (!W.isFunction(o)) throw new TypeError("visitor must be a function");
  function h(b) {
    if (b === null) return "";
    if (W.isDate(b)) return b.toISOString();
    if (!m && W.isBlob(b))
      throw new je("Blob is not supported. Use a Buffer instead.");
    return W.isArrayBuffer(b) || W.isTypedArray(b)
      ? m && typeof Blob == "function"
        ? new Blob([b])
        : Buffer.from(b)
      : b;
  }
  function g(b, S, w) {
    let O = b;
    if (b && !w && typeof b == "object") {
      if (W.endsWith(S, "{}"))
        (S = i ? S : S.slice(0, -2)), (b = JSON.stringify(b));
      else if (
        (W.isArray(b) && ZO(b)) ||
        ((W.isFileList(b) || W.endsWith(S, "[]")) && (O = W.toArray(b)))
      )
        return (
          (S = qx(S)),
          O.forEach(function (T, D) {
            !(W.isUndefined(T) || T === null) &&
              n.append(
                f === !0 ? o1([S], D, u) : f === null ? S : S + "[]",
                h(T)
              );
          }),
          !1
        );
    }
    return vm(b) ? !0 : (n.append(o1(w, S, u), h(b)), !1);
  }
  const y = [],
    x = Object.assign(JO, {
      defaultVisitor: g,
      convertValue: h,
      isVisitable: vm,
    });
  function C(b, S) {
    if (!W.isUndefined(b)) {
      if (y.indexOf(b) !== -1)
        throw Error("Circular reference detected in " + S.join("."));
      y.push(b),
        W.forEach(b, function (O, _) {
          (!(W.isUndefined(O) || O === null) &&
            o.call(n, O, W.isString(_) ? _.trim() : _, S, x)) === !0 &&
            C(O, S ? S.concat(_) : [_]);
        }),
        y.pop();
    }
  }
  if (!W.isObject(e)) throw new TypeError("data must be an object");
  return C(e), n;
}
function l1(e) {
  const n = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (i) {
    return n[i];
  });
}
function cg(e, n) {
  (this._pairs = []), e && Ff(e, this, n);
}
const Vx = cg.prototype;
Vx.append = function (n, a) {
  this._pairs.push([n, a]);
};
Vx.toString = function (n) {
  const a = n
    ? function (i) {
        return n.call(this, i, l1);
      }
    : l1;
  return this._pairs
    .map(function (o) {
      return a(o[0]) + "=" + a(o[1]);
    }, "")
    .join("&");
};
function e2(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Gx(e, n, a) {
  if (!n) return e;
  const i = (a && a.encode) || e2;
  W.isFunction(a) && (a = { serialize: a });
  const o = a && a.serialize;
  let u;
  if (
    (o
      ? (u = o(n, a))
      : (u = W.isURLSearchParams(n) ? n.toString() : new cg(n, a).toString(i)),
    u)
  ) {
    const f = e.indexOf("#");
    f !== -1 && (e = e.slice(0, f)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + u);
  }
  return e;
}
class u1 {
  constructor() {
    this.handlers = [];
  }
  use(n, a, i) {
    return (
      this.handlers.push({
        fulfilled: n,
        rejected: a,
        synchronous: i ? i.synchronous : !1,
        runWhen: i ? i.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(n) {
    this.handlers[n] && (this.handlers[n] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(n) {
    W.forEach(this.handlers, function (i) {
      i !== null && n(i);
    });
  }
}
const Ix = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  t2 = typeof URLSearchParams < "u" ? URLSearchParams : cg,
  n2 = typeof FormData < "u" ? FormData : null,
  r2 = typeof Blob < "u" ? Blob : null,
  a2 = {
    isBrowser: !0,
    classes: { URLSearchParams: t2, FormData: n2, Blob: r2 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  fg = typeof window < "u" && typeof document < "u",
  bm = (typeof navigator == "object" && navigator) || void 0,
  i2 =
    fg &&
    (!bm || ["ReactNative", "NativeScript", "NS"].indexOf(bm.product) < 0),
  s2 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  o2 = (fg && window.location.href) || "http://localhost",
  l2 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: fg,
        hasStandardBrowserEnv: i2,
        hasStandardBrowserWebWorkerEnv: s2,
        navigator: bm,
        origin: o2,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  gn = { ...l2, ...a2 };
function u2(e, n) {
  return Ff(
    e,
    new gn.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (a, i, o, u) {
          return gn.isNode && W.isBuffer(a)
            ? (this.append(i, a.toString("base64")), !1)
            : u.defaultVisitor.apply(this, arguments);
        },
      },
      n
    )
  );
}
function c2(e) {
  return W.matchAll(/\w+|\[(\w*)]/g, e).map((n) =>
    n[0] === "[]" ? "" : n[1] || n[0]
  );
}
function f2(e) {
  const n = {},
    a = Object.keys(e);
  let i;
  const o = a.length;
  let u;
  for (i = 0; i < o; i++) (u = a[i]), (n[u] = e[u]);
  return n;
}
function Yx(e) {
  function n(a, i, o, u) {
    let f = a[u++];
    if (f === "__proto__") return !0;
    const d = Number.isFinite(+f),
      m = u >= a.length;
    return (
      (f = !f && W.isArray(o) ? o.length : f),
      m
        ? (W.hasOwnProp(o, f) ? (o[f] = [o[f], i]) : (o[f] = i), !d)
        : ((!o[f] || !W.isObject(o[f])) && (o[f] = []),
          n(a, i, o[f], u) && W.isArray(o[f]) && (o[f] = f2(o[f])),
          !d)
    );
  }
  if (W.isFormData(e) && W.isFunction(e.entries)) {
    const a = {};
    return (
      W.forEachEntry(e, (i, o) => {
        n(c2(i), o, a, 0);
      }),
      a
    );
  }
  return null;
}
function d2(e, n, a) {
  if (W.isString(e))
    try {
      return (n || JSON.parse)(e), W.trim(e);
    } catch (i) {
      if (i.name !== "SyntaxError") throw i;
    }
  return (a || JSON.stringify)(e);
}
const gu = {
  transitional: Ix,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (n, a) {
      const i = a.getContentType() || "",
        o = i.indexOf("application/json") > -1,
        u = W.isObject(n);
      if ((u && W.isHTMLForm(n) && (n = new FormData(n)), W.isFormData(n)))
        return o ? JSON.stringify(Yx(n)) : n;
      if (
        W.isArrayBuffer(n) ||
        W.isBuffer(n) ||
        W.isStream(n) ||
        W.isFile(n) ||
        W.isBlob(n) ||
        W.isReadableStream(n)
      )
        return n;
      if (W.isArrayBufferView(n)) return n.buffer;
      if (W.isURLSearchParams(n))
        return (
          a.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          n.toString()
        );
      let d;
      if (u) {
        if (i.indexOf("application/x-www-form-urlencoded") > -1)
          return u2(n, this.formSerializer).toString();
        if ((d = W.isFileList(n)) || i.indexOf("multipart/form-data") > -1) {
          const m = this.env && this.env.FormData;
          return Ff(
            d ? { "files[]": n } : n,
            m && new m(),
            this.formSerializer
          );
        }
      }
      return u || o ? (a.setContentType("application/json", !1), d2(n)) : n;
    },
  ],
  transformResponse: [
    function (n) {
      const a = this.transitional || gu.transitional,
        i = a && a.forcedJSONParsing,
        o = this.responseType === "json";
      if (W.isResponse(n) || W.isReadableStream(n)) return n;
      if (n && W.isString(n) && ((i && !this.responseType) || o)) {
        const f = !(a && a.silentJSONParsing) && o;
        try {
          return JSON.parse(n);
        } catch (d) {
          if (f)
            throw d.name === "SyntaxError"
              ? je.from(d, je.ERR_BAD_RESPONSE, this, null, this.response)
              : d;
        }
      }
      return n;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: gn.classes.FormData, Blob: gn.classes.Blob },
  validateStatus: function (n) {
    return n >= 200 && n < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
W.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  gu.headers[e] = {};
});
const p2 = W.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  h2 = (e) => {
    const n = {};
    let a, i, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (f) {
            (o = f.indexOf(":")),
              (a = f.substring(0, o).trim().toLowerCase()),
              (i = f.substring(o + 1).trim()),
              !(!a || (n[a] && p2[a])) &&
                (a === "set-cookie"
                  ? n[a]
                    ? n[a].push(i)
                    : (n[a] = [i])
                  : (n[a] = n[a] ? n[a] + ", " + i : i));
          }),
      n
    );
  },
  c1 = Symbol("internals");
function kl(e) {
  return e && String(e).trim().toLowerCase();
}
function tf(e) {
  return e === !1 || e == null ? e : W.isArray(e) ? e.map(tf) : String(e);
}
function m2(e) {
  const n = Object.create(null),
    a = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let i;
  for (; (i = a.exec(e)); ) n[i[1]] = i[2];
  return n;
}
const g2 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Nh(e, n, a, i, o) {
  if (W.isFunction(i)) return i.call(this, n, a);
  if ((o && (n = a), !!W.isString(n))) {
    if (W.isString(i)) return n.indexOf(i) !== -1;
    if (W.isRegExp(i)) return i.test(n);
  }
}
function y2(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (n, a, i) => a.toUpperCase() + i);
}
function v2(e, n) {
  const a = W.toCamelCase(" " + n);
  ["get", "set", "has"].forEach((i) => {
    Object.defineProperty(e, i + a, {
      value: function (o, u, f) {
        return this[i].call(this, n, o, u, f);
      },
      configurable: !0,
    });
  });
}
let kn = class {
  constructor(n) {
    n && this.set(n);
  }
  set(n, a, i) {
    const o = this;
    function u(d, m, h) {
      const g = kl(m);
      if (!g) throw new Error("header name must be a non-empty string");
      const y = W.findKey(o, g);
      (!y || o[y] === void 0 || h === !0 || (h === void 0 && o[y] !== !1)) &&
        (o[y || m] = tf(d));
    }
    const f = (d, m) => W.forEach(d, (h, g) => u(h, g, m));
    if (W.isPlainObject(n) || n instanceof this.constructor) f(n, a);
    else if (W.isString(n) && (n = n.trim()) && !g2(n)) f(h2(n), a);
    else if (W.isHeaders(n)) for (const [d, m] of n.entries()) u(m, d, i);
    else n != null && u(a, n, i);
    return this;
  }
  get(n, a) {
    if (((n = kl(n)), n)) {
      const i = W.findKey(this, n);
      if (i) {
        const o = this[i];
        if (!a) return o;
        if (a === !0) return m2(o);
        if (W.isFunction(a)) return a.call(this, o, i);
        if (W.isRegExp(a)) return a.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, a) {
    if (((n = kl(n)), n)) {
      const i = W.findKey(this, n);
      return !!(i && this[i] !== void 0 && (!a || Nh(this, this[i], i, a)));
    }
    return !1;
  }
  delete(n, a) {
    const i = this;
    let o = !1;
    function u(f) {
      if (((f = kl(f)), f)) {
        const d = W.findKey(i, f);
        d && (!a || Nh(i, i[d], d, a)) && (delete i[d], (o = !0));
      }
    }
    return W.isArray(n) ? n.forEach(u) : u(n), o;
  }
  clear(n) {
    const a = Object.keys(this);
    let i = a.length,
      o = !1;
    for (; i--; ) {
      const u = a[i];
      (!n || Nh(this, this[u], u, n, !0)) && (delete this[u], (o = !0));
    }
    return o;
  }
  normalize(n) {
    const a = this,
      i = {};
    return (
      W.forEach(this, (o, u) => {
        const f = W.findKey(i, u);
        if (f) {
          (a[f] = tf(o)), delete a[u];
          return;
        }
        const d = n ? y2(u) : String(u).trim();
        d !== u && delete a[u], (a[d] = tf(o)), (i[d] = !0);
      }),
      this
    );
  }
  concat(...n) {
    return this.constructor.concat(this, ...n);
  }
  toJSON(n) {
    const a = Object.create(null);
    return (
      W.forEach(this, (i, o) => {
        i != null && i !== !1 && (a[o] = n && W.isArray(i) ? i.join(", ") : i);
      }),
      a
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([n, a]) => n + ": " + a).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(n) {
    return n instanceof this ? n : new this(n);
  }
  static concat(n, ...a) {
    const i = new this(n);
    return a.forEach((o) => i.set(o)), i;
  }
  static accessor(n) {
    const i = (this[c1] = this[c1] = { accessors: {} }).accessors,
      o = this.prototype;
    function u(f) {
      const d = kl(f);
      i[d] || (v2(o, f), (i[d] = !0));
    }
    return W.isArray(n) ? n.forEach(u) : u(n), this;
  }
};
kn.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
W.reduceDescriptors(kn.prototype, ({ value: e }, n) => {
  let a = n[0].toUpperCase() + n.slice(1);
  return {
    get: () => e,
    set(i) {
      this[a] = i;
    },
  };
});
W.freezeMethods(kn);
function zh(e, n) {
  const a = this || gu,
    i = n || a,
    o = kn.from(i.headers);
  let u = i.data;
  return (
    W.forEach(e, function (d) {
      u = d.call(a, u, o.normalize(), n ? n.status : void 0);
    }),
    o.normalize(),
    u
  );
}
function Qx(e) {
  return !!(e && e.__CANCEL__);
}
function Mo(e, n, a) {
  je.call(this, e ?? "canceled", je.ERR_CANCELED, n, a),
    (this.name = "CanceledError");
}
W.inherits(Mo, je, { __CANCEL__: !0 });
function Kx(e, n, a) {
  const i = a.config.validateStatus;
  !a.status || !i || i(a.status)
    ? e(a)
    : n(
        new je(
          "Request failed with status code " + a.status,
          [je.ERR_BAD_REQUEST, je.ERR_BAD_RESPONSE][
            Math.floor(a.status / 100) - 4
          ],
          a.config,
          a.request,
          a
        )
      );
}
function b2(e) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (n && n[1]) || "";
}
function S2(e, n) {
  e = e || 10;
  const a = new Array(e),
    i = new Array(e);
  let o = 0,
    u = 0,
    f;
  return (
    (n = n !== void 0 ? n : 1e3),
    function (m) {
      const h = Date.now(),
        g = i[u];
      f || (f = h), (a[o] = m), (i[o] = h);
      let y = u,
        x = 0;
      for (; y !== o; ) (x += a[y++]), (y = y % e);
      if (((o = (o + 1) % e), o === u && (u = (u + 1) % e), h - f < n)) return;
      const C = g && h - g;
      return C ? Math.round((x * 1e3) / C) : void 0;
    }
  );
}
function x2(e, n) {
  let a = 0,
    i = 1e3 / n,
    o,
    u;
  const f = (h, g = Date.now()) => {
    (a = g), (o = null), u && (clearTimeout(u), (u = null)), e.apply(null, h);
  };
  return [
    (...h) => {
      const g = Date.now(),
        y = g - a;
      y >= i
        ? f(h, g)
        : ((o = h),
          u ||
            (u = setTimeout(() => {
              (u = null), f(o);
            }, i - y)));
    },
    () => o && f(o),
  ];
}
const yf = (e, n, a = 3) => {
    let i = 0;
    const o = S2(50, 250);
    return x2((u) => {
      const f = u.loaded,
        d = u.lengthComputable ? u.total : void 0,
        m = f - i,
        h = o(m),
        g = f <= d;
      i = f;
      const y = {
        loaded: f,
        total: d,
        progress: d ? f / d : void 0,
        bytes: m,
        rate: h || void 0,
        estimated: h && d && g ? (d - f) / h : void 0,
        event: u,
        lengthComputable: d != null,
        [n ? "download" : "upload"]: !0,
      };
      e(y);
    }, a);
  },
  f1 = (e, n) => {
    const a = e != null;
    return [(i) => n[0]({ lengthComputable: a, total: e, loaded: i }), n[1]];
  },
  d1 =
    (e) =>
    (...n) =>
      W.asap(() => e(...n)),
  E2 = gn.hasStandardBrowserEnv
    ? ((e, n) => (a) => (
        (a = new URL(a, gn.origin)),
        e.protocol === a.protocol &&
          e.host === a.host &&
          (n || e.port === a.port)
      ))(
        new URL(gn.origin),
        gn.navigator && /(msie|trident)/i.test(gn.navigator.userAgent)
      )
    : () => !0,
  R2 = gn.hasStandardBrowserEnv
    ? {
        write(e, n, a, i, o, u) {
          const f = [e + "=" + encodeURIComponent(n)];
          W.isNumber(a) && f.push("expires=" + new Date(a).toGMTString()),
            W.isString(i) && f.push("path=" + i),
            W.isString(o) && f.push("domain=" + o),
            u === !0 && f.push("secure"),
            (document.cookie = f.join("; "));
        },
        read(e) {
          const n = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return n ? decodeURIComponent(n[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function C2(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function w2(e, n) {
  return n ? e.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : e;
}
function Xx(e, n) {
  return e && !C2(n) ? w2(e, n) : n;
}
const p1 = (e) => (e instanceof kn ? { ...e } : e);
function ns(e, n) {
  n = n || {};
  const a = {};
  function i(h, g, y, x) {
    return W.isPlainObject(h) && W.isPlainObject(g)
      ? W.merge.call({ caseless: x }, h, g)
      : W.isPlainObject(g)
      ? W.merge({}, g)
      : W.isArray(g)
      ? g.slice()
      : g;
  }
  function o(h, g, y, x) {
    if (W.isUndefined(g)) {
      if (!W.isUndefined(h)) return i(void 0, h, y, x);
    } else return i(h, g, y, x);
  }
  function u(h, g) {
    if (!W.isUndefined(g)) return i(void 0, g);
  }
  function f(h, g) {
    if (W.isUndefined(g)) {
      if (!W.isUndefined(h)) return i(void 0, h);
    } else return i(void 0, g);
  }
  function d(h, g, y) {
    if (y in n) return i(h, g);
    if (y in e) return i(void 0, h);
  }
  const m = {
    url: u,
    method: u,
    data: u,
    baseURL: f,
    transformRequest: f,
    transformResponse: f,
    paramsSerializer: f,
    timeout: f,
    timeoutMessage: f,
    withCredentials: f,
    withXSRFToken: f,
    adapter: f,
    responseType: f,
    xsrfCookieName: f,
    xsrfHeaderName: f,
    onUploadProgress: f,
    onDownloadProgress: f,
    decompress: f,
    maxContentLength: f,
    maxBodyLength: f,
    beforeRedirect: f,
    transport: f,
    httpAgent: f,
    httpsAgent: f,
    cancelToken: f,
    socketPath: f,
    responseEncoding: f,
    validateStatus: d,
    headers: (h, g, y) => o(p1(h), p1(g), y, !0),
  };
  return (
    W.forEach(Object.keys(Object.assign({}, e, n)), function (g) {
      const y = m[g] || o,
        x = y(e[g], n[g], g);
      (W.isUndefined(x) && y !== d) || (a[g] = x);
    }),
    a
  );
}
const Wx = (e) => {
    const n = ns({}, e);
    let {
      data: a,
      withXSRFToken: i,
      xsrfHeaderName: o,
      xsrfCookieName: u,
      headers: f,
      auth: d,
    } = n;
    (n.headers = f = kn.from(f)),
      (n.url = Gx(Xx(n.baseURL, n.url), e.params, e.paramsSerializer)),
      d &&
        f.set(
          "Authorization",
          "Basic " +
            btoa(
              (d.username || "") +
                ":" +
                (d.password ? unescape(encodeURIComponent(d.password)) : "")
            )
        );
    let m;
    if (W.isFormData(a)) {
      if (gn.hasStandardBrowserEnv || gn.hasStandardBrowserWebWorkerEnv)
        f.setContentType(void 0);
      else if ((m = f.getContentType()) !== !1) {
        const [h, ...g] = m
          ? m
              .split(";")
              .map((y) => y.trim())
              .filter(Boolean)
          : [];
        f.setContentType([h || "multipart/form-data", ...g].join("; "));
      }
    }
    if (
      gn.hasStandardBrowserEnv &&
      (i && W.isFunction(i) && (i = i(n)), i || (i !== !1 && E2(n.url)))
    ) {
      const h = o && u && R2.read(u);
      h && f.set(o, h);
    }
    return n;
  },
  T2 = typeof XMLHttpRequest < "u",
  A2 =
    T2 &&
    function (e) {
      return new Promise(function (a, i) {
        const o = Wx(e);
        let u = o.data;
        const f = kn.from(o.headers).normalize();
        let { responseType: d, onUploadProgress: m, onDownloadProgress: h } = o,
          g,
          y,
          x,
          C,
          b;
        function S() {
          C && C(),
            b && b(),
            o.cancelToken && o.cancelToken.unsubscribe(g),
            o.signal && o.signal.removeEventListener("abort", g);
        }
        let w = new XMLHttpRequest();
        w.open(o.method.toUpperCase(), o.url, !0), (w.timeout = o.timeout);
        function O() {
          if (!w) return;
          const T = kn.from(
              "getAllResponseHeaders" in w && w.getAllResponseHeaders()
            ),
            M = {
              data:
                !d || d === "text" || d === "json"
                  ? w.responseText
                  : w.response,
              status: w.status,
              statusText: w.statusText,
              headers: T,
              config: e,
              request: w,
            };
          Kx(
            function (L) {
              a(L), S();
            },
            function (L) {
              i(L), S();
            },
            M
          ),
            (w = null);
        }
        "onloadend" in w
          ? (w.onloadend = O)
          : (w.onreadystatechange = function () {
              !w ||
                w.readyState !== 4 ||
                (w.status === 0 &&
                  !(w.responseURL && w.responseURL.indexOf("file:") === 0)) ||
                setTimeout(O);
            }),
          (w.onabort = function () {
            w &&
              (i(new je("Request aborted", je.ECONNABORTED, e, w)), (w = null));
          }),
          (w.onerror = function () {
            i(new je("Network Error", je.ERR_NETWORK, e, w)), (w = null);
          }),
          (w.ontimeout = function () {
            let D = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded";
            const M = o.transitional || Ix;
            o.timeoutErrorMessage && (D = o.timeoutErrorMessage),
              i(
                new je(
                  D,
                  M.clarifyTimeoutError ? je.ETIMEDOUT : je.ECONNABORTED,
                  e,
                  w
                )
              ),
              (w = null);
          }),
          u === void 0 && f.setContentType(null),
          "setRequestHeader" in w &&
            W.forEach(f.toJSON(), function (D, M) {
              w.setRequestHeader(M, D);
            }),
          W.isUndefined(o.withCredentials) ||
            (w.withCredentials = !!o.withCredentials),
          d && d !== "json" && (w.responseType = o.responseType),
          h && (([x, b] = yf(h, !0)), w.addEventListener("progress", x)),
          m &&
            w.upload &&
            (([y, C] = yf(m)),
            w.upload.addEventListener("progress", y),
            w.upload.addEventListener("loadend", C)),
          (o.cancelToken || o.signal) &&
            ((g = (T) => {
              w &&
                (i(!T || T.type ? new Mo(null, e, w) : T),
                w.abort(),
                (w = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(g),
            o.signal &&
              (o.signal.aborted ? g() : o.signal.addEventListener("abort", g)));
        const _ = b2(o.url);
        if (_ && gn.protocols.indexOf(_) === -1) {
          i(new je("Unsupported protocol " + _ + ":", je.ERR_BAD_REQUEST, e));
          return;
        }
        w.send(u || null);
      });
    },
  O2 = (e, n) => {
    const { length: a } = (e = e ? e.filter(Boolean) : []);
    if (n || a) {
      let i = new AbortController(),
        o;
      const u = function (h) {
        if (!o) {
          (o = !0), d();
          const g = h instanceof Error ? h : this.reason;
          i.abort(
            g instanceof je ? g : new Mo(g instanceof Error ? g.message : g)
          );
        }
      };
      let f =
        n &&
        setTimeout(() => {
          (f = null), u(new je(`timeout ${n} of ms exceeded`, je.ETIMEDOUT));
        }, n);
      const d = () => {
        e &&
          (f && clearTimeout(f),
          (f = null),
          e.forEach((h) => {
            h.unsubscribe
              ? h.unsubscribe(u)
              : h.removeEventListener("abort", u);
          }),
          (e = null));
      };
      e.forEach((h) => h.addEventListener("abort", u));
      const { signal: m } = i;
      return (m.unsubscribe = () => W.asap(d)), m;
    }
  },
  M2 = function* (e, n) {
    let a = e.byteLength;
    if (a < n) {
      yield e;
      return;
    }
    let i = 0,
      o;
    for (; i < a; ) (o = i + n), yield e.slice(i, o), (i = o);
  },
  _2 = async function* (e, n) {
    for await (const a of D2(e)) yield* M2(a, n);
  },
  D2 = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const n = e.getReader();
    try {
      for (;;) {
        const { done: a, value: i } = await n.read();
        if (a) break;
        yield i;
      }
    } finally {
      await n.cancel();
    }
  },
  h1 = (e, n, a, i) => {
    const o = _2(e, n);
    let u = 0,
      f,
      d = (m) => {
        f || ((f = !0), i && i(m));
      };
    return new ReadableStream(
      {
        async pull(m) {
          try {
            const { done: h, value: g } = await o.next();
            if (h) {
              d(), m.close();
              return;
            }
            let y = g.byteLength;
            if (a) {
              let x = (u += y);
              a(x);
            }
            m.enqueue(new Uint8Array(g));
          } catch (h) {
            throw (d(h), h);
          }
        },
        cancel(m) {
          return d(m), o.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  qf =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Zx = qf && typeof ReadableStream == "function",
  N2 =
    qf &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (n) =>
            e.encode(n)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Jx = (e, ...n) => {
    try {
      return !!e(...n);
    } catch {
      return !1;
    }
  },
  z2 =
    Zx &&
    Jx(() => {
      let e = !1;
      const n = new Request(gn.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !n;
    }),
  m1 = 64 * 1024,
  Sm = Zx && Jx(() => W.isReadableStream(new Response("").body)),
  vf = { stream: Sm && ((e) => e.body) };
qf &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((n) => {
      !vf[n] &&
        (vf[n] = W.isFunction(e[n])
          ? (a) => a[n]()
          : (a, i) => {
              throw new je(
                `Response type '${n}' is not supported`,
                je.ERR_NOT_SUPPORT,
                i
              );
            });
    });
  })(new Response());
const k2 = async (e) => {
    if (e == null) return 0;
    if (W.isBlob(e)) return e.size;
    if (W.isSpecCompliantForm(e))
      return (
        await new Request(gn.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (W.isArrayBufferView(e) || W.isArrayBuffer(e)) return e.byteLength;
    if ((W.isURLSearchParams(e) && (e = e + ""), W.isString(e)))
      return (await N2(e)).byteLength;
  },
  B2 = async (e, n) => {
    const a = W.toFiniteNumber(e.getContentLength());
    return a ?? k2(n);
  },
  U2 =
    qf &&
    (async (e) => {
      let {
        url: n,
        method: a,
        data: i,
        signal: o,
        cancelToken: u,
        timeout: f,
        onDownloadProgress: d,
        onUploadProgress: m,
        responseType: h,
        headers: g,
        withCredentials: y = "same-origin",
        fetchOptions: x,
      } = Wx(e);
      h = h ? (h + "").toLowerCase() : "text";
      let C = O2([o, u && u.toAbortSignal()], f),
        b;
      const S =
        C &&
        C.unsubscribe &&
        (() => {
          C.unsubscribe();
        });
      let w;
      try {
        if (
          m &&
          z2 &&
          a !== "get" &&
          a !== "head" &&
          (w = await B2(g, i)) !== 0
        ) {
          let M = new Request(n, { method: "POST", body: i, duplex: "half" }),
            $;
          if (
            (W.isFormData(i) &&
              ($ = M.headers.get("content-type")) &&
              g.setContentType($),
            M.body)
          ) {
            const [L, K] = f1(w, yf(d1(m)));
            i = h1(M.body, m1, L, K);
          }
        }
        W.isString(y) || (y = y ? "include" : "omit");
        const O = "credentials" in Request.prototype;
        b = new Request(n, {
          ...x,
          signal: C,
          method: a.toUpperCase(),
          headers: g.normalize().toJSON(),
          body: i,
          duplex: "half",
          credentials: O ? y : void 0,
        });
        let _ = await fetch(b);
        const T = Sm && (h === "stream" || h === "response");
        if (Sm && (d || (T && S))) {
          const M = {};
          ["status", "statusText", "headers"].forEach((P) => {
            M[P] = _[P];
          });
          const $ = W.toFiniteNumber(_.headers.get("content-length")),
            [L, K] = (d && f1($, yf(d1(d), !0))) || [];
          _ = new Response(
            h1(_.body, m1, L, () => {
              K && K(), S && S();
            }),
            M
          );
        }
        h = h || "text";
        let D = await vf[W.findKey(vf, h) || "text"](_, e);
        return (
          !T && S && S(),
          await new Promise((M, $) => {
            Kx(M, $, {
              data: D,
              headers: kn.from(_.headers),
              status: _.status,
              statusText: _.statusText,
              config: e,
              request: b,
            });
          })
        );
      } catch (O) {
        throw (
          (S && S(),
          O && O.name === "TypeError" && /fetch/i.test(O.message)
            ? Object.assign(new je("Network Error", je.ERR_NETWORK, e, b), {
                cause: O.cause || O,
              })
            : je.from(O, O && O.code, e, b))
        );
      }
    }),
  xm = { http: WO, xhr: A2, fetch: U2 };
W.forEach(xm, (e, n) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: n });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: n });
  }
});
const g1 = (e) => `- ${e}`,
  L2 = (e) => W.isFunction(e) || e === null || e === !1,
  eE = {
    getAdapter: (e) => {
      e = W.isArray(e) ? e : [e];
      const { length: n } = e;
      let a, i;
      const o = {};
      for (let u = 0; u < n; u++) {
        a = e[u];
        let f;
        if (
          ((i = a),
          !L2(a) && ((i = xm[(f = String(a)).toLowerCase()]), i === void 0))
        )
          throw new je(`Unknown adapter '${f}'`);
        if (i) break;
        o[f || "#" + u] = i;
      }
      if (!i) {
        const u = Object.entries(o).map(
          ([d, m]) =>
            `adapter ${d} ` +
            (m === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let f = n
          ? u.length > 1
            ? `since :
` +
              u.map(g1).join(`
`)
            : " " + g1(u[0])
          : "as no adapter specified";
        throw new je(
          "There is no suitable adapter to dispatch the request " + f,
          "ERR_NOT_SUPPORT"
        );
      }
      return i;
    },
    adapters: xm,
  };
function kh(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Mo(null, e);
}
function y1(e) {
  return (
    kh(e),
    (e.headers = kn.from(e.headers)),
    (e.data = zh.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    eE
      .getAdapter(e.adapter || gu.adapter)(e)
      .then(
        function (i) {
          return (
            kh(e),
            (i.data = zh.call(e, e.transformResponse, i)),
            (i.headers = kn.from(i.headers)),
            i
          );
        },
        function (i) {
          return (
            Qx(i) ||
              (kh(e),
              i &&
                i.response &&
                ((i.response.data = zh.call(
                  e,
                  e.transformResponse,
                  i.response
                )),
                (i.response.headers = kn.from(i.response.headers)))),
            Promise.reject(i)
          );
        }
      )
  );
}
const tE = "1.7.9",
  Vf = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, n) => {
    Vf[e] = function (i) {
      return typeof i === e || "a" + (n < 1 ? "n " : " ") + e;
    };
  }
);
const v1 = {};
Vf.transitional = function (n, a, i) {
  function o(u, f) {
    return (
      "[Axios v" +
      tE +
      "] Transitional option '" +
      u +
      "'" +
      f +
      (i ? ". " + i : "")
    );
  }
  return (u, f, d) => {
    if (n === !1)
      throw new je(
        o(f, " has been removed" + (a ? " in " + a : "")),
        je.ERR_DEPRECATED
      );
    return (
      a &&
        !v1[f] &&
        ((v1[f] = !0),
        console.warn(
          o(
            f,
            " has been deprecated since v" +
              a +
              " and will be removed in the near future"
          )
        )),
      n ? n(u, f, d) : !0
    );
  };
};
Vf.spelling = function (n) {
  return (a, i) => (console.warn(`${i} is likely a misspelling of ${n}`), !0);
};
function j2(e, n, a) {
  if (typeof e != "object")
    throw new je("options must be an object", je.ERR_BAD_OPTION_VALUE);
  const i = Object.keys(e);
  let o = i.length;
  for (; o-- > 0; ) {
    const u = i[o],
      f = n[u];
    if (f) {
      const d = e[u],
        m = d === void 0 || f(d, u, e);
      if (m !== !0)
        throw new je("option " + u + " must be " + m, je.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (a !== !0) throw new je("Unknown option " + u, je.ERR_BAD_OPTION);
  }
}
const nf = { assertOptions: j2, validators: Vf },
  Nr = nf.validators;
let Wi = class {
  constructor(n) {
    (this.defaults = n),
      (this.interceptors = { request: new u1(), response: new u1() });
  }
  async request(n, a) {
    try {
      return await this._request(n, a);
    } catch (i) {
      if (i instanceof Error) {
        let o = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(o)
          : (o = new Error());
        const u = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          i.stack
            ? u &&
              !String(i.stack).endsWith(u.replace(/^.+\n.+\n/, "")) &&
              (i.stack +=
                `
` + u)
            : (i.stack = u);
        } catch {}
      }
      throw i;
    }
  }
  _request(n, a) {
    typeof n == "string" ? ((a = a || {}), (a.url = n)) : (a = n || {}),
      (a = ns(this.defaults, a));
    const { transitional: i, paramsSerializer: o, headers: u } = a;
    i !== void 0 &&
      nf.assertOptions(
        i,
        {
          silentJSONParsing: Nr.transitional(Nr.boolean),
          forcedJSONParsing: Nr.transitional(Nr.boolean),
          clarifyTimeoutError: Nr.transitional(Nr.boolean),
        },
        !1
      ),
      o != null &&
        (W.isFunction(o)
          ? (a.paramsSerializer = { serialize: o })
          : nf.assertOptions(
              o,
              { encode: Nr.function, serialize: Nr.function },
              !0
            )),
      nf.assertOptions(
        a,
        {
          baseUrl: Nr.spelling("baseURL"),
          withXsrfToken: Nr.spelling("withXSRFToken"),
        },
        !0
      ),
      (a.method = (a.method || this.defaults.method || "get").toLowerCase());
    let f = u && W.merge(u.common, u[a.method]);
    u &&
      W.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (b) => {
          delete u[b];
        }
      ),
      (a.headers = kn.concat(f, u));
    const d = [];
    let m = !0;
    this.interceptors.request.forEach(function (S) {
      (typeof S.runWhen == "function" && S.runWhen(a) === !1) ||
        ((m = m && S.synchronous), d.unshift(S.fulfilled, S.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function (S) {
      h.push(S.fulfilled, S.rejected);
    });
    let g,
      y = 0,
      x;
    if (!m) {
      const b = [y1.bind(this), void 0];
      for (
        b.unshift.apply(b, d),
          b.push.apply(b, h),
          x = b.length,
          g = Promise.resolve(a);
        y < x;

      )
        g = g.then(b[y++], b[y++]);
      return g;
    }
    x = d.length;
    let C = a;
    for (y = 0; y < x; ) {
      const b = d[y++],
        S = d[y++];
      try {
        C = b(C);
      } catch (w) {
        S.call(this, w);
        break;
      }
    }
    try {
      g = y1.call(this, C);
    } catch (b) {
      return Promise.reject(b);
    }
    for (y = 0, x = h.length; y < x; ) g = g.then(h[y++], h[y++]);
    return g;
  }
  getUri(n) {
    n = ns(this.defaults, n);
    const a = Xx(n.baseURL, n.url);
    return Gx(a, n.params, n.paramsSerializer);
  }
};
W.forEach(["delete", "get", "head", "options"], function (n) {
  Wi.prototype[n] = function (a, i) {
    return this.request(
      ns(i || {}, { method: n, url: a, data: (i || {}).data })
    );
  };
});
W.forEach(["post", "put", "patch"], function (n) {
  function a(i) {
    return function (u, f, d) {
      return this.request(
        ns(d || {}, {
          method: n,
          headers: i ? { "Content-Type": "multipart/form-data" } : {},
          url: u,
          data: f,
        })
      );
    };
  }
  (Wi.prototype[n] = a()), (Wi.prototype[n + "Form"] = a(!0));
});
let $2 = class nE {
  constructor(n) {
    if (typeof n != "function")
      throw new TypeError("executor must be a function.");
    let a;
    this.promise = new Promise(function (u) {
      a = u;
    });
    const i = this;
    this.promise.then((o) => {
      if (!i._listeners) return;
      let u = i._listeners.length;
      for (; u-- > 0; ) i._listeners[u](o);
      i._listeners = null;
    }),
      (this.promise.then = (o) => {
        let u;
        const f = new Promise((d) => {
          i.subscribe(d), (u = d);
        }).then(o);
        return (
          (f.cancel = function () {
            i.unsubscribe(u);
          }),
          f
        );
      }),
      n(function (u, f, d) {
        i.reason || ((i.reason = new Mo(u, f, d)), a(i.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(n) {
    if (this.reason) {
      n(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(n) : (this._listeners = [n]);
  }
  unsubscribe(n) {
    if (!this._listeners) return;
    const a = this._listeners.indexOf(n);
    a !== -1 && this._listeners.splice(a, 1);
  }
  toAbortSignal() {
    const n = new AbortController(),
      a = (i) => {
        n.abort(i);
      };
    return (
      this.subscribe(a),
      (n.signal.unsubscribe = () => this.unsubscribe(a)),
      n.signal
    );
  }
  static source() {
    let n;
    return {
      token: new nE(function (o) {
        n = o;
      }),
      cancel: n,
    };
  }
};
function H2(e) {
  return function (a) {
    return e.apply(null, a);
  };
}
function P2(e) {
  return W.isObject(e) && e.isAxiosError === !0;
}
const Em = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Em).forEach(([e, n]) => {
  Em[n] = e;
});
function rE(e) {
  const n = new Wi(e),
    a = zx(Wi.prototype.request, n);
  return (
    W.extend(a, Wi.prototype, n, { allOwnKeys: !0 }),
    W.extend(a, n, null, { allOwnKeys: !0 }),
    (a.create = function (o) {
      return rE(ns(e, o));
    }),
    a
  );
}
const Ht = rE(gu);
Ht.Axios = Wi;
Ht.CanceledError = Mo;
Ht.CancelToken = $2;
Ht.isCancel = Qx;
Ht.VERSION = tE;
Ht.toFormData = Ff;
Ht.AxiosError = je;
Ht.Cancel = Ht.CanceledError;
Ht.all = function (n) {
  return Promise.all(n);
};
Ht.spread = H2;
Ht.isAxiosError = P2;
Ht.mergeConfig = ns;
Ht.AxiosHeaders = kn;
Ht.formToJSON = (e) => Yx(W.isHTMLForm(e) ? new FormData(e) : e);
Ht.getAdapter = eE.getAdapter;
Ht.HttpStatusCode = Em;
Ht.default = Ht;
const {
    Axios: rk,
    AxiosError: ak,
    CanceledError: ik,
    isCancel: sk,
    CancelToken: ok,
    VERSION: lk,
    all: uk,
    Cancel: ck,
    isAxiosError: fk,
    spread: dk,
    toFormData: pk,
    AxiosHeaders: hk,
    HttpStatusCode: mk,
    formToJSON: gk,
    getAdapter: yk,
    mergeConfig: vk,
  } = Ht,
  F2 = "https://universe-alb-2081594021.eu-west-2.elb.amazonaws.com",
  q2 = Ht.create({ baseURL: `${F2}/api`, withCredentials: !0 }),
  Xs = async (e, n) => {
    const a = (o) => {
        const { data: u } = o;
        return u;
      },
      i = function (o) {
        return Promise.reject({
          message: o.message,
          code: o.code,
          response: o.response,
        });
      };
    return q2({ ...e, data: n })
      .then(a)
      .catch(i);
  },
  Pc = {
    signUp: () => "users/signup",
    login: () => "users/login",
    logout: () => "users/logout",
    checkAuth: () => "users/me",
  },
  b1 = {
    searchUsers: () => "users/search",
    getChatHistory: (e) => `chats/${e}/history`,
  };
class oi {}
un(oi, "checkAuth", () => Xs({ url: Pc.checkAuth(), method: "get" })),
  un(oi, "signUp", (n) => Xs({ url: Pc.signUp(), method: "post" }, n)),
  un(oi, "login", (n) => Xs({ url: Pc.login(), method: "post" }, n)),
  un(oi, "logout", () => Xs({ url: Pc.logout(), method: "post" }));
class li {}
un(li, "checkAuth", async () => await oi.checkAuth()),
  un(li, "signUp", async (n) => await oi.signUp(n)),
  un(li, "login", async (n) => await oi.login(n)),
  un(li, "logout", async () => await oi.logout());
const aE = E.createContext(null),
  _o = () => {
    const e = E.useContext(aE);
    if (!e) throw new Error("useAuth must be used within an AuthProvider");
    return e;
  },
  V2 = (e) => {
    const { children: n } = e,
      {
        data: a,
        isLoading: i,
        refetch: o,
        isError: u,
      } = og({
        queryKey: ["AUTH"],
        retry: !1,
        queryFn: () => li.checkAuth(),
        refetchOnMount: !0,
        refetchOnWindowFocus: !0,
      }),
      f = E.useMemo(() => !i && !u && !!a, [i, u, a]);
    return U.jsx(aE.Provider, {
      value: { user: a, authenticated: f, loading: i, refreshAuth: o },
      children: n,
    });
  },
  nu = { black: "#000", white: "#fff" },
  Hs = {
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    700: "#d32f2f",
    800: "#c62828",
  },
  Ps = {
    50: "#f3e5f5",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    700: "#7b1fa2",
  },
  Fs = {
    50: "#e3f2fd",
    200: "#90caf9",
    400: "#42a5f5",
    700: "#1976d2",
    800: "#1565c0",
  },
  qs = {
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    700: "#0288d1",
    900: "#01579b",
  },
  Vs = {
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
  },
  Bl = {
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    700: "#f57c00",
    900: "#e65100",
  },
  G2 = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  };
function Ea(e, ...n) {
  const a = new URL(`https://mui.com/production-error/?code=${e}`);
  return (
    n.forEach((i) => a.searchParams.append("args[]", i)),
    `Minified MUI error #${e}; visit ${a} for the full message.`
  );
}
const Gf = "$$material";
function bf() {
  return (
    (bf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var n = 1; n < arguments.length; n++) {
            var a = arguments[n];
            for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
          }
          return e;
        }),
    bf.apply(null, arguments)
  );
}
function I2(e) {
  if (e.sheet) return e.sheet;
  for (var n = 0; n < document.styleSheets.length; n++)
    if (document.styleSheets[n].ownerNode === e) return document.styleSheets[n];
}
function Y2(e) {
  var n = document.createElement("style");
  return (
    n.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && n.setAttribute("nonce", e.nonce),
    n.appendChild(document.createTextNode("")),
    n.setAttribute("data-s", ""),
    n
  );
}
var Q2 = (function () {
    function e(a) {
      var i = this;
      (this._insertTag = function (o) {
        var u;
        i.tags.length === 0
          ? i.insertionPoint
            ? (u = i.insertionPoint.nextSibling)
            : i.prepend
            ? (u = i.container.firstChild)
            : (u = i.before)
          : (u = i.tags[i.tags.length - 1].nextSibling),
          i.container.insertBefore(o, u),
          i.tags.push(o);
      }),
        (this.isSpeedy = a.speedy === void 0 ? !0 : a.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = a.nonce),
        (this.key = a.key),
        (this.container = a.container),
        (this.prepend = a.prepend),
        (this.insertionPoint = a.insertionPoint),
        (this.before = null);
    }
    var n = e.prototype;
    return (
      (n.hydrate = function (i) {
        i.forEach(this._insertTag);
      }),
      (n.insert = function (i) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(Y2(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var u = I2(o);
          try {
            u.insertRule(i, u.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(i));
        this.ctr++;
      }),
      (n.flush = function () {
        this.tags.forEach(function (i) {
          var o;
          return (o = i.parentNode) == null ? void 0 : o.removeChild(i);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  hn = "-ms-",
  Sf = "-moz-",
  tt = "-webkit-",
  iE = "comm",
  dg = "rule",
  pg = "decl",
  K2 = "@import",
  sE = "@keyframes",
  X2 = "@layer",
  W2 = Math.abs,
  If = String.fromCharCode,
  Z2 = Object.assign;
function J2(e, n) {
  return cn(e, 0) ^ 45
    ? (((((((n << 2) ^ cn(e, 0)) << 2) ^ cn(e, 1)) << 2) ^ cn(e, 2)) << 2) ^
        cn(e, 3)
    : 0;
}
function oE(e) {
  return e.trim();
}
function e5(e, n) {
  return (e = n.exec(e)) ? e[0] : e;
}
function nt(e, n, a) {
  return e.replace(n, a);
}
function Rm(e, n) {
  return e.indexOf(n);
}
function cn(e, n) {
  return e.charCodeAt(n) | 0;
}
function ru(e, n, a) {
  return e.slice(n, a);
}
function $r(e) {
  return e.length;
}
function hg(e) {
  return e.length;
}
function Fc(e, n) {
  return n.push(e), e;
}
function t5(e, n) {
  return e.map(n).join("");
}
var Yf = 1,
  go = 1,
  lE = 0,
  Bn = 0,
  Yt = 0,
  Do = "";
function Qf(e, n, a, i, o, u, f) {
  return {
    value: e,
    root: n,
    parent: a,
    type: i,
    props: o,
    children: u,
    line: Yf,
    column: go,
    length: f,
    return: "",
  };
}
function Ul(e, n) {
  return Z2(Qf("", null, null, "", null, null, 0), e, { length: -e.length }, n);
}
function n5() {
  return Yt;
}
function r5() {
  return (
    (Yt = Bn > 0 ? cn(Do, --Bn) : 0), go--, Yt === 10 && ((go = 1), Yf--), Yt
  );
}
function Vn() {
  return (
    (Yt = Bn < lE ? cn(Do, Bn++) : 0), go++, Yt === 10 && ((go = 1), Yf++), Yt
  );
}
function Ir() {
  return cn(Do, Bn);
}
function rf() {
  return Bn;
}
function yu(e, n) {
  return ru(Do, e, n);
}
function au(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function uE(e) {
  return (Yf = go = 1), (lE = $r((Do = e))), (Bn = 0), [];
}
function cE(e) {
  return (Do = ""), e;
}
function af(e) {
  return oE(yu(Bn - 1, Cm(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function a5(e) {
  for (; (Yt = Ir()) && Yt < 33; ) Vn();
  return au(e) > 2 || au(Yt) > 3 ? "" : " ";
}
function i5(e, n) {
  for (
    ;
    --n &&
    Vn() &&
    !(Yt < 48 || Yt > 102 || (Yt > 57 && Yt < 65) || (Yt > 70 && Yt < 97));

  );
  return yu(e, rf() + (n < 6 && Ir() == 32 && Vn() == 32));
}
function Cm(e) {
  for (; Vn(); )
    switch (Yt) {
      case e:
        return Bn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Cm(Yt);
        break;
      case 40:
        e === 41 && Cm(e);
        break;
      case 92:
        Vn();
        break;
    }
  return Bn;
}
function s5(e, n) {
  for (; Vn() && e + Yt !== 57; ) if (e + Yt === 84 && Ir() === 47) break;
  return "/*" + yu(n, Bn - 1) + "*" + If(e === 47 ? e : Vn());
}
function o5(e) {
  for (; !au(Ir()); ) Vn();
  return yu(e, Bn);
}
function l5(e) {
  return cE(sf("", null, null, null, [""], (e = uE(e)), 0, [0], e));
}
function sf(e, n, a, i, o, u, f, d, m) {
  for (
    var h = 0,
      g = 0,
      y = f,
      x = 0,
      C = 0,
      b = 0,
      S = 1,
      w = 1,
      O = 1,
      _ = 0,
      T = "",
      D = o,
      M = u,
      $ = i,
      L = T;
    w;

  )
    switch (((b = _), (_ = Vn()))) {
      case 40:
        if (b != 108 && cn(L, y - 1) == 58) {
          Rm((L += nt(af(_), "&", "&\f")), "&\f") != -1 && (O = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        L += af(_);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        L += a5(b);
        break;
      case 92:
        L += i5(rf() - 1, 7);
        continue;
      case 47:
        switch (Ir()) {
          case 42:
          case 47:
            Fc(u5(s5(Vn(), rf()), n, a), m);
            break;
          default:
            L += "/";
        }
        break;
      case 123 * S:
        d[h++] = $r(L) * O;
      case 125 * S:
      case 59:
      case 0:
        switch (_) {
          case 0:
          case 125:
            w = 0;
          case 59 + g:
            O == -1 && (L = nt(L, /\f/g, "")),
              C > 0 &&
                $r(L) - y &&
                Fc(
                  C > 32
                    ? x1(L + ";", i, a, y - 1)
                    : x1(nt(L, " ", "") + ";", i, a, y - 2),
                  m
                );
            break;
          case 59:
            L += ";";
          default:
            if (
              (Fc(($ = S1(L, n, a, h, g, o, d, T, (D = []), (M = []), y)), u),
              _ === 123)
            )
              if (g === 0) sf(L, n, $, $, D, u, y, d, M);
              else
                switch (x === 99 && cn(L, 3) === 110 ? 100 : x) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    sf(
                      e,
                      $,
                      $,
                      i && Fc(S1(e, $, $, 0, 0, o, d, T, o, (D = []), y), M),
                      o,
                      M,
                      y,
                      d,
                      i ? D : M
                    );
                    break;
                  default:
                    sf(L, $, $, $, [""], M, 0, d, M);
                }
        }
        (h = g = C = 0), (S = O = 1), (T = L = ""), (y = f);
        break;
      case 58:
        (y = 1 + $r(L)), (C = b);
      default:
        if (S < 1) {
          if (_ == 123) --S;
          else if (_ == 125 && S++ == 0 && r5() == 125) continue;
        }
        switch (((L += If(_)), _ * S)) {
          case 38:
            O = g > 0 ? 1 : ((L += "\f"), -1);
            break;
          case 44:
            (d[h++] = ($r(L) - 1) * O), (O = 1);
            break;
          case 64:
            Ir() === 45 && (L += af(Vn())),
              (x = Ir()),
              (g = y = $r((T = L += o5(rf())))),
              _++;
            break;
          case 45:
            b === 45 && $r(L) == 2 && (S = 0);
        }
    }
  return u;
}
function S1(e, n, a, i, o, u, f, d, m, h, g) {
  for (
    var y = o - 1, x = o === 0 ? u : [""], C = hg(x), b = 0, S = 0, w = 0;
    b < i;
    ++b
  )
    for (var O = 0, _ = ru(e, y + 1, (y = W2((S = f[b])))), T = e; O < C; ++O)
      (T = oE(S > 0 ? x[O] + " " + _ : nt(_, /&\f/g, x[O]))) && (m[w++] = T);
  return Qf(e, n, a, o === 0 ? dg : d, m, h, g);
}
function u5(e, n, a) {
  return Qf(e, n, a, iE, If(n5()), ru(e, 2, -2), 0);
}
function x1(e, n, a, i) {
  return Qf(e, n, a, pg, ru(e, 0, i), ru(e, i + 1, -1), i);
}
function Js(e, n) {
  for (var a = "", i = hg(e), o = 0; o < i; o++) a += n(e[o], o, e, n) || "";
  return a;
}
function c5(e, n, a, i) {
  switch (e.type) {
    case X2:
      if (e.children.length) break;
    case K2:
    case pg:
      return (e.return = e.return || e.value);
    case iE:
      return "";
    case sE:
      return (e.return = e.value + "{" + Js(e.children, i) + "}");
    case dg:
      e.value = e.props.join(",");
  }
  return $r((a = Js(e.children, i)))
    ? (e.return = e.value + "{" + a + "}")
    : "";
}
function f5(e) {
  var n = hg(e);
  return function (a, i, o, u) {
    for (var f = "", d = 0; d < n; d++) f += e[d](a, i, o, u) || "";
    return f;
  };
}
function d5(e) {
  return function (n) {
    n.root || ((n = n.return) && e(n));
  };
}
function fE(e) {
  var n = Object.create(null);
  return function (a) {
    return n[a] === void 0 && (n[a] = e(a)), n[a];
  };
}
var p5 = function (n, a, i) {
    for (
      var o = 0, u = 0;
      (o = u), (u = Ir()), o === 38 && u === 12 && (a[i] = 1), !au(u);

    )
      Vn();
    return yu(n, Bn);
  },
  h5 = function (n, a) {
    var i = -1,
      o = 44;
    do
      switch (au(o)) {
        case 0:
          o === 38 && Ir() === 12 && (a[i] = 1), (n[i] += p5(Bn - 1, a, i));
          break;
        case 2:
          n[i] += af(o);
          break;
        case 4:
          if (o === 44) {
            (n[++i] = Ir() === 58 ? "&\f" : ""), (a[i] = n[i].length);
            break;
          }
        default:
          n[i] += If(o);
      }
    while ((o = Vn()));
    return n;
  },
  m5 = function (n, a) {
    return cE(h5(uE(n), a));
  },
  E1 = new WeakMap(),
  g5 = function (n) {
    if (!(n.type !== "rule" || !n.parent || n.length < 1)) {
      for (
        var a = n.value,
          i = n.parent,
          o = n.column === i.column && n.line === i.line;
        i.type !== "rule";

      )
        if (((i = i.parent), !i)) return;
      if (
        !(n.props.length === 1 && a.charCodeAt(0) !== 58 && !E1.get(i)) &&
        !o
      ) {
        E1.set(n, !0);
        for (
          var u = [], f = m5(a, u), d = i.props, m = 0, h = 0;
          m < f.length;
          m++
        )
          for (var g = 0; g < d.length; g++, h++)
            n.props[h] = u[m] ? f[m].replace(/&\f/g, d[g]) : d[g] + " " + f[m];
      }
    }
  },
  y5 = function (n) {
    if (n.type === "decl") {
      var a = n.value;
      a.charCodeAt(0) === 108 &&
        a.charCodeAt(2) === 98 &&
        ((n.return = ""), (n.value = ""));
    }
  };
function dE(e, n) {
  switch (J2(e, n)) {
    case 5103:
      return tt + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return tt + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return tt + e + Sf + e + hn + e + e;
    case 6828:
    case 4268:
      return tt + e + hn + e + e;
    case 6165:
      return tt + e + hn + "flex-" + e + e;
    case 5187:
      return (
        tt + e + nt(e, /(\w+).+(:[^]+)/, tt + "box-$1$2" + hn + "flex-$1$2") + e
      );
    case 5443:
      return tt + e + hn + "flex-item-" + nt(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        tt +
        e +
        hn +
        "flex-line-pack" +
        nt(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return tt + e + hn + nt(e, "shrink", "negative") + e;
    case 5292:
      return tt + e + hn + nt(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        tt +
        "box-" +
        nt(e, "-grow", "") +
        tt +
        e +
        hn +
        nt(e, "grow", "positive") +
        e
      );
    case 4554:
      return tt + nt(e, /([^-])(transform)/g, "$1" + tt + "$2") + e;
    case 6187:
      return (
        nt(
          nt(nt(e, /(zoom-|grab)/, tt + "$1"), /(image-set)/, tt + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return nt(e, /(image-set\([^]*)/, tt + "$1$`$1");
    case 4968:
      return (
        nt(
          nt(e, /(.+:)(flex-)?(.*)/, tt + "box-pack:$3" + hn + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        tt +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return nt(e, /(.+)-inline(.+)/, tt + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if ($r(e) - 1 - n > 6)
        switch (cn(e, n + 1)) {
          case 109:
            if (cn(e, n + 4) !== 45) break;
          case 102:
            return (
              nt(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  tt +
                  "$2-$3$1" +
                  Sf +
                  (cn(e, n + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Rm(e, "stretch")
              ? dE(nt(e, "stretch", "fill-available"), n) + e
              : e;
        }
      break;
    case 4949:
      if (cn(e, n + 1) !== 115) break;
    case 6444:
      switch (cn(e, $r(e) - 3 - (~Rm(e, "!important") && 10))) {
        case 107:
          return nt(e, ":", ":" + tt) + e;
        case 101:
          return (
            nt(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                tt +
                (cn(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                tt +
                "$2$3$1" +
                hn +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (cn(e, n + 11)) {
        case 114:
          return tt + e + hn + nt(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return tt + e + hn + nt(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return tt + e + hn + nt(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return tt + e + hn + e + e;
  }
  return e;
}
var v5 = function (n, a, i, o) {
    if (n.length > -1 && !n.return)
      switch (n.type) {
        case pg:
          n.return = dE(n.value, n.length);
          break;
        case sE:
          return Js([Ul(n, { value: nt(n.value, "@", "@" + tt) })], o);
        case dg:
          if (n.length)
            return t5(n.props, function (u) {
              switch (e5(u, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Js(
                    [Ul(n, { props: [nt(u, /:(read-\w+)/, ":" + Sf + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return Js(
                    [
                      Ul(n, {
                        props: [nt(u, /:(plac\w+)/, ":" + tt + "input-$1")],
                      }),
                      Ul(n, { props: [nt(u, /:(plac\w+)/, ":" + Sf + "$1")] }),
                      Ul(n, { props: [nt(u, /:(plac\w+)/, hn + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  b5 = [v5],
  S5 = function (n) {
    var a = n.key;
    if (a === "css") {
      var i = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(i, function (S) {
        var w = S.getAttribute("data-emotion");
        w.indexOf(" ") !== -1 &&
          (document.head.appendChild(S), S.setAttribute("data-s", ""));
      });
    }
    var o = n.stylisPlugins || b5,
      u = {},
      f,
      d = [];
    (f = n.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + a + ' "]'),
        function (S) {
          for (
            var w = S.getAttribute("data-emotion").split(" "), O = 1;
            O < w.length;
            O++
          )
            u[w[O]] = !0;
          d.push(S);
        }
      );
    var m,
      h = [g5, y5];
    {
      var g,
        y = [
          c5,
          d5(function (S) {
            g.insert(S);
          }),
        ],
        x = f5(h.concat(o, y)),
        C = function (w) {
          return Js(l5(w), x);
        };
      m = function (w, O, _, T) {
        (g = _),
          C(w ? w + "{" + O.styles + "}" : O.styles),
          T && (b.inserted[O.name] = !0);
      };
    }
    var b = {
      key: a,
      sheet: new Q2({
        key: a,
        container: f,
        nonce: n.nonce,
        speedy: n.speedy,
        prepend: n.prepend,
        insertionPoint: n.insertionPoint,
      }),
      nonce: n.nonce,
      inserted: u,
      registered: {},
      insert: m,
    };
    return b.sheet.hydrate(d), b;
  },
  Bh = { exports: {} },
  it = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var R1;
function x5() {
  if (R1) return it;
  R1 = 1;
  var e = typeof Symbol == "function" && Symbol.for,
    n = e ? Symbol.for("react.element") : 60103,
    a = e ? Symbol.for("react.portal") : 60106,
    i = e ? Symbol.for("react.fragment") : 60107,
    o = e ? Symbol.for("react.strict_mode") : 60108,
    u = e ? Symbol.for("react.profiler") : 60114,
    f = e ? Symbol.for("react.provider") : 60109,
    d = e ? Symbol.for("react.context") : 60110,
    m = e ? Symbol.for("react.async_mode") : 60111,
    h = e ? Symbol.for("react.concurrent_mode") : 60111,
    g = e ? Symbol.for("react.forward_ref") : 60112,
    y = e ? Symbol.for("react.suspense") : 60113,
    x = e ? Symbol.for("react.suspense_list") : 60120,
    C = e ? Symbol.for("react.memo") : 60115,
    b = e ? Symbol.for("react.lazy") : 60116,
    S = e ? Symbol.for("react.block") : 60121,
    w = e ? Symbol.for("react.fundamental") : 60117,
    O = e ? Symbol.for("react.responder") : 60118,
    _ = e ? Symbol.for("react.scope") : 60119;
  function T(M) {
    if (typeof M == "object" && M !== null) {
      var $ = M.$$typeof;
      switch ($) {
        case n:
          switch (((M = M.type), M)) {
            case m:
            case h:
            case i:
            case u:
            case o:
            case y:
              return M;
            default:
              switch (((M = M && M.$$typeof), M)) {
                case d:
                case g:
                case b:
                case C:
                case f:
                  return M;
                default:
                  return $;
              }
          }
        case a:
          return $;
      }
    }
  }
  function D(M) {
    return T(M) === h;
  }
  return (
    (it.AsyncMode = m),
    (it.ConcurrentMode = h),
    (it.ContextConsumer = d),
    (it.ContextProvider = f),
    (it.Element = n),
    (it.ForwardRef = g),
    (it.Fragment = i),
    (it.Lazy = b),
    (it.Memo = C),
    (it.Portal = a),
    (it.Profiler = u),
    (it.StrictMode = o),
    (it.Suspense = y),
    (it.isAsyncMode = function (M) {
      return D(M) || T(M) === m;
    }),
    (it.isConcurrentMode = D),
    (it.isContextConsumer = function (M) {
      return T(M) === d;
    }),
    (it.isContextProvider = function (M) {
      return T(M) === f;
    }),
    (it.isElement = function (M) {
      return typeof M == "object" && M !== null && M.$$typeof === n;
    }),
    (it.isForwardRef = function (M) {
      return T(M) === g;
    }),
    (it.isFragment = function (M) {
      return T(M) === i;
    }),
    (it.isLazy = function (M) {
      return T(M) === b;
    }),
    (it.isMemo = function (M) {
      return T(M) === C;
    }),
    (it.isPortal = function (M) {
      return T(M) === a;
    }),
    (it.isProfiler = function (M) {
      return T(M) === u;
    }),
    (it.isStrictMode = function (M) {
      return T(M) === o;
    }),
    (it.isSuspense = function (M) {
      return T(M) === y;
    }),
    (it.isValidElementType = function (M) {
      return (
        typeof M == "string" ||
        typeof M == "function" ||
        M === i ||
        M === h ||
        M === u ||
        M === o ||
        M === y ||
        M === x ||
        (typeof M == "object" &&
          M !== null &&
          (M.$$typeof === b ||
            M.$$typeof === C ||
            M.$$typeof === f ||
            M.$$typeof === d ||
            M.$$typeof === g ||
            M.$$typeof === w ||
            M.$$typeof === O ||
            M.$$typeof === _ ||
            M.$$typeof === S))
      );
    }),
    (it.typeOf = T),
    it
  );
}
var C1;
function E5() {
  return C1 || ((C1 = 1), (Bh.exports = x5())), Bh.exports;
}
var Uh, w1;
function R5() {
  if (w1) return Uh;
  w1 = 1;
  var e = E5(),
    n = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    a = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    i = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    o = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    u = {};
  (u[e.ForwardRef] = i), (u[e.Memo] = o);
  function f(b) {
    return e.isMemo(b) ? o : u[b.$$typeof] || n;
  }
  var d = Object.defineProperty,
    m = Object.getOwnPropertyNames,
    h = Object.getOwnPropertySymbols,
    g = Object.getOwnPropertyDescriptor,
    y = Object.getPrototypeOf,
    x = Object.prototype;
  function C(b, S, w) {
    if (typeof S != "string") {
      if (x) {
        var O = y(S);
        O && O !== x && C(b, O, w);
      }
      var _ = m(S);
      h && (_ = _.concat(h(S)));
      for (var T = f(b), D = f(S), M = 0; M < _.length; ++M) {
        var $ = _[M];
        if (!a[$] && !(w && w[$]) && !(D && D[$]) && !(T && T[$])) {
          var L = g(S, $);
          try {
            d(b, $, L);
          } catch {}
        }
      }
    }
    return b;
  }
  return (Uh = C), Uh;
}
R5();
var C5 = !0;
function pE(e, n, a) {
  var i = "";
  return (
    a.split(" ").forEach(function (o) {
      e[o] !== void 0 ? n.push(e[o] + ";") : o && (i += o + " ");
    }),
    i
  );
}
var mg = function (n, a, i) {
    var o = n.key + "-" + a.name;
    (i === !1 || C5 === !1) &&
      n.registered[o] === void 0 &&
      (n.registered[o] = a.styles);
  },
  gg = function (n, a, i) {
    mg(n, a, i);
    var o = n.key + "-" + a.name;
    if (n.inserted[a.name] === void 0) {
      var u = a;
      do n.insert(a === u ? "." + o : "", u, n.sheet, !0), (u = u.next);
      while (u !== void 0);
    }
  };
function w5(e) {
  for (var n = 0, a, i = 0, o = e.length; o >= 4; ++i, o -= 4)
    (a =
      (e.charCodeAt(i) & 255) |
      ((e.charCodeAt(++i) & 255) << 8) |
      ((e.charCodeAt(++i) & 255) << 16) |
      ((e.charCodeAt(++i) & 255) << 24)),
      (a = (a & 65535) * 1540483477 + (((a >>> 16) * 59797) << 16)),
      (a ^= a >>> 24),
      (n =
        ((a & 65535) * 1540483477 + (((a >>> 16) * 59797) << 16)) ^
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      n ^= (e.charCodeAt(i + 2) & 255) << 16;
    case 2:
      n ^= (e.charCodeAt(i + 1) & 255) << 8;
    case 1:
      (n ^= e.charCodeAt(i) & 255),
        (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16));
  }
  return (
    (n ^= n >>> 13),
    (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
    ((n ^ (n >>> 15)) >>> 0).toString(36)
  );
}
var T5 = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  A5 = /[A-Z]|^ms/g,
  O5 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  hE = function (n) {
    return n.charCodeAt(1) === 45;
  },
  T1 = function (n) {
    return n != null && typeof n != "boolean";
  },
  Lh = fE(function (e) {
    return hE(e) ? e : e.replace(A5, "-$&").toLowerCase();
  }),
  A1 = function (n, a) {
    switch (n) {
      case "animation":
      case "animationName":
        if (typeof a == "string")
          return a.replace(O5, function (i, o, u) {
            return (Hr = { name: o, styles: u, next: Hr }), o;
          });
    }
    return T5[n] !== 1 && !hE(n) && typeof a == "number" && a !== 0
      ? a + "px"
      : a;
  };
function iu(e, n, a) {
  if (a == null) return "";
  var i = a;
  if (i.__emotion_styles !== void 0) return i;
  switch (typeof a) {
    case "boolean":
      return "";
    case "object": {
      var o = a;
      if (o.anim === 1)
        return (Hr = { name: o.name, styles: o.styles, next: Hr }), o.name;
      var u = a;
      if (u.styles !== void 0) {
        var f = u.next;
        if (f !== void 0)
          for (; f !== void 0; )
            (Hr = { name: f.name, styles: f.styles, next: Hr }), (f = f.next);
        var d = u.styles + ";";
        return d;
      }
      return M5(e, n, a);
    }
    case "function": {
      if (e !== void 0) {
        var m = Hr,
          h = a(e);
        return (Hr = m), iu(e, n, h);
      }
      break;
    }
  }
  var g = a;
  if (n == null) return g;
  var y = n[g];
  return y !== void 0 ? y : g;
}
function M5(e, n, a) {
  var i = "";
  if (Array.isArray(a))
    for (var o = 0; o < a.length; o++) i += iu(e, n, a[o]) + ";";
  else
    for (var u in a) {
      var f = a[u];
      if (typeof f != "object") {
        var d = f;
        n != null && n[d] !== void 0
          ? (i += u + "{" + n[d] + "}")
          : T1(d) && (i += Lh(u) + ":" + A1(u, d) + ";");
      } else if (
        Array.isArray(f) &&
        typeof f[0] == "string" &&
        (n == null || n[f[0]] === void 0)
      )
        for (var m = 0; m < f.length; m++)
          T1(f[m]) && (i += Lh(u) + ":" + A1(u, f[m]) + ";");
      else {
        var h = iu(e, n, f);
        switch (u) {
          case "animation":
          case "animationName": {
            i += Lh(u) + ":" + h + ";";
            break;
          }
          default:
            i += u + "{" + h + "}";
        }
      }
    }
  return i;
}
var O1 = /label:\s*([^\s;{]+)\s*(;|$)/g,
  Hr;
function vu(e, n, a) {
  if (
    e.length === 1 &&
    typeof e[0] == "object" &&
    e[0] !== null &&
    e[0].styles !== void 0
  )
    return e[0];
  var i = !0,
    o = "";
  Hr = void 0;
  var u = e[0];
  if (u == null || u.raw === void 0) (i = !1), (o += iu(a, n, u));
  else {
    var f = u;
    o += f[0];
  }
  for (var d = 1; d < e.length; d++)
    if (((o += iu(a, n, e[d])), i)) {
      var m = u;
      o += m[d];
    }
  O1.lastIndex = 0;
  for (var h = "", g; (g = O1.exec(o)) !== null; ) h += "-" + g[1];
  var y = w5(o) + h;
  return { name: y, styles: o, next: Hr };
}
var _5 = function (n) {
    return n();
  },
  mE = em.useInsertionEffect ? em.useInsertionEffect : !1,
  gE = mE || _5,
  M1 = mE || E.useLayoutEffect,
  yE = E.createContext(typeof HTMLElement < "u" ? S5({ key: "css" }) : null);
yE.Provider;
var yg = function (n) {
    return E.forwardRef(function (a, i) {
      var o = E.useContext(yE);
      return n(a, o, i);
    });
  },
  Kf = E.createContext({}),
  vg = {}.hasOwnProperty,
  wm = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  D5 = function (n, a) {
    var i = {};
    for (var o in a) vg.call(a, o) && (i[o] = a[o]);
    return (i[wm] = n), i;
  },
  N5 = function (n) {
    var a = n.cache,
      i = n.serialized,
      o = n.isStringTag;
    return (
      mg(a, i, o),
      gE(function () {
        return gg(a, i, o);
      }),
      null
    );
  },
  z5 = yg(function (e, n, a) {
    var i = e.css;
    typeof i == "string" && n.registered[i] !== void 0 && (i = n.registered[i]);
    var o = e[wm],
      u = [i],
      f = "";
    typeof e.className == "string"
      ? (f = pE(n.registered, u, e.className))
      : e.className != null && (f = e.className + " ");
    var d = vu(u, void 0, E.useContext(Kf));
    f += n.key + "-" + d.name;
    var m = {};
    for (var h in e) vg.call(e, h) && h !== "css" && h !== wm && (m[h] = e[h]);
    return (
      (m.className = f),
      a && (m.ref = a),
      E.createElement(
        E.Fragment,
        null,
        E.createElement(N5, {
          cache: n,
          serialized: d,
          isStringTag: typeof o == "string",
        }),
        E.createElement(o, m)
      )
    );
  }),
  k5 = z5,
  _1 = function (n, a) {
    var i = arguments;
    if (a == null || !vg.call(a, "css"))
      return E.createElement.apply(void 0, i);
    var o = i.length,
      u = new Array(o);
    (u[0] = k5), (u[1] = D5(n, a));
    for (var f = 2; f < o; f++) u[f] = i[f];
    return E.createElement.apply(null, u);
  };
(function (e) {
  var n;
  n || (n = e.JSX || (e.JSX = {}));
})(_1 || (_1 = {}));
var B5 = yg(function (e, n) {
  var a = e.styles,
    i = vu([a], void 0, E.useContext(Kf)),
    o = E.useRef();
  return (
    M1(
      function () {
        var u = n.key + "-global",
          f = new n.sheet.constructor({
            key: u,
            nonce: n.sheet.nonce,
            container: n.sheet.container,
            speedy: n.sheet.isSpeedy,
          }),
          d = !1,
          m = document.querySelector(
            'style[data-emotion="' + u + " " + i.name + '"]'
          );
        return (
          n.sheet.tags.length && (f.before = n.sheet.tags[0]),
          m !== null &&
            ((d = !0), m.setAttribute("data-emotion", u), f.hydrate([m])),
          (o.current = [f, d]),
          function () {
            f.flush();
          }
        );
      },
      [n]
    ),
    M1(
      function () {
        var u = o.current,
          f = u[0],
          d = u[1];
        if (d) {
          u[1] = !1;
          return;
        }
        if ((i.next !== void 0 && gg(n, i.next, !0), f.tags.length)) {
          var m = f.tags[f.tags.length - 1].nextElementSibling;
          (f.before = m), f.flush();
        }
        n.insert("", i, f, !1);
      },
      [n, i.name]
    ),
    null
  );
});
function bg() {
  for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++)
    n[a] = arguments[a];
  return vu(n);
}
function bu() {
  var e = bg.apply(void 0, arguments),
    n = "animation-" + e.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + e.styles + "}",
    anim: 1,
    toString: function () {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    },
  };
}
var U5 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  L5 = fE(function (e) {
    return (
      U5.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  j5 = L5,
  $5 = function (n) {
    return n !== "theme";
  },
  D1 = function (n) {
    return typeof n == "string" && n.charCodeAt(0) > 96 ? j5 : $5;
  },
  N1 = function (n, a, i) {
    var o;
    if (a) {
      var u = a.shouldForwardProp;
      o =
        n.__emotion_forwardProp && u
          ? function (f) {
              return n.__emotion_forwardProp(f) && u(f);
            }
          : u;
    }
    return typeof o != "function" && i && (o = n.__emotion_forwardProp), o;
  },
  H5 = function (n) {
    var a = n.cache,
      i = n.serialized,
      o = n.isStringTag;
    return (
      mg(a, i, o),
      gE(function () {
        return gg(a, i, o);
      }),
      null
    );
  },
  P5 = function e(n, a) {
    var i = n.__emotion_real === n,
      o = (i && n.__emotion_base) || n,
      u,
      f;
    a !== void 0 && ((u = a.label), (f = a.target));
    var d = N1(n, a, i),
      m = d || D1(o),
      h = !m("as");
    return function () {
      var g = arguments,
        y =
          i && n.__emotion_styles !== void 0 ? n.__emotion_styles.slice(0) : [];
      if (
        (u !== void 0 && y.push("label:" + u + ";"),
        g[0] == null || g[0].raw === void 0)
      )
        y.push.apply(y, g);
      else {
        var x = g[0];
        y.push(x[0]);
        for (var C = g.length, b = 1; b < C; b++) y.push(g[b], x[b]);
      }
      var S = yg(function (w, O, _) {
        var T = (h && w.as) || o,
          D = "",
          M = [],
          $ = w;
        if (w.theme == null) {
          $ = {};
          for (var L in w) $[L] = w[L];
          $.theme = E.useContext(Kf);
        }
        typeof w.className == "string"
          ? (D = pE(O.registered, M, w.className))
          : w.className != null && (D = w.className + " ");
        var K = vu(y.concat(M), O.registered, $);
        (D += O.key + "-" + K.name), f !== void 0 && (D += " " + f);
        var P = h && d === void 0 ? D1(T) : m,
          R = {};
        for (var V in w) (h && V === "as") || (P(V) && (R[V] = w[V]));
        return (
          (R.className = D),
          _ && (R.ref = _),
          E.createElement(
            E.Fragment,
            null,
            E.createElement(H5, {
              cache: O,
              serialized: K,
              isStringTag: typeof T == "string",
            }),
            E.createElement(T, R)
          )
        );
      });
      return (
        (S.displayName =
          u !== void 0
            ? u
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (S.defaultProps = n.defaultProps),
        (S.__emotion_real = S),
        (S.__emotion_base = o),
        (S.__emotion_styles = y),
        (S.__emotion_forwardProp = d),
        Object.defineProperty(S, "toString", {
          value: function () {
            return "." + f;
          },
        }),
        (S.withComponent = function (w, O) {
          var _ = e(w, bf({}, a, O, { shouldForwardProp: N1(S, O, !0) }));
          return _.apply(void 0, y);
        }),
        S
      );
    };
  },
  F5 = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  Tm = P5.bind(null);
F5.forEach(function (e) {
  Tm[e] = Tm(e);
});
function q5(e) {
  return e == null || Object.keys(e).length === 0;
}
function V5(e) {
  const { styles: n, defaultTheme: a = {} } = e,
    i = typeof n == "function" ? (o) => n(q5(o) ? a : o) : n;
  return U.jsx(B5, { styles: i });
}
/**
 * @mui/styled-engine v6.4.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function vE(e, n) {
  return Tm(e, n);
}
function G5(e, n) {
  Array.isArray(e.__emotion_styles) &&
    (e.__emotion_styles = n(e.__emotion_styles));
}
const z1 = [];
function k1(e) {
  return (z1[0] = e), vu(z1);
}
var jh = { exports: {} },
  ct = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var B1;
function I5() {
  if (B1) return ct;
  B1 = 1;
  var e = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    u = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    d = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    h = Symbol.for("react.suspense_list"),
    g = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    x = Symbol.for("react.offscreen"),
    C = Symbol.for("react.client.reference");
  function b(S) {
    if (typeof S == "object" && S !== null) {
      var w = S.$$typeof;
      switch (w) {
        case e:
          switch (((S = S.type), S)) {
            case a:
            case o:
            case i:
            case m:
            case h:
              return S;
            default:
              switch (((S = S && S.$$typeof), S)) {
                case f:
                case d:
                case y:
                case g:
                  return S;
                case u:
                  return S;
                default:
                  return w;
              }
          }
        case n:
          return w;
      }
    }
  }
  return (
    (ct.ContextConsumer = u),
    (ct.ContextProvider = f),
    (ct.Element = e),
    (ct.ForwardRef = d),
    (ct.Fragment = a),
    (ct.Lazy = y),
    (ct.Memo = g),
    (ct.Portal = n),
    (ct.Profiler = o),
    (ct.StrictMode = i),
    (ct.Suspense = m),
    (ct.SuspenseList = h),
    (ct.isContextConsumer = function (S) {
      return b(S) === u;
    }),
    (ct.isContextProvider = function (S) {
      return b(S) === f;
    }),
    (ct.isElement = function (S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }),
    (ct.isForwardRef = function (S) {
      return b(S) === d;
    }),
    (ct.isFragment = function (S) {
      return b(S) === a;
    }),
    (ct.isLazy = function (S) {
      return b(S) === y;
    }),
    (ct.isMemo = function (S) {
      return b(S) === g;
    }),
    (ct.isPortal = function (S) {
      return b(S) === n;
    }),
    (ct.isProfiler = function (S) {
      return b(S) === o;
    }),
    (ct.isStrictMode = function (S) {
      return b(S) === i;
    }),
    (ct.isSuspense = function (S) {
      return b(S) === m;
    }),
    (ct.isSuspenseList = function (S) {
      return b(S) === h;
    }),
    (ct.isValidElementType = function (S) {
      return (
        typeof S == "string" ||
        typeof S == "function" ||
        S === a ||
        S === o ||
        S === i ||
        S === m ||
        S === h ||
        S === x ||
        (typeof S == "object" &&
          S !== null &&
          (S.$$typeof === y ||
            S.$$typeof === g ||
            S.$$typeof === f ||
            S.$$typeof === u ||
            S.$$typeof === d ||
            S.$$typeof === C ||
            S.getModuleId !== void 0))
      );
    }),
    (ct.typeOf = b),
    ct
  );
}
var U1;
function Y5() {
  return U1 || ((U1 = 1), (jh.exports = I5())), jh.exports;
}
var bE = Y5();
function Fr(e) {
  if (typeof e != "object" || e === null) return !1;
  const n = Object.getPrototypeOf(e);
  return (
    (n === null ||
      n === Object.prototype ||
      Object.getPrototypeOf(n) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function SE(e) {
  if (E.isValidElement(e) || bE.isValidElementType(e) || !Fr(e)) return e;
  const n = {};
  return (
    Object.keys(e).forEach((a) => {
      n[a] = SE(e[a]);
    }),
    n
  );
}
function yn(e, n, a = { clone: !0 }) {
  const i = a.clone ? { ...e } : e;
  return (
    Fr(e) &&
      Fr(n) &&
      Object.keys(n).forEach((o) => {
        E.isValidElement(n[o]) || bE.isValidElementType(n[o])
          ? (i[o] = n[o])
          : Fr(n[o]) && Object.prototype.hasOwnProperty.call(e, o) && Fr(e[o])
          ? (i[o] = yn(e[o], n[o], a))
          : a.clone
          ? (i[o] = Fr(n[o]) ? SE(n[o]) : n[o])
          : (i[o] = n[o]);
      }),
    i
  );
}
const Q5 = (e) => {
  const n = Object.keys(e).map((a) => ({ key: a, val: e[a] })) || [];
  return (
    n.sort((a, i) => a.val - i.val),
    n.reduce((a, i) => ({ ...a, [i.key]: i.val }), {})
  );
};
function K5(e) {
  const {
      values: n = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: a = "px",
      step: i = 5,
      ...o
    } = e,
    u = Q5(n),
    f = Object.keys(u);
  function d(x) {
    return `@media (min-width:${typeof n[x] == "number" ? n[x] : x}${a})`;
  }
  function m(x) {
    return `@media (max-width:${
      (typeof n[x] == "number" ? n[x] : x) - i / 100
    }${a})`;
  }
  function h(x, C) {
    const b = f.indexOf(C);
    return `@media (min-width:${
      typeof n[x] == "number" ? n[x] : x
    }${a}) and (max-width:${
      (b !== -1 && typeof n[f[b]] == "number" ? n[f[b]] : C) - i / 100
    }${a})`;
  }
  function g(x) {
    return f.indexOf(x) + 1 < f.length ? h(x, f[f.indexOf(x) + 1]) : d(x);
  }
  function y(x) {
    const C = f.indexOf(x);
    return C === 0
      ? d(f[1])
      : C === f.length - 1
      ? m(f[C])
      : h(x, f[f.indexOf(x) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: f,
    values: u,
    up: d,
    down: m,
    between: h,
    only: g,
    not: y,
    unit: a,
    ...o,
  };
}
function X5(e, n) {
  if (!e.containerQueries) return n;
  const a = Object.keys(n)
    .filter((i) => i.startsWith("@container"))
    .sort((i, o) => {
      var f, d;
      const u = /min-width:\s*([0-9.]+)/;
      return (
        +(((f = i.match(u)) == null ? void 0 : f[1]) || 0) -
        +(((d = o.match(u)) == null ? void 0 : d[1]) || 0)
      );
    });
  return a.length
    ? a.reduce(
        (i, o) => {
          const u = n[o];
          return delete i[o], (i[o] = u), i;
        },
        { ...n }
      )
    : n;
}
function W5(e, n) {
  return (
    n === "@" ||
    (n.startsWith("@") &&
      (e.some((a) => n.startsWith(`@${a}`)) || !!n.match(/^@\d/)))
  );
}
function Z5(e, n) {
  const a = n.match(/^@([^/]+)?\/?(.+)?$/);
  if (!a) return null;
  const [, i, o] = a,
    u = Number.isNaN(+i) ? i || 0 : +i;
  return e.containerQueries(o).up(u);
}
function J5(e) {
  const n = (u, f) => u.replace("@media", f ? `@container ${f}` : "@container");
  function a(u, f) {
    (u.up = (...d) => n(e.breakpoints.up(...d), f)),
      (u.down = (...d) => n(e.breakpoints.down(...d), f)),
      (u.between = (...d) => n(e.breakpoints.between(...d), f)),
      (u.only = (...d) => n(e.breakpoints.only(...d), f)),
      (u.not = (...d) => {
        const m = n(e.breakpoints.not(...d), f);
        return m.includes("not all and")
          ? m
              .replace("not all and ", "")
              .replace("min-width:", "width<")
              .replace("max-width:", "width>")
              .replace("and", "or")
          : m;
      });
  }
  const i = {},
    o = (u) => (a(i, u), i);
  return a(o), { ...e, containerQueries: o };
}
const eM = { borderRadius: 4 };
function Yl(e, n) {
  return n ? yn(e, n, { clone: !1 }) : e;
}
const Xf = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  L1 = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${Xf[e]}px)`,
  },
  tM = {
    containerQueries: (e) => ({
      up: (n) => {
        let a = typeof n == "number" ? n : Xf[n] || n;
        return (
          typeof a == "number" && (a = `${a}px`),
          e ? `@container ${e} (min-width:${a})` : `@container (min-width:${a})`
        );
      },
    }),
  };
function Ra(e, n, a) {
  const i = e.theme || {};
  if (Array.isArray(n)) {
    const u = i.breakpoints || L1;
    return n.reduce((f, d, m) => ((f[u.up(u.keys[m])] = a(n[m])), f), {});
  }
  if (typeof n == "object") {
    const u = i.breakpoints || L1;
    return Object.keys(n).reduce((f, d) => {
      if (W5(u.keys, d)) {
        const m = Z5(i.containerQueries ? i : tM, d);
        m && (f[m] = a(n[d], d));
      } else if (Object.keys(u.values || Xf).includes(d)) {
        const m = u.up(d);
        f[m] = a(n[d], d);
      } else {
        const m = d;
        f[m] = n[m];
      }
      return f;
    }, {});
  }
  return a(n);
}
function nM(e = {}) {
  var a;
  return (
    ((a = e.keys) == null
      ? void 0
      : a.reduce((i, o) => {
          const u = e.up(o);
          return (i[u] = {}), i;
        }, {})) || {}
  );
}
function rM(e, n) {
  return e.reduce((a, i) => {
    const o = a[i];
    return (!o || Object.keys(o).length === 0) && delete a[i], a;
  }, n);
}
function Ne(e) {
  if (typeof e != "string") throw new Error(Ea(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Wf(e, n, a = !0) {
  if (!n || typeof n != "string") return null;
  if (e && e.vars && a) {
    const i = `vars.${n}`
      .split(".")
      .reduce((o, u) => (o && o[u] ? o[u] : null), e);
    if (i != null) return i;
  }
  return n.split(".").reduce((i, o) => (i && i[o] != null ? i[o] : null), e);
}
function xf(e, n, a, i = a) {
  let o;
  return (
    typeof e == "function"
      ? (o = e(a))
      : Array.isArray(e)
      ? (o = e[a] || i)
      : (o = Wf(e, a) || i),
    n && (o = n(o, i, e)),
    o
  );
}
function Pt(e) {
  const { prop: n, cssProperty: a = e.prop, themeKey: i, transform: o } = e,
    u = (f) => {
      if (f[n] == null) return null;
      const d = f[n],
        m = f.theme,
        h = Wf(m, i) || {};
      return Ra(f, d, (y) => {
        let x = xf(h, o, y);
        return (
          y === x &&
            typeof y == "string" &&
            (x = xf(h, o, `${n}${y === "default" ? "" : Ne(y)}`, y)),
          a === !1 ? x : { [a]: x }
        );
      });
    };
  return (u.propTypes = {}), (u.filterProps = [n]), u;
}
function aM(e) {
  const n = {};
  return (a) => (n[a] === void 0 && (n[a] = e(a)), n[a]);
}
const iM = { m: "margin", p: "padding" },
  sM = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  j1 = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  oM = aM((e) => {
    if (e.length > 2)
      if (j1[e]) e = j1[e];
      else return [e];
    const [n, a] = e.split(""),
      i = iM[n],
      o = sM[a] || "";
    return Array.isArray(o) ? o.map((u) => i + u) : [i + o];
  }),
  Sg = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  xg = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...Sg, ...xg];
function Su(e, n, a, i) {
  const o = Wf(e, n, !0) ?? a;
  return typeof o == "number" || typeof o == "string"
    ? (u) =>
        typeof u == "string"
          ? u
          : typeof o == "string"
          ? `calc(${u} * ${o})`
          : o * u
    : Array.isArray(o)
    ? (u) => {
        if (typeof u == "string") return u;
        const f = Math.abs(u),
          d = o[f];
        return u >= 0 ? d : typeof d == "number" ? -d : `-${d}`;
      }
    : typeof o == "function"
    ? o
    : () => {};
}
function Eg(e) {
  return Su(e, "spacing", 8);
}
function xu(e, n) {
  return typeof n == "string" || n == null ? n : e(n);
}
function lM(e, n) {
  return (a) => e.reduce((i, o) => ((i[o] = xu(n, a)), i), {});
}
function uM(e, n, a, i) {
  if (!n.includes(a)) return null;
  const o = oM(a),
    u = lM(o, i),
    f = e[a];
  return Ra(e, f, u);
}
function xE(e, n) {
  const a = Eg(e.theme);
  return Object.keys(e)
    .map((i) => uM(e, n, i, a))
    .reduce(Yl, {});
}
function zt(e) {
  return xE(e, Sg);
}
zt.propTypes = {};
zt.filterProps = Sg;
function kt(e) {
  return xE(e, xg);
}
kt.propTypes = {};
kt.filterProps = xg;
function EE(e = 8, n = Eg({ spacing: e })) {
  if (e.mui) return e;
  const a = (...i) =>
    (i.length === 0 ? [1] : i)
      .map((u) => {
        const f = n(u);
        return typeof f == "number" ? `${f}px` : f;
      })
      .join(" ");
  return (a.mui = !0), a;
}
function Zf(...e) {
  const n = e.reduce(
      (i, o) => (
        o.filterProps.forEach((u) => {
          i[u] = o;
        }),
        i
      ),
      {}
    ),
    a = (i) => Object.keys(i).reduce((o, u) => (n[u] ? Yl(o, n[u](i)) : o), {});
  return (
    (a.propTypes = {}),
    (a.filterProps = e.reduce((i, o) => i.concat(o.filterProps), [])),
    a
  );
}
function or(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function cr(e, n) {
  return Pt({ prop: e, themeKey: "borders", transform: n });
}
const cM = cr("border", or),
  fM = cr("borderTop", or),
  dM = cr("borderRight", or),
  pM = cr("borderBottom", or),
  hM = cr("borderLeft", or),
  mM = cr("borderColor"),
  gM = cr("borderTopColor"),
  yM = cr("borderRightColor"),
  vM = cr("borderBottomColor"),
  bM = cr("borderLeftColor"),
  SM = cr("outline", or),
  xM = cr("outlineColor"),
  Jf = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const n = Su(e.theme, "shape.borderRadius", 4),
        a = (i) => ({ borderRadius: xu(n, i) });
      return Ra(e, e.borderRadius, a);
    }
    return null;
  };
Jf.propTypes = {};
Jf.filterProps = ["borderRadius"];
Zf(cM, fM, dM, pM, hM, mM, gM, yM, vM, bM, Jf, SM, xM);
const ed = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const n = Su(e.theme, "spacing", 8),
      a = (i) => ({ gap: xu(n, i) });
    return Ra(e, e.gap, a);
  }
  return null;
};
ed.propTypes = {};
ed.filterProps = ["gap"];
const td = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const n = Su(e.theme, "spacing", 8),
      a = (i) => ({ columnGap: xu(n, i) });
    return Ra(e, e.columnGap, a);
  }
  return null;
};
td.propTypes = {};
td.filterProps = ["columnGap"];
const nd = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const n = Su(e.theme, "spacing", 8),
      a = (i) => ({ rowGap: xu(n, i) });
    return Ra(e, e.rowGap, a);
  }
  return null;
};
nd.propTypes = {};
nd.filterProps = ["rowGap"];
const EM = Pt({ prop: "gridColumn" }),
  RM = Pt({ prop: "gridRow" }),
  CM = Pt({ prop: "gridAutoFlow" }),
  wM = Pt({ prop: "gridAutoColumns" }),
  TM = Pt({ prop: "gridAutoRows" }),
  AM = Pt({ prop: "gridTemplateColumns" }),
  OM = Pt({ prop: "gridTemplateRows" }),
  MM = Pt({ prop: "gridTemplateAreas" }),
  _M = Pt({ prop: "gridArea" });
Zf(ed, td, nd, EM, RM, CM, wM, TM, AM, OM, MM, _M);
function eo(e, n) {
  return n === "grey" ? n : e;
}
const DM = Pt({ prop: "color", themeKey: "palette", transform: eo }),
  NM = Pt({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: eo,
  }),
  zM = Pt({ prop: "backgroundColor", themeKey: "palette", transform: eo });
Zf(DM, NM, zM);
function Fn(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const kM = Pt({ prop: "width", transform: Fn }),
  Rg = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const n = (a) => {
        var o, u, f, d, m;
        const i =
          ((f =
            (u = (o = e.theme) == null ? void 0 : o.breakpoints) == null
              ? void 0
              : u.values) == null
            ? void 0
            : f[a]) || Xf[a];
        return i
          ? ((m = (d = e.theme) == null ? void 0 : d.breakpoints) == null
              ? void 0
              : m.unit) !== "px"
            ? { maxWidth: `${i}${e.theme.breakpoints.unit}` }
            : { maxWidth: i }
          : { maxWidth: Fn(a) };
      };
      return Ra(e, e.maxWidth, n);
    }
    return null;
  };
Rg.filterProps = ["maxWidth"];
const BM = Pt({ prop: "minWidth", transform: Fn }),
  UM = Pt({ prop: "height", transform: Fn }),
  LM = Pt({ prop: "maxHeight", transform: Fn }),
  jM = Pt({ prop: "minHeight", transform: Fn });
Pt({ prop: "size", cssProperty: "width", transform: Fn });
Pt({ prop: "size", cssProperty: "height", transform: Fn });
const $M = Pt({ prop: "boxSizing" });
Zf(kM, Rg, BM, UM, LM, jM, $M);
const Eu = {
  border: { themeKey: "borders", transform: or },
  borderTop: { themeKey: "borders", transform: or },
  borderRight: { themeKey: "borders", transform: or },
  borderBottom: { themeKey: "borders", transform: or },
  borderLeft: { themeKey: "borders", transform: or },
  borderColor: { themeKey: "palette" },
  borderTopColor: { themeKey: "palette" },
  borderRightColor: { themeKey: "palette" },
  borderBottomColor: { themeKey: "palette" },
  borderLeftColor: { themeKey: "palette" },
  outline: { themeKey: "borders", transform: or },
  outlineColor: { themeKey: "palette" },
  borderRadius: { themeKey: "shape.borderRadius", style: Jf },
  color: { themeKey: "palette", transform: eo },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: eo,
  },
  backgroundColor: { themeKey: "palette", transform: eo },
  p: { style: kt },
  pt: { style: kt },
  pr: { style: kt },
  pb: { style: kt },
  pl: { style: kt },
  px: { style: kt },
  py: { style: kt },
  padding: { style: kt },
  paddingTop: { style: kt },
  paddingRight: { style: kt },
  paddingBottom: { style: kt },
  paddingLeft: { style: kt },
  paddingX: { style: kt },
  paddingY: { style: kt },
  paddingInline: { style: kt },
  paddingInlineStart: { style: kt },
  paddingInlineEnd: { style: kt },
  paddingBlock: { style: kt },
  paddingBlockStart: { style: kt },
  paddingBlockEnd: { style: kt },
  m: { style: zt },
  mt: { style: zt },
  mr: { style: zt },
  mb: { style: zt },
  ml: { style: zt },
  mx: { style: zt },
  my: { style: zt },
  margin: { style: zt },
  marginTop: { style: zt },
  marginRight: { style: zt },
  marginBottom: { style: zt },
  marginLeft: { style: zt },
  marginX: { style: zt },
  marginY: { style: zt },
  marginInline: { style: zt },
  marginInlineStart: { style: zt },
  marginInlineEnd: { style: zt },
  marginBlock: { style: zt },
  marginBlockStart: { style: zt },
  marginBlockEnd: { style: zt },
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({ "@media print": { display: e } }),
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: ed },
  rowGap: { style: nd },
  columnGap: { style: td },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: "zIndex" },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: "shadows" },
  width: { transform: Fn },
  maxWidth: { style: Rg },
  minWidth: { transform: Fn },
  height: { transform: Fn },
  maxHeight: { transform: Fn },
  minHeight: { transform: Fn },
  boxSizing: {},
  font: { themeKey: "font" },
  fontFamily: { themeKey: "typography" },
  fontSize: { themeKey: "typography" },
  fontStyle: { themeKey: "typography" },
  fontWeight: { themeKey: "typography" },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: "typography" },
};
function HM(...e) {
  const n = e.reduce((i, o) => i.concat(Object.keys(o)), []),
    a = new Set(n);
  return e.every((i) => a.size === Object.keys(i).length);
}
function PM(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function FM() {
  function e(a, i, o, u) {
    const f = { [a]: i, theme: o },
      d = u[a];
    if (!d) return { [a]: i };
    const { cssProperty: m = a, themeKey: h, transform: g, style: y } = d;
    if (i == null) return null;
    if (h === "typography" && i === "inherit") return { [a]: i };
    const x = Wf(o, h) || {};
    return y
      ? y(f)
      : Ra(f, i, (b) => {
          let S = xf(x, g, b);
          return (
            b === S &&
              typeof b == "string" &&
              (S = xf(x, g, `${a}${b === "default" ? "" : Ne(b)}`, b)),
            m === !1 ? S : { [m]: S }
          );
        });
  }
  function n(a) {
    const { sx: i, theme: o = {} } = a || {};
    if (!i) return null;
    const u = o.unstable_sxConfig ?? Eu;
    function f(d) {
      let m = d;
      if (typeof d == "function") m = d(o);
      else if (typeof d != "object") return d;
      if (!m) return null;
      const h = nM(o.breakpoints),
        g = Object.keys(h);
      let y = h;
      return (
        Object.keys(m).forEach((x) => {
          const C = PM(m[x], o);
          if (C != null)
            if (typeof C == "object")
              if (u[x]) y = Yl(y, e(x, C, o, u));
              else {
                const b = Ra({ theme: o }, C, (S) => ({ [x]: S }));
                HM(b, C) ? (y[x] = n({ sx: C, theme: o })) : (y = Yl(y, b));
              }
            else y = Yl(y, e(x, C, o, u));
        }),
        X5(o, rM(g, y))
      );
    }
    return Array.isArray(i) ? i.map(f) : f(i);
  }
  return n;
}
const rs = FM();
rs.filterProps = ["sx"];
function qM(e, n) {
  var i;
  const a = this;
  if (a.vars) {
    if (
      !((i = a.colorSchemes) != null && i[e]) ||
      typeof a.getColorSchemeSelector != "function"
    )
      return {};
    let o = a.getColorSchemeSelector(e);
    return o === "&"
      ? n
      : ((o.includes("data-") || o.includes(".")) &&
          (o = `*:where(${o.replace(/\s*&$/, "")}) &`),
        { [o]: n });
  }
  return a.palette.mode === e ? n : {};
}
function Cg(e = {}, ...n) {
  const {
      breakpoints: a = {},
      palette: i = {},
      spacing: o,
      shape: u = {},
      ...f
    } = e,
    d = K5(a),
    m = EE(o);
  let h = yn(
    {
      breakpoints: d,
      direction: "ltr",
      components: {},
      palette: { mode: "light", ...i },
      spacing: m,
      shape: { ...eM, ...u },
    },
    f
  );
  return (
    (h = J5(h)),
    (h.applyStyles = qM),
    (h = n.reduce((g, y) => yn(g, y), h)),
    (h.unstable_sxConfig = {
      ...Eu,
      ...(f == null ? void 0 : f.unstable_sxConfig),
    }),
    (h.unstable_sx = function (y) {
      return rs({ sx: y, theme: this });
    }),
    h
  );
}
function VM(e) {
  return Object.keys(e).length === 0;
}
function GM(e = null) {
  const n = E.useContext(Kf);
  return !n || VM(n) ? e : n;
}
const IM = Cg();
function wg(e = IM) {
  return GM(e);
}
function YM({ styles: e, themeId: n, defaultTheme: a = {} }) {
  const i = wg(a),
    o = typeof e == "function" ? e((n && i[n]) || i) : e;
  return U.jsx(V5, { styles: o });
}
const QM = (e) => {
  var i;
  const n = { systemProps: {}, otherProps: {} },
    a =
      ((i = e == null ? void 0 : e.theme) == null
        ? void 0
        : i.unstable_sxConfig) ?? Eu;
  return (
    Object.keys(e).forEach((o) => {
      a[o] ? (n.systemProps[o] = e[o]) : (n.otherProps[o] = e[o]);
    }),
    n
  );
};
function RE(e) {
  const { sx: n, ...a } = e,
    { systemProps: i, otherProps: o } = QM(a);
  let u;
  return (
    Array.isArray(n)
      ? (u = [i, ...n])
      : typeof n == "function"
      ? (u = (...f) => {
          const d = n(...f);
          return Fr(d) ? { ...i, ...d } : i;
        })
      : (u = { ...i, ...n }),
    { ...o, sx: u }
  );
}
const $1 = (e) => e,
  KM = () => {
    let e = $1;
    return {
      configure(n) {
        e = n;
      },
      generate(n) {
        return e(n);
      },
      reset() {
        e = $1;
      },
    };
  },
  CE = KM();
function wE(e) {
  var n,
    a,
    i = "";
  if (typeof e == "string" || typeof e == "number") i += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (n = 0; n < o; n++)
        e[n] && (a = wE(e[n])) && (i && (i += " "), (i += a));
    } else for (a in e) e[a] && (i && (i += " "), (i += a));
  return i;
}
function qe() {
  for (var e, n, a = 0, i = "", o = arguments.length; a < o; a++)
    (e = arguments[a]) && (n = wE(e)) && (i && (i += " "), (i += n));
  return i;
}
function XM(e = {}) {
  const {
      themeId: n,
      defaultTheme: a,
      defaultClassName: i = "MuiBox-root",
      generateClassName: o,
    } = e,
    u = vE("div", {
      shouldForwardProp: (d) => d !== "theme" && d !== "sx" && d !== "as",
    })(rs);
  return E.forwardRef(function (m, h) {
    const g = wg(a),
      { className: y, component: x = "div", ...C } = RE(m);
    return U.jsx(u, {
      as: x,
      ref: h,
      className: qe(y, o ? o(i) : i),
      theme: (n && g[n]) || g,
      ...C,
    });
  });
}
const WM = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected",
};
function vt(e, n, a = "Mui") {
  const i = WM[n];
  return i ? `${a}-${i}` : `${CE.generate(e)}-${n}`;
}
function ft(e, n, a = "Mui") {
  const i = {};
  return (
    n.forEach((o) => {
      i[o] = vt(e, o, a);
    }),
    i
  );
}
function TE(e) {
  const { variants: n, ...a } = e,
    i = { variants: n, style: k1(a), isProcessed: !0 };
  return (
    i.style === a ||
      (n &&
        n.forEach((o) => {
          typeof o.style != "function" && (o.style = k1(o.style));
        })),
    i
  );
}
const ZM = Cg();
function $h(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function JM(e) {
  return e ? (n, a) => a[e] : null;
}
function e_(e, n, a) {
  e.theme = r_(e.theme) ? a : e.theme[n] || e.theme;
}
function of(e, n) {
  const a = typeof n == "function" ? n(e) : n;
  if (Array.isArray(a)) return a.flatMap((i) => of(e, i));
  if (Array.isArray(a == null ? void 0 : a.variants)) {
    let i;
    if (a.isProcessed) i = a.style;
    else {
      const { variants: o, ...u } = a;
      i = u;
    }
    return AE(e, a.variants, [i]);
  }
  return a != null && a.isProcessed ? a.style : a;
}
function AE(e, n, a = []) {
  var o;
  let i;
  e: for (let u = 0; u < n.length; u += 1) {
    const f = n[u];
    if (typeof f.props == "function") {
      if (
        (i ?? (i = { ...e, ...e.ownerState, ownerState: e.ownerState }),
        !f.props(i))
      )
        continue;
    } else
      for (const d in f.props)
        if (
          e[d] !== f.props[d] &&
          ((o = e.ownerState) == null ? void 0 : o[d]) !== f.props[d]
        )
          continue e;
    typeof f.style == "function"
      ? (i ?? (i = { ...e, ...e.ownerState, ownerState: e.ownerState }),
        a.push(f.style(i)))
      : a.push(f.style);
  }
  return a;
}
function t_(e = {}) {
  const {
    themeId: n,
    defaultTheme: a = ZM,
    rootShouldForwardProp: i = $h,
    slotShouldForwardProp: o = $h,
  } = e;
  function u(d) {
    e_(d, n, a);
  }
  return (d, m = {}) => {
    G5(d, (M) => M.filter(($) => $ !== rs));
    const {
        name: h,
        slot: g,
        skipVariantsResolver: y,
        skipSx: x,
        overridesResolver: C = JM(i_(g)),
        ...b
      } = m,
      S = y !== void 0 ? y : (g && g !== "Root" && g !== "root") || !1,
      w = x || !1;
    let O = $h;
    g === "Root" || g === "root"
      ? (O = i)
      : g
      ? (O = o)
      : a_(d) && (O = void 0);
    const _ = vE(d, { shouldForwardProp: O, label: n_(), ...b }),
      T = (M) => {
        if (typeof M == "function" && M.__emotion_real !== M)
          return function (L) {
            return of(L, M);
          };
        if (Fr(M)) {
          const $ = TE(M);
          return $.variants
            ? function (K) {
                return of(K, $);
              }
            : $.style;
        }
        return M;
      },
      D = (...M) => {
        const $ = [],
          L = M.map(T),
          K = [];
        if (
          ($.push(u),
          h &&
            C &&
            K.push(function (Q) {
              var F, ie;
              const le =
                (ie = (F = Q.theme.components) == null ? void 0 : F[h]) == null
                  ? void 0
                  : ie.styleOverrides;
              if (!le) return null;
              const ne = {};
              for (const fe in le) ne[fe] = of(Q, le[fe]);
              return C(Q, ne);
            }),
          h &&
            !S &&
            K.push(function (Q) {
              var ne, F;
              const J = Q.theme,
                le =
                  (F =
                    (ne = J == null ? void 0 : J.components) == null
                      ? void 0
                      : ne[h]) == null
                    ? void 0
                    : F.variants;
              return le ? AE(Q, le) : null;
            }),
          w || K.push(rs),
          Array.isArray(L[0]))
        ) {
          const V = L.shift(),
            Q = new Array($.length).fill(""),
            J = new Array(K.length).fill("");
          let le;
          (le = [...Q, ...V, ...J]),
            (le.raw = [...Q, ...V.raw, ...J]),
            $.unshift(le);
        }
        const P = [...$, ...L, ...K],
          R = _(...P);
        return d.muiName && (R.muiName = d.muiName), R;
      };
    return _.withConfig && (D.withConfig = _.withConfig), D;
  };
}
function n_(e, n) {
  return void 0;
}
function r_(e) {
  for (const n in e) return !1;
  return !0;
}
function a_(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function i_(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Ef(e, n) {
  const a = { ...n };
  for (const i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      const o = i;
      if (o === "components" || o === "slots") a[o] = { ...e[o], ...a[o] };
      else if (o === "componentsProps" || o === "slotProps") {
        const u = e[o],
          f = n[o];
        if (!f) a[o] = u || {};
        else if (!u) a[o] = f;
        else {
          a[o] = { ...f };
          for (const d in u)
            if (Object.prototype.hasOwnProperty.call(u, d)) {
              const m = d;
              a[o][m] = Ef(u[m], f[m]);
            }
        }
      } else a[o] === void 0 && (a[o] = e[o]);
    }
  return a;
}
const as = typeof window < "u" ? E.useLayoutEffect : E.useEffect;
function s_(e, n = Number.MIN_SAFE_INTEGER, a = Number.MAX_SAFE_INTEGER) {
  return Math.max(n, Math.min(e, a));
}
function Tg(e, n = 0, a = 1) {
  return s_(e, n, a);
}
function o_(e) {
  e = e.slice(1);
  const n = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let a = e.match(n);
  return (
    a && a[0].length === 1 && (a = a.map((i) => i + i)),
    a
      ? `rgb${a.length === 4 ? "a" : ""}(${a
          .map((i, o) =>
            o < 3
              ? parseInt(i, 16)
              : Math.round((parseInt(i, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function fi(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return fi(o_(e));
  const n = e.indexOf("("),
    a = e.substring(0, n);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(a))
    throw new Error(Ea(9, e));
  let i = e.substring(n + 1, e.length - 1),
    o;
  if (a === "color") {
    if (
      ((i = i.split(" ")),
      (o = i.shift()),
      i.length === 4 && i[3].charAt(0) === "/" && (i[3] = i[3].slice(1)),
      !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(
        o
      ))
    )
      throw new Error(Ea(10, o));
  } else i = i.split(",");
  return (
    (i = i.map((u) => parseFloat(u))), { type: a, values: i, colorSpace: o }
  );
}
const l_ = (e) => {
    const n = fi(e);
    return n.values
      .slice(0, 3)
      .map((a, i) => (n.type.includes("hsl") && i !== 0 ? `${a}%` : a))
      .join(" ");
  },
  ql = (e, n) => {
    try {
      return l_(e);
    } catch {
      return e;
    }
  };
function rd(e) {
  const { type: n, colorSpace: a } = e;
  let { values: i } = e;
  return (
    n.includes("rgb")
      ? (i = i.map((o, u) => (u < 3 ? parseInt(o, 10) : o)))
      : n.includes("hsl") && ((i[1] = `${i[1]}%`), (i[2] = `${i[2]}%`)),
    n.includes("color") ? (i = `${a} ${i.join(" ")}`) : (i = `${i.join(", ")}`),
    `${n}(${i})`
  );
}
function OE(e) {
  e = fi(e);
  const { values: n } = e,
    a = n[0],
    i = n[1] / 100,
    o = n[2] / 100,
    u = i * Math.min(o, 1 - o),
    f = (h, g = (h + a / 30) % 12) =>
      o - u * Math.max(Math.min(g - 3, 9 - g, 1), -1);
  let d = "rgb";
  const m = [
    Math.round(f(0) * 255),
    Math.round(f(8) * 255),
    Math.round(f(4) * 255),
  ];
  return (
    e.type === "hsla" && ((d += "a"), m.push(n[3])), rd({ type: d, values: m })
  );
}
function Am(e) {
  e = fi(e);
  let n = e.type === "hsl" || e.type === "hsla" ? fi(OE(e)).values : e.values;
  return (
    (n = n.map(
      (a) => (
        e.type !== "color" && (a /= 255),
        a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2]).toFixed(3))
  );
}
function u_(e, n) {
  const a = Am(e),
    i = Am(n);
  return (Math.max(a, i) + 0.05) / (Math.min(a, i) + 0.05);
}
function qr(e, n) {
  return (
    (e = fi(e)),
    (n = Tg(n)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${n}`) : (e.values[3] = n),
    rd(e)
  );
}
function qc(e, n, a) {
  try {
    return qr(e, n);
  } catch {
    return e;
  }
}
function Ag(e, n) {
  if (((e = fi(e)), (n = Tg(n)), e.type.includes("hsl"))) e.values[2] *= 1 - n;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let a = 0; a < 3; a += 1) e.values[a] *= 1 - n;
  return rd(e);
}
function mt(e, n, a) {
  try {
    return Ag(e, n);
  } catch {
    return e;
  }
}
function Og(e, n) {
  if (((e = fi(e)), (n = Tg(n)), e.type.includes("hsl")))
    e.values[2] += (100 - e.values[2]) * n;
  else if (e.type.includes("rgb"))
    for (let a = 0; a < 3; a += 1) e.values[a] += (255 - e.values[a]) * n;
  else if (e.type.includes("color"))
    for (let a = 0; a < 3; a += 1) e.values[a] += (1 - e.values[a]) * n;
  return rd(e);
}
function gt(e, n, a) {
  try {
    return Og(e, n);
  } catch {
    return e;
  }
}
function c_(e, n = 0.15) {
  return Am(e) > 0.5 ? Ag(e, n) : Og(e, n);
}
function Vc(e, n, a) {
  try {
    return c_(e, n);
  } catch {
    return e;
  }
}
function H1(...e) {
  return e.reduce(
    (n, a) =>
      a == null
        ? n
        : function (...o) {
            n.apply(this, o), a.apply(this, o);
          },
    () => {}
  );
}
function ME(e, n = 166) {
  let a;
  function i(...o) {
    const u = () => {
      e.apply(this, o);
    };
    clearTimeout(a), (a = setTimeout(u, n));
  }
  return (
    (i.clear = () => {
      clearTimeout(a);
    }),
    i
  );
}
function Hh(e, n) {
  var a, i, o;
  return (
    E.isValidElement(e) &&
    n.indexOf(
      e.type.muiName ??
        ((o =
          (i = (a = e.type) == null ? void 0 : a._payload) == null
            ? void 0
            : i.value) == null
          ? void 0
          : o.muiName)
    ) !== -1
  );
}
function xr(e) {
  return (e && e.ownerDocument) || document;
}
function Ca(e) {
  return xr(e).defaultView || window;
}
function Om(e, n) {
  typeof e == "function" ? e(n) : e && (e.current = n);
}
let P1 = 0;
function f_(e) {
  const [n, a] = E.useState(e),
    i = e || n;
  return (
    E.useEffect(() => {
      n == null && ((P1 += 1), a(`mui-${P1}`));
    }, [n]),
    i
  );
}
const d_ = { ...em },
  F1 = d_.useId;
function ad(e) {
  if (F1 !== void 0) {
    const n = F1();
    return e ?? n;
  }
  return f_(e);
}
function q1({ controlled: e, default: n, name: a, state: i = "value" }) {
  const { current: o } = E.useRef(e !== void 0),
    [u, f] = E.useState(n),
    d = o ? e : u,
    m = E.useCallback((h) => {
      o || f(h);
    }, []);
  return [d, m];
}
function to(e) {
  const n = E.useRef(e);
  return (
    as(() => {
      n.current = e;
    }),
    E.useRef((...a) => (0, n.current)(...a)).current
  );
}
function vn(...e) {
  return E.useMemo(
    () =>
      e.every((n) => n == null)
        ? null
        : (n) => {
            e.forEach((a) => {
              Om(a, n);
            });
          },
    e
  );
}
const V1 = {};
function _E(e, n) {
  const a = E.useRef(V1);
  return a.current === V1 && (a.current = e(n)), a;
}
const p_ = [];
function h_(e) {
  E.useEffect(e, p_);
}
class Mg {
  constructor() {
    un(this, "currentId", null);
    un(this, "clear", () => {
      this.currentId !== null &&
        (clearTimeout(this.currentId), (this.currentId = null));
    });
    un(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Mg();
  }
  start(n, a) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = null), a();
      }, n));
  }
}
function DE() {
  const e = _E(Mg.create).current;
  return h_(e.disposeEffect), e;
}
function G1(e) {
  try {
    return e.matches(":focus-visible");
  } catch {}
  return !1;
}
function NE(e = window) {
  const n = e.document.documentElement.clientWidth;
  return e.innerWidth - n;
}
function bt(e, n, a = void 0) {
  const i = {};
  for (const o in e) {
    const u = e[o];
    let f = "",
      d = !0;
    for (let m = 0; m < u.length; m += 1) {
      const h = u[m];
      h &&
        ((f += (d === !0 ? "" : " ") + n(h)),
        (d = !1),
        a && a[h] && (f += " " + a[h]));
    }
    i[o] = f;
  }
  return i;
}
function m_(e) {
  return typeof e == "string";
}
function zE(e, n, a) {
  return e === void 0 || m_(e)
    ? n
    : { ...n, ownerState: { ...n.ownerState, ...a } };
}
function kE(e, n = []) {
  if (e === void 0) return {};
  const a = {};
  return (
    Object.keys(e)
      .filter(
        (i) =>
          i.match(/^on[A-Z]/) && typeof e[i] == "function" && !n.includes(i)
      )
      .forEach((i) => {
        a[i] = e[i];
      }),
    a
  );
}
function I1(e) {
  if (e === void 0) return {};
  const n = {};
  return (
    Object.keys(e)
      .filter((a) => !(a.match(/^on[A-Z]/) && typeof e[a] == "function"))
      .forEach((a) => {
        n[a] = e[a];
      }),
    n
  );
}
function BE(e) {
  const {
    getSlotProps: n,
    additionalProps: a,
    externalSlotProps: i,
    externalForwardedProps: o,
    className: u,
  } = e;
  if (!n) {
    const C = qe(
        a == null ? void 0 : a.className,
        u,
        o == null ? void 0 : o.className,
        i == null ? void 0 : i.className
      ),
      b = {
        ...(a == null ? void 0 : a.style),
        ...(o == null ? void 0 : o.style),
        ...(i == null ? void 0 : i.style),
      },
      S = { ...a, ...o, ...i };
    return (
      C.length > 0 && (S.className = C),
      Object.keys(b).length > 0 && (S.style = b),
      { props: S, internalRef: void 0 }
    );
  }
  const f = kE({ ...o, ...i }),
    d = I1(i),
    m = I1(o),
    h = n(f),
    g = qe(
      h == null ? void 0 : h.className,
      a == null ? void 0 : a.className,
      u,
      o == null ? void 0 : o.className,
      i == null ? void 0 : i.className
    ),
    y = {
      ...(h == null ? void 0 : h.style),
      ...(a == null ? void 0 : a.style),
      ...(o == null ? void 0 : o.style),
      ...(i == null ? void 0 : i.style),
    },
    x = { ...h, ...a, ...m, ...d };
  return (
    g.length > 0 && (x.className = g),
    Object.keys(y).length > 0 && (x.style = y),
    { props: x, internalRef: h.ref }
  );
}
function UE(e, n, a) {
  return typeof e == "function" ? e(n, a) : e;
}
function Y1(e) {
  var y;
  const {
      elementType: n,
      externalSlotProps: a,
      ownerState: i,
      skipResolvingSlotProps: o = !1,
      ...u
    } = e,
    f = o ? {} : UE(a, i),
    { props: d, internalRef: m } = BE({ ...u, externalSlotProps: f }),
    h = vn(
      m,
      f == null ? void 0 : f.ref,
      (y = e.additionalProps) == null ? void 0 : y.ref
    );
  return zE(n, { ...d, ref: h }, i);
}
function Ru(e) {
  var n;
  return parseInt(E.version, 10) >= 19
    ? ((n = e == null ? void 0 : e.props) == null ? void 0 : n.ref) || null
    : (e == null ? void 0 : e.ref) || null;
}
const g_ = E.createContext(),
  y_ = () => E.useContext(g_) ?? !1,
  v_ = E.createContext(void 0);
function b_(e) {
  const { theme: n, name: a, props: i } = e;
  if (!n || !n.components || !n.components[a]) return i;
  const o = n.components[a];
  return o.defaultProps
    ? Ef(o.defaultProps, i)
    : !o.styleOverrides && !o.variants
    ? Ef(o, i)
    : i;
}
function S_({ props: e, name: n }) {
  const a = E.useContext(v_);
  return b_({ props: e, name: n, theme: { components: a } });
}
const Q1 = { theme: void 0 };
function x_(e) {
  let n, a;
  return function (o) {
    let u = n;
    return (
      (u === void 0 || o.theme !== a) &&
        ((Q1.theme = o.theme), (u = TE(e(Q1))), (n = u), (a = o.theme)),
      u
    );
  };
}
function E_(e = "") {
  function n(...i) {
    if (!i.length) return "";
    const o = i[0];
    return typeof o == "string" &&
      !o.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/
      )
      ? `, var(--${e ? `${e}-` : ""}${o}${n(...i.slice(1))})`
      : `, ${o}`;
  }
  return (i, ...o) => `var(--${e ? `${e}-` : ""}${i}${n(...o)})`;
}
const K1 = (e, n, a, i = []) => {
    let o = e;
    n.forEach((u, f) => {
      f === n.length - 1
        ? Array.isArray(o)
          ? (o[Number(u)] = a)
          : o && typeof o == "object" && (o[u] = a)
        : o &&
          typeof o == "object" &&
          (o[u] || (o[u] = i.includes(u) ? [] : {}), (o = o[u]));
    });
  },
  R_ = (e, n, a) => {
    function i(o, u = [], f = []) {
      Object.entries(o).forEach(([d, m]) => {
        (!a || (a && !a([...u, d]))) &&
          m != null &&
          (typeof m == "object" && Object.keys(m).length > 0
            ? i(m, [...u, d], Array.isArray(m) ? [...f, d] : f)
            : n([...u, d], m, f));
      });
    }
    i(e);
  },
  C_ = (e, n) =>
    typeof n == "number"
      ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((i) =>
          e.includes(i)
        ) || e[e.length - 1].toLowerCase().includes("opacity")
        ? n
        : `${n}px`
      : n;
function Ph(e, n) {
  const { prefix: a, shouldSkipGeneratingVar: i } = n || {},
    o = {},
    u = {},
    f = {};
  return (
    R_(
      e,
      (d, m, h) => {
        if (
          (typeof m == "string" || typeof m == "number") &&
          (!i || !i(d, m))
        ) {
          const g = `--${a ? `${a}-` : ""}${d.join("-")}`,
            y = C_(d, m);
          Object.assign(o, { [g]: y }),
            K1(u, d, `var(${g})`, h),
            K1(f, d, `var(${g}, ${y})`, h);
        }
      },
      (d) => d[0] === "vars"
    ),
    { css: o, vars: u, varsWithDefaults: f }
  );
}
function w_(e, n = {}) {
  const {
      getSelector: a = w,
      disableCssColorScheme: i,
      colorSchemeSelector: o,
    } = n,
    {
      colorSchemes: u = {},
      components: f,
      defaultColorScheme: d = "light",
      ...m
    } = e,
    { vars: h, css: g, varsWithDefaults: y } = Ph(m, n);
  let x = y;
  const C = {},
    { [d]: b, ...S } = u;
  if (
    (Object.entries(S || {}).forEach(([T, D]) => {
      const { vars: M, css: $, varsWithDefaults: L } = Ph(D, n);
      (x = yn(x, L)), (C[T] = { css: $, vars: M });
    }),
    b)
  ) {
    const { css: T, vars: D, varsWithDefaults: M } = Ph(b, n);
    (x = yn(x, M)), (C[d] = { css: T, vars: D });
  }
  function w(T, D) {
    var $, L;
    let M = o;
    if (
      (o === "class" && (M = ".%s"),
      o === "data" && (M = "[data-%s]"),
      o != null &&
        o.startsWith("data-") &&
        !o.includes("%s") &&
        (M = `[${o}="%s"]`),
      T)
    ) {
      if (M === "media")
        return e.defaultColorScheme === T
          ? ":root"
          : {
              [`@media (prefers-color-scheme: ${
                ((L = ($ = u[T]) == null ? void 0 : $.palette) == null
                  ? void 0
                  : L.mode) || T
              })`]: { ":root": D },
            };
      if (M)
        return e.defaultColorScheme === T
          ? `:root, ${M.replace("%s", String(T))}`
          : M.replace("%s", String(T));
    }
    return ":root";
  }
  return {
    vars: x,
    generateThemeVars: () => {
      let T = { ...h };
      return (
        Object.entries(C).forEach(([, { vars: D }]) => {
          T = yn(T, D);
        }),
        T
      );
    },
    generateStyleSheets: () => {
      var K, P;
      const T = [],
        D = e.defaultColorScheme || "light";
      function M(R, V) {
        Object.keys(V).length &&
          T.push(typeof R == "string" ? { [R]: { ...V } } : R);
      }
      M(a(void 0, { ...g }), g);
      const { [D]: $, ...L } = C;
      if ($) {
        const { css: R } = $,
          V =
            (P = (K = u[D]) == null ? void 0 : K.palette) == null
              ? void 0
              : P.mode,
          Q = !i && V ? { colorScheme: V, ...R } : { ...R };
        M(a(D, { ...Q }), Q);
      }
      return (
        Object.entries(L).forEach(([R, { css: V }]) => {
          var le, ne;
          const Q =
              (ne = (le = u[R]) == null ? void 0 : le.palette) == null
                ? void 0
                : ne.mode,
            J = !i && Q ? { colorScheme: Q, ...V } : { ...V };
          M(a(R, { ...J }), J);
        }),
        T
      );
    },
  };
}
function T_(e) {
  return function (a) {
    return e === "media"
      ? `@media (prefers-color-scheme: ${a})`
      : e
      ? e.startsWith("data-") && !e.includes("%s")
        ? `[${e}="${a}"] &`
        : e === "class"
        ? `.${a} &`
        : e === "data"
        ? `[data-${a}] &`
        : `${e.replace("%s", a)} &`
      : "&";
  };
}
function LE() {
  return {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: nu.white, default: nu.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  };
}
const A_ = LE();
function jE() {
  return {
    text: {
      primary: nu.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: nu.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
}
const X1 = jE();
function W1(e, n, a, i) {
  const o = i.light || i,
    u = i.dark || i * 1.5;
  e[n] ||
    (e.hasOwnProperty(a)
      ? (e[n] = e[a])
      : n === "light"
      ? (e.light = Og(e.main, o))
      : n === "dark" && (e.dark = Ag(e.main, u)));
}
function O_(e = "light") {
  return e === "dark"
    ? { main: Fs[200], light: Fs[50], dark: Fs[400] }
    : { main: Fs[700], light: Fs[400], dark: Fs[800] };
}
function M_(e = "light") {
  return e === "dark"
    ? { main: Ps[200], light: Ps[50], dark: Ps[400] }
    : { main: Ps[500], light: Ps[300], dark: Ps[700] };
}
function __(e = "light") {
  return e === "dark"
    ? { main: Hs[500], light: Hs[300], dark: Hs[700] }
    : { main: Hs[700], light: Hs[400], dark: Hs[800] };
}
function D_(e = "light") {
  return e === "dark"
    ? { main: qs[400], light: qs[300], dark: qs[700] }
    : { main: qs[700], light: qs[500], dark: qs[900] };
}
function N_(e = "light") {
  return e === "dark"
    ? { main: Vs[400], light: Vs[300], dark: Vs[700] }
    : { main: Vs[800], light: Vs[500], dark: Vs[900] };
}
function z_(e = "light") {
  return e === "dark"
    ? { main: Bl[400], light: Bl[300], dark: Bl[700] }
    : { main: "#ed6c02", light: Bl[500], dark: Bl[900] };
}
function _g(e) {
  const {
      mode: n = "light",
      contrastThreshold: a = 3,
      tonalOffset: i = 0.2,
      ...o
    } = e,
    u = e.primary || O_(n),
    f = e.secondary || M_(n),
    d = e.error || __(n),
    m = e.info || D_(n),
    h = e.success || N_(n),
    g = e.warning || z_(n);
  function y(S) {
    return u_(S, X1.text.primary) >= a ? X1.text.primary : A_.text.primary;
  }
  const x = ({
    color: S,
    name: w,
    mainShade: O = 500,
    lightShade: _ = 300,
    darkShade: T = 700,
  }) => {
    if (
      ((S = { ...S }),
      !S.main && S[O] && (S.main = S[O]),
      !S.hasOwnProperty("main"))
    )
      throw new Error(Ea(11, w ? ` (${w})` : "", O));
    if (typeof S.main != "string")
      throw new Error(Ea(12, w ? ` (${w})` : "", JSON.stringify(S.main)));
    return (
      W1(S, "light", _, i),
      W1(S, "dark", T, i),
      S.contrastText || (S.contrastText = y(S.main)),
      S
    );
  };
  let C;
  return (
    n === "light" ? (C = LE()) : n === "dark" && (C = jE()),
    yn(
      {
        common: { ...nu },
        mode: n,
        primary: x({ color: u, name: "primary" }),
        secondary: x({
          color: f,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: x({ color: d, name: "error" }),
        warning: x({ color: g, name: "warning" }),
        info: x({ color: m, name: "info" }),
        success: x({ color: h, name: "success" }),
        grey: G2,
        contrastThreshold: a,
        getContrastText: y,
        augmentColor: x,
        tonalOffset: i,
        ...C,
      },
      o
    )
  );
}
function k_(e) {
  const n = {};
  return (
    Object.entries(e).forEach((i) => {
      const [o, u] = i;
      typeof u == "object" &&
        (n[o] = `${u.fontStyle ? `${u.fontStyle} ` : ""}${
          u.fontVariant ? `${u.fontVariant} ` : ""
        }${u.fontWeight ? `${u.fontWeight} ` : ""}${
          u.fontStretch ? `${u.fontStretch} ` : ""
        }${u.fontSize || ""}${u.lineHeight ? `/${u.lineHeight} ` : ""}${
          u.fontFamily || ""
        }`);
    }),
    n
  );
}
function B_(e, n) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
      [e.up("sm")]: { minHeight: 64 },
    },
    ...n,
  };
}
function U_(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Z1 = { textTransform: "uppercase" },
  J1 = '"Roboto", "Helvetica", "Arial", sans-serif';
function L_(e, n) {
  const {
      fontFamily: a = J1,
      fontSize: i = 14,
      fontWeightLight: o = 300,
      fontWeightRegular: u = 400,
      fontWeightMedium: f = 500,
      fontWeightBold: d = 700,
      htmlFontSize: m = 16,
      allVariants: h,
      pxToRem: g,
      ...y
    } = typeof n == "function" ? n(e) : n,
    x = i / 14,
    C = g || ((w) => `${(w / m) * x}rem`),
    b = (w, O, _, T, D) => ({
      fontFamily: a,
      fontWeight: w,
      fontSize: C(O),
      lineHeight: _,
      ...(a === J1 ? { letterSpacing: `${U_(T / O)}em` } : {}),
      ...D,
      ...h,
    }),
    S = {
      h1: b(o, 96, 1.167, -1.5),
      h2: b(o, 60, 1.2, -0.5),
      h3: b(u, 48, 1.167, 0),
      h4: b(u, 34, 1.235, 0.25),
      h5: b(u, 24, 1.334, 0),
      h6: b(f, 20, 1.6, 0.15),
      subtitle1: b(u, 16, 1.75, 0.15),
      subtitle2: b(f, 14, 1.57, 0.1),
      body1: b(u, 16, 1.5, 0.15),
      body2: b(u, 14, 1.43, 0.15),
      button: b(f, 14, 1.75, 0.4, Z1),
      caption: b(u, 12, 1.66, 0.4),
      overline: b(u, 12, 2.66, 1, Z1),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return yn(
    {
      htmlFontSize: m,
      pxToRem: C,
      fontFamily: a,
      fontSize: i,
      fontWeightLight: o,
      fontWeightRegular: u,
      fontWeightMedium: f,
      fontWeightBold: d,
      ...S,
    },
    y,
    { clone: !1 }
  );
}
const j_ = 0.2,
  $_ = 0.14,
  H_ = 0.12;
function Tt(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${j_})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${$_})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${H_})`,
  ].join(",");
}
const P_ = [
    "none",
    Tt(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    Tt(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    Tt(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    Tt(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    Tt(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    Tt(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    Tt(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    Tt(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    Tt(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    Tt(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    Tt(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    Tt(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    Tt(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    Tt(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    Tt(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    Tt(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    Tt(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    Tt(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    Tt(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    Tt(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    Tt(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    Tt(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    Tt(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    Tt(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  F_ = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  q_ = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function eS(e) {
  return `${Math.round(e)}ms`;
}
function V_(e) {
  if (!e) return 0;
  const n = e / 36;
  return Math.min(Math.round((4 + 15 * n ** 0.25 + n / 5) * 10), 3e3);
}
function G_(e) {
  const n = { ...F_, ...e.easing },
    a = { ...q_, ...e.duration };
  return {
    getAutoHeightDuration: V_,
    create: (o = ["all"], u = {}) => {
      const {
        duration: f = a.standard,
        easing: d = n.easeInOut,
        delay: m = 0,
        ...h
      } = u;
      return (Array.isArray(o) ? o : [o])
        .map(
          (g) =>
            `${g} ${typeof f == "string" ? f : eS(f)} ${d} ${
              typeof m == "string" ? m : eS(m)
            }`
        )
        .join(",");
    },
    ...e,
    easing: n,
    duration: a,
  };
}
const I_ = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
function Y_(e) {
  return (
    Fr(e) ||
    typeof e > "u" ||
    typeof e == "string" ||
    typeof e == "boolean" ||
    typeof e == "number" ||
    Array.isArray(e)
  );
}
function $E(e = {}) {
  const n = { ...e };
  function a(i) {
    const o = Object.entries(i);
    for (let u = 0; u < o.length; u++) {
      const [f, d] = o[u];
      !Y_(d) || f.startsWith("unstable_")
        ? delete i[f]
        : Fr(d) && ((i[f] = { ...d }), a(i[f]));
    }
  }
  return (
    a(n),
    `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(n, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
  );
}
function Mm(e = {}, ...n) {
  const {
    breakpoints: a,
    mixins: i = {},
    spacing: o,
    palette: u = {},
    transitions: f = {},
    typography: d = {},
    shape: m,
    ...h
  } = e;
  if (e.vars) throw new Error(Ea(20));
  const g = _g(u),
    y = Cg(e);
  let x = yn(y, {
    mixins: B_(y.breakpoints, i),
    palette: g,
    shadows: P_.slice(),
    typography: L_(g, d),
    transitions: G_(f),
    zIndex: { ...I_ },
  });
  return (
    (x = yn(x, h)),
    (x = n.reduce((C, b) => yn(C, b), x)),
    (x.unstable_sxConfig = {
      ...Eu,
      ...(h == null ? void 0 : h.unstable_sxConfig),
    }),
    (x.unstable_sx = function (b) {
      return rs({ sx: b, theme: this });
    }),
    (x.toRuntimeSource = $E),
    x
  );
}
function _m(e) {
  let n;
  return (
    e < 1 ? (n = 5.11916 * e ** 2) : (n = 4.5 * Math.log(e + 1) + 2),
    Math.round(n * 10) / 1e3
  );
}
const Q_ = [...Array(25)].map((e, n) => {
  if (n === 0) return "none";
  const a = _m(n);
  return `linear-gradient(rgba(255 255 255 / ${a}), rgba(255 255 255 / ${a}))`;
});
function HE(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38,
  };
}
function PE(e) {
  return e === "dark" ? Q_ : [];
}
function K_(e) {
  const { palette: n = { mode: "light" }, opacity: a, overlays: i, ...o } = e,
    u = _g(n);
  return {
    palette: u,
    opacity: { ...HE(u.mode), ...a },
    overlays: i || PE(u.mode),
    ...o,
  };
}
function X_(e) {
  var n;
  return (
    !!e[0].match(
      /(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/
    ) ||
    !!e[0].match(/sxConfig$/) ||
    (e[0] === "palette" &&
      !!((n = e[1]) != null && n.match(/(mode|contrastThreshold|tonalOffset)/)))
  );
}
const W_ = (e) => [
    ...[...Array(25)].map((n, a) => `--${e ? `${e}-` : ""}overlays-${a}`),
    `--${e ? `${e}-` : ""}palette-AppBar-darkBg`,
    `--${e ? `${e}-` : ""}palette-AppBar-darkColor`,
  ],
  Z_ = (e) => (n, a) => {
    const i = e.rootSelector || ":root",
      o = e.colorSchemeSelector;
    let u = o;
    if (
      (o === "class" && (u = ".%s"),
      o === "data" && (u = "[data-%s]"),
      o != null &&
        o.startsWith("data-") &&
        !o.includes("%s") &&
        (u = `[${o}="%s"]`),
      e.defaultColorScheme === n)
    ) {
      if (n === "dark") {
        const f = {};
        return (
          W_(e.cssVarPrefix).forEach((d) => {
            (f[d] = a[d]), delete a[d];
          }),
          u === "media"
            ? { [i]: a, "@media (prefers-color-scheme: dark)": { [i]: f } }
            : u
            ? { [u.replace("%s", n)]: f, [`${i}, ${u.replace("%s", n)}`]: a }
            : { [i]: { ...a, ...f } }
        );
      }
      if (u && u !== "media") return `${i}, ${u.replace("%s", String(n))}`;
    } else if (n) {
      if (u === "media")
        return { [`@media (prefers-color-scheme: ${String(n)})`]: { [i]: a } };
      if (u) return u.replace("%s", String(n));
    }
    return i;
  };
function J_(e, n) {
  n.forEach((a) => {
    e[a] || (e[a] = {});
  });
}
function te(e, n, a) {
  !e[n] && a && (e[n] = a);
}
function Vl(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : OE(e);
}
function pa(e, n) {
  `${n}Channel` in e || (e[`${n}Channel`] = ql(Vl(e[n])));
}
function e4(e) {
  return typeof e == "number"
    ? `${e}px`
    : typeof e == "string" || typeof e == "function" || Array.isArray(e)
    ? e
    : "8px";
}
const zr = (e) => {
    try {
      return e();
    } catch {}
  },
  t4 = (e = "mui") => E_(e);
function Fh(e, n, a, i) {
  if (!n) return;
  n = n === !0 ? {} : n;
  const o = i === "dark" ? "dark" : "light";
  if (!a) {
    e[i] = K_({
      ...n,
      palette: { mode: o, ...(n == null ? void 0 : n.palette) },
    });
    return;
  }
  const { palette: u, ...f } = Mm({
    ...a,
    palette: { mode: o, ...(n == null ? void 0 : n.palette) },
  });
  return (
    (e[i] = {
      ...n,
      palette: u,
      opacity: { ...HE(o), ...(n == null ? void 0 : n.opacity) },
      overlays: (n == null ? void 0 : n.overlays) || PE(o),
    }),
    f
  );
}
function n4(e = {}, ...n) {
  const {
      colorSchemes: a = { light: !0 },
      defaultColorScheme: i,
      disableCssColorScheme: o = !1,
      cssVarPrefix: u = "mui",
      shouldSkipGeneratingVar: f = X_,
      colorSchemeSelector: d = a.light && a.dark ? "media" : void 0,
      rootSelector: m = ":root",
      ...h
    } = e,
    g = Object.keys(a)[0],
    y = i || (a.light && g !== "light" ? "light" : g),
    x = t4(u),
    { [y]: C, light: b, dark: S, ...w } = a,
    O = { ...w };
  let _ = C;
  if (
    (((y === "dark" && !("dark" in a)) || (y === "light" && !("light" in a))) &&
      (_ = !0),
    !_)
  )
    throw new Error(Ea(21, y));
  const T = Fh(O, _, h, y);
  b && !O.light && Fh(O, b, void 0, "light"),
    S && !O.dark && Fh(O, S, void 0, "dark");
  let D = {
    defaultColorScheme: y,
    ...T,
    cssVarPrefix: u,
    colorSchemeSelector: d,
    rootSelector: m,
    getCssVar: x,
    colorSchemes: O,
    font: { ...k_(T.typography), ...T.font },
    spacing: e4(h.spacing),
  };
  Object.keys(D.colorSchemes).forEach((P) => {
    const R = D.colorSchemes[P].palette,
      V = (Q) => {
        const J = Q.split("-"),
          le = J[1],
          ne = J[2];
        return x(Q, R[le][ne]);
      };
    if (
      (R.mode === "light" &&
        (te(R.common, "background", "#fff"),
        te(R.common, "onBackground", "#000")),
      R.mode === "dark" &&
        (te(R.common, "background", "#000"),
        te(R.common, "onBackground", "#fff")),
      J_(R, [
        "Alert",
        "AppBar",
        "Avatar",
        "Button",
        "Chip",
        "FilledInput",
        "LinearProgress",
        "Skeleton",
        "Slider",
        "SnackbarContent",
        "SpeedDialAction",
        "StepConnector",
        "StepContent",
        "Switch",
        "TableCell",
        "Tooltip",
      ]),
      R.mode === "light")
    ) {
      te(R.Alert, "errorColor", mt(R.error.light, 0.6)),
        te(R.Alert, "infoColor", mt(R.info.light, 0.6)),
        te(R.Alert, "successColor", mt(R.success.light, 0.6)),
        te(R.Alert, "warningColor", mt(R.warning.light, 0.6)),
        te(R.Alert, "errorFilledBg", V("palette-error-main")),
        te(R.Alert, "infoFilledBg", V("palette-info-main")),
        te(R.Alert, "successFilledBg", V("palette-success-main")),
        te(R.Alert, "warningFilledBg", V("palette-warning-main")),
        te(
          R.Alert,
          "errorFilledColor",
          zr(() => R.getContrastText(R.error.main))
        ),
        te(
          R.Alert,
          "infoFilledColor",
          zr(() => R.getContrastText(R.info.main))
        ),
        te(
          R.Alert,
          "successFilledColor",
          zr(() => R.getContrastText(R.success.main))
        ),
        te(
          R.Alert,
          "warningFilledColor",
          zr(() => R.getContrastText(R.warning.main))
        ),
        te(R.Alert, "errorStandardBg", gt(R.error.light, 0.9)),
        te(R.Alert, "infoStandardBg", gt(R.info.light, 0.9)),
        te(R.Alert, "successStandardBg", gt(R.success.light, 0.9)),
        te(R.Alert, "warningStandardBg", gt(R.warning.light, 0.9)),
        te(R.Alert, "errorIconColor", V("palette-error-main")),
        te(R.Alert, "infoIconColor", V("palette-info-main")),
        te(R.Alert, "successIconColor", V("palette-success-main")),
        te(R.Alert, "warningIconColor", V("palette-warning-main")),
        te(R.AppBar, "defaultBg", V("palette-grey-100")),
        te(R.Avatar, "defaultBg", V("palette-grey-400")),
        te(R.Button, "inheritContainedBg", V("palette-grey-300")),
        te(R.Button, "inheritContainedHoverBg", V("palette-grey-A100")),
        te(R.Chip, "defaultBorder", V("palette-grey-400")),
        te(R.Chip, "defaultAvatarColor", V("palette-grey-700")),
        te(R.Chip, "defaultIconColor", V("palette-grey-700")),
        te(R.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"),
        te(R.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"),
        te(R.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"),
        te(R.LinearProgress, "primaryBg", gt(R.primary.main, 0.62)),
        te(R.LinearProgress, "secondaryBg", gt(R.secondary.main, 0.62)),
        te(R.LinearProgress, "errorBg", gt(R.error.main, 0.62)),
        te(R.LinearProgress, "infoBg", gt(R.info.main, 0.62)),
        te(R.LinearProgress, "successBg", gt(R.success.main, 0.62)),
        te(R.LinearProgress, "warningBg", gt(R.warning.main, 0.62)),
        te(
          R.Skeleton,
          "bg",
          `rgba(${V("palette-text-primaryChannel")} / 0.11)`
        ),
        te(R.Slider, "primaryTrack", gt(R.primary.main, 0.62)),
        te(R.Slider, "secondaryTrack", gt(R.secondary.main, 0.62)),
        te(R.Slider, "errorTrack", gt(R.error.main, 0.62)),
        te(R.Slider, "infoTrack", gt(R.info.main, 0.62)),
        te(R.Slider, "successTrack", gt(R.success.main, 0.62)),
        te(R.Slider, "warningTrack", gt(R.warning.main, 0.62));
      const Q = Vc(R.background.default, 0.8);
      te(R.SnackbarContent, "bg", Q),
        te(
          R.SnackbarContent,
          "color",
          zr(() => R.getContrastText(Q))
        ),
        te(R.SpeedDialAction, "fabHoverBg", Vc(R.background.paper, 0.15)),
        te(R.StepConnector, "border", V("palette-grey-400")),
        te(R.StepContent, "border", V("palette-grey-400")),
        te(R.Switch, "defaultColor", V("palette-common-white")),
        te(R.Switch, "defaultDisabledColor", V("palette-grey-100")),
        te(R.Switch, "primaryDisabledColor", gt(R.primary.main, 0.62)),
        te(R.Switch, "secondaryDisabledColor", gt(R.secondary.main, 0.62)),
        te(R.Switch, "errorDisabledColor", gt(R.error.main, 0.62)),
        te(R.Switch, "infoDisabledColor", gt(R.info.main, 0.62)),
        te(R.Switch, "successDisabledColor", gt(R.success.main, 0.62)),
        te(R.Switch, "warningDisabledColor", gt(R.warning.main, 0.62)),
        te(R.TableCell, "border", gt(qc(R.divider, 1), 0.88)),
        te(R.Tooltip, "bg", qc(R.grey[700], 0.92));
    }
    if (R.mode === "dark") {
      te(R.Alert, "errorColor", gt(R.error.light, 0.6)),
        te(R.Alert, "infoColor", gt(R.info.light, 0.6)),
        te(R.Alert, "successColor", gt(R.success.light, 0.6)),
        te(R.Alert, "warningColor", gt(R.warning.light, 0.6)),
        te(R.Alert, "errorFilledBg", V("palette-error-dark")),
        te(R.Alert, "infoFilledBg", V("palette-info-dark")),
        te(R.Alert, "successFilledBg", V("palette-success-dark")),
        te(R.Alert, "warningFilledBg", V("palette-warning-dark")),
        te(
          R.Alert,
          "errorFilledColor",
          zr(() => R.getContrastText(R.error.dark))
        ),
        te(
          R.Alert,
          "infoFilledColor",
          zr(() => R.getContrastText(R.info.dark))
        ),
        te(
          R.Alert,
          "successFilledColor",
          zr(() => R.getContrastText(R.success.dark))
        ),
        te(
          R.Alert,
          "warningFilledColor",
          zr(() => R.getContrastText(R.warning.dark))
        ),
        te(R.Alert, "errorStandardBg", mt(R.error.light, 0.9)),
        te(R.Alert, "infoStandardBg", mt(R.info.light, 0.9)),
        te(R.Alert, "successStandardBg", mt(R.success.light, 0.9)),
        te(R.Alert, "warningStandardBg", mt(R.warning.light, 0.9)),
        te(R.Alert, "errorIconColor", V("palette-error-main")),
        te(R.Alert, "infoIconColor", V("palette-info-main")),
        te(R.Alert, "successIconColor", V("palette-success-main")),
        te(R.Alert, "warningIconColor", V("palette-warning-main")),
        te(R.AppBar, "defaultBg", V("palette-grey-900")),
        te(R.AppBar, "darkBg", V("palette-background-paper")),
        te(R.AppBar, "darkColor", V("palette-text-primary")),
        te(R.Avatar, "defaultBg", V("palette-grey-600")),
        te(R.Button, "inheritContainedBg", V("palette-grey-800")),
        te(R.Button, "inheritContainedHoverBg", V("palette-grey-700")),
        te(R.Chip, "defaultBorder", V("palette-grey-700")),
        te(R.Chip, "defaultAvatarColor", V("palette-grey-300")),
        te(R.Chip, "defaultIconColor", V("palette-grey-300")),
        te(R.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"),
        te(R.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"),
        te(R.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"),
        te(R.LinearProgress, "primaryBg", mt(R.primary.main, 0.5)),
        te(R.LinearProgress, "secondaryBg", mt(R.secondary.main, 0.5)),
        te(R.LinearProgress, "errorBg", mt(R.error.main, 0.5)),
        te(R.LinearProgress, "infoBg", mt(R.info.main, 0.5)),
        te(R.LinearProgress, "successBg", mt(R.success.main, 0.5)),
        te(R.LinearProgress, "warningBg", mt(R.warning.main, 0.5)),
        te(
          R.Skeleton,
          "bg",
          `rgba(${V("palette-text-primaryChannel")} / 0.13)`
        ),
        te(R.Slider, "primaryTrack", mt(R.primary.main, 0.5)),
        te(R.Slider, "secondaryTrack", mt(R.secondary.main, 0.5)),
        te(R.Slider, "errorTrack", mt(R.error.main, 0.5)),
        te(R.Slider, "infoTrack", mt(R.info.main, 0.5)),
        te(R.Slider, "successTrack", mt(R.success.main, 0.5)),
        te(R.Slider, "warningTrack", mt(R.warning.main, 0.5));
      const Q = Vc(R.background.default, 0.98);
      te(R.SnackbarContent, "bg", Q),
        te(
          R.SnackbarContent,
          "color",
          zr(() => R.getContrastText(Q))
        ),
        te(R.SpeedDialAction, "fabHoverBg", Vc(R.background.paper, 0.15)),
        te(R.StepConnector, "border", V("palette-grey-600")),
        te(R.StepContent, "border", V("palette-grey-600")),
        te(R.Switch, "defaultColor", V("palette-grey-300")),
        te(R.Switch, "defaultDisabledColor", V("palette-grey-600")),
        te(R.Switch, "primaryDisabledColor", mt(R.primary.main, 0.55)),
        te(R.Switch, "secondaryDisabledColor", mt(R.secondary.main, 0.55)),
        te(R.Switch, "errorDisabledColor", mt(R.error.main, 0.55)),
        te(R.Switch, "infoDisabledColor", mt(R.info.main, 0.55)),
        te(R.Switch, "successDisabledColor", mt(R.success.main, 0.55)),
        te(R.Switch, "warningDisabledColor", mt(R.warning.main, 0.55)),
        te(R.TableCell, "border", mt(qc(R.divider, 1), 0.68)),
        te(R.Tooltip, "bg", qc(R.grey[700], 0.92));
    }
    pa(R.background, "default"),
      pa(R.background, "paper"),
      pa(R.common, "background"),
      pa(R.common, "onBackground"),
      pa(R, "divider"),
      Object.keys(R).forEach((Q) => {
        const J = R[Q];
        Q !== "tonalOffset" &&
          J &&
          typeof J == "object" &&
          (J.main && te(R[Q], "mainChannel", ql(Vl(J.main))),
          J.light && te(R[Q], "lightChannel", ql(Vl(J.light))),
          J.dark && te(R[Q], "darkChannel", ql(Vl(J.dark))),
          J.contrastText &&
            te(R[Q], "contrastTextChannel", ql(Vl(J.contrastText))),
          Q === "text" && (pa(R[Q], "primary"), pa(R[Q], "secondary")),
          Q === "action" &&
            (J.active && pa(R[Q], "active"),
            J.selected && pa(R[Q], "selected")));
      });
  }),
    (D = n.reduce((P, R) => yn(P, R), D));
  const M = {
      prefix: u,
      disableCssColorScheme: o,
      shouldSkipGeneratingVar: f,
      getSelector: Z_(D),
    },
    { vars: $, generateThemeVars: L, generateStyleSheets: K } = w_(D, M);
  return (
    (D.vars = $),
    Object.entries(D.colorSchemes[D.defaultColorScheme]).forEach(([P, R]) => {
      D[P] = R;
    }),
    (D.generateThemeVars = L),
    (D.generateStyleSheets = K),
    (D.generateSpacing = function () {
      return EE(h.spacing, Eg(this));
    }),
    (D.getColorSchemeSelector = T_(d)),
    (D.spacing = D.generateSpacing()),
    (D.shouldSkipGeneratingVar = f),
    (D.unstable_sxConfig = {
      ...Eu,
      ...(h == null ? void 0 : h.unstable_sxConfig),
    }),
    (D.unstable_sx = function (R) {
      return rs({ sx: R, theme: this });
    }),
    (D.toRuntimeSource = $E),
    D
  );
}
function tS(e, n, a) {
  e.colorSchemes &&
    a &&
    (e.colorSchemes[n] = {
      ...(a !== !0 && a),
      palette: _g({ ...(a === !0 ? {} : a.palette), mode: n }),
    });
}
function FE(e = {}, ...n) {
  const {
      palette: a,
      cssVariables: i = !1,
      colorSchemes: o = a ? void 0 : { light: !0 },
      defaultColorScheme: u = a == null ? void 0 : a.mode,
      ...f
    } = e,
    d = u || "light",
    m = o == null ? void 0 : o[d],
    h = {
      ...o,
      ...(a
        ? { [d]: { ...(typeof m != "boolean" && m), palette: a } }
        : void 0),
    };
  if (i === !1) {
    if (!("colorSchemes" in e)) return Mm(e, ...n);
    let g = a;
    "palette" in e ||
      (h[d] &&
        (h[d] !== !0
          ? (g = h[d].palette)
          : d === "dark" && (g = { mode: "dark" })));
    const y = Mm({ ...e, palette: g }, ...n);
    return (
      (y.defaultColorScheme = d),
      (y.colorSchemes = h),
      y.palette.mode === "light" &&
        ((y.colorSchemes.light = {
          ...(h.light !== !0 && h.light),
          palette: y.palette,
        }),
        tS(y, "dark", h.dark)),
      y.palette.mode === "dark" &&
        ((y.colorSchemes.dark = {
          ...(h.dark !== !0 && h.dark),
          palette: y.palette,
        }),
        tS(y, "light", h.light)),
      y
    );
  }
  return (
    !a && !("light" in h) && d === "light" && (h.light = !0),
    n4(
      {
        ...f,
        colorSchemes: h,
        defaultColorScheme: d,
        ...(typeof i != "boolean" && i),
      },
      ...n
    )
  );
}
const Dg = FE();
function Ng() {
  const e = wg(Dg);
  return e[Gf] || e;
}
function qE(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Cr = (e) => qE(e) && e !== "classes",
  Ce = t_({ themeId: Gf, defaultTheme: Dg, rootShouldForwardProp: Cr });
function r4(e) {
  return U.jsx(YM, { ...e, defaultTheme: Dg, themeId: Gf });
}
function a4(e) {
  return function (a) {
    return U.jsx(r4, {
      styles: typeof e == "function" ? (i) => e({ theme: i, ...a }) : e,
    });
  };
}
function i4() {
  return RE;
}
const wt = x_;
function Rt(e) {
  return S_(e);
}
function s4(e) {
  return vt("MuiSvgIcon", e);
}
ft("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const o4 = (e) => {
    const { color: n, fontSize: a, classes: i } = e,
      o = {
        root: ["root", n !== "inherit" && `color${Ne(n)}`, `fontSize${Ne(a)}`],
      };
    return bt(o, s4, i);
  },
  l4 = Ce("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, n) => {
      const { ownerState: a } = e;
      return [
        n.root,
        a.color !== "inherit" && n[`color${Ne(a.color)}`],
        n[`fontSize${Ne(a.fontSize)}`],
      ];
    },
  })(
    wt(({ theme: e }) => {
      var n, a, i, o, u, f, d, m, h, g, y, x, C, b;
      return {
        userSelect: "none",
        width: "1em",
        height: "1em",
        display: "inline-block",
        flexShrink: 0,
        transition:
          (o = (n = e.transitions) == null ? void 0 : n.create) == null
            ? void 0
            : o.call(n, "fill", {
                duration:
                  (i =
                    (a = (e.vars ?? e).transitions) == null
                      ? void 0
                      : a.duration) == null
                    ? void 0
                    : i.shorter,
              }),
        variants: [
          { props: (S) => !S.hasSvgAsChild, style: { fill: "currentColor" } },
          { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } },
          {
            props: { fontSize: "small" },
            style: {
              fontSize:
                ((f = (u = e.typography) == null ? void 0 : u.pxToRem) == null
                  ? void 0
                  : f.call(u, 20)) || "1.25rem",
            },
          },
          {
            props: { fontSize: "medium" },
            style: {
              fontSize:
                ((m = (d = e.typography) == null ? void 0 : d.pxToRem) == null
                  ? void 0
                  : m.call(d, 24)) || "1.5rem",
            },
          },
          {
            props: { fontSize: "large" },
            style: {
              fontSize:
                ((g = (h = e.typography) == null ? void 0 : h.pxToRem) == null
                  ? void 0
                  : g.call(h, 35)) || "2.1875rem",
            },
          },
          ...Object.entries((e.vars ?? e).palette)
            .filter(([, S]) => S && S.main)
            .map(([S]) => {
              var w, O;
              return {
                props: { color: S },
                style: {
                  color:
                    (O = (w = (e.vars ?? e).palette) == null ? void 0 : w[S]) ==
                    null
                      ? void 0
                      : O.main,
                },
              };
            }),
          {
            props: { color: "action" },
            style: {
              color:
                (x = (y = (e.vars ?? e).palette) == null ? void 0 : y.action) ==
                null
                  ? void 0
                  : x.active,
            },
          },
          {
            props: { color: "disabled" },
            style: {
              color:
                (b = (C = (e.vars ?? e).palette) == null ? void 0 : C.action) ==
                null
                  ? void 0
                  : b.disabled,
            },
          },
          { props: { color: "inherit" }, style: { color: void 0 } },
        ],
      };
    })
  ),
  Dm = E.forwardRef(function (n, a) {
    const i = Rt({ props: n, name: "MuiSvgIcon" }),
      {
        children: o,
        className: u,
        color: f = "inherit",
        component: d = "svg",
        fontSize: m = "medium",
        htmlColor: h,
        inheritViewBox: g = !1,
        titleAccess: y,
        viewBox: x = "0 0 24 24",
        ...C
      } = i,
      b = E.isValidElement(o) && o.type === "svg",
      S = {
        ...i,
        color: f,
        component: d,
        fontSize: m,
        instanceFontSize: n.fontSize,
        inheritViewBox: g,
        viewBox: x,
        hasSvgAsChild: b,
      },
      w = {};
    g || (w.viewBox = x);
    const O = o4(S);
    return U.jsxs(l4, {
      as: d,
      className: qe(O.root, u),
      focusable: "false",
      color: h,
      "aria-hidden": y ? void 0 : !0,
      role: y ? "img" : void 0,
      ref: a,
      ...w,
      ...C,
      ...(b && o.props),
      ownerState: S,
      children: [
        b ? o.props.children : o,
        y ? U.jsx("title", { children: y }) : null,
      ],
    });
  });
Dm.muiName = "SvgIcon";
function Cu(e, n) {
  function a(i, o) {
    return U.jsx(Dm, { "data-testid": `${n}Icon`, ref: o, ...i, children: e });
  }
  return (a.muiName = Dm.muiName), E.memo(E.forwardRef(a));
}
function VE(e, n) {
  if (e == null) return {};
  var a = {};
  for (var i in e)
    if ({}.hasOwnProperty.call(e, i)) {
      if (n.indexOf(i) !== -1) continue;
      a[i] = e[i];
    }
  return a;
}
function Nm(e, n) {
  return (
    (Nm = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (a, i) {
          return (a.__proto__ = i), a;
        }),
    Nm(e, n)
  );
}
function GE(e, n) {
  (e.prototype = Object.create(n.prototype)),
    (e.prototype.constructor = e),
    Nm(e, n);
}
var IE = rx();
const Gc = nx(IE),
  nS = { disabled: !1 },
  Rf = Ue.createContext(null);
var u4 = function (n) {
    return n.scrollTop;
  },
  Gl = "unmounted",
  Li = "exited",
  ji = "entering",
  Qs = "entered",
  zm = "exiting",
  Kr = (function (e) {
    GE(n, e);
    function n(i, o) {
      var u;
      u = e.call(this, i, o) || this;
      var f = o,
        d = f && !f.isMounting ? i.enter : i.appear,
        m;
      return (
        (u.appearStatus = null),
        i.in
          ? d
            ? ((m = Li), (u.appearStatus = ji))
            : (m = Qs)
          : i.unmountOnExit || i.mountOnEnter
          ? (m = Gl)
          : (m = Li),
        (u.state = { status: m }),
        (u.nextCallback = null),
        u
      );
    }
    n.getDerivedStateFromProps = function (o, u) {
      var f = o.in;
      return f && u.status === Gl ? { status: Li } : null;
    };
    var a = n.prototype;
    return (
      (a.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (a.componentDidUpdate = function (o) {
        var u = null;
        if (o !== this.props) {
          var f = this.state.status;
          this.props.in
            ? f !== ji && f !== Qs && (u = ji)
            : (f === ji || f === Qs) && (u = zm);
        }
        this.updateStatus(!1, u);
      }),
      (a.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (a.getTimeouts = function () {
        var o = this.props.timeout,
          u,
          f,
          d;
        return (
          (u = f = d = o),
          o != null &&
            typeof o != "number" &&
            ((u = o.exit),
            (f = o.enter),
            (d = o.appear !== void 0 ? o.appear : f)),
          { exit: u, enter: f, appear: d }
        );
      }),
      (a.updateStatus = function (o, u) {
        if ((o === void 0 && (o = !1), u !== null))
          if ((this.cancelNextCallback(), u === ji)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var f = this.props.nodeRef
                ? this.props.nodeRef.current
                : Gc.findDOMNode(this);
              f && u4(f);
            }
            this.performEnter(o);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === Li &&
            this.setState({ status: Gl });
      }),
      (a.performEnter = function (o) {
        var u = this,
          f = this.props.enter,
          d = this.context ? this.context.isMounting : o,
          m = this.props.nodeRef ? [d] : [Gc.findDOMNode(this), d],
          h = m[0],
          g = m[1],
          y = this.getTimeouts(),
          x = d ? y.appear : y.enter;
        if ((!o && !f) || nS.disabled) {
          this.safeSetState({ status: Qs }, function () {
            u.props.onEntered(h);
          });
          return;
        }
        this.props.onEnter(h, g),
          this.safeSetState({ status: ji }, function () {
            u.props.onEntering(h, g),
              u.onTransitionEnd(x, function () {
                u.safeSetState({ status: Qs }, function () {
                  u.props.onEntered(h, g);
                });
              });
          });
      }),
      (a.performExit = function () {
        var o = this,
          u = this.props.exit,
          f = this.getTimeouts(),
          d = this.props.nodeRef ? void 0 : Gc.findDOMNode(this);
        if (!u || nS.disabled) {
          this.safeSetState({ status: Li }, function () {
            o.props.onExited(d);
          });
          return;
        }
        this.props.onExit(d),
          this.safeSetState({ status: zm }, function () {
            o.props.onExiting(d),
              o.onTransitionEnd(f.exit, function () {
                o.safeSetState({ status: Li }, function () {
                  o.props.onExited(d);
                });
              });
          });
      }),
      (a.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (a.safeSetState = function (o, u) {
        (u = this.setNextCallback(u)), this.setState(o, u);
      }),
      (a.setNextCallback = function (o) {
        var u = this,
          f = !0;
        return (
          (this.nextCallback = function (d) {
            f && ((f = !1), (u.nextCallback = null), o(d));
          }),
          (this.nextCallback.cancel = function () {
            f = !1;
          }),
          this.nextCallback
        );
      }),
      (a.onTransitionEnd = function (o, u) {
        this.setNextCallback(u);
        var f = this.props.nodeRef
            ? this.props.nodeRef.current
            : Gc.findDOMNode(this),
          d = o == null && !this.props.addEndListener;
        if (!f || d) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var m = this.props.nodeRef
              ? [this.nextCallback]
              : [f, this.nextCallback],
            h = m[0],
            g = m[1];
          this.props.addEndListener(h, g);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (a.render = function () {
        var o = this.state.status;
        if (o === Gl) return null;
        var u = this.props,
          f = u.children;
        u.in,
          u.mountOnEnter,
          u.unmountOnExit,
          u.appear,
          u.enter,
          u.exit,
          u.timeout,
          u.addEndListener,
          u.onEnter,
          u.onEntering,
          u.onEntered,
          u.onExit,
          u.onExiting,
          u.onExited,
          u.nodeRef;
        var d = VE(u, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return Ue.createElement(
          Rf.Provider,
          { value: null },
          typeof f == "function"
            ? f(o, d)
            : Ue.cloneElement(Ue.Children.only(f), d)
        );
      }),
      n
    );
  })(Ue.Component);
Kr.contextType = Rf;
Kr.propTypes = {};
function Gs() {}
Kr.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Gs,
  onEntering: Gs,
  onEntered: Gs,
  onExit: Gs,
  onExiting: Gs,
  onExited: Gs,
};
Kr.UNMOUNTED = Gl;
Kr.EXITED = Li;
Kr.ENTERING = ji;
Kr.ENTERED = Qs;
Kr.EXITING = zm;
function c4(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function zg(e, n) {
  var a = function (u) {
      return n && E.isValidElement(u) ? n(u) : u;
    },
    i = Object.create(null);
  return (
    e &&
      E.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        i[o.key] = a(o);
      }),
    i
  );
}
function f4(e, n) {
  (e = e || {}), (n = n || {});
  function a(g) {
    return g in n ? n[g] : e[g];
  }
  var i = Object.create(null),
    o = [];
  for (var u in e) u in n ? o.length && ((i[u] = o), (o = [])) : o.push(u);
  var f,
    d = {};
  for (var m in n) {
    if (i[m])
      for (f = 0; f < i[m].length; f++) {
        var h = i[m][f];
        d[i[m][f]] = a(h);
      }
    d[m] = a(m);
  }
  for (f = 0; f < o.length; f++) d[o[f]] = a(o[f]);
  return d;
}
function Hi(e, n, a) {
  return a[n] != null ? a[n] : e.props[n];
}
function d4(e, n) {
  return zg(e.children, function (a) {
    return E.cloneElement(a, {
      onExited: n.bind(null, a),
      in: !0,
      appear: Hi(a, "appear", e),
      enter: Hi(a, "enter", e),
      exit: Hi(a, "exit", e),
    });
  });
}
function p4(e, n, a) {
  var i = zg(e.children),
    o = f4(n, i);
  return (
    Object.keys(o).forEach(function (u) {
      var f = o[u];
      if (E.isValidElement(f)) {
        var d = u in n,
          m = u in i,
          h = n[u],
          g = E.isValidElement(h) && !h.props.in;
        m && (!d || g)
          ? (o[u] = E.cloneElement(f, {
              onExited: a.bind(null, f),
              in: !0,
              exit: Hi(f, "exit", e),
              enter: Hi(f, "enter", e),
            }))
          : !m && d && !g
          ? (o[u] = E.cloneElement(f, { in: !1 }))
          : m &&
            d &&
            E.isValidElement(h) &&
            (o[u] = E.cloneElement(f, {
              onExited: a.bind(null, f),
              in: h.props.in,
              exit: Hi(f, "exit", e),
              enter: Hi(f, "enter", e),
            }));
      }
    }),
    o
  );
}
var h4 =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (n) {
        return e[n];
      });
    },
  m4 = {
    component: "div",
    childFactory: function (n) {
      return n;
    },
  },
  kg = (function (e) {
    GE(n, e);
    function n(i, o) {
      var u;
      u = e.call(this, i, o) || this;
      var f = u.handleExited.bind(c4(u));
      return (
        (u.state = {
          contextValue: { isMounting: !0 },
          handleExited: f,
          firstRender: !0,
        }),
        u
      );
    }
    var a = n.prototype;
    return (
      (a.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (a.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (n.getDerivedStateFromProps = function (o, u) {
        var f = u.children,
          d = u.handleExited,
          m = u.firstRender;
        return { children: m ? d4(o, d) : p4(o, f, d), firstRender: !1 };
      }),
      (a.handleExited = function (o, u) {
        var f = zg(this.props.children);
        o.key in f ||
          (o.props.onExited && o.props.onExited(u),
          this.mounted &&
            this.setState(function (d) {
              var m = bf({}, d.children);
              return delete m[o.key], { children: m };
            }));
      }),
      (a.render = function () {
        var o = this.props,
          u = o.component,
          f = o.childFactory,
          d = VE(o, ["component", "childFactory"]),
          m = this.state.contextValue,
          h = h4(this.state.children).map(f);
        return (
          delete d.appear,
          delete d.enter,
          delete d.exit,
          u === null
            ? Ue.createElement(Rf.Provider, { value: m }, h)
            : Ue.createElement(
                Rf.Provider,
                { value: m },
                Ue.createElement(u, d, h)
              )
        );
      }),
      n
    );
  })(Ue.Component);
kg.propTypes = {};
kg.defaultProps = m4;
const YE = (e) => e.scrollTop;
function Cf(e, n) {
  const { timeout: a, easing: i, style: o = {} } = e;
  return {
    duration:
      o.transitionDuration ?? (typeof a == "number" ? a : a[n.mode] || 0),
    easing:
      o.transitionTimingFunction ?? (typeof i == "object" ? i[n.mode] : i),
    delay: o.transitionDelay,
  };
}
function g4(e) {
  return vt("MuiPaper", e);
}
ft("MuiPaper", [
  "root",
  "rounded",
  "outlined",
  "elevation",
  "elevation0",
  "elevation1",
  "elevation2",
  "elevation3",
  "elevation4",
  "elevation5",
  "elevation6",
  "elevation7",
  "elevation8",
  "elevation9",
  "elevation10",
  "elevation11",
  "elevation12",
  "elevation13",
  "elevation14",
  "elevation15",
  "elevation16",
  "elevation17",
  "elevation18",
  "elevation19",
  "elevation20",
  "elevation21",
  "elevation22",
  "elevation23",
  "elevation24",
]);
const y4 = (e) => {
    const { square: n, elevation: a, variant: i, classes: o } = e,
      u = {
        root: [
          "root",
          i,
          !n && "rounded",
          i === "elevation" && `elevation${a}`,
        ],
      };
    return bt(u, g4, o);
  },
  v4 = Ce("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (e, n) => {
      const { ownerState: a } = e;
      return [
        n.root,
        n[a.variant],
        !a.square && n.rounded,
        a.variant === "elevation" && n[`elevation${a.elevation}`],
      ];
    },
  })(
    wt(({ theme: e }) => ({
      backgroundColor: (e.vars || e).palette.background.paper,
      color: (e.vars || e).palette.text.primary,
      transition: e.transitions.create("box-shadow"),
      variants: [
        {
          props: ({ ownerState: n }) => !n.square,
          style: { borderRadius: e.shape.borderRadius },
        },
        {
          props: { variant: "outlined" },
          style: { border: `1px solid ${(e.vars || e).palette.divider}` },
        },
        {
          props: { variant: "elevation" },
          style: {
            boxShadow: "var(--Paper-shadow)",
            backgroundImage: "var(--Paper-overlay)",
          },
        },
      ],
    }))
  ),
  QE = E.forwardRef(function (n, a) {
    var C;
    const i = Rt({ props: n, name: "MuiPaper" }),
      o = Ng(),
      {
        className: u,
        component: f = "div",
        elevation: d = 1,
        square: m = !1,
        variant: h = "elevation",
        ...g
      } = i,
      y = { ...i, component: f, elevation: d, square: m, variant: h },
      x = y4(y);
    return U.jsx(v4, {
      as: f,
      ownerState: y,
      className: qe(x.root, u),
      ref: a,
      ...g,
      style: {
        ...(h === "elevation" && {
          "--Paper-shadow": (o.vars || o).shadows[d],
          ...(o.vars && {
            "--Paper-overlay": (C = o.vars.overlays) == null ? void 0 : C[d],
          }),
          ...(!o.vars &&
            o.palette.mode === "dark" && {
              "--Paper-overlay": `linear-gradient(${qr("#fff", _m(d))}, ${qr(
                "#fff",
                _m(d)
              )})`,
            }),
        }),
        ...g.style,
      },
    });
  });
function lr(e, n) {
  const {
      className: a,
      elementType: i,
      ownerState: o,
      externalForwardedProps: u,
      internalForwardedProps: f,
      shouldForwardComponentProp: d = !1,
      ...m
    } = n,
    {
      component: h,
      slots: g = { [e]: void 0 },
      slotProps: y = { [e]: void 0 },
      ...x
    } = u,
    C = g[e] || i,
    b = UE(y[e], o),
    {
      props: { component: S, ...w },
      internalRef: O,
    } = BE({
      className: a,
      ...m,
      externalForwardedProps: e === "root" ? x : void 0,
      externalSlotProps: b,
    }),
    _ = vn(O, b == null ? void 0 : b.ref, n.ref),
    T = e === "root" ? S || h : S,
    D = zE(
      C,
      {
        ...(e === "root" && !h && !g[e] && f),
        ...(e !== "root" && !g[e] && f),
        ...w,
        ...(T && !d && { as: T }),
        ...(T && d && { component: T }),
        ref: _,
      },
      o
    );
  return [C, D];
}
class wf {
  constructor() {
    un(this, "mountEffect", () => {
      this.shouldMount &&
        !this.didMount &&
        this.ref.current !== null &&
        ((this.didMount = !0), this.mounted.resolve());
    });
    (this.ref = { current: null }),
      (this.mounted = null),
      (this.didMount = !1),
      (this.shouldMount = !1),
      (this.setShouldMount = null);
  }
  static create() {
    return new wf();
  }
  static use() {
    const n = _E(wf.create).current,
      [a, i] = E.useState(!1);
    return (
      (n.shouldMount = a),
      (n.setShouldMount = i),
      E.useEffect(n.mountEffect, [a]),
      n
    );
  }
  mount() {
    return (
      this.mounted ||
        ((this.mounted = S4()),
        (this.shouldMount = !0),
        this.setShouldMount(this.shouldMount)),
      this.mounted
    );
  }
  start(...n) {
    this.mount().then(() => {
      var a;
      return (a = this.ref.current) == null ? void 0 : a.start(...n);
    });
  }
  stop(...n) {
    this.mount().then(() => {
      var a;
      return (a = this.ref.current) == null ? void 0 : a.stop(...n);
    });
  }
  pulsate(...n) {
    this.mount().then(() => {
      var a;
      return (a = this.ref.current) == null ? void 0 : a.pulsate(...n);
    });
  }
}
function b4() {
  return wf.use();
}
function S4() {
  let e, n;
  const a = new Promise((i, o) => {
    (e = i), (n = o);
  });
  return (a.resolve = e), (a.reject = n), a;
}
function x4(e) {
  const {
      className: n,
      classes: a,
      pulsate: i = !1,
      rippleX: o,
      rippleY: u,
      rippleSize: f,
      in: d,
      onExited: m,
      timeout: h,
    } = e,
    [g, y] = E.useState(!1),
    x = qe(n, a.ripple, a.rippleVisible, i && a.ripplePulsate),
    C = { width: f, height: f, top: -(f / 2) + u, left: -(f / 2) + o },
    b = qe(a.child, g && a.childLeaving, i && a.childPulsate);
  return (
    !d && !g && y(!0),
    E.useEffect(() => {
      if (!d && m != null) {
        const S = setTimeout(m, h);
        return () => {
          clearTimeout(S);
        };
      }
    }, [m, d, h]),
    U.jsx("span", {
      className: x,
      style: C,
      children: U.jsx("span", { className: b }),
    })
  );
}
const ir = ft("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  km = 550,
  E4 = 80,
  R4 = bu`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
  C4 = bu`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
  w4 = bu`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,
  T4 = Ce("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  A4 = Ce(x4, { name: "MuiTouchRipple", slot: "Ripple" })`
  opacity: 0;
  position: absolute;

  &.${ir.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${R4};
    animation-duration: ${km}ms;
    animation-timing-function: ${({ theme: e }) =>
      e.transitions.easing.easeInOut};
  }

  &.${ir.ripplePulsate} {
    animation-duration: ${({ theme: e }) => e.transitions.duration.shorter}ms;
  }

  & .${ir.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${ir.childLeaving} {
    opacity: 0;
    animation-name: ${C4};
    animation-duration: ${km}ms;
    animation-timing-function: ${({ theme: e }) =>
      e.transitions.easing.easeInOut};
  }

  & .${ir.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${w4};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: e }) =>
      e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,
  O4 = E.forwardRef(function (n, a) {
    const i = Rt({ props: n, name: "MuiTouchRipple" }),
      { center: o = !1, classes: u = {}, className: f, ...d } = i,
      [m, h] = E.useState([]),
      g = E.useRef(0),
      y = E.useRef(null);
    E.useEffect(() => {
      y.current && (y.current(), (y.current = null));
    }, [m]);
    const x = E.useRef(!1),
      C = DE(),
      b = E.useRef(null),
      S = E.useRef(null),
      w = E.useCallback(
        (D) => {
          const {
            pulsate: M,
            rippleX: $,
            rippleY: L,
            rippleSize: K,
            cb: P,
          } = D;
          h((R) => [
            ...R,
            U.jsx(
              A4,
              {
                classes: {
                  ripple: qe(u.ripple, ir.ripple),
                  rippleVisible: qe(u.rippleVisible, ir.rippleVisible),
                  ripplePulsate: qe(u.ripplePulsate, ir.ripplePulsate),
                  child: qe(u.child, ir.child),
                  childLeaving: qe(u.childLeaving, ir.childLeaving),
                  childPulsate: qe(u.childPulsate, ir.childPulsate),
                },
                timeout: km,
                pulsate: M,
                rippleX: $,
                rippleY: L,
                rippleSize: K,
              },
              g.current
            ),
          ]),
            (g.current += 1),
            (y.current = P);
        },
        [u]
      ),
      O = E.useCallback(
        (D = {}, M = {}, $ = () => {}) => {
          const {
            pulsate: L = !1,
            center: K = o || M.pulsate,
            fakeElement: P = !1,
          } = M;
          if ((D == null ? void 0 : D.type) === "mousedown" && x.current) {
            x.current = !1;
            return;
          }
          (D == null ? void 0 : D.type) === "touchstart" && (x.current = !0);
          const R = P ? null : S.current,
            V = R
              ? R.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let Q, J, le;
          if (
            K ||
            D === void 0 ||
            (D.clientX === 0 && D.clientY === 0) ||
            (!D.clientX && !D.touches)
          )
            (Q = Math.round(V.width / 2)), (J = Math.round(V.height / 2));
          else {
            const { clientX: ne, clientY: F } =
              D.touches && D.touches.length > 0 ? D.touches[0] : D;
            (Q = Math.round(ne - V.left)), (J = Math.round(F - V.top));
          }
          if (K)
            (le = Math.sqrt((2 * V.width ** 2 + V.height ** 2) / 3)),
              le % 2 === 0 && (le += 1);
          else {
            const ne =
                Math.max(Math.abs((R ? R.clientWidth : 0) - Q), Q) * 2 + 2,
              F = Math.max(Math.abs((R ? R.clientHeight : 0) - J), J) * 2 + 2;
            le = Math.sqrt(ne ** 2 + F ** 2);
          }
          D != null && D.touches
            ? b.current === null &&
              ((b.current = () => {
                w({
                  pulsate: L,
                  rippleX: Q,
                  rippleY: J,
                  rippleSize: le,
                  cb: $,
                });
              }),
              C.start(E4, () => {
                b.current && (b.current(), (b.current = null));
              }))
            : w({ pulsate: L, rippleX: Q, rippleY: J, rippleSize: le, cb: $ });
        },
        [o, w, C]
      ),
      _ = E.useCallback(() => {
        O({}, { pulsate: !0 });
      }, [O]),
      T = E.useCallback(
        (D, M) => {
          if (
            (C.clear(),
            (D == null ? void 0 : D.type) === "touchend" && b.current)
          ) {
            b.current(),
              (b.current = null),
              C.start(0, () => {
                T(D, M);
              });
            return;
          }
          (b.current = null),
            h(($) => ($.length > 0 ? $.slice(1) : $)),
            (y.current = M);
        },
        [C]
      );
    return (
      E.useImperativeHandle(a, () => ({ pulsate: _, start: O, stop: T }), [
        _,
        O,
        T,
      ]),
      U.jsx(T4, {
        className: qe(ir.root, u.root, f),
        ref: S,
        ...d,
        children: U.jsx(kg, { component: null, exit: !0, children: m }),
      })
    );
  });
function M4(e) {
  return vt("MuiButtonBase", e);
}
const _4 = ft("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  D4 = (e) => {
    const {
        disabled: n,
        focusVisible: a,
        focusVisibleClassName: i,
        classes: o,
      } = e,
      f = bt({ root: ["root", n && "disabled", a && "focusVisible"] }, M4, o);
    return a && i && (f.root += ` ${i}`), f;
  },
  N4 = Ce("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e, n) => n.root,
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${_4.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  KE = E.forwardRef(function (n, a) {
    const i = Rt({ props: n, name: "MuiButtonBase" }),
      {
        action: o,
        centerRipple: u = !1,
        children: f,
        className: d,
        component: m = "button",
        disabled: h = !1,
        disableRipple: g = !1,
        disableTouchRipple: y = !1,
        focusRipple: x = !1,
        focusVisibleClassName: C,
        LinkComponent: b = "a",
        onBlur: S,
        onClick: w,
        onContextMenu: O,
        onDragLeave: _,
        onFocus: T,
        onFocusVisible: D,
        onKeyDown: M,
        onKeyUp: $,
        onMouseDown: L,
        onMouseLeave: K,
        onMouseUp: P,
        onTouchEnd: R,
        onTouchMove: V,
        onTouchStart: Q,
        tabIndex: J = 0,
        TouchRippleProps: le,
        touchRippleRef: ne,
        type: F,
        ...ie
      } = i,
      fe = E.useRef(null),
      ue = b4(),
      k = vn(ue.ref, ne),
      [ee, me] = E.useState(!1);
    h && ee && me(!1),
      E.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            me(!0), fe.current.focus();
          },
        }),
        []
      );
    const he = ue.shouldMount && !g && !h;
    E.useEffect(() => {
      ee && x && !g && ue.pulsate();
    }, [g, x, ee, ue]);
    const ce = ha(ue, "start", L, y),
      be = ha(ue, "stop", O, y),
      xe = ha(ue, "stop", _, y),
      $e = ha(ue, "stop", P, y),
      Te = ha(
        ue,
        "stop",
        (Z) => {
          ee && Z.preventDefault(), K && K(Z);
        },
        y
      ),
      Ae = ha(ue, "start", Q, y),
      Se = ha(ue, "stop", R, y),
      ke = ha(ue, "stop", V, y),
      _e = ha(
        ue,
        "stop",
        (Z) => {
          G1(Z.target) || me(!1), S && S(Z);
        },
        !1
      ),
      We = to((Z) => {
        fe.current || (fe.current = Z.currentTarget),
          G1(Z.target) && (me(!0), D && D(Z)),
          T && T(Z);
      }),
      Le = () => {
        const Z = fe.current;
        return m && m !== "button" && !(Z.tagName === "A" && Z.href);
      },
      rt = to((Z) => {
        x &&
          !Z.repeat &&
          ee &&
          Z.key === " " &&
          ue.stop(Z, () => {
            ue.start(Z);
          }),
          Z.target === Z.currentTarget &&
            Le() &&
            Z.key === " " &&
            Z.preventDefault(),
          M && M(Z),
          Z.target === Z.currentTarget &&
            Le() &&
            Z.key === "Enter" &&
            !h &&
            (Z.preventDefault(), w && w(Z));
      }),
      Ut = to((Z) => {
        x &&
          Z.key === " " &&
          ee &&
          !Z.defaultPrevented &&
          ue.stop(Z, () => {
            ue.pulsate(Z);
          }),
          $ && $(Z),
          w &&
            Z.target === Z.currentTarget &&
            Le() &&
            Z.key === " " &&
            !Z.defaultPrevented &&
            w(Z);
      });
    let Ft = m;
    Ft === "button" && (ie.href || ie.to) && (Ft = b);
    const z = {};
    Ft === "button"
      ? ((z.type = F === void 0 ? "button" : F), (z.disabled = h))
      : (!ie.href && !ie.to && (z.role = "button"),
        h && (z["aria-disabled"] = h));
    const G = vn(a, fe),
      X = {
        ...i,
        centerRipple: u,
        component: m,
        disabled: h,
        disableRipple: g,
        disableTouchRipple: y,
        focusRipple: x,
        tabIndex: J,
        focusVisible: ee,
      },
      de = D4(X);
    return U.jsxs(N4, {
      as: Ft,
      className: qe(de.root, d),
      ownerState: X,
      onBlur: _e,
      onClick: w,
      onContextMenu: be,
      onFocus: We,
      onKeyDown: rt,
      onKeyUp: Ut,
      onMouseDown: ce,
      onMouseLeave: Te,
      onMouseUp: $e,
      onDragLeave: xe,
      onTouchEnd: Se,
      onTouchMove: ke,
      onTouchStart: Ae,
      ref: G,
      tabIndex: h ? -1 : J,
      type: F,
      ...z,
      ...ie,
      children: [f, he ? U.jsx(O4, { ref: k, center: u, ...le }) : null],
    });
  });
function ha(e, n, a, i = !1) {
  return to((o) => (a && a(o), i || e[n](o), !0));
}
function z4(e) {
  return typeof e.main == "string";
}
function k4(e, n = []) {
  if (!z4(e)) return !1;
  for (const a of n)
    if (!e.hasOwnProperty(a) || typeof e[a] != "string") return !1;
  return !0;
}
function Yr(e = []) {
  return ([, n]) => n && k4(n, e);
}
function B4(e) {
  return vt("MuiCircularProgress", e);
}
ft("MuiCircularProgress", [
  "root",
  "determinate",
  "indeterminate",
  "colorPrimary",
  "colorSecondary",
  "svg",
  "circle",
  "circleDeterminate",
  "circleIndeterminate",
  "circleDisableShrink",
]);
const Qa = 44,
  Bm = bu`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,
  Um = bu`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,
  U4 =
    typeof Bm != "string"
      ? bg`
        animation: ${Bm} 1.4s linear infinite;
      `
      : null,
  L4 =
    typeof Um != "string"
      ? bg`
        animation: ${Um} 1.4s ease-in-out infinite;
      `
      : null,
  j4 = (e) => {
    const { classes: n, variant: a, color: i, disableShrink: o } = e,
      u = {
        root: ["root", a, `color${Ne(i)}`],
        svg: ["svg"],
        circle: ["circle", `circle${Ne(a)}`, o && "circleDisableShrink"],
      };
    return bt(u, B4, n);
  },
  $4 = Ce("span", {
    name: "MuiCircularProgress",
    slot: "Root",
    overridesResolver: (e, n) => {
      const { ownerState: a } = e;
      return [n.root, n[a.variant], n[`color${Ne(a.color)}`]];
    },
  })(
    wt(({ theme: e }) => ({
      display: "inline-block",
      variants: [
        {
          props: { variant: "determinate" },
          style: { transition: e.transitions.create("transform") },
        },
        {
          props: { variant: "indeterminate" },
          style: U4 || { animation: `${Bm} 1.4s linear infinite` },
        },
        ...Object.entries(e.palette)
          .filter(Yr())
          .map(([n]) => ({
            props: { color: n },
            style: { color: (e.vars || e).palette[n].main },
          })),
      ],
    }))
  ),
  H4 = Ce("svg", {
    name: "MuiCircularProgress",
    slot: "Svg",
    overridesResolver: (e, n) => n.svg,
  })({ display: "block" }),
  P4 = Ce("circle", {
    name: "MuiCircularProgress",
    slot: "Circle",
    overridesResolver: (e, n) => {
      const { ownerState: a } = e;
      return [
        n.circle,
        n[`circle${Ne(a.variant)}`],
        a.disableShrink && n.circleDisableShrink,
      ];
    },
  })(
    wt(({ theme: e }) => ({
      stroke: "currentColor",
      variants: [
        {
          props: { variant: "determinate" },
          style: { transition: e.transitions.create("stroke-dashoffset") },
        },
        {
          props: { variant: "indeterminate" },
          style: { strokeDasharray: "80px, 200px", strokeDashoffset: 0 },
        },
        {
          props: ({ ownerState: n }) =>
            n.variant === "indeterminate" && !n.disableShrink,
          style: L4 || { animation: `${Um} 1.4s ease-in-out infinite` },
        },
      ],
    }))
  ),
  Bg = E.forwardRef(function (n, a) {
    const i = Rt({ props: n, name: "MuiCircularProgress" }),
      {
        className: o,
        color: u = "primary",
        disableShrink: f = !1,
        size: d = 40,
        style: m,
        thickness: h = 3.6,
        value: g = 0,
        variant: y = "indeterminate",
        ...x
      } = i,
      C = {
        ...i,
        color: u,
        disableShrink: f,
        size: d,
        thickness: h,
        value: g,
        variant: y,
      },
      b = j4(C),
      S = {},
      w = {},
      O = {};
    if (y === "determinate") {
      const _ = 2 * Math.PI * ((Qa - h) / 2);
      (S.strokeDasharray = _.toFixed(3)),
        (O["aria-valuenow"] = Math.round(g)),
        (S.strokeDashoffset = `${(((100 - g) / 100) * _).toFixed(3)}px`),
        (w.transform = "rotate(-90deg)");
    }
    return U.jsx($4, {
      className: qe(b.root, o),
      style: { width: d, height: d, ...w, ...m },
      ownerState: C,
      ref: a,
      role: "progressbar",
      ...O,
      ...x,
      children: U.jsx(H4, {
        className: b.svg,
        ownerState: C,
        viewBox: `${Qa / 2} ${Qa / 2} ${Qa} ${Qa}`,
        children: U.jsx(P4, {
          className: b.circle,
          style: S,
          ownerState: C,
          cx: Qa,
          cy: Qa,
          r: (Qa - h) / 2,
          fill: "none",
          strokeWidth: h,
        }),
      }),
    });
  });
function F4(e) {
  return vt("MuiIconButton", e);
}
const rS = ft("MuiIconButton", [
    "root",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorError",
    "colorInfo",
    "colorSuccess",
    "colorWarning",
    "edgeStart",
    "edgeEnd",
    "sizeSmall",
    "sizeMedium",
    "sizeLarge",
    "loading",
    "loadingIndicator",
    "loadingWrapper",
  ]),
  q4 = (e) => {
    const {
        classes: n,
        disabled: a,
        color: i,
        edge: o,
        size: u,
        loading: f,
      } = e,
      d = {
        root: [
          "root",
          f && "loading",
          a && "disabled",
          i !== "default" && `color${Ne(i)}`,
          o && `edge${Ne(o)}`,
          `size${Ne(u)}`,
        ],
        loadingIndicator: ["loadingIndicator"],
        loadingWrapper: ["loadingWrapper"],
      };
    return bt(d, F4, n);
  },
  V4 = Ce(KE, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (e, n) => {
      const { ownerState: a } = e;
      return [
        n.root,
        a.loading && n.loading,
        a.color !== "default" && n[`color${Ne(a.color)}`],
        a.edge && n[`edge${Ne(a.edge)}`],
        n[`size${Ne(a.size)}`],
      ];
    },
  })(
    wt(({ theme: e }) => ({
      textAlign: "center",
      flex: "0 0 auto",
      fontSize: e.typography.pxToRem(24),
      padding: 8,
      borderRadius: "50%",
      color: (e.vars || e).palette.action.active,
      transition: e.transitions.create("background-color", {
        duration: e.transitions.duration.shortest,
      }),
      variants: [
        {
          props: (n) => !n.disableRipple,
          style: {
            "--IconButton-hoverBg": e.vars
              ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
              : qr(e.palette.action.active, e.palette.action.hoverOpacity),
            "&:hover": {
              backgroundColor: "var(--IconButton-hoverBg)",
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
          },
        },
        { props: { edge: "start" }, style: { marginLeft: -12 } },
        { props: { edge: "start", size: "small" }, style: { marginLeft: -3 } },
        { props: { edge: "end" }, style: { marginRight: -12 } },
        { props: { edge: "end", size: "small" }, style: { marginRight: -3 } },
      ],
    })),
    wt(({ theme: e }) => ({
      variants: [
        { props: { color: "inherit" }, style: { color: "inherit" } },
        ...Object.entries(e.palette)
          .filter(Yr())
          .map(([n]) => ({
            props: { color: n },
            style: { color: (e.vars || e).palette[n].main },
          })),
        ...Object.entries(e.palette)
          .filter(Yr())
          .map(([n]) => ({
            props: { color: n },
            style: {
              "--IconButton-hoverBg": e.vars
                ? `rgba(${(e.vars || e).palette[n].mainChannel} / ${
                    e.vars.palette.action.hoverOpacity
                  })`
                : qr(
                    (e.vars || e).palette[n].main,
                    e.palette.action.hoverOpacity
                  ),
            },
          })),
        {
          props: { size: "small" },
          style: { padding: 5, fontSize: e.typography.pxToRem(18) },
        },
        {
          props: { size: "large" },
          style: { padding: 12, fontSize: e.typography.pxToRem(28) },
        },
      ],
      [`&.${rS.disabled}`]: {
        backgroundColor: "transparent",
        color: (e.vars || e).palette.action.disabled,
      },
      [`&.${rS.loading}`]: { color: "transparent" },
    }))
  ),
  G4 = Ce("span", {
    name: "MuiIconButton",
    slot: "LoadingIndicator",
    overridesResolver: (e, n) => n.loadingIndicator,
  })(({ theme: e }) => ({
    display: "none",
    position: "absolute",
    visibility: "visible",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: (e.vars || e).palette.action.disabled,
    variants: [{ props: { loading: !0 }, style: { display: "flex" } }],
  })),
  I4 = E.forwardRef(function (n, a) {
    const i = Rt({ props: n, name: "MuiIconButton" }),
      {
        edge: o = !1,
        children: u,
        className: f,
        color: d = "default",
        disabled: m = !1,
        disableFocusRipple: h = !1,
        size: g = "medium",
        id: y,
        loading: x = null,
        loadingIndicator: C,
        ...b
      } = i,
      S = ad(y),
      w = C ?? U.jsx(Bg, { "aria-labelledby": S, color: "inherit", size: 16 }),
      O = {
        ...i,
        edge: o,
        color: d,
        disabled: m,
        disableFocusRipple: h,
        loading: x,
        loadingIndicator: w,
        size: g,
      },
      _ = q4(O);
    return U.jsxs(V4, {
      id: S,
      className: qe(_.root, f),
      centerRipple: !0,
      focusRipple: !h,
      disabled: m || x,
      ref: a,
      ...b,
      ownerState: O,
      children: [
        typeof x == "boolean" &&
          U.jsx("span", {
            className: _.loadingWrapper,
            style: { display: "contents" },
            children: U.jsx(G4, {
              className: _.loadingIndicator,
              ownerState: O,
              children: x && w,
            }),
          }),
        u,
      ],
    });
  });
function Y4(e) {
  return vt("MuiTypography", e);
}
ft("MuiTypography", [
  "root",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "inherit",
  "button",
  "caption",
  "overline",
  "alignLeft",
  "alignRight",
  "alignCenter",
  "alignJustify",
  "noWrap",
  "gutterBottom",
  "paragraph",
]);
const Q4 = {
    primary: !0,
    secondary: !0,
    error: !0,
    info: !0,
    success: !0,
    warning: !0,
    textPrimary: !0,
    textSecondary: !0,
    textDisabled: !0,
  },
  K4 = i4(),
  X4 = (e) => {
    const {
        align: n,
        gutterBottom: a,
        noWrap: i,
        paragraph: o,
        variant: u,
        classes: f,
      } = e,
      d = {
        root: [
          "root",
          u,
          e.align !== "inherit" && `align${Ne(n)}`,
          a && "gutterBottom",
          i && "noWrap",
          o && "paragraph",
        ],
      };
    return bt(d, Y4, f);
  },
  W4 = Ce("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (e, n) => {
      const { ownerState: a } = e;
      return [
        n.root,
        a.variant && n[a.variant],
        a.align !== "inherit" && n[`align${Ne(a.align)}`],
        a.noWrap && n.noWrap,
        a.gutterBottom && n.gutterBottom,
        a.paragraph && n.paragraph,
      ];
    },
  })(
    wt(({ theme: e }) => {
      var n;
      return {
        margin: 0,
        variants: [
          {
            props: { variant: "inherit" },
            style: {
              font: "inherit",
              lineHeight: "inherit",
              letterSpacing: "inherit",
            },
          },
          ...Object.entries(e.typography)
            .filter(([a, i]) => a !== "inherit" && i && typeof i == "object")
            .map(([a, i]) => ({ props: { variant: a }, style: i })),
          ...Object.entries(e.palette)
            .filter(Yr())
            .map(([a]) => ({
              props: { color: a },
              style: { color: (e.vars || e).palette[a].main },
            })),
          ...Object.entries(((n = e.palette) == null ? void 0 : n.text) || {})
            .filter(([, a]) => typeof a == "string")
            .map(([a]) => ({
              props: { color: `text${Ne(a)}` },
              style: { color: (e.vars || e).palette.text[a] },
            })),
          {
            props: ({ ownerState: a }) => a.align !== "inherit",
            style: { textAlign: "var(--Typography-textAlign)" },
          },
          {
            props: ({ ownerState: a }) => a.noWrap,
            style: {
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            },
          },
          {
            props: ({ ownerState: a }) => a.gutterBottom,
            style: { marginBottom: "0.35em" },
          },
          {
            props: ({ ownerState: a }) => a.paragraph,
            style: { marginBottom: 16 },
          },
        ],
      };
    })
  ),
  aS = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
  },
  Z4 = E.forwardRef(function (n, a) {
    const { color: i, ...o } = Rt({ props: n, name: "MuiTypography" }),
      u = !Q4[i],
      f = K4({ ...o, ...(u && { color: i }) }),
      {
        align: d = "inherit",
        className: m,
        component: h,
        gutterBottom: g = !1,
        noWrap: y = !1,
        paragraph: x = !1,
        variant: C = "body1",
        variantMapping: b = aS,
        ...S
      } = f,
      w = {
        ...f,
        align: d,
        color: i,
        className: m,
        component: h,
        gutterBottom: g,
        noWrap: y,
        paragraph: x,
        variant: C,
        variantMapping: b,
      },
      O = h || (x ? "p" : b[C] || aS[C]) || "span",
      _ = X4(w);
    return U.jsx(W4, {
      as: O,
      ref: a,
      className: qe(_.root, m),
      ...S,
      ownerState: w,
      style: {
        ...(d !== "inherit" && { "--Typography-textAlign": d }),
        ...S.style,
      },
    });
  });
function J4(e) {
  return vt("MuiAppBar", e);
}
ft("MuiAppBar", [
  "root",
  "positionFixed",
  "positionAbsolute",
  "positionSticky",
  "positionStatic",
  "positionRelative",
  "colorDefault",
  "colorPrimary",
  "colorSecondary",
  "colorInherit",
  "colorTransparent",
  "colorError",
  "colorInfo",
  "colorSuccess",
  "colorWarning",
]);
const eD = (e) => {
    const { color: n, position: a, classes: i } = e,
      o = { root: ["root", `color${Ne(n)}`, `position${Ne(a)}`] };
    return bt(o, J4, i);
  },
  iS = (e, n) => (e ? `${e == null ? void 0 : e.replace(")", "")}, ${n})` : n),
  tD = Ce(QE, {
    name: "MuiAppBar",
    slot: "Root",
    overridesResolver: (e, n) => {
      const { ownerState: a } = e;
      return [n.root, n[`position${Ne(a.position)}`], n[`color${Ne(a.color)}`]];
    },
  })(
    wt(({ theme: e }) => ({
      display: "flex",
      flexDirection: "column",
      width: "100%",
      boxSizing: "border-box",
      flexShrink: 0,
      variants: [
        {
          props: { position: "fixed" },
          style: {
            position: "fixed",
            zIndex: (e.vars || e).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0,
            "@media print": { position: "absolute" },
          },
        },
        {
          props: { position: "absolute" },
          style: {
            position: "absolute",
            zIndex: (e.vars || e).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0,
          },
        },
        {
          props: { position: "sticky" },
          style: {
            position: "sticky",
            zIndex: (e.vars || e).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0,
          },
        },
        { props: { position: "static" }, style: { position: "static" } },
        { props: { position: "relative" }, style: { position: "relative" } },
        { props: { color: "inherit" }, style: { "--AppBar-color": "inherit" } },
        {
          props: { color: "default" },
          style: {
            "--AppBar-background": e.vars
              ? e.vars.palette.AppBar.defaultBg
              : e.palette.grey[100],
            "--AppBar-color": e.vars
              ? e.vars.palette.text.primary
              : e.palette.getContrastText(e.palette.grey[100]),
            ...e.applyStyles("dark", {
              "--AppBar-background": e.vars
                ? e.vars.palette.AppBar.defaultBg
                : e.palette.grey[900],
              "--AppBar-color": e.vars
                ? e.vars.palette.text.primary
                : e.palette.getContrastText(e.palette.grey[900]),
            }),
          },
        },
        ...Object.entries(e.palette)
          .filter(Yr(["contrastText"]))
          .map(([n]) => ({
            props: { color: n },
            style: {
              "--AppBar-background": (e.vars ?? e).palette[n].main,
              "--AppBar-color": (e.vars ?? e).palette[n].contrastText,
            },
          })),
        {
          props: (n) =>
            n.enableColorOnDark === !0 &&
            !["inherit", "transparent"].includes(n.color),
          style: {
            backgroundColor: "var(--AppBar-background)",
            color: "var(--AppBar-color)",
          },
        },
        {
          props: (n) =>
            n.enableColorOnDark === !1 &&
            !["inherit", "transparent"].includes(n.color),
          style: {
            backgroundColor: "var(--AppBar-background)",
            color: "var(--AppBar-color)",
            ...e.applyStyles("dark", {
              backgroundColor: e.vars
                ? iS(e.vars.palette.AppBar.darkBg, "var(--AppBar-background)")
                : null,
              color: e.vars
                ? iS(e.vars.palette.AppBar.darkColor, "var(--AppBar-color)")
                : null,
            }),
          },
        },
        {
          props: { color: "transparent" },
          style: {
            "--AppBar-background": "transparent",
            "--AppBar-color": "inherit",
            backgroundColor: "var(--AppBar-background)",
            color: "var(--AppBar-color)",
            ...e.applyStyles("dark", { backgroundImage: "none" }),
          },
        },
      ],
    }))
  ),
  nD = E.forwardRef(function (n, a) {
    const i = Rt({ props: n, name: "MuiAppBar" }),
      {
        className: o,
        color: u = "primary",
        enableColorOnDark: f = !1,
        position: d = "fixed",
        ...m
      } = i,
      h = { ...i, color: u, position: d, enableColorOnDark: f },
      g = eD(h);
    return U.jsx(tD, {
      square: !0,
      component: "header",
      ownerState: h,
      elevation: 4,
      className: qe(g.root, o, d === "fixed" && "mui-fixed"),
      ref: a,
      ...m,
    });
  });
function rD(e) {
  return typeof e == "function" ? e() : e;
}
const aD = E.forwardRef(function (n, a) {
  const { children: i, container: o, disablePortal: u = !1 } = n,
    [f, d] = E.useState(null),
    m = vn(E.isValidElement(i) ? Ru(i) : null, a);
  if (
    (as(() => {
      u || d(rD(o) || document.body);
    }, [o, u]),
    as(() => {
      if (f && !u)
        return (
          Om(a, f),
          () => {
            Om(a, null);
          }
        );
    }, [a, f, u]),
    u)
  ) {
    if (E.isValidElement(i)) {
      const h = { ref: m };
      return E.cloneElement(i, h);
    }
    return i;
  }
  return f && IE.createPortal(i, f);
});
function Ic(e) {
  return parseInt(e, 10) || 0;
}
const iD = {
  shadow: {
    visibility: "hidden",
    position: "absolute",
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    transform: "translateZ(0)",
  },
};
function sD(e) {
  for (const n in e) return !1;
  return !0;
}
function oD(e) {
  return sD(e) || (e.outerHeightStyle === 0 && !e.overflowing);
}
const lD = E.forwardRef(function (n, a) {
  const {
      onChange: i,
      maxRows: o,
      minRows: u = 1,
      style: f,
      value: d,
      ...m
    } = n,
    { current: h } = E.useRef(d != null),
    g = E.useRef(null),
    y = vn(a, g),
    x = E.useRef(null),
    C = E.useRef(null),
    b = E.useCallback(() => {
      const _ = g.current,
        T = C.current;
      if (!_ || !T) return;
      const M = Ca(_).getComputedStyle(_);
      if (M.width === "0px") return { outerHeightStyle: 0, overflowing: !1 };
      (T.style.width = M.width),
        (T.value = _.value || n.placeholder || "x"),
        T.value.slice(-1) ===
          `
` && (T.value += " ");
      const $ = M.boxSizing,
        L = Ic(M.paddingBottom) + Ic(M.paddingTop),
        K = Ic(M.borderBottomWidth) + Ic(M.borderTopWidth),
        P = T.scrollHeight;
      T.value = "x";
      const R = T.scrollHeight;
      let V = P;
      u && (V = Math.max(Number(u) * R, V)),
        o && (V = Math.min(Number(o) * R, V)),
        (V = Math.max(V, R));
      const Q = V + ($ === "border-box" ? L + K : 0),
        J = Math.abs(V - P) <= 1;
      return { outerHeightStyle: Q, overflowing: J };
    }, [o, u, n.placeholder]),
    S = E.useCallback(() => {
      const _ = g.current,
        T = b();
      if (!_ || !T || oD(T)) return;
      const D = T.outerHeightStyle;
      x.current !== D && ((x.current = D), (_.style.height = `${D}px`)),
        (_.style.overflow = T.overflowing ? "hidden" : "");
    }, [b]),
    w = E.useRef(-1);
  as(() => {
    const _ = ME(() => S()),
      T = g == null ? void 0 : g.current;
    if (!T) return;
    const D = Ca(T);
    D.addEventListener("resize", _);
    let M;
    return (
      typeof ResizeObserver < "u" &&
        ((M = new ResizeObserver(() => {
          M.unobserve(T),
            cancelAnimationFrame(w.current),
            S(),
            (w.current = requestAnimationFrame(() => {
              M.observe(T);
            }));
        })),
        M.observe(T)),
      () => {
        _.clear(),
          cancelAnimationFrame(w.current),
          D.removeEventListener("resize", _),
          M && M.disconnect();
      }
    );
  }, [b, S]),
    as(() => {
      S();
    });
  const O = (_) => {
    h || S(), i && i(_);
  };
  return U.jsxs(E.Fragment, {
    children: [
      U.jsx("textarea", {
        value: d,
        onChange: O,
        ref: y,
        rows: u,
        style: f,
        ...m,
      }),
      U.jsx("textarea", {
        "aria-hidden": !0,
        className: n.className,
        readOnly: !0,
        ref: C,
        tabIndex: -1,
        style: { ...iD.shadow, ...f, paddingTop: 0, paddingBottom: 0 },
      }),
    ],
  });
});
function Lm(e) {
  return typeof e == "string";
}
function No({ props: e, states: n, muiFormControl: a }) {
  return n.reduce(
    (i, o) => ((i[o] = e[o]), a && typeof e[o] > "u" && (i[o] = a[o]), i),
    {}
  );
}
const Ug = E.createContext(void 0);
function zo() {
  return E.useContext(Ug);
}
function sS(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Tf(e, n = !1) {
  return (
    e &&
    ((sS(e.value) && e.value !== "") ||
      (n && sS(e.defaultValue) && e.defaultValue !== ""))
  );
}
function uD(e) {
  return e.startAdornment;
}
function cD(e) {
  return vt("MuiInputBase", e);
}
const yo = ft("MuiInputBase", [
  "root",
  "formControl",
  "focused",
  "disabled",
  "adornedStart",
  "adornedEnd",
  "error",
  "sizeSmall",
  "multiline",
  "colorSecondary",
  "fullWidth",
  "hiddenLabel",
  "readOnly",
  "input",
  "inputSizeSmall",
  "inputMultiline",
  "inputTypeSearch",
  "inputAdornedStart",
  "inputAdornedEnd",
  "inputHiddenLabel",
]);
var oS;
const id = (e, n) => {
    const { ownerState: a } = e;
    return [
      n.root,
      a.formControl && n.formControl,
      a.startAdornment && n.adornedStart,
      a.endAdornment && n.adornedEnd,
      a.error && n.error,
      a.size === "small" && n.sizeSmall,
      a.multiline && n.multiline,
      a.color && n[`color${Ne(a.color)}`],
      a.fullWidth && n.fullWidth,
      a.hiddenLabel && n.hiddenLabel,
    ];
  },
  sd = (e, n) => {
    const { ownerState: a } = e;
    return [
      n.input,
      a.size === "small" && n.inputSizeSmall,
      a.multiline && n.inputMultiline,
      a.type === "search" && n.inputTypeSearch,
      a.startAdornment && n.inputAdornedStart,
      a.endAdornment && n.inputAdornedEnd,
      a.hiddenLabel && n.inputHiddenLabel,
    ];
  },
  fD = (e) => {
    const {
        classes: n,
        color: a,
        disabled: i,
        error: o,
        endAdornment: u,
        focused: f,
        formControl: d,
        fullWidth: m,
        hiddenLabel: h,
        multiline: g,
        readOnly: y,
        size: x,
        startAdornment: C,
        type: b,
      } = e,
      S = {
        root: [
          "root",
          `color${Ne(a)}`,
          i && "disabled",
          o && "error",
          m && "fullWidth",
          f && "focused",
          d && "formControl",
          x && x !== "medium" && `size${Ne(x)}`,
          g && "multiline",
          C && "adornedStart",
          u && "adornedEnd",
          h && "hiddenLabel",
          y && "readOnly",
        ],
        input: [
          "input",
          i && "disabled",
          b === "search" && "inputTypeSearch",
          g && "inputMultiline",
          x === "small" && "inputSizeSmall",
          h && "inputHiddenLabel",
          C && "inputAdornedStart",
          u && "inputAdornedEnd",
          y && "readOnly",
        ],
      };
    return bt(S, cD, n);
  },
  od = Ce("div", { name: "MuiInputBase", slot: "Root", overridesResolver: id })(
    wt(({ theme: e }) => ({
      ...e.typography.body1,
      color: (e.vars || e).palette.text.primary,
      lineHeight: "1.4375em",
      boxSizing: "border-box",
      position: "relative",
      cursor: "text",
      display: "inline-flex",
      alignItems: "center",
      [`&.${yo.disabled}`]: {
        color: (e.vars || e).palette.text.disabled,
        cursor: "default",
      },
      variants: [
        {
          props: ({ ownerState: n }) => n.multiline,
          style: { padding: "4px 0 5px" },
        },
        {
          props: ({ ownerState: n, size: a }) => n.multiline && a === "small",
          style: { paddingTop: 1 },
        },
        { props: ({ ownerState: n }) => n.fullWidth, style: { width: "100%" } },
      ],
    }))
  ),
  ld = Ce("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: sd,
  })(
    wt(({ theme: e }) => {
      const n = e.palette.mode === "light",
        a = {
          color: "currentColor",
          ...(e.vars
            ? { opacity: e.vars.opacity.inputPlaceholder }
            : { opacity: n ? 0.42 : 0.5 }),
          transition: e.transitions.create("opacity", {
            duration: e.transitions.duration.shorter,
          }),
        },
        i = { opacity: "0 !important" },
        o = e.vars
          ? { opacity: e.vars.opacity.inputPlaceholder }
          : { opacity: n ? 0.42 : 0.5 };
      return {
        font: "inherit",
        letterSpacing: "inherit",
        color: "currentColor",
        padding: "4px 0 5px",
        border: 0,
        boxSizing: "content-box",
        background: "none",
        height: "1.4375em",
        margin: 0,
        WebkitTapHighlightColor: "transparent",
        display: "block",
        minWidth: 0,
        width: "100%",
        "&::-webkit-input-placeholder": a,
        "&::-moz-placeholder": a,
        "&::-ms-input-placeholder": a,
        "&:focus": { outline: 0 },
        "&:invalid": { boxShadow: "none" },
        "&::-webkit-search-decoration": { WebkitAppearance: "none" },
        [`label[data-shrink=false] + .${yo.formControl} &`]: {
          "&::-webkit-input-placeholder": i,
          "&::-moz-placeholder": i,
          "&::-ms-input-placeholder": i,
          "&:focus::-webkit-input-placeholder": o,
          "&:focus::-moz-placeholder": o,
          "&:focus::-ms-input-placeholder": o,
        },
        [`&.${yo.disabled}`]: {
          opacity: 1,
          WebkitTextFillColor: (e.vars || e).palette.text.disabled,
        },
        variants: [
          {
            props: ({ ownerState: u }) => !u.disableInjectingGlobalStyles,
            style: {
              animationName: "mui-auto-fill-cancel",
              animationDuration: "10ms",
              "&:-webkit-autofill": {
                animationDuration: "5000s",
                animationName: "mui-auto-fill",
              },
            },
          },
          { props: { size: "small" }, style: { paddingTop: 1 } },
          {
            props: ({ ownerState: u }) => u.multiline,
            style: {
              height: "auto",
              resize: "none",
              padding: 0,
              paddingTop: 0,
            },
          },
          { props: { type: "search" }, style: { MozAppearance: "textfield" } },
        ],
      };
    })
  ),
  lS = a4({
    "@keyframes mui-auto-fill": { from: { display: "block" } },
    "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
  }),
  Lg = E.forwardRef(function (n, a) {
    const i = Rt({ props: n, name: "MuiInputBase" }),
      {
        "aria-describedby": o,
        autoComplete: u,
        autoFocus: f,
        className: d,
        color: m,
        components: h = {},
        componentsProps: g = {},
        defaultValue: y,
        disabled: x,
        disableInjectingGlobalStyles: C,
        endAdornment: b,
        error: S,
        fullWidth: w = !1,
        id: O,
        inputComponent: _ = "input",
        inputProps: T = {},
        inputRef: D,
        margin: M,
        maxRows: $,
        minRows: L,
        multiline: K = !1,
        name: P,
        onBlur: R,
        onChange: V,
        onClick: Q,
        onFocus: J,
        onKeyDown: le,
        onKeyUp: ne,
        placeholder: F,
        readOnly: ie,
        renderSuffix: fe,
        rows: ue,
        size: k,
        slotProps: ee = {},
        slots: me = {},
        startAdornment: he,
        type: ce = "text",
        value: be,
        ...xe
      } = i,
      $e = T.value != null ? T.value : be,
      { current: Te } = E.useRef($e != null),
      Ae = E.useRef(),
      Se = E.useCallback((at) => {}, []),
      ke = vn(Ae, D, T.ref, Se),
      [_e, We] = E.useState(!1),
      Le = zo(),
      rt = No({
        props: i,
        muiFormControl: Le,
        states: [
          "color",
          "disabled",
          "error",
          "hiddenLabel",
          "size",
          "required",
          "filled",
        ],
      });
    (rt.focused = Le ? Le.focused : _e),
      E.useEffect(() => {
        !Le && x && _e && (We(!1), R && R());
      }, [Le, x, _e, R]);
    const Ut = Le && Le.onFilled,
      Ft = Le && Le.onEmpty,
      z = E.useCallback(
        (at) => {
          Tf(at) ? Ut && Ut() : Ft && Ft();
        },
        [Ut, Ft]
      );
    as(() => {
      Te && z({ value: $e });
    }, [$e, z, Te]);
    const G = (at) => {
        J && J(at),
          T.onFocus && T.onFocus(at),
          Le && Le.onFocus ? Le.onFocus(at) : We(!0);
      },
      X = (at) => {
        R && R(at),
          T.onBlur && T.onBlur(at),
          Le && Le.onBlur ? Le.onBlur(at) : We(!1);
      },
      de = (at, ...Tr) => {
        if (!Te) {
          const wn = at.target || Ae.current;
          if (wn == null) throw new Error(Ea(1));
          z({ value: wn.value });
        }
        T.onChange && T.onChange(at, ...Tr), V && V(at, ...Tr);
      };
    E.useEffect(() => {
      z(Ae.current);
    }, []);
    const Z = (at) => {
      Ae.current && at.currentTarget === at.target && Ae.current.focus(),
        Q && Q(at);
    };
    let pe = _,
      ge = T;
    K &&
      pe === "input" &&
      (ue
        ? (ge = { type: void 0, minRows: ue, maxRows: ue, ...ge })
        : (ge = { type: void 0, maxRows: $, minRows: L, ...ge }),
      (pe = lD));
    const ze = (at) => {
      z(
        at.animationName === "mui-auto-fill-cancel"
          ? Ae.current
          : { value: "x" }
      );
    };
    E.useEffect(() => {
      Le && Le.setAdornedStart(!!he);
    }, [Le, he]);
    const dt = {
        ...i,
        color: rt.color || "primary",
        disabled: rt.disabled,
        endAdornment: b,
        error: rt.error,
        focused: rt.focused,
        formControl: Le,
        fullWidth: w,
        hiddenLabel: rt.hiddenLabel,
        multiline: K,
        size: rt.size,
        startAdornment: he,
        type: ce,
      },
      pt = fD(dt),
      qt = me.root || h.Root || od,
      wr = ee.root || g.root || {},
      Cn = me.input || h.Input || ld;
    return (
      (ge = { ...ge, ...(ee.input ?? g.input) }),
      U.jsxs(E.Fragment, {
        children: [
          !C && typeof lS == "function" && (oS || (oS = U.jsx(lS, {}))),
          U.jsxs(qt, {
            ...wr,
            ref: a,
            onClick: Z,
            ...xe,
            ...(!Lm(qt) && { ownerState: { ...dt, ...wr.ownerState } }),
            className: qe(
              pt.root,
              wr.className,
              d,
              ie && "MuiInputBase-readOnly"
            ),
            children: [
              he,
              U.jsx(Ug.Provider, {
                value: null,
                children: U.jsx(Cn, {
                  "aria-invalid": rt.error,
                  "aria-describedby": o,
                  autoComplete: u,
                  autoFocus: f,
                  defaultValue: y,
                  disabled: rt.disabled,
                  id: O,
                  onAnimationStart: ze,
                  name: P,
                  placeholder: F,
                  readOnly: ie,
                  required: rt.required,
                  rows: ue,
                  value: $e,
                  onKeyDown: le,
                  onKeyUp: ne,
                  type: ce,
                  ...ge,
                  ...(!Lm(Cn) && {
                    as: pe,
                    ownerState: { ...dt, ...ge.ownerState },
                  }),
                  ref: ke,
                  className: qe(
                    pt.input,
                    ge.className,
                    ie && "MuiInputBase-readOnly"
                  ),
                  onBlur: X,
                  onChange: de,
                  onFocus: G,
                }),
              }),
              b,
              fe ? fe({ ...rt, startAdornment: he }) : null,
            ],
          }),
        ],
      })
    );
  });
function dD(e) {
  return vt("MuiInput", e);
}
const Ll = { ...yo, ...ft("MuiInput", ["root", "underline", "input"]) };
function pD(e) {
  return vt("MuiOutlinedInput", e);
}
const kr = {
  ...yo,
  ...ft("MuiOutlinedInput", ["root", "notchedOutline", "input"]),
};
function hD(e) {
  return vt("MuiFilledInput", e);
}
const Bi = {
    ...yo,
    ...ft("MuiFilledInput", [
      "root",
      "underline",
      "input",
      "adornedStart",
      "adornedEnd",
      "sizeSmall",
      "multiline",
      "hiddenLabel",
    ]),
  },
  mD = Cu(U.jsx("path", { d: "M7 10l5 5 5-5z" }), "ArrowDropDown"),
  gD = Cu(
    U.jsx("path", {
      d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
    }),
    "Person"
  );
function yD(e) {
  return vt("MuiAvatar", e);
}
ft("MuiAvatar", [
  "root",
  "colorDefault",
  "circular",
  "rounded",
  "square",
  "img",
  "fallback",
]);
const vD = (e) => {
    const { classes: n, variant: a, colorDefault: i } = e;
    return bt(
      {
        root: ["root", a, i && "colorDefault"],
        img: ["img"],
        fallback: ["fallback"],
      },
      yD,
      n
    );
  },
  bD = Ce("div", {
    name: "MuiAvatar",
    slot: "Root",
    overridesResolver: (e, n) => {
      const { ownerState: a } = e;
      return [n.root, n[a.variant], a.colorDefault && n.colorDefault];
    },
  })(
    wt(({ theme: e }) => ({
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      width: 40,
      height: 40,
      fontFamily: e.typography.fontFamily,
      fontSize: e.typography.pxToRem(20),
      lineHeight: 1,
      borderRadius: "50%",
      overflow: "hidden",
      userSelect: "none",
      variants: [
        {
          props: { variant: "rounded" },
          style: { borderRadius: (e.vars || e).shape.borderRadius },
        },
        { props: { variant: "square" }, style: { borderRadius: 0 } },
        {
          props: { colorDefault: !0 },
          style: {
            color: (e.vars || e).palette.background.default,
            ...(e.vars
              ? { backgroundColor: e.vars.palette.Avatar.defaultBg }
              : {
                  backgroundColor: e.palette.grey[400],
                  ...e.applyStyles("dark", {
                    backgroundColor: e.palette.grey[600],
                  }),
                }),
          },
        },
      ],
    }))
  ),
  SD = Ce("img", {
    name: "MuiAvatar",
    slot: "Img",
    overridesResolver: (e, n) => n.img,
  })({
    width: "100%",
    height: "100%",
    textAlign: "center",
    objectFit: "cover",
    color: "transparent",
    textIndent: 1e4,
  }),
  xD = Ce(gD, {
    name: "MuiAvatar",
    slot: "Fallback",
    overridesResolver: (e, n) => n.fallback,
  })({ width: "75%", height: "75%" });
function ED({ crossOrigin: e, referrerPolicy: n, src: a, srcSet: i }) {
  const [o, u] = E.useState(!1);
  return (
    E.useEffect(() => {
      if (!a && !i) return;
      u(!1);
      let f = !0;
      const d = new Image();
      return (
        (d.onload = () => {
          f && u("loaded");
        }),
        (d.onerror = () => {
          f && u("error");
        }),
        (d.crossOrigin = e),
        (d.referrerPolicy = n),
        (d.src = a),
        i && (d.srcset = i),
        () => {
          f = !1;
        }
      );
    }, [e, n, a, i]),
    o
  );
}
const su = E.forwardRef(function (n, a) {
    const i = Rt({ props: n, name: "MuiAvatar" }),
      {
        alt: o,
        children: u,
        className: f,
        component: d = "div",
        slots: m = {},
        slotProps: h = {},
        imgProps: g,
        sizes: y,
        src: x,
        srcSet: C,
        variant: b = "circular",
        ...S
      } = i;
    let w = null;
    const O = { ...i, component: d, variant: b },
      _ = ED({
        ...g,
        ...(typeof h.img == "function" ? h.img(O) : h.img),
        src: x,
        srcSet: C,
      }),
      T = x || C,
      D = T && _ !== "error";
    (O.colorDefault = !D), delete O.ownerState;
    const M = vD(O),
      [$, L] = lr("img", {
        className: M.img,
        elementType: SD,
        externalForwardedProps: {
          slots: m,
          slotProps: { img: { ...g, ...h.img } },
        },
        additionalProps: { alt: o, src: x, srcSet: C, sizes: y },
        ownerState: O,
      });
    return (
      D
        ? (w = U.jsx($, { ...L }))
        : u || u === 0
        ? (w = u)
        : T && o
        ? (w = o[0])
        : (w = U.jsx(xD, { ownerState: O, className: M.fallback })),
      U.jsx(bD, {
        as: d,
        className: qe(M.root, f),
        ref: a,
        ...S,
        ownerState: O,
        children: w,
      })
    );
  }),
  RD = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  CD = E.forwardRef(function (n, a) {
    const i = Ng(),
      o = {
        enter: i.transitions.duration.enteringScreen,
        exit: i.transitions.duration.leavingScreen,
      },
      {
        addEndListener: u,
        appear: f = !0,
        children: d,
        easing: m,
        in: h,
        onEnter: g,
        onEntered: y,
        onEntering: x,
        onExit: C,
        onExited: b,
        onExiting: S,
        style: w,
        timeout: O = o,
        TransitionComponent: _ = Kr,
        ...T
      } = n,
      D = E.useRef(null),
      M = vn(D, Ru(d), a),
      $ = (le) => (ne) => {
        if (le) {
          const F = D.current;
          ne === void 0 ? le(F) : le(F, ne);
        }
      },
      L = $(x),
      K = $((le, ne) => {
        YE(le);
        const F = Cf({ style: w, timeout: O, easing: m }, { mode: "enter" });
        (le.style.webkitTransition = i.transitions.create("opacity", F)),
          (le.style.transition = i.transitions.create("opacity", F)),
          g && g(le, ne);
      }),
      P = $(y),
      R = $(S),
      V = $((le) => {
        const ne = Cf({ style: w, timeout: O, easing: m }, { mode: "exit" });
        (le.style.webkitTransition = i.transitions.create("opacity", ne)),
          (le.style.transition = i.transitions.create("opacity", ne)),
          C && C(le);
      }),
      Q = $(b),
      J = (le) => {
        u && u(D.current, le);
      };
    return U.jsx(_, {
      appear: f,
      in: h,
      nodeRef: D,
      onEnter: K,
      onEntered: P,
      onEntering: L,
      onExit: V,
      onExited: Q,
      onExiting: R,
      addEndListener: J,
      timeout: O,
      ...T,
      children: (le, { ownerState: ne, ...F }) =>
        E.cloneElement(d, {
          style: {
            opacity: 0,
            visibility: le === "exited" && !h ? "hidden" : void 0,
            ...RD[le],
            ...w,
            ...d.props.style,
          },
          ref: M,
          ...F,
        }),
    });
  });
function wD(e) {
  return vt("MuiBackdrop", e);
}
ft("MuiBackdrop", ["root", "invisible"]);
const TD = (e) => {
    const { classes: n, invisible: a } = e;
    return bt({ root: ["root", a && "invisible"] }, wD, n);
  },
  AD = Ce("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (e, n) => {
      const { ownerState: a } = e;
      return [n.root, a.invisible && n.invisible];
    },
  })({
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    WebkitTapHighlightColor: "transparent",
    variants: [
      { props: { invisible: !0 }, style: { backgroundColor: "transparent" } },
    ],
  }),
  OD = E.forwardRef(function (n, a) {
    const i = Rt({ props: n, name: "MuiBackdrop" }),
      {
        children: o,
        className: u,
        component: f = "div",
        invisible: d = !1,
        open: m,
        components: h = {},
        componentsProps: g = {},
        slotProps: y = {},
        slots: x = {},
        TransitionComponent: C,
        transitionDuration: b,
        ...S
      } = i,
      w = { ...i, component: f, invisible: d },
      O = TD(w),
      _ = { transition: C, root: h.Root, ...x },
      T = { ...g, ...y },
      D = { slots: _, slotProps: T },
      [M, $] = lr("root", {
        elementType: AD,
        externalForwardedProps: D,
        className: qe(O.root, u),
        ownerState: w,
      }),
      [L, K] = lr("transition", {
        elementType: CD,
        externalForwardedProps: D,
        ownerState: w,
      });
    return U.jsx(L, {
      in: m,
      timeout: b,
      ...S,
      ...K,
      children: U.jsx(M, {
        "aria-hidden": !0,
        ...$,
        classes: O,
        ref: a,
        children: o,
      }),
    });
  }),
  MD = ft("MuiBox", ["root"]),
  _D = FE(),
  DD = XM({
    themeId: Gf,
    defaultTheme: _D,
    defaultClassName: MD.root,
    generateClassName: CE.generate,
  });
function ND(e) {
  return vt("MuiButton", e);
}
const Ui = ft("MuiButton", [
    "root",
    "text",
    "textInherit",
    "textPrimary",
    "textSecondary",
    "textSuccess",
    "textError",
    "textInfo",
    "textWarning",
    "outlined",
    "outlinedInherit",
    "outlinedPrimary",
    "outlinedSecondary",
    "outlinedSuccess",
    "outlinedError",
    "outlinedInfo",
    "outlinedWarning",
    "contained",
    "containedInherit",
    "containedPrimary",
    "containedSecondary",
    "containedSuccess",
    "containedError",
    "containedInfo",
    "containedWarning",
    "disableElevation",
    "focusVisible",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorError",
    "colorInfo",
    "colorWarning",
    "textSizeSmall",
    "textSizeMedium",
    "textSizeLarge",
    "outlinedSizeSmall",
    "outlinedSizeMedium",
    "outlinedSizeLarge",
    "containedSizeSmall",
    "containedSizeMedium",
    "containedSizeLarge",
    "sizeMedium",
    "sizeSmall",
    "sizeLarge",
    "fullWidth",
    "startIcon",
    "endIcon",
    "icon",
    "iconSizeSmall",
    "iconSizeMedium",
    "iconSizeLarge",
    "loading",
    "loadingWrapper",
    "loadingIconPlaceholder",
    "loadingIndicator",
    "loadingPositionCenter",
    "loadingPositionStart",
    "loadingPositionEnd",
  ]),
  zD = E.createContext({}),
  kD = E.createContext(void 0),
  BD = (e) => {
    const {
        color: n,
        disableElevation: a,
        fullWidth: i,
        size: o,
        variant: u,
        loading: f,
        loadingPosition: d,
        classes: m,
      } = e,
      h = {
        root: [
          "root",
          f && "loading",
          u,
          `${u}${Ne(n)}`,
          `size${Ne(o)}`,
          `${u}Size${Ne(o)}`,
          `color${Ne(n)}`,
          a && "disableElevation",
          i && "fullWidth",
          f && `loadingPosition${Ne(d)}`,
        ],
        startIcon: ["icon", "startIcon", `iconSize${Ne(o)}`],
        endIcon: ["icon", "endIcon", `iconSize${Ne(o)}`],
        loadingIndicator: ["loadingIndicator"],
        loadingWrapper: ["loadingWrapper"],
      },
      g = bt(h, ND, m);
    return { ...m, ...g };
  },
  XE = [
    {
      props: { size: "small" },
      style: { "& > *:nth-of-type(1)": { fontSize: 18 } },
    },
    {
      props: { size: "medium" },
      style: { "& > *:nth-of-type(1)": { fontSize: 20 } },
    },
    {
      props: { size: "large" },
      style: { "& > *:nth-of-type(1)": { fontSize: 22 } },
    },
  ],
  UD = Ce(KE, {
    shouldForwardProp: (e) => Cr(e) || e === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (e, n) => {
      const { ownerState: a } = e;
      return [
        n.root,
        n[a.variant],
        n[`${a.variant}${Ne(a.color)}`],
        n[`size${Ne(a.size)}`],
        n[`${a.variant}Size${Ne(a.size)}`],
        a.color === "inherit" && n.colorInherit,
        a.disableElevation && n.disableElevation,
        a.fullWidth && n.fullWidth,
        a.loading && n.loading,
      ];
    },
  })(
    wt(({ theme: e }) => {
      const n =
          e.palette.mode === "light"
            ? e.palette.grey[300]
            : e.palette.grey[800],
        a =
          e.palette.mode === "light"
            ? e.palette.grey.A100
            : e.palette.grey[700];
      return {
        ...e.typography.button,
        minWidth: 64,
        padding: "6px 16px",
        border: 0,
        borderRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create(
          ["background-color", "box-shadow", "border-color", "color"],
          { duration: e.transitions.duration.short }
        ),
        "&:hover": { textDecoration: "none" },
        [`&.${Ui.disabled}`]: { color: (e.vars || e).palette.action.disabled },
        variants: [
          {
            props: { variant: "contained" },
            style: {
              color: "var(--variant-containedColor)",
              backgroundColor: "var(--variant-containedBg)",
              boxShadow: (e.vars || e).shadows[2],
              "&:hover": {
                boxShadow: (e.vars || e).shadows[4],
                "@media (hover: none)": { boxShadow: (e.vars || e).shadows[2] },
              },
              "&:active": { boxShadow: (e.vars || e).shadows[8] },
              [`&.${Ui.focusVisible}`]: { boxShadow: (e.vars || e).shadows[6] },
              [`&.${Ui.disabled}`]: {
                color: (e.vars || e).palette.action.disabled,
                boxShadow: (e.vars || e).shadows[0],
                backgroundColor: (e.vars || e).palette.action
                  .disabledBackground,
              },
            },
          },
          {
            props: { variant: "outlined" },
            style: {
              padding: "5px 15px",
              border: "1px solid currentColor",
              borderColor: "var(--variant-outlinedBorder, currentColor)",
              backgroundColor: "var(--variant-outlinedBg)",
              color: "var(--variant-outlinedColor)",
              [`&.${Ui.disabled}`]: {
                border: `1px solid ${
                  (e.vars || e).palette.action.disabledBackground
                }`,
              },
            },
          },
          {
            props: { variant: "text" },
            style: {
              padding: "6px 8px",
              color: "var(--variant-textColor)",
              backgroundColor: "var(--variant-textBg)",
            },
          },
          ...Object.entries(e.palette)
            .filter(Yr())
            .map(([i]) => ({
              props: { color: i },
              style: {
                "--variant-textColor": (e.vars || e).palette[i].main,
                "--variant-outlinedColor": (e.vars || e).palette[i].main,
                "--variant-outlinedBorder": e.vars
                  ? `rgba(${e.vars.palette[i].mainChannel} / 0.5)`
                  : qr(e.palette[i].main, 0.5),
                "--variant-containedColor": (e.vars || e).palette[i]
                  .contrastText,
                "--variant-containedBg": (e.vars || e).palette[i].main,
                "@media (hover: hover)": {
                  "&:hover": {
                    "--variant-containedBg": (e.vars || e).palette[i].dark,
                    "--variant-textBg": e.vars
                      ? `rgba(${e.vars.palette[i].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                      : qr(e.palette[i].main, e.palette.action.hoverOpacity),
                    "--variant-outlinedBorder": (e.vars || e).palette[i].main,
                    "--variant-outlinedBg": e.vars
                      ? `rgba(${e.vars.palette[i].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                      : qr(e.palette[i].main, e.palette.action.hoverOpacity),
                  },
                },
              },
            })),
          {
            props: { color: "inherit" },
            style: {
              color: "inherit",
              borderColor: "currentColor",
              "--variant-containedBg": e.vars
                ? e.vars.palette.Button.inheritContainedBg
                : n,
              "@media (hover: hover)": {
                "&:hover": {
                  "--variant-containedBg": e.vars
                    ? e.vars.palette.Button.inheritContainedHoverBg
                    : a,
                  "--variant-textBg": e.vars
                    ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : qr(e.palette.text.primary, e.palette.action.hoverOpacity),
                  "--variant-outlinedBg": e.vars
                    ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : qr(e.palette.text.primary, e.palette.action.hoverOpacity),
                },
              },
            },
          },
          {
            props: { size: "small", variant: "text" },
            style: { padding: "4px 5px", fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: "large", variant: "text" },
            style: { padding: "8px 11px", fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { size: "small", variant: "outlined" },
            style: { padding: "3px 9px", fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: "large", variant: "outlined" },
            style: { padding: "7px 21px", fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { size: "small", variant: "contained" },
            style: { padding: "4px 10px", fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: "large", variant: "contained" },
            style: { padding: "8px 22px", fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { disableElevation: !0 },
            style: {
              boxShadow: "none",
              "&:hover": { boxShadow: "none" },
              [`&.${Ui.focusVisible}`]: { boxShadow: "none" },
              "&:active": { boxShadow: "none" },
              [`&.${Ui.disabled}`]: { boxShadow: "none" },
            },
          },
          { props: { fullWidth: !0 }, style: { width: "100%" } },
          {
            props: { loadingPosition: "center" },
            style: {
              transition: e.transitions.create(
                ["background-color", "box-shadow", "border-color"],
                { duration: e.transitions.duration.short }
              ),
              [`&.${Ui.loading}`]: { color: "transparent" },
            },
          },
        ],
      };
    })
  ),
  LD = Ce("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (e, n) => {
      const { ownerState: a } = e;
      return [
        n.startIcon,
        a.loading && n.startIconLoadingStart,
        n[`iconSize${Ne(a.size)}`],
      ];
    },
  })(({ theme: e }) => ({
    display: "inherit",
    marginRight: 8,
    marginLeft: -4,
    variants: [
      { props: { size: "small" }, style: { marginLeft: -2 } },
      {
        props: { loadingPosition: "start", loading: !0 },
        style: {
          transition: e.transitions.create(["opacity"], {
            duration: e.transitions.duration.short,
          }),
          opacity: 0,
        },
      },
      {
        props: { loadingPosition: "start", loading: !0, fullWidth: !0 },
        style: { marginRight: -8 },
      },
      ...XE,
    ],
  })),
  jD = Ce("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (e, n) => {
      const { ownerState: a } = e;
      return [
        n.endIcon,
        a.loading && n.endIconLoadingEnd,
        n[`iconSize${Ne(a.size)}`],
      ];
    },
  })(({ theme: e }) => ({
    display: "inherit",
    marginRight: -4,
    marginLeft: 8,
    variants: [
      { props: { size: "small" }, style: { marginRight: -2 } },
      {
        props: { loadingPosition: "end", loading: !0 },
        style: {
          transition: e.transitions.create(["opacity"], {
            duration: e.transitions.duration.short,
          }),
          opacity: 0,
        },
      },
      {
        props: { loadingPosition: "end", loading: !0, fullWidth: !0 },
        style: { marginLeft: -8 },
      },
      ...XE,
    ],
  })),
  $D = Ce("span", {
    name: "MuiButton",
    slot: "LoadingIndicator",
    overridesResolver: (e, n) => n.loadingIndicator,
  })(({ theme: e }) => ({
    display: "none",
    position: "absolute",
    visibility: "visible",
    variants: [
      { props: { loading: !0 }, style: { display: "flex" } },
      { props: { loadingPosition: "start" }, style: { left: 14 } },
      {
        props: { loadingPosition: "start", size: "small" },
        style: { left: 10 },
      },
      {
        props: { variant: "text", loadingPosition: "start" },
        style: { left: 6 },
      },
      {
        props: { loadingPosition: "center" },
        style: {
          left: "50%",
          transform: "translate(-50%)",
          color: (e.vars || e).palette.action.disabled,
        },
      },
      { props: { loadingPosition: "end" }, style: { right: 14 } },
      {
        props: { loadingPosition: "end", size: "small" },
        style: { right: 10 },
      },
      {
        props: { variant: "text", loadingPosition: "end" },
        style: { right: 6 },
      },
      {
        props: { loadingPosition: "start", fullWidth: !0 },
        style: { position: "relative", left: -10 },
      },
      {
        props: { loadingPosition: "end", fullWidth: !0 },
        style: { position: "relative", right: -10 },
      },
    ],
  })),
  uS = Ce("span", {
    name: "MuiButton",
    slot: "LoadingIconPlaceholder",
    overridesResolver: (e, n) => n.loadingIconPlaceholder,
  })({ display: "inline-block", width: "1em", height: "1em" }),
  vo = E.forwardRef(function (n, a) {
    const i = E.useContext(zD),
      o = E.useContext(kD),
      u = Ef(i, n),
      f = Rt({ props: u, name: "MuiButton" }),
      {
        children: d,
        color: m = "primary",
        component: h = "button",
        className: g,
        disabled: y = !1,
        disableElevation: x = !1,
        disableFocusRipple: C = !1,
        endIcon: b,
        focusVisibleClassName: S,
        fullWidth: w = !1,
        id: O,
        loading: _ = null,
        loadingIndicator: T,
        loadingPosition: D = "center",
        size: M = "medium",
        startIcon: $,
        type: L,
        variant: K = "text",
        ...P
      } = f,
      R = ad(O),
      V = T ?? U.jsx(Bg, { "aria-labelledby": R, color: "inherit", size: 16 }),
      Q = {
        ...f,
        color: m,
        component: h,
        disabled: y,
        disableElevation: x,
        disableFocusRipple: C,
        fullWidth: w,
        loading: _,
        loadingIndicator: V,
        loadingPosition: D,
        size: M,
        type: L,
        variant: K,
      },
      J = BD(Q),
      le =
        ($ || (_ && D === "start")) &&
        U.jsx(LD, {
          className: J.startIcon,
          ownerState: Q,
          children:
            $ ||
            U.jsx(uS, { className: J.loadingIconPlaceholder, ownerState: Q }),
        }),
      ne =
        (b || (_ && D === "end")) &&
        U.jsx(jD, {
          className: J.endIcon,
          ownerState: Q,
          children:
            b ||
            U.jsx(uS, { className: J.loadingIconPlaceholder, ownerState: Q }),
        }),
      F = o || "",
      ie =
        typeof _ == "boolean"
          ? U.jsx("span", {
              className: J.loadingWrapper,
              style: { display: "contents" },
              children:
                _ &&
                U.jsx($D, {
                  className: J.loadingIndicator,
                  ownerState: Q,
                  children: V,
                }),
            })
          : null;
    return U.jsxs(UD, {
      ownerState: Q,
      className: qe(i.className, J.root, g, F),
      component: h,
      disabled: y || _,
      focusRipple: !C,
      focusVisibleClassName: qe(J.focusVisible, S),
      ref: a,
      type: L,
      id: R,
      ...P,
      classes: J,
      children: [le, D !== "end" && ie, d, D === "end" && ie, ne],
    });
  });
function HD(e) {
  const n = xr(e);
  return n.body === e
    ? Ca(e).innerWidth > n.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function Ql(e, n) {
  n ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function cS(e) {
  return parseInt(Ca(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function PD(e) {
  const a = [
      "TEMPLATE",
      "SCRIPT",
      "STYLE",
      "LINK",
      "MAP",
      "META",
      "NOSCRIPT",
      "PICTURE",
      "COL",
      "COLGROUP",
      "PARAM",
      "SLOT",
      "SOURCE",
      "TRACK",
    ].includes(e.tagName),
    i = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return a || i;
}
function fS(e, n, a, i, o) {
  const u = [n, a, ...i];
  [].forEach.call(e.children, (f) => {
    const d = !u.includes(f),
      m = !PD(f);
    d && m && Ql(f, o);
  });
}
function qh(e, n) {
  let a = -1;
  return e.some((i, o) => (n(i) ? ((a = o), !0) : !1)), a;
}
function FD(e, n) {
  const a = [],
    i = e.container;
  if (!n.disableScrollLock) {
    if (HD(i)) {
      const f = NE(Ca(i));
      a.push({ value: i.style.paddingRight, property: "padding-right", el: i }),
        (i.style.paddingRight = `${cS(i) + f}px`);
      const d = xr(i).querySelectorAll(".mui-fixed");
      [].forEach.call(d, (m) => {
        a.push({
          value: m.style.paddingRight,
          property: "padding-right",
          el: m,
        }),
          (m.style.paddingRight = `${cS(m) + f}px`);
      });
    }
    let u;
    if (i.parentNode instanceof DocumentFragment) u = xr(i).body;
    else {
      const f = i.parentElement,
        d = Ca(i);
      u =
        (f == null ? void 0 : f.nodeName) === "HTML" &&
        d.getComputedStyle(f).overflowY === "scroll"
          ? f
          : i;
    }
    a.push(
      { value: u.style.overflow, property: "overflow", el: u },
      { value: u.style.overflowX, property: "overflow-x", el: u },
      { value: u.style.overflowY, property: "overflow-y", el: u }
    ),
      (u.style.overflow = "hidden");
  }
  return () => {
    a.forEach(({ value: u, el: f, property: d }) => {
      u ? f.style.setProperty(d, u) : f.style.removeProperty(d);
    });
  };
}
function qD(e) {
  const n = [];
  return (
    [].forEach.call(e.children, (a) => {
      a.getAttribute("aria-hidden") === "true" && n.push(a);
    }),
    n
  );
}
class VD {
  constructor() {
    (this.modals = []), (this.containers = []);
  }
  add(n, a) {
    let i = this.modals.indexOf(n);
    if (i !== -1) return i;
    (i = this.modals.length),
      this.modals.push(n),
      n.modalRef && Ql(n.modalRef, !1);
    const o = qD(a);
    fS(a, n.mount, n.modalRef, o, !0);
    const u = qh(this.containers, (f) => f.container === a);
    return u !== -1
      ? (this.containers[u].modals.push(n), i)
      : (this.containers.push({
          modals: [n],
          container: a,
          restore: null,
          hiddenSiblings: o,
        }),
        i);
  }
  mount(n, a) {
    const i = qh(this.containers, (u) => u.modals.includes(n)),
      o = this.containers[i];
    o.restore || (o.restore = FD(o, a));
  }
  remove(n, a = !0) {
    const i = this.modals.indexOf(n);
    if (i === -1) return i;
    const o = qh(this.containers, (f) => f.modals.includes(n)),
      u = this.containers[o];
    if (
      (u.modals.splice(u.modals.indexOf(n), 1),
      this.modals.splice(i, 1),
      u.modals.length === 0)
    )
      u.restore && u.restore(),
        n.modalRef && Ql(n.modalRef, a),
        fS(u.container, n.mount, n.modalRef, u.hiddenSiblings, !1),
        this.containers.splice(o, 1);
    else {
      const f = u.modals[u.modals.length - 1];
      f.modalRef && Ql(f.modalRef, !1);
    }
    return i;
  }
  isTopModal(n) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === n;
  }
}
const GD = [
  "input",
  "select",
  "textarea",
  "a[href]",
  "button",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable="false"])',
].join(",");
function ID(e) {
  const n = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(n)
    ? e.contentEditable === "true" ||
      ((e.nodeName === "AUDIO" ||
        e.nodeName === "VIDEO" ||
        e.nodeName === "DETAILS") &&
        e.getAttribute("tabindex") === null)
      ? 0
      : e.tabIndex
    : n;
}
function YD(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
  const n = (i) => e.ownerDocument.querySelector(`input[type="radio"]${i}`);
  let a = n(`[name="${e.name}"]:checked`);
  return a || (a = n(`[name="${e.name}"]`)), a !== e;
}
function QD(e) {
  return !(
    e.disabled ||
    (e.tagName === "INPUT" && e.type === "hidden") ||
    YD(e)
  );
}
function KD(e) {
  const n = [],
    a = [];
  return (
    Array.from(e.querySelectorAll(GD)).forEach((i, o) => {
      const u = ID(i);
      u === -1 ||
        !QD(i) ||
        (u === 0
          ? n.push(i)
          : a.push({ documentOrder: o, tabIndex: u, node: i }));
    }),
    a
      .sort((i, o) =>
        i.tabIndex === o.tabIndex
          ? i.documentOrder - o.documentOrder
          : i.tabIndex - o.tabIndex
      )
      .map((i) => i.node)
      .concat(n)
  );
}
function XD() {
  return !0;
}
function WD(e) {
  const {
      children: n,
      disableAutoFocus: a = !1,
      disableEnforceFocus: i = !1,
      disableRestoreFocus: o = !1,
      getTabbable: u = KD,
      isEnabled: f = XD,
      open: d,
    } = e,
    m = E.useRef(!1),
    h = E.useRef(null),
    g = E.useRef(null),
    y = E.useRef(null),
    x = E.useRef(null),
    C = E.useRef(!1),
    b = E.useRef(null),
    S = vn(Ru(n), b),
    w = E.useRef(null);
  E.useEffect(() => {
    !d || !b.current || (C.current = !a);
  }, [a, d]),
    E.useEffect(() => {
      if (!d || !b.current) return;
      const T = xr(b.current);
      return (
        b.current.contains(T.activeElement) ||
          (b.current.hasAttribute("tabIndex") ||
            b.current.setAttribute("tabIndex", "-1"),
          C.current && b.current.focus()),
        () => {
          o ||
            (y.current &&
              y.current.focus &&
              ((m.current = !0), y.current.focus()),
            (y.current = null));
        }
      );
    }, [d]),
    E.useEffect(() => {
      if (!d || !b.current) return;
      const T = xr(b.current),
        D = (L) => {
          (w.current = L),
            !(i || !f() || L.key !== "Tab") &&
              T.activeElement === b.current &&
              L.shiftKey &&
              ((m.current = !0), g.current && g.current.focus());
        },
        M = () => {
          var P, R;
          const L = b.current;
          if (L === null) return;
          if (!T.hasFocus() || !f() || m.current) {
            m.current = !1;
            return;
          }
          if (
            L.contains(T.activeElement) ||
            (i &&
              T.activeElement !== h.current &&
              T.activeElement !== g.current)
          )
            return;
          if (T.activeElement !== x.current) x.current = null;
          else if (x.current !== null) return;
          if (!C.current) return;
          let K = [];
          if (
            ((T.activeElement === h.current || T.activeElement === g.current) &&
              (K = u(b.current)),
            K.length > 0)
          ) {
            const V = !!(
                (P = w.current) != null &&
                P.shiftKey &&
                ((R = w.current) == null ? void 0 : R.key) === "Tab"
              ),
              Q = K[0],
              J = K[K.length - 1];
            typeof Q != "string" &&
              typeof J != "string" &&
              (V ? J.focus() : Q.focus());
          } else L.focus();
        };
      T.addEventListener("focusin", M), T.addEventListener("keydown", D, !0);
      const $ = setInterval(() => {
        T.activeElement && T.activeElement.tagName === "BODY" && M();
      }, 50);
      return () => {
        clearInterval($),
          T.removeEventListener("focusin", M),
          T.removeEventListener("keydown", D, !0);
      };
    }, [a, i, o, f, d, u]);
  const O = (T) => {
      y.current === null && (y.current = T.relatedTarget),
        (C.current = !0),
        (x.current = T.target);
      const D = n.props.onFocus;
      D && D(T);
    },
    _ = (T) => {
      y.current === null && (y.current = T.relatedTarget), (C.current = !0);
    };
  return U.jsxs(E.Fragment, {
    children: [
      U.jsx("div", {
        tabIndex: d ? 0 : -1,
        onFocus: _,
        ref: h,
        "data-testid": "sentinelStart",
      }),
      E.cloneElement(n, { ref: S, onFocus: O }),
      U.jsx("div", {
        tabIndex: d ? 0 : -1,
        onFocus: _,
        ref: g,
        "data-testid": "sentinelEnd",
      }),
    ],
  });
}
function ZD(e) {
  return typeof e == "function" ? e() : e;
}
function JD(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const dS = () => {},
  Yc = new VD();
function e3(e) {
  const {
      container: n,
      disableEscapeKeyDown: a = !1,
      disableScrollLock: i = !1,
      closeAfterTransition: o = !1,
      onTransitionEnter: u,
      onTransitionExited: f,
      children: d,
      onClose: m,
      open: h,
      rootRef: g,
    } = e,
    y = E.useRef({}),
    x = E.useRef(null),
    C = E.useRef(null),
    b = vn(C, g),
    [S, w] = E.useState(!h),
    O = JD(d);
  let _ = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (_ = !1);
  const T = () => xr(x.current),
    D = () => (
      (y.current.modalRef = C.current), (y.current.mount = x.current), y.current
    ),
    M = () => {
      Yc.mount(D(), { disableScrollLock: i }),
        C.current && (C.current.scrollTop = 0);
    },
    $ = to(() => {
      const ne = ZD(n) || T().body;
      Yc.add(D(), ne), C.current && M();
    }),
    L = () => Yc.isTopModal(D()),
    K = to((ne) => {
      (x.current = ne), ne && (h && L() ? M() : C.current && Ql(C.current, _));
    }),
    P = E.useCallback(() => {
      Yc.remove(D(), _);
    }, [_]);
  E.useEffect(
    () => () => {
      P();
    },
    [P]
  ),
    E.useEffect(() => {
      h ? $() : (!O || !o) && P();
    }, [h, P, O, o, $]);
  const R = (ne) => (F) => {
      var ie;
      (ie = ne.onKeyDown) == null || ie.call(ne, F),
        !(F.key !== "Escape" || F.which === 229 || !L()) &&
          (a || (F.stopPropagation(), m && m(F, "escapeKeyDown")));
    },
    V = (ne) => (F) => {
      var ie;
      (ie = ne.onClick) == null || ie.call(ne, F),
        F.target === F.currentTarget && m && m(F, "backdropClick");
    };
  return {
    getRootProps: (ne = {}) => {
      const F = kE(e);
      delete F.onTransitionEnter, delete F.onTransitionExited;
      const ie = { ...F, ...ne };
      return { role: "presentation", ...ie, onKeyDown: R(ie), ref: b };
    },
    getBackdropProps: (ne = {}) => {
      const F = ne;
      return { "aria-hidden": !0, ...F, onClick: V(F), open: h };
    },
    getTransitionProps: () => {
      const ne = () => {
          w(!1), u && u();
        },
        F = () => {
          w(!0), f && f(), o && P();
        };
      return {
        onEnter: H1(ne, (d == null ? void 0 : d.props.onEnter) ?? dS),
        onExited: H1(F, (d == null ? void 0 : d.props.onExited) ?? dS),
      };
    },
    rootRef: b,
    portalRef: K,
    isTopModal: L,
    exited: S,
    hasTransition: O,
  };
}
function t3(e) {
  return vt("MuiModal", e);
}
ft("MuiModal", ["root", "hidden", "backdrop"]);
const n3 = (e) => {
    const { open: n, exited: a, classes: i } = e;
    return bt(
      { root: ["root", !n && a && "hidden"], backdrop: ["backdrop"] },
      t3,
      i
    );
  },
  r3 = Ce("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (e, n) => {
      const { ownerState: a } = e;
      return [n.root, !a.open && a.exited && n.hidden];
    },
  })(
    wt(({ theme: e }) => ({
      position: "fixed",
      zIndex: (e.vars || e).zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      variants: [
        {
          props: ({ ownerState: n }) => !n.open && n.exited,
          style: { visibility: "hidden" },
        },
      ],
    }))
  ),
  a3 = Ce(OD, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (e, n) => n.backdrop,
  })({ zIndex: -1 }),
  i3 = E.forwardRef(function (n, a) {
    const i = Rt({ name: "MuiModal", props: n }),
      {
        BackdropComponent: o = a3,
        BackdropProps: u,
        classes: f,
        className: d,
        closeAfterTransition: m = !1,
        children: h,
        container: g,
        component: y,
        components: x = {},
        componentsProps: C = {},
        disableAutoFocus: b = !1,
        disableEnforceFocus: S = !1,
        disableEscapeKeyDown: w = !1,
        disablePortal: O = !1,
        disableRestoreFocus: _ = !1,
        disableScrollLock: T = !1,
        hideBackdrop: D = !1,
        keepMounted: M = !1,
        onBackdropClick: $,
        onClose: L,
        onTransitionEnter: K,
        onTransitionExited: P,
        open: R,
        slotProps: V = {},
        slots: Q = {},
        theme: J,
        ...le
      } = i,
      ne = {
        ...i,
        closeAfterTransition: m,
        disableAutoFocus: b,
        disableEnforceFocus: S,
        disableEscapeKeyDown: w,
        disablePortal: O,
        disableRestoreFocus: _,
        disableScrollLock: T,
        hideBackdrop: D,
        keepMounted: M,
      },
      {
        getRootProps: F,
        getBackdropProps: ie,
        getTransitionProps: fe,
        portalRef: ue,
        isTopModal: k,
        exited: ee,
        hasTransition: me,
      } = e3({ ...ne, rootRef: a }),
      he = { ...ne, exited: ee },
      ce = n3(he),
      be = {};
    if ((h.props.tabIndex === void 0 && (be.tabIndex = "-1"), me)) {
      const { onEnter: _e, onExited: We } = fe();
      (be.onEnter = _e), (be.onExited = We);
    }
    const xe = {
        ...le,
        slots: { root: x.Root, backdrop: x.Backdrop, ...Q },
        slotProps: { ...C, ...V },
      },
      [$e, Te] = lr("root", {
        elementType: r3,
        externalForwardedProps: xe,
        getSlotProps: F,
        additionalProps: { ref: a, as: y },
        ownerState: he,
        className: qe(
          d,
          ce == null ? void 0 : ce.root,
          !he.open && he.exited && (ce == null ? void 0 : ce.hidden)
        ),
      }),
      [Ae, Se] = lr("backdrop", {
        elementType: o,
        externalForwardedProps: xe,
        additionalProps: u,
        getSlotProps: (_e) =>
          ie({
            ..._e,
            onClick: (We) => {
              $ && $(We), _e != null && _e.onClick && _e.onClick(We);
            },
          }),
        className: qe(
          u == null ? void 0 : u.className,
          ce == null ? void 0 : ce.backdrop
        ),
        ownerState: he,
      }),
      ke = vn(u == null ? void 0 : u.ref, Se.ref);
    return !M && !R && (!me || ee)
      ? null
      : U.jsx(aD, {
          ref: ue,
          container: g,
          disablePortal: O,
          children: U.jsxs($e, {
            ...Te,
            children: [
              !D && o ? U.jsx(Ae, { ...Se, ref: ke }) : null,
              U.jsx(WD, {
                disableEnforceFocus: S,
                disableAutoFocus: b,
                disableRestoreFocus: _,
                isEnabled: k,
                open: R,
                children: E.cloneElement(h, be),
              }),
            ],
          }),
        });
  }),
  s3 = (e) => {
    const {
        classes: n,
        disableUnderline: a,
        startAdornment: i,
        endAdornment: o,
        size: u,
        hiddenLabel: f,
        multiline: d,
      } = e,
      m = {
        root: [
          "root",
          !a && "underline",
          i && "adornedStart",
          o && "adornedEnd",
          u === "small" && `size${Ne(u)}`,
          f && "hiddenLabel",
          d && "multiline",
        ],
        input: ["input"],
      },
      h = bt(m, hD, n);
    return { ...n, ...h };
  },
  o3 = Ce(od, {
    shouldForwardProp: (e) => Cr(e) || e === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (e, n) => {
      const { ownerState: a } = e;
      return [...id(e, n), !a.disableUnderline && n.underline];
    },
  })(
    wt(({ theme: e }) => {
      const n = e.palette.mode === "light",
        a = n ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
        i = n ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
        o = n ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
        u = n ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
      return {
        position: "relative",
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
        borderTopRightRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create("background-color", {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
        "&:hover": {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : o,
          "@media (hover: none)": {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
          },
        },
        [`&.${Bi.focused}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
        },
        [`&.${Bi.disabled}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : u,
        },
        variants: [
          {
            props: ({ ownerState: f }) => !f.disableUnderline,
            style: {
              "&::after": {
                left: 0,
                bottom: 0,
                content: '""',
                position: "absolute",
                right: 0,
                transform: "scaleX(0)",
                transition: e.transitions.create("transform", {
                  duration: e.transitions.duration.shorter,
                  easing: e.transitions.easing.easeOut,
                }),
                pointerEvents: "none",
              },
              [`&.${Bi.focused}:after`]: {
                transform: "scaleX(1) translateX(0)",
              },
              [`&.${Bi.error}`]: {
                "&::before, &::after": {
                  borderBottomColor: (e.vars || e).palette.error.main,
                },
              },
              "&::before": {
                borderBottom: `1px solid ${
                  e.vars
                    ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`
                    : a
                }`,
                left: 0,
                bottom: 0,
                content: '"\\00a0"',
                position: "absolute",
                right: 0,
                transition: e.transitions.create("border-bottom-color", {
                  duration: e.transitions.duration.shorter,
                }),
                pointerEvents: "none",
              },
              [`&:hover:not(.${Bi.disabled}, .${Bi.error}):before`]: {
                borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`,
              },
              [`&.${Bi.disabled}:before`]: { borderBottomStyle: "dotted" },
            },
          },
          ...Object.entries(e.palette)
            .filter(Yr())
            .map(([f]) => {
              var d;
              return {
                props: { disableUnderline: !1, color: f },
                style: {
                  "&::after": {
                    borderBottom: `2px solid ${
                      (d = (e.vars || e).palette[f]) == null ? void 0 : d.main
                    }`,
                  },
                },
              };
            }),
          {
            props: ({ ownerState: f }) => f.startAdornment,
            style: { paddingLeft: 12 },
          },
          {
            props: ({ ownerState: f }) => f.endAdornment,
            style: { paddingRight: 12 },
          },
          {
            props: ({ ownerState: f }) => f.multiline,
            style: { padding: "25px 12px 8px" },
          },
          {
            props: ({ ownerState: f, size: d }) => f.multiline && d === "small",
            style: { paddingTop: 21, paddingBottom: 4 },
          },
          {
            props: ({ ownerState: f }) => f.multiline && f.hiddenLabel,
            style: { paddingTop: 16, paddingBottom: 17 },
          },
          {
            props: ({ ownerState: f }) =>
              f.multiline && f.hiddenLabel && f.size === "small",
            style: { paddingTop: 8, paddingBottom: 9 },
          },
        ],
      };
    })
  ),
  l3 = Ce(ld, { name: "MuiFilledInput", slot: "Input", overridesResolver: sd })(
    wt(({ theme: e }) => ({
      paddingTop: 25,
      paddingRight: 12,
      paddingBottom: 8,
      paddingLeft: 12,
      ...(!e.vars && {
        "&:-webkit-autofill": {
          WebkitBoxShadow:
            e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
          WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
          caretColor: e.palette.mode === "light" ? null : "#fff",
          borderTopLeftRadius: "inherit",
          borderTopRightRadius: "inherit",
        },
      }),
      ...(e.vars && {
        "&:-webkit-autofill": {
          borderTopLeftRadius: "inherit",
          borderTopRightRadius: "inherit",
        },
        [e.getColorSchemeSelector("dark")]: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff",
          },
        },
      }),
      variants: [
        {
          props: { size: "small" },
          style: { paddingTop: 21, paddingBottom: 4 },
        },
        {
          props: ({ ownerState: n }) => n.hiddenLabel,
          style: { paddingTop: 16, paddingBottom: 17 },
        },
        {
          props: ({ ownerState: n }) => n.startAdornment,
          style: { paddingLeft: 0 },
        },
        {
          props: ({ ownerState: n }) => n.endAdornment,
          style: { paddingRight: 0 },
        },
        {
          props: ({ ownerState: n }) => n.hiddenLabel && n.size === "small",
          style: { paddingTop: 8, paddingBottom: 9 },
        },
        {
          props: ({ ownerState: n }) => n.multiline,
          style: {
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
          },
        },
      ],
    }))
  ),
  jg = E.forwardRef(function (n, a) {
    const i = Rt({ props: n, name: "MuiFilledInput" }),
      {
        disableUnderline: o = !1,
        components: u = {},
        componentsProps: f,
        fullWidth: d = !1,
        hiddenLabel: m,
        inputComponent: h = "input",
        multiline: g = !1,
        slotProps: y,
        slots: x = {},
        type: C = "text",
        ...b
      } = i,
      S = {
        ...i,
        disableUnderline: o,
        fullWidth: d,
        inputComponent: h,
        multiline: g,
        type: C,
      },
      w = s3(i),
      O = { root: { ownerState: S }, input: { ownerState: S } },
      _ = y ?? f ? yn(O, y ?? f) : O,
      T = x.root ?? u.Root ?? o3,
      D = x.input ?? u.Input ?? l3;
    return U.jsx(Lg, {
      slots: { root: T, input: D },
      slotProps: _,
      fullWidth: d,
      inputComponent: h,
      multiline: g,
      ref: a,
      type: C,
      ...b,
      classes: w,
    });
  });
jg.muiName = "Input";
function u3(e) {
  return vt("MuiFormControl", e);
}
ft("MuiFormControl", [
  "root",
  "marginNone",
  "marginNormal",
  "marginDense",
  "fullWidth",
  "disabled",
]);
const c3 = (e) => {
    const { classes: n, margin: a, fullWidth: i } = e,
      o = {
        root: ["root", a !== "none" && `margin${Ne(a)}`, i && "fullWidth"],
      };
    return bt(o, u3, n);
  },
  f3 = Ce("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: (e, n) => {
      const { ownerState: a } = e;
      return [n.root, n[`margin${Ne(a.margin)}`], a.fullWidth && n.fullWidth];
    },
  })({
    display: "inline-flex",
    flexDirection: "column",
    position: "relative",
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: "top",
    variants: [
      {
        props: { margin: "normal" },
        style: { marginTop: 16, marginBottom: 8 },
      },
      { props: { margin: "dense" }, style: { marginTop: 8, marginBottom: 4 } },
      { props: { fullWidth: !0 }, style: { width: "100%" } },
    ],
  }),
  d3 = E.forwardRef(function (n, a) {
    const i = Rt({ props: n, name: "MuiFormControl" }),
      {
        children: o,
        className: u,
        color: f = "primary",
        component: d = "div",
        disabled: m = !1,
        error: h = !1,
        focused: g,
        fullWidth: y = !1,
        hiddenLabel: x = !1,
        margin: C = "none",
        required: b = !1,
        size: S = "medium",
        variant: w = "outlined",
        ...O
      } = i,
      _ = {
        ...i,
        color: f,
        component: d,
        disabled: m,
        error: h,
        fullWidth: y,
        hiddenLabel: x,
        margin: C,
        required: b,
        size: S,
        variant: w,
      },
      T = c3(_),
      [D, M] = E.useState(() => {
        let ne = !1;
        return (
          o &&
            E.Children.forEach(o, (F) => {
              if (!Hh(F, ["Input", "Select"])) return;
              const ie = Hh(F, ["Select"]) ? F.props.input : F;
              ie && uD(ie.props) && (ne = !0);
            }),
          ne
        );
      }),
      [$, L] = E.useState(() => {
        let ne = !1;
        return (
          o &&
            E.Children.forEach(o, (F) => {
              Hh(F, ["Input", "Select"]) &&
                (Tf(F.props, !0) || Tf(F.props.inputProps, !0)) &&
                (ne = !0);
            }),
          ne
        );
      }),
      [K, P] = E.useState(!1);
    m && K && P(!1);
    const R = g !== void 0 && !m ? g : K;
    let V;
    E.useRef(!1);
    const Q = E.useCallback(() => {
        L(!0);
      }, []),
      J = E.useCallback(() => {
        L(!1);
      }, []),
      le = E.useMemo(
        () => ({
          adornedStart: D,
          setAdornedStart: M,
          color: f,
          disabled: m,
          error: h,
          filled: $,
          focused: R,
          fullWidth: y,
          hiddenLabel: x,
          size: S,
          onBlur: () => {
            P(!1);
          },
          onFocus: () => {
            P(!0);
          },
          onEmpty: J,
          onFilled: Q,
          registerEffect: V,
          required: b,
          variant: w,
        }),
        [D, f, m, h, $, R, y, x, V, J, Q, b, S, w]
      );
    return U.jsx(Ug.Provider, {
      value: le,
      children: U.jsx(f3, {
        as: d,
        ownerState: _,
        className: qe(T.root, u),
        ref: a,
        ...O,
        children: o,
      }),
    });
  });
function p3(e) {
  return vt("MuiFormHelperText", e);
}
const pS = ft("MuiFormHelperText", [
  "root",
  "error",
  "disabled",
  "sizeSmall",
  "sizeMedium",
  "contained",
  "focused",
  "filled",
  "required",
]);
var hS;
const h3 = (e) => {
    const {
        classes: n,
        contained: a,
        size: i,
        disabled: o,
        error: u,
        filled: f,
        focused: d,
        required: m,
      } = e,
      h = {
        root: [
          "root",
          o && "disabled",
          u && "error",
          i && `size${Ne(i)}`,
          a && "contained",
          d && "focused",
          f && "filled",
          m && "required",
        ],
      };
    return bt(h, p3, n);
  },
  m3 = Ce("p", {
    name: "MuiFormHelperText",
    slot: "Root",
    overridesResolver: (e, n) => {
      const { ownerState: a } = e;
      return [
        n.root,
        a.size && n[`size${Ne(a.size)}`],
        a.contained && n.contained,
        a.filled && n.filled,
      ];
    },
  })(
    wt(({ theme: e }) => ({
      color: (e.vars || e).palette.text.secondary,
      ...e.typography.caption,
      textAlign: "left",
      marginTop: 3,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      [`&.${pS.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      [`&.${pS.error}`]: { color: (e.vars || e).palette.error.main },
      variants: [
        { props: { size: "small" }, style: { marginTop: 4 } },
        {
          props: ({ ownerState: n }) => n.contained,
          style: { marginLeft: 14, marginRight: 14 },
        },
      ],
    }))
  ),
  g3 = E.forwardRef(function (n, a) {
    const i = Rt({ props: n, name: "MuiFormHelperText" }),
      {
        children: o,
        className: u,
        component: f = "p",
        disabled: d,
        error: m,
        filled: h,
        focused: g,
        margin: y,
        required: x,
        variant: C,
        ...b
      } = i,
      S = zo(),
      w = No({
        props: i,
        muiFormControl: S,
        states: [
          "variant",
          "size",
          "disabled",
          "error",
          "filled",
          "focused",
          "required",
        ],
      }),
      O = {
        ...i,
        component: f,
        contained: w.variant === "filled" || w.variant === "outlined",
        variant: w.variant,
        size: w.size,
        disabled: w.disabled,
        error: w.error,
        filled: w.filled,
        focused: w.focused,
        required: w.required,
      };
    delete O.ownerState;
    const _ = h3(O);
    return U.jsx(m3, {
      as: f,
      className: qe(_.root, u),
      ref: a,
      ...b,
      ownerState: O,
      children:
        o === " "
          ? hS ||
            (hS = U.jsx("span", {
              className: "notranslate",
              "aria-hidden": !0,
              children: "​",
            }))
          : o,
    });
  });
function y3(e) {
  return vt("MuiFormLabel", e);
}
const Kl = ft("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk",
  ]),
  v3 = (e) => {
    const {
        classes: n,
        color: a,
        focused: i,
        disabled: o,
        error: u,
        filled: f,
        required: d,
      } = e,
      m = {
        root: [
          "root",
          `color${Ne(a)}`,
          o && "disabled",
          u && "error",
          f && "filled",
          i && "focused",
          d && "required",
        ],
        asterisk: ["asterisk", u && "error"],
      };
    return bt(m, y3, n);
  },
  b3 = Ce("label", {
    name: "MuiFormLabel",
    slot: "Root",
    overridesResolver: (e, n) => {
      const { ownerState: a } = e;
      return [
        n.root,
        a.color === "secondary" && n.colorSecondary,
        a.filled && n.filled,
      ];
    },
  })(
    wt(({ theme: e }) => ({
      color: (e.vars || e).palette.text.secondary,
      ...e.typography.body1,
      lineHeight: "1.4375em",
      padding: 0,
      position: "relative",
      variants: [
        ...Object.entries(e.palette)
          .filter(Yr())
          .map(([n]) => ({
            props: { color: n },
            style: {
              [`&.${Kl.focused}`]: { color: (e.vars || e).palette[n].main },
            },
          })),
        {
          props: {},
          style: {
            [`&.${Kl.disabled}`]: {
              color: (e.vars || e).palette.text.disabled,
            },
            [`&.${Kl.error}`]: { color: (e.vars || e).palette.error.main },
          },
        },
      ],
    }))
  ),
  S3 = Ce("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (e, n) => n.asterisk,
  })(
    wt(({ theme: e }) => ({
      [`&.${Kl.error}`]: { color: (e.vars || e).palette.error.main },
    }))
  ),
  x3 = E.forwardRef(function (n, a) {
    const i = Rt({ props: n, name: "MuiFormLabel" }),
      {
        children: o,
        className: u,
        color: f,
        component: d = "label",
        disabled: m,
        error: h,
        filled: g,
        focused: y,
        required: x,
        ...C
      } = i,
      b = zo(),
      S = No({
        props: i,
        muiFormControl: b,
        states: ["color", "required", "focused", "disabled", "error", "filled"],
      }),
      w = {
        ...i,
        color: S.color || "primary",
        component: d,
        disabled: S.disabled,
        error: S.error,
        filled: S.filled,
        focused: S.focused,
        required: S.required,
      },
      O = v3(w);
    return U.jsxs(b3, {
      as: d,
      ownerState: w,
      className: qe(O.root, u),
      ref: a,
      ...C,
      children: [
        o,
        S.required &&
          U.jsxs(S3, {
            ownerState: w,
            "aria-hidden": !0,
            className: O.asterisk,
            children: [" ", "*"],
          }),
      ],
    });
  });
function jm(e) {
  return `scale(${e}, ${e ** 2})`;
}
const E3 = {
    entering: { opacity: 1, transform: jm(1) },
    entered: { opacity: 1, transform: "none" },
  },
  Vh =
    typeof navigator < "u" &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  $m = E.forwardRef(function (n, a) {
    const {
        addEndListener: i,
        appear: o = !0,
        children: u,
        easing: f,
        in: d,
        onEnter: m,
        onEntered: h,
        onEntering: g,
        onExit: y,
        onExited: x,
        onExiting: C,
        style: b,
        timeout: S = "auto",
        TransitionComponent: w = Kr,
        ...O
      } = n,
      _ = DE(),
      T = E.useRef(),
      D = Ng(),
      M = E.useRef(null),
      $ = vn(M, Ru(u), a),
      L = (ne) => (F) => {
        if (ne) {
          const ie = M.current;
          F === void 0 ? ne(ie) : ne(ie, F);
        }
      },
      K = L(g),
      P = L((ne, F) => {
        YE(ne);
        const {
          duration: ie,
          delay: fe,
          easing: ue,
        } = Cf({ style: b, timeout: S, easing: f }, { mode: "enter" });
        let k;
        S === "auto"
          ? ((k = D.transitions.getAutoHeightDuration(ne.clientHeight)),
            (T.current = k))
          : (k = ie),
          (ne.style.transition = [
            D.transitions.create("opacity", { duration: k, delay: fe }),
            D.transitions.create("transform", {
              duration: Vh ? k : k * 0.666,
              delay: fe,
              easing: ue,
            }),
          ].join(",")),
          m && m(ne, F);
      }),
      R = L(h),
      V = L(C),
      Q = L((ne) => {
        const {
          duration: F,
          delay: ie,
          easing: fe,
        } = Cf({ style: b, timeout: S, easing: f }, { mode: "exit" });
        let ue;
        S === "auto"
          ? ((ue = D.transitions.getAutoHeightDuration(ne.clientHeight)),
            (T.current = ue))
          : (ue = F),
          (ne.style.transition = [
            D.transitions.create("opacity", { duration: ue, delay: ie }),
            D.transitions.create("transform", {
              duration: Vh ? ue : ue * 0.666,
              delay: Vh ? ie : ie || ue * 0.333,
              easing: fe,
            }),
          ].join(",")),
          (ne.style.opacity = 0),
          (ne.style.transform = jm(0.75)),
          y && y(ne);
      }),
      J = L(x),
      le = (ne) => {
        S === "auto" && _.start(T.current || 0, ne), i && i(M.current, ne);
      };
    return U.jsx(w, {
      appear: o,
      in: d,
      nodeRef: M,
      onEnter: P,
      onEntered: R,
      onEntering: K,
      onExit: Q,
      onExited: J,
      onExiting: V,
      addEndListener: le,
      timeout: S === "auto" ? null : S,
      ...O,
      children: (ne, { ownerState: F, ...ie }) =>
        E.cloneElement(u, {
          style: {
            opacity: 0,
            transform: jm(0.75),
            visibility: ne === "exited" && !d ? "hidden" : void 0,
            ...E3[ne],
            ...b,
            ...u.props.style,
          },
          ref: $,
          ...ie,
        }),
    });
  });
$m && ($m.muiSupportAuto = !0);
const R3 = (e) => {
    const { classes: n, disableUnderline: a } = e,
      o = bt({ root: ["root", !a && "underline"], input: ["input"] }, dD, n);
    return { ...n, ...o };
  },
  C3 = Ce(od, {
    shouldForwardProp: (e) => Cr(e) || e === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (e, n) => {
      const { ownerState: a } = e;
      return [...id(e, n), !a.disableUnderline && n.underline];
    },
  })(
    wt(({ theme: e }) => {
      let a =
        e.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.42)"
          : "rgba(255, 255, 255, 0.7)";
      return (
        e.vars &&
          (a = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),
        {
          position: "relative",
          variants: [
            {
              props: ({ ownerState: i }) => i.formControl,
              style: { "label + &": { marginTop: 16 } },
            },
            {
              props: ({ ownerState: i }) => !i.disableUnderline,
              style: {
                "&::after": {
                  left: 0,
                  bottom: 0,
                  content: '""',
                  position: "absolute",
                  right: 0,
                  transform: "scaleX(0)",
                  transition: e.transitions.create("transform", {
                    duration: e.transitions.duration.shorter,
                    easing: e.transitions.easing.easeOut,
                  }),
                  pointerEvents: "none",
                },
                [`&.${Ll.focused}:after`]: {
                  transform: "scaleX(1) translateX(0)",
                },
                [`&.${Ll.error}`]: {
                  "&::before, &::after": {
                    borderBottomColor: (e.vars || e).palette.error.main,
                  },
                },
                "&::before": {
                  borderBottom: `1px solid ${a}`,
                  left: 0,
                  bottom: 0,
                  content: '"\\00a0"',
                  position: "absolute",
                  right: 0,
                  transition: e.transitions.create("border-bottom-color", {
                    duration: e.transitions.duration.shorter,
                  }),
                  pointerEvents: "none",
                },
                [`&:hover:not(.${Ll.disabled}, .${Ll.error}):before`]: {
                  borderBottom: `2px solid ${
                    (e.vars || e).palette.text.primary
                  }`,
                  "@media (hover: none)": { borderBottom: `1px solid ${a}` },
                },
                [`&.${Ll.disabled}:before`]: { borderBottomStyle: "dotted" },
              },
            },
            ...Object.entries(e.palette)
              .filter(Yr())
              .map(([i]) => ({
                props: { color: i, disableUnderline: !1 },
                style: {
                  "&::after": {
                    borderBottom: `2px solid ${(e.vars || e).palette[i].main}`,
                  },
                },
              })),
          ],
        }
      );
    })
  ),
  w3 = Ce(ld, { name: "MuiInput", slot: "Input", overridesResolver: sd })({}),
  $g = E.forwardRef(function (n, a) {
    const i = Rt({ props: n, name: "MuiInput" }),
      {
        disableUnderline: o = !1,
        components: u = {},
        componentsProps: f,
        fullWidth: d = !1,
        inputComponent: m = "input",
        multiline: h = !1,
        slotProps: g,
        slots: y = {},
        type: x = "text",
        ...C
      } = i,
      b = R3(i),
      w = { root: { ownerState: { disableUnderline: o } } },
      O = g ?? f ? yn(g ?? f, w) : w,
      _ = y.root ?? u.Root ?? C3,
      T = y.input ?? u.Input ?? w3;
    return U.jsx(Lg, {
      slots: { root: _, input: T },
      slotProps: O,
      fullWidth: d,
      inputComponent: m,
      multiline: h,
      ref: a,
      type: x,
      ...C,
      classes: b,
    });
  });
$g.muiName = "Input";
function T3(e) {
  return vt("MuiInputLabel", e);
}
ft("MuiInputLabel", [
  "root",
  "focused",
  "disabled",
  "error",
  "required",
  "asterisk",
  "formControl",
  "sizeSmall",
  "shrink",
  "animated",
  "standard",
  "filled",
  "outlined",
]);
const A3 = (e) => {
    const {
        classes: n,
        formControl: a,
        size: i,
        shrink: o,
        disableAnimation: u,
        variant: f,
        required: d,
      } = e,
      m = {
        root: [
          "root",
          a && "formControl",
          !u && "animated",
          o && "shrink",
          i && i !== "normal" && `size${Ne(i)}`,
          f,
        ],
        asterisk: [d && "asterisk"],
      },
      h = bt(m, T3, n);
    return { ...n, ...h };
  },
  O3 = Ce(x3, {
    shouldForwardProp: (e) => Cr(e) || e === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (e, n) => {
      const { ownerState: a } = e;
      return [
        { [`& .${Kl.asterisk}`]: n.asterisk },
        n.root,
        a.formControl && n.formControl,
        a.size === "small" && n.sizeSmall,
        a.shrink && n.shrink,
        !a.disableAnimation && n.animated,
        a.focused && n.focused,
        n[a.variant],
      ];
    },
  })(
    wt(({ theme: e }) => ({
      display: "block",
      transformOrigin: "top left",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: "100%",
      variants: [
        {
          props: ({ ownerState: n }) => n.formControl,
          style: {
            position: "absolute",
            left: 0,
            top: 0,
            transform: "translate(0, 20px) scale(1)",
          },
        },
        {
          props: { size: "small" },
          style: { transform: "translate(0, 17px) scale(1)" },
        },
        {
          props: ({ ownerState: n }) => n.shrink,
          style: {
            transform: "translate(0, -1.5px) scale(0.75)",
            transformOrigin: "top left",
            maxWidth: "133%",
          },
        },
        {
          props: ({ ownerState: n }) => !n.disableAnimation,
          style: {
            transition: e.transitions.create(
              ["color", "transform", "max-width"],
              {
                duration: e.transitions.duration.shorter,
                easing: e.transitions.easing.easeOut,
              }
            ),
          },
        },
        {
          props: { variant: "filled" },
          style: {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(12px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
        },
        {
          props: { variant: "filled", size: "small" },
          style: { transform: "translate(12px, 13px) scale(1)" },
        },
        {
          props: ({ variant: n, ownerState: a }) => n === "filled" && a.shrink,
          style: {
            userSelect: "none",
            pointerEvents: "auto",
            transform: "translate(12px, 7px) scale(0.75)",
            maxWidth: "calc(133% - 24px)",
          },
        },
        {
          props: ({ variant: n, ownerState: a, size: i }) =>
            n === "filled" && a.shrink && i === "small",
          style: { transform: "translate(12px, 4px) scale(0.75)" },
        },
        {
          props: { variant: "outlined" },
          style: {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(14px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
        },
        {
          props: { variant: "outlined", size: "small" },
          style: { transform: "translate(14px, 9px) scale(1)" },
        },
        {
          props: ({ variant: n, ownerState: a }) =>
            n === "outlined" && a.shrink,
          style: {
            userSelect: "none",
            pointerEvents: "auto",
            maxWidth: "calc(133% - 32px)",
            transform: "translate(14px, -9px) scale(0.75)",
          },
        },
      ],
    }))
  ),
  M3 = E.forwardRef(function (n, a) {
    const i = Rt({ name: "MuiInputLabel", props: n }),
      {
        disableAnimation: o = !1,
        margin: u,
        shrink: f,
        variant: d,
        className: m,
        ...h
      } = i,
      g = zo();
    let y = f;
    typeof y > "u" && g && (y = g.filled || g.focused || g.adornedStart);
    const x = No({
        props: i,
        muiFormControl: g,
        states: ["size", "variant", "required", "focused"],
      }),
      C = {
        ...i,
        disableAnimation: o,
        formControl: g,
        shrink: y,
        size: x.size,
        variant: x.variant,
        required: x.required,
        focused: x.focused,
      },
      b = A3(C);
    return U.jsx(O3, {
      "data-shrink": y,
      ref: a,
      className: qe(b.root, m),
      ...h,
      ownerState: C,
      classes: b,
    });
  }),
  _3 = E.createContext({});
function D3(e) {
  return vt("MuiList", e);
}
ft("MuiList", ["root", "padding", "dense", "subheader"]);
const N3 = (e) => {
    const { classes: n, disablePadding: a, dense: i, subheader: o } = e;
    return bt(
      { root: ["root", !a && "padding", i && "dense", o && "subheader"] },
      D3,
      n
    );
  },
  z3 = Ce("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (e, n) => {
      const { ownerState: a } = e;
      return [
        n.root,
        !a.disablePadding && n.padding,
        a.dense && n.dense,
        a.subheader && n.subheader,
      ];
    },
  })({
    listStyle: "none",
    margin: 0,
    padding: 0,
    position: "relative",
    variants: [
      {
        props: ({ ownerState: e }) => !e.disablePadding,
        style: { paddingTop: 8, paddingBottom: 8 },
      },
      { props: ({ ownerState: e }) => e.subheader, style: { paddingTop: 0 } },
    ],
  }),
  k3 = E.forwardRef(function (n, a) {
    const i = Rt({ props: n, name: "MuiList" }),
      {
        children: o,
        className: u,
        component: f = "ul",
        dense: d = !1,
        disablePadding: m = !1,
        subheader: h,
        ...g
      } = i,
      y = E.useMemo(() => ({ dense: d }), [d]),
      x = { ...i, component: f, dense: d, disablePadding: m },
      C = N3(x);
    return U.jsx(_3.Provider, {
      value: y,
      children: U.jsxs(z3, {
        as: f,
        className: qe(C.root, u),
        ref: a,
        ownerState: x,
        ...g,
        children: [h, o],
      }),
    });
  });
function Gh(e, n, a) {
  return e === n
    ? e.firstChild
    : n && n.nextElementSibling
    ? n.nextElementSibling
    : a
    ? null
    : e.firstChild;
}
function mS(e, n, a) {
  return e === n
    ? a
      ? e.firstChild
      : e.lastChild
    : n && n.previousElementSibling
    ? n.previousElementSibling
    : a
    ? null
    : e.lastChild;
}
function WE(e, n) {
  if (n === void 0) return !0;
  let a = e.innerText;
  return (
    a === void 0 && (a = e.textContent),
    (a = a.trim().toLowerCase()),
    a.length === 0
      ? !1
      : n.repeating
      ? a[0] === n.keys[0]
      : a.startsWith(n.keys.join(""))
  );
}
function jl(e, n, a, i, o, u) {
  let f = !1,
    d = o(e, n, n ? a : !1);
  for (; d; ) {
    if (d === e.firstChild) {
      if (f) return !1;
      f = !0;
    }
    const m = i ? !1 : d.disabled || d.getAttribute("aria-disabled") === "true";
    if (!d.hasAttribute("tabindex") || !WE(d, u) || m) d = o(e, d, a);
    else return d.focus(), !0;
  }
  return !1;
}
const B3 = E.forwardRef(function (n, a) {
  const {
      actions: i,
      autoFocus: o = !1,
      autoFocusItem: u = !1,
      children: f,
      className: d,
      disabledItemsFocusable: m = !1,
      disableListWrap: h = !1,
      onKeyDown: g,
      variant: y = "selectedMenu",
      ...x
    } = n,
    C = E.useRef(null),
    b = E.useRef({
      keys: [],
      repeating: !0,
      previousKeyMatched: !0,
      lastTime: null,
    });
  as(() => {
    o && C.current.focus();
  }, [o]),
    E.useImperativeHandle(
      i,
      () => ({
        adjustStyleForScrollbar: (T, { direction: D }) => {
          const M = !C.current.style.width;
          if (T.clientHeight < C.current.clientHeight && M) {
            const $ = `${NE(Ca(T))}px`;
            (C.current.style[D === "rtl" ? "paddingLeft" : "paddingRight"] = $),
              (C.current.style.width = `calc(100% + ${$})`);
          }
          return C.current;
        },
      }),
      []
    );
  const S = (T) => {
      const D = C.current,
        M = T.key;
      if (T.ctrlKey || T.metaKey || T.altKey) {
        g && g(T);
        return;
      }
      const L = xr(D).activeElement;
      if (M === "ArrowDown") T.preventDefault(), jl(D, L, h, m, Gh);
      else if (M === "ArrowUp") T.preventDefault(), jl(D, L, h, m, mS);
      else if (M === "Home") T.preventDefault(), jl(D, null, h, m, Gh);
      else if (M === "End") T.preventDefault(), jl(D, null, h, m, mS);
      else if (M.length === 1) {
        const K = b.current,
          P = M.toLowerCase(),
          R = performance.now();
        K.keys.length > 0 &&
          (R - K.lastTime > 500
            ? ((K.keys = []), (K.repeating = !0), (K.previousKeyMatched = !0))
            : K.repeating && P !== K.keys[0] && (K.repeating = !1)),
          (K.lastTime = R),
          K.keys.push(P);
        const V = L && !K.repeating && WE(L, K);
        K.previousKeyMatched && (V || jl(D, L, !1, m, Gh, K))
          ? T.preventDefault()
          : (K.previousKeyMatched = !1);
      }
      g && g(T);
    },
    w = vn(C, a);
  let O = -1;
  E.Children.forEach(f, (T, D) => {
    if (!E.isValidElement(T)) {
      O === D && ((O += 1), O >= f.length && (O = -1));
      return;
    }
    T.props.disabled ||
      (((y === "selectedMenu" && T.props.selected) || O === -1) && (O = D)),
      O === D &&
        (T.props.disabled ||
          T.props.muiSkipListHighlight ||
          T.type.muiSkipListHighlight) &&
        ((O += 1), O >= f.length && (O = -1));
  });
  const _ = E.Children.map(f, (T, D) => {
    if (D === O) {
      const M = {};
      return (
        u && (M.autoFocus = !0),
        T.props.tabIndex === void 0 && y === "selectedMenu" && (M.tabIndex = 0),
        E.cloneElement(T, M)
      );
    }
    return T;
  });
  return U.jsx(k3, {
    role: "menu",
    ref: w,
    className: d,
    onKeyDown: S,
    tabIndex: o ? 0 : -1,
    ...x,
    children: _,
  });
});
function U3(e) {
  return vt("MuiPopover", e);
}
ft("MuiPopover", ["root", "paper"]);
function gS(e, n) {
  let a = 0;
  return (
    typeof n == "number"
      ? (a = n)
      : n === "center"
      ? (a = e.height / 2)
      : n === "bottom" && (a = e.height),
    a
  );
}
function yS(e, n) {
  let a = 0;
  return (
    typeof n == "number"
      ? (a = n)
      : n === "center"
      ? (a = e.width / 2)
      : n === "right" && (a = e.width),
    a
  );
}
function vS(e) {
  return [e.horizontal, e.vertical]
    .map((n) => (typeof n == "number" ? `${n}px` : n))
    .join(" ");
}
function Ih(e) {
  return typeof e == "function" ? e() : e;
}
const L3 = (e) => {
    const { classes: n } = e;
    return bt({ root: ["root"], paper: ["paper"] }, U3, n);
  },
  j3 = Ce(i3, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (e, n) => n.root,
  })({}),
  ZE = Ce(QE, {
    name: "MuiPopover",
    slot: "Paper",
    overridesResolver: (e, n) => n.paper,
  })({
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0,
  }),
  $3 = E.forwardRef(function (n, a) {
    const i = Rt({ props: n, name: "MuiPopover" }),
      {
        action: o,
        anchorEl: u,
        anchorOrigin: f = { vertical: "top", horizontal: "left" },
        anchorPosition: d,
        anchorReference: m = "anchorEl",
        children: h,
        className: g,
        container: y,
        elevation: x = 8,
        marginThreshold: C = 16,
        open: b,
        PaperProps: S = {},
        slots: w = {},
        slotProps: O = {},
        transformOrigin: _ = { vertical: "top", horizontal: "left" },
        TransitionComponent: T = $m,
        transitionDuration: D = "auto",
        TransitionProps: { onEntering: M, ...$ } = {},
        disableScrollLock: L = !1,
        ...K
      } = i,
      P = (O == null ? void 0 : O.paper) ?? S,
      R = E.useRef(),
      V = {
        ...i,
        anchorOrigin: f,
        anchorReference: m,
        elevation: x,
        marginThreshold: C,
        externalPaperSlotProps: P,
        transformOrigin: _,
        TransitionComponent: T,
        transitionDuration: D,
        TransitionProps: $,
      },
      Q = L3(V),
      J = E.useCallback(() => {
        if (m === "anchorPosition") return d;
        const Se = Ih(u),
          _e = (
            Se && Se.nodeType === 1 ? Se : xr(R.current).body
          ).getBoundingClientRect();
        return {
          top: _e.top + gS(_e, f.vertical),
          left: _e.left + yS(_e, f.horizontal),
        };
      }, [u, f.horizontal, f.vertical, d, m]),
      le = E.useCallback(
        (Se) => ({
          vertical: gS(Se, _.vertical),
          horizontal: yS(Se, _.horizontal),
        }),
        [_.horizontal, _.vertical]
      ),
      ne = E.useCallback(
        (Se) => {
          const ke = { width: Se.offsetWidth, height: Se.offsetHeight },
            _e = le(ke);
          if (m === "none")
            return { top: null, left: null, transformOrigin: vS(_e) };
          const We = J();
          let Le = We.top - _e.vertical,
            rt = We.left - _e.horizontal;
          const Ut = Le + ke.height,
            Ft = rt + ke.width,
            z = Ca(Ih(u)),
            G = z.innerHeight - C,
            X = z.innerWidth - C;
          if (C !== null && Le < C) {
            const de = Le - C;
            (Le -= de), (_e.vertical += de);
          } else if (C !== null && Ut > G) {
            const de = Ut - G;
            (Le -= de), (_e.vertical += de);
          }
          if (C !== null && rt < C) {
            const de = rt - C;
            (rt -= de), (_e.horizontal += de);
          } else if (Ft > X) {
            const de = Ft - X;
            (rt -= de), (_e.horizontal += de);
          }
          return {
            top: `${Math.round(Le)}px`,
            left: `${Math.round(rt)}px`,
            transformOrigin: vS(_e),
          };
        },
        [u, m, J, le, C]
      ),
      [F, ie] = E.useState(b),
      fe = E.useCallback(() => {
        const Se = R.current;
        if (!Se) return;
        const ke = ne(Se);
        ke.top !== null && Se.style.setProperty("top", ke.top),
          ke.left !== null && (Se.style.left = ke.left),
          (Se.style.transformOrigin = ke.transformOrigin),
          ie(!0);
      }, [ne]);
    E.useEffect(
      () => (
        L && window.addEventListener("scroll", fe),
        () => window.removeEventListener("scroll", fe)
      ),
      [u, L, fe]
    );
    const ue = (Se, ke) => {
        M && M(Se, ke), fe();
      },
      k = () => {
        ie(!1);
      };
    E.useEffect(() => {
      b && fe();
    }),
      E.useImperativeHandle(
        o,
        () =>
          b
            ? {
                updatePosition: () => {
                  fe();
                },
              }
            : null,
        [b, fe]
      ),
      E.useEffect(() => {
        if (!b) return;
        const Se = ME(() => {
            fe();
          }),
          ke = Ca(u);
        return (
          ke.addEventListener("resize", Se),
          () => {
            Se.clear(), ke.removeEventListener("resize", Se);
          }
        );
      }, [u, b, fe]);
    let ee = D;
    D === "auto" && !T.muiSupportAuto && (ee = void 0);
    const me = y || (u ? xr(Ih(u)).body : void 0),
      he = { slots: w, slotProps: { ...O, paper: P } },
      [ce, be] = lr("paper", {
        elementType: ZE,
        externalForwardedProps: he,
        additionalProps: {
          elevation: x,
          className: qe(Q.paper, P == null ? void 0 : P.className),
          style: F ? P.style : { ...P.style, opacity: 0 },
        },
        ownerState: V,
      }),
      [xe, { slotProps: $e, ...Te }] = lr("root", {
        elementType: j3,
        externalForwardedProps: he,
        additionalProps: {
          slotProps: { backdrop: { invisible: !0 } },
          container: me,
          open: b,
        },
        ownerState: V,
        className: qe(Q.root, g),
      }),
      Ae = vn(R, be.ref);
    return U.jsx(xe, {
      ...Te,
      ...(!Lm(xe) && { slotProps: $e, disableScrollLock: L }),
      ...K,
      ref: a,
      children: U.jsx(T, {
        appear: !0,
        in: b,
        onEntering: ue,
        onExited: k,
        timeout: ee,
        ...$,
        children: U.jsx(ce, { ...be, ref: Ae, children: h }),
      }),
    });
  });
function H3(e) {
  return vt("MuiMenu", e);
}
ft("MuiMenu", ["root", "paper", "list"]);
const P3 = { vertical: "top", horizontal: "right" },
  F3 = { vertical: "top", horizontal: "left" },
  q3 = (e) => {
    const { classes: n } = e;
    return bt({ root: ["root"], paper: ["paper"], list: ["list"] }, H3, n);
  },
  V3 = Ce($3, {
    shouldForwardProp: (e) => Cr(e) || e === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (e, n) => n.root,
  })({}),
  G3 = Ce(ZE, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (e, n) => n.paper,
  })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }),
  I3 = Ce(B3, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (e, n) => n.list,
  })({ outline: 0 }),
  Y3 = E.forwardRef(function (n, a) {
    const i = Rt({ props: n, name: "MuiMenu" }),
      {
        autoFocus: o = !0,
        children: u,
        className: f,
        disableAutoFocusItem: d = !1,
        MenuListProps: m = {},
        onClose: h,
        open: g,
        PaperProps: y = {},
        PopoverClasses: x,
        transitionDuration: C = "auto",
        TransitionProps: { onEntering: b, ...S } = {},
        variant: w = "selectedMenu",
        slots: O = {},
        slotProps: _ = {},
        ...T
      } = i,
      D = y_(),
      M = {
        ...i,
        autoFocus: o,
        disableAutoFocusItem: d,
        MenuListProps: m,
        onEntering: b,
        PaperProps: y,
        transitionDuration: C,
        TransitionProps: S,
        variant: w,
      },
      $ = q3(M),
      L = o && !d && g,
      K = E.useRef(null),
      P = (F, ie) => {
        K.current &&
          K.current.adjustStyleForScrollbar(F, {
            direction: D ? "rtl" : "ltr",
          }),
          b && b(F, ie);
      },
      R = (F) => {
        F.key === "Tab" && (F.preventDefault(), h && h(F, "tabKeyDown"));
      };
    let V = -1;
    E.Children.map(u, (F, ie) => {
      E.isValidElement(F) &&
        (F.props.disabled ||
          (((w === "selectedMenu" && F.props.selected) || V === -1) &&
            (V = ie)));
    });
    const Q = O.paper ?? G3,
      J = _.paper ?? y,
      le = Y1({
        elementType: O.root,
        externalSlotProps: _.root,
        ownerState: M,
        className: [$.root, f],
      }),
      ne = Y1({
        elementType: Q,
        externalSlotProps: J,
        ownerState: M,
        className: $.paper,
      });
    return U.jsx(V3, {
      onClose: h,
      anchorOrigin: { vertical: "bottom", horizontal: D ? "right" : "left" },
      transformOrigin: D ? P3 : F3,
      slots: { paper: Q, root: O.root },
      slotProps: { root: le, paper: ne },
      open: g,
      ref: a,
      transitionDuration: C,
      TransitionProps: { onEntering: P, ...S },
      ownerState: M,
      ...T,
      classes: x,
      children: U.jsx(I3, {
        onKeyDown: R,
        actions: K,
        autoFocus: o && (V === -1 || d),
        autoFocusItem: L,
        variant: w,
        ...m,
        className: qe($.list, m.className),
        children: u,
      }),
    });
  });
function Q3(e) {
  return vt("MuiNativeSelect", e);
}
const Hg = ft("MuiNativeSelect", [
    "root",
    "select",
    "multiple",
    "filled",
    "outlined",
    "standard",
    "disabled",
    "icon",
    "iconOpen",
    "iconFilled",
    "iconOutlined",
    "iconStandard",
    "nativeInput",
    "error",
  ]),
  K3 = (e) => {
    const {
        classes: n,
        variant: a,
        disabled: i,
        multiple: o,
        open: u,
        error: f,
      } = e,
      d = {
        select: ["select", a, i && "disabled", o && "multiple", f && "error"],
        icon: ["icon", `icon${Ne(a)}`, u && "iconOpen", i && "disabled"],
      };
    return bt(d, Q3, n);
  },
  JE = Ce("select")(({ theme: e }) => ({
    MozAppearance: "none",
    WebkitAppearance: "none",
    userSelect: "none",
    borderRadius: 0,
    cursor: "pointer",
    "&:focus": { borderRadius: 0 },
    [`&.${Hg.disabled}`]: { cursor: "default" },
    "&[multiple]": { height: "auto" },
    "&:not([multiple]) option, &:not([multiple]) optgroup": {
      backgroundColor: (e.vars || e).palette.background.paper,
    },
    variants: [
      {
        props: ({ ownerState: n }) =>
          n.variant !== "filled" && n.variant !== "outlined",
        style: { "&&&": { paddingRight: 24, minWidth: 16 } },
      },
      { props: { variant: "filled" }, style: { "&&&": { paddingRight: 32 } } },
      {
        props: { variant: "outlined" },
        style: {
          borderRadius: (e.vars || e).shape.borderRadius,
          "&:focus": { borderRadius: (e.vars || e).shape.borderRadius },
          "&&&": { paddingRight: 32 },
        },
      },
    ],
  })),
  X3 = Ce(JE, {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: Cr,
    overridesResolver: (e, n) => {
      const { ownerState: a } = e;
      return [
        n.select,
        n[a.variant],
        a.error && n.error,
        { [`&.${Hg.multiple}`]: n.multiple },
      ];
    },
  })({}),
  eR = Ce("svg")(({ theme: e }) => ({
    position: "absolute",
    right: 0,
    top: "calc(50% - .5em)",
    pointerEvents: "none",
    color: (e.vars || e).palette.action.active,
    [`&.${Hg.disabled}`]: { color: (e.vars || e).palette.action.disabled },
    variants: [
      {
        props: ({ ownerState: n }) => n.open,
        style: { transform: "rotate(180deg)" },
      },
      { props: { variant: "filled" }, style: { right: 7 } },
      { props: { variant: "outlined" }, style: { right: 7 } },
    ],
  })),
  W3 = Ce(eR, {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (e, n) => {
      const { ownerState: a } = e;
      return [
        n.icon,
        a.variant && n[`icon${Ne(a.variant)}`],
        a.open && n.iconOpen,
      ];
    },
  })({}),
  Z3 = E.forwardRef(function (n, a) {
    const {
        className: i,
        disabled: o,
        error: u,
        IconComponent: f,
        inputRef: d,
        variant: m = "standard",
        ...h
      } = n,
      g = { ...n, disabled: o, variant: m, error: u },
      y = K3(g);
    return U.jsxs(E.Fragment, {
      children: [
        U.jsx(X3, {
          ownerState: g,
          className: qe(y.select, i),
          disabled: o,
          ref: d || a,
          ...h,
        }),
        n.multiple
          ? null
          : U.jsx(W3, { as: f, ownerState: g, className: y.icon }),
      ],
    });
  });
var bS;
const J3 = Ce("fieldset", { shouldForwardProp: Cr })({
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    minWidth: "0%",
  }),
  e6 = Ce("legend", { shouldForwardProp: Cr })(
    wt(({ theme: e }) => ({
      float: "unset",
      width: "auto",
      overflow: "hidden",
      variants: [
        {
          props: ({ ownerState: n }) => !n.withLabel,
          style: {
            padding: 0,
            lineHeight: "11px",
            transition: e.transitions.create("width", {
              duration: 150,
              easing: e.transitions.easing.easeOut,
            }),
          },
        },
        {
          props: ({ ownerState: n }) => n.withLabel,
          style: {
            display: "block",
            padding: 0,
            height: 11,
            fontSize: "0.75em",
            visibility: "hidden",
            maxWidth: 0.01,
            transition: e.transitions.create("max-width", {
              duration: 50,
              easing: e.transitions.easing.easeOut,
            }),
            whiteSpace: "nowrap",
            "& > span": {
              paddingLeft: 5,
              paddingRight: 5,
              display: "inline-block",
              opacity: 0,
              visibility: "visible",
            },
          },
        },
        {
          props: ({ ownerState: n }) => n.withLabel && n.notched,
          style: {
            maxWidth: "100%",
            transition: e.transitions.create("max-width", {
              duration: 100,
              easing: e.transitions.easing.easeOut,
              delay: 50,
            }),
          },
        },
      ],
    }))
  );
function t6(e) {
  const {
      children: n,
      classes: a,
      className: i,
      label: o,
      notched: u,
      ...f
    } = e,
    d = o != null && o !== "",
    m = { ...e, notched: u, withLabel: d };
  return U.jsx(J3, {
    "aria-hidden": !0,
    className: i,
    ownerState: m,
    ...f,
    children: U.jsx(e6, {
      ownerState: m,
      children: d
        ? U.jsx("span", { children: o })
        : bS ||
          (bS = U.jsx("span", {
            className: "notranslate",
            "aria-hidden": !0,
            children: "​",
          })),
    }),
  });
}
const n6 = (e) => {
    const { classes: n } = e,
      i = bt(
        {
          root: ["root"],
          notchedOutline: ["notchedOutline"],
          input: ["input"],
        },
        pD,
        n
      );
    return { ...n, ...i };
  },
  r6 = Ce(od, {
    shouldForwardProp: (e) => Cr(e) || e === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: id,
  })(
    wt(({ theme: e }) => {
      const n =
        e.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.23)"
          : "rgba(255, 255, 255, 0.23)";
      return {
        position: "relative",
        borderRadius: (e.vars || e).shape.borderRadius,
        [`&:hover .${kr.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.text.primary,
        },
        "@media (hover: none)": {
          [`&:hover .${kr.notchedOutline}`]: {
            borderColor: e.vars
              ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
              : n,
          },
        },
        [`&.${kr.focused} .${kr.notchedOutline}`]: { borderWidth: 2 },
        variants: [
          ...Object.entries(e.palette)
            .filter(Yr())
            .map(([a]) => ({
              props: { color: a },
              style: {
                [`&.${kr.focused} .${kr.notchedOutline}`]: {
                  borderColor: (e.vars || e).palette[a].main,
                },
              },
            })),
          {
            props: {},
            style: {
              [`&.${kr.error} .${kr.notchedOutline}`]: {
                borderColor: (e.vars || e).palette.error.main,
              },
              [`&.${kr.disabled} .${kr.notchedOutline}`]: {
                borderColor: (e.vars || e).palette.action.disabled,
              },
            },
          },
          {
            props: ({ ownerState: a }) => a.startAdornment,
            style: { paddingLeft: 14 },
          },
          {
            props: ({ ownerState: a }) => a.endAdornment,
            style: { paddingRight: 14 },
          },
          {
            props: ({ ownerState: a }) => a.multiline,
            style: { padding: "16.5px 14px" },
          },
          {
            props: ({ ownerState: a, size: i }) => a.multiline && i === "small",
            style: { padding: "8.5px 14px" },
          },
        ],
      };
    })
  ),
  a6 = Ce(t6, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (e, n) => n.notchedOutline,
  })(
    wt(({ theme: e }) => {
      const n =
        e.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.23)"
          : "rgba(255, 255, 255, 0.23)";
      return {
        borderColor: e.vars
          ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
          : n,
      };
    })
  ),
  i6 = Ce(ld, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: sd,
  })(
    wt(({ theme: e }) => ({
      padding: "16.5px 14px",
      ...(!e.vars && {
        "&:-webkit-autofill": {
          WebkitBoxShadow:
            e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
          WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
          caretColor: e.palette.mode === "light" ? null : "#fff",
          borderRadius: "inherit",
        },
      }),
      ...(e.vars && {
        "&:-webkit-autofill": { borderRadius: "inherit" },
        [e.getColorSchemeSelector("dark")]: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff",
          },
        },
      }),
      variants: [
        { props: { size: "small" }, style: { padding: "8.5px 14px" } },
        { props: ({ ownerState: n }) => n.multiline, style: { padding: 0 } },
        {
          props: ({ ownerState: n }) => n.startAdornment,
          style: { paddingLeft: 0 },
        },
        {
          props: ({ ownerState: n }) => n.endAdornment,
          style: { paddingRight: 0 },
        },
      ],
    }))
  ),
  Pg = E.forwardRef(function (n, a) {
    var i;
    const o = Rt({ props: n, name: "MuiOutlinedInput" }),
      {
        components: u = {},
        fullWidth: f = !1,
        inputComponent: d = "input",
        label: m,
        multiline: h = !1,
        notched: g,
        slots: y = {},
        type: x = "text",
        ...C
      } = o,
      b = n6(o),
      S = zo(),
      w = No({
        props: o,
        muiFormControl: S,
        states: [
          "color",
          "disabled",
          "error",
          "focused",
          "hiddenLabel",
          "size",
          "required",
        ],
      }),
      O = {
        ...o,
        color: w.color || "primary",
        disabled: w.disabled,
        error: w.error,
        focused: w.focused,
        formControl: S,
        fullWidth: f,
        hiddenLabel: w.hiddenLabel,
        multiline: h,
        size: w.size,
        type: x,
      },
      _ = y.root ?? u.Root ?? r6,
      T = y.input ?? u.Input ?? i6;
    return U.jsx(Lg, {
      slots: { root: _, input: T },
      renderSuffix: (D) =>
        U.jsx(a6, {
          ownerState: O,
          className: b.notchedOutline,
          label:
            m != null && m !== "" && w.required
              ? i || (i = U.jsxs(E.Fragment, { children: [m, " ", "*"] }))
              : m,
          notched:
            typeof g < "u" ? g : !!(D.startAdornment || D.filled || D.focused),
        }),
      fullWidth: f,
      inputComponent: d,
      multiline: h,
      ref: a,
      type: x,
      ...C,
      classes: { ...b, notchedOutline: null },
    });
  });
Pg.muiName = "Input";
function tR(e) {
  return vt("MuiSelect", e);
}
const $l = ft("MuiSelect", [
  "root",
  "select",
  "multiple",
  "filled",
  "outlined",
  "standard",
  "disabled",
  "focused",
  "icon",
  "iconOpen",
  "iconFilled",
  "iconOutlined",
  "iconStandard",
  "nativeInput",
  "error",
]);
var SS;
const s6 = Ce(JE, {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (e, n) => {
      const { ownerState: a } = e;
      return [
        { [`&.${$l.select}`]: n.select },
        { [`&.${$l.select}`]: n[a.variant] },
        { [`&.${$l.error}`]: n.error },
        { [`&.${$l.multiple}`]: n.multiple },
      ];
    },
  })({
    [`&.${$l.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
  }),
  o6 = Ce(eR, {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (e, n) => {
      const { ownerState: a } = e;
      return [
        n.icon,
        a.variant && n[`icon${Ne(a.variant)}`],
        a.open && n.iconOpen,
      ];
    },
  })({}),
  l6 = Ce("input", {
    shouldForwardProp: (e) => qE(e) && e !== "classes",
    name: "MuiSelect",
    slot: "NativeInput",
    overridesResolver: (e, n) => n.nativeInput,
  })({
    bottom: 0,
    left: 0,
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    width: "100%",
    boxSizing: "border-box",
  });
function xS(e, n) {
  return typeof n == "object" && n !== null ? e === n : String(e) === String(n);
}
function u6(e) {
  return e == null || (typeof e == "string" && !e.trim());
}
const c6 = (e) => {
    const {
        classes: n,
        variant: a,
        disabled: i,
        multiple: o,
        open: u,
        error: f,
      } = e,
      d = {
        select: ["select", a, i && "disabled", o && "multiple", f && "error"],
        icon: ["icon", `icon${Ne(a)}`, u && "iconOpen", i && "disabled"],
        nativeInput: ["nativeInput"],
      };
    return bt(d, tR, n);
  },
  f6 = E.forwardRef(function (n, a) {
    var Jt;
    const {
        "aria-describedby": i,
        "aria-label": o,
        autoFocus: u,
        autoWidth: f,
        children: d,
        className: m,
        defaultOpen: h,
        defaultValue: g,
        disabled: y,
        displayEmpty: x,
        error: C = !1,
        IconComponent: b,
        inputRef: S,
        labelId: w,
        MenuProps: O = {},
        multiple: _,
        name: T,
        onBlur: D,
        onChange: M,
        onClose: $,
        onFocus: L,
        onOpen: K,
        open: P,
        readOnly: R,
        renderValue: V,
        required: Q,
        SelectDisplayProps: J = {},
        tabIndex: le,
        type: ne,
        value: F,
        variant: ie = "standard",
        ...fe
      } = n,
      [ue, k] = q1({ controlled: F, default: g, name: "Select" }),
      [ee, me] = q1({ controlled: P, default: h, name: "Select" }),
      he = E.useRef(null),
      ce = E.useRef(null),
      [be, xe] = E.useState(null),
      { current: $e } = E.useRef(P != null),
      [Te, Ae] = E.useState(),
      Se = vn(a, S),
      ke = E.useCallback((Oe) => {
        (ce.current = Oe), Oe && xe(Oe);
      }, []),
      _e = be == null ? void 0 : be.parentNode;
    E.useImperativeHandle(
      Se,
      () => ({
        focus: () => {
          ce.current.focus();
        },
        node: he.current,
        value: ue,
      }),
      [ue]
    ),
      E.useEffect(() => {
        h &&
          ee &&
          be &&
          !$e &&
          (Ae(f ? null : _e.clientWidth), ce.current.focus());
      }, [be, f]),
      E.useEffect(() => {
        u && ce.current.focus();
      }, [u]),
      E.useEffect(() => {
        if (!w) return;
        const Oe = xr(ce.current).getElementById(w);
        if (Oe) {
          const Ke = () => {
            getSelection().isCollapsed && ce.current.focus();
          };
          return (
            Oe.addEventListener("click", Ke),
            () => {
              Oe.removeEventListener("click", Ke);
            }
          );
        }
      }, [w]);
    const We = (Oe, Ke) => {
        Oe ? K && K(Ke) : $ && $(Ke),
          $e || (Ae(f ? null : _e.clientWidth), me(Oe));
      },
      Le = (Oe) => {
        Oe.button === 0 &&
          (Oe.preventDefault(), ce.current.focus(), We(!0, Oe));
      },
      rt = (Oe) => {
        We(!1, Oe);
      },
      Ut = E.Children.toArray(d),
      Ft = (Oe) => {
        const Ke = Ut.find((et) => et.props.value === Oe.target.value);
        Ke !== void 0 && (k(Ke.props.value), M && M(Oe, Ke));
      },
      z = (Oe) => (Ke) => {
        let et;
        if (Ke.currentTarget.hasAttribute("tabindex")) {
          if (_) {
            et = Array.isArray(ue) ? ue.slice() : [];
            const wa = ue.indexOf(Oe.props.value);
            wa === -1 ? et.push(Oe.props.value) : et.splice(wa, 1);
          } else et = Oe.props.value;
          if (
            (Oe.props.onClick && Oe.props.onClick(Ke), ue !== et && (k(et), M))
          ) {
            const wa = Ke.nativeEvent || Ke,
              Au = new wa.constructor(wa.type, wa);
            Object.defineProperty(Au, "target", {
              writable: !0,
              value: { value: et, name: T },
            }),
              M(Au, Oe);
          }
          _ || We(!1, Ke);
        }
      },
      G = (Oe) => {
        R ||
          ([" ", "ArrowUp", "ArrowDown", "Enter"].includes(Oe.key) &&
            (Oe.preventDefault(), We(!0, Oe)));
      },
      X = be !== null && ee,
      de = (Oe) => {
        !X &&
          D &&
          (Object.defineProperty(Oe, "target", {
            writable: !0,
            value: { value: ue, name: T },
          }),
          D(Oe));
      };
    delete fe["aria-invalid"];
    let Z, pe;
    const ge = [];
    let ze = !1;
    (Tf({ value: ue }) || x) && (V ? (Z = V(ue)) : (ze = !0));
    const dt = Ut.map((Oe) => {
      if (!E.isValidElement(Oe)) return null;
      let Ke;
      if (_) {
        if (!Array.isArray(ue)) throw new Error(Ea(2));
        (Ke = ue.some((et) => xS(et, Oe.props.value))),
          Ke && ze && ge.push(Oe.props.children);
      } else
        (Ke = xS(ue, Oe.props.value)), Ke && ze && (pe = Oe.props.children);
      return E.cloneElement(Oe, {
        "aria-selected": Ke ? "true" : "false",
        onClick: z(Oe),
        onKeyUp: (et) => {
          et.key === " " && et.preventDefault(),
            Oe.props.onKeyUp && Oe.props.onKeyUp(et);
        },
        role: "option",
        selected: Ke,
        value: void 0,
        "data-value": Oe.props.value,
      });
    });
    ze &&
      (_
        ? ge.length === 0
          ? (Z = null)
          : (Z = ge.reduce(
              (Oe, Ke, et) => (
                Oe.push(Ke), et < ge.length - 1 && Oe.push(", "), Oe
              ),
              []
            ))
        : (Z = pe));
    let pt = Te;
    !f && $e && be && (pt = _e.clientWidth);
    let qt;
    typeof le < "u" ? (qt = le) : (qt = y ? null : 0);
    const wr = J.id || (T ? `mui-component-select-${T}` : void 0),
      Cn = { ...n, variant: ie, value: ue, open: X, error: C },
      at = c6(Cn),
      Tr = {
        ...O.PaperProps,
        ...((Jt = O.slotProps) == null ? void 0 : Jt.paper),
      },
      wn = ad();
    return U.jsxs(E.Fragment, {
      children: [
        U.jsx(s6, {
          as: "div",
          ref: ke,
          tabIndex: qt,
          role: "combobox",
          "aria-controls": X ? wn : void 0,
          "aria-disabled": y ? "true" : void 0,
          "aria-expanded": X ? "true" : "false",
          "aria-haspopup": "listbox",
          "aria-label": o,
          "aria-labelledby": [w, wr].filter(Boolean).join(" ") || void 0,
          "aria-describedby": i,
          "aria-required": Q ? "true" : void 0,
          "aria-invalid": C ? "true" : void 0,
          onKeyDown: G,
          onMouseDown: y || R ? null : Le,
          onBlur: de,
          onFocus: L,
          ...J,
          ownerState: Cn,
          className: qe(J.className, at.select, m),
          id: wr,
          children: u6(Z)
            ? SS ||
              (SS = U.jsx("span", {
                className: "notranslate",
                "aria-hidden": !0,
                children: "​",
              }))
            : Z,
        }),
        U.jsx(l6, {
          "aria-invalid": C,
          value: Array.isArray(ue) ? ue.join(",") : ue,
          name: T,
          ref: he,
          "aria-hidden": !0,
          onChange: Ft,
          tabIndex: -1,
          disabled: y,
          className: at.nativeInput,
          autoFocus: u,
          required: Q,
          ...fe,
          ownerState: Cn,
        }),
        U.jsx(o6, { as: b, className: at.icon, ownerState: Cn }),
        U.jsx(Y3, {
          id: `menu-${T || ""}`,
          anchorEl: _e,
          open: X,
          onClose: rt,
          anchorOrigin: { vertical: "bottom", horizontal: "center" },
          transformOrigin: { vertical: "top", horizontal: "center" },
          ...O,
          MenuListProps: {
            "aria-labelledby": w,
            role: "listbox",
            "aria-multiselectable": _ ? "true" : void 0,
            disableListWrap: !0,
            id: wn,
            ...O.MenuListProps,
          },
          slotProps: {
            ...O.slotProps,
            paper: {
              ...Tr,
              style: { minWidth: pt, ...(Tr != null ? Tr.style : null) },
            },
          },
          children: dt,
        }),
      ],
    });
  }),
  d6 = (e) => {
    const { classes: n } = e,
      i = bt({ root: ["root"] }, tR, n);
    return { ...n, ...i };
  },
  Fg = {
    name: "MuiSelect",
    overridesResolver: (e, n) => n.root,
    shouldForwardProp: (e) => Cr(e) && e !== "variant",
    slot: "Root",
  },
  p6 = Ce($g, Fg)(""),
  h6 = Ce(Pg, Fg)(""),
  m6 = Ce(jg, Fg)(""),
  nR = E.forwardRef(function (n, a) {
    const i = Rt({ name: "MuiSelect", props: n }),
      {
        autoWidth: o = !1,
        children: u,
        classes: f = {},
        className: d,
        defaultOpen: m = !1,
        displayEmpty: h = !1,
        IconComponent: g = mD,
        id: y,
        input: x,
        inputProps: C,
        label: b,
        labelId: S,
        MenuProps: w,
        multiple: O = !1,
        native: _ = !1,
        onClose: T,
        onOpen: D,
        open: M,
        renderValue: $,
        SelectDisplayProps: L,
        variant: K = "outlined",
        ...P
      } = i,
      R = _ ? Z3 : f6,
      V = zo(),
      Q = No({ props: i, muiFormControl: V, states: ["variant", "error"] }),
      J = Q.variant || K,
      le = { ...i, variant: J, classes: f },
      ne = d6(le),
      { root: F, ...ie } = ne,
      fe =
        x ||
        {
          standard: U.jsx(p6, { ownerState: le }),
          outlined: U.jsx(h6, { label: b, ownerState: le }),
          filled: U.jsx(m6, { ownerState: le }),
        }[J],
      ue = vn(a, Ru(fe));
    return U.jsx(E.Fragment, {
      children: E.cloneElement(fe, {
        inputComponent: R,
        inputProps: {
          children: u,
          error: Q.error,
          IconComponent: g,
          variant: J,
          type: void 0,
          multiple: O,
          ...(_
            ? { id: y }
            : {
                autoWidth: o,
                defaultOpen: m,
                displayEmpty: h,
                labelId: S,
                MenuProps: w,
                onClose: T,
                onOpen: D,
                open: M,
                renderValue: $,
                SelectDisplayProps: { id: y, ...L },
              }),
          ...C,
          classes: C ? yn(ie, C.classes) : ie,
          ...(x ? x.props.inputProps : {}),
        },
        ...(((O && _) || h) && J === "outlined" ? { notched: !0 } : {}),
        ref: ue,
        className: qe(fe.props.className, d, ne.root),
        ...(!x && { variant: J }),
        ...P,
      }),
    });
  });
nR.muiName = "Select";
function g6(e) {
  return vt("MuiToolbar", e);
}
ft("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const y6 = (e) => {
    const { classes: n, disableGutters: a, variant: i } = e;
    return bt({ root: ["root", !a && "gutters", i] }, g6, n);
  },
  v6 = Ce("div", {
    name: "MuiToolbar",
    slot: "Root",
    overridesResolver: (e, n) => {
      const { ownerState: a } = e;
      return [n.root, !a.disableGutters && n.gutters, n[a.variant]];
    },
  })(
    wt(({ theme: e }) => ({
      position: "relative",
      display: "flex",
      alignItems: "center",
      variants: [
        {
          props: ({ ownerState: n }) => !n.disableGutters,
          style: {
            paddingLeft: e.spacing(2),
            paddingRight: e.spacing(2),
            [e.breakpoints.up("sm")]: {
              paddingLeft: e.spacing(3),
              paddingRight: e.spacing(3),
            },
          },
        },
        { props: { variant: "dense" }, style: { minHeight: 48 } },
        { props: { variant: "regular" }, style: e.mixins.toolbar },
      ],
    }))
  ),
  b6 = E.forwardRef(function (n, a) {
    const i = Rt({ props: n, name: "MuiToolbar" }),
      {
        className: o,
        component: u = "div",
        disableGutters: f = !1,
        variant: d = "regular",
        ...m
      } = i,
      h = { ...i, component: u, disableGutters: f, variant: d },
      g = y6(h);
    return U.jsx(v6, {
      as: u,
      className: qe(g.root, o),
      ref: a,
      ownerState: h,
      ...m,
    });
  });
function S6(e) {
  return vt("MuiTextField", e);
}
ft("MuiTextField", ["root"]);
const x6 = { standard: $g, filled: jg, outlined: Pg },
  E6 = (e) => {
    const { classes: n } = e;
    return bt({ root: ["root"] }, S6, n);
  },
  R6 = Ce(d3, {
    name: "MuiTextField",
    slot: "Root",
    overridesResolver: (e, n) => n.root,
  })({}),
  ui = E.forwardRef(function (n, a) {
    const i = Rt({ props: n, name: "MuiTextField" }),
      {
        autoComplete: o,
        autoFocus: u = !1,
        children: f,
        className: d,
        color: m = "primary",
        defaultValue: h,
        disabled: g = !1,
        error: y = !1,
        FormHelperTextProps: x,
        fullWidth: C = !1,
        helperText: b,
        id: S,
        InputLabelProps: w,
        inputProps: O,
        InputProps: _,
        inputRef: T,
        label: D,
        maxRows: M,
        minRows: $,
        multiline: L = !1,
        name: K,
        onBlur: P,
        onChange: R,
        onFocus: V,
        placeholder: Q,
        required: J = !1,
        rows: le,
        select: ne = !1,
        SelectProps: F,
        slots: ie = {},
        slotProps: fe = {},
        type: ue,
        value: k,
        variant: ee = "outlined",
        ...me
      } = i,
      he = {
        ...i,
        autoFocus: u,
        color: m,
        disabled: g,
        error: y,
        fullWidth: C,
        multiline: L,
        required: J,
        select: ne,
        variant: ee,
      },
      ce = E6(he),
      be = ad(S),
      xe = b && be ? `${be}-helper-text` : void 0,
      $e = D && be ? `${be}-label` : void 0,
      Te = x6[ee],
      Ae = {
        slots: ie,
        slotProps: {
          input: _,
          inputLabel: w,
          htmlInput: O,
          formHelperText: x,
          select: F,
          ...fe,
        },
      },
      Se = {},
      ke = Ae.slotProps.inputLabel;
    ee === "outlined" &&
      (ke && typeof ke.shrink < "u" && (Se.notched = ke.shrink),
      (Se.label = D)),
      ne &&
        ((!F || !F.native) && (Se.id = void 0),
        (Se["aria-describedby"] = void 0));
    const [_e, We] = lr("input", {
        elementType: Te,
        externalForwardedProps: Ae,
        additionalProps: Se,
        ownerState: he,
      }),
      [Le, rt] = lr("inputLabel", {
        elementType: M3,
        externalForwardedProps: Ae,
        ownerState: he,
      }),
      [Ut, Ft] = lr("htmlInput", {
        elementType: "input",
        externalForwardedProps: Ae,
        ownerState: he,
      }),
      [z, G] = lr("formHelperText", {
        elementType: g3,
        externalForwardedProps: Ae,
        ownerState: he,
      }),
      [X, de] = lr("select", {
        elementType: nR,
        externalForwardedProps: Ae,
        ownerState: he,
      }),
      Z = U.jsx(_e, {
        "aria-describedby": xe,
        autoComplete: o,
        autoFocus: u,
        defaultValue: h,
        fullWidth: C,
        multiline: L,
        name: K,
        rows: le,
        maxRows: M,
        minRows: $,
        type: ue,
        value: k,
        id: be,
        inputRef: T,
        onBlur: P,
        onChange: R,
        onFocus: V,
        placeholder: Q,
        inputProps: Ft,
        slots: { input: ie.htmlInput ? Ut : void 0 },
        ...We,
      });
    return U.jsxs(R6, {
      className: qe(ce.root, d),
      disabled: g,
      error: y,
      fullWidth: C,
      ref: a,
      required: J,
      color: m,
      variant: ee,
      ownerState: he,
      ...me,
      children: [
        D != null &&
          D !== "" &&
          U.jsx(Le, { htmlFor: be, id: $e, ...rt, children: D }),
        ne
          ? U.jsx(X, {
              "aria-describedby": xe,
              id: be,
              labelId: $e,
              value: k,
              input: Z,
              ...de,
              children: f,
            })
          : Z,
        b && U.jsx(z, { id: xe, ...G, children: b }),
      ],
    });
  }),
  C6 = () => lg({ mutationFn: () => li.logout() }),
  w6 = () => {
    const e = pu(),
      { authenticated: n, refreshAuth: a } = _o(),
      { mutate: i } = C6(),
      o = () => {
        e("/login");
      },
      u = async () => {
        i(void 0, {
          onSuccess: async () => {
            await a(), e("/login");
          },
          onError: () => {},
        });
      };
    return U.jsx(DD, {
      sx: { flexGrow: 1 },
      children: U.jsx(nD, {
        position: "static",
        children: U.jsxs(b6, {
          children: [
            U.jsx(I4, {
              size: "large",
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              sx: { mr: 2 },
            }),
            U.jsx(Z4, {
              variant: "h6",
              component: "div",
              sx: { flexGrow: 1 },
              children: "UniVerse",
            }),
            n
              ? U.jsx(vo, { color: "inherit", onClick: u, children: "Logout" })
              : U.jsx(vo, { color: "inherit", onClick: o, children: "Login" }),
          ],
        }),
      }),
    });
  };
var zn = function () {
  return (
    (zn =
      Object.assign ||
      function (n) {
        for (var a, i = 1, o = arguments.length; i < o; i++) {
          a = arguments[i];
          for (var u in a)
            Object.prototype.hasOwnProperty.call(a, u) && (n[u] = a[u]);
        }
        return n;
      }),
    zn.apply(this, arguments)
  );
};
function Af(e, n, a) {
  if (a || arguments.length === 2)
    for (var i = 0, o = n.length, u; i < o; i++)
      (u || !(i in n)) &&
        (u || (u = Array.prototype.slice.call(n, 0, i)), (u[i] = n[i]));
  return e.concat(u || Array.prototype.slice.call(n));
}
var Ct = "-ms-",
  Xl = "-moz-",
  st = "-webkit-",
  rR = "comm",
  ud = "rule",
  qg = "decl",
  T6 = "@import",
  aR = "@keyframes",
  A6 = "@layer",
  iR = Math.abs,
  Vg = String.fromCharCode,
  Hm = Object.assign;
function O6(e, n) {
  return an(e, 0) ^ 45
    ? (((((((n << 2) ^ an(e, 0)) << 2) ^ an(e, 1)) << 2) ^ an(e, 2)) << 2) ^
        an(e, 3)
    : 0;
}
function sR(e) {
  return e.trim();
}
function ya(e, n) {
  return (e = n.exec(e)) ? e[0] : e;
}
function Fe(e, n, a) {
  return e.replace(n, a);
}
function lf(e, n, a) {
  return e.indexOf(n, a);
}
function an(e, n) {
  return e.charCodeAt(n) | 0;
}
function bo(e, n, a) {
  return e.slice(n, a);
}
function Pr(e) {
  return e.length;
}
function oR(e) {
  return e.length;
}
function Il(e, n) {
  return n.push(e), e;
}
function M6(e, n) {
  return e.map(n).join("");
}
function ES(e, n) {
  return e.filter(function (a) {
    return !ya(a, n);
  });
}
var cd = 1,
  So = 1,
  lR = 0,
  ur = 0,
  Qt = 0,
  ko = "";
function fd(e, n, a, i, o, u, f, d) {
  return {
    value: e,
    root: n,
    parent: a,
    type: i,
    props: o,
    children: u,
    line: cd,
    column: So,
    length: f,
    return: "",
    siblings: d,
  };
}
function Xa(e, n) {
  return Hm(
    fd("", null, null, "", null, null, 0, e.siblings),
    e,
    { length: -e.length },
    n
  );
}
function Is(e) {
  for (; e.root; ) e = Xa(e.root, { children: [e] });
  Il(e, e.siblings);
}
function _6() {
  return Qt;
}
function D6() {
  return (
    (Qt = ur > 0 ? an(ko, --ur) : 0), So--, Qt === 10 && ((So = 1), cd--), Qt
  );
}
function br() {
  return (
    (Qt = ur < lR ? an(ko, ur++) : 0), So++, Qt === 10 && ((So = 1), cd++), Qt
  );
}
function Zi() {
  return an(ko, ur);
}
function uf() {
  return ur;
}
function dd(e, n) {
  return bo(ko, e, n);
}
function Pm(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function N6(e) {
  return (cd = So = 1), (lR = Pr((ko = e))), (ur = 0), [];
}
function z6(e) {
  return (ko = ""), e;
}
function Yh(e) {
  return sR(dd(ur - 1, Fm(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function k6(e) {
  for (; (Qt = Zi()) && Qt < 33; ) br();
  return Pm(e) > 2 || Pm(Qt) > 3 ? "" : " ";
}
function B6(e, n) {
  for (
    ;
    --n &&
    br() &&
    !(Qt < 48 || Qt > 102 || (Qt > 57 && Qt < 65) || (Qt > 70 && Qt < 97));

  );
  return dd(e, uf() + (n < 6 && Zi() == 32 && br() == 32));
}
function Fm(e) {
  for (; br(); )
    switch (Qt) {
      case e:
        return ur;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Fm(Qt);
        break;
      case 40:
        e === 41 && Fm(e);
        break;
      case 92:
        br();
        break;
    }
  return ur;
}
function U6(e, n) {
  for (; br() && e + Qt !== 57; ) if (e + Qt === 84 && Zi() === 47) break;
  return "/*" + dd(n, ur - 1) + "*" + Vg(e === 47 ? e : br());
}
function L6(e) {
  for (; !Pm(Zi()); ) br();
  return dd(e, ur);
}
function j6(e) {
  return z6(cf("", null, null, null, [""], (e = N6(e)), 0, [0], e));
}
function cf(e, n, a, i, o, u, f, d, m) {
  for (
    var h = 0,
      g = 0,
      y = f,
      x = 0,
      C = 0,
      b = 0,
      S = 1,
      w = 1,
      O = 1,
      _ = 0,
      T = "",
      D = o,
      M = u,
      $ = i,
      L = T;
    w;

  )
    switch (((b = _), (_ = br()))) {
      case 40:
        if (b != 108 && an(L, y - 1) == 58) {
          lf((L += Fe(Yh(_), "&", "&\f")), "&\f", iR(h ? d[h - 1] : 0)) != -1 &&
            (O = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        L += Yh(_);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        L += k6(b);
        break;
      case 92:
        L += B6(uf() - 1, 7);
        continue;
      case 47:
        switch (Zi()) {
          case 42:
          case 47:
            Il($6(U6(br(), uf()), n, a, m), m);
            break;
          default:
            L += "/";
        }
        break;
      case 123 * S:
        d[h++] = Pr(L) * O;
      case 125 * S:
      case 59:
      case 0:
        switch (_) {
          case 0:
          case 125:
            w = 0;
          case 59 + g:
            O == -1 && (L = Fe(L, /\f/g, "")),
              C > 0 &&
                Pr(L) - y &&
                Il(
                  C > 32
                    ? CS(L + ";", i, a, y - 1, m)
                    : CS(Fe(L, " ", "") + ";", i, a, y - 2, m),
                  m
                );
            break;
          case 59:
            L += ";";
          default:
            if (
              (Il(
                ($ = RS(L, n, a, h, g, o, d, T, (D = []), (M = []), y, u)),
                u
              ),
              _ === 123)
            )
              if (g === 0) cf(L, n, $, $, D, u, y, d, M);
              else
                switch (x === 99 && an(L, 3) === 110 ? 100 : x) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    cf(
                      e,
                      $,
                      $,
                      i && Il(RS(e, $, $, 0, 0, o, d, T, o, (D = []), y, M), M),
                      o,
                      M,
                      y,
                      d,
                      i ? D : M
                    );
                    break;
                  default:
                    cf(L, $, $, $, [""], M, 0, d, M);
                }
        }
        (h = g = C = 0), (S = O = 1), (T = L = ""), (y = f);
        break;
      case 58:
        (y = 1 + Pr(L)), (C = b);
      default:
        if (S < 1) {
          if (_ == 123) --S;
          else if (_ == 125 && S++ == 0 && D6() == 125) continue;
        }
        switch (((L += Vg(_)), _ * S)) {
          case 38:
            O = g > 0 ? 1 : ((L += "\f"), -1);
            break;
          case 44:
            (d[h++] = (Pr(L) - 1) * O), (O = 1);
            break;
          case 64:
            Zi() === 45 && (L += Yh(br())),
              (x = Zi()),
              (g = y = Pr((T = L += L6(uf())))),
              _++;
            break;
          case 45:
            b === 45 && Pr(L) == 2 && (S = 0);
        }
    }
  return u;
}
function RS(e, n, a, i, o, u, f, d, m, h, g, y) {
  for (
    var x = o - 1, C = o === 0 ? u : [""], b = oR(C), S = 0, w = 0, O = 0;
    S < i;
    ++S
  )
    for (var _ = 0, T = bo(e, x + 1, (x = iR((w = f[S])))), D = e; _ < b; ++_)
      (D = sR(w > 0 ? C[_] + " " + T : Fe(T, /&\f/g, C[_]))) && (m[O++] = D);
  return fd(e, n, a, o === 0 ? ud : d, m, h, g, y);
}
function $6(e, n, a, i) {
  return fd(e, n, a, rR, Vg(_6()), bo(e, 2, -2), 0, i);
}
function CS(e, n, a, i, o) {
  return fd(e, n, a, qg, bo(e, 0, i), bo(e, i + 1, -1), i, o);
}
function uR(e, n, a) {
  switch (O6(e, n)) {
    case 5103:
      return st + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return st + e + e;
    case 4789:
      return Xl + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return st + e + Xl + e + Ct + e + e;
    case 5936:
      switch (an(e, n + 11)) {
        case 114:
          return st + e + Ct + Fe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return st + e + Ct + Fe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return st + e + Ct + Fe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return st + e + Ct + e + e;
    case 6165:
      return st + e + Ct + "flex-" + e + e;
    case 5187:
      return (
        st + e + Fe(e, /(\w+).+(:[^]+)/, st + "box-$1$2" + Ct + "flex-$1$2") + e
      );
    case 5443:
      return (
        st +
        e +
        Ct +
        "flex-item-" +
        Fe(e, /flex-|-self/g, "") +
        (ya(e, /flex-|baseline/)
          ? ""
          : Ct + "grid-row-" + Fe(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return (
        st +
        e +
        Ct +
        "flex-line-pack" +
        Fe(e, /align-content|flex-|-self/g, "") +
        e
      );
    case 5548:
      return st + e + Ct + Fe(e, "shrink", "negative") + e;
    case 5292:
      return st + e + Ct + Fe(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        st +
        "box-" +
        Fe(e, "-grow", "") +
        st +
        e +
        Ct +
        Fe(e, "grow", "positive") +
        e
      );
    case 4554:
      return st + Fe(e, /([^-])(transform)/g, "$1" + st + "$2") + e;
    case 6187:
      return (
        Fe(
          Fe(Fe(e, /(zoom-|grab)/, st + "$1"), /(image-set)/, st + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return Fe(e, /(image-set\([^]*)/, st + "$1$`$1");
    case 4968:
      return (
        Fe(
          Fe(e, /(.+:)(flex-)?(.*)/, st + "box-pack:$3" + Ct + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        st +
        e +
        e
      );
    case 4200:
      if (!ya(e, /flex-|baseline/))
        return Ct + "grid-column-align" + bo(e, n) + e;
      break;
    case 2592:
    case 3360:
      return Ct + Fe(e, "template-", "") + e;
    case 4384:
    case 3616:
      return a &&
        a.some(function (i, o) {
          return (n = o), ya(i.props, /grid-\w+-end/);
        })
        ? ~lf(e + (a = a[n].value), "span", 0)
          ? e
          : Ct +
            Fe(e, "-start", "") +
            e +
            Ct +
            "grid-row-span:" +
            (~lf(a, "span", 0) ? ya(a, /\d+/) : +ya(a, /\d+/) - +ya(e, /\d+/)) +
            ";"
        : Ct + Fe(e, "-start", "") + e;
    case 4896:
    case 4128:
      return a &&
        a.some(function (i) {
          return ya(i.props, /grid-\w+-start/);
        })
        ? e
        : Ct + Fe(Fe(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Fe(e, /(.+)-inline(.+)/, st + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Pr(e) - 1 - n > 6)
        switch (an(e, n + 1)) {
          case 109:
            if (an(e, n + 4) !== 45) break;
          case 102:
            return (
              Fe(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  st +
                  "$2-$3$1" +
                  Xl +
                  (an(e, n + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~lf(e, "stretch", 0)
              ? uR(Fe(e, "stretch", "fill-available"), n, a) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return Fe(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (i, o, u, f, d, m, h) {
          return (
            Ct +
            o +
            ":" +
            u +
            h +
            (f ? Ct + o + "-span:" + (d ? m : +m - +u) + h : "") +
            e
          );
        }
      );
    case 4949:
      if (an(e, n + 6) === 121) return Fe(e, ":", ":" + st) + e;
      break;
    case 6444:
      switch (an(e, an(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            Fe(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                st +
                (an(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                st +
                "$2$3$1" +
                Ct +
                "$2box$3"
            ) + e
          );
        case 100:
          return Fe(e, ":", ":" + Ct) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return Fe(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Of(e, n) {
  for (var a = "", i = 0; i < e.length; i++) a += n(e[i], i, e, n) || "";
  return a;
}
function H6(e, n, a, i) {
  switch (e.type) {
    case A6:
      if (e.children.length) break;
    case T6:
    case qg:
      return (e.return = e.return || e.value);
    case rR:
      return "";
    case aR:
      return (e.return = e.value + "{" + Of(e.children, i) + "}");
    case ud:
      if (!Pr((e.value = e.props.join(",")))) return "";
  }
  return Pr((a = Of(e.children, i)))
    ? (e.return = e.value + "{" + a + "}")
    : "";
}
function P6(e) {
  var n = oR(e);
  return function (a, i, o, u) {
    for (var f = "", d = 0; d < n; d++) f += e[d](a, i, o, u) || "";
    return f;
  };
}
function F6(e) {
  return function (n) {
    n.root || ((n = n.return) && e(n));
  };
}
function q6(e, n, a, i) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case qg:
        e.return = uR(e.value, e.length, a);
        return;
      case aR:
        return Of([Xa(e, { value: Fe(e.value, "@", "@" + st) })], i);
      case ud:
        if (e.length)
          return M6((a = e.props), function (o) {
            switch (ya(o, (i = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                Is(Xa(e, { props: [Fe(o, /:(read-\w+)/, ":" + Xl + "$1")] })),
                  Is(Xa(e, { props: [o] })),
                  Hm(e, { props: ES(a, i) });
                break;
              case "::placeholder":
                Is(
                  Xa(e, { props: [Fe(o, /:(plac\w+)/, ":" + st + "input-$1")] })
                ),
                  Is(Xa(e, { props: [Fe(o, /:(plac\w+)/, ":" + Xl + "$1")] })),
                  Is(Xa(e, { props: [Fe(o, /:(plac\w+)/, Ct + "input-$1")] })),
                  Is(Xa(e, { props: [o] })),
                  Hm(e, { props: ES(a, i) });
                break;
            }
            return "";
          });
    }
}
var V6 = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Pn = {},
  xo =
    (typeof process < "u" &&
      Pn !== void 0 &&
      (Pn.REACT_APP_SC_ATTR || Pn.SC_ATTR)) ||
    "data-styled",
  cR = "active",
  fR = "data-styled-version",
  pd = "6.1.15",
  Gg = `/*!sc*/
`,
  Mf = typeof window < "u" && "HTMLElement" in window,
  G6 = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      Pn !== void 0 &&
      Pn.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      Pn.REACT_APP_SC_DISABLE_SPEEDY !== ""
    ? Pn.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
      Pn.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      Pn !== void 0 &&
      Pn.SC_DISABLE_SPEEDY !== void 0 &&
      Pn.SC_DISABLE_SPEEDY !== "" &&
      Pn.SC_DISABLE_SPEEDY !== "false" &&
      Pn.SC_DISABLE_SPEEDY),
  hd = Object.freeze([]),
  Eo = Object.freeze({});
function I6(e, n, a) {
  return (
    a === void 0 && (a = Eo), (e.theme !== a.theme && e.theme) || n || a.theme
  );
}
var dR = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  Y6 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  Q6 = /(^-|-$)/g;
function wS(e) {
  return e.replace(Y6, "-").replace(Q6, "");
}
var K6 = /(a)(d)/gi,
  Qc = 52,
  TS = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function qm(e) {
  var n,
    a = "";
  for (n = Math.abs(e); n > Qc; n = (n / Qc) | 0) a = TS(n % Qc) + a;
  return (TS(n % Qc) + a).replace(K6, "$1-$2");
}
var Qh,
  pR = 5381,
  Ws = function (e, n) {
    for (var a = n.length; a; ) e = (33 * e) ^ n.charCodeAt(--a);
    return e;
  },
  hR = function (e) {
    return Ws(pR, e);
  };
function X6(e) {
  return qm(hR(e) >>> 0);
}
function W6(e) {
  return e.displayName || e.name || "Component";
}
function Kh(e) {
  return typeof e == "string" && !0;
}
var mR = typeof Symbol == "function" && Symbol.for,
  gR = mR ? Symbol.for("react.memo") : 60115,
  Z6 = mR ? Symbol.for("react.forward_ref") : 60112,
  J6 = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  eN = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  yR = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  tN =
    (((Qh = {})[Z6] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (Qh[gR] = yR),
    Qh);
function AS(e) {
  return ("type" in (n = e) && n.type.$$typeof) === gR
    ? yR
    : "$$typeof" in e
    ? tN[e.$$typeof]
    : J6;
  var n;
}
var nN = Object.defineProperty,
  rN = Object.getOwnPropertyNames,
  OS = Object.getOwnPropertySymbols,
  aN = Object.getOwnPropertyDescriptor,
  iN = Object.getPrototypeOf,
  MS = Object.prototype;
function vR(e, n, a) {
  if (typeof n != "string") {
    if (MS) {
      var i = iN(n);
      i && i !== MS && vR(e, i, a);
    }
    var o = rN(n);
    OS && (o = o.concat(OS(n)));
    for (var u = AS(e), f = AS(n), d = 0; d < o.length; ++d) {
      var m = o[d];
      if (!(m in eN || (a && a[m]) || (f && m in f) || (u && m in u))) {
        var h = aN(n, m);
        try {
          nN(e, m, h);
        } catch {}
      }
    }
  }
  return e;
}
function Ro(e) {
  return typeof e == "function";
}
function Ig(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Pi(e, n) {
  return e && n ? "".concat(e, " ").concat(n) : e || n || "";
}
function _S(e, n) {
  if (e.length === 0) return "";
  for (var a = e[0], i = 1; i < e.length; i++) a += e[i];
  return a;
}
function ou(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  );
}
function Vm(e, n, a) {
  if ((a === void 0 && (a = !1), !a && !ou(e) && !Array.isArray(e))) return n;
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++) e[i] = Vm(e[i], n[i]);
  else if (ou(n)) for (var i in n) e[i] = Vm(e[i], n[i]);
  return e;
}
function Yg(e, n) {
  Object.defineProperty(e, "toString", { value: n });
}
function wu(e) {
  for (var n = [], a = 1; a < arguments.length; a++) n[a - 1] = arguments[a];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : "")
  );
}
var sN = (function () {
    function e(n) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = n);
    }
    return (
      (e.prototype.indexOfGroup = function (n) {
        for (var a = 0, i = 0; i < n; i++) a += this.groupSizes[i];
        return a;
      }),
      (e.prototype.insertRules = function (n, a) {
        if (n >= this.groupSizes.length) {
          for (var i = this.groupSizes, o = i.length, u = o; n >= u; )
            if ((u <<= 1) < 0) throw wu(16, "".concat(n));
          (this.groupSizes = new Uint32Array(u)),
            this.groupSizes.set(i),
            (this.length = u);
          for (var f = o; f < u; f++) this.groupSizes[f] = 0;
        }
        for (
          var d = this.indexOfGroup(n + 1), m = ((f = 0), a.length);
          f < m;
          f++
        )
          this.tag.insertRule(d, a[f]) && (this.groupSizes[n]++, d++);
      }),
      (e.prototype.clearGroup = function (n) {
        if (n < this.length) {
          var a = this.groupSizes[n],
            i = this.indexOfGroup(n),
            o = i + a;
          this.groupSizes[n] = 0;
          for (var u = i; u < o; u++) this.tag.deleteRule(i);
        }
      }),
      (e.prototype.getGroup = function (n) {
        var a = "";
        if (n >= this.length || this.groupSizes[n] === 0) return a;
        for (
          var i = this.groupSizes[n],
            o = this.indexOfGroup(n),
            u = o + i,
            f = o;
          f < u;
          f++
        )
          a += "".concat(this.tag.getRule(f)).concat(Gg);
        return a;
      }),
      e
    );
  })(),
  ff = new Map(),
  _f = new Map(),
  df = 1,
  Kc = function (e) {
    if (ff.has(e)) return ff.get(e);
    for (; _f.has(df); ) df++;
    var n = df++;
    return ff.set(e, n), _f.set(n, e), n;
  },
  oN = function (e, n) {
    (df = n + 1), ff.set(e, n), _f.set(n, e);
  },
  lN = "style[".concat(xo, "][").concat(fR, '="').concat(pd, '"]'),
  uN = new RegExp(
    "^".concat(xo, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  cN = function (e, n, a) {
    for (var i, o = a.split(","), u = 0, f = o.length; u < f; u++)
      (i = o[u]) && e.registerName(n, i);
  },
  fN = function (e, n) {
    for (
      var a,
        i = ((a = n.textContent) !== null && a !== void 0 ? a : "").split(Gg),
        o = [],
        u = 0,
        f = i.length;
      u < f;
      u++
    ) {
      var d = i[u].trim();
      if (d) {
        var m = d.match(uN);
        if (m) {
          var h = 0 | parseInt(m[1], 10),
            g = m[2];
          h !== 0 && (oN(g, h), cN(e, g, m[3]), e.getTag().insertRules(h, o)),
            (o.length = 0);
        } else o.push(d);
      }
    }
  },
  DS = function (e) {
    for (
      var n = document.querySelectorAll(lN), a = 0, i = n.length;
      a < i;
      a++
    ) {
      var o = n[a];
      o &&
        o.getAttribute(xo) !== cR &&
        (fN(e, o), o.parentNode && o.parentNode.removeChild(o));
    }
  };
function dN() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var bR = function (e) {
    var n = document.head,
      a = e || n,
      i = document.createElement("style"),
      o = (function (d) {
        var m = Array.from(d.querySelectorAll("style[".concat(xo, "]")));
        return m[m.length - 1];
      })(a),
      u = o !== void 0 ? o.nextSibling : null;
    i.setAttribute(xo, cR), i.setAttribute(fR, pd);
    var f = dN();
    return f && i.setAttribute("nonce", f), a.insertBefore(i, u), i;
  },
  pN = (function () {
    function e(n) {
      (this.element = bR(n)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (a) {
          if (a.sheet) return a.sheet;
          for (var i = document.styleSheets, o = 0, u = i.length; o < u; o++) {
            var f = i[o];
            if (f.ownerNode === a) return f;
          }
          throw wu(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (n, a) {
        try {
          return this.sheet.insertRule(a, n), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (n) {
        this.sheet.deleteRule(n), this.length--;
      }),
      (e.prototype.getRule = function (n) {
        var a = this.sheet.cssRules[n];
        return a && a.cssText ? a.cssText : "";
      }),
      e
    );
  })(),
  hN = (function () {
    function e(n) {
      (this.element = bR(n)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (n, a) {
        if (n <= this.length && n >= 0) {
          var i = document.createTextNode(a);
          return (
            this.element.insertBefore(i, this.nodes[n] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (n) {
        this.element.removeChild(this.nodes[n]), this.length--;
      }),
      (e.prototype.getRule = function (n) {
        return n < this.length ? this.nodes[n].textContent : "";
      }),
      e
    );
  })(),
  mN = (function () {
    function e(n) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (n, a) {
        return (
          n <= this.length && (this.rules.splice(n, 0, a), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (n) {
        this.rules.splice(n, 1), this.length--;
      }),
      (e.prototype.getRule = function (n) {
        return n < this.length ? this.rules[n] : "";
      }),
      e
    );
  })(),
  NS = Mf,
  gN = { isServer: !Mf, useCSSOMInjection: !G6 },
  SR = (function () {
    function e(n, a, i) {
      n === void 0 && (n = Eo), a === void 0 && (a = {});
      var o = this;
      (this.options = zn(zn({}, gN), n)),
        (this.gs = a),
        (this.names = new Map(i)),
        (this.server = !!n.isServer),
        !this.server && Mf && NS && ((NS = !1), DS(this)),
        Yg(this, function () {
          return (function (u) {
            for (
              var f = u.getTag(),
                d = f.length,
                m = "",
                h = function (y) {
                  var x = (function (O) {
                    return _f.get(O);
                  })(y);
                  if (x === void 0) return "continue";
                  var C = u.names.get(x),
                    b = f.getGroup(y);
                  if (C === void 0 || !C.size || b.length === 0)
                    return "continue";
                  var S = ""
                      .concat(xo, ".g")
                      .concat(y, '[id="')
                      .concat(x, '"]'),
                    w = "";
                  C !== void 0 &&
                    C.forEach(function (O) {
                      O.length > 0 && (w += "".concat(O, ","));
                    }),
                    (m += ""
                      .concat(b)
                      .concat(S, '{content:"')
                      .concat(w, '"}')
                      .concat(Gg));
                },
                g = 0;
              g < d;
              g++
            )
              h(g);
            return m;
          })(o);
        });
    }
    return (
      (e.registerId = function (n) {
        return Kc(n);
      }),
      (e.prototype.rehydrate = function () {
        !this.server && Mf && DS(this);
      }),
      (e.prototype.reconstructWithOptions = function (n, a) {
        return (
          a === void 0 && (a = !0),
          new e(
            zn(zn({}, this.options), n),
            this.gs,
            (a && this.names) || void 0
          )
        );
      }),
      (e.prototype.allocateGSInstance = function (n) {
        return (this.gs[n] = (this.gs[n] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((n = (function (a) {
              var i = a.useCSSOMInjection,
                o = a.target;
              return a.isServer ? new mN(o) : i ? new pN(o) : new hN(o);
            })(this.options)),
            new sN(n)))
        );
        var n;
      }),
      (e.prototype.hasNameForId = function (n, a) {
        return this.names.has(n) && this.names.get(n).has(a);
      }),
      (e.prototype.registerName = function (n, a) {
        if ((Kc(n), this.names.has(n))) this.names.get(n).add(a);
        else {
          var i = new Set();
          i.add(a), this.names.set(n, i);
        }
      }),
      (e.prototype.insertRules = function (n, a, i) {
        this.registerName(n, a), this.getTag().insertRules(Kc(n), i);
      }),
      (e.prototype.clearNames = function (n) {
        this.names.has(n) && this.names.get(n).clear();
      }),
      (e.prototype.clearRules = function (n) {
        this.getTag().clearGroup(Kc(n)), this.clearNames(n);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  yN = /&/g,
  vN = /^\s*\/\/.*$/gm;
function xR(e, n) {
  return e.map(function (a) {
    return (
      a.type === "rule" &&
        ((a.value = "".concat(n, " ").concat(a.value)),
        (a.value = a.value.replaceAll(",", ",".concat(n, " "))),
        (a.props = a.props.map(function (i) {
          return "".concat(n, " ").concat(i);
        }))),
      Array.isArray(a.children) &&
        a.type !== "@keyframes" &&
        (a.children = xR(a.children, n)),
      a
    );
  });
}
function bN(e) {
  var n,
    a,
    i,
    o = Eo,
    u = o.options,
    f = u === void 0 ? Eo : u,
    d = o.plugins,
    m = d === void 0 ? hd : d,
    h = function (x, C, b) {
      return b.startsWith(a) && b.endsWith(a) && b.replaceAll(a, "").length > 0
        ? ".".concat(n)
        : x;
    },
    g = m.slice();
  g.push(function (x) {
    x.type === ud &&
      x.value.includes("&") &&
      (x.props[0] = x.props[0].replace(yN, a).replace(i, h));
  }),
    f.prefix && g.push(q6),
    g.push(H6);
  var y = function (x, C, b, S) {
    C === void 0 && (C = ""),
      b === void 0 && (b = ""),
      S === void 0 && (S = "&"),
      (n = S),
      (a = C),
      (i = new RegExp("\\".concat(a, "\\b"), "g"));
    var w = x.replace(vN, ""),
      O = j6(b || C ? "".concat(b, " ").concat(C, " { ").concat(w, " }") : w);
    f.namespace && (O = xR(O, f.namespace));
    var _ = [];
    return (
      Of(
        O,
        P6(
          g.concat(
            F6(function (T) {
              return _.push(T);
            })
          )
        )
      ),
      _
    );
  };
  return (
    (y.hash = m.length
      ? m
          .reduce(function (x, C) {
            return C.name || wu(15), Ws(x, C.name);
          }, pR)
          .toString()
      : ""),
    y
  );
}
var SN = new SR(),
  Gm = bN(),
  ER = Ue.createContext({
    shouldForwardProp: void 0,
    styleSheet: SN,
    stylis: Gm,
  });
ER.Consumer;
Ue.createContext(void 0);
function zS() {
  return E.useContext(ER);
}
var xN = (function () {
    function e(n, a) {
      var i = this;
      (this.inject = function (o, u) {
        u === void 0 && (u = Gm);
        var f = i.name + u.hash;
        o.hasNameForId(i.id, f) ||
          o.insertRules(i.id, f, u(i.rules, f, "@keyframes"));
      }),
        (this.name = n),
        (this.id = "sc-keyframes-".concat(n)),
        (this.rules = a),
        Yg(this, function () {
          throw wu(12, String(i.name));
        });
    }
    return (
      (e.prototype.getName = function (n) {
        return n === void 0 && (n = Gm), this.name + n.hash;
      }),
      e
    );
  })(),
  EN = function (e) {
    return e >= "A" && e <= "Z";
  };
function kS(e) {
  for (var n = "", a = 0; a < e.length; a++) {
    var i = e[a];
    if (a === 1 && i === "-" && e[0] === "-") return e;
    EN(i) ? (n += "-" + i.toLowerCase()) : (n += i);
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var RR = function (e) {
    return e == null || e === !1 || e === "";
  },
  CR = function (e) {
    var n,
      a,
      i = [];
    for (var o in e) {
      var u = e[o];
      e.hasOwnProperty(o) &&
        !RR(u) &&
        ((Array.isArray(u) && u.isCss) || Ro(u)
          ? i.push("".concat(kS(o), ":"), u, ";")
          : ou(u)
          ? i.push.apply(i, Af(Af(["".concat(o, " {")], CR(u), !1), ["}"], !1))
          : i.push(
              ""
                .concat(kS(o), ": ")
                .concat(
                  ((n = o),
                  (a = u) == null || typeof a == "boolean" || a === ""
                    ? ""
                    : typeof a != "number" ||
                      a === 0 ||
                      n in V6 ||
                      n.startsWith("--")
                    ? String(a).trim()
                    : "".concat(a, "px")),
                  ";"
                )
            ));
    }
    return i;
  };
function Ji(e, n, a, i) {
  if (RR(e)) return [];
  if (Ig(e)) return [".".concat(e.styledComponentId)];
  if (Ro(e)) {
    if (!Ro((u = e)) || (u.prototype && u.prototype.isReactComponent) || !n)
      return [e];
    var o = e(n);
    return Ji(o, n, a, i);
  }
  var u;
  return e instanceof xN
    ? a
      ? (e.inject(a, i), [e.getName(i)])
      : [e]
    : ou(e)
    ? CR(e)
    : Array.isArray(e)
    ? Array.prototype.concat.apply(
        hd,
        e.map(function (f) {
          return Ji(f, n, a, i);
        })
      )
    : [e.toString()];
}
function RN(e) {
  for (var n = 0; n < e.length; n += 1) {
    var a = e[n];
    if (Ro(a) && !Ig(a)) return !1;
  }
  return !0;
}
var CN = hR(pd),
  wN = (function () {
    function e(n, a, i) {
      (this.rules = n),
        (this.staticRulesId = ""),
        (this.isStatic = (i === void 0 || i.isStatic) && RN(n)),
        (this.componentId = a),
        (this.baseHash = Ws(CN, a)),
        (this.baseStyle = i),
        SR.registerId(a);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (n, a, i) {
        var o = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(n, a, i)
          : "";
        if (this.isStatic && !i.hash)
          if (
            this.staticRulesId &&
            a.hasNameForId(this.componentId, this.staticRulesId)
          )
            o = Pi(o, this.staticRulesId);
          else {
            var u = _S(Ji(this.rules, n, a, i)),
              f = qm(Ws(this.baseHash, u) >>> 0);
            if (!a.hasNameForId(this.componentId, f)) {
              var d = i(u, ".".concat(f), void 0, this.componentId);
              a.insertRules(this.componentId, f, d);
            }
            (o = Pi(o, f)), (this.staticRulesId = f);
          }
        else {
          for (
            var m = Ws(this.baseHash, i.hash), h = "", g = 0;
            g < this.rules.length;
            g++
          ) {
            var y = this.rules[g];
            if (typeof y == "string") h += y;
            else if (y) {
              var x = _S(Ji(y, n, a, i));
              (m = Ws(m, x + g)), (h += x);
            }
          }
          if (h) {
            var C = qm(m >>> 0);
            a.hasNameForId(this.componentId, C) ||
              a.insertRules(
                this.componentId,
                C,
                i(h, ".".concat(C), void 0, this.componentId)
              ),
              (o = Pi(o, C));
          }
        }
        return o;
      }),
      e
    );
  })(),
  wR = Ue.createContext(void 0);
wR.Consumer;
var Xh = {};
function TN(e, n, a) {
  var i = Ig(e),
    o = e,
    u = !Kh(e),
    f = n.attrs,
    d = f === void 0 ? hd : f,
    m = n.componentId,
    h =
      m === void 0
        ? (function (D, M) {
            var $ = typeof D != "string" ? "sc" : wS(D);
            Xh[$] = (Xh[$] || 0) + 1;
            var L = "".concat($, "-").concat(X6(pd + $ + Xh[$]));
            return M ? "".concat(M, "-").concat(L) : L;
          })(n.displayName, n.parentComponentId)
        : m,
    g = n.displayName,
    y =
      g === void 0
        ? (function (D) {
            return Kh(D) ? "styled.".concat(D) : "Styled(".concat(W6(D), ")");
          })(e)
        : g,
    x =
      n.displayName && n.componentId
        ? "".concat(wS(n.displayName), "-").concat(n.componentId)
        : n.componentId || h,
    C = i && o.attrs ? o.attrs.concat(d).filter(Boolean) : d,
    b = n.shouldForwardProp;
  if (i && o.shouldForwardProp) {
    var S = o.shouldForwardProp;
    if (n.shouldForwardProp) {
      var w = n.shouldForwardProp;
      b = function (D, M) {
        return S(D, M) && w(D, M);
      };
    } else b = S;
  }
  var O = new wN(a, x, i ? o.componentStyle : void 0);
  function _(D, M) {
    return (function ($, L, K) {
      var P = $.attrs,
        R = $.componentStyle,
        V = $.defaultProps,
        Q = $.foldedComponentIds,
        J = $.styledComponentId,
        le = $.target,
        ne = Ue.useContext(wR),
        F = zS(),
        ie = $.shouldForwardProp || F.shouldForwardProp,
        fe = I6(L, ne, V) || Eo,
        ue = (function (be, xe, $e) {
          for (
            var Te,
              Ae = zn(zn({}, xe), { className: void 0, theme: $e }),
              Se = 0;
            Se < be.length;
            Se += 1
          ) {
            var ke = Ro((Te = be[Se])) ? Te(Ae) : Te;
            for (var _e in ke)
              Ae[_e] =
                _e === "className"
                  ? Pi(Ae[_e], ke[_e])
                  : _e === "style"
                  ? zn(zn({}, Ae[_e]), ke[_e])
                  : ke[_e];
          }
          return (
            xe.className && (Ae.className = Pi(Ae.className, xe.className)), Ae
          );
        })(P, L, fe),
        k = ue.as || le,
        ee = {};
      for (var me in ue)
        ue[me] === void 0 ||
          me[0] === "$" ||
          me === "as" ||
          (me === "theme" && ue.theme === fe) ||
          (me === "forwardedAs"
            ? (ee.as = ue.forwardedAs)
            : (ie && !ie(me, k)) || (ee[me] = ue[me]));
      var he = (function (be, xe) {
          var $e = zS(),
            Te = be.generateAndInjectStyles(xe, $e.styleSheet, $e.stylis);
          return Te;
        })(R, ue),
        ce = Pi(Q, J);
      return (
        he && (ce += " " + he),
        ue.className && (ce += " " + ue.className),
        (ee[Kh(k) && !dR.has(k) ? "class" : "className"] = ce),
        K && (ee.ref = K),
        E.createElement(k, ee)
      );
    })(T, D, M);
  }
  _.displayName = y;
  var T = Ue.forwardRef(_);
  return (
    (T.attrs = C),
    (T.componentStyle = O),
    (T.displayName = y),
    (T.shouldForwardProp = b),
    (T.foldedComponentIds = i
      ? Pi(o.foldedComponentIds, o.styledComponentId)
      : ""),
    (T.styledComponentId = x),
    (T.target = i ? o.target : e),
    Object.defineProperty(T, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (D) {
        this._foldedDefaultProps = i
          ? (function (M) {
              for (var $ = [], L = 1; L < arguments.length; L++)
                $[L - 1] = arguments[L];
              for (var K = 0, P = $; K < P.length; K++) Vm(M, P[K], !0);
              return M;
            })({}, o.defaultProps, D)
          : D;
      },
    }),
    Yg(T, function () {
      return ".".concat(T.styledComponentId);
    }),
    u &&
      vR(T, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    T
  );
}
function BS(e, n) {
  for (var a = [e[0]], i = 0, o = n.length; i < o; i += 1)
    a.push(n[i], e[i + 1]);
  return a;
}
var US = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function AN(e) {
  for (var n = [], a = 1; a < arguments.length; a++) n[a - 1] = arguments[a];
  if (Ro(e) || ou(e)) return US(Ji(BS(hd, Af([e], n, !0))));
  var i = e;
  return n.length === 0 && i.length === 1 && typeof i[0] == "string"
    ? Ji(i)
    : US(Ji(BS(i, n)));
}
function Im(e, n, a) {
  if ((a === void 0 && (a = Eo), !n)) throw wu(1, n);
  var i = function (o) {
    for (var u = [], f = 1; f < arguments.length; f++) u[f - 1] = arguments[f];
    return e(n, a, AN.apply(void 0, Af([o], u, !1)));
  };
  return (
    (i.attrs = function (o) {
      return Im(
        e,
        n,
        zn(zn({}, a), {
          attrs: Array.prototype.concat(a.attrs, o).filter(Boolean),
        })
      );
    }),
    (i.withConfig = function (o) {
      return Im(e, n, zn(zn({}, a), o));
    }),
    i
  );
}
var TR = function (e) {
    return Im(TN, e);
  },
  St = TR;
dR.forEach(function (e) {
  St[e] = TR(e);
});
const ON = Cu(
    U.jsx("path", { d: "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" }),
    "Send"
  ),
  MN = Cu(U.jsx("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" }), "Add"),
  _N = St.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-right: 10px;
  display: flex;
  gap: 10px;
`,
  DN = (e) => {
    const { addMessage: n } = e,
      [a, i] = E.useState(),
      o = (d) => {
        i(d.target.value);
      },
      u = () => {
        i(""), a != null && a != null && a !== "" && n(a);
      },
      f = (d) => {
        d.key === "Enter" && (d.preventDefault(), u());
      };
    return U.jsxs(_N, {
      children: [
        U.jsx(vo, {
          variant: "contained",
          sx: {
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            minWidth: "50px",
          },
          children: U.jsx(MN, {}),
        }),
        U.jsx(ui, {
          id: "outlined-basic",
          variant: "outlined",
          value: a,
          fullWidth: !0,
          onChange: o,
          onKeyDown: f,
        }),
        U.jsx(vo, {
          sx: { height: "45px" },
          variant: "contained",
          endIcon: U.jsx(ON, {}),
          onClick: u,
          children: "Send",
        }),
      ],
    });
  },
  NN = St.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: ${({ isSent: e }) => (e ? "flex-end" : "flex-start")};
`,
  zN = St.div`
  max-width: 60%;
  padding: 12px 16px;
  border-radius: 18px;
  font-size: 14px;
  line-height: 1.4;
  color: ${({ isSent: e }) => (e ? "#fff" : "#000")};
  background: ${({ isSent: e }) => (e ? "#007AFF" : "#E5E5EA")};
  align-self: ${({ isSent: e }) => (e ? "flex-end" : "flex-start")};
  margin: 4px 8px;
  position: relative;

  ${({ isSent: e }) =>
    e
      ? `
      border-bottom-right-radius: 4px;
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        right: -6px;
        width: 12px;
        height: 12px;
        background: #007AFF;
        clip-path: polygon(0 0, 100% 100%, 0 100%);
      }
  `
      : `
      border-bottom-left-radius: 4px;
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: -6px;
        width: 12px;
        height: 12px;
        background: #E5E5EA;
        clip-path: polygon(100% 0, 0 100%, 100% 100%);
      }
  `}
`,
  kN = (e) => {
    const { isSent: n, message: a } = e;
    return U.jsxs(NN, {
      isSent: n,
      children: [
        !n &&
          U.jsx(su, {
            alt: "yooo",
            sx: { width: 40, height: 40, marginLeft: "10px" },
            src: "https://pub-1de51ae1e68144d78f7c582e1dda3ab1.r2.dev/clh8n0i2200wsmi08eyobfu35/7ee08a5b-8158-464b-b5da-d183e0e64831.webp",
          }),
        U.jsx(zN, { isSent: e.isSent, children: a }),
        n &&
          U.jsx(su, {
            alt: "yooo",
            sx: { width: 40, height: 40, marginRight: "10px" },
            src: "https://pub-1de51ae1e68144d78f7c582e1dda3ab1.r2.dev/clh8n0i2200wsmi08eyobfu35/7ee08a5b-8158-464b-b5da-d183e0e64831.webp",
          }),
      ],
    });
  };
var AR = ((e) => ((e.TEXT = "TEXT"), e))(AR || {});
const BN = St.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 15px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
`,
  UN = (e) => {
    const { recepient: n } = e;
    return U.jsxs(BN, {
      children: [
        U.jsx(su, {
          sx: { marginLeft: "10px", height: "36px", width: "36px" },
          alt: n.username,
          src: "https://pub-1de51ae1e68144d78f7c582e1dda3ab1.r2.dev/clh8n0i2200wsmi08eyobfu35/7ee08a5b-8158-464b-b5da-d183e0e64831.webp",
        }),
        U.jsx("p", { children: n.username }),
      ],
    });
  },
  LN = "https://universe-alb-2081594021.eu-west-2.elb.amazonaws.com/ws",
  jN = (e) => {
    const { setMessages: n } = e,
      { authenticated: a } = _o(),
      i = E.useRef(null),
      o = E.useRef(!0);
    return (
      E.useEffect(() => {
        if (((o.current = !0), !a)) {
          console.warn("Not authenticated, skipping WebSocket connection.");
          return;
        }
        if (!i.current) {
          const f = new WebSocket(LN);
          (i.current = f),
            (f.onopen = () => {
              console.log("WebSocket connected ✅");
            }),
            (f.onclose = () => {
              console.log("WebSocket closed ❌");
            }),
            (f.onerror = (d) => {
              console.error("WebSocket error:"), console.log(d);
            });
        }
        return (
          (i.current.onmessage = null),
          (i.current.onmessage = (f) => {
            try {
              const d = JSON.parse(f.data);
              console.log("Message received:", d), n((m) => [...m, d]);
            } catch {
              console.warn("Failed to parse message:", f.data);
            }
          }),
          () => {
            i.current &&
              ((i.current.onmessage = null),
              i.current.close(),
              (i.current = null));
          }
        );
      }, [a]),
      {
        sendMessage: (f) => {
          i.current &&
            i.current.readyState === WebSocket.OPEN &&
            i.current.send(JSON.stringify(f));
        },
      }
    );
  },
  $N = St.div`
  height: 100%;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`,
  HN = St.div`
  flex-grow: 1;
  display: flex;
  min-height: 100%;
  max-height: 100%;
  flex-direction: column;
`,
  PN = (e) => {
    const { chat: n, setMessages: a, messages: i } = e,
      { sendMessage: o } = jN({ setMessages: a }),
      u = E.useRef(null);
    E.useEffect(() => {
      var h;
      (h = u.current) == null || h.scrollIntoView({ behavior: "smooth" });
    }, [i]);
    const { user: f } = _o(),
      d = (h) => (f ? (f == null ? void 0 : f.id) === h : !1),
      m = (h) => {
        if (f) {
          const g = {
            type: AR.TEXT,
            from: f.id,
            to: n.recepient.id,
            content: h,
          };
          o(g), a((y) => [...y, g]);
        }
      };
    return U.jsxs(HN, {
      children: [
        U.jsx(UN, { recepient: e.chat.recepient }),
        U.jsxs($N, {
          children: [
            i.map((h, g) =>
              U.jsx(kN, { isSent: d(h.from), message: h.content }, h.Id ?? g)
            ),
            U.jsx("div", { ref: u }),
          ],
        }),
        U.jsx(DN, { addMessage: m }),
      ],
    });
  },
  FN = (e) => {
    const n = new Date(),
      a = new Date(e),
      i = (n.getTime() - a.getTime()) / 1e3,
      o = 60,
      u = o * 60,
      f = u * 24,
      d = f * 7;
    return i > o && i < u
      ? `${Math.ceil(i / o)}m`
      : i > u && i < f
      ? `${Math.ceil(i / u)}h`
      : i > f && i < d
      ? `${Math.ceil(i / f)}d`
      : `${Math.ceil(i / d)}w`;
  },
  qN = (e) => {
    const n = [];
    return (
      e.forEach((a) => {
        n.push({
          type: a.messageType,
          from: a.senderId,
          to: a.recieverId,
          content: a.content,
          Id: a.messageId,
        });
      }),
      n
    );
  },
  VN = St.div`
  height: 75px;
  display: flex;
  align-items: center;

  padding-left: 15px;
  gap: 10px;

  @media (max-width: 500px) {
    flex-direction: column;
    height: auto;
    align-items: flex-start;
  }

  background-color: ${(e) => (e.hover ? "rgba(236, 236, 236, 0.75)" : "")};
  cursor: ${(e) => (e.hover ? "pointer" : "")};
`,
  GN = St.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`,
  IN = St.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,
  YN = St.p`
  font-weight: 400;
  font-size: medium;
  margin: 0;
`,
  QN = St.p`
  font-size: small;
  color: gray;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,
  KN = (e) => {
    const [n, a] = E.useState(!1),
      { preview: i, onClick: o } = e,
      u = () => {
        o(i.recepient);
      };
    return U.jsxs(VN, {
      onClick: u,
      hover: n,
      onMouseOver: () => {
        a(!0);
      },
      onMouseLeave: () => {
        a(!1);
      },
      children: [
        U.jsx(GN, {
          children: U.jsx(su, {
            alt: i.recepient.username,
            src: "https://pub-1de51ae1e68144d78f7c582e1dda3ab1.r2.dev/clh8n0i2200wsmi08eyobfu35/7ee08a5b-8158-464b-b5da-d183e0e64831.webp",
          }),
        }),
        U.jsxs(IN, {
          children: [
            U.jsx(YN, { children: i.recepient.username }),
            U.jsxs(QN, {
              children: [
                i.recentMessage.message,
                " •",
                " ",
                FN(i.recentMessage.timestamp),
                " ",
              ],
            }),
          ],
        }),
      ],
    });
  },
  XN = St.div`
  display: flex;
  flex-grow: 1;
`,
  WN = (e) => {
    const { onSearchIntention: n, searchValue: a, onChange: i } = e;
    return U.jsx(XN, {
      children: U.jsx(ui, {
        value: a,
        onChange: i,
        onClick: n,
        id: "outlined-search",
        label: "Search UniVerse",
        type: "search",
        fullWidth: !0,
      }),
    });
  },
  ZN = Cu(
    U.jsx("path", {
      d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z",
    }),
    "ArrowBack"
  ),
  JN = St.div`
  :hover {
    background-color: rgb(236, 236, 236, 0.75);
    border-radius: 20px;
    cursor: pointer;
  }
`,
  ez = (e) => {
    const { onClick: n } = e;
    return U.jsx(JN, { onClick: n, children: U.jsx(ZN, {}) });
  },
  tz = St.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  border-radius: 10px;
  // I know this is a weird way to do it, but :hover isn't working
  background-color: ${(e) => (e.hover ? "rgba(236, 236, 236, 0.75)" : "")};
  cursor: ${(e) => (e.hover ? "pointer" : "")};
`,
  nz = (e) => {
    const { data: n, onClick: a } = e,
      [i, o] = E.useState(!1);
    return U.jsxs(tz, {
      hover: i,
      onMouseOver: () => {
        o(!0);
      },
      onMouseLeave: () => {
        o(!1);
      },
      onClick: () => a(n),
      children: [
        U.jsx(su, {
          sx: { marginLeft: "10px", height: "36px", width: "36px" },
          alt: n.username,
          src: "https://pub-1de51ae1e68144d78f7c582e1dda3ab1.r2.dev/clh8n0i2200wsmi08eyobfu35/7ee08a5b-8158-464b-b5da-d183e0e64831.webp",
        }),
        U.jsx("p", { children: n.username }),
      ],
    });
  };
function rz(e, n, a) {
  var i = this,
    o = E.useRef(null),
    u = E.useRef(0),
    f = E.useRef(null),
    d = E.useRef([]),
    m = E.useRef(),
    h = E.useRef(),
    g = E.useRef(e),
    y = E.useRef(!0);
  g.current = e;
  var x = typeof window < "u",
    C = !n && n !== 0 && x;
  if (typeof e != "function") throw new TypeError("Expected a function");
  n = +n || 0;
  var b = !!(a = a || {}).leading,
    S = !("trailing" in a) || !!a.trailing,
    w = "maxWait" in a,
    O = "debounceOnServer" in a && !!a.debounceOnServer,
    _ = w ? Math.max(+a.maxWait || 0, n) : null;
  E.useEffect(function () {
    return (
      (y.current = !0),
      function () {
        y.current = !1;
      }
    );
  }, []);
  var T = E.useMemo(
    function () {
      var D = function (R) {
          var V = d.current,
            Q = m.current;
          return (
            (d.current = m.current = null),
            (u.current = R),
            (h.current = g.current.apply(Q, V))
          );
        },
        M = function (R, V) {
          C && cancelAnimationFrame(f.current),
            (f.current = C ? requestAnimationFrame(R) : setTimeout(R, V));
        },
        $ = function (R) {
          if (!y.current) return !1;
          var V = R - o.current;
          return !o.current || V >= n || V < 0 || (w && R - u.current >= _);
        },
        L = function (R) {
          return (
            (f.current = null),
            S && d.current ? D(R) : ((d.current = m.current = null), h.current)
          );
        },
        K = function R() {
          var V = Date.now();
          if ($(V)) return L(V);
          if (y.current) {
            var Q = n - (V - o.current),
              J = w ? Math.min(Q, _ - (V - u.current)) : Q;
            M(R, J);
          }
        },
        P = function () {
          if (x || O) {
            var R = Date.now(),
              V = $(R);
            if (
              ((d.current = [].slice.call(arguments)),
              (m.current = i),
              (o.current = R),
              V)
            ) {
              if (!f.current && y.current)
                return (
                  (u.current = o.current), M(K, n), b ? D(o.current) : h.current
                );
              if (w) return M(K, n), D(o.current);
            }
            return f.current || M(K, n), h.current;
          }
        };
      return (
        (P.cancel = function () {
          f.current &&
            (C ? cancelAnimationFrame(f.current) : clearTimeout(f.current)),
            (u.current = 0),
            (d.current = o.current = m.current = f.current = null);
        }),
        (P.isPending = function () {
          return !!f.current;
        }),
        (P.flush = function () {
          return f.current ? L(Date.now()) : h.current;
        }),
        P
      );
    },
    [b, w, n, _, S, C, x, O]
  );
  return T;
}
function az(e, n) {
  return e === n;
}
function iz(e, n, a) {
  var i = az,
    o = E.useRef(e),
    u = E.useState({})[1],
    f = rz(
      E.useCallback(
        function (m) {
          (o.current = m), u({});
        },
        [u]
      ),
      n,
      a
    ),
    d = E.useRef(e);
  return i(d.current, e) || (f(e), (d.current = e)), [o.current, f];
}
class Df {}
un(Df, "ChatRecepient", (n) =>
  Xs({ url: b1.searchUsers(), method: "get", params: { q: n } })
),
  un(Df, "getChatHistory", (n) =>
    Xs({ url: b1.getChatHistory(n), method: "get" })
  );
class Nf {}
un(Nf, "ChatRecepient", async (n) => await Df.ChatRecepient(n)),
  un(Nf, "getChatHistory", async (n) => await Df.getChatHistory(n));
const sz = St.div`
  padding-top: 21px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
`,
  oz = St.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
`,
  lz = St.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: 10px;
`,
  uz = "SEARCH_QUERY_KEY",
  cz = (e) => {
    const {
        onBackButtonPress: n,
        activeSearch: a,
        onSearchIntention: i,
        onResultSelected: o,
      } = e,
      [u, f] = E.useState(""),
      [d] = iz(u, 500),
      { data: m, isPending: h } = og({
        queryKey: [uz, d],
        queryFn: () => Nf.ChatRecepient(u),
        enabled: !!d,
      }),
      g = (x) => {
        f(x.target.value);
      },
      y = () => {
        n(), f("");
      };
    return U.jsxs(sz, {
      children: [
        U.jsxs(oz, {
          children: [
            a && U.jsx(ez, { onClick: y }),
            U.jsx(WN, { onSearchIntention: i, onChange: g, searchValue: u }),
          ],
        }),
        a &&
          U.jsxs(lz, {
            children: [
              h && U.jsx(Bg, {}),
              !h &&
                m &&
                m.map((x) => U.jsx(nz, { data: x, onClick: o }, x.username)),
            ],
          }),
      ],
    });
  },
  fz = St.div`
  width: 30%;
  min-width: 250px;
  max-width: 400px;
  height: calc(100vh - 64px);
  overflow-y: auto;
  border-right: 1px solid lightgray;

  @media (max-width: 768px) {
    width: 100%;
    height: 40vh;
    max-height: 40vh;
  }
`,
  dz = "CHAT_HISTORY_QUERY_KEY",
  pz = (e) => {
    const { chatItems: n, setActiveChat: a, setLoading: i, setMessages: o } = e,
      [u, f] = E.useState(!1),
      [d, m] = E.useState(null),
      { data: h, isPending: g } = og({
        queryKey: [dz, d == null ? void 0 : d.id],
        queryFn: () => (d ? Nf.getChatHistory(d.id) : Promise.resolve([])),
        enabled: !!d,
      });
    E.useEffect(() => {
      i(!0);
    }, [g]),
      E.useEffect(() => {
        d &&
          h &&
          (a({
            recepient: {
              username: d.username,
              profilePictureUrl: d.profilePictureUrl,
              id: d.id,
            },
          }),
          o(qN(h)));
      }, [d, h]);
    const y = () => {
        f(!1);
      },
      x = () => {
        f(!0);
      },
      C = (S) => {
        f(!1), b(S);
      },
      b = (S) => {
        m(S);
      };
    return U.jsxs(fz, {
      children: [
        U.jsx(cz, {
          onSearchIntention: x,
          onBackButtonPress: y,
          activeSearch: u,
          onResultSelected: C,
        }),
        !u &&
          n.map((S) =>
            U.jsx(KN, { onClick: b, preview: S }, S.recentMessage.message)
          ),
      ],
    });
  },
  hz = St.div`
  display: flex;
  width: 100%;
  max-height: calc(100vh - 64px);
  overflow-y: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,
  mz = [
    {
      recepient: {
        username: "john_doe",
        profilePictureUrl: "https://example.com/profiles/john_doe.jpg",
        id: 1,
      },
      recentMessage: {
        message: "Hey, how are you?",
        timestamp: "2025-02-16T14:30:00Z",
      },
    },
  ],
  gz = () => {
    const [e, n] = E.useState({
        recepient: { username: "", profilePictureUrl: "", id: 1 },
      }),
      [a, i] = E.useState([]),
      [o, u] = E.useState(!1);
    return (
      o && console.log(),
      U.jsxs(hz, {
        children: [
          U.jsx(pz, {
            setMessages: i,
            chatItems: mz,
            setActiveChat: n,
            setLoading: u,
          }),
          U.jsx(PN, { chat: e, setActiveChat: n, messages: a, setMessages: i }),
        ],
      })
    );
  },
  yz = () => lg({ mutationFn: (e) => li.login(e) }),
  vz = St.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  min-height: calc(100vh - 64px);
  background-color: #f4f6f8;
`,
  bz = St.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 30px;
  gap: 10px;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`,
  Sz = St.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
`,
  xz = () => {
    const { mutate: e } = yz(),
      { refreshAuth: n } = _o(),
      a = pu(),
      [i, o] = E.useState(""),
      [u, f] = E.useState(""),
      [d, m] = E.useState(!1),
      [h, g] = E.useState(),
      y = async (b) => {
        b.preventDefault(),
          e(
            { email: i, password: u },
            {
              onSuccess: async () => {
                await n(), a("/chat");
              },
              onError: () => {
                m(!0), g("Invalid username or password");
              },
            }
          );
      },
      x = (b) => {
        m(!1), g(null), o(b.target.value);
      },
      C = (b) => {
        m(!1), g(null), f(b.target.value);
      };
    return U.jsx(vz, {
      children: U.jsxs(bz, {
        onSubmit: y,
        children: [
          U.jsx(Sz, { children: "Login" }),
          U.jsx(ui, {
            id: "email",
            type: "email",
            label: "Email",
            variant: "outlined",
            onChange: x,
            error: d,
            helperText: h,
          }),
          U.jsx(ui, {
            id: "password",
            label: "Password",
            variant: "outlined",
            type: "password",
            onChange: C,
            error: d,
            helperText: h,
          }),
          U.jsx(vo, {
            variant: "contained",
            type: "submit",
            fullWidth: !0,
            sx: { marginTop: "15px", padding: "10px" },
            children: "Login",
          }),
          U.jsx(ng, { to: "/register", children: "Register?" }),
        ],
      }),
    });
  },
  Ez = (e) => {
    const { children: n } = e,
      { authenticated: a, loading: i } = _o();
    return i
      ? U.jsx("h1", { children: "Loading..." })
      : a
      ? n
      : U.jsx(px, { to: "/login" });
  };
var Tu = (e) => e.type === "checkbox",
  Fi = (e) => e instanceof Date,
  Rn = (e) => e == null;
const OR = (e) => typeof e == "object";
var $t = (e) => !Rn(e) && !Array.isArray(e) && OR(e) && !Fi(e),
  MR = (e) =>
    $t(e) && e.target ? (Tu(e.target) ? e.target.checked : e.target.value) : e,
  Rz = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  _R = (e, n) => e.has(Rz(n)),
  Cz = (e) => {
    const n = e.constructor && e.constructor.prototype;
    return $t(n) && n.hasOwnProperty("isPrototypeOf");
  },
  Qg =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function Mn(e) {
  let n;
  const a = Array.isArray(e),
    i = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date) n = new Date(e);
  else if (e instanceof Set) n = new Set(e);
  else if (!(Qg && (e instanceof Blob || i)) && (a || $t(e)))
    if (((n = a ? [] : {}), !a && !Cz(e))) n = e;
    else for (const o in e) e.hasOwnProperty(o) && (n[o] = Mn(e[o]));
  else return e;
  return n;
}
var md = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  jt = (e) => e === void 0,
  ye = (e, n, a) => {
    if (!n || !$t(e)) return a;
    const i = md(n.split(/[,[\].]+?/)).reduce((o, u) => (Rn(o) ? o : o[u]), e);
    return jt(i) || i === e ? (jt(e[n]) ? a : e[n]) : i;
  },
  sr = (e) => typeof e == "boolean",
  Kg = (e) => /^\w*$/.test(e),
  DR = (e) => md(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
  yt = (e, n, a) => {
    let i = -1;
    const o = Kg(n) ? [n] : DR(n),
      u = o.length,
      f = u - 1;
    for (; ++i < u; ) {
      const d = o[i];
      let m = a;
      if (i !== f) {
        const h = e[d];
        m = $t(h) || Array.isArray(h) ? h : isNaN(+o[i + 1]) ? {} : [];
      }
      if (d === "__proto__" || d === "constructor" || d === "prototype") return;
      (e[d] = m), (e = e[d]);
    }
    return e;
  };
const zf = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  vr = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  ma = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  },
  wz = Ue.createContext(null),
  Xg = () => Ue.useContext(wz);
var NR = (e, n, a, i = !0) => {
    const o = { defaultValues: n._defaultValues };
    for (const u in e)
      Object.defineProperty(o, u, {
        get: () => {
          const f = u;
          return (
            n._proxyFormState[f] !== vr.all &&
              (n._proxyFormState[f] = !i || vr.all),
            a && (a[f] = !0),
            e[f]
          );
        },
      });
    return o;
  },
  Nn = (e) => $t(e) && !Object.keys(e).length,
  zR = (e, n, a, i) => {
    a(e);
    const { name: o, ...u } = e;
    return (
      Nn(u) ||
      Object.keys(u).length >= Object.keys(n).length ||
      Object.keys(u).find((f) => n[f] === (!i || vr.all))
    );
  },
  Wl = (e) => (Array.isArray(e) ? e : [e]),
  kR = (e, n, a) =>
    !e ||
    !n ||
    e === n ||
    Wl(e).some((i) => i && (a ? i === n : i.startsWith(n) || n.startsWith(i)));
function Wg(e) {
  const n = Ue.useRef(e);
  (n.current = e),
    Ue.useEffect(() => {
      const a =
        !e.disabled &&
        n.current.subject &&
        n.current.subject.subscribe({ next: n.current.next });
      return () => {
        a && a.unsubscribe();
      };
    }, [e.disabled]);
}
function Tz(e) {
  const n = Xg(),
    { control: a = n.control, disabled: i, name: o, exact: u } = e || {},
    [f, d] = Ue.useState(a._formState),
    m = Ue.useRef(!0),
    h = Ue.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    }),
    g = Ue.useRef(o);
  return (
    (g.current = o),
    Wg({
      disabled: i,
      next: (y) =>
        m.current &&
        kR(g.current, y.name, u) &&
        zR(y, h.current, a._updateFormState) &&
        d({ ...a._formState, ...y }),
      subject: a._subjects.state,
    }),
    Ue.useEffect(
      () => (
        (m.current = !0),
        h.current.isValid && a._updateValid(!0),
        () => {
          m.current = !1;
        }
      ),
      [a]
    ),
    Ue.useMemo(() => NR(f, a, h.current, !1), [f, a])
  );
}
var Gr = (e) => typeof e == "string",
  BR = (e, n, a, i, o) =>
    Gr(e)
      ? (i && n.watch.add(e), ye(a, e, o))
      : Array.isArray(e)
      ? e.map((u) => (i && n.watch.add(u), ye(a, u)))
      : (i && (n.watchAll = !0), a);
function Az(e) {
  const n = Xg(),
    {
      control: a = n.control,
      name: i,
      defaultValue: o,
      disabled: u,
      exact: f,
    } = e || {},
    d = Ue.useRef(i);
  (d.current = i),
    Wg({
      disabled: u,
      subject: a._subjects.values,
      next: (g) => {
        kR(d.current, g.name, f) &&
          h(Mn(BR(d.current, a._names, g.values || a._formValues, !1, o)));
      },
    });
  const [m, h] = Ue.useState(a._getWatch(i, o));
  return Ue.useEffect(() => a._removeUnmounted()), m;
}
function Oz(e) {
  const n = Xg(),
    { name: a, disabled: i, control: o = n.control, shouldUnregister: u } = e,
    f = _R(o._names.array, a),
    d = Az({
      control: o,
      name: a,
      defaultValue: ye(
        o._formValues,
        a,
        ye(o._defaultValues, a, e.defaultValue)
      ),
      exact: !0,
    }),
    m = Tz({ control: o, name: a, exact: !0 }),
    h = Ue.useRef(
      o.register(a, {
        ...e.rules,
        value: d,
        ...(sr(e.disabled) ? { disabled: e.disabled } : {}),
      })
    ),
    g = Ue.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!ye(m.errors, a) },
            isDirty: { enumerable: !0, get: () => !!ye(m.dirtyFields, a) },
            isTouched: { enumerable: !0, get: () => !!ye(m.touchedFields, a) },
            isValidating: {
              enumerable: !0,
              get: () => !!ye(m.validatingFields, a),
            },
            error: { enumerable: !0, get: () => ye(m.errors, a) },
          }
        ),
      [m, a]
    ),
    y = Ue.useMemo(
      () => ({
        name: a,
        value: d,
        ...(sr(i) || m.disabled ? { disabled: m.disabled || i } : {}),
        onChange: (x) =>
          h.current.onChange({
            target: { value: MR(x), name: a },
            type: zf.CHANGE,
          }),
        onBlur: () =>
          h.current.onBlur({
            target: { value: ye(o._formValues, a), name: a },
            type: zf.BLUR,
          }),
        ref: (x) => {
          const C = ye(o._fields, a);
          C &&
            x &&
            (C._f.ref = {
              focus: () => x.focus(),
              select: () => x.select(),
              setCustomValidity: (b) => x.setCustomValidity(b),
              reportValidity: () => x.reportValidity(),
            });
        },
      }),
      [a, o._formValues, i, m.disabled, d, o._fields]
    );
  return (
    Ue.useEffect(() => {
      const x = o._options.shouldUnregister || u,
        C = (b, S) => {
          const w = ye(o._fields, b);
          w && w._f && (w._f.mount = S);
        };
      if ((C(a, !0), x)) {
        const b = Mn(ye(o._options.defaultValues, a));
        yt(o._defaultValues, a, b),
          jt(ye(o._formValues, a)) && yt(o._formValues, a, b);
      }
      return (
        !f && o.register(a),
        () => {
          (f ? x && !o._state.action : x) ? o.unregister(a) : C(a, !1);
        }
      );
    }, [a, o, f, u]),
    Ue.useEffect(() => {
      o._updateDisabledField({ disabled: i, fields: o._fields, name: a });
    }, [i, a, o]),
    Ue.useMemo(() => ({ field: y, formState: m, fieldState: g }), [y, m, g])
  );
}
const Xc = (e) => e.render(Oz(e));
var Mz = (e, n, a, i, o) =>
    n
      ? {
          ...a[e],
          types: { ...(a[e] && a[e].types ? a[e].types : {}), [i]: o || !0 },
        }
      : {},
  LS = (e) => ({
    isOnSubmit: !e || e === vr.onSubmit,
    isOnBlur: e === vr.onBlur,
    isOnChange: e === vr.onChange,
    isOnAll: e === vr.all,
    isOnTouch: e === vr.onTouched,
  }),
  jS = (e, n, a) =>
    !a &&
    (n.watchAll ||
      n.watch.has(e) ||
      [...n.watch].some(
        (i) => e.startsWith(i) && /^\.\w+/.test(e.slice(i.length))
      ));
const Zl = (e, n, a, i) => {
  for (const o of a || Object.keys(e)) {
    const u = ye(e, o);
    if (u) {
      const { _f: f, ...d } = u;
      if (f) {
        if (f.refs && f.refs[0] && n(f.refs[0], o) && !i) return !0;
        if (f.ref && n(f.ref, f.name) && !i) return !0;
        if (Zl(d, n)) break;
      } else if ($t(d) && Zl(d, n)) break;
    }
  }
};
var _z = (e, n, a) => {
    const i = Wl(ye(e, a));
    return yt(i, "root", n[a]), yt(e, a, i), e;
  },
  Zg = (e) => e.type === "file",
  Vr = (e) => typeof e == "function",
  kf = (e) => {
    if (!Qg) return !1;
    const n = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (n && n.defaultView ? n.defaultView.HTMLElement : HTMLElement)
    );
  },
  pf = (e) => Gr(e),
  Jg = (e) => e.type === "radio",
  Bf = (e) => e instanceof RegExp;
const $S = { value: !1, isValid: !1 },
  HS = { value: !0, isValid: !0 };
var UR = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const n = e
        .filter((a) => a && a.checked && !a.disabled)
        .map((a) => a.value);
      return { value: n, isValid: !!n.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !jt(e[0].attributes.value)
        ? jt(e[0].value) || e[0].value === ""
          ? HS
          : { value: e[0].value, isValid: !0 }
        : HS
      : $S;
  }
  return $S;
};
const PS = { isValid: !1, value: null };
var LR = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (n, a) =>
          a && a.checked && !a.disabled ? { isValid: !0, value: a.value } : n,
        PS
      )
    : PS;
function FS(e, n, a = "validate") {
  if (pf(e) || (Array.isArray(e) && e.every(pf)) || (sr(e) && !e))
    return { type: a, message: pf(e) ? e : "", ref: n };
}
var Ys = (e) => ($t(e) && !Bf(e) ? e : { value: e, message: "" }),
  qS = async (e, n, a, i, o, u) => {
    const {
        ref: f,
        refs: d,
        required: m,
        maxLength: h,
        minLength: g,
        min: y,
        max: x,
        pattern: C,
        validate: b,
        name: S,
        valueAsNumber: w,
        mount: O,
      } = e._f,
      _ = ye(a, S);
    if (!O || n.has(S)) return {};
    const T = d ? d[0] : f,
      D = (Q) => {
        o &&
          T.reportValidity &&
          (T.setCustomValidity(sr(Q) ? "" : Q || ""), T.reportValidity());
      },
      M = {},
      $ = Jg(f),
      L = Tu(f),
      K = $ || L,
      P =
        ((w || Zg(f)) && jt(f.value) && jt(_)) ||
        (kf(f) && f.value === "") ||
        _ === "" ||
        (Array.isArray(_) && !_.length),
      R = Mz.bind(null, S, i, M),
      V = (Q, J, le, ne = ma.maxLength, F = ma.minLength) => {
        const ie = Q ? J : le;
        M[S] = { type: Q ? ne : F, message: ie, ref: f, ...R(Q ? ne : F, ie) };
      };
    if (
      u
        ? !Array.isArray(_) || !_.length
        : m &&
          ((!K && (P || Rn(_))) ||
            (sr(_) && !_) ||
            (L && !UR(d).isValid) ||
            ($ && !LR(d).isValid))
    ) {
      const { value: Q, message: J } = pf(m)
        ? { value: !!m, message: m }
        : Ys(m);
      if (
        Q &&
        ((M[S] = {
          type: ma.required,
          message: J,
          ref: T,
          ...R(ma.required, J),
        }),
        !i)
      )
        return D(J), M;
    }
    if (!P && (!Rn(y) || !Rn(x))) {
      let Q, J;
      const le = Ys(x),
        ne = Ys(y);
      if (!Rn(_) && !isNaN(_)) {
        const F = f.valueAsNumber || (_ && +_);
        Rn(le.value) || (Q = F > le.value), Rn(ne.value) || (J = F < ne.value);
      } else {
        const F = f.valueAsDate || new Date(_),
          ie = (k) => new Date(new Date().toDateString() + " " + k),
          fe = f.type == "time",
          ue = f.type == "week";
        Gr(le.value) &&
          _ &&
          (Q = fe
            ? ie(_) > ie(le.value)
            : ue
            ? _ > le.value
            : F > new Date(le.value)),
          Gr(ne.value) &&
            _ &&
            (J = fe
              ? ie(_) < ie(ne.value)
              : ue
              ? _ < ne.value
              : F < new Date(ne.value));
      }
      if ((Q || J) && (V(!!Q, le.message, ne.message, ma.max, ma.min), !i))
        return D(M[S].message), M;
    }
    if ((h || g) && !P && (Gr(_) || (u && Array.isArray(_)))) {
      const Q = Ys(h),
        J = Ys(g),
        le = !Rn(Q.value) && _.length > +Q.value,
        ne = !Rn(J.value) && _.length < +J.value;
      if ((le || ne) && (V(le, Q.message, J.message), !i))
        return D(M[S].message), M;
    }
    if (C && !P && Gr(_)) {
      const { value: Q, message: J } = Ys(C);
      if (
        Bf(Q) &&
        !_.match(Q) &&
        ((M[S] = { type: ma.pattern, message: J, ref: f, ...R(ma.pattern, J) }),
        !i)
      )
        return D(J), M;
    }
    if (b) {
      if (Vr(b)) {
        const Q = await b(_, a),
          J = FS(Q, T);
        if (J && ((M[S] = { ...J, ...R(ma.validate, J.message) }), !i))
          return D(J.message), M;
      } else if ($t(b)) {
        let Q = {};
        for (const J in b) {
          if (!Nn(Q) && !i) break;
          const le = FS(await b[J](_, a), T, J);
          le &&
            ((Q = { ...le, ...R(J, le.message) }),
            D(le.message),
            i && (M[S] = Q));
        }
        if (!Nn(Q) && ((M[S] = { ref: T, ...Q }), !i)) return M;
      }
    }
    return D(!0), M;
  };
function Dz(e, n) {
  const a = n.slice(0, -1).length;
  let i = 0;
  for (; i < a; ) e = jt(e) ? i++ : e[n[i++]];
  return e;
}
function Nz(e) {
  for (const n in e) if (e.hasOwnProperty(n) && !jt(e[n])) return !1;
  return !0;
}
function Wt(e, n) {
  const a = Array.isArray(n) ? n : Kg(n) ? [n] : DR(n),
    i = a.length === 1 ? e : Dz(e, a),
    o = a.length - 1,
    u = a[o];
  return (
    i && delete i[u],
    o !== 0 &&
      (($t(i) && Nn(i)) || (Array.isArray(i) && Nz(i))) &&
      Wt(e, a.slice(0, -1)),
    e
  );
}
var Wh = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (o) => {
        for (const u of e) u.next && u.next(o);
      },
      subscribe: (o) => (
        e.push(o),
        {
          unsubscribe: () => {
            e = e.filter((u) => u !== o);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  },
  Ym = (e) => Rn(e) || !OR(e);
function Wa(e, n) {
  if (Ym(e) || Ym(n)) return e === n;
  if (Fi(e) && Fi(n)) return e.getTime() === n.getTime();
  const a = Object.keys(e),
    i = Object.keys(n);
  if (a.length !== i.length) return !1;
  for (const o of a) {
    const u = e[o];
    if (!i.includes(o)) return !1;
    if (o !== "ref") {
      const f = n[o];
      if (
        (Fi(u) && Fi(f)) ||
        ($t(u) && $t(f)) ||
        (Array.isArray(u) && Array.isArray(f))
          ? !Wa(u, f)
          : u !== f
      )
        return !1;
    }
  }
  return !0;
}
var jR = (e) => e.type === "select-multiple",
  zz = (e) => Jg(e) || Tu(e),
  Zh = (e) => kf(e) && e.isConnected,
  $R = (e) => {
    for (const n in e) if (Vr(e[n])) return !0;
    return !1;
  };
function Uf(e, n = {}) {
  const a = Array.isArray(e);
  if ($t(e) || a)
    for (const i in e)
      Array.isArray(e[i]) || ($t(e[i]) && !$R(e[i]))
        ? ((n[i] = Array.isArray(e[i]) ? [] : {}), Uf(e[i], n[i]))
        : Rn(e[i]) || (n[i] = !0);
  return n;
}
function HR(e, n, a) {
  const i = Array.isArray(e);
  if ($t(e) || i)
    for (const o in e)
      Array.isArray(e[o]) || ($t(e[o]) && !$R(e[o]))
        ? jt(n) || Ym(a[o])
          ? (a[o] = Array.isArray(e[o]) ? Uf(e[o], []) : { ...Uf(e[o]) })
          : HR(e[o], Rn(n) ? {} : n[o], a[o])
        : (a[o] = !Wa(e[o], n[o]));
  return a;
}
var Hl = (e, n) => HR(e, n, Uf(n)),
  PR = (e, { valueAsNumber: n, valueAsDate: a, setValueAs: i }) =>
    jt(e)
      ? e
      : n
      ? e === ""
        ? NaN
        : e && +e
      : a && Gr(e)
      ? new Date(e)
      : i
      ? i(e)
      : e;
function Jh(e) {
  const n = e.ref;
  return Zg(n)
    ? n.files
    : Jg(n)
    ? LR(e.refs).value
    : jR(n)
    ? [...n.selectedOptions].map(({ value: a }) => a)
    : Tu(n)
    ? UR(e.refs).value
    : PR(jt(n.value) ? e.ref.value : n.value, e);
}
var kz = (e, n, a, i) => {
    const o = {};
    for (const u of e) {
      const f = ye(n, u);
      f && yt(o, u, f._f);
    }
    return {
      criteriaMode: a,
      names: [...e],
      fields: o,
      shouldUseNativeValidation: i,
    };
  },
  Pl = (e) =>
    jt(e)
      ? e
      : Bf(e)
      ? e.source
      : $t(e)
      ? Bf(e.value)
        ? e.value.source
        : e.value
      : e;
const VS = "AsyncFunction";
var Bz = (e) =>
    !!e &&
    !!e.validate &&
    !!(
      (Vr(e.validate) && e.validate.constructor.name === VS) ||
      ($t(e.validate) &&
        Object.values(e.validate).find((n) => n.constructor.name === VS))
    ),
  Uz = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function GS(e, n, a) {
  const i = ye(e, a);
  if (i || Kg(a)) return { error: i, name: a };
  const o = a.split(".");
  for (; o.length; ) {
    const u = o.join("."),
      f = ye(n, u),
      d = ye(e, u);
    if (f && !Array.isArray(f) && a !== u) return { name: a };
    if (d && d.type) return { name: u, error: d };
    o.pop();
  }
  return { name: a };
}
var Lz = (e, n, a, i, o) =>
    o.isOnAll
      ? !1
      : !a && o.isOnTouch
      ? !(n || e)
      : (a ? i.isOnBlur : o.isOnBlur)
      ? !e
      : (a ? i.isOnChange : o.isOnChange)
      ? e
      : !0,
  jz = (e, n) => !md(ye(e, n)).length && Wt(e, n);
const $z = {
  mode: vr.onSubmit,
  reValidateMode: vr.onChange,
  shouldFocusError: !0,
};
function Hz(e = {}) {
  let n = { ...$z, ...e },
    a = {
      submitCount: 0,
      isDirty: !1,
      isLoading: Vr(n.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: n.errors || {},
      disabled: n.disabled || !1,
    },
    i = {},
    o =
      $t(n.defaultValues) || $t(n.values)
        ? Mn(n.defaultValues || n.values) || {}
        : {},
    u = n.shouldUnregister ? {} : Mn(o),
    f = { action: !1, mount: !1, watch: !1 },
    d = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    m,
    h = 0;
  const g = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    y = { values: Wh(), array: Wh(), state: Wh() },
    x = LS(n.mode),
    C = LS(n.reValidateMode),
    b = n.criteriaMode === vr.all,
    S = (z) => (G) => {
      clearTimeout(h), (h = setTimeout(z, G));
    },
    w = async (z) => {
      if (!n.disabled && (g.isValid || z)) {
        const G = n.resolver ? Nn((await K()).errors) : await R(i, !0);
        G !== a.isValid && y.state.next({ isValid: G });
      }
    },
    O = (z, G) => {
      !n.disabled &&
        (g.isValidating || g.validatingFields) &&
        ((z || Array.from(d.mount)).forEach((X) => {
          X && (G ? yt(a.validatingFields, X, G) : Wt(a.validatingFields, X));
        }),
        y.state.next({
          validatingFields: a.validatingFields,
          isValidating: !Nn(a.validatingFields),
        }));
    },
    _ = (z, G = [], X, de, Z = !0, pe = !0) => {
      if (de && X && !n.disabled) {
        if (((f.action = !0), pe && Array.isArray(ye(i, z)))) {
          const ge = X(ye(i, z), de.argA, de.argB);
          Z && yt(i, z, ge);
        }
        if (pe && Array.isArray(ye(a.errors, z))) {
          const ge = X(ye(a.errors, z), de.argA, de.argB);
          Z && yt(a.errors, z, ge), jz(a.errors, z);
        }
        if (g.touchedFields && pe && Array.isArray(ye(a.touchedFields, z))) {
          const ge = X(ye(a.touchedFields, z), de.argA, de.argB);
          Z && yt(a.touchedFields, z, ge);
        }
        g.dirtyFields && (a.dirtyFields = Hl(o, u)),
          y.state.next({
            name: z,
            isDirty: Q(z, G),
            dirtyFields: a.dirtyFields,
            errors: a.errors,
            isValid: a.isValid,
          });
      } else yt(u, z, G);
    },
    T = (z, G) => {
      yt(a.errors, z, G), y.state.next({ errors: a.errors });
    },
    D = (z) => {
      (a.errors = z), y.state.next({ errors: a.errors, isValid: !1 });
    },
    M = (z, G, X, de) => {
      const Z = ye(i, z);
      if (Z) {
        const pe = ye(u, z, jt(X) ? ye(o, z) : X);
        jt(pe) || (de && de.defaultChecked) || G
          ? yt(u, z, G ? pe : Jh(Z._f))
          : ne(z, pe),
          f.mount && w();
      }
    },
    $ = (z, G, X, de, Z) => {
      let pe = !1,
        ge = !1;
      const ze = { name: z };
      if (!n.disabled) {
        const dt = !!(ye(i, z) && ye(i, z)._f && ye(i, z)._f.disabled);
        if (!X || de) {
          g.isDirty &&
            ((ge = a.isDirty),
            (a.isDirty = ze.isDirty = Q()),
            (pe = ge !== ze.isDirty));
          const pt = dt || Wa(ye(o, z), G);
          (ge = !!(!dt && ye(a.dirtyFields, z))),
            pt || dt ? Wt(a.dirtyFields, z) : yt(a.dirtyFields, z, !0),
            (ze.dirtyFields = a.dirtyFields),
            (pe = pe || (g.dirtyFields && ge !== !pt));
        }
        if (X) {
          const pt = ye(a.touchedFields, z);
          pt ||
            (yt(a.touchedFields, z, X),
            (ze.touchedFields = a.touchedFields),
            (pe = pe || (g.touchedFields && pt !== X)));
        }
        pe && Z && y.state.next(ze);
      }
      return pe ? ze : {};
    },
    L = (z, G, X, de) => {
      const Z = ye(a.errors, z),
        pe = g.isValid && sr(G) && a.isValid !== G;
      if (
        (n.delayError && X
          ? ((m = S(() => T(z, X))), m(n.delayError))
          : (clearTimeout(h),
            (m = null),
            X ? yt(a.errors, z, X) : Wt(a.errors, z)),
        (X ? !Wa(Z, X) : Z) || !Nn(de) || pe)
      ) {
        const ge = {
          ...de,
          ...(pe && sr(G) ? { isValid: G } : {}),
          errors: a.errors,
          name: z,
        };
        (a = { ...a, ...ge }), y.state.next(ge);
      }
    },
    K = async (z) => {
      O(z, !0);
      const G = await n.resolver(
        u,
        n.context,
        kz(z || d.mount, i, n.criteriaMode, n.shouldUseNativeValidation)
      );
      return O(z), G;
    },
    P = async (z) => {
      const { errors: G } = await K(z);
      if (z)
        for (const X of z) {
          const de = ye(G, X);
          de ? yt(a.errors, X, de) : Wt(a.errors, X);
        }
      else a.errors = G;
      return G;
    },
    R = async (z, G, X = { valid: !0 }) => {
      for (const de in z) {
        const Z = z[de];
        if (Z) {
          const { _f: pe, ...ge } = Z;
          if (pe) {
            const ze = d.array.has(pe.name),
              dt = Z._f && Bz(Z._f);
            dt && g.validatingFields && O([de], !0);
            const pt = await qS(
              Z,
              d.disabled,
              u,
              b,
              n.shouldUseNativeValidation && !G,
              ze
            );
            if (
              (dt && g.validatingFields && O([de]),
              pt[pe.name] && ((X.valid = !1), G))
            )
              break;
            !G &&
              (ye(pt, pe.name)
                ? ze
                  ? _z(a.errors, pt, pe.name)
                  : yt(a.errors, pe.name, pt[pe.name])
                : Wt(a.errors, pe.name));
          }
          !Nn(ge) && (await R(ge, G, X));
        }
      }
      return X.valid;
    },
    V = () => {
      for (const z of d.unMount) {
        const G = ye(i, z);
        G &&
          (G._f.refs ? G._f.refs.every((X) => !Zh(X)) : !Zh(G._f.ref)) &&
          xe(z);
      }
      d.unMount = new Set();
    },
    Q = (z, G) => !n.disabled && (z && G && yt(u, z, G), !Wa(ee(), o)),
    J = (z, G, X) =>
      BR(z, d, { ...(f.mount ? u : jt(G) ? o : Gr(z) ? { [z]: G } : G) }, X, G),
    le = (z) =>
      md(ye(f.mount ? u : o, z, n.shouldUnregister ? ye(o, z, []) : [])),
    ne = (z, G, X = {}) => {
      const de = ye(i, z);
      let Z = G;
      if (de) {
        const pe = de._f;
        pe &&
          (!pe.disabled && yt(u, z, PR(G, pe)),
          (Z = kf(pe.ref) && Rn(G) ? "" : G),
          jR(pe.ref)
            ? [...pe.ref.options].forEach(
                (ge) => (ge.selected = Z.includes(ge.value))
              )
            : pe.refs
            ? Tu(pe.ref)
              ? pe.refs.length > 1
                ? pe.refs.forEach(
                    (ge) =>
                      (!ge.defaultChecked || !ge.disabled) &&
                      (ge.checked = Array.isArray(Z)
                        ? !!Z.find((ze) => ze === ge.value)
                        : Z === ge.value)
                  )
                : pe.refs[0] && (pe.refs[0].checked = !!Z)
              : pe.refs.forEach((ge) => (ge.checked = ge.value === Z))
            : Zg(pe.ref)
            ? (pe.ref.value = "")
            : ((pe.ref.value = Z),
              pe.ref.type || y.values.next({ name: z, values: { ...u } })));
      }
      (X.shouldDirty || X.shouldTouch) &&
        $(z, Z, X.shouldTouch, X.shouldDirty, !0),
        X.shouldValidate && k(z);
    },
    F = (z, G, X) => {
      for (const de in G) {
        const Z = G[de],
          pe = `${z}.${de}`,
          ge = ye(i, pe);
        (d.array.has(z) || $t(Z) || (ge && !ge._f)) && !Fi(Z)
          ? F(pe, Z, X)
          : ne(pe, Z, X);
      }
    },
    ie = (z, G, X = {}) => {
      const de = ye(i, z),
        Z = d.array.has(z),
        pe = Mn(G);
      yt(u, z, pe),
        Z
          ? (y.array.next({ name: z, values: { ...u } }),
            (g.isDirty || g.dirtyFields) &&
              X.shouldDirty &&
              y.state.next({
                name: z,
                dirtyFields: Hl(o, u),
                isDirty: Q(z, pe),
              }))
          : de && !de._f && !Rn(pe)
          ? F(z, pe, X)
          : ne(z, pe, X),
        jS(z, d) && y.state.next({ ...a }),
        y.values.next({ name: f.mount ? z : void 0, values: { ...u } });
    },
    fe = async (z) => {
      f.mount = !0;
      const G = z.target;
      let X = G.name,
        de = !0;
      const Z = ye(i, X),
        pe = () => (G.type ? Jh(Z._f) : MR(z)),
        ge = (ze) => {
          de =
            Number.isNaN(ze) ||
            (Fi(ze) && isNaN(ze.getTime())) ||
            Wa(ze, ye(u, X, ze));
        };
      if (Z) {
        let ze, dt;
        const pt = pe(),
          qt = z.type === zf.BLUR || z.type === zf.FOCUS_OUT,
          wr =
            (!Uz(Z._f) && !n.resolver && !ye(a.errors, X) && !Z._f.deps) ||
            Lz(qt, ye(a.touchedFields, X), a.isSubmitted, C, x),
          Cn = jS(X, d, qt);
        yt(u, X, pt),
          qt
            ? (Z._f.onBlur && Z._f.onBlur(z), m && m(0))
            : Z._f.onChange && Z._f.onChange(z);
        const at = $(X, pt, qt, !1),
          Tr = !Nn(at) || Cn;
        if (
          (!qt && y.values.next({ name: X, type: z.type, values: { ...u } }),
          wr)
        )
          return (
            g.isValid && (n.mode === "onBlur" && qt ? w() : qt || w()),
            Tr && y.state.next({ name: X, ...(Cn ? {} : at) })
          );
        if ((!qt && Cn && y.state.next({ ...a }), n.resolver)) {
          const { errors: wn } = await K([X]);
          if ((ge(pt), de)) {
            const Jt = GS(a.errors, i, X),
              Oe = GS(wn, i, Jt.name || X);
            (ze = Oe.error), (X = Oe.name), (dt = Nn(wn));
          }
        } else
          O([X], !0),
            (ze = (await qS(Z, d.disabled, u, b, n.shouldUseNativeValidation))[
              X
            ]),
            O([X]),
            ge(pt),
            de && (ze ? (dt = !1) : g.isValid && (dt = await R(i, !0)));
        de && (Z._f.deps && k(Z._f.deps), L(X, dt, ze, at));
      }
    },
    ue = (z, G) => {
      if (ye(a.errors, G) && z.focus) return z.focus(), 1;
    },
    k = async (z, G = {}) => {
      let X, de;
      const Z = Wl(z);
      if (n.resolver) {
        const pe = await P(jt(z) ? z : Z);
        (X = Nn(pe)), (de = z ? !Z.some((ge) => ye(pe, ge)) : X);
      } else
        z
          ? ((de = (
              await Promise.all(
                Z.map(async (pe) => {
                  const ge = ye(i, pe);
                  return await R(ge && ge._f ? { [pe]: ge } : ge);
                })
              )
            ).every(Boolean)),
            !(!de && !a.isValid) && w())
          : (de = X = await R(i));
      return (
        y.state.next({
          ...(!Gr(z) || (g.isValid && X !== a.isValid) ? {} : { name: z }),
          ...(n.resolver || !z ? { isValid: X } : {}),
          errors: a.errors,
        }),
        G.shouldFocus && !de && Zl(i, ue, z ? Z : d.mount),
        de
      );
    },
    ee = (z) => {
      const G = { ...(f.mount ? u : o) };
      return jt(z) ? G : Gr(z) ? ye(G, z) : z.map((X) => ye(G, X));
    },
    me = (z, G) => ({
      invalid: !!ye((G || a).errors, z),
      isDirty: !!ye((G || a).dirtyFields, z),
      error: ye((G || a).errors, z),
      isValidating: !!ye(a.validatingFields, z),
      isTouched: !!ye((G || a).touchedFields, z),
    }),
    he = (z) => {
      z && Wl(z).forEach((G) => Wt(a.errors, G)),
        y.state.next({ errors: z ? a.errors : {} });
    },
    ce = (z, G, X) => {
      const de = (ye(i, z, { _f: {} })._f || {}).ref,
        Z = ye(a.errors, z) || {},
        { ref: pe, message: ge, type: ze, ...dt } = Z;
      yt(a.errors, z, { ...dt, ...G, ref: de }),
        y.state.next({ name: z, errors: a.errors, isValid: !1 }),
        X && X.shouldFocus && de && de.focus && de.focus();
    },
    be = (z, G) =>
      Vr(z)
        ? y.values.subscribe({ next: (X) => z(J(void 0, G), X) })
        : J(z, G, !0),
    xe = (z, G = {}) => {
      for (const X of z ? Wl(z) : d.mount)
        d.mount.delete(X),
          d.array.delete(X),
          G.keepValue || (Wt(i, X), Wt(u, X)),
          !G.keepError && Wt(a.errors, X),
          !G.keepDirty && Wt(a.dirtyFields, X),
          !G.keepTouched && Wt(a.touchedFields, X),
          !G.keepIsValidating && Wt(a.validatingFields, X),
          !n.shouldUnregister && !G.keepDefaultValue && Wt(o, X);
      y.values.next({ values: { ...u } }),
        y.state.next({ ...a, ...(G.keepDirty ? { isDirty: Q() } : {}) }),
        !G.keepIsValid && w();
    },
    $e = ({ disabled: z, name: G, field: X, fields: de }) => {
      ((sr(z) && f.mount) || z || d.disabled.has(G)) &&
        (z ? d.disabled.add(G) : d.disabled.delete(G),
        $(G, Jh(X ? X._f : ye(de, G)._f), !1, !1, !0));
    },
    Te = (z, G = {}) => {
      let X = ye(i, z);
      const de = sr(G.disabled) || sr(n.disabled);
      return (
        yt(i, z, {
          ...(X || {}),
          _f: {
            ...(X && X._f ? X._f : { ref: { name: z } }),
            name: z,
            mount: !0,
            ...G,
          },
        }),
        d.mount.add(z),
        X
          ? $e({
              field: X,
              disabled: sr(G.disabled) ? G.disabled : n.disabled,
              name: z,
            })
          : M(z, !0, G.value),
        {
          ...(de ? { disabled: G.disabled || n.disabled } : {}),
          ...(n.progressive
            ? {
                required: !!G.required,
                min: Pl(G.min),
                max: Pl(G.max),
                minLength: Pl(G.minLength),
                maxLength: Pl(G.maxLength),
                pattern: Pl(G.pattern),
              }
            : {}),
          name: z,
          onChange: fe,
          onBlur: fe,
          ref: (Z) => {
            if (Z) {
              Te(z, G), (X = ye(i, z));
              const pe =
                  (jt(Z.value) &&
                    Z.querySelectorAll &&
                    Z.querySelectorAll("input,select,textarea")[0]) ||
                  Z,
                ge = zz(pe),
                ze = X._f.refs || [];
              if (ge ? ze.find((dt) => dt === pe) : pe === X._f.ref) return;
              yt(i, z, {
                _f: {
                  ...X._f,
                  ...(ge
                    ? {
                        refs: [
                          ...ze.filter(Zh),
                          pe,
                          ...(Array.isArray(ye(o, z)) ? [{}] : []),
                        ],
                        ref: { type: pe.type, name: z },
                      }
                    : { ref: pe }),
                },
              }),
                M(z, !1, void 0, pe);
            } else
              (X = ye(i, z, {})),
                X._f && (X._f.mount = !1),
                (n.shouldUnregister || G.shouldUnregister) &&
                  !(_R(d.array, z) && f.action) &&
                  d.unMount.add(z);
          },
        }
      );
    },
    Ae = () => n.shouldFocusError && Zl(i, ue, d.mount),
    Se = (z) => {
      sr(z) &&
        (y.state.next({ disabled: z }),
        Zl(
          i,
          (G, X) => {
            const de = ye(i, X);
            de &&
              ((G.disabled = de._f.disabled || z),
              Array.isArray(de._f.refs) &&
                de._f.refs.forEach((Z) => {
                  Z.disabled = de._f.disabled || z;
                }));
          },
          0,
          !1
        ));
    },
    ke = (z, G) => async (X) => {
      let de;
      X && (X.preventDefault && X.preventDefault(), X.persist && X.persist());
      let Z = Mn(u);
      if (d.disabled.size) for (const pe of d.disabled) yt(Z, pe, void 0);
      if ((y.state.next({ isSubmitting: !0 }), n.resolver)) {
        const { errors: pe, values: ge } = await K();
        (a.errors = pe), (Z = ge);
      } else await R(i);
      if ((Wt(a.errors, "root"), Nn(a.errors))) {
        y.state.next({ errors: {} });
        try {
          await z(Z, X);
        } catch (pe) {
          de = pe;
        }
      } else G && (await G({ ...a.errors }, X)), Ae(), setTimeout(Ae);
      if (
        (y.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Nn(a.errors) && !de,
          submitCount: a.submitCount + 1,
          errors: a.errors,
        }),
        de)
      )
        throw de;
    },
    _e = (z, G = {}) => {
      ye(i, z) &&
        (jt(G.defaultValue)
          ? ie(z, Mn(ye(o, z)))
          : (ie(z, G.defaultValue), yt(o, z, Mn(G.defaultValue))),
        G.keepTouched || Wt(a.touchedFields, z),
        G.keepDirty ||
          (Wt(a.dirtyFields, z),
          (a.isDirty = G.defaultValue ? Q(z, Mn(ye(o, z))) : Q())),
        G.keepError || (Wt(a.errors, z), g.isValid && w()),
        y.state.next({ ...a }));
    },
    We = (z, G = {}) => {
      const X = z ? Mn(z) : o,
        de = Mn(X),
        Z = Nn(z),
        pe = Z ? o : de;
      if ((G.keepDefaultValues || (o = X), !G.keepValues)) {
        if (G.keepDirtyValues) {
          const ge = new Set([...d.mount, ...Object.keys(Hl(o, u))]);
          for (const ze of Array.from(ge))
            ye(a.dirtyFields, ze) ? yt(pe, ze, ye(u, ze)) : ie(ze, ye(pe, ze));
        } else {
          if (Qg && jt(z))
            for (const ge of d.mount) {
              const ze = ye(i, ge);
              if (ze && ze._f) {
                const dt = Array.isArray(ze._f.refs)
                  ? ze._f.refs[0]
                  : ze._f.ref;
                if (kf(dt)) {
                  const pt = dt.closest("form");
                  if (pt) {
                    pt.reset();
                    break;
                  }
                }
              }
            }
          i = {};
        }
        (u = n.shouldUnregister ? (G.keepDefaultValues ? Mn(o) : {}) : Mn(pe)),
          y.array.next({ values: { ...pe } }),
          y.values.next({ values: { ...pe } });
      }
      (d = {
        mount: G.keepDirtyValues ? d.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (f.mount = !g.isValid || !!G.keepIsValid || !!G.keepDirtyValues),
        (f.watch = !!n.shouldUnregister),
        y.state.next({
          submitCount: G.keepSubmitCount ? a.submitCount : 0,
          isDirty: Z
            ? !1
            : G.keepDirty
            ? a.isDirty
            : !!(G.keepDefaultValues && !Wa(z, o)),
          isSubmitted: G.keepIsSubmitted ? a.isSubmitted : !1,
          dirtyFields: Z
            ? {}
            : G.keepDirtyValues
            ? G.keepDefaultValues && u
              ? Hl(o, u)
              : a.dirtyFields
            : G.keepDefaultValues && z
            ? Hl(o, z)
            : G.keepDirty
            ? a.dirtyFields
            : {},
          touchedFields: G.keepTouched ? a.touchedFields : {},
          errors: G.keepErrors ? a.errors : {},
          isSubmitSuccessful: G.keepIsSubmitSuccessful
            ? a.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    Le = (z, G) => We(Vr(z) ? z(u) : z, G);
  return {
    control: {
      register: Te,
      unregister: xe,
      getFieldState: me,
      handleSubmit: ke,
      setError: ce,
      _executeSchema: K,
      _getWatch: J,
      _getDirty: Q,
      _updateValid: w,
      _removeUnmounted: V,
      _updateFieldArray: _,
      _updateDisabledField: $e,
      _getFieldArray: le,
      _reset: We,
      _resetDefaultValues: () =>
        Vr(n.defaultValues) &&
        n.defaultValues().then((z) => {
          Le(z, n.resetOptions), y.state.next({ isLoading: !1 });
        }),
      _updateFormState: (z) => {
        a = { ...a, ...z };
      },
      _disableForm: Se,
      _subjects: y,
      _proxyFormState: g,
      _setErrors: D,
      get _fields() {
        return i;
      },
      get _formValues() {
        return u;
      },
      get _state() {
        return f;
      },
      set _state(z) {
        f = z;
      },
      get _defaultValues() {
        return o;
      },
      get _names() {
        return d;
      },
      set _names(z) {
        d = z;
      },
      get _formState() {
        return a;
      },
      set _formState(z) {
        a = z;
      },
      get _options() {
        return n;
      },
      set _options(z) {
        n = { ...n, ...z };
      },
    },
    trigger: k,
    register: Te,
    handleSubmit: ke,
    watch: be,
    setValue: ie,
    getValues: ee,
    reset: Le,
    resetField: _e,
    clearErrors: he,
    unregister: xe,
    setError: ce,
    setFocus: (z, G = {}) => {
      const X = ye(i, z),
        de = X && X._f;
      if (de) {
        const Z = de.refs ? de.refs[0] : de.ref;
        Z.focus && (Z.focus(), G.shouldSelect && Vr(Z.select) && Z.select());
      }
    },
    getFieldState: me,
  };
}
function Pz(e = {}) {
  const n = Ue.useRef(void 0),
    a = Ue.useRef(void 0),
    [i, o] = Ue.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: Vr(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: Vr(e.defaultValues) ? void 0 : e.defaultValues,
    });
  n.current || (n.current = { ...Hz(e), formState: i });
  const u = n.current.control;
  return (
    (u._options = e),
    Wg({
      subject: u._subjects.state,
      next: (f) => {
        zR(f, u._proxyFormState, u._updateFormState, !0) &&
          o({ ...u._formState });
      },
    }),
    Ue.useEffect(() => u._disableForm(e.disabled), [u, e.disabled]),
    Ue.useEffect(() => {
      if (u._proxyFormState.isDirty) {
        const f = u._getDirty();
        f !== i.isDirty && u._subjects.state.next({ isDirty: f });
      }
    }, [u, i.isDirty]),
    Ue.useEffect(() => {
      e.values && !Wa(e.values, a.current)
        ? (u._reset(e.values, u._options.resetOptions),
          (a.current = e.values),
          o((f) => ({ ...f })))
        : u._resetDefaultValues();
    }, [e.values, u]),
    Ue.useEffect(() => {
      e.errors && u._setErrors(e.errors);
    }, [e.errors, u]),
    Ue.useEffect(() => {
      u._state.mount || (u._updateValid(), (u._state.mount = !0)),
        u._state.watch &&
          ((u._state.watch = !1), u._subjects.state.next({ ...u._formState })),
        u._removeUnmounted();
    }),
    Ue.useEffect(() => {
      e.shouldUnregister && u._subjects.values.next({ values: u._getWatch() });
    }, [e.shouldUnregister, u]),
    (n.current.formState = NR(i, u)),
    n.current
  );
}
const Fz = () => lg({ mutationFn: (e) => li.signUp(e) }),
  qz = St.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  min-height: calc(100vh - 64px);
  background-color: #f4f6f8;
`,
  Vz = St.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 30px;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`,
  Gz = St.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
`,
  Iz = () => {
    const { authenticated: e } = _o(),
      { mutate: n } = Fz(),
      a = pu();
    E.useEffect(() => {
      e && a("/");
    }, [e]);
    const {
        handleSubmit: i,
        watch: o,
        control: u,
        formState: { errors: f },
      } = Pz(),
      d = async (g) => {
        n(g, {
          onSuccess: () => {
            a("/login");
          },
        });
      },
      m = async (g) => {
        d(g);
      },
      h = o("password");
    return U.jsx(qz, {
      children: U.jsx(Vz, {
        children: U.jsxs("form", {
          onSubmit: i(m),
          children: [
            U.jsx(Gz, { children: "Register" }),
            U.jsx(Xc, {
              name: "email",
              control: u,
              rules: {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email format",
                },
              },
              render: ({ field: g }) => {
                var y;
                return U.jsx(ui, {
                  ...g,
                  label: "Email",
                  fullWidth: !0,
                  error: !!f.email,
                  helperText: (y = f.email) == null ? void 0 : y.message,
                  margin: "dense",
                });
              },
            }),
            U.jsx(Xc, {
              name: "username",
              control: u,
              rules: { required: "Username is required" },
              render: ({ field: g }) => {
                var y;
                return U.jsx(ui, {
                  ...g,
                  label: "Username",
                  fullWidth: !0,
                  error: !!f.username,
                  helperText: (y = f.username) == null ? void 0 : y.message,
                  margin: "dense",
                });
              },
            }),
            U.jsx(Xc, {
              name: "password",
              control: u,
              rules: {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              },
              render: ({ field: g }) => {
                var y;
                return U.jsx(ui, {
                  ...g,
                  type: "password",
                  label: "Password",
                  fullWidth: !0,
                  error: !!f.password,
                  helperText: (y = f.password) == null ? void 0 : y.message,
                  margin: "dense",
                });
              },
            }),
            U.jsx(Xc, {
              name: "confirmPassword",
              control: u,
              rules: {
                required: "Confirm Password is required",
                validate: (g) => g === h || "Passwords do not match",
              },
              render: ({ field: g }) => {
                var y;
                return U.jsx(ui, {
                  ...g,
                  type: "password",
                  label: "Confirm Password",
                  fullWidth: !0,
                  error: !!f.confirmPassword,
                  helperText:
                    (y = f.confirmPassword) == null ? void 0 : y.message,
                  margin: "dense",
                });
              },
            }),
            U.jsx(vo, {
              variant: "contained",
              type: "submit",
              fullWidth: !0,
              sx: { marginTop: "15px", padding: "10px" },
              children: "Register",
            }),
          ],
        }),
      }),
    });
  },
  Yz = St.div`
  max-height: 100vh;
`,
  Qz = () =>
    U.jsx(Yz, {
      children: U.jsxs(hx, {
        children: [
          U.jsx(Ks, { path: "/*", element: U.jsx(px, { to: "/chat" }) }),
          U.jsx(Ks, {
            path: "/chat",
            element: U.jsx(Ez, { children: U.jsx(gz, {}) }),
          }),
          U.jsx(Ks, { path: "/login", element: U.jsx(xz, {}) }),
          U.jsx(Ks, { path: "/register", element: U.jsx(Iz, {}) }),
        ],
      }),
    });
var Kz = function () {
  return null;
};
const Xz = new KA({
  defaultOptions: { queries: { retry: 1, refetchOnWindowFocus: !1 } },
});
function Wz() {
  return U.jsxs(eO, {
    client: Xz,
    children: [
      U.jsx(Kz, { initialIsOpen: !1 }),
      U.jsxs(V2, { children: [U.jsx(w6, {}), U.jsx(Qz, {})] }),
    ],
  });
}
const Zz = () =>
  U.jsx(wA, {
    children: U.jsx(hx, {
      children: U.jsx(Ks, { path: "/*", element: U.jsx(Wz, {}) }),
    }),
  });
dT.createRoot(document.getElementById("root")).render(
  U.jsx(E.StrictMode, { children: U.jsx(Zz, {}) })
);
