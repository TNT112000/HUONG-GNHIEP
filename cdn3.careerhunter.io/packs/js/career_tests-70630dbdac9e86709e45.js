/*!For license information please see career_tests-70630dbdac9e86709e45.js.LICENSE.txt*/ ! function(e) {
	function t(t) {
		for (var n, i, s = t[0], c = t[1], l = t[2], f = 0, p = []; f < s.length; f++) i = s[f], Object.prototype.hasOwnProperty.call(o, i) && o[i] && p.push(o[i][0]), o[i] = 0;
		for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
		for (u && u(t); p.length;) p.shift()();
		return a.push.apply(a, l || []), r()
	}

	function r() {
		for (var e, t = 0; t < a.length; t++) {
			for (var r = a[t], n = !0, s = 1; s < r.length; s++) {
				var c = r[s];
				0 !== o[c] && (n = !1)
			}
			n && (a.splice(t--, 1), e = i(i.s = r[0]))
		}
		return e
	}
	var n = {},
		o = {
			6: 0
		},
		a = [];

	function i(t) {
		if (n[t]) return n[t].exports;
		var r = n[t] = {
			i: t,
			l: !1,
			exports: {}
		};
		return e[t].call(r.exports, r, r.exports, i), r.l = !0, r.exports
	}
	i.m = e, i.c = n, i.d = function(e, t, r) {
		i.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: r
		})
	}, i.r = function(e) {
		"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, i.t = function(e, t) {
		if (1 & t && (e = i(e)), 8 & t) return e;
		if (4 & t && "object" === typeof e && e && e.__esModule) return e;
		var r = Object.create(null);
		if (i.r(r), Object.defineProperty(r, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var n in e) i.d(r, n, function(t) {
				return e[t]
			}.bind(null, n));
		return r
	}, i.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return i.d(t, "a", t), t
	}, i.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, i.p = "//cdn0.careerhunter.io/packs/";
	var s = window.webpackJsonp = window.webpackJsonp || [],
		c = s.push.bind(s);
	s.push = t, s = s.slice();
	for (var l = 0; l < s.length; l++) t(s[l]);
	var u = c;
	a.push([785, 0, 1]), r()
}([, , function(e, t, r) {
	"use strict";
	r.d(t, "a", (function() {
		return u
	})), r.d(t, "b", (function() {
		return H
	})), r.d(t, "d", (function() {
		return Y
	})), r.d(t, "e", (function() {
		return $
	})), r.d(t, "c", (function() {
		return j
	}));
	var n = r(0),
		o = r.n(n),
		a = o.a.createContext(null);
	var i = function(e) {
			e()
		},
		s = {
			notify: function() {}
		};

	function c() {
		var e = i,
			t = null,
			r = null;
		return {
			clear: function() {
				t = null, r = null
			},
			notify: function() {
				e((function() {
					for (var e = t; e;) e.callback(), e = e.next
				}))
			},
			get: function() {
				for (var e = [], r = t; r;) e.push(r), r = r.next;
				return e
			},
			subscribe: function(e) {
				var n = !0,
					o = r = {
						callback: e,
						next: null,
						prev: r
					};
				return o.prev ? o.prev.next = o : t = o,
					function() {
						n && null !== t && (n = !1, o.next ? o.next.prev = o.prev : r = o.prev, o.prev ? o.prev.next = o.next : t = o.next)
					}
			}
		}
	}
	var l = function() {
		function e(e, t) {
			this.store = e, this.parentSub = t, this.unsubscribe = null, this.listeners = s, this.handleChangeWrapper = this.handleChangeWrapper.bind(this)
		}
		var t = e.prototype;
		return t.addNestedSub = function(e) {
			return this.trySubscribe(), this.listeners.subscribe(e)
		}, t.notifyNestedSubs = function() {
			this.listeners.notify()
		}, t.handleChangeWrapper = function() {
			this.onStateChange && this.onStateChange()
		}, t.isSubscribed = function() {
			return Boolean(this.unsubscribe)
		}, t.trySubscribe = function() {
			this.unsubscribe || (this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper), this.listeners = c())
		}, t.tryUnsubscribe = function() {
			this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null, this.listeners.clear(), this.listeners = s)
		}, e
	}();
	var u = function(e) {
			var t = e.store,
				r = e.context,
				i = e.children,
				s = Object(n.useMemo)((function() {
					var e = new l(t);
					return e.onStateChange = e.notifyNestedSubs, {
						store: t,
						subscription: e
					}
				}), [t]),
				c = Object(n.useMemo)((function() {
					return t.getState()
				}), [t]);
			Object(n.useEffect)((function() {
				var e = s.subscription;
				return e.trySubscribe(), c !== t.getState() && e.notifyNestedSubs(),
					function() {
						e.tryUnsubscribe(), e.onStateChange = null
					}
			}), [s, c]);
			var u = r || a;
			return o.a.createElement(u.Provider, {
				value: s
			}, i)
		},
		f = r(18),
		p = r(24),
		d = r(103),
		h = r.n(d),
		m = r(95),
		v = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement ? n.useLayoutEffect : n.useEffect,
		y = [],
		b = [null, null];

	function g(e, t) {
		var r = e[1];
		return [t.payload, r + 1]
	}

	function w(e, t, r) {
		v((function() {
			return e.apply(void 0, t)
		}), r)
	}

	function E(e, t, r, n, o, a, i) {
		e.current = n, t.current = o, r.current = !1, a.current && (a.current = null, i())
	}

	function _(e, t, r, n, o, a, i, s, c, l) {
		if (e) {
			var u = !1,
				f = null,
				p = function() {
					if (!u) {
						var e, r, p = t.getState();
						try {
							e = n(p, o.current)
						} catch (d) {
							r = d, f = d
						}
						r || (f = null), e === a.current ? i.current || c() : (a.current = e, s.current = e, i.current = !0, l({
							type: "STORE_UPDATED",
							payload: {
								error: r
							}
						}))
					}
				};
			r.onStateChange = p, r.trySubscribe(), p();
			return function() {
				if (u = !0, r.tryUnsubscribe(), r.onStateChange = null, f) throw f
			}
		}
	}
	var O = function() {
		return [null, 0]
	};

	function S(e, t) {
		void 0 === t && (t = {});
		var r = t,
			i = r.getDisplayName,
			s = void 0 === i ? function(e) {
				return "ConnectAdvanced(" + e + ")"
			} : i,
			c = r.methodName,
			u = void 0 === c ? "connectAdvanced" : c,
			d = r.renderCountProp,
			v = void 0 === d ? void 0 : d,
			S = r.shouldHandleStateChanges,
			T = void 0 === S || S,
			j = r.storeKey,
			x = void 0 === j ? "store" : j,
			P = (r.withRef, r.forwardRef),
			k = void 0 !== P && P,
			N = r.context,
			R = void 0 === N ? a : N,
			C = Object(p.a)(r, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]),
			L = R;
		return function(t) {
			var r = t.displayName || t.name || "Component",
				a = s(r),
				i = Object(f.a)({}, C, {
					getDisplayName: s,
					methodName: u,
					renderCountProp: v,
					shouldHandleStateChanges: T,
					storeKey: x,
					displayName: a,
					wrappedComponentName: r,
					WrappedComponent: t
				}),
				c = C.pure;
			var d = c ? n.useMemo : function(e) {
				return e()
			};

			function S(r) {
				var a = Object(n.useMemo)((function() {
						var e = r.reactReduxForwardedRef,
							t = Object(p.a)(r, ["reactReduxForwardedRef"]);
						return [r.context, e, t]
					}), [r]),
					s = a[0],
					c = a[1],
					u = a[2],
					h = Object(n.useMemo)((function() {
						return s && s.Consumer && Object(m.isContextConsumer)(o.a.createElement(s.Consumer, null)) ? s : L
					}), [s, L]),
					v = Object(n.useContext)(h),
					S = Boolean(r.store) && Boolean(r.store.getState) && Boolean(r.store.dispatch);
				Boolean(v) && Boolean(v.store);
				var j = S ? r.store : v.store,
					x = Object(n.useMemo)((function() {
						return function(t) {
							return e(t.dispatch, i)
						}(j)
					}), [j]),
					P = Object(n.useMemo)((function() {
						if (!T) return b;
						var e = new l(j, S ? null : v.subscription),
							t = e.notifyNestedSubs.bind(e);
						return [e, t]
					}), [j, S, v]),
					k = P[0],
					N = P[1],
					R = Object(n.useMemo)((function() {
						return S ? v : Object(f.a)({}, v, {
							subscription: k
						})
					}), [S, v, k]),
					C = Object(n.useReducer)(g, y, O),
					A = C[0][0],
					I = C[1];
				if (A && A.error) throw A.error;
				var M = Object(n.useRef)(),
					D = Object(n.useRef)(u),
					U = Object(n.useRef)(),
					F = Object(n.useRef)(!1),
					B = d((function() {
						return U.current && u === D.current ? U.current : x(j.getState(), u)
					}), [j, A, u]);
				w(E, [D, M, F, u, B, U, N]), w(_, [T, j, k, x, D, M, F, U, N, I], [j, k, x]);
				var H = Object(n.useMemo)((function() {
					return o.a.createElement(t, Object(f.a)({}, B, {
						ref: c
					}))
				}), [c, t, B]);
				return Object(n.useMemo)((function() {
					return T ? o.a.createElement(h.Provider, {
						value: R
					}, H) : H
				}), [h, H, R])
			}
			var j = c ? o.a.memo(S) : S;
			if (j.WrappedComponent = t, j.displayName = a, k) {
				var P = o.a.forwardRef((function(e, t) {
					return o.a.createElement(j, Object(f.a)({}, e, {
						reactReduxForwardedRef: t
					}))
				}));
				return P.displayName = a, P.WrappedComponent = t, h()(P, t)
			}
			return h()(j, t)
		}
	}

	function T(e, t) {
		return e === t ? 0 !== e || 0 !== t || 1 / e === 1 / t : e !== e && t !== t
	}

	function j(e, t) {
		if (T(e, t)) return !0;
		if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
		var r = Object.keys(e),
			n = Object.keys(t);
		if (r.length !== n.length) return !1;
		for (var o = 0; o < r.length; o++)
			if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !T(e[r[o]], t[r[o]])) return !1;
		return !0
	}
	var x = r(10);

	function P(e) {
		return function(t, r) {
			var n = e(t, r);

			function o() {
				return n
			}
			return o.dependsOnOwnProps = !1, o
		}
	}

	function k(e) {
		return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps ? Boolean(e.dependsOnOwnProps) : 1 !== e.length
	}

	function N(e, t) {
		return function(t, r) {
			r.displayName;
			var n = function(e, t) {
				return n.dependsOnOwnProps ? n.mapToProps(e, t) : n.mapToProps(e)
			};
			return n.dependsOnOwnProps = !0, n.mapToProps = function(t, r) {
				n.mapToProps = e, n.dependsOnOwnProps = k(e);
				var o = n(t, r);
				return "function" === typeof o && (n.mapToProps = o, n.dependsOnOwnProps = k(o), o = n(t, r)), o
			}, n
		}
	}
	var R = [function(e) {
		return "function" === typeof e ? N(e) : void 0
	}, function(e) {
		return e ? void 0 : P((function(e) {
			return {
				dispatch: e
			}
		}))
	}, function(e) {
		return e && "object" === typeof e ? P((function(t) {
			return Object(x.b)(e, t)
		})) : void 0
	}];
	var C = [function(e) {
		return "function" === typeof e ? N(e) : void 0
	}, function(e) {
		return e ? void 0 : P((function() {
			return {}
		}))
	}];

	function L(e, t, r) {
		return Object(f.a)({}, r, e, t)
	}
	var A = [function(e) {
		return "function" === typeof e ? function(e) {
			return function(t, r) {
				r.displayName;
				var n, o = r.pure,
					a = r.areMergedPropsEqual,
					i = !1;
				return function(t, r, s) {
					var c = e(t, r, s);
					return i ? o && a(c, n) || (n = c) : (i = !0, n = c), n
				}
			}
		}(e) : void 0
	}, function(e) {
		return e ? void 0 : function() {
			return L
		}
	}];

	function I(e, t, r, n) {
		return function(o, a) {
			return r(e(o, a), t(n, a), a)
		}
	}

	function M(e, t, r, n, o) {
		var a, i, s, c, l, u = o.areStatesEqual,
			f = o.areOwnPropsEqual,
			p = o.areStatePropsEqual,
			d = !1;

		function h(o, d) {
			var h, m, v = !f(d, i),
				y = !u(o, a);
			return a = o, i = d, v && y ? (s = e(a, i), t.dependsOnOwnProps && (c = t(n, i)), l = r(s, c, i)) : v ? (e.dependsOnOwnProps && (s = e(a, i)), t.dependsOnOwnProps && (c = t(n, i)), l = r(s, c, i)) : y ? (h = e(a, i), m = !p(h, s), s = h, m && (l = r(s, c, i)), l) : l
		}
		return function(o, u) {
			return d ? h(o, u) : (s = e(a = o, i = u), c = t(n, i), l = r(s, c, i), d = !0, l)
		}
	}

	function D(e, t) {
		var r = t.initMapStateToProps,
			n = t.initMapDispatchToProps,
			o = t.initMergeProps,
			a = Object(p.a)(t, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]),
			i = r(e, a),
			s = n(e, a),
			c = o(e, a);
		return (a.pure ? M : I)(i, s, c, e, a)
	}

	function U(e, t, r) {
		for (var n = t.length - 1; n >= 0; n--) {
			var o = t[n](e);
			if (o) return o
		}
		return function(t, n) {
			throw new Error("Invalid value of type " + typeof e + " for " + r + " argument when connecting component " + n.wrappedComponentName + ".")
		}
	}

	function F(e, t) {
		return e === t
	}

	function B(e) {
		var t = void 0 === e ? {} : e,
			r = t.connectHOC,
			n = void 0 === r ? S : r,
			o = t.mapStateToPropsFactories,
			a = void 0 === o ? C : o,
			i = t.mapDispatchToPropsFactories,
			s = void 0 === i ? R : i,
			c = t.mergePropsFactories,
			l = void 0 === c ? A : c,
			u = t.selectorFactory,
			d = void 0 === u ? D : u;
		return function(e, t, r, o) {
			void 0 === o && (o = {});
			var i = o,
				c = i.pure,
				u = void 0 === c || c,
				h = i.areStatesEqual,
				m = void 0 === h ? F : h,
				v = i.areOwnPropsEqual,
				y = void 0 === v ? j : v,
				b = i.areStatePropsEqual,
				g = void 0 === b ? j : b,
				w = i.areMergedPropsEqual,
				E = void 0 === w ? j : w,
				_ = Object(p.a)(i, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]),
				O = U(e, a, "mapStateToProps"),
				S = U(t, s, "mapDispatchToProps"),
				T = U(r, l, "mergeProps");
			return n(d, Object(f.a)({
				methodName: "connect",
				getDisplayName: function(e) {
					return "Connect(" + e + ")"
				},
				shouldHandleStateChanges: Boolean(e),
				initMapStateToProps: O,
				initMapDispatchToProps: S,
				initMergeProps: T,
				pure: u,
				areStatesEqual: m,
				areOwnPropsEqual: y,
				areStatePropsEqual: g,
				areMergedPropsEqual: E
			}, _))
		}
	}
	var H = B();

	function G() {
		return Object(n.useContext)(a)
	}

	function W(e) {
		void 0 === e && (e = a);
		var t = e === a ? G : function() {
			return Object(n.useContext)(e)
		};
		return function() {
			return t().store
		}
	}
	var q = W();

	function z(e) {
		void 0 === e && (e = a);
		var t = e === a ? q : W(e);
		return function() {
			return t().dispatch
		}
	}
	var Y = z(),
		V = function(e, t) {
			return e === t
		};

	function K(e) {
		void 0 === e && (e = a);
		var t = e === a ? G : function() {
			return Object(n.useContext)(e)
		};
		return function(e, r) {
			void 0 === r && (r = V);
			var o = t(),
				a = function(e, t, r, o) {
					var a, i = Object(n.useReducer)((function(e) {
							return e + 1
						}), 0)[1],
						s = Object(n.useMemo)((function() {
							return new l(r, o)
						}), [r, o]),
						c = Object(n.useRef)(),
						u = Object(n.useRef)(),
						f = Object(n.useRef)(),
						p = Object(n.useRef)(),
						d = r.getState();
					try {
						a = e !== u.current || d !== f.current || c.current ? e(d) : p.current
					} catch (h) {
						throw c.current && (h.message += "\nThe error may be correlated with this previous error:\n" + c.current.stack + "\n\n"), h
					}
					return v((function() {
						u.current = e, f.current = d, p.current = a, c.current = void 0
					})), v((function() {
						function e() {
							try {
								var e = u.current(r.getState());
								if (t(e, p.current)) return;
								p.current = e
							} catch (h) {
								c.current = h
							}
							i()
						}
						return s.onStateChange = e, s.trySubscribe(), e(),
							function() {
								return s.tryUnsubscribe()
							}
					}), [r, s]), a
				}(e, r, o.store, o.subscription);
			return Object(n.useDebugValue)(a), a
		}
	}
	var X, $ = K(),
		Q = r(14);
	X = Q.unstable_batchedUpdates, i = X
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return a
	}));
	var n = r(0),
		o = r.n(n);

	function a(e) {
		var t = function(e) {
				var t = e.target.getBoundingClientRect(),
					r = {
						top: t.top + window.scrollY,
						left: t.left + window.scrollX
					},
					n = e.pageX - r.left,
					o = e.pageY - r.top;
				e.target.querySelector(".button__hovered") && (e.target.querySelector(".button__hovered").style.top = o + "px", e.target.querySelector(".button__hovered").style.left = n + "px")
			},
			r = e.color || "green",
			n = ["button", "button--".concat(r), "before-fade-in", "fade-in"];
		return e.className && n.push(e.className), e.span ? o.a.createElement("span", {
			className: n.join(" "),
			onMouseEnter: t
		}, e.children, o.a.createElement("span", {
			className: "button__hovered"
		})) : e.href ? o.a.createElement("a", Object.assign({
			className: n.join(" "),
			href: e.href
		}, e.hrefOpts || {}, {
			onMouseEnter: t
		}), e.children, o.a.createElement("span", {
			className: "button__hovered"
		})) : o.a.createElement("button", {
			className: n.join(" "),
			onClick: e.onClick,
			style: e.style,
			onMouseEnter: t
		}, e.children, o.a.createElement("span", {
			className: "button__hovered"
		}))
	}
}, function(e, t, r) {
	e.exports = r(181)()
}, , , , function(e, t, r) {
	"use strict";

	function n(e) {
		if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}
	r.d(t, "a", (function() {
		return n
	}))
}, , function(e, t, r) {
	"use strict";
	r.d(t, "a", (function() {
		return v
	})), r.d(t, "b", (function() {
		return f
	})), r.d(t, "c", (function() {
		return l
	})), r.d(t, "d", (function() {
		return s
	}));
	var n = r(73),
		o = function() {
			return Math.random().toString(36).substring(7).split("").join(".")
		},
		a = {
			INIT: "@@redux/INIT" + o(),
			REPLACE: "@@redux/REPLACE" + o(),
			PROBE_UNKNOWN_ACTION: function() {
				return "@@redux/PROBE_UNKNOWN_ACTION" + o()
			}
		};

	function i(e) {
		if ("object" !== typeof e || null === e) return !1;
		for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
		return Object.getPrototypeOf(e) === t
	}

	function s(e, t, r) {
		var o;
		if ("function" === typeof t && "function" === typeof r || "function" === typeof r && "function" === typeof arguments[3]) throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");
		if ("function" === typeof t && "undefined" === typeof r && (r = t, t = void 0), "undefined" !== typeof r) {
			if ("function" !== typeof r) throw new Error("Expected the enhancer to be a function.");
			return r(s)(e, t)
		}
		if ("function" !== typeof e) throw new Error("Expected the reducer to be a function.");
		var c = e,
			l = t,
			u = [],
			f = u,
			p = !1;

		function d() {
			f === u && (f = u.slice())
		}

		function h() {
			if (p) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
			return l
		}

		function m(e) {
			if ("function" !== typeof e) throw new Error("Expected the listener to be a function.");
			if (p) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
			var t = !0;
			return d(), f.push(e),
				function() {
					if (t) {
						if (p) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
						t = !1, d();
						var r = f.indexOf(e);
						f.splice(r, 1), u = null
					}
				}
		}

		function v(e) {
			if (!i(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
			if ("undefined" === typeof e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
			if (p) throw new Error("Reducers may not dispatch actions.");
			try {
				p = !0, l = c(l, e)
			} finally {
				p = !1
			}
			for (var t = u = f, r = 0; r < t.length; r++) {
				(0, t[r])()
			}
			return e
		}

		function y(e) {
			if ("function" !== typeof e) throw new Error("Expected the nextReducer to be a function.");
			c = e, v({
				type: a.REPLACE
			})
		}

		function b() {
			var e, t = m;
			return (e = {
				subscribe: function(e) {
					if ("object" !== typeof e || null === e) throw new TypeError("Expected the observer to be an object.");

					function r() {
						e.next && e.next(h())
					}
					return r(), {
						unsubscribe: t(r)
					}
				}
			})[n.a] = function() {
				return this
			}, e
		}
		return v({
			type: a.INIT
		}), (o = {
			dispatch: v,
			subscribe: m,
			getState: h,
			replaceReducer: y
		})[n.a] = b, o
	}

	function c(e, t) {
		var r = t && t.type;
		return "Given " + (r && 'action "' + String(r) + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
	}

	function l(e) {
		for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
			var o = t[n];
			0, "function" === typeof e[o] && (r[o] = e[o])
		}
		var i, s = Object.keys(r);
		try {
			! function(e) {
				Object.keys(e).forEach((function(t) {
					var r = e[t];
					if ("undefined" === typeof r(void 0, {
							type: a.INIT
						})) throw new Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
					if ("undefined" === typeof r(void 0, {
							type: a.PROBE_UNKNOWN_ACTION()
						})) throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + a.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')
				}))
			}(r)
		} catch (l) {
			i = l
		}
		return function(e, t) {
			if (void 0 === e && (e = {}), i) throw i;
			for (var n = !1, o = {}, a = 0; a < s.length; a++) {
				var l = s[a],
					u = r[l],
					f = e[l],
					p = u(f, t);
				if ("undefined" === typeof p) {
					var d = c(l, t);
					throw new Error(d)
				}
				o[l] = p, n = n || p !== f
			}
			return (n = n || s.length !== Object.keys(e).length) ? o : e
		}
	}

	function u(e, t) {
		return function() {
			return t(e.apply(this, arguments))
		}
	}

	function f(e, t) {
		if ("function" === typeof e) return u(e, t);
		if ("object" !== typeof e || null === e) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
		var r = {};
		for (var n in e) {
			var o = e[n];
			"function" === typeof o && (r[n] = u(o, t))
		}
		return r
	}

	function p(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function d(e, t) {
		var r = Object.keys(e);
		return Object.getOwnPropertySymbols && r.push.apply(r, Object.getOwnPropertySymbols(e)), t && (r = r.filter((function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable
		}))), r
	}

	function h(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? d(r, !0).forEach((function(t) {
				p(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(r).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function m() {
		for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
		return 0 === t.length ? function(e) {
			return e
		} : 1 === t.length ? t[0] : t.reduce((function(e, t) {
			return function() {
				return e(t.apply(void 0, arguments))
			}
		}))
	}

	function v() {
		for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
		return function(e) {
			return function() {
				var r = e.apply(void 0, arguments),
					n = function() {
						throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")
					},
					o = {
						getState: r.getState,
						dispatch: function() {
							return n.apply(void 0, arguments)
						}
					},
					a = t.map((function(e) {
						return e(o)
					}));
				return h({}, r, {
					dispatch: n = m.apply(void 0, a)(r.dispatch)
				})
			}
		}
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "LOAD_USER_STATEMENT_TEST", (function() {
		return n
	})), r.d(t, "SET_USER_STATEMENT_TEST", (function() {
		return o
	})), r.d(t, "USER_START_STATEMENT_TEST", (function() {
		return a
	})), r.d(t, "USER_GO_PREV_STATEMENT_TEST_PAGE", (function() {
		return i
	})), r.d(t, "USER_GO_NEXT_STATEMENT_TEST_PAGE", (function() {
		return s
	})), r.d(t, "USER_SKIP_STATEMENT_TEST_PAGE", (function() {
		return c
	})), r.d(t, "USER_GO_TO_STATEMENT_TEST_OVERVIEW", (function() {
		return l
	})), r.d(t, "USER_NAVIGATE_STATEMENT_TEST_TO_PAGE", (function() {
		return u
	})), r.d(t, "USER_DRAG_STATEMENT_TEST_STATEMENTS", (function() {
		return f
	})), r.d(t, "USER_BACK_TO_STATEMENT_TEST", (function() {
		return p
	})), r.d(t, "USER_SUCCESSFULLY_SUBMITTED_STATEMENT_TEST", (function() {
		return d
	})), r.d(t, "SET_SHOW_SAVE_PROGRESS", (function() {
		return h
	})), r.d(t, "LOAD_USER_APTITUDE_TEST", (function() {
		return m
	})), r.d(t, "USER_START_APTITUDE_TEST", (function() {
		return v
	})), r.d(t, "USER_GO_PREV_APTITUDE_TEST_PAGE", (function() {
		return y
	})), r.d(t, "USER_GO_NEXT_APTITUDE_TEST_PAGE", (function() {
		return b
	})), r.d(t, "USER_GO_TO_APTITUDE_TEST_OVERVIEW", (function() {
		return g
	})), r.d(t, "USER_NAVIGATE_APTITUDE_TEST_TO_PAGE", (function() {
		return w
	})), r.d(t, "USER_ANSWER_APTITUDE_TEST_QUESTION", (function() {
		return E
	})), r.d(t, "USER_BACK_TO_APTITUDE_TEST", (function() {
		return _
	})), r.d(t, "USER_APTITUDE_TEST_TIMEOUT", (function() {
		return O
	})), r.d(t, "USER_SUCCESSFULLY_SUBMITTED_APTITUDE_TEST", (function() {
		return S
	})), r.d(t, "USER_GO_EXAMPLE_APTITUDE_TEST_PAGE", (function() {
		return T
	})), r.d(t, "USER_GO_PREV_EXAMPLE_APTITUDE_TEST_PAGE", (function() {
		return j
	})), r.d(t, "USER_GO_NEXT_EXAMPLE_APTITUDE_TEST_PAGE", (function() {
		return x
	})), r.d(t, "USER_SKIP_EXAMPLE_QUESTIONS", (function() {
		return P
	})), r.d(t, "USER_ANSWER_EXAMPLE_APTITUDE_TEST_QUESTION", (function() {
		return k
	})), r.d(t, "USER_HIDE_TIME_WARNING_APTITUDE_TEST", (function() {
		return N
	}));
	var n = "LOAD_USER_STATEMENT_TEST",
		o = "SET_USER_STATEMENT_TEST",
		a = "USER_START_STATEMENT_TEST",
		i = "USER_GO_PREV_STATEMENT_TEST_PAGE",
		s = "USER_GO_NEXT_STATEMENT_TEST_PAGE",
		c = "USER_SKIP_STATEMENT_TEST_PAGE",
		l = "USER_GO_TO_STATEMENT_TEST_OVERVIEW",
		u = "USER_NAVIGATE_STATEMENT_TEST_TO_PAGE",
		f = "USER_DRAG_STATEMENT_TEST_STATEMENTS",
		p = "USER_BACK_TO_STATEMENT_TEST",
		d = "USER_SUCCESSFULLY_SUBMITTED_STATEMENT_TEST",
		h = "SET_SHOW_SAVE_PROGRESS",
		m = "LOAD_USER_APTITUDE_TEST",
		v = "USER_START_APTITUDE_TEST",
		y = "USER_GO_PREV_APTITUDE_TEST_PAGE",
		b = "USER_GO_NEXT_APTITUDE_TEST_PAGE",
		g = "USER_GO_TO_APTITUDE_TEST_OVERVIEW",
		w = "USER_NAVIGATE_APTITUDE_TEST_TO_PAGE",
		E = "USER_ANSWER_APTITUDE_TEST_QUESTION",
		_ = "USER_BACK_TO_APTITUDE_TEST",
		O = "USER_APTITUDE_TEST_TIMEOUT",
		S = "USER_SUCCESSFULLY_SUBMITTED_APTITUDE_TEST",
		T = "USER_GO_EXAMPLE_APTITUDE_TEST_PAGE",
		j = "USER_GO_PREV_EXAMPLE_APTITUDE_TEST_PAGE",
		x = "USER_GO_NEXT_EXAMPLE_APTITUDE_TEST_PAGE",
		P = "USER_SKIP_EXAMPLE_QUESTIONS",
		k = "USER_ANSWER_EXAMPLE_APTITUDE_TEST_QUESTION",
		N = "USER_HIDE_TIME_WARNING_APTITUDE_TEST"
}, function(e, t, r) {
	"use strict";

	function n(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}
	r.d(t, "a", (function() {
		return n
	}))
}, , , function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "SETUP_INITIAL_FILTERS_STATE", (function() {
		return n
	})), r.d(t, "ADD_FILTER_VALUE", (function() {
		return o
	})), r.d(t, "DELETE_FILTER_VALUE", (function() {
		return a
	})), r.d(t, "SET_Q_SEARCH_FILTER", (function() {
		return i
	})), r.d(t, "SET_LOCATION_FILTER", (function() {
		return s
	})), r.d(t, "SET_NEED_REFRESH_SEARCH", (function() {
		return c
	})), r.d(t, "DELETE_ALL_FILTERS", (function() {
		return l
	})), r.d(t, "SET_DASHBOARD_USER", (function() {
		return u
	})), r.d(t, "REFRESH_DASHBOARD_USER", (function() {
		return f
	}));
	var n = "SETUP_INITIAL_FILTERS_STATE",
		o = "ADD_FILTER_VALUE",
		a = "DELETE_FILTER_VALUE",
		i = "SET_Q_SEARCH_FILTER",
		s = "SET_LOCATION_FILTER",
		c = "SET_NEED_REFRESH_SEARCH",
		l = "DELETE_ALL_FILTERS",
		u = "SET_DASHBOARD_USER",
		f = "REFRESH_DASHBOARD_USER"
}, function(e, t, r) {
	"use strict";
	r.r(t);
	r(0);
	var n = r(3);
	t.default = n.default
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "generateForm", (function() {
		return o
	})), r.d(t, "generateInput", (function() {
		return a
	})), r.d(t, "generateRandomScore", (function() {
		return i
	})), r.d(t, "customPriceRounding", (function() {
		return s
	})), r.d(t, "priceFormatting", (function() {
		return c
	})), r.d(t, "calcUserProgress", (function() {
		return l
	})), r.d(t, "scrollToError", (function() {
		return u
	})), r.d(t, "ordinalSuffixOf", (function() {
		return f
	})), r.d(t, "isSmallScreen", (function() {
		return p
	})), r.d(t, "utm", (function() {
		return d
	})), r.d(t, "isDevice", (function() {
		return h
	}));
	var n = r(19);

	function o(e) {
		var t = document.createElement("FORM");
		return t.style = "display: none", t.method = "POST", t.action = e, t
	}

	function a(e, t) {
		var r = document.createElement("INPUT");
		return r.type = "TEXT", r.name = e, r.value = t, r
	}

	function i() {
		return Math.floor(50 * Math.random() + 50)
	}

	function s(e) {
		var t = Math.round(100 * e) / 100;
		if (t < .5) return t;
		var r = Math.round(t % 1 * 100) / 100;
		return r > .5 ? t = Math.floor(t) + .99 : r < .49 && (t = Math.floor(t) - .01), t
	}

	function c(e, t) {
		return "".concat(t).concat(e.toLocaleString("en-US", {
			minimumFractionDigits: 2
		}))
	}

	function l(e) {
		var t = 0;
		return ["interests_status", "personality_status", "motivators_status", "abstract_status", "numerical_status", "verbal_status"].map((function(r) {
			"started" === e[r] ? t += 10 : "finished" === e[r] && (t += 15)
		})), e.full_access && (t += 10), t
	}

	function u(e) {
		var t = document.querySelector("div.err, small.error");
		if (t) {
			void 0 === e && (e = 0);
			var r = t.offsetTop;
			r && window.scrollTo({
				top: r - 80 - e,
				behavior: "smooth"
			})
		}
	}

	function f(e) {
		if (0 == e) return 0;
		var t = e % 10,
			r = e % 100;
		return 1 == t && 11 != r ? e + "st" : 2 == t && 12 != r ? e + "nd" : 3 == t && 13 != r ? e + "rd" : e + "th"
	}

	function p() {
		return window.innerWidth < n.MOBILE_BREAKEPOINT
	}

	function d(e, t) {
		return "".concat(e).concat(e.includes("?") ? "&" : "?", "utm_source=careerhunter&utm_medium=email&utm_campaign=").concat(t)
	}

	function h() {
		var e = navigator.userAgent || navigator.vendor || window.opera;
		return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))
	}
}, function(e, t, r) {
	"use strict";

	function n() {
		return (n = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var r = arguments[t];
				for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
			}
			return e
		}).apply(this, arguments)
	}
	r.d(t, "a", (function() {
		return n
	}))
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "G_CAPTCHA_DISABLED", (function() {
		return n
	})), r.d(t, "MOBILE_BREAKEPOINT", (function() {
		return o
	})), r.d(t, "disableCaptchaForTest", (function() {
		return a
	})), r.d(t, "AGE_GROUPS", (function() {
		return i
	})), r.d(t, "GENDERS", (function() {
		return s
	}));
	var n = !1,
		o = 640;

	function a() {
		new URLSearchParams(location.search);
		return !1
	}
	var i = [{
			label: "Under 18 years old",
			value: "under_18"
		}, {
			label: "18-24 years old",
			value: "from_18_to_24"
		}, {
			label: "25-34 years old",
			value: "from_25_to_34"
		}, {
			label: "35-44 years old",
			value: "from_35_to_44"
		}, {
			label: "45-54 years old",
			value: "from_45_to_54"
		}, {
			label: "55-64 years old",
			value: "from_55_to_64"
		}, {
			label: "65 years or older",
			value: "from_65"
		}, {
			label: "I prefer not to say",
			value: "not_say_age"
		}],
		s = [{
			label: "Male",
			value: "male"
		}, {
			label: "Female",
			value: "female"
		}, {
			label: "Non-binary",
			value: "non_binary"
		}, {
			label: "I prefer not to say",
			value: "not_say"
		}]
}, , function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n);

	function a(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function i(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function s(e, t) {
		return (s = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function c(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = u(e);
			if (t) {
				var o = u(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return l(this, r)
		}
	}

	function l(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function u(e) {
		return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var f = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && s(e, t)
		}(u, e);
		var t, r, n, l = c(u);

		function u() {
			var e;
			i(this, u);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = l.call.apply(l, [this].concat(r))).renderLabel = function() {
				return o.a.createElement("span", {
					className: "agreeText"
				}, "I agree to the ", o.a.createElement("a", {
					href: "/terms",
					target: "_blank"
				}, "Terms"), " and ", o.a.createElement("a", {
					href: "/privacy",
					target: "_blank"
				}, "Privacy"))
			}, e
		}
		return t = u, r && a(t.prototype, r), n && a(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), t
	}(r(22).default);
	t.default = f
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(1);

	function i(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function s(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function c(e, t) {
		return (c = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function l(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = f(e);
			if (t) {
				var o = f(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return u(this, r)
		}
	}

	function u(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function f(e) {
		return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var p = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && c(e, t)
		}(f, e);
		var t, r, n, u = l(f);

		function f() {
			var e;
			i(this, f);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = u.call.apply(u, [this].concat(r))).state = {
				className: e.props.className || "",
				position: e.props.position || "left",
				animationEnabled: !1
			}, e.onChange = function(t) {
				e.setState({
					animationEnabled: !0
				}), e.props.onChange(t)
			}, e.renderLabel = function() {
				return o.a.createElement("span", {
					className: "check-text"
				}, e.props.label)
			}, e
		}
		return t = f, (r = [{
			key: "render",
			value: function() {
				var e = this.props.errorTypeMessage ? a.ErrorMessage : a.ErrorTooltip;
				return o.a.createElement("div", {
					className: "".concat(this.state.className, " input-tick").concat(this.state.animationEnabled ? " addAnimation" : "")
				}, o.a.createElement("label", null, o.a.createElement("input", {
					type: "checkbox",
					value: this.props.value || !1,
					onChange: this.onChange,
					name: this.props.name,
					checked: this.props.value || !1,
					disabled: this.props.disabled || !1
				}), o.a.createElement("div", {
					className: "checkbox-material"
				}, o.a.createElement("div", {
					className: "custom-checkbox"
				})), this.renderLabel()), this.props.errorMessage ? o.a.createElement(e, {
					message: this.props.errorMessage
				}) : null)
			}
		}]) && s(t.prototype, r), n && s(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), f
	}(o.a.Component);
	t.default = p
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "isEventFromHandle", (function() {
		return c
	})), r.d(t, "isValueOutOfRange", (function() {
		return l
	})), r.d(t, "isNotTouchEvent", (function() {
		return u
	})), r.d(t, "getClosestPoint", (function() {
		return f
	})), r.d(t, "getPrecision", (function() {
		return p
	})), r.d(t, "getMousePosition", (function() {
		return d
	})), r.d(t, "getTouchPosition", (function() {
		return h
	})), r.d(t, "getHandleCenterPosition", (function() {
		return m
	})), r.d(t, "ensureValueInRange", (function() {
		return v
	})), r.d(t, "ensureValuePrecision", (function() {
		return y
	})), r.d(t, "pauseEvent", (function() {
		return b
	})), r.d(t, "calculateNextValue", (function() {
		return g
	})), r.d(t, "getKeyboardValueMutator", (function() {
		return w
	}));
	var n = r(14),
		o = r(76),
		a = r.n(o);

	function i(e) {
		return function(e) {
			if (Array.isArray(e)) return s(e)
		}(e) || function(e) {
			if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
		}(e) || function(e, t) {
			if (!e) return;
			if ("string" === typeof e) return s(e, t);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			"Object" === r && e.constructor && (r = e.constructor.name);
			if ("Map" === r || "Set" === r) return Array.from(e);
			if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return s(e, t)
		}(e) || function() {
			throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function s(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
		return n
	}

	function c(e, t) {
		try {
			return Object.keys(t).some((function(r) {
				return e.target === Object(n.findDOMNode)(t[r])
			}))
		} catch (r) {
			return !1
		}
	}

	function l(e, t) {
		var r = t.min,
			n = t.max;
		return e < r || e > n
	}

	function u(e) {
		return e.touches.length > 1 || "touchend" === e.type.toLowerCase() && e.touches.length > 0
	}

	function f(e, t) {
		var r = t.marks,
			n = t.step,
			o = t.min,
			a = t.max,
			s = Object.keys(r).map(parseFloat);
		if (null !== n) {
			var c = Math.floor((a - o) / n),
				l = Math.min((e - o) / n, c),
				u = Math.round(l) * n + o;
			s.push(u)
		}
		var f = s.map((function(t) {
			return Math.abs(e - t)
		}));
		return s[f.indexOf(Math.min.apply(Math, i(f)))]
	}

	function p(e) {
		var t = e.toString(),
			r = 0;
		return t.indexOf(".") >= 0 && (r = t.length - t.indexOf(".") - 1), r
	}

	function d(e, t) {
		return e ? t.clientY : t.pageX
	}

	function h(e, t) {
		return e ? t.touches[0].clientY : t.touches[0].pageX
	}

	function m(e, t) {
		var r = t.getBoundingClientRect();
		return e ? r.top + .5 * r.height : window.pageXOffset + r.left + .5 * r.width
	}

	function v(e, t) {
		var r = t.max,
			n = t.min;
		return e <= n ? n : e >= r ? r : e
	}

	function y(e, t) {
		var r = t.step,
			n = isFinite(f(e, t)) ? f(e, t) : 0;
		return null === r ? n : parseFloat(n.toFixed(p(r)))
	}

	function b(e) {
		e.stopPropagation(), e.preventDefault()
	}

	function g(e, t, r) {
		var n = {
				increase: function(e, t) {
					return e + t
				},
				decrease: function(e, t) {
					return e - t
				}
			},
			o = n[e](Object.keys(r.marks).indexOf(JSON.stringify(t)), 1),
			a = Object.keys(r.marks)[o];
		return r.step ? n[e](t, r.step) : Object.keys(r.marks).length && r.marks[a] ? r.marks[a] : t
	}

	function w(e, t, r) {
		var n = "increase";
		switch (e.keyCode) {
			case a.a.UP:
				n = t && r ? "decrease" : "increase";
				break;
			case a.a.RIGHT:
				n = !t && r ? "decrease" : "increase";
				break;
			case a.a.DOWN:
				n = t && r ? "increase" : "decrease";
				break;
			case a.a.LEFT:
				n = !t && r ? "increase" : "decrease";
				break;
			case a.a.END:
				return function(e, t) {
					return t.max
				};
			case a.a.HOME:
				return function(e, t) {
					return t.min
				};
			case a.a.PAGE_UP:
				return function(e, t) {
					return e + 2 * t.step
				};
			case a.a.PAGE_DOWN:
				return function(e, t) {
					return e - 2 * t.step
				};
			default:
				return
		}
		return function(e, t) {
			return g(n, e, t)
		}
	}
}, function(e, t, r) {
	"use strict";

	function n(e, t) {
		if (null == e) return {};
		var r, n, o = {},
			a = Object.keys(e);
		for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
		return o
	}
	r.d(t, "a", (function() {
		return n
	}))
}, , , function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(1);

	function o() {
		o = function() {
			return e
		};
		var e = {},
			t = Object.prototype,
			r = t.hasOwnProperty,
			n = "function" == typeof Symbol ? Symbol : {},
			a = n.iterator || "@@iterator",
			i = n.asyncIterator || "@@asyncIterator",
			s = n.toStringTag || "@@toStringTag";

		function c(e, t, r) {
			return Object.defineProperty(e, t, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}), e[t]
		}
		try {
			c({}, "")
		} catch (x) {
			c = function(e, t, r) {
				return e[t] = r
			}
		}

		function l(e, t, r, n) {
			var o = t && t.prototype instanceof p ? t : p,
				a = Object.create(o.prototype),
				i = new S(n || []);
			return a._invoke = function(e, t, r) {
				var n = "suspendedStart";
				return function(o, a) {
					if ("executing" === n) throw new Error("Generator is already running");
					if ("completed" === n) {
						if ("throw" === o) throw a;
						return j()
					}
					for (r.method = o, r.arg = a;;) {
						var i = r.delegate;
						if (i) {
							var s = E(i, r);
							if (s) {
								if (s === f) continue;
								return s
							}
						}
						if ("next" === r.method) r.sent = r._sent = r.arg;
						else if ("throw" === r.method) {
							if ("suspendedStart" === n) throw n = "completed", r.arg;
							r.dispatchException(r.arg)
						} else "return" === r.method && r.abrupt("return", r.arg);
						n = "executing";
						var c = u(e, t, r);
						if ("normal" === c.type) {
							if (n = r.done ? "completed" : "suspendedYield", c.arg === f) continue;
							return {
								value: c.arg,
								done: r.done
							}
						}
						"throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
					}
				}
			}(e, r, i), a
		}

		function u(e, t, r) {
			try {
				return {
					type: "normal",
					arg: e.call(t, r)
				}
			} catch (x) {
				return {
					type: "throw",
					arg: x
				}
			}
		}
		e.wrap = l;
		var f = {};

		function p() {}

		function d() {}

		function h() {}
		var m = {};
		c(m, a, (function() {
			return this
		}));
		var v = Object.getPrototypeOf,
			y = v && v(v(T([])));
		y && y !== t && r.call(y, a) && (m = y);
		var b = h.prototype = p.prototype = Object.create(m);

		function g(e) {
			["next", "throw", "return"].forEach((function(t) {
				c(e, t, (function(e) {
					return this._invoke(t, e)
				}))
			}))
		}

		function w(e, t) {
			var n;
			this._invoke = function(o, a) {
				function i() {
					return new t((function(n, i) {
						! function n(o, a, i, s) {
							var c = u(e[o], e, a);
							if ("throw" !== c.type) {
								var l = c.arg,
									f = l.value;
								return f && "object" == typeof f && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
									n("next", e, i, s)
								}), (function(e) {
									n("throw", e, i, s)
								})) : t.resolve(f).then((function(e) {
									l.value = e, i(l)
								}), (function(e) {
									return n("throw", e, i, s)
								}))
							}
							s(c.arg)
						}(o, a, n, i)
					}))
				}
				return n = n ? n.then(i, i) : i()
			}
		}

		function E(e, t) {
			var r = e.iterator[t.method];
			if (void 0 === r) {
				if (t.delegate = null, "throw" === t.method) {
					if (e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method)) return f;
					t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
				}
				return f
			}
			var n = u(r, e.iterator, t.arg);
			if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, f;
			var o = n.arg;
			return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, f) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, f)
		}

		function _(e) {
			var t = {
				tryLoc: e[0]
			};
			1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
		}

		function O(e) {
			var t = e.completion || {};
			t.type = "normal", delete t.arg, e.completion = t
		}

		function S(e) {
			this.tryEntries = [{
				tryLoc: "root"
			}], e.forEach(_, this), this.reset(!0)
		}

		function T(e) {
			if (e) {
				var t = e[a];
				if (t) return t.call(e);
				if ("function" == typeof e.next) return e;
				if (!isNaN(e.length)) {
					var n = -1,
						o = function t() {
							for (; ++n < e.length;)
								if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
							return t.value = void 0, t.done = !0, t
						};
					return o.next = o
				}
			}
			return {
				next: j
			}
		}

		function j() {
			return {
				value: void 0,
				done: !0
			}
		}
		return d.prototype = h, c(b, "constructor", h), c(h, "constructor", d), d.displayName = c(h, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
			var t = "function" == typeof e && e.constructor;
			return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
		}, e.mark = function(e) {
			return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, c(e, s, "GeneratorFunction")), e.prototype = Object.create(b), e
		}, e.awrap = function(e) {
			return {
				__await: e
			}
		}, g(w.prototype), c(w.prototype, i, (function() {
			return this
		})), e.AsyncIterator = w, e.async = function(t, r, n, o, a) {
			void 0 === a && (a = Promise);
			var i = new w(l(t, r, n, o), a);
			return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
				return e.done ? e.value : i.next()
			}))
		}, g(b), c(b, s, "Generator"), c(b, a, (function() {
			return this
		})), c(b, "toString", (function() {
			return "[object Generator]"
		})), e.keys = function(e) {
			var t = [];
			for (var r in e) t.push(r);
			return t.reverse(),
				function r() {
					for (; t.length;) {
						var n = t.pop();
						if (n in e) return r.value = n, r.done = !1, r
					}
					return r.done = !0, r
				}
		}, e.values = T, S.prototype = {
			constructor: S,
			reset: function(e) {
				if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !e)
					for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
			},
			stop: function() {
				this.done = !0;
				var e = this.tryEntries[0].completion;
				if ("throw" === e.type) throw e.arg;
				return this.rval
			},
			dispatchException: function(e) {
				if (this.done) throw e;
				var t = this;

				function n(r, n) {
					return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
				}
				for (var o = this.tryEntries.length - 1; o >= 0; --o) {
					var a = this.tryEntries[o],
						i = a.completion;
					if ("root" === a.tryLoc) return n("end");
					if (a.tryLoc <= this.prev) {
						var s = r.call(a, "catchLoc"),
							c = r.call(a, "finallyLoc");
						if (s && c) {
							if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
							if (this.prev < a.finallyLoc) return n(a.finallyLoc)
						} else if (s) {
							if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
						} else {
							if (!c) throw new Error("try statement without catch or finally");
							if (this.prev < a.finallyLoc) return n(a.finallyLoc)
						}
					}
				}
			},
			abrupt: function(e, t) {
				for (var n = this.tryEntries.length - 1; n >= 0; --n) {
					var o = this.tryEntries[n];
					if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
						var a = o;
						break
					}
				}
				a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
				var i = a ? a.completion : {};
				return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, f) : this.complete(i)
			},
			complete: function(e, t) {
				if ("throw" === e.type) throw e.arg;
				return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
			},
			finish: function(e) {
				for (var t = this.tryEntries.length - 1; t >= 0; --t) {
					var r = this.tryEntries[t];
					if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), O(r), f
				}
			},
			catch: function(e) {
				for (var t = this.tryEntries.length - 1; t >= 0; --t) {
					var r = this.tryEntries[t];
					if (r.tryLoc === e) {
						var n = r.completion;
						if ("throw" === n.type) {
							var o = n.arg;
							O(r)
						}
						return o
					}
				}
				throw new Error("illegal catch attempt")
			},
			delegateYield: function(e, t, r) {
				return this.delegate = {
					iterator: T(e),
					resultName: t,
					nextLoc: r
				}, "next" === this.method && (this.arg = void 0), f
			}
		}, e
	}

	function a(e, t, r, n, o, a, i) {
		try {
			var s = e[a](i),
				c = s.value
		} catch (l) {
			return void r(l)
		}
		s.done ? t(c) : Promise.resolve(c).then(n, o)
	}

	function i(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}
	var s = function() {
		function e() {
			! function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, e)
		}
		var t, r, s;
		return t = e, s = [{
			key: "getUser",
			value: function(e) {
				var t = {
					email: e.email
				};
				return fetch(n.actions.postRequest("/api/sessions", t)).then(n.actions.status).then(n.actions.json).then((function(e) {
					return e
				}))
			}
		}, {
			key: "beforeLoginUser",
			value: function(e) {
				var t = {
					user: {
						email: e.email,
						password: e.password,
						remember_me: e.remember_me
					}
				};
				return fetch(n.actions.postRequest("/before-login", t)).then(n.actions.status).then(n.actions.json).then((function(e) {
					return e
				}))
			}
		}, {
			key: "loginUser",
			value: function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					r = "/login",
					o = {
						user: {
							email: e.email,
							password: e.password,
							remember_me: e.remember_me
						}
					};
				if (t) {
					var a = {};
					["interests", "personality", "motivators"].map((function(e) {
						if (localStorage.getItem(e)) {
							var t = localStorage.getItem(e);
							t = JSON.parse(t);
							var r = [];
							t.filter((function(e) {
								return e.answered
							})).map((function(e) {
								e.statements.map((function(t) {
									r.push({
										statement_id: t.id,
										score: 5 - t.order,
										page: e.page
									})
								}))
							})), a["".concat(e, "_answers")] = r
						}
					})), o.user.interests_status = localStorage.getItem("interests_status") || "not_started", o.user.personality_status = localStorage.getItem("personality_status") || "not_started", o.user.motivators_status = localStorage.getItem("motivators_status") || "not_started", o.interests_answers = a.interests_answers, o.personality_answers = a.personality_answers, o.motivators_answers = a.motivators_answers
				}
				return fetch(n.actions.postRequest(r, o)).then(n.actions.status).then(n.actions.json).then((function(e) {
					return e
				}))
			}
		}, {
			key: "resendAccountInstructions",
			value: function(e) {
				var t = "/api/sessions/".concat(e.id, "/resend_account_instructions");
				return fetch(n.actions.getData(t)).then(n.actions.status).then(n.actions.json).then((function(e) {
					return e
				}))
			}
		}, {
			key: "recoverPassword",
			value: function(e, t, r) {
				var o = {
					user: {
						email: e.email
					}
				};
				return fetch(n.actions.postRequest("/password", o)).then(n.actions.status).then(n.actions.json).then((function(e) {
					return e
				})).then((function(e) {
					t()
				})).catch((function(e) {
					422 === e.status ? e.json().then((function(e) {
						r(e)
					})) : (console.error(e), r())
				}))
			}
		}, {
			key: "updatePassword",
			value: function(e, t, r) {
				var i = {
					user: {
						password: e.new_password,
						password_confirmation: e.password_confirmation || "",
						reset_password_token: e.reset_password_token
					}
				};
				fetch(n.actions.putRequest("/password", i)).then(n.actions.status).then(n.actions.json).then((function(e) {
					return e
				})).then(function() {
					var e, r = (e = o().mark((function e(r) {
						return o().wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									t();
								case 1:
								case "end":
									return e.stop()
							}
						}), e)
					})), function() {
						var t = this,
							r = arguments;
						return new Promise((function(n, o) {
							var i = e.apply(t, r);

							function s(e) {
								a(i, n, o, s, c, "next", e)
							}

							function c(e) {
								a(i, n, o, s, c, "throw", e)
							}
							s(void 0)
						}))
					});
					return function(e) {
						return r.apply(this, arguments)
					}
				}()).catch((function(e) {
					console.log(e), e.json().then((function(e) {
						r(e)
					}))
				}))
			}
		}, {
			key: "delete",
			value: function() {
				return fetch(n.actions.deleteRequest("/login", {})).then(n.actions.status).then(n.actions.json)
			}
		}], (r = null) && i(t.prototype, r), s && i(t, s), Object.defineProperty(t, "prototype", {
			writable: !1
		}), e
	}();
	t.default = s
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(121);
	t.default = Object(n.default)()
}, , , function(e, t, r) {
	"use strict";
	r.r(t);
	r(0);
	var n = r(6);
	t.default = n.default
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(1);

	function o(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}
	var a = function() {
		function e() {
			! function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, e)
		}
		var t, r, a;
		return t = e, a = [{
			key: "register",
			value: function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
					o = t ? "/register-on-fly" : "/register",
					a = {};
				["interests", "personality", "motivators"].map((function(e) {
					if (localStorage.getItem(e)) {
						var t = localStorage.getItem(e);
						t = JSON.parse(t);
						var r = [];
						t.filter((function(e) {
							return e.answered
						})).map((function(e) {
							e.statements.map((function(t) {
								r.push({
									statement_id: t.id,
									score: 5 - t.order,
									page: e.page
								})
							}))
						})), a["".concat(e, "_answers")] = r
					}
				}));
				var i = localStorage.getItem("interests_status") || "not_started",
					s = localStorage.getItem("personality_status") || "not_started",
					c = localStorage.getItem("motivators_status") || "not_started",
					l = {
						user: {
							email: e.email,
							email_confirmation: e.email_confirmation,
							name: e.name,
							country_id: e.country_id,
							age_group: e.age_group,
							gender: e.gender,
							career_level_id: e.career_level_id,
							education_level_id: e.education_level_id,
							password: e.password,
							password_confirmation: e.password_confirmation,
							agree_terms: e.agree_terms,
							interests_status: i,
							personality_status: s,
							motivators_status: c,
							uid: e.uid,
							provider: e.provider,
							newsletter_subscription: e.newsletter_subscription
						},
						interests_answers: a.interests_answers,
						personality_answers: a.personality_answers,
						motivators_answers: a.motivators_answers,
						g_recaptcha_response: r
					};
				return fetch(n.actions.postRequest(o, l)).then(n.actions.status).then(n.actions.json).then((function(e) {
					return e
				}))
			}
		}, {
			key: "completeAccount",
			value: function(e, t) {
				var r = {
					user: {
						name: e.name,
						password: e.password,
						on_profile: !0,
						password_confirmation: e.password_confirmation,
						country_id: e.country_id,
						age_group: e.age_group,
						gender: e.gender,
						career_level_id: e.career_level_id,
						education_level_id: e.education_level_id
					},
					token: t
				};
				return fetch(n.actions.postRequest("/complete-account", r)).then(n.actions.status).then(n.actions.json).then((function(e) {
					return e
				}))
			}
		}, {
			key: "update",
			value: function(e, t, r) {
				var o = {
					user: {
						name: e.name,
						country_id: e.country_id,
						age_group: e.age_group,
						gender: e.gender,
						career_level_id: e.career_level_id,
						education_level_id: e.education_level_id,
						receive_promo_emails: e.receive_promo_emails,
						receive_account_emails: e.receive_account_emails,
						receive_advice_emails: e.receive_advice_emails,
						receive_test_related_emails: e.receive_test_related_emails,
						receive_jobs_emails: e.receive_jobs_emails,
						receive_study_emails: e.receive_study_emails,
						need_post_update_account_setup: !1
					}
				};
				fetch(n.actions.putRequest("/api/user", o)).then(n.actions.status).then(n.actions.json).then((function(e) {
					return e
				})).then((function(e) {
					t(e)
				})).catch((function(e) {
					console.log(e), e.json().then((function(e) {
						r(e)
					}))
				}))
			}
		}, {
			key: "changeEmail",
			value: function(e, t, r) {
				var o = {
					user: {
						email: e.email,
						current_password: e.current_password
					}
				};
				fetch(n.actions.putRequest("/register", o)).then(n.actions.status).then(n.actions.json).then((function(e) {
					return e
				})).then((function(e) {
					t(e)
				})).catch((function(e) {
					console.log(e), e.json().then((function(e) {
						r(e)
					}))
				}))
			}
		}, {
			key: "changePassword",
			value: function(e, t, r) {
				var o = {
					user: {
						password: e.new_password,
						password_confirmation: e.password_confirmation,
						current_password: e.current_password
					}
				};
				fetch(n.actions.putRequest("/register", o)).then(n.actions.status).then(n.actions.json).then((function(e) {
					return e
				})).then((function(e) {
					t(e)
				})).catch((function(e) {
					console.log(e), e.json().then((function(e) {
						r(e)
					}))
				}))
			}
		}, {
			key: "delete",
			value: function(e, t) {
				fetch(n.actions.deleteRequest("api/user", {})).then(n.actions.status).then(n.actions.json).then((function(e) {
					return e
				})).then((function(t) {
					console.log("response success"), e()
				})).catch((function(e) {
					console.log("response error"), t()
				}))
			}
		}, {
			key: "validate",
			value: function(e) {
				delete e.errors;
				var t = {
					user: e
				};
				return fetch(n.actions.postRequest("/api/user/validate", t)).then(n.actions.status).then(n.actions.json).then((function(e) {
					return e
				}))
			}
		}], (r = null) && o(t.prototype, r), a && o(t, a), Object.defineProperty(t, "prototype", {
			writable: !1
		}), e
	}();
	t.default = a
}, , function(e, t, r) {
	"use strict";
	var n;
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = void 0;
	var o = ((n = r(368)) && n.__esModule ? n : {
		default: n
	}).default;
	t.default = o
}, , function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return c
	}));
	var n = r(0),
		o = r.n(n);

	function a(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function i(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? a(Object(r), !0).forEach((function(t) {
				s(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function s(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function c(e) {
		var t = e.className,
			r = e.style,
			n = e.onClick,
			a = e.direction;
		return o.a.createElement("div", {
			className: t,
			style: i({}, r),
			onClick: n
		}, o.a.createElement("span", {
			className: a
		}))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return a
	}));
	var n = r(1);

	function o(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}
	var a = function() {
		function e() {
			! function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, e)
		}
		var t, r, a;
		return t = e, a = [{
			key: "searchCareers",
			value: function(e) {
				return fetch(n.actions.getData("".concat("/api/careers/search", "?").concat(n.actions.paramsToURI(e)))).then(n.actions.status).then(n.actions.json)
			}
		}, {
			key: "popularCareers",
			value: function(e) {
				return fetch(n.actions.getData("".concat("/api/careers/popular", "?").concat(n.actions.paramsToURI(e)))).then(n.actions.status).then(n.actions.json)
			}
		}, {
			key: "similarCareers",
			value: function(e) {
				return fetch(n.actions.getData("".concat("/api/careers/similar", "?id=").concat(e.id))).then(n.actions.status).then(n.actions.json)
			}
		}, {
			key: "getCollection",
			value: function() {
				return fetch(n.actions.getData("/api/careers")).then(n.actions.status).then(n.actions.json)
			}
		}, {
			key: "featured",
			value: function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = "/api/careers/featured";
				return e && (t = "".concat(t, "?with_scores=true")), fetch(n.actions.getData(t)).then(n.actions.status).then(n.actions.json)
			}
		}], (r = null) && o(t.prototype, r), a && o(t, a), Object.defineProperty(t, "prototype", {
			writable: !1
		}), e
	}()
}, function(e, t, r) {
	"use strict";
	r.d(t, "a", (function() {
		return de
	})), r.d(t, "b", (function() {
		return ve
	})), r.d(t, "c", (function() {
		return oe
	})), r.d(t, "d", (function() {
		return oe
	}));
	var n = r(18);

	function o(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
		return n
	}

	function a(e, t) {
		if (e) {
			if ("string" === typeof e) return o(e, t);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? o(e, t) : void 0
		}
	}

	function i(e, t) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) || function(e, t) {
			if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
				var r = [],
					n = !0,
					o = !1,
					a = void 0;
				try {
					for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
				} catch (c) {
					o = !0, a = c
				} finally {
					try {
						n || null == s.return || s.return()
					} finally {
						if (o) throw a
					}
				}
				return r
			}
		}(e, t) || a(e, t) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}
	var s = r(12);

	function c(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? Object(arguments[t]) : {},
				n = Object.keys(r);
			"function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
				return Object.getOwnPropertyDescriptor(r, e).enumerable
			})))), n.forEach((function(t) {
				Object(s.a)(e, t, r[t])
			}))
		}
		return e
	}
	var l = r(46),
		u = r(50),
		f = r(75),
		p = r(62),
		d = r(68),
		h = r(8),
		m = r(0),
		v = r(4),
		y = r.n(v),
		b = r(14),
		g = r(47),
		w = r.n(g);

	function E(e) {
		return function(e) {
			if (Array.isArray(e)) return o(e)
		}(e) || function(e) {
			if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
		}(e) || a(e) || function() {
			throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}
	var _ = function() {
		function e() {
			Object(l.a)(this, e), Object(s.a)(this, "refs", {})
		}
		return Object(u.a)(e, [{
			key: "add",
			value: function(e, t) {
				this.refs[e] || (this.refs[e] = []), this.refs[e].push(t)
			}
		}, {
			key: "remove",
			value: function(e, t) {
				var r = this.getIndex(e, t); - 1 !== r && this.refs[e].splice(r, 1)
			}
		}, {
			key: "isActive",
			value: function() {
				return this.active
			}
		}, {
			key: "getActive",
			value: function() {
				var e = this;
				return this.refs[this.active.collection].find((function(t) {
					return t.node.sortableInfo.index == e.active.index
				}))
			}
		}, {
			key: "getIndex",
			value: function(e, t) {
				return this.refs[e].indexOf(t)
			}
		}, {
			key: "getOrderedRefs",
			value: function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.active.collection;
				return this.refs[e].sort(O)
			}
		}]), e
	}();

	function O(e, t) {
		return e.node.sortableInfo.index - t.node.sortableInfo.index
	}

	function S(e, t) {
		return Object.keys(e).reduce((function(r, n) {
			return -1 === t.indexOf(n) && (r[n] = e[n]), r
		}), {})
	}
	var T = {
			end: ["touchend", "touchcancel", "mouseup"],
			move: ["touchmove", "mousemove"],
			start: ["touchstart", "mousedown"]
		},
		j = function() {
			if ("undefined" === typeof window || "undefined" === typeof document) return "";
			var e = window.getComputedStyle(document.documentElement, "") || ["-moz-hidden-iframe"],
				t = (Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/) || "" === e.OLink && ["", "o"])[1];
			switch (t) {
				case "ms":
					return "ms";
				default:
					return t && t.length ? t[0].toUpperCase() + t.substr(1) : ""
			}
		}();

	function x(e, t) {
		Object.keys(t).forEach((function(r) {
			e.style[r] = t[r]
		}))
	}

	function P(e, t) {
		e.style["".concat(j, "Transform")] = null == t ? "" : "translate3d(".concat(t.x, "px,").concat(t.y, "px,0)")
	}

	function k(e, t) {
		e.style["".concat(j, "TransitionDuration")] = null == t ? "" : "".concat(t, "ms")
	}

	function N(e, t) {
		for (; e;) {
			if (t(e)) return e;
			e = e.parentNode
		}
		return null
	}

	function R(e, t, r) {
		return Math.max(e, Math.min(r, t))
	}

	function C(e) {
		return "px" === e.substr(-2) ? parseFloat(e) : 0
	}

	function L(e) {
		var t = window.getComputedStyle(e);
		return {
			bottom: C(t.marginBottom),
			left: C(t.marginLeft),
			right: C(t.marginRight),
			top: C(t.marginTop)
		}
	}

	function A(e, t) {
		var r = t.displayName || t.name;
		return r ? "".concat(e, "(").concat(r, ")") : e
	}

	function I(e, t) {
		var r = e.getBoundingClientRect();
		return {
			top: r.top + t.top,
			left: r.left + t.left
		}
	}

	function M(e) {
		return e.touches && e.touches.length ? {
			x: e.touches[0].pageX,
			y: e.touches[0].pageY
		} : e.changedTouches && e.changedTouches.length ? {
			x: e.changedTouches[0].pageX,
			y: e.changedTouches[0].pageY
		} : {
			x: e.pageX,
			y: e.pageY
		}
	}

	function D(e) {
		return e.touches && e.touches.length || e.changedTouches && e.changedTouches.length
	}

	function U(e, t) {
		var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
			left: 0,
			top: 0
		};
		if (e) {
			var n = {
				left: r.left + e.offsetLeft,
				top: r.top + e.offsetTop
			};
			return e.parentNode === t ? n : U(e.parentNode, t, n)
		}
	}

	function F(e, t, r) {
		return e < r && e > t ? e - 1 : e > r && e < t ? e + 1 : e
	}

	function B(e) {
		var t = e.lockOffset,
			r = e.width,
			n = e.height,
			o = t,
			a = t,
			i = "px";
		if ("string" === typeof t) {
			var s = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(t);
			w()(null !== s, 'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s', t), o = parseFloat(t), a = parseFloat(t), i = s[1]
		}
		return w()(isFinite(o) && isFinite(a), "lockOffset value should be a finite. Given %s", t), "%" === i && (o = o * r / 100, a = a * n / 100), {
			x: o,
			y: a
		}
	}

	function H(e) {
		var t = e.height,
			r = e.width,
			n = e.lockOffset,
			o = Array.isArray(n) ? n : [n, n];
		w()(2 === o.length, "lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s", n);
		var a = i(o, 2),
			s = a[0],
			c = a[1];
		return [B({
			height: t,
			lockOffset: s,
			width: r
		}), B({
			height: t,
			lockOffset: c,
			width: r
		})]
	}

	function G(e) {
		return e instanceof HTMLElement ? function(e) {
			var t = window.getComputedStyle(e),
				r = /(auto|scroll)/;
			return ["overflow", "overflowX", "overflowY"].find((function(e) {
				return r.test(t[e])
			}))
		}(e) ? e : G(e.parentNode) : null
	}

	function W(e) {
		var t = window.getComputedStyle(e);
		return "grid" === t.display ? {
			x: C(t.gridColumnGap),
			y: C(t.gridRowGap)
		} : {
			x: 0,
			y: 0
		}
	}
	var q = 27,
		z = 32,
		Y = 37,
		V = 38,
		K = 39,
		X = 40,
		$ = "A",
		Q = "BUTTON",
		J = "CANVAS",
		Z = "INPUT",
		ee = "OPTION",
		te = "TEXTAREA",
		re = "SELECT";

	function ne(e) {
		var t = "input, textarea, select, canvas, [contenteditable]",
			r = e.querySelectorAll(t),
			n = e.cloneNode(!0);
		return E(n.querySelectorAll(t)).forEach((function(e, t) {
			("file" !== e.type && (e.value = r[t].value), "radio" === e.type && e.name && (e.name = "__sortableClone__".concat(e.name)), e.tagName === J && r[t].width > 0 && r[t].height > 0) && e.getContext("2d").drawImage(r[t], 0, 0)
		})), n
	}

	function oe(e) {
		var t, r, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
			withRef: !1
		};
		return r = t = function(t) {
			function r() {
				return Object(l.a)(this, r), Object(f.a)(this, Object(p.a)(r).apply(this, arguments))
			}
			return Object(d.a)(r, t), Object(u.a)(r, [{
				key: "componentDidMount",
				value: function() {
					Object(b.findDOMNode)(this).sortableHandle = !0
				}
			}, {
				key: "getWrappedInstance",
				value: function() {
					return w()(o.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call"), this.refs.wrappedInstance
				}
			}, {
				key: "render",
				value: function() {
					var t = o.withRef ? "wrappedInstance" : null;
					return Object(m.createElement)(e, Object(n.a)({
						ref: t
					}, this.props))
				}
			}]), r
		}(m.Component), Object(s.a)(t, "displayName", A("sortableHandle", e)), r
	}

	function ae(e) {
		return null != e.sortableHandle
	}
	var ie = function() {
		function e(t, r) {
			Object(l.a)(this, e), this.container = t, this.onScrollCallback = r
		}
		return Object(u.a)(e, [{
			key: "clear",
			value: function() {
				null != this.interval && (clearInterval(this.interval), this.interval = null)
			}
		}, {
			key: "update",
			value: function(e) {
				var t = this,
					r = e.translate,
					n = e.minTranslate,
					o = e.maxTranslate,
					a = e.width,
					i = e.height,
					s = {
						x: 0,
						y: 0
					},
					c = {
						x: 1,
						y: 1
					},
					l = 10,
					u = 10,
					f = this.container,
					p = f.scrollTop,
					d = f.scrollLeft,
					h = f.scrollHeight,
					m = f.scrollWidth,
					v = 0 === p,
					y = h - p - f.clientHeight === 0,
					b = 0 === d,
					g = m - d - f.clientWidth === 0;
				r.y >= o.y - i / 2 && !y ? (s.y = 1, c.y = u * Math.abs((o.y - i / 2 - r.y) / i)) : r.x >= o.x - a / 2 && !g ? (s.x = 1, c.x = l * Math.abs((o.x - a / 2 - r.x) / a)) : r.y <= n.y + i / 2 && !v ? (s.y = -1, c.y = u * Math.abs((r.y - i / 2 - n.y) / i)) : r.x <= n.x + a / 2 && !b && (s.x = -1, c.x = l * Math.abs((r.x - a / 2 - n.x) / a)), this.interval && (this.clear(), this.isAutoScrolling = !1), 0 === s.x && 0 === s.y || (this.interval = setInterval((function() {
					t.isAutoScrolling = !0;
					var e = {
						left: c.x * s.x,
						top: c.y * s.y
					};
					t.container.scrollTop += e.top, t.container.scrollLeft += e.left, t.onScrollCallback(e)
				}), 5))
			}
		}]), e
	}();
	var se = {
			axis: y.a.oneOf(["x", "y", "xy"]),
			contentWindow: y.a.any,
			disableAutoscroll: y.a.bool,
			distance: y.a.number,
			getContainer: y.a.func,
			getHelperDimensions: y.a.func,
			helperClass: y.a.string,
			helperContainer: y.a.oneOfType([y.a.func, "undefined" === typeof HTMLElement ? y.a.any : y.a.instanceOf(HTMLElement)]),
			hideSortableGhost: y.a.bool,
			keyboardSortingTransitionDuration: y.a.number,
			lockAxis: y.a.string,
			lockOffset: y.a.oneOfType([y.a.number, y.a.string, y.a.arrayOf(y.a.oneOfType([y.a.number, y.a.string]))]),
			lockToContainerEdges: y.a.bool,
			onSortEnd: y.a.func,
			onSortMove: y.a.func,
			onSortOver: y.a.func,
			onSortStart: y.a.func,
			pressDelay: y.a.number,
			pressThreshold: y.a.number,
			keyCodes: y.a.shape({
				lift: y.a.arrayOf(y.a.number),
				drop: y.a.arrayOf(y.a.number),
				cancel: y.a.arrayOf(y.a.number),
				up: y.a.arrayOf(y.a.number),
				down: y.a.arrayOf(y.a.number)
			}),
			shouldCancelStart: y.a.func,
			transitionDuration: y.a.number,
			updateBeforeSortStart: y.a.func,
			useDragHandle: y.a.bool,
			useWindowAsScrollContainer: y.a.bool
		},
		ce = {
			lift: [z],
			drop: [z],
			cancel: [q],
			up: [V, Y],
			down: [X, K]
		},
		le = {
			axis: "y",
			disableAutoscroll: !1,
			distance: 0,
			getHelperDimensions: function(e) {
				var t = e.node;
				return {
					height: t.offsetHeight,
					width: t.offsetWidth
				}
			},
			hideSortableGhost: !0,
			lockOffset: "50%",
			lockToContainerEdges: !1,
			pressDelay: 0,
			pressThreshold: 5,
			keyCodes: ce,
			shouldCancelStart: function(e) {
				return -1 !== [Z, te, re, ee, Q].indexOf(e.target.tagName) || !!N(e.target, (function(e) {
					return "true" === e.contentEditable
				}))
			},
			transitionDuration: 300,
			useWindowAsScrollContainer: !1
		},
		ue = Object.keys(se);

	function fe(e) {
		w()(!(e.distance && e.pressDelay), "Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.")
	}

	function pe(e, t) {
		try {
			var r = e()
		} catch (n) {
			return t(!0, n)
		}
		return r && r.then ? r.then(t.bind(null, !1), t.bind(null, !0)) : t(!1, value)
	}

	function de(e) {
		var t, r, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
			withRef: !1
		};
		return r = t = function(t) {
			function r(e) {
				var t;
				return Object(l.a)(this, r), t = Object(f.a)(this, Object(p.a)(r).call(this, e)), Object(s.a)(Object(h.a)(Object(h.a)(t)), "state", {}), Object(s.a)(Object(h.a)(Object(h.a)(t)), "handleStart", (function(e) {
					var r = t.props,
						n = r.distance,
						o = r.shouldCancelStart;
					if (2 !== e.button && !o(e)) {
						t.touched = !0, t.position = M(e);
						var a = N(e.target, (function(e) {
							return null != e.sortableInfo
						}));
						if (a && a.sortableInfo && t.nodeIsChild(a) && !t.state.sorting) {
							var i = t.props.useDragHandle,
								s = a.sortableInfo,
								c = s.index,
								l = s.collection;
							if (s.disabled) return;
							if (i && !N(e.target, ae)) return;
							t.manager.active = {
								collection: l,
								index: c
							}, D(e) || e.target.tagName !== $ || e.preventDefault(), n || (0 === t.props.pressDelay ? t.handlePress(e) : t.pressTimer = setTimeout((function() {
								return t.handlePress(e)
							}), t.props.pressDelay))
						}
					}
				})), Object(s.a)(Object(h.a)(Object(h.a)(t)), "nodeIsChild", (function(e) {
					return e.sortableInfo.manager === t.manager
				})), Object(s.a)(Object(h.a)(Object(h.a)(t)), "handleMove", (function(e) {
					var r = t.props,
						n = r.distance,
						o = r.pressThreshold;
					if (!t.state.sorting && t.touched && !t._awaitingUpdateBeforeSortStart) {
						var a = M(e),
							i = {
								x: t.position.x - a.x,
								y: t.position.y - a.y
							},
							s = Math.abs(i.x) + Math.abs(i.y);
						t.delta = i, n || o && !(s >= o) ? n && s >= n && t.manager.isActive() && t.handlePress(e) : (clearTimeout(t.cancelTimer), t.cancelTimer = setTimeout(t.cancel, 0))
					}
				})), Object(s.a)(Object(h.a)(Object(h.a)(t)), "handleEnd", (function() {
					t.touched = !1, t.cancel()
				})), Object(s.a)(Object(h.a)(Object(h.a)(t)), "cancel", (function() {
					var e = t.props.distance;
					t.state.sorting || (e || clearTimeout(t.pressTimer), t.manager.active = null)
				})), Object(s.a)(Object(h.a)(Object(h.a)(t)), "handlePress", (function(e) {
					try {
						var r = t.manager.getActive(),
							n = function() {
								if (r) {
									var n = function() {
											var r = d.sortableInfo.index,
												n = L(d),
												o = W(t.container),
												u = t.scrollContainer.getBoundingClientRect(),
												v = i({
													index: r,
													node: d,
													collection: h
												});
											if (t.node = d, t.margin = n, t.gridGap = o, t.width = v.width, t.height = v.height, t.marginOffset = {
													x: t.margin.left + t.margin.right + t.gridGap.x,
													y: Math.max(t.margin.top, t.margin.bottom, t.gridGap.y)
												}, t.boundingClientRect = d.getBoundingClientRect(), t.containerBoundingRect = u, t.index = r, t.newIndex = r, t.axis = {
													x: a.indexOf("x") >= 0,
													y: a.indexOf("y") >= 0
												}, t.offsetEdge = U(d, t.container), t.initialOffset = M(m ? c({}, e, {
													pageX: t.boundingClientRect.left,
													pageY: t.boundingClientRect.top
												}) : e), t.initialScroll = {
													left: t.scrollContainer.scrollLeft,
													top: t.scrollContainer.scrollTop
												}, t.initialWindowScroll = {
													left: window.pageXOffset,
													top: window.pageYOffset
												}, t.helper = t.helperContainer.appendChild(ne(d)), x(t.helper, {
													boxSizing: "border-box",
													height: "".concat(t.height, "px"),
													left: "".concat(t.boundingClientRect.left - n.left, "px"),
													pointerEvents: "none",
													position: "fixed",
													top: "".concat(t.boundingClientRect.top - n.top, "px"),
													width: "".concat(t.width, "px")
												}), m && t.helper.focus(), l && (t.sortableGhost = d, x(d, {
													opacity: 0,
													visibility: "hidden"
												})), t.minTranslate = {}, t.maxTranslate = {}, m) {
												var y = p ? {
														top: 0,
														left: 0,
														width: t.contentWindow.innerWidth,
														height: t.contentWindow.innerHeight
													} : t.containerBoundingRect,
													b = y.top,
													g = y.left,
													w = y.width,
													E = b + y.height,
													_ = g + w;
												t.axis.x && (t.minTranslate.x = g - t.boundingClientRect.left, t.maxTranslate.x = _ - (t.boundingClientRect.left + t.width)), t.axis.y && (t.minTranslate.y = b - t.boundingClientRect.top, t.maxTranslate.y = E - (t.boundingClientRect.top + t.height))
											} else t.axis.x && (t.minTranslate.x = (p ? 0 : u.left) - t.boundingClientRect.left - t.width / 2, t.maxTranslate.x = (p ? t.contentWindow.innerWidth : u.left + u.width) - t.boundingClientRect.left - t.width / 2), t.axis.y && (t.minTranslate.y = (p ? 0 : u.top) - t.boundingClientRect.top - t.height / 2, t.maxTranslate.y = (p ? t.contentWindow.innerHeight : u.top + u.height) - t.boundingClientRect.top - t.height / 2);
											s && s.split(" ").forEach((function(e) {
												return t.helper.classList.add(e)
											})), t.listenerNode = e.touches ? d : t.contentWindow, m ? (t.listenerNode.addEventListener("wheel", t.handleKeyEnd, !0), t.listenerNode.addEventListener("mousedown", t.handleKeyEnd, !0), t.listenerNode.addEventListener("keydown", t.handleKeyDown)) : (T.move.forEach((function(e) {
												return t.listenerNode.addEventListener(e, t.handleSortMove, !1)
											})), T.end.forEach((function(e) {
												return t.listenerNode.addEventListener(e, t.handleSortEnd, !1)
											}))), t.setState({
												sorting: !0,
												sortingIndex: r
											}), f && f({
												node: d,
												index: r,
												collection: h,
												isKeySorting: m,
												nodes: t.manager.getOrderedRefs(),
												helper: t.helper
											}, e), m && t.keyMove(0)
										},
										o = t.props,
										a = o.axis,
										i = o.getHelperDimensions,
										s = o.helperClass,
										l = o.hideSortableGhost,
										u = o.updateBeforeSortStart,
										f = o.onSortStart,
										p = o.useWindowAsScrollContainer,
										d = r.node,
										h = r.collection,
										m = t.manager.isKeySorting,
										v = function() {
											if ("function" === typeof u) {
												t._awaitingUpdateBeforeSortStart = !0;
												var r = pe((function() {
													var t = d.sortableInfo.index;
													return Promise.resolve(u({
														collection: h,
														index: t,
														node: d,
														isKeySorting: m
													}, e)).then((function() {}))
												}), (function(e, r) {
													if (t._awaitingUpdateBeforeSortStart = !1, e) throw r;
													return r
												}));
												if (r && r.then) return r.then((function() {}))
											}
										}();
									return v && v.then ? v.then(n) : n()
								}
							}();
						return Promise.resolve(n && n.then ? n.then((function() {})) : void 0)
					} catch (o) {
						return Promise.reject(o)
					}
				})), Object(s.a)(Object(h.a)(Object(h.a)(t)), "handleSortMove", (function(e) {
					var r = t.props.onSortMove;
					"function" === typeof e.preventDefault && e.preventDefault(), t.updateHelperPosition(e), t.animateNodes(), t.autoscroll(), r && r(e)
				})), Object(s.a)(Object(h.a)(Object(h.a)(t)), "handleSortEnd", (function(e) {
					var r = t.props,
						n = r.hideSortableGhost,
						o = r.onSortEnd,
						a = t.manager,
						i = a.active.collection,
						s = a.isKeySorting,
						c = t.manager.getOrderedRefs();
					t.listenerNode && (s ? (t.listenerNode.removeEventListener("wheel", t.handleKeyEnd, !0), t.listenerNode.removeEventListener("mousedown", t.handleKeyEnd, !0), t.listenerNode.removeEventListener("keydown", t.handleKeyDown)) : (T.move.forEach((function(e) {
						return t.listenerNode.removeEventListener(e, t.handleSortMove)
					})), T.end.forEach((function(e) {
						return t.listenerNode.removeEventListener(e, t.handleSortEnd)
					})))), t.helper.parentNode.removeChild(t.helper), n && t.sortableGhost && x(t.sortableGhost, {
						opacity: "",
						visibility: ""
					});
					for (var l = 0, u = c.length; l < u; l++) {
						var f = c[l],
							p = f.node;
						f.edgeOffset = null, f.boundingClientRect = null, P(p, null), k(p, null), f.translate = null
					}
					t.autoScroller.clear(), t.manager.active = null, t.manager.isKeySorting = !1, t.setState({
						sorting: !1,
						sortingIndex: null
					}), "function" === typeof o && o({
						collection: i,
						newIndex: t.newIndex,
						oldIndex: t.index,
						isKeySorting: s,
						nodes: c
					}, e), t.touched = !1
				})), Object(s.a)(Object(h.a)(Object(h.a)(t)), "autoscroll", (function() {
					var e = t.props.disableAutoscroll,
						r = t.manager.isKeySorting;
					if (e) t.autoScroller.clear();
					else {
						if (r) {
							var n = c({}, t.translate),
								o = 0,
								a = 0;
							return t.axis.x && (n.x = Math.min(t.maxTranslate.x, Math.max(t.minTranslate.x, t.translate.x)), o = t.translate.x - n.x), t.axis.y && (n.y = Math.min(t.maxTranslate.y, Math.max(t.minTranslate.y, t.translate.y)), a = t.translate.y - n.y), t.translate = n, P(t.helper, t.translate), t.scrollContainer.scrollLeft += o, void(t.scrollContainer.scrollTop += a)
						}
						t.autoScroller.update({
							height: t.height,
							maxTranslate: t.maxTranslate,
							minTranslate: t.minTranslate,
							translate: t.translate,
							width: t.width
						})
					}
				})), Object(s.a)(Object(h.a)(Object(h.a)(t)), "onAutoScroll", (function(e) {
					t.translate.x += e.left, t.translate.y += e.top, t.animateNodes()
				})), Object(s.a)(Object(h.a)(Object(h.a)(t)), "handleKeyDown", (function(e) {
					var r = e.keyCode,
						n = t.props,
						o = n.shouldCancelStart,
						a = n.keyCodes,
						i = c({}, ce, void 0 === a ? {} : a);
					t.manager.active && !t.manager.isKeySorting || !(t.manager.active || i.lift.includes(r) && !o(e) && t.isValidSortingTarget(e)) || (e.stopPropagation(), e.preventDefault(), i.lift.includes(r) && !t.manager.active ? t.keyLift(e) : i.drop.includes(r) && t.manager.active ? t.keyDrop(e) : i.cancel.includes(r) ? (t.newIndex = t.manager.active.index, t.keyDrop(e)) : i.up.includes(r) ? t.keyMove(-1) : i.down.includes(r) && t.keyMove(1))
				})), Object(s.a)(Object(h.a)(Object(h.a)(t)), "keyLift", (function(e) {
					var r = e.target,
						n = N(r, (function(e) {
							return null != e.sortableInfo
						})).sortableInfo,
						o = n.index,
						a = n.collection;
					t.initialFocusedNode = r, t.manager.isKeySorting = !0, t.manager.active = {
						index: o,
						collection: a
					}, t.handlePress(e)
				})), Object(s.a)(Object(h.a)(Object(h.a)(t)), "keyMove", (function(e) {
					var r = t.manager.getOrderedRefs(),
						n = r[r.length - 1].node.sortableInfo.index,
						o = t.newIndex + e,
						a = t.newIndex;
					if (!(o < 0 || o > n)) {
						t.prevIndex = a, t.newIndex = o;
						var i = F(t.newIndex, t.prevIndex, t.index),
							s = r.find((function(e) {
								return e.node.sortableInfo.index === i
							})),
							c = s.node,
							l = t.containerScrollDelta,
							u = s.boundingClientRect || I(c, l),
							f = s.translate || {
								x: 0,
								y: 0
							},
							p = u.top + f.y - l.top,
							d = u.left + f.x - l.left,
							h = a < o,
							m = h && t.axis.x ? c.offsetWidth - t.width : 0,
							v = h && t.axis.y ? c.offsetHeight - t.height : 0;
						t.handleSortMove({
							pageX: d + m,
							pageY: p + v,
							ignoreTransition: 0 === e
						})
					}
				})), Object(s.a)(Object(h.a)(Object(h.a)(t)), "keyDrop", (function(e) {
					t.handleSortEnd(e), t.initialFocusedNode && t.initialFocusedNode.focus()
				})), Object(s.a)(Object(h.a)(Object(h.a)(t)), "handleKeyEnd", (function(e) {
					t.manager.active && t.keyDrop(e)
				})), Object(s.a)(Object(h.a)(Object(h.a)(t)), "isValidSortingTarget", (function(e) {
					var r = t.props.useDragHandle,
						n = e.target,
						o = N(n, (function(e) {
							return null != e.sortableInfo
						}));
					return o && o.sortableInfo && !o.sortableInfo.disabled && (r ? ae(n) : n.sortableInfo)
				})), fe(e), t.manager = new _, t.events = {
					end: t.handleEnd,
					move: t.handleMove,
					start: t.handleStart
				}, t
			}
			return Object(d.a)(r, t), Object(u.a)(r, [{
				key: "getChildContext",
				value: function() {
					return {
						manager: this.manager
					}
				}
			}, {
				key: "componentDidMount",
				value: function() {
					var e = this,
						t = this.props.useWindowAsScrollContainer,
						r = this.getContainer();
					Promise.resolve(r).then((function(r) {
						e.container = r, e.document = e.container.ownerDocument || document;
						var n = e.props.contentWindow || e.document.defaultView || window;
						e.contentWindow = "function" === typeof n ? n() : n, e.scrollContainer = t ? e.document.scrollingElement || e.document.documentElement : G(e.container) || e.container, e.autoScroller = new ie(e.scrollContainer, e.onAutoScroll), Object.keys(e.events).forEach((function(t) {
							return T[t].forEach((function(r) {
								return e.container.addEventListener(r, e.events[t], !1)
							}))
						})), e.container.addEventListener("keydown", e.handleKeyDown)
					}))
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					var e = this;
					this.helper && this.helper.parentNode && this.helper.parentNode.removeChild(this.helper), this.container && (Object.keys(this.events).forEach((function(t) {
						return T[t].forEach((function(r) {
							return e.container.removeEventListener(r, e.events[t])
						}))
					})), this.container.removeEventListener("keydown", this.handleKeyDown))
				}
			}, {
				key: "updateHelperPosition",
				value: function(e) {
					var t = this.props,
						r = t.lockAxis,
						n = t.lockOffset,
						o = t.lockToContainerEdges,
						a = t.transitionDuration,
						s = t.keyboardSortingTransitionDuration,
						c = void 0 === s ? a : s,
						l = this.manager.isKeySorting,
						u = e.ignoreTransition,
						f = M(e),
						p = {
							x: f.x - this.initialOffset.x,
							y: f.y - this.initialOffset.y
						};
					if (p.y -= window.pageYOffset - this.initialWindowScroll.top, p.x -= window.pageXOffset - this.initialWindowScroll.left, this.translate = p, o) {
						var d = i(H({
								height: this.height,
								lockOffset: n,
								width: this.width
							}), 2),
							h = d[0],
							m = d[1],
							v = {
								x: this.width / 2 - h.x,
								y: this.height / 2 - h.y
							},
							y = {
								x: this.width / 2 - m.x,
								y: this.height / 2 - m.y
							};
						p.x = R(this.minTranslate.x + v.x, this.maxTranslate.x - y.x, p.x), p.y = R(this.minTranslate.y + v.y, this.maxTranslate.y - y.y, p.y)
					}
					"x" === r ? p.y = 0 : "y" === r && (p.x = 0), l && c && !u && k(this.helper, c), P(this.helper, p)
				}
			}, {
				key: "animateNodes",
				value: function() {
					var e = this.props,
						t = e.transitionDuration,
						r = e.hideSortableGhost,
						n = e.onSortOver,
						o = this.containerScrollDelta,
						a = this.windowScrollDelta,
						i = this.manager.getOrderedRefs(),
						s = this.offsetEdge.left + this.translate.x + o.left,
						c = this.offsetEdge.top + this.translate.y + o.top,
						l = this.manager.isKeySorting,
						u = this.newIndex;
					this.newIndex = null;
					for (var f = 0, p = i.length; f < p; f++) {
						var d = i[f].node,
							h = d.sortableInfo.index,
							m = d.offsetWidth,
							v = d.offsetHeight,
							y = {
								height: this.height > v ? v / 2 : this.height / 2,
								width: this.width > m ? m / 2 : this.width / 2
							},
							b = l && h > this.index && h <= u,
							g = l && h < this.index && h >= u,
							w = {
								x: 0,
								y: 0
							},
							E = i[f].edgeOffset;
						E || (E = U(d, this.container), i[f].edgeOffset = E, l && (i[f].boundingClientRect = I(d, o)));
						var _ = f < i.length - 1 && i[f + 1],
							O = f > 0 && i[f - 1];
						_ && !_.edgeOffset && (_.edgeOffset = U(_.node, this.container), l && (_.boundingClientRect = I(_.node, o))), h !== this.index ? (t && k(d, t), this.axis.x ? this.axis.y ? g || h < this.index && (s + a.left - y.width <= E.left && c + a.top <= E.top + y.height || c + a.top + y.height <= E.top) ? (w.x = this.width + this.marginOffset.x, E.left + w.x > this.containerBoundingRect.width - y.width && _ && (w.x = _.edgeOffset.left - E.left, w.y = _.edgeOffset.top - E.top), null === this.newIndex && (this.newIndex = h)) : (b || h > this.index && (s + a.left + y.width >= E.left && c + a.top + y.height >= E.top || c + a.top + y.height >= E.top + v)) && (w.x = -(this.width + this.marginOffset.x), E.left + w.x < this.containerBoundingRect.left + y.width && O && (w.x = O.edgeOffset.left - E.left, w.y = O.edgeOffset.top - E.top), this.newIndex = h) : b || h > this.index && s + a.left + y.width >= E.left ? (w.x = -(this.width + this.marginOffset.x), this.newIndex = h) : (g || h < this.index && s + a.left <= E.left + y.width) && (w.x = this.width + this.marginOffset.x, null == this.newIndex && (this.newIndex = h)) : this.axis.y && (b || h > this.index && c + a.top + y.height >= E.top ? (w.y = -(this.height + this.marginOffset.y), this.newIndex = h) : (g || h < this.index && c + a.top <= E.top + y.height) && (w.y = this.height + this.marginOffset.y, null == this.newIndex && (this.newIndex = h))), P(d, w), i[f].translate = w) : r && (this.sortableGhost = d, x(d, {
							opacity: 0,
							visibility: "hidden"
						}))
					}
					null == this.newIndex && (this.newIndex = this.index), l && (this.newIndex = u);
					var S = l ? this.prevIndex : u;
					n && this.newIndex !== S && n({
						collection: this.manager.active.collection,
						index: this.index,
						newIndex: this.newIndex,
						oldIndex: S,
						isKeySorting: l,
						nodes: i,
						helper: this.helper
					})
				}
			}, {
				key: "getWrappedInstance",
				value: function() {
					return w()(o.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call"), this.refs.wrappedInstance
				}
			}, {
				key: "getContainer",
				value: function() {
					var e = this.props.getContainer;
					return "function" !== typeof e ? Object(b.findDOMNode)(this) : e(o.withRef ? this.getWrappedInstance() : void 0)
				}
			}, {
				key: "render",
				value: function() {
					var t = o.withRef ? "wrappedInstance" : null;
					return Object(m.createElement)(e, Object(n.a)({
						ref: t
					}, S(this.props, ue)))
				}
			}, {
				key: "helperContainer",
				get: function() {
					var e = this.props.helperContainer;
					return "function" === typeof e ? e() : this.props.helperContainer || this.document.body
				}
			}, {
				key: "containerScrollDelta",
				get: function() {
					return this.props.useWindowAsScrollContainer ? {
						left: 0,
						top: 0
					} : {
						left: this.scrollContainer.scrollLeft - this.initialScroll.left,
						top: this.scrollContainer.scrollTop - this.initialScroll.top
					}
				}
			}, {
				key: "windowScrollDelta",
				get: function() {
					return {
						left: this.contentWindow.pageXOffset - this.initialWindowScroll.left,
						top: this.contentWindow.pageYOffset - this.initialWindowScroll.top
					}
				}
			}]), r
		}(m.Component), Object(s.a)(t, "displayName", A("sortableList", e)), Object(s.a)(t, "defaultProps", le), Object(s.a)(t, "propTypes", se), Object(s.a)(t, "childContextTypes", {
			manager: y.a.object.isRequired
		}), r
	}
	var he = {
			index: y.a.number.isRequired,
			collection: y.a.oneOfType([y.a.number, y.a.string]),
			disabled: y.a.bool
		},
		me = Object.keys(he);

	function ve(e) {
		var t, r, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
			withRef: !1
		};
		return r = t = function(t) {
			function r() {
				return Object(l.a)(this, r), Object(f.a)(this, Object(p.a)(r).apply(this, arguments))
			}
			return Object(d.a)(r, t), Object(u.a)(r, [{
				key: "componentDidMount",
				value: function() {
					this.register()
				}
			}, {
				key: "componentDidUpdate",
				value: function(e) {
					this.node && (e.index !== this.props.index && (this.node.sortableInfo.index = this.props.index), e.disabled !== this.props.disabled && (this.node.sortableInfo.disabled = this.props.disabled)), e.collection !== this.props.collection && (this.unregister(e.collection), this.register())
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					this.unregister()
				}
			}, {
				key: "register",
				value: function() {
					var e = this.props,
						t = e.collection,
						r = e.disabled,
						n = e.index,
						o = Object(b.findDOMNode)(this);
					o.sortableInfo = {
						collection: t,
						disabled: r,
						index: n,
						manager: this.context.manager
					}, this.node = o, this.ref = {
						node: o
					}, this.context.manager.add(t, this.ref)
				}
			}, {
				key: "unregister",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props.collection;
					this.context.manager.remove(e, this.ref)
				}
			}, {
				key: "getWrappedInstance",
				value: function() {
					return w()(o.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call"), this.refs.wrappedInstance
				}
			}, {
				key: "render",
				value: function() {
					var t = o.withRef ? "wrappedInstance" : null;
					return Object(m.createElement)(e, Object(n.a)({
						ref: t
					}, S(this.props, me)))
				}
			}]), r
		}(m.Component), Object(s.a)(t, "displayName", A("sortableElement", e)), Object(s.a)(t, "contextTypes", {
			manager: y.a.object.isRequired
		}), Object(s.a)(t, "propTypes", he), Object(s.a)(t, "defaultProps", {
			collection: 0
		}), r
	}
}, , , function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "CURRENCY_COOKIE", (function() {
		return n
	})), r.d(t, "CURRENCY_DEFAULT_COOKIE", (function() {
		return o
	})), r.d(t, "setCookie", (function() {
		return a
	})), r.d(t, "getCookieValue", (function() {
		return i
	})), r.d(t, "currentCurrency", (function() {
		return s
	}));
	var n = "chCurrency",
		o = "chDefaultCurrency";

	function a(e, t, r) {
		if (void 0 === r) document.cookie = "".concat(e, "=").concat(t, "; path=/;");
		else {
			var n = new Date;
			n.setTime(n.getTime() + 1 * r * 60 * 60 * 1e3), document.cookie = "".concat(e, "=").concat(t, "; expires=").concat(n.toUTCString(), "; path=/")
		}
	}

	function i(e) {
		for (var t = e + "=", r = document.cookie.split(";"), n = 0; n < r.length; n++) {
			for (var o = r[n];
				" " == o.charAt(0);) o = o.substring(1);
			if (0 == o.indexOf(t)) return o.substring(t.length, o.length)
		}
		return ""
	}

	function s() {
		return i(n) || i(o)
	}
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n);

	function a(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function i(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function s(e, t) {
		return (s = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function c(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = u(e);
			if (t) {
				var o = u(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return l(this, r)
		}
	}

	function l(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function u(e) {
		return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var f = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && s(e, t)
		}(u, e);
		var t, r, n, l = c(u);

		function u() {
			var e;
			a(this, u);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = l.call.apply(l, [this].concat(r))).scriptId = "google-recaptcha-v3", e.placeholderDivId = "".concat(Math.random().toString(36).substring(7)), e.googleRecaptchaSrc = "https://www.google.com/recaptcha/api.js", e.captcha = void 0, e.captchaWidget = void 0, e.injectGoogleReCaptchaScript = function() {
				if (document.getElementById(e.scriptId)) e.handleOnLoad();
				else {
					var t = document.getElementsByTagName("head")[0],
						r = document.createElement("script");
					r.id = e.scriptId, r.src = "".concat(e.googleRecaptchaSrc, "?render=explicit"), r.onload = e.handleOnLoad, t.appendChild(r)
				}
			}, e.handleOnLoad = function() {
				window && window.grecaptcha ? window.grecaptcha.ready((function() {
					console.log(" window.grecaptcha ready"), e.captcha = window.grecaptcha, e.captchaWidget = e.captcha.render(e.placeholderDivId, {
						sitekey: e.props.sitekey,
						callback: e.props.verifyCallback,
						size: "invisible"
					})
				})) : console.warn("Google recaptcha is not available")
			}, e
		}
		return t = u, (r = [{
			key: "componentDidMount",
			value: function() {
				this.props.sitekey && this.injectGoogleReCaptchaScript()
			}
		}, {
			key: "reset",
			value: function() {
				this.captcha && this.captcha.reset(this.captchaWidget)
			}
		}, {
			key: "execute",
			value: function() {
				this.captcha ? this.captcha.execute(this.captchaWidget) : console.warn("reCaptcha is not yet enabled")
			}
		}, {
			key: "render",
			value: function() {
				return o.a.createElement("div", {
					id: this.placeholderDivId
				})
			}
		}]) && i(t.prototype, r), n && i(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), u
	}(n.Component);
	t.default = f
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(1);

	function o(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}
	var a = function() {
		function e() {
			! function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, e)
		}
		var t, r, a;
		return t = e, a = [{
			key: "resetTest",
			value: function(e) {
				var t = "/api/career_tests/".concat(e, "/reset");
				return fetch(n.actions.postRequest(t)).then(n.actions.status).then(n.actions.json)
			}
		}, {
			key: "getResult",
			value: function(e) {
				var t = " /api/career_tests/".concat(e, "/result");
				return fetch(n.actions.getData(t)).then(n.actions.status).then(n.actions.json)
			}
		}, {
			key: "getProgress",
			value: function() {
				return fetch(n.actions.getData(" /api/career_tests/progress")).then(n.actions.status).then(n.actions.json)
			}
		}, {
			key: "saveTempResults",
			value: function(e) {
				return fetch(n.actions.postRequest("/api/career_tests/temp_results", e)).then(n.actions.status).then(n.actions.json)
			}
		}], (r = null) && o(t.prototype, r), a && o(t, a), Object.defineProperty(t, "prototype", {
			writable: !1
		}), e
	}();
	t.default = a
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return a
	}));
	var n = r(0),
		o = r.n(n);

	function a(e) {
		return o.a.createElement("div", {
			className: "grid-x align-center confirmation-popup"
		}, o.a.createElement("div", {
			className: "cell text-center"
		}, o.a.createElement("div", {
			className: "large-icon email-sent"
		}), o.a.createElement("h3", {
			className: "mar-bot-10"
		}, "Confirmation mail sent!!"), o.a.createElement("p", {
			className: "popup__confirm_text"
		}, "We sent a confirmation email to ", o.a.createElement("span", {
			className: "popup__email-address"
		}, e.email), "."), o.a.createElement("p", {
			className: "popup__text"
		}, "If you don\u2019t see the email, please ensure to check your junk or promotional folders."), e.newsletterSubscription && o.a.createElement("div", {
			className: "popup__box"
		}, o.a.createElement("p", {
			className: "popup__confirm_text mar-0"
		}, "\ud83d\udea8 NOTE: You\u2019ve also received a welcome mail for The Dose!")), o.a.createElement("a", {
			href: e.testResult || "/dashboard",
			className: "button button--green--large"
		}, e.testResult ? "Continue to Results" : "Return to dashboard", o.a.createElement("span", {
			className: "small-icons next-arrow-white-l"
		}), o.a.createElement("span", {
			className: "button__hovered"
		}))))
	}
}, , function(e, t, r) {
	"use strict";

	function n(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	r.d(t, "a", (function() {
		return n
	}))
}, function(e, t, r) {
	"use strict";
	e.exports = function(e, t, r, n, o, a, i, s) {
		if (!e) {
			var c;
			if (void 0 === t) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
			else {
				var l = [r, n, o, a, i, s],
					u = 0;
				(c = new Error(t.replace(/%s/g, (function() {
					return l[u++]
				})))).name = "Invariant Violation"
			}
			throw c.framesToPop = 1, c
		}
	}
}, , , function(e, t, r) {
	"use strict";

	function n(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function o(e, t, r) {
		return t && n(e.prototype, t), r && n(e, r), e
	}
	r.d(t, "a", (function() {
		return o
	}))
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return i
	}));
	var n = r(0),
		o = r.n(n),
		a = r(72);

	function i(e) {
		var t = e.item,
			r = {},
			n = t.image && t.image.small ? t.image.small : t.image_path;
		n && (r.style = {
			backgroundImage: 'url("'.concat(n, '")')
		});
		var i = o.a.createElement(o.a.Fragment, null, o.a.createElement("div", Object.assign({
			className: "card__image"
		}, r)), o.a.createElement("div", {
			className: "card__section card__section--careers"
		}, o.a.createElement("p", {
			className: "card__name disable-fade-in"
		}, t.name), t.salary_from && t.salary_to ? o.a.createElement("p", {
			className: "card__salary"
		}, "$", t.salary_from, "-$", t.salary_to, " annually") : o.a.createElement("p", {
			className: "card__salary"
		}, " N/A "), o.a.createElement("p", {
			className: "card__education"
		}, t.projected_growth, " growth | ", t.education_level, " | ", t.study_time), o.a.createElement("p", {
			className: "card__link"
		}, "Go to Career ", o.a.createElement("span", {
			className: "small-icons next-arrow-green-xs"
		}))), o.a.createElement(a.default, {
			score: t.score,
			hideScore: e.hideScore,
			hideMatch: e.hideMatch
		}));
		return o.a.createElement("div", {
			className: "card card--careers ".concat(e.className || "")
		}, e.featured ? o.a.createElement("div", null, i) : o.a.createElement("a", {
			href: "/careers/".concat(t.path),
			className: "disable-fade-in"
		}, i, o.a.createElement(a.default, {
			score: t.score,
			hideScore: e.hideScore,
			hideMatch: e.hideMatch
		}), o.a.createElement("div", {
			className: "card__hover"
		})))
	}
}, function(e, t, r) {
	"use strict";

	function n(e, t) {
		if (!Array.isArray(e)) throw new Error("shuffle expect an array as parameter.");
		t = t || {};
		var r, n, o = e,
			a = e.length,
			i = t.rng || Math.random;
		for (!0 === t.copy && (o = e.slice()); a;) r = Math.floor(i() * a), n = o[a -= 1], o[a] = o[r], o[r] = n;
		return o
	}
	n.pick = function(e, t) {
		if (!Array.isArray(e)) throw new Error("shuffle.pick() expect an array as parameter.");
		var r = (t = t || {}).rng || Math.random,
			n = t.picks || 1;
		if ("number" === typeof n && 1 !== n) {
			for (var o, a = e.length, i = e.slice(), s = []; n && a;) o = Math.floor(r() * a), s.push(i[o]), i.splice(o, 1), a -= 1, n -= 1;
			return s
		}
		return e[Math.floor(r() * e.length)]
	}, e.exports = n
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "loadUserTest", (function() {
		return a
	})), r.d(t, "setUserTest", (function() {
		return i
	})), r.d(t, "setShowSaveProgress", (function() {
		return s
	})), r.d(t, "userGoPrevTestPage", (function() {
		return c
	})), r.d(t, "userGoNextTestPage", (function() {
		return l
	})), r.d(t, "userSkipTestPage", (function() {
		return u
	})), r.d(t, "userGoToTestOverview", (function() {
		return f
	})), r.d(t, "userBackToTest", (function() {
		return p
	})), r.d(t, "userNavigateTestToPage", (function() {
		return d
	})), r.d(t, "userDragTestStatements", (function() {
		return h
	})), r.d(t, "submitTest", (function() {
		return m
	})), r.d(t, "startTest", (function() {
		return v
	}));
	var n = r(11),
		o = r(89);

	function a(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
		return {
			type: n.LOAD_USER_STATEMENT_TEST,
			test: e,
			user: t
		}
	}

	function i(e) {
		return {
			type: n.SET_USER_STATEMENT_TEST,
			user: e
		}
	}

	function s() {
		return {
			type: n.SET_SHOW_SAVE_PROGRESS
		}
	}

	function c() {
		return {
			type: n.USER_GO_PREV_STATEMENT_TEST_PAGE
		}
	}

	function l() {
		return {
			type: n.USER_GO_NEXT_STATEMENT_TEST_PAGE
		}
	}

	function u() {
		return {
			type: n.USER_SKIP_STATEMENT_TEST_PAGE
		}
	}

	function f() {
		return {
			type: n.USER_GO_TO_STATEMENT_TEST_OVERVIEW
		}
	}

	function p() {
		return {
			type: n.USER_BACK_TO_STATEMENT_TEST
		}
	}

	function d(e) {
		return {
			type: n.USER_NAVIGATE_STATEMENT_TEST_TO_PAGE,
			page: e
		}
	}

	function h(e, t) {
		return {
			type: n.USER_DRAG_STATEMENT_TEST_STATEMENTS,
			oldIndex: e,
			newIndex: t
		}
	}

	function m(e, t, r) {
		return function(a) {
			o.default.submitTest(e, t).then((function(e) {
				return a(function(e, t) {
					return {
						type: n.USER_SUCCESSFULLY_SUBMITTED_STATEMENT_TEST,
						response: e,
						status: t
					}
				}(e, r))
			})).catch((function(e) {
				console.log(e)
			}))
		}
	}

	function v() {
		return {
			type: n.USER_START_STATEMENT_TEST
		}
	}
}, , function(e, t, r) {
	"use strict";

	function n() {
		var e = {};
		return ["interests", "personality", "motivators"].map((function(t) {
			if (localStorage.getItem(t)) {
				var r = localStorage.getItem(t);
				r = JSON.parse(r);
				var n = [];
				r.filter((function(e) {
					return e.answered
				})).map((function(e) {
					e.statements.map((function(t) {
						n.push({
							statement_id: t.id,
							score: 5 - t.order,
							page: e.page
						})
					}))
				})), e["".concat(t, "_answers")] = n
			}
		})), {
			interests_status: localStorage.getItem("interests_status") || "not_started",
			personality_status: localStorage.getItem("personality_status") || "not_started",
			motivators_status: localStorage.getItem("motivators_status") || "not_started",
			interests_answers: e.interests_answers,
			personality_answers: e.personality_answers,
			motivators_answers: e.motivators_answers
		}
	}
	r.r(t), r.d(t, "tempResultsToHash", (function() {
		return n
	}))
}, function(e, t, r) {
	"use strict";

	function n(e) {
		var t = Object.entries(e).filter((function(e) {
			var t = e[1];
			return void 0 !== t && null !== t
		})).map((function(e) {
			var t = e[0],
				r = e[1];
			return encodeURIComponent(t) + "=" + encodeURIComponent(String(r))
		}));
		return t.length > 0 ? "?" + t.join("&") : ""
	}
	r.d(t, "a", (function() {
		return n
	}))
}, function(e, t, r) {
	"use strict";
	var n, o = r(0),
		a = r.n(o),
		i = r(35),
		s = r.n(i),
		c = (n = function(e, t) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(e, t) {
					e.__proto__ = t
				} || function(e, t) {
					for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
				})(e, t)
		}, function(e, t) {
			function r() {
				this.constructor = e
			}
			n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
		}),
		l = function() {
			return (l = Object.assign || function(e) {
				for (var t, r = 1, n = arguments.length; r < n; r++)
					for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
				return e
			}).apply(this, arguments)
		},
		u = function(e, t, r, n) {
			return new(r || (r = Promise))((function(o, a) {
				function i(e) {
					try {
						c(n.next(e))
					} catch (t) {
						a(t)
					}
				}

				function s(e) {
					try {
						c(n.throw(e))
					} catch (t) {
						a(t)
					}
				}

				function c(e) {
					e.done ? o(e.value) : function(e) {
						return e instanceof r ? e : new r((function(t) {
							t(e)
						}))
					}(e.value).then(i, s)
				}
				c((n = n.apply(e, t || [])).next())
			}))
		},
		f = function(e, t) {
			var r, n, o, a, i = {
				label: 0,
				sent: function() {
					if (1 & o[0]) throw o[1];
					return o[1]
				},
				trys: [],
				ops: []
			};
			return a = {
				next: s(0),
				throw: s(1),
				return: s(2)
			}, "function" === typeof Symbol && (a[Symbol.iterator] = function() {
				return this
			}), a;

			function s(a) {
				return function(s) {
					return function(a) {
						if (r) throw new TypeError("Generator is already executing.");
						for (; i;) try {
							if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
							switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
								case 0:
								case 1:
									o = a;
									break;
								case 4:
									return i.label++, {
										value: a[1],
										done: !1
									};
								case 5:
									i.label++, n = a[1], a = [0];
									continue;
								case 7:
									a = i.ops.pop(), i.trys.pop();
									continue;
								default:
									if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
										i = 0;
										continue
									}
									if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
										i.label = a[1];
										break
									}
									if (6 === a[0] && i.label < o[1]) {
										i.label = o[1], o = a;
										break
									}
									if (o && i.label < o[2]) {
										i.label = o[2], i.ops.push(a);
										break
									}
									o[2] && i.ops.pop(), i.trys.pop();
									continue
							}
							a = t.call(e, i)
						} catch (s) {
							a = [6, s], n = 0
						} finally {
							r = o = 0
						}
						if (5 & a[0]) throw a[1];
						return {
							value: a[0] ? a[1] : void 0,
							done: !0
						}
					}([a, s])
				}
			}
		},
		p = function(e, t) {
			var r = {};
			for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
			if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
				var o = 0;
				for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
			}
			return r
		},
		d = function(e) {
			return !!e && ("object" === typeof e || "function" === typeof e) && "function" === typeof e.then
		},
		h = function(e, t) {
			return {
				left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
				top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
			}
		},
		m = function(e, t) {
			return {
				top: (window.screen.height - t) / 2,
				left: (window.screen.width - e) / 2
			}
		};

	function v(e, t, r) {
		var n = t.height,
			o = t.width,
			a = p(t, ["height", "width"]),
			i = l({
				height: n,
				width: o,
				location: "no",
				toolbar: "no",
				status: "no",
				directories: "no",
				menubar: "no",
				scrollbars: "yes",
				resizable: "no",
				centerscreen: "yes",
				chrome: "yes"
			}, a),
			s = window.open(e, "", Object.keys(i).map((function(e) {
				return e + "=" + i[e]
			})).join(", "));
		if (r) var c = window.setInterval((function() {
			try {
				(null === s || s.closed) && (window.clearInterval(c), r(s))
			} catch (e) {
				console.error(e)
			}
		}), 1e3);
		return s
	}
	var y = function(e) {
			function t() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t.openShareDialog = function(e) {
					var r = t.props,
						n = r.onShareWindowClose,
						o = r.windowHeight,
						a = void 0 === o ? 400 : o,
						i = r.windowPosition,
						s = void 0 === i ? "windowCenter" : i,
						c = r.windowWidth,
						u = void 0 === c ? 550 : c;
					v(e, l({
						height: a,
						width: u
					}, "windowCenter" === s ? h(u, a) : m(u, a)), n)
				}, t.handleClick = function(e) {
					return u(t, void 0, void 0, (function() {
						var t, r, n, o, a, i, s, c, l, u;
						return f(this, (function(f) {
							switch (f.label) {
								case 0:
									return t = this.props, r = t.beforeOnClick, n = t.disabled, o = t.networkLink, a = t.onClick, i = t.url, s = t.openShareDialogOnClick, c = t.opts, l = o(i, c), n ? [2] : (e.preventDefault(), r ? (u = r(), d(u) ? [4, u] : [3, 2]) : [3, 2]);
								case 1:
									f.sent(), f.label = 2;
								case 2:
									return s && this.openShareDialog(l), a && a(e, l), [2]
							}
						}))
					}))
				}, t
			}
			return c(t, e), t.prototype.render = function() {
				var e = this.props,
					t = (e.beforeOnClick, e.children),
					r = e.className,
					n = e.disabled,
					o = e.disabledStyle,
					i = e.forwardedRef,
					c = (e.networkLink, e.networkName),
					u = (e.onShareWindowClose, e.openShareDialogOnClick, e.opts, e.resetButtonStyle),
					f = e.style,
					d = (e.url, e.windowHeight, e.windowPosition, e.windowWidth, p(e, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"])),
					h = s()("react-share__ShareButton", {
						"react-share__ShareButton--disabled": !!n,
						disabled: !!n
					}, r),
					m = l(l(u ? {
						backgroundColor: "transparent",
						border: "none",
						padding: 0,
						font: "inherit",
						color: "inherit",
						cursor: "pointer"
					} : {}, f), n && o);
				return a.a.createElement("button", l({}, d, {
					"aria-label": d["aria-label"] || c,
					className: h,
					onClick: this.handleClick,
					ref: i,
					style: m
				}), t)
			}, t.defaultProps = {
				disabledStyle: {
					opacity: .6
				},
				openShareDialogOnClick: !0,
				resetButtonStyle: !0
			}, t
		}(o.Component),
		b = function() {
			return (b = Object.assign || function(e) {
				for (var t, r = 1, n = arguments.length; r < n; r++)
					for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
				return e
			}).apply(this, arguments)
		};
	t.a = function(e, t, r, n) {
		function i(o, i) {
			var s = r(o),
				c = b({}, o);
			return Object.keys(s).forEach((function(e) {
				delete c[e]
			})), a.a.createElement(y, b({}, n, c, {
				forwardedRef: i,
				networkName: e,
				networkLink: t,
				opts: r(o)
			}))
		}
		return i.displayName = "ShareButton-" + e, Object(o.forwardRef)(i)
	}
}, function(e, t, r) {
	"use strict";
	r.d(t, "a", (function() {
		return i
	}));
	var n, o = (n = function(e, t) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(e, t) {
					e.__proto__ = t
				} || function(e, t) {
					for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
				})(e, t)
		}, function(e, t) {
			function r() {
				this.constructor = e
			}
			n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
		}),
		a = function(e) {
			function t(t) {
				var r = e.call(this, t) || this;
				return r.name = "AssertionError", r
			}
			return o(t, e), t
		}(Error);

	function i(e, t) {
		if (!e) throw new a(t)
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), t.default = {
		filters: {
			profileCompleted: !1,
			selected: [],
			needRefreshSearch: !1,
			qSearch: "",
			location: "",
			initialFilters: {}
		},
		userStatus: {}
	}
}, , , function(e, t, r) {
	"use strict";

	function n(e) {
		return (n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	r.d(t, "a", (function() {
		return n
	}))
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return u
	}));
	var n = r(0),
		o = r.n(n),
		a = r(1);

	function i(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function s(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function c(e, t) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) || function(e, t) {
			var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
			if (null == r) return;
			var n, o, a = [],
				i = !0,
				s = !1;
			try {
				for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
			} catch (c) {
				s = !0, o = c
			} finally {
				try {
					i || null == r.return || r.return()
				} finally {
					if (s) throw o
				}
			}
			return a
		}(e, t) || function(e, t) {
			if (!e) return;
			if ("string" === typeof e) return l(e, t);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			"Object" === r && e.constructor && (r = e.constructor.name);
			if ("Map" === r || "Set" === r) return Array.from(e);
			if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return l(e, t)
		}(e, t) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function l(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
		return n
	}

	function u(e) {
		var t = e.pageName || "page",
			r = function() {
				var t = [];
				if (e.totalPages <= 1) return [];
				var r = e.page - 1,
					n = e.page + 1;
				e.page <= 2 && (r = 1, n = 3), e.page === e.totalPages && (n = e.totalPages, r = e.totalPages - 3 + 1), e.totalPages <= 3 && (r = 1, n = e.totalPages);
				for (var o = r; o <= n; o++) t.push(o);
				return t
			},
			l = c(Object(n.useState)(r()), 2),
			u = l[0],
			f = l[1];
		if (Object(n.useEffect)((function() {
				f(r())
			}), [e.page, e.totalPages]), 0 === u.length) return null;
		var p = function(r) {
			var n = function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2 ? i(Object(r), !0).forEach((function(t) {
						s(e, t, r[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
					}))
				}
				return e
			}({}, e.options);
			delete n[t], r > 1 && (n[t] = r);
			var o = e.path || "".concat(location.origin).concat(location.pathname),
				c = a.actions.paramsToURI(n);
			return c.length > 0 ? "".concat(o, "?").concat(c) : o
		};
		return o.a.createElement("div", {
			className: "grid-x flex-center"
		}, o.a.createElement("nav", {
			"aria-label": "Pagination"
		}, o.a.createElement("ul", {
			className: "pagination text-center"
		}, e.page > 1 ? o.a.createElement("li", {
			className: "pagination-previous"
		}, o.a.createElement("a", {
			href: p(e.page - 1),
			onClick: function(t) {
				return e.goToPage(t, e.page - 1)
			},
			rel: "prev"
		})) : null, u.map((function(t) {
			var r = {
				href: p(t),
				onClick: function(r) {
					return e.goToPage(r, t)
				}
			};
			return e.page - 1 === t && (r.rel = "prev"), e.page + 1 === t && (r.rel = "next"), o.a.createElement("li", {
				key: t,
				className: e.page === t ? "current" : ""
			}, o.a.createElement("a", r, t))
		})), e.page < e.totalPages ? o.a.createElement("li", {
			className: "pagination-next"
		}, o.a.createElement("a", {
			href: p(e.page + 1),
			onClick: function(t) {
				return e.goToPage(t, e.page + 1)
			},
			rel: "next"
		})) : null)))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0);

	function o(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function a(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? o(Object(r), !0).forEach((function(t) {
				i(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function i(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function s(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function c(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function l(e, t) {
		return (l = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function u(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = p(e);
			if (t) {
				var o = p(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return f(this, r)
		}
	}

	function f(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function p(e) {
		return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var d = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && l(e, t)
		}(i, e);
		var t, r, n, o = u(i);

		function i() {
			var e;
			s(this, i);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = o.call.apply(o, [this].concat(r))).state = {
				careers: [],
				isLoading: !0
			}, e.animateBubble = function() {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 4,
					r = parseInt(Math.random() * t),
					n = e.state.careers.map((function(e, t) {
						return t === r ? a(a({}, e), {
							score: Math.floor(50 * Math.random() + 50)
						}) : e
					}));
				e.setState({
					careers: n
				})
			}, e
		}
		return t = i, (r = [{
			key: "render",
			value: function() {
				return null
			}
		}]) && c(t.prototype, r), n && c(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), i
	}(n.Component);
	t.default = d
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return s
	}));
	var n = r(0),
		o = r.n(n),
		a = (r(252), r(168)),
		i = (r(253), r(169));

	function s(e) {
		return o.a.createElement(o.a.Fragment, null, o.a.createElement(a.default, {
			clientId: i.default.googleID,
			onCallback: e.onCallback,
			onSuccess: e.onSuccess,
			onError: e.onError,
			saveAnswers: e.saveAnswers,
			label: e.label
		}))
	}
}, , function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "loadUserTest", (function() {
		return a
	})), r.d(t, "userGoPrevTestPage", (function() {
		return i
	})), r.d(t, "userGoNextTestPage", (function() {
		return s
	})), r.d(t, "userGoNextExampleTestPage", (function() {
		return c
	})), r.d(t, "userGoPrevExampleTestPage", (function() {
		return l
	})), r.d(t, "userGoToTestExample", (function() {
		return u
	})), r.d(t, "userSkipExampleQuestions", (function() {
		return f
	})), r.d(t, "userGoToTestOverview", (function() {
		return p
	})), r.d(t, "userBackToTest", (function() {
		return d
	})), r.d(t, "userNavigateTestToPage", (function() {
		return h
	})), r.d(t, "userTestTimeOut", (function() {
		return m
	})), r.d(t, "userAnswerTestQuestion", (function() {
		return v
	})), r.d(t, "userAnswerExampleTestQuestin", (function() {
		return y
	})), r.d(t, "hideTimeWarning", (function() {
		return b
	})), r.d(t, "submitTest", (function() {
		return g
	})), r.d(t, "startTest", (function() {
		return w
	}));
	var n = r(11),
		o = r(89);

	function a(e, t) {
		return {
			type: n.LOAD_USER_APTITUDE_TEST,
			test: e,
			user: t
		}
	}

	function i() {
		return {
			type: n.USER_GO_PREV_APTITUDE_TEST_PAGE
		}
	}

	function s() {
		return {
			type: n.USER_GO_NEXT_APTITUDE_TEST_PAGE
		}
	}

	function c() {
		return {
			type: n.USER_GO_NEXT_EXAMPLE_APTITUDE_TEST_PAGE
		}
	}

	function l() {
		return {
			type: n.USER_GO_PREV_EXAMPLE_APTITUDE_TEST_PAGE
		}
	}

	function u() {
		return {
			type: n.USER_GO_EXAMPLE_APTITUDE_TEST_PAGE
		}
	}

	function f() {
		return {
			type: n.USER_SKIP_EXAMPLE_QUESTIONS
		}
	}

	function p() {
		return {
			type: n.USER_GO_TO_APTITUDE_TEST_OVERVIEW
		}
	}

	function d() {
		return {
			type: n.USER_BACK_TO_APTITUDE_TEST
		}
	}

	function h(e) {
		return {
			type: n.USER_NAVIGATE_APTITUDE_TEST_TO_PAGE,
			page: e
		}
	}

	function m() {
		return {
			type: n.USER_APTITUDE_TEST_TIMEOUT
		}
	}

	function v(e) {
		return {
			type: n.USER_ANSWER_APTITUDE_TEST_QUESTION,
			answer_id: e
		}
	}

	function y(e) {
		return {
			type: n.USER_ANSWER_EXAMPLE_APTITUDE_TEST_QUESTION,
			answer_id: e
		}
	}

	function b() {
		return {
			type: n.USER_HIDE_TIME_WARNING_APTITUDE_TEST
		}
	}

	function g(e, t, r) {
		return function(a) {
			o.default.submitTest(e, t).then((function(e) {
				return a(function(e, t) {
					return {
						type: n.USER_SUCCESSFULLY_SUBMITTED_APTITUDE_TEST,
						response: e,
						status: t
					}
				}(e, r))
			})).catch((function(e) {
				console.log(e)
			}))
		}
	}

	function w() {
		return {
			type: n.USER_START_APTITUDE_TEST
		}
	}
}, function(e, t, r) {
	"use strict";

	function n(e, t) {
		return (n = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function o(e, t) {
		if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), t && n(e, t)
	}
	r.d(t, "a", (function() {
		return o
	}))
}, , function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.forceVisible = t.forceCheck = t.lazyload = void 0;
	var n = function() {
			function e(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
				}
			}
			return function(t, r, n) {
				return r && e(t.prototype, r), n && e(t, n), t
			}
		}(),
		o = r(0),
		a = p(o),
		i = p(r(14)),
		s = p(r(4)),
		c = r(585),
		l = p(r(586)),
		u = p(r(587)),
		f = p(r(588));

	function p(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function d(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function h(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" !== typeof t && "function" !== typeof t ? e : t
	}

	function m(e, t) {
		if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	var v = 0,
		y = 0,
		b = 0,
		g = 0,
		w = "data-lazyload-listened",
		E = [],
		_ = [],
		O = !1;
	try {
		var S = Object.defineProperty({}, "passive", {
			get: function() {
				O = !0
			}
		});
		window.addEventListener("test", null, S)
	} catch (L) {}
	var T = !!O && {
			capture: !1,
			passive: !0
		},
		j = function(e) {
			var t = i.default.findDOMNode(e);
			if (t instanceof HTMLElement) {
				var r = (0, l.default)(t);
				(e.props.overflow && r !== t.ownerDocument && r !== document && r !== document.documentElement ? function(e, t) {
					var r = i.default.findDOMNode(e),
						n = void 0,
						o = void 0,
						a = void 0,
						s = void 0;
					try {
						var c = t.getBoundingClientRect();
						n = c.top, o = c.left, a = c.height, s = c.width
					} catch (L) {
						n = v, o = y, a = g, s = b
					}
					var l = window.innerHeight || document.documentElement.clientHeight,
						u = window.innerWidth || document.documentElement.clientWidth,
						f = Math.max(n, 0),
						p = Math.max(o, 0),
						d = Math.min(l, n + a) - f,
						h = Math.min(u, o + s) - p,
						m = void 0,
						w = void 0,
						E = void 0,
						_ = void 0;
					try {
						var O = r.getBoundingClientRect();
						m = O.top, w = O.left, E = O.height, _ = O.width
					} catch (L) {
						m = v, w = y, E = g, _ = b
					}
					var S = m - f,
						T = w - p,
						j = Array.isArray(e.props.offset) ? e.props.offset : [e.props.offset, e.props.offset];
					return S - j[0] <= d && S + E + j[1] >= 0 && T - j[0] <= h && T + _ + j[1] >= 0
				}(e, r) : function(e) {
					var t = i.default.findDOMNode(e);
					if (!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)) return !1;
					var r = void 0,
						n = void 0;
					try {
						var o = t.getBoundingClientRect();
						r = o.top, n = o.height
					} catch (L) {
						r = v, n = g
					}
					var a = window.innerHeight || document.documentElement.clientHeight,
						s = Array.isArray(e.props.offset) ? e.props.offset : [e.props.offset, e.props.offset];
					return r - s[0] <= a && r + n + s[1] >= 0
				}(e)) ? e.visible || (e.props.once && _.push(e), e.visible = !0, e.forceUpdate()): e.props.once && e.visible || (e.visible = !1, e.props.unmountIfInvisible && e.forceUpdate())
			}
		},
		x = function() {
			_.forEach((function(e) {
				var t = E.indexOf(e); - 1 !== t && E.splice(t, 1)
			})), _ = []
		},
		P = function() {
			for (var e = 0; e < E.length; ++e) {
				var t = E[e];
				j(t)
			}
			x()
		},
		k = void 0,
		N = null,
		R = function(e) {
			function t(e) {
				d(this, t);
				var r = h(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return r.visible = !1, r
			}
			return m(t, e), n(t, [{
				key: "componentDidMount",
				value: function() {
					var e = window,
						t = this.props.scrollContainer;
					t && "string" === typeof t && (e = e.document.querySelector(t));
					var r = void 0 !== this.props.debounce && "throttle" === k || "debounce" === k && void 0 === this.props.debounce;
					if (r && ((0, c.off)(e, "scroll", N, T), (0, c.off)(window, "resize", N, T), N = null), N || (void 0 !== this.props.debounce ? (N = (0, u.default)(P, "number" === typeof this.props.debounce ? this.props.debounce : 300), k = "debounce") : void 0 !== this.props.throttle ? (N = (0, f.default)(P, "number" === typeof this.props.throttle ? this.props.throttle : 300), k = "throttle") : N = P), this.props.overflow) {
						var n = (0, l.default)(i.default.findDOMNode(this));
						if (n && "function" === typeof n.getAttribute) {
							var o = +n.getAttribute(w) + 1;
							1 === o && n.addEventListener("scroll", N, T), n.setAttribute(w, o)
						}
					} else if (0 === E.length || r) {
						var a = this.props,
							s = a.scroll,
							p = a.resize;
						s && (0, c.on)(e, "scroll", N, T), p && (0, c.on)(window, "resize", N, T)
					}
					E.push(this), j(this)
				}
			}, {
				key: "shouldComponentUpdate",
				value: function() {
					return this.visible
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					if (this.props.overflow) {
						var e = (0, l.default)(i.default.findDOMNode(this));
						if (e && "function" === typeof e.getAttribute) {
							var t = +e.getAttribute(w) - 1;
							0 === t ? (e.removeEventListener("scroll", N, T), e.removeAttribute(w)) : e.setAttribute(w, t)
						}
					}
					var r = E.indexOf(this); - 1 !== r && E.splice(r, 1), 0 === E.length && "undefined" !== typeof window && ((0, c.off)(window, "resize", N, T), (0, c.off)(window, "scroll", N, T))
				}
			}, {
				key: "render",
				value: function() {
					return this.visible ? this.props.children : this.props.placeholder ? this.props.placeholder : a.default.createElement("div", {
						style: {
							height: this.props.height
						},
						className: "lazyload-placeholder"
					})
				}
			}]), t
		}(o.Component);
	R.propTypes = {
		once: s.default.bool,
		height: s.default.oneOfType([s.default.number, s.default.string]),
		offset: s.default.oneOfType([s.default.number, s.default.arrayOf(s.default.number)]),
		overflow: s.default.bool,
		resize: s.default.bool,
		scroll: s.default.bool,
		children: s.default.node,
		throttle: s.default.oneOfType([s.default.number, s.default.bool]),
		debounce: s.default.oneOfType([s.default.number, s.default.bool]),
		placeholder: s.default.node,
		scrollContainer: s.default.oneOfType([s.default.string, s.default.object]),
		unmountIfInvisible: s.default.bool
	}, R.defaultProps = {
		once: !1,
		offset: 0,
		overflow: !1,
		resize: !1,
		scroll: !0,
		unmountIfInvisible: !1
	};
	var C = function(e) {
		return e.displayName || e.name || "Component"
	};
	t.lazyload = function() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
		return function(t) {
			return function(r) {
				function o() {
					d(this, o);
					var e = h(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this));
					return e.displayName = "LazyLoad" + C(t), e
				}
				return m(o, r), n(o, [{
					key: "render",
					value: function() {
						return a.default.createElement(R, e, a.default.createElement(t, this.props))
					}
				}]), o
			}(o.Component)
		}
	}, t.default = R, t.forceCheck = P, t.forceVisible = function() {
		for (var e = 0; e < E.length; ++e) {
			var t = E[e];
			t.visible = !0, t.forceUpdate()
		}
		x()
	}
}, , function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return s
	}));
	var n = r(0),
		o = r.n(n);

	function a(e, t) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) || function(e, t) {
			var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
			if (null == r) return;
			var n, o, a = [],
				i = !0,
				s = !1;
			try {
				for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
			} catch (c) {
				s = !0, o = c
			} finally {
				try {
					i || null == r.return || r.return()
				} finally {
					if (s) throw o
				}
			}
			return a
		}(e, t) || function(e, t) {
			if (!e) return;
			if ("string" === typeof e) return i(e, t);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			"Object" === r && e.constructor && (r = e.constructor.name);
			if ("Map" === r || "Set" === r) return Array.from(e);
			if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return i(e, t)
		}(e, t) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function i(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
		return n
	}

	function s(e) {
		var t = a(Object(n.useState)(e.score), 2),
			r = t[0],
			i = t[1],
			s = a(Object(n.useState)(e.hideScore), 2),
			c = s[0],
			l = s[1],
			u = parseInt(r / 10),
			f = a(Object(n.useState)("match-tank pulse_".concat(u)), 2),
			p = f[0],
			d = f[1],
			h = a(Object(n.useState)("fill fillAction_".concat(u)), 2),
			m = h[0],
			v = h[1],
			y = a(Object(n.useState)("translate(0, ".concat(68 - 68 * r / 100, "px)")), 2),
			b = y[0],
			g = y[1],
			w = e.matchText || "match";
		return Object(n.useEffect)((function() {
			var t;
			t = parseInt(r / 10), d("match-tank pulseDrain_".concat(t)), v("drainAction_".concat(t)), i(e.score), l(e.hideScore);
			var n = setTimeout((function() {
				! function(e) {
					var t = parseInt(e / 10);
					d("match-tank pulse_".concat(t)), v("fill fillAction_".concat(t));
					var r = "translate(0, ".concat(60 - 60 * e / 100, "px)");
					g(r)
				}(e.score)
			}), 500);
			return function() {
				clearTimeout(n)
			}
		}), [e.score]), o.a.createElement("div", {
			className: p
		}, o.a.createElement("div", {
			className: "inner"
		}, o.a.createElement("div", {
			className: m,
			style: {
				transform: b
			}
		}, o.a.createElement("svg", {
			version: "1.1",
			x: "0px",
			y: "0px",
			width: "88px",
			height: "88px",
			viewBox: "0 0 88 88",
			enableBackground: "new 0 0 88 88"
		}, o.a.createElement("path", {
			className: "wave-shape",
			d: "M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4\nc-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9\nc-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z"
		})))), o.a.createElement("div", {
			className: "match-percent hidden ".concat(e.hideMatch ? "centered" : "")
		}, o.a.createElement("div", {
			className: "qm"
		}, c ? "?" : "".concat(r, "%")), e.hideMatch ? "" : w))
	}
}, function(e, t, r) {
	"use strict";
	(function(e, n) {
		var o, a = r(109);
		o = "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : "undefined" !== typeof e ? e : n;
		var i = Object(a.a)(o);
		t.a = i
	}).call(this, r(77), r(161)(e))
}, , function(e, t, r) {
	"use strict";

	function n(e) {
		return (n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}
	r.d(t, "a", (function() {
		return a
	}));
	var o = r(8);

	function a(e, t) {
		return !t || "object" !== n(t) && "function" !== typeof t ? Object(o.a)(e) : t
	}
}, function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = void 0;
	var n = {
			MAC_ENTER: 3,
			BACKSPACE: 8,
			TAB: 9,
			NUM_CENTER: 12,
			ENTER: 13,
			SHIFT: 16,
			CTRL: 17,
			ALT: 18,
			PAUSE: 19,
			CAPS_LOCK: 20,
			ESC: 27,
			SPACE: 32,
			PAGE_UP: 33,
			PAGE_DOWN: 34,
			END: 35,
			HOME: 36,
			LEFT: 37,
			UP: 38,
			RIGHT: 39,
			DOWN: 40,
			PRINT_SCREEN: 44,
			INSERT: 45,
			DELETE: 46,
			ZERO: 48,
			ONE: 49,
			TWO: 50,
			THREE: 51,
			FOUR: 52,
			FIVE: 53,
			SIX: 54,
			SEVEN: 55,
			EIGHT: 56,
			NINE: 57,
			QUESTION_MARK: 63,
			A: 65,
			B: 66,
			C: 67,
			D: 68,
			E: 69,
			F: 70,
			G: 71,
			H: 72,
			I: 73,
			J: 74,
			K: 75,
			L: 76,
			M: 77,
			N: 78,
			O: 79,
			P: 80,
			Q: 81,
			R: 82,
			S: 83,
			T: 84,
			U: 85,
			V: 86,
			W: 87,
			X: 88,
			Y: 89,
			Z: 90,
			META: 91,
			WIN_KEY_RIGHT: 92,
			CONTEXT_MENU: 93,
			NUM_ZERO: 96,
			NUM_ONE: 97,
			NUM_TWO: 98,
			NUM_THREE: 99,
			NUM_FOUR: 100,
			NUM_FIVE: 101,
			NUM_SIX: 102,
			NUM_SEVEN: 103,
			NUM_EIGHT: 104,
			NUM_NINE: 105,
			NUM_MULTIPLY: 106,
			NUM_PLUS: 107,
			NUM_MINUS: 109,
			NUM_PERIOD: 110,
			NUM_DIVISION: 111,
			F1: 112,
			F2: 113,
			F3: 114,
			F4: 115,
			F5: 116,
			F6: 117,
			F7: 118,
			F8: 119,
			F9: 120,
			F10: 121,
			F11: 122,
			F12: 123,
			NUMLOCK: 144,
			SEMICOLON: 186,
			DASH: 189,
			EQUALS: 187,
			COMMA: 188,
			PERIOD: 190,
			SLASH: 191,
			APOSTROPHE: 192,
			SINGLE_QUOTE: 222,
			OPEN_SQUARE_BRACKET: 219,
			BACKSLASH: 220,
			CLOSE_SQUARE_BRACKET: 221,
			WIN_KEY: 224,
			MAC_FF_META: 224,
			WIN_IME: 229,
			isTextModifyingKeyEvent: function(e) {
				var t = e.keyCode;
				if (e.altKey && !e.ctrlKey || e.metaKey || t >= n.F1 && t <= n.F12) return !1;
				switch (t) {
					case n.ALT:
					case n.CAPS_LOCK:
					case n.CONTEXT_MENU:
					case n.CTRL:
					case n.DOWN:
					case n.END:
					case n.ESC:
					case n.HOME:
					case n.INSERT:
					case n.LEFT:
					case n.MAC_FF_META:
					case n.META:
					case n.NUMLOCK:
					case n.NUM_CENTER:
					case n.PAGE_DOWN:
					case n.PAGE_UP:
					case n.PAUSE:
					case n.PRINT_SCREEN:
					case n.RIGHT:
					case n.SHIFT:
					case n.UP:
					case n.WIN_KEY:
					case n.WIN_KEY_RIGHT:
						return !1;
					default:
						return !0
				}
			},
			isCharacterKey: function(e) {
				if (e >= n.ZERO && e <= n.NINE) return !0;
				if (e >= n.NUM_ZERO && e <= n.NUM_MULTIPLY) return !0;
				if (e >= n.A && e <= n.Z) return !0;
				if (-1 !== window.navigator.userAgent.indexOf("WebKit") && 0 === e) return !0;
				switch (e) {
					case n.SPACE:
					case n.QUESTION_MARK:
					case n.NUM_PLUS:
					case n.NUM_MINUS:
					case n.NUM_PERIOD:
					case n.NUM_DIVISION:
					case n.SEMICOLON:
					case n.DASH:
					case n.EQUALS:
					case n.COMMA:
					case n.PERIOD:
					case n.SLASH:
					case n.APOSTROPHE:
					case n.SINGLE_QUOTE:
					case n.OPEN_SQUARE_BRACKET:
					case n.BACKSLASH:
					case n.CLOSE_SQUARE_BRACKET:
						return !0;
					default:
						return !1
				}
			}
		},
		o = n;
	t.default = o
}, function(e, t) {
	var r;
	r = function() {
		return this
	}();
	try {
		r = r || new Function("return this")()
	} catch (n) {
		"object" === typeof window && (r = window)
	}
	e.exports = r
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return o
	}));
	var n = r(0);

	function o(e, t) {
		var r = function(r) {
			e.current && !e.current.contains(event.target) && t()
		};
		Object(n.useEffect)((function() {
			return document.addEventListener("mousedown", r),
				function() {
					document.removeEventListener("mousedown", r)
				}
		}))
	}
}, function(e, t, r) {
	"use strict";

	function n(e) {
		return function(t) {
			var r = t.dispatch,
				n = t.getState;
			return function(t) {
				return function(o) {
					return "function" === typeof o ? o(r, n, e) : t(o)
				}
			}
		}
	}
	var o = n();
	o.withExtraArgument = n, t.a = o
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(94),
		i = r(126);

	function s(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function c(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function l(e, t) {
		return (l = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function u(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = p(e);
			if (t) {
				var o = p(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return f(this, r)
		}
	}

	function f(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function p(e) {
		return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var d = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && l(e, t)
		}(p, e);
		var t, r, n, f = u(p);

		function p() {
			var e;
			s(this, p);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = f.call.apply(f, [this].concat(r))).state = {
				showTooltip: !1
			}, e.tooltipRef = o.a.createRef(), e.newsletterTooltip = function() {
				return o.a.createElement(i.TooltipPortal, {
					areaRef: e.tooltipRef
				}, o.a.createElement(i.TooltipPopover, null, o.a.createElement("span", null, "The Dose by CareerAddict is sent 3 times per week and covers the latest and best career success hacks! Unsubscribe anytime, it's FREE!")))
			}, e
		}
		return t = p, (r = [{
			key: "render",
			value: function() {
				var e = this;
				return o.a.createElement(o.a.Fragment, null, this.state.showTooltip && this.newsletterTooltip(), o.a.createElement("div", {
					className: "input-tick-wrapper",
					ref: this.tooltipRef,
					onMouseOver: function() {
						e.setState({
							showTooltip: !0
						})
					},
					onMouseLeave: function() {
						e.setState({
							showTooltip: !1
						})
					}
				}, o.a.createElement(a.default, {
					name: "newsletter_subscription",
					value: this.props.newsletter_subscription,
					errorTypeMessage: "tooltip" !== this.props.errorType,
					onChange: this.props.onHandleChange
				})))
			}
		}]) && c(t.prototype, r), n && c(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), p
	}(o.a.Component);
	t.default = d
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(1),
		i = r(27),
		s = r(3),
		c = r(6),
		l = r(166),
		u = r(167),
		f = r(22),
		p = r(65);

	function d(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function h(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? d(Object(r), !0).forEach((function(t) {
				m(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function m(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function v() {
		v = function() {
			return e
		};
		var e = {},
			t = Object.prototype,
			r = t.hasOwnProperty,
			n = "function" == typeof Symbol ? Symbol : {},
			o = n.iterator || "@@iterator",
			a = n.asyncIterator || "@@asyncIterator",
			i = n.toStringTag || "@@toStringTag";

		function s(e, t, r) {
			return Object.defineProperty(e, t, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}), e[t]
		}
		try {
			s({}, "")
		} catch (x) {
			s = function(e, t, r) {
				return e[t] = r
			}
		}

		function c(e, t, r, n) {
			var o = t && t.prototype instanceof f ? t : f,
				a = Object.create(o.prototype),
				i = new S(n || []);
			return a._invoke = function(e, t, r) {
				var n = "suspendedStart";
				return function(o, a) {
					if ("executing" === n) throw new Error("Generator is already running");
					if ("completed" === n) {
						if ("throw" === o) throw a;
						return j()
					}
					for (r.method = o, r.arg = a;;) {
						var i = r.delegate;
						if (i) {
							var s = E(i, r);
							if (s) {
								if (s === u) continue;
								return s
							}
						}
						if ("next" === r.method) r.sent = r._sent = r.arg;
						else if ("throw" === r.method) {
							if ("suspendedStart" === n) throw n = "completed", r.arg;
							r.dispatchException(r.arg)
						} else "return" === r.method && r.abrupt("return", r.arg);
						n = "executing";
						var c = l(e, t, r);
						if ("normal" === c.type) {
							if (n = r.done ? "completed" : "suspendedYield", c.arg === u) continue;
							return {
								value: c.arg,
								done: r.done
							}
						}
						"throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
					}
				}
			}(e, r, i), a
		}

		function l(e, t, r) {
			try {
				return {
					type: "normal",
					arg: e.call(t, r)
				}
			} catch (x) {
				return {
					type: "throw",
					arg: x
				}
			}
		}
		e.wrap = c;
		var u = {};

		function f() {}

		function p() {}

		function d() {}
		var h = {};
		s(h, o, (function() {
			return this
		}));
		var m = Object.getPrototypeOf,
			y = m && m(m(T([])));
		y && y !== t && r.call(y, o) && (h = y);
		var b = d.prototype = f.prototype = Object.create(h);

		function g(e) {
			["next", "throw", "return"].forEach((function(t) {
				s(e, t, (function(e) {
					return this._invoke(t, e)
				}))
			}))
		}

		function w(e, t) {
			var n;
			this._invoke = function(o, a) {
				function i() {
					return new t((function(n, i) {
						! function n(o, a, i, s) {
							var c = l(e[o], e, a);
							if ("throw" !== c.type) {
								var u = c.arg,
									f = u.value;
								return f && "object" == typeof f && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
									n("next", e, i, s)
								}), (function(e) {
									n("throw", e, i, s)
								})) : t.resolve(f).then((function(e) {
									u.value = e, i(u)
								}), (function(e) {
									return n("throw", e, i, s)
								}))
							}
							s(c.arg)
						}(o, a, n, i)
					}))
				}
				return n = n ? n.then(i, i) : i()
			}
		}

		function E(e, t) {
			var r = e.iterator[t.method];
			if (void 0 === r) {
				if (t.delegate = null, "throw" === t.method) {
					if (e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method)) return u;
					t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
				}
				return u
			}
			var n = l(r, e.iterator, t.arg);
			if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
			var o = n.arg;
			return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
		}

		function _(e) {
			var t = {
				tryLoc: e[0]
			};
			1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
		}

		function O(e) {
			var t = e.completion || {};
			t.type = "normal", delete t.arg, e.completion = t
		}

		function S(e) {
			this.tryEntries = [{
				tryLoc: "root"
			}], e.forEach(_, this), this.reset(!0)
		}

		function T(e) {
			if (e) {
				var t = e[o];
				if (t) return t.call(e);
				if ("function" == typeof e.next) return e;
				if (!isNaN(e.length)) {
					var n = -1,
						a = function t() {
							for (; ++n < e.length;)
								if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
							return t.value = void 0, t.done = !0, t
						};
					return a.next = a
				}
			}
			return {
				next: j
			}
		}

		function j() {
			return {
				value: void 0,
				done: !0
			}
		}
		return p.prototype = d, s(b, "constructor", d), s(d, "constructor", p), p.displayName = s(d, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
			var t = "function" == typeof e && e.constructor;
			return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
		}, e.mark = function(e) {
			return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, s(e, i, "GeneratorFunction")), e.prototype = Object.create(b), e
		}, e.awrap = function(e) {
			return {
				__await: e
			}
		}, g(w.prototype), s(w.prototype, a, (function() {
			return this
		})), e.AsyncIterator = w, e.async = function(t, r, n, o, a) {
			void 0 === a && (a = Promise);
			var i = new w(c(t, r, n, o), a);
			return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
				return e.done ? e.value : i.next()
			}))
		}, g(b), s(b, i, "Generator"), s(b, o, (function() {
			return this
		})), s(b, "toString", (function() {
			return "[object Generator]"
		})), e.keys = function(e) {
			var t = [];
			for (var r in e) t.push(r);
			return t.reverse(),
				function r() {
					for (; t.length;) {
						var n = t.pop();
						if (n in e) return r.value = n, r.done = !1, r
					}
					return r.done = !0, r
				}
		}, e.values = T, S.prototype = {
			constructor: S,
			reset: function(e) {
				if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !e)
					for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
			},
			stop: function() {
				this.done = !0;
				var e = this.tryEntries[0].completion;
				if ("throw" === e.type) throw e.arg;
				return this.rval
			},
			dispatchException: function(e) {
				if (this.done) throw e;
				var t = this;

				function n(r, n) {
					return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
				}
				for (var o = this.tryEntries.length - 1; o >= 0; --o) {
					var a = this.tryEntries[o],
						i = a.completion;
					if ("root" === a.tryLoc) return n("end");
					if (a.tryLoc <= this.prev) {
						var s = r.call(a, "catchLoc"),
							c = r.call(a, "finallyLoc");
						if (s && c) {
							if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
							if (this.prev < a.finallyLoc) return n(a.finallyLoc)
						} else if (s) {
							if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
						} else {
							if (!c) throw new Error("try statement without catch or finally");
							if (this.prev < a.finallyLoc) return n(a.finallyLoc)
						}
					}
				}
			},
			abrupt: function(e, t) {
				for (var n = this.tryEntries.length - 1; n >= 0; --n) {
					var o = this.tryEntries[n];
					if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
						var a = o;
						break
					}
				}
				a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
				var i = a ? a.completion : {};
				return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(i)
			},
			complete: function(e, t) {
				if ("throw" === e.type) throw e.arg;
				return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
			},
			finish: function(e) {
				for (var t = this.tryEntries.length - 1; t >= 0; --t) {
					var r = this.tryEntries[t];
					if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), O(r), u
				}
			},
			catch: function(e) {
				for (var t = this.tryEntries.length - 1; t >= 0; --t) {
					var r = this.tryEntries[t];
					if (r.tryLoc === e) {
						var n = r.completion;
						if ("throw" === n.type) {
							var o = n.arg;
							O(r)
						}
						return o
					}
				}
				throw new Error("illegal catch attempt")
			},
			delegateYield: function(e, t, r) {
				return this.delegate = {
					iterator: T(e),
					resultName: t,
					nextLoc: r
				}, "next" === this.method && (this.arg = void 0), u
			}
		}, e
	}

	function y(e, t, r, n, o, a, i) {
		try {
			var s = e[a](i),
				c = s.value
		} catch (l) {
			return void r(l)
		}
		s.done ? t(c) : Promise.resolve(c).then(n, o)
	}

	function b(e) {
		return function() {
			var t = this,
				r = arguments;
			return new Promise((function(n, o) {
				var a = e.apply(t, r);

				function i(e) {
					y(a, n, o, i, s, "next", e)
				}

				function s(e) {
					y(a, n, o, i, s, "throw", e)
				}
				i(void 0)
			}))
		}
	}

	function g(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function w(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function E(e, t) {
		return (E = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function _(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = T(e);
			if (t) {
				var o = T(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return O(this, r)
		}
	}

	function O(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return S(e)
	}

	function S(e) {
		if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function T(e) {
		return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var j = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && E(e, t)
		}(m, e);
		var t, r, n, d = _(m);

		function m() {
			var e;
			g(this, m);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = d.call.apply(d, [this].concat(r))).rewriteResultsModal = o.a.createRef(), e.cannotRewriteResultsModal = o.a.createRef(), e.state = {
				user: {
					email: e.props.user.email,
					errors: {}
				},
				isLoading: !1,
				currentStep: "email",
				className: e.props.className || "form-container",
				userChecked: !1,
				userState: null
			}, e.afterLogin = function(t, r) {
				e.props.afterLogin ? (e.setState({
					isLoading: !1
				}), e.props.afterLogin(t, r)) : document.location.href = e.props.continue_path || "/dashboard"
			}, e.login = function(t) {
				var r = S(e),
					n = !1 !== r.props.clearSession || !t;
				e.setState({
					isLoading: !0
				}, (function() {
					var o = r.state.user;
					i.default.loginUser(e.state.user, t).then(function() {
						var e = b(v().mark((function e(o) {
							return v().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										o ? (n && localStorage.clear(), r.afterLogin(o, t)) : r.setState({
											isLoading: !1
										});
									case 1:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}()).catch((function(e) {
						console.log(e), e.json().then((function(e) {
							o.errors = e, r.setState({
								user: o,
								isLoading: !1
							})
						}))
					}))
				}))
			}, e.beforeLogin = function(t) {
				t.preventDefault();
				var r = e.props.saveAnswers,
					n = S(e);
				e.state.userChecked ? r && "not_started" !== e.props.user.interests_status && localStorage.getItem("interests") ? n.setState({
					isLoading: !0
				}, (function() {
					var e = n.state.user;
					i.default.beforeLoginUser(n.state.user).then(function() {
						var e = b(v().mark((function e(t) {
							return v().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										n.setState({
											isLoading: !1
										}), t && t.can_login && (n.props.user.educator_id && "finished" === n.props.user.interests_status ? n.cannotRewriteResultsModal.current.open() : n.rewriteResultsModal.current.open());
									case 2:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}()).catch((function(t) {
						console.log(t), t.json().then((function(t) {
							e.errors = t, n.setState({
								user: e,
								isLoading: !1
							})
						}))
					}))
				})) : e.login(r) : e.checkUser(t)
			}, e.onConfirmSaveResults = function() {
				e.login(!0), e.rewriteResultsModal.current.close()
			}, e.onCancelSaveResults = function() {
				e.login(!1), e.rewriteResultsModal.current.close()
			}, e.onOkCannotSaveResults = function() {
				e.login(!1), e.cannotRewriteResultsModal.current.close()
			}, e.onHandleChange = function(t) {
				console.log("onChange");
				var r = "customP" === t.target.name ? "password" : t.target.name,
					n = "remember_me" === r ? t.target.checked : t.target.value,
					o = e.state.user;
				o[r] = n, o.errors[a.actions.camelize(r)] = "", e.setState({
					user: o
				})
			}, e.onHandleEmailChange = function(t) {
				console.log("onEmailChange");
				var r = t.target.value,
					n = e.state.user;
				n.email = r, n.errors[a.actions.camelize("email")] = "", e.setState({
					user: n,
					userChecked: !1
				})
			}, e.checkUser = function(t) {
				if (t.preventDefault(), !e.state.userChecked)
					if (e.state.user.email) {
						var r = S(e);
						e.setState({
							isLoading: !0
						}, (function() {
							var t = r.state.user;
							i.default.getUser(e.state.user).then((function(n) {
								n && n.id ? n.temp ? e.props.onUserLoad(n) : e.setState({
									userState: "login_form",
									userChecked: !0
								}) : (t.errors.email = "Email not found", r.setState({
									user: t
								})), r.setState({
									isLoading: !1,
									userChecked: !0
								})
							})).catch((function(e) {
								e.json().then((function(e) {
									t.errors = e, r.setState({
										user: t,
										isLoading: !1,
										userChecked: !1
									})
								}))
							}))
						}))
					} else e.setState({
						user: h(h({}, e.state.user), {}, {
							errors: {
								email: "Email is required"
							}
						})
					})
			}, e.submitOnEnter = function(t) {
				"Enter" === t.key && e.beforeLogin(t)
			}, e.onSocialLoginSuccess = function() {
				document.location.href = "/set-up"
			}, e.omniResponse = function(t) {
				e.setState({
					isLoading: !0
				}, t)
			}, e.onSocialLoginError = function(t) {
				t ? e.props.openRegistration(t) : e.setState({
					isLoading: !1
				})
			}, e
		}
		return t = m, (r = [{
			key: "render",
			value: function() {
				return o.a.createElement("div", {
					className: "login-register",
					onSubmit: this.login
				}, this.state.isLoading ? o.a.createElement(a.Loader, null) : null, o.a.createElement("div", {
					className: "grid-x text-center-medium"
				}, o.a.createElement("div", {
					className: "small-12 cell"
				}, o.a.createElement("h1", {
					className: "set-up__header"
				}, "Welcome back!"), o.a.createElement("p", {
					className: "set-up__subheader"
				}, "Access your career matching dashboard")), o.a.createElement("div", {
					className: "small-12 cell"
				}, o.a.createElement(a.TextField, {
					name: "customE",
					errorMessage: this.state.user.errors.email,
					onKeyPress: this.submitOnEnter,
					onChange: this.onHandleEmailChange,
					placeholder: "Email*",
					value: this.state.user.email
				}), o.a.createElement(a.InputTypeField, {
					type: "password",
					name: "customP",
					placeholder: "Password*",
					errorMessage: this.state.user.errors.base,
					onKeyPress: this.submitOnEnter,
					onChange: this.onHandleChange,
					onFocus: this.checkUser,
					value: this.state.user.password
				}))), o.a.createElement("div", {
					className: "grid-x align-middle text-center-small"
				}, o.a.createElement("div", {
					className: "medium-6 small-12 cell  text-left-center"
				}, o.a.createElement(f.default, {
					name: "remember_me",
					label: "Keep me logged in",
					onChange: this.onHandleChange,
					value: this.state.user.remember_me
				})), o.a.createElement("div", {
					className: "medium-6 small-12 cell medium-flex-end"
				}, o.a.createElement(s.default, {
					className: "button--green--large",
					onClick: this.beforeLogin
				}, "Log in ", o.a.createElement("span", {
					className: "small-icons next-arrow-white-l"
				})))), o.a.createElement("div", {
					className: "grid-x align-middle mar-top-10 text-center-small"
				}, o.a.createElement("div", {
					className: "medium-6 small-12 cell medium-order-1 small-order-2 text-left-center"
				}, o.a.createElement("p", {
					className: "registration__link"
				}, "Don\u2019t have an account? ", o.a.createElement("a", {
					href: "/register"
				}, "Sign up"))), o.a.createElement("div", {
					className: "medium-6 small-12 cell medium-flex-end medium-order-2 small-order-1"
				}, o.a.createElement("a", {
					onClick: this.props.onClickForgotPassword,
					className: "login-register__forgot"
				}, "Forgot your password?"))), o.a.createElement("div", {
					className: "grid-x"
				}, o.a.createElement("div", {
					className: "small-12 cell login-register__social"
				}, o.a.createElement("p", {
					className: "login-register__or"
				}, "or"), o.a.createElement(p.default, {
					onCallback: this.omniResponse,
					label: "Log in with",
					saveAnswers: this.props.saveAnswers,
					onSuccess: this.onSocialLoginSuccess,
					onError: this.onSocialLoginError
				}))), o.a.createElement(c.default, {
					ref: this.rewriteResultsModal
				}, o.a.createElement(l.default, {
					onConfirm: this.onConfirmSaveResults,
					onCancel: this.onCancelSaveResults
				})), o.a.createElement(c.default, {
					ref: this.cannotRewriteResultsModal
				}, o.a.createElement(u.default, {
					company: this.props.user.educator_name,
					onCancel: this.onOkCannotSaveResults
				})))
			}
		}]) && w(t.prototype, r), n && w(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), m
	}(o.a.Component);
	t.default = j
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(1),
		i = r(27),
		s = r(3);

	function c(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function l(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? c(Object(r), !0).forEach((function(t) {
				u(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function u(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function f(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function p(e, t) {
		return (p = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function d(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = m(e);
			if (t) {
				var o = m(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return h(this, r)
		}
	}

	function h(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function m(e) {
		return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var v = {
			email: "",
			errors: {}
		},
		y = function(e) {
			! function(e, t) {
				if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), Object.defineProperty(e, "prototype", {
					writable: !1
				}), t && p(e, t)
			}(u, e);
			var t, r, n, c = d(u);

			function u(e) {
				var t;
				return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, u), (t = c.call(this, e)).onChangeField = function(e) {
					var r = e.target.name,
						n = e.target.value,
						o = t.state.user;
					o[r] = n, o.errors[a.actions.camelize(r)] = "", t.setState({
						user: o
					})
				}, t.onClose = function() {
					document.location = "/"
				}, t.onSuccess = function() {
					t.setState({
						isLoading: !1,
						user: v,
						sent: !0
					})
				}, t.onError = function(e) {
					console.log(e), e ? t.setState({
						isLoading: !1,
						user: l(l({}, t.state.user), {}, {
							errors: e
						})
					}) : t.setState({
						isLoading: !1
					})
				}, t.onSubmit = function() {
					t.setState({
						isLoading: !0
					}, (function() {
						i.default.recoverPassword(t.state.user, t.onSuccess, t.onError)
					}))
				}, t.state = {
					user: v,
					isLoading: !1,
					sent: !1
				}, t
			}
			return t = u, (r = [{
				key: "render",
				value: function() {
					var e = this.state.user;
					return this.state.sent ? o.a.createElement("div", {
						className: "grid-x align-center align-middle".concat(this.props.expiredToken ? " form-container" : "")
					}, o.a.createElement("div", {
						className: "small-12 cell text-center"
					}, o.a.createElement("h3", {
						className: "mar-bot-10"
					}, "Check your inbox"), o.a.createElement("p", {
						className: "popup__text"
					}, "We sent you an email with a link to reset your password. Click on the link and follow the on-screen instructions to complete the process. If you don\u2019t see the email, please check your junk or promotional folders."))) : o.a.createElement("div", {
						className: "form-container"
					}, this.state.isLoading ? o.a.createElement(a.Loader, null) : null, this.props.expiredToken ? o.a.createElement(o.a.Fragment, null, o.a.createElement("h3", null, "Reset Password"), o.a.createElement("h4", {
						className: "popup__text"
					}, "Your reset password token has expired! Please request a new one:")) : o.a.createElement(o.a.Fragment, null, o.a.createElement("h3", null, "Forgot your password?"), o.a.createElement("p", {
						className: "popup__text"
					}, "Please enter the email address you used to create your CareerHunter account to reset your password.")), o.a.createElement(a.InputTypeField, {
						type: "email",
						name: "email",
						placeholder: "Email*",
						errorMessage: e.errors.email || e.errors.base,
						value: e.email,
						onChange: this.onChangeField
					}), o.a.createElement("div", {
						className: "medium-text-center text-right"
					}, o.a.createElement(s.default, {
						onClick: this.onSubmit
					}, "Send")))
				}
			}]) && f(t.prototype, r), n && f(t, n), Object.defineProperty(t, "prototype", {
				writable: !1
			}), u
		}(o.a.Component);
	t.default = y
}, , , function(e, t, r) {
	e.exports = r.p + "media/images/CareerHunterBlue-70aaa2e8.png"
}, function(e, t, r) {
	"use strict";

	function n(e, t) {
		e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
	}
	r.d(t, "a", (function() {
		return n
	}))
}, function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.clamp = c, t.canUseDOM = t.slidesOnLeft = t.slidesOnRight = t.siblingDirection = t.getTotalSlides = t.getPostClones = t.getPreClones = t.getTrackLeft = t.getTrackAnimateCSS = t.getTrackCSS = t.checkSpecKeys = t.getSlideCount = t.checkNavigable = t.getNavigableIndexes = t.swipeEnd = t.swipeMove = t.swipeStart = t.keyHandler = t.changeSlide = t.slideHandler = t.initializedState = t.extractObject = t.canGoNext = t.getSwipeDirection = t.getHeight = t.getWidth = t.lazySlidesOnRight = t.lazySlidesOnLeft = t.lazyEndIndex = t.lazyStartIndex = t.getRequiredLazySlides = t.getOnDemandLazySlides = void 0;
	var n, o = (n = r(0)) && n.__esModule ? n : {
		default: n
	};

	function a(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function i(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? a(Object(r), !0).forEach((function(t) {
				s(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function s(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function c(e, t, r) {
		return Math.max(t, Math.min(e, r))
	}
	var l = function(e) {
		for (var t = [], r = u(e), n = f(e), o = r; o < n; o++) e.lazyLoadedList.indexOf(o) < 0 && t.push(o);
		return t
	};
	t.getOnDemandLazySlides = l;
	t.getRequiredLazySlides = function(e) {
		for (var t = [], r = u(e), n = f(e), o = r; o < n; o++) t.push(o);
		return t
	};
	var u = function(e) {
		return e.currentSlide - p(e)
	};
	t.lazyStartIndex = u;
	var f = function(e) {
		return e.currentSlide + d(e)
	};
	t.lazyEndIndex = f;
	var p = function(e) {
		return e.centerMode ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0
	};
	t.lazySlidesOnLeft = p;
	var d = function(e) {
		return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.slidesToShow
	};
	t.lazySlidesOnRight = d;
	var h = function(e) {
		return e && e.offsetWidth || 0
	};
	t.getWidth = h;
	var m = function(e) {
		return e && e.offsetHeight || 0
	};
	t.getHeight = m;
	var v = function(e) {
		var t, r, n, o, a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
		return t = e.startX - e.curX, r = e.startY - e.curY, n = Math.atan2(r, t), (o = Math.round(180 * n / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 || o <= 360 && o >= 315 ? "left" : o >= 135 && o <= 225 ? "right" : !0 === a ? o >= 35 && o <= 135 ? "up" : "down" : "vertical"
	};
	t.getSwipeDirection = v;
	var y = function(e) {
		var t = !0;
		return e.infinite || (e.centerMode && e.currentSlide >= e.slideCount - 1 || e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (t = !1), t
	};
	t.canGoNext = y;
	t.extractObject = function(e, t) {
		var r = {};
		return t.forEach((function(t) {
			return r[t] = e[t]
		})), r
	};
	t.initializedState = function(e) {
		var t, r = o.default.Children.count(e.children),
			n = e.listRef,
			a = Math.ceil(h(n)),
			s = e.trackRef && e.trackRef.node,
			c = Math.ceil(h(s));
		if (e.vertical) t = a;
		else {
			var u = e.centerMode && 2 * parseInt(e.centerPadding);
			"string" === typeof e.centerPadding && "%" === e.centerPadding.slice(-1) && (u *= a / 100), t = Math.ceil((a - u) / e.slidesToShow)
		}
		var f = n && m(n.querySelector('[data-index="0"]')),
			p = f * e.slidesToShow,
			d = void 0 === e.currentSlide ? e.initialSlide : e.currentSlide;
		e.rtl && void 0 === e.currentSlide && (d = r - 1 - e.initialSlide);
		var v = e.lazyLoadedList || [],
			y = l(i(i({}, e), {}, {
				currentSlide: d,
				lazyLoadedList: v
			}));
		v.concat(y);
		var b = {
			slideCount: r,
			slideWidth: t,
			listWidth: a,
			trackWidth: c,
			currentSlide: d,
			slideHeight: f,
			listHeight: p,
			lazyLoadedList: v
		};
		return null === e.autoplaying && e.autoplay && (b.autoplaying = "playing"), b
	};
	t.slideHandler = function(e) {
		var t = e.waitForAnimate,
			r = e.animating,
			n = e.fade,
			o = e.infinite,
			a = e.index,
			s = e.slideCount,
			u = e.lazyLoadedList,
			f = e.lazyLoad,
			p = e.currentSlide,
			d = e.centerMode,
			h = e.slidesToScroll,
			m = e.slidesToShow,
			v = e.useCSS;
		if (t && r) return {};
		var b, g, w, E = a,
			T = {},
			j = {},
			x = o ? a : c(a, 0, s - 1);
		if (n) {
			if (!o && (a < 0 || a >= s)) return {};
			a < 0 ? E = a + s : a >= s && (E = a - s), f && u.indexOf(E) < 0 && u.push(E), T = {
				animating: !0,
				currentSlide: E,
				lazyLoadedList: u,
				targetSlide: E
			}, j = {
				animating: !1,
				targetSlide: E
			}
		} else b = E, E < 0 ? (b = E + s, o ? s % h !== 0 && (b = s - s % h) : b = 0) : !y(e) && E > p ? E = b = p : d && E >= s ? (E = o ? s : s - 1, b = o ? 0 : s - 1) : E >= s && (b = E - s, o ? s % h !== 0 && (b = 0) : b = s - m), !o && E + m >= s && (b = s - m), g = S(i(i({}, e), {}, {
			slideIndex: E
		})), w = S(i(i({}, e), {}, {
			slideIndex: b
		})), o || (g === w && (E = b), g = w), f && u.concat(l(i(i({}, e), {}, {
			currentSlide: E
		}))), v ? (T = {
			animating: !0,
			currentSlide: b,
			trackStyle: O(i(i({}, e), {}, {
				left: g
			})),
			lazyLoadedList: u,
			targetSlide: x
		}, j = {
			animating: !1,
			currentSlide: b,
			trackStyle: _(i(i({}, e), {}, {
				left: w
			})),
			swipeLeft: null,
			targetSlide: x
		}) : T = {
			currentSlide: b,
			trackStyle: _(i(i({}, e), {}, {
				left: w
			})),
			lazyLoadedList: u,
			targetSlide: x
		};
		return {
			state: T,
			nextState: j
		}
	};
	t.changeSlide = function(e, t) {
		var r, n, o, a, s = e.slidesToScroll,
			c = e.slidesToShow,
			l = e.slideCount,
			u = e.currentSlide,
			f = e.targetSlide,
			p = e.lazyLoad,
			d = e.infinite;
		if (r = l % s !== 0 ? 0 : (l - u) % s, "previous" === t.message) a = u - (o = 0 === r ? s : c - r), p && !d && (a = -1 === (n = u - o) ? l - 1 : n), d || (a = f - s);
		else if ("next" === t.message) a = u + (o = 0 === r ? s : r), p && !d && (a = (u + s) % l + r), d || (a = f + s);
		else if ("dots" === t.message) a = t.index * t.slidesToScroll;
		else if ("children" === t.message) {
			if (a = t.index, d) {
				var h = P(i(i({}, e), {}, {
					targetSlide: a
				}));
				a > t.currentSlide && "left" === h ? a -= l : a < t.currentSlide && "right" === h && (a += l)
			}
		} else "index" === t.message && (a = Number(t.index));
		return a
	};
	t.keyHandler = function(e, t, r) {
		return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !t ? "" : 37 === e.keyCode ? r ? "next" : "previous" : 39 === e.keyCode ? r ? "previous" : "next" : ""
	};
	t.swipeStart = function(e, t, r) {
		return "IMG" === e.target.tagName && e.preventDefault(), !t || !r && -1 !== e.type.indexOf("mouse") ? "" : {
			dragging: !0,
			touchObject: {
				startX: e.touches ? e.touches[0].pageX : e.clientX,
				startY: e.touches ? e.touches[0].pageY : e.clientY,
				curX: e.touches ? e.touches[0].pageX : e.clientX,
				curY: e.touches ? e.touches[0].pageY : e.clientY
			}
		}
	};
	t.swipeMove = function(e, t) {
		var r = t.scrolling,
			n = t.animating,
			o = t.vertical,
			a = t.swipeToSlide,
			s = t.verticalSwiping,
			c = t.rtl,
			l = t.currentSlide,
			u = t.edgeFriction,
			f = t.edgeDragged,
			p = t.onEdge,
			d = t.swiped,
			h = t.swiping,
			m = t.slideCount,
			b = t.slidesToScroll,
			g = t.infinite,
			w = t.touchObject,
			E = t.swipeEvent,
			O = t.listHeight,
			T = t.listWidth;
		if (!r) {
			if (n) return e.preventDefault();
			o && a && s && e.preventDefault();
			var j, x = {},
				P = S(t);
			w.curX = e.touches ? e.touches[0].pageX : e.clientX, w.curY = e.touches ? e.touches[0].pageY : e.clientY, w.swipeLength = Math.round(Math.sqrt(Math.pow(w.curX - w.startX, 2)));
			var k = Math.round(Math.sqrt(Math.pow(w.curY - w.startY, 2)));
			if (!s && !h && k > 10) return {
				scrolling: !0
			};
			s && (w.swipeLength = k);
			var N = (c ? -1 : 1) * (w.curX > w.startX ? 1 : -1);
			s && (N = w.curY > w.startY ? 1 : -1);
			var R = Math.ceil(m / b),
				C = v(t.touchObject, s),
				L = w.swipeLength;
			return g || (0 === l && "right" === C || l + 1 >= R && "left" === C || !y(t) && "left" === C) && (L = w.swipeLength * u, !1 === f && p && (p(C), x.edgeDragged = !0)), !d && E && (E(C), x.swiped = !0), j = o ? P + L * (O / T) * N : c ? P - L * N : P + L * N, s && (j = P + L * N), x = i(i({}, x), {}, {
				touchObject: w,
				swipeLeft: j,
				trackStyle: _(i(i({}, t), {}, {
					left: j
				}))
			}), Math.abs(w.curX - w.startX) < .8 * Math.abs(w.curY - w.startY) ? x : (w.swipeLength > 10 && (x.swiping = !0, e.preventDefault()), x)
		}
	};
	t.swipeEnd = function(e, t) {
		var r = t.dragging,
			n = t.swipe,
			o = t.touchObject,
			a = t.listWidth,
			s = t.touchThreshold,
			c = t.verticalSwiping,
			l = t.listHeight,
			u = t.swipeToSlide,
			f = t.scrolling,
			p = t.onSwipe,
			d = t.targetSlide,
			h = t.currentSlide,
			m = t.infinite;
		if (!r) return n && e.preventDefault(), {};
		var y = c ? l / s : a / s,
			b = v(o, c),
			E = {
				dragging: !1,
				edgeDragged: !1,
				scrolling: !1,
				swiping: !1,
				swiped: !1,
				swipeLeft: null,
				touchObject: {}
			};
		if (f) return E;
		if (!o.swipeLength) return E;
		if (o.swipeLength > y) {
			var _, T;
			e.preventDefault(), p && p(b);
			var j = m ? h : d;
			switch (b) {
				case "left":
				case "up":
					T = j + w(t), _ = u ? g(t, T) : T, E.currentDirection = 0;
					break;
				case "right":
				case "down":
					T = j - w(t), _ = u ? g(t, T) : T, E.currentDirection = 1;
					break;
				default:
					_ = j
			}
			E.triggerSlideHandler = _
		} else {
			var x = S(t);
			E.trackStyle = O(i(i({}, t), {}, {
				left: x
			}))
		}
		return E
	};
	var b = function(e) {
		for (var t = e.infinite ? 2 * e.slideCount : e.slideCount, r = e.infinite ? -1 * e.slidesToShow : 0, n = e.infinite ? -1 * e.slidesToShow : 0, o = []; r < t;) o.push(r), r = n + e.slidesToScroll, n += Math.min(e.slidesToScroll, e.slidesToShow);
		return o
	};
	t.getNavigableIndexes = b;
	var g = function(e, t) {
		var r = b(e),
			n = 0;
		if (t > r[r.length - 1]) t = r[r.length - 1];
		else
			for (var o in r) {
				if (t < r[o]) {
					t = n;
					break
				}
				n = r[o]
			}
		return t
	};
	t.checkNavigable = g;
	var w = function(e) {
		var t = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
		if (e.swipeToSlide) {
			var r, n = e.listRef.querySelectorAll(".slick-slide");
			if (Array.from(n).every((function(n) {
					if (e.vertical) {
						if (n.offsetTop + m(n) / 2 > -1 * e.swipeLeft) return r = n, !1
					} else if (n.offsetLeft - t + h(n) / 2 > -1 * e.swipeLeft) return r = n, !1;
					return !0
				})), !r) return 0;
			var o = !0 === e.rtl ? e.slideCount - e.currentSlide : e.currentSlide;
			return Math.abs(r.dataset.index - o) || 1
		}
		return e.slidesToScroll
	};
	t.getSlideCount = w;
	var E = function(e, t) {
		return t.reduce((function(t, r) {
			return t && e.hasOwnProperty(r)
		}), !0) ? null : console.error("Keys Missing:", e)
	};
	t.checkSpecKeys = E;
	var _ = function(e) {
		var t, r;
		E(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
		var n = e.slideCount + 2 * e.slidesToShow;
		e.vertical ? r = n * e.slideHeight : t = x(e) * e.slideWidth;
		var o = {
			opacity: 1,
			transition: "",
			WebkitTransition: ""
		};
		if (e.useTransform) {
			var a = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)",
				s = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)",
				c = e.vertical ? "translateY(" + e.left + "px)" : "translateX(" + e.left + "px)";
			o = i(i({}, o), {}, {
				WebkitTransform: a,
				transform: s,
				msTransform: c
			})
		} else e.vertical ? o.top = e.left : o.left = e.left;
		return e.fade && (o = {
			opacity: 1
		}), t && (o.width = t), r && (o.height = r), window && !window.addEventListener && window.attachEvent && (e.vertical ? o.marginTop = e.left + "px" : o.marginLeft = e.left + "px"), o
	};
	t.getTrackCSS = _;
	var O = function(e) {
		E(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
		var t = _(e);
		return e.useTransform ? (t.WebkitTransition = "-webkit-transform " + e.speed + "ms " + e.cssEase, t.transition = "transform " + e.speed + "ms " + e.cssEase) : e.vertical ? t.transition = "top " + e.speed + "ms " + e.cssEase : t.transition = "left " + e.speed + "ms " + e.cssEase, t
	};
	t.getTrackAnimateCSS = O;
	var S = function(e) {
		if (e.unslick) return 0;
		E(e, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
		var t, r, n = e.slideIndex,
			o = e.trackRef,
			a = e.infinite,
			i = e.centerMode,
			s = e.slideCount,
			c = e.slidesToShow,
			l = e.slidesToScroll,
			u = e.slideWidth,
			f = e.listWidth,
			p = e.variableWidth,
			d = e.slideHeight,
			h = e.fade,
			m = e.vertical;
		if (h || 1 === e.slideCount) return 0;
		var v = 0;
		if (a ? (v = -T(e), s % l !== 0 && n + l > s && (v = -(n > s ? c - (n - s) : s % l)), i && (v += parseInt(c / 2))) : (s % l !== 0 && n + l > s && (v = c - s % l), i && (v = parseInt(c / 2))), t = m ? n * d * -1 + v * d : n * u * -1 + v * u, !0 === p) {
			var y, b = o && o.node;
			if (y = n + T(e), t = (r = b && b.childNodes[y]) ? -1 * r.offsetLeft : 0, !0 === i) {
				y = a ? n + T(e) : n, r = b && b.children[y], t = 0;
				for (var g = 0; g < y; g++) t -= b && b.children[g] && b.children[g].offsetWidth;
				t -= parseInt(e.centerPadding), t += r && (f - r.offsetWidth) / 2
			}
		}
		return t
	};
	t.getTrackLeft = S;
	var T = function(e) {
		return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0)
	};
	t.getPreClones = T;
	var j = function(e) {
		return e.unslick || !e.infinite ? 0 : e.slideCount
	};
	t.getPostClones = j;
	var x = function(e) {
		return 1 === e.slideCount ? 1 : T(e) + e.slideCount + j(e)
	};
	t.getTotalSlides = x;
	var P = function(e) {
		return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + k(e) ? "left" : "right" : e.targetSlide < e.currentSlide - N(e) ? "right" : "left"
	};
	t.siblingDirection = P;
	var k = function(e) {
		var t = e.slidesToShow,
			r = e.centerMode,
			n = e.rtl,
			o = e.centerPadding;
		if (r) {
			var a = (t - 1) / 2 + 1;
			return parseInt(o) > 0 && (a += 1), n && t % 2 === 0 && (a += 1), a
		}
		return n ? 0 : t - 1
	};
	t.slidesOnRight = k;
	var N = function(e) {
		var t = e.slidesToShow,
			r = e.centerMode,
			n = e.rtl,
			o = e.centerPadding;
		if (r) {
			var a = (t - 1) / 2 + 1;
			return parseInt(o) > 0 && (a += 1), n || t % 2 !== 0 || (a += 1), a
		}
		return n ? t - 1 : 0
	};
	t.slidesOnLeft = N;
	t.canUseDOM = function() {
		return !("undefined" === typeof window || !window.document || !window.document.createElement)
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return c
	}));
	var n = r(0),
		o = r.n(n),
		a = r(34),
		i = r.n(a),
		s = {
			dots: !1,
			infinite: !1,
			arrows: !1,
			variableWidth: !1,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					dots: !1
				}
			}, {
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: !1
				}
			}, {
				breakpoint: 450,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: !1
				}
			}]
		};

	function c(e) {
		var t = e.settings || s,
			r = e.component,
			n = e.itemProps || {};
		return o.a.createElement(i.a, t, e.items.map((function(e, t) {
			return o.a.createElement(r, Object.assign({
				key: e.id,
				item: e
			}, n))
		})))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(1);

	function o(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}
	var a = function() {
		function e() {
			! function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, e)
		}
		var t, r, a;
		return t = e, a = [{
			key: "submitTest",
			value: function(e, t) {
				var r = "/api/career_tests/".concat(e, "/finish");
				return fetch(n.actions.postRequest(r, t)).then(n.actions.status).then(n.actions.json)
			}
		}, {
			key: "startTest",
			value: function(e) {
				var t = "/api/career_tests/".concat(e, "/start");
				return fetch(n.actions.postRequest(t)).then(n.actions.status).then(n.actions.json)
			}
		}, {
			key: "getStats",
			value: function(e) {
				return fetch(n.actions.getData("".concat("/api/career_test_stats", "?").concat(n.actions.paramsToURI(e)))).then(n.actions.status).then(n.actions.json)
			}
		}], (r = null) && o(t.prototype, r), a && o(t, a), Object.defineProperty(t, "prototype", {
			writable: !1
		}), e
	}();
	t.default = a
}, function(e, t, r) {
	"use strict";
	var n = r(0),
		o = r.n(n);
	t.a = o.a.createContext(null)
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return c
	}));
	var n = r(1);

	function o() {
		o = function() {
			return e
		};
		var e = {},
			t = Object.prototype,
			r = t.hasOwnProperty,
			n = "function" == typeof Symbol ? Symbol : {},
			a = n.iterator || "@@iterator",
			i = n.asyncIterator || "@@asyncIterator",
			s = n.toStringTag || "@@toStringTag";

		function c(e, t, r) {
			return Object.defineProperty(e, t, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}), e[t]
		}
		try {
			c({}, "")
		} catch (x) {
			c = function(e, t, r) {
				return e[t] = r
			}
		}

		function l(e, t, r, n) {
			var o = t && t.prototype instanceof p ? t : p,
				a = Object.create(o.prototype),
				i = new S(n || []);
			return a._invoke = function(e, t, r) {
				var n = "suspendedStart";
				return function(o, a) {
					if ("executing" === n) throw new Error("Generator is already running");
					if ("completed" === n) {
						if ("throw" === o) throw a;
						return j()
					}
					for (r.method = o, r.arg = a;;) {
						var i = r.delegate;
						if (i) {
							var s = E(i, r);
							if (s) {
								if (s === f) continue;
								return s
							}
						}
						if ("next" === r.method) r.sent = r._sent = r.arg;
						else if ("throw" === r.method) {
							if ("suspendedStart" === n) throw n = "completed", r.arg;
							r.dispatchException(r.arg)
						} else "return" === r.method && r.abrupt("return", r.arg);
						n = "executing";
						var c = u(e, t, r);
						if ("normal" === c.type) {
							if (n = r.done ? "completed" : "suspendedYield", c.arg === f) continue;
							return {
								value: c.arg,
								done: r.done
							}
						}
						"throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
					}
				}
			}(e, r, i), a
		}

		function u(e, t, r) {
			try {
				return {
					type: "normal",
					arg: e.call(t, r)
				}
			} catch (x) {
				return {
					type: "throw",
					arg: x
				}
			}
		}
		e.wrap = l;
		var f = {};

		function p() {}

		function d() {}

		function h() {}
		var m = {};
		c(m, a, (function() {
			return this
		}));
		var v = Object.getPrototypeOf,
			y = v && v(v(T([])));
		y && y !== t && r.call(y, a) && (m = y);
		var b = h.prototype = p.prototype = Object.create(m);

		function g(e) {
			["next", "throw", "return"].forEach((function(t) {
				c(e, t, (function(e) {
					return this._invoke(t, e)
				}))
			}))
		}

		function w(e, t) {
			var n;
			this._invoke = function(o, a) {
				function i() {
					return new t((function(n, i) {
						! function n(o, a, i, s) {
							var c = u(e[o], e, a);
							if ("throw" !== c.type) {
								var l = c.arg,
									f = l.value;
								return f && "object" == typeof f && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
									n("next", e, i, s)
								}), (function(e) {
									n("throw", e, i, s)
								})) : t.resolve(f).then((function(e) {
									l.value = e, i(l)
								}), (function(e) {
									return n("throw", e, i, s)
								}))
							}
							s(c.arg)
						}(o, a, n, i)
					}))
				}
				return n = n ? n.then(i, i) : i()
			}
		}

		function E(e, t) {
			var r = e.iterator[t.method];
			if (void 0 === r) {
				if (t.delegate = null, "throw" === t.method) {
					if (e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method)) return f;
					t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
				}
				return f
			}
			var n = u(r, e.iterator, t.arg);
			if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, f;
			var o = n.arg;
			return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, f) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, f)
		}

		function _(e) {
			var t = {
				tryLoc: e[0]
			};
			1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
		}

		function O(e) {
			var t = e.completion || {};
			t.type = "normal", delete t.arg, e.completion = t
		}

		function S(e) {
			this.tryEntries = [{
				tryLoc: "root"
			}], e.forEach(_, this), this.reset(!0)
		}

		function T(e) {
			if (e) {
				var t = e[a];
				if (t) return t.call(e);
				if ("function" == typeof e.next) return e;
				if (!isNaN(e.length)) {
					var n = -1,
						o = function t() {
							for (; ++n < e.length;)
								if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
							return t.value = void 0, t.done = !0, t
						};
					return o.next = o
				}
			}
			return {
				next: j
			}
		}

		function j() {
			return {
				value: void 0,
				done: !0
			}
		}
		return d.prototype = h, c(b, "constructor", h), c(h, "constructor", d), d.displayName = c(h, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
			var t = "function" == typeof e && e.constructor;
			return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
		}, e.mark = function(e) {
			return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, c(e, s, "GeneratorFunction")), e.prototype = Object.create(b), e
		}, e.awrap = function(e) {
			return {
				__await: e
			}
		}, g(w.prototype), c(w.prototype, i, (function() {
			return this
		})), e.AsyncIterator = w, e.async = function(t, r, n, o, a) {
			void 0 === a && (a = Promise);
			var i = new w(l(t, r, n, o), a);
			return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
				return e.done ? e.value : i.next()
			}))
		}, g(b), c(b, s, "Generator"), c(b, a, (function() {
			return this
		})), c(b, "toString", (function() {
			return "[object Generator]"
		})), e.keys = function(e) {
			var t = [];
			for (var r in e) t.push(r);
			return t.reverse(),
				function r() {
					for (; t.length;) {
						var n = t.pop();
						if (n in e) return r.value = n, r.done = !1, r
					}
					return r.done = !0, r
				}
		}, e.values = T, S.prototype = {
			constructor: S,
			reset: function(e) {
				if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !e)
					for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
			},
			stop: function() {
				this.done = !0;
				var e = this.tryEntries[0].completion;
				if ("throw" === e.type) throw e.arg;
				return this.rval
			},
			dispatchException: function(e) {
				if (this.done) throw e;
				var t = this;

				function n(r, n) {
					return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
				}
				for (var o = this.tryEntries.length - 1; o >= 0; --o) {
					var a = this.tryEntries[o],
						i = a.completion;
					if ("root" === a.tryLoc) return n("end");
					if (a.tryLoc <= this.prev) {
						var s = r.call(a, "catchLoc"),
							c = r.call(a, "finallyLoc");
						if (s && c) {
							if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
							if (this.prev < a.finallyLoc) return n(a.finallyLoc)
						} else if (s) {
							if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
						} else {
							if (!c) throw new Error("try statement without catch or finally");
							if (this.prev < a.finallyLoc) return n(a.finallyLoc)
						}
					}
				}
			},
			abrupt: function(e, t) {
				for (var n = this.tryEntries.length - 1; n >= 0; --n) {
					var o = this.tryEntries[n];
					if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
						var a = o;
						break
					}
				}
				a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
				var i = a ? a.completion : {};
				return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, f) : this.complete(i)
			},
			complete: function(e, t) {
				if ("throw" === e.type) throw e.arg;
				return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
			},
			finish: function(e) {
				for (var t = this.tryEntries.length - 1; t >= 0; --t) {
					var r = this.tryEntries[t];
					if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), O(r), f
				}
			},
			catch: function(e) {
				for (var t = this.tryEntries.length - 1; t >= 0; --t) {
					var r = this.tryEntries[t];
					if (r.tryLoc === e) {
						var n = r.completion;
						if ("throw" === n.type) {
							var o = n.arg;
							O(r)
						}
						return o
					}
				}
				throw new Error("illegal catch attempt")
			},
			delegateYield: function(e, t, r) {
				return this.delegate = {
					iterator: T(e),
					resultName: t,
					nextLoc: r
				}, "next" === this.method && (this.arg = void 0), f
			}
		}, e
	}

	function a(e, t, r, n, o, a, i) {
		try {
			var s = e[a](i),
				c = s.value
		} catch (l) {
			return void r(l)
		}
		s.done ? t(c) : Promise.resolve(c).then(n, o)
	}

	function i(e) {
		return function() {
			var t = this,
				r = arguments;
			return new Promise((function(n, o) {
				var i = e.apply(t, r);

				function s(e) {
					a(i, n, o, s, c, "next", e)
				}

				function c(e) {
					a(i, n, o, s, c, "throw", e)
				}
				s(void 0)
			}))
		}
	}

	function s(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}
	var c = function() {
		function e() {
			! function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, e)
		}
		var t, r, a;
		return t = e, a = [{
			key: "loginWithProvider",
			value: function(e, t, r, a) {
				var s = "/auth/".concat(e, "/callback"),
					c = document.querySelector("meta[name='csrf-token']").content,
					l = {
						method: "POST",
						body: JSON.stringify(t),
						headers: {
							"Content-Type": "application/json",
							"X-CSRF-Token": c
						}
					},
					u = new Request(s, l);
				fetch(u).then(n.actions.status).then(n.actions.json).then((function(e) {
					return e
				})).then(i(o().mark((function e() {
					return o().wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								console.log("!!!! loginWithProvider success"), r();
							case 2:
							case "end":
								return e.stop()
						}
					}), e)
				})))).catch((function(e) {
					422 === e.status ? (console.log("error log in"), e.json().then((function(e) {
						a(e)
					}))) : (console.log("error"), a())
				}))
			}
		}], (r = null) && s(t.prototype, r), a && s(t, a), Object.defineProperty(t, "prototype", {
			writable: !1
		}), e
	}()
}, , , function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n);

	function a(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function i(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function s(e, t) {
		return (s = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function c(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = u(e);
			if (t) {
				var o = u(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return l(this, r)
		}
	}

	function l(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function u(e) {
		return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var f = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && s(e, t)
		}(u, e);
		var t, r, n, l = c(u);

		function u() {
			var e;
			i(this, u);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = l.call.apply(l, [this].concat(r))).state = {
				className: "input-tick--inline",
				position: e.props.position || "left",
				animationEnabled: !1
			}, e.renderLabel = function() {
				return o.a.createElement("span", {
					className: "agreeText"
				}, "Sign up to ", o.a.createElement("a", {
					href: "https://dose.careeraddict.com/",
					target: "_blank"
				}, "The Dose"), " for career hacks - sent 3x week")
			}, e
		}
		return t = u, r && a(t.prototype, r), n && a(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), t
	}(r(22).default);
	t.default = f
}, function(e, t, r) {
	"use strict";
	e.exports = r(250)
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(10),
		o = r(122),
		a = r(123),
		i = Object(n.c)({
			filters: o.default,
			userStatus: a.default
		});
	t.default = i
}, , function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "setUserDashboard", (function() {
		return o
	})), r.d(t, "refreshUserDashboard", (function() {
		return a
	}));
	var n = r(15);

	function o(e) {
		return {
			type: n.SET_DASHBOARD_USER,
			user: e
		}
	}

	function a(e) {
		return {
			type: n.REFRESH_DASHBOARD_USER,
			attr: e
		}
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return h
	}));
	var n = r(0),
		o = r.n(n),
		a = r(27),
		i = r(1);

	function s(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function c(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function l(e, t) {
		return (l = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function u(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = d(e);
			if (t) {
				var o = d(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return f(this, r)
		}
	}

	function f(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return p(e)
	}

	function p(e) {
		if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function d(e) {
		return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var h = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && l(e, t)
		}(d, e);
		var t, r, n, f = u(d);

		function d() {
			var e;
			s(this, d);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = f.call.apply(f, [this].concat(r))).state = {
				isLoading: !1,
				sent: !1
			}, e.resendEmail = function(t) {
				t.preventDefault();
				var r = p(e);
				e.setState({
					isLoading: !0
				}, (function() {
					a.default.resendAccountInstructions(e.props.user).then((function() {
						r.setState({
							isLoading: !1,
							sent: !0
						})
					})).catch((function(e) {
						console.log(e)
					}))
				}))
			}, e
		}
		return t = d, (r = [{
			key: "render",
			value: function() {
				return o.a.createElement("div", {
					className: "grid-x align-center"
				}, this.state.isLoading ? o.a.createElement(i.Loader, null) : null, this.state.sent ? o.a.createElement("div", {
					className: "cell text-center"
				}, o.a.createElement("h3", {
					className: "mar-bot-10"
				}, "Confirmation link resent"), o.a.createElement("p", {
					className: "popup__text"
				}, "We sent an email to ", this.props.user.email, " with a new confirmation link to finish setting up your account. If you don\u2019t see the email, please check your junk or promotional folders.")) : o.a.createElement("div", {
					className: "cell text-center"
				}, o.a.createElement("div", {
					className: "large-icon rounded-warning mar-auto small-mar-bot-10"
				}), o.a.createElement("h3", {
					className: "mar-bot-10"
				}, "Confirm your account"), o.a.createElement("p", {
					className: "popup__text"
				}, "In order to take further free tests and save your progress at CareerHunter, you need to activate your account"), o.a.createElement("p", {
					className: "popup__text popup__text-link"
				}, "Can\u2019t locate the activation email? ", o.a.createElement("a", {
					onClick: this.resendEmail
				}, " Resend email")), o.a.createElement("p", {
					className: "popup__tip"
				}, o.a.createElement("span", {
					className: "small-icons blue-off-tooltip"
				}), "If you don\u2019t see the email in your inbox, please check your junk or promotional folders.")))
			}
		}]) && c(t.prototype, r), n && c(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), d
	}(o.a.Component)
}, , , , function(e, t, r) {
	"use strict";
	var n = r(95),
		o = {
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
			type: !0
		},
		a = {
			name: !0,
			length: !0,
			prototype: !0,
			caller: !0,
			callee: !0,
			arguments: !0,
			arity: !0
		},
		i = {
			$$typeof: !0,
			compare: !0,
			defaultProps: !0,
			displayName: !0,
			propTypes: !0,
			type: !0
		},
		s = {};

	function c(e) {
		return n.isMemo(e) ? i : s[e.$$typeof] || o
	}
	s[n.ForwardRef] = {
		$$typeof: !0,
		render: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0
	}, s[n.Memo] = i;
	var l = Object.defineProperty,
		u = Object.getOwnPropertyNames,
		f = Object.getOwnPropertySymbols,
		p = Object.getOwnPropertyDescriptor,
		d = Object.getPrototypeOf,
		h = Object.prototype;
	e.exports = function e(t, r, n) {
		if ("string" !== typeof r) {
			if (h) {
				var o = d(r);
				o && o !== h && e(t, o, n)
			}
			var i = u(r);
			f && (i = i.concat(f(r)));
			for (var s = c(t), m = c(r), v = 0; v < i.length; ++v) {
				var y = i[v];
				if (!a[y] && (!n || !n[y]) && (!m || !m[y]) && (!s || !s[y])) {
					var b = p(r, y);
					try {
						l(t, y, b)
					} catch (g) {}
				}
			}
		}
		return t
	}
}, function(e, t, r) {
	"use strict";
	var n = function() {};
	e.exports = n
}, , function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = function(e, t, r, a) {
		var i = o.default.unstable_batchedUpdates ? function(e) {
			o.default.unstable_batchedUpdates(r, e)
		} : r;
		return (0, n.default)(e, t, i, a)
	};
	var n = a(r(613)),
		o = a(r(14));

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "LEVEL_RANKINGS", (function() {
		return n
	})), r.d(t, "SCORE_RANKINGS", (function() {
		return o
	})), r.d(t, "CAPABILITY_RANKINGS", (function() {
		return a
	})), r.d(t, "ABILITY_RANKINGS", (function() {
		return i
	})), r.d(t, "COMFORT_RANKINGS", (function() {
		return s
	})), r.d(t, "PERFORMANCE_RANKINGS", (function() {
		return c
	}));
	var n = {
			very_strong: "very high level",
			strong: "high level",
			moderate: "moderate level",
			weak: "low level",
			very_weak: "very low level"
		},
		o = {
			very_strong: "a very high score",
			strong: "a high score",
			moderate: "an average score",
			weak: "a low score",
			very_weak: "a very low score"
		},
		a = {
			very_strong: "completely capable",
			strong: "very capable",
			moderate: "somewhat capable",
			weak: "not very capable",
			very_weak: "not at all capable"
		},
		i = {
			very_strong: "exceptionally skilled",
			strong: "strongly skilled",
			moderate: "adequately skilled",
			weak: "marginally skilled",
			very_weak: "poorly skilled"
		},
		s = {
			very_strong: "completely comfortable",
			strong: "very comfortable",
			moderate: "somewhat comfortable",
			weak: "not very comfortable",
			very_weak: "not comfortable at all"
		},
		c = {
			very_strong: "extremely well",
			strong: "very well",
			moderate: "reasonably well",
			weak: "not very well",
			very_weak: "not well at all"
		}
}, , function(e, t, r) {
	"use strict";

	function n(e) {
		var t, r = e.Symbol;
		return "function" === typeof r ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
	}
	r.d(t, "a", (function() {
		return n
	}))
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return l
	}));
	var n = r(0),
		o = r.n(n),
		a = r(263),
		i = r(264);

	function s(e, t) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) || function(e, t) {
			var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
			if (null == r) return;
			var n, o, a = [],
				i = !0,
				s = !1;
			try {
				for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
			} catch (c) {
				s = !0, o = c
			} finally {
				try {
					i || null == r.return || r.return()
				} finally {
					if (s) throw o
				}
			}
			return a
		}(e, t) || function(e, t) {
			if (!e) return;
			if ("string" === typeof e) return c(e, t);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			"Object" === r && e.constructor && (r = e.constructor.name);
			if ("Map" === r || "Set" === r) return Array.from(e);
			if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(e, t)
		}(e, t) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function c(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
		return n
	}

	function l(e) {
		console.log(e.rate);
		var t = s(Object(n.useState)("rate"), 2),
			r = t[0],
			c = t[1],
			l = s(Object(n.useState)(null), 2),
			u = l[0],
			f = l[1],
			p = s(Object(n.useState)(e.rate), 2),
			d = p[0],
			h = p[1],
			m = function(t) {
				t.coupon && t.coupon.promo_code && !e.hideCoupon && f(t.coupon.promo_code), c("sent")
			};
		return o.a.createElement("div", {
			className: "grid-x align-center"
		}, o.a.createElement("div", {
			className: "cell small-12 text-center"
		}, function() {
			switch (r) {
				case "sent":
					return o.a.createElement(i.default, {
						close: e.close,
						rate: d,
						full_access: e.full_access,
						coupon: u
					});
				default:
					return o.a.createElement(a.default, {
						onSuccess: m,
						close: e.close,
						recaptchaKey: e.recaptchaKey,
						rate: e.rate,
						onRateChange: h,
						hideCoupon: e.hideCoupon
					})
			}
		}()))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(1);

	function o(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}
	var a = function() {
		function e() {
			! function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, e)
		}
		var t, r, a;
		return t = e, a = [{
			key: "getCollection",
			value: function(e, t, r) {
				return fetch(n.actions.getData("/api/motivators")).then(n.actions.status).then(n.actions.json).then((function(e) {
					return e
				})).catch((function(e) {
					console.log(e), e.json().then((function(e) {
						r(e)
					}))
				}))
			}
		}], (r = null) && o(t.prototype, r), a && o(t, a), Object.defineProperty(t, "prototype", {
			writable: !1
		}), e
	}();
	t.default = a
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(1);

	function o(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}
	var a = function() {
		function e() {
			! function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, e)
		}
		var t, r, a;
		return t = e, a = [{
			key: "getCollection",
			value: function(e, t, r) {
				return fetch(n.actions.getData("/api/personalities")).then(n.actions.status).then(n.actions.json).then((function(e) {
					return e
				})).catch((function(e) {
					console.log(e), e.json().then((function(e) {
						r(e)
					}))
				}))
			}
		}], (r = null) && o(t.prototype, r), a && o(t, a), Object.defineProperty(t, "prototype", {
			writable: !1
		}), e
	}();
	t.default = a
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(27),
		i = r(6),
		s = r(44);

	function c(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function l(e, t) {
		return (l = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function u(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = d(e);
			if (t) {
				var o = d(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return f(this, r)
		}
	}

	function f(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return p(e)
	}

	function p(e) {
		if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function d(e) {
		return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var h = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && l(e, t)
		}(d, e);
		var t, r, n, f = u(d);

		function d(e) {
			var t;
			return function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, d), (t = f.call(this, e)).resendEmail = function(e) {
				e && e.preventDefault();
				var r = p(t);
				t.setState({
					isLoading: !0
				}, (function() {
					a.default.resendAccountInstructions(t.props.user).then((function() {
						r.setState({
							isLoading: !1
						}), r.checkEmailModal.current.open()
					})).catch((function(e) {
						console.log(e)
					}))
				}))
			}, t.state = {
				isLoading: !1,
				className: t.props.className || "button button--green",
				btnName: t.props.btnName || "Resend"
			}, t.checkEmailModal = o.a.createRef(), t
		}
		return t = d, (r = [{
			key: "render",
			value: function() {
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
					onClick: this.resendEmail,
					className: this.state.className
				}, this.state.btnName, o.a.createElement("span", {
					className: "button__hovered"
				})), o.a.createElement(i.default, {
					ref: this.checkEmailModal
				}, o.a.createElement(s.default, {
					email: this.props.user ? this.props.user.email : ""
				})))
			}
		}]) && c(t.prototype, r), n && c(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), d
	}(o.a.Component);
	t.default = h
}, , , function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return y
	}));
	var n = r(0),
		o = r.n(n),
		a = r(6),
		i = r(99),
		s = r(3),
		c = r(9);

	function l(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function u(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? l(Object(r), !0).forEach((function(t) {
				f(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function f(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function p(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function d(e, t) {
		return (d = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function h(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = v(e);
			if (t) {
				var o = v(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return m(this, r)
		}
	}

	function m(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function v(e) {
		return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var y = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && d(e, t)
		}(f, e);
		var t, r, n, l = h(f);

		function f(e) {
			var t;
			return function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, f), (t = l.call(this, e)).showConfirmationModal = function() {
				t.confirmAccountModal.current.open()
			}, t.renderButton = function() {
				var e = t.props.buttonComponent ? t.props.buttonComponent : s.default,
					r = t.state.user,
					n = o.a.createElement(e, {
						buttonName: t.state.buttonName,
						href: "/tests/".concat(t.props.test.path, "/take"),
						className: t.state.className
					}, t.state.buttonName, " ", o.a.createElement("span", {
						className: "small-icons next-arrow-white-s"
					}));
				return r.confirmed || !r.id ? n : o.a.createElement(o.a.Fragment, null, o.a.createElement(e, {
					buttonName: t.state.buttonName,
					onClick: t.showConfirmationModal,
					className: t.state.className
				}, t.state.buttonName, " ", o.a.createElement("span", {
					className: "small-icons next-arrow-white-xs"
				})), o.a.createElement(a.default, {
					ref: t.confirmAccountModal
				}, o.a.createElement(i.default, {
					user: t.props.user
				})))
			}, t.state = {
				buttonName: t.props.buttonName || "Start",
				className: t.props.className || "button--with-icon",
				user: t.props.user ? u(u({}, t.props.user), {
					confirmed: t.props.user.confirmed || !!t.props.confirmed
				}) : {}
			}, t.confirmAccountModal = o.a.createRef(), t
		}
		return t = f, (r = [{
			key: "componentDidMount",
			value: function() {
				this.props.confirmreq && !this.state.user.confirmed && this.showConfirmationModal()
			}
		}, {
			key: "render",
			value: function() {
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(c.FadeInSection, null, this.renderButton()))
			}
		}]) && p(t.prototype, r), n && p(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), f
	}(o.a.Component)
}, , , function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return s
	}));
	var n = r(0),
		o = r.n(n);

	function a(e, t) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) || function(e, t) {
			var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
			if (null == r) return;
			var n, o, a = [],
				i = !0,
				s = !1;
			try {
				for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
			} catch (c) {
				s = !0, o = c
			} finally {
				try {
					i || null == r.return || r.return()
				} finally {
					if (s) throw o
				}
			}
			return a
		}(e, t) || function(e, t) {
			if (!e) return;
			if ("string" === typeof e) return i(e, t);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			"Object" === r && e.constructor && (r = e.constructor.name);
			if ("Map" === r || "Set" === r) return Array.from(e);
			if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return i(e, t)
		}(e, t) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function i(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
		return n
	}

	function s(e) {
		var t = a(Object(n.useState)(e.selected || null), 2),
			r = t[0],
			i = t[1],
			s = a(Object(n.useState)(!1), 2),
			c = s[0],
			l = s[1];
		Object(n.useEffect)((function() {
			return function() {
				c && window.removeEventListener("scroll", u)
			}
		}), []);
		var u = function e() {
				window.removeEventListener("scroll", e), l(!1)
			},
			f = e.options.filter((function(e) {
				return e.value !== r
			})),
			p = e.options.find((function(e) {
				return e.value === r
			}));
		return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
			className: (e.className || "") + (c ? " is-open" : "") + (p ? " is-selected" : ""),
			onClick: function() {
				return c ? u() : (window.addEventListener("scroll", u), void l(!0))
			}
		}, p ? p[e.optionsLabel] : e.placeholder), o.a.createElement("div", {
			className: "dropdown-pane" + (c ? " is-open" : "") + (p ? " is-selected" : "")
		}, f.map((function(t, r) {
			return o.a.createElement("div", {
				key: "currency".concat(r),
				className: e.optionClassName,
				onClick: function() {
					return r = t[e.optionsValue], i(r), e.onSelect(r), void l(!1);
					var r
				}
			}, t[e.optionsLabel])
		}))))
	}
}, , function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return i
	}));
	var n = r(10),
		o = r(96),
		a = r(79);

	function i(e) {
		return Object(n.d)(o.default, e, Object(n.a)(a.a))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return u
	}));
	var n = r(15),
		o = r(59);

	function a(e) {
		return function(e) {
			if (Array.isArray(e)) return i(e)
		}(e) || function(e) {
			if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
		}(e) || function(e, t) {
			if (!e) return;
			if ("string" === typeof e) return i(e, t);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			"Object" === r && e.constructor && (r = e.constructor.name);
			if ("Map" === r || "Set" === r) return Array.from(e);
			if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return i(e, t)
		}(e) || function() {
			throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function i(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
		return n
	}

	function s(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function c(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? s(Object(r), !0).forEach((function(t) {
				l(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function l(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function u() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.default.filters,
			t = arguments.length > 1 ? arguments[1] : void 0;
		switch (t.type) {
			case n.SETUP_INITIAL_FILTERS_STATE:
				var r = t.user && "finished" === t.user.interests_status && "finished" === t.user.personality_status && "finished" === t.user.motivators_status && "finished" === t.user.abstract_status && "finished" === t.user.numerical_status && "finished" === t.user.verbal_status,
					i = f(t.initialFilters);
				return c(c({}, e), {}, {
					profileCompleted: r,
					user: t.user || null,
					page: t.page,
					initialFilters: t.initialFilters,
					selected: i
				});
			case n.ADD_FILTER_VALUE:
				var s = e.selected.filter((function(e) {
					return e.type !== t.value.type || e.id !== t.value.id
				}));
				return c(c({}, e), {
					selected: [].concat(a(s), [t.value]),
					needRefreshSearch: "qsearch" === t.value.type
				});
			case n.DELETE_FILTER_VALUE:
				var l = "qsearch" === t.value.type ? "" : e.qSearch,
					u = "location" === t.value.type ? "" : e.location,
					p = "qsearch" === t.value.type;
				return c(c({}, e), {
					selected: e.selected.filter((function(e) {
						return e.type !== t.value.type || e.id !== t.value.id
					})),
					qSearch: l,
					location: u,
					needRefreshSearch: p
				});
			case n.SET_NEED_REFRESH_SEARCH:
				return c(c({}, e), {}, {
					needRefreshSearch: t.value
				});
			case n.SET_Q_SEARCH_FILTER:
				return c(c({}, e), {}, {
					qSearch: t.value
				});
			case n.SET_LOCATION_FILTER:
				return c(c({}, e), {}, {
					location: t.value
				});
			case n.DELETE_ALL_FILTERS:
				return c(c({}, e), {
					selected: [],
					qSearch: "",
					location: "",
					needRefreshSearch: !0
				});
			default:
				return e
		}
	}

	function f(e) {
		var t = [];
		return e.salary && t.push({
			type: "salary",
			id: "salary",
			value: [e.salary.from, e.salary.to],
			name: "".concat(e.salary.from, "k - ").concat(e.salary.to, "k salary")
		}), e.growth && t.push({
			type: "growth",
			id: "growth",
			value: [e.growth.from, e.growth.to],
			name: "".concat(e.growth.from, "k - ").concat(e.growth.to, "k salary")
		}), e.score && t.push({
			type: "match",
			id: "match",
			value: [e.score.from, e.score.to],
			name: "".concat(e.score.from, "% - ").concat(e.score.to, "% matches")
		}), e.terms && e.terms.length > 0 && e.terms.filter((function(e) {
			return e
		})).map((function(e, r) {
			return t.push({
				type: "qsearch",
				id: "qsearch-".concat(r),
				name: e
			})
		})), e.locations && e.locations.length > 0 && e.locations.filter((function(e) {
			return e
		})).map((function(e, r) {
			return t.push({
				type: "location",
				id: "location-".concat(r),
				name: e
			})
		})), e.personalities && e.personalities.length > 0 && e.personalities.filter((function(e) {
			return e
		})).map((function(e, r) {
			return t.push({
				type: "personality",
				id: e,
				name: e
			})
		})), e.motivators && e.motivators.length > 0 && e.motivators.filter((function(e) {
			return e
		})).map((function(e, r) {
			return t.push({
				type: "motivator",
				id: e,
				name: e
			})
		})), t
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return a
	}));
	var n = r(15),
		o = r(59);

	function a() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.default.userStatus,
			t = arguments.length > 1 ? arguments[1] : void 0;
		switch (t.type) {
			case n.SET_DASHBOARD_USER:
				return t.user;
			case n.REFRESH_DASHBOARD_USER:
				return Object.assign({}, e, t.attr);
			default:
				return e
		}
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return w
	}));
	var n = r(0),
		o = r.n(n),
		a = r(35),
		i = r.n(a),
		s = r(106),
		c = r.n(s),
		l = ["prefixCls", "vertical", "reverse", "offset", "style", "disabled", "min", "max", "value", "tabIndex", "ariaLabel", "ariaLabelledBy", "ariaValueTextFormatter"];

	function u(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function f(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? u(Object(r), !0).forEach((function(t) {
				p(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function p(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function d(e, t) {
		if (null == e) return {};
		var r, n, o = function(e, t) {
			if (null == e) return {};
			var r, n, o = {},
				a = Object.keys(e);
			for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
			return o
		}(e, t);
		if (Object.getOwnPropertySymbols) {
			var a = Object.getOwnPropertySymbols(e);
			for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
		}
		return o
	}

	function h(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function m(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function v(e, t) {
		return (v = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function y(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = g(e);
			if (t) {
				var o = g(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return b(this, r)
		}
	}

	function b(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function g(e) {
		return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var w = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && v(e, t)
		}(s, e);
		var t, r, n, a = y(s);

		function s() {
			var e;
			h(this, s);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = a.call.apply(a, [this].concat(r))).state = {
				clickFocused: !1
			}, e.setHandleRef = function(t) {
				e.handle = t
			}, e.handleMouseUp = function() {
				document.activeElement === e.handle && e.setClickFocus(!0)
			}, e.handleMouseDown = function() {
				e.focus()
			}, e.handleBlur = function() {
				e.setClickFocus(!1)
			}, e.handleKeyDown = function() {
				e.setClickFocus(!1)
			}, e
		}
		return t = s, (r = [{
			key: "componentDidMount",
			value: function() {
				this.onMouseUpListener = c()(document, "mouseup", this.handleMouseUp)
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				this.onMouseUpListener && this.onMouseUpListener.remove()
			}
		}, {
			key: "setClickFocus",
			value: function(e) {
				this.setState({
					clickFocused: e
				})
			}
		}, {
			key: "clickFocus",
			value: function() {
				this.setClickFocus(!0), this.focus()
			}
		}, {
			key: "focus",
			value: function() {
				this.handle.focus()
			}
		}, {
			key: "blur",
			value: function() {
				this.handle.blur()
			}
		}, {
			key: "render",
			value: function() {
				var e, t, r, n = this.props,
					a = n.prefixCls,
					s = n.vertical,
					c = n.reverse,
					u = n.offset,
					h = n.style,
					m = n.disabled,
					v = n.min,
					y = n.max,
					b = n.value,
					g = n.tabIndex,
					w = n.ariaLabel,
					E = n.ariaLabelledBy,
					_ = n.ariaValueTextFormatter,
					O = d(n, l),
					S = i()(this.props.className, p({}, "".concat(a, "-handle-click-focused"), this.state.clickFocused)),
					T = s ? (p(e = {}, c ? "top" : "bottom", "".concat(u, "%")), p(e, c ? "bottom" : "top", "auto"), p(e, "transform", "translateY(+50%)"), e) : (p(t = {}, c ? "right" : "left", "".concat(u, "%")), p(t, c ? "left" : "right", "auto"), p(t, "transform", "translateX(".concat(c ? "+" : "-", "50%)")), t),
					j = f(f({}, h), T),
					x = g || 0;
				return (m || null === g) && (x = null), _ && (r = _(b)), o.a.createElement("div", Object.assign({
					ref: this.setHandleRef,
					tabIndex: x
				}, O, {
					className: S,
					style: j,
					onBlur: this.handleBlur,
					onKeyDown: this.handleKeyDown,
					onMouseDown: this.handleMouseDown,
					role: "slider",
					"aria-valuemin": v,
					"aria-valuemax": y,
					"aria-valuenow": b,
					"aria-disabled": !!m,
					"aria-label": w,
					"aria-labelledby": E,
					"aria-valuetext": r
				}))
			}
		}]) && m(t.prototype, r), n && m(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), s
	}(o.a.Component)
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(160);

	function i(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function s(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function c(e, t) {
		return (c = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function l(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = f(e);
			if (t) {
				var o = f(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return u(this, r)
		}
	}

	function u(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function f(e) {
		return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var p = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && c(e, t)
		}(f, e);
		var t, r, n, u = l(f);

		function f() {
			var e;
			i(this, f);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = u.call.apply(u, [this].concat(r))).state = {
				opened: !1,
				displayContent: !1,
				btnCloseTxt: e.props.btnCloseTxt || "Back to test",
				height: 0
			}, e.updateWindowDimensions = function() {
				e.setState({
					height: window.innerHeight
				})
			}, e.handleScroll = function(t) {
				var r = document.querySelector(".sticky-container");
				!0 === e.state.opened && (t.target.scrollTop <= 10 ? r.style.background = "transparent" : r.style.background = "#0A1E2E")
			}, e.open = function() {
				e.setState({
					opened: !0,
					displayContent: !0
				}), document.querySelector(".test-page__wrapper__main.for-start-main-page").style.zIndex = "10"
			}, e.close = function() {
				e.setState({
					opened: !1
				});
				var t = document.querySelector(".main-test__wrapper"),
					r = document.querySelector(".test-page__wrapper__main.for-start-main-page"),
					n = document.querySelector(".top-menu");
				t ? t.scrollTop <= 10 ? (n.style.background = "transparent", n.style.transition = "none") : n.style.background = "#0A1E2E" : (n.style.background = "transparent", n.style.transition = "none"), r.style.zIndex = "1"
			}, e
		}
		return t = f, (r = [{
			key: "componentDidMount",
			value: function() {
				this.updateWindowDimensions(), window.addEventListener("resize", this.updateWindowDimensions)
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				window.removeEventListener("resize", this.updateWindowDimensions)
			}
		}, {
			key: "render",
			value: function() {
				var e = this;
				return o.a.createElement(a.a, {
					in: this.state.opened,
					classNames: "slideout",
					timeout: 1e3,
					appear: !0,
					onExited: function() {
						e.setState({
							displayContent: !1
						})
					}
				}, o.a.createElement("div", {
					className: "slideout",
					onScroll: this.handleScroll,
					style: {
						maxHeight: this.state.height
					}
				}, this.state.displayContent ? o.a.createElement("div", {
					className: "slideout__content"
				}, o.a.createElement("div", {
					className: "slideout__close-symbol-wrapper"
				}, o.a.createElement("div", {
					className: "slideout__close-symbol text-button",
					onClick: this.close
				})), o.a.createElement("div", {
					className: "grid-container slideout__wrapper"
				}, o.a.createElement("div", {
					className: "grid-x"
				}, o.a.createElement("div", {
					className: "small-12 cell"
				}, o.a.createElement("h1", null, "Instructions"), this.props.children, o.a.createElement("div", {
					className: "flex-center"
				}, o.a.createElement("a", {
					className: "slideout__close text-button",
					onClick: this.close
				}, this.state.btnCloseTxt)))))) : null))
			}
		}]) && s(t.prototype, r), n && s(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), f
	}(n.Component);
	t.default = p
}, function(e, t, r) {
	"use strict";
	r.r(t);
	r(0);
	var n = r(162);
	r.d(t, "TooltipPortal", (function() {
		return n.default
	}));
	var o = r(163);
	r.d(t, "TooltipPopover", (function() {
		return o.default
	}))
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n);

	function a(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function i(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? a(Object(r), !0).forEach((function(t) {
				s(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function s(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}
	t.default = function(e) {
		var t = e.children,
			r = e.coords,
			a = e.updateTooltipCoords,
			s = e.className;
		return Object(n.useEffect)((function() {
			return window.addEventListener("resize", a),
				function() {
					return window.removeEventListener("resize", a)
				}
		}), []), o.a.createElement("div", {
			style: i({}, r),
			className: "tooltip tooltip--popover ".concat(s || "")
		}, t)
	}
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r(14);
	t.default = function(e) {
		var t = e.children,
			r = document.getElementById("portal-root"),
			a = document.createElement("div");
		return Object(n.useEffect)((function() {
			return r.appendChild(a),
				function() {
					return r.removeChild(a)
				}
		}), [a, r]), Object(o.createPortal)(t, a)
	}
}, , , , , function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return p
	}));
	var n = r(0),
		o = r.n(n),
		a = r(3);

	function i(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function s(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function c(e, t) {
		return (c = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function l(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = f(e);
			if (t) {
				var o = f(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return u(this, r)
		}
	}

	function u(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function f(e) {
		return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var p = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && c(e, t)
		}(f, e);
		var t, r, n, u = l(f);

		function f() {
			var e;
			i(this, f);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = u.call.apply(u, [this].concat(r))).renderButton = function() {
				var t = e.props.user,
					r = t ? t.interests_status : "undefined" !== typeof localStorage ? localStorage.getItem("interests_status") : "";
				r || (r = "not_started"), e.props.deleted && (r = "not_started");
				var n = t ? [t.interests_status, t.personality_status, t.motivators_status, t.abstract_status, t.verbal_status, t.numerical_status] : [],
					i = !!t && (!n.includes("not_started") && !n.includes("started")),
					s = t ? n.includes("started") || n.includes("finished") : "not_started" !== r,
					c = !!t && t.full_access,
					l = {};
				e.props.className && (l.className = e.props.className);
				var u = o.a.createElement(a.default, Object.assign({
						href: "/upgrade"
					}, l, {
						color: "green",
						className: "button--green--big"
					}), "Continue ", o.a.createElement("span", {
						className: "hideText"
					}, "Testing")),
					f = o.a.createElement(a.default, Object.assign({
						href: "/tests/interests/take"
					}, l, {
						color: "green",
						className: "button--green--big"
					}), s ? o.a.createElement(o.a.Fragment, null, "Continue", o.a.createElement("span", {
						className: "hideText"
					}, "\xa0Testing")) : "Get Started"),
					p = o.a.createElement(a.default, Object.assign({
						href: "/dashboard"
					}, l, {
						color: "green",
						className: "button--green--big"
					}), "Continue", o.a.createElement("span", {
						className: "hideText"
					}, "\xa0Testing"));
				e.props.home && (u = o.a.createElement(a.default, {
					href: "/get-access",
					color: "white",
					className: "button--with-icon button--white--big"
				}, "Get Access ", o.a.createElement("span", {
					className: "small-icons green-small-lock-s"
				})));
				var d = o.a.createElement(o.a.Fragment, null, o.a.createElement(a.default, {
						href: "/tests",
						color: "green",
						className: "button--with-icon button--green--big"
					}, "Try for FREE", o.a.createElement("span", {
						className: "small-icons next-arrow-white-s"
					})), o.a.createElement("p", {
						className: "banner-top--home-or before-fade-in fade-in"
					}, "or"), u),
					h = o.a.createElement("span", {
						className: "padR15"
					});
				switch (!0) {
					case "finished" === r && c && !i:
						return p;
					case e.props.home && "finished" !== r && !c:
						return d;
					case "finished" !== r:
						return f;
					case "finished" === r && !c:
						return u;
					default:
						return h
				}
			}, e
		}
		return t = f, (r = [{
			key: "render",
			value: function() {
				return this.props.home ? o.a.createElement("div", {
					className: "banner-top--home-btns"
				}, this.renderButton()) : this.renderButton()
			}
		}]) && s(t.prototype, r), n && s(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), f
	}(o.a.Component)
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(32),
		i = r(1),
		s = r(21),
		c = (r(94), r(81)),
		l = r(6),
		u = r(82),
		f = r(44),
		p = r(85),
		d = r.n(p),
		h = r(65),
		m = r(80);

	function v() {
		v = function() {
			return e
		};
		var e = {},
			t = Object.prototype,
			r = t.hasOwnProperty,
			n = "function" == typeof Symbol ? Symbol : {},
			o = n.iterator || "@@iterator",
			a = n.asyncIterator || "@@asyncIterator",
			i = n.toStringTag || "@@toStringTag";

		function s(e, t, r) {
			return Object.defineProperty(e, t, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}), e[t]
		}
		try {
			s({}, "")
		} catch (x) {
			s = function(e, t, r) {
				return e[t] = r
			}
		}

		function c(e, t, r, n) {
			var o = t && t.prototype instanceof f ? t : f,
				a = Object.create(o.prototype),
				i = new S(n || []);
			return a._invoke = function(e, t, r) {
				var n = "suspendedStart";
				return function(o, a) {
					if ("executing" === n) throw new Error("Generator is already running");
					if ("completed" === n) {
						if ("throw" === o) throw a;
						return j()
					}
					for (r.method = o, r.arg = a;;) {
						var i = r.delegate;
						if (i) {
							var s = E(i, r);
							if (s) {
								if (s === u) continue;
								return s
							}
						}
						if ("next" === r.method) r.sent = r._sent = r.arg;
						else if ("throw" === r.method) {
							if ("suspendedStart" === n) throw n = "completed", r.arg;
							r.dispatchException(r.arg)
						} else "return" === r.method && r.abrupt("return", r.arg);
						n = "executing";
						var c = l(e, t, r);
						if ("normal" === c.type) {
							if (n = r.done ? "completed" : "suspendedYield", c.arg === u) continue;
							return {
								value: c.arg,
								done: r.done
							}
						}
						"throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
					}
				}
			}(e, r, i), a
		}

		function l(e, t, r) {
			try {
				return {
					type: "normal",
					arg: e.call(t, r)
				}
			} catch (x) {
				return {
					type: "throw",
					arg: x
				}
			}
		}
		e.wrap = c;
		var u = {};

		function f() {}

		function p() {}

		function d() {}
		var h = {};
		s(h, o, (function() {
			return this
		}));
		var m = Object.getPrototypeOf,
			y = m && m(m(T([])));
		y && y !== t && r.call(y, o) && (h = y);
		var b = d.prototype = f.prototype = Object.create(h);

		function g(e) {
			["next", "throw", "return"].forEach((function(t) {
				s(e, t, (function(e) {
					return this._invoke(t, e)
				}))
			}))
		}

		function w(e, t) {
			var n;
			this._invoke = function(o, a) {
				function i() {
					return new t((function(n, i) {
						! function n(o, a, i, s) {
							var c = l(e[o], e, a);
							if ("throw" !== c.type) {
								var u = c.arg,
									f = u.value;
								return f && "object" == typeof f && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
									n("next", e, i, s)
								}), (function(e) {
									n("throw", e, i, s)
								})) : t.resolve(f).then((function(e) {
									u.value = e, i(u)
								}), (function(e) {
									return n("throw", e, i, s)
								}))
							}
							s(c.arg)
						}(o, a, n, i)
					}))
				}
				return n = n ? n.then(i, i) : i()
			}
		}

		function E(e, t) {
			var r = e.iterator[t.method];
			if (void 0 === r) {
				if (t.delegate = null, "throw" === t.method) {
					if (e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method)) return u;
					t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
				}
				return u
			}
			var n = l(r, e.iterator, t.arg);
			if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
			var o = n.arg;
			return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
		}

		function _(e) {
			var t = {
				tryLoc: e[0]
			};
			1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
		}

		function O(e) {
			var t = e.completion || {};
			t.type = "normal", delete t.arg, e.completion = t
		}

		function S(e) {
			this.tryEntries = [{
				tryLoc: "root"
			}], e.forEach(_, this), this.reset(!0)
		}

		function T(e) {
			if (e) {
				var t = e[o];
				if (t) return t.call(e);
				if ("function" == typeof e.next) return e;
				if (!isNaN(e.length)) {
					var n = -1,
						a = function t() {
							for (; ++n < e.length;)
								if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
							return t.value = void 0, t.done = !0, t
						};
					return a.next = a
				}
			}
			return {
				next: j
			}
		}

		function j() {
			return {
				value: void 0,
				done: !0
			}
		}
		return p.prototype = d, s(b, "constructor", d), s(d, "constructor", p), p.displayName = s(d, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
			var t = "function" == typeof e && e.constructor;
			return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
		}, e.mark = function(e) {
			return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, s(e, i, "GeneratorFunction")), e.prototype = Object.create(b), e
		}, e.awrap = function(e) {
			return {
				__await: e
			}
		}, g(w.prototype), s(w.prototype, a, (function() {
			return this
		})), e.AsyncIterator = w, e.async = function(t, r, n, o, a) {
			void 0 === a && (a = Promise);
			var i = new w(c(t, r, n, o), a);
			return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
				return e.done ? e.value : i.next()
			}))
		}, g(b), s(b, i, "Generator"), s(b, o, (function() {
			return this
		})), s(b, "toString", (function() {
			return "[object Generator]"
		})), e.keys = function(e) {
			var t = [];
			for (var r in e) t.push(r);
			return t.reverse(),
				function r() {
					for (; t.length;) {
						var n = t.pop();
						if (n in e) return r.value = n, r.done = !1, r
					}
					return r.done = !0, r
				}
		}, e.values = T, S.prototype = {
			constructor: S,
			reset: function(e) {
				if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !e)
					for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
			},
			stop: function() {
				this.done = !0;
				var e = this.tryEntries[0].completion;
				if ("throw" === e.type) throw e.arg;
				return this.rval
			},
			dispatchException: function(e) {
				if (this.done) throw e;
				var t = this;

				function n(r, n) {
					return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
				}
				for (var o = this.tryEntries.length - 1; o >= 0; --o) {
					var a = this.tryEntries[o],
						i = a.completion;
					if ("root" === a.tryLoc) return n("end");
					if (a.tryLoc <= this.prev) {
						var s = r.call(a, "catchLoc"),
							c = r.call(a, "finallyLoc");
						if (s && c) {
							if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
							if (this.prev < a.finallyLoc) return n(a.finallyLoc)
						} else if (s) {
							if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
						} else {
							if (!c) throw new Error("try statement without catch or finally");
							if (this.prev < a.finallyLoc) return n(a.finallyLoc)
						}
					}
				}
			},
			abrupt: function(e, t) {
				for (var n = this.tryEntries.length - 1; n >= 0; --n) {
					var o = this.tryEntries[n];
					if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
						var a = o;
						break
					}
				}
				a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
				var i = a ? a.completion : {};
				return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(i)
			},
			complete: function(e, t) {
				if ("throw" === e.type) throw e.arg;
				return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
			},
			finish: function(e) {
				for (var t = this.tryEntries.length - 1; t >= 0; --t) {
					var r = this.tryEntries[t];
					if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), O(r), u
				}
			},
			catch: function(e) {
				for (var t = this.tryEntries.length - 1; t >= 0; --t) {
					var r = this.tryEntries[t];
					if (r.tryLoc === e) {
						var n = r.completion;
						if ("throw" === n.type) {
							var o = n.arg;
							O(r)
						}
						return o
					}
				}
				throw new Error("illegal catch attempt")
			},
			delegateYield: function(e, t, r) {
				return this.delegate = {
					iterator: T(e),
					resultName: t,
					nextLoc: r
				}, "next" === this.method && (this.arg = void 0), u
			}
		}, e
	}

	function y(e, t, r, n, o, a, i) {
		try {
			var s = e[a](i),
				c = s.value
		} catch (l) {
			return void r(l)
		}
		s.done ? t(c) : Promise.resolve(c).then(n, o)
	}

	function b(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function g(e, t) {
		return (g = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function w(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = O(e);
			if (t) {
				var o = O(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return E(this, r)
		}
	}

	function E(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return _(e)
	}

	function _(e) {
		if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function O(e) {
		return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var S = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && g(e, t)
		}(E, e);
		var t, r, n, p = w(E);

		function E(e) {
			var t;
			return function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, E), (t = p.call(this, e)).onClickForgotPassword = function() {
				t.forgotPasswordPopup.current.open()
			}, t.onCloseForgotPassword = function() {
				t.forgotPasswordPopup.current.close()
			}, t.onSaveUser = function() {
				var e = t.state.user,
					r = _(t);
				t.props.status && localStorage.setItem("".concat(t.props.test.code, "_status"), t.props.status), t.setState({
					isLoading: !0
				}, (function() {
					a.default.register(t.state.user, !0).then(function() {
						var e, t = (e = v().mark((function e(t) {
							return v().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										localStorage.setItem("user", JSON.stringify(t)), r.setState({
											isLoading: !1
										}), t.need_login ? r.setState({
											showLoginForm: !0,
											user: t.user
										}) : (localStorage.setItem("user", JSON.stringify(t)), r.props.onSave(t), r.setState({
											emailSent: !0
										}));
									case 3:
									case "end":
										return e.stop()
								}
							}), e)
						})), function() {
							var t = this,
								r = arguments;
							return new Promise((function(n, o) {
								var a = e.apply(t, r);

								function i(e) {
									y(a, n, o, i, s, "next", e)
								}

								function s(e) {
									y(a, n, o, i, s, "throw", e)
								}
								i(void 0)
							}))
						});
						return function(e) {
							return t.apply(this, arguments)
						}
					}()).catch((function(t) {
						console.log(t), t.json().then((function(t) {
							e.errors = t, r.setState({
								user: e,
								isLoading: !1
							})
						}))
					}))
				}))
			}, t.afterLogin = function() {
				return console.log("!!!! afterLogin"), t.setState({
					isLoading: !0
				}), document.cookie = "answersSubmittedBeforeRedirect=1; path=/;", document.location.href = "/tests/".concat(t.props.test.path, "/result")
			}, t.onHandleChange = function(e) {
				var r = e.target.name,
					n = "agree_terms" === r || "newsletter_subscription" === r ? e.target.checked : e.target.value,
					o = t.state.user;
				o[r] = n, o.errors[i.actions.camelize(r)] = "", t.setState({
					user: o
				})
			}, t.onSocialError = function(e) {
				e ? t.setState({
					user: e,
					fromProvider: !0,
					isLoading: !1
				}) : t.setState({
					isLoading: !1
				})
			}, t.omniResponse = function(e) {
				t.props.status && localStorage.setItem("".concat(t.props.test.code, "_status"), t.props.status), t.setState({
					isLoading: !0
				}, e)
			}, t.state = {
				user: {
					email: "",
					agree_terms: !1,
					errors: {}
				},
				isLoading: !1,
				showLoginForm: !1,
				emailSent: !1,
				title: t.props.title || "Save your progress",
				description: t.props.description || "Enter your details to set up your CareerHunter account"
			}, t.forgotPasswordPopup = o.a.createRef(), t
		}
		return t = E, (r = [{
			key: "render",
			value: function() {
				var e = this;
				return o.a.createElement(o.a.Fragment, null, this.state.isLoading ? o.a.createElement(i.Loader, null) : null, this.state.emailSent ? o.a.createElement(f.default, {
					email: this.state.user.email,
					testResult: "/tests/".concat(this.props.test.path, "/result"),
					newsletterSubscription: this.state.user.newsletter_subscription
				}) : this.state.showLoginForm ? o.a.createElement("div", {
					className: "popup__content-with-form popup__content-login"
				}, o.a.createElement(c.default, {
					user: this.state.user,
					saveAnswers: !0,
					afterLogin: this.afterLogin,
					back: function() {
						e.setState({
							showLoginForm: !1
						})
					},
					onClickForgotPassword: this.onClickForgotPassword
				}), o.a.createElement(l.default, {
					ref: this.forgotPasswordPopup
				}, o.a.createElement(u.default, {
					onClose: this.onCloseForgotPassword
				}))) : o.a.createElement("div", {
					className: "popup__content-with-form"
				}, o.a.createElement("img", {
					src: d.a,
					alt: "Career Hunter",
					width: "170",
					height: "19",
					className: "popup__logo"
				}), o.a.createElement("h3", null, this.state.title), o.a.createElement("p", {
					className: "popup__confirm_text"
				}, this.state.description), o.a.createElement("div", {
					className: "form-container"
				}, o.a.createElement(i.TextField, {
					name: "name",
					placeholder: "Name",
					errorMessage: this.state.user.errors.name,
					value: this.state.user.name,
					onChange: this.onHandleChange
				}), o.a.createElement(i.TextField, {
					name: "email",
					placeholder: "Email address",
					errorMessage: this.state.user.errors.email,
					value: this.state.user.email,
					onChange: this.onHandleChange
				}), o.a.createElement("div", {
					className: "grid-x align-middle agree-text"
				}, o.a.createElement("div", {
					className: "cell"
				}, o.a.createElement(m.default, {
					errorType: this.props.errorType,
					newsletter_subscription: this.state.user.newsletter_subscription,
					onHandleChange: this.onHandleChange
				})), o.a.createElement("div", {
					className: "medium-7 cell text-left-center small-mar-top-10"
				}, o.a.createElement(s.default, {
					name: "agree_terms",
					value: this.state.user.agree_terms,
					errorTypeMessage: "tooltip" !== this.props.errorType,
					errorMessage: this.state.user.errors.agreeTerms,
					onChange: this.onHandleChange
				})), o.a.createElement("div", {
					className: "medium-5 cell medium-flex-end small-mar-top-10"
				}, o.a.createElement("button", {
					onClick: this.onSaveUser,
					className: "button button--green--large",
					"data-open": "saved"
				}, "Sign up", o.a.createElement("span", {
					className: "small-icons next-arrow-white-l"
				}), o.a.createElement("span", {
					className: "button__hovered"
				}))))), o.a.createElement("div", {
					className: "grid-x"
				}, o.a.createElement("div", {
					className: "cell popup__social-btns"
				}, o.a.createElement(h.default, {
					onCallback: this.omniResponse,
					saveAnswers: !0,
					onSuccess: this.afterLogin,
					onError: this.onSocialError
				})), o.a.createElement("div", {
					className: "cell"
				}, o.a.createElement("p", {
					className: "registration__link"
				}, "Already have an account? ", o.a.createElement("a", {
					href: "/login"
				}, "Log in"))))))
			}
		}]) && b(t.prototype, r), n && b(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), E
	}(o.a.Component);
	t.default = S
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return i
	}));
	var n = r(0),
		o = r.n(n),
		a = r(136);

	function i(e) {
		return o.a.createElement("div", {
			className: "grid-x align-center"
		}, o.a.createElement("div", {
			className: "small-12 cell text-center"
		}, o.a.createElement("div", {
			className: "popup__title popup__title--centered"
		}, o.a.createElement("span", {
			className: "small-icon checked"
		}), o.a.createElement("h3", {
			className: "mar-bot-10"
		}, "Almost done!")), o.a.createElement("p", {
			className: "popup__text"
		}, "Please check your inbox and click the link in the email we sent you to finish setting up your account and permanently save your progress. If you don\u2019t see the email we sent you, please check your junk or promotional folders.", e.showResend ? o.a.createElement(o.a.Fragment, null, "If you haven't received email in 5 minutes you can ", o.a.createElement("a", {
			href: "/contact"
		}, "report"), " or ", o.a.createElement(a.default, {
			btnName: "resend",
			user: e.user
		})) : null), e.showResend ? o.a.createElement("a", {
			href: "#",
			onClick: function(t) {
				t.preventDefault(), e.closeModal()
			},
			className: "button button--green"
		}, "Close") : null))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(113),
		i = r(6),
		s = r(44);

	function c(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function l(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function u(e, t) {
		return (u = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function f(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = d(e);
			if (t) {
				var o = d(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return p(this, r)
		}
	}

	function p(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function d(e) {
		return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var h = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && u(e, t)
		}(p, e);
		var t, r, n, a = f(p);

		function p() {
			var e;
			c(this, p);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = a.call.apply(a, [this].concat(r))).onClick = function(t) {
				t.preventDefault(), e.state.isLoading || e.setState({
					isLoading: !0
				}, (function() {
					e.resendEmail()
				}))
			}, e
		}
		return t = p, (r = [{
			key: "render",
			value: function() {
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("a", {
					onClick: this.onClick
				}, this.state.btnName), o.a.createElement(i.default, {
					ref: this.checkEmailModal
				}, o.a.createElement(s.default, {
					email: this.props.user ? this.props.user.email : ""
				})))
			}
		}]) && l(t.prototype, r), n && l(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), p
	}(a.default);
	t.default = h
}, , , , , , function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(16),
		i = r(31),
		s = r(552);

	function c(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function l(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function u(e, t) {
		return (u = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function f(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = d(e);
			if (t) {
				var o = d(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return p(this, r)
		}
	}

	function p(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function d(e) {
		return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var h = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && u(e, t)
		}(d, e);
		var t, r, n, p = f(d);

		function d() {
			var e;
			c(this, d);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = p.call.apply(p, [this].concat(r))).state = {
				isHidden: !0
			}, e.toggleHidden = function() {
				var t = e.state.isHidden;
				e.setState({
					isHidden: !t
				})
			}, e.paidAccessModalRef = o.a.createRef(), e.downloadReport = function() {
				e.paidAccessModalRef.current.open()
			}, e
		}
		return t = d, (r = [{
			key: "render",
			value: function() {
				return o.a.createElement("div", {
					className: "share-results-wrapper"
				}, o.a.createElement("div", {
					className: "flex-end-start"
				}, this.props.hasTestAccess ? o.a.createElement(a.default, {
					href: "/tests/".concat(this.props.testCode || this.props.test.code, "/download"),
					color: "blue-off",
					className: "button--with-icon",
					hrefOpts: {
						target: "_blank"
					}
				}, "Download Report", o.a.createElement("span", {
					className: "small-icons download"
				})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(a.default, {
					href: "",
					color: "blue-off",
					className: "button--with-icon",
					onClick: this.downloadReport
				}, "Download Report", o.a.createElement("span", {
					className: "small-icons download"
				})), o.a.createElement(i.default, {
					ref: this.paidAccessModalRef
				}, o.a.createElement(s.default, null)))))
			}
		}]) && l(t.prototype, r), n && l(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), d
	}(o.a.Component);
	t.default = h
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(300);
	t.default = Object(n.default)()
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return b
	}));
	var n = r(1),
		o = r(7),
		a = ["key", "career_test_id", "answer_variants", "answers", "answersDeleted"];

	function i(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function s(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? i(Object(r), !0).forEach((function(t) {
				c(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function c(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function l(e, t) {
		if (null == e) return {};
		var r, n, o = function(e, t) {
			if (null == e) return {};
			var r, n, o = {},
				a = Object.keys(e);
			for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
			return o
		}(e, t);
		if (Object.getOwnPropertySymbols) {
			var a = Object.getOwnPropertySymbols(e);
			for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
		}
		return o
	}

	function u(e) {
		return function(e) {
			if (Array.isArray(e)) return f(e)
		}(e) || function(e) {
			if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
		}(e) || function(e, t) {
			if (!e) return;
			if ("string" === typeof e) return f(e, t);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			"Object" === r && e.constructor && (r = e.constructor.name);
			if ("Map" === r || "Set" === r) return Array.from(e);
			if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return f(e, t)
		}(e) || function() {
			throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function f(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
		return n
	}

	function p() {
		p = function() {
			return e
		};
		var e = {},
			t = Object.prototype,
			r = t.hasOwnProperty,
			n = "function" == typeof Symbol ? Symbol : {},
			o = n.iterator || "@@iterator",
			a = n.asyncIterator || "@@asyncIterator",
			i = n.toStringTag || "@@toStringTag";

		function s(e, t, r) {
			return Object.defineProperty(e, t, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}), e[t]
		}
		try {
			s({}, "")
		} catch (x) {
			s = function(e, t, r) {
				return e[t] = r
			}
		}

		function c(e, t, r, n) {
			var o = t && t.prototype instanceof f ? t : f,
				a = Object.create(o.prototype),
				i = new S(n || []);
			return a._invoke = function(e, t, r) {
				var n = "suspendedStart";
				return function(o, a) {
					if ("executing" === n) throw new Error("Generator is already running");
					if ("completed" === n) {
						if ("throw" === o) throw a;
						return j()
					}
					for (r.method = o, r.arg = a;;) {
						var i = r.delegate;
						if (i) {
							var s = E(i, r);
							if (s) {
								if (s === u) continue;
								return s
							}
						}
						if ("next" === r.method) r.sent = r._sent = r.arg;
						else if ("throw" === r.method) {
							if ("suspendedStart" === n) throw n = "completed", r.arg;
							r.dispatchException(r.arg)
						} else "return" === r.method && r.abrupt("return", r.arg);
						n = "executing";
						var c = l(e, t, r);
						if ("normal" === c.type) {
							if (n = r.done ? "completed" : "suspendedYield", c.arg === u) continue;
							return {
								value: c.arg,
								done: r.done
							}
						}
						"throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
					}
				}
			}(e, r, i), a
		}

		function l(e, t, r) {
			try {
				return {
					type: "normal",
					arg: e.call(t, r)
				}
			} catch (x) {
				return {
					type: "throw",
					arg: x
				}
			}
		}
		e.wrap = c;
		var u = {};

		function f() {}

		function d() {}

		function h() {}
		var m = {};
		s(m, o, (function() {
			return this
		}));
		var v = Object.getPrototypeOf,
			y = v && v(v(T([])));
		y && y !== t && r.call(y, o) && (m = y);
		var b = h.prototype = f.prototype = Object.create(m);

		function g(e) {
			["next", "throw", "return"].forEach((function(t) {
				s(e, t, (function(e) {
					return this._invoke(t, e)
				}))
			}))
		}

		function w(e, t) {
			var n;
			this._invoke = function(o, a) {
				function i() {
					return new t((function(n, i) {
						! function n(o, a, i, s) {
							var c = l(e[o], e, a);
							if ("throw" !== c.type) {
								var u = c.arg,
									f = u.value;
								return f && "object" == typeof f && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
									n("next", e, i, s)
								}), (function(e) {
									n("throw", e, i, s)
								})) : t.resolve(f).then((function(e) {
									u.value = e, i(u)
								}), (function(e) {
									return n("throw", e, i, s)
								}))
							}
							s(c.arg)
						}(o, a, n, i)
					}))
				}
				return n = n ? n.then(i, i) : i()
			}
		}

		function E(e, t) {
			var r = e.iterator[t.method];
			if (void 0 === r) {
				if (t.delegate = null, "throw" === t.method) {
					if (e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method)) return u;
					t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
				}
				return u
			}
			var n = l(r, e.iterator, t.arg);
			if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
			var o = n.arg;
			return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
		}

		function _(e) {
			var t = {
				tryLoc: e[0]
			};
			1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
		}

		function O(e) {
			var t = e.completion || {};
			t.type = "normal", delete t.arg, e.completion = t
		}

		function S(e) {
			this.tryEntries = [{
				tryLoc: "root"
			}], e.forEach(_, this), this.reset(!0)
		}

		function T(e) {
			if (e) {
				var t = e[o];
				if (t) return t.call(e);
				if ("function" == typeof e.next) return e;
				if (!isNaN(e.length)) {
					var n = -1,
						a = function t() {
							for (; ++n < e.length;)
								if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
							return t.value = void 0, t.done = !0, t
						};
					return a.next = a
				}
			}
			return {
				next: j
			}
		}

		function j() {
			return {
				value: void 0,
				done: !0
			}
		}
		return d.prototype = h, s(b, "constructor", h), s(h, "constructor", d), d.displayName = s(h, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
			var t = "function" == typeof e && e.constructor;
			return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
		}, e.mark = function(e) {
			return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, i, "GeneratorFunction")), e.prototype = Object.create(b), e
		}, e.awrap = function(e) {
			return {
				__await: e
			}
		}, g(w.prototype), s(w.prototype, a, (function() {
			return this
		})), e.AsyncIterator = w, e.async = function(t, r, n, o, a) {
			void 0 === a && (a = Promise);
			var i = new w(c(t, r, n, o), a);
			return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
				return e.done ? e.value : i.next()
			}))
		}, g(b), s(b, i, "Generator"), s(b, o, (function() {
			return this
		})), s(b, "toString", (function() {
			return "[object Generator]"
		})), e.keys = function(e) {
			var t = [];
			for (var r in e) t.push(r);
			return t.reverse(),
				function r() {
					for (; t.length;) {
						var n = t.pop();
						if (n in e) return r.value = n, r.done = !1, r
					}
					return r.done = !0, r
				}
		}, e.values = T, S.prototype = {
			constructor: S,
			reset: function(e) {
				if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !e)
					for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
			},
			stop: function() {
				this.done = !0;
				var e = this.tryEntries[0].completion;
				if ("throw" === e.type) throw e.arg;
				return this.rval
			},
			dispatchException: function(e) {
				if (this.done) throw e;
				var t = this;

				function n(r, n) {
					return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
				}
				for (var o = this.tryEntries.length - 1; o >= 0; --o) {
					var a = this.tryEntries[o],
						i = a.completion;
					if ("root" === a.tryLoc) return n("end");
					if (a.tryLoc <= this.prev) {
						var s = r.call(a, "catchLoc"),
							c = r.call(a, "finallyLoc");
						if (s && c) {
							if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
							if (this.prev < a.finallyLoc) return n(a.finallyLoc)
						} else if (s) {
							if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
						} else {
							if (!c) throw new Error("try statement without catch or finally");
							if (this.prev < a.finallyLoc) return n(a.finallyLoc)
						}
					}
				}
			},
			abrupt: function(e, t) {
				for (var n = this.tryEntries.length - 1; n >= 0; --n) {
					var o = this.tryEntries[n];
					if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
						var a = o;
						break
					}
				}
				a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
				var i = a ? a.completion : {};
				return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(i)
			},
			complete: function(e, t) {
				if ("throw" === e.type) throw e.arg;
				return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
			},
			finish: function(e) {
				for (var t = this.tryEntries.length - 1; t >= 0; --t) {
					var r = this.tryEntries[t];
					if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), O(r), u
				}
			},
			catch: function(e) {
				for (var t = this.tryEntries.length - 1; t >= 0; --t) {
					var r = this.tryEntries[t];
					if (r.tryLoc === e) {
						var n = r.completion;
						if ("throw" === n.type) {
							var o = n.arg;
							O(r)
						}
						return o
					}
				}
				throw new Error("illegal catch attempt")
			},
			delegateYield: function(e, t, r) {
				return this.delegate = {
					iterator: T(e),
					resultName: t,
					nextLoc: r
				}, "next" === this.method && (this.arg = void 0), u
			}
		}, e
	}

	function d(e, t, r, n, o, a, i) {
		try {
			var s = e[a](i),
				c = s.value
		} catch (l) {
			return void r(l)
		}
		s.done ? t(c) : Promise.resolve(c).then(n, o)
	}

	function h(e) {
		return function() {
			var t = this,
				r = arguments;
			return new Promise((function(n, o) {
				var a = e.apply(t, r);

				function i(e) {
					d(a, n, o, i, s, "next", e)
				}

				function s(e) {
					d(a, n, o, i, s, "throw", e)
				}
				i(void 0)
			}))
		}
	}

	function m(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function v(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function y(e, t, r) {
		return t && v(e.prototype, t), r && v(e, r), Object.defineProperty(e, "prototype", {
			writable: !1
		}), e
	}
	var b = function() {
			function e() {
				m(this, e)
			}
			var t, r;
			return y(e, null, [{
				key: "save",
				value: (r = h(p().mark((function e(t, r, n) {
					var o, a;
					return p().wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return o = !0, a = "", e.next = 4, this.saveTest(t).then(function() {
									var e = h(p().mark((function e(t) {
										return p().wrap((function(e) {
											for (;;) switch (e.prev = e.next) {
												case 0:
													r();
												case 1:
												case "end":
													return e.stop()
											}
										}), e)
									})));
									return function(t) {
										return e.apply(this, arguments)
									}
								}()).catch((function(e) {
									console.log(e), e.json().then((function(e) {
										a = e
									}))
								}));
							case 4:
								o || (console.log(a), n(a));
							case 5:
							case "end":
								return e.stop()
						}
					}), e, this)
				}))), function(e, t, n) {
					return r.apply(this, arguments)
				})
			}, {
				key: "saveTest",
				value: (t = h(p().mark((function e(t) {
					var r, o;
					return p().wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return r = {}, ["name", "path", "time", "introduction", "instructions", "description", "assessment_description", "bullet_description", "mean", "standard_deviation", "meta_title", "meta_description", "result_description"].map((function(e) {
									return r[e] = t[e] || ""
								})), "aptitude" === t.type ? (r.questions_attributes = g.prepareQuestions(t.questions, t.itemsDeleted), (o = r.questions_attributes).push.apply(o, u(g.prepareQuestions(t.exampleQuestions, [])))) : r.statements_attributes = g.prepareQuestions(t.items, t.itemsDeleted), e.abrupt("return", fetch(n.actions.createOrUpdateRequest("/api/admin/career_tests", {
									career_test: r
								}, t.id)).then(n.actions.status).then(n.actions.json).then((function(e) {
									return e
								})));
							case 6:
							case "end":
								return e.stop()
						}
					}), e)
				}))), function(e) {
					return t.apply(this, arguments)
				})
			}, {
				key: "validate",
				value: function(e, t, r) {
					var n = {};
					["name", "path", "introduction", "instructions", "description", "result_description"].map((function(t) {
						e[t] || (n[o.default.camelize(t)] = "".concat(o.default.capitalize(t), " is required"))
					})), e.timed && !e.time && (n.time = "Time is required"), "aptitude" === e.type ? (["mean", "standard_deviation"].map((function(t) {
						e[t] || (n[o.default.camelize(t)] = "".concat(o.default.capitalize(t), " is required"))
					})), (!e.questions || e.questions.length <= 1) && (n.items = "Items required")) : (!e.items || e.items.length <= 1) && (n.items = "Items required"), Object.keys(n).length ? r(n) : t()
				}
			}]), e
		}(),
		g = function() {
			function e() {
				m(this, e)
			}
			return y(e, null, [{
				key: "prepareQuestions",
				value: function(t, r) {
					var n = [];
					return n.push.apply(n, u(e.prepareQuestionsAttributes(t, !1))), n.push.apply(n, u(e.prepareQuestionsAttributes(r, !0))), n
				}
			}, {
				key: "prepareQuestionsAttributes",
				value: function(e, t) {
					return e.map((function(e, r) {
						e.key, e.career_test_id, e.answer_variants, e.answers, e.answersDeleted;
						return s(s({}, l(e, a)), {
							number: r + 1,
							_destroy: t ? "1" : "0"
						})
					}))
				}
			}]), e
		}()
}, function(e, t, r) {
	"use strict";

	function n(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}
	r.r(t);
	var o = function() {
		function e() {
			! function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, e)
		}
		var t, r, o;
		return t = e, o = [{
			key: "millisToMinutesAndSeconds",
			value: function(e) {
				var t = Math.floor(e / 6e4),
					r = (e % 6e4 / 1e3).toFixed(0);
				return t + ":" + (r < 10 ? "0" : "") + r
			}
		}, {
			key: "scrollToError",
			value: function() {
				var e = document.querySelector("div.err, small.error");
				if (e) {
					var t = e.offsetTop;
					t && window.scrollTo({
						top: t - 200,
						behavior: "smooth"
					})
				}
			}
		}], (r = null) && n(t.prototype, r), o && n(t, o), Object.defineProperty(t, "prototype", {
			writable: !1
		}), e
	}();
	t.default = o
}, , function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return i
	}));
	var n = r(0),
		o = r.n(n),
		a = r(189);

	function i(e) {
		return o.a.createElement("div", {
			style: {
				padding: "0 4px"
			}
		}, o.a.createElement("style", null, e.questions.map((function(t, r) {
			var n = t.page || t.number,
				o = t.answered || t.user_answer;
			return (n < e.activePage || n < e.currentPage) && !o ? ".rc-slider--dot-".concat(n, " .rc-slider-point{ background-color: #F85757; opacity: 1}") : o ? ".rc-slider--dot-".concat(n, " .rc-slider-point{ background-color: #59CE61;\n                            opacity:1;bottom: 2px;height: 5px;}\n                            @media screen and (max-width: 640px){.rc-slider--dot-").concat(n, " .rc-slider-point{bottom: 1px}}") : null
		}))), o.a.createElement(a.default, {
			dots: !0,
			min: 1,
			max: e.questions.length,
			marks: function() {
				var t = {};
				return e.questions.map((function(e, r) {
					t[r + 1] = {
						label: r + 1
					}
				})), t
			}(),
			step: 1,
			onAfterChange: function(t) {
				var r;
				e.currentPage !== t && (r = t, e.goToPage(r))
			},
			activeValue: e.activePage,
			defaultValue: e.currentPage
		}))
	}
}, , function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return c
	}));
	var n = r(1);

	function o() {
		o = function() {
			return e
		};
		var e = {},
			t = Object.prototype,
			r = t.hasOwnProperty,
			n = "function" == typeof Symbol ? Symbol : {},
			a = n.iterator || "@@iterator",
			i = n.asyncIterator || "@@asyncIterator",
			s = n.toStringTag || "@@toStringTag";

		function c(e, t, r) {
			return Object.defineProperty(e, t, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}), e[t]
		}
		try {
			c({}, "")
		} catch (x) {
			c = function(e, t, r) {
				return e[t] = r
			}
		}

		function l(e, t, r, n) {
			var o = t && t.prototype instanceof p ? t : p,
				a = Object.create(o.prototype),
				i = new S(n || []);
			return a._invoke = function(e, t, r) {
				var n = "suspendedStart";
				return function(o, a) {
					if ("executing" === n) throw new Error("Generator is already running");
					if ("completed" === n) {
						if ("throw" === o) throw a;
						return j()
					}
					for (r.method = o, r.arg = a;;) {
						var i = r.delegate;
						if (i) {
							var s = E(i, r);
							if (s) {
								if (s === f) continue;
								return s
							}
						}
						if ("next" === r.method) r.sent = r._sent = r.arg;
						else if ("throw" === r.method) {
							if ("suspendedStart" === n) throw n = "completed", r.arg;
							r.dispatchException(r.arg)
						} else "return" === r.method && r.abrupt("return", r.arg);
						n = "executing";
						var c = u(e, t, r);
						if ("normal" === c.type) {
							if (n = r.done ? "completed" : "suspendedYield", c.arg === f) continue;
							return {
								value: c.arg,
								done: r.done
							}
						}
						"throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
					}
				}
			}(e, r, i), a
		}

		function u(e, t, r) {
			try {
				return {
					type: "normal",
					arg: e.call(t, r)
				}
			} catch (x) {
				return {
					type: "throw",
					arg: x
				}
			}
		}
		e.wrap = l;
		var f = {};

		function p() {}

		function d() {}

		function h() {}
		var m = {};
		c(m, a, (function() {
			return this
		}));
		var v = Object.getPrototypeOf,
			y = v && v(v(T([])));
		y && y !== t && r.call(y, a) && (m = y);
		var b = h.prototype = p.prototype = Object.create(m);

		function g(e) {
			["next", "throw", "return"].forEach((function(t) {
				c(e, t, (function(e) {
					return this._invoke(t, e)
				}))
			}))
		}

		function w(e, t) {
			var n;
			this._invoke = function(o, a) {
				function i() {
					return new t((function(n, i) {
						! function n(o, a, i, s) {
							var c = u(e[o], e, a);
							if ("throw" !== c.type) {
								var l = c.arg,
									f = l.value;
								return f && "object" == typeof f && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
									n("next", e, i, s)
								}), (function(e) {
									n("throw", e, i, s)
								})) : t.resolve(f).then((function(e) {
									l.value = e, i(l)
								}), (function(e) {
									return n("throw", e, i, s)
								}))
							}
							s(c.arg)
						}(o, a, n, i)
					}))
				}
				return n = n ? n.then(i, i) : i()
			}
		}

		function E(e, t) {
			var r = e.iterator[t.method];
			if (void 0 === r) {
				if (t.delegate = null, "throw" === t.method) {
					if (e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method)) return f;
					t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
				}
				return f
			}
			var n = u(r, e.iterator, t.arg);
			if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, f;
			var o = n.arg;
			return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, f) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, f)
		}

		function _(e) {
			var t = {
				tryLoc: e[0]
			};
			1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
		}

		function O(e) {
			var t = e.completion || {};
			t.type = "normal", delete t.arg, e.completion = t
		}

		function S(e) {
			this.tryEntries = [{
				tryLoc: "root"
			}], e.forEach(_, this), this.reset(!0)
		}

		function T(e) {
			if (e) {
				var t = e[a];
				if (t) return t.call(e);
				if ("function" == typeof e.next) return e;
				if (!isNaN(e.length)) {
					var n = -1,
						o = function t() {
							for (; ++n < e.length;)
								if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
							return t.value = void 0, t.done = !0, t
						};
					return o.next = o
				}
			}
			return {
				next: j
			}
		}

		function j() {
			return {
				value: void 0,
				done: !0
			}
		}
		return d.prototype = h, c(b, "constructor", h), c(h, "constructor", d), d.displayName = c(h, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
			var t = "function" == typeof e && e.constructor;
			return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
		}, e.mark = function(e) {
			return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, c(e, s, "GeneratorFunction")), e.prototype = Object.create(b), e
		}, e.awrap = function(e) {
			return {
				__await: e
			}
		}, g(w.prototype), c(w.prototype, i, (function() {
			return this
		})), e.AsyncIterator = w, e.async = function(t, r, n, o, a) {
			void 0 === a && (a = Promise);
			var i = new w(l(t, r, n, o), a);
			return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
				return e.done ? e.value : i.next()
			}))
		}, g(b), c(b, s, "Generator"), c(b, a, (function() {
			return this
		})), c(b, "toString", (function() {
			return "[object Generator]"
		})), e.keys = function(e) {
			var t = [];
			for (var r in e) t.push(r);
			return t.reverse(),
				function r() {
					for (; t.length;) {
						var n = t.pop();
						if (n in e) return r.value = n, r.done = !1, r
					}
					return r.done = !0, r
				}
		}, e.values = T, S.prototype = {
			constructor: S,
			reset: function(e) {
				if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !e)
					for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
			},
			stop: function() {
				this.done = !0;
				var e = this.tryEntries[0].completion;
				if ("throw" === e.type) throw e.arg;
				return this.rval
			},
			dispatchException: function(e) {
				if (this.done) throw e;
				var t = this;

				function n(r, n) {
					return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
				}
				for (var o = this.tryEntries.length - 1; o >= 0; --o) {
					var a = this.tryEntries[o],
						i = a.completion;
					if ("root" === a.tryLoc) return n("end");
					if (a.tryLoc <= this.prev) {
						var s = r.call(a, "catchLoc"),
							c = r.call(a, "finallyLoc");
						if (s && c) {
							if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
							if (this.prev < a.finallyLoc) return n(a.finallyLoc)
						} else if (s) {
							if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
						} else {
							if (!c) throw new Error("try statement without catch or finally");
							if (this.prev < a.finallyLoc) return n(a.finallyLoc)
						}
					}
				}
			},
			abrupt: function(e, t) {
				for (var n = this.tryEntries.length - 1; n >= 0; --n) {
					var o = this.tryEntries[n];
					if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
						var a = o;
						break
					}
				}
				a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
				var i = a ? a.completion : {};
				return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, f) : this.complete(i)
			},
			complete: function(e, t) {
				if ("throw" === e.type) throw e.arg;
				return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
			},
			finish: function(e) {
				for (var t = this.tryEntries.length - 1; t >= 0; --t) {
					var r = this.tryEntries[t];
					if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), O(r), f
				}
			},
			catch: function(e) {
				for (var t = this.tryEntries.length - 1; t >= 0; --t) {
					var r = this.tryEntries[t];
					if (r.tryLoc === e) {
						var n = r.completion;
						if ("throw" === n.type) {
							var o = n.arg;
							O(r)
						}
						return o
					}
				}
				throw new Error("illegal catch attempt")
			},
			delegateYield: function(e, t, r) {
				return this.delegate = {
					iterator: T(e),
					resultName: t,
					nextLoc: r
				}, "next" === this.method && (this.arg = void 0), f
			}
		}, e
	}

	function a(e, t, r, n, o, a, i) {
		try {
			var s = e[a](i),
				c = s.value
		} catch (l) {
			return void r(l)
		}
		s.done ? t(c) : Promise.resolve(c).then(n, o)
	}

	function i(e) {
		return function() {
			var t = this,
				r = arguments;
			return new Promise((function(n, o) {
				var i = e.apply(t, r);

				function s(e) {
					a(i, n, o, s, c, "next", e)
				}

				function c(e) {
					a(i, n, o, s, c, "throw", e)
				}
				s(void 0)
			}))
		}
	}

	function s(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}
	var c = function() {
		function e() {
			! function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, e)
		}
		var t, r, a;
		return t = e, a = [{
			key: "hide",
			value: function() {
				fetch(n.actions.putRequest("/api/user", {
					user: {
						show_feedback: !1
					}
				})).then(n.actions.status).then(n.actions.json).then((function(e) {
					return e
				})).then((function(e) {
					console.info("Feedback bottom area will no longer appear")
				})).catch((function(e) {
					console.error(e)
				}))
			}
		}, {
			key: "send",
			value: function(e, t, r, a) {
				return fetch(n.actions.postRequest("/api/feedbacks", {
					feedback: e,
					g_recaptcha_response: t
				})).then(n.actions.status).then(n.actions.json).then((function(e) {
					return e
				})).then(function() {
					var e = i(o().mark((function e(t) {
						return o().wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									r(t);
								case 1:
								case "end":
									return e.stop()
							}
						}), e)
					})));
					return function(t) {
						return e.apply(this, arguments)
					}
				}()).catch(function() {
					var e = i(o().mark((function e(t) {
						return o().wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									console.error(t), a && a();
								case 2:
								case "end":
									return e.stop()
							}
						}), e)
					})));
					return function(t) {
						return e.apply(this, arguments)
					}
				}())
			}
		}], (r = null) && s(t.prototype, r), a && s(t, a), Object.defineProperty(t, "prototype", {
			writable: !1
		}), e
	}()
}, , , , , , function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return l
	}));
	var n = r(337),
		o = r.n(n),
		a = r(17);

	function i(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function s(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? i(Object(r), !0).forEach((function(t) {
				c(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function c(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function l() {
		var e, t, r, n, i, c, l, u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
			f = {
				threshold: 1,
				maxDisplays: 1,
				eventThrottle: 200,
				onExitIntent: function() {}
			};
		return e = s(s({}, f), u), t = new Map, r = 0, n = 0, i = function() {
			t.forEach((function(e, r, n) {
				return function(e) {
					var r = t.get(e),
						n = r.eventName,
						o = r.callback;
					document.removeEventListener(n, o), t.delete(e)
				}(r)
			}))
		}, c = function() {
			e.onExitIntent(), ++r >= e.maxDisplays && i()
		}, l = function(t) {
			var o, a;
			o = t.clientY, a = n, n = o, o <= e.threshold && a > o && r < e.maxDisplays && (console.log("Desktop Mousemove Exit intent popup triggered"), c())
		}, Object(a.isDevice)() ? setTimeout((function() {
			c()
		}), 6e4) : setTimeout((function() {
			var r, n;
			r = "mousemove", n = o()(l, e.eventThrottle), console.log("addEvent", r), document.addEventListener(r, n, !1), t.set("document:".concat(r), {
				eventName: r,
				callback: n
			})
		}), 1e4), i
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), t.default = {
		statementTest: {
			test: {},
			userStatements: [],
			user: null
		},
		pages: [],
		aptitudeTest: {
			test: {},
			userQuestions: [],
			exampleQuestions: []
		}
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return l
	}));
	var n = r(0),
		o = r.n(n),
		a = r(306),
		i = r(31),
		s = r(309),
		c = r(310);

	function l(e) {
		var t = Object(n.useRef)(null),
			r = Object(n.useRef)(null),
			l = Object(n.useRef)(null);
		return o.a.createElement(o.a.Fragment, null, o.a.createElement(i.default, {
			ref: t
		}, o.a.createElement(s.default, null)), o.a.createElement(i.default, {
			ref: l
		}, o.a.createElement(c.default, null)), o.a.createElement(i.default, {
			ref: r
		}, o.a.createElement(a.default, {
			onSave: function(n) {
				r.current.close(), setLoggedIn(!0), setUser(n),
					function(r) {
						setSaved(!0), t.current.open(), e.onLogin(r)
					}(n)
			},
			afterLogin: function(t) {
				r.current.close(), l.current.open(), setLoggedIn(!0), setUser(t), e.onLogin(t)
			},
			forMobile: !0
		})))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(10),
		i = r(2),
		s = r(53),
		c = r(16),
		l = r(1),
		u = r(89),
		f = r(31),
		p = r(209),
		d = r(125),
		h = r(299);

	function m(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function v(e, t) {
		return (v = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function y(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = g(e);
			if (t) {
				var o = g(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return b(this, r)
		}
	}

	function b(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function g(e) {
		return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var w = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && v(e, t)
		}(i, e);
		var t, r, n, a = y(i);

		function i(e) {
			var t;
			return function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, i), (t = a.call(this, e)).askAboutRetake = function() {
				t.retakesModalRef.current.open()
			}, t.isRetake = function() {
				return t.props.statementTest.user && "finished" === t.props.statementTest.user["".concat(t.props.statementTest.test.code, "_status")]
			}, t.startTest = function() {
				t.setState({
					isLoading: !0
				}, (function() {
					u.default.startTest(t.props.statementTest.test.id).then((function() {
						t.props.actions.startTest()
					})).catch((function(e) {
						console.log(e)
					}))
				}))
			}, t.isStarted = function() {
				var e = t.props.statementTest.test;
				return "started" === (localStorage.getItem("".concat(e.code, "_status")) || (t.props.statementTest.user ? t.props.statementTest.user["".concat(e.code, "_status")] : "not_started"))
			}, t.state = {
				isLoading: !1
			}, t.instructionsArea = o.a.createRef(), t.retakesModalRef = o.a.createRef(), t
		}
		return t = i, (r = [{
			key: "render",
			value: function() {
				var e = this,
					t = this.props.statementTest.test,
					r = this.props.statementTest.user && this.props.statementTest.user.full_access;
				return t && t.code ? o.a.createElement("div", {
					className: "blur-box-container blur-box-container__main blur-box-container--spaced test-main-page"
				}, this.state.isLoading ? o.a.createElement(l.Loader, null) : null, o.a.createElement("div", {
					className: "blur-box blur-box__main"
				}, o.a.createElement("div", {
					className: "main-test align-center"
				}, o.a.createElement("div", {
					className: "breadcrumbs-nav breadcrumbs-nav--tests"
				}, o.a.createElement("a", {
					href: "/tests"
				}, o.a.createElement("span", null, "Tests")), o.a.createElement("div", {
					className: "small-icon arrow-breadcrumbs"
				}), o.a.createElement("a", {
					href: "/tests/" + t.code
				}, o.a.createElement("span", null, t.name)), o.a.createElement("div", {
					className: "small-icon arrow-breadcrumbs"
				}), o.a.createElement("span", null, "Start")), o.a.createElement("div", {
					className: "large-icon " + t.code + "-white-bold"
				}), o.a.createElement("h1", {
					className: "main-test__title"
				}, "  ", "interests" !== t.code || r ? t.name : "Career Interests", " Test"), o.a.createElement("div", {
					className: "grid-x main-test__details"
				}, o.a.createElement("div", {
					className: "small-5 medium-4 cell flex-center"
				}, o.a.createElement("span", {
					className: "small-icons questions main-test__details__icon"
				}), this.props.statementTest.test.statements.length / 5, " questions"), o.a.createElement("div", {
					className: "small-7 medium-4 cell flex-center"
				}, o.a.createElement("span", {
					className: "small-icons timed main-test__details__icon"
				}), "Approx. ", t.time, " minutes"), o.a.createElement("div", {
					className: "small-12 medium-4 cell flex-center main-test__details__last"
				}, o.a.createElement("span", {
					className: "small-icons clock-stop-green main-test__details__icon"
				}), "No time limit")), o.a.createElement("p", {
					className: "max-width-777 " + ("interests" === this.props.statementTest.test.code ? " ci-test-introduction" : " ")
				}, t.introduction), o.a.createElement(c.default, {
					onClick: this.isRetake() ? this.askAboutRetake : this.startTest,
					className: "button--with-icon"
				}, this.isStarted() ? "Continue" : "Start Test", o.a.createElement("span", {
					className: "small-icons next-arrow-white-xs is-right"
				})), o.a.createElement("div", {
					className: "test-btn-container flex-center"
				}, o.a.createElement("a", {
					className: "text-button-small",
					onClick: function() {
						return e.instructionsArea.current.open()
					}
				}, "Read instructions")), o.a.createElement(h.default, {
					user: this.props.statementTest.user
				}), o.a.createElement("div", {
					className: "ci-test-benefits-block",
					dangerouslySetInnerHTML: {
						__html: this.props.statementTest.test.bullet_description
					}
				})), o.a.createElement("div", {
					className: "bg-copy " + this.props.statementTest.test.code
				}), o.a.createElement(d.default, {
					ref: this.instructionsArea,
					btnCloseTxt: "Back to test"
				}, o.a.createElement("div", {
					className: "slideout__instructions slideout__instructions--ci-main",
					dangerouslySetInnerHTML: {
						__html: this.props.statementTest.test.instructions
					}
				}))), this.props.statementTest.user ? o.a.createElement(f.default, {
					ref: this.retakesModalRef,
					className: "retake-popup"
				}, o.a.createElement(p.default, {
					onConfirm: this.startTest,
					code: t.code,
					name: t.name,
					onCancel: function() {
						e.retakesModalRef.current.close()
					},
					retakes: this.props.statementTest.user["".concat(t.code, "_retakes")]
				})) : null) : null
			}
		}]) && m(t.prototype, r), n && m(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), i
	}(n.Component);
	t.default = Object(i.b)((function(e) {
		return {
			statementTest: e.statementTest
		}
	}), (function(e) {
		return {
			actions: Object(a.b)(Object.assign({}, s), e)
		}
	}))(w)
}, function(e, t, r) {
	"use strict";
	r.r(t);
	r(0);
	var n = r(145);
	t.default = n.default
}, function(e, t, r) {
	"use strict";
	var n = r(18),
		o = r(24),
		a = r(86);

	function i(e, t) {
		return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
	}
	var s = r(0),
		c = r.n(s),
		l = r(14),
		u = r.n(l),
		f = !1,
		p = r(90),
		d = function(e) {
			function t(t, r) {
				var n;
				n = e.call(this, t, r) || this;
				var o, a = r && !r.isMounting ? t.enter : t.appear;
				return n.appearStatus = null, t.in ? a ? (o = "exited", n.appearStatus = "entering") : o = "entered" : o = t.unmountOnExit || t.mountOnEnter ? "unmounted" : "exited", n.state = {
					status: o
				}, n.nextCallback = null, n
			}
			Object(a.a)(t, e), t.getDerivedStateFromProps = function(e, t) {
				return e.in && "unmounted" === t.status ? {
					status: "exited"
				} : null
			};
			var r = t.prototype;
			return r.componentDidMount = function() {
				this.updateStatus(!0, this.appearStatus)
			}, r.componentDidUpdate = function(e) {
				var t = null;
				if (e !== this.props) {
					var r = this.state.status;
					this.props.in ? "entering" !== r && "entered" !== r && (t = "entering") : "entering" !== r && "entered" !== r || (t = "exiting")
				}
				this.updateStatus(!1, t)
			}, r.componentWillUnmount = function() {
				this.cancelNextCallback()
			}, r.getTimeouts = function() {
				var e, t, r, n = this.props.timeout;
				return e = t = r = n, null != n && "number" !== typeof n && (e = n.exit, t = n.enter, r = void 0 !== n.appear ? n.appear : t), {
					exit: e,
					enter: t,
					appear: r
				}
			}, r.updateStatus = function(e, t) {
				void 0 === e && (e = !1), null !== t ? (this.cancelNextCallback(), "entering" === t ? this.performEnter(e) : this.performExit()) : this.props.unmountOnExit && "exited" === this.state.status && this.setState({
					status: "unmounted"
				})
			}, r.performEnter = function(e) {
				var t = this,
					r = this.props.enter,
					n = this.context ? this.context.isMounting : e,
					o = this.props.nodeRef ? [n] : [u.a.findDOMNode(this), n],
					a = o[0],
					i = o[1],
					s = this.getTimeouts(),
					c = n ? s.appear : s.enter;
				!e && !r || f ? this.safeSetState({
					status: "entered"
				}, (function() {
					t.props.onEntered(a)
				})) : (this.props.onEnter(a, i), this.safeSetState({
					status: "entering"
				}, (function() {
					t.props.onEntering(a, i), t.onTransitionEnd(c, (function() {
						t.safeSetState({
							status: "entered"
						}, (function() {
							t.props.onEntered(a, i)
						}))
					}))
				})))
			}, r.performExit = function() {
				var e = this,
					t = this.props.exit,
					r = this.getTimeouts(),
					n = this.props.nodeRef ? void 0 : u.a.findDOMNode(this);
				t && !f ? (this.props.onExit(n), this.safeSetState({
					status: "exiting"
				}, (function() {
					e.props.onExiting(n), e.onTransitionEnd(r.exit, (function() {
						e.safeSetState({
							status: "exited"
						}, (function() {
							e.props.onExited(n)
						}))
					}))
				}))) : this.safeSetState({
					status: "exited"
				}, (function() {
					e.props.onExited(n)
				}))
			}, r.cancelNextCallback = function() {
				null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
			}, r.safeSetState = function(e, t) {
				t = this.setNextCallback(t), this.setState(e, t)
			}, r.setNextCallback = function(e) {
				var t = this,
					r = !0;
				return this.nextCallback = function(n) {
					r && (r = !1, t.nextCallback = null, e(n))
				}, this.nextCallback.cancel = function() {
					r = !1
				}, this.nextCallback
			}, r.onTransitionEnd = function(e, t) {
				this.setNextCallback(t);
				var r = this.props.nodeRef ? this.props.nodeRef.current : u.a.findDOMNode(this),
					n = null == e && !this.props.addEndListener;
				if (r && !n) {
					if (this.props.addEndListener) {
						var o = this.props.nodeRef ? [this.nextCallback] : [r, this.nextCallback],
							a = o[0],
							i = o[1];
						this.props.addEndListener(a, i)
					}
					null != e && setTimeout(this.nextCallback, e)
				} else setTimeout(this.nextCallback, 0)
			}, r.render = function() {
				var e = this.state.status;
				if ("unmounted" === e) return null;
				var t = this.props,
					r = t.children,
					n = (t.in, t.mountOnEnter, t.unmountOnExit, t.appear, t.enter, t.exit, t.timeout, t.addEndListener, t.onEnter, t.onEntering, t.onEntered, t.onExit, t.onExiting, t.onExited, t.nodeRef, Object(o.a)(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
				return c.a.createElement(p.a.Provider, {
					value: null
				}, "function" === typeof r ? r(e, n) : c.a.cloneElement(c.a.Children.only(r), n))
			}, t
		}(c.a.Component);

	function h() {}
	d.contextType = p.a, d.defaultProps = {
		in: !1,
		mountOnEnter: !1,
		unmountOnExit: !1,
		appear: !1,
		enter: !0,
		exit: !0,
		onEnter: h,
		onEntering: h,
		onEntered: h,
		onExit: h,
		onExiting: h,
		onExited: h
	}, d.UNMOUNTED = "unmounted", d.EXITED = "exited", d.ENTERING = "entering", d.ENTERED = "entered", d.EXITING = "exiting";
	var m = d,
		v = function(e, t) {
			return e && t && t.split(" ").forEach((function(t) {
				return n = t, void((r = e).classList ? r.classList.remove(n) : "string" === typeof r.className ? r.className = i(r.className, n) : r.setAttribute("class", i(r.className && r.className.baseVal || "", n)));
				var r, n
			}))
		},
		y = function(e) {
			function t() {
				for (var t, r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
				return (t = e.call.apply(e, [this].concat(n)) || this).appliedClasses = {
					appear: {},
					enter: {},
					exit: {}
				}, t.onEnter = function(e, r) {
					var n = t.resolveArguments(e, r),
						o = n[0],
						a = n[1];
					t.removeClasses(o, "exit"), t.addClass(o, a ? "appear" : "enter", "base"), t.props.onEnter && t.props.onEnter(e, r)
				}, t.onEntering = function(e, r) {
					var n = t.resolveArguments(e, r),
						o = n[0],
						a = n[1] ? "appear" : "enter";
					t.addClass(o, a, "active"), t.props.onEntering && t.props.onEntering(e, r)
				}, t.onEntered = function(e, r) {
					var n = t.resolveArguments(e, r),
						o = n[0],
						a = n[1] ? "appear" : "enter";
					t.removeClasses(o, a), t.addClass(o, a, "done"), t.props.onEntered && t.props.onEntered(e, r)
				}, t.onExit = function(e) {
					var r = t.resolveArguments(e)[0];
					t.removeClasses(r, "appear"), t.removeClasses(r, "enter"), t.addClass(r, "exit", "base"), t.props.onExit && t.props.onExit(e)
				}, t.onExiting = function(e) {
					var r = t.resolveArguments(e)[0];
					t.addClass(r, "exit", "active"), t.props.onExiting && t.props.onExiting(e)
				}, t.onExited = function(e) {
					var r = t.resolveArguments(e)[0];
					t.removeClasses(r, "exit"), t.addClass(r, "exit", "done"), t.props.onExited && t.props.onExited(e)
				}, t.resolveArguments = function(e, r) {
					return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, r]
				}, t.getClassNames = function(e) {
					var r = t.props.classNames,
						n = "string" === typeof r,
						o = n ? "" + (n && r ? r + "-" : "") + e : r[e];
					return {
						baseClassName: o,
						activeClassName: n ? o + "-active" : r[e + "Active"],
						doneClassName: n ? o + "-done" : r[e + "Done"]
					}
				}, t
			}
			Object(a.a)(t, e);
			var r = t.prototype;
			return r.addClass = function(e, t, r) {
				var n = this.getClassNames(t)[r + "ClassName"],
					o = this.getClassNames("enter").doneClassName;
				"appear" === t && "done" === r && o && (n += " " + o), "active" === r && e && e.scrollTop, n && (this.appliedClasses[t][r] = n, function(e, t) {
					e && t && t.split(" ").forEach((function(t) {
						return n = t, void((r = e).classList ? r.classList.add(n) : function(e, t) {
							return e.classList ? !!t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ")
						}(r, n) || ("string" === typeof r.className ? r.className = r.className + " " + n : r.setAttribute("class", (r.className && r.className.baseVal || "") + " " + n)));
						var r, n
					}))
				}(e, n))
			}, r.removeClasses = function(e, t) {
				var r = this.appliedClasses[t],
					n = r.base,
					o = r.active,
					a = r.done;
				this.appliedClasses[t] = {}, n && v(e, n), o && v(e, o), a && v(e, a)
			}, r.render = function() {
				var e = this.props,
					t = (e.classNames, Object(o.a)(e, ["classNames"]));
				return c.a.createElement(m, Object(n.a)({}, t, {
					onEnter: this.onEnter,
					onEntered: this.onEntered,
					onEntering: this.onEntering,
					onExit: this.onExit,
					onExiting: this.onExiting,
					onExited: this.onExited
				}))
			}, t
		}(c.a.Component);
	y.defaultProps = {
		classNames: ""
	};
	t.a = y
}, function(e, t) {
	e.exports = function(e) {
		if (!e.webpackPolyfill) {
			var t = Object.create(e);
			t.children || (t.children = []), Object.defineProperty(t, "loaded", {
				enumerable: !0,
				get: function() {
					return t.l
				}
			}), Object.defineProperty(t, "id", {
				enumerable: !0,
				get: function() {
					return t.i
				}
			}), Object.defineProperty(t, "exports", {
				enumerable: !0
			}), t.webpackPolyfill = 1
		}
		return t
	}
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r(14);
	t.default = function(e) {
		var t = e.children,
			r = e.areaRef,
			a = Object(n.useRef)(document.createElement("div"));
		return Object(n.useEffect)((function() {
			return r.current.appendChild(a.current),
				function() {
					return r.current.removeChild(a.current)
				}
		}), []), Object(o.createPortal)(t, a.current)
	}
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n);
	t.default = function(e) {
		var t = e.children,
			r = e.className;
		return o.a.createElement("div", {
			className: "tooltip tooltip--notice ".concat(r || "")
		}, t)
	}
}, , function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return u
	}));
	var n = r(0),
		o = r.n(n),
		a = r(41),
		i = r(119);

	function s(e, t) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) || function(e, t) {
			var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
			if (null == r) return;
			var n, o, a = [],
				i = !0,
				s = !1;
			try {
				for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
			} catch (c) {
				s = !0, o = c
			} finally {
				try {
					i || null == r.return || r.return()
				} finally {
					if (s) throw o
				}
			}
			return a
		}(e, t) || function(e, t) {
			if (!e) return;
			if ("string" === typeof e) return c(e, t);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			"Object" === r && e.constructor && (r = e.constructor.name);
			if ("Map" === r || "Set" === r) return Array.from(e);
			if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(e, t)
		}(e, t) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function c(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
		return n
	}
	var l = [{
		name: "USD $",
		mobileName: "$",
		value: "USD"
	}, {
		name: "EUR \u20ac",
		mobileName: "\u20ac",
		value: "EUR"
	}, {
		name: "GBP \xa3",
		mobileName: "\xa3",
		value: "GBP"
	}];

	function u() {
		var e = s(Object(n.useState)(a.currentCurrency), 2),
			t = e[0],
			r = (e[1], s(Object(n.useState)(!1), 2)),
			c = r[0],
			u = r[1];
		return Object(n.useEffect)((function() {
			function e() {
				window.innerWidth > 720 || "/checkout" === location.pathname ? u(!0) : u(!1)
			}
			return e(), window.addEventListener("resize", e),
				function() {
					return window.removeEventListener("resize", e)
				}
		})), o.a.createElement("div", {
			className: "currency-blk"
		}, o.a.createElement(i.default, {
			onSelect: function(e) {
				Object(a.setCookie)(a.CURRENCY_COOKIE, e, 24), location.reload(!0)
			},
			selected: t,
			options: l,
			optionsValue: "value",
			optionsLabel: c ? "name" : "mobileName",
			className: "label-icon-right select-label currencies-select",
			optionClassName: "currencies-option"
		}))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return i
	}));
	var n = r(0),
		o = r.n(n),
		a = r(3);

	function i(e) {
		return o.a.createElement("div", {
			className: "grid-x"
		}, o.a.createElement("div", {
			className: "cell"
		}, o.a.createElement("h3", {
			className: "popup__title"
		}, "Overwrite existing test progress?"), o.a.createElement("p", {
			className: "popup__text"
		}, "It seems you have already started the Career Interests test on a previous occasion."), o.a.createElement("p", {
			className: "popup__text"
		}, "Would you look to replace your previous progress and results with your new test results? Keep in mind that once replaced, your old test progress cannot be recovered.")), o.a.createElement("div", {
			className: "cell mar-top-20"
		}, o.a.createElement(a.default, {
			onClick: e.onConfirm,
			className: "button button--green mar-right-10",
			"data-open": "saved"
		}, "Yes, replace"), o.a.createElement(a.default, {
			onClick: e.onCancel,
			className: "button button--grey-white",
			"data-open": "saved"
		}, "No, keep")))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return i
	}));
	var n = r(0),
		o = r.n(n),
		a = r(3);

	function i(e) {
		return o.a.createElement("div", {
			className: "grid-x"
		}, o.a.createElement("div", {
			className: "cell"
		}, o.a.createElement("h3", {
			className: "popup__title"
		}, "Test results cannot be saved"), o.a.createElement("p", {
			className: "popup__text"
		}, "It seems you have already taken the Career Interests test on a previous occasion."), o.a.createElement("p", {
			className: "popup__text"
		}, "You are only permitted by your administrator to take each test once. Please contact your account administrator '", e.company, "' to request for a retake, if needed.                ")), o.a.createElement("div", {
			className: "cell mar-top-20 text-center"
		}, o.a.createElement(a.default, {
			onClick: e.onCancel,
			className: "button button--green",
			"data-open": "saved"
		}, "Ok")))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return p
	}));
	var n = r(0),
		o = r.n(n),
		a = r(237),
		i = r.n(a),
		s = r(91),
		c = r(55);

	function l(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function u(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? l(Object(r), !0).forEach((function(t) {
				f(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function f(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function p(e) {
		var t = function(t, r) {
			console.log("google", r, t), t.code ? e.onCallback((function() {
				var r = e.saveAnswers ? u(u({}, t), Object(c.tempResultsToHash)()) : t;
				s.default.loginWithProvider("google", r, e.onSuccess, e.onError)
			})) : console.error("No google response code")
		};
		return o.a.createElement(i.a, {
			clientId: e.clientId,
			responseType: "code",
			onSuccess: function(e) {
				return t(e, "success")
			},
			onFailure: function(e) {
				return t(e, "failure")
			},
			autoLoad: !1,
			render: function(t) {
				return o.a.createElement("button", {
					onClick: t.onClick,
					className: "button button--clear"
				}, o.a.createElement("span", {
					className: e.icon || "small-icons is-left google-plus"
				}), e.label || "Sign up using", " ", o.a.createElement("span", null, "Google"))
			}
		})
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), t.default = {
		facebookID: "746921042121968",
		googleID: "647146204636-heedt6etnjri7ebfp2vlfm42u9v5pm07.apps.googleusercontent.com"
	}
}, , , function(e, t, r) {
	"use strict";
	var n = r(58),
		o = r(56),
		a = r(57);
	var i = Object(a.a)("twitter", (function(e, t) {
		var r = t.title,
			a = t.via,
			i = t.hashtags,
			s = void 0 === i ? [] : i,
			c = t.related,
			l = void 0 === c ? [] : c;
		return Object(n.a)(e, "twitter.url"), Object(n.a)(Array.isArray(s), "twitter.hashtags is not an array"), Object(n.a)(Array.isArray(l), "twitter.related is not an array"), "https://twitter.com/share" + Object(o.a)({
			url: e,
			text: r,
			via: a,
			hashtags: s.length > 0 ? s.join(",") : void 0,
			related: l.length > 0 ? l.join(",") : void 0
		})
	}), (function(e) {
		return {
			hashtags: e.hashtags,
			title: e.title,
			via: e.via,
			related: e.related
		}
	}), {
		windowWidth: 550,
		windowHeight: 400
	});
	t.a = i
}, function(e, t, r) {
	"use strict";
	var n = r(56),
		o = r(57);
	var a = Object(o.a)("email", (function(e, t) {
		var r = t.subject,
			o = t.body,
			a = t.separator;
		return "mailto:" + Object(n.a)({
			subject: r,
			body: o ? o + a + e : e
		})
	}), (function(e) {
		return {
			subject: e.subject,
			body: e.body,
			separator: e.separator || " "
		}
	}), {
		openShareDialogOnClick: !1,
		onClick: function(e, t) {
			window.location.href = t
		}
	});
	t.a = a
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return a
	}));
	var n = r(0),
		o = r.n(n);

	function a(e) {
		var t = e.user && e.user.full_access,
			r = e.user && (e.user.full_access || e.user["".concat(e.testCode, "_access")]),
			a = e.user && "finished" === e.user.interests_status && "finished" === e.user.personality_status && "finished" === e.user.motivators_status && "finished" === e.user.abstract_status && "finished" === e.user.numerical_status && "finished" === e.user.verbal_status;
		return o.a.createElement(n.Fragment, null, o.a.createElement("h3", {
			className: "results__subheading"
		}, "Popular careers"), o.a.createElement("p", null, function() {
			switch (e.testCode) {
				case "abstract":
				case "verbal":
				case "numerical":
					return "Here are the five most popular careers that require a high level of ".concat(e.testCode, " reasoning:");
				case "interests":
					return "Here are the five most popular careers in ".concat(e.optionTitle, ", along with helpful insights and data:");
				case "personality":
					return "Here are the five most popular careers for ".concat(e.optionTitle, " personalities, along with helpful insights and data:");
				case "motivators":
					return "Here are the five most popular careers for ".concat(e.optionTitle, " high-scorers, along with helpful insights and data:")
			}
		}()), o.a.createElement("ul", {
			className: "results__popular-careers"
		}, e.careers.map((function(e, t) {
			return o.a.createElement(n.Fragment, {
				key: "career".concat(t)
			}, o.a.createElement("li", null, o.a.createElement("span", null, e.name, " "), "- ", e.median_salary, " median salary ", e.projected_growth ? "| ".concat(e.projected_growth, " growth ") : null, "|  ", o.a.createElement("span", {
				className: "results__industry-match"
			}, " Your match: ", e.score ? e.score : o.a.createElement("span", {
				className: "hidden-match"
			}, "..."), "%")), o.a.createElement("p", null, r ? e.result_short_description : o.a.createElement(n.Fragment, null, e.result_short_description.split(/(?=\s)/gi).slice(0, 3).join(""), "...", o.a.createElement("span", {
				className: "hidden-score-explanation"
			}, "\u2026. \u2026\u2026\u2026\u2026. \u2026\u2026\u2026\u2026.. \u2026\u2026\u2026\u2026.. \u2026\u2026\u2026\u2026\u2026\u2026.. \u2026 .. . \u2026\u2026\u2026.. \u2026\u2026\u2026\u2026. \u2026\u2026\u2026\u2026\u2026\u2026.. \u2026\u2026\u2026\u2026\u2026. \u2026\u2026\u2026\u2026\u2026.. \u2026\u2026 \u2026\u2026\u2026 \u2026\u2026\u2026\u2026\u2026. \u2026\u2026 \u2026\u2026\u2026\u2026. \u2026\u2026\u2026\u2026.."))))
		}))), o.a.createElement("p", {
			className: "results__industry-tip"
		}, o.a.createElement("span", {
			className: "small-icons blue-off-tooltip"
		}), " Annual salary estimates are based on percentile wage data collected through the Occupational Employment Statistics (OES) survey of US workers. The projected growth rate of employment in the US from 2016 to 2026, based on data collected through the BLS. Employment Projections (EP) programme. The national average growth rate for all professions is 7%."), t && !e.user.career_matches_ready_at ? o.a.createElement("a", {
			href: "/dashboard",
			className: "results__access-link"
		}, "Keep testing to reveal your career matches ", o.a.createElement("span", {
			className: "small-icons next-arrow-green-s"
		})) : t ? void 0 : a && !t ? o.a.createElement("a", {
			href: "/upgrade",
			className: "results__access-link"
		}, "Purchase full access to reveal how you matched! ", o.a.createElement("span", {
			className: "small-icons next-arrow-green-s"
		})) : r ? o.a.createElement("a", {
			href: "/upgrade",
			className: "results__access-link"
		}, "Keep testing to reveal your career matches ", o.a.createElement("span", {
			className: "small-icons next-arrow-green-s"
		})) : o.a.createElement("a", {
			href: "/get-access",
			className: "results__access-link"
		}, "Get paid access to reveal full career insights ", o.a.createElement("span", {
			className: "small-icons next-arrow-green-s"
		})))
	}
}, function(e, t, r) {
	"use strict";

	function n(e) {
		var t = "very_strong";
		return e < 80 && e >= 60 ? t = "strong" : e < 60 && e >= 40 ? t = "moderate" : e < 40 && e >= 20 ? t = "weak" : e < 20 && (t = "very_weak"), t
	}
	r.r(t), r.d(t, "getRankingScore", (function() {
		return n
	}))
}, , , , , , function(e, t, r) {
	"use strict";
	var n = r(182);

	function o() {}

	function a() {}
	a.resetWarningCache = o, e.exports = function() {
		function e(e, t, r, o, a, i) {
			if (i !== n) {
				var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
				throw s.name = "Invariant Violation", s
			}
		}

		function t() {
			return e
		}
		e.isRequired = e;
		var r = {
			array: e,
			bool: e,
			func: e,
			number: e,
			object: e,
			string: e,
			symbol: e,
			any: e,
			arrayOf: t,
			element: e,
			elementType: e,
			instanceOf: t,
			node: e,
			objectOf: t,
			oneOf: t,
			oneOfType: t,
			shape: t,
			exact: t,
			checkPropTypes: a,
			resetWarningCache: o
		};
		return r.PropTypes = r, r
	}
}, function(e, t, r) {
	"use strict";
	e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, function(e, t) {
	function r() {}

	function n(e) {
		var t = e.annotation.elements;
		return Object.keys(t).map((function(e) {
			return t[e]
		}))
	}

	function o() {
		return Math.random().toString(36).substr(2, 6)
	}

	function a(e) {
		return null !== e && "undefined" !== typeof e && ("number" === typeof e ? isFinite(e) : !!e)
	}

	function i(e, t, r) {
		e["$" + t] || (e[t] ? (e["$" + t] = e[t].bind(e), e[t] = function() {
			var n = [e["$" + t]].concat(Array.prototype.slice.call(arguments));
			return r.apply(e, n)
		}) : e[t] = function() {
			var t = [void 0].concat(Array.prototype.slice.call(arguments));
			return r.apply(e, t)
		})
	}

	function s(e, t) {
		e.forEach((function(e) {
			(t ? e[t] : e)()
		}))
	}

	function c(e) {
		return "on" + e[0].toUpperCase() + e.substring(1)
	}

	function l(e, t) {
		try {
			return new MouseEvent(e, t)
		} catch (o) {
			try {
				var r = document.createEvent("MouseEvent");
				return r.initMouseEvent(e, t.canBubble, t.cancelable, t.view, t.detail, t.screenX, t.screenY, t.clientX, t.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, t.button, t.relatedTarget), r
			} catch (a) {
				var n = document.createEvent("Event");
				return n.initEvent(e, t.canBubble, t.cancelable), n
			}
		}
	}
	e.exports = function(e) {
		var t = e.helpers;
		return {
			initConfig: function(r) {
				return r = t.configMerge(e.Annotation.defaults, r), t.isArray(r.annotations) && r.annotations.forEach((function(r) {
					r.label = t.configMerge(e.Annotation.labelDefaults, r.label)
				})), r
			},
			elements: n,
			callEach: s,
			noop: r,
			objectId: o,
			isValid: a,
			decorate: i,
			adjustScaleRange: function(e) {
				var t, r, o, a, i, s = (t = e.id, r = n(e.chart), o = e.min, a = e.max, {
					min: (i = r.filter((function(e) {
						return !!e._model.ranges[t]
					})).map((function(e) {
						return e._model.ranges[t]
					}))).map((function(e) {
						return Number(e.min)
					})).reduce((function(e, t) {
						return isFinite(t) && !isNaN(t) && t < e ? t : e
					}), o),
					max: i.map((function(e) {
						return Number(e.max)
					})).reduce((function(e, t) {
						return isFinite(t) && !isNaN(t) && t > e ? t : e
					}), a)
				});
				"undefined" === typeof e.options.ticks.min && "undefined" === typeof e.options.ticks.suggestedMin && (e.min = s.min), "undefined" === typeof e.options.ticks.max && "undefined" === typeof e.options.ticks.suggestedMax && (e.max = s.max), e.handleTickRangeOptions && e.handleTickRangeOptions()
			},
			getNearestItems: function(e, r) {
				var n = Number.POSITIVE_INFINITY;
				return e.filter((function(e) {
					return e.inRange(r.x, r.y)
				})).reduce((function(e, o) {
					var a = o.getCenterPoint(),
						i = t.distanceBetweenPoints(r, a);
					return i < n ? (e = [o], n = i) : i === n && e.push(o), e
				}), []).sort((function(e, t) {
					var r = e.getArea(),
						n = t.getArea();
					return r > n || r < n ? r - n : e._index - t._index
				})).slice(0, 1)[0]
			},
			getEventHandlerName: c,
			createMouseEvent: l
		}
	}
}, , , , , , function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(218),
		o = r(124);
	r.d(t, "Handle", (function() {
		return o.default
	})), n.default.Handle = o.default, t.default = n.default
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(10),
		o = r(301),
		a = r(302),
		i = Object(n.c)({
			statementTest: o.default,
			aptitudeTest: a.default
		});
	t.default = i
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(10),
		i = r(2),
		s = r(53),
		c = r(158),
		l = r(303),
		u = r(305),
		f = r(157),
		p = r(125);

	function d(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function h(e, t) {
		return (h = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function m(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = y(e);
			if (t) {
				var o = y(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return v(this, r)
		}
	}

	function v(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function y(e) {
		return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var b = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && h(e, t)
		}(i, e);
		var t, r, n, a = m(i);

		function i(e) {
			var t;
			return function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, i), (t = a.call(this, e)).onTestBoxRef = function(e) {
				t.testBoxRef.current = e
			}, t.detectTestBoxSize = function() {
				setTimeout((function() {
					if (t.testBoxRef.current) {
						var e = t.testBoxRef.current.clientHeight;
						t.state.boxHeight !== e && t.setState({
							boxHeight: e
						})
					}
				}), 1)
			}, t.detectDevice = function() {
				t.setState({
					height: window.innerHeight
				});
				var e = window.innerWidth < 640;
				e !== t.state.isMobile && t.setState({
					isMobile: e
				})
			}, t.goToOverview = function() {
				t.props.actions.userGoToTestOverview()
			}, t.renderPage = function() {
				var e = t.props.statementTest.currentPage;
				switch (!0) {
					case 0 === e:
						return o.a.createElement(c.default, null);
					case e >= 1:
						return o.a.createElement(l.default, {
							currentPage: e,
							onRef: t.onTestBoxRef,
							test: {
								name: t.props.statementTest.test.name,
								code: t.props.statementTest.test.code
							},
							showSaveProgress: t.props.statementTest.showSaveProgress,
							statementPages: t.props.statementTest.userStatements,
							isNotUser: !t.props.statementTest.user
						});
					case "overview" === e:
						return o.a.createElement(u.default, {
							isMobile: t.state.isMobile
						});
					default:
						return o.a.createElement(c.default, null)
				}
			}, t.calculateDimensions = function() {
				return 0
			}, t.state = {
				isMobile: !1,
				height: 0,
				boxHeight: 0,
				ssrDone: !1
			}, t.instructionsArea = o.a.createRef(), t.testBoxRef = o.a.createRef(), t
		}
		return t = i, (r = [{
			key: "componentDidMount",
			value: function() {
				this.setState({
					ssrDone: !0
				})
			}
		}, {
			key: "componentDidUpdate",
			value: function(e, t, r) {}
		}, {
			key: "componentWillUnmount",
			value: function() {}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.props.statementTest.currentPage,
					r = 0 !== this.props.statementTest.currentPage && this.props.statementTest.showSaveProgress;
				return o.a.createElement("div", {
					className: "test-page-container"
				}, o.a.createElement("div", {
					className: "test-page test-page--statement"
				}, o.a.createElement("div", {
					className: "test-page__wrapper" + (0 !== this.calculateDimensions() ? " with-scrollbar" : "") + ("interests" === this.props.statementTest.test.code && 0 === t ? " for-ci-start-page" : " ") + (r ? " with-save-progress" : " "),
					style: {
						padding: this.calculateDimensions(),
						margin: 0 !== this.calculateDimensions() || !1 !== this.state.isMobile || r ? 0 : "30px 0"
					}
				}, o.a.createElement("div", {
					className: "test-page__wrapper__main " + (0 === t ? " for-start-main-page " : " ") + (r ? "" : " with-save")
				}, this.renderPage(), this.props.statementTest.test.code && 0 !== t ? o.a.createElement("div", {
					className: "test-btn-container flex-center"
				}, "overview" === t || 0 === t ? null : o.a.createElement("a", {
					className: "text-button",
					onClick: this.goToOverview
				}, "Overview"), "overview" === t ? null : o.a.createElement("a", {
					className: "text-button",
					onClick: function() {
						return e.instructionsArea.current.open()
					}
				}, "Instructions")) : null, r ? o.a.createElement(f.default, {
					capsule: !0,
					onLogin: this.props.actions.setUserTest
				}) : null)), o.a.createElement(p.default, {
					ref: this.instructionsArea,
					btnCloseTxt: "Back to test"
				}, o.a.createElement("div", {
					className: "slideout__instructions",
					dangerouslySetInnerHTML: {
						__html: this.props.statementTest.test.instructions
					}
				}))), 0 !== this.props.statementTest.currentPage && this.props.statementTest.showSaveProgress ? o.a.createElement(f.default, {
					capsule: !1,
					bgImage: this.props.statementTest.test.code,
					onLogin: this.props.actions.setUserTest
				}) : null)
			}
		}]) && d(t.prototype, r), n && d(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), i
	}(n.Component);
	t.default = Object(i.b)((function(e) {
		return {
			statementTest: e.statementTest
		}
	}), (function(e) {
		return {
			actions: Object(a.b)(Object.assign({}, s), e)
		}
	}))(b)
}, , , , , , , , , function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return u
	}));
	var n = r(0),
		o = r.n(n),
		a = r(275),
		i = r(276);

	function s(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function c(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? s(Object(r), !0).forEach((function(t) {
				l(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function l(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function u(e) {
		var t = e.user && "finished" === e.user.interests_status && "finished" === e.user.personality_status && "finished" === e.user.motivators_status && "finished" === e.user.abstract_status && "finished" === e.user.numerical_status && "finished" === e.user.verbal_status,
			r = e.user && e.user.full_access,
			n = {
				completed: t
			};
		if (e.careers) n.careers = e.careers;
		else {
			var s = e.options || {};
			n.options = t && !e.random ? c(c({}, s), {}, {
				page: 1,
				per_page: 4
			}) : c(c({}, s), {}, {
				random: 4
			})
		}
		return o.a.createElement("div", {
			className: "grid-x widget__cards widget-section"
		}, o.a.createElement("div", {
			className: "large-5 cell"
		}, o.a.createElement("h2", {
			className: "widget__spaced widget__spaced--cards"
		}, e.title || "Careers")), o.a.createElement("div", {
			className: "large-7 cell"
		}, o.a.createElement("div", {
			className: "widget__spaced widget__spaced--cards flex large-flex-end"
		}, t ? null : o.a.createElement("div", {
			className: "capsule capsule--status capsule--widget widget-right"
		}, o.a.createElement("span", {
			className: "small-icons white-tooltip-icon"
		}), o.a.createElement("span", {
			className: "capsule__status"
		}, o.a.createElement("a", {
			href: r ? "/dashboard" : "/upgrade",
			className: "capsule__link"
		}, "Get your career matches by completing all tests"))), o.a.createElement("a", {
			className: "button button--white hide-for-small-only",
			href: "/careers"
		}, "See all careers"))), o.a.createElement("div", {
			className: "small-12 cell"
		}, o.a.createElement("div", {
			className: "careers-slider careers-widget-slider is-overlapping"
		}, "similar" === e.type ? o.a.createElement(i.default, n) : o.a.createElement(a.default, n))), o.a.createElement("div", {
			className: "small-12 show-for-small-only mar-top-20"
		}, o.a.createElement("a", {
			className: "button button--white",
			href: "/careers"
		}, "See all careers")))
	}
}, , , , , , , , function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return m
	}));
	var n = r(0),
		o = r.n(n),
		a = r(38);

	function i(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function s(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function c(e, t) {
		return (c = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function l(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = f(e);
			if (t) {
				var o = f(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return u(this, r)
		}
	}

	function u(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function f(e) {
		return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var p = Object(a.d)((function() {
			return o.a.createElement("div", {
				className: "cell shrink"
			}, o.a.createElement("div", {
				className: "remove"
			}, o.a.createElement("span", {
				className: "small-icons drag-drop-icon"
			})))
		})),
		d = Object(a.b)((function(e) {
			var t = e.value;
			return o.a.createElement("div", {
				className: "test-statement"
			}, o.a.createElement("div", {
				className: "grid-x test-statement__select"
			}, o.a.createElement("div", {
				className: "cell auto test-statement__option test-statement__option--no-img"
			}, o.a.createElement("p", {
				className: "test-statement__option__text"
			}, t.content)), o.a.createElement(p, null)))
		})),
		h = Object(a.a)((function(e) {
			var t = e.items;
			return o.a.createElement("div", {
				className: "colored-ordered-list"
			}, t.map((function(e, t) {
				return o.a.createElement("div", {
					className: "colored-list-item",
					key: e.id
				}, o.a.createElement("span", {
					className: "item number-" + (e.order + 1)
				}, e.order + 1), o.a.createElement("div", {
					className: "grid-x grid-padding-x"
				}, o.a.createElement(d, {
					key: "item-".concat(e.id),
					index: t,
					value: e
				})))
			})))
		})),
		m = function(e) {
			! function(e, t) {
				if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), Object.defineProperty(e, "prototype", {
					writable: !1
				}), t && c(e, t)
			}(u, e);
			var t, r, n, a = l(u);

			function u() {
				var e;
				i(this, u);
				for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
				return (e = a.call.apply(a, [this].concat(r))).state = {
					isSmallMobile: !1
				}, e.detectDevice = function() {
					var t = window.innerWidth <= 375;
					t !== e.state.isSmallMobile && e.setState({
						isSmallMobile: t
					})
				}, e.updateBeforeSortStart = function() {
					document.body.classList.add("not-selectable")
				}, e.onSortEnd = function(t) {
					var r = t.oldIndex,
						n = t.newIndex;
					document.body.classList.remove("not-selectable"), e.props.sortItems(r, n)
				}, e
			}
			return t = u, (r = [{
				key: "componentDidMount",
				value: function() {
					this.detectDevice(), window.addEventListener("resize", this.detectDevice)
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					window.removeEventListener("resize", this.detectDevice)
				}
			}, {
				key: "render",
				value: function() {
					return o.a.createElement(h, {
						helperClass: "active-sort",
						items: this.props.items,
						updateBeforeSortStart: this.updateBeforeSortStart,
						onSortEnd: this.onSortEnd,
						useDragHandle: !1
					})
				}
			}]) && s(t.prototype, r), n && s(t, n), Object.defineProperty(t, "prototype", {
				writable: !1
			}), u
		}(n.Component)
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(16);
	t.default = function(e) {
		return o.a.createElement("div", {
			className: "grid-x"
		}, o.a.createElement("div", {
			className: "cell"
		}, o.a.createElement("div", {
			className: "large-icon ".concat(e.code, "-blue-large")
		}), o.a.createElement("h3", {
			className: "popup__title"
		}, 1 === e.retakes ? "".concat(e.retakes, " retake remaining") : e.retakes > 1 ? "".concat(e.retakes, " retakes remaining") : "Retakes limit reached"), o.a.createElement("p", {
			className: "retake-popup__text"
		}, e.retakes > 0 ? "Are you sure you want to retake the ".concat(e.name, " test?") : "To retake this test need to buy more retakes"), o.a.createElement("p", {
			className: "retake-popup__desc"
		}, "Note that in doing so, you will erase your existing test results.")), o.a.createElement("div", {
			className: "cell mar-top-20"
		}, e.retakes > 0 ? o.a.createElement(a.default, {
			onClick: e.onConfirm,
			"data-open": "saved",
			className: "button--green--large"
		}, "Retake test ", o.a.createElement("span", {
			className: "small-icons next-arrow-white-l"
		})) : o.a.createElement(a.default, {
			onClick: function() {
				document.location.href = "/checkout/retakes?test=".concat(e.code)
			},
			"data-open": "saved",
			className: "button--green--large"
		}, "Get More Retakes")), o.a.createElement("div", {
			className: "cell"
		}, o.a.createElement("p", {
			className: "retake-popup__info"
		}, o.a.createElement("span", {
			className: "small-icons blue-off-tooltip"
		}), "You can purchase additional retakes from our ", o.a.createElement("a", {
			href: "/get-access"
		}, "Get Access"), " page at any point.")))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(16);
	t.default = function(e) {
		return o.a.createElement("div", {
			className: "grid-x confirmation-content"
		}, o.a.createElement("div", {
			className: "cell"
		}, o.a.createElement("div", {
			className: "large-icon unanswered-questions mar-auto"
		}), o.a.createElement("h3", {
			className: "popup__title"
		}, "You haven\u2019t answered all the questions!"), o.a.createElement("p", {
			className: "popup__text"
		}, "Submitting your answers now can affect your overall result. Are you sure you want to finish the test?")), o.a.createElement("div", {
			className: "cell mar-top-20"
		}, o.a.createElement(a.default, {
			onClick: e.onCancel,
			color: "blue-off",
			className: "button--bigger mar-right-10",
			"data-open": "saved"
		}, "No, take me back"), o.a.createElement(a.default, {
			onClick: e.onConfirm,
			className: "button--bigger",
			"data-open": "saved"
		}, "Yes, I\u2019m done", o.a.createElement("span", {
			className: "small-icons next-arrow-white-l"
		}))))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t);
	r(0);
	var n = r(200);
	t.default = n.default
}, , function(e, t, r) {
	e.exports = r.p + "media/images/rate-poor-7873614c.png"
}, function(e, t, r) {
	e.exports = r.p + "media/images/rate-average-2f332436.png"
}, function(e, t, r) {
	e.exports = r.p + "media/images/rate-great-c7deb5ef.png"
}, , , function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(104),
		i = r.n(a),
		s = r(219),
		c = r(296),
		l = r(23);

	function u(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function f(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? u(Object(r), !0).forEach((function(t) {
				p(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function p(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function d(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function h(e, t) {
		return (h = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function m(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = y(e);
			if (t) {
				var o = y(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return v(this, r)
		}
	}

	function v(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function y(e) {
		return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var b = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && h(e, t)
		}(c, e);
		var t, r, n, a = m(c);

		function c(e) {
			var t;
			! function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, c), (t = a.call(this, e)).onEnd = function(e) {
				var r = t.state.dragging;
				t.removeDocumentEvents(), (r || e) && t.props.onAfterChange(t.getValue()), t.setState({
					dragging: !1
				})
			};
			var r = void 0 !== e.defaultValue ? e.defaultValue : e.min,
				n = void 0 !== e.value ? e.value : r,
				o = void 0 !== e.activeValue ? e.activeValue : r;
			return t.state = {
				value: t.trimAlignValue(n),
				activeValue: t.trimAlignValue(o),
				dragging: !1
			}, i()(!("minimumTrackStyle" in e), "minimumTrackStyle will be deprecated, please use trackStyle instead."), i()(!("maximumTrackStyle" in e), "maximumTrackStyle will be deprecated, please use railStyle instead."), t
		}
		return t = c, (r = [{
			key: "componentDidUpdate",
			value: function(e, t) {
				if ("value" in this.props || "min" in this.props || "max" in this.props) {
					var r = this.props,
						n = r.value,
						o = r.onChange,
						a = void 0 !== n ? n : t.value,
						i = this.trimAlignValue(a, this.props);
					i !== t.value && (this.setState({
						value: i
					}), l.isValueOutOfRange(a, this.props) && o(i))
				}
			}
		}, {
			key: "onChange",
			value: function(e) {
				var t = this.props,
					r = !("value" in t),
					n = e.value > this.props.max ? f(f({}, e), {}, {
						value: this.props.max
					}) : e;
				r && this.setState(n);
				var o = n.value;
				t.onChange(o)
			}
		}, {
			key: "onStart",
			value: function(e) {
				this.setState({
					dragging: !0
				});
				var t = this.props,
					r = this.getValue();
				t.onBeforeChange(r);
				var n = this.calcValueByPos(e);
				this.startValue = n, this.startPosition = e, n !== r && (this.prevMovedHandleIndex = 0, this.onChange({
					value: n
				}))
			}
		}, {
			key: "onMove",
			value: function(e, t) {
				l.pauseEvent(e);
				var r = this.state.value,
					n = this.calcValueByPos(t);
				n !== r && this.onChange({
					value: n
				})
			}
		}, {
			key: "onKeyboard",
			value: function(e) {
				var t = this.props,
					r = t.reverse,
					n = t.vertical,
					o = l.getKeyboardValueMutator(e, n, r);
				if (o) {
					l.pauseEvent(e);
					var a = this.state.value,
						i = o(a, this.props),
						s = this.trimAlignValue(i);
					if (s === a) return;
					this.onChange({
						value: s
					}), this.props.onAfterChange(s), this.onEnd()
				}
			}
		}, {
			key: "getValue",
			value: function() {
				return this.state.value
			}
		}, {
			key: "getLowerBound",
			value: function() {
				return this.props.min
			}
		}, {
			key: "getUpperBound",
			value: function() {
				return this.state.value
			}
		}, {
			key: "trimAlignValue",
			value: function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				if (null === e) return null;
				var r = f(f({}, this.props), t),
					n = l.ensureValueInRange(e, r);
				return l.ensureValuePrecision(n, r)
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.props,
					r = t.prefixCls,
					n = t.vertical,
					a = t.included,
					i = t.disabled,
					c = t.minimumTrackStyle,
					l = t.trackStyle,
					u = t.handleStyle,
					p = t.tabIndex,
					d = t.ariaLabelForHandle,
					h = t.ariaLabelledByForHandle,
					m = t.ariaValueTextFormatterForHandle,
					v = t.min,
					y = t.max,
					b = t.reverse,
					g = t.handle,
					w = this.state,
					E = w.value,
					_ = w.activeValue,
					O = w.dragging,
					S = this.calcOffset(E),
					T = this.calcOffset(_),
					j = g({
						className: "".concat(r, "-handle"),
						prefixCls: r,
						vertical: n,
						offset: S,
						value: E,
						dragging: O,
						disabled: i,
						min: v,
						max: y,
						reverse: b,
						index: 0,
						tabIndex: p,
						ariaLabel: d,
						ariaLabelledBy: h,
						ariaValueTextFormatter: m,
						style: u[0] || u,
						ref: function(t) {
							return e.saveHandle(0, t)
						}
					}),
					x = l[0] || l;
				return {
					tracks: [o.a.createElement(s.default, {
						key: 1,
						className: "".concat(r, "-track"),
						vertical: n,
						included: a,
						offset: 0,
						reverse: b,
						length: S,
						style: f(f({}, c), x)
					}), o.a.createElement(s.default, {
						key: 2,
						className: "".concat(r, "-track ").concat(r, "-track--active"),
						vertical: n,
						included: a,
						offset: 0,
						reverse: b,
						length: T,
						style: f(f({}, c), x)
					})],
					handles: j
				}
			}
		}]) && d(t.prototype, r), n && d(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), c
	}(o.a.Component);
	t.default = Object(c.default)(b)
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n);

	function a(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function i(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? a(Object(r), !0).forEach((function(t) {
				s(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function s(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}
	t.default = function(e) {
		var t, r, n = e.className,
			a = e.included,
			c = e.vertical,
			l = e.offset,
			u = e.length,
			f = e.style,
			p = e.reverse,
			d = c ? (s(t = {}, p ? "top" : "bottom", "".concat(l, "%")), s(t, p ? "bottom" : "top", "auto"), s(t, "height", "".concat(u, "%")), t) : (s(r = {}, p ? "right" : "left", "".concat(l, "%")), s(r, p ? "left" : "right", "auto"), s(r, "width", "".concat(u, "%")), r),
			h = i(i({}, f), d);
		return a ? o.a.createElement("div", {
			className: n,
			style: h
		}) : null
	}
}, function(e, t, r) {
	"use strict";
	r.r(t);
	r(0);
	var n = r(134);
	t.default = n.default
}, , , , , , function(e, t) {
	e.exports = {
		isFunction: function(e) {
			return "function" === typeof e
		},
		isArray: function(e) {
			return "[object Array]" === Object.prototype.toString.apply(e)
		},
		each: function(e, t) {
			for (var r = 0, n = e.length; r < n && !1 !== t(e[r], r); r++);
		}
	}
}, , function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return a
	}));
	var n = r(0),
		o = r.n(n);

	function a() {
		return o.a.createElement("div", {
			className: "side-box__inner"
		}, o.a.createElement("h3", null, "Successfully logged in!"))
	}
}, , , , , , , , function(e, t, r) {
	var n;
	e.exports = (n = r(0), function(e) {
		function t(n) {
			if (r[n]) return r[n].exports;
			var o = r[n] = {
				exports: {},
				id: n,
				loaded: !1
			};
			return e[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
		}
		var r = {};
		return t.m = e, t.c = r, t.p = "", t(0)
	}([function(e, t, r) {
		e.exports = r(4)
	}, function(e, t, r) {
		e.exports = r(6)()
	}, function(e, t) {
		e.exports = n
	}, function(e, t) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function(e, t) {
			return decodeURIComponent(e.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(t).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"))
		}
	}, function(e, t, r) {
		"use strict";

		function n(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function a(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = arguments[t];
					for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
				}
				return e
			},
			s = function() {
				function e(e, t) {
					for (var r = 0; r < t.length; r++) {
						var n = t[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
					}
				}
				return function(t, r, n) {
					return r && e(t.prototype, r), n && e(t, n), t
				}
			}(),
			c = n(r(2)),
			l = n(r(1)),
			u = n(r(5)),
			f = n(r(3)),
			p = function(e) {
				function t() {
					var e, r, n;
					o(this, t);
					for (var s = arguments.length, c = Array(s), l = 0; l < s; l++) c[l] = arguments[l];
					return r = n = a(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(c))), n.state = {
						isSdkLoaded: !1,
						isProcessing: !1
					}, n.responseApi = function(e) {
						window.FB.api("/me", {
							locale: n.props.language,
							fields: n.props.fields
						}, (function(t) {
							i(t, e), n.props.callback(t)
						}))
					}, n.checkLoginState = function(e) {
						n.setStateIfMounted({
							isProcessing: !1
						}), e.authResponse ? n.responseApi(e.authResponse) : n.props.onFailure ? n.props.onFailure({
							status: e.status
						}) : n.props.callback({
							status: e.status
						})
					}, n.checkLoginAfterRefresh = function(e) {
						"connected" === e.status ? n.checkLoginState(e) : window.FB.login((function(e) {
							return n.checkLoginState(e)
						}), !0)
					}, n.click = function(e) {
						if (n.state.isSdkLoaded && !n.state.isProcessing && !n.props.isDisabled) {
							n.setState({
								isProcessing: !0
							});
							var t = n.props,
								r = t.scope,
								o = t.appId,
								a = t.onClick,
								i = t.returnScopes,
								s = t.responseType,
								c = t.redirectUri,
								l = t.disableMobileRedirect,
								f = t.authType,
								p = t.state;
							if ("function" != typeof a || (a(e), !e.defaultPrevented)) {
								var d = {
									client_id: o,
									redirect_uri: c,
									state: p,
									return_scopes: i,
									scope: r,
									response_type: s,
									auth_type: f
								};
								if (n.props.isMobile && !l) window.location.href = "https://www.facebook.com/dialog/oauth" + (0, u.default)(d);
								else {
									if (!window.FB) return void(n.props.onFailure && n.props.onFailure({
										status: "facebookNotLoaded"
									}));
									window.FB.login(n.checkLoginState, {
										scope: r,
										return_scopes: i,
										auth_type: d.auth_type
									})
								}
							}
						}
					}, a(n, r)
				}
				return function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}(t, e), s(t, [{
					key: "componentDidMount",
					value: function() {
						if (this._isMounted = !0, document.getElementById("facebook-jssdk")) this.sdkLoaded();
						else {
							this.setFbAsyncInit(), this.loadSdkAsynchronously();
							var e = document.getElementById("fb-root");
							e || ((e = document.createElement("div")).id = "fb-root", document.body.appendChild(e))
						}
					}
				}, {
					key: "componentWillReceiveProps",
					value: function(e) {
						this.state.isSdkLoaded && e.autoLoad && !this.props.autoLoad && window.FB.getLoginStatus(this.checkLoginAfterRefresh)
					}
				}, {
					key: "componentWillUnmount",
					value: function() {
						this._isMounted = !1
					}
				}, {
					key: "setStateIfMounted",
					value: function(e) {
						this._isMounted && this.setState(e)
					}
				}, {
					key: "setFbAsyncInit",
					value: function() {
						var e = this,
							t = this.props,
							r = t.appId,
							n = t.xfbml,
							o = t.cookie,
							a = t.version,
							i = t.autoLoad;
						window.fbAsyncInit = function() {
							window.FB.init({
								version: "v" + a,
								appId: r,
								xfbml: n,
								cookie: o
							}), e.setStateIfMounted({
								isSdkLoaded: !0
							}), (i || e.isRedirectedFromFb()) && window.FB.getLoginStatus(e.checkLoginAfterRefresh)
						}
					}
				}, {
					key: "isRedirectedFromFb",
					value: function() {
						var e = window.location.search;
						return (0, f.default)(e, "code") || (0, f.default)(e, "granted_scopes")
					}
				}, {
					key: "sdkLoaded",
					value: function() {
						this.setState({
							isSdkLoaded: !0
						})
					}
				}, {
					key: "loadSdkAsynchronously",
					value: function() {
						var e = this.props.language;
						! function(t, r, n) {
							var o = t.getElementsByTagName(r)[0],
								a = o,
								i = o;
							t.getElementById(n) || ((i = t.createElement(r)).id = n, i.src = "https://connect.facebook.net/" + e + "/sdk.js", a.parentNode.insertBefore(i, a))
						}(document, "script", "facebook-jssdk")
					}
				}, {
					key: "render",
					value: function() {
						var e = this.props.render;
						if (!e) throw new Error("ReactFacebookLogin requires a render prop to render");
						var t = {
							onClick: this.click,
							isDisabled: !!this.props.isDisabled,
							isProcessing: this.state.isProcessing,
							isSdkLoaded: this.state.isSdkLoaded
						};
						return this.props.render(t)
					}
				}]), t
			}(c.default.Component);
		p.propTypes = {
			isDisabled: l.default.bool,
			callback: l.default.func.isRequired,
			appId: l.default.string.isRequired,
			xfbml: l.default.bool,
			cookie: l.default.bool,
			authType: l.default.string,
			scope: l.default.string,
			state: l.default.string,
			responseType: l.default.string,
			returnScopes: l.default.bool,
			redirectUri: l.default.string,
			autoLoad: l.default.bool,
			disableMobileRedirect: l.default.bool,
			isMobile: l.default.bool,
			fields: l.default.string,
			version: l.default.string,
			language: l.default.string,
			onClick: l.default.func,
			onFailure: l.default.func,
			render: l.default.func.isRequired
		}, p.defaultProps = {
			redirectUri: "undefined" != typeof window ? window.location.href : "/",
			scope: "public_profile,email",
			returnScopes: !1,
			xfbml: !1,
			cookie: !1,
			authType: "",
			fields: "name",
			version: "2.3",
			language: "en_US",
			disableMobileRedirect: !1,
			isMobile: function() {
				var e = !1;
				try {
					e = !!(window.navigator && window.navigator.standalone || navigator.userAgent.match("CriOS") || navigator.userAgent.match(/mobile/i))
				} catch (t) {}
				return e
			}(),
			onFailure: null,
			state: "facebookdirect",
			responseType: "code"
		}, t.default = p
	}, function(e, t) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function(e) {
			return "?" + Object.keys(e).map((function(t) {
				return t + "=" + encodeURIComponent(e[t])
			})).join("&")
		}
	}, function(e, t, r) {
		"use strict";

		function n() {}
		var o = r(7);
		e.exports = function() {
			function e(e, t, r, n, a, i) {
				if (i !== o) {
					var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
					throw s.name = "Invariant Violation", s
				}
			}

			function t() {
				return e
			}
			e.isRequired = e;
			var r = {
				array: e,
				bool: e,
				func: e,
				number: e,
				object: e,
				string: e,
				symbol: e,
				any: e,
				arrayOf: t,
				element: e,
				instanceOf: t,
				node: e,
				objectOf: t,
				oneOf: t,
				oneOfType: t,
				shape: t,
				exact: t
			};
			return r.checkPropTypes = n, r.PropTypes = r, r
		}
	}, function(e, t) {
		"use strict";
		e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
	}]))
}, function(e, t, r) {
	"undefined" != typeof self && self, e.exports = function(e) {
		return n = {}, t.m = r = [function(t) {
			t.exports = e
		}, function(e, t, r) {
			e.exports = r(2)()
		}, function(e, t, r) {
			"use strict";

			function n() {}

			function o() {}
			var a = r(3);
			o.resetWarningCache = n, e.exports = function() {
				function e(e, t, r, n, o, i) {
					if (i !== a) {
						var s = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw s.name = "Invariant Violation", s
					}
				}

				function t() {
					return e
				}
				var r = {
					array: e.isRequired = e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: t,
					element: e,
					elementType: e,
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t,
					checkPropTypes: o,
					resetWarningCache: n
				};
				return r.PropTypes = r
			}
		}, function(e) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		}, function(e, t, r) {
			"use strict";

			function n(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
						var r = [],
							n = !0,
							o = !1,
							a = void 0;
						try {
							for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
						} catch (e) {
							o = !0, a = e
						} finally {
							try {
								n || null == s.return || s.return()
							} finally {
								if (o) throw a
							}
						}
						return r
					}
				}(e, t) || function(e, t) {
					if (e) {
						if ("string" == typeof e) return o(e, t);
						var r = Object.prototype.toString.call(e).slice(8, -1);
						return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? o(e, t) : void 0
					}
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function o(e, t) {
				null != t && t <= e.length || (t = e.length);
				for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
				return n
			}

			function a(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
						var r = [],
							n = !0,
							o = !1,
							a = void 0;
						try {
							for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
						} catch (e) {
							o = !0, a = e
						} finally {
							try {
								n || null == s.return || s.return()
							} finally {
								if (o) throw a
							}
						}
						return r
					}
				}(e, t) || function(e, t) {
					if (e) {
						if ("string" == typeof e) return i(e, t);
						var r = Object.prototype.toString.call(e).slice(8, -1);
						return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? i(e, t) : void 0
					}
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function i(e, t) {
				null != t && t <= e.length || (t = e.length);
				for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
				return n
			}

			function s(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
						var r = [],
							n = !0,
							o = !1,
							a = void 0;
						try {
							for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
						} catch (e) {
							o = !0, a = e
						} finally {
							try {
								n || null == s.return || s.return()
							} finally {
								if (o) throw a
							}
						}
						return r
					}
				}(e, t) || function(e, t) {
					if (e) {
						if ("string" == typeof e) return c(e, t);
						var r = Object.prototype.toString.call(e).slice(8, -1);
						return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? c(e, t) : void 0
					}
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function c(e, t) {
				null != t && t <= e.length || (t = e.length);
				for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
				return n
			}

			function l(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
						var r = [],
							n = !0,
							o = !1,
							a = void 0;
						try {
							for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
						} catch (e) {
							o = !0, a = e
						} finally {
							try {
								n || null == s.return || s.return()
							} finally {
								if (o) throw a
							}
						}
						return r
					}
				}(e, t) || function(e, t) {
					if (e) {
						if ("string" == typeof e) return u(e, t);
						var r = Object.prototype.toString.call(e).slice(8, -1);
						return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? u(e, t) : void 0
					}
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function u(e, t) {
				null != t && t <= e.length || (t = e.length);
				for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
				return n
			}

			function f(e, t, r, n, o, a) {
				var i = e.getElementsByTagName(t)[0],
					s = i,
					c = i;
				(c = e.createElement(t)).id = r, c.src = n, s && s.parentNode ? s.parentNode.insertBefore(c, s) : e.head.appendChild(c), c.onerror = a, c.onload = o
			}

			function p(e, t) {
				var r = e.getElementById(t);
				r && r.parentNode.removeChild(r)
			}

			function d(e) {
				return y.a.createElement("span", {
					style: {
						paddingRight: 10,
						fontWeight: 500,
						paddingLeft: e.icon ? 0 : 10,
						paddingTop: 10,
						paddingBottom: 10
					}
				}, e.children)
			}

			function h(e) {
				return y.a.createElement("div", {
					style: {
						marginRight: 10,
						background: e.active ? "#eee" : "#fff",
						padding: 10,
						borderRadius: 2
					}
				}, y.a.createElement("svg", {
					width: "18",
					height: "18",
					xmlns: "http://www.w3.org/2000/svg"
				}, y.a.createElement("g", {
					fill: "#000",
					fillRule: "evenodd"
				}, y.a.createElement("path", {
					d: "M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z",
					fill: "#EA4335"
				}), y.a.createElement("path", {
					d: "M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z",
					fill: "#4285F4"
				}), y.a.createElement("path", {
					d: "M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z",
					fill: "#FBBC05"
				}), y.a.createElement("path", {
					d: "M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z",
					fill: "#34A853"
				}), y.a.createElement("path", {
					fill: "none",
					d: "M0 0h18v18H0z"
				}))))
			}

			function m(e) {
				var t = a(Object(v.useState)(!1), 2),
					r = t[0],
					n = t[1],
					o = a(Object(v.useState)(!1), 2),
					i = o[0],
					s = o[1],
					c = e.tag,
					l = e.type,
					u = e.className,
					f = e.disabledStyle,
					p = e.buttonText,
					m = e.children,
					g = e.render,
					w = e.theme,
					E = e.icon,
					_ = e.disabled,
					O = b({
						onSuccess: e.onSuccess,
						onAutoLoadFinished: e.onAutoLoadFinished,
						onRequest: e.onRequest,
						onFailure: e.onFailure,
						onScriptLoadFailure: e.onScriptLoadFailure,
						clientId: e.clientId,
						cookiePolicy: e.cookiePolicy,
						loginHint: e.loginHint,
						hostedDomain: e.hostedDomain,
						autoLoad: e.autoLoad,
						isSignedIn: e.isSignedIn,
						fetchBasicProfile: e.fetchBasicProfile,
						redirectUri: e.redirectUri,
						discoveryDocs: e.discoveryDocs,
						uxMode: e.uxMode,
						scope: e.scope,
						accessType: e.accessType,
						responseType: e.responseType,
						jsSrc: e.jsSrc,
						prompt: e.prompt
					}),
					S = O.signIn,
					T = _ || !O.loaded;
				if (g) return g({
					onClick: S,
					disabled: T
				});
				var j = {
						backgroundColor: "dark" === w ? "rgb(66, 133, 244)" : "#fff",
						display: "inline-flex",
						alignItems: "center",
						color: "dark" === w ? "#fff" : "rgba(0, 0, 0, .54)",
						boxShadow: "0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",
						padding: 0,
						borderRadius: 2,
						border: "1px solid transparent",
						fontSize: 14,
						fontWeight: "500",
						fontFamily: "Roboto, sans-serif"
					},
					x = {
						cursor: "pointer",
						backgroundColor: "dark" === w ? "#3367D6" : "#eee",
						color: "dark" === w ? "#fff" : "rgba(0, 0, 0, .54)",
						opacity: 1
					},
					P = T ? Object.assign({}, j, f) : i ? Object.assign({}, j, x) : r ? Object.assign({}, j, {
						cursor: "pointer",
						opacity: .9
					}) : j;
				return y.a.createElement(c, {
					onMouseEnter: function() {
						return n(!0)
					},
					onMouseLeave: function() {
						n(!1), s(!1)
					},
					onMouseDown: function() {
						return s(!0)
					},
					onMouseUp: function() {
						return s(!1)
					},
					onClick: S,
					style: P,
					type: l,
					disabled: T,
					className: u
				}, [E && y.a.createElement(h, {
					key: 1,
					active: i
				}), y.a.createElement(d, {
					icon: E,
					key: 2
				}, m || p)])
			}
			r.r(t), r.d(t, "default", (function() {
				return w
			})), r.d(t, "GoogleLogin", (function() {
				return w
			})), r.d(t, "GoogleLogout", (function() {
				return _
			})), r.d(t, "useGoogleLogin", (function() {
				return b
			})), r.d(t, "useGoogleLogout", (function() {
				return E
			}));
			var v = r(0),
				y = r.n(v),
				b = (r(1), function(e) {
					function t(e) {
						var t = e.getBasicProfile(),
							r = e.getAuthResponse(!0);
						e.googleId = t.getId(), e.tokenObj = r, e.tokenId = r.id_token, e.accessToken = r.access_token, e.profileObj = {
							googleId: t.getId(),
							imageUrl: t.getImageUrl(),
							email: t.getEmail(),
							name: t.getName(),
							givenName: t.getGivenName(),
							familyName: t.getFamilyName()
						}, a(e)
					}

					function r(e) {
						if (e && e.preventDefault(), L) {
							var r = window.gapi.auth2.getAuthInstance(),
								n = {
									prompt: R
								};
							d(), "code" === P ? r.grantOfflineAccess(n).then((function(e) {
								return a(e)
							}), (function(e) {
								return l(e)
							})) : r.signIn(n).then((function(e) {
								return t(e)
							}), (function(e) {
								return l(e)
							}))
						}
					}
					var o = e.onSuccess,
						a = void 0 === o ? function() {} : o,
						i = e.onAutoLoadFinished,
						s = void 0 === i ? function() {} : i,
						c = e.onFailure,
						l = void 0 === c ? function() {} : c,
						u = e.onRequest,
						d = void 0 === u ? function() {} : u,
						h = e.onScriptLoadFailure,
						m = e.clientId,
						y = e.cookiePolicy,
						b = e.loginHint,
						g = e.hostedDomain,
						w = e.autoLoad,
						E = e.isSignedIn,
						_ = e.fetchBasicProfile,
						O = e.redirectUri,
						S = e.discoveryDocs,
						T = e.uxMode,
						j = e.scope,
						x = e.accessType,
						P = e.responseType,
						k = e.jsSrc,
						N = void 0 === k ? "https://apis.google.com/js/api.js" : k,
						R = e.prompt,
						C = n(Object(v.useState)(!1), 2),
						L = C[0],
						A = C[1];
					return Object(v.useEffect)((function() {
						var e = !1,
							r = h || l;
						return f(document, "script", "google-login", N, (function() {
								var n = {
									client_id: m,
									cookie_policy: y,
									login_hint: b,
									hosted_domain: g,
									fetch_basic_profile: _,
									discoveryDocs: S,
									ux_mode: T,
									redirect_uri: O,
									scope: j,
									access_type: x
								};
								"code" === P && (n.access_type = "offline"), window.gapi.load("auth2", (function() {
									var o = window.gapi.auth2.getAuthInstance();
									o ? o.then((function() {
										e || (E && o.isSignedIn.get() ? (A(!0), s(!0), t(o.currentUser.get())) : (A(!0), s(!1)))
									}), (function(e) {
										l(e)
									})) : window.gapi.auth2.init(n).then((function(r) {
										if (!e) {
											A(!0);
											var n = E && r.isSignedIn.get();
											s(n), n && t(r.currentUser.get())
										}
									}), (function(e) {
										A(!0), s(!1), r(e)
									}))
								}))
							}), (function(e) {
								r(e)
							})),
							function() {
								e = !0, p(document, "google-login")
							}
					}), []), Object(v.useEffect)((function() {
						w && r()
					}), [L]), {
						signIn: r,
						loaded: L
					}
				});

			function g(e) {
				var t = l(Object(v.useState)(!1), 2),
					r = t[0],
					n = t[1],
					o = l(Object(v.useState)(!1), 2),
					a = o[0],
					i = o[1],
					s = e.tag,
					c = e.type,
					u = e.className,
					f = e.disabledStyle,
					p = e.buttonText,
					m = e.children,
					b = e.render,
					g = e.theme,
					w = e.icon,
					_ = e.disabled,
					O = E({
						jsSrc: e.jsSrc,
						onFailure: e.onFailure,
						onScriptLoadFailure: e.onScriptLoadFailure,
						clientId: e.clientId,
						cookiePolicy: e.cookiePolicy,
						loginHint: e.loginHint,
						hostedDomain: e.hostedDomain,
						fetchBasicProfile: e.fetchBasicProfile,
						discoveryDocs: e.discoveryDocs,
						uxMode: e.uxMode,
						redirectUri: e.redirectUri,
						scope: e.scope,
						accessType: e.accessType,
						onLogoutSuccess: e.onLogoutSuccess
					}),
					S = O.signOut,
					T = _ || !O.loaded;
				if (b) return b({
					onClick: S,
					disabled: T
				});
				var j = {
						backgroundColor: "dark" === g ? "rgb(66, 133, 244)" : "#fff",
						display: "inline-flex",
						alignItems: "center",
						color: "dark" === g ? "#fff" : "rgba(0, 0, 0, .54)",
						boxShadow: "0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",
						padding: 0,
						borderRadius: 2,
						border: "1px solid transparent",
						fontSize: 14,
						fontWeight: "500",
						fontFamily: "Roboto, sans-serif"
					},
					x = {
						cursor: "pointer",
						backgroundColor: "dark" === g ? "#3367D6" : "#eee",
						color: "dark" === g ? "#fff" : "rgba(0, 0, 0, .54)",
						opacity: 1
					},
					P = T ? Object.assign({}, j, f) : a ? Object.assign({}, j, x) : r ? Object.assign({}, j, {
						cursor: "pointer",
						opacity: .9
					}) : j;
				return y.a.createElement(s, {
					onMouseEnter: function() {
						return n(!0)
					},
					onMouseLeave: function() {
						n(!1), i(!1)
					},
					onMouseDown: function() {
						return i(!0)
					},
					onMouseUp: function() {
						return i(!1)
					},
					onClick: S,
					style: P,
					type: c,
					disabled: T,
					className: u
				}, [w && y.a.createElement(h, {
					key: 1,
					active: a
				}), y.a.createElement(d, {
					icon: w,
					key: 2
				}, m || p)])
			}
			m.defaultProps = {
				type: "button",
				tag: "button",
				buttonText: "Sign in with Google",
				scope: "profile email",
				accessType: "online",
				prompt: "",
				cookiePolicy: "single_host_origin",
				fetchBasicProfile: !0,
				isSignedIn: !1,
				uxMode: "popup",
				disabledStyle: {
					opacity: .6
				},
				icon: !0,
				theme: "light",
				onRequest: function() {}
			};
			var w = m,
				E = function(e) {
					var t = e.jsSrc,
						r = void 0 === t ? "https://apis.google.com/js/api.js" : t,
						n = e.onFailure,
						o = e.onScriptLoadFailure,
						a = e.clientId,
						i = e.cookiePolicy,
						c = e.loginHint,
						l = e.hostedDomain,
						u = e.fetchBasicProfile,
						d = e.discoveryDocs,
						h = e.uxMode,
						m = e.redirectUri,
						y = e.scope,
						b = e.accessType,
						g = e.onLogoutSuccess,
						w = s(Object(v.useState)(!1), 2),
						E = w[0],
						_ = w[1],
						O = Object(v.useCallback)((function() {
							if (window.gapi) {
								var e = window.gapi.auth2.getAuthInstance();
								null != e && e.then((function() {
									e.signOut().then((function() {
										e.disconnect(), g()
									}))
								}), (function(e) {
									return n(e)
								}))
							}
						}), [g]);
					return Object(v.useEffect)((function() {
						var e = o || n;
						return f(document, "script", "google-login", r, (function() {
								var t = {
									client_id: a,
									cookie_policy: i,
									login_hint: c,
									hosted_domain: l,
									fetch_basic_profile: u,
									discoveryDocs: d,
									ux_mode: h,
									redirect_uri: m,
									scope: y,
									access_type: b
								};
								window.gapi.load("auth2", (function() {
									window.gapi.auth2.getAuthInstance() ? _(!0) : window.gapi.auth2.init(t).then((function() {
										return _(!0)
									}), (function(t) {
										return e(t)
									}))
								}))
							}), (function(t) {
								e(t)
							})),
							function() {
								p(document, "google-login")
							}
					}), []), {
						signOut: O,
						loaded: E
					}
				};
			g.defaultProps = {
				type: "button",
				tag: "button",
				buttonText: "Logout of Google",
				disabledStyle: {
					opacity: .6
				},
				icon: !0,
				theme: "light",
				jsSrc: "https://apis.google.com/js/api.js"
			};
			var _ = g
		}], t.c = n, t.d = function(e, r, n) {
			t.o(e, r) || Object.defineProperty(e, r, {
				enumerable: !0,
				get: n
			})
		}, t.r = function(e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(e, "__esModule", {
				value: !0
			})
		}, t.t = function(e, r) {
			if (1 & r && (e = t(e)), 8 & r) return e;
			if (4 & r && "object" == typeof e && e && e.__esModule) return e;
			var n = Object.create(null);
			if (t.r(n), Object.defineProperty(n, "default", {
					enumerable: !0,
					value: e
				}), 2 & r && "string" != typeof e)
				for (var o in e) t.d(n, o, function(t) {
					return e[t]
				}.bind(null, o));
			return n
		}, t.n = function(e) {
			var r = e && e.__esModule ? function() {
				return e.default
			} : function() {
				return e
			};
			return t.d(r, "a", r), r
		}, t.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, t.p = "", t(t.s = 4);

		function t(e) {
			if (n[e]) return n[e].exports;
			var o = n[e] = {
				i: e,
				l: !1,
				exports: {}
			};
			return r[e].call(o.exports, o, o.exports, t), o.l = !0, o.exports
		}
		var r, n
	}(r(0))
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return a
	}));
	var n = r(0),
		o = r.n(n);

	function a(e) {
		return o.a.createElement("div", {
			className: "main-test__answer input-tick".concat(e.checked ? " addAnimation" : ""),
			onClick: e.onClick
		}, o.a.createElement("label", {
			className: "before-fade-in fade-in"
		}, o.a.createElement("input", {
			type: "radio",
			name: e.name || (e.correctExample ? "test-sample-correct" : "test-sample"),
			disabled: e.readOnly,
			checked: e.checked,
			onChange: function() {},
			className: "before-fade-in fade-in"
		}), o.a.createElement("span", {
			className: "checkbox-material ".concat(e.correct ? "" : "wrong-answer")
		}, e.correct ? o.a.createElement("span", {
			className: "custom-checkbox"
		}) : o.a.createElement("span", {
			className: "custom-close"
		})), o.a.createElement("span", {
			className: "check-text"
		}, e.content)))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return a
	}));
	var n = r(0),
		o = r.n(n);

	function a(e) {
		var t = e.checked ? e.exmaple ? e.correct ? "main-test__abstract-box--green-bg" : "main-test__abstract-box--red-bg" : "main-test__abstract-box--grey-bg" : "";
		return o.a.createElement("div", {
			className: "main-test__answer-box--abstract",
			onClick: e.onClick
		}, o.a.createElement("div", {
			className: "main-test__abstract-box ".concat(t)
		}, o.a.createElement("img", {
			src: e.image
		})), o.a.createElement("div", {
			className: "input-tick-wrapper"
		}, o.a.createElement("div", {
			className: " input-tick".concat(e.checked ? " addAnimation" : "")
		}, o.a.createElement("label", null, o.a.createElement("input", {
			type: "radio",
			readOnly: e.readOnly,
			checked: e.checked,
			onChange: function() {}
		}), o.a.createElement("span", {
			className: "checkbox-material ".concat(e.correct ? "" : "wrong-answer")
		}, e.correct ? o.a.createElement("span", {
			className: "custom-checkbox"
		}) : o.a.createElement("span", {
			className: "custom-close"
		}))))))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(341);

	function i(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function s(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? i(Object(r), !0).forEach((function(t) {
				c(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function c(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function l(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function u(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function f(e, t) {
		return (f = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function p(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = h(e);
			if (t) {
				var o = h(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return d(this, r)
		}
	}

	function d(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function h(e) {
		return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var m = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && f(e, t)
		}(c, e);
		var t, r, n, i = p(c);

		function c() {
			var e;
			l(this, c);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = i.call.apply(i, [this].concat(r))).setRandomScores = function(e) {
				return e.map((function(e) {
					var t = e.score > 0 ? e.score : Math.floor(100 * Math.random());
					return s(s({}, e), {
						score: t
					})
				}))
			}, e.state = {
				careers: e.props.careers ? e.setRandomScores(e.props.careers.slice(0, 4)) : []
			}, e
		}
		return t = c, (r = [{
			key: "componentDidMount",
			value: function() {
				var e = this,
					t = this.setRandomScores(this.state.careers);
				clearInterval(this.animatedInterval), this.animatedInterval = setInterval((function() {
					e.animateBubble(t.length)
				}), 4e3)
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				clearInterval(this.animatedInterval)
			}
		}, {
			key: "render",
			value: function() {
				var e = this;
				return o.a.createElement("div", {
					className: "grid-x widget__cards widget-section"
				}, o.a.createElement("div", {
					className: "widget__bp--5 large-5 cell"
				}, o.a.createElement("h2", {
					className: "popular-careers"
				}, this.props.careersTitle)), o.a.createElement("div", {
					className: "widget__bp--7 large-7 cell"
				}), o.a.createElement("div", {
					className: "small-12 cell"
				}, o.a.createElement("div", {
					className: "grid-x"
				}, this.state.careers.map((function(t) {
					return o.a.createElement("div", {
						className: "cell large-3 medium-6",
						key: t.id
					}, o.a.createElement("div", {
						className: "card card--careers popular-results ".concat(e.props.className || "")
					}, o.a.createElement("div", {
						className: "card__section card__section--careers-results"
					}, o.a.createElement("p", {
						className: "name disable-fade-in"
					}, t.name), o.a.createElement(a.default, {
						score: t.score,
						hideScore: !0
					}))))
				})))))
			}
		}]) && u(t.prototype, r), n && u(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), c
	}(r(64).default);
	t.default = m
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(34),
		i = r.n(a),
		s = r(412);

	function c(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function l(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function u(e, t) {
		return (u = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function f(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = d(e);
			if (t) {
				var o = d(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return p(this, r)
		}
	}

	function p(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function d(e) {
		return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var h = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && u(e, t)
		}(p, e);
		var t, r, n, a = f(p);

		function p() {
			var e;
			c(this, p);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = a.call.apply(a, [this].concat(r))).swiping = !1, e.carouselRef = o.a.createRef(), e.closeOnClick = !1, e.handleMouseDown = function(e) {
				e.preventDefault()
			}, e.handleMouseUp = function() {
				e.swiping = e.carouselRef.current.innerSlider.state.swiping
			}, e.handleClick = function(t, r) {
				if (e.swiping) t.preventDefault();
				else {
					var n = t.target.closest(".slick-slide"),
						o = n.getAttribute("data-index");
					if (e.props.isBlur && o > 3) return;
					n.classList.contains("slick-active") || (e.closeOnClick = !1, e.carouselRef.current.slickGoTo(o));
					var a = n.getBoundingClientRect(),
						i = a.bottom + 80;
					(i < 0 || i > (window.innerHeight || document.documentElement.clientHeight)) && window.scrollTo({
						top: window.scrollY + a.bottom - 210,
						behavior: "smooth"
					}), e.props.onClick(r ? r.id : null)
				}
			}, e.handleSliderScroll = function() {
				e.closeOnClick && e.props.onClick(null), e.closeOnClick = !1
			}, e
		}
		return t = p, (r = [{
			key: "render",
			value: function() {
				var e = this,
					t = {
						dots: !1,
						dotsClass: "slider-bar",
						infinite: !1,
						arrows: !0,
						speed: 600,
						cssEase: "ease-out",
						slidesToShow: this.props.isBlur ? 6 : 4,
						slidesToScroll: this.props.isBlur ? 6 : 4,
						className: "results-slider ".concat(this.props.isBlur ? " is-blur" : ""),
						variableWidth: !0,
						nextArrow: o.a.createElement(s.default, {
							props: this.props,
							direction: "slider-arrow slider-arrow--next"
						}),
						prevArrow: o.a.createElement(s.default, {
							props: this.props,
							direction: "slider-arrow slider-arrow--prev"
						}),
						afterChange: this.handleSliderScroll,
						responsive: [{
							breakpoint: 530,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
								variableWidth: !0,
								arrows: !1,
								dots: !0
							}
						}, {
							breakpoint: 700,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
								variableWidth: !0,
								arrows: !1,
								dots: !0
							}
						}, {
							breakpoint: 1024,
							settings: {
								slidesToShow: this.props.isBlur ? 3 : 2,
								slidesToScroll: 1,
								variableWidth: !0,
								arrows: !1,
								dots: !0
							}
						}, {
							breakpoint: 1279,
							settings: {
								slidesToShow: this.props.isCI || this.props.isBlur ? 4 : 3,
								slidesToScroll: 1,
								variableWidth: !0,
								arrows: !0
							}
						}, {
							breakpoint: 1441,
							settings: {
								slidesToShow: this.props.isBlur ? 5 : 3,
								slidesToScroll: 1,
								variableWidth: !0,
								arrows: !0
							}
						}]
					},
					r = this;
				return o.a.createElement(i.a, Object.assign({}, t, {
					ref: this.carouselRef
				}), o.a.createElement("div", {
					key: "slideOverview",
					className: "tabs-title".concat(this.props.current ? "" : " is-active"),
					onClickCapture: function(t) {
						return e.handleClick(t, null)
					},
					onMouseUpCapture: this.handleMouseUp,
					onMouseDownCapture: this.handleMouseDown
				}, o.a.createElement("div", {
					className: "card card--results card__overview-results"
				}, o.a.createElement("div", {
					className: "card__overview"
				}, o.a.createElement("div", {
					className: "circle half-top"
				}), o.a.createElement("div", {
					className: "circle small-right"
				}), o.a.createElement("div", {
					className: "circle small-left"
				}), o.a.createElement("div", {
					className: "circle half-bot"
				})), o.a.createElement("div", {
					className: "card__section"
				}, o.a.createElement("div", {
					className: "card__overview-icon"
				}, o.a.createElement("div", {
					className: "large-icon white-search-paper"
				})), o.a.createElement("h3", {
					className: "card-industry-name"
				}, "Overview")))), this.props.options.map((function(t, n) {
					return o.a.createElement("div", {
						key: "slide".concat(t.id, "_").concat(n),
						onClickCapture: function(r) {
							return e.handleClick(r, t)
						},
						onMouseUpCapture: e.handleMouseUp,
						onMouseDownCapture: e.handleMouseDown
					}, o.a.cloneElement(e.props.children, {
						option: t,
						isActive: r.props.current && r.props.current.id === t.id,
						key: t.id,
						isBlur: r.props.isBlur && n > 2,
						isUnpaid: r.props.isUnpaid,
						isCI: r.props.isCI,
						slideNumber: n,
						hasText: 3 === n
					}))
				})))
			}
		}]) && l(t.prototype, r), n && l(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), p
	}(o.a.Component);
	t.default = h
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return i
	}));
	var n = r(0),
		o = r.n(n),
		a = r(341);

	function i(e) {
		var t = e.option.image && e.option.image.small ? {
			background: "url(".concat(e.option.image.small, ")"),
			backgroundPosition: "center center",
			backgroundSize: "cover"
		} : {};
		return Object(n.useEffect)((function() {
			document.querySelectorAll(".card--results").forEach((function(e) {
				var t = e.clientHeight;
				t > s && (s = t), e.style.height = s + "px"
			}))
		}), []), o.a.createElement("div", {
			className: "tabs-title" + (e.isActive ? " is-active" : "") + (e.isBlur ? " blur-box" : "")
		}, o.a.createElement("div", {
			className: "card card--results",
			"data-equalizer-watch": !0
		}, o.a.createElement("div", {
			className: "card__image",
			style: t
		}), o.a.createElement("div", {
			className: "card__section"
		}, o.a.createElement(a.default, {
			score: e.isBlur ? 90 : e.option.score,
			hideScore: !!e.isBlur
		}), o.a.createElement("h3", {
			className: "card-industry-name"
		}, e.isBlur ? "" : e.option.name))), e.isUnpaid && e.hasText ? o.a.createElement("a", {
			href: "/upgrade",
			className: "results__full-access "
		}, "Get access to reveal full results ", o.a.createElement("span", {
			className: "small-icon lock-bold-green"
		})) : "")
	}
	var s = 0
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return s
	}));
	var n = r(0),
		o = r.n(n),
		a = r(71),
		i = r.n(a);
	r(358), r(709);

	function s(e) {
		var t = Object(n.useRef)(null);
		return Object(n.useEffect)((function() {
			var r = [{
					x: 0,
					y: 0
				}, {
					x: 10,
					y: 2
				}, {
					x: 20,
					y: 3
				}, {
					x: 30,
					y: 6
				}, {
					x: 40,
					y: 11
				}, {
					x: 50,
					y: 18
				}, {
					x: 60,
					y: 29
				}, {
					x: 70,
					y: 38
				}, {
					x: 80,
					y: 43
				}, {
					x: 90,
					y: 38
				}, {
					x: 100,
					y: 0
				}],
				n = e.hasAccess ? e.score : 75;
			console.log("test data", e.stats), e.hasAccess && e.stats && (console.log("real data"), r = [], Object.keys(e.stats.stats).forEach((function(t, n) {
				r.push({
					x: t,
					y: e.stats.stats[t]
				})
			})), console.log(r));
			var o = {
				responsive: !0,
				animation: {
					easing: "easeInOutQuad",
					duration: 520
				},
				scales: {
					xAxes: [{
						type: "linear",
						position: "bottom",
						ticks: {
							fontFamily: "Sofia-Pro-Regular",
							max: 100,
							min: 0,
							stepSize: 10,
							callback: function(e, t, r) {
								return "".concat(e, "%")
							}
						},
						gridLines: {
							fontFamily: "Sofia-Pro-Regular",
							color: "rgba(10,30,46, 0.05)",
							lineWidth: 1,
							display: !0,
							zeroLineColor: "rgba(10,30,46, 0.2)",
							drawBorder: !1,
							tickMarkLength: 5
						},
						scaleLabel: {
							fontFamily: "Sofia-Pro-Regular",
							titleFontFamily: "Sofia-Pro-Regular",
							display: !0,
							fontColor: "#0A1E2E",
							labelString: "Score"
						}
					}],
					yAxes: [{
						ticks: {
							display: !1,
							min: 0
						},
						gridLines: {
							fontFamily: "Sofia-Pro-Regular",
							color: "rgba(10,30,46, 0.05)",
							lineWidth: 1,
							display: !0,
							zeroLineColor: "rgba(10,30,46, 0.2)",
							tickMarkLength: 0
						},
						scaleLabel: {
							fontFamily: "Sofia-Pro-Regular",
							titleFontFamily: "Sofia-Pro-Regular",
							display: !0,
							fontColor: "#0A1E2E",
							labelString: "Users",
							drawOnChartArea: !0,
							padding: 10
						}
					}]
				},
				annotation: {
					annotations: [{
						type: "line",
						mode: "vertical",
						scaleID: "x-axis-0",
						value: n,
						borderColor: "#59CE61",
						borderWidth: 1,
						label: {
							fontFamily: "Sofia-Pro-Light",
							backgroundColor: "transparent",
							content: "You",
							enabled: !0,
							yAdjust: n,
							fontColor: "#0A1E2E",
							xPadding: 6,
							yPadding: 6,
							cornerRadius: 6
						}
					}]
				},
				lineHeightAnnotation: {
					color: "rgba(10,30,46, 0.5)",
					shadow: !1,
					noDash: !0
				},
				elements: {
					line: {
						tension: .4
					},
					point: {
						radius: 0
					}
				},
				legend: {
					display: !1
				}
			};
			new i.a(t.current.getContext("2d"), {
				type: "line",
				defaultFontFamily: "Sofia-Pro-Regular",
				data: {
					datasets: [{
						label: "Users Results",
						borderWidth: 1,
						borderColor: "#0a1e2e",
						data: r,
						color: "#0a1e2e",
						backgroundColor: "transparent"
					}]
				},
				options: o
			})
		}), []), o.a.createElement("div", {
			className: "line-chart ".concat(e.hasAccess ? "compare-chart" : "preview-chart")
		}, o.a.createElement("div", {
			className: "aspect-ratio"
		}, o.a.createElement("canvas", {
			id: "myChart",
			ref: t
		})), e.hasAccess ? null : o.a.createElement("div", {
			className: "line-chart-cover"
		}, o.a.createElement("h1", null, "THIS IS A PREVIEW"), o.a.createElement("p", null, "Paid access is required")))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r(37),
		a = r(89),
		i = r(52),
		s = r.n(i);

	function c(e) {
		return function(e) {
			if (Array.isArray(e)) return l(e)
		}(e) || function(e) {
			if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
		}(e) || function(e, t) {
			if (!e) return;
			if ("string" === typeof e) return l(e, t);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			"Object" === r && e.constructor && (r = e.constructor.name);
			if ("Map" === r || "Set" === r) return Array.from(e);
			if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return l(e, t)
		}(e) || function() {
			throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function l(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
		return n
	}

	function u() {
		u = function() {
			return e
		};
		var e = {},
			t = Object.prototype,
			r = t.hasOwnProperty,
			n = "function" == typeof Symbol ? Symbol : {},
			o = n.iterator || "@@iterator",
			a = n.asyncIterator || "@@asyncIterator",
			i = n.toStringTag || "@@toStringTag";

		function s(e, t, r) {
			return Object.defineProperty(e, t, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}), e[t]
		}
		try {
			s({}, "")
		} catch (x) {
			s = function(e, t, r) {
				return e[t] = r
			}
		}

		function c(e, t, r, n) {
			var o = t && t.prototype instanceof p ? t : p,
				a = Object.create(o.prototype),
				i = new S(n || []);
			return a._invoke = function(e, t, r) {
				var n = "suspendedStart";
				return function(o, a) {
					if ("executing" === n) throw new Error("Generator is already running");
					if ("completed" === n) {
						if ("throw" === o) throw a;
						return j()
					}
					for (r.method = o, r.arg = a;;) {
						var i = r.delegate;
						if (i) {
							var s = E(i, r);
							if (s) {
								if (s === f) continue;
								return s
							}
						}
						if ("next" === r.method) r.sent = r._sent = r.arg;
						else if ("throw" === r.method) {
							if ("suspendedStart" === n) throw n = "completed", r.arg;
							r.dispatchException(r.arg)
						} else "return" === r.method && r.abrupt("return", r.arg);
						n = "executing";
						var c = l(e, t, r);
						if ("normal" === c.type) {
							if (n = r.done ? "completed" : "suspendedYield", c.arg === f) continue;
							return {
								value: c.arg,
								done: r.done
							}
						}
						"throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
					}
				}
			}(e, r, i), a
		}

		function l(e, t, r) {
			try {
				return {
					type: "normal",
					arg: e.call(t, r)
				}
			} catch (x) {
				return {
					type: "throw",
					arg: x
				}
			}
		}
		e.wrap = c;
		var f = {};

		function p() {}

		function d() {}

		function h() {}
		var m = {};
		s(m, o, (function() {
			return this
		}));
		var v = Object.getPrototypeOf,
			y = v && v(v(T([])));
		y && y !== t && r.call(y, o) && (m = y);
		var b = h.prototype = p.prototype = Object.create(m);

		function g(e) {
			["next", "throw", "return"].forEach((function(t) {
				s(e, t, (function(e) {
					return this._invoke(t, e)
				}))
			}))
		}

		function w(e, t) {
			var n;
			this._invoke = function(o, a) {
				function i() {
					return new t((function(n, i) {
						! function n(o, a, i, s) {
							var c = l(e[o], e, a);
							if ("throw" !== c.type) {
								var u = c.arg,
									f = u.value;
								return f && "object" == typeof f && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
									n("next", e, i, s)
								}), (function(e) {
									n("throw", e, i, s)
								})) : t.resolve(f).then((function(e) {
									u.value = e, i(u)
								}), (function(e) {
									return n("throw", e, i, s)
								}))
							}
							s(c.arg)
						}(o, a, n, i)
					}))
				}
				return n = n ? n.then(i, i) : i()
			}
		}

		function E(e, t) {
			var r = e.iterator[t.method];
			if (void 0 === r) {
				if (t.delegate = null, "throw" === t.method) {
					if (e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method)) return f;
					t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
				}
				return f
			}
			var n = l(r, e.iterator, t.arg);
			if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, f;
			var o = n.arg;
			return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, f) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, f)
		}

		function _(e) {
			var t = {
				tryLoc: e[0]
			};
			1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
		}

		function O(e) {
			var t = e.completion || {};
			t.type = "normal", delete t.arg, e.completion = t
		}

		function S(e) {
			this.tryEntries = [{
				tryLoc: "root"
			}], e.forEach(_, this), this.reset(!0)
		}

		function T(e) {
			if (e) {
				var t = e[o];
				if (t) return t.call(e);
				if ("function" == typeof e.next) return e;
				if (!isNaN(e.length)) {
					var n = -1,
						a = function t() {
							for (; ++n < e.length;)
								if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
							return t.value = void 0, t.done = !0, t
						};
					return a.next = a
				}
			}
			return {
				next: j
			}
		}

		function j() {
			return {
				value: void 0,
				done: !0
			}
		}
		return d.prototype = h, s(b, "constructor", h), s(h, "constructor", d), d.displayName = s(h, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
			var t = "function" == typeof e && e.constructor;
			return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
		}, e.mark = function(e) {
			return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, i, "GeneratorFunction")), e.prototype = Object.create(b), e
		}, e.awrap = function(e) {
			return {
				__await: e
			}
		}, g(w.prototype), s(w.prototype, a, (function() {
			return this
		})), e.AsyncIterator = w, e.async = function(t, r, n, o, a) {
			void 0 === a && (a = Promise);
			var i = new w(c(t, r, n, o), a);
			return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
				return e.done ? e.value : i.next()
			}))
		}, g(b), s(b, i, "Generator"), s(b, o, (function() {
			return this
		})), s(b, "toString", (function() {
			return "[object Generator]"
		})), e.keys = function(e) {
			var t = [];
			for (var r in e) t.push(r);
			return t.reverse(),
				function r() {
					for (; t.length;) {
						var n = t.pop();
						if (n in e) return r.value = n, r.done = !1, r
					}
					return r.done = !0, r
				}
		}, e.values = T, S.prototype = {
			constructor: S,
			reset: function(e) {
				if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !e)
					for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
			},
			stop: function() {
				this.done = !0;
				var e = this.tryEntries[0].completion;
				if ("throw" === e.type) throw e.arg;
				return this.rval
			},
			dispatchException: function(e) {
				if (this.done) throw e;
				var t = this;

				function n(r, n) {
					return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
				}
				for (var o = this.tryEntries.length - 1; o >= 0; --o) {
					var a = this.tryEntries[o],
						i = a.completion;
					if ("root" === a.tryLoc) return n("end");
					if (a.tryLoc <= this.prev) {
						var s = r.call(a, "catchLoc"),
							c = r.call(a, "finallyLoc");
						if (s && c) {
							if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
							if (this.prev < a.finallyLoc) return n(a.finallyLoc)
						} else if (s) {
							if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
						} else {
							if (!c) throw new Error("try statement without catch or finally");
							if (this.prev < a.finallyLoc) return n(a.finallyLoc)
						}
					}
				}
			},
			abrupt: function(e, t) {
				for (var n = this.tryEntries.length - 1; n >= 0; --n) {
					var o = this.tryEntries[n];
					if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
						var a = o;
						break
					}
				}
				a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
				var i = a ? a.completion : {};
				return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, f) : this.complete(i)
			},
			complete: function(e, t) {
				if ("throw" === e.type) throw e.arg;
				return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
			},
			finish: function(e) {
				for (var t = this.tryEntries.length - 1; t >= 0; --t) {
					var r = this.tryEntries[t];
					if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), O(r), f
				}
			},
			catch: function(e) {
				for (var t = this.tryEntries.length - 1; t >= 0; --t) {
					var r = this.tryEntries[t];
					if (r.tryLoc === e) {
						var n = r.completion;
						if ("throw" === n.type) {
							var o = n.arg;
							O(r)
						}
						return o
					}
				}
				throw new Error("illegal catch attempt")
			},
			delegateYield: function(e, t, r) {
				return this.delegate = {
					iterator: T(e),
					resultName: t,
					nextLoc: r
				}, "next" === this.method && (this.arg = void 0), f
			}
		}, e
	}

	function f(e, t, r, n, o, a, i) {
		try {
			var s = e[a](i),
				c = s.value
		} catch (l) {
			return void r(l)
		}
		s.done ? t(c) : Promise.resolve(c).then(n, o)
	}

	function p(e) {
		return function() {
			var t = this,
				r = arguments;
			return new Promise((function(n, o) {
				var a = e.apply(t, r);

				function i(e) {
					f(a, n, o, i, s, "next", e)
				}

				function s(e) {
					f(a, n, o, i, s, "throw", e)
				}
				i(void 0)
			}))
		}
	}

	function d(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function h(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? d(Object(r), !0).forEach((function(t) {
				m(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function m(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function v(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function y(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function b(e, t) {
		return (b = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function g(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = E(e);
			if (t) {
				var o = E(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return w(this, r)
		}
	}

	function w(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function E(e) {
		return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var _ = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && b(e, t)
		}(l, e);
		var t, r, n, i = g(l);

		function l() {
			var e;
			v(this, l);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = i.call.apply(i, [this].concat(r))).state = {
				collection: [],
				totalOptionsCount: null,
				current: null
			}, e.setCurrent = function(t) {
				var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				if (!t || e.state.current && e.state.current.id === t) return t || e.setState({
					current: null
				}), void(r && e.scrollToTopOfContent());
				var n = e.state.collection.find((function(e) {
					return e.id === t
				}));
				e.setState({
					current: n
				}, (function() {
					n && !n.careersLoaded && e.loadCareers(n.id).then((function(t) {
						e.setState({
							current: h(h({}, e.state.current), {}, {
								careers: t,
								careersLoaded: !0
							}),
							collection: e.state.collection.map((function(e) {
								return e.id === n.id ? h(h({}, e), {}, {
									careers: t,
									careersLoaded: !0
								}) : e
							}))
						})
					})), n && !n.statsLoaded && e.loadStats(n.id).then((function(t) {
						e.setState({
							current: h(h({}, e.state.current), {}, {
								stats: t,
								statsLoaded: !0
							}),
							collection: e.state.collection.map((function(e) {
								return e.id === n.id ? h(h({}, e), {}, {
									stats: t,
									statsLoaded: !0
								}) : e
							}))
						})
					}))
				})), r && e.scrollToTopOfContent()
			}, e.scrollToTopOfContent = function() {
				window.scrollTo({
					top: document.querySelector(".tabs-content-container").offsetTop + document.querySelector(".tabs-slider").offsetTop - 110,
					behavior: "smooth"
				})
			}, e.loadCareers = function() {
				var t = p(u().mark((function t(r) {
					var n;
					return u().wrap((function(t) {
						for (;;) switch (t.prev = t.next) {
							case 0:
								return n = [], t.next = 3, o.default.popularCareers(e.careersSearchOptions(r)).then((function(e) {
									n = e
								})).catch((function(e) {
									console.error(e)
								}));
							case 3:
								return t.abrupt("return", n);
							case 4:
							case "end":
								return t.stop()
						}
					}), t)
				})));
				return function(e) {
					return t.apply(this, arguments)
				}
			}(), e.loadStats = function() {
				var t = p(u().mark((function t(r) {
					var n;
					return u().wrap((function(t) {
						for (;;) switch (t.prev = t.next) {
							case 0:
								return n = {}, t.next = 3, a.default.getStats(e.careersSearchOptions(r)).then((function(e) {
									n = e
								})).catch((function(e) {
									console.error(e)
								}));
							case 3:
								return t.abrupt("return", n);
							case 4:
							case "end":
								return t.stop()
						}
					}), t)
				})));
				return function(e) {
					return t.apply(this, arguments)
				}
			}(), e.collectionWithScores = function(t) {
				e.props.results ? e.mapScoreToCollection(t, e.props.results) : document.location.href = "/"
			}, e.mapScoreToCollection = function(t, r) {
				var n = [],
					o = r.filter((function(e) {
						return !e.group_id
					}));
				s()(t).map((function(e) {
					var t = r.find((function(t) {
							return t.group_id === e.id
						})),
						o = t ? Math.round(t.score) : 0;
					n.push(Object.assign({}, e, {
						score: o
					}))
				})), n = n.sort((function(e, t) {
					return t.score - e.score
				})), e.props.user && (e.props.user.full_access || e.props.user["".concat(e.props.test.code, "_access")]) || (n = n.slice(0, 3), n = window.innerWidth < 530 ? [].concat(c(n), [n[0]]) : [].concat(c(n), c(n))), e.setState({
					collection: n,
					totalOptionsCount: t.length,
					hiddenScores: o
				})
			}, e
		}
		return t = l, (r = [{
			key: "render",
			value: function() {
				return null
			}
		}]) && y(t.prototype, r), n && y(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), l
	}(n.Component);
	t.default = _
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return s
	}));
	var n = r(0),
		o = r.n(n),
		a = (r(1), r(142)),
		i = r(259);

	function s(e) {
		e.user && "finished" === e.user.interests_status && "finished" === e.user.personality_status && "finished" === e.user.motivators_status && "finished" === e.user.abstract_status && "finished" === e.user.numerical_status && e.user.verbal_status, e.user && e.user.full_access;
		var t = e.user && (e.user.full_access || e.user["".concat(e.test.code, "_access")]),
			r = function(t, r) {
				return e.collection[t][r || "name"].replaceAll(" and ", " & ")
			},
			s = function(a) {
				return a ? "".concat(r(0), ", ").concat(r(1), " and ").concat(r(2)) : t ? "".concat(r(e.totalOptionsCount - 3), ", ").concat(r(e.totalOptionsCount - 2), " and ").concat(r(e.totalOptionsCount - 1)) : o.a.createElement(n.Fragment, null, o.a.createElement("span", {
					className: "hidden-score-explanation"
				}, "\u2026..\u2026\u2026..\u2026..\u2026\u2026.."), ", ", o.a.createElement("span", {
					className: "hidden-score-explanation"
				}, "\u2026..\u2026\u2026..\u2026..\u2026\u2026..\u2026..\u2026\u2026.."), " and ", o.a.createElement("span", {
					className: "hidden-score-explanation"
				}, "\u2026..\u2026\u2026..\u2026..\u2026\u2026..\u2026..\u2026\u2026..."))
			},
			c = function() {
				return t ? "".concat(r(0, "result_short_description"), ", ").concat(r(1, "result_short_description"), " and ").concat(r(2, "result_short_description")) : o.a.createElement(n.Fragment, null, o.a.createElement("span", {
					className: "hidden-score-explanation"
				}, "\u2026..\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.\u2026\u2026\u2026\u2026..\u2026\u2026.."), ", ", o.a.createElement("span", {
					className: "hidden-score-explanation"
				}, "\u2026..\u2026\u2026\u2026\u2026..\u2026\u2026\u2026\u2026.\u2026.\u2026..\u2026..\u2026\u2026.."), " and ", o.a.createElement("span", {
					className: "hidden-score-explanation"
				}, "\u2026..\u2026\u2026..\u2026..\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.\u2026..\u2026\u2026..."))
			};
		return o.a.createElement("div", null, o.a.createElement("div", {
			className: "tabs-content-container"
		}, o.a.createElement("div", {
			className: "grid-container no-padding-top"
		}, o.a.createElement("div", {
			className: "tabs-content"
		}, o.a.createElement("div", {
			className: "tabs-panel is-active"
		}, o.a.createElement("div", {
			className: "industry-content"
		}, o.a.createElement("div", {
			className: "grid-x"
		}, o.a.createElement("div", {
			className: "large-6 medium-12 small-12 cell large-order-1 medium-order-1 small-order-2"
		}, o.a.createElement("h1", null, "OVERVIEW"), o.a.createElement("h2", {
			className: "results__heading"
		}, "Overview of your results")), o.a.createElement("div", {
			className: "large-6 medium-12 small-12 cell large-order-2 medium-order-2 small-order-1"
		}, o.a.createElement("p", {
			className: "industry-score"
		}, e.user.name), o.a.createElement("p", {
			className: "results__taken-date medium-up-float-right"
		}, o.a.createElement("b", null, "Date taken"), ": ", e.user["".concat(e.test.code, "_finished_at")]))), o.a.createElement("div", {
			className: "grid-x results__content"
		}, o.a.createElement("div", {
			className: "small-12 cell"
		}, o.a.createElement("h3", {
			className: "results__subheading"
		}, "About this test"), o.a.createElement("p", null, e.test.result_description), o.a.createElement("h3", {
			className: "results__subheading"
		}, "How you scored"), o.a.createElement("p", null, function() {
			switch (e.test.code) {
				case "interests":
					return "We evaluated your answers against ".concat(e.totalOptionsCount, " areas of interest. This is a snapshot of your results:");
				case "personality":
					return "We evaluated your answers against ".concat(e.totalOptionsCount, " personality traits. This is a snapshot of your results:");
				case "motivators":
					return "We evaluated your answers against ".concat(e.totalOptionsCount, " intrinsic and extrinsic motivational factors. This is a snapshot of your results:");
				default:
					return ""
			}
		}()), o.a.createElement("div", {
			className: t ? "" : "results__chart-overview"
		}, e.collection.length > 0 ? o.a.createElement(i.default, {
			collection: t ? e.collection : e.collection.slice(0, 3),
			hiddenScores: e.hiddenScores,
			totalOptionsCount: e.totalOptionsCount
		}) : null, t ? null : o.a.createElement("a", {
			href: "/get-access",
			className: "results__access-link"
		}, "Get access to see all results ", o.a.createElement("span", {
			className: "small-icons next-arrow-green-s"
		}))), o.a.createElement("h3", {
			className: "results__subheading"
		}, "What your results mean"), function() {
			if (0 === e.collection.length) return "";
			switch (e.test.code) {
				case "interests":
					return o.a.createElement(n.Fragment, null, o.a.createElement("p", null, e.user.first_name, ", your strongest interests are: ", o.a.createElement("b", null, s(!0)), ". This means that you\u2019re passionate about ", o.a.createElement("b", null, c())), o.a.createElement("p", null, "Your results also show that your weakest interests are: ", o.a.createElement("b", null, s(!1)), ". This indicates that you won\u2019t enjoy working within these areas."));
				case "personality":
					return o.a.createElement(n.Fragment, null, o.a.createElement("p", null, e.user.first_name, ", your strongest work personality traits are: ", o.a.createElement("b", null, s(!0)), ". This means that you\u2019ll be most comfortable in work environments that allow you to ", o.a.createElement("b", null, c())), o.a.createElement("p", null, "Your results also show that your weakest traits are: ", o.a.createElement("b", null, s(!1)), ". This indicates that you won\u2019t be compatible in careers that rely on these characteristics."));
				case "motivators":
					return o.a.createElement(n.Fragment, null, o.a.createElement("p", null, e.user.first_name, ", your strongest career motivators are: ", o.a.createElement("b", null, s(!0)), ". This means you\u2019re driven by ", o.a.createElement("b", null, c())), o.a.createElement("p", null, "Your results also show that your weakest career motivators are: ", o.a.createElement("b", null, s(!1)), ". This indicates that you wouldn\u2019t be stimulated by work that relies on these motives."));
				default:
					return ""
			}
		}())), o.a.createElement(a.default, {
			hasTestAccess: t,
			test: e.test
		})))))))
	}
}, , , , , function(e, t, r) {
	"use strict";
	var n = "function" === typeof Symbol && Symbol.for,
		o = n ? Symbol.for("react.element") : 60103,
		a = n ? Symbol.for("react.portal") : 60106,
		i = n ? Symbol.for("react.fragment") : 60107,
		s = n ? Symbol.for("react.strict_mode") : 60108,
		c = n ? Symbol.for("react.profiler") : 60114,
		l = n ? Symbol.for("react.provider") : 60109,
		u = n ? Symbol.for("react.context") : 60110,
		f = n ? Symbol.for("react.async_mode") : 60111,
		p = n ? Symbol.for("react.concurrent_mode") : 60111,
		d = n ? Symbol.for("react.forward_ref") : 60112,
		h = n ? Symbol.for("react.suspense") : 60113,
		m = n ? Symbol.for("react.suspense_list") : 60120,
		v = n ? Symbol.for("react.memo") : 60115,
		y = n ? Symbol.for("react.lazy") : 60116,
		b = n ? Symbol.for("react.block") : 60121,
		g = n ? Symbol.for("react.fundamental") : 60117,
		w = n ? Symbol.for("react.responder") : 60118,
		E = n ? Symbol.for("react.scope") : 60119;

	function _(e) {
		if ("object" === typeof e && null !== e) {
			var t = e.$$typeof;
			switch (t) {
				case o:
					switch (e = e.type) {
						case f:
						case p:
						case i:
						case c:
						case s:
						case h:
							return e;
						default:
							switch (e = e && e.$$typeof) {
								case u:
								case d:
								case y:
								case v:
								case l:
									return e;
								default:
									return t
							}
					}
				case a:
					return t
			}
		}
	}

	function O(e) {
		return _(e) === p
	}
	t.AsyncMode = f, t.ConcurrentMode = p, t.ContextConsumer = u, t.ContextProvider = l, t.Element = o, t.ForwardRef = d, t.Fragment = i, t.Lazy = y, t.Memo = v, t.Portal = a, t.Profiler = c, t.StrictMode = s, t.Suspense = h, t.isAsyncMode = function(e) {
		return O(e) || _(e) === f
	}, t.isConcurrentMode = O, t.isContextConsumer = function(e) {
		return _(e) === u
	}, t.isContextProvider = function(e) {
		return _(e) === l
	}, t.isElement = function(e) {
		return "object" === typeof e && null !== e && e.$$typeof === o
	}, t.isForwardRef = function(e) {
		return _(e) === d
	}, t.isFragment = function(e) {
		return _(e) === i
	}, t.isLazy = function(e) {
		return _(e) === y
	}, t.isMemo = function(e) {
		return _(e) === v
	}, t.isPortal = function(e) {
		return _(e) === a
	}, t.isProfiler = function(e) {
		return _(e) === c
	}, t.isStrictMode = function(e) {
		return _(e) === s
	}, t.isSuspense = function(e) {
		return _(e) === h
	}, t.isValidElementType = function(e) {
		return "string" === typeof e || "function" === typeof e || e === i || e === p || e === c || e === s || e === h || e === m || "object" === typeof e && null !== e && (e.$$typeof === y || e.$$typeof === v || e.$$typeof === l || e.$$typeof === u || e.$$typeof === d || e.$$typeof === g || e.$$typeof === w || e.$$typeof === E || e.$$typeof === b)
	}, t.typeOf = _
}, function(e, t) {
	e.exports = function(e) {
		var t = typeof e;
		return null != e && ("object" == t || "function" == t)
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return p
	}));
	var n = r(0),
		o = r.n(n),
		a = r(236),
		i = r.n(a),
		s = r(91),
		c = r(55);

	function l(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function u(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? l(Object(r), !0).forEach((function(t) {
				f(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function f(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function p(e) {
		return o.a.createElement(i.a, {
			appId: e.appId,
			autoLoad: !1,
			callback: function(t) {
				console.log(t), t.signedRequest ? e.onCallback((function() {
					var r = "fbsr_".concat(e.appId);
					document.cookie.match(new RegExp(r + "=([^;]+)"));
					document.cookie = r + "=" + t.signedRequest;
					var n = e.saveAnswers ? u(u({}, t), Object(c.tempResultsToHash)()) : t;
					s.default.loginWithProvider("facebook", n, e.onSuccess, e.onError)
				})) : console.error("No facebook signed request")
			},
			fields: "email,first_name,last_name,name",
			scope: "email,public_profile",
			render: function(t) {
				return o.a.createElement("button", {
					onClick: function(e) {
						e.preventDefault(), t.onClick(e)
					},
					className: "button button--clear"
				}, o.a.createElement("span", {
					className: e.icon || "small-icons is-left facebook"
				}), e.label || "Sign up using", " ", o.a.createElement("span", null, "Facebook"))
			}
		})
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return d
	}));
	var n = r(0),
		o = r.n(n),
		a = (r(144), r(43)),
		i = r(55);

	function s(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function c(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function l(e, t) {
		return (l = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function u(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = p(e);
			if (t) {
				var o = p(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return f(this, r)
		}
	}

	function f(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function p(e) {
		return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var d = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && l(e, t)
		}(p, e);
		var t, r, n, f = u(p);

		function p() {
			var e;
			s(this, p);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = f.call.apply(f, [this].concat(r))).state = {
				errorMessage: null
			}, e.linkedInLogin = function(t) {
				t.preventDefault(), e.props.onCallback((function() {
					var t = window.top.outerHeight / 2 + window.top.screenY - 300,
						r = window.top.outerWidth / 2 + window.top.screenX - 300;
					e.popup = window.open("".concat(window.location.origin).concat("/auth/linkedin"), "_blank", "width=600,height=600,top=".concat(t, ",left=").concat(r)), window.addEventListener("message", e.receiveLinkedInRegStatus)
				}))
			}, e.receiveLinkedInRegStatus = function(t) {
				var r = t.origin,
					n = t.data,
					o = n.source,
					s = n.result,
					c = n.errors;
				if (r === window.location.origin && "ch-linkedin-omniauth" === o)
					if (e.popup && (window.removeEventListener("message", e.receiveLinkedInRegStatus), e.popup.close()), "success" === s) e.props.saveAnswers ? a.default.saveTempResults(Object(i.tempResultsToHash)()).then((function(t) {
						e.props.onSuccess()
					})) : e.props.onSuccess();
					else {
						console.log(c);
						var l = {
							base: c
						};
						try {
							l = JSON.parse(c)
						} catch (u) {
							console.error(u)
						}
						props.onError(), e.setState({
							errorMessage: l.base
						})
					}
			}, e
		}
		return t = p, (r = [{
			key: "componentWillUnmount",
			value: function() {
				this.popup && (console.log("unsubscribeMsg"), window.removeEventListener("message", this.receiveLinkedInRegStatus), this.popup.close())
			}
		}, {
			key: "render",
			value: function() {
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
					onClick: this.linkedInLogin,
					className: "button button--clear"
				}, o.a.createElement("span", {
					className: this.props.icon || "small-icons is-left linkedin"
				}), this.props.label || "Sign up using", " ", o.a.createElement("span", null, "LinkedIn")), this.state.errorMessage && o.a.createElement("div", null, this.state.errorMessage))
			}
		}]) && c(t.prototype, r), n && c(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), p
	}(o.a.Component)
}, , , function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(6),
		i = r(134),
		s = r(135),
		c = r(99),
		l = r(282),
		u = r(283),
		f = r(284),
		p = r(285);

	function d(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function h(e, t) {
		return (h = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function m(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = y(e);
			if (t) {
				var o = y(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return v(this, r)
		}
	}

	function v(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function y(e) {
		return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var b = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && h(e, t)
		}(y, e);
		var t, r, n, v = m(y);

		function y(e) {
			var t;
			! function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, y), (t = v.call(this, e)).setupProgress = function(e) {
				return e && e.id ? e.name ? t.props.confirmed ? "confirmed" : "unconfirmed" : "temporary" : "not_saved"
			}, t.onSaveUser = function(e) {
				localStorage.clear(), t.setState({
					user: e,
					currentProgress: t.setupProgress(e)
				}), t.closeModal(), t.openModal()
			}, t.openModal = function() {
				t.progressModal.current.open()
			}, t.closeModal = function() {
				t.progressModal.current.close()
			}, t.renderButton = function() {
				switch (t.state.currentProgress) {
					case "not_saved":
						return o.a.createElement(l.default, {
							onClick: t.openModal,
							type: t.props.type
						});
					case "temporary":
						return o.a.createElement(u.default, {
							onClick: t.openModal
						});
					case "unconfirmed":
						return o.a.createElement(f.default, {
							user: t.props.user,
							onClick: t.openModal
						});
					case "confirmed":
						return o.a.createElement(p.default, {
							user: t.props.user
						});
					default:
						return null
				}
			}, t.renderModal = function() {
				switch (t.state.currentProgress) {
					case "not_saved":
						return o.a.createElement(i.default, {
							onSave: t.onSaveUser
						});
					case "temporary":
						return o.a.createElement(s.default, {
							showResend: !0,
							user: t.state.user,
							closeModal: t.closeModal
						});
					case "unconfirmed":
						return o.a.createElement(o.a.Fragment, null, o.a.createElement(c.default, {
							user: t.props.user
						}));
					default:
						return o.a.createElement("div", null, "Progress Bubble")
				}
			}, t.progressModal = o.a.createRef();
			var r = t.props.user || localStorage.getItem("user");
			return t.state = {
				currentProgress: t.setupProgress(r),
				user: r
			}, t
		}
		return t = y, (r = [{
			key: "render",
			value: function() {
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", null, this.renderButton()), o.a.createElement(a.default, {
					ref: this.progressModal
				}, this.renderModal()))
			}
		}]) && d(t.prototype, r), n && d(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), y
	}(n.Component);
	t.default = b
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(292),
		i = r(43),
		s = r(2),
		c = r(28);

	function l() {
		l = function() {
			return e
		};
		var e = {},
			t = Object.prototype,
			r = t.hasOwnProperty,
			n = "function" == typeof Symbol ? Symbol : {},
			o = n.iterator || "@@iterator",
			a = n.asyncIterator || "@@asyncIterator",
			i = n.toStringTag || "@@toStringTag";

		function s(e, t, r) {
			return Object.defineProperty(e, t, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}), e[t]
		}
		try {
			s({}, "")
		} catch (x) {
			s = function(e, t, r) {
				return e[t] = r
			}
		}

		function c(e, t, r, n) {
			var o = t && t.prototype instanceof p ? t : p,
				a = Object.create(o.prototype),
				i = new S(n || []);
			return a._invoke = function(e, t, r) {
				var n = "suspendedStart";
				return function(o, a) {
					if ("executing" === n) throw new Error("Generator is already running");
					if ("completed" === n) {
						if ("throw" === o) throw a;
						return j()
					}
					for (r.method = o, r.arg = a;;) {
						var i = r.delegate;
						if (i) {
							var s = E(i, r);
							if (s) {
								if (s === f) continue;
								return s
							}
						}
						if ("next" === r.method) r.sent = r._sent = r.arg;
						else if ("throw" === r.method) {
							if ("suspendedStart" === n) throw n = "completed", r.arg;
							r.dispatchException(r.arg)
						} else "return" === r.method && r.abrupt("return", r.arg);
						n = "executing";
						var c = u(e, t, r);
						if ("normal" === c.type) {
							if (n = r.done ? "completed" : "suspendedYield", c.arg === f) continue;
							return {
								value: c.arg,
								done: r.done
							}
						}
						"throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
					}
				}
			}(e, r, i), a
		}

		function u(e, t, r) {
			try {
				return {
					type: "normal",
					arg: e.call(t, r)
				}
			} catch (x) {
				return {
					type: "throw",
					arg: x
				}
			}
		}
		e.wrap = c;
		var f = {};

		function p() {}

		function d() {}

		function h() {}
		var m = {};
		s(m, o, (function() {
			return this
		}));
		var v = Object.getPrototypeOf,
			y = v && v(v(T([])));
		y && y !== t && r.call(y, o) && (m = y);
		var b = h.prototype = p.prototype = Object.create(m);

		function g(e) {
			["next", "throw", "return"].forEach((function(t) {
				s(e, t, (function(e) {
					return this._invoke(t, e)
				}))
			}))
		}

		function w(e, t) {
			var n;
			this._invoke = function(o, a) {
				function i() {
					return new t((function(n, i) {
						! function n(o, a, i, s) {
							var c = u(e[o], e, a);
							if ("throw" !== c.type) {
								var l = c.arg,
									f = l.value;
								return f && "object" == typeof f && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
									n("next", e, i, s)
								}), (function(e) {
									n("throw", e, i, s)
								})) : t.resolve(f).then((function(e) {
									l.value = e, i(l)
								}), (function(e) {
									return n("throw", e, i, s)
								}))
							}
							s(c.arg)
						}(o, a, n, i)
					}))
				}
				return n = n ? n.then(i, i) : i()
			}
		}

		function E(e, t) {
			var r = e.iterator[t.method];
			if (void 0 === r) {
				if (t.delegate = null, "throw" === t.method) {
					if (e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method)) return f;
					t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
				}
				return f
			}
			var n = u(r, e.iterator, t.arg);
			if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, f;
			var o = n.arg;
			return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, f) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, f)
		}

		function _(e) {
			var t = {
				tryLoc: e[0]
			};
			1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
		}

		function O(e) {
			var t = e.completion || {};
			t.type = "normal", delete t.arg, e.completion = t
		}

		function S(e) {
			this.tryEntries = [{
				tryLoc: "root"
			}], e.forEach(_, this), this.reset(!0)
		}

		function T(e) {
			if (e) {
				var t = e[o];
				if (t) return t.call(e);
				if ("function" == typeof e.next) return e;
				if (!isNaN(e.length)) {
					var n = -1,
						a = function t() {
							for (; ++n < e.length;)
								if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
							return t.value = void 0, t.done = !0, t
						};
					return a.next = a
				}
			}
			return {
				next: j
			}
		}

		function j() {
			return {
				value: void 0,
				done: !0
			}
		}
		return d.prototype = h, s(b, "constructor", h), s(h, "constructor", d), d.displayName = s(h, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
			var t = "function" == typeof e && e.constructor;
			return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
		}, e.mark = function(e) {
			return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, i, "GeneratorFunction")), e.prototype = Object.create(b), e
		}, e.awrap = function(e) {
			return {
				__await: e
			}
		}, g(w.prototype), s(w.prototype, a, (function() {
			return this
		})), e.AsyncIterator = w, e.async = function(t, r, n, o, a) {
			void 0 === a && (a = Promise);
			var i = new w(c(t, r, n, o), a);
			return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
				return e.done ? e.value : i.next()
			}))
		}, g(b), s(b, i, "Generator"), s(b, o, (function() {
			return this
		})), s(b, "toString", (function() {
			return "[object Generator]"
		})), e.keys = function(e) {
			var t = [];
			for (var r in e) t.push(r);
			return t.reverse(),
				function r() {
					for (; t.length;) {
						var n = t.pop();
						if (n in e) return r.value = n, r.done = !1, r
					}
					return r.done = !0, r
				}
		}, e.values = T, S.prototype = {
			constructor: S,
			reset: function(e) {
				if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !e)
					for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
			},
			stop: function() {
				this.done = !0;
				var e = this.tryEntries[0].completion;
				if ("throw" === e.type) throw e.arg;
				return this.rval
			},
			dispatchException: function(e) {
				if (this.done) throw e;
				var t = this;

				function n(r, n) {
					return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
				}
				for (var o = this.tryEntries.length - 1; o >= 0; --o) {
					var a = this.tryEntries[o],
						i = a.completion;
					if ("root" === a.tryLoc) return n("end");
					if (a.tryLoc <= this.prev) {
						var s = r.call(a, "catchLoc"),
							c = r.call(a, "finallyLoc");
						if (s && c) {
							if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
							if (this.prev < a.finallyLoc) return n(a.finallyLoc)
						} else if (s) {
							if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
						} else {
							if (!c) throw new Error("try statement without catch or finally");
							if (this.prev < a.finallyLoc) return n(a.finallyLoc)
						}
					}
				}
			},
			abrupt: function(e, t) {
				for (var n = this.tryEntries.length - 1; n >= 0; --n) {
					var o = this.tryEntries[n];
					if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
						var a = o;
						break
					}
				}
				a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
				var i = a ? a.completion : {};
				return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, f) : this.complete(i)
			},
			complete: function(e, t) {
				if ("throw" === e.type) throw e.arg;
				return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
			},
			finish: function(e) {
				for (var t = this.tryEntries.length - 1; t >= 0; --t) {
					var r = this.tryEntries[t];
					if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), O(r), f
				}
			},
			catch: function(e) {
				for (var t = this.tryEntries.length - 1; t >= 0; --t) {
					var r = this.tryEntries[t];
					if (r.tryLoc === e) {
						var n = r.completion;
						if ("throw" === n.type) {
							var o = n.arg;
							O(r)
						}
						return o
					}
				}
				throw new Error("illegal catch attempt")
			},
			delegateYield: function(e, t, r) {
				return this.delegate = {
					iterator: T(e),
					resultName: t,
					nextLoc: r
				}, "next" === this.method && (this.arg = void 0), f
			}
		}, e
	}

	function u(e, t, r, n, o, a, i) {
		try {
			var s = e[a](i),
				c = s.value
		} catch (l) {
			return void r(l)
		}
		s.done ? t(c) : Promise.resolve(c).then(n, o)
	}

	function f(e) {
		return function() {
			var t = this,
				r = arguments;
			return new Promise((function(n, o) {
				var a = e.apply(t, r);

				function i(e) {
					u(a, n, o, i, s, "next", e)
				}

				function s(e) {
					u(a, n, o, i, s, "throw", e)
				}
				i(void 0)
			}))
		}
	}

	function p(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function d(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? p(Object(r), !0).forEach((function(t) {
				h(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function h(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function m(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function v(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function y(e, t) {
		return (y = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function b(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = w(e);
			if (t) {
				var o = w(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return g(this, r)
		}
	}

	function g(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function w(e) {
		return (w = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var E = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && y(e, t)
		}(p, e);
		var t, r, n, u = b(p);

		function p() {
			var e;
			m(this, p);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = u.call.apply(u, [this].concat(r))).state = {
				user: e.props.user ? d(d({}, e.props.user), {
					confirmed: !!e.props.confirmed
				}) : {},
				progress: {}
			}, e.loadProgress = f(l().mark((function e() {
				var t;
				return l().wrap((function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							return t = {}, e.next = 3, i.default.getProgress().then((function(e) {
								t = e.progress
							})).catch((function(e) {
								console.error(e)
							}));
						case 3:
							return e.abrupt("return", t);
						case 4:
						case "end":
							return e.stop()
					}
				}), e)
			}))), e.confirmationRequired = function() {
				var t = e.state.user;
				return !t.confirmed && ("finished" === t.interests_status || "finished" === t.personality_status || "finished" === t.motivators_status)
			}, e
		}
		return t = p, (r = [{
			key: "componentDidMount",
			value: function() {
				var e = this;
				this.state.user.id || this.setState({
					user: {
						interests_status: localStorage.getItem("interests_status") || "not_started",
						personality_status: localStorage.getItem("personality_status") || "not_started",
						motivators_status: localStorage.getItem("motivators_status") || "not_started",
						abstract_status: "not_started",
						numerical_status: "not_started",
						verbal_status: "not_started"
					}
				}), this.loadProgress().then((function(t) {
					var r = {};
					Object.keys(t).map((function(e) {
						var n = localStorage.getItem(e),
							o = t[e].total,
							a = t[e].answered;
						n && (a = (n = JSON.parse(n)).filter((function(e) {
							return e.answered || !!e.answer_variant_id
						})).length), r[e] = Math.round(a / o * 100)
					})), e.setState({
						progress: r
					})
				}))
			}
		}, {
			key: "render",
			value: function() {
				return o.a.createElement(s.a, {
					store: c.default
				}, o.a.createElement(a.default, {
					options: this.props.tests,
					user: this.state.user,
					progress: this.state.progress,
					confirmationRequired: this.confirmationRequired()
				}))
			}
		}]) && v(t.prototype, r), n && v(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), p
	}(n.Component);
	t.default = E
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(294),
		i = r(43),
		s = r(2),
		c = r(28);

	function l() {
		l = function() {
			return e
		};
		var e = {},
			t = Object.prototype,
			r = t.hasOwnProperty,
			n = "function" == typeof Symbol ? Symbol : {},
			o = n.iterator || "@@iterator",
			a = n.asyncIterator || "@@asyncIterator",
			i = n.toStringTag || "@@toStringTag";

		function s(e, t, r) {
			return Object.defineProperty(e, t, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}), e[t]
		}
		try {
			s({}, "")
		} catch (x) {
			s = function(e, t, r) {
				return e[t] = r
			}
		}

		function c(e, t, r, n) {
			var o = t && t.prototype instanceof p ? t : p,
				a = Object.create(o.prototype),
				i = new S(n || []);
			return a._invoke = function(e, t, r) {
				var n = "suspendedStart";
				return function(o, a) {
					if ("executing" === n) throw new Error("Generator is already running");
					if ("completed" === n) {
						if ("throw" === o) throw a;
						return j()
					}
					for (r.method = o, r.arg = a;;) {
						var i = r.delegate;
						if (i) {
							var s = E(i, r);
							if (s) {
								if (s === f) continue;
								return s
							}
						}
						if ("next" === r.method) r.sent = r._sent = r.arg;
						else if ("throw" === r.method) {
							if ("suspendedStart" === n) throw n = "completed", r.arg;
							r.dispatchException(r.arg)
						} else "return" === r.method && r.abrupt("return", r.arg);
						n = "executing";
						var c = u(e, t, r);
						if ("normal" === c.type) {
							if (n = r.done ? "completed" : "suspendedYield", c.arg === f) continue;
							return {
								value: c.arg,
								done: r.done
							}
						}
						"throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
					}
				}
			}(e, r, i), a
		}

		function u(e, t, r) {
			try {
				return {
					type: "normal",
					arg: e.call(t, r)
				}
			} catch (x) {
				return {
					type: "throw",
					arg: x
				}
			}
		}
		e.wrap = c;
		var f = {};

		function p() {}

		function d() {}

		function h() {}
		var m = {};
		s(m, o, (function() {
			return this
		}));
		var v = Object.getPrototypeOf,
			y = v && v(v(T([])));
		y && y !== t && r.call(y, o) && (m = y);
		var b = h.prototype = p.prototype = Object.create(m);

		function g(e) {
			["next", "throw", "return"].forEach((function(t) {
				s(e, t, (function(e) {
					return this._invoke(t, e)
				}))
			}))
		}

		function w(e, t) {
			var n;
			this._invoke = function(o, a) {
				function i() {
					return new t((function(n, i) {
						! function n(o, a, i, s) {
							var c = u(e[o], e, a);
							if ("throw" !== c.type) {
								var l = c.arg,
									f = l.value;
								return f && "object" == typeof f && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
									n("next", e, i, s)
								}), (function(e) {
									n("throw", e, i, s)
								})) : t.resolve(f).then((function(e) {
									l.value = e, i(l)
								}), (function(e) {
									return n("throw", e, i, s)
								}))
							}
							s(c.arg)
						}(o, a, n, i)
					}))
				}
				return n = n ? n.then(i, i) : i()
			}
		}

		function E(e, t) {
			var r = e.iterator[t.method];
			if (void 0 === r) {
				if (t.delegate = null, "throw" === t.method) {
					if (e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method)) return f;
					t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
				}
				return f
			}
			var n = u(r, e.iterator, t.arg);
			if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, f;
			var o = n.arg;
			return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, f) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, f)
		}

		function _(e) {
			var t = {
				tryLoc: e[0]
			};
			1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
		}

		function O(e) {
			var t = e.completion || {};
			t.type = "normal", delete t.arg, e.completion = t
		}

		function S(e) {
			this.tryEntries = [{
				tryLoc: "root"
			}], e.forEach(_, this), this.reset(!0)
		}

		function T(e) {
			if (e) {
				var t = e[o];
				if (t) return t.call(e);
				if ("function" == typeof e.next) return e;
				if (!isNaN(e.length)) {
					var n = -1,
						a = function t() {
							for (; ++n < e.length;)
								if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
							return t.value = void 0, t.done = !0, t
						};
					return a.next = a
				}
			}
			return {
				next: j
			}
		}

		function j() {
			return {
				value: void 0,
				done: !0
			}
		}
		return d.prototype = h, s(b, "constructor", h), s(h, "constructor", d), d.displayName = s(h, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
			var t = "function" == typeof e && e.constructor;
			return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
		}, e.mark = function(e) {
			return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, i, "GeneratorFunction")), e.prototype = Object.create(b), e
		}, e.awrap = function(e) {
			return {
				__await: e
			}
		}, g(w.prototype), s(w.prototype, a, (function() {
			return this
		})), e.AsyncIterator = w, e.async = function(t, r, n, o, a) {
			void 0 === a && (a = Promise);
			var i = new w(c(t, r, n, o), a);
			return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
				return e.done ? e.value : i.next()
			}))
		}, g(b), s(b, i, "Generator"), s(b, o, (function() {
			return this
		})), s(b, "toString", (function() {
			return "[object Generator]"
		})), e.keys = function(e) {
			var t = [];
			for (var r in e) t.push(r);
			return t.reverse(),
				function r() {
					for (; t.length;) {
						var n = t.pop();
						if (n in e) return r.value = n, r.done = !1, r
					}
					return r.done = !0, r
				}
		}, e.values = T, S.prototype = {
			constructor: S,
			reset: function(e) {
				if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !e)
					for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
			},
			stop: function() {
				this.done = !0;
				var e = this.tryEntries[0].completion;
				if ("throw" === e.type) throw e.arg;
				return this.rval
			},
			dispatchException: function(e) {
				if (this.done) throw e;
				var t = this;

				function n(r, n) {
					return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
				}
				for (var o = this.tryEntries.length - 1; o >= 0; --o) {
					var a = this.tryEntries[o],
						i = a.completion;
					if ("root" === a.tryLoc) return n("end");
					if (a.tryLoc <= this.prev) {
						var s = r.call(a, "catchLoc"),
							c = r.call(a, "finallyLoc");
						if (s && c) {
							if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
							if (this.prev < a.finallyLoc) return n(a.finallyLoc)
						} else if (s) {
							if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
						} else {
							if (!c) throw new Error("try statement without catch or finally");
							if (this.prev < a.finallyLoc) return n(a.finallyLoc)
						}
					}
				}
			},
			abrupt: function(e, t) {
				for (var n = this.tryEntries.length - 1; n >= 0; --n) {
					var o = this.tryEntries[n];
					if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
						var a = o;
						break
					}
				}
				a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
				var i = a ? a.completion : {};
				return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, f) : this.complete(i)
			},
			complete: function(e, t) {
				if ("throw" === e.type) throw e.arg;
				return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
			},
			finish: function(e) {
				for (var t = this.tryEntries.length - 1; t >= 0; --t) {
					var r = this.tryEntries[t];
					if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), O(r), f
				}
			},
			catch: function(e) {
				for (var t = this.tryEntries.length - 1; t >= 0; --t) {
					var r = this.tryEntries[t];
					if (r.tryLoc === e) {
						var n = r.completion;
						if ("throw" === n.type) {
							var o = n.arg;
							O(r)
						}
						return o
					}
				}
				throw new Error("illegal catch attempt")
			},
			delegateYield: function(e, t, r) {
				return this.delegate = {
					iterator: T(e),
					resultName: t,
					nextLoc: r
				}, "next" === this.method && (this.arg = void 0), f
			}
		}, e
	}

	function u(e, t, r, n, o, a, i) {
		try {
			var s = e[a](i),
				c = s.value
		} catch (l) {
			return void r(l)
		}
		s.done ? t(c) : Promise.resolve(c).then(n, o)
	}

	function f(e) {
		return function() {
			var t = this,
				r = arguments;
			return new Promise((function(n, o) {
				var a = e.apply(t, r);

				function i(e) {
					u(a, n, o, i, s, "next", e)
				}

				function s(e) {
					u(a, n, o, i, s, "throw", e)
				}
				i(void 0)
			}))
		}
	}

	function p(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function d(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? p(Object(r), !0).forEach((function(t) {
				h(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function h(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function m(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function v(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function y(e, t) {
		return (y = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function b(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = w(e);
			if (t) {
				var o = w(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return g(this, r)
		}
	}

	function g(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function w(e) {
		return (w = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var E = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && y(e, t)
		}(p, e);
		var t, r, n, u = b(p);

		function p() {
			var e;
			m(this, p);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = u.call.apply(u, [this].concat(r))).state = {
				user: e.props.user ? d(d({}, e.props.user), {
					confirmed: !!e.props.confirmed
				}) : {},
				progress: {}
			}, e.loadProgress = f(l().mark((function e() {
				var t;
				return l().wrap((function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							return t = {}, e.next = 3, i.default.getProgress().then((function(e) {
								t = e.progress
							})).catch((function(e) {
								console.error(e)
							}));
						case 3:
							return e.abrupt("return", t);
						case 4:
						case "end":
							return e.stop()
					}
				}), e)
			}))), e
		}
		return t = p, (r = [{
			key: "componentDidMount",
			value: function() {
				var e = this;
				if (!this.state.user.id) {
					var t = localStorage.getItem("interests_status") || "not_started";
					this.setState({
						user: {
							interests_status: t,
							personality_status: "not_started",
							motivators_status: "not_started",
							abstract_status: "not_started",
							numerical_status: "not_started",
							verbal_status: "not_started"
						}
					})
				}
				this.loadProgress().then((function(t) {
					var r = {};
					Object.keys(t).map((function(e) {
						var n = localStorage.getItem(e),
							o = t[e].total,
							a = t[e].answered;
						n && (a = (n = JSON.parse(n)).filter((function(e) {
							return e.answered || !!e.answer_variant_id
						})).length), r[e] = Math.round(a / o * 100)
					})), e.setState({
						progress: r
					})
				}))
			}
		}, {
			key: "render",
			value: function() {
				return o.a.createElement(s.a, {
					store: c.default
				}, o.a.createElement(a.default, {
					options: this.props.tests,
					user: this.state.user,
					progress: this.state.progress
				}))
			}
		}]) && v(t.prototype, r), n && v(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), p
	}(n.Component);
	t.default = E
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return c
	}));
	var n = r(0),
		o = r.n(n),
		a = r(71),
		i = r.n(a);
	r(358);

	function s(e) {
		return ["rgba(255, 55, 55, 0.8)", "rgba(255, 55, 55, 0.8)", "rgba(237, 72, 60, 0.8)", "rgba(218, 89, 64, 0.8)", "rgba(200, 105, 69, 0.8)", "rgba(181, 122, 74, 0.8)", "rgba(163, 139, 78, 0.8)", "rgba(144, 156, 83, 0.8)", "rgba(126, 172, 88, 0.8)", "rgba(107, 189, 92, 0.8)", "rgba(89, 206, 97, 0.8)"][parseInt(e / 10)]
	}

	function c(e) {
		var t = Object(n.useRef)(null);
		return Object(n.useEffect)((function() {
			var r = e.collection.map((function(e) {
				return {
					x: e.name,
					y: e.score,
					bg: s(e.score)
				}
			}));
			e.hiddenScores.length > 0 && (e.hiddenScores.map((function(e, t) {
				r.push({
					x: "hiddenScore".concat(t),
					y: e.score
				})
			})), r.length < e.totalOptionsCount && Array.from(Array(e.totalOptionsCount - r.length)).forEach((function(e, t) {
				r.push({
					x: "hiddenScore".concat(t, "a"),
					y: 0,
					bg: s(0)
				})
			})));
			var n = (r = r.reverse()).map((function(e) {
					return e.x
				})),
				o = r.map((function(e) {
					return e.bg
				}));
			new i.a(t.current.getContext("2d"), {
				type: "bar",
				defaultFontFamily: "Sofia-Pro-Regular",
				label: "",
				data: {
					labels: n,
					datasets: [{
						data: r,
						backgroundColor: o,
						borderColor: o
					}]
				},
				options: {
					responsive: !0,
					animation: {
						easing: "easeInOutQuad",
						duration: 520
					},
					scales: {
						xAxes: [{
							ticks: {
								fontFamily: "Sofia-Pro-Regular",
								callback: function(e, t, r) {
									return "".concat(e.includes("hiddenScore") ? "" : e)
								}
							},
							gridLines: {
								fontFamily: "Sofia-Pro-Regular",
								color: "rgba(10,30,46, 0.05)",
								lineWidth: 1,
								display: !1,
								zeroLineColor: "rgba(10,30,46, 0.2)",
								drawBorder: !1,
								tickMarkLength: 5
							}
						}],
						yAxes: [{
							ticks: {
								min: 0,
								max: 100,
								stepSize: 10,
								callback: function(e, t, r) {
									return "".concat(e, "%")
								}
							},
							gridLines: {
								fontFamily: "Sofia-Pro-Regular",
								color: "rgba(10,30,46, 0.05)",
								lineWidth: 1,
								display: !0,
								zeroLineColor: "rgba(10,30,46, 0.2)",
								tickMarkLength: 0
							}
						}]
					},
					legend: {
						display: !1
					},
					lineHeightAnnotation: {
						color: "#fff",
						always: !1,
						hover: !1
					}
				}
			})
		}), []), o.a.createElement("div", {
			className: "line-chart"
		}, o.a.createElement("div", {
			className: "aspect-ratio"
		}, o.a.createElement("canvas", {
			id: "myChart",
			ref: t
		})))
	}
}, , , , function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return S
	}));
	var n = r(0),
		o = r.n(n),
		a = r(1),
		i = r(149),
		s = r(42),
		c = r(3),
		l = r(85),
		u = r.n(l),
		f = r(213),
		p = r.n(f),
		d = r(214),
		h = r.n(d),
		m = r(215),
		v = r.n(m),
		y = r(19);

	function b(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function g(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function w(e, t) {
		return (w = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function E(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = O(e);
			if (t) {
				var o = O(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return _(this, r)
		}
	}

	function _(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function O(e) {
		return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var S = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && w(e, t)
		}(d, e);
		var t, r, l, f = E(d);

		function d() {
			var e;
			b(this, d);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = f.call.apply(f, [this].concat(r))).state = {
				isLoading: !1,
				feedback: {
					comment: "",
					rate: e.props.rate,
					skip_coupon_code: e.props.hideCoupon,
					errors: {}
				}
			}, e.invisibleCaptcha = o.a.createRef(), e.submit = function() {
				e.setState({
					isLoading: !0
				});
				var t = {},
					r = e.state.feedback;
				if (r.comment || (t.comment = "Comment can't be blank"), r.rate || (t.rate = "Select the rate to proceed"), Object.keys(t).length) return r.errors = t, void e.setState({
					feedback: r,
					isLoading: !1
				});
				try {
					Object(y.disableCaptchaForTest)() ? (console.log("captcha disabled"), e.send("valid")) : window.grecaptcha && e.invisibleCaptcha.current.execute()
				} catch (n) {
					console.warn("something is wrong with invisible captcha...."), console.log(n), e.setState({
						isLoading: !1
					})
				}
			}, e.send = function(t) {
				e.invisibleCaptcha.current.reset(), i.default.send(e.state.feedback, t, e.props.onSuccess, (function() {
					return e.setState({
						isLoading: !1
					})
				}))
			}, e.onChange = function(t, r) {
				var n = e.state.feedback;
				n[r] = t, n.errors[r] = "", "rate" === r && e.props.onRateChange(t), e.setState({
					feedback: n
				})
			}, e.rateSelector = function(t, r, n) {
				return o.a.createElement("div", {
					className: "feedback__rate".concat(t === e.state.feedback.rate ? " selected" : ""),
					onClick: function() {
						return e.onChange(t, "rate")
					}
				}, o.a.createElement("div", {
					className: "feedback__rate-circle"
				}, o.a.createElement("img", {
					src: n,
					alt: r,
					width: "65",
					height: "65"
				})), o.a.createElement("p", {
					className: "feedback__rate-txt"
				}, r))
			}, e
		}
		return t = d, (r = [{
			key: "render",
			value: function() {
				var e = this;
				console.log("renderRateScreen", this.props.rate);
				var t = this.state.feedback;
				return o.a.createElement(n.Fragment, null, this.state.isLoading ? o.a.createElement(a.Loader, null) : null, o.a.createElement("img", {
					src: u.a,
					alt: "Career Hunter",
					width: "170",
					height: "19"
				}), o.a.createElement("h3", {
					className: "feedback__msg"
				}, "Leave your honest feedback"), this.rateSelector("poor_rate", "Poor", p.a), this.rateSelector("average_rate", "Average", h.a), this.rateSelector("great_rate", "Great", v.a), o.a.createElement("div", null, o.a.createElement(a.ErrorMessage, {
					message: t.errors.rate
				})), o.a.createElement("div", {
					className: "feedback__textarea"
				}, o.a.createElement(a.TextareaField, {
					name: "feedback",
					className: "vertical-resize",
					placeholder: "Let us know what you think about your overall experience, including your test results and career matches.",
					rows: 5,
					onChange: function(t) {
						return e.onChange(t.target.value, "comment")
					},
					value: t.comment,
					errorMessage: t.errors.comment
				})), o.a.createElement(c.default, {
					className: "button--green--large",
					onClick: this.submit
				}, "Submit Feedback ", o.a.createElement("span", {
					className: "small-icons next-arrow-white-l"
				})), this.props.hideCoupon ? o.a.createElement("p", {
					className: "feedback__coupon"
				}) : o.a.createElement("p", {
					className: "feedback__coupon"
				}, "Claim your thank you coupon for ", o.a.createElement("b", null, "30% OFF"), " your next test or access purchase, which can even be shared to your friends or family."), o.a.createElement("p", {
					className: "feedback__tip"
				}, o.a.createElement("span", {
					className: "small-icons blue-off-tooltip"
				}), " ", o.a.createElement("span", {
					className: "feedback__tip-txt"
				}, " Your feedback will help us improve our services and will be kept in the strictest confidence.")), o.a.createElement(s.default, {
					ref: this.invisibleCaptcha,
					sitekey: this.props.recaptchaKey,
					verifyCallback: this.send
				}))
			}
		}]) && g(t.prototype, r), l && g(t, l), Object.defineProperty(t, "prototype", {
			writable: !1
		}), d
	}(n.Component)
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return l
	}));
	var n = r(0),
		o = r.n(n),
		a = r(3),
		i = (r(597), r(598), r(410)),
		s = r.n(i),
		c = (r(599), r(265));

	function l(e) {
		var t = function() {
			return e.coupon && o.a.createElement("div", {
				className: "feedback__coupon-box"
			}, o.a.createElement("div", {
				className: "feedback__content"
			}, o.a.createElement("div", {
				className: "feedback__left-area"
			}, o.a.createElement("p", {
				className: "feedback__coupon-txt"
			}, "Here is your unique thank you coupon for ", o.a.createElement("span", null, "30% OFF"), " your next purchase at CareerHunter."), o.a.createElement("p", {
				className: "feedback__small-txt"
			}, o.a.createElement("span", {
				className: "small-icons blue-off-tooltip"
			}), "Also sent to your email and is active for 1 year.")), o.a.createElement("div", {
				className: "feedback__right-area"
			}, o.a.createElement("div", {
				className: "feedback__copy-coupon"
			}, o.a.createElement(c.default, {
				hoverButton: !0,
				name: "couponCode",
				value: e.coupon,
				msg: "Coupon code copied to clipboard"
			})))))
		};
		return console.log(e), "poor_rate" === e.rate ? o.a.createElement(n.Fragment, null, o.a.createElement("h3", {
			className: "feedback__msg feedback__msg--with-space"
		}, "Thanks for your feedback!"), o.a.createElement("p", {
			className: "feedback__txt"
		}, "We take any negative comments on board to improve the CareerHunter testing experience on upcoming, future updates."), o.a.createElement("p", {
			className: "feedback__contact"
		}, "See our ", o.a.createElement("a", {
			href: "/faq"
		}, "FAQs"), " or ", o.a.createElement("a", {
			href: "/contact"
		}, "Contact"), " us if you have any questions or need help."), t()) : o.a.createElement(n.Fragment, null, "`", o.a.createElement("div", {
			className: "large-icon blue-clap-icon mar-auto"
		}), o.a.createElement("h3", {
			className: "feedback__msg feedback__msg--with-space"
		}, "Feedback sent!"), e.full_access ? o.a.createElement(o.a.Fragment, null, o.a.createElement("p", {
			className: "feedback__txt"
		}, "Your comments are truly appreciated. We use your feedback to improve the testing experience for everyone."), o.a.createElement("p", {
			className: "feedback__txt feedback__txt--bold"
		}, "Care to leave us a review?"), o.a.createElement(a.default, {
			href: "https://www.trustpilot.com/review/www.careerhunter.io",
			hrefOpts: {
				target: "_blank"
			},
			color: "white-img"
		}, o.a.createElement("img", {
			src: s.a,
			alt: "Trustpilot",
			width: "107",
			height: "27"
		}))) : o.a.createElement(n.Fragment, null, o.a.createElement("p", {
			className: "feedback__txt"
		}, "Ready to continue testing and get your matches?"), o.a.createElement("ul", {
			className: "tick-list"
		}, o.a.createElement("li", null, "Access all six tests, full test results and insights "), o.a.createElement("li", null, "Reveal your final career matches based on all your results"), o.a.createElement("li", null, "Receive a complete and personalized career report")), o.a.createElement(a.default, {
			href: "/upgrade",
			className: "button--green--large"
		}, "Get Access", o.a.createElement("span", {
			className: "small-icons next-arrow-white-l"
		}))), t())
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return s
	}));
	var n = r(0),
		o = r.n(n),
		a = r(6),
		i = r(3);

	function s(e) {
		var t = Object(n.useRef)(null),
			r = Object(n.useRef)(null),
			s = function(e) {
				e.preventDefault(), t.current.select(), document.execCommand("copy"), e.target.focus(), r.current.open()
			};
		return o.a.createElement(n.Fragment, null, o.a.createElement("input", {
			ref: t,
			type: "text",
			name: e.name,
			value: e.value,
			readOnly: !0
		}), e.hoverButton ? o.a.createElement(i.default, {
			onClick: s
		}, "Copy") : o.a.createElement("a", {
			className: "button cv-coupon-button",
			onClick: s
		}, "Copy"), o.a.createElement(a.default, {
			ref: r,
			className: "add-animation "
		}, o.a.createElement("div", {
			className: "grid-x align-center"
		}, o.a.createElement("div", {
			className: "cell"
		}, o.a.createElement("h3", {
			className: "cv-writing-copied--title"
		}, e.msg)), o.a.createElement("div", {
			className: "cell mar-top-20 text-center"
		}, o.a.createElement(i.default, {
			classNames: "button--big",
			color: "green",
			onClick: function() {
				return r.current.close()
			}
		}, "Close")))))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return l
	}));
	var n = r(0),
		o = r.n(n),
		a = r(267),
		i = r(9);

	function s(e, t) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) || function(e, t) {
			var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
			if (null == r) return;
			var n, o, a = [],
				i = !0,
				s = !1;
			try {
				for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
			} catch (c) {
				s = !0, o = c
			} finally {
				try {
					i || null == r.return || r.return()
				} finally {
					if (s) throw o
				}
			}
			return a
		}(e, t) || function(e, t) {
			if (!e) return;
			if ("string" === typeof e) return c(e, t);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			"Object" === r && e.constructor && (r = e.constructor.name);
			if ("Map" === r || "Set" === r) return Array.from(e);
			if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(e, t)
		}(e, t) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function c(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
		return n
	}

	function l(e) {
		var t = s(Object(n.useState)(null), 2),
			r = t[0],
			c = t[1];
		return Object(n.useEffect)((function() {
			a.default.getPromo(e.banner_code_prefix).then((function(e) {
				e && e.content && c(e)
			})).catch((function(e) {
				console.log(e)
			}))
		}), []), r ? o.a.createElement(i.FadeInSection, null, o.a.createElement("div", {
			className: "grid-container no-padding-top full-width"
		}, o.a.createElement("div", {
			dangerouslySetInnerHTML: {
				__html: r.content
			}
		}))) : null
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return a
	}));
	var n = r(1);

	function o(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}
	var a = function() {
		function e() {
			! function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, e)
		}
		var t, r, a;
		return t = e, a = [{
			key: "getPromo",
			value: function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = "/api/ad_banners/promo";
				return e && (t = "".concat(t, "?banner_code_prefix=").concat(e)), fetch(n.actions.getData(t)).then(n.actions.status).then(n.actions.json)
			}
		}], (r = null) && o(t.prototype, r), a && o(t, a), Object.defineProperty(t, "prototype", {
			writable: !1
		}), e
	}()
}, , , , function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return p
	}));
	var n = r(0),
		o = r.n(n),
		a = r(3);

	function i(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function s(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function c(e, t) {
		return (c = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function l(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = f(e);
			if (t) {
				var o = f(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return u(this, r)
		}
	}

	function u(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function f(e) {
		return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var p = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && c(e, t)
		}(f, e);
		var t, r, n, u = l(f);

		function f() {
			var e;
			i(this, f);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = u.call.apply(u, [this].concat(r))).renderButton = function() {
				var t = e.props.user,
					r = t ? t.interests_status : localStorage.getItem("interests_status");
				r || (r = "not_started"), e.props.deleted && (r = "not_started");
				var n = t ? [t.interests_status, t.personality_status, t.motivators_status, t.abstract_status, t.verbal_status, t.numerical_status] : [],
					i = t ? n.includes("started") || n.includes("finished") : "not_started" !== r,
					s = !!t && (!n.includes("started") && !n.includes("not_started")),
					c = !!t && t.full_access,
					l = {};
				e.props.className && (l.className = e.props.className);
				var u = o.a.createElement("div", {
						className: "buttons-line"
					}, o.a.createElement(a.default, Object.assign({
						className: "button--menu",
						href: "/get-access"
					}, l), "Get Access")),
					f = (a.default, Object.assign({
						className: "button--menu",
						href: "/tests"
					}, l), i ? o.a.Fragment : o.a.Fragment, o.a.createElement(a.default, Object.assign({
						className: "button--menu",
						href: "finished" === r ? "/dashboard" : "/tests"
					}, l), i ? o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
						className: "hideText"
					}, "Continue Testing"), " ", o.a.createElement("span", {
						className: "hideForMediumUp"
					}, "Continue")) : "Start testing")),
					p = o.a.createElement(a.default, Object.assign({
						className: "button--menu",
						href: "/checkout"
					}, l), "Buy Access"),
					d = o.a.createElement("span", {
						className: "padR15"
					});
				switch (!0) {
					case e.props.upgrade_page:
						return p;
					case c && !s:
						return f;
					case c && s:
						return d;
					case "finished" !== r:
					case "finished" === r && !c:
						return u;
					default:
						return d
				}
			}, e
		}
		return t = f, (r = [{
			key: "render",
			value: function() {
				return this.renderButton()
			}
		}]) && s(t.prototype, r), n && s(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), f
	}(o.a.Component)
}, , , , function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(52),
		i = r.n(a),
		s = r(37),
		c = r(64),
		l = r(51),
		u = r(88);

	function f(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function p(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? f(Object(r), !0).forEach((function(t) {
				d(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function d(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function h() {
		h = function() {
			return e
		};
		var e = {},
			t = Object.prototype,
			r = t.hasOwnProperty,
			n = "function" == typeof Symbol ? Symbol : {},
			o = n.iterator || "@@iterator",
			a = n.asyncIterator || "@@asyncIterator",
			i = n.toStringTag || "@@toStringTag";

		function s(e, t, r) {
			return Object.defineProperty(e, t, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}), e[t]
		}
		try {
			s({}, "")
		} catch (x) {
			s = function(e, t, r) {
				return e[t] = r
			}
		}

		function c(e, t, r, n) {
			var o = t && t.prototype instanceof f ? t : f,
				a = Object.create(o.prototype),
				i = new S(n || []);
			return a._invoke = function(e, t, r) {
				var n = "suspendedStart";
				return function(o, a) {
					if ("executing" === n) throw new Error("Generator is already running");
					if ("completed" === n) {
						if ("throw" === o) throw a;
						return j()
					}
					for (r.method = o, r.arg = a;;) {
						var i = r.delegate;
						if (i) {
							var s = E(i, r);
							if (s) {
								if (s === u) continue;
								return s
							}
						}
						if ("next" === r.method) r.sent = r._sent = r.arg;
						else if ("throw" === r.method) {
							if ("suspendedStart" === n) throw n = "completed", r.arg;
							r.dispatchException(r.arg)
						} else "return" === r.method && r.abrupt("return", r.arg);
						n = "executing";
						var c = l(e, t, r);
						if ("normal" === c.type) {
							if (n = r.done ? "completed" : "suspendedYield", c.arg === u) continue;
							return {
								value: c.arg,
								done: r.done
							}
						}
						"throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
					}
				}
			}(e, r, i), a
		}

		function l(e, t, r) {
			try {
				return {
					type: "normal",
					arg: e.call(t, r)
				}
			} catch (x) {
				return {
					type: "throw",
					arg: x
				}
			}
		}
		e.wrap = c;
		var u = {};

		function f() {}

		function p() {}

		function d() {}
		var m = {};
		s(m, o, (function() {
			return this
		}));
		var v = Object.getPrototypeOf,
			y = v && v(v(T([])));
		y && y !== t && r.call(y, o) && (m = y);
		var b = d.prototype = f.prototype = Object.create(m);

		function g(e) {
			["next", "throw", "return"].forEach((function(t) {
				s(e, t, (function(e) {
					return this._invoke(t, e)
				}))
			}))
		}

		function w(e, t) {
			var n;
			this._invoke = function(o, a) {
				function i() {
					return new t((function(n, i) {
						! function n(o, a, i, s) {
							var c = l(e[o], e, a);
							if ("throw" !== c.type) {
								var u = c.arg,
									f = u.value;
								return f && "object" == typeof f && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
									n("next", e, i, s)
								}), (function(e) {
									n("throw", e, i, s)
								})) : t.resolve(f).then((function(e) {
									u.value = e, i(u)
								}), (function(e) {
									return n("throw", e, i, s)
								}))
							}
							s(c.arg)
						}(o, a, n, i)
					}))
				}
				return n = n ? n.then(i, i) : i()
			}
		}

		function E(e, t) {
			var r = e.iterator[t.method];
			if (void 0 === r) {
				if (t.delegate = null, "throw" === t.method) {
					if (e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method)) return u;
					t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
				}
				return u
			}
			var n = l(r, e.iterator, t.arg);
			if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
			var o = n.arg;
			return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
		}

		function _(e) {
			var t = {
				tryLoc: e[0]
			};
			1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
		}

		function O(e) {
			var t = e.completion || {};
			t.type = "normal", delete t.arg, e.completion = t
		}

		function S(e) {
			this.tryEntries = [{
				tryLoc: "root"
			}], e.forEach(_, this), this.reset(!0)
		}

		function T(e) {
			if (e) {
				var t = e[o];
				if (t) return t.call(e);
				if ("function" == typeof e.next) return e;
				if (!isNaN(e.length)) {
					var n = -1,
						a = function t() {
							for (; ++n < e.length;)
								if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
							return t.value = void 0, t.done = !0, t
						};
					return a.next = a
				}
			}
			return {
				next: j
			}
		}

		function j() {
			return {
				value: void 0,
				done: !0
			}
		}
		return p.prototype = d, s(b, "constructor", d), s(d, "constructor", p), p.displayName = s(d, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
			var t = "function" == typeof e && e.constructor;
			return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
		}, e.mark = function(e) {
			return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, s(e, i, "GeneratorFunction")), e.prototype = Object.create(b), e
		}, e.awrap = function(e) {
			return {
				__await: e
			}
		}, g(w.prototype), s(w.prototype, a, (function() {
			return this
		})), e.AsyncIterator = w, e.async = function(t, r, n, o, a) {
			void 0 === a && (a = Promise);
			var i = new w(c(t, r, n, o), a);
			return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
				return e.done ? e.value : i.next()
			}))
		}, g(b), s(b, i, "Generator"), s(b, o, (function() {
			return this
		})), s(b, "toString", (function() {
			return "[object Generator]"
		})), e.keys = function(e) {
			var t = [];
			for (var r in e) t.push(r);
			return t.reverse(),
				function r() {
					for (; t.length;) {
						var n = t.pop();
						if (n in e) return r.value = n, r.done = !1, r
					}
					return r.done = !0, r
				}
		}, e.values = T, S.prototype = {
			constructor: S,
			reset: function(e) {
				if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !e)
					for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
			},
			stop: function() {
				this.done = !0;
				var e = this.tryEntries[0].completion;
				if ("throw" === e.type) throw e.arg;
				return this.rval
			},
			dispatchException: function(e) {
				if (this.done) throw e;
				var t = this;

				function n(r, n) {
					return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
				}
				for (var o = this.tryEntries.length - 1; o >= 0; --o) {
					var a = this.tryEntries[o],
						i = a.completion;
					if ("root" === a.tryLoc) return n("end");
					if (a.tryLoc <= this.prev) {
						var s = r.call(a, "catchLoc"),
							c = r.call(a, "finallyLoc");
						if (s && c) {
							if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
							if (this.prev < a.finallyLoc) return n(a.finallyLoc)
						} else if (s) {
							if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
						} else {
							if (!c) throw new Error("try statement without catch or finally");
							if (this.prev < a.finallyLoc) return n(a.finallyLoc)
						}
					}
				}
			},
			abrupt: function(e, t) {
				for (var n = this.tryEntries.length - 1; n >= 0; --n) {
					var o = this.tryEntries[n];
					if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
						var a = o;
						break
					}
				}
				a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
				var i = a ? a.completion : {};
				return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(i)
			},
			complete: function(e, t) {
				if ("throw" === e.type) throw e.arg;
				return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
			},
			finish: function(e) {
				for (var t = this.tryEntries.length - 1; t >= 0; --t) {
					var r = this.tryEntries[t];
					if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), O(r), u
				}
			},
			catch: function(e) {
				for (var t = this.tryEntries.length - 1; t >= 0; --t) {
					var r = this.tryEntries[t];
					if (r.tryLoc === e) {
						var n = r.completion;
						if ("throw" === n.type) {
							var o = n.arg;
							O(r)
						}
						return o
					}
				}
				throw new Error("illegal catch attempt")
			},
			delegateYield: function(e, t, r) {
				return this.delegate = {
					iterator: T(e),
					resultName: t,
					nextLoc: r
				}, "next" === this.method && (this.arg = void 0), u
			}
		}, e
	}

	function m(e, t, r, n, o, a, i) {
		try {
			var s = e[a](i),
				c = s.value
		} catch (l) {
			return void r(l)
		}
		s.done ? t(c) : Promise.resolve(c).then(n, o)
	}

	function v(e) {
		return function() {
			var t = this,
				r = arguments;
			return new Promise((function(n, o) {
				var a = e.apply(t, r);

				function i(e) {
					m(a, n, o, i, s, "next", e)
				}

				function s(e) {
					m(a, n, o, i, s, "throw", e)
				}
				i(void 0)
			}))
		}
	}

	function y(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function b(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function g(e, t) {
		return (g = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function w(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = _(e);
			if (t) {
				var o = _(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return E(this, r)
		}
	}

	function E(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function _(e) {
		return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var O = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && g(e, t)
		}(c, e);
		var t, r, n, a = w(c);

		function c() {
			var e;
			y(this, c);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = a.call.apply(a, [this].concat(r))).state = {
				completed: e.props.completed || e.props.user && e.props.user.full_access && "finished" === e.props.user.interests_status && "finished" === e.props.user.personality_status && "finished" === e.props.user.motivators_status && "finished" === e.props.user.abstract_status && "finished" === e.props.user.numerical_status && "finished" === e.props.user.verbal_status,
				careers: []
			}, e.setCareers = function(t) {
				e.setState({
					careers: t
				})
			}, e.loadCollection = v(h().mark((function t() {
				var r;
				return h().wrap((function(t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							if (r = [], !e.state.completed) {
								t.next = 6;
								break
							}
							return t.next = 4, s.default.searchCareers(e.props.options || {}).then((function(e) {
								r = e.career_scores
							})).catch((function(e) {
								console.log(e)
							}));
						case 4:
							t.next = 9;
							break;
						case 6:
							return t.next = 8, s.default.featured(!0).then((function(e) {
								r = e.career_scores
							})).catch((function(e) {
								console.log(e)
							}));
						case 8:
							r = e.setRandomScores(i()(r));
						case 9:
							return r = r.slice(0, e.props.limit || 4), t.abrupt("return", r);
						case 11:
						case "end":
							return t.stop()
					}
				}), t)
			}))), e.setRandomScores = function(e) {
				return e.map((function(e) {
					var t = e.score > 0 ? e.score : Math.floor(100 * Math.random());
					return p(p({}, e), {
						score: t
					})
				}))
			}, e
		}
		return t = c, (r = [{
			key: "componentDidMount",
			value: function() {
				var e = this;
				this.props.careers ? this.setCareers(this.props.careers) : this.loadCollection().then((function(t) {
					e.setCareers(t)
				}))
			}
		}, {
			key: "render",
			value: function() {
				var e = this;
				return 0 === this.state.careers.length ? null : o.a.createElement("div", {
					className: "grid-x card__equalizer"
				}, this.state.careers.map((function(t, r) {
					return o.a.createElement("div", {
						className: "large-3 medium-6 small-12 cell card__equal-items show-for-large",
						key: "careerDahsboardA".concat(r)
					}, o.a.createElement(l.default, {
						item: t,
						hideScore: !e.state.completed
					}))
				})), o.a.createElement("div", {
					className: "small-12 cell hide-for-large"
				}, o.a.createElement("div", {
					className: "careers-slider"
				}, o.a.createElement(u.default, {
					items: this.state.careers,
					itemProps: {
						hideScore: !this.state.completed
					},
					component: l.default
				}))))
			}
		}]) && b(t.prototype, r), n && b(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), c
	}(c.default);
	t.default = O
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(52),
		i = r.n(a),
		s = r(37),
		c = r(64),
		l = r(51),
		u = r(88);

	function f(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function p(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? f(Object(r), !0).forEach((function(t) {
				d(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function d(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function h() {
		h = function() {
			return e
		};
		var e = {},
			t = Object.prototype,
			r = t.hasOwnProperty,
			n = "function" == typeof Symbol ? Symbol : {},
			o = n.iterator || "@@iterator",
			a = n.asyncIterator || "@@asyncIterator",
			i = n.toStringTag || "@@toStringTag";

		function s(e, t, r) {
			return Object.defineProperty(e, t, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}), e[t]
		}
		try {
			s({}, "")
		} catch (x) {
			s = function(e, t, r) {
				return e[t] = r
			}
		}

		function c(e, t, r, n) {
			var o = t && t.prototype instanceof f ? t : f,
				a = Object.create(o.prototype),
				i = new S(n || []);
			return a._invoke = function(e, t, r) {
				var n = "suspendedStart";
				return function(o, a) {
					if ("executing" === n) throw new Error("Generator is already running");
					if ("completed" === n) {
						if ("throw" === o) throw a;
						return j()
					}
					for (r.method = o, r.arg = a;;) {
						var i = r.delegate;
						if (i) {
							var s = E(i, r);
							if (s) {
								if (s === u) continue;
								return s
							}
						}
						if ("next" === r.method) r.sent = r._sent = r.arg;
						else if ("throw" === r.method) {
							if ("suspendedStart" === n) throw n = "completed", r.arg;
							r.dispatchException(r.arg)
						} else "return" === r.method && r.abrupt("return", r.arg);
						n = "executing";
						var c = l(e, t, r);
						if ("normal" === c.type) {
							if (n = r.done ? "completed" : "suspendedYield", c.arg === u) continue;
							return {
								value: c.arg,
								done: r.done
							}
						}
						"throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
					}
				}
			}(e, r, i), a
		}

		function l(e, t, r) {
			try {
				return {
					type: "normal",
					arg: e.call(t, r)
				}
			} catch (x) {
				return {
					type: "throw",
					arg: x
				}
			}
		}
		e.wrap = c;
		var u = {};

		function f() {}

		function p() {}

		function d() {}
		var m = {};
		s(m, o, (function() {
			return this
		}));
		var v = Object.getPrototypeOf,
			y = v && v(v(T([])));
		y && y !== t && r.call(y, o) && (m = y);
		var b = d.prototype = f.prototype = Object.create(m);

		function g(e) {
			["next", "throw", "return"].forEach((function(t) {
				s(e, t, (function(e) {
					return this._invoke(t, e)
				}))
			}))
		}

		function w(e, t) {
			var n;
			this._invoke = function(o, a) {
				function i() {
					return new t((function(n, i) {
						! function n(o, a, i, s) {
							var c = l(e[o], e, a);
							if ("throw" !== c.type) {
								var u = c.arg,
									f = u.value;
								return f && "object" == typeof f && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
									n("next", e, i, s)
								}), (function(e) {
									n("throw", e, i, s)
								})) : t.resolve(f).then((function(e) {
									u.value = e, i(u)
								}), (function(e) {
									return n("throw", e, i, s)
								}))
							}
							s(c.arg)
						}(o, a, n, i)
					}))
				}
				return n = n ? n.then(i, i) : i()
			}
		}

		function E(e, t) {
			var r = e.iterator[t.method];
			if (void 0 === r) {
				if (t.delegate = null, "throw" === t.method) {
					if (e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method)) return u;
					t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
				}
				return u
			}
			var n = l(r, e.iterator, t.arg);
			if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
			var o = n.arg;
			return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
		}

		function _(e) {
			var t = {
				tryLoc: e[0]
			};
			1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
		}

		function O(e) {
			var t = e.completion || {};
			t.type = "normal", delete t.arg, e.completion = t
		}

		function S(e) {
			this.tryEntries = [{
				tryLoc: "root"
			}], e.forEach(_, this), this.reset(!0)
		}

		function T(e) {
			if (e) {
				var t = e[o];
				if (t) return t.call(e);
				if ("function" == typeof e.next) return e;
				if (!isNaN(e.length)) {
					var n = -1,
						a = function t() {
							for (; ++n < e.length;)
								if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
							return t.value = void 0, t.done = !0, t
						};
					return a.next = a
				}
			}
			return {
				next: j
			}
		}

		function j() {
			return {
				value: void 0,
				done: !0
			}
		}
		return p.prototype = d, s(b, "constructor", d), s(d, "constructor", p), p.displayName = s(d, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
			var t = "function" == typeof e && e.constructor;
			return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
		}, e.mark = function(e) {
			return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, s(e, i, "GeneratorFunction")), e.prototype = Object.create(b), e
		}, e.awrap = function(e) {
			return {
				__await: e
			}
		}, g(w.prototype), s(w.prototype, a, (function() {
			return this
		})), e.AsyncIterator = w, e.async = function(t, r, n, o, a) {
			void 0 === a && (a = Promise);
			var i = new w(c(t, r, n, o), a);
			return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
				return e.done ? e.value : i.next()
			}))
		}, g(b), s(b, i, "Generator"), s(b, o, (function() {
			return this
		})), s(b, "toString", (function() {
			return "[object Generator]"
		})), e.keys = function(e) {
			var t = [];
			for (var r in e) t.push(r);
			return t.reverse(),
				function r() {
					for (; t.length;) {
						var n = t.pop();
						if (n in e) return r.value = n, r.done = !1, r
					}
					return r.done = !0, r
				}
		}, e.values = T, S.prototype = {
			constructor: S,
			reset: function(e) {
				if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !e)
					for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
			},
			stop: function() {
				this.done = !0;
				var e = this.tryEntries[0].completion;
				if ("throw" === e.type) throw e.arg;
				return this.rval
			},
			dispatchException: function(e) {
				if (this.done) throw e;
				var t = this;

				function n(r, n) {
					return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
				}
				for (var o = this.tryEntries.length - 1; o >= 0; --o) {
					var a = this.tryEntries[o],
						i = a.completion;
					if ("root" === a.tryLoc) return n("end");
					if (a.tryLoc <= this.prev) {
						var s = r.call(a, "catchLoc"),
							c = r.call(a, "finallyLoc");
						if (s && c) {
							if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
							if (this.prev < a.finallyLoc) return n(a.finallyLoc)
						} else if (s) {
							if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
						} else {
							if (!c) throw new Error("try statement without catch or finally");
							if (this.prev < a.finallyLoc) return n(a.finallyLoc)
						}
					}
				}
			},
			abrupt: function(e, t) {
				for (var n = this.tryEntries.length - 1; n >= 0; --n) {
					var o = this.tryEntries[n];
					if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
						var a = o;
						break
					}
				}
				a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
				var i = a ? a.completion : {};
				return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(i)
			},
			complete: function(e, t) {
				if ("throw" === e.type) throw e.arg;
				return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
			},
			finish: function(e) {
				for (var t = this.tryEntries.length - 1; t >= 0; --t) {
					var r = this.tryEntries[t];
					if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), O(r), u
				}
			},
			catch: function(e) {
				for (var t = this.tryEntries.length - 1; t >= 0; --t) {
					var r = this.tryEntries[t];
					if (r.tryLoc === e) {
						var n = r.completion;
						if ("throw" === n.type) {
							var o = n.arg;
							O(r)
						}
						return o
					}
				}
				throw new Error("illegal catch attempt")
			},
			delegateYield: function(e, t, r) {
				return this.delegate = {
					iterator: T(e),
					resultName: t,
					nextLoc: r
				}, "next" === this.method && (this.arg = void 0), u
			}
		}, e
	}

	function m(e, t, r, n, o, a, i) {
		try {
			var s = e[a](i),
				c = s.value
		} catch (l) {
			return void r(l)
		}
		s.done ? t(c) : Promise.resolve(c).then(n, o)
	}

	function v(e) {
		return function() {
			var t = this,
				r = arguments;
			return new Promise((function(n, o) {
				var a = e.apply(t, r);

				function i(e) {
					m(a, n, o, i, s, "next", e)
				}

				function s(e) {
					m(a, n, o, i, s, "throw", e)
				}
				i(void 0)
			}))
		}
	}

	function y(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function b(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function g(e, t) {
		return (g = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function w(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = _(e);
			if (t) {
				var o = _(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return E(this, r)
		}
	}

	function E(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function _(e) {
		return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var O = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && g(e, t)
		}(c, e);
		var t, r, n, a = w(c);

		function c() {
			var e;
			y(this, c);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = a.call.apply(a, [this].concat(r))).state = {
				completed: e.props.completed || e.props.user && "finished" === e.props.user.interests_status && "finished" === e.props.user.personality_status && "finished" === e.props.user.motivators_status && "finished" === e.props.user.abstract_status && "finished" === e.props.user.numerical_status && "finished" === e.props.user.verbal_status,
				careers: []
			}, e.setCareers = function(t) {
				e.setState({
					careers: t
				})
			}, e.loadCollection = v(h().mark((function t() {
				var r;
				return h().wrap((function(t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							return r = [], t.next = 3, s.default.similarCareers(e.props.options || {}).then((function(e) {
								r = e.career_scores
							})).catch((function(e) {
								console.log(e)
							}));
						case 3:
							return e.state.completed || (r = e.setRandomScores(i()(r))), r = r.slice(0, 4), t.abrupt("return", r);
						case 6:
						case "end":
							return t.stop()
					}
				}), t)
			}))), e.setRandomScores = function(e) {
				return e.map((function(e) {
					var t = e.score > 0 ? e.score : Math.floor(100 * Math.random());
					return p(p({}, e), {
						score: t
					})
				}))
			}, e
		}
		return t = c, (r = [{
			key: "componentDidMount",
			value: function() {
				var e = this;
				this.props.careers ? this.setCareers(this.props.careers) : this.loadCollection().then((function(t) {
					e.setCareers(t)
				}))
			}
		}, {
			key: "render",
			value: function() {
				var e = this;
				return 0 === this.state.careers.length ? null : o.a.createElement("div", {
					className: "grid-x"
				}, this.state.careers.map((function(t, r) {
					return o.a.createElement("div", {
						className: "large-3 medium-6 small-12 cell show-for-large"
					}, o.a.createElement(l.default, {
						key: "careerDahsboardA".concat(r),
						hideScore: !e.state.completed,
						item: t
					}))
				})), o.a.createElement("div", {
					className: "small-12 cell hide-for-large"
				}, o.a.createElement("div", {
					className: "careers-slider"
				}, o.a.createElement(u.default, {
					items: this.state.careers,
					itemProps: {
						hideScore: !this.state.completed
					},
					component: l.default
				}))))
			}
		}]) && b(t.prototype, r), n && b(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), c
	}(c.default);
	t.default = O
}, , , function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return p
	}));
	var n = r(0),
		o = r.n(n),
		a = r(27);

	function i() {
		i = function() {
			return e
		};
		var e = {},
			t = Object.prototype,
			r = t.hasOwnProperty,
			n = "function" == typeof Symbol ? Symbol : {},
			o = n.iterator || "@@iterator",
			a = n.asyncIterator || "@@asyncIterator",
			s = n.toStringTag || "@@toStringTag";

		function c(e, t, r) {
			return Object.defineProperty(e, t, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}), e[t]
		}
		try {
			c({}, "")
		} catch (x) {
			c = function(e, t, r) {
				return e[t] = r
			}
		}

		function l(e, t, r, n) {
			var o = t && t.prototype instanceof p ? t : p,
				a = Object.create(o.prototype),
				i = new S(n || []);
			return a._invoke = function(e, t, r) {
				var n = "suspendedStart";
				return function(o, a) {
					if ("executing" === n) throw new Error("Generator is already running");
					if ("completed" === n) {
						if ("throw" === o) throw a;
						return j()
					}
					for (r.method = o, r.arg = a;;) {
						var i = r.delegate;
						if (i) {
							var s = E(i, r);
							if (s) {
								if (s === f) continue;
								return s
							}
						}
						if ("next" === r.method) r.sent = r._sent = r.arg;
						else if ("throw" === r.method) {
							if ("suspendedStart" === n) throw n = "completed", r.arg;
							r.dispatchException(r.arg)
						} else "return" === r.method && r.abrupt("return", r.arg);
						n = "executing";
						var c = u(e, t, r);
						if ("normal" === c.type) {
							if (n = r.done ? "completed" : "suspendedYield", c.arg === f) continue;
							return {
								value: c.arg,
								done: r.done
							}
						}
						"throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
					}
				}
			}(e, r, i), a
		}

		function u(e, t, r) {
			try {
				return {
					type: "normal",
					arg: e.call(t, r)
				}
			} catch (x) {
				return {
					type: "throw",
					arg: x
				}
			}
		}
		e.wrap = l;
		var f = {};

		function p() {}

		function d() {}

		function h() {}
		var m = {};
		c(m, o, (function() {
			return this
		}));
		var v = Object.getPrototypeOf,
			y = v && v(v(T([])));
		y && y !== t && r.call(y, o) && (m = y);
		var b = h.prototype = p.prototype = Object.create(m);

		function g(e) {
			["next", "throw", "return"].forEach((function(t) {
				c(e, t, (function(e) {
					return this._invoke(t, e)
				}))
			}))
		}

		function w(e, t) {
			var n;
			this._invoke = function(o, a) {
				function i() {
					return new t((function(n, i) {
						! function n(o, a, i, s) {
							var c = u(e[o], e, a);
							if ("throw" !== c.type) {
								var l = c.arg,
									f = l.value;
								return f && "object" == typeof f && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
									n("next", e, i, s)
								}), (function(e) {
									n("throw", e, i, s)
								})) : t.resolve(f).then((function(e) {
									l.value = e, i(l)
								}), (function(e) {
									return n("throw", e, i, s)
								}))
							}
							s(c.arg)
						}(o, a, n, i)
					}))
				}
				return n = n ? n.then(i, i) : i()
			}
		}

		function E(e, t) {
			var r = e.iterator[t.method];
			if (void 0 === r) {
				if (t.delegate = null, "throw" === t.method) {
					if (e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method)) return f;
					t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
				}
				return f
			}
			var n = u(r, e.iterator, t.arg);
			if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, f;
			var o = n.arg;
			return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, f) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, f)
		}

		function _(e) {
			var t = {
				tryLoc: e[0]
			};
			1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
		}

		function O(e) {
			var t = e.completion || {};
			t.type = "normal", delete t.arg, e.completion = t
		}

		function S(e) {
			this.tryEntries = [{
				tryLoc: "root"
			}], e.forEach(_, this), this.reset(!0)
		}

		function T(e) {
			if (e) {
				var t = e[o];
				if (t) return t.call(e);
				if ("function" == typeof e.next) return e;
				if (!isNaN(e.length)) {
					var n = -1,
						a = function t() {
							for (; ++n < e.length;)
								if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
							return t.value = void 0, t.done = !0, t
						};
					return a.next = a
				}
			}
			return {
				next: j
			}
		}

		function j() {
			return {
				value: void 0,
				done: !0
			}
		}
		return d.prototype = h, c(b, "constructor", h), c(h, "constructor", d), d.displayName = c(h, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
			var t = "function" == typeof e && e.constructor;
			return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
		}, e.mark = function(e) {
			return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, c(e, s, "GeneratorFunction")), e.prototype = Object.create(b), e
		}, e.awrap = function(e) {
			return {
				__await: e
			}
		}, g(w.prototype), c(w.prototype, a, (function() {
			return this
		})), e.AsyncIterator = w, e.async = function(t, r, n, o, a) {
			void 0 === a && (a = Promise);
			var i = new w(l(t, r, n, o), a);
			return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
				return e.done ? e.value : i.next()
			}))
		}, g(b), c(b, s, "Generator"), c(b, o, (function() {
			return this
		})), c(b, "toString", (function() {
			return "[object Generator]"
		})), e.keys = function(e) {
			var t = [];
			for (var r in e) t.push(r);
			return t.reverse(),
				function r() {
					for (; t.length;) {
						var n = t.pop();
						if (n in e) return r.value = n, r.done = !1, r
					}
					return r.done = !0, r
				}
		}, e.values = T, S.prototype = {
			constructor: S,
			reset: function(e) {
				if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !e)
					for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
			},
			stop: function() {
				this.done = !0;
				var e = this.tryEntries[0].completion;
				if ("throw" === e.type) throw e.arg;
				return this.rval
			},
			dispatchException: function(e) {
				if (this.done) throw e;
				var t = this;

				function n(r, n) {
					return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
				}
				for (var o = this.tryEntries.length - 1; o >= 0; --o) {
					var a = this.tryEntries[o],
						i = a.completion;
					if ("root" === a.tryLoc) return n("end");
					if (a.tryLoc <= this.prev) {
						var s = r.call(a, "catchLoc"),
							c = r.call(a, "finallyLoc");
						if (s && c) {
							if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
							if (this.prev < a.finallyLoc) return n(a.finallyLoc)
						} else if (s) {
							if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
						} else {
							if (!c) throw new Error("try statement without catch or finally");
							if (this.prev < a.finallyLoc) return n(a.finallyLoc)
						}
					}
				}
			},
			abrupt: function(e, t) {
				for (var n = this.tryEntries.length - 1; n >= 0; --n) {
					var o = this.tryEntries[n];
					if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
						var a = o;
						break
					}
				}
				a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
				var i = a ? a.completion : {};
				return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, f) : this.complete(i)
			},
			complete: function(e, t) {
				if ("throw" === e.type) throw e.arg;
				return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
			},
			finish: function(e) {
				for (var t = this.tryEntries.length - 1; t >= 0; --t) {
					var r = this.tryEntries[t];
					if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), O(r), f
				}
			},
			catch: function(e) {
				for (var t = this.tryEntries.length - 1; t >= 0; --t) {
					var r = this.tryEntries[t];
					if (r.tryLoc === e) {
						var n = r.completion;
						if ("throw" === n.type) {
							var o = n.arg;
							O(r)
						}
						return o
					}
				}
				throw new Error("illegal catch attempt")
			},
			delegateYield: function(e, t, r) {
				return this.delegate = {
					iterator: T(e),
					resultName: t,
					nextLoc: r
				}, "next" === this.method && (this.arg = void 0), f
			}
		}, e
	}

	function s(e, t, r, n, o, a, i) {
		try {
			var s = e[a](i),
				c = s.value
		} catch (l) {
			return void r(l)
		}
		s.done ? t(c) : Promise.resolve(c).then(n, o)
	}

	function c(e, t) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) || function(e, t) {
			var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
			if (null == r) return;
			var n, o, a = [],
				i = !0,
				s = !1;
			try {
				for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
			} catch (c) {
				s = !0, o = c
			} finally {
				try {
					i || null == r.return || r.return()
				} finally {
					if (s) throw o
				}
			}
			return a
		}(e, t) || function(e, t) {
			if (!e) return;
			if ("string" === typeof e) return l(e, t);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			"Object" === r && e.constructor && (r = e.constructor.name);
			if ("Map" === r || "Set" === r) return Array.from(e);
			if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return l(e, t)
		}(e, t) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function l(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
		return n
	}
	var u = [{
			name: "Career Interests",
			link: "/tests/interests"
		}, {
			name: "Work Personality",
			link: "/tests/personality"
		}, {
			name: "Career Motivators",
			link: "/tests/motivators"
		}, {
			name: "Abstract Reasoning",
			link: "/tests/abstract"
		}, {
			name: "Numerical Reasoning",
			link: "/tests/numerical"
		}, {
			name: "Verbal Reasoning",
			link: "/tests/verbal"
		}, {
			name: "See all tests",
			link: "/tests"
		}],
		f = [{
			name: "Courses",
			link: "/courses"
		}, {
			name: "Jobs",
			link: "/jobs"
		}];

	function p(e) {
		var t = c(Object(n.useState)(!1), 2),
			r = t[0],
			l = t[1],
			p = c(Object(n.useState)(!1), 2),
			d = p[0],
			h = p[1],
			m = !!e.user,
			v = m && e.user.full_access,
			y = function() {
				var e, t = (e = i().mark((function e() {
					return i().wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								a.default.delete().then((function() {
									document.location.href = "/"
								})).catch((function(e) {
									console.log(e)
								}));
							case 1:
							case "end":
								return e.stop()
						}
					}), e)
				})), function() {
					var t = this,
						r = arguments;
					return new Promise((function(n, o) {
						var a = e.apply(t, r);

						function i(e) {
							s(a, n, o, i, c, "next", e)
						}

						function c(e) {
							s(a, n, o, i, c, "throw", e)
						}
						i(void 0)
					}))
				});
				return function() {
					return t.apply(this, arguments)
				}
			}(),
			b = "overlay__link overlay__link--navigation disable-fade-in",
			g = "overlay__link overlay__link--info",
			w = function(e, t) {
				return o.a.createElement("li", {
					key: "submenuItem".concat(t)
				}, o.a.createElement("a", {
					href: e.link,
					className: "overlay__link"
				}, e.name))
			};
		return o.a.createElement("nav", {
			className: "text-center"
		}, o.a.createElement("div", {
			className: "grid-container"
		}, o.a.createElement("div", {
			className: "grid-x align-middle overlay__submenu ".concat(d ? "overlay__submenu--expanded" : "")
		}, o.a.createElement("div", {
			className: "medium-6 cell"
		}, o.a.createElement("div", {
			className: "grid-x align-middle overlay__submenu__content ".concat(m ? "overlay__submenu__content--login" : "")
		}, o.a.createElement("div", {
			className: "cell"
		}, o.a.createElement("ul", {
			className: "overlay__list overlay__list--navigation"
		}, o.a.createElement("a", {
			onClick: function() {
				h(!1)
			},
			className: b
		}, o.a.createElement("span", {
			className: "upgrade-icon caret-down left"
		}), "Tests"), u.map((function(e, t) {
			return w(e, t)
		}))))))), o.a.createElement("div", {
			className: "grid-x align-middle overlay__submenu ".concat(r ? "overlay__submenu--expanded" : "")
		}, o.a.createElement("div", {
			className: "medium-6 cell"
		}, o.a.createElement("div", {
			className: "grid-x align-middle overlay__submenu__content"
		}, o.a.createElement("div", {
			className: "cell"
		}, o.a.createElement("ul", {
			className: "overlay__list overlay__list--navigation"
		}, o.a.createElement("a", {
			onClick: function() {
				l(!1)
			},
			className: b
		}, o.a.createElement("span", {
			className: "upgrade-icon caret-down left"
		}), "Explore"), f.map((function(e, t) {
			return w(e, t)
		}))))))), o.a.createElement("div", {
			className: "grid-x align-middle"
		}, o.a.createElement("div", {
			className: "medium-6 cell"
		}, o.a.createElement("ul", {
			className: "overlay__list overlay__list--navigation"
		}, m ? o.a.createElement("li", null, o.a.createElement("a", {
			href: "/dashboard",
			className: b
		}, "My Dashboard")) : "", o.a.createElement("li", {
			className: "disable-fade-in"
		}, o.a.createElement("a", {
			onClick: function() {
				h(!0)
			},
			className: b
		}, "Our Tests ", o.a.createElement("span", {
			className: "upgrade-icon caret-down right"
		}))), m ? null : o.a.createElement("li", {
			className: "disable-fade-in"
		}, o.a.createElement("a", {
			href: "/how",
			className: b
		}, "How it Works")), o.a.createElement("li", {
			className: "disable-fade-in"
		}, o.a.createElement("a", {
			href: "/careers",
			className: b
		}, "Careers")), o.a.createElement("li", {
			className: "disable-fade-in"
		}, o.a.createElement("a", {
			onClick: function() {
				l(!0)
			},
			className: b
		}, "Explore ", o.a.createElement("span", {
			className: "upgrade-icon caret-down right"
		}))), v ? null : o.a.createElement("li", null, o.a.createElement("a", {
			href: "/upgrade",
			className: b
		}, "Full Access")), m ? null : o.a.createElement("li", {
			className: "disable-fade-in"
		}, o.a.createElement("a", {
			href: "/group",
			className: b
		}, "For Educators")))), o.a.createElement("div", {
			className: "medium-6 cell flex-end"
		}, o.a.createElement("ul", {
			className: "overlay__list overlay__list--account"
		}, m ? o.a.createElement(n.Fragment, null, o.a.createElement("li", null, o.a.createElement("a", {
			className: "overlay__link overlay__link--account",
			onClick: y
		}, "Log Out", o.a.createElement("span", {
			className: "small-icons logout",
			style: {
				marginLeft: "5px"
			}
		})))) : o.a.createElement(n.Fragment, null, o.a.createElement("li", {
			className: "overlay__gutter"
		}, o.a.createElement("a", {
			href: "/register",
			className: g
		}, "Register"), " ", o.a.createElement("span", null, "/"), " ", o.a.createElement("a", {
			href: "/login",
			className: g
		}, "Log in ", o.a.createElement("span", {
			className: "small-icons login"
		}))), m ? o.a.createElement("li", null, o.a.createElement("a", {
			href: "/how",
			className: g + " responsive"
		}, "How it works")) : ""), m ? o.a.createElement("li", null, o.a.createElement("a", {
			href: "/settings",
			className: m ? g + " responsive" : g
		}, "Settings")) : "", o.a.createElement("li", null, o.a.createElement("a", {
			href: "/faq",
			className: g
		}, "FAQs")), o.a.createElement("li", null, o.a.createElement("a", {
			href: "/about",
			className: g
		}, "About")), o.a.createElement("li", null, o.a.createElement("a", {
			href: "/contact",
			className: g
		}, "Contact")))))))
	}
}, , , function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return i
	}));
	var n = r(0),
		o = r.n(n),
		a = r(3);

	function i(e) {
		return o.a.createElement(a.default, {
			className: "capsule",
			color: "white",
			onClick: e.onClick
		}, o.a.createElement("span", {
			className: "small-icon capsule__icon envelope-white",
			style: {
				margin: "6px 10px 0 0"
			}
		}), "short" === e.type ? o.a.createElement("p", {
			className: "capsule__text capsule__save-progress"
		}, "Save", o.a.createElement("span", {
			className: "hide-for-small-only"
		}, " your progress")) : o.a.createElement("p", {
			className: "capsule__text capsule__save-progress"
		}, "Save your progress"))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return i
	}));
	var n = r(0),
		o = r.n(n),
		a = r(3);

	function i(e) {
		return o.a.createElement(a.default, {
			className: "capsule capsule--saved",
			onClick: e.onClick
		}, o.a.createElement("span", {
			className: "capsule__icon small-icon checked"
		}), o.a.createElement("p", {
			className: "capsule__text capsule__check-email"
		}, "Saved", o.a.createElement("span", {
			className: "hide-for-small-only"
		}, ", check your inbox")))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return a
	}));
	var n = r(0),
		o = r.n(n);

	function a(e) {
		return o.a.createElement("div", {
			className: "capsule capsule--unconfirmed capsule--expand",
			onClick: e.onClick
		}, o.a.createElement("span", {
			className: "small-icon capsule__icon envelope-white"
		}), o.a.createElement("p", {
			className: "capsule__text"
		}, "Unconfirmed account, please check your inbox."))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return l
	}));
	var n = r(0),
		o = r.n(n),
		a = r(2),
		i = r(286),
		s = r(28),
		c = r(98);

	function l(e) {
		return Object(n.useEffect)((function() {
			s.default.dispatch(Object(c.setUserDashboard)(e.user))
		}), [e.user]), o.a.createElement(a.a, {
			store: s.default
		}, o.a.createElement(i.default, null))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return u
	}));
	var n = r(0),
		o = r.n(n),
		a = r(287),
		i = r(2),
		s = r(17);

	function c(e, t) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) || function(e, t) {
			var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
			if (null == r) return;
			var n, o, a = [],
				i = !0,
				s = !1;
			try {
				for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
			} catch (c) {
				s = !0, o = c
			} finally {
				try {
					i || null == r.return || r.return()
				} finally {
					if (s) throw o
				}
			}
			return a
		}(e, t) || function(e, t) {
			if (!e) return;
			if ("string" === typeof e) return l(e, t);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			"Object" === r && e.constructor && (r = e.constructor.name);
			if ("Map" === r || "Set" === r) return Array.from(e);
			if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return l(e, t)
		}(e, t) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function l(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
		return n
	}

	function u(e) {
		var t = c(Object(n.useState)(0), 2),
			r = t[0],
			l = t[1],
			u = Object(i.e)((function(e) {
				return e.userStatus
			}));
		return Object(n.useEffect)((function() {
			var e = Object(s.calcUserProgress)(u);
			l(e)
		})), o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
			className: "flex-middle is-spaced"
		}, o.a.createElement("span", {
			className: "match-info"
		}, 100 === r ? "Your Career Matches are ready!" : "Discover your career matches by completing all 6 tests"), o.a.createElement(a.default, {
			score: r,
			hideMatch: !1,
			matchText: "complete"
		})))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return s
	}));
	var n = r(0),
		o = r.n(n);

	function a(e, t) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) || function(e, t) {
			var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
			if (null == r) return;
			var n, o, a = [],
				i = !0,
				s = !1;
			try {
				for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
			} catch (c) {
				s = !0, o = c
			} finally {
				try {
					i || null == r.return || r.return()
				} finally {
					if (s) throw o
				}
			}
			return a
		}(e, t) || function(e, t) {
			if (!e) return;
			if ("string" === typeof e) return i(e, t);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			"Object" === r && e.constructor && (r = e.constructor.name);
			if ("Map" === r || "Set" === r) return Array.from(e);
			if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return i(e, t)
		}(e, t) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function i(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
		return n
	}

	function s(e) {
		var t = a(Object(n.useState)(e.score), 2),
			r = t[0],
			i = t[1],
			s = parseInt(r / 10),
			c = a(Object(n.useState)("match-tank pulse_".concat(s)), 2),
			l = c[0],
			u = c[1],
			f = a(Object(n.useState)("fill fillAction_".concat(s)), 2),
			p = f[0],
			d = f[1],
			h = a(Object(n.useState)("translate(0, ".concat(68 - 68 * r / 100, "px)")), 2),
			m = h[0],
			v = h[1],
			y = a(Object(n.useState)(!1), 2),
			b = y[0],
			g = y[1];
		Object(n.useEffect)((function() {
			var t;
			t = parseInt(r / 10), u("match-tank pulseDrain_".concat(t)), d("drainAction_".concat(t)), i(e.score);
			var n = setTimeout((function() {
				return function(e) {
					var t = parseInt(e / 10);
					u("match-tank pulse_".concat(t)), d("fill fillAction_".concat(t));
					var r = "translate(0, ".concat(68 - 68 * e / 100, "px)");
					v(r)
				}(e.score)
			}), 500);
			return function() {
				clearTimeout(n)
			}
		}), [e.score]);
		return o.a.createElement("div", {
			className: l,
			onMouseEnter: function(e) {
				g(!0)
			},
			onMouseLeave: function(e) {
				g(!1)
			},
			style: {
				cursor: 100 === r ? "pointer" : "default"
			},
			onClick: function() {
				if (!(r < 100)) {
					var e = document.getElementById("dashboardCareers");
					e && window.scrollTo({
						top: e.offsetTop - 80,
						behavior: "smooth"
					})
				}
			}
		}, o.a.createElement("div", {
			className: "inner"
		}, o.a.createElement("div", {
			className: p,
			style: {
				transform: m
			}
		}, o.a.createElement("svg", {
			version: "1.1",
			x: "0px",
			y: "0px",
			width: "88px",
			height: "88px",
			viewBox: "0 0 88 88",
			enableBackground: "new 0 0 88 88"
		}, o.a.createElement("path", {
			className: "wave-shape",
			d: "M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4\nc-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9\nc-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z"
		})))), o.a.createElement("div", {
			className: "match-percent hidden ".concat(e.hideMatch ? "centered" : "")
		}, b && 100 === r ? "" : o.a.createElement("div", {
			className: "qm"
		}, "".concat(r, "%")), b && 100 === r ? "See Matches" : "complete"))
	}
}, , function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(172),
		i = r(173);

	function s(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function c(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function l(e, t) {
		return (l = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function u(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = p(e);
			if (t) {
				var o = p(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return f(this, r)
		}
	}

	function f(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function p(e) {
		return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var d = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && l(e, t)
		}(p, e);
		var t, r, n, f = u(p);

		function p() {
			return s(this, p), f.apply(this, arguments)
		}
		return t = p, (r = [{
			key: "render",
			value: function() {
				var e = this.props.url || location.href,
					t = {
						url: e,
						title: this.props.share_text,
						description: this.props.share_text
					},
					r = "".concat(e + (e.indexOf("?") > 0 ? "&" : "?") + "utm_source=careerhunter&utm_medium=email.m&utm_campaign=share");
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: "popup-social-button mar-bot-15"
				}, o.a.createElement(i.a, Object.assign({}, t, {
					style: {
						outline: "none"
					},
					url: "",
					subject: this.props.share_text,
					body: "Hi,\n".concat(this.props.email_body).concat(r, "\n\nBest,\n").concat(this.props.user_name, "\n\n")
				}), o.a.createElement("div", {
					className: "small-icons blue-small-letter"
				}), o.a.createElement("p", null, "Share by email"))), o.a.createElement("div", {
					className: "popup-social-button mar-bot-15"
				}, o.a.createElement(a.a, Object.assign({}, Object.assign({}, t, {
					title: this.props.share_text
				}), {
					via: "CAcareerhunter ",
					style: {
						outline: "none"
					}
				}), o.a.createElement("div", {
					className: "small-icons blue-twitter"
				}), o.a.createElement("p", null, "Post tweet"))))
			}
		}]) && c(t.prototype, r), n && c(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), p
	}(o.a.Component);
	t.default = d
}, function(e, t, r) {
	e.exports = r.p + "media/components/systemUpdate/ch-logo-fireworks-190f529778b12e924ed564436ecef80a.png"
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return u
	}));
	var n = r(0),
		o = r.n(n),
		a = r(6),
		i = r(290),
		s = r.n(i),
		c = r(3),
		l = r(41);

	function u(e) {
		var t = Object(n.useRef)(null);
		return Object(n.useEffect)((function() {
			t.current.open(), Object(l.setCookie)("chpostuppp", 0, 1)
		}), []), o.a.createElement(a.default, {
			ref: t,
			className: "post-update-popup"
		}, o.a.createElement("div", {
			className: "grid-x align-center"
		}, o.a.createElement("div", {
			className: "small-12 cell"
		}, o.a.createElement("img", {
			src: s.a,
			alt: "We have made some changes!",
			width: "139",
			height: "147"
		}), o.a.createElement("h3", {
			className: "post-update-popup__title"
		}, "We\u2019ve made some changes!"), o.a.createElement("p", {
			className: "post-update-popup__text"
		}, "Hi ", e.name, ", we are pleased to announce that CareerHunter has updated and we\u2019ve made some notable improvements."), o.a.createElement("p", {
			className: "post-update-popup__point"
		}, " ", o.a.createElement("span", {
			className: "post-update-popup__bullet"
		}), " Easier individual access to all our tests"), o.a.createElement("p", {
			className: "post-update-popup__point"
		}, " ", o.a.createElement("span", {
			className: "post-update-popup__bullet"
		}), " Additional and dedicated reports for each assessment"), o.a.createElement("p", {
			className: "post-update-popup__point"
		}, " ", o.a.createElement("span", {
			className: "post-update-popup__bullet"
		}), " Personalized insights with more intuitive analysis"), o.a.createElement("p", {
			className: "post-update-popup__point"
		}, " ", o.a.createElement("span", {
			className: "post-update-popup__bullet"
		}), " Improved and more relevant study suggestions"), o.a.createElement("p", {
			className: "post-update-popup__point"
		}, " ", o.a.createElement("span", {
			className: "post-update-popup__bullet"
		}), " Enhanced testing experience with many more upgrades"), o.a.createElement(c.default, {
			href: "/dashboard"
		}, "Explore Dashboard"))))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(34),
		i = r.n(a),
		s = r(293),
		c = r(36);

	function l(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function u(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function f(e, t) {
		return (f = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function p(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = h(e);
			if (t) {
				var o = h(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return d(this, r)
		}
	}

	function d(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function h(e) {
		return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var m = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && f(e, t)
		}(d, e);
		var t, r, n, a = p(d);

		function d() {
			var e;
			l(this, d);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = a.call.apply(a, [this].concat(r))).onSwipe = function() {
				e.slider && (e.slider.innerSlider.clickable = !0)
			}, e
		}
		return t = d, (r = [{
			key: "render",
			value: function() {
				var e = this,
					t = {
						dots: !1,
						infinite: !1,
						variableWidth: !1,
						speed: 300,
						slidesToShow: 6,
						slidesToScroll: 6,
						onSwipe: this.onSwipe,
						swipeToSlide: !0,
						nextArrow: o.a.createElement(c.default, {
							props: this.props,
							direction: "slider-arrow slider-arrow--next"
						}),
						prevArrow: o.a.createElement(c.default, {
							props: this.props,
							direction: "slider-arrow slider-arrow--prev"
						}),
						className: "test-tiles-slider with-navigation",
						responsive: [{
							breakpoint: 1440,
							settings: {
								slidesToShow: 6,
								slidesToScroll: 1,
								infinite: !1,
								dots: !1
							}
						}, {
							breakpoint: 1281,
							settings: {
								slidesToShow: 4,
								slidesToScroll: 1,
								infinite: !1,
								dots: !1,
								arrows: !0
							}
						}, {
							breakpoint: 1024,
							settings: {
								slidesToShow: 4,
								slidesToScroll: 1,
								infinite: !1,
								dots: !1,
								arrows: !1
							}
						}, {
							breakpoint: 769,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
								infinite: !1,
								dots: !1,
								variableWidth: !1,
								arrows: !1
							}
						}, {
							breakpoint: 640,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
								infinite: !1,
								dots: !1,
								variableWidth: !1,
								arrows: !1
							}
						}, {
							breakpoint: 450,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
								infinite: !1,
								dots: !1,
								variableWidth: !1,
								arrows: !1
							}
						}]
					},
					r = this;
				return o.a.createElement(i.a, Object.assign({}, t, {
					ref: function(t) {
						e.slider = t
					}
				}), this.props.options.map((function(e, t) {
					return o.a.createElement(s.default, {
						test: e,
						key: e.id,
						user: r.props.user,
						confirmationRequired: r.props.confirmationRequired,
						status: r.props.user["".concat(e.code, "_status")],
						progress: r.props.progress[e.code] || 0
					})
				})))
			}
		}]) && u(t.prototype, r), n && u(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), d
	}(o.a.Component);
	t.default = m
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(116),
		i = r(3),
		s = r(127),
		c = r(128),
		l = r(43),
		u = r(2),
		f = r(98),
		p = r(9),
		d = r(6),
		h = r(99);

	function m(e, t) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) || function(e, t) {
			var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
			if (null == r) return;
			var n, o, a = [],
				i = !0,
				s = !1;
			try {
				for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
			} catch (c) {
				s = !0, o = c
			} finally {
				try {
					i || null == r.return || r.return()
				} finally {
					if (s) throw o
				}
			}
			return a
		}(e, t) || function(e, t) {
			if (!e) return;
			if ("string" === typeof e) return v(e, t);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			"Object" === r && e.constructor && (r = e.constructor.name);
			if ("Map" === r || "Set" === r) return Array.from(e);
			if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return v(e, t)
		}(e, t) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function v(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
		return n
	}
	t.default = function(e) {
		var t = m(Object(n.useState)(e.status), 2),
			r = t[0],
			v = t[1],
			y = m(Object(n.useState)(null), 2),
			b = y[0],
			g = y[1],
			w = o.a.createRef(),
			E = m(Object(n.useState)({}), 2),
			_ = E[0],
			O = E[1],
			S = m(Object(n.useState)(!1), 2),
			T = S[0],
			j = S[1],
			x = m(Object(n.useState)(!1), 2),
			P = x[0],
			k = x[1],
			N = (document.querySelectorAll("[data-tooltip]"), function(e) {
				var t = e.getBoundingClientRect();
				O({
					left: t.x + t.width / 2,
					top: t.y + window.scrollY
				})
			}),
			R = {},
			C = e.user.full_access || e.user["".concat(e.test.code, "_access")],
			L = Object(u.d)(),
			A = Object(n.useRef)(null);

		function I(e) {
			return o.a.createElement("a", {
				href: e.href,
				title: "Retake Test",
				onClick: e.onClick,
				className: "progress__link float-right",
				onMouseEnter: handleButtonOnHover
			}, e.buttonName, o.a.createElement("span", {
				className: "button__hovered"
			}))
		}
		var M = r || e.status,
			D = o.a.createElement(c.default, null, o.a.createElement(s.default, {
				coords: _,
				updateTooltipCoords: function() {
					return N(w.current)
				},
				className: "tooltip--popover"
			}, o.a.createElement("span", null, "Learn more about this test"))),
			U = o.a.createElement(c.default, null, o.a.createElement(s.default, {
				coords: _,
				updateTooltipCoords: function() {
					return N(w.current)
				},
				className: "tooltip__red"
			}, o.a.createElement("span", null, e.user.educator_id ? "Access to this test is not currently permitted on your account. Contact your account's administrator to request additional access." : "Paid access required for this test", "."))),
			F = o.a.createElement("div", {
				className: "tooltip-trigger small-icon lock-red float-right",
				"data-tooltip": !0,
				ref: w,
				onMouseOver: function(e) {
					N(e.target), k(!P)
				},
				onMouseOut: function(e) {
					k(!P)
				}
			});
		return Object(n.useEffect)((function() {
			return "started" === e.status && e.test.timed && !localStorage.getItem(e.test.code) && function t() {
					var r = localStorage.getItem("".concat(e.test.code, "StartedAt")),
						n = r ? parseInt(r) + 6e4 * e.test.time - Date.now() : 0;
					if (n <= 0) console.log("Reset Test"), l.default.resetTest(e.test.id).then((function(t) {
						localStorage.removeItem("".concat(e.test.code, "StartedAt")), localStorage.removeItem(e.test.code), v(t.status);
						var r = {};
						r["".concat(e.test.code, "_status")] = t.status, L(Object(f.refreshUserDashboard)(r))
					}));
					else {
						var o = setTimeout((function() {
							t()
						}), n + 100);
						g(o)
					}
				}(),
				function() {
					b && clearTimeout(b)
				}
		}), []), "started" === M && (R.height = "".concat(e.progress, "%")), o.a.createElement(o.a.Fragment, null, o.a.createElement(p.FadeInSection, null, o.a.createElement("div", {
			className: "progress__card " + M
		}, o.a.createElement("div", {
			className: "circle half-top"
		}), o.a.createElement("div", {
			className: "circle right-small"
		}), o.a.createElement("div", {
			className: "progress__layer " + M,
			style: R
		}), o.a.createElement("div", {
			className: "grid-x"
		}, o.a.createElement("div", {
			className: "small-6 cell"
		}, o.a.createElement("a", {
			href: "/tests/" + e.test.path
		}, o.a.createElement("div", {
			className: "tooltip-trigger small-icons big-white-tooltip",
			"data-tooltip": !0,
			ref: w,
			onMouseOver: function(e) {
				N(e.target), j(!T)
			},
			onMouseOut: function(e) {
				j(!T)
			}
		})), T && D), o.a.createElement("div", {
			className: "small-6 cell"
		}, function() {
			if (e.user.educator_id) return C ? null : F;
			var t = parseInt(e.user["".concat(e.test.code, "_retakes")]);
			return "finished" === M || e.test.timed || C ? "finished" !== M || C ? "finished" === M && C && 0 === t ? o.a.createElement("a", {
				href: "/checkout/retakes?test=".concat(e.test.code),
				className: "progress__link float-right"
			}, "0 takes left") : C && t > 0 ? ("finished" !== M && (t += 1), o.a.createElement(a.default, {
				user: e.user,
				test: {
					code: e.test.code,
					path: e.test.path
				},
				buttonName: "".concat(t, " ").concat(1 === t ? "take" : "takes", " left"),
				buttonComponent: I,
				className: "button button--green--medium"
			})) : e.test.timed && !C ? F : void 0 : o.a.createElement("a", {
				href: "/tests/".concat(e.test.path, "/result"),
				className: "progress__link float-right"
			}, "Results") : e.user.id && !e.user.confirmed && e.confirmationRequired ? o.a.createElement("a", {
				href: "/tests/".concat(e.test.path, "/take"),
				onClick: function(e) {
					e.preventDefault(), A.current.open()
				},
				className: "progress__link float-right"
			}, "Try for free") : o.a.createElement("a", {
				href: "/tests/".concat(e.test.path, "/take"),
				className: "progress__link float-right"
			}, "Try for free")
		}(), P && U)), o.a.createElement("div", {
			className: "card__section"
		}, o.a.createElement("div", {
			className: "large-icon float-center " + e.test.code + "-small-white"
		})), o.a.createElement("div", {
			className: ""
		}, o.a.createElement("p", {
			className: "progress__test-title text-center"
		}, e.test.name)), o.a.createElement("div", {
			className: "text-center"
		}, function() {
			if (!e.user || !e.user.full_access && !e.user["".concat(e.test.code, "_access")]) return o.a.createElement(i.default, {
				href: "/checkout/".concat(e.test.code),
				color: "white-off"
			}, "Get Access");
			switch (M) {
				case "started":
					return o.a.createElement(i.default, {
						href: "/tests/".concat(e.test.path, "/take"),
						color: "white"
					}, "Continue");
				case "finished":
					return o.a.createElement(i.default, {
						href: "/tests/".concat(e.test.path, "/result"),
						color: "white"
					}, "Results");
				default:
					return o.a.createElement(a.default, {
						user: e.user,
						confirmed: e.confirmed,
						test: {
							code: e.test.code,
							path: e.test.path
						},
						buttonName: "Start",
						className: "button button--green"
					})
			}
		}()), o.a.createElement("div", {
			className: "grid-x"
		}, o.a.createElement("div", {
			className: "small-8 cell"
		}, e.test.timed ? o.a.createElement("div", {
			className: "float-left flex-center alarm"
		}, o.a.createElement("div", {
			className: "small-icons clock-red"
		}), o.a.createElement("p", {
			className: "progress__details progress__details--timed"
		}, e.test.time, "m")) : o.a.createElement("div", {
			className: "float-left flex-center"
		}, o.a.createElement("div", {
			className: "small-icons white-stopwatch"
		}), o.a.createElement("p", {
			className: "progress__details progress__details--time"
		}, "Not timed"))), o.a.createElement("div", {
			className: "small-4 cell"
		}, o.a.createElement("div", {
			className: "float-right flex-center"
		}, o.a.createElement("p", {
			className: "progress__details progress__details--comments"
		}, e.test.number_questions), o.a.createElement("div", {
			className: "small-icons white-chat-icon"
		})))))), o.a.createElement(d.default, {
			ref: A
		}, o.a.createElement(h.default, {
			user: e.user
		})))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(34),
		i = r.n(a),
		s = r(295);
	r(36);

	function c(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function l(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function u(e, t) {
		return (u = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function f(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = d(e);
			if (t) {
				var o = d(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return p(this, r)
		}
	}

	function p(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function d(e) {
		return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var h = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && u(e, t)
		}(p, e);
		var t, r, n, a = f(p);

		function p() {
			var e;
			c(this, p);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = a.call.apply(a, [this].concat(r))).onSwipe = function() {
				e.slider && (e.slider.innerSlider.clickable = !0)
			}, e
		}
		return t = p, (r = [{
			key: "render",
			value: function() {
				var e = this,
					t = {
						dots: !1,
						dotsClass: "slider-bar",
						arrows: !1,
						infinite: !1,
						variableWidth: !1,
						speed: 300,
						slidesToShow: 6,
						slidesToScroll: 6,
						onSwipe: this.onSwipe,
						swipeToSlide: !0,
						className: "test-tiles-slider at-results",
						responsive: [{
							breakpoint: 1440,
							settings: {
								slidesToShow: 6,
								slidesToScroll: 1,
								infinite: !1,
								dots: !1
							}
						}, {
							breakpoint: 1281,
							settings: {
								slidesToShow: 4,
								slidesToScroll: 1,
								infinite: !1,
								dots: !1
							}
						}, {
							breakpoint: 1024,
							settings: {
								slidesToShow: 4,
								slidesToScroll: 1,
								infinite: !1,
								dots: !0
							}
						}, {
							breakpoint: 769,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
								infinite: !1,
								dots: !0,
								variableWidth: !1
							}
						}, {
							breakpoint: 640,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
								infinite: !1,
								dots: !0,
								variableWidth: !1
							}
						}, {
							breakpoint: 450,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
								infinite: !1,
								dots: !0,
								variableWidth: !1
							}
						}]
					},
					r = this;
				return o.a.createElement(i.a, Object.assign({}, t, {
					ref: function(t) {
						e.slider = t
					}
				}), this.props.options.map((function(e, t) {
					return o.a.createElement(s.default, {
						test: e,
						key: e.id,
						user: r.props.user,
						status: r.props.user["".concat(e.code, "_status")],
						progress: r.props.progress[e.code] || 0
					})
				})))
			}
		}]) && l(t.prototype, r), n && l(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), p
	}(o.a.Component);
	t.default = h
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(127),
		i = r(128),
		s = r(43),
		c = r(2),
		l = r(98),
		u = r(9);

	function f(e, t) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) || function(e, t) {
			var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
			if (null == r) return;
			var n, o, a = [],
				i = !0,
				s = !1;
			try {
				for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
			} catch (c) {
				s = !0, o = c
			} finally {
				try {
					i || null == r.return || r.return()
				} finally {
					if (s) throw o
				}
			}
			return a
		}(e, t) || function(e, t) {
			if (!e) return;
			if ("string" === typeof e) return p(e, t);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			"Object" === r && e.constructor && (r = e.constructor.name);
			if ("Map" === r || "Set" === r) return Array.from(e);
			if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return p(e, t)
		}(e, t) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function p(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
		return n
	}
	t.default = function(e) {
		var t = f(Object(n.useState)(null), 2),
			r = t[0],
			p = t[1],
			d = Object(c.d)(),
			h = e.user["".concat(e.test.code, "_status")],
			m = e.user.full_access || e.user["".concat(e.test.code, "_access")],
			v = o.a.createRef(),
			y = f(Object(n.useState)({}), 2),
			b = y[0],
			g = y[1],
			w = f(Object(n.useState)(!1), 2),
			E = w[0],
			_ = w[1],
			O = function(e) {
				var t = e.getBoundingClientRect();
				g({
					left: t.x + t.width / 2,
					top: t.y + window.scrollY
				})
			};
		return "started" === h && "".concat(e.progress, "%"), Object(n.useEffect)((function() {
			return "started" === e.status && e.test.timed && !localStorage.getItem(e.test.code) && function t() {
					var r = localStorage.getItem("".concat(e.test.code, "StartedAt")),
						n = r ? parseInt(r) + 6e4 * e.test.time - Date.now() : 0;
					if (n <= 0) console.log("Reset Test"), s.default.resetTest(e.test.id).then((function(t) {
						localStorage.removeItem("".concat(e.test.code, "StartedAt")), localStorage.removeItem(e.test.code), setStatus(t.status);
						var r = {};
						r["".concat(e.test.code, "_status")] = t.status, d(Object(l.refreshUserDashboard)(r))
					}));
					else {
						var o = setTimeout((function() {
							t()
						}), n + 100);
						p(o)
					}
				}(),
				function() {
					r && clearTimeout(r)
				}
		}), []), o.a.createElement(u.FadeInSection, null, o.a.createElement("div", {
			className: "finished" === h ? "test-container" : "test-container opacity"
		}, o.a.createElement("a", {
			href: "/tests/" + e.test.path
		}, o.a.createElement("div", {
			className: "grid-x"
		}, o.a.createElement("div", {
			className: "small-12 cell"
		}, m || !e.test.timed && "finished" === h ? null : e.test.timed ? o.a.createElement("div", {
			className: "tooltip-trigger small-icons locked",
			"data-tooltip": !0,
			ref: v,
			onMouseOver: function(e) {
				O(e.target), _(!E)
			},
			onMouseOut: function(e) {
				_(!E)
			}
		}) : o.a.createElement("a", {
			href: "/tests/".concat(e.test.path, "/take"),
			className: "progress__link"
		}, "Try for free"), !m && E && o.a.createElement(i.default, null, o.a.createElement(a.default, {
			coords: b,
			updateTooltipCoords: function() {
				return O(v.current)
			}
		}, o.a.createElement("span", null, "Upgrade to take these tests"))))), o.a.createElement("div", {
			className: "large-icon float-center " + e.test.code + "-small-white"
		}), o.a.createElement("p", {
			className: "test-title text-center"
		}, e.test.name), o.a.createElement("div", {
			className: "status-circle " + h
		}, o.a.createElement("div", {
			className: "finished" === h ? "large-icon completed-test" : ""
		}), " "))))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return x
	}));
	var n = r(0),
		o = r.n(n),
		a = r(106),
		i = r.n(a),
		s = r(35),
		c = r.n(s),
		l = r(104),
		u = r.n(l),
		f = r(297),
		p = r(124),
		d = r(23),
		h = ["index"];

	function m(e, t) {
		if (null == e) return {};
		var r, n, o = function(e, t) {
			if (null == e) return {};
			var r, n, o = {},
				a = Object.keys(e);
			for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
			return o
		}(e, t);
		if (Object.getOwnPropertySymbols) {
			var a = Object.getOwnPropertySymbols(e);
			for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
		}
		return o
	}

	function v(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function y(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? v(Object(r), !0).forEach((function(t) {
				b(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function b(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function g(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function w() {
		return (w = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e, t, r) {
			var n = E(e, t);
			if (n) {
				var o = Object.getOwnPropertyDescriptor(n, t);
				return o.get ? o.get.call(arguments.length < 3 ? e : r) : o.value
			}
		}).apply(this, arguments)
	}

	function E(e, t) {
		for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = T(e)););
		return e
	}

	function _(e, t) {
		return (_ = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function O(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = T(e);
			if (t) {
				var o = T(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return S(this, r)
		}
	}

	function S(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function T(e) {
		return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}

	function j() {}

	function x(e) {
		var t;
		return (t = function(e) {
			! function(e, t) {
				if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), Object.defineProperty(e, "prototype", {
					writable: !1
				}), t && _(e, t)
			}(s, e);
			var t, r, n, a = O(s);

			function s(e) {
				var t;
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, s), (t = a.call(this, e)).onMouseDown = function(e) {
					if (0 === e.button) {
						var r = t.props.vertical,
							n = d.getMousePosition(r, e);
						if (d.isEventFromHandle(e, t.handlesRefs)) {
							var o = d.getHandleCenterPosition(r, e.target);
							t.dragOffset = n - o, n = o
						} else t.dragOffset = 0;
						t.removeDocumentEvents(), t.onStart(n), t.addDocumentMouseEvents()
					}
				}, t.onTouchStart = function(e) {
					if (!d.isNotTouchEvent(e)) {
						var r = t.props.vertical,
							n = d.getTouchPosition(r, e);
						if (d.isEventFromHandle(e, t.handlesRefs)) {
							var o = d.getHandleCenterPosition(r, e.target);
							t.dragOffset = n - o, n = o
						} else t.dragOffset = 0;
						t.onStart(n), t.addDocumentTouchEvents(), d.pauseEvent(e)
					}
				}, t.onFocus = function(e) {
					var r = t.props,
						n = r.onFocus,
						o = r.vertical;
					if (d.isEventFromHandle(e, t.handlesRefs)) {
						var a = d.getHandleCenterPosition(o, e.target);
						t.dragOffset = 0, t.onStart(a), d.pauseEvent(e), n && n(e)
					}
				}, t.onBlur = function(e) {
					var r = t.props.onBlur;
					t.onEnd(), r && r(e)
				}, t.onMouseUp = function() {
					t.handlesRefs[t.prevMovedHandleIndex] && t.handlesRefs[t.prevMovedHandleIndex].clickFocus()
				}, t.onMouseMove = function(e) {
					if (t.sliderRef) {
						var r = d.getMousePosition(t.props.vertical, e);
						t.onMove(e, r - t.dragOffset)
					} else t.onEnd()
				}, t.onTouchMove = function(e) {
					if (!d.isNotTouchEvent(e) && t.sliderRef) {
						var r = d.getTouchPosition(t.props.vertical, e);
						t.onMove(e, r - t.dragOffset)
					} else t.onEnd()
				}, t.onKeyDown = function(e) {
					t.sliderRef && d.isEventFromHandle(e, t.handlesRefs) && t.onKeyboard(e)
				}, t.saveSlider = function(e) {
					t.sliderRef = e
				};
				var r = e.step,
					n = e.max,
					o = e.min,
					i = !isFinite(n - o) || (n - o) % r === 0;
				return u()(!r || Math.floor(r) !== r || i, "Slider[max] - Slider[min] (%s) should be a multiple of Slider[step] (%s)", n - o, r), t.handlesRefs = {}, t
			}
			return t = s, (r = [{
				key: "componentDidMount",
				value: function() {
					this.document = this.sliderRef && this.sliderRef.ownerDocument;
					var e = this.props,
						t = e.autoFocus,
						r = e.disabled;
					t && !r && this.focus()
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					w(T(s.prototype), "componentWillUnmount", this) && w(T(s.prototype), "componentWillUnmount", this).call(this), this.removeDocumentEvents()
				}
			}, {
				key: "getSliderStart",
				value: function() {
					var e = this.sliderRef,
						t = this.props,
						r = t.vertical,
						n = t.reverse,
						o = e.getBoundingClientRect();
					return r ? n ? o.bottom : o.top : window.pageXOffset + (n ? o.right : o.left)
				}
			}, {
				key: "getSliderLength",
				value: function() {
					var e = this.sliderRef;
					if (!e) return 0;
					var t = e.getBoundingClientRect();
					return this.props.vertical ? t.height : t.width
				}
			}, {
				key: "addDocumentTouchEvents",
				value: function() {
					this.onTouchMoveListener = i()(this.document, "touchmove", this.onTouchMove), this.onTouchUpListener = i()(this.document, "touchend", this.onEnd)
				}
			}, {
				key: "addDocumentMouseEvents",
				value: function() {
					this.onMouseMoveListener = i()(this.document, "mousemove", this.onMouseMove), this.onMouseUpListener = i()(this.document, "mouseup", this.onEnd)
				}
			}, {
				key: "removeDocumentEvents",
				value: function() {
					this.onTouchMoveListener && this.onTouchMoveListener.remove(), this.onTouchUpListener && this.onTouchUpListener.remove(), this.onMouseMoveListener && this.onMouseMoveListener.remove(), this.onMouseUpListener && this.onMouseUpListener.remove()
				}
			}, {
				key: "focus",
				value: function() {
					this.props.disabled || this.handlesRefs[0].focus()
				}
			}, {
				key: "blur",
				value: function() {
					var e = this;
					this.props.disabled || Object.keys(this.handlesRefs).forEach((function(t) {
						e.handlesRefs[t] && e.handlesRefs[t].blur && e.handlesRefs[t].blur()
					}))
				}
			}, {
				key: "calcValue",
				value: function(e) {
					var t = this.props,
						r = t.vertical,
						n = t.min,
						o = t.max,
						a = Math.abs(Math.max(e, 0) / this.getSliderLength());
					return r ? (1 - a) * (o - n) + n : a * (o - n) + n
				}
			}, {
				key: "calcValueByPos",
				value: function(e) {
					var t = (this.props.reverse ? -1 : 1) * (e - this.getSliderStart());
					return this.trimAlignValue(this.calcValue(t))
				}
			}, {
				key: "calcOffset",
				value: function(e) {
					var t = this.props,
						r = t.min;
					return (e - r) / (t.max - r) * 100
				}
			}, {
				key: "saveHandle",
				value: function(e, t) {
					this.handlesRefs[e] = t
				}
			}, {
				key: "render",
				value: function() {
					var e, t = this.props,
						r = t.prefixCls,
						n = t.className,
						a = t.marks,
						i = t.dots,
						l = t.step,
						u = t.included,
						p = t.disabled,
						d = t.vertical,
						h = t.reverse,
						m = t.min,
						v = t.max,
						g = t.children,
						E = t.maximumTrackStyle,
						_ = t.style,
						O = t.railStyle,
						S = t.dotStyle,
						x = t.activeDotStyle,
						P = w(T(s.prototype), "render", this).call(this),
						k = P.tracks,
						N = P.handles,
						R = c()(r, (b(e = {}, "".concat(r, "-with-marks"), Object.keys(a).length), b(e, "".concat(r, "-disabled"), p), b(e, "".concat(r, "-vertical"), d), b(e, n, n), e));
					return o.a.createElement("div", {
						ref: this.saveSlider,
						className: R,
						onTouchStart: p ? j : this.onTouchStart,
						onMouseDown: p ? j : this.onMouseDown,
						onMouseUp: p ? j : this.onMouseUp,
						onKeyDown: p ? j : this.onKeyDown,
						onFocus: p ? j : this.onFocus,
						onBlur: p ? j : this.onBlur,
						style: _
					}, o.a.createElement("div", {
						className: "".concat(r, "-rail"),
						style: y(y({}, E), O)
					}), k, o.a.createElement(f.default, {
						prefixCls: r,
						vertical: d,
						reverse: h,
						marks: a,
						dots: i,
						step: l,
						included: u,
						lowerBound: this.getLowerBound(),
						upperBound: this.getUpperBound(),
						max: v,
						min: m,
						dotStyle: S,
						activeDotStyle: x
					}), N, g)
				}
			}]) && g(t.prototype, r), n && g(t, n), Object.defineProperty(t, "prototype", {
				writable: !1
			}), s
		}(e)).displayName = "ComponentEnhancer(".concat(e.displayName, ")"), t.defaultProps = y(y({}, e.defaultProps), {}, {
			prefixCls: "rc-slider",
			className: "",
			min: 0,
			max: 100,
			step: 1,
			marks: {},
			handle: function(e) {
				var t = e.index,
					r = m(e, h);
				return delete r.dragging, null === r.value ? null : o.a.createElement(p.default, Object.assign({}, r, {
					key: t
				}))
			},
			onBeforeChange: j,
			onChange: j,
			onAfterChange: j,
			included: !0,
			disabled: !1,
			dots: !1,
			vertical: !1,
			reverse: !1,
			trackStyle: [{}],
			handleStyle: [{}],
			railStyle: {},
			dotStyle: {},
			activeDotStyle: {}
		}), t
	}
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(35),
		i = r.n(a),
		s = r(104),
		c = r.n(s);

	function l(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function u(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? l(Object(r), !0).forEach((function(t) {
				f(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function f(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}
	t.default = function(e) {
		var t = e.prefixCls,
			r = e.vertical,
			n = e.reverse,
			a = e.marks,
			s = e.dots,
			l = e.step,
			p = e.included,
			d = e.lowerBound,
			h = e.upperBound,
			m = e.max,
			v = e.min,
			y = e.dotStyle,
			b = e.activeDotStyle,
			g = m - v,
			w = function(e, t, r, n, o, a) {
				c()(!r || n > 0, "`Slider[step]` should be a positive number in order to make Slider[dots] work.");
				var i = Object.keys(t).map(parseFloat).sort((function(e, t) {
					return e - t
				}));
				if (r && n)
					for (var s = o; s <= a; s += n) - 1 === i.indexOf(s) && i.push(s);
				return i
			}(0, a, s, l, v, m).map((function(e) {
				var a, s = "".concat(Math.abs(e - v) / g * 100, "%"),
					c = !p && e === h || p && e <= h && e >= d,
					l = e === h,
					m = u(u({}, y), {}, f({}, r ? n ? "top" : "bottom" : n ? "right" : "left", s));
				c && (m = u(u({}, m), b));
				var w = i()((f(a = {}, "".concat(t, "-dot"), !0), f(a, "".concat(t, "-dot-active"), c), f(a, "".concat(t, "-dot-current"), l), f(a, "".concat(t, "--dot-").concat(e), !0), a));
				return o.a.createElement("span", {
					className: w,
					style: m,
					key: e
				}, o.a.createElement("span", {
					className: "rc-slider-mark-text"
				}, e), o.a.createElement("span", {
					className: "".concat(t, "-point")
				}))
			}));
		return o.a.createElement("div", {
			className: "".concat(t, "-step")
		}, w)
	}
}, function(e, t, r) {
	"use strict";
	r.r(t);
	r(0);
	var n = r(21);
	t.default = n.default
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return a
	}));
	var n = r(0),
		o = r.n(n);

	function a(e) {
		var t = e.user ? [e.user.interests_status, e.user.personality_status, e.user.motivators_status, e.user.abstract_status, e.user.numerical_status, e.user.verbal_status].filter((function(e) {
				return "finished" === e
			})).length : 0,
			r = "Finish all to reveal your career matches.";
		return 0 === t ? r = "Complete all to reveal your career matches." : 6 === t && (r = e.user.full_access ? "Your career matches are ready!" : "Full Access is required in order to see your full career matches"), o.a.createElement("div", {
			className: "tooltip-box tooltip-box-ci-test"
		}, o.a.createElement("div", {
			className: "tooltip-trigger small-icon white-tooltip-icon"
		}), o.a.createElement("p", null, o.a.createElement("b", null, 0 === t ? 1 : t, " of 6 tests", t > 0 ? " complete" : "", "."), " ", r))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return i
	}));
	var n = r(10),
		o = r(190),
		a = r(79);

	function i(e) {
		return Object(n.d)(o.default, e, Object(n.a)(a.a))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return p
	}));
	var n = r(11),
		o = r(156),
		a = r(52),
		i = r.n(a);

	function s(e, t) {
		var r = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
		if (!r) {
			if (Array.isArray(e) || (r = function(e, t) {
					if (!e) return;
					if ("string" === typeof e) return c(e, t);
					var r = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === r && e.constructor && (r = e.constructor.name);
					if ("Map" === r || "Set" === r) return Array.from(e);
					if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(e, t)
				}(e)) || t && e && "number" === typeof e.length) {
				r && (e = r);
				var n = 0,
					o = function() {};
				return {
					s: o,
					n: function() {
						return n >= e.length ? {
							done: !0
						} : {
							done: !1,
							value: e[n++]
						}
					},
					e: function(e) {
						throw e
					},
					f: o
				}
			}
			throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}
		var a, i = !0,
			s = !1;
		return {
			s: function() {
				r = r.call(e)
			},
			n: function() {
				var e = r.next();
				return i = e.done, e
			},
			e: function(e) {
				s = !0, a = e
			},
			f: function() {
				try {
					i || null == r.return || r.return()
				} finally {
					if (s) throw a
				}
			}
		}
	}

	function c(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
		return n
	}

	function l(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function u(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? l(Object(r), !0).forEach((function(t) {
				f(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function f(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function p() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.default.statementTest,
			t = arguments.length > 1 ? arguments[1] : void 0;
		switch (t.type) {
			case n.LOAD_USER_STATEMENT_TEST:
				return {
					test: t.test, status: "open", user: t.user, currentPage: 0, activePage: 0, showSaveProgress: !1, userStatements: []
				};
			case n.SET_USER_STATEMENT_TEST:
				return t.user ? Object.assign({}, e, {
					user: t.user
				}) : e;
			case n.USER_START_STATEMENT_TEST:
				var r = d(e.test),
					a = r.filter((function(e) {
						return e.answered
					})),
					i = a[a.length - 1];
				i = i ? i.page : 1;
				var s = !e.user && i >= 2;
				return localStorage.setItem("".concat(e.test.code, "_status"), "started"), Object.assign({}, e, {
					currentPage: i,
					userStatements: r,
					activePage: i,
					status: "started",
					showSaveProgress: s
				});
			case n.USER_GO_NEXT_STATEMENT_TEST_PAGE:
				var c = e.currentPage + 1,
					l = e.userStatements.length,
					f = e.activePage > c ? e.activePage : c;
				return c > l && (c = "overview", f = e.activePage), Object.assign({}, e, {
					currentPage: c,
					activePage: f
				});
			case n.USER_SKIP_STATEMENT_TEST_PAGE:
				var p = e.currentPage + 1,
					m = e.userStatements.length,
					v = e.activePage > p ? e.activePage : p;
				return p > m && (p = "overview", v = e.activePage), u(u({}, e), {
					currentPage: p,
					activePage: v
				});
			case n.USER_GO_PREV_STATEMENT_TEST_PAGE:
				return Object.assign({}, e, {
					currentPage: e.currentPage - 1
				});
			case n.SET_SHOW_SAVE_PROGRESS:
				return Object.assign({}, e, {
					showSaveProgress: !e.user
				});
			case n.USER_GO_TO_STATEMENT_TEST_OVERVIEW:
				return Object.assign({}, e, {
					currentPage: "overview"
				});
			case n.USER_NAVIGATE_STATEMENT_TEST_TO_PAGE:
				return Object.assign({}, e, {
					currentPage: t.page
				});
			case n.USER_BACK_TO_STATEMENT_TEST:
				return Object.assign({}, e, {
					currentPage: e.activePage
				});
			case n.USER_SUCCESSFULLY_SUBMITTED_STATEMENT_TEST:
				var y = t.response.result;
				if (y && "reset" === y) {
					if (t.response.user) h(e.test);
					else if (localStorage.getItem("".concat(e.test.code, "_status"))) {
						var b = localStorage.getItem("".concat(e.test.code, "_result")) ? "finished" : "not_started";
						localStorage.setItem("".concat(e.test.code, "_status"), b)
					}
					return Object.assign({}, e, {
						status: "reset"
					})
				}
				return t.response.user ? (localStorage.removeItem("".concat(e.test.code, "_result")), localStorage.removeItem("".concat(e.test.code, "_status")), localStorage.removeItem("".concat(e.test.code))) : "interests" === e.test.code && (localStorage.setItem(e.test.code, JSON.stringify(e.userStatements)), "finished" === t.status && y ? localStorage.setItem("".concat(e.test.code, "_result"), JSON.stringify(y)) : localStorage.removeItem("".concat(e.test.code, "_result")), localStorage.setItem("".concat(e.test.code, "_status"), t.status)), "finished" === t.status && (document.cookie = "answersSubmittedBeforeRedirect=1; path=/;"), Object.assign({}, e, {
					status: "started" === t.status ? "saved" : "finished"
				});
			case n.USER_DRAG_STATEMENT_TEST_STATEMENTS:
				var g = e.userStatements.map((function(r) {
					return r.page !== e.currentPage ? r : Object.assign({}, r, {
						statements: r.statements.map((function(e) {
							return e.order === t.oldIndex ? e.order = t.newIndex : t.newIndex < t.oldIndex && e.order <= t.oldIndex && e.order >= t.newIndex ? e.order = e.order + 1 : t.newIndex > t.oldIndex && e.order >= t.oldIndex && e.order <= t.newIndex && (e.order = e.order - 1), e
						})),
						answered: !0,
						page: r.page
					})
				}));
				return localStorage.setItem(e.test.code, JSON.stringify(g)), Object.assign({}, e, {
					userStatements: g,
					activePage: e.activePage > e.currentPage ? e.activePage : e.currentPage
				});
			default:
				return e
		}
	}

	function d(e) {
		var t = localStorage.getItem(e.code),
			r = localStorage.getItem("".concat(e.code, "_status"));
		if (t && (t = JSON.parse(t)), t && r && "finished" !== r) return t;
		var n = e.statements,
			o = n.length / 5,
			a = [],
			c = {};
		e.user_statements.length > 0 && (c = m(e.user_statements, "page"));
		for (var l = [], u = function(e) {
				l.push(e);
				var t = e + 1,
					r = [];
				c[t] && (r = c[t].map((function(e) {
					return Object.assign({}, e, {
						order: 5 - e.score
					})
				})), n = n.filter((function(e) {
					return !r.find((function(t) {
						return e.id === t.id
					}))
				})));
				var o = {
					statements: r,
					page: t,
					full: 5 === r.length,
					answered: 5 === r.length
				};
				a.push(o)
			}, f = 0; f < o; f++) u(f);
		i()(n);
		var p = m(n, "group_id");
		i()(l);
		var d = 0,
			h = Object.keys(p);
		return i()(h), h.map((function(e) {
			var t, r = s(p[e]);
			try {
				for (r.s(); !(t = r.n()).done;)
					for (var n = t.value;;) {
						d >= o && (d = 0);
						var i = a[l[d]];
						if (!i.full) {
							var c = i.statements;
							n.order = i.statements.length, c.push(n), i.statements = c, 5 === c.length && (i.full = !0), d++;
							break
						}
						d++
					}
			} catch (u) {
				r.e(u)
			} finally {
				r.f()
			}
		})), a
	}

	function h(e) {
		localStorage.removeItem("".concat(e.code, "_result")), localStorage.removeItem("".concat(e.code, "_status")), localStorage.removeItem("".concat(e.code))
	}

	function m(e, t) {
		return e.reduce((function(e, r) {
			return (e[r[t]] = e[r[t]] || []).push(r), e
		}), {})
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return u
	}));
	var n = r(11),
		o = r(156),
		a = r(52),
		i = r.n(a);

	function s(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function c(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? s(Object(r), !0).forEach((function(t) {
				l(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function l(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function u() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.default.aptitudeTest,
			t = arguments.length > 1 ? arguments[1] : void 0;
		switch (t.type) {
			case n.LOAD_USER_APTITUDE_TEST:
				var r = 0,
					a = "open",
					s = t.test;
				return "abstract" === t.test.code && (s.questions = s.questions.map((function(e) {
					return c(c({}, e), {}, {
						answer_variants: i()(e.answer_variants)
					})
				}))), {
					test: s,
					status: a,
					user: t.user,
					currentPage: r,
					activePage: 0,
					exampleQuestions: p(t.test),
					showTimeWarning: !0,
					userQuestions: f(t.test)
				};
			case n.USER_APTITUDE_TEST_TIMEOUT:
				return Object.assign({}, e, {
					currentPage: "timeout"
				});
			case n.USER_HIDE_TIME_WARNING_APTITUDE_TEST:
				return Object.assign({}, e, {
					showTimeWarning: !1
				});
			case n.USER_START_APTITUDE_TEST:
				var l = e.userQuestions.filter((function(e) {
						return !!e.user_answer
					})),
					u = l[l.length - 1],
					d = u ? u.number : 1,
					h = d;
				return localStorage.getItem("".concat(e.test.code, "StartedAt")) || localStorage.setItem("".concat(e.test.code, "StartedAt"), JSON.stringify(Date.now())), Object.assign({}, e, {
					currentPage: d,
					status: "started",
					activePage: h
				});
			case n.USER_GO_EXAMPLE_APTITUDE_TEST_PAGE:
				return Object.assign({}, e, {
					currentPage: "example",
					currentExamplePage: 1
				});
			case n.USER_GO_NEXT_EXAMPLE_APTITUDE_TEST_PAGE:
				var m = e.currentExamplePage + 1,
					v = {};
				return v = m > e.exampleQuestions.length ? {
					currentPage: "overview_start"
				} : {
					currentExamplePage: m
				}, Object.assign({}, e, v);
			case n.USER_SKIP_EXAMPLE_QUESTIONS:
				return Object.assign({}, e, {
					currentPage: "overview_start"
				});
			case n.USER_GO_PREV_EXAMPLE_APTITUDE_TEST_PAGE:
				var y = e.currentExamplePage - 1,
					b = {};
				return b = 0 === y ? {
					currentPage: 0
				} : {
					currentExamplePage: y
				}, Object.assign({}, e, b);
			case n.USER_ANSWER_EXAMPLE_APTITUDE_TEST_QUESTION:
				var g = e.exampleQuestions.map((function(r) {
					return r.number !== e.currentExamplePage ? r : Object.assign({}, r, {
						user_answer: t.answer_id
					})
				}));
				return Object.assign({}, e, {
					exampleQuestions: g
				});
			case n.USER_GO_NEXT_APTITUDE_TEST_PAGE:
				var w = e.currentPage + 1,
					E = e.userQuestions.length,
					_ = e.activePage > w ? e.activePage : w;
				return w > E && (w = "overview", _ = e.activePage), Object.assign({}, e, {
					currentPage: w,
					activePage: _
				});
			case n.USER_GO_PREV_APTITUDE_TEST_PAGE:
				return Object.assign({}, e, {
					currentPage: e.currentPage - 1
				});
			case n.USER_GO_TO_APTITUDE_TEST_OVERVIEW:
				return Object.assign({}, e, {
					currentPage: "overview"
				});
			case n.USER_NAVIGATE_APTITUDE_TEST_TO_PAGE:
				return Object.assign({}, e, {
					currentPage: t.page
				});
			case n.USER_BACK_TO_APTITUDE_TEST:
				var O = e.activePage || 1;
				return Object.assign({}, e, {
					currentPage: O
				});
			case n.USER_SUCCESSFULLY_SUBMITTED_APTITUDE_TEST:
				return localStorage.removeItem("".concat(e.test.code, "StartedAt")), localStorage.removeItem(e.test.code), "finished" === t.status && (document.cookie = "answersSubmittedBeforeRedirect=1; path=/;"), Object.assign({}, e, {
					status: "reset" === t.response.result ? "reset" : "finished"
				});
			case n.USER_ANSWER_APTITUDE_TEST_QUESTION:
				var S = e.userQuestions.map((function(r) {
					return r.number !== e.currentPage ? r : Object.assign({}, r, {
						user_answer: t.answer_id
					})
				}));
				return localStorage.setItem(e.test.code, JSON.stringify(S.map((function(e) {
					return {
						question_id: e.id,
						answer_variant_id: e.user_answer
					}
				})))), Object.assign({}, e, {
					userQuestions: S,
					activePage: e.activePage > e.currentPage ? e.activePage : e.currentPage
				});
			default:
				return e
		}
	}

	function f(e) {
		var t = [],
			r = localStorage.getItem(e.code);
		r && (r = JSON.parse(r));
		var n = r || [];
		return e.questions.sort((function(e) {
			return e.number
		})).filter((function(e) {
			return !e.example
		})).map((function(e, r) {
			var o = n.find((function(t) {
				return t.question_id === e.id
			}));
			t.push(Object.assign({}, e, {
				user_answer: o ? o.answer_variant_id : null,
				number: r + 1
			}))
		})), t
	}

	function p(e) {
		var t = [];
		return e.questions.sort((function(e) {
			return e.number
		})).filter((function(e) {
			return !!e.example
		})).map((function(e, r) {
			t.push(Object.assign({}, e, {
				user_answer: null,
				number: r + 1
			}))
		})), t
	}
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(304);

	function i(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function s(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function c(e, t) {
		return (c = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function l(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = f(e);
			if (t) {
				var o = f(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return u(this, r)
		}
	}

	function u(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function f(e) {
		return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var p = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && c(e, t)
		}(f, e);
		var t, r, n, u = l(f);

		function f() {
			var e;
			i(this, f);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = u.call.apply(u, [this].concat(r))).state = {
				isMobile: !1,
				height: window.innerHeight,
				boxHeight: 0
			}, e.boxRef = o.a.createRef(), e.detectDevice = function() {
				e.setState({
					height: window.innerHeight
				});
				var t = window.innerWidth < 640;
				t !== e.state.isMobile && e.setState({
					isMobile: t
				})
			}, e
		}
		return t = f, (r = [{
			key: "componentDidMount",
			value: function() {
				this.detectDevice(), window.addEventListener("resize", this.detectDevice)
			}
		}, {
			key: "componentDidUpdate",
			value: function(e, t, r) {
				if (this.boxRef.current) {
					var n = this.boxRef.current.clientHeight;
					this.state.boxHeight !== n && this.setState({
						boxHeight: n
					})
				}
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				window.removeEventListener("resize", this.detectDevice)
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.props.showSaveProgress && this.state.isMobile,
					r = t ? "main-test__wrapper main-test__wrapper--for-mobile" : "main-test__wrapper",
					n = t ? 60 : 0,
					i = this.state.isMobile ? this.state.height - n : "initial",
					s = this.props.test.code;
				return o.a.createElement("div", {
					ref: this.props.onRef,
					className: "blur-box-container blur-box-container__main blur-box-container--spaced"
				}, o.a.createElement("div", {
					className: "blur-box blur-box__main"
				}, o.a.createElement("div", {
					className: s + " main-test align-center"
				}, o.a.createElement("div", {
					className: r + (e.state.isMobile ? t ? e.state.boxHeight + 220 > e.state.height ? " large-padded" : " large-margin" : " large" : ""),
					style: {
						maxHeight: i
					}
				}, o.a.createElement("div", {
					className: "inner",
					style: {
						minHeight: i
					}
				}, o.a.createElement("div", {
					className: "main-test__box",
					ref: this.boxRef
				}, o.a.createElement("div", {
					className: "grid-x main-test__top"
				}, o.a.createElement("h2", {
					className: "main-test__header"
				}, this.props.test.name, " Test")), this.props.statementPages.filter((function(t) {
					return t.page === e.props.currentPage
				})).map((function(e) {
					return o.a.createElement(a.default, {
						key: e.page,
						statements: e.statements,
						answered: e.answered,
						page: e.page
					})
				})))))), o.a.createElement("div", {
					className: "bg-copy " + this.props.test.code
				})))
			}
		}]) && s(t.prototype, r), n && s(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), f
	}(n.Component);
	t.default = p
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(10),
		i = r(2),
		s = r(53),
		c = r(208),
		l = r(16),
		u = r(147);

	function f(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function p(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function d(e, t) {
		return (d = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function h(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = v(e);
			if (t) {
				var o = v(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return m(this, r)
		}
	}

	function m(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function v(e) {
		return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var y = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && d(e, t)
		}(i, e);
		var t, r, n, a = h(i);

		function i() {
			var e;
			f(this, i);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = a.call.apply(a, [this].concat(r))).handleWindowBeforeUnload = function(t) {
				if (localStorage.getItem("".concat(e.props.statementTest.test.code))) return t.preventDefault(), t.returnValue = "Your test results and progress will be lost.", "Your test results and progress will be lost."
			}, e.goToNextPage = function() {
				e.props.answered ? e.props.actions.userGoNextTestPage() : e.props.actions.userSkipTestPage(), !e.props.statementTest.showSaveProgress && e.props.statementTest.currentPage >= 1 && e.props.actions.setShowSaveProgress()
			}, e.goToPreviousPage = function() {
				e.props.actions.userGoPrevTestPage()
			}, e.goToPage = function(t) {
				e.props.actions.userNavigateTestToPage(parseInt(t)), !e.props.statementTest.showSaveProgress && t >= 2 && e.props.actions.setShowSaveProgress()
			}, e.onSortStatements = function(t, r) {
				e.props.actions.userDragTestStatements(t, r)
			}, e
		}
		return t = i, (r = [{
			key: "componentDidMount",
			value: function() {
				window.addEventListener("beforeunload", this.handleWindowBeforeUnload)
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				window.removeEventListener("beforeunload", this.handleWindowBeforeUnload)
			}
		}, {
			key: "render",
			value: function() {
				var e = this.props.statements.sort((function(e, t) {
					return e.order - t.order
				}));
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(u.default, {
					currentPage: this.props.statementTest.currentPage,
					activePage: this.props.statementTest.activePage,
					questions: this.props.statementTest.userStatements,
					goToPage: this.goToPage
				}), o.a.createElement("div", {
					className: "grid-x"
				}, o.a.createElement("p", {
					className: "test__question"
				}, "interests" === this.props.statementTest.test.code ? "Rank the activities in order of preference." : "Arrange the following statements according to their importance to you.")), o.a.createElement(c.default, {
					sortItems: this.onSortStatements,
					items: e
				}), o.a.createElement("div", {
					className: "grid-x fixed-grid"
				}, o.a.createElement(l.default, {
					onClick: this.goToPreviousPage,
					color: "white",
					className: "nav-btn"
				}, o.a.createElement("span", {
					className: "small-icons back-arrow-white-xs is-left"
				}), "Previous"), o.a.createElement(l.default, {
					onClick: this.goToNextPage,
					color: this.props.answered ? "green" : "white",
					className: (this.props.answered, "nav-btn")
				}, this.props.answered ? "Next" : "Skip", o.a.createElement("span", {
					className: "small-icons next-arrow-white-xs is-right"
				}))))
			}
		}]) && p(t.prototype, r), n && p(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), i
	}(n.Component);
	t.default = Object(i.b)((function(e, t) {
		return {
			statementTest: e.statementTest,
			statements: t.statements
		}
	}), (function(e) {
		return {
			actions: Object(a.b)(Object.assign({}, s), e)
		}
	}))(y)
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(10),
		i = r(2),
		s = r(53),
		c = r(1),
		l = r(31),
		u = r(16),
		f = r(220),
		p = r(210);

	function d(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function h(e, t) {
		return (h = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function m(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = y(e);
			if (t) {
				var o = y(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return v(this, r)
		}
	}

	function v(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function y(e) {
		return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var b = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && h(e, t)
		}(i, e);
		var t, r, n, a = m(i);

		function i(e) {
			var t;
			return function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, i), (t = a.call(this, e)).backToTest = function(e) {
				e.preventDefault(), t.props.actions.userBackToTest()
			}, t.gotToPage = function(e) {
				t.props.actions.userNavigateTestToPage(e)
			}, t.saveAndContinueLater = function() {
				t.props.statementTest.user ? t.submitTest("started") : t.saveProgressModalRef.current.open()
			}, t.closeConfirmationModal = function() {
				t.confirmationModalRef.current.close()
			}, t.submitAndConfirm = function() {
				t.props.statementTest.userStatements.filter((function(e) {
					return !e.answered
				})).length > 0 ? t.confirmationModalRef.current.open() : t.finishTest(!1)
			}, t.finishTest = function() {
				var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
				e && t.confirmationModalRef.current.close(), t.props.statementTest.user ? t.setState({
					isLoading: !0
				}, (function() {
					t.submitTest("finished")
				})) : t.saveResultModalRef.current.open()
			}, t.onSaveUser = function(e) {
				t.saveProgressModalRef.current.close(), t.setState({
					newsletterSubscription: e.newsletter_subscription
				}), t.submitTest("started")
			}, t.closeResultModal = function() {
				t.state.testSubmitted && (document.location = "/tests/".concat(t.props.statementTest.test.path, "/result"))
			}, t.onSaveAndSubmitUser = function() {
				t.setState({
					isLoading: !0,
					testSubmitted: !0
				}, (function() {
					localStorage.removeItem("".concat(t.props.statementTest.test.code, "_result")), localStorage.removeItem("".concat(t.props.statementTest.test.code, "_status")), localStorage.removeItem("".concat(t.props.statementTest.test.code)), document.cookie = "answersSubmittedBeforeRedirect=1; path=/;"
				}))
			}, t.onCloseSaveModal = function() {
				return document.location.href = "/dashboard"
			}, t.submitTest = function(e) {
				var r = {},
					n = [];
				t.props.statementTest.userStatements.filter((function(e) {
					return e.answered
				})).map((function(e) {
					e.statements.map((function(t) {
						n.push({
							statement_id: t.id,
							score: 5 - t.order,
							page: e.page
						})
					}))
				})), r["".concat(t.props.statementTest.test.code, "_answers")] = n, r["".concat(t.props.statementTest.test.code, "_status")] = e, t.setState({
					isLoading: !0
				}, (function() {
					t.props.actions.submitTest(t.props.statementTest.test.id, r, e)
				}))
			}, t.state = {
				isLoading: !1,
				testSubmitted: !1
			}, t.savedModalRef = o.a.createRef(), t.saveProgressModalRef = o.a.createRef(), t.confirmationModalRef = o.a.createRef(), t.saveResultModalRef = o.a.createRef(), t
		}
		return t = i, (r = [{
			key: "componentDidUpdate",
			value: function() {
				return "reset" === this.props.statementTest.status ? document.location.href = "/dashboard" : "finished" === this.props.statementTest.status ? document.location.href = "/tests/".concat(this.props.statementTest.test.path, "/result") : void("saved" === this.props.statementTest.status && this.savedModalRef.current.open())
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.props.statementTest.userStatements,
					r = this.props.statementTest.showSaveProgress && this.props.isMobile;
				return o.a.createElement("div", {
					className: "blur-box-container blur-box-container--spaced overview__container"
				}, this.state.isLoading ? o.a.createElement(c.Loader, null) : null, o.a.createElement("div", {
					className: "blur-box"
				}, o.a.createElement("div", {
					className: "main-test align-center"
				}, o.a.createElement("div", {
					className: "main-test__wrapper" + (r ? " large-padded" : "")
				}, o.a.createElement("div", {
					className: "med-spaced-between small-flex-center"
				}, o.a.createElement("div", null, o.a.createElement("p", {
					className: "large-mobile overview__test-name"
				}, this.props.statementTest.test.name), o.a.createElement("p", {
					className: "large-mobile overview__subheading"
				}, "Overview")), o.a.createElement("div", {
					className: "flex"
				}, o.a.createElement("div", {
					className: "overview__space"
				}, o.a.createElement("p", {
					className: "overview__answered"
				}, t.filter((function(e) {
					return e.answered
				})).length), o.a.createElement("p", null, "Answered")), o.a.createElement("div", null, o.a.createElement("p", {
					className: "overview__unanswered"
				}, t.filter((function(e) {
					return !e.answered
				})).length), o.a.createElement("p", null, "Unanswered")))), o.a.createElement("div", {
					className: "grid-x overview-gutter extra-space small-flex-center"
				}, t.map((function(t) {
					return o.a.createElement(u.default, {
						onClick: function() {
							return e.gotToPage(t.page)
						},
						className: "button--answer",
						key: t.page,
						color: t.answered ? "" : "grey wrong"
					}, o.a.createElement("p", {
						className: "button--answer__number"
					}, t.page))
				})))), o.a.createElement("div", {
					className: "grid-x fixed-grid"
				}, o.a.createElement("div", {
					className: "small-4 medium-3 cell text-left"
				}, o.a.createElement(u.default, {
					onClick: this.backToTest,
					className: "nav-btn",
					color: "white"
				}, o.a.createElement("span", {
					className: "small-icons back-arrow-white-xs is-left"
				}), o.a.createElement("span", {
					className: "large-mobile"
				}, "Back", o.a.createElement("span", {
					className: "show-for-medium"
				}, " to test")))), o.a.createElement("div", {
					className: "small-8 medium-9 overview__btns"
				}, o.a.createElement(u.default, {
					onClick: this.saveAndContinueLater,
					color: "white"
				}, "Save ", o.a.createElement("span", {
					className: "show-for-medium"
				}, " for later")), o.a.createElement(u.default, {
					onClick: this.submitAndConfirm,
					classname: "button--with-icon"
				}, "Submit", o.a.createElement("span", {
					className: "show-for-medium"
				}, " answers", o.a.createElement("span", {
					className: "small-icons next-arrow-white-xs is-right"
				})))))), o.a.createElement("div", {
					className: "bg-copy " + this.props.statementTest.test.code
				})), o.a.createElement(l.default, {
					ref: this.savedModalRef,
					onClose: this.onCloseSaveModal
				}, o.a.createElement("div", {
					className: "grid-x align-center"
				}, o.a.createElement("div", {
					className: "cell text-center"
				}, this.props.statementTest.user && !this.props.statementTest.user.temp ? o.a.createElement(o.a.Fragment, null, o.a.createElement("h3", {
					className: "mar-bot-10"
				}, "Progress saved successfully!"), o.a.createElement("p", {
					className: "popup__text"
				}, "You can return to the test and pick up from where you left off at any time.")) : o.a.createElement(o.a.Fragment, null, o.a.createElement("h3", {
					className: "mar-bot-10"
				}, "Check your email!"), o.a.createElement("p", {
					className: "popup__text"
				}, "Please check your inbox and click the link in the email we sent you to finish setting up your account. You can then return to the test and pick up where you left off at any time. If you don\u2019t see the email we sent you, please check your junk or promotional folders."), this.state.newsletterSubscription && o.a.createElement("div", {
					className: "popup__box"
				}, o.a.createElement("p", {
					className: "popup__confirm_text mar-0"
				}, "\ud83d\udea8 NOTE: You\u2019ve also received a welcome mail for The Dose!")))))), o.a.createElement(l.default, {
					ref: this.saveProgressModalRef
				}, o.a.createElement(f.default, {
					onSave: this.onSaveUser,
					test: this.props.statementTest.test
				})), o.a.createElement(l.default, {
					ref: this.saveResultModalRef,
					onClose: this.closeResultModal
				}, o.a.createElement(f.default, {
					onSave: this.onSaveAndSubmitUser,
					status: "finished",
					test: this.props.statementTest.test,
					title: "Create account to view results",
					description: "Enter your details to set up your CareerHunter account"
				})), o.a.createElement(l.default, {
					ref: this.confirmationModalRef
				}, o.a.createElement(p.default, {
					onCancel: this.closeConfirmationModal,
					onConfirm: this.finishTest
				})))
			}
		}]) && d(t.prototype, r), n && d(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), i
	}(n.Component);
	t.default = Object(i.b)((function(e) {
		return {
			statementTest: e.statementTest
		}
	}), (function(e) {
		return {
			actions: Object(a.b)(Object.assign({}, s), e)
		}
	}))(b)
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(298),
		i = (r(94), r(1)),
		s = r(32),
		c = r(16),
		l = r(307),
		u = r(31),
		f = r(308),
		p = r(80);

	function d() {
		d = function() {
			return e
		};
		var e = {},
			t = Object.prototype,
			r = t.hasOwnProperty,
			n = "function" == typeof Symbol ? Symbol : {},
			o = n.iterator || "@@iterator",
			a = n.asyncIterator || "@@asyncIterator",
			i = n.toStringTag || "@@toStringTag";

		function s(e, t, r) {
			return Object.defineProperty(e, t, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}), e[t]
		}
		try {
			s({}, "")
		} catch (x) {
			s = function(e, t, r) {
				return e[t] = r
			}
		}

		function c(e, t, r, n) {
			var o = t && t.prototype instanceof f ? t : f,
				a = Object.create(o.prototype),
				i = new S(n || []);
			return a._invoke = function(e, t, r) {
				var n = "suspendedStart";
				return function(o, a) {
					if ("executing" === n) throw new Error("Generator is already running");
					if ("completed" === n) {
						if ("throw" === o) throw a;
						return j()
					}
					for (r.method = o, r.arg = a;;) {
						var i = r.delegate;
						if (i) {
							var s = E(i, r);
							if (s) {
								if (s === u) continue;
								return s
							}
						}
						if ("next" === r.method) r.sent = r._sent = r.arg;
						else if ("throw" === r.method) {
							if ("suspendedStart" === n) throw n = "completed", r.arg;
							r.dispatchException(r.arg)
						} else "return" === r.method && r.abrupt("return", r.arg);
						n = "executing";
						var c = l(e, t, r);
						if ("normal" === c.type) {
							if (n = r.done ? "completed" : "suspendedYield", c.arg === u) continue;
							return {
								value: c.arg,
								done: r.done
							}
						}
						"throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
					}
				}
			}(e, r, i), a
		}

		function l(e, t, r) {
			try {
				return {
					type: "normal",
					arg: e.call(t, r)
				}
			} catch (x) {
				return {
					type: "throw",
					arg: x
				}
			}
		}
		e.wrap = c;
		var u = {};

		function f() {}

		function p() {}

		function h() {}
		var m = {};
		s(m, o, (function() {
			return this
		}));
		var v = Object.getPrototypeOf,
			y = v && v(v(T([])));
		y && y !== t && r.call(y, o) && (m = y);
		var b = h.prototype = f.prototype = Object.create(m);

		function g(e) {
			["next", "throw", "return"].forEach((function(t) {
				s(e, t, (function(e) {
					return this._invoke(t, e)
				}))
			}))
		}

		function w(e, t) {
			var n;
			this._invoke = function(o, a) {
				function i() {
					return new t((function(n, i) {
						! function n(o, a, i, s) {
							var c = l(e[o], e, a);
							if ("throw" !== c.type) {
								var u = c.arg,
									f = u.value;
								return f && "object" == typeof f && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
									n("next", e, i, s)
								}), (function(e) {
									n("throw", e, i, s)
								})) : t.resolve(f).then((function(e) {
									u.value = e, i(u)
								}), (function(e) {
									return n("throw", e, i, s)
								}))
							}
							s(c.arg)
						}(o, a, n, i)
					}))
				}
				return n = n ? n.then(i, i) : i()
			}
		}

		function E(e, t) {
			var r = e.iterator[t.method];
			if (void 0 === r) {
				if (t.delegate = null, "throw" === t.method) {
					if (e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method)) return u;
					t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
				}
				return u
			}
			var n = l(r, e.iterator, t.arg);
			if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
			var o = n.arg;
			return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
		}

		function _(e) {
			var t = {
				tryLoc: e[0]
			};
			1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
		}

		function O(e) {
			var t = e.completion || {};
			t.type = "normal", delete t.arg, e.completion = t
		}

		function S(e) {
			this.tryEntries = [{
				tryLoc: "root"
			}], e.forEach(_, this), this.reset(!0)
		}

		function T(e) {
			if (e) {
				var t = e[o];
				if (t) return t.call(e);
				if ("function" == typeof e.next) return e;
				if (!isNaN(e.length)) {
					var n = -1,
						a = function t() {
							for (; ++n < e.length;)
								if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
							return t.value = void 0, t.done = !0, t
						};
					return a.next = a
				}
			}
			return {
				next: j
			}
		}

		function j() {
			return {
				value: void 0,
				done: !0
			}
		}
		return p.prototype = h, s(b, "constructor", h), s(h, "constructor", p), p.displayName = s(h, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
			var t = "function" == typeof e && e.constructor;
			return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
		}, e.mark = function(e) {
			return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, i, "GeneratorFunction")), e.prototype = Object.create(b), e
		}, e.awrap = function(e) {
			return {
				__await: e
			}
		}, g(w.prototype), s(w.prototype, a, (function() {
			return this
		})), e.AsyncIterator = w, e.async = function(t, r, n, o, a) {
			void 0 === a && (a = Promise);
			var i = new w(c(t, r, n, o), a);
			return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
				return e.done ? e.value : i.next()
			}))
		}, g(b), s(b, i, "Generator"), s(b, o, (function() {
			return this
		})), s(b, "toString", (function() {
			return "[object Generator]"
		})), e.keys = function(e) {
			var t = [];
			for (var r in e) t.push(r);
			return t.reverse(),
				function r() {
					for (; t.length;) {
						var n = t.pop();
						if (n in e) return r.value = n, r.done = !1, r
					}
					return r.done = !0, r
				}
		}, e.values = T, S.prototype = {
			constructor: S,
			reset: function(e) {
				if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !e)
					for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
			},
			stop: function() {
				this.done = !0;
				var e = this.tryEntries[0].completion;
				if ("throw" === e.type) throw e.arg;
				return this.rval
			},
			dispatchException: function(e) {
				if (this.done) throw e;
				var t = this;

				function n(r, n) {
					return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
				}
				for (var o = this.tryEntries.length - 1; o >= 0; --o) {
					var a = this.tryEntries[o],
						i = a.completion;
					if ("root" === a.tryLoc) return n("end");
					if (a.tryLoc <= this.prev) {
						var s = r.call(a, "catchLoc"),
							c = r.call(a, "finallyLoc");
						if (s && c) {
							if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
							if (this.prev < a.finallyLoc) return n(a.finallyLoc)
						} else if (s) {
							if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
						} else {
							if (!c) throw new Error("try statement without catch or finally");
							if (this.prev < a.finallyLoc) return n(a.finallyLoc)
						}
					}
				}
			},
			abrupt: function(e, t) {
				for (var n = this.tryEntries.length - 1; n >= 0; --n) {
					var o = this.tryEntries[n];
					if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
						var a = o;
						break
					}
				}
				a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
				var i = a ? a.completion : {};
				return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(i)
			},
			complete: function(e, t) {
				if ("throw" === e.type) throw e.arg;
				return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
			},
			finish: function(e) {
				for (var t = this.tryEntries.length - 1; t >= 0; --t) {
					var r = this.tryEntries[t];
					if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), O(r), u
				}
			},
			catch: function(e) {
				for (var t = this.tryEntries.length - 1; t >= 0; --t) {
					var r = this.tryEntries[t];
					if (r.tryLoc === e) {
						var n = r.completion;
						if ("throw" === n.type) {
							var o = n.arg;
							O(r)
						}
						return o
					}
				}
				throw new Error("illegal catch attempt")
			},
			delegateYield: function(e, t, r) {
				return this.delegate = {
					iterator: T(e),
					resultName: t,
					nextLoc: r
				}, "next" === this.method && (this.arg = void 0), u
			}
		}, e
	}

	function h(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function m(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? h(Object(r), !0).forEach((function(t) {
				v(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function v(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function y(e, t, r, n, o, a, i) {
		try {
			var s = e[a](i),
				c = s.value
		} catch (l) {
			return void r(l)
		}
		s.done ? t(c) : Promise.resolve(c).then(n, o)
	}

	function b(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function g(e, t) {
		return (g = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function w(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = O(e);
			if (t) {
				var o = O(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return E(this, r)
		}
	}

	function E(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return _(e)
	}

	function _(e) {
		if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function O(e) {
		return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var S = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && g(e, t)
		}(v, e);
		var t, r, n, h = w(v);

		function v(e) {
			var t;
			return function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, v), (t = h.call(this, e)).onClickForgotPassword = function() {
				t.forgotPasswordPopup.current.open()
			}, t.onCloseForgotPassword = function() {
				t.forgotPasswordPopup.current.close()
			}, t.onSaveUser = function() {
				var e = t.state.user,
					r = _(t);
				t.setState({
					isLoading: !0
				}, (function() {
					s.default.register(t.state.user, !0).then(function() {
						var e, t = (e = d().mark((function e(t) {
							return d().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										r.setState({
											isLoading: !1
										}), t.need_login ? r.setState({
											showLoginForm: !0,
											user: m(m({}, t.user), {}, {
												errors: {}
											})
										}) : (localStorage.setItem("user", JSON.stringify(t)), r.props.onSave(t));
									case 2:
									case "end":
										return e.stop()
								}
							}), e)
						})), function() {
							var t = this,
								r = arguments;
							return new Promise((function(n, o) {
								var a = e.apply(t, r);

								function i(e) {
									y(a, n, o, i, s, "next", e)
								}

								function s(e) {
									y(a, n, o, i, s, "throw", e)
								}
								i(void 0)
							}))
						});
						return function(e) {
							return t.apply(this, arguments)
						}
					}()).catch((function(t) {
						console.log(t), t.json().then((function(t) {
							e.errors = t, r.setState({
								user: e,
								isLoading: !1
							})
						}))
					}))
				}))
			}, t.afterLogin = function(e, r) {
				r ? t.props.afterLogin(e) : document.location.href = "/dashboard"
			}, t.onHandleChange = function(e) {
				var r = e.target.name,
					n = "agree_terms" === r || "newsletter_subscription" === r ? e.target.checked : e.target.value,
					o = t.state.user;
				o[r] = n, o.errors[i.actions.camelize(r)] = "", t.setState({
					user: o
				})
			}, t.state = {
				user: {
					agree: !1,
					email: "",
					errors: {}
				},
				isLoading: !1,
				showLoginForm: !1
			}, t.forgotPasswordPopup = o.a.createRef(), t
		}
		return t = v, (r = [{
			key: "render",
			value: function() {
				var e = this;
				return this.state.showLoginForm ? o.a.createElement("div", {
					className: this.props.forMobile ? "" : "side-box__inner"
				}, o.a.createElement(l.default, {
					user: this.state.user,
					saveAnswers: !0,
					afterLogin: this.afterLogin,
					clearSession: !1,
					back: function() {
						e.setState({
							showLoginForm: !1
						})
					},
					onClickForgotPassword: this.onClickForgotPassword,
					className: this.props.forMobile ? "form-container" : "form-container form-container--no-bg"
				}), o.a.createElement(u.default, {
					ref: this.forgotPasswordPopup
				}, o.a.createElement(f.default, {
					onClose: this.onCloseForgotPassword
				}))) : o.a.createElement("div", {
					className: this.props.forMobile ? "form-container in-tests" : "side-box__inner"
				}, this.state.isLoading ? o.a.createElement(i.Loader, null) : null, this.props.forMobile ? o.a.createElement(o.a.Fragment, null, o.a.createElement("h3", {
					className: "side-box__inner__title"
				}, "Save your progress"), o.a.createElement("p", {
					className: "popup__text"
				}, "Please enter your email address to save your progress so far.")) : o.a.createElement("h3", {
					className: "side-box__inner__title"
				}, "Don't lose your progress!"), o.a.createElement(i.TextField, {
					name: "email",
					placeholder: "Enter your Email",
					errorMessage: this.state.user.errors.email,
					value: this.state.user.email,
					onChange: this.onHandleChange
				}), o.a.createElement("div", {
					className: "grid-x align-middle agree-text"
				}, o.a.createElement("div", {
					className: "cell"
				}, o.a.createElement(p.default, {
					errorType: this.props.errorType,
					newsletter_subscription: this.state.user.newsletter_subscription,
					onHandleChange: this.onHandleChange
				})), o.a.createElement("div", {
					className: "large-custom-8 medium-6 small-9 cell"
				}, o.a.createElement(a.default, {
					name: "agree_terms",
					value: this.state.user.agree_terms,
					errorTypeMessage: "tooltip" !== this.props.errorType,
					errorMessage: this.state.user.errors.agreeTerms,
					onChange: this.onHandleChange
				})), o.a.createElement("div", {
					className: "large-custom-4 medium-6 small-3 cell flex-end small-blk"
				}, o.a.createElement(c.default, {
					onClick: this.onSaveUser
				}, "Save"))))
			}
		}]) && b(t.prototype, r), n && b(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), v
	}(o.a.Component);
	t.default = S
}, function(e, t, r) {
	"use strict";
	r.r(t);
	r(0);
	var n = r(81);
	t.default = n.default
}, function(e, t, r) {
	"use strict";
	r.r(t);
	r(0);
	var n = r(82);
	t.default = n.default
}, function(e, t, r) {
	"use strict";
	r.r(t);
	r(0);
	var n = r(135);
	t.default = n.default
}, function(e, t, r) {
	"use strict";
	r.r(t);
	r(0);
	var n = r(228);
	t.default = n.default
}, , , , , , , , , , , , , function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(10),
		i = r(2),
		s = r(67),
		c = r(413),
		l = r(541),
		u = r(543),
		f = r(545),
		p = r(546),
		d = r(547),
		h = r(125);

	function m(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function v(e, t) {
		return (v = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function y(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = g(e);
			if (t) {
				var o = g(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return b(this, r)
		}
	}

	function b(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function g(e) {
		return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var w = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && v(e, t)
		}(i, e);
		var t, r, n, a = y(i);

		function i(e) {
			var t;
			return function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, i), (t = a.call(this, e)).goToOverview = function() {
				t.props.actions.userGoToTestOverview()
			}, t.openInstructionsArea = function() {
				t.instructionsArea.current.open()
			}, t.renderPage = function() {
				var e = t.props.aptitudeTest.currentPage;
				switch (!0) {
					case 0 === e:
						return o.a.createElement(c.default, {
							openInstructions: t.openInstructionsArea
						});
					case "example" === e:
						return o.a.createElement(u.default, {
							currentPage: t.props.aptitudeTest.currentExamplePage,
							questions: t.props.aptitudeTest.exampleQuestions,
							openInstructions: t.openInstructionsArea
						});
					case "overview_start" === e:
						return o.a.createElement(d.default, {
							openInstructions: t.openInstructionsArea
						});
					case e >= 1:
						return o.a.createElement(l.default, {
							currentPage: e,
							questions: t.props.aptitudeTest.userQuestions,
							openInstructions: t.openInstructionsArea,
							goToOverview: t.goToOverview
						});
					case "overview" === e:
						return o.a.createElement(f.default, {
							openInstructions: t.openInstructionsArea
						});
					case "timeout" === e:
						return o.a.createElement(p.default, {
							openInstructions: t.openInstructionsArea
						});
					default:
						return o.a.createElement(c.default, {
							openInstructions: t.openInstructionsArea
						})
				}
			}, t.instructionsArea = o.a.createRef(), t
		}
		return t = i, (r = [{
			key: "render",
			value: function() {
				return o.a.createElement("div", {
					className: "test-page-container"
				}, o.a.createElement("div", {
					className: "test-page test-page--aptitude"
				}, this.renderPage(), o.a.createElement(h.default, {
					ref: this.instructionsArea
				}, o.a.createElement("div", {
					className: "slideout__instructions",
					dangerouslySetInnerHTML: {
						__html: this.props.aptitudeTest.test.instructions
					}
				}))))
			}
		}]) && m(t.prototype, r), n && m(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), i
	}(n.Component);
	t.default = Object(i.b)((function(e) {
		return {
			aptitudeTest: e.aptitudeTest
		}
	}), (function(e) {
		return {
			actions: Object(a.b)(Object.assign({}, s), e)
		}
	}))(w)
}, , , , , , , , , , , , , , function(e, t, r) {
	var n = r(601),
		o = r(251);
	e.exports = function(e, t, r) {
		var a = !0,
			i = !0;
		if ("function" != typeof e) throw new TypeError("Expected a function");
		return o(r) && (a = "leading" in r ? !!r.leading : a, i = "trailing" in r ? !!r.trailing : i), n(e, t, {
			leading: a,
			maxWait: t,
			trailing: i
		})
	}
}, , , , function(e, t, r) {
	"use strict";
	r.r(t);
	r(0);
	var n = r(72);
	t.default = n.default
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(10),
		i = r(2),
		s = r(67),
		c = r(159);

	function l(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function u(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function f(e, t) {
		return (f = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function p(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = h(e);
			if (t) {
				var o = h(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return d(this, r)
		}
	}

	function d(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function h(e) {
		return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var m = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && f(e, t)
		}(i, e);
		var t, r, n, a = p(i);

		function i() {
			var e;
			l(this, i);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = a.call.apply(a, [this].concat(r))).state = {
				timeLeft: "00:00"
			}, e.setTime = function() {
				var t = 6e4 * e.props.aptitudeTest.test.time,
					r = JSON.parse(localStorage.getItem("".concat(e.props.aptitudeTest.test.code, "StartedAt"))),
					n = t - (Date.now() - r);
				n <= 0 && (clearInterval(e.interval), n = 0, e.props.actions.userTestTimeOut()), e.setState({
					timeLeft: c.default.millisToMinutesAndSeconds(n)
				})
			}, e
		}
		return t = i, (r = [{
			key: "componentDidMount",
			value: function() {
				var e = this;
				this.setTime(), this.interval = setInterval((function() {
					e.setTime()
				}), 1e3)
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				clearInterval(this.interval)
			}
		}, {
			key: "render",
			value: function() {
				return o.a.createElement("div", {
					className: "timer"
				}, o.a.createElement("span", {
					className: "small-icon clock-icon timer__icon"
				}), o.a.createElement("h3", {
					className: "timer__count"
				}, this.state.timeLeft))
			}
		}]) && u(t.prototype, r), n && u(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), i
	}(n.Component);
	t.default = Object(i.b)((function(e) {
		return {
			aptitudeTest: e.aptitudeTest
		}
	}), (function(e) {
		return {
			actions: Object(a.b)(Object.assign({}, s), e)
		}
	}))(m)
}, , , , , , , , , , , , , , , , function(e, t, r) {
	var n = r(71);
	(n = "function" === typeof n ? n : window.Chart).Annotation = n.Annotation || {}, n.Annotation.drawTimeOptions = {
		afterDraw: "afterDraw",
		afterDatasetsDraw: "afterDatasetsDraw",
		beforeDatasetsDraw: "beforeDatasetsDraw"
	}, n.Annotation.defaults = {
		drawTime: "afterDatasetsDraw",
		dblClickSpeed: 350,
		events: [],
		annotations: []
	}, n.Annotation.labelDefaults = {
		backgroundColor: "rgba(0,0,0,0.8)",
		fontFamily: n.defaults.global.defaultFontFamily,
		fontSize: n.defaults.global.defaultFontSize,
		fontStyle: "bold",
		fontColor: "#fff",
		xPadding: 6,
		yPadding: 6,
		cornerRadius: 6,
		position: "center",
		xAdjust: 0,
		yAdjust: 0,
		enabled: !1,
		content: null
	}, n.Annotation.Element = r(592)(n), n.Annotation.types = {
		line: r(593)(n),
		box: r(594)(n)
	};
	var o = r(595)(n);
	e.exports = o, n.pluginService.register(o)
}, , , , , , , , , , function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = void 0;
	var n = c(r(0)),
		o = r(369),
		a = c(r(376)),
		i = c(r(378)),
		s = r(87);

	function c(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function l(e) {
		return (l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}

	function u() {
		return (u = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var r = arguments[t];
				for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
			}
			return e
		}).apply(this, arguments)
	}

	function f(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function p(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? f(Object(r), !0).forEach((function(t) {
				g(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function d(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function h(e, t) {
		return (h = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function m(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = b(e);
			if (t) {
				var o = b(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return v(this, r)
		}
	}

	function v(e, t) {
		return !t || "object" !== l(t) && "function" !== typeof t ? y(e) : t
	}

	function y(e) {
		if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function b(e) {
		return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}

	function g(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}
	var w = (0, s.canUseDOM)() && r(379),
		E = function(e) {
			! function(e, t) {
				if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && h(e, t)
			}(f, e);
			var t, r, c, l = m(f);

			function f(e) {
				var t;
				return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, f), g(y(t = l.call(this, e)), "innerSliderRefHandler", (function(e) {
					return t.innerSlider = e
				})), g(y(t), "slickPrev", (function() {
					return t.innerSlider.slickPrev()
				})), g(y(t), "slickNext", (function() {
					return t.innerSlider.slickNext()
				})), g(y(t), "slickGoTo", (function(e) {
					var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return t.innerSlider.slickGoTo(e, r)
				})), g(y(t), "slickPause", (function() {
					return t.innerSlider.pause("paused")
				})), g(y(t), "slickPlay", (function() {
					return t.innerSlider.autoPlay("play")
				})), t.state = {
					breakpoint: null
				}, t._responsiveMediaHandlers = [], t
			}
			return t = f, (r = [{
				key: "media",
				value: function(e, t) {
					w.register(e, t), this._responsiveMediaHandlers.push({
						query: e,
						handler: t
					})
				}
			}, {
				key: "componentDidMount",
				value: function() {
					var e = this;
					if (this.props.responsive) {
						var t = this.props.responsive.map((function(e) {
							return e.breakpoint
						}));
						t.sort((function(e, t) {
							return e - t
						})), t.forEach((function(r, n) {
							var o;
							o = 0 === n ? (0, a.default)({
								minWidth: 0,
								maxWidth: r
							}) : (0, a.default)({
								minWidth: t[n - 1] + 1,
								maxWidth: r
							}), (0, s.canUseDOM)() && e.media(o, (function() {
								e.setState({
									breakpoint: r
								})
							}))
						}));
						var r = (0, a.default)({
							minWidth: t.slice(-1)[0]
						});
						(0, s.canUseDOM)() && this.media(r, (function() {
							e.setState({
								breakpoint: null
							})
						}))
					}
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					this._responsiveMediaHandlers.forEach((function(e) {
						w.unregister(e.query, e.handler)
					}))
				}
			}, {
				key: "render",
				value: function() {
					var e, t, r = this;
					(e = this.state.breakpoint ? "unslick" === (t = this.props.responsive.filter((function(e) {
						return e.breakpoint === r.state.breakpoint
					})))[0].settings ? "unslick" : p(p(p({}, i.default), this.props), t[0].settings) : p(p({}, i.default), this.props)).centerMode && (e.slidesToScroll, e.slidesToScroll = 1), e.fade && (e.slidesToShow, e.slidesToScroll, e.slidesToShow = 1, e.slidesToScroll = 1);
					var a = n.default.Children.toArray(this.props.children);
					a = a.filter((function(e) {
						return "string" === typeof e ? !!e.trim() : !!e
					})), e.variableWidth && (e.rows > 1 || e.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), e.variableWidth = !1);
					for (var s = [], c = null, l = 0; l < a.length; l += e.rows * e.slidesPerRow) {
						for (var f = [], d = l; d < l + e.rows * e.slidesPerRow; d += e.slidesPerRow) {
							for (var h = [], m = d; m < d + e.slidesPerRow && (e.variableWidth && a[m].props.style && (c = a[m].props.style.width), !(m >= a.length)); m += 1) h.push(n.default.cloneElement(a[m], {
								key: 100 * l + 10 * d + m,
								tabIndex: -1,
								style: {
									width: "".concat(100 / e.slidesPerRow, "%"),
									display: "inline-block"
								}
							}));
							f.push(n.default.createElement("div", {
								key: 10 * l + d
							}, h))
						}
						e.variableWidth ? s.push(n.default.createElement("div", {
							key: l,
							style: {
								width: c
							}
						}, f)) : s.push(n.default.createElement("div", {
							key: l
						}, f))
					}
					if ("unslick" === e) {
						var v = "regular slider " + (this.props.className || "");
						return n.default.createElement("div", {
							className: v
						}, a)
					}
					return s.length <= e.slidesToShow && (e.unslick = !0), n.default.createElement(o.InnerSlider, u({
						style: this.props.style,
						ref: this.innerSliderRefHandler
					}, e), s)
				}
			}]) && d(t.prototype, r), c && d(t, c), f
		}(n.default.Component);
	t.default = E
}, function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.InnerSlider = void 0;
	var n = p(r(0)),
		o = p(r(370)),
		a = p(r(371)),
		i = p(r(35)),
		s = r(87),
		c = r(372),
		l = r(373),
		u = r(374),
		f = p(r(375));

	function p(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function d(e) {
		return (d = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}

	function h() {
		return (h = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var r = arguments[t];
				for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
			}
			return e
		}).apply(this, arguments)
	}

	function m(e, t) {
		if (null == e) return {};
		var r, n, o = function(e, t) {
			if (null == e) return {};
			var r, n, o = {},
				a = Object.keys(e);
			for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
			return o
		}(e, t);
		if (Object.getOwnPropertySymbols) {
			var a = Object.getOwnPropertySymbols(e);
			for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
		}
		return o
	}

	function v(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function y(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? v(Object(r), !0).forEach((function(t) {
				S(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function b(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function g(e, t) {
		return (g = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function w(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = O(e);
			if (t) {
				var o = O(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return E(this, r)
		}
	}

	function E(e, t) {
		return !t || "object" !== d(t) && "function" !== typeof t ? _(e) : t
	}

	function _(e) {
		if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function O(e) {
		return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}

	function S(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}
	var T = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), t && g(e, t)
		}(E, e);
		var t, r, p, v = w(E);

		function E(e) {
			var t;
			! function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, E), S(_(t = v.call(this, e)), "listRefHandler", (function(e) {
				return t.list = e
			})), S(_(t), "trackRefHandler", (function(e) {
				return t.track = e
			})), S(_(t), "adaptHeight", (function() {
				if (t.props.adaptiveHeight && t.list) {
					var e = t.list.querySelector('[data-index="'.concat(t.state.currentSlide, '"]'));
					t.list.style.height = (0, s.getHeight)(e) + "px"
				}
			})), S(_(t), "componentDidMount", (function() {
				if (t.props.onInit && t.props.onInit(), t.props.lazyLoad) {
					var e = (0, s.getOnDemandLazySlides)(y(y({}, t.props), t.state));
					e.length > 0 && (t.setState((function(t) {
						return {
							lazyLoadedList: t.lazyLoadedList.concat(e)
						}
					})), t.props.onLazyLoad && t.props.onLazyLoad(e))
				}
				var r = y({
					listRef: t.list,
					trackRef: t.track
				}, t.props);
				t.updateState(r, !0, (function() {
					t.adaptHeight(), t.props.autoplay && t.autoPlay("update")
				})), "progressive" === t.props.lazyLoad && (t.lazyLoadTimer = setInterval(t.progressiveLazyLoad, 1e3)), t.ro = new f.default((function() {
					t.state.animating ? (t.onWindowResized(!1), t.callbackTimers.push(setTimeout((function() {
						return t.onWindowResized()
					}), t.props.speed))) : t.onWindowResized()
				})), t.ro.observe(t.list), Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), (function(e) {
					e.onfocus = t.props.pauseOnFocus ? t.onSlideFocus : null, e.onblur = t.props.pauseOnFocus ? t.onSlideBlur : null
				})), window.addEventListener ? window.addEventListener("resize", t.onWindowResized) : window.attachEvent("onresize", t.onWindowResized)
			})), S(_(t), "componentWillUnmount", (function() {
				t.animationEndCallback && clearTimeout(t.animationEndCallback), t.lazyLoadTimer && clearInterval(t.lazyLoadTimer), t.callbackTimers.length && (t.callbackTimers.forEach((function(e) {
					return clearTimeout(e)
				})), t.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", t.onWindowResized) : window.detachEvent("onresize", t.onWindowResized), t.autoplayTimer && clearInterval(t.autoplayTimer), t.ro.disconnect()
			})), S(_(t), "componentDidUpdate", (function(e) {
				if (t.checkImagesLoad(), t.props.onReInit && t.props.onReInit(), t.props.lazyLoad) {
					var r = (0, s.getOnDemandLazySlides)(y(y({}, t.props), t.state));
					r.length > 0 && (t.setState((function(e) {
						return {
							lazyLoadedList: e.lazyLoadedList.concat(r)
						}
					})), t.props.onLazyLoad && t.props.onLazyLoad(r))
				}
				t.adaptHeight();
				var o = y(y({
						listRef: t.list,
						trackRef: t.track
					}, t.props), t.state),
					a = t.didPropsChange(e);
				a && t.updateState(o, a, (function() {
					t.state.currentSlide >= n.default.Children.count(t.props.children) && t.changeSlide({
						message: "index",
						index: n.default.Children.count(t.props.children) - t.props.slidesToShow,
						currentSlide: t.state.currentSlide
					}), t.props.autoplay ? t.autoPlay("update") : t.pause("paused")
				}))
			})), S(_(t), "onWindowResized", (function(e) {
				t.debouncedResize && t.debouncedResize.cancel(), t.debouncedResize = (0, a.default)((function() {
					return t.resizeWindow(e)
				}), 50), t.debouncedResize()
			})), S(_(t), "resizeWindow", (function() {
				var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					r = Boolean(t.track && t.track.node);
				if (r) {
					var n = y(y({
						listRef: t.list,
						trackRef: t.track
					}, t.props), t.state);
					t.updateState(n, e, (function() {
						t.props.autoplay ? t.autoPlay("update") : t.pause("paused")
					})), t.setState({
						animating: !1
					}), clearTimeout(t.animationEndCallback), delete t.animationEndCallback
				}
			})), S(_(t), "updateState", (function(e, r, o) {
				var a = (0, s.initializedState)(e);
				e = y(y(y({}, e), a), {}, {
					slideIndex: a.currentSlide
				});
				var i = (0, s.getTrackLeft)(e);
				e = y(y({}, e), {}, {
					left: i
				});
				var c = (0, s.getTrackCSS)(e);
				(r || n.default.Children.count(t.props.children) !== n.default.Children.count(e.children)) && (a.trackStyle = c), t.setState(a, o)
			})), S(_(t), "ssrInit", (function() {
				if (t.props.variableWidth) {
					var e = 0,
						r = 0,
						o = [],
						a = (0, s.getPreClones)(y(y(y({}, t.props), t.state), {}, {
							slideCount: t.props.children.length
						})),
						i = (0, s.getPostClones)(y(y(y({}, t.props), t.state), {}, {
							slideCount: t.props.children.length
						}));
					t.props.children.forEach((function(t) {
						o.push(t.props.style.width), e += t.props.style.width
					}));
					for (var c = 0; c < a; c++) r += o[o.length - 1 - c], e += o[o.length - 1 - c];
					for (var l = 0; l < i; l++) e += o[l];
					for (var u = 0; u < t.state.currentSlide; u++) r += o[u];
					var f = {
						width: e + "px",
						left: -r + "px"
					};
					if (t.props.centerMode) {
						var p = "".concat(o[t.state.currentSlide], "px");
						f.left = "calc(".concat(f.left, " + (100% - ").concat(p, ") / 2 ) ")
					}
					return {
						trackStyle: f
					}
				}
				var d = n.default.Children.count(t.props.children),
					h = y(y(y({}, t.props), t.state), {}, {
						slideCount: d
					}),
					m = (0, s.getPreClones)(h) + (0, s.getPostClones)(h) + d,
					v = 100 / t.props.slidesToShow * m,
					b = 100 / m,
					g = -b * ((0, s.getPreClones)(h) + t.state.currentSlide) * v / 100;
				return t.props.centerMode && (g += (100 - b * v / 100) / 2), {
					slideWidth: b + "%",
					trackStyle: {
						width: v + "%",
						left: g + "%"
					}
				}
			})), S(_(t), "checkImagesLoad", (function() {
				var e = t.list.querySelectorAll(".slick-slide img"),
					r = e.length,
					n = 0;
				Array.prototype.forEach.call(e, (function(e) {
					var o = function() {
						return ++n && n >= r && t.onWindowResized()
					};
					if (e.onclick) {
						var a = e.onclick;
						e.onclick = function() {
							a(), e.parentNode.focus()
						}
					} else e.onclick = function() {
						return e.parentNode.focus()
					};
					e.onload || (t.props.lazyLoad ? e.onload = function() {
						t.adaptHeight(), t.callbackTimers.push(setTimeout(t.onWindowResized, t.props.speed))
					} : (e.onload = o, e.onerror = function() {
						o(), t.props.onLazyLoadError && t.props.onLazyLoadError()
					}))
				}))
			})), S(_(t), "progressiveLazyLoad", (function() {
				for (var e = [], r = y(y({}, t.props), t.state), n = t.state.currentSlide; n < t.state.slideCount + (0, s.getPostClones)(r); n++)
					if (t.state.lazyLoadedList.indexOf(n) < 0) {
						e.push(n);
						break
					} for (var o = t.state.currentSlide - 1; o >= -(0, s.getPreClones)(r); o--)
					if (t.state.lazyLoadedList.indexOf(o) < 0) {
						e.push(o);
						break
					} e.length > 0 ? (t.setState((function(t) {
					return {
						lazyLoadedList: t.lazyLoadedList.concat(e)
					}
				})), t.props.onLazyLoad && t.props.onLazyLoad(e)) : t.lazyLoadTimer && (clearInterval(t.lazyLoadTimer), delete t.lazyLoadTimer)
			})), S(_(t), "slideHandler", (function(e) {
				var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = t.props,
					o = n.asNavFor,
					a = n.beforeChange,
					i = n.onLazyLoad,
					c = n.speed,
					l = n.afterChange,
					u = t.state.currentSlide,
					f = (0, s.slideHandler)(y(y(y({
						index: e
					}, t.props), t.state), {}, {
						trackRef: t.track,
						useCSS: t.props.useCSS && !r
					})),
					p = f.state,
					d = f.nextState;
				if (p) {
					a && a(u, p.currentSlide);
					var h = p.lazyLoadedList.filter((function(e) {
						return t.state.lazyLoadedList.indexOf(e) < 0
					}));
					i && h.length > 0 && i(h), !t.props.waitForAnimate && t.animationEndCallback && (clearTimeout(t.animationEndCallback), l && l(u), delete t.animationEndCallback), t.setState(p, (function() {
						o && t.asNavForIndex !== e && (t.asNavForIndex = e, o.innerSlider.slideHandler(e)), d && (t.animationEndCallback = setTimeout((function() {
							var e = d.animating,
								r = m(d, ["animating"]);
							t.setState(r, (function() {
								t.callbackTimers.push(setTimeout((function() {
									return t.setState({
										animating: e
									})
								}), 10)), l && l(p.currentSlide), delete t.animationEndCallback
							}))
						}), c))
					}))
				}
			})), S(_(t), "changeSlide", (function(e) {
				var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = y(y({}, t.props), t.state),
					o = (0, s.changeSlide)(n, e);
				if ((0 === o || o) && (!0 === r ? t.slideHandler(o, r) : t.slideHandler(o), t.props.autoplay && t.autoPlay("update"), t.props.focusOnSelect)) {
					var a = t.list.querySelectorAll(".slick-current");
					a[0] && a[0].focus()
				}
			})), S(_(t), "clickHandler", (function(e) {
				!1 === t.clickable && (e.stopPropagation(), e.preventDefault()), t.clickable = !0
			})), S(_(t), "keyHandler", (function(e) {
				var r = (0, s.keyHandler)(e, t.props.accessibility, t.props.rtl);
				"" !== r && t.changeSlide({
					message: r
				})
			})), S(_(t), "selectHandler", (function(e) {
				t.changeSlide(e)
			})), S(_(t), "disableBodyScroll", (function() {
				window.ontouchmove = function(e) {
					(e = e || window.event).preventDefault && e.preventDefault(), e.returnValue = !1
				}
			})), S(_(t), "enableBodyScroll", (function() {
				window.ontouchmove = null
			})), S(_(t), "swipeStart", (function(e) {
				t.props.verticalSwiping && t.disableBodyScroll();
				var r = (0, s.swipeStart)(e, t.props.swipe, t.props.draggable);
				"" !== r && t.setState(r)
			})), S(_(t), "swipeMove", (function(e) {
				var r = (0, s.swipeMove)(e, y(y(y({}, t.props), t.state), {}, {
					trackRef: t.track,
					listRef: t.list,
					slideIndex: t.state.currentSlide
				}));
				r && (r.swiping && (t.clickable = !1), t.setState(r))
			})), S(_(t), "swipeEnd", (function(e) {
				var r = (0, s.swipeEnd)(e, y(y(y({}, t.props), t.state), {}, {
					trackRef: t.track,
					listRef: t.list,
					slideIndex: t.state.currentSlide
				}));
				if (r) {
					var n = r.triggerSlideHandler;
					delete r.triggerSlideHandler, t.setState(r), void 0 !== n && (t.slideHandler(n), t.props.verticalSwiping && t.enableBodyScroll())
				}
			})), S(_(t), "touchEnd", (function(e) {
				t.swipeEnd(e), t.clickable = !0
			})), S(_(t), "slickPrev", (function() {
				t.callbackTimers.push(setTimeout((function() {
					return t.changeSlide({
						message: "previous"
					})
				}), 0))
			})), S(_(t), "slickNext", (function() {
				t.callbackTimers.push(setTimeout((function() {
					return t.changeSlide({
						message: "next"
					})
				}), 0))
			})), S(_(t), "slickGoTo", (function(e) {
				var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				if (e = Number(e), isNaN(e)) return "";
				t.callbackTimers.push(setTimeout((function() {
					return t.changeSlide({
						message: "index",
						index: e,
						currentSlide: t.state.currentSlide
					}, r)
				}), 0))
			})), S(_(t), "play", (function() {
				var e;
				if (t.props.rtl) e = t.state.currentSlide - t.props.slidesToScroll;
				else {
					if (!(0, s.canGoNext)(y(y({}, t.props), t.state))) return !1;
					e = t.state.currentSlide + t.props.slidesToScroll
				}
				t.slideHandler(e)
			})), S(_(t), "autoPlay", (function(e) {
				t.autoplayTimer && clearInterval(t.autoplayTimer);
				var r = t.state.autoplaying;
				if ("update" === e) {
					if ("hovered" === r || "focused" === r || "paused" === r) return
				} else if ("leave" === e) {
					if ("paused" === r || "focused" === r) return
				} else if ("blur" === e && ("paused" === r || "hovered" === r)) return;
				t.autoplayTimer = setInterval(t.play, t.props.autoplaySpeed + 50), t.setState({
					autoplaying: "playing"
				})
			})), S(_(t), "pause", (function(e) {
				t.autoplayTimer && (clearInterval(t.autoplayTimer), t.autoplayTimer = null);
				var r = t.state.autoplaying;
				"paused" === e ? t.setState({
					autoplaying: "paused"
				}) : "focused" === e ? "hovered" !== r && "playing" !== r || t.setState({
					autoplaying: "focused"
				}) : "playing" === r && t.setState({
					autoplaying: "hovered"
				})
			})), S(_(t), "onDotsOver", (function() {
				return t.props.autoplay && t.pause("hovered")
			})), S(_(t), "onDotsLeave", (function() {
				return t.props.autoplay && "hovered" === t.state.autoplaying && t.autoPlay("leave")
			})), S(_(t), "onTrackOver", (function() {
				return t.props.autoplay && t.pause("hovered")
			})), S(_(t), "onTrackLeave", (function() {
				return t.props.autoplay && "hovered" === t.state.autoplaying && t.autoPlay("leave")
			})), S(_(t), "onSlideFocus", (function() {
				return t.props.autoplay && t.pause("focused")
			})), S(_(t), "onSlideBlur", (function() {
				return t.props.autoplay && "focused" === t.state.autoplaying && t.autoPlay("blur")
			})), S(_(t), "render", (function() {
				var e, r, o, a = (0, i.default)("slick-slider", t.props.className, {
						"slick-vertical": t.props.vertical,
						"slick-initialized": !0
					}),
					f = y(y({}, t.props), t.state),
					p = (0, s.extractObject)(f, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]),
					d = t.props.pauseOnHover;
				if (p = y(y({}, p), {}, {
						onMouseEnter: d ? t.onTrackOver : null,
						onMouseLeave: d ? t.onTrackLeave : null,
						onMouseOver: d ? t.onTrackOver : null,
						focusOnSelect: t.props.focusOnSelect && t.clickable ? t.selectHandler : null
					}), !0 === t.props.dots && t.state.slideCount >= t.props.slidesToShow) {
					var m = (0, s.extractObject)(f, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]),
						v = t.props.pauseOnDotsHover;
					m = y(y({}, m), {}, {
						clickHandler: t.changeSlide,
						onMouseEnter: v ? t.onDotsLeave : null,
						onMouseOver: v ? t.onDotsOver : null,
						onMouseLeave: v ? t.onDotsLeave : null
					}), e = n.default.createElement(l.Dots, m)
				}
				var b = (0, s.extractObject)(f, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
				b.clickHandler = t.changeSlide, t.props.arrows && (r = n.default.createElement(u.PrevArrow, b), o = n.default.createElement(u.NextArrow, b));
				var g = null;
				t.props.vertical && (g = {
					height: t.state.listHeight
				});
				var w = null;
				!1 === t.props.vertical ? !0 === t.props.centerMode && (w = {
					padding: "0px " + t.props.centerPadding
				}) : !0 === t.props.centerMode && (w = {
					padding: t.props.centerPadding + " 0px"
				});
				var E = y(y({}, g), w),
					_ = t.props.touchMove,
					O = {
						className: "slick-list",
						style: E,
						onClick: t.clickHandler,
						onMouseDown: _ ? t.swipeStart : null,
						onMouseMove: t.state.dragging && _ ? t.swipeMove : null,
						onMouseUp: _ ? t.swipeEnd : null,
						onMouseLeave: t.state.dragging && _ ? t.swipeEnd : null,
						onTouchStart: _ ? t.swipeStart : null,
						onTouchMove: t.state.dragging && _ ? t.swipeMove : null,
						onTouchEnd: _ ? t.touchEnd : null,
						onTouchCancel: t.state.dragging && _ ? t.swipeEnd : null,
						onKeyDown: t.props.accessibility ? t.keyHandler : null
					},
					S = {
						className: a,
						dir: "ltr",
						style: t.props.style
					};
				return t.props.unslick && (O = {
					className: "slick-list"
				}, S = {
					className: a
				}), n.default.createElement("div", S, t.props.unslick ? "" : r, n.default.createElement("div", h({
					ref: t.listRefHandler
				}, O), n.default.createElement(c.Track, h({
					ref: t.trackRefHandler
				}, p), t.props.children)), t.props.unslick ? "" : o, t.props.unslick ? "" : e)
			})), t.list = null, t.track = null, t.state = y(y({}, o.default), {}, {
				currentSlide: t.props.initialSlide,
				slideCount: n.default.Children.count(t.props.children)
			}), t.callbackTimers = [], t.clickable = !0, t.debouncedResize = null;
			var r = t.ssrInit();
			return t.state = y(y({}, t.state), r), t
		}
		return t = E, (r = [{
			key: "didPropsChange",
			value: function(e) {
				for (var t = !1, r = 0, o = Object.keys(this.props); r < o.length; r++) {
					var a = o[r];
					if (!e.hasOwnProperty(a)) {
						t = !0;
						break
					}
					if ("object" !== d(e[a]) && "function" !== typeof e[a] && e[a] !== this.props[a]) {
						t = !0;
						break
					}
				}
				return t || n.default.Children.count(this.props.children) !== n.default.Children.count(e.children)
			}
		}]) && b(t.prototype, r), p && b(t, p), E
	}(n.default.Component);
	t.InnerSlider = T
}, function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = void 0;
	var n = {
		animating: !1,
		autoplaying: null,
		currentDirection: 0,
		currentLeft: null,
		currentSlide: 0,
		direction: 1,
		dragging: !1,
		edgeDragged: !1,
		initialized: !1,
		lazyLoadedList: [],
		listHeight: null,
		listWidth: null,
		scrolling: !1,
		slideCount: null,
		slideHeight: null,
		slideWidth: null,
		swipeLeft: null,
		swiped: !1,
		swiping: !1,
		touchObject: {
			startX: 0,
			startY: 0,
			curX: 0,
			curY: 0
		},
		trackStyle: {},
		trackWidth: 0,
		targetSlide: 0
	};
	t.default = n
}, function(e, t, r) {
	(function(t) {
		var r = /^\s+|\s+$/g,
			n = /^[-+]0x[0-9a-f]+$/i,
			o = /^0b[01]+$/i,
			a = /^0o[0-7]+$/i,
			i = parseInt,
			s = "object" == typeof t && t && t.Object === Object && t,
			c = "object" == typeof self && self && self.Object === Object && self,
			l = s || c || Function("return this")(),
			u = Object.prototype.toString,
			f = Math.max,
			p = Math.min,
			d = function() {
				return l.Date.now()
			};

		function h(e) {
			var t = typeof e;
			return !!e && ("object" == t || "function" == t)
		}

		function m(e) {
			if ("number" == typeof e) return e;
			if (function(e) {
					return "symbol" == typeof e || function(e) {
						return !!e && "object" == typeof e
					}(e) && "[object Symbol]" == u.call(e)
				}(e)) return NaN;
			if (h(e)) {
				var t = "function" == typeof e.valueOf ? e.valueOf() : e;
				e = h(t) ? t + "" : t
			}
			if ("string" != typeof e) return 0 === e ? e : +e;
			e = e.replace(r, "");
			var s = o.test(e);
			return s || a.test(e) ? i(e.slice(2), s ? 2 : 8) : n.test(e) ? NaN : +e
		}
		e.exports = function(e, t, r) {
			var n, o, a, i, s, c, l = 0,
				u = !1,
				v = !1,
				y = !0;
			if ("function" != typeof e) throw new TypeError("Expected a function");

			function b(t) {
				var r = n,
					a = o;
				return n = o = void 0, l = t, i = e.apply(a, r)
			}

			function g(e) {
				return l = e, s = setTimeout(E, t), u ? b(e) : i
			}

			function w(e) {
				var r = e - c;
				return void 0 === c || r >= t || r < 0 || v && e - l >= a
			}

			function E() {
				var e = d();
				if (w(e)) return _(e);
				s = setTimeout(E, function(e) {
					var r = t - (e - c);
					return v ? p(r, a - (e - l)) : r
				}(e))
			}

			function _(e) {
				return s = void 0, y && n ? b(e) : (n = o = void 0, i)
			}

			function O() {
				var e = d(),
					r = w(e);
				if (n = arguments, o = this, c = e, r) {
					if (void 0 === s) return g(c);
					if (v) return s = setTimeout(E, t), b(c)
				}
				return void 0 === s && (s = setTimeout(E, t)), i
			}
			return t = m(t) || 0, h(r) && (u = !!r.leading, a = (v = "maxWait" in r) ? f(m(r.maxWait) || 0, t) : a, y = "trailing" in r ? !!r.trailing : y), O.cancel = function() {
				void 0 !== s && clearTimeout(s), l = 0, n = c = o = s = void 0
			}, O.flush = function() {
				return void 0 === s ? i : _(d())
			}, O
		}
	}).call(this, r(77))
}, function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Track = void 0;
	var n = i(r(0)),
		o = i(r(35)),
		a = r(87);

	function i(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function s(e) {
		return (s = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}

	function c() {
		return (c = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var r = arguments[t];
				for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
			}
			return e
		}).apply(this, arguments)
	}

	function l(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function u(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function f(e, t) {
		return (f = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function p(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = m(e);
			if (t) {
				var o = m(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return d(this, r)
		}
	}

	function d(e, t) {
		return !t || "object" !== s(t) && "function" !== typeof t ? h(e) : t
	}

	function h(e) {
		if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function m(e) {
		return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}

	function v(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function y(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? v(Object(r), !0).forEach((function(t) {
				b(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function b(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}
	var g = function(e) {
			var t, r, n, o, a;
			return n = (a = e.rtl ? e.slideCount - 1 - e.index : e.index) < 0 || a >= e.slideCount, e.centerMode ? (o = Math.floor(e.slidesToShow / 2), r = (a - e.currentSlide) % e.slideCount === 0, a > e.currentSlide - o - 1 && a <= e.currentSlide + o && (t = !0)) : t = e.currentSlide <= a && a < e.currentSlide + e.slidesToShow, {
				"slick-slide": !0,
				"slick-active": t,
				"slick-center": r,
				"slick-cloned": n,
				"slick-current": a === (e.targetSlide < 0 ? e.targetSlide + e.slideCount : e.targetSlide >= e.slideCount ? e.targetSlide - e.slideCount : e.targetSlide)
			}
		},
		w = function(e, t) {
			return e.key || t
		},
		E = function(e) {
			var t, r = [],
				i = [],
				s = [],
				c = n.default.Children.count(e.children),
				l = (0, a.lazyStartIndex)(e),
				u = (0, a.lazyEndIndex)(e);
			return n.default.Children.forEach(e.children, (function(f, p) {
				var d, h = {
					message: "children",
					index: p,
					slidesToScroll: e.slidesToScroll,
					currentSlide: e.currentSlide
				};
				d = !e.lazyLoad || e.lazyLoad && e.lazyLoadedList.indexOf(p) >= 0 ? f : n.default.createElement("div", null);
				var m = function(e) {
						var t = {};
						return void 0 !== e.variableWidth && !1 !== e.variableWidth || (t.width = e.slideWidth), e.fade && (t.position = "relative", e.vertical ? t.top = -e.index * parseInt(e.slideHeight) : t.left = -e.index * parseInt(e.slideWidth), t.opacity = e.currentSlide === e.index ? 1 : 0, e.useCSS && (t.transition = "opacity " + e.speed + "ms " + e.cssEase + ", visibility " + e.speed + "ms " + e.cssEase)), t
					}(y(y({}, e), {}, {
						index: p
					})),
					v = d.props.className || "",
					b = g(y(y({}, e), {}, {
						index: p
					}));
				if (r.push(n.default.cloneElement(d, {
						key: "original" + w(d, p),
						"data-index": p,
						className: (0, o.default)(b, v),
						tabIndex: "-1",
						"aria-hidden": !b["slick-active"],
						style: y(y({
							outline: "none"
						}, d.props.style || {}), m),
						onClick: function(t) {
							d.props && d.props.onClick && d.props.onClick(t), e.focusOnSelect && e.focusOnSelect(h)
						}
					})), e.infinite && !1 === e.fade) {
					var E = c - p;
					E <= (0, a.getPreClones)(e) && c !== e.slidesToShow && ((t = -E) >= l && (d = f), b = g(y(y({}, e), {}, {
						index: t
					})), i.push(n.default.cloneElement(d, {
						key: "precloned" + w(d, t),
						"data-index": t,
						tabIndex: "-1",
						className: (0, o.default)(b, v),
						"aria-hidden": !b["slick-active"],
						style: y(y({}, d.props.style || {}), m),
						onClick: function(t) {
							d.props && d.props.onClick && d.props.onClick(t), e.focusOnSelect && e.focusOnSelect(h)
						}
					}))), c !== e.slidesToShow && ((t = c + p) < u && (d = f), b = g(y(y({}, e), {}, {
						index: t
					})), s.push(n.default.cloneElement(d, {
						key: "postcloned" + w(d, t),
						"data-index": t,
						tabIndex: "-1",
						className: (0, o.default)(b, v),
						"aria-hidden": !b["slick-active"],
						style: y(y({}, d.props.style || {}), m),
						onClick: function(t) {
							d.props && d.props.onClick && d.props.onClick(t), e.focusOnSelect && e.focusOnSelect(h)
						}
					})))
				}
			})), e.rtl ? i.concat(r, s).reverse() : i.concat(r, s)
		},
		_ = function(e) {
			! function(e, t) {
				if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && f(e, t)
			}(i, e);
			var t, r, o, a = p(i);

			function i() {
				var e;
				l(this, i);
				for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
				return b(h(e = a.call.apply(a, [this].concat(r))), "node", null), b(h(e), "handleRef", (function(t) {
					e.node = t
				})), e
			}
			return t = i, (r = [{
				key: "render",
				value: function() {
					var e = E(this.props),
						t = this.props,
						r = {
							onMouseEnter: t.onMouseEnter,
							onMouseOver: t.onMouseOver,
							onMouseLeave: t.onMouseLeave
						};
					return n.default.createElement("div", c({
						ref: this.handleRef,
						className: "slick-track",
						style: this.props.trackStyle
					}, r), e)
				}
			}]) && u(t.prototype, r), o && u(t, o), i
		}(n.default.PureComponent);
	t.Track = _
}, function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Dots = void 0;
	var n = i(r(0)),
		o = i(r(35)),
		a = r(87);

	function i(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function s(e) {
		return (s = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}

	function c(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function l(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function u(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function f(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function p(e, t) {
		return (p = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function d(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = m(e);
			if (t) {
				var o = m(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return h(this, r)
		}
	}

	function h(e, t) {
		return !t || "object" !== s(t) && "function" !== typeof t ? function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e) : t
	}

	function m(e) {
		return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var v = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), t && p(e, t)
		}(h, e);
		var t, r, i, s = d(h);

		function h() {
			return u(this, h), s.apply(this, arguments)
		}
		return t = h, (r = [{
			key: "clickHandler",
			value: function(e, t) {
				t.preventDefault(), this.props.clickHandler(e)
			}
		}, {
			key: "render",
			value: function() {
				for (var e, t = this.props, r = t.onMouseEnter, i = t.onMouseOver, s = t.onMouseLeave, u = t.infinite, f = t.slidesToScroll, p = t.slidesToShow, d = t.slideCount, h = t.currentSlide, m = (e = {
						slideCount: d,
						slidesToScroll: f,
						slidesToShow: p,
						infinite: u
					}).infinite ? Math.ceil(e.slideCount / e.slidesToScroll) : Math.ceil((e.slideCount - e.slidesToShow) / e.slidesToScroll) + 1, v = {
						onMouseEnter: r,
						onMouseOver: i,
						onMouseLeave: s
					}, y = [], b = 0; b < m; b++) {
					var g = (b + 1) * f - 1,
						w = u ? g : (0, a.clamp)(g, 0, d - 1),
						E = w - (f - 1),
						_ = u ? E : (0, a.clamp)(E, 0, d - 1),
						O = (0, o.default)({
							"slick-active": u ? h >= _ && h <= w : h === _
						}),
						S = {
							message: "dots",
							index: b,
							slidesToScroll: f,
							currentSlide: h
						},
						T = this.clickHandler.bind(this, S);
					y = y.concat(n.default.createElement("li", {
						key: b,
						className: O
					}, n.default.cloneElement(this.props.customPaging(b), {
						onClick: T
					})))
				}
				return n.default.cloneElement(this.props.appendDots(y), function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = null != arguments[t] ? arguments[t] : {};
						t % 2 ? c(Object(r), !0).forEach((function(t) {
							l(e, t, r[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
						}))
					}
					return e
				}({
					className: this.props.dotsClass
				}, v))
			}
		}]) && f(t.prototype, r), i && f(t, i), h
	}(n.default.PureComponent);
	t.Dots = v
}, function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.NextArrow = t.PrevArrow = void 0;
	var n = i(r(0)),
		o = i(r(35)),
		a = r(87);

	function i(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function s(e) {
		return (s = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}

	function c() {
		return (c = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var r = arguments[t];
				for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
			}
			return e
		}).apply(this, arguments)
	}

	function l(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function u(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? l(Object(r), !0).forEach((function(t) {
				f(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function f(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function p(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function d(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function h(e, t, r) {
		return t && d(e.prototype, t), r && d(e, r), e
	}

	function m(e, t) {
		if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), t && v(e, t)
	}

	function v(e, t) {
		return (v = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function y(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = g(e);
			if (t) {
				var o = g(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return b(this, r)
		}
	}

	function b(e, t) {
		return !t || "object" !== s(t) && "function" !== typeof t ? function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e) : t
	}

	function g(e) {
		return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var w = function(e) {
		m(r, e);
		var t = y(r);

		function r() {
			return p(this, r), t.apply(this, arguments)
		}
		return h(r, [{
			key: "clickHandler",
			value: function(e, t) {
				t && t.preventDefault(), this.props.clickHandler(e, t)
			}
		}, {
			key: "render",
			value: function() {
				var e = {
						"slick-arrow": !0,
						"slick-prev": !0
					},
					t = this.clickHandler.bind(this, {
						message: "previous"
					});
				!this.props.infinite && (0 === this.props.currentSlide || this.props.slideCount <= this.props.slidesToShow) && (e["slick-disabled"] = !0, t = null);
				var r = {
						key: "0",
						"data-role": "none",
						className: (0, o.default)(e),
						style: {
							display: "block"
						},
						onClick: t
					},
					a = {
						currentSlide: this.props.currentSlide,
						slideCount: this.props.slideCount
					};
				return this.props.prevArrow ? n.default.cloneElement(this.props.prevArrow, u(u({}, r), a)) : n.default.createElement("button", c({
					key: "0",
					type: "button"
				}, r), " ", "Previous")
			}
		}]), r
	}(n.default.PureComponent);
	t.PrevArrow = w;
	var E = function(e) {
		m(r, e);
		var t = y(r);

		function r() {
			return p(this, r), t.apply(this, arguments)
		}
		return h(r, [{
			key: "clickHandler",
			value: function(e, t) {
				t && t.preventDefault(), this.props.clickHandler(e, t)
			}
		}, {
			key: "render",
			value: function() {
				var e = {
						"slick-arrow": !0,
						"slick-next": !0
					},
					t = this.clickHandler.bind(this, {
						message: "next"
					});
				(0, a.canGoNext)(this.props) || (e["slick-disabled"] = !0, t = null);
				var r = {
						key: "1",
						"data-role": "none",
						className: (0, o.default)(e),
						style: {
							display: "block"
						},
						onClick: t
					},
					i = {
						currentSlide: this.props.currentSlide,
						slideCount: this.props.slideCount
					};
				return this.props.nextArrow ? n.default.cloneElement(this.props.nextArrow, u(u({}, r), i)) : n.default.createElement("button", c({
					key: "1",
					type: "button"
				}, r), " ", "Next")
			}
		}]), r
	}(n.default.PureComponent);
	t.NextArrow = E
}, function(e, t, r) {
	"use strict";
	r.r(t),
		function(e) {
			var r = function() {
					if ("undefined" !== typeof Map) return Map;

					function e(e, t) {
						var r = -1;
						return e.some((function(e, n) {
							return e[0] === t && (r = n, !0)
						})), r
					}
					return function() {
						function t() {
							this.__entries__ = []
						}
						return Object.defineProperty(t.prototype, "size", {
							get: function() {
								return this.__entries__.length
							},
							enumerable: !0,
							configurable: !0
						}), t.prototype.get = function(t) {
							var r = e(this.__entries__, t),
								n = this.__entries__[r];
							return n && n[1]
						}, t.prototype.set = function(t, r) {
							var n = e(this.__entries__, t);
							~n ? this.__entries__[n][1] = r : this.__entries__.push([t, r])
						}, t.prototype.delete = function(t) {
							var r = this.__entries__,
								n = e(r, t);
							~n && r.splice(n, 1)
						}, t.prototype.has = function(t) {
							return !!~e(this.__entries__, t)
						}, t.prototype.clear = function() {
							this.__entries__.splice(0)
						}, t.prototype.forEach = function(e, t) {
							void 0 === t && (t = null);
							for (var r = 0, n = this.__entries__; r < n.length; r++) {
								var o = n[r];
								e.call(t, o[1], o[0])
							}
						}, t
					}()
				}(),
				n = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
				o = "undefined" !== typeof e && e.Math === Math ? e : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
				a = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(o) : function(e) {
					return setTimeout((function() {
						return e(Date.now())
					}), 1e3 / 60)
				};
			var i = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
				s = "undefined" !== typeof MutationObserver,
				c = function() {
					function e() {
						this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(e, t) {
							var r = !1,
								n = !1,
								o = 0;

							function i() {
								r && (r = !1, e()), n && c()
							}

							function s() {
								a(i)
							}

							function c() {
								var e = Date.now();
								if (r) {
									if (e - o < 2) return;
									n = !0
								} else r = !0, n = !1, setTimeout(s, t);
								o = e
							}
							return c
						}(this.refresh.bind(this), 20)
					}
					return e.prototype.addObserver = function(e) {
						~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
					}, e.prototype.removeObserver = function(e) {
						var t = this.observers_,
							r = t.indexOf(e);
						~r && t.splice(r, 1), !t.length && this.connected_ && this.disconnect_()
					}, e.prototype.refresh = function() {
						this.updateObservers_() && this.refresh()
					}, e.prototype.updateObservers_ = function() {
						var e = this.observers_.filter((function(e) {
							return e.gatherActive(), e.hasActive()
						}));
						return e.forEach((function(e) {
							return e.broadcastActive()
						})), e.length > 0
					}, e.prototype.connect_ = function() {
						n && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), s ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						})) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
					}, e.prototype.disconnect_ = function() {
						n && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
					}, e.prototype.onTransitionEnd_ = function(e) {
						var t = e.propertyName,
							r = void 0 === t ? "" : t;
						i.some((function(e) {
							return !!~r.indexOf(e)
						})) && this.refresh()
					}, e.getInstance = function() {
						return this.instance_ || (this.instance_ = new e), this.instance_
					}, e.instance_ = null, e
				}(),
				l = function(e, t) {
					for (var r = 0, n = Object.keys(t); r < n.length; r++) {
						var o = n[r];
						Object.defineProperty(e, o, {
							value: t[o],
							enumerable: !1,
							writable: !1,
							configurable: !0
						})
					}
					return e
				},
				u = function(e) {
					return e && e.ownerDocument && e.ownerDocument.defaultView || o
				},
				f = y(0, 0, 0, 0);

			function p(e) {
				return parseFloat(e) || 0
			}

			function d(e) {
				for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
				return t.reduce((function(t, r) {
					return t + p(e["border-" + r + "-width"])
				}), 0)
			}

			function h(e) {
				var t = e.clientWidth,
					r = e.clientHeight;
				if (!t && !r) return f;
				var n = u(e).getComputedStyle(e),
					o = function(e) {
						for (var t = {}, r = 0, n = ["top", "right", "bottom", "left"]; r < n.length; r++) {
							var o = n[r],
								a = e["padding-" + o];
							t[o] = p(a)
						}
						return t
					}(n),
					a = o.left + o.right,
					i = o.top + o.bottom,
					s = p(n.width),
					c = p(n.height);
				if ("border-box" === n.boxSizing && (Math.round(s + a) !== t && (s -= d(n, "left", "right") + a), Math.round(c + i) !== r && (c -= d(n, "top", "bottom") + i)), ! function(e) {
						return e === u(e).document.documentElement
					}(e)) {
					var l = Math.round(s + a) - t,
						h = Math.round(c + i) - r;
					1 !== Math.abs(l) && (s -= l), 1 !== Math.abs(h) && (c -= h)
				}
				return y(o.left, o.top, s, c)
			}
			var m = "undefined" !== typeof SVGGraphicsElement ? function(e) {
				return e instanceof u(e).SVGGraphicsElement
			} : function(e) {
				return e instanceof u(e).SVGElement && "function" === typeof e.getBBox
			};

			function v(e) {
				return n ? m(e) ? function(e) {
					var t = e.getBBox();
					return y(0, 0, t.width, t.height)
				}(e) : h(e) : f
			}

			function y(e, t, r, n) {
				return {
					x: e,
					y: t,
					width: r,
					height: n
				}
			}
			var b = function() {
					function e(e) {
						this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = y(0, 0, 0, 0), this.target = e
					}
					return e.prototype.isActive = function() {
						var e = v(this.target);
						return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
					}, e.prototype.broadcastRect = function() {
						var e = this.contentRect_;
						return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
					}, e
				}(),
				g = function(e, t) {
					var r, n, o, a, i, s, c, u = (n = (r = t).x, o = r.y, a = r.width, i = r.height, s = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object, c = Object.create(s.prototype), l(c, {
						x: n,
						y: o,
						width: a,
						height: i,
						top: o,
						right: n + a,
						bottom: i + o,
						left: n
					}), c);
					l(this, {
						target: e,
						contentRect: u
					})
				},
				w = function() {
					function e(e, t, n) {
						if (this.activeObservations_ = [], this.observations_ = new r, "function" !== typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
						this.callback_ = e, this.controller_ = t, this.callbackCtx_ = n
					}
					return e.prototype.observe = function(e) {
						if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
						if ("undefined" !== typeof Element && Element instanceof Object) {
							if (!(e instanceof u(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
							var t = this.observations_;
							t.has(e) || (t.set(e, new b(e)), this.controller_.addObserver(this), this.controller_.refresh())
						}
					}, e.prototype.unobserve = function(e) {
						if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
						if ("undefined" !== typeof Element && Element instanceof Object) {
							if (!(e instanceof u(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
							var t = this.observations_;
							t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
						}
					}, e.prototype.disconnect = function() {
						this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
					}, e.prototype.gatherActive = function() {
						var e = this;
						this.clearActive(), this.observations_.forEach((function(t) {
							t.isActive() && e.activeObservations_.push(t)
						}))
					}, e.prototype.broadcastActive = function() {
						if (this.hasActive()) {
							var e = this.callbackCtx_,
								t = this.activeObservations_.map((function(e) {
									return new g(e.target, e.broadcastRect())
								}));
							this.callback_.call(e, t, e), this.clearActive()
						}
					}, e.prototype.clearActive = function() {
						this.activeObservations_.splice(0)
					}, e.prototype.hasActive = function() {
						return this.activeObservations_.length > 0
					}, e
				}(),
				E = "undefined" !== typeof WeakMap ? new WeakMap : new r,
				_ = function e(t) {
					if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
					if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
					var r = c.getInstance(),
						n = new w(t, r, this);
					E.set(this, n)
				};
			["observe", "unobserve", "disconnect"].forEach((function(e) {
				_.prototype[e] = function() {
					var t;
					return (t = E.get(this))[e].apply(t, arguments)
				}
			}));
			var O = "undefined" !== typeof o.ResizeObserver ? o.ResizeObserver : _;
			t.default = O
		}.call(this, r(77))
}, function(e, t, r) {
	var n = r(377),
		o = function(e) {
			var t = "",
				r = Object.keys(e);
			return r.forEach((function(o, a) {
				var i = e[o];
				(function(e) {
					return /[height|width]$/.test(e)
				})(o = n(o)) && "number" === typeof i && (i += "px"), t += !0 === i ? o : !1 === i ? "not " + o : "(" + o + ": " + i + ")", a < r.length - 1 && (t += " and ")
			})), t
		};
	e.exports = function(e) {
		var t = "";
		return "string" === typeof e ? e : e instanceof Array ? (e.forEach((function(r, n) {
			t += o(r), n < e.length - 1 && (t += ", ")
		})), t) : o(e)
	}
}, function(e, t) {
	e.exports = function(e) {
		return e.replace(/[A-Z]/g, (function(e) {
			return "-" + e.toLowerCase()
		})).toLowerCase()
	}
}, function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = void 0;
	var n, o = (n = r(0)) && n.__esModule ? n : {
		default: n
	};
	var a = {
		accessibility: !0,
		adaptiveHeight: !1,
		afterChange: null,
		appendDots: function(e) {
			return o.default.createElement("ul", {
				style: {
					display: "block"
				}
			}, e)
		},
		arrows: !0,
		autoplay: !1,
		autoplaySpeed: 3e3,
		beforeChange: null,
		centerMode: !1,
		centerPadding: "50px",
		className: "",
		cssEase: "ease",
		customPaging: function(e) {
			return o.default.createElement("button", null, e + 1)
		},
		dots: !1,
		dotsClass: "slick-dots",
		draggable: !0,
		easing: "linear",
		edgeFriction: .35,
		fade: !1,
		focusOnSelect: !1,
		infinite: !0,
		initialSlide: 0,
		lazyLoad: null,
		nextArrow: null,
		onEdge: null,
		onInit: null,
		onLazyLoadError: null,
		onReInit: null,
		pauseOnDotsHover: !1,
		pauseOnFocus: !1,
		pauseOnHover: !0,
		prevArrow: null,
		responsive: null,
		rows: 1,
		rtl: !1,
		slide: "div",
		slidesPerRow: 1,
		slidesToScroll: 1,
		slidesToShow: 1,
		speed: 500,
		swipe: !0,
		swipeEvent: null,
		swipeToSlide: !1,
		touchMove: !0,
		touchThreshold: 5,
		useCSS: !0,
		useTransform: !0,
		variableWidth: !1,
		vertical: !1,
		waitForAnimate: !0
	};
	t.default = a
}, function(e, t, r) {
	var n = r(380);
	e.exports = new n
}, function(e, t, r) {
	var n = r(381),
		o = r(226),
		a = o.each,
		i = o.isFunction,
		s = o.isArray;

	function c() {
		if (!window.matchMedia) throw new Error("matchMedia not present, legacy browsers require a polyfill");
		this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches
	}
	c.prototype = {
		constructor: c,
		register: function(e, t, r) {
			var o = this.queries,
				c = r && this.browserIsIncapable;
			return o[e] || (o[e] = new n(e, c)), i(t) && (t = {
				match: t
			}), s(t) || (t = [t]), a(t, (function(t) {
				i(t) && (t = {
					match: t
				}), o[e].addHandler(t)
			})), this
		},
		unregister: function(e, t) {
			var r = this.queries[e];
			return r && (t ? r.removeHandler(t) : (r.clear(), delete this.queries[e])), this
		}
	}, e.exports = c
}, function(e, t, r) {
	var n = r(382),
		o = r(226).each;

	function a(e, t) {
		this.query = e, this.isUnconditional = t, this.handlers = [], this.mql = window.matchMedia(e);
		var r = this;
		this.listener = function(e) {
			r.mql = e.currentTarget || e, r.assess()
		}, this.mql.addListener(this.listener)
	}
	a.prototype = {
		constuctor: a,
		addHandler: function(e) {
			var t = new n(e);
			this.handlers.push(t), this.matches() && t.on()
		},
		removeHandler: function(e) {
			var t = this.handlers;
			o(t, (function(r, n) {
				if (r.equals(e)) return r.destroy(), !t.splice(n, 1)
			}))
		},
		matches: function() {
			return this.mql.matches || this.isUnconditional
		},
		clear: function() {
			o(this.handlers, (function(e) {
				e.destroy()
			})), this.mql.removeListener(this.listener), this.handlers.length = 0
		},
		assess: function() {
			var e = this.matches() ? "on" : "off";
			o(this.handlers, (function(t) {
				t[e]()
			}))
		}
	}, e.exports = a
}, function(e, t) {
	function r(e) {
		this.options = e, !e.deferSetup && this.setup()
	}
	r.prototype = {
		constructor: r,
		setup: function() {
			this.options.setup && this.options.setup(), this.initialised = !0
		},
		on: function() {
			!this.initialised && this.setup(), this.options.match && this.options.match()
		},
		off: function() {
			this.options.unmatch && this.options.unmatch()
		},
		destroy: function() {
			this.options.destroy ? this.options.destroy() : this.off()
		},
		equals: function(e) {
			return this.options === e || this.options.match === e
		}
	}, e.exports = r
}, function(e, t, r) {
	var n = r(603),
		o = "object" == typeof self && self && self.Object === Object && self,
		a = n || o || Function("return this")();
	e.exports = a
}, function(e, t, r) {
	var n = r(383).Symbol;
	e.exports = n
}, , , , , function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return l
	}));
	var n = r(0),
		o = r.n(n),
		a = r(70),
		i = r.n(a),
		s = r(266),
		c = r(9);

	function l(e) {
		return o.a.createElement(c.FadeInSection, null, o.a.createElement(i.a, null, o.a.createElement(s.default, e)))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return c
	}));
	var n = r(0),
		o = r.n(n),
		a = r(70),
		i = r.n(a),
		s = r(200);

	function c(e) {
		return o.a.createElement(i.a, null, o.a.createElement(s.default, e))
	}
}, , , , function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return y
	}));
	var n = r(0),
		o = r.n(n),
		a = r(6),
		i = r(110),
		s = r(149),
		c = r(213),
		l = r.n(c),
		u = r(214),
		f = r.n(u),
		p = r(215),
		d = r.n(p),
		h = r(155);

	function m(e, t) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) || function(e, t) {
			var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
			if (null == r) return;
			var n, o, a = [],
				i = !0,
				s = !1;
			try {
				for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
			} catch (c) {
				s = !0, o = c
			} finally {
				try {
					i || null == r.return || r.return()
				} finally {
					if (s) throw o
				}
			}
			return a
		}(e, t) || function(e, t) {
			if (!e) return;
			if ("string" === typeof e) return v(e, t);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			"Object" === r && e.constructor && (r = e.constructor.name);
			if ("Map" === r || "Set" === r) return Array.from(e);
			if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return v(e, t)
		}(e, t) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function v(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
		return n
	}

	function y(e) {
		var t = m(Object(n.useState)(!e.delay), 2),
			r = t[0],
			c = t[1],
			u = m(Object(n.useState)(""), 2),
			p = u[0],
			v = u[1],
			y = Object(n.useRef)(null);

		function b() {
			c(!1), y.current.open()
		}
		return Object(n.useEffect)((function() {
			if (e.show_popup && b(), e.delay) Object(h.default)({
				onExitIntent: function() {
					c(!0)
				}
			});
			return function() {
				"undefined" !== typeof removeExitIntent && removeExitIntent()
			}
		}), []), Object(n.useEffect)((function() {
			p && b()
		}), [p]), console.log(p), o.a.createElement(o.a.Fragment, null, r ? o.a.createElement("div", {
			className: "bottom-sticker"
		}, o.a.createElement("div", {
			className: "bottom-sticker__close",
			onClick: function() {
				s.default.hide(), c(!1)
			}
		}), o.a.createElement("div", {
			className: "bottom-sticker__wrapper"
		}, o.a.createElement("p", {
			className: "bottom-sticker__content"
		}, "How would you rate your experience?"), o.a.createElement("div", {
			className: "bottom-sticker__feedback"
		}, o.a.createElement("div", {
			className: "feedback__rate"
		}, o.a.createElement("div", {
			className: "feedback__rate-circle",
			onClick: function() {
				return v("poor_rate")
			}
		}, o.a.createElement("img", {
			src: l.a,
			alt: "Poor",
			width: "44",
			height: "44"
		})), o.a.createElement("p", {
			className: "feedback__rate-txt"
		}, "Poor")), o.a.createElement("div", {
			className: "feedback__rate"
		}, o.a.createElement("div", {
			className: "feedback__rate-circle",
			onClick: function() {
				return v("average_rate")
			}
		}, o.a.createElement("img", {
			src: f.a,
			alt: "Average",
			width: "44",
			height: "44"
		})), o.a.createElement("p", {
			className: "feedback__rate-txt"
		}, "Average")), o.a.createElement("div", {
			className: "feedback__rate"
		}, o.a.createElement("div", {
			className: "feedback__rate-circle",
			onClick: function() {
				return v("great_rate")
			}
		}, o.a.createElement("img", {
			src: d.a,
			alt: "Great",
			width: "44",
			height: "44"
		})), o.a.createElement("p", {
			className: "feedback__rate-txt"
		}, "Great"))))) : null, o.a.createElement(a.default, {
			ref: y,
			className: "feedback"
		}, o.a.createElement(i.default, {
			close: function() {
				return y.current.close()
			},
			recaptchaKey: e.recaptchaKey,
			rate: p,
			full_access: e.full_access
		})))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return i
	}));
	var n = r(0),
		o = r.n(n),
		a = r(9);

	function i(e) {
		var t = e.user && (e.user.full_access || e.user["".concat(e.test.code, "_access")]),
			r = t ? e.user["".concat(e.test.code, "_retakes")] : 0;
		return o.a.createElement(a.FadeInSection, null, t && r > 0 ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", null, o.a.createElement("p", {
			className: "get-access-blk--already-purchased"
		}, "Access already purchased"), o.a.createElement("p", {
			className: "get-access-blk--includes"
		}, r, " test ", 1 === r ? "take" : "takes", " remaining")), o.a.createElement("div", null, o.a.createElement("a", {
			href: "/tests/".concat(e.test.path, "/take"),
			"aria-label": "Go To Test",
			className: "button button--with-icon button--green button--green--medium"
		}, "Go To Test ", o.a.createElement("span", {
			className: "small-icons next-arrow-white-s"
		})))) : t && 0 === r ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", null, o.a.createElement("p", {
			className: "get-access-blk--price"
		}, "Price: ", e.price.currency.symbol, e.price.retakes_price.toFixed(2), o.a.createElement("del", null, o.a.createElement("span", null, e.price.currency.symbol, e.price.original_price))), o.a.createElement("p", {
			className: "get-access-blk--includes"
		}, "Purchase 2 additional retakes")), o.a.createElement("div", null, o.a.createElement("div", {
			className: "get-access-blk--links"
		}, o.a.createElement("a", {
			href: "/checkout/retakes?test=".concat(e.test.code),
			"aria-label": "Buy Access",
			className: "button button--with-icon button--green button--green--medium"
		}, "Buy Access ", o.a.createElement("span", {
			className: "small-icons next-arrow-white-s"
		})), o.a.createElement("a", {
			href: "/tests/".concat(e.test.path),
			className: "get-access-blk--learn-more"
		}, "Learn more")))) : o.a.createElement(o.a.Fragment, null, o.a.createElement("div", null, o.a.createElement("p", {
			className: "get-access-blk--price"
		}, "Price: ", e.price.currency.symbol, e.price.price.toFixed(2), " ", e.price.price !== e.price.original_price && o.a.createElement("del", null, o.a.createElement("span", null, e.price.currency.symbol, e.price.original_price))), o.a.createElement("p", {
			className: "get-access-blk--includes"
		}, "Includes 2 takes")), o.a.createElement("div", null, o.a.createElement("div", {
			className: "get-access-blk--links"
		}, o.a.createElement("a", {
			href: "/checkout/".concat(e.test.path),
			"aria-label": "Buy Access",
			className: "button button--with-icon button--green button--green--medium"
		}, "Buy Access ", o.a.createElement("span", {
			className: "small-icons next-arrow-white-s"
		})), o.a.createElement("a", {
			href: "/tests/".concat(e.test.path),
			className: "get-access-blk--learn-more"
		}, "Learn more")))))
	}
}, , , function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return s
	}));
	var n = r(0),
		o = r.n(n),
		a = r(6),
		i = r(289);

	function s(e) {
		var t = Object(n.useRef)(null),
			r = e.popup_text ? e.popup_text : "".concat(e.score, "% match");
		return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
			className: "career-details__report career-details__report--share",
			onClick: function() {
				t.current.open()
			}
		}, o.a.createElement("p", null, "Share my results"), o.a.createElement("div", {
			className: "small-icons share-white"
		})), o.a.createElement(a.default, {
			ref: t,
			className: "share-match-popup"
		}, o.a.createElement("div", {
			className: "share-match-popup__block"
		}, o.a.createElement("div", {
			className: "grid-x align-center"
		}, o.a.createElement("div", {
			className: "small-12 cell"
		}, o.a.createElement("div", {
			className: "large-icon share-career small-mar-bot-20"
		}), o.a.createElement("h3", {
			className: "share-match-popup__title"
		}, "Share my match"))), o.a.createElement("div", {
			className: "grid-x align-center"
		}, o.a.createElement("div", {
			className: "large-4 medium-4 small-12 cell"
		}, o.a.createElement("img", {
			src: e.image,
			alt: e.title
		})), o.a.createElement("div", {
			className: "large-8 medium-8 small-12 cell"
		}, o.a.createElement("h5", {
			className: "share-match-popup__career"
		}, e.title), o.a.createElement("p", {
			className: "share-match-popup__match"
		}, " ", r))), o.a.createElement("div", {
			className: "grid-x align-center share-match-popup__line"
		}, o.a.createElement(i.default, e)))))
	}
}, , function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return i
	}));
	var n = r(0),
		o = r.n(n),
		a = r(6);

	function i(e) {
		var t = Object(n.useRef)(null);
		Object(n.useEffect)((function() {
			t.current.open()
		}), []);
		return o.a.createElement(a.default, {
			ref: t,
			onClose: function() {
				document.location.href = "/dashboard"
			}
		}, o.a.createElement("div", {
			className: "grid-x align-center"
		}, o.a.createElement("div", {
			className: "cell text-center"
		}, o.a.createElement("h3", {
			className: "mar-bot-10"
		}, e.checkout ? "Your" : "Test", " Access"), o.a.createElement("p", {
			className: "popup__text"
		}, e.checkout ? "Access to purchase is not permitted from your account." : "Access to this test is not currently permitted on your account."), o.a.createElement("p", {
			className: "popup__text"
		}, "Contact your account's administrator to request additional ", e.retake ? "retake" : "access", ". "))))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return m
	}));
	var n = r(0),
		o = r.n(n),
		a = r(2),
		i = r(191),
		s = r(143),
		c = r(53);

	function l(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function u(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function f(e, t) {
		return (f = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function p(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = h(e);
			if (t) {
				var o = h(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return d(this, r)
		}
	}

	function d(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function h(e) {
		return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var m = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && f(e, t)
		}(h, e);
		var t, r, n, d = p(h);

		function h() {
			return l(this, h), d.apply(this, arguments)
		}
		return t = h, (r = [{
			key: "componentDidMount",
			value: function() {
				s.default.dispatch(Object(c.loadUserTest)(this.props.test, this.props.user))
			}
		}, {
			key: "render",
			value: function() {
				return o.a.createElement(a.a, {
					store: s.default
				}, o.a.createElement(i.default, null))
			}
		}]) && u(t.prototype, r), n && u(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), h
	}(n.Component)
}, , , , , , , , , function(e, t, r) {
	e.exports = r.p + "media/images/review-trustpilot-76f58b54.png"
}, , function(e, t, r) {
	"use strict";
	r.r(t);
	r(0);
	var n = r(36);
	t.default = n.default
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(10),
		i = r(2),
		s = r(67),
		c = r(1),
		l = r(16),
		u = r(158);

	function f(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function p(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function d(e, t) {
		return (d = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function h(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = v(e);
			if (t) {
				var o = v(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return m(this, r)
		}
	}

	function m(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function v(e) {
		return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var y = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && d(e, t)
		}(i, e);
		var t, r, n, a = h(i);

		function i() {
			var e;
			f(this, i);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = a.call.apply(a, [this].concat(r))).state = {
				isLoading: !1
			}, e.startTest = function() {
				e.setState({
					isLoading: !0
				}, (function() {
					e.props.actions.startTest(e.props.aptitudeTest.test.id)
				}))
			}, e.startExampleTest = function() {
				e.props.actions.userGoToTestExample()
			}, e.isStarted = function() {
				return !!localStorage.getItem("".concat(e.props.aptitudeTest.test.code, "StartedAt"))
			}, e
		}
		return t = i, (r = [{
			key: "render",
			value: function() {
				var e = this.props.aptitudeTest.test;
				return o.a.createElement("div", {
					className: "test-page__wrapper"
				}, o.a.createElement("div", {
					className: "test-page__wrapper__main for-start-main-page"
				}, o.a.createElement("div", {
					className: "blur-box-container blur-box-container__main blur-box-container--spaced test-main-page"
				}, this.state.isLoading ? o.a.createElement(c.Loader, null) : null, o.a.createElement("div", {
					className: "blur-box"
				}, o.a.createElement("div", {
					className: "main-test align-center"
				}, o.a.createElement("div", {
					className: "breadcrumbs-nav breadcrumbs-nav--tests"
				}, o.a.createElement("a", {
					href: "/tests"
				}, o.a.createElement("span", null, "Tests")), o.a.createElement("div", {
					className: "small-icon arrow-breadcrumbs"
				}), o.a.createElement("a", {
					href: "/tests/" + e.code
				}, o.a.createElement("span", null, e.name)), o.a.createElement("div", {
					className: "small-icon arrow-breadcrumbs"
				}), o.a.createElement("span", null, "Start")), o.a.createElement("div", {
					className: "large-icon " + e.code + "-white-bold"
				}), o.a.createElement("h1", {
					className: "main-test__title"
				}, e.name, " Test"), o.a.createElement("div", {
					className: "grid-x main-test__details"
				}, o.a.createElement("div", {
					className: "small-6 medium-4 cell menu flex-center"
				}, o.a.createElement("span", {
					className: "small-icons questions main-test__details__icon"
				}), this.props.aptitudeTest.userQuestions.length, " questions"), o.a.createElement("div", {
					className: "small-6 medium-4 cell flex-center"
				}, o.a.createElement("span", {
					className: "small-icons timed main-test__details__icon"
				}), e.time, "~ minutes"), o.a.createElement("div", {
					className: "small-12 medium-4 cell menu flex-center main-test__details__last"
				}, o.a.createElement("div", {
					className: "float-left flex-center alarm "
				}, o.a.createElement("div", {
					className: "small-icons clock-red main-test__details__icon"
				})), "This test is timed")), o.a.createElement("p", {
					className: "max-width-777"
				}, e.introduction), o.a.createElement(l.default, {
					onClick: this.isStarted() ? this.startTest : this.startExampleTest,
					className: "button--with-icon"
				}, this.isStarted() ? "Continue" : "Start", o.a.createElement("span", {
					className: "small-icons next-arrow-white-xs is-right"
				})), o.a.createElement("div", {
					className: "test-btn-container flex-center"
				}, o.a.createElement("a", {
					className: "text-button",
					onClick: this.props.openInstructions
				}, "Read Instructions")), o.a.createElement(u.default, {
					user: this.props.aptitudeTest.user
				}), o.a.createElement("div", {
					className: "ci-test-benefits-block",
					dangerouslySetInnerHTML: {
						__html: e.bullet_description
					}
				})), o.a.createElement("div", {
					className: "bg-copy " + e.code
				})))))
			}
		}]) && p(t.prototype, r), n && p(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), i
	}(n.Component);
	t.default = Object(i.b)((function(e) {
		return {
			aptitudeTest: e.aptitudeTest
		}
	}), (function(e) {
		return {
			actions: Object(a.b)(Object.assign({}, s), e)
		}
	}))(y)
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n);

	function a(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function i(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function s(e, t) {
		return (s = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function c(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = u(e);
			if (t) {
				var o = u(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return l(this, r)
		}
	}

	function l(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function u(e) {
		return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var f = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && s(e, t)
		}(u, e);
		var t, r, n, l = c(u);

		function u() {
			var e;
			a(this, u);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = l.call.apply(l, [this].concat(r))).simpleRef = o.a.createRef(), e
		}
		return t = u, (r = [{
			key: "componentDidMount",
			value: function() {
				window.innerWidth < 640 && this.simpleRef.current.scrollIntoView({
					behavior: "smooth"
				})
			}
		}, {
			key: "render",
			value: function() {
				var e = window.innerWidth > 1300 ? this.props.top : 0;
				return o.a.createElement("div", {
					ref: this.simpleRef,
					className: "side-box side-box--status " + this.props.bgImage + " " + this.props.visible,
					style: {
						top: e + "px"
					}
				}, o.a.createElement("div", {
					className: "blur-box-container"
				}, o.a.createElement("div", {
					className: "blur-box"
				}, o.a.createElement("div", {
					className: "side-box__inner"
				}, this.props.correct ? o.a.createElement("h3", {
					className: "side-box__inner__title"
				}, o.a.createElement("span", {
					className: "small-icon tick-icon correct-example"
				}), "Your answer is correct!") : o.a.createElement("h3", {
					className: "side-box__inner__wrong"
				}, o.a.createElement("span", {
					className: "small-icon red-delete"
				}), "Your answer is incorrect!"), o.a.createElement("div", {
					className: "side-box__inner__text",
					dangerouslySetInnerHTML: {
						__html: this.props.description
					}
				})), o.a.createElement("div", {
					className: "bg-copy small-content " + this.props.bgImage
				}))))
			}
		}]) && i(t.prototype, r), n && i(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), u
	}(o.a.Component);
	t.default = f
}, , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, r) {
	"use strict";
	r.r(t);
	r(0);
	var n = r(256);
	t.default = n.default
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return h
	}));
	var n = r(0),
		o = r.n(n),
		a = r(70),
		i = r.n(a),
		s = r(548);

	function c(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function l(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function u(e, t) {
		return (u = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function f(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = d(e);
			if (t) {
				var o = d(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return p(this, r)
		}
	}

	function p(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function d(e) {
		return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var h = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && u(e, t)
		}(p, e);
		var t, r, n, a = f(p);

		function p() {
			return c(this, p), a.apply(this, arguments)
		}
		return t = p, (r = [{
			key: "render",
			value: function() {
				return o.a.createElement(i.a, null, o.a.createElement(s.default, this.props))
			}
		}]) && l(t.prototype, r), n && l(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), p
	}(o.a.Component)
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(550),
		i = r(555),
		s = r(557),
		c = r(559);

	function l(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function u(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function f(e, t) {
		return (f = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function p(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = h(e);
			if (t) {
				var o = h(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return d(this, r)
		}
	}

	function d(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function h(e) {
		return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var m = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && f(e, t)
		}(h, e);
		var t, r, n, d = p(h);

		function h() {
			var e;
			l(this, h);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = d.call.apply(d, [this].concat(r))).renderPage = function() {
				switch (e.props.test.code) {
					case "interests":
						return o.a.createElement(a.default, e.props);
					case "personality":
						return o.a.createElement(i.default, e.props);
					case "motivators":
						return o.a.createElement(s.default, e.props);
					default:
						return o.a.createElement(c.default, e.props)
				}
			}, e
		}
		return t = h, (r = [{
			key: "render",
			value: function() {
				return o.a.createElement(o.a.Fragment, null, this.renderPage())
			}
		}]) && u(t.prototype, r), n && u(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), h
	}(n.Component);
	t.default = m
}, function(e, t, r) {
	"use strict";
	r.r(t);
	r(0);
	var n = r(257);
	t.default = n.default
}, function(e, t, r) {
	"use strict";
	r.r(t);
	r(0);
	var n = r(258);
	t.default = n.default
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return i
	}));
	var n = r(0),
		o = r.n(n),
		a = r(542);

	function i(e) {
		return o.a.createElement(o.a.Fragment, null, e.questions.filter((function(t) {
			return t.number === e.currentPage
		})).map((function(t) {
			return o.a.createElement(a.default, {
				key: t.number,
				question: t,
				page: t.number,
				instructions: e.openInstructions,
				overview: e.goToOverview
			})
		})))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(10),
		i = r(2),
		s = r(67),
		c = r(147),
		l = r(342),
		u = r(16),
		f = r(238),
		p = r(239);

	function d(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function h(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function m(e, t) {
		return (m = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function v(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = b(e);
			if (t) {
				var o = b(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return y(this, r)
		}
	}

	function y(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function b(e) {
		return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var g = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && m(e, t)
		}(i, e);
		var t, r, n, a = v(i);

		function i() {
			var e;
			d(this, i);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = a.call.apply(a, [this].concat(r))).state = {
				isMobile: !1,
				height: 0,
				boxHeight: 0,
				top: 0
			}, e.testBoxRef = o.a.createRef(), e.handleWindowBeforeUnload = function(t) {
				if (localStorage.getItem("".concat(e.props.aptitudeTest.test.code))) return t.preventDefault(), t.returnValue = "Your test results and progress will be lost.", "Your test results and progress will be lost."
			}, e.updateTestBoxSizeAndPosition = function() {
				setTimeout((function() {
					if (e.testBoxRef.current) {
						var t = e.testBoxRef.current.clientHeight;
						e.state.boxHeight !== t && e.setState({
							boxHeight: t,
							top: e.testBoxRef.current.offsetTop
						})
					}
				}), 1)
			}, e.detectDevice = function() {
				e.setState({
					height: window.innerHeight,
					top: e.testBoxRef.current.offsetTop
				});
				var t = window.innerWidth < 640;
				t !== e.state.isMobile && e.setState({
					isMobile: t
				})
			}, e.goToNextPage = function() {
				e.props.actions.userGoNextTestPage()
			}, e.goToPreviousPage = function() {
				e.props.actions.userGoPrevTestPage()
			}, e.setUserAnswer = function(t) {
				e.props.actions.userAnswerTestQuestion(t)
			}, e.goToPage = function(t) {
				e.props.actions.userNavigateTestToPage(parseInt(t))
			}, e
		}
		return t = i, (r = [{
			key: "componentDidMount",
			value: function() {
				window.addEventListener("beforeunload", this.handleWindowBeforeUnload), this.detectDevice(), window.addEventListener("resize", this.detectDevice), window.addEventListener("resize", this.updateTestBoxSizeAndPosition)
			}
		}, {
			key: "componentDidUpdate",
			value: function(e, t, r) {
				this.updateTestBoxSizeAndPosition()
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				window.removeEventListener("beforeunload", this.handleWindowBeforeUnload), window.removeEventListener("resize", this.detectDevice), window.removeEventListener("resize", this.updateTestBoxSizeAndPosition)
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.props.question.answer_variants,
					r = this.state.isMobile ? this.state.height : "initial",
					n = this.state.boxHeight + 100 > this.state.height && !1 === this.state.isMobile,
					a = this.state.boxHeight + 100 <= this.state.height && !1 === this.state.isMobile;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: "test-page__wrapper" + (n ? " with-scrollbar" : ""),
					style: {
						padding: n ? "100px 0" : 0,
						margin: a ? "30px 0" : 0
					}
				}, o.a.createElement("div", {
					className: "test-page__wrapper__main"
				}, o.a.createElement("div", {
					ref: this.testBoxRef,
					className: "blur-box-container blur-box-container__main blur-box-container--spaced ".concat(this.props.aptitudeTest.test.code, "-container")
				}, o.a.createElement("div", {
					className: "blur-box"
				}, o.a.createElement("div", {
					className: "main-test main-test--with-checkboxes align-center first-step"
				}, o.a.createElement("div", {
					className: "main-test__wrapper",
					style: {
						maxHeight: r
					}
				}, o.a.createElement("div", {
					className: "inner",
					style: {
						minHeight: r
					}
				}, o.a.createElement("div", {
					className: "grid-x main-test__top"
				}, o.a.createElement("div", {
					className: "small-7 cell"
				}, o.a.createElement("h2", {
					className: "main-test__header"
				}, this.props.aptitudeTest.test.name, " Test")), o.a.createElement("div", {
					className: "small-5 cell flex-end"
				}, this.props.aptitudeTest.showTimeWarning ? o.a.createElement("h5", {
					className: "warning-timed warning-timed--large"
				}, "This test cannot be paused") : null, o.a.createElement(l.default, null)), this.props.aptitudeTest.showTimeWarning ? o.a.createElement("h5", {
					className: "warning-timed warning-timed--small"
				}, "This test cannot be paused") : null), o.a.createElement("div", {
					className: "main-test__part"
				}, o.a.createElement(c.default, {
					currentPage: this.props.aptitudeTest.currentPage,
					activePage: this.props.aptitudeTest.activePage,
					questions: this.props.aptitudeTest.userQuestions,
					goToPage: this.goToPage
				})), this.props.question.html_content ? o.a.createElement("div", {
					dangerouslySetInnerHTML: {
						__html: this.props.question.html_content.content
					}
				}) : null, o.a.createElement("div", {
					className: "main-test__part test__timed-question test__timed-question--".concat(this.props.aptitudeTest.test.code)
				}, o.a.createElement("div", {
					dangerouslySetInnerHTML: {
						__html: this.props.question.content
					}
				})), o.a.createElement("div", {
					className: "main-test__part main-test__rated-questions main-test__question-block--".concat(this.props.aptitudeTest.test.code)
				}, o.a.createElement("div", {
					className: "grid-x answer-section"
				}, t.map((function(t) {
					return "image" === t.content_type ? o.a.createElement(p.default, {
						image: t.image.original,
						key: t.id,
						correct: !0,
						checked: e.props.question.user_answer === t.id,
						onClick: function() {
							return e.setUserAnswer(t.id)
						}
					}) : o.a.createElement(f.default, {
						content: t.content,
						key: t.id,
						correct: !0,
						checked: e.props.question.user_answer === t.id,
						onClick: function() {
							return e.setUserAnswer(t.id)
						}
					})
				})))), o.a.createElement("br", {
					clear: "all"
				}), o.a.createElement("div", {
					className: "grid-x main-test__part--navigation fixed-grid mar-top-auto"
				}, o.a.createElement(u.default, {
					onClick: this.goToPreviousPage,
					className: "nav-btn",
					color: "white"
				}, o.a.createElement("span", {
					className: "small-icons back-arrow-white-xs is-left"
				}), "Previous"), o.a.createElement(u.default, {
					onClick: this.goToNextPage,
					color: this.props.question.user_answer ? "green" : "white",
					className: (this.props.question.user_answer, "nav-btn")
				}, this.props.question.user_answer ? "Next" : "Skip", o.a.createElement("span", {
					className: "small-icons next-arrow-white-xs is-right"
				})))))), o.a.createElement("div", {
					className: "bg-copy " + this.props.aptitudeTest.test.code
				}))), o.a.createElement("div", {
					className: "test-btn-container flex-center"
				}, o.a.createElement("a", {
					className: "text-button",
					onClick: this.props.overview
				}, "Overview"), o.a.createElement("a", {
					className: "text-button",
					onClick: this.props.instructions
				}, "Instructions")))))
			}
		}]) && h(t.prototype, r), n && h(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), i
	}(n.Component);
	t.default = Object(i.b)((function(e, t) {
		return {
			aptitudeTest: e.aptitudeTest,
			question: t.question
		}
	}), (function(e) {
		return {
			actions: Object(a.b)(Object.assign({}, s), e)
		}
	}))(g)
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return i
	}));
	var n = r(0),
		o = r.n(n),
		a = r(544);

	function i(e) {
		return o.a.createElement(o.a.Fragment, null, e.questions.filter((function(t) {
			return t.number === e.currentPage
		})).map((function(t) {
			return o.a.createElement(a.default, {
				key: t.number,
				question: t,
				page: t.number,
				instructions: e.openInstructions
			})
		})))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(10),
		i = r(2),
		s = r(67),
		c = r(414),
		l = r(16),
		u = r(238),
		f = r(239);

	function p(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function d(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function h(e, t) {
		return (h = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function m(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = y(e);
			if (t) {
				var o = y(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return v(this, r)
		}
	}

	function v(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function y(e) {
		return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var b = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && h(e, t)
		}(i, e);
		var t, r, n, a = m(i);

		function i() {
			var e;
			p(this, i);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = a.call.apply(a, [this].concat(r))).state = {
				isMobile: !1,
				height: 0,
				boxHeight: 0,
				top: 0
			}, e.testBoxRef = o.a.createRef(), e.updateTestBoxSizeAndPosition = function() {
				setTimeout((function() {
					if (e.testBoxRef.current) {
						var t = e.testBoxRef.current.clientHeight;
						e.state.boxHeight !== t && e.setState({
							boxHeight: t,
							top: e.testBoxRef.current.offsetTop
						})
					}
				}), 1)
			}, e.detectDevice = function() {
				e.setState({
					height: window.innerHeight,
					top: e.testBoxRef.current.offsetTop
				});
				var t = window.innerWidth < 640;
				t !== e.state.isMobile && e.setState({
					isMobile: t
				})
			}, e.goToNextPage = function() {
				e.props.actions.userGoNextExampleTestPage()
			}, e.skipExamplesQuestions = function() {
				e.props.actions.userSkipExampleQuestions()
			}, e.goToPreviousPage = function() {
				e.props.actions.userGoPrevExampleTestPage()
			}, e.setUserAnswer = function(t) {
				e.props.question.user_answer || e.props.actions.userAnswerExampleTestQuestin(t)
			}, e
		}
		return t = i, (r = [{
			key: "componentDidMount",
			value: function() {
				this.detectDevice(), window.addEventListener("resize", this.detectDevice), window.addEventListener("resize", this.updateTestBoxSizeAndPosition)
			}
		}, {
			key: "componentDidUpdate",
			value: function(e, t, r) {
				this.updateTestBoxSizeAndPosition()
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				window.removeEventListener("resize", this.detectDevice), window.removeEventListener("resize", this.updateTestBoxSizeAndPosition)
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.props.question.answer_variants,
					r = this.state.isMobile ? this.state.height : "initial",
					n = !!this.props.question.user_answer,
					a = this.state.boxHeight + 100 > this.state.height && !1 === this.state.isMobile,
					i = this.state.boxHeight + 100 <= this.state.height && !1 === this.state.isMobile;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: "test-page__wrapper" + (a ? " with-scrollbar" : ""),
					style: {
						padding: a ? "100px 0" : 0,
						margin: i ? "30px 0" : 0
					}
				}, o.a.createElement("div", {
					className: "test-page__wrapper__main"
				}, o.a.createElement("div", {
					ref: this.testBoxRef,
					className: "blur-box-container blur-box-container__main blur-box-container--spaced " + this.props.aptitudeTest.test.code + "-container"
				}, o.a.createElement("div", {
					className: "blur-box"
				}, o.a.createElement("div", {
					className: "main-test main-test--with-checkboxes align-center"
				}, o.a.createElement("div", {
					className: "main-test__wrapper",
					style: {
						maxHeight: r
					}
				}, o.a.createElement("div", {
					className: "inner",
					style: {
						minHeight: r
					}
				}, o.a.createElement("div", {
					className: "grid-x main-test__top"
				}, o.a.createElement("div", {
					className: "small-12 medium-7 cell text-left"
				}, o.a.createElement("h2", {
					className: "main-test__header"
				}, this.props.aptitudeTest.test.name, " Test")), o.a.createElement("div", {
					className: "small-12 medium-5 cell flex-end"
				}, o.a.createElement("div", {
					className: " main-test__example"
				}, o.a.createElement("span", {
					className: "small-icons blue-tooltip"
				}), "This is an example question"))), this.props.question.html_content ? o.a.createElement("div", {
					dangerouslySetInnerHTML: {
						__html: this.props.question.html_content.content
					}
				}) : null, o.a.createElement("div", {
					className: "main-test__part test__timed-question test__timed-question--".concat(this.props.aptitudeTest.test.code)
				}, o.a.createElement("div", {
					dangerouslySetInnerHTML: {
						__html: this.props.question.content
					}
				})), o.a.createElement("div", {
					className: "main-test__part main-test__question-block--".concat(this.props.aptitudeTest.test.code)
				}, o.a.createElement("div", {
					className: "grid-x answer-section"
				}, t.map((function(t) {
					return "image" === t.content_type ? o.a.createElement(f.default, {
						image: t.image.original,
						key: t.id,
						correct: t.correct,
						exmaple: !0,
						checked: e.props.question.user_answer === t.id || n && t.correct,
						onClick: function() {
							return e.setUserAnswer(t.id)
						}
					}) : o.a.createElement(u.default, {
						content: t.content,
						key: t.id,
						correct: t.correct,
						correctExample: n && t.correct,
						checked: e.props.question.user_answer === t.id || n && t.correct,
						onClick: function() {
							return e.setUserAnswer(t.id)
						}
					})
				}))), this.props.question.user_answer ? o.a.createElement(c.default, {
					visible: "show-for-small-timed ",
					correct: t.find((function(t) {
						return t.id === e.props.question.user_answer
					})).correct,
					description: this.props.question.example_description,
					bgImage: this.props.aptitudeTest.test.code
				}) : null), o.a.createElement("br", {
					clear: "all"
				})), o.a.createElement("div", {
					className: "grid-x main-test__part--navigation fixed-grid mar-top-auto"
				}, o.a.createElement("div", null, o.a.createElement(l.default, {
					onClick: this.goToPreviousPage,
					color: "white",
					className: "nav-btn"
				}, o.a.createElement("span", {
					className: "small-icons back-arrow-white-xs is-left"
				}), "Previous")), o.a.createElement("div", {
					className: "flex"
				}, o.a.createElement(l.default, {
					onClick: this.skipExamplesQuestions,
					className: "auto-btn",
					color: "white"
				}, "Skip"), o.a.createElement(l.default, {
					onClick: this.goToNextPage,
					className: "nav-btn"
				}, "Next", o.a.createElement("span", {
					className: "small-icons next-arrow-white-xs is-right"
				})))))), o.a.createElement("div", {
					className: "bg-copy " + this.props.aptitudeTest.test.code
				}))), o.a.createElement("div", {
					className: "test-btn-container flex-center"
				}, o.a.createElement("a", {
					className: "text-button",
					onClick: this.props.instructions
				}, "Instructions")))), this.props.question.user_answer ? o.a.createElement(c.default, {
					top: a ? 100 : this.state.top,
					visible: "show-for-large-timed",
					correct: t.find((function(t) {
						return t.id === e.props.question.user_answer
					})).correct,
					description: this.props.question.example_description,
					bgImage: this.props.aptitudeTest.test.code
				}) : null)
			}
		}]) && d(t.prototype, r), n && d(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), i
	}(n.Component);
	t.default = Object(i.b)((function(e, t) {
		return {
			aptitudeTest: e.aptitudeTest,
			question: t.question
		}
	}), (function(e) {
		return {
			actions: Object(a.b)(Object.assign({}, s), e)
		}
	}))(b)
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(10),
		i = r(2),
		s = r(67),
		c = r(1),
		l = r(342),
		u = r(16),
		f = r(31),
		p = r(210);

	function d(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function h(e, t) {
		return (h = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function m(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = y(e);
			if (t) {
				var o = y(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return v(this, r)
		}
	}

	function v(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function y(e) {
		return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var b = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && h(e, t)
		}(i, e);
		var t, r, n, a = m(i);

		function i(e) {
			var t;
			return function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, i), (t = a.call(this, e)).backToTest = function(e) {
				e.preventDefault(), t.props.actions.userBackToTest()
			}, t.closeConfirmationModal = function() {
				t.confirmationModalRef.current.close()
			}, t.submitAndConfirm = function() {
				t.props.aptitudeTest.userQuestions.filter((function(e) {
					return !e.user_answer
				})).length > 0 ? t.confirmationModalRef.current.open() : t.finishTest(!1)
			}, t.gotToPage = function(e) {
				t.props.actions.userNavigateTestToPage(e)
			}, t.finishTest = function() {
				var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
				e && t.confirmationModalRef.current.close(), t.setState({
					isLoading: !0
				}, (function() {
					t.submitTest("finished")
				}))
			}, t.submitTest = function(e) {
				var r = [],
					n = {};
				t.props.aptitudeTest.userQuestions.filter((function(e) {
					return e.user_answer
				})).map((function(e) {
					r.push({
						question_id: e.id,
						answer_variant_id: e.user_answer
					})
				}));
				var o = JSON.parse(localStorage.getItem("".concat(t.props.aptitudeTest.test.code, "StartedAt"))),
					a = Date.now() - o;
				n.time = a, n["".concat(t.props.aptitudeTest.test.code, "_answers")] = r, n["".concat(t.props.aptitudeTest.test.code, "_status")] = e, t.setState({
					isLoading: !0
				}, (function() {
					t.props.actions.submitTest(t.props.aptitudeTest.test.id, n, e)
				}))
			}, t.state = {
				isLoading: !1
			}, t.confirmationModalRef = o.a.createRef(), t
		}
		return t = i, (r = [{
			key: "componentDidUpdate",
			value: function() {
				return "finished" === this.props.aptitudeTest.status ? document.location.href = "/tests/".concat(this.props.aptitudeTest.test.path, "/result") : "reset" === this.props.aptitudeTest.status ? document.location.href = "/dashboard" : void 0
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.props.aptitudeTest.userQuestions;
				return o.a.createElement("div", {
					className: "test-page__wrapper"
				}, o.a.createElement("div", {
					className: "test-page__wrapper__main"
				}, o.a.createElement("div", {
					className: "blur-box-container"
				}, this.state.isLoading ? o.a.createElement(c.Loader, null) : null, o.a.createElement("div", {
					className: "blur-box"
				}, o.a.createElement("div", {
					className: "main-test align-center"
				}, o.a.createElement("div", {
					className: "main-test__wrapper"
				}, o.a.createElement("div", null, o.a.createElement("h1", {
					className: "large-mobile main-test__title"
				}, "Overview"), o.a.createElement(l.default, null)), o.a.createElement("div", {
					className: "grid-x overview-gutter flex-center"
				}, o.a.createElement("div", {
					className: "small-3 cell"
				}, o.a.createElement("h1", {
					className: "overview__answered"
				}, t.filter((function(e) {
					return e.user_answer
				})).length)), o.a.createElement("div", {
					className: "small-3 cell"
				}, o.a.createElement("h1", {
					className: "overview__unanswered"
				}, t.filter((function(e) {
					return !e.user_answer
				})).length))), o.a.createElement("div", {
					className: "grid-x overview-gutter flex-center"
				}, o.a.createElement("div", {
					className: "small-3 cell"
				}, o.a.createElement("p", null, "answered")), o.a.createElement("div", {
					className: "small-3 cell"
				}, o.a.createElement("p", null, "unanswered"))), o.a.createElement("div", {
					className: "grid-x overview-gutter--last"
				}, t.map((function(t) {
					return o.a.createElement(u.default, {
						key: t.number,
						className: "button--answer",
						color: t.user_answer ? "" : "grey wrong",
						onClick: function() {
							return e.gotToPage(t.number)
						}
					}, o.a.createElement("p", {
						className: "button--answer__number"
					}, t.number))
				})))), o.a.createElement("div", {
					className: "grid-x fixed-grid"
				}, o.a.createElement("div", {
					className: "medium-6 small-6 cell text-left"
				}, o.a.createElement(u.default, {
					onClick: this.backToTest,
					className: "nav-btn",
					color: "white"
				}, o.a.createElement("span", {
					className: "small-icons back-arrow-white-xs small-mobile is-left"
				}), o.a.createElement("span", {
					className: "large-mobile"
				}, "Back", o.a.createElement("span", {
					className: "show-for-medium"
				}, " to test")))), o.a.createElement("div", {
					className: "medium-6 small-6 cell flex-end"
				}, o.a.createElement(u.default, {
					onClick: this.submitAndConfirm
				}, "Submit", o.a.createElement("span", {
					className: "show-for-medium"
				}, " answers", o.a.createElement("span", {
					className: "small-icons next-arrow-white-xs"
				})))))), o.a.createElement("div", {
					className: "bg-copy " + this.props.aptitudeTest.test.code
				})), o.a.createElement(f.default, {
					ref: this.confirmationModalRef
				}, o.a.createElement(p.default, {
					onCancel: this.closeConfirmationModal,
					onConfirm: this.finishTest
				}))), o.a.createElement("div", {
					className: "test-btn-container flex-center"
				}, o.a.createElement("a", {
					className: "text-button",
					onClick: this.props.openInstructions
				}, "Instructions"))))
			}
		}]) && d(t.prototype, r), n && d(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), i
	}(n.Component);
	t.default = Object(i.b)((function(e) {
		return {
			aptitudeTest: e.aptitudeTest
		}
	}), (function(e) {
		return {
			actions: Object(a.b)(Object.assign({}, s), e)
		}
	}))(b)
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(10),
		i = r(2),
		s = r(67),
		c = r(1),
		l = r(16);

	function u(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function f(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function p(e, t) {
		return (p = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function d(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = m(e);
			if (t) {
				var o = m(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return h(this, r)
		}
	}

	function h(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function m(e) {
		return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var v = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && p(e, t)
		}(i, e);
		var t, r, n, a = d(i);

		function i() {
			var e;
			u(this, i);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = a.call.apply(a, [this].concat(r))).state = {
				isLoading: !1
			}, e.finishTest = function() {
				e.setState({
					isLoading: !0
				}, (function() {
					e.submitTest("finished")
				}))
			}, e.submitTest = function(t) {
				var r = [],
					n = {};
				e.props.aptitudeTest.userQuestions.filter((function(e) {
					return e.user_answer
				})).map((function(e) {
					r.push({
						question_id: e.id,
						answer_variant_id: e.user_answer
					})
				}));
				var o = JSON.parse(localStorage.getItem("".concat(e.props.aptitudeTest.test.code, "StartedAt"))),
					a = Date.now() - o;
				n.time = a, n["".concat(e.props.aptitudeTest.test.code, "_answers")] = r, n["".concat(e.props.aptitudeTest.test.code, "_status")] = t, e.setState({
					isLoading: !0
				}, (function() {
					e.props.actions.submitTest(e.props.aptitudeTest.test.id, n, t)
				}))
			}, e
		}
		return t = i, (r = [{
			key: "componentDidUpdate",
			value: function() {
				return "finished" === this.props.aptitudeTest.status ? document.location.href = "/tests/".concat(this.props.aptitudeTest.test.path, "/result") : "reset" === this.props.aptitudeTest.status ? document.location.href = "/dashboard" : void 0
			}
		}, {
			key: "render",
			value: function() {
				var e = this.props.aptitudeTest.userQuestions;
				return o.a.createElement("div", {
					className: "test-page__wrapper"
				}, o.a.createElement("div", {
					className: "test-page__wrapper__main"
				}, o.a.createElement("div", {
					className: "blur-box-container"
				}, this.state.isLoading ? o.a.createElement(c.Loader, null) : null, o.a.createElement("div", {
					className: "blur-box"
				}, o.a.createElement("div", {
					className: "main-test align-center"
				}, o.a.createElement("h1", {
					className: "main-test__title"
				}, "Time's up!"), o.a.createElement("div", {
					className: "grid-x overview-gutter flex-center"
				}, o.a.createElement("div", {
					className: "small-3 cell"
				}, o.a.createElement("h1", {
					className: "overview__answered"
				}, e.filter((function(e) {
					return e.user_answer
				})).length)), o.a.createElement("div", {
					className: "small-3 cell"
				}, o.a.createElement("h1", {
					className: "overview__unanswered"
				}, e.filter((function(e) {
					return !e.user_answer
				})).length))), o.a.createElement("div", {
					className: "grid-x overview-gutter flex-center"
				}, o.a.createElement("div", {
					className: "small-3 cell"
				}, o.a.createElement("p", null, "answered")), o.a.createElement("div", {
					className: "small-3 cell"
				}, o.a.createElement("p", null, "unanswered"))), o.a.createElement("div", {
					className: "grid-x overview-gutter"
				}, e.map((function(e) {
					return o.a.createElement(l.default, {
						key: e.number,
						className: "button--answer",
						color: e.user_answer ? "" : "grey wrong",
						onClick: function(e) {
							e.preventDefault()
						}
					}, o.a.createElement("p", {
						style: {
							cursor: "default"
						},
						className: "button--answer__number"
					}, e.number))
				}))), o.a.createElement("div", {
					className: "small-12 cell text-center overview-gutter overview-gutter--time-out"
				}, o.a.createElement(l.default, {
					onClick: this.finishTest,
					className: "button--with-icon mar-auto"
				}, "Submit answers"))), o.a.createElement("div", {
					className: "bg-copy " + this.props.aptitudeTest.test.code
				}))), o.a.createElement("div", {
					className: "test-btn-container flex-center"
				}, o.a.createElement("a", {
					className: "text-button",
					onClick: this.props.openInstructions
				}, "Instructions"))))
			}
		}]) && f(t.prototype, r), n && f(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), i
	}(n.Component);
	t.default = Object(i.b)((function(e) {
		return {
			aptitudeTest: e.aptitudeTest
		}
	}), (function(e) {
		return {
			actions: Object(a.b)(Object.assign({}, s), e)
		}
	}))(v)
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(10),
		i = r(2),
		s = r(67),
		c = r(16),
		l = r(89),
		u = r(31),
		f = r(209);

	function p(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function d(e, t) {
		return (d = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function h(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = v(e);
			if (t) {
				var o = v(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return m(this, r)
		}
	}

	function m(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function v(e) {
		return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var y = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && d(e, t)
		}(i, e);
		var t, r, n, a = h(i);

		function i(e) {
			var t;
			return function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, i), (t = a.call(this, e)).askAboutRetake = function() {
				t.retakesModalRef.current.open()
			}, t.isRetake = function() {
				return t.props.aptitudeTest.user && "finished" === t.props.aptitudeTest.user["".concat(t.props.aptitudeTest.test.code, "_status")]
			}, t.startTest = function() {
				t.setState({
					isLoading: !0
				}, (function() {
					l.default.startTest(t.props.aptitudeTest.test.id).then((function() {
						t.props.actions.startTest()
					})).catch((function(e) {
						console.log(e)
					}))
				}))
			}, t.state = {
				correctAnswers: 0,
				incorrectAnswers: 0,
				unanswered: 0
			}, t.retakesModalRef = o.a.createRef(), t
		}
		return t = i, (r = [{
			key: "componentDidMount",
			value: function() {
				var e = this.props.aptitudeTest.exampleQuestions,
					t = 0,
					r = 0,
					n = 0;
				e.forEach((function(e) {
					var o = e.answer_variants.find((function(t) {
						return t.id === e.user_answer
					}));
					o && o.correct ? t++ : o ? r++ : n++
				})), this.setState({
					correctAnswers: t,
					incorrectAnswers: r,
					unanswered: n
				})
			}
		}, {
			key: "render",
			value: function() {
				var e = this;
				return o.a.createElement("div", {
					className: "test-page__wrapper"
				}, o.a.createElement("div", {
					className: "test-page__wrapper__main"
				}, o.a.createElement("div", {
					className: "blur-box-container"
				}, o.a.createElement("div", {
					className: "blur-box"
				}, o.a.createElement("div", {
					className: "main-test main-test--small align-center"
				}, o.a.createElement("div", null, o.a.createElement("h1", {
					className: "main-test__title"
				}, "Your Answers")), o.a.createElement("div", {
					className: "grid-x overview-gutter flex-center"
				}, o.a.createElement("div", {
					className: "small-2 cell flex-center"
				}, o.a.createElement("h1", {
					className: "overview__answered"
				}, this.state.correctAnswers)), o.a.createElement("div", {
					className: "small-2 cell flex-center"
				}, o.a.createElement("h1", {
					className: "overview__unanswered"
				}, this.state.incorrectAnswers)), o.a.createElement("div", {
					className: "small-2 cell flex-center"
				}, o.a.createElement("h1", {
					className: "overview__unanswered"
				}, this.state.unanswered))), o.a.createElement("div", {
					className: "grid-x overview-gutter flex-center"
				}, o.a.createElement("div", {
					className: "small-2 cell flex-center"
				}, o.a.createElement("p", null, "correct")), o.a.createElement("div", {
					className: "small-2 cell flex-center"
				}, o.a.createElement("p", null, "incorrect")), o.a.createElement("div", {
					className: "small-2 cell flex-center"
				}, o.a.createElement("p", null, "unanswered"))), o.a.createElement("div", null, o.a.createElement("p", null, "If you\u2019re ready to begin the test, click \u2018Start\u2019. If you\u2019d like to take the test at a more convenient time, click \u2018Take later\u2019.")), o.a.createElement("div", {
					className: "grid-x overview-start mar-top-40"
				}, o.a.createElement("div", {
					className: "medium-6 small-6 cell"
				}, o.a.createElement(c.default, {
					href: "/dashboard",
					color: "white",
					className: "mar-right-10"
				}, "Take later")), o.a.createElement("div", {
					className: "medium-6 small-6 cell"
				}, o.a.createElement(c.default, {
					onClick: this.isRetake() ? this.askAboutRetake : this.startTest
				}, "Start", o.a.createElement("span", {
					className: "small-icons next-arrow-white-xs"
				}))))), o.a.createElement("div", {
					className: "bg-copy " + this.props.aptitudeTest.test.code
				}))), o.a.createElement("div", {
					className: "test-btn-container flex-center"
				}, o.a.createElement("a", {
					className: "text-button",
					onClick: this.props.openInstructions
				}, "Instructions"))), this.props.aptitudeTest.user ? o.a.createElement(u.default, {
					ref: this.retakesModalRef
				}, o.a.createElement(f.default, {
					code: this.props.aptitudeTest.test.code,
					name: this.props.aptitudeTest.test.name,
					onConfirm: this.startTest,
					onCancel: function() {
						e.retakesModalRef.current.close()
					},
					retakes: this.props.aptitudeTest.user["".concat(this.props.aptitudeTest.test.code, "_retakes")]
				})) : null)
			}
		}]) && p(t.prototype, r), n && p(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), i
	}(n.Component);
	t.default = Object(i.b)((function(e) {
		return {
			aptitudeTest: e.aptitudeTest
		}
	}), (function(e) {
		return {
			actions: Object(a.b)(Object.assign({}, s), e)
		}
	}))(y)
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return y
	}));
	var n = r(0),
		o = r.n(n),
		a = r(1),
		i = r(549);

	function s(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function c(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? s(Object(r), !0).forEach((function(t) {
				l(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function l(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function u(e) {
		return function(e) {
			if (Array.isArray(e)) return f(e)
		}(e) || function(e) {
			if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
		}(e) || function(e, t) {
			if (!e) return;
			if ("string" === typeof e) return f(e, t);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			"Object" === r && e.constructor && (r = e.constructor.name);
			if ("Map" === r || "Set" === r) return Array.from(e);
			if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return f(e, t)
		}(e) || function() {
			throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function f(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
		return n
	}

	function p(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function d(e, t) {
		return (d = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function h(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = v(e);
			if (t) {
				var o = v(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return m(this, r)
		}
	}

	function m(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function v(e) {
		return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var y = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && d(e, t)
		}(l, e);
		var t, r, n, s = h(l);

		function l(e) {
			var t;
			return function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, l), (t = s.call(this, e)).setUpNextSwitch = function() {
				setTimeout(t.switch, 2500)
			}, t.switch = function() {
				var e = t.state.latestAnimatedBlocks,
					r = t.state.blocks.filter((function(t) {
						return !e.includes(t.key)
					}))[Math.floor(Math.random() * (6 - e.length))].key;
				e.length >= 2 && (e = e.slice(-1)), e.push(r);
				var n = u(t.state.blocks),
					o = n.findIndex((function(e) {
						return e.key === r
					})),
					a = t.state.collection.filter((function(e) {
						return e.id !== r
					}))[Math.floor(Math.random() * (t.state.collection.length - 1))];
				n[o] = c(c({}, a), {}, {
					key: r
				}), t.setState({
					blocks: n,
					latestAnimatedBlocks: e
				}, t.setUpNextSwitch)
			}, t.state = {
				collection: [],
				blocks: [],
				latestAnimatedBlocks: [],
				isLoaded: !1
			}, t
		}
		return t = l, (r = [{
			key: "componentDidMount",
			value: function() {
				var e = "/api/randomized_blocks?code=".concat(this.props.testCode),
					t = this;
				return fetch(a.actions.getData(e)).then(a.actions.status).then(a.actions.json).then((function(e) {
					var r = e.sort((function() {
						return .5 - Math.random()
					})).slice(0, 6).map((function(e, t) {
						return c(c({}, e), {}, {
							key: "item".concat(t)
						})
					}));
					t.setState({
						collection: e,
						blocks: r,
						isLoaded: !0
					}), t.setUpNextSwitch()
				})).catch((function(e) {
					console.log(e)
				}))
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				clearInterval(this.state.intervalId)
			}
		}, {
			key: "render",
			value: function() {
				return o.a.createElement("div", {
					className: "grid-x"
				}, this.state.blocks.map((function(e) {
					return o.a.createElement(i.default, {
						key: "item".concat(e.key),
						block: e
					})
				})))
			}
		}]) && p(t.prototype, r), n && p(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), l
	}(o.a.Component)
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return f
	}));
	var n = r(0),
		o = r.n(n),
		a = r(160);

	function i(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function s(e, t) {
		return (s = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function c(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = u(e);
			if (t) {
				var o = u(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return l(this, r)
		}
	}

	function l(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function u(e) {
		return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var f = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && s(e, t)
		}(u, e);
		var t, r, n, l = c(u);

		function u(e) {
			var t;
			return function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, u), (t = l.call(this, e)).change = function(e) {
				t.setState({
					block: e
				})
			}, t.onFadeOutFinished = function() {
				t.state.nextBlock && t.setState({
					mounted: !0,
					block: t.state.nextBlock
				})
			}, t.state = {
				block: t.props.block,
				mounted: !0
			}, t
		}
		return t = u, n = [{
			key: "getDerivedStateFromProps",
			value: function(e, t) {
				return t.block !== e.block && t.mounted ? {
					mounted: !1,
					nextBlock: e.block
				} : null
			}
		}], (r = [{
			key: "render",
			value: function() {
				var e = {},
					t = this.state.block;
				return t.image_path && (e.style = {
					backgroundImage: 'linear-gradient(rgba(10, 30, 46, 0.5), rgba(10, 30, 46, 0.5)), url("'.concat(t.image_path, '")')
				}), o.a.createElement(a.a, {
					in: this.state.mounted,
					classNames: "fading-block",
					timeout: 3e3,
					onExited: this.onFadeOutFinished
				}, o.a.createElement("div", Object.assign({
					className: "card industries__card large-3 medium-6 small-12 cell"
				}, e), o.a.createElement("h3", {
					className: "industries__name"
				}, t.name)))
			}
		}]) && i(t.prototype, r), n && i(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), u
	}(o.a.Component)
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(241),
		i = r(242),
		s = r(551),
		c = r(244),
		l = r(553),
		u = r(245);

	function f(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function p(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function d(e, t) {
		return (d = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function h(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = v(e);
			if (t) {
				var o = v(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return m(this, r)
		}
	}

	function m(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function v(e) {
		return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var y = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && d(e, t)
		}(m, e);
		var t, r, n, c = h(m);

		function m() {
			var e;
			f(this, m);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = c.call.apply(c, [this].concat(r))).scriptsInited = !1, e.handleResize = function() {
				e.calculateStickySettings()
			}, e.handleScroll = function(t) {
				window.pageYOffset >= e.state.stopTop ? e.state.submenuVisible || e.setState({
					submenuVisible: !0
				}) : e.state.submenuVisible && e.setState({
					submenuVisible: !1
				})
			}, e.calculateStickySettings = function() {
				var t = document.querySelector(".tabs-content-container").offsetTop + document.querySelector(".tabs-slider").offsetTop - 65 - 42;
				e.setState({
					stopTop: t
				})
			}, e.careersSearchOptions = function(t) {
				var r = {
					industries: t
				};
				return e.props.user && e.props.user.career_matches_ready_at ? r.per_page = 4 : r.random = 4, r
			}, e.collectionWithScores = function(t) {
				if (console.log(t), console.log(e.props.results), e.props.results) e.mapScoreToCollection(t, e.props.results);
				else if (localStorage.getItem("interests_result")) {
					var r = JSON.parse(localStorage.getItem("interests_result"));
					e.props.user && e.props.user.full_access || (r = r.sort((function(e, t) {
						return t.score - e.score
					})).slice(0, 3)), e.mapScoreToCollection(t, r), !e.props.user || e.props.user.full_access
				} else console.log("industries"), document.location.href = "/"
			}, e
		}
		return t = m, (r = [{
			key: "componentDidMount",
			value: function() {
				this.collectionWithScores(this.props.industries)
			}
		}, {
			key: "componentDidUpdate",
			value: function(e, t, r) {
				!this.scriptsInited && this.state.collection.length > 0 && (this.scriptsInited = !0, this.calculateStickySettings(), window.addEventListener("scroll", this.handleScroll), window.addEventListener("resize", this.handleResize))
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("resize", this.handleResize)
			}
		}, {
			key: "render",
			value: function() {
				var e = this.props.user && (this.props.user.full_access || this.props.user["".concat(this.props.test.code, "_access")]);
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: "grid-x tabs-slider results-tabs-slider"
				}, "interests" === this.props.test.code ? " " : o.a.createElement("div", {
					className: "small-12 cell"
				}, o.a.createElement("h2", {
					className: "title"
				}, "Your areas of interest")), o.a.createElement("div", {
					className: "small-12 cell results__industries"
				}, this.state.collection.length > 0 ? o.a.createElement(a.default, {
					options: this.state.collection,
					current: this.state.current,
					isBlur: !e,
					isUnpaid: !e,
					isCI: "interests" === this.props.test.code,
					onClick: this.setCurrent
				}, o.a.createElement(i.default, null)) : null, this.state.current ? o.a.createElement(s.default, {
					option: this.state.current,
					user: this.props.user,
					isCI: "interests" === this.props.test.code
				}) : o.a.createElement(u.default, {
					user: this.props.user,
					test: this.props.test,
					collection: this.state.collection,
					hiddenScores: this.state.hiddenScores,
					totalOptionsCount: this.state.totalOptionsCount
				}))), 0 !== this.state.collection.length && this.state.submenuVisible ? o.a.createElement(l.default, {
					collection: this.state.collection.slice(0, 3),
					current: this.state.current,
					setCurrent: this.setCurrent,
					userWithAccess: e
				}) : null)
			}
		}]) && p(t.prototype, r), n && p(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), m
	}(c.default);
	t.default = y
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return m
	}));
	var n = r(0),
		o = r.n(n),
		a = r(211),
		i = (r(1), r(240)),
		s = r(142),
		c = r(243),
		l = r(174),
		u = r(175),
		f = {
			very_strong: "very strong preference",
			strong: "strong preference",
			moderate: "moderate preference",
			weak: "weak preference",
			very_weak: "very weak preference"
		},
		p = {
			very_strong: "extremely passionate",
			strong: "very passionate",
			moderate: "somewhat passionate",
			weak: "not very passionate",
			very_weak: "not passionate at all"
		},
		d = {
			very_strong: "great enjoyment",
			strong: "much enjoyment",
			moderate: "some enjoyment",
			weak: "little enjoyment",
			very_weak: "no enjoyment"
		},
		h = {
			very_strong: "very high job satisfaction",
			strong: "high job satisfaction",
			moderate: "moderate job satisfaction",
			weak: "low job satisfaction",
			very_weak: "very low job satisfaction"
		};

	function m(e) {
		if (!e.option) return null;
		e.user && "finished" === e.user.interests_status && "finished" === e.user.personality_status && "finished" === e.user.motivators_status && "finished" === e.user.abstract_status && "finished" === e.user.numerical_status && e.user.verbal_status;
		var t = e.user && e.user.full_access,
			r = e.user && (e.user.full_access || e.user.interests_access),
			m = "Popular careers in this interest area";
		e.option.careers && (t ? (a.default, "careers".concat(e.option.id), e.user, e.option.careers) : (i.default, e.option.careers));
		var v = Object(u.getRankingScore)(e.option.score),
			y = 0,
			b = "";
		return r && e.option.statsLoaded && (b = (y = e.option.score - e.option.stats.median_score) > 0 ? "".concat(y, "% above") : y < 0 ? "".concat(-1 * y, "% below") : "equal to"), o.a.createElement("div", null, o.a.createElement("div", {
			className: "tabs-content-container"
		}, o.a.createElement("div", {
			className: "grid-container no-padding-top"
		}, o.a.createElement("div", {
			className: "tabs-content"
		}, o.a.createElement("div", {
			className: "tabs-panel is-active"
		}, o.a.createElement("div", {
			className: "industry-content"
		}, o.a.createElement("div", {
			className: "grid-x"
		}, o.a.createElement("div", {
			className: "large-6 medium-12 small-12 cell"
		}, o.a.createElement("h1", null, "INTEREST AREA"), o.a.createElement("h2", {
			className: "results__heading"
		}, e.option.name)), o.a.createElement("div", {
			className: "large-6 medium-12 small-12 cell"
		}, o.a.createElement("p", {
			className: "industry-score"
		}, "YOUR SCORE"), o.a.createElement("p", {
			className: "industry-score-percentage"
		}, e.option.score, "%"))), o.a.createElement("div", {
			className: "grid-x results__content"
		}, o.a.createElement("div", {
			className: "small-12 cell"
		}, o.a.createElement("h3", {
			className: "results__subheading"
		}, "About this interest"), o.a.createElement("div", {
			dangerouslySetInnerHTML: {
				__html: e.option.result_description
			}
		}), o.a.createElement("div", {
			className: "small-mar-tb-30"
		}, o.a.createElement("p", {
			className: "statistics"
		}, "Median salary: ", o.a.createElement("span", {
			className: "statistic-num "
		}, e.option.median_salary ? e.option.median_salary : "N/A")), e.option.salary_source ? o.a.createElement("p", {
			className: "statistic-source"
		}, e.option.salary_source) : null, e.option.salary_desc ? o.a.createElement("p", null, e.option.salary_desc) : null, o.a.createElement("p", {
			className: "results__industry-tip"
		}, o.a.createElement("span", {
			className: "small-icons blue-off-tooltip"
		}), "Annual salary estimates are based on percentile wage data collected through the Occupational Employment Statistics (OES) survey of US workers."), o.a.createElement("p", {
			className: "statistics"
		}, "Job outlook: ", e.option.outlook_percent ? o.a.createElement("span", {
			className: "statistic-num  ".concat(parseInt(e.option.outlook_percent) < 0 ? " negative" : "", "\n                                                                ").concat("N/A" !== e.option.outlook_percent ? " with-sup" : " ")
		}, e.option.outlook_percent, "N/A" !== e.option.outlook_percent ? o.a.createElement("span", null, " growth") : null) : o.a.createElement("span", {
			className: "statistic-num"
		}, " N/A")), e.option.outlook_source ? o.a.createElement("p", {
			className: "statistic-source"
		}, e.option.outlook_source) : null, e.option.outlook_desc ? o.a.createElement("p", null, e.option.outlook_desc) : null, o.a.createElement("p", {
			className: "results__industry-tip"
		}, o.a.createElement("span", {
			className: "small-icons blue-off-tooltip"
		}), "The projected growth rate of employment in the US from 2016 to 2026, based on data collected through the BLS Employment Projections (EP) programme. The national average growth rate for all professions is 7%.")), o.a.createElement("h3", {
			className: "results__subheading"
		}, "Your score explained"), o.a.createElement("p", {
			className: "score-explanation"
		}, e.user.first_name, ", you scored ", o.a.createElement("b", null, e.option.score), "% in the ", o.a.createElement("b", null, e.option.name), " interest area, which indicates that you have a ", r ? o.a.createElement(n.Fragment, null, o.a.createElement("b", null, f[v]), " for ", o.a.createElement("b", null, e.option.preference)) : o.a.createElement(n.Fragment, null, "...", o.a.createElement("span", {
			className: "hidden-score-explanation"
		}, "..\u2026\u2026..\u2026\u2026..\u2026\u2026. .\u2026\u2026..\u2026\u2026. .\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026.. \u2026\u2026..\u2026\u2026..\u2026\u2026.. \u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026 ..\u2026\u2026..\u2026\u2026..\u2026\u2026..")), "."), o.a.createElement("p", {
			className: "score-explanation"
		}, "Your score indicates that you are ", r ? o.a.createElement(n.Fragment, null, o.a.createElement("b", null, p[v]), " about ", e.option.passion) : o.a.createElement(n.Fragment, null, "...", o.a.createElement("span", {
			className: "hidden-score-explanation"
		}, "\u2026..\u2026\u2026.. \u2026\u2026..\u2026\u2026.. \u2026\u2026..\u2026\u2026..\u2026\u2026.. \u2026\u2026..\u2026\u2026.. \u2026\u2026..\u2026\u2026..\u2026\u2026 ..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..")), "."), o.a.createElement("p", {
			className: "score-explanation"
		}, "This means that you will derive ", r ? o.a.createElement(n.Fragment, null, o.a.createElement("b", null, d[v]), " from ", e.option.enjoyment) : o.a.createElement(n.Fragment, null, "...", o.a.createElement("span", {
			className: "hidden-score-explanation"
		}, "\u2026. ..\u2026\u2026.. \u2026\u2026..\u2026\u2026.. \u2026\u2026..\u2026\u2026..\u2026\u2026.. \u2026\u2026..\u2026\u2026.. \u2026..\u2026\u2026..\u2026\u2026  .\u2026\u2026..\u2026\u2026 ..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026 ..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026.. \u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026 ..\u2026\u2026.. \u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..")), "."), o.a.createElement("p", {
			className: "score-explanation"
		}, e.user.first_name, ", you should expect to gain ", r ? o.a.createElement(n.Fragment, null, o.a.createElement("b", null, h[v]), " if you choose to work in this area.") : o.a.createElement(n.Fragment, null, "...", o.a.createElement("span", {
			className: "hidden-score-explanation"
		}, "\u2026.. \u2026\u2026..\u2026\u2026.. \u2026\u2026..\u2026\u2026..\u2026\u2026.. \u2026\u2026..\u2026\u2026.. \u2026..\u2026\u2026..\u2026\u2026  .\u2026\u2026..\u2026\u2026 ..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026 ..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026.. \u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026 ..\u2026\u2026.. \u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026."))), r ? o.a.createElement("p", {
			className: "score-explanation"
		}, "Although your overall Career Interests Test results can be a great indication of the type of work activities you will find enjoyable, they should not be the only factor considered when choosing a career. By completing all six CareerHunter tests, you will gain a more in-depth understanding of your interests, as well as your personality, motivations and aptitudes \u2014 and, therefore, make a better-informed career choice.") : null, r ? null : o.a.createElement("a", {
			href: "/get-access",
			className: "results__access-link"
		}, "Get paid access to view full details ", o.a.createElement("span", {
			className: "small-icons next-arrow-green-s"
		})), o.a.createElement("h3", {
			className: "results__subheading"
		}, "How you compare"), o.a.createElement("p", null, "You scored ", o.a.createElement("b", null, "higher than ", r && e.option.statsLoaded ? e.option.stats.users_higher_percent : o.a.createElement("span", {
			className: "hidden-score-explanation"
		}, "..."), "% of all users"), " who took the Career Interests Test for the ", e.option.name, " area. This is how your score in this area of interest compares with that of all other CareerHunter test-takers:"), !r || e.option.statsLoaded ? o.a.createElement(c.default, {
			score: e.option.score,
			hasAccess: r,
			stats: e.option.statsLoaded ? e.option.stats : null
		}) : null, o.a.createElement("p", null, "The median score for this interest area is ", r && e.option.statsLoaded ? e.option.stats.median_score : o.a.createElement("span", {
			className: "hidden-score-explanation"
		}, "..."), "%. Being ", o.a.createElement("b", null, p[v]), " about the ", e.option.name, " area puts your raw score ", o.a.createElement("b", null, r && e.option.statsLoaded ? b : o.a.createElement(n.Fragment, null, o.a.createElement("span", {
			className: "hidden-score-explanation"
		}, "..."), "% ", o.a.createElement("span", {
			className: "hidden-score-explanation"
		}, "\u2026\u2026\u2026\u2026\u2026\u2026")), " the median.")), r ? null : o.a.createElement("a", {
			href: "/get-access",
			className: "results__access-link"
		}, "Get paid access to view full details ", o.a.createElement("span", {
			className: "small-icons next-arrow-green-s"
		})), o.a.createElement("div", null, o.a.createElement("h3", {
			className: "results__subheading"
		}, "Top skills required"), o.a.createElement("p", null, "These are the most notable and highly sought-after skills for a career in ", e.option.name, ":"), o.a.createElement("div", {
			className: "grid-x top-skills-container"
		}, (e.option.skills || []).map((function(t, n) {
			return o.a.createElement("div", {
				key: "".concat(e.option.id, "Skill").concat(n),
				className: "top-skill-wrapper"
			}, o.a.createElement("div", {
				className: "top-skill"
			}, n > 2 && !r ? "\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026" : t.name))
		})))), r ? null : o.a.createElement("a", {
			href: "/get-access",
			className: "results__access-link"
		}, "Get paid access to view full details ", o.a.createElement("span", {
			className: "small-icons next-arrow-green-s"
		})), e.option.careersLoaded ? o.a.createElement(l.default, {
			careers: e.option.careers,
			testCode: "interests",
			optionTitle: e.option.name,
			user: e.user
		}) : null)), o.a.createElement(s.default, {
			hasTestAccess: r,
			testCode: "interests"
		})))))))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return i
	}));
	var n = r(0),
		o = r.n(n),
		a = r(16);

	function i(e) {
		return o.a.createElement("div", {
			className: "grid-x align-center"
		}, o.a.createElement("div", {
			className: "cell text-center"
		}, o.a.createElement("div", {
			className: "large-icon paid-access-required mar-auto small-mar-bot-20"
		}), o.a.createElement("h3", {
			className: "mar-bot-10"
		}, "Paid access required"), o.a.createElement("p", {
			className: "popup__text"
		}, "To access your Career Interests Test results, downloadable report and full analysis, paid access is required."), o.a.createElement(a.default, {
			className: "button--bigger",
			href: "/get-access"
		}, "Get Access", o.a.createElement("span", {
			className: "small-icons next-arrow-white-l"
		}))))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return h
	}));
	var n = r(0),
		o = r.n(n),
		a = r(554),
		i = r(14),
		s = r.n(i);

	function c(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function l(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function u(e, t) {
		return (u = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function f(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = d(e);
			if (t) {
				var o = d(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return p(this, r)
		}
	}

	function p(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function d(e) {
		return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var h = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && u(e, t)
		}(p, e);
		var t, r, n, i = f(p);

		function p() {
			var e;
			c(this, p);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = i.call.apply(i, [this].concat(r))).submenuRef = o.a.createRef(), e
		}
		return t = p, (r = [{
			key: "componentDidMount",
			value: function() {
				Object(a.default)({
					color: "#59CE61",
					container: s.a.findDOMNode(this.submenuRef.current),
					defaultItemSelector: ".current [data-indicator-link]"
				})
			}
		}, {
			key: "render",
			value: function() {
				var e = this;
				return o.a.createElement("div", {
					className: "secondary-menu-results is-stuck"
				}, o.a.createElement("div", {
					className: "grid-container"
				}, o.a.createElement("div", {
					className: "grid-x ",
					ref: this.submenuRef,
					"data-indicator-container": !0
				}, o.a.createElement("ul", {
					className: "industry-list"
				}, o.a.createElement("li", {
					className: this.props.current ? "" : "current",
					key: "itemOverview"
				}, o.a.createElement("a", {
					"data-indicator-link": !0,
					onClick: function(t) {
						t.preventDefault(), e.props.setCurrent(null, !0)
					}
				}, "Overview")), this.props.collection.map((function(t) {
					return o.a.createElement("li", {
						className: e.props.current && t.id === e.props.current.id ? "current" : "",
						key: "item".concat(t.id)
					}, o.a.createElement("a", {
						"data-indicator-link": !0,
						onClick: function(r) {
							r.preventDefault(), e.props.setCurrent(t.id, !0)
						}
					}, t.name))
				})), this.props.userWithAccess ? null : o.a.createElement("li", null, o.a.createElement("a", {
					href: "/upgrade",
					className: "full-access"
				}, "Get full access to see all"))), o.a.createElement("div", {
					"data-indicator": !0
				}))))
			}
		}]) && l(t.prototype, r), n && l(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), p
	}(n.Component)
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return i
	}));
	r(337);

	function n(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function o(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? n(Object(r), !0).forEach((function(t) {
				a(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function a(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function i() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
			t = {
				threshold: 1,
				maxDisplays: 1,
				eventThrottle: 200,
				onExitIntent: function() {}
			};
		return function() {
			var r = o(o({}, t), e),
				n = r.container.querySelector("[data-indicator]");
			if (!n) return null;
			var a, i, s = r.container.querySelectorAll("[data-indicator-link]"),
				c = r.container.querySelector(r.defaultItemSelector);

			function l(e) {
				var t = e.getBoundingClientRect().width,
					o = e.getBoundingClientRect().left - r.container.getBoundingClientRect().left + window.pageXOffset,
					a = r.color;
				null !== n && (n.style.width = t + "px", n.style.borderColor = a, n.style.transform = "translateX(".concat(o, "px)"))
			}

			function u() {
				l(this)
			}
			c && (l(c), window.addEventListener("resize", (a = function() {
				console.log("test"), c && l(c)
			}, function(e) {
				i && clearTimeout(i), i = setTimeout(a, 300, e)
			})));
			for (var f = 0; f < s.length; f++) s[f].addEventListener("mouseenter", u);
			return r.container.addEventListener("mouseleave", (function() {
				null == c ? n.style.borderColor = "transparent" : l(c)
			})), this
		}()
	}
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(241),
		i = r(242),
		s = r(112),
		c = r(556),
		l = r(244),
		u = r(245);

	function f(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function p(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function d(e, t) {
		return (d = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function h(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = v(e);
			if (t) {
				var o = v(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return m(this, r)
		}
	}

	function m(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function v(e) {
		return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var y = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && d(e, t)
		}(m, e);
		var t, r, n, l = h(m);

		function m() {
			var e;
			f(this, m);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = l.call.apply(l, [this].concat(r))).careersSearchOptions = function(e) {
				return {
					personalities: e,
					random: 4
				}
			}, e
		}
		return t = m, (r = [{
			key: "componentDidMount",
			value: function() {
				var e = this;
				s.default.getCollection().then((function(t) {
					e.collectionWithScores(t)
				})).catch((function(e) {
					console.log(e)
				}))
			}
		}, {
			key: "render",
			value: function() {
				var e = this.props.user && (this.props.user.full_access || this.props.user["".concat(this.props.test.code, "_access")]);
				return o.a.createElement("div", {
					className: "grid-x tabs-slider results-tabs-slider"
				}, o.a.createElement("div", {
					className: "small-12 cell  results__industries"
				}, o.a.createElement(a.default, {
					options: this.state.collection,
					current: this.state.current,
					isBlur: !e,
					onClick: this.setCurrent
				}, o.a.createElement(i.default, null)), this.state.current ? o.a.createElement(c.default, {
					option: this.state.current,
					user: this.props.user
				}) : o.a.createElement(u.default, {
					user: this.props.user,
					test: this.props.test,
					collection: this.state.collection,
					hiddenScores: this.state.hiddenScores,
					totalOptionsCount: this.state.totalOptionsCount
				})))
			}
		}]) && p(t.prototype, r), n && p(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), m
	}(l.default);
	t.default = y
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return m
	}));
	var n = r(0),
		o = r.n(n),
		a = r(211),
		i = (r(1), r(240)),
		s = r(142),
		c = r(243),
		l = r(174),
		u = r(175),
		f = {
			very_strong: "completely comfortable",
			strong: "very comfortable",
			moderate: "somewhat comfortable",
			weak: "not very comfortable",
			very_weak: "not comfortable at all"
		},
		p = {
			very_strong: "very strong tendency",
			strong: "strong tendency",
			moderate: "medium tendency",
			weak: "weak tendency",
			very_weak: "very weak tendency"
		},
		d = {
			very_strong: "highly suited",
			strong: "well-suited",
			moderate: "somewhat suited",
			weak: "slightly suited",
			very_weak: "poorly suited"
		},
		h = {
			very_strong: "extremely productive",
			strong: "moderately productive",
			moderate: "somewhat productive",
			weak: "slightly productive",
			very_weak: "not productive at all"
		};

	function m(e) {
		if (!e.option) return null;
		e.user && "finished" === e.user.interests_status && "finished" === e.user.personality_status && "finished" === e.user.motivators_status && "finished" === e.user.abstract_status && "finished" === e.user.numerical_status && e.user.verbal_status;
		var t = e.user && e.user.full_access,
			r = e.user && (e.user.full_access || e.user.personality_access),
			m = "Popular careers in this interest area";
		e.option.careers && (t ? (a.default, "careers".concat(e.option.id), e.user, e.option.careers) : (i.default, e.option.careers));
		var v = Object(u.getRankingScore)(e.option.score),
			y = 0,
			b = "";
		return r && e.option.statsLoaded && (b = (y = e.option.score - e.option.stats.median_score) > 0 ? "".concat(y, "% above") : y < 0 ? "".concat(-1 * y, "% below") : "equal to"), o.a.createElement("div", null, o.a.createElement("div", {
			className: "tabs-content-container"
		}, o.a.createElement("div", {
			className: "grid-container no-padding-top"
		}, o.a.createElement("div", {
			className: "tabs-content"
		}, o.a.createElement("div", {
			className: "tabs-panel is-active"
		}, o.a.createElement("div", {
			className: "industry-content"
		}, o.a.createElement("div", {
			className: "grid-x"
		}, o.a.createElement("div", {
			className: "large-6 medium-12 small-12 cell"
		}, o.a.createElement("h1", null, "PERSONALITY TRAIT"), o.a.createElement("h2", {
			className: "results__heading"
		}, e.option.name)), o.a.createElement("div", {
			className: "large-6 medium-12 small-12 cell"
		}, o.a.createElement("p", {
			className: "industry-score"
		}, "YOUR SCORE"), o.a.createElement("p", {
			className: "industry-score-percentage"
		}, e.option.score, "%"))), o.a.createElement("div", {
			className: "grid-x results__content"
		}, o.a.createElement("div", {
			className: "small-12 cell"
		}, o.a.createElement("h3", {
			className: "results__subheading"
		}, "About this trait"), o.a.createElement("div", {
			dangerouslySetInnerHTML: {
				__html: e.option.result_description
			}
		}), o.a.createElement("h3", {
			className: "results__subheading"
		}, "Your score explained"), o.a.createElement("p", {
			className: "score-explanation"
		}, e.user.first_name, ", you scored ", o.a.createElement("b", null, e.option.score), "% on the ", o.a.createElement("b", null, e.option.name), " personality trait, which means you are likely to be ", r ? o.a.createElement(n.Fragment, null, o.a.createElement("b", null, f[v]), " in a work environment that allows you to ", o.a.createElement("b", null, e.option.comfort)) : o.a.createElement(n.Fragment, null, "...", o.a.createElement("span", {
			className: "hidden-score-explanation"
		}, "..\u2026\u2026..\u2026\u2026..\u2026\u2026. .\u2026\u2026..\u2026\u2026. .\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026.. \u2026\u2026..\u2026\u2026..\u2026\u2026.. \u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026 ..\u2026\u2026..\u2026\u2026..\u2026\u2026..")), "."), o.a.createElement("p", {
			className: "score-explanation"
		}, "Your score indicates that you have a ", r ? o.a.createElement(n.Fragment, null, o.a.createElement("b", null, p[v]), " to ", o.a.createElement("b", null, e.option.tendency)) : o.a.createElement(n.Fragment, null, "...", o.a.createElement("span", {
			className: "hidden-score-explanation"
		}, "\u2026\u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026. \u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.. \u2026\u2026 \u2026\u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026. \u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.. \u2026\u2026 \u2026\u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026. \u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.. \u2026...")), "."), o.a.createElement("p", {
			className: "score-explanation"
		}, "This means that you are ", r ? o.a.createElement(n.Fragment, null, o.a.createElement("b", null, d[v]), " to perform work that requires you to ", o.a.createElement("b", null, e.option.suitability)) : o.a.createElement(n.Fragment, null, "...", o.a.createElement("span", {
			className: "hidden-score-explanation"
		}, "\u2026\u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026. \u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.. \u2026...\u2026\u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026. \u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.. \u2026...\u2026\u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026. \u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.. \u2026...\u2026\u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026. \u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.. \u2026...")), "."), o.a.createElement("p", {
			className: "score-explanation"
		}, e.user.first_name, ", you should expect to be ", r ? o.a.createElement(n.Fragment, null, o.a.createElement("b", null, h[v]), " on this personality trait") : o.a.createElement(n.Fragment, null, "...", o.a.createElement("span", {
			className: "hidden-score-explanation"
		}, "\u2026\u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026. \u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.. \u2026...\u2026\u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026. \u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.. \u2026...\u2026\u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026. \u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.. \u2026...\u2026\u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026. \u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.. \u2026...\u2026\u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.")), "."), r ? o.a.createElement("p", {
			className: "score-explanation"
		}, "Although your overall Work Personality Test results can be a great indication of how you prefer to work, they should not be the only factor considered when choosing a career. By completing all six CareerHunter tests, you will gain a more in-depth understanding of your personality, as well as your interests, motivations and aptitudes \u2014 and, therefore, make a better-informed career choice.") : null, r ? null : o.a.createElement("a", {
			href: "/get-access",
			className: "results__access-link"
		}, "Get paid access to view full details ", o.a.createElement("span", {
			className: "small-icons next-arrow-green-s"
		})), o.a.createElement("h3", {
			className: "results__subheading"
		}, "How you compare"), o.a.createElement("p", null, "You scored higher than ", o.a.createElement("b", null, r && e.option.statsLoaded ? e.option.stats.users_higher_percent : o.a.createElement("span", {
			className: "hidden-score-explanation"
		}, "..."), "% of all users"), " who took the Work Personality Test for the ", e.option.name, " trait. This is how your score in this trait compares with that of all other CareerHunter test-takers:"), !r || e.option.statsLoaded ? o.a.createElement(c.default, {
			score: e.option.score,
			hasAccess: r,
			stats: e.option.statsLoaded ? e.option.stats : null
		}) : null, o.a.createElement("p", null, "The median score for this personality trait is ", r && e.option.statsLoaded ? e.option.stats.median_score : o.a.createElement("span", {
			className: "hidden-score-explanation"
		}, "..."), "%. Your score for this personality trait puts your raw score ", o.a.createElement("b", null, r && e.option.statsLoaded ? b : o.a.createElement(n.Fragment, null, o.a.createElement("span", {
			className: "hidden-score-explanation"
		}, "..."), "% ", o.a.createElement("span", {
			className: "hidden-score-explanation"
		}, "\u2026\u2026\u2026\u2026\u2026\u2026")), " the median.")), r ? null : o.a.createElement("a", {
			href: "/get-access",
			className: "results__access-link"
		}, "Get paid access to view full details ", o.a.createElement("span", {
			className: "small-icons next-arrow-green-s"
		})), e.option.careersLoaded ? o.a.createElement(l.default, {
			careers: e.option.careers,
			testCode: "personality",
			optionTitle: e.option.name,
			user: e.user
		}) : null)), o.a.createElement(s.default, {
			hasTestAccess: r,
			testCode: "personality"
		})))))))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n),
		a = r(241),
		i = r(242),
		s = r(111),
		c = r(558),
		l = r(244),
		u = r(245);

	function f(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function p(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function d(e, t) {
		return (d = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function h(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = v(e);
			if (t) {
				var o = v(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return m(this, r)
		}
	}

	function m(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function v(e) {
		return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var y = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && d(e, t)
		}(m, e);
		var t, r, n, l = h(m);

		function m() {
			var e;
			f(this, m);
			for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
			return (e = l.call.apply(l, [this].concat(r))).careersSearchOptions = function(e) {
				return {
					motivators: e,
					random: 4
				}
			}, e
		}
		return t = m, (r = [{
			key: "componentDidMount",
			value: function() {
				var e = this;
				s.default.getCollection().then((function(t) {
					e.collectionWithScores(t)
				})).catch((function(e) {
					console.log(e)
				}))
			}
		}, {
			key: "render",
			value: function() {
				var e = this.props.user && (this.props.user.full_access || this.props.user["".concat(this.props.test.code, "_access")]);
				return o.a.createElement("div", {
					className: "grid-x tabs-slider results-tabs-slider"
				}, o.a.createElement("div", {
					className: "small-12 cell results__industries"
				}, o.a.createElement(a.default, {
					options: this.state.collection,
					current: this.state.current,
					isBlur: !e,
					onClick: this.setCurrent
				}, o.a.createElement(i.default, null)), this.state.current ? o.a.createElement(c.default, {
					option: this.state.current,
					user: this.props.user
				}) : o.a.createElement(u.default, {
					user: this.props.user,
					test: this.props.test,
					collection: this.state.collection,
					hiddenScores: this.state.hiddenScores,
					totalOptionsCount: this.state.totalOptionsCount
				})))
			}
		}]) && p(t.prototype, r), n && p(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), m
	}(l.default);
	t.default = y
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return m
	}));
	var n = r(0),
		o = r.n(n),
		a = r(211),
		i = (r(1), r(240)),
		s = r(142),
		c = r(243),
		l = r(174),
		u = r(175),
		f = {
			very_strong: "highly motivated",
			strong: "motivated",
			moderate: "somewhat motivated",
			weak: "slightly motivated",
			very_weak: "not motivated"
		},
		p = {
			very_strong: "very strong preference",
			strong: "strong preference",
			moderate: "moderate preference",
			weak: "little preference",
			very_weak: "no preference"
		},
		d = {
			very_strong: "enhanced work performance",
			strong: "good work performance",
			moderate: "moderate work performance",
			weak: "low work performance",
			very_weak: "poor work performance"
		},
		h = {
			very_strong: "every chance of success",
			strong: "an increased chance of success",
			moderate: "some chance of success",
			weak: "a low chance of success",
			very_weak: "a very low chance of success"
		};

	function m(e) {
		if (!e.option) return null;
		e.user && "finished" === e.user.interests_status && "finished" === e.user.personality_status && "finished" === e.user.motivators_status && "finished" === e.user.abstract_status && "finished" === e.user.numerical_status && e.user.verbal_status;
		var t = e.user && e.user.full_access,
			r = e.user && (e.user.full_access || e.user.motivators_access),
			m = "Popular careers in this interest area";
		e.option.careers && (t ? (a.default, "careers".concat(e.option.id), e.user, e.option.careers) : (i.default, e.option.careers));
		var v = Object(u.getRankingScore)(e.option.score),
			y = 0,
			b = "";
		return r && e.option.statsLoaded && (b = (y = e.option.score - e.option.stats.median_score) > 0 ? "".concat(y, "% above") : y < 0 ? "".concat(-1 * y, "% below") : "equal to"), o.a.createElement("div", null, o.a.createElement("div", {
			className: "tabs-content-container"
		}, o.a.createElement("div", {
			className: "grid-container no-padding-top"
		}, o.a.createElement("div", {
			className: "tabs-content"
		}, o.a.createElement("div", {
			className: "tabs-panel is-active"
		}, o.a.createElement("div", {
			className: "industry-content"
		}, o.a.createElement("div", {
			className: "grid-x"
		}, o.a.createElement("div", {
			className: "large-6 medium-12 small-12 cell"
		}, o.a.createElement("h1", null, "MOTIVATOR"), o.a.createElement("h2", {
			className: "results__heading"
		}, e.option.name)), o.a.createElement("div", {
			className: "large-6 medium-12 small-12 cell"
		}, o.a.createElement("p", {
			className: "industry-score"
		}, "YOUR SCORE"), o.a.createElement("p", {
			className: "industry-score-percentage"
		}, e.option.score, "%"))), o.a.createElement("div", {
			className: "grid-x results__content"
		}, o.a.createElement("div", {
			className: "small-12 cell"
		}, o.a.createElement("h3", {
			className: "results__subheading"
		}, "About this motivator"), o.a.createElement("div", {
			dangerouslySetInnerHTML: {
				__html: e.option.result_description
			}
		}), o.a.createElement("h3", {
			className: "results__subheading"
		}, "Your score explained"), o.a.createElement("p", {
			className: "score-explanation"
		}, e.user.first_name, ", you scored ", o.a.createElement("b", null, e.option.score), "% on the ", o.a.createElement("b", null, e.option.name), " career motivator, which means you are  ", r ? o.a.createElement(n.Fragment, null, o.a.createElement("b", null, f[v]), " by ", o.a.createElement("b", null, e.option.motivation)) : o.a.createElement(n.Fragment, null, "...", o.a.createElement("span", {
			className: "hidden-score-explanation"
		}, "..\u2026\u2026..\u2026\u2026..\u2026\u2026. .\u2026\u2026..\u2026\u2026. .\u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026.. \u2026\u2026..\u2026\u2026..\u2026\u2026.. \u2026\u2026..\u2026\u2026..\u2026\u2026..\u2026\u2026 ..\u2026\u2026..\u2026\u2026..\u2026\u2026..")), "."), o.a.createElement("p", {
			className: "score-explanation"
		}, "Your score indicates that you have a  ", r ? o.a.createElement(n.Fragment, null, o.a.createElement("b", null, p[v]), " for work that ", o.a.createElement("b", null, e.option.preference)) : o.a.createElement(n.Fragment, null, "...", o.a.createElement("span", {
			className: "hidden-score-explanation"
		}, "\u2026\u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026. \u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.. \u2026\u2026 \u2026\u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026. \u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.. \u2026\u2026 \u2026\u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026. \u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.. \u2026...")), "."), o.a.createElement("p", {
			className: "score-explanation"
		}, "This means that you may have  ", r ? o.a.createElement(n.Fragment, null, o.a.createElement("b", null, d[v]), " in a job that allows you to ", o.a.createElement("b", null, e.option.performance)) : o.a.createElement(n.Fragment, null, "...", o.a.createElement("span", {
			className: "hidden-score-explanation"
		}, "\u2026\u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026. \u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.. \u2026...\u2026\u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026. \u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.. \u2026...\u2026\u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026. \u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.. \u2026...\u2026\u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026. \u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.. \u2026...")), "."), o.a.createElement("p", {
			className: "score-explanation"
		}, e.user.first_name, ", you should have  ", r ? o.a.createElement(n.Fragment, null, o.a.createElement("b", null, h[v]), " in pursuing a career fuelled by ", o.a.createElement("b", null, e.option.name, ".")) : o.a.createElement(n.Fragment, null, "...", o.a.createElement("span", {
			className: "hidden-score-explanation"
		}, "\u2026\u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026. \u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.. \u2026...\u2026\u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026. \u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.. \u2026...\u2026\u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026. \u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.. \u2026...\u2026\u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026. \u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.. \u2026...\u2026\u2026. \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026."))), r ? o.a.createElement("p", {
			className: "score-explanation"
		}, "Although your overall Career Motivators Test results can be a great indication of what motivates you to succeed, they should not be the only factor considered when choosing a career. By completing all six CareerHunter tests, you will gain a more in-depth understanding of your motivations, as well as your interests, personality and aptitudes \u2014 and, therefore, make a better-informed career choice.") : null, r ? null : o.a.createElement("a", {
			href: "/get-access",
			className: "results__access-link"
		}, "Get paid access to view full details ", o.a.createElement("span", {
			className: "small-icons next-arrow-green-s"
		})), o.a.createElement("h3", {
			className: "results__subheading"
		}, "How you compare"), o.a.createElement("p", null, "You scored higher than ", o.a.createElement("b", null, r && e.option.statsLoaded ? e.option.stats.users_higher_percent : o.a.createElement("span", {
			className: "hidden-score-explanation"
		}, "..."), "% of all users"), " who took the Career Motivators Test for the ", e.option.name, " motivator. This is how your score in this factor compares with that of all other CareerHunter test-takers:"), !r || e.option.statsLoaded ? o.a.createElement(c.default, {
			score: e.option.score,
			hasAccess: r,
			stats: e.option.statsLoaded ? e.option.stats : null
		}) : null, o.a.createElement("p", null, "The median score for this motivational factor is ", r && e.option.statsLoaded ? e.option.stats.median_score : o.a.createElement("span", {
			className: "hidden-score-explanation"
		}, "..."), "%. Your score for this motivation puts your raw score ", o.a.createElement("b", null, r && e.option.statsLoaded ? b : o.a.createElement(n.Fragment, null, o.a.createElement("span", {
			className: "hidden-score-explanation"
		}, "..."), "% ", o.a.createElement("span", {
			className: "hidden-score-explanation"
		}, "\u2026\u2026\u2026\u2026\u2026\u2026")), " the median.")), r ? null : o.a.createElement("a", {
			href: "/get-access",
			className: "results__access-link"
		}, "Get paid access to view full details ", o.a.createElement("span", {
			className: "small-icons next-arrow-green-s"
		})), e.option.careersLoaded ? o.a.createElement(l.default, {
			careers: e.option.careers,
			testCode: "motivators",
			optionTitle: e.option.name,
			user: e.user
		}) : null)), o.a.createElement(s.default, {
			hasTestAccess: r,
			testCode: "motivators"
		})))))))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return v
	}));
	var n = r(0),
		o = r.n(n),
		a = r(142),
		i = r(560),
		s = r(561),
		c = r(562),
		l = r(174),
		u = r(37),
		f = r(564);

	function p() {
		p = function() {
			return e
		};
		var e = {},
			t = Object.prototype,
			r = t.hasOwnProperty,
			n = "function" == typeof Symbol ? Symbol : {},
			o = n.iterator || "@@iterator",
			a = n.asyncIterator || "@@asyncIterator",
			i = n.toStringTag || "@@toStringTag";

		function s(e, t, r) {
			return Object.defineProperty(e, t, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}), e[t]
		}
		try {
			s({}, "")
		} catch (x) {
			s = function(e, t, r) {
				return e[t] = r
			}
		}

		function c(e, t, r, n) {
			var o = t && t.prototype instanceof f ? t : f,
				a = Object.create(o.prototype),
				i = new S(n || []);
			return a._invoke = function(e, t, r) {
				var n = "suspendedStart";
				return function(o, a) {
					if ("executing" === n) throw new Error("Generator is already running");
					if ("completed" === n) {
						if ("throw" === o) throw a;
						return j()
					}
					for (r.method = o, r.arg = a;;) {
						var i = r.delegate;
						if (i) {
							var s = E(i, r);
							if (s) {
								if (s === u) continue;
								return s
							}
						}
						if ("next" === r.method) r.sent = r._sent = r.arg;
						else if ("throw" === r.method) {
							if ("suspendedStart" === n) throw n = "completed", r.arg;
							r.dispatchException(r.arg)
						} else "return" === r.method && r.abrupt("return", r.arg);
						n = "executing";
						var c = l(e, t, r);
						if ("normal" === c.type) {
							if (n = r.done ? "completed" : "suspendedYield", c.arg === u) continue;
							return {
								value: c.arg,
								done: r.done
							}
						}
						"throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
					}
				}
			}(e, r, i), a
		}

		function l(e, t, r) {
			try {
				return {
					type: "normal",
					arg: e.call(t, r)
				}
			} catch (x) {
				return {
					type: "throw",
					arg: x
				}
			}
		}
		e.wrap = c;
		var u = {};

		function f() {}

		function d() {}

		function h() {}
		var m = {};
		s(m, o, (function() {
			return this
		}));
		var v = Object.getPrototypeOf,
			y = v && v(v(T([])));
		y && y !== t && r.call(y, o) && (m = y);
		var b = h.prototype = f.prototype = Object.create(m);

		function g(e) {
			["next", "throw", "return"].forEach((function(t) {
				s(e, t, (function(e) {
					return this._invoke(t, e)
				}))
			}))
		}

		function w(e, t) {
			var n;
			this._invoke = function(o, a) {
				function i() {
					return new t((function(n, i) {
						! function n(o, a, i, s) {
							var c = l(e[o], e, a);
							if ("throw" !== c.type) {
								var u = c.arg,
									f = u.value;
								return f && "object" == typeof f && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
									n("next", e, i, s)
								}), (function(e) {
									n("throw", e, i, s)
								})) : t.resolve(f).then((function(e) {
									u.value = e, i(u)
								}), (function(e) {
									return n("throw", e, i, s)
								}))
							}
							s(c.arg)
						}(o, a, n, i)
					}))
				}
				return n = n ? n.then(i, i) : i()
			}
		}

		function E(e, t) {
			var r = e.iterator[t.method];
			if (void 0 === r) {
				if (t.delegate = null, "throw" === t.method) {
					if (e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method)) return u;
					t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
				}
				return u
			}
			var n = l(r, e.iterator, t.arg);
			if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
			var o = n.arg;
			return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
		}

		function _(e) {
			var t = {
				tryLoc: e[0]
			};
			1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
		}

		function O(e) {
			var t = e.completion || {};
			t.type = "normal", delete t.arg, e.completion = t
		}

		function S(e) {
			this.tryEntries = [{
				tryLoc: "root"
			}], e.forEach(_, this), this.reset(!0)
		}

		function T(e) {
			if (e) {
				var t = e[o];
				if (t) return t.call(e);
				if ("function" == typeof e.next) return e;
				if (!isNaN(e.length)) {
					var n = -1,
						a = function t() {
							for (; ++n < e.length;)
								if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
							return t.value = void 0, t.done = !0, t
						};
					return a.next = a
				}
			}
			return {
				next: j
			}
		}

		function j() {
			return {
				value: void 0,
				done: !0
			}
		}
		return d.prototype = h, s(b, "constructor", h), s(h, "constructor", d), d.displayName = s(h, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
			var t = "function" == typeof e && e.constructor;
			return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
		}, e.mark = function(e) {
			return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, i, "GeneratorFunction")), e.prototype = Object.create(b), e
		}, e.awrap = function(e) {
			return {
				__await: e
			}
		}, g(w.prototype), s(w.prototype, a, (function() {
			return this
		})), e.AsyncIterator = w, e.async = function(t, r, n, o, a) {
			void 0 === a && (a = Promise);
			var i = new w(c(t, r, n, o), a);
			return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
				return e.done ? e.value : i.next()
			}))
		}, g(b), s(b, i, "Generator"), s(b, o, (function() {
			return this
		})), s(b, "toString", (function() {
			return "[object Generator]"
		})), e.keys = function(e) {
			var t = [];
			for (var r in e) t.push(r);
			return t.reverse(),
				function r() {
					for (; t.length;) {
						var n = t.pop();
						if (n in e) return r.value = n, r.done = !1, r
					}
					return r.done = !0, r
				}
		}, e.values = T, S.prototype = {
			constructor: S,
			reset: function(e) {
				if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !e)
					for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
			},
			stop: function() {
				this.done = !0;
				var e = this.tryEntries[0].completion;
				if ("throw" === e.type) throw e.arg;
				return this.rval
			},
			dispatchException: function(e) {
				if (this.done) throw e;
				var t = this;

				function n(r, n) {
					return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
				}
				for (var o = this.tryEntries.length - 1; o >= 0; --o) {
					var a = this.tryEntries[o],
						i = a.completion;
					if ("root" === a.tryLoc) return n("end");
					if (a.tryLoc <= this.prev) {
						var s = r.call(a, "catchLoc"),
							c = r.call(a, "finallyLoc");
						if (s && c) {
							if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
							if (this.prev < a.finallyLoc) return n(a.finallyLoc)
						} else if (s) {
							if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
						} else {
							if (!c) throw new Error("try statement without catch or finally");
							if (this.prev < a.finallyLoc) return n(a.finallyLoc)
						}
					}
				}
			},
			abrupt: function(e, t) {
				for (var n = this.tryEntries.length - 1; n >= 0; --n) {
					var o = this.tryEntries[n];
					if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
						var a = o;
						break
					}
				}
				a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
				var i = a ? a.completion : {};
				return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(i)
			},
			complete: function(e, t) {
				if ("throw" === e.type) throw e.arg;
				return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
			},
			finish: function(e) {
				for (var t = this.tryEntries.length - 1; t >= 0; --t) {
					var r = this.tryEntries[t];
					if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), O(r), u
				}
			},
			catch: function(e) {
				for (var t = this.tryEntries.length - 1; t >= 0; --t) {
					var r = this.tryEntries[t];
					if (r.tryLoc === e) {
						var n = r.completion;
						if ("throw" === n.type) {
							var o = n.arg;
							O(r)
						}
						return o
					}
				}
				throw new Error("illegal catch attempt")
			},
			delegateYield: function(e, t, r) {
				return this.delegate = {
					iterator: T(e),
					resultName: t,
					nextLoc: r
				}, "next" === this.method && (this.arg = void 0), u
			}
		}, e
	}

	function d(e, t, r, n, o, a, i) {
		try {
			var s = e[a](i),
				c = s.value
		} catch (l) {
			return void r(l)
		}
		s.done ? t(c) : Promise.resolve(c).then(n, o)
	}

	function h(e, t) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) || function(e, t) {
			var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
			if (null == r) return;
			var n, o, a = [],
				i = !0,
				s = !1;
			try {
				for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
			} catch (c) {
				s = !0, o = c
			} finally {
				try {
					i || null == r.return || r.return()
				} finally {
					if (s) throw o
				}
			}
			return a
		}(e, t) || function(e, t) {
			if (!e) return;
			if ("string" === typeof e) return m(e, t);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			"Object" === r && e.constructor && (r = e.constructor.name);
			if ("Map" === r || "Set" === r) return Array.from(e);
			if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return m(e, t)
		}(e, t) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function m(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
		return n
	}

	function v(e) {
		var t = h(Object(n.useState)("overview"), 2),
			r = t[0],
			m = t[1],
			v = h(Object(n.useState)(!1), 2),
			y = v[0],
			b = v[1],
			g = h(Object(n.useState)([]), 2),
			w = g[0],
			E = g[1],
			_ = (e.user && e.user.full_access, e.user && (e.user.full_access || e.user["".concat(e.test.code, "_access")]));
		Object(n.useEffect)((function() {
			return O(), window.addEventListener("scroll", O), S().then((function(e) {
					E(e)
				})),
				function() {
					window.removeEventListener("scroll", O)
				}
		}), []);
		var O = function() {
				var e = document.querySelector(".tabs-container").offsetTop - 160;
				b(e && window.pageYOffset >= e)
			},
			S = function() {
				var t, r = (t = p().mark((function t() {
					var r;
					return p().wrap((function(t) {
						for (;;) switch (t.prev = t.next) {
							case 0:
								return r = [], t.next = 3, u.default.popularCareers({
									career_test: e.test.id
								}).then((function(e) {
									r = e
								})).catch((function(e) {
									console.error(e)
								}));
							case 3:
								return t.abrupt("return", r);
							case 4:
							case "end":
								return t.stop()
						}
					}), t)
				})), function() {
					var e = this,
						r = arguments;
					return new Promise((function(n, o) {
						var a = t.apply(e, r);

						function i(e) {
							d(a, n, o, i, s, "next", e)
						}

						function s(e) {
							d(a, n, o, i, s, "throw", e)
						}
						i(void 0)
					}))
				});
				return function() {
					return r.apply(this, arguments)
				}
			}(),
			T = function() {
				window.scrollTo({
					top: document.querySelector(".tabs-container").offsetTop - 160,
					behavior: "smooth"
				})
			},
			j = function() {
				return o.a.createElement("ul", {
					className: "results__nav tabs"
				}, [{
					key: "0",
					name: "Overview",
					href: "#overview",
					id: "overview"
				}, {
					key: "1",
					name: "Results explained",
					href: "#resultsExplained",
					id: "resultsExplained"
				}, {
					key: "2",
					name: "How you compare",
					href: "#compare",
					id: "compare"
				}, {
					key: "3",
					name: "Popular careers",
					href: "#popularCareers",
					id: "popularCareers"
				}, {
					key: "4",
					name: "Your test results",
					href: "#testResults",
					id: "testResults"
				}].map((function(e) {
					return o.a.createElement("li", {
						className: "tabs-title ".concat(r === e.id ? " is-active" : "", " "),
						onClick: function(t) {
							return function(e, t) {
								e && e.preventDefault(), r !== t && (m(t), T())
							}(t, e.id)
						},
						key: e.key
					}, o.a.createElement("a", null, e.name))
				})))
			};
		return o.a.createElement("div", {
			className: "results__timed"
		}, y ? o.a.createElement("div", {
			className: "results__stuck-nav"
		}, o.a.createElement("div", {
			className: "grid-container"
		}, o.a.createElement("div", {
			className: "grid-x"
		}, j()))) : null, o.a.createElement("div", {
			className: "grid-container no-padding tabs-container-wrapper"
		}, o.a.createElement("div", {
			className: "grid-x results__wrapper-nav ".concat(y ? " is-hidden" : "")
		}, o.a.createElement("div", {
			className: "large-9 medium-12 small-12 cell large-order-1 medium-order-2 small-order-2"
		}, j()), o.a.createElement("div", {
			className: "large-3 medium-12 small-12 cell large-order-2 medium-order-1 small-order-1"
		}, o.a.createElement("p", {
			className: "results__user"
		}, e.user.name), o.a.createElement("p", {
			className: "results__taken-date"
		}, o.a.createElement("span", null, "Date taken:"), " ", e.user["".concat(e.test.code, "_finished_at")]))), o.a.createElement("div", {
			className: "tabs-container"
		}, o.a.createElement("div", {
			className: "tabs-content"
		}, o.a.createElement("div", {
			className: "tabs-panel is-active"
		}, function() {
			switch (r) {
				case "overview":
					return o.a.createElement(i.default, {
						test: e.test,
						user: e.user,
						results: e.results
					});
				case "resultsExplained":
					return o.a.createElement(s.default, {
						testCode: e.test.code,
						user: e.user,
						score: e.results.result.raw_score
					});
				case "compare":
					return o.a.createElement(c.default, {
						test: e.test,
						user: e.user,
						result: e.results.result
					});
				case "popularCareers":
					return o.a.createElement(l.default, {
						testCode: e.test.code,
						careers: w,
						user: e.user
					});
				case "testResults":
					return o.a.createElement(f.default, {
						user: e.user,
						test: e.test,
						questions: e.questions,
						answers: e.answers
					})
			}
		}())), o.a.createElement(a.default, {
			hasTestAccess: _,
			test: e.test
		}))))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return i
	}));
	var n = r(0),
		o = r.n(n),
		a = r(159);

	function i(e) {
		var t = e.results.result,
			r = e.results.avg_result;
		return o.a.createElement(n.Fragment, null, o.a.createElement("h2", {
			className: "results__heading"
		}, "Overview of your results"), o.a.createElement("h3", {
			className: "results__subheading"
		}, "About this test"), o.a.createElement("p", null, e.test.result_description), o.a.createElement("h3", {
			className: "results__subheading"
		}, "How you scored"), o.a.createElement("p", null, e.user.first_name, ", you achieved a raw score of ", o.a.createElement("b", null, t.raw_score, "%"), " in the ", e.test.name, " Test."), o.a.createElement("p", null, "The raw score is the sum of all your correct responses divided by the number of all test questions, which is then converted into a percentage. You answered ", o.a.createElement("b", null, t.correct_answers), " out of ", o.a.createElement("b", null, t.correct_answers + t.incorrect_answers + t.unanswered), " questions correctly."), o.a.createElement("p", {
			className: "results__label-raw"
		}, "Raw Score"), o.a.createElement("p", {
			className: "results__green-value"
		}, t.raw_score, "%"), o.a.createElement("div", {
			className: "grid-x max-740"
		}, o.a.createElement("div", {
			className: "small-4 cell"
		}, o.a.createElement("p", {
			className: "results__label"
		}, "Correct answers"), o.a.createElement("p", {
			className: "results__value"
		}, t.correct_answers), o.a.createElement("p", {
			className: "results__label"
		}, "Time used"), o.a.createElement("p", {
			className: "results__small-label"
		}, "You"), o.a.createElement("p", {
			className: "results__value"
		}, a.default.millisToMinutesAndSeconds(t.time)), o.a.createElement("p", {
			className: "results__small-label"
		}, "User average"), o.a.createElement("p", {
			className: "results__value results__value--grey"
		}, a.default.millisToMinutesAndSeconds(r.time))), o.a.createElement("div", {
			className: "small-4 cell"
		}, o.a.createElement("p", {
			className: "results__label"
		}, "Incorrect answers"), o.a.createElement("p", {
			className: "results__value"
		}, t.incorrect_answers), o.a.createElement("p", {
			className: "results__label"
		}, "Time left"), o.a.createElement("p", {
			className: "results__small-label"
		}, "You"), o.a.createElement("p", {
			className: "results__value"
		}, a.default.millisToMinutesAndSeconds(t.time_left)), o.a.createElement("p", {
			className: "results__small-label"
		}, "User average"), o.a.createElement("p", {
			className: "results__value results__value--grey"
		}, a.default.millisToMinutesAndSeconds(r.time_left))), o.a.createElement("div", {
			className: "small-4 cell"
		}, o.a.createElement("p", {
			className: "results__label"
		}, "Unanswered"), o.a.createElement("p", {
			className: "results__value"
		}, t.unanswered), o.a.createElement("p", {
			className: "results__label"
		}, "Avg. time per question"), o.a.createElement("p", {
			className: "results__small-label"
		}, "You"), o.a.createElement("p", {
			className: "results__value"
		}, a.default.millisToMinutesAndSeconds(t.avg_question_time)), o.a.createElement("p", {
			className: "results__small-label"
		}, "User average"), o.a.createElement("p", {
			className: "results__value results__value--grey"
		}, a.default.millisToMinutesAndSeconds(r.avg_question_time)))))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return s
	}));
	var n = r(0),
		o = r.n(n),
		a = r(175),
		i = r(107);

	function s(e) {
		var t = Object(a.getRankingScore)(e.score);
		switch (e.testCode) {
			case "verbal":
				return o.a.createElement(n.Fragment, null, o.a.createElement("h2", {
					className: "results__heading"
				}, "Your results explained"), o.a.createElement("p", null, e.user.first_name, ", as you achieved ", o.a.createElement("b", null, i.SCORE_RANKINGS[t]), " in the Verbal Reasoning Test, you\u2019ll be ", o.a.createElement("b", null, i.CAPABILITY_RANKINGS[t]), " of performing tasks and activities that require written and oral communication skills."), o.a.createElement("p", null, "Your score indicates that you are ", o.a.createElement("b", null, i.ABILITY_RANKINGS[t]), " in comprehending and processing written information, thinking constructively, and communicating effectively in the English language."), o.a.createElement("p", null, e.user.first_name, ", this means you would perform ", o.a.createElement("b", null, i.PERFORMANCE_RANKINGS[t]), " in careers that require and rely on strong written and oral communication skills."), o.a.createElement("p", null, "Although your overall Verbal Reasoning Test results can be a great indication of your ability to draw logical conclusions from written information, they should not be the only factor considered when choosing a career. By completing all six CareerHunter tests, you will gain a more in-depth understanding of your aptitudes, as well as your interests, personality and motivations \u2014 and, therefore, make a better-informed career choice."));
			case "numerical":
				return o.a.createElement(n.Fragment, null, o.a.createElement("h2", {
					className: "results__heading"
				}, "Your results explained"), o.a.createElement("p", null, e.user.first_name, ", as you achieved ", o.a.createElement("b", null, i.SCORE_RANKINGS[t]), " in the Numerical Reasoning Test, you\u2019ll be ", o.a.createElement("b", null, i.CAPABILITY_RANKINGS[t]), " of performing tasks and activities that require a high level of data and numerical comprehension."), o.a.createElement("p", null, "Your score indicates that you are ", o.a.createElement("b", null, i.ABILITY_RANKINGS[t]), " in comprehending and processing data\u2013based and numerical information, interpreting mathematical data, and generally working with numbers."), o.a.createElement("p", null, "This means that you would perform ", o.a.createElement("b", null, i.PERFORMANCE_RANKINGS[t]), " in careers where your numerical reasoning abilities will be put to good use."), o.a.createElement("p", null, "Although your overall Numerical Reasoning Test results can be a great indication of your ability to draw logical conclusions from written information, they should not be the only factor considered when choosing a career. By completing all six CareerHunter tests, you will gain a more in-depth understanding of your aptitudes, as well as your interests, personality and motivations \u2014 and, therefore, make a better-informed career choice."));
			default:
				return o.a.createElement(n.Fragment, null, o.a.createElement("h2", {
					className: "results__heading"
				}, "Your results explained"), o.a.createElement("p", null, e.user.first_name, ", as you demonstrate a ", o.a.createElement("b", null, i.LEVEL_RANKINGS[t]), " of abstract reasoning, you\u2019ll be ", o.a.createElement("b", null, i.COMFORT_RANKINGS[t]), " of carrying out tasks that require a high degree of lateral and critical thinking."), o.a.createElement("p", null, "Your score indicates that you are ", o.a.createElement("b", null, i.ABILITY_RANKINGS[t]), " in spotting trends in data, identifying relationships between ideas, understanding new concepts, processing information, solving problems and making sound decisions."), o.a.createElement("p", null, "This means that you would perform ", o.a.createElement("b", null, i.PERFORMANCE_RANKINGS[t]), " in careers where your abstract reasoning abilities will be put to good use."), o.a.createElement("p", null, "Although your overall Abstract Reasoning Test results can be a great indication of your strategic thinking abilities, they should not be the only factor considered when choosing a career. By completing all six CareerHunter tests, you will gain a more in-depth understanding of your aptitudes, as well as your interests, personality and motivations \u2014 and, therefore, make a better-informed career choice."))
		}
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return s
	}));
	var n = r(0),
		o = r.n(n),
		a = r(17),
		i = r(563);

	function s(e) {
		var t = e.result,
			r = "above",
			s = t.raw_score - 75;
		return s < 0 && (s *= -1, r = "below"), o.a.createElement(n.Fragment, null, o.a.createElement("h2", {
			className: "results__heading"
		}, "How you compare"), o.a.createElement("p", null, "This is how you compare to all other CareerHunter test-takers who took the ", e.test.name, " Test:"), o.a.createElement("div", {
			className: "results__chart"
		}, o.a.createElement("div", {
			className: "grid-x"
		}, o.a.createElement("div", {
			className: "small-12 cell"
		}, o.a.createElement("div", {
			className: "grid-x"
		}, o.a.createElement("div", {
			className: "large-8 medium-8 small-6 cell"
		}, o.a.createElement("p", {
			className: "results__label-raw"
		}, "Raw score"), o.a.createElement("div", {
			className: "results__timed-raw"
		}, t.raw_score, "%", o.a.createElement("div", {
			className: "tooltip-trigger small-icons blue-off-tooltip"
		}, o.a.createElement("span", {
			className: "tooltip top"
		}, "The raw score is the sum of all your correct responses divided by the number of all test questions, which is then converted into a percentage. For example, if you answered 12 out of 20 questions correctly, 12 is divided by 20, which equals 0.6. This is then multiplied by 100 to obtain the equivalent percentage, which is 60%.")))), o.a.createElement("div", {
			className: "large-4 medium-4 small-6 cell medium-flex-end"
		}, o.a.createElement("table", {
			className: "results__table"
		}, o.a.createElement("tbody", null, o.a.createElement("tr", null, o.a.createElement("td", {
			className: "results__chart-data"
		}, o.a.createElement("div", {
			className: "results__chart-label"
		}, "Percentile")), o.a.createElement("td", {
			className: "results__chart-data"
		}, o.a.createElement("span", {
			className: "results__chart-value"
		}, Object(a.ordinalSuffixOf)(parseInt(t.percentile)))), o.a.createElement("td", {
			className: "results__chart-data"
		}, o.a.createElement("div", {
			className: "tooltip-trigger small-icons blue-off-tooltip"
		}, o.a.createElement("span", {
			className: "tooltip top"
		}, "The percentile score shows how many people who also completed the ", name, " Test scored less than you. For example, if your percentile score is at the 80th percentile, this means that 80% of the people who also completed the test scored less than you.")))), o.a.createElement("tr", null, o.a.createElement("td", {
			className: "results__chart-data"
		}, o.a.createElement("div", {
			className: "results__chart-label"
		}, "Sten score")), o.a.createElement("td", {
			className: "results__chart-data"
		}, o.a.createElement("span", {
			className: "results__chart-value"
		}, t.sten)), o.a.createElement("td", {
			className: "results__chart-data"
		}, o.a.createElement("div", {
			className: "tooltip-trigger small-icons blue-off-tooltip"
		}, o.a.createElement("span", {
			className: "tooltip top"
		}, "The sten score is a standardised score on a 10-point scale where 1 indicates low performance and 10 indicates high performance. It has a mean of 5.5 and a standard deviation of 2. For example, if you scored lower than 5.5, it means you scored below average; if you scored higher than 5.5, then you scored above average.")))), o.a.createElement("tr", null, o.a.createElement("td", {
			className: "results__chart-data"
		}, o.a.createElement("div", {
			className: "results__chart-label"
		}, "T-score")), o.a.createElement("td", {
			className: "results__chart-data"
		}, o.a.createElement("span", {
			className: "results__chart-value"
		}, t.t_score)), o.a.createElement("td", {
			className: "results__chart-data"
		}, o.a.createElement("div", {
			className: "tooltip-trigger small-icons blue-off-tooltip"
		}, o.a.createElement("span", {
			className: "tooltip top"
		}, "The T-score is a standardised score ranging between 20 and 80 with a mean of 50 and a standard deviation of 10. It indicates how far your score is from the mean. For example, if you have a T-score of 60, it\u2019s one standard deviation above the mean.")))))))), o.a.createElement(i.default, {
			score: t.percentile
		})))), o.a.createElement("p", null, o.a.createElement("b", null, "You\u2019re in the ", Object(a.ordinalSuffixOf)(parseInt(t.percentile)), " percentile.")), o.a.createElement("p", null, e.user.first_name, ", your score places you in the ", Object(a.ordinalSuffixOf)(parseInt(t.percentile)), " percentile, meaning that you scored higher than ", t.percentile, "% of all other users who took the ", e.test.name, " Test."), o.a.createElement("p", null, o.a.createElement("b", null, "Your sten score is ", t.sten, ".")), o.a.createElement("p", null, "The sten score is a standardized score on a 10-point scale where 1 indicates low performance and 10 indicates high performance. It has a mean of 5.5 and a standard deviation of 2. For example, if you scored lower than 5.5, it means you scored below average; if you scored higher than 5.5, then you scored above average. "), o.a.createElement("p", null, o.a.createElement("b", null, "Your T-score is ", t.t_score, ".")), o.a.createElement("p", null, "The T-score is a standardized score ranging between 20 and 80 with a mean of 50 and a standard deviation of 10. It indicates how far your score is from the mean. For example, if you have a T-score of 60, it\u2019s one standard deviation above the mean."), o.a.createElement("p", null, o.a.createElement("b", null, "You scored ", 0 === s ? "equal to" : "".concat(s, "% ").concat(r), " the median.")), o.a.createElement("p", null, "The median raw score of all other test-takers on CareerHunter is currently 75%, meaning you scored ", 0 === s ? "equal to" : "".concat(s, "% ").concat(r), " the average."))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return s
	}));
	var n = r(0),
		o = r.n(n),
		a = r(71),
		i = r.n(a);
	r(358), r(709);

	function s(e) {
		var t = Object(n.useRef)(null);
		return Object(n.useEffect)((function() {
			var r = {
				responsive: !0,
				maintainAspectRatio: !1,
				animation: {
					easing: "easeInOutQuad",
					duration: 520
				},
				scales: {
					xAxes: [{
						type: "linear",
						position: "bottom",
						gridLines: {
							fontFamily: "Sofia-Pro-Regular",
							color: "rgba(10,30,46, 0.05)",
							lineWidth: 1,
							display: !0,
							zeroLineColor: "rgba(10,30,46, 0.2)",
							drawBorder: !1,
							tickMarkLength: 5
						},
						scaleLabel: {
							fontFamily: "Sofia-Pro-Regular",
							titleFontFamily: "Sofia-Pro-Regular",
							display: !0,
							fontColor: "#0A1E2E",
							labelString: "Percentile"
						}
					}],
					yAxes: [{
						ticks: {
							display: !1,
							min: 0
						},
						gridLines: {
							fontFamily: "Sofia-Pro-Regular",
							color: "rgba(10,30,46, 0.05)",
							lineWidth: 1,
							display: !0,
							zeroLineColor: "rgba(10,30,46, 0.2)",
							tickMarkLength: 0
						},
						scaleLabel: {
							fontFamily: "Sofia-Pro-Regular",
							titleFontFamily: "Sofia-Pro-Regular",
							display: !0,
							fontColor: "#0A1E2E",
							labelString: "Users",
							drawOnChartArea: !0,
							padding: 10
						}
					}]
				},
				annotation: {
					annotations: [{
						type: "line",
						mode: "vertical",
						scaleID: "x-axis-0",
						value: e.score,
						borderColor: "#59CE61",
						borderWidth: 1,
						label: {
							fontFamily: "Sofia-Pro-Light",
							backgroundColor: "transparent",
							content: "You",
							enabled: !0,
							yAdjust: e.score,
							fontColor: "#0A1E2E",
							xPadding: 6,
							yPadding: 6,
							cornerRadius: 6
						}
					}]
				},
				lineHeightAnnotation: {
					color: "#0A1E2E",
					shadow: !1,
					noDash: !0
				},
				elements: {
					line: {
						tension: .4
					},
					point: {
						radius: 0
					}
				},
				legend: {
					display: !1
				}
			};
			new i.a(t.current.getContext("2d"), {
				type: "line",
				defaultFontFamily: "Sofia-Pro-Regular",
				data: {
					datasets: [{
						label: "Users Results",
						borderWidth: 1,
						borderColor: "#0a1e2e",
						data: [{
							x: 0,
							y: 0
						}, {
							x: 10,
							y: 3
						}, {
							x: 20,
							y: 8
						}, {
							x: 30,
							y: 18
						}, {
							x: 40,
							y: 26
						}, {
							x: 50,
							y: 28.5
						}, {
							x: 60,
							y: 26
						}, {
							x: 70,
							y: 18
						}, {
							x: 80,
							y: 8
						}, {
							x: 90,
							y: 3
						}, {
							x: 100,
							y: 0
						}],
						color: "#0a1e2e",
						backgroundColor: "transparent"
					}]
				},
				options: r
			})
		}), []), o.a.createElement("div", {
			className: "line-chart"
		}, o.a.createElement("div", {
			className: "aspect-ratio"
		}, o.a.createElement("canvas", {
			id: "myChart",
			ref: t
		})))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return h
	}));
	var n = r(0),
		o = r.n(n),
		a = r(565),
		i = r(63);

	function s(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t && (n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), r.push.apply(r, n)
		}
		return r
	}

	function c(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = null != arguments[t] ? arguments[t] : {};
			t % 2 ? s(Object(r), !0).forEach((function(t) {
				l(e, t, r[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
			}))
		}
		return e
	}

	function l(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function u(e) {
		return function(e) {
			if (Array.isArray(e)) return d(e)
		}(e) || function(e) {
			if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
		}(e) || p(e) || function() {
			throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function f(e, t) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) || function(e, t) {
			var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
			if (null == r) return;
			var n, o, a = [],
				i = !0,
				s = !1;
			try {
				for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
			} catch (c) {
				s = !0, o = c
			} finally {
				try {
					i || null == r.return || r.return()
				} finally {
					if (s) throw o
				}
			}
			return a
		}(e, t) || p(e, t) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function p(e, t) {
		if (e) {
			if ("string" === typeof e) return d(e, t);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? d(e, t) : void 0
		}
	}

	function d(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
		return n
	}

	function h(e) {
		for (var t = f(Object(n.useState)(1), 2), r = t[0], s = t[1], l = Object(n.useRef)(null), p = [], d = u(e.questions), h = function(e) {
				var t = d.slice(e, e + 5),
					r = null;
				t = t.map((function(e) {
					var t = !1;
					return r !== e.html_content_id && (t = !0, r = e.html_content_id), c(c({}, e), {}, {
						displayHtmlContent: t
					})
				})), p.push(t)
			}, m = 0; m < d.length; m += 5) h(m);
		return o.a.createElement(n.Fragment, null, o.a.createElement("h2", {
			className: "results__heading",
			ref: l
		}, "Your test results"), o.a.createElement("p", null, e.user.first_name, ", here is how you answered the questions in the ", e.test.name, " Test."), p[r - 1].map((function(t, n) {
			return o.a.createElement(a.default, {
				key: t.id,
				questionNumber: n + 5 * (r - 1),
				question: t,
				answers: e.answers,
				test: e.test
			})
		})), o.a.createElement("div", {
			className: "results__pagination"
		}, o.a.createElement(i.default, {
			page: r,
			totalPages: p.length,
			goToPage: function(e, t) {
				e.preventDefault(), console.log("goToPage"), s(t), window.scrollTo({
					top: l.current.offsetTop - 180,
					behavior: "smooth"
				})
			}
		})))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return s
	}));
	var n = r(0),
		o = r.n(n),
		a = r(238),
		i = r(239);

	function s(e) {
		var t = e.answers[e.question.id],
			r = e.question.answer_variants.find((function(e) {
				return !!e.correct
			})),
			s = "unanswered";
		r && t && t === r.id ? s = "correct" : r && t && t !== r.id && (s = "incorrect");
		return o.a.createElement(n.Fragment, null, o.a.createElement("div", {
			className: "results__answers-label"
		}, o.a.createElement("p", null, "Q", e.questionNumber + 1, ". ", s[0].toUpperCase() + s.substring(1)), o.a.createElement("div", {
			className: "input-tick-wrapper"
		}, o.a.createElement("div", {
			className: "input-tick"
		}, o.a.createElement("label", null, function() {
			switch (s) {
				case "correct":
					return o.a.createElement(n.Fragment, null, o.a.createElement("input", {
						type: "radio",
						name: "test-sample_correct".concat(e.question.id),
						checked: !0,
						readOnly: !0
					}), o.a.createElement("span", {
						className: "checkbox-material  correct-answer"
					}, o.a.createElement("span", {
						className: "custom-checkbox"
					})));
				case "incorrect":
					return o.a.createElement(n.Fragment, null, o.a.createElement("input", {
						type: "radio",
						name: "test-sample-wrong".concat(e.question.id),
						checked: !0,
						readOnly: !0
					}), o.a.createElement("span", {
						className: "checkbox-material wrong-answer"
					}, o.a.createElement("span", {
						className: "custom-close"
					})));
				default:
					return o.a.createElement(n.Fragment, null, o.a.createElement("input", {
						type: "radio",
						name: "test-sample_unanswerd".concat(e.question.id),
						checked: !0,
						readOnly: !0
					}), o.a.createElement("span", {
						className: "checkbox-material wrong-answer"
					}, o.a.createElement("span", {
						className: "custom-close"
					})))
			}
		}())))), o.a.createElement("div", {
			className: "results__answers results__answers--".concat(e.test.code)
		}, o.a.createElement("div", {
			className: "grid-x answer-section"
		}, e.question.html_content && e.question.displayHtmlContent ? o.a.createElement("div", {
			dangerouslySetInnerHTML: {
				__html: e.question.html_content.content
			}
		}) : null), o.a.createElement("div", {
			className: "main-test__part test__timed-question test__timed-question--".concat(e.test.code)
		}, o.a.createElement("div", {
			dangerouslySetInnerHTML: {
				__html: e.question.content
			}
		})), o.a.createElement("div", {
			className: "main-test__part main-test__question-block--".concat(e.test.code)
		}, o.a.createElement("div", {
			className: "grid-x answer-section"
		}, e.question.answer_variants.map((function(e) {
			return "image" === e.content_type ? o.a.createElement(i.default, {
				image: e.image.original,
				name: "answer_variant_".concat(e.id),
				key: e.id,
				readOnly: !0,
				correct: e.correct,
				exmaple: !0,
				checked: t === e.id || e.correct,
				onClick: function() {}
			}) : o.a.createElement(a.default, {
				content: e.content,
				name: "answer_variant_".concat(e.id),
				key: e.id,
				readOnly: !0,
				correct: e.correct,
				correctExample: t === e.id,
				checked: t === e.id || e.correct,
				onClick: function() {}
			})
		}))))))
	}
}, , , , , , , , , , , , , , , , , , , , function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.on = function(e, t, r, n) {
		n = n || !1, e.addEventListener ? e.addEventListener(t, r, n) : e.attachEvent && e.attachEvent("on" + t, (function(t) {
			r.call(e, t || window.event)
		}))
	}, t.off = function(e, t, r, n) {
		n = n || !1, e.removeEventListener ? e.removeEventListener(t, r, n) : e.detachEvent && e.detachEvent("on" + t, r)
	}
}, function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = function(e) {
		if (!(e instanceof HTMLElement)) return document.documentElement;
		for (var t = "absolute" === e.style.position, r = /(scroll|auto)/, n = e; n;) {
			if (!n.parentNode) return e.ownerDocument || document.documentElement;
			var o = window.getComputedStyle(n),
				a = o.position,
				i = o.overflow,
				s = o["overflow-x"],
				c = o["overflow-y"];
			if ("static" === a && t) n = n.parentNode;
			else {
				if (r.test(i) && r.test(s) && r.test(c)) return n;
				n = n.parentNode
			}
		}
		return e.ownerDocument || e.documentElement || document.documentElement
	}
}, function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = function(e, t, r) {
		var n = void 0,
			o = void 0,
			a = void 0,
			i = void 0,
			s = void 0,
			c = function c() {
				var l = +new Date - i;
				l < t && l >= 0 ? n = setTimeout(c, t - l) : (n = null, r || (s = e.apply(a, o), n || (a = null, o = null)))
			};
		return function() {
			a = this, o = arguments, i = +new Date;
			var l = r && !n;
			return n || (n = setTimeout(c, t)), l && (s = e.apply(a, o), a = null, o = null), s
		}
	}
}, function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = function(e, t, r) {
		var n, o;
		return t || (t = 250),
			function() {
				var a = r || this,
					i = +new Date,
					s = arguments;
				n && i < n + t ? (clearTimeout(o), o = setTimeout((function() {
					n = i, e.apply(a, s)
				}), t)) : (n = i, e.apply(a, s))
			}
	}
}, , , , function(e, t) {
	e.exports = function(e) {
		var t = e.helpers;
		return e.Element.extend({
			initialize: function() {
				this.hidden = !1, this.hovering = !1, this._model = t.clone(this._model) || {}, this.setDataLimits()
			},
			destroy: function() {},
			setDataLimits: function() {},
			configure: function() {},
			inRange: function() {},
			getCenterPoint: function() {},
			getWidth: function() {},
			getHeight: function() {},
			getArea: function() {},
			draw: function() {}
		})
	}
}, function(e, t, r) {
	e.exports = function(e) {
		var t = e.helpers,
			n = r(183)(e);

		function o(e) {
			var t = (e.x2 - e.x1) / (e.y2 - e.y1),
				r = e.x1 || 0;
			this.m = t, this.b = r, this.getX = function(n) {
				return t * (n - e.y1) + r
			}, this.getY = function(n) {
				return (n - r) / t + e.y1
			}, this.intersects = function(e, t, r) {
				r = r || .001;
				var n = this.getY(e),
					o = this.getX(t);
				return (!isFinite(n) || Math.abs(t - n) < r) && (!isFinite(o) || Math.abs(e - o) < r)
			}
		}
		return e.Annotation.Element.extend({
			setDataLimits: function() {
				var e = this._model,
					t = this.options;
				e.ranges = {}, e.ranges[t.scaleID] = {
					min: t.value,
					max: t.endValue || t.value
				}
			},
			configure: function() {
				var e, r, a = this._model,
					i = this.options,
					s = this.chartInstance,
					c = s.chart.ctx,
					l = s.scales[i.scaleID];
				if (l && (e = n.isValid(i.value) ? l.getPixelForValue(i.value) : NaN, r = n.isValid(i.endValue) ? l.getPixelForValue(i.endValue) : e), !isNaN(e)) {
					var u = s.chartArea;
					a.clip = {
						x1: u.left,
						x2: u.right,
						y1: u.top,
						y2: u.bottom
					}, "horizontal" == this.options.mode ? (a.x1 = u.left, a.x2 = u.right, a.y1 = e, a.y2 = r) : (a.y1 = u.top, a.y2 = u.bottom, a.x1 = e, a.x2 = r), a.line = new o(a), a.mode = i.mode, a.labelBackgroundColor = i.label.backgroundColor, a.labelFontFamily = i.label.fontFamily, a.labelFontSize = i.label.fontSize, a.labelFontStyle = i.label.fontStyle, a.labelFontColor = i.label.fontColor, a.labelXPadding = i.label.xPadding, a.labelYPadding = i.label.yPadding, a.labelCornerRadius = i.label.cornerRadius, a.labelPosition = i.label.position, a.labelXAdjust = i.label.xAdjust, a.labelYAdjust = i.label.yAdjust, a.labelEnabled = i.label.enabled, a.labelContent = i.label.content, c.font = t.fontString(a.labelFontSize, a.labelFontStyle, a.labelFontFamily);
					var f = c.measureText(a.labelContent).width,
						p = c.measureText("M").width,
						d = function(e, t, r, n, o) {
							var a = e.line,
								i = {},
								s = 0,
								c = 0;
							switch (!0) {
								case "vertical" == e.mode && "top" == e.labelPosition:
									c = o + e.labelYAdjust, s = t / 2 + e.labelXAdjust, i.y = e.y1 + c, i.x = (isFinite(a.m) ? a.getX(i.y) : e.x1) - s;
									break;
								case "vertical" == e.mode && "bottom" == e.labelPosition:
									c = r + o + e.labelYAdjust, s = t / 2 + e.labelXAdjust, i.y = e.y2 - c, i.x = (isFinite(a.m) ? a.getX(i.y) : e.x1) - s;
									break;
								case "horizontal" == e.mode && "left" == e.labelPosition:
									s = n + e.labelXAdjust, c = -r / 2 + e.labelYAdjust, i.x = e.x1 + s, i.y = a.getY(i.x) + c;
									break;
								case "horizontal" == e.mode && "right" == e.labelPosition:
									s = t + n + e.labelXAdjust, c = -r / 2 + e.labelYAdjust, i.x = e.x2 - s, i.y = a.getY(i.x) + c;
									break;
								default:
									i.x = (e.x1 + e.x2 - t) / 2 + e.labelXAdjust, i.y = (e.y1 + e.y2 - r) / 2 + e.labelYAdjust
							}
							return i
						}(a, f, p, a.labelXPadding, a.labelYPadding);
					a.labelX = d.x - a.labelXPadding, a.labelY = d.y - a.labelYPadding, a.labelWidth = f + 2 * a.labelXPadding, a.labelHeight = p + 2 * a.labelYPadding, a.borderColor = i.borderColor, a.borderWidth = i.borderWidth, a.borderDash = i.borderDash || [], a.borderDashOffset = i.borderDashOffset || 0
				}
			},
			inRange: function(e, t) {
				var r = this._model;
				return r.line && r.line.intersects(e, t, this.getHeight()) || r.labelEnabled && r.labelContent && e >= r.labelX && e <= r.labelX + r.labelWidth && t >= r.labelY && t <= r.labelY + r.labelHeight
			},
			getCenterPoint: function() {
				return {
					x: (this._model.x2 + this._model.x1) / 2,
					y: (this._model.y2 + this._model.y1) / 2
				}
			},
			getWidth: function() {
				return Math.abs(this._model.right - this._model.left)
			},
			getHeight: function() {
				return this._model.borderWidth || 1
			},
			getArea: function() {
				return Math.sqrt(Math.pow(this.getWidth(), 2) + Math.pow(this.getHeight(), 2))
			},
			draw: function() {
				var e = this._view,
					r = this.chartInstance.chart.ctx;
				e.clip && (r.save(), r.beginPath(), r.rect(e.clip.x1, e.clip.y1, e.clip.x2 - e.clip.x1, e.clip.y2 - e.clip.y1), r.clip(), r.lineWidth = e.borderWidth, r.strokeStyle = e.borderColor, r.setLineDash && r.setLineDash(e.borderDash), r.lineDashOffset = e.borderDashOffset, r.beginPath(), r.moveTo(e.x1, e.y1), r.lineTo(e.x2, e.y2), r.stroke(), e.labelEnabled && e.labelContent && (r.beginPath(), r.rect(e.clip.x1, e.clip.y1, e.clip.x2 - e.clip.x1, e.clip.y2 - e.clip.y1), r.clip(), r.fillStyle = e.labelBackgroundColor, t.drawRoundedRectangle(r, e.labelX, e.labelY, e.labelWidth, e.labelHeight, e.labelCornerRadius), r.fill(), r.font = t.fontString(e.labelFontSize, e.labelFontStyle, e.labelFontFamily), r.fillStyle = e.labelFontColor, r.textAlign = "center", r.textBaseline = "middle", r.fillText(e.labelContent, e.labelX + e.labelWidth / 2, e.labelY + e.labelHeight / 2)), r.restore())
			}
		})
	}
}, function(e, t, r) {
	e.exports = function(e) {
		var t = r(183)(e);
		return e.Annotation.Element.extend({
			setDataLimits: function() {
				var e = this._model,
					r = this.options,
					n = this.chartInstance,
					o = n.scales[r.xScaleID],
					a = n.scales[r.yScaleID],
					i = n.chartArea;
				if (e.ranges = {}, i) {
					var s = 0,
						c = 0;
					o && (s = t.isValid(r.xMin) ? r.xMin : o.getPixelForValue(i.left), c = t.isValid(r.xMax) ? r.xMax : o.getPixelForValue(i.right), e.ranges[r.xScaleID] = {
						min: Math.min(s, c),
						max: Math.max(s, c)
					}), a && (s = t.isValid(r.yMin) ? r.yMin : a.getPixelForValue(i.bottom), c = t.isValid(r.yMax) ? r.yMax : a.getPixelForValue(i.top), e.ranges[r.yScaleID] = {
						min: Math.min(s, c),
						max: Math.max(s, c)
					})
				}
			},
			configure: function() {
				var e = this._model,
					r = this.options,
					n = this.chartInstance,
					o = n.scales[r.xScaleID],
					a = n.scales[r.yScaleID],
					i = n.chartArea;
				e.clip = {
					x1: i.left,
					x2: i.right,
					y1: i.top,
					y2: i.bottom
				};
				var s, c, l = i.left,
					u = i.top,
					f = i.right,
					p = i.bottom;
				o && (s = t.isValid(r.xMin) ? o.getPixelForValue(r.xMin) : i.left, c = t.isValid(r.xMax) ? o.getPixelForValue(r.xMax) : i.right, l = Math.min(s, c), f = Math.max(s, c)), a && (s = t.isValid(r.yMin) ? a.getPixelForValue(r.yMin) : i.bottom, c = t.isValid(r.yMax) ? a.getPixelForValue(r.yMax) : i.top, u = Math.min(s, c), p = Math.max(s, c)), e.left = l, e.top = u, e.right = f, e.bottom = p, e.borderColor = r.borderColor, e.borderWidth = r.borderWidth, e.backgroundColor = r.backgroundColor
			},
			inRange: function(e, t) {
				var r = this._model;
				return r && e >= r.left && e <= r.right && t >= r.top && t <= r.bottom
			},
			getCenterPoint: function() {
				var e = this._model;
				return {
					x: (e.right + e.left) / 2,
					y: (e.bottom + e.top) / 2
				}
			},
			getWidth: function() {
				var e = this._model;
				return Math.abs(e.right - e.left)
			},
			getHeight: function() {
				var e = this._model;
				return Math.abs(e.bottom - e.top)
			},
			getArea: function() {
				return this.getWidth() * this.getHeight()
			},
			draw: function() {
				var e = this._view,
					t = this.chartInstance.chart.ctx;
				t.save(), t.beginPath(), t.rect(e.clip.x1, e.clip.y1, e.clip.x2 - e.clip.x1, e.clip.y2 - e.clip.y1), t.clip(), t.lineWidth = e.borderWidth, t.strokeStyle = e.borderColor, t.fillStyle = e.backgroundColor;
				var r = e.right - e.left,
					n = e.bottom - e.top;
				t.fillRect(e.left, e.top, r, n), t.strokeRect(e.left, e.top, r, n), t.restore()
			}
		})
	}
}, function(e, t, r) {
	e.exports = function(e) {
		var t = e.helpers,
			n = r(183)(e),
			o = r(596)(e),
			a = e.Annotation.types;

		function i(e) {
			n.decorate(e, "afterDataLimits", (function(e, t) {
				e && e(t), n.adjustScaleRange(t)
			}))
		}

		function s(e) {
			return function(t, r) {
				var o = t.annotation.options.drawTime;
				n.elements(t).filter((function(t) {
					return e === (t.options.drawTime || o)
				})).forEach((function(e) {
					e.transition(r).draw()
				}))
			}
		}
		return {
			beforeInit: function(e) {
				var r = e.options,
					o = e.annotation = {
						elements: {},
						options: n.initConfig(r.annotation || {}),
						onDestroy: [],
						firstRun: !0,
						supported: !1
					};
				e.ensureScalesHaveIDs(), r.scales && (o.supported = !0, t.each(r.scales.xAxes, i), t.each(r.scales.yAxes, i))
			},
			beforeUpdate: function(e) {
				var t = e.annotation;
				if (t.supported) {
					t.firstRun ? t.firstRun = !1 : t.options = n.initConfig(e.options.annotation || {});
					var r = [];
					t.options.annotations.forEach((function(o) {
						var i = o.id || n.objectId();
						if (!t.elements[i] && a[o.type]) {
							var s = new(0, a[o.type])({
								id: i,
								options: o,
								chartInstance: e
							});
							s.initialize(), t.elements[i] = s, o.id = i, r.push(i)
						} else t.elements[i] && r.push(i)
					})), Object.keys(t.elements).forEach((function(e) {
						-1 === r.indexOf(e) && (t.elements[e].destroy(), delete t.elements[e])
					}))
				}
			},
			afterScaleUpdate: function(e) {
				n.elements(e).forEach((function(e) {
					e.configure()
				}))
			},
			beforeDatasetsDraw: s("beforeDatasetsDraw"),
			afterDatasetsDraw: s("afterDatasetsDraw"),
			afterDraw: s("afterDraw"),
			afterInit: function(e) {
				var r = e.annotation.options.events;
				if (t.isArray(r) && r.length > 0) {
					var n = e.chart.canvas,
						a = o.dispatcher.bind(e);
					o.collapseHoverEvents(r).forEach((function(r) {
						t.addEvent(n, r, a), e.annotation.onDestroy.push((function() {
							t.removeEvent(n, r, a)
						}))
					}))
				}
			},
			destroy: function(e) {
				for (var t = e.annotation.onDestroy; t.length > 0;) t.pop()()
			}
		}
	}
}, function(e, t, r) {
	e.exports = function(e) {
		var t = e.helpers,
			n = r(183)(e);

		function o(e) {
			var t = !1,
				r = e.filter((function(e) {
					switch (e) {
						case "mouseenter":
						case "mouseover":
						case "mouseout":
						case "mouseleave":
							return t = !0, !1;
						default:
							return !0
					}
				}));
			return t && -1 === r.indexOf("mousemove") && r.push("mousemove"), r
		}
		return {
			dispatcher: function(e) {
				var r = this.annotation,
					a = n.elements(this),
					i = t.getRelativePosition(e, this.chart),
					s = n.getNearestItems(a, i),
					c = o(r.options.events),
					l = r.options.dblClickSpeed,
					u = [],
					f = n.getEventHandlerName(e.type),
					p = (s || {}).options;
				if ("mousemove" === e.type && (s && !s.hovering ? ["mouseenter", "mouseover"].forEach((function(t) {
						var r = n.getEventHandlerName(t),
							o = n.createMouseEvent(t, e);
						s.hovering = !0, "function" === typeof p[r] && u.push([p[r], o, s])
					})) : s || a.forEach((function(t) {
						if (t.hovering) {
							t.hovering = !1;
							var r = t.options;
							["mouseout", "mouseleave"].forEach((function(o) {
								var a = n.getEventHandlerName(o),
									i = n.createMouseEvent(o, e);
								"function" === typeof r[a] && u.push([r[a], i, t])
							}))
						}
					}))), s && c.indexOf("dblclick") > -1 && "function" === typeof p.onDblclick) {
					if ("click" === e.type && "function" === typeof p.onClick) return clearTimeout(s.clickTimeout), s.clickTimeout = setTimeout((function() {
						delete s.clickTimeout, p.onClick.call(s, e)
					}), l), e.stopImmediatePropagation(), void e.preventDefault();
					"dblclick" === e.type && s.clickTimeout && (clearTimeout(s.clickTimeout), delete s.clickTimeout)
				}
				s && "function" === typeof p[f] && 0 === u.length && u.push([p[f], e, s]), u.length > 0 && (e.stopImmediatePropagation(), e.preventDefault(), u.forEach((function(e) {
					e[0].call(e[2], e[1])
				})))
			},
			collapseHoverEvents: o
		}
	}
}, function(e, t, r) {
	e.exports = r.p + "media/images/review-fb-f13215d2.png"
}, function(e, t, r) {
	e.exports = r.p + "media/images/review-google-ff6d2ce1.png"
}, function(e, t, r) {
	e.exports = r.p + "media/images/review-yelp-6312b2e9.png"
}, , function(e, t, r) {
	var n = r(251),
		o = r(602),
		a = r(604),
		i = Math.max,
		s = Math.min;
	e.exports = function(e, t, r) {
		var c, l, u, f, p, d, h = 0,
			m = !1,
			v = !1,
			y = !0;
		if ("function" != typeof e) throw new TypeError("Expected a function");

		function b(t) {
			var r = c,
				n = l;
			return c = l = void 0, h = t, f = e.apply(n, r)
		}

		function g(e) {
			return h = e, p = setTimeout(E, t), m ? b(e) : f
		}

		function w(e) {
			var r = e - d;
			return void 0 === d || r >= t || r < 0 || v && e - h >= u
		}

		function E() {
			var e = o();
			if (w(e)) return _(e);
			p = setTimeout(E, function(e) {
				var r = t - (e - d);
				return v ? s(r, u - (e - h)) : r
			}(e))
		}

		function _(e) {
			return p = void 0, y && c ? b(e) : (c = l = void 0, f)
		}

		function O() {
			var e = o(),
				r = w(e);
			if (c = arguments, l = this, d = e, r) {
				if (void 0 === p) return g(d);
				if (v) return clearTimeout(p), p = setTimeout(E, t), b(d)
			}
			return void 0 === p && (p = setTimeout(E, t)), f
		}
		return t = a(t) || 0, n(r) && (m = !!r.leading, u = (v = "maxWait" in r) ? i(a(r.maxWait) || 0, t) : u, y = "trailing" in r ? !!r.trailing : y), O.cancel = function() {
			void 0 !== p && clearTimeout(p), h = 0, c = d = l = p = void 0
		}, O.flush = function() {
			return void 0 === p ? f : _(o())
		}, O
	}
}, function(e, t, r) {
	var n = r(383);
	e.exports = function() {
		return n.Date.now()
	}
}, function(e, t, r) {
	(function(t) {
		var r = "object" == typeof t && t && t.Object === Object && t;
		e.exports = r
	}).call(this, r(77))
}, function(e, t, r) {
	var n = r(605),
		o = r(251),
		a = r(607),
		i = /^[-+]0x[0-9a-f]+$/i,
		s = /^0b[01]+$/i,
		c = /^0o[0-7]+$/i,
		l = parseInt;
	e.exports = function(e) {
		if ("number" == typeof e) return e;
		if (a(e)) return NaN;
		if (o(e)) {
			var t = "function" == typeof e.valueOf ? e.valueOf() : e;
			e = o(t) ? t + "" : t
		}
		if ("string" != typeof e) return 0 === e ? e : +e;
		e = n(e);
		var r = s.test(e);
		return r || c.test(e) ? l(e.slice(2), r ? 2 : 8) : i.test(e) ? NaN : +e
	}
}, function(e, t, r) {
	var n = r(606),
		o = /^\s+/;
	e.exports = function(e) {
		return e ? e.slice(0, n(e) + 1).replace(o, "") : e
	}
}, function(e, t) {
	var r = /\s/;
	e.exports = function(e) {
		for (var t = e.length; t-- && r.test(e.charAt(t)););
		return t
	}
}, function(e, t, r) {
	var n = r(608),
		o = r(611);
	e.exports = function(e) {
		return "symbol" == typeof e || o(e) && "[object Symbol]" == n(e)
	}
}, function(e, t, r) {
	var n = r(384),
		o = r(609),
		a = r(610),
		i = n ? n.toStringTag : void 0;
	e.exports = function(e) {
		return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : i && i in Object(e) ? o(e) : a(e)
	}
}, function(e, t, r) {
	var n = r(384),
		o = Object.prototype,
		a = o.hasOwnProperty,
		i = o.toString,
		s = n ? n.toStringTag : void 0;
	e.exports = function(e) {
		var t = a.call(e, s),
			r = e[s];
		try {
			e[s] = void 0;
			var n = !0
		} catch (c) {}
		var o = i.call(e);
		return n && (t ? e[s] = r : delete e[s]), o
	}
}, function(e, t) {
	var r = Object.prototype.toString;
	e.exports = function(e) {
		return r.call(e)
	}
}, function(e, t) {
	e.exports = function(e) {
		return null != e && "object" == typeof e
	}
}, , function(e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = function(e, t, r, n) {
		function o(t) {
			var n = new a.default(t);
			r.call(e, n)
		}
		if (e.addEventListener) {
			var i = (s = !1, "object" === typeof n ? s = n.capture || !1 : "boolean" === typeof n && (s = n), e.addEventListener(t, o, n || !1), {
				v: {
					remove: function() {
						e.removeEventListener(t, o, s)
					}
				}
			});
			if ("object" === typeof i) return i.v
		} else if (e.attachEvent) return e.attachEvent("on" + t, o), {
			remove: function() {
				e.detachEvent("on" + t, o)
			}
		};
		var s
	};
	var n, o = r(614),
		a = (n = o) && n.__esModule ? n : {
			default: n
		};
	e.exports = t.default
}, function(e, t, r) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var o = n(r(615)),
		a = n(r(117)),
		i = ["altKey", "bubbles", "cancelable", "ctrlKey", "currentTarget", "eventPhase", "metaKey", "shiftKey", "target", "timeStamp", "view", "type"];

	function s(e) {
		return null === e || void 0 === e
	}
	var c = [{
		reg: /^key/,
		props: ["char", "charCode", "key", "keyCode", "which"],
		fix: function(e, t) {
			s(e.which) && (e.which = s(t.charCode) ? t.keyCode : t.charCode), void 0 === e.metaKey && (e.metaKey = e.ctrlKey)
		}
	}, {
		reg: /^touch/,
		props: ["touches", "changedTouches", "targetTouches"]
	}, {
		reg: /^hashchange$/,
		props: ["newURL", "oldURL"]
	}, {
		reg: /^gesturechange$/i,
		props: ["rotation", "scale"]
	}, {
		reg: /^(mousewheel|DOMMouseScroll)$/,
		props: [],
		fix: function(e, t) {
			var r = void 0,
				n = void 0,
				o = void 0,
				a = t.wheelDelta,
				i = t.axis,
				s = t.wheelDeltaY,
				c = t.wheelDeltaX,
				l = t.detail;
			a && (o = a / 120), l && (o = 0 - (l % 3 === 0 ? l / 3 : l)), void 0 !== i && (i === e.HORIZONTAL_AXIS ? (n = 0, r = 0 - o) : i === e.VERTICAL_AXIS && (r = 0, n = o)), void 0 !== s && (n = s / 120), void 0 !== c && (r = -1 * c / 120), r || n || (n = o), void 0 !== r && (e.deltaX = r), void 0 !== n && (e.deltaY = n), void 0 !== o && (e.delta = o)
		}
	}, {
		reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
		props: ["buttons", "clientX", "clientY", "button", "offsetX", "relatedTarget", "which", "fromElement", "toElement", "offsetY", "pageX", "pageY", "screenX", "screenY"],
		fix: function(e, t) {
			var r = void 0,
				n = void 0,
				o = void 0,
				a = e.target,
				i = t.button;
			return a && s(e.pageX) && !s(t.clientX) && (n = (r = a.ownerDocument || document).documentElement, o = r.body, e.pageX = t.clientX + (n && n.scrollLeft || o && o.scrollLeft || 0) - (n && n.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (n && n.scrollTop || o && o.scrollTop || 0) - (n && n.clientTop || o && o.clientTop || 0)), e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), !e.relatedTarget && e.fromElement && (e.relatedTarget = e.fromElement === a ? e.toElement : e.fromElement), e
		}
	}];

	function l() {
		return !0
	}

	function u() {
		return !1
	}

	function f(e) {
		var t = e.type,
			r = "function" === typeof e.stopPropagation || "boolean" === typeof e.cancelBubble;
		o.default.call(this), this.nativeEvent = e;
		var n = u;
		"defaultPrevented" in e ? n = e.defaultPrevented ? l : u : "getPreventDefault" in e ? n = e.getPreventDefault() ? l : u : "returnValue" in e && (n = !1 === e.returnValue ? l : u), this.isDefaultPrevented = n;
		var a = [],
			s = void 0,
			f = void 0,
			p = i.concat();
		for (c.forEach((function(e) {
				t.match(e.reg) && (p = p.concat(e.props), e.fix && a.push(e.fix))
			})), s = p.length; s;) this[f = p[--s]] = e[f];
		for (!this.target && r && (this.target = e.srcElement || document), this.target && 3 === this.target.nodeType && (this.target = this.target.parentNode), s = a.length; s;)(0, a[--s])(this, e);
		this.timeStamp = e.timeStamp || Date.now()
	}
	var p = o.default.prototype;
	(0, a.default)(f.prototype, p, {
		constructor: f,
		preventDefault: function() {
			var e = this.nativeEvent;
			e.preventDefault ? e.preventDefault() : e.returnValue = !1, p.preventDefault.call(this)
		},
		stopPropagation: function() {
			var e = this.nativeEvent;
			e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0, p.stopPropagation.call(this)
		}
	}), t.default = f, e.exports = t.default
}, function(e, t, r) {
	"use strict";

	function n() {
		return !1
	}

	function o() {
		return !0
	}

	function a() {
		this.timeStamp = Date.now(), this.target = void 0, this.currentTarget = void 0
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), a.prototype = {
		isEventObject: 1,
		constructor: a,
		isDefaultPrevented: n,
		isPropagationStopped: n,
		isImmediatePropagationStopped: n,
		preventDefault: function() {
			this.isDefaultPrevented = o
		},
		stopPropagation: function() {
			this.isPropagationStopped = o
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = o, this.stopPropagation()
		},
		halt: function(e) {
			e ? this.stopImmediatePropagation() : this.stopPropagation(), this.preventDefault()
		}
	}, t.default = a, e.exports = t.default
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return f
	}));
	var n = r(0),
		o = r.n(n),
		a = r(208);

	function i() {
		return (i = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var r = arguments[t];
				for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
			}
			return e
		}).apply(this, arguments)
	}

	function s(e) {
		return function(e) {
			if (Array.isArray(e)) return u(e)
		}(e) || function(e) {
			if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
		}(e) || l(e) || function() {
			throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function c(e, t) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) || function(e, t) {
			var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
			if (null == r) return;
			var n, o, a = [],
				i = !0,
				s = !1;
			try {
				for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
			} catch (c) {
				s = !0, o = c
			} finally {
				try {
					i || null == r.return || r.return()
				} finally {
					if (s) throw o
				}
			}
			return a
		}(e, t) || l(e, t) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function l(e, t) {
		if (e) {
			if ("string" === typeof e) return u(e, t);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? u(e, t) : void 0
		}
	}

	function u(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
		return n
	}

	function f(e) {
		var t = c(Object(n.useState)(e.statements.map((function(e, t) {
				return e.order = t, e
			}))), 2),
			r = t[0],
			l = t[1];
		return o.a.createElement(o.a.Fragment, null, o.a.createElement(a.default, {
			sortItems: function(e, t) {
				var n = s(r).map((function(r) {
					var n = i({}, r);
					return n.order === e ? n.order = t : t < e && n.order <= e && n.order >= t ? n.order = n.order + 1 : t > e && n.order >= e && n.order <= t && (n.order = n.order - 1), n
				})).sort((function(e, t) {
					return e.order - t.order
				}));
				l(n)
			},
			items: r
		}))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t);
	r(0);
	var n = r(389);
	t.default = n.default
}, function(e, t, r) {
	"use strict";
	r.r(t);
	r(0);
	var n = r(22);
	t.default = n.default
}, function(e, t, r) {
	"use strict";
	r.r(t);
	r(0);
	var n = r(78);
	t.default = n.default
}, function(e, t, r) {
	"use strict";
	r.r(t);
	r(0);
	var n = r(133);
	t.default = n.default
}, function(e, t, r) {
	"use strict";
	r.r(t);
	r(0);
	var n = r(271);
	t.default = n.default
}, function(e, t, r) {
	"use strict";
	r.r(t);
	r(0);
	var n = r(116);
	t.default = n.default
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(0),
		o = r.n(n);

	function a(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function i(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function s(e, t) {
		return (s = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function c(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = u(e);
			if (t) {
				var o = u(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return l(this, r)
		}
	}

	function l(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function u(e) {
		return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var f = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && s(e, t)
		}(u, e);
		var t, r, n, l = c(u);

		function u() {
			return a(this, u), l.apply(this, arguments)
		}
		return t = u, (r = [{
			key: "render",
			value: function() {
				return o.a.createElement("div", {
					className: "side-box side-box--status " + this.props.bgImage + " " + this.props.visible
				}, o.a.createElement("div", {
					className: "blur-box-container",
					style: {
						position: "relative"
					}
				}, o.a.createElement("div", {
					className: "blur-box"
				}, o.a.createElement("div", {
					className: "side-box__inner"
				}, o.a.createElement("h3", {
					className: "side-box__inner__wrong"
				}, "This is a timed test"), o.a.createElement("p", {
					className: "side-box__inner__text"
				}, "It cannot be paused.")), o.a.createElement("div", {
					className: "bg-copy small-content " + this.props.bgImage
				})), o.a.createElement("a", {
					onClick: this.props.onClose,
					className: "side-box__close"
				}, "\xd7")))
			}
		}]) && i(t.prototype, r), n && i(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), u
	}(o.a.Component);
	t.default = f
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return m
	}));
	var n = r(0),
		o = r.n(n),
		a = r(2),
		i = r(323),
		s = r(143),
		c = r(67);

	function l(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function u(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
		}
	}

	function f(e, t) {
		return (f = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function p(e) {
		var t = function() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var r, n = h(e);
			if (t) {
				var o = h(this).constructor;
				r = Reflect.construct(n, arguments, o)
			} else r = n.apply(this, arguments);
			return d(this, r)
		}
	}

	function d(e, t) {
		if (t && ("object" === typeof t || "function" === typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		return function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e)
	}

	function h(e) {
		return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}
	var m = function(e) {
		! function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t && f(e, t)
		}(h, e);
		var t, r, n, d = p(h);

		function h() {
			return l(this, h), d.apply(this, arguments)
		}
		return t = h, (r = [{
			key: "componentDidMount",
			value: function() {
				s.default.dispatch(Object(c.loadUserTest)(this.props.test, this.props.user))
			}
		}, {
			key: "render",
			value: function() {
				return o.a.createElement(a.a, {
					store: s.default
				}, o.a.createElement(i.default, null))
			}
		}]) && u(t.prototype, r), n && u(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), h
	}(n.Component)
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return a
	}));
	var n = r(0),
		o = r.n(n);

	function a(e) {
		var t = ["small-icon", "capsule--tests__icon"];
		return e.icon && t.push(e.icon), o.a.createElement("div", {
			className: "capsule capsule--tests",
			onClick: e.onClick
		}, o.a.createElement("span", {
			className: t.join(" ")
		}), o.a.createElement("p", {
			className: "cell auto capsule--tests__text"
		}, e.message), e.children)
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return a
	}));
	var n = r(0),
		o = r.n(n);

	function a(e) {
		return o.a.createElement("div", {
			className: "side-box__inner"
		}, o.a.createElement("h3", null, "Saved!"), o.a.createElement("div", {
			className: "grid-x"
		}, o.a.createElement("div", {
			className: "cell"
		}, o.a.createElement("p", {
			className: "side-box__inner__text"
		}, "Check your inbox to finish creating an account so you can come back whenever you need to."))))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t);
	r(0);
	var n = r(390);
	t.default = n.default
}, function(e, t, r) {
	"use strict";
	r.r(t);
	r(0);
	var n = r(165);
	t.default = n.default
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(394);
	t.default = n.default
}, function(e, t, r) {
	"use strict";
	r.r(t);
	r(0);
	var n = r(395);
	t.default = n.default
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(279);
	t.default = n.default
}, function(e, t, r) {
	"use strict";
	(function(e) {
		var t = r(71),
			n = r.n(t);

		function o(e, t) {
			return function(e) {
				if (Array.isArray(e)) return e
			}(e) || function(e, t) {
				var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
				if (null == r) return;
				var n, o, a = [],
					i = !0,
					s = !1;
				try {
					for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
				} catch (c) {
					s = !0, o = c
				} finally {
					try {
						i || null == r.return || r.return()
					} finally {
						if (s) throw o
					}
				}
				return a
			}(e, t) || function(e, t) {
				if (!e) return;
				if ("string" === typeof e) return a(e, t);
				var r = Object.prototype.toString.call(e).slice(8, -1);
				"Object" === r && e.constructor && (r = e.constructor.name);
				if ("Map" === r || "Set" === r) return Array.from(e);
				if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return a(e, t)
			}(e, t) || function() {
				throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}

		function a(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
			return n
		}
		class i {
			constructor(e, t) {
				this.ctx = e, this.options = t
			}
			shadow() {
				let e = this.options;
				if (e.shadow) {
					let t = this.ctx,
						r = e.shadow;
					const n = t.stroke;
					t.stroke = function() {
						t.save(), t.shadowColor = r.color ? r.color : "rgba(0,0,0,0.35)", t.shadowBlur = r.blur ? r.blur : 10, t.shadowOffsetX = r.offset ? r.offset.x : 0, t.shadowOffsetY = r.offset ? r.offset.y : 3, n.apply(this, arguments), t.restore()
					}
				}
			}
			drawLineHeightAnnotation(e, t, r) {
				let n = this.ctx,
					o = this.options;
				n.save(), n.beginPath(), o.noDash || n.setLineDash([10, 10]), n.moveTo(e, r), n.lineTo(e, t), n.lineWidth = o.lineWeight ? o.lineWeight : 1.5, n.strokeStyle = o.color ? o.color : "#000", n.stroke(), n.restore()
			}
		}
		class s {
			constructor(e) {
				this.chart = e
			}
			calculateHighestDataY(e) {
				let t = o(e, 6),
					r = t[0],
					n = t[1],
					a = t[2],
					i = t[3],
					s = t[4];
				return r - r * (a - s) / (i - s) + 2 * t[5] + n - 9
			}
			isTooltipActive() {
				return this.tooltip._active && this.tooltip._active.length
			}
			isPointTooHigh(e, t, r) {
				return e > t && (e = t - r), e
			}
			getPointFromDataset(e, t) {
				return e.data[t._index].y ? e.data[t._index].y : e.data[t._index]
			}
			getPointMetrics(e, t, r) {
				let n = o(r, 2),
					a = n[0],
					i = n[1];
				return t > a && (e.borderWidth ? (i = e.borderWidth, a = t - i) : a = t), [a, i]
			}
			getMaximumDimensions(e) {
				if (e.ticksAsNumbers) {
					return [e.ticksAsNumbers[0], e.ticksAsNumbers[e.ticksAsNumbers.length - 1], e.top, e.bottom]
				}
				const t = Number(e.ticks[0]);
				return [Number(e.ticks[e.ticks.length - 1]), t, e.top, e.bottom]
			}
			get options() {
				return !!this.chart.options.lineHeightAnnotation && this.chart.options.lineHeightAnnotation
			}
			get tooltip() {
				return this.chart.tooltip
			}
			get datasets() {
				return this.chart.config.data.datasets
			}
			get ticks() {
				return this.chart.scales["x-axis-0"].ticks
			}
			get chartArea() {
				return this.chart.chartArea
			}
		}
		const c = {
			id: "lineHeightAnnotation",
			afterDatasetDraw: e => {
				const t = new s(e),
					r = t.options,
					n = e.ctx,
					a = new i(n, r);
				a.shadow();
				const c = e.scales[r.xAxis ? r.xAxis : "x-axis-0"],
					l = e.scales[r.yAxis ? r.yAxis : "y-axis-0"];
				if (!l) return;
				if (!c) return;
				let u = o(t.getMaximumDimensions(l), 4),
					f = u[0],
					p = u[1],
					d = u[2],
					h = u[3];
				const m = t.datasets;
				let v = [];
				if (void 0 === r.always || r.always) {
					m.forEach((t, r) => {
						v.push(e.getDatasetMeta(r).data)
					});
					let r = t.ticks;
					for (let e = 0; e < r.length; e++) {
						let t = c.getPixelForTick(e);
						v.map(e => {
							e.filter(e => e._model.x === t).forEach(e => {
								a.drawLineHeightAnnotation(t, h, e._model.y)
							})
						})
					}
				}
				if ((r.hover || !1) && t.isTooltipActive()) {
					const e = t.tooltip._active[0],
						r = e.tooltipPosition().x;
					let n = 1,
						i = 0;
					m.forEach(r => {
						let a = t.getPointFromDataset(r, e);
						var s = o(t.getPointMetrics(r, a, [n, i]), 2);
						n = s[0], i = s[1]
					});
					let s = t.calculateHighestDataY([h, d, n, f, p, i]);
					t.isPointTooHigh(s, h, p), a.drawLineHeightAnnotation(r, h, s)
				}
			}
		};
		"function" === typeof define && r(787) || e.exports || n.a.pluginService.register(c)
	}).call(this, r(161)(e))
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return c
	}));
	var n = r(0),
		o = r.n(n),
		a = r(85),
		i = r.n(a),
		s = r(16);

	function c(e) {
		return o.a.createElement("div", {
			className: "grid-x align-center"
		}, o.a.createElement("div", {
			className: "small-12 cell text-center"
		}, o.a.createElement("img", {
			src: i.a,
			alt: "Career Hunter",
			width: "170",
			height: "19"
		}), o.a.createElement("h3", {
			className: "matches-popup__title"
		}, "You haven\u2019t completed all tests!"), o.a.createElement("p", {
			className: "matches-popup__text"
		}, "Don\u2019t miss out on finding your ideal career match"), o.a.createElement("ul", null, o.a.createElement("li", null, " Save valuable years lost in the wrong profession"), o.a.createElement("li", null, " Enhance your job satisfaction and work performance"), o.a.createElement("li", null, " Avoid costly tuition fees pursuing the wrong education"), o.a.createElement("li", null, " Satisfy your career goals and ensure your success")), o.a.createElement(s.default, {
			href: "/upgrade",
			className: "button--green--large"
		}, "Keep testing")))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t), r.d(t, "default", (function() {
		return a
	}));
	var n = r(0),
		o = r.n(n);
	r(211), r(1);

	function a(e) {
		if (!e.option) return null;
		var t = e.option.image && e.option.image.original ? {
			backgroundImage: "url(".concat(e.option.image.original, ")"),
			backgroundPosition: "center center",
			backgroundSize: "cover",
			minHeight: "300px"
		} : {};
		return o.a.createElement("div", {
			className: "tabs-content-container"
		}, o.a.createElement("div", {
			className: "grid-container no-padding"
		}, o.a.createElement("div", {
			className: "tabs-content"
		}, o.a.createElement("div", {
			className: "tabs-panel is-active "
		}, o.a.createElement("div", {
			className: "results-item-description"
		}, o.a.createElement("div", {
			className: "grid-x"
		}, o.a.createElement("div", {
			className: "medium-6 cell"
		}, o.a.createElement("h1", null, e.option.name), o.a.createElement("div", {
			dangerouslySetInnerHTML: {
				__html: e.option.description
			}
		})), o.a.createElement("div", {
			className: "medium-6 cell"
		}, o.a.createElement("div", {
			style: t
		}))))))))
	}
}, function(e, t, r) {
	"use strict";
	r.r(t);
	r(0);
	var n = r(398);
	t.default = n.default
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(291);
	t.default = n.default
}, function(e, t, r) {
	"use strict";
	r.r(t);
	var n = r(400);
	t.default = n.default
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, r) {
	var n = r(786);
	r(184).useContext(n)
}, function(e, t, r) {
	var n = {
		"./ProgressSlider": 189,
		"./ProgressSlider/": 189,
		"./ProgressSlider/Handle": 124,
		"./ProgressSlider/Handle.js": 124,
		"./ProgressSlider/Slider": 218,
		"./ProgressSlider/Slider.js": 218,
		"./ProgressSlider/common/Steps": 297,
		"./ProgressSlider/common/Steps.js": 297,
		"./ProgressSlider/common/Track": 219,
		"./ProgressSlider/common/Track.js": 219,
		"./ProgressSlider/common/createSlider": 296,
		"./ProgressSlider/common/createSlider.js": 296,
		"./ProgressSlider/index": 189,
		"./ProgressSlider/index.js": 189,
		"./ProgressSlider/utils": 23,
		"./ProgressSlider/utils.js": 23,
		"./TestSample/statements": 693,
		"./TestSample/statements.js": 693,
		"./actions/actionTypes": 11,
		"./actions/actionTypes.js": 11,
		"./actions/aptitudeTestActions": 67,
		"./actions/aptitudeTestActions.js": 67,
		"./actions/statementTestActions": 53,
		"./actions/statementTestActions.js": 53,
		"./adBanners/lazyPromo": 694,
		"./adBanners/lazyPromo.js": 694,
		"./api/careerTestAPI": 89,
		"./api/careerTestAPI.js": 89,
		"./base/baseFunctions": 159,
		"./base/baseFunctions.js": 159,
		"./base/bubble": 341,
		"./base/bubble.js": 341,
		"./base/checkbox": 695,
		"./base/checkbox.js": 695,
		"./base/popup": 31,
		"./base/popup.js": 31,
		"./base/sliderArrow": 412,
		"./base/sliderArrow.js": 412,
		"./base/termsCheckbox": 298,
		"./base/termsCheckbox.js": 298,
		"./base/useOutsideClickHandler": 696,
		"./base/useOutsideClickHandler.js": 696,
		"./buttons/HoverButton": 16,
		"./buttons/HoverButton.js": 16,
		"./buttons/getStartedButton": 697,
		"./buttons/getStartedButton.js": 697,
		"./buttons/getStartedMenuButton": 698,
		"./buttons/getStartedMenuButton.js": 698,
		"./buttons/startTestButton": 699,
		"./buttons/startTestButton.js": 699,
		"./careerTests/aptitudeTest": 323,
		"./careerTests/aptitudeTest/": 323,
		"./careerTests/aptitudeTest/exampleQuestions/page": 544,
		"./careerTests/aptitudeTest/exampleQuestions/page.js": 544,
		"./careerTests/aptitudeTest/exampleQuestions/pages": 543,
		"./careerTests/aptitudeTest/exampleQuestions/pages.js": 543,
		"./careerTests/aptitudeTest/exampleQuestions/result": 414,
		"./careerTests/aptitudeTest/exampleQuestions/result.js": 414,
		"./careerTests/aptitudeTest/index": 323,
		"./careerTests/aptitudeTest/index.js": 323,
		"./careerTests/aptitudeTest/overview": 545,
		"./careerTests/aptitudeTest/overview.js": 545,
		"./careerTests/aptitudeTest/overviewStart": 547,
		"./careerTests/aptitudeTest/overviewStart.js": 547,
		"./careerTests/aptitudeTest/questions/page": 542,
		"./careerTests/aptitudeTest/questions/page.js": 542,
		"./careerTests/aptitudeTest/questions/pages": 541,
		"./careerTests/aptitudeTest/questions/pages.js": 541,
		"./careerTests/aptitudeTest/questions/warning": 700,
		"./careerTests/aptitudeTest/questions/warning.js": 700,
		"./careerTests/aptitudeTest/radio_types/imageRadio": 239,
		"./careerTests/aptitudeTest/radio_types/imageRadio.js": 239,
		"./careerTests/aptitudeTest/radio_types/textRadio": 238,
		"./careerTests/aptitudeTest/radio_types/textRadio.js": 238,
		"./careerTests/aptitudeTest/root": 701,
		"./careerTests/aptitudeTest/root.js": 701,
		"./careerTests/aptitudeTest/start": 413,
		"./careerTests/aptitudeTest/start.js": 413,
		"./careerTests/aptitudeTest/timeOutPage": 546,
		"./careerTests/aptitudeTest/timeOutPage.js": 546,
		"./careerTests/aptitudeTest/timer": 342,
		"./careerTests/aptitudeTest/timer.js": 342,
		"./careerTests/bottomSlideoutArea": 125,
		"./careerTests/bottomSlideoutArea.js": 125,
		"./careerTests/modals/ConfirmationModal": 210,
		"./careerTests/modals/ConfirmationModal.js": 210,
		"./careerTests/modals/RetakesModal": 209,
		"./careerTests/modals/RetakesModal.js": 209,
		"./careerTests/progress": 147,
		"./careerTests/progress/": 147,
		"./careerTests/progress/index": 147,
		"./careerTests/progress/index.js": 147,
		"./careerTests/statementTest": 191,
		"./careerTests/statementTest/": 191,
		"./careerTests/statementTest/capsule": 702,
		"./careerTests/statementTest/capsule.js": 702,
		"./careerTests/statementTest/index": 191,
		"./careerTests/statementTest/index.js": 191,
		"./careerTests/statementTest/overview": 305,
		"./careerTests/statementTest/overview.js": 305,
		"./careerTests/statementTest/root": 401,
		"./careerTests/statementTest/root.js": 401,
		"./careerTests/statementTest/saveProgress": 157,
		"./careerTests/statementTest/saveProgress/": 157,
		"./careerTests/statementTest/saveProgress/enterEmail": 306,
		"./careerTests/statementTest/saveProgress/enterEmail.js": 306,
		"./careerTests/statementTest/saveProgress/index": 157,
		"./careerTests/statementTest/saveProgress/index.js": 157,
		"./careerTests/statementTest/saveProgress/saved": 703,
		"./careerTests/statementTest/saveProgress/saved.js": 703,
		"./careerTests/statementTest/start": 158,
		"./careerTests/statementTest/start.js": 158,
		"./careerTests/statementTest/statements/draggable": 208,
		"./careerTests/statementTest/statements/draggable.js": 208,
		"./careerTests/statementTest/statements/page": 304,
		"./careerTests/statementTest/statements/page.js": 304,
		"./careerTests/statementTest/statements/pages": 303,
		"./careerTests/statementTest/statements/pages.js": 303,
		"./careerTests/testsNumberTooltip": 299,
		"./careerTests/testsNumberTooltip.js": 299,
		"./careers/lazyWidget": 704,
		"./careers/lazyWidget.js": 704,
		"./careers/simpleCareers": 240,
		"./careers/simpleCareers.js": 240,
		"./careers/widget": 211,
		"./careers/widget.js": 211,
		"./currencies/DropDown": 705,
		"./currencies/DropDown.js": 705,
		"./feedback/sticker": 706,
		"./feedback/sticker.js": 706,
		"./getAccess/testState": 707,
		"./getAccess/testState.js": 707,
		"./login/afterLoginMessage": 310,
		"./login/afterLoginMessage.js": 310,
		"./login/forgotPassword": 308,
		"./login/forgotPassword.js": 308,
		"./login/login": 307,
		"./login/login.js": 307,
		"./menu/overlay": 708,
		"./menu/overlay.js": 708,
		"./progress": 440,
		"./progress/": 440,
		"./progress/index": 440,
		"./progress/index.js": 440,
		"./progress/modal/saveProgress": 220,
		"./progress/modal/saveProgress.js": 220,
		"./progress/modal/saved": 309,
		"./progress/modal/saved.js": 309,
		"./randomizedBlocks": 441,
		"./randomizedBlocks/": 441,
		"./randomizedBlocks/block": 549,
		"./randomizedBlocks/block.js": 549,
		"./randomizedBlocks/blocks": 548,
		"./randomizedBlocks/blocks.js": 548,
		"./randomizedBlocks/index": 441,
		"./randomizedBlocks/index.js": 441,
		"./reducers": 190,
		"./reducers/": 190,
		"./reducers/aptitudeTestReducer": 302,
		"./reducers/aptitudeTestReducer.js": 302,
		"./reducers/index": 190,
		"./reducers/index.js": 190,
		"./reducers/initialState": 156,
		"./reducers/initialState.js": 156,
		"./reducers/statementTestReducer": 301,
		"./reducers/statementTestReducer.js": 301,
		"./results": 442,
		"./results/": 442,
		"./results/aptitude/chart": 563,
		"./results/aptitude/chart.js": 563,
		"./results/aptitude/compare": 562,
		"./results/aptitude/compare.js": 562,
		"./results/aptitude/correctResults": 564,
		"./results/aptitude/correctResults.js": 564,
		"./results/aptitude/explanation": 561,
		"./results/aptitude/explanation.js": 561,
		"./results/aptitude/overview": 560,
		"./results/aptitude/overview.js": 560,
		"./results/aptitude/question": 565,
		"./results/aptitude/question.js": 565,
		"./results/aptitude/result": 559,
		"./results/aptitude/result.js": 559,
		"./results/aptitude/variables": 107,
		"./results/aptitude/variables.js": 107,
		"./results/careers": 174,
		"./results/careers.js": 174,
		"./results/index": 442,
		"./results/index.js": 442,
		"./results/interestExitModal": 710,
		"./results/interestExitModal.js": 710,
		"./results/paidAccessRequired": 552,
		"./results/paidAccessRequired.js": 552,
		"./results/shareResults": 142,
		"./results/shareResults.js": 142,
		"./results/statements/compareChart": 243,
		"./results/statements/compareChart.js": 243,
		"./results/statements/industries": 550,
		"./results/statements/industries.js": 550,
		"./results/statements/industriesSubmenu": 553,
		"./results/statements/industriesSubmenu.js": 553,
		"./results/statements/industryDescription": 551,
		"./results/statements/industryDescription.js": 551,
		"./results/statements/motivatorDescription": 558,
		"./results/statements/motivatorDescription.js": 558,
		"./results/statements/motivators": 557,
		"./results/statements/motivators.js": 557,
		"./results/statements/overview": 245,
		"./results/statements/overview.js": 245,
		"./results/statements/overviewChart": 259,
		"./results/statements/overviewChart.js": 259,
		"./results/statements/personalities": 555,
		"./results/statements/personalities.js": 555,
		"./results/statements/personalityDescription": 556,
		"./results/statements/personalityDescription.js": 556,
		"./results/statements/resultItemDescription": 711,
		"./results/statements/resultItemDescription.js": 711,
		"./results/statements/scoredItem": 242,
		"./results/statements/scoredItem.js": 242,
		"./results/statements/sliderBlock": 241,
		"./results/statements/sliderBlock.js": 241,
		"./results/statements/statements": 244,
		"./results/statements/statements.js": 244,
		"./results/utils": 175,
		"./results/utils.js": 175,
		"./share/popup": 712,
		"./share/popup.js": 712,
		"./store/configureStore": 300,
		"./store/configureStore.js": 300,
		"./store/store": 143,
		"./store/store.js": 143,
		"./systemUpdate/postUpdatePopup": 713,
		"./systemUpdate/postUpdatePopup.js": 713,
		"./testsProgress": 443,
		"./testsProgress/": 443,
		"./testsProgress/index": 443,
		"./testsProgress/index.js": 443,
		"./testsProgressResults": 444,
		"./testsProgressResults/": 444,
		"./testsProgressResults/index": 444,
		"./testsProgressResults/index.js": 444,
		"./user/studentRestrictionModal": 714,
		"./user/studentRestrictionModal.js": 714,
		"./utilsHoverIndicator": 554,
		"./utilsHoverIndicator.js": 554
	};

	function o(e) {
		var t = a(e);
		return r(t)
	}

	function a(e) {
		if (!r.o(n, e)) {
			var t = new Error("Cannot find module '" + e + "'");
			throw t.code = "MODULE_NOT_FOUND", t
		}
		return n[e]
	}
	o.keys = function() {
		return Object.keys(n)
	}, o.resolve = a, e.exports = o, o.id = 786
}, function(e, t) {
	(function(t) {
		e.exports = t
	}).call(this, {})
}]);