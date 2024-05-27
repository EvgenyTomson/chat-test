(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("#app{max-width:1280px;margin:0 auto;padding:2rem;text-align:center;font-family:Inter,system-ui,Avenir,Helvetica,Arial,sans-serif;line-height:1.5;font-weight:400;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;--massage-bg-color: #a8f9de}@media (max-width: 680px){#app{padding:1rem}}._message_jykl8_1{display:flex;align-items:flex-end;width:100%;gap:12px}._time_jykl8_15{font-size:12px;text-align:center;color:gray}._heading_jykl8_27{width:100%;display:flex;align-items:center;gap:12px}._avatar_jykl8_41{width:64px;height:64px;border-radius:50%}._authorName_jykl8_53{font-size:16px;font-weight:500;word-break:break-all}._body_jykl8_65{display:flex;width:100%;flex-direction:column;gap:12px;text-align:left;padding:12px;border-radius:12px;background-color:var(--massage-bg-color)}._text_jykl8_87{font-size:14px;word-break:break-all;white-space:normal}._quote_jykl8_99{display:flex;flex-direction:column;gap:6px;padding:6px;border-radius:6px;background-color:#fff;cursor:pointer}._oval_jykl8_119{font-size:14px}._quoteAuthor_jykl8_127{font-weight:500;word-break:break-all;white-space:normal}._quoteText_jykl8_139{font-size:12px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;word-break:break-all;overflow:hidden}@media (max-width: 680px){._time_jykl8_15{font-size:10px}._authorName_jykl8_53{font-size:14px}._text_jykl8_87,._quoteAuthor_jykl8_127{font-size:12px}._quoteText_jykl8_139{font-size:10px}._avatar_jykl8_41{width:48px;height:48px}}._list_11hv9_1{max-width:100%;padding:24px;margin-bottom:18px;display:flex;flex-direction:column;gap:24px;list-style:none}@media (max-width: 680px){._list_11hv9_1{padding:12px;margin-bottom:12px;gap:12px}}._form_1vyuo_1{position:relative;max-width:100%;padding:24px;display:flex;align-items:center;justify-content:space-between;gap:12px}._avatar_1vyuo_21{width:64px;height:64px;border-radius:50%}._text_1vyuo_33{box-sizing:border-box;flex-grow:1;padding:.4em .8em;font-size:1.6em;scrollbar-width:none;outline:none;border:1px solid grey;border-radius:12px;resize:none}._text_1vyuo_33::-webkit-scrollbar{display:none}._text_1vyuo_33:focus{border:1px solid #646cff}._text_1vyuo_33::placeholder{color:#a9a9a9}._button_1vyuo_81{padding:1.4em .8em;font-weight:500;font-family:inherit;font-size:1em;border-radius:12px;border:1px solid transparent;background-color:#f9f9f9;cursor:pointer;transition:border-color .25s}button:hover,button:active{border-color:#646cff}._form_1vyuo_1 ._tooltiptext_1vyuo_115{visibility:hidden;width:50%;font-size:14px;color:inherit;text-align:center;border-radius:6px;padding:5px 0;position:absolute;z-index:1;top:-6px;left:25%;opacity:0;transition:opacity .3s}._form_1vyuo_1:hover ._tooltiptext_1vyuo_115,._form_1vyuo_1:active ._tooltiptext_1vyuo_115{visibility:visible;opacity:1}@media (max-width: 680px){._form_1vyuo_1{padding:12px;flex-direction:column}._text_1vyuo_33{font-size:1.4em;width:100%}._avatar_1vyuo_21{display:none}._button_1vyuo_81{padding:1.2em .8em;width:100%}._form_1vyuo_1 ._tooltiptext_1vyuo_115{font-size:12px;top:-18px}}@media (max-width: 380px){._form_1vyuo_1 ._tooltiptext_1vyuo_115{font-size:8px;top:-12px}}h1{margin:0 0 24px;font-size:2.6em;line-height:1.1}@media (max-width: 680px){h1{margin-bottom:18px;font-size:2em;line-height:1.1}}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var yN = Object.defineProperty;
var gN = (l, f, d) => f in l ? yN(l, f, { enumerable: !0, configurable: !0, writable: !0, value: d }) : l[f] = d;
var R0 = (l, f, d) => (gN(l, typeof f != "symbol" ? f + "" : f, d), d);
function SN(l, f) {
  for (var d = 0; d < f.length; d++) {
    const m = f[d];
    if (typeof m != "string" && !Array.isArray(m)) {
      for (const C in m)
        if (C !== "default" && !(C in l)) {
          const R = Object.getOwnPropertyDescriptor(m, C);
          R && Object.defineProperty(l, C, R.get ? R : {
            enumerable: !0,
            get: () => m[C]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }));
}
function EN(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var F0 = { exports: {} }, bv = {}, by = { exports: {} }, kt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ib;
function CN() {
  if (Ib)
    return kt;
  Ib = 1;
  var l = Symbol.for("react.element"), f = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), y = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), O = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), x = Symbol.iterator;
  function P(A) {
    return A === null || typeof A != "object" ? null : (A = x && A[x] || A["@@iterator"], typeof A == "function" ? A : null);
  }
  var Q = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, I = Object.assign, X = {};
  function ne(A, re, be) {
    this.props = A, this.context = re, this.refs = X, this.updater = be || Q;
  }
  ne.prototype.isReactComponent = {}, ne.prototype.setState = function(A, re) {
    if (typeof A != "object" && typeof A != "function" && A != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, A, re, "setState");
  }, ne.prototype.forceUpdate = function(A) {
    this.updater.enqueueForceUpdate(this, A, "forceUpdate");
  };
  function we() {
  }
  we.prototype = ne.prototype;
  function he(A, re, be) {
    this.props = A, this.context = re, this.refs = X, this.updater = be || Q;
  }
  var ie = he.prototype = new we();
  ie.constructor = he, I(ie, ne.prototype), ie.isPureReactComponent = !0;
  var me = Array.isArray, fe = Object.prototype.hasOwnProperty, Re = { current: null }, _e = { key: !0, ref: !0, __self: !0, __source: !0 };
  function He(A, re, be) {
    var rt, Ze = {}, Tt = null, dt = null;
    if (re != null)
      for (rt in re.ref !== void 0 && (dt = re.ref), re.key !== void 0 && (Tt = "" + re.key), re)
        fe.call(re, rt) && !_e.hasOwnProperty(rt) && (Ze[rt] = re[rt]);
    var Et = arguments.length - 2;
    if (Et === 1)
      Ze.children = be;
    else if (1 < Et) {
      for (var pt = Array(Et), $t = 0; $t < Et; $t++)
        pt[$t] = arguments[$t + 2];
      Ze.children = pt;
    }
    if (A && A.defaultProps)
      for (rt in Et = A.defaultProps, Et)
        Ze[rt] === void 0 && (Ze[rt] = Et[rt]);
    return { $$typeof: l, type: A, key: Tt, ref: dt, props: Ze, _owner: Re.current };
  }
  function bt(A, re) {
    return { $$typeof: l, type: A.type, key: re, ref: A.ref, props: A.props, _owner: A._owner };
  }
  function Nt(A) {
    return typeof A == "object" && A !== null && A.$$typeof === l;
  }
  function ht(A) {
    var re = { "=": "=0", ":": "=2" };
    return "$" + A.replace(/[=:]/g, function(be) {
      return re[be];
    });
  }
  var on = /\/+/g;
  function Ie(A, re) {
    return typeof A == "object" && A !== null && A.key != null ? ht("" + A.key) : re.toString(36);
  }
  function ot(A, re, be, rt, Ze) {
    var Tt = typeof A;
    (Tt === "undefined" || Tt === "boolean") && (A = null);
    var dt = !1;
    if (A === null)
      dt = !0;
    else
      switch (Tt) {
        case "string":
        case "number":
          dt = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case l:
            case f:
              dt = !0;
          }
      }
    if (dt)
      return dt = A, Ze = Ze(dt), A = rt === "" ? "." + Ie(dt, 0) : rt, me(Ze) ? (be = "", A != null && (be = A.replace(on, "$&/") + "/"), ot(Ze, re, be, "", function($t) {
        return $t;
      })) : Ze != null && (Nt(Ze) && (Ze = bt(Ze, be + (!Ze.key || dt && dt.key === Ze.key ? "" : ("" + Ze.key).replace(on, "$&/") + "/") + A)), re.push(Ze)), 1;
    if (dt = 0, rt = rt === "" ? "." : rt + ":", me(A))
      for (var Et = 0; Et < A.length; Et++) {
        Tt = A[Et];
        var pt = rt + Ie(Tt, Et);
        dt += ot(Tt, re, be, pt, Ze);
      }
    else if (pt = P(A), typeof pt == "function")
      for (A = pt.call(A), Et = 0; !(Tt = A.next()).done; )
        Tt = Tt.value, pt = rt + Ie(Tt, Et++), dt += ot(Tt, re, be, pt, Ze);
    else if (Tt === "object")
      throw re = String(A), Error("Objects are not valid as a React child (found: " + (re === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : re) + "). If you meant to render a collection of children, use an array instead.");
    return dt;
  }
  function Mt(A, re, be) {
    if (A == null)
      return A;
    var rt = [], Ze = 0;
    return ot(A, rt, "", "", function(Tt) {
      return re.call(be, Tt, Ze++);
    }), rt;
  }
  function St(A) {
    if (A._status === -1) {
      var re = A._result;
      re = re(), re.then(function(be) {
        (A._status === 0 || A._status === -1) && (A._status = 1, A._result = be);
      }, function(be) {
        (A._status === 0 || A._status === -1) && (A._status = 2, A._result = be);
      }), A._status === -1 && (A._status = 0, A._result = re);
    }
    if (A._status === 1)
      return A._result.default;
    throw A._result;
  }
  var Le = { current: null }, ve = { transition: null }, Ve = { ReactCurrentDispatcher: Le, ReactCurrentBatchConfig: ve, ReactCurrentOwner: Re };
  return kt.Children = { map: Mt, forEach: function(A, re, be) {
    Mt(A, function() {
      re.apply(this, arguments);
    }, be);
  }, count: function(A) {
    var re = 0;
    return Mt(A, function() {
      re++;
    }), re;
  }, toArray: function(A) {
    return Mt(A, function(re) {
      return re;
    }) || [];
  }, only: function(A) {
    if (!Nt(A))
      throw Error("React.Children.only expected to receive a single React element child.");
    return A;
  } }, kt.Component = ne, kt.Fragment = d, kt.Profiler = C, kt.PureComponent = he, kt.StrictMode = m, kt.Suspense = M, kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ve, kt.cloneElement = function(A, re, be) {
    if (A == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + A + ".");
    var rt = I({}, A.props), Ze = A.key, Tt = A.ref, dt = A._owner;
    if (re != null) {
      if (re.ref !== void 0 && (Tt = re.ref, dt = Re.current), re.key !== void 0 && (Ze = "" + re.key), A.type && A.type.defaultProps)
        var Et = A.type.defaultProps;
      for (pt in re)
        fe.call(re, pt) && !_e.hasOwnProperty(pt) && (rt[pt] = re[pt] === void 0 && Et !== void 0 ? Et[pt] : re[pt]);
    }
    var pt = arguments.length - 2;
    if (pt === 1)
      rt.children = be;
    else if (1 < pt) {
      Et = Array(pt);
      for (var $t = 0; $t < pt; $t++)
        Et[$t] = arguments[$t + 2];
      rt.children = Et;
    }
    return { $$typeof: l, type: A.type, key: Ze, ref: Tt, props: rt, _owner: dt };
  }, kt.createContext = function(A) {
    return A = { $$typeof: y, _currentValue: A, _currentValue2: A, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, A.Provider = { $$typeof: R, _context: A }, A.Consumer = A;
  }, kt.createElement = He, kt.createFactory = function(A) {
    var re = He.bind(null, A);
    return re.type = A, re;
  }, kt.createRef = function() {
    return { current: null };
  }, kt.forwardRef = function(A) {
    return { $$typeof: D, render: A };
  }, kt.isValidElement = Nt, kt.lazy = function(A) {
    return { $$typeof: L, _payload: { _status: -1, _result: A }, _init: St };
  }, kt.memo = function(A, re) {
    return { $$typeof: O, type: A, compare: re === void 0 ? null : re };
  }, kt.startTransition = function(A) {
    var re = ve.transition;
    ve.transition = {};
    try {
      A();
    } finally {
      ve.transition = re;
    }
  }, kt.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, kt.useCallback = function(A, re) {
    return Le.current.useCallback(A, re);
  }, kt.useContext = function(A) {
    return Le.current.useContext(A);
  }, kt.useDebugValue = function() {
  }, kt.useDeferredValue = function(A) {
    return Le.current.useDeferredValue(A);
  }, kt.useEffect = function(A, re) {
    return Le.current.useEffect(A, re);
  }, kt.useId = function() {
    return Le.current.useId();
  }, kt.useImperativeHandle = function(A, re, be) {
    return Le.current.useImperativeHandle(A, re, be);
  }, kt.useInsertionEffect = function(A, re) {
    return Le.current.useInsertionEffect(A, re);
  }, kt.useLayoutEffect = function(A, re) {
    return Le.current.useLayoutEffect(A, re);
  }, kt.useMemo = function(A, re) {
    return Le.current.useMemo(A, re);
  }, kt.useReducer = function(A, re, be) {
    return Le.current.useReducer(A, re, be);
  }, kt.useRef = function(A) {
    return Le.current.useRef(A);
  }, kt.useState = function(A) {
    return Le.current.useState(A);
  }, kt.useSyncExternalStore = function(A, re, be) {
    return Le.current.useSyncExternalStore(A, re, be);
  }, kt.useTransition = function() {
    return Le.current.useTransition();
  }, kt.version = "18.2.0", kt;
}
var Ov = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Ov.exports;
var Yb;
function wN() {
  return Yb || (Yb = 1, function(l, f) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var d = "18.2.0", m = Symbol.for("react.element"), C = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), M = Symbol.for("react.provider"), O = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), X = Symbol.for("react.offscreen"), ne = Symbol.iterator, we = "@@iterator";
      function he(E) {
        if (E === null || typeof E != "object")
          return null;
        var k = ne && E[ne] || E[we];
        return typeof k == "function" ? k : null;
      }
      var ie = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, me = {
        transition: null
      }, fe = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Re = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, _e = {}, He = null;
      function bt(E) {
        He = E;
      }
      _e.setExtraStackFrame = function(E) {
        He = E;
      }, _e.getCurrentStack = null, _e.getStackAddendum = function() {
        var E = "";
        He && (E += He);
        var k = _e.getCurrentStack;
        return k && (E += k() || ""), E;
      };
      var Nt = !1, ht = !1, on = !1, Ie = !1, ot = !1, Mt = {
        ReactCurrentDispatcher: ie,
        ReactCurrentBatchConfig: me,
        ReactCurrentOwner: Re
      };
      Mt.ReactDebugCurrentFrame = _e, Mt.ReactCurrentActQueue = fe;
      function St(E) {
        {
          for (var k = arguments.length, W = new Array(k > 1 ? k - 1 : 0), K = 1; K < k; K++)
            W[K - 1] = arguments[K];
          ve("warn", E, W);
        }
      }
      function Le(E) {
        {
          for (var k = arguments.length, W = new Array(k > 1 ? k - 1 : 0), K = 1; K < k; K++)
            W[K - 1] = arguments[K];
          ve("error", E, W);
        }
      }
      function ve(E, k, W) {
        {
          var K = Mt.ReactDebugCurrentFrame, de = K.getStackAddendum();
          de !== "" && (k += "%s", W = W.concat([de]));
          var Ke = W.map(function(Ce) {
            return String(Ce);
          });
          Ke.unshift("Warning: " + k), Function.prototype.apply.call(console[E], console, Ke);
        }
      }
      var Ve = {};
      function A(E, k) {
        {
          var W = E.constructor, K = W && (W.displayName || W.name) || "ReactClass", de = K + "." + k;
          if (Ve[de])
            return;
          Le("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", k, K), Ve[de] = !0;
        }
      }
      var re = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(E) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(E, k, W) {
          A(E, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(E, k, W, K) {
          A(E, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(E, k, W, K) {
          A(E, "setState");
        }
      }, be = Object.assign, rt = {};
      Object.freeze(rt);
      function Ze(E, k, W) {
        this.props = E, this.context = k, this.refs = rt, this.updater = W || re;
      }
      Ze.prototype.isReactComponent = {}, Ze.prototype.setState = function(E, k) {
        if (typeof E != "object" && typeof E != "function" && E != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, E, k, "setState");
      }, Ze.prototype.forceUpdate = function(E) {
        this.updater.enqueueForceUpdate(this, E, "forceUpdate");
      };
      {
        var Tt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, dt = function(E, k) {
          Object.defineProperty(Ze.prototype, E, {
            get: function() {
              St("%s(...) is deprecated in plain JavaScript React classes. %s", k[0], k[1]);
            }
          });
        };
        for (var Et in Tt)
          Tt.hasOwnProperty(Et) && dt(Et, Tt[Et]);
      }
      function pt() {
      }
      pt.prototype = Ze.prototype;
      function $t(E, k, W) {
        this.props = E, this.context = k, this.refs = rt, this.updater = W || re;
      }
      var Wr = $t.prototype = new pt();
      Wr.constructor = $t, be(Wr, Ze.prototype), Wr.isPureReactComponent = !0;
      function gr() {
        var E = {
          current: null
        };
        return Object.seal(E), E;
      }
      var qr = Array.isArray;
      function gn(E) {
        return qr(E);
      }
      function Gn(E) {
        {
          var k = typeof Symbol == "function" && Symbol.toStringTag, W = k && E[Symbol.toStringTag] || E.constructor.name || "Object";
          return W;
        }
      }
      function Vn(E) {
        try {
          return Bn(E), !1;
        } catch {
          return !0;
        }
      }
      function Bn(E) {
        return "" + E;
      }
      function kn(E) {
        if (Vn(E))
          return Le("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Gn(E)), Bn(E);
      }
      function Qr(E, k, W) {
        var K = E.displayName;
        if (K)
          return K;
        var de = k.displayName || k.name || "";
        return de !== "" ? W + "(" + de + ")" : W;
      }
      function Gr(E) {
        return E.displayName || "Context";
      }
      function Kn(E) {
        if (E == null)
          return null;
        if (typeof E.tag == "number" && Le("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
          return E.displayName || E.name || null;
        if (typeof E == "string")
          return E;
        switch (E) {
          case R:
            return "Fragment";
          case C:
            return "Portal";
          case D:
            return "Profiler";
          case y:
            return "StrictMode";
          case x:
            return "Suspense";
          case P:
            return "SuspenseList";
        }
        if (typeof E == "object")
          switch (E.$$typeof) {
            case O:
              var k = E;
              return Gr(k) + ".Consumer";
            case M:
              var W = E;
              return Gr(W._context) + ".Provider";
            case L:
              return Qr(E, E.render, "ForwardRef");
            case Q:
              var K = E.displayName || null;
              return K !== null ? K : Kn(E.type) || "Memo";
            case I: {
              var de = E, Ke = de._payload, Ce = de._init;
              try {
                return Kn(Ce(Ke));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Sr = Object.prototype.hasOwnProperty, Kr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Er, ha, ir;
      ir = {};
      function Xr(E) {
        if (Sr.call(E, "ref")) {
          var k = Object.getOwnPropertyDescriptor(E, "ref").get;
          if (k && k.isReactWarning)
            return !1;
        }
        return E.ref !== void 0;
      }
      function Sn(E) {
        if (Sr.call(E, "key")) {
          var k = Object.getOwnPropertyDescriptor(E, "key").get;
          if (k && k.isReactWarning)
            return !1;
        }
        return E.key !== void 0;
      }
      function Or(E, k) {
        var W = function() {
          Er || (Er = !0, Le("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        W.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: W,
          configurable: !0
        });
      }
      function mi(E, k) {
        var W = function() {
          ha || (ha = !0, Le("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        W.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: W,
          configurable: !0
        });
      }
      function ma(E) {
        if (typeof E.ref == "string" && Re.current && E.__self && Re.current.stateNode !== E.__self) {
          var k = Kn(Re.current.type);
          ir[k] || (Le('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k, E.ref), ir[k] = !0);
        }
      }
      var ye = function(E, k, W, K, de, Ke, Ce) {
        var Qe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: m,
          // Built-in properties that belong on the element
          type: E,
          key: k,
          ref: W,
          props: Ce,
          // Record the component responsible for creating this element.
          _owner: Ke
        };
        return Qe._store = {}, Object.defineProperty(Qe._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Qe, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: K
        }), Object.defineProperty(Qe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: de
        }), Object.freeze && (Object.freeze(Qe.props), Object.freeze(Qe)), Qe;
      };
      function Be(E, k, W) {
        var K, de = {}, Ke = null, Ce = null, Qe = null, yt = null;
        if (k != null) {
          Xr(k) && (Ce = k.ref, ma(k)), Sn(k) && (kn(k.key), Ke = "" + k.key), Qe = k.__self === void 0 ? null : k.__self, yt = k.__source === void 0 ? null : k.__source;
          for (K in k)
            Sr.call(k, K) && !Kr.hasOwnProperty(K) && (de[K] = k[K]);
        }
        var zt = arguments.length - 2;
        if (zt === 1)
          de.children = W;
        else if (zt > 1) {
          for (var tn = Array(zt), Xt = 0; Xt < zt; Xt++)
            tn[Xt] = arguments[Xt + 2];
          Object.freeze && Object.freeze(tn), de.children = tn;
        }
        if (E && E.defaultProps) {
          var nn = E.defaultProps;
          for (K in nn)
            de[K] === void 0 && (de[K] = nn[K]);
        }
        if (Ke || Ce) {
          var sn = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          Ke && Or(de, sn), Ce && mi(de, sn);
        }
        return ye(E, Ke, Ce, Qe, yt, Re.current, de);
      }
      function vt(E, k) {
        var W = ye(E.type, k, E.ref, E._self, E._source, E._owner, E.props);
        return W;
      }
      function Vt(E, k, W) {
        if (E == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + E + ".");
        var K, de = be({}, E.props), Ke = E.key, Ce = E.ref, Qe = E._self, yt = E._source, zt = E._owner;
        if (k != null) {
          Xr(k) && (Ce = k.ref, zt = Re.current), Sn(k) && (kn(k.key), Ke = "" + k.key);
          var tn;
          E.type && E.type.defaultProps && (tn = E.type.defaultProps);
          for (K in k)
            Sr.call(k, K) && !Kr.hasOwnProperty(K) && (k[K] === void 0 && tn !== void 0 ? de[K] = tn[K] : de[K] = k[K]);
        }
        var Xt = arguments.length - 2;
        if (Xt === 1)
          de.children = W;
        else if (Xt > 1) {
          for (var nn = Array(Xt), sn = 0; sn < Xt; sn++)
            nn[sn] = arguments[sn + 2];
          de.children = nn;
        }
        return ye(E.type, Ke, Ce, Qe, yt, zt, de);
      }
      function It(E) {
        return typeof E == "object" && E !== null && E.$$typeof === m;
      }
      var Nn = ".", En = ":";
      function Cr(E) {
        var k = /[=:]/g, W = {
          "=": "=0",
          ":": "=2"
        }, K = E.replace(k, function(de) {
          return W[de];
        });
        return "$" + K;
      }
      var Kt = !1, kr = /\/+/g;
      function Yt(E) {
        return E.replace(kr, "$&/");
      }
      function Wt(E, k) {
        return typeof E == "object" && E !== null && E.key != null ? (kn(E.key), Cr("" + E.key)) : k.toString(36);
      }
      function ei(E, k, W, K, de) {
        var Ke = typeof E;
        (Ke === "undefined" || Ke === "boolean") && (E = null);
        var Ce = !1;
        if (E === null)
          Ce = !0;
        else
          switch (Ke) {
            case "string":
            case "number":
              Ce = !0;
              break;
            case "object":
              switch (E.$$typeof) {
                case m:
                case C:
                  Ce = !0;
              }
          }
        if (Ce) {
          var Qe = E, yt = de(Qe), zt = K === "" ? Nn + Wt(Qe, 0) : K;
          if (gn(yt)) {
            var tn = "";
            zt != null && (tn = Yt(zt) + "/"), ei(yt, k, tn, "", function(gd) {
              return gd;
            });
          } else
            yt != null && (It(yt) && (yt.key && (!Qe || Qe.key !== yt.key) && kn(yt.key), yt = vt(
              yt,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              W + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (yt.key && (!Qe || Qe.key !== yt.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Yt("" + yt.key) + "/"
              ) : "") + zt
            )), k.push(yt));
          return 1;
        }
        var Xt, nn, sn = 0, Rt = K === "" ? Nn : K + En;
        if (gn(E))
          for (var Bi = 0; Bi < E.length; Bi++)
            Xt = E[Bi], nn = Rt + Wt(Xt, Bi), sn += ei(Xt, k, W, nn, de);
        else {
          var vl = he(E);
          if (typeof vl == "function") {
            var ys = E;
            vl === ys.entries && (Kt || St("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Kt = !0);
            for (var yd = vl.call(ys), ai, gs = 0; !(ai = yd.next()).done; )
              Xt = ai.value, nn = Rt + Wt(Xt, gs++), sn += ei(Xt, k, W, nn, de);
          } else if (Ke === "object") {
            var Ss = String(E);
            throw new Error("Objects are not valid as a React child (found: " + (Ss === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : Ss) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return sn;
      }
      function Na(E, k, W) {
        if (E == null)
          return E;
        var K = [], de = 0;
        return ei(E, K, "", "", function(Ke) {
          return k.call(W, Ke, de++);
        }), K;
      }
      function yo(E) {
        var k = 0;
        return Na(E, function() {
          k++;
        }), k;
      }
      function su(E, k, W) {
        Na(E, function() {
          k.apply(this, arguments);
        }, W);
      }
      function nl(E) {
        return Na(E, function(k) {
          return k;
        }) || [];
      }
      function Pi(E) {
        if (!It(E))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return E;
      }
      function go(E) {
        var k = {
          $$typeof: O,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: E,
          _currentValue2: E,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        k.Provider = {
          $$typeof: M,
          _context: k
        };
        var W = !1, K = !1, de = !1;
        {
          var Ke = {
            $$typeof: O,
            _context: k
          };
          Object.defineProperties(Ke, {
            Provider: {
              get: function() {
                return K || (K = !0, Le("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), k.Provider;
              },
              set: function(Ce) {
                k.Provider = Ce;
              }
            },
            _currentValue: {
              get: function() {
                return k._currentValue;
              },
              set: function(Ce) {
                k._currentValue = Ce;
              }
            },
            _currentValue2: {
              get: function() {
                return k._currentValue2;
              },
              set: function(Ce) {
                k._currentValue2 = Ce;
              }
            },
            _threadCount: {
              get: function() {
                return k._threadCount;
              },
              set: function(Ce) {
                k._threadCount = Ce;
              }
            },
            Consumer: {
              get: function() {
                return W || (W = !0, Le("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), k.Consumer;
              }
            },
            displayName: {
              get: function() {
                return k.displayName;
              },
              set: function(Ce) {
                de || (St("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Ce), de = !0);
              }
            }
          }), k.Consumer = Ke;
        }
        return k._currentRenderer = null, k._currentRenderer2 = null, k;
      }
      var ya = -1, yi = 0, ga = 1, gi = 2;
      function Nr(E) {
        if (E._status === ya) {
          var k = E._result, W = k();
          if (W.then(function(Ke) {
            if (E._status === yi || E._status === ya) {
              var Ce = E;
              Ce._status = ga, Ce._result = Ke;
            }
          }, function(Ke) {
            if (E._status === yi || E._status === ya) {
              var Ce = E;
              Ce._status = gi, Ce._result = Ke;
            }
          }), E._status === ya) {
            var K = E;
            K._status = yi, K._result = W;
          }
        }
        if (E._status === ga) {
          var de = E._result;
          return de === void 0 && Le(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, de), "default" in de || Le(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, de), de.default;
        } else
          throw E._result;
      }
      function Sa(E) {
        var k = {
          // We use these fields to store the result.
          _status: ya,
          _result: E
        }, W = {
          $$typeof: I,
          _payload: k,
          _init: Nr
        };
        {
          var K, de;
          Object.defineProperties(W, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return K;
              },
              set: function(Ke) {
                Le("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), K = Ke, Object.defineProperty(W, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return de;
              },
              set: function(Ke) {
                Le("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), de = Ke, Object.defineProperty(W, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return W;
      }
      function Si(E) {
        E != null && E.$$typeof === Q ? Le("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof E != "function" ? Le("forwardRef requires a render function but was given %s.", E === null ? "null" : typeof E) : E.length !== 0 && E.length !== 2 && Le("forwardRef render functions accept exactly two parameters: props and ref. %s", E.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), E != null && (E.defaultProps != null || E.propTypes != null) && Le("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var k = {
          $$typeof: L,
          render: E
        };
        {
          var W;
          Object.defineProperty(k, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return W;
            },
            set: function(K) {
              W = K, !E.name && !E.displayName && (E.displayName = K);
            }
          });
        }
        return k;
      }
      var N;
      N = Symbol.for("react.module.reference");
      function oe(E) {
        return !!(typeof E == "string" || typeof E == "function" || E === R || E === D || ot || E === y || E === x || E === P || Ie || E === X || Nt || ht || on || typeof E == "object" && E !== null && (E.$$typeof === I || E.$$typeof === Q || E.$$typeof === M || E.$$typeof === O || E.$$typeof === L || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        E.$$typeof === N || E.getModuleId !== void 0));
      }
      function ge(E, k) {
        oe(E) || Le("memo: The first argument must be a component. Instead received: %s", E === null ? "null" : typeof E);
        var W = {
          $$typeof: Q,
          type: E,
          compare: k === void 0 ? null : k
        };
        {
          var K;
          Object.defineProperty(W, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return K;
            },
            set: function(de) {
              K = de, !E.name && !E.displayName && (E.displayName = de);
            }
          });
        }
        return W;
      }
      function Oe() {
        var E = ie.current;
        return E === null && Le(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), E;
      }
      function lt(E) {
        var k = Oe();
        if (E._context !== void 0) {
          var W = E._context;
          W.Consumer === E ? Le("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : W.Provider === E && Le("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return k.useContext(E);
      }
      function _t(E) {
        var k = Oe();
        return k.useState(E);
      }
      function st(E, k, W) {
        var K = Oe();
        return K.useReducer(E, k, W);
      }
      function We(E) {
        var k = Oe();
        return k.useRef(E);
      }
      function Un(E, k) {
        var W = Oe();
        return W.useEffect(E, k);
      }
      function un(E, k) {
        var W = Oe();
        return W.useInsertionEffect(E, k);
      }
      function ln(E, k) {
        var W = Oe();
        return W.useLayoutEffect(E, k);
      }
      function or(E, k) {
        var W = Oe();
        return W.useCallback(E, k);
      }
      function Ei(E, k) {
        var W = Oe();
        return W.useMemo(E, k);
      }
      function rl(E, k, W) {
        var K = Oe();
        return K.useImperativeHandle(E, k, W);
      }
      function Lt(E, k) {
        {
          var W = Oe();
          return W.useDebugValue(E, k);
        }
      }
      function hd() {
        var E = Oe();
        return E.useTransition();
      }
      function ti(E) {
        var k = Oe();
        return k.useDeferredValue(E);
      }
      function mt() {
        var E = Oe();
        return E.useId();
      }
      function Ci(E, k, W) {
        var K = Oe();
        return K.useSyncExternalStore(E, k, W);
      }
      var So = 0, al, Eo, Jr, ps, Mr, vs, hs;
      function wc() {
      }
      wc.__reactDisabledLog = !0;
      function il() {
        {
          if (So === 0) {
            al = console.log, Eo = console.info, Jr = console.warn, ps = console.error, Mr = console.group, vs = console.groupCollapsed, hs = console.groupEnd;
            var E = {
              configurable: !0,
              enumerable: !0,
              value: wc,
              writable: !0
            };
            Object.defineProperties(console, {
              info: E,
              log: E,
              warn: E,
              error: E,
              group: E,
              groupCollapsed: E,
              groupEnd: E
            });
          }
          So++;
        }
      }
      function Co() {
        {
          if (So--, So === 0) {
            var E = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: be({}, E, {
                value: al
              }),
              info: be({}, E, {
                value: Eo
              }),
              warn: be({}, E, {
                value: Jr
              }),
              error: be({}, E, {
                value: ps
              }),
              group: be({}, E, {
                value: Mr
              }),
              groupCollapsed: be({}, E, {
                value: vs
              }),
              groupEnd: be({}, E, {
                value: hs
              })
            });
          }
          So < 0 && Le("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ni = Mt.ReactCurrentDispatcher, Lr;
      function wo(E, k, W) {
        {
          if (Lr === void 0)
            try {
              throw Error();
            } catch (de) {
              var K = de.stack.trim().match(/\n( *(at )?)/);
              Lr = K && K[1] || "";
            }
          return `
` + Lr + E;
        }
      }
      var Ro = !1, bo;
      {
        var ol = typeof WeakMap == "function" ? WeakMap : Map;
        bo = new ol();
      }
      function ul(E, k) {
        if (!E || Ro)
          return "";
        {
          var W = bo.get(E);
          if (W !== void 0)
            return W;
        }
        var K;
        Ro = !0;
        var de = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ke;
        Ke = ni.current, ni.current = null, il();
        try {
          if (k) {
            var Ce = function() {
              throw Error();
            };
            if (Object.defineProperty(Ce.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Ce, []);
              } catch (Rt) {
                K = Rt;
              }
              Reflect.construct(E, [], Ce);
            } else {
              try {
                Ce.call();
              } catch (Rt) {
                K = Rt;
              }
              E.call(Ce.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Rt) {
              K = Rt;
            }
            E();
          }
        } catch (Rt) {
          if (Rt && K && typeof Rt.stack == "string") {
            for (var Qe = Rt.stack.split(`
`), yt = K.stack.split(`
`), zt = Qe.length - 1, tn = yt.length - 1; zt >= 1 && tn >= 0 && Qe[zt] !== yt[tn]; )
              tn--;
            for (; zt >= 1 && tn >= 0; zt--, tn--)
              if (Qe[zt] !== yt[tn]) {
                if (zt !== 1 || tn !== 1)
                  do
                    if (zt--, tn--, tn < 0 || Qe[zt] !== yt[tn]) {
                      var Xt = `
` + Qe[zt].replace(" at new ", " at ");
                      return E.displayName && Xt.includes("<anonymous>") && (Xt = Xt.replace("<anonymous>", E.displayName)), typeof E == "function" && bo.set(E, Xt), Xt;
                    }
                  while (zt >= 1 && tn >= 0);
                break;
              }
          }
        } finally {
          Ro = !1, ni.current = Ke, Co(), Error.prepareStackTrace = de;
        }
        var nn = E ? E.displayName || E.name : "", sn = nn ? wo(nn) : "";
        return typeof E == "function" && bo.set(E, sn), sn;
      }
      function Hi(E, k, W) {
        return ul(E, !1);
      }
      function md(E) {
        var k = E.prototype;
        return !!(k && k.isReactComponent);
      }
      function wi(E, k, W) {
        if (E == null)
          return "";
        if (typeof E == "function")
          return ul(E, md(E));
        if (typeof E == "string")
          return wo(E);
        switch (E) {
          case x:
            return wo("Suspense");
          case P:
            return wo("SuspenseList");
        }
        if (typeof E == "object")
          switch (E.$$typeof) {
            case L:
              return Hi(E.render);
            case Q:
              return wi(E.type, k, W);
            case I: {
              var K = E, de = K._payload, Ke = K._init;
              try {
                return wi(Ke(de), k, W);
              } catch {
              }
            }
          }
        return "";
      }
      var jt = {}, ll = Mt.ReactDebugCurrentFrame;
      function cu(E) {
        if (E) {
          var k = E._owner, W = wi(E.type, E._source, k ? k.type : null);
          ll.setExtraStackFrame(W);
        } else
          ll.setExtraStackFrame(null);
      }
      function sl(E, k, W, K, de) {
        {
          var Ke = Function.call.bind(Sr);
          for (var Ce in E)
            if (Ke(E, Ce)) {
              var Qe = void 0;
              try {
                if (typeof E[Ce] != "function") {
                  var yt = Error((K || "React class") + ": " + W + " type `" + Ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[Ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw yt.name = "Invariant Violation", yt;
                }
                Qe = E[Ce](k, Ce, K, W, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (zt) {
                Qe = zt;
              }
              Qe && !(Qe instanceof Error) && (cu(de), Le("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", K || "React class", W, Ce, typeof Qe), cu(null)), Qe instanceof Error && !(Qe.message in jt) && (jt[Qe.message] = !0, cu(de), Le("Failed %s type: %s", W, Qe.message), cu(null));
            }
        }
      }
      function At(E) {
        if (E) {
          var k = E._owner, W = wi(E.type, E._source, k ? k.type : null);
          bt(W);
        } else
          bt(null);
      }
      var cl;
      cl = !1;
      function fl() {
        if (Re.current) {
          var E = Kn(Re.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
      function at(E) {
        if (E !== void 0) {
          var k = E.fileName.replace(/^.*[\\\/]/, ""), W = E.lineNumber;
          return `

Check your code at ` + k + ":" + W + ".";
        }
        return "";
      }
      function fu(E) {
        return E != null ? at(E.__source) : "";
      }
      var Cn = {};
      function Zr(E) {
        var k = fl();
        if (!k) {
          var W = typeof E == "string" ? E : E.displayName || E.name;
          W && (k = `

Check the top-level render call using <` + W + ">.");
        }
        return k;
      }
      function Ar(E, k) {
        if (!(!E._store || E._store.validated || E.key != null)) {
          E._store.validated = !0;
          var W = Zr(k);
          if (!Cn[W]) {
            Cn[W] = !0;
            var K = "";
            E && E._owner && E._owner !== Re.current && (K = " It was passed a child from " + Kn(E._owner.type) + "."), At(E), Le('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', W, K), At(null);
          }
        }
      }
      function To(E, k) {
        if (typeof E == "object") {
          if (gn(E))
            for (var W = 0; W < E.length; W++) {
              var K = E[W];
              It(K) && Ar(K, k);
            }
          else if (It(E))
            E._store && (E._store.validated = !0);
          else if (E) {
            var de = he(E);
            if (typeof de == "function" && de !== E.entries)
              for (var Ke = de.call(E), Ce; !(Ce = Ke.next()).done; )
                It(Ce.value) && Ar(Ce.value, k);
          }
        }
      }
      function _n(E) {
        {
          var k = E.type;
          if (k == null || typeof k == "string")
            return;
          var W;
          if (typeof k == "function")
            W = k.propTypes;
          else if (typeof k == "object" && (k.$$typeof === L || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          k.$$typeof === Q))
            W = k.propTypes;
          else
            return;
          if (W) {
            var K = Kn(k);
            sl(W, E.props, "prop", K, E);
          } else if (k.PropTypes !== void 0 && !cl) {
            cl = !0;
            var de = Kn(k);
            Le("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", de || "Unknown");
          }
          typeof k.getDefaultProps == "function" && !k.getDefaultProps.isReactClassApproved && Le("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function qt(E) {
        {
          for (var k = Object.keys(E.props), W = 0; W < k.length; W++) {
            var K = k[W];
            if (K !== "children" && K !== "key") {
              At(E), Le("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", K), At(null);
              break;
            }
          }
          E.ref !== null && (At(E), Le("Invalid attribute `ref` supplied to `React.Fragment`."), At(null));
        }
      }
      function Rc(E, k, W) {
        var K = oe(E);
        if (!K) {
          var de = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (de += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ke = fu(k);
          Ke ? de += Ke : de += fl();
          var Ce;
          E === null ? Ce = "null" : gn(E) ? Ce = "array" : E !== void 0 && E.$$typeof === m ? (Ce = "<" + (Kn(E.type) || "Unknown") + " />", de = " Did you accidentally export a JSX literal instead of a component?") : Ce = typeof E, Le("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ce, de);
        }
        var Qe = Be.apply(this, arguments);
        if (Qe == null)
          return Qe;
        if (K)
          for (var yt = 2; yt < arguments.length; yt++)
            To(arguments[yt], E);
        return E === R ? qt(Qe) : _n(Qe), Qe;
      }
      var ea = !1;
      function Xn(E) {
        var k = Rc.bind(null, E);
        return k.type = E, ea || (ea = !0, St("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(k, "type", {
          enumerable: !1,
          get: function() {
            return St("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: E
            }), E;
          }
        }), k;
      }
      function Ri(E, k, W) {
        for (var K = Vt.apply(this, arguments), de = 2; de < arguments.length; de++)
          To(arguments[de], K.type);
        return _n(K), K;
      }
      function bc(E, k) {
        var W = me.transition;
        me.transition = {};
        var K = me.transition;
        me.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          E();
        } finally {
          if (me.transition = W, W === null && K._updatedFibers) {
            var de = K._updatedFibers.size;
            de > 10 && St("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), K._updatedFibers.clear();
          }
        }
      }
      var Vi = !1, _o = null;
      function Tc(E) {
        if (_o === null)
          try {
            var k = ("require" + Math.random()).slice(0, 7), W = l && l[k];
            _o = W.call(l, "timers").setImmediate;
          } catch {
            _o = function(de) {
              Vi === !1 && (Vi = !0, typeof MessageChannel > "u" && Le("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ke = new MessageChannel();
              Ke.port1.onmessage = de, Ke.port2.postMessage(void 0);
            };
          }
        return _o(E);
      }
      var Ma = 0, xo = !1;
      function Do(E) {
        {
          var k = Ma;
          Ma++, fe.current === null && (fe.current = []);
          var W = fe.isBatchingLegacy, K;
          try {
            if (fe.isBatchingLegacy = !0, K = E(), !W && fe.didScheduleLegacyUpdate) {
              var de = fe.current;
              de !== null && (fe.didScheduleLegacyUpdate = !1, ko(de));
            }
          } catch (nn) {
            throw La(k), nn;
          } finally {
            fe.isBatchingLegacy = W;
          }
          if (K !== null && typeof K == "object" && typeof K.then == "function") {
            var Ke = K, Ce = !1, Qe = {
              then: function(nn, sn) {
                Ce = !0, Ke.then(function(Rt) {
                  La(k), Ma === 0 ? dl(Rt, nn, sn) : nn(Rt);
                }, function(Rt) {
                  La(k), sn(Rt);
                });
              }
            };
            return !xo && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Ce || (xo = !0, Le("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Qe;
          } else {
            var yt = K;
            if (La(k), Ma === 0) {
              var zt = fe.current;
              zt !== null && (ko(zt), fe.current = null);
              var tn = {
                then: function(nn, sn) {
                  fe.current === null ? (fe.current = [], dl(yt, nn, sn)) : nn(yt);
                }
              };
              return tn;
            } else {
              var Xt = {
                then: function(nn, sn) {
                  nn(yt);
                }
              };
              return Xt;
            }
          }
        }
      }
      function La(E) {
        E !== Ma - 1 && Le("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ma = E;
      }
      function dl(E, k, W) {
        {
          var K = fe.current;
          if (K !== null)
            try {
              ko(K), Tc(function() {
                K.length === 0 ? (fe.current = null, k(E)) : dl(E, k, W);
              });
            } catch (de) {
              W(de);
            }
          else
            k(E);
        }
      }
      var Oo = !1;
      function ko(E) {
        if (!Oo) {
          Oo = !0;
          var k = 0;
          try {
            for (; k < E.length; k++) {
              var W = E[k];
              do
                W = W(!0);
              while (W !== null);
            }
            E.length = 0;
          } catch (K) {
            throw E = E.slice(k + 1), K;
          } finally {
            Oo = !1;
          }
        }
      }
      var du = Rc, pl = Ri, ms = Xn, ri = {
        map: Na,
        forEach: su,
        count: yo,
        toArray: nl,
        only: Pi
      };
      f.Children = ri, f.Component = Ze, f.Fragment = R, f.Profiler = D, f.PureComponent = $t, f.StrictMode = y, f.Suspense = x, f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mt, f.cloneElement = pl, f.createContext = go, f.createElement = du, f.createFactory = ms, f.createRef = gr, f.forwardRef = Si, f.isValidElement = It, f.lazy = Sa, f.memo = ge, f.startTransition = bc, f.unstable_act = Do, f.useCallback = or, f.useContext = lt, f.useDebugValue = Lt, f.useDeferredValue = ti, f.useEffect = Un, f.useId = mt, f.useImperativeHandle = rl, f.useInsertionEffect = un, f.useLayoutEffect = ln, f.useMemo = Ei, f.useReducer = st, f.useRef = We, f.useState = _t, f.useSyncExternalStore = Ci, f.useTransition = hd, f.version = d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Ov, Ov.exports)), Ov.exports;
}
var Wb;
function Ec() {
  return Wb || (Wb = 1, process.env.NODE_ENV === "production" ? by.exports = CN() : by.exports = wN()), by.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qb;
function RN() {
  if (qb)
    return bv;
  qb = 1;
  var l = Ec(), f = Symbol.for("react.element"), d = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, C = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(D, M, O) {
    var L, x = {}, P = null, Q = null;
    O !== void 0 && (P = "" + O), M.key !== void 0 && (P = "" + M.key), M.ref !== void 0 && (Q = M.ref);
    for (L in M)
      m.call(M, L) && !R.hasOwnProperty(L) && (x[L] = M[L]);
    if (D && D.defaultProps)
      for (L in M = D.defaultProps, M)
        x[L] === void 0 && (x[L] = M[L]);
    return { $$typeof: f, type: D, key: P, ref: Q, props: x, _owner: C.current };
  }
  return bv.Fragment = d, bv.jsx = y, bv.jsxs = y, bv;
}
var Tv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qb;
function bN() {
  return Qb || (Qb = 1, process.env.NODE_ENV !== "production" && function() {
    var l = Ec(), f = Symbol.for("react.element"), d = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), D = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), Q = Symbol.for("react.offscreen"), I = Symbol.iterator, X = "@@iterator";
    function ne(N) {
      if (N === null || typeof N != "object")
        return null;
      var oe = I && N[I] || N[X];
      return typeof oe == "function" ? oe : null;
    }
    var we = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function he(N) {
      {
        for (var oe = arguments.length, ge = new Array(oe > 1 ? oe - 1 : 0), Oe = 1; Oe < oe; Oe++)
          ge[Oe - 1] = arguments[Oe];
        ie("error", N, ge);
      }
    }
    function ie(N, oe, ge) {
      {
        var Oe = we.ReactDebugCurrentFrame, lt = Oe.getStackAddendum();
        lt !== "" && (oe += "%s", ge = ge.concat([lt]));
        var _t = ge.map(function(st) {
          return String(st);
        });
        _t.unshift("Warning: " + oe), Function.prototype.apply.call(console[N], console, _t);
      }
    }
    var me = !1, fe = !1, Re = !1, _e = !1, He = !1, bt;
    bt = Symbol.for("react.module.reference");
    function Nt(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === m || N === R || He || N === C || N === O || N === L || _e || N === Q || me || fe || Re || typeof N == "object" && N !== null && (N.$$typeof === P || N.$$typeof === x || N.$$typeof === y || N.$$typeof === D || N.$$typeof === M || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      N.$$typeof === bt || N.getModuleId !== void 0));
    }
    function ht(N, oe, ge) {
      var Oe = N.displayName;
      if (Oe)
        return Oe;
      var lt = oe.displayName || oe.name || "";
      return lt !== "" ? ge + "(" + lt + ")" : ge;
    }
    function on(N) {
      return N.displayName || "Context";
    }
    function Ie(N) {
      if (N == null)
        return null;
      if (typeof N.tag == "number" && he("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof N == "function")
        return N.displayName || N.name || null;
      if (typeof N == "string")
        return N;
      switch (N) {
        case m:
          return "Fragment";
        case d:
          return "Portal";
        case R:
          return "Profiler";
        case C:
          return "StrictMode";
        case O:
          return "Suspense";
        case L:
          return "SuspenseList";
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case D:
            var oe = N;
            return on(oe) + ".Consumer";
          case y:
            var ge = N;
            return on(ge._context) + ".Provider";
          case M:
            return ht(N, N.render, "ForwardRef");
          case x:
            var Oe = N.displayName || null;
            return Oe !== null ? Oe : Ie(N.type) || "Memo";
          case P: {
            var lt = N, _t = lt._payload, st = lt._init;
            try {
              return Ie(st(_t));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ot = Object.assign, Mt = 0, St, Le, ve, Ve, A, re, be;
    function rt() {
    }
    rt.__reactDisabledLog = !0;
    function Ze() {
      {
        if (Mt === 0) {
          St = console.log, Le = console.info, ve = console.warn, Ve = console.error, A = console.group, re = console.groupCollapsed, be = console.groupEnd;
          var N = {
            configurable: !0,
            enumerable: !0,
            value: rt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: N,
            log: N,
            warn: N,
            error: N,
            group: N,
            groupCollapsed: N,
            groupEnd: N
          });
        }
        Mt++;
      }
    }
    function Tt() {
      {
        if (Mt--, Mt === 0) {
          var N = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ot({}, N, {
              value: St
            }),
            info: ot({}, N, {
              value: Le
            }),
            warn: ot({}, N, {
              value: ve
            }),
            error: ot({}, N, {
              value: Ve
            }),
            group: ot({}, N, {
              value: A
            }),
            groupCollapsed: ot({}, N, {
              value: re
            }),
            groupEnd: ot({}, N, {
              value: be
            })
          });
        }
        Mt < 0 && he("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var dt = we.ReactCurrentDispatcher, Et;
    function pt(N, oe, ge) {
      {
        if (Et === void 0)
          try {
            throw Error();
          } catch (lt) {
            var Oe = lt.stack.trim().match(/\n( *(at )?)/);
            Et = Oe && Oe[1] || "";
          }
        return `
` + Et + N;
      }
    }
    var $t = !1, Wr;
    {
      var gr = typeof WeakMap == "function" ? WeakMap : Map;
      Wr = new gr();
    }
    function qr(N, oe) {
      if (!N || $t)
        return "";
      {
        var ge = Wr.get(N);
        if (ge !== void 0)
          return ge;
      }
      var Oe;
      $t = !0;
      var lt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _t;
      _t = dt.current, dt.current = null, Ze();
      try {
        if (oe) {
          var st = function() {
            throw Error();
          };
          if (Object.defineProperty(st.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(st, []);
            } catch (Lt) {
              Oe = Lt;
            }
            Reflect.construct(N, [], st);
          } else {
            try {
              st.call();
            } catch (Lt) {
              Oe = Lt;
            }
            N.call(st.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Lt) {
            Oe = Lt;
          }
          N();
        }
      } catch (Lt) {
        if (Lt && Oe && typeof Lt.stack == "string") {
          for (var We = Lt.stack.split(`
`), Un = Oe.stack.split(`
`), un = We.length - 1, ln = Un.length - 1; un >= 1 && ln >= 0 && We[un] !== Un[ln]; )
            ln--;
          for (; un >= 1 && ln >= 0; un--, ln--)
            if (We[un] !== Un[ln]) {
              if (un !== 1 || ln !== 1)
                do
                  if (un--, ln--, ln < 0 || We[un] !== Un[ln]) {
                    var or = `
` + We[un].replace(" at new ", " at ");
                    return N.displayName && or.includes("<anonymous>") && (or = or.replace("<anonymous>", N.displayName)), typeof N == "function" && Wr.set(N, or), or;
                  }
                while (un >= 1 && ln >= 0);
              break;
            }
        }
      } finally {
        $t = !1, dt.current = _t, Tt(), Error.prepareStackTrace = lt;
      }
      var Ei = N ? N.displayName || N.name : "", rl = Ei ? pt(Ei) : "";
      return typeof N == "function" && Wr.set(N, rl), rl;
    }
    function gn(N, oe, ge) {
      return qr(N, !1);
    }
    function Gn(N) {
      var oe = N.prototype;
      return !!(oe && oe.isReactComponent);
    }
    function Vn(N, oe, ge) {
      if (N == null)
        return "";
      if (typeof N == "function")
        return qr(N, Gn(N));
      if (typeof N == "string")
        return pt(N);
      switch (N) {
        case O:
          return pt("Suspense");
        case L:
          return pt("SuspenseList");
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case M:
            return gn(N.render);
          case x:
            return Vn(N.type, oe, ge);
          case P: {
            var Oe = N, lt = Oe._payload, _t = Oe._init;
            try {
              return Vn(_t(lt), oe, ge);
            } catch {
            }
          }
        }
      return "";
    }
    var Bn = Object.prototype.hasOwnProperty, kn = {}, Qr = we.ReactDebugCurrentFrame;
    function Gr(N) {
      if (N) {
        var oe = N._owner, ge = Vn(N.type, N._source, oe ? oe.type : null);
        Qr.setExtraStackFrame(ge);
      } else
        Qr.setExtraStackFrame(null);
    }
    function Kn(N, oe, ge, Oe, lt) {
      {
        var _t = Function.call.bind(Bn);
        for (var st in N)
          if (_t(N, st)) {
            var We = void 0;
            try {
              if (typeof N[st] != "function") {
                var Un = Error((Oe || "React class") + ": " + ge + " type `" + st + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof N[st] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Un.name = "Invariant Violation", Un;
              }
              We = N[st](oe, st, Oe, ge, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (un) {
              We = un;
            }
            We && !(We instanceof Error) && (Gr(lt), he("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Oe || "React class", ge, st, typeof We), Gr(null)), We instanceof Error && !(We.message in kn) && (kn[We.message] = !0, Gr(lt), he("Failed %s type: %s", ge, We.message), Gr(null));
          }
      }
    }
    var Sr = Array.isArray;
    function Kr(N) {
      return Sr(N);
    }
    function Er(N) {
      {
        var oe = typeof Symbol == "function" && Symbol.toStringTag, ge = oe && N[Symbol.toStringTag] || N.constructor.name || "Object";
        return ge;
      }
    }
    function ha(N) {
      try {
        return ir(N), !1;
      } catch {
        return !0;
      }
    }
    function ir(N) {
      return "" + N;
    }
    function Xr(N) {
      if (ha(N))
        return he("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Er(N)), ir(N);
    }
    var Sn = we.ReactCurrentOwner, Or = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, mi, ma, ye;
    ye = {};
    function Be(N) {
      if (Bn.call(N, "ref")) {
        var oe = Object.getOwnPropertyDescriptor(N, "ref").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return N.ref !== void 0;
    }
    function vt(N) {
      if (Bn.call(N, "key")) {
        var oe = Object.getOwnPropertyDescriptor(N, "key").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return N.key !== void 0;
    }
    function Vt(N, oe) {
      if (typeof N.ref == "string" && Sn.current && oe && Sn.current.stateNode !== oe) {
        var ge = Ie(Sn.current.type);
        ye[ge] || (he('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ie(Sn.current.type), N.ref), ye[ge] = !0);
      }
    }
    function It(N, oe) {
      {
        var ge = function() {
          mi || (mi = !0, he("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        ge.isReactWarning = !0, Object.defineProperty(N, "key", {
          get: ge,
          configurable: !0
        });
      }
    }
    function Nn(N, oe) {
      {
        var ge = function() {
          ma || (ma = !0, he("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        ge.isReactWarning = !0, Object.defineProperty(N, "ref", {
          get: ge,
          configurable: !0
        });
      }
    }
    var En = function(N, oe, ge, Oe, lt, _t, st) {
      var We = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: N,
        key: oe,
        ref: ge,
        props: st,
        // Record the component responsible for creating this element.
        _owner: _t
      };
      return We._store = {}, Object.defineProperty(We._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(We, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Oe
      }), Object.defineProperty(We, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: lt
      }), Object.freeze && (Object.freeze(We.props), Object.freeze(We)), We;
    };
    function Cr(N, oe, ge, Oe, lt) {
      {
        var _t, st = {}, We = null, Un = null;
        ge !== void 0 && (Xr(ge), We = "" + ge), vt(oe) && (Xr(oe.key), We = "" + oe.key), Be(oe) && (Un = oe.ref, Vt(oe, lt));
        for (_t in oe)
          Bn.call(oe, _t) && !Or.hasOwnProperty(_t) && (st[_t] = oe[_t]);
        if (N && N.defaultProps) {
          var un = N.defaultProps;
          for (_t in un)
            st[_t] === void 0 && (st[_t] = un[_t]);
        }
        if (We || Un) {
          var ln = typeof N == "function" ? N.displayName || N.name || "Unknown" : N;
          We && It(st, ln), Un && Nn(st, ln);
        }
        return En(N, We, Un, lt, Oe, Sn.current, st);
      }
    }
    var Kt = we.ReactCurrentOwner, kr = we.ReactDebugCurrentFrame;
    function Yt(N) {
      if (N) {
        var oe = N._owner, ge = Vn(N.type, N._source, oe ? oe.type : null);
        kr.setExtraStackFrame(ge);
      } else
        kr.setExtraStackFrame(null);
    }
    var Wt;
    Wt = !1;
    function ei(N) {
      return typeof N == "object" && N !== null && N.$$typeof === f;
    }
    function Na() {
      {
        if (Kt.current) {
          var N = Ie(Kt.current.type);
          if (N)
            return `

Check the render method of \`` + N + "`.";
        }
        return "";
      }
    }
    function yo(N) {
      {
        if (N !== void 0) {
          var oe = N.fileName.replace(/^.*[\\\/]/, ""), ge = N.lineNumber;
          return `

Check your code at ` + oe + ":" + ge + ".";
        }
        return "";
      }
    }
    var su = {};
    function nl(N) {
      {
        var oe = Na();
        if (!oe) {
          var ge = typeof N == "string" ? N : N.displayName || N.name;
          ge && (oe = `

Check the top-level render call using <` + ge + ">.");
        }
        return oe;
      }
    }
    function Pi(N, oe) {
      {
        if (!N._store || N._store.validated || N.key != null)
          return;
        N._store.validated = !0;
        var ge = nl(oe);
        if (su[ge])
          return;
        su[ge] = !0;
        var Oe = "";
        N && N._owner && N._owner !== Kt.current && (Oe = " It was passed a child from " + Ie(N._owner.type) + "."), Yt(N), he('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ge, Oe), Yt(null);
      }
    }
    function go(N, oe) {
      {
        if (typeof N != "object")
          return;
        if (Kr(N))
          for (var ge = 0; ge < N.length; ge++) {
            var Oe = N[ge];
            ei(Oe) && Pi(Oe, oe);
          }
        else if (ei(N))
          N._store && (N._store.validated = !0);
        else if (N) {
          var lt = ne(N);
          if (typeof lt == "function" && lt !== N.entries)
            for (var _t = lt.call(N), st; !(st = _t.next()).done; )
              ei(st.value) && Pi(st.value, oe);
        }
      }
    }
    function ya(N) {
      {
        var oe = N.type;
        if (oe == null || typeof oe == "string")
          return;
        var ge;
        if (typeof oe == "function")
          ge = oe.propTypes;
        else if (typeof oe == "object" && (oe.$$typeof === M || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        oe.$$typeof === x))
          ge = oe.propTypes;
        else
          return;
        if (ge) {
          var Oe = Ie(oe);
          Kn(ge, N.props, "prop", Oe, N);
        } else if (oe.PropTypes !== void 0 && !Wt) {
          Wt = !0;
          var lt = Ie(oe);
          he("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", lt || "Unknown");
        }
        typeof oe.getDefaultProps == "function" && !oe.getDefaultProps.isReactClassApproved && he("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function yi(N) {
      {
        for (var oe = Object.keys(N.props), ge = 0; ge < oe.length; ge++) {
          var Oe = oe[ge];
          if (Oe !== "children" && Oe !== "key") {
            Yt(N), he("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Oe), Yt(null);
            break;
          }
        }
        N.ref !== null && (Yt(N), he("Invalid attribute `ref` supplied to `React.Fragment`."), Yt(null));
      }
    }
    function ga(N, oe, ge, Oe, lt, _t) {
      {
        var st = Nt(N);
        if (!st) {
          var We = "";
          (N === void 0 || typeof N == "object" && N !== null && Object.keys(N).length === 0) && (We += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Un = yo(lt);
          Un ? We += Un : We += Na();
          var un;
          N === null ? un = "null" : Kr(N) ? un = "array" : N !== void 0 && N.$$typeof === f ? (un = "<" + (Ie(N.type) || "Unknown") + " />", We = " Did you accidentally export a JSX literal instead of a component?") : un = typeof N, he("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", un, We);
        }
        var ln = Cr(N, oe, ge, lt, _t);
        if (ln == null)
          return ln;
        if (st) {
          var or = oe.children;
          if (or !== void 0)
            if (Oe)
              if (Kr(or)) {
                for (var Ei = 0; Ei < or.length; Ei++)
                  go(or[Ei], N);
                Object.freeze && Object.freeze(or);
              } else
                he("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              go(or, N);
        }
        return N === m ? yi(ln) : ya(ln), ln;
      }
    }
    function gi(N, oe, ge) {
      return ga(N, oe, ge, !0);
    }
    function Nr(N, oe, ge) {
      return ga(N, oe, ge, !1);
    }
    var Sa = Nr, Si = gi;
    Tv.Fragment = m, Tv.jsx = Sa, Tv.jsxs = Si;
  }()), Tv;
}
process.env.NODE_ENV === "production" ? F0.exports = RN() : F0.exports = bN();
var hn = F0.exports, kv = {}, P0 = { exports: {} }, Xa = {}, Ty = { exports: {} }, b0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gb;
function TN() {
  return Gb || (Gb = 1, function(l) {
    function f(ve, Ve) {
      var A = ve.length;
      ve.push(Ve);
      e:
        for (; 0 < A; ) {
          var re = A - 1 >>> 1, be = ve[re];
          if (0 < C(be, Ve))
            ve[re] = Ve, ve[A] = be, A = re;
          else
            break e;
        }
    }
    function d(ve) {
      return ve.length === 0 ? null : ve[0];
    }
    function m(ve) {
      if (ve.length === 0)
        return null;
      var Ve = ve[0], A = ve.pop();
      if (A !== Ve) {
        ve[0] = A;
        e:
          for (var re = 0, be = ve.length, rt = be >>> 1; re < rt; ) {
            var Ze = 2 * (re + 1) - 1, Tt = ve[Ze], dt = Ze + 1, Et = ve[dt];
            if (0 > C(Tt, A))
              dt < be && 0 > C(Et, Tt) ? (ve[re] = Et, ve[dt] = A, re = dt) : (ve[re] = Tt, ve[Ze] = A, re = Ze);
            else if (dt < be && 0 > C(Et, A))
              ve[re] = Et, ve[dt] = A, re = dt;
            else
              break e;
          }
      }
      return Ve;
    }
    function C(ve, Ve) {
      var A = ve.sortIndex - Ve.sortIndex;
      return A !== 0 ? A : ve.id - Ve.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var R = performance;
      l.unstable_now = function() {
        return R.now();
      };
    } else {
      var y = Date, D = y.now();
      l.unstable_now = function() {
        return y.now() - D;
      };
    }
    var M = [], O = [], L = 1, x = null, P = 3, Q = !1, I = !1, X = !1, ne = typeof setTimeout == "function" ? setTimeout : null, we = typeof clearTimeout == "function" ? clearTimeout : null, he = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ie(ve) {
      for (var Ve = d(O); Ve !== null; ) {
        if (Ve.callback === null)
          m(O);
        else if (Ve.startTime <= ve)
          m(O), Ve.sortIndex = Ve.expirationTime, f(M, Ve);
        else
          break;
        Ve = d(O);
      }
    }
    function me(ve) {
      if (X = !1, ie(ve), !I)
        if (d(M) !== null)
          I = !0, St(fe);
        else {
          var Ve = d(O);
          Ve !== null && Le(me, Ve.startTime - ve);
        }
    }
    function fe(ve, Ve) {
      I = !1, X && (X = !1, we(He), He = -1), Q = !0;
      var A = P;
      try {
        for (ie(Ve), x = d(M); x !== null && (!(x.expirationTime > Ve) || ve && !ht()); ) {
          var re = x.callback;
          if (typeof re == "function") {
            x.callback = null, P = x.priorityLevel;
            var be = re(x.expirationTime <= Ve);
            Ve = l.unstable_now(), typeof be == "function" ? x.callback = be : x === d(M) && m(M), ie(Ve);
          } else
            m(M);
          x = d(M);
        }
        if (x !== null)
          var rt = !0;
        else {
          var Ze = d(O);
          Ze !== null && Le(me, Ze.startTime - Ve), rt = !1;
        }
        return rt;
      } finally {
        x = null, P = A, Q = !1;
      }
    }
    var Re = !1, _e = null, He = -1, bt = 5, Nt = -1;
    function ht() {
      return !(l.unstable_now() - Nt < bt);
    }
    function on() {
      if (_e !== null) {
        var ve = l.unstable_now();
        Nt = ve;
        var Ve = !0;
        try {
          Ve = _e(!0, ve);
        } finally {
          Ve ? Ie() : (Re = !1, _e = null);
        }
      } else
        Re = !1;
    }
    var Ie;
    if (typeof he == "function")
      Ie = function() {
        he(on);
      };
    else if (typeof MessageChannel < "u") {
      var ot = new MessageChannel(), Mt = ot.port2;
      ot.port1.onmessage = on, Ie = function() {
        Mt.postMessage(null);
      };
    } else
      Ie = function() {
        ne(on, 0);
      };
    function St(ve) {
      _e = ve, Re || (Re = !0, Ie());
    }
    function Le(ve, Ve) {
      He = ne(function() {
        ve(l.unstable_now());
      }, Ve);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(ve) {
      ve.callback = null;
    }, l.unstable_continueExecution = function() {
      I || Q || (I = !0, St(fe));
    }, l.unstable_forceFrameRate = function(ve) {
      0 > ve || 125 < ve ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : bt = 0 < ve ? Math.floor(1e3 / ve) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return P;
    }, l.unstable_getFirstCallbackNode = function() {
      return d(M);
    }, l.unstable_next = function(ve) {
      switch (P) {
        case 1:
        case 2:
        case 3:
          var Ve = 3;
          break;
        default:
          Ve = P;
      }
      var A = P;
      P = Ve;
      try {
        return ve();
      } finally {
        P = A;
      }
    }, l.unstable_pauseExecution = function() {
    }, l.unstable_requestPaint = function() {
    }, l.unstable_runWithPriority = function(ve, Ve) {
      switch (ve) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ve = 3;
      }
      var A = P;
      P = ve;
      try {
        return Ve();
      } finally {
        P = A;
      }
    }, l.unstable_scheduleCallback = function(ve, Ve, A) {
      var re = l.unstable_now();
      switch (typeof A == "object" && A !== null ? (A = A.delay, A = typeof A == "number" && 0 < A ? re + A : re) : A = re, ve) {
        case 1:
          var be = -1;
          break;
        case 2:
          be = 250;
          break;
        case 5:
          be = 1073741823;
          break;
        case 4:
          be = 1e4;
          break;
        default:
          be = 5e3;
      }
      return be = A + be, ve = { id: L++, callback: Ve, priorityLevel: ve, startTime: A, expirationTime: be, sortIndex: -1 }, A > re ? (ve.sortIndex = A, f(O, ve), d(M) === null && ve === d(O) && (X ? (we(He), He = -1) : X = !0, Le(me, A - re))) : (ve.sortIndex = be, f(M, ve), I || Q || (I = !0, St(fe))), ve;
    }, l.unstable_shouldYield = ht, l.unstable_wrapCallback = function(ve) {
      var Ve = P;
      return function() {
        var A = P;
        P = Ve;
        try {
          return ve.apply(this, arguments);
        } finally {
          P = A;
        }
      };
    };
  }(b0)), b0;
}
var T0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kb;
function _N() {
  return Kb || (Kb = 1, function(l) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var f = !1, d = !1, m = 5;
      function C(ye, Be) {
        var vt = ye.length;
        ye.push(Be), D(ye, Be, vt);
      }
      function R(ye) {
        return ye.length === 0 ? null : ye[0];
      }
      function y(ye) {
        if (ye.length === 0)
          return null;
        var Be = ye[0], vt = ye.pop();
        return vt !== Be && (ye[0] = vt, M(ye, vt, 0)), Be;
      }
      function D(ye, Be, vt) {
        for (var Vt = vt; Vt > 0; ) {
          var It = Vt - 1 >>> 1, Nn = ye[It];
          if (O(Nn, Be) > 0)
            ye[It] = Be, ye[Vt] = Nn, Vt = It;
          else
            return;
        }
      }
      function M(ye, Be, vt) {
        for (var Vt = vt, It = ye.length, Nn = It >>> 1; Vt < Nn; ) {
          var En = (Vt + 1) * 2 - 1, Cr = ye[En], Kt = En + 1, kr = ye[Kt];
          if (O(Cr, Be) < 0)
            Kt < It && O(kr, Cr) < 0 ? (ye[Vt] = kr, ye[Kt] = Be, Vt = Kt) : (ye[Vt] = Cr, ye[En] = Be, Vt = En);
          else if (Kt < It && O(kr, Be) < 0)
            ye[Vt] = kr, ye[Kt] = Be, Vt = Kt;
          else
            return;
        }
      }
      function O(ye, Be) {
        var vt = ye.sortIndex - Be.sortIndex;
        return vt !== 0 ? vt : ye.id - Be.id;
      }
      var L = 1, x = 2, P = 3, Q = 4, I = 5;
      function X(ye, Be) {
      }
      var ne = typeof performance == "object" && typeof performance.now == "function";
      if (ne) {
        var we = performance;
        l.unstable_now = function() {
          return we.now();
        };
      } else {
        var he = Date, ie = he.now();
        l.unstable_now = function() {
          return he.now() - ie;
        };
      }
      var me = 1073741823, fe = -1, Re = 250, _e = 5e3, He = 1e4, bt = me, Nt = [], ht = [], on = 1, Ie = null, ot = P, Mt = !1, St = !1, Le = !1, ve = typeof setTimeout == "function" ? setTimeout : null, Ve = typeof clearTimeout == "function" ? clearTimeout : null, A = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function re(ye) {
        for (var Be = R(ht); Be !== null; ) {
          if (Be.callback === null)
            y(ht);
          else if (Be.startTime <= ye)
            y(ht), Be.sortIndex = Be.expirationTime, C(Nt, Be);
          else
            return;
          Be = R(ht);
        }
      }
      function be(ye) {
        if (Le = !1, re(ye), !St)
          if (R(Nt) !== null)
            St = !0, Xr(rt);
          else {
            var Be = R(ht);
            Be !== null && Sn(be, Be.startTime - ye);
          }
      }
      function rt(ye, Be) {
        St = !1, Le && (Le = !1, Or()), Mt = !0;
        var vt = ot;
        try {
          var Vt;
          if (!d)
            return Ze(ye, Be);
        } finally {
          Ie = null, ot = vt, Mt = !1;
        }
      }
      function Ze(ye, Be) {
        var vt = Be;
        for (re(vt), Ie = R(Nt); Ie !== null && !f && !(Ie.expirationTime > vt && (!ye || Gr())); ) {
          var Vt = Ie.callback;
          if (typeof Vt == "function") {
            Ie.callback = null, ot = Ie.priorityLevel;
            var It = Ie.expirationTime <= vt, Nn = Vt(It);
            vt = l.unstable_now(), typeof Nn == "function" ? Ie.callback = Nn : Ie === R(Nt) && y(Nt), re(vt);
          } else
            y(Nt);
          Ie = R(Nt);
        }
        if (Ie !== null)
          return !0;
        var En = R(ht);
        return En !== null && Sn(be, En.startTime - vt), !1;
      }
      function Tt(ye, Be) {
        switch (ye) {
          case L:
          case x:
          case P:
          case Q:
          case I:
            break;
          default:
            ye = P;
        }
        var vt = ot;
        ot = ye;
        try {
          return Be();
        } finally {
          ot = vt;
        }
      }
      function dt(ye) {
        var Be;
        switch (ot) {
          case L:
          case x:
          case P:
            Be = P;
            break;
          default:
            Be = ot;
            break;
        }
        var vt = ot;
        ot = Be;
        try {
          return ye();
        } finally {
          ot = vt;
        }
      }
      function Et(ye) {
        var Be = ot;
        return function() {
          var vt = ot;
          ot = Be;
          try {
            return ye.apply(this, arguments);
          } finally {
            ot = vt;
          }
        };
      }
      function pt(ye, Be, vt) {
        var Vt = l.unstable_now(), It;
        if (typeof vt == "object" && vt !== null) {
          var Nn = vt.delay;
          typeof Nn == "number" && Nn > 0 ? It = Vt + Nn : It = Vt;
        } else
          It = Vt;
        var En;
        switch (ye) {
          case L:
            En = fe;
            break;
          case x:
            En = Re;
            break;
          case I:
            En = bt;
            break;
          case Q:
            En = He;
            break;
          case P:
          default:
            En = _e;
            break;
        }
        var Cr = It + En, Kt = {
          id: on++,
          callback: Be,
          priorityLevel: ye,
          startTime: It,
          expirationTime: Cr,
          sortIndex: -1
        };
        return It > Vt ? (Kt.sortIndex = It, C(ht, Kt), R(Nt) === null && Kt === R(ht) && (Le ? Or() : Le = !0, Sn(be, It - Vt))) : (Kt.sortIndex = Cr, C(Nt, Kt), !St && !Mt && (St = !0, Xr(rt))), Kt;
      }
      function $t() {
      }
      function Wr() {
        !St && !Mt && (St = !0, Xr(rt));
      }
      function gr() {
        return R(Nt);
      }
      function qr(ye) {
        ye.callback = null;
      }
      function gn() {
        return ot;
      }
      var Gn = !1, Vn = null, Bn = -1, kn = m, Qr = -1;
      function Gr() {
        var ye = l.unstable_now() - Qr;
        return !(ye < kn);
      }
      function Kn() {
      }
      function Sr(ye) {
        if (ye < 0 || ye > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ye > 0 ? kn = Math.floor(1e3 / ye) : kn = m;
      }
      var Kr = function() {
        if (Vn !== null) {
          var ye = l.unstable_now();
          Qr = ye;
          var Be = !0, vt = !0;
          try {
            vt = Vn(Be, ye);
          } finally {
            vt ? Er() : (Gn = !1, Vn = null);
          }
        } else
          Gn = !1;
      }, Er;
      if (typeof A == "function")
        Er = function() {
          A(Kr);
        };
      else if (typeof MessageChannel < "u") {
        var ha = new MessageChannel(), ir = ha.port2;
        ha.port1.onmessage = Kr, Er = function() {
          ir.postMessage(null);
        };
      } else
        Er = function() {
          ve(Kr, 0);
        };
      function Xr(ye) {
        Vn = ye, Gn || (Gn = !0, Er());
      }
      function Sn(ye, Be) {
        Bn = ve(function() {
          ye(l.unstable_now());
        }, Be);
      }
      function Or() {
        Ve(Bn), Bn = -1;
      }
      var mi = Kn, ma = null;
      l.unstable_IdlePriority = I, l.unstable_ImmediatePriority = L, l.unstable_LowPriority = Q, l.unstable_NormalPriority = P, l.unstable_Profiling = ma, l.unstable_UserBlockingPriority = x, l.unstable_cancelCallback = qr, l.unstable_continueExecution = Wr, l.unstable_forceFrameRate = Sr, l.unstable_getCurrentPriorityLevel = gn, l.unstable_getFirstCallbackNode = gr, l.unstable_next = dt, l.unstable_pauseExecution = $t, l.unstable_requestPaint = mi, l.unstable_runWithPriority = Tt, l.unstable_scheduleCallback = pt, l.unstable_shouldYield = Gr, l.unstable_wrapCallback = Et, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(T0)), T0;
}
var Xb;
function kT() {
  return Xb || (Xb = 1, process.env.NODE_ENV === "production" ? Ty.exports = TN() : Ty.exports = _N()), Ty.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jb;
function xN() {
  if (Jb)
    return Xa;
  Jb = 1;
  var l = Ec(), f = kT();
  function d(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
      r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var m = /* @__PURE__ */ new Set(), C = {};
  function R(n, r) {
    y(n, r), y(n + "Capture", r);
  }
  function y(n, r) {
    for (C[n] = r, n = 0; n < r.length; n++)
      m.add(r[n]);
  }
  var D = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), M = Object.prototype.hasOwnProperty, O = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, L = {}, x = {};
  function P(n) {
    return M.call(x, n) ? !0 : M.call(L, n) ? !1 : O.test(n) ? x[n] = !0 : (L[n] = !0, !1);
  }
  function Q(n, r, o, s) {
    if (o !== null && o.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function I(n, r, o, s) {
    if (r === null || typeof r > "u" || Q(n, r, o, s))
      return !0;
    if (s)
      return !1;
    if (o !== null)
      switch (o.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function X(n, r, o, s, p, h, w) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = s, this.attributeNamespace = p, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = h, this.removeEmptyString = w;
  }
  var ne = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ne[n] = new X(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ne[r] = new X(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ne[n] = new X(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ne[n] = new X(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ne[n] = new X(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ne[n] = new X(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ne[n] = new X(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ne[n] = new X(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ne[n] = new X(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var we = /[\-:]([a-z])/g;
  function he(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      we,
      he
    );
    ne[r] = new X(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(we, he);
    ne[r] = new X(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(we, he);
    ne[r] = new X(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ne[n] = new X(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ne.xlinkHref = new X("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ne[n] = new X(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ie(n, r, o, s) {
    var p = ne.hasOwnProperty(r) ? ne[r] : null;
    (p !== null ? p.type !== 0 : s || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (I(r, o, p, s) && (o = null), s || p === null ? P(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : p.mustUseProperty ? n[p.propertyName] = o === null ? p.type === 3 ? !1 : "" : o : (r = p.attributeName, s = p.attributeNamespace, o === null ? n.removeAttribute(r) : (p = p.type, o = p === 3 || p === 4 && o === !0 ? "" : "" + o, s ? n.setAttributeNS(s, r, o) : n.setAttribute(r, o))));
  }
  var me = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, fe = Symbol.for("react.element"), Re = Symbol.for("react.portal"), _e = Symbol.for("react.fragment"), He = Symbol.for("react.strict_mode"), bt = Symbol.for("react.profiler"), Nt = Symbol.for("react.provider"), ht = Symbol.for("react.context"), on = Symbol.for("react.forward_ref"), Ie = Symbol.for("react.suspense"), ot = Symbol.for("react.suspense_list"), Mt = Symbol.for("react.memo"), St = Symbol.for("react.lazy"), Le = Symbol.for("react.offscreen"), ve = Symbol.iterator;
  function Ve(n) {
    return n === null || typeof n != "object" ? null : (n = ve && n[ve] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var A = Object.assign, re;
  function be(n) {
    if (re === void 0)
      try {
        throw Error();
      } catch (o) {
        var r = o.stack.trim().match(/\n( *(at )?)/);
        re = r && r[1] || "";
      }
    return `
` + re + n;
  }
  var rt = !1;
  function Ze(n, r) {
    if (!n || rt)
      return "";
    rt = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (G) {
            var s = G;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (G) {
            s = G;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (G) {
          s = G;
        }
        n();
      }
    } catch (G) {
      if (G && s && typeof G.stack == "string") {
        for (var p = G.stack.split(`
`), h = s.stack.split(`
`), w = p.length - 1, _ = h.length - 1; 1 <= w && 0 <= _ && p[w] !== h[_]; )
          _--;
        for (; 1 <= w && 0 <= _; w--, _--)
          if (p[w] !== h[_]) {
            if (w !== 1 || _ !== 1)
              do
                if (w--, _--, 0 > _ || p[w] !== h[_]) {
                  var z = `
` + p[w].replace(" at new ", " at ");
                  return n.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", n.displayName)), z;
                }
              while (1 <= w && 0 <= _);
            break;
          }
      }
    } finally {
      rt = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? be(n) : "";
  }
  function Tt(n) {
    switch (n.tag) {
      case 5:
        return be(n.type);
      case 16:
        return be("Lazy");
      case 13:
        return be("Suspense");
      case 19:
        return be("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ze(n.type, !1), n;
      case 11:
        return n = Ze(n.type.render, !1), n;
      case 1:
        return n = Ze(n.type, !0), n;
      default:
        return "";
    }
  }
  function dt(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case _e:
        return "Fragment";
      case Re:
        return "Portal";
      case bt:
        return "Profiler";
      case He:
        return "StrictMode";
      case Ie:
        return "Suspense";
      case ot:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case ht:
          return (n.displayName || "Context") + ".Consumer";
        case Nt:
          return (n._context.displayName || "Context") + ".Provider";
        case on:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Mt:
          return r = n.displayName || null, r !== null ? r : dt(n.type) || "Memo";
        case St:
          r = n._payload, n = n._init;
          try {
            return dt(n(r));
          } catch {
          }
      }
    return null;
  }
  function Et(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return dt(r);
      case 8:
        return r === He ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function pt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function $t(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Wr(n) {
    var r = $t(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), s = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var p = o.get, h = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return p.call(this);
      }, set: function(w) {
        s = "" + w, h.call(this, w);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return s;
      }, setValue: function(w) {
        s = "" + w;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function gr(n) {
    n._valueTracker || (n._valueTracker = Wr(n));
  }
  function qr(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var o = r.getValue(), s = "";
    return n && (s = $t(n) ? n.checked ? "true" : "false" : n.value), n = s, n !== o ? (r.setValue(n), !0) : !1;
  }
  function gn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Gn(n, r) {
    var o = r.checked;
    return A({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function Vn(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, s = r.checked != null ? r.checked : r.defaultChecked;
    o = pt(r.value != null ? r.value : o), n._wrapperState = { initialChecked: s, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Bn(n, r) {
    r = r.checked, r != null && ie(n, "checked", r, !1);
  }
  function kn(n, r) {
    Bn(n, r);
    var o = pt(r.value), s = r.type;
    if (o != null)
      s === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (s === "submit" || s === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Gr(n, r.type, o) : r.hasOwnProperty("defaultValue") && Gr(n, r.type, pt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Qr(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var s = r.type;
      if (!(s !== "submit" && s !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function Gr(n, r, o) {
    (r !== "number" || gn(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var Kn = Array.isArray;
  function Sr(n, r, o, s) {
    if (n = n.options, r) {
      r = {};
      for (var p = 0; p < o.length; p++)
        r["$" + o[p]] = !0;
      for (o = 0; o < n.length; o++)
        p = r.hasOwnProperty("$" + n[o].value), n[o].selected !== p && (n[o].selected = p), p && s && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + pt(o), r = null, p = 0; p < n.length; p++) {
        if (n[p].value === o) {
          n[p].selected = !0, s && (n[p].defaultSelected = !0);
          return;
        }
        r !== null || n[p].disabled || (r = n[p]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Kr(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(d(91));
    return A({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Er(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null)
          throw Error(d(92));
        if (Kn(o)) {
          if (1 < o.length)
            throw Error(d(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: pt(o) };
  }
  function ha(n, r) {
    var o = pt(r.value), s = pt(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), s != null && (n.defaultValue = "" + s);
  }
  function ir(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Xr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Sn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Xr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Or, mi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, s, p) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, s, p);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (Or = Or || document.createElement("div"), Or.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Or.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function ma(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ye = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Be = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ye).forEach(function(n) {
    Be.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ye[r] = ye[n];
    });
  });
  function vt(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || ye.hasOwnProperty(n) && ye[n] ? ("" + r).trim() : r + "px";
  }
  function Vt(n, r) {
    n = n.style;
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var s = o.indexOf("--") === 0, p = vt(o, r[o], s);
        o === "float" && (o = "cssFloat"), s ? n.setProperty(o, p) : n[o] = p;
      }
  }
  var It = A({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Nn(n, r) {
    if (r) {
      if (It[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(d(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(d(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(d(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(d(62));
    }
  }
  function En(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
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
  var Cr = null;
  function Kt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var kr = null, Yt = null, Wt = null;
  function ei(n) {
    if (n = ks(n)) {
      if (typeof kr != "function")
        throw Error(d(280));
      var r = n.stateNode;
      r && (r = Ye(r), kr(n.stateNode, n.type, r));
    }
  }
  function Na(n) {
    Yt ? Wt ? Wt.push(n) : Wt = [n] : Yt = n;
  }
  function yo() {
    if (Yt) {
      var n = Yt, r = Wt;
      if (Wt = Yt = null, ei(n), r)
        for (n = 0; n < r.length; n++)
          ei(r[n]);
    }
  }
  function su(n, r) {
    return n(r);
  }
  function nl() {
  }
  var Pi = !1;
  function go(n, r, o) {
    if (Pi)
      return n(r, o);
    Pi = !0;
    try {
      return su(n, r, o);
    } finally {
      Pi = !1, (Yt !== null || Wt !== null) && (nl(), yo());
    }
  }
  function ya(n, r) {
    var o = n.stateNode;
    if (o === null)
      return null;
    var s = Ye(o);
    if (s === null)
      return null;
    o = s[r];
    e:
      switch (r) {
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
          (s = !s.disabled) || (n = n.type, s = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !s;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (o && typeof o != "function")
      throw Error(d(231, r, typeof o));
    return o;
  }
  var yi = !1;
  if (D)
    try {
      var ga = {};
      Object.defineProperty(ga, "passive", { get: function() {
        yi = !0;
      } }), window.addEventListener("test", ga, ga), window.removeEventListener("test", ga, ga);
    } catch {
      yi = !1;
    }
  function gi(n, r, o, s, p, h, w, _, z) {
    var G = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, G);
    } catch (le) {
      this.onError(le);
    }
  }
  var Nr = !1, Sa = null, Si = !1, N = null, oe = { onError: function(n) {
    Nr = !0, Sa = n;
  } };
  function ge(n, r, o, s, p, h, w, _, z) {
    Nr = !1, Sa = null, gi.apply(oe, arguments);
  }
  function Oe(n, r, o, s, p, h, w, _, z) {
    if (ge.apply(this, arguments), Nr) {
      if (Nr) {
        var G = Sa;
        Nr = !1, Sa = null;
      } else
        throw Error(d(198));
      Si || (Si = !0, N = G);
    }
  }
  function lt(n) {
    var r = n, o = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (o = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? o : null;
  }
  function _t(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function st(n) {
    if (lt(n) !== n)
      throw Error(d(188));
  }
  function We(n) {
    var r = n.alternate;
    if (!r) {
      if (r = lt(n), r === null)
        throw Error(d(188));
      return r !== n ? null : n;
    }
    for (var o = n, s = r; ; ) {
      var p = o.return;
      if (p === null)
        break;
      var h = p.alternate;
      if (h === null) {
        if (s = p.return, s !== null) {
          o = s;
          continue;
        }
        break;
      }
      if (p.child === h.child) {
        for (h = p.child; h; ) {
          if (h === o)
            return st(p), n;
          if (h === s)
            return st(p), r;
          h = h.sibling;
        }
        throw Error(d(188));
      }
      if (o.return !== s.return)
        o = p, s = h;
      else {
        for (var w = !1, _ = p.child; _; ) {
          if (_ === o) {
            w = !0, o = p, s = h;
            break;
          }
          if (_ === s) {
            w = !0, s = p, o = h;
            break;
          }
          _ = _.sibling;
        }
        if (!w) {
          for (_ = h.child; _; ) {
            if (_ === o) {
              w = !0, o = h, s = p;
              break;
            }
            if (_ === s) {
              w = !0, s = h, o = p;
              break;
            }
            _ = _.sibling;
          }
          if (!w)
            throw Error(d(189));
        }
      }
      if (o.alternate !== s)
        throw Error(d(190));
    }
    if (o.tag !== 3)
      throw Error(d(188));
    return o.stateNode.current === o ? n : r;
  }
  function Un(n) {
    return n = We(n), n !== null ? un(n) : null;
  }
  function un(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = un(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var ln = f.unstable_scheduleCallback, or = f.unstable_cancelCallback, Ei = f.unstable_shouldYield, rl = f.unstable_requestPaint, Lt = f.unstable_now, hd = f.unstable_getCurrentPriorityLevel, ti = f.unstable_ImmediatePriority, mt = f.unstable_UserBlockingPriority, Ci = f.unstable_NormalPriority, So = f.unstable_LowPriority, al = f.unstable_IdlePriority, Eo = null, Jr = null;
  function ps(n) {
    if (Jr && typeof Jr.onCommitFiberRoot == "function")
      try {
        Jr.onCommitFiberRoot(Eo, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Mr = Math.clz32 ? Math.clz32 : wc, vs = Math.log, hs = Math.LN2;
  function wc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (vs(n) / hs | 0) | 0;
  }
  var il = 64, Co = 4194304;
  function ni(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Lr(n, r) {
    var o = n.pendingLanes;
    if (o === 0)
      return 0;
    var s = 0, p = n.suspendedLanes, h = n.pingedLanes, w = o & 268435455;
    if (w !== 0) {
      var _ = w & ~p;
      _ !== 0 ? s = ni(_) : (h &= w, h !== 0 && (s = ni(h)));
    } else
      w = o & ~p, w !== 0 ? s = ni(w) : h !== 0 && (s = ni(h));
    if (s === 0)
      return 0;
    if (r !== 0 && r !== s && !(r & p) && (p = s & -s, h = r & -r, p >= h || p === 16 && (h & 4194240) !== 0))
      return r;
    if (s & 4 && (s |= o & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= s; 0 < r; )
        o = 31 - Mr(r), p = 1 << o, s |= n[o], r &= ~p;
    return s;
  }
  function wo(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
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
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ro(n, r) {
    for (var o = n.suspendedLanes, s = n.pingedLanes, p = n.expirationTimes, h = n.pendingLanes; 0 < h; ) {
      var w = 31 - Mr(h), _ = 1 << w, z = p[w];
      z === -1 ? (!(_ & o) || _ & s) && (p[w] = wo(_, r)) : z <= r && (n.expiredLanes |= _), h &= ~_;
    }
  }
  function bo(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function ol() {
    var n = il;
    return il <<= 1, !(il & 4194240) && (il = 64), n;
  }
  function ul(n) {
    for (var r = [], o = 0; 31 > o; o++)
      r.push(n);
    return r;
  }
  function Hi(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Mr(r), n[r] = o;
  }
  function md(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var s = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var p = 31 - Mr(o), h = 1 << p;
      r[p] = 0, s[p] = -1, n[p] = -1, o &= ~h;
    }
  }
  function wi(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var s = 31 - Mr(o), p = 1 << s;
      p & r | n[s] & r && (n[s] |= r), o &= ~p;
    }
  }
  var jt = 0;
  function ll(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var cu, sl, At, cl, fl, at = !1, fu = [], Cn = null, Zr = null, Ar = null, To = /* @__PURE__ */ new Map(), _n = /* @__PURE__ */ new Map(), qt = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ea(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Cn = null;
        break;
      case "dragenter":
      case "dragleave":
        Zr = null;
        break;
      case "mouseover":
      case "mouseout":
        Ar = null;
        break;
      case "pointerover":
      case "pointerout":
        To.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        _n.delete(r.pointerId);
    }
  }
  function Xn(n, r, o, s, p, h) {
    return n === null || n.nativeEvent !== h ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: s, nativeEvent: h, targetContainers: [p] }, r !== null && (r = ks(r), r !== null && sl(r)), n) : (n.eventSystemFlags |= s, r = n.targetContainers, p !== null && r.indexOf(p) === -1 && r.push(p), n);
  }
  function Ri(n, r, o, s, p) {
    switch (r) {
      case "focusin":
        return Cn = Xn(Cn, n, r, o, s, p), !0;
      case "dragenter":
        return Zr = Xn(Zr, n, r, o, s, p), !0;
      case "mouseover":
        return Ar = Xn(Ar, n, r, o, s, p), !0;
      case "pointerover":
        var h = p.pointerId;
        return To.set(h, Xn(To.get(h) || null, n, r, o, s, p)), !0;
      case "gotpointercapture":
        return h = p.pointerId, _n.set(h, Xn(_n.get(h) || null, n, r, o, s, p)), !0;
    }
    return !1;
  }
  function bc(n) {
    var r = za(n.target);
    if (r !== null) {
      var o = lt(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = _t(o), r !== null) {
            n.blockedOn = r, fl(n.priority, function() {
              At(o);
            });
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Vi(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = pl(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var s = new o.constructor(o.type, o);
        Cr = s, o.target.dispatchEvent(s), Cr = null;
      } else
        return r = ks(o), r !== null && sl(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function _o(n, r, o) {
    Vi(n) && o.delete(r);
  }
  function Tc() {
    at = !1, Cn !== null && Vi(Cn) && (Cn = null), Zr !== null && Vi(Zr) && (Zr = null), Ar !== null && Vi(Ar) && (Ar = null), To.forEach(_o), _n.forEach(_o);
  }
  function Ma(n, r) {
    n.blockedOn === r && (n.blockedOn = null, at || (at = !0, f.unstable_scheduleCallback(f.unstable_NormalPriority, Tc)));
  }
  function xo(n) {
    function r(p) {
      return Ma(p, n);
    }
    if (0 < fu.length) {
      Ma(fu[0], n);
      for (var o = 1; o < fu.length; o++) {
        var s = fu[o];
        s.blockedOn === n && (s.blockedOn = null);
      }
    }
    for (Cn !== null && Ma(Cn, n), Zr !== null && Ma(Zr, n), Ar !== null && Ma(Ar, n), To.forEach(r), _n.forEach(r), o = 0; o < qt.length; o++)
      s = qt[o], s.blockedOn === n && (s.blockedOn = null);
    for (; 0 < qt.length && (o = qt[0], o.blockedOn === null); )
      bc(o), o.blockedOn === null && qt.shift();
  }
  var Do = me.ReactCurrentBatchConfig, La = !0;
  function dl(n, r, o, s) {
    var p = jt, h = Do.transition;
    Do.transition = null;
    try {
      jt = 1, ko(n, r, o, s);
    } finally {
      jt = p, Do.transition = h;
    }
  }
  function Oo(n, r, o, s) {
    var p = jt, h = Do.transition;
    Do.transition = null;
    try {
      jt = 4, ko(n, r, o, s);
    } finally {
      jt = p, Do.transition = h;
    }
  }
  function ko(n, r, o, s) {
    if (La) {
      var p = pl(n, r, o, s);
      if (p === null)
        Ac(n, r, s, du, o), ea(n, s);
      else if (Ri(p, n, r, o, s))
        s.stopPropagation();
      else if (ea(n, s), r & 4 && -1 < Rc.indexOf(n)) {
        for (; p !== null; ) {
          var h = ks(p);
          if (h !== null && cu(h), h = pl(n, r, o, s), h === null && Ac(n, r, s, du, o), h === p)
            break;
          p = h;
        }
        p !== null && s.stopPropagation();
      } else
        Ac(n, r, s, null, o);
    }
  }
  var du = null;
  function pl(n, r, o, s) {
    if (du = null, n = Kt(s), n = za(n), n !== null)
      if (r = lt(n), r === null)
        n = null;
      else if (o = r.tag, o === 13) {
        if (n = _t(r), n !== null)
          return n;
        n = null;
      } else if (o === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return du = n, null;
  }
  function ms(n) {
    switch (n) {
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
        return 1;
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
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (hd()) {
          case ti:
            return 1;
          case mt:
            return 4;
          case Ci:
          case So:
            return 16;
          case al:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ri = null, E = null, k = null;
  function W() {
    if (k)
      return k;
    var n, r = E, o = r.length, s, p = "value" in ri ? ri.value : ri.textContent, h = p.length;
    for (n = 0; n < o && r[n] === p[n]; n++)
      ;
    var w = o - n;
    for (s = 1; s <= w && r[o - s] === p[h - s]; s++)
      ;
    return k = p.slice(n, 1 < s ? 1 - s : void 0);
  }
  function K(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function de() {
    return !0;
  }
  function Ke() {
    return !1;
  }
  function Ce(n) {
    function r(o, s, p, h, w) {
      this._reactName = o, this._targetInst = p, this.type = s, this.nativeEvent = h, this.target = w, this.currentTarget = null;
      for (var _ in n)
        n.hasOwnProperty(_) && (o = n[_], this[_] = o ? o(h) : h[_]);
      return this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1) ? de : Ke, this.isPropagationStopped = Ke, this;
    }
    return A(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = de);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = de);
    }, persist: function() {
    }, isPersistent: de }), r;
  }
  var Qe = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, yt = Ce(Qe), zt = A({}, Qe, { view: 0, detail: 0 }), tn = Ce(zt), Xt, nn, sn, Rt = A({}, zt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Cd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== sn && (sn && n.type === "mousemove" ? (Xt = n.screenX - sn.screenX, nn = n.screenY - sn.screenY) : nn = Xt = 0, sn = n), Xt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : nn;
  } }), Bi = Ce(Rt), vl = A({}, Rt, { dataTransfer: 0 }), ys = Ce(vl), yd = A({}, zt, { relatedTarget: 0 }), ai = Ce(yd), gs = A({}, Qe, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ss = Ce(gs), gd = A({}, Qe, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Jy = Ce(gd), Zy = A({}, Qe, { data: 0 }), Sd = Ce(Zy), Ed = {
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
    MozPrintableKey: "Unidentified"
  }, Pv = {
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
    224: "Meta"
  }, Hv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Vv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Hv[n]) ? !!r[n] : !1;
  }
  function Cd() {
    return Vv;
  }
  var $i = A({}, zt, { key: function(n) {
    if (n.key) {
      var r = Ed[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = K(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Pv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Cd, charCode: function(n) {
    return n.type === "keypress" ? K(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? K(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), eg = Ce($i), wd = A({}, Rt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), _c = Ce(wd), Rd = A({}, zt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Cd }), tg = Ce(Rd), xc = A({}, Qe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Bv = Ce(xc), ta = A({}, Rt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ii = Ce(ta), jn = [9, 13, 27, 32], ii = D && "CompositionEvent" in window, pu = null;
  D && "documentMode" in document && (pu = document.documentMode);
  var Dc = D && "TextEvent" in window && !pu, $v = D && (!ii || pu && 8 < pu && 11 >= pu), hl = " ", Iv = !1;
  function Yv(n, r) {
    switch (n) {
      case "keyup":
        return jn.indexOf(r.keyCode) !== -1;
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
  function Oc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var ml = !1;
  function ng(n, r) {
    switch (n) {
      case "compositionend":
        return Oc(r);
      case "keypress":
        return r.which !== 32 ? null : (Iv = !0, hl);
      case "textInput":
        return n = r.data, n === hl && Iv ? null : n;
      default:
        return null;
    }
  }
  function rg(n, r) {
    if (ml)
      return n === "compositionend" || !ii && Yv(n, r) ? (n = W(), k = E = ri = null, ml = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return $v && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Wv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function qv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Wv[n.type] : r === "textarea";
  }
  function Qv(n, r, o, s) {
    Na(s), r = xs(r, "onChange"), 0 < r.length && (o = new yt("onChange", "change", null, o, s), n.push({ event: o, listeners: r }));
  }
  var Es = null, yl = null;
  function gl(n) {
    Lc(n, 0);
  }
  function Sl(n) {
    var r = Cl(n);
    if (qr(r))
      return n;
  }
  function Gv(n, r) {
    if (n === "change")
      return r;
  }
  var bd = !1;
  if (D) {
    var Td;
    if (D) {
      var _d = "oninput" in document;
      if (!_d) {
        var Kv = document.createElement("div");
        Kv.setAttribute("oninput", "return;"), _d = typeof Kv.oninput == "function";
      }
      Td = _d;
    } else
      Td = !1;
    bd = Td && (!document.documentMode || 9 < document.documentMode);
  }
  function Xv() {
    Es && (Es.detachEvent("onpropertychange", Jv), yl = Es = null);
  }
  function Jv(n) {
    if (n.propertyName === "value" && Sl(yl)) {
      var r = [];
      Qv(r, yl, n, Kt(n)), go(gl, r);
    }
  }
  function ag(n, r, o) {
    n === "focusin" ? (Xv(), Es = r, yl = o, Es.attachEvent("onpropertychange", Jv)) : n === "focusout" && Xv();
  }
  function ig(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Sl(yl);
  }
  function og(n, r) {
    if (n === "click")
      return Sl(r);
  }
  function Zv(n, r) {
    if (n === "input" || n === "change")
      return Sl(r);
  }
  function ug(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Aa = typeof Object.is == "function" ? Object.is : ug;
  function Cs(n, r) {
    if (Aa(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var o = Object.keys(n), s = Object.keys(r);
    if (o.length !== s.length)
      return !1;
    for (s = 0; s < o.length; s++) {
      var p = o[s];
      if (!M.call(r, p) || !Aa(n[p], r[p]))
        return !1;
    }
    return !0;
  }
  function eh(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function th(n, r) {
    var o = eh(n);
    n = 0;
    for (var s; o; ) {
      if (o.nodeType === 3) {
        if (s = n + o.textContent.length, n <= r && s >= r)
          return { node: o, offset: r - n };
        n = s;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = eh(o);
    }
  }
  function nh(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? nh(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function kc() {
    for (var n = window, r = gn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o)
        n = r.contentWindow;
      else
        break;
      r = gn(n.document);
    }
    return r;
  }
  function Yi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Nc(n) {
    var r = kc(), o = n.focusedElem, s = n.selectionRange;
    if (r !== o && o && o.ownerDocument && nh(o.ownerDocument.documentElement, o)) {
      if (s !== null && Yi(o)) {
        if (r = s.start, n = s.end, n === void 0 && (n = r), "selectionStart" in o)
          o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var p = o.textContent.length, h = Math.min(s.start, p);
          s = s.end === void 0 ? h : Math.min(s.end, p), !n.extend && h > s && (p = s, s = h, h = p), p = th(o, h);
          var w = th(
            o,
            s
          );
          p && w && (n.rangeCount !== 1 || n.anchorNode !== p.node || n.anchorOffset !== p.offset || n.focusNode !== w.node || n.focusOffset !== w.offset) && (r = r.createRange(), r.setStart(p.node, p.offset), n.removeAllRanges(), h > s ? (n.addRange(r), n.extend(w.node, w.offset)) : (r.setEnd(w.node, w.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++)
        n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var rh = D && "documentMode" in document && 11 >= document.documentMode, oi = null, xd = null, ws = null, Dd = !1;
  function ah(n, r, o) {
    var s = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Dd || oi == null || oi !== gn(s) || (s = oi, "selectionStart" in s && Yi(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), ws && Cs(ws, s) || (ws = s, s = xs(xd, "onSelect"), 0 < s.length && (r = new yt("onSelect", "select", null, r, o), n.push({ event: r, listeners: s }), r.target = oi)));
  }
  function Mc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var vu = { animationend: Mc("Animation", "AnimationEnd"), animationiteration: Mc("Animation", "AnimationIteration"), animationstart: Mc("Animation", "AnimationStart"), transitionend: Mc("Transition", "TransitionEnd") }, Od = {}, kd = {};
  D && (kd = document.createElement("div").style, "AnimationEvent" in window || (delete vu.animationend.animation, delete vu.animationiteration.animation, delete vu.animationstart.animation), "TransitionEvent" in window || delete vu.transitionend.transition);
  function Jn(n) {
    if (Od[n])
      return Od[n];
    if (!vu[n])
      return n;
    var r = vu[n], o;
    for (o in r)
      if (r.hasOwnProperty(o) && o in kd)
        return Od[n] = r[o];
    return n;
  }
  var Nd = Jn("animationend"), ih = Jn("animationiteration"), oh = Jn("animationstart"), uh = Jn("transitionend"), lh = /* @__PURE__ */ new Map(), sh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Wi(n, r) {
    lh.set(n, r), R(r, [n]);
  }
  for (var Rs = 0; Rs < sh.length; Rs++) {
    var hu = sh[Rs], lg = hu.toLowerCase(), bs = hu[0].toUpperCase() + hu.slice(1);
    Wi(lg, "on" + bs);
  }
  Wi(Nd, "onAnimationEnd"), Wi(ih, "onAnimationIteration"), Wi(oh, "onAnimationStart"), Wi("dblclick", "onDoubleClick"), Wi("focusin", "onFocus"), Wi("focusout", "onBlur"), Wi(uh, "onTransitionEnd"), y("onMouseEnter", ["mouseout", "mouseover"]), y("onMouseLeave", ["mouseout", "mouseover"]), y("onPointerEnter", ["pointerout", "pointerover"]), y("onPointerLeave", ["pointerout", "pointerover"]), R("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), R("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), R("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), R("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), R("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), R("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ts = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), sg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ts));
  function ch(n, r, o) {
    var s = n.type || "unknown-event";
    n.currentTarget = o, Oe(s, r, void 0, n), n.currentTarget = null;
  }
  function Lc(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var s = n[o], p = s.event;
      s = s.listeners;
      e: {
        var h = void 0;
        if (r)
          for (var w = s.length - 1; 0 <= w; w--) {
            var _ = s[w], z = _.instance, G = _.currentTarget;
            if (_ = _.listener, z !== h && p.isPropagationStopped())
              break e;
            ch(p, _, G), h = z;
          }
        else
          for (w = 0; w < s.length; w++) {
            if (_ = s[w], z = _.instance, G = _.currentTarget, _ = _.listener, z !== h && p.isPropagationStopped())
              break e;
            ch(p, _, G), h = z;
          }
      }
    }
    if (Si)
      throw n = N, Si = !1, N = null, n;
  }
  function rn(n, r) {
    var o = r[Fd];
    o === void 0 && (o = r[Fd] = /* @__PURE__ */ new Set());
    var s = n + "__bubble";
    o.has(s) || (fh(r, n, 2, !1), o.add(s));
  }
  function No(n, r, o) {
    var s = 0;
    r && (s |= 4), fh(o, n, s, r);
  }
  var qi = "_reactListening" + Math.random().toString(36).slice(2);
  function El(n) {
    if (!n[qi]) {
      n[qi] = !0, m.forEach(function(o) {
        o !== "selectionchange" && (sg.has(o) || No(o, !1, n), No(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[qi] || (r[qi] = !0, No("selectionchange", !1, r));
    }
  }
  function fh(n, r, o, s) {
    switch (ms(r)) {
      case 1:
        var p = dl;
        break;
      case 4:
        p = Oo;
        break;
      default:
        p = ko;
    }
    o = p.bind(null, r, o, n), p = void 0, !yi || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (p = !0), s ? p !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: p }) : n.addEventListener(r, o, !0) : p !== void 0 ? n.addEventListener(r, o, { passive: p }) : n.addEventListener(r, o, !1);
  }
  function Ac(n, r, o, s, p) {
    var h = s;
    if (!(r & 1) && !(r & 2) && s !== null)
      e:
        for (; ; ) {
          if (s === null)
            return;
          var w = s.tag;
          if (w === 3 || w === 4) {
            var _ = s.stateNode.containerInfo;
            if (_ === p || _.nodeType === 8 && _.parentNode === p)
              break;
            if (w === 4)
              for (w = s.return; w !== null; ) {
                var z = w.tag;
                if ((z === 3 || z === 4) && (z = w.stateNode.containerInfo, z === p || z.nodeType === 8 && z.parentNode === p))
                  return;
                w = w.return;
              }
            for (; _ !== null; ) {
              if (w = za(_), w === null)
                return;
              if (z = w.tag, z === 5 || z === 6) {
                s = h = w;
                continue e;
              }
              _ = _.parentNode;
            }
          }
          s = s.return;
        }
    go(function() {
      var G = h, le = Kt(o), se = [];
      e: {
        var ue = lh.get(n);
        if (ue !== void 0) {
          var xe = yt, Ae = n;
          switch (n) {
            case "keypress":
              if (K(o) === 0)
                break e;
            case "keydown":
            case "keyup":
              xe = eg;
              break;
            case "focusin":
              Ae = "focus", xe = ai;
              break;
            case "focusout":
              Ae = "blur", xe = ai;
              break;
            case "beforeblur":
            case "afterblur":
              xe = ai;
              break;
            case "click":
              if (o.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              xe = Bi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              xe = ys;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              xe = tg;
              break;
            case Nd:
            case ih:
            case oh:
              xe = Ss;
              break;
            case uh:
              xe = Bv;
              break;
            case "scroll":
              xe = tn;
              break;
            case "wheel":
              xe = Ii;
              break;
            case "copy":
            case "cut":
            case "paste":
              xe = Jy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              xe = _c;
          }
          var je = (r & 4) !== 0, Ln = !je && n === "scroll", H = je ? ue !== null ? ue + "Capture" : null : ue;
          je = [];
          for (var j = G, $; j !== null; ) {
            $ = j;
            var pe = $.stateNode;
            if ($.tag === 5 && pe !== null && ($ = pe, H !== null && (pe = ya(j, H), pe != null && je.push(_s(j, pe, $)))), Ln)
              break;
            j = j.return;
          }
          0 < je.length && (ue = new xe(ue, Ae, null, o, le), se.push({ event: ue, listeners: je }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ue = n === "mouseover" || n === "pointerover", xe = n === "mouseout" || n === "pointerout", ue && o !== Cr && (Ae = o.relatedTarget || o.fromElement) && (za(Ae) || Ae[Qi]))
            break e;
          if ((xe || ue) && (ue = le.window === le ? le : (ue = le.ownerDocument) ? ue.defaultView || ue.parentWindow : window, xe ? (Ae = o.relatedTarget || o.toElement, xe = G, Ae = Ae ? za(Ae) : null, Ae !== null && (Ln = lt(Ae), Ae !== Ln || Ae.tag !== 5 && Ae.tag !== 6) && (Ae = null)) : (xe = null, Ae = G), xe !== Ae)) {
            if (je = Bi, pe = "onMouseLeave", H = "onMouseEnter", j = "mouse", (n === "pointerout" || n === "pointerover") && (je = _c, pe = "onPointerLeave", H = "onPointerEnter", j = "pointer"), Ln = xe == null ? ue : Cl(xe), $ = Ae == null ? ue : Cl(Ae), ue = new je(pe, j + "leave", xe, o, le), ue.target = Ln, ue.relatedTarget = $, pe = null, za(le) === G && (je = new je(H, j + "enter", Ae, o, le), je.target = $, je.relatedTarget = Ln, pe = je), Ln = pe, xe && Ae)
              t: {
                for (je = xe, H = Ae, j = 0, $ = je; $; $ = mu($))
                  j++;
                for ($ = 0, pe = H; pe; pe = mu(pe))
                  $++;
                for (; 0 < j - $; )
                  je = mu(je), j--;
                for (; 0 < $ - j; )
                  H = mu(H), $--;
                for (; j--; ) {
                  if (je === H || H !== null && je === H.alternate)
                    break t;
                  je = mu(je), H = mu(H);
                }
                je = null;
              }
            else
              je = null;
            xe !== null && Md(se, ue, xe, je, !1), Ae !== null && Ln !== null && Md(se, Ln, Ae, je, !0);
          }
        }
        e: {
          if (ue = G ? Cl(G) : window, xe = ue.nodeName && ue.nodeName.toLowerCase(), xe === "select" || xe === "input" && ue.type === "file")
            var Fe = Gv;
          else if (qv(ue))
            if (bd)
              Fe = Zv;
            else {
              Fe = ig;
              var ze = ag;
            }
          else
            (xe = ue.nodeName) && xe.toLowerCase() === "input" && (ue.type === "checkbox" || ue.type === "radio") && (Fe = og);
          if (Fe && (Fe = Fe(n, G))) {
            Qv(se, Fe, o, le);
            break e;
          }
          ze && ze(n, ue, G), n === "focusout" && (ze = ue._wrapperState) && ze.controlled && ue.type === "number" && Gr(ue, "number", ue.value);
        }
        switch (ze = G ? Cl(G) : window, n) {
          case "focusin":
            (qv(ze) || ze.contentEditable === "true") && (oi = ze, xd = G, ws = null);
            break;
          case "focusout":
            ws = xd = oi = null;
            break;
          case "mousedown":
            Dd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Dd = !1, ah(se, o, le);
            break;
          case "selectionchange":
            if (rh)
              break;
          case "keydown":
          case "keyup":
            ah(se, o, le);
        }
        var $e;
        if (ii)
          e: {
            switch (n) {
              case "compositionstart":
                var nt = "onCompositionStart";
                break e;
              case "compositionend":
                nt = "onCompositionEnd";
                break e;
              case "compositionupdate":
                nt = "onCompositionUpdate";
                break e;
            }
            nt = void 0;
          }
        else
          ml ? Yv(n, o) && (nt = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (nt = "onCompositionStart");
        nt && ($v && o.locale !== "ko" && (ml || nt !== "onCompositionStart" ? nt === "onCompositionEnd" && ml && ($e = W()) : (ri = le, E = "value" in ri ? ri.value : ri.textContent, ml = !0)), ze = xs(G, nt), 0 < ze.length && (nt = new Sd(nt, n, null, o, le), se.push({ event: nt, listeners: ze }), $e ? nt.data = $e : ($e = Oc(o), $e !== null && (nt.data = $e)))), ($e = Dc ? ng(n, o) : rg(n, o)) && (G = xs(G, "onBeforeInput"), 0 < G.length && (le = new Sd("onBeforeInput", "beforeinput", null, o, le), se.push({ event: le, listeners: G }), le.data = $e));
      }
      Lc(se, r);
    });
  }
  function _s(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function xs(n, r) {
    for (var o = r + "Capture", s = []; n !== null; ) {
      var p = n, h = p.stateNode;
      p.tag === 5 && h !== null && (p = h, h = ya(n, o), h != null && s.unshift(_s(n, h, p)), h = ya(n, r), h != null && s.push(_s(n, h, p))), n = n.return;
    }
    return s;
  }
  function mu(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Md(n, r, o, s, p) {
    for (var h = r._reactName, w = []; o !== null && o !== s; ) {
      var _ = o, z = _.alternate, G = _.stateNode;
      if (z !== null && z === s)
        break;
      _.tag === 5 && G !== null && (_ = G, p ? (z = ya(o, h), z != null && w.unshift(_s(o, z, _))) : p || (z = ya(o, h), z != null && w.push(_s(o, z, _)))), o = o.return;
    }
    w.length !== 0 && n.push({ event: r, listeners: w });
  }
  var Ld = /\r\n?/g, cg = /\u0000|\uFFFD/g;
  function Ad(n) {
    return (typeof n == "string" ? n : "" + n).replace(Ld, `
`).replace(cg, "");
  }
  function zc(n, r, o) {
    if (r = Ad(r), Ad(n) !== r && o)
      throw Error(d(425));
  }
  function Uc() {
  }
  var zd = null, yu = null;
  function Ds(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var gu = typeof setTimeout == "function" ? setTimeout : void 0, dh = typeof clearTimeout == "function" ? clearTimeout : void 0, Ud = typeof Promise == "function" ? Promise : void 0, jd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ud < "u" ? function(n) {
    return Ud.resolve(null).then(n).catch(fg);
  } : gu;
  function fg(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Mo(n, r) {
    var o = r, s = 0;
    do {
      var p = o.nextSibling;
      if (n.removeChild(o), p && p.nodeType === 8)
        if (o = p.data, o === "/$") {
          if (s === 0) {
            n.removeChild(p), xo(r);
            return;
          }
          s--;
        } else
          o !== "$" && o !== "$?" && o !== "$!" || s++;
      o = p;
    } while (o);
    xo(r);
  }
  function ui(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function Os(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          o === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Lo = Math.random().toString(36).slice(2), bi = "__reactFiber$" + Lo, Su = "__reactProps$" + Lo, Qi = "__reactContainer$" + Lo, Fd = "__reactEvents$" + Lo, dg = "__reactListeners$" + Lo, Pd = "__reactHandles$" + Lo;
  function za(n) {
    var r = n[bi];
    if (r)
      return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[Qi] || o[bi]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null)
          for (n = Os(n); n !== null; ) {
            if (o = n[bi])
              return o;
            n = Os(n);
          }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function ks(n) {
    return n = n[bi] || n[Qi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Cl(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(d(33));
  }
  function Ye(n) {
    return n[Su] || null;
  }
  var Ao = [], cn = -1;
  function ct(n) {
    return { current: n };
  }
  function Bt(n) {
    0 > cn || (n.current = Ao[cn], Ao[cn] = null, cn--);
  }
  function Qt(n, r) {
    cn++, Ao[cn] = n.current, n.current = r;
  }
  var Ti = {}, tt = ct(Ti), xn = ct(!1), na = Ti;
  function Ua(n, r) {
    var o = n.type.contextTypes;
    if (!o)
      return Ti;
    var s = n.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === r)
      return s.__reactInternalMemoizedMaskedChildContext;
    var p = {}, h;
    for (h in o)
      p[h] = r[h];
    return s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = p), p;
  }
  function mn(n) {
    return n = n.childContextTypes, n != null;
  }
  function ja() {
    Bt(xn), Bt(tt);
  }
  function zo(n, r, o) {
    if (tt.current !== Ti)
      throw Error(d(168));
    Qt(tt, r), Qt(xn, o);
  }
  function Ns(n, r, o) {
    var s = n.stateNode;
    if (r = r.childContextTypes, typeof s.getChildContext != "function")
      return o;
    s = s.getChildContext();
    for (var p in s)
      if (!(p in r))
        throw Error(d(108, Et(n) || "Unknown", p));
    return A({}, o, s);
  }
  function jc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ti, na = tt.current, Qt(tt, n), Qt(xn, xn.current), !0;
  }
  function ph(n, r, o) {
    var s = n.stateNode;
    if (!s)
      throw Error(d(169));
    o ? (n = Ns(n, r, na), s.__reactInternalMemoizedMergedChildContext = n, Bt(xn), Bt(tt), Qt(tt, n)) : Bt(xn), Qt(xn, o);
  }
  var Ea = null, Zn = !1, Ms = !1;
  function Hd(n) {
    Ea === null ? Ea = [n] : Ea.push(n);
  }
  function Vd(n) {
    Zn = !0, Hd(n);
  }
  function ra() {
    if (!Ms && Ea !== null) {
      Ms = !0;
      var n = 0, r = jt;
      try {
        var o = Ea;
        for (jt = 1; n < o.length; n++) {
          var s = o[n];
          do
            s = s(!0);
          while (s !== null);
        }
        Ea = null, Zn = !1;
      } catch (p) {
        throw Ea !== null && (Ea = Ea.slice(n + 1)), ln(ti, ra), p;
      } finally {
        jt = r, Ms = !1;
      }
    }
    return null;
  }
  var Uo = [], aa = 0, Eu = null, wl = 0, ia = [], wr = 0, Fa = null, ur = 1, Gi = "";
  function Ca(n, r) {
    Uo[aa++] = wl, Uo[aa++] = Eu, Eu = n, wl = r;
  }
  function Bd(n, r, o) {
    ia[wr++] = ur, ia[wr++] = Gi, ia[wr++] = Fa, Fa = n;
    var s = ur;
    n = Gi;
    var p = 32 - Mr(s) - 1;
    s &= ~(1 << p), o += 1;
    var h = 32 - Mr(r) + p;
    if (30 < h) {
      var w = p - p % 5;
      h = (s & (1 << w) - 1).toString(32), s >>= w, p -= w, ur = 1 << 32 - Mr(r) + p | o << p | s, Gi = h + n;
    } else
      ur = 1 << h | o << p | s, Gi = n;
  }
  function Fc(n) {
    n.return !== null && (Ca(n, 1), Bd(n, 1, 0));
  }
  function $d(n) {
    for (; n === Eu; )
      Eu = Uo[--aa], Uo[aa] = null, wl = Uo[--aa], Uo[aa] = null;
    for (; n === Fa; )
      Fa = ia[--wr], ia[wr] = null, Gi = ia[--wr], ia[wr] = null, ur = ia[--wr], ia[wr] = null;
  }
  var wa = null, oa = null, fn = !1, Pa = null;
  function Id(n, r) {
    var o = Ya(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function vh(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, wa = n, oa = ui(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, wa = n, oa = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = Fa !== null ? { id: ur, overflow: Gi } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = Ya(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, wa = n, oa = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Pc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Hc(n) {
    if (fn) {
      var r = oa;
      if (r) {
        var o = r;
        if (!vh(n, r)) {
          if (Pc(n))
            throw Error(d(418));
          r = ui(o.nextSibling);
          var s = wa;
          r && vh(n, r) ? Id(s, o) : (n.flags = n.flags & -4097 | 2, fn = !1, wa = n);
        }
      } else {
        if (Pc(n))
          throw Error(d(418));
        n.flags = n.flags & -4097 | 2, fn = !1, wa = n;
      }
    }
  }
  function hh(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    wa = n;
  }
  function Vc(n) {
    if (n !== wa)
      return !1;
    if (!fn)
      return hh(n), fn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Ds(n.type, n.memoizedProps)), r && (r = oa)) {
      if (Pc(n))
        throw mh(), Error(d(418));
      for (; r; )
        Id(n, r), r = ui(r.nextSibling);
    }
    if (hh(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(d(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                oa = ui(n.nextSibling);
                break e;
              }
              r--;
            } else
              o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        oa = null;
      }
    } else
      oa = wa ? ui(n.stateNode.nextSibling) : null;
    return !0;
  }
  function mh() {
    for (var n = oa; n; )
      n = ui(n.nextSibling);
  }
  function wn() {
    oa = wa = null, fn = !1;
  }
  function Yd(n) {
    Pa === null ? Pa = [n] : Pa.push(n);
  }
  var Bc = me.ReactCurrentBatchConfig;
  function Ra(n, r) {
    if (n && n.defaultProps) {
      r = A({}, r), n = n.defaultProps;
      for (var o in n)
        r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  var _i = ct(null), $c = null, jo = null, Wd = null;
  function qd() {
    Wd = jo = $c = null;
  }
  function Fo(n) {
    var r = _i.current;
    Bt(_i), n._currentValue = r;
  }
  function er(n, r, o) {
    for (; n !== null; ) {
      var s = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, s !== null && (s.childLanes |= r)) : s !== null && (s.childLanes & r) !== r && (s.childLanes |= r), n === o)
        break;
      n = n.return;
    }
  }
  function Se(n, r) {
    $c = n, Wd = jo = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Fn = !0), n.firstContext = null);
  }
  function Mn(n) {
    var r = n._currentValue;
    if (Wd !== n)
      if (n = { context: n, memoizedValue: r, next: null }, jo === null) {
        if ($c === null)
          throw Error(d(308));
        jo = n, $c.dependencies = { lanes: 0, firstContext: n };
      } else
        jo = jo.next = n;
    return r;
  }
  var lr = null;
  function Qd(n) {
    lr === null ? lr = [n] : lr.push(n);
  }
  function yh(n, r, o, s) {
    var p = r.interleaved;
    return p === null ? (o.next = o, Qd(r)) : (o.next = p.next, p.next = o), r.interleaved = o, Ki(n, s);
  }
  function Ki(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; )
      n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var Po = !1;
  function Gd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function $n(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Xi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ho(n, r, o) {
    var s = n.updateQueue;
    if (s === null)
      return null;
    if (s = s.shared, Ct & 2) {
      var p = s.pending;
      return p === null ? r.next = r : (r.next = p.next, p.next = r), s.pending = r, Ki(n, o);
    }
    return p = s.interleaved, p === null ? (r.next = r, Qd(s)) : (r.next = p.next, p.next = r), s.interleaved = r, Ki(n, o);
  }
  function Ic(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var s = r.lanes;
      s &= n.pendingLanes, o |= s, r.lanes = o, wi(n, o);
    }
  }
  function Kd(n, r) {
    var o = n.updateQueue, s = n.alternate;
    if (s !== null && (s = s.updateQueue, o === s)) {
      var p = null, h = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var w = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          h === null ? p = h = w : h = h.next = w, o = o.next;
        } while (o !== null);
        h === null ? p = h = r : h = h.next = r;
      } else
        p = h = r;
      o = { baseState: s.baseState, firstBaseUpdate: p, lastBaseUpdate: h, shared: s.shared, effects: s.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function Vo(n, r, o, s) {
    var p = n.updateQueue;
    Po = !1;
    var h = p.firstBaseUpdate, w = p.lastBaseUpdate, _ = p.shared.pending;
    if (_ !== null) {
      p.shared.pending = null;
      var z = _, G = z.next;
      z.next = null, w === null ? h = G : w.next = G, w = z;
      var le = n.alternate;
      le !== null && (le = le.updateQueue, _ = le.lastBaseUpdate, _ !== w && (_ === null ? le.firstBaseUpdate = G : _.next = G, le.lastBaseUpdate = z));
    }
    if (h !== null) {
      var se = p.baseState;
      w = 0, le = G = z = null, _ = h;
      do {
        var ue = _.lane, xe = _.eventTime;
        if ((s & ue) === ue) {
          le !== null && (le = le.next = {
            eventTime: xe,
            lane: 0,
            tag: _.tag,
            payload: _.payload,
            callback: _.callback,
            next: null
          });
          e: {
            var Ae = n, je = _;
            switch (ue = r, xe = o, je.tag) {
              case 1:
                if (Ae = je.payload, typeof Ae == "function") {
                  se = Ae.call(xe, se, ue);
                  break e;
                }
                se = Ae;
                break e;
              case 3:
                Ae.flags = Ae.flags & -65537 | 128;
              case 0:
                if (Ae = je.payload, ue = typeof Ae == "function" ? Ae.call(xe, se, ue) : Ae, ue == null)
                  break e;
                se = A({}, se, ue);
                break e;
              case 2:
                Po = !0;
            }
          }
          _.callback !== null && _.lane !== 0 && (n.flags |= 64, ue = p.effects, ue === null ? p.effects = [_] : ue.push(_));
        } else
          xe = { eventTime: xe, lane: ue, tag: _.tag, payload: _.payload, callback: _.callback, next: null }, le === null ? (G = le = xe, z = se) : le = le.next = xe, w |= ue;
        if (_ = _.next, _ === null) {
          if (_ = p.shared.pending, _ === null)
            break;
          ue = _, _ = ue.next, ue.next = null, p.lastBaseUpdate = ue, p.shared.pending = null;
        }
      } while (!0);
      if (le === null && (z = se), p.baseState = z, p.firstBaseUpdate = G, p.lastBaseUpdate = le, r = p.shared.interleaved, r !== null) {
        p = r;
        do
          w |= p.lane, p = p.next;
        while (p !== r);
      } else
        h === null && (p.shared.lanes = 0);
      to |= w, n.lanes = w, n.memoizedState = se;
    }
  }
  function Cu(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var s = n[r], p = s.callback;
        if (p !== null) {
          if (s.callback = null, s = o, typeof p != "function")
            throw Error(d(191, p));
          p.call(s);
        }
      }
  }
  var gh = new l.Component().refs;
  function Xd(n, r, o, s) {
    r = n.memoizedState, o = o(s, r), o = o == null ? r : A({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var Yc = { isMounted: function(n) {
    return (n = n._reactInternals) ? lt(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var s = _r(), p = Pn(n), h = Xi(s, p);
    h.payload = r, o != null && (h.callback = o), r = Ho(n, h, p), r !== null && (xr(r, n, p, s), Ic(r, n, p));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var s = _r(), p = Pn(n), h = Xi(s, p);
    h.tag = 1, h.payload = r, o != null && (h.callback = o), r = Ho(n, h, p), r !== null && (xr(r, n, p, s), Ic(r, n, p));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = _r(), s = Pn(n), p = Xi(o, s);
    p.tag = 2, r != null && (p.callback = r), r = Ho(n, p, s), r !== null && (xr(r, n, s, o), Ic(r, n, s));
  } };
  function Sh(n, r, o, s, p, h, w) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(s, h, w) : r.prototype && r.prototype.isPureReactComponent ? !Cs(o, s) || !Cs(p, h) : !0;
  }
  function Eh(n, r, o) {
    var s = !1, p = Ti, h = r.contextType;
    return typeof h == "object" && h !== null ? h = Mn(h) : (p = mn(r) ? na : tt.current, s = r.contextTypes, h = (s = s != null) ? Ua(n, p) : Ti), r = new r(o, h), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Yc, n.stateNode = r, r._reactInternals = n, s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = p, n.__reactInternalMemoizedMaskedChildContext = h), r;
  }
  function Ch(n, r, o, s) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, s), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, s), r.state !== n && Yc.enqueueReplaceState(r, r.state, null);
  }
  function Wc(n, r, o, s) {
    var p = n.stateNode;
    p.props = o, p.state = n.memoizedState, p.refs = gh, Gd(n);
    var h = r.contextType;
    typeof h == "object" && h !== null ? p.context = Mn(h) : (h = mn(r) ? na : tt.current, p.context = Ua(n, h)), p.state = n.memoizedState, h = r.getDerivedStateFromProps, typeof h == "function" && (Xd(n, r, h, o), p.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (r = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), r !== p.state && Yc.enqueueReplaceState(p, p.state, null), Vo(n, o, p, s), p.state = n.memoizedState), typeof p.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Rl(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1)
            throw Error(d(309));
          var s = o.stateNode;
        }
        if (!s)
          throw Error(d(147, n));
        var p = s, h = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === h ? r.ref : (r = function(w) {
          var _ = p.refs;
          _ === gh && (_ = p.refs = {}), w === null ? delete _[h] : _[h] = w;
        }, r._stringRef = h, r);
      }
      if (typeof n != "string")
        throw Error(d(284));
      if (!o._owner)
        throw Error(d(290, n));
    }
    return n;
  }
  function qc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(d(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function wh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Rh(n) {
    function r(H, j) {
      if (n) {
        var $ = H.deletions;
        $ === null ? (H.deletions = [j], H.flags |= 16) : $.push(j);
      }
    }
    function o(H, j) {
      if (!n)
        return null;
      for (; j !== null; )
        r(H, j), j = j.sibling;
      return null;
    }
    function s(H, j) {
      for (H = /* @__PURE__ */ new Map(); j !== null; )
        j.key !== null ? H.set(j.key, j) : H.set(j.index, j), j = j.sibling;
      return H;
    }
    function p(H, j) {
      return H = Go(H, j), H.index = 0, H.sibling = null, H;
    }
    function h(H, j, $) {
      return H.index = $, n ? ($ = H.alternate, $ !== null ? ($ = $.index, $ < j ? (H.flags |= 2, j) : $) : (H.flags |= 2, j)) : (H.flags |= 1048576, j);
    }
    function w(H) {
      return n && H.alternate === null && (H.flags |= 2), H;
    }
    function _(H, j, $, pe) {
      return j === null || j.tag !== 6 ? (j = Xs($, H.mode, pe), j.return = H, j) : (j = p(j, $), j.return = H, j);
    }
    function z(H, j, $, pe) {
      var Fe = $.type;
      return Fe === _e ? le(H, j, $.props.children, pe, $.key) : j !== null && (j.elementType === Fe || typeof Fe == "object" && Fe !== null && Fe.$$typeof === St && wh(Fe) === j.type) ? (pe = p(j, $.props), pe.ref = Rl(H, j, $), pe.return = H, pe) : (pe = _f($.type, $.key, $.props, null, H.mode, pe), pe.ref = Rl(H, j, $), pe.return = H, pe);
    }
    function G(H, j, $, pe) {
      return j === null || j.tag !== 4 || j.stateNode.containerInfo !== $.containerInfo || j.stateNode.implementation !== $.implementation ? (j = Hu($, H.mode, pe), j.return = H, j) : (j = p(j, $.children || []), j.return = H, j);
    }
    function le(H, j, $, pe, Fe) {
      return j === null || j.tag !== 7 ? (j = Pu($, H.mode, pe, Fe), j.return = H, j) : (j = p(j, $), j.return = H, j);
    }
    function se(H, j, $) {
      if (typeof j == "string" && j !== "" || typeof j == "number")
        return j = Xs("" + j, H.mode, $), j.return = H, j;
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case fe:
            return $ = _f(j.type, j.key, j.props, null, H.mode, $), $.ref = Rl(H, null, j), $.return = H, $;
          case Re:
            return j = Hu(j, H.mode, $), j.return = H, j;
          case St:
            var pe = j._init;
            return se(H, pe(j._payload), $);
        }
        if (Kn(j) || Ve(j))
          return j = Pu(j, H.mode, $, null), j.return = H, j;
        qc(H, j);
      }
      return null;
    }
    function ue(H, j, $, pe) {
      var Fe = j !== null ? j.key : null;
      if (typeof $ == "string" && $ !== "" || typeof $ == "number")
        return Fe !== null ? null : _(H, j, "" + $, pe);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case fe:
            return $.key === Fe ? z(H, j, $, pe) : null;
          case Re:
            return $.key === Fe ? G(H, j, $, pe) : null;
          case St:
            return Fe = $._init, ue(
              H,
              j,
              Fe($._payload),
              pe
            );
        }
        if (Kn($) || Ve($))
          return Fe !== null ? null : le(H, j, $, pe, null);
        qc(H, $);
      }
      return null;
    }
    function xe(H, j, $, pe, Fe) {
      if (typeof pe == "string" && pe !== "" || typeof pe == "number")
        return H = H.get($) || null, _(j, H, "" + pe, Fe);
      if (typeof pe == "object" && pe !== null) {
        switch (pe.$$typeof) {
          case fe:
            return H = H.get(pe.key === null ? $ : pe.key) || null, z(j, H, pe, Fe);
          case Re:
            return H = H.get(pe.key === null ? $ : pe.key) || null, G(j, H, pe, Fe);
          case St:
            var ze = pe._init;
            return xe(H, j, $, ze(pe._payload), Fe);
        }
        if (Kn(pe) || Ve(pe))
          return H = H.get($) || null, le(j, H, pe, Fe, null);
        qc(j, pe);
      }
      return null;
    }
    function Ae(H, j, $, pe) {
      for (var Fe = null, ze = null, $e = j, nt = j = 0, rr = null; $e !== null && nt < $.length; nt++) {
        $e.index > nt ? (rr = $e, $e = null) : rr = $e.sibling;
        var Ut = ue(H, $e, $[nt], pe);
        if (Ut === null) {
          $e === null && ($e = rr);
          break;
        }
        n && $e && Ut.alternate === null && r(H, $e), j = h(Ut, j, nt), ze === null ? Fe = Ut : ze.sibling = Ut, ze = Ut, $e = rr;
      }
      if (nt === $.length)
        return o(H, $e), fn && Ca(H, nt), Fe;
      if ($e === null) {
        for (; nt < $.length; nt++)
          $e = se(H, $[nt], pe), $e !== null && (j = h($e, j, nt), ze === null ? Fe = $e : ze.sibling = $e, ze = $e);
        return fn && Ca(H, nt), Fe;
      }
      for ($e = s(H, $e); nt < $.length; nt++)
        rr = xe($e, H, nt, $[nt], pe), rr !== null && (n && rr.alternate !== null && $e.delete(rr.key === null ? nt : rr.key), j = h(rr, j, nt), ze === null ? Fe = rr : ze.sibling = rr, ze = rr);
      return n && $e.forEach(function(Ko) {
        return r(H, Ko);
      }), fn && Ca(H, nt), Fe;
    }
    function je(H, j, $, pe) {
      var Fe = Ve($);
      if (typeof Fe != "function")
        throw Error(d(150));
      if ($ = Fe.call($), $ == null)
        throw Error(d(151));
      for (var ze = Fe = null, $e = j, nt = j = 0, rr = null, Ut = $.next(); $e !== null && !Ut.done; nt++, Ut = $.next()) {
        $e.index > nt ? (rr = $e, $e = null) : rr = $e.sibling;
        var Ko = ue(H, $e, Ut.value, pe);
        if (Ko === null) {
          $e === null && ($e = rr);
          break;
        }
        n && $e && Ko.alternate === null && r(H, $e), j = h(Ko, j, nt), ze === null ? Fe = Ko : ze.sibling = Ko, ze = Ko, $e = rr;
      }
      if (Ut.done)
        return o(
          H,
          $e
        ), fn && Ca(H, nt), Fe;
      if ($e === null) {
        for (; !Ut.done; nt++, Ut = $.next())
          Ut = se(H, Ut.value, pe), Ut !== null && (j = h(Ut, j, nt), ze === null ? Fe = Ut : ze.sibling = Ut, ze = Ut);
        return fn && Ca(H, nt), Fe;
      }
      for ($e = s(H, $e); !Ut.done; nt++, Ut = $.next())
        Ut = xe($e, H, nt, Ut.value, pe), Ut !== null && (n && Ut.alternate !== null && $e.delete(Ut.key === null ? nt : Ut.key), j = h(Ut, j, nt), ze === null ? Fe = Ut : ze.sibling = Ut, ze = Ut);
      return n && $e.forEach(function(Mg) {
        return r(H, Mg);
      }), fn && Ca(H, nt), Fe;
    }
    function Ln(H, j, $, pe) {
      if (typeof $ == "object" && $ !== null && $.type === _e && $.key === null && ($ = $.props.children), typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case fe:
            e: {
              for (var Fe = $.key, ze = j; ze !== null; ) {
                if (ze.key === Fe) {
                  if (Fe = $.type, Fe === _e) {
                    if (ze.tag === 7) {
                      o(H, ze.sibling), j = p(ze, $.props.children), j.return = H, H = j;
                      break e;
                    }
                  } else if (ze.elementType === Fe || typeof Fe == "object" && Fe !== null && Fe.$$typeof === St && wh(Fe) === ze.type) {
                    o(H, ze.sibling), j = p(ze, $.props), j.ref = Rl(H, ze, $), j.return = H, H = j;
                    break e;
                  }
                  o(H, ze);
                  break;
                } else
                  r(H, ze);
                ze = ze.sibling;
              }
              $.type === _e ? (j = Pu($.props.children, H.mode, pe, $.key), j.return = H, H = j) : (pe = _f($.type, $.key, $.props, null, H.mode, pe), pe.ref = Rl(H, j, $), pe.return = H, H = pe);
            }
            return w(H);
          case Re:
            e: {
              for (ze = $.key; j !== null; ) {
                if (j.key === ze)
                  if (j.tag === 4 && j.stateNode.containerInfo === $.containerInfo && j.stateNode.implementation === $.implementation) {
                    o(H, j.sibling), j = p(j, $.children || []), j.return = H, H = j;
                    break e;
                  } else {
                    o(H, j);
                    break;
                  }
                else
                  r(H, j);
                j = j.sibling;
              }
              j = Hu($, H.mode, pe), j.return = H, H = j;
            }
            return w(H);
          case St:
            return ze = $._init, Ln(H, j, ze($._payload), pe);
        }
        if (Kn($))
          return Ae(H, j, $, pe);
        if (Ve($))
          return je(H, j, $, pe);
        qc(H, $);
      }
      return typeof $ == "string" && $ !== "" || typeof $ == "number" ? ($ = "" + $, j !== null && j.tag === 6 ? (o(H, j.sibling), j = p(j, $), j.return = H, H = j) : (o(H, j), j = Xs($, H.mode, pe), j.return = H, H = j), w(H)) : o(H, j);
    }
    return Ln;
  }
  var bl = Rh(!0), bh = Rh(!1), Ls = {}, li = ct(Ls), As = ct(Ls), Tl = ct(Ls);
  function wu(n) {
    if (n === Ls)
      throw Error(d(174));
    return n;
  }
  function Jd(n, r) {
    switch (Qt(Tl, r), Qt(As, n), Qt(li, Ls), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Sn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Sn(r, n);
    }
    Bt(li), Qt(li, r);
  }
  function Bo() {
    Bt(li), Bt(As), Bt(Tl);
  }
  function Ge(n) {
    wu(Tl.current);
    var r = wu(li.current), o = Sn(r, n.type);
    r !== o && (Qt(As, n), Qt(li, o));
  }
  function gt(n) {
    As.current === n && (Bt(li), Bt(As));
  }
  var Xe = ct(0);
  function Rn(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Ha = [];
  function Qc() {
    for (var n = 0; n < Ha.length; n++)
      Ha[n]._workInProgressVersionPrimary = null;
    Ha.length = 0;
  }
  var Gc = me.ReactCurrentDispatcher, Zd = me.ReactCurrentBatchConfig, Ru = 0, dn = null, ee = null, xt = null, Je = !1, xi = !1, ba = 0, bu = 0;
  function pn() {
    throw Error(d(321));
  }
  function Tu(n, r) {
    if (r === null)
      return !1;
    for (var o = 0; o < r.length && o < n.length; o++)
      if (!Aa(n[o], r[o]))
        return !1;
    return !0;
  }
  function $o(n, r, o, s, p, h) {
    if (Ru = h, dn = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Gc.current = n === null || n.memoizedState === null ? vg : hg, n = o(s, p), xi) {
      h = 0;
      do {
        if (xi = !1, ba = 0, 25 <= h)
          throw Error(d(301));
        h += 1, xt = ee = null, r.updateQueue = null, Gc.current = tp, n = o(s, p);
      } while (xi);
    }
    if (Gc.current = df, r = ee !== null && ee.next !== null, Ru = 0, xt = ee = dn = null, Je = !1, r)
      throw Error(d(300));
    return n;
  }
  function _u() {
    var n = ba !== 0;
    return ba = 0, n;
  }
  function Va() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return xt === null ? dn.memoizedState = xt = n : xt = xt.next = n, xt;
  }
  function ua() {
    if (ee === null) {
      var n = dn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = ee.next;
    var r = xt === null ? dn.memoizedState : xt.next;
    if (r !== null)
      xt = r, ee = n;
    else {
      if (n === null)
        throw Error(d(310));
      ee = n, n = { memoizedState: ee.memoizedState, baseState: ee.baseState, baseQueue: ee.baseQueue, queue: ee.queue, next: null }, xt === null ? dn.memoizedState = xt = n : xt = xt.next = n;
    }
    return xt;
  }
  function xu(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function zs(n) {
    var r = ua(), o = r.queue;
    if (o === null)
      throw Error(d(311));
    o.lastRenderedReducer = n;
    var s = ee, p = s.baseQueue, h = o.pending;
    if (h !== null) {
      if (p !== null) {
        var w = p.next;
        p.next = h.next, h.next = w;
      }
      s.baseQueue = p = h, o.pending = null;
    }
    if (p !== null) {
      h = p.next, s = s.baseState;
      var _ = w = null, z = null, G = h;
      do {
        var le = G.lane;
        if ((Ru & le) === le)
          z !== null && (z = z.next = { lane: 0, action: G.action, hasEagerState: G.hasEagerState, eagerState: G.eagerState, next: null }), s = G.hasEagerState ? G.eagerState : n(s, G.action);
        else {
          var se = {
            lane: le,
            action: G.action,
            hasEagerState: G.hasEagerState,
            eagerState: G.eagerState,
            next: null
          };
          z === null ? (_ = z = se, w = s) : z = z.next = se, dn.lanes |= le, to |= le;
        }
        G = G.next;
      } while (G !== null && G !== h);
      z === null ? w = s : z.next = _, Aa(s, r.memoizedState) || (Fn = !0), r.memoizedState = s, r.baseState = w, r.baseQueue = z, o.lastRenderedState = s;
    }
    if (n = o.interleaved, n !== null) {
      p = n;
      do
        h = p.lane, dn.lanes |= h, to |= h, p = p.next;
      while (p !== n);
    } else
      p === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function Us(n) {
    var r = ua(), o = r.queue;
    if (o === null)
      throw Error(d(311));
    o.lastRenderedReducer = n;
    var s = o.dispatch, p = o.pending, h = r.memoizedState;
    if (p !== null) {
      o.pending = null;
      var w = p = p.next;
      do
        h = n(h, w.action), w = w.next;
      while (w !== p);
      Aa(h, r.memoizedState) || (Fn = !0), r.memoizedState = h, r.baseQueue === null && (r.baseState = h), o.lastRenderedState = h;
    }
    return [h, s];
  }
  function Kc() {
  }
  function Xc(n, r) {
    var o = dn, s = ua(), p = r(), h = !Aa(s.memoizedState, p);
    if (h && (s.memoizedState = p, Fn = !0), s = s.queue, js(ef.bind(null, o, s, n), [n]), s.getSnapshot !== r || h || xt !== null && xt.memoizedState.tag & 1) {
      if (o.flags |= 2048, Du(9, Zc.bind(null, o, s, p, r), void 0, null), bn === null)
        throw Error(d(349));
      Ru & 30 || Jc(o, r, p);
    }
    return p;
  }
  function Jc(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = dn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, dn.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function Zc(n, r, o, s) {
    r.value = o, r.getSnapshot = s, tf(r) && nf(n);
  }
  function ef(n, r, o) {
    return o(function() {
      tf(r) && nf(n);
    });
  }
  function tf(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !Aa(n, o);
    } catch {
      return !0;
    }
  }
  function nf(n) {
    var r = Ki(n, 1);
    r !== null && xr(r, n, 1, -1);
  }
  function rf(n) {
    var r = Va();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: xu, lastRenderedState: n }, r.queue = n, n = n.dispatch = ff.bind(null, dn, n), [r.memoizedState, n];
  }
  function Du(n, r, o, s) {
    return n = { tag: n, create: r, destroy: o, deps: s, next: null }, r = dn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, dn.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (s = o.next, o.next = n, n.next = s, r.lastEffect = n)), n;
  }
  function af() {
    return ua().memoizedState;
  }
  function Ou(n, r, o, s) {
    var p = Va();
    dn.flags |= n, p.memoizedState = Du(1 | r, o, void 0, s === void 0 ? null : s);
  }
  function Ji(n, r, o, s) {
    var p = ua();
    s = s === void 0 ? null : s;
    var h = void 0;
    if (ee !== null) {
      var w = ee.memoizedState;
      if (h = w.destroy, s !== null && Tu(s, w.deps)) {
        p.memoizedState = Du(r, o, h, s);
        return;
      }
    }
    dn.flags |= n, p.memoizedState = Du(1 | r, o, h, s);
  }
  function of(n, r) {
    return Ou(8390656, 8, n, r);
  }
  function js(n, r) {
    return Ji(2048, 8, n, r);
  }
  function uf(n, r) {
    return Ji(4, 2, n, r);
  }
  function lf(n, r) {
    return Ji(4, 4, n, r);
  }
  function ep(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function _l(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Ji(4, 4, ep.bind(null, r, n), o);
  }
  function sf() {
  }
  function xl(n, r) {
    var o = ua();
    r = r === void 0 ? null : r;
    var s = o.memoizedState;
    return s !== null && r !== null && Tu(r, s[1]) ? s[0] : (o.memoizedState = [n, r], n);
  }
  function Io(n, r) {
    var o = ua();
    r = r === void 0 ? null : r;
    var s = o.memoizedState;
    return s !== null && r !== null && Tu(r, s[1]) ? s[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function la(n, r, o) {
    return Ru & 21 ? (Aa(o, r) || (o = ol(), dn.lanes |= o, to |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Fn = !0), n.memoizedState = o);
  }
  function pg(n, r) {
    var o = jt;
    jt = o !== 0 && 4 > o ? o : 4, n(!0);
    var s = Zd.transition;
    Zd.transition = {};
    try {
      n(!1), r();
    } finally {
      jt = o, Zd.transition = s;
    }
  }
  function an() {
    return ua().memoizedState;
  }
  function cf(n, r, o) {
    var s = Pn(n);
    if (o = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null }, Dl(n))
      Fs(r, o);
    else if (o = yh(n, r, o, s), o !== null) {
      var p = _r();
      xr(o, n, s, p), Th(o, r, s);
    }
  }
  function ff(n, r, o) {
    var s = Pn(n), p = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (Dl(n))
      Fs(r, p);
    else {
      var h = n.alternate;
      if (n.lanes === 0 && (h === null || h.lanes === 0) && (h = r.lastRenderedReducer, h !== null))
        try {
          var w = r.lastRenderedState, _ = h(w, o);
          if (p.hasEagerState = !0, p.eagerState = _, Aa(_, w)) {
            var z = r.interleaved;
            z === null ? (p.next = p, Qd(r)) : (p.next = z.next, z.next = p), r.interleaved = p;
            return;
          }
        } catch {
        } finally {
        }
      o = yh(n, r, p, s), o !== null && (p = _r(), xr(o, n, s, p), Th(o, r, s));
    }
  }
  function Dl(n) {
    var r = n.alternate;
    return n === dn || r !== null && r === dn;
  }
  function Fs(n, r) {
    xi = Je = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function Th(n, r, o) {
    if (o & 4194240) {
      var s = r.lanes;
      s &= n.pendingLanes, o |= s, r.lanes = o, wi(n, o);
    }
  }
  var df = { readContext: Mn, useCallback: pn, useContext: pn, useEffect: pn, useImperativeHandle: pn, useInsertionEffect: pn, useLayoutEffect: pn, useMemo: pn, useReducer: pn, useRef: pn, useState: pn, useDebugValue: pn, useDeferredValue: pn, useTransition: pn, useMutableSource: pn, useSyncExternalStore: pn, useId: pn, unstable_isNewReconciler: !1 }, vg = { readContext: Mn, useCallback: function(n, r) {
    return Va().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Mn, useEffect: of, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Ou(
      4194308,
      4,
      ep.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return Ou(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Ou(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = Va();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var s = Va();
    return r = o !== void 0 ? o(r) : r, s.memoizedState = s.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, s.queue = n, n = n.dispatch = cf.bind(null, dn, n), [s.memoizedState, n];
  }, useRef: function(n) {
    var r = Va();
    return n = { current: n }, r.memoizedState = n;
  }, useState: rf, useDebugValue: sf, useDeferredValue: function(n) {
    return Va().memoizedState = n;
  }, useTransition: function() {
    var n = rf(!1), r = n[0];
    return n = pg.bind(null, n[1]), Va().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var s = dn, p = Va();
    if (fn) {
      if (o === void 0)
        throw Error(d(407));
      o = o();
    } else {
      if (o = r(), bn === null)
        throw Error(d(349));
      Ru & 30 || Jc(s, r, o);
    }
    p.memoizedState = o;
    var h = { value: o, getSnapshot: r };
    return p.queue = h, of(ef.bind(
      null,
      s,
      h,
      n
    ), [n]), s.flags |= 2048, Du(9, Zc.bind(null, s, h, o, r), void 0, null), o;
  }, useId: function() {
    var n = Va(), r = bn.identifierPrefix;
    if (fn) {
      var o = Gi, s = ur;
      o = (s & ~(1 << 32 - Mr(s) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = ba++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else
      o = bu++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, hg = {
    readContext: Mn,
    useCallback: xl,
    useContext: Mn,
    useEffect: js,
    useImperativeHandle: _l,
    useInsertionEffect: uf,
    useLayoutEffect: lf,
    useMemo: Io,
    useReducer: zs,
    useRef: af,
    useState: function() {
      return zs(xu);
    },
    useDebugValue: sf,
    useDeferredValue: function(n) {
      var r = ua();
      return la(r, ee.memoizedState, n);
    },
    useTransition: function() {
      var n = zs(xu)[0], r = ua().memoizedState;
      return [n, r];
    },
    useMutableSource: Kc,
    useSyncExternalStore: Xc,
    useId: an,
    unstable_isNewReconciler: !1
  }, tp = { readContext: Mn, useCallback: xl, useContext: Mn, useEffect: js, useImperativeHandle: _l, useInsertionEffect: uf, useLayoutEffect: lf, useMemo: Io, useReducer: Us, useRef: af, useState: function() {
    return Us(xu);
  }, useDebugValue: sf, useDeferredValue: function(n) {
    var r = ua();
    return ee === null ? r.memoizedState = n : la(r, ee.memoizedState, n);
  }, useTransition: function() {
    var n = Us(xu)[0], r = ua().memoizedState;
    return [n, r];
  }, useMutableSource: Kc, useSyncExternalStore: Xc, useId: an, unstable_isNewReconciler: !1 };
  function Ol(n, r) {
    try {
      var o = "", s = r;
      do
        o += Tt(s), s = s.return;
      while (s);
      var p = o;
    } catch (h) {
      p = `
Error generating stack: ` + h.message + `
` + h.stack;
    }
    return { value: n, source: r, stack: p, digest: null };
  }
  function Ps(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function pf(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var mg = typeof WeakMap == "function" ? WeakMap : Map;
  function _h(n, r, o) {
    o = Xi(-1, o), o.tag = 3, o.payload = { element: null };
    var s = r.value;
    return o.callback = function() {
      Ef || (Ef = !0, Au = s), pf(n, r);
    }, o;
  }
  function Hs(n, r, o) {
    o = Xi(-1, o), o.tag = 3;
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var p = r.value;
      o.payload = function() {
        return s(p);
      }, o.callback = function() {
        pf(n, r);
      };
    }
    var h = n.stateNode;
    return h !== null && typeof h.componentDidCatch == "function" && (o.callback = function() {
      pf(n, r), typeof s != "function" && (ki === null ? ki = /* @__PURE__ */ new Set([this]) : ki.add(this));
      var w = r.stack;
      this.componentDidCatch(r.value, { componentStack: w !== null ? w : "" });
    }), o;
  }
  function xh(n, r, o) {
    var s = n.pingCache;
    if (s === null) {
      s = n.pingCache = new mg();
      var p = /* @__PURE__ */ new Set();
      s.set(r, p);
    } else
      p = s.get(r), p === void 0 && (p = /* @__PURE__ */ new Set(), s.set(r, p));
    p.has(o) || (p.add(o), n = Rg.bind(null, n, r, o), r.then(n, n));
  }
  function np(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function rp(n, r, o, s, p) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = p, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = Xi(-1, 1), r.tag = 2, Ho(o, r, 1))), o.lanes |= 1), n);
  }
  var yg = me.ReactCurrentOwner, Fn = !1;
  function In(n, r, o, s) {
    r.child = n === null ? bh(r, null, o, s) : bl(r, n.child, o, s);
  }
  function Yo(n, r, o, s, p) {
    o = o.render;
    var h = r.ref;
    return Se(r, p), s = $o(n, r, o, s, h, p), o = _u(), n !== null && !Fn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, sr(n, r, p)) : (fn && o && Fc(r), r.flags |= 1, In(n, r, s, p), r.child);
  }
  function vf(n, r, o, s, p) {
    if (n === null) {
      var h = o.type;
      return typeof h == "function" && !wp(h) && h.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = h, sa(n, r, h, s, p)) : (n = _f(o.type, null, s, r, r.mode, p), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (h = n.child, !(n.lanes & p)) {
      var w = h.memoizedProps;
      if (o = o.compare, o = o !== null ? o : Cs, o(w, s) && n.ref === r.ref)
        return sr(n, r, p);
    }
    return r.flags |= 1, n = Go(h, s), n.ref = r.ref, n.return = r, r.child = n;
  }
  function sa(n, r, o, s, p) {
    if (n !== null) {
      var h = n.memoizedProps;
      if (Cs(h, s) && n.ref === r.ref)
        if (Fn = !1, r.pendingProps = s = h, (n.lanes & p) !== 0)
          n.flags & 131072 && (Fn = !0);
        else
          return r.lanes = n.lanes, sr(n, r, p);
    }
    return kl(n, r, o, s, p);
  }
  function ku(n, r, o) {
    var s = r.pendingProps, p = s.children, h = n !== null ? n.memoizedState : null;
    if (s.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Qt(Ul, Ta), Ta |= o;
      else {
        if (!(o & 1073741824))
          return n = h !== null ? h.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Qt(Ul, Ta), Ta |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = h !== null ? h.baseLanes : o, Qt(Ul, Ta), Ta |= s;
      }
    else
      h !== null ? (s = h.baseLanes | o, r.memoizedState = null) : s = o, Qt(Ul, Ta), Ta |= s;
    return In(n, r, p, o), r.child;
  }
  function ft(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function kl(n, r, o, s, p) {
    var h = mn(o) ? na : tt.current;
    return h = Ua(r, h), Se(r, p), o = $o(n, r, o, s, h, p), s = _u(), n !== null && !Fn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, sr(n, r, p)) : (fn && s && Fc(r), r.flags |= 1, In(n, r, o, p), r.child);
  }
  function ap(n, r, o, s, p) {
    if (mn(o)) {
      var h = !0;
      jc(r);
    } else
      h = !1;
    if (Se(r, p), r.stateNode === null)
      Rr(n, r), Eh(r, o, s), Wc(r, o, s, p), s = !0;
    else if (n === null) {
      var w = r.stateNode, _ = r.memoizedProps;
      w.props = _;
      var z = w.context, G = o.contextType;
      typeof G == "object" && G !== null ? G = Mn(G) : (G = mn(o) ? na : tt.current, G = Ua(r, G));
      var le = o.getDerivedStateFromProps, se = typeof le == "function" || typeof w.getSnapshotBeforeUpdate == "function";
      se || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (_ !== s || z !== G) && Ch(r, w, s, G), Po = !1;
      var ue = r.memoizedState;
      w.state = ue, Vo(r, s, w, p), z = r.memoizedState, _ !== s || ue !== z || xn.current || Po ? (typeof le == "function" && (Xd(r, o, le, s), z = r.memoizedState), (_ = Po || Sh(r, o, _, s, ue, z, G)) ? (se || typeof w.UNSAFE_componentWillMount != "function" && typeof w.componentWillMount != "function" || (typeof w.componentWillMount == "function" && w.componentWillMount(), typeof w.UNSAFE_componentWillMount == "function" && w.UNSAFE_componentWillMount()), typeof w.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof w.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = s, r.memoizedState = z), w.props = s, w.state = z, w.context = G, s = _) : (typeof w.componentDidMount == "function" && (r.flags |= 4194308), s = !1);
    } else {
      w = r.stateNode, $n(n, r), _ = r.memoizedProps, G = r.type === r.elementType ? _ : Ra(r.type, _), w.props = G, se = r.pendingProps, ue = w.context, z = o.contextType, typeof z == "object" && z !== null ? z = Mn(z) : (z = mn(o) ? na : tt.current, z = Ua(r, z));
      var xe = o.getDerivedStateFromProps;
      (le = typeof xe == "function" || typeof w.getSnapshotBeforeUpdate == "function") || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (_ !== se || ue !== z) && Ch(r, w, s, z), Po = !1, ue = r.memoizedState, w.state = ue, Vo(r, s, w, p);
      var Ae = r.memoizedState;
      _ !== se || ue !== Ae || xn.current || Po ? (typeof xe == "function" && (Xd(r, o, xe, s), Ae = r.memoizedState), (G = Po || Sh(r, o, G, s, ue, Ae, z) || !1) ? (le || typeof w.UNSAFE_componentWillUpdate != "function" && typeof w.componentWillUpdate != "function" || (typeof w.componentWillUpdate == "function" && w.componentWillUpdate(s, Ae, z), typeof w.UNSAFE_componentWillUpdate == "function" && w.UNSAFE_componentWillUpdate(s, Ae, z)), typeof w.componentDidUpdate == "function" && (r.flags |= 4), typeof w.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof w.componentDidUpdate != "function" || _ === n.memoizedProps && ue === n.memoizedState || (r.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || _ === n.memoizedProps && ue === n.memoizedState || (r.flags |= 1024), r.memoizedProps = s, r.memoizedState = Ae), w.props = s, w.state = Ae, w.context = z, s = G) : (typeof w.componentDidUpdate != "function" || _ === n.memoizedProps && ue === n.memoizedState || (r.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || _ === n.memoizedProps && ue === n.memoizedState || (r.flags |= 1024), s = !1);
    }
    return Dh(n, r, o, s, h, p);
  }
  function Dh(n, r, o, s, p, h) {
    ft(n, r);
    var w = (r.flags & 128) !== 0;
    if (!s && !w)
      return p && ph(r, o, !1), sr(n, r, h);
    s = r.stateNode, yg.current = r;
    var _ = w && typeof o.getDerivedStateFromError != "function" ? null : s.render();
    return r.flags |= 1, n !== null && w ? (r.child = bl(r, n.child, null, h), r.child = bl(r, null, _, h)) : In(n, r, _, h), r.memoizedState = s.state, p && ph(r, o, !0), r.child;
  }
  function Oh(n) {
    var r = n.stateNode;
    r.pendingContext ? zo(n, r.pendingContext, r.pendingContext !== r.context) : r.context && zo(n, r.context, !1), Jd(n, r.containerInfo);
  }
  function hf(n, r, o, s, p) {
    return wn(), Yd(p), r.flags |= 256, In(n, r, o, s), r.child;
  }
  var Nu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ip(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function op(n, r, o) {
    var s = r.pendingProps, p = Xe.current, h = !1, w = (r.flags & 128) !== 0, _;
    if ((_ = w) || (_ = n !== null && n.memoizedState === null ? !1 : (p & 2) !== 0), _ ? (h = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (p |= 1), Qt(Xe, p & 1), n === null)
      return Hc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (w = s.children, n = s.fallback, h ? (s = r.mode, h = r.child, w = { mode: "hidden", children: w }, !(s & 1) && h !== null ? (h.childLanes = 0, h.pendingProps = w) : h = Ks(w, s, 0, null), n = Pu(n, s, o, null), h.return = r, n.return = r, h.sibling = n, r.child = h, r.child.memoizedState = ip(o), r.memoizedState = Nu, n) : up(r, w));
    if (p = n.memoizedState, p !== null && (_ = p.dehydrated, _ !== null))
      return gg(n, r, w, s, _, p, o);
    if (h) {
      h = s.fallback, w = r.mode, p = n.child, _ = p.sibling;
      var z = { mode: "hidden", children: s.children };
      return !(w & 1) && r.child !== p ? (s = r.child, s.childLanes = 0, s.pendingProps = z, r.deletions = null) : (s = Go(p, z), s.subtreeFlags = p.subtreeFlags & 14680064), _ !== null ? h = Go(_, h) : (h = Pu(h, w, o, null), h.flags |= 2), h.return = r, s.return = r, s.sibling = h, r.child = s, s = h, h = r.child, w = n.child.memoizedState, w = w === null ? ip(o) : { baseLanes: w.baseLanes | o, cachePool: null, transitions: w.transitions }, h.memoizedState = w, h.childLanes = n.childLanes & ~o, r.memoizedState = Nu, s;
    }
    return h = n.child, n = h.sibling, s = Go(h, { mode: "visible", children: s.children }), !(r.mode & 1) && (s.lanes = o), s.return = r, s.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = s, r.memoizedState = null, s;
  }
  function up(n, r) {
    return r = Ks({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Nl(n, r, o, s) {
    return s !== null && Yd(s), bl(r, n.child, null, o), n = up(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function gg(n, r, o, s, p, h, w) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, s = Ps(Error(d(422))), Nl(n, r, w, s)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (h = s.fallback, p = r.mode, s = Ks({ mode: "visible", children: s.children }, p, 0, null), h = Pu(h, p, w, null), h.flags |= 2, s.return = r, h.return = r, s.sibling = h, r.child = s, r.mode & 1 && bl(r, n.child, null, w), r.child.memoizedState = ip(w), r.memoizedState = Nu, h);
    if (!(r.mode & 1))
      return Nl(n, r, w, null);
    if (p.data === "$!") {
      if (s = p.nextSibling && p.nextSibling.dataset, s)
        var _ = s.dgst;
      return s = _, h = Error(d(419)), s = Ps(h, s, void 0), Nl(n, r, w, s);
    }
    if (_ = (w & n.childLanes) !== 0, Fn || _) {
      if (s = bn, s !== null) {
        switch (w & -w) {
          case 4:
            p = 2;
            break;
          case 16:
            p = 8;
            break;
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
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            p = 32;
            break;
          case 536870912:
            p = 268435456;
            break;
          default:
            p = 0;
        }
        p = p & (s.suspendedLanes | w) ? 0 : p, p !== 0 && p !== h.retryLane && (h.retryLane = p, Ki(n, p), xr(s, n, p, -1));
      }
      return Sp(), s = Ps(Error(d(421))), Nl(n, r, w, s);
    }
    return p.data === "$?" ? (r.flags |= 128, r.child = n.child, r = bg.bind(null, n), p._reactRetry = r, null) : (n = h.treeContext, oa = ui(p.nextSibling), wa = r, fn = !0, Pa = null, n !== null && (ia[wr++] = ur, ia[wr++] = Gi, ia[wr++] = Fa, ur = n.id, Gi = n.overflow, Fa = r), r = up(r, s.children), r.flags |= 4096, r);
  }
  function lp(n, r, o) {
    n.lanes |= r;
    var s = n.alternate;
    s !== null && (s.lanes |= r), er(n.return, r, o);
  }
  function mf(n, r, o, s, p) {
    var h = n.memoizedState;
    h === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: s, tail: o, tailMode: p } : (h.isBackwards = r, h.rendering = null, h.renderingStartTime = 0, h.last = s, h.tail = o, h.tailMode = p);
  }
  function sp(n, r, o) {
    var s = r.pendingProps, p = s.revealOrder, h = s.tail;
    if (In(n, r, s.children, o), s = Xe.current, s & 2)
      s = s & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && lp(n, o, r);
            else if (n.tag === 19)
              lp(n, o, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      s &= 1;
    }
    if (Qt(Xe, s), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (p) {
        case "forwards":
          for (o = r.child, p = null; o !== null; )
            n = o.alternate, n !== null && Rn(n) === null && (p = o), o = o.sibling;
          o = p, o === null ? (p = r.child, r.child = null) : (p = o.sibling, o.sibling = null), mf(r, !1, p, o, h);
          break;
        case "backwards":
          for (o = null, p = r.child, r.child = null; p !== null; ) {
            if (n = p.alternate, n !== null && Rn(n) === null) {
              r.child = p;
              break;
            }
            n = p.sibling, p.sibling = o, o = p, p = n;
          }
          mf(r, !0, o, null, h);
          break;
        case "together":
          mf(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Rr(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function sr(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), to |= r.lanes, !(o & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(d(153));
    if (r.child !== null) {
      for (n = r.child, o = Go(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; )
        n = n.sibling, o = o.sibling = Go(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function Zi(n, r, o) {
    switch (r.tag) {
      case 3:
        Oh(r), wn();
        break;
      case 5:
        Ge(r);
        break;
      case 1:
        mn(r.type) && jc(r);
        break;
      case 4:
        Jd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var s = r.type._context, p = r.memoizedProps.value;
        Qt(_i, s._currentValue), s._currentValue = p;
        break;
      case 13:
        if (s = r.memoizedState, s !== null)
          return s.dehydrated !== null ? (Qt(Xe, Xe.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? op(n, r, o) : (Qt(Xe, Xe.current & 1), n = sr(n, r, o), n !== null ? n.sibling : null);
        Qt(Xe, Xe.current & 1);
        break;
      case 19:
        if (s = (o & r.childLanes) !== 0, n.flags & 128) {
          if (s)
            return sp(n, r, o);
          r.flags |= 128;
        }
        if (p = r.memoizedState, p !== null && (p.rendering = null, p.tail = null, p.lastEffect = null), Qt(Xe, Xe.current), s)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, ku(n, r, o);
    }
    return sr(n, r, o);
  }
  var Vs, Mu, Ba, Yn;
  Vs = function(n, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6)
        n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === r)
        break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r)
          return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, Mu = function() {
  }, Ba = function(n, r, o, s) {
    var p = n.memoizedProps;
    if (p !== s) {
      n = r.stateNode, wu(li.current);
      var h = null;
      switch (o) {
        case "input":
          p = Gn(n, p), s = Gn(n, s), h = [];
          break;
        case "select":
          p = A({}, p, { value: void 0 }), s = A({}, s, { value: void 0 }), h = [];
          break;
        case "textarea":
          p = Kr(n, p), s = Kr(n, s), h = [];
          break;
        default:
          typeof p.onClick != "function" && typeof s.onClick == "function" && (n.onclick = Uc);
      }
      Nn(o, s);
      var w;
      o = null;
      for (G in p)
        if (!s.hasOwnProperty(G) && p.hasOwnProperty(G) && p[G] != null)
          if (G === "style") {
            var _ = p[G];
            for (w in _)
              _.hasOwnProperty(w) && (o || (o = {}), o[w] = "");
          } else
            G !== "dangerouslySetInnerHTML" && G !== "children" && G !== "suppressContentEditableWarning" && G !== "suppressHydrationWarning" && G !== "autoFocus" && (C.hasOwnProperty(G) ? h || (h = []) : (h = h || []).push(G, null));
      for (G in s) {
        var z = s[G];
        if (_ = p != null ? p[G] : void 0, s.hasOwnProperty(G) && z !== _ && (z != null || _ != null))
          if (G === "style")
            if (_) {
              for (w in _)
                !_.hasOwnProperty(w) || z && z.hasOwnProperty(w) || (o || (o = {}), o[w] = "");
              for (w in z)
                z.hasOwnProperty(w) && _[w] !== z[w] && (o || (o = {}), o[w] = z[w]);
            } else
              o || (h || (h = []), h.push(
                G,
                o
              )), o = z;
          else
            G === "dangerouslySetInnerHTML" ? (z = z ? z.__html : void 0, _ = _ ? _.__html : void 0, z != null && _ !== z && (h = h || []).push(G, z)) : G === "children" ? typeof z != "string" && typeof z != "number" || (h = h || []).push(G, "" + z) : G !== "suppressContentEditableWarning" && G !== "suppressHydrationWarning" && (C.hasOwnProperty(G) ? (z != null && G === "onScroll" && rn("scroll", n), h || _ === z || (h = [])) : (h = h || []).push(G, z));
      }
      o && (h = h || []).push("style", o);
      var G = h;
      (r.updateQueue = G) && (r.flags |= 4);
    }
  }, Yn = function(n, r, o, s) {
    o !== s && (r.flags |= 4);
  };
  function Bs(n, r) {
    if (!fn)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var o = null; r !== null; )
            r.alternate !== null && (o = r), r = r.sibling;
          o === null ? n.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = n.tail;
          for (var s = null; o !== null; )
            o.alternate !== null && (s = o), o = o.sibling;
          s === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : s.sibling = null;
      }
  }
  function br(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, s = 0;
    if (r)
      for (var p = n.child; p !== null; )
        o |= p.lanes | p.childLanes, s |= p.subtreeFlags & 14680064, s |= p.flags & 14680064, p.return = n, p = p.sibling;
    else
      for (p = n.child; p !== null; )
        o |= p.lanes | p.childLanes, s |= p.subtreeFlags, s |= p.flags, p.return = n, p = p.sibling;
    return n.subtreeFlags |= s, n.childLanes = o, r;
  }
  function Sg(n, r, o) {
    var s = r.pendingProps;
    switch ($d(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return br(r), null;
      case 1:
        return mn(r.type) && ja(), br(r), null;
      case 3:
        return s = r.stateNode, Bo(), Bt(xn), Bt(tt), Qc(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (n === null || n.child === null) && (Vc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Pa !== null && (Gs(Pa), Pa = null))), Mu(n, r), br(r), null;
      case 5:
        gt(r);
        var p = wu(Tl.current);
        if (o = r.type, n !== null && r.stateNode != null)
          Ba(n, r, o, s, p), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!s) {
            if (r.stateNode === null)
              throw Error(d(166));
            return br(r), null;
          }
          if (n = wu(li.current), Vc(r)) {
            s = r.stateNode, o = r.type;
            var h = r.memoizedProps;
            switch (s[bi] = r, s[Su] = h, n = (r.mode & 1) !== 0, o) {
              case "dialog":
                rn("cancel", s), rn("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                rn("load", s);
                break;
              case "video":
              case "audio":
                for (p = 0; p < Ts.length; p++)
                  rn(Ts[p], s);
                break;
              case "source":
                rn("error", s);
                break;
              case "img":
              case "image":
              case "link":
                rn(
                  "error",
                  s
                ), rn("load", s);
                break;
              case "details":
                rn("toggle", s);
                break;
              case "input":
                Vn(s, h), rn("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!h.multiple }, rn("invalid", s);
                break;
              case "textarea":
                Er(s, h), rn("invalid", s);
            }
            Nn(o, h), p = null;
            for (var w in h)
              if (h.hasOwnProperty(w)) {
                var _ = h[w];
                w === "children" ? typeof _ == "string" ? s.textContent !== _ && (h.suppressHydrationWarning !== !0 && zc(s.textContent, _, n), p = ["children", _]) : typeof _ == "number" && s.textContent !== "" + _ && (h.suppressHydrationWarning !== !0 && zc(
                  s.textContent,
                  _,
                  n
                ), p = ["children", "" + _]) : C.hasOwnProperty(w) && _ != null && w === "onScroll" && rn("scroll", s);
              }
            switch (o) {
              case "input":
                gr(s), Qr(s, h, !0);
                break;
              case "textarea":
                gr(s), ir(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof h.onClick == "function" && (s.onclick = Uc);
            }
            s = p, r.updateQueue = s, s !== null && (r.flags |= 4);
          } else {
            w = p.nodeType === 9 ? p : p.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Xr(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = w.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof s.is == "string" ? n = w.createElement(o, { is: s.is }) : (n = w.createElement(o), o === "select" && (w = n, s.multiple ? w.multiple = !0 : s.size && (w.size = s.size))) : n = w.createElementNS(n, o), n[bi] = r, n[Su] = s, Vs(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (w = En(o, s), o) {
                case "dialog":
                  rn("cancel", n), rn("close", n), p = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  rn("load", n), p = s;
                  break;
                case "video":
                case "audio":
                  for (p = 0; p < Ts.length; p++)
                    rn(Ts[p], n);
                  p = s;
                  break;
                case "source":
                  rn("error", n), p = s;
                  break;
                case "img":
                case "image":
                case "link":
                  rn(
                    "error",
                    n
                  ), rn("load", n), p = s;
                  break;
                case "details":
                  rn("toggle", n), p = s;
                  break;
                case "input":
                  Vn(n, s), p = Gn(n, s), rn("invalid", n);
                  break;
                case "option":
                  p = s;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!s.multiple }, p = A({}, s, { value: void 0 }), rn("invalid", n);
                  break;
                case "textarea":
                  Er(n, s), p = Kr(n, s), rn("invalid", n);
                  break;
                default:
                  p = s;
              }
              Nn(o, p), _ = p;
              for (h in _)
                if (_.hasOwnProperty(h)) {
                  var z = _[h];
                  h === "style" ? Vt(n, z) : h === "dangerouslySetInnerHTML" ? (z = z ? z.__html : void 0, z != null && mi(n, z)) : h === "children" ? typeof z == "string" ? (o !== "textarea" || z !== "") && ma(n, z) : typeof z == "number" && ma(n, "" + z) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (C.hasOwnProperty(h) ? z != null && h === "onScroll" && rn("scroll", n) : z != null && ie(n, h, z, w));
                }
              switch (o) {
                case "input":
                  gr(n), Qr(n, s, !1);
                  break;
                case "textarea":
                  gr(n), ir(n);
                  break;
                case "option":
                  s.value != null && n.setAttribute("value", "" + pt(s.value));
                  break;
                case "select":
                  n.multiple = !!s.multiple, h = s.value, h != null ? Sr(n, !!s.multiple, h, !1) : s.defaultValue != null && Sr(
                    n,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof p.onClick == "function" && (n.onclick = Uc);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break e;
                case "img":
                  s = !0;
                  break e;
                default:
                  s = !1;
              }
            }
            s && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return br(r), null;
      case 6:
        if (n && r.stateNode != null)
          Yn(n, r, n.memoizedProps, s);
        else {
          if (typeof s != "string" && r.stateNode === null)
            throw Error(d(166));
          if (o = wu(Tl.current), wu(li.current), Vc(r)) {
            if (s = r.stateNode, o = r.memoizedProps, s[bi] = r, (h = s.nodeValue !== o) && (n = wa, n !== null))
              switch (n.tag) {
                case 3:
                  zc(s.nodeValue, o, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && zc(s.nodeValue, o, (n.mode & 1) !== 0);
              }
            h && (r.flags |= 4);
          } else
            s = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(s), s[bi] = r, r.stateNode = s;
        }
        return br(r), null;
      case 13:
        if (Bt(Xe), s = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (fn && oa !== null && r.mode & 1 && !(r.flags & 128))
            mh(), wn(), r.flags |= 98560, h = !1;
          else if (h = Vc(r), s !== null && s.dehydrated !== null) {
            if (n === null) {
              if (!h)
                throw Error(d(318));
              if (h = r.memoizedState, h = h !== null ? h.dehydrated : null, !h)
                throw Error(d(317));
              h[bi] = r;
            } else
              wn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            br(r), h = !1;
          } else
            Pa !== null && (Gs(Pa), Pa = null), h = !0;
          if (!h)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (s = s !== null, s !== (n !== null && n.memoizedState !== null) && s && (r.child.flags |= 8192, r.mode & 1 && (n === null || Xe.current & 1 ? qn === 0 && (qn = 3) : Sp())), r.updateQueue !== null && (r.flags |= 4), br(r), null);
      case 4:
        return Bo(), Mu(n, r), n === null && El(r.stateNode.containerInfo), br(r), null;
      case 10:
        return Fo(r.type._context), br(r), null;
      case 17:
        return mn(r.type) && ja(), br(r), null;
      case 19:
        if (Bt(Xe), h = r.memoizedState, h === null)
          return br(r), null;
        if (s = (r.flags & 128) !== 0, w = h.rendering, w === null)
          if (s)
            Bs(h, !1);
          else {
            if (qn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (w = Rn(n), w !== null) {
                  for (r.flags |= 128, Bs(h, !1), s = w.updateQueue, s !== null && (r.updateQueue = s, r.flags |= 4), r.subtreeFlags = 0, s = o, o = r.child; o !== null; )
                    h = o, n = s, h.flags &= 14680066, w = h.alternate, w === null ? (h.childLanes = 0, h.lanes = n, h.child = null, h.subtreeFlags = 0, h.memoizedProps = null, h.memoizedState = null, h.updateQueue = null, h.dependencies = null, h.stateNode = null) : (h.childLanes = w.childLanes, h.lanes = w.lanes, h.child = w.child, h.subtreeFlags = 0, h.deletions = null, h.memoizedProps = w.memoizedProps, h.memoizedState = w.memoizedState, h.updateQueue = w.updateQueue, h.type = w.type, n = w.dependencies, h.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
                  return Qt(Xe, Xe.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            h.tail !== null && Lt() > Fl && (r.flags |= 128, s = !0, Bs(h, !1), r.lanes = 4194304);
          }
        else {
          if (!s)
            if (n = Rn(w), n !== null) {
              if (r.flags |= 128, s = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), Bs(h, !0), h.tail === null && h.tailMode === "hidden" && !w.alternate && !fn)
                return br(r), null;
            } else
              2 * Lt() - h.renderingStartTime > Fl && o !== 1073741824 && (r.flags |= 128, s = !0, Bs(h, !1), r.lanes = 4194304);
          h.isBackwards ? (w.sibling = r.child, r.child = w) : (o = h.last, o !== null ? o.sibling = w : r.child = w, h.last = w);
        }
        return h.tail !== null ? (r = h.tail, h.rendering = r, h.tail = r.sibling, h.renderingStartTime = Lt(), r.sibling = null, o = Xe.current, Qt(Xe, s ? o & 1 | 2 : o & 1), r) : (br(r), null);
      case 22:
      case 23:
        return gp(), s = r.memoizedState !== null, n !== null && n.memoizedState !== null !== s && (r.flags |= 8192), s && r.mode & 1 ? Ta & 1073741824 && (br(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : br(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(d(156, r.tag));
  }
  function cp(n, r) {
    switch ($d(r), r.tag) {
      case 1:
        return mn(r.type) && ja(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Bo(), Bt(xn), Bt(tt), Qc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return gt(r), null;
      case 13:
        if (Bt(Xe), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(d(340));
          wn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Bt(Xe), null;
      case 4:
        return Bo(), null;
      case 10:
        return Fo(r.type._context), null;
      case 22:
      case 23:
        return gp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var $s = !1, Wn = !1, kh = typeof WeakSet == "function" ? WeakSet : Set, Me = null;
  function Ml(n, r) {
    var o = n.ref;
    if (o !== null)
      if (typeof o == "function")
        try {
          o(null);
        } catch (s) {
          On(n, r, s);
        }
      else
        o.current = null;
  }
  function Is(n, r, o) {
    try {
      o();
    } catch (s) {
      On(n, r, s);
    }
  }
  var Nh = !1;
  function Mh(n, r) {
    if (zd = La, n = kc(), Yi(n)) {
      if ("selectionStart" in n)
        var o = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          o = (o = n.ownerDocument) && o.defaultView || window;
          var s = o.getSelection && o.getSelection();
          if (s && s.rangeCount !== 0) {
            o = s.anchorNode;
            var p = s.anchorOffset, h = s.focusNode;
            s = s.focusOffset;
            try {
              o.nodeType, h.nodeType;
            } catch {
              o = null;
              break e;
            }
            var w = 0, _ = -1, z = -1, G = 0, le = 0, se = n, ue = null;
            t:
              for (; ; ) {
                for (var xe; se !== o || p !== 0 && se.nodeType !== 3 || (_ = w + p), se !== h || s !== 0 && se.nodeType !== 3 || (z = w + s), se.nodeType === 3 && (w += se.nodeValue.length), (xe = se.firstChild) !== null; )
                  ue = se, se = xe;
                for (; ; ) {
                  if (se === n)
                    break t;
                  if (ue === o && ++G === p && (_ = w), ue === h && ++le === s && (z = w), (xe = se.nextSibling) !== null)
                    break;
                  se = ue, ue = se.parentNode;
                }
                se = xe;
              }
            o = _ === -1 || z === -1 ? null : { start: _, end: z };
          } else
            o = null;
        }
      o = o || { start: 0, end: 0 };
    } else
      o = null;
    for (yu = { focusedElem: n, selectionRange: o }, La = !1, Me = r; Me !== null; )
      if (r = Me, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Me = n;
      else
        for (; Me !== null; ) {
          r = Me;
          try {
            var Ae = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Ae !== null) {
                    var je = Ae.memoizedProps, Ln = Ae.memoizedState, H = r.stateNode, j = H.getSnapshotBeforeUpdate(r.elementType === r.type ? je : Ra(r.type, je), Ln);
                    H.__reactInternalSnapshotBeforeUpdate = j;
                  }
                  break;
                case 3:
                  var $ = r.stateNode.containerInfo;
                  $.nodeType === 1 ? $.textContent = "" : $.nodeType === 9 && $.documentElement && $.removeChild($.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(d(163));
              }
          } catch (pe) {
            On(r, r.return, pe);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Me = n;
            break;
          }
          Me = r.return;
        }
    return Ae = Nh, Nh = !1, Ae;
  }
  function Ys(n, r, o) {
    var s = r.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var p = s = s.next;
      do {
        if ((p.tag & n) === n) {
          var h = p.destroy;
          p.destroy = void 0, h !== void 0 && Is(r, o, h);
        }
        p = p.next;
      } while (p !== s);
    }
  }
  function Ws(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var s = o.create;
          o.destroy = s();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function fp(n) {
    var r = n.ref;
    if (r !== null) {
      var o = n.stateNode;
      switch (n.tag) {
        case 5:
          n = o;
          break;
        default:
          n = o;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function dp(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, dp(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[bi], delete r[Su], delete r[Fd], delete r[dg], delete r[Pd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Lh(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function yf(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Lh(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function Ll(n, r, o) {
    var s = n.tag;
    if (s === 5 || s === 6)
      n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = Uc));
    else if (s !== 4 && (n = n.child, n !== null))
      for (Ll(n, r, o), n = n.sibling; n !== null; )
        Ll(n, r, o), n = n.sibling;
  }
  function Di(n, r, o) {
    var s = n.tag;
    if (s === 5 || s === 6)
      n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (s !== 4 && (n = n.child, n !== null))
      for (Di(n, r, o), n = n.sibling; n !== null; )
        Di(n, r, o), n = n.sibling;
  }
  var yn = null, tr = !1;
  function $a(n, r, o) {
    for (o = o.child; o !== null; )
      Al(n, r, o), o = o.sibling;
  }
  function Al(n, r, o) {
    if (Jr && typeof Jr.onCommitFiberUnmount == "function")
      try {
        Jr.onCommitFiberUnmount(Eo, o);
      } catch {
      }
    switch (o.tag) {
      case 5:
        Wn || Ml(o, r);
      case 6:
        var s = yn, p = tr;
        yn = null, $a(n, r, o), yn = s, tr = p, yn !== null && (tr ? (n = yn, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : yn.removeChild(o.stateNode));
        break;
      case 18:
        yn !== null && (tr ? (n = yn, o = o.stateNode, n.nodeType === 8 ? Mo(n.parentNode, o) : n.nodeType === 1 && Mo(n, o), xo(n)) : Mo(yn, o.stateNode));
        break;
      case 4:
        s = yn, p = tr, yn = o.stateNode.containerInfo, tr = !0, $a(n, r, o), yn = s, tr = p;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Wn && (s = o.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          p = s = s.next;
          do {
            var h = p, w = h.destroy;
            h = h.tag, w !== void 0 && (h & 2 || h & 4) && Is(o, r, w), p = p.next;
          } while (p !== s);
        }
        $a(n, r, o);
        break;
      case 1:
        if (!Wn && (Ml(o, r), s = o.stateNode, typeof s.componentWillUnmount == "function"))
          try {
            s.props = o.memoizedProps, s.state = o.memoizedState, s.componentWillUnmount();
          } catch (_) {
            On(o, r, _);
          }
        $a(n, r, o);
        break;
      case 21:
        $a(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (Wn = (s = Wn) || o.memoizedState !== null, $a(n, r, o), Wn = s) : $a(n, r, o);
        break;
      default:
        $a(n, r, o);
    }
  }
  function eo(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new kh()), r.forEach(function(s) {
        var p = Tg.bind(null, n, s);
        o.has(s) || (o.add(s), s.then(p, p));
      });
    }
  }
  function si(n, r) {
    var o = r.deletions;
    if (o !== null)
      for (var s = 0; s < o.length; s++) {
        var p = o[s];
        try {
          var h = n, w = r, _ = w;
          e:
            for (; _ !== null; ) {
              switch (_.tag) {
                case 5:
                  yn = _.stateNode, tr = !1;
                  break e;
                case 3:
                  yn = _.stateNode.containerInfo, tr = !0;
                  break e;
                case 4:
                  yn = _.stateNode.containerInfo, tr = !0;
                  break e;
              }
              _ = _.return;
            }
          if (yn === null)
            throw Error(d(160));
          Al(h, w, p), yn = null, tr = !1;
          var z = p.alternate;
          z !== null && (z.return = null), p.return = null;
        } catch (G) {
          On(p, r, G);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Ah(r, n), r = r.sibling;
  }
  function Ah(n, r) {
    var o = n.alternate, s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (si(r, n), Oi(n), s & 4) {
          try {
            Ys(3, n, n.return), Ws(3, n);
          } catch (je) {
            On(n, n.return, je);
          }
          try {
            Ys(5, n, n.return);
          } catch (je) {
            On(n, n.return, je);
          }
        }
        break;
      case 1:
        si(r, n), Oi(n), s & 512 && o !== null && Ml(o, o.return);
        break;
      case 5:
        if (si(r, n), Oi(n), s & 512 && o !== null && Ml(o, o.return), n.flags & 32) {
          var p = n.stateNode;
          try {
            ma(p, "");
          } catch (je) {
            On(n, n.return, je);
          }
        }
        if (s & 4 && (p = n.stateNode, p != null)) {
          var h = n.memoizedProps, w = o !== null ? o.memoizedProps : h, _ = n.type, z = n.updateQueue;
          if (n.updateQueue = null, z !== null)
            try {
              _ === "input" && h.type === "radio" && h.name != null && Bn(p, h), En(_, w);
              var G = En(_, h);
              for (w = 0; w < z.length; w += 2) {
                var le = z[w], se = z[w + 1];
                le === "style" ? Vt(p, se) : le === "dangerouslySetInnerHTML" ? mi(p, se) : le === "children" ? ma(p, se) : ie(p, le, se, G);
              }
              switch (_) {
                case "input":
                  kn(p, h);
                  break;
                case "textarea":
                  ha(p, h);
                  break;
                case "select":
                  var ue = p._wrapperState.wasMultiple;
                  p._wrapperState.wasMultiple = !!h.multiple;
                  var xe = h.value;
                  xe != null ? Sr(p, !!h.multiple, xe, !1) : ue !== !!h.multiple && (h.defaultValue != null ? Sr(
                    p,
                    !!h.multiple,
                    h.defaultValue,
                    !0
                  ) : Sr(p, !!h.multiple, h.multiple ? [] : "", !1));
              }
              p[Su] = h;
            } catch (je) {
              On(n, n.return, je);
            }
        }
        break;
      case 6:
        if (si(r, n), Oi(n), s & 4) {
          if (n.stateNode === null)
            throw Error(d(162));
          p = n.stateNode, h = n.memoizedProps;
          try {
            p.nodeValue = h;
          } catch (je) {
            On(n, n.return, je);
          }
        }
        break;
      case 3:
        if (si(r, n), Oi(n), s & 4 && o !== null && o.memoizedState.isDehydrated)
          try {
            xo(r.containerInfo);
          } catch (je) {
            On(n, n.return, je);
          }
        break;
      case 4:
        si(r, n), Oi(n);
        break;
      case 13:
        si(r, n), Oi(n), p = n.child, p.flags & 8192 && (h = p.memoizedState !== null, p.stateNode.isHidden = h, !h || p.alternate !== null && p.alternate.memoizedState !== null || (hp = Lt())), s & 4 && eo(n);
        break;
      case 22:
        if (le = o !== null && o.memoizedState !== null, n.mode & 1 ? (Wn = (G = Wn) || le, si(r, n), Wn = G) : si(r, n), Oi(n), s & 8192) {
          if (G = n.memoizedState !== null, (n.stateNode.isHidden = G) && !le && n.mode & 1)
            for (Me = n, le = n.child; le !== null; ) {
              for (se = Me = le; Me !== null; ) {
                switch (ue = Me, xe = ue.child, ue.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ys(4, ue, ue.return);
                    break;
                  case 1:
                    Ml(ue, ue.return);
                    var Ae = ue.stateNode;
                    if (typeof Ae.componentWillUnmount == "function") {
                      s = ue, o = ue.return;
                      try {
                        r = s, Ae.props = r.memoizedProps, Ae.state = r.memoizedState, Ae.componentWillUnmount();
                      } catch (je) {
                        On(s, o, je);
                      }
                    }
                    break;
                  case 5:
                    Ml(ue, ue.return);
                    break;
                  case 22:
                    if (ue.memoizedState !== null) {
                      pp(se);
                      continue;
                    }
                }
                xe !== null ? (xe.return = ue, Me = xe) : pp(se);
              }
              le = le.sibling;
            }
          e:
            for (le = null, se = n; ; ) {
              if (se.tag === 5) {
                if (le === null) {
                  le = se;
                  try {
                    p = se.stateNode, G ? (h = p.style, typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none") : (_ = se.stateNode, z = se.memoizedProps.style, w = z != null && z.hasOwnProperty("display") ? z.display : null, _.style.display = vt("display", w));
                  } catch (je) {
                    On(n, n.return, je);
                  }
                }
              } else if (se.tag === 6) {
                if (le === null)
                  try {
                    se.stateNode.nodeValue = G ? "" : se.memoizedProps;
                  } catch (je) {
                    On(n, n.return, je);
                  }
              } else if ((se.tag !== 22 && se.tag !== 23 || se.memoizedState === null || se === n) && se.child !== null) {
                se.child.return = se, se = se.child;
                continue;
              }
              if (se === n)
                break e;
              for (; se.sibling === null; ) {
                if (se.return === null || se.return === n)
                  break e;
                le === se && (le = null), se = se.return;
              }
              le === se && (le = null), se.sibling.return = se.return, se = se.sibling;
            }
        }
        break;
      case 19:
        si(r, n), Oi(n), s & 4 && eo(n);
        break;
      case 21:
        break;
      default:
        si(
          r,
          n
        ), Oi(n);
    }
  }
  function Oi(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (Lh(o)) {
              var s = o;
              break e;
            }
            o = o.return;
          }
          throw Error(d(160));
        }
        switch (s.tag) {
          case 5:
            var p = s.stateNode;
            s.flags & 32 && (ma(p, ""), s.flags &= -33);
            var h = yf(n);
            Di(n, h, p);
            break;
          case 3:
          case 4:
            var w = s.stateNode.containerInfo, _ = yf(n);
            Ll(n, _, w);
            break;
          default:
            throw Error(d(161));
        }
      } catch (z) {
        On(n, n.return, z);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function zh(n, r, o) {
    Me = n, zl(n);
  }
  function zl(n, r, o) {
    for (var s = (n.mode & 1) !== 0; Me !== null; ) {
      var p = Me, h = p.child;
      if (p.tag === 22 && s) {
        var w = p.memoizedState !== null || $s;
        if (!w) {
          var _ = p.alternate, z = _ !== null && _.memoizedState !== null || Wn;
          _ = $s;
          var G = Wn;
          if ($s = w, (Wn = z) && !G)
            for (Me = p; Me !== null; )
              w = Me, z = w.child, w.tag === 22 && w.memoizedState !== null ? jh(p) : z !== null ? (z.return = w, Me = z) : jh(p);
          for (; h !== null; )
            Me = h, zl(h), h = h.sibling;
          Me = p, $s = _, Wn = G;
        }
        Uh(n);
      } else
        p.subtreeFlags & 8772 && h !== null ? (h.return = p, Me = h) : Uh(n);
    }
  }
  function Uh(n) {
    for (; Me !== null; ) {
      var r = Me;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Wn || Ws(5, r);
                break;
              case 1:
                var s = r.stateNode;
                if (r.flags & 4 && !Wn)
                  if (o === null)
                    s.componentDidMount();
                  else {
                    var p = r.elementType === r.type ? o.memoizedProps : Ra(r.type, o.memoizedProps);
                    s.componentDidUpdate(p, o.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
                  }
                var h = r.updateQueue;
                h !== null && Cu(r, h, s);
                break;
              case 3:
                var w = r.updateQueue;
                if (w !== null) {
                  if (o = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        o = r.child.stateNode;
                        break;
                      case 1:
                        o = r.child.stateNode;
                    }
                  Cu(r, w, o);
                }
                break;
              case 5:
                var _ = r.stateNode;
                if (o === null && r.flags & 4) {
                  o = _;
                  var z = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      z.autoFocus && o.focus();
                      break;
                    case "img":
                      z.src && (o.src = z.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var G = r.alternate;
                  if (G !== null) {
                    var le = G.memoizedState;
                    if (le !== null) {
                      var se = le.dehydrated;
                      se !== null && xo(se);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(d(163));
            }
          Wn || r.flags & 512 && fp(r);
        } catch (ue) {
          On(r, r.return, ue);
        }
      }
      if (r === n) {
        Me = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, Me = o;
        break;
      }
      Me = r.return;
    }
  }
  function pp(n) {
    for (; Me !== null; ) {
      var r = Me;
      if (r === n) {
        Me = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, Me = o;
        break;
      }
      Me = r.return;
    }
  }
  function jh(n) {
    for (; Me !== null; ) {
      var r = Me;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              Ws(4, r);
            } catch (z) {
              On(r, o, z);
            }
            break;
          case 1:
            var s = r.stateNode;
            if (typeof s.componentDidMount == "function") {
              var p = r.return;
              try {
                s.componentDidMount();
              } catch (z) {
                On(r, p, z);
              }
            }
            var h = r.return;
            try {
              fp(r);
            } catch (z) {
              On(r, h, z);
            }
            break;
          case 5:
            var w = r.return;
            try {
              fp(r);
            } catch (z) {
              On(r, w, z);
            }
        }
      } catch (z) {
        On(r, r.return, z);
      }
      if (r === n) {
        Me = null;
        break;
      }
      var _ = r.sibling;
      if (_ !== null) {
        _.return = r.return, Me = _;
        break;
      }
      Me = r.return;
    }
  }
  var gf = Math.ceil, qs = me.ReactCurrentDispatcher, vp = me.ReactCurrentOwner, Tr = me.ReactCurrentBatchConfig, Ct = 0, bn = null, Dn = null, nr = 0, Ta = 0, Ul = ct(0), qn = 0, Qs = null, to = 0, Sf = 0, jl = 0, Lu = null, zr = null, hp = 0, Fl = 1 / 0, no = null, Ef = !1, Au = null, ki = null, Wo = !1, qo = null, Cf = 0, Pl = 0, wf = null, zu = -1, Uu = 0;
  function _r() {
    return Ct & 6 ? Lt() : zu !== -1 ? zu : zu = Lt();
  }
  function Pn(n) {
    return n.mode & 1 ? Ct & 2 && nr !== 0 ? nr & -nr : Bc.transition !== null ? (Uu === 0 && (Uu = ol()), Uu) : (n = jt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ms(n.type)), n) : 1;
  }
  function xr(n, r, o, s) {
    if (50 < Pl)
      throw Pl = 0, wf = null, Error(d(185));
    Hi(n, o, s), (!(Ct & 2) || n !== bn) && (n === bn && (!(Ct & 2) && (Sf |= o), qn === 4 && Ia(n, nr)), Dr(n, s), o === 1 && Ct === 0 && !(r.mode & 1) && (Fl = Lt() + 500, Zn && ra()));
  }
  function Dr(n, r) {
    var o = n.callbackNode;
    Ro(n, r);
    var s = Lr(n, n === bn ? nr : 0);
    if (s === 0)
      o !== null && or(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = s & -s, n.callbackPriority !== r) {
      if (o != null && or(o), r === 1)
        n.tag === 0 ? Vd(Fh.bind(null, n)) : Hd(Fh.bind(null, n)), jd(function() {
          !(Ct & 6) && ra();
        }), o = null;
      else {
        switch (ll(s)) {
          case 1:
            o = ti;
            break;
          case 4:
            o = mt;
            break;
          case 16:
            o = Ci;
            break;
          case 536870912:
            o = al;
            break;
          default:
            o = Ci;
        }
        o = Cp(o, Hl.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function Hl(n, r) {
    if (zu = -1, Uu = 0, Ct & 6)
      throw Error(d(327));
    var o = n.callbackNode;
    if (Bl() && n.callbackNode !== o)
      return null;
    var s = Lr(n, n === bn ? nr : 0);
    if (s === 0)
      return null;
    if (s & 30 || s & n.expiredLanes || r)
      r = bf(n, s);
    else {
      r = s;
      var p = Ct;
      Ct |= 2;
      var h = Rf();
      (bn !== n || nr !== r) && (no = null, Fl = Lt() + 500, ju(n, r));
      do
        try {
          Cg();
          break;
        } catch (_) {
          Ph(n, _);
        }
      while (!0);
      qd(), qs.current = h, Ct = p, Dn !== null ? r = 0 : (bn = null, nr = 0, r = qn);
    }
    if (r !== 0) {
      if (r === 2 && (p = bo(n), p !== 0 && (s = p, r = mp(n, p))), r === 1)
        throw o = Qs, ju(n, 0), Ia(n, s), Dr(n, Lt()), o;
      if (r === 6)
        Ia(n, s);
      else {
        if (p = n.current.alternate, !(s & 30) && !yp(p) && (r = bf(n, s), r === 2 && (h = bo(n), h !== 0 && (s = h, r = mp(n, h))), r === 1))
          throw o = Qs, ju(n, 0), Ia(n, s), Dr(n, Lt()), o;
        switch (n.finishedWork = p, n.finishedLanes = s, r) {
          case 0:
          case 1:
            throw Error(d(345));
          case 2:
            Fu(n, zr, no);
            break;
          case 3:
            if (Ia(n, s), (s & 130023424) === s && (r = hp + 500 - Lt(), 10 < r)) {
              if (Lr(n, 0) !== 0)
                break;
              if (p = n.suspendedLanes, (p & s) !== s) {
                _r(), n.pingedLanes |= n.suspendedLanes & p;
                break;
              }
              n.timeoutHandle = gu(Fu.bind(null, n, zr, no), r);
              break;
            }
            Fu(n, zr, no);
            break;
          case 4:
            if (Ia(n, s), (s & 4194240) === s)
              break;
            for (r = n.eventTimes, p = -1; 0 < s; ) {
              var w = 31 - Mr(s);
              h = 1 << w, w = r[w], w > p && (p = w), s &= ~h;
            }
            if (s = p, s = Lt() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * gf(s / 1960)) - s, 10 < s) {
              n.timeoutHandle = gu(Fu.bind(null, n, zr, no), s);
              break;
            }
            Fu(n, zr, no);
            break;
          case 5:
            Fu(n, zr, no);
            break;
          default:
            throw Error(d(329));
        }
      }
    }
    return Dr(n, Lt()), n.callbackNode === o ? Hl.bind(null, n) : null;
  }
  function mp(n, r) {
    var o = Lu;
    return n.current.memoizedState.isDehydrated && (ju(n, r).flags |= 256), n = bf(n, r), n !== 2 && (r = zr, zr = o, r !== null && Gs(r)), n;
  }
  function Gs(n) {
    zr === null ? zr = n : zr.push.apply(zr, n);
  }
  function yp(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null))
          for (var s = 0; s < o.length; s++) {
            var p = o[s], h = p.getSnapshot;
            p = p.value;
            try {
              if (!Aa(h(), p))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (o = r.child, r.subtreeFlags & 16384 && o !== null)
        o.return = r, r = o;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Ia(n, r) {
    for (r &= ~jl, r &= ~Sf, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - Mr(r), s = 1 << o;
      n[o] = -1, r &= ~s;
    }
  }
  function Fh(n) {
    if (Ct & 6)
      throw Error(d(327));
    Bl();
    var r = Lr(n, 0);
    if (!(r & 1))
      return Dr(n, Lt()), null;
    var o = bf(n, r);
    if (n.tag !== 0 && o === 2) {
      var s = bo(n);
      s !== 0 && (r = s, o = mp(n, s));
    }
    if (o === 1)
      throw o = Qs, ju(n, 0), Ia(n, r), Dr(n, Lt()), o;
    if (o === 6)
      throw Error(d(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Fu(n, zr, no), Dr(n, Lt()), null;
  }
  function Vl(n, r) {
    var o = Ct;
    Ct |= 1;
    try {
      return n(r);
    } finally {
      Ct = o, Ct === 0 && (Fl = Lt() + 500, Zn && ra());
    }
  }
  function Qo(n) {
    qo !== null && qo.tag === 0 && !(Ct & 6) && Bl();
    var r = Ct;
    Ct |= 1;
    var o = Tr.transition, s = jt;
    try {
      if (Tr.transition = null, jt = 1, n)
        return n();
    } finally {
      jt = s, Tr.transition = o, Ct = r, !(Ct & 6) && ra();
    }
  }
  function gp() {
    Ta = Ul.current, Bt(Ul);
  }
  function ju(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, dh(o)), Dn !== null)
      for (o = Dn.return; o !== null; ) {
        var s = o;
        switch ($d(s), s.tag) {
          case 1:
            s = s.type.childContextTypes, s != null && ja();
            break;
          case 3:
            Bo(), Bt(xn), Bt(tt), Qc();
            break;
          case 5:
            gt(s);
            break;
          case 4:
            Bo();
            break;
          case 13:
            Bt(Xe);
            break;
          case 19:
            Bt(Xe);
            break;
          case 10:
            Fo(s.type._context);
            break;
          case 22:
          case 23:
            gp();
        }
        o = o.return;
      }
    if (bn = n, Dn = n = Go(n.current, null), nr = Ta = r, qn = 0, Qs = null, jl = Sf = to = 0, zr = Lu = null, lr !== null) {
      for (r = 0; r < lr.length; r++)
        if (o = lr[r], s = o.interleaved, s !== null) {
          o.interleaved = null;
          var p = s.next, h = o.pending;
          if (h !== null) {
            var w = h.next;
            h.next = p, s.next = w;
          }
          o.pending = s;
        }
      lr = null;
    }
    return n;
  }
  function Ph(n, r) {
    do {
      var o = Dn;
      try {
        if (qd(), Gc.current = df, Je) {
          for (var s = dn.memoizedState; s !== null; ) {
            var p = s.queue;
            p !== null && (p.pending = null), s = s.next;
          }
          Je = !1;
        }
        if (Ru = 0, xt = ee = dn = null, xi = !1, ba = 0, vp.current = null, o === null || o.return === null) {
          qn = 1, Qs = r, Dn = null;
          break;
        }
        e: {
          var h = n, w = o.return, _ = o, z = r;
          if (r = nr, _.flags |= 32768, z !== null && typeof z == "object" && typeof z.then == "function") {
            var G = z, le = _, se = le.tag;
            if (!(le.mode & 1) && (se === 0 || se === 11 || se === 15)) {
              var ue = le.alternate;
              ue ? (le.updateQueue = ue.updateQueue, le.memoizedState = ue.memoizedState, le.lanes = ue.lanes) : (le.updateQueue = null, le.memoizedState = null);
            }
            var xe = np(w);
            if (xe !== null) {
              xe.flags &= -257, rp(xe, w, _, h, r), xe.mode & 1 && xh(h, G, r), r = xe, z = G;
              var Ae = r.updateQueue;
              if (Ae === null) {
                var je = /* @__PURE__ */ new Set();
                je.add(z), r.updateQueue = je;
              } else
                Ae.add(z);
              break e;
            } else {
              if (!(r & 1)) {
                xh(h, G, r), Sp();
                break e;
              }
              z = Error(d(426));
            }
          } else if (fn && _.mode & 1) {
            var Ln = np(w);
            if (Ln !== null) {
              !(Ln.flags & 65536) && (Ln.flags |= 256), rp(Ln, w, _, h, r), Yd(Ol(z, _));
              break e;
            }
          }
          h = z = Ol(z, _), qn !== 4 && (qn = 2), Lu === null ? Lu = [h] : Lu.push(h), h = w;
          do {
            switch (h.tag) {
              case 3:
                h.flags |= 65536, r &= -r, h.lanes |= r;
                var H = _h(h, z, r);
                Kd(h, H);
                break e;
              case 1:
                _ = z;
                var j = h.type, $ = h.stateNode;
                if (!(h.flags & 128) && (typeof j.getDerivedStateFromError == "function" || $ !== null && typeof $.componentDidCatch == "function" && (ki === null || !ki.has($)))) {
                  h.flags |= 65536, r &= -r, h.lanes |= r;
                  var pe = Hs(h, _, r);
                  Kd(h, pe);
                  break e;
                }
            }
            h = h.return;
          } while (h !== null);
        }
        Ep(o);
      } catch (Fe) {
        r = Fe, Dn === o && o !== null && (Dn = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Rf() {
    var n = qs.current;
    return qs.current = df, n === null ? df : n;
  }
  function Sp() {
    (qn === 0 || qn === 3 || qn === 2) && (qn = 4), bn === null || !(to & 268435455) && !(Sf & 268435455) || Ia(bn, nr);
  }
  function bf(n, r) {
    var o = Ct;
    Ct |= 2;
    var s = Rf();
    (bn !== n || nr !== r) && (no = null, ju(n, r));
    do
      try {
        Eg();
        break;
      } catch (p) {
        Ph(n, p);
      }
    while (!0);
    if (qd(), Ct = o, qs.current = s, Dn !== null)
      throw Error(d(261));
    return bn = null, nr = 0, qn;
  }
  function Eg() {
    for (; Dn !== null; )
      Hh(Dn);
  }
  function Cg() {
    for (; Dn !== null && !Ei(); )
      Hh(Dn);
  }
  function Hh(n) {
    var r = Bh(n.alternate, n, Ta);
    n.memoizedProps = n.pendingProps, r === null ? Ep(n) : Dn = r, vp.current = null;
  }
  function Ep(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = cp(o, r), o !== null) {
          o.flags &= 32767, Dn = o;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          qn = 6, Dn = null;
          return;
        }
      } else if (o = Sg(o, r, Ta), o !== null) {
        Dn = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        Dn = r;
        return;
      }
      Dn = r = n;
    } while (r !== null);
    qn === 0 && (qn = 5);
  }
  function Fu(n, r, o) {
    var s = jt, p = Tr.transition;
    try {
      Tr.transition = null, jt = 1, wg(n, r, o, s);
    } finally {
      Tr.transition = p, jt = s;
    }
    return null;
  }
  function wg(n, r, o, s) {
    do
      Bl();
    while (qo !== null);
    if (Ct & 6)
      throw Error(d(327));
    o = n.finishedWork;
    var p = n.finishedLanes;
    if (o === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current)
      throw Error(d(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var h = o.lanes | o.childLanes;
    if (md(n, h), n === bn && (Dn = bn = null, nr = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || Wo || (Wo = !0, Cp(Ci, function() {
      return Bl(), null;
    })), h = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || h) {
      h = Tr.transition, Tr.transition = null;
      var w = jt;
      jt = 1;
      var _ = Ct;
      Ct |= 4, vp.current = null, Mh(n, o), Ah(o, n), Nc(yu), La = !!zd, yu = zd = null, n.current = o, zh(o), rl(), Ct = _, jt = w, Tr.transition = h;
    } else
      n.current = o;
    if (Wo && (Wo = !1, qo = n, Cf = p), h = n.pendingLanes, h === 0 && (ki = null), ps(o.stateNode), Dr(n, Lt()), r !== null)
      for (s = n.onRecoverableError, o = 0; o < r.length; o++)
        p = r[o], s(p.value, { componentStack: p.stack, digest: p.digest });
    if (Ef)
      throw Ef = !1, n = Au, Au = null, n;
    return Cf & 1 && n.tag !== 0 && Bl(), h = n.pendingLanes, h & 1 ? n === wf ? Pl++ : (Pl = 0, wf = n) : Pl = 0, ra(), null;
  }
  function Bl() {
    if (qo !== null) {
      var n = ll(Cf), r = Tr.transition, o = jt;
      try {
        if (Tr.transition = null, jt = 16 > n ? 16 : n, qo === null)
          var s = !1;
        else {
          if (n = qo, qo = null, Cf = 0, Ct & 6)
            throw Error(d(331));
          var p = Ct;
          for (Ct |= 4, Me = n.current; Me !== null; ) {
            var h = Me, w = h.child;
            if (Me.flags & 16) {
              var _ = h.deletions;
              if (_ !== null) {
                for (var z = 0; z < _.length; z++) {
                  var G = _[z];
                  for (Me = G; Me !== null; ) {
                    var le = Me;
                    switch (le.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ys(8, le, h);
                    }
                    var se = le.child;
                    if (se !== null)
                      se.return = le, Me = se;
                    else
                      for (; Me !== null; ) {
                        le = Me;
                        var ue = le.sibling, xe = le.return;
                        if (dp(le), le === G) {
                          Me = null;
                          break;
                        }
                        if (ue !== null) {
                          ue.return = xe, Me = ue;
                          break;
                        }
                        Me = xe;
                      }
                  }
                }
                var Ae = h.alternate;
                if (Ae !== null) {
                  var je = Ae.child;
                  if (je !== null) {
                    Ae.child = null;
                    do {
                      var Ln = je.sibling;
                      je.sibling = null, je = Ln;
                    } while (je !== null);
                  }
                }
                Me = h;
              }
            }
            if (h.subtreeFlags & 2064 && w !== null)
              w.return = h, Me = w;
            else
              e:
                for (; Me !== null; ) {
                  if (h = Me, h.flags & 2048)
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ys(9, h, h.return);
                    }
                  var H = h.sibling;
                  if (H !== null) {
                    H.return = h.return, Me = H;
                    break e;
                  }
                  Me = h.return;
                }
          }
          var j = n.current;
          for (Me = j; Me !== null; ) {
            w = Me;
            var $ = w.child;
            if (w.subtreeFlags & 2064 && $ !== null)
              $.return = w, Me = $;
            else
              e:
                for (w = j; Me !== null; ) {
                  if (_ = Me, _.flags & 2048)
                    try {
                      switch (_.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Ws(9, _);
                      }
                    } catch (Fe) {
                      On(_, _.return, Fe);
                    }
                  if (_ === w) {
                    Me = null;
                    break e;
                  }
                  var pe = _.sibling;
                  if (pe !== null) {
                    pe.return = _.return, Me = pe;
                    break e;
                  }
                  Me = _.return;
                }
          }
          if (Ct = p, ra(), Jr && typeof Jr.onPostCommitFiberRoot == "function")
            try {
              Jr.onPostCommitFiberRoot(Eo, n);
            } catch {
            }
          s = !0;
        }
        return s;
      } finally {
        jt = o, Tr.transition = r;
      }
    }
    return !1;
  }
  function Vh(n, r, o) {
    r = Ol(o, r), r = _h(n, r, 1), n = Ho(n, r, 1), r = _r(), n !== null && (Hi(n, 1, r), Dr(n, r));
  }
  function On(n, r, o) {
    if (n.tag === 3)
      Vh(n, n, o);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Vh(r, n, o);
          break;
        } else if (r.tag === 1) {
          var s = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (ki === null || !ki.has(s))) {
            n = Ol(o, n), n = Hs(r, n, 1), r = Ho(r, n, 1), n = _r(), r !== null && (Hi(r, 1, n), Dr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function Rg(n, r, o) {
    var s = n.pingCache;
    s !== null && s.delete(r), r = _r(), n.pingedLanes |= n.suspendedLanes & o, bn === n && (nr & o) === o && (qn === 4 || qn === 3 && (nr & 130023424) === nr && 500 > Lt() - hp ? ju(n, 0) : jl |= o), Dr(n, r);
  }
  function Tf(n, r) {
    r === 0 && (n.mode & 1 ? (r = Co, Co <<= 1, !(Co & 130023424) && (Co = 4194304)) : r = 1);
    var o = _r();
    n = Ki(n, r), n !== null && (Hi(n, r, o), Dr(n, o));
  }
  function bg(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), Tf(n, o);
  }
  function Tg(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var s = n.stateNode, p = n.memoizedState;
        p !== null && (o = p.retryLane);
        break;
      case 19:
        s = n.stateNode;
        break;
      default:
        throw Error(d(314));
    }
    s !== null && s.delete(r), Tf(n, o);
  }
  var Bh;
  Bh = function(n, r, o) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || xn.current)
        Fn = !0;
      else {
        if (!(n.lanes & o) && !(r.flags & 128))
          return Fn = !1, Zi(n, r, o);
        Fn = !!(n.flags & 131072);
      }
    else
      Fn = !1, fn && r.flags & 1048576 && Bd(r, wl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var s = r.type;
        Rr(n, r), n = r.pendingProps;
        var p = Ua(r, tt.current);
        Se(r, o), p = $o(null, r, s, n, p, o);
        var h = _u();
        return r.flags |= 1, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, mn(s) ? (h = !0, jc(r)) : h = !1, r.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Gd(r), p.updater = Yc, r.stateNode = p, p._reactInternals = r, Wc(r, s, n, o), r = Dh(null, r, s, !0, h, o)) : (r.tag = 0, fn && h && Fc(r), In(null, r, p, o), r = r.child), r;
      case 16:
        s = r.elementType;
        e: {
          switch (Rr(n, r), n = r.pendingProps, p = s._init, s = p(s._payload), r.type = s, p = r.tag = xg(s), n = Ra(s, n), p) {
            case 0:
              r = kl(null, r, s, n, o);
              break e;
            case 1:
              r = ap(null, r, s, n, o);
              break e;
            case 11:
              r = Yo(null, r, s, n, o);
              break e;
            case 14:
              r = vf(null, r, s, Ra(s.type, n), o);
              break e;
          }
          throw Error(d(
            306,
            s,
            ""
          ));
        }
        return r;
      case 0:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : Ra(s, p), kl(n, r, s, p, o);
      case 1:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : Ra(s, p), ap(n, r, s, p, o);
      case 3:
        e: {
          if (Oh(r), n === null)
            throw Error(d(387));
          s = r.pendingProps, h = r.memoizedState, p = h.element, $n(n, r), Vo(r, s, null, o);
          var w = r.memoizedState;
          if (s = w.element, h.isDehydrated)
            if (h = { element: s, isDehydrated: !1, cache: w.cache, pendingSuspenseBoundaries: w.pendingSuspenseBoundaries, transitions: w.transitions }, r.updateQueue.baseState = h, r.memoizedState = h, r.flags & 256) {
              p = Ol(Error(d(423)), r), r = hf(n, r, s, o, p);
              break e;
            } else if (s !== p) {
              p = Ol(Error(d(424)), r), r = hf(n, r, s, o, p);
              break e;
            } else
              for (oa = ui(r.stateNode.containerInfo.firstChild), wa = r, fn = !0, Pa = null, o = bh(r, null, s, o), r.child = o; o; )
                o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (wn(), s === p) {
              r = sr(n, r, o);
              break e;
            }
            In(n, r, s, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Ge(r), n === null && Hc(r), s = r.type, p = r.pendingProps, h = n !== null ? n.memoizedProps : null, w = p.children, Ds(s, p) ? w = null : h !== null && Ds(s, h) && (r.flags |= 32), ft(n, r), In(n, r, w, o), r.child;
      case 6:
        return n === null && Hc(r), null;
      case 13:
        return op(n, r, o);
      case 4:
        return Jd(r, r.stateNode.containerInfo), s = r.pendingProps, n === null ? r.child = bl(r, null, s, o) : In(n, r, s, o), r.child;
      case 11:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : Ra(s, p), Yo(n, r, s, p, o);
      case 7:
        return In(n, r, r.pendingProps, o), r.child;
      case 8:
        return In(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return In(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (s = r.type._context, p = r.pendingProps, h = r.memoizedProps, w = p.value, Qt(_i, s._currentValue), s._currentValue = w, h !== null)
            if (Aa(h.value, w)) {
              if (h.children === p.children && !xn.current) {
                r = sr(n, r, o);
                break e;
              }
            } else
              for (h = r.child, h !== null && (h.return = r); h !== null; ) {
                var _ = h.dependencies;
                if (_ !== null) {
                  w = h.child;
                  for (var z = _.firstContext; z !== null; ) {
                    if (z.context === s) {
                      if (h.tag === 1) {
                        z = Xi(-1, o & -o), z.tag = 2;
                        var G = h.updateQueue;
                        if (G !== null) {
                          G = G.shared;
                          var le = G.pending;
                          le === null ? z.next = z : (z.next = le.next, le.next = z), G.pending = z;
                        }
                      }
                      h.lanes |= o, z = h.alternate, z !== null && (z.lanes |= o), er(
                        h.return,
                        o,
                        r
                      ), _.lanes |= o;
                      break;
                    }
                    z = z.next;
                  }
                } else if (h.tag === 10)
                  w = h.type === r.type ? null : h.child;
                else if (h.tag === 18) {
                  if (w = h.return, w === null)
                    throw Error(d(341));
                  w.lanes |= o, _ = w.alternate, _ !== null && (_.lanes |= o), er(w, o, r), w = h.sibling;
                } else
                  w = h.child;
                if (w !== null)
                  w.return = h;
                else
                  for (w = h; w !== null; ) {
                    if (w === r) {
                      w = null;
                      break;
                    }
                    if (h = w.sibling, h !== null) {
                      h.return = w.return, w = h;
                      break;
                    }
                    w = w.return;
                  }
                h = w;
              }
          In(n, r, p.children, o), r = r.child;
        }
        return r;
      case 9:
        return p = r.type, s = r.pendingProps.children, Se(r, o), p = Mn(p), s = s(p), r.flags |= 1, In(n, r, s, o), r.child;
      case 14:
        return s = r.type, p = Ra(s, r.pendingProps), p = Ra(s.type, p), vf(n, r, s, p, o);
      case 15:
        return sa(n, r, r.type, r.pendingProps, o);
      case 17:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : Ra(s, p), Rr(n, r), r.tag = 1, mn(s) ? (n = !0, jc(r)) : n = !1, Se(r, o), Eh(r, s, p), Wc(r, s, p, o), Dh(null, r, s, !0, n, o);
      case 19:
        return sp(n, r, o);
      case 22:
        return ku(n, r, o);
    }
    throw Error(d(156, r.tag));
  };
  function Cp(n, r) {
    return ln(n, r);
  }
  function _g(n, r, o, s) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ya(n, r, o, s) {
    return new _g(n, r, o, s);
  }
  function wp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function xg(n) {
    if (typeof n == "function")
      return wp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === on)
        return 11;
      if (n === Mt)
        return 14;
    }
    return 2;
  }
  function Go(n, r) {
    var o = n.alternate;
    return o === null ? (o = Ya(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function _f(n, r, o, s, p, h) {
    var w = 2;
    if (s = n, typeof n == "function")
      wp(n) && (w = 1);
    else if (typeof n == "string")
      w = 5;
    else
      e:
        switch (n) {
          case _e:
            return Pu(o.children, p, h, r);
          case He:
            w = 8, p |= 8;
            break;
          case bt:
            return n = Ya(12, o, r, p | 2), n.elementType = bt, n.lanes = h, n;
          case Ie:
            return n = Ya(13, o, r, p), n.elementType = Ie, n.lanes = h, n;
          case ot:
            return n = Ya(19, o, r, p), n.elementType = ot, n.lanes = h, n;
          case Le:
            return Ks(o, p, h, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Nt:
                  w = 10;
                  break e;
                case ht:
                  w = 9;
                  break e;
                case on:
                  w = 11;
                  break e;
                case Mt:
                  w = 14;
                  break e;
                case St:
                  w = 16, s = null;
                  break e;
              }
            throw Error(d(130, n == null ? n : typeof n, ""));
        }
    return r = Ya(w, o, r, p), r.elementType = n, r.type = s, r.lanes = h, r;
  }
  function Pu(n, r, o, s) {
    return n = Ya(7, n, s, r), n.lanes = o, n;
  }
  function Ks(n, r, o, s) {
    return n = Ya(22, n, s, r), n.elementType = Le, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function Xs(n, r, o) {
    return n = Ya(6, n, null, r), n.lanes = o, n;
  }
  function Hu(n, r, o) {
    return r = Ya(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Dg(n, r, o, s, p) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ul(0), this.expirationTimes = ul(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ul(0), this.identifierPrefix = s, this.onRecoverableError = p, this.mutableSourceEagerHydrationData = null;
  }
  function xf(n, r, o, s, p, h, w, _, z) {
    return n = new Dg(n, r, o, _, z), r === 1 ? (r = 1, h === !0 && (r |= 8)) : r = 0, h = Ya(3, null, null, r), n.current = h, h.stateNode = n, h.memoizedState = { element: s, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Gd(h), n;
  }
  function $h(n, r, o) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Re, key: s == null ? null : "" + s, children: n, containerInfo: r, implementation: o };
  }
  function Rp(n) {
    if (!n)
      return Ti;
    n = n._reactInternals;
    e: {
      if (lt(n) !== n || n.tag !== 1)
        throw Error(d(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (mn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(d(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (mn(o))
        return Ns(n, o, r);
    }
    return r;
  }
  function Ih(n, r, o, s, p, h, w, _, z) {
    return n = xf(o, s, !0, n, p, h, w, _, z), n.context = Rp(null), o = n.current, s = _r(), p = Pn(o), h = Xi(s, p), h.callback = r ?? null, Ho(o, h, p), n.current.lanes = p, Hi(n, p, s), Dr(n, s), n;
  }
  function Js(n, r, o, s) {
    var p = r.current, h = _r(), w = Pn(p);
    return o = Rp(o), r.context === null ? r.context = o : r.pendingContext = o, r = Xi(h, w), r.payload = { element: n }, s = s === void 0 ? null : s, s !== null && (r.callback = s), n = Ho(p, r, w), n !== null && (xr(n, p, w, h), Ic(n, p, w)), w;
  }
  function Df(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Yh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function bp(n, r) {
    Yh(n, r), (n = n.alternate) && Yh(n, r);
  }
  function Wh() {
    return null;
  }
  var Tp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Of(n) {
    this._internalRoot = n;
  }
  ro.prototype.render = Of.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(d(409));
    Js(n, r, null, null);
  }, ro.prototype.unmount = Of.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Qo(function() {
        Js(null, n, null, null);
      }), r[Qi] = null;
    }
  };
  function ro(n) {
    this._internalRoot = n;
  }
  ro.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = cl();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < qt.length && r !== 0 && r < qt[o].priority; o++)
        ;
      qt.splice(o, 0, n), o === 0 && bc(n);
    }
  };
  function _p(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function kf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function qh() {
  }
  function Og(n, r, o, s, p) {
    if (p) {
      if (typeof s == "function") {
        var h = s;
        s = function() {
          var G = Df(w);
          h.call(G);
        };
      }
      var w = Ih(r, s, n, 0, null, !1, !1, "", qh);
      return n._reactRootContainer = w, n[Qi] = w.current, El(n.nodeType === 8 ? n.parentNode : n), Qo(), w;
    }
    for (; p = n.lastChild; )
      n.removeChild(p);
    if (typeof s == "function") {
      var _ = s;
      s = function() {
        var G = Df(z);
        _.call(G);
      };
    }
    var z = xf(n, 0, !1, null, null, !1, !1, "", qh);
    return n._reactRootContainer = z, n[Qi] = z.current, El(n.nodeType === 8 ? n.parentNode : n), Qo(function() {
      Js(r, z, o, s);
    }), z;
  }
  function Nf(n, r, o, s, p) {
    var h = o._reactRootContainer;
    if (h) {
      var w = h;
      if (typeof p == "function") {
        var _ = p;
        p = function() {
          var z = Df(w);
          _.call(z);
        };
      }
      Js(r, w, n, p);
    } else
      w = Og(o, r, n, p, s);
    return Df(w);
  }
  cu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = ni(r.pendingLanes);
          o !== 0 && (wi(r, o | 1), Dr(r, Lt()), !(Ct & 6) && (Fl = Lt() + 500, ra()));
        }
        break;
      case 13:
        Qo(function() {
          var s = Ki(n, 1);
          if (s !== null) {
            var p = _r();
            xr(s, n, 1, p);
          }
        }), bp(n, 1);
    }
  }, sl = function(n) {
    if (n.tag === 13) {
      var r = Ki(n, 134217728);
      if (r !== null) {
        var o = _r();
        xr(r, n, 134217728, o);
      }
      bp(n, 134217728);
    }
  }, At = function(n) {
    if (n.tag === 13) {
      var r = Pn(n), o = Ki(n, r);
      if (o !== null) {
        var s = _r();
        xr(o, n, r, s);
      }
      bp(n, r);
    }
  }, cl = function() {
    return jt;
  }, fl = function(n, r) {
    var o = jt;
    try {
      return jt = n, r();
    } finally {
      jt = o;
    }
  }, kr = function(n, r, o) {
    switch (r) {
      case "input":
        if (kn(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; )
            o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var s = o[r];
            if (s !== n && s.form === n.form) {
              var p = Ye(s);
              if (!p)
                throw Error(d(90));
              qr(s), kn(s, p);
            }
          }
        }
        break;
      case "textarea":
        ha(n, o);
        break;
      case "select":
        r = o.value, r != null && Sr(n, !!o.multiple, r, !1);
    }
  }, su = Vl, nl = Qo;
  var kg = { usingClientEntryPoint: !1, Events: [ks, Cl, Ye, Na, yo, Vl] }, $l = { findFiberByHostInstance: za, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Ng = { bundleType: $l.bundleType, version: $l.version, rendererPackageName: $l.rendererPackageName, rendererConfig: $l.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: me.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Un(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: $l.findFiberByHostInstance || Wh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Mf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Mf.isDisabled && Mf.supportsFiber)
      try {
        Eo = Mf.inject(Ng), Jr = Mf;
      } catch {
      }
  }
  return Xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kg, Xa.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!_p(r))
      throw Error(d(200));
    return $h(n, r, null, o);
  }, Xa.createRoot = function(n, r) {
    if (!_p(n))
      throw Error(d(299));
    var o = !1, s = "", p = Tp;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (s = r.identifierPrefix), r.onRecoverableError !== void 0 && (p = r.onRecoverableError)), r = xf(n, 1, !1, null, null, o, !1, s, p), n[Qi] = r.current, El(n.nodeType === 8 ? n.parentNode : n), new Of(r);
  }, Xa.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(d(188)) : (n = Object.keys(n).join(","), Error(d(268, n)));
    return n = Un(r), n = n === null ? null : n.stateNode, n;
  }, Xa.flushSync = function(n) {
    return Qo(n);
  }, Xa.hydrate = function(n, r, o) {
    if (!kf(r))
      throw Error(d(200));
    return Nf(null, n, r, !0, o);
  }, Xa.hydrateRoot = function(n, r, o) {
    if (!_p(n))
      throw Error(d(405));
    var s = o != null && o.hydratedSources || null, p = !1, h = "", w = Tp;
    if (o != null && (o.unstable_strictMode === !0 && (p = !0), o.identifierPrefix !== void 0 && (h = o.identifierPrefix), o.onRecoverableError !== void 0 && (w = o.onRecoverableError)), r = Ih(r, null, n, 1, o ?? null, p, !1, h, w), n[Qi] = r.current, El(n), s)
      for (n = 0; n < s.length; n++)
        o = s[n], p = o._getVersion, p = p(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, p] : r.mutableSourceEagerHydrationData.push(
          o,
          p
        );
    return new ro(r);
  }, Xa.render = function(n, r, o) {
    if (!kf(r))
      throw Error(d(200));
    return Nf(null, n, r, !1, o);
  }, Xa.unmountComponentAtNode = function(n) {
    if (!kf(n))
      throw Error(d(40));
    return n._reactRootContainer ? (Qo(function() {
      Nf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Qi] = null;
      });
    }), !0) : !1;
  }, Xa.unstable_batchedUpdates = Vl, Xa.unstable_renderSubtreeIntoContainer = function(n, r, o, s) {
    if (!kf(o))
      throw Error(d(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(d(38));
    return Nf(n, r, o, !1, s);
  }, Xa.version = "18.2.0-next-9e3b772b8-20220608", Xa;
}
var Ja = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zb;
function DN() {
  return Zb || (Zb = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var l = Ec(), f = kT(), d = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, m = !1;
    function C(e) {
      m = e;
    }
    function R(e) {
      if (!m) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        D("warn", e, a);
      }
    }
    function y(e) {
      if (!m) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        D("error", e, a);
      }
    }
    function D(e, t, a) {
      {
        var i = d.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var c = a.map(function(v) {
          return String(v);
        });
        c.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var M = 0, O = 1, L = 2, x = 3, P = 4, Q = 5, I = 6, X = 7, ne = 8, we = 9, he = 10, ie = 11, me = 12, fe = 13, Re = 14, _e = 15, He = 16, bt = 17, Nt = 18, ht = 19, on = 21, Ie = 22, ot = 23, Mt = 24, St = 25, Le = !0, ve = !1, Ve = !1, A = !1, re = !1, be = !0, rt = !1, Ze = !1, Tt = !0, dt = !0, Et = !0, pt = /* @__PURE__ */ new Set(), $t = {}, Wr = {};
    function gr(e, t) {
      qr(e, t), qr(e + "Capture", t);
    }
    function qr(e, t) {
      $t[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), $t[e] = t;
      {
        var a = e.toLowerCase();
        Wr[a] = e, e === "onDoubleClick" && (Wr.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        pt.add(t[i]);
    }
    var gn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Gn = Object.prototype.hasOwnProperty;
    function Vn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Bn(e) {
      try {
        return kn(e), !1;
      } catch {
        return !0;
      }
    }
    function kn(e) {
      return "" + e;
    }
    function Qr(e, t) {
      if (Bn(e))
        return y("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Vn(e)), kn(e);
    }
    function Gr(e) {
      if (Bn(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Vn(e)), kn(e);
    }
    function Kn(e, t) {
      if (Bn(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Vn(e)), kn(e);
    }
    function Sr(e, t) {
      if (Bn(e))
        return y("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Vn(e)), kn(e);
    }
    function Kr(e) {
      if (Bn(e))
        return y("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Vn(e)), kn(e);
    }
    function Er(e) {
      if (Bn(e))
        return y("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Vn(e)), kn(e);
    }
    var ha = 0, ir = 1, Xr = 2, Sn = 3, Or = 4, mi = 5, ma = 6, ye = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Be = ye + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", vt = new RegExp("^[" + ye + "][" + Be + "]*$"), Vt = {}, It = {};
    function Nn(e) {
      return Gn.call(It, e) ? !0 : Gn.call(Vt, e) ? !1 : vt.test(e) ? (It[e] = !0, !0) : (Vt[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function En(e, t, a) {
      return t !== null ? t.type === ha : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Cr(e, t, a, i) {
      if (a !== null && a.type === ha)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Kt(e, t, a, i) {
      if (t === null || typeof t > "u" || Cr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Sn:
            return !t;
          case Or:
            return t === !1;
          case mi:
            return isNaN(t);
          case ma:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function kr(e) {
      return Wt.hasOwnProperty(e) ? Wt[e] : null;
    }
    function Yt(e, t, a, i, u, c, v) {
      this.acceptsBooleans = t === Xr || t === Sn || t === Or, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = c, this.removeEmptyString = v;
    }
    var Wt = {}, ei = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ei.forEach(function(e) {
      Wt[e] = new Yt(
        e,
        ha,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Wt[t] = new Yt(
        t,
        ir,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Wt[e] = new Yt(
        e,
        Xr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Wt[e] = new Yt(
        e,
        Xr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Wt[e] = new Yt(
        e,
        Sn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Wt[e] = new Yt(
        e,
        Sn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Wt[e] = new Yt(
        e,
        Or,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Wt[e] = new Yt(
        e,
        ma,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Wt[e] = new Yt(
        e,
        mi,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Na = /[\-\:]([a-z])/g, yo = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Na, yo);
      Wt[t] = new Yt(
        t,
        ir,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Na, yo);
      Wt[t] = new Yt(
        t,
        ir,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Na, yo);
      Wt[t] = new Yt(
        t,
        ir,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Wt[e] = new Yt(
        e,
        ir,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var su = "xlinkHref";
    Wt[su] = new Yt(
      "xlinkHref",
      ir,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Wt[e] = new Yt(
        e,
        ir,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var nl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Pi = !1;
    function go(e) {
      !Pi && nl.test(e) && (Pi = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function ya(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Qr(a, t), i.sanitizeURL && go("" + a);
        var c = i.attributeName, v = null;
        if (i.type === Or) {
          if (e.hasAttribute(c)) {
            var g = e.getAttribute(c);
            return g === "" ? !0 : Kt(t, a, i, !1) ? g : g === "" + a ? a : g;
          }
        } else if (e.hasAttribute(c)) {
          if (Kt(t, a, i, !1))
            return e.getAttribute(c);
          if (i.type === Sn)
            return a;
          v = e.getAttribute(c);
        }
        return Kt(t, a, i, !1) ? v === null ? a : v : v === "" + a ? a : v;
      }
    }
    function yi(e, t, a, i) {
      {
        if (!Nn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Qr(a, t), u === "" + a ? a : u;
      }
    }
    function ga(e, t, a, i) {
      var u = kr(t);
      if (!En(t, u, i)) {
        if (Kt(t, a, u, i) && (a = null), i || u === null) {
          if (Nn(t)) {
            var c = t;
            a === null ? e.removeAttribute(c) : (Qr(a, t), e.setAttribute(c, "" + a));
          }
          return;
        }
        var v = u.mustUseProperty;
        if (v) {
          var g = u.propertyName;
          if (a === null) {
            var S = u.type;
            e[g] = S === Sn ? !1 : "";
          } else
            e[g] = a;
          return;
        }
        var b = u.attributeName, T = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(b);
        else {
          var F = u.type, U;
          F === Sn || F === Or && a === !0 ? U = "" : (Qr(a, b), U = "" + a, u.sanitizeURL && go(U.toString())), T ? e.setAttributeNS(T, b, U) : e.setAttribute(b, U);
        }
      }
    }
    var gi = Symbol.for("react.element"), Nr = Symbol.for("react.portal"), Sa = Symbol.for("react.fragment"), Si = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), oe = Symbol.for("react.provider"), ge = Symbol.for("react.context"), Oe = Symbol.for("react.forward_ref"), lt = Symbol.for("react.suspense"), _t = Symbol.for("react.suspense_list"), st = Symbol.for("react.memo"), We = Symbol.for("react.lazy"), Un = Symbol.for("react.scope"), un = Symbol.for("react.debug_trace_mode"), ln = Symbol.for("react.offscreen"), or = Symbol.for("react.legacy_hidden"), Ei = Symbol.for("react.cache"), rl = Symbol.for("react.tracing_marker"), Lt = Symbol.iterator, hd = "@@iterator";
    function ti(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Lt && e[Lt] || e[hd];
      return typeof t == "function" ? t : null;
    }
    var mt = Object.assign, Ci = 0, So, al, Eo, Jr, ps, Mr, vs;
    function hs() {
    }
    hs.__reactDisabledLog = !0;
    function wc() {
      {
        if (Ci === 0) {
          So = console.log, al = console.info, Eo = console.warn, Jr = console.error, ps = console.group, Mr = console.groupCollapsed, vs = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: hs,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Ci++;
      }
    }
    function il() {
      {
        if (Ci--, Ci === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: mt({}, e, {
              value: So
            }),
            info: mt({}, e, {
              value: al
            }),
            warn: mt({}, e, {
              value: Eo
            }),
            error: mt({}, e, {
              value: Jr
            }),
            group: mt({}, e, {
              value: ps
            }),
            groupCollapsed: mt({}, e, {
              value: Mr
            }),
            groupEnd: mt({}, e, {
              value: vs
            })
          });
        }
        Ci < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Co = d.ReactCurrentDispatcher, ni;
    function Lr(e, t, a) {
      {
        if (ni === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            ni = i && i[1] || "";
          }
        return `
` + ni + e;
      }
    }
    var wo = !1, Ro;
    {
      var bo = typeof WeakMap == "function" ? WeakMap : Map;
      Ro = new bo();
    }
    function ol(e, t) {
      if (!e || wo)
        return "";
      {
        var a = Ro.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      wo = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = Co.current, Co.current = null, wc();
      try {
        if (t) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (q) {
              i = q;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (q) {
              i = q;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (q) {
            i = q;
          }
          e();
        }
      } catch (q) {
        if (q && i && typeof q.stack == "string") {
          for (var g = q.stack.split(`
`), S = i.stack.split(`
`), b = g.length - 1, T = S.length - 1; b >= 1 && T >= 0 && g[b] !== S[T]; )
            T--;
          for (; b >= 1 && T >= 0; b--, T--)
            if (g[b] !== S[T]) {
              if (b !== 1 || T !== 1)
                do
                  if (b--, T--, T < 0 || g[b] !== S[T]) {
                    var F = `
` + g[b].replace(" at new ", " at ");
                    return e.displayName && F.includes("<anonymous>") && (F = F.replace("<anonymous>", e.displayName)), typeof e == "function" && Ro.set(e, F), F;
                  }
                while (b >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        wo = !1, Co.current = c, il(), Error.prepareStackTrace = u;
      }
      var U = e ? e.displayName || e.name : "", Y = U ? Lr(U) : "";
      return typeof e == "function" && Ro.set(e, Y), Y;
    }
    function ul(e, t, a) {
      return ol(e, !0);
    }
    function Hi(e, t, a) {
      return ol(e, !1);
    }
    function md(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function wi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ol(e, md(e));
      if (typeof e == "string")
        return Lr(e);
      switch (e) {
        case lt:
          return Lr("Suspense");
        case _t:
          return Lr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Oe:
            return Hi(e.render);
          case st:
            return wi(e.type, t, a);
          case We: {
            var i = e, u = i._payload, c = i._init;
            try {
              return wi(c(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function jt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case Q:
          return Lr(e.type);
        case He:
          return Lr("Lazy");
        case fe:
          return Lr("Suspense");
        case ht:
          return Lr("SuspenseList");
        case M:
        case L:
        case _e:
          return Hi(e.type);
        case ie:
          return Hi(e.type.render);
        case O:
          return ul(e.type);
        default:
          return "";
      }
    }
    function ll(e) {
      try {
        var t = "", a = e;
        do
          t += jt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function cu(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function sl(e) {
      return e.displayName || "Context";
    }
    function At(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Sa:
          return "Fragment";
        case Nr:
          return "Portal";
        case N:
          return "Profiler";
        case Si:
          return "StrictMode";
        case lt:
          return "Suspense";
        case _t:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ge:
            var t = e;
            return sl(t) + ".Consumer";
          case oe:
            var a = e;
            return sl(a._context) + ".Provider";
          case Oe:
            return cu(e, e.render, "ForwardRef");
          case st:
            var i = e.displayName || null;
            return i !== null ? i : At(e.type) || "Memo";
          case We: {
            var u = e, c = u._payload, v = u._init;
            try {
              return At(v(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function cl(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function fl(e) {
      return e.displayName || "Context";
    }
    function at(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Mt:
          return "Cache";
        case we:
          var i = a;
          return fl(i) + ".Consumer";
        case he:
          var u = a;
          return fl(u._context) + ".Provider";
        case Nt:
          return "DehydratedFragment";
        case ie:
          return cl(a, a.render, "ForwardRef");
        case X:
          return "Fragment";
        case Q:
          return a;
        case P:
          return "Portal";
        case x:
          return "Root";
        case I:
          return "Text";
        case He:
          return At(a);
        case ne:
          return a === Si ? "StrictMode" : "Mode";
        case Ie:
          return "Offscreen";
        case me:
          return "Profiler";
        case on:
          return "Scope";
        case fe:
          return "Suspense";
        case ht:
          return "SuspenseList";
        case St:
          return "TracingMarker";
        case O:
        case M:
        case bt:
        case L:
        case Re:
        case _e:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var fu = d.ReactDebugCurrentFrame, Cn = null, Zr = !1;
    function Ar() {
      {
        if (Cn === null)
          return null;
        var e = Cn._debugOwner;
        if (e !== null && typeof e < "u")
          return at(e);
      }
      return null;
    }
    function To() {
      return Cn === null ? "" : ll(Cn);
    }
    function _n() {
      fu.getCurrentStack = null, Cn = null, Zr = !1;
    }
    function qt(e) {
      fu.getCurrentStack = e === null ? null : To, Cn = e, Zr = !1;
    }
    function Rc() {
      return Cn;
    }
    function ea(e) {
      Zr = e;
    }
    function Xn(e) {
      return "" + e;
    }
    function Ri(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Er(e), e;
        default:
          return "";
      }
    }
    var bc = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Vi(e, t) {
      bc[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || y("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || y("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function _o(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Tc(e) {
      return e._valueTracker;
    }
    function Ma(e) {
      e._valueTracker = null;
    }
    function xo(e) {
      var t = "";
      return e && (_o(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Do(e) {
      var t = _o(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Er(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, c = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(g) {
            Er(g), i = "" + g, c.call(this, g);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var v = {
          getValue: function() {
            return i;
          },
          setValue: function(g) {
            Er(g), i = "" + g;
          },
          stopTracking: function() {
            Ma(e), delete e[t];
          }
        };
        return v;
      }
    }
    function La(e) {
      Tc(e) || (e._valueTracker = Do(e));
    }
    function dl(e) {
      if (!e)
        return !1;
      var t = Tc(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = xo(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Oo(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var ko = !1, du = !1, pl = !1, ms = !1;
    function ri(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function E(e, t) {
      var a = e, i = t.checked, u = mt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function k(e, t) {
      Vi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !du && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ar() || "A component", t.type), du = !0), t.value !== void 0 && t.defaultValue !== void 0 && !ko && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ar() || "A component", t.type), ko = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Ri(t.value != null ? t.value : i),
        controlled: ri(t)
      };
    }
    function W(e, t) {
      var a = e, i = t.checked;
      i != null && ga(a, "checked", i, !1);
    }
    function K(e, t) {
      var a = e;
      {
        var i = ri(t);
        !a._wrapperState.controlled && i && !ms && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ms = !0), a._wrapperState.controlled && !i && !pl && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), pl = !0);
      }
      W(e, t);
      var u = Ri(t.value), c = t.type;
      if (u != null)
        c === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Xn(u)) : a.value !== Xn(u) && (a.value = Xn(u));
      else if (c === "submit" || c === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Qe(a, t.type, u) : t.hasOwnProperty("defaultValue") && Qe(a, t.type, Ri(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function de(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, c = u === "submit" || u === "reset";
        if (c && (t.value === void 0 || t.value === null))
          return;
        var v = Xn(i._wrapperState.initialValue);
        a || v !== i.value && (i.value = v), i.defaultValue = v;
      }
      var g = i.name;
      g !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, g !== "" && (i.name = g);
    }
    function Ke(e, t) {
      var a = e;
      K(a, t), Ce(a, t);
    }
    function Ce(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Qr(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), c = 0; c < u.length; c++) {
          var v = u[c];
          if (!(v === e || v.form !== e.form)) {
            var g = cm(v);
            if (!g)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            dl(v), K(v, g);
          }
        }
      }
    }
    function Qe(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Oo(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Xn(e._wrapperState.initialValue) : e.defaultValue !== Xn(a) && (e.defaultValue = Xn(a)));
    }
    var yt = !1, zt = !1, tn = !1;
    function Xt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? l.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || zt || (zt = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (tn || (tn = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !yt && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), yt = !0);
    }
    function nn(e, t) {
      t.value != null && e.setAttribute("value", Xn(Ri(t.value)));
    }
    var sn = Array.isArray;
    function Rt(e) {
      return sn(e);
    }
    var Bi;
    Bi = !1;
    function vl() {
      var e = Ar();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var ys = ["value", "defaultValue"];
    function yd(e) {
      {
        Vi("select", e);
        for (var t = 0; t < ys.length; t++) {
          var a = ys[t];
          if (e[a] != null) {
            var i = Rt(e[a]);
            e.multiple && !i ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, vl()) : !e.multiple && i && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, vl());
          }
        }
      }
    }
    function ai(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var c = a, v = {}, g = 0; g < c.length; g++)
          v["$" + c[g]] = !0;
        for (var S = 0; S < u.length; S++) {
          var b = v.hasOwnProperty("$" + u[S].value);
          u[S].selected !== b && (u[S].selected = b), b && i && (u[S].defaultSelected = !0);
        }
      } else {
        for (var T = Xn(Ri(a)), F = null, U = 0; U < u.length; U++) {
          if (u[U].value === T) {
            u[U].selected = !0, i && (u[U].defaultSelected = !0);
            return;
          }
          F === null && !u[U].disabled && (F = u[U]);
        }
        F !== null && (F.selected = !0);
      }
    }
    function gs(e, t) {
      return mt({}, t, {
        value: void 0
      });
    }
    function Ss(e, t) {
      var a = e;
      yd(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Bi && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Bi = !0);
    }
    function gd(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? ai(a, !!t.multiple, i, !1) : t.defaultValue != null && ai(a, !!t.multiple, t.defaultValue, !0);
    }
    function Jy(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? ai(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? ai(a, !!t.multiple, t.defaultValue, !0) : ai(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Zy(e, t) {
      var a = e, i = t.value;
      i != null && ai(a, !!t.multiple, i, !1);
    }
    var Sd = !1;
    function Ed(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = mt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Xn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Pv(e, t) {
      var a = e;
      Vi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Sd && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ar() || "A component"), Sd = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, c = t.defaultValue;
        if (u != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (c != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Rt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            c = u;
          }
        }
        c == null && (c = ""), i = c;
      }
      a._wrapperState = {
        initialValue: Ri(i)
      };
    }
    function Hv(e, t) {
      var a = e, i = Ri(t.value), u = Ri(t.defaultValue);
      if (i != null) {
        var c = Xn(i);
        c !== a.value && (a.value = c), t.defaultValue == null && a.defaultValue !== c && (a.defaultValue = c);
      }
      u != null && (a.defaultValue = Xn(u));
    }
    function Vv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Cd(e, t) {
      Hv(e, t);
    }
    var $i = "http://www.w3.org/1999/xhtml", eg = "http://www.w3.org/1998/Math/MathML", wd = "http://www.w3.org/2000/svg";
    function _c(e) {
      switch (e) {
        case "svg":
          return wd;
        case "math":
          return eg;
        default:
          return $i;
      }
    }
    function Rd(e, t) {
      return e == null || e === $i ? _c(t) : e === wd && t === "foreignObject" ? $i : e;
    }
    var tg = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, xc, Bv = tg(function(e, t) {
      if (e.namespaceURI === wd && !("innerHTML" in e)) {
        xc = xc || document.createElement("div"), xc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = xc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ta = 1, Ii = 3, jn = 8, ii = 9, pu = 11, Dc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ii) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, $v = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, hl = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Iv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Yv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(hl).forEach(function(e) {
      Yv.forEach(function(t) {
        hl[Iv(t, e)] = hl[e];
      });
    });
    function Oc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(hl.hasOwnProperty(e) && hl[e]) ? t + "px" : (Sr(t, e), ("" + t).trim());
    }
    var ml = /([A-Z])/g, ng = /^ms-/;
    function rg(e) {
      return e.replace(ml, "-$1").toLowerCase().replace(ng, "-ms-");
    }
    var Wv = function() {
    };
    {
      var qv = /^(?:webkit|moz|o)[A-Z]/, Qv = /^-ms-/, Es = /-(.)/g, yl = /;\s*$/, gl = {}, Sl = {}, Gv = !1, bd = !1, Td = function(e) {
        return e.replace(Es, function(t, a) {
          return a.toUpperCase();
        });
      }, _d = function(e) {
        gl.hasOwnProperty(e) && gl[e] || (gl[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Td(e.replace(Qv, "ms-"))
        ));
      }, Kv = function(e) {
        gl.hasOwnProperty(e) && gl[e] || (gl[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Xv = function(e, t) {
        Sl.hasOwnProperty(t) && Sl[t] || (Sl[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(yl, "")));
      }, Jv = function(e, t) {
        Gv || (Gv = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, ag = function(e, t) {
        bd || (bd = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Wv = function(e, t) {
        e.indexOf("-") > -1 ? _d(e) : qv.test(e) ? Kv(e) : yl.test(t) && Xv(e, t), typeof t == "number" && (isNaN(t) ? Jv(e, t) : isFinite(t) || ag(e, t));
      };
    }
    var ig = Wv;
    function og(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var c = i.indexOf("--") === 0;
              t += a + (c ? i : rg(i)) + ":", t += Oc(i, u, c), a = ";";
            }
          }
        return t || null;
      }
    }
    function Zv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || ig(i, t[i]);
          var c = Oc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, c) : a[i] = c;
        }
    }
    function ug(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Aa(e) {
      var t = {};
      for (var a in e)
        for (var i = $v[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Cs(e, t) {
      {
        if (!t)
          return;
        var a = Aa(e), i = Aa(t), u = {};
        for (var c in a) {
          var v = a[c], g = i[c];
          if (g && v !== g) {
            var S = v + "," + g;
            if (u[S])
              continue;
            u[S] = !0, y("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ug(e[v]) ? "Removing" : "Updating", v, g);
          }
        }
      }
    }
    var eh = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, th = mt({
      menuitem: !0
    }, eh), nh = "__html";
    function kc(e, t) {
      if (t) {
        if (th[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(nh in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && y("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Yi(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
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
    var Nc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, rh = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, oi = {}, xd = new RegExp("^(aria)-[" + Be + "]*$"), ws = new RegExp("^(aria)[A-Z][" + Be + "]*$");
    function Dd(e, t) {
      {
        if (Gn.call(oi, t) && oi[t])
          return !0;
        if (ws.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = rh.hasOwnProperty(a) ? a : null;
          if (i == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), oi[t] = !0, !0;
          if (t !== i)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), oi[t] = !0, !0;
        }
        if (xd.test(t)) {
          var u = t.toLowerCase(), c = rh.hasOwnProperty(u) ? u : null;
          if (c == null)
            return oi[t] = !0, !1;
          if (t !== c)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, c), oi[t] = !0, !0;
        }
      }
      return !0;
    }
    function ah(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Dd(e, i);
          u || a.push(i);
        }
        var c = a.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        a.length === 1 ? y("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e) : a.length > 1 && y("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e);
      }
    }
    function Mc(e, t) {
      Yi(e, t) || ah(e, t);
    }
    var vu = !1;
    function Od(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !vu && (vu = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var kd = function() {
    };
    {
      var Jn = {}, Nd = /^on./, ih = /^on[^A-Z]/, oh = new RegExp("^(aria)-[" + Be + "]*$"), uh = new RegExp("^(aria)[A-Z][" + Be + "]*$");
      kd = function(e, t, a, i) {
        if (Gn.call(Jn, t) && Jn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Jn[t] = !0, !0;
        if (i != null) {
          var c = i.registrationNameDependencies, v = i.possibleRegistrationNames;
          if (c.hasOwnProperty(t))
            return !0;
          var g = v.hasOwnProperty(u) ? v[u] : null;
          if (g != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, g), Jn[t] = !0, !0;
          if (Nd.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), Jn[t] = !0, !0;
        } else if (Nd.test(t))
          return ih.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Jn[t] = !0, !0;
        if (oh.test(t) || uh.test(t))
          return !0;
        if (u === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Jn[t] = !0, !0;
        if (u === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Jn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Jn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Jn[t] = !0, !0;
        var S = kr(t), b = S !== null && S.type === ha;
        if (Nc.hasOwnProperty(u)) {
          var T = Nc[u];
          if (T !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, T), Jn[t] = !0, !0;
        } else if (!b && t !== u)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Jn[t] = !0, !0;
        return typeof a == "boolean" && Cr(t, a, S, !1) ? (a ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Jn[t] = !0, !0) : b ? !0 : Cr(t, a, S, !1) ? (Jn[t] = !0, !1) : ((a === "false" || a === "true") && S !== null && S.type === Sn && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Jn[t] = !0), !0);
      };
    }
    var lh = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var c = kd(e, u, t[u], a);
          c || i.push(u);
        }
        var v = i.map(function(g) {
          return "`" + g + "`";
        }).join(", ");
        i.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e) : i.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e);
      }
    };
    function sh(e, t, a) {
      Yi(e, t) || lh(e, t, a);
    }
    var Wi = 1, Rs = 2, hu = 4, lg = Wi | Rs | hu, bs = null;
    function Ts(e) {
      bs !== null && y("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), bs = e;
    }
    function sg() {
      bs === null && y("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), bs = null;
    }
    function ch(e) {
      return e === bs;
    }
    function Lc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ii ? t.parentNode : t;
    }
    var rn = null, No = null, qi = null;
    function El(e) {
      var t = Wl(e);
      if (t) {
        if (typeof rn != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = cm(a);
          rn(t.stateNode, t.type, i);
        }
      }
    }
    function fh(e) {
      rn = e;
    }
    function Ac(e) {
      No ? qi ? qi.push(e) : qi = [e] : No = e;
    }
    function _s() {
      return No !== null || qi !== null;
    }
    function xs() {
      if (No) {
        var e = No, t = qi;
        if (No = null, qi = null, El(e), t)
          for (var a = 0; a < t.length; a++)
            El(t[a]);
      }
    }
    var mu = function(e, t) {
      return e(t);
    }, Md = function() {
    }, Ld = !1;
    function cg() {
      var e = _s();
      e && (Md(), xs());
    }
    function Ad(e, t, a) {
      if (Ld)
        return e(t, a);
      Ld = !0;
      try {
        return mu(e, t, a);
      } finally {
        Ld = !1, cg();
      }
    }
    function zc(e, t, a) {
      mu = e, Md = a;
    }
    function Uc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function zd(e, t, a) {
      switch (e) {
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
          return !!(a.disabled && Uc(t));
        default:
          return !1;
      }
    }
    function yu(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = cm(a);
      if (i === null)
        return null;
      var u = i[t];
      if (zd(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var Ds = !1;
    if (gn)
      try {
        var gu = {};
        Object.defineProperty(gu, "passive", {
          get: function() {
            Ds = !0;
          }
        }), window.addEventListener("test", gu, gu), window.removeEventListener("test", gu, gu);
      } catch {
        Ds = !1;
      }
    function dh(e, t, a, i, u, c, v, g, S) {
      var b = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, b);
      } catch (T) {
        this.onError(T);
      }
    }
    var Ud = dh;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var jd = document.createElement("react");
      Ud = function(t, a, i, u, c, v, g, S, b) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var T = document.createEvent("Event"), F = !1, U = !0, Y = window.event, q = Object.getOwnPropertyDescriptor(window, "event");
        function J() {
          jd.removeEventListener(Z, qe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = Y);
        }
        var ke = Array.prototype.slice.call(arguments, 3);
        function qe() {
          F = !0, J(), a.apply(i, ke), U = !1;
        }
        var Pe, Ot = !1, wt = !1;
        function V(B) {
          if (Pe = B.error, Ot = !0, Pe === null && B.colno === 0 && B.lineno === 0 && (wt = !0), B.defaultPrevented && Pe != null && typeof Pe == "object")
            try {
              Pe._suppressLogging = !0;
            } catch {
            }
        }
        var Z = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", V), jd.addEventListener(Z, qe, !1), T.initEvent(Z, !1, !1), jd.dispatchEvent(T), q && Object.defineProperty(window, "event", q), F && U && (Ot ? wt && (Pe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Pe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Pe)), window.removeEventListener("error", V), !F)
          return J(), dh.apply(this, arguments);
      };
    }
    var fg = Ud, Mo = !1, ui = null, Os = !1, Lo = null, bi = {
      onError: function(e) {
        Mo = !0, ui = e;
      }
    };
    function Su(e, t, a, i, u, c, v, g, S) {
      Mo = !1, ui = null, fg.apply(bi, arguments);
    }
    function Qi(e, t, a, i, u, c, v, g, S) {
      if (Su.apply(this, arguments), Mo) {
        var b = Pd();
        Os || (Os = !0, Lo = b);
      }
    }
    function Fd() {
      if (Os) {
        var e = Lo;
        throw Os = !1, Lo = null, e;
      }
    }
    function dg() {
      return Mo;
    }
    function Pd() {
      if (Mo) {
        var e = ui;
        return Mo = !1, ui = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function za(e) {
      return e._reactInternals;
    }
    function ks(e) {
      return e._reactInternals !== void 0;
    }
    function Cl(e, t) {
      e._reactInternals = t;
    }
    var Ye = (
      /*                      */
      0
    ), Ao = (
      /*                */
      1
    ), cn = (
      /*                    */
      2
    ), ct = (
      /*                       */
      4
    ), Bt = (
      /*                */
      16
    ), Qt = (
      /*                 */
      32
    ), Ti = (
      /*                     */
      64
    ), tt = (
      /*                   */
      128
    ), xn = (
      /*            */
      256
    ), na = (
      /*                          */
      512
    ), Ua = (
      /*                     */
      1024
    ), mn = (
      /*                      */
      2048
    ), ja = (
      /*                    */
      4096
    ), zo = (
      /*                   */
      8192
    ), Ns = (
      /*             */
      16384
    ), jc = mn | ct | Ti | na | Ua | Ns, ph = (
      /*               */
      32767
    ), Ea = (
      /*                   */
      32768
    ), Zn = (
      /*                */
      65536
    ), Ms = (
      /* */
      131072
    ), Hd = (
      /*                       */
      1048576
    ), Vd = (
      /*                    */
      2097152
    ), ra = (
      /*                 */
      4194304
    ), Uo = (
      /*                */
      8388608
    ), aa = (
      /*               */
      16777216
    ), Eu = (
      /*              */
      33554432
    ), wl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      ct | Ua | 0
    ), ia = cn | ct | Bt | Qt | na | ja | zo, wr = ct | Ti | na | zo, Fa = mn | Bt, ur = ra | Uo | Vd, Gi = d.ReactCurrentOwner;
    function Ca(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (cn | ja)) !== Ye && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === x ? a : null;
    }
    function Bd(e) {
      if (e.tag === fe) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Fc(e) {
      return e.tag === x ? e.stateNode.containerInfo : null;
    }
    function $d(e) {
      return Ca(e) === e;
    }
    function wa(e) {
      {
        var t = Gi.current;
        if (t !== null && t.tag === O) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", at(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = za(e);
      return u ? Ca(u) === u : !1;
    }
    function oa(e) {
      if (Ca(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function fn(e) {
      var t = e.alternate;
      if (!t) {
        var a = Ca(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var c = i.return;
        if (c === null)
          break;
        var v = c.alternate;
        if (v === null) {
          var g = c.return;
          if (g !== null) {
            i = u = g;
            continue;
          }
          break;
        }
        if (c.child === v.child) {
          for (var S = c.child; S; ) {
            if (S === i)
              return oa(c), e;
            if (S === u)
              return oa(c), t;
            S = S.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = c, u = v;
        else {
          for (var b = !1, T = c.child; T; ) {
            if (T === i) {
              b = !0, i = c, u = v;
              break;
            }
            if (T === u) {
              b = !0, u = c, i = v;
              break;
            }
            T = T.sibling;
          }
          if (!b) {
            for (T = v.child; T; ) {
              if (T === i) {
                b = !0, i = v, u = c;
                break;
              }
              if (T === u) {
                b = !0, u = v, i = c;
                break;
              }
              T = T.sibling;
            }
            if (!b)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== x)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Pa(e) {
      var t = fn(e);
      return t !== null ? Id(t) : null;
    }
    function Id(e) {
      if (e.tag === Q || e.tag === I)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Id(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function vh(e) {
      var t = fn(e);
      return t !== null ? Pc(t) : null;
    }
    function Pc(e) {
      if (e.tag === Q || e.tag === I)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== P) {
          var a = Pc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Hc = f.unstable_scheduleCallback, hh = f.unstable_cancelCallback, Vc = f.unstable_shouldYield, mh = f.unstable_requestPaint, wn = f.unstable_now, Yd = f.unstable_getCurrentPriorityLevel, Bc = f.unstable_ImmediatePriority, Ra = f.unstable_UserBlockingPriority, _i = f.unstable_NormalPriority, $c = f.unstable_LowPriority, jo = f.unstable_IdlePriority, Wd = f.unstable_yieldValue, qd = f.unstable_setDisableYieldValue, Fo = null, er = null, Se = null, Mn = !1, lr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Qd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Tt && (e = mt({}, e, {
          getLaneLabelMap: Ho,
          injectProfilingHooks: Xi
        })), Fo = t.inject(e), er = t;
      } catch (a) {
        y("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function yh(e, t) {
      if (er && typeof er.onScheduleFiberRoot == "function")
        try {
          er.onScheduleFiberRoot(Fo, e, t);
        } catch (a) {
          Mn || (Mn = !0, y("React instrumentation encountered an error: %s", a));
        }
    }
    function Ki(e, t) {
      if (er && typeof er.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & tt) === tt;
          if (dt) {
            var i;
            switch (t) {
              case Rr:
                i = Bc;
                break;
              case sr:
                i = Ra;
                break;
              case Zi:
                i = _i;
                break;
              case Vs:
                i = jo;
                break;
              default:
                i = _i;
                break;
            }
            er.onCommitFiberRoot(Fo, e, i, a);
          }
        } catch (u) {
          Mn || (Mn = !0, y("React instrumentation encountered an error: %s", u));
        }
    }
    function Po(e) {
      if (er && typeof er.onPostCommitFiberRoot == "function")
        try {
          er.onPostCommitFiberRoot(Fo, e);
        } catch (t) {
          Mn || (Mn = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Gd(e) {
      if (er && typeof er.onCommitFiberUnmount == "function")
        try {
          er.onCommitFiberUnmount(Fo, e);
        } catch (t) {
          Mn || (Mn = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function $n(e) {
      if (typeof Wd == "function" && (qd(e), C(e)), er && typeof er.setStrictMode == "function")
        try {
          er.setStrictMode(Fo, e);
        } catch (t) {
          Mn || (Mn = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Xi(e) {
      Se = e;
    }
    function Ho() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < dn; a++) {
          var i = pg(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Ic(e) {
      Se !== null && typeof Se.markCommitStarted == "function" && Se.markCommitStarted(e);
    }
    function Kd() {
      Se !== null && typeof Se.markCommitStopped == "function" && Se.markCommitStopped();
    }
    function Vo(e) {
      Se !== null && typeof Se.markComponentRenderStarted == "function" && Se.markComponentRenderStarted(e);
    }
    function Cu() {
      Se !== null && typeof Se.markComponentRenderStopped == "function" && Se.markComponentRenderStopped();
    }
    function gh(e) {
      Se !== null && typeof Se.markComponentPassiveEffectMountStarted == "function" && Se.markComponentPassiveEffectMountStarted(e);
    }
    function Xd() {
      Se !== null && typeof Se.markComponentPassiveEffectMountStopped == "function" && Se.markComponentPassiveEffectMountStopped();
    }
    function Yc(e) {
      Se !== null && typeof Se.markComponentPassiveEffectUnmountStarted == "function" && Se.markComponentPassiveEffectUnmountStarted(e);
    }
    function Sh() {
      Se !== null && typeof Se.markComponentPassiveEffectUnmountStopped == "function" && Se.markComponentPassiveEffectUnmountStopped();
    }
    function Eh(e) {
      Se !== null && typeof Se.markComponentLayoutEffectMountStarted == "function" && Se.markComponentLayoutEffectMountStarted(e);
    }
    function Ch() {
      Se !== null && typeof Se.markComponentLayoutEffectMountStopped == "function" && Se.markComponentLayoutEffectMountStopped();
    }
    function Wc(e) {
      Se !== null && typeof Se.markComponentLayoutEffectUnmountStarted == "function" && Se.markComponentLayoutEffectUnmountStarted(e);
    }
    function Rl() {
      Se !== null && typeof Se.markComponentLayoutEffectUnmountStopped == "function" && Se.markComponentLayoutEffectUnmountStopped();
    }
    function qc(e, t, a) {
      Se !== null && typeof Se.markComponentErrored == "function" && Se.markComponentErrored(e, t, a);
    }
    function wh(e, t, a) {
      Se !== null && typeof Se.markComponentSuspended == "function" && Se.markComponentSuspended(e, t, a);
    }
    function Rh(e) {
      Se !== null && typeof Se.markLayoutEffectsStarted == "function" && Se.markLayoutEffectsStarted(e);
    }
    function bl() {
      Se !== null && typeof Se.markLayoutEffectsStopped == "function" && Se.markLayoutEffectsStopped();
    }
    function bh(e) {
      Se !== null && typeof Se.markPassiveEffectsStarted == "function" && Se.markPassiveEffectsStarted(e);
    }
    function Ls() {
      Se !== null && typeof Se.markPassiveEffectsStopped == "function" && Se.markPassiveEffectsStopped();
    }
    function li(e) {
      Se !== null && typeof Se.markRenderStarted == "function" && Se.markRenderStarted(e);
    }
    function As() {
      Se !== null && typeof Se.markRenderYielded == "function" && Se.markRenderYielded();
    }
    function Tl() {
      Se !== null && typeof Se.markRenderStopped == "function" && Se.markRenderStopped();
    }
    function wu(e) {
      Se !== null && typeof Se.markRenderScheduled == "function" && Se.markRenderScheduled(e);
    }
    function Jd(e, t) {
      Se !== null && typeof Se.markForceUpdateScheduled == "function" && Se.markForceUpdateScheduled(e, t);
    }
    function Bo(e, t) {
      Se !== null && typeof Se.markStateUpdateScheduled == "function" && Se.markStateUpdateScheduled(e, t);
    }
    var Ge = (
      /*                         */
      0
    ), gt = (
      /*                 */
      1
    ), Xe = (
      /*                    */
      2
    ), Rn = (
      /*               */
      8
    ), Ha = (
      /*              */
      16
    ), Qc = Math.clz32 ? Math.clz32 : Ru, Gc = Math.log, Zd = Math.LN2;
    function Ru(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Gc(t) / Zd | 0) | 0;
    }
    var dn = 31, ee = (
      /*                        */
      0
    ), xt = (
      /*                          */
      0
    ), Je = (
      /*                        */
      1
    ), xi = (
      /*    */
      2
    ), ba = (
      /*             */
      4
    ), bu = (
      /*            */
      8
    ), pn = (
      /*                     */
      16
    ), Tu = (
      /*                */
      32
    ), $o = (
      /*                       */
      4194240
    ), _u = (
      /*                        */
      64
    ), Va = (
      /*                        */
      128
    ), ua = (
      /*                        */
      256
    ), xu = (
      /*                        */
      512
    ), zs = (
      /*                        */
      1024
    ), Us = (
      /*                        */
      2048
    ), Kc = (
      /*                        */
      4096
    ), Xc = (
      /*                        */
      8192
    ), Jc = (
      /*                        */
      16384
    ), Zc = (
      /*                       */
      32768
    ), ef = (
      /*                       */
      65536
    ), tf = (
      /*                       */
      131072
    ), nf = (
      /*                       */
      262144
    ), rf = (
      /*                       */
      524288
    ), Du = (
      /*                       */
      1048576
    ), af = (
      /*                       */
      2097152
    ), Ou = (
      /*                            */
      130023424
    ), Ji = (
      /*                             */
      4194304
    ), of = (
      /*                             */
      8388608
    ), js = (
      /*                             */
      16777216
    ), uf = (
      /*                             */
      33554432
    ), lf = (
      /*                             */
      67108864
    ), ep = Ji, _l = (
      /*          */
      134217728
    ), sf = (
      /*                          */
      268435455
    ), xl = (
      /*               */
      268435456
    ), Io = (
      /*                        */
      536870912
    ), la = (
      /*                   */
      1073741824
    );
    function pg(e) {
      {
        if (e & Je)
          return "Sync";
        if (e & xi)
          return "InputContinuousHydration";
        if (e & ba)
          return "InputContinuous";
        if (e & bu)
          return "DefaultHydration";
        if (e & pn)
          return "Default";
        if (e & Tu)
          return "TransitionHydration";
        if (e & $o)
          return "Transition";
        if (e & Ou)
          return "Retry";
        if (e & _l)
          return "SelectiveHydration";
        if (e & xl)
          return "IdleHydration";
        if (e & Io)
          return "Idle";
        if (e & la)
          return "Offscreen";
      }
    }
    var an = -1, cf = _u, ff = Ji;
    function Dl(e) {
      switch (Fn(e)) {
        case Je:
          return Je;
        case xi:
          return xi;
        case ba:
          return ba;
        case bu:
          return bu;
        case pn:
          return pn;
        case Tu:
          return Tu;
        case _u:
        case Va:
        case ua:
        case xu:
        case zs:
        case Us:
        case Kc:
        case Xc:
        case Jc:
        case Zc:
        case ef:
        case tf:
        case nf:
        case rf:
        case Du:
        case af:
          return e & $o;
        case Ji:
        case of:
        case js:
        case uf:
        case lf:
          return e & Ou;
        case _l:
          return _l;
        case xl:
          return xl;
        case Io:
          return Io;
        case la:
          return la;
        default:
          return y("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Fs(e, t) {
      var a = e.pendingLanes;
      if (a === ee)
        return ee;
      var i = ee, u = e.suspendedLanes, c = e.pingedLanes, v = a & sf;
      if (v !== ee) {
        var g = v & ~u;
        if (g !== ee)
          i = Dl(g);
        else {
          var S = v & c;
          S !== ee && (i = Dl(S));
        }
      } else {
        var b = a & ~u;
        b !== ee ? i = Dl(b) : c !== ee && (i = Dl(c));
      }
      if (i === ee)
        return ee;
      if (t !== ee && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === ee) {
        var T = Fn(i), F = Fn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          T >= F || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          T === pn && (F & $o) !== ee
        )
          return t;
      }
      (i & ba) !== ee && (i |= a & pn);
      var U = e.entangledLanes;
      if (U !== ee)
        for (var Y = e.entanglements, q = i & U; q > 0; ) {
          var J = Yo(q), ke = 1 << J;
          i |= Y[J], q &= ~ke;
        }
      return i;
    }
    function Th(e, t) {
      for (var a = e.eventTimes, i = an; t > 0; ) {
        var u = Yo(t), c = 1 << u, v = a[u];
        v > i && (i = v), t &= ~c;
      }
      return i;
    }
    function df(e, t) {
      switch (e) {
        case Je:
        case xi:
        case ba:
          return t + 250;
        case bu:
        case pn:
        case Tu:
        case _u:
        case Va:
        case ua:
        case xu:
        case zs:
        case Us:
        case Kc:
        case Xc:
        case Jc:
        case Zc:
        case ef:
        case tf:
        case nf:
        case rf:
        case Du:
        case af:
          return t + 5e3;
        case Ji:
        case of:
        case js:
        case uf:
        case lf:
          return an;
        case _l:
        case xl:
        case Io:
        case la:
          return an;
        default:
          return y("Should have found matching lanes. This is a bug in React."), an;
      }
    }
    function vg(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, c = e.expirationTimes, v = a; v > 0; ) {
        var g = Yo(v), S = 1 << g, b = c[g];
        b === an ? ((S & i) === ee || (S & u) !== ee) && (c[g] = df(S, t)) : b <= t && (e.expiredLanes |= S), v &= ~S;
      }
    }
    function hg(e) {
      return Dl(e.pendingLanes);
    }
    function tp(e) {
      var t = e.pendingLanes & ~la;
      return t !== ee ? t : t & la ? la : ee;
    }
    function Ol(e) {
      return (e & Je) !== ee;
    }
    function Ps(e) {
      return (e & sf) !== ee;
    }
    function pf(e) {
      return (e & Ou) === e;
    }
    function mg(e) {
      var t = Je | ba | pn;
      return (e & t) === ee;
    }
    function _h(e) {
      return (e & $o) === e;
    }
    function Hs(e, t) {
      var a = xi | ba | bu | pn;
      return (t & a) !== ee;
    }
    function xh(e, t) {
      return (t & e.expiredLanes) !== ee;
    }
    function np(e) {
      return (e & $o) !== ee;
    }
    function rp() {
      var e = cf;
      return cf <<= 1, (cf & $o) === ee && (cf = _u), e;
    }
    function yg() {
      var e = ff;
      return ff <<= 1, (ff & Ou) === ee && (ff = Ji), e;
    }
    function Fn(e) {
      return e & -e;
    }
    function In(e) {
      return Fn(e);
    }
    function Yo(e) {
      return 31 - Qc(e);
    }
    function vf(e) {
      return Yo(e);
    }
    function sa(e, t) {
      return (e & t) !== ee;
    }
    function ku(e, t) {
      return (e & t) === t;
    }
    function ft(e, t) {
      return e | t;
    }
    function kl(e, t) {
      return e & ~t;
    }
    function ap(e, t) {
      return e & t;
    }
    function Dh(e) {
      return e;
    }
    function Oh(e, t) {
      return e !== xt && e < t ? e : t;
    }
    function hf(e) {
      for (var t = [], a = 0; a < dn; a++)
        t.push(e);
      return t;
    }
    function Nu(e, t, a) {
      e.pendingLanes |= t, t !== Io && (e.suspendedLanes = ee, e.pingedLanes = ee);
      var i = e.eventTimes, u = vf(t);
      i[u] = a;
    }
    function ip(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Yo(i), c = 1 << u;
        a[u] = an, i &= ~c;
      }
    }
    function op(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function up(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ee, e.pingedLanes = ee, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, c = e.expirationTimes, v = a; v > 0; ) {
        var g = Yo(v), S = 1 << g;
        i[g] = ee, u[g] = an, c[g] = an, v &= ~S;
      }
    }
    function Nl(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var c = Yo(u), v = 1 << c;
        // Is this one of the newly entangled lanes?
        v & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[c] & t && (i[c] |= t), u &= ~v;
      }
    }
    function gg(e, t) {
      var a = Fn(t), i;
      switch (a) {
        case ba:
          i = xi;
          break;
        case pn:
          i = bu;
          break;
        case _u:
        case Va:
        case ua:
        case xu:
        case zs:
        case Us:
        case Kc:
        case Xc:
        case Jc:
        case Zc:
        case ef:
        case tf:
        case nf:
        case rf:
        case Du:
        case af:
        case Ji:
        case of:
        case js:
        case uf:
        case lf:
          i = Tu;
          break;
        case Io:
          i = xl;
          break;
        default:
          i = xt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== xt ? xt : i;
    }
    function lp(e, t, a) {
      if (lr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = vf(a), c = 1 << u, v = i[u];
          v.add(t), a &= ~c;
        }
    }
    function mf(e, t) {
      if (lr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = vf(t), c = 1 << u, v = a[u];
          v.size > 0 && (v.forEach(function(g) {
            var S = g.alternate;
            (S === null || !i.has(S)) && i.add(g);
          }), v.clear()), t &= ~c;
        }
    }
    function sp(e, t) {
      return null;
    }
    var Rr = Je, sr = ba, Zi = pn, Vs = Io, Mu = xt;
    function Ba() {
      return Mu;
    }
    function Yn(e) {
      Mu = e;
    }
    function Bs(e, t) {
      var a = Mu;
      try {
        return Mu = e, t();
      } finally {
        Mu = a;
      }
    }
    function br(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Sg(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function cp(e, t) {
      return e !== 0 && e < t;
    }
    function $s(e) {
      var t = Fn(e);
      return cp(Rr, t) ? cp(sr, t) ? Ps(t) ? Zi : Vs : sr : Rr;
    }
    function Wn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var kh;
    function Me(e) {
      kh = e;
    }
    function Ml(e) {
      kh(e);
    }
    var Is;
    function Nh(e) {
      Is = e;
    }
    var Mh;
    function Ys(e) {
      Mh = e;
    }
    var Ws;
    function fp(e) {
      Ws = e;
    }
    var dp;
    function Lh(e) {
      dp = e;
    }
    var yf = !1, Ll = [], Di = null, yn = null, tr = null, $a = /* @__PURE__ */ new Map(), Al = /* @__PURE__ */ new Map(), eo = [], si = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Ah(e) {
      return si.indexOf(e) > -1;
    }
    function Oi(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function zh(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Di = null;
          break;
        case "dragenter":
        case "dragleave":
          yn = null;
          break;
        case "mouseover":
        case "mouseout":
          tr = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          $a.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Al.delete(i);
          break;
        }
      }
    }
    function zl(e, t, a, i, u, c) {
      if (e === null || e.nativeEvent !== c) {
        var v = Oi(t, a, i, u, c);
        if (t !== null) {
          var g = Wl(t);
          g !== null && Is(g);
        }
        return v;
      }
      e.eventSystemFlags |= i;
      var S = e.targetContainers;
      return u !== null && S.indexOf(u) === -1 && S.push(u), e;
    }
    function Uh(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var c = u;
          return Di = zl(Di, e, t, a, i, c), !0;
        }
        case "dragenter": {
          var v = u;
          return yn = zl(yn, e, t, a, i, v), !0;
        }
        case "mouseover": {
          var g = u;
          return tr = zl(tr, e, t, a, i, g), !0;
        }
        case "pointerover": {
          var S = u, b = S.pointerId;
          return $a.set(b, zl($a.get(b) || null, e, t, a, i, S)), !0;
        }
        case "gotpointercapture": {
          var T = u, F = T.pointerId;
          return Al.set(F, zl(Al.get(F) || null, e, t, a, i, T)), !0;
        }
      }
      return !1;
    }
    function pp(e) {
      var t = tc(e.target);
      if (t !== null) {
        var a = Ca(t);
        if (a !== null) {
          var i = a.tag;
          if (i === fe) {
            var u = Bd(a);
            if (u !== null) {
              e.blockedOn = u, dp(e.priority, function() {
                Mh(a);
              });
              return;
            }
          } else if (i === x) {
            var c = a.stateNode;
            if (Wn(c)) {
              e.blockedOn = Fc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function jh(e) {
      for (var t = Ws(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < eo.length && cp(t, eo[i].priority); i++)
        ;
      eo.splice(i, 0, a), i === 0 && pp(a);
    }
    function gf(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Lu(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, c = new u.constructor(u.type, u);
          Ts(c), u.target.dispatchEvent(c), sg();
        } else {
          var v = Wl(i);
          return v !== null && Is(v), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function qs(e, t, a) {
      gf(e) && a.delete(t);
    }
    function vp() {
      yf = !1, Di !== null && gf(Di) && (Di = null), yn !== null && gf(yn) && (yn = null), tr !== null && gf(tr) && (tr = null), $a.forEach(qs), Al.forEach(qs);
    }
    function Tr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, yf || (yf = !0, f.unstable_scheduleCallback(f.unstable_NormalPriority, vp)));
    }
    function Ct(e) {
      if (Ll.length > 0) {
        Tr(Ll[0], e);
        for (var t = 1; t < Ll.length; t++) {
          var a = Ll[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Di !== null && Tr(Di, e), yn !== null && Tr(yn, e), tr !== null && Tr(tr, e);
      var i = function(g) {
        return Tr(g, e);
      };
      $a.forEach(i), Al.forEach(i);
      for (var u = 0; u < eo.length; u++) {
        var c = eo[u];
        c.blockedOn === e && (c.blockedOn = null);
      }
      for (; eo.length > 0; ) {
        var v = eo[0];
        if (v.blockedOn !== null)
          break;
        pp(v), v.blockedOn === null && eo.shift();
      }
    }
    var bn = d.ReactCurrentBatchConfig, Dn = !0;
    function nr(e) {
      Dn = !!e;
    }
    function Ta() {
      return Dn;
    }
    function Ul(e, t, a) {
      var i = zr(t), u;
      switch (i) {
        case Rr:
          u = qn;
          break;
        case sr:
          u = Qs;
          break;
        case Zi:
        default:
          u = to;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function qn(e, t, a, i) {
      var u = Ba(), c = bn.transition;
      bn.transition = null;
      try {
        Yn(Rr), to(e, t, a, i);
      } finally {
        Yn(u), bn.transition = c;
      }
    }
    function Qs(e, t, a, i) {
      var u = Ba(), c = bn.transition;
      bn.transition = null;
      try {
        Yn(sr), to(e, t, a, i);
      } finally {
        Yn(u), bn.transition = c;
      }
    }
    function to(e, t, a, i) {
      Dn && Sf(e, t, a, i);
    }
    function Sf(e, t, a, i) {
      var u = Lu(e, t, a, i);
      if (u === null) {
        Pg(e, t, i, jl, a), zh(e, i);
        return;
      }
      if (Uh(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (zh(e, i), t & hu && Ah(e)) {
        for (; u !== null; ) {
          var c = Wl(u);
          c !== null && Ml(c);
          var v = Lu(e, t, a, i);
          if (v === null && Pg(e, t, i, jl, a), v === u)
            break;
          u = v;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Pg(e, t, i, null, a);
    }
    var jl = null;
    function Lu(e, t, a, i) {
      jl = null;
      var u = Lc(i), c = tc(u);
      if (c !== null) {
        var v = Ca(c);
        if (v === null)
          c = null;
        else {
          var g = v.tag;
          if (g === fe) {
            var S = Bd(v);
            if (S !== null)
              return S;
            c = null;
          } else if (g === x) {
            var b = v.stateNode;
            if (Wn(b))
              return Fc(v);
            c = null;
          } else
            v !== c && (c = null);
        }
      }
      return jl = c, null;
    }
    function zr(e) {
      switch (e) {
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
          return Rr;
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
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return sr;
        case "message": {
          var t = Yd();
          switch (t) {
            case Bc:
              return Rr;
            case Ra:
              return sr;
            case _i:
            case $c:
              return Zi;
            case jo:
              return Vs;
            default:
              return Zi;
          }
        }
        default:
          return Zi;
      }
    }
    function hp(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Fl(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function no(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Ef(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Au = null, ki = null, Wo = null;
    function qo(e) {
      return Au = e, ki = wf(), !0;
    }
    function Cf() {
      Au = null, ki = null, Wo = null;
    }
    function Pl() {
      if (Wo)
        return Wo;
      var e, t = ki, a = t.length, i, u = wf(), c = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var v = a - e;
      for (i = 1; i <= v && t[a - i] === u[c - i]; i++)
        ;
      var g = i > 1 ? 1 - i : void 0;
      return Wo = u.slice(e, g), Wo;
    }
    function wf() {
      return "value" in Au ? Au.value : Au.textContent;
    }
    function zu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Uu() {
      return !0;
    }
    function _r() {
      return !1;
    }
    function Pn(e) {
      function t(a, i, u, c, v) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = c, this.target = v, this.currentTarget = null;
        for (var g in e)
          if (e.hasOwnProperty(g)) {
            var S = e[g];
            S ? this[g] = S(c) : this[g] = c[g];
          }
        var b = c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1;
        return b ? this.isDefaultPrevented = Uu : this.isDefaultPrevented = _r, this.isPropagationStopped = _r, this;
      }
      return mt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Uu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Uu);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Uu
      }), t;
    }
    var xr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Dr = Pn(xr), Hl = mt({}, xr, {
      view: 0,
      detail: 0
    }), mp = Pn(Hl), Gs, yp, Ia;
    function Fh(e) {
      e !== Ia && (Ia && e.type === "mousemove" ? (Gs = e.screenX - Ia.screenX, yp = e.screenY - Ia.screenY) : (Gs = 0, yp = 0), Ia = e);
    }
    var Vl = mt({}, Hl, {
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
      getModifierState: Tf,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Fh(e), Gs);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : yp;
      }
    }), Qo = Pn(Vl), gp = mt({}, Vl, {
      dataTransfer: 0
    }), ju = Pn(gp), Ph = mt({}, Hl, {
      relatedTarget: 0
    }), Rf = Pn(Ph), Sp = mt({}, xr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), bf = Pn(Sp), Eg = mt({}, xr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Cg = Pn(Eg), Hh = mt({}, xr, {
      data: 0
    }), Ep = Pn(Hh), Fu = Ep, wg = {
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
      MozPrintableKey: "Unidentified"
    }, Bl = {
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
      224: "Meta"
    };
    function Vh(e) {
      if (e.key) {
        var t = wg[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = zu(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Bl[e.keyCode] || "Unidentified" : "";
    }
    var On = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Rg(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = On[e];
      return i ? !!a[i] : !1;
    }
    function Tf(e) {
      return Rg;
    }
    var bg = mt({}, Hl, {
      key: Vh,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Tf,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? zu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? zu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Tg = Pn(bg), Bh = mt({}, Vl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Cp = Pn(Bh), _g = mt({}, Hl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Tf
    }), Ya = Pn(_g), wp = mt({}, xr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), xg = Pn(wp), Go = mt({}, Vl, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), _f = Pn(Go), Pu = [9, 13, 27, 32], Ks = 229, Xs = gn && "CompositionEvent" in window, Hu = null;
    gn && "documentMode" in document && (Hu = document.documentMode);
    var Dg = gn && "TextEvent" in window && !Hu, xf = gn && (!Xs || Hu && Hu > 8 && Hu <= 11), $h = 32, Rp = String.fromCharCode($h);
    function Ih() {
      gr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), gr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), gr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), gr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Js = !1;
    function Df(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Yh(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function bp(e, t) {
      return e === "keydown" && t.keyCode === Ks;
    }
    function Wh(e, t) {
      switch (e) {
        case "keyup":
          return Pu.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ks;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Tp(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Of(e) {
      return e.locale === "ko";
    }
    var ro = !1;
    function _p(e, t, a, i, u) {
      var c, v;
      if (Xs ? c = Yh(t) : ro ? Wh(t, i) && (c = "onCompositionEnd") : bp(t, i) && (c = "onCompositionStart"), !c)
        return null;
      xf && !Of(i) && (!ro && c === "onCompositionStart" ? ro = qo(u) : c === "onCompositionEnd" && ro && (v = Pl()));
      var g = Xh(a, c);
      if (g.length > 0) {
        var S = new Ep(c, t, null, i, u);
        if (e.push({
          event: S,
          listeners: g
        }), v)
          S.data = v;
        else {
          var b = Tp(i);
          b !== null && (S.data = b);
        }
      }
    }
    function kf(e, t) {
      switch (e) {
        case "compositionend":
          return Tp(t);
        case "keypress":
          var a = t.which;
          return a !== $h ? null : (Js = !0, Rp);
        case "textInput":
          var i = t.data;
          return i === Rp && Js ? null : i;
        default:
          return null;
      }
    }
    function qh(e, t) {
      if (ro) {
        if (e === "compositionend" || !Xs && Wh(e, t)) {
          var a = Pl();
          return Cf(), ro = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Df(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return xf && !Of(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Og(e, t, a, i, u) {
      var c;
      if (Dg ? c = kf(t, i) : c = qh(t, i), !c)
        return null;
      var v = Xh(a, "onBeforeInput");
      if (v.length > 0) {
        var g = new Fu("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: g,
          listeners: v
        }), g.data = c;
      }
    }
    function Nf(e, t, a, i, u, c, v) {
      _p(e, t, a, i, u), Og(e, t, a, i, u);
    }
    var kg = {
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
      week: !0
    };
    function $l(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!kg[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Ng(e) {
      if (!gn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Mf() {
      gr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      Ac(i);
      var u = Xh(t, "onChange");
      if (u.length > 0) {
        var c = new Dr("onChange", "change", null, a, i);
        e.push({
          event: c,
          listeners: u
        });
      }
    }
    var r = null, o = null;
    function s(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function p(e) {
      var t = [];
      n(t, o, e, Lc(e)), Ad(h, t);
    }
    function h(e) {
      wC(e, 0);
    }
    function w(e) {
      var t = Ff(e);
      if (dl(t))
        return e;
    }
    function _(e, t) {
      if (e === "change")
        return t;
    }
    var z = !1;
    gn && (z = Ng("input") && (!document.documentMode || document.documentMode > 9));
    function G(e, t) {
      r = e, o = t, r.attachEvent("onpropertychange", se);
    }
    function le() {
      r && (r.detachEvent("onpropertychange", se), r = null, o = null);
    }
    function se(e) {
      e.propertyName === "value" && w(o) && p(e);
    }
    function ue(e, t, a) {
      e === "focusin" ? (le(), G(t, a)) : e === "focusout" && le();
    }
    function xe(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return w(o);
    }
    function Ae(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function je(e, t) {
      if (e === "click")
        return w(t);
    }
    function Ln(e, t) {
      if (e === "input" || e === "change")
        return w(t);
    }
    function H(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Qe(e, "number", e.value);
    }
    function j(e, t, a, i, u, c, v) {
      var g = a ? Ff(a) : window, S, b;
      if (s(g) ? S = _ : $l(g) ? z ? S = Ln : (S = xe, b = ue) : Ae(g) && (S = je), S) {
        var T = S(t, a);
        if (T) {
          n(e, T, i, u);
          return;
        }
      }
      b && b(t, g, a), t === "focusout" && H(g);
    }
    function $() {
      qr("onMouseEnter", ["mouseout", "mouseover"]), qr("onMouseLeave", ["mouseout", "mouseover"]), qr("onPointerEnter", ["pointerout", "pointerover"]), qr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function pe(e, t, a, i, u, c, v) {
      var g = t === "mouseover" || t === "pointerover", S = t === "mouseout" || t === "pointerout";
      if (g && !ch(i)) {
        var b = i.relatedTarget || i.fromElement;
        if (b && (tc(b) || Hp(b)))
          return;
      }
      if (!(!S && !g)) {
        var T;
        if (u.window === u)
          T = u;
        else {
          var F = u.ownerDocument;
          F ? T = F.defaultView || F.parentWindow : T = window;
        }
        var U, Y;
        if (S) {
          var q = i.relatedTarget || i.toElement;
          if (U = a, Y = q ? tc(q) : null, Y !== null) {
            var J = Ca(Y);
            (Y !== J || Y.tag !== Q && Y.tag !== I) && (Y = null);
          }
        } else
          U = null, Y = a;
        if (U !== Y) {
          var ke = Qo, qe = "onMouseLeave", Pe = "onMouseEnter", Ot = "mouse";
          (t === "pointerout" || t === "pointerover") && (ke = Cp, qe = "onPointerLeave", Pe = "onPointerEnter", Ot = "pointer");
          var wt = U == null ? T : Ff(U), V = Y == null ? T : Ff(Y), Z = new ke(qe, Ot + "leave", U, i, u);
          Z.target = wt, Z.relatedTarget = V;
          var B = null, ce = tc(u);
          if (ce === a) {
            var Ne = new ke(Pe, Ot + "enter", Y, i, u);
            Ne.target = V, Ne.relatedTarget = wt, B = Ne;
          }
          K1(e, Z, B, U, Y);
        }
      }
    }
    function Fe(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ze = typeof Object.is == "function" ? Object.is : Fe;
    function $e(e, t) {
      if (ze(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var c = a[u];
        if (!Gn.call(t, c) || !ze(e[c], t[c]))
          return !1;
      }
      return !0;
    }
    function nt(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function rr(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Ut(e, t) {
      for (var a = nt(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Ii) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = nt(rr(a));
      }
    }
    function Ko(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, c = i.anchorOffset, v = i.focusNode, g = i.focusOffset;
      try {
        u.nodeType, v.nodeType;
      } catch {
        return null;
      }
      return Mg(e, u, c, v, g);
    }
    function Mg(e, t, a, i, u) {
      var c = 0, v = -1, g = -1, S = 0, b = 0, T = e, F = null;
      e:
        for (; ; ) {
          for (var U = null; T === t && (a === 0 || T.nodeType === Ii) && (v = c + a), T === i && (u === 0 || T.nodeType === Ii) && (g = c + u), T.nodeType === Ii && (c += T.nodeValue.length), (U = T.firstChild) !== null; )
            F = T, T = U;
          for (; ; ) {
            if (T === e)
              break e;
            if (F === t && ++S === a && (v = c), F === i && ++b === u && (g = c), (U = T.nextSibling) !== null)
              break;
            T = F, F = T.parentNode;
          }
          T = U;
        }
      return v === -1 || g === -1 ? null : {
        start: v,
        end: g
      };
    }
    function N1(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), c = e.textContent.length, v = Math.min(t.start, c), g = t.end === void 0 ? v : Math.min(t.end, c);
        if (!u.extend && v > g) {
          var S = g;
          g = v, v = S;
        }
        var b = Ut(e, v), T = Ut(e, g);
        if (b && T) {
          if (u.rangeCount === 1 && u.anchorNode === b.node && u.anchorOffset === b.offset && u.focusNode === T.node && u.focusOffset === T.offset)
            return;
          var F = a.createRange();
          F.setStart(b.node, b.offset), u.removeAllRanges(), v > g ? (u.addRange(F), u.extend(T.node, T.offset)) : (F.setEnd(T.node, T.offset), u.addRange(F));
        }
      }
    }
    function cC(e) {
      return e && e.nodeType === Ii;
    }
    function fC(e, t) {
      return !e || !t ? !1 : e === t ? !0 : cC(e) ? !1 : cC(t) ? fC(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function M1(e) {
      return e && e.ownerDocument && fC(e.ownerDocument.documentElement, e);
    }
    function L1(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function dC() {
      for (var e = window, t = Oo(); t instanceof e.HTMLIFrameElement; ) {
        if (L1(t))
          e = t.contentWindow;
        else
          return t;
        t = Oo(e.document);
      }
      return t;
    }
    function Lg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function A1() {
      var e = dC();
      return {
        focusedElem: e,
        selectionRange: Lg(e) ? U1(e) : null
      };
    }
    function z1(e) {
      var t = dC(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && M1(a)) {
        i !== null && Lg(a) && j1(a, i);
        for (var u = [], c = a; c = c.parentNode; )
          c.nodeType === ta && u.push({
            element: c,
            left: c.scrollLeft,
            top: c.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var v = 0; v < u.length; v++) {
          var g = u[v];
          g.element.scrollLeft = g.left, g.element.scrollTop = g.top;
        }
      }
    }
    function U1(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Ko(e), t || {
        start: 0,
        end: 0
      };
    }
    function j1(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : N1(e, t);
    }
    var F1 = gn && "documentMode" in document && document.documentMode <= 11;
    function P1() {
      gr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Lf = null, Ag = null, xp = null, zg = !1;
    function H1(e) {
      if ("selectionStart" in e && Lg(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function V1(e) {
      return e.window === e ? e.document : e.nodeType === ii ? e : e.ownerDocument;
    }
    function pC(e, t, a) {
      var i = V1(a);
      if (!(zg || Lf == null || Lf !== Oo(i))) {
        var u = H1(Lf);
        if (!xp || !$e(xp, u)) {
          xp = u;
          var c = Xh(Ag, "onSelect");
          if (c.length > 0) {
            var v = new Dr("onSelect", "select", null, t, a);
            e.push({
              event: v,
              listeners: c
            }), v.target = Lf;
          }
        }
      }
    }
    function B1(e, t, a, i, u, c, v) {
      var g = a ? Ff(a) : window;
      switch (t) {
        case "focusin":
          ($l(g) || g.contentEditable === "true") && (Lf = g, Ag = a, xp = null);
          break;
        case "focusout":
          Lf = null, Ag = null, xp = null;
          break;
        case "mousedown":
          zg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          zg = !1, pC(e, i, u);
          break;
        case "selectionchange":
          if (F1)
            break;
        case "keydown":
        case "keyup":
          pC(e, i, u);
      }
    }
    function Qh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Af = {
      animationend: Qh("Animation", "AnimationEnd"),
      animationiteration: Qh("Animation", "AnimationIteration"),
      animationstart: Qh("Animation", "AnimationStart"),
      transitionend: Qh("Transition", "TransitionEnd")
    }, Ug = {}, vC = {};
    gn && (vC = document.createElement("div").style, "AnimationEvent" in window || (delete Af.animationend.animation, delete Af.animationiteration.animation, delete Af.animationstart.animation), "TransitionEvent" in window || delete Af.transitionend.transition);
    function Gh(e) {
      if (Ug[e])
        return Ug[e];
      if (!Af[e])
        return e;
      var t = Af[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in vC)
          return Ug[e] = t[a];
      return e;
    }
    var hC = Gh("animationend"), mC = Gh("animationiteration"), yC = Gh("animationstart"), gC = Gh("transitionend"), SC = /* @__PURE__ */ new Map(), EC = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Il(e, t) {
      SC.set(e, t), gr(t, [e]);
    }
    function $1() {
      for (var e = 0; e < EC.length; e++) {
        var t = EC[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Il(a, "on" + i);
      }
      Il(hC, "onAnimationEnd"), Il(mC, "onAnimationIteration"), Il(yC, "onAnimationStart"), Il("dblclick", "onDoubleClick"), Il("focusin", "onFocus"), Il("focusout", "onBlur"), Il(gC, "onTransitionEnd");
    }
    function I1(e, t, a, i, u, c, v) {
      var g = SC.get(t);
      if (g !== void 0) {
        var S = Dr, b = t;
        switch (t) {
          case "keypress":
            if (zu(i) === 0)
              return;
          case "keydown":
          case "keyup":
            S = Tg;
            break;
          case "focusin":
            b = "focus", S = Rf;
            break;
          case "focusout":
            b = "blur", S = Rf;
            break;
          case "beforeblur":
          case "afterblur":
            S = Rf;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            S = Qo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = ju;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = Ya;
            break;
          case hC:
          case mC:
          case yC:
            S = bf;
            break;
          case gC:
            S = xg;
            break;
          case "scroll":
            S = mp;
            break;
          case "wheel":
            S = _f;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = Cg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = Cp;
            break;
        }
        var T = (c & hu) !== 0;
        {
          var F = !T && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", U = Q1(a, g, i.type, T, F);
          if (U.length > 0) {
            var Y = new S(g, b, null, i, u);
            e.push({
              event: Y,
              listeners: U
            });
          }
        }
      }
    }
    $1(), $(), Mf(), P1(), Ih();
    function Y1(e, t, a, i, u, c, v) {
      I1(e, t, a, i, u, c);
      var g = (c & lg) === 0;
      g && (pe(e, t, a, i, u), j(e, t, a, i, u), B1(e, t, a, i, u), Nf(e, t, a, i, u));
    }
    var Dp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], jg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Dp));
    function CC(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Qi(i, t, void 0, e), e.currentTarget = null;
    }
    function W1(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var c = t[u], v = c.instance, g = c.currentTarget, S = c.listener;
          if (v !== i && e.isPropagationStopped())
            return;
          CC(e, S, g), i = v;
        }
      else
        for (var b = 0; b < t.length; b++) {
          var T = t[b], F = T.instance, U = T.currentTarget, Y = T.listener;
          if (F !== i && e.isPropagationStopped())
            return;
          CC(e, Y, U), i = F;
        }
    }
    function wC(e, t) {
      for (var a = (t & hu) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], c = u.event, v = u.listeners;
        W1(c, v, a);
      }
      Fd();
    }
    function q1(e, t, a, i, u) {
      var c = Lc(a), v = [];
      Y1(v, e, i, a, c, t), wC(v, t);
    }
    function Tn(e, t) {
      jg.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = Rx(t), u = X1(e, a);
      i.has(u) || (RC(t, e, Rs, a), i.add(u));
    }
    function Fg(e, t, a) {
      jg.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= hu), RC(a, e, i, t);
    }
    var Kh = "_reactListening" + Math.random().toString(36).slice(2);
    function Op(e) {
      if (!e[Kh]) {
        e[Kh] = !0, pt.forEach(function(a) {
          a !== "selectionchange" && (jg.has(a) || Fg(a, !1, e), Fg(a, !0, e));
        });
        var t = e.nodeType === ii ? e : e.ownerDocument;
        t !== null && (t[Kh] || (t[Kh] = !0, Fg("selectionchange", !1, t)));
      }
    }
    function RC(e, t, a, i, u) {
      var c = Ul(e, t, a), v = void 0;
      Ds && (t === "touchstart" || t === "touchmove" || t === "wheel") && (v = !0), e = e, i ? v !== void 0 ? no(e, t, c, v) : Fl(e, t, c) : v !== void 0 ? Ef(e, t, c, v) : hp(e, t, c);
    }
    function bC(e, t) {
      return e === t || e.nodeType === jn && e.parentNode === t;
    }
    function Pg(e, t, a, i, u) {
      var c = i;
      if (!(t & Wi) && !(t & Rs)) {
        var v = u;
        if (i !== null) {
          var g = i;
          e:
            for (; ; ) {
              if (g === null)
                return;
              var S = g.tag;
              if (S === x || S === P) {
                var b = g.stateNode.containerInfo;
                if (bC(b, v))
                  break;
                if (S === P)
                  for (var T = g.return; T !== null; ) {
                    var F = T.tag;
                    if (F === x || F === P) {
                      var U = T.stateNode.containerInfo;
                      if (bC(U, v))
                        return;
                    }
                    T = T.return;
                  }
                for (; b !== null; ) {
                  var Y = tc(b);
                  if (Y === null)
                    return;
                  var q = Y.tag;
                  if (q === Q || q === I) {
                    g = c = Y;
                    continue e;
                  }
                  b = b.parentNode;
                }
              }
              g = g.return;
            }
        }
      }
      Ad(function() {
        return q1(e, t, a, c);
      });
    }
    function kp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Q1(e, t, a, i, u, c) {
      for (var v = t !== null ? t + "Capture" : null, g = i ? v : t, S = [], b = e, T = null; b !== null; ) {
        var F = b, U = F.stateNode, Y = F.tag;
        if (Y === Q && U !== null && (T = U, g !== null)) {
          var q = yu(b, g);
          q != null && S.push(kp(b, q, T));
        }
        if (u)
          break;
        b = b.return;
      }
      return S;
    }
    function Xh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var c = u, v = c.stateNode, g = c.tag;
        if (g === Q && v !== null) {
          var S = v, b = yu(u, a);
          b != null && i.unshift(kp(u, b, S));
          var T = yu(u, t);
          T != null && i.push(kp(u, T, S));
        }
        u = u.return;
      }
      return i;
    }
    function zf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== Q);
      return e || null;
    }
    function G1(e, t) {
      for (var a = e, i = t, u = 0, c = a; c; c = zf(c))
        u++;
      for (var v = 0, g = i; g; g = zf(g))
        v++;
      for (; u - v > 0; )
        a = zf(a), u--;
      for (; v - u > 0; )
        i = zf(i), v--;
      for (var S = u; S--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = zf(a), i = zf(i);
      }
      return null;
    }
    function TC(e, t, a, i, u) {
      for (var c = t._reactName, v = [], g = a; g !== null && g !== i; ) {
        var S = g, b = S.alternate, T = S.stateNode, F = S.tag;
        if (b !== null && b === i)
          break;
        if (F === Q && T !== null) {
          var U = T;
          if (u) {
            var Y = yu(g, c);
            Y != null && v.unshift(kp(g, Y, U));
          } else if (!u) {
            var q = yu(g, c);
            q != null && v.push(kp(g, q, U));
          }
        }
        g = g.return;
      }
      v.length !== 0 && e.push({
        event: t,
        listeners: v
      });
    }
    function K1(e, t, a, i, u) {
      var c = i && u ? G1(i, u) : null;
      i !== null && TC(e, t, i, c, !1), u !== null && a !== null && TC(e, a, u, c, !0);
    }
    function X1(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Wa = !1, Np = "dangerouslySetInnerHTML", Jh = "suppressContentEditableWarning", Yl = "suppressHydrationWarning", _C = "autoFocus", Zs = "children", ec = "style", Zh = "__html", Hg, em, Mp, xC, tm, DC, OC;
    Hg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, em = function(e, t) {
      Mc(e, t), Od(e, t), sh(e, t, {
        registrationNameDependencies: $t,
        possibleRegistrationNames: Wr
      });
    }, DC = gn && !document.documentMode, Mp = function(e, t, a) {
      if (!Wa) {
        var i = nm(a), u = nm(t);
        u !== i && (Wa = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, xC = function(e) {
      if (!Wa) {
        Wa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), y("Extra attributes from the server: %s", t);
      }
    }, tm = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, OC = function(e, t) {
      var a = e.namespaceURI === $i ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var J1 = /\r\n?/g, Z1 = /\u0000|\uFFFD/g;
    function nm(e) {
      Kr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(J1, `
`).replace(Z1, "");
    }
    function rm(e, t, a, i) {
      var u = nm(t), c = nm(e);
      if (c !== u && (i && (Wa || (Wa = !0, y('Text content did not match. Server: "%s" Client: "%s"', c, u))), a && Le))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function kC(e) {
      return e.nodeType === ii ? e : e.ownerDocument;
    }
    function e_() {
    }
    function am(e) {
      e.onclick = e_;
    }
    function t_(e, t, a, i, u) {
      for (var c in i)
        if (i.hasOwnProperty(c)) {
          var v = i[c];
          if (c === ec)
            v && Object.freeze(v), Zv(t, v);
          else if (c === Np) {
            var g = v ? v[Zh] : void 0;
            g != null && Bv(t, g);
          } else if (c === Zs)
            if (typeof v == "string") {
              var S = e !== "textarea" || v !== "";
              S && Dc(t, v);
            } else
              typeof v == "number" && Dc(t, "" + v);
          else
            c === Jh || c === Yl || c === _C || ($t.hasOwnProperty(c) ? v != null && (typeof v != "function" && tm(c, v), c === "onScroll" && Tn("scroll", t)) : v != null && ga(t, c, v, u));
        }
    }
    function n_(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var c = t[u], v = t[u + 1];
        c === ec ? Zv(e, v) : c === Np ? Bv(e, v) : c === Zs ? Dc(e, v) : ga(e, c, v, i);
      }
    }
    function r_(e, t, a, i) {
      var u, c = kC(a), v, g = i;
      if (g === $i && (g = _c(e)), g === $i) {
        if (u = Yi(e, t), !u && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var S = c.createElement("div");
          S.innerHTML = "<script><\/script>";
          var b = S.firstChild;
          v = S.removeChild(b);
        } else if (typeof t.is == "string")
          v = c.createElement(e, {
            is: t.is
          });
        else if (v = c.createElement(e), e === "select") {
          var T = v;
          t.multiple ? T.multiple = !0 : t.size && (T.size = t.size);
        }
      } else
        v = c.createElementNS(g, e);
      return g === $i && !u && Object.prototype.toString.call(v) === "[object HTMLUnknownElement]" && !Gn.call(Hg, e) && (Hg[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), v;
    }
    function a_(e, t) {
      return kC(t).createTextNode(e);
    }
    function i_(e, t, a, i) {
      var u = Yi(t, a);
      em(t, a);
      var c;
      switch (t) {
        case "dialog":
          Tn("cancel", e), Tn("close", e), c = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Tn("load", e), c = a;
          break;
        case "video":
        case "audio":
          for (var v = 0; v < Dp.length; v++)
            Tn(Dp[v], e);
          c = a;
          break;
        case "source":
          Tn("error", e), c = a;
          break;
        case "img":
        case "image":
        case "link":
          Tn("error", e), Tn("load", e), c = a;
          break;
        case "details":
          Tn("toggle", e), c = a;
          break;
        case "input":
          k(e, a), c = E(e, a), Tn("invalid", e);
          break;
        case "option":
          Xt(e, a), c = a;
          break;
        case "select":
          Ss(e, a), c = gs(e, a), Tn("invalid", e);
          break;
        case "textarea":
          Pv(e, a), c = Ed(e, a), Tn("invalid", e);
          break;
        default:
          c = a;
      }
      switch (kc(t, c), t_(t, e, i, c, u), t) {
        case "input":
          La(e), de(e, a, !1);
          break;
        case "textarea":
          La(e), Vv(e);
          break;
        case "option":
          nn(e, a);
          break;
        case "select":
          gd(e, a);
          break;
        default:
          typeof c.onClick == "function" && am(e);
          break;
      }
    }
    function o_(e, t, a, i, u) {
      em(t, i);
      var c = null, v, g;
      switch (t) {
        case "input":
          v = E(e, a), g = E(e, i), c = [];
          break;
        case "select":
          v = gs(e, a), g = gs(e, i), c = [];
          break;
        case "textarea":
          v = Ed(e, a), g = Ed(e, i), c = [];
          break;
        default:
          v = a, g = i, typeof v.onClick != "function" && typeof g.onClick == "function" && am(e);
          break;
      }
      kc(t, g);
      var S, b, T = null;
      for (S in v)
        if (!(g.hasOwnProperty(S) || !v.hasOwnProperty(S) || v[S] == null))
          if (S === ec) {
            var F = v[S];
            for (b in F)
              F.hasOwnProperty(b) && (T || (T = {}), T[b] = "");
          } else
            S === Np || S === Zs || S === Jh || S === Yl || S === _C || ($t.hasOwnProperty(S) ? c || (c = []) : (c = c || []).push(S, null));
      for (S in g) {
        var U = g[S], Y = v != null ? v[S] : void 0;
        if (!(!g.hasOwnProperty(S) || U === Y || U == null && Y == null))
          if (S === ec)
            if (U && Object.freeze(U), Y) {
              for (b in Y)
                Y.hasOwnProperty(b) && (!U || !U.hasOwnProperty(b)) && (T || (T = {}), T[b] = "");
              for (b in U)
                U.hasOwnProperty(b) && Y[b] !== U[b] && (T || (T = {}), T[b] = U[b]);
            } else
              T || (c || (c = []), c.push(S, T)), T = U;
          else if (S === Np) {
            var q = U ? U[Zh] : void 0, J = Y ? Y[Zh] : void 0;
            q != null && J !== q && (c = c || []).push(S, q);
          } else
            S === Zs ? (typeof U == "string" || typeof U == "number") && (c = c || []).push(S, "" + U) : S === Jh || S === Yl || ($t.hasOwnProperty(S) ? (U != null && (typeof U != "function" && tm(S, U), S === "onScroll" && Tn("scroll", e)), !c && Y !== U && (c = [])) : (c = c || []).push(S, U));
      }
      return T && (Cs(T, g[ec]), (c = c || []).push(ec, T)), c;
    }
    function u_(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && W(e, u);
      var c = Yi(a, i), v = Yi(a, u);
      switch (n_(e, t, c, v), a) {
        case "input":
          K(e, u);
          break;
        case "textarea":
          Hv(e, u);
          break;
        case "select":
          Jy(e, u);
          break;
      }
    }
    function l_(e) {
      {
        var t = e.toLowerCase();
        return Nc.hasOwnProperty(t) && Nc[t] || null;
      }
    }
    function s_(e, t, a, i, u, c, v) {
      var g, S;
      switch (g = Yi(t, a), em(t, a), t) {
        case "dialog":
          Tn("cancel", e), Tn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Tn("load", e);
          break;
        case "video":
        case "audio":
          for (var b = 0; b < Dp.length; b++)
            Tn(Dp[b], e);
          break;
        case "source":
          Tn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Tn("error", e), Tn("load", e);
          break;
        case "details":
          Tn("toggle", e);
          break;
        case "input":
          k(e, a), Tn("invalid", e);
          break;
        case "option":
          Xt(e, a);
          break;
        case "select":
          Ss(e, a), Tn("invalid", e);
          break;
        case "textarea":
          Pv(e, a), Tn("invalid", e);
          break;
      }
      kc(t, a);
      {
        S = /* @__PURE__ */ new Set();
        for (var T = e.attributes, F = 0; F < T.length; F++) {
          var U = T[F].name.toLowerCase();
          switch (U) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              S.add(T[F].name);
          }
        }
      }
      var Y = null;
      for (var q in a)
        if (a.hasOwnProperty(q)) {
          var J = a[q];
          if (q === Zs)
            typeof J == "string" ? e.textContent !== J && (a[Yl] !== !0 && rm(e.textContent, J, c, v), Y = [Zs, J]) : typeof J == "number" && e.textContent !== "" + J && (a[Yl] !== !0 && rm(e.textContent, J, c, v), Y = [Zs, "" + J]);
          else if ($t.hasOwnProperty(q))
            J != null && (typeof J != "function" && tm(q, J), q === "onScroll" && Tn("scroll", e));
          else if (v && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof g == "boolean") {
            var ke = void 0, qe = g && rt ? null : kr(q);
            if (a[Yl] !== !0) {
              if (!(q === Jh || q === Yl || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              q === "value" || q === "checked" || q === "selected")) {
                if (q === Np) {
                  var Pe = e.innerHTML, Ot = J ? J[Zh] : void 0;
                  if (Ot != null) {
                    var wt = OC(e, Ot);
                    wt !== Pe && Mp(q, Pe, wt);
                  }
                } else if (q === ec) {
                  if (S.delete(q), DC) {
                    var V = og(J);
                    ke = e.getAttribute("style"), V !== ke && Mp(q, ke, V);
                  }
                } else if (g && !rt)
                  S.delete(q.toLowerCase()), ke = yi(e, q, J), J !== ke && Mp(q, ke, J);
                else if (!En(q, qe, g) && !Kt(q, J, qe, g)) {
                  var Z = !1;
                  if (qe !== null)
                    S.delete(qe.attributeName), ke = ya(e, q, J, qe);
                  else {
                    var B = i;
                    if (B === $i && (B = _c(t)), B === $i)
                      S.delete(q.toLowerCase());
                    else {
                      var ce = l_(q);
                      ce !== null && ce !== q && (Z = !0, S.delete(ce)), S.delete(q);
                    }
                    ke = yi(e, q, J);
                  }
                  var Ne = rt;
                  !Ne && J !== ke && !Z && Mp(q, ke, J);
                }
              }
            }
          }
        }
      switch (v && // $FlowFixMe - Should be inferred as not undefined.
      S.size > 0 && a[Yl] !== !0 && xC(S), t) {
        case "input":
          La(e), de(e, a, !0);
          break;
        case "textarea":
          La(e), Vv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && am(e);
          break;
      }
      return Y;
    }
    function c_(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Vg(e, t) {
      {
        if (Wa)
          return;
        Wa = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Bg(e, t) {
      {
        if (Wa)
          return;
        Wa = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function $g(e, t, a) {
      {
        if (Wa)
          return;
        Wa = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ig(e, t) {
      {
        if (t === "" || Wa)
          return;
        Wa = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function f_(e, t, a) {
      switch (t) {
        case "input":
          Ke(e, a);
          return;
        case "textarea":
          Cd(e, a);
          return;
        case "select":
          Zy(e, a);
          return;
      }
    }
    var Lp = function() {
    }, Ap = function() {
    };
    {
      var d_ = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], NC = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], p_ = NC.concat(["button"]), v_ = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], MC = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Ap = function(e, t) {
        var a = mt({}, e || MC), i = {
          tag: t
        };
        return NC.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), p_.indexOf(t) !== -1 && (a.pTagInButtonScope = null), d_.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var h_ = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return v_.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, m_ = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, LC = {};
      Lp = function(e, t, a) {
        a = a || MC;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && y("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var c = h_(e, u) ? null : i, v = c ? null : m_(e, a), g = c || v;
        if (g) {
          var S = g.tag, b = !!c + "|" + e + "|" + S;
          if (!LC[b]) {
            LC[b] = !0;
            var T = e, F = "";
            if (e === "#text" ? /\S/.test(t) ? T = "Text nodes" : (T = "Whitespace text nodes", F = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : T = "<" + e + ">", c) {
              var U = "";
              S === "table" && e === "tr" && (U += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", T, S, F, U);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", T, S);
          }
        }
      };
    }
    var im = "suppressHydrationWarning", om = "$", um = "/$", zp = "$?", Up = "$!", y_ = "style", Yg = null, Wg = null;
    function g_(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ii:
        case pu: {
          t = i === ii ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Rd(null, "");
          break;
        }
        default: {
          var c = i === jn ? e.parentNode : e, v = c.namespaceURI || null;
          t = c.tagName, a = Rd(v, t);
          break;
        }
      }
      {
        var g = t.toLowerCase(), S = Ap(null, g);
        return {
          namespace: a,
          ancestorInfo: S
        };
      }
    }
    function S_(e, t, a) {
      {
        var i = e, u = Rd(i.namespace, t), c = Ap(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: c
        };
      }
    }
    function sz(e) {
      return e;
    }
    function E_(e) {
      Yg = Ta(), Wg = A1();
      var t = null;
      return nr(!1), t;
    }
    function C_(e) {
      z1(Wg), nr(Yg), Yg = null, Wg = null;
    }
    function w_(e, t, a, i, u) {
      var c;
      {
        var v = i;
        if (Lp(e, null, v.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var g = "" + t.children, S = Ap(v.ancestorInfo, e);
          Lp(null, g, S);
        }
        c = v.namespace;
      }
      var b = r_(e, t, a, c);
      return Pp(u, b), eS(b, t), b;
    }
    function R_(e, t) {
      e.appendChild(t);
    }
    function b_(e, t, a, i, u) {
      switch (i_(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function T_(e, t, a, i, u, c) {
      {
        var v = c;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var g = "" + i.children, S = Ap(v.ancestorInfo, t);
          Lp(null, g, S);
        }
      }
      return o_(e, t, a, i);
    }
    function qg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function __(e, t, a, i) {
      {
        var u = a;
        Lp(null, e, u.ancestorInfo);
      }
      var c = a_(e, t);
      return Pp(i, c), c;
    }
    function x_() {
      var e = window.event;
      return e === void 0 ? Zi : zr(e.type);
    }
    var Qg = typeof setTimeout == "function" ? setTimeout : void 0, D_ = typeof clearTimeout == "function" ? clearTimeout : void 0, Gg = -1, AC = typeof Promise == "function" ? Promise : void 0, O_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof AC < "u" ? function(e) {
      return AC.resolve(null).then(e).catch(k_);
    } : Qg;
    function k_(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function N_(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function M_(e, t, a, i, u, c) {
      u_(e, t, a, i, u), eS(e, u);
    }
    function zC(e) {
      Dc(e, "");
    }
    function L_(e, t, a) {
      e.nodeValue = a;
    }
    function A_(e, t) {
      e.appendChild(t);
    }
    function z_(e, t) {
      var a;
      e.nodeType === jn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && am(a);
    }
    function U_(e, t, a) {
      e.insertBefore(t, a);
    }
    function j_(e, t, a) {
      e.nodeType === jn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function F_(e, t) {
      e.removeChild(t);
    }
    function P_(e, t) {
      e.nodeType === jn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Kg(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === jn) {
          var c = u.data;
          if (c === um)
            if (i === 0) {
              e.removeChild(u), Ct(t);
              return;
            } else
              i--;
          else
            (c === om || c === zp || c === Up) && i++;
        }
        a = u;
      } while (a);
      Ct(t);
    }
    function H_(e, t) {
      e.nodeType === jn ? Kg(e.parentNode, t) : e.nodeType === ta && Kg(e, t), Ct(e);
    }
    function V_(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function B_(e) {
      e.nodeValue = "";
    }
    function $_(e, t) {
      e = e;
      var a = t[y_], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Oc("display", i);
    }
    function I_(e, t) {
      e.nodeValue = t;
    }
    function Y_(e) {
      e.nodeType === ta ? e.textContent = "" : e.nodeType === ii && e.documentElement && e.removeChild(e.documentElement);
    }
    function W_(e, t, a) {
      return e.nodeType !== ta || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function q_(e, t) {
      return t === "" || e.nodeType !== Ii ? null : e;
    }
    function Q_(e) {
      return e.nodeType !== jn ? null : e;
    }
    function UC(e) {
      return e.data === zp;
    }
    function Xg(e) {
      return e.data === Up;
    }
    function G_(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function K_(e, t) {
      e._reactRetry = t;
    }
    function lm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ta || t === Ii)
          break;
        if (t === jn) {
          var a = e.data;
          if (a === om || a === Up || a === zp)
            break;
          if (a === um)
            return null;
        }
      }
      return e;
    }
    function jp(e) {
      return lm(e.nextSibling);
    }
    function X_(e) {
      return lm(e.firstChild);
    }
    function J_(e) {
      return lm(e.firstChild);
    }
    function Z_(e) {
      return lm(e.nextSibling);
    }
    function ex(e, t, a, i, u, c, v) {
      Pp(c, e), eS(e, a);
      var g;
      {
        var S = u;
        g = S.namespace;
      }
      var b = (c.mode & gt) !== Ge;
      return s_(e, t, a, g, i, b, v);
    }
    function tx(e, t, a, i) {
      return Pp(a, e), a.mode & gt, c_(e, t);
    }
    function nx(e, t) {
      Pp(t, e);
    }
    function rx(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === jn) {
          var i = t.data;
          if (i === um) {
            if (a === 0)
              return jp(t);
            a--;
          } else
            (i === om || i === Up || i === zp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function jC(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === jn) {
          var i = t.data;
          if (i === om || i === Up || i === zp) {
            if (a === 0)
              return t;
            a--;
          } else
            i === um && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function ax(e) {
      Ct(e);
    }
    function ix(e) {
      Ct(e);
    }
    function ox(e) {
      return e !== "head" && e !== "body";
    }
    function ux(e, t, a, i) {
      var u = !0;
      rm(t.nodeValue, a, i, u);
    }
    function lx(e, t, a, i, u, c) {
      if (t[im] !== !0) {
        var v = !0;
        rm(i.nodeValue, u, c, v);
      }
    }
    function sx(e, t) {
      t.nodeType === ta ? Vg(e, t) : t.nodeType === jn || Bg(e, t);
    }
    function cx(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === ta ? Vg(a, t) : t.nodeType === jn || Bg(a, t));
      }
    }
    function fx(e, t, a, i, u) {
      (u || t[im] !== !0) && (i.nodeType === ta ? Vg(a, i) : i.nodeType === jn || Bg(a, i));
    }
    function dx(e, t, a) {
      $g(e, t);
    }
    function px(e, t) {
      Ig(e, t);
    }
    function vx(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && $g(i, t);
      }
    }
    function hx(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ig(a, t);
      }
    }
    function mx(e, t, a, i, u, c) {
      (c || t[im] !== !0) && $g(a, i);
    }
    function yx(e, t, a, i, u) {
      (u || t[im] !== !0) && Ig(a, i);
    }
    function gx(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Sx(e) {
      Op(e);
    }
    var Uf = Math.random().toString(36).slice(2), jf = "__reactFiber$" + Uf, Jg = "__reactProps$" + Uf, Fp = "__reactContainer$" + Uf, Zg = "__reactEvents$" + Uf, Ex = "__reactListeners$" + Uf, Cx = "__reactHandles$" + Uf;
    function wx(e) {
      delete e[jf], delete e[Jg], delete e[Zg], delete e[Ex], delete e[Cx];
    }
    function Pp(e, t) {
      t[jf] = e;
    }
    function sm(e, t) {
      t[Fp] = e;
    }
    function FC(e) {
      e[Fp] = null;
    }
    function Hp(e) {
      return !!e[Fp];
    }
    function tc(e) {
      var t = e[jf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Fp] || a[jf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = jC(e); u !== null; ) {
              var c = u[jf];
              if (c)
                return c;
              u = jC(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Wl(e) {
      var t = e[jf] || e[Fp];
      return t && (t.tag === Q || t.tag === I || t.tag === fe || t.tag === x) ? t : null;
    }
    function Ff(e) {
      if (e.tag === Q || e.tag === I)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function cm(e) {
      return e[Jg] || null;
    }
    function eS(e, t) {
      e[Jg] = t;
    }
    function Rx(e) {
      var t = e[Zg];
      return t === void 0 && (t = e[Zg] = /* @__PURE__ */ new Set()), t;
    }
    var PC = {}, HC = d.ReactDebugCurrentFrame;
    function fm(e) {
      if (e) {
        var t = e._owner, a = wi(e.type, e._source, t ? t.type : null);
        HC.setExtraStackFrame(a);
      } else
        HC.setExtraStackFrame(null);
    }
    function ao(e, t, a, i, u) {
      {
        var c = Function.call.bind(Gn);
        for (var v in e)
          if (c(e, v)) {
            var g = void 0;
            try {
              if (typeof e[v] != "function") {
                var S = Error((i || "React class") + ": " + a + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S.name = "Invariant Violation", S;
              }
              g = e[v](t, v, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              g = b;
            }
            g && !(g instanceof Error) && (fm(u), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, v, typeof g), fm(null)), g instanceof Error && !(g.message in PC) && (PC[g.message] = !0, fm(u), y("Failed %s type: %s", a, g.message), fm(null));
          }
      }
    }
    var tS = [], dm;
    dm = [];
    var Vu = -1;
    function ql(e) {
      return {
        current: e
      };
    }
    function ca(e, t) {
      if (Vu < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== dm[Vu] && y("Unexpected Fiber popped."), e.current = tS[Vu], tS[Vu] = null, dm[Vu] = null, Vu--;
    }
    function fa(e, t, a) {
      Vu++, tS[Vu] = e.current, dm[Vu] = a, e.current = t;
    }
    var nS;
    nS = {};
    var ci = {};
    Object.freeze(ci);
    var Bu = ql(ci), Xo = ql(!1), rS = ci;
    function Pf(e, t, a) {
      return a && Jo(t) ? rS : Bu.current;
    }
    function VC(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Hf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ci;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var c = {};
        for (var v in i)
          c[v] = t[v];
        {
          var g = at(e) || "Unknown";
          ao(i, c, "context", g);
        }
        return u && VC(e, t, c), c;
      }
    }
    function pm() {
      return Xo.current;
    }
    function Jo(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function vm(e) {
      ca(Xo, e), ca(Bu, e);
    }
    function aS(e) {
      ca(Xo, e), ca(Bu, e);
    }
    function BC(e, t, a) {
      {
        if (Bu.current !== ci)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        fa(Bu, t, e), fa(Xo, a, e);
      }
    }
    function $C(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var c = at(e) || "Unknown";
            nS[c] || (nS[c] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", c, c));
          }
          return a;
        }
        var v = i.getChildContext();
        for (var g in v)
          if (!(g in u))
            throw new Error((at(e) || "Unknown") + '.getChildContext(): key "' + g + '" is not defined in childContextTypes.');
        {
          var S = at(e) || "Unknown";
          ao(u, v, "child context", S);
        }
        return mt({}, a, v);
      }
    }
    function hm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ci;
        return rS = Bu.current, fa(Bu, a, e), fa(Xo, Xo.current, e), !0;
      }
    }
    function IC(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = $C(e, t, rS);
          i.__reactInternalMemoizedMergedChildContext = u, ca(Xo, e), ca(Bu, e), fa(Bu, u, e), fa(Xo, a, e);
        } else
          ca(Xo, e), fa(Xo, a, e);
      }
    }
    function bx(e) {
      {
        if (!$d(e) || e.tag !== O)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case x:
              return t.stateNode.context;
            case O: {
              var a = t.type;
              if (Jo(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Ql = 0, mm = 1, $u = null, iS = !1, oS = !1;
    function YC(e) {
      $u === null ? $u = [e] : $u.push(e);
    }
    function Tx(e) {
      iS = !0, YC(e);
    }
    function WC() {
      iS && Gl();
    }
    function Gl() {
      if (!oS && $u !== null) {
        oS = !0;
        var e = 0, t = Ba();
        try {
          var a = !0, i = $u;
          for (Yn(Rr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          $u = null, iS = !1;
        } catch (c) {
          throw $u !== null && ($u = $u.slice(e + 1)), Hc(Bc, Gl), c;
        } finally {
          Yn(t), oS = !1;
        }
      }
      return null;
    }
    var Vf = [], Bf = 0, ym = null, gm = 0, Ni = [], Mi = 0, nc = null, Iu = 1, Yu = "";
    function _x(e) {
      return ac(), (e.flags & Hd) !== Ye;
    }
    function xx(e) {
      return ac(), gm;
    }
    function Dx() {
      var e = Yu, t = Iu, a = t & ~Ox(t);
      return a.toString(32) + e;
    }
    function rc(e, t) {
      ac(), Vf[Bf++] = gm, Vf[Bf++] = ym, ym = e, gm = t;
    }
    function qC(e, t, a) {
      ac(), Ni[Mi++] = Iu, Ni[Mi++] = Yu, Ni[Mi++] = nc, nc = e;
      var i = Iu, u = Yu, c = Sm(i) - 1, v = i & ~(1 << c), g = a + 1, S = Sm(t) + c;
      if (S > 30) {
        var b = c - c % 5, T = (1 << b) - 1, F = (v & T).toString(32), U = v >> b, Y = c - b, q = Sm(t) + Y, J = g << Y, ke = J | U, qe = F + u;
        Iu = 1 << q | ke, Yu = qe;
      } else {
        var Pe = g << c, Ot = Pe | v, wt = u;
        Iu = 1 << S | Ot, Yu = wt;
      }
    }
    function uS(e) {
      ac();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        rc(e, a), qC(e, a, i);
      }
    }
    function Sm(e) {
      return 32 - Qc(e);
    }
    function Ox(e) {
      return 1 << Sm(e) - 1;
    }
    function lS(e) {
      for (; e === ym; )
        ym = Vf[--Bf], Vf[Bf] = null, gm = Vf[--Bf], Vf[Bf] = null;
      for (; e === nc; )
        nc = Ni[--Mi], Ni[Mi] = null, Yu = Ni[--Mi], Ni[Mi] = null, Iu = Ni[--Mi], Ni[Mi] = null;
    }
    function kx() {
      return ac(), nc !== null ? {
        id: Iu,
        overflow: Yu
      } : null;
    }
    function Nx(e, t) {
      ac(), Ni[Mi++] = Iu, Ni[Mi++] = Yu, Ni[Mi++] = nc, Iu = t.id, Yu = t.overflow, nc = e;
    }
    function ac() {
      jr() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ur = null, Li = null, io = !1, ic = !1, Kl = null;
    function Mx() {
      io && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function QC() {
      ic = !0;
    }
    function Lx() {
      return ic;
    }
    function Ax(e) {
      var t = e.stateNode.containerInfo;
      return Li = J_(t), Ur = e, io = !0, Kl = null, ic = !1, !0;
    }
    function zx(e, t, a) {
      return Li = Z_(t), Ur = e, io = !0, Kl = null, ic = !1, a !== null && Nx(e, a), !0;
    }
    function GC(e, t) {
      switch (e.tag) {
        case x: {
          sx(e.stateNode.containerInfo, t);
          break;
        }
        case Q: {
          var a = (e.mode & gt) !== Ge;
          fx(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case fe: {
          var i = e.memoizedState;
          i.dehydrated !== null && cx(i.dehydrated, t);
          break;
        }
      }
    }
    function KC(e, t) {
      GC(e, t);
      var a = Fk();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Bt) : i.push(a);
    }
    function sS(e, t) {
      {
        if (ic)
          return;
        switch (e.tag) {
          case x: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case Q:
                var i = t.type;
                t.pendingProps, dx(a, i);
                break;
              case I:
                var u = t.pendingProps;
                px(a, u);
                break;
            }
            break;
          }
          case Q: {
            var c = e.type, v = e.memoizedProps, g = e.stateNode;
            switch (t.tag) {
              case Q: {
                var S = t.type, b = t.pendingProps, T = (e.mode & gt) !== Ge;
                mx(
                  c,
                  v,
                  g,
                  S,
                  b,
                  // TODO: Delete this argument when we remove the legacy root API.
                  T
                );
                break;
              }
              case I: {
                var F = t.pendingProps, U = (e.mode & gt) !== Ge;
                yx(
                  c,
                  v,
                  g,
                  F,
                  // TODO: Delete this argument when we remove the legacy root API.
                  U
                );
                break;
              }
            }
            break;
          }
          case fe: {
            var Y = e.memoizedState, q = Y.dehydrated;
            if (q !== null)
              switch (t.tag) {
                case Q:
                  var J = t.type;
                  t.pendingProps, vx(q, J);
                  break;
                case I:
                  var ke = t.pendingProps;
                  hx(q, ke);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function XC(e, t) {
      t.flags = t.flags & ~ja | cn, sS(e, t);
    }
    function JC(e, t) {
      switch (e.tag) {
        case Q: {
          var a = e.type;
          e.pendingProps;
          var i = W_(t, a);
          return i !== null ? (e.stateNode = i, Ur = e, Li = X_(i), !0) : !1;
        }
        case I: {
          var u = e.pendingProps, c = q_(t, u);
          return c !== null ? (e.stateNode = c, Ur = e, Li = null, !0) : !1;
        }
        case fe: {
          var v = Q_(t);
          if (v !== null) {
            var g = {
              dehydrated: v,
              treeContext: kx(),
              retryLane: la
            };
            e.memoizedState = g;
            var S = Pk(v);
            return S.return = e, e.child = S, Ur = e, Li = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function cS(e) {
      return (e.mode & gt) !== Ge && (e.flags & tt) === Ye;
    }
    function fS(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function dS(e) {
      if (io) {
        var t = Li;
        if (!t) {
          cS(e) && (sS(Ur, e), fS()), XC(Ur, e), io = !1, Ur = e;
          return;
        }
        var a = t;
        if (!JC(e, t)) {
          cS(e) && (sS(Ur, e), fS()), t = jp(a);
          var i = Ur;
          if (!t || !JC(e, t)) {
            XC(Ur, e), io = !1, Ur = e;
            return;
          }
          KC(i, a);
        }
      }
    }
    function Ux(e, t, a) {
      var i = e.stateNode, u = !ic, c = ex(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = c, c !== null;
    }
    function jx(e) {
      var t = e.stateNode, a = e.memoizedProps, i = tx(t, a, e);
      if (i) {
        var u = Ur;
        if (u !== null)
          switch (u.tag) {
            case x: {
              var c = u.stateNode.containerInfo, v = (u.mode & gt) !== Ge;
              ux(
                c,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                v
              );
              break;
            }
            case Q: {
              var g = u.type, S = u.memoizedProps, b = u.stateNode, T = (u.mode & gt) !== Ge;
              lx(
                g,
                S,
                b,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                T
              );
              break;
            }
          }
      }
      return i;
    }
    function Fx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      nx(a, e);
    }
    function Px(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return rx(a);
    }
    function ZC(e) {
      for (var t = e.return; t !== null && t.tag !== Q && t.tag !== x && t.tag !== fe; )
        t = t.return;
      Ur = t;
    }
    function Em(e) {
      if (e !== Ur)
        return !1;
      if (!io)
        return ZC(e), io = !0, !1;
      if (e.tag !== x && (e.tag !== Q || ox(e.type) && !qg(e.type, e.memoizedProps))) {
        var t = Li;
        if (t)
          if (cS(e))
            ew(e), fS();
          else
            for (; t; )
              KC(e, t), t = jp(t);
      }
      return ZC(e), e.tag === fe ? Li = Px(e) : Li = Ur ? jp(e.stateNode) : null, !0;
    }
    function Hx() {
      return io && Li !== null;
    }
    function ew(e) {
      for (var t = Li; t; )
        GC(e, t), t = jp(t);
    }
    function $f() {
      Ur = null, Li = null, io = !1, ic = !1;
    }
    function tw() {
      Kl !== null && (GR(Kl), Kl = null);
    }
    function jr() {
      return io;
    }
    function pS(e) {
      Kl === null ? Kl = [e] : Kl.push(e);
    }
    var Vx = d.ReactCurrentBatchConfig, Bx = null;
    function $x() {
      return Vx.transition;
    }
    var oo = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Ix = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Rn && (t = a), a = a.return;
        return t;
      }, oc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Vp = [], Bp = [], $p = [], Ip = [], Yp = [], Wp = [], uc = /* @__PURE__ */ new Set();
      oo.recordUnsafeLifecycleWarnings = function(e, t) {
        uc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Vp.push(e), e.mode & Rn && typeof t.UNSAFE_componentWillMount == "function" && Bp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && $p.push(e), e.mode & Rn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Ip.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Yp.push(e), e.mode & Rn && typeof t.UNSAFE_componentWillUpdate == "function" && Wp.push(e));
      }, oo.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Vp.length > 0 && (Vp.forEach(function(U) {
          e.add(at(U) || "Component"), uc.add(U.type);
        }), Vp = []);
        var t = /* @__PURE__ */ new Set();
        Bp.length > 0 && (Bp.forEach(function(U) {
          t.add(at(U) || "Component"), uc.add(U.type);
        }), Bp = []);
        var a = /* @__PURE__ */ new Set();
        $p.length > 0 && ($p.forEach(function(U) {
          a.add(at(U) || "Component"), uc.add(U.type);
        }), $p = []);
        var i = /* @__PURE__ */ new Set();
        Ip.length > 0 && (Ip.forEach(function(U) {
          i.add(at(U) || "Component"), uc.add(U.type);
        }), Ip = []);
        var u = /* @__PURE__ */ new Set();
        Yp.length > 0 && (Yp.forEach(function(U) {
          u.add(at(U) || "Component"), uc.add(U.type);
        }), Yp = []);
        var c = /* @__PURE__ */ new Set();
        if (Wp.length > 0 && (Wp.forEach(function(U) {
          c.add(at(U) || "Component"), uc.add(U.type);
        }), Wp = []), t.size > 0) {
          var v = oc(t);
          y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, v);
        }
        if (i.size > 0) {
          var g = oc(i);
          y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, g);
        }
        if (c.size > 0) {
          var S = oc(c);
          y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, S);
        }
        if (e.size > 0) {
          var b = oc(e);
          R(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
        if (a.size > 0) {
          var T = oc(a);
          R(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (u.size > 0) {
          var F = oc(u);
          R(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, F);
        }
      };
      var Cm = /* @__PURE__ */ new Map(), nw = /* @__PURE__ */ new Set();
      oo.recordLegacyContextWarning = function(e, t) {
        var a = Ix(e);
        if (a === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!nw.has(e.type)) {
          var i = Cm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Cm.set(a, i)), i.push(e));
        }
      }, oo.flushLegacyContextWarning = function() {
        Cm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(c) {
              i.add(at(c) || "Component"), nw.add(c.type);
            });
            var u = oc(i);
            try {
              qt(a), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              _n();
            }
          }
        });
      }, oo.discardPendingWarnings = function() {
        Vp = [], Bp = [], $p = [], Ip = [], Yp = [], Wp = [], Cm = /* @__PURE__ */ new Map();
      };
    }
    function uo(e, t) {
      if (e && e.defaultProps) {
        var a = mt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var vS = ql(null), hS;
    hS = {};
    var wm = null, If = null, mS = null, Rm = !1;
    function bm() {
      wm = null, If = null, mS = null, Rm = !1;
    }
    function rw() {
      Rm = !0;
    }
    function aw() {
      Rm = !1;
    }
    function iw(e, t, a) {
      fa(vS, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== hS && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = hS;
    }
    function yS(e, t) {
      var a = vS.current;
      ca(vS, t), e._currentValue = a;
    }
    function gS(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (ku(i.childLanes, t) ? u !== null && !ku(u.childLanes, t) && (u.childLanes = ft(u.childLanes, t)) : (i.childLanes = ft(i.childLanes, t), u !== null && (u.childLanes = ft(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && y("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Yx(e, t, a) {
      Wx(e, t, a);
    }
    function Wx(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, c = i.dependencies;
        if (c !== null) {
          u = i.child;
          for (var v = c.firstContext; v !== null; ) {
            if (v.context === t) {
              if (i.tag === O) {
                var g = In(a), S = Wu(an, g);
                S.tag = _m;
                var b = i.updateQueue;
                if (b !== null) {
                  var T = b.shared, F = T.pending;
                  F === null ? S.next = S : (S.next = F.next, F.next = S), T.pending = S;
                }
              }
              i.lanes = ft(i.lanes, a);
              var U = i.alternate;
              U !== null && (U.lanes = ft(U.lanes, a)), gS(i.return, a, e), c.lanes = ft(c.lanes, a);
              break;
            }
            v = v.next;
          }
        } else if (i.tag === he)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Nt) {
          var Y = i.return;
          if (Y === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          Y.lanes = ft(Y.lanes, a);
          var q = Y.alternate;
          q !== null && (q.lanes = ft(q.lanes, a)), gS(Y, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var J = u.sibling;
            if (J !== null) {
              J.return = u.return, u = J;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Yf(e, t) {
      wm = e, If = null, mS = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (sa(a.lanes, t) && ov(), a.firstContext = null);
      }
    }
    function ar(e) {
      Rm && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (mS !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (If === null) {
          if (wm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          If = a, wm.dependencies = {
            lanes: ee,
            firstContext: a
          };
        } else
          If = If.next = a;
      }
      return t;
    }
    var lc = null;
    function SS(e) {
      lc === null ? lc = [e] : lc.push(e);
    }
    function qx() {
      if (lc !== null) {
        for (var e = 0; e < lc.length; e++) {
          var t = lc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var c = u.next;
              u.next = i, a.next = c;
            }
            t.pending = a;
          }
        }
        lc = null;
      }
    }
    function ow(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, SS(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Tm(e, i);
    }
    function Qx(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, SS(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Gx(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, SS(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Tm(e, i);
    }
    function qa(e, t) {
      return Tm(e, t);
    }
    var Kx = Tm;
    function Tm(e, t) {
      e.lanes = ft(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = ft(a.lanes, t)), a === null && (e.flags & (cn | ja)) !== Ye && ub(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = ft(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = ft(a.childLanes, t) : (u.flags & (cn | ja)) !== Ye && ub(e), i = u, u = u.return;
      if (i.tag === x) {
        var c = i.stateNode;
        return c;
      } else
        return null;
    }
    var uw = 0, lw = 1, _m = 2, ES = 3, xm = !1, CS, Dm;
    CS = !1, Dm = null;
    function wS(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ee
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function sw(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Wu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: uw,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Xl(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Dm === u && !CS && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), CS = !0), KO()) {
        var c = u.pending;
        return c === null ? t.next = t : (t.next = c.next, c.next = t), u.pending = t, Kx(e, a);
      } else
        return Gx(e, u, t, a);
    }
    function Om(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (np(a)) {
          var c = u.lanes;
          c = ap(c, e.pendingLanes);
          var v = ft(c, a);
          u.lanes = v, Nl(e, v);
        }
      }
    }
    function RS(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var c = null, v = null, g = a.firstBaseUpdate;
          if (g !== null) {
            var S = g;
            do {
              var b = {
                eventTime: S.eventTime,
                lane: S.lane,
                tag: S.tag,
                payload: S.payload,
                callback: S.callback,
                next: null
              };
              v === null ? c = v = b : (v.next = b, v = b), S = S.next;
            } while (S !== null);
            v === null ? c = v = t : (v.next = t, v = t);
          } else
            c = v = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: c,
            lastBaseUpdate: v,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var T = a.lastBaseUpdate;
      T === null ? a.firstBaseUpdate = t : T.next = t, a.lastBaseUpdate = t;
    }
    function Xx(e, t, a, i, u, c) {
      switch (a.tag) {
        case lw: {
          var v = a.payload;
          if (typeof v == "function") {
            rw();
            var g = v.call(c, i, u);
            {
              if (e.mode & Rn) {
                $n(!0);
                try {
                  v.call(c, i, u);
                } finally {
                  $n(!1);
                }
              }
              aw();
            }
            return g;
          }
          return v;
        }
        case ES:
          e.flags = e.flags & ~Zn | tt;
        case uw: {
          var S = a.payload, b;
          if (typeof S == "function") {
            rw(), b = S.call(c, i, u);
            {
              if (e.mode & Rn) {
                $n(!0);
                try {
                  S.call(c, i, u);
                } finally {
                  $n(!1);
                }
              }
              aw();
            }
          } else
            b = S;
          return b == null ? i : mt({}, i, b);
        }
        case _m:
          return xm = !0, i;
      }
      return i;
    }
    function km(e, t, a, i) {
      var u = e.updateQueue;
      xm = !1, Dm = u.shared;
      var c = u.firstBaseUpdate, v = u.lastBaseUpdate, g = u.shared.pending;
      if (g !== null) {
        u.shared.pending = null;
        var S = g, b = S.next;
        S.next = null, v === null ? c = b : v.next = b, v = S;
        var T = e.alternate;
        if (T !== null) {
          var F = T.updateQueue, U = F.lastBaseUpdate;
          U !== v && (U === null ? F.firstBaseUpdate = b : U.next = b, F.lastBaseUpdate = S);
        }
      }
      if (c !== null) {
        var Y = u.baseState, q = ee, J = null, ke = null, qe = null, Pe = c;
        do {
          var Ot = Pe.lane, wt = Pe.eventTime;
          if (ku(i, Ot)) {
            if (qe !== null) {
              var Z = {
                eventTime: wt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: xt,
                tag: Pe.tag,
                payload: Pe.payload,
                callback: Pe.callback,
                next: null
              };
              qe = qe.next = Z;
            }
            Y = Xx(e, u, Pe, Y, t, a);
            var B = Pe.callback;
            if (B !== null && // If the update was already committed, we should not queue its
            // callback again.
            Pe.lane !== xt) {
              e.flags |= Ti;
              var ce = u.effects;
              ce === null ? u.effects = [Pe] : ce.push(Pe);
            }
          } else {
            var V = {
              eventTime: wt,
              lane: Ot,
              tag: Pe.tag,
              payload: Pe.payload,
              callback: Pe.callback,
              next: null
            };
            qe === null ? (ke = qe = V, J = Y) : qe = qe.next = V, q = ft(q, Ot);
          }
          if (Pe = Pe.next, Pe === null) {
            if (g = u.shared.pending, g === null)
              break;
            var Ne = g, Te = Ne.next;
            Ne.next = null, Pe = Te, u.lastBaseUpdate = Ne, u.shared.pending = null;
          }
        } while (!0);
        qe === null && (J = Y), u.baseState = J, u.firstBaseUpdate = ke, u.lastBaseUpdate = qe;
        var et = u.shared.interleaved;
        if (et !== null) {
          var ut = et;
          do
            q = ft(q, ut.lane), ut = ut.next;
          while (ut !== et);
        } else
          c === null && (u.shared.lanes = ee);
        gv(q), e.lanes = q, e.memoizedState = Y;
      }
      Dm = null;
    }
    function Jx(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function cw() {
      xm = !1;
    }
    function Nm() {
      return xm;
    }
    function fw(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var c = i[u], v = c.callback;
          v !== null && (c.callback = null, Jx(v, a));
        }
    }
    var bS = {}, dw = new l.Component().refs, TS, _S, xS, DS, OS, pw, Mm, kS, NS, MS;
    {
      TS = /* @__PURE__ */ new Set(), _S = /* @__PURE__ */ new Set(), xS = /* @__PURE__ */ new Set(), DS = /* @__PURE__ */ new Set(), kS = /* @__PURE__ */ new Set(), OS = /* @__PURE__ */ new Set(), NS = /* @__PURE__ */ new Set(), MS = /* @__PURE__ */ new Set();
      var vw = /* @__PURE__ */ new Set();
      Mm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          vw.has(a) || (vw.add(a), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, pw = function(e, t) {
        if (t === void 0) {
          var a = At(e) || "Component";
          OS.has(a) || (OS.add(a), y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(bS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(bS);
    }
    function LS(e, t, a, i) {
      var u = e.memoizedState, c = a(i, u);
      {
        if (e.mode & Rn) {
          $n(!0);
          try {
            c = a(i, u);
          } finally {
            $n(!1);
          }
        }
        pw(t, c);
      }
      var v = c == null ? u : mt({}, u, c);
      if (e.memoizedState = v, e.lanes === ee) {
        var g = e.updateQueue;
        g.baseState = v;
      }
    }
    var AS = {
      isMounted: wa,
      enqueueSetState: function(e, t, a) {
        var i = za(e), u = Da(), c = is(i), v = Wu(u, c);
        v.payload = t, a != null && (Mm(a, "setState"), v.callback = a);
        var g = Xl(i, v, c);
        g !== null && (yr(g, i, c, u), Om(g, i, c)), Bo(i, c);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = za(e), u = Da(), c = is(i), v = Wu(u, c);
        v.tag = lw, v.payload = t, a != null && (Mm(a, "replaceState"), v.callback = a);
        var g = Xl(i, v, c);
        g !== null && (yr(g, i, c, u), Om(g, i, c)), Bo(i, c);
      },
      enqueueForceUpdate: function(e, t) {
        var a = za(e), i = Da(), u = is(a), c = Wu(i, u);
        c.tag = _m, t != null && (Mm(t, "forceUpdate"), c.callback = t);
        var v = Xl(a, c, u);
        v !== null && (yr(v, a, u, i), Om(v, a, u)), Jd(a, u);
      }
    };
    function hw(e, t, a, i, u, c, v) {
      var g = e.stateNode;
      if (typeof g.shouldComponentUpdate == "function") {
        var S = g.shouldComponentUpdate(i, c, v);
        {
          if (e.mode & Rn) {
            $n(!0);
            try {
              S = g.shouldComponentUpdate(i, c, v);
            } finally {
              $n(!1);
            }
          }
          S === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", At(t) || "Component");
        }
        return S;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !$e(a, i) || !$e(u, c) : !0;
    }
    function Zx(e, t, a) {
      var i = e.stateNode;
      {
        var u = At(t) || "Component", c = i.render;
        c || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !NS.has(t) && (NS.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", At(t) || "A pure component"), typeof i.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var v = i.props !== a;
        i.props !== void 0 && v && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !xS.has(t) && (xS.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", At(t))), typeof i.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var g = i.state;
        g && (typeof g != "object" || Rt(g)) && y("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function mw(e, t) {
      t.updater = AS, e.stateNode = t, Cl(t, e), t._reactInternalInstance = bS;
    }
    function yw(e, t, a) {
      var i = !1, u = ci, c = ci, v = t.contextType;
      if ("contextType" in t) {
        var g = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === ge && v._context === void 0
        );
        if (!g && !MS.has(t)) {
          MS.add(t);
          var S = "";
          v === void 0 ? S = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? S = " However, it is set to a " + typeof v + "." : v.$$typeof === oe ? S = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? S = " Did you accidentally pass the Context.Consumer instead?" : S = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", At(t) || "Component", S);
        }
      }
      if (typeof v == "object" && v !== null)
        c = ar(v);
      else {
        u = Pf(e, t, !0);
        var b = t.contextTypes;
        i = b != null, c = i ? Hf(e, u) : ci;
      }
      var T = new t(a, c);
      if (e.mode & Rn) {
        $n(!0);
        try {
          T = new t(a, c);
        } finally {
          $n(!1);
        }
      }
      var F = e.memoizedState = T.state !== null && T.state !== void 0 ? T.state : null;
      mw(e, T);
      {
        if (typeof t.getDerivedStateFromProps == "function" && F === null) {
          var U = At(t) || "Component";
          _S.has(U) || (_S.add(U), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", U, T.state === null ? "null" : "undefined", U));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof T.getSnapshotBeforeUpdate == "function") {
          var Y = null, q = null, J = null;
          if (typeof T.componentWillMount == "function" && T.componentWillMount.__suppressDeprecationWarning !== !0 ? Y = "componentWillMount" : typeof T.UNSAFE_componentWillMount == "function" && (Y = "UNSAFE_componentWillMount"), typeof T.componentWillReceiveProps == "function" && T.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? q = "componentWillReceiveProps" : typeof T.UNSAFE_componentWillReceiveProps == "function" && (q = "UNSAFE_componentWillReceiveProps"), typeof T.componentWillUpdate == "function" && T.componentWillUpdate.__suppressDeprecationWarning !== !0 ? J = "componentWillUpdate" : typeof T.UNSAFE_componentWillUpdate == "function" && (J = "UNSAFE_componentWillUpdate"), Y !== null || q !== null || J !== null) {
            var ke = At(t) || "Component", qe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            DS.has(ke) || (DS.add(ke), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ke, qe, Y !== null ? `
  ` + Y : "", q !== null ? `
  ` + q : "", J !== null ? `
  ` + J : ""));
          }
        }
      }
      return i && VC(e, u, c), T;
    }
    function eD(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", at(e) || "Component"), AS.enqueueReplaceState(t, t.state, null));
    }
    function gw(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var c = at(e) || "Component";
          TS.has(c) || (TS.add(c), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", c));
        }
        AS.enqueueReplaceState(t, t.state, null);
      }
    }
    function zS(e, t, a, i) {
      Zx(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = dw, wS(e);
      var c = t.contextType;
      if (typeof c == "object" && c !== null)
        u.context = ar(c);
      else {
        var v = Pf(e, t, !0);
        u.context = Hf(e, v);
      }
      {
        if (u.state === a) {
          var g = At(t) || "Component";
          kS.has(g) || (kS.add(g), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", g));
        }
        e.mode & Rn && oo.recordLegacyContextWarning(e, u), oo.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var S = t.getDerivedStateFromProps;
      if (typeof S == "function" && (LS(e, t, S, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (eD(e, u), km(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var b = ct;
        b |= ra, (e.mode & Ha) !== Ge && (b |= aa), e.flags |= b;
      }
    }
    function tD(e, t, a, i) {
      var u = e.stateNode, c = e.memoizedProps;
      u.props = c;
      var v = u.context, g = t.contextType, S = ci;
      if (typeof g == "object" && g !== null)
        S = ar(g);
      else {
        var b = Pf(e, t, !0);
        S = Hf(e, b);
      }
      var T = t.getDerivedStateFromProps, F = typeof T == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !F && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (c !== a || v !== S) && gw(e, u, a, S), cw();
      var U = e.memoizedState, Y = u.state = U;
      if (km(e, a, u, i), Y = e.memoizedState, c === a && U === Y && !pm() && !Nm()) {
        if (typeof u.componentDidMount == "function") {
          var q = ct;
          q |= ra, (e.mode & Ha) !== Ge && (q |= aa), e.flags |= q;
        }
        return !1;
      }
      typeof T == "function" && (LS(e, t, T, a), Y = e.memoizedState);
      var J = Nm() || hw(e, t, c, a, U, Y, S);
      if (J) {
        if (!F && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ke = ct;
          ke |= ra, (e.mode & Ha) !== Ge && (ke |= aa), e.flags |= ke;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var qe = ct;
          qe |= ra, (e.mode & Ha) !== Ge && (qe |= aa), e.flags |= qe;
        }
        e.memoizedProps = a, e.memoizedState = Y;
      }
      return u.props = a, u.state = Y, u.context = S, J;
    }
    function nD(e, t, a, i, u) {
      var c = t.stateNode;
      sw(e, t);
      var v = t.memoizedProps, g = t.type === t.elementType ? v : uo(t.type, v);
      c.props = g;
      var S = t.pendingProps, b = c.context, T = a.contextType, F = ci;
      if (typeof T == "object" && T !== null)
        F = ar(T);
      else {
        var U = Pf(t, a, !0);
        F = Hf(t, U);
      }
      var Y = a.getDerivedStateFromProps, q = typeof Y == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      !q && (typeof c.UNSAFE_componentWillReceiveProps == "function" || typeof c.componentWillReceiveProps == "function") && (v !== S || b !== F) && gw(t, c, i, F), cw();
      var J = t.memoizedState, ke = c.state = J;
      if (km(t, i, c, u), ke = t.memoizedState, v === S && J === ke && !pm() && !Nm() && !Ve)
        return typeof c.componentDidUpdate == "function" && (v !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= ct), typeof c.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= Ua), !1;
      typeof Y == "function" && (LS(t, a, Y, i), ke = t.memoizedState);
      var qe = Nm() || hw(t, a, g, i, J, ke, F) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Ve;
      return qe ? (!q && (typeof c.UNSAFE_componentWillUpdate == "function" || typeof c.componentWillUpdate == "function") && (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(i, ke, F), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(i, ke, F)), typeof c.componentDidUpdate == "function" && (t.flags |= ct), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= Ua)) : (typeof c.componentDidUpdate == "function" && (v !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= ct), typeof c.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= Ua), t.memoizedProps = i, t.memoizedState = ke), c.props = i, c.state = ke, c.context = F, qe;
    }
    var US, jS, FS, PS, HS, Sw = function(e, t) {
    };
    US = !1, jS = !1, FS = {}, PS = {}, HS = {}, Sw = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = at(t) || "Component";
        PS[a] || (PS[a] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function qp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Rn || Ze) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = at(e) || "Component";
          FS[u] || (y('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), FS[u] = !0);
        }
        if (a._owner) {
          var c = a._owner, v;
          if (c) {
            var g = c;
            if (g.tag !== O)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            v = g.stateNode;
          }
          if (!v)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var S = v;
          Kn(i, "ref");
          var b = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === b)
            return t.ref;
          var T = function(F) {
            var U = S.refs;
            U === dw && (U = S.refs = {}), F === null ? delete U[b] : U[b] = F;
          };
          return T._stringRef = b, T;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Lm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Am(e) {
      {
        var t = at(e) || "Component";
        if (HS[t])
          return;
        HS[t] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function Ew(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function Cw(e) {
      function t(V, Z) {
        if (e) {
          var B = V.deletions;
          B === null ? (V.deletions = [Z], V.flags |= Bt) : B.push(Z);
        }
      }
      function a(V, Z) {
        if (!e)
          return null;
        for (var B = Z; B !== null; )
          t(V, B), B = B.sibling;
        return null;
      }
      function i(V, Z) {
        for (var B = /* @__PURE__ */ new Map(), ce = Z; ce !== null; )
          ce.key !== null ? B.set(ce.key, ce) : B.set(ce.index, ce), ce = ce.sibling;
        return B;
      }
      function u(V, Z) {
        var B = mc(V, Z);
        return B.index = 0, B.sibling = null, B;
      }
      function c(V, Z, B) {
        if (V.index = B, !e)
          return V.flags |= Hd, Z;
        var ce = V.alternate;
        if (ce !== null) {
          var Ne = ce.index;
          return Ne < Z ? (V.flags |= cn, Z) : Ne;
        } else
          return V.flags |= cn, Z;
      }
      function v(V) {
        return e && V.alternate === null && (V.flags |= cn), V;
      }
      function g(V, Z, B, ce) {
        if (Z === null || Z.tag !== I) {
          var Ne = p0(B, V.mode, ce);
          return Ne.return = V, Ne;
        } else {
          var Te = u(Z, B);
          return Te.return = V, Te;
        }
      }
      function S(V, Z, B, ce) {
        var Ne = B.type;
        if (Ne === Sa)
          return T(V, Z, B.props.children, ce, B.key);
        if (Z !== null && (Z.elementType === Ne || // Keep this check inline so it only runs on the false path:
        fb(Z, B) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ne == "object" && Ne !== null && Ne.$$typeof === We && Ew(Ne) === Z.type)) {
          var Te = u(Z, B.props);
          return Te.ref = qp(V, Z, B), Te.return = V, Te._debugSource = B._source, Te._debugOwner = B._owner, Te;
        }
        var et = d0(B, V.mode, ce);
        return et.ref = qp(V, Z, B), et.return = V, et;
      }
      function b(V, Z, B, ce) {
        if (Z === null || Z.tag !== P || Z.stateNode.containerInfo !== B.containerInfo || Z.stateNode.implementation !== B.implementation) {
          var Ne = v0(B, V.mode, ce);
          return Ne.return = V, Ne;
        } else {
          var Te = u(Z, B.children || []);
          return Te.return = V, Te;
        }
      }
      function T(V, Z, B, ce, Ne) {
        if (Z === null || Z.tag !== X) {
          var Te = us(B, V.mode, ce, Ne);
          return Te.return = V, Te;
        } else {
          var et = u(Z, B);
          return et.return = V, et;
        }
      }
      function F(V, Z, B) {
        if (typeof Z == "string" && Z !== "" || typeof Z == "number") {
          var ce = p0("" + Z, V.mode, B);
          return ce.return = V, ce;
        }
        if (typeof Z == "object" && Z !== null) {
          switch (Z.$$typeof) {
            case gi: {
              var Ne = d0(Z, V.mode, B);
              return Ne.ref = qp(V, null, Z), Ne.return = V, Ne;
            }
            case Nr: {
              var Te = v0(Z, V.mode, B);
              return Te.return = V, Te;
            }
            case We: {
              var et = Z._payload, ut = Z._init;
              return F(V, ut(et), B);
            }
          }
          if (Rt(Z) || ti(Z)) {
            var Zt = us(Z, V.mode, B, null);
            return Zt.return = V, Zt;
          }
          Lm(V, Z);
        }
        return typeof Z == "function" && Am(V), null;
      }
      function U(V, Z, B, ce) {
        var Ne = Z !== null ? Z.key : null;
        if (typeof B == "string" && B !== "" || typeof B == "number")
          return Ne !== null ? null : g(V, Z, "" + B, ce);
        if (typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case gi:
              return B.key === Ne ? S(V, Z, B, ce) : null;
            case Nr:
              return B.key === Ne ? b(V, Z, B, ce) : null;
            case We: {
              var Te = B._payload, et = B._init;
              return U(V, Z, et(Te), ce);
            }
          }
          if (Rt(B) || ti(B))
            return Ne !== null ? null : T(V, Z, B, ce, null);
          Lm(V, B);
        }
        return typeof B == "function" && Am(V), null;
      }
      function Y(V, Z, B, ce, Ne) {
        if (typeof ce == "string" && ce !== "" || typeof ce == "number") {
          var Te = V.get(B) || null;
          return g(Z, Te, "" + ce, Ne);
        }
        if (typeof ce == "object" && ce !== null) {
          switch (ce.$$typeof) {
            case gi: {
              var et = V.get(ce.key === null ? B : ce.key) || null;
              return S(Z, et, ce, Ne);
            }
            case Nr: {
              var ut = V.get(ce.key === null ? B : ce.key) || null;
              return b(Z, ut, ce, Ne);
            }
            case We:
              var Zt = ce._payload, Ft = ce._init;
              return Y(V, Z, B, Ft(Zt), Ne);
          }
          if (Rt(ce) || ti(ce)) {
            var Qn = V.get(B) || null;
            return T(Z, Qn, ce, Ne, null);
          }
          Lm(Z, ce);
        }
        return typeof ce == "function" && Am(Z), null;
      }
      function q(V, Z, B) {
        {
          if (typeof V != "object" || V === null)
            return Z;
          switch (V.$$typeof) {
            case gi:
            case Nr:
              Sw(V, B);
              var ce = V.key;
              if (typeof ce != "string")
                break;
              if (Z === null) {
                Z = /* @__PURE__ */ new Set(), Z.add(ce);
                break;
              }
              if (!Z.has(ce)) {
                Z.add(ce);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ce);
              break;
            case We:
              var Ne = V._payload, Te = V._init;
              q(Te(Ne), Z, B);
              break;
          }
        }
        return Z;
      }
      function J(V, Z, B, ce) {
        for (var Ne = null, Te = 0; Te < B.length; Te++) {
          var et = B[Te];
          Ne = q(et, Ne, V);
        }
        for (var ut = null, Zt = null, Ft = Z, Qn = 0, Pt = 0, Hn = null; Ft !== null && Pt < B.length; Pt++) {
          Ft.index > Pt ? (Hn = Ft, Ft = null) : Hn = Ft.sibling;
          var pa = U(V, Ft, B[Pt], ce);
          if (pa === null) {
            Ft === null && (Ft = Hn);
            break;
          }
          e && Ft && pa.alternate === null && t(V, Ft), Qn = c(pa, Qn, Pt), Zt === null ? ut = pa : Zt.sibling = pa, Zt = pa, Ft = Hn;
        }
        if (Pt === B.length) {
          if (a(V, Ft), jr()) {
            var Ir = Pt;
            rc(V, Ir);
          }
          return ut;
        }
        if (Ft === null) {
          for (; Pt < B.length; Pt++) {
            var di = F(V, B[Pt], ce);
            di !== null && (Qn = c(di, Qn, Pt), Zt === null ? ut = di : Zt.sibling = di, Zt = di);
          }
          if (jr()) {
            var Oa = Pt;
            rc(V, Oa);
          }
          return ut;
        }
        for (var ka = i(V, Ft); Pt < B.length; Pt++) {
          var va = Y(ka, V, Pt, B[Pt], ce);
          va !== null && (e && va.alternate !== null && ka.delete(va.key === null ? Pt : va.key), Qn = c(va, Qn, Pt), Zt === null ? ut = va : Zt.sibling = va, Zt = va);
        }
        if (e && ka.forEach(function(ld) {
          return t(V, ld);
        }), jr()) {
          var Ju = Pt;
          rc(V, Ju);
        }
        return ut;
      }
      function ke(V, Z, B, ce) {
        var Ne = ti(B);
        if (typeof Ne != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          B[Symbol.toStringTag] === "Generator" && (jS || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), jS = !0), B.entries === Ne && (US || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), US = !0);
          var Te = Ne.call(B);
          if (Te)
            for (var et = null, ut = Te.next(); !ut.done; ut = Te.next()) {
              var Zt = ut.value;
              et = q(Zt, et, V);
            }
        }
        var Ft = Ne.call(B);
        if (Ft == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Qn = null, Pt = null, Hn = Z, pa = 0, Ir = 0, di = null, Oa = Ft.next(); Hn !== null && !Oa.done; Ir++, Oa = Ft.next()) {
          Hn.index > Ir ? (di = Hn, Hn = null) : di = Hn.sibling;
          var ka = U(V, Hn, Oa.value, ce);
          if (ka === null) {
            Hn === null && (Hn = di);
            break;
          }
          e && Hn && ka.alternate === null && t(V, Hn), pa = c(ka, pa, Ir), Pt === null ? Qn = ka : Pt.sibling = ka, Pt = ka, Hn = di;
        }
        if (Oa.done) {
          if (a(V, Hn), jr()) {
            var va = Ir;
            rc(V, va);
          }
          return Qn;
        }
        if (Hn === null) {
          for (; !Oa.done; Ir++, Oa = Ft.next()) {
            var Ju = F(V, Oa.value, ce);
            Ju !== null && (pa = c(Ju, pa, Ir), Pt === null ? Qn = Ju : Pt.sibling = Ju, Pt = Ju);
          }
          if (jr()) {
            var ld = Ir;
            rc(V, ld);
          }
          return Qn;
        }
        for (var Rv = i(V, Hn); !Oa.done; Ir++, Oa = Ft.next()) {
          var ou = Y(Rv, V, Ir, Oa.value, ce);
          ou !== null && (e && ou.alternate !== null && Rv.delete(ou.key === null ? Ir : ou.key), pa = c(ou, pa, Ir), Pt === null ? Qn = ou : Pt.sibling = ou, Pt = ou);
        }
        if (e && Rv.forEach(function(mN) {
          return t(V, mN);
        }), jr()) {
          var hN = Ir;
          rc(V, hN);
        }
        return Qn;
      }
      function qe(V, Z, B, ce) {
        if (Z !== null && Z.tag === I) {
          a(V, Z.sibling);
          var Ne = u(Z, B);
          return Ne.return = V, Ne;
        }
        a(V, Z);
        var Te = p0(B, V.mode, ce);
        return Te.return = V, Te;
      }
      function Pe(V, Z, B, ce) {
        for (var Ne = B.key, Te = Z; Te !== null; ) {
          if (Te.key === Ne) {
            var et = B.type;
            if (et === Sa) {
              if (Te.tag === X) {
                a(V, Te.sibling);
                var ut = u(Te, B.props.children);
                return ut.return = V, ut._debugSource = B._source, ut._debugOwner = B._owner, ut;
              }
            } else if (Te.elementType === et || // Keep this check inline so it only runs on the false path:
            fb(Te, B) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof et == "object" && et !== null && et.$$typeof === We && Ew(et) === Te.type) {
              a(V, Te.sibling);
              var Zt = u(Te, B.props);
              return Zt.ref = qp(V, Te, B), Zt.return = V, Zt._debugSource = B._source, Zt._debugOwner = B._owner, Zt;
            }
            a(V, Te);
            break;
          } else
            t(V, Te);
          Te = Te.sibling;
        }
        if (B.type === Sa) {
          var Ft = us(B.props.children, V.mode, ce, B.key);
          return Ft.return = V, Ft;
        } else {
          var Qn = d0(B, V.mode, ce);
          return Qn.ref = qp(V, Z, B), Qn.return = V, Qn;
        }
      }
      function Ot(V, Z, B, ce) {
        for (var Ne = B.key, Te = Z; Te !== null; ) {
          if (Te.key === Ne)
            if (Te.tag === P && Te.stateNode.containerInfo === B.containerInfo && Te.stateNode.implementation === B.implementation) {
              a(V, Te.sibling);
              var et = u(Te, B.children || []);
              return et.return = V, et;
            } else {
              a(V, Te);
              break;
            }
          else
            t(V, Te);
          Te = Te.sibling;
        }
        var ut = v0(B, V.mode, ce);
        return ut.return = V, ut;
      }
      function wt(V, Z, B, ce) {
        var Ne = typeof B == "object" && B !== null && B.type === Sa && B.key === null;
        if (Ne && (B = B.props.children), typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case gi:
              return v(Pe(V, Z, B, ce));
            case Nr:
              return v(Ot(V, Z, B, ce));
            case We:
              var Te = B._payload, et = B._init;
              return wt(V, Z, et(Te), ce);
          }
          if (Rt(B))
            return J(V, Z, B, ce);
          if (ti(B))
            return ke(V, Z, B, ce);
          Lm(V, B);
        }
        return typeof B == "string" && B !== "" || typeof B == "number" ? v(qe(V, Z, "" + B, ce)) : (typeof B == "function" && Am(V), a(V, Z));
      }
      return wt;
    }
    var Wf = Cw(!0), ww = Cw(!1);
    function rD(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = mc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = mc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function aD(e, t) {
      for (var a = e.child; a !== null; )
        Lk(a, t), a = a.sibling;
    }
    var Qp = {}, Jl = ql(Qp), Gp = ql(Qp), zm = ql(Qp);
    function Um(e) {
      if (e === Qp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function Rw() {
      var e = Um(zm.current);
      return e;
    }
    function VS(e, t) {
      fa(zm, t, e), fa(Gp, e, e), fa(Jl, Qp, e);
      var a = g_(t);
      ca(Jl, e), fa(Jl, a, e);
    }
    function qf(e) {
      ca(Jl, e), ca(Gp, e), ca(zm, e);
    }
    function BS() {
      var e = Um(Jl.current);
      return e;
    }
    function bw(e) {
      Um(zm.current);
      var t = Um(Jl.current), a = S_(t, e.type);
      t !== a && (fa(Gp, e, e), fa(Jl, a, e));
    }
    function $S(e) {
      Gp.current === e && (ca(Jl, e), ca(Gp, e));
    }
    var iD = 0, Tw = 1, _w = 1, Kp = 2, lo = ql(iD);
    function IS(e, t) {
      return (e & t) !== 0;
    }
    function Qf(e) {
      return e & Tw;
    }
    function YS(e, t) {
      return e & Tw | t;
    }
    function oD(e, t) {
      return e | t;
    }
    function Zl(e, t) {
      fa(lo, t, e);
    }
    function Gf(e) {
      ca(lo, e);
    }
    function uD(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function jm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === fe) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || UC(i) || Xg(i))
              return t;
          }
        } else if (t.tag === ht && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & tt) !== Ye;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Qa = (
      /*   */
      0
    ), cr = (
      /* */
      1
    ), Zo = (
      /*  */
      2
    ), fr = (
      /*    */
      4
    ), Fr = (
      /*   */
      8
    ), WS = [];
    function qS() {
      for (var e = 0; e < WS.length; e++) {
        var t = WS[e];
        t._workInProgressVersionPrimary = null;
      }
      WS.length = 0;
    }
    function lD(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var De = d.ReactCurrentDispatcher, Xp = d.ReactCurrentBatchConfig, QS, Kf;
    QS = /* @__PURE__ */ new Set();
    var sc = ee, Jt = null, dr = null, pr = null, Fm = !1, Jp = !1, Zp = 0, sD = 0, cD = 25, te = null, Ai = null, es = -1, GS = !1;
    function Gt() {
      {
        var e = te;
        Ai === null ? Ai = [e] : Ai.push(e);
      }
    }
    function Ee() {
      {
        var e = te;
        Ai !== null && (es++, Ai[es] !== e && fD(e));
      }
    }
    function Xf(e) {
      e != null && !Rt(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", te, typeof e);
    }
    function fD(e) {
      {
        var t = at(Jt);
        if (!QS.has(t) && (QS.add(t), Ai !== null)) {
          for (var a = "", i = 30, u = 0; u <= es; u++) {
            for (var c = Ai[u], v = u === es ? e : c, g = u + 1 + ". " + c; g.length < i; )
              g += " ";
            g += v + `
`, a += g;
          }
          y(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function da() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function KS(e, t) {
      if (GS)
        return !1;
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", te), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, te, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ze(e[a], t[a]))
          return !1;
      return !0;
    }
    function Jf(e, t, a, i, u, c) {
      sc = c, Jt = t, Ai = e !== null ? e._debugHookTypes : null, es = -1, GS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ee, e !== null && e.memoizedState !== null ? De.current = Qw : Ai !== null ? De.current = qw : De.current = Ww;
      var v = a(i, u);
      if (Jp) {
        var g = 0;
        do {
          if (Jp = !1, Zp = 0, g >= cD)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          g += 1, GS = !1, dr = null, pr = null, t.updateQueue = null, es = -1, De.current = Gw, v = a(i, u);
        } while (Jp);
      }
      De.current = Xm, t._debugHookTypes = Ai;
      var S = dr !== null && dr.next !== null;
      if (sc = ee, Jt = null, dr = null, pr = null, te = null, Ai = null, es = -1, e !== null && (e.flags & ur) !== (t.flags & ur) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & gt) !== Ge && y("Internal React error: Expected static flag was missing. Please notify the React team."), Fm = !1, S)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return v;
    }
    function Zf() {
      var e = Zp !== 0;
      return Zp = 0, e;
    }
    function xw(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ha) !== Ge ? t.flags &= ~(Eu | aa | mn | ct) : t.flags &= ~(mn | ct), e.lanes = kl(e.lanes, a);
    }
    function Dw() {
      if (De.current = Xm, Fm) {
        for (var e = Jt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Fm = !1;
      }
      sc = ee, Jt = null, dr = null, pr = null, Ai = null, es = -1, te = null, Vw = !1, Jp = !1, Zp = 0;
    }
    function eu() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return pr === null ? Jt.memoizedState = pr = e : pr = pr.next = e, pr;
    }
    function zi() {
      var e;
      if (dr === null) {
        var t = Jt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = dr.next;
      var a;
      if (pr === null ? a = Jt.memoizedState : a = pr.next, a !== null)
        pr = a, a = pr.next, dr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        dr = e;
        var i = {
          memoizedState: dr.memoizedState,
          baseState: dr.baseState,
          baseQueue: dr.baseQueue,
          queue: dr.queue,
          next: null
        };
        pr === null ? Jt.memoizedState = pr = i : pr = pr.next = i;
      }
      return pr;
    }
    function Ow() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function XS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function JS(e, t, a) {
      var i = eu(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var c = {
        pending: null,
        interleaved: null,
        lanes: ee,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = c;
      var v = c.dispatch = hD.bind(null, Jt, c);
      return [i.memoizedState, v];
    }
    function ZS(e, t, a) {
      var i = zi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var c = dr, v = c.baseQueue, g = u.pending;
      if (g !== null) {
        if (v !== null) {
          var S = v.next, b = g.next;
          v.next = b, g.next = S;
        }
        c.baseQueue !== v && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), c.baseQueue = v = g, u.pending = null;
      }
      if (v !== null) {
        var T = v.next, F = c.baseState, U = null, Y = null, q = null, J = T;
        do {
          var ke = J.lane;
          if (ku(sc, ke)) {
            if (q !== null) {
              var Pe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: xt,
                action: J.action,
                hasEagerState: J.hasEagerState,
                eagerState: J.eagerState,
                next: null
              };
              q = q.next = Pe;
            }
            if (J.hasEagerState)
              F = J.eagerState;
            else {
              var Ot = J.action;
              F = e(F, Ot);
            }
          } else {
            var qe = {
              lane: ke,
              action: J.action,
              hasEagerState: J.hasEagerState,
              eagerState: J.eagerState,
              next: null
            };
            q === null ? (Y = q = qe, U = F) : q = q.next = qe, Jt.lanes = ft(Jt.lanes, ke), gv(ke);
          }
          J = J.next;
        } while (J !== null && J !== T);
        q === null ? U = F : q.next = Y, ze(F, i.memoizedState) || ov(), i.memoizedState = F, i.baseState = U, i.baseQueue = q, u.lastRenderedState = F;
      }
      var wt = u.interleaved;
      if (wt !== null) {
        var V = wt;
        do {
          var Z = V.lane;
          Jt.lanes = ft(Jt.lanes, Z), gv(Z), V = V.next;
        } while (V !== wt);
      } else
        v === null && (u.lanes = ee);
      var B = u.dispatch;
      return [i.memoizedState, B];
    }
    function eE(e, t, a) {
      var i = zi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var c = u.dispatch, v = u.pending, g = i.memoizedState;
      if (v !== null) {
        u.pending = null;
        var S = v.next, b = S;
        do {
          var T = b.action;
          g = e(g, T), b = b.next;
        } while (b !== S);
        ze(g, i.memoizedState) || ov(), i.memoizedState = g, i.baseQueue === null && (i.baseState = g), u.lastRenderedState = g;
      }
      return [g, c];
    }
    function cz(e, t, a) {
    }
    function fz(e, t, a) {
    }
    function tE(e, t, a) {
      var i = Jt, u = eu(), c, v = jr();
      if (v) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        c = a(), Kf || c !== a() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), Kf = !0);
      } else {
        if (c = t(), !Kf) {
          var g = t();
          ze(c, g) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Kf = !0);
        }
        var S = hy();
        if (S === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Hs(S, sc) || kw(i, t, c);
      }
      u.memoizedState = c;
      var b = {
        value: c,
        getSnapshot: t
      };
      return u.queue = b, $m(Mw.bind(null, i, b, e), [e]), i.flags |= mn, ev(cr | Fr, Nw.bind(null, i, b, c, t), void 0, null), c;
    }
    function Pm(e, t, a) {
      var i = Jt, u = zi(), c = t();
      if (!Kf) {
        var v = t();
        ze(c, v) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Kf = !0);
      }
      var g = u.memoizedState, S = !ze(g, c);
      S && (u.memoizedState = c, ov());
      var b = u.queue;
      if (nv(Mw.bind(null, i, b, e), [e]), b.getSnapshot !== t || S || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      pr !== null && pr.memoizedState.tag & cr) {
        i.flags |= mn, ev(cr | Fr, Nw.bind(null, i, b, c, t), void 0, null);
        var T = hy();
        if (T === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Hs(T, sc) || kw(i, t, c);
      }
      return c;
    }
    function kw(e, t, a) {
      e.flags |= Ns;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Jt.updateQueue;
      if (u === null)
        u = Ow(), Jt.updateQueue = u, u.stores = [i];
      else {
        var c = u.stores;
        c === null ? u.stores = [i] : c.push(i);
      }
    }
    function Nw(e, t, a, i) {
      t.value = a, t.getSnapshot = i, Lw(t) && Aw(e);
    }
    function Mw(e, t, a) {
      var i = function() {
        Lw(t) && Aw(e);
      };
      return a(i);
    }
    function Lw(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ze(a, i);
      } catch {
        return !0;
      }
    }
    function Aw(e) {
      var t = qa(e, Je);
      t !== null && yr(t, e, Je, an);
    }
    function Hm(e) {
      var t = eu();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: ee,
        dispatch: null,
        lastRenderedReducer: XS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = mD.bind(null, Jt, a);
      return [t.memoizedState, i];
    }
    function nE(e) {
      return ZS(XS);
    }
    function rE(e) {
      return eE(XS);
    }
    function ev(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, c = Jt.updateQueue;
      if (c === null)
        c = Ow(), Jt.updateQueue = c, c.lastEffect = u.next = u;
      else {
        var v = c.lastEffect;
        if (v === null)
          c.lastEffect = u.next = u;
        else {
          var g = v.next;
          v.next = u, u.next = g, c.lastEffect = u;
        }
      }
      return u;
    }
    function aE(e) {
      var t = eu();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Vm(e) {
      var t = zi();
      return t.memoizedState;
    }
    function tv(e, t, a, i) {
      var u = eu(), c = i === void 0 ? null : i;
      Jt.flags |= e, u.memoizedState = ev(cr | t, a, void 0, c);
    }
    function Bm(e, t, a, i) {
      var u = zi(), c = i === void 0 ? null : i, v = void 0;
      if (dr !== null) {
        var g = dr.memoizedState;
        if (v = g.destroy, c !== null) {
          var S = g.deps;
          if (KS(c, S)) {
            u.memoizedState = ev(t, a, v, c);
            return;
          }
        }
      }
      Jt.flags |= e, u.memoizedState = ev(cr | t, a, v, c);
    }
    function $m(e, t) {
      return (Jt.mode & Ha) !== Ge ? tv(Eu | mn | Uo, Fr, e, t) : tv(mn | Uo, Fr, e, t);
    }
    function nv(e, t) {
      return Bm(mn, Fr, e, t);
    }
    function iE(e, t) {
      return tv(ct, Zo, e, t);
    }
    function Im(e, t) {
      return Bm(ct, Zo, e, t);
    }
    function oE(e, t) {
      var a = ct;
      return a |= ra, (Jt.mode & Ha) !== Ge && (a |= aa), tv(a, fr, e, t);
    }
    function Ym(e, t) {
      return Bm(ct, fr, e, t);
    }
    function zw(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || y("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var c = e();
        return u.current = c, function() {
          u.current = null;
        };
      }
    }
    function uE(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = ct;
      return u |= ra, (Jt.mode & Ha) !== Ge && (u |= aa), tv(u, fr, zw.bind(null, t, e), i);
    }
    function Wm(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Bm(ct, fr, zw.bind(null, t, e), i);
    }
    function dD(e, t) {
    }
    var qm = dD;
    function lE(e, t) {
      var a = eu(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Qm(e, t) {
      var a = zi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var c = u[1];
        if (KS(i, c))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function sE(e, t) {
      var a = eu(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function Gm(e, t) {
      var a = zi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var c = u[1];
        if (KS(i, c))
          return u[0];
      }
      var v = e();
      return a.memoizedState = [v, i], v;
    }
    function cE(e) {
      var t = eu();
      return t.memoizedState = e, e;
    }
    function Uw(e) {
      var t = zi(), a = dr, i = a.memoizedState;
      return Fw(t, i, e);
    }
    function jw(e) {
      var t = zi();
      if (dr === null)
        return t.memoizedState = e, e;
      var a = dr.memoizedState;
      return Fw(t, a, e);
    }
    function Fw(e, t, a) {
      var i = !mg(sc);
      if (i) {
        if (!ze(a, t)) {
          var u = rp();
          Jt.lanes = ft(Jt.lanes, u), gv(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, ov()), e.memoizedState = a, a;
    }
    function pD(e, t, a) {
      var i = Ba();
      Yn(br(i, sr)), e(!0);
      var u = Xp.transition;
      Xp.transition = {};
      var c = Xp.transition;
      Xp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Yn(i), Xp.transition = u, u === null && c._updatedFibers) {
          var v = c._updatedFibers.size;
          v > 10 && R("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), c._updatedFibers.clear();
        }
      }
    }
    function fE() {
      var e = Hm(!1), t = e[0], a = e[1], i = pD.bind(null, a), u = eu();
      return u.memoizedState = i, [t, i];
    }
    function Pw() {
      var e = nE(), t = e[0], a = zi(), i = a.memoizedState;
      return [t, i];
    }
    function Hw() {
      var e = rE(), t = e[0], a = zi(), i = a.memoizedState;
      return [t, i];
    }
    var Vw = !1;
    function vD() {
      return Vw;
    }
    function dE() {
      var e = eu(), t = hy(), a = t.identifierPrefix, i;
      if (jr()) {
        var u = Dx();
        i = ":" + a + "R" + u;
        var c = Zp++;
        c > 0 && (i += "H" + c.toString(32)), i += ":";
      } else {
        var v = sD++;
        i = ":" + a + "r" + v.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Km() {
      var e = zi(), t = e.memoizedState;
      return t;
    }
    function hD(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = is(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Bw(e))
        $w(t, u);
      else {
        var c = ow(e, t, u, i);
        if (c !== null) {
          var v = Da();
          yr(c, e, i, v), Iw(c, t, i);
        }
      }
      Yw(e, i);
    }
    function mD(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = is(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Bw(e))
        $w(t, u);
      else {
        var c = e.alternate;
        if (e.lanes === ee && (c === null || c.lanes === ee)) {
          var v = t.lastRenderedReducer;
          if (v !== null) {
            var g;
            g = De.current, De.current = so;
            try {
              var S = t.lastRenderedState, b = v(S, a);
              if (u.hasEagerState = !0, u.eagerState = b, ze(b, S)) {
                Qx(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              De.current = g;
            }
          }
        }
        var T = ow(e, t, u, i);
        if (T !== null) {
          var F = Da();
          yr(T, e, i, F), Iw(T, t, i);
        }
      }
      Yw(e, i);
    }
    function Bw(e) {
      var t = e.alternate;
      return e === Jt || t !== null && t === Jt;
    }
    function $w(e, t) {
      Jp = Fm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function Iw(e, t, a) {
      if (np(a)) {
        var i = t.lanes;
        i = ap(i, e.pendingLanes);
        var u = ft(i, a);
        t.lanes = u, Nl(e, u);
      }
    }
    function Yw(e, t, a) {
      Bo(e, t);
    }
    var Xm = {
      readContext: ar,
      useCallback: da,
      useContext: da,
      useEffect: da,
      useImperativeHandle: da,
      useInsertionEffect: da,
      useLayoutEffect: da,
      useMemo: da,
      useReducer: da,
      useRef: da,
      useState: da,
      useDebugValue: da,
      useDeferredValue: da,
      useTransition: da,
      useMutableSource: da,
      useSyncExternalStore: da,
      useId: da,
      unstable_isNewReconciler: ve
    }, Ww = null, qw = null, Qw = null, Gw = null, tu = null, so = null, Jm = null;
    {
      var pE = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, it = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      Ww = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", Gt(), Xf(t), lE(e, t);
        },
        useContext: function(e) {
          return te = "useContext", Gt(), ar(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", Gt(), Xf(t), $m(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", Gt(), Xf(a), uE(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", Gt(), Xf(t), iE(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", Gt(), Xf(t), oE(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", Gt(), Xf(t);
          var a = De.current;
          De.current = tu;
          try {
            return sE(e, t);
          } finally {
            De.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", Gt();
          var i = De.current;
          De.current = tu;
          try {
            return JS(e, t, a);
          } finally {
            De.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", Gt(), aE(e);
        },
        useState: function(e) {
          te = "useState", Gt();
          var t = De.current;
          De.current = tu;
          try {
            return Hm(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", Gt(), void 0;
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", Gt(), cE(e);
        },
        useTransition: function() {
          return te = "useTransition", Gt(), fE();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", Gt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", Gt(), tE(e, t, a);
        },
        useId: function() {
          return te = "useId", Gt(), dE();
        },
        unstable_isNewReconciler: ve
      }, qw = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", Ee(), lE(e, t);
        },
        useContext: function(e) {
          return te = "useContext", Ee(), ar(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", Ee(), $m(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", Ee(), uE(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", Ee(), iE(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", Ee(), oE(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", Ee();
          var a = De.current;
          De.current = tu;
          try {
            return sE(e, t);
          } finally {
            De.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", Ee();
          var i = De.current;
          De.current = tu;
          try {
            return JS(e, t, a);
          } finally {
            De.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", Ee(), aE(e);
        },
        useState: function(e) {
          te = "useState", Ee();
          var t = De.current;
          De.current = tu;
          try {
            return Hm(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", Ee(), void 0;
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", Ee(), cE(e);
        },
        useTransition: function() {
          return te = "useTransition", Ee(), fE();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", Ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", Ee(), tE(e, t, a);
        },
        useId: function() {
          return te = "useId", Ee(), dE();
        },
        unstable_isNewReconciler: ve
      }, Qw = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", Ee(), Qm(e, t);
        },
        useContext: function(e) {
          return te = "useContext", Ee(), ar(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", Ee(), nv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", Ee(), Wm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", Ee(), Im(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", Ee(), Ym(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", Ee();
          var a = De.current;
          De.current = so;
          try {
            return Gm(e, t);
          } finally {
            De.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", Ee();
          var i = De.current;
          De.current = so;
          try {
            return ZS(e, t, a);
          } finally {
            De.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", Ee(), Vm();
        },
        useState: function(e) {
          te = "useState", Ee();
          var t = De.current;
          De.current = so;
          try {
            return nE(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", Ee(), qm();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", Ee(), Uw(e);
        },
        useTransition: function() {
          return te = "useTransition", Ee(), Pw();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", Ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", Ee(), Pm(e, t);
        },
        useId: function() {
          return te = "useId", Ee(), Km();
        },
        unstable_isNewReconciler: ve
      }, Gw = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", Ee(), Qm(e, t);
        },
        useContext: function(e) {
          return te = "useContext", Ee(), ar(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", Ee(), nv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", Ee(), Wm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", Ee(), Im(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", Ee(), Ym(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", Ee();
          var a = De.current;
          De.current = Jm;
          try {
            return Gm(e, t);
          } finally {
            De.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", Ee();
          var i = De.current;
          De.current = Jm;
          try {
            return eE(e, t, a);
          } finally {
            De.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", Ee(), Vm();
        },
        useState: function(e) {
          te = "useState", Ee();
          var t = De.current;
          De.current = Jm;
          try {
            return rE(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", Ee(), qm();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", Ee(), jw(e);
        },
        useTransition: function() {
          return te = "useTransition", Ee(), Hw();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", Ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", Ee(), Pm(e, t);
        },
        useId: function() {
          return te = "useId", Ee(), Km();
        },
        unstable_isNewReconciler: ve
      }, tu = {
        readContext: function(e) {
          return pE(), ar(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", it(), Gt(), lE(e, t);
        },
        useContext: function(e) {
          return te = "useContext", it(), Gt(), ar(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", it(), Gt(), $m(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", it(), Gt(), uE(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", it(), Gt(), iE(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", it(), Gt(), oE(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", it(), Gt();
          var a = De.current;
          De.current = tu;
          try {
            return sE(e, t);
          } finally {
            De.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", it(), Gt();
          var i = De.current;
          De.current = tu;
          try {
            return JS(e, t, a);
          } finally {
            De.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", it(), Gt(), aE(e);
        },
        useState: function(e) {
          te = "useState", it(), Gt();
          var t = De.current;
          De.current = tu;
          try {
            return Hm(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", it(), Gt(), void 0;
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", it(), Gt(), cE(e);
        },
        useTransition: function() {
          return te = "useTransition", it(), Gt(), fE();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", it(), Gt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", it(), Gt(), tE(e, t, a);
        },
        useId: function() {
          return te = "useId", it(), Gt(), dE();
        },
        unstable_isNewReconciler: ve
      }, so = {
        readContext: function(e) {
          return pE(), ar(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", it(), Ee(), Qm(e, t);
        },
        useContext: function(e) {
          return te = "useContext", it(), Ee(), ar(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", it(), Ee(), nv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", it(), Ee(), Wm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", it(), Ee(), Im(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", it(), Ee(), Ym(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", it(), Ee();
          var a = De.current;
          De.current = so;
          try {
            return Gm(e, t);
          } finally {
            De.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", it(), Ee();
          var i = De.current;
          De.current = so;
          try {
            return ZS(e, t, a);
          } finally {
            De.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", it(), Ee(), Vm();
        },
        useState: function(e) {
          te = "useState", it(), Ee();
          var t = De.current;
          De.current = so;
          try {
            return nE(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", it(), Ee(), qm();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", it(), Ee(), Uw(e);
        },
        useTransition: function() {
          return te = "useTransition", it(), Ee(), Pw();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", it(), Ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", it(), Ee(), Pm(e, t);
        },
        useId: function() {
          return te = "useId", it(), Ee(), Km();
        },
        unstable_isNewReconciler: ve
      }, Jm = {
        readContext: function(e) {
          return pE(), ar(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", it(), Ee(), Qm(e, t);
        },
        useContext: function(e) {
          return te = "useContext", it(), Ee(), ar(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", it(), Ee(), nv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", it(), Ee(), Wm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", it(), Ee(), Im(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", it(), Ee(), Ym(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", it(), Ee();
          var a = De.current;
          De.current = so;
          try {
            return Gm(e, t);
          } finally {
            De.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", it(), Ee();
          var i = De.current;
          De.current = so;
          try {
            return eE(e, t, a);
          } finally {
            De.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", it(), Ee(), Vm();
        },
        useState: function(e) {
          te = "useState", it(), Ee();
          var t = De.current;
          De.current = so;
          try {
            return rE(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", it(), Ee(), qm();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", it(), Ee(), jw(e);
        },
        useTransition: function() {
          return te = "useTransition", it(), Ee(), Hw();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", it(), Ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", it(), Ee(), Pm(e, t);
        },
        useId: function() {
          return te = "useId", it(), Ee(), Km();
        },
        unstable_isNewReconciler: ve
      };
    }
    var ts = f.unstable_now, Kw = 0, Zm = -1, rv = -1, ey = -1, vE = !1, ty = !1;
    function Xw() {
      return vE;
    }
    function yD() {
      ty = !0;
    }
    function gD() {
      vE = !1, ty = !1;
    }
    function SD() {
      vE = ty, ty = !1;
    }
    function Jw() {
      return Kw;
    }
    function Zw() {
      Kw = ts();
    }
    function hE(e) {
      rv = ts(), e.actualStartTime < 0 && (e.actualStartTime = ts());
    }
    function eR(e) {
      rv = -1;
    }
    function ny(e, t) {
      if (rv >= 0) {
        var a = ts() - rv;
        e.actualDuration += a, t && (e.selfBaseDuration = a), rv = -1;
      }
    }
    function nu(e) {
      if (Zm >= 0) {
        var t = ts() - Zm;
        Zm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case x:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case me:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function mE(e) {
      if (ey >= 0) {
        var t = ts() - ey;
        ey = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case x:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case me:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function ru() {
      Zm = ts();
    }
    function yE() {
      ey = ts();
    }
    function gE(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function cc(e, t) {
      return {
        value: e,
        source: t,
        stack: ll(t),
        digest: null
      };
    }
    function SE(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function ED(e, t) {
      return !0;
    }
    function EE(e, t) {
      try {
        var a = ED(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, c = t.stack, v = c !== null ? c : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === O)
            return;
          console.error(i);
        }
        var g = u ? at(u) : null, S = g ? "The above error occurred in the <" + g + "> component:" : "The above error occurred in one of your React components:", b;
        if (e.tag === x)
          b = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var T = at(e) || "Anonymous";
          b = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + T + ".");
        }
        var F = S + `
` + v + `

` + ("" + b);
        console.error(F);
      } catch (U) {
        setTimeout(function() {
          throw U;
        });
      }
    }
    var CD = typeof WeakMap == "function" ? WeakMap : Map;
    function tR(e, t, a) {
      var i = Wu(an, a);
      i.tag = ES, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        pk(u), EE(e, t);
      }, i;
    }
    function CE(e, t, a) {
      var i = Wu(an, a);
      i.tag = ES;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var c = t.value;
        i.payload = function() {
          return u(c);
        }, i.callback = function() {
          db(e), EE(e, t);
        };
      }
      var v = e.stateNode;
      return v !== null && typeof v.componentDidCatch == "function" && (i.callback = function() {
        db(e), EE(e, t), typeof u != "function" && fk(this);
        var S = t.value, b = t.stack;
        this.componentDidCatch(S, {
          componentStack: b !== null ? b : ""
        }), typeof u != "function" && (sa(e.lanes, Je) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", at(e) || "Unknown"));
      }), i;
    }
    function nR(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new CD(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var c = vk.bind(null, e, t, a);
        lr && Sv(e, a), t.then(c, c);
      }
    }
    function wD(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var c = /* @__PURE__ */ new Set();
        c.add(a), e.updateQueue = c;
      } else
        u.add(a);
    }
    function RD(e, t) {
      var a = e.tag;
      if ((e.mode & gt) === Ge && (a === M || a === ie || a === _e)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function rR(e) {
      var t = e;
      do {
        if (t.tag === fe && uD(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function aR(e, t, a, i, u) {
      if ((e.mode & gt) === Ge) {
        if (e === t)
          e.flags |= Zn;
        else {
          if (e.flags |= tt, a.flags |= Ms, a.flags &= ~(jc | Ea), a.tag === O) {
            var c = a.alternate;
            if (c === null)
              a.tag = bt;
            else {
              var v = Wu(an, Je);
              v.tag = _m, Xl(a, v, Je);
            }
          }
          a.lanes = ft(a.lanes, Je);
        }
        return e;
      }
      return e.flags |= Zn, e.lanes = u, e;
    }
    function bD(e, t, a, i, u) {
      if (a.flags |= Ea, lr && Sv(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var c = i;
        RD(a), jr() && a.mode & gt && QC();
        var v = rR(t);
        if (v !== null) {
          v.flags &= ~xn, aR(v, t, a, e, u), v.mode & gt && nR(e, c, u), wD(v, e, c);
          return;
        } else {
          if (!Ol(u)) {
            nR(e, c, u), e0();
            return;
          }
          var g = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = g;
        }
      } else if (jr() && a.mode & gt) {
        QC();
        var S = rR(t);
        if (S !== null) {
          (S.flags & Zn) === Ye && (S.flags |= xn), aR(S, t, a, e, u), pS(cc(i, a));
          return;
        }
      }
      i = cc(i, a), rk(i);
      var b = t;
      do {
        switch (b.tag) {
          case x: {
            var T = i;
            b.flags |= Zn;
            var F = In(u);
            b.lanes = ft(b.lanes, F);
            var U = tR(b, T, F);
            RS(b, U);
            return;
          }
          case O:
            var Y = i, q = b.type, J = b.stateNode;
            if ((b.flags & tt) === Ye && (typeof q.getDerivedStateFromError == "function" || J !== null && typeof J.componentDidCatch == "function" && !rb(J))) {
              b.flags |= Zn;
              var ke = In(u);
              b.lanes = ft(b.lanes, ke);
              var qe = CE(b, Y, ke);
              RS(b, qe);
              return;
            }
            break;
        }
        b = b.return;
      } while (b !== null);
    }
    function TD() {
      return null;
    }
    var av = d.ReactCurrentOwner, co = !1, wE, iv, RE, bE, TE, fc, _E, ry;
    wE = {}, iv = {}, RE = {}, bE = {}, TE = {}, fc = !1, _E = {}, ry = {};
    function _a(e, t, a, i) {
      e === null ? t.child = ww(t, null, a, i) : t.child = Wf(t, e.child, a, i);
    }
    function _D(e, t, a, i) {
      t.child = Wf(t, e.child, null, i), t.child = Wf(t, null, a, i);
    }
    function iR(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var c = a.propTypes;
        c && ao(
          c,
          i,
          // Resolved props
          "prop",
          At(a)
        );
      }
      var v = a.render, g = t.ref, S, b;
      Yf(t, u), Vo(t);
      {
        if (av.current = t, ea(!0), S = Jf(e, t, v, i, g, u), b = Zf(), t.mode & Rn) {
          $n(!0);
          try {
            S = Jf(e, t, v, i, g, u), b = Zf();
          } finally {
            $n(!1);
          }
        }
        ea(!1);
      }
      return Cu(), e !== null && !co ? (xw(e, t, u), qu(e, t, u)) : (jr() && b && uS(t), t.flags |= Ao, _a(e, t, S, u), t.child);
    }
    function oR(e, t, a, i, u) {
      if (e === null) {
        var c = a.type;
        if (Nk(c) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var v = c;
          return v = ud(c), t.tag = _e, t.type = v, OE(t, c), uR(e, t, v, i, u);
        }
        {
          var g = c.propTypes;
          g && ao(
            g,
            i,
            // Resolved props
            "prop",
            At(c)
          );
        }
        var S = f0(a.type, null, i, t, t.mode, u);
        return S.ref = t.ref, S.return = t, t.child = S, S;
      }
      {
        var b = a.type, T = b.propTypes;
        T && ao(
          T,
          i,
          // Resolved props
          "prop",
          At(b)
        );
      }
      var F = e.child, U = zE(e, u);
      if (!U) {
        var Y = F.memoizedProps, q = a.compare;
        if (q = q !== null ? q : $e, q(Y, i) && e.ref === t.ref)
          return qu(e, t, u);
      }
      t.flags |= Ao;
      var J = mc(F, i);
      return J.ref = t.ref, J.return = t, t.child = J, J;
    }
    function uR(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var c = t.elementType;
        if (c.$$typeof === We) {
          var v = c, g = v._payload, S = v._init;
          try {
            c = S(g);
          } catch {
            c = null;
          }
          var b = c && c.propTypes;
          b && ao(
            b,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            At(c)
          );
        }
      }
      if (e !== null) {
        var T = e.memoizedProps;
        if ($e(T, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (co = !1, t.pendingProps = i = T, zE(e, u))
            (e.flags & Ms) !== Ye && (co = !0);
          else
            return t.lanes = e.lanes, qu(e, t, u);
      }
      return xE(e, t, a, i, u);
    }
    function lR(e, t, a) {
      var i = t.pendingProps, u = i.children, c = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || A)
        if ((t.mode & gt) === Ge) {
          var v = {
            baseLanes: ee,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = v, my(t, a);
        } else if (sa(a, la)) {
          var F = {
            baseLanes: ee,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = F;
          var U = c !== null ? c.baseLanes : a;
          my(t, U);
        } else {
          var g = null, S;
          if (c !== null) {
            var b = c.baseLanes;
            S = ft(b, a);
          } else
            S = a;
          t.lanes = t.childLanes = la;
          var T = {
            baseLanes: S,
            cachePool: g,
            transitions: null
          };
          return t.memoizedState = T, t.updateQueue = null, my(t, S), null;
        }
      else {
        var Y;
        c !== null ? (Y = ft(c.baseLanes, a), t.memoizedState = null) : Y = a, my(t, Y);
      }
      return _a(e, t, u, a), t.child;
    }
    function xD(e, t, a) {
      var i = t.pendingProps;
      return _a(e, t, i, a), t.child;
    }
    function DD(e, t, a) {
      var i = t.pendingProps.children;
      return _a(e, t, i, a), t.child;
    }
    function OD(e, t, a) {
      {
        t.flags |= ct;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, c = u.children;
      return _a(e, t, c, a), t.child;
    }
    function sR(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= na, t.flags |= Vd);
    }
    function xE(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var c = a.propTypes;
        c && ao(
          c,
          i,
          // Resolved props
          "prop",
          At(a)
        );
      }
      var v;
      {
        var g = Pf(t, a, !0);
        v = Hf(t, g);
      }
      var S, b;
      Yf(t, u), Vo(t);
      {
        if (av.current = t, ea(!0), S = Jf(e, t, a, i, v, u), b = Zf(), t.mode & Rn) {
          $n(!0);
          try {
            S = Jf(e, t, a, i, v, u), b = Zf();
          } finally {
            $n(!1);
          }
        }
        ea(!1);
      }
      return Cu(), e !== null && !co ? (xw(e, t, u), qu(e, t, u)) : (jr() && b && uS(t), t.flags |= Ao, _a(e, t, S, u), t.child);
    }
    function cR(e, t, a, i, u) {
      {
        switch (Wk(t)) {
          case !1: {
            var c = t.stateNode, v = t.type, g = new v(t.memoizedProps, c.context), S = g.state;
            c.updater.enqueueSetState(c, S, null);
            break;
          }
          case !0: {
            t.flags |= tt, t.flags |= Zn;
            var b = new Error("Simulated error coming from DevTools"), T = In(u);
            t.lanes = ft(t.lanes, T);
            var F = CE(t, cc(b, t), T);
            RS(t, F);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var U = a.propTypes;
          U && ao(
            U,
            i,
            // Resolved props
            "prop",
            At(a)
          );
        }
      }
      var Y;
      Jo(a) ? (Y = !0, hm(t)) : Y = !1, Yf(t, u);
      var q = t.stateNode, J;
      q === null ? (iy(e, t), yw(t, a, i), zS(t, a, i, u), J = !0) : e === null ? J = tD(t, a, i, u) : J = nD(e, t, a, i, u);
      var ke = DE(e, t, a, J, Y, u);
      {
        var qe = t.stateNode;
        J && qe.props !== i && (fc || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", at(t) || "a component"), fc = !0);
      }
      return ke;
    }
    function DE(e, t, a, i, u, c) {
      sR(e, t);
      var v = (t.flags & tt) !== Ye;
      if (!i && !v)
        return u && IC(t, a, !1), qu(e, t, c);
      var g = t.stateNode;
      av.current = t;
      var S;
      if (v && typeof a.getDerivedStateFromError != "function")
        S = null, eR();
      else {
        Vo(t);
        {
          if (ea(!0), S = g.render(), t.mode & Rn) {
            $n(!0);
            try {
              g.render();
            } finally {
              $n(!1);
            }
          }
          ea(!1);
        }
        Cu();
      }
      return t.flags |= Ao, e !== null && v ? _D(e, t, S, c) : _a(e, t, S, c), t.memoizedState = g.state, u && IC(t, a, !0), t.child;
    }
    function fR(e) {
      var t = e.stateNode;
      t.pendingContext ? BC(e, t.pendingContext, t.pendingContext !== t.context) : t.context && BC(e, t.context, !1), VS(e, t.containerInfo);
    }
    function kD(e, t, a) {
      if (fR(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, c = u.element;
      sw(e, t), km(t, i, null, a);
      var v = t.memoizedState;
      t.stateNode;
      var g = v.element;
      if (u.isDehydrated) {
        var S = {
          element: g,
          isDehydrated: !1,
          cache: v.cache,
          pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
          transitions: v.transitions
        }, b = t.updateQueue;
        if (b.baseState = S, t.memoizedState = S, t.flags & xn) {
          var T = cc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return dR(e, t, g, a, T);
        } else if (g !== c) {
          var F = cc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return dR(e, t, g, a, F);
        } else {
          Ax(t);
          var U = ww(t, null, g, a);
          t.child = U;
          for (var Y = U; Y; )
            Y.flags = Y.flags & ~cn | ja, Y = Y.sibling;
        }
      } else {
        if ($f(), g === c)
          return qu(e, t, a);
        _a(e, t, g, a);
      }
      return t.child;
    }
    function dR(e, t, a, i, u) {
      return $f(), pS(u), t.flags |= xn, _a(e, t, a, i), t.child;
    }
    function ND(e, t, a) {
      bw(t), e === null && dS(t);
      var i = t.type, u = t.pendingProps, c = e !== null ? e.memoizedProps : null, v = u.children, g = qg(i, u);
      return g ? v = null : c !== null && qg(i, c) && (t.flags |= Qt), sR(e, t), _a(e, t, v, a), t.child;
    }
    function MD(e, t) {
      return e === null && dS(t), null;
    }
    function LD(e, t, a, i) {
      iy(e, t);
      var u = t.pendingProps, c = a, v = c._payload, g = c._init, S = g(v);
      t.type = S;
      var b = t.tag = Mk(S), T = uo(S, u), F;
      switch (b) {
        case M:
          return OE(t, S), t.type = S = ud(S), F = xE(null, t, S, T, i), F;
        case O:
          return t.type = S = i0(S), F = cR(null, t, S, T, i), F;
        case ie:
          return t.type = S = o0(S), F = iR(null, t, S, T, i), F;
        case Re: {
          if (t.type !== t.elementType) {
            var U = S.propTypes;
            U && ao(
              U,
              T,
              // Resolved for outer only
              "prop",
              At(S)
            );
          }
          return F = oR(
            null,
            t,
            S,
            uo(S.type, T),
            // The inner type can have defaults too
            i
          ), F;
        }
      }
      var Y = "";
      throw S !== null && typeof S == "object" && S.$$typeof === We && (Y = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + S + ". " + ("Lazy element type must resolve to a class or function." + Y));
    }
    function AD(e, t, a, i, u) {
      iy(e, t), t.tag = O;
      var c;
      return Jo(a) ? (c = !0, hm(t)) : c = !1, Yf(t, u), yw(t, a, i), zS(t, a, i, u), DE(null, t, a, !0, c, u);
    }
    function zD(e, t, a, i) {
      iy(e, t);
      var u = t.pendingProps, c;
      {
        var v = Pf(t, a, !1);
        c = Hf(t, v);
      }
      Yf(t, i);
      var g, S;
      Vo(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var b = At(a) || "Unknown";
          wE[b] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", b, b), wE[b] = !0);
        }
        t.mode & Rn && oo.recordLegacyContextWarning(t, null), ea(!0), av.current = t, g = Jf(null, t, a, u, c, i), S = Zf(), ea(!1);
      }
      if (Cu(), t.flags |= Ao, typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0) {
        var T = At(a) || "Unknown";
        iv[T] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", T, T, T), iv[T] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0
      ) {
        {
          var F = At(a) || "Unknown";
          iv[F] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", F, F, F), iv[F] = !0);
        }
        t.tag = O, t.memoizedState = null, t.updateQueue = null;
        var U = !1;
        return Jo(a) ? (U = !0, hm(t)) : U = !1, t.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null, wS(t), mw(t, g), zS(t, a, u, i), DE(null, t, a, !0, U, i);
      } else {
        if (t.tag = M, t.mode & Rn) {
          $n(!0);
          try {
            g = Jf(null, t, a, u, c, i), S = Zf();
          } finally {
            $n(!1);
          }
        }
        return jr() && S && uS(t), _a(null, t, g, i), OE(t, a), t.child;
      }
    }
    function OE(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Ar();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", c = e._debugSource;
          c && (u = c.fileName + ":" + c.lineNumber), TE[u] || (TE[u] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var v = At(t) || "Unknown";
          bE[v] || (y("%s: Function components do not support getDerivedStateFromProps.", v), bE[v] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var g = At(t) || "Unknown";
          RE[g] || (y("%s: Function components do not support contextType.", g), RE[g] = !0);
        }
      }
    }
    var kE = {
      dehydrated: null,
      treeContext: null,
      retryLane: xt
    };
    function NE(e) {
      return {
        baseLanes: e,
        cachePool: TD(),
        transitions: null
      };
    }
    function UD(e, t) {
      var a = null;
      return {
        baseLanes: ft(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function jD(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return IS(e, Kp);
    }
    function FD(e, t) {
      return kl(e.childLanes, t);
    }
    function pR(e, t, a) {
      var i = t.pendingProps;
      qk(t) && (t.flags |= tt);
      var u = lo.current, c = !1, v = (t.flags & tt) !== Ye;
      if (v || jD(u, e) ? (c = !0, t.flags &= ~tt) : (e === null || e.memoizedState !== null) && (u = oD(u, _w)), u = Qf(u), Zl(t, u), e === null) {
        dS(t);
        var g = t.memoizedState;
        if (g !== null) {
          var S = g.dehydrated;
          if (S !== null)
            return $D(t, S);
        }
        var b = i.children, T = i.fallback;
        if (c) {
          var F = PD(t, b, T, a), U = t.child;
          return U.memoizedState = NE(a), t.memoizedState = kE, F;
        } else
          return ME(t, b);
      } else {
        var Y = e.memoizedState;
        if (Y !== null) {
          var q = Y.dehydrated;
          if (q !== null)
            return ID(e, t, v, i, q, Y, a);
        }
        if (c) {
          var J = i.fallback, ke = i.children, qe = VD(e, t, ke, J, a), Pe = t.child, Ot = e.child.memoizedState;
          return Pe.memoizedState = Ot === null ? NE(a) : UD(Ot, a), Pe.childLanes = FD(e, a), t.memoizedState = kE, qe;
        } else {
          var wt = i.children, V = HD(e, t, wt, a);
          return t.memoizedState = null, V;
        }
      }
    }
    function ME(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, c = LE(u, i);
      return c.return = e, e.child = c, c;
    }
    function PD(e, t, a, i) {
      var u = e.mode, c = e.child, v = {
        mode: "hidden",
        children: t
      }, g, S;
      return (u & gt) === Ge && c !== null ? (g = c, g.childLanes = ee, g.pendingProps = v, e.mode & Xe && (g.actualDuration = 0, g.actualStartTime = -1, g.selfBaseDuration = 0, g.treeBaseDuration = 0), S = us(a, u, i, null)) : (g = LE(v, u), S = us(a, u, i, null)), g.return = e, S.return = e, g.sibling = S, e.child = g, S;
    }
    function LE(e, t, a) {
      return vb(e, t, ee, null);
    }
    function vR(e, t) {
      return mc(e, t);
    }
    function HD(e, t, a, i) {
      var u = e.child, c = u.sibling, v = vR(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & gt) === Ge && (v.lanes = i), v.return = t, v.sibling = null, c !== null) {
        var g = t.deletions;
        g === null ? (t.deletions = [c], t.flags |= Bt) : g.push(c);
      }
      return t.child = v, v;
    }
    function VD(e, t, a, i, u) {
      var c = t.mode, v = e.child, g = v.sibling, S = {
        mode: "hidden",
        children: a
      }, b;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (c & gt) === Ge && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== v
      ) {
        var T = t.child;
        b = T, b.childLanes = ee, b.pendingProps = S, t.mode & Xe && (b.actualDuration = 0, b.actualStartTime = -1, b.selfBaseDuration = v.selfBaseDuration, b.treeBaseDuration = v.treeBaseDuration), t.deletions = null;
      } else
        b = vR(v, S), b.subtreeFlags = v.subtreeFlags & ur;
      var F;
      return g !== null ? F = mc(g, i) : (F = us(i, c, u, null), F.flags |= cn), F.return = t, b.return = t, b.sibling = F, t.child = b, F;
    }
    function ay(e, t, a, i) {
      i !== null && pS(i), Wf(t, e.child, null, a);
      var u = t.pendingProps, c = u.children, v = ME(t, c);
      return v.flags |= cn, t.memoizedState = null, v;
    }
    function BD(e, t, a, i, u) {
      var c = t.mode, v = {
        mode: "visible",
        children: a
      }, g = LE(v, c), S = us(i, c, u, null);
      return S.flags |= cn, g.return = t, S.return = t, g.sibling = S, t.child = g, (t.mode & gt) !== Ge && Wf(t, e.child, null, u), S;
    }
    function $D(e, t, a) {
      return (e.mode & gt) === Ge ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Je) : Xg(t) ? e.lanes = bu : e.lanes = la, null;
    }
    function ID(e, t, a, i, u, c, v) {
      if (a)
        if (t.flags & xn) {
          t.flags &= ~xn;
          var V = SE(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return ay(e, t, v, V);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= tt, null;
          var Z = i.children, B = i.fallback, ce = BD(e, t, Z, B, v), Ne = t.child;
          return Ne.memoizedState = NE(v), t.memoizedState = kE, ce;
        }
      else {
        if (Mx(), (t.mode & gt) === Ge)
          return ay(
            e,
            t,
            v,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Xg(u)) {
          var g, S, b;
          {
            var T = G_(u);
            g = T.digest, S = T.message, b = T.stack;
          }
          var F;
          S ? F = new Error(S) : F = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var U = SE(F, g, b);
          return ay(e, t, v, U);
        }
        var Y = sa(v, e.childLanes);
        if (co || Y) {
          var q = hy();
          if (q !== null) {
            var J = gg(q, v);
            if (J !== xt && J !== c.retryLane) {
              c.retryLane = J;
              var ke = an;
              qa(e, J), yr(q, e, J, ke);
            }
          }
          e0();
          var qe = SE(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return ay(e, t, v, qe);
        } else if (UC(u)) {
          t.flags |= tt, t.child = e.child;
          var Pe = hk.bind(null, e);
          return K_(u, Pe), null;
        } else {
          zx(t, u, c.treeContext);
          var Ot = i.children, wt = ME(t, Ot);
          return wt.flags |= ja, wt;
        }
      }
    }
    function hR(e, t, a) {
      e.lanes = ft(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = ft(i.lanes, t)), gS(e.return, t, a);
    }
    function YD(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === fe) {
          var u = i.memoizedState;
          u !== null && hR(i, a, e);
        } else if (i.tag === ht)
          hR(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function WD(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && jm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function qD(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !_E[e])
        if (_E[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              y('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          y('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function QD(e, t) {
      e !== void 0 && !ry[e] && (e !== "collapsed" && e !== "hidden" ? (ry[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (ry[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function mR(e, t) {
      {
        var a = Rt(e), i = !a && typeof ti(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function GD(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Rt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!mR(e[a], a))
              return;
        } else {
          var i = ti(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var c = u.next(), v = 0; !c.done; c = u.next()) {
                if (!mR(c.value, v))
                  return;
                v++;
              }
          } else
            y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function AE(e, t, a, i, u) {
      var c = e.memoizedState;
      c === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = i, c.tail = a, c.tailMode = u);
    }
    function yR(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, c = i.tail, v = i.children;
      qD(u), QD(c, u), GD(v, u), _a(e, t, v, a);
      var g = lo.current, S = IS(g, Kp);
      if (S)
        g = YS(g, Kp), t.flags |= tt;
      else {
        var b = e !== null && (e.flags & tt) !== Ye;
        b && YD(t, t.child, a), g = Qf(g);
      }
      if (Zl(t, g), (t.mode & gt) === Ge)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var T = WD(t.child), F;
            T === null ? (F = t.child, t.child = null) : (F = T.sibling, T.sibling = null), AE(
              t,
              !1,
              // isBackwards
              F,
              T,
              c
            );
            break;
          }
          case "backwards": {
            var U = null, Y = t.child;
            for (t.child = null; Y !== null; ) {
              var q = Y.alternate;
              if (q !== null && jm(q) === null) {
                t.child = Y;
                break;
              }
              var J = Y.sibling;
              Y.sibling = U, U = Y, Y = J;
            }
            AE(
              t,
              !0,
              // isBackwards
              U,
              null,
              // last
              c
            );
            break;
          }
          case "together": {
            AE(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function KD(e, t, a) {
      VS(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Wf(t, null, i, a) : _a(e, t, i, a), t.child;
    }
    var gR = !1;
    function XD(e, t, a) {
      var i = t.type, u = i._context, c = t.pendingProps, v = t.memoizedProps, g = c.value;
      {
        "value" in c || gR || (gR = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var S = t.type.propTypes;
        S && ao(S, c, "prop", "Context.Provider");
      }
      if (iw(t, u, g), v !== null) {
        var b = v.value;
        if (ze(b, g)) {
          if (v.children === c.children && !pm())
            return qu(e, t, a);
        } else
          Yx(t, u, a);
      }
      var T = c.children;
      return _a(e, t, T, a), t.child;
    }
    var SR = !1;
    function JD(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (SR || (SR = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, c = u.children;
      typeof c != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Yf(t, a);
      var v = ar(i);
      Vo(t);
      var g;
      return av.current = t, ea(!0), g = c(v), ea(!1), Cu(), t.flags |= Ao, _a(e, t, g, a), t.child;
    }
    function ov() {
      co = !0;
    }
    function iy(e, t) {
      (t.mode & gt) === Ge && e !== null && (e.alternate = null, t.alternate = null, t.flags |= cn);
    }
    function qu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), eR(), gv(t.lanes), sa(a, t.childLanes) ? (rD(e, t), t.child) : null;
    }
    function ZD(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var c = i.deletions;
        return c === null ? (i.deletions = [e], i.flags |= Bt) : c.push(e), a.flags |= cn, a;
      }
    }
    function zE(e, t) {
      var a = e.lanes;
      return !!sa(a, t);
    }
    function eO(e, t, a) {
      switch (t.tag) {
        case x:
          fR(t), t.stateNode, $f();
          break;
        case Q:
          bw(t);
          break;
        case O: {
          var i = t.type;
          Jo(i) && hm(t);
          break;
        }
        case P:
          VS(t, t.stateNode.containerInfo);
          break;
        case he: {
          var u = t.memoizedProps.value, c = t.type._context;
          iw(t, c, u);
          break;
        }
        case me:
          {
            var v = sa(a, t.childLanes);
            v && (t.flags |= ct);
            {
              var g = t.stateNode;
              g.effectDuration = 0, g.passiveEffectDuration = 0;
            }
          }
          break;
        case fe: {
          var S = t.memoizedState;
          if (S !== null) {
            if (S.dehydrated !== null)
              return Zl(t, Qf(lo.current)), t.flags |= tt, null;
            var b = t.child, T = b.childLanes;
            if (sa(a, T))
              return pR(e, t, a);
            Zl(t, Qf(lo.current));
            var F = qu(e, t, a);
            return F !== null ? F.sibling : null;
          } else
            Zl(t, Qf(lo.current));
          break;
        }
        case ht: {
          var U = (e.flags & tt) !== Ye, Y = sa(a, t.childLanes);
          if (U) {
            if (Y)
              return yR(e, t, a);
            t.flags |= tt;
          }
          var q = t.memoizedState;
          if (q !== null && (q.rendering = null, q.tail = null, q.lastEffect = null), Zl(t, lo.current), Y)
            break;
          return null;
        }
        case Ie:
        case ot:
          return t.lanes = ee, lR(e, t, a);
      }
      return qu(e, t, a);
    }
    function ER(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return ZD(e, t, f0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || pm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          co = !0;
        else {
          var c = zE(e, a);
          if (!c && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & tt) === Ye)
            return co = !1, eO(e, t, a);
          (e.flags & Ms) !== Ye ? co = !0 : co = !1;
        }
      } else if (co = !1, jr() && _x(t)) {
        var v = t.index, g = xx();
        qC(t, g, v);
      }
      switch (t.lanes = ee, t.tag) {
        case L:
          return zD(e, t, t.type, a);
        case He: {
          var S = t.elementType;
          return LD(e, t, S, a);
        }
        case M: {
          var b = t.type, T = t.pendingProps, F = t.elementType === b ? T : uo(b, T);
          return xE(e, t, b, F, a);
        }
        case O: {
          var U = t.type, Y = t.pendingProps, q = t.elementType === U ? Y : uo(U, Y);
          return cR(e, t, U, q, a);
        }
        case x:
          return kD(e, t, a);
        case Q:
          return ND(e, t, a);
        case I:
          return MD(e, t);
        case fe:
          return pR(e, t, a);
        case P:
          return KD(e, t, a);
        case ie: {
          var J = t.type, ke = t.pendingProps, qe = t.elementType === J ? ke : uo(J, ke);
          return iR(e, t, J, qe, a);
        }
        case X:
          return xD(e, t, a);
        case ne:
          return DD(e, t, a);
        case me:
          return OD(e, t, a);
        case he:
          return XD(e, t, a);
        case we:
          return JD(e, t, a);
        case Re: {
          var Pe = t.type, Ot = t.pendingProps, wt = uo(Pe, Ot);
          if (t.type !== t.elementType) {
            var V = Pe.propTypes;
            V && ao(
              V,
              wt,
              // Resolved for outer only
              "prop",
              At(Pe)
            );
          }
          return wt = uo(Pe.type, wt), oR(e, t, Pe, wt, a);
        }
        case _e:
          return uR(e, t, t.type, t.pendingProps, a);
        case bt: {
          var Z = t.type, B = t.pendingProps, ce = t.elementType === Z ? B : uo(Z, B);
          return AD(e, t, Z, ce, a);
        }
        case ht:
          return yR(e, t, a);
        case on:
          break;
        case Ie:
          return lR(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function ed(e) {
      e.flags |= ct;
    }
    function CR(e) {
      e.flags |= na, e.flags |= Vd;
    }
    var wR, UE, RR, bR;
    wR = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === Q || u.tag === I)
          R_(e, u.stateNode);
        else if (u.tag !== P) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, UE = function(e, t) {
    }, RR = function(e, t, a, i, u) {
      var c = e.memoizedProps;
      if (c !== i) {
        var v = t.stateNode, g = BS(), S = T_(v, a, c, i, u, g);
        t.updateQueue = S, S && ed(t);
      }
    }, bR = function(e, t, a, i) {
      a !== i && ed(t);
    };
    function uv(e, t) {
      if (!jr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, c = null; u !== null; )
              u.alternate !== null && (c = u), u = u.sibling;
            c === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : c.sibling = null;
            break;
          }
        }
    }
    function Pr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = ee, i = Ye;
      if (t) {
        if ((e.mode & Xe) !== Ge) {
          for (var S = e.selfBaseDuration, b = e.child; b !== null; )
            a = ft(a, ft(b.lanes, b.childLanes)), i |= b.subtreeFlags & ur, i |= b.flags & ur, S += b.treeBaseDuration, b = b.sibling;
          e.treeBaseDuration = S;
        } else
          for (var T = e.child; T !== null; )
            a = ft(a, ft(T.lanes, T.childLanes)), i |= T.subtreeFlags & ur, i |= T.flags & ur, T.return = e, T = T.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Xe) !== Ge) {
          for (var u = e.actualDuration, c = e.selfBaseDuration, v = e.child; v !== null; )
            a = ft(a, ft(v.lanes, v.childLanes)), i |= v.subtreeFlags, i |= v.flags, u += v.actualDuration, c += v.treeBaseDuration, v = v.sibling;
          e.actualDuration = u, e.treeBaseDuration = c;
        } else
          for (var g = e.child; g !== null; )
            a = ft(a, ft(g.lanes, g.childLanes)), i |= g.subtreeFlags, i |= g.flags, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function tO(e, t, a) {
      if (Hx() && (t.mode & gt) !== Ge && (t.flags & tt) === Ye)
        return ew(t), $f(), t.flags |= xn | Ea | Zn, !1;
      var i = Em(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Fx(t), Pr(t), (t.mode & Xe) !== Ge) {
            var u = a !== null;
            if (u) {
              var c = t.child;
              c !== null && (t.treeBaseDuration -= c.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if ($f(), (t.flags & tt) === Ye && (t.memoizedState = null), t.flags |= ct, Pr(t), (t.mode & Xe) !== Ge) {
            var v = a !== null;
            if (v) {
              var g = t.child;
              g !== null && (t.treeBaseDuration -= g.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return tw(), !0;
    }
    function TR(e, t, a) {
      var i = t.pendingProps;
      switch (lS(t), t.tag) {
        case L:
        case He:
        case _e:
        case M:
        case ie:
        case X:
        case ne:
        case me:
        case we:
        case Re:
          return Pr(t), null;
        case O: {
          var u = t.type;
          return Jo(u) && vm(t), Pr(t), null;
        }
        case x: {
          var c = t.stateNode;
          if (qf(t), aS(t), qS(), c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), e === null || e.child === null) {
            var v = Em(t);
            if (v)
              ed(t);
            else if (e !== null) {
              var g = e.memoizedState;
              // Check if this is a client root
              (!g.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & xn) !== Ye) && (t.flags |= Ua, tw());
            }
          }
          return UE(e, t), Pr(t), null;
        }
        case Q: {
          $S(t);
          var S = Rw(), b = t.type;
          if (e !== null && t.stateNode != null)
            RR(e, t, b, i, S), e.ref !== t.ref && CR(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Pr(t), null;
            }
            var T = BS(), F = Em(t);
            if (F)
              Ux(t, S, T) && ed(t);
            else {
              var U = w_(b, i, S, T, t);
              wR(U, t, !1, !1), t.stateNode = U, b_(U, b, i, S) && ed(t);
            }
            t.ref !== null && CR(t);
          }
          return Pr(t), null;
        }
        case I: {
          var Y = i;
          if (e && t.stateNode != null) {
            var q = e.memoizedProps;
            bR(e, t, q, Y);
          } else {
            if (typeof Y != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var J = Rw(), ke = BS(), qe = Em(t);
            qe ? jx(t) && ed(t) : t.stateNode = __(Y, J, ke, t);
          }
          return Pr(t), null;
        }
        case fe: {
          Gf(t);
          var Pe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Ot = tO(e, t, Pe);
            if (!Ot)
              return t.flags & Zn ? t : null;
          }
          if ((t.flags & tt) !== Ye)
            return t.lanes = a, (t.mode & Xe) !== Ge && gE(t), t;
          var wt = Pe !== null, V = e !== null && e.memoizedState !== null;
          if (wt !== V && wt) {
            var Z = t.child;
            if (Z.flags |= zo, (t.mode & gt) !== Ge) {
              var B = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !re);
              B || IS(lo.current, _w) ? nk() : e0();
            }
          }
          var ce = t.updateQueue;
          if (ce !== null && (t.flags |= ct), Pr(t), (t.mode & Xe) !== Ge && wt) {
            var Ne = t.child;
            Ne !== null && (t.treeBaseDuration -= Ne.treeBaseDuration);
          }
          return null;
        }
        case P:
          return qf(t), UE(e, t), e === null && Sx(t.stateNode.containerInfo), Pr(t), null;
        case he:
          var Te = t.type._context;
          return yS(Te, t), Pr(t), null;
        case bt: {
          var et = t.type;
          return Jo(et) && vm(t), Pr(t), null;
        }
        case ht: {
          Gf(t);
          var ut = t.memoizedState;
          if (ut === null)
            return Pr(t), null;
          var Zt = (t.flags & tt) !== Ye, Ft = ut.rendering;
          if (Ft === null)
            if (Zt)
              uv(ut, !1);
            else {
              var Qn = ak() && (e === null || (e.flags & tt) === Ye);
              if (!Qn)
                for (var Pt = t.child; Pt !== null; ) {
                  var Hn = jm(Pt);
                  if (Hn !== null) {
                    Zt = !0, t.flags |= tt, uv(ut, !1);
                    var pa = Hn.updateQueue;
                    return pa !== null && (t.updateQueue = pa, t.flags |= ct), t.subtreeFlags = Ye, aD(t, a), Zl(t, YS(lo.current, Kp)), t.child;
                  }
                  Pt = Pt.sibling;
                }
              ut.tail !== null && wn() > WR() && (t.flags |= tt, Zt = !0, uv(ut, !1), t.lanes = ep);
            }
          else {
            if (!Zt) {
              var Ir = jm(Ft);
              if (Ir !== null) {
                t.flags |= tt, Zt = !0;
                var di = Ir.updateQueue;
                if (di !== null && (t.updateQueue = di, t.flags |= ct), uv(ut, !0), ut.tail === null && ut.tailMode === "hidden" && !Ft.alternate && !jr())
                  return Pr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                wn() * 2 - ut.renderingStartTime > WR() && a !== la && (t.flags |= tt, Zt = !0, uv(ut, !1), t.lanes = ep);
            }
            if (ut.isBackwards)
              Ft.sibling = t.child, t.child = Ft;
            else {
              var Oa = ut.last;
              Oa !== null ? Oa.sibling = Ft : t.child = Ft, ut.last = Ft;
            }
          }
          if (ut.tail !== null) {
            var ka = ut.tail;
            ut.rendering = ka, ut.tail = ka.sibling, ut.renderingStartTime = wn(), ka.sibling = null;
            var va = lo.current;
            return Zt ? va = YS(va, Kp) : va = Qf(va), Zl(t, va), ka;
          }
          return Pr(t), null;
        }
        case on:
          break;
        case Ie:
        case ot: {
          ZE(t);
          var Ju = t.memoizedState, ld = Ju !== null;
          if (e !== null) {
            var Rv = e.memoizedState, ou = Rv !== null;
            ou !== ld && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !A && (t.flags |= zo);
          }
          return !ld || (t.mode & gt) === Ge ? Pr(t) : sa(iu, la) && (Pr(t), t.subtreeFlags & (cn | ct) && (t.flags |= zo)), null;
        }
        case Mt:
          return null;
        case St:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function nO(e, t, a) {
      switch (lS(t), t.tag) {
        case O: {
          var i = t.type;
          Jo(i) && vm(t);
          var u = t.flags;
          return u & Zn ? (t.flags = u & ~Zn | tt, (t.mode & Xe) !== Ge && gE(t), t) : null;
        }
        case x: {
          t.stateNode, qf(t), aS(t), qS();
          var c = t.flags;
          return (c & Zn) !== Ye && (c & tt) === Ye ? (t.flags = c & ~Zn | tt, t) : null;
        }
        case Q:
          return $S(t), null;
        case fe: {
          Gf(t);
          var v = t.memoizedState;
          if (v !== null && v.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            $f();
          }
          var g = t.flags;
          return g & Zn ? (t.flags = g & ~Zn | tt, (t.mode & Xe) !== Ge && gE(t), t) : null;
        }
        case ht:
          return Gf(t), null;
        case P:
          return qf(t), null;
        case he:
          var S = t.type._context;
          return yS(S, t), null;
        case Ie:
        case ot:
          return ZE(t), null;
        case Mt:
          return null;
        default:
          return null;
      }
    }
    function _R(e, t, a) {
      switch (lS(t), t.tag) {
        case O: {
          var i = t.type.childContextTypes;
          i != null && vm(t);
          break;
        }
        case x: {
          t.stateNode, qf(t), aS(t), qS();
          break;
        }
        case Q: {
          $S(t);
          break;
        }
        case P:
          qf(t);
          break;
        case fe:
          Gf(t);
          break;
        case ht:
          Gf(t);
          break;
        case he:
          var u = t.type._context;
          yS(u, t);
          break;
        case Ie:
        case ot:
          ZE(t);
          break;
      }
    }
    var xR = null;
    xR = /* @__PURE__ */ new Set();
    var oy = !1, Hr = !1, rO = typeof WeakSet == "function" ? WeakSet : Set, Ue = null, td = null, nd = null;
    function aO(e) {
      Su(null, function() {
        throw e;
      }), Pd();
    }
    var iO = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Xe)
        try {
          ru(), t.componentWillUnmount();
        } finally {
          nu(e);
        }
      else
        t.componentWillUnmount();
    };
    function DR(e, t) {
      try {
        ns(fr, e);
      } catch (a) {
        vn(e, t, a);
      }
    }
    function jE(e, t, a) {
      try {
        iO(e, a);
      } catch (i) {
        vn(e, t, i);
      }
    }
    function oO(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        vn(e, t, i);
      }
    }
    function OR(e, t) {
      try {
        NR(e);
      } catch (a) {
        vn(e, t, a);
      }
    }
    function rd(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (dt && Et && e.mode & Xe)
              try {
                ru(), i = a(null);
              } finally {
                nu(e);
              }
            else
              i = a(null);
          } catch (u) {
            vn(e, t, u);
          }
          typeof i == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", at(e));
        } else
          a.current = null;
    }
    function uy(e, t, a) {
      try {
        a();
      } catch (i) {
        vn(e, t, i);
      }
    }
    var kR = !1;
    function uO(e, t) {
      E_(e.containerInfo), Ue = t, lO();
      var a = kR;
      return kR = !1, a;
    }
    function lO() {
      for (; Ue !== null; ) {
        var e = Ue, t = e.child;
        (e.subtreeFlags & wl) !== Ye && t !== null ? (t.return = e, Ue = t) : sO();
      }
    }
    function sO() {
      for (; Ue !== null; ) {
        var e = Ue;
        qt(e);
        try {
          cO(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        _n();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ue = t;
          return;
        }
        Ue = e.return;
      }
    }
    function cO(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Ua) !== Ye) {
        switch (qt(e), e.tag) {
          case M:
          case ie:
          case _e:
            break;
          case O: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, c = e.stateNode;
              e.type === e.elementType && !fc && (c.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", at(e) || "instance"), c.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", at(e) || "instance"));
              var v = c.getSnapshotBeforeUpdate(e.elementType === e.type ? i : uo(e.type, i), u);
              {
                var g = xR;
                v === void 0 && !g.has(e.type) && (g.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", at(e)));
              }
              c.__reactInternalSnapshotBeforeUpdate = v;
            }
            break;
          }
          case x: {
            {
              var S = e.stateNode;
              Y_(S.containerInfo);
            }
            break;
          }
          case Q:
          case I:
          case P:
          case bt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        _n();
      }
    }
    function fo(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var c = u.next, v = c;
        do {
          if ((v.tag & e) === e) {
            var g = v.destroy;
            v.destroy = void 0, g !== void 0 && ((e & Fr) !== Qa ? Yc(t) : (e & fr) !== Qa && Wc(t), (e & Zo) !== Qa && Ev(!0), uy(t, a, g), (e & Zo) !== Qa && Ev(!1), (e & Fr) !== Qa ? Sh() : (e & fr) !== Qa && Rl());
          }
          v = v.next;
        } while (v !== c);
      }
    }
    function ns(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, c = u;
        do {
          if ((c.tag & e) === e) {
            (e & Fr) !== Qa ? gh(t) : (e & fr) !== Qa && Eh(t);
            var v = c.create;
            (e & Zo) !== Qa && Ev(!0), c.destroy = v(), (e & Zo) !== Qa && Ev(!1), (e & Fr) !== Qa ? Xd() : (e & fr) !== Qa && Ch();
            {
              var g = c.destroy;
              if (g !== void 0 && typeof g != "function") {
                var S = void 0;
                (c.tag & fr) !== Ye ? S = "useLayoutEffect" : (c.tag & Zo) !== Ye ? S = "useInsertionEffect" : S = "useEffect";
                var b = void 0;
                g === null ? b = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof g.then == "function" ? b = `

It looks like you wrote ` + S + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + S + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : b = " You returned: " + g, y("%s must not return anything besides a function, which is used for clean-up.%s", S, b);
              }
            }
          }
          c = c.next;
        } while (c !== u);
      }
    }
    function fO(e, t) {
      if ((t.flags & ct) !== Ye)
        switch (t.tag) {
          case me: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, c = i.onPostCommit, v = Jw(), g = t.alternate === null ? "mount" : "update";
            Xw() && (g = "nested-update"), typeof c == "function" && c(u, g, a, v);
            var S = t.return;
            e:
              for (; S !== null; ) {
                switch (S.tag) {
                  case x:
                    var b = S.stateNode;
                    b.passiveEffectDuration += a;
                    break e;
                  case me:
                    var T = S.stateNode;
                    T.passiveEffectDuration += a;
                    break e;
                }
                S = S.return;
              }
            break;
          }
        }
    }
    function dO(e, t, a, i) {
      if ((a.flags & wr) !== Ye)
        switch (a.tag) {
          case M:
          case ie:
          case _e: {
            if (!Hr)
              if (a.mode & Xe)
                try {
                  ru(), ns(fr | cr, a);
                } finally {
                  nu(a);
                }
              else
                ns(fr | cr, a);
            break;
          }
          case O: {
            var u = a.stateNode;
            if (a.flags & ct && !Hr)
              if (t === null)
                if (a.type === a.elementType && !fc && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", at(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", at(a) || "instance")), a.mode & Xe)
                  try {
                    ru(), u.componentDidMount();
                  } finally {
                    nu(a);
                  }
                else
                  u.componentDidMount();
              else {
                var c = a.elementType === a.type ? t.memoizedProps : uo(a.type, t.memoizedProps), v = t.memoizedState;
                if (a.type === a.elementType && !fc && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", at(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", at(a) || "instance")), a.mode & Xe)
                  try {
                    ru(), u.componentDidUpdate(c, v, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    nu(a);
                  }
                else
                  u.componentDidUpdate(c, v, u.__reactInternalSnapshotBeforeUpdate);
              }
            var g = a.updateQueue;
            g !== null && (a.type === a.elementType && !fc && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", at(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", at(a) || "instance")), fw(a, g, u));
            break;
          }
          case x: {
            var S = a.updateQueue;
            if (S !== null) {
              var b = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case Q:
                    b = a.child.stateNode;
                    break;
                  case O:
                    b = a.child.stateNode;
                    break;
                }
              fw(a, S, b);
            }
            break;
          }
          case Q: {
            var T = a.stateNode;
            if (t === null && a.flags & ct) {
              var F = a.type, U = a.memoizedProps;
              N_(T, F, U);
            }
            break;
          }
          case I:
            break;
          case P:
            break;
          case me: {
            {
              var Y = a.memoizedProps, q = Y.onCommit, J = Y.onRender, ke = a.stateNode.effectDuration, qe = Jw(), Pe = t === null ? "mount" : "update";
              Xw() && (Pe = "nested-update"), typeof J == "function" && J(a.memoizedProps.id, Pe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, qe);
              {
                typeof q == "function" && q(a.memoizedProps.id, Pe, ke, qe), sk(a);
                var Ot = a.return;
                e:
                  for (; Ot !== null; ) {
                    switch (Ot.tag) {
                      case x:
                        var wt = Ot.stateNode;
                        wt.effectDuration += ke;
                        break e;
                      case me:
                        var V = Ot.stateNode;
                        V.effectDuration += ke;
                        break e;
                    }
                    Ot = Ot.return;
                  }
              }
            }
            break;
          }
          case fe: {
            EO(e, a);
            break;
          }
          case ht:
          case bt:
          case on:
          case Ie:
          case ot:
          case St:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Hr || a.flags & na && NR(a);
    }
    function pO(e) {
      switch (e.tag) {
        case M:
        case ie:
        case _e: {
          if (e.mode & Xe)
            try {
              ru(), DR(e, e.return);
            } finally {
              nu(e);
            }
          else
            DR(e, e.return);
          break;
        }
        case O: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && oO(e, e.return, t), OR(e, e.return);
          break;
        }
        case Q: {
          OR(e, e.return);
          break;
        }
      }
    }
    function vO(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === Q) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? V_(u) : $_(i.stateNode, i.memoizedProps);
            } catch (v) {
              vn(e, e.return, v);
            }
          }
        } else if (i.tag === I) {
          if (a === null)
            try {
              var c = i.stateNode;
              t ? B_(c) : I_(c, i.memoizedProps);
            } catch (v) {
              vn(e, e.return, v);
            }
        } else if (!((i.tag === Ie || i.tag === ot) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function NR(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case Q:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Xe)
            try {
              ru(), u = t(i);
            } finally {
              nu(e);
            }
          else
            u = t(i);
          typeof u == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", at(e));
        } else
          t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", at(e)), t.current = i;
      }
    }
    function hO(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function MR(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, MR(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === Q) {
          var a = e.stateNode;
          a !== null && wx(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function mO(e) {
      for (var t = e.return; t !== null; ) {
        if (LR(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function LR(e) {
      return e.tag === Q || e.tag === x || e.tag === P;
    }
    function AR(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || LR(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== Q && t.tag !== I && t.tag !== Nt; ) {
            if (t.flags & cn || t.child === null || t.tag === P)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & cn))
            return t.stateNode;
        }
    }
    function yO(e) {
      var t = mO(e);
      switch (t.tag) {
        case Q: {
          var a = t.stateNode;
          t.flags & Qt && (zC(a), t.flags &= ~Qt);
          var i = AR(e);
          PE(e, i, a);
          break;
        }
        case x:
        case P: {
          var u = t.stateNode.containerInfo, c = AR(e);
          FE(e, c, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function FE(e, t, a) {
      var i = e.tag, u = i === Q || i === I;
      if (u) {
        var c = e.stateNode;
        t ? j_(a, c, t) : z_(a, c);
      } else if (i !== P) {
        var v = e.child;
        if (v !== null) {
          FE(v, t, a);
          for (var g = v.sibling; g !== null; )
            FE(g, t, a), g = g.sibling;
        }
      }
    }
    function PE(e, t, a) {
      var i = e.tag, u = i === Q || i === I;
      if (u) {
        var c = e.stateNode;
        t ? U_(a, c, t) : A_(a, c);
      } else if (i !== P) {
        var v = e.child;
        if (v !== null) {
          PE(v, t, a);
          for (var g = v.sibling; g !== null; )
            PE(g, t, a), g = g.sibling;
        }
      }
    }
    var Vr = null, po = !1;
    function gO(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case Q: {
                Vr = i.stateNode, po = !1;
                break e;
              }
              case x: {
                Vr = i.stateNode.containerInfo, po = !0;
                break e;
              }
              case P: {
                Vr = i.stateNode.containerInfo, po = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Vr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        zR(e, t, a), Vr = null, po = !1;
      }
      hO(a);
    }
    function rs(e, t, a) {
      for (var i = a.child; i !== null; )
        zR(e, t, i), i = i.sibling;
    }
    function zR(e, t, a) {
      switch (Gd(a), a.tag) {
        case Q:
          Hr || rd(a, t);
        case I: {
          {
            var i = Vr, u = po;
            Vr = null, rs(e, t, a), Vr = i, po = u, Vr !== null && (po ? P_(Vr, a.stateNode) : F_(Vr, a.stateNode));
          }
          return;
        }
        case Nt: {
          Vr !== null && (po ? H_(Vr, a.stateNode) : Kg(Vr, a.stateNode));
          return;
        }
        case P: {
          {
            var c = Vr, v = po;
            Vr = a.stateNode.containerInfo, po = !0, rs(e, t, a), Vr = c, po = v;
          }
          return;
        }
        case M:
        case ie:
        case Re:
        case _e: {
          if (!Hr) {
            var g = a.updateQueue;
            if (g !== null) {
              var S = g.lastEffect;
              if (S !== null) {
                var b = S.next, T = b;
                do {
                  var F = T, U = F.destroy, Y = F.tag;
                  U !== void 0 && ((Y & Zo) !== Qa ? uy(a, t, U) : (Y & fr) !== Qa && (Wc(a), a.mode & Xe ? (ru(), uy(a, t, U), nu(a)) : uy(a, t, U), Rl())), T = T.next;
                } while (T !== b);
              }
            }
          }
          rs(e, t, a);
          return;
        }
        case O: {
          if (!Hr) {
            rd(a, t);
            var q = a.stateNode;
            typeof q.componentWillUnmount == "function" && jE(a, t, q);
          }
          rs(e, t, a);
          return;
        }
        case on: {
          rs(e, t, a);
          return;
        }
        case Ie: {
          if (
            // TODO: Remove this dead flag
            a.mode & gt
          ) {
            var J = Hr;
            Hr = J || a.memoizedState !== null, rs(e, t, a), Hr = J;
          } else
            rs(e, t, a);
          break;
        }
        default: {
          rs(e, t, a);
          return;
        }
      }
    }
    function SO(e) {
      e.memoizedState;
    }
    function EO(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var c = u.dehydrated;
            c !== null && ix(c);
          }
        }
      }
    }
    function UR(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new rO()), t.forEach(function(i) {
          var u = mk.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), lr)
              if (td !== null && nd !== null)
                Sv(nd, td);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function CO(e, t, a) {
      td = a, nd = e, qt(t), jR(t, e), qt(t), td = null, nd = null;
    }
    function vo(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var c = i[u];
          try {
            gO(e, t, c);
          } catch (S) {
            vn(c, t, S);
          }
        }
      var v = Rc();
      if (t.subtreeFlags & ia)
        for (var g = t.child; g !== null; )
          qt(g), jR(g, e), g = g.sibling;
      qt(v);
    }
    function jR(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case M:
        case ie:
        case Re:
        case _e: {
          if (vo(t, e), au(e), u & ct) {
            try {
              fo(Zo | cr, e, e.return), ns(Zo | cr, e);
            } catch (et) {
              vn(e, e.return, et);
            }
            if (e.mode & Xe) {
              try {
                ru(), fo(fr | cr, e, e.return);
              } catch (et) {
                vn(e, e.return, et);
              }
              nu(e);
            } else
              try {
                fo(fr | cr, e, e.return);
              } catch (et) {
                vn(e, e.return, et);
              }
          }
          return;
        }
        case O: {
          vo(t, e), au(e), u & na && i !== null && rd(i, i.return);
          return;
        }
        case Q: {
          vo(t, e), au(e), u & na && i !== null && rd(i, i.return);
          {
            if (e.flags & Qt) {
              var c = e.stateNode;
              try {
                zC(c);
              } catch (et) {
                vn(e, e.return, et);
              }
            }
            if (u & ct) {
              var v = e.stateNode;
              if (v != null) {
                var g = e.memoizedProps, S = i !== null ? i.memoizedProps : g, b = e.type, T = e.updateQueue;
                if (e.updateQueue = null, T !== null)
                  try {
                    M_(v, T, b, S, g, e);
                  } catch (et) {
                    vn(e, e.return, et);
                  }
              }
            }
          }
          return;
        }
        case I: {
          if (vo(t, e), au(e), u & ct) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var F = e.stateNode, U = e.memoizedProps, Y = i !== null ? i.memoizedProps : U;
            try {
              L_(F, Y, U);
            } catch (et) {
              vn(e, e.return, et);
            }
          }
          return;
        }
        case x: {
          if (vo(t, e), au(e), u & ct && i !== null) {
            var q = i.memoizedState;
            if (q.isDehydrated)
              try {
                ax(t.containerInfo);
              } catch (et) {
                vn(e, e.return, et);
              }
          }
          return;
        }
        case P: {
          vo(t, e), au(e);
          return;
        }
        case fe: {
          vo(t, e), au(e);
          var J = e.child;
          if (J.flags & zo) {
            var ke = J.stateNode, qe = J.memoizedState, Pe = qe !== null;
            if (ke.isHidden = Pe, Pe) {
              var Ot = J.alternate !== null && J.alternate.memoizedState !== null;
              Ot || tk();
            }
          }
          if (u & ct) {
            try {
              SO(e);
            } catch (et) {
              vn(e, e.return, et);
            }
            UR(e);
          }
          return;
        }
        case Ie: {
          var wt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & gt
          ) {
            var V = Hr;
            Hr = V || wt, vo(t, e), Hr = V;
          } else
            vo(t, e);
          if (au(e), u & zo) {
            var Z = e.stateNode, B = e.memoizedState, ce = B !== null, Ne = e;
            if (Z.isHidden = ce, ce && !wt && (Ne.mode & gt) !== Ge) {
              Ue = Ne;
              for (var Te = Ne.child; Te !== null; )
                Ue = Te, RO(Te), Te = Te.sibling;
            }
            vO(Ne, ce);
          }
          return;
        }
        case ht: {
          vo(t, e), au(e), u & ct && UR(e);
          return;
        }
        case on:
          return;
        default: {
          vo(t, e), au(e);
          return;
        }
      }
    }
    function au(e) {
      var t = e.flags;
      if (t & cn) {
        try {
          yO(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        e.flags &= ~cn;
      }
      t & ja && (e.flags &= ~ja);
    }
    function wO(e, t, a) {
      td = a, nd = t, Ue = e, FR(e, t, a), td = null, nd = null;
    }
    function FR(e, t, a) {
      for (var i = (e.mode & gt) !== Ge; Ue !== null; ) {
        var u = Ue, c = u.child;
        if (u.tag === Ie && i) {
          var v = u.memoizedState !== null, g = v || oy;
          if (g) {
            HE(e, t, a);
            continue;
          } else {
            var S = u.alternate, b = S !== null && S.memoizedState !== null, T = b || Hr, F = oy, U = Hr;
            oy = g, Hr = T, Hr && !U && (Ue = u, bO(u));
            for (var Y = c; Y !== null; )
              Ue = Y, FR(
                Y,
                // New root; bubble back up to here and stop.
                t,
                a
              ), Y = Y.sibling;
            Ue = u, oy = F, Hr = U, HE(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & wr) !== Ye && c !== null ? (c.return = u, Ue = c) : HE(e, t, a);
      }
    }
    function HE(e, t, a) {
      for (; Ue !== null; ) {
        var i = Ue;
        if ((i.flags & wr) !== Ye) {
          var u = i.alternate;
          qt(i);
          try {
            dO(t, u, i, a);
          } catch (v) {
            vn(i, i.return, v);
          }
          _n();
        }
        if (i === e) {
          Ue = null;
          return;
        }
        var c = i.sibling;
        if (c !== null) {
          c.return = i.return, Ue = c;
          return;
        }
        Ue = i.return;
      }
    }
    function RO(e) {
      for (; Ue !== null; ) {
        var t = Ue, a = t.child;
        switch (t.tag) {
          case M:
          case ie:
          case Re:
          case _e: {
            if (t.mode & Xe)
              try {
                ru(), fo(fr, t, t.return);
              } finally {
                nu(t);
              }
            else
              fo(fr, t, t.return);
            break;
          }
          case O: {
            rd(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && jE(t, t.return, i);
            break;
          }
          case Q: {
            rd(t, t.return);
            break;
          }
          case Ie: {
            var u = t.memoizedState !== null;
            if (u) {
              PR(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ue = a) : PR(e);
      }
    }
    function PR(e) {
      for (; Ue !== null; ) {
        var t = Ue;
        if (t === e) {
          Ue = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ue = a;
          return;
        }
        Ue = t.return;
      }
    }
    function bO(e) {
      for (; Ue !== null; ) {
        var t = Ue, a = t.child;
        if (t.tag === Ie) {
          var i = t.memoizedState !== null;
          if (i) {
            HR(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ue = a) : HR(e);
      }
    }
    function HR(e) {
      for (; Ue !== null; ) {
        var t = Ue;
        qt(t);
        try {
          pO(t);
        } catch (i) {
          vn(t, t.return, i);
        }
        if (_n(), t === e) {
          Ue = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ue = a;
          return;
        }
        Ue = t.return;
      }
    }
    function TO(e, t, a, i) {
      Ue = t, _O(t, e, a, i);
    }
    function _O(e, t, a, i) {
      for (; Ue !== null; ) {
        var u = Ue, c = u.child;
        (u.subtreeFlags & Fa) !== Ye && c !== null ? (c.return = u, Ue = c) : xO(e, t, a, i);
      }
    }
    function xO(e, t, a, i) {
      for (; Ue !== null; ) {
        var u = Ue;
        if ((u.flags & mn) !== Ye) {
          qt(u);
          try {
            DO(t, u, a, i);
          } catch (v) {
            vn(u, u.return, v);
          }
          _n();
        }
        if (u === e) {
          Ue = null;
          return;
        }
        var c = u.sibling;
        if (c !== null) {
          c.return = u.return, Ue = c;
          return;
        }
        Ue = u.return;
      }
    }
    function DO(e, t, a, i) {
      switch (t.tag) {
        case M:
        case ie:
        case _e: {
          if (t.mode & Xe) {
            yE();
            try {
              ns(Fr | cr, t);
            } finally {
              mE(t);
            }
          } else
            ns(Fr | cr, t);
          break;
        }
      }
    }
    function OO(e) {
      Ue = e, kO();
    }
    function kO() {
      for (; Ue !== null; ) {
        var e = Ue, t = e.child;
        if ((Ue.flags & Bt) !== Ye) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Ue = u, LO(u, e);
            }
            {
              var c = e.alternate;
              if (c !== null) {
                var v = c.child;
                if (v !== null) {
                  c.child = null;
                  do {
                    var g = v.sibling;
                    v.sibling = null, v = g;
                  } while (v !== null);
                }
              }
            }
            Ue = e;
          }
        }
        (e.subtreeFlags & Fa) !== Ye && t !== null ? (t.return = e, Ue = t) : NO();
      }
    }
    function NO() {
      for (; Ue !== null; ) {
        var e = Ue;
        (e.flags & mn) !== Ye && (qt(e), MO(e), _n());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ue = t;
          return;
        }
        Ue = e.return;
      }
    }
    function MO(e) {
      switch (e.tag) {
        case M:
        case ie:
        case _e: {
          e.mode & Xe ? (yE(), fo(Fr | cr, e, e.return), mE(e)) : fo(Fr | cr, e, e.return);
          break;
        }
      }
    }
    function LO(e, t) {
      for (; Ue !== null; ) {
        var a = Ue;
        qt(a), zO(a, t), _n();
        var i = a.child;
        i !== null ? (i.return = a, Ue = i) : AO(e);
      }
    }
    function AO(e) {
      for (; Ue !== null; ) {
        var t = Ue, a = t.sibling, i = t.return;
        if (MR(t), t === e) {
          Ue = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ue = a;
          return;
        }
        Ue = i;
      }
    }
    function zO(e, t) {
      switch (e.tag) {
        case M:
        case ie:
        case _e: {
          e.mode & Xe ? (yE(), fo(Fr, e, t), mE(e)) : fo(Fr, e, t);
          break;
        }
      }
    }
    function UO(e) {
      switch (e.tag) {
        case M:
        case ie:
        case _e: {
          try {
            ns(fr | cr, e);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case O: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
      }
    }
    function jO(e) {
      switch (e.tag) {
        case M:
        case ie:
        case _e: {
          try {
            ns(Fr | cr, e);
          } catch (t) {
            vn(e, e.return, t);
          }
          break;
        }
      }
    }
    function FO(e) {
      switch (e.tag) {
        case M:
        case ie:
        case _e: {
          try {
            fo(fr | cr, e, e.return);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case O: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && jE(e, e.return, t);
          break;
        }
      }
    }
    function PO(e) {
      switch (e.tag) {
        case M:
        case ie:
        case _e:
          try {
            fo(Fr | cr, e, e.return);
          } catch (t) {
            vn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var lv = Symbol.for;
      lv("selector.component"), lv("selector.has_pseudo_class"), lv("selector.role"), lv("selector.test_id"), lv("selector.text");
    }
    var HO = [];
    function VO() {
      HO.forEach(function(e) {
        return e();
      });
    }
    var BO = d.ReactCurrentActQueue;
    function $O(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function VR() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && BO.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var IO = Math.ceil, VE = d.ReactCurrentDispatcher, BE = d.ReactCurrentOwner, Br = d.ReactCurrentBatchConfig, ho = d.ReactCurrentActQueue, vr = (
      /*             */
      0
    ), BR = (
      /*               */
      1
    ), $r = (
      /*                */
      2
    ), Ui = (
      /*                */
      4
    ), Qu = 0, sv = 1, dc = 2, ly = 3, cv = 4, $R = 5, $E = 6, Dt = vr, xa = null, An = null, hr = ee, iu = ee, IE = ql(ee), mr = Qu, fv = null, sy = ee, dv = ee, cy = ee, pv = null, Ga = null, YE = 0, IR = 500, YR = 1 / 0, YO = 500, Gu = null;
    function vv() {
      YR = wn() + YO;
    }
    function WR() {
      return YR;
    }
    var fy = !1, WE = null, ad = null, pc = !1, as = null, hv = ee, qE = [], QE = null, WO = 50, mv = 0, GE = null, KE = !1, dy = !1, qO = 50, id = 0, py = null, yv = an, vy = ee, qR = !1;
    function hy() {
      return xa;
    }
    function Da() {
      return (Dt & ($r | Ui)) !== vr ? wn() : (yv !== an || (yv = wn()), yv);
    }
    function is(e) {
      var t = e.mode;
      if ((t & gt) === Ge)
        return Je;
      if ((Dt & $r) !== vr && hr !== ee)
        return In(hr);
      var a = $x() !== Bx;
      if (a) {
        if (Br.transition !== null) {
          var i = Br.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return vy === xt && (vy = rp()), vy;
      }
      var u = Ba();
      if (u !== xt)
        return u;
      var c = x_();
      return c;
    }
    function QO(e) {
      var t = e.mode;
      return (t & gt) === Ge ? Je : yg();
    }
    function yr(e, t, a, i) {
      gk(), qR && y("useInsertionEffect must not schedule updates."), KE && (dy = !0), Nu(e, a, i), (Dt & $r) !== ee && e === xa ? Ck(t) : (lr && lp(e, t, a), wk(t), e === xa && ((Dt & $r) === vr && (dv = ft(dv, a)), mr === cv && os(e, hr)), Ka(e, i), a === Je && Dt === vr && (t.mode & gt) === Ge && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ho.isBatchingLegacy && (vv(), WC()));
    }
    function GO(e, t, a) {
      var i = e.current;
      i.lanes = t, Nu(e, t, a), Ka(e, a);
    }
    function KO(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Dt & $r) !== vr
      );
    }
    function Ka(e, t) {
      var a = e.callbackNode;
      vg(e, t);
      var i = Fs(e, e === xa ? hr : ee);
      if (i === ee) {
        a !== null && sb(a), e.callbackNode = null, e.callbackPriority = xt;
        return;
      }
      var u = Fn(i), c = e.callbackPriority;
      if (c === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ho.current !== null && a !== r0)) {
        a == null && c !== Je && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && sb(a);
      var v;
      if (u === Je)
        e.tag === Ql ? (ho.isBatchingLegacy !== null && (ho.didScheduleLegacyUpdate = !0), Tx(KR.bind(null, e))) : YC(KR.bind(null, e)), ho.current !== null ? ho.current.push(Gl) : O_(function() {
          (Dt & ($r | Ui)) === vr && Gl();
        }), v = null;
      else {
        var g;
        switch ($s(i)) {
          case Rr:
            g = Bc;
            break;
          case sr:
            g = Ra;
            break;
          case Zi:
            g = _i;
            break;
          case Vs:
            g = jo;
            break;
          default:
            g = _i;
            break;
        }
        v = a0(g, QR.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = v;
    }
    function QR(e, t) {
      if (gD(), yv = an, vy = ee, (Dt & ($r | Ui)) !== vr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Xu();
      if (i && e.callbackNode !== a)
        return null;
      var u = Fs(e, e === xa ? hr : ee);
      if (u === ee)
        return null;
      var c = !Hs(e, u) && !xh(e, u) && !t, v = c ? ok(e, u) : yy(e, u);
      if (v !== Qu) {
        if (v === dc) {
          var g = tp(e);
          g !== ee && (u = g, v = XE(e, g));
        }
        if (v === sv) {
          var S = fv;
          throw vc(e, ee), os(e, u), Ka(e, wn()), S;
        }
        if (v === $E)
          os(e, u);
        else {
          var b = !Hs(e, u), T = e.current.alternate;
          if (b && !JO(T)) {
            if (v = yy(e, u), v === dc) {
              var F = tp(e);
              F !== ee && (u = F, v = XE(e, F));
            }
            if (v === sv) {
              var U = fv;
              throw vc(e, ee), os(e, u), Ka(e, wn()), U;
            }
          }
          e.finishedWork = T, e.finishedLanes = u, XO(e, v, u);
        }
      }
      return Ka(e, wn()), e.callbackNode === a ? QR.bind(null, e) : null;
    }
    function XE(e, t) {
      var a = pv;
      if (Wn(e)) {
        var i = vc(e, t);
        i.flags |= xn, gx(e.containerInfo);
      }
      var u = yy(e, t);
      if (u !== dc) {
        var c = Ga;
        Ga = a, c !== null && GR(c);
      }
      return u;
    }
    function GR(e) {
      Ga === null ? Ga = e : Ga.push.apply(Ga, e);
    }
    function XO(e, t, a) {
      switch (t) {
        case Qu:
        case sv:
          throw new Error("Root did not complete. This is a bug in React.");
        case dc: {
          hc(e, Ga, Gu);
          break;
        }
        case ly: {
          if (os(e, a), pf(a) && // do not delay if we're inside an act() scope
          !cb()) {
            var i = YE + IR - wn();
            if (i > 10) {
              var u = Fs(e, ee);
              if (u !== ee)
                break;
              var c = e.suspendedLanes;
              if (!ku(c, a)) {
                Da(), op(e, c);
                break;
              }
              e.timeoutHandle = Qg(hc.bind(null, e, Ga, Gu), i);
              break;
            }
          }
          hc(e, Ga, Gu);
          break;
        }
        case cv: {
          if (os(e, a), _h(a))
            break;
          if (!cb()) {
            var v = Th(e, a), g = v, S = wn() - g, b = yk(S) - S;
            if (b > 10) {
              e.timeoutHandle = Qg(hc.bind(null, e, Ga, Gu), b);
              break;
            }
          }
          hc(e, Ga, Gu);
          break;
        }
        case $R: {
          hc(e, Ga, Gu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function JO(e) {
      for (var t = e; ; ) {
        if (t.flags & Ns) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var c = i[u], v = c.getSnapshot, g = c.value;
                try {
                  if (!ze(v(), g))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var S = t.child;
        if (t.subtreeFlags & Ns && S !== null) {
          S.return = t, t = S;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function os(e, t) {
      t = kl(t, cy), t = kl(t, dv), ip(e, t);
    }
    function KR(e) {
      if (SD(), (Dt & ($r | Ui)) !== vr)
        throw new Error("Should not already be working.");
      Xu();
      var t = Fs(e, ee);
      if (!sa(t, Je))
        return Ka(e, wn()), null;
      var a = yy(e, t);
      if (e.tag !== Ql && a === dc) {
        var i = tp(e);
        i !== ee && (t = i, a = XE(e, i));
      }
      if (a === sv) {
        var u = fv;
        throw vc(e, ee), os(e, t), Ka(e, wn()), u;
      }
      if (a === $E)
        throw new Error("Root did not complete. This is a bug in React.");
      var c = e.current.alternate;
      return e.finishedWork = c, e.finishedLanes = t, hc(e, Ga, Gu), Ka(e, wn()), null;
    }
    function ZO(e, t) {
      t !== ee && (Nl(e, ft(t, Je)), Ka(e, wn()), (Dt & ($r | Ui)) === vr && (vv(), Gl()));
    }
    function JE(e, t) {
      var a = Dt;
      Dt |= BR;
      try {
        return e(t);
      } finally {
        Dt = a, Dt === vr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ho.isBatchingLegacy && (vv(), WC());
      }
    }
    function ek(e, t, a, i, u) {
      var c = Ba(), v = Br.transition;
      try {
        return Br.transition = null, Yn(Rr), e(t, a, i, u);
      } finally {
        Yn(c), Br.transition = v, Dt === vr && vv();
      }
    }
    function Ku(e) {
      as !== null && as.tag === Ql && (Dt & ($r | Ui)) === vr && Xu();
      var t = Dt;
      Dt |= BR;
      var a = Br.transition, i = Ba();
      try {
        return Br.transition = null, Yn(Rr), e ? e() : void 0;
      } finally {
        Yn(i), Br.transition = a, Dt = t, (Dt & ($r | Ui)) === vr && Gl();
      }
    }
    function XR() {
      return (Dt & ($r | Ui)) !== vr;
    }
    function my(e, t) {
      fa(IE, iu, e), iu = ft(iu, t);
    }
    function ZE(e) {
      iu = IE.current, ca(IE, e);
    }
    function vc(e, t) {
      e.finishedWork = null, e.finishedLanes = ee;
      var a = e.timeoutHandle;
      if (a !== Gg && (e.timeoutHandle = Gg, D_(a)), An !== null)
        for (var i = An.return; i !== null; ) {
          var u = i.alternate;
          _R(u, i), i = i.return;
        }
      xa = e;
      var c = mc(e.current, null);
      return An = c, hr = iu = t, mr = Qu, fv = null, sy = ee, dv = ee, cy = ee, pv = null, Ga = null, qx(), oo.discardPendingWarnings(), c;
    }
    function JR(e, t) {
      do {
        var a = An;
        try {
          if (bm(), Dw(), _n(), BE.current = null, a === null || a.return === null) {
            mr = sv, fv = t, An = null;
            return;
          }
          if (dt && a.mode & Xe && ny(a, !0), Tt)
            if (Cu(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              wh(a, i, hr);
            } else
              qc(a, t, hr);
          bD(e, a.return, a, t, hr), nb(a);
        } catch (u) {
          t = u, An === a && a !== null ? (a = a.return, An = a) : a = An;
          continue;
        }
        return;
      } while (!0);
    }
    function ZR() {
      var e = VE.current;
      return VE.current = Xm, e === null ? Xm : e;
    }
    function eb(e) {
      VE.current = e;
    }
    function tk() {
      YE = wn();
    }
    function gv(e) {
      sy = ft(e, sy);
    }
    function nk() {
      mr === Qu && (mr = ly);
    }
    function e0() {
      (mr === Qu || mr === ly || mr === dc) && (mr = cv), xa !== null && (Ps(sy) || Ps(dv)) && os(xa, hr);
    }
    function rk(e) {
      mr !== cv && (mr = dc), pv === null ? pv = [e] : pv.push(e);
    }
    function ak() {
      return mr === Qu;
    }
    function yy(e, t) {
      var a = Dt;
      Dt |= $r;
      var i = ZR();
      if (xa !== e || hr !== t) {
        if (lr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Sv(e, hr), u.clear()), mf(e, t);
        }
        Gu = sp(), vc(e, t);
      }
      li(t);
      do
        try {
          ik();
          break;
        } catch (c) {
          JR(e, c);
        }
      while (!0);
      if (bm(), Dt = a, eb(i), An !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Tl(), xa = null, hr = ee, mr;
    }
    function ik() {
      for (; An !== null; )
        tb(An);
    }
    function ok(e, t) {
      var a = Dt;
      Dt |= $r;
      var i = ZR();
      if (xa !== e || hr !== t) {
        if (lr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Sv(e, hr), u.clear()), mf(e, t);
        }
        Gu = sp(), vv(), vc(e, t);
      }
      li(t);
      do
        try {
          uk();
          break;
        } catch (c) {
          JR(e, c);
        }
      while (!0);
      return bm(), eb(i), Dt = a, An !== null ? (As(), Qu) : (Tl(), xa = null, hr = ee, mr);
    }
    function uk() {
      for (; An !== null && !Vc(); )
        tb(An);
    }
    function tb(e) {
      var t = e.alternate;
      qt(e);
      var a;
      (e.mode & Xe) !== Ge ? (hE(e), a = t0(t, e, iu), ny(e, !0)) : a = t0(t, e, iu), _n(), e.memoizedProps = e.pendingProps, a === null ? nb(e) : An = a, BE.current = null;
    }
    function nb(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Ea) === Ye) {
          qt(t);
          var u = void 0;
          if ((t.mode & Xe) === Ge ? u = TR(a, t, iu) : (hE(t), u = TR(a, t, iu), ny(t, !1)), _n(), u !== null) {
            An = u;
            return;
          }
        } else {
          var c = nO(a, t);
          if (c !== null) {
            c.flags &= ph, An = c;
            return;
          }
          if ((t.mode & Xe) !== Ge) {
            ny(t, !1);
            for (var v = t.actualDuration, g = t.child; g !== null; )
              v += g.actualDuration, g = g.sibling;
            t.actualDuration = v;
          }
          if (i !== null)
            i.flags |= Ea, i.subtreeFlags = Ye, i.deletions = null;
          else {
            mr = $E, An = null;
            return;
          }
        }
        var S = t.sibling;
        if (S !== null) {
          An = S;
          return;
        }
        t = i, An = t;
      } while (t !== null);
      mr === Qu && (mr = $R);
    }
    function hc(e, t, a) {
      var i = Ba(), u = Br.transition;
      try {
        Br.transition = null, Yn(Rr), lk(e, t, a, i);
      } finally {
        Br.transition = u, Yn(i);
      }
      return null;
    }
    function lk(e, t, a, i) {
      do
        Xu();
      while (as !== null);
      if (Sk(), (Dt & ($r | Ui)) !== vr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, c = e.finishedLanes;
      if (Ic(c), u === null)
        return Kd(), null;
      if (c === ee && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ee, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = xt;
      var v = ft(u.lanes, u.childLanes);
      up(e, v), e === xa && (xa = null, An = null, hr = ee), ((u.subtreeFlags & Fa) !== Ye || (u.flags & Fa) !== Ye) && (pc || (pc = !0, QE = a, a0(_i, function() {
        return Xu(), null;
      })));
      var g = (u.subtreeFlags & (wl | ia | wr | Fa)) !== Ye, S = (u.flags & (wl | ia | wr | Fa)) !== Ye;
      if (g || S) {
        var b = Br.transition;
        Br.transition = null;
        var T = Ba();
        Yn(Rr);
        var F = Dt;
        Dt |= Ui, BE.current = null, uO(e, u), Zw(), CO(e, u, c), C_(e.containerInfo), e.current = u, Rh(c), wO(u, e, c), bl(), mh(), Dt = F, Yn(T), Br.transition = b;
      } else
        e.current = u, Zw();
      var U = pc;
      if (pc ? (pc = !1, as = e, hv = c) : (id = 0, py = null), v = e.pendingLanes, v === ee && (ad = null), U || ob(e.current, !1), Ki(u.stateNode, i), lr && e.memoizedUpdaters.clear(), VO(), Ka(e, wn()), t !== null)
        for (var Y = e.onRecoverableError, q = 0; q < t.length; q++) {
          var J = t[q], ke = J.stack, qe = J.digest;
          Y(J.value, {
            componentStack: ke,
            digest: qe
          });
        }
      if (fy) {
        fy = !1;
        var Pe = WE;
        throw WE = null, Pe;
      }
      return sa(hv, Je) && e.tag !== Ql && Xu(), v = e.pendingLanes, sa(v, Je) ? (yD(), e === GE ? mv++ : (mv = 0, GE = e)) : mv = 0, Gl(), Kd(), null;
    }
    function Xu() {
      if (as !== null) {
        var e = $s(hv), t = Sg(Zi, e), a = Br.transition, i = Ba();
        try {
          return Br.transition = null, Yn(t), ck();
        } finally {
          Yn(i), Br.transition = a;
        }
      }
      return !1;
    }
    function sk(e) {
      qE.push(e), pc || (pc = !0, a0(_i, function() {
        return Xu(), null;
      }));
    }
    function ck() {
      if (as === null)
        return !1;
      var e = QE;
      QE = null;
      var t = as, a = hv;
      if (as = null, hv = ee, (Dt & ($r | Ui)) !== vr)
        throw new Error("Cannot flush passive effects while already rendering.");
      KE = !0, dy = !1, bh(a);
      var i = Dt;
      Dt |= Ui, OO(t.current), TO(t, t.current, a, e);
      {
        var u = qE;
        qE = [];
        for (var c = 0; c < u.length; c++) {
          var v = u[c];
          fO(t, v);
        }
      }
      Ls(), ob(t.current, !0), Dt = i, Gl(), dy ? t === py ? id++ : (id = 0, py = t) : id = 0, KE = !1, dy = !1, Po(t);
      {
        var g = t.current.stateNode;
        g.effectDuration = 0, g.passiveEffectDuration = 0;
      }
      return !0;
    }
    function rb(e) {
      return ad !== null && ad.has(e);
    }
    function fk(e) {
      ad === null ? ad = /* @__PURE__ */ new Set([e]) : ad.add(e);
    }
    function dk(e) {
      fy || (fy = !0, WE = e);
    }
    var pk = dk;
    function ab(e, t, a) {
      var i = cc(a, t), u = tR(e, i, Je), c = Xl(e, u, Je), v = Da();
      c !== null && (Nu(c, Je, v), Ka(c, v));
    }
    function vn(e, t, a) {
      if (aO(a), Ev(!1), e.tag === x) {
        ab(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === x) {
          ab(i, e, a);
          return;
        } else if (i.tag === O) {
          var u = i.type, c = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && !rb(c)) {
            var v = cc(a, e), g = CE(i, v, Je), S = Xl(i, g, Je), b = Da();
            S !== null && (Nu(S, Je, b), Ka(S, b));
            return;
          }
        }
        i = i.return;
      }
      y(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function vk(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Da();
      op(e, a), Rk(e), xa === e && ku(hr, a) && (mr === cv || mr === ly && pf(hr) && wn() - YE < IR ? vc(e, ee) : cy = ft(cy, a)), Ka(e, u);
    }
    function ib(e, t) {
      t === xt && (t = QO(e));
      var a = Da(), i = qa(e, t);
      i !== null && (Nu(i, t, a), Ka(i, a));
    }
    function hk(e) {
      var t = e.memoizedState, a = xt;
      t !== null && (a = t.retryLane), ib(e, a);
    }
    function mk(e, t) {
      var a = xt, i;
      switch (e.tag) {
        case fe:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case ht:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), ib(e, a);
    }
    function yk(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : IO(e / 1960) * 1960;
    }
    function gk() {
      if (mv > WO)
        throw mv = 0, GE = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      id > qO && (id = 0, py = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Sk() {
      oo.flushLegacyContextWarning(), oo.flushPendingUnsafeLifecycleWarnings();
    }
    function ob(e, t) {
      qt(e), gy(e, aa, FO), t && gy(e, Eu, PO), gy(e, aa, UO), t && gy(e, Eu, jO), _n();
    }
    function gy(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var c = i.subtreeFlags & t;
        i !== u && i.child !== null && c !== Ye ? i = i.child : ((i.flags & t) !== Ye && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Sy = null;
    function ub(e) {
      {
        if ((Dt & $r) !== vr || !(e.mode & gt))
          return;
        var t = e.tag;
        if (t !== L && t !== x && t !== O && t !== M && t !== ie && t !== Re && t !== _e)
          return;
        var a = at(e) || "ReactComponent";
        if (Sy !== null) {
          if (Sy.has(a))
            return;
          Sy.add(a);
        } else
          Sy = /* @__PURE__ */ new Set([a]);
        var i = Cn;
        try {
          qt(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? qt(e) : _n();
        }
      }
    }
    var t0;
    {
      var Ek = null;
      t0 = function(e, t, a) {
        var i = hb(Ek, t);
        try {
          return ER(e, t, a);
        } catch (c) {
          if (Lx() || c !== null && typeof c == "object" && typeof c.then == "function")
            throw c;
          if (bm(), Dw(), _R(e, t), hb(t, i), t.mode & Xe && hE(t), Su(null, ER, null, e, t, a), dg()) {
            var u = Pd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof c == "object" && c !== null && !c._suppressLogging && (c._suppressLogging = !0);
          }
          throw c;
        }
      };
    }
    var lb = !1, n0;
    n0 = /* @__PURE__ */ new Set();
    function Ck(e) {
      if (Zr && !vD())
        switch (e.tag) {
          case M:
          case ie:
          case _e: {
            var t = An && at(An) || "Unknown", a = t;
            if (!n0.has(a)) {
              n0.add(a);
              var i = at(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case O: {
            lb || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), lb = !0);
            break;
          }
        }
    }
    function Sv(e, t) {
      if (lr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          lp(e, i, t);
        });
      }
    }
    var r0 = {};
    function a0(e, t) {
      {
        var a = ho.current;
        return a !== null ? (a.push(t), r0) : Hc(e, t);
      }
    }
    function sb(e) {
      if (e !== r0)
        return hh(e);
    }
    function cb() {
      return ho.current !== null;
    }
    function wk(e) {
      {
        if (e.mode & gt) {
          if (!VR())
            return;
        } else if (!$O() || Dt !== vr || e.tag !== M && e.tag !== ie && e.tag !== _e)
          return;
        if (ho.current === null) {
          var t = Cn;
          try {
            qt(e), y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, at(e));
          } finally {
            t ? qt(e) : _n();
          }
        }
      }
    }
    function Rk(e) {
      e.tag !== Ql && VR() && ho.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Ev(e) {
      qR = e;
    }
    var ji = null, od = null, bk = function(e) {
      ji = e;
    };
    function ud(e) {
      {
        if (ji === null)
          return e;
        var t = ji(e);
        return t === void 0 ? e : t.current;
      }
    }
    function i0(e) {
      return ud(e);
    }
    function o0(e) {
      {
        if (ji === null)
          return e;
        var t = ji(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = ud(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Oe,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function fb(e, t) {
      {
        if (ji === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, c = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case O: {
            typeof i == "function" && (u = !0);
            break;
          }
          case M: {
            (typeof i == "function" || c === We) && (u = !0);
            break;
          }
          case ie: {
            (c === Oe || c === We) && (u = !0);
            break;
          }
          case Re:
          case _e: {
            (c === st || c === We) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var v = ji(a);
          if (v !== void 0 && v === ji(i))
            return !0;
        }
        return !1;
      }
    }
    function db(e) {
      {
        if (ji === null || typeof WeakSet != "function")
          return;
        od === null && (od = /* @__PURE__ */ new WeakSet()), od.add(e);
      }
    }
    var Tk = function(e, t) {
      {
        if (ji === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Xu(), Ku(function() {
          u0(e.current, i, a);
        });
      }
    }, _k = function(e, t) {
      {
        if (e.context !== ci)
          return;
        Xu(), Ku(function() {
          Cv(t, e, null, null);
        });
      }
    };
    function u0(e, t, a) {
      {
        var i = e.alternate, u = e.child, c = e.sibling, v = e.tag, g = e.type, S = null;
        switch (v) {
          case M:
          case _e:
          case O:
            S = g;
            break;
          case ie:
            S = g.render;
            break;
        }
        if (ji === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var b = !1, T = !1;
        if (S !== null) {
          var F = ji(S);
          F !== void 0 && (a.has(F) ? T = !0 : t.has(F) && (v === O ? T = !0 : b = !0));
        }
        if (od !== null && (od.has(e) || i !== null && od.has(i)) && (T = !0), T && (e._debugNeedsRemount = !0), T || b) {
          var U = qa(e, Je);
          U !== null && yr(U, e, Je, an);
        }
        u !== null && !T && u0(u, t, a), c !== null && u0(c, t, a);
      }
    }
    var xk = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return l0(e.current, i, a), a;
      }
    };
    function l0(e, t, a) {
      {
        var i = e.child, u = e.sibling, c = e.tag, v = e.type, g = null;
        switch (c) {
          case M:
          case _e:
          case O:
            g = v;
            break;
          case ie:
            g = v.render;
            break;
        }
        var S = !1;
        g !== null && t.has(g) && (S = !0), S ? Dk(e, a) : i !== null && l0(i, t, a), u !== null && l0(u, t, a);
      }
    }
    function Dk(e, t) {
      {
        var a = Ok(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case Q:
              t.add(i.stateNode);
              return;
            case P:
              t.add(i.stateNode.containerInfo);
              return;
            case x:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function Ok(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === Q)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var s0;
    {
      s0 = !1;
      try {
        var pb = Object.preventExtensions({});
      } catch {
        s0 = !0;
      }
    }
    function kk(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ye, this.subtreeFlags = Ye, this.deletions = null, this.lanes = ee, this.childLanes = ee, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !s0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var fi = function(e, t, a, i) {
      return new kk(e, t, a, i);
    };
    function c0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Nk(e) {
      return typeof e == "function" && !c0(e) && e.defaultProps === void 0;
    }
    function Mk(e) {
      if (typeof e == "function")
        return c0(e) ? O : M;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Oe)
          return ie;
        if (t === st)
          return Re;
      }
      return L;
    }
    function mc(e, t) {
      var a = e.alternate;
      a === null ? (a = fi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ye, a.subtreeFlags = Ye, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & ur, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case L:
        case M:
        case _e:
          a.type = ud(e.type);
          break;
        case O:
          a.type = i0(e.type);
          break;
        case ie:
          a.type = o0(e.type);
          break;
      }
      return a;
    }
    function Lk(e, t) {
      e.flags &= ur | cn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ee, e.lanes = t, e.child = null, e.subtreeFlags = Ye, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ye, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function Ak(e, t, a) {
      var i;
      return e === mm ? (i = gt, t === !0 && (i |= Rn, i |= Ha)) : i = Ge, lr && (i |= Xe), fi(x, null, null, i);
    }
    function f0(e, t, a, i, u, c) {
      var v = L, g = e;
      if (typeof e == "function")
        c0(e) ? (v = O, g = i0(g)) : g = ud(g);
      else if (typeof e == "string")
        v = Q;
      else
        e:
          switch (e) {
            case Sa:
              return us(a.children, u, c, t);
            case Si:
              v = ne, u |= Rn, (u & gt) !== Ge && (u |= Ha);
              break;
            case N:
              return zk(a, u, c, t);
            case lt:
              return Uk(a, u, c, t);
            case _t:
              return jk(a, u, c, t);
            case ln:
              return vb(a, u, c, t);
            case or:
            case Un:
            case Ei:
            case rl:
            case un:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case oe:
                    v = he;
                    break e;
                  case ge:
                    v = we;
                    break e;
                  case Oe:
                    v = ie, g = o0(g);
                    break e;
                  case st:
                    v = Re;
                    break e;
                  case We:
                    v = He, g = null;
                    break e;
                }
              var S = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var b = i ? at(i) : null;
                b && (S += `

Check the render method of \`` + b + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + S));
            }
          }
      var T = fi(v, a, t, u);
      return T.elementType = e, T.type = g, T.lanes = c, T._debugOwner = i, T;
    }
    function d0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, c = e.key, v = e.props, g = f0(u, c, v, i, t, a);
      return g._debugSource = e._source, g._debugOwner = e._owner, g;
    }
    function us(e, t, a, i) {
      var u = fi(X, e, i, t);
      return u.lanes = a, u;
    }
    function zk(e, t, a, i) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = fi(me, e, i, t | Xe);
      return u.elementType = N, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function Uk(e, t, a, i) {
      var u = fi(fe, e, i, t);
      return u.elementType = lt, u.lanes = a, u;
    }
    function jk(e, t, a, i) {
      var u = fi(ht, e, i, t);
      return u.elementType = _t, u.lanes = a, u;
    }
    function vb(e, t, a, i) {
      var u = fi(Ie, e, i, t);
      u.elementType = ln, u.lanes = a;
      var c = {
        isHidden: !1
      };
      return u.stateNode = c, u;
    }
    function p0(e, t, a) {
      var i = fi(I, e, null, t);
      return i.lanes = a, i;
    }
    function Fk() {
      var e = fi(Q, null, null, Ge);
      return e.elementType = "DELETED", e;
    }
    function Pk(e) {
      var t = fi(Nt, null, null, Ge);
      return t.stateNode = e, t;
    }
    function v0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = fi(P, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function hb(e, t) {
      return e === null && (e = fi(L, null, null, Ge)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Hk(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Gg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = xt, this.eventTimes = hf(ee), this.expirationTimes = hf(an), this.pendingLanes = ee, this.suspendedLanes = ee, this.pingedLanes = ee, this.expiredLanes = ee, this.mutableReadLanes = ee, this.finishedLanes = ee, this.entangledLanes = ee, this.entanglements = hf(ee), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var c = this.pendingUpdatersLaneMap = [], v = 0; v < dn; v++)
          c.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case mm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Ql:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function mb(e, t, a, i, u, c, v, g, S, b) {
      var T = new Hk(e, t, a, g, S), F = Ak(t, c);
      T.current = F, F.stateNode = T;
      {
        var U = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        F.memoizedState = U;
      }
      return wS(F), T;
    }
    var h0 = "18.2.0";
    function Vk(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Gr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Nr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var m0, y0;
    m0 = !1, y0 = {};
    function yb(e) {
      if (!e)
        return ci;
      var t = za(e), a = bx(t);
      if (t.tag === O) {
        var i = t.type;
        if (Jo(i))
          return $C(t, i, a);
      }
      return a;
    }
    function Bk(e, t) {
      {
        var a = za(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Pa(a);
        if (u === null)
          return null;
        if (u.mode & Rn) {
          var c = at(a) || "Component";
          if (!y0[c]) {
            y0[c] = !0;
            var v = Cn;
            try {
              qt(u), a.mode & Rn ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, c) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, c);
            } finally {
              v ? qt(v) : _n();
            }
          }
        }
        return u.stateNode;
      }
    }
    function gb(e, t, a, i, u, c, v, g) {
      var S = !1, b = null;
      return mb(e, t, S, b, a, i, u, c, v);
    }
    function Sb(e, t, a, i, u, c, v, g, S, b) {
      var T = !0, F = mb(a, i, T, e, u, c, v, g, S);
      F.context = yb(null);
      var U = F.current, Y = Da(), q = is(U), J = Wu(Y, q);
      return J.callback = t ?? null, Xl(U, J, q), GO(F, q, Y), F;
    }
    function Cv(e, t, a, i) {
      yh(t, e);
      var u = t.current, c = Da(), v = is(u);
      wu(v);
      var g = yb(a);
      t.context === null ? t.context = g : t.pendingContext = g, Zr && Cn !== null && !m0 && (m0 = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, at(Cn) || "Unknown"));
      var S = Wu(c, v);
      S.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), S.callback = i);
      var b = Xl(u, S, v);
      return b !== null && (yr(b, u, v, c), Om(b, u, v)), v;
    }
    function Ey(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case Q:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function $k(e) {
      switch (e.tag) {
        case x: {
          var t = e.stateNode;
          if (Wn(t)) {
            var a = hg(t);
            ZO(t, a);
          }
          break;
        }
        case fe: {
          Ku(function() {
            var u = qa(e, Je);
            if (u !== null) {
              var c = Da();
              yr(u, e, Je, c);
            }
          });
          var i = Je;
          g0(e, i);
          break;
        }
      }
    }
    function Eb(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Oh(a.retryLane, t));
    }
    function g0(e, t) {
      Eb(e, t);
      var a = e.alternate;
      a && Eb(a, t);
    }
    function Ik(e) {
      if (e.tag === fe) {
        var t = _l, a = qa(e, t);
        if (a !== null) {
          var i = Da();
          yr(a, e, t, i);
        }
        g0(e, t);
      }
    }
    function Yk(e) {
      if (e.tag === fe) {
        var t = is(e), a = qa(e, t);
        if (a !== null) {
          var i = Da();
          yr(a, e, t, i);
        }
        g0(e, t);
      }
    }
    function Cb(e) {
      var t = vh(e);
      return t === null ? null : t.stateNode;
    }
    var wb = function(e) {
      return null;
    };
    function Wk(e) {
      return wb(e);
    }
    var Rb = function(e) {
      return !1;
    };
    function qk(e) {
      return Rb(e);
    }
    var bb = null, Tb = null, _b = null, xb = null, Db = null, Ob = null, kb = null, Nb = null, Mb = null;
    {
      var Lb = function(e, t, a) {
        var i = t[a], u = Rt(e) ? e.slice() : mt({}, e);
        return a + 1 === t.length ? (Rt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = Lb(e[i], t, a + 1), u);
      }, Ab = function(e, t) {
        return Lb(e, t, 0);
      }, zb = function(e, t, a, i) {
        var u = t[i], c = Rt(e) ? e.slice() : mt({}, e);
        if (i + 1 === t.length) {
          var v = a[i];
          c[v] = c[u], Rt(c) ? c.splice(u, 1) : delete c[u];
        } else
          c[u] = zb(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return c;
      }, Ub = function(e, t, a) {
        if (t.length !== a.length) {
          R("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              R("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return zb(e, t, a, 0);
      }, jb = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], c = Rt(e) ? e.slice() : mt({}, e);
        return c[u] = jb(e[u], t, a + 1, i), c;
      }, Fb = function(e, t, a) {
        return jb(e, t, 0, a);
      }, S0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      bb = function(e, t, a, i) {
        var u = S0(e, t);
        if (u !== null) {
          var c = Fb(u.memoizedState, a, i);
          u.memoizedState = c, u.baseState = c, e.memoizedProps = mt({}, e.memoizedProps);
          var v = qa(e, Je);
          v !== null && yr(v, e, Je, an);
        }
      }, Tb = function(e, t, a) {
        var i = S0(e, t);
        if (i !== null) {
          var u = Ab(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = mt({}, e.memoizedProps);
          var c = qa(e, Je);
          c !== null && yr(c, e, Je, an);
        }
      }, _b = function(e, t, a, i) {
        var u = S0(e, t);
        if (u !== null) {
          var c = Ub(u.memoizedState, a, i);
          u.memoizedState = c, u.baseState = c, e.memoizedProps = mt({}, e.memoizedProps);
          var v = qa(e, Je);
          v !== null && yr(v, e, Je, an);
        }
      }, xb = function(e, t, a) {
        e.pendingProps = Fb(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = qa(e, Je);
        i !== null && yr(i, e, Je, an);
      }, Db = function(e, t) {
        e.pendingProps = Ab(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = qa(e, Je);
        a !== null && yr(a, e, Je, an);
      }, Ob = function(e, t, a) {
        e.pendingProps = Ub(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = qa(e, Je);
        i !== null && yr(i, e, Je, an);
      }, kb = function(e) {
        var t = qa(e, Je);
        t !== null && yr(t, e, Je, an);
      }, Nb = function(e) {
        wb = e;
      }, Mb = function(e) {
        Rb = e;
      };
    }
    function Qk(e) {
      var t = Pa(e);
      return t === null ? null : t.stateNode;
    }
    function Gk(e) {
      return null;
    }
    function Kk() {
      return Cn;
    }
    function Xk(e) {
      var t = e.findFiberByHostInstance, a = d.ReactCurrentDispatcher;
      return Qd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: bb,
        overrideHookStateDeletePath: Tb,
        overrideHookStateRenamePath: _b,
        overrideProps: xb,
        overridePropsDeletePath: Db,
        overridePropsRenamePath: Ob,
        setErrorHandler: Nb,
        setSuspenseHandler: Mb,
        scheduleUpdate: kb,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Qk,
        findFiberByHostInstance: t || Gk,
        // React Refresh
        findHostInstancesForRefresh: xk,
        scheduleRefresh: Tk,
        scheduleRoot: _k,
        setRefreshHandler: bk,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Kk,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: h0
      });
    }
    var Pb = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function E0(e) {
      this._internalRoot = e;
    }
    Cy.prototype.render = E0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? y("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : wy(arguments[1]) ? y("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && y("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== jn) {
          var i = Cb(t.current);
          i && i.parentNode !== a && y("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Cv(e, t, null, null);
    }, Cy.prototype.unmount = E0.prototype.unmount = function() {
      typeof arguments[0] == "function" && y("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        XR() && y("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Ku(function() {
          Cv(null, e, null, null);
        }), FC(t);
      }
    };
    function Jk(e, t) {
      if (!wy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      Hb(e);
      var a = !1, i = !1, u = "", c = Pb;
      t != null && (t.hydrate ? R("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === gi && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (c = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var v = gb(e, mm, null, a, i, u, c);
      sm(v.current, e);
      var g = e.nodeType === jn ? e.parentNode : e;
      return Op(g), new E0(v);
    }
    function Cy(e) {
      this._internalRoot = e;
    }
    function Zk(e) {
      e && jh(e);
    }
    Cy.prototype.unstable_scheduleHydration = Zk;
    function eN(e, t, a) {
      if (!wy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      Hb(e), t === void 0 && y("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, c = !1, v = !1, g = "", S = Pb;
      a != null && (a.unstable_strictMode === !0 && (c = !0), a.identifierPrefix !== void 0 && (g = a.identifierPrefix), a.onRecoverableError !== void 0 && (S = a.onRecoverableError));
      var b = Sb(t, null, e, mm, i, c, v, g, S);
      if (sm(b.current, e), Op(e), u)
        for (var T = 0; T < u.length; T++) {
          var F = u[T];
          lD(b, F);
        }
      return new Cy(b);
    }
    function wy(e) {
      return !!(e && (e.nodeType === ta || e.nodeType === ii || e.nodeType === pu || !be));
    }
    function wv(e) {
      return !!(e && (e.nodeType === ta || e.nodeType === ii || e.nodeType === pu || e.nodeType === jn && e.nodeValue === " react-mount-point-unstable "));
    }
    function Hb(e) {
      e.nodeType === ta && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Hp(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var tN = d.ReactCurrentOwner, Vb;
    Vb = function(e) {
      if (e._reactRootContainer && e.nodeType !== jn) {
        var t = Cb(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = C0(e), u = !!(i && Wl(i));
      u && !a && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ta && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function C0(e) {
      return e ? e.nodeType === ii ? e.documentElement : e.firstChild : null;
    }
    function Bb() {
    }
    function nN(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var c = i;
          i = function() {
            var U = Ey(v);
            c.call(U);
          };
        }
        var v = Sb(
          t,
          i,
          e,
          Ql,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Bb
        );
        e._reactRootContainer = v, sm(v.current, e);
        var g = e.nodeType === jn ? e.parentNode : e;
        return Op(g), Ku(), v;
      } else {
        for (var S; S = e.lastChild; )
          e.removeChild(S);
        if (typeof i == "function") {
          var b = i;
          i = function() {
            var U = Ey(T);
            b.call(U);
          };
        }
        var T = gb(
          e,
          Ql,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Bb
        );
        e._reactRootContainer = T, sm(T.current, e);
        var F = e.nodeType === jn ? e.parentNode : e;
        return Op(F), Ku(function() {
          Cv(t, T, a, i);
        }), T;
      }
    }
    function rN(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Ry(e, t, a, i, u) {
      Vb(a), rN(u === void 0 ? null : u, "render");
      var c = a._reactRootContainer, v;
      if (!c)
        v = nN(a, t, e, u, i);
      else {
        if (v = c, typeof u == "function") {
          var g = u;
          u = function() {
            var S = Ey(v);
            g.call(S);
          };
        }
        Cv(t, v, e, u);
      }
      return Ey(v);
    }
    function aN(e) {
      {
        var t = tN.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", At(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ta ? e : Bk(e, "findDOMNode");
    }
    function iN(e, t, a) {
      if (y("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !wv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Hp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Ry(null, e, t, !0, a);
    }
    function oN(e, t, a) {
      if (y("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !wv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Hp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Ry(null, e, t, !1, a);
    }
    function uN(e, t, a, i) {
      if (y("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !wv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ks(e))
        throw new Error("parentComponent must be a valid React Component");
      return Ry(e, t, a, !1, i);
    }
    function lN(e) {
      if (!wv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Hp(e) && e._reactRootContainer === void 0;
        t && y("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = C0(e), i = a && !Wl(a);
          i && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Ku(function() {
          Ry(null, null, e, !1, function() {
            e._reactRootContainer = null, FC(e);
          });
        }), !0;
      } else {
        {
          var u = C0(e), c = !!(u && Wl(u)), v = e.nodeType === ta && wv(e.parentNode) && !!e.parentNode._reactRootContainer;
          c && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", v ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Me($k), Nh(Ik), Ys(Yk), fp(Ba), Lh(Bs), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), fh(f_), zc(JE, ek, Ku);
    function sN(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!wy(t))
        throw new Error("Target container is not a DOM element.");
      return Vk(e, t, null, a);
    }
    function cN(e, t, a, i) {
      return uN(e, t, a, i);
    }
    var w0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Wl, Ff, cm, Ac, xs, JE]
    };
    function fN(e, t) {
      return w0.usingClientEntryPoint || y('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Jk(e, t);
    }
    function dN(e, t, a) {
      return w0.usingClientEntryPoint || y('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), eN(e, t, a);
    }
    function pN(e) {
      return XR() && y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Ku(e);
    }
    var vN = Xk({
      findFiberByHostInstance: tc,
      bundleType: 1,
      version: h0,
      rendererPackageName: "react-dom"
    });
    if (!vN && gn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var $b = window.location.protocol;
      /^(https?|file):$/.test($b) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + ($b === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ja.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = w0, Ja.createPortal = sN, Ja.createRoot = fN, Ja.findDOMNode = aN, Ja.flushSync = pN, Ja.hydrate = iN, Ja.hydrateRoot = dN, Ja.render = oN, Ja.unmountComponentAtNode = lN, Ja.unstable_batchedUpdates = JE, Ja.unstable_renderSubtreeIntoContainer = cN, Ja.version = h0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ja;
}
function NT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(NT);
    } catch (l) {
      console.error(l);
    }
  }
}
process.env.NODE_ENV === "production" ? (NT(), P0.exports = xN()) : P0.exports = DN();
var ON = P0.exports, _v = ON;
if (process.env.NODE_ENV === "production")
  kv.createRoot = _v.createRoot, kv.hydrateRoot = _v.hydrateRoot;
else {
  var _y = _v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  kv.createRoot = function(l, f) {
    _y.usingClientEntryPoint = !0;
    try {
      return _v.createRoot(l, f);
    } finally {
      _y.usingClientEntryPoint = !1;
    }
  }, kv.hydrateRoot = function(l, f, d) {
    _y.usingClientEntryPoint = !0;
    try {
      return _v.hydrateRoot(l, f, d);
    } finally {
      _y.usingClientEntryPoint = !1;
    }
  };
}
var sd = Ec();
const MT = /* @__PURE__ */ EN(sd), eT = /* @__PURE__ */ SN({
  __proto__: null,
  default: MT
}, [sd]), kN = "_message_jykl8_1", NN = "_time_jykl8_15", MN = "_heading_jykl8_27", LN = "_avatar_jykl8_41", AN = "_authorName_jykl8_53", zN = "_body_jykl8_65", UN = "_text_jykl8_87", jN = "_quote_jykl8_99", FN = "_oval_jykl8_119", PN = "_quoteAuthor_jykl8_127", HN = "_quoteText_jykl8_139", mo = {
  message: kN,
  time: NN,
  heading: MN,
  avatar: LN,
  authorName: AN,
  body: zN,
  text: UN,
  quote: jN,
  oval: FN,
  quoteAuthor: PN,
  quoteText: HN
};
var H0 = { exports: {} }, _0 = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tT;
function VN() {
  if (tT)
    return _0;
  tT = 1;
  var l = Ec();
  function f(M, O) {
    return M === O && (M !== 0 || 1 / M === 1 / O) || M !== M && O !== O;
  }
  var d = typeof Object.is == "function" ? Object.is : f, m = l.useSyncExternalStore, C = l.useRef, R = l.useEffect, y = l.useMemo, D = l.useDebugValue;
  return _0.useSyncExternalStoreWithSelector = function(M, O, L, x, P) {
    var Q = C(null);
    if (Q.current === null) {
      var I = { hasValue: !1, value: null };
      Q.current = I;
    } else
      I = Q.current;
    Q = y(function() {
      function ne(fe) {
        if (!we) {
          if (we = !0, he = fe, fe = x(fe), P !== void 0 && I.hasValue) {
            var Re = I.value;
            if (P(Re, fe))
              return ie = Re;
          }
          return ie = fe;
        }
        if (Re = ie, d(he, fe))
          return Re;
        var _e = x(fe);
        return P !== void 0 && P(Re, _e) ? Re : (he = fe, ie = _e);
      }
      var we = !1, he, ie, me = L === void 0 ? null : L;
      return [function() {
        return ne(O());
      }, me === null ? void 0 : function() {
        return ne(me());
      }];
    }, [O, L, x, P]);
    var X = m(M, Q[0], Q[1]);
    return R(function() {
      I.hasValue = !0, I.value = X;
    }, [X]), D(X), X;
  }, _0;
}
var x0 = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nT;
function BN() {
  return nT || (nT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var l = Ec();
    function f(O, L) {
      return O === L && (O !== 0 || 1 / O === 1 / L) || O !== O && L !== L;
    }
    var d = typeof Object.is == "function" ? Object.is : f, m = l.useSyncExternalStore, C = l.useRef, R = l.useEffect, y = l.useMemo, D = l.useDebugValue;
    function M(O, L, x, P, Q) {
      var I = C(null), X;
      I.current === null ? (X = {
        hasValue: !1,
        value: null
      }, I.current = X) : X = I.current;
      var ne = y(function() {
        var me = !1, fe, Re, _e = function(ht) {
          if (!me) {
            me = !0, fe = ht;
            var on = P(ht);
            if (Q !== void 0 && X.hasValue) {
              var Ie = X.value;
              if (Q(Ie, on))
                return Re = Ie, Ie;
            }
            return Re = on, on;
          }
          var ot = fe, Mt = Re;
          if (d(ot, ht))
            return Mt;
          var St = P(ht);
          return Q !== void 0 && Q(Mt, St) ? Mt : (fe = ht, Re = St, St);
        }, He = x === void 0 ? null : x, bt = function() {
          return _e(L());
        }, Nt = He === null ? void 0 : function() {
          return _e(He());
        };
        return [bt, Nt];
      }, [L, x, P, Q]), we = ne[0], he = ne[1], ie = m(O, we, he);
      return R(function() {
        X.hasValue = !0, X.value = ie;
      }, [ie]), D(ie), ie;
    }
    x0.useSyncExternalStoreWithSelector = M, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), x0;
}
process.env.NODE_ENV === "production" ? H0.exports = VN() : H0.exports = BN();
var $N = H0.exports, pi = (
  // prettier-ignore
  // @ts-ignore
  "default" in eT ? MT : eT
), rT = Symbol.for("react-redux-context"), aT = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function IN() {
  if (!pi.createContext)
    return {};
  const l = aT[rT] ?? (aT[rT] = /* @__PURE__ */ new Map());
  let f = l.get(pi.createContext);
  return f || (f = pi.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (f.displayName = "ReactRedux"), l.set(pi.createContext, f)), f;
}
var fs = /* @__PURE__ */ IN(), YN = () => {
  throw new Error("uSES not initialized!");
};
function Z0(l = fs) {
  return function() {
    const d = pi.useContext(l);
    if (process.env.NODE_ENV !== "production" && !d)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return d;
  };
}
var LT = /* @__PURE__ */ Z0(), AT = YN, WN = (l) => {
  AT = l;
}, qN = (l, f) => l === f;
function QN(l = fs) {
  const f = l === fs ? LT : Z0(l), d = (m, C = {}) => {
    const { equalityFn: R = qN, devModeChecks: y = {} } = typeof C == "function" ? { equalityFn: C } : C;
    if (process.env.NODE_ENV !== "production") {
      if (!m)
        throw new Error("You must pass a selector to useSelector");
      if (typeof m != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof R != "function")
        throw new Error(
          "You must pass a function as an equality function to useSelector"
        );
    }
    const {
      store: D,
      subscription: M,
      getServerState: O,
      stabilityCheck: L,
      identityFunctionCheck: x
    } = f(), P = pi.useRef(!0), Q = pi.useCallback(
      {
        [m.name](X) {
          const ne = m(X);
          if (process.env.NODE_ENV !== "production") {
            const {
              identityFunctionCheck: we,
              stabilityCheck: he
            } = {
              stabilityCheck: L,
              identityFunctionCheck: x,
              ...y
            };
            if (he === "always" || he === "once" && P.current) {
              const ie = m(X);
              if (!R(ne, ie)) {
                let me;
                try {
                  throw new Error();
                } catch (fe) {
                  ({ stack: me } = fe);
                }
                console.warn(
                  "Selector " + (m.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: X,
                    selected: ne,
                    selected2: ie,
                    stack: me
                  }
                );
              }
            }
            if ((we === "always" || we === "once" && P.current) && ne === X) {
              let ie;
              try {
                throw new Error();
              } catch (me) {
                ({ stack: ie } = me);
              }
              console.warn(
                "Selector " + (m.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: ie }
              );
            }
            P.current && (P.current = !1);
          }
          return ne;
        }
      }[m.name],
      [m, L, y.stabilityCheck]
    ), I = AT(
      M.addNestedSub,
      D.getState,
      O || D.getState,
      Q,
      R
    );
    return pi.useDebugValue(I), I;
  };
  return Object.assign(d, {
    withTypes: () => d
  }), d;
}
var Mv = /* @__PURE__ */ QN();
function GN(l) {
  l();
}
function KN() {
  let l = null, f = null;
  return {
    clear() {
      l = null, f = null;
    },
    notify() {
      GN(() => {
        let d = l;
        for (; d; )
          d.callback(), d = d.next;
      });
    },
    get() {
      const d = [];
      let m = l;
      for (; m; )
        d.push(m), m = m.next;
      return d;
    },
    subscribe(d) {
      let m = !0;
      const C = f = {
        callback: d,
        next: null,
        prev: f
      };
      return C.prev ? C.prev.next = C : l = C, function() {
        !m || l === null || (m = !1, C.next ? C.next.prev = C.prev : f = C.prev, C.prev ? C.prev.next = C.next : l = C.next);
      };
    }
  };
}
var iT = {
  notify() {
  },
  get: () => []
};
function XN(l, f) {
  let d, m = iT, C = 0, R = !1;
  function y(X) {
    L();
    const ne = m.subscribe(X);
    let we = !1;
    return () => {
      we || (we = !0, ne(), x());
    };
  }
  function D() {
    m.notify();
  }
  function M() {
    I.onStateChange && I.onStateChange();
  }
  function O() {
    return R;
  }
  function L() {
    C++, d || (d = f ? f.addNestedSub(M) : l.subscribe(M), m = KN());
  }
  function x() {
    C--, d && C === 0 && (d(), d = void 0, m.clear(), m = iT);
  }
  function P() {
    R || (R = !0, L());
  }
  function Q() {
    R && (R = !1, x());
  }
  const I = {
    addNestedSub: y,
    notifyNestedSubs: D,
    handleChangeWrapper: M,
    isSubscribed: O,
    trySubscribe: P,
    tryUnsubscribe: Q,
    getListeners: () => m
  };
  return I;
}
var JN = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ZN = JN ? pi.useLayoutEffect : pi.useEffect;
function eM({
  store: l,
  context: f,
  children: d,
  serverState: m,
  stabilityCheck: C = "once",
  identityFunctionCheck: R = "once"
}) {
  const y = pi.useMemo(() => {
    const O = XN(l);
    return {
      store: l,
      subscription: O,
      getServerState: m ? () => m : void 0,
      stabilityCheck: C,
      identityFunctionCheck: R
    };
  }, [l, m, C, R]), D = pi.useMemo(() => l.getState(), [l]);
  ZN(() => {
    const { subscription: O } = y;
    return O.onStateChange = O.notifyNestedSubs, O.trySubscribe(), D !== l.getState() && O.notifyNestedSubs(), () => {
      O.tryUnsubscribe(), O.onStateChange = void 0;
    };
  }, [y, D]);
  const M = f || fs;
  return /* @__PURE__ */ pi.createElement(M.Provider, { value: y }, d);
}
var tM = eM;
function zT(l = fs) {
  const f = l === fs ? LT : (
    // @ts-ignore
    Z0(l)
  ), d = () => {
    const { store: m } = f();
    return m;
  };
  return Object.assign(d, {
    withTypes: () => d
  }), d;
}
var nM = /* @__PURE__ */ zT();
function rM(l = fs) {
  const f = l === fs ? nM : zT(l), d = () => f().dispatch;
  return Object.assign(d, {
    withTypes: () => d
  }), d;
}
var UT = /* @__PURE__ */ rM();
WN($N.useSyncExternalStoreWithSelector);
function Yr(l) {
  return `Minified Redux error #${l}; visit https://redux.js.org/Errors?code=${l} for the full message or use the non-minified dev environment for full errors. `;
}
var aM = typeof Symbol == "function" && Symbol.observable || "@@observable", oT = aM, D0 = () => Math.random().toString(36).substring(7).split("").join("."), iM = {
  INIT: `@@redux/INIT${/* @__PURE__ */ D0()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ D0()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${D0()}`
}, gc = iM;
function Uv(l) {
  if (typeof l != "object" || l === null)
    return !1;
  let f = l;
  for (; Object.getPrototypeOf(f) !== null; )
    f = Object.getPrototypeOf(f);
  return Object.getPrototypeOf(l) === f || Object.getPrototypeOf(l) === null;
}
function oM(l) {
  if (l === void 0)
    return "undefined";
  if (l === null)
    return "null";
  const f = typeof l;
  switch (f) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return f;
  }
  if (Array.isArray(l))
    return "array";
  if (sM(l))
    return "date";
  if (lM(l))
    return "error";
  const d = uM(l);
  switch (d) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return d;
  }
  return Object.prototype.toString.call(l).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function uM(l) {
  return typeof l.constructor == "function" ? l.constructor.name : null;
}
function lM(l) {
  return l instanceof Error || typeof l.message == "string" && l.constructor && typeof l.constructor.stackTraceLimit == "number";
}
function sM(l) {
  return l instanceof Date ? !0 : typeof l.toDateString == "function" && typeof l.getDate == "function" && typeof l.setDate == "function";
}
function cs(l) {
  let f = typeof l;
  return process.env.NODE_ENV !== "production" && (f = oM(l)), f;
}
function jT(l, f, d) {
  if (typeof l != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Yr(2) : `Expected the root reducer to be a function. Instead, received: '${cs(l)}'`);
  if (typeof f == "function" && typeof d == "function" || typeof d == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Yr(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof f == "function" && typeof d > "u" && (d = f, f = void 0), typeof d < "u") {
    if (typeof d != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Yr(1) : `Expected the enhancer to be a function. Instead, received: '${cs(d)}'`);
    return d(jT)(l, f);
  }
  let m = l, C = f, R = /* @__PURE__ */ new Map(), y = R, D = 0, M = !1;
  function O() {
    y === R && (y = /* @__PURE__ */ new Map(), R.forEach((ne, we) => {
      y.set(we, ne);
    }));
  }
  function L() {
    if (M)
      throw new Error(process.env.NODE_ENV === "production" ? Yr(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return C;
  }
  function x(ne) {
    if (typeof ne != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Yr(4) : `Expected the listener to be a function. Instead, received: '${cs(ne)}'`);
    if (M)
      throw new Error(process.env.NODE_ENV === "production" ? Yr(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let we = !0;
    O();
    const he = D++;
    return y.set(he, ne), function() {
      if (we) {
        if (M)
          throw new Error(process.env.NODE_ENV === "production" ? Yr(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        we = !1, O(), y.delete(he), R = null;
      }
    };
  }
  function P(ne) {
    if (!Uv(ne))
      throw new Error(process.env.NODE_ENV === "production" ? Yr(7) : `Actions must be plain objects. Instead, the actual type was: '${cs(ne)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof ne.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Yr(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof ne.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? Yr(17) : `Action "type" property must be a string. Instead, the actual type was: '${cs(ne.type)}'. Value was: '${ne.type}' (stringified)`);
    if (M)
      throw new Error(process.env.NODE_ENV === "production" ? Yr(9) : "Reducers may not dispatch actions.");
    try {
      M = !0, C = m(C, ne);
    } finally {
      M = !1;
    }
    return (R = y).forEach((he) => {
      he();
    }), ne;
  }
  function Q(ne) {
    if (typeof ne != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Yr(10) : `Expected the nextReducer to be a function. Instead, received: '${cs(ne)}`);
    m = ne, P({
      type: gc.REPLACE
    });
  }
  function I() {
    const ne = x;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(we) {
        if (typeof we != "object" || we === null)
          throw new Error(process.env.NODE_ENV === "production" ? Yr(11) : `Expected the observer to be an object. Instead, received: '${cs(we)}'`);
        function he() {
          const me = we;
          me.next && me.next(L());
        }
        return he(), {
          unsubscribe: ne(he)
        };
      },
      [oT]() {
        return this;
      }
    };
  }
  return P({
    type: gc.INIT
  }), {
    dispatch: P,
    subscribe: x,
    getState: L,
    replaceReducer: Q,
    [oT]: I
  };
}
function uT(l) {
  typeof console < "u" && typeof console.error == "function" && console.error(l);
  try {
    throw new Error(l);
  } catch {
  }
}
function cM(l, f, d, m) {
  const C = Object.keys(f), R = d && d.type === gc.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (C.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Uv(l))
    return `The ${R} has unexpected type of "${cs(l)}". Expected argument to be an object with the following keys: "${C.join('", "')}"`;
  const y = Object.keys(l).filter((D) => !f.hasOwnProperty(D) && !m[D]);
  if (y.forEach((D) => {
    m[D] = !0;
  }), !(d && d.type === gc.REPLACE) && y.length > 0)
    return `Unexpected ${y.length > 1 ? "keys" : "key"} "${y.join('", "')}" found in ${R}. Expected to find one of the known reducer keys instead: "${C.join('", "')}". Unexpected keys will be ignored.`;
}
function fM(l) {
  Object.keys(l).forEach((f) => {
    const d = l[f];
    if (typeof d(void 0, {
      type: gc.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Yr(12) : `The slice reducer for key "${f}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof d(void 0, {
      type: gc.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Yr(13) : `The slice reducer for key "${f}" returned undefined when probed with a random type. Don't try to handle '${gc.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function dM(l) {
  const f = Object.keys(l), d = {};
  for (let y = 0; y < f.length; y++) {
    const D = f[y];
    process.env.NODE_ENV !== "production" && typeof l[D] > "u" && uT(`No reducer provided for key "${D}"`), typeof l[D] == "function" && (d[D] = l[D]);
  }
  const m = Object.keys(d);
  let C;
  process.env.NODE_ENV !== "production" && (C = {});
  let R;
  try {
    fM(d);
  } catch (y) {
    R = y;
  }
  return function(D = {}, M) {
    if (R)
      throw R;
    if (process.env.NODE_ENV !== "production") {
      const x = cM(D, d, M, C);
      x && uT(x);
    }
    let O = !1;
    const L = {};
    for (let x = 0; x < m.length; x++) {
      const P = m[x], Q = d[P], I = D[P], X = Q(I, M);
      if (typeof X > "u") {
        const ne = M && M.type;
        throw new Error(process.env.NODE_ENV === "production" ? Yr(14) : `When called with an action of type ${ne ? `"${String(ne)}"` : "(unknown type)"}, the slice reducer for key "${P}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      L[P] = X, O = O || X !== I;
    }
    return O = O || m.length !== Object.keys(D).length, O ? L : D;
  };
}
function Fy(...l) {
  return l.length === 0 ? (f) => f : l.length === 1 ? l[0] : l.reduce((f, d) => (...m) => f(d(...m)));
}
function pM(...l) {
  return (f) => (d, m) => {
    const C = f(d, m);
    let R = () => {
      throw new Error(process.env.NODE_ENV === "production" ? Yr(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const y = {
      getState: C.getState,
      dispatch: (M, ...O) => R(M, ...O)
    }, D = l.map((M) => M(y));
    return R = Fy(...D)(C.dispatch), {
      ...C,
      dispatch: R
    };
  };
}
function FT(l) {
  return Uv(l) && "type" in l && typeof l.type == "string";
}
var PT = Symbol.for("immer-nothing"), lT = Symbol.for("immer-draftable"), vi = Symbol.for("immer-state"), vM = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(l) {
    return `The plugin for '${l}' has not been loaded into Immer. To enable the plugin, import and call \`enable${l}()\` when initializing your application.`;
  },
  function(l) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${l}'`;
  },
  "This object has been frozen and should not be mutated",
  function(l) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + l;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(l) {
    return `'current' expects a draft, got: ${l}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(l) {
    return `'original' expects a draft, got: ${l}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function Za(l, ...f) {
  if (process.env.NODE_ENV !== "production") {
    const d = vM[l], m = typeof d == "function" ? d.apply(null, f) : d;
    throw new Error(`[Immer] ${m}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${l}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var cd = Object.getPrototypeOf;
function ds(l) {
  return !!l && !!l[vi];
}
function tl(l) {
  var f;
  return l ? HT(l) || Array.isArray(l) || !!l[lT] || !!((f = l.constructor) != null && f[lT]) || Iy(l) || Yy(l) : !1;
}
var hM = Object.prototype.constructor.toString();
function HT(l) {
  if (!l || typeof l != "object")
    return !1;
  const f = cd(l);
  if (f === null)
    return !0;
  const d = Object.hasOwnProperty.call(f, "constructor") && f.constructor;
  return d === Object ? !0 : typeof d == "function" && Function.toString.call(d) === hM;
}
function Py(l, f) {
  $y(l) === 0 ? Reflect.ownKeys(l).forEach((d) => {
    f(d, l[d], l);
  }) : l.forEach((d, m) => f(m, d, l));
}
function $y(l) {
  const f = l[vi];
  return f ? f.type_ : Array.isArray(l) ? 1 : Iy(l) ? 2 : Yy(l) ? 3 : 0;
}
function V0(l, f) {
  return $y(l) === 2 ? l.has(f) : Object.prototype.hasOwnProperty.call(l, f);
}
function VT(l, f, d) {
  const m = $y(l);
  m === 2 ? l.set(f, d) : m === 3 ? l.add(d) : l[f] = d;
}
function mM(l, f) {
  return l === f ? l !== 0 || 1 / l === 1 / f : l !== l && f !== f;
}
function Iy(l) {
  return l instanceof Map;
}
function Yy(l) {
  return l instanceof Set;
}
function yc(l) {
  return l.copy_ || l.base_;
}
function B0(l, f) {
  if (Iy(l))
    return new Map(l);
  if (Yy(l))
    return new Set(l);
  if (Array.isArray(l))
    return Array.prototype.slice.call(l);
  if (!f && HT(l))
    return cd(l) ? { ...l } : Object.assign(/* @__PURE__ */ Object.create(null), l);
  const d = Object.getOwnPropertyDescriptors(l);
  delete d[vi];
  let m = Reflect.ownKeys(d);
  for (let C = 0; C < m.length; C++) {
    const R = m[C], y = d[R];
    y.writable === !1 && (y.writable = !0, y.configurable = !0), (y.get || y.set) && (d[R] = {
      configurable: !0,
      writable: !0,
      // could live with !!desc.set as well here...
      enumerable: y.enumerable,
      value: l[R]
    });
  }
  return Object.create(cd(l), d);
}
function eC(l, f = !1) {
  return Wy(l) || ds(l) || !tl(l) || ($y(l) > 1 && (l.set = l.add = l.clear = l.delete = yM), Object.freeze(l), f && Object.entries(l).forEach(([d, m]) => eC(m, !0))), l;
}
function yM() {
  Za(2);
}
function Wy(l) {
  return Object.isFrozen(l);
}
var gM = {};
function Sc(l) {
  const f = gM[l];
  return f || Za(0, l), f;
}
var Lv;
function BT() {
  return Lv;
}
function SM(l, f) {
  return {
    drafts_: [],
    parent_: l,
    immer_: f,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function sT(l, f) {
  f && (Sc("Patches"), l.patches_ = [], l.inversePatches_ = [], l.patchListener_ = f);
}
function $0(l) {
  I0(l), l.drafts_.forEach(EM), l.drafts_ = null;
}
function I0(l) {
  l === Lv && (Lv = l.parent_);
}
function cT(l) {
  return Lv = SM(Lv, l);
}
function EM(l) {
  const f = l[vi];
  f.type_ === 0 || f.type_ === 1 ? f.revoke_() : f.revoked_ = !0;
}
function fT(l, f) {
  f.unfinalizedDrafts_ = f.drafts_.length;
  const d = f.drafts_[0];
  return l !== void 0 && l !== d ? (d[vi].modified_ && ($0(f), Za(4)), tl(l) && (l = Hy(f, l), f.parent_ || Vy(f, l)), f.patches_ && Sc("Patches").generateReplacementPatches_(
    d[vi].base_,
    l,
    f.patches_,
    f.inversePatches_
  )) : l = Hy(f, d, []), $0(f), f.patches_ && f.patchListener_(f.patches_, f.inversePatches_), l !== PT ? l : void 0;
}
function Hy(l, f, d) {
  if (Wy(f))
    return f;
  const m = f[vi];
  if (!m)
    return Py(
      f,
      (C, R) => dT(l, m, f, C, R, d)
    ), f;
  if (m.scope_ !== l)
    return f;
  if (!m.modified_)
    return Vy(l, m.base_, !0), m.base_;
  if (!m.finalized_) {
    m.finalized_ = !0, m.scope_.unfinalizedDrafts_--;
    const C = m.copy_;
    let R = C, y = !1;
    m.type_ === 3 && (R = new Set(C), C.clear(), y = !0), Py(
      R,
      (D, M) => dT(l, m, C, D, M, d, y)
    ), Vy(l, C, !1), d && l.patches_ && Sc("Patches").generatePatches_(
      m,
      d,
      l.patches_,
      l.inversePatches_
    );
  }
  return m.copy_;
}
function dT(l, f, d, m, C, R, y) {
  if (process.env.NODE_ENV !== "production" && C === d && Za(5), ds(C)) {
    const D = R && f && f.type_ !== 3 && // Set objects are atomic since they have no keys.
    !V0(f.assigned_, m) ? R.concat(m) : void 0, M = Hy(l, C, D);
    if (VT(d, m, M), ds(M))
      l.canAutoFreeze_ = !1;
    else
      return;
  } else
    y && d.add(C);
  if (tl(C) && !Wy(C)) {
    if (!l.immer_.autoFreeze_ && l.unfinalizedDrafts_ < 1)
      return;
    Hy(l, C), (!f || !f.scope_.parent_) && typeof m != "symbol" && Object.prototype.propertyIsEnumerable.call(d, m) && Vy(l, C);
  }
}
function Vy(l, f, d = !1) {
  !l.parent_ && l.immer_.autoFreeze_ && l.canAutoFreeze_ && eC(f, d);
}
function CM(l, f) {
  const d = Array.isArray(l), m = {
    type_: d ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: f ? f.scope_ : BT(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: f,
    // The base state.
    base_: l,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let C = m, R = tC;
  d && (C = [m], R = Av);
  const { revoke: y, proxy: D } = Proxy.revocable(C, R);
  return m.draft_ = D, m.revoke_ = y, D;
}
var tC = {
  get(l, f) {
    if (f === vi)
      return l;
    const d = yc(l);
    if (!V0(d, f))
      return wM(l, d, f);
    const m = d[f];
    return l.finalized_ || !tl(m) ? m : m === O0(l.base_, f) ? (k0(l), l.copy_[f] = W0(m, l)) : m;
  },
  has(l, f) {
    return f in yc(l);
  },
  ownKeys(l) {
    return Reflect.ownKeys(yc(l));
  },
  set(l, f, d) {
    const m = $T(yc(l), f);
    if (m != null && m.set)
      return m.set.call(l.draft_, d), !0;
    if (!l.modified_) {
      const C = O0(yc(l), f), R = C == null ? void 0 : C[vi];
      if (R && R.base_ === d)
        return l.copy_[f] = d, l.assigned_[f] = !1, !0;
      if (mM(d, C) && (d !== void 0 || V0(l.base_, f)))
        return !0;
      k0(l), Y0(l);
    }
    return l.copy_[f] === d && // special case: handle new props with value 'undefined'
    (d !== void 0 || f in l.copy_) || // special case: NaN
    Number.isNaN(d) && Number.isNaN(l.copy_[f]) || (l.copy_[f] = d, l.assigned_[f] = !0), !0;
  },
  deleteProperty(l, f) {
    return O0(l.base_, f) !== void 0 || f in l.base_ ? (l.assigned_[f] = !1, k0(l), Y0(l)) : delete l.assigned_[f], l.copy_ && delete l.copy_[f], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(l, f) {
    const d = yc(l), m = Reflect.getOwnPropertyDescriptor(d, f);
    return m && {
      writable: !0,
      configurable: l.type_ !== 1 || f !== "length",
      enumerable: m.enumerable,
      value: d[f]
    };
  },
  defineProperty() {
    Za(11);
  },
  getPrototypeOf(l) {
    return cd(l.base_);
  },
  setPrototypeOf() {
    Za(12);
  }
}, Av = {};
Py(tC, (l, f) => {
  Av[l] = function() {
    return arguments[0] = arguments[0][0], f.apply(this, arguments);
  };
});
Av.deleteProperty = function(l, f) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(f)) && Za(13), Av.set.call(this, l, f, void 0);
};
Av.set = function(l, f, d) {
  return process.env.NODE_ENV !== "production" && f !== "length" && isNaN(parseInt(f)) && Za(14), tC.set.call(this, l[0], f, d, l[0]);
};
function O0(l, f) {
  const d = l[vi];
  return (d ? yc(d) : l)[f];
}
function wM(l, f, d) {
  var C;
  const m = $T(f, d);
  return m ? "value" in m ? m.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (C = m.get) == null ? void 0 : C.call(l.draft_)
  ) : void 0;
}
function $T(l, f) {
  if (!(f in l))
    return;
  let d = cd(l);
  for (; d; ) {
    const m = Object.getOwnPropertyDescriptor(d, f);
    if (m)
      return m;
    d = cd(d);
  }
}
function Y0(l) {
  l.modified_ || (l.modified_ = !0, l.parent_ && Y0(l.parent_));
}
function k0(l) {
  l.copy_ || (l.copy_ = B0(
    l.base_,
    l.scope_.immer_.useStrictShallowCopy_
  ));
}
var RM = class {
  constructor(l) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (f, d, m) => {
      if (typeof f == "function" && typeof d != "function") {
        const R = d;
        d = f;
        const y = this;
        return function(M = R, ...O) {
          return y.produce(M, (L) => d.call(this, L, ...O));
        };
      }
      typeof d != "function" && Za(6), m !== void 0 && typeof m != "function" && Za(7);
      let C;
      if (tl(f)) {
        const R = cT(this), y = W0(f, void 0);
        let D = !0;
        try {
          C = d(y), D = !1;
        } finally {
          D ? $0(R) : I0(R);
        }
        return sT(R, m), fT(C, R);
      } else if (!f || typeof f != "object") {
        if (C = d(f), C === void 0 && (C = f), C === PT && (C = void 0), this.autoFreeze_ && eC(C, !0), m) {
          const R = [], y = [];
          Sc("Patches").generateReplacementPatches_(f, C, R, y), m(R, y);
        }
        return C;
      } else
        Za(1, f);
    }, this.produceWithPatches = (f, d) => {
      if (typeof f == "function")
        return (y, ...D) => this.produceWithPatches(y, (M) => f(M, ...D));
      let m, C;
      return [this.produce(f, d, (y, D) => {
        m = y, C = D;
      }), m, C];
    }, typeof (l == null ? void 0 : l.autoFreeze) == "boolean" && this.setAutoFreeze(l.autoFreeze), typeof (l == null ? void 0 : l.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(l.useStrictShallowCopy);
  }
  createDraft(l) {
    tl(l) || Za(8), ds(l) && (l = IT(l));
    const f = cT(this), d = W0(l, void 0);
    return d[vi].isManual_ = !0, I0(f), d;
  }
  finishDraft(l, f) {
    const d = l && l[vi];
    (!d || !d.isManual_) && Za(9);
    const { scope_: m } = d;
    return sT(m, f), fT(void 0, m);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(l) {
    this.autoFreeze_ = l;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(l) {
    this.useStrictShallowCopy_ = l;
  }
  applyPatches(l, f) {
    let d;
    for (d = f.length - 1; d >= 0; d--) {
      const C = f[d];
      if (C.path.length === 0 && C.op === "replace") {
        l = C.value;
        break;
      }
    }
    d > -1 && (f = f.slice(d + 1));
    const m = Sc("Patches").applyPatches_;
    return ds(l) ? m(l, f) : this.produce(
      l,
      (C) => m(C, f)
    );
  }
};
function W0(l, f) {
  const d = Iy(l) ? Sc("MapSet").proxyMap_(l, f) : Yy(l) ? Sc("MapSet").proxySet_(l, f) : CM(l, f);
  return (f ? f.scope_ : BT()).drafts_.push(d), d;
}
function IT(l) {
  return ds(l) || Za(10, l), YT(l);
}
function YT(l) {
  if (!tl(l) || Wy(l))
    return l;
  const f = l[vi];
  let d;
  if (f) {
    if (!f.modified_)
      return f.base_;
    f.finalized_ = !0, d = B0(l, f.scope_.immer_.useStrictShallowCopy_);
  } else
    d = B0(l, !0);
  return Py(d, (m, C) => {
    VT(d, m, YT(C));
  }), f && (f.finalized_ = !1), d;
}
var hi = new RM(), WT = hi.produce;
hi.produceWithPatches.bind(
  hi
);
hi.setAutoFreeze.bind(hi);
hi.setUseStrictShallowCopy.bind(hi);
hi.applyPatches.bind(hi);
hi.createDraft.bind(hi);
hi.finishDraft.bind(hi);
var bM = (l, f, d) => {
  if (f.length === 1 && f[0] === d) {
    let m = !1;
    try {
      const C = {};
      l(C) === C && (m = !0);
    } catch {
    }
    if (m) {
      let C;
      try {
        throw new Error();
      } catch (R) {
        ({ stack: C } = R);
      }
      console.warn(
        `The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,
        { stack: C }
      );
    }
  }
}, TM = (l, f, d) => {
  const { memoize: m, memoizeOptions: C } = f, { inputSelectorResults: R, inputSelectorResultsCopy: y } = l, D = m(() => ({}), ...C);
  if (!(D.apply(null, R) === D.apply(null, y))) {
    let O;
    try {
      throw new Error();
    } catch (L) {
      ({ stack: O } = L);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: d,
        firstInputs: R,
        secondInputs: y,
        stack: O
      }
    );
  }
}, _M = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function xM(l, f = `expected a function, instead received ${typeof l}`) {
  if (typeof l != "function")
    throw new TypeError(f);
}
function DM(l, f = `expected an object, instead received ${typeof l}`) {
  if (typeof l != "object")
    throw new TypeError(f);
}
function OM(l, f = "expected all items to be functions, instead received the following types: ") {
  if (!l.every((d) => typeof d == "function")) {
    const d = l.map(
      (m) => typeof m == "function" ? `function ${m.name || "unnamed"}()` : typeof m
    ).join(", ");
    throw new TypeError(`${f}[${d}]`);
  }
}
var pT = (l) => Array.isArray(l) ? l : [l];
function kM(l) {
  const f = Array.isArray(l[0]) ? l[0] : l;
  return OM(
    f,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), f;
}
function vT(l, f) {
  const d = [], { length: m } = l;
  for (let C = 0; C < m; C++)
    d.push(l[C].apply(null, f));
  return d;
}
var NM = (l, f) => {
  const { identityFunctionCheck: d, inputStabilityCheck: m } = {
    ..._M,
    ...f
  };
  return {
    identityFunctionCheck: {
      shouldRun: d === "always" || d === "once" && l,
      run: bM
    },
    inputStabilityCheck: {
      shouldRun: m === "always" || m === "once" && l,
      run: TM
    }
  };
}, MM = class {
  constructor(l) {
    this.value = l;
  }
  deref() {
    return this.value;
  }
}, LM = typeof WeakRef < "u" ? WeakRef : MM, AM = 0, hT = 1;
function xy() {
  return {
    s: AM,
    v: void 0,
    o: null,
    p: null
  };
}
function nC(l, f = {}) {
  let d = xy();
  const { resultEqualityCheck: m } = f;
  let C, R = 0;
  function y() {
    var x;
    let D = d;
    const { length: M } = arguments;
    for (let P = 0, Q = M; P < Q; P++) {
      const I = arguments[P];
      if (typeof I == "function" || typeof I == "object" && I !== null) {
        let X = D.o;
        X === null && (D.o = X = /* @__PURE__ */ new WeakMap());
        const ne = X.get(I);
        ne === void 0 ? (D = xy(), X.set(I, D)) : D = ne;
      } else {
        let X = D.p;
        X === null && (D.p = X = /* @__PURE__ */ new Map());
        const ne = X.get(I);
        ne === void 0 ? (D = xy(), X.set(I, D)) : D = ne;
      }
    }
    const O = D;
    let L;
    if (D.s === hT ? L = D.v : (L = l.apply(null, arguments), R++), O.s = hT, m) {
      const P = ((x = C == null ? void 0 : C.deref) == null ? void 0 : x.call(C)) ?? C;
      P != null && m(P, L) && (L = P, R !== 0 && R--), C = typeof L == "object" && L !== null || typeof L == "function" ? new LM(L) : L;
    }
    return O.v = L, L;
  }
  return y.clearCache = () => {
    d = xy(), y.resetResultsCount();
  }, y.resultsCount = () => R, y.resetResultsCount = () => {
    R = 0;
  }, y;
}
function qT(l, ...f) {
  const d = typeof l == "function" ? {
    memoize: l,
    memoizeOptions: f
  } : l, m = (...C) => {
    let R = 0, y = 0, D, M = {}, O = C.pop();
    typeof O == "object" && (M = O, O = C.pop()), xM(
      O,
      `createSelector expects an output function after the inputs, but received: [${typeof O}]`
    );
    const L = {
      ...d,
      ...M
    }, {
      memoize: x,
      memoizeOptions: P = [],
      argsMemoize: Q = nC,
      argsMemoizeOptions: I = [],
      devModeChecks: X = {}
    } = L, ne = pT(P), we = pT(I), he = kM(C), ie = x(function() {
      return R++, O.apply(
        null,
        arguments
      );
    }, ...ne);
    let me = !0;
    const fe = Q(function() {
      y++;
      const _e = vT(
        he,
        arguments
      );
      if (D = ie.apply(null, _e), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: He, inputStabilityCheck: bt } = NM(me, X);
        if (He.shouldRun && He.run(
          O,
          _e,
          D
        ), bt.shouldRun) {
          const Nt = vT(
            he,
            arguments
          );
          bt.run(
            { inputSelectorResults: _e, inputSelectorResultsCopy: Nt },
            { memoize: x, memoizeOptions: ne },
            arguments
          );
        }
        me && (me = !1);
      }
      return D;
    }, ...we);
    return Object.assign(fe, {
      resultFunc: O,
      memoizedResultFunc: ie,
      dependencies: he,
      dependencyRecomputations: () => y,
      resetDependencyRecomputations: () => {
        y = 0;
      },
      lastResult: () => D,
      recomputations: () => R,
      resetRecomputations: () => {
        R = 0;
      },
      memoize: x,
      argsMemoize: Q
    });
  };
  return Object.assign(m, {
    withTypes: () => m
  }), m;
}
var zM = /* @__PURE__ */ qT(nC), UM = Object.assign(
  (l, f = zM) => {
    DM(
      l,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof l}`
    );
    const d = Object.keys(l), m = d.map(
      (R) => l[R]
    );
    return f(
      m,
      (...R) => R.reduce((y, D, M) => (y[d[M]] = D, y), {})
    );
  },
  { withTypes: () => UM }
);
function QT(l) {
  return ({ dispatch: d, getState: m }) => (C) => (R) => typeof R == "function" ? R(d, m, l) : C(R);
}
var jM = QT(), FM = QT, PM = (...l) => {
  const f = qT(...l), d = Object.assign((...m) => {
    const C = f(...m), R = (y, ...D) => C(ds(y) ? IT(y) : y, ...D);
    return Object.assign(R, C), R;
  }, {
    withTypes: () => d
  });
  return d;
};
PM(nC);
var HM = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Fy : Fy.apply(null, arguments);
}, GT = (l) => l && typeof l.match == "function";
function Zu(l, f) {
  function d(...m) {
    if (f) {
      let C = f(...m);
      if (!C)
        throw new Error(process.env.NODE_ENV === "production" ? en(0) : "prepareAction did not return an object");
      return {
        type: l,
        payload: C.payload,
        ..."meta" in C && {
          meta: C.meta
        },
        ..."error" in C && {
          error: C.error
        }
      };
    }
    return {
      type: l,
      payload: m[0]
    };
  }
  return d.toString = () => `${l}`, d.type = l, d.match = (m) => FT(m) && m.type === l, d;
}
function VM(l) {
  return typeof l == "function" && "type" in l && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  GT(l);
}
function BM(l) {
  const f = l ? `${l}`.split("/") : [], d = f[f.length - 1] || "actionCreator";
  return `Detected an action creator with type "${l || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${d}())\` instead of \`dispatch(${d})\`. This is necessary even if the action has no payload.`;
}
function $M(l = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (d) => (m) => d(m);
  const {
    isActionCreator: f = VM
  } = l;
  return () => (d) => (m) => (f(m) && console.warn(BM(m.type)), d(m));
}
function KT(l, f) {
  let d = 0;
  return {
    measureTime(m) {
      const C = Date.now();
      try {
        return m();
      } finally {
        const R = Date.now();
        d += R - C;
      }
    },
    warnIfExceeded() {
      d > l && console.warn(`${f} took ${d}ms, which is more than the warning threshold of ${l}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var XT = class Nv extends Array {
  constructor(...f) {
    super(...f), Object.setPrototypeOf(this, Nv.prototype);
  }
  static get [Symbol.species]() {
    return Nv;
  }
  concat(...f) {
    return super.concat.apply(this, f);
  }
  prepend(...f) {
    return f.length === 1 && Array.isArray(f[0]) ? new Nv(...f[0].concat(this)) : new Nv(...f.concat(this));
  }
};
function mT(l) {
  return tl(l) ? WT(l, () => {
  }) : l;
}
function yT(l, f, d) {
  if (l.has(f)) {
    let C = l.get(f);
    return d.update && (C = d.update(C, f, l), l.set(f, C)), C;
  }
  if (!d.insert)
    throw new Error(process.env.NODE_ENV === "production" ? en(10) : "No insert provided for key not already in map");
  const m = d.insert(f, l);
  return l.set(f, m), m;
}
function IM(l) {
  return typeof l != "object" || l == null || Object.isFrozen(l);
}
function YM(l, f, d) {
  const m = JT(l, f, d);
  return {
    detectMutations() {
      return ZT(l, f, m, d);
    }
  };
}
function JT(l, f = [], d, m = "", C = /* @__PURE__ */ new Set()) {
  const R = {
    value: d
  };
  if (!l(d) && !C.has(d)) {
    C.add(d), R.children = {};
    for (const y in d) {
      const D = m ? m + "." + y : y;
      f.length && f.indexOf(D) !== -1 || (R.children[y] = JT(l, f, d[y], D));
    }
  }
  return R;
}
function ZT(l, f = [], d, m, C = !1, R = "") {
  const y = d ? d.value : void 0, D = y === m;
  if (C && !D && !Number.isNaN(m))
    return {
      wasMutated: !0,
      path: R
    };
  if (l(y) || l(m))
    return {
      wasMutated: !1
    };
  const M = {};
  for (let L in d.children)
    M[L] = !0;
  for (let L in m)
    M[L] = !0;
  const O = f.length > 0;
  for (let L in M) {
    const x = R ? R + "." + L : L;
    if (O && f.some((I) => I instanceof RegExp ? I.test(x) : x === I))
      continue;
    const P = ZT(l, f, d.children[L], m[L], D, x);
    if (P.wasMutated)
      return P;
  }
  return {
    wasMutated: !1
  };
}
function WM(l = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (f) => (d) => f(d);
  {
    let f = function(D, M, O, L) {
      return JSON.stringify(D, d(M, L), O);
    }, d = function(D, M) {
      let O = [], L = [];
      return M || (M = function(x, P) {
        return O[0] === P ? "[Circular ~]" : "[Circular ~." + L.slice(0, O.indexOf(P)).join(".") + "]";
      }), function(x, P) {
        if (O.length > 0) {
          var Q = O.indexOf(this);
          ~Q ? O.splice(Q + 1) : O.push(this), ~Q ? L.splice(Q, 1 / 0, x) : L.push(x), ~O.indexOf(P) && (P = M.call(this, x, P));
        } else
          O.push(P);
        return D == null ? P : D.call(this, x, P);
      };
    }, {
      isImmutable: m = IM,
      ignoredPaths: C,
      warnAfter: R = 32
    } = l;
    const y = YM.bind(null, m, C);
    return ({
      getState: D
    }) => {
      let M = D(), O = y(M), L;
      return (x) => (P) => {
        const Q = KT(R, "ImmutableStateInvariantMiddleware");
        Q.measureTime(() => {
          if (M = D(), L = O.detectMutations(), O = y(M), L.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? en(19) : `A state mutation was detected between dispatches, in the path '${L.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const I = x(P);
        return Q.measureTime(() => {
          if (M = D(), L = O.detectMutations(), O = y(M), L.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? en(20) : `A state mutation was detected inside a dispatch, in the path: ${L.path || ""}. Take a look at the reducer(s) handling the action ${f(P)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), Q.warnIfExceeded(), I;
      };
    };
  }
}
function e1(l) {
  const f = typeof l;
  return l == null || f === "string" || f === "boolean" || f === "number" || Array.isArray(l) || Uv(l);
}
function q0(l, f = "", d = e1, m, C = [], R) {
  let y;
  if (!d(l))
    return {
      keyPath: f || "<root>",
      value: l
    };
  if (typeof l != "object" || l === null || R != null && R.has(l))
    return !1;
  const D = m != null ? m(l) : Object.entries(l), M = C.length > 0;
  for (const [O, L] of D) {
    const x = f ? f + "." + O : O;
    if (!(M && C.some((Q) => Q instanceof RegExp ? Q.test(x) : x === Q))) {
      if (!d(L))
        return {
          keyPath: x,
          value: L
        };
      if (typeof L == "object" && (y = q0(L, x, d, m, C, R), y))
        return y;
    }
  }
  return R && t1(l) && R.add(l), !1;
}
function t1(l) {
  if (!Object.isFrozen(l))
    return !1;
  for (const f of Object.values(l))
    if (!(typeof f != "object" || f === null) && !t1(f))
      return !1;
  return !0;
}
function qM(l = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (f) => (d) => f(d);
  {
    const {
      isSerializable: f = e1,
      getEntries: d,
      ignoredActions: m = [],
      ignoredActionPaths: C = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: R = [],
      warnAfter: y = 32,
      ignoreState: D = !1,
      ignoreActions: M = !1,
      disableCache: O = !1
    } = l, L = !O && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (x) => (P) => (Q) => {
      if (!FT(Q))
        return P(Q);
      const I = P(Q), X = KT(y, "SerializableStateInvariantMiddleware");
      return !M && !(m.length && m.indexOf(Q.type) !== -1) && X.measureTime(() => {
        const ne = q0(Q, "", f, d, C, L);
        if (ne) {
          const {
            keyPath: we,
            value: he
          } = ne;
          console.error(`A non-serializable value was detected in an action, in the path: \`${we}\`. Value:`, he, `
Take a look at the logic that dispatched this action: `, Q, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), D || (X.measureTime(() => {
        const ne = x.getState(), we = q0(ne, "", f, d, R, L);
        if (we) {
          const {
            keyPath: he,
            value: ie
          } = we;
          console.error(`A non-serializable value was detected in the state, in the path: \`${he}\`. Value:`, ie, `
Take a look at the reducer(s) handling this action type: ${Q.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), X.warnIfExceeded()), I;
    };
  }
}
function Dy(l) {
  return typeof l == "boolean";
}
var QM = () => function(f) {
  const {
    thunk: d = !0,
    immutableCheck: m = !0,
    serializableCheck: C = !0,
    actionCreatorCheck: R = !0
  } = f ?? {};
  let y = new XT();
  if (d && (Dy(d) ? y.push(jM) : y.push(FM(d.extraArgument))), process.env.NODE_ENV !== "production") {
    if (m) {
      let D = {};
      Dy(m) || (D = m), y.unshift(WM(D));
    }
    if (C) {
      let D = {};
      Dy(C) || (D = C), y.push(qM(D));
    }
    if (R) {
      let D = {};
      Dy(R) || (D = R), y.unshift($M(D));
    }
  }
  return y;
}, GM = "RTK_autoBatch", n1 = (l) => (f) => {
  setTimeout(f, l);
}, KM = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : n1(10), XM = (l = {
  type: "raf"
}) => (f) => (...d) => {
  const m = f(...d);
  let C = !0, R = !1, y = !1;
  const D = /* @__PURE__ */ new Set(), M = l.type === "tick" ? queueMicrotask : l.type === "raf" ? KM : l.type === "callback" ? l.queueNotification : n1(l.timeout), O = () => {
    y = !1, R && (R = !1, D.forEach((L) => L()));
  };
  return Object.assign({}, m, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(L) {
      const x = () => C && L(), P = m.subscribe(x);
      return D.add(L), () => {
        P(), D.delete(L);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(L) {
      var x;
      try {
        return C = !((x = L == null ? void 0 : L.meta) != null && x[GM]), R = !C, R && (y || (y = !0, M(O))), m.dispatch(L);
      } finally {
        C = !0;
      }
    }
  });
}, JM = (l) => function(d) {
  const {
    autoBatch: m = !0
  } = d ?? {};
  let C = new XT(l);
  return m && C.push(XM(typeof m == "object" ? m : void 0)), C;
}, ls = process.env.NODE_ENV === "production";
function ZM(l) {
  const f = QM(), {
    reducer: d = void 0,
    middleware: m,
    devTools: C = !0,
    preloadedState: R = void 0,
    enhancers: y = void 0
  } = l || {};
  let D;
  if (typeof d == "function")
    D = d;
  else if (Uv(d))
    D = dM(d);
  else
    throw new Error(process.env.NODE_ENV === "production" ? en(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (!ls && m && typeof m != "function")
    throw new Error(process.env.NODE_ENV === "production" ? en(2) : "`middleware` field must be a callback");
  let M;
  if (typeof m == "function") {
    if (M = m(f), !ls && !Array.isArray(M))
      throw new Error(process.env.NODE_ENV === "production" ? en(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    M = f();
  if (!ls && M.some((I) => typeof I != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? en(4) : "each middleware provided to configureStore must be a function");
  let O = Fy;
  C && (O = HM({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !ls,
    ...typeof C == "object" && C
  }));
  const L = pM(...M), x = JM(L);
  if (!ls && y && typeof y != "function")
    throw new Error(process.env.NODE_ENV === "production" ? en(5) : "`enhancers` field must be a callback");
  let P = typeof y == "function" ? y(x) : x();
  if (!ls && !Array.isArray(P))
    throw new Error(process.env.NODE_ENV === "production" ? en(6) : "`enhancers` callback must return an array");
  if (!ls && P.some((I) => typeof I != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? en(7) : "each enhancer provided to configureStore must be a function");
  !ls && M.length && !P.includes(L) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const Q = O(...P);
  return jT(D, R, Q);
}
function r1(l) {
  const f = {}, d = [];
  let m;
  const C = {
    addCase(R, y) {
      if (process.env.NODE_ENV !== "production") {
        if (d.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? en(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (m)
          throw new Error(process.env.NODE_ENV === "production" ? en(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const D = typeof R == "string" ? R : R.type;
      if (!D)
        throw new Error(process.env.NODE_ENV === "production" ? en(28) : "`builder.addCase` cannot be called with an empty action type");
      if (D in f)
        throw new Error(process.env.NODE_ENV === "production" ? en(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${D}'`);
      return f[D] = y, C;
    },
    addMatcher(R, y) {
      if (process.env.NODE_ENV !== "production" && m)
        throw new Error(process.env.NODE_ENV === "production" ? en(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return d.push({
        matcher: R,
        reducer: y
      }), C;
    },
    addDefaultCase(R) {
      if (process.env.NODE_ENV !== "production" && m)
        throw new Error(process.env.NODE_ENV === "production" ? en(31) : "`builder.addDefaultCase` can only be called once");
      return m = R, C;
    }
  };
  return l(C), [f, d, m];
}
function eL(l) {
  return typeof l == "function";
}
function tL(l, f) {
  if (process.env.NODE_ENV !== "production" && typeof f == "object")
    throw new Error(process.env.NODE_ENV === "production" ? en(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [d, m, C] = r1(f), R;
  if (eL(l))
    R = () => mT(l());
  else {
    const D = mT(l);
    R = () => D;
  }
  function y(D = R(), M) {
    let O = [d[M.type], ...m.filter(({
      matcher: L
    }) => L(M)).map(({
      reducer: L
    }) => L)];
    return O.filter((L) => !!L).length === 0 && (O = [C]), O.reduce((L, x) => {
      if (x)
        if (ds(L)) {
          const Q = x(L, M);
          return Q === void 0 ? L : Q;
        } else {
          if (tl(L))
            return WT(L, (P) => x(P, M));
          {
            const P = x(L, M);
            if (P === void 0) {
              if (L === null)
                return L;
              throw new Error(process.env.NODE_ENV === "production" ? en(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return P;
          }
        }
      return L;
    }, D);
  }
  return y.getInitialState = R, y;
}
var nL = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", a1 = (l = 21) => {
  let f = "", d = l;
  for (; d--; )
    f += nL[Math.random() * 64 | 0];
  return f;
}, rL = (l, f) => GT(l) ? l.match(f) : l(f);
function aL(...l) {
  return (f) => l.some((d) => rL(d, f));
}
var iL = ["name", "message", "stack", "code"], N0 = class {
  constructor(l, f) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    R0(this, "_type");
    this.payload = l, this.meta = f;
  }
}, gT = class {
  constructor(l, f) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    R0(this, "_type");
    this.payload = l, this.meta = f;
  }
}, oL = (l) => {
  if (typeof l == "object" && l !== null) {
    const f = {};
    for (const d of iL)
      typeof l[d] == "string" && (f[d] = l[d]);
    return f;
  }
  return {
    message: String(l)
  };
}, dd = /* @__PURE__ */ (() => {
  function l(f, d, m) {
    const C = Zu(f + "/fulfilled", (M, O, L, x) => ({
      payload: M,
      meta: {
        ...x || {},
        arg: L,
        requestId: O,
        requestStatus: "fulfilled"
      }
    })), R = Zu(f + "/pending", (M, O, L) => ({
      payload: void 0,
      meta: {
        ...L || {},
        arg: O,
        requestId: M,
        requestStatus: "pending"
      }
    })), y = Zu(f + "/rejected", (M, O, L, x, P) => ({
      payload: x,
      error: (m && m.serializeError || oL)(M || "Rejected"),
      meta: {
        ...P || {},
        arg: L,
        requestId: O,
        rejectedWithValue: !!x,
        requestStatus: "rejected",
        aborted: (M == null ? void 0 : M.name) === "AbortError",
        condition: (M == null ? void 0 : M.name) === "ConditionError"
      }
    }));
    function D(M) {
      return (O, L, x) => {
        const P = m != null && m.idGenerator ? m.idGenerator(M) : a1(), Q = new AbortController();
        let I, X;
        function ne(he) {
          X = he, Q.abort();
        }
        const we = async function() {
          var me, fe;
          let he;
          try {
            let Re = (me = m == null ? void 0 : m.condition) == null ? void 0 : me.call(m, M, {
              getState: L,
              extra: x
            });
            if (lL(Re) && (Re = await Re), Re === !1 || Q.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const _e = new Promise((He, bt) => {
              I = () => {
                bt({
                  name: "AbortError",
                  message: X || "Aborted"
                });
              }, Q.signal.addEventListener("abort", I);
            });
            O(R(P, M, (fe = m == null ? void 0 : m.getPendingMeta) == null ? void 0 : fe.call(m, {
              requestId: P,
              arg: M
            }, {
              getState: L,
              extra: x
            }))), he = await Promise.race([_e, Promise.resolve(d(M, {
              dispatch: O,
              getState: L,
              extra: x,
              requestId: P,
              signal: Q.signal,
              abort: ne,
              rejectWithValue: (He, bt) => new N0(He, bt),
              fulfillWithValue: (He, bt) => new gT(He, bt)
            })).then((He) => {
              if (He instanceof N0)
                throw He;
              return He instanceof gT ? C(He.payload, P, M, He.meta) : C(He, P, M);
            })]);
          } catch (Re) {
            he = Re instanceof N0 ? y(null, P, M, Re.payload, Re.meta) : y(Re, P, M);
          } finally {
            I && Q.signal.removeEventListener("abort", I);
          }
          return m && !m.dispatchConditionRejection && y.match(he) && he.meta.condition || O(he), he;
        }();
        return Object.assign(we, {
          abort: ne,
          requestId: P,
          arg: M,
          unwrap() {
            return we.then(uL);
          }
        });
      };
    }
    return Object.assign(D, {
      pending: R,
      rejected: y,
      fulfilled: C,
      settled: aL(y, C),
      typePrefix: f
    });
  }
  return l.withTypes = () => l, l;
})();
function uL(l) {
  if (l.meta && l.meta.rejectedWithValue)
    throw l.payload;
  if (l.error)
    throw l.error;
  return l.payload;
}
function lL(l) {
  return l !== null && typeof l == "object" && typeof l.then == "function";
}
var sL = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function cL(l, f) {
  return `${l}/${f}`;
}
function fL({
  creators: l
} = {}) {
  var d;
  const f = (d = l == null ? void 0 : l.asyncThunk) == null ? void 0 : d[sL];
  return function(C) {
    const {
      name: R,
      reducerPath: y = R
    } = C;
    if (!R)
      throw new Error(process.env.NODE_ENV === "production" ? en(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && C.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const D = (typeof C.reducers == "function" ? C.reducers(pL()) : C.reducers) || {}, M = Object.keys(D), O = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, L = {
      addCase(ie, me) {
        const fe = typeof ie == "string" ? ie : ie.type;
        if (!fe)
          throw new Error(process.env.NODE_ENV === "production" ? en(12) : "`context.addCase` cannot be called with an empty action type");
        if (fe in O.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? en(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + fe);
        return O.sliceCaseReducersByType[fe] = me, L;
      },
      addMatcher(ie, me) {
        return O.sliceMatchers.push({
          matcher: ie,
          reducer: me
        }), L;
      },
      exposeAction(ie, me) {
        return O.actionCreators[ie] = me, L;
      },
      exposeCaseReducer(ie, me) {
        return O.sliceCaseReducersByName[ie] = me, L;
      }
    };
    M.forEach((ie) => {
      const me = D[ie], fe = {
        reducerName: ie,
        type: cL(R, ie),
        createNotation: typeof C.reducers == "function"
      };
      hL(me) ? yL(fe, me, L, f) : vL(fe, me, L);
    });
    function x() {
      if (process.env.NODE_ENV !== "production" && typeof C.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? en(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [ie = {}, me = [], fe = void 0] = typeof C.extraReducers == "function" ? r1(C.extraReducers) : [C.extraReducers], Re = {
        ...ie,
        ...O.sliceCaseReducersByType
      };
      return tL(C.initialState, (_e) => {
        for (let He in Re)
          _e.addCase(He, Re[He]);
        for (let He of O.sliceMatchers)
          _e.addMatcher(He.matcher, He.reducer);
        for (let He of me)
          _e.addMatcher(He.matcher, He.reducer);
        fe && _e.addDefaultCase(fe);
      });
    }
    const P = (ie) => ie, Q = /* @__PURE__ */ new Map();
    let I;
    function X(ie, me) {
      return I || (I = x()), I(ie, me);
    }
    function ne() {
      return I || (I = x()), I.getInitialState();
    }
    function we(ie, me = !1) {
      function fe(_e) {
        let He = _e[ie];
        if (typeof He > "u") {
          if (me)
            He = ne();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? en(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return He;
      }
      function Re(_e = P) {
        const He = yT(Q, me, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return yT(He, _e, {
          insert: () => {
            const bt = {};
            for (const [Nt, ht] of Object.entries(C.selectors ?? {}))
              bt[Nt] = dL(ht, _e, ne, me);
            return bt;
          }
        });
      }
      return {
        reducerPath: ie,
        getSelectors: Re,
        get selectors() {
          return Re(fe);
        },
        selectSlice: fe
      };
    }
    const he = {
      name: R,
      reducer: X,
      actions: O.actionCreators,
      caseReducers: O.sliceCaseReducersByName,
      getInitialState: ne,
      ...we(y),
      injectInto(ie, {
        reducerPath: me,
        ...fe
      } = {}) {
        const Re = me ?? y;
        return ie.inject({
          reducerPath: Re,
          reducer: X
        }, fe), {
          ...he,
          ...we(Re, !0)
        };
      }
    };
    return he;
  };
}
function dL(l, f, d, m) {
  function C(R, ...y) {
    let D = f(R);
    if (typeof D > "u") {
      if (m)
        D = d();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? en(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return l(D, ...y);
  }
  return C.unwrapped = l, C;
}
var pd = /* @__PURE__ */ fL();
function pL() {
  function l(f, d) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: f,
      ...d
    };
  }
  return l.withTypes = () => l, {
    reducer(f) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [f.name](...d) {
          return f(...d);
        }
      }[f.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(f, d) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: f,
        reducer: d
      };
    },
    asyncThunk: l
  };
}
function vL({
  type: l,
  reducerName: f,
  createNotation: d
}, m, C) {
  let R, y;
  if ("reducer" in m) {
    if (d && !mL(m))
      throw new Error(process.env.NODE_ENV === "production" ? en(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    R = m.reducer, y = m.prepare;
  } else
    R = m;
  C.addCase(l, R).exposeCaseReducer(f, R).exposeAction(f, y ? Zu(l, y) : Zu(l));
}
function hL(l) {
  return l._reducerDefinitionType === "asyncThunk";
}
function mL(l) {
  return l._reducerDefinitionType === "reducerWithPrepare";
}
function yL({
  type: l,
  reducerName: f
}, d, m, C) {
  if (!C)
    throw new Error(process.env.NODE_ENV === "production" ? en(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: R,
    fulfilled: y,
    pending: D,
    rejected: M,
    settled: O,
    options: L
  } = d, x = C(l, R, L);
  m.exposeAction(f, x), y && m.addCase(x.fulfilled, y), D && m.addCase(x.pending, D), M && m.addCase(x.rejected, M), O && m.addMatcher(x.settled, O), m.exposeCaseReducer(f, {
    fulfilled: y || Oy,
    pending: D || Oy,
    rejected: M || Oy,
    settled: O || Oy
  });
}
function Oy() {
}
var gL = (l, f) => {
  if (typeof l != "function")
    throw new Error(process.env.NODE_ENV === "production" ? en(32) : `${f} is not a function`);
}, rC = "listenerMiddleware", SL = (l) => {
  let {
    type: f,
    actionCreator: d,
    matcher: m,
    predicate: C,
    effect: R
  } = l;
  if (f)
    C = Zu(f).match;
  else if (d)
    f = d.type, C = d.match;
  else if (m)
    C = m;
  else if (!C)
    throw new Error(process.env.NODE_ENV === "production" ? en(21) : "Creating or removing a listener requires one of the known fields for matching an action");
  return gL(R, "options.listener"), {
    predicate: C,
    type: f,
    effect: R
  };
}, EL = Object.assign((l) => {
  const {
    type: f,
    predicate: d,
    effect: m
  } = SL(l);
  return {
    id: a1(),
    effect: m,
    type: f,
    predicate: d,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(process.env.NODE_ENV === "production" ? en(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => EL
}), CL = Object.assign(Zu(`${rC}/add`), {
  withTypes: () => CL
});
Zu(`${rC}/removeAll`);
var wL = Object.assign(Zu(`${rC}/remove`), {
  withTypes: () => wL
});
function en(l) {
  return `Minified Redux Toolkit error #${l}; visit https://redux-toolkit.js.org/Errors?code=${l} for the full message or use the non-minified dev environment for full errors. `;
}
function i1(l, f) {
  return function() {
    return l.apply(f, arguments);
  };
}
const { toString: RL } = Object.prototype, { getPrototypeOf: aC } = Object, qy = /* @__PURE__ */ ((l) => (f) => {
  const d = RL.call(f);
  return l[d] || (l[d] = d.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), lu = (l) => (l = l.toLowerCase(), (f) => qy(f) === l), Qy = (l) => (f) => typeof f === l, { isArray: vd } = Array, zv = Qy("undefined");
function bL(l) {
  return l !== null && !zv(l) && l.constructor !== null && !zv(l.constructor) && Fi(l.constructor.isBuffer) && l.constructor.isBuffer(l);
}
const o1 = lu("ArrayBuffer");
function TL(l) {
  let f;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? f = ArrayBuffer.isView(l) : f = l && l.buffer && o1(l.buffer), f;
}
const _L = Qy("string"), Fi = Qy("function"), u1 = Qy("number"), Gy = (l) => l !== null && typeof l == "object", xL = (l) => l === !0 || l === !1, Ny = (l) => {
  if (qy(l) !== "object")
    return !1;
  const f = aC(l);
  return (f === null || f === Object.prototype || Object.getPrototypeOf(f) === null) && !(Symbol.toStringTag in l) && !(Symbol.iterator in l);
}, DL = lu("Date"), OL = lu("File"), kL = lu("Blob"), NL = lu("FileList"), ML = (l) => Gy(l) && Fi(l.pipe), LL = (l) => {
  let f;
  return l && (typeof FormData == "function" && l instanceof FormData || Fi(l.append) && ((f = qy(l)) === "formdata" || // detect form-data instance
  f === "object" && Fi(l.toString) && l.toString() === "[object FormData]"));
}, AL = lu("URLSearchParams"), zL = (l) => l.trim ? l.trim() : l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function jv(l, f, { allOwnKeys: d = !1 } = {}) {
  if (l === null || typeof l > "u")
    return;
  let m, C;
  if (typeof l != "object" && (l = [l]), vd(l))
    for (m = 0, C = l.length; m < C; m++)
      f.call(null, l[m], m, l);
  else {
    const R = d ? Object.getOwnPropertyNames(l) : Object.keys(l), y = R.length;
    let D;
    for (m = 0; m < y; m++)
      D = R[m], f.call(null, l[D], D, l);
  }
}
function l1(l, f) {
  f = f.toLowerCase();
  const d = Object.keys(l);
  let m = d.length, C;
  for (; m-- > 0; )
    if (C = d[m], f === C.toLowerCase())
      return C;
  return null;
}
const s1 = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, c1 = (l) => !zv(l) && l !== s1;
function Q0() {
  const { caseless: l } = c1(this) && this || {}, f = {}, d = (m, C) => {
    const R = l && l1(f, C) || C;
    Ny(f[R]) && Ny(m) ? f[R] = Q0(f[R], m) : Ny(m) ? f[R] = Q0({}, m) : vd(m) ? f[R] = m.slice() : f[R] = m;
  };
  for (let m = 0, C = arguments.length; m < C; m++)
    arguments[m] && jv(arguments[m], d);
  return f;
}
const UL = (l, f, d, { allOwnKeys: m } = {}) => (jv(f, (C, R) => {
  d && Fi(C) ? l[R] = i1(C, d) : l[R] = C;
}, { allOwnKeys: m }), l), jL = (l) => (l.charCodeAt(0) === 65279 && (l = l.slice(1)), l), FL = (l, f, d, m) => {
  l.prototype = Object.create(f.prototype, m), l.prototype.constructor = l, Object.defineProperty(l, "super", {
    value: f.prototype
  }), d && Object.assign(l.prototype, d);
}, PL = (l, f, d, m) => {
  let C, R, y;
  const D = {};
  if (f = f || {}, l == null)
    return f;
  do {
    for (C = Object.getOwnPropertyNames(l), R = C.length; R-- > 0; )
      y = C[R], (!m || m(y, l, f)) && !D[y] && (f[y] = l[y], D[y] = !0);
    l = d !== !1 && aC(l);
  } while (l && (!d || d(l, f)) && l !== Object.prototype);
  return f;
}, HL = (l, f, d) => {
  l = String(l), (d === void 0 || d > l.length) && (d = l.length), d -= f.length;
  const m = l.indexOf(f, d);
  return m !== -1 && m === d;
}, VL = (l) => {
  if (!l)
    return null;
  if (vd(l))
    return l;
  let f = l.length;
  if (!u1(f))
    return null;
  const d = new Array(f);
  for (; f-- > 0; )
    d[f] = l[f];
  return d;
}, BL = /* @__PURE__ */ ((l) => (f) => l && f instanceof l)(typeof Uint8Array < "u" && aC(Uint8Array)), $L = (l, f) => {
  const m = (l && l[Symbol.iterator]).call(l);
  let C;
  for (; (C = m.next()) && !C.done; ) {
    const R = C.value;
    f.call(l, R[0], R[1]);
  }
}, IL = (l, f) => {
  let d;
  const m = [];
  for (; (d = l.exec(f)) !== null; )
    m.push(d);
  return m;
}, YL = lu("HTMLFormElement"), WL = (l) => l.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(d, m, C) {
    return m.toUpperCase() + C;
  }
), ST = (({ hasOwnProperty: l }) => (f, d) => l.call(f, d))(Object.prototype), qL = lu("RegExp"), f1 = (l, f) => {
  const d = Object.getOwnPropertyDescriptors(l), m = {};
  jv(d, (C, R) => {
    let y;
    (y = f(C, R, l)) !== !1 && (m[R] = y || C);
  }), Object.defineProperties(l, m);
}, QL = (l) => {
  f1(l, (f, d) => {
    if (Fi(l) && ["arguments", "caller", "callee"].indexOf(d) !== -1)
      return !1;
    const m = l[d];
    if (Fi(m)) {
      if (f.enumerable = !1, "writable" in f) {
        f.writable = !1;
        return;
      }
      f.set || (f.set = () => {
        throw Error("Can not rewrite read-only method '" + d + "'");
      });
    }
  });
}, GL = (l, f) => {
  const d = {}, m = (C) => {
    C.forEach((R) => {
      d[R] = !0;
    });
  };
  return vd(l) ? m(l) : m(String(l).split(f)), d;
}, KL = () => {
}, XL = (l, f) => (l = +l, Number.isFinite(l) ? l : f), M0 = "abcdefghijklmnopqrstuvwxyz", ET = "0123456789", d1 = {
  DIGIT: ET,
  ALPHA: M0,
  ALPHA_DIGIT: M0 + M0.toUpperCase() + ET
}, JL = (l = 16, f = d1.ALPHA_DIGIT) => {
  let d = "";
  const { length: m } = f;
  for (; l--; )
    d += f[Math.random() * m | 0];
  return d;
};
function ZL(l) {
  return !!(l && Fi(l.append) && l[Symbol.toStringTag] === "FormData" && l[Symbol.iterator]);
}
const eA = (l) => {
  const f = new Array(10), d = (m, C) => {
    if (Gy(m)) {
      if (f.indexOf(m) >= 0)
        return;
      if (!("toJSON" in m)) {
        f[C] = m;
        const R = vd(m) ? [] : {};
        return jv(m, (y, D) => {
          const M = d(y, C + 1);
          !zv(M) && (R[D] = M);
        }), f[C] = void 0, R;
      }
    }
    return m;
  };
  return d(l, 0);
}, tA = lu("AsyncFunction"), nA = (l) => l && (Gy(l) || Fi(l)) && Fi(l.then) && Fi(l.catch), ae = {
  isArray: vd,
  isArrayBuffer: o1,
  isBuffer: bL,
  isFormData: LL,
  isArrayBufferView: TL,
  isString: _L,
  isNumber: u1,
  isBoolean: xL,
  isObject: Gy,
  isPlainObject: Ny,
  isUndefined: zv,
  isDate: DL,
  isFile: OL,
  isBlob: kL,
  isRegExp: qL,
  isFunction: Fi,
  isStream: ML,
  isURLSearchParams: AL,
  isTypedArray: BL,
  isFileList: NL,
  forEach: jv,
  merge: Q0,
  extend: UL,
  trim: zL,
  stripBOM: jL,
  inherits: FL,
  toFlatObject: PL,
  kindOf: qy,
  kindOfTest: lu,
  endsWith: HL,
  toArray: VL,
  forEachEntry: $L,
  matchAll: IL,
  isHTMLForm: YL,
  hasOwnProperty: ST,
  hasOwnProp: ST,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: f1,
  freezeMethods: QL,
  toObjectSet: GL,
  toCamelCase: WL,
  noop: KL,
  toFiniteNumber: XL,
  findKey: l1,
  global: s1,
  isContextDefined: c1,
  ALPHABET: d1,
  generateString: JL,
  isSpecCompliantForm: ZL,
  toJSONObject: eA,
  isAsyncFn: tA,
  isThenable: nA
};
function Ht(l, f, d, m, C) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = l, this.name = "AxiosError", f && (this.code = f), d && (this.config = d), m && (this.request = m), C && (this.response = C);
}
ae.inherits(Ht, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: ae.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const p1 = Ht.prototype, v1 = {};
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
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((l) => {
  v1[l] = { value: l };
});
Object.defineProperties(Ht, v1);
Object.defineProperty(p1, "isAxiosError", { value: !0 });
Ht.from = (l, f, d, m, C, R) => {
  const y = Object.create(p1);
  return ae.toFlatObject(l, y, function(M) {
    return M !== Error.prototype;
  }, (D) => D !== "isAxiosError"), Ht.call(y, l.message, f, d, m, C), y.cause = l, y.name = l.name, R && Object.assign(y, R), y;
};
const rA = null;
function G0(l) {
  return ae.isPlainObject(l) || ae.isArray(l);
}
function h1(l) {
  return ae.endsWith(l, "[]") ? l.slice(0, -2) : l;
}
function CT(l, f, d) {
  return l ? l.concat(f).map(function(C, R) {
    return C = h1(C), !d && R ? "[" + C + "]" : C;
  }).join(d ? "." : "") : f;
}
function aA(l) {
  return ae.isArray(l) && !l.some(G0);
}
const iA = ae.toFlatObject(ae, {}, null, function(f) {
  return /^is[A-Z]/.test(f);
});
function Ky(l, f, d) {
  if (!ae.isObject(l))
    throw new TypeError("target must be an object");
  f = f || new FormData(), d = ae.toFlatObject(d, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(X, ne) {
    return !ae.isUndefined(ne[X]);
  });
  const m = d.metaTokens, C = d.visitor || L, R = d.dots, y = d.indexes, M = (d.Blob || typeof Blob < "u" && Blob) && ae.isSpecCompliantForm(f);
  if (!ae.isFunction(C))
    throw new TypeError("visitor must be a function");
  function O(I) {
    if (I === null)
      return "";
    if (ae.isDate(I))
      return I.toISOString();
    if (!M && ae.isBlob(I))
      throw new Ht("Blob is not supported. Use a Buffer instead.");
    return ae.isArrayBuffer(I) || ae.isTypedArray(I) ? M && typeof Blob == "function" ? new Blob([I]) : Buffer.from(I) : I;
  }
  function L(I, X, ne) {
    let we = I;
    if (I && !ne && typeof I == "object") {
      if (ae.endsWith(X, "{}"))
        X = m ? X : X.slice(0, -2), I = JSON.stringify(I);
      else if (ae.isArray(I) && aA(I) || (ae.isFileList(I) || ae.endsWith(X, "[]")) && (we = ae.toArray(I)))
        return X = h1(X), we.forEach(function(ie, me) {
          !(ae.isUndefined(ie) || ie === null) && f.append(
            // eslint-disable-next-line no-nested-ternary
            y === !0 ? CT([X], me, R) : y === null ? X : X + "[]",
            O(ie)
          );
        }), !1;
    }
    return G0(I) ? !0 : (f.append(CT(ne, X, R), O(I)), !1);
  }
  const x = [], P = Object.assign(iA, {
    defaultVisitor: L,
    convertValue: O,
    isVisitable: G0
  });
  function Q(I, X) {
    if (!ae.isUndefined(I)) {
      if (x.indexOf(I) !== -1)
        throw Error("Circular reference detected in " + X.join("."));
      x.push(I), ae.forEach(I, function(we, he) {
        (!(ae.isUndefined(we) || we === null) && C.call(
          f,
          we,
          ae.isString(he) ? he.trim() : he,
          X,
          P
        )) === !0 && Q(we, X ? X.concat(he) : [he]);
      }), x.pop();
    }
  }
  if (!ae.isObject(l))
    throw new TypeError("data must be an object");
  return Q(l), f;
}
function wT(l) {
  const f = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(l).replace(/[!'()~]|%20|%00/g, function(m) {
    return f[m];
  });
}
function iC(l, f) {
  this._pairs = [], l && Ky(l, this, f);
}
const m1 = iC.prototype;
m1.append = function(f, d) {
  this._pairs.push([f, d]);
};
m1.toString = function(f) {
  const d = f ? function(m) {
    return f.call(this, m, wT);
  } : wT;
  return this._pairs.map(function(C) {
    return d(C[0]) + "=" + d(C[1]);
  }, "").join("&");
};
function oA(l) {
  return encodeURIComponent(l).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function y1(l, f, d) {
  if (!f)
    return l;
  const m = d && d.encode || oA, C = d && d.serialize;
  let R;
  if (C ? R = C(f, d) : R = ae.isURLSearchParams(f) ? f.toString() : new iC(f, d).toString(m), R) {
    const y = l.indexOf("#");
    y !== -1 && (l = l.slice(0, y)), l += (l.indexOf("?") === -1 ? "?" : "&") + R;
  }
  return l;
}
class RT {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(f, d, m) {
    return this.handlers.push({
      fulfilled: f,
      rejected: d,
      synchronous: m ? m.synchronous : !1,
      runWhen: m ? m.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(f) {
    this.handlers[f] && (this.handlers[f] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(f) {
    ae.forEach(this.handlers, function(m) {
      m !== null && f(m);
    });
  }
}
const g1 = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, uA = typeof URLSearchParams < "u" ? URLSearchParams : iC, lA = typeof FormData < "u" ? FormData : null, sA = typeof Blob < "u" ? Blob : null, cA = {
  isBrowser: !0,
  classes: {
    URLSearchParams: uA,
    FormData: lA,
    Blob: sA
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, S1 = typeof window < "u" && typeof document < "u", fA = ((l) => S1 && ["ReactNative", "NativeScript", "NS"].indexOf(l) < 0)(typeof navigator < "u" && navigator.product), dA = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", pA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: S1,
  hasStandardBrowserEnv: fA,
  hasStandardBrowserWebWorkerEnv: dA
}, Symbol.toStringTag, { value: "Module" })), uu = {
  ...pA,
  ...cA
};
function vA(l, f) {
  return Ky(l, new uu.classes.URLSearchParams(), Object.assign({
    visitor: function(d, m, C, R) {
      return uu.isNode && ae.isBuffer(d) ? (this.append(m, d.toString("base64")), !1) : R.defaultVisitor.apply(this, arguments);
    }
  }, f));
}
function hA(l) {
  return ae.matchAll(/\w+|\[(\w*)]/g, l).map((f) => f[0] === "[]" ? "" : f[1] || f[0]);
}
function mA(l) {
  const f = {}, d = Object.keys(l);
  let m;
  const C = d.length;
  let R;
  for (m = 0; m < C; m++)
    R = d[m], f[R] = l[R];
  return f;
}
function E1(l) {
  function f(d, m, C, R) {
    let y = d[R++];
    if (y === "__proto__")
      return !0;
    const D = Number.isFinite(+y), M = R >= d.length;
    return y = !y && ae.isArray(C) ? C.length : y, M ? (ae.hasOwnProp(C, y) ? C[y] = [C[y], m] : C[y] = m, !D) : ((!C[y] || !ae.isObject(C[y])) && (C[y] = []), f(d, m, C[y], R) && ae.isArray(C[y]) && (C[y] = mA(C[y])), !D);
  }
  if (ae.isFormData(l) && ae.isFunction(l.entries)) {
    const d = {};
    return ae.forEachEntry(l, (m, C) => {
      f(hA(m), C, d, 0);
    }), d;
  }
  return null;
}
function yA(l, f, d) {
  if (ae.isString(l))
    try {
      return (f || JSON.parse)(l), ae.trim(l);
    } catch (m) {
      if (m.name !== "SyntaxError")
        throw m;
    }
  return (d || JSON.stringify)(l);
}
const oC = {
  transitional: g1,
  adapter: ["xhr", "http"],
  transformRequest: [function(f, d) {
    const m = d.getContentType() || "", C = m.indexOf("application/json") > -1, R = ae.isObject(f);
    if (R && ae.isHTMLForm(f) && (f = new FormData(f)), ae.isFormData(f))
      return C ? JSON.stringify(E1(f)) : f;
    if (ae.isArrayBuffer(f) || ae.isBuffer(f) || ae.isStream(f) || ae.isFile(f) || ae.isBlob(f))
      return f;
    if (ae.isArrayBufferView(f))
      return f.buffer;
    if (ae.isURLSearchParams(f))
      return d.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), f.toString();
    let D;
    if (R) {
      if (m.indexOf("application/x-www-form-urlencoded") > -1)
        return vA(f, this.formSerializer).toString();
      if ((D = ae.isFileList(f)) || m.indexOf("multipart/form-data") > -1) {
        const M = this.env && this.env.FormData;
        return Ky(
          D ? { "files[]": f } : f,
          M && new M(),
          this.formSerializer
        );
      }
    }
    return R || C ? (d.setContentType("application/json", !1), yA(f)) : f;
  }],
  transformResponse: [function(f) {
    const d = this.transitional || oC.transitional, m = d && d.forcedJSONParsing, C = this.responseType === "json";
    if (f && ae.isString(f) && (m && !this.responseType || C)) {
      const y = !(d && d.silentJSONParsing) && C;
      try {
        return JSON.parse(f);
      } catch (D) {
        if (y)
          throw D.name === "SyntaxError" ? Ht.from(D, Ht.ERR_BAD_RESPONSE, this, null, this.response) : D;
      }
    }
    return f;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: uu.classes.FormData,
    Blob: uu.classes.Blob
  },
  validateStatus: function(f) {
    return f >= 200 && f < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
ae.forEach(["delete", "get", "head", "post", "put", "patch"], (l) => {
  oC.headers[l] = {};
});
const uC = oC, gA = ae.toObjectSet([
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
  "user-agent"
]), SA = (l) => {
  const f = {};
  let d, m, C;
  return l && l.split(`
`).forEach(function(y) {
    C = y.indexOf(":"), d = y.substring(0, C).trim().toLowerCase(), m = y.substring(C + 1).trim(), !(!d || f[d] && gA[d]) && (d === "set-cookie" ? f[d] ? f[d].push(m) : f[d] = [m] : f[d] = f[d] ? f[d] + ", " + m : m);
  }), f;
}, bT = Symbol("internals");
function xv(l) {
  return l && String(l).trim().toLowerCase();
}
function My(l) {
  return l === !1 || l == null ? l : ae.isArray(l) ? l.map(My) : String(l);
}
function EA(l) {
  const f = /* @__PURE__ */ Object.create(null), d = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let m;
  for (; m = d.exec(l); )
    f[m[1]] = m[2];
  return f;
}
const CA = (l) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(l.trim());
function L0(l, f, d, m, C) {
  if (ae.isFunction(m))
    return m.call(this, f, d);
  if (C && (f = d), !!ae.isString(f)) {
    if (ae.isString(m))
      return f.indexOf(m) !== -1;
    if (ae.isRegExp(m))
      return m.test(f);
  }
}
function wA(l) {
  return l.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (f, d, m) => d.toUpperCase() + m);
}
function RA(l, f) {
  const d = ae.toCamelCase(" " + f);
  ["get", "set", "has"].forEach((m) => {
    Object.defineProperty(l, m + d, {
      value: function(C, R, y) {
        return this[m].call(this, f, C, R, y);
      },
      configurable: !0
    });
  });
}
class Xy {
  constructor(f) {
    f && this.set(f);
  }
  set(f, d, m) {
    const C = this;
    function R(D, M, O) {
      const L = xv(M);
      if (!L)
        throw new Error("header name must be a non-empty string");
      const x = ae.findKey(C, L);
      (!x || C[x] === void 0 || O === !0 || O === void 0 && C[x] !== !1) && (C[x || M] = My(D));
    }
    const y = (D, M) => ae.forEach(D, (O, L) => R(O, L, M));
    return ae.isPlainObject(f) || f instanceof this.constructor ? y(f, d) : ae.isString(f) && (f = f.trim()) && !CA(f) ? y(SA(f), d) : f != null && R(d, f, m), this;
  }
  get(f, d) {
    if (f = xv(f), f) {
      const m = ae.findKey(this, f);
      if (m) {
        const C = this[m];
        if (!d)
          return C;
        if (d === !0)
          return EA(C);
        if (ae.isFunction(d))
          return d.call(this, C, m);
        if (ae.isRegExp(d))
          return d.exec(C);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(f, d) {
    if (f = xv(f), f) {
      const m = ae.findKey(this, f);
      return !!(m && this[m] !== void 0 && (!d || L0(this, this[m], m, d)));
    }
    return !1;
  }
  delete(f, d) {
    const m = this;
    let C = !1;
    function R(y) {
      if (y = xv(y), y) {
        const D = ae.findKey(m, y);
        D && (!d || L0(m, m[D], D, d)) && (delete m[D], C = !0);
      }
    }
    return ae.isArray(f) ? f.forEach(R) : R(f), C;
  }
  clear(f) {
    const d = Object.keys(this);
    let m = d.length, C = !1;
    for (; m--; ) {
      const R = d[m];
      (!f || L0(this, this[R], R, f, !0)) && (delete this[R], C = !0);
    }
    return C;
  }
  normalize(f) {
    const d = this, m = {};
    return ae.forEach(this, (C, R) => {
      const y = ae.findKey(m, R);
      if (y) {
        d[y] = My(C), delete d[R];
        return;
      }
      const D = f ? wA(R) : String(R).trim();
      D !== R && delete d[R], d[D] = My(C), m[D] = !0;
    }), this;
  }
  concat(...f) {
    return this.constructor.concat(this, ...f);
  }
  toJSON(f) {
    const d = /* @__PURE__ */ Object.create(null);
    return ae.forEach(this, (m, C) => {
      m != null && m !== !1 && (d[C] = f && ae.isArray(m) ? m.join(", ") : m);
    }), d;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([f, d]) => f + ": " + d).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(f) {
    return f instanceof this ? f : new this(f);
  }
  static concat(f, ...d) {
    const m = new this(f);
    return d.forEach((C) => m.set(C)), m;
  }
  static accessor(f) {
    const m = (this[bT] = this[bT] = {
      accessors: {}
    }).accessors, C = this.prototype;
    function R(y) {
      const D = xv(y);
      m[D] || (RA(C, y), m[D] = !0);
    }
    return ae.isArray(f) ? f.forEach(R) : R(f), this;
  }
}
Xy.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
ae.reduceDescriptors(Xy.prototype, ({ value: l }, f) => {
  let d = f[0].toUpperCase() + f.slice(1);
  return {
    get: () => l,
    set(m) {
      this[d] = m;
    }
  };
});
ae.freezeMethods(Xy);
const el = Xy;
function A0(l, f) {
  const d = this || uC, m = f || d, C = el.from(m.headers);
  let R = m.data;
  return ae.forEach(l, function(D) {
    R = D.call(d, R, C.normalize(), f ? f.status : void 0);
  }), C.normalize(), R;
}
function C1(l) {
  return !!(l && l.__CANCEL__);
}
function Fv(l, f, d) {
  Ht.call(this, l ?? "canceled", Ht.ERR_CANCELED, f, d), this.name = "CanceledError";
}
ae.inherits(Fv, Ht, {
  __CANCEL__: !0
});
function bA(l, f, d) {
  const m = d.config.validateStatus;
  !d.status || !m || m(d.status) ? l(d) : f(new Ht(
    "Request failed with status code " + d.status,
    [Ht.ERR_BAD_REQUEST, Ht.ERR_BAD_RESPONSE][Math.floor(d.status / 100) - 4],
    d.config,
    d.request,
    d
  ));
}
const TA = uu.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(l, f, d, m, C, R) {
      const y = [l + "=" + encodeURIComponent(f)];
      ae.isNumber(d) && y.push("expires=" + new Date(d).toGMTString()), ae.isString(m) && y.push("path=" + m), ae.isString(C) && y.push("domain=" + C), R === !0 && y.push("secure"), document.cookie = y.join("; ");
    },
    read(l) {
      const f = document.cookie.match(new RegExp("(^|;\\s*)(" + l + ")=([^;]*)"));
      return f ? decodeURIComponent(f[3]) : null;
    },
    remove(l) {
      this.write(l, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function _A(l) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(l);
}
function xA(l, f) {
  return f ? l.replace(/\/?\/$/, "") + "/" + f.replace(/^\/+/, "") : l;
}
function w1(l, f) {
  return l && !_A(f) ? xA(l, f) : f;
}
const DA = uu.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const f = /(msie|trident)/i.test(navigator.userAgent), d = document.createElement("a");
    let m;
    function C(R) {
      let y = R;
      return f && (d.setAttribute("href", y), y = d.href), d.setAttribute("href", y), {
        href: d.href,
        protocol: d.protocol ? d.protocol.replace(/:$/, "") : "",
        host: d.host,
        search: d.search ? d.search.replace(/^\?/, "") : "",
        hash: d.hash ? d.hash.replace(/^#/, "") : "",
        hostname: d.hostname,
        port: d.port,
        pathname: d.pathname.charAt(0) === "/" ? d.pathname : "/" + d.pathname
      };
    }
    return m = C(window.location.href), function(y) {
      const D = ae.isString(y) ? C(y) : y;
      return D.protocol === m.protocol && D.host === m.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
function OA(l) {
  const f = /^([-+\w]{1,25})(:?\/\/|:)/.exec(l);
  return f && f[1] || "";
}
function kA(l, f) {
  l = l || 10;
  const d = new Array(l), m = new Array(l);
  let C = 0, R = 0, y;
  return f = f !== void 0 ? f : 1e3, function(M) {
    const O = Date.now(), L = m[R];
    y || (y = O), d[C] = M, m[C] = O;
    let x = R, P = 0;
    for (; x !== C; )
      P += d[x++], x = x % l;
    if (C = (C + 1) % l, C === R && (R = (R + 1) % l), O - y < f)
      return;
    const Q = L && O - L;
    return Q ? Math.round(P * 1e3 / Q) : void 0;
  };
}
function TT(l, f) {
  let d = 0;
  const m = kA(50, 250);
  return (C) => {
    const R = C.loaded, y = C.lengthComputable ? C.total : void 0, D = R - d, M = m(D), O = R <= y;
    d = R;
    const L = {
      loaded: R,
      total: y,
      progress: y ? R / y : void 0,
      bytes: D,
      rate: M || void 0,
      estimated: M && y && O ? (y - R) / M : void 0,
      event: C
    };
    L[f ? "download" : "upload"] = !0, l(L);
  };
}
const NA = typeof XMLHttpRequest < "u", MA = NA && function(l) {
  return new Promise(function(d, m) {
    let C = l.data;
    const R = el.from(l.headers).normalize();
    let { responseType: y, withXSRFToken: D } = l, M;
    function O() {
      l.cancelToken && l.cancelToken.unsubscribe(M), l.signal && l.signal.removeEventListener("abort", M);
    }
    let L;
    if (ae.isFormData(C)) {
      if (uu.hasStandardBrowserEnv || uu.hasStandardBrowserWebWorkerEnv)
        R.setContentType(!1);
      else if ((L = R.getContentType()) !== !1) {
        const [X, ...ne] = L ? L.split(";").map((we) => we.trim()).filter(Boolean) : [];
        R.setContentType([X || "multipart/form-data", ...ne].join("; "));
      }
    }
    let x = new XMLHttpRequest();
    if (l.auth) {
      const X = l.auth.username || "", ne = l.auth.password ? unescape(encodeURIComponent(l.auth.password)) : "";
      R.set("Authorization", "Basic " + btoa(X + ":" + ne));
    }
    const P = w1(l.baseURL, l.url);
    x.open(l.method.toUpperCase(), y1(P, l.params, l.paramsSerializer), !0), x.timeout = l.timeout;
    function Q() {
      if (!x)
        return;
      const X = el.from(
        "getAllResponseHeaders" in x && x.getAllResponseHeaders()
      ), we = {
        data: !y || y === "text" || y === "json" ? x.responseText : x.response,
        status: x.status,
        statusText: x.statusText,
        headers: X,
        config: l,
        request: x
      };
      bA(function(ie) {
        d(ie), O();
      }, function(ie) {
        m(ie), O();
      }, we), x = null;
    }
    if ("onloadend" in x ? x.onloadend = Q : x.onreadystatechange = function() {
      !x || x.readyState !== 4 || x.status === 0 && !(x.responseURL && x.responseURL.indexOf("file:") === 0) || setTimeout(Q);
    }, x.onabort = function() {
      x && (m(new Ht("Request aborted", Ht.ECONNABORTED, l, x)), x = null);
    }, x.onerror = function() {
      m(new Ht("Network Error", Ht.ERR_NETWORK, l, x)), x = null;
    }, x.ontimeout = function() {
      let ne = l.timeout ? "timeout of " + l.timeout + "ms exceeded" : "timeout exceeded";
      const we = l.transitional || g1;
      l.timeoutErrorMessage && (ne = l.timeoutErrorMessage), m(new Ht(
        ne,
        we.clarifyTimeoutError ? Ht.ETIMEDOUT : Ht.ECONNABORTED,
        l,
        x
      )), x = null;
    }, uu.hasStandardBrowserEnv && (D && ae.isFunction(D) && (D = D(l)), D || D !== !1 && DA(P))) {
      const X = l.xsrfHeaderName && l.xsrfCookieName && TA.read(l.xsrfCookieName);
      X && R.set(l.xsrfHeaderName, X);
    }
    C === void 0 && R.setContentType(null), "setRequestHeader" in x && ae.forEach(R.toJSON(), function(ne, we) {
      x.setRequestHeader(we, ne);
    }), ae.isUndefined(l.withCredentials) || (x.withCredentials = !!l.withCredentials), y && y !== "json" && (x.responseType = l.responseType), typeof l.onDownloadProgress == "function" && x.addEventListener("progress", TT(l.onDownloadProgress, !0)), typeof l.onUploadProgress == "function" && x.upload && x.upload.addEventListener("progress", TT(l.onUploadProgress)), (l.cancelToken || l.signal) && (M = (X) => {
      x && (m(!X || X.type ? new Fv(null, l, x) : X), x.abort(), x = null);
    }, l.cancelToken && l.cancelToken.subscribe(M), l.signal && (l.signal.aborted ? M() : l.signal.addEventListener("abort", M)));
    const I = OA(P);
    if (I && uu.protocols.indexOf(I) === -1) {
      m(new Ht("Unsupported protocol " + I + ":", Ht.ERR_BAD_REQUEST, l));
      return;
    }
    x.send(C || null);
  });
}, K0 = {
  http: rA,
  xhr: MA
};
ae.forEach(K0, (l, f) => {
  if (l) {
    try {
      Object.defineProperty(l, "name", { value: f });
    } catch {
    }
    Object.defineProperty(l, "adapterName", { value: f });
  }
});
const _T = (l) => `- ${l}`, LA = (l) => ae.isFunction(l) || l === null || l === !1, R1 = {
  getAdapter: (l) => {
    l = ae.isArray(l) ? l : [l];
    const { length: f } = l;
    let d, m;
    const C = {};
    for (let R = 0; R < f; R++) {
      d = l[R];
      let y;
      if (m = d, !LA(d) && (m = K0[(y = String(d)).toLowerCase()], m === void 0))
        throw new Ht(`Unknown adapter '${y}'`);
      if (m)
        break;
      C[y || "#" + R] = m;
    }
    if (!m) {
      const R = Object.entries(C).map(
        ([D, M]) => `adapter ${D} ` + (M === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let y = f ? R.length > 1 ? `since :
` + R.map(_T).join(`
`) : " " + _T(R[0]) : "as no adapter specified";
      throw new Ht(
        "There is no suitable adapter to dispatch the request " + y,
        "ERR_NOT_SUPPORT"
      );
    }
    return m;
  },
  adapters: K0
};
function z0(l) {
  if (l.cancelToken && l.cancelToken.throwIfRequested(), l.signal && l.signal.aborted)
    throw new Fv(null, l);
}
function xT(l) {
  return z0(l), l.headers = el.from(l.headers), l.data = A0.call(
    l,
    l.transformRequest
  ), ["post", "put", "patch"].indexOf(l.method) !== -1 && l.headers.setContentType("application/x-www-form-urlencoded", !1), R1.getAdapter(l.adapter || uC.adapter)(l).then(function(m) {
    return z0(l), m.data = A0.call(
      l,
      l.transformResponse,
      m
    ), m.headers = el.from(m.headers), m;
  }, function(m) {
    return C1(m) || (z0(l), m && m.response && (m.response.data = A0.call(
      l,
      l.transformResponse,
      m.response
    ), m.response.headers = el.from(m.response.headers))), Promise.reject(m);
  });
}
const DT = (l) => l instanceof el ? { ...l } : l;
function fd(l, f) {
  f = f || {};
  const d = {};
  function m(O, L, x) {
    return ae.isPlainObject(O) && ae.isPlainObject(L) ? ae.merge.call({ caseless: x }, O, L) : ae.isPlainObject(L) ? ae.merge({}, L) : ae.isArray(L) ? L.slice() : L;
  }
  function C(O, L, x) {
    if (ae.isUndefined(L)) {
      if (!ae.isUndefined(O))
        return m(void 0, O, x);
    } else
      return m(O, L, x);
  }
  function R(O, L) {
    if (!ae.isUndefined(L))
      return m(void 0, L);
  }
  function y(O, L) {
    if (ae.isUndefined(L)) {
      if (!ae.isUndefined(O))
        return m(void 0, O);
    } else
      return m(void 0, L);
  }
  function D(O, L, x) {
    if (x in f)
      return m(O, L);
    if (x in l)
      return m(void 0, O);
  }
  const M = {
    url: R,
    method: R,
    data: R,
    baseURL: y,
    transformRequest: y,
    transformResponse: y,
    paramsSerializer: y,
    timeout: y,
    timeoutMessage: y,
    withCredentials: y,
    withXSRFToken: y,
    adapter: y,
    responseType: y,
    xsrfCookieName: y,
    xsrfHeaderName: y,
    onUploadProgress: y,
    onDownloadProgress: y,
    decompress: y,
    maxContentLength: y,
    maxBodyLength: y,
    beforeRedirect: y,
    transport: y,
    httpAgent: y,
    httpsAgent: y,
    cancelToken: y,
    socketPath: y,
    responseEncoding: y,
    validateStatus: D,
    headers: (O, L) => C(DT(O), DT(L), !0)
  };
  return ae.forEach(Object.keys(Object.assign({}, l, f)), function(L) {
    const x = M[L] || C, P = x(l[L], f[L], L);
    ae.isUndefined(P) && x !== D || (d[L] = P);
  }), d;
}
const b1 = "1.6.8", lC = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((l, f) => {
  lC[l] = function(m) {
    return typeof m === l || "a" + (f < 1 ? "n " : " ") + l;
  };
});
const OT = {};
lC.transitional = function(f, d, m) {
  function C(R, y) {
    return "[Axios v" + b1 + "] Transitional option '" + R + "'" + y + (m ? ". " + m : "");
  }
  return (R, y, D) => {
    if (f === !1)
      throw new Ht(
        C(y, " has been removed" + (d ? " in " + d : "")),
        Ht.ERR_DEPRECATED
      );
    return d && !OT[y] && (OT[y] = !0, console.warn(
      C(
        y,
        " has been deprecated since v" + d + " and will be removed in the near future"
      )
    )), f ? f(R, y, D) : !0;
  };
};
function AA(l, f, d) {
  if (typeof l != "object")
    throw new Ht("options must be an object", Ht.ERR_BAD_OPTION_VALUE);
  const m = Object.keys(l);
  let C = m.length;
  for (; C-- > 0; ) {
    const R = m[C], y = f[R];
    if (y) {
      const D = l[R], M = D === void 0 || y(D, R, l);
      if (M !== !0)
        throw new Ht("option " + R + " must be " + M, Ht.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (d !== !0)
      throw new Ht("Unknown option " + R, Ht.ERR_BAD_OPTION);
  }
}
const X0 = {
  assertOptions: AA,
  validators: lC
}, ss = X0.validators;
class By {
  constructor(f) {
    this.defaults = f, this.interceptors = {
      request: new RT(),
      response: new RT()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(f, d) {
    try {
      return await this._request(f, d);
    } catch (m) {
      if (m instanceof Error) {
        let C;
        Error.captureStackTrace ? Error.captureStackTrace(C = {}) : C = new Error();
        const R = C.stack ? C.stack.replace(/^.+\n/, "") : "";
        m.stack ? R && !String(m.stack).endsWith(R.replace(/^.+\n.+\n/, "")) && (m.stack += `
` + R) : m.stack = R;
      }
      throw m;
    }
  }
  _request(f, d) {
    typeof f == "string" ? (d = d || {}, d.url = f) : d = f || {}, d = fd(this.defaults, d);
    const { transitional: m, paramsSerializer: C, headers: R } = d;
    m !== void 0 && X0.assertOptions(m, {
      silentJSONParsing: ss.transitional(ss.boolean),
      forcedJSONParsing: ss.transitional(ss.boolean),
      clarifyTimeoutError: ss.transitional(ss.boolean)
    }, !1), C != null && (ae.isFunction(C) ? d.paramsSerializer = {
      serialize: C
    } : X0.assertOptions(C, {
      encode: ss.function,
      serialize: ss.function
    }, !0)), d.method = (d.method || this.defaults.method || "get").toLowerCase();
    let y = R && ae.merge(
      R.common,
      R[d.method]
    );
    R && ae.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (I) => {
        delete R[I];
      }
    ), d.headers = el.concat(y, R);
    const D = [];
    let M = !0;
    this.interceptors.request.forEach(function(X) {
      typeof X.runWhen == "function" && X.runWhen(d) === !1 || (M = M && X.synchronous, D.unshift(X.fulfilled, X.rejected));
    });
    const O = [];
    this.interceptors.response.forEach(function(X) {
      O.push(X.fulfilled, X.rejected);
    });
    let L, x = 0, P;
    if (!M) {
      const I = [xT.bind(this), void 0];
      for (I.unshift.apply(I, D), I.push.apply(I, O), P = I.length, L = Promise.resolve(d); x < P; )
        L = L.then(I[x++], I[x++]);
      return L;
    }
    P = D.length;
    let Q = d;
    for (x = 0; x < P; ) {
      const I = D[x++], X = D[x++];
      try {
        Q = I(Q);
      } catch (ne) {
        X.call(this, ne);
        break;
      }
    }
    try {
      L = xT.call(this, Q);
    } catch (I) {
      return Promise.reject(I);
    }
    for (x = 0, P = O.length; x < P; )
      L = L.then(O[x++], O[x++]);
    return L;
  }
  getUri(f) {
    f = fd(this.defaults, f);
    const d = w1(f.baseURL, f.url);
    return y1(d, f.params, f.paramsSerializer);
  }
}
ae.forEach(["delete", "get", "head", "options"], function(f) {
  By.prototype[f] = function(d, m) {
    return this.request(fd(m || {}, {
      method: f,
      url: d,
      data: (m || {}).data
    }));
  };
});
ae.forEach(["post", "put", "patch"], function(f) {
  function d(m) {
    return function(R, y, D) {
      return this.request(fd(D || {}, {
        method: f,
        headers: m ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: R,
        data: y
      }));
    };
  }
  By.prototype[f] = d(), By.prototype[f + "Form"] = d(!0);
});
const Ly = By;
class sC {
  constructor(f) {
    if (typeof f != "function")
      throw new TypeError("executor must be a function.");
    let d;
    this.promise = new Promise(function(R) {
      d = R;
    });
    const m = this;
    this.promise.then((C) => {
      if (!m._listeners)
        return;
      let R = m._listeners.length;
      for (; R-- > 0; )
        m._listeners[R](C);
      m._listeners = null;
    }), this.promise.then = (C) => {
      let R;
      const y = new Promise((D) => {
        m.subscribe(D), R = D;
      }).then(C);
      return y.cancel = function() {
        m.unsubscribe(R);
      }, y;
    }, f(function(R, y, D) {
      m.reason || (m.reason = new Fv(R, y, D), d(m.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(f) {
    if (this.reason) {
      f(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(f) : this._listeners = [f];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(f) {
    if (!this._listeners)
      return;
    const d = this._listeners.indexOf(f);
    d !== -1 && this._listeners.splice(d, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let f;
    return {
      token: new sC(function(C) {
        f = C;
      }),
      cancel: f
    };
  }
}
const zA = sC;
function UA(l) {
  return function(d) {
    return l.apply(null, d);
  };
}
function jA(l) {
  return ae.isObject(l) && l.isAxiosError === !0;
}
const J0 = {
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
  NetworkAuthenticationRequired: 511
};
Object.entries(J0).forEach(([l, f]) => {
  J0[f] = l;
});
const FA = J0;
function T1(l) {
  const f = new Ly(l), d = i1(Ly.prototype.request, f);
  return ae.extend(d, Ly.prototype, f, { allOwnKeys: !0 }), ae.extend(d, f, null, { allOwnKeys: !0 }), d.create = function(C) {
    return T1(fd(l, C));
  }, d;
}
const zn = T1(uC);
zn.Axios = Ly;
zn.CanceledError = Fv;
zn.CancelToken = zA;
zn.isCancel = C1;
zn.VERSION = b1;
zn.toFormData = Ky;
zn.AxiosError = Ht;
zn.Cancel = zn.CanceledError;
zn.all = function(f) {
  return Promise.all(f);
};
zn.spread = UA;
zn.isAxiosError = jA;
zn.mergeConfig = fd;
zn.AxiosHeaders = el;
zn.formToJSON = (l) => E1(ae.isHTMLForm(l) ? new FormData(l) : l);
zn.getAdapter = R1.getAdapter;
zn.HttpStatusCode = FA;
zn.default = zn;
const ky = "http://localhost:8080", Cc = {
  users: {
    get: async () => await zn.get(`${ky}/api/json/users`)
  },
  me: {
    get: async () => await zn.get(`${ky}/api/json/me`)
  },
  messages: {
    get: async () => await zn.get(`${ky}/api/json/messages`)
  },
  message: {
    post: async (l) => {
      const { status: f } = await zn.post(`${ky}/api/json/message`, l);
      return f;
    }
  }
}, PA = {
  messages: [],
  status: "idle",
  error: null
}, Ay = dd(
  "messages/fetchMessages",
  async (l, { rejectWithValue: f }) => {
    const d = await Cc.messages.get();
    return d.status !== 200 ? f("Произошла ошибка") : d.data.answer.messages;
  }
), HA = pd({
  name: "messages",
  initialState: PA,
  reducers: {},
  selectors: {
    selectMessages: (l) => l.messages
  },
  extraReducers: (l) => {
    l.addCase(Ay.pending, (f) => {
      f.status = "pending", f.error = null;
    }).addCase(Ay.fulfilled, (f, d) => {
      f.status = "fulfilled", f.messages = d.payload;
    }).addCase(Ay.rejected, (f, d) => {
      f.status = "rejected", f.error = d.error.message ?? "Произошла ошибка";
    });
  }
}), { selectMessages: _1 } = HA.selectors, VA = {
  users: [],
  status: "idle",
  error: null
}, U0 = dd(
  "users/fetchUsers",
  async (l, { rejectWithValue: f }) => {
    const d = await Cc.users.get();
    return d.status !== 200 ? f("Произошла ошибка") : d.data.answer.users;
  }
), BA = pd({
  name: "users",
  initialState: VA,
  reducers: {},
  selectors: {
    selectUsers: (l) => l.users
  },
  extraReducers: (l) => {
    l.addCase(U0.pending, (f) => {
      f.status = "pending", f.error = null;
    }).addCase(U0.fulfilled, (f, d) => {
      f.status = "fulfilled", f.users = d.payload;
    }).addCase(U0.rejected, (f, d) => {
      f.status = "rejected", f.error = d.error.message ?? "Произошла ошибка";
    });
  }
}), { selectUsers: x1 } = BA.selectors, $A = (l) => {
  const f = new Date(l), d = f.toLocaleDateString(), m = f.toLocaleTimeString(), C = new Date(Date.now()).toLocaleDateString();
  return d === C ? m : d;
}, IA = ({ message: l }) => {
  var y, D, M;
  const f = Mv(_1), d = Mv(x1), m = !!l.replyTo && f.find((O) => O.id === l.replyTo), C = (y = d.find((O) => O.id === l.author)) == null ? void 0 : y.image, R = (O) => {
    const L = document.getElementById(`${O}`);
    L == null || L.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return /* @__PURE__ */ hn.jsx("li", { className: mo.message, id: `${l.id}`, children: /* @__PURE__ */ hn.jsxs("div", { className: mo.body, children: [
    /* @__PURE__ */ hn.jsx("span", { className: mo.time, children: $A(l.timestamp) }),
    /* @__PURE__ */ hn.jsxs("div", { className: mo.heading, children: [
      C && /* @__PURE__ */ hn.jsx("img", { className: mo.avatar, src: C, alt: "Аватар пользователя" }),
      /* @__PURE__ */ hn.jsx("span", { className: mo.authorName, children: (D = d.find((O) => O.id === l.author)) == null ? void 0 : D.name })
    ] }),
    !!m && /* @__PURE__ */ hn.jsxs("div", { className: mo.quote, onClick: () => R(l.replyTo), children: [
      /* @__PURE__ */ hn.jsxs("span", { className: mo.oval, children: [
        "Цитата ",
        /* @__PURE__ */ hn.jsx("span", { className: mo.quoteAuthor, children: (M = d.find((O) => O.id === m.author)) == null ? void 0 : M.name })
      ] }),
      /* @__PURE__ */ hn.jsx("span", { className: mo.quoteText, children: m.message })
    ] }),
    /* @__PURE__ */ hn.jsx("span", { className: mo.text, children: l.message })
  ] }) });
}, YA = "_list_11hv9_1", WA = {
  list: YA
}, qA = () => {
  const l = Mv(_1);
  return sd.useEffect(() => {
    const f = document.getElementById("anchor");
    f && f.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [l]), /* @__PURE__ */ hn.jsx("ul", { className: WA.list, children: l.map((f) => /* @__PURE__ */ hn.jsx(IA, { message: f }, f.id)) });
}, QA = "_form_1vyuo_1", GA = "_avatar_1vyuo_21", KA = "_text_1vyuo_33", XA = "_button_1vyuo_81", JA = "_tooltiptext_1vyuo_115", Dv = {
  form: QA,
  avatar: GA,
  text: KA,
  button: XA,
  tooltiptext: JA
}, ZA = {
  id: "",
  status: "idle",
  error: null
}, j0 = dd(
  "currentUser/fetchCurrentUser",
  async (l, { rejectWithValue: f }) => {
    const d = await Cc.me.get();
    return d.status !== 200 ? f("Произошла ошибка") : d.data.answer.me.id;
  }
), ez = pd({
  name: "currentUser",
  initialState: ZA,
  reducers: {},
  selectors: {
    selectCurrentUserId: (l) => l.id
  },
  extraReducers: (l) => {
    l.addCase(j0.pending, (f) => {
      f.status = "pending", f.error = null;
    }).addCase(j0.fulfilled, (f, d) => {
      f.status = "fulfilled", f.id = d.payload;
    }).addCase(j0.rejected, (f, d) => {
      f.status = "rejected", f.error = d.error.message ?? "Произошла ошибка";
    });
  }
}), { selectCurrentUserId: tz } = ez.selectors, nz = () => {
  var L;
  const l = Mv(x1), f = Mv(tz), [d, m] = sd.useState(""), C = sd.useRef(null), R = (L = l.find((x) => x.id === f)) == null ? void 0 : L.image, y = UT(), D = (x) => {
    m(x.target.value);
  }, M = (x) => {
    x.preventDefault(), !(!f || !d) && Cc.message.post({ author: f, message: d }).then((P) => {
      P === 200 && (y(Ay()), m(""));
    }).catch((P) => console.error(P));
  }, O = (x) => {
    var P;
    x.code === "Enter" && !x.shiftKey && ((P = C.current) == null || P.requestSubmit(), x.preventDefault());
  };
  return /* @__PURE__ */ hn.jsxs("form", { className: Dv.form, ref: C, onSubmit: M, children: [
    R && /* @__PURE__ */ hn.jsx("img", { className: Dv.avatar, src: R, alt: "Аватар текущего пользователя" }),
    /* @__PURE__ */ hn.jsx("span", { className: Dv.tooltiptext, children: "Shift + Enter - перевод строки" }),
    /* @__PURE__ */ hn.jsx(
      "textarea",
      {
        className: Dv.text,
        placeholder: "Написать сообщение...",
        required: !0,
        autoComplete: "off",
        onChange: D,
        onKeyDown: O,
        value: d
      }
    ),
    /* @__PURE__ */ hn.jsx("button", { className: Dv.button, type: "submit", children: "Отправить" })
  ] });
}, rz = {
  users: [],
  status: "idle",
  error: null
}, zy = dd(
  "users/fetchUsers",
  async (l, { rejectWithValue: f }) => {
    const d = await Cc.users.get();
    return d.status !== 200 ? f("Произошла ошибка") : d.data.answer.users;
  }
), D1 = pd({
  name: "users",
  initialState: rz,
  reducers: {},
  selectors: {
    selectUsers: (l) => l.users
  },
  extraReducers: (l) => {
    l.addCase(zy.pending, (f) => {
      f.status = "pending", f.error = null;
    }).addCase(zy.fulfilled, (f, d) => {
      f.status = "fulfilled", f.users = d.payload;
    }).addCase(zy.rejected, (f, d) => {
      f.status = "rejected", f.error = d.error.message ?? "Произошла ошибка";
    });
  }
});
D1.selectors;
const az = {
  messages: [],
  status: "idle",
  error: null
}, Uy = dd(
  "messages/fetchMessages",
  async (l, { rejectWithValue: f }) => {
    const d = await Cc.messages.get();
    return d.status !== 200 ? f("Произошла ошибка") : d.data.answer.messages;
  }
), O1 = pd({
  name: "messages",
  initialState: az,
  reducers: {},
  selectors: {
    selectMessages: (l) => l.messages
  },
  extraReducers: (l) => {
    l.addCase(Uy.pending, (f) => {
      f.status = "pending", f.error = null;
    }).addCase(Uy.fulfilled, (f, d) => {
      f.status = "fulfilled", f.messages = d.payload;
    }).addCase(Uy.rejected, (f, d) => {
      f.status = "rejected", f.error = d.error.message ?? "Произошла ошибка";
    });
  }
});
O1.selectors;
const iz = {
  id: "",
  status: "idle",
  error: null
}, jy = dd(
  "currentUser/fetchCurrentUser",
  async (l, { rejectWithValue: f }) => {
    const d = await Cc.me.get();
    return d.status !== 200 ? f("Произошла ошибка") : d.data.answer.me.id;
  }
), k1 = pd({
  name: "currentUser",
  initialState: iz,
  reducers: {},
  selectors: {
    selectCurrentUserId: (l) => l.id
  },
  extraReducers: (l) => {
    l.addCase(jy.pending, (f) => {
      f.status = "pending", f.error = null;
    }).addCase(jy.fulfilled, (f, d) => {
      f.status = "fulfilled", f.id = d.payload;
    }).addCase(jy.rejected, (f, d) => {
      f.status = "rejected", f.error = d.error.message ?? "Произошла ошибка";
    });
  }
});
k1.selectors;
function oz() {
  const l = UT();
  return sd.useEffect(() => {
    Promise.allSettled([
      l(zy()),
      l(Uy()),
      l(jy())
    ]);
  }, [l]), /* @__PURE__ */ hn.jsxs(hn.Fragment, { children: [
    /* @__PURE__ */ hn.jsx("h1", { children: "Тестовое задание ARORA" }),
    /* @__PURE__ */ hn.jsx(qA, {}),
    /* @__PURE__ */ hn.jsx(nz, {}),
    /* @__PURE__ */ hn.jsx("div", { id: "anchor" })
  ] });
}
const uz = ZM({
  reducer: {
    users: D1.reducer,
    messages: O1.reducer,
    currentUser: k1.reducer
  }
}), lz = ({ children: l }) => /* @__PURE__ */ hn.jsx(tM, { store: uz, children: l });
kv.createRoot(document.getElementById("app")).render(
  /* @__PURE__ */ hn.jsx(lz, { children: /* @__PURE__ */ hn.jsx(oz, {}) })
);
