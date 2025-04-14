var AR = Object.defineProperty;
var OR = (e, r, a) =>
  r in e
    ? AR(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a })
    : (e[r] = a);
var yo = (e, r, a) => OR(e, typeof r != "symbol" ? r + "" : r, a);
function _R(e, r) {
  for (var a = 0; a < r.length; a++) {
    const l = r[a];
    if (typeof l != "string" && !Array.isArray(l)) {
      for (const s in l)
        if (s !== "default" && !(s in e)) {
          const u = Object.getOwnPropertyDescriptor(l, s);
          u &&
            Object.defineProperty(
              e,
              s,
              u.get ? u : { enumerable: !0, get: () => l[s] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) l(s);
  new MutationObserver((s) => {
    for (const u of s)
      if (u.type === "childList")
        for (const f of u.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && l(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(s) {
    const u = {};
    return (
      s.integrity && (u.integrity = s.integrity),
      s.referrerPolicy && (u.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (u.credentials = "omit")
        : (u.credentials = "same-origin"),
      u
    );
  }
  function l(s) {
    if (s.ep) return;
    s.ep = !0;
    const u = a(s);
    fetch(s.href, u);
  }
})();
function qb(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Qd = { exports: {} },
  vo = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var H0;
function MR() {
  if (H0) return vo;
  H0 = 1;
  var e = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.fragment");
  function a(l, s, u) {
    var f = null;
    if (
      (u !== void 0 && (f = "" + u),
      s.key !== void 0 && (f = "" + s.key),
      "key" in s)
    ) {
      u = {};
      for (var p in s) p !== "key" && (u[p] = s[p]);
    } else u = s;
    return (
      (s = u.ref),
      { $$typeof: e, type: l, key: f, ref: s !== void 0 ? s : null, props: u }
    );
  }
  return (vo.Fragment = r), (vo.jsx = a), (vo.jsxs = a), vo;
}
var P0;
function DR() {
  return P0 || ((P0 = 1), (Qd.exports = MR())), Qd.exports;
}
var $ = DR(),
  Wd = { exports: {} },
  Le = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var q0;
function zR() {
  if (q0) return Le;
  q0 = 1;
  var e = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    l = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    u = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    h = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    v = Symbol.iterator;
  function S(B) {
    return B === null || typeof B != "object"
      ? null
      : ((B = (v && B[v]) || B["@@iterator"]),
        typeof B == "function" ? B : null);
  }
  var R = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    b = Object.assign,
    x = {};
  function T(B, W, he) {
    (this.props = B),
      (this.context = W),
      (this.refs = x),
      (this.updater = he || R);
  }
  (T.prototype.isReactComponent = {}),
    (T.prototype.setState = function (B, W) {
      if (typeof B != "object" && typeof B != "function" && B != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, B, W, "setState");
    }),
    (T.prototype.forceUpdate = function (B) {
      this.updater.enqueueForceUpdate(this, B, "forceUpdate");
    });
  function _() {}
  _.prototype = T.prototype;
  function M(B, W, he) {
    (this.props = B),
      (this.context = W),
      (this.refs = x),
      (this.updater = he || R);
  }
  var A = (M.prototype = new _());
  (A.constructor = M), b(A, T.prototype), (A.isPureReactComponent = !0);
  var D = Array.isArray,
    O = { H: null, A: null, T: null, S: null },
    j = Object.prototype.hasOwnProperty;
  function L(B, W, he, pe, ue, ye) {
    return (
      (he = ye.ref),
      {
        $$typeof: e,
        type: B,
        key: W,
        ref: he !== void 0 ? he : null,
        props: ye,
      }
    );
  }
  function re(B, W) {
    return L(B.type, W, void 0, void 0, void 0, B.props);
  }
  function G(B) {
    return typeof B == "object" && B !== null && B.$$typeof === e;
  }
  function E(B) {
    var W = { "=": "=0", ":": "=2" };
    return (
      "$" +
      B.replace(/[=:]/g, function (he) {
        return W[he];
      })
    );
  }
  var I = /\/+/g;
  function X(B, W) {
    return typeof B == "object" && B !== null && B.key != null
      ? E("" + B.key)
      : W.toString(36);
  }
  function J() {}
  function oe(B) {
    switch (B.status) {
      case "fulfilled":
        return B.value;
      case "rejected":
        throw B.reason;
      default:
        switch (
          (typeof B.status == "string"
            ? B.then(J, J)
            : ((B.status = "pending"),
              B.then(
                function (W) {
                  B.status === "pending" &&
                    ((B.status = "fulfilled"), (B.value = W));
                },
                function (W) {
                  B.status === "pending" &&
                    ((B.status = "rejected"), (B.reason = W));
                }
              )),
          B.status)
        ) {
          case "fulfilled":
            return B.value;
          case "rejected":
            throw B.reason;
        }
    }
    throw B;
  }
  function ee(B, W, he, pe, ue) {
    var ye = typeof B;
    (ye === "undefined" || ye === "boolean") && (B = null);
    var be = !1;
    if (B === null) be = !0;
    else
      switch (ye) {
        case "bigint":
        case "string":
        case "number":
          be = !0;
          break;
        case "object":
          switch (B.$$typeof) {
            case e:
            case r:
              be = !0;
              break;
            case g:
              return (be = B._init), ee(be(B._payload), W, he, pe, ue);
          }
      }
    if (be)
      return (
        (ue = ue(B)),
        (be = pe === "" ? "." + X(B, 0) : pe),
        D(ue)
          ? ((he = ""),
            be != null && (he = be.replace(I, "$&/") + "/"),
            ee(ue, W, he, "", function (we) {
              return we;
            }))
          : ue != null &&
            (G(ue) &&
              (ue = re(
                ue,
                he +
                  (ue.key == null || (B && B.key === ue.key)
                    ? ""
                    : ("" + ue.key).replace(I, "$&/") + "/") +
                  be
              )),
            W.push(ue)),
        1
      );
    be = 0;
    var Ue = pe === "" ? "." : pe + ":";
    if (D(B))
      for (var Ce = 0; Ce < B.length; Ce++)
        (pe = B[Ce]), (ye = Ue + X(pe, Ce)), (be += ee(pe, W, he, ye, ue));
    else if (((Ce = S(B)), typeof Ce == "function"))
      for (B = Ce.call(B), Ce = 0; !(pe = B.next()).done; )
        (pe = pe.value), (ye = Ue + X(pe, Ce++)), (be += ee(pe, W, he, ye, ue));
    else if (ye === "object") {
      if (typeof B.then == "function") return ee(oe(B), W, he, pe, ue);
      throw (
        ((W = String(B)),
        Error(
          "Objects are not valid as a React child (found: " +
            (W === "[object Object]"
              ? "object with keys {" + Object.keys(B).join(", ") + "}"
              : W) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return be;
  }
  function H(B, W, he) {
    if (B == null) return B;
    var pe = [],
      ue = 0;
    return (
      ee(B, pe, "", "", function (ye) {
        return W.call(he, ye, ue++);
      }),
      pe
    );
  }
  function ae(B) {
    if (B._status === -1) {
      var W = B._result;
      (W = W()),
        W.then(
          function (he) {
            (B._status === 0 || B._status === -1) &&
              ((B._status = 1), (B._result = he));
          },
          function (he) {
            (B._status === 0 || B._status === -1) &&
              ((B._status = 2), (B._result = he));
          }
        ),
        B._status === -1 && ((B._status = 0), (B._result = W));
    }
    if (B._status === 1) return B._result.default;
    throw B._result;
  }
  var ce =
    typeof reportError == "function"
      ? reportError
      : function (B) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var W = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof B == "object" &&
                B !== null &&
                typeof B.message == "string"
                  ? String(B.message)
                  : String(B),
              error: B,
            });
            if (!window.dispatchEvent(W)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", B);
            return;
          }
          console.error(B);
        };
  function se() {}
  return (
    (Le.Children = {
      map: H,
      forEach: function (B, W, he) {
        H(
          B,
          function () {
            W.apply(this, arguments);
          },
          he
        );
      },
      count: function (B) {
        var W = 0;
        return (
          H(B, function () {
            W++;
          }),
          W
        );
      },
      toArray: function (B) {
        return (
          H(B, function (W) {
            return W;
          }) || []
        );
      },
      only: function (B) {
        if (!G(B))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return B;
      },
    }),
    (Le.Component = T),
    (Le.Fragment = a),
    (Le.Profiler = s),
    (Le.PureComponent = M),
    (Le.StrictMode = l),
    (Le.Suspense = m),
    (Le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = O),
    (Le.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (Le.cache = function (B) {
      return function () {
        return B.apply(null, arguments);
      };
    }),
    (Le.cloneElement = function (B, W, he) {
      if (B == null)
        throw Error(
          "The argument must be a React element, but you passed " + B + "."
        );
      var pe = b({}, B.props),
        ue = B.key,
        ye = void 0;
      if (W != null)
        for (be in (W.ref !== void 0 && (ye = void 0),
        W.key !== void 0 && (ue = "" + W.key),
        W))
          !j.call(W, be) ||
            be === "key" ||
            be === "__self" ||
            be === "__source" ||
            (be === "ref" && W.ref === void 0) ||
            (pe[be] = W[be]);
      var be = arguments.length - 2;
      if (be === 1) pe.children = he;
      else if (1 < be) {
        for (var Ue = Array(be), Ce = 0; Ce < be; Ce++)
          Ue[Ce] = arguments[Ce + 2];
        pe.children = Ue;
      }
      return L(B.type, ue, void 0, void 0, ye, pe);
    }),
    (Le.createContext = function (B) {
      return (
        (B = {
          $$typeof: f,
          _currentValue: B,
          _currentValue2: B,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (B.Provider = B),
        (B.Consumer = { $$typeof: u, _context: B }),
        B
      );
    }),
    (Le.createElement = function (B, W, he) {
      var pe,
        ue = {},
        ye = null;
      if (W != null)
        for (pe in (W.key !== void 0 && (ye = "" + W.key), W))
          j.call(W, pe) &&
            pe !== "key" &&
            pe !== "__self" &&
            pe !== "__source" &&
            (ue[pe] = W[pe]);
      var be = arguments.length - 2;
      if (be === 1) ue.children = he;
      else if (1 < be) {
        for (var Ue = Array(be), Ce = 0; Ce < be; Ce++)
          Ue[Ce] = arguments[Ce + 2];
        ue.children = Ue;
      }
      if (B && B.defaultProps)
        for (pe in ((be = B.defaultProps), be))
          ue[pe] === void 0 && (ue[pe] = be[pe]);
      return L(B, ye, void 0, void 0, null, ue);
    }),
    (Le.createRef = function () {
      return { current: null };
    }),
    (Le.forwardRef = function (B) {
      return { $$typeof: p, render: B };
    }),
    (Le.isValidElement = G),
    (Le.lazy = function (B) {
      return { $$typeof: g, _payload: { _status: -1, _result: B }, _init: ae };
    }),
    (Le.memo = function (B, W) {
      return { $$typeof: h, type: B, compare: W === void 0 ? null : W };
    }),
    (Le.startTransition = function (B) {
      var W = O.T,
        he = {};
      O.T = he;
      try {
        var pe = B(),
          ue = O.S;
        ue !== null && ue(he, pe),
          typeof pe == "object" &&
            pe !== null &&
            typeof pe.then == "function" &&
            pe.then(se, ce);
      } catch (ye) {
        ce(ye);
      } finally {
        O.T = W;
      }
    }),
    (Le.unstable_useCacheRefresh = function () {
      return O.H.useCacheRefresh();
    }),
    (Le.use = function (B) {
      return O.H.use(B);
    }),
    (Le.useActionState = function (B, W, he) {
      return O.H.useActionState(B, W, he);
    }),
    (Le.useCallback = function (B, W) {
      return O.H.useCallback(B, W);
    }),
    (Le.useContext = function (B) {
      return O.H.useContext(B);
    }),
    (Le.useDebugValue = function () {}),
    (Le.useDeferredValue = function (B, W) {
      return O.H.useDeferredValue(B, W);
    }),
    (Le.useEffect = function (B, W) {
      return O.H.useEffect(B, W);
    }),
    (Le.useId = function () {
      return O.H.useId();
    }),
    (Le.useImperativeHandle = function (B, W, he) {
      return O.H.useImperativeHandle(B, W, he);
    }),
    (Le.useInsertionEffect = function (B, W) {
      return O.H.useInsertionEffect(B, W);
    }),
    (Le.useLayoutEffect = function (B, W) {
      return O.H.useLayoutEffect(B, W);
    }),
    (Le.useMemo = function (B, W) {
      return O.H.useMemo(B, W);
    }),
    (Le.useOptimistic = function (B, W) {
      return O.H.useOptimistic(B, W);
    }),
    (Le.useReducer = function (B, W, he) {
      return O.H.useReducer(B, W, he);
    }),
    (Le.useRef = function (B) {
      return O.H.useRef(B);
    }),
    (Le.useState = function (B) {
      return O.H.useState(B);
    }),
    (Le.useSyncExternalStore = function (B, W, he) {
      return O.H.useSyncExternalStore(B, W, he);
    }),
    (Le.useTransition = function () {
      return O.H.useTransition();
    }),
    (Le.version = "19.0.0"),
    Le
  );
}
var V0;
function sh() {
  return V0 || ((V0 = 1), (Wd.exports = zR())), Wd.exports;
}
var C = sh();
const Ne = qb(C),
  Ap = _R({ __proto__: null, default: Ne }, [C]);
var Zd = { exports: {} },
  bo = {},
  Jd = { exports: {} },
  ep = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var F0;
function NR() {
  return (
    F0 ||
      ((F0 = 1),
      (function (e) {
        function r(H, ae) {
          var ce = H.length;
          H.push(ae);
          e: for (; 0 < ce; ) {
            var se = (ce - 1) >>> 1,
              B = H[se];
            if (0 < s(B, ae)) (H[se] = ae), (H[ce] = B), (ce = se);
            else break e;
          }
        }
        function a(H) {
          return H.length === 0 ? null : H[0];
        }
        function l(H) {
          if (H.length === 0) return null;
          var ae = H[0],
            ce = H.pop();
          if (ce !== ae) {
            H[0] = ce;
            e: for (var se = 0, B = H.length, W = B >>> 1; se < W; ) {
              var he = 2 * (se + 1) - 1,
                pe = H[he],
                ue = he + 1,
                ye = H[ue];
              if (0 > s(pe, ce))
                ue < B && 0 > s(ye, pe)
                  ? ((H[se] = ye), (H[ue] = ce), (se = ue))
                  : ((H[se] = pe), (H[he] = ce), (se = he));
              else if (ue < B && 0 > s(ye, ce))
                (H[se] = ye), (H[ue] = ce), (se = ue);
              else break e;
            }
          }
          return ae;
        }
        function s(H, ae) {
          var ce = H.sortIndex - ae.sortIndex;
          return ce !== 0 ? ce : H.id - ae.id;
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
            p = f.now();
          e.unstable_now = function () {
            return f.now() - p;
          };
        }
        var m = [],
          h = [],
          g = 1,
          v = null,
          S = 3,
          R = !1,
          b = !1,
          x = !1,
          T = typeof setTimeout == "function" ? setTimeout : null,
          _ = typeof clearTimeout == "function" ? clearTimeout : null,
          M = typeof setImmediate < "u" ? setImmediate : null;
        function A(H) {
          for (var ae = a(h); ae !== null; ) {
            if (ae.callback === null) l(h);
            else if (ae.startTime <= H)
              l(h), (ae.sortIndex = ae.expirationTime), r(m, ae);
            else break;
            ae = a(h);
          }
        }
        function D(H) {
          if (((x = !1), A(H), !b))
            if (a(m) !== null) (b = !0), oe();
            else {
              var ae = a(h);
              ae !== null && ee(D, ae.startTime - H);
            }
        }
        var O = !1,
          j = -1,
          L = 5,
          re = -1;
        function G() {
          return !(e.unstable_now() - re < L);
        }
        function E() {
          if (O) {
            var H = e.unstable_now();
            re = H;
            var ae = !0;
            try {
              e: {
                (b = !1), x && ((x = !1), _(j), (j = -1)), (R = !0);
                var ce = S;
                try {
                  t: {
                    for (
                      A(H), v = a(m);
                      v !== null && !(v.expirationTime > H && G());

                    ) {
                      var se = v.callback;
                      if (typeof se == "function") {
                        (v.callback = null), (S = v.priorityLevel);
                        var B = se(v.expirationTime <= H);
                        if (((H = e.unstable_now()), typeof B == "function")) {
                          (v.callback = B), A(H), (ae = !0);
                          break t;
                        }
                        v === a(m) && l(m), A(H);
                      } else l(m);
                      v = a(m);
                    }
                    if (v !== null) ae = !0;
                    else {
                      var W = a(h);
                      W !== null && ee(D, W.startTime - H), (ae = !1);
                    }
                  }
                  break e;
                } finally {
                  (v = null), (S = ce), (R = !1);
                }
                ae = void 0;
              }
            } finally {
              ae ? I() : (O = !1);
            }
          }
        }
        var I;
        if (typeof M == "function")
          I = function () {
            M(E);
          };
        else if (typeof MessageChannel < "u") {
          var X = new MessageChannel(),
            J = X.port2;
          (X.port1.onmessage = E),
            (I = function () {
              J.postMessage(null);
            });
        } else
          I = function () {
            T(E, 0);
          };
        function oe() {
          O || ((O = !0), I());
        }
        function ee(H, ae) {
          j = T(function () {
            H(e.unstable_now());
          }, ae);
        }
        (e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (H) {
            H.callback = null;
          }),
          (e.unstable_continueExecution = function () {
            b || R || ((b = !0), oe());
          }),
          (e.unstable_forceFrameRate = function (H) {
            0 > H || 125 < H
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (L = 0 < H ? Math.floor(1e3 / H) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (e.unstable_getFirstCallbackNode = function () {
            return a(m);
          }),
          (e.unstable_next = function (H) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var ae = 3;
                break;
              default:
                ae = S;
            }
            var ce = S;
            S = ae;
            try {
              return H();
            } finally {
              S = ce;
            }
          }),
          (e.unstable_pauseExecution = function () {}),
          (e.unstable_requestPaint = function () {}),
          (e.unstable_runWithPriority = function (H, ae) {
            switch (H) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                H = 3;
            }
            var ce = S;
            S = H;
            try {
              return ae();
            } finally {
              S = ce;
            }
          }),
          (e.unstable_scheduleCallback = function (H, ae, ce) {
            var se = e.unstable_now();
            switch (
              (typeof ce == "object" && ce !== null
                ? ((ce = ce.delay),
                  (ce = typeof ce == "number" && 0 < ce ? se + ce : se))
                : (ce = se),
              H)
            ) {
              case 1:
                var B = -1;
                break;
              case 2:
                B = 250;
                break;
              case 5:
                B = 1073741823;
                break;
              case 4:
                B = 1e4;
                break;
              default:
                B = 5e3;
            }
            return (
              (B = ce + B),
              (H = {
                id: g++,
                callback: ae,
                priorityLevel: H,
                startTime: ce,
                expirationTime: B,
                sortIndex: -1,
              }),
              ce > se
                ? ((H.sortIndex = ce),
                  r(h, H),
                  a(m) === null &&
                    H === a(h) &&
                    (x ? (_(j), (j = -1)) : (x = !0), ee(D, ce - se)))
                : ((H.sortIndex = B), r(m, H), b || R || ((b = !0), oe())),
              H
            );
          }),
          (e.unstable_shouldYield = G),
          (e.unstable_wrapCallback = function (H) {
            var ae = S;
            return function () {
              var ce = S;
              S = ae;
              try {
                return H.apply(this, arguments);
              } finally {
                S = ce;
              }
            };
          });
      })(ep)),
    ep
  );
}
var G0;
function BR() {
  return G0 || ((G0 = 1), (Jd.exports = NR())), Jd.exports;
}
var tp = { exports: {} },
  rn = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Y0;
function kR() {
  if (Y0) return rn;
  Y0 = 1;
  var e = sh();
  function r(m) {
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
  var l = {
      d: {
        f: a,
        r: function () {
          throw Error(r(522));
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
    s = Symbol.for("react.portal");
  function u(m, h, g) {
    var v =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: v == null ? null : "" + v,
      children: m,
      containerInfo: h,
      implementation: g,
    };
  }
  var f = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(m, h) {
    if (m === "font") return "";
    if (typeof h == "string") return h === "use-credentials" ? h : "";
  }
  return (
    (rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l),
    (rn.createPortal = function (m, h) {
      var g =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!h || (h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11))
        throw Error(r(299));
      return u(m, h, null, g);
    }),
    (rn.flushSync = function (m) {
      var h = f.T,
        g = l.p;
      try {
        if (((f.T = null), (l.p = 2), m)) return m();
      } finally {
        (f.T = h), (l.p = g), l.d.f();
      }
    }),
    (rn.preconnect = function (m, h) {
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
        l.d.C(m, h));
    }),
    (rn.prefetchDNS = function (m) {
      typeof m == "string" && l.d.D(m);
    }),
    (rn.preinit = function (m, h) {
      if (typeof m == "string" && h && typeof h.as == "string") {
        var g = h.as,
          v = p(g, h.crossOrigin),
          S = typeof h.integrity == "string" ? h.integrity : void 0,
          R = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
        g === "style"
          ? l.d.S(m, typeof h.precedence == "string" ? h.precedence : void 0, {
              crossOrigin: v,
              integrity: S,
              fetchPriority: R,
            })
          : g === "script" &&
            l.d.X(m, {
              crossOrigin: v,
              integrity: S,
              fetchPriority: R,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
      }
    }),
    (rn.preinitModule = function (m, h) {
      if (typeof m == "string")
        if (typeof h == "object" && h !== null) {
          if (h.as == null || h.as === "script") {
            var g = p(h.as, h.crossOrigin);
            l.d.M(m, {
              crossOrigin: g,
              integrity: typeof h.integrity == "string" ? h.integrity : void 0,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
          }
        } else h == null && l.d.M(m);
    }),
    (rn.preload = function (m, h) {
      if (
        typeof m == "string" &&
        typeof h == "object" &&
        h !== null &&
        typeof h.as == "string"
      ) {
        var g = h.as,
          v = p(g, h.crossOrigin);
        l.d.L(m, g, {
          crossOrigin: v,
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
    (rn.preloadModule = function (m, h) {
      if (typeof m == "string")
        if (h) {
          var g = p(h.as, h.crossOrigin);
          l.d.m(m, {
            as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
            crossOrigin: g,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          });
        } else l.d.m(m);
    }),
    (rn.requestFormReset = function (m) {
      l.d.r(m);
    }),
    (rn.unstable_batchedUpdates = function (m, h) {
      return m(h);
    }),
    (rn.useFormState = function (m, h, g) {
      return f.H.useFormState(m, h, g);
    }),
    (rn.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (rn.version = "19.0.0"),
    rn
  );
}
var I0;
function Vb() {
  if (I0) return tp.exports;
  I0 = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (r) {
        console.error(r);
      }
  }
  return e(), (tp.exports = kR()), tp.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var X0;
function UR() {
  if (X0) return bo;
  X0 = 1;
  var e = BR(),
    r = sh(),
    a = Vb();
  function l(t) {
    var n = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var i = 2; i < arguments.length; i++)
        n += "&args[]=" + encodeURIComponent(arguments[i]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  var u = Symbol.for("react.element"),
    f = Symbol.for("react.transitional.element"),
    p = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    h = Symbol.for("react.strict_mode"),
    g = Symbol.for("react.profiler"),
    v = Symbol.for("react.provider"),
    S = Symbol.for("react.consumer"),
    R = Symbol.for("react.context"),
    b = Symbol.for("react.forward_ref"),
    x = Symbol.for("react.suspense"),
    T = Symbol.for("react.suspense_list"),
    _ = Symbol.for("react.memo"),
    M = Symbol.for("react.lazy"),
    A = Symbol.for("react.offscreen"),
    D = Symbol.for("react.memo_cache_sentinel"),
    O = Symbol.iterator;
  function j(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (O && t[O]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var L = Symbol.for("react.client.reference");
  function re(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === L ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case m:
        return "Fragment";
      case p:
        return "Portal";
      case g:
        return "Profiler";
      case h:
        return "StrictMode";
      case x:
        return "Suspense";
      case T:
        return "SuspenseList";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case R:
          return (t.displayName || "Context") + ".Provider";
        case S:
          return (t._context.displayName || "Context") + ".Consumer";
        case b:
          var n = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = n.displayName || n.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case _:
          return (
            (n = t.displayName || null), n !== null ? n : re(t.type) || "Memo"
          );
        case M:
          (n = t._payload), (t = t._init);
          try {
            return re(t(n));
          } catch {}
      }
    return null;
  }
  var G = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    E = Object.assign,
    I,
    X;
  function J(t) {
    if (I === void 0)
      try {
        throw Error();
      } catch (i) {
        var n = i.stack.trim().match(/\n( *(at )?)/);
        (I = (n && n[1]) || ""),
          (X =
            -1 <
            i.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < i.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      I +
      t +
      X
    );
  }
  var oe = !1;
  function ee(t, n) {
    if (!t || oe) return "";
    oe = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function () {
          try {
            if (n) {
              var le = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(le.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(le, []);
                } catch (te) {
                  var F = te;
                }
                Reflect.construct(t, [], le);
              } else {
                try {
                  le.call();
                } catch (te) {
                  F = te;
                }
                t.call(le.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (te) {
                F = te;
              }
              (le = t()) &&
                typeof le.catch == "function" &&
                le.catch(function () {});
            }
          } catch (te) {
            if (te && F && typeof te.stack == "string")
              return [te.stack, F.stack];
          }
          return [null, null];
        },
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name"
      );
      c &&
        c.configurable &&
        Object.defineProperty(o.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var d = o.DetermineComponentFrameRoot(),
        y = d[0],
        w = d[1];
      if (y && w) {
        var z = y.split(`
`),
          U = w.split(`
`);
        for (
          c = o = 0;
          o < z.length && !z[o].includes("DetermineComponentFrameRoot");

        )
          o++;
        for (; c < U.length && !U[c].includes("DetermineComponentFrameRoot"); )
          c++;
        if (o === z.length || c === U.length)
          for (
            o = z.length - 1, c = U.length - 1;
            1 <= o && 0 <= c && z[o] !== U[c];

          )
            c--;
        for (; 1 <= o && 0 <= c; o--, c--)
          if (z[o] !== U[c]) {
            if (o !== 1 || c !== 1)
              do
                if ((o--, c--, 0 > c || z[o] !== U[c])) {
                  var ne =
                    `
` + z[o].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      ne.includes("<anonymous>") &&
                      (ne = ne.replace("<anonymous>", t.displayName)),
                    ne
                  );
                }
              while (1 <= o && 0 <= c);
            break;
          }
      }
    } finally {
      (oe = !1), (Error.prepareStackTrace = i);
    }
    return (i = t ? t.displayName || t.name : "") ? J(i) : "";
  }
  function H(t) {
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
        return (t = ee(t.type, !1)), t;
      case 11:
        return (t = ee(t.type.render, !1)), t;
      case 1:
        return (t = ee(t.type, !0)), t;
      default:
        return "";
    }
  }
  function ae(t) {
    try {
      var n = "";
      do (n += H(t)), (t = t.return);
      while (t);
      return n;
    } catch (i) {
      return (
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack
      );
    }
  }
  function ce(t) {
    var n = t,
      i = t;
    if (t.alternate) for (; n.return; ) n = n.return;
    else {
      t = n;
      do (n = t), n.flags & 4098 && (i = n.return), (t = n.return);
      while (t);
    }
    return n.tag === 3 ? i : null;
  }
  function se(t) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        (n === null && ((t = t.alternate), t !== null && (n = t.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function B(t) {
    if (ce(t) !== t) throw Error(l(188));
  }
  function W(t) {
    var n = t.alternate;
    if (!n) {
      if (((n = ce(t)), n === null)) throw Error(l(188));
      return n !== t ? null : t;
    }
    for (var i = t, o = n; ; ) {
      var c = i.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (((o = c.return), o !== null)) {
          i = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === i) return B(c), t;
          if (d === o) return B(c), n;
          d = d.sibling;
        }
        throw Error(l(188));
      }
      if (i.return !== o.return) (i = c), (o = d);
      else {
        for (var y = !1, w = c.child; w; ) {
          if (w === i) {
            (y = !0), (i = c), (o = d);
            break;
          }
          if (w === o) {
            (y = !0), (o = c), (i = d);
            break;
          }
          w = w.sibling;
        }
        if (!y) {
          for (w = d.child; w; ) {
            if (w === i) {
              (y = !0), (i = d), (o = c);
              break;
            }
            if (w === o) {
              (y = !0), (o = d), (i = c);
              break;
            }
            w = w.sibling;
          }
          if (!y) throw Error(l(189));
        }
      }
      if (i.alternate !== o) throw Error(l(190));
    }
    if (i.tag !== 3) throw Error(l(188));
    return i.stateNode.current === i ? t : n;
  }
  function he(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((n = he(t)), n !== null)) return n;
      t = t.sibling;
    }
    return null;
  }
  var pe = Array.isArray,
    ue = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ye = { pending: !1, data: null, method: null, action: null },
    be = [],
    Ue = -1;
  function Ce(t) {
    return { current: t };
  }
  function we(t) {
    0 > Ue || ((t.current = be[Ue]), (be[Ue] = null), Ue--);
  }
  function ve(t, n) {
    Ue++, (be[Ue] = t.current), (t.current = n);
  }
  var De = Ce(null),
    Ae = Ce(null),
    Ye = Ce(null),
    Be = Ce(null);
  function Ze(t, n) {
    switch ((ve(Ye, n), ve(Ae, t), ve(De, null), (t = n.nodeType), t)) {
      case 9:
      case 11:
        n = (n = n.documentElement) && (n = n.namespaceURI) ? m0(n) : 0;
        break;
      default:
        if (
          ((t = t === 8 ? n.parentNode : n),
          (n = t.tagName),
          (t = t.namespaceURI))
        )
          (t = m0(t)), (n = g0(t, n));
        else
          switch (n) {
            case "svg":
              n = 1;
              break;
            case "math":
              n = 2;
              break;
            default:
              n = 0;
          }
    }
    we(De), ve(De, n);
  }
  function Ot() {
    we(De), we(Ae), we(Ye);
  }
  function Bt(t) {
    t.memoizedState !== null && ve(Be, t);
    var n = De.current,
      i = g0(n, t.type);
    n !== i && (ve(Ae, t), ve(De, i));
  }
  function N(t) {
    Ae.current === t && (we(De), we(Ae)),
      Be.current === t && (we(Be), (fo._currentValue = ye));
  }
  var q = Object.prototype.hasOwnProperty,
    Y = e.unstable_scheduleCallback,
    fe = e.unstable_cancelCallback,
    Q = e.unstable_shouldYield,
    de = e.unstable_requestPaint,
    me = e.unstable_now,
    Me = e.unstable_getCurrentPriorityLevel,
    lt = e.unstable_ImmediatePriority,
    ot = e.unstable_UserBlockingPriority,
    kt = e.unstable_NormalPriority,
    lr = e.unstable_LowPriority,
    dn = e.unstable_IdlePriority,
    Je = e.log,
    or = e.unstable_setDisableYieldValue,
    pn = null,
    Gt = null;
  function Te(t) {
    if (Gt && typeof Gt.onCommitFiberRoot == "function")
      try {
        Gt.onCommitFiberRoot(pn, t, void 0, (t.current.flags & 128) === 128);
      } catch {}
  }
  function Fe(t) {
    if (
      (typeof Je == "function" && or(t),
      Gt && typeof Gt.setStrictMode == "function")
    )
      try {
        Gt.setStrictMode(pn, t);
      } catch {}
  }
  var Ke = Math.clz32 ? Math.clz32 : hx,
    Zr = Math.log,
    ss = Math.LN2;
  function hx(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((Zr(t) / ss) | 0)) | 0;
  }
  var us = 128,
    cs = 4194304;
  function Aa(t) {
    var n = t & 42;
    if (n !== 0) return n;
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
  function fs(t, n) {
    var i = t.pendingLanes;
    if (i === 0) return 0;
    var o = 0,
      c = t.suspendedLanes,
      d = t.pingedLanes,
      y = t.warmLanes;
    t = t.finishedLanes !== 0;
    var w = i & 134217727;
    return (
      w !== 0
        ? ((i = w & ~c),
          i !== 0
            ? (o = Aa(i))
            : ((d &= w),
              d !== 0
                ? (o = Aa(d))
                : t || ((y = w & ~y), y !== 0 && (o = Aa(y)))))
        : ((w = i & ~c),
          w !== 0
            ? (o = Aa(w))
            : d !== 0
            ? (o = Aa(d))
            : t || ((y = i & ~y), y !== 0 && (o = Aa(y)))),
      o === 0
        ? 0
        : n !== 0 &&
          n !== o &&
          !(n & c) &&
          ((c = o & -o),
          (y = n & -n),
          c >= y || (c === 32 && (y & 4194176) !== 0))
        ? n
        : o
    );
  }
  function xl(t, n) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & n) === 0;
  }
  function mx(t, n) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
        return n + 250;
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
        return n + 5e3;
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
  function om() {
    var t = us;
    return (us <<= 1), !(us & 4194176) && (us = 128), t;
  }
  function sm() {
    var t = cs;
    return (cs <<= 1), !(cs & 62914560) && (cs = 4194304), t;
  }
  function Fc(t) {
    for (var n = [], i = 0; 31 > i; i++) n.push(t);
    return n;
  }
  function El(t, n) {
    (t.pendingLanes |= n),
      n !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function gx(t, n, i, o, c, d) {
    var y = t.pendingLanes;
    (t.pendingLanes = i),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= i),
      (t.entangledLanes &= i),
      (t.errorRecoveryDisabledLanes &= i),
      (t.shellSuspendCounter = 0);
    var w = t.entanglements,
      z = t.expirationTimes,
      U = t.hiddenUpdates;
    for (i = y & ~i; 0 < i; ) {
      var ne = 31 - Ke(i),
        le = 1 << ne;
      (w[ne] = 0), (z[ne] = -1);
      var F = U[ne];
      if (F !== null)
        for (U[ne] = null, ne = 0; ne < F.length; ne++) {
          var te = F[ne];
          te !== null && (te.lane &= -536870913);
        }
      i &= ~le;
    }
    o !== 0 && um(t, o, 0),
      d !== 0 && c === 0 && t.tag !== 0 && (t.suspendedLanes |= d & ~(y & ~n));
  }
  function um(t, n, i) {
    (t.pendingLanes |= n), (t.suspendedLanes &= ~n);
    var o = 31 - Ke(n);
    (t.entangledLanes |= n),
      (t.entanglements[o] = t.entanglements[o] | 1073741824 | (i & 4194218));
  }
  function cm(t, n) {
    var i = (t.entangledLanes |= n);
    for (t = t.entanglements; i; ) {
      var o = 31 - Ke(i),
        c = 1 << o;
      (c & n) | (t[o] & n) && (t[o] |= n), (i &= ~c);
    }
  }
  function fm(t) {
    return (
      (t &= -t), 2 < t ? (8 < t ? (t & 134217727 ? 32 : 268435456) : 8) : 2
    );
  }
  function dm() {
    var t = ue.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : B0(t.type));
  }
  function yx(t, n) {
    var i = ue.p;
    try {
      return (ue.p = t), n();
    } finally {
      ue.p = i;
    }
  }
  var Jr = Math.random().toString(36).slice(2),
    tn = "__reactFiber$" + Jr,
    hn = "__reactProps$" + Jr,
    ci = "__reactContainer$" + Jr,
    Gc = "__reactEvents$" + Jr,
    vx = "__reactListeners$" + Jr,
    bx = "__reactHandles$" + Jr,
    pm = "__reactResources$" + Jr,
    Rl = "__reactMarker$" + Jr;
  function Yc(t) {
    delete t[tn], delete t[hn], delete t[Gc], delete t[vx], delete t[bx];
  }
  function Oa(t) {
    var n = t[tn];
    if (n) return n;
    for (var i = t.parentNode; i; ) {
      if ((n = i[ci] || i[tn])) {
        if (
          ((i = n.alternate),
          n.child !== null || (i !== null && i.child !== null))
        )
          for (t = b0(t); t !== null; ) {
            if ((i = t[tn])) return i;
            t = b0(t);
          }
        return n;
      }
      (t = i), (i = t.parentNode);
    }
    return null;
  }
  function fi(t) {
    if ((t = t[tn] || t[ci])) {
      var n = t.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return t;
    }
    return null;
  }
  function Cl(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return t.stateNode;
    throw Error(l(33));
  }
  function di(t) {
    var n = t[pm];
    return (
      n ||
        (n = t[pm] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      n
    );
  }
  function Yt(t) {
    t[Rl] = !0;
  }
  var hm = new Set(),
    mm = {};
  function _a(t, n) {
    pi(t, n), pi(t + "Capture", n);
  }
  function pi(t, n) {
    for (mm[t] = n, t = 0; t < n.length; t++) hm.add(n[t]);
  }
  var Ar = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Sx = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    gm = {},
    ym = {};
  function xx(t) {
    return q.call(ym, t)
      ? !0
      : q.call(gm, t)
      ? !1
      : Sx.test(t)
      ? (ym[t] = !0)
      : ((gm[t] = !0), !1);
  }
  function ds(t, n, i) {
    if (xx(n))
      if (i === null) t.removeAttribute(n);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(n);
            return;
          case "boolean":
            var o = n.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              t.removeAttribute(n);
              return;
            }
        }
        t.setAttribute(n, "" + i);
      }
  }
  function ps(t, n, i) {
    if (i === null) t.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttribute(n, "" + i);
    }
  }
  function Or(t, n, i, o) {
    if (o === null) t.removeAttribute(i);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(i);
          return;
      }
      t.setAttributeNS(n, i, "" + o);
    }
  }
  function Dn(t) {
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
  function vm(t) {
    var n = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function Ex(t) {
    var n = vm(t) ? "checked" : "value",
      i = Object.getOwnPropertyDescriptor(t.constructor.prototype, n),
      o = "" + t[n];
    if (
      !t.hasOwnProperty(n) &&
      typeof i < "u" &&
      typeof i.get == "function" &&
      typeof i.set == "function"
    ) {
      var c = i.get,
        d = i.set;
      return (
        Object.defineProperty(t, n, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (y) {
            (o = "" + y), d.call(this, y);
          },
        }),
        Object.defineProperty(t, n, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return o;
          },
          setValue: function (y) {
            o = "" + y;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[n];
          },
        }
      );
    }
  }
  function hs(t) {
    t._valueTracker || (t._valueTracker = Ex(t));
  }
  function bm(t) {
    if (!t) return !1;
    var n = t._valueTracker;
    if (!n) return !0;
    var i = n.getValue(),
      o = "";
    return (
      t && (o = vm(t) ? (t.checked ? "true" : "false") : t.value),
      (t = o),
      t !== i ? (n.setValue(t), !0) : !1
    );
  }
  function ms(t) {
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
  var Rx = /[\n"\\]/g;
  function zn(t) {
    return t.replace(Rx, function (n) {
      return "\\" + n.charCodeAt(0).toString(16) + " ";
    });
  }
  function Ic(t, n, i, o, c, d, y, w) {
    (t.name = ""),
      y != null &&
      typeof y != "function" &&
      typeof y != "symbol" &&
      typeof y != "boolean"
        ? (t.type = y)
        : t.removeAttribute("type"),
      n != null
        ? y === "number"
          ? ((n === 0 && t.value === "") || t.value != n) &&
            (t.value = "" + Dn(n))
          : t.value !== "" + Dn(n) && (t.value = "" + Dn(n))
        : (y !== "submit" && y !== "reset") || t.removeAttribute("value"),
      n != null
        ? Xc(t, y, Dn(n))
        : i != null
        ? Xc(t, y, Dn(i))
        : o != null && t.removeAttribute("value"),
      c == null && d != null && (t.defaultChecked = !!d),
      c != null &&
        (t.checked = c && typeof c != "function" && typeof c != "symbol"),
      w != null &&
      typeof w != "function" &&
      typeof w != "symbol" &&
      typeof w != "boolean"
        ? (t.name = "" + Dn(w))
        : t.removeAttribute("name");
  }
  function Sm(t, n, i, o, c, d, y, w) {
    if (
      (d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (t.type = d),
      n != null || i != null)
    ) {
      if (!((d !== "submit" && d !== "reset") || n != null)) return;
      (i = i != null ? "" + Dn(i) : ""),
        (n = n != null ? "" + Dn(n) : i),
        w || n === t.value || (t.value = n),
        (t.defaultValue = n);
    }
    (o = o ?? c),
      (o = typeof o != "function" && typeof o != "symbol" && !!o),
      (t.checked = w ? t.checked : !!o),
      (t.defaultChecked = !!o),
      y != null &&
        typeof y != "function" &&
        typeof y != "symbol" &&
        typeof y != "boolean" &&
        (t.name = y);
  }
  function Xc(t, n, i) {
    (n === "number" && ms(t.ownerDocument) === t) ||
      t.defaultValue === "" + i ||
      (t.defaultValue = "" + i);
  }
  function hi(t, n, i, o) {
    if (((t = t.options), n)) {
      n = {};
      for (var c = 0; c < i.length; c++) n["$" + i[c]] = !0;
      for (i = 0; i < t.length; i++)
        (c = n.hasOwnProperty("$" + t[i].value)),
          t[i].selected !== c && (t[i].selected = c),
          c && o && (t[i].defaultSelected = !0);
    } else {
      for (i = "" + Dn(i), n = null, c = 0; c < t.length; c++) {
        if (t[c].value === i) {
          (t[c].selected = !0), o && (t[c].defaultSelected = !0);
          return;
        }
        n !== null || t[c].disabled || (n = t[c]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function xm(t, n, i) {
    if (
      n != null &&
      ((n = "" + Dn(n)), n !== t.value && (t.value = n), i == null)
    ) {
      t.defaultValue !== n && (t.defaultValue = n);
      return;
    }
    t.defaultValue = i != null ? "" + Dn(i) : "";
  }
  function Em(t, n, i, o) {
    if (n == null) {
      if (o != null) {
        if (i != null) throw Error(l(92));
        if (pe(o)) {
          if (1 < o.length) throw Error(l(93));
          o = o[0];
        }
        i = o;
      }
      i == null && (i = ""), (n = i);
    }
    (i = Dn(n)),
      (t.defaultValue = i),
      (o = t.textContent),
      o === i && o !== "" && o !== null && (t.value = o);
  }
  function mi(t, n) {
    if (n) {
      var i = t.firstChild;
      if (i && i === t.lastChild && i.nodeType === 3) {
        i.nodeValue = n;
        return;
      }
    }
    t.textContent = n;
  }
  var Cx = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Rm(t, n, i) {
    var o = n.indexOf("--") === 0;
    i == null || typeof i == "boolean" || i === ""
      ? o
        ? t.setProperty(n, "")
        : n === "float"
        ? (t.cssFloat = "")
        : (t[n] = "")
      : o
      ? t.setProperty(n, i)
      : typeof i != "number" || i === 0 || Cx.has(n)
      ? n === "float"
        ? (t.cssFloat = i)
        : (t[n] = ("" + i).trim())
      : (t[n] = i + "px");
  }
  function Cm(t, n, i) {
    if (n != null && typeof n != "object") throw Error(l(62));
    if (((t = t.style), i != null)) {
      for (var o in i)
        !i.hasOwnProperty(o) ||
          (n != null && n.hasOwnProperty(o)) ||
          (o.indexOf("--") === 0
            ? t.setProperty(o, "")
            : o === "float"
            ? (t.cssFloat = "")
            : (t[o] = ""));
      for (var c in n)
        (o = n[c]), n.hasOwnProperty(c) && i[c] !== o && Rm(t, c, o);
    } else for (var d in n) n.hasOwnProperty(d) && Rm(t, d, n[d]);
  }
  function Kc(t) {
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
  var wx = new Map([
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
    Tx =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function gs(t) {
    return Tx.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var Qc = null;
  function Wc(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var gi = null,
    yi = null;
  function wm(t) {
    var n = fi(t);
    if (n && (t = n.stateNode)) {
      var i = t[hn] || null;
      e: switch (((t = n.stateNode), n.type)) {
        case "input":
          if (
            (Ic(
              t,
              i.value,
              i.defaultValue,
              i.defaultValue,
              i.checked,
              i.defaultChecked,
              i.type,
              i.name
            ),
            (n = i.name),
            i.type === "radio" && n != null)
          ) {
            for (i = t; i.parentNode; ) i = i.parentNode;
            for (
              i = i.querySelectorAll(
                'input[name="' + zn("" + n) + '"][type="radio"]'
              ),
                n = 0;
              n < i.length;
              n++
            ) {
              var o = i[n];
              if (o !== t && o.form === t.form) {
                var c = o[hn] || null;
                if (!c) throw Error(l(90));
                Ic(
                  o,
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
            for (n = 0; n < i.length; n++)
              (o = i[n]), o.form === t.form && bm(o);
          }
          break e;
        case "textarea":
          xm(t, i.value, i.defaultValue);
          break e;
        case "select":
          (n = i.value), n != null && hi(t, !!i.multiple, n, !1);
      }
    }
  }
  var Zc = !1;
  function Tm(t, n, i) {
    if (Zc) return t(n, i);
    Zc = !0;
    try {
      var o = t(n);
      return o;
    } finally {
      if (
        ((Zc = !1),
        (gi !== null || yi !== null) &&
          (Js(), gi && ((n = gi), (t = yi), (yi = gi = null), wm(n), t)))
      )
        for (n = 0; n < t.length; n++) wm(t[n]);
    }
  }
  function wl(t, n) {
    var i = t.stateNode;
    if (i === null) return null;
    var o = i[hn] || null;
    if (o === null) return null;
    i = o[n];
    e: switch (n) {
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
        (o = !o.disabled) ||
          ((t = t.type),
          (o = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !o);
        break e;
      default:
        t = !1;
    }
    if (t) return null;
    if (i && typeof i != "function") throw Error(l(231, n, typeof i));
    return i;
  }
  var Jc = !1;
  if (Ar)
    try {
      var Tl = {};
      Object.defineProperty(Tl, "passive", {
        get: function () {
          Jc = !0;
        },
      }),
        window.addEventListener("test", Tl, Tl),
        window.removeEventListener("test", Tl, Tl);
    } catch {
      Jc = !1;
    }
  var ea = null,
    ef = null,
    ys = null;
  function Am() {
    if (ys) return ys;
    var t,
      n = ef,
      i = n.length,
      o,
      c = "value" in ea ? ea.value : ea.textContent,
      d = c.length;
    for (t = 0; t < i && n[t] === c[t]; t++);
    var y = i - t;
    for (o = 1; o <= y && n[i - o] === c[d - o]; o++);
    return (ys = c.slice(t, 1 < o ? 1 - o : void 0));
  }
  function vs(t) {
    var n = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && n === 13 && (t = 13))
        : (t = n),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function bs() {
    return !0;
  }
  function Om() {
    return !1;
  }
  function mn(t) {
    function n(i, o, c, d, y) {
      (this._reactName = i),
        (this._targetInst = c),
        (this.type = o),
        (this.nativeEvent = d),
        (this.target = y),
        (this.currentTarget = null);
      for (var w in t)
        t.hasOwnProperty(w) && ((i = t[w]), (this[w] = i ? i(d) : d[w]));
      return (
        (this.isDefaultPrevented = (
          d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1
        )
          ? bs
          : Om),
        (this.isPropagationStopped = Om),
        this
      );
    }
    return (
      E(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i &&
            (i.preventDefault
              ? i.preventDefault()
              : typeof i.returnValue != "unknown" && (i.returnValue = !1),
            (this.isDefaultPrevented = bs));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i &&
            (i.stopPropagation
              ? i.stopPropagation()
              : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
            (this.isPropagationStopped = bs));
        },
        persist: function () {},
        isPersistent: bs,
      }),
      n
    );
  }
  var Ma = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ss = mn(Ma),
    Al = E({}, Ma, { view: 0, detail: 0 }),
    Ax = mn(Al),
    tf,
    nf,
    Ol,
    xs = E({}, Al, {
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
      getModifierState: af,
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
          : (t !== Ol &&
              (Ol && t.type === "mousemove"
                ? ((tf = t.screenX - Ol.screenX), (nf = t.screenY - Ol.screenY))
                : (nf = tf = 0),
              (Ol = t)),
            tf);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : nf;
      },
    }),
    _m = mn(xs),
    Ox = E({}, xs, { dataTransfer: 0 }),
    _x = mn(Ox),
    Mx = E({}, Al, { relatedTarget: 0 }),
    rf = mn(Mx),
    Dx = E({}, Ma, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    zx = mn(Dx),
    Nx = E({}, Ma, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Bx = mn(Nx),
    kx = E({}, Ma, { data: 0 }),
    Mm = mn(kx),
    Ux = {
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
    Lx = {
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
    $x = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function jx(t) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(t)
      : (t = $x[t])
      ? !!n[t]
      : !1;
  }
  function af() {
    return jx;
  }
  var Hx = E({}, Al, {
      key: function (t) {
        if (t.key) {
          var n = Ux[t.key] || t.key;
          if (n !== "Unidentified") return n;
        }
        return t.type === "keypress"
          ? ((t = vs(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? Lx[t.keyCode] || "Unidentified"
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
      getModifierState: af,
      charCode: function (t) {
        return t.type === "keypress" ? vs(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? vs(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    Px = mn(Hx),
    qx = E({}, xs, {
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
    Dm = mn(qx),
    Vx = E({}, Al, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: af,
    }),
    Fx = mn(Vx),
    Gx = E({}, Ma, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Yx = mn(Gx),
    Ix = E({}, xs, {
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
    Xx = mn(Ix),
    Kx = E({}, Ma, { newState: 0, oldState: 0 }),
    Qx = mn(Kx),
    Wx = [9, 13, 27, 32],
    lf = Ar && "CompositionEvent" in window,
    _l = null;
  Ar && "documentMode" in document && (_l = document.documentMode);
  var Zx = Ar && "TextEvent" in window && !_l,
    zm = Ar && (!lf || (_l && 8 < _l && 11 >= _l)),
    Nm = " ",
    Bm = !1;
  function km(t, n) {
    switch (t) {
      case "keyup":
        return Wx.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Um(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var vi = !1;
  function Jx(t, n) {
    switch (t) {
      case "compositionend":
        return Um(n);
      case "keypress":
        return n.which !== 32 ? null : ((Bm = !0), Nm);
      case "textInput":
        return (t = n.data), t === Nm && Bm ? null : t;
      default:
        return null;
    }
  }
  function eE(t, n) {
    if (vi)
      return t === "compositionend" || (!lf && km(t, n))
        ? ((t = Am()), (ys = ef = ea = null), (vi = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return zm && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var tE = {
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
  function Lm(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n === "input" ? !!tE[t.type] : n === "textarea";
  }
  function $m(t, n, i, o) {
    gi ? (yi ? yi.push(o) : (yi = [o])) : (gi = o),
      (n = au(n, "onChange")),
      0 < n.length &&
        ((i = new Ss("onChange", "change", null, i, o)),
        t.push({ event: i, listeners: n }));
  }
  var Ml = null,
    Dl = null;
  function nE(t) {
    c0(t, 0);
  }
  function Es(t) {
    var n = Cl(t);
    if (bm(n)) return t;
  }
  function jm(t, n) {
    if (t === "change") return n;
  }
  var Hm = !1;
  if (Ar) {
    var of;
    if (Ar) {
      var sf = "oninput" in document;
      if (!sf) {
        var Pm = document.createElement("div");
        Pm.setAttribute("oninput", "return;"),
          (sf = typeof Pm.oninput == "function");
      }
      of = sf;
    } else of = !1;
    Hm = of && (!document.documentMode || 9 < document.documentMode);
  }
  function qm() {
    Ml && (Ml.detachEvent("onpropertychange", Vm), (Dl = Ml = null));
  }
  function Vm(t) {
    if (t.propertyName === "value" && Es(Dl)) {
      var n = [];
      $m(n, Dl, t, Wc(t)), Tm(nE, n);
    }
  }
  function rE(t, n, i) {
    t === "focusin"
      ? (qm(), (Ml = n), (Dl = i), Ml.attachEvent("onpropertychange", Vm))
      : t === "focusout" && qm();
  }
  function aE(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Es(Dl);
  }
  function iE(t, n) {
    if (t === "click") return Es(n);
  }
  function lE(t, n) {
    if (t === "input" || t === "change") return Es(n);
  }
  function oE(t, n) {
    return (t === n && (t !== 0 || 1 / t === 1 / n)) || (t !== t && n !== n);
  }
  var En = typeof Object.is == "function" ? Object.is : oE;
  function zl(t, n) {
    if (En(t, n)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var i = Object.keys(t),
      o = Object.keys(n);
    if (i.length !== o.length) return !1;
    for (o = 0; o < i.length; o++) {
      var c = i[o];
      if (!q.call(n, c) || !En(t[c], n[c])) return !1;
    }
    return !0;
  }
  function Fm(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Gm(t, n) {
    var i = Fm(t);
    t = 0;
    for (var o; i; ) {
      if (i.nodeType === 3) {
        if (((o = t + i.textContent.length), t <= n && o >= n))
          return { node: i, offset: n - t };
        t = o;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = Fm(i);
    }
  }
  function Ym(t, n) {
    return t && n
      ? t === n
        ? !0
        : t && t.nodeType === 3
        ? !1
        : n && n.nodeType === 3
        ? Ym(t, n.parentNode)
        : "contains" in t
        ? t.contains(n)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(n) & 16)
        : !1
      : !1;
  }
  function Im(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var n = ms(t.document); n instanceof t.HTMLIFrameElement; ) {
      try {
        var i = typeof n.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) t = n.contentWindow;
      else break;
      n = ms(t.document);
    }
    return n;
  }
  function uf(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        n === "textarea" ||
        t.contentEditable === "true")
    );
  }
  function sE(t, n) {
    var i = Im(n);
    n = t.focusedElem;
    var o = t.selectionRange;
    if (
      i !== n &&
      n &&
      n.ownerDocument &&
      Ym(n.ownerDocument.documentElement, n)
    ) {
      if (o !== null && uf(n)) {
        if (
          ((t = o.start),
          (i = o.end),
          i === void 0 && (i = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(i, n.value.length));
        else if (
          ((i = ((t = n.ownerDocument || document) && t.defaultView) || window),
          i.getSelection)
        ) {
          i = i.getSelection();
          var c = n.textContent.length,
            d = Math.min(o.start, c);
          (o = o.end === void 0 ? d : Math.min(o.end, c)),
            !i.extend && d > o && ((c = o), (o = d), (d = c)),
            (c = Gm(n, d));
          var y = Gm(n, o);
          c &&
            y &&
            (i.rangeCount !== 1 ||
              i.anchorNode !== c.node ||
              i.anchorOffset !== c.offset ||
              i.focusNode !== y.node ||
              i.focusOffset !== y.offset) &&
            ((t = t.createRange()),
            t.setStart(c.node, c.offset),
            i.removeAllRanges(),
            d > o
              ? (i.addRange(t), i.extend(y.node, y.offset))
              : (t.setEnd(y.node, y.offset), i.addRange(t)));
        }
      }
      for (t = [], i = n; (i = i.parentNode); )
        i.nodeType === 1 &&
          t.push({ element: i, left: i.scrollLeft, top: i.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (i = t[n]),
          (i.element.scrollLeft = i.left),
          (i.element.scrollTop = i.top);
    }
  }
  var uE = Ar && "documentMode" in document && 11 >= document.documentMode,
    bi = null,
    cf = null,
    Nl = null,
    ff = !1;
  function Xm(t, n, i) {
    var o =
      i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    ff ||
      bi == null ||
      bi !== ms(o) ||
      ((o = bi),
      "selectionStart" in o && uf(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = (
            (o.ownerDocument && o.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (Nl && zl(Nl, o)) ||
        ((Nl = o),
        (o = au(cf, "onSelect")),
        0 < o.length &&
          ((n = new Ss("onSelect", "select", null, n, i)),
          t.push({ event: n, listeners: o }),
          (n.target = bi))));
  }
  function Da(t, n) {
    var i = {};
    return (
      (i[t.toLowerCase()] = n.toLowerCase()),
      (i["Webkit" + t] = "webkit" + n),
      (i["Moz" + t] = "moz" + n),
      i
    );
  }
  var Si = {
      animationend: Da("Animation", "AnimationEnd"),
      animationiteration: Da("Animation", "AnimationIteration"),
      animationstart: Da("Animation", "AnimationStart"),
      transitionrun: Da("Transition", "TransitionRun"),
      transitionstart: Da("Transition", "TransitionStart"),
      transitioncancel: Da("Transition", "TransitionCancel"),
      transitionend: Da("Transition", "TransitionEnd"),
    },
    df = {},
    Km = {};
  Ar &&
    ((Km = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Si.animationend.animation,
      delete Si.animationiteration.animation,
      delete Si.animationstart.animation),
    "TransitionEvent" in window || delete Si.transitionend.transition);
  function za(t) {
    if (df[t]) return df[t];
    if (!Si[t]) return t;
    var n = Si[t],
      i;
    for (i in n) if (n.hasOwnProperty(i) && i in Km) return (df[t] = n[i]);
    return t;
  }
  var Qm = za("animationend"),
    Wm = za("animationiteration"),
    Zm = za("animationstart"),
    cE = za("transitionrun"),
    fE = za("transitionstart"),
    dE = za("transitioncancel"),
    Jm = za("transitionend"),
    eg = new Map(),
    tg =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " "
      );
  function Kn(t, n) {
    eg.set(t, n), _a(n, [t]);
  }
  var Nn = [],
    xi = 0,
    pf = 0;
  function Rs() {
    for (var t = xi, n = (pf = xi = 0); n < t; ) {
      var i = Nn[n];
      Nn[n++] = null;
      var o = Nn[n];
      Nn[n++] = null;
      var c = Nn[n];
      Nn[n++] = null;
      var d = Nn[n];
      if (((Nn[n++] = null), o !== null && c !== null)) {
        var y = o.pending;
        y === null ? (c.next = c) : ((c.next = y.next), (y.next = c)),
          (o.pending = c);
      }
      d !== 0 && ng(i, c, d);
    }
  }
  function Cs(t, n, i, o) {
    (Nn[xi++] = t),
      (Nn[xi++] = n),
      (Nn[xi++] = i),
      (Nn[xi++] = o),
      (pf |= o),
      (t.lanes |= o),
      (t = t.alternate),
      t !== null && (t.lanes |= o);
  }
  function hf(t, n, i, o) {
    return Cs(t, n, i, o), ws(t);
  }
  function ta(t, n) {
    return Cs(t, null, null, n), ws(t);
  }
  function ng(t, n, i) {
    t.lanes |= i;
    var o = t.alternate;
    o !== null && (o.lanes |= i);
    for (var c = !1, d = t.return; d !== null; )
      (d.childLanes |= i),
        (o = d.alternate),
        o !== null && (o.childLanes |= i),
        d.tag === 22 &&
          ((t = d.stateNode), t === null || t._visibility & 1 || (c = !0)),
        (t = d),
        (d = d.return);
    c &&
      n !== null &&
      t.tag === 3 &&
      ((d = t.stateNode),
      (c = 31 - Ke(i)),
      (d = d.hiddenUpdates),
      (t = d[c]),
      t === null ? (d[c] = [n]) : t.push(n),
      (n.lane = i | 536870912));
  }
  function ws(t) {
    if (50 < ao) throw ((ao = 0), (Sd = null), Error(l(185)));
    for (var n = t.return; n !== null; ) (t = n), (n = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ei = {},
    rg = new WeakMap();
  function Bn(t, n) {
    if (typeof t == "object" && t !== null) {
      var i = rg.get(t);
      return i !== void 0
        ? i
        : ((n = { value: t, source: n, stack: ae(n) }), rg.set(t, n), n);
    }
    return { value: t, source: n, stack: ae(n) };
  }
  var Ri = [],
    Ci = 0,
    Ts = null,
    As = 0,
    kn = [],
    Un = 0,
    Na = null,
    _r = 1,
    Mr = "";
  function Ba(t, n) {
    (Ri[Ci++] = As), (Ri[Ci++] = Ts), (Ts = t), (As = n);
  }
  function ag(t, n, i) {
    (kn[Un++] = _r), (kn[Un++] = Mr), (kn[Un++] = Na), (Na = t);
    var o = _r;
    t = Mr;
    var c = 32 - Ke(o) - 1;
    (o &= ~(1 << c)), (i += 1);
    var d = 32 - Ke(n) + c;
    if (30 < d) {
      var y = c - (c % 5);
      (d = (o & ((1 << y) - 1)).toString(32)),
        (o >>= y),
        (c -= y),
        (_r = (1 << (32 - Ke(n) + c)) | (i << c) | o),
        (Mr = d + t);
    } else (_r = (1 << d) | (i << c) | o), (Mr = t);
  }
  function mf(t) {
    t.return !== null && (Ba(t, 1), ag(t, 1, 0));
  }
  function gf(t) {
    for (; t === Ts; )
      (Ts = Ri[--Ci]), (Ri[Ci] = null), (As = Ri[--Ci]), (Ri[Ci] = null);
    for (; t === Na; )
      (Na = kn[--Un]),
        (kn[Un] = null),
        (Mr = kn[--Un]),
        (kn[Un] = null),
        (_r = kn[--Un]),
        (kn[Un] = null);
  }
  var un = null,
    Wt = null,
    Ie = !1,
    Qn = null,
    sr = !1,
    yf = Error(l(519));
  function ka(t) {
    var n = Error(l(418, ""));
    throw (Ul(Bn(n, t)), yf);
  }
  function ig(t) {
    var n = t.stateNode,
      i = t.type,
      o = t.memoizedProps;
    switch (((n[tn] = t), (n[hn] = o), i)) {
      case "dialog":
        Ve("cancel", n), Ve("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ve("load", n);
        break;
      case "video":
      case "audio":
        for (i = 0; i < lo.length; i++) Ve(lo[i], n);
        break;
      case "source":
        Ve("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Ve("error", n), Ve("load", n);
        break;
      case "details":
        Ve("toggle", n);
        break;
      case "input":
        Ve("invalid", n),
          Sm(
            n,
            o.value,
            o.defaultValue,
            o.checked,
            o.defaultChecked,
            o.type,
            o.name,
            !0
          ),
          hs(n);
        break;
      case "select":
        Ve("invalid", n);
        break;
      case "textarea":
        Ve("invalid", n), Em(n, o.value, o.defaultValue, o.children), hs(n);
    }
    (i = o.children),
      (typeof i != "string" && typeof i != "number" && typeof i != "bigint") ||
      n.textContent === "" + i ||
      o.suppressHydrationWarning === !0 ||
      h0(n.textContent, i)
        ? (o.popover != null && (Ve("beforetoggle", n), Ve("toggle", n)),
          o.onScroll != null && Ve("scroll", n),
          o.onScrollEnd != null && Ve("scrollend", n),
          o.onClick != null && (n.onclick = iu),
          (n = !0))
        : (n = !1),
      n || ka(t);
  }
  function lg(t) {
    for (un = t.return; un; )
      switch (un.tag) {
        case 3:
        case 27:
          sr = !0;
          return;
        case 5:
        case 13:
          sr = !1;
          return;
        default:
          un = un.return;
      }
  }
  function Bl(t) {
    if (t !== un) return !1;
    if (!Ie) return lg(t), (Ie = !0), !1;
    var n = !1,
      i;
    if (
      ((i = t.tag !== 3 && t.tag !== 27) &&
        ((i = t.tag === 5) &&
          ((i = t.type),
          (i =
            !(i !== "form" && i !== "button") || Ld(t.type, t.memoizedProps))),
        (i = !i)),
      i && (n = !0),
      n && Wt && ka(t),
      lg(t),
      t.tag === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(l(317));
      e: {
        for (t = t.nextSibling, n = 0; t; ) {
          if (t.nodeType === 8)
            if (((i = t.data), i === "/$")) {
              if (n === 0) {
                Wt = Zn(t.nextSibling);
                break e;
              }
              n--;
            } else (i !== "$" && i !== "$!" && i !== "$?") || n++;
          t = t.nextSibling;
        }
        Wt = null;
      }
    } else Wt = un ? Zn(t.stateNode.nextSibling) : null;
    return !0;
  }
  function kl() {
    (Wt = un = null), (Ie = !1);
  }
  function Ul(t) {
    Qn === null ? (Qn = [t]) : Qn.push(t);
  }
  var Ll = Error(l(460)),
    og = Error(l(474)),
    vf = { then: function () {} };
  function sg(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function Os() {}
  function ug(t, n, i) {
    switch (
      ((i = t[i]),
      i === void 0 ? t.push(n) : i !== n && (n.then(Os, Os), (n = i)),
      n.status)
    ) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw ((t = n.reason), t === Ll ? Error(l(483)) : t);
      default:
        if (typeof n.status == "string") n.then(Os, Os);
        else {
          if (((t = ht), t !== null && 100 < t.shellSuspendCounter))
            throw Error(l(482));
          (t = n),
            (t.status = "pending"),
            t.then(
              function (o) {
                if (n.status === "pending") {
                  var c = n;
                  (c.status = "fulfilled"), (c.value = o);
                }
              },
              function (o) {
                if (n.status === "pending") {
                  var c = n;
                  (c.status = "rejected"), (c.reason = o);
                }
              }
            );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw ((t = n.reason), t === Ll ? Error(l(483)) : t);
        }
        throw (($l = n), Ll);
    }
  }
  var $l = null;
  function cg() {
    if ($l === null) throw Error(l(459));
    var t = $l;
    return ($l = null), t;
  }
  var wi = null,
    jl = 0;
  function _s(t) {
    var n = jl;
    return (jl += 1), wi === null && (wi = []), ug(wi, t, n);
  }
  function Hl(t, n) {
    (n = n.props.ref), (t.ref = n !== void 0 ? n : null);
  }
  function Ms(t, n) {
    throw n.$$typeof === u
      ? Error(l(525))
      : ((t = Object.prototype.toString.call(n)),
        Error(
          l(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(n).join(", ") + "}"
              : t
          )
        ));
  }
  function fg(t) {
    var n = t._init;
    return n(t._payload);
  }
  function dg(t) {
    function n(P, k) {
      if (t) {
        var V = P.deletions;
        V === null ? ((P.deletions = [k]), (P.flags |= 16)) : V.push(k);
      }
    }
    function i(P, k) {
      if (!t) return null;
      for (; k !== null; ) n(P, k), (k = k.sibling);
      return null;
    }
    function o(P) {
      for (var k = new Map(); P !== null; )
        P.key !== null ? k.set(P.key, P) : k.set(P.index, P), (P = P.sibling);
      return k;
    }
    function c(P, k) {
      return (P = pa(P, k)), (P.index = 0), (P.sibling = null), P;
    }
    function d(P, k, V) {
      return (
        (P.index = V),
        t
          ? ((V = P.alternate),
            V !== null
              ? ((V = V.index), V < k ? ((P.flags |= 33554434), k) : V)
              : ((P.flags |= 33554434), k))
          : ((P.flags |= 1048576), k)
      );
    }
    function y(P) {
      return t && P.alternate === null && (P.flags |= 33554434), P;
    }
    function w(P, k, V, ie) {
      return k === null || k.tag !== 6
        ? ((k = dd(V, P.mode, ie)), (k.return = P), k)
        : ((k = c(k, V)), (k.return = P), k);
    }
    function z(P, k, V, ie) {
      var Se = V.type;
      return Se === m
        ? ne(P, k, V.props.children, ie, V.key)
        : k !== null &&
          (k.elementType === Se ||
            (typeof Se == "object" &&
              Se !== null &&
              Se.$$typeof === M &&
              fg(Se) === k.type))
        ? ((k = c(k, V.props)), Hl(k, V), (k.return = P), k)
        : ((k = Xs(V.type, V.key, V.props, null, P.mode, ie)),
          Hl(k, V),
          (k.return = P),
          k);
    }
    function U(P, k, V, ie) {
      return k === null ||
        k.tag !== 4 ||
        k.stateNode.containerInfo !== V.containerInfo ||
        k.stateNode.implementation !== V.implementation
        ? ((k = pd(V, P.mode, ie)), (k.return = P), k)
        : ((k = c(k, V.children || [])), (k.return = P), k);
    }
    function ne(P, k, V, ie, Se) {
      return k === null || k.tag !== 7
        ? ((k = Ga(V, P.mode, ie, Se)), (k.return = P), k)
        : ((k = c(k, V)), (k.return = P), k);
    }
    function le(P, k, V) {
      if (
        (typeof k == "string" && k !== "") ||
        typeof k == "number" ||
        typeof k == "bigint"
      )
        return (k = dd("" + k, P.mode, V)), (k.return = P), k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case f:
            return (
              (V = Xs(k.type, k.key, k.props, null, P.mode, V)),
              Hl(V, k),
              (V.return = P),
              V
            );
          case p:
            return (k = pd(k, P.mode, V)), (k.return = P), k;
          case M:
            var ie = k._init;
            return (k = ie(k._payload)), le(P, k, V);
        }
        if (pe(k) || j(k))
          return (k = Ga(k, P.mode, V, null)), (k.return = P), k;
        if (typeof k.then == "function") return le(P, _s(k), V);
        if (k.$$typeof === R) return le(P, Gs(P, k), V);
        Ms(P, k);
      }
      return null;
    }
    function F(P, k, V, ie) {
      var Se = k !== null ? k.key : null;
      if (
        (typeof V == "string" && V !== "") ||
        typeof V == "number" ||
        typeof V == "bigint"
      )
        return Se !== null ? null : w(P, k, "" + V, ie);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case f:
            return V.key === Se ? z(P, k, V, ie) : null;
          case p:
            return V.key === Se ? U(P, k, V, ie) : null;
          case M:
            return (Se = V._init), (V = Se(V._payload)), F(P, k, V, ie);
        }
        if (pe(V) || j(V)) return Se !== null ? null : ne(P, k, V, ie, null);
        if (typeof V.then == "function") return F(P, k, _s(V), ie);
        if (V.$$typeof === R) return F(P, k, Gs(P, V), ie);
        Ms(P, V);
      }
      return null;
    }
    function te(P, k, V, ie, Se) {
      if (
        (typeof ie == "string" && ie !== "") ||
        typeof ie == "number" ||
        typeof ie == "bigint"
      )
        return (P = P.get(V) || null), w(k, P, "" + ie, Se);
      if (typeof ie == "object" && ie !== null) {
        switch (ie.$$typeof) {
          case f:
            return (
              (P = P.get(ie.key === null ? V : ie.key) || null), z(k, P, ie, Se)
            );
          case p:
            return (
              (P = P.get(ie.key === null ? V : ie.key) || null), U(k, P, ie, Se)
            );
          case M:
            var Pe = ie._init;
            return (ie = Pe(ie._payload)), te(P, k, V, ie, Se);
        }
        if (pe(ie) || j(ie))
          return (P = P.get(V) || null), ne(k, P, ie, Se, null);
        if (typeof ie.then == "function") return te(P, k, V, _s(ie), Se);
        if (ie.$$typeof === R) return te(P, k, V, Gs(k, ie), Se);
        Ms(k, ie);
      }
      return null;
    }
    function xe(P, k, V, ie) {
      for (
        var Se = null, Pe = null, Re = k, Oe = (k = 0), Kt = null;
        Re !== null && Oe < V.length;
        Oe++
      ) {
        Re.index > Oe ? ((Kt = Re), (Re = null)) : (Kt = Re.sibling);
        var Xe = F(P, Re, V[Oe], ie);
        if (Xe === null) {
          Re === null && (Re = Kt);
          break;
        }
        t && Re && Xe.alternate === null && n(P, Re),
          (k = d(Xe, k, Oe)),
          Pe === null ? (Se = Xe) : (Pe.sibling = Xe),
          (Pe = Xe),
          (Re = Kt);
      }
      if (Oe === V.length) return i(P, Re), Ie && Ba(P, Oe), Se;
      if (Re === null) {
        for (; Oe < V.length; Oe++)
          (Re = le(P, V[Oe], ie)),
            Re !== null &&
              ((k = d(Re, k, Oe)),
              Pe === null ? (Se = Re) : (Pe.sibling = Re),
              (Pe = Re));
        return Ie && Ba(P, Oe), Se;
      }
      for (Re = o(Re); Oe < V.length; Oe++)
        (Kt = te(Re, P, Oe, V[Oe], ie)),
          Kt !== null &&
            (t &&
              Kt.alternate !== null &&
              Re.delete(Kt.key === null ? Oe : Kt.key),
            (k = d(Kt, k, Oe)),
            Pe === null ? (Se = Kt) : (Pe.sibling = Kt),
            (Pe = Kt));
      return (
        t &&
          Re.forEach(function (Sa) {
            return n(P, Sa);
          }),
        Ie && Ba(P, Oe),
        Se
      );
    }
    function ze(P, k, V, ie) {
      if (V == null) throw Error(l(151));
      for (
        var Se = null,
          Pe = null,
          Re = k,
          Oe = (k = 0),
          Kt = null,
          Xe = V.next();
        Re !== null && !Xe.done;
        Oe++, Xe = V.next()
      ) {
        Re.index > Oe ? ((Kt = Re), (Re = null)) : (Kt = Re.sibling);
        var Sa = F(P, Re, Xe.value, ie);
        if (Sa === null) {
          Re === null && (Re = Kt);
          break;
        }
        t && Re && Sa.alternate === null && n(P, Re),
          (k = d(Sa, k, Oe)),
          Pe === null ? (Se = Sa) : (Pe.sibling = Sa),
          (Pe = Sa),
          (Re = Kt);
      }
      if (Xe.done) return i(P, Re), Ie && Ba(P, Oe), Se;
      if (Re === null) {
        for (; !Xe.done; Oe++, Xe = V.next())
          (Xe = le(P, Xe.value, ie)),
            Xe !== null &&
              ((k = d(Xe, k, Oe)),
              Pe === null ? (Se = Xe) : (Pe.sibling = Xe),
              (Pe = Xe));
        return Ie && Ba(P, Oe), Se;
      }
      for (Re = o(Re); !Xe.done; Oe++, Xe = V.next())
        (Xe = te(Re, P, Oe, Xe.value, ie)),
          Xe !== null &&
            (t &&
              Xe.alternate !== null &&
              Re.delete(Xe.key === null ? Oe : Xe.key),
            (k = d(Xe, k, Oe)),
            Pe === null ? (Se = Xe) : (Pe.sibling = Xe),
            (Pe = Xe));
      return (
        t &&
          Re.forEach(function (TR) {
            return n(P, TR);
          }),
        Ie && Ba(P, Oe),
        Se
      );
    }
    function wt(P, k, V, ie) {
      if (
        (typeof V == "object" &&
          V !== null &&
          V.type === m &&
          V.key === null &&
          (V = V.props.children),
        typeof V == "object" && V !== null)
      ) {
        switch (V.$$typeof) {
          case f:
            e: {
              for (var Se = V.key; k !== null; ) {
                if (k.key === Se) {
                  if (((Se = V.type), Se === m)) {
                    if (k.tag === 7) {
                      i(P, k.sibling),
                        (ie = c(k, V.props.children)),
                        (ie.return = P),
                        (P = ie);
                      break e;
                    }
                  } else if (
                    k.elementType === Se ||
                    (typeof Se == "object" &&
                      Se !== null &&
                      Se.$$typeof === M &&
                      fg(Se) === k.type)
                  ) {
                    i(P, k.sibling),
                      (ie = c(k, V.props)),
                      Hl(ie, V),
                      (ie.return = P),
                      (P = ie);
                    break e;
                  }
                  i(P, k);
                  break;
                } else n(P, k);
                k = k.sibling;
              }
              V.type === m
                ? ((ie = Ga(V.props.children, P.mode, ie, V.key)),
                  (ie.return = P),
                  (P = ie))
                : ((ie = Xs(V.type, V.key, V.props, null, P.mode, ie)),
                  Hl(ie, V),
                  (ie.return = P),
                  (P = ie));
            }
            return y(P);
          case p:
            e: {
              for (Se = V.key; k !== null; ) {
                if (k.key === Se)
                  if (
                    k.tag === 4 &&
                    k.stateNode.containerInfo === V.containerInfo &&
                    k.stateNode.implementation === V.implementation
                  ) {
                    i(P, k.sibling),
                      (ie = c(k, V.children || [])),
                      (ie.return = P),
                      (P = ie);
                    break e;
                  } else {
                    i(P, k);
                    break;
                  }
                else n(P, k);
                k = k.sibling;
              }
              (ie = pd(V, P.mode, ie)), (ie.return = P), (P = ie);
            }
            return y(P);
          case M:
            return (Se = V._init), (V = Se(V._payload)), wt(P, k, V, ie);
        }
        if (pe(V)) return xe(P, k, V, ie);
        if (j(V)) {
          if (((Se = j(V)), typeof Se != "function")) throw Error(l(150));
          return (V = Se.call(V)), ze(P, k, V, ie);
        }
        if (typeof V.then == "function") return wt(P, k, _s(V), ie);
        if (V.$$typeof === R) return wt(P, k, Gs(P, V), ie);
        Ms(P, V);
      }
      return (typeof V == "string" && V !== "") ||
        typeof V == "number" ||
        typeof V == "bigint"
        ? ((V = "" + V),
          k !== null && k.tag === 6
            ? (i(P, k.sibling), (ie = c(k, V)), (ie.return = P), (P = ie))
            : (i(P, k), (ie = dd(V, P.mode, ie)), (ie.return = P), (P = ie)),
          y(P))
        : i(P, k);
    }
    return function (P, k, V, ie) {
      try {
        jl = 0;
        var Se = wt(P, k, V, ie);
        return (wi = null), Se;
      } catch (Re) {
        if (Re === Ll) throw Re;
        var Pe = Hn(29, Re, null, P.mode);
        return (Pe.lanes = ie), (Pe.return = P), Pe;
      } finally {
      }
    };
  }
  var Ua = dg(!0),
    pg = dg(!1),
    Ti = Ce(null),
    Ds = Ce(0);
  function hg(t, n) {
    (t = Pr), ve(Ds, t), ve(Ti, n), (Pr = t | n.baseLanes);
  }
  function bf() {
    ve(Ds, Pr), ve(Ti, Ti.current);
  }
  function Sf() {
    (Pr = Ds.current), we(Ti), we(Ds);
  }
  var Ln = Ce(null),
    ur = null;
  function na(t) {
    var n = t.alternate;
    ve(qt, qt.current & 1),
      ve(Ln, t),
      ur === null &&
        (n === null || Ti.current !== null || n.memoizedState !== null) &&
        (ur = t);
  }
  function mg(t) {
    if (t.tag === 22) {
      if ((ve(qt, qt.current), ve(Ln, t), ur === null)) {
        var n = t.alternate;
        n !== null && n.memoizedState !== null && (ur = t);
      }
    } else ra();
  }
  function ra() {
    ve(qt, qt.current), ve(Ln, Ln.current);
  }
  function Dr(t) {
    we(Ln), ur === t && (ur = null), we(qt);
  }
  var qt = Ce(0);
  function zs(t) {
    for (var n = t; n !== null; ) {
      if (n.tag === 13) {
        var i = n.memoizedState;
        if (
          i !== null &&
          ((i = i.dehydrated), i === null || i.data === "$?" || i.data === "$!")
        )
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if (n.flags & 128) return n;
      } else if (n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return null;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
  }
  var pE =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              n = (this.signal = {
                aborted: !1,
                addEventListener: function (i, o) {
                  t.push(o);
                },
              });
            this.abort = function () {
              (n.aborted = !0),
                t.forEach(function (i) {
                  return i();
                });
            };
          },
    hE = e.unstable_scheduleCallback,
    mE = e.unstable_NormalPriority,
    Vt = {
      $$typeof: R,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function xf() {
    return { controller: new pE(), data: new Map(), refCount: 0 };
  }
  function Pl(t) {
    t.refCount--,
      t.refCount === 0 &&
        hE(mE, function () {
          t.controller.abort();
        });
  }
  var ql = null,
    Ef = 0,
    Ai = 0,
    Oi = null;
  function gE(t, n) {
    if (ql === null) {
      var i = (ql = []);
      (Ef = 0),
        (Ai = Od()),
        (Oi = {
          status: "pending",
          value: void 0,
          then: function (o) {
            i.push(o);
          },
        });
    }
    return Ef++, n.then(gg, gg), n;
  }
  function gg() {
    if (--Ef === 0 && ql !== null) {
      Oi !== null && (Oi.status = "fulfilled");
      var t = ql;
      (ql = null), (Ai = 0), (Oi = null);
      for (var n = 0; n < t.length; n++) (0, t[n])();
    }
  }
  function yE(t, n) {
    var i = [],
      o = {
        status: "pending",
        value: null,
        reason: null,
        then: function (c) {
          i.push(c);
        },
      };
    return (
      t.then(
        function () {
          (o.status = "fulfilled"), (o.value = n);
          for (var c = 0; c < i.length; c++) (0, i[c])(n);
        },
        function (c) {
          for (o.status = "rejected", o.reason = c, c = 0; c < i.length; c++)
            (0, i[c])(void 0);
        }
      ),
      o
    );
  }
  var yg = G.S;
  G.S = function (t, n) {
    typeof n == "object" &&
      n !== null &&
      typeof n.then == "function" &&
      gE(t, n),
      yg !== null && yg(t, n);
  };
  var La = Ce(null);
  function Rf() {
    var t = La.current;
    return t !== null ? t : ht.pooledCache;
  }
  function Ns(t, n) {
    n === null ? ve(La, La.current) : ve(La, n.pool);
  }
  function vg() {
    var t = Rf();
    return t === null ? null : { parent: Vt._currentValue, pool: t };
  }
  var aa = 0,
    He = null,
    nt = null,
    Ut = null,
    Bs = !1,
    _i = !1,
    $a = !1,
    ks = 0,
    Vl = 0,
    Mi = null,
    vE = 0;
  function _t() {
    throw Error(l(321));
  }
  function Cf(t, n) {
    if (n === null) return !1;
    for (var i = 0; i < n.length && i < t.length; i++)
      if (!En(t[i], n[i])) return !1;
    return !0;
  }
  function wf(t, n, i, o, c, d) {
    return (
      (aa = d),
      (He = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (G.H = t === null || t.memoizedState === null ? ja : ia),
      ($a = !1),
      (d = i(o, c)),
      ($a = !1),
      _i && (d = Sg(n, i, o, c)),
      bg(t),
      d
    );
  }
  function bg(t) {
    G.H = cr;
    var n = nt !== null && nt.next !== null;
    if (((aa = 0), (Ut = nt = He = null), (Bs = !1), (Vl = 0), (Mi = null), n))
      throw Error(l(300));
    t === null ||
      It ||
      ((t = t.dependencies), t !== null && Fs(t) && (It = !0));
  }
  function Sg(t, n, i, o) {
    He = t;
    var c = 0;
    do {
      if ((_i && (Mi = null), (Vl = 0), (_i = !1), 25 <= c))
        throw Error(l(301));
      if (((c += 1), (Ut = nt = null), t.updateQueue != null)) {
        var d = t.updateQueue;
        (d.lastEffect = null),
          (d.events = null),
          (d.stores = null),
          d.memoCache != null && (d.memoCache.index = 0);
      }
      (G.H = Ha), (d = n(i, o));
    } while (_i);
    return d;
  }
  function bE() {
    var t = G.H,
      n = t.useState()[0];
    return (
      (n = typeof n.then == "function" ? Fl(n) : n),
      (t = t.useState()[0]),
      (nt !== null ? nt.memoizedState : null) !== t && (He.flags |= 1024),
      n
    );
  }
  function Tf() {
    var t = ks !== 0;
    return (ks = 0), t;
  }
  function Af(t, n, i) {
    (n.updateQueue = t.updateQueue), (n.flags &= -2053), (t.lanes &= ~i);
  }
  function Of(t) {
    if (Bs) {
      for (t = t.memoizedState; t !== null; ) {
        var n = t.queue;
        n !== null && (n.pending = null), (t = t.next);
      }
      Bs = !1;
    }
    (aa = 0), (Ut = nt = He = null), (_i = !1), (Vl = ks = 0), (Mi = null);
  }
  function gn() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ut === null ? (He.memoizedState = Ut = t) : (Ut = Ut.next = t), Ut;
  }
  function Lt() {
    if (nt === null) {
      var t = He.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = nt.next;
    var n = Ut === null ? He.memoizedState : Ut.next;
    if (n !== null) (Ut = n), (nt = t);
    else {
      if (t === null)
        throw He.alternate === null ? Error(l(467)) : Error(l(310));
      (nt = t),
        (t = {
          memoizedState: nt.memoizedState,
          baseState: nt.baseState,
          baseQueue: nt.baseQueue,
          queue: nt.queue,
          next: null,
        }),
        Ut === null ? (He.memoizedState = Ut = t) : (Ut = Ut.next = t);
    }
    return Ut;
  }
  var Us;
  Us = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function Fl(t) {
    var n = Vl;
    return (
      (Vl += 1),
      Mi === null && (Mi = []),
      (t = ug(Mi, t, n)),
      (n = He),
      (Ut === null ? n.memoizedState : Ut.next) === null &&
        ((n = n.alternate),
        (G.H = n === null || n.memoizedState === null ? ja : ia)),
      t
    );
  }
  function Ls(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Fl(t);
      if (t.$$typeof === R) return nn(t);
    }
    throw Error(l(438, String(t)));
  }
  function _f(t) {
    var n = null,
      i = He.updateQueue;
    if ((i !== null && (n = i.memoCache), n == null)) {
      var o = He.alternate;
      o !== null &&
        ((o = o.updateQueue),
        o !== null &&
          ((o = o.memoCache),
          o != null &&
            (n = {
              data: o.data.map(function (c) {
                return c.slice();
              }),
              index: 0,
            })));
    }
    if (
      (n == null && (n = { data: [], index: 0 }),
      i === null && ((i = Us()), (He.updateQueue = i)),
      (i.memoCache = n),
      (i = n.data[n.index]),
      i === void 0)
    )
      for (i = n.data[n.index] = Array(t), o = 0; o < t; o++) i[o] = D;
    return n.index++, i;
  }
  function zr(t, n) {
    return typeof n == "function" ? n(t) : n;
  }
  function $s(t) {
    var n = Lt();
    return Mf(n, nt, t);
  }
  function Mf(t, n, i) {
    var o = t.queue;
    if (o === null) throw Error(l(311));
    o.lastRenderedReducer = i;
    var c = t.baseQueue,
      d = o.pending;
    if (d !== null) {
      if (c !== null) {
        var y = c.next;
        (c.next = d.next), (d.next = y);
      }
      (n.baseQueue = c = d), (o.pending = null);
    }
    if (((d = t.baseState), c === null)) t.memoizedState = d;
    else {
      n = c.next;
      var w = (y = null),
        z = null,
        U = n,
        ne = !1;
      do {
        var le = U.lane & -536870913;
        if (le !== U.lane ? (Ge & le) === le : (aa & le) === le) {
          var F = U.revertLane;
          if (F === 0)
            z !== null &&
              (z = z.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: U.action,
                  hasEagerState: U.hasEagerState,
                  eagerState: U.eagerState,
                  next: null,
                }),
              le === Ai && (ne = !0);
          else if ((aa & F) === F) {
            (U = U.next), F === Ai && (ne = !0);
            continue;
          } else
            (le = {
              lane: 0,
              revertLane: U.revertLane,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null,
            }),
              z === null ? ((w = z = le), (y = d)) : (z = z.next = le),
              (He.lanes |= F),
              (ha |= F);
          (le = U.action),
            $a && i(d, le),
            (d = U.hasEagerState ? U.eagerState : i(d, le));
        } else
          (F = {
            lane: le,
            revertLane: U.revertLane,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null,
          }),
            z === null ? ((w = z = F), (y = d)) : (z = z.next = F),
            (He.lanes |= le),
            (ha |= le);
        U = U.next;
      } while (U !== null && U !== n);
      if (
        (z === null ? (y = d) : (z.next = w),
        !En(d, t.memoizedState) && ((It = !0), ne && ((i = Oi), i !== null)))
      )
        throw i;
      (t.memoizedState = d),
        (t.baseState = y),
        (t.baseQueue = z),
        (o.lastRenderedState = d);
    }
    return c === null && (o.lanes = 0), [t.memoizedState, o.dispatch];
  }
  function Df(t) {
    var n = Lt(),
      i = n.queue;
    if (i === null) throw Error(l(311));
    i.lastRenderedReducer = t;
    var o = i.dispatch,
      c = i.pending,
      d = n.memoizedState;
    if (c !== null) {
      i.pending = null;
      var y = (c = c.next);
      do (d = t(d, y.action)), (y = y.next);
      while (y !== c);
      En(d, n.memoizedState) || (It = !0),
        (n.memoizedState = d),
        n.baseQueue === null && (n.baseState = d),
        (i.lastRenderedState = d);
    }
    return [d, o];
  }
  function xg(t, n, i) {
    var o = He,
      c = Lt(),
      d = Ie;
    if (d) {
      if (i === void 0) throw Error(l(407));
      i = i();
    } else i = n();
    var y = !En((nt || c).memoizedState, i);
    if (
      (y && ((c.memoizedState = i), (It = !0)),
      (c = c.queue),
      Bf(Cg.bind(null, o, c, t), [t]),
      c.getSnapshot !== n || y || (Ut !== null && Ut.memoizedState.tag & 1))
    ) {
      if (
        ((o.flags |= 2048),
        Di(9, Rg.bind(null, o, c, i, n), { destroy: void 0 }, null),
        ht === null)
      )
        throw Error(l(349));
      d || aa & 60 || Eg(o, n, i);
    }
    return i;
  }
  function Eg(t, n, i) {
    (t.flags |= 16384),
      (t = { getSnapshot: n, value: i }),
      (n = He.updateQueue),
      n === null
        ? ((n = Us()), (He.updateQueue = n), (n.stores = [t]))
        : ((i = n.stores), i === null ? (n.stores = [t]) : i.push(t));
  }
  function Rg(t, n, i, o) {
    (n.value = i), (n.getSnapshot = o), wg(n) && Tg(t);
  }
  function Cg(t, n, i) {
    return i(function () {
      wg(n) && Tg(t);
    });
  }
  function wg(t) {
    var n = t.getSnapshot;
    t = t.value;
    try {
      var i = n();
      return !En(t, i);
    } catch {
      return !0;
    }
  }
  function Tg(t) {
    var n = ta(t, 2);
    n !== null && cn(n, t, 2);
  }
  function zf(t) {
    var n = gn();
    if (typeof t == "function") {
      var i = t;
      if (((t = i()), $a)) {
        Fe(!0);
        try {
          i();
        } finally {
          Fe(!1);
        }
      }
    }
    return (
      (n.memoizedState = n.baseState = t),
      (n.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: zr,
        lastRenderedState: t,
      }),
      n
    );
  }
  function Ag(t, n, i, o) {
    return (t.baseState = i), Mf(t, nt, typeof o == "function" ? o : zr);
  }
  function SE(t, n, i, o, c) {
    if (Ps(t)) throw Error(l(485));
    if (((t = n.action), t !== null)) {
      var d = {
        payload: c,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (y) {
          d.listeners.push(y);
        },
      };
      G.T !== null ? i(!0) : (d.isTransition = !1),
        o(d),
        (i = n.pending),
        i === null
          ? ((d.next = n.pending = d), Og(n, d))
          : ((d.next = i.next), (n.pending = i.next = d));
    }
  }
  function Og(t, n) {
    var i = n.action,
      o = n.payload,
      c = t.state;
    if (n.isTransition) {
      var d = G.T,
        y = {};
      G.T = y;
      try {
        var w = i(c, o),
          z = G.S;
        z !== null && z(y, w), _g(t, n, w);
      } catch (U) {
        Nf(t, n, U);
      } finally {
        G.T = d;
      }
    } else
      try {
        (d = i(c, o)), _g(t, n, d);
      } catch (U) {
        Nf(t, n, U);
      }
  }
  function _g(t, n, i) {
    i !== null && typeof i == "object" && typeof i.then == "function"
      ? i.then(
          function (o) {
            Mg(t, n, o);
          },
          function (o) {
            return Nf(t, n, o);
          }
        )
      : Mg(t, n, i);
  }
  function Mg(t, n, i) {
    (n.status = "fulfilled"),
      (n.value = i),
      Dg(n),
      (t.state = i),
      (n = t.pending),
      n !== null &&
        ((i = n.next),
        i === n ? (t.pending = null) : ((i = i.next), (n.next = i), Og(t, i)));
  }
  function Nf(t, n, i) {
    var o = t.pending;
    if (((t.pending = null), o !== null)) {
      o = o.next;
      do (n.status = "rejected"), (n.reason = i), Dg(n), (n = n.next);
      while (n !== o);
    }
    t.action = null;
  }
  function Dg(t) {
    t = t.listeners;
    for (var n = 0; n < t.length; n++) (0, t[n])();
  }
  function zg(t, n) {
    return n;
  }
  function Ng(t, n) {
    if (Ie) {
      var i = ht.formState;
      if (i !== null) {
        e: {
          var o = He;
          if (Ie) {
            if (Wt) {
              t: {
                for (var c = Wt, d = sr; c.nodeType !== 8; ) {
                  if (!d) {
                    c = null;
                    break t;
                  }
                  if (((c = Zn(c.nextSibling)), c === null)) {
                    c = null;
                    break t;
                  }
                }
                (d = c.data), (c = d === "F!" || d === "F" ? c : null);
              }
              if (c) {
                (Wt = Zn(c.nextSibling)), (o = c.data === "F!");
                break e;
              }
            }
            ka(o);
          }
          o = !1;
        }
        o && (n = i[0]);
      }
    }
    return (
      (i = gn()),
      (i.memoizedState = i.baseState = n),
      (o = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: zg,
        lastRenderedState: n,
      }),
      (i.queue = o),
      (i = Wg.bind(null, He, o)),
      (o.dispatch = i),
      (o = zf(!1)),
      (d = jf.bind(null, He, !1, o.queue)),
      (o = gn()),
      (c = { state: n, dispatch: null, action: t, pending: null }),
      (o.queue = c),
      (i = SE.bind(null, He, c, d, i)),
      (c.dispatch = i),
      (o.memoizedState = t),
      [n, i, !1]
    );
  }
  function Bg(t) {
    var n = Lt();
    return kg(n, nt, t);
  }
  function kg(t, n, i) {
    (n = Mf(t, n, zg)[0]),
      (t = $s(zr)[0]),
      (n =
        typeof n == "object" && n !== null && typeof n.then == "function"
          ? Fl(n)
          : n);
    var o = Lt(),
      c = o.queue,
      d = c.dispatch;
    return (
      i !== o.memoizedState &&
        ((He.flags |= 2048),
        Di(9, xE.bind(null, c, i), { destroy: void 0 }, null)),
      [n, d, t]
    );
  }
  function xE(t, n) {
    t.action = n;
  }
  function Ug(t) {
    var n = Lt(),
      i = nt;
    if (i !== null) return kg(n, i, t);
    Lt(), (n = n.memoizedState), (i = Lt());
    var o = i.queue.dispatch;
    return (i.memoizedState = t), [n, o, !1];
  }
  function Di(t, n, i, o) {
    return (
      (t = { tag: t, create: n, inst: i, deps: o, next: null }),
      (n = He.updateQueue),
      n === null && ((n = Us()), (He.updateQueue = n)),
      (i = n.lastEffect),
      i === null
        ? (n.lastEffect = t.next = t)
        : ((o = i.next), (i.next = t), (t.next = o), (n.lastEffect = t)),
      t
    );
  }
  function Lg() {
    return Lt().memoizedState;
  }
  function js(t, n, i, o) {
    var c = gn();
    (He.flags |= t),
      (c.memoizedState = Di(
        1 | n,
        i,
        { destroy: void 0 },
        o === void 0 ? null : o
      ));
  }
  function Hs(t, n, i, o) {
    var c = Lt();
    o = o === void 0 ? null : o;
    var d = c.memoizedState.inst;
    nt !== null && o !== null && Cf(o, nt.memoizedState.deps)
      ? (c.memoizedState = Di(n, i, d, o))
      : ((He.flags |= t), (c.memoizedState = Di(1 | n, i, d, o)));
  }
  function $g(t, n) {
    js(8390656, 8, t, n);
  }
  function Bf(t, n) {
    Hs(2048, 8, t, n);
  }
  function jg(t, n) {
    return Hs(4, 2, t, n);
  }
  function Hg(t, n) {
    return Hs(4, 4, t, n);
  }
  function Pg(t, n) {
    if (typeof n == "function") {
      t = t();
      var i = n(t);
      return function () {
        typeof i == "function" ? i() : n(null);
      };
    }
    if (n != null)
      return (
        (t = t()),
        (n.current = t),
        function () {
          n.current = null;
        }
      );
  }
  function qg(t, n, i) {
    (i = i != null ? i.concat([t]) : null), Hs(4, 4, Pg.bind(null, n, t), i);
  }
  function kf() {}
  function Vg(t, n) {
    var i = Lt();
    n = n === void 0 ? null : n;
    var o = i.memoizedState;
    return n !== null && Cf(n, o[1]) ? o[0] : ((i.memoizedState = [t, n]), t);
  }
  function Fg(t, n) {
    var i = Lt();
    n = n === void 0 ? null : n;
    var o = i.memoizedState;
    if (n !== null && Cf(n, o[1])) return o[0];
    if (((o = t()), $a)) {
      Fe(!0);
      try {
        t();
      } finally {
        Fe(!1);
      }
    }
    return (i.memoizedState = [o, n]), o;
  }
  function Uf(t, n, i) {
    return i === void 0 || aa & 1073741824
      ? (t.memoizedState = n)
      : ((t.memoizedState = i), (t = Yy()), (He.lanes |= t), (ha |= t), i);
  }
  function Gg(t, n, i, o) {
    return En(i, n)
      ? i
      : Ti.current !== null
      ? ((t = Uf(t, i, o)), En(t, n) || (It = !0), t)
      : aa & 42
      ? ((t = Yy()), (He.lanes |= t), (ha |= t), n)
      : ((It = !0), (t.memoizedState = i));
  }
  function Yg(t, n, i, o, c) {
    var d = ue.p;
    ue.p = d !== 0 && 8 > d ? d : 8;
    var y = G.T,
      w = {};
    (G.T = w), jf(t, !1, n, i);
    try {
      var z = c(),
        U = G.S;
      if (
        (U !== null && U(w, z),
        z !== null && typeof z == "object" && typeof z.then == "function")
      ) {
        var ne = yE(z, o);
        Gl(t, n, ne, Tn(t));
      } else Gl(t, n, o, Tn(t));
    } catch (le) {
      Gl(t, n, { then: function () {}, status: "rejected", reason: le }, Tn());
    } finally {
      (ue.p = d), (G.T = y);
    }
  }
  function EE() {}
  function Lf(t, n, i, o) {
    if (t.tag !== 5) throw Error(l(476));
    var c = Ig(t).queue;
    Yg(
      t,
      c,
      n,
      ye,
      i === null
        ? EE
        : function () {
            return Xg(t), i(o);
          }
    );
  }
  function Ig(t) {
    var n = t.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: ye,
      baseState: ye,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: zr,
        lastRenderedState: ye,
      },
      next: null,
    };
    var i = {};
    return (
      (n.next = {
        memoizedState: i,
        baseState: i,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: zr,
          lastRenderedState: i,
        },
        next: null,
      }),
      (t.memoizedState = n),
      (t = t.alternate),
      t !== null && (t.memoizedState = n),
      n
    );
  }
  function Xg(t) {
    var n = Ig(t).next.queue;
    Gl(t, n, {}, Tn());
  }
  function $f() {
    return nn(fo);
  }
  function Kg() {
    return Lt().memoizedState;
  }
  function Qg() {
    return Lt().memoizedState;
  }
  function RE(t) {
    for (var n = t.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var i = Tn();
          t = sa(i);
          var o = ua(n, t, i);
          o !== null && (cn(o, n, i), Xl(o, n, i)),
            (n = { cache: xf() }),
            (t.payload = n);
          return;
      }
      n = n.return;
    }
  }
  function CE(t, n, i) {
    var o = Tn();
    (i = {
      lane: o,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Ps(t)
        ? Zg(n, i)
        : ((i = hf(t, n, i, o)), i !== null && (cn(i, t, o), Jg(i, n, o)));
  }
  function Wg(t, n, i) {
    var o = Tn();
    Gl(t, n, i, o);
  }
  function Gl(t, n, i, o) {
    var c = {
      lane: o,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Ps(t)) Zg(n, c);
    else {
      var d = t.alternate;
      if (
        t.lanes === 0 &&
        (d === null || d.lanes === 0) &&
        ((d = n.lastRenderedReducer), d !== null)
      )
        try {
          var y = n.lastRenderedState,
            w = d(y, i);
          if (((c.hasEagerState = !0), (c.eagerState = w), En(w, y)))
            return Cs(t, n, c, 0), ht === null && Rs(), !1;
        } catch {
        } finally {
        }
      if (((i = hf(t, n, c, o)), i !== null))
        return cn(i, t, o), Jg(i, n, o), !0;
    }
    return !1;
  }
  function jf(t, n, i, o) {
    if (
      ((o = {
        lane: 2,
        revertLane: Od(),
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ps(t))
    ) {
      if (n) throw Error(l(479));
    } else (n = hf(t, i, o, 2)), n !== null && cn(n, t, 2);
  }
  function Ps(t) {
    var n = t.alternate;
    return t === He || (n !== null && n === He);
  }
  function Zg(t, n) {
    _i = Bs = !0;
    var i = t.pending;
    i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
      (t.pending = n);
  }
  function Jg(t, n, i) {
    if (i & 4194176) {
      var o = n.lanes;
      (o &= t.pendingLanes), (i |= o), (n.lanes = i), cm(t, i);
    }
  }
  var cr = {
    readContext: nn,
    use: Ls,
    useCallback: _t,
    useContext: _t,
    useEffect: _t,
    useImperativeHandle: _t,
    useLayoutEffect: _t,
    useInsertionEffect: _t,
    useMemo: _t,
    useReducer: _t,
    useRef: _t,
    useState: _t,
    useDebugValue: _t,
    useDeferredValue: _t,
    useTransition: _t,
    useSyncExternalStore: _t,
    useId: _t,
  };
  (cr.useCacheRefresh = _t),
    (cr.useMemoCache = _t),
    (cr.useHostTransitionStatus = _t),
    (cr.useFormState = _t),
    (cr.useActionState = _t),
    (cr.useOptimistic = _t);
  var ja = {
    readContext: nn,
    use: Ls,
    useCallback: function (t, n) {
      return (gn().memoizedState = [t, n === void 0 ? null : n]), t;
    },
    useContext: nn,
    useEffect: $g,
    useImperativeHandle: function (t, n, i) {
      (i = i != null ? i.concat([t]) : null),
        js(4194308, 4, Pg.bind(null, n, t), i);
    },
    useLayoutEffect: function (t, n) {
      return js(4194308, 4, t, n);
    },
    useInsertionEffect: function (t, n) {
      js(4, 2, t, n);
    },
    useMemo: function (t, n) {
      var i = gn();
      n = n === void 0 ? null : n;
      var o = t();
      if ($a) {
        Fe(!0);
        try {
          t();
        } finally {
          Fe(!1);
        }
      }
      return (i.memoizedState = [o, n]), o;
    },
    useReducer: function (t, n, i) {
      var o = gn();
      if (i !== void 0) {
        var c = i(n);
        if ($a) {
          Fe(!0);
          try {
            i(n);
          } finally {
            Fe(!1);
          }
        }
      } else c = n;
      return (
        (o.memoizedState = o.baseState = c),
        (t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: c,
        }),
        (o.queue = t),
        (t = t.dispatch = CE.bind(null, He, t)),
        [o.memoizedState, t]
      );
    },
    useRef: function (t) {
      var n = gn();
      return (t = { current: t }), (n.memoizedState = t);
    },
    useState: function (t) {
      t = zf(t);
      var n = t.queue,
        i = Wg.bind(null, He, n);
      return (n.dispatch = i), [t.memoizedState, i];
    },
    useDebugValue: kf,
    useDeferredValue: function (t, n) {
      var i = gn();
      return Uf(i, t, n);
    },
    useTransition: function () {
      var t = zf(!1);
      return (
        (t = Yg.bind(null, He, t.queue, !0, !1)),
        (gn().memoizedState = t),
        [!1, t]
      );
    },
    useSyncExternalStore: function (t, n, i) {
      var o = He,
        c = gn();
      if (Ie) {
        if (i === void 0) throw Error(l(407));
        i = i();
      } else {
        if (((i = n()), ht === null)) throw Error(l(349));
        Ge & 60 || Eg(o, n, i);
      }
      c.memoizedState = i;
      var d = { value: i, getSnapshot: n };
      return (
        (c.queue = d),
        $g(Cg.bind(null, o, d, t), [t]),
        (o.flags |= 2048),
        Di(9, Rg.bind(null, o, d, i, n), { destroy: void 0 }, null),
        i
      );
    },
    useId: function () {
      var t = gn(),
        n = ht.identifierPrefix;
      if (Ie) {
        var i = Mr,
          o = _r;
        (i = (o & ~(1 << (32 - Ke(o) - 1))).toString(32) + i),
          (n = ":" + n + "R" + i),
          (i = ks++),
          0 < i && (n += "H" + i.toString(32)),
          (n += ":");
      } else (i = vE++), (n = ":" + n + "r" + i.toString(32) + ":");
      return (t.memoizedState = n);
    },
    useCacheRefresh: function () {
      return (gn().memoizedState = RE.bind(null, He));
    },
  };
  (ja.useMemoCache = _f),
    (ja.useHostTransitionStatus = $f),
    (ja.useFormState = Ng),
    (ja.useActionState = Ng),
    (ja.useOptimistic = function (t) {
      var n = gn();
      n.memoizedState = n.baseState = t;
      var i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (n.queue = i), (n = jf.bind(null, He, !0, i)), (i.dispatch = n), [t, n]
      );
    });
  var ia = {
    readContext: nn,
    use: Ls,
    useCallback: Vg,
    useContext: nn,
    useEffect: Bf,
    useImperativeHandle: qg,
    useInsertionEffect: jg,
    useLayoutEffect: Hg,
    useMemo: Fg,
    useReducer: $s,
    useRef: Lg,
    useState: function () {
      return $s(zr);
    },
    useDebugValue: kf,
    useDeferredValue: function (t, n) {
      var i = Lt();
      return Gg(i, nt.memoizedState, t, n);
    },
    useTransition: function () {
      var t = $s(zr)[0],
        n = Lt().memoizedState;
      return [typeof t == "boolean" ? t : Fl(t), n];
    },
    useSyncExternalStore: xg,
    useId: Kg,
  };
  (ia.useCacheRefresh = Qg),
    (ia.useMemoCache = _f),
    (ia.useHostTransitionStatus = $f),
    (ia.useFormState = Bg),
    (ia.useActionState = Bg),
    (ia.useOptimistic = function (t, n) {
      var i = Lt();
      return Ag(i, nt, t, n);
    });
  var Ha = {
    readContext: nn,
    use: Ls,
    useCallback: Vg,
    useContext: nn,
    useEffect: Bf,
    useImperativeHandle: qg,
    useInsertionEffect: jg,
    useLayoutEffect: Hg,
    useMemo: Fg,
    useReducer: Df,
    useRef: Lg,
    useState: function () {
      return Df(zr);
    },
    useDebugValue: kf,
    useDeferredValue: function (t, n) {
      var i = Lt();
      return nt === null ? Uf(i, t, n) : Gg(i, nt.memoizedState, t, n);
    },
    useTransition: function () {
      var t = Df(zr)[0],
        n = Lt().memoizedState;
      return [typeof t == "boolean" ? t : Fl(t), n];
    },
    useSyncExternalStore: xg,
    useId: Kg,
  };
  (Ha.useCacheRefresh = Qg),
    (Ha.useMemoCache = _f),
    (Ha.useHostTransitionStatus = $f),
    (Ha.useFormState = Ug),
    (Ha.useActionState = Ug),
    (Ha.useOptimistic = function (t, n) {
      var i = Lt();
      return nt !== null
        ? Ag(i, nt, t, n)
        : ((i.baseState = t), [t, i.queue.dispatch]);
    });
  function Hf(t, n, i, o) {
    (n = t.memoizedState),
      (i = i(o, n)),
      (i = i == null ? n : E({}, n, i)),
      (t.memoizedState = i),
      t.lanes === 0 && (t.updateQueue.baseState = i);
  }
  var Pf = {
    isMounted: function (t) {
      return (t = t._reactInternals) ? ce(t) === t : !1;
    },
    enqueueSetState: function (t, n, i) {
      t = t._reactInternals;
      var o = Tn(),
        c = sa(o);
      (c.payload = n),
        i != null && (c.callback = i),
        (n = ua(t, c, o)),
        n !== null && (cn(n, t, o), Xl(n, t, o));
    },
    enqueueReplaceState: function (t, n, i) {
      t = t._reactInternals;
      var o = Tn(),
        c = sa(o);
      (c.tag = 1),
        (c.payload = n),
        i != null && (c.callback = i),
        (n = ua(t, c, o)),
        n !== null && (cn(n, t, o), Xl(n, t, o));
    },
    enqueueForceUpdate: function (t, n) {
      t = t._reactInternals;
      var i = Tn(),
        o = sa(i);
      (o.tag = 2),
        n != null && (o.callback = n),
        (n = ua(t, o, i)),
        n !== null && (cn(n, t, i), Xl(n, t, i));
    },
  };
  function ey(t, n, i, o, c, d, y) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(o, d, y)
        : n.prototype && n.prototype.isPureReactComponent
        ? !zl(i, o) || !zl(c, d)
        : !0
    );
  }
  function ty(t, n, i, o) {
    (t = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(i, o),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(i, o),
      n.state !== t && Pf.enqueueReplaceState(n, n.state, null);
  }
  function Pa(t, n) {
    var i = n;
    if ("ref" in n) {
      i = {};
      for (var o in n) o !== "ref" && (i[o] = n[o]);
    }
    if ((t = t.defaultProps)) {
      i === n && (i = E({}, i));
      for (var c in t) i[c] === void 0 && (i[c] = t[c]);
    }
    return i;
  }
  var qs =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var n = new window.ErrorEvent("error", {
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
            if (!window.dispatchEvent(n)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function ny(t) {
    qs(t);
  }
  function ry(t) {
    console.error(t);
  }
  function ay(t) {
    qs(t);
  }
  function Vs(t, n) {
    try {
      var i = t.onUncaughtError;
      i(n.value, { componentStack: n.stack });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function iy(t, n, i) {
    try {
      var o = t.onCaughtError;
      o(i.value, {
        componentStack: i.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null,
      });
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  function qf(t, n, i) {
    return (
      (i = sa(i)),
      (i.tag = 3),
      (i.payload = { element: null }),
      (i.callback = function () {
        Vs(t, n);
      }),
      i
    );
  }
  function ly(t) {
    return (t = sa(t)), (t.tag = 3), t;
  }
  function oy(t, n, i, o) {
    var c = i.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var d = o.value;
      (t.payload = function () {
        return c(d);
      }),
        (t.callback = function () {
          iy(n, i, o);
        });
    }
    var y = i.stateNode;
    y !== null &&
      typeof y.componentDidCatch == "function" &&
      (t.callback = function () {
        iy(n, i, o),
          typeof c != "function" &&
            (ma === null ? (ma = new Set([this])) : ma.add(this));
        var w = o.stack;
        this.componentDidCatch(o.value, {
          componentStack: w !== null ? w : "",
        });
      });
  }
  function wE(t, n, i, o, c) {
    if (
      ((i.flags |= 32768),
      o !== null && typeof o == "object" && typeof o.then == "function")
    ) {
      if (
        ((n = i.alternate),
        n !== null && Il(n, i, c, !0),
        (i = Ln.current),
        i !== null)
      ) {
        switch (i.tag) {
          case 13:
            return (
              ur === null ? Rd() : i.alternate === null && Ct === 0 && (Ct = 3),
              (i.flags &= -257),
              (i.flags |= 65536),
              (i.lanes = c),
              o === vf
                ? (i.flags |= 16384)
                : ((n = i.updateQueue),
                  n === null ? (i.updateQueue = new Set([o])) : n.add(o),
                  wd(t, o, c)),
              !1
            );
          case 22:
            return (
              (i.flags |= 65536),
              o === vf
                ? (i.flags |= 16384)
                : ((n = i.updateQueue),
                  n === null
                    ? ((n = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([o]),
                      }),
                      (i.updateQueue = n))
                    : ((i = n.retryQueue),
                      i === null ? (n.retryQueue = new Set([o])) : i.add(o)),
                  wd(t, o, c)),
              !1
            );
        }
        throw Error(l(435, i.tag));
      }
      return wd(t, o, c), Rd(), !1;
    }
    if (Ie)
      return (
        (n = Ln.current),
        n !== null
          ? (!(n.flags & 65536) && (n.flags |= 256),
            (n.flags |= 65536),
            (n.lanes = c),
            o !== yf && ((t = Error(l(422), { cause: o })), Ul(Bn(t, i))))
          : (o !== yf && ((n = Error(l(423), { cause: o })), Ul(Bn(n, i))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (c &= -c),
            (t.lanes |= c),
            (o = Bn(o, i)),
            (c = qf(t.stateNode, o, c)),
            rd(t, c),
            Ct !== 4 && (Ct = 2)),
        !1
      );
    var d = Error(l(520), { cause: o });
    if (
      ((d = Bn(d, i)),
      no === null ? (no = [d]) : no.push(d),
      Ct !== 4 && (Ct = 2),
      n === null)
    )
      return !0;
    (o = Bn(o, i)), (i = n);
    do {
      switch (i.tag) {
        case 3:
          return (
            (i.flags |= 65536),
            (t = c & -c),
            (i.lanes |= t),
            (t = qf(i.stateNode, o, t)),
            rd(i, t),
            !1
          );
        case 1:
          if (
            ((n = i.type),
            (d = i.stateNode),
            (i.flags & 128) === 0 &&
              (typeof n.getDerivedStateFromError == "function" ||
                (d !== null &&
                  typeof d.componentDidCatch == "function" &&
                  (ma === null || !ma.has(d)))))
          )
            return (
              (i.flags |= 65536),
              (c &= -c),
              (i.lanes |= c),
              (c = ly(c)),
              oy(c, t, i, o),
              rd(i, c),
              !1
            );
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var sy = Error(l(461)),
    It = !1;
  function Zt(t, n, i, o) {
    n.child = t === null ? pg(n, null, i, o) : Ua(n, t.child, i, o);
  }
  function uy(t, n, i, o, c) {
    i = i.render;
    var d = n.ref;
    if ("ref" in o) {
      var y = {};
      for (var w in o) w !== "ref" && (y[w] = o[w]);
    } else y = o;
    return (
      Va(n),
      (o = wf(t, n, i, y, d, c)),
      (w = Tf()),
      t !== null && !It
        ? (Af(t, n, c), Nr(t, n, c))
        : (Ie && w && mf(n), (n.flags |= 1), Zt(t, n, o, c), n.child)
    );
  }
  function cy(t, n, i, o, c) {
    if (t === null) {
      var d = i.type;
      return typeof d == "function" &&
        !fd(d) &&
        d.defaultProps === void 0 &&
        i.compare === null
        ? ((n.tag = 15), (n.type = d), fy(t, n, d, o, c))
        : ((t = Xs(i.type, null, o, n, n.mode, c)),
          (t.ref = n.ref),
          (t.return = n),
          (n.child = t));
    }
    if (((d = t.child), !Wf(t, c))) {
      var y = d.memoizedProps;
      if (
        ((i = i.compare), (i = i !== null ? i : zl), i(y, o) && t.ref === n.ref)
      )
        return Nr(t, n, c);
    }
    return (
      (n.flags |= 1),
      (t = pa(d, o)),
      (t.ref = n.ref),
      (t.return = n),
      (n.child = t)
    );
  }
  function fy(t, n, i, o, c) {
    if (t !== null) {
      var d = t.memoizedProps;
      if (zl(d, o) && t.ref === n.ref)
        if (((It = !1), (n.pendingProps = o = d), Wf(t, c)))
          t.flags & 131072 && (It = !0);
        else return (n.lanes = t.lanes), Nr(t, n, c);
    }
    return Vf(t, n, i, o, c);
  }
  function dy(t, n, i) {
    var o = n.pendingProps,
      c = o.children,
      d = (n.stateNode._pendingVisibility & 2) !== 0,
      y = t !== null ? t.memoizedState : null;
    if ((Yl(t, n), o.mode === "hidden" || d)) {
      if (n.flags & 128) {
        if (((o = y !== null ? y.baseLanes | i : i), t !== null)) {
          for (c = n.child = t.child, d = 0; c !== null; )
            (d = d | c.lanes | c.childLanes), (c = c.sibling);
          n.childLanes = d & ~o;
        } else (n.childLanes = 0), (n.child = null);
        return py(t, n, o, i);
      }
      if (i & 536870912)
        (n.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Ns(n, y !== null ? y.cachePool : null),
          y !== null ? hg(n, y) : bf(),
          mg(n);
      else
        return (
          (n.lanes = n.childLanes = 536870912),
          py(t, n, y !== null ? y.baseLanes | i : i, i)
        );
    } else
      y !== null
        ? (Ns(n, y.cachePool), hg(n, y), ra(), (n.memoizedState = null))
        : (t !== null && Ns(n, null), bf(), ra());
    return Zt(t, n, c, i), n.child;
  }
  function py(t, n, i, o) {
    var c = Rf();
    return (
      (c = c === null ? null : { parent: Vt._currentValue, pool: c }),
      (n.memoizedState = { baseLanes: i, cachePool: c }),
      t !== null && Ns(n, null),
      bf(),
      mg(n),
      t !== null && Il(t, n, o, !0),
      null
    );
  }
  function Yl(t, n) {
    var i = n.ref;
    if (i === null) t !== null && t.ref !== null && (n.flags |= 2097664);
    else {
      if (typeof i != "function" && typeof i != "object") throw Error(l(284));
      (t === null || t.ref !== i) && (n.flags |= 2097664);
    }
  }
  function Vf(t, n, i, o, c) {
    return (
      Va(n),
      (i = wf(t, n, i, o, void 0, c)),
      (o = Tf()),
      t !== null && !It
        ? (Af(t, n, c), Nr(t, n, c))
        : (Ie && o && mf(n), (n.flags |= 1), Zt(t, n, i, c), n.child)
    );
  }
  function hy(t, n, i, o, c, d) {
    return (
      Va(n),
      (n.updateQueue = null),
      (i = Sg(n, o, i, c)),
      bg(t),
      (o = Tf()),
      t !== null && !It
        ? (Af(t, n, d), Nr(t, n, d))
        : (Ie && o && mf(n), (n.flags |= 1), Zt(t, n, i, d), n.child)
    );
  }
  function my(t, n, i, o, c) {
    if ((Va(n), n.stateNode === null)) {
      var d = Ei,
        y = i.contextType;
      typeof y == "object" && y !== null && (d = nn(y)),
        (d = new i(o, d)),
        (n.memoizedState =
          d.state !== null && d.state !== void 0 ? d.state : null),
        (d.updater = Pf),
        (n.stateNode = d),
        (d._reactInternals = n),
        (d = n.stateNode),
        (d.props = o),
        (d.state = n.memoizedState),
        (d.refs = {}),
        td(n),
        (y = i.contextType),
        (d.context = typeof y == "object" && y !== null ? nn(y) : Ei),
        (d.state = n.memoizedState),
        (y = i.getDerivedStateFromProps),
        typeof y == "function" && (Hf(n, i, y, o), (d.state = n.memoizedState)),
        typeof i.getDerivedStateFromProps == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function" ||
          (typeof d.UNSAFE_componentWillMount != "function" &&
            typeof d.componentWillMount != "function") ||
          ((y = d.state),
          typeof d.componentWillMount == "function" && d.componentWillMount(),
          typeof d.UNSAFE_componentWillMount == "function" &&
            d.UNSAFE_componentWillMount(),
          y !== d.state && Pf.enqueueReplaceState(d, d.state, null),
          Ql(n, o, d, c),
          Kl(),
          (d.state = n.memoizedState)),
        typeof d.componentDidMount == "function" && (n.flags |= 4194308),
        (o = !0);
    } else if (t === null) {
      d = n.stateNode;
      var w = n.memoizedProps,
        z = Pa(i, w);
      d.props = z;
      var U = d.context,
        ne = i.contextType;
      (y = Ei), typeof ne == "object" && ne !== null && (y = nn(ne));
      var le = i.getDerivedStateFromProps;
      (ne =
        typeof le == "function" ||
        typeof d.getSnapshotBeforeUpdate == "function"),
        (w = n.pendingProps !== w),
        ne ||
          (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
            typeof d.componentWillReceiveProps != "function") ||
          ((w || U !== y) && ty(n, d, o, y)),
        (oa = !1);
      var F = n.memoizedState;
      (d.state = F),
        Ql(n, o, d, c),
        Kl(),
        (U = n.memoizedState),
        w || F !== U || oa
          ? (typeof le == "function" &&
              (Hf(n, i, le, o), (U = n.memoizedState)),
            (z = oa || ey(n, i, z, o, F, U, y))
              ? (ne ||
                  (typeof d.UNSAFE_componentWillMount != "function" &&
                    typeof d.componentWillMount != "function") ||
                  (typeof d.componentWillMount == "function" &&
                    d.componentWillMount(),
                  typeof d.UNSAFE_componentWillMount == "function" &&
                    d.UNSAFE_componentWillMount()),
                typeof d.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof d.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = o),
                (n.memoizedState = U)),
            (d.props = o),
            (d.state = U),
            (d.context = y),
            (o = z))
          : (typeof d.componentDidMount == "function" && (n.flags |= 4194308),
            (o = !1));
    } else {
      (d = n.stateNode),
        nd(t, n),
        (y = n.memoizedProps),
        (ne = Pa(i, y)),
        (d.props = ne),
        (le = n.pendingProps),
        (F = d.context),
        (U = i.contextType),
        (z = Ei),
        typeof U == "object" && U !== null && (z = nn(U)),
        (w = i.getDerivedStateFromProps),
        (U =
          typeof w == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function") ||
          (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
            typeof d.componentWillReceiveProps != "function") ||
          ((y !== le || F !== z) && ty(n, d, o, z)),
        (oa = !1),
        (F = n.memoizedState),
        (d.state = F),
        Ql(n, o, d, c),
        Kl();
      var te = n.memoizedState;
      y !== le ||
      F !== te ||
      oa ||
      (t !== null && t.dependencies !== null && Fs(t.dependencies))
        ? (typeof w == "function" && (Hf(n, i, w, o), (te = n.memoizedState)),
          (ne =
            oa ||
            ey(n, i, ne, o, F, te, z) ||
            (t !== null && t.dependencies !== null && Fs(t.dependencies)))
            ? (U ||
                (typeof d.UNSAFE_componentWillUpdate != "function" &&
                  typeof d.componentWillUpdate != "function") ||
                (typeof d.componentWillUpdate == "function" &&
                  d.componentWillUpdate(o, te, z),
                typeof d.UNSAFE_componentWillUpdate == "function" &&
                  d.UNSAFE_componentWillUpdate(o, te, z)),
              typeof d.componentDidUpdate == "function" && (n.flags |= 4),
              typeof d.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof d.componentDidUpdate != "function" ||
                (y === t.memoizedProps && F === t.memoizedState) ||
                (n.flags |= 4),
              typeof d.getSnapshotBeforeUpdate != "function" ||
                (y === t.memoizedProps && F === t.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = o),
              (n.memoizedState = te)),
          (d.props = o),
          (d.state = te),
          (d.context = z),
          (o = ne))
        : (typeof d.componentDidUpdate != "function" ||
            (y === t.memoizedProps && F === t.memoizedState) ||
            (n.flags |= 4),
          typeof d.getSnapshotBeforeUpdate != "function" ||
            (y === t.memoizedProps && F === t.memoizedState) ||
            (n.flags |= 1024),
          (o = !1));
    }
    return (
      (d = o),
      Yl(t, n),
      (o = (n.flags & 128) !== 0),
      d || o
        ? ((d = n.stateNode),
          (i =
            o && typeof i.getDerivedStateFromError != "function"
              ? null
              : d.render()),
          (n.flags |= 1),
          t !== null && o
            ? ((n.child = Ua(n, t.child, null, c)),
              (n.child = Ua(n, null, i, c)))
            : Zt(t, n, i, c),
          (n.memoizedState = d.state),
          (t = n.child))
        : (t = Nr(t, n, c)),
      t
    );
  }
  function gy(t, n, i, o) {
    return kl(), (n.flags |= 256), Zt(t, n, i, o), n.child;
  }
  var Ff = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Gf(t) {
    return { baseLanes: t, cachePool: vg() };
  }
  function Yf(t, n, i) {
    return (t = t !== null ? t.childLanes & ~i : 0), n && (t |= Pn), t;
  }
  function yy(t, n, i) {
    var o = n.pendingProps,
      c = !1,
      d = (n.flags & 128) !== 0,
      y;
    if (
      ((y = d) ||
        (y =
          t !== null && t.memoizedState === null ? !1 : (qt.current & 2) !== 0),
      y && ((c = !0), (n.flags &= -129)),
      (y = (n.flags & 32) !== 0),
      (n.flags &= -33),
      t === null)
    ) {
      if (Ie) {
        if ((c ? na(n) : ra(), Ie)) {
          var w = Wt,
            z;
          if ((z = w)) {
            e: {
              for (z = w, w = sr; z.nodeType !== 8; ) {
                if (!w) {
                  w = null;
                  break e;
                }
                if (((z = Zn(z.nextSibling)), z === null)) {
                  w = null;
                  break e;
                }
              }
              w = z;
            }
            w !== null
              ? ((n.memoizedState = {
                  dehydrated: w,
                  treeContext: Na !== null ? { id: _r, overflow: Mr } : null,
                  retryLane: 536870912,
                }),
                (z = Hn(18, null, null, 0)),
                (z.stateNode = w),
                (z.return = n),
                (n.child = z),
                (un = n),
                (Wt = null),
                (z = !0))
              : (z = !1);
          }
          z || ka(n);
        }
        if (
          ((w = n.memoizedState),
          w !== null && ((w = w.dehydrated), w !== null))
        )
          return w.data === "$!" ? (n.lanes = 16) : (n.lanes = 536870912), null;
        Dr(n);
      }
      return (
        (w = o.children),
        (o = o.fallback),
        c
          ? (ra(),
            (c = n.mode),
            (w = Xf({ mode: "hidden", children: w }, c)),
            (o = Ga(o, c, i, null)),
            (w.return = n),
            (o.return = n),
            (w.sibling = o),
            (n.child = w),
            (c = n.child),
            (c.memoizedState = Gf(i)),
            (c.childLanes = Yf(t, y, i)),
            (n.memoizedState = Ff),
            o)
          : (na(n), If(n, w))
      );
    }
    if (
      ((z = t.memoizedState), z !== null && ((w = z.dehydrated), w !== null))
    ) {
      if (d)
        n.flags & 256
          ? (na(n), (n.flags &= -257), (n = Kf(t, n, i)))
          : n.memoizedState !== null
          ? (ra(), (n.child = t.child), (n.flags |= 128), (n = null))
          : (ra(),
            (c = o.fallback),
            (w = n.mode),
            (o = Xf({ mode: "visible", children: o.children }, w)),
            (c = Ga(c, w, i, null)),
            (c.flags |= 2),
            (o.return = n),
            (c.return = n),
            (o.sibling = c),
            (n.child = o),
            Ua(n, t.child, null, i),
            (o = n.child),
            (o.memoizedState = Gf(i)),
            (o.childLanes = Yf(t, y, i)),
            (n.memoizedState = Ff),
            (n = c));
      else if ((na(n), w.data === "$!")) {
        if (((y = w.nextSibling && w.nextSibling.dataset), y)) var U = y.dgst;
        (y = U),
          (o = Error(l(419))),
          (o.stack = ""),
          (o.digest = y),
          Ul({ value: o, source: null, stack: null }),
          (n = Kf(t, n, i));
      } else if (
        (It || Il(t, n, i, !1), (y = (i & t.childLanes) !== 0), It || y)
      ) {
        if (((y = ht), y !== null)) {
          if (((o = i & -i), o & 42)) o = 1;
          else
            switch (o) {
              case 2:
                o = 1;
                break;
              case 8:
                o = 4;
                break;
              case 32:
                o = 16;
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
                o = 64;
                break;
              case 268435456:
                o = 134217728;
                break;
              default:
                o = 0;
            }
          if (
            ((o = o & (y.suspendedLanes | i) ? 0 : o),
            o !== 0 && o !== z.retryLane)
          )
            throw ((z.retryLane = o), ta(t, o), cn(y, t, o), sy);
        }
        w.data === "$?" || Rd(), (n = Kf(t, n, i));
      } else
        w.data === "$?"
          ? ((n.flags |= 128),
            (n.child = t.child),
            (n = HE.bind(null, t)),
            (w._reactRetry = n),
            (n = null))
          : ((t = z.treeContext),
            (Wt = Zn(w.nextSibling)),
            (un = n),
            (Ie = !0),
            (Qn = null),
            (sr = !1),
            t !== null &&
              ((kn[Un++] = _r),
              (kn[Un++] = Mr),
              (kn[Un++] = Na),
              (_r = t.id),
              (Mr = t.overflow),
              (Na = n)),
            (n = If(n, o.children)),
            (n.flags |= 4096));
      return n;
    }
    return c
      ? (ra(),
        (c = o.fallback),
        (w = n.mode),
        (z = t.child),
        (U = z.sibling),
        (o = pa(z, { mode: "hidden", children: o.children })),
        (o.subtreeFlags = z.subtreeFlags & 31457280),
        U !== null ? (c = pa(U, c)) : ((c = Ga(c, w, i, null)), (c.flags |= 2)),
        (c.return = n),
        (o.return = n),
        (o.sibling = c),
        (n.child = o),
        (o = c),
        (c = n.child),
        (w = t.child.memoizedState),
        w === null
          ? (w = Gf(i))
          : ((z = w.cachePool),
            z !== null
              ? ((U = Vt._currentValue),
                (z = z.parent !== U ? { parent: U, pool: U } : z))
              : (z = vg()),
            (w = { baseLanes: w.baseLanes | i, cachePool: z })),
        (c.memoizedState = w),
        (c.childLanes = Yf(t, y, i)),
        (n.memoizedState = Ff),
        o)
      : (na(n),
        (i = t.child),
        (t = i.sibling),
        (i = pa(i, { mode: "visible", children: o.children })),
        (i.return = n),
        (i.sibling = null),
        t !== null &&
          ((y = n.deletions),
          y === null ? ((n.deletions = [t]), (n.flags |= 16)) : y.push(t)),
        (n.child = i),
        (n.memoizedState = null),
        i);
  }
  function If(t, n) {
    return (
      (n = Xf({ mode: "visible", children: n }, t.mode)),
      (n.return = t),
      (t.child = n)
    );
  }
  function Xf(t, n) {
    return Vy(t, n, 0, null);
  }
  function Kf(t, n, i) {
    return (
      Ua(n, t.child, null, i),
      (t = If(n, n.pendingProps.children)),
      (t.flags |= 2),
      (n.memoizedState = null),
      t
    );
  }
  function vy(t, n, i) {
    t.lanes |= n;
    var o = t.alternate;
    o !== null && (o.lanes |= n), Jf(t.return, n, i);
  }
  function Qf(t, n, i, o, c) {
    var d = t.memoizedState;
    d === null
      ? (t.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: i,
          tailMode: c,
        })
      : ((d.isBackwards = n),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = o),
        (d.tail = i),
        (d.tailMode = c));
  }
  function by(t, n, i) {
    var o = n.pendingProps,
      c = o.revealOrder,
      d = o.tail;
    if ((Zt(t, n, o.children, i), (o = qt.current), o & 2))
      (o = (o & 1) | 2), (n.flags |= 128);
    else {
      if (t !== null && t.flags & 128)
        e: for (t = n.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && vy(t, i, n);
          else if (t.tag === 19) vy(t, i, n);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === n) break e;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === n) break e;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      o &= 1;
    }
    switch ((ve(qt, o), c)) {
      case "forwards":
        for (i = n.child, c = null; i !== null; )
          (t = i.alternate),
            t !== null && zs(t) === null && (c = i),
            (i = i.sibling);
        (i = c),
          i === null
            ? ((c = n.child), (n.child = null))
            : ((c = i.sibling), (i.sibling = null)),
          Qf(n, !1, c, i, d);
        break;
      case "backwards":
        for (i = null, c = n.child, n.child = null; c !== null; ) {
          if (((t = c.alternate), t !== null && zs(t) === null)) {
            n.child = c;
            break;
          }
          (t = c.sibling), (c.sibling = i), (i = c), (c = t);
        }
        Qf(n, !0, i, null, d);
        break;
      case "together":
        Qf(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Nr(t, n, i) {
    if (
      (t !== null && (n.dependencies = t.dependencies),
      (ha |= n.lanes),
      !(i & n.childLanes))
    )
      if (t !== null) {
        if ((Il(t, n, i, !1), (i & n.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && n.child !== t.child) throw Error(l(153));
    if (n.child !== null) {
      for (
        t = n.child, i = pa(t, t.pendingProps), n.child = i, i.return = n;
        t.sibling !== null;

      )
        (t = t.sibling),
          (i = i.sibling = pa(t, t.pendingProps)),
          (i.return = n);
      i.sibling = null;
    }
    return n.child;
  }
  function Wf(t, n) {
    return t.lanes & n ? !0 : ((t = t.dependencies), !!(t !== null && Fs(t)));
  }
  function TE(t, n, i) {
    switch (n.tag) {
      case 3:
        Ze(n, n.stateNode.containerInfo),
          la(n, Vt, t.memoizedState.cache),
          kl();
        break;
      case 27:
      case 5:
        Bt(n);
        break;
      case 4:
        Ze(n, n.stateNode.containerInfo);
        break;
      case 10:
        la(n, n.type, n.memoizedProps.value);
        break;
      case 13:
        var o = n.memoizedState;
        if (o !== null)
          return o.dehydrated !== null
            ? (na(n), (n.flags |= 128), null)
            : i & n.child.childLanes
            ? yy(t, n, i)
            : (na(n), (t = Nr(t, n, i)), t !== null ? t.sibling : null);
        na(n);
        break;
      case 19:
        var c = (t.flags & 128) !== 0;
        if (
          ((o = (i & n.childLanes) !== 0),
          o || (Il(t, n, i, !1), (o = (i & n.childLanes) !== 0)),
          c)
        ) {
          if (o) return by(t, n, i);
          n.flags |= 128;
        }
        if (
          ((c = n.memoizedState),
          c !== null &&
            ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          ve(qt, qt.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return (n.lanes = 0), dy(t, n, i);
      case 24:
        la(n, Vt, t.memoizedState.cache);
    }
    return Nr(t, n, i);
  }
  function Sy(t, n, i) {
    if (t !== null)
      if (t.memoizedProps !== n.pendingProps) It = !0;
      else {
        if (!Wf(t, i) && !(n.flags & 128)) return (It = !1), TE(t, n, i);
        It = !!(t.flags & 131072);
      }
    else (It = !1), Ie && n.flags & 1048576 && ag(n, As, n.index);
    switch (((n.lanes = 0), n.tag)) {
      case 16:
        e: {
          t = n.pendingProps;
          var o = n.elementType,
            c = o._init;
          if (((o = c(o._payload)), (n.type = o), typeof o == "function"))
            fd(o)
              ? ((t = Pa(o, t)), (n.tag = 1), (n = my(null, n, o, t, i)))
              : ((n.tag = 0), (n = Vf(null, n, o, t, i)));
          else {
            if (o != null) {
              if (((c = o.$$typeof), c === b)) {
                (n.tag = 11), (n = uy(null, n, o, t, i));
                break e;
              } else if (c === _) {
                (n.tag = 14), (n = cy(null, n, o, t, i));
                break e;
              }
            }
            throw ((n = re(o) || o), Error(l(306, n, "")));
          }
        }
        return n;
      case 0:
        return Vf(t, n, n.type, n.pendingProps, i);
      case 1:
        return (o = n.type), (c = Pa(o, n.pendingProps)), my(t, n, o, c, i);
      case 3:
        e: {
          if ((Ze(n, n.stateNode.containerInfo), t === null))
            throw Error(l(387));
          var d = n.pendingProps;
          (c = n.memoizedState), (o = c.element), nd(t, n), Ql(n, d, null, i);
          var y = n.memoizedState;
          if (
            ((d = y.cache),
            la(n, Vt, d),
            d !== c.cache && ed(n, [Vt], i, !0),
            Kl(),
            (d = y.element),
            c.isDehydrated)
          )
            if (
              ((c = { element: d, isDehydrated: !1, cache: y.cache }),
              (n.updateQueue.baseState = c),
              (n.memoizedState = c),
              n.flags & 256)
            ) {
              n = gy(t, n, d, i);
              break e;
            } else if (d !== o) {
              (o = Bn(Error(l(424)), n)), Ul(o), (n = gy(t, n, d, i));
              break e;
            } else
              for (
                Wt = Zn(n.stateNode.containerInfo.firstChild),
                  un = n,
                  Ie = !0,
                  Qn = null,
                  sr = !0,
                  i = pg(n, null, d, i),
                  n.child = i;
                i;

              )
                (i.flags = (i.flags & -3) | 4096), (i = i.sibling);
          else {
            if ((kl(), d === o)) {
              n = Nr(t, n, i);
              break e;
            }
            Zt(t, n, d, i);
          }
          n = n.child;
        }
        return n;
      case 26:
        return (
          Yl(t, n),
          t === null
            ? (i = R0(n.type, null, n.pendingProps, null))
              ? (n.memoizedState = i)
              : Ie ||
                ((i = n.type),
                (t = n.pendingProps),
                (o = lu(Ye.current).createElement(i)),
                (o[tn] = n),
                (o[hn] = t),
                Jt(o, i, t),
                Yt(o),
                (n.stateNode = o))
            : (n.memoizedState = R0(
                n.type,
                t.memoizedProps,
                n.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          Bt(n),
          t === null &&
            Ie &&
            ((o = n.stateNode = S0(n.type, n.pendingProps, Ye.current)),
            (un = n),
            (sr = !0),
            (Wt = Zn(o.firstChild))),
          (o = n.pendingProps.children),
          t !== null || Ie ? Zt(t, n, o, i) : (n.child = Ua(n, null, o, i)),
          Yl(t, n),
          n.child
        );
      case 5:
        return (
          t === null &&
            Ie &&
            ((c = o = Wt) &&
              ((o = nR(o, n.type, n.pendingProps, sr)),
              o !== null
                ? ((n.stateNode = o),
                  (un = n),
                  (Wt = Zn(o.firstChild)),
                  (sr = !1),
                  (c = !0))
                : (c = !1)),
            c || ka(n)),
          Bt(n),
          (c = n.type),
          (d = n.pendingProps),
          (y = t !== null ? t.memoizedProps : null),
          (o = d.children),
          Ld(c, d) ? (o = null) : y !== null && Ld(c, y) && (n.flags |= 32),
          n.memoizedState !== null &&
            ((c = wf(t, n, bE, null, null, i)), (fo._currentValue = c)),
          Yl(t, n),
          Zt(t, n, o, i),
          n.child
        );
      case 6:
        return (
          t === null &&
            Ie &&
            ((t = i = Wt) &&
              ((i = rR(i, n.pendingProps, sr)),
              i !== null
                ? ((n.stateNode = i), (un = n), (Wt = null), (t = !0))
                : (t = !1)),
            t || ka(n)),
          null
        );
      case 13:
        return yy(t, n, i);
      case 4:
        return (
          Ze(n, n.stateNode.containerInfo),
          (o = n.pendingProps),
          t === null ? (n.child = Ua(n, null, o, i)) : Zt(t, n, o, i),
          n.child
        );
      case 11:
        return uy(t, n, n.type, n.pendingProps, i);
      case 7:
        return Zt(t, n, n.pendingProps, i), n.child;
      case 8:
        return Zt(t, n, n.pendingProps.children, i), n.child;
      case 12:
        return Zt(t, n, n.pendingProps.children, i), n.child;
      case 10:
        return (
          (o = n.pendingProps),
          la(n, n.type, o.value),
          Zt(t, n, o.children, i),
          n.child
        );
      case 9:
        return (
          (c = n.type._context),
          (o = n.pendingProps.children),
          Va(n),
          (c = nn(c)),
          (o = o(c)),
          (n.flags |= 1),
          Zt(t, n, o, i),
          n.child
        );
      case 14:
        return cy(t, n, n.type, n.pendingProps, i);
      case 15:
        return fy(t, n, n.type, n.pendingProps, i);
      case 19:
        return by(t, n, i);
      case 22:
        return dy(t, n, i);
      case 24:
        return (
          Va(n),
          (o = nn(Vt)),
          t === null
            ? ((c = Rf()),
              c === null &&
                ((c = ht),
                (d = xf()),
                (c.pooledCache = d),
                d.refCount++,
                d !== null && (c.pooledCacheLanes |= i),
                (c = d)),
              (n.memoizedState = { parent: o, cache: c }),
              td(n),
              la(n, Vt, c))
            : (t.lanes & i && (nd(t, n), Ql(n, null, null, i), Kl()),
              (c = t.memoizedState),
              (d = n.memoizedState),
              c.parent !== o
                ? ((c = { parent: o, cache: o }),
                  (n.memoizedState = c),
                  n.lanes === 0 &&
                    (n.memoizedState = n.updateQueue.baseState = c),
                  la(n, Vt, o))
                : ((o = d.cache),
                  la(n, Vt, o),
                  o !== c.cache && ed(n, [Vt], i, !0))),
          Zt(t, n, n.pendingProps.children, i),
          n.child
        );
      case 29:
        throw n.pendingProps;
    }
    throw Error(l(156, n.tag));
  }
  var Zf = Ce(null),
    qa = null,
    Br = null;
  function la(t, n, i) {
    ve(Zf, n._currentValue), (n._currentValue = i);
  }
  function kr(t) {
    (t._currentValue = Zf.current), we(Zf);
  }
  function Jf(t, n, i) {
    for (; t !== null; ) {
      var o = t.alternate;
      if (
        ((t.childLanes & n) !== n
          ? ((t.childLanes |= n), o !== null && (o.childLanes |= n))
          : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n),
        t === i)
      )
        break;
      t = t.return;
    }
  }
  function ed(t, n, i, o) {
    var c = t.child;
    for (c !== null && (c.return = t); c !== null; ) {
      var d = c.dependencies;
      if (d !== null) {
        var y = c.child;
        d = d.firstContext;
        e: for (; d !== null; ) {
          var w = d;
          d = c;
          for (var z = 0; z < n.length; z++)
            if (w.context === n[z]) {
              (d.lanes |= i),
                (w = d.alternate),
                w !== null && (w.lanes |= i),
                Jf(d.return, i, t),
                o || (y = null);
              break e;
            }
          d = w.next;
        }
      } else if (c.tag === 18) {
        if (((y = c.return), y === null)) throw Error(l(341));
        (y.lanes |= i),
          (d = y.alternate),
          d !== null && (d.lanes |= i),
          Jf(y, i, t),
          (y = null);
      } else y = c.child;
      if (y !== null) y.return = c;
      else
        for (y = c; y !== null; ) {
          if (y === t) {
            y = null;
            break;
          }
          if (((c = y.sibling), c !== null)) {
            (c.return = y.return), (y = c);
            break;
          }
          y = y.return;
        }
      c = y;
    }
  }
  function Il(t, n, i, o) {
    t = null;
    for (var c = n, d = !1; c !== null; ) {
      if (!d) {
        if (c.flags & 524288) d = !0;
        else if (c.flags & 262144) break;
      }
      if (c.tag === 10) {
        var y = c.alternate;
        if (y === null) throw Error(l(387));
        if (((y = y.memoizedProps), y !== null)) {
          var w = c.type;
          En(c.pendingProps.value, y.value) ||
            (t !== null ? t.push(w) : (t = [w]));
        }
      } else if (c === Be.current) {
        if (((y = c.alternate), y === null)) throw Error(l(387));
        y.memoizedState.memoizedState !== c.memoizedState.memoizedState &&
          (t !== null ? t.push(fo) : (t = [fo]));
      }
      c = c.return;
    }
    t !== null && ed(n, t, i, o), (n.flags |= 262144);
  }
  function Fs(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!En(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Va(t) {
    (qa = t),
      (Br = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function nn(t) {
    return xy(qa, t);
  }
  function Gs(t, n) {
    return qa === null && Va(t), xy(t, n);
  }
  function xy(t, n) {
    var i = n._currentValue;
    if (((n = { context: n, memoizedValue: i, next: null }), Br === null)) {
      if (t === null) throw Error(l(308));
      (Br = n),
        (t.dependencies = { lanes: 0, firstContext: n }),
        (t.flags |= 524288);
    } else Br = Br.next = n;
    return i;
  }
  var oa = !1;
  function td(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function nd(t, n) {
    (t = t.updateQueue),
      n.updateQueue === t &&
        (n.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function sa(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ua(t, n, i) {
    var o = t.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), Et & 2)) {
      var c = o.pending;
      return (
        c === null ? (n.next = n) : ((n.next = c.next), (c.next = n)),
        (o.pending = n),
        (n = ws(t)),
        ng(t, null, i),
        n
      );
    }
    return Cs(t, o, n, i), ws(t);
  }
  function Xl(t, n, i) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (i & 4194176) !== 0))
    ) {
      var o = n.lanes;
      (o &= t.pendingLanes), (i |= o), (n.lanes = i), cm(t, i);
    }
  }
  function rd(t, n) {
    var i = t.updateQueue,
      o = t.alternate;
    if (o !== null && ((o = o.updateQueue), i === o)) {
      var c = null,
        d = null;
      if (((i = i.firstBaseUpdate), i !== null)) {
        do {
          var y = {
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null,
          };
          d === null ? (c = d = y) : (d = d.next = y), (i = i.next);
        } while (i !== null);
        d === null ? (c = d = n) : (d = d.next = n);
      } else c = d = n;
      (i = {
        baseState: o.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: d,
        shared: o.shared,
        callbacks: o.callbacks,
      }),
        (t.updateQueue = i);
      return;
    }
    (t = i.lastBaseUpdate),
      t === null ? (i.firstBaseUpdate = n) : (t.next = n),
      (i.lastBaseUpdate = n);
  }
  var ad = !1;
  function Kl() {
    if (ad) {
      var t = Oi;
      if (t !== null) throw t;
    }
  }
  function Ql(t, n, i, o) {
    ad = !1;
    var c = t.updateQueue;
    oa = !1;
    var d = c.firstBaseUpdate,
      y = c.lastBaseUpdate,
      w = c.shared.pending;
    if (w !== null) {
      c.shared.pending = null;
      var z = w,
        U = z.next;
      (z.next = null), y === null ? (d = U) : (y.next = U), (y = z);
      var ne = t.alternate;
      ne !== null &&
        ((ne = ne.updateQueue),
        (w = ne.lastBaseUpdate),
        w !== y &&
          (w === null ? (ne.firstBaseUpdate = U) : (w.next = U),
          (ne.lastBaseUpdate = z)));
    }
    if (d !== null) {
      var le = c.baseState;
      (y = 0), (ne = U = z = null), (w = d);
      do {
        var F = w.lane & -536870913,
          te = F !== w.lane;
        if (te ? (Ge & F) === F : (o & F) === F) {
          F !== 0 && F === Ai && (ad = !0),
            ne !== null &&
              (ne = ne.next =
                {
                  lane: 0,
                  tag: w.tag,
                  payload: w.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var xe = t,
              ze = w;
            F = n;
            var wt = i;
            switch (ze.tag) {
              case 1:
                if (((xe = ze.payload), typeof xe == "function")) {
                  le = xe.call(wt, le, F);
                  break e;
                }
                le = xe;
                break e;
              case 3:
                xe.flags = (xe.flags & -65537) | 128;
              case 0:
                if (
                  ((xe = ze.payload),
                  (F = typeof xe == "function" ? xe.call(wt, le, F) : xe),
                  F == null)
                )
                  break e;
                le = E({}, le, F);
                break e;
              case 2:
                oa = !0;
            }
          }
          (F = w.callback),
            F !== null &&
              ((t.flags |= 64),
              te && (t.flags |= 8192),
              (te = c.callbacks),
              te === null ? (c.callbacks = [F]) : te.push(F));
        } else
          (te = {
            lane: F,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null,
          }),
            ne === null ? ((U = ne = te), (z = le)) : (ne = ne.next = te),
            (y |= F);
        if (((w = w.next), w === null)) {
          if (((w = c.shared.pending), w === null)) break;
          (te = w),
            (w = te.next),
            (te.next = null),
            (c.lastBaseUpdate = te),
            (c.shared.pending = null);
        }
      } while (!0);
      ne === null && (z = le),
        (c.baseState = z),
        (c.firstBaseUpdate = U),
        (c.lastBaseUpdate = ne),
        d === null && (c.shared.lanes = 0),
        (ha |= y),
        (t.lanes = y),
        (t.memoizedState = le);
    }
  }
  function Ey(t, n) {
    if (typeof t != "function") throw Error(l(191, t));
    t.call(n);
  }
  function Ry(t, n) {
    var i = t.callbacks;
    if (i !== null)
      for (t.callbacks = null, t = 0; t < i.length; t++) Ey(i[t], n);
  }
  function Wl(t, n) {
    try {
      var i = n.updateQueue,
        o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var c = o.next;
        i = c;
        do {
          if ((i.tag & t) === t) {
            o = void 0;
            var d = i.create,
              y = i.inst;
            (o = d()), (y.destroy = o);
          }
          i = i.next;
        } while (i !== c);
      }
    } catch (w) {
      st(n, n.return, w);
    }
  }
  function ca(t, n, i) {
    try {
      var o = n.updateQueue,
        c = o !== null ? o.lastEffect : null;
      if (c !== null) {
        var d = c.next;
        o = d;
        do {
          if ((o.tag & t) === t) {
            var y = o.inst,
              w = y.destroy;
            if (w !== void 0) {
              (y.destroy = void 0), (c = n);
              var z = i;
              try {
                w();
              } catch (U) {
                st(c, z, U);
              }
            }
          }
          o = o.next;
        } while (o !== d);
      }
    } catch (U) {
      st(n, n.return, U);
    }
  }
  function Cy(t) {
    var n = t.updateQueue;
    if (n !== null) {
      var i = t.stateNode;
      try {
        Ry(n, i);
      } catch (o) {
        st(t, t.return, o);
      }
    }
  }
  function wy(t, n, i) {
    (i.props = Pa(t.type, t.memoizedProps)), (i.state = t.memoizedState);
    try {
      i.componentWillUnmount();
    } catch (o) {
      st(t, n, o);
    }
  }
  function Fa(t, n) {
    try {
      var i = t.ref;
      if (i !== null) {
        var o = t.stateNode;
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var c = o;
            break;
          default:
            c = o;
        }
        typeof i == "function" ? (t.refCleanup = i(c)) : (i.current = c);
      }
    } catch (d) {
      st(t, n, d);
    }
  }
  function Rn(t, n) {
    var i = t.ref,
      o = t.refCleanup;
    if (i !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (c) {
          st(t, n, c);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof i == "function")
        try {
          i(null);
        } catch (c) {
          st(t, n, c);
        }
      else i.current = null;
  }
  function Ty(t) {
    var n = t.type,
      i = t.memoizedProps,
      o = t.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          i.autoFocus && o.focus();
          break e;
        case "img":
          i.src ? (o.src = i.src) : i.srcSet && (o.srcset = i.srcSet);
      }
    } catch (c) {
      st(t, t.return, c);
    }
  }
  function Ay(t, n, i) {
    try {
      var o = t.stateNode;
      WE(o, t.type, i, n), (o[hn] = n);
    } catch (c) {
      st(t, t.return, c);
    }
  }
  function Oy(t) {
    return (
      t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 || t.tag === 4
    );
  }
  function id(t) {
    e: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Oy(t.return)) return null;
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
  function ld(t, n, i) {
    var o = t.tag;
    if (o === 5 || o === 6)
      (t = t.stateNode),
        n
          ? i.nodeType === 8
            ? i.parentNode.insertBefore(t, n)
            : i.insertBefore(t, n)
          : (i.nodeType === 8
              ? ((n = i.parentNode), n.insertBefore(t, i))
              : ((n = i), n.appendChild(t)),
            (i = i._reactRootContainer),
            i != null || n.onclick !== null || (n.onclick = iu));
    else if (o !== 4 && o !== 27 && ((t = t.child), t !== null))
      for (ld(t, n, i), t = t.sibling; t !== null; )
        ld(t, n, i), (t = t.sibling);
  }
  function Ys(t, n, i) {
    var o = t.tag;
    if (o === 5 || o === 6)
      (t = t.stateNode), n ? i.insertBefore(t, n) : i.appendChild(t);
    else if (o !== 4 && o !== 27 && ((t = t.child), t !== null))
      for (Ys(t, n, i), t = t.sibling; t !== null; )
        Ys(t, n, i), (t = t.sibling);
  }
  var Ur = !1,
    Rt = !1,
    od = !1,
    _y = typeof WeakSet == "function" ? WeakSet : Set,
    Xt = null,
    My = !1;
  function AE(t, n) {
    if (((t = t.containerInfo), (kd = du), (t = Im(t)), uf(t))) {
      if ("selectionStart" in t)
        var i = { start: t.selectionStart, end: t.selectionEnd };
      else
        e: {
          i = ((i = t.ownerDocument) && i.defaultView) || window;
          var o = i.getSelection && i.getSelection();
          if (o && o.rangeCount !== 0) {
            i = o.anchorNode;
            var c = o.anchorOffset,
              d = o.focusNode;
            o = o.focusOffset;
            try {
              i.nodeType, d.nodeType;
            } catch {
              i = null;
              break e;
            }
            var y = 0,
              w = -1,
              z = -1,
              U = 0,
              ne = 0,
              le = t,
              F = null;
            t: for (;;) {
              for (
                var te;
                le !== i || (c !== 0 && le.nodeType !== 3) || (w = y + c),
                  le !== d || (o !== 0 && le.nodeType !== 3) || (z = y + o),
                  le.nodeType === 3 && (y += le.nodeValue.length),
                  (te = le.firstChild) !== null;

              )
                (F = le), (le = te);
              for (;;) {
                if (le === t) break t;
                if (
                  (F === i && ++U === c && (w = y),
                  F === d && ++ne === o && (z = y),
                  (te = le.nextSibling) !== null)
                )
                  break;
                (le = F), (F = le.parentNode);
              }
              le = te;
            }
            i = w === -1 || z === -1 ? null : { start: w, end: z };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (
      Ud = { focusedElem: t, selectionRange: i }, du = !1, Xt = n;
      Xt !== null;

    )
      if (
        ((n = Xt), (t = n.child), (n.subtreeFlags & 1028) !== 0 && t !== null)
      )
        (t.return = n), (Xt = t);
      else
        for (; Xt !== null; ) {
          switch (((n = Xt), (d = n.alternate), (t = n.flags), n.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (t & 1024 && d !== null) {
                (t = void 0),
                  (i = n),
                  (c = d.memoizedProps),
                  (d = d.memoizedState),
                  (o = i.stateNode);
                try {
                  var xe = Pa(i.type, c, i.elementType === i.type);
                  (t = o.getSnapshotBeforeUpdate(xe, d)),
                    (o.__reactInternalSnapshotBeforeUpdate = t);
                } catch (ze) {
                  st(i, i.return, ze);
                }
              }
              break;
            case 3:
              if (t & 1024) {
                if (
                  ((t = n.stateNode.containerInfo), (i = t.nodeType), i === 9)
                )
                  Hd(t);
                else if (i === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Hd(t);
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
              if (t & 1024) throw Error(l(163));
          }
          if (((t = n.sibling), t !== null)) {
            (t.return = n.return), (Xt = t);
            break;
          }
          Xt = n.return;
        }
    return (xe = My), (My = !1), xe;
  }
  function Dy(t, n, i) {
    var o = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        $r(t, i), o & 4 && Wl(5, i);
        break;
      case 1:
        if (($r(t, i), o & 4))
          if (((t = i.stateNode), n === null))
            try {
              t.componentDidMount();
            } catch (w) {
              st(i, i.return, w);
            }
          else {
            var c = Pa(i.type, n.memoizedProps);
            n = n.memoizedState;
            try {
              t.componentDidUpdate(c, n, t.__reactInternalSnapshotBeforeUpdate);
            } catch (w) {
              st(i, i.return, w);
            }
          }
        o & 64 && Cy(i), o & 512 && Fa(i, i.return);
        break;
      case 3:
        if (($r(t, i), o & 64 && ((o = i.updateQueue), o !== null))) {
          if (((t = null), i.child !== null))
            switch (i.child.tag) {
              case 27:
              case 5:
                t = i.child.stateNode;
                break;
              case 1:
                t = i.child.stateNode;
            }
          try {
            Ry(o, t);
          } catch (w) {
            st(i, i.return, w);
          }
        }
        break;
      case 26:
        $r(t, i), o & 512 && Fa(i, i.return);
        break;
      case 27:
      case 5:
        $r(t, i), n === null && o & 4 && Ty(i), o & 512 && Fa(i, i.return);
        break;
      case 12:
        $r(t, i);
        break;
      case 13:
        $r(t, i), o & 4 && By(t, i);
        break;
      case 22:
        if (((c = i.memoizedState !== null || Ur), !c)) {
          n = (n !== null && n.memoizedState !== null) || Rt;
          var d = Ur,
            y = Rt;
          (Ur = c),
            (Rt = n) && !y ? fa(t, i, (i.subtreeFlags & 8772) !== 0) : $r(t, i),
            (Ur = d),
            (Rt = y);
        }
        o & 512 &&
          (i.memoizedProps.mode === "manual"
            ? Fa(i, i.return)
            : Rn(i, i.return));
        break;
      default:
        $r(t, i);
    }
  }
  function zy(t) {
    var n = t.alternate;
    n !== null && ((t.alternate = null), zy(n)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((n = t.stateNode), n !== null && Yc(n)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var $t = null,
    Cn = !1;
  function Lr(t, n, i) {
    for (i = i.child; i !== null; ) Ny(t, n, i), (i = i.sibling);
  }
  function Ny(t, n, i) {
    if (Gt && typeof Gt.onCommitFiberUnmount == "function")
      try {
        Gt.onCommitFiberUnmount(pn, i);
      } catch {}
    switch (i.tag) {
      case 26:
        Rt || Rn(i, n),
          Lr(t, n, i),
          i.memoizedState
            ? i.memoizedState.count--
            : i.stateNode && ((i = i.stateNode), i.parentNode.removeChild(i));
        break;
      case 27:
        Rt || Rn(i, n);
        var o = $t,
          c = Cn;
        for (
          $t = i.stateNode, Lr(t, n, i), i = i.stateNode, n = i.attributes;
          n.length;

        )
          i.removeAttributeNode(n[0]);
        Yc(i), ($t = o), (Cn = c);
        break;
      case 5:
        Rt || Rn(i, n);
      case 6:
        c = $t;
        var d = Cn;
        if ((($t = null), Lr(t, n, i), ($t = c), (Cn = d), $t !== null))
          if (Cn)
            try {
              (t = $t),
                (o = i.stateNode),
                t.nodeType === 8
                  ? t.parentNode.removeChild(o)
                  : t.removeChild(o);
            } catch (y) {
              st(i, n, y);
            }
          else
            try {
              $t.removeChild(i.stateNode);
            } catch (y) {
              st(i, n, y);
            }
        break;
      case 18:
        $t !== null &&
          (Cn
            ? ((n = $t),
              (i = i.stateNode),
              n.nodeType === 8
                ? jd(n.parentNode, i)
                : n.nodeType === 1 && jd(n, i),
              go(n))
            : jd($t, i.stateNode));
        break;
      case 4:
        (o = $t),
          (c = Cn),
          ($t = i.stateNode.containerInfo),
          (Cn = !0),
          Lr(t, n, i),
          ($t = o),
          (Cn = c);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Rt || ca(2, i, n), Rt || ca(4, i, n), Lr(t, n, i);
        break;
      case 1:
        Rt ||
          (Rn(i, n),
          (o = i.stateNode),
          typeof o.componentWillUnmount == "function" && wy(i, n, o)),
          Lr(t, n, i);
        break;
      case 21:
        Lr(t, n, i);
        break;
      case 22:
        Rt || Rn(i, n),
          (Rt = (o = Rt) || i.memoizedState !== null),
          Lr(t, n, i),
          (Rt = o);
        break;
      default:
        Lr(t, n, i);
    }
  }
  function By(t, n) {
    if (
      n.memoizedState === null &&
      ((t = n.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        go(t);
      } catch (i) {
        st(n, n.return, i);
      }
  }
  function OE(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var n = t.stateNode;
        return n === null && (n = t.stateNode = new _y()), n;
      case 22:
        return (
          (t = t.stateNode),
          (n = t._retryCache),
          n === null && (n = t._retryCache = new _y()),
          n
        );
      default:
        throw Error(l(435, t.tag));
    }
  }
  function sd(t, n) {
    var i = OE(t);
    n.forEach(function (o) {
      var c = PE.bind(null, t, o);
      i.has(o) || (i.add(o), o.then(c, c));
    });
  }
  function $n(t, n) {
    var i = n.deletions;
    if (i !== null)
      for (var o = 0; o < i.length; o++) {
        var c = i[o],
          d = t,
          y = n,
          w = y;
        e: for (; w !== null; ) {
          switch (w.tag) {
            case 27:
            case 5:
              ($t = w.stateNode), (Cn = !1);
              break e;
            case 3:
              ($t = w.stateNode.containerInfo), (Cn = !0);
              break e;
            case 4:
              ($t = w.stateNode.containerInfo), (Cn = !0);
              break e;
          }
          w = w.return;
        }
        if ($t === null) throw Error(l(160));
        Ny(d, y, c),
          ($t = null),
          (Cn = !1),
          (d = c.alternate),
          d !== null && (d.return = null),
          (c.return = null);
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; ) ky(n, t), (n = n.sibling);
  }
  var Wn = null;
  function ky(t, n) {
    var i = t.alternate,
      o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        $n(n, t),
          jn(t),
          o & 4 && (ca(3, t, t.return), Wl(3, t), ca(5, t, t.return));
        break;
      case 1:
        $n(n, t),
          jn(t),
          o & 512 && (Rt || i === null || Rn(i, i.return)),
          o & 64 &&
            Ur &&
            ((t = t.updateQueue),
            t !== null &&
              ((o = t.callbacks),
              o !== null &&
                ((i = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = i === null ? o : i.concat(o)))));
        break;
      case 26:
        var c = Wn;
        if (
          ($n(n, t),
          jn(t),
          o & 512 && (Rt || i === null || Rn(i, i.return)),
          o & 4)
        ) {
          var d = i !== null ? i.memoizedState : null;
          if (((o = t.memoizedState), i === null))
            if (o === null)
              if (t.stateNode === null) {
                e: {
                  (o = t.type),
                    (i = t.memoizedProps),
                    (c = c.ownerDocument || c);
                  t: switch (o) {
                    case "title":
                      (d = c.getElementsByTagName("title")[0]),
                        (!d ||
                          d[Rl] ||
                          d[tn] ||
                          d.namespaceURI === "http://www.w3.org/2000/svg" ||
                          d.hasAttribute("itemprop")) &&
                          ((d = c.createElement(o)),
                          c.head.insertBefore(
                            d,
                            c.querySelector("head > title")
                          )),
                        Jt(d, o, i),
                        (d[tn] = t),
                        Yt(d),
                        (o = d);
                      break e;
                    case "link":
                      var y = T0("link", "href", c).get(o + (i.href || ""));
                      if (y) {
                        for (var w = 0; w < y.length; w++)
                          if (
                            ((d = y[w]),
                            d.getAttribute("href") ===
                              (i.href == null ? null : i.href) &&
                              d.getAttribute("rel") ===
                                (i.rel == null ? null : i.rel) &&
                              d.getAttribute("title") ===
                                (i.title == null ? null : i.title) &&
                              d.getAttribute("crossorigin") ===
                                (i.crossOrigin == null ? null : i.crossOrigin))
                          ) {
                            y.splice(w, 1);
                            break t;
                          }
                      }
                      (d = c.createElement(o)),
                        Jt(d, o, i),
                        c.head.appendChild(d);
                      break;
                    case "meta":
                      if (
                        (y = T0("meta", "content", c).get(
                          o + (i.content || "")
                        ))
                      ) {
                        for (w = 0; w < y.length; w++)
                          if (
                            ((d = y[w]),
                            d.getAttribute("content") ===
                              (i.content == null ? null : "" + i.content) &&
                              d.getAttribute("name") ===
                                (i.name == null ? null : i.name) &&
                              d.getAttribute("property") ===
                                (i.property == null ? null : i.property) &&
                              d.getAttribute("http-equiv") ===
                                (i.httpEquiv == null ? null : i.httpEquiv) &&
                              d.getAttribute("charset") ===
                                (i.charSet == null ? null : i.charSet))
                          ) {
                            y.splice(w, 1);
                            break t;
                          }
                      }
                      (d = c.createElement(o)),
                        Jt(d, o, i),
                        c.head.appendChild(d);
                      break;
                    default:
                      throw Error(l(468, o));
                  }
                  (d[tn] = t), Yt(d), (o = d);
                }
                t.stateNode = o;
              } else A0(c, t.type, t.stateNode);
            else t.stateNode = w0(c, o, t.memoizedProps);
          else
            d !== o
              ? (d === null
                  ? i.stateNode !== null &&
                    ((i = i.stateNode), i.parentNode.removeChild(i))
                  : d.count--,
                o === null
                  ? A0(c, t.type, t.stateNode)
                  : w0(c, o, t.memoizedProps))
              : o === null &&
                t.stateNode !== null &&
                Ay(t, t.memoizedProps, i.memoizedProps);
        }
        break;
      case 27:
        if (o & 4 && t.alternate === null) {
          (c = t.stateNode), (d = t.memoizedProps);
          try {
            for (var z = c.firstChild; z; ) {
              var U = z.nextSibling,
                ne = z.nodeName;
              z[Rl] ||
                ne === "HEAD" ||
                ne === "BODY" ||
                ne === "SCRIPT" ||
                ne === "STYLE" ||
                (ne === "LINK" && z.rel.toLowerCase() === "stylesheet") ||
                c.removeChild(z),
                (z = U);
            }
            for (var le = t.type, F = c.attributes; F.length; )
              c.removeAttributeNode(F[0]);
            Jt(c, le, d), (c[tn] = t), (c[hn] = d);
          } catch (xe) {
            st(t, t.return, xe);
          }
        }
      case 5:
        if (
          ($n(n, t),
          jn(t),
          o & 512 && (Rt || i === null || Rn(i, i.return)),
          t.flags & 32)
        ) {
          c = t.stateNode;
          try {
            mi(c, "");
          } catch (xe) {
            st(t, t.return, xe);
          }
        }
        o & 4 &&
          t.stateNode != null &&
          ((c = t.memoizedProps), Ay(t, c, i !== null ? i.memoizedProps : c)),
          o & 1024 && (od = !0);
        break;
      case 6:
        if (($n(n, t), jn(t), o & 4)) {
          if (t.stateNode === null) throw Error(l(162));
          (o = t.memoizedProps), (i = t.stateNode);
          try {
            i.nodeValue = o;
          } catch (xe) {
            st(t, t.return, xe);
          }
        }
        break;
      case 3:
        if (
          ((uu = null),
          (c = Wn),
          (Wn = ou(n.containerInfo)),
          $n(n, t),
          (Wn = c),
          jn(t),
          o & 4 && i !== null && i.memoizedState.isDehydrated)
        )
          try {
            go(n.containerInfo);
          } catch (xe) {
            st(t, t.return, xe);
          }
        od && ((od = !1), Uy(t));
        break;
      case 4:
        (o = Wn),
          (Wn = ou(t.stateNode.containerInfo)),
          $n(n, t),
          jn(t),
          (Wn = o);
        break;
      case 12:
        $n(n, t), jn(t);
        break;
      case 13:
        $n(n, t),
          jn(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (i !== null && i.memoizedState !== null) &&
            (yd = me()),
          o & 4 &&
            ((o = t.updateQueue),
            o !== null && ((t.updateQueue = null), sd(t, o)));
        break;
      case 22:
        if (
          (o & 512 && (Rt || i === null || Rn(i, i.return)),
          (z = t.memoizedState !== null),
          (U = i !== null && i.memoizedState !== null),
          (ne = Ur),
          (le = Rt),
          (Ur = ne || z),
          (Rt = le || U),
          $n(n, t),
          (Rt = le),
          (Ur = ne),
          jn(t),
          (n = t.stateNode),
          (n._current = t),
          (n._visibility &= -3),
          (n._visibility |= n._pendingVisibility & 2),
          o & 8192 &&
            ((n._visibility = z ? n._visibility & -2 : n._visibility | 1),
            z && ((n = Ur || Rt), i === null || U || n || zi(t)),
            t.memoizedProps === null || t.memoizedProps.mode !== "manual"))
        )
          e: for (i = null, n = t; ; ) {
            if (n.tag === 5 || n.tag === 26 || n.tag === 27) {
              if (i === null) {
                U = i = n;
                try {
                  if (((c = U.stateNode), z))
                    (d = c.style),
                      typeof d.setProperty == "function"
                        ? d.setProperty("display", "none", "important")
                        : (d.display = "none");
                  else {
                    (y = U.stateNode), (w = U.memoizedProps.style);
                    var te =
                      w != null && w.hasOwnProperty("display")
                        ? w.display
                        : null;
                    y.style.display =
                      te == null || typeof te == "boolean"
                        ? ""
                        : ("" + te).trim();
                  }
                } catch (xe) {
                  st(U, U.return, xe);
                }
              }
            } else if (n.tag === 6) {
              if (i === null) {
                U = n;
                try {
                  U.stateNode.nodeValue = z ? "" : U.memoizedProps;
                } catch (xe) {
                  st(U, U.return, xe);
                }
              }
            } else if (
              ((n.tag !== 22 && n.tag !== 23) ||
                n.memoizedState === null ||
                n === t) &&
              n.child !== null
            ) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === t) break e;
              i === n && (i = null), (n = n.return);
            }
            i === n && (i = null),
              (n.sibling.return = n.return),
              (n = n.sibling);
          }
        o & 4 &&
          ((o = t.updateQueue),
          o !== null &&
            ((i = o.retryQueue),
            i !== null && ((o.retryQueue = null), sd(t, i))));
        break;
      case 19:
        $n(n, t),
          jn(t),
          o & 4 &&
            ((o = t.updateQueue),
            o !== null && ((t.updateQueue = null), sd(t, o)));
        break;
      case 21:
        break;
      default:
        $n(n, t), jn(t);
    }
  }
  function jn(t) {
    var n = t.flags;
    if (n & 2) {
      try {
        if (t.tag !== 27) {
          e: {
            for (var i = t.return; i !== null; ) {
              if (Oy(i)) {
                var o = i;
                break e;
              }
              i = i.return;
            }
            throw Error(l(160));
          }
          switch (o.tag) {
            case 27:
              var c = o.stateNode,
                d = id(t);
              Ys(t, d, c);
              break;
            case 5:
              var y = o.stateNode;
              o.flags & 32 && (mi(y, ""), (o.flags &= -33));
              var w = id(t);
              Ys(t, w, y);
              break;
            case 3:
            case 4:
              var z = o.stateNode.containerInfo,
                U = id(t);
              ld(t, U, z);
              break;
            default:
              throw Error(l(161));
          }
        }
      } catch (ne) {
        st(t, t.return, ne);
      }
      t.flags &= -3;
    }
    n & 4096 && (t.flags &= -4097);
  }
  function Uy(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var n = t;
        Uy(n),
          n.tag === 5 && n.flags & 1024 && n.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function $r(t, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; ) Dy(t, n.alternate, n), (n = n.sibling);
  }
  function zi(t) {
    for (t = t.child; t !== null; ) {
      var n = t;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ca(4, n, n.return), zi(n);
          break;
        case 1:
          Rn(n, n.return);
          var i = n.stateNode;
          typeof i.componentWillUnmount == "function" && wy(n, n.return, i),
            zi(n);
          break;
        case 26:
        case 27:
        case 5:
          Rn(n, n.return), zi(n);
          break;
        case 22:
          Rn(n, n.return), n.memoizedState === null && zi(n);
          break;
        default:
          zi(n);
      }
      t = t.sibling;
    }
  }
  function fa(t, n, i) {
    for (i = i && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var o = n.alternate,
        c = t,
        d = n,
        y = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          fa(c, d, i), Wl(4, d);
          break;
        case 1:
          if (
            (fa(c, d, i),
            (o = d),
            (c = o.stateNode),
            typeof c.componentDidMount == "function")
          )
            try {
              c.componentDidMount();
            } catch (U) {
              st(o, o.return, U);
            }
          if (((o = d), (c = o.updateQueue), c !== null)) {
            var w = o.stateNode;
            try {
              var z = c.shared.hiddenCallbacks;
              if (z !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < z.length; c++)
                  Ey(z[c], w);
            } catch (U) {
              st(o, o.return, U);
            }
          }
          i && y & 64 && Cy(d), Fa(d, d.return);
          break;
        case 26:
        case 27:
        case 5:
          fa(c, d, i), i && o === null && y & 4 && Ty(d), Fa(d, d.return);
          break;
        case 12:
          fa(c, d, i);
          break;
        case 13:
          fa(c, d, i), i && y & 4 && By(c, d);
          break;
        case 22:
          d.memoizedState === null && fa(c, d, i), Fa(d, d.return);
          break;
        default:
          fa(c, d, i);
      }
      n = n.sibling;
    }
  }
  function ud(t, n) {
    var i = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (i = t.memoizedState.cachePool.pool),
      (t = null),
      n.memoizedState !== null &&
        n.memoizedState.cachePool !== null &&
        (t = n.memoizedState.cachePool.pool),
      t !== i && (t != null && t.refCount++, i != null && Pl(i));
  }
  function cd(t, n) {
    (t = null),
      n.alternate !== null && (t = n.alternate.memoizedState.cache),
      (n = n.memoizedState.cache),
      n !== t && (n.refCount++, t != null && Pl(t));
  }
  function da(t, n, i, o) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) Ly(t, n, i, o), (n = n.sibling);
  }
  function Ly(t, n, i, o) {
    var c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        da(t, n, i, o), c & 2048 && Wl(9, n);
        break;
      case 3:
        da(t, n, i, o),
          c & 2048 &&
            ((t = null),
            n.alternate !== null && (t = n.alternate.memoizedState.cache),
            (n = n.memoizedState.cache),
            n !== t && (n.refCount++, t != null && Pl(t)));
        break;
      case 12:
        if (c & 2048) {
          da(t, n, i, o), (t = n.stateNode);
          try {
            var d = n.memoizedProps,
              y = d.id,
              w = d.onPostCommit;
            typeof w == "function" &&
              w(
                y,
                n.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (z) {
            st(n, n.return, z);
          }
        } else da(t, n, i, o);
        break;
      case 23:
        break;
      case 22:
        (d = n.stateNode),
          n.memoizedState !== null
            ? d._visibility & 4
              ? da(t, n, i, o)
              : Zl(t, n)
            : d._visibility & 4
            ? da(t, n, i, o)
            : ((d._visibility |= 4),
              Ni(t, n, i, o, (n.subtreeFlags & 10256) !== 0)),
          c & 2048 && ud(n.alternate, n);
        break;
      case 24:
        da(t, n, i, o), c & 2048 && cd(n.alternate, n);
        break;
      default:
        da(t, n, i, o);
    }
  }
  function Ni(t, n, i, o, c) {
    for (c = c && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var d = t,
        y = n,
        w = i,
        z = o,
        U = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          Ni(d, y, w, z, c), Wl(8, y);
          break;
        case 23:
          break;
        case 22:
          var ne = y.stateNode;
          y.memoizedState !== null
            ? ne._visibility & 4
              ? Ni(d, y, w, z, c)
              : Zl(d, y)
            : ((ne._visibility |= 4), Ni(d, y, w, z, c)),
            c && U & 2048 && ud(y.alternate, y);
          break;
        case 24:
          Ni(d, y, w, z, c), c && U & 2048 && cd(y.alternate, y);
          break;
        default:
          Ni(d, y, w, z, c);
      }
      n = n.sibling;
    }
  }
  function Zl(t, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var i = t,
          o = n,
          c = o.flags;
        switch (o.tag) {
          case 22:
            Zl(i, o), c & 2048 && ud(o.alternate, o);
            break;
          case 24:
            Zl(i, o), c & 2048 && cd(o.alternate, o);
            break;
          default:
            Zl(i, o);
        }
        n = n.sibling;
      }
  }
  var Jl = 8192;
  function Bi(t) {
    if (t.subtreeFlags & Jl)
      for (t = t.child; t !== null; ) $y(t), (t = t.sibling);
  }
  function $y(t) {
    switch (t.tag) {
      case 26:
        Bi(t),
          t.flags & Jl &&
            t.memoizedState !== null &&
            gR(Wn, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Bi(t);
        break;
      case 3:
      case 4:
        var n = Wn;
        (Wn = ou(t.stateNode.containerInfo)), Bi(t), (Wn = n);
        break;
      case 22:
        t.memoizedState === null &&
          ((n = t.alternate),
          n !== null && n.memoizedState !== null
            ? ((n = Jl), (Jl = 16777216), Bi(t), (Jl = n))
            : Bi(t));
        break;
      default:
        Bi(t);
    }
  }
  function jy(t) {
    var n = t.alternate;
    if (n !== null && ((t = n.child), t !== null)) {
      n.child = null;
      do (n = t.sibling), (t.sibling = null), (t = n);
      while (t !== null);
    }
  }
  function eo(t) {
    var n = t.deletions;
    if (t.flags & 16) {
      if (n !== null)
        for (var i = 0; i < n.length; i++) {
          var o = n[i];
          (Xt = o), Py(o, t);
        }
      jy(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Hy(t), (t = t.sibling);
  }
  function Hy(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        eo(t), t.flags & 2048 && ca(9, t, t.return);
        break;
      case 3:
        eo(t);
        break;
      case 12:
        eo(t);
        break;
      case 22:
        var n = t.stateNode;
        t.memoizedState !== null &&
        n._visibility & 4 &&
        (t.return === null || t.return.tag !== 13)
          ? ((n._visibility &= -5), Is(t))
          : eo(t);
        break;
      default:
        eo(t);
    }
  }
  function Is(t) {
    var n = t.deletions;
    if (t.flags & 16) {
      if (n !== null)
        for (var i = 0; i < n.length; i++) {
          var o = n[i];
          (Xt = o), Py(o, t);
        }
      jy(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((n = t), n.tag)) {
        case 0:
        case 11:
        case 15:
          ca(8, n, n.return), Is(n);
          break;
        case 22:
          (i = n.stateNode),
            i._visibility & 4 && ((i._visibility &= -5), Is(n));
          break;
        default:
          Is(n);
      }
      t = t.sibling;
    }
  }
  function Py(t, n) {
    for (; Xt !== null; ) {
      var i = Xt;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ca(8, i, n);
          break;
        case 23:
        case 22:
          if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
            var o = i.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          Pl(i.memoizedState.cache);
      }
      if (((o = i.child), o !== null)) (o.return = i), (Xt = o);
      else
        e: for (i = t; Xt !== null; ) {
          o = Xt;
          var c = o.sibling,
            d = o.return;
          if ((zy(o), o === i)) {
            Xt = null;
            break e;
          }
          if (c !== null) {
            (c.return = d), (Xt = c);
            break e;
          }
          Xt = d;
        }
    }
  }
  function _E(t, n, i, o) {
    (this.tag = t),
      (this.key = i),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Hn(t, n, i, o) {
    return new _E(t, n, i, o);
  }
  function fd(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function pa(t, n) {
    var i = t.alternate;
    return (
      i === null
        ? ((i = Hn(t.tag, n, t.key, t.mode)),
          (i.elementType = t.elementType),
          (i.type = t.type),
          (i.stateNode = t.stateNode),
          (i.alternate = t),
          (t.alternate = i))
        : ((i.pendingProps = n),
          (i.type = t.type),
          (i.flags = 0),
          (i.subtreeFlags = 0),
          (i.deletions = null)),
      (i.flags = t.flags & 31457280),
      (i.childLanes = t.childLanes),
      (i.lanes = t.lanes),
      (i.child = t.child),
      (i.memoizedProps = t.memoizedProps),
      (i.memoizedState = t.memoizedState),
      (i.updateQueue = t.updateQueue),
      (n = t.dependencies),
      (i.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (i.sibling = t.sibling),
      (i.index = t.index),
      (i.ref = t.ref),
      (i.refCleanup = t.refCleanup),
      i
    );
  }
  function qy(t, n) {
    t.flags &= 31457282;
    var i = t.alternate;
    return (
      i === null
        ? ((t.childLanes = 0),
          (t.lanes = n),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = i.childLanes),
          (t.lanes = i.lanes),
          (t.child = i.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = i.memoizedProps),
          (t.memoizedState = i.memoizedState),
          (t.updateQueue = i.updateQueue),
          (t.type = i.type),
          (n = i.dependencies),
          (t.dependencies =
            n === null
              ? null
              : { lanes: n.lanes, firstContext: n.firstContext })),
      t
    );
  }
  function Xs(t, n, i, o, c, d) {
    var y = 0;
    if (((o = t), typeof t == "function")) fd(t) && (y = 1);
    else if (typeof t == "string")
      y = hR(t, i, De.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      e: switch (t) {
        case m:
          return Ga(i.children, c, d, n);
        case h:
          (y = 8), (c |= 24);
          break;
        case g:
          return (
            (t = Hn(12, i, n, c | 2)), (t.elementType = g), (t.lanes = d), t
          );
        case x:
          return (t = Hn(13, i, n, c)), (t.elementType = x), (t.lanes = d), t;
        case T:
          return (t = Hn(19, i, n, c)), (t.elementType = T), (t.lanes = d), t;
        case A:
          return Vy(i, c, d, n);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case v:
              case R:
                y = 10;
                break e;
              case S:
                y = 9;
                break e;
              case b:
                y = 11;
                break e;
              case _:
                y = 14;
                break e;
              case M:
                (y = 16), (o = null);
                break e;
            }
          (y = 29),
            (i = Error(l(130, t === null ? "null" : typeof t, ""))),
            (o = null);
      }
    return (
      (n = Hn(y, i, n, c)), (n.elementType = t), (n.type = o), (n.lanes = d), n
    );
  }
  function Ga(t, n, i, o) {
    return (t = Hn(7, t, o, n)), (t.lanes = i), t;
  }
  function Vy(t, n, i, o) {
    (t = Hn(22, t, o, n)), (t.elementType = A), (t.lanes = i);
    var c = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var d = c._current;
        if (d === null) throw Error(l(456));
        if (!(c._pendingVisibility & 2)) {
          var y = ta(d, 2);
          y !== null && ((c._pendingVisibility |= 2), cn(y, d, 2));
        }
      },
      attach: function () {
        var d = c._current;
        if (d === null) throw Error(l(456));
        if (c._pendingVisibility & 2) {
          var y = ta(d, 2);
          y !== null && ((c._pendingVisibility &= -3), cn(y, d, 2));
        }
      },
    };
    return (t.stateNode = c), t;
  }
  function dd(t, n, i) {
    return (t = Hn(6, t, null, n)), (t.lanes = i), t;
  }
  function pd(t, n, i) {
    return (
      (n = Hn(4, t.children !== null ? t.children : [], t.key, n)),
      (n.lanes = i),
      (n.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      n
    );
  }
  function jr(t) {
    t.flags |= 4;
  }
  function Fy(t, n) {
    if (n.type !== "stylesheet" || n.state.loading & 4) t.flags &= -16777217;
    else if (((t.flags |= 16777216), !O0(n))) {
      if (
        ((n = Ln.current),
        n !== null &&
          ((Ge & 4194176) === Ge
            ? ur !== null
            : ((Ge & 62914560) !== Ge && !(Ge & 536870912)) || n !== ur))
      )
        throw (($l = vf), og);
      t.flags |= 8192;
    }
  }
  function Ks(t, n) {
    n !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((n = t.tag !== 22 ? sm() : 536870912), (t.lanes |= n), (Ui |= n));
  }
  function to(t, n) {
    if (!Ie)
      switch (t.tailMode) {
        case "hidden":
          n = t.tail;
          for (var i = null; n !== null; )
            n.alternate !== null && (i = n), (n = n.sibling);
          i === null ? (t.tail = null) : (i.sibling = null);
          break;
        case "collapsed":
          i = t.tail;
          for (var o = null; i !== null; )
            i.alternate !== null && (o = i), (i = i.sibling);
          o === null
            ? n || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function xt(t) {
    var n = t.alternate !== null && t.alternate.child === t.child,
      i = 0,
      o = 0;
    if (n)
      for (var c = t.child; c !== null; )
        (i |= c.lanes | c.childLanes),
          (o |= c.subtreeFlags & 31457280),
          (o |= c.flags & 31457280),
          (c.return = t),
          (c = c.sibling);
    else
      for (c = t.child; c !== null; )
        (i |= c.lanes | c.childLanes),
          (o |= c.subtreeFlags),
          (o |= c.flags),
          (c.return = t),
          (c = c.sibling);
    return (t.subtreeFlags |= o), (t.childLanes = i), n;
  }
  function ME(t, n, i) {
    var o = n.pendingProps;
    switch ((gf(n), n.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return xt(n), null;
      case 1:
        return xt(n), null;
      case 3:
        return (
          (i = n.stateNode),
          (o = null),
          t !== null && (o = t.memoizedState.cache),
          n.memoizedState.cache !== o && (n.flags |= 2048),
          kr(Vt),
          Ot(),
          i.pendingContext &&
            ((i.context = i.pendingContext), (i.pendingContext = null)),
          (t === null || t.child === null) &&
            (Bl(n)
              ? jr(n)
              : t === null ||
                (t.memoizedState.isDehydrated && !(n.flags & 256)) ||
                ((n.flags |= 1024), Qn !== null && (xd(Qn), (Qn = null)))),
          xt(n),
          null
        );
      case 26:
        return (
          (i = n.memoizedState),
          t === null
            ? (jr(n),
              i !== null ? (xt(n), Fy(n, i)) : (xt(n), (n.flags &= -16777217)))
            : i
            ? i !== t.memoizedState
              ? (jr(n), xt(n), Fy(n, i))
              : (xt(n), (n.flags &= -16777217))
            : (t.memoizedProps !== o && jr(n), xt(n), (n.flags &= -16777217)),
          null
        );
      case 27:
        N(n), (i = Ye.current);
        var c = n.type;
        if (t !== null && n.stateNode != null) t.memoizedProps !== o && jr(n);
        else {
          if (!o) {
            if (n.stateNode === null) throw Error(l(166));
            return xt(n), null;
          }
          (t = De.current),
            Bl(n) ? ig(n) : ((t = S0(c, o, i)), (n.stateNode = t), jr(n));
        }
        return xt(n), null;
      case 5:
        if ((N(n), (i = n.type), t !== null && n.stateNode != null))
          t.memoizedProps !== o && jr(n);
        else {
          if (!o) {
            if (n.stateNode === null) throw Error(l(166));
            return xt(n), null;
          }
          if (((t = De.current), Bl(n))) ig(n);
          else {
            switch (((c = lu(Ye.current)), t)) {
              case 1:
                t = c.createElementNS("http://www.w3.org/2000/svg", i);
                break;
              case 2:
                t = c.createElementNS("http://www.w3.org/1998/Math/MathML", i);
                break;
              default:
                switch (i) {
                  case "svg":
                    t = c.createElementNS("http://www.w3.org/2000/svg", i);
                    break;
                  case "math":
                    t = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      i
                    );
                    break;
                  case "script":
                    (t = c.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof o.is == "string"
                        ? c.createElement("select", { is: o.is })
                        : c.createElement("select")),
                      o.multiple
                        ? (t.multiple = !0)
                        : o.size && (t.size = o.size);
                    break;
                  default:
                    t =
                      typeof o.is == "string"
                        ? c.createElement(i, { is: o.is })
                        : c.createElement(i);
                }
            }
            (t[tn] = n), (t[hn] = o);
            e: for (c = n.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6) t.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                (c.child.return = c), (c = c.child);
                continue;
              }
              if (c === n) break e;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === n) break e;
                c = c.return;
              }
              (c.sibling.return = c.return), (c = c.sibling);
            }
            n.stateNode = t;
            e: switch ((Jt(t, i, o), i)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!o.autoFocus;
                break e;
              case "img":
                t = !0;
                break e;
              default:
                t = !1;
            }
            t && jr(n);
          }
        }
        return xt(n), (n.flags &= -16777217), null;
      case 6:
        if (t && n.stateNode != null) t.memoizedProps !== o && jr(n);
        else {
          if (typeof o != "string" && n.stateNode === null) throw Error(l(166));
          if (((t = Ye.current), Bl(n))) {
            if (
              ((t = n.stateNode),
              (i = n.memoizedProps),
              (o = null),
              (c = un),
              c !== null)
            )
              switch (c.tag) {
                case 27:
                case 5:
                  o = c.memoizedProps;
              }
            (t[tn] = n),
              (t = !!(
                t.nodeValue === i ||
                (o !== null && o.suppressHydrationWarning === !0) ||
                h0(t.nodeValue, i)
              )),
              t || ka(n);
          } else (t = lu(t).createTextNode(o)), (t[tn] = n), (n.stateNode = t);
        }
        return xt(n), null;
      case 13:
        if (
          ((o = n.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((c = Bl(n)), o !== null && o.dehydrated !== null)) {
            if (t === null) {
              if (!c) throw Error(l(318));
              if (
                ((c = n.memoizedState),
                (c = c !== null ? c.dehydrated : null),
                !c)
              )
                throw Error(l(317));
              c[tn] = n;
            } else
              kl(),
                !(n.flags & 128) && (n.memoizedState = null),
                (n.flags |= 4);
            xt(n), (c = !1);
          } else Qn !== null && (xd(Qn), (Qn = null)), (c = !0);
          if (!c) return n.flags & 256 ? (Dr(n), n) : (Dr(n), null);
        }
        if ((Dr(n), n.flags & 128)) return (n.lanes = i), n;
        if (
          ((i = o !== null), (t = t !== null && t.memoizedState !== null), i)
        ) {
          (o = n.child),
            (c = null),
            o.alternate !== null &&
              o.alternate.memoizedState !== null &&
              o.alternate.memoizedState.cachePool !== null &&
              (c = o.alternate.memoizedState.cachePool.pool);
          var d = null;
          o.memoizedState !== null &&
            o.memoizedState.cachePool !== null &&
            (d = o.memoizedState.cachePool.pool),
            d !== c && (o.flags |= 2048);
        }
        return (
          i !== t && i && (n.child.flags |= 8192),
          Ks(n, n.updateQueue),
          xt(n),
          null
        );
      case 4:
        return Ot(), t === null && zd(n.stateNode.containerInfo), xt(n), null;
      case 10:
        return kr(n.type), xt(n), null;
      case 19:
        if ((we(qt), (c = n.memoizedState), c === null)) return xt(n), null;
        if (((o = (n.flags & 128) !== 0), (d = c.rendering), d === null))
          if (o) to(c, !1);
          else {
            if (Ct !== 0 || (t !== null && t.flags & 128))
              for (t = n.child; t !== null; ) {
                if (((d = zs(t)), d !== null)) {
                  for (
                    n.flags |= 128,
                      to(c, !1),
                      t = d.updateQueue,
                      n.updateQueue = t,
                      Ks(n, t),
                      n.subtreeFlags = 0,
                      t = i,
                      i = n.child;
                    i !== null;

                  )
                    qy(i, t), (i = i.sibling);
                  return ve(qt, (qt.current & 1) | 2), n.child;
                }
                t = t.sibling;
              }
            c.tail !== null &&
              me() > Qs &&
              ((n.flags |= 128), (o = !0), to(c, !1), (n.lanes = 4194304));
          }
        else {
          if (!o)
            if (((t = zs(d)), t !== null)) {
              if (
                ((n.flags |= 128),
                (o = !0),
                (t = t.updateQueue),
                (n.updateQueue = t),
                Ks(n, t),
                to(c, !0),
                c.tail === null &&
                  c.tailMode === "hidden" &&
                  !d.alternate &&
                  !Ie)
              )
                return xt(n), null;
            } else
              2 * me() - c.renderingStartTime > Qs &&
                i !== 536870912 &&
                ((n.flags |= 128), (o = !0), to(c, !1), (n.lanes = 4194304));
          c.isBackwards
            ? ((d.sibling = n.child), (n.child = d))
            : ((t = c.last),
              t !== null ? (t.sibling = d) : (n.child = d),
              (c.last = d));
        }
        return c.tail !== null
          ? ((n = c.tail),
            (c.rendering = n),
            (c.tail = n.sibling),
            (c.renderingStartTime = me()),
            (n.sibling = null),
            (t = qt.current),
            ve(qt, o ? (t & 1) | 2 : t & 1),
            n)
          : (xt(n), null);
      case 22:
      case 23:
        return (
          Dr(n),
          Sf(),
          (o = n.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== o && (n.flags |= 8192)
            : o && (n.flags |= 8192),
          o
            ? i & 536870912 &&
              !(n.flags & 128) &&
              (xt(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : xt(n),
          (i = n.updateQueue),
          i !== null && Ks(n, i.retryQueue),
          (i = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (i = t.memoizedState.cachePool.pool),
          (o = null),
          n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (o = n.memoizedState.cachePool.pool),
          o !== i && (n.flags |= 2048),
          t !== null && we(La),
          null
        );
      case 24:
        return (
          (i = null),
          t !== null && (i = t.memoizedState.cache),
          n.memoizedState.cache !== i && (n.flags |= 2048),
          kr(Vt),
          xt(n),
          null
        );
      case 25:
        return null;
    }
    throw Error(l(156, n.tag));
  }
  function DE(t, n) {
    switch ((gf(n), n.tag)) {
      case 1:
        return (
          (t = n.flags), t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 3:
        return (
          kr(Vt),
          Ot(),
          (t = n.flags),
          t & 65536 && !(t & 128) ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 26:
      case 27:
      case 5:
        return N(n), null;
      case 13:
        if (
          (Dr(n), (t = n.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(l(340));
          kl();
        }
        return (
          (t = n.flags), t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 19:
        return we(qt), null;
      case 4:
        return Ot(), null;
      case 10:
        return kr(n.type), null;
      case 22:
      case 23:
        return (
          Dr(n),
          Sf(),
          t !== null && we(La),
          (t = n.flags),
          t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 24:
        return kr(Vt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Gy(t, n) {
    switch ((gf(n), n.tag)) {
      case 3:
        kr(Vt), Ot();
        break;
      case 26:
      case 27:
      case 5:
        N(n);
        break;
      case 4:
        Ot();
        break;
      case 13:
        Dr(n);
        break;
      case 19:
        we(qt);
        break;
      case 10:
        kr(n.type);
        break;
      case 22:
      case 23:
        Dr(n), Sf(), t !== null && we(La);
        break;
      case 24:
        kr(Vt);
    }
  }
  var zE = {
      getCacheForType: function (t) {
        var n = nn(Vt),
          i = n.data.get(t);
        return i === void 0 && ((i = t()), n.data.set(t, i)), i;
      },
    },
    NE = typeof WeakMap == "function" ? WeakMap : Map,
    Et = 0,
    ht = null,
    qe = null,
    Ge = 0,
    mt = 0,
    wn = null,
    Hr = !1,
    ki = !1,
    hd = !1,
    Pr = 0,
    Ct = 0,
    ha = 0,
    Ya = 0,
    md = 0,
    Pn = 0,
    Ui = 0,
    no = null,
    fr = null,
    gd = !1,
    yd = 0,
    Qs = 1 / 0,
    Ws = null,
    ma = null,
    Zs = !1,
    Ia = null,
    ro = 0,
    vd = 0,
    bd = null,
    ao = 0,
    Sd = null;
  function Tn() {
    if (Et & 2 && Ge !== 0) return Ge & -Ge;
    if (G.T !== null) {
      var t = Ai;
      return t !== 0 ? t : Od();
    }
    return dm();
  }
  function Yy() {
    Pn === 0 && (Pn = !(Ge & 536870912) || Ie ? om() : 536870912);
    var t = Ln.current;
    return t !== null && (t.flags |= 32), Pn;
  }
  function cn(t, n, i) {
    ((t === ht && mt === 2) || t.cancelPendingCommit !== null) &&
      (Li(t, 0), qr(t, Ge, Pn, !1)),
      El(t, i),
      (!(Et & 2) || t !== ht) &&
        (t === ht && (!(Et & 2) && (Ya |= i), Ct === 4 && qr(t, Ge, Pn, !1)),
        dr(t));
  }
  function Iy(t, n, i) {
    if (Et & 6) throw Error(l(327));
    var o = (!i && (n & 60) === 0 && (n & t.expiredLanes) === 0) || xl(t, n),
      c = o ? UE(t, n) : Cd(t, n, !0),
      d = o;
    do {
      if (c === 0) {
        ki && !o && qr(t, n, 0, !1);
        break;
      } else if (c === 6) qr(t, n, 0, !Hr);
      else {
        if (((i = t.current.alternate), d && !BE(i))) {
          (c = Cd(t, n, !1)), (d = !1);
          continue;
        }
        if (c === 2) {
          if (((d = n), t.errorRecoveryDisabledLanes & d)) var y = 0;
          else
            (y = t.pendingLanes & -536870913),
              (y = y !== 0 ? y : y & 536870912 ? 536870912 : 0);
          if (y !== 0) {
            n = y;
            e: {
              var w = t;
              c = no;
              var z = w.current.memoizedState.isDehydrated;
              if ((z && (Li(w, y).flags |= 256), (y = Cd(w, y, !1)), y !== 2)) {
                if (hd && !z) {
                  (w.errorRecoveryDisabledLanes |= d), (Ya |= d), (c = 4);
                  break e;
                }
                (d = fr), (fr = c), d !== null && xd(d);
              }
              c = y;
            }
            if (((d = !1), c !== 2)) continue;
          }
        }
        if (c === 1) {
          Li(t, 0), qr(t, n, 0, !0);
          break;
        }
        e: {
          switch (((o = t), c)) {
            case 0:
            case 1:
              throw Error(l(345));
            case 4:
              if ((n & 4194176) === n) {
                qr(o, n, Pn, !Hr);
                break e;
              }
              break;
            case 2:
              fr = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(l(329));
          }
          if (
            ((o.finishedWork = i),
            (o.finishedLanes = n),
            (n & 62914560) === n && ((d = yd + 300 - me()), 10 < d))
          ) {
            if ((qr(o, n, Pn, !Hr), fs(o, 0) !== 0)) break e;
            o.timeoutHandle = y0(
              Xy.bind(null, o, i, fr, Ws, gd, n, Pn, Ya, Ui, Hr, 2, -0, 0),
              d
            );
            break e;
          }
          Xy(o, i, fr, Ws, gd, n, Pn, Ya, Ui, Hr, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    dr(t);
  }
  function xd(t) {
    fr === null ? (fr = t) : fr.push.apply(fr, t);
  }
  function Xy(t, n, i, o, c, d, y, w, z, U, ne, le, F) {
    var te = n.subtreeFlags;
    if (
      (te & 8192 || (te & 16785408) === 16785408) &&
      ((co = { stylesheets: null, count: 0, unsuspend: mR }),
      $y(n),
      (n = yR()),
      n !== null)
    ) {
      (t.cancelPendingCommit = n(t0.bind(null, t, i, o, c, y, w, z, 1, le, F))),
        qr(t, d, y, !U);
      return;
    }
    t0(t, i, o, c, y, w, z, ne, le, F);
  }
  function BE(t) {
    for (var n = t; ; ) {
      var i = n.tag;
      if (
        (i === 0 || i === 11 || i === 15) &&
        n.flags & 16384 &&
        ((i = n.updateQueue), i !== null && ((i = i.stores), i !== null))
      )
        for (var o = 0; o < i.length; o++) {
          var c = i[o],
            d = c.getSnapshot;
          c = c.value;
          try {
            if (!En(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (((i = n.child), n.subtreeFlags & 16384 && i !== null))
        (i.return = n), (n = i);
      else {
        if (n === t) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === t) return !0;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }
    return !0;
  }
  function qr(t, n, i, o) {
    (n &= ~md),
      (n &= ~Ya),
      (t.suspendedLanes |= n),
      (t.pingedLanes &= ~n),
      o && (t.warmLanes |= n),
      (o = t.expirationTimes);
    for (var c = n; 0 < c; ) {
      var d = 31 - Ke(c),
        y = 1 << d;
      (o[d] = -1), (c &= ~y);
    }
    i !== 0 && um(t, i, n);
  }
  function Js() {
    return Et & 6 ? !0 : (io(0), !1);
  }
  function Ed() {
    if (qe !== null) {
      if (mt === 0) var t = qe.return;
      else (t = qe), (Br = qa = null), Of(t), (wi = null), (jl = 0), (t = qe);
      for (; t !== null; ) Gy(t.alternate, t), (t = t.return);
      qe = null;
    }
  }
  function Li(t, n) {
    (t.finishedWork = null), (t.finishedLanes = 0);
    var i = t.timeoutHandle;
    i !== -1 && ((t.timeoutHandle = -1), JE(i)),
      (i = t.cancelPendingCommit),
      i !== null && ((t.cancelPendingCommit = null), i()),
      Ed(),
      (ht = t),
      (qe = i = pa(t.current, null)),
      (Ge = n),
      (mt = 0),
      (wn = null),
      (Hr = !1),
      (ki = xl(t, n)),
      (hd = !1),
      (Ui = Pn = md = Ya = ha = Ct = 0),
      (fr = no = null),
      (gd = !1),
      n & 8 && (n |= n & 32);
    var o = t.entangledLanes;
    if (o !== 0)
      for (t = t.entanglements, o &= n; 0 < o; ) {
        var c = 31 - Ke(o),
          d = 1 << c;
        (n |= t[c]), (o &= ~d);
      }
    return (Pr = n), Rs(), i;
  }
  function Ky(t, n) {
    (He = null),
      (G.H = cr),
      n === Ll
        ? ((n = cg()), (mt = 3))
        : n === og
        ? ((n = cg()), (mt = 4))
        : (mt =
            n === sy
              ? 8
              : n !== null &&
                typeof n == "object" &&
                typeof n.then == "function"
              ? 6
              : 1),
      (wn = n),
      qe === null && ((Ct = 1), Vs(t, Bn(n, t.current)));
  }
  function Qy() {
    var t = G.H;
    return (G.H = cr), t === null ? cr : t;
  }
  function Wy() {
    var t = G.A;
    return (G.A = zE), t;
  }
  function Rd() {
    (Ct = 4),
      Hr || ((Ge & 4194176) !== Ge && Ln.current !== null) || (ki = !0),
      (!(ha & 134217727) && !(Ya & 134217727)) ||
        ht === null ||
        qr(ht, Ge, Pn, !1);
  }
  function Cd(t, n, i) {
    var o = Et;
    Et |= 2;
    var c = Qy(),
      d = Wy();
    (ht !== t || Ge !== n) && ((Ws = null), Li(t, n)), (n = !1);
    var y = Ct;
    e: do
      try {
        if (mt !== 0 && qe !== null) {
          var w = qe,
            z = wn;
          switch (mt) {
            case 8:
              Ed(), (y = 6);
              break e;
            case 3:
            case 2:
            case 6:
              Ln.current === null && (n = !0);
              var U = mt;
              if (((mt = 0), (wn = null), $i(t, w, z, U), i && ki)) {
                y = 0;
                break e;
              }
              break;
            default:
              (U = mt), (mt = 0), (wn = null), $i(t, w, z, U);
          }
        }
        kE(), (y = Ct);
        break;
      } catch (ne) {
        Ky(t, ne);
      }
    while (!0);
    return (
      n && t.shellSuspendCounter++,
      (Br = qa = null),
      (Et = o),
      (G.H = c),
      (G.A = d),
      qe === null && ((ht = null), (Ge = 0), Rs()),
      y
    );
  }
  function kE() {
    for (; qe !== null; ) Zy(qe);
  }
  function UE(t, n) {
    var i = Et;
    Et |= 2;
    var o = Qy(),
      c = Wy();
    ht !== t || Ge !== n
      ? ((Ws = null), (Qs = me() + 500), Li(t, n))
      : (ki = xl(t, n));
    e: do
      try {
        if (mt !== 0 && qe !== null) {
          n = qe;
          var d = wn;
          t: switch (mt) {
            case 1:
              (mt = 0), (wn = null), $i(t, n, d, 1);
              break;
            case 2:
              if (sg(d)) {
                (mt = 0), (wn = null), Jy(n);
                break;
              }
              (n = function () {
                mt === 2 && ht === t && (mt = 7), dr(t);
              }),
                d.then(n, n);
              break e;
            case 3:
              mt = 7;
              break e;
            case 4:
              mt = 5;
              break e;
            case 7:
              sg(d)
                ? ((mt = 0), (wn = null), Jy(n))
                : ((mt = 0), (wn = null), $i(t, n, d, 7));
              break;
            case 5:
              var y = null;
              switch (qe.tag) {
                case 26:
                  y = qe.memoizedState;
                case 5:
                case 27:
                  var w = qe;
                  if (!y || O0(y)) {
                    (mt = 0), (wn = null);
                    var z = w.sibling;
                    if (z !== null) qe = z;
                    else {
                      var U = w.return;
                      U !== null ? ((qe = U), eu(U)) : (qe = null);
                    }
                    break t;
                  }
              }
              (mt = 0), (wn = null), $i(t, n, d, 5);
              break;
            case 6:
              (mt = 0), (wn = null), $i(t, n, d, 6);
              break;
            case 8:
              Ed(), (Ct = 6);
              break e;
            default:
              throw Error(l(462));
          }
        }
        LE();
        break;
      } catch (ne) {
        Ky(t, ne);
      }
    while (!0);
    return (
      (Br = qa = null),
      (G.H = o),
      (G.A = c),
      (Et = i),
      qe !== null ? 0 : ((ht = null), (Ge = 0), Rs(), Ct)
    );
  }
  function LE() {
    for (; qe !== null && !Q(); ) Zy(qe);
  }
  function Zy(t) {
    var n = Sy(t.alternate, t, Pr);
    (t.memoizedProps = t.pendingProps), n === null ? eu(t) : (qe = n);
  }
  function Jy(t) {
    var n = t,
      i = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = hy(i, n, n.pendingProps, n.type, void 0, Ge);
        break;
      case 11:
        n = hy(i, n, n.pendingProps, n.type.render, n.ref, Ge);
        break;
      case 5:
        Of(n);
      default:
        Gy(i, n), (n = qe = qy(n, Pr)), (n = Sy(i, n, Pr));
    }
    (t.memoizedProps = t.pendingProps), n === null ? eu(t) : (qe = n);
  }
  function $i(t, n, i, o) {
    (Br = qa = null), Of(n), (wi = null), (jl = 0);
    var c = n.return;
    try {
      if (wE(t, c, n, i, Ge)) {
        (Ct = 1), Vs(t, Bn(i, t.current)), (qe = null);
        return;
      }
    } catch (d) {
      if (c !== null) throw ((qe = c), d);
      (Ct = 1), Vs(t, Bn(i, t.current)), (qe = null);
      return;
    }
    n.flags & 32768
      ? (Ie || o === 1
          ? (t = !0)
          : ki || Ge & 536870912
          ? (t = !1)
          : ((Hr = t = !0),
            (o === 2 || o === 3 || o === 6) &&
              ((o = Ln.current),
              o !== null && o.tag === 13 && (o.flags |= 16384))),
        e0(n, t))
      : eu(n);
  }
  function eu(t) {
    var n = t;
    do {
      if (n.flags & 32768) {
        e0(n, Hr);
        return;
      }
      t = n.return;
      var i = ME(n.alternate, n, Pr);
      if (i !== null) {
        qe = i;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        qe = n;
        return;
      }
      qe = n = t;
    } while (n !== null);
    Ct === 0 && (Ct = 5);
  }
  function e0(t, n) {
    do {
      var i = DE(t.alternate, t);
      if (i !== null) {
        (i.flags &= 32767), (qe = i);
        return;
      }
      if (
        ((i = t.return),
        i !== null &&
          ((i.flags |= 32768), (i.subtreeFlags = 0), (i.deletions = null)),
        !n && ((t = t.sibling), t !== null))
      ) {
        qe = t;
        return;
      }
      qe = t = i;
    } while (t !== null);
    (Ct = 6), (qe = null);
  }
  function t0(t, n, i, o, c, d, y, w, z, U) {
    var ne = G.T,
      le = ue.p;
    try {
      (ue.p = 2), (G.T = null), $E(t, n, i, o, le, c, d, y, w, z, U);
    } finally {
      (G.T = ne), (ue.p = le);
    }
  }
  function $E(t, n, i, o, c, d, y, w) {
    do ji();
    while (Ia !== null);
    if (Et & 6) throw Error(l(327));
    var z = t.finishedWork;
    if (((o = t.finishedLanes), z === null)) return null;
    if (((t.finishedWork = null), (t.finishedLanes = 0), z === t.current))
      throw Error(l(177));
    (t.callbackNode = null),
      (t.callbackPriority = 0),
      (t.cancelPendingCommit = null);
    var U = z.lanes | z.childLanes;
    if (
      ((U |= pf),
      gx(t, o, U, d, y, w),
      t === ht && ((qe = ht = null), (Ge = 0)),
      (!(z.subtreeFlags & 10256) && !(z.flags & 10256)) ||
        Zs ||
        ((Zs = !0),
        (vd = U),
        (bd = i),
        qE(kt, function () {
          return ji(), null;
        })),
      (i = (z.flags & 15990) !== 0),
      z.subtreeFlags & 15990 || i
        ? ((i = G.T),
          (G.T = null),
          (d = ue.p),
          (ue.p = 2),
          (y = Et),
          (Et |= 4),
          AE(t, z),
          ky(z, t),
          sE(Ud, t.containerInfo),
          (du = !!kd),
          (Ud = kd = null),
          (t.current = z),
          Dy(t, z.alternate, z),
          de(),
          (Et = y),
          (ue.p = d),
          (G.T = i))
        : (t.current = z),
      Zs ? ((Zs = !1), (Ia = t), (ro = o)) : n0(t, U),
      (U = t.pendingLanes),
      U === 0 && (ma = null),
      Te(z.stateNode),
      dr(t),
      n !== null)
    )
      for (c = t.onRecoverableError, z = 0; z < n.length; z++)
        (U = n[z]), c(U.value, { componentStack: U.stack });
    return (
      ro & 3 && ji(),
      (U = t.pendingLanes),
      o & 4194218 && U & 42
        ? t === Sd
          ? ao++
          : ((ao = 0), (Sd = t))
        : (ao = 0),
      io(0),
      null
    );
  }
  function n0(t, n) {
    (t.pooledCacheLanes &= n) === 0 &&
      ((n = t.pooledCache), n != null && ((t.pooledCache = null), Pl(n)));
  }
  function ji() {
    if (Ia !== null) {
      var t = Ia,
        n = vd;
      vd = 0;
      var i = fm(ro),
        o = G.T,
        c = ue.p;
      try {
        if (((ue.p = 32 > i ? 32 : i), (G.T = null), Ia === null)) var d = !1;
        else {
          (i = bd), (bd = null);
          var y = Ia,
            w = ro;
          if (((Ia = null), (ro = 0), Et & 6)) throw Error(l(331));
          var z = Et;
          if (
            ((Et |= 4),
            Hy(y.current),
            Ly(y, y.current, w, i),
            (Et = z),
            io(0, !1),
            Gt && typeof Gt.onPostCommitFiberRoot == "function")
          )
            try {
              Gt.onPostCommitFiberRoot(pn, y);
            } catch {}
          d = !0;
        }
        return d;
      } finally {
        (ue.p = c), (G.T = o), n0(t, n);
      }
    }
    return !1;
  }
  function r0(t, n, i) {
    (n = Bn(i, n)),
      (n = qf(t.stateNode, n, 2)),
      (t = ua(t, n, 2)),
      t !== null && (El(t, 2), dr(t));
  }
  function st(t, n, i) {
    if (t.tag === 3) r0(t, t, i);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          r0(n, t, i);
          break;
        } else if (n.tag === 1) {
          var o = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" &&
              (ma === null || !ma.has(o)))
          ) {
            (t = Bn(i, t)),
              (i = ly(2)),
              (o = ua(n, i, 2)),
              o !== null && (oy(i, o, n, t), El(o, 2), dr(o));
            break;
          }
        }
        n = n.return;
      }
  }
  function wd(t, n, i) {
    var o = t.pingCache;
    if (o === null) {
      o = t.pingCache = new NE();
      var c = new Set();
      o.set(n, c);
    } else (c = o.get(n)), c === void 0 && ((c = new Set()), o.set(n, c));
    c.has(i) ||
      ((hd = !0), c.add(i), (t = jE.bind(null, t, n, i)), n.then(t, t));
  }
  function jE(t, n, i) {
    var o = t.pingCache;
    o !== null && o.delete(n),
      (t.pingedLanes |= t.suspendedLanes & i),
      (t.warmLanes &= ~i),
      ht === t &&
        (Ge & i) === i &&
        (Ct === 4 || (Ct === 3 && (Ge & 62914560) === Ge && 300 > me() - yd)
          ? !(Et & 2) && Li(t, 0)
          : (md |= i),
        Ui === Ge && (Ui = 0)),
      dr(t);
  }
  function a0(t, n) {
    n === 0 && (n = sm()), (t = ta(t, n)), t !== null && (El(t, n), dr(t));
  }
  function HE(t) {
    var n = t.memoizedState,
      i = 0;
    n !== null && (i = n.retryLane), a0(t, i);
  }
  function PE(t, n) {
    var i = 0;
    switch (t.tag) {
      case 13:
        var o = t.stateNode,
          c = t.memoizedState;
        c !== null && (i = c.retryLane);
        break;
      case 19:
        o = t.stateNode;
        break;
      case 22:
        o = t.stateNode._retryCache;
        break;
      default:
        throw Error(l(314));
    }
    o !== null && o.delete(n), a0(t, i);
  }
  function qE(t, n) {
    return Y(t, n);
  }
  var tu = null,
    Hi = null,
    Td = !1,
    nu = !1,
    Ad = !1,
    Xa = 0;
  function dr(t) {
    t !== Hi &&
      t.next === null &&
      (Hi === null ? (tu = Hi = t) : (Hi = Hi.next = t)),
      (nu = !0),
      Td || ((Td = !0), FE(VE));
  }
  function io(t, n) {
    if (!Ad && nu) {
      Ad = !0;
      do
        for (var i = !1, o = tu; o !== null; ) {
          if (t !== 0) {
            var c = o.pendingLanes;
            if (c === 0) var d = 0;
            else {
              var y = o.suspendedLanes,
                w = o.pingedLanes;
              (d = (1 << (31 - Ke(42 | t) + 1)) - 1),
                (d &= c & ~(y & ~w)),
                (d = d & 201326677 ? (d & 201326677) | 1 : d ? d | 2 : 0);
            }
            d !== 0 && ((i = !0), o0(o, d));
          } else
            (d = Ge),
              (d = fs(o, o === ht ? d : 0)),
              !(d & 3) || xl(o, d) || ((i = !0), o0(o, d));
          o = o.next;
        }
      while (i);
      Ad = !1;
    }
  }
  function VE() {
    nu = Td = !1;
    var t = 0;
    Xa !== 0 && (ZE() && (t = Xa), (Xa = 0));
    for (var n = me(), i = null, o = tu; o !== null; ) {
      var c = o.next,
        d = i0(o, n);
      d === 0
        ? ((o.next = null),
          i === null ? (tu = c) : (i.next = c),
          c === null && (Hi = i))
        : ((i = o), (t !== 0 || d & 3) && (nu = !0)),
        (o = c);
    }
    io(t);
  }
  function i0(t, n) {
    for (
      var i = t.suspendedLanes,
        o = t.pingedLanes,
        c = t.expirationTimes,
        d = t.pendingLanes & -62914561;
      0 < d;

    ) {
      var y = 31 - Ke(d),
        w = 1 << y,
        z = c[y];
      z === -1
        ? (!(w & i) || w & o) && (c[y] = mx(w, n))
        : z <= n && (t.expiredLanes |= w),
        (d &= ~w);
    }
    if (
      ((n = ht),
      (i = Ge),
      (i = fs(t, t === n ? i : 0)),
      (o = t.callbackNode),
      i === 0 || (t === n && mt === 2) || t.cancelPendingCommit !== null)
    )
      return (
        o !== null && o !== null && fe(o),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if (!(i & 3) || xl(t, i)) {
      if (((n = i & -i), n === t.callbackPriority)) return n;
      switch ((o !== null && fe(o), fm(i))) {
        case 2:
        case 8:
          i = ot;
          break;
        case 32:
          i = kt;
          break;
        case 268435456:
          i = dn;
          break;
        default:
          i = kt;
      }
      return (
        (o = l0.bind(null, t)),
        (i = Y(i, o)),
        (t.callbackPriority = n),
        (t.callbackNode = i),
        n
      );
    }
    return (
      o !== null && o !== null && fe(o),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function l0(t, n) {
    var i = t.callbackNode;
    if (ji() && t.callbackNode !== i) return null;
    var o = Ge;
    return (
      (o = fs(t, t === ht ? o : 0)),
      o === 0
        ? null
        : (Iy(t, o, n),
          i0(t, me()),
          t.callbackNode != null && t.callbackNode === i
            ? l0.bind(null, t)
            : null)
    );
  }
  function o0(t, n) {
    if (ji()) return null;
    Iy(t, n, !0);
  }
  function FE(t) {
    eR(function () {
      Et & 6 ? Y(lt, t) : t();
    });
  }
  function Od() {
    return Xa === 0 && (Xa = om()), Xa;
  }
  function s0(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : gs("" + t);
  }
  function u0(t, n) {
    var i = n.ownerDocument.createElement("input");
    return (
      (i.name = n.name),
      (i.value = n.value),
      t.id && i.setAttribute("form", t.id),
      n.parentNode.insertBefore(i, n),
      (t = new FormData(t)),
      i.parentNode.removeChild(i),
      t
    );
  }
  function GE(t, n, i, o, c) {
    if (n === "submit" && i && i.stateNode === c) {
      var d = s0((c[hn] || null).action),
        y = o.submitter;
      y &&
        ((n = (n = y[hn] || null)
          ? s0(n.formAction)
          : y.getAttribute("formAction")),
        n !== null && ((d = n), (y = null)));
      var w = new Ss("action", "action", null, o, c);
      t.push({
        event: w,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (o.defaultPrevented) {
                if (Xa !== 0) {
                  var z = y ? u0(c, y) : new FormData(c);
                  Lf(
                    i,
                    { pending: !0, data: z, method: c.method, action: d },
                    null,
                    z
                  );
                }
              } else
                typeof d == "function" &&
                  (w.preventDefault(),
                  (z = y ? u0(c, y) : new FormData(c)),
                  Lf(
                    i,
                    { pending: !0, data: z, method: c.method, action: d },
                    d,
                    z
                  ));
            },
            currentTarget: c,
          },
        ],
      });
    }
  }
  for (var _d = 0; _d < tg.length; _d++) {
    var Md = tg[_d],
      YE = Md.toLowerCase(),
      IE = Md[0].toUpperCase() + Md.slice(1);
    Kn(YE, "on" + IE);
  }
  Kn(Qm, "onAnimationEnd"),
    Kn(Wm, "onAnimationIteration"),
    Kn(Zm, "onAnimationStart"),
    Kn("dblclick", "onDoubleClick"),
    Kn("focusin", "onFocus"),
    Kn("focusout", "onBlur"),
    Kn(cE, "onTransitionRun"),
    Kn(fE, "onTransitionStart"),
    Kn(dE, "onTransitionCancel"),
    Kn(Jm, "onTransitionEnd"),
    pi("onMouseEnter", ["mouseout", "mouseover"]),
    pi("onMouseLeave", ["mouseout", "mouseover"]),
    pi("onPointerEnter", ["pointerout", "pointerover"]),
    pi("onPointerLeave", ["pointerout", "pointerover"]),
    _a(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    _a(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    _a("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    _a(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    _a(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    _a(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var lo =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    XE = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(lo)
    );
  function c0(t, n) {
    n = (n & 4) !== 0;
    for (var i = 0; i < t.length; i++) {
      var o = t[i],
        c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (n)
          for (var y = o.length - 1; 0 <= y; y--) {
            var w = o[y],
              z = w.instance,
              U = w.currentTarget;
            if (((w = w.listener), z !== d && c.isPropagationStopped()))
              break e;
            (d = w), (c.currentTarget = U);
            try {
              d(c);
            } catch (ne) {
              qs(ne);
            }
            (c.currentTarget = null), (d = z);
          }
        else
          for (y = 0; y < o.length; y++) {
            if (
              ((w = o[y]),
              (z = w.instance),
              (U = w.currentTarget),
              (w = w.listener),
              z !== d && c.isPropagationStopped())
            )
              break e;
            (d = w), (c.currentTarget = U);
            try {
              d(c);
            } catch (ne) {
              qs(ne);
            }
            (c.currentTarget = null), (d = z);
          }
      }
    }
  }
  function Ve(t, n) {
    var i = n[Gc];
    i === void 0 && (i = n[Gc] = new Set());
    var o = t + "__bubble";
    i.has(o) || (f0(n, t, 2, !1), i.add(o));
  }
  function Dd(t, n, i) {
    var o = 0;
    n && (o |= 4), f0(i, t, o, n);
  }
  var ru = "_reactListening" + Math.random().toString(36).slice(2);
  function zd(t) {
    if (!t[ru]) {
      (t[ru] = !0),
        hm.forEach(function (i) {
          i !== "selectionchange" && (XE.has(i) || Dd(i, !1, t), Dd(i, !0, t));
        });
      var n = t.nodeType === 9 ? t : t.ownerDocument;
      n === null || n[ru] || ((n[ru] = !0), Dd("selectionchange", !1, n));
    }
  }
  function f0(t, n, i, o) {
    switch (B0(n)) {
      case 2:
        var c = SR;
        break;
      case 8:
        c = xR;
        break;
      default:
        c = Gd;
    }
    (i = c.bind(null, n, i, t)),
      (c = void 0),
      !Jc ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (c = !0),
      o
        ? c !== void 0
          ? t.addEventListener(n, i, { capture: !0, passive: c })
          : t.addEventListener(n, i, !0)
        : c !== void 0
        ? t.addEventListener(n, i, { passive: c })
        : t.addEventListener(n, i, !1);
  }
  function Nd(t, n, i, o, c) {
    var d = o;
    if (!(n & 1) && !(n & 2) && o !== null)
      e: for (;;) {
        if (o === null) return;
        var y = o.tag;
        if (y === 3 || y === 4) {
          var w = o.stateNode.containerInfo;
          if (w === c || (w.nodeType === 8 && w.parentNode === c)) break;
          if (y === 4)
            for (y = o.return; y !== null; ) {
              var z = y.tag;
              if (
                (z === 3 || z === 4) &&
                ((z = y.stateNode.containerInfo),
                z === c || (z.nodeType === 8 && z.parentNode === c))
              )
                return;
              y = y.return;
            }
          for (; w !== null; ) {
            if (((y = Oa(w)), y === null)) return;
            if (((z = y.tag), z === 5 || z === 6 || z === 26 || z === 27)) {
              o = d = y;
              continue e;
            }
            w = w.parentNode;
          }
        }
        o = o.return;
      }
    Tm(function () {
      var U = d,
        ne = Wc(i),
        le = [];
      e: {
        var F = eg.get(t);
        if (F !== void 0) {
          var te = Ss,
            xe = t;
          switch (t) {
            case "keypress":
              if (vs(i) === 0) break e;
            case "keydown":
            case "keyup":
              te = Px;
              break;
            case "focusin":
              (xe = "focus"), (te = rf);
              break;
            case "focusout":
              (xe = "blur"), (te = rf);
              break;
            case "beforeblur":
            case "afterblur":
              te = rf;
              break;
            case "click":
              if (i.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              te = _m;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              te = _x;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              te = Fx;
              break;
            case Qm:
            case Wm:
            case Zm:
              te = zx;
              break;
            case Jm:
              te = Yx;
              break;
            case "scroll":
            case "scrollend":
              te = Ax;
              break;
            case "wheel":
              te = Xx;
              break;
            case "copy":
            case "cut":
            case "paste":
              te = Bx;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              te = Dm;
              break;
            case "toggle":
            case "beforetoggle":
              te = Qx;
          }
          var ze = (n & 4) !== 0,
            wt = !ze && (t === "scroll" || t === "scrollend"),
            P = ze ? (F !== null ? F + "Capture" : null) : F;
          ze = [];
          for (var k = U, V; k !== null; ) {
            var ie = k;
            if (
              ((V = ie.stateNode),
              (ie = ie.tag),
              (ie !== 5 && ie !== 26 && ie !== 27) ||
                V === null ||
                P === null ||
                ((ie = wl(k, P)), ie != null && ze.push(oo(k, ie, V))),
              wt)
            )
              break;
            k = k.return;
          }
          0 < ze.length &&
            ((F = new te(F, xe, null, i, ne)),
            le.push({ event: F, listeners: ze }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (
            ((F = t === "mouseover" || t === "pointerover"),
            (te = t === "mouseout" || t === "pointerout"),
            F &&
              i !== Qc &&
              (xe = i.relatedTarget || i.fromElement) &&
              (Oa(xe) || xe[ci]))
          )
            break e;
          if (
            (te || F) &&
            ((F =
              ne.window === ne
                ? ne
                : (F = ne.ownerDocument)
                ? F.defaultView || F.parentWindow
                : window),
            te
              ? ((xe = i.relatedTarget || i.toElement),
                (te = U),
                (xe = xe ? Oa(xe) : null),
                xe !== null &&
                  ((wt = ce(xe)),
                  (ze = xe.tag),
                  xe !== wt || (ze !== 5 && ze !== 27 && ze !== 6)) &&
                  (xe = null))
              : ((te = null), (xe = U)),
            te !== xe)
          ) {
            if (
              ((ze = _m),
              (ie = "onMouseLeave"),
              (P = "onMouseEnter"),
              (k = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((ze = Dm),
                (ie = "onPointerLeave"),
                (P = "onPointerEnter"),
                (k = "pointer")),
              (wt = te == null ? F : Cl(te)),
              (V = xe == null ? F : Cl(xe)),
              (F = new ze(ie, k + "leave", te, i, ne)),
              (F.target = wt),
              (F.relatedTarget = V),
              (ie = null),
              Oa(ne) === U &&
                ((ze = new ze(P, k + "enter", xe, i, ne)),
                (ze.target = V),
                (ze.relatedTarget = wt),
                (ie = ze)),
              (wt = ie),
              te && xe)
            )
              t: {
                for (ze = te, P = xe, k = 0, V = ze; V; V = Pi(V)) k++;
                for (V = 0, ie = P; ie; ie = Pi(ie)) V++;
                for (; 0 < k - V; ) (ze = Pi(ze)), k--;
                for (; 0 < V - k; ) (P = Pi(P)), V--;
                for (; k--; ) {
                  if (ze === P || (P !== null && ze === P.alternate)) break t;
                  (ze = Pi(ze)), (P = Pi(P));
                }
                ze = null;
              }
            else ze = null;
            te !== null && d0(le, F, te, ze, !1),
              xe !== null && wt !== null && d0(le, wt, xe, ze, !0);
          }
        }
        e: {
          if (
            ((F = U ? Cl(U) : window),
            (te = F.nodeName && F.nodeName.toLowerCase()),
            te === "select" || (te === "input" && F.type === "file"))
          )
            var Se = jm;
          else if (Lm(F))
            if (Hm) Se = lE;
            else {
              Se = aE;
              var Pe = rE;
            }
          else
            (te = F.nodeName),
              !te ||
              te.toLowerCase() !== "input" ||
              (F.type !== "checkbox" && F.type !== "radio")
                ? U && Kc(U.elementType) && (Se = jm)
                : (Se = iE);
          if (Se && (Se = Se(t, U))) {
            $m(le, Se, i, ne);
            break e;
          }
          Pe && Pe(t, F, U),
            t === "focusout" &&
              U &&
              F.type === "number" &&
              U.memoizedProps.value != null &&
              Xc(F, "number", F.value);
        }
        switch (((Pe = U ? Cl(U) : window), t)) {
          case "focusin":
            (Lm(Pe) || Pe.contentEditable === "true") &&
              ((bi = Pe), (cf = U), (Nl = null));
            break;
          case "focusout":
            Nl = cf = bi = null;
            break;
          case "mousedown":
            ff = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (ff = !1), Xm(le, i, ne);
            break;
          case "selectionchange":
            if (uE) break;
          case "keydown":
          case "keyup":
            Xm(le, i, ne);
        }
        var Re;
        if (lf)
          e: {
            switch (t) {
              case "compositionstart":
                var Oe = "onCompositionStart";
                break e;
              case "compositionend":
                Oe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Oe = "onCompositionUpdate";
                break e;
            }
            Oe = void 0;
          }
        else
          vi
            ? km(t, i) && (Oe = "onCompositionEnd")
            : t === "keydown" &&
              i.keyCode === 229 &&
              (Oe = "onCompositionStart");
        Oe &&
          (zm &&
            i.locale !== "ko" &&
            (vi || Oe !== "onCompositionStart"
              ? Oe === "onCompositionEnd" && vi && (Re = Am())
              : ((ea = ne),
                (ef = "value" in ea ? ea.value : ea.textContent),
                (vi = !0))),
          (Pe = au(U, Oe)),
          0 < Pe.length &&
            ((Oe = new Mm(Oe, t, null, i, ne)),
            le.push({ event: Oe, listeners: Pe }),
            Re
              ? (Oe.data = Re)
              : ((Re = Um(i)), Re !== null && (Oe.data = Re)))),
          (Re = Zx ? Jx(t, i) : eE(t, i)) &&
            ((Oe = au(U, "onBeforeInput")),
            0 < Oe.length &&
              ((Pe = new Mm("onBeforeInput", "beforeinput", null, i, ne)),
              le.push({ event: Pe, listeners: Oe }),
              (Pe.data = Re))),
          GE(le, t, U, i, ne);
      }
      c0(le, n);
    });
  }
  function oo(t, n, i) {
    return { instance: t, listener: n, currentTarget: i };
  }
  function au(t, n) {
    for (var i = n + "Capture", o = []; t !== null; ) {
      var c = t,
        d = c.stateNode;
      (c = c.tag),
        (c !== 5 && c !== 26 && c !== 27) ||
          d === null ||
          ((c = wl(t, i)),
          c != null && o.unshift(oo(t, c, d)),
          (c = wl(t, n)),
          c != null && o.push(oo(t, c, d))),
        (t = t.return);
    }
    return o;
  }
  function Pi(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function d0(t, n, i, o, c) {
    for (var d = n._reactName, y = []; i !== null && i !== o; ) {
      var w = i,
        z = w.alternate,
        U = w.stateNode;
      if (((w = w.tag), z !== null && z === o)) break;
      (w !== 5 && w !== 26 && w !== 27) ||
        U === null ||
        ((z = U),
        c
          ? ((U = wl(i, d)), U != null && y.unshift(oo(i, U, z)))
          : c || ((U = wl(i, d)), U != null && y.push(oo(i, U, z)))),
        (i = i.return);
    }
    y.length !== 0 && t.push({ event: n, listeners: y });
  }
  var KE = /\r\n?/g,
    QE = /\u0000|\uFFFD/g;
  function p0(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        KE,
        `
`
      )
      .replace(QE, "");
  }
  function h0(t, n) {
    return (n = p0(n)), p0(t) === n;
  }
  function iu() {}
  function rt(t, n, i, o, c, d) {
    switch (i) {
      case "children":
        typeof o == "string"
          ? n === "body" || (n === "textarea" && o === "") || mi(t, o)
          : (typeof o == "number" || typeof o == "bigint") &&
            n !== "body" &&
            mi(t, "" + o);
        break;
      case "className":
        ps(t, "class", o);
        break;
      case "tabIndex":
        ps(t, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ps(t, i, o);
        break;
      case "style":
        Cm(t, o, d);
        break;
      case "data":
        if (n !== "object") {
          ps(t, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (n !== "a" || i !== "href")) {
          t.removeAttribute(i);
          break;
        }
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "symbol" ||
          typeof o == "boolean"
        ) {
          t.removeAttribute(i);
          break;
        }
        (o = gs("" + o)), t.setAttribute(i, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          t.setAttribute(
            i,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof d == "function" &&
            (i === "formAction"
              ? (n !== "input" && rt(t, n, "name", c.name, c, null),
                rt(t, n, "formEncType", c.formEncType, c, null),
                rt(t, n, "formMethod", c.formMethod, c, null),
                rt(t, n, "formTarget", c.formTarget, c, null))
              : (rt(t, n, "encType", c.encType, c, null),
                rt(t, n, "method", c.method, c, null),
                rt(t, n, "target", c.target, c, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          t.removeAttribute(i);
          break;
        }
        (o = gs("" + o)), t.setAttribute(i, o);
        break;
      case "onClick":
        o != null && (t.onclick = iu);
        break;
      case "onScroll":
        o != null && Ve("scroll", t);
        break;
      case "onScrollEnd":
        o != null && Ve("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(l(61));
          if (((i = o.__html), i != null)) {
            if (c.children != null) throw Error(l(60));
            t.innerHTML = i;
          }
        }
        break;
      case "multiple":
        t.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        t.muted = o && typeof o != "function" && typeof o != "symbol";
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
          o == null ||
          typeof o == "function" ||
          typeof o == "boolean" ||
          typeof o == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (i = gs("" + o)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", i);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol"
          ? t.setAttribute(i, "" + o)
          : t.removeAttribute(i);
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
        o && typeof o != "function" && typeof o != "symbol"
          ? t.setAttribute(i, "")
          : t.removeAttribute(i);
        break;
      case "capture":
      case "download":
        o === !0
          ? t.setAttribute(i, "")
          : o !== !1 &&
            o != null &&
            typeof o != "function" &&
            typeof o != "symbol"
          ? t.setAttribute(i, o)
          : t.removeAttribute(i);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        !isNaN(o) &&
        1 <= o
          ? t.setAttribute(i, o)
          : t.removeAttribute(i);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o)
          ? t.removeAttribute(i)
          : t.setAttribute(i, o);
        break;
      case "popover":
        Ve("beforetoggle", t), Ve("toggle", t), ds(t, "popover", o);
        break;
      case "xlinkActuate":
        Or(t, "http://www.w3.org/1999/xlink", "xlink:actuate", o);
        break;
      case "xlinkArcrole":
        Or(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", o);
        break;
      case "xlinkRole":
        Or(t, "http://www.w3.org/1999/xlink", "xlink:role", o);
        break;
      case "xlinkShow":
        Or(t, "http://www.w3.org/1999/xlink", "xlink:show", o);
        break;
      case "xlinkTitle":
        Or(t, "http://www.w3.org/1999/xlink", "xlink:title", o);
        break;
      case "xlinkType":
        Or(t, "http://www.w3.org/1999/xlink", "xlink:type", o);
        break;
      case "xmlBase":
        Or(t, "http://www.w3.org/XML/1998/namespace", "xml:base", o);
        break;
      case "xmlLang":
        Or(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", o);
        break;
      case "xmlSpace":
        Or(t, "http://www.w3.org/XML/1998/namespace", "xml:space", o);
        break;
      case "is":
        ds(t, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < i.length) ||
          (i[0] !== "o" && i[0] !== "O") ||
          (i[1] !== "n" && i[1] !== "N")) &&
          ((i = wx.get(i) || i), ds(t, i, o));
    }
  }
  function Bd(t, n, i, o, c, d) {
    switch (i) {
      case "style":
        Cm(t, o, d);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(l(61));
          if (((i = o.__html), i != null)) {
            if (c.children != null) throw Error(l(60));
            t.innerHTML = i;
          }
        }
        break;
      case "children":
        typeof o == "string"
          ? mi(t, o)
          : (typeof o == "number" || typeof o == "bigint") && mi(t, "" + o);
        break;
      case "onScroll":
        o != null && Ve("scroll", t);
        break;
      case "onScrollEnd":
        o != null && Ve("scrollend", t);
        break;
      case "onClick":
        o != null && (t.onclick = iu);
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
        if (!mm.hasOwnProperty(i))
          e: {
            if (
              i[0] === "o" &&
              i[1] === "n" &&
              ((c = i.endsWith("Capture")),
              (n = i.slice(2, c ? i.length - 7 : void 0)),
              (d = t[hn] || null),
              (d = d != null ? d[i] : null),
              typeof d == "function" && t.removeEventListener(n, d, c),
              typeof o == "function")
            ) {
              typeof d != "function" &&
                d !== null &&
                (i in t
                  ? (t[i] = null)
                  : t.hasAttribute(i) && t.removeAttribute(i)),
                t.addEventListener(n, o, c);
              break e;
            }
            i in t
              ? (t[i] = o)
              : o === !0
              ? t.setAttribute(i, "")
              : ds(t, i, o);
          }
    }
  }
  function Jt(t, n, i) {
    switch (n) {
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
        Ve("error", t), Ve("load", t);
        var o = !1,
          c = !1,
          d;
        for (d in i)
          if (i.hasOwnProperty(d)) {
            var y = i[d];
            if (y != null)
              switch (d) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  c = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(l(137, n));
                default:
                  rt(t, n, d, y, i, null);
              }
          }
        c && rt(t, n, "srcSet", i.srcSet, i, null),
          o && rt(t, n, "src", i.src, i, null);
        return;
      case "input":
        Ve("invalid", t);
        var w = (d = y = c = null),
          z = null,
          U = null;
        for (o in i)
          if (i.hasOwnProperty(o)) {
            var ne = i[o];
            if (ne != null)
              switch (o) {
                case "name":
                  c = ne;
                  break;
                case "type":
                  y = ne;
                  break;
                case "checked":
                  z = ne;
                  break;
                case "defaultChecked":
                  U = ne;
                  break;
                case "value":
                  d = ne;
                  break;
                case "defaultValue":
                  w = ne;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (ne != null) throw Error(l(137, n));
                  break;
                default:
                  rt(t, n, o, ne, i, null);
              }
          }
        Sm(t, d, w, z, U, y, c, !1), hs(t);
        return;
      case "select":
        Ve("invalid", t), (o = y = d = null);
        for (c in i)
          if (i.hasOwnProperty(c) && ((w = i[c]), w != null))
            switch (c) {
              case "value":
                d = w;
                break;
              case "defaultValue":
                y = w;
                break;
              case "multiple":
                o = w;
              default:
                rt(t, n, c, w, i, null);
            }
        (n = d),
          (i = y),
          (t.multiple = !!o),
          n != null ? hi(t, !!o, n, !1) : i != null && hi(t, !!o, i, !0);
        return;
      case "textarea":
        Ve("invalid", t), (d = c = o = null);
        for (y in i)
          if (i.hasOwnProperty(y) && ((w = i[y]), w != null))
            switch (y) {
              case "value":
                o = w;
                break;
              case "defaultValue":
                c = w;
                break;
              case "children":
                d = w;
                break;
              case "dangerouslySetInnerHTML":
                if (w != null) throw Error(l(91));
                break;
              default:
                rt(t, n, y, w, i, null);
            }
        Em(t, o, c, d), hs(t);
        return;
      case "option":
        for (z in i)
          if (i.hasOwnProperty(z) && ((o = i[z]), o != null))
            switch (z) {
              case "selected":
                t.selected =
                  o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                rt(t, n, z, o, i, null);
            }
        return;
      case "dialog":
        Ve("cancel", t), Ve("close", t);
        break;
      case "iframe":
      case "object":
        Ve("load", t);
        break;
      case "video":
      case "audio":
        for (o = 0; o < lo.length; o++) Ve(lo[o], t);
        break;
      case "image":
        Ve("error", t), Ve("load", t);
        break;
      case "details":
        Ve("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Ve("error", t), Ve("load", t);
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
        for (U in i)
          if (i.hasOwnProperty(U) && ((o = i[U]), o != null))
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(l(137, n));
              default:
                rt(t, n, U, o, i, null);
            }
        return;
      default:
        if (Kc(n)) {
          for (ne in i)
            i.hasOwnProperty(ne) &&
              ((o = i[ne]), o !== void 0 && Bd(t, n, ne, o, i, void 0));
          return;
        }
    }
    for (w in i)
      i.hasOwnProperty(w) && ((o = i[w]), o != null && rt(t, n, w, o, i, null));
  }
  function WE(t, n, i, o) {
    switch (n) {
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
          d = null,
          y = null,
          w = null,
          z = null,
          U = null,
          ne = null;
        for (te in i) {
          var le = i[te];
          if (i.hasOwnProperty(te) && le != null)
            switch (te) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                z = le;
              default:
                o.hasOwnProperty(te) || rt(t, n, te, null, o, le);
            }
        }
        for (var F in o) {
          var te = o[F];
          if (((le = i[F]), o.hasOwnProperty(F) && (te != null || le != null)))
            switch (F) {
              case "type":
                d = te;
                break;
              case "name":
                c = te;
                break;
              case "checked":
                U = te;
                break;
              case "defaultChecked":
                ne = te;
                break;
              case "value":
                y = te;
                break;
              case "defaultValue":
                w = te;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (te != null) throw Error(l(137, n));
                break;
              default:
                te !== le && rt(t, n, F, te, o, le);
            }
        }
        Ic(t, y, w, z, U, ne, d, c);
        return;
      case "select":
        te = y = w = F = null;
        for (d in i)
          if (((z = i[d]), i.hasOwnProperty(d) && z != null))
            switch (d) {
              case "value":
                break;
              case "multiple":
                te = z;
              default:
                o.hasOwnProperty(d) || rt(t, n, d, null, o, z);
            }
        for (c in o)
          if (
            ((d = o[c]),
            (z = i[c]),
            o.hasOwnProperty(c) && (d != null || z != null))
          )
            switch (c) {
              case "value":
                F = d;
                break;
              case "defaultValue":
                w = d;
                break;
              case "multiple":
                y = d;
              default:
                d !== z && rt(t, n, c, d, o, z);
            }
        (n = w),
          (i = y),
          (o = te),
          F != null
            ? hi(t, !!i, F, !1)
            : !!o != !!i &&
              (n != null ? hi(t, !!i, n, !0) : hi(t, !!i, i ? [] : "", !1));
        return;
      case "textarea":
        te = F = null;
        for (w in i)
          if (
            ((c = i[w]),
            i.hasOwnProperty(w) && c != null && !o.hasOwnProperty(w))
          )
            switch (w) {
              case "value":
                break;
              case "children":
                break;
              default:
                rt(t, n, w, null, o, c);
            }
        for (y in o)
          if (
            ((c = o[y]),
            (d = i[y]),
            o.hasOwnProperty(y) && (c != null || d != null))
          )
            switch (y) {
              case "value":
                F = c;
                break;
              case "defaultValue":
                te = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(l(91));
                break;
              default:
                c !== d && rt(t, n, y, c, o, d);
            }
        xm(t, F, te);
        return;
      case "option":
        for (var xe in i)
          if (
            ((F = i[xe]),
            i.hasOwnProperty(xe) && F != null && !o.hasOwnProperty(xe))
          )
            switch (xe) {
              case "selected":
                t.selected = !1;
                break;
              default:
                rt(t, n, xe, null, o, F);
            }
        for (z in o)
          if (
            ((F = o[z]),
            (te = i[z]),
            o.hasOwnProperty(z) && F !== te && (F != null || te != null))
          )
            switch (z) {
              case "selected":
                t.selected =
                  F && typeof F != "function" && typeof F != "symbol";
                break;
              default:
                rt(t, n, z, F, o, te);
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
        for (var ze in i)
          (F = i[ze]),
            i.hasOwnProperty(ze) &&
              F != null &&
              !o.hasOwnProperty(ze) &&
              rt(t, n, ze, null, o, F);
        for (U in o)
          if (
            ((F = o[U]),
            (te = i[U]),
            o.hasOwnProperty(U) && F !== te && (F != null || te != null))
          )
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (F != null) throw Error(l(137, n));
                break;
              default:
                rt(t, n, U, F, o, te);
            }
        return;
      default:
        if (Kc(n)) {
          for (var wt in i)
            (F = i[wt]),
              i.hasOwnProperty(wt) &&
                F !== void 0 &&
                !o.hasOwnProperty(wt) &&
                Bd(t, n, wt, void 0, o, F);
          for (ne in o)
            (F = o[ne]),
              (te = i[ne]),
              !o.hasOwnProperty(ne) ||
                F === te ||
                (F === void 0 && te === void 0) ||
                Bd(t, n, ne, F, o, te);
          return;
        }
    }
    for (var P in i)
      (F = i[P]),
        i.hasOwnProperty(P) &&
          F != null &&
          !o.hasOwnProperty(P) &&
          rt(t, n, P, null, o, F);
    for (le in o)
      (F = o[le]),
        (te = i[le]),
        !o.hasOwnProperty(le) ||
          F === te ||
          (F == null && te == null) ||
          rt(t, n, le, F, o, te);
  }
  var kd = null,
    Ud = null;
  function lu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function m0(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function g0(t, n) {
    if (t === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && n === "foreignObject" ? 0 : t;
  }
  function Ld(t, n) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      typeof n.children == "bigint" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var $d = null;
  function ZE() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === $d
        ? !1
        : (($d = t), !0)
      : (($d = null), !1);
  }
  var y0 = typeof setTimeout == "function" ? setTimeout : void 0,
    JE = typeof clearTimeout == "function" ? clearTimeout : void 0,
    v0 = typeof Promise == "function" ? Promise : void 0,
    eR =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof v0 < "u"
        ? function (t) {
            return v0.resolve(null).then(t).catch(tR);
          }
        : y0;
  function tR(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function jd(t, n) {
    var i = n,
      o = 0;
    do {
      var c = i.nextSibling;
      if ((t.removeChild(i), c && c.nodeType === 8))
        if (((i = c.data), i === "/$")) {
          if (o === 0) {
            t.removeChild(c), go(n);
            return;
          }
          o--;
        } else (i !== "$" && i !== "$?" && i !== "$!") || o++;
      i = c;
    } while (i);
    go(n);
  }
  function Hd(t) {
    var n = t.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var i = n;
      switch (((n = n.nextSibling), i.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Hd(i), Yc(i);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (i.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(i);
    }
  }
  function nR(t, n, i, o) {
    for (; t.nodeType === 1; ) {
      var c = i;
      if (t.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!o && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (o) {
        if (!t[Rl])
          switch (n) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((d = t.getAttribute("rel")),
                d === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                d !== c.rel ||
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
                ((d = t.getAttribute("src")),
                (d !== (c.src == null ? null : c.src) ||
                  t.getAttribute("type") !== (c.type == null ? null : c.type) ||
                  t.getAttribute("crossorigin") !==
                    (c.crossOrigin == null ? null : c.crossOrigin)) &&
                  d &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (n === "input" && t.type === "hidden") {
        var d = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && t.getAttribute("name") === d) return t;
      } else return t;
      if (((t = Zn(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function rR(t, n, i) {
    if (n === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !i) ||
        ((t = Zn(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Zn(t) {
    for (; t != null; t = t.nextSibling) {
      var n = t.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (
          ((n = t.data),
          n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
        )
          break;
        if (n === "/$") return null;
      }
    }
    return t;
  }
  function b0(t) {
    t = t.previousSibling;
    for (var n = 0; t; ) {
      if (t.nodeType === 8) {
        var i = t.data;
        if (i === "$" || i === "$!" || i === "$?") {
          if (n === 0) return t;
          n--;
        } else i === "/$" && n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function S0(t, n, i) {
    switch (((n = lu(i)), t)) {
      case "html":
        if (((t = n.documentElement), !t)) throw Error(l(452));
        return t;
      case "head":
        if (((t = n.head), !t)) throw Error(l(453));
        return t;
      case "body":
        if (((t = n.body), !t)) throw Error(l(454));
        return t;
      default:
        throw Error(l(451));
    }
  }
  var qn = new Map(),
    x0 = new Set();
  function ou(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.ownerDocument;
  }
  var Vr = ue.d;
  ue.d = { f: aR, r: iR, D: lR, C: oR, L: sR, m: uR, X: fR, S: cR, M: dR };
  function aR() {
    var t = Vr.f(),
      n = Js();
    return t || n;
  }
  function iR(t) {
    var n = fi(t);
    n !== null && n.tag === 5 && n.type === "form" ? Xg(n) : Vr.r(t);
  }
  var qi = typeof document > "u" ? null : document;
  function E0(t, n, i) {
    var o = qi;
    if (o && typeof n == "string" && n) {
      var c = zn(n);
      (c = 'link[rel="' + t + '"][href="' + c + '"]'),
        typeof i == "string" && (c += '[crossorigin="' + i + '"]'),
        x0.has(c) ||
          (x0.add(c),
          (t = { rel: t, crossOrigin: i, href: n }),
          o.querySelector(c) === null &&
            ((n = o.createElement("link")),
            Jt(n, "link", t),
            Yt(n),
            o.head.appendChild(n)));
    }
  }
  function lR(t) {
    Vr.D(t), E0("dns-prefetch", t, null);
  }
  function oR(t, n) {
    Vr.C(t, n), E0("preconnect", t, n);
  }
  function sR(t, n, i) {
    Vr.L(t, n, i);
    var o = qi;
    if (o && t && n) {
      var c = 'link[rel="preload"][as="' + zn(n) + '"]';
      n === "image" && i && i.imageSrcSet
        ? ((c += '[imagesrcset="' + zn(i.imageSrcSet) + '"]'),
          typeof i.imageSizes == "string" &&
            (c += '[imagesizes="' + zn(i.imageSizes) + '"]'))
        : (c += '[href="' + zn(t) + '"]');
      var d = c;
      switch (n) {
        case "style":
          d = Vi(t);
          break;
        case "script":
          d = Fi(t);
      }
      qn.has(d) ||
        ((t = E(
          {
            rel: "preload",
            href: n === "image" && i && i.imageSrcSet ? void 0 : t,
            as: n,
          },
          i
        )),
        qn.set(d, t),
        o.querySelector(c) !== null ||
          (n === "style" && o.querySelector(so(d))) ||
          (n === "script" && o.querySelector(uo(d))) ||
          ((n = o.createElement("link")),
          Jt(n, "link", t),
          Yt(n),
          o.head.appendChild(n)));
    }
  }
  function uR(t, n) {
    Vr.m(t, n);
    var i = qi;
    if (i && t) {
      var o = n && typeof n.as == "string" ? n.as : "script",
        c =
          'link[rel="modulepreload"][as="' + zn(o) + '"][href="' + zn(t) + '"]',
        d = c;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          d = Fi(t);
      }
      if (
        !qn.has(d) &&
        ((t = E({ rel: "modulepreload", href: t }, n)),
        qn.set(d, t),
        i.querySelector(c) === null)
      ) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (i.querySelector(uo(d))) return;
        }
        (o = i.createElement("link")),
          Jt(o, "link", t),
          Yt(o),
          i.head.appendChild(o);
      }
    }
  }
  function cR(t, n, i) {
    Vr.S(t, n, i);
    var o = qi;
    if (o && t) {
      var c = di(o).hoistableStyles,
        d = Vi(t);
      n = n || "default";
      var y = c.get(d);
      if (!y) {
        var w = { loading: 0, preload: null };
        if ((y = o.querySelector(so(d)))) w.loading = 5;
        else {
          (t = E({ rel: "stylesheet", href: t, "data-precedence": n }, i)),
            (i = qn.get(d)) && Pd(t, i);
          var z = (y = o.createElement("link"));
          Yt(z),
            Jt(z, "link", t),
            (z._p = new Promise(function (U, ne) {
              (z.onload = U), (z.onerror = ne);
            })),
            z.addEventListener("load", function () {
              w.loading |= 1;
            }),
            z.addEventListener("error", function () {
              w.loading |= 2;
            }),
            (w.loading |= 4),
            su(y, n, o);
        }
        (y = { type: "stylesheet", instance: y, count: 1, state: w }),
          c.set(d, y);
      }
    }
  }
  function fR(t, n) {
    Vr.X(t, n);
    var i = qi;
    if (i && t) {
      var o = di(i).hoistableScripts,
        c = Fi(t),
        d = o.get(c);
      d ||
        ((d = i.querySelector(uo(c))),
        d ||
          ((t = E({ src: t, async: !0 }, n)),
          (n = qn.get(c)) && qd(t, n),
          (d = i.createElement("script")),
          Yt(d),
          Jt(d, "link", t),
          i.head.appendChild(d)),
        (d = { type: "script", instance: d, count: 1, state: null }),
        o.set(c, d));
    }
  }
  function dR(t, n) {
    Vr.M(t, n);
    var i = qi;
    if (i && t) {
      var o = di(i).hoistableScripts,
        c = Fi(t),
        d = o.get(c);
      d ||
        ((d = i.querySelector(uo(c))),
        d ||
          ((t = E({ src: t, async: !0, type: "module" }, n)),
          (n = qn.get(c)) && qd(t, n),
          (d = i.createElement("script")),
          Yt(d),
          Jt(d, "link", t),
          i.head.appendChild(d)),
        (d = { type: "script", instance: d, count: 1, state: null }),
        o.set(c, d));
    }
  }
  function R0(t, n, i, o) {
    var c = (c = Ye.current) ? ou(c) : null;
    if (!c) throw Error(l(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof i.precedence == "string" && typeof i.href == "string"
          ? ((n = Vi(i.href)),
            (i = di(c).hoistableStyles),
            (o = i.get(n)),
            o ||
              ((o = { type: "style", instance: null, count: 0, state: null }),
              i.set(n, o)),
            o)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          i.rel === "stylesheet" &&
          typeof i.href == "string" &&
          typeof i.precedence == "string"
        ) {
          t = Vi(i.href);
          var d = di(c).hoistableStyles,
            y = d.get(t);
          if (
            (y ||
              ((c = c.ownerDocument || c),
              (y = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              d.set(t, y),
              (d = c.querySelector(so(t))) &&
                !d._p &&
                ((y.instance = d), (y.state.loading = 5)),
              qn.has(t) ||
                ((i = {
                  rel: "preload",
                  as: "style",
                  href: i.href,
                  crossOrigin: i.crossOrigin,
                  integrity: i.integrity,
                  media: i.media,
                  hrefLang: i.hrefLang,
                  referrerPolicy: i.referrerPolicy,
                }),
                qn.set(t, i),
                d || pR(c, t, i, y.state))),
            n && o === null)
          )
            throw Error(l(528, ""));
          return y;
        }
        if (n && o !== null) throw Error(l(529, ""));
        return null;
      case "script":
        return (
          (n = i.async),
          (i = i.src),
          typeof i == "string" &&
          n &&
          typeof n != "function" &&
          typeof n != "symbol"
            ? ((n = Fi(i)),
              (i = di(c).hoistableScripts),
              (o = i.get(n)),
              o ||
                ((o = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                i.set(n, o)),
              o)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(l(444, t));
    }
  }
  function Vi(t) {
    return 'href="' + zn(t) + '"';
  }
  function so(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function C0(t) {
    return E({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function pR(t, n, i, o) {
    t.querySelector('link[rel="preload"][as="style"][' + n + "]")
      ? (o.loading = 1)
      : ((n = t.createElement("link")),
        (o.preload = n),
        n.addEventListener("load", function () {
          return (o.loading |= 1);
        }),
        n.addEventListener("error", function () {
          return (o.loading |= 2);
        }),
        Jt(n, "link", i),
        Yt(n),
        t.head.appendChild(n));
  }
  function Fi(t) {
    return '[src="' + zn(t) + '"]';
  }
  function uo(t) {
    return "script[async]" + t;
  }
  function w0(t, n, i) {
    if ((n.count++, n.instance === null))
      switch (n.type) {
        case "style":
          var o = t.querySelector('style[data-href~="' + zn(i.href) + '"]');
          if (o) return (n.instance = o), Yt(o), o;
          var c = E({}, i, {
            "data-href": i.href,
            "data-precedence": i.precedence,
            href: null,
            precedence: null,
          });
          return (
            (o = (t.ownerDocument || t).createElement("style")),
            Yt(o),
            Jt(o, "style", c),
            su(o, i.precedence, t),
            (n.instance = o)
          );
        case "stylesheet":
          c = Vi(i.href);
          var d = t.querySelector(so(c));
          if (d) return (n.state.loading |= 4), (n.instance = d), Yt(d), d;
          (o = C0(i)),
            (c = qn.get(c)) && Pd(o, c),
            (d = (t.ownerDocument || t).createElement("link")),
            Yt(d);
          var y = d;
          return (
            (y._p = new Promise(function (w, z) {
              (y.onload = w), (y.onerror = z);
            })),
            Jt(d, "link", o),
            (n.state.loading |= 4),
            su(d, i.precedence, t),
            (n.instance = d)
          );
        case "script":
          return (
            (d = Fi(i.src)),
            (c = t.querySelector(uo(d)))
              ? ((n.instance = c), Yt(c), c)
              : ((o = i),
                (c = qn.get(d)) && ((o = E({}, i)), qd(o, c)),
                (t = t.ownerDocument || t),
                (c = t.createElement("script")),
                Yt(c),
                Jt(c, "link", o),
                t.head.appendChild(c),
                (n.instance = c))
          );
        case "void":
          return null;
        default:
          throw Error(l(443, n.type));
      }
    else
      n.type === "stylesheet" &&
        !(n.state.loading & 4) &&
        ((o = n.instance), (n.state.loading |= 4), su(o, i.precedence, t));
    return n.instance;
  }
  function su(t, n, i) {
    for (
      var o = i.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        c = o.length ? o[o.length - 1] : null,
        d = c,
        y = 0;
      y < o.length;
      y++
    ) {
      var w = o[y];
      if (w.dataset.precedence === n) d = w;
      else if (d !== c) break;
    }
    d
      ? d.parentNode.insertBefore(t, d.nextSibling)
      : ((n = i.nodeType === 9 ? i.head : i), n.insertBefore(t, n.firstChild));
  }
  function Pd(t, n) {
    t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
      t.title == null && (t.title = n.title);
  }
  function qd(t, n) {
    t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
      t.integrity == null && (t.integrity = n.integrity);
  }
  var uu = null;
  function T0(t, n, i) {
    if (uu === null) {
      var o = new Map(),
        c = (uu = new Map());
      c.set(i, o);
    } else (c = uu), (o = c.get(i)), o || ((o = new Map()), c.set(i, o));
    if (o.has(t)) return o;
    for (
      o.set(t, null), i = i.getElementsByTagName(t), c = 0;
      c < i.length;
      c++
    ) {
      var d = i[c];
      if (
        !(
          d[Rl] ||
          d[tn] ||
          (t === "link" && d.getAttribute("rel") === "stylesheet")
        ) &&
        d.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var y = d.getAttribute(n) || "";
        y = t + y;
        var w = o.get(y);
        w ? w.push(d) : o.set(y, [d]);
      }
    }
    return o;
  }
  function A0(t, n, i) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        i,
        n === "title" ? t.querySelector("head > title") : null
      );
  }
  function hR(t, n, i) {
    if (i === 1 || n.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof n.precedence != "string" ||
          typeof n.href != "string" ||
          n.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof n.rel != "string" ||
          typeof n.href != "string" ||
          n.href === "" ||
          n.onLoad ||
          n.onError
        )
          break;
        switch (n.rel) {
          case "stylesheet":
            return (
              (t = n.disabled), typeof n.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          n.async &&
          typeof n.async != "function" &&
          typeof n.async != "symbol" &&
          !n.onLoad &&
          !n.onError &&
          n.src &&
          typeof n.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function O0(t) {
    return !(t.type === "stylesheet" && !(t.state.loading & 3));
  }
  var co = null;
  function mR() {}
  function gR(t, n, i) {
    if (co === null) throw Error(l(475));
    var o = co;
    if (
      n.type === "stylesheet" &&
      (typeof i.media != "string" || matchMedia(i.media).matches !== !1) &&
      !(n.state.loading & 4)
    ) {
      if (n.instance === null) {
        var c = Vi(i.href),
          d = t.querySelector(so(c));
        if (d) {
          (t = d._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (o.count++, (o = cu.bind(o)), t.then(o, o)),
            (n.state.loading |= 4),
            (n.instance = d),
            Yt(d);
          return;
        }
        (d = t.ownerDocument || t),
          (i = C0(i)),
          (c = qn.get(c)) && Pd(i, c),
          (d = d.createElement("link")),
          Yt(d);
        var y = d;
        (y._p = new Promise(function (w, z) {
          (y.onload = w), (y.onerror = z);
        })),
          Jt(d, "link", i),
          (n.instance = d);
      }
      o.stylesheets === null && (o.stylesheets = new Map()),
        o.stylesheets.set(n, t),
        (t = n.state.preload) &&
          !(n.state.loading & 3) &&
          (o.count++,
          (n = cu.bind(o)),
          t.addEventListener("load", n),
          t.addEventListener("error", n));
    }
  }
  function yR() {
    if (co === null) throw Error(l(475));
    var t = co;
    return (
      t.stylesheets && t.count === 0 && Vd(t, t.stylesheets),
      0 < t.count
        ? function (n) {
            var i = setTimeout(function () {
              if ((t.stylesheets && Vd(t, t.stylesheets), t.unsuspend)) {
                var o = t.unsuspend;
                (t.unsuspend = null), o();
              }
            }, 6e4);
            return (
              (t.unsuspend = n),
              function () {
                (t.unsuspend = null), clearTimeout(i);
              }
            );
          }
        : null
    );
  }
  function cu() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Vd(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var fu = null;
  function Vd(t, n) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (fu = new Map()),
        n.forEach(vR, t),
        (fu = null),
        cu.call(t));
  }
  function vR(t, n) {
    if (!(n.state.loading & 4)) {
      var i = fu.get(t);
      if (i) var o = i.get(null);
      else {
        (i = new Map()), fu.set(t, i);
        for (
          var c = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            d = 0;
          d < c.length;
          d++
        ) {
          var y = c[d];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") &&
            (i.set(y.dataset.precedence, y), (o = y));
        }
        o && i.set(null, o);
      }
      (c = n.instance),
        (y = c.getAttribute("data-precedence")),
        (d = i.get(y) || o),
        d === o && i.set(null, c),
        i.set(y, c),
        this.count++,
        (o = cu.bind(this)),
        c.addEventListener("load", o),
        c.addEventListener("error", o),
        d
          ? d.parentNode.insertBefore(c, d.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(c, t.firstChild)),
        (n.state.loading |= 4);
    }
  }
  var fo = {
    $$typeof: R,
    Provider: null,
    Consumer: null,
    _currentValue: ye,
    _currentValue2: ye,
    _threadCount: 0,
  };
  function bR(t, n, i, o, c, d, y, w) {
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
      (this.expirationTimes = Fc(-1)),
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
      (this.entanglements = Fc(0)),
      (this.hiddenUpdates = Fc(null)),
      (this.identifierPrefix = o),
      (this.onUncaughtError = c),
      (this.onCaughtError = d),
      (this.onRecoverableError = y),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = w),
      (this.incompleteTransitions = new Map());
  }
  function _0(t, n, i, o, c, d, y, w, z, U, ne, le) {
    return (
      (t = new bR(t, n, i, y, w, z, U, le)),
      (n = 1),
      d === !0 && (n |= 24),
      (d = Hn(3, null, null, n)),
      (t.current = d),
      (d.stateNode = t),
      (n = xf()),
      n.refCount++,
      (t.pooledCache = n),
      n.refCount++,
      (d.memoizedState = { element: o, isDehydrated: i, cache: n }),
      td(d),
      t
    );
  }
  function M0(t) {
    return t ? ((t = Ei), t) : Ei;
  }
  function D0(t, n, i, o, c, d) {
    (c = M0(c)),
      o.context === null ? (o.context = c) : (o.pendingContext = c),
      (o = sa(n)),
      (o.payload = { element: i }),
      (d = d === void 0 ? null : d),
      d !== null && (o.callback = d),
      (i = ua(t, o, n)),
      i !== null && (cn(i, t, n), Xl(i, t, n));
  }
  function z0(t, n) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var i = t.retryLane;
      t.retryLane = i !== 0 && i < n ? i : n;
    }
  }
  function Fd(t, n) {
    z0(t, n), (t = t.alternate) && z0(t, n);
  }
  function N0(t) {
    if (t.tag === 13) {
      var n = ta(t, 67108864);
      n !== null && cn(n, t, 67108864), Fd(t, 67108864);
    }
  }
  var du = !0;
  function SR(t, n, i, o) {
    var c = G.T;
    G.T = null;
    var d = ue.p;
    try {
      (ue.p = 2), Gd(t, n, i, o);
    } finally {
      (ue.p = d), (G.T = c);
    }
  }
  function xR(t, n, i, o) {
    var c = G.T;
    G.T = null;
    var d = ue.p;
    try {
      (ue.p = 8), Gd(t, n, i, o);
    } finally {
      (ue.p = d), (G.T = c);
    }
  }
  function Gd(t, n, i, o) {
    if (du) {
      var c = Yd(o);
      if (c === null) Nd(t, n, o, pu, i), k0(t, o);
      else if (RR(c, t, n, i, o)) o.stopPropagation();
      else if ((k0(t, o), n & 4 && -1 < ER.indexOf(t))) {
        for (; c !== null; ) {
          var d = fi(c);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (((d = d.stateNode), d.current.memoizedState.isDehydrated)) {
                  var y = Aa(d.pendingLanes);
                  if (y !== 0) {
                    var w = d;
                    for (w.pendingLanes |= 2, w.entangledLanes |= 2; y; ) {
                      var z = 1 << (31 - Ke(y));
                      (w.entanglements[1] |= z), (y &= ~z);
                    }
                    dr(d), !(Et & 6) && ((Qs = me() + 500), io(0));
                  }
                }
                break;
              case 13:
                (w = ta(d, 2)), w !== null && cn(w, d, 2), Js(), Fd(d, 2);
            }
          if (((d = Yd(o)), d === null && Nd(t, n, o, pu, i), d === c)) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Nd(t, n, o, null, i);
    }
  }
  function Yd(t) {
    return (t = Wc(t)), Id(t);
  }
  var pu = null;
  function Id(t) {
    if (((pu = null), (t = Oa(t)), t !== null)) {
      var n = ce(t);
      if (n === null) t = null;
      else {
        var i = n.tag;
        if (i === 13) {
          if (((t = se(n)), t !== null)) return t;
          t = null;
        } else if (i === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          t = null;
        } else n !== t && (t = null);
      }
    }
    return (pu = t), null;
  }
  function B0(t) {
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
        switch (Me()) {
          case lt:
            return 2;
          case ot:
            return 8;
          case kt:
          case lr:
            return 32;
          case dn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Xd = !1,
    ga = null,
    ya = null,
    va = null,
    po = new Map(),
    ho = new Map(),
    ba = [],
    ER =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function k0(t, n) {
    switch (t) {
      case "focusin":
      case "focusout":
        ga = null;
        break;
      case "dragenter":
      case "dragleave":
        ya = null;
        break;
      case "mouseover":
      case "mouseout":
        va = null;
        break;
      case "pointerover":
      case "pointerout":
        po.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ho.delete(n.pointerId);
    }
  }
  function mo(t, n, i, o, c, d) {
    return t === null || t.nativeEvent !== d
      ? ((t = {
          blockedOn: n,
          domEventName: i,
          eventSystemFlags: o,
          nativeEvent: d,
          targetContainers: [c],
        }),
        n !== null && ((n = fi(n)), n !== null && N0(n)),
        t)
      : ((t.eventSystemFlags |= o),
        (n = t.targetContainers),
        c !== null && n.indexOf(c) === -1 && n.push(c),
        t);
  }
  function RR(t, n, i, o, c) {
    switch (n) {
      case "focusin":
        return (ga = mo(ga, t, n, i, o, c)), !0;
      case "dragenter":
        return (ya = mo(ya, t, n, i, o, c)), !0;
      case "mouseover":
        return (va = mo(va, t, n, i, o, c)), !0;
      case "pointerover":
        var d = c.pointerId;
        return po.set(d, mo(po.get(d) || null, t, n, i, o, c)), !0;
      case "gotpointercapture":
        return (
          (d = c.pointerId), ho.set(d, mo(ho.get(d) || null, t, n, i, o, c)), !0
        );
    }
    return !1;
  }
  function U0(t) {
    var n = Oa(t.target);
    if (n !== null) {
      var i = ce(n);
      if (i !== null) {
        if (((n = i.tag), n === 13)) {
          if (((n = se(i)), n !== null)) {
            (t.blockedOn = n),
              yx(t.priority, function () {
                if (i.tag === 13) {
                  var o = Tn(),
                    c = ta(i, o);
                  c !== null && cn(c, i, o), Fd(i, o);
                }
              });
            return;
          }
        } else if (n === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function hu(t) {
    if (t.blockedOn !== null) return !1;
    for (var n = t.targetContainers; 0 < n.length; ) {
      var i = Yd(t.nativeEvent);
      if (i === null) {
        i = t.nativeEvent;
        var o = new i.constructor(i.type, i);
        (Qc = o), i.target.dispatchEvent(o), (Qc = null);
      } else return (n = fi(i)), n !== null && N0(n), (t.blockedOn = i), !1;
      n.shift();
    }
    return !0;
  }
  function L0(t, n, i) {
    hu(t) && i.delete(n);
  }
  function CR() {
    (Xd = !1),
      ga !== null && hu(ga) && (ga = null),
      ya !== null && hu(ya) && (ya = null),
      va !== null && hu(va) && (va = null),
      po.forEach(L0),
      ho.forEach(L0);
  }
  function mu(t, n) {
    t.blockedOn === n &&
      ((t.blockedOn = null),
      Xd ||
        ((Xd = !0),
        e.unstable_scheduleCallback(e.unstable_NormalPriority, CR)));
  }
  var gu = null;
  function $0(t) {
    gu !== t &&
      ((gu = t),
      e.unstable_scheduleCallback(e.unstable_NormalPriority, function () {
        gu === t && (gu = null);
        for (var n = 0; n < t.length; n += 3) {
          var i = t[n],
            o = t[n + 1],
            c = t[n + 2];
          if (typeof o != "function") {
            if (Id(o || i) === null) continue;
            break;
          }
          var d = fi(i);
          d !== null &&
            (t.splice(n, 3),
            (n -= 3),
            Lf(d, { pending: !0, data: c, method: i.method, action: o }, o, c));
        }
      }));
  }
  function go(t) {
    function n(z) {
      return mu(z, t);
    }
    ga !== null && mu(ga, t),
      ya !== null && mu(ya, t),
      va !== null && mu(va, t),
      po.forEach(n),
      ho.forEach(n);
    for (var i = 0; i < ba.length; i++) {
      var o = ba[i];
      o.blockedOn === t && (o.blockedOn = null);
    }
    for (; 0 < ba.length && ((i = ba[0]), i.blockedOn === null); )
      U0(i), i.blockedOn === null && ba.shift();
    if (((i = (t.ownerDocument || t).$$reactFormReplay), i != null))
      for (o = 0; o < i.length; o += 3) {
        var c = i[o],
          d = i[o + 1],
          y = c[hn] || null;
        if (typeof d == "function") y || $0(i);
        else if (y) {
          var w = null;
          if (d && d.hasAttribute("formAction")) {
            if (((c = d), (y = d[hn] || null))) w = y.formAction;
            else if (Id(c) !== null) continue;
          } else w = y.action;
          typeof w == "function" ? (i[o + 1] = w) : (i.splice(o, 3), (o -= 3)),
            $0(i);
        }
      }
  }
  function Kd(t) {
    this._internalRoot = t;
  }
  (yu.prototype.render = Kd.prototype.render =
    function (t) {
      var n = this._internalRoot;
      if (n === null) throw Error(l(409));
      var i = n.current,
        o = Tn();
      D0(i, o, t, n, null, null);
    }),
    (yu.prototype.unmount = Kd.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var n = t.containerInfo;
          t.tag === 0 && ji(),
            D0(t.current, 2, null, t, null, null),
            Js(),
            (n[ci] = null);
        }
      });
  function yu(t) {
    this._internalRoot = t;
  }
  yu.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var n = dm();
      t = { blockedOn: null, target: t, priority: n };
      for (var i = 0; i < ba.length && n !== 0 && n < ba[i].priority; i++);
      ba.splice(i, 0, t), i === 0 && U0(t);
    }
  };
  var j0 = r.version;
  if (j0 !== "19.0.0") throw Error(l(527, j0, "19.0.0"));
  ue.findDOMNode = function (t) {
    var n = t._reactInternals;
    if (n === void 0)
      throw typeof t.render == "function"
        ? Error(l(188))
        : ((t = Object.keys(t).join(",")), Error(l(268, t)));
    return (
      (t = W(n)),
      (t = t !== null ? he(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var wR = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: G,
    findFiberByHostInstance: Oa,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var vu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!vu.isDisabled && vu.supportsFiber)
      try {
        (pn = vu.inject(wR)), (Gt = vu);
      } catch {}
  }
  return (
    (bo.createRoot = function (t, n) {
      if (!s(t)) throw Error(l(299));
      var i = !1,
        o = "",
        c = ny,
        d = ry,
        y = ay,
        w = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (c = n.onUncaughtError),
          n.onCaughtError !== void 0 && (d = n.onCaughtError),
          n.onRecoverableError !== void 0 && (y = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (w = n.unstable_transitionCallbacks)),
        (n = _0(t, 1, !1, null, null, i, o, c, d, y, w, null)),
        (t[ci] = n.current),
        zd(t.nodeType === 8 ? t.parentNode : t),
        new Kd(n)
      );
    }),
    (bo.hydrateRoot = function (t, n, i) {
      if (!s(t)) throw Error(l(299));
      var o = !1,
        c = "",
        d = ny,
        y = ry,
        w = ay,
        z = null,
        U = null;
      return (
        i != null &&
          (i.unstable_strictMode === !0 && (o = !0),
          i.identifierPrefix !== void 0 && (c = i.identifierPrefix),
          i.onUncaughtError !== void 0 && (d = i.onUncaughtError),
          i.onCaughtError !== void 0 && (y = i.onCaughtError),
          i.onRecoverableError !== void 0 && (w = i.onRecoverableError),
          i.unstable_transitionCallbacks !== void 0 &&
            (z = i.unstable_transitionCallbacks),
          i.formState !== void 0 && (U = i.formState)),
        (n = _0(t, 1, !0, n, i ?? null, o, c, d, y, w, z, U)),
        (n.context = M0(null)),
        (i = n.current),
        (o = Tn()),
        (c = sa(o)),
        (c.callback = null),
        ua(i, c, o),
        (n.current.lanes = o),
        El(n, o),
        dr(n),
        (t[ci] = n.current),
        zd(t),
        new yu(n)
      );
    }),
    (bo.version = "19.0.0"),
    bo
  );
}
var K0;
function LR() {
  if (K0) return Zd.exports;
  K0 = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (r) {
        console.error(r);
      }
  }
  return e(), (Zd.exports = UR()), Zd.exports;
}
var $R = LR(),
  So = {},
  Q0;
function jR() {
  if (Q0) return So;
  (Q0 = 1),
    Object.defineProperty(So, "__esModule", { value: !0 }),
    (So.parse = f),
    (So.serialize = h);
  const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    r = /^[\u0021-\u003A\u003C-\u007E]*$/,
    a =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    l = /^[\u0020-\u003A\u003D-\u007E]*$/,
    s = Object.prototype.toString,
    u = (() => {
      const S = function () {};
      return (S.prototype = Object.create(null)), S;
    })();
  function f(S, R) {
    const b = new u(),
      x = S.length;
    if (x < 2) return b;
    const T = (R == null ? void 0 : R.decode) || g;
    let _ = 0;
    do {
      const M = S.indexOf("=", _);
      if (M === -1) break;
      const A = S.indexOf(";", _),
        D = A === -1 ? x : A;
      if (M > D) {
        _ = S.lastIndexOf(";", M - 1) + 1;
        continue;
      }
      const O = p(S, _, M),
        j = m(S, M, O),
        L = S.slice(O, j);
      if (b[L] === void 0) {
        let re = p(S, M + 1, D),
          G = m(S, D, re);
        const E = T(S.slice(re, G));
        b[L] = E;
      }
      _ = D + 1;
    } while (_ < x);
    return b;
  }
  function p(S, R, b) {
    do {
      const x = S.charCodeAt(R);
      if (x !== 32 && x !== 9) return R;
    } while (++R < b);
    return b;
  }
  function m(S, R, b) {
    for (; R > b; ) {
      const x = S.charCodeAt(--R);
      if (x !== 32 && x !== 9) return R + 1;
    }
    return b;
  }
  function h(S, R, b) {
    const x = (b == null ? void 0 : b.encode) || encodeURIComponent;
    if (!e.test(S)) throw new TypeError(`argument name is invalid: ${S}`);
    const T = x(R);
    if (!r.test(T)) throw new TypeError(`argument val is invalid: ${R}`);
    let _ = S + "=" + T;
    if (!b) return _;
    if (b.maxAge !== void 0) {
      if (!Number.isInteger(b.maxAge))
        throw new TypeError(`option maxAge is invalid: ${b.maxAge}`);
      _ += "; Max-Age=" + b.maxAge;
    }
    if (b.domain) {
      if (!a.test(b.domain))
        throw new TypeError(`option domain is invalid: ${b.domain}`);
      _ += "; Domain=" + b.domain;
    }
    if (b.path) {
      if (!l.test(b.path))
        throw new TypeError(`option path is invalid: ${b.path}`);
      _ += "; Path=" + b.path;
    }
    if (b.expires) {
      if (!v(b.expires) || !Number.isFinite(b.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${b.expires}`);
      _ += "; Expires=" + b.expires.toUTCString();
    }
    if (
      (b.httpOnly && (_ += "; HttpOnly"),
      b.secure && (_ += "; Secure"),
      b.partitioned && (_ += "; Partitioned"),
      b.priority)
    )
      switch (
        typeof b.priority == "string" ? b.priority.toLowerCase() : void 0
      ) {
        case "low":
          _ += "; Priority=Low";
          break;
        case "medium":
          _ += "; Priority=Medium";
          break;
        case "high":
          _ += "; Priority=High";
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
          _ += "; SameSite=Strict";
          break;
        case "lax":
          _ += "; SameSite=Lax";
          break;
        case "none":
          _ += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${b.sameSite}`);
      }
    return _;
  }
  function g(S) {
    if (S.indexOf("%") === -1) return S;
    try {
      return decodeURIComponent(S);
    } catch {
      return S;
    }
  }
  function v(S) {
    return s.call(S) === "[object Date]";
  }
  return So;
}
jR();
/**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var W0 = "popstate";
function HR(e = {}) {
  function r(l, s) {
    let { pathname: u, search: f, hash: p } = l.location;
    return Op(
      "",
      { pathname: u, search: f, hash: p },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default"
    );
  }
  function a(l, s) {
    return typeof s == "string" ? s : Po(s);
  }
  return qR(r, a, null, e);
}
function St(e, r) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(r);
}
function tr(e, r) {
  if (!e) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {}
  }
}
function PR() {
  return Math.random().toString(36).substring(2, 10);
}
function Z0(e, r) {
  return { usr: e.state, key: e.key, idx: r };
}
function Op(e, r, a = null, l) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...(typeof r == "string" ? dl(r) : r),
    state: a,
    key: (r && r.key) || l || PR(),
  };
}
function Po({ pathname: e = "/", search: r = "", hash: a = "" }) {
  return (
    r && r !== "?" && (e += r.charAt(0) === "?" ? r : "?" + r),
    a && a !== "#" && (e += a.charAt(0) === "#" ? a : "#" + a),
    e
  );
}
function dl(e) {
  let r = {};
  if (e) {
    let a = e.indexOf("#");
    a >= 0 && ((r.hash = e.substring(a)), (e = e.substring(0, a)));
    let l = e.indexOf("?");
    l >= 0 && ((r.search = e.substring(l)), (e = e.substring(0, l))),
      e && (r.pathname = e);
  }
  return r;
}
function qR(e, r, a, l = {}) {
  let { window: s = document.defaultView, v5Compat: u = !1 } = l,
    f = s.history,
    p = "POP",
    m = null,
    h = g();
  h == null && ((h = 0), f.replaceState({ ...f.state, idx: h }, ""));
  function g() {
    return (f.state || { idx: null }).idx;
  }
  function v() {
    p = "POP";
    let T = g(),
      _ = T == null ? null : T - h;
    (h = T), m && m({ action: p, location: x.location, delta: _ });
  }
  function S(T, _) {
    p = "PUSH";
    let M = Op(x.location, T, _);
    h = g() + 1;
    let A = Z0(M, h),
      D = x.createHref(M);
    try {
      f.pushState(A, "", D);
    } catch (O) {
      if (O instanceof DOMException && O.name === "DataCloneError") throw O;
      s.location.assign(D);
    }
    u && m && m({ action: p, location: x.location, delta: 1 });
  }
  function R(T, _) {
    p = "REPLACE";
    let M = Op(x.location, T, _);
    h = g();
    let A = Z0(M, h),
      D = x.createHref(M);
    f.replaceState(A, "", D),
      u && m && m({ action: p, location: x.location, delta: 0 });
  }
  function b(T) {
    let _ = s.location.origin !== "null" ? s.location.origin : s.location.href,
      M = typeof T == "string" ? T : Po(T);
    return (
      (M = M.replace(/ $/, "%20")),
      St(
        _,
        `No window.location.(origin|href) available to create URL for href: ${M}`
      ),
      new URL(M, _)
    );
  }
  let x = {
    get action() {
      return p;
    },
    get location() {
      return e(s, f);
    },
    listen(T) {
      if (m) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(W0, v),
        (m = T),
        () => {
          s.removeEventListener(W0, v), (m = null);
        }
      );
    },
    createHref(T) {
      return r(s, T);
    },
    createURL: b,
    encodeLocation(T) {
      let _ = b(T);
      return { pathname: _.pathname, search: _.search, hash: _.hash };
    },
    push: S,
    replace: R,
    go(T) {
      return f.go(T);
    },
  };
  return x;
}
function Fb(e, r, a = "/") {
  return VR(e, r, a, !1);
}
function VR(e, r, a, l) {
  let s = typeof r == "string" ? dl(r) : r,
    u = Ca(s.pathname || "/", a);
  if (u == null) return null;
  let f = Gb(e);
  FR(f);
  let p = null;
  for (let m = 0; p == null && m < f.length; ++m) {
    let h = tC(u);
    p = JR(f[m], h, l);
  }
  return p;
}
function Gb(e, r = [], a = [], l = "") {
  let s = (u, f, p) => {
    let m = {
      relativePath: p === void 0 ? u.path || "" : p,
      caseSensitive: u.caseSensitive === !0,
      childrenIndex: f,
      route: u,
    };
    m.relativePath.startsWith("/") &&
      (St(
        m.relativePath.startsWith(l),
        `Absolute route path "${m.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (m.relativePath = m.relativePath.slice(l.length)));
    let h = Xr([l, m.relativePath]),
      g = a.concat(m);
    u.children &&
      u.children.length > 0 &&
      (St(
        u.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${h}".`
      ),
      Gb(u.children, r, g, h)),
      !(u.path == null && !u.index) &&
        r.push({ path: h, score: WR(h, u.index), routesMeta: g });
  };
  return (
    e.forEach((u, f) => {
      var p;
      if (u.path === "" || !((p = u.path) != null && p.includes("?"))) s(u, f);
      else for (let m of Yb(u.path)) s(u, f, m);
    }),
    r
  );
}
function Yb(e) {
  let r = e.split("/");
  if (r.length === 0) return [];
  let [a, ...l] = r,
    s = a.endsWith("?"),
    u = a.replace(/\?$/, "");
  if (l.length === 0) return s ? [u, ""] : [u];
  let f = Yb(l.join("/")),
    p = [];
  return (
    p.push(...f.map((m) => (m === "" ? u : [u, m].join("/")))),
    s && p.push(...f),
    p.map((m) => (e.startsWith("/") && m === "" ? "/" : m))
  );
}
function FR(e) {
  e.sort((r, a) =>
    r.score !== a.score
      ? a.score - r.score
      : ZR(
          r.routesMeta.map((l) => l.childrenIndex),
          a.routesMeta.map((l) => l.childrenIndex)
        )
  );
}
var GR = /^:[\w-]+$/,
  YR = 3,
  IR = 2,
  XR = 1,
  KR = 10,
  QR = -2,
  J0 = (e) => e === "*";
function WR(e, r) {
  let a = e.split("/"),
    l = a.length;
  return (
    a.some(J0) && (l += QR),
    r && (l += IR),
    a
      .filter((s) => !J0(s))
      .reduce((s, u) => s + (GR.test(u) ? YR : u === "" ? XR : KR), l)
  );
}
function ZR(e, r) {
  return e.length === r.length && e.slice(0, -1).every((l, s) => l === r[s])
    ? e[e.length - 1] - r[r.length - 1]
    : 0;
}
function JR(e, r, a = !1) {
  let { routesMeta: l } = e,
    s = {},
    u = "/",
    f = [];
  for (let p = 0; p < l.length; ++p) {
    let m = l[p],
      h = p === l.length - 1,
      g = u === "/" ? r : r.slice(u.length) || "/",
      v = Fu(
        { path: m.relativePath, caseSensitive: m.caseSensitive, end: h },
        g
      ),
      S = m.route;
    if (
      (!v &&
        h &&
        a &&
        !l[l.length - 1].route.index &&
        (v = Fu(
          { path: m.relativePath, caseSensitive: m.caseSensitive, end: !1 },
          g
        )),
      !v)
    )
      return null;
    Object.assign(s, v.params),
      f.push({
        params: s,
        pathname: Xr([u, v.pathname]),
        pathnameBase: iC(Xr([u, v.pathnameBase])),
        route: S,
      }),
      v.pathnameBase !== "/" && (u = Xr([u, v.pathnameBase]));
  }
  return f;
}
function Fu(e, r) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [a, l] = eC(e.path, e.caseSensitive, e.end),
    s = r.match(a);
  if (!s) return null;
  let u = s[0],
    f = u.replace(/(.)\/+$/, "$1"),
    p = s.slice(1);
  return {
    params: l.reduce((h, { paramName: g, isOptional: v }, S) => {
      if (g === "*") {
        let b = p[S] || "";
        f = u.slice(0, u.length - b.length).replace(/(.)\/+$/, "$1");
      }
      const R = p[S];
      return (
        v && !R ? (h[g] = void 0) : (h[g] = (R || "").replace(/%2F/g, "/")), h
      );
    }, {}),
    pathname: u,
    pathnameBase: f,
    pattern: e,
  };
}
function eC(e, r = !1, a = !0) {
  tr(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let l = [],
    s =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (f, p, m) => (
            l.push({ paramName: p, isOptional: m != null }),
            m ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (l.push({ paramName: "*" }),
        (s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : a
      ? (s += "\\/*$")
      : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, r ? void 0 : "i"), l]
  );
}
function tC(e) {
  try {
    return e
      .split("/")
      .map((r) => decodeURIComponent(r).replace(/\//g, "%2F"))
      .join("/");
  } catch (r) {
    return (
      tr(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
      ),
      e
    );
  }
}
function Ca(e, r) {
  if (r === "/") return e;
  if (!e.toLowerCase().startsWith(r.toLowerCase())) return null;
  let a = r.endsWith("/") ? r.length - 1 : r.length,
    l = e.charAt(a);
  return l && l !== "/" ? null : e.slice(a) || "/";
}
function nC(e, r = "/") {
  let {
    pathname: a,
    search: l = "",
    hash: s = "",
  } = typeof e == "string" ? dl(e) : e;
  return {
    pathname: a ? (a.startsWith("/") ? a : rC(a, r)) : r,
    search: lC(l),
    hash: oC(s),
  };
}
function rC(e, r) {
  let a = r.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((s) => {
      s === ".." ? a.length > 1 && a.pop() : s !== "." && a.push(s);
    }),
    a.length > 1 ? a.join("/") : "/"
  );
}
function np(e, r, a, l) {
  return `Cannot include a '${e}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    l
  )}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function aC(e) {
  return e.filter(
    (r, a) => a === 0 || (r.route.path && r.route.path.length > 0)
  );
}
function uh(e) {
  let r = aC(e);
  return r.map((a, l) => (l === r.length - 1 ? a.pathname : a.pathnameBase));
}
function ch(e, r, a, l = !1) {
  let s;
  typeof e == "string"
    ? (s = dl(e))
    : ((s = { ...e }),
      St(
        !s.pathname || !s.pathname.includes("?"),
        np("?", "pathname", "search", s)
      ),
      St(
        !s.pathname || !s.pathname.includes("#"),
        np("#", "pathname", "hash", s)
      ),
      St(!s.search || !s.search.includes("#"), np("#", "search", "hash", s)));
  let u = e === "" || s.pathname === "",
    f = u ? "/" : s.pathname,
    p;
  if (f == null) p = a;
  else {
    let v = r.length - 1;
    if (!l && f.startsWith("..")) {
      let S = f.split("/");
      for (; S[0] === ".."; ) S.shift(), (v -= 1);
      s.pathname = S.join("/");
    }
    p = v >= 0 ? r[v] : "/";
  }
  let m = nC(s, p),
    h = f && f !== "/" && f.endsWith("/"),
    g = (u || f === ".") && a.endsWith("/");
  return !m.pathname.endsWith("/") && (h || g) && (m.pathname += "/"), m;
}
var Xr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  iC = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  lC = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  oC = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function sC(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
var Ib = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Ib);
var uC = ["GET", ...Ib];
new Set(uC);
var pl = C.createContext(null);
pl.displayName = "DataRouter";
var uc = C.createContext(null);
uc.displayName = "DataRouterState";
var Xb = C.createContext({ isTransitioning: !1 });
Xb.displayName = "ViewTransition";
var cC = C.createContext(new Map());
cC.displayName = "Fetchers";
var fC = C.createContext(null);
fC.displayName = "Await";
var rr = C.createContext(null);
rr.displayName = "Navigation";
var Xo = C.createContext(null);
Xo.displayName = "Location";
var wr = C.createContext({ outlet: null, matches: [], isDataRoute: !1 });
wr.displayName = "Route";
var fh = C.createContext(null);
fh.displayName = "RouteError";
function dC(e, { relative: r } = {}) {
  St(
    hl(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: a, navigator: l } = C.useContext(rr),
    { hash: s, pathname: u, search: f } = Qo(e, { relative: r }),
    p = u;
  return (
    a !== "/" && (p = u === "/" ? a : Xr([a, u])),
    l.createHref({ pathname: p, search: f, hash: s })
  );
}
function hl() {
  return C.useContext(Xo) != null;
}
function Ta() {
  return (
    St(
      hl(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    C.useContext(Xo).location
  );
}
var Kb =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Qb(e) {
  C.useContext(rr).static || C.useLayoutEffect(e);
}
function Ko() {
  let { isDataRoute: e } = C.useContext(wr);
  return e ? wC() : pC();
}
function pC() {
  St(
    hl(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = C.useContext(pl),
    { basename: r, navigator: a } = C.useContext(rr),
    { matches: l } = C.useContext(wr),
    { pathname: s } = Ta(),
    u = JSON.stringify(uh(l)),
    f = C.useRef(!1);
  return (
    Qb(() => {
      f.current = !0;
    }),
    C.useCallback(
      (m, h = {}) => {
        if ((tr(f.current, Kb), !f.current)) return;
        if (typeof m == "number") {
          a.go(m);
          return;
        }
        let g = ch(m, JSON.parse(u), s, h.relative === "path");
        e == null &&
          r !== "/" &&
          (g.pathname = g.pathname === "/" ? r : Xr([r, g.pathname])),
          (h.replace ? a.replace : a.push)(g, h.state, h);
      },
      [r, a, u, s, e]
    )
  );
}
C.createContext(null);
function Qo(e, { relative: r } = {}) {
  let { matches: a } = C.useContext(wr),
    { pathname: l } = Ta(),
    s = JSON.stringify(uh(a));
  return C.useMemo(() => ch(e, JSON.parse(s), l, r === "path"), [e, s, l, r]);
}
function hC(e, r) {
  return Wb(e, r);
}
function Wb(e, r, a, l) {
  var M;
  St(
    hl(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: s, static: u } = C.useContext(rr),
    { matches: f } = C.useContext(wr),
    p = f[f.length - 1],
    m = p ? p.params : {},
    h = p ? p.pathname : "/",
    g = p ? p.pathnameBase : "/",
    v = p && p.route;
  {
    let A = (v && v.path) || "";
    Zb(
      h,
      !v || A.endsWith("*") || A.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${
        A === "/" ? "*" : `${A}/*`
      }">.`
    );
  }
  let S = Ta(),
    R;
  if (r) {
    let A = typeof r == "string" ? dl(r) : r;
    St(
      g === "/" || ((M = A.pathname) == null ? void 0 : M.startsWith(g)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${A.pathname}" was given in the \`location\` prop.`
    ),
      (R = A);
  } else R = S;
  let b = R.pathname || "/",
    x = b;
  if (g !== "/") {
    let A = g.replace(/^\//, "").split("/");
    x = "/" + b.replace(/^\//, "").split("/").slice(A.length).join("/");
  }
  let T =
    !u && a && a.matches && a.matches.length > 0
      ? a.matches
      : Fb(e, { pathname: x });
  tr(
    v || T != null,
    `No routes matched location "${R.pathname}${R.search}${R.hash}" `
  ),
    tr(
      T == null ||
        T[T.length - 1].route.element !== void 0 ||
        T[T.length - 1].route.Component !== void 0 ||
        T[T.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let _ = bC(
    T &&
      T.map((A) =>
        Object.assign({}, A, {
          params: Object.assign({}, m, A.params),
          pathname: Xr([
            g,
            s.encodeLocation
              ? s.encodeLocation(A.pathname).pathname
              : A.pathname,
          ]),
          pathnameBase:
            A.pathnameBase === "/"
              ? g
              : Xr([
                  g,
                  s.encodeLocation
                    ? s.encodeLocation(A.pathnameBase).pathname
                    : A.pathnameBase,
                ]),
        })
      ),
    f,
    a,
    l
  );
  return r && _
    ? C.createElement(
        Xo.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...R,
            },
            navigationType: "POP",
          },
        },
        _
      )
    : _;
}
function mC() {
  let e = CC(),
    r = sC(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    a = e instanceof Error ? e.stack : null,
    l = "rgba(200,200,200, 0.5)",
    s = { padding: "0.5rem", backgroundColor: l },
    u = { padding: "2px 4px", backgroundColor: l },
    f = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", e),
    (f = C.createElement(
      C.Fragment,
      null,
      C.createElement("p", null, "💿 Hey developer 👋"),
      C.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        C.createElement("code", { style: u }, "ErrorBoundary"),
        " or",
        " ",
        C.createElement("code", { style: u }, "errorElement"),
        " prop on your route."
      )
    )),
    C.createElement(
      C.Fragment,
      null,
      C.createElement("h2", null, "Unexpected Application Error!"),
      C.createElement("h3", { style: { fontStyle: "italic" } }, r),
      a ? C.createElement("pre", { style: s }, a) : null,
      f
    )
  );
}
var gC = C.createElement(mC, null),
  yC = class extends C.Component {
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
    static getDerivedStateFromProps(e, r) {
      return r.location !== e.location ||
        (r.revalidation !== "idle" && e.revalidation === "idle")
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : r.error,
            location: r.location,
            revalidation: e.revalidation || r.revalidation,
          };
    }
    componentDidCatch(e, r) {
      console.error(
        "React Router caught the following error during render",
        e,
        r
      );
    }
    render() {
      return this.state.error !== void 0
        ? C.createElement(
            wr.Provider,
            { value: this.props.routeContext },
            C.createElement(fh.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function vC({ routeContext: e, match: r, children: a }) {
  let l = C.useContext(pl);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = r.route.id),
    C.createElement(wr.Provider, { value: e }, a)
  );
}
function bC(e, r = [], a = null, l = null) {
  if (e == null) {
    if (!a) return null;
    if (a.errors) e = a.matches;
    else if (r.length === 0 && !a.initialized && a.matches.length > 0)
      e = a.matches;
    else return null;
  }
  let s = e,
    u = a == null ? void 0 : a.errors;
  if (u != null) {
    let m = s.findIndex(
      (h) => h.route.id && (u == null ? void 0 : u[h.route.id]) !== void 0
    );
    St(
      m >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        u
      ).join(",")}`
    ),
      (s = s.slice(0, Math.min(s.length, m + 1)));
  }
  let f = !1,
    p = -1;
  if (a)
    for (let m = 0; m < s.length; m++) {
      let h = s[m];
      if (
        ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (p = m),
        h.route.id)
      ) {
        let { loaderData: g, errors: v } = a,
          S =
            h.route.loader &&
            !g.hasOwnProperty(h.route.id) &&
            (!v || v[h.route.id] === void 0);
        if (h.route.lazy || S) {
          (f = !0), p >= 0 ? (s = s.slice(0, p + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((m, h, g) => {
    let v,
      S = !1,
      R = null,
      b = null;
    a &&
      ((v = u && h.route.id ? u[h.route.id] : void 0),
      (R = h.route.errorElement || gC),
      f &&
        (p < 0 && g === 0
          ? (Zb(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (S = !0),
            (b = null))
          : p === g &&
            ((S = !0), (b = h.route.hydrateFallbackElement || null))));
    let x = r.concat(s.slice(0, g + 1)),
      T = () => {
        let _;
        return (
          v
            ? (_ = R)
            : S
            ? (_ = b)
            : h.route.Component
            ? (_ = C.createElement(h.route.Component, null))
            : h.route.element
            ? (_ = h.route.element)
            : (_ = m),
          C.createElement(vC, {
            match: h,
            routeContext: { outlet: m, matches: x, isDataRoute: a != null },
            children: _,
          })
        );
      };
    return a && (h.route.ErrorBoundary || h.route.errorElement || g === 0)
      ? C.createElement(yC, {
          location: a.location,
          revalidation: a.revalidation,
          component: R,
          error: v,
          children: T(),
          routeContext: { outlet: null, matches: x, isDataRoute: !0 },
        })
      : T();
  }, null);
}
function dh(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function SC(e) {
  let r = C.useContext(pl);
  return St(r, dh(e)), r;
}
function xC(e) {
  let r = C.useContext(uc);
  return St(r, dh(e)), r;
}
function EC(e) {
  let r = C.useContext(wr);
  return St(r, dh(e)), r;
}
function ph(e) {
  let r = EC(e),
    a = r.matches[r.matches.length - 1];
  return (
    St(
      a.route.id,
      `${e} can only be used on routes that contain a unique "id"`
    ),
    a.route.id
  );
}
function RC() {
  return ph("useRouteId");
}
function CC() {
  var l;
  let e = C.useContext(fh),
    r = xC("useRouteError"),
    a = ph("useRouteError");
  return e !== void 0 ? e : (l = r.errors) == null ? void 0 : l[a];
}
function wC() {
  let { router: e } = SC("useNavigate"),
    r = ph("useNavigate"),
    a = C.useRef(!1);
  return (
    Qb(() => {
      a.current = !0;
    }),
    C.useCallback(
      async (s, u = {}) => {
        tr(a.current, Kb),
          a.current &&
            (typeof s == "number"
              ? e.navigate(s)
              : await e.navigate(s, { fromRouteId: r, ...u }));
      },
      [e, r]
    )
  );
}
var ev = {};
function Zb(e, r, a) {
  !r && !ev[e] && ((ev[e] = !0), tr(!1, a));
}
C.memo(TC);
function TC({ routes: e, future: r, state: a }) {
  return Wb(e, void 0, a, r);
}
function AC({ to: e, replace: r, state: a, relative: l }) {
  St(
    hl(),
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: s } = C.useContext(rr);
  tr(
    !s,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: u } = C.useContext(wr),
    { pathname: f } = Ta(),
    p = Ko(),
    m = ch(e, uh(u), f, l === "path"),
    h = JSON.stringify(m);
  return (
    C.useEffect(() => {
      p(JSON.parse(h), { replace: r, state: a, relative: l });
    }, [p, h, l, r, a]),
    null
  );
}
function Bo(e) {
  St(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function OC({
  basename: e = "/",
  children: r = null,
  location: a,
  navigationType: l = "POP",
  navigator: s,
  static: u = !1,
}) {
  St(
    !hl(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let f = e.replace(/^\/*/, "/"),
    p = C.useMemo(
      () => ({ basename: f, navigator: s, static: u, future: {} }),
      [f, s, u]
    );
  typeof a == "string" && (a = dl(a));
  let {
      pathname: m = "/",
      search: h = "",
      hash: g = "",
      state: v = null,
      key: S = "default",
    } = a,
    R = C.useMemo(() => {
      let b = Ca(m, f);
      return b == null
        ? null
        : {
            location: { pathname: b, search: h, hash: g, state: v, key: S },
            navigationType: l,
          };
    }, [f, m, h, g, v, S, l]);
  return (
    tr(
      R != null,
      `<Router basename="${f}"> is not able to match the URL "${m}${h}${g}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    R == null
      ? null
      : C.createElement(
          rr.Provider,
          { value: p },
          C.createElement(Xo.Provider, { children: r, value: R })
        )
  );
}
function Jb({ children: e, location: r }) {
  return hC(_p(e), r);
}
function _p(e, r = []) {
  let a = [];
  return (
    C.Children.forEach(e, (l, s) => {
      if (!C.isValidElement(l)) return;
      let u = [...r, s];
      if (l.type === C.Fragment) {
        a.push.apply(a, _p(l.props.children, u));
        return;
      }
      St(
        l.type === Bo,
        `[${
          typeof l.type == "string" ? l.type : l.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        St(
          !l.props.index || !l.props.children,
          "An index route cannot have child routes."
        );
      let f = {
        id: l.props.id || u.join("-"),
        caseSensitive: l.props.caseSensitive,
        element: l.props.element,
        Component: l.props.Component,
        index: l.props.index,
        path: l.props.path,
        loader: l.props.loader,
        action: l.props.action,
        hydrateFallbackElement: l.props.hydrateFallbackElement,
        HydrateFallback: l.props.HydrateFallback,
        errorElement: l.props.errorElement,
        ErrorBoundary: l.props.ErrorBoundary,
        hasErrorBoundary:
          l.props.hasErrorBoundary === !0 ||
          l.props.ErrorBoundary != null ||
          l.props.errorElement != null,
        shouldRevalidate: l.props.shouldRevalidate,
        handle: l.props.handle,
        lazy: l.props.lazy,
      };
      l.props.children && (f.children = _p(l.props.children, u)), a.push(f);
    }),
    a
  );
}
var _u = "get",
  Mu = "application/x-www-form-urlencoded";
function cc(e) {
  return e != null && typeof e.tagName == "string";
}
function _C(e) {
  return cc(e) && e.tagName.toLowerCase() === "button";
}
function MC(e) {
  return cc(e) && e.tagName.toLowerCase() === "form";
}
function DC(e) {
  return cc(e) && e.tagName.toLowerCase() === "input";
}
function zC(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function NC(e, r) {
  return e.button === 0 && (!r || r === "_self") && !zC(e);
}
var bu = null;
function BC() {
  if (bu === null)
    try {
      new FormData(document.createElement("form"), 0), (bu = !1);
    } catch {
      bu = !0;
    }
  return bu;
}
var kC = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function rp(e) {
  return e != null && !kC.has(e)
    ? (tr(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Mu}"`
      ),
      null)
    : e;
}
function UC(e, r) {
  let a, l, s, u, f;
  if (MC(e)) {
    let p = e.getAttribute("action");
    (l = p ? Ca(p, r) : null),
      (a = e.getAttribute("method") || _u),
      (s = rp(e.getAttribute("enctype")) || Mu),
      (u = new FormData(e));
  } else if (_C(e) || (DC(e) && (e.type === "submit" || e.type === "image"))) {
    let p = e.form;
    if (p == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let m = e.getAttribute("formaction") || p.getAttribute("action");
    if (
      ((l = m ? Ca(m, r) : null),
      (a = e.getAttribute("formmethod") || p.getAttribute("method") || _u),
      (s =
        rp(e.getAttribute("formenctype")) ||
        rp(p.getAttribute("enctype")) ||
        Mu),
      (u = new FormData(p, e)),
      !BC())
    ) {
      let { name: h, type: g, value: v } = e;
      if (g === "image") {
        let S = h ? `${h}.` : "";
        u.append(`${S}x`, "0"), u.append(`${S}y`, "0");
      } else h && u.append(h, v);
    }
  } else {
    if (cc(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (a = _u), (l = null), (s = Mu), (f = e);
  }
  return (
    u && s === "text/plain" && ((f = u), (u = void 0)),
    { action: l, method: a.toLowerCase(), encType: s, formData: u, body: f }
  );
}
function hh(e, r) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(r);
}
async function LC(e, r) {
  if (e.id in r) return r[e.id];
  try {
    let a = await import(e.module);
    return (r[e.id] = a), a;
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
function $C(e) {
  return e == null
    ? !1
    : e.href == null
    ? e.rel === "preload" &&
      typeof e.imageSrcSet == "string" &&
      typeof e.imageSizes == "string"
    : typeof e.rel == "string" && typeof e.href == "string";
}
async function jC(e, r, a) {
  let l = await Promise.all(
    e.map(async (s) => {
      let u = r.routes[s.route.id];
      if (u) {
        let f = await LC(u, a);
        return f.links ? f.links() : [];
      }
      return [];
    })
  );
  return VC(
    l
      .flat(1)
      .filter($C)
      .filter((s) => s.rel === "stylesheet" || s.rel === "preload")
      .map((s) =>
        s.rel === "stylesheet"
          ? { ...s, rel: "prefetch", as: "style" }
          : { ...s, rel: "prefetch" }
      )
  );
}
function tv(e, r, a, l, s, u) {
  let f = (m, h) => (a[h] ? m.route.id !== a[h].route.id : !0),
    p = (m, h) => {
      var g;
      return (
        a[h].pathname !== m.pathname ||
        (((g = a[h].route.path) == null ? void 0 : g.endsWith("*")) &&
          a[h].params["*"] !== m.params["*"])
      );
    };
  return u === "assets"
    ? r.filter((m, h) => f(m, h) || p(m, h))
    : u === "data"
    ? r.filter((m, h) => {
        var v;
        let g = l.routes[m.route.id];
        if (!g || !g.hasLoader) return !1;
        if (f(m, h) || p(m, h)) return !0;
        if (m.route.shouldRevalidate) {
          let S = m.route.shouldRevalidate({
            currentUrl: new URL(s.pathname + s.search + s.hash, window.origin),
            currentParams: ((v = a[0]) == null ? void 0 : v.params) || {},
            nextUrl: new URL(e, window.origin),
            nextParams: m.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof S == "boolean") return S;
        }
        return !0;
      })
    : [];
}
function HC(e, r) {
  return PC(
    e
      .map((a) => {
        let l = r.routes[a.route.id];
        if (!l) return [];
        let s = [l.module];
        return l.imports && (s = s.concat(l.imports)), s;
      })
      .flat(1)
  );
}
function PC(e) {
  return [...new Set(e)];
}
function qC(e) {
  let r = {},
    a = Object.keys(e).sort();
  for (let l of a) r[l] = e[l];
  return r;
}
function VC(e, r) {
  let a = new Set();
  return (
    new Set(r),
    e.reduce((l, s) => {
      let u = JSON.stringify(qC(s));
      return a.has(u) || (a.add(u), l.push({ key: u, link: s })), l;
    }, [])
  );
}
function FC(e) {
  let r =
    typeof e == "string"
      ? new URL(
          e,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : e;
  return (
    r.pathname === "/"
      ? (r.pathname = "_root.data")
      : (r.pathname = `${r.pathname.replace(/\/$/, "")}.data`),
    r
  );
}
function GC() {
  let e = C.useContext(pl);
  return (
    hh(
      e,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    e
  );
}
function YC() {
  let e = C.useContext(uc);
  return (
    hh(
      e,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    e
  );
}
var mh = C.createContext(void 0);
mh.displayName = "FrameworkContext";
function e1() {
  let e = C.useContext(mh);
  return (
    hh(e, "You must render this element inside a <HydratedRouter> element"), e
  );
}
function IC(e, r) {
  let a = C.useContext(mh),
    [l, s] = C.useState(!1),
    [u, f] = C.useState(!1),
    {
      onFocus: p,
      onBlur: m,
      onMouseEnter: h,
      onMouseLeave: g,
      onTouchStart: v,
    } = r,
    S = C.useRef(null);
  C.useEffect(() => {
    if ((e === "render" && f(!0), e === "viewport")) {
      let x = (_) => {
          _.forEach((M) => {
            f(M.isIntersecting);
          });
        },
        T = new IntersectionObserver(x, { threshold: 0.5 });
      return (
        S.current && T.observe(S.current),
        () => {
          T.disconnect();
        }
      );
    }
  }, [e]),
    C.useEffect(() => {
      if (l) {
        let x = setTimeout(() => {
          f(!0);
        }, 100);
        return () => {
          clearTimeout(x);
        };
      }
    }, [l]);
  let R = () => {
      s(!0);
    },
    b = () => {
      s(!1), f(!1);
    };
  return a
    ? e !== "intent"
      ? [u, S, {}]
      : [
          u,
          S,
          {
            onFocus: xo(p, R),
            onBlur: xo(m, b),
            onMouseEnter: xo(h, R),
            onMouseLeave: xo(g, b),
            onTouchStart: xo(v, R),
          },
        ]
    : [!1, S, {}];
}
function xo(e, r) {
  return (a) => {
    e && e(a), a.defaultPrevented || r(a);
  };
}
function XC({ page: e, ...r }) {
  let { router: a } = GC(),
    l = C.useMemo(() => Fb(a.routes, e, a.basename), [a.routes, e, a.basename]);
  return l ? C.createElement(QC, { page: e, matches: l, ...r }) : null;
}
function KC(e) {
  let { manifest: r, routeModules: a } = e1(),
    [l, s] = C.useState([]);
  return (
    C.useEffect(() => {
      let u = !1;
      return (
        jC(e, r, a).then((f) => {
          u || s(f);
        }),
        () => {
          u = !0;
        }
      );
    }, [e, r, a]),
    l
  );
}
function QC({ page: e, matches: r, ...a }) {
  let l = Ta(),
    { manifest: s, routeModules: u } = e1(),
    { loaderData: f, matches: p } = YC(),
    m = C.useMemo(() => tv(e, r, p, s, l, "data"), [e, r, p, s, l]),
    h = C.useMemo(() => tv(e, r, p, s, l, "assets"), [e, r, p, s, l]),
    g = C.useMemo(() => {
      if (e === l.pathname + l.search + l.hash) return [];
      let R = new Set(),
        b = !1;
      if (
        (r.forEach((T) => {
          var M;
          let _ = s.routes[T.route.id];
          !_ ||
            !_.hasLoader ||
            ((!m.some((A) => A.route.id === T.route.id) &&
              T.route.id in f &&
              (M = u[T.route.id]) != null &&
              M.shouldRevalidate) ||
            _.hasClientLoader
              ? (b = !0)
              : R.add(T.route.id));
        }),
        R.size === 0)
      )
        return [];
      let x = FC(e);
      return (
        b &&
          R.size > 0 &&
          x.searchParams.set(
            "_routes",
            r
              .filter((T) => R.has(T.route.id))
              .map((T) => T.route.id)
              .join(",")
          ),
        [x.pathname + x.search]
      );
    }, [f, l, s, m, r, e, u]),
    v = C.useMemo(() => HC(h, s), [h, s]),
    S = KC(h);
  return C.createElement(
    C.Fragment,
    null,
    g.map((R) =>
      C.createElement("link", {
        key: R,
        rel: "prefetch",
        as: "fetch",
        href: R,
        ...a,
      })
    ),
    v.map((R) =>
      C.createElement("link", { key: R, rel: "modulepreload", href: R, ...a })
    ),
    S.map(({ key: R, link: b }) => C.createElement("link", { key: R, ...b }))
  );
}
function WC(...e) {
  return (r) => {
    e.forEach((a) => {
      typeof a == "function" ? a(r) : a != null && (a.current = r);
    });
  };
}
var t1 =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  t1 && (window.__reactRouterVersion = "7.1.5");
} catch {}
function ZC({ basename: e, children: r, window: a }) {
  let l = C.useRef();
  l.current == null && (l.current = HR({ window: a, v5Compat: !0 }));
  let s = l.current,
    [u, f] = C.useState({ action: s.action, location: s.location }),
    p = C.useCallback(
      (m) => {
        C.startTransition(() => f(m));
      },
      [f]
    );
  return (
    C.useLayoutEffect(() => s.listen(p), [s, p]),
    C.createElement(OC, {
      basename: e,
      children: r,
      location: u.location,
      navigationType: u.action,
      navigator: s,
    })
  );
}
var n1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  gh = C.forwardRef(function (
    {
      onClick: r,
      discover: a = "render",
      prefetch: l = "none",
      relative: s,
      reloadDocument: u,
      replace: f,
      state: p,
      target: m,
      to: h,
      preventScrollReset: g,
      viewTransition: v,
      ...S
    },
    R
  ) {
    let { basename: b } = C.useContext(rr),
      x = typeof h == "string" && n1.test(h),
      T,
      _ = !1;
    if (typeof h == "string" && x && ((T = h), t1))
      try {
        let G = new URL(window.location.href),
          E = h.startsWith("//") ? new URL(G.protocol + h) : new URL(h),
          I = Ca(E.pathname, b);
        E.origin === G.origin && I != null
          ? (h = I + E.search + E.hash)
          : (_ = !0);
      } catch {
        tr(
          !1,
          `<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let M = dC(h, { relative: s }),
      [A, D, O] = IC(l, S),
      j = nw(h, {
        replace: f,
        state: p,
        target: m,
        preventScrollReset: g,
        relative: s,
        viewTransition: v,
      });
    function L(G) {
      r && r(G), G.defaultPrevented || j(G);
    }
    let re = C.createElement("a", {
      ...S,
      ...O,
      href: T || M,
      onClick: _ || u ? r : L,
      ref: WC(R, D),
      target: m,
      "data-discover": !x && a === "render" ? "true" : void 0,
    });
    return A && !x
      ? C.createElement(C.Fragment, null, re, C.createElement(XC, { page: M }))
      : re;
  });
gh.displayName = "Link";
var JC = C.forwardRef(function (
  {
    "aria-current": r = "page",
    caseSensitive: a = !1,
    className: l = "",
    end: s = !1,
    style: u,
    to: f,
    viewTransition: p,
    children: m,
    ...h
  },
  g
) {
  let v = Qo(f, { relative: h.relative }),
    S = Ta(),
    R = C.useContext(uc),
    { navigator: b, basename: x } = C.useContext(rr),
    T = R != null && ow(v) && p === !0,
    _ = b.encodeLocation ? b.encodeLocation(v).pathname : v.pathname,
    M = S.pathname,
    A =
      R && R.navigation && R.navigation.location
        ? R.navigation.location.pathname
        : null;
  a ||
    ((M = M.toLowerCase()),
    (A = A ? A.toLowerCase() : null),
    (_ = _.toLowerCase())),
    A && x && (A = Ca(A, x) || A);
  const D = _ !== "/" && _.endsWith("/") ? _.length - 1 : _.length;
  let O = M === _ || (!s && M.startsWith(_) && M.charAt(D) === "/"),
    j =
      A != null &&
      (A === _ || (!s && A.startsWith(_) && A.charAt(_.length) === "/")),
    L = { isActive: O, isPending: j, isTransitioning: T },
    re = O ? r : void 0,
    G;
  typeof l == "function"
    ? (G = l(L))
    : (G = [
        l,
        O ? "active" : null,
        j ? "pending" : null,
        T ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let E = typeof u == "function" ? u(L) : u;
  return C.createElement(
    gh,
    {
      ...h,
      "aria-current": re,
      className: G,
      ref: g,
      style: E,
      to: f,
      viewTransition: p,
    },
    typeof m == "function" ? m(L) : m
  );
});
JC.displayName = "NavLink";
var ew = C.forwardRef(
  (
    {
      discover: e = "render",
      fetcherKey: r,
      navigate: a,
      reloadDocument: l,
      replace: s,
      state: u,
      method: f = _u,
      action: p,
      onSubmit: m,
      relative: h,
      preventScrollReset: g,
      viewTransition: v,
      ...S
    },
    R
  ) => {
    let b = iw(),
      x = lw(p, { relative: h }),
      T = f.toLowerCase() === "get" ? "get" : "post",
      _ = typeof p == "string" && n1.test(p),
      M = (A) => {
        if ((m && m(A), A.defaultPrevented)) return;
        A.preventDefault();
        let D = A.nativeEvent.submitter,
          O = (D == null ? void 0 : D.getAttribute("formmethod")) || f;
        b(D || A.currentTarget, {
          fetcherKey: r,
          method: O,
          navigate: a,
          replace: s,
          state: u,
          relative: h,
          preventScrollReset: g,
          viewTransition: v,
        });
      };
    return C.createElement("form", {
      ref: R,
      method: T,
      action: x,
      onSubmit: l ? m : M,
      ...S,
      "data-discover": !_ && e === "render" ? "true" : void 0,
    });
  }
);
ew.displayName = "Form";
function tw(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function r1(e) {
  let r = C.useContext(pl);
  return St(r, tw(e)), r;
}
function nw(
  e,
  {
    target: r,
    replace: a,
    state: l,
    preventScrollReset: s,
    relative: u,
    viewTransition: f,
  } = {}
) {
  let p = Ko(),
    m = Ta(),
    h = Qo(e, { relative: u });
  return C.useCallback(
    (g) => {
      if (NC(g, r)) {
        g.preventDefault();
        let v = a !== void 0 ? a : Po(m) === Po(h);
        p(e, {
          replace: v,
          state: l,
          preventScrollReset: s,
          relative: u,
          viewTransition: f,
        });
      }
    },
    [m, p, h, a, l, r, e, s, u, f]
  );
}
var rw = 0,
  aw = () => `__${String(++rw)}__`;
function iw() {
  let { router: e } = r1("useSubmit"),
    { basename: r } = C.useContext(rr),
    a = RC();
  return C.useCallback(
    async (l, s = {}) => {
      let { action: u, method: f, encType: p, formData: m, body: h } = UC(l, r);
      if (s.navigate === !1) {
        let g = s.fetcherKey || aw();
        await e.fetch(g, a, s.action || u, {
          preventScrollReset: s.preventScrollReset,
          formData: m,
          body: h,
          formMethod: s.method || f,
          formEncType: s.encType || p,
          flushSync: s.flushSync,
        });
      } else
        await e.navigate(s.action || u, {
          preventScrollReset: s.preventScrollReset,
          formData: m,
          body: h,
          formMethod: s.method || f,
          formEncType: s.encType || p,
          replace: s.replace,
          state: s.state,
          fromRouteId: a,
          flushSync: s.flushSync,
          viewTransition: s.viewTransition,
        });
    },
    [e, r, a]
  );
}
function lw(e, { relative: r } = {}) {
  let { basename: a } = C.useContext(rr),
    l = C.useContext(wr);
  St(l, "useFormAction must be used inside a RouteContext");
  let [s] = l.matches.slice(-1),
    u = { ...Qo(e || ".", { relative: r }) },
    f = Ta();
  if (e == null) {
    u.search = f.search;
    let p = new URLSearchParams(u.search),
      m = p.getAll("index");
    if (m.some((g) => g === "")) {
      p.delete("index"),
        m.filter((v) => v).forEach((v) => p.append("index", v));
      let g = p.toString();
      u.search = g ? `?${g}` : "";
    }
  }
  return (
    (!e || e === ".") &&
      s.route.index &&
      (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
    a !== "/" && (u.pathname = u.pathname === "/" ? a : Xr([a, u.pathname])),
    Po(u)
  );
}
function ow(e, r = {}) {
  let a = C.useContext(Xb);
  St(
    a != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: l } = r1("useViewTransitionState"),
    s = Qo(e, { relative: r.relative });
  if (!a.isTransitioning) return !1;
  let u = Ca(a.currentLocation.pathname, l) || a.currentLocation.pathname,
    f = Ca(a.nextLocation.pathname, l) || a.nextLocation.pathname;
  return Fu(s.pathname, f) != null || Fu(s.pathname, u) != null;
}
new TextEncoder();
const a1 = C.createContext(null),
  fc = () => {
    const e = C.useContext(a1);
    if (!e) throw new Error("useAuth must be used within an AuthProvider");
    return e;
  },
  sw = (e) => {
    const { children: r, axiosClient: a } = e,
      [l, s] = C.useState(!1),
      [u, f] = C.useState(!0),
      [p, m] = C.useState(),
      h = async () => {
        try {
          const S = await a.get("/users/me");
          S.status === 200 ? (m(S.data.user), s(!0)) : (s(!1), m(void 0));
        } catch {
          s(!1), m(void 0);
        } finally {
          f(!1);
        }
      };
    C.useEffect(() => {
      h();
    }, []);
    const g = async (S, R) => {
        try {
          return (
            await a.post("/users/login", { email: S, password: R }),
            await h(),
            !0
          );
        } catch {
          return !1;
        }
      },
      v = async () => {
        try {
          await a.post("/users/logout"), await h(), m(void 0), s(!1);
        } catch {}
      };
    return $.jsx(a1.Provider, {
      value: { user: p, authenticated: l, login: g, logout: v, loading: u },
      children: r,
    });
  };
function i1(e, r) {
  return function () {
    return e.apply(r, arguments);
  };
}
const { toString: uw } = Object.prototype,
  { getPrototypeOf: yh } = Object,
  dc = ((e) => (r) => {
    const a = uw.call(r);
    return e[a] || (e[a] = a.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ar = (e) => ((e = e.toLowerCase()), (r) => dc(r) === e),
  pc = (e) => (r) => typeof r === e,
  { isArray: ml } = Array,
  qo = pc("undefined");
function cw(e) {
  return (
    e !== null &&
    !qo(e) &&
    e.constructor !== null &&
    !qo(e.constructor) &&
    _n(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const l1 = ar("ArrayBuffer");
function fw(e) {
  let r;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (r = ArrayBuffer.isView(e))
      : (r = e && e.buffer && l1(e.buffer)),
    r
  );
}
const dw = pc("string"),
  _n = pc("function"),
  o1 = pc("number"),
  hc = (e) => e !== null && typeof e == "object",
  pw = (e) => e === !0 || e === !1,
  Du = (e) => {
    if (dc(e) !== "object") return !1;
    const r = yh(e);
    return (
      (r === null ||
        r === Object.prototype ||
        Object.getPrototypeOf(r) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  hw = ar("Date"),
  mw = ar("File"),
  gw = ar("Blob"),
  yw = ar("FileList"),
  vw = (e) => hc(e) && _n(e.pipe),
  bw = (e) => {
    let r;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (_n(e.append) &&
          ((r = dc(e)) === "formdata" ||
            (r === "object" &&
              _n(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  Sw = ar("URLSearchParams"),
  [xw, Ew, Rw, Cw] = ["ReadableStream", "Request", "Response", "Headers"].map(
    ar
  ),
  ww = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Wo(e, r, { allOwnKeys: a = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let l, s;
  if ((typeof e != "object" && (e = [e]), ml(e)))
    for (l = 0, s = e.length; l < s; l++) r.call(null, e[l], l, e);
  else {
    const u = a ? Object.getOwnPropertyNames(e) : Object.keys(e),
      f = u.length;
    let p;
    for (l = 0; l < f; l++) (p = u[l]), r.call(null, e[p], p, e);
  }
}
function s1(e, r) {
  r = r.toLowerCase();
  const a = Object.keys(e);
  let l = a.length,
    s;
  for (; l-- > 0; ) if (((s = a[l]), r === s.toLowerCase())) return s;
  return null;
}
const Ja =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  u1 = (e) => !qo(e) && e !== Ja;
function Mp() {
  const { caseless: e } = (u1(this) && this) || {},
    r = {},
    a = (l, s) => {
      const u = (e && s1(r, s)) || s;
      Du(r[u]) && Du(l)
        ? (r[u] = Mp(r[u], l))
        : Du(l)
        ? (r[u] = Mp({}, l))
        : ml(l)
        ? (r[u] = l.slice())
        : (r[u] = l);
    };
  for (let l = 0, s = arguments.length; l < s; l++)
    arguments[l] && Wo(arguments[l], a);
  return r;
}
const Tw = (e, r, a, { allOwnKeys: l } = {}) => (
    Wo(
      r,
      (s, u) => {
        a && _n(s) ? (e[u] = i1(s, a)) : (e[u] = s);
      },
      { allOwnKeys: l }
    ),
    e
  ),
  Aw = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Ow = (e, r, a, l) => {
    (e.prototype = Object.create(r.prototype, l)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: r.prototype }),
      a && Object.assign(e.prototype, a);
  },
  _w = (e, r, a, l) => {
    let s, u, f;
    const p = {};
    if (((r = r || {}), e == null)) return r;
    do {
      for (s = Object.getOwnPropertyNames(e), u = s.length; u-- > 0; )
        (f = s[u]), (!l || l(f, e, r)) && !p[f] && ((r[f] = e[f]), (p[f] = !0));
      e = a !== !1 && yh(e);
    } while (e && (!a || a(e, r)) && e !== Object.prototype);
    return r;
  },
  Mw = (e, r, a) => {
    (e = String(e)),
      (a === void 0 || a > e.length) && (a = e.length),
      (a -= r.length);
    const l = e.indexOf(r, a);
    return l !== -1 && l === a;
  },
  Dw = (e) => {
    if (!e) return null;
    if (ml(e)) return e;
    let r = e.length;
    if (!o1(r)) return null;
    const a = new Array(r);
    for (; r-- > 0; ) a[r] = e[r];
    return a;
  },
  zw = (
    (e) => (r) =>
      e && r instanceof e
  )(typeof Uint8Array < "u" && yh(Uint8Array)),
  Nw = (e, r) => {
    const l = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = l.next()) && !s.done; ) {
      const u = s.value;
      r.call(e, u[0], u[1]);
    }
  },
  Bw = (e, r) => {
    let a;
    const l = [];
    for (; (a = e.exec(r)) !== null; ) l.push(a);
    return l;
  },
  kw = ar("HTMLFormElement"),
  Uw = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (a, l, s) {
      return l.toUpperCase() + s;
    }),
  nv = (
    ({ hasOwnProperty: e }) =>
    (r, a) =>
      e.call(r, a)
  )(Object.prototype),
  Lw = ar("RegExp"),
  c1 = (e, r) => {
    const a = Object.getOwnPropertyDescriptors(e),
      l = {};
    Wo(a, (s, u) => {
      let f;
      (f = r(s, u, e)) !== !1 && (l[u] = f || s);
    }),
      Object.defineProperties(e, l);
  },
  $w = (e) => {
    c1(e, (r, a) => {
      if (_n(e) && ["arguments", "caller", "callee"].indexOf(a) !== -1)
        return !1;
      const l = e[a];
      if (_n(l)) {
        if (((r.enumerable = !1), "writable" in r)) {
          r.writable = !1;
          return;
        }
        r.set ||
          (r.set = () => {
            throw Error("Can not rewrite read-only method '" + a + "'");
          });
      }
    });
  },
  jw = (e, r) => {
    const a = {},
      l = (s) => {
        s.forEach((u) => {
          a[u] = !0;
        });
      };
    return ml(e) ? l(e) : l(String(e).split(r)), a;
  },
  Hw = () => {},
  Pw = (e, r) => (e != null && Number.isFinite((e = +e)) ? e : r),
  ap = "abcdefghijklmnopqrstuvwxyz",
  rv = "0123456789",
  f1 = { DIGIT: rv, ALPHA: ap, ALPHA_DIGIT: ap + ap.toUpperCase() + rv },
  qw = (e = 16, r = f1.ALPHA_DIGIT) => {
    let a = "";
    const { length: l } = r;
    for (; e--; ) a += r[(Math.random() * l) | 0];
    return a;
  };
function Vw(e) {
  return !!(
    e &&
    _n(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const Fw = (e) => {
    const r = new Array(10),
      a = (l, s) => {
        if (hc(l)) {
          if (r.indexOf(l) >= 0) return;
          if (!("toJSON" in l)) {
            r[s] = l;
            const u = ml(l) ? [] : {};
            return (
              Wo(l, (f, p) => {
                const m = a(f, s + 1);
                !qo(m) && (u[p] = m);
              }),
              (r[s] = void 0),
              u
            );
          }
        }
        return l;
      };
    return a(e, 0);
  },
  Gw = ar("AsyncFunction"),
  Yw = (e) => e && (hc(e) || _n(e)) && _n(e.then) && _n(e.catch),
  d1 = ((e, r) =>
    e
      ? setImmediate
      : r
      ? ((a, l) => (
          Ja.addEventListener(
            "message",
            ({ source: s, data: u }) => {
              s === Ja && u === a && l.length && l.shift()();
            },
            !1
          ),
          (s) => {
            l.push(s), Ja.postMessage(a, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (a) => setTimeout(a))(
    typeof setImmediate == "function",
    _n(Ja.postMessage)
  ),
  Iw =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Ja)
      : (typeof process < "u" && process.nextTick) || d1,
  K = {
    isArray: ml,
    isArrayBuffer: l1,
    isBuffer: cw,
    isFormData: bw,
    isArrayBufferView: fw,
    isString: dw,
    isNumber: o1,
    isBoolean: pw,
    isObject: hc,
    isPlainObject: Du,
    isReadableStream: xw,
    isRequest: Ew,
    isResponse: Rw,
    isHeaders: Cw,
    isUndefined: qo,
    isDate: hw,
    isFile: mw,
    isBlob: gw,
    isRegExp: Lw,
    isFunction: _n,
    isStream: vw,
    isURLSearchParams: Sw,
    isTypedArray: zw,
    isFileList: yw,
    forEach: Wo,
    merge: Mp,
    extend: Tw,
    trim: ww,
    stripBOM: Aw,
    inherits: Ow,
    toFlatObject: _w,
    kindOf: dc,
    kindOfTest: ar,
    endsWith: Mw,
    toArray: Dw,
    forEachEntry: Nw,
    matchAll: Bw,
    isHTMLForm: kw,
    hasOwnProperty: nv,
    hasOwnProp: nv,
    reduceDescriptors: c1,
    freezeMethods: $w,
    toObjectSet: jw,
    toCamelCase: Uw,
    noop: Hw,
    toFiniteNumber: Pw,
    findKey: s1,
    global: Ja,
    isContextDefined: u1,
    ALPHABET: f1,
    generateString: qw,
    isSpecCompliantForm: Vw,
    toJSONObject: Fw,
    isAsyncFn: Gw,
    isThenable: Yw,
    setImmediate: d1,
    asap: Iw,
  };
function ke(e, r, a, l, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    r && (this.code = r),
    a && (this.config = a),
    l && (this.request = l),
    s && ((this.response = s), (this.status = s.status ? s.status : null));
}
K.inherits(ke, Error, {
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
      config: K.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const p1 = ke.prototype,
  h1 = {};
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
  h1[e] = { value: e };
});
Object.defineProperties(ke, h1);
Object.defineProperty(p1, "isAxiosError", { value: !0 });
ke.from = (e, r, a, l, s, u) => {
  const f = Object.create(p1);
  return (
    K.toFlatObject(
      e,
      f,
      function (m) {
        return m !== Error.prototype;
      },
      (p) => p !== "isAxiosError"
    ),
    ke.call(f, e.message, r, a, l, s),
    (f.cause = e),
    (f.name = e.name),
    u && Object.assign(f, u),
    f
  );
};
const Xw = null;
function Dp(e) {
  return K.isPlainObject(e) || K.isArray(e);
}
function m1(e) {
  return K.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function av(e, r, a) {
  return e
    ? e
        .concat(r)
        .map(function (s, u) {
          return (s = m1(s)), !a && u ? "[" + s + "]" : s;
        })
        .join(a ? "." : "")
    : r;
}
function Kw(e) {
  return K.isArray(e) && !e.some(Dp);
}
const Qw = K.toFlatObject(K, {}, null, function (r) {
  return /^is[A-Z]/.test(r);
});
function mc(e, r, a) {
  if (!K.isObject(e)) throw new TypeError("target must be an object");
  (r = r || new FormData()),
    (a = K.toFlatObject(
      a,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (x, T) {
        return !K.isUndefined(T[x]);
      }
    ));
  const l = a.metaTokens,
    s = a.visitor || g,
    u = a.dots,
    f = a.indexes,
    m = (a.Blob || (typeof Blob < "u" && Blob)) && K.isSpecCompliantForm(r);
  if (!K.isFunction(s)) throw new TypeError("visitor must be a function");
  function h(b) {
    if (b === null) return "";
    if (K.isDate(b)) return b.toISOString();
    if (!m && K.isBlob(b))
      throw new ke("Blob is not supported. Use a Buffer instead.");
    return K.isArrayBuffer(b) || K.isTypedArray(b)
      ? m && typeof Blob == "function"
        ? new Blob([b])
        : Buffer.from(b)
      : b;
  }
  function g(b, x, T) {
    let _ = b;
    if (b && !T && typeof b == "object") {
      if (K.endsWith(x, "{}"))
        (x = l ? x : x.slice(0, -2)), (b = JSON.stringify(b));
      else if (
        (K.isArray(b) && Kw(b)) ||
        ((K.isFileList(b) || K.endsWith(x, "[]")) && (_ = K.toArray(b)))
      )
        return (
          (x = m1(x)),
          _.forEach(function (A, D) {
            !(K.isUndefined(A) || A === null) &&
              r.append(
                f === !0 ? av([x], D, u) : f === null ? x : x + "[]",
                h(A)
              );
          }),
          !1
        );
    }
    return Dp(b) ? !0 : (r.append(av(T, x, u), h(b)), !1);
  }
  const v = [],
    S = Object.assign(Qw, {
      defaultVisitor: g,
      convertValue: h,
      isVisitable: Dp,
    });
  function R(b, x) {
    if (!K.isUndefined(b)) {
      if (v.indexOf(b) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      v.push(b),
        K.forEach(b, function (_, M) {
          (!(K.isUndefined(_) || _ === null) &&
            s.call(r, _, K.isString(M) ? M.trim() : M, x, S)) === !0 &&
            R(_, x ? x.concat(M) : [M]);
        }),
        v.pop();
    }
  }
  if (!K.isObject(e)) throw new TypeError("data must be an object");
  return R(e), r;
}
function iv(e) {
  const r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (l) {
    return r[l];
  });
}
function vh(e, r) {
  (this._pairs = []), e && mc(e, this, r);
}
const g1 = vh.prototype;
g1.append = function (r, a) {
  this._pairs.push([r, a]);
};
g1.toString = function (r) {
  const a = r
    ? function (l) {
        return r.call(this, l, iv);
      }
    : iv;
  return this._pairs
    .map(function (s) {
      return a(s[0]) + "=" + a(s[1]);
    }, "")
    .join("&");
};
function Ww(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function y1(e, r, a) {
  if (!r) return e;
  const l = (a && a.encode) || Ww;
  K.isFunction(a) && (a = { serialize: a });
  const s = a && a.serialize;
  let u;
  if (
    (s
      ? (u = s(r, a))
      : (u = K.isURLSearchParams(r) ? r.toString() : new vh(r, a).toString(l)),
    u)
  ) {
    const f = e.indexOf("#");
    f !== -1 && (e = e.slice(0, f)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + u);
  }
  return e;
}
class lv {
  constructor() {
    this.handlers = [];
  }
  use(r, a, l) {
    return (
      this.handlers.push({
        fulfilled: r,
        rejected: a,
        synchronous: l ? l.synchronous : !1,
        runWhen: l ? l.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(r) {
    this.handlers[r] && (this.handlers[r] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(r) {
    K.forEach(this.handlers, function (l) {
      l !== null && r(l);
    });
  }
}
const v1 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Zw = typeof URLSearchParams < "u" ? URLSearchParams : vh,
  Jw = typeof FormData < "u" ? FormData : null,
  eT = typeof Blob < "u" ? Blob : null,
  tT = {
    isBrowser: !0,
    classes: { URLSearchParams: Zw, FormData: Jw, Blob: eT },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  bh = typeof window < "u" && typeof document < "u",
  zp = (typeof navigator == "object" && navigator) || void 0,
  nT =
    bh &&
    (!zp || ["ReactNative", "NativeScript", "NS"].indexOf(zp.product) < 0),
  rT =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  aT = (bh && window.location.href) || "http://localhost",
  iT = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: bh,
        hasStandardBrowserEnv: nT,
        hasStandardBrowserWebWorkerEnv: rT,
        navigator: zp,
        origin: aT,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ln = { ...iT, ...tT };
function lT(e, r) {
  return mc(
    e,
    new ln.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (a, l, s, u) {
          return ln.isNode && K.isBuffer(a)
            ? (this.append(l, a.toString("base64")), !1)
            : u.defaultVisitor.apply(this, arguments);
        },
      },
      r
    )
  );
}
function oT(e) {
  return K.matchAll(/\w+|\[(\w*)]/g, e).map((r) =>
    r[0] === "[]" ? "" : r[1] || r[0]
  );
}
function sT(e) {
  const r = {},
    a = Object.keys(e);
  let l;
  const s = a.length;
  let u;
  for (l = 0; l < s; l++) (u = a[l]), (r[u] = e[u]);
  return r;
}
function b1(e) {
  function r(a, l, s, u) {
    let f = a[u++];
    if (f === "__proto__") return !0;
    const p = Number.isFinite(+f),
      m = u >= a.length;
    return (
      (f = !f && K.isArray(s) ? s.length : f),
      m
        ? (K.hasOwnProp(s, f) ? (s[f] = [s[f], l]) : (s[f] = l), !p)
        : ((!s[f] || !K.isObject(s[f])) && (s[f] = []),
          r(a, l, s[f], u) && K.isArray(s[f]) && (s[f] = sT(s[f])),
          !p)
    );
  }
  if (K.isFormData(e) && K.isFunction(e.entries)) {
    const a = {};
    return (
      K.forEachEntry(e, (l, s) => {
        r(oT(l), s, a, 0);
      }),
      a
    );
  }
  return null;
}
function uT(e, r, a) {
  if (K.isString(e))
    try {
      return (r || JSON.parse)(e), K.trim(e);
    } catch (l) {
      if (l.name !== "SyntaxError") throw l;
    }
  return (a || JSON.stringify)(e);
}
const Zo = {
  transitional: v1,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (r, a) {
      const l = a.getContentType() || "",
        s = l.indexOf("application/json") > -1,
        u = K.isObject(r);
      if ((u && K.isHTMLForm(r) && (r = new FormData(r)), K.isFormData(r)))
        return s ? JSON.stringify(b1(r)) : r;
      if (
        K.isArrayBuffer(r) ||
        K.isBuffer(r) ||
        K.isStream(r) ||
        K.isFile(r) ||
        K.isBlob(r) ||
        K.isReadableStream(r)
      )
        return r;
      if (K.isArrayBufferView(r)) return r.buffer;
      if (K.isURLSearchParams(r))
        return (
          a.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          r.toString()
        );
      let p;
      if (u) {
        if (l.indexOf("application/x-www-form-urlencoded") > -1)
          return lT(r, this.formSerializer).toString();
        if ((p = K.isFileList(r)) || l.indexOf("multipart/form-data") > -1) {
          const m = this.env && this.env.FormData;
          return mc(
            p ? { "files[]": r } : r,
            m && new m(),
            this.formSerializer
          );
        }
      }
      return u || s ? (a.setContentType("application/json", !1), uT(r)) : r;
    },
  ],
  transformResponse: [
    function (r) {
      const a = this.transitional || Zo.transitional,
        l = a && a.forcedJSONParsing,
        s = this.responseType === "json";
      if (K.isResponse(r) || K.isReadableStream(r)) return r;
      if (r && K.isString(r) && ((l && !this.responseType) || s)) {
        const f = !(a && a.silentJSONParsing) && s;
        try {
          return JSON.parse(r);
        } catch (p) {
          if (f)
            throw p.name === "SyntaxError"
              ? ke.from(p, ke.ERR_BAD_RESPONSE, this, null, this.response)
              : p;
        }
      }
      return r;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: ln.classes.FormData, Blob: ln.classes.Blob },
  validateStatus: function (r) {
    return r >= 200 && r < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
K.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Zo.headers[e] = {};
});
const cT = K.toObjectSet([
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
  fT = (e) => {
    const r = {};
    let a, l, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (f) {
            (s = f.indexOf(":")),
              (a = f.substring(0, s).trim().toLowerCase()),
              (l = f.substring(s + 1).trim()),
              !(!a || (r[a] && cT[a])) &&
                (a === "set-cookie"
                  ? r[a]
                    ? r[a].push(l)
                    : (r[a] = [l])
                  : (r[a] = r[a] ? r[a] + ", " + l : l));
          }),
      r
    );
  },
  ov = Symbol("internals");
function Eo(e) {
  return e && String(e).trim().toLowerCase();
}
function zu(e) {
  return e === !1 || e == null ? e : K.isArray(e) ? e.map(zu) : String(e);
}
function dT(e) {
  const r = Object.create(null),
    a = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let l;
  for (; (l = a.exec(e)); ) r[l[1]] = l[2];
  return r;
}
const pT = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ip(e, r, a, l, s) {
  if (K.isFunction(l)) return l.call(this, r, a);
  if ((s && (r = a), !!K.isString(r))) {
    if (K.isString(l)) return r.indexOf(l) !== -1;
    if (K.isRegExp(l)) return l.test(r);
  }
}
function hT(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (r, a, l) => a.toUpperCase() + l);
}
function mT(e, r) {
  const a = K.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((l) => {
    Object.defineProperty(e, l + a, {
      value: function (s, u, f) {
        return this[l].call(this, r, s, u, f);
      },
      configurable: !0,
    });
  });
}
let Sn = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, a, l) {
    const s = this;
    function u(p, m, h) {
      const g = Eo(m);
      if (!g) throw new Error("header name must be a non-empty string");
      const v = K.findKey(s, g);
      (!v || s[v] === void 0 || h === !0 || (h === void 0 && s[v] !== !1)) &&
        (s[v || m] = zu(p));
    }
    const f = (p, m) => K.forEach(p, (h, g) => u(h, g, m));
    if (K.isPlainObject(r) || r instanceof this.constructor) f(r, a);
    else if (K.isString(r) && (r = r.trim()) && !pT(r)) f(fT(r), a);
    else if (K.isHeaders(r)) for (const [p, m] of r.entries()) u(m, p, l);
    else r != null && u(a, r, l);
    return this;
  }
  get(r, a) {
    if (((r = Eo(r)), r)) {
      const l = K.findKey(this, r);
      if (l) {
        const s = this[l];
        if (!a) return s;
        if (a === !0) return dT(s);
        if (K.isFunction(a)) return a.call(this, s, l);
        if (K.isRegExp(a)) return a.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, a) {
    if (((r = Eo(r)), r)) {
      const l = K.findKey(this, r);
      return !!(l && this[l] !== void 0 && (!a || ip(this, this[l], l, a)));
    }
    return !1;
  }
  delete(r, a) {
    const l = this;
    let s = !1;
    function u(f) {
      if (((f = Eo(f)), f)) {
        const p = K.findKey(l, f);
        p && (!a || ip(l, l[p], p, a)) && (delete l[p], (s = !0));
      }
    }
    return K.isArray(r) ? r.forEach(u) : u(r), s;
  }
  clear(r) {
    const a = Object.keys(this);
    let l = a.length,
      s = !1;
    for (; l--; ) {
      const u = a[l];
      (!r || ip(this, this[u], u, r, !0)) && (delete this[u], (s = !0));
    }
    return s;
  }
  normalize(r) {
    const a = this,
      l = {};
    return (
      K.forEach(this, (s, u) => {
        const f = K.findKey(l, u);
        if (f) {
          (a[f] = zu(s)), delete a[u];
          return;
        }
        const p = r ? hT(u) : String(u).trim();
        p !== u && delete a[u], (a[p] = zu(s)), (l[p] = !0);
      }),
      this
    );
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const a = Object.create(null);
    return (
      K.forEach(this, (l, s) => {
        l != null && l !== !1 && (a[s] = r && K.isArray(l) ? l.join(", ") : l);
      }),
      a
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([r, a]) => r + ": " + a).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(r) {
    return r instanceof this ? r : new this(r);
  }
  static concat(r, ...a) {
    const l = new this(r);
    return a.forEach((s) => l.set(s)), l;
  }
  static accessor(r) {
    const l = (this[ov] = this[ov] = { accessors: {} }).accessors,
      s = this.prototype;
    function u(f) {
      const p = Eo(f);
      l[p] || (mT(s, f), (l[p] = !0));
    }
    return K.isArray(r) ? r.forEach(u) : u(r), this;
  }
};
Sn.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
K.reduceDescriptors(Sn.prototype, ({ value: e }, r) => {
  let a = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => e,
    set(l) {
      this[a] = l;
    },
  };
});
K.freezeMethods(Sn);
function lp(e, r) {
  const a = this || Zo,
    l = r || a,
    s = Sn.from(l.headers);
  let u = l.data;
  return (
    K.forEach(e, function (p) {
      u = p.call(a, u, s.normalize(), r ? r.status : void 0);
    }),
    s.normalize(),
    u
  );
}
function S1(e) {
  return !!(e && e.__CANCEL__);
}
function gl(e, r, a) {
  ke.call(this, e ?? "canceled", ke.ERR_CANCELED, r, a),
    (this.name = "CanceledError");
}
K.inherits(gl, ke, { __CANCEL__: !0 });
function x1(e, r, a) {
  const l = a.config.validateStatus;
  !a.status || !l || l(a.status)
    ? e(a)
    : r(
        new ke(
          "Request failed with status code " + a.status,
          [ke.ERR_BAD_REQUEST, ke.ERR_BAD_RESPONSE][
            Math.floor(a.status / 100) - 4
          ],
          a.config,
          a.request,
          a
        )
      );
}
function gT(e) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (r && r[1]) || "";
}
function yT(e, r) {
  e = e || 10;
  const a = new Array(e),
    l = new Array(e);
  let s = 0,
    u = 0,
    f;
  return (
    (r = r !== void 0 ? r : 1e3),
    function (m) {
      const h = Date.now(),
        g = l[u];
      f || (f = h), (a[s] = m), (l[s] = h);
      let v = u,
        S = 0;
      for (; v !== s; ) (S += a[v++]), (v = v % e);
      if (((s = (s + 1) % e), s === u && (u = (u + 1) % e), h - f < r)) return;
      const R = g && h - g;
      return R ? Math.round((S * 1e3) / R) : void 0;
    }
  );
}
function vT(e, r) {
  let a = 0,
    l = 1e3 / r,
    s,
    u;
  const f = (h, g = Date.now()) => {
    (a = g), (s = null), u && (clearTimeout(u), (u = null)), e.apply(null, h);
  };
  return [
    (...h) => {
      const g = Date.now(),
        v = g - a;
      v >= l
        ? f(h, g)
        : ((s = h),
          u ||
            (u = setTimeout(() => {
              (u = null), f(s);
            }, l - v)));
    },
    () => s && f(s),
  ];
}
const Gu = (e, r, a = 3) => {
    let l = 0;
    const s = yT(50, 250);
    return vT((u) => {
      const f = u.loaded,
        p = u.lengthComputable ? u.total : void 0,
        m = f - l,
        h = s(m),
        g = f <= p;
      l = f;
      const v = {
        loaded: f,
        total: p,
        progress: p ? f / p : void 0,
        bytes: m,
        rate: h || void 0,
        estimated: h && p && g ? (p - f) / h : void 0,
        event: u,
        lengthComputable: p != null,
        [r ? "download" : "upload"]: !0,
      };
      e(v);
    }, a);
  },
  sv = (e, r) => {
    const a = e != null;
    return [(l) => r[0]({ lengthComputable: a, total: e, loaded: l }), r[1]];
  },
  uv =
    (e) =>
    (...r) =>
      K.asap(() => e(...r)),
  bT = ln.hasStandardBrowserEnv
    ? ((e, r) => (a) => (
        (a = new URL(a, ln.origin)),
        e.protocol === a.protocol &&
          e.host === a.host &&
          (r || e.port === a.port)
      ))(
        new URL(ln.origin),
        ln.navigator && /(msie|trident)/i.test(ln.navigator.userAgent)
      )
    : () => !0,
  ST = ln.hasStandardBrowserEnv
    ? {
        write(e, r, a, l, s, u) {
          const f = [e + "=" + encodeURIComponent(r)];
          K.isNumber(a) && f.push("expires=" + new Date(a).toGMTString()),
            K.isString(l) && f.push("path=" + l),
            K.isString(s) && f.push("domain=" + s),
            u === !0 && f.push("secure"),
            (document.cookie = f.join("; "));
        },
        read(e) {
          const r = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return r ? decodeURIComponent(r[3]) : null;
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
function xT(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function ET(e, r) {
  return r ? e.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : e;
}
function E1(e, r) {
  return e && !xT(r) ? ET(e, r) : r;
}
const cv = (e) => (e instanceof Sn ? { ...e } : e);
function oi(e, r) {
  r = r || {};
  const a = {};
  function l(h, g, v, S) {
    return K.isPlainObject(h) && K.isPlainObject(g)
      ? K.merge.call({ caseless: S }, h, g)
      : K.isPlainObject(g)
      ? K.merge({}, g)
      : K.isArray(g)
      ? g.slice()
      : g;
  }
  function s(h, g, v, S) {
    if (K.isUndefined(g)) {
      if (!K.isUndefined(h)) return l(void 0, h, v, S);
    } else return l(h, g, v, S);
  }
  function u(h, g) {
    if (!K.isUndefined(g)) return l(void 0, g);
  }
  function f(h, g) {
    if (K.isUndefined(g)) {
      if (!K.isUndefined(h)) return l(void 0, h);
    } else return l(void 0, g);
  }
  function p(h, g, v) {
    if (v in r) return l(h, g);
    if (v in e) return l(void 0, h);
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
    validateStatus: p,
    headers: (h, g, v) => s(cv(h), cv(g), v, !0),
  };
  return (
    K.forEach(Object.keys(Object.assign({}, e, r)), function (g) {
      const v = m[g] || s,
        S = v(e[g], r[g], g);
      (K.isUndefined(S) && v !== p) || (a[g] = S);
    }),
    a
  );
}
const R1 = (e) => {
    const r = oi({}, e);
    let {
      data: a,
      withXSRFToken: l,
      xsrfHeaderName: s,
      xsrfCookieName: u,
      headers: f,
      auth: p,
    } = r;
    (r.headers = f = Sn.from(f)),
      (r.url = y1(E1(r.baseURL, r.url), e.params, e.paramsSerializer)),
      p &&
        f.set(
          "Authorization",
          "Basic " +
            btoa(
              (p.username || "") +
                ":" +
                (p.password ? unescape(encodeURIComponent(p.password)) : "")
            )
        );
    let m;
    if (K.isFormData(a)) {
      if (ln.hasStandardBrowserEnv || ln.hasStandardBrowserWebWorkerEnv)
        f.setContentType(void 0);
      else if ((m = f.getContentType()) !== !1) {
        const [h, ...g] = m
          ? m
              .split(";")
              .map((v) => v.trim())
              .filter(Boolean)
          : [];
        f.setContentType([h || "multipart/form-data", ...g].join("; "));
      }
    }
    if (
      ln.hasStandardBrowserEnv &&
      (l && K.isFunction(l) && (l = l(r)), l || (l !== !1 && bT(r.url)))
    ) {
      const h = s && u && ST.read(u);
      h && f.set(s, h);
    }
    return r;
  },
  RT = typeof XMLHttpRequest < "u",
  CT =
    RT &&
    function (e) {
      return new Promise(function (a, l) {
        const s = R1(e);
        let u = s.data;
        const f = Sn.from(s.headers).normalize();
        let { responseType: p, onUploadProgress: m, onDownloadProgress: h } = s,
          g,
          v,
          S,
          R,
          b;
        function x() {
          R && R(),
            b && b(),
            s.cancelToken && s.cancelToken.unsubscribe(g),
            s.signal && s.signal.removeEventListener("abort", g);
        }
        let T = new XMLHttpRequest();
        T.open(s.method.toUpperCase(), s.url, !0), (T.timeout = s.timeout);
        function _() {
          if (!T) return;
          const A = Sn.from(
              "getAllResponseHeaders" in T && T.getAllResponseHeaders()
            ),
            O = {
              data:
                !p || p === "text" || p === "json"
                  ? T.responseText
                  : T.response,
              status: T.status,
              statusText: T.statusText,
              headers: A,
              config: e,
              request: T,
            };
          x1(
            function (L) {
              a(L), x();
            },
            function (L) {
              l(L), x();
            },
            O
          ),
            (T = null);
        }
        "onloadend" in T
          ? (T.onloadend = _)
          : (T.onreadystatechange = function () {
              !T ||
                T.readyState !== 4 ||
                (T.status === 0 &&
                  !(T.responseURL && T.responseURL.indexOf("file:") === 0)) ||
                setTimeout(_);
            }),
          (T.onabort = function () {
            T &&
              (l(new ke("Request aborted", ke.ECONNABORTED, e, T)), (T = null));
          }),
          (T.onerror = function () {
            l(new ke("Network Error", ke.ERR_NETWORK, e, T)), (T = null);
          }),
          (T.ontimeout = function () {
            let D = s.timeout
              ? "timeout of " + s.timeout + "ms exceeded"
              : "timeout exceeded";
            const O = s.transitional || v1;
            s.timeoutErrorMessage && (D = s.timeoutErrorMessage),
              l(
                new ke(
                  D,
                  O.clarifyTimeoutError ? ke.ETIMEDOUT : ke.ECONNABORTED,
                  e,
                  T
                )
              ),
              (T = null);
          }),
          u === void 0 && f.setContentType(null),
          "setRequestHeader" in T &&
            K.forEach(f.toJSON(), function (D, O) {
              T.setRequestHeader(O, D);
            }),
          K.isUndefined(s.withCredentials) ||
            (T.withCredentials = !!s.withCredentials),
          p && p !== "json" && (T.responseType = s.responseType),
          h && (([S, b] = Gu(h, !0)), T.addEventListener("progress", S)),
          m &&
            T.upload &&
            (([v, R] = Gu(m)),
            T.upload.addEventListener("progress", v),
            T.upload.addEventListener("loadend", R)),
          (s.cancelToken || s.signal) &&
            ((g = (A) => {
              T &&
                (l(!A || A.type ? new gl(null, e, T) : A),
                T.abort(),
                (T = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(g),
            s.signal &&
              (s.signal.aborted ? g() : s.signal.addEventListener("abort", g)));
        const M = gT(s.url);
        if (M && ln.protocols.indexOf(M) === -1) {
          l(new ke("Unsupported protocol " + M + ":", ke.ERR_BAD_REQUEST, e));
          return;
        }
        T.send(u || null);
      });
    },
  wT = (e, r) => {
    const { length: a } = (e = e ? e.filter(Boolean) : []);
    if (r || a) {
      let l = new AbortController(),
        s;
      const u = function (h) {
        if (!s) {
          (s = !0), p();
          const g = h instanceof Error ? h : this.reason;
          l.abort(
            g instanceof ke ? g : new gl(g instanceof Error ? g.message : g)
          );
        }
      };
      let f =
        r &&
        setTimeout(() => {
          (f = null), u(new ke(`timeout ${r} of ms exceeded`, ke.ETIMEDOUT));
        }, r);
      const p = () => {
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
      const { signal: m } = l;
      return (m.unsubscribe = () => K.asap(p)), m;
    }
  },
  TT = function* (e, r) {
    let a = e.byteLength;
    if (a < r) {
      yield e;
      return;
    }
    let l = 0,
      s;
    for (; l < a; ) (s = l + r), yield e.slice(l, s), (l = s);
  },
  AT = async function* (e, r) {
    for await (const a of OT(e)) yield* TT(a, r);
  },
  OT = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const r = e.getReader();
    try {
      for (;;) {
        const { done: a, value: l } = await r.read();
        if (a) break;
        yield l;
      }
    } finally {
      await r.cancel();
    }
  },
  fv = (e, r, a, l) => {
    const s = AT(e, r);
    let u = 0,
      f,
      p = (m) => {
        f || ((f = !0), l && l(m));
      };
    return new ReadableStream(
      {
        async pull(m) {
          try {
            const { done: h, value: g } = await s.next();
            if (h) {
              p(), m.close();
              return;
            }
            let v = g.byteLength;
            if (a) {
              let S = (u += v);
              a(S);
            }
            m.enqueue(new Uint8Array(g));
          } catch (h) {
            throw (p(h), h);
          }
        },
        cancel(m) {
          return p(m), s.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  gc =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  C1 = gc && typeof ReadableStream == "function",
  _T =
    gc &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (r) =>
            e.encode(r)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  w1 = (e, ...r) => {
    try {
      return !!e(...r);
    } catch {
      return !1;
    }
  },
  MT =
    C1 &&
    w1(() => {
      let e = !1;
      const r = new Request(ln.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !r;
    }),
  dv = 64 * 1024,
  Np = C1 && w1(() => K.isReadableStream(new Response("").body)),
  Yu = { stream: Np && ((e) => e.body) };
gc &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((r) => {
      !Yu[r] &&
        (Yu[r] = K.isFunction(e[r])
          ? (a) => a[r]()
          : (a, l) => {
              throw new ke(
                `Response type '${r}' is not supported`,
                ke.ERR_NOT_SUPPORT,
                l
              );
            });
    });
  })(new Response());
const DT = async (e) => {
    if (e == null) return 0;
    if (K.isBlob(e)) return e.size;
    if (K.isSpecCompliantForm(e))
      return (
        await new Request(ln.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (K.isArrayBufferView(e) || K.isArrayBuffer(e)) return e.byteLength;
    if ((K.isURLSearchParams(e) && (e = e + ""), K.isString(e)))
      return (await _T(e)).byteLength;
  },
  zT = async (e, r) => {
    const a = K.toFiniteNumber(e.getContentLength());
    return a ?? DT(r);
  },
  NT =
    gc &&
    (async (e) => {
      let {
        url: r,
        method: a,
        data: l,
        signal: s,
        cancelToken: u,
        timeout: f,
        onDownloadProgress: p,
        onUploadProgress: m,
        responseType: h,
        headers: g,
        withCredentials: v = "same-origin",
        fetchOptions: S,
      } = R1(e);
      h = h ? (h + "").toLowerCase() : "text";
      let R = wT([s, u && u.toAbortSignal()], f),
        b;
      const x =
        R &&
        R.unsubscribe &&
        (() => {
          R.unsubscribe();
        });
      let T;
      try {
        if (
          m &&
          MT &&
          a !== "get" &&
          a !== "head" &&
          (T = await zT(g, l)) !== 0
        ) {
          let O = new Request(r, { method: "POST", body: l, duplex: "half" }),
            j;
          if (
            (K.isFormData(l) &&
              (j = O.headers.get("content-type")) &&
              g.setContentType(j),
            O.body)
          ) {
            const [L, re] = sv(T, Gu(uv(m)));
            l = fv(O.body, dv, L, re);
          }
        }
        K.isString(v) || (v = v ? "include" : "omit");
        const _ = "credentials" in Request.prototype;
        b = new Request(r, {
          ...S,
          signal: R,
          method: a.toUpperCase(),
          headers: g.normalize().toJSON(),
          body: l,
          duplex: "half",
          credentials: _ ? v : void 0,
        });
        let M = await fetch(b);
        const A = Np && (h === "stream" || h === "response");
        if (Np && (p || (A && x))) {
          const O = {};
          ["status", "statusText", "headers"].forEach((G) => {
            O[G] = M[G];
          });
          const j = K.toFiniteNumber(M.headers.get("content-length")),
            [L, re] = (p && sv(j, Gu(uv(p), !0))) || [];
          M = new Response(
            fv(M.body, dv, L, () => {
              re && re(), x && x();
            }),
            O
          );
        }
        h = h || "text";
        let D = await Yu[K.findKey(Yu, h) || "text"](M, e);
        return (
          !A && x && x(),
          await new Promise((O, j) => {
            x1(O, j, {
              data: D,
              headers: Sn.from(M.headers),
              status: M.status,
              statusText: M.statusText,
              config: e,
              request: b,
            });
          })
        );
      } catch (_) {
        throw (
          (x && x(),
          _ && _.name === "TypeError" && /fetch/i.test(_.message)
            ? Object.assign(new ke("Network Error", ke.ERR_NETWORK, e, b), {
                cause: _.cause || _,
              })
            : ke.from(_, _ && _.code, e, b))
        );
      }
    }),
  Bp = { http: Xw, xhr: CT, fetch: NT };
K.forEach(Bp, (e, r) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: r });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: r });
  }
});
const pv = (e) => `- ${e}`,
  BT = (e) => K.isFunction(e) || e === null || e === !1,
  T1 = {
    getAdapter: (e) => {
      e = K.isArray(e) ? e : [e];
      const { length: r } = e;
      let a, l;
      const s = {};
      for (let u = 0; u < r; u++) {
        a = e[u];
        let f;
        if (
          ((l = a),
          !BT(a) && ((l = Bp[(f = String(a)).toLowerCase()]), l === void 0))
        )
          throw new ke(`Unknown adapter '${f}'`);
        if (l) break;
        s[f || "#" + u] = l;
      }
      if (!l) {
        const u = Object.entries(s).map(
          ([p, m]) =>
            `adapter ${p} ` +
            (m === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let f = r
          ? u.length > 1
            ? `since :
` +
              u.map(pv).join(`
`)
            : " " + pv(u[0])
          : "as no adapter specified";
        throw new ke(
          "There is no suitable adapter to dispatch the request " + f,
          "ERR_NOT_SUPPORT"
        );
      }
      return l;
    },
    adapters: Bp,
  };
function op(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new gl(null, e);
}
function hv(e) {
  return (
    op(e),
    (e.headers = Sn.from(e.headers)),
    (e.data = lp.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    T1.getAdapter(e.adapter || Zo.adapter)(e).then(
      function (l) {
        return (
          op(e),
          (l.data = lp.call(e, e.transformResponse, l)),
          (l.headers = Sn.from(l.headers)),
          l
        );
      },
      function (l) {
        return (
          S1(l) ||
            (op(e),
            l &&
              l.response &&
              ((l.response.data = lp.call(e, e.transformResponse, l.response)),
              (l.response.headers = Sn.from(l.response.headers)))),
          Promise.reject(l)
        );
      }
    )
  );
}
const A1 = "1.7.9",
  yc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, r) => {
    yc[e] = function (l) {
      return typeof l === e || "a" + (r < 1 ? "n " : " ") + e;
    };
  }
);
const mv = {};
yc.transitional = function (r, a, l) {
  function s(u, f) {
    return (
      "[Axios v" +
      A1 +
      "] Transitional option '" +
      u +
      "'" +
      f +
      (l ? ". " + l : "")
    );
  }
  return (u, f, p) => {
    if (r === !1)
      throw new ke(
        s(f, " has been removed" + (a ? " in " + a : "")),
        ke.ERR_DEPRECATED
      );
    return (
      a &&
        !mv[f] &&
        ((mv[f] = !0),
        console.warn(
          s(
            f,
            " has been deprecated since v" +
              a +
              " and will be removed in the near future"
          )
        )),
      r ? r(u, f, p) : !0
    );
  };
};
yc.spelling = function (r) {
  return (a, l) => (console.warn(`${l} is likely a misspelling of ${r}`), !0);
};
function kT(e, r, a) {
  if (typeof e != "object")
    throw new ke("options must be an object", ke.ERR_BAD_OPTION_VALUE);
  const l = Object.keys(e);
  let s = l.length;
  for (; s-- > 0; ) {
    const u = l[s],
      f = r[u];
    if (f) {
      const p = e[u],
        m = p === void 0 || f(p, u, e);
      if (m !== !0)
        throw new ke("option " + u + " must be " + m, ke.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (a !== !0) throw new ke("Unknown option " + u, ke.ERR_BAD_OPTION);
  }
}
const Nu = { assertOptions: kT, validators: yc },
  pr = Nu.validators;
let ai = class {
  constructor(r) {
    (this.defaults = r),
      (this.interceptors = { request: new lv(), response: new lv() });
  }
  async request(r, a) {
    try {
      return await this._request(r, a);
    } catch (l) {
      if (l instanceof Error) {
        let s = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(s)
          : (s = new Error());
        const u = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          l.stack
            ? u &&
              !String(l.stack).endsWith(u.replace(/^.+\n.+\n/, "")) &&
              (l.stack +=
                `
` + u)
            : (l.stack = u);
        } catch {}
      }
      throw l;
    }
  }
  _request(r, a) {
    typeof r == "string" ? ((a = a || {}), (a.url = r)) : (a = r || {}),
      (a = oi(this.defaults, a));
    const { transitional: l, paramsSerializer: s, headers: u } = a;
    l !== void 0 &&
      Nu.assertOptions(
        l,
        {
          silentJSONParsing: pr.transitional(pr.boolean),
          forcedJSONParsing: pr.transitional(pr.boolean),
          clarifyTimeoutError: pr.transitional(pr.boolean),
        },
        !1
      ),
      s != null &&
        (K.isFunction(s)
          ? (a.paramsSerializer = { serialize: s })
          : Nu.assertOptions(
              s,
              { encode: pr.function, serialize: pr.function },
              !0
            )),
      Nu.assertOptions(
        a,
        {
          baseUrl: pr.spelling("baseURL"),
          withXsrfToken: pr.spelling("withXSRFToken"),
        },
        !0
      ),
      (a.method = (a.method || this.defaults.method || "get").toLowerCase());
    let f = u && K.merge(u.common, u[a.method]);
    u &&
      K.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (b) => {
          delete u[b];
        }
      ),
      (a.headers = Sn.concat(f, u));
    const p = [];
    let m = !0;
    this.interceptors.request.forEach(function (x) {
      (typeof x.runWhen == "function" && x.runWhen(a) === !1) ||
        ((m = m && x.synchronous), p.unshift(x.fulfilled, x.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function (x) {
      h.push(x.fulfilled, x.rejected);
    });
    let g,
      v = 0,
      S;
    if (!m) {
      const b = [hv.bind(this), void 0];
      for (
        b.unshift.apply(b, p),
          b.push.apply(b, h),
          S = b.length,
          g = Promise.resolve(a);
        v < S;

      )
        g = g.then(b[v++], b[v++]);
      return g;
    }
    S = p.length;
    let R = a;
    for (v = 0; v < S; ) {
      const b = p[v++],
        x = p[v++];
      try {
        R = b(R);
      } catch (T) {
        x.call(this, T);
        break;
      }
    }
    try {
      g = hv.call(this, R);
    } catch (b) {
      return Promise.reject(b);
    }
    for (v = 0, S = h.length; v < S; ) g = g.then(h[v++], h[v++]);
    return g;
  }
  getUri(r) {
    r = oi(this.defaults, r);
    const a = E1(r.baseURL, r.url);
    return y1(a, r.params, r.paramsSerializer);
  }
};
K.forEach(["delete", "get", "head", "options"], function (r) {
  ai.prototype[r] = function (a, l) {
    return this.request(
      oi(l || {}, { method: r, url: a, data: (l || {}).data })
    );
  };
});
K.forEach(["post", "put", "patch"], function (r) {
  function a(l) {
    return function (u, f, p) {
      return this.request(
        oi(p || {}, {
          method: r,
          headers: l ? { "Content-Type": "multipart/form-data" } : {},
          url: u,
          data: f,
        })
      );
    };
  }
  (ai.prototype[r] = a()), (ai.prototype[r + "Form"] = a(!0));
});
let UT = class O1 {
  constructor(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    let a;
    this.promise = new Promise(function (u) {
      a = u;
    });
    const l = this;
    this.promise.then((s) => {
      if (!l._listeners) return;
      let u = l._listeners.length;
      for (; u-- > 0; ) l._listeners[u](s);
      l._listeners = null;
    }),
      (this.promise.then = (s) => {
        let u;
        const f = new Promise((p) => {
          l.subscribe(p), (u = p);
        }).then(s);
        return (
          (f.cancel = function () {
            l.unsubscribe(u);
          }),
          f
        );
      }),
      r(function (u, f, p) {
        l.reason || ((l.reason = new gl(u, f, p)), a(l.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(r) {
    if (this.reason) {
      r(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(r) : (this._listeners = [r]);
  }
  unsubscribe(r) {
    if (!this._listeners) return;
    const a = this._listeners.indexOf(r);
    a !== -1 && this._listeners.splice(a, 1);
  }
  toAbortSignal() {
    const r = new AbortController(),
      a = (l) => {
        r.abort(l);
      };
    return (
      this.subscribe(a),
      (r.signal.unsubscribe = () => this.unsubscribe(a)),
      r.signal
    );
  }
  static source() {
    let r;
    return {
      token: new O1(function (s) {
        r = s;
      }),
      cancel: r,
    };
  }
};
function LT(e) {
  return function (a) {
    return e.apply(null, a);
  };
}
function $T(e) {
  return K.isObject(e) && e.isAxiosError === !0;
}
const kp = {
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
Object.entries(kp).forEach(([e, r]) => {
  kp[r] = e;
});
function _1(e) {
  const r = new ai(e),
    a = i1(ai.prototype.request, r);
  return (
    K.extend(a, ai.prototype, r, { allOwnKeys: !0 }),
    K.extend(a, r, null, { allOwnKeys: !0 }),
    (a.create = function (s) {
      return _1(oi(e, s));
    }),
    a
  );
}
const zt = _1(Zo);
zt.Axios = ai;
zt.CanceledError = gl;
zt.CancelToken = UT;
zt.isCancel = S1;
zt.VERSION = A1;
zt.toFormData = mc;
zt.AxiosError = ke;
zt.Cancel = zt.CanceledError;
zt.all = function (r) {
  return Promise.all(r);
};
zt.spread = LT;
zt.isAxiosError = $T;
zt.mergeConfig = oi;
zt.AxiosHeaders = Sn;
zt.formToJSON = (e) => b1(K.isHTMLForm(e) ? new FormData(e) : e);
zt.getAdapter = T1.getAdapter;
zt.HttpStatusCode = kp;
zt.default = zt;
const {
    Axios: RD,
    AxiosError: CD,
    CanceledError: wD,
    isCancel: TD,
    CancelToken: AD,
    VERSION: OD,
    all: _D,
    Cancel: MD,
    isAxiosError: DD,
    spread: zD,
    toFormData: ND,
    AxiosHeaders: BD,
    HttpStatusCode: kD,
    formToJSON: UD,
    getAdapter: LD,
    mergeConfig: $D,
  } = zt,
  jT = "https://tryga1rbre.execute-api.eu-west-2.amazonaws.com/prod/api/",
  M1 = zt.create({ baseURL: jT, withCredentials: !0 }),
  Vo = { black: "#000", white: "#fff" },
  Gi = {
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    700: "#d32f2f",
    800: "#c62828",
  },
  Yi = {
    50: "#f3e5f5",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    700: "#7b1fa2",
  },
  Ii = {
    50: "#e3f2fd",
    200: "#90caf9",
    400: "#42a5f5",
    700: "#1976d2",
    800: "#1565c0",
  },
  Xi = {
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    700: "#0288d1",
    900: "#01579b",
  },
  Ki = {
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
  },
  Ro = {
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    700: "#f57c00",
    900: "#e65100",
  },
  HT = {
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
function Kr(e, ...r) {
  const a = new URL(`https://mui.com/production-error/?code=${e}`);
  return (
    r.forEach((l) => a.searchParams.append("args[]", l)),
    `Minified MUI error #${e}; visit ${a} for the full message.`
  );
}
const vc = "$$material";
function Iu() {
  return (
    (Iu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var r = 1; r < arguments.length; r++) {
            var a = arguments[r];
            for (var l in a) ({}).hasOwnProperty.call(a, l) && (e[l] = a[l]);
          }
          return e;
        }),
    Iu.apply(null, arguments)
  );
}
function PT(e) {
  if (e.sheet) return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e) return document.styleSheets[r];
}
function qT(e) {
  var r = document.createElement("style");
  return (
    r.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && r.setAttribute("nonce", e.nonce),
    r.appendChild(document.createTextNode("")),
    r.setAttribute("data-s", ""),
    r
  );
}
var VT = (function () {
    function e(a) {
      var l = this;
      (this._insertTag = function (s) {
        var u;
        l.tags.length === 0
          ? l.insertionPoint
            ? (u = l.insertionPoint.nextSibling)
            : l.prepend
            ? (u = l.container.firstChild)
            : (u = l.before)
          : (u = l.tags[l.tags.length - 1].nextSibling),
          l.container.insertBefore(s, u),
          l.tags.push(s);
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
    var r = e.prototype;
    return (
      (r.hydrate = function (l) {
        l.forEach(this._insertTag);
      }),
      (r.insert = function (l) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(qT(this));
        var s = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var u = PT(s);
          try {
            u.insertRule(l, u.cssRules.length);
          } catch {}
        } else s.appendChild(document.createTextNode(l));
        this.ctr++;
      }),
      (r.flush = function () {
        this.tags.forEach(function (l) {
          var s;
          return (s = l.parentNode) == null ? void 0 : s.removeChild(l);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  an = "-ms-",
  Xu = "-moz-",
  Qe = "-webkit-",
  D1 = "comm",
  Sh = "rule",
  xh = "decl",
  FT = "@import",
  z1 = "@keyframes",
  GT = "@layer",
  YT = Math.abs,
  bc = String.fromCharCode,
  IT = Object.assign;
function XT(e, r) {
  return en(e, 0) ^ 45
    ? (((((((r << 2) ^ en(e, 0)) << 2) ^ en(e, 1)) << 2) ^ en(e, 2)) << 2) ^
        en(e, 3)
    : 0;
}
function N1(e) {
  return e.trim();
}
function KT(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function We(e, r, a) {
  return e.replace(r, a);
}
function Up(e, r) {
  return e.indexOf(r);
}
function en(e, r) {
  return e.charCodeAt(r) | 0;
}
function Fo(e, r, a) {
  return e.slice(r, a);
}
function gr(e) {
  return e.length;
}
function Eh(e) {
  return e.length;
}
function Su(e, r) {
  return r.push(e), e;
}
function QT(e, r) {
  return e.map(r).join("");
}
var Sc = 1,
  al = 1,
  B1 = 0,
  xn = 0,
  jt = 0,
  yl = "";
function xc(e, r, a, l, s, u, f) {
  return {
    value: e,
    root: r,
    parent: a,
    type: l,
    props: s,
    children: u,
    line: Sc,
    column: al,
    length: f,
    return: "",
  };
}
function Co(e, r) {
  return IT(xc("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function WT() {
  return jt;
}
function ZT() {
  return (
    (jt = xn > 0 ? en(yl, --xn) : 0), al--, jt === 10 && ((al = 1), Sc--), jt
  );
}
function Mn() {
  return (
    (jt = xn < B1 ? en(yl, xn++) : 0), al++, jt === 10 && ((al = 1), Sc++), jt
  );
}
function Rr() {
  return en(yl, xn);
}
function Bu() {
  return xn;
}
function Jo(e, r) {
  return Fo(yl, e, r);
}
function Go(e) {
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
function k1(e) {
  return (Sc = al = 1), (B1 = gr((yl = e))), (xn = 0), [];
}
function U1(e) {
  return (yl = ""), e;
}
function ku(e) {
  return N1(Jo(xn - 1, Lp(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function JT(e) {
  for (; (jt = Rr()) && jt < 33; ) Mn();
  return Go(e) > 2 || Go(jt) > 3 ? "" : " ";
}
function eA(e, r) {
  for (
    ;
    --r &&
    Mn() &&
    !(jt < 48 || jt > 102 || (jt > 57 && jt < 65) || (jt > 70 && jt < 97));

  );
  return Jo(e, Bu() + (r < 6 && Rr() == 32 && Mn() == 32));
}
function Lp(e) {
  for (; Mn(); )
    switch (jt) {
      case e:
        return xn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Lp(jt);
        break;
      case 40:
        e === 41 && Lp(e);
        break;
      case 92:
        Mn();
        break;
    }
  return xn;
}
function tA(e, r) {
  for (; Mn() && e + jt !== 57; ) if (e + jt === 84 && Rr() === 47) break;
  return "/*" + Jo(r, xn - 1) + "*" + bc(e === 47 ? e : Mn());
}
function nA(e) {
  for (; !Go(Rr()); ) Mn();
  return Jo(e, xn);
}
function rA(e) {
  return U1(Uu("", null, null, null, [""], (e = k1(e)), 0, [0], e));
}
function Uu(e, r, a, l, s, u, f, p, m) {
  for (
    var h = 0,
      g = 0,
      v = f,
      S = 0,
      R = 0,
      b = 0,
      x = 1,
      T = 1,
      _ = 1,
      M = 0,
      A = "",
      D = s,
      O = u,
      j = l,
      L = A;
    T;

  )
    switch (((b = M), (M = Mn()))) {
      case 40:
        if (b != 108 && en(L, v - 1) == 58) {
          Up((L += We(ku(M), "&", "&\f")), "&\f") != -1 && (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        L += ku(M);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        L += JT(b);
        break;
      case 92:
        L += eA(Bu() - 1, 7);
        continue;
      case 47:
        switch (Rr()) {
          case 42:
          case 47:
            Su(aA(tA(Mn(), Bu()), r, a), m);
            break;
          default:
            L += "/";
        }
        break;
      case 123 * x:
        p[h++] = gr(L) * _;
      case 125 * x:
      case 59:
      case 0:
        switch (M) {
          case 0:
          case 125:
            T = 0;
          case 59 + g:
            _ == -1 && (L = We(L, /\f/g, "")),
              R > 0 &&
                gr(L) - v &&
                Su(
                  R > 32
                    ? yv(L + ";", l, a, v - 1)
                    : yv(We(L, " ", "") + ";", l, a, v - 2),
                  m
                );
            break;
          case 59:
            L += ";";
          default:
            if (
              (Su((j = gv(L, r, a, h, g, s, p, A, (D = []), (O = []), v)), u),
              M === 123)
            )
              if (g === 0) Uu(L, r, j, j, D, u, v, p, O);
              else
                switch (S === 99 && en(L, 3) === 110 ? 100 : S) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Uu(
                      e,
                      j,
                      j,
                      l && Su(gv(e, j, j, 0, 0, s, p, A, s, (D = []), v), O),
                      s,
                      O,
                      v,
                      p,
                      l ? D : O
                    );
                    break;
                  default:
                    Uu(L, j, j, j, [""], O, 0, p, O);
                }
        }
        (h = g = R = 0), (x = _ = 1), (A = L = ""), (v = f);
        break;
      case 58:
        (v = 1 + gr(L)), (R = b);
      default:
        if (x < 1) {
          if (M == 123) --x;
          else if (M == 125 && x++ == 0 && ZT() == 125) continue;
        }
        switch (((L += bc(M)), M * x)) {
          case 38:
            _ = g > 0 ? 1 : ((L += "\f"), -1);
            break;
          case 44:
            (p[h++] = (gr(L) - 1) * _), (_ = 1);
            break;
          case 64:
            Rr() === 45 && (L += ku(Mn())),
              (S = Rr()),
              (g = v = gr((A = L += nA(Bu())))),
              M++;
            break;
          case 45:
            b === 45 && gr(L) == 2 && (x = 0);
        }
    }
  return u;
}
function gv(e, r, a, l, s, u, f, p, m, h, g) {
  for (
    var v = s - 1, S = s === 0 ? u : [""], R = Eh(S), b = 0, x = 0, T = 0;
    b < l;
    ++b
  )
    for (var _ = 0, M = Fo(e, v + 1, (v = YT((x = f[b])))), A = e; _ < R; ++_)
      (A = N1(x > 0 ? S[_] + " " + M : We(M, /&\f/g, S[_]))) && (m[T++] = A);
  return xc(e, r, a, s === 0 ? Sh : p, m, h, g);
}
function aA(e, r, a) {
  return xc(e, r, a, D1, bc(WT()), Fo(e, 2, -2), 0);
}
function yv(e, r, a, l) {
  return xc(e, r, a, xh, Fo(e, 0, l), Fo(e, l + 1, -1), l);
}
function tl(e, r) {
  for (var a = "", l = Eh(e), s = 0; s < l; s++) a += r(e[s], s, e, r) || "";
  return a;
}
function iA(e, r, a, l) {
  switch (e.type) {
    case GT:
      if (e.children.length) break;
    case FT:
    case xh:
      return (e.return = e.return || e.value);
    case D1:
      return "";
    case z1:
      return (e.return = e.value + "{" + tl(e.children, l) + "}");
    case Sh:
      e.value = e.props.join(",");
  }
  return gr((a = tl(e.children, l)))
    ? (e.return = e.value + "{" + a + "}")
    : "";
}
function lA(e) {
  var r = Eh(e);
  return function (a, l, s, u) {
    for (var f = "", p = 0; p < r; p++) f += e[p](a, l, s, u) || "";
    return f;
  };
}
function oA(e) {
  return function (r) {
    r.root || ((r = r.return) && e(r));
  };
}
function L1(e) {
  var r = Object.create(null);
  return function (a) {
    return r[a] === void 0 && (r[a] = e(a)), r[a];
  };
}
var sA = function (r, a, l) {
    for (
      var s = 0, u = 0;
      (s = u), (u = Rr()), s === 38 && u === 12 && (a[l] = 1), !Go(u);

    )
      Mn();
    return Jo(r, xn);
  },
  uA = function (r, a) {
    var l = -1,
      s = 44;
    do
      switch (Go(s)) {
        case 0:
          s === 38 && Rr() === 12 && (a[l] = 1), (r[l] += sA(xn - 1, a, l));
          break;
        case 2:
          r[l] += ku(s);
          break;
        case 4:
          if (s === 44) {
            (r[++l] = Rr() === 58 ? "&\f" : ""), (a[l] = r[l].length);
            break;
          }
        default:
          r[l] += bc(s);
      }
    while ((s = Mn()));
    return r;
  },
  cA = function (r, a) {
    return U1(uA(k1(r), a));
  },
  vv = new WeakMap(),
  fA = function (r) {
    if (!(r.type !== "rule" || !r.parent || r.length < 1)) {
      for (
        var a = r.value,
          l = r.parent,
          s = r.column === l.column && r.line === l.line;
        l.type !== "rule";

      )
        if (((l = l.parent), !l)) return;
      if (
        !(r.props.length === 1 && a.charCodeAt(0) !== 58 && !vv.get(l)) &&
        !s
      ) {
        vv.set(r, !0);
        for (
          var u = [], f = cA(a, u), p = l.props, m = 0, h = 0;
          m < f.length;
          m++
        )
          for (var g = 0; g < p.length; g++, h++)
            r.props[h] = u[m] ? f[m].replace(/&\f/g, p[g]) : p[g] + " " + f[m];
      }
    }
  },
  dA = function (r) {
    if (r.type === "decl") {
      var a = r.value;
      a.charCodeAt(0) === 108 &&
        a.charCodeAt(2) === 98 &&
        ((r.return = ""), (r.value = ""));
    }
  };
function $1(e, r) {
  switch (XT(e, r)) {
    case 5103:
      return Qe + "print-" + e + e;
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
      return Qe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Qe + e + Xu + e + an + e + e;
    case 6828:
    case 4268:
      return Qe + e + an + e + e;
    case 6165:
      return Qe + e + an + "flex-" + e + e;
    case 5187:
      return (
        Qe + e + We(e, /(\w+).+(:[^]+)/, Qe + "box-$1$2" + an + "flex-$1$2") + e
      );
    case 5443:
      return Qe + e + an + "flex-item-" + We(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        Qe +
        e +
        an +
        "flex-line-pack" +
        We(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return Qe + e + an + We(e, "shrink", "negative") + e;
    case 5292:
      return Qe + e + an + We(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        Qe +
        "box-" +
        We(e, "-grow", "") +
        Qe +
        e +
        an +
        We(e, "grow", "positive") +
        e
      );
    case 4554:
      return Qe + We(e, /([^-])(transform)/g, "$1" + Qe + "$2") + e;
    case 6187:
      return (
        We(
          We(We(e, /(zoom-|grab)/, Qe + "$1"), /(image-set)/, Qe + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return We(e, /(image-set\([^]*)/, Qe + "$1$`$1");
    case 4968:
      return (
        We(
          We(e, /(.+:)(flex-)?(.*)/, Qe + "box-pack:$3" + an + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        Qe +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return We(e, /(.+)-inline(.+)/, Qe + "$1$2") + e;
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
      if (gr(e) - 1 - r > 6)
        switch (en(e, r + 1)) {
          case 109:
            if (en(e, r + 4) !== 45) break;
          case 102:
            return (
              We(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Qe +
                  "$2-$3$1" +
                  Xu +
                  (en(e, r + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Up(e, "stretch")
              ? $1(We(e, "stretch", "fill-available"), r) + e
              : e;
        }
      break;
    case 4949:
      if (en(e, r + 1) !== 115) break;
    case 6444:
      switch (en(e, gr(e) - 3 - (~Up(e, "!important") && 10))) {
        case 107:
          return We(e, ":", ":" + Qe) + e;
        case 101:
          return (
            We(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Qe +
                (en(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Qe +
                "$2$3$1" +
                an +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (en(e, r + 11)) {
        case 114:
          return Qe + e + an + We(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Qe + e + an + We(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Qe + e + an + We(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Qe + e + an + e + e;
  }
  return e;
}
var pA = function (r, a, l, s) {
    if (r.length > -1 && !r.return)
      switch (r.type) {
        case xh:
          r.return = $1(r.value, r.length);
          break;
        case z1:
          return tl([Co(r, { value: We(r.value, "@", "@" + Qe) })], s);
        case Sh:
          if (r.length)
            return QT(r.props, function (u) {
              switch (KT(u, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return tl(
                    [Co(r, { props: [We(u, /:(read-\w+)/, ":" + Xu + "$1")] })],
                    s
                  );
                case "::placeholder":
                  return tl(
                    [
                      Co(r, {
                        props: [We(u, /:(plac\w+)/, ":" + Qe + "input-$1")],
                      }),
                      Co(r, { props: [We(u, /:(plac\w+)/, ":" + Xu + "$1")] }),
                      Co(r, { props: [We(u, /:(plac\w+)/, an + "input-$1")] }),
                    ],
                    s
                  );
              }
              return "";
            });
      }
  },
  hA = [pA],
  mA = function (r) {
    var a = r.key;
    if (a === "css") {
      var l = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(l, function (x) {
        var T = x.getAttribute("data-emotion");
        T.indexOf(" ") !== -1 &&
          (document.head.appendChild(x), x.setAttribute("data-s", ""));
      });
    }
    var s = r.stylisPlugins || hA,
      u = {},
      f,
      p = [];
    (f = r.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + a + ' "]'),
        function (x) {
          for (
            var T = x.getAttribute("data-emotion").split(" "), _ = 1;
            _ < T.length;
            _++
          )
            u[T[_]] = !0;
          p.push(x);
        }
      );
    var m,
      h = [fA, dA];
    {
      var g,
        v = [
          iA,
          oA(function (x) {
            g.insert(x);
          }),
        ],
        S = lA(h.concat(s, v)),
        R = function (T) {
          return tl(rA(T), S);
        };
      m = function (T, _, M, A) {
        (g = M),
          R(T ? T + "{" + _.styles + "}" : _.styles),
          A && (b.inserted[_.name] = !0);
      };
    }
    var b = {
      key: a,
      sheet: new VT({
        key: a,
        container: f,
        nonce: r.nonce,
        speedy: r.speedy,
        prepend: r.prepend,
        insertionPoint: r.insertionPoint,
      }),
      nonce: r.nonce,
      inserted: u,
      registered: {},
      insert: m,
    };
    return b.sheet.hydrate(p), b;
  },
  sp = { exports: {} },
  et = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bv;
function gA() {
  if (bv) return et;
  bv = 1;
  var e = typeof Symbol == "function" && Symbol.for,
    r = e ? Symbol.for("react.element") : 60103,
    a = e ? Symbol.for("react.portal") : 60106,
    l = e ? Symbol.for("react.fragment") : 60107,
    s = e ? Symbol.for("react.strict_mode") : 60108,
    u = e ? Symbol.for("react.profiler") : 60114,
    f = e ? Symbol.for("react.provider") : 60109,
    p = e ? Symbol.for("react.context") : 60110,
    m = e ? Symbol.for("react.async_mode") : 60111,
    h = e ? Symbol.for("react.concurrent_mode") : 60111,
    g = e ? Symbol.for("react.forward_ref") : 60112,
    v = e ? Symbol.for("react.suspense") : 60113,
    S = e ? Symbol.for("react.suspense_list") : 60120,
    R = e ? Symbol.for("react.memo") : 60115,
    b = e ? Symbol.for("react.lazy") : 60116,
    x = e ? Symbol.for("react.block") : 60121,
    T = e ? Symbol.for("react.fundamental") : 60117,
    _ = e ? Symbol.for("react.responder") : 60118,
    M = e ? Symbol.for("react.scope") : 60119;
  function A(O) {
    if (typeof O == "object" && O !== null) {
      var j = O.$$typeof;
      switch (j) {
        case r:
          switch (((O = O.type), O)) {
            case m:
            case h:
            case l:
            case u:
            case s:
            case v:
              return O;
            default:
              switch (((O = O && O.$$typeof), O)) {
                case p:
                case g:
                case b:
                case R:
                case f:
                  return O;
                default:
                  return j;
              }
          }
        case a:
          return j;
      }
    }
  }
  function D(O) {
    return A(O) === h;
  }
  return (
    (et.AsyncMode = m),
    (et.ConcurrentMode = h),
    (et.ContextConsumer = p),
    (et.ContextProvider = f),
    (et.Element = r),
    (et.ForwardRef = g),
    (et.Fragment = l),
    (et.Lazy = b),
    (et.Memo = R),
    (et.Portal = a),
    (et.Profiler = u),
    (et.StrictMode = s),
    (et.Suspense = v),
    (et.isAsyncMode = function (O) {
      return D(O) || A(O) === m;
    }),
    (et.isConcurrentMode = D),
    (et.isContextConsumer = function (O) {
      return A(O) === p;
    }),
    (et.isContextProvider = function (O) {
      return A(O) === f;
    }),
    (et.isElement = function (O) {
      return typeof O == "object" && O !== null && O.$$typeof === r;
    }),
    (et.isForwardRef = function (O) {
      return A(O) === g;
    }),
    (et.isFragment = function (O) {
      return A(O) === l;
    }),
    (et.isLazy = function (O) {
      return A(O) === b;
    }),
    (et.isMemo = function (O) {
      return A(O) === R;
    }),
    (et.isPortal = function (O) {
      return A(O) === a;
    }),
    (et.isProfiler = function (O) {
      return A(O) === u;
    }),
    (et.isStrictMode = function (O) {
      return A(O) === s;
    }),
    (et.isSuspense = function (O) {
      return A(O) === v;
    }),
    (et.isValidElementType = function (O) {
      return (
        typeof O == "string" ||
        typeof O == "function" ||
        O === l ||
        O === h ||
        O === u ||
        O === s ||
        O === v ||
        O === S ||
        (typeof O == "object" &&
          O !== null &&
          (O.$$typeof === b ||
            O.$$typeof === R ||
            O.$$typeof === f ||
            O.$$typeof === p ||
            O.$$typeof === g ||
            O.$$typeof === T ||
            O.$$typeof === _ ||
            O.$$typeof === M ||
            O.$$typeof === x))
      );
    }),
    (et.typeOf = A),
    et
  );
}
var Sv;
function yA() {
  return Sv || ((Sv = 1), (sp.exports = gA())), sp.exports;
}
var up, xv;
function vA() {
  if (xv) return up;
  xv = 1;
  var e = yA(),
    r = {
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
    l = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    s = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    u = {};
  (u[e.ForwardRef] = l), (u[e.Memo] = s);
  function f(b) {
    return e.isMemo(b) ? s : u[b.$$typeof] || r;
  }
  var p = Object.defineProperty,
    m = Object.getOwnPropertyNames,
    h = Object.getOwnPropertySymbols,
    g = Object.getOwnPropertyDescriptor,
    v = Object.getPrototypeOf,
    S = Object.prototype;
  function R(b, x, T) {
    if (typeof x != "string") {
      if (S) {
        var _ = v(x);
        _ && _ !== S && R(b, _, T);
      }
      var M = m(x);
      h && (M = M.concat(h(x)));
      for (var A = f(b), D = f(x), O = 0; O < M.length; ++O) {
        var j = M[O];
        if (!a[j] && !(T && T[j]) && !(D && D[j]) && !(A && A[j])) {
          var L = g(x, j);
          try {
            p(b, j, L);
          } catch {}
        }
      }
    }
    return b;
  }
  return (up = R), up;
}
vA();
var bA = !0;
function j1(e, r, a) {
  var l = "";
  return (
    a.split(" ").forEach(function (s) {
      e[s] !== void 0 ? r.push(e[s] + ";") : s && (l += s + " ");
    }),
    l
  );
}
var Rh = function (r, a, l) {
    var s = r.key + "-" + a.name;
    (l === !1 || bA === !1) &&
      r.registered[s] === void 0 &&
      (r.registered[s] = a.styles);
  },
  Ch = function (r, a, l) {
    Rh(r, a, l);
    var s = r.key + "-" + a.name;
    if (r.inserted[a.name] === void 0) {
      var u = a;
      do r.insert(a === u ? "." + s : "", u, r.sheet, !0), (u = u.next);
      while (u !== void 0);
    }
  };
function SA(e) {
  for (var r = 0, a, l = 0, s = e.length; s >= 4; ++l, s -= 4)
    (a =
      (e.charCodeAt(l) & 255) |
      ((e.charCodeAt(++l) & 255) << 8) |
      ((e.charCodeAt(++l) & 255) << 16) |
      ((e.charCodeAt(++l) & 255) << 24)),
      (a = (a & 65535) * 1540483477 + (((a >>> 16) * 59797) << 16)),
      (a ^= a >>> 24),
      (r =
        ((a & 65535) * 1540483477 + (((a >>> 16) * 59797) << 16)) ^
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)));
  switch (s) {
    case 3:
      r ^= (e.charCodeAt(l + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(l + 1) & 255) << 8;
    case 1:
      (r ^= e.charCodeAt(l) & 255),
        (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16));
  }
  return (
    (r ^= r >>> 13),
    (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
    ((r ^ (r >>> 15)) >>> 0).toString(36)
  );
}
var xA = {
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
  EA = /[A-Z]|^ms/g,
  RA = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  H1 = function (r) {
    return r.charCodeAt(1) === 45;
  },
  Ev = function (r) {
    return r != null && typeof r != "boolean";
  },
  cp = L1(function (e) {
    return H1(e) ? e : e.replace(EA, "-$&").toLowerCase();
  }),
  Rv = function (r, a) {
    switch (r) {
      case "animation":
      case "animationName":
        if (typeof a == "string")
          return a.replace(RA, function (l, s, u) {
            return (yr = { name: s, styles: u, next: yr }), s;
          });
    }
    return xA[r] !== 1 && !H1(r) && typeof a == "number" && a !== 0
      ? a + "px"
      : a;
  };
function Yo(e, r, a) {
  if (a == null) return "";
  var l = a;
  if (l.__emotion_styles !== void 0) return l;
  switch (typeof a) {
    case "boolean":
      return "";
    case "object": {
      var s = a;
      if (s.anim === 1)
        return (yr = { name: s.name, styles: s.styles, next: yr }), s.name;
      var u = a;
      if (u.styles !== void 0) {
        var f = u.next;
        if (f !== void 0)
          for (; f !== void 0; )
            (yr = { name: f.name, styles: f.styles, next: yr }), (f = f.next);
        var p = u.styles + ";";
        return p;
      }
      return CA(e, r, a);
    }
    case "function": {
      if (e !== void 0) {
        var m = yr,
          h = a(e);
        return (yr = m), Yo(e, r, h);
      }
      break;
    }
  }
  var g = a;
  if (r == null) return g;
  var v = r[g];
  return v !== void 0 ? v : g;
}
function CA(e, r, a) {
  var l = "";
  if (Array.isArray(a))
    for (var s = 0; s < a.length; s++) l += Yo(e, r, a[s]) + ";";
  else
    for (var u in a) {
      var f = a[u];
      if (typeof f != "object") {
        var p = f;
        r != null && r[p] !== void 0
          ? (l += u + "{" + r[p] + "}")
          : Ev(p) && (l += cp(u) + ":" + Rv(u, p) + ";");
      } else if (
        Array.isArray(f) &&
        typeof f[0] == "string" &&
        (r == null || r[f[0]] === void 0)
      )
        for (var m = 0; m < f.length; m++)
          Ev(f[m]) && (l += cp(u) + ":" + Rv(u, f[m]) + ";");
      else {
        var h = Yo(e, r, f);
        switch (u) {
          case "animation":
          case "animationName": {
            l += cp(u) + ":" + h + ";";
            break;
          }
          default:
            l += u + "{" + h + "}";
        }
      }
    }
  return l;
}
var Cv = /label:\s*([^\s;{]+)\s*(;|$)/g,
  yr;
function es(e, r, a) {
  if (
    e.length === 1 &&
    typeof e[0] == "object" &&
    e[0] !== null &&
    e[0].styles !== void 0
  )
    return e[0];
  var l = !0,
    s = "";
  yr = void 0;
  var u = e[0];
  if (u == null || u.raw === void 0) (l = !1), (s += Yo(a, r, u));
  else {
    var f = u;
    s += f[0];
  }
  for (var p = 1; p < e.length; p++)
    if (((s += Yo(a, r, e[p])), l)) {
      var m = u;
      s += m[p];
    }
  Cv.lastIndex = 0;
  for (var h = "", g; (g = Cv.exec(s)) !== null; ) h += "-" + g[1];
  var v = SA(s) + h;
  return { name: v, styles: s, next: yr };
}
var wA = function (r) {
    return r();
  },
  P1 = Ap.useInsertionEffect ? Ap.useInsertionEffect : !1,
  q1 = P1 || wA,
  wv = P1 || C.useLayoutEffect,
  V1 = C.createContext(typeof HTMLElement < "u" ? mA({ key: "css" }) : null);
V1.Provider;
var wh = function (r) {
    return C.forwardRef(function (a, l) {
      var s = C.useContext(V1);
      return r(a, s, l);
    });
  },
  Ec = C.createContext({}),
  Th = {}.hasOwnProperty,
  $p = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  TA = function (r, a) {
    var l = {};
    for (var s in a) Th.call(a, s) && (l[s] = a[s]);
    return (l[$p] = r), l;
  },
  AA = function (r) {
    var a = r.cache,
      l = r.serialized,
      s = r.isStringTag;
    return (
      Rh(a, l, s),
      q1(function () {
        return Ch(a, l, s);
      }),
      null
    );
  },
  OA = wh(function (e, r, a) {
    var l = e.css;
    typeof l == "string" && r.registered[l] !== void 0 && (l = r.registered[l]);
    var s = e[$p],
      u = [l],
      f = "";
    typeof e.className == "string"
      ? (f = j1(r.registered, u, e.className))
      : e.className != null && (f = e.className + " ");
    var p = es(u, void 0, C.useContext(Ec));
    f += r.key + "-" + p.name;
    var m = {};
    for (var h in e) Th.call(e, h) && h !== "css" && h !== $p && (m[h] = e[h]);
    return (
      (m.className = f),
      a && (m.ref = a),
      C.createElement(
        C.Fragment,
        null,
        C.createElement(AA, {
          cache: r,
          serialized: p,
          isStringTag: typeof s == "string",
        }),
        C.createElement(s, m)
      )
    );
  }),
  _A = OA,
  Tv = function (r, a) {
    var l = arguments;
    if (a == null || !Th.call(a, "css"))
      return C.createElement.apply(void 0, l);
    var s = l.length,
      u = new Array(s);
    (u[0] = _A), (u[1] = TA(r, a));
    for (var f = 2; f < s; f++) u[f] = l[f];
    return C.createElement.apply(null, u);
  };
(function (e) {
  var r;
  r || (r = e.JSX || (e.JSX = {}));
})(Tv || (Tv = {}));
var MA = wh(function (e, r) {
  var a = e.styles,
    l = es([a], void 0, C.useContext(Ec)),
    s = C.useRef();
  return (
    wv(
      function () {
        var u = r.key + "-global",
          f = new r.sheet.constructor({
            key: u,
            nonce: r.sheet.nonce,
            container: r.sheet.container,
            speedy: r.sheet.isSpeedy,
          }),
          p = !1,
          m = document.querySelector(
            'style[data-emotion="' + u + " " + l.name + '"]'
          );
        return (
          r.sheet.tags.length && (f.before = r.sheet.tags[0]),
          m !== null &&
            ((p = !0), m.setAttribute("data-emotion", u), f.hydrate([m])),
          (s.current = [f, p]),
          function () {
            f.flush();
          }
        );
      },
      [r]
    ),
    wv(
      function () {
        var u = s.current,
          f = u[0],
          p = u[1];
        if (p) {
          u[1] = !1;
          return;
        }
        if ((l.next !== void 0 && Ch(r, l.next, !0), f.tags.length)) {
          var m = f.tags[f.tags.length - 1].nextElementSibling;
          (f.before = m), f.flush();
        }
        r.insert("", l, f, !1);
      },
      [r, l.name]
    ),
    null
  );
});
function Ah() {
  for (var e = arguments.length, r = new Array(e), a = 0; a < e; a++)
    r[a] = arguments[a];
  return es(r);
}
function ts() {
  var e = Ah.apply(void 0, arguments),
    r = "animation-" + e.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + e.styles + "}",
    anim: 1,
    toString: function () {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    },
  };
}
var DA =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  zA = L1(function (e) {
    return (
      DA.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  NA = zA,
  BA = function (r) {
    return r !== "theme";
  },
  Av = function (r) {
    return typeof r == "string" && r.charCodeAt(0) > 96 ? NA : BA;
  },
  Ov = function (r, a, l) {
    var s;
    if (a) {
      var u = a.shouldForwardProp;
      s =
        r.__emotion_forwardProp && u
          ? function (f) {
              return r.__emotion_forwardProp(f) && u(f);
            }
          : u;
    }
    return typeof s != "function" && l && (s = r.__emotion_forwardProp), s;
  },
  kA = function (r) {
    var a = r.cache,
      l = r.serialized,
      s = r.isStringTag;
    return (
      Rh(a, l, s),
      q1(function () {
        return Ch(a, l, s);
      }),
      null
    );
  },
  UA = function e(r, a) {
    var l = r.__emotion_real === r,
      s = (l && r.__emotion_base) || r,
      u,
      f;
    a !== void 0 && ((u = a.label), (f = a.target));
    var p = Ov(r, a, l),
      m = p || Av(s),
      h = !m("as");
    return function () {
      var g = arguments,
        v =
          l && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
      if (
        (u !== void 0 && v.push("label:" + u + ";"),
        g[0] == null || g[0].raw === void 0)
      )
        v.push.apply(v, g);
      else {
        var S = g[0];
        v.push(S[0]);
        for (var R = g.length, b = 1; b < R; b++) v.push(g[b], S[b]);
      }
      var x = wh(function (T, _, M) {
        var A = (h && T.as) || s,
          D = "",
          O = [],
          j = T;
        if (T.theme == null) {
          j = {};
          for (var L in T) j[L] = T[L];
          j.theme = C.useContext(Ec);
        }
        typeof T.className == "string"
          ? (D = j1(_.registered, O, T.className))
          : T.className != null && (D = T.className + " ");
        var re = es(v.concat(O), _.registered, j);
        (D += _.key + "-" + re.name), f !== void 0 && (D += " " + f);
        var G = h && p === void 0 ? Av(A) : m,
          E = {};
        for (var I in T) (h && I === "as") || (G(I) && (E[I] = T[I]));
        return (
          (E.className = D),
          M && (E.ref = M),
          C.createElement(
            C.Fragment,
            null,
            C.createElement(kA, {
              cache: _,
              serialized: re,
              isStringTag: typeof A == "string",
            }),
            C.createElement(A, E)
          )
        );
      });
      return (
        (x.displayName =
          u !== void 0
            ? u
            : "Styled(" +
              (typeof s == "string"
                ? s
                : s.displayName || s.name || "Component") +
              ")"),
        (x.defaultProps = r.defaultProps),
        (x.__emotion_real = x),
        (x.__emotion_base = s),
        (x.__emotion_styles = v),
        (x.__emotion_forwardProp = p),
        Object.defineProperty(x, "toString", {
          value: function () {
            return "." + f;
          },
        }),
        (x.withComponent = function (T, _) {
          var M = e(T, Iu({}, a, _, { shouldForwardProp: Ov(x, _, !0) }));
          return M.apply(void 0, v);
        }),
        x
      );
    };
  },
  LA = [
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
  jp = UA.bind(null);
LA.forEach(function (e) {
  jp[e] = jp(e);
});
function $A(e) {
  return e == null || Object.keys(e).length === 0;
}
function jA(e) {
  const { styles: r, defaultTheme: a = {} } = e,
    l = typeof r == "function" ? (s) => r($A(s) ? a : s) : r;
  return $.jsx(MA, { styles: l });
}
/**
 * @mui/styled-engine v6.4.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function F1(e, r) {
  return jp(e, r);
}
function HA(e, r) {
  Array.isArray(e.__emotion_styles) &&
    (e.__emotion_styles = r(e.__emotion_styles));
}
const _v = [];
function Mv(e) {
  return (_v[0] = e), es(_v);
}
var fp = { exports: {} },
  at = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dv;
function PA() {
  if (Dv) return at;
  Dv = 1;
  var e = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    l = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    u = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    h = Symbol.for("react.suspense_list"),
    g = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    S = Symbol.for("react.offscreen"),
    R = Symbol.for("react.client.reference");
  function b(x) {
    if (typeof x == "object" && x !== null) {
      var T = x.$$typeof;
      switch (T) {
        case e:
          switch (((x = x.type), x)) {
            case a:
            case s:
            case l:
            case m:
            case h:
              return x;
            default:
              switch (((x = x && x.$$typeof), x)) {
                case f:
                case p:
                case v:
                case g:
                  return x;
                case u:
                  return x;
                default:
                  return T;
              }
          }
        case r:
          return T;
      }
    }
  }
  return (
    (at.ContextConsumer = u),
    (at.ContextProvider = f),
    (at.Element = e),
    (at.ForwardRef = p),
    (at.Fragment = a),
    (at.Lazy = v),
    (at.Memo = g),
    (at.Portal = r),
    (at.Profiler = s),
    (at.StrictMode = l),
    (at.Suspense = m),
    (at.SuspenseList = h),
    (at.isContextConsumer = function (x) {
      return b(x) === u;
    }),
    (at.isContextProvider = function (x) {
      return b(x) === f;
    }),
    (at.isElement = function (x) {
      return typeof x == "object" && x !== null && x.$$typeof === e;
    }),
    (at.isForwardRef = function (x) {
      return b(x) === p;
    }),
    (at.isFragment = function (x) {
      return b(x) === a;
    }),
    (at.isLazy = function (x) {
      return b(x) === v;
    }),
    (at.isMemo = function (x) {
      return b(x) === g;
    }),
    (at.isPortal = function (x) {
      return b(x) === r;
    }),
    (at.isProfiler = function (x) {
      return b(x) === s;
    }),
    (at.isStrictMode = function (x) {
      return b(x) === l;
    }),
    (at.isSuspense = function (x) {
      return b(x) === m;
    }),
    (at.isSuspenseList = function (x) {
      return b(x) === h;
    }),
    (at.isValidElementType = function (x) {
      return (
        typeof x == "string" ||
        typeof x == "function" ||
        x === a ||
        x === s ||
        x === l ||
        x === m ||
        x === h ||
        x === S ||
        (typeof x == "object" &&
          x !== null &&
          (x.$$typeof === v ||
            x.$$typeof === g ||
            x.$$typeof === f ||
            x.$$typeof === u ||
            x.$$typeof === p ||
            x.$$typeof === R ||
            x.getModuleId !== void 0))
      );
    }),
    (at.typeOf = b),
    at
  );
}
var zv;
function qA() {
  return zv || ((zv = 1), (fp.exports = PA())), fp.exports;
}
var G1 = qA();
function br(e) {
  if (typeof e != "object" || e === null) return !1;
  const r = Object.getPrototypeOf(e);
  return (
    (r === null ||
      r === Object.prototype ||
      Object.getPrototypeOf(r) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function Y1(e) {
  if (C.isValidElement(e) || G1.isValidElementType(e) || !br(e)) return e;
  const r = {};
  return (
    Object.keys(e).forEach((a) => {
      r[a] = Y1(e[a]);
    }),
    r
  );
}
function on(e, r, a = { clone: !0 }) {
  const l = a.clone ? { ...e } : e;
  return (
    br(e) &&
      br(r) &&
      Object.keys(r).forEach((s) => {
        C.isValidElement(r[s]) || G1.isValidElementType(r[s])
          ? (l[s] = r[s])
          : br(r[s]) && Object.prototype.hasOwnProperty.call(e, s) && br(e[s])
          ? (l[s] = on(e[s], r[s], a))
          : a.clone
          ? (l[s] = br(r[s]) ? Y1(r[s]) : r[s])
          : (l[s] = r[s]);
      }),
    l
  );
}
const VA = (e) => {
  const r = Object.keys(e).map((a) => ({ key: a, val: e[a] })) || [];
  return (
    r.sort((a, l) => a.val - l.val),
    r.reduce((a, l) => ({ ...a, [l.key]: l.val }), {})
  );
};
function FA(e) {
  const {
      values: r = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: a = "px",
      step: l = 5,
      ...s
    } = e,
    u = VA(r),
    f = Object.keys(u);
  function p(S) {
    return `@media (min-width:${typeof r[S] == "number" ? r[S] : S}${a})`;
  }
  function m(S) {
    return `@media (max-width:${
      (typeof r[S] == "number" ? r[S] : S) - l / 100
    }${a})`;
  }
  function h(S, R) {
    const b = f.indexOf(R);
    return `@media (min-width:${
      typeof r[S] == "number" ? r[S] : S
    }${a}) and (max-width:${
      (b !== -1 && typeof r[f[b]] == "number" ? r[f[b]] : R) - l / 100
    }${a})`;
  }
  function g(S) {
    return f.indexOf(S) + 1 < f.length ? h(S, f[f.indexOf(S) + 1]) : p(S);
  }
  function v(S) {
    const R = f.indexOf(S);
    return R === 0
      ? p(f[1])
      : R === f.length - 1
      ? m(f[R])
      : h(S, f[f.indexOf(S) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: f,
    values: u,
    up: p,
    down: m,
    between: h,
    only: g,
    not: v,
    unit: a,
    ...s,
  };
}
function GA(e, r) {
  if (!e.containerQueries) return r;
  const a = Object.keys(r)
    .filter((l) => l.startsWith("@container"))
    .sort((l, s) => {
      var f, p;
      const u = /min-width:\s*([0-9.]+)/;
      return (
        +(((f = l.match(u)) == null ? void 0 : f[1]) || 0) -
        +(((p = s.match(u)) == null ? void 0 : p[1]) || 0)
      );
    });
  return a.length
    ? a.reduce(
        (l, s) => {
          const u = r[s];
          return delete l[s], (l[s] = u), l;
        },
        { ...r }
      )
    : r;
}
function YA(e, r) {
  return (
    r === "@" ||
    (r.startsWith("@") &&
      (e.some((a) => r.startsWith(`@${a}`)) || !!r.match(/^@\d/)))
  );
}
function IA(e, r) {
  const a = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!a) return null;
  const [, l, s] = a,
    u = Number.isNaN(+l) ? l || 0 : +l;
  return e.containerQueries(s).up(u);
}
function XA(e) {
  const r = (u, f) => u.replace("@media", f ? `@container ${f}` : "@container");
  function a(u, f) {
    (u.up = (...p) => r(e.breakpoints.up(...p), f)),
      (u.down = (...p) => r(e.breakpoints.down(...p), f)),
      (u.between = (...p) => r(e.breakpoints.between(...p), f)),
      (u.only = (...p) => r(e.breakpoints.only(...p), f)),
      (u.not = (...p) => {
        const m = r(e.breakpoints.not(...p), f);
        return m.includes("not all and")
          ? m
              .replace("not all and ", "")
              .replace("min-width:", "width<")
              .replace("max-width:", "width>")
              .replace("and", "or")
          : m;
      });
  }
  const l = {},
    s = (u) => (a(l, u), l);
  return a(s), { ...e, containerQueries: s };
}
const KA = { borderRadius: 4 };
function ko(e, r) {
  return r ? on(e, r, { clone: !1 }) : e;
}
const Rc = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  Nv = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${Rc[e]}px)`,
  },
  QA = {
    containerQueries: (e) => ({
      up: (r) => {
        let a = typeof r == "number" ? r : Rc[r] || r;
        return (
          typeof a == "number" && (a = `${a}px`),
          e ? `@container ${e} (min-width:${a})` : `@container (min-width:${a})`
        );
      },
    }),
  };
function Qr(e, r, a) {
  const l = e.theme || {};
  if (Array.isArray(r)) {
    const u = l.breakpoints || Nv;
    return r.reduce((f, p, m) => ((f[u.up(u.keys[m])] = a(r[m])), f), {});
  }
  if (typeof r == "object") {
    const u = l.breakpoints || Nv;
    return Object.keys(r).reduce((f, p) => {
      if (YA(u.keys, p)) {
        const m = IA(l.containerQueries ? l : QA, p);
        m && (f[m] = a(r[p], p));
      } else if (Object.keys(u.values || Rc).includes(p)) {
        const m = u.up(p);
        f[m] = a(r[p], p);
      } else {
        const m = p;
        f[m] = r[m];
      }
      return f;
    }, {});
  }
  return a(r);
}
function WA(e = {}) {
  var a;
  return (
    ((a = e.keys) == null
      ? void 0
      : a.reduce((l, s) => {
          const u = e.up(s);
          return (l[u] = {}), l;
        }, {})) || {}
  );
}
function ZA(e, r) {
  return e.reduce((a, l) => {
    const s = a[l];
    return (!s || Object.keys(s).length === 0) && delete a[l], a;
  }, r);
}
function _e(e) {
  if (typeof e != "string") throw new Error(Kr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Cc(e, r, a = !0) {
  if (!r || typeof r != "string") return null;
  if (e && e.vars && a) {
    const l = `vars.${r}`
      .split(".")
      .reduce((s, u) => (s && s[u] ? s[u] : null), e);
    if (l != null) return l;
  }
  return r.split(".").reduce((l, s) => (l && l[s] != null ? l[s] : null), e);
}
function Ku(e, r, a, l = a) {
  let s;
  return (
    typeof e == "function"
      ? (s = e(a))
      : Array.isArray(e)
      ? (s = e[a] || l)
      : (s = Cc(e, a) || l),
    r && (s = r(s, l, e)),
    s
  );
}
function Nt(e) {
  const { prop: r, cssProperty: a = e.prop, themeKey: l, transform: s } = e,
    u = (f) => {
      if (f[r] == null) return null;
      const p = f[r],
        m = f.theme,
        h = Cc(m, l) || {};
      return Qr(f, p, (v) => {
        let S = Ku(h, s, v);
        return (
          v === S &&
            typeof v == "string" &&
            (S = Ku(h, s, `${r}${v === "default" ? "" : _e(v)}`, v)),
          a === !1 ? S : { [a]: S }
        );
      });
    };
  return (u.propTypes = {}), (u.filterProps = [r]), u;
}
function JA(e) {
  const r = {};
  return (a) => (r[a] === void 0 && (r[a] = e(a)), r[a]);
}
const e2 = { m: "margin", p: "padding" },
  t2 = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  Bv = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  n2 = JA((e) => {
    if (e.length > 2)
      if (Bv[e]) e = Bv[e];
      else return [e];
    const [r, a] = e.split(""),
      l = e2[r],
      s = t2[a] || "";
    return Array.isArray(s) ? s.map((u) => l + u) : [l + s];
  }),
  Oh = [
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
  _h = [
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
[...Oh, ..._h];
function ns(e, r, a, l) {
  const s = Cc(e, r, !0) ?? a;
  return typeof s == "number" || typeof s == "string"
    ? (u) =>
        typeof u == "string"
          ? u
          : typeof s == "string"
          ? `calc(${u} * ${s})`
          : s * u
    : Array.isArray(s)
    ? (u) => {
        if (typeof u == "string") return u;
        const f = Math.abs(u),
          p = s[f];
        return u >= 0 ? p : typeof p == "number" ? -p : `-${p}`;
      }
    : typeof s == "function"
    ? s
    : () => {};
}
function Mh(e) {
  return ns(e, "spacing", 8);
}
function rs(e, r) {
  return typeof r == "string" || r == null ? r : e(r);
}
function r2(e, r) {
  return (a) => e.reduce((l, s) => ((l[s] = rs(r, a)), l), {});
}
function a2(e, r, a, l) {
  if (!r.includes(a)) return null;
  const s = n2(a),
    u = r2(s, l),
    f = e[a];
  return Qr(e, f, u);
}
function I1(e, r) {
  const a = Mh(e.theme);
  return Object.keys(e)
    .map((l) => a2(e, r, l, a))
    .reduce(ko, {});
}
function Tt(e) {
  return I1(e, Oh);
}
Tt.propTypes = {};
Tt.filterProps = Oh;
function At(e) {
  return I1(e, _h);
}
At.propTypes = {};
At.filterProps = _h;
function X1(e = 8, r = Mh({ spacing: e })) {
  if (e.mui) return e;
  const a = (...l) =>
    (l.length === 0 ? [1] : l)
      .map((u) => {
        const f = r(u);
        return typeof f == "number" ? `${f}px` : f;
      })
      .join(" ");
  return (a.mui = !0), a;
}
function wc(...e) {
  const r = e.reduce(
      (l, s) => (
        s.filterProps.forEach((u) => {
          l[u] = s;
        }),
        l
      ),
      {}
    ),
    a = (l) => Object.keys(l).reduce((s, u) => (r[u] ? ko(s, r[u](l)) : s), {});
  return (
    (a.propTypes = {}),
    (a.filterProps = e.reduce((l, s) => l.concat(s.filterProps), [])),
    a
  );
}
function Gn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Xn(e, r) {
  return Nt({ prop: e, themeKey: "borders", transform: r });
}
const i2 = Xn("border", Gn),
  l2 = Xn("borderTop", Gn),
  o2 = Xn("borderRight", Gn),
  s2 = Xn("borderBottom", Gn),
  u2 = Xn("borderLeft", Gn),
  c2 = Xn("borderColor"),
  f2 = Xn("borderTopColor"),
  d2 = Xn("borderRightColor"),
  p2 = Xn("borderBottomColor"),
  h2 = Xn("borderLeftColor"),
  m2 = Xn("outline", Gn),
  g2 = Xn("outlineColor"),
  Tc = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const r = ns(e.theme, "shape.borderRadius", 4),
        a = (l) => ({ borderRadius: rs(r, l) });
      return Qr(e, e.borderRadius, a);
    }
    return null;
  };
Tc.propTypes = {};
Tc.filterProps = ["borderRadius"];
wc(i2, l2, o2, s2, u2, c2, f2, d2, p2, h2, Tc, m2, g2);
const Ac = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = ns(e.theme, "spacing", 8),
      a = (l) => ({ gap: rs(r, l) });
    return Qr(e, e.gap, a);
  }
  return null;
};
Ac.propTypes = {};
Ac.filterProps = ["gap"];
const Oc = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = ns(e.theme, "spacing", 8),
      a = (l) => ({ columnGap: rs(r, l) });
    return Qr(e, e.columnGap, a);
  }
  return null;
};
Oc.propTypes = {};
Oc.filterProps = ["columnGap"];
const _c = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = ns(e.theme, "spacing", 8),
      a = (l) => ({ rowGap: rs(r, l) });
    return Qr(e, e.rowGap, a);
  }
  return null;
};
_c.propTypes = {};
_c.filterProps = ["rowGap"];
const y2 = Nt({ prop: "gridColumn" }),
  v2 = Nt({ prop: "gridRow" }),
  b2 = Nt({ prop: "gridAutoFlow" }),
  S2 = Nt({ prop: "gridAutoColumns" }),
  x2 = Nt({ prop: "gridAutoRows" }),
  E2 = Nt({ prop: "gridTemplateColumns" }),
  R2 = Nt({ prop: "gridTemplateRows" }),
  C2 = Nt({ prop: "gridTemplateAreas" }),
  w2 = Nt({ prop: "gridArea" });
wc(Ac, Oc, _c, y2, v2, b2, S2, x2, E2, R2, C2, w2);
function nl(e, r) {
  return r === "grey" ? r : e;
}
const T2 = Nt({ prop: "color", themeKey: "palette", transform: nl }),
  A2 = Nt({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: nl,
  }),
  O2 = Nt({ prop: "backgroundColor", themeKey: "palette", transform: nl });
wc(T2, A2, O2);
function On(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const _2 = Nt({ prop: "width", transform: On }),
  Dh = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const r = (a) => {
        var s, u, f, p, m;
        const l =
          ((f =
            (u = (s = e.theme) == null ? void 0 : s.breakpoints) == null
              ? void 0
              : u.values) == null
            ? void 0
            : f[a]) || Rc[a];
        return l
          ? ((m = (p = e.theme) == null ? void 0 : p.breakpoints) == null
              ? void 0
              : m.unit) !== "px"
            ? { maxWidth: `${l}${e.theme.breakpoints.unit}` }
            : { maxWidth: l }
          : { maxWidth: On(a) };
      };
      return Qr(e, e.maxWidth, r);
    }
    return null;
  };
Dh.filterProps = ["maxWidth"];
const M2 = Nt({ prop: "minWidth", transform: On }),
  D2 = Nt({ prop: "height", transform: On }),
  z2 = Nt({ prop: "maxHeight", transform: On }),
  N2 = Nt({ prop: "minHeight", transform: On });
Nt({ prop: "size", cssProperty: "width", transform: On });
Nt({ prop: "size", cssProperty: "height", transform: On });
const B2 = Nt({ prop: "boxSizing" });
wc(_2, Dh, M2, D2, z2, N2, B2);
const as = {
  border: { themeKey: "borders", transform: Gn },
  borderTop: { themeKey: "borders", transform: Gn },
  borderRight: { themeKey: "borders", transform: Gn },
  borderBottom: { themeKey: "borders", transform: Gn },
  borderLeft: { themeKey: "borders", transform: Gn },
  borderColor: { themeKey: "palette" },
  borderTopColor: { themeKey: "palette" },
  borderRightColor: { themeKey: "palette" },
  borderBottomColor: { themeKey: "palette" },
  borderLeftColor: { themeKey: "palette" },
  outline: { themeKey: "borders", transform: Gn },
  outlineColor: { themeKey: "palette" },
  borderRadius: { themeKey: "shape.borderRadius", style: Tc },
  color: { themeKey: "palette", transform: nl },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: nl,
  },
  backgroundColor: { themeKey: "palette", transform: nl },
  p: { style: At },
  pt: { style: At },
  pr: { style: At },
  pb: { style: At },
  pl: { style: At },
  px: { style: At },
  py: { style: At },
  padding: { style: At },
  paddingTop: { style: At },
  paddingRight: { style: At },
  paddingBottom: { style: At },
  paddingLeft: { style: At },
  paddingX: { style: At },
  paddingY: { style: At },
  paddingInline: { style: At },
  paddingInlineStart: { style: At },
  paddingInlineEnd: { style: At },
  paddingBlock: { style: At },
  paddingBlockStart: { style: At },
  paddingBlockEnd: { style: At },
  m: { style: Tt },
  mt: { style: Tt },
  mr: { style: Tt },
  mb: { style: Tt },
  ml: { style: Tt },
  mx: { style: Tt },
  my: { style: Tt },
  margin: { style: Tt },
  marginTop: { style: Tt },
  marginRight: { style: Tt },
  marginBottom: { style: Tt },
  marginLeft: { style: Tt },
  marginX: { style: Tt },
  marginY: { style: Tt },
  marginInline: { style: Tt },
  marginInlineStart: { style: Tt },
  marginInlineEnd: { style: Tt },
  marginBlock: { style: Tt },
  marginBlockStart: { style: Tt },
  marginBlockEnd: { style: Tt },
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
  gap: { style: Ac },
  rowGap: { style: _c },
  columnGap: { style: Oc },
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
  width: { transform: On },
  maxWidth: { style: Dh },
  minWidth: { transform: On },
  height: { transform: On },
  maxHeight: { transform: On },
  minHeight: { transform: On },
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
function k2(...e) {
  const r = e.reduce((l, s) => l.concat(Object.keys(s)), []),
    a = new Set(r);
  return e.every((l) => a.size === Object.keys(l).length);
}
function U2(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function L2() {
  function e(a, l, s, u) {
    const f = { [a]: l, theme: s },
      p = u[a];
    if (!p) return { [a]: l };
    const { cssProperty: m = a, themeKey: h, transform: g, style: v } = p;
    if (l == null) return null;
    if (h === "typography" && l === "inherit") return { [a]: l };
    const S = Cc(s, h) || {};
    return v
      ? v(f)
      : Qr(f, l, (b) => {
          let x = Ku(S, g, b);
          return (
            b === x &&
              typeof b == "string" &&
              (x = Ku(S, g, `${a}${b === "default" ? "" : _e(b)}`, b)),
            m === !1 ? x : { [m]: x }
          );
        });
  }
  function r(a) {
    const { sx: l, theme: s = {} } = a || {};
    if (!l) return null;
    const u = s.unstable_sxConfig ?? as;
    function f(p) {
      let m = p;
      if (typeof p == "function") m = p(s);
      else if (typeof p != "object") return p;
      if (!m) return null;
      const h = WA(s.breakpoints),
        g = Object.keys(h);
      let v = h;
      return (
        Object.keys(m).forEach((S) => {
          const R = U2(m[S], s);
          if (R != null)
            if (typeof R == "object")
              if (u[S]) v = ko(v, e(S, R, s, u));
              else {
                const b = Qr({ theme: s }, R, (x) => ({ [S]: x }));
                k2(b, R) ? (v[S] = r({ sx: R, theme: s })) : (v = ko(v, b));
              }
            else v = ko(v, e(S, R, s, u));
        }),
        GA(s, ZA(g, v))
      );
    }
    return Array.isArray(l) ? l.map(f) : f(l);
  }
  return r;
}
const si = L2();
si.filterProps = ["sx"];
function $2(e, r) {
  var l;
  const a = this;
  if (a.vars) {
    if (
      !((l = a.colorSchemes) != null && l[e]) ||
      typeof a.getColorSchemeSelector != "function"
    )
      return {};
    let s = a.getColorSchemeSelector(e);
    return s === "&"
      ? r
      : ((s.includes("data-") || s.includes(".")) &&
          (s = `*:where(${s.replace(/\s*&$/, "")}) &`),
        { [s]: r });
  }
  return a.palette.mode === e ? r : {};
}
function zh(e = {}, ...r) {
  const {
      breakpoints: a = {},
      palette: l = {},
      spacing: s,
      shape: u = {},
      ...f
    } = e,
    p = FA(a),
    m = X1(s);
  let h = on(
    {
      breakpoints: p,
      direction: "ltr",
      components: {},
      palette: { mode: "light", ...l },
      spacing: m,
      shape: { ...KA, ...u },
    },
    f
  );
  return (
    (h = XA(h)),
    (h.applyStyles = $2),
    (h = r.reduce((g, v) => on(g, v), h)),
    (h.unstable_sxConfig = {
      ...as,
      ...(f == null ? void 0 : f.unstable_sxConfig),
    }),
    (h.unstable_sx = function (v) {
      return si({ sx: v, theme: this });
    }),
    h
  );
}
function j2(e) {
  return Object.keys(e).length === 0;
}
function H2(e = null) {
  const r = C.useContext(Ec);
  return !r || j2(r) ? e : r;
}
const P2 = zh();
function Nh(e = P2) {
  return H2(e);
}
function q2({ styles: e, themeId: r, defaultTheme: a = {} }) {
  const l = Nh(a),
    s = typeof e == "function" ? e((r && l[r]) || l) : e;
  return $.jsx(jA, { styles: s });
}
const V2 = (e) => {
  var l;
  const r = { systemProps: {}, otherProps: {} },
    a =
      ((l = e == null ? void 0 : e.theme) == null
        ? void 0
        : l.unstable_sxConfig) ?? as;
  return (
    Object.keys(e).forEach((s) => {
      a[s] ? (r.systemProps[s] = e[s]) : (r.otherProps[s] = e[s]);
    }),
    r
  );
};
function K1(e) {
  const { sx: r, ...a } = e,
    { systemProps: l, otherProps: s } = V2(a);
  let u;
  return (
    Array.isArray(r)
      ? (u = [l, ...r])
      : typeof r == "function"
      ? (u = (...f) => {
          const p = r(...f);
          return br(p) ? { ...l, ...p } : l;
        })
      : (u = { ...l, ...r }),
    { ...s, sx: u }
  );
}
const kv = (e) => e,
  F2 = () => {
    let e = kv;
    return {
      configure(r) {
        e = r;
      },
      generate(r) {
        return e(r);
      },
      reset() {
        e = kv;
      },
    };
  },
  Q1 = F2();
function W1(e) {
  var r,
    a,
    l = "";
  if (typeof e == "string" || typeof e == "number") l += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (r = 0; r < s; r++)
        e[r] && (a = W1(e[r])) && (l && (l += " "), (l += a));
    } else for (a in e) e[a] && (l && (l += " "), (l += a));
  return l;
}
function je() {
  for (var e, r, a = 0, l = "", s = arguments.length; a < s; a++)
    (e = arguments[a]) && (r = W1(e)) && (l && (l += " "), (l += r));
  return l;
}
function G2(e = {}) {
  const {
      themeId: r,
      defaultTheme: a,
      defaultClassName: l = "MuiBox-root",
      generateClassName: s,
    } = e,
    u = F1("div", {
      shouldForwardProp: (p) => p !== "theme" && p !== "sx" && p !== "as",
    })(si);
  return C.forwardRef(function (m, h) {
    const g = Nh(a),
      { className: v, component: S = "div", ...R } = K1(m);
    return $.jsx(u, {
      as: S,
      ref: h,
      className: je(v, s ? s(l) : l),
      theme: (r && g[r]) || g,
      ...R,
    });
  });
}
const Y2 = {
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
function dt(e, r, a = "Mui") {
  const l = Y2[r];
  return l ? `${a}-${l}` : `${Q1.generate(e)}-${r}`;
}
function it(e, r, a = "Mui") {
  const l = {};
  return (
    r.forEach((s) => {
      l[s] = dt(e, s, a);
    }),
    l
  );
}
function Z1(e) {
  const { variants: r, ...a } = e,
    l = { variants: r, style: Mv(a), isProcessed: !0 };
  return (
    l.style === a ||
      (r &&
        r.forEach((s) => {
          typeof s.style != "function" && (s.style = Mv(s.style));
        })),
    l
  );
}
const I2 = zh();
function dp(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function X2(e) {
  return e ? (r, a) => a[e] : null;
}
function K2(e, r, a) {
  e.theme = Z2(e.theme) ? a : e.theme[r] || e.theme;
}
function Lu(e, r) {
  const a = typeof r == "function" ? r(e) : r;
  if (Array.isArray(a)) return a.flatMap((l) => Lu(e, l));
  if (Array.isArray(a == null ? void 0 : a.variants)) {
    let l;
    if (a.isProcessed) l = a.style;
    else {
      const { variants: s, ...u } = a;
      l = u;
    }
    return J1(e, a.variants, [l]);
  }
  return a != null && a.isProcessed ? a.style : a;
}
function J1(e, r, a = []) {
  var s;
  let l;
  e: for (let u = 0; u < r.length; u += 1) {
    const f = r[u];
    if (typeof f.props == "function") {
      if (
        (l ?? (l = { ...e, ...e.ownerState, ownerState: e.ownerState }),
        !f.props(l))
      )
        continue;
    } else
      for (const p in f.props)
        if (
          e[p] !== f.props[p] &&
          ((s = e.ownerState) == null ? void 0 : s[p]) !== f.props[p]
        )
          continue e;
    typeof f.style == "function"
      ? (l ?? (l = { ...e, ...e.ownerState, ownerState: e.ownerState }),
        a.push(f.style(l)))
      : a.push(f.style);
  }
  return a;
}
function Q2(e = {}) {
  const {
    themeId: r,
    defaultTheme: a = I2,
    rootShouldForwardProp: l = dp,
    slotShouldForwardProp: s = dp,
  } = e;
  function u(p) {
    K2(p, r, a);
  }
  return (p, m = {}) => {
    HA(p, (O) => O.filter((j) => j !== si));
    const {
        name: h,
        slot: g,
        skipVariantsResolver: v,
        skipSx: S,
        overridesResolver: R = X2(e5(g)),
        ...b
      } = m,
      x = v !== void 0 ? v : (g && g !== "Root" && g !== "root") || !1,
      T = S || !1;
    let _ = dp;
    g === "Root" || g === "root"
      ? (_ = l)
      : g
      ? (_ = s)
      : J2(p) && (_ = void 0);
    const M = F1(p, { shouldForwardProp: _, label: W2(), ...b }),
      A = (O) => {
        if (typeof O == "function" && O.__emotion_real !== O)
          return function (L) {
            return Lu(L, O);
          };
        if (br(O)) {
          const j = Z1(O);
          return j.variants
            ? function (re) {
                return Lu(re, j);
              }
            : j.style;
        }
        return O;
      },
      D = (...O) => {
        const j = [],
          L = O.map(A),
          re = [];
        if (
          (j.push(u),
          h &&
            R &&
            re.push(function (X) {
              var H, ae;
              const oe =
                (ae = (H = X.theme.components) == null ? void 0 : H[h]) == null
                  ? void 0
                  : ae.styleOverrides;
              if (!oe) return null;
              const ee = {};
              for (const ce in oe) ee[ce] = Lu(X, oe[ce]);
              return R(X, ee);
            }),
          h &&
            !x &&
            re.push(function (X) {
              var ee, H;
              const J = X.theme,
                oe =
                  (H =
                    (ee = J == null ? void 0 : J.components) == null
                      ? void 0
                      : ee[h]) == null
                    ? void 0
                    : H.variants;
              return oe ? J1(X, oe) : null;
            }),
          T || re.push(si),
          Array.isArray(L[0]))
        ) {
          const I = L.shift(),
            X = new Array(j.length).fill(""),
            J = new Array(re.length).fill("");
          let oe;
          (oe = [...X, ...I, ...J]),
            (oe.raw = [...X, ...I.raw, ...J]),
            j.unshift(oe);
        }
        const G = [...j, ...L, ...re],
          E = M(...G);
        return p.muiName && (E.muiName = p.muiName), E;
      };
    return M.withConfig && (D.withConfig = M.withConfig), D;
  };
}
function W2(e, r) {
  return void 0;
}
function Z2(e) {
  for (const r in e) return !1;
  return !0;
}
function J2(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function e5(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Qu(e, r) {
  const a = { ...r };
  for (const l in e)
    if (Object.prototype.hasOwnProperty.call(e, l)) {
      const s = l;
      if (s === "components" || s === "slots") a[s] = { ...e[s], ...a[s] };
      else if (s === "componentsProps" || s === "slotProps") {
        const u = e[s],
          f = r[s];
        if (!f) a[s] = u || {};
        else if (!u) a[s] = f;
        else {
          a[s] = { ...f };
          for (const p in u)
            if (Object.prototype.hasOwnProperty.call(u, p)) {
              const m = p;
              a[s][m] = Qu(u[m], f[m]);
            }
        }
      } else a[s] === void 0 && (a[s] = e[s]);
    }
  return a;
}
const ui = typeof window < "u" ? C.useLayoutEffect : C.useEffect;
function t5(e, r = Number.MIN_SAFE_INTEGER, a = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(e, a));
}
function Bh(e, r = 0, a = 1) {
  return t5(e, r, a);
}
function n5(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let a = e.match(r);
  return (
    a && a[0].length === 1 && (a = a.map((l) => l + l)),
    a
      ? `rgb${a.length === 4 ? "a" : ""}(${a
          .map((l, s) =>
            s < 3
              ? parseInt(l, 16)
              : Math.round((parseInt(l, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function wa(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return wa(n5(e));
  const r = e.indexOf("("),
    a = e.substring(0, r);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(a))
    throw new Error(Kr(9, e));
  let l = e.substring(r + 1, e.length - 1),
    s;
  if (a === "color") {
    if (
      ((l = l.split(" ")),
      (s = l.shift()),
      l.length === 4 && l[3].charAt(0) === "/" && (l[3] = l[3].slice(1)),
      !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(
        s
      ))
    )
      throw new Error(Kr(10, s));
  } else l = l.split(",");
  return (
    (l = l.map((u) => parseFloat(u))), { type: a, values: l, colorSpace: s }
  );
}
const r5 = (e) => {
    const r = wa(e);
    return r.values
      .slice(0, 3)
      .map((a, l) => (r.type.includes("hsl") && l !== 0 ? `${a}%` : a))
      .join(" ");
  },
  Mo = (e, r) => {
    try {
      return r5(e);
    } catch {
      return e;
    }
  };
function Mc(e) {
  const { type: r, colorSpace: a } = e;
  let { values: l } = e;
  return (
    r.includes("rgb")
      ? (l = l.map((s, u) => (u < 3 ? parseInt(s, 10) : s)))
      : r.includes("hsl") && ((l[1] = `${l[1]}%`), (l[2] = `${l[2]}%`)),
    r.includes("color") ? (l = `${a} ${l.join(" ")}`) : (l = `${l.join(", ")}`),
    `${r}(${l})`
  );
}
function eS(e) {
  e = wa(e);
  const { values: r } = e,
    a = r[0],
    l = r[1] / 100,
    s = r[2] / 100,
    u = l * Math.min(s, 1 - s),
    f = (h, g = (h + a / 30) % 12) =>
      s - u * Math.max(Math.min(g - 3, 9 - g, 1), -1);
  let p = "rgb";
  const m = [
    Math.round(f(0) * 255),
    Math.round(f(8) * 255),
    Math.round(f(4) * 255),
  ];
  return (
    e.type === "hsla" && ((p += "a"), m.push(r[3])), Mc({ type: p, values: m })
  );
}
function Hp(e) {
  e = wa(e);
  let r = e.type === "hsl" || e.type === "hsla" ? wa(eS(e)).values : e.values;
  return (
    (r = r.map(
      (a) => (
        e.type !== "color" && (a /= 255),
        a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3))
  );
}
function a5(e, r) {
  const a = Hp(e),
    l = Hp(r);
  return (Math.max(a, l) + 0.05) / (Math.min(a, l) + 0.05);
}
function Sr(e, r) {
  return (
    (e = wa(e)),
    (r = Bh(r)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${r}`) : (e.values[3] = r),
    Mc(e)
  );
}
function xu(e, r, a) {
  try {
    return Sr(e, r);
  } catch {
    return e;
  }
}
function kh(e, r) {
  if (((e = wa(e)), (r = Bh(r)), e.type.includes("hsl"))) e.values[2] *= 1 - r;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let a = 0; a < 3; a += 1) e.values[a] *= 1 - r;
  return Mc(e);
}
function ut(e, r, a) {
  try {
    return kh(e, r);
  } catch {
    return e;
  }
}
function Uh(e, r) {
  if (((e = wa(e)), (r = Bh(r)), e.type.includes("hsl")))
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.includes("rgb"))
    for (let a = 0; a < 3; a += 1) e.values[a] += (255 - e.values[a]) * r;
  else if (e.type.includes("color"))
    for (let a = 0; a < 3; a += 1) e.values[a] += (1 - e.values[a]) * r;
  return Mc(e);
}
function ct(e, r, a) {
  try {
    return Uh(e, r);
  } catch {
    return e;
  }
}
function i5(e, r = 0.15) {
  return Hp(e) > 0.5 ? kh(e, r) : Uh(e, r);
}
function Eu(e, r, a) {
  try {
    return i5(e, r);
  } catch {
    return e;
  }
}
function Uv(...e) {
  return e.reduce(
    (r, a) =>
      a == null
        ? r
        : function (...s) {
            r.apply(this, s), a.apply(this, s);
          },
    () => {}
  );
}
function tS(e, r = 166) {
  let a;
  function l(...s) {
    const u = () => {
      e.apply(this, s);
    };
    clearTimeout(a), (a = setTimeout(u, r));
  }
  return (
    (l.clear = () => {
      clearTimeout(a);
    }),
    l
  );
}
function pp(e, r) {
  var a, l, s;
  return (
    C.isValidElement(e) &&
    r.indexOf(
      e.type.muiName ??
        ((s =
          (l = (a = e.type) == null ? void 0 : a._payload) == null
            ? void 0
            : l.value) == null
          ? void 0
          : s.muiName)
    ) !== -1
  );
}
function nr(e) {
  return (e && e.ownerDocument) || document;
}
function Wr(e) {
  return nr(e).defaultView || window;
}
function Pp(e, r) {
  typeof e == "function" ? e(r) : e && (e.current = r);
}
let Lv = 0;
function l5(e) {
  const [r, a] = C.useState(e),
    l = e || r;
  return (
    C.useEffect(() => {
      r == null && ((Lv += 1), a(`mui-${Lv}`));
    }, [r]),
    l
  );
}
const o5 = { ...Ap },
  $v = o5.useId;
function Dc(e) {
  if ($v !== void 0) {
    const r = $v();
    return e ?? r;
  }
  return l5(e);
}
function jv({ controlled: e, default: r, name: a, state: l = "value" }) {
  const { current: s } = C.useRef(e !== void 0),
    [u, f] = C.useState(r),
    p = s ? e : u,
    m = C.useCallback((h) => {
      s || f(h);
    }, []);
  return [p, m];
}
function rl(e) {
  const r = C.useRef(e);
  return (
    ui(() => {
      r.current = e;
    }),
    C.useRef((...a) => (0, r.current)(...a)).current
  );
}
function sn(...e) {
  return C.useMemo(
    () =>
      e.every((r) => r == null)
        ? null
        : (r) => {
            e.forEach((a) => {
              Pp(a, r);
            });
          },
    e
  );
}
const Hv = {};
function nS(e, r) {
  const a = C.useRef(Hv);
  return a.current === Hv && (a.current = e(r)), a;
}
const s5 = [];
function u5(e) {
  C.useEffect(e, s5);
}
class Lh {
  constructor() {
    yo(this, "currentId", null);
    yo(this, "clear", () => {
      this.currentId !== null &&
        (clearTimeout(this.currentId), (this.currentId = null));
    });
    yo(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Lh();
  }
  start(r, a) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = null), a();
      }, r));
  }
}
function rS() {
  const e = nS(Lh.create).current;
  return u5(e.disposeEffect), e;
}
function Pv(e) {
  try {
    return e.matches(":focus-visible");
  } catch {}
  return !1;
}
function aS(e = window) {
  const r = e.document.documentElement.clientWidth;
  return e.innerWidth - r;
}
function pt(e, r, a = void 0) {
  const l = {};
  for (const s in e) {
    const u = e[s];
    let f = "",
      p = !0;
    for (let m = 0; m < u.length; m += 1) {
      const h = u[m];
      h &&
        ((f += (p === !0 ? "" : " ") + r(h)),
        (p = !1),
        a && a[h] && (f += " " + a[h]));
    }
    l[s] = f;
  }
  return l;
}
function c5(e) {
  return typeof e == "string";
}
function iS(e, r, a) {
  return e === void 0 || c5(e)
    ? r
    : { ...r, ownerState: { ...r.ownerState, ...a } };
}
function lS(e, r = []) {
  if (e === void 0) return {};
  const a = {};
  return (
    Object.keys(e)
      .filter(
        (l) =>
          l.match(/^on[A-Z]/) && typeof e[l] == "function" && !r.includes(l)
      )
      .forEach((l) => {
        a[l] = e[l];
      }),
    a
  );
}
function qv(e) {
  if (e === void 0) return {};
  const r = {};
  return (
    Object.keys(e)
      .filter((a) => !(a.match(/^on[A-Z]/) && typeof e[a] == "function"))
      .forEach((a) => {
        r[a] = e[a];
      }),
    r
  );
}
function oS(e) {
  const {
    getSlotProps: r,
    additionalProps: a,
    externalSlotProps: l,
    externalForwardedProps: s,
    className: u,
  } = e;
  if (!r) {
    const R = je(
        a == null ? void 0 : a.className,
        u,
        s == null ? void 0 : s.className,
        l == null ? void 0 : l.className
      ),
      b = {
        ...(a == null ? void 0 : a.style),
        ...(s == null ? void 0 : s.style),
        ...(l == null ? void 0 : l.style),
      },
      x = { ...a, ...s, ...l };
    return (
      R.length > 0 && (x.className = R),
      Object.keys(b).length > 0 && (x.style = b),
      { props: x, internalRef: void 0 }
    );
  }
  const f = lS({ ...s, ...l }),
    p = qv(l),
    m = qv(s),
    h = r(f),
    g = je(
      h == null ? void 0 : h.className,
      a == null ? void 0 : a.className,
      u,
      s == null ? void 0 : s.className,
      l == null ? void 0 : l.className
    ),
    v = {
      ...(h == null ? void 0 : h.style),
      ...(a == null ? void 0 : a.style),
      ...(s == null ? void 0 : s.style),
      ...(l == null ? void 0 : l.style),
    },
    S = { ...h, ...a, ...m, ...p };
  return (
    g.length > 0 && (S.className = g),
    Object.keys(v).length > 0 && (S.style = v),
    { props: S, internalRef: h.ref }
  );
}
function sS(e, r, a) {
  return typeof e == "function" ? e(r, a) : e;
}
function Vv(e) {
  var v;
  const {
      elementType: r,
      externalSlotProps: a,
      ownerState: l,
      skipResolvingSlotProps: s = !1,
      ...u
    } = e,
    f = s ? {} : sS(a, l),
    { props: p, internalRef: m } = oS({ ...u, externalSlotProps: f }),
    h = sn(
      m,
      f == null ? void 0 : f.ref,
      (v = e.additionalProps) == null ? void 0 : v.ref
    );
  return iS(r, { ...p, ref: h }, l);
}
function is(e) {
  var r;
  return parseInt(C.version, 10) >= 19
    ? ((r = e == null ? void 0 : e.props) == null ? void 0 : r.ref) || null
    : (e == null ? void 0 : e.ref) || null;
}
const f5 = C.createContext(),
  d5 = () => C.useContext(f5) ?? !1,
  p5 = C.createContext(void 0);
function h5(e) {
  const { theme: r, name: a, props: l } = e;
  if (!r || !r.components || !r.components[a]) return l;
  const s = r.components[a];
  return s.defaultProps
    ? Qu(s.defaultProps, l)
    : !s.styleOverrides && !s.variants
    ? Qu(s, l)
    : l;
}
function m5({ props: e, name: r }) {
  const a = C.useContext(p5);
  return h5({ props: e, name: r, theme: { components: a } });
}
const Fv = { theme: void 0 };
function g5(e) {
  let r, a;
  return function (s) {
    let u = r;
    return (
      (u === void 0 || s.theme !== a) &&
        ((Fv.theme = s.theme), (u = Z1(e(Fv))), (r = u), (a = s.theme)),
      u
    );
  };
}
function y5(e = "") {
  function r(...l) {
    if (!l.length) return "";
    const s = l[0];
    return typeof s == "string" &&
      !s.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/
      )
      ? `, var(--${e ? `${e}-` : ""}${s}${r(...l.slice(1))})`
      : `, ${s}`;
  }
  return (l, ...s) => `var(--${e ? `${e}-` : ""}${l}${r(...s)})`;
}
const Gv = (e, r, a, l = []) => {
    let s = e;
    r.forEach((u, f) => {
      f === r.length - 1
        ? Array.isArray(s)
          ? (s[Number(u)] = a)
          : s && typeof s == "object" && (s[u] = a)
        : s &&
          typeof s == "object" &&
          (s[u] || (s[u] = l.includes(u) ? [] : {}), (s = s[u]));
    });
  },
  v5 = (e, r, a) => {
    function l(s, u = [], f = []) {
      Object.entries(s).forEach(([p, m]) => {
        (!a || (a && !a([...u, p]))) &&
          m != null &&
          (typeof m == "object" && Object.keys(m).length > 0
            ? l(m, [...u, p], Array.isArray(m) ? [...f, p] : f)
            : r([...u, p], m, f));
      });
    }
    l(e);
  },
  b5 = (e, r) =>
    typeof r == "number"
      ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((l) =>
          e.includes(l)
        ) || e[e.length - 1].toLowerCase().includes("opacity")
        ? r
        : `${r}px`
      : r;
function hp(e, r) {
  const { prefix: a, shouldSkipGeneratingVar: l } = r || {},
    s = {},
    u = {},
    f = {};
  return (
    v5(
      e,
      (p, m, h) => {
        if (
          (typeof m == "string" || typeof m == "number") &&
          (!l || !l(p, m))
        ) {
          const g = `--${a ? `${a}-` : ""}${p.join("-")}`,
            v = b5(p, m);
          Object.assign(s, { [g]: v }),
            Gv(u, p, `var(${g})`, h),
            Gv(f, p, `var(${g}, ${v})`, h);
        }
      },
      (p) => p[0] === "vars"
    ),
    { css: s, vars: u, varsWithDefaults: f }
  );
}
function S5(e, r = {}) {
  const {
      getSelector: a = T,
      disableCssColorScheme: l,
      colorSchemeSelector: s,
    } = r,
    {
      colorSchemes: u = {},
      components: f,
      defaultColorScheme: p = "light",
      ...m
    } = e,
    { vars: h, css: g, varsWithDefaults: v } = hp(m, r);
  let S = v;
  const R = {},
    { [p]: b, ...x } = u;
  if (
    (Object.entries(x || {}).forEach(([A, D]) => {
      const { vars: O, css: j, varsWithDefaults: L } = hp(D, r);
      (S = on(S, L)), (R[A] = { css: j, vars: O });
    }),
    b)
  ) {
    const { css: A, vars: D, varsWithDefaults: O } = hp(b, r);
    (S = on(S, O)), (R[p] = { css: A, vars: D });
  }
  function T(A, D) {
    var j, L;
    let O = s;
    if (
      (s === "class" && (O = ".%s"),
      s === "data" && (O = "[data-%s]"),
      s != null &&
        s.startsWith("data-") &&
        !s.includes("%s") &&
        (O = `[${s}="%s"]`),
      A)
    ) {
      if (O === "media")
        return e.defaultColorScheme === A
          ? ":root"
          : {
              [`@media (prefers-color-scheme: ${
                ((L = (j = u[A]) == null ? void 0 : j.palette) == null
                  ? void 0
                  : L.mode) || A
              })`]: { ":root": D },
            };
      if (O)
        return e.defaultColorScheme === A
          ? `:root, ${O.replace("%s", String(A))}`
          : O.replace("%s", String(A));
    }
    return ":root";
  }
  return {
    vars: S,
    generateThemeVars: () => {
      let A = { ...h };
      return (
        Object.entries(R).forEach(([, { vars: D }]) => {
          A = on(A, D);
        }),
        A
      );
    },
    generateStyleSheets: () => {
      var re, G;
      const A = [],
        D = e.defaultColorScheme || "light";
      function O(E, I) {
        Object.keys(I).length &&
          A.push(typeof E == "string" ? { [E]: { ...I } } : E);
      }
      O(a(void 0, { ...g }), g);
      const { [D]: j, ...L } = R;
      if (j) {
        const { css: E } = j,
          I =
            (G = (re = u[D]) == null ? void 0 : re.palette) == null
              ? void 0
              : G.mode,
          X = !l && I ? { colorScheme: I, ...E } : { ...E };
        O(a(D, { ...X }), X);
      }
      return (
        Object.entries(L).forEach(([E, { css: I }]) => {
          var oe, ee;
          const X =
              (ee = (oe = u[E]) == null ? void 0 : oe.palette) == null
                ? void 0
                : ee.mode,
            J = !l && X ? { colorScheme: X, ...I } : { ...I };
          O(a(E, { ...J }), J);
        }),
        A
      );
    },
  };
}
function x5(e) {
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
function uS() {
  return {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: Vo.white, default: Vo.white },
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
const E5 = uS();
function cS() {
  return {
    text: {
      primary: Vo.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: Vo.white,
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
const Yv = cS();
function Iv(e, r, a, l) {
  const s = l.light || l,
    u = l.dark || l * 1.5;
  e[r] ||
    (e.hasOwnProperty(a)
      ? (e[r] = e[a])
      : r === "light"
      ? (e.light = Uh(e.main, s))
      : r === "dark" && (e.dark = kh(e.main, u)));
}
function R5(e = "light") {
  return e === "dark"
    ? { main: Ii[200], light: Ii[50], dark: Ii[400] }
    : { main: Ii[700], light: Ii[400], dark: Ii[800] };
}
function C5(e = "light") {
  return e === "dark"
    ? { main: Yi[200], light: Yi[50], dark: Yi[400] }
    : { main: Yi[500], light: Yi[300], dark: Yi[700] };
}
function w5(e = "light") {
  return e === "dark"
    ? { main: Gi[500], light: Gi[300], dark: Gi[700] }
    : { main: Gi[700], light: Gi[400], dark: Gi[800] };
}
function T5(e = "light") {
  return e === "dark"
    ? { main: Xi[400], light: Xi[300], dark: Xi[700] }
    : { main: Xi[700], light: Xi[500], dark: Xi[900] };
}
function A5(e = "light") {
  return e === "dark"
    ? { main: Ki[400], light: Ki[300], dark: Ki[700] }
    : { main: Ki[800], light: Ki[500], dark: Ki[900] };
}
function O5(e = "light") {
  return e === "dark"
    ? { main: Ro[400], light: Ro[300], dark: Ro[700] }
    : { main: "#ed6c02", light: Ro[500], dark: Ro[900] };
}
function $h(e) {
  const {
      mode: r = "light",
      contrastThreshold: a = 3,
      tonalOffset: l = 0.2,
      ...s
    } = e,
    u = e.primary || R5(r),
    f = e.secondary || C5(r),
    p = e.error || w5(r),
    m = e.info || T5(r),
    h = e.success || A5(r),
    g = e.warning || O5(r);
  function v(x) {
    return a5(x, Yv.text.primary) >= a ? Yv.text.primary : E5.text.primary;
  }
  const S = ({
    color: x,
    name: T,
    mainShade: _ = 500,
    lightShade: M = 300,
    darkShade: A = 700,
  }) => {
    if (
      ((x = { ...x }),
      !x.main && x[_] && (x.main = x[_]),
      !x.hasOwnProperty("main"))
    )
      throw new Error(Kr(11, T ? ` (${T})` : "", _));
    if (typeof x.main != "string")
      throw new Error(Kr(12, T ? ` (${T})` : "", JSON.stringify(x.main)));
    return (
      Iv(x, "light", M, l),
      Iv(x, "dark", A, l),
      x.contrastText || (x.contrastText = v(x.main)),
      x
    );
  };
  let R;
  return (
    r === "light" ? (R = uS()) : r === "dark" && (R = cS()),
    on(
      {
        common: { ...Vo },
        mode: r,
        primary: S({ color: u, name: "primary" }),
        secondary: S({
          color: f,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: S({ color: p, name: "error" }),
        warning: S({ color: g, name: "warning" }),
        info: S({ color: m, name: "info" }),
        success: S({ color: h, name: "success" }),
        grey: HT,
        contrastThreshold: a,
        getContrastText: v,
        augmentColor: S,
        tonalOffset: l,
        ...R,
      },
      s
    )
  );
}
function _5(e) {
  const r = {};
  return (
    Object.entries(e).forEach((l) => {
      const [s, u] = l;
      typeof u == "object" &&
        (r[s] = `${u.fontStyle ? `${u.fontStyle} ` : ""}${
          u.fontVariant ? `${u.fontVariant} ` : ""
        }${u.fontWeight ? `${u.fontWeight} ` : ""}${
          u.fontStretch ? `${u.fontStretch} ` : ""
        }${u.fontSize || ""}${u.lineHeight ? `/${u.lineHeight} ` : ""}${
          u.fontFamily || ""
        }`);
    }),
    r
  );
}
function M5(e, r) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
      [e.up("sm")]: { minHeight: 64 },
    },
    ...r,
  };
}
function D5(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Xv = { textTransform: "uppercase" },
  Kv = '"Roboto", "Helvetica", "Arial", sans-serif';
function z5(e, r) {
  const {
      fontFamily: a = Kv,
      fontSize: l = 14,
      fontWeightLight: s = 300,
      fontWeightRegular: u = 400,
      fontWeightMedium: f = 500,
      fontWeightBold: p = 700,
      htmlFontSize: m = 16,
      allVariants: h,
      pxToRem: g,
      ...v
    } = typeof r == "function" ? r(e) : r,
    S = l / 14,
    R = g || ((T) => `${(T / m) * S}rem`),
    b = (T, _, M, A, D) => ({
      fontFamily: a,
      fontWeight: T,
      fontSize: R(_),
      lineHeight: M,
      ...(a === Kv ? { letterSpacing: `${D5(A / _)}em` } : {}),
      ...D,
      ...h,
    }),
    x = {
      h1: b(s, 96, 1.167, -1.5),
      h2: b(s, 60, 1.2, -0.5),
      h3: b(u, 48, 1.167, 0),
      h4: b(u, 34, 1.235, 0.25),
      h5: b(u, 24, 1.334, 0),
      h6: b(f, 20, 1.6, 0.15),
      subtitle1: b(u, 16, 1.75, 0.15),
      subtitle2: b(f, 14, 1.57, 0.1),
      body1: b(u, 16, 1.5, 0.15),
      body2: b(u, 14, 1.43, 0.15),
      button: b(f, 14, 1.75, 0.4, Xv),
      caption: b(u, 12, 1.66, 0.4),
      overline: b(u, 12, 2.66, 1, Xv),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return on(
    {
      htmlFontSize: m,
      pxToRem: R,
      fontFamily: a,
      fontSize: l,
      fontWeightLight: s,
      fontWeightRegular: u,
      fontWeightMedium: f,
      fontWeightBold: p,
      ...x,
    },
    v,
    { clone: !1 }
  );
}
const N5 = 0.2,
  B5 = 0.14,
  k5 = 0.12;
function bt(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${N5})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${B5})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${k5})`,
  ].join(",");
}
const U5 = [
    "none",
    bt(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    bt(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    bt(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    bt(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    bt(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    bt(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    bt(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    bt(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    bt(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    bt(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    bt(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    bt(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    bt(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    bt(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    bt(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    bt(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    bt(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    bt(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    bt(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    bt(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    bt(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    bt(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    bt(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    bt(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  L5 = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  $5 = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Qv(e) {
  return `${Math.round(e)}ms`;
}
function j5(e) {
  if (!e) return 0;
  const r = e / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function H5(e) {
  const r = { ...L5, ...e.easing },
    a = { ...$5, ...e.duration };
  return {
    getAutoHeightDuration: j5,
    create: (s = ["all"], u = {}) => {
      const {
        duration: f = a.standard,
        easing: p = r.easeInOut,
        delay: m = 0,
        ...h
      } = u;
      return (Array.isArray(s) ? s : [s])
        .map(
          (g) =>
            `${g} ${typeof f == "string" ? f : Qv(f)} ${p} ${
              typeof m == "string" ? m : Qv(m)
            }`
        )
        .join(",");
    },
    ...e,
    easing: r,
    duration: a,
  };
}
const P5 = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
function q5(e) {
  return (
    br(e) ||
    typeof e > "u" ||
    typeof e == "string" ||
    typeof e == "boolean" ||
    typeof e == "number" ||
    Array.isArray(e)
  );
}
function fS(e = {}) {
  const r = { ...e };
  function a(l) {
    const s = Object.entries(l);
    for (let u = 0; u < s.length; u++) {
      const [f, p] = s[u];
      !q5(p) || f.startsWith("unstable_")
        ? delete l[f]
        : br(p) && ((l[f] = { ...p }), a(l[f]));
    }
  }
  return (
    a(r),
    `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
  );
}
function qp(e = {}, ...r) {
  const {
    breakpoints: a,
    mixins: l = {},
    spacing: s,
    palette: u = {},
    transitions: f = {},
    typography: p = {},
    shape: m,
    ...h
  } = e;
  if (e.vars) throw new Error(Kr(20));
  const g = $h(u),
    v = zh(e);
  let S = on(v, {
    mixins: M5(v.breakpoints, l),
    palette: g,
    shadows: U5.slice(),
    typography: z5(g, p),
    transitions: H5(f),
    zIndex: { ...P5 },
  });
  return (
    (S = on(S, h)),
    (S = r.reduce((R, b) => on(R, b), S)),
    (S.unstable_sxConfig = {
      ...as,
      ...(h == null ? void 0 : h.unstable_sxConfig),
    }),
    (S.unstable_sx = function (b) {
      return si({ sx: b, theme: this });
    }),
    (S.toRuntimeSource = fS),
    S
  );
}
function Vp(e) {
  let r;
  return (
    e < 1 ? (r = 5.11916 * e ** 2) : (r = 4.5 * Math.log(e + 1) + 2),
    Math.round(r * 10) / 1e3
  );
}
const V5 = [...Array(25)].map((e, r) => {
  if (r === 0) return "none";
  const a = Vp(r);
  return `linear-gradient(rgba(255 255 255 / ${a}), rgba(255 255 255 / ${a}))`;
});
function dS(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38,
  };
}
function pS(e) {
  return e === "dark" ? V5 : [];
}
function F5(e) {
  const { palette: r = { mode: "light" }, opacity: a, overlays: l, ...s } = e,
    u = $h(r);
  return {
    palette: u,
    opacity: { ...dS(u.mode), ...a },
    overlays: l || pS(u.mode),
    ...s,
  };
}
function G5(e) {
  var r;
  return (
    !!e[0].match(
      /(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/
    ) ||
    !!e[0].match(/sxConfig$/) ||
    (e[0] === "palette" &&
      !!((r = e[1]) != null && r.match(/(mode|contrastThreshold|tonalOffset)/)))
  );
}
const Y5 = (e) => [
    ...[...Array(25)].map((r, a) => `--${e ? `${e}-` : ""}overlays-${a}`),
    `--${e ? `${e}-` : ""}palette-AppBar-darkBg`,
    `--${e ? `${e}-` : ""}palette-AppBar-darkColor`,
  ],
  I5 = (e) => (r, a) => {
    const l = e.rootSelector || ":root",
      s = e.colorSchemeSelector;
    let u = s;
    if (
      (s === "class" && (u = ".%s"),
      s === "data" && (u = "[data-%s]"),
      s != null &&
        s.startsWith("data-") &&
        !s.includes("%s") &&
        (u = `[${s}="%s"]`),
      e.defaultColorScheme === r)
    ) {
      if (r === "dark") {
        const f = {};
        return (
          Y5(e.cssVarPrefix).forEach((p) => {
            (f[p] = a[p]), delete a[p];
          }),
          u === "media"
            ? { [l]: a, "@media (prefers-color-scheme: dark)": { [l]: f } }
            : u
            ? { [u.replace("%s", r)]: f, [`${l}, ${u.replace("%s", r)}`]: a }
            : { [l]: { ...a, ...f } }
        );
      }
      if (u && u !== "media") return `${l}, ${u.replace("%s", String(r))}`;
    } else if (r) {
      if (u === "media")
        return { [`@media (prefers-color-scheme: ${String(r)})`]: { [l]: a } };
      if (u) return u.replace("%s", String(r));
    }
    return l;
  };
function X5(e, r) {
  r.forEach((a) => {
    e[a] || (e[a] = {});
  });
}
function Z(e, r, a) {
  !e[r] && a && (e[r] = a);
}
function Do(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : eS(e);
}
function Fr(e, r) {
  `${r}Channel` in e || (e[`${r}Channel`] = Mo(Do(e[r])));
}
function K5(e) {
  return typeof e == "number"
    ? `${e}px`
    : typeof e == "string" || typeof e == "function" || Array.isArray(e)
    ? e
    : "8px";
}
const hr = (e) => {
    try {
      return e();
    } catch {}
  },
  Q5 = (e = "mui") => y5(e);
function mp(e, r, a, l) {
  if (!r) return;
  r = r === !0 ? {} : r;
  const s = l === "dark" ? "dark" : "light";
  if (!a) {
    e[l] = F5({
      ...r,
      palette: { mode: s, ...(r == null ? void 0 : r.palette) },
    });
    return;
  }
  const { palette: u, ...f } = qp({
    ...a,
    palette: { mode: s, ...(r == null ? void 0 : r.palette) },
  });
  return (
    (e[l] = {
      ...r,
      palette: u,
      opacity: { ...dS(s), ...(r == null ? void 0 : r.opacity) },
      overlays: (r == null ? void 0 : r.overlays) || pS(s),
    }),
    f
  );
}
function W5(e = {}, ...r) {
  const {
      colorSchemes: a = { light: !0 },
      defaultColorScheme: l,
      disableCssColorScheme: s = !1,
      cssVarPrefix: u = "mui",
      shouldSkipGeneratingVar: f = G5,
      colorSchemeSelector: p = a.light && a.dark ? "media" : void 0,
      rootSelector: m = ":root",
      ...h
    } = e,
    g = Object.keys(a)[0],
    v = l || (a.light && g !== "light" ? "light" : g),
    S = Q5(u),
    { [v]: R, light: b, dark: x, ...T } = a,
    _ = { ...T };
  let M = R;
  if (
    (((v === "dark" && !("dark" in a)) || (v === "light" && !("light" in a))) &&
      (M = !0),
    !M)
  )
    throw new Error(Kr(21, v));
  const A = mp(_, M, h, v);
  b && !_.light && mp(_, b, void 0, "light"),
    x && !_.dark && mp(_, x, void 0, "dark");
  let D = {
    defaultColorScheme: v,
    ...A,
    cssVarPrefix: u,
    colorSchemeSelector: p,
    rootSelector: m,
    getCssVar: S,
    colorSchemes: _,
    font: { ..._5(A.typography), ...A.font },
    spacing: K5(h.spacing),
  };
  Object.keys(D.colorSchemes).forEach((G) => {
    const E = D.colorSchemes[G].palette,
      I = (X) => {
        const J = X.split("-"),
          oe = J[1],
          ee = J[2];
        return S(X, E[oe][ee]);
      };
    if (
      (E.mode === "light" &&
        (Z(E.common, "background", "#fff"),
        Z(E.common, "onBackground", "#000")),
      E.mode === "dark" &&
        (Z(E.common, "background", "#000"),
        Z(E.common, "onBackground", "#fff")),
      X5(E, [
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
      E.mode === "light")
    ) {
      Z(E.Alert, "errorColor", ut(E.error.light, 0.6)),
        Z(E.Alert, "infoColor", ut(E.info.light, 0.6)),
        Z(E.Alert, "successColor", ut(E.success.light, 0.6)),
        Z(E.Alert, "warningColor", ut(E.warning.light, 0.6)),
        Z(E.Alert, "errorFilledBg", I("palette-error-main")),
        Z(E.Alert, "infoFilledBg", I("palette-info-main")),
        Z(E.Alert, "successFilledBg", I("palette-success-main")),
        Z(E.Alert, "warningFilledBg", I("palette-warning-main")),
        Z(
          E.Alert,
          "errorFilledColor",
          hr(() => E.getContrastText(E.error.main))
        ),
        Z(
          E.Alert,
          "infoFilledColor",
          hr(() => E.getContrastText(E.info.main))
        ),
        Z(
          E.Alert,
          "successFilledColor",
          hr(() => E.getContrastText(E.success.main))
        ),
        Z(
          E.Alert,
          "warningFilledColor",
          hr(() => E.getContrastText(E.warning.main))
        ),
        Z(E.Alert, "errorStandardBg", ct(E.error.light, 0.9)),
        Z(E.Alert, "infoStandardBg", ct(E.info.light, 0.9)),
        Z(E.Alert, "successStandardBg", ct(E.success.light, 0.9)),
        Z(E.Alert, "warningStandardBg", ct(E.warning.light, 0.9)),
        Z(E.Alert, "errorIconColor", I("palette-error-main")),
        Z(E.Alert, "infoIconColor", I("palette-info-main")),
        Z(E.Alert, "successIconColor", I("palette-success-main")),
        Z(E.Alert, "warningIconColor", I("palette-warning-main")),
        Z(E.AppBar, "defaultBg", I("palette-grey-100")),
        Z(E.Avatar, "defaultBg", I("palette-grey-400")),
        Z(E.Button, "inheritContainedBg", I("palette-grey-300")),
        Z(E.Button, "inheritContainedHoverBg", I("palette-grey-A100")),
        Z(E.Chip, "defaultBorder", I("palette-grey-400")),
        Z(E.Chip, "defaultAvatarColor", I("palette-grey-700")),
        Z(E.Chip, "defaultIconColor", I("palette-grey-700")),
        Z(E.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"),
        Z(E.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"),
        Z(E.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"),
        Z(E.LinearProgress, "primaryBg", ct(E.primary.main, 0.62)),
        Z(E.LinearProgress, "secondaryBg", ct(E.secondary.main, 0.62)),
        Z(E.LinearProgress, "errorBg", ct(E.error.main, 0.62)),
        Z(E.LinearProgress, "infoBg", ct(E.info.main, 0.62)),
        Z(E.LinearProgress, "successBg", ct(E.success.main, 0.62)),
        Z(E.LinearProgress, "warningBg", ct(E.warning.main, 0.62)),
        Z(E.Skeleton, "bg", `rgba(${I("palette-text-primaryChannel")} / 0.11)`),
        Z(E.Slider, "primaryTrack", ct(E.primary.main, 0.62)),
        Z(E.Slider, "secondaryTrack", ct(E.secondary.main, 0.62)),
        Z(E.Slider, "errorTrack", ct(E.error.main, 0.62)),
        Z(E.Slider, "infoTrack", ct(E.info.main, 0.62)),
        Z(E.Slider, "successTrack", ct(E.success.main, 0.62)),
        Z(E.Slider, "warningTrack", ct(E.warning.main, 0.62));
      const X = Eu(E.background.default, 0.8);
      Z(E.SnackbarContent, "bg", X),
        Z(
          E.SnackbarContent,
          "color",
          hr(() => E.getContrastText(X))
        ),
        Z(E.SpeedDialAction, "fabHoverBg", Eu(E.background.paper, 0.15)),
        Z(E.StepConnector, "border", I("palette-grey-400")),
        Z(E.StepContent, "border", I("palette-grey-400")),
        Z(E.Switch, "defaultColor", I("palette-common-white")),
        Z(E.Switch, "defaultDisabledColor", I("palette-grey-100")),
        Z(E.Switch, "primaryDisabledColor", ct(E.primary.main, 0.62)),
        Z(E.Switch, "secondaryDisabledColor", ct(E.secondary.main, 0.62)),
        Z(E.Switch, "errorDisabledColor", ct(E.error.main, 0.62)),
        Z(E.Switch, "infoDisabledColor", ct(E.info.main, 0.62)),
        Z(E.Switch, "successDisabledColor", ct(E.success.main, 0.62)),
        Z(E.Switch, "warningDisabledColor", ct(E.warning.main, 0.62)),
        Z(E.TableCell, "border", ct(xu(E.divider, 1), 0.88)),
        Z(E.Tooltip, "bg", xu(E.grey[700], 0.92));
    }
    if (E.mode === "dark") {
      Z(E.Alert, "errorColor", ct(E.error.light, 0.6)),
        Z(E.Alert, "infoColor", ct(E.info.light, 0.6)),
        Z(E.Alert, "successColor", ct(E.success.light, 0.6)),
        Z(E.Alert, "warningColor", ct(E.warning.light, 0.6)),
        Z(E.Alert, "errorFilledBg", I("palette-error-dark")),
        Z(E.Alert, "infoFilledBg", I("palette-info-dark")),
        Z(E.Alert, "successFilledBg", I("palette-success-dark")),
        Z(E.Alert, "warningFilledBg", I("palette-warning-dark")),
        Z(
          E.Alert,
          "errorFilledColor",
          hr(() => E.getContrastText(E.error.dark))
        ),
        Z(
          E.Alert,
          "infoFilledColor",
          hr(() => E.getContrastText(E.info.dark))
        ),
        Z(
          E.Alert,
          "successFilledColor",
          hr(() => E.getContrastText(E.success.dark))
        ),
        Z(
          E.Alert,
          "warningFilledColor",
          hr(() => E.getContrastText(E.warning.dark))
        ),
        Z(E.Alert, "errorStandardBg", ut(E.error.light, 0.9)),
        Z(E.Alert, "infoStandardBg", ut(E.info.light, 0.9)),
        Z(E.Alert, "successStandardBg", ut(E.success.light, 0.9)),
        Z(E.Alert, "warningStandardBg", ut(E.warning.light, 0.9)),
        Z(E.Alert, "errorIconColor", I("palette-error-main")),
        Z(E.Alert, "infoIconColor", I("palette-info-main")),
        Z(E.Alert, "successIconColor", I("palette-success-main")),
        Z(E.Alert, "warningIconColor", I("palette-warning-main")),
        Z(E.AppBar, "defaultBg", I("palette-grey-900")),
        Z(E.AppBar, "darkBg", I("palette-background-paper")),
        Z(E.AppBar, "darkColor", I("palette-text-primary")),
        Z(E.Avatar, "defaultBg", I("palette-grey-600")),
        Z(E.Button, "inheritContainedBg", I("palette-grey-800")),
        Z(E.Button, "inheritContainedHoverBg", I("palette-grey-700")),
        Z(E.Chip, "defaultBorder", I("palette-grey-700")),
        Z(E.Chip, "defaultAvatarColor", I("palette-grey-300")),
        Z(E.Chip, "defaultIconColor", I("palette-grey-300")),
        Z(E.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"),
        Z(E.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"),
        Z(E.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"),
        Z(E.LinearProgress, "primaryBg", ut(E.primary.main, 0.5)),
        Z(E.LinearProgress, "secondaryBg", ut(E.secondary.main, 0.5)),
        Z(E.LinearProgress, "errorBg", ut(E.error.main, 0.5)),
        Z(E.LinearProgress, "infoBg", ut(E.info.main, 0.5)),
        Z(E.LinearProgress, "successBg", ut(E.success.main, 0.5)),
        Z(E.LinearProgress, "warningBg", ut(E.warning.main, 0.5)),
        Z(E.Skeleton, "bg", `rgba(${I("palette-text-primaryChannel")} / 0.13)`),
        Z(E.Slider, "primaryTrack", ut(E.primary.main, 0.5)),
        Z(E.Slider, "secondaryTrack", ut(E.secondary.main, 0.5)),
        Z(E.Slider, "errorTrack", ut(E.error.main, 0.5)),
        Z(E.Slider, "infoTrack", ut(E.info.main, 0.5)),
        Z(E.Slider, "successTrack", ut(E.success.main, 0.5)),
        Z(E.Slider, "warningTrack", ut(E.warning.main, 0.5));
      const X = Eu(E.background.default, 0.98);
      Z(E.SnackbarContent, "bg", X),
        Z(
          E.SnackbarContent,
          "color",
          hr(() => E.getContrastText(X))
        ),
        Z(E.SpeedDialAction, "fabHoverBg", Eu(E.background.paper, 0.15)),
        Z(E.StepConnector, "border", I("palette-grey-600")),
        Z(E.StepContent, "border", I("palette-grey-600")),
        Z(E.Switch, "defaultColor", I("palette-grey-300")),
        Z(E.Switch, "defaultDisabledColor", I("palette-grey-600")),
        Z(E.Switch, "primaryDisabledColor", ut(E.primary.main, 0.55)),
        Z(E.Switch, "secondaryDisabledColor", ut(E.secondary.main, 0.55)),
        Z(E.Switch, "errorDisabledColor", ut(E.error.main, 0.55)),
        Z(E.Switch, "infoDisabledColor", ut(E.info.main, 0.55)),
        Z(E.Switch, "successDisabledColor", ut(E.success.main, 0.55)),
        Z(E.Switch, "warningDisabledColor", ut(E.warning.main, 0.55)),
        Z(E.TableCell, "border", ut(xu(E.divider, 1), 0.68)),
        Z(E.Tooltip, "bg", xu(E.grey[700], 0.92));
    }
    Fr(E.background, "default"),
      Fr(E.background, "paper"),
      Fr(E.common, "background"),
      Fr(E.common, "onBackground"),
      Fr(E, "divider"),
      Object.keys(E).forEach((X) => {
        const J = E[X];
        X !== "tonalOffset" &&
          J &&
          typeof J == "object" &&
          (J.main && Z(E[X], "mainChannel", Mo(Do(J.main))),
          J.light && Z(E[X], "lightChannel", Mo(Do(J.light))),
          J.dark && Z(E[X], "darkChannel", Mo(Do(J.dark))),
          J.contrastText &&
            Z(E[X], "contrastTextChannel", Mo(Do(J.contrastText))),
          X === "text" && (Fr(E[X], "primary"), Fr(E[X], "secondary")),
          X === "action" &&
            (J.active && Fr(E[X], "active"),
            J.selected && Fr(E[X], "selected")));
      });
  }),
    (D = r.reduce((G, E) => on(G, E), D));
  const O = {
      prefix: u,
      disableCssColorScheme: s,
      shouldSkipGeneratingVar: f,
      getSelector: I5(D),
    },
    { vars: j, generateThemeVars: L, generateStyleSheets: re } = S5(D, O);
  return (
    (D.vars = j),
    Object.entries(D.colorSchemes[D.defaultColorScheme]).forEach(([G, E]) => {
      D[G] = E;
    }),
    (D.generateThemeVars = L),
    (D.generateStyleSheets = re),
    (D.generateSpacing = function () {
      return X1(h.spacing, Mh(this));
    }),
    (D.getColorSchemeSelector = x5(p)),
    (D.spacing = D.generateSpacing()),
    (D.shouldSkipGeneratingVar = f),
    (D.unstable_sxConfig = {
      ...as,
      ...(h == null ? void 0 : h.unstable_sxConfig),
    }),
    (D.unstable_sx = function (E) {
      return si({ sx: E, theme: this });
    }),
    (D.toRuntimeSource = fS),
    D
  );
}
function Wv(e, r, a) {
  e.colorSchemes &&
    a &&
    (e.colorSchemes[r] = {
      ...(a !== !0 && a),
      palette: $h({ ...(a === !0 ? {} : a.palette), mode: r }),
    });
}
function hS(e = {}, ...r) {
  const {
      palette: a,
      cssVariables: l = !1,
      colorSchemes: s = a ? void 0 : { light: !0 },
      defaultColorScheme: u = a == null ? void 0 : a.mode,
      ...f
    } = e,
    p = u || "light",
    m = s == null ? void 0 : s[p],
    h = {
      ...s,
      ...(a
        ? { [p]: { ...(typeof m != "boolean" && m), palette: a } }
        : void 0),
    };
  if (l === !1) {
    if (!("colorSchemes" in e)) return qp(e, ...r);
    let g = a;
    "palette" in e ||
      (h[p] &&
        (h[p] !== !0
          ? (g = h[p].palette)
          : p === "dark" && (g = { mode: "dark" })));
    const v = qp({ ...e, palette: g }, ...r);
    return (
      (v.defaultColorScheme = p),
      (v.colorSchemes = h),
      v.palette.mode === "light" &&
        ((v.colorSchemes.light = {
          ...(h.light !== !0 && h.light),
          palette: v.palette,
        }),
        Wv(v, "dark", h.dark)),
      v.palette.mode === "dark" &&
        ((v.colorSchemes.dark = {
          ...(h.dark !== !0 && h.dark),
          palette: v.palette,
        }),
        Wv(v, "light", h.light)),
      v
    );
  }
  return (
    !a && !("light" in h) && p === "light" && (h.light = !0),
    W5(
      {
        ...f,
        colorSchemes: h,
        defaultColorScheme: p,
        ...(typeof l != "boolean" && l),
      },
      ...r
    )
  );
}
const jh = hS();
function Hh() {
  const e = Nh(jh);
  return e[vc] || e;
}
function mS(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ir = (e) => mS(e) && e !== "classes",
  Ee = Q2({ themeId: vc, defaultTheme: jh, rootShouldForwardProp: ir });
function Z5(e) {
  return $.jsx(q2, { ...e, defaultTheme: jh, themeId: vc });
}
function J5(e) {
  return function (a) {
    return $.jsx(Z5, {
      styles: typeof e == "function" ? (l) => e({ theme: l, ...a }) : e,
    });
  };
}
function eO() {
  return K1;
}
const vt = g5;
function gt(e) {
  return m5(e);
}
function tO(e) {
  return dt("MuiSvgIcon", e);
}
it("MuiSvgIcon", [
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
const nO = (e) => {
    const { color: r, fontSize: a, classes: l } = e,
      s = {
        root: ["root", r !== "inherit" && `color${_e(r)}`, `fontSize${_e(a)}`],
      };
    return pt(s, tO, l);
  },
  rO = Ee("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: a } = e;
      return [
        r.root,
        a.color !== "inherit" && r[`color${_e(a.color)}`],
        r[`fontSize${_e(a.fontSize)}`],
      ];
    },
  })(
    vt(({ theme: e }) => {
      var r, a, l, s, u, f, p, m, h, g, v, S, R, b;
      return {
        userSelect: "none",
        width: "1em",
        height: "1em",
        display: "inline-block",
        flexShrink: 0,
        transition:
          (s = (r = e.transitions) == null ? void 0 : r.create) == null
            ? void 0
            : s.call(r, "fill", {
                duration:
                  (l =
                    (a = (e.vars ?? e).transitions) == null
                      ? void 0
                      : a.duration) == null
                    ? void 0
                    : l.shorter,
              }),
        variants: [
          { props: (x) => !x.hasSvgAsChild, style: { fill: "currentColor" } },
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
                ((m = (p = e.typography) == null ? void 0 : p.pxToRem) == null
                  ? void 0
                  : m.call(p, 24)) || "1.5rem",
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
            .filter(([, x]) => x && x.main)
            .map(([x]) => {
              var T, _;
              return {
                props: { color: x },
                style: {
                  color:
                    (_ = (T = (e.vars ?? e).palette) == null ? void 0 : T[x]) ==
                    null
                      ? void 0
                      : _.main,
                },
              };
            }),
          {
            props: { color: "action" },
            style: {
              color:
                (S = (v = (e.vars ?? e).palette) == null ? void 0 : v.action) ==
                null
                  ? void 0
                  : S.active,
            },
          },
          {
            props: { color: "disabled" },
            style: {
              color:
                (b = (R = (e.vars ?? e).palette) == null ? void 0 : R.action) ==
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
  Fp = C.forwardRef(function (r, a) {
    const l = gt({ props: r, name: "MuiSvgIcon" }),
      {
        children: s,
        className: u,
        color: f = "inherit",
        component: p = "svg",
        fontSize: m = "medium",
        htmlColor: h,
        inheritViewBox: g = !1,
        titleAccess: v,
        viewBox: S = "0 0 24 24",
        ...R
      } = l,
      b = C.isValidElement(s) && s.type === "svg",
      x = {
        ...l,
        color: f,
        component: p,
        fontSize: m,
        instanceFontSize: r.fontSize,
        inheritViewBox: g,
        viewBox: S,
        hasSvgAsChild: b,
      },
      T = {};
    g || (T.viewBox = S);
    const _ = nO(x);
    return $.jsxs(rO, {
      as: p,
      className: je(_.root, u),
      focusable: "false",
      color: h,
      "aria-hidden": v ? void 0 : !0,
      role: v ? "img" : void 0,
      ref: a,
      ...T,
      ...R,
      ...(b && s.props),
      ownerState: x,
      children: [
        b ? s.props.children : s,
        v ? $.jsx("title", { children: v }) : null,
      ],
    });
  });
Fp.muiName = "SvgIcon";
function zc(e, r) {
  function a(l, s) {
    return $.jsx(Fp, { "data-testid": `${r}Icon`, ref: s, ...l, children: e });
  }
  return (a.muiName = Fp.muiName), C.memo(C.forwardRef(a));
}
function gS(e, r) {
  if (e == null) return {};
  var a = {};
  for (var l in e)
    if ({}.hasOwnProperty.call(e, l)) {
      if (r.indexOf(l) !== -1) continue;
      a[l] = e[l];
    }
  return a;
}
function Gp(e, r) {
  return (
    (Gp = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (a, l) {
          return (a.__proto__ = l), a;
        }),
    Gp(e, r)
  );
}
function yS(e, r) {
  (e.prototype = Object.create(r.prototype)),
    (e.prototype.constructor = e),
    Gp(e, r);
}
var vS = Vb();
const Ru = qb(vS),
  Zv = { disabled: !1 },
  Wu = Ne.createContext(null);
var aO = function (r) {
    return r.scrollTop;
  },
  zo = "unmounted",
  Wa = "exited",
  Za = "entering",
  Ji = "entered",
  Yp = "exiting",
  Tr = (function (e) {
    yS(r, e);
    function r(l, s) {
      var u;
      u = e.call(this, l, s) || this;
      var f = s,
        p = f && !f.isMounting ? l.enter : l.appear,
        m;
      return (
        (u.appearStatus = null),
        l.in
          ? p
            ? ((m = Wa), (u.appearStatus = Za))
            : (m = Ji)
          : l.unmountOnExit || l.mountOnEnter
          ? (m = zo)
          : (m = Wa),
        (u.state = { status: m }),
        (u.nextCallback = null),
        u
      );
    }
    r.getDerivedStateFromProps = function (s, u) {
      var f = s.in;
      return f && u.status === zo ? { status: Wa } : null;
    };
    var a = r.prototype;
    return (
      (a.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (a.componentDidUpdate = function (s) {
        var u = null;
        if (s !== this.props) {
          var f = this.state.status;
          this.props.in
            ? f !== Za && f !== Ji && (u = Za)
            : (f === Za || f === Ji) && (u = Yp);
        }
        this.updateStatus(!1, u);
      }),
      (a.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (a.getTimeouts = function () {
        var s = this.props.timeout,
          u,
          f,
          p;
        return (
          (u = f = p = s),
          s != null &&
            typeof s != "number" &&
            ((u = s.exit),
            (f = s.enter),
            (p = s.appear !== void 0 ? s.appear : f)),
          { exit: u, enter: f, appear: p }
        );
      }),
      (a.updateStatus = function (s, u) {
        if ((s === void 0 && (s = !1), u !== null))
          if ((this.cancelNextCallback(), u === Za)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var f = this.props.nodeRef
                ? this.props.nodeRef.current
                : Ru.findDOMNode(this);
              f && aO(f);
            }
            this.performEnter(s);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === Wa &&
            this.setState({ status: zo });
      }),
      (a.performEnter = function (s) {
        var u = this,
          f = this.props.enter,
          p = this.context ? this.context.isMounting : s,
          m = this.props.nodeRef ? [p] : [Ru.findDOMNode(this), p],
          h = m[0],
          g = m[1],
          v = this.getTimeouts(),
          S = p ? v.appear : v.enter;
        if ((!s && !f) || Zv.disabled) {
          this.safeSetState({ status: Ji }, function () {
            u.props.onEntered(h);
          });
          return;
        }
        this.props.onEnter(h, g),
          this.safeSetState({ status: Za }, function () {
            u.props.onEntering(h, g),
              u.onTransitionEnd(S, function () {
                u.safeSetState({ status: Ji }, function () {
                  u.props.onEntered(h, g);
                });
              });
          });
      }),
      (a.performExit = function () {
        var s = this,
          u = this.props.exit,
          f = this.getTimeouts(),
          p = this.props.nodeRef ? void 0 : Ru.findDOMNode(this);
        if (!u || Zv.disabled) {
          this.safeSetState({ status: Wa }, function () {
            s.props.onExited(p);
          });
          return;
        }
        this.props.onExit(p),
          this.safeSetState({ status: Yp }, function () {
            s.props.onExiting(p),
              s.onTransitionEnd(f.exit, function () {
                s.safeSetState({ status: Wa }, function () {
                  s.props.onExited(p);
                });
              });
          });
      }),
      (a.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (a.safeSetState = function (s, u) {
        (u = this.setNextCallback(u)), this.setState(s, u);
      }),
      (a.setNextCallback = function (s) {
        var u = this,
          f = !0;
        return (
          (this.nextCallback = function (p) {
            f && ((f = !1), (u.nextCallback = null), s(p));
          }),
          (this.nextCallback.cancel = function () {
            f = !1;
          }),
          this.nextCallback
        );
      }),
      (a.onTransitionEnd = function (s, u) {
        this.setNextCallback(u);
        var f = this.props.nodeRef
            ? this.props.nodeRef.current
            : Ru.findDOMNode(this),
          p = s == null && !this.props.addEndListener;
        if (!f || p) {
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
        s != null && setTimeout(this.nextCallback, s);
      }),
      (a.render = function () {
        var s = this.state.status;
        if (s === zo) return null;
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
        var p = gS(u, [
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
        return Ne.createElement(
          Wu.Provider,
          { value: null },
          typeof f == "function"
            ? f(s, p)
            : Ne.cloneElement(Ne.Children.only(f), p)
        );
      }),
      r
    );
  })(Ne.Component);
Tr.contextType = Wu;
Tr.propTypes = {};
function Qi() {}
Tr.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Qi,
  onEntering: Qi,
  onEntered: Qi,
  onExit: Qi,
  onExiting: Qi,
  onExited: Qi,
};
Tr.UNMOUNTED = zo;
Tr.EXITED = Wa;
Tr.ENTERING = Za;
Tr.ENTERED = Ji;
Tr.EXITING = Yp;
function iO(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Ph(e, r) {
  var a = function (u) {
      return r && C.isValidElement(u) ? r(u) : u;
    },
    l = Object.create(null);
  return (
    e &&
      C.Children.map(e, function (s) {
        return s;
      }).forEach(function (s) {
        l[s.key] = a(s);
      }),
    l
  );
}
function lO(e, r) {
  (e = e || {}), (r = r || {});
  function a(g) {
    return g in r ? r[g] : e[g];
  }
  var l = Object.create(null),
    s = [];
  for (var u in e) u in r ? s.length && ((l[u] = s), (s = [])) : s.push(u);
  var f,
    p = {};
  for (var m in r) {
    if (l[m])
      for (f = 0; f < l[m].length; f++) {
        var h = l[m][f];
        p[l[m][f]] = a(h);
      }
    p[m] = a(m);
  }
  for (f = 0; f < s.length; f++) p[s[f]] = a(s[f]);
  return p;
}
function ei(e, r, a) {
  return a[r] != null ? a[r] : e.props[r];
}
function oO(e, r) {
  return Ph(e.children, function (a) {
    return C.cloneElement(a, {
      onExited: r.bind(null, a),
      in: !0,
      appear: ei(a, "appear", e),
      enter: ei(a, "enter", e),
      exit: ei(a, "exit", e),
    });
  });
}
function sO(e, r, a) {
  var l = Ph(e.children),
    s = lO(r, l);
  return (
    Object.keys(s).forEach(function (u) {
      var f = s[u];
      if (C.isValidElement(f)) {
        var p = u in r,
          m = u in l,
          h = r[u],
          g = C.isValidElement(h) && !h.props.in;
        m && (!p || g)
          ? (s[u] = C.cloneElement(f, {
              onExited: a.bind(null, f),
              in: !0,
              exit: ei(f, "exit", e),
              enter: ei(f, "enter", e),
            }))
          : !m && p && !g
          ? (s[u] = C.cloneElement(f, { in: !1 }))
          : m &&
            p &&
            C.isValidElement(h) &&
            (s[u] = C.cloneElement(f, {
              onExited: a.bind(null, f),
              in: h.props.in,
              exit: ei(f, "exit", e),
              enter: ei(f, "enter", e),
            }));
      }
    }),
    s
  );
}
var uO =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (r) {
        return e[r];
      });
    },
  cO = {
    component: "div",
    childFactory: function (r) {
      return r;
    },
  },
  qh = (function (e) {
    yS(r, e);
    function r(l, s) {
      var u;
      u = e.call(this, l, s) || this;
      var f = u.handleExited.bind(iO(u));
      return (
        (u.state = {
          contextValue: { isMounting: !0 },
          handleExited: f,
          firstRender: !0,
        }),
        u
      );
    }
    var a = r.prototype;
    return (
      (a.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (a.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (r.getDerivedStateFromProps = function (s, u) {
        var f = u.children,
          p = u.handleExited,
          m = u.firstRender;
        return { children: m ? oO(s, p) : sO(s, f, p), firstRender: !1 };
      }),
      (a.handleExited = function (s, u) {
        var f = Ph(this.props.children);
        s.key in f ||
          (s.props.onExited && s.props.onExited(u),
          this.mounted &&
            this.setState(function (p) {
              var m = Iu({}, p.children);
              return delete m[s.key], { children: m };
            }));
      }),
      (a.render = function () {
        var s = this.props,
          u = s.component,
          f = s.childFactory,
          p = gS(s, ["component", "childFactory"]),
          m = this.state.contextValue,
          h = uO(this.state.children).map(f);
        return (
          delete p.appear,
          delete p.enter,
          delete p.exit,
          u === null
            ? Ne.createElement(Wu.Provider, { value: m }, h)
            : Ne.createElement(
                Wu.Provider,
                { value: m },
                Ne.createElement(u, p, h)
              )
        );
      }),
      r
    );
  })(Ne.Component);
qh.propTypes = {};
qh.defaultProps = cO;
const bS = (e) => e.scrollTop;
function Zu(e, r) {
  const { timeout: a, easing: l, style: s = {} } = e;
  return {
    duration:
      s.transitionDuration ?? (typeof a == "number" ? a : a[r.mode] || 0),
    easing:
      s.transitionTimingFunction ?? (typeof l == "object" ? l[r.mode] : l),
    delay: s.transitionDelay,
  };
}
function fO(e) {
  return dt("MuiPaper", e);
}
it("MuiPaper", [
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
const dO = (e) => {
    const { square: r, elevation: a, variant: l, classes: s } = e,
      u = {
        root: [
          "root",
          l,
          !r && "rounded",
          l === "elevation" && `elevation${a}`,
        ],
      };
    return pt(u, fO, s);
  },
  pO = Ee("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: a } = e;
      return [
        r.root,
        r[a.variant],
        !a.square && r.rounded,
        a.variant === "elevation" && r[`elevation${a.elevation}`],
      ];
    },
  })(
    vt(({ theme: e }) => ({
      backgroundColor: (e.vars || e).palette.background.paper,
      color: (e.vars || e).palette.text.primary,
      transition: e.transitions.create("box-shadow"),
      variants: [
        {
          props: ({ ownerState: r }) => !r.square,
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
  SS = C.forwardRef(function (r, a) {
    var R;
    const l = gt({ props: r, name: "MuiPaper" }),
      s = Hh(),
      {
        className: u,
        component: f = "div",
        elevation: p = 1,
        square: m = !1,
        variant: h = "elevation",
        ...g
      } = l,
      v = { ...l, component: f, elevation: p, square: m, variant: h },
      S = dO(v);
    return $.jsx(pO, {
      as: f,
      ownerState: v,
      className: je(S.root, u),
      ref: a,
      ...g,
      style: {
        ...(h === "elevation" && {
          "--Paper-shadow": (s.vars || s).shadows[p],
          ...(s.vars && {
            "--Paper-overlay": (R = s.vars.overlays) == null ? void 0 : R[p],
          }),
          ...(!s.vars &&
            s.palette.mode === "dark" && {
              "--Paper-overlay": `linear-gradient(${Sr("#fff", Vp(p))}, ${Sr(
                "#fff",
                Vp(p)
              )})`,
            }),
        }),
        ...g.style,
      },
    });
  });
function Yn(e, r) {
  const {
      className: a,
      elementType: l,
      ownerState: s,
      externalForwardedProps: u,
      internalForwardedProps: f,
      shouldForwardComponentProp: p = !1,
      ...m
    } = r,
    {
      component: h,
      slots: g = { [e]: void 0 },
      slotProps: v = { [e]: void 0 },
      ...S
    } = u,
    R = g[e] || l,
    b = sS(v[e], s),
    {
      props: { component: x, ...T },
      internalRef: _,
    } = oS({
      className: a,
      ...m,
      externalForwardedProps: e === "root" ? S : void 0,
      externalSlotProps: b,
    }),
    M = sn(_, b == null ? void 0 : b.ref, r.ref),
    A = e === "root" ? x || h : x,
    D = iS(
      R,
      {
        ...(e === "root" && !h && !g[e] && f),
        ...(e !== "root" && !g[e] && f),
        ...T,
        ...(A && !p && { as: A }),
        ...(A && p && { component: A }),
        ref: M,
      },
      s
    );
  return [R, D];
}
class Ju {
  constructor() {
    yo(this, "mountEffect", () => {
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
    return new Ju();
  }
  static use() {
    const r = nS(Ju.create).current,
      [a, l] = C.useState(!1);
    return (
      (r.shouldMount = a),
      (r.setShouldMount = l),
      C.useEffect(r.mountEffect, [a]),
      r
    );
  }
  mount() {
    return (
      this.mounted ||
        ((this.mounted = mO()),
        (this.shouldMount = !0),
        this.setShouldMount(this.shouldMount)),
      this.mounted
    );
  }
  start(...r) {
    this.mount().then(() => {
      var a;
      return (a = this.ref.current) == null ? void 0 : a.start(...r);
    });
  }
  stop(...r) {
    this.mount().then(() => {
      var a;
      return (a = this.ref.current) == null ? void 0 : a.stop(...r);
    });
  }
  pulsate(...r) {
    this.mount().then(() => {
      var a;
      return (a = this.ref.current) == null ? void 0 : a.pulsate(...r);
    });
  }
}
function hO() {
  return Ju.use();
}
function mO() {
  let e, r;
  const a = new Promise((l, s) => {
    (e = l), (r = s);
  });
  return (a.resolve = e), (a.reject = r), a;
}
function gO(e) {
  const {
      className: r,
      classes: a,
      pulsate: l = !1,
      rippleX: s,
      rippleY: u,
      rippleSize: f,
      in: p,
      onExited: m,
      timeout: h,
    } = e,
    [g, v] = C.useState(!1),
    S = je(r, a.ripple, a.rippleVisible, l && a.ripplePulsate),
    R = { width: f, height: f, top: -(f / 2) + u, left: -(f / 2) + s },
    b = je(a.child, g && a.childLeaving, l && a.childPulsate);
  return (
    !p && !g && v(!0),
    C.useEffect(() => {
      if (!p && m != null) {
        const x = setTimeout(m, h);
        return () => {
          clearTimeout(x);
        };
      }
    }, [m, p, h]),
    $.jsx("span", {
      className: S,
      style: R,
      children: $.jsx("span", { className: b }),
    })
  );
}
const Vn = it("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  Ip = 550,
  yO = 80,
  vO = ts`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
  bO = ts`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
  SO = ts`
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
  xO = Ee("span", { name: "MuiTouchRipple", slot: "Root" })({
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
  EO = Ee(gO, { name: "MuiTouchRipple", slot: "Ripple" })`
  opacity: 0;
  position: absolute;

  &.${Vn.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${vO};
    animation-duration: ${Ip}ms;
    animation-timing-function: ${({ theme: e }) =>
      e.transitions.easing.easeInOut};
  }

  &.${Vn.ripplePulsate} {
    animation-duration: ${({ theme: e }) => e.transitions.duration.shorter}ms;
  }

  & .${Vn.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Vn.childLeaving} {
    opacity: 0;
    animation-name: ${bO};
    animation-duration: ${Ip}ms;
    animation-timing-function: ${({ theme: e }) =>
      e.transitions.easing.easeInOut};
  }

  & .${Vn.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${SO};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: e }) =>
      e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,
  RO = C.forwardRef(function (r, a) {
    const l = gt({ props: r, name: "MuiTouchRipple" }),
      { center: s = !1, classes: u = {}, className: f, ...p } = l,
      [m, h] = C.useState([]),
      g = C.useRef(0),
      v = C.useRef(null);
    C.useEffect(() => {
      v.current && (v.current(), (v.current = null));
    }, [m]);
    const S = C.useRef(!1),
      R = rS(),
      b = C.useRef(null),
      x = C.useRef(null),
      T = C.useCallback(
        (D) => {
          const {
            pulsate: O,
            rippleX: j,
            rippleY: L,
            rippleSize: re,
            cb: G,
          } = D;
          h((E) => [
            ...E,
            $.jsx(
              EO,
              {
                classes: {
                  ripple: je(u.ripple, Vn.ripple),
                  rippleVisible: je(u.rippleVisible, Vn.rippleVisible),
                  ripplePulsate: je(u.ripplePulsate, Vn.ripplePulsate),
                  child: je(u.child, Vn.child),
                  childLeaving: je(u.childLeaving, Vn.childLeaving),
                  childPulsate: je(u.childPulsate, Vn.childPulsate),
                },
                timeout: Ip,
                pulsate: O,
                rippleX: j,
                rippleY: L,
                rippleSize: re,
              },
              g.current
            ),
          ]),
            (g.current += 1),
            (v.current = G);
        },
        [u]
      ),
      _ = C.useCallback(
        (D = {}, O = {}, j = () => {}) => {
          const {
            pulsate: L = !1,
            center: re = s || O.pulsate,
            fakeElement: G = !1,
          } = O;
          if ((D == null ? void 0 : D.type) === "mousedown" && S.current) {
            S.current = !1;
            return;
          }
          (D == null ? void 0 : D.type) === "touchstart" && (S.current = !0);
          const E = G ? null : x.current,
            I = E
              ? E.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let X, J, oe;
          if (
            re ||
            D === void 0 ||
            (D.clientX === 0 && D.clientY === 0) ||
            (!D.clientX && !D.touches)
          )
            (X = Math.round(I.width / 2)), (J = Math.round(I.height / 2));
          else {
            const { clientX: ee, clientY: H } =
              D.touches && D.touches.length > 0 ? D.touches[0] : D;
            (X = Math.round(ee - I.left)), (J = Math.round(H - I.top));
          }
          if (re)
            (oe = Math.sqrt((2 * I.width ** 2 + I.height ** 2) / 3)),
              oe % 2 === 0 && (oe += 1);
          else {
            const ee =
                Math.max(Math.abs((E ? E.clientWidth : 0) - X), X) * 2 + 2,
              H = Math.max(Math.abs((E ? E.clientHeight : 0) - J), J) * 2 + 2;
            oe = Math.sqrt(ee ** 2 + H ** 2);
          }
          D != null && D.touches
            ? b.current === null &&
              ((b.current = () => {
                T({
                  pulsate: L,
                  rippleX: X,
                  rippleY: J,
                  rippleSize: oe,
                  cb: j,
                });
              }),
              R.start(yO, () => {
                b.current && (b.current(), (b.current = null));
              }))
            : T({ pulsate: L, rippleX: X, rippleY: J, rippleSize: oe, cb: j });
        },
        [s, T, R]
      ),
      M = C.useCallback(() => {
        _({}, { pulsate: !0 });
      }, [_]),
      A = C.useCallback(
        (D, O) => {
          if (
            (R.clear(),
            (D == null ? void 0 : D.type) === "touchend" && b.current)
          ) {
            b.current(),
              (b.current = null),
              R.start(0, () => {
                A(D, O);
              });
            return;
          }
          (b.current = null),
            h((j) => (j.length > 0 ? j.slice(1) : j)),
            (v.current = O);
        },
        [R]
      );
    return (
      C.useImperativeHandle(a, () => ({ pulsate: M, start: _, stop: A }), [
        M,
        _,
        A,
      ]),
      $.jsx(xO, {
        className: je(Vn.root, u.root, f),
        ref: x,
        ...p,
        children: $.jsx(qh, { component: null, exit: !0, children: m }),
      })
    );
  });
function CO(e) {
  return dt("MuiButtonBase", e);
}
const wO = it("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  TO = (e) => {
    const {
        disabled: r,
        focusVisible: a,
        focusVisibleClassName: l,
        classes: s,
      } = e,
      f = pt({ root: ["root", r && "disabled", a && "focusVisible"] }, CO, s);
    return a && l && (f.root += ` ${l}`), f;
  },
  AO = Ee("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e, r) => r.root,
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
    [`&.${wO.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  xS = C.forwardRef(function (r, a) {
    const l = gt({ props: r, name: "MuiButtonBase" }),
      {
        action: s,
        centerRipple: u = !1,
        children: f,
        className: p,
        component: m = "button",
        disabled: h = !1,
        disableRipple: g = !1,
        disableTouchRipple: v = !1,
        focusRipple: S = !1,
        focusVisibleClassName: R,
        LinkComponent: b = "a",
        onBlur: x,
        onClick: T,
        onContextMenu: _,
        onDragLeave: M,
        onFocus: A,
        onFocusVisible: D,
        onKeyDown: O,
        onKeyUp: j,
        onMouseDown: L,
        onMouseLeave: re,
        onMouseUp: G,
        onTouchEnd: E,
        onTouchMove: I,
        onTouchStart: X,
        tabIndex: J = 0,
        TouchRippleProps: oe,
        touchRippleRef: ee,
        type: H,
        ...ae
      } = l,
      ce = C.useRef(null),
      se = hO(),
      B = sn(se.ref, ee),
      [W, he] = C.useState(!1);
    h && W && he(!1),
      C.useImperativeHandle(
        s,
        () => ({
          focusVisible: () => {
            he(!0), ce.current.focus();
          },
        }),
        []
      );
    const pe = se.shouldMount && !g && !h;
    C.useEffect(() => {
      W && S && !g && se.pulsate();
    }, [g, S, W, se]);
    const ue = Gr(se, "start", L, v),
      ye = Gr(se, "stop", _, v),
      be = Gr(se, "stop", M, v),
      Ue = Gr(se, "stop", G, v),
      Ce = Gr(
        se,
        "stop",
        (Q) => {
          W && Q.preventDefault(), re && re(Q);
        },
        v
      ),
      we = Gr(se, "start", X, v),
      ve = Gr(se, "stop", E, v),
      De = Gr(se, "stop", I, v),
      Ae = Gr(
        se,
        "stop",
        (Q) => {
          Pv(Q.target) || he(!1), x && x(Q);
        },
        !1
      ),
      Ye = rl((Q) => {
        ce.current || (ce.current = Q.currentTarget),
          Pv(Q.target) && (he(!0), D && D(Q)),
          A && A(Q);
      }),
      Be = () => {
        const Q = ce.current;
        return m && m !== "button" && !(Q.tagName === "A" && Q.href);
      },
      Ze = rl((Q) => {
        S &&
          !Q.repeat &&
          W &&
          Q.key === " " &&
          se.stop(Q, () => {
            se.start(Q);
          }),
          Q.target === Q.currentTarget &&
            Be() &&
            Q.key === " " &&
            Q.preventDefault(),
          O && O(Q),
          Q.target === Q.currentTarget &&
            Be() &&
            Q.key === "Enter" &&
            !h &&
            (Q.preventDefault(), T && T(Q));
      }),
      Ot = rl((Q) => {
        S &&
          Q.key === " " &&
          W &&
          !Q.defaultPrevented &&
          se.stop(Q, () => {
            se.pulsate(Q);
          }),
          j && j(Q),
          T &&
            Q.target === Q.currentTarget &&
            Be() &&
            Q.key === " " &&
            !Q.defaultPrevented &&
            T(Q);
      });
    let Bt = m;
    Bt === "button" && (ae.href || ae.to) && (Bt = b);
    const N = {};
    Bt === "button"
      ? ((N.type = H === void 0 ? "button" : H), (N.disabled = h))
      : (!ae.href && !ae.to && (N.role = "button"),
        h && (N["aria-disabled"] = h));
    const q = sn(a, ce),
      Y = {
        ...l,
        centerRipple: u,
        component: m,
        disabled: h,
        disableRipple: g,
        disableTouchRipple: v,
        focusRipple: S,
        tabIndex: J,
        focusVisible: W,
      },
      fe = TO(Y);
    return $.jsxs(AO, {
      as: Bt,
      className: je(fe.root, p),
      ownerState: Y,
      onBlur: Ae,
      onClick: T,
      onContextMenu: ye,
      onFocus: Ye,
      onKeyDown: Ze,
      onKeyUp: Ot,
      onMouseDown: ue,
      onMouseLeave: Ce,
      onMouseUp: Ue,
      onDragLeave: be,
      onTouchEnd: ve,
      onTouchMove: De,
      onTouchStart: we,
      ref: q,
      tabIndex: h ? -1 : J,
      type: H,
      ...N,
      ...ae,
      children: [f, pe ? $.jsx(RO, { ref: B, center: u, ...oe }) : null],
    });
  });
function Gr(e, r, a, l = !1) {
  return rl((s) => (a && a(s), l || e[r](s), !0));
}
function OO(e) {
  return typeof e.main == "string";
}
function _O(e, r = []) {
  if (!OO(e)) return !1;
  for (const a of r)
    if (!e.hasOwnProperty(a) || typeof e[a] != "string") return !1;
  return !0;
}
function Cr(e = []) {
  return ([, r]) => r && _O(r, e);
}
function MO(e) {
  return dt("MuiCircularProgress", e);
}
it("MuiCircularProgress", [
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
const xa = 44,
  Xp = ts`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,
  Kp = ts`
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
  DO =
    typeof Xp != "string"
      ? Ah`
        animation: ${Xp} 1.4s linear infinite;
      `
      : null,
  zO =
    typeof Kp != "string"
      ? Ah`
        animation: ${Kp} 1.4s ease-in-out infinite;
      `
      : null,
  NO = (e) => {
    const { classes: r, variant: a, color: l, disableShrink: s } = e,
      u = {
        root: ["root", a, `color${_e(l)}`],
        svg: ["svg"],
        circle: ["circle", `circle${_e(a)}`, s && "circleDisableShrink"],
      };
    return pt(u, MO, r);
  },
  BO = Ee("span", {
    name: "MuiCircularProgress",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: a } = e;
      return [r.root, r[a.variant], r[`color${_e(a.color)}`]];
    },
  })(
    vt(({ theme: e }) => ({
      display: "inline-block",
      variants: [
        {
          props: { variant: "determinate" },
          style: { transition: e.transitions.create("transform") },
        },
        {
          props: { variant: "indeterminate" },
          style: DO || { animation: `${Xp} 1.4s linear infinite` },
        },
        ...Object.entries(e.palette)
          .filter(Cr())
          .map(([r]) => ({
            props: { color: r },
            style: { color: (e.vars || e).palette[r].main },
          })),
      ],
    }))
  ),
  kO = Ee("svg", {
    name: "MuiCircularProgress",
    slot: "Svg",
    overridesResolver: (e, r) => r.svg,
  })({ display: "block" }),
  UO = Ee("circle", {
    name: "MuiCircularProgress",
    slot: "Circle",
    overridesResolver: (e, r) => {
      const { ownerState: a } = e;
      return [
        r.circle,
        r[`circle${_e(a.variant)}`],
        a.disableShrink && r.circleDisableShrink,
      ];
    },
  })(
    vt(({ theme: e }) => ({
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
          props: ({ ownerState: r }) =>
            r.variant === "indeterminate" && !r.disableShrink,
          style: zO || { animation: `${Kp} 1.4s ease-in-out infinite` },
        },
      ],
    }))
  ),
  ES = C.forwardRef(function (r, a) {
    const l = gt({ props: r, name: "MuiCircularProgress" }),
      {
        className: s,
        color: u = "primary",
        disableShrink: f = !1,
        size: p = 40,
        style: m,
        thickness: h = 3.6,
        value: g = 0,
        variant: v = "indeterminate",
        ...S
      } = l,
      R = {
        ...l,
        color: u,
        disableShrink: f,
        size: p,
        thickness: h,
        value: g,
        variant: v,
      },
      b = NO(R),
      x = {},
      T = {},
      _ = {};
    if (v === "determinate") {
      const M = 2 * Math.PI * ((xa - h) / 2);
      (x.strokeDasharray = M.toFixed(3)),
        (_["aria-valuenow"] = Math.round(g)),
        (x.strokeDashoffset = `${(((100 - g) / 100) * M).toFixed(3)}px`),
        (T.transform = "rotate(-90deg)");
    }
    return $.jsx(BO, {
      className: je(b.root, s),
      style: { width: p, height: p, ...T, ...m },
      ownerState: R,
      ref: a,
      role: "progressbar",
      ..._,
      ...S,
      children: $.jsx(kO, {
        className: b.svg,
        ownerState: R,
        viewBox: `${xa / 2} ${xa / 2} ${xa} ${xa}`,
        children: $.jsx(UO, {
          className: b.circle,
          style: x,
          ownerState: R,
          cx: xa,
          cy: xa,
          r: (xa - h) / 2,
          fill: "none",
          strokeWidth: h,
        }),
      }),
    });
  });
function LO(e) {
  return dt("MuiIconButton", e);
}
const Jv = it("MuiIconButton", [
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
  $O = (e) => {
    const {
        classes: r,
        disabled: a,
        color: l,
        edge: s,
        size: u,
        loading: f,
      } = e,
      p = {
        root: [
          "root",
          f && "loading",
          a && "disabled",
          l !== "default" && `color${_e(l)}`,
          s && `edge${_e(s)}`,
          `size${_e(u)}`,
        ],
        loadingIndicator: ["loadingIndicator"],
        loadingWrapper: ["loadingWrapper"],
      };
    return pt(p, LO, r);
  },
  jO = Ee(xS, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: a } = e;
      return [
        r.root,
        a.loading && r.loading,
        a.color !== "default" && r[`color${_e(a.color)}`],
        a.edge && r[`edge${_e(a.edge)}`],
        r[`size${_e(a.size)}`],
      ];
    },
  })(
    vt(({ theme: e }) => ({
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
          props: (r) => !r.disableRipple,
          style: {
            "--IconButton-hoverBg": e.vars
              ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
              : Sr(e.palette.action.active, e.palette.action.hoverOpacity),
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
    vt(({ theme: e }) => ({
      variants: [
        { props: { color: "inherit" }, style: { color: "inherit" } },
        ...Object.entries(e.palette)
          .filter(Cr())
          .map(([r]) => ({
            props: { color: r },
            style: { color: (e.vars || e).palette[r].main },
          })),
        ...Object.entries(e.palette)
          .filter(Cr())
          .map(([r]) => ({
            props: { color: r },
            style: {
              "--IconButton-hoverBg": e.vars
                ? `rgba(${(e.vars || e).palette[r].mainChannel} / ${
                    e.vars.palette.action.hoverOpacity
                  })`
                : Sr(
                    (e.vars || e).palette[r].main,
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
      [`&.${Jv.disabled}`]: {
        backgroundColor: "transparent",
        color: (e.vars || e).palette.action.disabled,
      },
      [`&.${Jv.loading}`]: { color: "transparent" },
    }))
  ),
  HO = Ee("span", {
    name: "MuiIconButton",
    slot: "LoadingIndicator",
    overridesResolver: (e, r) => r.loadingIndicator,
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
  PO = C.forwardRef(function (r, a) {
    const l = gt({ props: r, name: "MuiIconButton" }),
      {
        edge: s = !1,
        children: u,
        className: f,
        color: p = "default",
        disabled: m = !1,
        disableFocusRipple: h = !1,
        size: g = "medium",
        id: v,
        loading: S = null,
        loadingIndicator: R,
        ...b
      } = l,
      x = Dc(v),
      T = R ?? $.jsx(ES, { "aria-labelledby": x, color: "inherit", size: 16 }),
      _ = {
        ...l,
        edge: s,
        color: p,
        disabled: m,
        disableFocusRipple: h,
        loading: S,
        loadingIndicator: T,
        size: g,
      },
      M = $O(_);
    return $.jsxs(jO, {
      id: x,
      className: je(M.root, f),
      centerRipple: !0,
      focusRipple: !h,
      disabled: m || S,
      ref: a,
      ...b,
      ownerState: _,
      children: [
        typeof S == "boolean" &&
          $.jsx("span", {
            className: M.loadingWrapper,
            style: { display: "contents" },
            children: $.jsx(HO, {
              className: M.loadingIndicator,
              ownerState: _,
              children: S && T,
            }),
          }),
        u,
      ],
    });
  });
function qO(e) {
  return dt("MuiTypography", e);
}
it("MuiTypography", [
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
const VO = {
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
  FO = eO(),
  GO = (e) => {
    const {
        align: r,
        gutterBottom: a,
        noWrap: l,
        paragraph: s,
        variant: u,
        classes: f,
      } = e,
      p = {
        root: [
          "root",
          u,
          e.align !== "inherit" && `align${_e(r)}`,
          a && "gutterBottom",
          l && "noWrap",
          s && "paragraph",
        ],
      };
    return pt(p, qO, f);
  },
  YO = Ee("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: a } = e;
      return [
        r.root,
        a.variant && r[a.variant],
        a.align !== "inherit" && r[`align${_e(a.align)}`],
        a.noWrap && r.noWrap,
        a.gutterBottom && r.gutterBottom,
        a.paragraph && r.paragraph,
      ];
    },
  })(
    vt(({ theme: e }) => {
      var r;
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
            .filter(([a, l]) => a !== "inherit" && l && typeof l == "object")
            .map(([a, l]) => ({ props: { variant: a }, style: l })),
          ...Object.entries(e.palette)
            .filter(Cr())
            .map(([a]) => ({
              props: { color: a },
              style: { color: (e.vars || e).palette[a].main },
            })),
          ...Object.entries(((r = e.palette) == null ? void 0 : r.text) || {})
            .filter(([, a]) => typeof a == "string")
            .map(([a]) => ({
              props: { color: `text${_e(a)}` },
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
  eb = {
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
  IO = C.forwardRef(function (r, a) {
    const { color: l, ...s } = gt({ props: r, name: "MuiTypography" }),
      u = !VO[l],
      f = FO({ ...s, ...(u && { color: l }) }),
      {
        align: p = "inherit",
        className: m,
        component: h,
        gutterBottom: g = !1,
        noWrap: v = !1,
        paragraph: S = !1,
        variant: R = "body1",
        variantMapping: b = eb,
        ...x
      } = f,
      T = {
        ...f,
        align: p,
        color: l,
        className: m,
        component: h,
        gutterBottom: g,
        noWrap: v,
        paragraph: S,
        variant: R,
        variantMapping: b,
      },
      _ = h || (S ? "p" : b[R] || eb[R]) || "span",
      M = GO(T);
    return $.jsx(YO, {
      as: _,
      ref: a,
      className: je(M.root, m),
      ...x,
      ownerState: T,
      style: {
        ...(p !== "inherit" && { "--Typography-textAlign": p }),
        ...x.style,
      },
    });
  });
function XO(e) {
  return dt("MuiAppBar", e);
}
it("MuiAppBar", [
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
const KO = (e) => {
    const { color: r, position: a, classes: l } = e,
      s = { root: ["root", `color${_e(r)}`, `position${_e(a)}`] };
    return pt(s, XO, l);
  },
  tb = (e, r) => (e ? `${e == null ? void 0 : e.replace(")", "")}, ${r})` : r),
  QO = Ee(SS, {
    name: "MuiAppBar",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: a } = e;
      return [r.root, r[`position${_e(a.position)}`], r[`color${_e(a.color)}`]];
    },
  })(
    vt(({ theme: e }) => ({
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
          .filter(Cr(["contrastText"]))
          .map(([r]) => ({
            props: { color: r },
            style: {
              "--AppBar-background": (e.vars ?? e).palette[r].main,
              "--AppBar-color": (e.vars ?? e).palette[r].contrastText,
            },
          })),
        {
          props: (r) =>
            r.enableColorOnDark === !0 &&
            !["inherit", "transparent"].includes(r.color),
          style: {
            backgroundColor: "var(--AppBar-background)",
            color: "var(--AppBar-color)",
          },
        },
        {
          props: (r) =>
            r.enableColorOnDark === !1 &&
            !["inherit", "transparent"].includes(r.color),
          style: {
            backgroundColor: "var(--AppBar-background)",
            color: "var(--AppBar-color)",
            ...e.applyStyles("dark", {
              backgroundColor: e.vars
                ? tb(e.vars.palette.AppBar.darkBg, "var(--AppBar-background)")
                : null,
              color: e.vars
                ? tb(e.vars.palette.AppBar.darkColor, "var(--AppBar-color)")
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
  WO = C.forwardRef(function (r, a) {
    const l = gt({ props: r, name: "MuiAppBar" }),
      {
        className: s,
        color: u = "primary",
        enableColorOnDark: f = !1,
        position: p = "fixed",
        ...m
      } = l,
      h = { ...l, color: u, position: p, enableColorOnDark: f },
      g = KO(h);
    return $.jsx(QO, {
      square: !0,
      component: "header",
      ownerState: h,
      elevation: 4,
      className: je(g.root, s, p === "fixed" && "mui-fixed"),
      ref: a,
      ...m,
    });
  });
function ZO(e) {
  return typeof e == "function" ? e() : e;
}
const JO = C.forwardRef(function (r, a) {
  const { children: l, container: s, disablePortal: u = !1 } = r,
    [f, p] = C.useState(null),
    m = sn(C.isValidElement(l) ? is(l) : null, a);
  if (
    (ui(() => {
      u || p(ZO(s) || document.body);
    }, [s, u]),
    ui(() => {
      if (f && !u)
        return (
          Pp(a, f),
          () => {
            Pp(a, null);
          }
        );
    }, [a, f, u]),
    u)
  ) {
    if (C.isValidElement(l)) {
      const h = { ref: m };
      return C.cloneElement(l, h);
    }
    return l;
  }
  return f && vS.createPortal(l, f);
});
function Cu(e) {
  return parseInt(e, 10) || 0;
}
const e4 = {
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
function t4(e) {
  for (const r in e) return !1;
  return !0;
}
function n4(e) {
  return t4(e) || (e.outerHeightStyle === 0 && !e.overflowing);
}
const r4 = C.forwardRef(function (r, a) {
  const {
      onChange: l,
      maxRows: s,
      minRows: u = 1,
      style: f,
      value: p,
      ...m
    } = r,
    { current: h } = C.useRef(p != null),
    g = C.useRef(null),
    v = sn(a, g),
    S = C.useRef(null),
    R = C.useRef(null),
    b = C.useCallback(() => {
      const M = g.current,
        A = R.current;
      if (!M || !A) return;
      const O = Wr(M).getComputedStyle(M);
      if (O.width === "0px") return { outerHeightStyle: 0, overflowing: !1 };
      (A.style.width = O.width),
        (A.value = M.value || r.placeholder || "x"),
        A.value.slice(-1) ===
          `
` && (A.value += " ");
      const j = O.boxSizing,
        L = Cu(O.paddingBottom) + Cu(O.paddingTop),
        re = Cu(O.borderBottomWidth) + Cu(O.borderTopWidth),
        G = A.scrollHeight;
      A.value = "x";
      const E = A.scrollHeight;
      let I = G;
      u && (I = Math.max(Number(u) * E, I)),
        s && (I = Math.min(Number(s) * E, I)),
        (I = Math.max(I, E));
      const X = I + (j === "border-box" ? L + re : 0),
        J = Math.abs(I - G) <= 1;
      return { outerHeightStyle: X, overflowing: J };
    }, [s, u, r.placeholder]),
    x = C.useCallback(() => {
      const M = g.current,
        A = b();
      if (!M || !A || n4(A)) return;
      const D = A.outerHeightStyle;
      S.current !== D && ((S.current = D), (M.style.height = `${D}px`)),
        (M.style.overflow = A.overflowing ? "hidden" : "");
    }, [b]),
    T = C.useRef(-1);
  ui(() => {
    const M = tS(() => x()),
      A = g == null ? void 0 : g.current;
    if (!A) return;
    const D = Wr(A);
    D.addEventListener("resize", M);
    let O;
    return (
      typeof ResizeObserver < "u" &&
        ((O = new ResizeObserver(() => {
          O.unobserve(A),
            cancelAnimationFrame(T.current),
            x(),
            (T.current = requestAnimationFrame(() => {
              O.observe(A);
            }));
        })),
        O.observe(A)),
      () => {
        M.clear(),
          cancelAnimationFrame(T.current),
          D.removeEventListener("resize", M),
          O && O.disconnect();
      }
    );
  }, [b, x]),
    ui(() => {
      x();
    });
  const _ = (M) => {
    h || x(), l && l(M);
  };
  return $.jsxs(C.Fragment, {
    children: [
      $.jsx("textarea", {
        value: p,
        onChange: _,
        ref: v,
        rows: u,
        style: f,
        ...m,
      }),
      $.jsx("textarea", {
        "aria-hidden": !0,
        className: r.className,
        readOnly: !0,
        ref: R,
        tabIndex: -1,
        style: { ...e4.shadow, ...f, paddingTop: 0, paddingBottom: 0 },
      }),
    ],
  });
});
function Qp(e) {
  return typeof e == "string";
}
function vl({ props: e, states: r, muiFormControl: a }) {
  return r.reduce(
    (l, s) => ((l[s] = e[s]), a && typeof e[s] > "u" && (l[s] = a[s]), l),
    {}
  );
}
const Vh = C.createContext(void 0);
function bl() {
  return C.useContext(Vh);
}
function nb(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function ec(e, r = !1) {
  return (
    e &&
    ((nb(e.value) && e.value !== "") ||
      (r && nb(e.defaultValue) && e.defaultValue !== ""))
  );
}
function a4(e) {
  return e.startAdornment;
}
function i4(e) {
  return dt("MuiInputBase", e);
}
const il = it("MuiInputBase", [
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
var rb;
const Nc = (e, r) => {
    const { ownerState: a } = e;
    return [
      r.root,
      a.formControl && r.formControl,
      a.startAdornment && r.adornedStart,
      a.endAdornment && r.adornedEnd,
      a.error && r.error,
      a.size === "small" && r.sizeSmall,
      a.multiline && r.multiline,
      a.color && r[`color${_e(a.color)}`],
      a.fullWidth && r.fullWidth,
      a.hiddenLabel && r.hiddenLabel,
    ];
  },
  Bc = (e, r) => {
    const { ownerState: a } = e;
    return [
      r.input,
      a.size === "small" && r.inputSizeSmall,
      a.multiline && r.inputMultiline,
      a.type === "search" && r.inputTypeSearch,
      a.startAdornment && r.inputAdornedStart,
      a.endAdornment && r.inputAdornedEnd,
      a.hiddenLabel && r.inputHiddenLabel,
    ];
  },
  l4 = (e) => {
    const {
        classes: r,
        color: a,
        disabled: l,
        error: s,
        endAdornment: u,
        focused: f,
        formControl: p,
        fullWidth: m,
        hiddenLabel: h,
        multiline: g,
        readOnly: v,
        size: S,
        startAdornment: R,
        type: b,
      } = e,
      x = {
        root: [
          "root",
          `color${_e(a)}`,
          l && "disabled",
          s && "error",
          m && "fullWidth",
          f && "focused",
          p && "formControl",
          S && S !== "medium" && `size${_e(S)}`,
          g && "multiline",
          R && "adornedStart",
          u && "adornedEnd",
          h && "hiddenLabel",
          v && "readOnly",
        ],
        input: [
          "input",
          l && "disabled",
          b === "search" && "inputTypeSearch",
          g && "inputMultiline",
          S === "small" && "inputSizeSmall",
          h && "inputHiddenLabel",
          R && "inputAdornedStart",
          u && "inputAdornedEnd",
          v && "readOnly",
        ],
      };
    return pt(x, i4, r);
  },
  kc = Ee("div", { name: "MuiInputBase", slot: "Root", overridesResolver: Nc })(
    vt(({ theme: e }) => ({
      ...e.typography.body1,
      color: (e.vars || e).palette.text.primary,
      lineHeight: "1.4375em",
      boxSizing: "border-box",
      position: "relative",
      cursor: "text",
      display: "inline-flex",
      alignItems: "center",
      [`&.${il.disabled}`]: {
        color: (e.vars || e).palette.text.disabled,
        cursor: "default",
      },
      variants: [
        {
          props: ({ ownerState: r }) => r.multiline,
          style: { padding: "4px 0 5px" },
        },
        {
          props: ({ ownerState: r, size: a }) => r.multiline && a === "small",
          style: { paddingTop: 1 },
        },
        { props: ({ ownerState: r }) => r.fullWidth, style: { width: "100%" } },
      ],
    }))
  ),
  Uc = Ee("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: Bc,
  })(
    vt(({ theme: e }) => {
      const r = e.palette.mode === "light",
        a = {
          color: "currentColor",
          ...(e.vars
            ? { opacity: e.vars.opacity.inputPlaceholder }
            : { opacity: r ? 0.42 : 0.5 }),
          transition: e.transitions.create("opacity", {
            duration: e.transitions.duration.shorter,
          }),
        },
        l = { opacity: "0 !important" },
        s = e.vars
          ? { opacity: e.vars.opacity.inputPlaceholder }
          : { opacity: r ? 0.42 : 0.5 };
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
        [`label[data-shrink=false] + .${il.formControl} &`]: {
          "&::-webkit-input-placeholder": l,
          "&::-moz-placeholder": l,
          "&::-ms-input-placeholder": l,
          "&:focus::-webkit-input-placeholder": s,
          "&:focus::-moz-placeholder": s,
          "&:focus::-ms-input-placeholder": s,
        },
        [`&.${il.disabled}`]: {
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
  ab = J5({
    "@keyframes mui-auto-fill": { from: { display: "block" } },
    "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
  }),
  Fh = C.forwardRef(function (r, a) {
    const l = gt({ props: r, name: "MuiInputBase" }),
      {
        "aria-describedby": s,
        autoComplete: u,
        autoFocus: f,
        className: p,
        color: m,
        components: h = {},
        componentsProps: g = {},
        defaultValue: v,
        disabled: S,
        disableInjectingGlobalStyles: R,
        endAdornment: b,
        error: x,
        fullWidth: T = !1,
        id: _,
        inputComponent: M = "input",
        inputProps: A = {},
        inputRef: D,
        margin: O,
        maxRows: j,
        minRows: L,
        multiline: re = !1,
        name: G,
        onBlur: E,
        onChange: I,
        onClick: X,
        onFocus: J,
        onKeyDown: oe,
        onKeyUp: ee,
        placeholder: H,
        readOnly: ae,
        renderSuffix: ce,
        rows: se,
        size: B,
        slotProps: W = {},
        slots: he = {},
        startAdornment: pe,
        type: ue = "text",
        value: ye,
        ...be
      } = l,
      Ue = A.value != null ? A.value : ye,
      { current: Ce } = C.useRef(Ue != null),
      we = C.useRef(),
      ve = C.useCallback((Je) => {}, []),
      De = sn(we, D, A.ref, ve),
      [Ae, Ye] = C.useState(!1),
      Be = bl(),
      Ze = vl({
        props: l,
        muiFormControl: Be,
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
    (Ze.focused = Be ? Be.focused : Ae),
      C.useEffect(() => {
        !Be && S && Ae && (Ye(!1), E && E());
      }, [Be, S, Ae, E]);
    const Ot = Be && Be.onFilled,
      Bt = Be && Be.onEmpty,
      N = C.useCallback(
        (Je) => {
          ec(Je) ? Ot && Ot() : Bt && Bt();
        },
        [Ot, Bt]
      );
    ui(() => {
      Ce && N({ value: Ue });
    }, [Ue, N, Ce]);
    const q = (Je) => {
        J && J(Je),
          A.onFocus && A.onFocus(Je),
          Be && Be.onFocus ? Be.onFocus(Je) : Ye(!0);
      },
      Y = (Je) => {
        E && E(Je),
          A.onBlur && A.onBlur(Je),
          Be && Be.onBlur ? Be.onBlur(Je) : Ye(!1);
      },
      fe = (Je, ...or) => {
        if (!Ce) {
          const pn = Je.target || we.current;
          if (pn == null) throw new Error(Kr(1));
          N({ value: pn.value });
        }
        A.onChange && A.onChange(Je, ...or), I && I(Je, ...or);
      };
    C.useEffect(() => {
      N(we.current);
    }, []);
    const Q = (Je) => {
      we.current && Je.currentTarget === Je.target && we.current.focus(),
        X && X(Je);
    };
    let de = M,
      me = A;
    re &&
      de === "input" &&
      (se
        ? (me = { type: void 0, minRows: se, maxRows: se, ...me })
        : (me = { type: void 0, maxRows: j, minRows: L, ...me }),
      (de = r4));
    const Me = (Je) => {
      N(
        Je.animationName === "mui-auto-fill-cancel"
          ? we.current
          : { value: "x" }
      );
    };
    C.useEffect(() => {
      Be && Be.setAdornedStart(!!pe);
    }, [Be, pe]);
    const lt = {
        ...l,
        color: Ze.color || "primary",
        disabled: Ze.disabled,
        endAdornment: b,
        error: Ze.error,
        focused: Ze.focused,
        formControl: Be,
        fullWidth: T,
        hiddenLabel: Ze.hiddenLabel,
        multiline: re,
        size: Ze.size,
        startAdornment: pe,
        type: ue,
      },
      ot = l4(lt),
      kt = he.root || h.Root || kc,
      lr = W.root || g.root || {},
      dn = he.input || h.Input || Uc;
    return (
      (me = { ...me, ...(W.input ?? g.input) }),
      $.jsxs(C.Fragment, {
        children: [
          !R && typeof ab == "function" && (rb || (rb = $.jsx(ab, {}))),
          $.jsxs(kt, {
            ...lr,
            ref: a,
            onClick: Q,
            ...be,
            ...(!Qp(kt) && { ownerState: { ...lt, ...lr.ownerState } }),
            className: je(
              ot.root,
              lr.className,
              p,
              ae && "MuiInputBase-readOnly"
            ),
            children: [
              pe,
              $.jsx(Vh.Provider, {
                value: null,
                children: $.jsx(dn, {
                  "aria-invalid": Ze.error,
                  "aria-describedby": s,
                  autoComplete: u,
                  autoFocus: f,
                  defaultValue: v,
                  disabled: Ze.disabled,
                  id: _,
                  onAnimationStart: Me,
                  name: G,
                  placeholder: H,
                  readOnly: ae,
                  required: Ze.required,
                  rows: se,
                  value: Ue,
                  onKeyDown: oe,
                  onKeyUp: ee,
                  type: ue,
                  ...me,
                  ...(!Qp(dn) && {
                    as: de,
                    ownerState: { ...lt, ...me.ownerState },
                  }),
                  ref: De,
                  className: je(
                    ot.input,
                    me.className,
                    ae && "MuiInputBase-readOnly"
                  ),
                  onBlur: Y,
                  onChange: fe,
                  onFocus: q,
                }),
              }),
              b,
              ce ? ce({ ...Ze, startAdornment: pe }) : null,
            ],
          }),
        ],
      })
    );
  });
function o4(e) {
  return dt("MuiInput", e);
}
const wo = { ...il, ...it("MuiInput", ["root", "underline", "input"]) };
function s4(e) {
  return dt("MuiOutlinedInput", e);
}
const mr = {
  ...il,
  ...it("MuiOutlinedInput", ["root", "notchedOutline", "input"]),
};
function u4(e) {
  return dt("MuiFilledInput", e);
}
const Ka = {
    ...il,
    ...it("MuiFilledInput", [
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
  c4 = zc($.jsx("path", { d: "M7 10l5 5 5-5z" }), "ArrowDropDown"),
  f4 = zc(
    $.jsx("path", {
      d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
    }),
    "Person"
  );
function d4(e) {
  return dt("MuiAvatar", e);
}
it("MuiAvatar", [
  "root",
  "colorDefault",
  "circular",
  "rounded",
  "square",
  "img",
  "fallback",
]);
const p4 = (e) => {
    const { classes: r, variant: a, colorDefault: l } = e;
    return pt(
      {
        root: ["root", a, l && "colorDefault"],
        img: ["img"],
        fallback: ["fallback"],
      },
      d4,
      r
    );
  },
  h4 = Ee("div", {
    name: "MuiAvatar",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: a } = e;
      return [r.root, r[a.variant], a.colorDefault && r.colorDefault];
    },
  })(
    vt(({ theme: e }) => ({
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
  m4 = Ee("img", {
    name: "MuiAvatar",
    slot: "Img",
    overridesResolver: (e, r) => r.img,
  })({
    width: "100%",
    height: "100%",
    textAlign: "center",
    objectFit: "cover",
    color: "transparent",
    textIndent: 1e4,
  }),
  g4 = Ee(f4, {
    name: "MuiAvatar",
    slot: "Fallback",
    overridesResolver: (e, r) => r.fallback,
  })({ width: "75%", height: "75%" });
function y4({ crossOrigin: e, referrerPolicy: r, src: a, srcSet: l }) {
  const [s, u] = C.useState(!1);
  return (
    C.useEffect(() => {
      if (!a && !l) return;
      u(!1);
      let f = !0;
      const p = new Image();
      return (
        (p.onload = () => {
          f && u("loaded");
        }),
        (p.onerror = () => {
          f && u("error");
        }),
        (p.crossOrigin = e),
        (p.referrerPolicy = r),
        (p.src = a),
        l && (p.srcset = l),
        () => {
          f = !1;
        }
      );
    }, [e, r, a, l]),
    s
  );
}
const Wp = C.forwardRef(function (r, a) {
    const l = gt({ props: r, name: "MuiAvatar" }),
      {
        alt: s,
        children: u,
        className: f,
        component: p = "div",
        slots: m = {},
        slotProps: h = {},
        imgProps: g,
        sizes: v,
        src: S,
        srcSet: R,
        variant: b = "circular",
        ...x
      } = l;
    let T = null;
    const _ = { ...l, component: p, variant: b },
      M = y4({
        ...g,
        ...(typeof h.img == "function" ? h.img(_) : h.img),
        src: S,
        srcSet: R,
      }),
      A = S || R,
      D = A && M !== "error";
    (_.colorDefault = !D), delete _.ownerState;
    const O = p4(_),
      [j, L] = Yn("img", {
        className: O.img,
        elementType: m4,
        externalForwardedProps: {
          slots: m,
          slotProps: { img: { ...g, ...h.img } },
        },
        additionalProps: { alt: s, src: S, srcSet: R, sizes: v },
        ownerState: _,
      });
    return (
      D
        ? (T = $.jsx(j, { ...L }))
        : u || u === 0
        ? (T = u)
        : A && s
        ? (T = s[0])
        : (T = $.jsx(g4, { ownerState: _, className: O.fallback })),
      $.jsx(h4, {
        as: p,
        className: je(O.root, f),
        ref: a,
        ...x,
        ownerState: _,
        children: T,
      })
    );
  }),
  v4 = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  b4 = C.forwardRef(function (r, a) {
    const l = Hh(),
      s = {
        enter: l.transitions.duration.enteringScreen,
        exit: l.transitions.duration.leavingScreen,
      },
      {
        addEndListener: u,
        appear: f = !0,
        children: p,
        easing: m,
        in: h,
        onEnter: g,
        onEntered: v,
        onEntering: S,
        onExit: R,
        onExited: b,
        onExiting: x,
        style: T,
        timeout: _ = s,
        TransitionComponent: M = Tr,
        ...A
      } = r,
      D = C.useRef(null),
      O = sn(D, is(p), a),
      j = (oe) => (ee) => {
        if (oe) {
          const H = D.current;
          ee === void 0 ? oe(H) : oe(H, ee);
        }
      },
      L = j(S),
      re = j((oe, ee) => {
        bS(oe);
        const H = Zu({ style: T, timeout: _, easing: m }, { mode: "enter" });
        (oe.style.webkitTransition = l.transitions.create("opacity", H)),
          (oe.style.transition = l.transitions.create("opacity", H)),
          g && g(oe, ee);
      }),
      G = j(v),
      E = j(x),
      I = j((oe) => {
        const ee = Zu({ style: T, timeout: _, easing: m }, { mode: "exit" });
        (oe.style.webkitTransition = l.transitions.create("opacity", ee)),
          (oe.style.transition = l.transitions.create("opacity", ee)),
          R && R(oe);
      }),
      X = j(b),
      J = (oe) => {
        u && u(D.current, oe);
      };
    return $.jsx(M, {
      appear: f,
      in: h,
      nodeRef: D,
      onEnter: re,
      onEntered: G,
      onEntering: L,
      onExit: I,
      onExited: X,
      onExiting: E,
      addEndListener: J,
      timeout: _,
      ...A,
      children: (oe, { ownerState: ee, ...H }) =>
        C.cloneElement(p, {
          style: {
            opacity: 0,
            visibility: oe === "exited" && !h ? "hidden" : void 0,
            ...v4[oe],
            ...T,
            ...p.props.style,
          },
          ref: O,
          ...H,
        }),
    });
  });
function S4(e) {
  return dt("MuiBackdrop", e);
}
it("MuiBackdrop", ["root", "invisible"]);
const x4 = (e) => {
    const { classes: r, invisible: a } = e;
    return pt({ root: ["root", a && "invisible"] }, S4, r);
  },
  E4 = Ee("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: a } = e;
      return [r.root, a.invisible && r.invisible];
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
  R4 = C.forwardRef(function (r, a) {
    const l = gt({ props: r, name: "MuiBackdrop" }),
      {
        children: s,
        className: u,
        component: f = "div",
        invisible: p = !1,
        open: m,
        components: h = {},
        componentsProps: g = {},
        slotProps: v = {},
        slots: S = {},
        TransitionComponent: R,
        transitionDuration: b,
        ...x
      } = l,
      T = { ...l, component: f, invisible: p },
      _ = x4(T),
      M = { transition: R, root: h.Root, ...S },
      A = { ...g, ...v },
      D = { slots: M, slotProps: A },
      [O, j] = Yn("root", {
        elementType: E4,
        externalForwardedProps: D,
        className: je(_.root, u),
        ownerState: T,
      }),
      [L, re] = Yn("transition", {
        elementType: b4,
        externalForwardedProps: D,
        ownerState: T,
      });
    return $.jsx(L, {
      in: m,
      timeout: b,
      ...x,
      ...re,
      children: $.jsx(O, {
        "aria-hidden": !0,
        ...j,
        classes: _,
        ref: a,
        children: s,
      }),
    });
  }),
  C4 = it("MuiBox", ["root"]),
  w4 = hS(),
  T4 = G2({
    themeId: vc,
    defaultTheme: w4,
    defaultClassName: C4.root,
    generateClassName: Q1.generate,
  });
function A4(e) {
  return dt("MuiButton", e);
}
const Qa = it("MuiButton", [
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
  O4 = C.createContext({}),
  _4 = C.createContext(void 0),
  M4 = (e) => {
    const {
        color: r,
        disableElevation: a,
        fullWidth: l,
        size: s,
        variant: u,
        loading: f,
        loadingPosition: p,
        classes: m,
      } = e,
      h = {
        root: [
          "root",
          f && "loading",
          u,
          `${u}${_e(r)}`,
          `size${_e(s)}`,
          `${u}Size${_e(s)}`,
          `color${_e(r)}`,
          a && "disableElevation",
          l && "fullWidth",
          f && `loadingPosition${_e(p)}`,
        ],
        startIcon: ["icon", "startIcon", `iconSize${_e(s)}`],
        endIcon: ["icon", "endIcon", `iconSize${_e(s)}`],
        loadingIndicator: ["loadingIndicator"],
        loadingWrapper: ["loadingWrapper"],
      },
      g = pt(h, A4, m);
    return { ...m, ...g };
  },
  RS = [
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
  D4 = Ee(xS, {
    shouldForwardProp: (e) => ir(e) || e === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: a } = e;
      return [
        r.root,
        r[a.variant],
        r[`${a.variant}${_e(a.color)}`],
        r[`size${_e(a.size)}`],
        r[`${a.variant}Size${_e(a.size)}`],
        a.color === "inherit" && r.colorInherit,
        a.disableElevation && r.disableElevation,
        a.fullWidth && r.fullWidth,
        a.loading && r.loading,
      ];
    },
  })(
    vt(({ theme: e }) => {
      const r =
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
        [`&.${Qa.disabled}`]: { color: (e.vars || e).palette.action.disabled },
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
              [`&.${Qa.focusVisible}`]: { boxShadow: (e.vars || e).shadows[6] },
              [`&.${Qa.disabled}`]: {
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
              [`&.${Qa.disabled}`]: {
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
            .filter(Cr())
            .map(([l]) => ({
              props: { color: l },
              style: {
                "--variant-textColor": (e.vars || e).palette[l].main,
                "--variant-outlinedColor": (e.vars || e).palette[l].main,
                "--variant-outlinedBorder": e.vars
                  ? `rgba(${e.vars.palette[l].mainChannel} / 0.5)`
                  : Sr(e.palette[l].main, 0.5),
                "--variant-containedColor": (e.vars || e).palette[l]
                  .contrastText,
                "--variant-containedBg": (e.vars || e).palette[l].main,
                "@media (hover: hover)": {
                  "&:hover": {
                    "--variant-containedBg": (e.vars || e).palette[l].dark,
                    "--variant-textBg": e.vars
                      ? `rgba(${e.vars.palette[l].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                      : Sr(e.palette[l].main, e.palette.action.hoverOpacity),
                    "--variant-outlinedBorder": (e.vars || e).palette[l].main,
                    "--variant-outlinedBg": e.vars
                      ? `rgba(${e.vars.palette[l].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                      : Sr(e.palette[l].main, e.palette.action.hoverOpacity),
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
                : r,
              "@media (hover: hover)": {
                "&:hover": {
                  "--variant-containedBg": e.vars
                    ? e.vars.palette.Button.inheritContainedHoverBg
                    : a,
                  "--variant-textBg": e.vars
                    ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : Sr(e.palette.text.primary, e.palette.action.hoverOpacity),
                  "--variant-outlinedBg": e.vars
                    ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : Sr(e.palette.text.primary, e.palette.action.hoverOpacity),
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
              [`&.${Qa.focusVisible}`]: { boxShadow: "none" },
              "&:active": { boxShadow: "none" },
              [`&.${Qa.disabled}`]: { boxShadow: "none" },
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
              [`&.${Qa.loading}`]: { color: "transparent" },
            },
          },
        ],
      };
    })
  ),
  z4 = Ee("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (e, r) => {
      const { ownerState: a } = e;
      return [
        r.startIcon,
        a.loading && r.startIconLoadingStart,
        r[`iconSize${_e(a.size)}`],
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
      ...RS,
    ],
  })),
  N4 = Ee("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (e, r) => {
      const { ownerState: a } = e;
      return [
        r.endIcon,
        a.loading && r.endIconLoadingEnd,
        r[`iconSize${_e(a.size)}`],
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
      ...RS,
    ],
  })),
  B4 = Ee("span", {
    name: "MuiButton",
    slot: "LoadingIndicator",
    overridesResolver: (e, r) => r.loadingIndicator,
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
  ib = Ee("span", {
    name: "MuiButton",
    slot: "LoadingIconPlaceholder",
    overridesResolver: (e, r) => r.loadingIconPlaceholder,
  })({ display: "inline-block", width: "1em", height: "1em" }),
  ll = C.forwardRef(function (r, a) {
    const l = C.useContext(O4),
      s = C.useContext(_4),
      u = Qu(l, r),
      f = gt({ props: u, name: "MuiButton" }),
      {
        children: p,
        color: m = "primary",
        component: h = "button",
        className: g,
        disabled: v = !1,
        disableElevation: S = !1,
        disableFocusRipple: R = !1,
        endIcon: b,
        focusVisibleClassName: x,
        fullWidth: T = !1,
        id: _,
        loading: M = null,
        loadingIndicator: A,
        loadingPosition: D = "center",
        size: O = "medium",
        startIcon: j,
        type: L,
        variant: re = "text",
        ...G
      } = f,
      E = Dc(_),
      I = A ?? $.jsx(ES, { "aria-labelledby": E, color: "inherit", size: 16 }),
      X = {
        ...f,
        color: m,
        component: h,
        disabled: v,
        disableElevation: S,
        disableFocusRipple: R,
        fullWidth: T,
        loading: M,
        loadingIndicator: I,
        loadingPosition: D,
        size: O,
        type: L,
        variant: re,
      },
      J = M4(X),
      oe =
        (j || (M && D === "start")) &&
        $.jsx(z4, {
          className: J.startIcon,
          ownerState: X,
          children:
            j ||
            $.jsx(ib, { className: J.loadingIconPlaceholder, ownerState: X }),
        }),
      ee =
        (b || (M && D === "end")) &&
        $.jsx(N4, {
          className: J.endIcon,
          ownerState: X,
          children:
            b ||
            $.jsx(ib, { className: J.loadingIconPlaceholder, ownerState: X }),
        }),
      H = s || "",
      ae =
        typeof M == "boolean"
          ? $.jsx("span", {
              className: J.loadingWrapper,
              style: { display: "contents" },
              children:
                M &&
                $.jsx(B4, {
                  className: J.loadingIndicator,
                  ownerState: X,
                  children: I,
                }),
            })
          : null;
    return $.jsxs(D4, {
      ownerState: X,
      className: je(l.className, J.root, g, H),
      component: h,
      disabled: v || M,
      focusRipple: !R,
      focusVisibleClassName: je(J.focusVisible, x),
      ref: a,
      type: L,
      id: E,
      ...G,
      classes: J,
      children: [oe, D !== "end" && ae, p, D === "end" && ae, ee],
    });
  });
function k4(e) {
  const r = nr(e);
  return r.body === e
    ? Wr(e).innerWidth > r.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function Uo(e, r) {
  r ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function lb(e) {
  return parseInt(Wr(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function U4(e) {
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
    l = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return a || l;
}
function ob(e, r, a, l, s) {
  const u = [r, a, ...l];
  [].forEach.call(e.children, (f) => {
    const p = !u.includes(f),
      m = !U4(f);
    p && m && Uo(f, s);
  });
}
function gp(e, r) {
  let a = -1;
  return e.some((l, s) => (r(l) ? ((a = s), !0) : !1)), a;
}
function L4(e, r) {
  const a = [],
    l = e.container;
  if (!r.disableScrollLock) {
    if (k4(l)) {
      const f = aS(Wr(l));
      a.push({ value: l.style.paddingRight, property: "padding-right", el: l }),
        (l.style.paddingRight = `${lb(l) + f}px`);
      const p = nr(l).querySelectorAll(".mui-fixed");
      [].forEach.call(p, (m) => {
        a.push({
          value: m.style.paddingRight,
          property: "padding-right",
          el: m,
        }),
          (m.style.paddingRight = `${lb(m) + f}px`);
      });
    }
    let u;
    if (l.parentNode instanceof DocumentFragment) u = nr(l).body;
    else {
      const f = l.parentElement,
        p = Wr(l);
      u =
        (f == null ? void 0 : f.nodeName) === "HTML" &&
        p.getComputedStyle(f).overflowY === "scroll"
          ? f
          : l;
    }
    a.push(
      { value: u.style.overflow, property: "overflow", el: u },
      { value: u.style.overflowX, property: "overflow-x", el: u },
      { value: u.style.overflowY, property: "overflow-y", el: u }
    ),
      (u.style.overflow = "hidden");
  }
  return () => {
    a.forEach(({ value: u, el: f, property: p }) => {
      u ? f.style.setProperty(p, u) : f.style.removeProperty(p);
    });
  };
}
function $4(e) {
  const r = [];
  return (
    [].forEach.call(e.children, (a) => {
      a.getAttribute("aria-hidden") === "true" && r.push(a);
    }),
    r
  );
}
class j4 {
  constructor() {
    (this.modals = []), (this.containers = []);
  }
  add(r, a) {
    let l = this.modals.indexOf(r);
    if (l !== -1) return l;
    (l = this.modals.length),
      this.modals.push(r),
      r.modalRef && Uo(r.modalRef, !1);
    const s = $4(a);
    ob(a, r.mount, r.modalRef, s, !0);
    const u = gp(this.containers, (f) => f.container === a);
    return u !== -1
      ? (this.containers[u].modals.push(r), l)
      : (this.containers.push({
          modals: [r],
          container: a,
          restore: null,
          hiddenSiblings: s,
        }),
        l);
  }
  mount(r, a) {
    const l = gp(this.containers, (u) => u.modals.includes(r)),
      s = this.containers[l];
    s.restore || (s.restore = L4(s, a));
  }
  remove(r, a = !0) {
    const l = this.modals.indexOf(r);
    if (l === -1) return l;
    const s = gp(this.containers, (f) => f.modals.includes(r)),
      u = this.containers[s];
    if (
      (u.modals.splice(u.modals.indexOf(r), 1),
      this.modals.splice(l, 1),
      u.modals.length === 0)
    )
      u.restore && u.restore(),
        r.modalRef && Uo(r.modalRef, a),
        ob(u.container, r.mount, r.modalRef, u.hiddenSiblings, !1),
        this.containers.splice(s, 1);
    else {
      const f = u.modals[u.modals.length - 1];
      f.modalRef && Uo(f.modalRef, !1);
    }
    return l;
  }
  isTopModal(r) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === r;
  }
}
const H4 = [
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
function P4(e) {
  const r = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(r)
    ? e.contentEditable === "true" ||
      ((e.nodeName === "AUDIO" ||
        e.nodeName === "VIDEO" ||
        e.nodeName === "DETAILS") &&
        e.getAttribute("tabindex") === null)
      ? 0
      : e.tabIndex
    : r;
}
function q4(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
  const r = (l) => e.ownerDocument.querySelector(`input[type="radio"]${l}`);
  let a = r(`[name="${e.name}"]:checked`);
  return a || (a = r(`[name="${e.name}"]`)), a !== e;
}
function V4(e) {
  return !(
    e.disabled ||
    (e.tagName === "INPUT" && e.type === "hidden") ||
    q4(e)
  );
}
function F4(e) {
  const r = [],
    a = [];
  return (
    Array.from(e.querySelectorAll(H4)).forEach((l, s) => {
      const u = P4(l);
      u === -1 ||
        !V4(l) ||
        (u === 0
          ? r.push(l)
          : a.push({ documentOrder: s, tabIndex: u, node: l }));
    }),
    a
      .sort((l, s) =>
        l.tabIndex === s.tabIndex
          ? l.documentOrder - s.documentOrder
          : l.tabIndex - s.tabIndex
      )
      .map((l) => l.node)
      .concat(r)
  );
}
function G4() {
  return !0;
}
function Y4(e) {
  const {
      children: r,
      disableAutoFocus: a = !1,
      disableEnforceFocus: l = !1,
      disableRestoreFocus: s = !1,
      getTabbable: u = F4,
      isEnabled: f = G4,
      open: p,
    } = e,
    m = C.useRef(!1),
    h = C.useRef(null),
    g = C.useRef(null),
    v = C.useRef(null),
    S = C.useRef(null),
    R = C.useRef(!1),
    b = C.useRef(null),
    x = sn(is(r), b),
    T = C.useRef(null);
  C.useEffect(() => {
    !p || !b.current || (R.current = !a);
  }, [a, p]),
    C.useEffect(() => {
      if (!p || !b.current) return;
      const A = nr(b.current);
      return (
        b.current.contains(A.activeElement) ||
          (b.current.hasAttribute("tabIndex") ||
            b.current.setAttribute("tabIndex", "-1"),
          R.current && b.current.focus()),
        () => {
          s ||
            (v.current &&
              v.current.focus &&
              ((m.current = !0), v.current.focus()),
            (v.current = null));
        }
      );
    }, [p]),
    C.useEffect(() => {
      if (!p || !b.current) return;
      const A = nr(b.current),
        D = (L) => {
          (T.current = L),
            !(l || !f() || L.key !== "Tab") &&
              A.activeElement === b.current &&
              L.shiftKey &&
              ((m.current = !0), g.current && g.current.focus());
        },
        O = () => {
          var G, E;
          const L = b.current;
          if (L === null) return;
          if (!A.hasFocus() || !f() || m.current) {
            m.current = !1;
            return;
          }
          if (
            L.contains(A.activeElement) ||
            (l &&
              A.activeElement !== h.current &&
              A.activeElement !== g.current)
          )
            return;
          if (A.activeElement !== S.current) S.current = null;
          else if (S.current !== null) return;
          if (!R.current) return;
          let re = [];
          if (
            ((A.activeElement === h.current || A.activeElement === g.current) &&
              (re = u(b.current)),
            re.length > 0)
          ) {
            const I = !!(
                (G = T.current) != null &&
                G.shiftKey &&
                ((E = T.current) == null ? void 0 : E.key) === "Tab"
              ),
              X = re[0],
              J = re[re.length - 1];
            typeof X != "string" &&
              typeof J != "string" &&
              (I ? J.focus() : X.focus());
          } else L.focus();
        };
      A.addEventListener("focusin", O), A.addEventListener("keydown", D, !0);
      const j = setInterval(() => {
        A.activeElement && A.activeElement.tagName === "BODY" && O();
      }, 50);
      return () => {
        clearInterval(j),
          A.removeEventListener("focusin", O),
          A.removeEventListener("keydown", D, !0);
      };
    }, [a, l, s, f, p, u]);
  const _ = (A) => {
      v.current === null && (v.current = A.relatedTarget),
        (R.current = !0),
        (S.current = A.target);
      const D = r.props.onFocus;
      D && D(A);
    },
    M = (A) => {
      v.current === null && (v.current = A.relatedTarget), (R.current = !0);
    };
  return $.jsxs(C.Fragment, {
    children: [
      $.jsx("div", {
        tabIndex: p ? 0 : -1,
        onFocus: M,
        ref: h,
        "data-testid": "sentinelStart",
      }),
      C.cloneElement(r, { ref: x, onFocus: _ }),
      $.jsx("div", {
        tabIndex: p ? 0 : -1,
        onFocus: M,
        ref: g,
        "data-testid": "sentinelEnd",
      }),
    ],
  });
}
function I4(e) {
  return typeof e == "function" ? e() : e;
}
function X4(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const sb = () => {},
  wu = new j4();
function K4(e) {
  const {
      container: r,
      disableEscapeKeyDown: a = !1,
      disableScrollLock: l = !1,
      closeAfterTransition: s = !1,
      onTransitionEnter: u,
      onTransitionExited: f,
      children: p,
      onClose: m,
      open: h,
      rootRef: g,
    } = e,
    v = C.useRef({}),
    S = C.useRef(null),
    R = C.useRef(null),
    b = sn(R, g),
    [x, T] = C.useState(!h),
    _ = X4(p);
  let M = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (M = !1);
  const A = () => nr(S.current),
    D = () => (
      (v.current.modalRef = R.current), (v.current.mount = S.current), v.current
    ),
    O = () => {
      wu.mount(D(), { disableScrollLock: l }),
        R.current && (R.current.scrollTop = 0);
    },
    j = rl(() => {
      const ee = I4(r) || A().body;
      wu.add(D(), ee), R.current && O();
    }),
    L = () => wu.isTopModal(D()),
    re = rl((ee) => {
      (S.current = ee), ee && (h && L() ? O() : R.current && Uo(R.current, M));
    }),
    G = C.useCallback(() => {
      wu.remove(D(), M);
    }, [M]);
  C.useEffect(
    () => () => {
      G();
    },
    [G]
  ),
    C.useEffect(() => {
      h ? j() : (!_ || !s) && G();
    }, [h, G, _, s, j]);
  const E = (ee) => (H) => {
      var ae;
      (ae = ee.onKeyDown) == null || ae.call(ee, H),
        !(H.key !== "Escape" || H.which === 229 || !L()) &&
          (a || (H.stopPropagation(), m && m(H, "escapeKeyDown")));
    },
    I = (ee) => (H) => {
      var ae;
      (ae = ee.onClick) == null || ae.call(ee, H),
        H.target === H.currentTarget && m && m(H, "backdropClick");
    };
  return {
    getRootProps: (ee = {}) => {
      const H = lS(e);
      delete H.onTransitionEnter, delete H.onTransitionExited;
      const ae = { ...H, ...ee };
      return { role: "presentation", ...ae, onKeyDown: E(ae), ref: b };
    },
    getBackdropProps: (ee = {}) => {
      const H = ee;
      return { "aria-hidden": !0, ...H, onClick: I(H), open: h };
    },
    getTransitionProps: () => {
      const ee = () => {
          T(!1), u && u();
        },
        H = () => {
          T(!0), f && f(), s && G();
        };
      return {
        onEnter: Uv(ee, (p == null ? void 0 : p.props.onEnter) ?? sb),
        onExited: Uv(H, (p == null ? void 0 : p.props.onExited) ?? sb),
      };
    },
    rootRef: b,
    portalRef: re,
    isTopModal: L,
    exited: x,
    hasTransition: _,
  };
}
function Q4(e) {
  return dt("MuiModal", e);
}
it("MuiModal", ["root", "hidden", "backdrop"]);
const W4 = (e) => {
    const { open: r, exited: a, classes: l } = e;
    return pt(
      { root: ["root", !r && a && "hidden"], backdrop: ["backdrop"] },
      Q4,
      l
    );
  },
  Z4 = Ee("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: a } = e;
      return [r.root, !a.open && a.exited && r.hidden];
    },
  })(
    vt(({ theme: e }) => ({
      position: "fixed",
      zIndex: (e.vars || e).zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      variants: [
        {
          props: ({ ownerState: r }) => !r.open && r.exited,
          style: { visibility: "hidden" },
        },
      ],
    }))
  ),
  J4 = Ee(R4, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (e, r) => r.backdrop,
  })({ zIndex: -1 }),
  e_ = C.forwardRef(function (r, a) {
    const l = gt({ name: "MuiModal", props: r }),
      {
        BackdropComponent: s = J4,
        BackdropProps: u,
        classes: f,
        className: p,
        closeAfterTransition: m = !1,
        children: h,
        container: g,
        component: v,
        components: S = {},
        componentsProps: R = {},
        disableAutoFocus: b = !1,
        disableEnforceFocus: x = !1,
        disableEscapeKeyDown: T = !1,
        disablePortal: _ = !1,
        disableRestoreFocus: M = !1,
        disableScrollLock: A = !1,
        hideBackdrop: D = !1,
        keepMounted: O = !1,
        onBackdropClick: j,
        onClose: L,
        onTransitionEnter: re,
        onTransitionExited: G,
        open: E,
        slotProps: I = {},
        slots: X = {},
        theme: J,
        ...oe
      } = l,
      ee = {
        ...l,
        closeAfterTransition: m,
        disableAutoFocus: b,
        disableEnforceFocus: x,
        disableEscapeKeyDown: T,
        disablePortal: _,
        disableRestoreFocus: M,
        disableScrollLock: A,
        hideBackdrop: D,
        keepMounted: O,
      },
      {
        getRootProps: H,
        getBackdropProps: ae,
        getTransitionProps: ce,
        portalRef: se,
        isTopModal: B,
        exited: W,
        hasTransition: he,
      } = K4({ ...ee, rootRef: a }),
      pe = { ...ee, exited: W },
      ue = W4(pe),
      ye = {};
    if ((h.props.tabIndex === void 0 && (ye.tabIndex = "-1"), he)) {
      const { onEnter: Ae, onExited: Ye } = ce();
      (ye.onEnter = Ae), (ye.onExited = Ye);
    }
    const be = {
        ...oe,
        slots: { root: S.Root, backdrop: S.Backdrop, ...X },
        slotProps: { ...R, ...I },
      },
      [Ue, Ce] = Yn("root", {
        elementType: Z4,
        externalForwardedProps: be,
        getSlotProps: H,
        additionalProps: { ref: a, as: v },
        ownerState: pe,
        className: je(
          p,
          ue == null ? void 0 : ue.root,
          !pe.open && pe.exited && (ue == null ? void 0 : ue.hidden)
        ),
      }),
      [we, ve] = Yn("backdrop", {
        elementType: s,
        externalForwardedProps: be,
        additionalProps: u,
        getSlotProps: (Ae) =>
          ae({
            ...Ae,
            onClick: (Ye) => {
              j && j(Ye), Ae != null && Ae.onClick && Ae.onClick(Ye);
            },
          }),
        className: je(
          u == null ? void 0 : u.className,
          ue == null ? void 0 : ue.backdrop
        ),
        ownerState: pe,
      }),
      De = sn(u == null ? void 0 : u.ref, ve.ref);
    return !O && !E && (!he || W)
      ? null
      : $.jsx(JO, {
          ref: se,
          container: g,
          disablePortal: _,
          children: $.jsxs(Ue, {
            ...Ce,
            children: [
              !D && s ? $.jsx(we, { ...ve, ref: De }) : null,
              $.jsx(Y4, {
                disableEnforceFocus: x,
                disableAutoFocus: b,
                disableRestoreFocus: M,
                isEnabled: B,
                open: E,
                children: C.cloneElement(h, ye),
              }),
            ],
          }),
        });
  }),
  t_ = (e) => {
    const {
        classes: r,
        disableUnderline: a,
        startAdornment: l,
        endAdornment: s,
        size: u,
        hiddenLabel: f,
        multiline: p,
      } = e,
      m = {
        root: [
          "root",
          !a && "underline",
          l && "adornedStart",
          s && "adornedEnd",
          u === "small" && `size${_e(u)}`,
          f && "hiddenLabel",
          p && "multiline",
        ],
        input: ["input"],
      },
      h = pt(m, u4, r);
    return { ...r, ...h };
  },
  n_ = Ee(kc, {
    shouldForwardProp: (e) => ir(e) || e === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: a } = e;
      return [...Nc(e, r), !a.disableUnderline && r.underline];
    },
  })(
    vt(({ theme: e }) => {
      const r = e.palette.mode === "light",
        a = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
        l = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
        s = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
        u = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
      return {
        position: "relative",
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : l,
        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
        borderTopRightRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create("background-color", {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
        "&:hover": {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : s,
          "@media (hover: none)": {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : l,
          },
        },
        [`&.${Ka.focused}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : l,
        },
        [`&.${Ka.disabled}`]: {
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
              [`&.${Ka.focused}:after`]: {
                transform: "scaleX(1) translateX(0)",
              },
              [`&.${Ka.error}`]: {
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
              [`&:hover:not(.${Ka.disabled}, .${Ka.error}):before`]: {
                borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`,
              },
              [`&.${Ka.disabled}:before`]: { borderBottomStyle: "dotted" },
            },
          },
          ...Object.entries(e.palette)
            .filter(Cr())
            .map(([f]) => {
              var p;
              return {
                props: { disableUnderline: !1, color: f },
                style: {
                  "&::after": {
                    borderBottom: `2px solid ${
                      (p = (e.vars || e).palette[f]) == null ? void 0 : p.main
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
            props: ({ ownerState: f, size: p }) => f.multiline && p === "small",
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
  r_ = Ee(Uc, { name: "MuiFilledInput", slot: "Input", overridesResolver: Bc })(
    vt(({ theme: e }) => ({
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
          props: ({ ownerState: r }) => r.hiddenLabel,
          style: { paddingTop: 16, paddingBottom: 17 },
        },
        {
          props: ({ ownerState: r }) => r.startAdornment,
          style: { paddingLeft: 0 },
        },
        {
          props: ({ ownerState: r }) => r.endAdornment,
          style: { paddingRight: 0 },
        },
        {
          props: ({ ownerState: r }) => r.hiddenLabel && r.size === "small",
          style: { paddingTop: 8, paddingBottom: 9 },
        },
        {
          props: ({ ownerState: r }) => r.multiline,
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
  Gh = C.forwardRef(function (r, a) {
    const l = gt({ props: r, name: "MuiFilledInput" }),
      {
        disableUnderline: s = !1,
        components: u = {},
        componentsProps: f,
        fullWidth: p = !1,
        hiddenLabel: m,
        inputComponent: h = "input",
        multiline: g = !1,
        slotProps: v,
        slots: S = {},
        type: R = "text",
        ...b
      } = l,
      x = {
        ...l,
        disableUnderline: s,
        fullWidth: p,
        inputComponent: h,
        multiline: g,
        type: R,
      },
      T = t_(l),
      _ = { root: { ownerState: x }, input: { ownerState: x } },
      M = v ?? f ? on(_, v ?? f) : _,
      A = S.root ?? u.Root ?? n_,
      D = S.input ?? u.Input ?? r_;
    return $.jsx(Fh, {
      slots: { root: A, input: D },
      slotProps: M,
      fullWidth: p,
      inputComponent: h,
      multiline: g,
      ref: a,
      type: R,
      ...b,
      classes: T,
    });
  });
Gh.muiName = "Input";
function a_(e) {
  return dt("MuiFormControl", e);
}
it("MuiFormControl", [
  "root",
  "marginNone",
  "marginNormal",
  "marginDense",
  "fullWidth",
  "disabled",
]);
const i_ = (e) => {
    const { classes: r, margin: a, fullWidth: l } = e,
      s = {
        root: ["root", a !== "none" && `margin${_e(a)}`, l && "fullWidth"],
      };
    return pt(s, a_, r);
  },
  l_ = Ee("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: a } = e;
      return [r.root, r[`margin${_e(a.margin)}`], a.fullWidth && r.fullWidth];
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
  o_ = C.forwardRef(function (r, a) {
    const l = gt({ props: r, name: "MuiFormControl" }),
      {
        children: s,
        className: u,
        color: f = "primary",
        component: p = "div",
        disabled: m = !1,
        error: h = !1,
        focused: g,
        fullWidth: v = !1,
        hiddenLabel: S = !1,
        margin: R = "none",
        required: b = !1,
        size: x = "medium",
        variant: T = "outlined",
        ..._
      } = l,
      M = {
        ...l,
        color: f,
        component: p,
        disabled: m,
        error: h,
        fullWidth: v,
        hiddenLabel: S,
        margin: R,
        required: b,
        size: x,
        variant: T,
      },
      A = i_(M),
      [D, O] = C.useState(() => {
        let ee = !1;
        return (
          s &&
            C.Children.forEach(s, (H) => {
              if (!pp(H, ["Input", "Select"])) return;
              const ae = pp(H, ["Select"]) ? H.props.input : H;
              ae && a4(ae.props) && (ee = !0);
            }),
          ee
        );
      }),
      [j, L] = C.useState(() => {
        let ee = !1;
        return (
          s &&
            C.Children.forEach(s, (H) => {
              pp(H, ["Input", "Select"]) &&
                (ec(H.props, !0) || ec(H.props.inputProps, !0)) &&
                (ee = !0);
            }),
          ee
        );
      }),
      [re, G] = C.useState(!1);
    m && re && G(!1);
    const E = g !== void 0 && !m ? g : re;
    let I;
    C.useRef(!1);
    const X = C.useCallback(() => {
        L(!0);
      }, []),
      J = C.useCallback(() => {
        L(!1);
      }, []),
      oe = C.useMemo(
        () => ({
          adornedStart: D,
          setAdornedStart: O,
          color: f,
          disabled: m,
          error: h,
          filled: j,
          focused: E,
          fullWidth: v,
          hiddenLabel: S,
          size: x,
          onBlur: () => {
            G(!1);
          },
          onFocus: () => {
            G(!0);
          },
          onEmpty: J,
          onFilled: X,
          registerEffect: I,
          required: b,
          variant: T,
        }),
        [D, f, m, h, j, E, v, S, I, J, X, b, x, T]
      );
    return $.jsx(Vh.Provider, {
      value: oe,
      children: $.jsx(l_, {
        as: p,
        ownerState: M,
        className: je(A.root, u),
        ref: a,
        ..._,
        children: s,
      }),
    });
  });
function s_(e) {
  return dt("MuiFormHelperText", e);
}
const ub = it("MuiFormHelperText", [
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
var cb;
const u_ = (e) => {
    const {
        classes: r,
        contained: a,
        size: l,
        disabled: s,
        error: u,
        filled: f,
        focused: p,
        required: m,
      } = e,
      h = {
        root: [
          "root",
          s && "disabled",
          u && "error",
          l && `size${_e(l)}`,
          a && "contained",
          p && "focused",
          f && "filled",
          m && "required",
        ],
      };
    return pt(h, s_, r);
  },
  c_ = Ee("p", {
    name: "MuiFormHelperText",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: a } = e;
      return [
        r.root,
        a.size && r[`size${_e(a.size)}`],
        a.contained && r.contained,
        a.filled && r.filled,
      ];
    },
  })(
    vt(({ theme: e }) => ({
      color: (e.vars || e).palette.text.secondary,
      ...e.typography.caption,
      textAlign: "left",
      marginTop: 3,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      [`&.${ub.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      [`&.${ub.error}`]: { color: (e.vars || e).palette.error.main },
      variants: [
        { props: { size: "small" }, style: { marginTop: 4 } },
        {
          props: ({ ownerState: r }) => r.contained,
          style: { marginLeft: 14, marginRight: 14 },
        },
      ],
    }))
  ),
  f_ = C.forwardRef(function (r, a) {
    const l = gt({ props: r, name: "MuiFormHelperText" }),
      {
        children: s,
        className: u,
        component: f = "p",
        disabled: p,
        error: m,
        filled: h,
        focused: g,
        margin: v,
        required: S,
        variant: R,
        ...b
      } = l,
      x = bl(),
      T = vl({
        props: l,
        muiFormControl: x,
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
      _ = {
        ...l,
        component: f,
        contained: T.variant === "filled" || T.variant === "outlined",
        variant: T.variant,
        size: T.size,
        disabled: T.disabled,
        error: T.error,
        filled: T.filled,
        focused: T.focused,
        required: T.required,
      };
    delete _.ownerState;
    const M = u_(_);
    return $.jsx(c_, {
      as: f,
      className: je(M.root, u),
      ref: a,
      ...b,
      ownerState: _,
      children:
        s === " "
          ? cb ||
            (cb = $.jsx("span", {
              className: "notranslate",
              "aria-hidden": !0,
              children: "​",
            }))
          : s,
    });
  });
function d_(e) {
  return dt("MuiFormLabel", e);
}
const Lo = it("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk",
  ]),
  p_ = (e) => {
    const {
        classes: r,
        color: a,
        focused: l,
        disabled: s,
        error: u,
        filled: f,
        required: p,
      } = e,
      m = {
        root: [
          "root",
          `color${_e(a)}`,
          s && "disabled",
          u && "error",
          f && "filled",
          l && "focused",
          p && "required",
        ],
        asterisk: ["asterisk", u && "error"],
      };
    return pt(m, d_, r);
  },
  h_ = Ee("label", {
    name: "MuiFormLabel",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: a } = e;
      return [
        r.root,
        a.color === "secondary" && r.colorSecondary,
        a.filled && r.filled,
      ];
    },
  })(
    vt(({ theme: e }) => ({
      color: (e.vars || e).palette.text.secondary,
      ...e.typography.body1,
      lineHeight: "1.4375em",
      padding: 0,
      position: "relative",
      variants: [
        ...Object.entries(e.palette)
          .filter(Cr())
          .map(([r]) => ({
            props: { color: r },
            style: {
              [`&.${Lo.focused}`]: { color: (e.vars || e).palette[r].main },
            },
          })),
        {
          props: {},
          style: {
            [`&.${Lo.disabled}`]: {
              color: (e.vars || e).palette.text.disabled,
            },
            [`&.${Lo.error}`]: { color: (e.vars || e).palette.error.main },
          },
        },
      ],
    }))
  ),
  m_ = Ee("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (e, r) => r.asterisk,
  })(
    vt(({ theme: e }) => ({
      [`&.${Lo.error}`]: { color: (e.vars || e).palette.error.main },
    }))
  ),
  g_ = C.forwardRef(function (r, a) {
    const l = gt({ props: r, name: "MuiFormLabel" }),
      {
        children: s,
        className: u,
        color: f,
        component: p = "label",
        disabled: m,
        error: h,
        filled: g,
        focused: v,
        required: S,
        ...R
      } = l,
      b = bl(),
      x = vl({
        props: l,
        muiFormControl: b,
        states: ["color", "required", "focused", "disabled", "error", "filled"],
      }),
      T = {
        ...l,
        color: x.color || "primary",
        component: p,
        disabled: x.disabled,
        error: x.error,
        filled: x.filled,
        focused: x.focused,
        required: x.required,
      },
      _ = p_(T);
    return $.jsxs(h_, {
      as: p,
      ownerState: T,
      className: je(_.root, u),
      ref: a,
      ...R,
      children: [
        s,
        x.required &&
          $.jsxs(m_, {
            ownerState: T,
            "aria-hidden": !0,
            className: _.asterisk,
            children: [" ", "*"],
          }),
      ],
    });
  });
function Zp(e) {
  return `scale(${e}, ${e ** 2})`;
}
const y_ = {
    entering: { opacity: 1, transform: Zp(1) },
    entered: { opacity: 1, transform: "none" },
  },
  yp =
    typeof navigator < "u" &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  Jp = C.forwardRef(function (r, a) {
    const {
        addEndListener: l,
        appear: s = !0,
        children: u,
        easing: f,
        in: p,
        onEnter: m,
        onEntered: h,
        onEntering: g,
        onExit: v,
        onExited: S,
        onExiting: R,
        style: b,
        timeout: x = "auto",
        TransitionComponent: T = Tr,
        ..._
      } = r,
      M = rS(),
      A = C.useRef(),
      D = Hh(),
      O = C.useRef(null),
      j = sn(O, is(u), a),
      L = (ee) => (H) => {
        if (ee) {
          const ae = O.current;
          H === void 0 ? ee(ae) : ee(ae, H);
        }
      },
      re = L(g),
      G = L((ee, H) => {
        bS(ee);
        const {
          duration: ae,
          delay: ce,
          easing: se,
        } = Zu({ style: b, timeout: x, easing: f }, { mode: "enter" });
        let B;
        x === "auto"
          ? ((B = D.transitions.getAutoHeightDuration(ee.clientHeight)),
            (A.current = B))
          : (B = ae),
          (ee.style.transition = [
            D.transitions.create("opacity", { duration: B, delay: ce }),
            D.transitions.create("transform", {
              duration: yp ? B : B * 0.666,
              delay: ce,
              easing: se,
            }),
          ].join(",")),
          m && m(ee, H);
      }),
      E = L(h),
      I = L(R),
      X = L((ee) => {
        const {
          duration: H,
          delay: ae,
          easing: ce,
        } = Zu({ style: b, timeout: x, easing: f }, { mode: "exit" });
        let se;
        x === "auto"
          ? ((se = D.transitions.getAutoHeightDuration(ee.clientHeight)),
            (A.current = se))
          : (se = H),
          (ee.style.transition = [
            D.transitions.create("opacity", { duration: se, delay: ae }),
            D.transitions.create("transform", {
              duration: yp ? se : se * 0.666,
              delay: yp ? ae : ae || se * 0.333,
              easing: ce,
            }),
          ].join(",")),
          (ee.style.opacity = 0),
          (ee.style.transform = Zp(0.75)),
          v && v(ee);
      }),
      J = L(S),
      oe = (ee) => {
        x === "auto" && M.start(A.current || 0, ee), l && l(O.current, ee);
      };
    return $.jsx(T, {
      appear: s,
      in: p,
      nodeRef: O,
      onEnter: G,
      onEntered: E,
      onEntering: re,
      onExit: X,
      onExited: J,
      onExiting: I,
      addEndListener: oe,
      timeout: x === "auto" ? null : x,
      ..._,
      children: (ee, { ownerState: H, ...ae }) =>
        C.cloneElement(u, {
          style: {
            opacity: 0,
            transform: Zp(0.75),
            visibility: ee === "exited" && !p ? "hidden" : void 0,
            ...y_[ee],
            ...b,
            ...u.props.style,
          },
          ref: j,
          ...ae,
        }),
    });
  });
Jp && (Jp.muiSupportAuto = !0);
const v_ = (e) => {
    const { classes: r, disableUnderline: a } = e,
      s = pt({ root: ["root", !a && "underline"], input: ["input"] }, o4, r);
    return { ...r, ...s };
  },
  b_ = Ee(kc, {
    shouldForwardProp: (e) => ir(e) || e === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: a } = e;
      return [...Nc(e, r), !a.disableUnderline && r.underline];
    },
  })(
    vt(({ theme: e }) => {
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
              props: ({ ownerState: l }) => l.formControl,
              style: { "label + &": { marginTop: 16 } },
            },
            {
              props: ({ ownerState: l }) => !l.disableUnderline,
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
                [`&.${wo.focused}:after`]: {
                  transform: "scaleX(1) translateX(0)",
                },
                [`&.${wo.error}`]: {
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
                [`&:hover:not(.${wo.disabled}, .${wo.error}):before`]: {
                  borderBottom: `2px solid ${
                    (e.vars || e).palette.text.primary
                  }`,
                  "@media (hover: none)": { borderBottom: `1px solid ${a}` },
                },
                [`&.${wo.disabled}:before`]: { borderBottomStyle: "dotted" },
              },
            },
            ...Object.entries(e.palette)
              .filter(Cr())
              .map(([l]) => ({
                props: { color: l, disableUnderline: !1 },
                style: {
                  "&::after": {
                    borderBottom: `2px solid ${(e.vars || e).palette[l].main}`,
                  },
                },
              })),
          ],
        }
      );
    })
  ),
  S_ = Ee(Uc, { name: "MuiInput", slot: "Input", overridesResolver: Bc })({}),
  Yh = C.forwardRef(function (r, a) {
    const l = gt({ props: r, name: "MuiInput" }),
      {
        disableUnderline: s = !1,
        components: u = {},
        componentsProps: f,
        fullWidth: p = !1,
        inputComponent: m = "input",
        multiline: h = !1,
        slotProps: g,
        slots: v = {},
        type: S = "text",
        ...R
      } = l,
      b = v_(l),
      T = { root: { ownerState: { disableUnderline: s } } },
      _ = g ?? f ? on(g ?? f, T) : T,
      M = v.root ?? u.Root ?? b_,
      A = v.input ?? u.Input ?? S_;
    return $.jsx(Fh, {
      slots: { root: M, input: A },
      slotProps: _,
      fullWidth: p,
      inputComponent: m,
      multiline: h,
      ref: a,
      type: S,
      ...R,
      classes: b,
    });
  });
Yh.muiName = "Input";
function x_(e) {
  return dt("MuiInputLabel", e);
}
it("MuiInputLabel", [
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
const E_ = (e) => {
    const {
        classes: r,
        formControl: a,
        size: l,
        shrink: s,
        disableAnimation: u,
        variant: f,
        required: p,
      } = e,
      m = {
        root: [
          "root",
          a && "formControl",
          !u && "animated",
          s && "shrink",
          l && l !== "normal" && `size${_e(l)}`,
          f,
        ],
        asterisk: [p && "asterisk"],
      },
      h = pt(m, x_, r);
    return { ...r, ...h };
  },
  R_ = Ee(g_, {
    shouldForwardProp: (e) => ir(e) || e === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: a } = e;
      return [
        { [`& .${Lo.asterisk}`]: r.asterisk },
        r.root,
        a.formControl && r.formControl,
        a.size === "small" && r.sizeSmall,
        a.shrink && r.shrink,
        !a.disableAnimation && r.animated,
        a.focused && r.focused,
        r[a.variant],
      ];
    },
  })(
    vt(({ theme: e }) => ({
      display: "block",
      transformOrigin: "top left",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: "100%",
      variants: [
        {
          props: ({ ownerState: r }) => r.formControl,
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
          props: ({ ownerState: r }) => r.shrink,
          style: {
            transform: "translate(0, -1.5px) scale(0.75)",
            transformOrigin: "top left",
            maxWidth: "133%",
          },
        },
        {
          props: ({ ownerState: r }) => !r.disableAnimation,
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
          props: ({ variant: r, ownerState: a }) => r === "filled" && a.shrink,
          style: {
            userSelect: "none",
            pointerEvents: "auto",
            transform: "translate(12px, 7px) scale(0.75)",
            maxWidth: "calc(133% - 24px)",
          },
        },
        {
          props: ({ variant: r, ownerState: a, size: l }) =>
            r === "filled" && a.shrink && l === "small",
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
          props: ({ variant: r, ownerState: a }) =>
            r === "outlined" && a.shrink,
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
  C_ = C.forwardRef(function (r, a) {
    const l = gt({ name: "MuiInputLabel", props: r }),
      {
        disableAnimation: s = !1,
        margin: u,
        shrink: f,
        variant: p,
        className: m,
        ...h
      } = l,
      g = bl();
    let v = f;
    typeof v > "u" && g && (v = g.filled || g.focused || g.adornedStart);
    const S = vl({
        props: l,
        muiFormControl: g,
        states: ["size", "variant", "required", "focused"],
      }),
      R = {
        ...l,
        disableAnimation: s,
        formControl: g,
        shrink: v,
        size: S.size,
        variant: S.variant,
        required: S.required,
        focused: S.focused,
      },
      b = E_(R);
    return $.jsx(R_, {
      "data-shrink": v,
      ref: a,
      className: je(b.root, m),
      ...h,
      ownerState: R,
      classes: b,
    });
  }),
  w_ = C.createContext({});
function T_(e) {
  return dt("MuiList", e);
}
it("MuiList", ["root", "padding", "dense", "subheader"]);
const A_ = (e) => {
    const { classes: r, disablePadding: a, dense: l, subheader: s } = e;
    return pt(
      { root: ["root", !a && "padding", l && "dense", s && "subheader"] },
      T_,
      r
    );
  },
  O_ = Ee("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: a } = e;
      return [
        r.root,
        !a.disablePadding && r.padding,
        a.dense && r.dense,
        a.subheader && r.subheader,
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
  __ = C.forwardRef(function (r, a) {
    const l = gt({ props: r, name: "MuiList" }),
      {
        children: s,
        className: u,
        component: f = "ul",
        dense: p = !1,
        disablePadding: m = !1,
        subheader: h,
        ...g
      } = l,
      v = C.useMemo(() => ({ dense: p }), [p]),
      S = { ...l, component: f, dense: p, disablePadding: m },
      R = A_(S);
    return $.jsx(w_.Provider, {
      value: v,
      children: $.jsxs(O_, {
        as: f,
        className: je(R.root, u),
        ref: a,
        ownerState: S,
        ...g,
        children: [h, s],
      }),
    });
  });
function vp(e, r, a) {
  return e === r
    ? e.firstChild
    : r && r.nextElementSibling
    ? r.nextElementSibling
    : a
    ? null
    : e.firstChild;
}
function fb(e, r, a) {
  return e === r
    ? a
      ? e.firstChild
      : e.lastChild
    : r && r.previousElementSibling
    ? r.previousElementSibling
    : a
    ? null
    : e.lastChild;
}
function CS(e, r) {
  if (r === void 0) return !0;
  let a = e.innerText;
  return (
    a === void 0 && (a = e.textContent),
    (a = a.trim().toLowerCase()),
    a.length === 0
      ? !1
      : r.repeating
      ? a[0] === r.keys[0]
      : a.startsWith(r.keys.join(""))
  );
}
function To(e, r, a, l, s, u) {
  let f = !1,
    p = s(e, r, r ? a : !1);
  for (; p; ) {
    if (p === e.firstChild) {
      if (f) return !1;
      f = !0;
    }
    const m = l ? !1 : p.disabled || p.getAttribute("aria-disabled") === "true";
    if (!p.hasAttribute("tabindex") || !CS(p, u) || m) p = s(e, p, a);
    else return p.focus(), !0;
  }
  return !1;
}
const M_ = C.forwardRef(function (r, a) {
  const {
      actions: l,
      autoFocus: s = !1,
      autoFocusItem: u = !1,
      children: f,
      className: p,
      disabledItemsFocusable: m = !1,
      disableListWrap: h = !1,
      onKeyDown: g,
      variant: v = "selectedMenu",
      ...S
    } = r,
    R = C.useRef(null),
    b = C.useRef({
      keys: [],
      repeating: !0,
      previousKeyMatched: !0,
      lastTime: null,
    });
  ui(() => {
    s && R.current.focus();
  }, [s]),
    C.useImperativeHandle(
      l,
      () => ({
        adjustStyleForScrollbar: (A, { direction: D }) => {
          const O = !R.current.style.width;
          if (A.clientHeight < R.current.clientHeight && O) {
            const j = `${aS(Wr(A))}px`;
            (R.current.style[D === "rtl" ? "paddingLeft" : "paddingRight"] = j),
              (R.current.style.width = `calc(100% + ${j})`);
          }
          return R.current;
        },
      }),
      []
    );
  const x = (A) => {
      const D = R.current,
        O = A.key;
      if (A.ctrlKey || A.metaKey || A.altKey) {
        g && g(A);
        return;
      }
      const L = nr(D).activeElement;
      if (O === "ArrowDown") A.preventDefault(), To(D, L, h, m, vp);
      else if (O === "ArrowUp") A.preventDefault(), To(D, L, h, m, fb);
      else if (O === "Home") A.preventDefault(), To(D, null, h, m, vp);
      else if (O === "End") A.preventDefault(), To(D, null, h, m, fb);
      else if (O.length === 1) {
        const re = b.current,
          G = O.toLowerCase(),
          E = performance.now();
        re.keys.length > 0 &&
          (E - re.lastTime > 500
            ? ((re.keys = []),
              (re.repeating = !0),
              (re.previousKeyMatched = !0))
            : re.repeating && G !== re.keys[0] && (re.repeating = !1)),
          (re.lastTime = E),
          re.keys.push(G);
        const I = L && !re.repeating && CS(L, re);
        re.previousKeyMatched && (I || To(D, L, !1, m, vp, re))
          ? A.preventDefault()
          : (re.previousKeyMatched = !1);
      }
      g && g(A);
    },
    T = sn(R, a);
  let _ = -1;
  C.Children.forEach(f, (A, D) => {
    if (!C.isValidElement(A)) {
      _ === D && ((_ += 1), _ >= f.length && (_ = -1));
      return;
    }
    A.props.disabled ||
      (((v === "selectedMenu" && A.props.selected) || _ === -1) && (_ = D)),
      _ === D &&
        (A.props.disabled ||
          A.props.muiSkipListHighlight ||
          A.type.muiSkipListHighlight) &&
        ((_ += 1), _ >= f.length && (_ = -1));
  });
  const M = C.Children.map(f, (A, D) => {
    if (D === _) {
      const O = {};
      return (
        u && (O.autoFocus = !0),
        A.props.tabIndex === void 0 && v === "selectedMenu" && (O.tabIndex = 0),
        C.cloneElement(A, O)
      );
    }
    return A;
  });
  return $.jsx(__, {
    role: "menu",
    ref: T,
    className: p,
    onKeyDown: x,
    tabIndex: s ? 0 : -1,
    ...S,
    children: M,
  });
});
function D_(e) {
  return dt("MuiPopover", e);
}
it("MuiPopover", ["root", "paper"]);
function db(e, r) {
  let a = 0;
  return (
    typeof r == "number"
      ? (a = r)
      : r === "center"
      ? (a = e.height / 2)
      : r === "bottom" && (a = e.height),
    a
  );
}
function pb(e, r) {
  let a = 0;
  return (
    typeof r == "number"
      ? (a = r)
      : r === "center"
      ? (a = e.width / 2)
      : r === "right" && (a = e.width),
    a
  );
}
function hb(e) {
  return [e.horizontal, e.vertical]
    .map((r) => (typeof r == "number" ? `${r}px` : r))
    .join(" ");
}
function bp(e) {
  return typeof e == "function" ? e() : e;
}
const z_ = (e) => {
    const { classes: r } = e;
    return pt({ root: ["root"], paper: ["paper"] }, D_, r);
  },
  N_ = Ee(e_, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (e, r) => r.root,
  })({}),
  wS = Ee(SS, {
    name: "MuiPopover",
    slot: "Paper",
    overridesResolver: (e, r) => r.paper,
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
  B_ = C.forwardRef(function (r, a) {
    const l = gt({ props: r, name: "MuiPopover" }),
      {
        action: s,
        anchorEl: u,
        anchorOrigin: f = { vertical: "top", horizontal: "left" },
        anchorPosition: p,
        anchorReference: m = "anchorEl",
        children: h,
        className: g,
        container: v,
        elevation: S = 8,
        marginThreshold: R = 16,
        open: b,
        PaperProps: x = {},
        slots: T = {},
        slotProps: _ = {},
        transformOrigin: M = { vertical: "top", horizontal: "left" },
        TransitionComponent: A = Jp,
        transitionDuration: D = "auto",
        TransitionProps: { onEntering: O, ...j } = {},
        disableScrollLock: L = !1,
        ...re
      } = l,
      G = (_ == null ? void 0 : _.paper) ?? x,
      E = C.useRef(),
      I = {
        ...l,
        anchorOrigin: f,
        anchorReference: m,
        elevation: S,
        marginThreshold: R,
        externalPaperSlotProps: G,
        transformOrigin: M,
        TransitionComponent: A,
        transitionDuration: D,
        TransitionProps: j,
      },
      X = z_(I),
      J = C.useCallback(() => {
        if (m === "anchorPosition") return p;
        const ve = bp(u),
          Ae = (
            ve && ve.nodeType === 1 ? ve : nr(E.current).body
          ).getBoundingClientRect();
        return {
          top: Ae.top + db(Ae, f.vertical),
          left: Ae.left + pb(Ae, f.horizontal),
        };
      }, [u, f.horizontal, f.vertical, p, m]),
      oe = C.useCallback(
        (ve) => ({
          vertical: db(ve, M.vertical),
          horizontal: pb(ve, M.horizontal),
        }),
        [M.horizontal, M.vertical]
      ),
      ee = C.useCallback(
        (ve) => {
          const De = { width: ve.offsetWidth, height: ve.offsetHeight },
            Ae = oe(De);
          if (m === "none")
            return { top: null, left: null, transformOrigin: hb(Ae) };
          const Ye = J();
          let Be = Ye.top - Ae.vertical,
            Ze = Ye.left - Ae.horizontal;
          const Ot = Be + De.height,
            Bt = Ze + De.width,
            N = Wr(bp(u)),
            q = N.innerHeight - R,
            Y = N.innerWidth - R;
          if (R !== null && Be < R) {
            const fe = Be - R;
            (Be -= fe), (Ae.vertical += fe);
          } else if (R !== null && Ot > q) {
            const fe = Ot - q;
            (Be -= fe), (Ae.vertical += fe);
          }
          if (R !== null && Ze < R) {
            const fe = Ze - R;
            (Ze -= fe), (Ae.horizontal += fe);
          } else if (Bt > Y) {
            const fe = Bt - Y;
            (Ze -= fe), (Ae.horizontal += fe);
          }
          return {
            top: `${Math.round(Be)}px`,
            left: `${Math.round(Ze)}px`,
            transformOrigin: hb(Ae),
          };
        },
        [u, m, J, oe, R]
      ),
      [H, ae] = C.useState(b),
      ce = C.useCallback(() => {
        const ve = E.current;
        if (!ve) return;
        const De = ee(ve);
        De.top !== null && ve.style.setProperty("top", De.top),
          De.left !== null && (ve.style.left = De.left),
          (ve.style.transformOrigin = De.transformOrigin),
          ae(!0);
      }, [ee]);
    C.useEffect(
      () => (
        L && window.addEventListener("scroll", ce),
        () => window.removeEventListener("scroll", ce)
      ),
      [u, L, ce]
    );
    const se = (ve, De) => {
        O && O(ve, De), ce();
      },
      B = () => {
        ae(!1);
      };
    C.useEffect(() => {
      b && ce();
    }),
      C.useImperativeHandle(
        s,
        () =>
          b
            ? {
                updatePosition: () => {
                  ce();
                },
              }
            : null,
        [b, ce]
      ),
      C.useEffect(() => {
        if (!b) return;
        const ve = tS(() => {
            ce();
          }),
          De = Wr(u);
        return (
          De.addEventListener("resize", ve),
          () => {
            ve.clear(), De.removeEventListener("resize", ve);
          }
        );
      }, [u, b, ce]);
    let W = D;
    D === "auto" && !A.muiSupportAuto && (W = void 0);
    const he = v || (u ? nr(bp(u)).body : void 0),
      pe = { slots: T, slotProps: { ..._, paper: G } },
      [ue, ye] = Yn("paper", {
        elementType: wS,
        externalForwardedProps: pe,
        additionalProps: {
          elevation: S,
          className: je(X.paper, G == null ? void 0 : G.className),
          style: H ? G.style : { ...G.style, opacity: 0 },
        },
        ownerState: I,
      }),
      [be, { slotProps: Ue, ...Ce }] = Yn("root", {
        elementType: N_,
        externalForwardedProps: pe,
        additionalProps: {
          slotProps: { backdrop: { invisible: !0 } },
          container: he,
          open: b,
        },
        ownerState: I,
        className: je(X.root, g),
      }),
      we = sn(E, ye.ref);
    return $.jsx(be, {
      ...Ce,
      ...(!Qp(be) && { slotProps: Ue, disableScrollLock: L }),
      ...re,
      ref: a,
      children: $.jsx(A, {
        appear: !0,
        in: b,
        onEntering: se,
        onExited: B,
        timeout: W,
        ...j,
        children: $.jsx(ue, { ...ye, ref: we, children: h }),
      }),
    });
  });
function k_(e) {
  return dt("MuiMenu", e);
}
it("MuiMenu", ["root", "paper", "list"]);
const U_ = { vertical: "top", horizontal: "right" },
  L_ = { vertical: "top", horizontal: "left" },
  $_ = (e) => {
    const { classes: r } = e;
    return pt({ root: ["root"], paper: ["paper"], list: ["list"] }, k_, r);
  },
  j_ = Ee(B_, {
    shouldForwardProp: (e) => ir(e) || e === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (e, r) => r.root,
  })({}),
  H_ = Ee(wS, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (e, r) => r.paper,
  })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }),
  P_ = Ee(M_, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (e, r) => r.list,
  })({ outline: 0 }),
  q_ = C.forwardRef(function (r, a) {
    const l = gt({ props: r, name: "MuiMenu" }),
      {
        autoFocus: s = !0,
        children: u,
        className: f,
        disableAutoFocusItem: p = !1,
        MenuListProps: m = {},
        onClose: h,
        open: g,
        PaperProps: v = {},
        PopoverClasses: S,
        transitionDuration: R = "auto",
        TransitionProps: { onEntering: b, ...x } = {},
        variant: T = "selectedMenu",
        slots: _ = {},
        slotProps: M = {},
        ...A
      } = l,
      D = d5(),
      O = {
        ...l,
        autoFocus: s,
        disableAutoFocusItem: p,
        MenuListProps: m,
        onEntering: b,
        PaperProps: v,
        transitionDuration: R,
        TransitionProps: x,
        variant: T,
      },
      j = $_(O),
      L = s && !p && g,
      re = C.useRef(null),
      G = (H, ae) => {
        re.current &&
          re.current.adjustStyleForScrollbar(H, {
            direction: D ? "rtl" : "ltr",
          }),
          b && b(H, ae);
      },
      E = (H) => {
        H.key === "Tab" && (H.preventDefault(), h && h(H, "tabKeyDown"));
      };
    let I = -1;
    C.Children.map(u, (H, ae) => {
      C.isValidElement(H) &&
        (H.props.disabled ||
          (((T === "selectedMenu" && H.props.selected) || I === -1) &&
            (I = ae)));
    });
    const X = _.paper ?? H_,
      J = M.paper ?? v,
      oe = Vv({
        elementType: _.root,
        externalSlotProps: M.root,
        ownerState: O,
        className: [j.root, f],
      }),
      ee = Vv({
        elementType: X,
        externalSlotProps: J,
        ownerState: O,
        className: j.paper,
      });
    return $.jsx(j_, {
      onClose: h,
      anchorOrigin: { vertical: "bottom", horizontal: D ? "right" : "left" },
      transformOrigin: D ? U_ : L_,
      slots: { paper: X, root: _.root },
      slotProps: { root: oe, paper: ee },
      open: g,
      ref: a,
      transitionDuration: R,
      TransitionProps: { onEntering: G, ...x },
      ownerState: O,
      ...A,
      classes: S,
      children: $.jsx(P_, {
        onKeyDown: E,
        actions: re,
        autoFocus: s && (I === -1 || p),
        autoFocusItem: L,
        variant: T,
        ...m,
        className: je(j.list, m.className),
        children: u,
      }),
    });
  });
function V_(e) {
  return dt("MuiNativeSelect", e);
}
const Ih = it("MuiNativeSelect", [
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
  F_ = (e) => {
    const {
        classes: r,
        variant: a,
        disabled: l,
        multiple: s,
        open: u,
        error: f,
      } = e,
      p = {
        select: ["select", a, l && "disabled", s && "multiple", f && "error"],
        icon: ["icon", `icon${_e(a)}`, u && "iconOpen", l && "disabled"],
      };
    return pt(p, V_, r);
  },
  TS = Ee("select")(({ theme: e }) => ({
    MozAppearance: "none",
    WebkitAppearance: "none",
    userSelect: "none",
    borderRadius: 0,
    cursor: "pointer",
    "&:focus": { borderRadius: 0 },
    [`&.${Ih.disabled}`]: { cursor: "default" },
    "&[multiple]": { height: "auto" },
    "&:not([multiple]) option, &:not([multiple]) optgroup": {
      backgroundColor: (e.vars || e).palette.background.paper,
    },
    variants: [
      {
        props: ({ ownerState: r }) =>
          r.variant !== "filled" && r.variant !== "outlined",
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
  G_ = Ee(TS, {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: ir,
    overridesResolver: (e, r) => {
      const { ownerState: a } = e;
      return [
        r.select,
        r[a.variant],
        a.error && r.error,
        { [`&.${Ih.multiple}`]: r.multiple },
      ];
    },
  })({}),
  AS = Ee("svg")(({ theme: e }) => ({
    position: "absolute",
    right: 0,
    top: "calc(50% - .5em)",
    pointerEvents: "none",
    color: (e.vars || e).palette.action.active,
    [`&.${Ih.disabled}`]: { color: (e.vars || e).palette.action.disabled },
    variants: [
      {
        props: ({ ownerState: r }) => r.open,
        style: { transform: "rotate(180deg)" },
      },
      { props: { variant: "filled" }, style: { right: 7 } },
      { props: { variant: "outlined" }, style: { right: 7 } },
    ],
  })),
  Y_ = Ee(AS, {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (e, r) => {
      const { ownerState: a } = e;
      return [
        r.icon,
        a.variant && r[`icon${_e(a.variant)}`],
        a.open && r.iconOpen,
      ];
    },
  })({}),
  I_ = C.forwardRef(function (r, a) {
    const {
        className: l,
        disabled: s,
        error: u,
        IconComponent: f,
        inputRef: p,
        variant: m = "standard",
        ...h
      } = r,
      g = { ...r, disabled: s, variant: m, error: u },
      v = F_(g);
    return $.jsxs(C.Fragment, {
      children: [
        $.jsx(G_, {
          ownerState: g,
          className: je(v.select, l),
          disabled: s,
          ref: p || a,
          ...h,
        }),
        r.multiple
          ? null
          : $.jsx(Y_, { as: f, ownerState: g, className: v.icon }),
      ],
    });
  });
var mb;
const X_ = Ee("fieldset", { shouldForwardProp: ir })({
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
  K_ = Ee("legend", { shouldForwardProp: ir })(
    vt(({ theme: e }) => ({
      float: "unset",
      width: "auto",
      overflow: "hidden",
      variants: [
        {
          props: ({ ownerState: r }) => !r.withLabel,
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
          props: ({ ownerState: r }) => r.withLabel,
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
          props: ({ ownerState: r }) => r.withLabel && r.notched,
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
function Q_(e) {
  const {
      children: r,
      classes: a,
      className: l,
      label: s,
      notched: u,
      ...f
    } = e,
    p = s != null && s !== "",
    m = { ...e, notched: u, withLabel: p };
  return $.jsx(X_, {
    "aria-hidden": !0,
    className: l,
    ownerState: m,
    ...f,
    children: $.jsx(K_, {
      ownerState: m,
      children: p
        ? $.jsx("span", { children: s })
        : mb ||
          (mb = $.jsx("span", {
            className: "notranslate",
            "aria-hidden": !0,
            children: "​",
          })),
    }),
  });
}
const W_ = (e) => {
    const { classes: r } = e,
      l = pt(
        {
          root: ["root"],
          notchedOutline: ["notchedOutline"],
          input: ["input"],
        },
        s4,
        r
      );
    return { ...r, ...l };
  },
  Z_ = Ee(kc, {
    shouldForwardProp: (e) => ir(e) || e === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: Nc,
  })(
    vt(({ theme: e }) => {
      const r =
        e.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.23)"
          : "rgba(255, 255, 255, 0.23)";
      return {
        position: "relative",
        borderRadius: (e.vars || e).shape.borderRadius,
        [`&:hover .${mr.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.text.primary,
        },
        "@media (hover: none)": {
          [`&:hover .${mr.notchedOutline}`]: {
            borderColor: e.vars
              ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
              : r,
          },
        },
        [`&.${mr.focused} .${mr.notchedOutline}`]: { borderWidth: 2 },
        variants: [
          ...Object.entries(e.palette)
            .filter(Cr())
            .map(([a]) => ({
              props: { color: a },
              style: {
                [`&.${mr.focused} .${mr.notchedOutline}`]: {
                  borderColor: (e.vars || e).palette[a].main,
                },
              },
            })),
          {
            props: {},
            style: {
              [`&.${mr.error} .${mr.notchedOutline}`]: {
                borderColor: (e.vars || e).palette.error.main,
              },
              [`&.${mr.disabled} .${mr.notchedOutline}`]: {
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
            props: ({ ownerState: a, size: l }) => a.multiline && l === "small",
            style: { padding: "8.5px 14px" },
          },
        ],
      };
    })
  ),
  J_ = Ee(Q_, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (e, r) => r.notchedOutline,
  })(
    vt(({ theme: e }) => {
      const r =
        e.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.23)"
          : "rgba(255, 255, 255, 0.23)";
      return {
        borderColor: e.vars
          ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
          : r,
      };
    })
  ),
  eM = Ee(Uc, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: Bc,
  })(
    vt(({ theme: e }) => ({
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
        { props: ({ ownerState: r }) => r.multiline, style: { padding: 0 } },
        {
          props: ({ ownerState: r }) => r.startAdornment,
          style: { paddingLeft: 0 },
        },
        {
          props: ({ ownerState: r }) => r.endAdornment,
          style: { paddingRight: 0 },
        },
      ],
    }))
  ),
  Xh = C.forwardRef(function (r, a) {
    var l;
    const s = gt({ props: r, name: "MuiOutlinedInput" }),
      {
        components: u = {},
        fullWidth: f = !1,
        inputComponent: p = "input",
        label: m,
        multiline: h = !1,
        notched: g,
        slots: v = {},
        type: S = "text",
        ...R
      } = s,
      b = W_(s),
      x = bl(),
      T = vl({
        props: s,
        muiFormControl: x,
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
      _ = {
        ...s,
        color: T.color || "primary",
        disabled: T.disabled,
        error: T.error,
        focused: T.focused,
        formControl: x,
        fullWidth: f,
        hiddenLabel: T.hiddenLabel,
        multiline: h,
        size: T.size,
        type: S,
      },
      M = v.root ?? u.Root ?? Z_,
      A = v.input ?? u.Input ?? eM;
    return $.jsx(Fh, {
      slots: { root: M, input: A },
      renderSuffix: (D) =>
        $.jsx(J_, {
          ownerState: _,
          className: b.notchedOutline,
          label:
            m != null && m !== "" && T.required
              ? l || (l = $.jsxs(C.Fragment, { children: [m, " ", "*"] }))
              : m,
          notched:
            typeof g < "u" ? g : !!(D.startAdornment || D.filled || D.focused),
        }),
      fullWidth: f,
      inputComponent: p,
      multiline: h,
      ref: a,
      type: S,
      ...R,
      classes: { ...b, notchedOutline: null },
    });
  });
Xh.muiName = "Input";
function OS(e) {
  return dt("MuiSelect", e);
}
const Ao = it("MuiSelect", [
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
var gb;
const tM = Ee(TS, {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (e, r) => {
      const { ownerState: a } = e;
      return [
        { [`&.${Ao.select}`]: r.select },
        { [`&.${Ao.select}`]: r[a.variant] },
        { [`&.${Ao.error}`]: r.error },
        { [`&.${Ao.multiple}`]: r.multiple },
      ];
    },
  })({
    [`&.${Ao.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
  }),
  nM = Ee(AS, {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (e, r) => {
      const { ownerState: a } = e;
      return [
        r.icon,
        a.variant && r[`icon${_e(a.variant)}`],
        a.open && r.iconOpen,
      ];
    },
  })({}),
  rM = Ee("input", {
    shouldForwardProp: (e) => mS(e) && e !== "classes",
    name: "MuiSelect",
    slot: "NativeInput",
    overridesResolver: (e, r) => r.nativeInput,
  })({
    bottom: 0,
    left: 0,
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    width: "100%",
    boxSizing: "border-box",
  });
function yb(e, r) {
  return typeof r == "object" && r !== null ? e === r : String(e) === String(r);
}
function aM(e) {
  return e == null || (typeof e == "string" && !e.trim());
}
const iM = (e) => {
    const {
        classes: r,
        variant: a,
        disabled: l,
        multiple: s,
        open: u,
        error: f,
      } = e,
      p = {
        select: ["select", a, l && "disabled", s && "multiple", f && "error"],
        icon: ["icon", `icon${_e(a)}`, u && "iconOpen", l && "disabled"],
        nativeInput: ["nativeInput"],
      };
    return pt(p, OS, r);
  },
  lM = C.forwardRef(function (r, a) {
    var Gt;
    const {
        "aria-describedby": l,
        "aria-label": s,
        autoFocus: u,
        autoWidth: f,
        children: p,
        className: m,
        defaultOpen: h,
        defaultValue: g,
        disabled: v,
        displayEmpty: S,
        error: R = !1,
        IconComponent: b,
        inputRef: x,
        labelId: T,
        MenuProps: _ = {},
        multiple: M,
        name: A,
        onBlur: D,
        onChange: O,
        onClose: j,
        onFocus: L,
        onOpen: re,
        open: G,
        readOnly: E,
        renderValue: I,
        required: X,
        SelectDisplayProps: J = {},
        tabIndex: oe,
        type: ee,
        value: H,
        variant: ae = "standard",
        ...ce
      } = r,
      [se, B] = jv({ controlled: H, default: g, name: "Select" }),
      [W, he] = jv({ controlled: G, default: h, name: "Select" }),
      pe = C.useRef(null),
      ue = C.useRef(null),
      [ye, be] = C.useState(null),
      { current: Ue } = C.useRef(G != null),
      [Ce, we] = C.useState(),
      ve = sn(a, x),
      De = C.useCallback((Te) => {
        (ue.current = Te), Te && be(Te);
      }, []),
      Ae = ye == null ? void 0 : ye.parentNode;
    C.useImperativeHandle(
      ve,
      () => ({
        focus: () => {
          ue.current.focus();
        },
        node: pe.current,
        value: se,
      }),
      [se]
    ),
      C.useEffect(() => {
        h &&
          W &&
          ye &&
          !Ue &&
          (we(f ? null : Ae.clientWidth), ue.current.focus());
      }, [ye, f]),
      C.useEffect(() => {
        u && ue.current.focus();
      }, [u]),
      C.useEffect(() => {
        if (!T) return;
        const Te = nr(ue.current).getElementById(T);
        if (Te) {
          const Fe = () => {
            getSelection().isCollapsed && ue.current.focus();
          };
          return (
            Te.addEventListener("click", Fe),
            () => {
              Te.removeEventListener("click", Fe);
            }
          );
        }
      }, [T]);
    const Ye = (Te, Fe) => {
        Te ? re && re(Fe) : j && j(Fe),
          Ue || (we(f ? null : Ae.clientWidth), he(Te));
      },
      Be = (Te) => {
        Te.button === 0 &&
          (Te.preventDefault(), ue.current.focus(), Ye(!0, Te));
      },
      Ze = (Te) => {
        Ye(!1, Te);
      },
      Ot = C.Children.toArray(p),
      Bt = (Te) => {
        const Fe = Ot.find((Ke) => Ke.props.value === Te.target.value);
        Fe !== void 0 && (B(Fe.props.value), O && O(Te, Fe));
      },
      N = (Te) => (Fe) => {
        let Ke;
        if (Fe.currentTarget.hasAttribute("tabindex")) {
          if (M) {
            Ke = Array.isArray(se) ? se.slice() : [];
            const Zr = se.indexOf(Te.props.value);
            Zr === -1 ? Ke.push(Te.props.value) : Ke.splice(Zr, 1);
          } else Ke = Te.props.value;
          if (
            (Te.props.onClick && Te.props.onClick(Fe), se !== Ke && (B(Ke), O))
          ) {
            const Zr = Fe.nativeEvent || Fe,
              ss = new Zr.constructor(Zr.type, Zr);
            Object.defineProperty(ss, "target", {
              writable: !0,
              value: { value: Ke, name: A },
            }),
              O(ss, Te);
          }
          M || Ye(!1, Fe);
        }
      },
      q = (Te) => {
        E ||
          ([" ", "ArrowUp", "ArrowDown", "Enter"].includes(Te.key) &&
            (Te.preventDefault(), Ye(!0, Te)));
      },
      Y = ye !== null && W,
      fe = (Te) => {
        !Y &&
          D &&
          (Object.defineProperty(Te, "target", {
            writable: !0,
            value: { value: se, name: A },
          }),
          D(Te));
      };
    delete ce["aria-invalid"];
    let Q, de;
    const me = [];
    let Me = !1;
    (ec({ value: se }) || S) && (I ? (Q = I(se)) : (Me = !0));
    const lt = Ot.map((Te) => {
      if (!C.isValidElement(Te)) return null;
      let Fe;
      if (M) {
        if (!Array.isArray(se)) throw new Error(Kr(2));
        (Fe = se.some((Ke) => yb(Ke, Te.props.value))),
          Fe && Me && me.push(Te.props.children);
      } else
        (Fe = yb(se, Te.props.value)), Fe && Me && (de = Te.props.children);
      return C.cloneElement(Te, {
        "aria-selected": Fe ? "true" : "false",
        onClick: N(Te),
        onKeyUp: (Ke) => {
          Ke.key === " " && Ke.preventDefault(),
            Te.props.onKeyUp && Te.props.onKeyUp(Ke);
        },
        role: "option",
        selected: Fe,
        value: void 0,
        "data-value": Te.props.value,
      });
    });
    Me &&
      (M
        ? me.length === 0
          ? (Q = null)
          : (Q = me.reduce(
              (Te, Fe, Ke) => (
                Te.push(Fe), Ke < me.length - 1 && Te.push(", "), Te
              ),
              []
            ))
        : (Q = de));
    let ot = Ce;
    !f && Ue && ye && (ot = Ae.clientWidth);
    let kt;
    typeof oe < "u" ? (kt = oe) : (kt = v ? null : 0);
    const lr = J.id || (A ? `mui-component-select-${A}` : void 0),
      dn = { ...r, variant: ae, value: se, open: Y, error: R },
      Je = iM(dn),
      or = {
        ..._.PaperProps,
        ...((Gt = _.slotProps) == null ? void 0 : Gt.paper),
      },
      pn = Dc();
    return $.jsxs(C.Fragment, {
      children: [
        $.jsx(tM, {
          as: "div",
          ref: De,
          tabIndex: kt,
          role: "combobox",
          "aria-controls": Y ? pn : void 0,
          "aria-disabled": v ? "true" : void 0,
          "aria-expanded": Y ? "true" : "false",
          "aria-haspopup": "listbox",
          "aria-label": s,
          "aria-labelledby": [T, lr].filter(Boolean).join(" ") || void 0,
          "aria-describedby": l,
          "aria-required": X ? "true" : void 0,
          "aria-invalid": R ? "true" : void 0,
          onKeyDown: q,
          onMouseDown: v || E ? null : Be,
          onBlur: fe,
          onFocus: L,
          ...J,
          ownerState: dn,
          className: je(J.className, Je.select, m),
          id: lr,
          children: aM(Q)
            ? gb ||
              (gb = $.jsx("span", {
                className: "notranslate",
                "aria-hidden": !0,
                children: "​",
              }))
            : Q,
        }),
        $.jsx(rM, {
          "aria-invalid": R,
          value: Array.isArray(se) ? se.join(",") : se,
          name: A,
          ref: pe,
          "aria-hidden": !0,
          onChange: Bt,
          tabIndex: -1,
          disabled: v,
          className: Je.nativeInput,
          autoFocus: u,
          required: X,
          ...ce,
          ownerState: dn,
        }),
        $.jsx(nM, { as: b, className: Je.icon, ownerState: dn }),
        $.jsx(q_, {
          id: `menu-${A || ""}`,
          anchorEl: Ae,
          open: Y,
          onClose: Ze,
          anchorOrigin: { vertical: "bottom", horizontal: "center" },
          transformOrigin: { vertical: "top", horizontal: "center" },
          ..._,
          MenuListProps: {
            "aria-labelledby": T,
            role: "listbox",
            "aria-multiselectable": M ? "true" : void 0,
            disableListWrap: !0,
            id: pn,
            ..._.MenuListProps,
          },
          slotProps: {
            ..._.slotProps,
            paper: {
              ...or,
              style: { minWidth: ot, ...(or != null ? or.style : null) },
            },
          },
          children: lt,
        }),
      ],
    });
  }),
  oM = (e) => {
    const { classes: r } = e,
      l = pt({ root: ["root"] }, OS, r);
    return { ...r, ...l };
  },
  Kh = {
    name: "MuiSelect",
    overridesResolver: (e, r) => r.root,
    shouldForwardProp: (e) => ir(e) && e !== "variant",
    slot: "Root",
  },
  sM = Ee(Yh, Kh)(""),
  uM = Ee(Xh, Kh)(""),
  cM = Ee(Gh, Kh)(""),
  _S = C.forwardRef(function (r, a) {
    const l = gt({ name: "MuiSelect", props: r }),
      {
        autoWidth: s = !1,
        children: u,
        classes: f = {},
        className: p,
        defaultOpen: m = !1,
        displayEmpty: h = !1,
        IconComponent: g = c4,
        id: v,
        input: S,
        inputProps: R,
        label: b,
        labelId: x,
        MenuProps: T,
        multiple: _ = !1,
        native: M = !1,
        onClose: A,
        onOpen: D,
        open: O,
        renderValue: j,
        SelectDisplayProps: L,
        variant: re = "outlined",
        ...G
      } = l,
      E = M ? I_ : lM,
      I = bl(),
      X = vl({ props: l, muiFormControl: I, states: ["variant", "error"] }),
      J = X.variant || re,
      oe = { ...l, variant: J, classes: f },
      ee = oM(oe),
      { root: H, ...ae } = ee,
      ce =
        S ||
        {
          standard: $.jsx(sM, { ownerState: oe }),
          outlined: $.jsx(uM, { label: b, ownerState: oe }),
          filled: $.jsx(cM, { ownerState: oe }),
        }[J],
      se = sn(a, is(ce));
    return $.jsx(C.Fragment, {
      children: C.cloneElement(ce, {
        inputComponent: E,
        inputProps: {
          children: u,
          error: X.error,
          IconComponent: g,
          variant: J,
          type: void 0,
          multiple: _,
          ...(M
            ? { id: v }
            : {
                autoWidth: s,
                defaultOpen: m,
                displayEmpty: h,
                labelId: x,
                MenuProps: T,
                onClose: A,
                onOpen: D,
                open: O,
                renderValue: j,
                SelectDisplayProps: { id: v, ...L },
              }),
          ...R,
          classes: R ? on(ae, R.classes) : ae,
          ...(S ? S.props.inputProps : {}),
        },
        ...(((_ && M) || h) && J === "outlined" ? { notched: !0 } : {}),
        ref: se,
        className: je(ce.props.className, p, ee.root),
        ...(!S && { variant: J }),
        ...G,
      }),
    });
  });
_S.muiName = "Select";
function fM(e) {
  return dt("MuiToolbar", e);
}
it("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const dM = (e) => {
    const { classes: r, disableGutters: a, variant: l } = e;
    return pt({ root: ["root", !a && "gutters", l] }, fM, r);
  },
  pM = Ee("div", {
    name: "MuiToolbar",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: a } = e;
      return [r.root, !a.disableGutters && r.gutters, r[a.variant]];
    },
  })(
    vt(({ theme: e }) => ({
      position: "relative",
      display: "flex",
      alignItems: "center",
      variants: [
        {
          props: ({ ownerState: r }) => !r.disableGutters,
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
  hM = C.forwardRef(function (r, a) {
    const l = gt({ props: r, name: "MuiToolbar" }),
      {
        className: s,
        component: u = "div",
        disableGutters: f = !1,
        variant: p = "regular",
        ...m
      } = l,
      h = { ...l, component: u, disableGutters: f, variant: p },
      g = dM(h);
    return $.jsx(pM, {
      as: u,
      className: je(g.root, s),
      ref: a,
      ownerState: h,
      ...m,
    });
  });
function mM(e) {
  return dt("MuiTextField", e);
}
it("MuiTextField", ["root"]);
const gM = { standard: Yh, filled: Gh, outlined: Xh },
  yM = (e) => {
    const { classes: r } = e;
    return pt({ root: ["root"] }, mM, r);
  },
  vM = Ee(o_, {
    name: "MuiTextField",
    slot: "Root",
    overridesResolver: (e, r) => r.root,
  })({}),
  ti = C.forwardRef(function (r, a) {
    const l = gt({ props: r, name: "MuiTextField" }),
      {
        autoComplete: s,
        autoFocus: u = !1,
        children: f,
        className: p,
        color: m = "primary",
        defaultValue: h,
        disabled: g = !1,
        error: v = !1,
        FormHelperTextProps: S,
        fullWidth: R = !1,
        helperText: b,
        id: x,
        InputLabelProps: T,
        inputProps: _,
        InputProps: M,
        inputRef: A,
        label: D,
        maxRows: O,
        minRows: j,
        multiline: L = !1,
        name: re,
        onBlur: G,
        onChange: E,
        onFocus: I,
        placeholder: X,
        required: J = !1,
        rows: oe,
        select: ee = !1,
        SelectProps: H,
        slots: ae = {},
        slotProps: ce = {},
        type: se,
        value: B,
        variant: W = "outlined",
        ...he
      } = l,
      pe = {
        ...l,
        autoFocus: u,
        color: m,
        disabled: g,
        error: v,
        fullWidth: R,
        multiline: L,
        required: J,
        select: ee,
        variant: W,
      },
      ue = yM(pe),
      ye = Dc(x),
      be = b && ye ? `${ye}-helper-text` : void 0,
      Ue = D && ye ? `${ye}-label` : void 0,
      Ce = gM[W],
      we = {
        slots: ae,
        slotProps: {
          input: M,
          inputLabel: T,
          htmlInput: _,
          formHelperText: S,
          select: H,
          ...ce,
        },
      },
      ve = {},
      De = we.slotProps.inputLabel;
    W === "outlined" &&
      (De && typeof De.shrink < "u" && (ve.notched = De.shrink),
      (ve.label = D)),
      ee &&
        ((!H || !H.native) && (ve.id = void 0),
        (ve["aria-describedby"] = void 0));
    const [Ae, Ye] = Yn("input", {
        elementType: Ce,
        externalForwardedProps: we,
        additionalProps: ve,
        ownerState: pe,
      }),
      [Be, Ze] = Yn("inputLabel", {
        elementType: C_,
        externalForwardedProps: we,
        ownerState: pe,
      }),
      [Ot, Bt] = Yn("htmlInput", {
        elementType: "input",
        externalForwardedProps: we,
        ownerState: pe,
      }),
      [N, q] = Yn("formHelperText", {
        elementType: f_,
        externalForwardedProps: we,
        ownerState: pe,
      }),
      [Y, fe] = Yn("select", {
        elementType: _S,
        externalForwardedProps: we,
        ownerState: pe,
      }),
      Q = $.jsx(Ae, {
        "aria-describedby": be,
        autoComplete: s,
        autoFocus: u,
        defaultValue: h,
        fullWidth: R,
        multiline: L,
        name: re,
        rows: oe,
        maxRows: O,
        minRows: j,
        type: se,
        value: B,
        id: ye,
        inputRef: A,
        onBlur: G,
        onChange: E,
        onFocus: I,
        placeholder: X,
        inputProps: Bt,
        slots: { input: ae.htmlInput ? Ot : void 0 },
        ...Ye,
      });
    return $.jsxs(vM, {
      className: je(ue.root, p),
      disabled: g,
      error: v,
      fullWidth: R,
      ref: a,
      required: J,
      color: m,
      variant: W,
      ownerState: pe,
      ...he,
      children: [
        D != null &&
          D !== "" &&
          $.jsx(Be, { htmlFor: ye, id: Ue, ...Ze, children: D }),
        ee
          ? $.jsx(Y, {
              "aria-describedby": be,
              id: ye,
              labelId: Ue,
              value: B,
              input: Q,
              ...fe,
              children: f,
            })
          : Q,
        b && $.jsx(N, { id: be, ...q, children: b }),
      ],
    });
  }),
  bM = () => {
    const e = Ko(),
      { authenticated: r, logout: a } = fc(),
      l = () => {
        e("/login");
      },
      s = async () => {
        console.log("logging out"), a(), e("/login");
      },
      u = () =>
        r == !1
          ? $.jsx(ll, { color: "inherit", onClick: l, children: "Login" })
          : $.jsx(ll, { color: "inherit", onClick: s, children: "Logout" });
    return $.jsx(T4, {
      sx: { flexGrow: 1 },
      children: $.jsx(WO, {
        position: "static",
        children: $.jsxs(hM, {
          children: [
            $.jsx(PO, {
              size: "large",
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              sx: { mr: 2 },
            }),
            $.jsx(IO, {
              variant: "h6",
              component: "div",
              sx: { flexGrow: 1 },
              children: "UniVerse",
            }),
            u(),
          ],
        }),
      }),
    });
  };
var bn = function () {
  return (
    (bn =
      Object.assign ||
      function (r) {
        for (var a, l = 1, s = arguments.length; l < s; l++) {
          a = arguments[l];
          for (var u in a)
            Object.prototype.hasOwnProperty.call(a, u) && (r[u] = a[u]);
        }
        return r;
      }),
    bn.apply(this, arguments)
  );
};
function tc(e, r, a) {
  if (a || arguments.length === 2)
    for (var l = 0, s = r.length, u; l < s; l++)
      (u || !(l in r)) &&
        (u || (u = Array.prototype.slice.call(r, 0, l)), (u[l] = r[l]));
  return e.concat(u || Array.prototype.slice.call(r));
}
var yt = "-ms-",
  $o = "-moz-",
  tt = "-webkit-",
  MS = "comm",
  Lc = "rule",
  Qh = "decl",
  SM = "@import",
  DS = "@keyframes",
  xM = "@layer",
  zS = Math.abs,
  Wh = String.fromCharCode,
  eh = Object.assign;
function EM(e, r) {
  return Qt(e, 0) ^ 45
    ? (((((((r << 2) ^ Qt(e, 0)) << 2) ^ Qt(e, 1)) << 2) ^ Qt(e, 2)) << 2) ^
        Qt(e, 3)
    : 0;
}
function NS(e) {
  return e.trim();
}
function Ir(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function $e(e, r, a) {
  return e.replace(r, a);
}
function $u(e, r, a) {
  return e.indexOf(r, a);
}
function Qt(e, r) {
  return e.charCodeAt(r) | 0;
}
function ol(e, r, a) {
  return e.slice(r, a);
}
function vr(e) {
  return e.length;
}
function BS(e) {
  return e.length;
}
function No(e, r) {
  return r.push(e), e;
}
function RM(e, r) {
  return e.map(r).join("");
}
function vb(e, r) {
  return e.filter(function (a) {
    return !Ir(a, r);
  });
}
var $c = 1,
  sl = 1,
  kS = 0,
  In = 0,
  Ht = 0,
  Sl = "";
function jc(e, r, a, l, s, u, f, p) {
  return {
    value: e,
    root: r,
    parent: a,
    type: l,
    props: s,
    children: u,
    line: $c,
    column: sl,
    length: f,
    return: "",
    siblings: p,
  };
}
function Ea(e, r) {
  return eh(
    jc("", null, null, "", null, null, 0, e.siblings),
    e,
    { length: -e.length },
    r
  );
}
function Wi(e) {
  for (; e.root; ) e = Ea(e.root, { children: [e] });
  No(e, e.siblings);
}
function CM() {
  return Ht;
}
function wM() {
  return (
    (Ht = In > 0 ? Qt(Sl, --In) : 0), sl--, Ht === 10 && ((sl = 1), $c--), Ht
  );
}
function er() {
  return (
    (Ht = In < kS ? Qt(Sl, In++) : 0), sl++, Ht === 10 && ((sl = 1), $c++), Ht
  );
}
function ii() {
  return Qt(Sl, In);
}
function ju() {
  return In;
}
function Hc(e, r) {
  return ol(Sl, e, r);
}
function th(e) {
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
function TM(e) {
  return ($c = sl = 1), (kS = vr((Sl = e))), (In = 0), [];
}
function AM(e) {
  return (Sl = ""), e;
}
function Sp(e) {
  return NS(Hc(In - 1, nh(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function OM(e) {
  for (; (Ht = ii()) && Ht < 33; ) er();
  return th(e) > 2 || th(Ht) > 3 ? "" : " ";
}
function _M(e, r) {
  for (
    ;
    --r &&
    er() &&
    !(Ht < 48 || Ht > 102 || (Ht > 57 && Ht < 65) || (Ht > 70 && Ht < 97));

  );
  return Hc(e, ju() + (r < 6 && ii() == 32 && er() == 32));
}
function nh(e) {
  for (; er(); )
    switch (Ht) {
      case e:
        return In;
      case 34:
      case 39:
        e !== 34 && e !== 39 && nh(Ht);
        break;
      case 40:
        e === 41 && nh(e);
        break;
      case 92:
        er();
        break;
    }
  return In;
}
function MM(e, r) {
  for (; er() && e + Ht !== 57; ) if (e + Ht === 84 && ii() === 47) break;
  return "/*" + Hc(r, In - 1) + "*" + Wh(e === 47 ? e : er());
}
function DM(e) {
  for (; !th(ii()); ) er();
  return Hc(e, In);
}
function zM(e) {
  return AM(Hu("", null, null, null, [""], (e = TM(e)), 0, [0], e));
}
function Hu(e, r, a, l, s, u, f, p, m) {
  for (
    var h = 0,
      g = 0,
      v = f,
      S = 0,
      R = 0,
      b = 0,
      x = 1,
      T = 1,
      _ = 1,
      M = 0,
      A = "",
      D = s,
      O = u,
      j = l,
      L = A;
    T;

  )
    switch (((b = M), (M = er()))) {
      case 40:
        if (b != 108 && Qt(L, v - 1) == 58) {
          $u((L += $e(Sp(M), "&", "&\f")), "&\f", zS(h ? p[h - 1] : 0)) != -1 &&
            (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        L += Sp(M);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        L += OM(b);
        break;
      case 92:
        L += _M(ju() - 1, 7);
        continue;
      case 47:
        switch (ii()) {
          case 42:
          case 47:
            No(NM(MM(er(), ju()), r, a, m), m);
            break;
          default:
            L += "/";
        }
        break;
      case 123 * x:
        p[h++] = vr(L) * _;
      case 125 * x:
      case 59:
      case 0:
        switch (M) {
          case 0:
          case 125:
            T = 0;
          case 59 + g:
            _ == -1 && (L = $e(L, /\f/g, "")),
              R > 0 &&
                vr(L) - v &&
                No(
                  R > 32
                    ? Sb(L + ";", l, a, v - 1, m)
                    : Sb($e(L, " ", "") + ";", l, a, v - 2, m),
                  m
                );
            break;
          case 59:
            L += ";";
          default:
            if (
              (No(
                (j = bb(L, r, a, h, g, s, p, A, (D = []), (O = []), v, u)),
                u
              ),
              M === 123)
            )
              if (g === 0) Hu(L, r, j, j, D, u, v, p, O);
              else
                switch (S === 99 && Qt(L, 3) === 110 ? 100 : S) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Hu(
                      e,
                      j,
                      j,
                      l && No(bb(e, j, j, 0, 0, s, p, A, s, (D = []), v, O), O),
                      s,
                      O,
                      v,
                      p,
                      l ? D : O
                    );
                    break;
                  default:
                    Hu(L, j, j, j, [""], O, 0, p, O);
                }
        }
        (h = g = R = 0), (x = _ = 1), (A = L = ""), (v = f);
        break;
      case 58:
        (v = 1 + vr(L)), (R = b);
      default:
        if (x < 1) {
          if (M == 123) --x;
          else if (M == 125 && x++ == 0 && wM() == 125) continue;
        }
        switch (((L += Wh(M)), M * x)) {
          case 38:
            _ = g > 0 ? 1 : ((L += "\f"), -1);
            break;
          case 44:
            (p[h++] = (vr(L) - 1) * _), (_ = 1);
            break;
          case 64:
            ii() === 45 && (L += Sp(er())),
              (S = ii()),
              (g = v = vr((A = L += DM(ju())))),
              M++;
            break;
          case 45:
            b === 45 && vr(L) == 2 && (x = 0);
        }
    }
  return u;
}
function bb(e, r, a, l, s, u, f, p, m, h, g, v) {
  for (
    var S = s - 1, R = s === 0 ? u : [""], b = BS(R), x = 0, T = 0, _ = 0;
    x < l;
    ++x
  )
    for (var M = 0, A = ol(e, S + 1, (S = zS((T = f[x])))), D = e; M < b; ++M)
      (D = NS(T > 0 ? R[M] + " " + A : $e(A, /&\f/g, R[M]))) && (m[_++] = D);
  return jc(e, r, a, s === 0 ? Lc : p, m, h, g, v);
}
function NM(e, r, a, l) {
  return jc(e, r, a, MS, Wh(CM()), ol(e, 2, -2), 0, l);
}
function Sb(e, r, a, l, s) {
  return jc(e, r, a, Qh, ol(e, 0, l), ol(e, l + 1, -1), l, s);
}
function US(e, r, a) {
  switch (EM(e, r)) {
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
    case 4789:
      return $o + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return tt + e + $o + e + yt + e + e;
    case 5936:
      switch (Qt(e, r + 11)) {
        case 114:
          return tt + e + yt + $e(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return tt + e + yt + $e(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return tt + e + yt + $e(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return tt + e + yt + e + e;
    case 6165:
      return tt + e + yt + "flex-" + e + e;
    case 5187:
      return (
        tt + e + $e(e, /(\w+).+(:[^]+)/, tt + "box-$1$2" + yt + "flex-$1$2") + e
      );
    case 5443:
      return (
        tt +
        e +
        yt +
        "flex-item-" +
        $e(e, /flex-|-self/g, "") +
        (Ir(e, /flex-|baseline/)
          ? ""
          : yt + "grid-row-" + $e(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return (
        tt +
        e +
        yt +
        "flex-line-pack" +
        $e(e, /align-content|flex-|-self/g, "") +
        e
      );
    case 5548:
      return tt + e + yt + $e(e, "shrink", "negative") + e;
    case 5292:
      return tt + e + yt + $e(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        tt +
        "box-" +
        $e(e, "-grow", "") +
        tt +
        e +
        yt +
        $e(e, "grow", "positive") +
        e
      );
    case 4554:
      return tt + $e(e, /([^-])(transform)/g, "$1" + tt + "$2") + e;
    case 6187:
      return (
        $e(
          $e($e(e, /(zoom-|grab)/, tt + "$1"), /(image-set)/, tt + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return $e(e, /(image-set\([^]*)/, tt + "$1$`$1");
    case 4968:
      return (
        $e(
          $e(e, /(.+:)(flex-)?(.*)/, tt + "box-pack:$3" + yt + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        tt +
        e +
        e
      );
    case 4200:
      if (!Ir(e, /flex-|baseline/))
        return yt + "grid-column-align" + ol(e, r) + e;
      break;
    case 2592:
    case 3360:
      return yt + $e(e, "template-", "") + e;
    case 4384:
    case 3616:
      return a &&
        a.some(function (l, s) {
          return (r = s), Ir(l.props, /grid-\w+-end/);
        })
        ? ~$u(e + (a = a[r].value), "span", 0)
          ? e
          : yt +
            $e(e, "-start", "") +
            e +
            yt +
            "grid-row-span:" +
            (~$u(a, "span", 0) ? Ir(a, /\d+/) : +Ir(a, /\d+/) - +Ir(e, /\d+/)) +
            ";"
        : yt + $e(e, "-start", "") + e;
    case 4896:
    case 4128:
      return a &&
        a.some(function (l) {
          return Ir(l.props, /grid-\w+-start/);
        })
        ? e
        : yt + $e($e(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return $e(e, /(.+)-inline(.+)/, tt + "$1$2") + e;
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
      if (vr(e) - 1 - r > 6)
        switch (Qt(e, r + 1)) {
          case 109:
            if (Qt(e, r + 4) !== 45) break;
          case 102:
            return (
              $e(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  tt +
                  "$2-$3$1" +
                  $o +
                  (Qt(e, r + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~$u(e, "stretch", 0)
              ? US($e(e, "stretch", "fill-available"), r, a) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return $e(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (l, s, u, f, p, m, h) {
          return (
            yt +
            s +
            ":" +
            u +
            h +
            (f ? yt + s + "-span:" + (p ? m : +m - +u) + h : "") +
            e
          );
        }
      );
    case 4949:
      if (Qt(e, r + 6) === 121) return $e(e, ":", ":" + tt) + e;
      break;
    case 6444:
      switch (Qt(e, Qt(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            $e(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                tt +
                (Qt(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                tt +
                "$2$3$1" +
                yt +
                "$2box$3"
            ) + e
          );
        case 100:
          return $e(e, ":", ":" + yt) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return $e(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function nc(e, r) {
  for (var a = "", l = 0; l < e.length; l++) a += r(e[l], l, e, r) || "";
  return a;
}
function BM(e, r, a, l) {
  switch (e.type) {
    case xM:
      if (e.children.length) break;
    case SM:
    case Qh:
      return (e.return = e.return || e.value);
    case MS:
      return "";
    case DS:
      return (e.return = e.value + "{" + nc(e.children, l) + "}");
    case Lc:
      if (!vr((e.value = e.props.join(",")))) return "";
  }
  return vr((a = nc(e.children, l)))
    ? (e.return = e.value + "{" + a + "}")
    : "";
}
function kM(e) {
  var r = BS(e);
  return function (a, l, s, u) {
    for (var f = "", p = 0; p < r; p++) f += e[p](a, l, s, u) || "";
    return f;
  };
}
function UM(e) {
  return function (r) {
    r.root || ((r = r.return) && e(r));
  };
}
function LM(e, r, a, l) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Qh:
        e.return = US(e.value, e.length, a);
        return;
      case DS:
        return nc([Ea(e, { value: $e(e.value, "@", "@" + tt) })], l);
      case Lc:
        if (e.length)
          return RM((a = e.props), function (s) {
            switch (Ir(s, (l = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                Wi(Ea(e, { props: [$e(s, /:(read-\w+)/, ":" + $o + "$1")] })),
                  Wi(Ea(e, { props: [s] })),
                  eh(e, { props: vb(a, l) });
                break;
              case "::placeholder":
                Wi(
                  Ea(e, { props: [$e(s, /:(plac\w+)/, ":" + tt + "input-$1")] })
                ),
                  Wi(Ea(e, { props: [$e(s, /:(plac\w+)/, ":" + $o + "$1")] })),
                  Wi(Ea(e, { props: [$e(s, /:(plac\w+)/, yt + "input-$1")] })),
                  Wi(Ea(e, { props: [s] })),
                  eh(e, { props: vb(a, l) });
                break;
            }
            return "";
          });
    }
}
var $M = {
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
  An = {},
  ul =
    (typeof process < "u" &&
      An !== void 0 &&
      (An.REACT_APP_SC_ATTR || An.SC_ATTR)) ||
    "data-styled",
  LS = "active",
  $S = "data-styled-version",
  Pc = "6.1.15",
  Zh = `/*!sc*/
`,
  rc = typeof window < "u" && "HTMLElement" in window,
  jM = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      An !== void 0 &&
      An.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      An.REACT_APP_SC_DISABLE_SPEEDY !== ""
    ? An.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
      An.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      An !== void 0 &&
      An.SC_DISABLE_SPEEDY !== void 0 &&
      An.SC_DISABLE_SPEEDY !== "" &&
      An.SC_DISABLE_SPEEDY !== "false" &&
      An.SC_DISABLE_SPEEDY),
  qc = Object.freeze([]),
  cl = Object.freeze({});
function HM(e, r, a) {
  return (
    a === void 0 && (a = cl), (e.theme !== a.theme && e.theme) || r || a.theme
  );
}
var jS = new Set([
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
  PM = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  qM = /(^-|-$)/g;
function xb(e) {
  return e.replace(PM, "-").replace(qM, "");
}
var VM = /(a)(d)/gi,
  Tu = 52,
  Eb = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function rh(e) {
  var r,
    a = "";
  for (r = Math.abs(e); r > Tu; r = (r / Tu) | 0) a = Eb(r % Tu) + a;
  return (Eb(r % Tu) + a).replace(VM, "$1-$2");
}
var xp,
  HS = 5381,
  el = function (e, r) {
    for (var a = r.length; a; ) e = (33 * e) ^ r.charCodeAt(--a);
    return e;
  },
  PS = function (e) {
    return el(HS, e);
  };
function FM(e) {
  return rh(PS(e) >>> 0);
}
function GM(e) {
  return e.displayName || e.name || "Component";
}
function Ep(e) {
  return typeof e == "string" && !0;
}
var qS = typeof Symbol == "function" && Symbol.for,
  VS = qS ? Symbol.for("react.memo") : 60115,
  YM = qS ? Symbol.for("react.forward_ref") : 60112,
  IM = {
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
  XM = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  FS = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  KM =
    (((xp = {})[YM] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (xp[VS] = FS),
    xp);
function Rb(e) {
  return ("type" in (r = e) && r.type.$$typeof) === VS
    ? FS
    : "$$typeof" in e
    ? KM[e.$$typeof]
    : IM;
  var r;
}
var QM = Object.defineProperty,
  WM = Object.getOwnPropertyNames,
  Cb = Object.getOwnPropertySymbols,
  ZM = Object.getOwnPropertyDescriptor,
  JM = Object.getPrototypeOf,
  wb = Object.prototype;
function GS(e, r, a) {
  if (typeof r != "string") {
    if (wb) {
      var l = JM(r);
      l && l !== wb && GS(e, l, a);
    }
    var s = WM(r);
    Cb && (s = s.concat(Cb(r)));
    for (var u = Rb(e), f = Rb(r), p = 0; p < s.length; ++p) {
      var m = s[p];
      if (!(m in XM || (a && a[m]) || (f && m in f) || (u && m in u))) {
        var h = ZM(r, m);
        try {
          QM(e, m, h);
        } catch {}
      }
    }
  }
  return e;
}
function fl(e) {
  return typeof e == "function";
}
function Jh(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function ni(e, r) {
  return e && r ? "".concat(e, " ").concat(r) : e || r || "";
}
function Tb(e, r) {
  if (e.length === 0) return "";
  for (var a = e[0], l = 1; l < e.length; l++) a += e[l];
  return a;
}
function Io(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  );
}
function ah(e, r, a) {
  if ((a === void 0 && (a = !1), !a && !Io(e) && !Array.isArray(e))) return r;
  if (Array.isArray(r))
    for (var l = 0; l < r.length; l++) e[l] = ah(e[l], r[l]);
  else if (Io(r)) for (var l in r) e[l] = ah(e[l], r[l]);
  return e;
}
function em(e, r) {
  Object.defineProperty(e, "toString", { value: r });
}
function ls(e) {
  for (var r = [], a = 1; a < arguments.length; a++) r[a - 1] = arguments[a];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(r.length > 0 ? " Args: ".concat(r.join(", ")) : "")
  );
}
var e3 = (function () {
    function e(r) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = r);
    }
    return (
      (e.prototype.indexOfGroup = function (r) {
        for (var a = 0, l = 0; l < r; l++) a += this.groupSizes[l];
        return a;
      }),
      (e.prototype.insertRules = function (r, a) {
        if (r >= this.groupSizes.length) {
          for (var l = this.groupSizes, s = l.length, u = s; r >= u; )
            if ((u <<= 1) < 0) throw ls(16, "".concat(r));
          (this.groupSizes = new Uint32Array(u)),
            this.groupSizes.set(l),
            (this.length = u);
          for (var f = s; f < u; f++) this.groupSizes[f] = 0;
        }
        for (
          var p = this.indexOfGroup(r + 1), m = ((f = 0), a.length);
          f < m;
          f++
        )
          this.tag.insertRule(p, a[f]) && (this.groupSizes[r]++, p++);
      }),
      (e.prototype.clearGroup = function (r) {
        if (r < this.length) {
          var a = this.groupSizes[r],
            l = this.indexOfGroup(r),
            s = l + a;
          this.groupSizes[r] = 0;
          for (var u = l; u < s; u++) this.tag.deleteRule(l);
        }
      }),
      (e.prototype.getGroup = function (r) {
        var a = "";
        if (r >= this.length || this.groupSizes[r] === 0) return a;
        for (
          var l = this.groupSizes[r],
            s = this.indexOfGroup(r),
            u = s + l,
            f = s;
          f < u;
          f++
        )
          a += "".concat(this.tag.getRule(f)).concat(Zh);
        return a;
      }),
      e
    );
  })(),
  Pu = new Map(),
  ac = new Map(),
  qu = 1,
  Au = function (e) {
    if (Pu.has(e)) return Pu.get(e);
    for (; ac.has(qu); ) qu++;
    var r = qu++;
    return Pu.set(e, r), ac.set(r, e), r;
  },
  t3 = function (e, r) {
    (qu = r + 1), Pu.set(e, r), ac.set(r, e);
  },
  n3 = "style[".concat(ul, "][").concat($S, '="').concat(Pc, '"]'),
  r3 = new RegExp(
    "^".concat(ul, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  a3 = function (e, r, a) {
    for (var l, s = a.split(","), u = 0, f = s.length; u < f; u++)
      (l = s[u]) && e.registerName(r, l);
  },
  i3 = function (e, r) {
    for (
      var a,
        l = ((a = r.textContent) !== null && a !== void 0 ? a : "").split(Zh),
        s = [],
        u = 0,
        f = l.length;
      u < f;
      u++
    ) {
      var p = l[u].trim();
      if (p) {
        var m = p.match(r3);
        if (m) {
          var h = 0 | parseInt(m[1], 10),
            g = m[2];
          h !== 0 && (t3(g, h), a3(e, g, m[3]), e.getTag().insertRules(h, s)),
            (s.length = 0);
        } else s.push(p);
      }
    }
  },
  Ab = function (e) {
    for (
      var r = document.querySelectorAll(n3), a = 0, l = r.length;
      a < l;
      a++
    ) {
      var s = r[a];
      s &&
        s.getAttribute(ul) !== LS &&
        (i3(e, s), s.parentNode && s.parentNode.removeChild(s));
    }
  };
function l3() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var YS = function (e) {
    var r = document.head,
      a = e || r,
      l = document.createElement("style"),
      s = (function (p) {
        var m = Array.from(p.querySelectorAll("style[".concat(ul, "]")));
        return m[m.length - 1];
      })(a),
      u = s !== void 0 ? s.nextSibling : null;
    l.setAttribute(ul, LS), l.setAttribute($S, Pc);
    var f = l3();
    return f && l.setAttribute("nonce", f), a.insertBefore(l, u), l;
  },
  o3 = (function () {
    function e(r) {
      (this.element = YS(r)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (a) {
          if (a.sheet) return a.sheet;
          for (var l = document.styleSheets, s = 0, u = l.length; s < u; s++) {
            var f = l[s];
            if (f.ownerNode === a) return f;
          }
          throw ls(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (r, a) {
        try {
          return this.sheet.insertRule(a, r), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (r) {
        this.sheet.deleteRule(r), this.length--;
      }),
      (e.prototype.getRule = function (r) {
        var a = this.sheet.cssRules[r];
        return a && a.cssText ? a.cssText : "";
      }),
      e
    );
  })(),
  s3 = (function () {
    function e(r) {
      (this.element = YS(r)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (r, a) {
        if (r <= this.length && r >= 0) {
          var l = document.createTextNode(a);
          return (
            this.element.insertBefore(l, this.nodes[r] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (r) {
        this.element.removeChild(this.nodes[r]), this.length--;
      }),
      (e.prototype.getRule = function (r) {
        return r < this.length ? this.nodes[r].textContent : "";
      }),
      e
    );
  })(),
  u3 = (function () {
    function e(r) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (r, a) {
        return (
          r <= this.length && (this.rules.splice(r, 0, a), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (r) {
        this.rules.splice(r, 1), this.length--;
      }),
      (e.prototype.getRule = function (r) {
        return r < this.length ? this.rules[r] : "";
      }),
      e
    );
  })(),
  Ob = rc,
  c3 = { isServer: !rc, useCSSOMInjection: !jM },
  IS = (function () {
    function e(r, a, l) {
      r === void 0 && (r = cl), a === void 0 && (a = {});
      var s = this;
      (this.options = bn(bn({}, c3), r)),
        (this.gs = a),
        (this.names = new Map(l)),
        (this.server = !!r.isServer),
        !this.server && rc && Ob && ((Ob = !1), Ab(this)),
        em(this, function () {
          return (function (u) {
            for (
              var f = u.getTag(),
                p = f.length,
                m = "",
                h = function (v) {
                  var S = (function (_) {
                    return ac.get(_);
                  })(v);
                  if (S === void 0) return "continue";
                  var R = u.names.get(S),
                    b = f.getGroup(v);
                  if (R === void 0 || !R.size || b.length === 0)
                    return "continue";
                  var x = ""
                      .concat(ul, ".g")
                      .concat(v, '[id="')
                      .concat(S, '"]'),
                    T = "";
                  R !== void 0 &&
                    R.forEach(function (_) {
                      _.length > 0 && (T += "".concat(_, ","));
                    }),
                    (m += ""
                      .concat(b)
                      .concat(x, '{content:"')
                      .concat(T, '"}')
                      .concat(Zh));
                },
                g = 0;
              g < p;
              g++
            )
              h(g);
            return m;
          })(s);
        });
    }
    return (
      (e.registerId = function (r) {
        return Au(r);
      }),
      (e.prototype.rehydrate = function () {
        !this.server && rc && Ab(this);
      }),
      (e.prototype.reconstructWithOptions = function (r, a) {
        return (
          a === void 0 && (a = !0),
          new e(
            bn(bn({}, this.options), r),
            this.gs,
            (a && this.names) || void 0
          )
        );
      }),
      (e.prototype.allocateGSInstance = function (r) {
        return (this.gs[r] = (this.gs[r] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((r = (function (a) {
              var l = a.useCSSOMInjection,
                s = a.target;
              return a.isServer ? new u3(s) : l ? new o3(s) : new s3(s);
            })(this.options)),
            new e3(r)))
        );
        var r;
      }),
      (e.prototype.hasNameForId = function (r, a) {
        return this.names.has(r) && this.names.get(r).has(a);
      }),
      (e.prototype.registerName = function (r, a) {
        if ((Au(r), this.names.has(r))) this.names.get(r).add(a);
        else {
          var l = new Set();
          l.add(a), this.names.set(r, l);
        }
      }),
      (e.prototype.insertRules = function (r, a, l) {
        this.registerName(r, a), this.getTag().insertRules(Au(r), l);
      }),
      (e.prototype.clearNames = function (r) {
        this.names.has(r) && this.names.get(r).clear();
      }),
      (e.prototype.clearRules = function (r) {
        this.getTag().clearGroup(Au(r)), this.clearNames(r);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  f3 = /&/g,
  d3 = /^\s*\/\/.*$/gm;
function XS(e, r) {
  return e.map(function (a) {
    return (
      a.type === "rule" &&
        ((a.value = "".concat(r, " ").concat(a.value)),
        (a.value = a.value.replaceAll(",", ",".concat(r, " "))),
        (a.props = a.props.map(function (l) {
          return "".concat(r, " ").concat(l);
        }))),
      Array.isArray(a.children) &&
        a.type !== "@keyframes" &&
        (a.children = XS(a.children, r)),
      a
    );
  });
}
function p3(e) {
  var r,
    a,
    l,
    s = cl,
    u = s.options,
    f = u === void 0 ? cl : u,
    p = s.plugins,
    m = p === void 0 ? qc : p,
    h = function (S, R, b) {
      return b.startsWith(a) && b.endsWith(a) && b.replaceAll(a, "").length > 0
        ? ".".concat(r)
        : S;
    },
    g = m.slice();
  g.push(function (S) {
    S.type === Lc &&
      S.value.includes("&") &&
      (S.props[0] = S.props[0].replace(f3, a).replace(l, h));
  }),
    f.prefix && g.push(LM),
    g.push(BM);
  var v = function (S, R, b, x) {
    R === void 0 && (R = ""),
      b === void 0 && (b = ""),
      x === void 0 && (x = "&"),
      (r = x),
      (a = R),
      (l = new RegExp("\\".concat(a, "\\b"), "g"));
    var T = S.replace(d3, ""),
      _ = zM(b || R ? "".concat(b, " ").concat(R, " { ").concat(T, " }") : T);
    f.namespace && (_ = XS(_, f.namespace));
    var M = [];
    return (
      nc(
        _,
        kM(
          g.concat(
            UM(function (A) {
              return M.push(A);
            })
          )
        )
      ),
      M
    );
  };
  return (
    (v.hash = m.length
      ? m
          .reduce(function (S, R) {
            return R.name || ls(15), el(S, R.name);
          }, HS)
          .toString()
      : ""),
    v
  );
}
var h3 = new IS(),
  ih = p3(),
  KS = Ne.createContext({
    shouldForwardProp: void 0,
    styleSheet: h3,
    stylis: ih,
  });
KS.Consumer;
Ne.createContext(void 0);
function _b() {
  return C.useContext(KS);
}
var m3 = (function () {
    function e(r, a) {
      var l = this;
      (this.inject = function (s, u) {
        u === void 0 && (u = ih);
        var f = l.name + u.hash;
        s.hasNameForId(l.id, f) ||
          s.insertRules(l.id, f, u(l.rules, f, "@keyframes"));
      }),
        (this.name = r),
        (this.id = "sc-keyframes-".concat(r)),
        (this.rules = a),
        em(this, function () {
          throw ls(12, String(l.name));
        });
    }
    return (
      (e.prototype.getName = function (r) {
        return r === void 0 && (r = ih), this.name + r.hash;
      }),
      e
    );
  })(),
  g3 = function (e) {
    return e >= "A" && e <= "Z";
  };
function Mb(e) {
  for (var r = "", a = 0; a < e.length; a++) {
    var l = e[a];
    if (a === 1 && l === "-" && e[0] === "-") return e;
    g3(l) ? (r += "-" + l.toLowerCase()) : (r += l);
  }
  return r.startsWith("ms-") ? "-" + r : r;
}
var QS = function (e) {
    return e == null || e === !1 || e === "";
  },
  WS = function (e) {
    var r,
      a,
      l = [];
    for (var s in e) {
      var u = e[s];
      e.hasOwnProperty(s) &&
        !QS(u) &&
        ((Array.isArray(u) && u.isCss) || fl(u)
          ? l.push("".concat(Mb(s), ":"), u, ";")
          : Io(u)
          ? l.push.apply(l, tc(tc(["".concat(s, " {")], WS(u), !1), ["}"], !1))
          : l.push(
              ""
                .concat(Mb(s), ": ")
                .concat(
                  ((r = s),
                  (a = u) == null || typeof a == "boolean" || a === ""
                    ? ""
                    : typeof a != "number" ||
                      a === 0 ||
                      r in $M ||
                      r.startsWith("--")
                    ? String(a).trim()
                    : "".concat(a, "px")),
                  ";"
                )
            ));
    }
    return l;
  };
function li(e, r, a, l) {
  if (QS(e)) return [];
  if (Jh(e)) return [".".concat(e.styledComponentId)];
  if (fl(e)) {
    if (!fl((u = e)) || (u.prototype && u.prototype.isReactComponent) || !r)
      return [e];
    var s = e(r);
    return li(s, r, a, l);
  }
  var u;
  return e instanceof m3
    ? a
      ? (e.inject(a, l), [e.getName(l)])
      : [e]
    : Io(e)
    ? WS(e)
    : Array.isArray(e)
    ? Array.prototype.concat.apply(
        qc,
        e.map(function (f) {
          return li(f, r, a, l);
        })
      )
    : [e.toString()];
}
function y3(e) {
  for (var r = 0; r < e.length; r += 1) {
    var a = e[r];
    if (fl(a) && !Jh(a)) return !1;
  }
  return !0;
}
var v3 = PS(Pc),
  b3 = (function () {
    function e(r, a, l) {
      (this.rules = r),
        (this.staticRulesId = ""),
        (this.isStatic = (l === void 0 || l.isStatic) && y3(r)),
        (this.componentId = a),
        (this.baseHash = el(v3, a)),
        (this.baseStyle = l),
        IS.registerId(a);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (r, a, l) {
        var s = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(r, a, l)
          : "";
        if (this.isStatic && !l.hash)
          if (
            this.staticRulesId &&
            a.hasNameForId(this.componentId, this.staticRulesId)
          )
            s = ni(s, this.staticRulesId);
          else {
            var u = Tb(li(this.rules, r, a, l)),
              f = rh(el(this.baseHash, u) >>> 0);
            if (!a.hasNameForId(this.componentId, f)) {
              var p = l(u, ".".concat(f), void 0, this.componentId);
              a.insertRules(this.componentId, f, p);
            }
            (s = ni(s, f)), (this.staticRulesId = f);
          }
        else {
          for (
            var m = el(this.baseHash, l.hash), h = "", g = 0;
            g < this.rules.length;
            g++
          ) {
            var v = this.rules[g];
            if (typeof v == "string") h += v;
            else if (v) {
              var S = Tb(li(v, r, a, l));
              (m = el(m, S + g)), (h += S);
            }
          }
          if (h) {
            var R = rh(m >>> 0);
            a.hasNameForId(this.componentId, R) ||
              a.insertRules(
                this.componentId,
                R,
                l(h, ".".concat(R), void 0, this.componentId)
              ),
              (s = ni(s, R));
          }
        }
        return s;
      }),
      e
    );
  })(),
  ZS = Ne.createContext(void 0);
ZS.Consumer;
var Rp = {};
function S3(e, r, a) {
  var l = Jh(e),
    s = e,
    u = !Ep(e),
    f = r.attrs,
    p = f === void 0 ? qc : f,
    m = r.componentId,
    h =
      m === void 0
        ? (function (D, O) {
            var j = typeof D != "string" ? "sc" : xb(D);
            Rp[j] = (Rp[j] || 0) + 1;
            var L = "".concat(j, "-").concat(FM(Pc + j + Rp[j]));
            return O ? "".concat(O, "-").concat(L) : L;
          })(r.displayName, r.parentComponentId)
        : m,
    g = r.displayName,
    v =
      g === void 0
        ? (function (D) {
            return Ep(D) ? "styled.".concat(D) : "Styled(".concat(GM(D), ")");
          })(e)
        : g,
    S =
      r.displayName && r.componentId
        ? "".concat(xb(r.displayName), "-").concat(r.componentId)
        : r.componentId || h,
    R = l && s.attrs ? s.attrs.concat(p).filter(Boolean) : p,
    b = r.shouldForwardProp;
  if (l && s.shouldForwardProp) {
    var x = s.shouldForwardProp;
    if (r.shouldForwardProp) {
      var T = r.shouldForwardProp;
      b = function (D, O) {
        return x(D, O) && T(D, O);
      };
    } else b = x;
  }
  var _ = new b3(a, S, l ? s.componentStyle : void 0);
  function M(D, O) {
    return (function (j, L, re) {
      var G = j.attrs,
        E = j.componentStyle,
        I = j.defaultProps,
        X = j.foldedComponentIds,
        J = j.styledComponentId,
        oe = j.target,
        ee = Ne.useContext(ZS),
        H = _b(),
        ae = j.shouldForwardProp || H.shouldForwardProp,
        ce = HM(L, ee, I) || cl,
        se = (function (ye, be, Ue) {
          for (
            var Ce,
              we = bn(bn({}, be), { className: void 0, theme: Ue }),
              ve = 0;
            ve < ye.length;
            ve += 1
          ) {
            var De = fl((Ce = ye[ve])) ? Ce(we) : Ce;
            for (var Ae in De)
              we[Ae] =
                Ae === "className"
                  ? ni(we[Ae], De[Ae])
                  : Ae === "style"
                  ? bn(bn({}, we[Ae]), De[Ae])
                  : De[Ae];
          }
          return (
            be.className && (we.className = ni(we.className, be.className)), we
          );
        })(G, L, ce),
        B = se.as || oe,
        W = {};
      for (var he in se)
        se[he] === void 0 ||
          he[0] === "$" ||
          he === "as" ||
          (he === "theme" && se.theme === ce) ||
          (he === "forwardedAs"
            ? (W.as = se.forwardedAs)
            : (ae && !ae(he, B)) || (W[he] = se[he]));
      var pe = (function (ye, be) {
          var Ue = _b(),
            Ce = ye.generateAndInjectStyles(be, Ue.styleSheet, Ue.stylis);
          return Ce;
        })(E, se),
        ue = ni(X, J);
      return (
        pe && (ue += " " + pe),
        se.className && (ue += " " + se.className),
        (W[Ep(B) && !jS.has(B) ? "class" : "className"] = ue),
        re && (W.ref = re),
        C.createElement(B, W)
      );
    })(A, D, O);
  }
  M.displayName = v;
  var A = Ne.forwardRef(M);
  return (
    (A.attrs = R),
    (A.componentStyle = _),
    (A.displayName = v),
    (A.shouldForwardProp = b),
    (A.foldedComponentIds = l
      ? ni(s.foldedComponentIds, s.styledComponentId)
      : ""),
    (A.styledComponentId = S),
    (A.target = l ? s.target : e),
    Object.defineProperty(A, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (D) {
        this._foldedDefaultProps = l
          ? (function (O) {
              for (var j = [], L = 1; L < arguments.length; L++)
                j[L - 1] = arguments[L];
              for (var re = 0, G = j; re < G.length; re++) ah(O, G[re], !0);
              return O;
            })({}, s.defaultProps, D)
          : D;
      },
    }),
    em(A, function () {
      return ".".concat(A.styledComponentId);
    }),
    u &&
      GS(A, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    A
  );
}
function Db(e, r) {
  for (var a = [e[0]], l = 0, s = r.length; l < s; l += 1)
    a.push(r[l], e[l + 1]);
  return a;
}
var zb = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function x3(e) {
  for (var r = [], a = 1; a < arguments.length; a++) r[a - 1] = arguments[a];
  if (fl(e) || Io(e)) return zb(li(Db(qc, tc([e], r, !0))));
  var l = e;
  return r.length === 0 && l.length === 1 && typeof l[0] == "string"
    ? li(l)
    : zb(li(Db(l, r)));
}
function lh(e, r, a) {
  if ((a === void 0 && (a = cl), !r)) throw ls(1, r);
  var l = function (s) {
    for (var u = [], f = 1; f < arguments.length; f++) u[f - 1] = arguments[f];
    return e(r, a, x3.apply(void 0, tc([s], u, !1)));
  };
  return (
    (l.attrs = function (s) {
      return lh(
        e,
        r,
        bn(bn({}, a), {
          attrs: Array.prototype.concat(a.attrs, s).filter(Boolean),
        })
      );
    }),
    (l.withConfig = function (s) {
      return lh(e, r, bn(bn({}, a), s));
    }),
    l
  );
}
var JS = function (e) {
    return lh(S3, e);
  },
  Pt = JS;
jS.forEach(function (e) {
  Pt[e] = JS(e);
});
const E3 = zc(
    $.jsx("path", { d: "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" }),
    "Send"
  ),
  R3 = zc($.jsx("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" }), "Add"),
  C3 = Pt.div`
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
  w3 = (e) => {
    const { addMessage: r } = e,
      [a, l] = C.useState(),
      s = (p) => {
        l(p.target.value);
      },
      u = () => {
        l(""), a != null && a != null && a !== "" && r(a);
      },
      f = (p) => {
        p.key === "Enter" && (p.preventDefault(), u());
      };
    return $.jsxs(C3, {
      children: [
        $.jsx(ll, {
          variant: "contained",
          sx: {
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            minWidth: "50px",
          },
          children: $.jsx(R3, {}),
        }),
        $.jsx(ti, {
          id: "outlined-basic",
          variant: "outlined",
          value: a,
          fullWidth: !0,
          onChange: s,
          onKeyDown: f,
        }),
        $.jsx(ll, {
          sx: { height: "45px" },
          variant: "contained",
          endIcon: $.jsx(E3, {}),
          onClick: u,
          children: "Send",
        }),
      ],
    });
  },
  T3 = Pt.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: ${({ isSent: e }) => (e ? "flex-end" : "flex-start")};
`,
  A3 = Pt.div`
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
  O3 = (e) => {
    const { isSent: r, message: a } = e;
    return $.jsxs(T3, {
      isSent: r,
      children: [
        !r &&
          $.jsx(Wp, {
            alt: "yooo",
            sx: { width: 40, height: 40 },
            src: "https://pub-1de51ae1e68144d78f7c582e1dda3ab1.r2.dev/clh8n0i2200wsmi08eyobfu35/7ee08a5b-8158-464b-b5da-d183e0e64831.webp",
          }),
        $.jsx(A3, { isSent: e.isSent, children: a }),
        r &&
          $.jsx(Wp, {
            alt: "yooo",
            sx: { width: 40, height: 40, marginRight: "10px" },
            src: "https://pub-1de51ae1e68144d78f7c582e1dda3ab1.r2.dev/clh8n0i2200wsmi08eyobfu35/7ee08a5b-8158-464b-b5da-d183e0e64831.webp",
          }),
      ],
    });
  },
  _3 = Pt.div`
  height: calc(100vh - 64px);
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`,
  M3 = (e) => {
    const { messages: r } = e.chat;
    return $.jsxs($.Fragment, {
      children: [
        $.jsx(_3, {
          children: r.map((a) =>
            $.jsx(O3, { isSent: a.isSent, message: a.message })
          ),
        }),
        $.jsx(w3, { addMessage: e.addMessage }),
      ],
    });
  },
  D3 = Pt.div`
  height: 75px;
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  gap: 10px;

  border-bottom: 1px solid lightgray;

  @media (max-width: 500px) {
    flex-direction: column;
    height: auto;
    align-items: flex-start;
  }
`,
  z3 = Pt.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`,
  N3 = Pt.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,
  B3 = Pt.p`
  font-weight: 400;
  font-size: medium;
  margin: 0;
`,
  k3 = Pt.p`
  font-size: small;
  color: gray;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,
  U3 = ({ username: e, message: r }) =>
    $.jsxs(D3, {
      children: [
        $.jsx(z3, {
          children: $.jsx(Wp, {
            alt: e,
            src: "https://pub-1de51ae1e68144d78f7c582e1dda3ab1.r2.dev/clh8n0i2200wsmi08eyobfu35/7ee08a5b-8158-464b-b5da-d183e0e64831.webp",
          }),
        }),
        $.jsxs(N3, {
          children: [
            $.jsx(B3, { children: e }),
            $.jsxs(k3, { children: [r, " • 10m "] }),
          ],
        }),
      ],
    }),
  L3 = Pt.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 64px); /* Same as ChatList to keep alignment */
  overflow-y: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,
  $3 = Pt.div`
  width: 30%;
  min-width: 250px;
  max-width: 400px;
  height: calc(100vh - 64px); /* Adjust 60px to match your header height */
  overflow-y: auto; /* Enables scrolling for overflowing chat items */
  border-right: 1px solid lightgray;

  @media (max-width: 768px) {
    width: 100%;
    height: 40vh; /* Ensures it doesn't take the whole screen on mobile */
    max-height: 40vh; /* Prevents it from growing too large */
  }
`,
  j3 = Pt.div`
  flex-grow: 1;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  padding-left: 10px;
`,
  H3 = [
    {
      profilePictureUrl: "https://example.com/pic1.jpg",
      username: "Daniel Sones",
      message: "You are epic",
    },
    {
      profilePictureUrl: "https://example.com/pic2.jpg",
      username: "Jeff",
      message: "Hello there!",
    },
    {
      profilePictureUrl: "https://example.com/pic3.jpg",
      username: "Alice",
      message: "Let's go climbing!",
    },
    {
      profilePictureUrl: "https://example.com/pic4.jpg",
      username: "Bob",
      message: "What's up?",
    },
    {
      profilePictureUrl: "https://example.com/pic5.jpg",
      username: "Charlie",
      message: "Did you check that repo?",
    },
    {
      profilePictureUrl: "https://example.com/pic6.jpg",
      username: "Sophia",
      message: "We should catch up soon!",
    },
    {
      profilePictureUrl: "https://example.com/pic7.jpg",
      username: "Michael",
      message: "That project was intense!",
    },
    {
      profilePictureUrl: "https://example.com/pic8.jpg",
      username: "Emma",
      message: "I loved that new album!",
    },
    {
      profilePictureUrl: "https://example.com/pic9.jpg",
      username: "Liam",
      message: "What's your weekend plan?",
    },
    {
      profilePictureUrl: "https://example.com/pic10.jpg",
      username: "Olivia",
      message: "Need help with the code?",
    },
    {
      profilePictureUrl: "https://example.com/pic11.jpg",
      username: "Noah",
      message: "GG on that last game!",
    },
    {
      profilePictureUrl: "https://example.com/pic12.jpg",
      username: "Ava",
      message: "Movie night soon?",
    },
    {
      profilePictureUrl: "https://example.com/pic13.jpg",
      username: "Ethan",
      message: "Final exams are brutal!",
    },
    {
      profilePictureUrl: "https://example.com/pic14.jpg",
      username: "Mia",
      message: "Sent you the doc!",
    },
    {
      profilePictureUrl: "https://example.com/pic15.jpg",
      username: "William",
      message: "Yo, long time no see!",
    },
    {
      profilePictureUrl: "https://example.com/pic16.jpg",
      username: "Harper",
      message: "Brb, grabbing coffee.",
    },
    {
      profilePictureUrl: "https://example.com/pic17.jpg",
      username: "James",
      message: "We should code together!",
    },
    {
      profilePictureUrl: "https://example.com/pic18.jpg",
      username: "Ella",
      message: "Vacation next month?",
    },
    {
      profilePictureUrl: "https://example.com/pic19.jpg",
      username: "Benjamin",
      message: "Got a new setup!",
    },
    {
      profilePictureUrl: "https://example.com/pic20.jpg",
      username: "Charlotte",
      message: "Hyped for the new season!",
    },
  ],
  P3 = () => {
    const [e, r] = C.useState({
        recepient: { name: "", profilePictureURL: "" },
        messages: [],
      }),
      a = (l) => {
        r((s) => ({
          ...s,
          messages: [...s.messages, { message: l, isSent: !0 }],
        }));
      };
    return $.jsxs(L3, {
      children: [
        $.jsx($3, {
          children: H3.map((l) =>
            $.jsx(U3, {
              profilePictureUrl: "",
              username: l.username,
              message: l.message,
            })
          ),
        }),
        $.jsx(j3, { children: $.jsx(M3, { chat: e, addMessage: a }) }),
      ],
    });
  },
  q3 = Pt.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  min-height: calc(100vh - 64px);
  background-color: #f4f6f8;
`,
  V3 = Pt.form`
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
  F3 = Pt.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
`,
  G3 = () => {
    const { login: e } = fc(),
      r = Ko(),
      [a, l] = C.useState(""),
      [s, u] = C.useState(""),
      [f, p] = C.useState(!1),
      [m, h] = C.useState(),
      g = async (R) => {
        R.preventDefault(),
          (await e(a, s)) ? r("/") : (p(!0), h("Invalid username or password"));
      },
      v = (R) => {
        p(!1), h(null), l(R.target.value);
      },
      S = (R) => {
        p(!1), h(null), u(R.target.value);
      };
    return $.jsx(q3, {
      children: $.jsxs(V3, {
        onSubmit: g,
        children: [
          $.jsx(F3, { children: "Login" }),
          $.jsx(ti, {
            id: "email",
            type: "email",
            label: "Email",
            variant: "outlined",
            onChange: v,
            error: f,
            helperText: m,
          }),
          $.jsx(ti, {
            id: "password",
            label: "Password",
            variant: "outlined",
            type: "password",
            onChange: S,
            error: f,
            helperText: m,
          }),
          $.jsx(ll, {
            variant: "contained",
            type: "submit",
            fullWidth: !0,
            sx: { marginTop: "15px", padding: "10px" },
            children: "Login",
          }),
          $.jsx(gh, { to: "/register", children: "Register?" }),
        ],
      }),
    });
  },
  Y3 = (e) => {
    const { children: r } = e,
      { authenticated: a, loading: l } = fc();
    return l
      ? $.jsx("h1", { children: "Loading..." })
      : a
      ? r
      : $.jsx(AC, { to: "/login" });
  };
var os = (e) => e.type === "checkbox",
  ri = (e) => e instanceof Date,
  fn = (e) => e == null;
const ex = (e) => typeof e == "object";
var Dt = (e) => !fn(e) && !Array.isArray(e) && ex(e) && !ri(e),
  tx = (e) =>
    Dt(e) && e.target ? (os(e.target) ? e.target.checked : e.target.value) : e,
  I3 = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  nx = (e, r) => e.has(I3(r)),
  X3 = (e) => {
    const r = e.constructor && e.constructor.prototype;
    return Dt(r) && r.hasOwnProperty("isPrototypeOf");
  },
  tm =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function yn(e) {
  let r;
  const a = Array.isArray(e),
    l = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date) r = new Date(e);
  else if (e instanceof Set) r = new Set(e);
  else if (!(tm && (e instanceof Blob || l)) && (a || Dt(e)))
    if (((r = a ? [] : {}), !a && !X3(e))) r = e;
    else for (const s in e) e.hasOwnProperty(s) && (r[s] = yn(e[s]));
  else return e;
  return r;
}
var Vc = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  Mt = (e) => e === void 0,
  ge = (e, r, a) => {
    if (!r || !Dt(e)) return a;
    const l = Vc(r.split(/[,[\].]+?/)).reduce((s, u) => (fn(s) ? s : s[u]), e);
    return Mt(l) || l === e ? (Mt(e[r]) ? a : e[r]) : l;
  },
  Fn = (e) => typeof e == "boolean",
  nm = (e) => /^\w*$/.test(e),
  rx = (e) => Vc(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
  ft = (e, r, a) => {
    let l = -1;
    const s = nm(r) ? [r] : rx(r),
      u = s.length,
      f = u - 1;
    for (; ++l < u; ) {
      const p = s[l];
      let m = a;
      if (l !== f) {
        const h = e[p];
        m = Dt(h) || Array.isArray(h) ? h : isNaN(+s[l + 1]) ? {} : [];
      }
      if (p === "__proto__" || p === "constructor" || p === "prototype") return;
      (e[p] = m), (e = e[p]);
    }
    return e;
  };
const ic = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  Jn = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  Yr = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  },
  K3 = Ne.createContext(null),
  rm = () => Ne.useContext(K3);
var ax = (e, r, a, l = !0) => {
    const s = { defaultValues: r._defaultValues };
    for (const u in e)
      Object.defineProperty(s, u, {
        get: () => {
          const f = u;
          return (
            r._proxyFormState[f] !== Jn.all &&
              (r._proxyFormState[f] = !l || Jn.all),
            a && (a[f] = !0),
            e[f]
          );
        },
      });
    return s;
  },
  vn = (e) => Dt(e) && !Object.keys(e).length,
  ix = (e, r, a, l) => {
    a(e);
    const { name: s, ...u } = e;
    return (
      vn(u) ||
      Object.keys(u).length >= Object.keys(r).length ||
      Object.keys(u).find((f) => r[f] === (!l || Jn.all))
    );
  },
  jo = (e) => (Array.isArray(e) ? e : [e]),
  lx = (e, r, a) =>
    !e ||
    !r ||
    e === r ||
    jo(e).some((l) => l && (a ? l === r : l.startsWith(r) || r.startsWith(l)));
function am(e) {
  const r = Ne.useRef(e);
  (r.current = e),
    Ne.useEffect(() => {
      const a =
        !e.disabled &&
        r.current.subject &&
        r.current.subject.subscribe({ next: r.current.next });
      return () => {
        a && a.unsubscribe();
      };
    }, [e.disabled]);
}
function Q3(e) {
  const r = rm(),
    { control: a = r.control, disabled: l, name: s, exact: u } = e || {},
    [f, p] = Ne.useState(a._formState),
    m = Ne.useRef(!0),
    h = Ne.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    }),
    g = Ne.useRef(s);
  return (
    (g.current = s),
    am({
      disabled: l,
      next: (v) =>
        m.current &&
        lx(g.current, v.name, u) &&
        ix(v, h.current, a._updateFormState) &&
        p({ ...a._formState, ...v }),
      subject: a._subjects.state,
    }),
    Ne.useEffect(
      () => (
        (m.current = !0),
        h.current.isValid && a._updateValid(!0),
        () => {
          m.current = !1;
        }
      ),
      [a]
    ),
    Ne.useMemo(() => ax(f, a, h.current, !1), [f, a])
  );
}
var Er = (e) => typeof e == "string",
  ox = (e, r, a, l, s) =>
    Er(e)
      ? (l && r.watch.add(e), ge(a, e, s))
      : Array.isArray(e)
      ? e.map((u) => (l && r.watch.add(u), ge(a, u)))
      : (l && (r.watchAll = !0), a);
function W3(e) {
  const r = rm(),
    {
      control: a = r.control,
      name: l,
      defaultValue: s,
      disabled: u,
      exact: f,
    } = e || {},
    p = Ne.useRef(l);
  (p.current = l),
    am({
      disabled: u,
      subject: a._subjects.values,
      next: (g) => {
        lx(p.current, g.name, f) &&
          h(yn(ox(p.current, a._names, g.values || a._formValues, !1, s)));
      },
    });
  const [m, h] = Ne.useState(a._getWatch(l, s));
  return Ne.useEffect(() => a._removeUnmounted()), m;
}
function Z3(e) {
  const r = rm(),
    { name: a, disabled: l, control: s = r.control, shouldUnregister: u } = e,
    f = nx(s._names.array, a),
    p = W3({
      control: s,
      name: a,
      defaultValue: ge(
        s._formValues,
        a,
        ge(s._defaultValues, a, e.defaultValue)
      ),
      exact: !0,
    }),
    m = Q3({ control: s, name: a, exact: !0 }),
    h = Ne.useRef(
      s.register(a, {
        ...e.rules,
        value: p,
        ...(Fn(e.disabled) ? { disabled: e.disabled } : {}),
      })
    ),
    g = Ne.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!ge(m.errors, a) },
            isDirty: { enumerable: !0, get: () => !!ge(m.dirtyFields, a) },
            isTouched: { enumerable: !0, get: () => !!ge(m.touchedFields, a) },
            isValidating: {
              enumerable: !0,
              get: () => !!ge(m.validatingFields, a),
            },
            error: { enumerable: !0, get: () => ge(m.errors, a) },
          }
        ),
      [m, a]
    ),
    v = Ne.useMemo(
      () => ({
        name: a,
        value: p,
        ...(Fn(l) || m.disabled ? { disabled: m.disabled || l } : {}),
        onChange: (S) =>
          h.current.onChange({
            target: { value: tx(S), name: a },
            type: ic.CHANGE,
          }),
        onBlur: () =>
          h.current.onBlur({
            target: { value: ge(s._formValues, a), name: a },
            type: ic.BLUR,
          }),
        ref: (S) => {
          const R = ge(s._fields, a);
          R &&
            S &&
            (R._f.ref = {
              focus: () => S.focus(),
              select: () => S.select(),
              setCustomValidity: (b) => S.setCustomValidity(b),
              reportValidity: () => S.reportValidity(),
            });
        },
      }),
      [a, s._formValues, l, m.disabled, p, s._fields]
    );
  return (
    Ne.useEffect(() => {
      const S = s._options.shouldUnregister || u,
        R = (b, x) => {
          const T = ge(s._fields, b);
          T && T._f && (T._f.mount = x);
        };
      if ((R(a, !0), S)) {
        const b = yn(ge(s._options.defaultValues, a));
        ft(s._defaultValues, a, b),
          Mt(ge(s._formValues, a)) && ft(s._formValues, a, b);
      }
      return (
        !f && s.register(a),
        () => {
          (f ? S && !s._state.action : S) ? s.unregister(a) : R(a, !1);
        }
      );
    }, [a, s, f, u]),
    Ne.useEffect(() => {
      s._updateDisabledField({ disabled: l, fields: s._fields, name: a });
    }, [l, a, s]),
    Ne.useMemo(() => ({ field: v, formState: m, fieldState: g }), [v, m, g])
  );
}
const Ou = (e) => e.render(Z3(e));
var J3 = (e, r, a, l, s) =>
    r
      ? {
          ...a[e],
          types: { ...(a[e] && a[e].types ? a[e].types : {}), [l]: s || !0 },
        }
      : {},
  Nb = (e) => ({
    isOnSubmit: !e || e === Jn.onSubmit,
    isOnBlur: e === Jn.onBlur,
    isOnChange: e === Jn.onChange,
    isOnAll: e === Jn.all,
    isOnTouch: e === Jn.onTouched,
  }),
  Bb = (e, r, a) =>
    !a &&
    (r.watchAll ||
      r.watch.has(e) ||
      [...r.watch].some(
        (l) => e.startsWith(l) && /^\.\w+/.test(e.slice(l.length))
      ));
const Ho = (e, r, a, l) => {
  for (const s of a || Object.keys(e)) {
    const u = ge(e, s);
    if (u) {
      const { _f: f, ...p } = u;
      if (f) {
        if (f.refs && f.refs[0] && r(f.refs[0], s) && !l) return !0;
        if (f.ref && r(f.ref, f.name) && !l) return !0;
        if (Ho(p, r)) break;
      } else if (Dt(p) && Ho(p, r)) break;
    }
  }
};
var eD = (e, r, a) => {
    const l = jo(ge(e, a));
    return ft(l, "root", r[a]), ft(e, a, l), e;
  },
  im = (e) => e.type === "file",
  xr = (e) => typeof e == "function",
  lc = (e) => {
    if (!tm) return !1;
    const r = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (r && r.defaultView ? r.defaultView.HTMLElement : HTMLElement)
    );
  },
  Vu = (e) => Er(e),
  lm = (e) => e.type === "radio",
  oc = (e) => e instanceof RegExp;
const kb = { value: !1, isValid: !1 },
  Ub = { value: !0, isValid: !0 };
var sx = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const r = e
        .filter((a) => a && a.checked && !a.disabled)
        .map((a) => a.value);
      return { value: r, isValid: !!r.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !Mt(e[0].attributes.value)
        ? Mt(e[0].value) || e[0].value === ""
          ? Ub
          : { value: e[0].value, isValid: !0 }
        : Ub
      : kb;
  }
  return kb;
};
const Lb = { isValid: !1, value: null };
var ux = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (r, a) =>
          a && a.checked && !a.disabled ? { isValid: !0, value: a.value } : r,
        Lb
      )
    : Lb;
function $b(e, r, a = "validate") {
  if (Vu(e) || (Array.isArray(e) && e.every(Vu)) || (Fn(e) && !e))
    return { type: a, message: Vu(e) ? e : "", ref: r };
}
var Zi = (e) => (Dt(e) && !oc(e) ? e : { value: e, message: "" }),
  jb = async (e, r, a, l, s, u) => {
    const {
        ref: f,
        refs: p,
        required: m,
        maxLength: h,
        minLength: g,
        min: v,
        max: S,
        pattern: R,
        validate: b,
        name: x,
        valueAsNumber: T,
        mount: _,
      } = e._f,
      M = ge(a, x);
    if (!_ || r.has(x)) return {};
    const A = p ? p[0] : f,
      D = (X) => {
        s &&
          A.reportValidity &&
          (A.setCustomValidity(Fn(X) ? "" : X || ""), A.reportValidity());
      },
      O = {},
      j = lm(f),
      L = os(f),
      re = j || L,
      G =
        ((T || im(f)) && Mt(f.value) && Mt(M)) ||
        (lc(f) && f.value === "") ||
        M === "" ||
        (Array.isArray(M) && !M.length),
      E = J3.bind(null, x, l, O),
      I = (X, J, oe, ee = Yr.maxLength, H = Yr.minLength) => {
        const ae = X ? J : oe;
        O[x] = { type: X ? ee : H, message: ae, ref: f, ...E(X ? ee : H, ae) };
      };
    if (
      u
        ? !Array.isArray(M) || !M.length
        : m &&
          ((!re && (G || fn(M))) ||
            (Fn(M) && !M) ||
            (L && !sx(p).isValid) ||
            (j && !ux(p).isValid))
    ) {
      const { value: X, message: J } = Vu(m)
        ? { value: !!m, message: m }
        : Zi(m);
      if (
        X &&
        ((O[x] = {
          type: Yr.required,
          message: J,
          ref: A,
          ...E(Yr.required, J),
        }),
        !l)
      )
        return D(J), O;
    }
    if (!G && (!fn(v) || !fn(S))) {
      let X, J;
      const oe = Zi(S),
        ee = Zi(v);
      if (!fn(M) && !isNaN(M)) {
        const H = f.valueAsNumber || (M && +M);
        fn(oe.value) || (X = H > oe.value), fn(ee.value) || (J = H < ee.value);
      } else {
        const H = f.valueAsDate || new Date(M),
          ae = (B) => new Date(new Date().toDateString() + " " + B),
          ce = f.type == "time",
          se = f.type == "week";
        Er(oe.value) &&
          M &&
          (X = ce
            ? ae(M) > ae(oe.value)
            : se
            ? M > oe.value
            : H > new Date(oe.value)),
          Er(ee.value) &&
            M &&
            (J = ce
              ? ae(M) < ae(ee.value)
              : se
              ? M < ee.value
              : H < new Date(ee.value));
      }
      if ((X || J) && (I(!!X, oe.message, ee.message, Yr.max, Yr.min), !l))
        return D(O[x].message), O;
    }
    if ((h || g) && !G && (Er(M) || (u && Array.isArray(M)))) {
      const X = Zi(h),
        J = Zi(g),
        oe = !fn(X.value) && M.length > +X.value,
        ee = !fn(J.value) && M.length < +J.value;
      if ((oe || ee) && (I(oe, X.message, J.message), !l))
        return D(O[x].message), O;
    }
    if (R && !G && Er(M)) {
      const { value: X, message: J } = Zi(R);
      if (
        oc(X) &&
        !M.match(X) &&
        ((O[x] = { type: Yr.pattern, message: J, ref: f, ...E(Yr.pattern, J) }),
        !l)
      )
        return D(J), O;
    }
    if (b) {
      if (xr(b)) {
        const X = await b(M, a),
          J = $b(X, A);
        if (J && ((O[x] = { ...J, ...E(Yr.validate, J.message) }), !l))
          return D(J.message), O;
      } else if (Dt(b)) {
        let X = {};
        for (const J in b) {
          if (!vn(X) && !l) break;
          const oe = $b(await b[J](M, a), A, J);
          oe &&
            ((X = { ...oe, ...E(J, oe.message) }),
            D(oe.message),
            l && (O[x] = X));
        }
        if (!vn(X) && ((O[x] = { ref: A, ...X }), !l)) return O;
      }
    }
    return D(!0), O;
  };
function tD(e, r) {
  const a = r.slice(0, -1).length;
  let l = 0;
  for (; l < a; ) e = Mt(e) ? l++ : e[r[l++]];
  return e;
}
function nD(e) {
  for (const r in e) if (e.hasOwnProperty(r) && !Mt(e[r])) return !1;
  return !0;
}
function Ft(e, r) {
  const a = Array.isArray(r) ? r : nm(r) ? [r] : rx(r),
    l = a.length === 1 ? e : tD(e, a),
    s = a.length - 1,
    u = a[s];
  return (
    l && delete l[u],
    s !== 0 &&
      ((Dt(l) && vn(l)) || (Array.isArray(l) && nD(l))) &&
      Ft(e, a.slice(0, -1)),
    e
  );
}
var Cp = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (s) => {
        for (const u of e) u.next && u.next(s);
      },
      subscribe: (s) => (
        e.push(s),
        {
          unsubscribe: () => {
            e = e.filter((u) => u !== s);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  },
  oh = (e) => fn(e) || !ex(e);
function Ra(e, r) {
  if (oh(e) || oh(r)) return e === r;
  if (ri(e) && ri(r)) return e.getTime() === r.getTime();
  const a = Object.keys(e),
    l = Object.keys(r);
  if (a.length !== l.length) return !1;
  for (const s of a) {
    const u = e[s];
    if (!l.includes(s)) return !1;
    if (s !== "ref") {
      const f = r[s];
      if (
        (ri(u) && ri(f)) ||
        (Dt(u) && Dt(f)) ||
        (Array.isArray(u) && Array.isArray(f))
          ? !Ra(u, f)
          : u !== f
      )
        return !1;
    }
  }
  return !0;
}
var cx = (e) => e.type === "select-multiple",
  rD = (e) => lm(e) || os(e),
  wp = (e) => lc(e) && e.isConnected,
  fx = (e) => {
    for (const r in e) if (xr(e[r])) return !0;
    return !1;
  };
function sc(e, r = {}) {
  const a = Array.isArray(e);
  if (Dt(e) || a)
    for (const l in e)
      Array.isArray(e[l]) || (Dt(e[l]) && !fx(e[l]))
        ? ((r[l] = Array.isArray(e[l]) ? [] : {}), sc(e[l], r[l]))
        : fn(e[l]) || (r[l] = !0);
  return r;
}
function dx(e, r, a) {
  const l = Array.isArray(e);
  if (Dt(e) || l)
    for (const s in e)
      Array.isArray(e[s]) || (Dt(e[s]) && !fx(e[s]))
        ? Mt(r) || oh(a[s])
          ? (a[s] = Array.isArray(e[s]) ? sc(e[s], []) : { ...sc(e[s]) })
          : dx(e[s], fn(r) ? {} : r[s], a[s])
        : (a[s] = !Ra(e[s], r[s]));
  return a;
}
var Oo = (e, r) => dx(e, r, sc(r)),
  px = (e, { valueAsNumber: r, valueAsDate: a, setValueAs: l }) =>
    Mt(e)
      ? e
      : r
      ? e === ""
        ? NaN
        : e && +e
      : a && Er(e)
      ? new Date(e)
      : l
      ? l(e)
      : e;
function Tp(e) {
  const r = e.ref;
  return im(r)
    ? r.files
    : lm(r)
    ? ux(e.refs).value
    : cx(r)
    ? [...r.selectedOptions].map(({ value: a }) => a)
    : os(r)
    ? sx(e.refs).value
    : px(Mt(r.value) ? e.ref.value : r.value, e);
}
var aD = (e, r, a, l) => {
    const s = {};
    for (const u of e) {
      const f = ge(r, u);
      f && ft(s, u, f._f);
    }
    return {
      criteriaMode: a,
      names: [...e],
      fields: s,
      shouldUseNativeValidation: l,
    };
  },
  _o = (e) =>
    Mt(e)
      ? e
      : oc(e)
      ? e.source
      : Dt(e)
      ? oc(e.value)
        ? e.value.source
        : e.value
      : e;
const Hb = "AsyncFunction";
var iD = (e) =>
    !!e &&
    !!e.validate &&
    !!(
      (xr(e.validate) && e.validate.constructor.name === Hb) ||
      (Dt(e.validate) &&
        Object.values(e.validate).find((r) => r.constructor.name === Hb))
    ),
  lD = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function Pb(e, r, a) {
  const l = ge(e, a);
  if (l || nm(a)) return { error: l, name: a };
  const s = a.split(".");
  for (; s.length; ) {
    const u = s.join("."),
      f = ge(r, u),
      p = ge(e, u);
    if (f && !Array.isArray(f) && a !== u) return { name: a };
    if (p && p.type) return { name: u, error: p };
    s.pop();
  }
  return { name: a };
}
var oD = (e, r, a, l, s) =>
    s.isOnAll
      ? !1
      : !a && s.isOnTouch
      ? !(r || e)
      : (a ? l.isOnBlur : s.isOnBlur)
      ? !e
      : (a ? l.isOnChange : s.isOnChange)
      ? e
      : !0,
  sD = (e, r) => !Vc(ge(e, r)).length && Ft(e, r);
const uD = {
  mode: Jn.onSubmit,
  reValidateMode: Jn.onChange,
  shouldFocusError: !0,
};
function cD(e = {}) {
  let r = { ...uD, ...e },
    a = {
      submitCount: 0,
      isDirty: !1,
      isLoading: xr(r.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: r.errors || {},
      disabled: r.disabled || !1,
    },
    l = {},
    s =
      Dt(r.defaultValues) || Dt(r.values)
        ? yn(r.defaultValues || r.values) || {}
        : {},
    u = r.shouldUnregister ? {} : yn(s),
    f = { action: !1, mount: !1, watch: !1 },
    p = {
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
    v = { values: Cp(), array: Cp(), state: Cp() },
    S = Nb(r.mode),
    R = Nb(r.reValidateMode),
    b = r.criteriaMode === Jn.all,
    x = (N) => (q) => {
      clearTimeout(h), (h = setTimeout(N, q));
    },
    T = async (N) => {
      if (!r.disabled && (g.isValid || N)) {
        const q = r.resolver ? vn((await re()).errors) : await E(l, !0);
        q !== a.isValid && v.state.next({ isValid: q });
      }
    },
    _ = (N, q) => {
      !r.disabled &&
        (g.isValidating || g.validatingFields) &&
        ((N || Array.from(p.mount)).forEach((Y) => {
          Y && (q ? ft(a.validatingFields, Y, q) : Ft(a.validatingFields, Y));
        }),
        v.state.next({
          validatingFields: a.validatingFields,
          isValidating: !vn(a.validatingFields),
        }));
    },
    M = (N, q = [], Y, fe, Q = !0, de = !0) => {
      if (fe && Y && !r.disabled) {
        if (((f.action = !0), de && Array.isArray(ge(l, N)))) {
          const me = Y(ge(l, N), fe.argA, fe.argB);
          Q && ft(l, N, me);
        }
        if (de && Array.isArray(ge(a.errors, N))) {
          const me = Y(ge(a.errors, N), fe.argA, fe.argB);
          Q && ft(a.errors, N, me), sD(a.errors, N);
        }
        if (g.touchedFields && de && Array.isArray(ge(a.touchedFields, N))) {
          const me = Y(ge(a.touchedFields, N), fe.argA, fe.argB);
          Q && ft(a.touchedFields, N, me);
        }
        g.dirtyFields && (a.dirtyFields = Oo(s, u)),
          v.state.next({
            name: N,
            isDirty: X(N, q),
            dirtyFields: a.dirtyFields,
            errors: a.errors,
            isValid: a.isValid,
          });
      } else ft(u, N, q);
    },
    A = (N, q) => {
      ft(a.errors, N, q), v.state.next({ errors: a.errors });
    },
    D = (N) => {
      (a.errors = N), v.state.next({ errors: a.errors, isValid: !1 });
    },
    O = (N, q, Y, fe) => {
      const Q = ge(l, N);
      if (Q) {
        const de = ge(u, N, Mt(Y) ? ge(s, N) : Y);
        Mt(de) || (fe && fe.defaultChecked) || q
          ? ft(u, N, q ? de : Tp(Q._f))
          : ee(N, de),
          f.mount && T();
      }
    },
    j = (N, q, Y, fe, Q) => {
      let de = !1,
        me = !1;
      const Me = { name: N };
      if (!r.disabled) {
        const lt = !!(ge(l, N) && ge(l, N)._f && ge(l, N)._f.disabled);
        if (!Y || fe) {
          g.isDirty &&
            ((me = a.isDirty),
            (a.isDirty = Me.isDirty = X()),
            (de = me !== Me.isDirty));
          const ot = lt || Ra(ge(s, N), q);
          (me = !!(!lt && ge(a.dirtyFields, N))),
            ot || lt ? Ft(a.dirtyFields, N) : ft(a.dirtyFields, N, !0),
            (Me.dirtyFields = a.dirtyFields),
            (de = de || (g.dirtyFields && me !== !ot));
        }
        if (Y) {
          const ot = ge(a.touchedFields, N);
          ot ||
            (ft(a.touchedFields, N, Y),
            (Me.touchedFields = a.touchedFields),
            (de = de || (g.touchedFields && ot !== Y)));
        }
        de && Q && v.state.next(Me);
      }
      return de ? Me : {};
    },
    L = (N, q, Y, fe) => {
      const Q = ge(a.errors, N),
        de = g.isValid && Fn(q) && a.isValid !== q;
      if (
        (r.delayError && Y
          ? ((m = x(() => A(N, Y))), m(r.delayError))
          : (clearTimeout(h),
            (m = null),
            Y ? ft(a.errors, N, Y) : Ft(a.errors, N)),
        (Y ? !Ra(Q, Y) : Q) || !vn(fe) || de)
      ) {
        const me = {
          ...fe,
          ...(de && Fn(q) ? { isValid: q } : {}),
          errors: a.errors,
          name: N,
        };
        (a = { ...a, ...me }), v.state.next(me);
      }
    },
    re = async (N) => {
      _(N, !0);
      const q = await r.resolver(
        u,
        r.context,
        aD(N || p.mount, l, r.criteriaMode, r.shouldUseNativeValidation)
      );
      return _(N), q;
    },
    G = async (N) => {
      const { errors: q } = await re(N);
      if (N)
        for (const Y of N) {
          const fe = ge(q, Y);
          fe ? ft(a.errors, Y, fe) : Ft(a.errors, Y);
        }
      else a.errors = q;
      return q;
    },
    E = async (N, q, Y = { valid: !0 }) => {
      for (const fe in N) {
        const Q = N[fe];
        if (Q) {
          const { _f: de, ...me } = Q;
          if (de) {
            const Me = p.array.has(de.name),
              lt = Q._f && iD(Q._f);
            lt && g.validatingFields && _([fe], !0);
            const ot = await jb(
              Q,
              p.disabled,
              u,
              b,
              r.shouldUseNativeValidation && !q,
              Me
            );
            if (
              (lt && g.validatingFields && _([fe]),
              ot[de.name] && ((Y.valid = !1), q))
            )
              break;
            !q &&
              (ge(ot, de.name)
                ? Me
                  ? eD(a.errors, ot, de.name)
                  : ft(a.errors, de.name, ot[de.name])
                : Ft(a.errors, de.name));
          }
          !vn(me) && (await E(me, q, Y));
        }
      }
      return Y.valid;
    },
    I = () => {
      for (const N of p.unMount) {
        const q = ge(l, N);
        q &&
          (q._f.refs ? q._f.refs.every((Y) => !wp(Y)) : !wp(q._f.ref)) &&
          be(N);
      }
      p.unMount = new Set();
    },
    X = (N, q) => !r.disabled && (N && q && ft(u, N, q), !Ra(W(), s)),
    J = (N, q, Y) =>
      ox(N, p, { ...(f.mount ? u : Mt(q) ? s : Er(N) ? { [N]: q } : q) }, Y, q),
    oe = (N) =>
      Vc(ge(f.mount ? u : s, N, r.shouldUnregister ? ge(s, N, []) : [])),
    ee = (N, q, Y = {}) => {
      const fe = ge(l, N);
      let Q = q;
      if (fe) {
        const de = fe._f;
        de &&
          (!de.disabled && ft(u, N, px(q, de)),
          (Q = lc(de.ref) && fn(q) ? "" : q),
          cx(de.ref)
            ? [...de.ref.options].forEach(
                (me) => (me.selected = Q.includes(me.value))
              )
            : de.refs
            ? os(de.ref)
              ? de.refs.length > 1
                ? de.refs.forEach(
                    (me) =>
                      (!me.defaultChecked || !me.disabled) &&
                      (me.checked = Array.isArray(Q)
                        ? !!Q.find((Me) => Me === me.value)
                        : Q === me.value)
                  )
                : de.refs[0] && (de.refs[0].checked = !!Q)
              : de.refs.forEach((me) => (me.checked = me.value === Q))
            : im(de.ref)
            ? (de.ref.value = "")
            : ((de.ref.value = Q),
              de.ref.type || v.values.next({ name: N, values: { ...u } })));
      }
      (Y.shouldDirty || Y.shouldTouch) &&
        j(N, Q, Y.shouldTouch, Y.shouldDirty, !0),
        Y.shouldValidate && B(N);
    },
    H = (N, q, Y) => {
      for (const fe in q) {
        const Q = q[fe],
          de = `${N}.${fe}`,
          me = ge(l, de);
        (p.array.has(N) || Dt(Q) || (me && !me._f)) && !ri(Q)
          ? H(de, Q, Y)
          : ee(de, Q, Y);
      }
    },
    ae = (N, q, Y = {}) => {
      const fe = ge(l, N),
        Q = p.array.has(N),
        de = yn(q);
      ft(u, N, de),
        Q
          ? (v.array.next({ name: N, values: { ...u } }),
            (g.isDirty || g.dirtyFields) &&
              Y.shouldDirty &&
              v.state.next({
                name: N,
                dirtyFields: Oo(s, u),
                isDirty: X(N, de),
              }))
          : fe && !fe._f && !fn(de)
          ? H(N, de, Y)
          : ee(N, de, Y),
        Bb(N, p) && v.state.next({ ...a }),
        v.values.next({ name: f.mount ? N : void 0, values: { ...u } });
    },
    ce = async (N) => {
      f.mount = !0;
      const q = N.target;
      let Y = q.name,
        fe = !0;
      const Q = ge(l, Y),
        de = () => (q.type ? Tp(Q._f) : tx(N)),
        me = (Me) => {
          fe =
            Number.isNaN(Me) ||
            (ri(Me) && isNaN(Me.getTime())) ||
            Ra(Me, ge(u, Y, Me));
        };
      if (Q) {
        let Me, lt;
        const ot = de(),
          kt = N.type === ic.BLUR || N.type === ic.FOCUS_OUT,
          lr =
            (!lD(Q._f) && !r.resolver && !ge(a.errors, Y) && !Q._f.deps) ||
            oD(kt, ge(a.touchedFields, Y), a.isSubmitted, R, S),
          dn = Bb(Y, p, kt);
        ft(u, Y, ot),
          kt
            ? (Q._f.onBlur && Q._f.onBlur(N), m && m(0))
            : Q._f.onChange && Q._f.onChange(N);
        const Je = j(Y, ot, kt, !1),
          or = !vn(Je) || dn;
        if (
          (!kt && v.values.next({ name: Y, type: N.type, values: { ...u } }),
          lr)
        )
          return (
            g.isValid && (r.mode === "onBlur" && kt ? T() : kt || T()),
            or && v.state.next({ name: Y, ...(dn ? {} : Je) })
          );
        if ((!kt && dn && v.state.next({ ...a }), r.resolver)) {
          const { errors: pn } = await re([Y]);
          if ((me(ot), fe)) {
            const Gt = Pb(a.errors, l, Y),
              Te = Pb(pn, l, Gt.name || Y);
            (Me = Te.error), (Y = Te.name), (lt = vn(pn));
          }
        } else
          _([Y], !0),
            (Me = (await jb(Q, p.disabled, u, b, r.shouldUseNativeValidation))[
              Y
            ]),
            _([Y]),
            me(ot),
            fe && (Me ? (lt = !1) : g.isValid && (lt = await E(l, !0)));
        fe && (Q._f.deps && B(Q._f.deps), L(Y, lt, Me, Je));
      }
    },
    se = (N, q) => {
      if (ge(a.errors, q) && N.focus) return N.focus(), 1;
    },
    B = async (N, q = {}) => {
      let Y, fe;
      const Q = jo(N);
      if (r.resolver) {
        const de = await G(Mt(N) ? N : Q);
        (Y = vn(de)), (fe = N ? !Q.some((me) => ge(de, me)) : Y);
      } else
        N
          ? ((fe = (
              await Promise.all(
                Q.map(async (de) => {
                  const me = ge(l, de);
                  return await E(me && me._f ? { [de]: me } : me);
                })
              )
            ).every(Boolean)),
            !(!fe && !a.isValid) && T())
          : (fe = Y = await E(l));
      return (
        v.state.next({
          ...(!Er(N) || (g.isValid && Y !== a.isValid) ? {} : { name: N }),
          ...(r.resolver || !N ? { isValid: Y } : {}),
          errors: a.errors,
        }),
        q.shouldFocus && !fe && Ho(l, se, N ? Q : p.mount),
        fe
      );
    },
    W = (N) => {
      const q = { ...(f.mount ? u : s) };
      return Mt(N) ? q : Er(N) ? ge(q, N) : N.map((Y) => ge(q, Y));
    },
    he = (N, q) => ({
      invalid: !!ge((q || a).errors, N),
      isDirty: !!ge((q || a).dirtyFields, N),
      error: ge((q || a).errors, N),
      isValidating: !!ge(a.validatingFields, N),
      isTouched: !!ge((q || a).touchedFields, N),
    }),
    pe = (N) => {
      N && jo(N).forEach((q) => Ft(a.errors, q)),
        v.state.next({ errors: N ? a.errors : {} });
    },
    ue = (N, q, Y) => {
      const fe = (ge(l, N, { _f: {} })._f || {}).ref,
        Q = ge(a.errors, N) || {},
        { ref: de, message: me, type: Me, ...lt } = Q;
      ft(a.errors, N, { ...lt, ...q, ref: fe }),
        v.state.next({ name: N, errors: a.errors, isValid: !1 }),
        Y && Y.shouldFocus && fe && fe.focus && fe.focus();
    },
    ye = (N, q) =>
      xr(N)
        ? v.values.subscribe({ next: (Y) => N(J(void 0, q), Y) })
        : J(N, q, !0),
    be = (N, q = {}) => {
      for (const Y of N ? jo(N) : p.mount)
        p.mount.delete(Y),
          p.array.delete(Y),
          q.keepValue || (Ft(l, Y), Ft(u, Y)),
          !q.keepError && Ft(a.errors, Y),
          !q.keepDirty && Ft(a.dirtyFields, Y),
          !q.keepTouched && Ft(a.touchedFields, Y),
          !q.keepIsValidating && Ft(a.validatingFields, Y),
          !r.shouldUnregister && !q.keepDefaultValue && Ft(s, Y);
      v.values.next({ values: { ...u } }),
        v.state.next({ ...a, ...(q.keepDirty ? { isDirty: X() } : {}) }),
        !q.keepIsValid && T();
    },
    Ue = ({ disabled: N, name: q, field: Y, fields: fe }) => {
      ((Fn(N) && f.mount) || N || p.disabled.has(q)) &&
        (N ? p.disabled.add(q) : p.disabled.delete(q),
        j(q, Tp(Y ? Y._f : ge(fe, q)._f), !1, !1, !0));
    },
    Ce = (N, q = {}) => {
      let Y = ge(l, N);
      const fe = Fn(q.disabled) || Fn(r.disabled);
      return (
        ft(l, N, {
          ...(Y || {}),
          _f: {
            ...(Y && Y._f ? Y._f : { ref: { name: N } }),
            name: N,
            mount: !0,
            ...q,
          },
        }),
        p.mount.add(N),
        Y
          ? Ue({
              field: Y,
              disabled: Fn(q.disabled) ? q.disabled : r.disabled,
              name: N,
            })
          : O(N, !0, q.value),
        {
          ...(fe ? { disabled: q.disabled || r.disabled } : {}),
          ...(r.progressive
            ? {
                required: !!q.required,
                min: _o(q.min),
                max: _o(q.max),
                minLength: _o(q.minLength),
                maxLength: _o(q.maxLength),
                pattern: _o(q.pattern),
              }
            : {}),
          name: N,
          onChange: ce,
          onBlur: ce,
          ref: (Q) => {
            if (Q) {
              Ce(N, q), (Y = ge(l, N));
              const de =
                  (Mt(Q.value) &&
                    Q.querySelectorAll &&
                    Q.querySelectorAll("input,select,textarea")[0]) ||
                  Q,
                me = rD(de),
                Me = Y._f.refs || [];
              if (me ? Me.find((lt) => lt === de) : de === Y._f.ref) return;
              ft(l, N, {
                _f: {
                  ...Y._f,
                  ...(me
                    ? {
                        refs: [
                          ...Me.filter(wp),
                          de,
                          ...(Array.isArray(ge(s, N)) ? [{}] : []),
                        ],
                        ref: { type: de.type, name: N },
                      }
                    : { ref: de }),
                },
              }),
                O(N, !1, void 0, de);
            } else
              (Y = ge(l, N, {})),
                Y._f && (Y._f.mount = !1),
                (r.shouldUnregister || q.shouldUnregister) &&
                  !(nx(p.array, N) && f.action) &&
                  p.unMount.add(N);
          },
        }
      );
    },
    we = () => r.shouldFocusError && Ho(l, se, p.mount),
    ve = (N) => {
      Fn(N) &&
        (v.state.next({ disabled: N }),
        Ho(
          l,
          (q, Y) => {
            const fe = ge(l, Y);
            fe &&
              ((q.disabled = fe._f.disabled || N),
              Array.isArray(fe._f.refs) &&
                fe._f.refs.forEach((Q) => {
                  Q.disabled = fe._f.disabled || N;
                }));
          },
          0,
          !1
        ));
    },
    De = (N, q) => async (Y) => {
      let fe;
      Y && (Y.preventDefault && Y.preventDefault(), Y.persist && Y.persist());
      let Q = yn(u);
      if (p.disabled.size) for (const de of p.disabled) ft(Q, de, void 0);
      if ((v.state.next({ isSubmitting: !0 }), r.resolver)) {
        const { errors: de, values: me } = await re();
        (a.errors = de), (Q = me);
      } else await E(l);
      if ((Ft(a.errors, "root"), vn(a.errors))) {
        v.state.next({ errors: {} });
        try {
          await N(Q, Y);
        } catch (de) {
          fe = de;
        }
      } else q && (await q({ ...a.errors }, Y)), we(), setTimeout(we);
      if (
        (v.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: vn(a.errors) && !fe,
          submitCount: a.submitCount + 1,
          errors: a.errors,
        }),
        fe)
      )
        throw fe;
    },
    Ae = (N, q = {}) => {
      ge(l, N) &&
        (Mt(q.defaultValue)
          ? ae(N, yn(ge(s, N)))
          : (ae(N, q.defaultValue), ft(s, N, yn(q.defaultValue))),
        q.keepTouched || Ft(a.touchedFields, N),
        q.keepDirty ||
          (Ft(a.dirtyFields, N),
          (a.isDirty = q.defaultValue ? X(N, yn(ge(s, N))) : X())),
        q.keepError || (Ft(a.errors, N), g.isValid && T()),
        v.state.next({ ...a }));
    },
    Ye = (N, q = {}) => {
      const Y = N ? yn(N) : s,
        fe = yn(Y),
        Q = vn(N),
        de = Q ? s : fe;
      if ((q.keepDefaultValues || (s = Y), !q.keepValues)) {
        if (q.keepDirtyValues) {
          const me = new Set([...p.mount, ...Object.keys(Oo(s, u))]);
          for (const Me of Array.from(me))
            ge(a.dirtyFields, Me) ? ft(de, Me, ge(u, Me)) : ae(Me, ge(de, Me));
        } else {
          if (tm && Mt(N))
            for (const me of p.mount) {
              const Me = ge(l, me);
              if (Me && Me._f) {
                const lt = Array.isArray(Me._f.refs)
                  ? Me._f.refs[0]
                  : Me._f.ref;
                if (lc(lt)) {
                  const ot = lt.closest("form");
                  if (ot) {
                    ot.reset();
                    break;
                  }
                }
              }
            }
          l = {};
        }
        (u = r.shouldUnregister ? (q.keepDefaultValues ? yn(s) : {}) : yn(de)),
          v.array.next({ values: { ...de } }),
          v.values.next({ values: { ...de } });
      }
      (p = {
        mount: q.keepDirtyValues ? p.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (f.mount = !g.isValid || !!q.keepIsValid || !!q.keepDirtyValues),
        (f.watch = !!r.shouldUnregister),
        v.state.next({
          submitCount: q.keepSubmitCount ? a.submitCount : 0,
          isDirty: Q
            ? !1
            : q.keepDirty
            ? a.isDirty
            : !!(q.keepDefaultValues && !Ra(N, s)),
          isSubmitted: q.keepIsSubmitted ? a.isSubmitted : !1,
          dirtyFields: Q
            ? {}
            : q.keepDirtyValues
            ? q.keepDefaultValues && u
              ? Oo(s, u)
              : a.dirtyFields
            : q.keepDefaultValues && N
            ? Oo(s, N)
            : q.keepDirty
            ? a.dirtyFields
            : {},
          touchedFields: q.keepTouched ? a.touchedFields : {},
          errors: q.keepErrors ? a.errors : {},
          isSubmitSuccessful: q.keepIsSubmitSuccessful
            ? a.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    Be = (N, q) => Ye(xr(N) ? N(u) : N, q);
  return {
    control: {
      register: Ce,
      unregister: be,
      getFieldState: he,
      handleSubmit: De,
      setError: ue,
      _executeSchema: re,
      _getWatch: J,
      _getDirty: X,
      _updateValid: T,
      _removeUnmounted: I,
      _updateFieldArray: M,
      _updateDisabledField: Ue,
      _getFieldArray: oe,
      _reset: Ye,
      _resetDefaultValues: () =>
        xr(r.defaultValues) &&
        r.defaultValues().then((N) => {
          Be(N, r.resetOptions), v.state.next({ isLoading: !1 });
        }),
      _updateFormState: (N) => {
        a = { ...a, ...N };
      },
      _disableForm: ve,
      _subjects: v,
      _proxyFormState: g,
      _setErrors: D,
      get _fields() {
        return l;
      },
      get _formValues() {
        return u;
      },
      get _state() {
        return f;
      },
      set _state(N) {
        f = N;
      },
      get _defaultValues() {
        return s;
      },
      get _names() {
        return p;
      },
      set _names(N) {
        p = N;
      },
      get _formState() {
        return a;
      },
      set _formState(N) {
        a = N;
      },
      get _options() {
        return r;
      },
      set _options(N) {
        r = { ...r, ...N };
      },
    },
    trigger: B,
    register: Ce,
    handleSubmit: De,
    watch: ye,
    setValue: ae,
    getValues: W,
    reset: Be,
    resetField: Ae,
    clearErrors: pe,
    unregister: be,
    setError: ue,
    setFocus: (N, q = {}) => {
      const Y = ge(l, N),
        fe = Y && Y._f;
      if (fe) {
        const Q = fe.refs ? fe.refs[0] : fe.ref;
        Q.focus && (Q.focus(), q.shouldSelect && xr(Q.select) && Q.select());
      }
    },
    getFieldState: he,
  };
}
function fD(e = {}) {
  const r = Ne.useRef(void 0),
    a = Ne.useRef(void 0),
    [l, s] = Ne.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: xr(e.defaultValues),
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
      defaultValues: xr(e.defaultValues) ? void 0 : e.defaultValues,
    });
  r.current || (r.current = { ...cD(e), formState: l });
  const u = r.current.control;
  return (
    (u._options = e),
    am({
      subject: u._subjects.state,
      next: (f) => {
        ix(f, u._proxyFormState, u._updateFormState, !0) &&
          s({ ...u._formState });
      },
    }),
    Ne.useEffect(() => u._disableForm(e.disabled), [u, e.disabled]),
    Ne.useEffect(() => {
      if (u._proxyFormState.isDirty) {
        const f = u._getDirty();
        f !== l.isDirty && u._subjects.state.next({ isDirty: f });
      }
    }, [u, l.isDirty]),
    Ne.useEffect(() => {
      e.values && !Ra(e.values, a.current)
        ? (u._reset(e.values, u._options.resetOptions),
          (a.current = e.values),
          s((f) => ({ ...f })))
        : u._resetDefaultValues();
    }, [e.values, u]),
    Ne.useEffect(() => {
      e.errors && u._setErrors(e.errors);
    }, [e.errors, u]),
    Ne.useEffect(() => {
      u._state.mount || (u._updateValid(), (u._state.mount = !0)),
        u._state.watch &&
          ((u._state.watch = !1), u._subjects.state.next({ ...u._formState })),
        u._removeUnmounted();
    }),
    Ne.useEffect(() => {
      e.shouldUnregister && u._subjects.values.next({ values: u._getWatch() });
    }, [e.shouldUnregister, u]),
    (r.current.formState = ax(l, u)),
    r.current
  );
}
const dD = Pt.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  min-height: calc(100vh - 64px);
  background-color: #f4f6f8;
`,
  pD = Pt.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 30px;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`,
  hD = Pt.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
`,
  mD = () => {
    const { authenticated: e } = fc(),
      r = Ko();
    C.useEffect(() => {
      e && r("/");
    }, [e]);
    const {
        handleSubmit: a,
        watch: l,
        control: s,
        formState: { errors: u },
      } = fD(),
      f = async (h) => {
        try {
          (await M1.post("/users/signup", h)).status === 200 && r("/login");
        } catch {
          console.log("something went wrong");
        }
      },
      p = async (h) => {
        f(h);
      },
      m = l("password");
    return $.jsx(dD, {
      children: $.jsx(pD, {
        children: $.jsxs("form", {
          onSubmit: a(p),
          children: [
            $.jsx(hD, { children: "Register" }),
            $.jsx(Ou, {
              name: "email",
              control: s,
              rules: {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email format",
                },
              },
              render: ({ field: h }) => {
                var g;
                return $.jsx(ti, {
                  ...h,
                  label: "Email",
                  fullWidth: !0,
                  error: !!u.email,
                  helperText: (g = u.email) == null ? void 0 : g.message,
                  margin: "dense",
                });
              },
            }),
            $.jsx(Ou, {
              name: "username",
              control: s,
              rules: { required: "Username is required" },
              render: ({ field: h }) => {
                var g;
                return $.jsx(ti, {
                  ...h,
                  label: "Username",
                  fullWidth: !0,
                  error: !!u.username,
                  helperText: (g = u.username) == null ? void 0 : g.message,
                  margin: "dense",
                });
              },
            }),
            $.jsx(Ou, {
              name: "password",
              control: s,
              rules: {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              },
              render: ({ field: h }) => {
                var g;
                return $.jsx(ti, {
                  ...h,
                  type: "password",
                  label: "Password",
                  fullWidth: !0,
                  error: !!u.password,
                  helperText: (g = u.password) == null ? void 0 : g.message,
                  margin: "dense",
                });
              },
            }),
            $.jsx(Ou, {
              name: "confirm_password",
              control: s,
              rules: {
                required: "Confirm Password is required",
                validate: (h) => h === m || "Passwords do not match",
              },
              render: ({ field: h }) => {
                var g;
                return $.jsx(ti, {
                  ...h,
                  type: "password",
                  label: "Confirm Password",
                  fullWidth: !0,
                  error: !!u.confirm_password,
                  helperText:
                    (g = u.confirm_password) == null ? void 0 : g.message,
                  margin: "dense",
                });
              },
            }),
            $.jsx(ll, {
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
  gD = Pt.div`
  max-height: 100vh;
`,
  yD = () =>
    $.jsx(gD, {
      children: $.jsxs(Jb, {
        children: [
          $.jsx(Bo, {
            path: "/",
            element: $.jsx(Y3, { children: $.jsx(P3, {}) }),
          }),
          $.jsx(Bo, { path: "/login", element: $.jsx(G3, {}) }),
          $.jsx(Bo, { path: "/register", element: $.jsx(mD, {}) }),
        ],
      }),
    });
function vD() {
  return $.jsxs(sw, {
    axiosClient: M1,
    children: [$.jsx(bM, {}), $.jsx(yD, {})],
  });
}
const bD = () =>
  $.jsx(ZC, {
    children: $.jsx(Jb, {
      children: $.jsx(Bo, { path: "/*", element: $.jsx(vD, {}) }),
    }),
  });
$R.createRoot(document.getElementById("root")).render(
  $.jsx(C.StrictMode, { children: $.jsx(bD, {}) })
);
