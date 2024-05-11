/*!For license information please see affiliates~career_tests~educators-c09b6bb3535aad356efa.chunk.js.LICENSE.txt*/
(window.webpackJsonp = window.webpackJsonp || []).push([
	[1], {
		589: function(t, e, n) {
			(function(t) {
				t.exports = function() {
					"use strict";
					var e, i;

					function r() {
						return e.apply(null, arguments)
					}

					function a(t) {
						return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
					}

					function o(t) {
						return null != t && "[object Object]" === Object.prototype.toString.call(t)
					}

					function s(t, e) {
						return Object.prototype.hasOwnProperty.call(t, e)
					}

					function l(t) {
						if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
						var e;
						for (e in t)
							if (s(t, e)) return !1;
						return !0
					}

					function u(t) {
						return void 0 === t
					}

					function d(t) {
						return "number" === typeof t || "[object Number]" === Object.prototype.toString.call(t)
					}

					function h(t) {
						return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
					}

					function c(t, e) {
						var n, i = [],
							r = t.length;
						for (n = 0; n < r; ++n) i.push(e(t[n], n));
						return i
					}

					function f(t, e) {
						for (var n in e) s(e, n) && (t[n] = e[n]);
						return s(e, "toString") && (t.toString = e.toString), s(e, "valueOf") && (t.valueOf = e.valueOf), t
					}

					function g(t, e, n, i) {
						return Se(t, e, n, i, !0).utc()
					}

					function m(t) {
						return null == t._pf && (t._pf = {
							empty: !1,
							unusedTokens: [],
							unusedInput: [],
							overflow: -2,
							charsLeftOver: 0,
							nullInput: !1,
							invalidEra: null,
							invalidMonth: null,
							invalidFormat: !1,
							userInvalidated: !1,
							iso: !1,
							parsedDateParts: [],
							era: null,
							meridiem: null,
							rfc2822: !1,
							weekdayMismatch: !1
						}), t._pf
					}

					function p(t) {
						if (null == t._isValid) {
							var e = m(t),
								n = i.call(e.parsedDateParts, (function(t) {
									return null != t
								})),
								r = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidEra && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n);
							if (t._strict && (r = r && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return r;
							t._isValid = r
						}
						return t._isValid
					}

					function v(t) {
						var e = g(NaN);
						return null != t ? f(m(e), t) : m(e).userInvalidated = !0, e
					}
					i = Array.prototype.some ? Array.prototype.some : function(t) {
						var e, n = Object(this),
							i = n.length >>> 0;
						for (e = 0; e < i; e++)
							if (e in n && t.call(this, n[e], e, n)) return !0;
						return !1
					};
					var y = r.momentProperties = [],
						b = !1;

					function x(t, e) {
						var n, i, r, a = y.length;
						if (u(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), u(e._i) || (t._i = e._i), u(e._f) || (t._f = e._f), u(e._l) || (t._l = e._l), u(e._strict) || (t._strict = e._strict), u(e._tzm) || (t._tzm = e._tzm), u(e._isUTC) || (t._isUTC = e._isUTC), u(e._offset) || (t._offset = e._offset), u(e._pf) || (t._pf = m(e)), u(e._locale) || (t._locale = e._locale), a > 0)
							for (n = 0; n < a; n++) u(r = e[i = y[n]]) || (t[i] = r);
						return t
					}

					function _(t) {
						x(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === b && (b = !0, r.updateOffset(this), b = !1)
					}

					function w(t) {
						return t instanceof _ || null != t && null != t._isAMomentObject
					}

					function k(t) {
						!1 === r.suppressDeprecationWarnings && "undefined" !== typeof console && console.warn && console.warn("Deprecation warning: " + t)
					}

					function M(t, e) {
						var n = !0;
						return f((function() {
							if (null != r.deprecationHandler && r.deprecationHandler(null, t), n) {
								var i, a, o, l = [],
									u = arguments.length;
								for (a = 0; a < u; a++) {
									if (i = "", "object" === typeof arguments[a]) {
										for (o in i += "\n[" + a + "] ", arguments[0]) s(arguments[0], o) && (i += o + ": " + arguments[0][o] + ", ");
										i = i.slice(0, -2)
									} else i = arguments[a];
									l.push(i)
								}
								k(t + "\nArguments: " + Array.prototype.slice.call(l).join("") + "\n" + (new Error).stack), n = !1
							}
							return e.apply(this, arguments)
						}), e)
					}
					var S, D = {};

					function C(t, e) {
						null != r.deprecationHandler && r.deprecationHandler(t, e), D[t] || (k(e), D[t] = !0)
					}

					function P(t) {
						return "undefined" !== typeof Function && t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
					}

					function T(t, e) {
						var n, i = f({}, t);
						for (n in e) s(e, n) && (o(t[n]) && o(e[n]) ? (i[n] = {}, f(i[n], t[n]), f(i[n], e[n])) : null != e[n] ? i[n] = e[n] : delete i[n]);
						for (n in t) s(t, n) && !s(e, n) && o(t[n]) && (i[n] = f({}, i[n]));
						return i
					}

					function O(t) {
						null != t && this.set(t)
					}

					function A(t, e, n) {
						var i = "" + Math.abs(t),
							r = e - i.length;
						return (t >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i
					}
					r.suppressDeprecationWarnings = !1, r.deprecationHandler = null, S = Object.keys ? Object.keys : function(t) {
						var e, n = [];
						for (e in t) s(t, e) && n.push(e);
						return n
					};
					var F = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
						I = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
						N = {},
						R = {};

					function L(t, e, n, i) {
						var r = i;
						"string" === typeof i && (r = function() {
							return this[i]()
						}), t && (R[t] = r), e && (R[e[0]] = function() {
							return A(r.apply(this, arguments), e[1], e[2])
						}), n && (R[n] = function() {
							return this.localeData().ordinal(r.apply(this, arguments), t)
						})
					}

					function Y(t, e) {
						return t.isValid() ? (e = W(e, t.localeData()), N[e] = N[e] || function(t) {
							var e, n, i, r = t.match(F);
							for (e = 0, n = r.length; e < n; e++) R[r[e]] ? r[e] = R[r[e]] : r[e] = (i = r[e]).match(/\[[\s\S]/) ? i.replace(/^\[|\]$/g, "") : i.replace(/\\/g, "");
							return function(e) {
								var i, a = "";
								for (i = 0; i < n; i++) a += P(r[i]) ? r[i].call(e, t) : r[i];
								return a
							}
						}(e), N[e](t)) : t.localeData().invalidDate()
					}

					function W(t, e) {
						var n = 5;

						function i(t) {
							return e.longDateFormat(t) || t
						}
						for (I.lastIndex = 0; n >= 0 && I.test(t);) t = t.replace(I, i), I.lastIndex = 0, n -= 1;
						return t
					}
					var E = {};

					function z(t, e) {
						var n = t.toLowerCase();
						E[n] = E[n + "s"] = E[e] = t
					}

					function V(t) {
						return "string" === typeof t ? E[t] || E[t.toLowerCase()] : void 0
					}

					function B(t) {
						var e, n, i = {};
						for (n in t) s(t, n) && (e = V(n)) && (i[e] = t[n]);
						return i
					}
					var H = {};

					function j(t, e) {
						H[t] = e
					}

					function U(t) {
						return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
					}

					function G(t) {
						return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
					}

					function q(t) {
						var e = +t,
							n = 0;
						return 0 !== e && isFinite(e) && (n = G(e)), n
					}

					function Z(t, e) {
						return function(n) {
							return null != n ? (X(this, t, n), r.updateOffset(this, e), this) : $(this, t)
						}
					}

					function $(t, e) {
						return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
					}

					function X(t, e, n) {
						t.isValid() && !isNaN(n) && ("FullYear" === e && U(t.year()) && 1 === t.month() && 29 === t.date() ? (n = q(n), t._d["set" + (t._isUTC ? "UTC" : "") + e](n, t.month(), wt(n, t.month()))) : t._d["set" + (t._isUTC ? "UTC" : "") + e](n))
					}
					var K, J = /\d/,
						Q = /\d\d/,
						tt = /\d{3}/,
						et = /\d{4}/,
						nt = /[+-]?\d{6}/,
						it = /\d\d?/,
						rt = /\d\d\d\d?/,
						at = /\d\d\d\d\d\d?/,
						ot = /\d{1,3}/,
						st = /\d{1,4}/,
						lt = /[+-]?\d{1,6}/,
						ut = /\d+/,
						dt = /[+-]?\d+/,
						ht = /Z|[+-]\d\d:?\d\d/gi,
						ct = /Z|[+-]\d\d(?::?\d\d)?/gi,
						ft = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

					function gt(t, e, n) {
						K[t] = P(e) ? e : function(t, i) {
							return t && n ? n : e
						}
					}

					function mt(t, e) {
						return s(K, t) ? K[t](e._strict, e._locale) : new RegExp(pt(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function(t, e, n, i, r) {
							return e || n || i || r
						}))))
					}

					function pt(t) {
						return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
					}
					K = {};
					var vt, yt = {};

					function bt(t, e) {
						var n, i, r = e;
						for ("string" === typeof t && (t = [t]), d(e) && (r = function(t, n) {
								n[e] = q(t)
							}), i = t.length, n = 0; n < i; n++) yt[t[n]] = r
					}

					function xt(t, e) {
						bt(t, (function(t, n, i, r) {
							i._w = i._w || {}, e(t, i._w, i, r)
						}))
					}

					function _t(t, e, n) {
						null != e && s(yt, t) && yt[t](e, n._a, n, t)
					}

					function wt(t, e) {
						if (isNaN(t) || isNaN(e)) return NaN;
						var n, i = (e % (n = 12) + n) % n;
						return t += (e - i) / 12, 1 === i ? U(t) ? 29 : 28 : 31 - i % 7 % 2
					}
					vt = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
						var e;
						for (e = 0; e < this.length; ++e)
							if (this[e] === t) return e;
						return -1
					}, L("M", ["MM", 2], "Mo", (function() {
						return this.month() + 1
					})), L("MMM", 0, 0, (function(t) {
						return this.localeData().monthsShort(this, t)
					})), L("MMMM", 0, 0, (function(t) {
						return this.localeData().months(this, t)
					})), z("month", "M"), j("month", 8), gt("M", it), gt("MM", it, Q), gt("MMM", (function(t, e) {
						return e.monthsShortRegex(t)
					})), gt("MMMM", (function(t, e) {
						return e.monthsRegex(t)
					})), bt(["M", "MM"], (function(t, e) {
						e[1] = q(t) - 1
					})), bt(["MMM", "MMMM"], (function(t, e, n, i) {
						var r = n._locale.monthsParse(t, i, n._strict);
						null != r ? e[1] = r : m(n).invalidMonth = t
					}));
					var kt = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
						Mt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
						St = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
						Dt = ft,
						Ct = ft;

					function Pt(t, e, n) {
						var i, r, a, o = t.toLocaleLowerCase();
						if (!this._monthsParse)
							for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i) a = g([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(a, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(a, "").toLocaleLowerCase();
						return n ? "MMM" === e ? -1 !== (r = vt.call(this._shortMonthsParse, o)) ? r : null : -1 !== (r = vt.call(this._longMonthsParse, o)) ? r : null : "MMM" === e ? -1 !== (r = vt.call(this._shortMonthsParse, o)) || -1 !== (r = vt.call(this._longMonthsParse, o)) ? r : null : -1 !== (r = vt.call(this._longMonthsParse, o)) || -1 !== (r = vt.call(this._shortMonthsParse, o)) ? r : null
					}

					function Tt(t, e) {
						var n;
						if (!t.isValid()) return t;
						if ("string" === typeof e)
							if (/^\d+$/.test(e)) e = q(e);
							else if (!d(e = t.localeData().monthsParse(e))) return t;
						return n = Math.min(t.date(), wt(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t
					}

					function Ot(t) {
						return null != t ? (Tt(this, t), r.updateOffset(this, !0), this) : $(this, "Month")
					}

					function At() {
						function t(t, e) {
							return e.length - t.length
						}
						var e, n, i = [],
							r = [],
							a = [];
						for (e = 0; e < 12; e++) n = g([2e3, e]), i.push(this.monthsShort(n, "")), r.push(this.months(n, "")), a.push(this.months(n, "")), a.push(this.monthsShort(n, ""));
						for (i.sort(t), r.sort(t), a.sort(t), e = 0; e < 12; e++) i[e] = pt(i[e]), r[e] = pt(r[e]);
						for (e = 0; e < 24; e++) a[e] = pt(a[e]);
						this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
					}

					function Ft(t) {
						return U(t) ? 366 : 365
					}
					L("Y", 0, 0, (function() {
						var t = this.year();
						return t <= 9999 ? A(t, 4) : "+" + t
					})), L(0, ["YY", 2], 0, (function() {
						return this.year() % 100
					})), L(0, ["YYYY", 4], 0, "year"), L(0, ["YYYYY", 5], 0, "year"), L(0, ["YYYYYY", 6, !0], 0, "year"), z("year", "y"), j("year", 1), gt("Y", dt), gt("YY", it, Q), gt("YYYY", st, et), gt("YYYYY", lt, nt), gt("YYYYYY", lt, nt), bt(["YYYYY", "YYYYYY"], 0), bt("YYYY", (function(t, e) {
						e[0] = 2 === t.length ? r.parseTwoDigitYear(t) : q(t)
					})), bt("YY", (function(t, e) {
						e[0] = r.parseTwoDigitYear(t)
					})), bt("Y", (function(t, e) {
						e[0] = parseInt(t, 10)
					})), r.parseTwoDigitYear = function(t) {
						return q(t) + (q(t) > 68 ? 1900 : 2e3)
					};
					var It = Z("FullYear", !0);

					function Nt(t, e, n, i, r, a, o) {
						var s;
						return t < 100 && t >= 0 ? (s = new Date(t + 400, e, n, i, r, a, o), isFinite(s.getFullYear()) && s.setFullYear(t)) : s = new Date(t, e, n, i, r, a, o), s
					}

					function Rt(t) {
						var e, n;
						return t < 100 && t >= 0 ? ((n = Array.prototype.slice.call(arguments))[0] = t + 400, e = new Date(Date.UTC.apply(null, n)), isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t)) : e = new Date(Date.UTC.apply(null, arguments)), e
					}

					function Lt(t, e, n) {
						var i = 7 + e - n;
						return -(7 + Rt(t, 0, i).getUTCDay() - e) % 7 + i - 1
					}

					function Yt(t, e, n, i, r) {
						var a, o, s = 1 + 7 * (e - 1) + (7 + n - i) % 7 + Lt(t, i, r);
						return s <= 0 ? o = Ft(a = t - 1) + s : s > Ft(t) ? (a = t + 1, o = s - Ft(t)) : (a = t, o = s), {
							year: a,
							dayOfYear: o
						}
					}

					function Wt(t, e, n) {
						var i, r, a = Lt(t.year(), e, n),
							o = Math.floor((t.dayOfYear() - a - 1) / 7) + 1;
						return o < 1 ? i = o + Et(r = t.year() - 1, e, n) : o > Et(t.year(), e, n) ? (i = o - Et(t.year(), e, n), r = t.year() + 1) : (r = t.year(), i = o), {
							week: i,
							year: r
						}
					}

					function Et(t, e, n) {
						var i = Lt(t, e, n),
							r = Lt(t + 1, e, n);
						return (Ft(t) - i + r) / 7
					}

					function zt(t, e) {
						return t.slice(e, 7).concat(t.slice(0, e))
					}
					L("w", ["ww", 2], "wo", "week"), L("W", ["WW", 2], "Wo", "isoWeek"), z("week", "w"), z("isoWeek", "W"), j("week", 5), j("isoWeek", 5), gt("w", it), gt("ww", it, Q), gt("W", it), gt("WW", it, Q), xt(["w", "ww", "W", "WW"], (function(t, e, n, i) {
						e[i.substr(0, 1)] = q(t)
					})), L("d", 0, "do", "day"), L("dd", 0, 0, (function(t) {
						return this.localeData().weekdaysMin(this, t)
					})), L("ddd", 0, 0, (function(t) {
						return this.localeData().weekdaysShort(this, t)
					})), L("dddd", 0, 0, (function(t) {
						return this.localeData().weekdays(this, t)
					})), L("e", 0, 0, "weekday"), L("E", 0, 0, "isoWeekday"), z("day", "d"), z("weekday", "e"), z("isoWeekday", "E"), j("day", 11), j("weekday", 11), j("isoWeekday", 11), gt("d", it), gt("e", it), gt("E", it), gt("dd", (function(t, e) {
						return e.weekdaysMinRegex(t)
					})), gt("ddd", (function(t, e) {
						return e.weekdaysShortRegex(t)
					})), gt("dddd", (function(t, e) {
						return e.weekdaysRegex(t)
					})), xt(["dd", "ddd", "dddd"], (function(t, e, n, i) {
						var r = n._locale.weekdaysParse(t, i, n._strict);
						null != r ? e.d = r : m(n).invalidWeekday = t
					})), xt(["d", "e", "E"], (function(t, e, n, i) {
						e[i] = q(t)
					}));
					var Vt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
						Bt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
						Ht = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
						jt = ft,
						Ut = ft,
						Gt = ft;

					function qt(t, e, n) {
						var i, r, a, o = t.toLocaleLowerCase();
						if (!this._weekdaysParse)
							for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i) a = g([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(a, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(a, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(a, "").toLocaleLowerCase();
						return n ? "dddd" === e ? -1 !== (r = vt.call(this._weekdaysParse, o)) ? r : null : "ddd" === e ? -1 !== (r = vt.call(this._shortWeekdaysParse, o)) ? r : null : -1 !== (r = vt.call(this._minWeekdaysParse, o)) ? r : null : "dddd" === e ? -1 !== (r = vt.call(this._weekdaysParse, o)) || -1 !== (r = vt.call(this._shortWeekdaysParse, o)) || -1 !== (r = vt.call(this._minWeekdaysParse, o)) ? r : null : "ddd" === e ? -1 !== (r = vt.call(this._shortWeekdaysParse, o)) || -1 !== (r = vt.call(this._weekdaysParse, o)) || -1 !== (r = vt.call(this._minWeekdaysParse, o)) ? r : null : -1 !== (r = vt.call(this._minWeekdaysParse, o)) || -1 !== (r = vt.call(this._weekdaysParse, o)) || -1 !== (r = vt.call(this._shortWeekdaysParse, o)) ? r : null
					}

					function Zt() {
						function t(t, e) {
							return e.length - t.length
						}
						var e, n, i, r, a, o = [],
							s = [],
							l = [],
							u = [];
						for (e = 0; e < 7; e++) n = g([2e3, 1]).day(e), i = pt(this.weekdaysMin(n, "")), r = pt(this.weekdaysShort(n, "")), a = pt(this.weekdays(n, "")), o.push(i), s.push(r), l.push(a), u.push(i), u.push(r), u.push(a);
						o.sort(t), s.sort(t), l.sort(t), u.sort(t), this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i")
					}

					function $t() {
						return this.hours() % 12 || 12
					}

					function Xt(t, e) {
						L(t, 0, 0, (function() {
							return this.localeData().meridiem(this.hours(), this.minutes(), e)
						}))
					}

					function Kt(t, e) {
						return e._meridiemParse
					}
					L("H", ["HH", 2], 0, "hour"), L("h", ["hh", 2], 0, $t), L("k", ["kk", 2], 0, (function() {
						return this.hours() || 24
					})), L("hmm", 0, 0, (function() {
						return "" + $t.apply(this) + A(this.minutes(), 2)
					})), L("hmmss", 0, 0, (function() {
						return "" + $t.apply(this) + A(this.minutes(), 2) + A(this.seconds(), 2)
					})), L("Hmm", 0, 0, (function() {
						return "" + this.hours() + A(this.minutes(), 2)
					})), L("Hmmss", 0, 0, (function() {
						return "" + this.hours() + A(this.minutes(), 2) + A(this.seconds(), 2)
					})), Xt("a", !0), Xt("A", !1), z("hour", "h"), j("hour", 13), gt("a", Kt), gt("A", Kt), gt("H", it), gt("h", it), gt("k", it), gt("HH", it, Q), gt("hh", it, Q), gt("kk", it, Q), gt("hmm", rt), gt("hmmss", at), gt("Hmm", rt), gt("Hmmss", at), bt(["H", "HH"], 3), bt(["k", "kk"], (function(t, e, n) {
						var i = q(t);
						e[3] = 24 === i ? 0 : i
					})), bt(["a", "A"], (function(t, e, n) {
						n._isPm = n._locale.isPM(t), n._meridiem = t
					})), bt(["h", "hh"], (function(t, e, n) {
						e[3] = q(t), m(n).bigHour = !0
					})), bt("hmm", (function(t, e, n) {
						var i = t.length - 2;
						e[3] = q(t.substr(0, i)), e[4] = q(t.substr(i)), m(n).bigHour = !0
					})), bt("hmmss", (function(t, e, n) {
						var i = t.length - 4,
							r = t.length - 2;
						e[3] = q(t.substr(0, i)), e[4] = q(t.substr(i, 2)), e[5] = q(t.substr(r)), m(n).bigHour = !0
					})), bt("Hmm", (function(t, e, n) {
						var i = t.length - 2;
						e[3] = q(t.substr(0, i)), e[4] = q(t.substr(i))
					})), bt("Hmmss", (function(t, e, n) {
						var i = t.length - 4,
							r = t.length - 2;
						e[3] = q(t.substr(0, i)), e[4] = q(t.substr(i, 2)), e[5] = q(t.substr(r))
					}));
					var Jt, Qt = Z("Hours", !0),
						te = {
							calendar: {
								sameDay: "[Today at] LT",
								nextDay: "[Tomorrow at] LT",
								nextWeek: "dddd [at] LT",
								lastDay: "[Yesterday at] LT",
								lastWeek: "[Last] dddd [at] LT",
								sameElse: "L"
							},
							longDateFormat: {
								LTS: "h:mm:ss A",
								LT: "h:mm A",
								L: "MM/DD/YYYY",
								LL: "MMMM D, YYYY",
								LLL: "MMMM D, YYYY h:mm A",
								LLLL: "dddd, MMMM D, YYYY h:mm A"
							},
							invalidDate: "Invalid date",
							ordinal: "%d",
							dayOfMonthOrdinalParse: /\d{1,2}/,
							relativeTime: {
								future: "in %s",
								past: "%s ago",
								s: "a few seconds",
								ss: "%d seconds",
								m: "a minute",
								mm: "%d minutes",
								h: "an hour",
								hh: "%d hours",
								d: "a day",
								dd: "%d days",
								w: "a week",
								ww: "%d weeks",
								M: "a month",
								MM: "%d months",
								y: "a year",
								yy: "%d years"
							},
							months: kt,
							monthsShort: Mt,
							week: {
								dow: 0,
								doy: 6
							},
							weekdays: Vt,
							weekdaysMin: Ht,
							weekdaysShort: Bt,
							meridiemParse: /[ap]\.?m?\.?/i
						},
						ee = {},
						ne = {};

					function ie(t, e) {
						var n, i = Math.min(t.length, e.length);
						for (n = 0; n < i; n += 1)
							if (t[n] !== e[n]) return n;
						return i
					}

					function re(t) {
						return t ? t.toLowerCase().replace("_", "-") : t
					}

					function ae(e) {
						var i = null;
						if (void 0 === ee[e] && "undefined" !== typeof t && t && t.exports && function(t) {
								return null != t.match("^[^/\\\\]*$")
							}(e)) try {
							i = Jt._abbr, n(591)("./" + e), oe(i)
						} catch (r) {
							ee[e] = null
						}
						return ee[e]
					}

					function oe(t, e) {
						var n;
						return t && ((n = u(e) ? le(t) : se(t, e)) ? Jt = n : "undefined" !== typeof console && console.warn && console.warn("Locale " + t + " not found. Did you forget to load it?")), Jt._abbr
					}

					function se(t, e) {
						if (null !== e) {
							var n, i = te;
							if (e.abbr = t, null != ee[t]) C("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), i = ee[t]._config;
							else if (null != e.parentLocale)
								if (null != ee[e.parentLocale]) i = ee[e.parentLocale]._config;
								else {
									if (null == (n = ae(e.parentLocale))) return ne[e.parentLocale] || (ne[e.parentLocale] = []), ne[e.parentLocale].push({
										name: t,
										config: e
									}), null;
									i = n._config
								} return ee[t] = new O(T(i, e)), ne[t] && ne[t].forEach((function(t) {
								se(t.name, t.config)
							})), oe(t), ee[t]
						}
						return delete ee[t], null
					}

					function le(t) {
						var e;
						if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return Jt;
						if (!a(t)) {
							if (e = ae(t)) return e;
							t = [t]
						}
						return function(t) {
							for (var e, n, i, r, a = 0; a < t.length;) {
								for (e = (r = re(t[a]).split("-")).length, n = (n = re(t[a + 1])) ? n.split("-") : null; e > 0;) {
									if (i = ae(r.slice(0, e).join("-"))) return i;
									if (n && n.length >= e && ie(r, n) >= e - 1) break;
									e--
								}
								a++
							}
							return Jt
						}(t)
					}

					function ue(t) {
						var e, n = t._a;
						return n && -2 === m(t).overflow && (e = n[1] < 0 || n[1] > 11 ? 1 : n[2] < 1 || n[2] > wt(n[0], n[1]) ? 2 : n[3] < 0 || n[3] > 24 || 24 === n[3] && (0 !== n[4] || 0 !== n[5] || 0 !== n[6]) ? 3 : n[4] < 0 || n[4] > 59 ? 4 : n[5] < 0 || n[5] > 59 ? 5 : n[6] < 0 || n[6] > 999 ? 6 : -1, m(t)._overflowDayOfYear && (e < 0 || e > 2) && (e = 2), m(t)._overflowWeeks && -1 === e && (e = 7), m(t)._overflowWeekday && -1 === e && (e = 8), m(t).overflow = e), t
					}
					var de = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
						he = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
						ce = /Z|[+-]\d\d(?::?\d\d)?/,
						fe = [
							["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
							["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
							["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
							["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
							["YYYY-DDD", /\d{4}-\d{3}/],
							["YYYY-MM", /\d{4}-\d\d/, !1],
							["YYYYYYMMDD", /[+-]\d{10}/],
							["YYYYMMDD", /\d{8}/],
							["GGGG[W]WWE", /\d{4}W\d{3}/],
							["GGGG[W]WW", /\d{4}W\d{2}/, !1],
							["YYYYDDD", /\d{7}/],
							["YYYYMM", /\d{6}/, !1],
							["YYYY", /\d{4}/, !1]
						],
						ge = [
							["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
							["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
							["HH:mm:ss", /\d\d:\d\d:\d\d/],
							["HH:mm", /\d\d:\d\d/],
							["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
							["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
							["HHmmss", /\d\d\d\d\d\d/],
							["HHmm", /\d\d\d\d/],
							["HH", /\d\d/]
						],
						me = /^\/?Date\((-?\d+)/i,
						pe = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
						ve = {
							UT: 0,
							GMT: 0,
							EDT: -240,
							EST: -300,
							CDT: -300,
							CST: -360,
							MDT: -360,
							MST: -420,
							PDT: -420,
							PST: -480
						};

					function ye(t) {
						var e, n, i, r, a, o, s = t._i,
							l = de.exec(s) || he.exec(s),
							u = fe.length,
							d = ge.length;
						if (l) {
							for (m(t).iso = !0, e = 0, n = u; e < n; e++)
								if (fe[e][1].exec(l[1])) {
									r = fe[e][0], i = !1 !== fe[e][2];
									break
								} if (null == r) return void(t._isValid = !1);
							if (l[3]) {
								for (e = 0, n = d; e < n; e++)
									if (ge[e][1].exec(l[3])) {
										a = (l[2] || " ") + ge[e][0];
										break
									} if (null == a) return void(t._isValid = !1)
							}
							if (!i && null != a) return void(t._isValid = !1);
							if (l[4]) {
								if (!ce.exec(l[4])) return void(t._isValid = !1);
								o = "Z"
							}
							t._f = r + (a || "") + (o || ""), ke(t)
						} else t._isValid = !1
					}

					function be(t) {
						var e = parseInt(t, 10);
						return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e
					}

					function xe(t) {
						var e, n, i, r, a, o, s, l, u = pe.exec(t._i.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
						if (u) {
							if (n = u[4], i = u[3], r = u[2], a = u[5], o = u[6], s = u[7], l = [be(n), Mt.indexOf(i), parseInt(r, 10), parseInt(a, 10), parseInt(o, 10)], s && l.push(parseInt(s, 10)), e = l, ! function(t, e, n) {
									return !t || Bt.indexOf(t) === new Date(e[0], e[1], e[2]).getDay() || (m(n).weekdayMismatch = !0, n._isValid = !1, !1)
								}(u[1], e, t)) return;
							t._a = e, t._tzm = function(t, e, n) {
								if (t) return ve[t];
								if (e) return 0;
								var i = parseInt(n, 10),
									r = i % 100;
								return (i - r) / 100 * 60 + r
							}(u[8], u[9], u[10]), t._d = Rt.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), m(t).rfc2822 = !0
						} else t._isValid = !1
					}

					function _e(t, e, n) {
						return null != t ? t : null != e ? e : n
					}

					function we(t) {
						var e, n, i, a, o, s = [];
						if (!t._d) {
							for (i = function(t) {
									var e = new Date(r.now());
									return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
								}(t), t._w && null == t._a[2] && null == t._a[1] && function(t) {
									var e, n, i, r, a, o, s, l, u;
									null != (e = t._w).GG || null != e.W || null != e.E ? (a = 1, o = 4, n = _e(e.GG, t._a[0], Wt(De(), 1, 4).year), i = _e(e.W, 1), ((r = _e(e.E, 1)) < 1 || r > 7) && (l = !0)) : (a = t._locale._week.dow, o = t._locale._week.doy, u = Wt(De(), a, o), n = _e(e.gg, t._a[0], u.year), i = _e(e.w, u.week), null != e.d ? ((r = e.d) < 0 || r > 6) && (l = !0) : null != e.e ? (r = e.e + a, (e.e < 0 || e.e > 6) && (l = !0)) : r = a), i < 1 || i > Et(n, a, o) ? m(t)._overflowWeeks = !0 : null != l ? m(t)._overflowWeekday = !0 : (s = Yt(n, i, r, a, o), t._a[0] = s.year, t._dayOfYear = s.dayOfYear)
								}(t), null != t._dayOfYear && (o = _e(t._a[0], i[0]), (t._dayOfYear > Ft(o) || 0 === t._dayOfYear) && (m(t)._overflowDayOfYear = !0), n = Rt(o, 0, t._dayOfYear), t._a[1] = n.getUTCMonth(), t._a[2] = n.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = s[e] = i[e];
							for (; e < 7; e++) t._a[e] = s[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
							24 === t._a[3] && 0 === t._a[4] && 0 === t._a[5] && 0 === t._a[6] && (t._nextDay = !0, t._a[3] = 0), t._d = (t._useUTC ? Rt : Nt).apply(null, s), a = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[3] = 24), t._w && "undefined" !== typeof t._w.d && t._w.d !== a && (m(t).weekdayMismatch = !0)
						}
					}

					function ke(t) {
						if (t._f !== r.ISO_8601)
							if (t._f !== r.RFC_2822) {
								t._a = [], m(t).empty = !0;
								var e, n, i, a, o, s, l, u = "" + t._i,
									d = u.length,
									h = 0;
								for (l = (i = W(t._f, t._locale).match(F) || []).length, e = 0; e < l; e++) a = i[e], (n = (u.match(mt(a, t)) || [])[0]) && ((o = u.substr(0, u.indexOf(n))).length > 0 && m(t).unusedInput.push(o), u = u.slice(u.indexOf(n) + n.length), h += n.length), R[a] ? (n ? m(t).empty = !1 : m(t).unusedTokens.push(a), _t(a, n, t)) : t._strict && !n && m(t).unusedTokens.push(a);
								m(t).charsLeftOver = d - h, u.length > 0 && m(t).unusedInput.push(u), t._a[3] <= 12 && !0 === m(t).bigHour && t._a[3] > 0 && (m(t).bigHour = void 0), m(t).parsedDateParts = t._a.slice(0), m(t).meridiem = t._meridiem, t._a[3] = function(t, e, n) {
									var i;
									return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? ((i = t.isPM(n)) && e < 12 && (e += 12), i || 12 !== e || (e = 0), e) : e
								}(t._locale, t._a[3], t._meridiem), null !== (s = m(t).era) && (t._a[0] = t._locale.erasConvertYear(s, t._a[0])), we(t), ue(t)
							} else xe(t);
						else ye(t)
					}

					function Me(t) {
						var e = t._i,
							n = t._f;
						return t._locale = t._locale || le(t._l), null === e || void 0 === n && "" === e ? v({
							nullInput: !0
						}) : ("string" === typeof e && (t._i = e = t._locale.preparse(e)), w(e) ? new _(ue(e)) : (h(e) ? t._d = e : a(n) ? function(t) {
							var e, n, i, r, a, o, s = !1,
								l = t._f.length;
							if (0 === l) return m(t).invalidFormat = !0, void(t._d = new Date(NaN));
							for (r = 0; r < l; r++) a = 0, o = !1, e = x({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[r], ke(e), p(e) && (o = !0), a += m(e).charsLeftOver, a += 10 * m(e).unusedTokens.length, m(e).score = a, s ? a < i && (i = a, n = e) : (null == i || a < i || o) && (i = a, n = e, o && (s = !0));
							f(t, n || e)
						}(t) : n ? ke(t) : function(t) {
							var e = t._i;
							u(e) ? t._d = new Date(r.now()) : h(e) ? t._d = new Date(e.valueOf()) : "string" === typeof e ? function(t) {
								var e = me.exec(t._i);
								null === e ? (ye(t), !1 === t._isValid && (delete t._isValid, xe(t), !1 === t._isValid && (delete t._isValid, t._strict ? t._isValid = !1 : r.createFromInputFallback(t)))) : t._d = new Date(+e[1])
							}(t) : a(e) ? (t._a = c(e.slice(0), (function(t) {
								return parseInt(t, 10)
							})), we(t)) : o(e) ? function(t) {
								if (!t._d) {
									var e = B(t._i),
										n = void 0 === e.day ? e.date : e.day;
									t._a = c([e.year, e.month, n, e.hour, e.minute, e.second, e.millisecond], (function(t) {
										return t && parseInt(t, 10)
									})), we(t)
								}
							}(t) : d(e) ? t._d = new Date(e) : r.createFromInputFallback(t)
						}(t), p(t) || (t._d = null), t))
					}

					function Se(t, e, n, i, r) {
						var s, u = {};
						return !0 !== e && !1 !== e || (i = e, e = void 0), !0 !== n && !1 !== n || (i = n, n = void 0), (o(t) && l(t) || a(t) && 0 === t.length) && (t = void 0), u._isAMomentObject = !0, u._useUTC = u._isUTC = r, u._l = n, u._i = t, u._f = e, u._strict = i, (s = new _(ue(Me(u))))._nextDay && (s.add(1, "d"), s._nextDay = void 0), s
					}

					function De(t, e, n, i) {
						return Se(t, e, n, i, !1)
					}
					r.createFromInputFallback = M("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function(t) {
						t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
					})), r.ISO_8601 = function() {}, r.RFC_2822 = function() {};
					var Ce = M("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
							var t = De.apply(null, arguments);
							return this.isValid() && t.isValid() ? t < this ? this : t : v()
						})),
						Pe = M("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
							var t = De.apply(null, arguments);
							return this.isValid() && t.isValid() ? t > this ? this : t : v()
						}));

					function Te(t, e) {
						var n, i;
						if (1 === e.length && a(e[0]) && (e = e[0]), !e.length) return De();
						for (n = e[0], i = 1; i < e.length; ++i) e[i].isValid() && !e[i][t](n) || (n = e[i]);
						return n
					}
					var Oe = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

					function Ae(t) {
						var e = B(t),
							n = e.year || 0,
							i = e.quarter || 0,
							r = e.month || 0,
							a = e.week || e.isoWeek || 0,
							o = e.day || 0,
							l = e.hour || 0,
							u = e.minute || 0,
							d = e.second || 0,
							h = e.millisecond || 0;
						this._isValid = function(t) {
							var e, n, i = !1,
								r = Oe.length;
							for (e in t)
								if (s(t, e) && (-1 === vt.call(Oe, e) || null != t[e] && isNaN(t[e]))) return !1;
							for (n = 0; n < r; ++n)
								if (t[Oe[n]]) {
									if (i) return !1;
									parseFloat(t[Oe[n]]) !== q(t[Oe[n]]) && (i = !0)
								} return !0
						}(e), this._milliseconds = +h + 1e3 * d + 6e4 * u + 1e3 * l * 60 * 60, this._days = +o + 7 * a, this._months = +r + 3 * i + 12 * n, this._data = {}, this._locale = le(), this._bubble()
					}

					function Fe(t) {
						return t instanceof Ae
					}

					function Ie(t) {
						return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t)
					}

					function Ne(t, e) {
						L(t, 0, 0, (function() {
							var t = this.utcOffset(),
								n = "+";
							return t < 0 && (t = -t, n = "-"), n + A(~~(t / 60), 2) + e + A(~~t % 60, 2)
						}))
					}
					Ne("Z", ":"), Ne("ZZ", ""), gt("Z", ct), gt("ZZ", ct), bt(["Z", "ZZ"], (function(t, e, n) {
						n._useUTC = !0, n._tzm = Le(ct, t)
					}));
					var Re = /([\+\-]|\d\d)/gi;

					function Le(t, e) {
						var n, i, r = (e || "").match(t);
						return null === r ? null : 0 === (i = 60 * (n = ((r[r.length - 1] || []) + "").match(Re) || ["-", 0, 0])[1] + q(n[2])) ? 0 : "+" === n[0] ? i : -i
					}

					function Ye(t, e) {
						var n, i;
						return e._isUTC ? (n = e.clone(), i = (w(t) || h(t) ? t.valueOf() : De(t).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + i), r.updateOffset(n, !1), n) : De(t).local()
					}

					function We(t) {
						return -Math.round(t._d.getTimezoneOffset())
					}

					function Ee() {
						return !!this.isValid() && this._isUTC && 0 === this._offset
					}
					r.updateOffset = function() {};
					var ze = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
						Ve = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

					function Be(t, e) {
						var n, i, r, a, o, l, u = t,
							h = null;
						return Fe(t) ? u = {
							ms: t._milliseconds,
							d: t._days,
							M: t._months
						} : d(t) || !isNaN(+t) ? (u = {}, e ? u[e] = +t : u.milliseconds = +t) : (h = ze.exec(t)) ? (n = "-" === h[1] ? -1 : 1, u = {
							y: 0,
							d: q(h[2]) * n,
							h: q(h[3]) * n,
							m: q(h[4]) * n,
							s: q(h[5]) * n,
							ms: q(Ie(1e3 * h[6])) * n
						}) : (h = Ve.exec(t)) ? (n = "-" === h[1] ? -1 : 1, u = {
							y: He(h[2], n),
							M: He(h[3], n),
							w: He(h[4], n),
							d: He(h[5], n),
							h: He(h[6], n),
							m: He(h[7], n),
							s: He(h[8], n)
						}) : null == u ? u = {} : "object" === typeof u && ("from" in u || "to" in u) && (a = De(u.from), o = De(u.to), r = a.isValid() && o.isValid() ? (o = Ye(o, a), a.isBefore(o) ? l = je(a, o) : ((l = je(o, a)).milliseconds = -l.milliseconds, l.months = -l.months), l) : {
							milliseconds: 0,
							months: 0
						}, (u = {}).ms = r.milliseconds, u.M = r.months), i = new Ae(u), Fe(t) && s(t, "_locale") && (i._locale = t._locale), Fe(t) && s(t, "_isValid") && (i._isValid = t._isValid), i
					}

					function He(t, e) {
						var n = t && parseFloat(t.replace(",", "."));
						return (isNaN(n) ? 0 : n) * e
					}

					function je(t, e) {
						var n = {};
						return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
					}

					function Ue(t, e) {
						return function(n, i) {
							var r;
							return null === i || isNaN(+i) || (C(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), r = n, n = i, i = r), Ge(this, Be(n, i), t), this
						}
					}

					function Ge(t, e, n, i) {
						var a = e._milliseconds,
							o = Ie(e._days),
							s = Ie(e._months);
						t.isValid() && (i = null == i || i, s && Tt(t, $(t, "Month") + s * n), o && X(t, "Date", $(t, "Date") + o * n), a && t._d.setTime(t._d.valueOf() + a * n), i && r.updateOffset(t, o || s))
					}
					Be.fn = Ae.prototype, Be.invalid = function() {
						return Be(NaN)
					};
					var qe = Ue(1, "add"),
						Ze = Ue(-1, "subtract");

					function $e(t) {
						return "string" === typeof t || t instanceof String
					}

					function Xe(t) {
						return w(t) || h(t) || $e(t) || d(t) || function(t) {
							var e = a(t),
								n = !1;
							return e && (n = 0 === t.filter((function(e) {
								return !d(e) && $e(t)
							})).length), e && n
						}(t) || function(t) {
							var e, n, i = o(t) && !l(t),
								r = !1,
								a = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"],
								u = a.length;
							for (e = 0; e < u; e += 1) n = a[e], r = r || s(t, n);
							return i && r
						}(t) || null === t || void 0 === t
					}

					function Ke(t) {
						var e, n = o(t) && !l(t),
							i = !1,
							r = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"];
						for (e = 0; e < r.length; e += 1) i = i || s(t, r[e]);
						return n && i
					}

					function Je(t, e) {
						if (t.date() < e.date()) return -Je(e, t);
						var n = 12 * (e.year() - t.year()) + (e.month() - t.month()),
							i = t.clone().add(n, "months");
						return -(n + (e - i < 0 ? (e - i) / (i - t.clone().add(n - 1, "months")) : (e - i) / (t.clone().add(n + 1, "months") - i))) || 0
					}

					function Qe(t) {
						var e;
						return void 0 === t ? this._locale._abbr : (null != (e = le(t)) && (this._locale = e), this)
					}
					r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
					var tn = M("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function(t) {
						return void 0 === t ? this.localeData() : this.locale(t)
					}));

					function en() {
						return this._locale
					}

					function nn(t, e) {
						return (t % e + e) % e
					}

					function rn(t, e, n) {
						return t < 100 && t >= 0 ? new Date(t + 400, e, n) - 126227808e5 : new Date(t, e, n).valueOf()
					}

					function an(t, e, n) {
						return t < 100 && t >= 0 ? Date.UTC(t + 400, e, n) - 126227808e5 : Date.UTC(t, e, n)
					}

					function on(t, e) {
						return e.erasAbbrRegex(t)
					}

					function sn() {
						var t, e, n = [],
							i = [],
							r = [],
							a = [],
							o = this.eras();
						for (t = 0, e = o.length; t < e; ++t) i.push(pt(o[t].name)), n.push(pt(o[t].abbr)), r.push(pt(o[t].narrow)), a.push(pt(o[t].name)), a.push(pt(o[t].abbr)), a.push(pt(o[t].narrow));
						this._erasRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + r.join("|") + ")", "i")
					}

					function ln(t, e) {
						L(0, [t, t.length], 0, e)
					}

					function un(t, e, n, i, r) {
						var a;
						return null == t ? Wt(this, i, r).year : (e > (a = Et(t, i, r)) && (e = a), dn.call(this, t, e, n, i, r))
					}

					function dn(t, e, n, i, r) {
						var a = Yt(t, e, n, i, r),
							o = Rt(a.year, 0, a.dayOfYear);
						return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this
					}
					L("N", 0, 0, "eraAbbr"), L("NN", 0, 0, "eraAbbr"), L("NNN", 0, 0, "eraAbbr"), L("NNNN", 0, 0, "eraName"), L("NNNNN", 0, 0, "eraNarrow"), L("y", ["y", 1], "yo", "eraYear"), L("y", ["yy", 2], 0, "eraYear"), L("y", ["yyy", 3], 0, "eraYear"), L("y", ["yyyy", 4], 0, "eraYear"), gt("N", on), gt("NN", on), gt("NNN", on), gt("NNNN", (function(t, e) {
						return e.erasNameRegex(t)
					})), gt("NNNNN", (function(t, e) {
						return e.erasNarrowRegex(t)
					})), bt(["N", "NN", "NNN", "NNNN", "NNNNN"], (function(t, e, n, i) {
						var r = n._locale.erasParse(t, i, n._strict);
						r ? m(n).era = r : m(n).invalidEra = t
					})), gt("y", ut), gt("yy", ut), gt("yyy", ut), gt("yyyy", ut), gt("yo", (function(t, e) {
						return e._eraYearOrdinalRegex || ut
					})), bt(["y", "yy", "yyy", "yyyy"], 0), bt(["yo"], (function(t, e, n, i) {
						var r;
						n._locale._eraYearOrdinalRegex && (r = t.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? e[0] = n._locale.eraYearOrdinalParse(t, r) : e[0] = parseInt(t, 10)
					})), L(0, ["gg", 2], 0, (function() {
						return this.weekYear() % 100
					})), L(0, ["GG", 2], 0, (function() {
						return this.isoWeekYear() % 100
					})), ln("gggg", "weekYear"), ln("ggggg", "weekYear"), ln("GGGG", "isoWeekYear"), ln("GGGGG", "isoWeekYear"), z("weekYear", "gg"), z("isoWeekYear", "GG"), j("weekYear", 1), j("isoWeekYear", 1), gt("G", dt), gt("g", dt), gt("GG", it, Q), gt("gg", it, Q), gt("GGGG", st, et), gt("gggg", st, et), gt("GGGGG", lt, nt), gt("ggggg", lt, nt), xt(["gggg", "ggggg", "GGGG", "GGGGG"], (function(t, e, n, i) {
						e[i.substr(0, 2)] = q(t)
					})), xt(["gg", "GG"], (function(t, e, n, i) {
						e[i] = r.parseTwoDigitYear(t)
					})), L("Q", 0, "Qo", "quarter"), z("quarter", "Q"), j("quarter", 7), gt("Q", J), bt("Q", (function(t, e) {
						e[1] = 3 * (q(t) - 1)
					})), L("D", ["DD", 2], "Do", "date"), z("date", "D"), j("date", 9), gt("D", it), gt("DD", it, Q), gt("Do", (function(t, e) {
						return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient
					})), bt(["D", "DD"], 2), bt("Do", (function(t, e) {
						e[2] = q(t.match(it)[0])
					}));
					var hn = Z("Date", !0);
					L("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), z("dayOfYear", "DDD"), j("dayOfYear", 4), gt("DDD", ot), gt("DDDD", tt), bt(["DDD", "DDDD"], (function(t, e, n) {
						n._dayOfYear = q(t)
					})), L("m", ["mm", 2], 0, "minute"), z("minute", "m"), j("minute", 14), gt("m", it), gt("mm", it, Q), bt(["m", "mm"], 4);
					var cn = Z("Minutes", !1);
					L("s", ["ss", 2], 0, "second"), z("second", "s"), j("second", 15), gt("s", it), gt("ss", it, Q), bt(["s", "ss"], 5);
					var fn, gn, mn = Z("Seconds", !1);
					for (L("S", 0, 0, (function() {
							return ~~(this.millisecond() / 100)
						})), L(0, ["SS", 2], 0, (function() {
							return ~~(this.millisecond() / 10)
						})), L(0, ["SSS", 3], 0, "millisecond"), L(0, ["SSSS", 4], 0, (function() {
							return 10 * this.millisecond()
						})), L(0, ["SSSSS", 5], 0, (function() {
							return 100 * this.millisecond()
						})), L(0, ["SSSSSS", 6], 0, (function() {
							return 1e3 * this.millisecond()
						})), L(0, ["SSSSSSS", 7], 0, (function() {
							return 1e4 * this.millisecond()
						})), L(0, ["SSSSSSSS", 8], 0, (function() {
							return 1e5 * this.millisecond()
						})), L(0, ["SSSSSSSSS", 9], 0, (function() {
							return 1e6 * this.millisecond()
						})), z("millisecond", "ms"), j("millisecond", 16), gt("S", ot, J), gt("SS", ot, Q), gt("SSS", ot, tt), fn = "SSSS"; fn.length <= 9; fn += "S") gt(fn, ut);

					function pn(t, e) {
						e[6] = q(1e3 * ("0." + t))
					}
					for (fn = "S"; fn.length <= 9; fn += "S") bt(fn, pn);
					gn = Z("Milliseconds", !1), L("z", 0, 0, "zoneAbbr"), L("zz", 0, 0, "zoneName");
					var vn = _.prototype;

					function yn(t) {
						return t
					}
					vn.add = qe, vn.calendar = function(t, e) {
						1 === arguments.length && (arguments[0] ? Xe(arguments[0]) ? (t = arguments[0], e = void 0) : Ke(arguments[0]) && (e = arguments[0], t = void 0) : (t = void 0, e = void 0));
						var n = t || De(),
							i = Ye(n, this).startOf("day"),
							a = r.calendarFormat(this, i) || "sameElse",
							o = e && (P(e[a]) ? e[a].call(this, n) : e[a]);
						return this.format(o || this.localeData().calendar(a, this, De(n)))
					}, vn.clone = function() {
						return new _(this)
					}, vn.diff = function(t, e, n) {
						var i, r, a;
						if (!this.isValid()) return NaN;
						if (!(i = Ye(t, this)).isValid()) return NaN;
						switch (r = 6e4 * (i.utcOffset() - this.utcOffset()), e = V(e)) {
							case "year":
								a = Je(this, i) / 12;
								break;
							case "month":
								a = Je(this, i);
								break;
							case "quarter":
								a = Je(this, i) / 3;
								break;
							case "second":
								a = (this - i) / 1e3;
								break;
							case "minute":
								a = (this - i) / 6e4;
								break;
							case "hour":
								a = (this - i) / 36e5;
								break;
							case "day":
								a = (this - i - r) / 864e5;
								break;
							case "week":
								a = (this - i - r) / 6048e5;
								break;
							default:
								a = this - i
						}
						return n ? a : G(a)
					}, vn.endOf = function(t) {
						var e, n;
						if (void 0 === (t = V(t)) || "millisecond" === t || !this.isValid()) return this;
						switch (n = this._isUTC ? an : rn, t) {
							case "year":
								e = n(this.year() + 1, 0, 1) - 1;
								break;
							case "quarter":
								e = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
								break;
							case "month":
								e = n(this.year(), this.month() + 1, 1) - 1;
								break;
							case "week":
								e = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
								break;
							case "isoWeek":
								e = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
								break;
							case "day":
							case "date":
								e = n(this.year(), this.month(), this.date() + 1) - 1;
								break;
							case "hour":
								e = this._d.valueOf(), e += 36e5 - nn(e + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
								break;
							case "minute":
								e = this._d.valueOf(), e += 6e4 - nn(e, 6e4) - 1;
								break;
							case "second":
								e = this._d.valueOf(), e += 1e3 - nn(e, 1e3) - 1
						}
						return this._d.setTime(e), r.updateOffset(this, !0), this
					}, vn.format = function(t) {
						t || (t = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat);
						var e = Y(this, t);
						return this.localeData().postformat(e)
					}, vn.from = function(t, e) {
						return this.isValid() && (w(t) && t.isValid() || De(t).isValid()) ? Be({
							to: this,
							from: t
						}).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
					}, vn.fromNow = function(t) {
						return this.from(De(), t)
					}, vn.to = function(t, e) {
						return this.isValid() && (w(t) && t.isValid() || De(t).isValid()) ? Be({
							from: this,
							to: t
						}).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
					}, vn.toNow = function(t) {
						return this.to(De(), t)
					}, vn.get = function(t) {
						return P(this[t = V(t)]) ? this[t]() : this
					}, vn.invalidAt = function() {
						return m(this).overflow
					}, vn.isAfter = function(t, e) {
						var n = w(t) ? t : De(t);
						return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = V(e) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf())
					}, vn.isBefore = function(t, e) {
						var n = w(t) ? t : De(t);
						return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = V(e) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf())
					}, vn.isBetween = function(t, e, n, i) {
						var r = w(t) ? t : De(t),
							a = w(e) ? e : De(e);
						return !!(this.isValid() && r.isValid() && a.isValid()) && (("(" === (i = i || "()")[0] ? this.isAfter(r, n) : !this.isBefore(r, n)) && (")" === i[1] ? this.isBefore(a, n) : !this.isAfter(a, n)))
					}, vn.isSame = function(t, e) {
						var n, i = w(t) ? t : De(t);
						return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = V(e) || "millisecond") ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf()))
					}, vn.isSameOrAfter = function(t, e) {
						return this.isSame(t, e) || this.isAfter(t, e)
					}, vn.isSameOrBefore = function(t, e) {
						return this.isSame(t, e) || this.isBefore(t, e)
					}, vn.isValid = function() {
						return p(this)
					}, vn.lang = tn, vn.locale = Qe, vn.localeData = en, vn.max = Pe, vn.min = Ce, vn.parsingFlags = function() {
						return f({}, m(this))
					}, vn.set = function(t, e) {
						if ("object" === typeof t) {
							var n, i = function(t) {
									var e, n = [];
									for (e in t) s(t, e) && n.push({
										unit: e,
										priority: H[e]
									});
									return n.sort((function(t, e) {
										return t.priority - e.priority
									})), n
								}(t = B(t)),
								r = i.length;
							for (n = 0; n < r; n++) this[i[n].unit](t[i[n].unit])
						} else if (P(this[t = V(t)])) return this[t](e);
						return this
					}, vn.startOf = function(t) {
						var e, n;
						if (void 0 === (t = V(t)) || "millisecond" === t || !this.isValid()) return this;
						switch (n = this._isUTC ? an : rn, t) {
							case "year":
								e = n(this.year(), 0, 1);
								break;
							case "quarter":
								e = n(this.year(), this.month() - this.month() % 3, 1);
								break;
							case "month":
								e = n(this.year(), this.month(), 1);
								break;
							case "week":
								e = n(this.year(), this.month(), this.date() - this.weekday());
								break;
							case "isoWeek":
								e = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
								break;
							case "day":
							case "date":
								e = n(this.year(), this.month(), this.date());
								break;
							case "hour":
								e = this._d.valueOf(), e -= nn(e + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
								break;
							case "minute":
								e = this._d.valueOf(), e -= nn(e, 6e4);
								break;
							case "second":
								e = this._d.valueOf(), e -= nn(e, 1e3)
						}
						return this._d.setTime(e), r.updateOffset(this, !0), this
					}, vn.subtract = Ze, vn.toArray = function() {
						var t = this;
						return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
					}, vn.toObject = function() {
						var t = this;
						return {
							years: t.year(),
							months: t.month(),
							date: t.date(),
							hours: t.hours(),
							minutes: t.minutes(),
							seconds: t.seconds(),
							milliseconds: t.milliseconds()
						}
					}, vn.toDate = function() {
						return new Date(this.valueOf())
					}, vn.toISOString = function(t) {
						if (!this.isValid()) return null;
						var e = !0 !== t,
							n = e ? this.clone().utc() : this;
						return n.year() < 0 || n.year() > 9999 ? Y(n, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : P(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", Y(n, "Z")) : Y(n, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
					}, vn.inspect = function() {
						if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
						var t, e, n, i = "moment",
							r = "";
						return this.isLocal() || (i = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", r = "Z"), t = "[" + i + '("]', e = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", n = r + '[")]', this.format(t + e + "-MM-DD[T]HH:mm:ss.SSS" + n)
					}, "undefined" !== typeof Symbol && null != Symbol.for && (vn[Symbol.for("nodejs.util.inspect.custom")] = function() {
						return "Moment<" + this.format() + ">"
					}), vn.toJSON = function() {
						return this.isValid() ? this.toISOString() : null
					}, vn.toString = function() {
						return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
					}, vn.unix = function() {
						return Math.floor(this.valueOf() / 1e3)
					}, vn.valueOf = function() {
						return this._d.valueOf() - 6e4 * (this._offset || 0)
					}, vn.creationData = function() {
						return {
							input: this._i,
							format: this._f,
							locale: this._locale,
							isUTC: this._isUTC,
							strict: this._strict
						}
					}, vn.eraName = function() {
						var t, e, n, i = this.localeData().eras();
						for (t = 0, e = i.length; t < e; ++t) {
							if (n = this.clone().startOf("day").valueOf(), i[t].since <= n && n <= i[t].until) return i[t].name;
							if (i[t].until <= n && n <= i[t].since) return i[t].name
						}
						return ""
					}, vn.eraNarrow = function() {
						var t, e, n, i = this.localeData().eras();
						for (t = 0, e = i.length; t < e; ++t) {
							if (n = this.clone().startOf("day").valueOf(), i[t].since <= n && n <= i[t].until) return i[t].narrow;
							if (i[t].until <= n && n <= i[t].since) return i[t].narrow
						}
						return ""
					}, vn.eraAbbr = function() {
						var t, e, n, i = this.localeData().eras();
						for (t = 0, e = i.length; t < e; ++t) {
							if (n = this.clone().startOf("day").valueOf(), i[t].since <= n && n <= i[t].until) return i[t].abbr;
							if (i[t].until <= n && n <= i[t].since) return i[t].abbr
						}
						return ""
					}, vn.eraYear = function() {
						var t, e, n, i, a = this.localeData().eras();
						for (t = 0, e = a.length; t < e; ++t)
							if (n = a[t].since <= a[t].until ? 1 : -1, i = this.clone().startOf("day").valueOf(), a[t].since <= i && i <= a[t].until || a[t].until <= i && i <= a[t].since) return (this.year() - r(a[t].since).year()) * n + a[t].offset;
						return this.year()
					}, vn.year = It, vn.isLeapYear = function() {
						return U(this.year())
					}, vn.weekYear = function(t) {
						return un.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
					}, vn.isoWeekYear = function(t) {
						return un.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
					}, vn.quarter = vn.quarters = function(t) {
						return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
					}, vn.month = Ot, vn.daysInMonth = function() {
						return wt(this.year(), this.month())
					}, vn.week = vn.weeks = function(t) {
						var e = this.localeData().week(this);
						return null == t ? e : this.add(7 * (t - e), "d")
					}, vn.isoWeek = vn.isoWeeks = function(t) {
						var e = Wt(this, 1, 4).week;
						return null == t ? e : this.add(7 * (t - e), "d")
					}, vn.weeksInYear = function() {
						var t = this.localeData()._week;
						return Et(this.year(), t.dow, t.doy)
					}, vn.weeksInWeekYear = function() {
						var t = this.localeData()._week;
						return Et(this.weekYear(), t.dow, t.doy)
					}, vn.isoWeeksInYear = function() {
						return Et(this.year(), 1, 4)
					}, vn.isoWeeksInISOWeekYear = function() {
						return Et(this.isoWeekYear(), 1, 4)
					}, vn.date = hn, vn.day = vn.days = function(t) {
						if (!this.isValid()) return null != t ? this : NaN;
						var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
						return null != t ? (t = function(t, e) {
							return "string" !== typeof t ? t : isNaN(t) ? "number" === typeof(t = e.weekdaysParse(t)) ? t : null : parseInt(t, 10)
						}(t, this.localeData()), this.add(t - e, "d")) : e
					}, vn.weekday = function(t) {
						if (!this.isValid()) return null != t ? this : NaN;
						var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
						return null == t ? e : this.add(t - e, "d")
					}, vn.isoWeekday = function(t) {
						if (!this.isValid()) return null != t ? this : NaN;
						if (null != t) {
							var e = function(t, e) {
								return "string" === typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t
							}(t, this.localeData());
							return this.day(this.day() % 7 ? e : e - 7)
						}
						return this.day() || 7
					}, vn.dayOfYear = function(t) {
						var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
						return null == t ? e : this.add(t - e, "d")
					}, vn.hour = vn.hours = Qt, vn.minute = vn.minutes = cn, vn.second = vn.seconds = mn, vn.millisecond = vn.milliseconds = gn, vn.utcOffset = function(t, e, n) {
						var i, a = this._offset || 0;
						if (!this.isValid()) return null != t ? this : NaN;
						if (null != t) {
							if ("string" === typeof t) {
								if (null === (t = Le(ct, t))) return this
							} else Math.abs(t) < 16 && !n && (t *= 60);
							return !this._isUTC && e && (i = We(this)), this._offset = t, this._isUTC = !0, null != i && this.add(i, "m"), a !== t && (!e || this._changeInProgress ? Ge(this, Be(t - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, r.updateOffset(this, !0), this._changeInProgress = null)), this
						}
						return this._isUTC ? a : We(this)
					}, vn.utc = function(t) {
						return this.utcOffset(0, t)
					}, vn.local = function(t) {
						return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(We(this), "m")), this
					}, vn.parseZone = function() {
						if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
						else if ("string" === typeof this._i) {
							var t = Le(ht, this._i);
							null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
						}
						return this
					}, vn.hasAlignedHourOffset = function(t) {
						return !!this.isValid() && (t = t ? De(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0)
					}, vn.isDST = function() {
						return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
					}, vn.isLocal = function() {
						return !!this.isValid() && !this._isUTC
					}, vn.isUtcOffset = function() {
						return !!this.isValid() && this._isUTC
					}, vn.isUtc = Ee, vn.isUTC = Ee, vn.zoneAbbr = function() {
						return this._isUTC ? "UTC" : ""
					}, vn.zoneName = function() {
						return this._isUTC ? "Coordinated Universal Time" : ""
					}, vn.dates = M("dates accessor is deprecated. Use date instead.", hn), vn.months = M("months accessor is deprecated. Use month instead", Ot), vn.years = M("years accessor is deprecated. Use year instead", It), vn.zone = M("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", (function(t, e) {
						return null != t ? ("string" !== typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
					})), vn.isDSTShifted = M("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", (function() {
						if (!u(this._isDSTShifted)) return this._isDSTShifted;
						var t, e = {};
						return x(e, this), (e = Me(e))._a ? (t = e._isUTC ? g(e._a) : De(e._a), this._isDSTShifted = this.isValid() && function(t, e, n) {
							var i, r = Math.min(t.length, e.length),
								a = Math.abs(t.length - e.length),
								o = 0;
							for (i = 0; i < r; i++)(n && t[i] !== e[i] || !n && q(t[i]) !== q(e[i])) && o++;
							return o + a
						}(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted
					}));
					var bn = O.prototype;

					function xn(t, e, n, i) {
						var r = le(),
							a = g().set(i, e);
						return r[n](a, t)
					}

					function _n(t, e, n) {
						if (d(t) && (e = t, t = void 0), t = t || "", null != e) return xn(t, e, n, "month");
						var i, r = [];
						for (i = 0; i < 12; i++) r[i] = xn(t, i, n, "month");
						return r
					}

					function wn(t, e, n, i) {
						"boolean" === typeof t ? (d(e) && (n = e, e = void 0), e = e || "") : (n = e = t, t = !1, d(e) && (n = e, e = void 0), e = e || "");
						var r, a = le(),
							o = t ? a._week.dow : 0,
							s = [];
						if (null != n) return xn(e, (n + o) % 7, i, "day");
						for (r = 0; r < 7; r++) s[r] = xn(e, (r + o) % 7, i, "day");
						return s
					}
					bn.calendar = function(t, e, n) {
						var i = this._calendar[t] || this._calendar.sameElse;
						return P(i) ? i.call(e, n) : i
					}, bn.longDateFormat = function(t) {
						var e = this._longDateFormat[t],
							n = this._longDateFormat[t.toUpperCase()];
						return e || !n ? e : (this._longDateFormat[t] = n.match(F).map((function(t) {
							return "MMMM" === t || "MM" === t || "DD" === t || "dddd" === t ? t.slice(1) : t
						})).join(""), this._longDateFormat[t])
					}, bn.invalidDate = function() {
						return this._invalidDate
					}, bn.ordinal = function(t) {
						return this._ordinal.replace("%d", t)
					}, bn.preparse = yn, bn.postformat = yn, bn.relativeTime = function(t, e, n, i) {
						var r = this._relativeTime[n];
						return P(r) ? r(t, e, n, i) : r.replace(/%d/i, t)
					}, bn.pastFuture = function(t, e) {
						var n = this._relativeTime[t > 0 ? "future" : "past"];
						return P(n) ? n(e) : n.replace(/%s/i, e)
					}, bn.set = function(t) {
						var e, n;
						for (n in t) s(t, n) && (P(e = t[n]) ? this[n] = e : this["_" + n] = e);
						this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
					}, bn.eras = function(t, e) {
						var n, i, a, o = this._eras || le("en")._eras;
						for (n = 0, i = o.length; n < i; ++n) {
							switch (typeof o[n].since) {
								case "string":
									a = r(o[n].since).startOf("day"), o[n].since = a.valueOf()
							}
							switch (typeof o[n].until) {
								case "undefined":
									o[n].until = 1 / 0;
									break;
								case "string":
									a = r(o[n].until).startOf("day").valueOf(), o[n].until = a.valueOf()
							}
						}
						return o
					}, bn.erasParse = function(t, e, n) {
						var i, r, a, o, s, l = this.eras();
						for (t = t.toUpperCase(), i = 0, r = l.length; i < r; ++i)
							if (a = l[i].name.toUpperCase(), o = l[i].abbr.toUpperCase(), s = l[i].narrow.toUpperCase(), n) switch (e) {
								case "N":
								case "NN":
								case "NNN":
									if (o === t) return l[i];
									break;
								case "NNNN":
									if (a === t) return l[i];
									break;
								case "NNNNN":
									if (s === t) return l[i]
							} else if ([a, o, s].indexOf(t) >= 0) return l[i]
					}, bn.erasConvertYear = function(t, e) {
						var n = t.since <= t.until ? 1 : -1;
						return void 0 === e ? r(t.since).year() : r(t.since).year() + (e - t.offset) * n
					}, bn.erasAbbrRegex = function(t) {
						return s(this, "_erasAbbrRegex") || sn.call(this), t ? this._erasAbbrRegex : this._erasRegex
					}, bn.erasNameRegex = function(t) {
						return s(this, "_erasNameRegex") || sn.call(this), t ? this._erasNameRegex : this._erasRegex
					}, bn.erasNarrowRegex = function(t) {
						return s(this, "_erasNarrowRegex") || sn.call(this), t ? this._erasNarrowRegex : this._erasRegex
					}, bn.months = function(t, e) {
						return t ? a(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || St).test(e) ? "format" : "standalone"][t.month()] : a(this._months) ? this._months : this._months.standalone
					}, bn.monthsShort = function(t, e) {
						return t ? a(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[St.test(e) ? "format" : "standalone"][t.month()] : a(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
					}, bn.monthsParse = function(t, e, n) {
						var i, r, a;
						if (this._monthsParseExact) return Pt.call(this, t, e, n);
						for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
							if (r = g([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (a = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(a.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[i].test(t)) return i;
							if (n && "MMM" === e && this._shortMonthsParse[i].test(t)) return i;
							if (!n && this._monthsParse[i].test(t)) return i
						}
					}, bn.monthsRegex = function(t) {
						return this._monthsParseExact ? (s(this, "_monthsRegex") || At.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (s(this, "_monthsRegex") || (this._monthsRegex = Ct), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
					}, bn.monthsShortRegex = function(t) {
						return this._monthsParseExact ? (s(this, "_monthsRegex") || At.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (s(this, "_monthsShortRegex") || (this._monthsShortRegex = Dt), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
					}, bn.week = function(t) {
						return Wt(t, this._week.dow, this._week.doy).week
					}, bn.firstDayOfYear = function() {
						return this._week.doy
					}, bn.firstDayOfWeek = function() {
						return this._week.dow
					}, bn.weekdays = function(t, e) {
						var n = a(this._weekdays) ? this._weekdays : this._weekdays[t && !0 !== t && this._weekdays.isFormat.test(e) ? "format" : "standalone"];
						return !0 === t ? zt(n, this._week.dow) : t ? n[t.day()] : n
					}, bn.weekdaysMin = function(t) {
						return !0 === t ? zt(this._weekdaysMin, this._week.dow) : t ? this._weekdaysMin[t.day()] : this._weekdaysMin
					}, bn.weekdaysShort = function(t) {
						return !0 === t ? zt(this._weekdaysShort, this._week.dow) : t ? this._weekdaysShort[t.day()] : this._weekdaysShort
					}, bn.weekdaysParse = function(t, e, n) {
						var i, r, a;
						if (this._weekdaysParseExact) return qt.call(this, t, e, n);
						for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
							if (r = g([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(r, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[i] || (a = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[i] = new RegExp(a.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[i].test(t)) return i;
							if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t)) return i;
							if (n && "dd" === e && this._minWeekdaysParse[i].test(t)) return i;
							if (!n && this._weekdaysParse[i].test(t)) return i
						}
					}, bn.weekdaysRegex = function(t) {
						return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || Zt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (s(this, "_weekdaysRegex") || (this._weekdaysRegex = jt), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
					}, bn.weekdaysShortRegex = function(t) {
						return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || Zt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (s(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ut), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
					}, bn.weekdaysMinRegex = function(t) {
						return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || Zt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (s(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Gt), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
					}, bn.isPM = function(t) {
						return "p" === (t + "").toLowerCase().charAt(0)
					}, bn.meridiem = function(t, e, n) {
						return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
					}, oe("en", {
						eras: [{
							since: "0001-01-01",
							until: 1 / 0,
							offset: 1,
							name: "Anno Domini",
							narrow: "AD",
							abbr: "AD"
						}, {
							since: "0000-12-31",
							until: -1 / 0,
							offset: 1,
							name: "Before Christ",
							narrow: "BC",
							abbr: "BC"
						}],
						dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
						ordinal: function(t) {
							var e = t % 10;
							return t + (1 === q(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
						}
					}), r.lang = M("moment.lang is deprecated. Use moment.locale instead.", oe), r.langData = M("moment.langData is deprecated. Use moment.localeData instead.", le);
					var kn = Math.abs;

					function Mn(t, e, n, i) {
						var r = Be(e, n);
						return t._milliseconds += i * r._milliseconds, t._days += i * r._days, t._months += i * r._months, t._bubble()
					}

					function Sn(t) {
						return t < 0 ? Math.floor(t) : Math.ceil(t)
					}

					function Dn(t) {
						return 4800 * t / 146097
					}

					function Cn(t) {
						return 146097 * t / 4800
					}

					function Pn(t) {
						return function() {
							return this.as(t)
						}
					}
					var Tn = Pn("ms"),
						On = Pn("s"),
						An = Pn("m"),
						Fn = Pn("h"),
						In = Pn("d"),
						Nn = Pn("w"),
						Rn = Pn("M"),
						Ln = Pn("Q"),
						Yn = Pn("y");

					function Wn(t) {
						return function() {
							return this.isValid() ? this._data[t] : NaN
						}
					}
					var En = Wn("milliseconds"),
						zn = Wn("seconds"),
						Vn = Wn("minutes"),
						Bn = Wn("hours"),
						Hn = Wn("days"),
						jn = Wn("months"),
						Un = Wn("years"),
						Gn = Math.round,
						qn = {
							ss: 44,
							s: 45,
							m: 45,
							h: 22,
							d: 26,
							w: null,
							M: 11
						};

					function Zn(t, e, n, i, r) {
						return r.relativeTime(e || 1, !!n, t, i)
					}
					var $n = Math.abs;

					function Xn(t) {
						return (t > 0) - (t < 0) || +t
					}

					function Kn() {
						if (!this.isValid()) return this.localeData().invalidDate();
						var t, e, n, i, r, a, o, s, l = $n(this._milliseconds) / 1e3,
							u = $n(this._days),
							d = $n(this._months),
							h = this.asSeconds();
						return h ? (t = G(l / 60), e = G(t / 60), l %= 60, t %= 60, n = G(d / 12), d %= 12, i = l ? l.toFixed(3).replace(/\.?0+$/, "") : "", r = h < 0 ? "-" : "", a = Xn(this._months) !== Xn(h) ? "-" : "", o = Xn(this._days) !== Xn(h) ? "-" : "", s = Xn(this._milliseconds) !== Xn(h) ? "-" : "", r + "P" + (n ? a + n + "Y" : "") + (d ? a + d + "M" : "") + (u ? o + u + "D" : "") + (e || t || l ? "T" : "") + (e ? s + e + "H" : "") + (t ? s + t + "M" : "") + (l ? s + i + "S" : "")) : "P0D"
					}
					var Jn = Ae.prototype;
					return Jn.isValid = function() {
						return this._isValid
					}, Jn.abs = function() {
						var t = this._data;
						return this._milliseconds = kn(this._milliseconds), this._days = kn(this._days), this._months = kn(this._months), t.milliseconds = kn(t.milliseconds), t.seconds = kn(t.seconds), t.minutes = kn(t.minutes), t.hours = kn(t.hours), t.months = kn(t.months), t.years = kn(t.years), this
					}, Jn.add = function(t, e) {
						return Mn(this, t, e, 1)
					}, Jn.subtract = function(t, e) {
						return Mn(this, t, e, -1)
					}, Jn.as = function(t) {
						if (!this.isValid()) return NaN;
						var e, n, i = this._milliseconds;
						if ("month" === (t = V(t)) || "quarter" === t || "year" === t) switch (e = this._days + i / 864e5, n = this._months + Dn(e), t) {
							case "month":
								return n;
							case "quarter":
								return n / 3;
							case "year":
								return n / 12
						} else switch (e = this._days + Math.round(Cn(this._months)), t) {
							case "week":
								return e / 7 + i / 6048e5;
							case "day":
								return e + i / 864e5;
							case "hour":
								return 24 * e + i / 36e5;
							case "minute":
								return 1440 * e + i / 6e4;
							case "second":
								return 86400 * e + i / 1e3;
							case "millisecond":
								return Math.floor(864e5 * e) + i;
							default:
								throw new Error("Unknown unit " + t)
						}
					}, Jn.asMilliseconds = Tn, Jn.asSeconds = On, Jn.asMinutes = An, Jn.asHours = Fn, Jn.asDays = In, Jn.asWeeks = Nn, Jn.asMonths = Rn, Jn.asQuarters = Ln, Jn.asYears = Yn, Jn.valueOf = function() {
						return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * q(this._months / 12) : NaN
					}, Jn._bubble = function() {
						var t, e, n, i, r, a = this._milliseconds,
							o = this._days,
							s = this._months,
							l = this._data;
						return a >= 0 && o >= 0 && s >= 0 || a <= 0 && o <= 0 && s <= 0 || (a += 864e5 * Sn(Cn(s) + o), o = 0, s = 0), l.milliseconds = a % 1e3, t = G(a / 1e3), l.seconds = t % 60, e = G(t / 60), l.minutes = e % 60, n = G(e / 60), l.hours = n % 24, o += G(n / 24), r = G(Dn(o)), s += r, o -= Sn(Cn(r)), i = G(s / 12), s %= 12, l.days = o, l.months = s, l.years = i, this
					}, Jn.clone = function() {
						return Be(this)
					}, Jn.get = function(t) {
						return t = V(t), this.isValid() ? this[t + "s"]() : NaN
					}, Jn.milliseconds = En, Jn.seconds = zn, Jn.minutes = Vn, Jn.hours = Bn, Jn.days = Hn, Jn.weeks = function() {
						return G(this.days() / 7)
					}, Jn.months = jn, Jn.years = Un, Jn.humanize = function(t, e) {
						if (!this.isValid()) return this.localeData().invalidDate();
						var n, i, r = !1,
							a = qn;
						return "object" === typeof t && (e = t, t = !1), "boolean" === typeof t && (r = t), "object" === typeof e && (a = Object.assign({}, qn, e), null != e.s && null == e.ss && (a.ss = e.s - 1)), n = this.localeData(), i = function(t, e, n, i) {
							var r = Be(t).abs(),
								a = Gn(r.as("s")),
								o = Gn(r.as("m")),
								s = Gn(r.as("h")),
								l = Gn(r.as("d")),
								u = Gn(r.as("M")),
								d = Gn(r.as("w")),
								h = Gn(r.as("y")),
								c = a <= n.ss && ["s", a] || a < n.s && ["ss", a] || o <= 1 && ["m"] || o < n.m && ["mm", o] || s <= 1 && ["h"] || s < n.h && ["hh", s] || l <= 1 && ["d"] || l < n.d && ["dd", l];
							return null != n.w && (c = c || d <= 1 && ["w"] || d < n.w && ["ww", d]), (c = c || u <= 1 && ["M"] || u < n.M && ["MM", u] || h <= 1 && ["y"] || ["yy", h])[2] = e, c[3] = +t > 0, c[4] = i, Zn.apply(null, c)
						}(this, !r, a, n), r && (i = n.pastFuture(+this, i)), n.postformat(i)
					}, Jn.toISOString = Kn, Jn.toString = Kn, Jn.toJSON = Kn, Jn.locale = Qe, Jn.localeData = en, Jn.toIsoString = M("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Kn), Jn.lang = tn, L("X", 0, 0, "unix"), L("x", 0, 0, "valueOf"), gt("x", dt), gt("X", /[+-]?\d+(\.\d{1,3})?/), bt("X", (function(t, e, n) {
						n._d = new Date(1e3 * parseFloat(t))
					})), bt("x", (function(t, e, n) {
						n._d = new Date(q(t))
					})), r.version = "2.29.4", e = De, r.fn = vn, r.min = function() {
						var t = [].slice.call(arguments, 0);
						return Te("isBefore", t)
					}, r.max = function() {
						var t = [].slice.call(arguments, 0);
						return Te("isAfter", t)
					}, r.now = function() {
						return Date.now ? Date.now() : +new Date
					}, r.utc = g, r.unix = function(t) {
						return De(1e3 * t)
					}, r.months = function(t, e) {
						return _n(t, e, "months")
					}, r.isDate = h, r.locale = oe, r.invalid = v, r.duration = Be, r.isMoment = w, r.weekdays = function(t, e, n) {
						return wn(t, e, n, "weekdays")
					}, r.parseZone = function() {
						return De.apply(null, arguments).parseZone()
					}, r.localeData = le, r.isDuration = Fe, r.monthsShort = function(t, e) {
						return _n(t, e, "monthsShort")
					}, r.weekdaysMin = function(t, e, n) {
						return wn(t, e, n, "weekdaysMin")
					}, r.defineLocale = se, r.updateLocale = function(t, e) {
						if (null != e) {
							var n, i, r = te;
							null != ee[t] && null != ee[t].parentLocale ? ee[t].set(T(ee[t]._config, e)) : (null != (i = ae(t)) && (r = i._config), e = T(r, e), null == i && (e.abbr = t), (n = new O(e)).parentLocale = ee[t], ee[t] = n), oe(t)
						} else null != ee[t] && (null != ee[t].parentLocale ? (ee[t] = ee[t].parentLocale, t === oe() && oe(t)) : null != ee[t] && delete ee[t]);
						return ee[t]
					}, r.locales = function() {
						return S(ee)
					}, r.weekdaysShort = function(t, e, n) {
						return wn(t, e, n, "weekdaysShort")
					}, r.normalizeUnits = V, r.relativeTimeRounding = function(t) {
						return void 0 === t ? Gn : "function" === typeof t && (Gn = t, !0)
					}, r.relativeTimeThreshold = function(t, e) {
						return void 0 !== qn[t] && (void 0 === e ? qn[t] : (qn[t] = e, "s" === t && (qn.ss = e - 1), !0))
					}, r.calendarFormat = function(t, e) {
						var n = t.diff(e, "days", !0);
						return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
					}, r.prototype = vn, r.HTML5_FMT = {
						DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
						DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
						DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
						DATE: "YYYY-MM-DD",
						TIME: "HH:mm",
						TIME_SECONDS: "HH:mm:ss",
						TIME_MS: "HH:mm:ss.SSS",
						WEEK: "GGGG-[W]WW",
						MONTH: "YYYY-MM"
					}, r
				}()
			}).call(this, n(590)(t))
		},
		590: function(t, e) {
			t.exports = function(t) {
				return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
					enumerable: !0,
					get: function() {
						return t.l
					}
				}), Object.defineProperty(t, "id", {
					enumerable: !0,
					get: function() {
						return t.i
					}
				}), t.webpackPolyfill = 1), t
			}
		},
		591: function(t, e) {
			function n(t) {
				var e = new Error("Cannot find module '" + t + "'");
				throw e.code = "MODULE_NOT_FOUND", e
			}
			n.keys = function() {
				return []
			}, n.resolve = n, t.exports = n, n.id = 591
		},
		6: function(t, e, n) {
			"use strict";
			n.r(e);
			var i = n(0),
				r = n.n(i),
				a = n(14),
				o = n.n(a);

			function s(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function l(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}

			function u(t, e) {
				return (u = Object.setPrototypeOf || function(t, e) {
					return t.__proto__ = e, t
				})(t, e)
			}

			function d(t) {
				var e = function() {
					if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" === typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
					} catch (t) {
						return !1
					}
				}();
				return function() {
					var n, i = c(t);
					if (e) {
						var r = c(this).constructor;
						n = Reflect.construct(i, arguments, r)
					} else n = i.apply(this, arguments);
					return h(this, n)
				}
			}

			function h(t, e) {
				if (e && ("object" === typeof e || "function" === typeof e)) return e;
				if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
				return function(t) {
					if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return t
				}(t)
			}

			function c(t) {
				return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
					return t.__proto__ || Object.getPrototypeOf(t)
				})(t)
			}
			var f = function(t) {
				! function(t, e) {
					if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							writable: !0,
							configurable: !0
						}
					}), Object.defineProperty(t, "prototype", {
						writable: !1
					}), e && u(t, e)
				}(h, t);
				var e, n, i, a = d(h);

				function h() {
					var t;
					s(this, h);
					for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
					return (t = a.call.apply(a, [this].concat(n))).state = {
						id: Math.random().toString(36).substring(7),
						parentClass: t.props.parentClass || "popup opened",
						contentClass: t.props.contentClass || "popup__content",
						closeClass: t.props.closeClass || "popup__close"
					}, t.open = function() {
						t.renderModal(), document.body.style.top = "-".concat(window.scrollY, "px"), document.body.style.overflow = "hidden", document.body.style.position = "fixed", document.body.style.width = "100%"
					}, t.close = function() {
						t.props.onClose && t.props.onClose(), o.a.render(null, t.portalElement), document.body.removeChild(t.portalElement), document.body.style.overflow = "unset", document.body.style.width = "unset", t.portalElement = null;
						var e = document.body.style.top;
						document.body.style.position = "", document.body.style.top = "", window.scrollTo(0, -1 * parseInt(e || "0"))
					}, t.renderModal = function() {
						var e = document.createElement("div");
						e.id = t.state.id, e.className = t.props.className || "", document.body.appendChild(e), t.portalElement = e, o.a.render(r.a.createElement("div", {
							className: t.state.parentClass
						}, r.a.createElement("div", {
							className: t.state.contentClass
						}, t.props.children, r.a.createElement("a", {
							className: t.state.closeClass,
							onClick: t.close
						}, "\xd7"))), t.portalElement)
					}, t
				}
				return e = h, (n = [{
					key: "componentWillUnmount",
					value: function() {
						this.portalElement && document.body.removeChild(this.portalElement)
					}
				}, {
					key: "render",
					value: function() {
						return null
					}
				}]) && l(e.prototype, n), i && l(e, i), Object.defineProperty(e, "prototype", {
					writable: !1
				}), h
			}(i.Component);
			e.default = f
		},
		7: function(t, e, n) {
			"use strict";

			function i(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			n.r(e);
			var r = function() {
				function t() {
					! function(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}(this, t)
				}
				var e, n, r;
				return e = t, r = [{
					key: "generateUniqKey",
					value: function() {
						return Math.random().toString(36).substring(7)
					}
				}, {
					key: "scrollToError",
					value: function() {
						var t = document.querySelector("div.err, small.error");
						if (t) {
							var e = t.offsetTop;
							e && window.scrollTo({
								top: e - 200,
								behavior: "smooth"
							})
						}
					}
				}, {
					key: "scrollToErrorWithTimeout",
					value: function() {
						var t = this,
							e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100;
						setTimeout((function() {
							return t.scrollToError()
						}), e)
					}
				}, {
					key: "capitalize",
					value: function(t) {
						var e = t.replace("_", " ");
						return e.charAt(0).toUpperCase() + e.slice(1)
					}
				}, {
					key: "camelize",
					value: function(t) {
						return t.replace(new RegExp("_", "g"), " ").replace(/(?:^\w|[A-Z]|\b\w)/g, (function(t, e) {
							return 0 === e ? t.toLowerCase() : t.toUpperCase()
						})).replace(/\s+/g, "")
					}
				}, {
					key: "is_valid_url",
					value: function(t) {
						return /^(http(s)?:\/\/)?(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(t)
					}
				}, {
					key: "setUrl",
					value: function(t) {
						for (var e = t, n = e, i = n.indexOf(" "); - 1 !== i;) i = (n = n.replace(" ", "-")).indexOf(" ");
						e = n;
						for (var r = 0, a = ""; r < e.length; r++) - 1 !== "-0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(e.charAt(r)) && (a += e.charAt(r));
						return a.toLowerCase()
					}
				}], (n = null) && i(e.prototype, n), r && i(e, r), Object.defineProperty(e, "prototype", {
					writable: !1
				}), t
			}();
			e.default = r
		},
		71: function(t, e, n) {
			t.exports = function(t) {
				"use strict";
				t = t && t.hasOwnProperty("default") ? t.default : t;
				var e = {
						aliceblue: [240, 248, 255],
						antiquewhite: [250, 235, 215],
						aqua: [0, 255, 255],
						aquamarine: [127, 255, 212],
						azure: [240, 255, 255],
						beige: [245, 245, 220],
						bisque: [255, 228, 196],
						black: [0, 0, 0],
						blanchedalmond: [255, 235, 205],
						blue: [0, 0, 255],
						blueviolet: [138, 43, 226],
						brown: [165, 42, 42],
						burlywood: [222, 184, 135],
						cadetblue: [95, 158, 160],
						chartreuse: [127, 255, 0],
						chocolate: [210, 105, 30],
						coral: [255, 127, 80],
						cornflowerblue: [100, 149, 237],
						cornsilk: [255, 248, 220],
						crimson: [220, 20, 60],
						cyan: [0, 255, 255],
						darkblue: [0, 0, 139],
						darkcyan: [0, 139, 139],
						darkgoldenrod: [184, 134, 11],
						darkgray: [169, 169, 169],
						darkgreen: [0, 100, 0],
						darkgrey: [169, 169, 169],
						darkkhaki: [189, 183, 107],
						darkmagenta: [139, 0, 139],
						darkolivegreen: [85, 107, 47],
						darkorange: [255, 140, 0],
						darkorchid: [153, 50, 204],
						darkred: [139, 0, 0],
						darksalmon: [233, 150, 122],
						darkseagreen: [143, 188, 143],
						darkslateblue: [72, 61, 139],
						darkslategray: [47, 79, 79],
						darkslategrey: [47, 79, 79],
						darkturquoise: [0, 206, 209],
						darkviolet: [148, 0, 211],
						deeppink: [255, 20, 147],
						deepskyblue: [0, 191, 255],
						dimgray: [105, 105, 105],
						dimgrey: [105, 105, 105],
						dodgerblue: [30, 144, 255],
						firebrick: [178, 34, 34],
						floralwhite: [255, 250, 240],
						forestgreen: [34, 139, 34],
						fuchsia: [255, 0, 255],
						gainsboro: [220, 220, 220],
						ghostwhite: [248, 248, 255],
						gold: [255, 215, 0],
						goldenrod: [218, 165, 32],
						gray: [128, 128, 128],
						green: [0, 128, 0],
						greenyellow: [173, 255, 47],
						grey: [128, 128, 128],
						honeydew: [240, 255, 240],
						hotpink: [255, 105, 180],
						indianred: [205, 92, 92],
						indigo: [75, 0, 130],
						ivory: [255, 255, 240],
						khaki: [240, 230, 140],
						lavender: [230, 230, 250],
						lavenderblush: [255, 240, 245],
						lawngreen: [124, 252, 0],
						lemonchiffon: [255, 250, 205],
						lightblue: [173, 216, 230],
						lightcoral: [240, 128, 128],
						lightcyan: [224, 255, 255],
						lightgoldenrodyellow: [250, 250, 210],
						lightgray: [211, 211, 211],
						lightgreen: [144, 238, 144],
						lightgrey: [211, 211, 211],
						lightpink: [255, 182, 193],
						lightsalmon: [255, 160, 122],
						lightseagreen: [32, 178, 170],
						lightskyblue: [135, 206, 250],
						lightslategray: [119, 136, 153],
						lightslategrey: [119, 136, 153],
						lightsteelblue: [176, 196, 222],
						lightyellow: [255, 255, 224],
						lime: [0, 255, 0],
						limegreen: [50, 205, 50],
						linen: [250, 240, 230],
						magenta: [255, 0, 255],
						maroon: [128, 0, 0],
						mediumaquamarine: [102, 205, 170],
						mediumblue: [0, 0, 205],
						mediumorchid: [186, 85, 211],
						mediumpurple: [147, 112, 219],
						mediumseagreen: [60, 179, 113],
						mediumslateblue: [123, 104, 238],
						mediumspringgreen: [0, 250, 154],
						mediumturquoise: [72, 209, 204],
						mediumvioletred: [199, 21, 133],
						midnightblue: [25, 25, 112],
						mintcream: [245, 255, 250],
						mistyrose: [255, 228, 225],
						moccasin: [255, 228, 181],
						navajowhite: [255, 222, 173],
						navy: [0, 0, 128],
						oldlace: [253, 245, 230],
						olive: [128, 128, 0],
						olivedrab: [107, 142, 35],
						orange: [255, 165, 0],
						orangered: [255, 69, 0],
						orchid: [218, 112, 214],
						palegoldenrod: [238, 232, 170],
						palegreen: [152, 251, 152],
						paleturquoise: [175, 238, 238],
						palevioletred: [219, 112, 147],
						papayawhip: [255, 239, 213],
						peachpuff: [255, 218, 185],
						peru: [205, 133, 63],
						pink: [255, 192, 203],
						plum: [221, 160, 221],
						powderblue: [176, 224, 230],
						purple: [128, 0, 128],
						rebeccapurple: [102, 51, 153],
						red: [255, 0, 0],
						rosybrown: [188, 143, 143],
						royalblue: [65, 105, 225],
						saddlebrown: [139, 69, 19],
						salmon: [250, 128, 114],
						sandybrown: [244, 164, 96],
						seagreen: [46, 139, 87],
						seashell: [255, 245, 238],
						sienna: [160, 82, 45],
						silver: [192, 192, 192],
						skyblue: [135, 206, 235],
						slateblue: [106, 90, 205],
						slategray: [112, 128, 144],
						slategrey: [112, 128, 144],
						snow: [255, 250, 250],
						springgreen: [0, 255, 127],
						steelblue: [70, 130, 180],
						tan: [210, 180, 140],
						teal: [0, 128, 128],
						thistle: [216, 191, 216],
						tomato: [255, 99, 71],
						turquoise: [64, 224, 208],
						violet: [238, 130, 238],
						wheat: [245, 222, 179],
						white: [255, 255, 255],
						whitesmoke: [245, 245, 245],
						yellow: [255, 255, 0],
						yellowgreen: [154, 205, 50]
					},
					n = function(t, e) {
						return t(e = {
							exports: {}
						}, e.exports), e.exports
					}((function(t) {
						var n = {};
						for (var i in e) e.hasOwnProperty(i) && (n[e[i]] = i);
						var r = t.exports = {
							rgb: {
								channels: 3,
								labels: "rgb"
							},
							hsl: {
								channels: 3,
								labels: "hsl"
							},
							hsv: {
								channels: 3,
								labels: "hsv"
							},
							hwb: {
								channels: 3,
								labels: "hwb"
							},
							cmyk: {
								channels: 4,
								labels: "cmyk"
							},
							xyz: {
								channels: 3,
								labels: "xyz"
							},
							lab: {
								channels: 3,
								labels: "lab"
							},
							lch: {
								channels: 3,
								labels: "lch"
							},
							hex: {
								channels: 1,
								labels: ["hex"]
							},
							keyword: {
								channels: 1,
								labels: ["keyword"]
							},
							ansi16: {
								channels: 1,
								labels: ["ansi16"]
							},
							ansi256: {
								channels: 1,
								labels: ["ansi256"]
							},
							hcg: {
								channels: 3,
								labels: ["h", "c", "g"]
							},
							apple: {
								channels: 3,
								labels: ["r16", "g16", "b16"]
							},
							gray: {
								channels: 1,
								labels: ["gray"]
							}
						};
						for (var a in r)
							if (r.hasOwnProperty(a)) {
								if (!("channels" in r[a])) throw new Error("missing channels property: " + a);
								if (!("labels" in r[a])) throw new Error("missing channel labels property: " + a);
								if (r[a].labels.length !== r[a].channels) throw new Error("channel and label counts mismatch: " + a);
								var o = r[a].channels,
									s = r[a].labels;
								delete r[a].channels, delete r[a].labels, Object.defineProperty(r[a], "channels", {
									value: o
								}), Object.defineProperty(r[a], "labels", {
									value: s
								})
							} r.rgb.hsl = function(t) {
							var e, n, i = t[0] / 255,
								r = t[1] / 255,
								a = t[2] / 255,
								o = Math.min(i, r, a),
								s = Math.max(i, r, a),
								l = s - o;
							return s === o ? e = 0 : i === s ? e = (r - a) / l : r === s ? e = 2 + (a - i) / l : a === s && (e = 4 + (i - r) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), n = (o + s) / 2, [e, 100 * (s === o ? 0 : n <= .5 ? l / (s + o) : l / (2 - s - o)), 100 * n]
						}, r.rgb.hsv = function(t) {
							var e, n, i, r, a, o = t[0] / 255,
								s = t[1] / 255,
								l = t[2] / 255,
								u = Math.max(o, s, l),
								d = u - Math.min(o, s, l),
								h = function(t) {
									return (u - t) / 6 / d + .5
								};
							return 0 === d ? r = a = 0 : (a = d / u, e = h(o), n = h(s), i = h(l), o === u ? r = i - n : s === u ? r = 1 / 3 + e - i : l === u && (r = 2 / 3 + n - e), r < 0 ? r += 1 : r > 1 && (r -= 1)), [360 * r, 100 * a, 100 * u]
						}, r.rgb.hwb = function(t) {
							var e = t[0],
								n = t[1],
								i = t[2];
							return [r.rgb.hsl(t)[0], 1 / 255 * Math.min(e, Math.min(n, i)) * 100, 100 * (i = 1 - 1 / 255 * Math.max(e, Math.max(n, i)))]
						}, r.rgb.cmyk = function(t) {
							var e, n = t[0] / 255,
								i = t[1] / 255,
								r = t[2] / 255;
							return [100 * ((1 - n - (e = Math.min(1 - n, 1 - i, 1 - r))) / (1 - e) || 0), 100 * ((1 - i - e) / (1 - e) || 0), 100 * ((1 - r - e) / (1 - e) || 0), 100 * e]
						}, r.rgb.keyword = function(t) {
							var i = n[t];
							if (i) return i;
							var r, a, o, s = 1 / 0;
							for (var l in e)
								if (e.hasOwnProperty(l)) {
									var u = e[l],
										d = (a = t, o = u, Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2) + Math.pow(a[2] - o[2], 2));
									d < s && (s = d, r = l)
								} return r
						}, r.keyword.rgb = function(t) {
							return e[t]
						}, r.rgb.xyz = function(t) {
							var e = t[0] / 255,
								n = t[1] / 255,
								i = t[2] / 255;
							return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92)), 100 * (.2126 * e + .7152 * n + .0722 * i), 100 * (.0193 * e + .1192 * n + .9505 * i)]
						}, r.rgb.lab = function(t) {
							var e = r.rgb.xyz(t),
								n = e[0],
								i = e[1],
								a = e[2];
							return i /= 100, a /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (n - i), 200 * (i - (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))]
						}, r.hsl.rgb = function(t) {
							var e, n, i, r, a, o = t[0] / 360,
								s = t[1] / 100,
								l = t[2] / 100;
							if (0 === s) return [a = 255 * l, a, a];
							e = 2 * l - (n = l < .5 ? l * (1 + s) : l + s - l * s), r = [0, 0, 0];
							for (var u = 0; u < 3; u++)(i = o + 1 / 3 * -(u - 1)) < 0 && i++, i > 1 && i--, a = 6 * i < 1 ? e + 6 * (n - e) * i : 2 * i < 1 ? n : 3 * i < 2 ? e + (n - e) * (2 / 3 - i) * 6 : e, r[u] = 255 * a;
							return r
						}, r.hsl.hsv = function(t) {
							var e = t[0],
								n = t[1] / 100,
								i = t[2] / 100,
								r = n,
								a = Math.max(i, .01);
							return n *= (i *= 2) <= 1 ? i : 2 - i, r *= a <= 1 ? a : 2 - a, [e, 100 * (0 === i ? 2 * r / (a + r) : 2 * n / (i + n)), (i + n) / 2 * 100]
						}, r.hsv.rgb = function(t) {
							var e = t[0] / 60,
								n = t[1] / 100,
								i = t[2] / 100,
								r = Math.floor(e) % 6,
								a = e - Math.floor(e),
								o = 255 * i * (1 - n),
								s = 255 * i * (1 - n * a),
								l = 255 * i * (1 - n * (1 - a));
							switch (i *= 255, r) {
								case 0:
									return [i, l, o];
								case 1:
									return [s, i, o];
								case 2:
									return [o, i, l];
								case 3:
									return [o, s, i];
								case 4:
									return [l, o, i];
								case 5:
									return [i, o, s]
							}
						}, r.hsv.hsl = function(t) {
							var e, n, i, r = t[0],
								a = t[1] / 100,
								o = t[2] / 100,
								s = Math.max(o, .01);
							return i = (2 - a) * o, n = a * s, [r, 100 * (n = (n /= (e = (2 - a) * s) <= 1 ? e : 2 - e) || 0), 100 * (i /= 2)]
						}, r.hwb.rgb = function(t) {
							var e, n, i, r, a, o, s, l = t[0] / 360,
								u = t[1] / 100,
								d = t[2] / 100,
								h = u + d;
							switch (h > 1 && (u /= h, d /= h), i = 6 * l - (e = Math.floor(6 * l)), 0 !== (1 & e) && (i = 1 - i), r = u + i * ((n = 1 - d) - u), e) {
								default:
								case 6:
								case 0:
									a = n, o = r, s = u;
									break;
								case 1:
									a = r, o = n, s = u;
									break;
								case 2:
									a = u, o = n, s = r;
									break;
								case 3:
									a = u, o = r, s = n;
									break;
								case 4:
									a = r, o = u, s = n;
									break;
								case 5:
									a = n, o = u, s = r
							}
							return [255 * a, 255 * o, 255 * s]
						}, r.cmyk.rgb = function(t) {
							var e = t[0] / 100,
								n = t[1] / 100,
								i = t[2] / 100,
								r = t[3] / 100;
							return [255 * (1 - Math.min(1, e * (1 - r) + r)), 255 * (1 - Math.min(1, n * (1 - r) + r)), 255 * (1 - Math.min(1, i * (1 - r) + r))]
						}, r.xyz.rgb = function(t) {
							var e, n, i, r = t[0] / 100,
								a = t[1] / 100,
								o = t[2] / 100;
							return n = -.9689 * r + 1.8758 * a + .0415 * o, i = .0557 * r + -.204 * a + 1.057 * o, e = (e = 3.2406 * r + -1.5372 * a + -.4986 * o) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : 12.92 * e, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : 12.92 * i, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (i = Math.min(Math.max(0, i), 1))]
						}, r.xyz.lab = function(t) {
							var e = t[0],
								n = t[1],
								i = t[2];
							return n /= 100, i /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (e - n), 200 * (n - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))]
						}, r.lab.xyz = function(t) {
							var e, n, i, r = t[0];
							e = t[1] / 500 + (n = (r + 16) / 116), i = n - t[2] / 200;
							var a = Math.pow(n, 3),
								o = Math.pow(e, 3),
								s = Math.pow(i, 3);
							return n = a > .008856 ? a : (n - 16 / 116) / 7.787, e = o > .008856 ? o : (e - 16 / 116) / 7.787, i = s > .008856 ? s : (i - 16 / 116) / 7.787, [e *= 95.047, n *= 100, i *= 108.883]
						}, r.lab.lch = function(t) {
							var e, n = t[0],
								i = t[1],
								r = t[2];
							return (e = 360 * Math.atan2(r, i) / 2 / Math.PI) < 0 && (e += 360), [n, Math.sqrt(i * i + r * r), e]
						}, r.lch.lab = function(t) {
							var e, n = t[0],
								i = t[1];
							return e = t[2] / 360 * 2 * Math.PI, [n, i * Math.cos(e), i * Math.sin(e)]
						}, r.rgb.ansi16 = function(t) {
							var e = t[0],
								n = t[1],
								i = t[2],
								a = 1 in arguments ? arguments[1] : r.rgb.hsv(t)[2];
							if (0 === (a = Math.round(a / 50))) return 30;
							var o = 30 + (Math.round(i / 255) << 2 | Math.round(n / 255) << 1 | Math.round(e / 255));
							return 2 === a && (o += 60), o
						}, r.hsv.ansi16 = function(t) {
							return r.rgb.ansi16(r.hsv.rgb(t), t[2])
						}, r.rgb.ansi256 = function(t) {
							var e = t[0],
								n = t[1],
								i = t[2];
							return e === n && n === i ? e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(i / 255 * 5)
						}, r.ansi16.rgb = function(t) {
							var e = t % 10;
							if (0 === e || 7 === e) return t > 50 && (e += 3.5), [e = e / 10.5 * 255, e, e];
							var n = .5 * (1 + ~~(t > 50));
							return [(1 & e) * n * 255, (e >> 1 & 1) * n * 255, (e >> 2 & 1) * n * 255]
						}, r.ansi256.rgb = function(t) {
							if (t >= 232) {
								var e = 10 * (t - 232) + 8;
								return [e, e, e]
							}
							var n;
							return t -= 16, [Math.floor(t / 36) / 5 * 255, Math.floor((n = t % 36) / 6) / 5 * 255, n % 6 / 5 * 255]
						}, r.rgb.hex = function(t) {
							var e = (((255 & Math.round(t[0])) << 16) + ((255 & Math.round(t[1])) << 8) + (255 & Math.round(t[2]))).toString(16).toUpperCase();
							return "000000".substring(e.length) + e
						}, r.hex.rgb = function(t) {
							var e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
							if (!e) return [0, 0, 0];
							var n = e[0];
							3 === e[0].length && (n = n.split("").map((function(t) {
								return t + t
							})).join(""));
							var i = parseInt(n, 16);
							return [i >> 16 & 255, i >> 8 & 255, 255 & i]
						}, r.rgb.hcg = function(t) {
							var e, n = t[0] / 255,
								i = t[1] / 255,
								r = t[2] / 255,
								a = Math.max(Math.max(n, i), r),
								o = Math.min(Math.min(n, i), r),
								s = a - o;
							return e = s <= 0 ? 0 : a === n ? (i - r) / s % 6 : a === i ? 2 + (r - n) / s : 4 + (n - i) / s + 4, e /= 6, [360 * (e %= 1), 100 * s, 100 * (s < 1 ? o / (1 - s) : 0)]
						}, r.hsl.hcg = function(t) {
							var e = t[1] / 100,
								n = t[2] / 100,
								i = 1,
								r = 0;
							return (i = n < .5 ? 2 * e * n : 2 * e * (1 - n)) < 1 && (r = (n - .5 * i) / (1 - i)), [t[0], 100 * i, 100 * r]
						}, r.hsv.hcg = function(t) {
							var e = t[1] / 100,
								n = t[2] / 100,
								i = e * n,
								r = 0;
							return i < 1 && (r = (n - i) / (1 - i)), [t[0], 100 * i, 100 * r]
						}, r.hcg.rgb = function(t) {
							var e = t[0] / 360,
								n = t[1] / 100,
								i = t[2] / 100;
							if (0 === n) return [255 * i, 255 * i, 255 * i];
							var r, a = [0, 0, 0],
								o = e % 1 * 6,
								s = o % 1,
								l = 1 - s;
							switch (Math.floor(o)) {
								case 0:
									a[0] = 1, a[1] = s, a[2] = 0;
									break;
								case 1:
									a[0] = l, a[1] = 1, a[2] = 0;
									break;
								case 2:
									a[0] = 0, a[1] = 1, a[2] = s;
									break;
								case 3:
									a[0] = 0, a[1] = l, a[2] = 1;
									break;
								case 4:
									a[0] = s, a[1] = 0, a[2] = 1;
									break;
								default:
									a[0] = 1, a[1] = 0, a[2] = l
							}
							return r = (1 - n) * i, [255 * (n * a[0] + r), 255 * (n * a[1] + r), 255 * (n * a[2] + r)]
						}, r.hcg.hsv = function(t) {
							var e = t[1] / 100,
								n = e + t[2] / 100 * (1 - e),
								i = 0;
							return n > 0 && (i = e / n), [t[0], 100 * i, 100 * n]
						}, r.hcg.hsl = function(t) {
							var e = t[1] / 100,
								n = t[2] / 100 * (1 - e) + .5 * e,
								i = 0;
							return n > 0 && n < .5 ? i = e / (2 * n) : n >= .5 && n < 1 && (i = e / (2 * (1 - n))), [t[0], 100 * i, 100 * n]
						}, r.hcg.hwb = function(t) {
							var e = t[1] / 100,
								n = e + t[2] / 100 * (1 - e);
							return [t[0], 100 * (n - e), 100 * (1 - n)]
						}, r.hwb.hcg = function(t) {
							var e = t[1] / 100,
								n = 1 - t[2] / 100,
								i = n - e,
								r = 0;
							return i < 1 && (r = (n - i) / (1 - i)), [t[0], 100 * i, 100 * r]
						}, r.apple.rgb = function(t) {
							return [t[0] / 65535 * 255, t[1] / 65535 * 255, t[2] / 65535 * 255]
						}, r.rgb.apple = function(t) {
							return [t[0] / 255 * 65535, t[1] / 255 * 65535, t[2] / 255 * 65535]
						}, r.gray.rgb = function(t) {
							return [t[0] / 100 * 255, t[0] / 100 * 255, t[0] / 100 * 255]
						}, r.gray.hsl = r.gray.hsv = function(t) {
							return [0, 0, t[0]]
						}, r.gray.hwb = function(t) {
							return [0, 100, t[0]]
						}, r.gray.cmyk = function(t) {
							return [0, 0, 0, t[0]]
						}, r.gray.lab = function(t) {
							return [t[0], 0, 0]
						}, r.gray.hex = function(t) {
							var e = 255 & Math.round(t[0] / 100 * 255),
								n = ((e << 16) + (e << 8) + e).toString(16).toUpperCase();
							return "000000".substring(n.length) + n
						}, r.rgb.gray = function(t) {
							return [(t[0] + t[1] + t[2]) / 3 / 255 * 100]
						}
					}));

				function i(t) {
					var e = function() {
							for (var t = {}, e = Object.keys(n), i = e.length, r = 0; r < i; r++) t[e[r]] = {
								distance: -1,
								parent: null
							};
							return t
						}(),
						i = [t];
					for (e[t].distance = 0; i.length;)
						for (var r = i.pop(), a = Object.keys(n[r]), o = a.length, s = 0; s < o; s++) {
							var l = a[s],
								u = e[l]; - 1 === u.distance && (u.distance = e[r].distance + 1, u.parent = r, i.unshift(l))
						}
					return e
				}

				function r(t, e) {
					return function(n) {
						return e(t(n))
					}
				}

				function a(t, e) {
					for (var i = [e[t].parent, t], a = n[e[t].parent][t], o = e[t].parent; e[o].parent;) i.unshift(e[o].parent), a = r(n[e[o].parent][o], a), o = e[o].parent;
					return a.conversion = i, a
				}
				n.rgb, n.hsl, n.hsv, n.hwb, n.cmyk, n.xyz, n.lab, n.lch, n.hex, n.keyword, n.ansi16, n.ansi256, n.hcg, n.apple, n.gray;
				var o = {};
				Object.keys(n).forEach((function(t) {
					o[t] = {}, Object.defineProperty(o[t], "channels", {
						value: n[t].channels
					}), Object.defineProperty(o[t], "labels", {
						value: n[t].labels
					});
					var e = function(t) {
						for (var e = i(t), n = {}, r = Object.keys(e), o = r.length, s = 0; s < o; s++) {
							var l = r[s];
							null !== e[l].parent && (n[l] = a(l, e))
						}
						return n
					}(t);
					Object.keys(e).forEach((function(n) {
						var i = e[n];
						o[t][n] = function(t) {
							var e = function(e) {
								if (void 0 === e || null === e) return e;
								arguments.length > 1 && (e = Array.prototype.slice.call(arguments));
								var n = t(e);
								if ("object" === typeof n)
									for (var i = n.length, r = 0; r < i; r++) n[r] = Math.round(n[r]);
								return n
							};
							return "conversion" in t && (e.conversion = t.conversion), e
						}(i), o[t][n].raw = function(t) {
							var e = function(e) {
								return void 0 === e || null === e ? e : (arguments.length > 1 && (e = Array.prototype.slice.call(arguments)), t(e))
							};
							return "conversion" in t && (e.conversion = t.conversion), e
						}(i)
					}))
				}));
				var s = o,
					l = {
						aliceblue: [240, 248, 255],
						antiquewhite: [250, 235, 215],
						aqua: [0, 255, 255],
						aquamarine: [127, 255, 212],
						azure: [240, 255, 255],
						beige: [245, 245, 220],
						bisque: [255, 228, 196],
						black: [0, 0, 0],
						blanchedalmond: [255, 235, 205],
						blue: [0, 0, 255],
						blueviolet: [138, 43, 226],
						brown: [165, 42, 42],
						burlywood: [222, 184, 135],
						cadetblue: [95, 158, 160],
						chartreuse: [127, 255, 0],
						chocolate: [210, 105, 30],
						coral: [255, 127, 80],
						cornflowerblue: [100, 149, 237],
						cornsilk: [255, 248, 220],
						crimson: [220, 20, 60],
						cyan: [0, 255, 255],
						darkblue: [0, 0, 139],
						darkcyan: [0, 139, 139],
						darkgoldenrod: [184, 134, 11],
						darkgray: [169, 169, 169],
						darkgreen: [0, 100, 0],
						darkgrey: [169, 169, 169],
						darkkhaki: [189, 183, 107],
						darkmagenta: [139, 0, 139],
						darkolivegreen: [85, 107, 47],
						darkorange: [255, 140, 0],
						darkorchid: [153, 50, 204],
						darkred: [139, 0, 0],
						darksalmon: [233, 150, 122],
						darkseagreen: [143, 188, 143],
						darkslateblue: [72, 61, 139],
						darkslategray: [47, 79, 79],
						darkslategrey: [47, 79, 79],
						darkturquoise: [0, 206, 209],
						darkviolet: [148, 0, 211],
						deeppink: [255, 20, 147],
						deepskyblue: [0, 191, 255],
						dimgray: [105, 105, 105],
						dimgrey: [105, 105, 105],
						dodgerblue: [30, 144, 255],
						firebrick: [178, 34, 34],
						floralwhite: [255, 250, 240],
						forestgreen: [34, 139, 34],
						fuchsia: [255, 0, 255],
						gainsboro: [220, 220, 220],
						ghostwhite: [248, 248, 255],
						gold: [255, 215, 0],
						goldenrod: [218, 165, 32],
						gray: [128, 128, 128],
						green: [0, 128, 0],
						greenyellow: [173, 255, 47],
						grey: [128, 128, 128],
						honeydew: [240, 255, 240],
						hotpink: [255, 105, 180],
						indianred: [205, 92, 92],
						indigo: [75, 0, 130],
						ivory: [255, 255, 240],
						khaki: [240, 230, 140],
						lavender: [230, 230, 250],
						lavenderblush: [255, 240, 245],
						lawngreen: [124, 252, 0],
						lemonchiffon: [255, 250, 205],
						lightblue: [173, 216, 230],
						lightcoral: [240, 128, 128],
						lightcyan: [224, 255, 255],
						lightgoldenrodyellow: [250, 250, 210],
						lightgray: [211, 211, 211],
						lightgreen: [144, 238, 144],
						lightgrey: [211, 211, 211],
						lightpink: [255, 182, 193],
						lightsalmon: [255, 160, 122],
						lightseagreen: [32, 178, 170],
						lightskyblue: [135, 206, 250],
						lightslategray: [119, 136, 153],
						lightslategrey: [119, 136, 153],
						lightsteelblue: [176, 196, 222],
						lightyellow: [255, 255, 224],
						lime: [0, 255, 0],
						limegreen: [50, 205, 50],
						linen: [250, 240, 230],
						magenta: [255, 0, 255],
						maroon: [128, 0, 0],
						mediumaquamarine: [102, 205, 170],
						mediumblue: [0, 0, 205],
						mediumorchid: [186, 85, 211],
						mediumpurple: [147, 112, 219],
						mediumseagreen: [60, 179, 113],
						mediumslateblue: [123, 104, 238],
						mediumspringgreen: [0, 250, 154],
						mediumturquoise: [72, 209, 204],
						mediumvioletred: [199, 21, 133],
						midnightblue: [25, 25, 112],
						mintcream: [245, 255, 250],
						mistyrose: [255, 228, 225],
						moccasin: [255, 228, 181],
						navajowhite: [255, 222, 173],
						navy: [0, 0, 128],
						oldlace: [253, 245, 230],
						olive: [128, 128, 0],
						olivedrab: [107, 142, 35],
						orange: [255, 165, 0],
						orangered: [255, 69, 0],
						orchid: [218, 112, 214],
						palegoldenrod: [238, 232, 170],
						palegreen: [152, 251, 152],
						paleturquoise: [175, 238, 238],
						palevioletred: [219, 112, 147],
						papayawhip: [255, 239, 213],
						peachpuff: [255, 218, 185],
						peru: [205, 133, 63],
						pink: [255, 192, 203],
						plum: [221, 160, 221],
						powderblue: [176, 224, 230],
						purple: [128, 0, 128],
						rebeccapurple: [102, 51, 153],
						red: [255, 0, 0],
						rosybrown: [188, 143, 143],
						royalblue: [65, 105, 225],
						saddlebrown: [139, 69, 19],
						salmon: [250, 128, 114],
						sandybrown: [244, 164, 96],
						seagreen: [46, 139, 87],
						seashell: [255, 245, 238],
						sienna: [160, 82, 45],
						silver: [192, 192, 192],
						skyblue: [135, 206, 235],
						slateblue: [106, 90, 205],
						slategray: [112, 128, 144],
						slategrey: [112, 128, 144],
						snow: [255, 250, 250],
						springgreen: [0, 255, 127],
						steelblue: [70, 130, 180],
						tan: [210, 180, 140],
						teal: [0, 128, 128],
						thistle: [216, 191, 216],
						tomato: [255, 99, 71],
						turquoise: [64, 224, 208],
						violet: [238, 130, 238],
						wheat: [245, 222, 179],
						white: [255, 255, 255],
						whitesmoke: [245, 245, 245],
						yellow: [255, 255, 0],
						yellowgreen: [154, 205, 50]
					},
					u = {
						getRgba: d,
						getHsla: h,
						getRgb: function(t) {
							var e = d(t);
							return e && e.slice(0, 3)
						},
						getHsl: function(t) {
							var e = h(t);
							return e && e.slice(0, 3)
						},
						getHwb: c,
						getAlpha: function(t) {
							var e = d(t);
							return e || (e = h(t)) || (e = c(t)) ? e[3] : void 0
						},
						hexString: function(t, e) {
							return e = void 0 !== e && 3 === t.length ? e : t[3], "#" + v(t[0]) + v(t[1]) + v(t[2]) + (e >= 0 && e < 1 ? v(Math.round(255 * e)) : "")
						},
						rgbString: function(t, e) {
							return e < 1 || t[3] && t[3] < 1 ? f(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
						},
						rgbaString: f,
						percentString: function(t, e) {
							if (e < 1 || t[3] && t[3] < 1) return g(t, e);
							var n = Math.round(t[0] / 255 * 100),
								i = Math.round(t[1] / 255 * 100),
								r = Math.round(t[2] / 255 * 100);
							return "rgb(" + n + "%, " + i + "%, " + r + "%)"
						},
						percentaString: g,
						hslString: function(t, e) {
							return e < 1 || t[3] && t[3] < 1 ? m(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
						},
						hslaString: m,
						hwbString: function(t, e) {
							return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
						},
						keyword: function(t) {
							return y[t.slice(0, 3)]
						}
					};

				function d(t) {
					if (t) {
						var e = [0, 0, 0],
							n = 1,
							i = t.match(/^#([a-fA-F0-9]{3,4})$/i),
							r = "";
						if (i) {
							r = (i = i[1])[3];
							for (var a = 0; a < e.length; a++) e[a] = parseInt(i[a] + i[a], 16);
							r && (n = Math.round(parseInt(r + r, 16) / 255 * 100) / 100)
						} else if (i = t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) {
							for (r = i[2], i = i[1], a = 0; a < e.length; a++) e[a] = parseInt(i.slice(2 * a, 2 * a + 2), 16);
							r && (n = Math.round(parseInt(r, 16) / 255 * 100) / 100)
						} else if (i = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
							for (a = 0; a < e.length; a++) e[a] = parseInt(i[a + 1]);
							n = parseFloat(i[4])
						} else if (i = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
							for (a = 0; a < e.length; a++) e[a] = Math.round(2.55 * parseFloat(i[a + 1]));
							n = parseFloat(i[4])
						} else if (i = t.match(/(\w+)/)) {
							if ("transparent" == i[1]) return [0, 0, 0, 0];
							if (!(e = l[i[1]])) return
						}
						for (a = 0; a < e.length; a++) e[a] = p(e[a], 0, 255);
						return n = n || 0 == n ? p(n, 0, 1) : 1, e[3] = n, e
					}
				}

				function h(t) {
					if (t) {
						var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
						if (e) {
							var n = parseFloat(e[4]);
							return [p(parseInt(e[1]), 0, 360), p(parseFloat(e[2]), 0, 100), p(parseFloat(e[3]), 0, 100), p(isNaN(n) ? 1 : n, 0, 1)]
						}
					}
				}

				function c(t) {
					if (t) {
						var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
						if (e) {
							var n = parseFloat(e[4]);
							return [p(parseInt(e[1]), 0, 360), p(parseFloat(e[2]), 0, 100), p(parseFloat(e[3]), 0, 100), p(isNaN(n) ? 1 : n, 0, 1)]
						}
					}
				}

				function f(t, e) {
					return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
				}

				function g(t, e) {
					return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
				}

				function m(t, e) {
					return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
				}

				function p(t, e, n) {
					return Math.min(Math.max(e, t), n)
				}

				function v(t) {
					var e = t.toString(16).toUpperCase();
					return e.length < 2 ? "0" + e : e
				}
				var y = {};
				for (var b in l) y[l[b]] = b;
				var x = function(t) {
					return t instanceof x ? t : this instanceof x ? (this.valid = !1, this.values = {
						rgb: [0, 0, 0],
						hsl: [0, 0, 0],
						hsv: [0, 0, 0],
						hwb: [0, 0, 0],
						cmyk: [0, 0, 0, 0],
						alpha: 1
					}, void("string" === typeof t ? (e = u.getRgba(t)) ? this.setValues("rgb", e) : (e = u.getHsla(t)) ? this.setValues("hsl", e) : (e = u.getHwb(t)) && this.setValues("hwb", e) : "object" === typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new x(t);
					var e
				};
				x.prototype = {
					isValid: function() {
						return this.valid
					},
					rgb: function() {
						return this.setSpace("rgb", arguments)
					},
					hsl: function() {
						return this.setSpace("hsl", arguments)
					},
					hsv: function() {
						return this.setSpace("hsv", arguments)
					},
					hwb: function() {
						return this.setSpace("hwb", arguments)
					},
					cmyk: function() {
						return this.setSpace("cmyk", arguments)
					},
					rgbArray: function() {
						return this.values.rgb
					},
					hslArray: function() {
						return this.values.hsl
					},
					hsvArray: function() {
						return this.values.hsv
					},
					hwbArray: function() {
						var t = this.values;
						return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
					},
					cmykArray: function() {
						return this.values.cmyk
					},
					rgbaArray: function() {
						var t = this.values;
						return t.rgb.concat([t.alpha])
					},
					hslaArray: function() {
						var t = this.values;
						return t.hsl.concat([t.alpha])
					},
					alpha: function(t) {
						return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
					},
					red: function(t) {
						return this.setChannel("rgb", 0, t)
					},
					green: function(t) {
						return this.setChannel("rgb", 1, t)
					},
					blue: function(t) {
						return this.setChannel("rgb", 2, t)
					},
					hue: function(t) {
						return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
					},
					saturation: function(t) {
						return this.setChannel("hsl", 1, t)
					},
					lightness: function(t) {
						return this.setChannel("hsl", 2, t)
					},
					saturationv: function(t) {
						return this.setChannel("hsv", 1, t)
					},
					whiteness: function(t) {
						return this.setChannel("hwb", 1, t)
					},
					blackness: function(t) {
						return this.setChannel("hwb", 2, t)
					},
					value: function(t) {
						return this.setChannel("hsv", 2, t)
					},
					cyan: function(t) {
						return this.setChannel("cmyk", 0, t)
					},
					magenta: function(t) {
						return this.setChannel("cmyk", 1, t)
					},
					yellow: function(t) {
						return this.setChannel("cmyk", 2, t)
					},
					black: function(t) {
						return this.setChannel("cmyk", 3, t)
					},
					hexString: function() {
						return u.hexString(this.values.rgb)
					},
					rgbString: function() {
						return u.rgbString(this.values.rgb, this.values.alpha)
					},
					rgbaString: function() {
						return u.rgbaString(this.values.rgb, this.values.alpha)
					},
					percentString: function() {
						return u.percentString(this.values.rgb, this.values.alpha)
					},
					hslString: function() {
						return u.hslString(this.values.hsl, this.values.alpha)
					},
					hslaString: function() {
						return u.hslaString(this.values.hsl, this.values.alpha)
					},
					hwbString: function() {
						return u.hwbString(this.values.hwb, this.values.alpha)
					},
					keyword: function() {
						return u.keyword(this.values.rgb, this.values.alpha)
					},
					rgbNumber: function() {
						var t = this.values.rgb;
						return t[0] << 16 | t[1] << 8 | t[2]
					},
					luminosity: function() {
						for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
							var i = t[n] / 255;
							e[n] = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4)
						}
						return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
					},
					contrast: function(t) {
						var e = this.luminosity(),
							n = t.luminosity();
						return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05)
					},
					level: function(t) {
						var e = this.contrast(t);
						return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
					},
					dark: function() {
						var t = this.values.rgb;
						return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
					},
					light: function() {
						return !this.dark()
					},
					negate: function() {
						for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
						return this.setValues("rgb", t), this
					},
					lighten: function(t) {
						var e = this.values.hsl;
						return e[2] += e[2] * t, this.setValues("hsl", e), this
					},
					darken: function(t) {
						var e = this.values.hsl;
						return e[2] -= e[2] * t, this.setValues("hsl", e), this
					},
					saturate: function(t) {
						var e = this.values.hsl;
						return e[1] += e[1] * t, this.setValues("hsl", e), this
					},
					desaturate: function(t) {
						var e = this.values.hsl;
						return e[1] -= e[1] * t, this.setValues("hsl", e), this
					},
					whiten: function(t) {
						var e = this.values.hwb;
						return e[1] += e[1] * t, this.setValues("hwb", e), this
					},
					blacken: function(t) {
						var e = this.values.hwb;
						return e[2] += e[2] * t, this.setValues("hwb", e), this
					},
					greyscale: function() {
						var t = this.values.rgb,
							e = .3 * t[0] + .59 * t[1] + .11 * t[2];
						return this.setValues("rgb", [e, e, e]), this
					},
					clearer: function(t) {
						var e = this.values.alpha;
						return this.setValues("alpha", e - e * t), this
					},
					opaquer: function(t) {
						var e = this.values.alpha;
						return this.setValues("alpha", e + e * t), this
					},
					rotate: function(t) {
						var e = this.values.hsl,
							n = (e[0] + t) % 360;
						return e[0] = n < 0 ? 360 + n : n, this.setValues("hsl", e), this
					},
					mix: function(t, e) {
						var n = t,
							i = void 0 === e ? .5 : e,
							r = 2 * i - 1,
							a = this.alpha() - n.alpha(),
							o = ((r * a === -1 ? r : (r + a) / (1 + r * a)) + 1) / 2,
							s = 1 - o;
						return this.rgb(o * this.red() + s * n.red(), o * this.green() + s * n.green(), o * this.blue() + s * n.blue()).alpha(this.alpha() * i + n.alpha() * (1 - i))
					},
					toJSON: function() {
						return this.rgb()
					},
					clone: function() {
						var t, e, n = new x,
							i = this.values,
							r = n.values;
						for (var a in i) i.hasOwnProperty(a) && (t = i[a], "[object Array]" === (e = {}.toString.call(t)) ? r[a] = t.slice(0) : "[object Number]" === e ? r[a] = t : console.error("unexpected color value:", t));
						return n
					}
				}, x.prototype.spaces = {
					rgb: ["red", "green", "blue"],
					hsl: ["hue", "saturation", "lightness"],
					hsv: ["hue", "saturation", "value"],
					hwb: ["hue", "whiteness", "blackness"],
					cmyk: ["cyan", "magenta", "yellow", "black"]
				}, x.prototype.maxes = {
					rgb: [255, 255, 255],
					hsl: [360, 100, 100],
					hsv: [360, 100, 100],
					hwb: [360, 100, 100],
					cmyk: [100, 100, 100, 100]
				}, x.prototype.getValues = function(t) {
					for (var e = this.values, n = {}, i = 0; i < t.length; i++) n[t.charAt(i)] = e[t][i];
					return 1 !== e.alpha && (n.a = e.alpha), n
				}, x.prototype.setValues = function(t, e) {
					var n, i, r = this.values,
						a = this.spaces,
						o = this.maxes,
						l = 1;
					if (this.valid = !0, "alpha" === t) l = e;
					else if (e.length) r[t] = e.slice(0, t.length), l = e[t.length];
					else if (void 0 !== e[t.charAt(0)]) {
						for (n = 0; n < t.length; n++) r[t][n] = e[t.charAt(n)];
						l = e.a
					} else if (void 0 !== e[a[t][0]]) {
						var u = a[t];
						for (n = 0; n < t.length; n++) r[t][n] = e[u[n]];
						l = e.alpha
					}
					if (r.alpha = Math.max(0, Math.min(1, void 0 === l ? r.alpha : l)), "alpha" === t) return !1;
					for (n = 0; n < t.length; n++) i = Math.max(0, Math.min(o[t][n], r[t][n])), r[t][n] = Math.round(i);
					for (var d in a) d !== t && (r[d] = s[t][d](r[t]));
					return !0
				}, x.prototype.setSpace = function(t, e) {
					var n = e[0];
					return void 0 === n ? this.getValues(t) : ("number" === typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this)
				}, x.prototype.setChannel = function(t, e, n) {
					var i = this.values[t];
					return void 0 === n ? i[e] : (n === i[e] || (i[e] = n, this.setValues(t, i)), this)
				}, "undefined" !== typeof window && (window.Color = x);
				var _ = x;

				function w(t) {
					return -1 === ["__proto__", "prototype", "constructor"].indexOf(t)
				}
				var k, M = {
						noop: function() {},
						uid: (k = 0, function() {
							return k++
						}),
						isNullOrUndef: function(t) {
							return null === t || "undefined" === typeof t
						},
						isArray: function(t) {
							if (Array.isArray && Array.isArray(t)) return !0;
							var e = Object.prototype.toString.call(t);
							return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6)
						},
						isObject: function(t) {
							return null !== t && "[object Object]" === Object.prototype.toString.call(t)
						},
						isFinite: function(t) {
							return ("number" === typeof t || t instanceof Number) && isFinite(t)
						},
						valueOrDefault: function(t, e) {
							return "undefined" === typeof t ? e : t
						},
						valueAtIndexOrDefault: function(t, e, n) {
							return M.valueOrDefault(M.isArray(t) ? t[e] : t, n)
						},
						callback: function(t, e, n) {
							if (t && "function" === typeof t.call) return t.apply(n, e)
						},
						each: function(t, e, n, i) {
							var r, a, o;
							if (M.isArray(t))
								if (a = t.length, i)
									for (r = a - 1; r >= 0; r--) e.call(n, t[r], r);
								else
									for (r = 0; r < a; r++) e.call(n, t[r], r);
							else if (M.isObject(t))
								for (a = (o = Object.keys(t)).length, r = 0; r < a; r++) e.call(n, t[o[r]], o[r])
						},
						arrayEquals: function(t, e) {
							var n, i, r, a;
							if (!t || !e || t.length !== e.length) return !1;
							for (n = 0, i = t.length; n < i; ++n)
								if (r = t[n], a = e[n], r instanceof Array && a instanceof Array) {
									if (!M.arrayEquals(r, a)) return !1
								} else if (r !== a) return !1;
							return !0
						},
						clone: function(t) {
							if (M.isArray(t)) return t.map(M.clone);
							if (M.isObject(t)) {
								for (var e = Object.create(t), n = Object.keys(t), i = n.length, r = 0; r < i; ++r) e[n[r]] = M.clone(t[n[r]]);
								return e
							}
							return t
						},
						_merger: function(t, e, n, i) {
							if (w(t)) {
								var r = e[t],
									a = n[t];
								M.isObject(r) && M.isObject(a) ? M.merge(r, a, i) : e[t] = M.clone(a)
							}
						},
						_mergerIf: function(t, e, n) {
							if (w(t)) {
								var i = e[t],
									r = n[t];
								M.isObject(i) && M.isObject(r) ? M.mergeIf(i, r) : e.hasOwnProperty(t) || (e[t] = M.clone(r))
							}
						},
						merge: function(t, e, n) {
							var i, r, a, o, s, l = M.isArray(e) ? e : [e],
								u = l.length;
							if (!M.isObject(t)) return t;
							for (i = (n = n || {}).merger || M._merger, r = 0; r < u; ++r)
								if (e = l[r], M.isObject(e))
									for (s = 0, o = (a = Object.keys(e)).length; s < o; ++s) i(a[s], t, e, n);
							return t
						},
						mergeIf: function(t, e) {
							return M.merge(t, e, {
								merger: M._mergerIf
							})
						},
						extend: Object.assign || function(t) {
							return M.merge(t, [].slice.call(arguments, 1), {
								merger: function(t, e, n) {
									e[t] = n[t]
								}
							})
						},
						inherits: function(t) {
							var e = this,
								n = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
									return e.apply(this, arguments)
								},
								i = function() {
									this.constructor = n
								};
							return i.prototype = e.prototype, n.prototype = new i, n.extend = M.inherits, t && M.extend(n.prototype, t), n.__super__ = e.prototype, n
						},
						_deprecated: function(t, e, n, i) {
							void 0 !== e && console.warn(t + ': "' + n + '" is deprecated. Please use "' + i + '" instead')
						}
					},
					S = M;
				M.callCallback = M.callback, M.indexOf = function(t, e, n) {
					return Array.prototype.indexOf.call(t, e, n)
				}, M.getValueOrDefault = M.valueOrDefault, M.getValueAtIndexOrDefault = M.valueAtIndexOrDefault;
				var D = {
						linear: function(t) {
							return t
						},
						easeInQuad: function(t) {
							return t * t
						},
						easeOutQuad: function(t) {
							return -t * (t - 2)
						},
						easeInOutQuad: function(t) {
							return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
						},
						easeInCubic: function(t) {
							return t * t * t
						},
						easeOutCubic: function(t) {
							return (t -= 1) * t * t + 1
						},
						easeInOutCubic: function(t) {
							return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
						},
						easeInQuart: function(t) {
							return t * t * t * t
						},
						easeOutQuart: function(t) {
							return -((t -= 1) * t * t * t - 1)
						},
						easeInOutQuart: function(t) {
							return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
						},
						easeInQuint: function(t) {
							return t * t * t * t * t
						},
						easeOutQuint: function(t) {
							return (t -= 1) * t * t * t * t + 1
						},
						easeInOutQuint: function(t) {
							return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
						},
						easeInSine: function(t) {
							return 1 - Math.cos(t * (Math.PI / 2))
						},
						easeOutSine: function(t) {
							return Math.sin(t * (Math.PI / 2))
						},
						easeInOutSine: function(t) {
							return -.5 * (Math.cos(Math.PI * t) - 1)
						},
						easeInExpo: function(t) {
							return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
						},
						easeOutExpo: function(t) {
							return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
						},
						easeInOutExpo: function(t) {
							return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
						},
						easeInCirc: function(t) {
							return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)
						},
						easeOutCirc: function(t) {
							return Math.sqrt(1 - (t -= 1) * t)
						},
						easeInOutCirc: function(t) {
							return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
						},
						easeInElastic: function(t) {
							var e = 1.70158,
								n = 0,
								i = 1;
							return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n))
						},
						easeOutElastic: function(t) {
							var e = 1.70158,
								n = 0,
								i = 1;
							return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
						},
						easeInOutElastic: function(t) {
							var e = 1.70158,
								n = 0,
								i = 1;
							return 0 === t ? 0 : 2 === (t /= .5) ? 1 : (n || (n = .45), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), t < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
						},
						easeInBack: function(t) {
							var e = 1.70158;
							return t * t * ((e + 1) * t - e)
						},
						easeOutBack: function(t) {
							var e = 1.70158;
							return (t -= 1) * t * ((e + 1) * t + e) + 1
						},
						easeInOutBack: function(t) {
							var e = 1.70158;
							return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
						},
						easeInBounce: function(t) {
							return 1 - D.easeOutBounce(1 - t)
						},
						easeOutBounce: function(t) {
							return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
						},
						easeInOutBounce: function(t) {
							return t < .5 ? .5 * D.easeInBounce(2 * t) : .5 * D.easeOutBounce(2 * t - 1) + .5
						}
					},
					C = {
						effects: D
					};
				S.easingEffects = D;
				var P = Math.PI,
					T = P / 180,
					O = 2 * P,
					A = P / 2,
					F = P / 4,
					I = 2 * P / 3,
					N = {
						clear: function(t) {
							t.ctx.clearRect(0, 0, t.width, t.height)
						},
						roundedRect: function(t, e, n, i, r, a) {
							if (a) {
								var o = Math.min(a, r / 2, i / 2),
									s = e + o,
									l = n + o,
									u = e + i - o,
									d = n + r - o;
								t.moveTo(e, l), s < u && l < d ? (t.arc(s, l, o, -P, -A), t.arc(u, l, o, -A, 0), t.arc(u, d, o, 0, A), t.arc(s, d, o, A, P)) : s < u ? (t.moveTo(s, n), t.arc(u, l, o, -A, A), t.arc(s, l, o, A, P + A)) : l < d ? (t.arc(s, l, o, -P, 0), t.arc(s, d, o, 0, P)) : t.arc(s, l, o, -P, P), t.closePath(), t.moveTo(e, n)
							} else t.rect(e, n, i, r)
						},
						drawPoint: function(t, e, n, i, r, a) {
							var o, s, l, u, d, h = (a || 0) * T;
							if (e && "object" === typeof e && ("[object HTMLImageElement]" === (o = e.toString()) || "[object HTMLCanvasElement]" === o)) return t.save(), t.translate(i, r), t.rotate(h), t.drawImage(e, -e.width / 2, -e.height / 2, e.width, e.height), void t.restore();
							if (!(isNaN(n) || n <= 0)) {
								switch (t.beginPath(), e) {
									default:
										t.arc(i, r, n, 0, O), t.closePath();
										break;
									case "triangle":
										t.moveTo(i + Math.sin(h) * n, r - Math.cos(h) * n), h += I, t.lineTo(i + Math.sin(h) * n, r - Math.cos(h) * n), h += I, t.lineTo(i + Math.sin(h) * n, r - Math.cos(h) * n), t.closePath();
										break;
									case "rectRounded":
										u = n - (d = .516 * n), s = Math.cos(h + F) * u, l = Math.sin(h + F) * u, t.arc(i - s, r - l, d, h - P, h - A), t.arc(i + l, r - s, d, h - A, h), t.arc(i + s, r + l, d, h, h + A), t.arc(i - l, r + s, d, h + A, h + P), t.closePath();
										break;
									case "rect":
										if (!a) {
											u = Math.SQRT1_2 * n, t.rect(i - u, r - u, 2 * u, 2 * u);
											break
										}
										h += F;
									case "rectRot":
										s = Math.cos(h) * n, l = Math.sin(h) * n, t.moveTo(i - s, r - l), t.lineTo(i + l, r - s), t.lineTo(i + s, r + l), t.lineTo(i - l, r + s), t.closePath();
										break;
									case "crossRot":
										h += F;
									case "cross":
										s = Math.cos(h) * n, l = Math.sin(h) * n, t.moveTo(i - s, r - l), t.lineTo(i + s, r + l), t.moveTo(i + l, r - s), t.lineTo(i - l, r + s);
										break;
									case "star":
										s = Math.cos(h) * n, l = Math.sin(h) * n, t.moveTo(i - s, r - l), t.lineTo(i + s, r + l), t.moveTo(i + l, r - s), t.lineTo(i - l, r + s), h += F, s = Math.cos(h) * n, l = Math.sin(h) * n, t.moveTo(i - s, r - l), t.lineTo(i + s, r + l), t.moveTo(i + l, r - s), t.lineTo(i - l, r + s);
										break;
									case "line":
										s = Math.cos(h) * n, l = Math.sin(h) * n, t.moveTo(i - s, r - l), t.lineTo(i + s, r + l);
										break;
									case "dash":
										t.moveTo(i, r), t.lineTo(i + Math.cos(h) * n, r + Math.sin(h) * n)
								}
								t.fill(), t.stroke()
							}
						},
						_isPointInArea: function(t, e) {
							return t.x > e.left - 1e-6 && t.x < e.right + 1e-6 && t.y > e.top - 1e-6 && t.y < e.bottom + 1e-6
						},
						clipArea: function(t, e) {
							t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
						},
						unclipArea: function(t) {
							t.restore()
						},
						lineTo: function(t, e, n, i) {
							var r = n.steppedLine;
							if (r) {
								if ("middle" === r) {
									var a = (e.x + n.x) / 2;
									t.lineTo(a, i ? n.y : e.y), t.lineTo(a, i ? e.y : n.y)
								} else "after" === r && !i || "after" !== r && i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
								t.lineTo(n.x, n.y)
							} else n.tension ? t.bezierCurveTo(i ? e.controlPointPreviousX : e.controlPointNextX, i ? e.controlPointPreviousY : e.controlPointNextY, i ? n.controlPointNextX : n.controlPointPreviousX, i ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : t.lineTo(n.x, n.y)
						}
					},
					R = N;
				S.clear = N.clear, S.drawRoundedRectangle = function(t) {
					t.beginPath(), N.roundedRect.apply(N, arguments)
				};
				var L = {
					_set: function(t, e) {
						return S.merge(this[t] || (this[t] = {}), e)
					}
				};
				L._set("global", {
					defaultColor: "rgba(0,0,0,0.1)",
					defaultFontColor: "#666",
					defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
					defaultFontSize: 12,
					defaultFontStyle: "normal",
					defaultLineHeight: 1.2,
					showLines: !0
				});
				var Y = L,
					W = S.valueOrDefault,
					E = {
						toLineHeight: function(t, e) {
							var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
							if (!n || "normal" === n[1]) return 1.2 * e;
							switch (t = +n[2], n[3]) {
								case "px":
									return t;
								case "%":
									t /= 100
							}
							return e * t
						},
						toPadding: function(t) {
							var e, n, i, r;
							return S.isObject(t) ? (e = +t.top || 0, n = +t.right || 0, i = +t.bottom || 0, r = +t.left || 0) : e = n = i = r = +t || 0, {
								top: e,
								right: n,
								bottom: i,
								left: r,
								height: e + i,
								width: r + n
							}
						},
						_parseFont: function(t) {
							var e = Y.global,
								n = W(t.fontSize, e.defaultFontSize),
								i = {
									family: W(t.fontFamily, e.defaultFontFamily),
									lineHeight: S.options.toLineHeight(W(t.lineHeight, e.defaultLineHeight), n),
									size: n,
									style: W(t.fontStyle, e.defaultFontStyle),
									weight: null,
									string: ""
								};
							return i.string = function(t) {
								return !t || S.isNullOrUndef(t.size) || S.isNullOrUndef(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family
							}(i), i
						},
						resolve: function(t, e, n, i) {
							var r, a, o, s = !0;
							for (r = 0, a = t.length; r < a; ++r)
								if (void 0 !== (o = t[r]) && (void 0 !== e && "function" === typeof o && (o = o(e), s = !1), void 0 !== n && S.isArray(o) && (o = o[n], s = !1), void 0 !== o)) return i && !s && (i.cacheable = !1), o
						}
					},
					z = {
						_factorize: function(t) {
							var e, n = [],
								i = Math.sqrt(t);
							for (e = 1; e < i; e++) t % e === 0 && (n.push(e), n.push(t / e));
							return i === (0 | i) && n.push(i), n.sort((function(t, e) {
								return t - e
							})).pop(), n
						},
						log10: Math.log10 || function(t) {
							var e = Math.log(t) * Math.LOG10E,
								n = Math.round(e);
							return t === Math.pow(10, n) ? n : e
						}
					},
					V = z;
				S.log10 = z.log10;
				var B = S,
					H = C,
					j = R,
					U = E,
					G = V,
					q = {
						getRtlAdapter: function(t, e, n) {
							return t ? function(t, e) {
								return {
									x: function(n) {
										return t + t + e - n
									},
									setWidth: function(t) {
										e = t
									},
									textAlign: function(t) {
										return "center" === t ? t : "right" === t ? "left" : "right"
									},
									xPlus: function(t, e) {
										return t - e
									},
									leftForLtr: function(t, e) {
										return t - e
									}
								}
							}(e, n) : {
								x: function(t) {
									return t
								},
								setWidth: function(t) {},
								textAlign: function(t) {
									return t
								},
								xPlus: function(t, e) {
									return t + e
								},
								leftForLtr: function(t, e) {
									return t
								}
							}
						},
						overrideTextDirection: function(t, e) {
							var n, i;
							"ltr" !== e && "rtl" !== e || (i = [(n = t.canvas.style).getPropertyValue("direction"), n.getPropertyPriority("direction")], n.setProperty("direction", e, "important"), t.prevTextDirection = i)
						},
						restoreTextDirection: function(t) {
							var e = t.prevTextDirection;
							void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]))
						}
					};
				B.easing = H, B.canvas = j, B.options = U, B.math = G, B.rtl = q;
				var Z = function(t) {
					B.extend(this, t), this.initialize.apply(this, arguments)
				};
				B.extend(Z.prototype, {
					_type: void 0,
					initialize: function() {
						this.hidden = !1
					},
					pivot: function() {
						var t = this;
						return t._view || (t._view = B.extend({}, t._model)), t._start = {}, t
					},
					transition: function(t) {
						var e = this,
							n = e._model,
							i = e._start,
							r = e._view;
						return n && 1 !== t ? (r || (r = e._view = {}), i || (i = e._start = {}), function(t, e, n, i) {
							var r, a, o, s, l, u, d, h, c, f = Object.keys(n);
							for (r = 0, a = f.length; r < a; ++r)
								if (u = n[o = f[r]], e.hasOwnProperty(o) || (e[o] = u), (s = e[o]) !== u && "_" !== o[0]) {
									if (t.hasOwnProperty(o) || (t[o] = s), (d = typeof u) === typeof(l = t[o]))
										if ("string" === d) {
											if ((h = _(l)).valid && (c = _(u)).valid) {
												e[o] = c.mix(h, i).rgbString();
												continue
											}
										} else if (B.isFinite(l) && B.isFinite(u)) {
										e[o] = l + (u - l) * i;
										continue
									}
									e[o] = u
								}
						}(i, r, n, t), e) : (e._view = B.extend({}, n), e._start = null, e)
					},
					tooltipPosition: function() {
						return {
							x: this._model.x,
							y: this._model.y
						}
					},
					hasValue: function() {
						return B.isNumber(this._model.x) && B.isNumber(this._model.y)
					}
				}), Z.extend = B.inherits;
				var $ = Z,
					X = $.extend({
						chart: null,
						currentStep: 0,
						numSteps: 60,
						easing: "",
						render: null,
						onAnimationProgress: null,
						onAnimationComplete: null
					}),
					K = X;
				Object.defineProperty(X.prototype, "animationObject", {
					get: function() {
						return this
					}
				}), Object.defineProperty(X.prototype, "chartInstance", {
					get: function() {
						return this.chart
					},
					set: function(t) {
						this.chart = t
					}
				}), Y._set("global", {
					animation: {
						duration: 1e3,
						easing: "easeOutQuart",
						onProgress: B.noop,
						onComplete: B.noop
					}
				});
				var J = {
						animations: [],
						request: null,
						addAnimation: function(t, e, n, i) {
							var r, a, o = this.animations;
							for (e.chart = t, e.startTime = Date.now(), e.duration = n, i || (t.animating = !0), r = 0, a = o.length; r < a; ++r)
								if (o[r].chart === t) return void(o[r] = e);
							o.push(e), 1 === o.length && this.requestAnimationFrame()
						},
						cancelAnimation: function(t) {
							var e = B.findIndex(this.animations, (function(e) {
								return e.chart === t
							})); - 1 !== e && (this.animations.splice(e, 1), t.animating = !1)
						},
						requestAnimationFrame: function() {
							var t = this;
							null === t.request && (t.request = B.requestAnimFrame.call(window, (function() {
								t.request = null, t.startDigest()
							})))
						},
						startDigest: function() {
							this.advance(), this.animations.length > 0 && this.requestAnimationFrame()
						},
						advance: function() {
							for (var t, e, n, i, r = this.animations, a = 0; a < r.length;) e = (t = r[a]).chart, n = t.numSteps, i = Math.floor((Date.now() - t.startTime) / t.duration * n) + 1, t.currentStep = Math.min(i, n), B.callback(t.render, [e, t], e), B.callback(t.onAnimationProgress, [t], e), t.currentStep >= n ? (B.callback(t.onAnimationComplete, [t], e), e.animating = !1, r.splice(a, 1)) : ++a
						}
					},
					Q = B.options.resolve,
					tt = ["push", "pop", "shift", "splice", "unshift"];

				function et(t, e) {
					var n = t._chartjs;
					if (n) {
						var i = n.listeners,
							r = i.indexOf(e); - 1 !== r && i.splice(r, 1), i.length > 0 || (tt.forEach((function(e) {
							delete t[e]
						})), delete t._chartjs)
					}
				}
				var nt = function(t, e) {
					this.initialize(t, e)
				};
				B.extend(nt.prototype, {
					datasetElementType: null,
					dataElementType: null,
					_datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth"],
					_dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "pointStyle"],
					initialize: function(t, e) {
						var n = this;
						n.chart = t, n.index = e, n.linkScales(), n.addElements(), n._type = n.getMeta().type
					},
					updateIndex: function(t) {
						this.index = t
					},
					linkScales: function() {
						var t = this.getMeta(),
							e = this.chart,
							n = e.scales,
							i = this.getDataset(),
							r = e.options.scales;
						null !== t.xAxisID && t.xAxisID in n && !i.xAxisID || (t.xAxisID = i.xAxisID || r.xAxes[0].id), null !== t.yAxisID && t.yAxisID in n && !i.yAxisID || (t.yAxisID = i.yAxisID || r.yAxes[0].id)
					},
					getDataset: function() {
						return this.chart.data.datasets[this.index]
					},
					getMeta: function() {
						return this.chart.getDatasetMeta(this.index)
					},
					getScaleForId: function(t) {
						return this.chart.scales[t]
					},
					_getValueScaleId: function() {
						return this.getMeta().yAxisID
					},
					_getIndexScaleId: function() {
						return this.getMeta().xAxisID
					},
					_getValueScale: function() {
						return this.getScaleForId(this._getValueScaleId())
					},
					_getIndexScale: function() {
						return this.getScaleForId(this._getIndexScaleId())
					},
					reset: function() {
						this._update(!0)
					},
					destroy: function() {
						this._data && et(this._data, this)
					},
					createMetaDataset: function() {
						var t = this.datasetElementType;
						return t && new t({
							_chart: this.chart,
							_datasetIndex: this.index
						})
					},
					createMetaData: function(t) {
						var e = this.dataElementType;
						return e && new e({
							_chart: this.chart,
							_datasetIndex: this.index,
							_index: t
						})
					},
					addElements: function() {
						var t, e, n = this.getMeta(),
							i = this.getDataset().data || [],
							r = n.data;
						for (t = 0, e = i.length; t < e; ++t) r[t] = r[t] || this.createMetaData(t);
						n.dataset = n.dataset || this.createMetaDataset()
					},
					addElementAndReset: function(t) {
						var e = this.createMetaData(t);
						this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
					},
					buildOrUpdateElements: function() {
						var t, e, n = this,
							i = n.getDataset(),
							r = i.data || (i.data = []);
						n._data !== r && (n._data && et(n._data, n), r && Object.isExtensible(r) && (e = n, (t = r)._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
							configurable: !0,
							enumerable: !1,
							value: {
								listeners: [e]
							}
						}), tt.forEach((function(e) {
							var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
								i = t[e];
							Object.defineProperty(t, e, {
								configurable: !0,
								enumerable: !1,
								value: function() {
									var e = Array.prototype.slice.call(arguments),
										r = i.apply(this, e);
									return B.each(t._chartjs.listeners, (function(t) {
										"function" === typeof t[n] && t[n].apply(t, e)
									})), r
								}
							})
						})))), n._data = r), n.resyncElements()
					},
					_configure: function() {
						this._config = B.merge(Object.create(null), [this.chart.options.datasets[this._type], this.getDataset()], {
							merger: function(t, e, n) {
								"_meta" !== t && "data" !== t && B._merger(t, e, n)
							}
						})
					},
					_update: function(t) {
						this._configure(), this._cachedDataOpts = null, this.update(t)
					},
					update: B.noop,
					transition: function(t) {
						for (var e = this.getMeta(), n = e.data || [], i = n.length, r = 0; r < i; ++r) n[r].transition(t);
						e.dataset && e.dataset.transition(t)
					},
					draw: function() {
						var t = this.getMeta(),
							e = t.data || [],
							n = e.length,
							i = 0;
						for (t.dataset && t.dataset.draw(); i < n; ++i) e[i].draw()
					},
					getStyle: function(t) {
						var e, n = this.getMeta(),
							i = n.dataset;
						return this._configure(), i && void 0 === t ? e = this._resolveDatasetElementOptions(i || {}) : (t = t || 0, e = this._resolveDataElementOptions(n.data[t] || {}, t)), !1 !== e.fill && null !== e.fill || (e.backgroundColor = e.borderColor), e
					},
					_resolveDatasetElementOptions: function(t, e) {
						var n, i, r, a, o = this,
							s = o.chart,
							l = o._config,
							u = t.custom || {},
							d = s.options.elements[o.datasetElementType.prototype._type] || {},
							h = o._datasetElementOptions,
							c = {},
							f = {
								chart: s,
								dataset: o.getDataset(),
								datasetIndex: o.index,
								hover: e
							};
						for (n = 0, i = h.length; n < i; ++n) r = h[n], a = e ? "hover" + r.charAt(0).toUpperCase() + r.slice(1) : r, c[r] = Q([u[a], l[a], d[a]], f);
						return c
					},
					_resolveDataElementOptions: function(t, e) {
						var n = this,
							i = t && t.custom,
							r = n._cachedDataOpts;
						if (r && !i) return r;
						var a, o, s, l, u = n.chart,
							d = n._config,
							h = u.options.elements[n.dataElementType.prototype._type] || {},
							c = n._dataElementOptions,
							f = {},
							g = {
								chart: u,
								dataIndex: e,
								dataset: n.getDataset(),
								datasetIndex: n.index
							},
							m = {
								cacheable: !i
							};
						if (i = i || {}, B.isArray(c))
							for (o = 0, s = c.length; o < s; ++o) f[l = c[o]] = Q([i[l], d[l], h[l]], g, e, m);
						else
							for (o = 0, s = (a = Object.keys(c)).length; o < s; ++o) f[l = a[o]] = Q([i[l], d[c[l]], d[l], h[l]], g, e, m);
						return m.cacheable && (n._cachedDataOpts = Object.freeze(f)), f
					},
					removeHoverStyle: function(t) {
						B.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle
					},
					setHoverStyle: function(t) {
						var e = this.chart.data.datasets[t._datasetIndex],
							n = t._index,
							i = t.custom || {},
							r = t._model,
							a = B.getHoverColor;
						t.$previousStyle = {
							backgroundColor: r.backgroundColor,
							borderColor: r.borderColor,
							borderWidth: r.borderWidth
						}, r.backgroundColor = Q([i.hoverBackgroundColor, e.hoverBackgroundColor, a(r.backgroundColor)], void 0, n), r.borderColor = Q([i.hoverBorderColor, e.hoverBorderColor, a(r.borderColor)], void 0, n), r.borderWidth = Q([i.hoverBorderWidth, e.hoverBorderWidth, r.borderWidth], void 0, n)
					},
					_removeDatasetHoverStyle: function() {
						var t = this.getMeta().dataset;
						t && this.removeHoverStyle(t)
					},
					_setDatasetHoverStyle: function() {
						var t, e, n, i, r, a, o = this.getMeta().dataset,
							s = {};
						if (o) {
							for (a = o._model, r = this._resolveDatasetElementOptions(o, !0), t = 0, e = (i = Object.keys(r)).length; t < e; ++t) s[n = i[t]] = a[n], a[n] = r[n];
							o.$previousStyle = s
						}
					},
					resyncElements: function() {
						var t = this.getMeta(),
							e = this.getDataset().data,
							n = t.data.length,
							i = e.length;
						i < n ? t.data.splice(i, n - i) : i > n && this.insertElements(n, i - n)
					},
					insertElements: function(t, e) {
						for (var n = 0; n < e; ++n) this.addElementAndReset(t + n)
					},
					onDataPush: function() {
						var t = arguments.length;
						this.insertElements(this.getDataset().data.length - t, t)
					},
					onDataPop: function() {
						this.getMeta().data.pop()
					},
					onDataShift: function() {
						this.getMeta().data.shift()
					},
					onDataSplice: function(t, e) {
						this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
					},
					onDataUnshift: function() {
						this.insertElements(0, arguments.length)
					}
				}), nt.extend = B.inherits;
				var it = nt,
					rt = 2 * Math.PI;

				function at(t, e) {
					var n = e.startAngle,
						i = e.endAngle,
						r = e.pixelMargin,
						a = r / e.outerRadius,
						o = e.x,
						s = e.y;
					t.beginPath(), t.arc(o, s, e.outerRadius, n - a, i + a), e.innerRadius > r ? (a = r / e.innerRadius, t.arc(o, s, e.innerRadius - r, i + a, n - a, !0)) : t.arc(o, s, r, i + Math.PI / 2, n - Math.PI / 2), t.closePath(), t.clip()
				}

				function ot(t, e, n) {
					var i = "inner" === e.borderAlign;
					i ? (t.lineWidth = 2 * e.borderWidth, t.lineJoin = "round") : (t.lineWidth = e.borderWidth, t.lineJoin = "bevel"), n.fullCircles && function(t, e, n, i) {
						var r, a = n.endAngle;
						for (i && (n.endAngle = n.startAngle + rt, at(t, n), n.endAngle = a, n.endAngle === n.startAngle && n.fullCircles && (n.endAngle += rt, n.fullCircles--)), t.beginPath(), t.arc(n.x, n.y, n.innerRadius, n.startAngle + rt, n.startAngle, !0), r = 0; r < n.fullCircles; ++r) t.stroke();
						for (t.beginPath(), t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.startAngle + rt), r = 0; r < n.fullCircles; ++r) t.stroke()
					}(t, e, n, i), i && at(t, n), t.beginPath(), t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.endAngle), t.arc(n.x, n.y, n.innerRadius, n.endAngle, n.startAngle, !0), t.closePath(), t.stroke()
				}
				Y._set("global", {
					elements: {
						arc: {
							backgroundColor: Y.global.defaultColor,
							borderColor: "#fff",
							borderWidth: 2,
							borderAlign: "center"
						}
					}
				});
				var st = $.extend({
						_type: "arc",
						inLabelRange: function(t) {
							var e = this._view;
							return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
						},
						inRange: function(t, e) {
							var n = this._view;
							if (n) {
								for (var i = B.getAngleFromPoint(n, {
										x: t,
										y: e
									}), r = i.angle, a = i.distance, o = n.startAngle, s = n.endAngle; s < o;) s += rt;
								for (; r > s;) r -= rt;
								for (; r < o;) r += rt;
								var l = r >= o && r <= s,
									u = a >= n.innerRadius && a <= n.outerRadius;
								return l && u
							}
							return !1
						},
						getCenterPoint: function() {
							var t = this._view,
								e = (t.startAngle + t.endAngle) / 2,
								n = (t.innerRadius + t.outerRadius) / 2;
							return {
								x: t.x + Math.cos(e) * n,
								y: t.y + Math.sin(e) * n
							}
						},
						getArea: function() {
							var t = this._view;
							return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
						},
						tooltipPosition: function() {
							var t = this._view,
								e = t.startAngle + (t.endAngle - t.startAngle) / 2,
								n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
							return {
								x: t.x + Math.cos(e) * n,
								y: t.y + Math.sin(e) * n
							}
						},
						draw: function() {
							var t, e = this._chart.ctx,
								n = this._view,
								i = "inner" === n.borderAlign ? .33 : 0,
								r = {
									x: n.x,
									y: n.y,
									innerRadius: n.innerRadius,
									outerRadius: Math.max(n.outerRadius - i, 0),
									pixelMargin: i,
									startAngle: n.startAngle,
									endAngle: n.endAngle,
									fullCircles: Math.floor(n.circumference / rt)
								};
							if (e.save(), e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, r.fullCircles) {
								for (r.endAngle = r.startAngle + rt, e.beginPath(), e.arc(r.x, r.y, r.outerRadius, r.startAngle, r.endAngle), e.arc(r.x, r.y, r.innerRadius, r.endAngle, r.startAngle, !0), e.closePath(), t = 0; t < r.fullCircles; ++t) e.fill();
								r.endAngle = r.startAngle + n.circumference % rt
							}
							e.beginPath(), e.arc(r.x, r.y, r.outerRadius, r.startAngle, r.endAngle), e.arc(r.x, r.y, r.innerRadius, r.endAngle, r.startAngle, !0), e.closePath(), e.fill(), n.borderWidth && ot(e, n, r), e.restore()
						}
					}),
					lt = B.valueOrDefault,
					ut = Y.global.defaultColor;
				Y._set("global", {
					elements: {
						line: {
							tension: .4,
							backgroundColor: ut,
							borderWidth: 3,
							borderColor: ut,
							borderCapStyle: "butt",
							borderDash: [],
							borderDashOffset: 0,
							borderJoinStyle: "miter",
							capBezierPoints: !0,
							fill: !0
						}
					}
				});
				var dt = $.extend({
						_type: "line",
						draw: function() {
							var t, e, n, i = this,
								r = i._view,
								a = i._chart.ctx,
								o = r.spanGaps,
								s = i._children.slice(),
								l = Y.global,
								u = l.elements.line,
								d = -1,
								h = i._loop;
							if (s.length) {
								if (i._loop) {
									for (t = 0; t < s.length; ++t)
										if (e = B.previousItem(s, t), !s[t]._view.skip && e._view.skip) {
											s = s.slice(t).concat(s.slice(0, t)), h = o;
											break
										} h && s.push(s[0])
								}
								for (a.save(), a.lineCap = r.borderCapStyle || u.borderCapStyle, a.setLineDash && a.setLineDash(r.borderDash || u.borderDash), a.lineDashOffset = lt(r.borderDashOffset, u.borderDashOffset), a.lineJoin = r.borderJoinStyle || u.borderJoinStyle, a.lineWidth = lt(r.borderWidth, u.borderWidth), a.strokeStyle = r.borderColor || l.defaultColor, a.beginPath(), (n = s[0]._view).skip || (a.moveTo(n.x, n.y), d = 0), t = 1; t < s.length; ++t) n = s[t]._view, e = -1 === d ? B.previousItem(s, t) : s[d], n.skip || (d !== t - 1 && !o || -1 === d ? a.moveTo(n.x, n.y) : B.canvas.lineTo(a, e._view, n), d = t);
								h && a.closePath(), a.stroke(), a.restore()
							}
						}
					}),
					ht = B.valueOrDefault,
					ct = Y.global.defaultColor;

				function ft(t) {
					var e = this._view;
					return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius
				}
				Y._set("global", {
					elements: {
						point: {
							radius: 3,
							pointStyle: "circle",
							backgroundColor: ct,
							borderColor: ct,
							borderWidth: 1,
							hitRadius: 1,
							hoverRadius: 4,
							hoverBorderWidth: 1
						}
					}
				});
				var gt = $.extend({
						_type: "point",
						inRange: function(t, e) {
							var n = this._view;
							return !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
						},
						inLabelRange: ft,
						inXRange: ft,
						inYRange: function(t) {
							var e = this._view;
							return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius
						},
						getCenterPoint: function() {
							var t = this._view;
							return {
								x: t.x,
								y: t.y
							}
						},
						getArea: function() {
							return Math.PI * Math.pow(this._view.radius, 2)
						},
						tooltipPosition: function() {
							var t = this._view;
							return {
								x: t.x,
								y: t.y,
								padding: t.radius + t.borderWidth
							}
						},
						draw: function(t) {
							var e = this._view,
								n = this._chart.ctx,
								i = e.pointStyle,
								r = e.rotation,
								a = e.radius,
								o = e.x,
								s = e.y,
								l = Y.global,
								u = l.defaultColor;
							e.skip || (void 0 === t || B.canvas._isPointInArea(e, t)) && (n.strokeStyle = e.borderColor || u, n.lineWidth = ht(e.borderWidth, l.elements.point.borderWidth), n.fillStyle = e.backgroundColor || u, B.canvas.drawPoint(n, i, a, o, s, r))
						}
					}),
					mt = Y.global.defaultColor;

				function pt(t) {
					return t && void 0 !== t.width
				}

				function vt(t) {
					var e, n, i, r, a;
					return pt(t) ? (a = t.width / 2, e = t.x - a, n = t.x + a, i = Math.min(t.y, t.base), r = Math.max(t.y, t.base)) : (a = t.height / 2, e = Math.min(t.x, t.base), n = Math.max(t.x, t.base), i = t.y - a, r = t.y + a), {
						left: e,
						top: i,
						right: n,
						bottom: r
					}
				}

				function yt(t, e, n) {
					return t === e ? n : t === n ? e : t
				}

				function bt(t, e, n) {
					var i, r, a, o, s = t.borderWidth,
						l = function(t) {
							var e = t.borderSkipped,
								n = {};
							return e ? (t.horizontal ? t.base > t.x && (e = yt(e, "left", "right")) : t.base < t.y && (e = yt(e, "bottom", "top")), n[e] = !0, n) : n
						}(t);
					return B.isObject(s) ? (i = +s.top || 0, r = +s.right || 0, a = +s.bottom || 0, o = +s.left || 0) : i = r = a = o = +s || 0, {
						t: l.top || i < 0 ? 0 : i > n ? n : i,
						r: l.right || r < 0 ? 0 : r > e ? e : r,
						b: l.bottom || a < 0 ? 0 : a > n ? n : a,
						l: l.left || o < 0 ? 0 : o > e ? e : o
					}
				}

				function xt(t, e, n) {
					var i = null === e,
						r = null === n,
						a = !(!t || i && r) && vt(t);
					return a && (i || e >= a.left && e <= a.right) && (r || n >= a.top && n <= a.bottom)
				}
				Y._set("global", {
					elements: {
						rectangle: {
							backgroundColor: mt,
							borderColor: mt,
							borderSkipped: "bottom",
							borderWidth: 0
						}
					}
				});
				var _t = $.extend({
						_type: "rectangle",
						draw: function() {
							var t = this._chart.ctx,
								e = this._view,
								n = function(t) {
									var e = vt(t),
										n = e.right - e.left,
										i = e.bottom - e.top,
										r = bt(t, n / 2, i / 2);
									return {
										outer: {
											x: e.left,
											y: e.top,
											w: n,
											h: i
										},
										inner: {
											x: e.left + r.l,
											y: e.top + r.t,
											w: n - r.l - r.r,
											h: i - r.t - r.b
										}
									}
								}(e),
								i = n.outer,
								r = n.inner;
							t.fillStyle = e.backgroundColor, t.fillRect(i.x, i.y, i.w, i.h), i.w === r.w && i.h === r.h || (t.save(), t.beginPath(), t.rect(i.x, i.y, i.w, i.h), t.clip(), t.fillStyle = e.borderColor, t.rect(r.x, r.y, r.w, r.h), t.fill("evenodd"), t.restore())
						},
						height: function() {
							var t = this._view;
							return t.base - t.y
						},
						inRange: function(t, e) {
							return xt(this._view, t, e)
						},
						inLabelRange: function(t, e) {
							var n = this._view;
							return pt(n) ? xt(n, t, null) : xt(n, null, e)
						},
						inXRange: function(t) {
							return xt(this._view, t, null)
						},
						inYRange: function(t) {
							return xt(this._view, null, t)
						},
						getCenterPoint: function() {
							var t, e, n = this._view;
							return pt(n) ? (t = n.x, e = (n.y + n.base) / 2) : (t = (n.x + n.base) / 2, e = n.y), {
								x: t,
								y: e
							}
						},
						getArea: function() {
							var t = this._view;
							return pt(t) ? t.width * Math.abs(t.y - t.base) : t.height * Math.abs(t.x - t.base)
						},
						tooltipPosition: function() {
							var t = this._view;
							return {
								x: t.x,
								y: t.y
							}
						}
					}),
					wt = {},
					kt = st,
					Mt = dt,
					St = gt,
					Dt = _t;
				wt.Arc = kt, wt.Line = Mt, wt.Point = St, wt.Rectangle = Dt;
				var Ct = B._deprecated,
					Pt = B.valueOrDefault;

				function Tt(t, e, n) {
					var i, r, a = n.barThickness,
						o = e.stackCount,
						s = e.pixels[t],
						l = B.isNullOrUndef(a) ? function(t, e) {
							var n, i, r, a, o = t._length;
							for (r = 1, a = e.length; r < a; ++r) o = Math.min(o, Math.abs(e[r] - e[r - 1]));
							for (r = 0, a = t.getTicks().length; r < a; ++r) i = t.getPixelForTick(r), o = r > 0 ? Math.min(o, Math.abs(i - n)) : o, n = i;
							return o
						}(e.scale, e.pixels) : -1;
					return B.isNullOrUndef(a) ? (i = l * n.categoryPercentage, r = n.barPercentage) : (i = a * o, r = 1), {
						chunk: i / o,
						ratio: r,
						start: s - i / 2
					}
				}
				Y._set("bar", {
					hover: {
						mode: "label"
					},
					scales: {
						xAxes: [{
							type: "category",
							offset: !0,
							gridLines: {
								offsetGridLines: !0
							}
						}],
						yAxes: [{
							type: "linear"
						}]
					}
				}), Y._set("global", {
					datasets: {
						bar: {
							categoryPercentage: .8,
							barPercentage: .9
						}
					}
				});
				var Ot = it.extend({
						dataElementType: wt.Rectangle,
						_dataElementOptions: ["backgroundColor", "borderColor", "borderSkipped", "borderWidth", "barPercentage", "barThickness", "categoryPercentage", "maxBarThickness", "minBarLength"],
						initialize: function() {
							var t, e, n = this;
							it.prototype.initialize.apply(n, arguments), (t = n.getMeta()).stack = n.getDataset().stack, t.bar = !0, e = n._getIndexScale().options, Ct("bar chart", e.barPercentage, "scales.[x/y]Axes.barPercentage", "dataset.barPercentage"), Ct("bar chart", e.barThickness, "scales.[x/y]Axes.barThickness", "dataset.barThickness"), Ct("bar chart", e.categoryPercentage, "scales.[x/y]Axes.categoryPercentage", "dataset.categoryPercentage"), Ct("bar chart", n._getValueScale().options.minBarLength, "scales.[x/y]Axes.minBarLength", "dataset.minBarLength"), Ct("bar chart", e.maxBarThickness, "scales.[x/y]Axes.maxBarThickness", "dataset.maxBarThickness")
						},
						update: function(t) {
							var e, n, i = this.getMeta().data;
							for (this._ruler = this.getRuler(), e = 0, n = i.length; e < n; ++e) this.updateElement(i[e], e, t)
						},
						updateElement: function(t, e, n) {
							var i = this,
								r = i.getMeta(),
								a = i.getDataset(),
								o = i._resolveDataElementOptions(t, e);
							t._xScale = i.getScaleForId(r.xAxisID), t._yScale = i.getScaleForId(r.yAxisID), t._datasetIndex = i.index, t._index = e, t._model = {
								backgroundColor: o.backgroundColor,
								borderColor: o.borderColor,
								borderSkipped: o.borderSkipped,
								borderWidth: o.borderWidth,
								datasetLabel: a.label,
								label: i.chart.data.labels[e]
							}, B.isArray(a.data[e]) && (t._model.borderSkipped = null), i._updateElementGeometry(t, e, n, o), t.pivot()
						},
						_updateElementGeometry: function(t, e, n, i) {
							var r = this,
								a = t._model,
								o = r._getValueScale(),
								s = o.getBasePixel(),
								l = o.isHorizontal(),
								u = r._ruler || r.getRuler(),
								d = r.calculateBarValuePixels(r.index, e, i),
								h = r.calculateBarIndexPixels(r.index, e, u, i);
							a.horizontal = l, a.base = n ? s : d.base, a.x = l ? n ? s : d.head : h.center, a.y = l ? h.center : n ? s : d.head, a.height = l ? h.size : void 0, a.width = l ? void 0 : h.size
						},
						_getStacks: function(t) {
							var e, n, i = this._getIndexScale(),
								r = i._getMatchingVisibleMetas(this._type),
								a = i.options.stacked,
								o = r.length,
								s = [];
							for (e = 0; e < o && (n = r[e], (!1 === a || -1 === s.indexOf(n.stack) || void 0 === a && void 0 === n.stack) && s.push(n.stack), n.index !== t); ++e);
							return s
						},
						getStackCount: function() {
							return this._getStacks().length
						},
						getStackIndex: function(t, e) {
							var n = this._getStacks(t),
								i = void 0 !== e ? n.indexOf(e) : -1;
							return -1 === i ? n.length - 1 : i
						},
						getRuler: function() {
							var t, e, n = this._getIndexScale(),
								i = [];
							for (t = 0, e = this.getMeta().data.length; t < e; ++t) i.push(n.getPixelForValue(null, t, this.index));
							return {
								pixels: i,
								start: n._startPixel,
								end: n._endPixel,
								stackCount: this.getStackCount(),
								scale: n
							}
						},
						calculateBarValuePixels: function(t, e, n) {
							var i, r, a, o, s, l, u, d = this.chart,
								h = this._getValueScale(),
								c = h.isHorizontal(),
								f = d.data.datasets,
								g = h._getMatchingVisibleMetas(this._type),
								m = h._parseValue(f[t].data[e]),
								p = n.minBarLength,
								v = h.options.stacked,
								y = this.getMeta().stack,
								b = void 0 === m.start ? 0 : m.max >= 0 && m.min >= 0 ? m.min : m.max,
								x = void 0 === m.start ? m.end : m.max >= 0 && m.min >= 0 ? m.max - m.min : m.min - m.max,
								_ = g.length;
							if (v || void 0 === v && void 0 !== y)
								for (i = 0; i < _ && (r = g[i]).index !== t; ++i) r.stack === y && (a = void 0 === (u = h._parseValue(f[r.index].data[e])).start ? u.end : u.min >= 0 && u.max >= 0 ? u.max : u.min, (m.min < 0 && a < 0 || m.max >= 0 && a > 0) && (b += a));
							return o = h.getPixelForValue(b), l = (s = h.getPixelForValue(b + x)) - o, void 0 !== p && Math.abs(l) < p && (l = p, s = x >= 0 && !c || x < 0 && c ? o - p : o + p), {
								size: l,
								base: o,
								head: s,
								center: s + l / 2
							}
						},
						calculateBarIndexPixels: function(t, e, n, i) {
							var r = "flex" === i.barThickness ? function(t, e, n) {
									var i, r = e.pixels,
										a = r[t],
										o = t > 0 ? r[t - 1] : null,
										s = t < r.length - 1 ? r[t + 1] : null,
										l = n.categoryPercentage;
									return null === o && (o = a - (null === s ? e.end - e.start : s - a)), null === s && (s = a + a - o), i = a - (a - Math.min(o, s)) / 2 * l, {
										chunk: Math.abs(s - o) / 2 * l / e.stackCount,
										ratio: n.barPercentage,
										start: i
									}
								}(e, n, i) : Tt(e, n, i),
								a = this.getStackIndex(t, this.getMeta().stack),
								o = r.start + r.chunk * a + r.chunk / 2,
								s = Math.min(Pt(i.maxBarThickness, 1 / 0), r.chunk * r.ratio);
							return {
								base: o - s / 2,
								head: o + s / 2,
								center: o,
								size: s
							}
						},
						draw: function() {
							var t = this.chart,
								e = this._getValueScale(),
								n = this.getMeta().data,
								i = this.getDataset(),
								r = n.length,
								a = 0;
							for (B.canvas.clipArea(t.ctx, t.chartArea); a < r; ++a) {
								var o = e._parseValue(i.data[a]);
								isNaN(o.min) || isNaN(o.max) || n[a].draw()
							}
							B.canvas.unclipArea(t.ctx)
						},
						_resolveDataElementOptions: function() {
							var t = this,
								e = B.extend({}, it.prototype._resolveDataElementOptions.apply(t, arguments)),
								n = t._getIndexScale().options,
								i = t._getValueScale().options;
							return e.barPercentage = Pt(n.barPercentage, e.barPercentage), e.barThickness = Pt(n.barThickness, e.barThickness), e.categoryPercentage = Pt(n.categoryPercentage, e.categoryPercentage), e.maxBarThickness = Pt(n.maxBarThickness, e.maxBarThickness), e.minBarLength = Pt(i.minBarLength, e.minBarLength), e
						}
					}),
					At = B.valueOrDefault,
					Ft = B.options.resolve;
				Y._set("bubble", {
					hover: {
						mode: "single"
					},
					scales: {
						xAxes: [{
							type: "linear",
							position: "bottom",
							id: "x-axis-0"
						}],
						yAxes: [{
							type: "linear",
							position: "left",
							id: "y-axis-0"
						}]
					},
					tooltips: {
						callbacks: {
							title: function() {
								return ""
							},
							label: function(t, e) {
								var n = e.datasets[t.datasetIndex].label || "",
									i = e.datasets[t.datasetIndex].data[t.index];
								return n + ": (" + t.xLabel + ", " + t.yLabel + ", " + i.r + ")"
							}
						}
					}
				});
				var It = it.extend({
						dataElementType: wt.Point,
						_dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"],
						update: function(t) {
							var e = this,
								n = e.getMeta().data;
							B.each(n, (function(n, i) {
								e.updateElement(n, i, t)
							}))
						},
						updateElement: function(t, e, n) {
							var i = this,
								r = i.getMeta(),
								a = t.custom || {},
								o = i.getScaleForId(r.xAxisID),
								s = i.getScaleForId(r.yAxisID),
								l = i._resolveDataElementOptions(t, e),
								u = i.getDataset().data[e],
								d = i.index,
								h = n ? o.getPixelForDecimal(.5) : o.getPixelForValue("object" === typeof u ? u : NaN, e, d),
								c = n ? s.getBasePixel() : s.getPixelForValue(u, e, d);
							t._xScale = o, t._yScale = s, t._options = l, t._datasetIndex = d, t._index = e, t._model = {
								backgroundColor: l.backgroundColor,
								borderColor: l.borderColor,
								borderWidth: l.borderWidth,
								hitRadius: l.hitRadius,
								pointStyle: l.pointStyle,
								rotation: l.rotation,
								radius: n ? 0 : l.radius,
								skip: a.skip || isNaN(h) || isNaN(c),
								x: h,
								y: c
							}, t.pivot()
						},
						setHoverStyle: function(t) {
							var e = t._model,
								n = t._options,
								i = B.getHoverColor;
							t.$previousStyle = {
								backgroundColor: e.backgroundColor,
								borderColor: e.borderColor,
								borderWidth: e.borderWidth,
								radius: e.radius
							}, e.backgroundColor = At(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = At(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = At(n.hoverBorderWidth, n.borderWidth), e.radius = n.radius + n.hoverRadius
						},
						_resolveDataElementOptions: function(t, e) {
							var n = this,
								i = n.chart,
								r = n.getDataset(),
								a = t.custom || {},
								o = r.data[e] || {},
								s = it.prototype._resolveDataElementOptions.apply(n, arguments),
								l = {
									chart: i,
									dataIndex: e,
									dataset: r,
									datasetIndex: n.index
								};
							return n._cachedDataOpts === s && (s = B.extend({}, s)), s.radius = Ft([a.radius, o.r, n._config.radius, i.options.elements.point.radius], l, e), s
						}
					}),
					Nt = B.valueOrDefault,
					Rt = Math.PI,
					Lt = 2 * Rt,
					Yt = Rt / 2;
				Y._set("doughnut", {
					animation: {
						animateRotate: !0,
						animateScale: !1
					},
					hover: {
						mode: "single"
					},
					legendCallback: function(t) {
						var e, n, i, r = document.createElement("ul"),
							a = t.data,
							o = a.datasets,
							s = a.labels;
						if (r.setAttribute("class", t.id + "-legend"), o.length)
							for (e = 0, n = o[0].data.length; e < n; ++e)(i = r.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = o[0].backgroundColor[e], s[e] && i.appendChild(document.createTextNode(s[e]));
						return r.outerHTML
					},
					legend: {
						labels: {
							generateLabels: function(t) {
								var e = t.data;
								return e.labels.length && e.datasets.length ? e.labels.map((function(n, i) {
									var r = t.getDatasetMeta(0),
										a = r.controller.getStyle(i);
									return {
										text: n,
										fillStyle: a.backgroundColor,
										strokeStyle: a.borderColor,
										lineWidth: a.borderWidth,
										hidden: isNaN(e.datasets[0].data[i]) || r.data[i].hidden,
										index: i
									}
								})) : []
							}
						},
						onClick: function(t, e) {
							var n, i, r, a = e.index,
								o = this.chart;
							for (n = 0, i = (o.data.datasets || []).length; n < i; ++n)(r = o.getDatasetMeta(n)).data[a] && (r.data[a].hidden = !r.data[a].hidden);
							o.update()
						}
					},
					cutoutPercentage: 50,
					rotation: -Yt,
					circumference: Lt,
					tooltips: {
						callbacks: {
							title: function() {
								return ""
							},
							label: function(t, e) {
								var n = e.labels[t.index],
									i = ": " + e.datasets[t.datasetIndex].data[t.index];
								return B.isArray(n) ? (n = n.slice())[0] += i : n += i, n
							}
						}
					}
				});
				var Wt = it.extend({
					dataElementType: wt.Arc,
					linkScales: B.noop,
					_dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
					getRingIndex: function(t) {
						for (var e = 0, n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && ++e;
						return e
					},
					update: function(t) {
						var e, n, i, r, a = this,
							o = a.chart,
							s = o.chartArea,
							l = o.options,
							u = 1,
							d = 1,
							h = 0,
							c = 0,
							f = a.getMeta(),
							g = f.data,
							m = l.cutoutPercentage / 100 || 0,
							p = l.circumference,
							v = a._getRingWeight(a.index);
						if (p < Lt) {
							var y = l.rotation % Lt,
								b = (y += y >= Rt ? -Lt : y < -Rt ? Lt : 0) + p,
								x = Math.cos(y),
								_ = Math.sin(y),
								w = Math.cos(b),
								k = Math.sin(b),
								M = y <= 0 && b >= 0 || b >= Lt,
								S = y <= Yt && b >= Yt || b >= Lt + Yt,
								D = y <= -Yt && b >= -Yt || b >= Rt + Yt,
								C = y === -Rt || b >= Rt ? -1 : Math.min(x, x * m, w, w * m),
								P = D ? -1 : Math.min(_, _ * m, k, k * m),
								T = M ? 1 : Math.max(x, x * m, w, w * m),
								O = S ? 1 : Math.max(_, _ * m, k, k * m);
							u = (T - C) / 2, d = (O - P) / 2, h = -(T + C) / 2, c = -(O + P) / 2
						}
						for (i = 0, r = g.length; i < r; ++i) g[i]._options = a._resolveDataElementOptions(g[i], i);
						for (o.borderWidth = a.getMaxBorderWidth(), e = (s.right - s.left - o.borderWidth) / u, n = (s.bottom - s.top - o.borderWidth) / d, o.outerRadius = Math.max(Math.min(e, n) / 2, 0), o.innerRadius = Math.max(o.outerRadius * m, 0), o.radiusLength = (o.outerRadius - o.innerRadius) / (a._getVisibleDatasetWeightTotal() || 1), o.offsetX = h * o.outerRadius, o.offsetY = c * o.outerRadius, f.total = a.calculateTotal(), a.outerRadius = o.outerRadius - o.radiusLength * a._getRingWeightOffset(a.index), a.innerRadius = Math.max(a.outerRadius - o.radiusLength * v, 0), i = 0, r = g.length; i < r; ++i) a.updateElement(g[i], i, t)
					},
					updateElement: function(t, e, n) {
						var i = this,
							r = i.chart,
							a = r.chartArea,
							o = r.options,
							s = o.animation,
							l = (a.left + a.right) / 2,
							u = (a.top + a.bottom) / 2,
							d = o.rotation,
							h = o.rotation,
							c = i.getDataset(),
							f = n && s.animateRotate || t.hidden ? 0 : i.calculateCircumference(c.data[e]) * (o.circumference / Lt),
							g = n && s.animateScale ? 0 : i.innerRadius,
							m = n && s.animateScale ? 0 : i.outerRadius,
							p = t._options || {};
						B.extend(t, {
							_datasetIndex: i.index,
							_index: e,
							_model: {
								backgroundColor: p.backgroundColor,
								borderColor: p.borderColor,
								borderWidth: p.borderWidth,
								borderAlign: p.borderAlign,
								x: l + r.offsetX,
								y: u + r.offsetY,
								startAngle: d,
								endAngle: h,
								circumference: f,
								outerRadius: m,
								innerRadius: g,
								label: B.valueAtIndexOrDefault(c.label, e, r.data.labels[e])
							}
						});
						var v = t._model;
						n && s.animateRotate || (v.startAngle = 0 === e ? o.rotation : i.getMeta().data[e - 1]._model.endAngle, v.endAngle = v.startAngle + v.circumference), t.pivot()
					},
					calculateTotal: function() {
						var t, e = this.getDataset(),
							n = this.getMeta(),
							i = 0;
						return B.each(n.data, (function(n, r) {
							t = e.data[r], isNaN(t) || n.hidden || (i += Math.abs(t))
						})), i
					},
					calculateCircumference: function(t) {
						var e = this.getMeta().total;
						return e > 0 && !isNaN(t) ? Lt * (Math.abs(t) / e) : 0
					},
					getMaxBorderWidth: function(t) {
						var e, n, i, r, a, o, s, l, u = 0,
							d = this.chart;
						if (!t)
							for (e = 0, n = d.data.datasets.length; e < n; ++e)
								if (d.isDatasetVisible(e)) {
									t = (i = d.getDatasetMeta(e)).data, e !== this.index && (a = i.controller);
									break
								} if (!t) return 0;
						for (e = 0, n = t.length; e < n; ++e) r = t[e], a ? (a._configure(), o = a._resolveDataElementOptions(r, e)) : o = r._options, "inner" !== o.borderAlign && (s = o.borderWidth, u = (l = o.hoverBorderWidth) > (u = s > u ? s : u) ? l : u);
						return u
					},
					setHoverStyle: function(t) {
						var e = t._model,
							n = t._options,
							i = B.getHoverColor;
						t.$previousStyle = {
							backgroundColor: e.backgroundColor,
							borderColor: e.borderColor,
							borderWidth: e.borderWidth
						}, e.backgroundColor = Nt(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = Nt(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = Nt(n.hoverBorderWidth, n.borderWidth)
					},
					_getRingWeightOffset: function(t) {
						for (var e = 0, n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
						return e
					},
					_getRingWeight: function(t) {
						return Math.max(Nt(this.chart.data.datasets[t].weight, 1), 0)
					},
					_getVisibleDatasetWeightTotal: function() {
						return this._getRingWeightOffset(this.chart.data.datasets.length)
					}
				});
				Y._set("horizontalBar", {
					hover: {
						mode: "index",
						axis: "y"
					},
					scales: {
						xAxes: [{
							type: "linear",
							position: "bottom"
						}],
						yAxes: [{
							type: "category",
							position: "left",
							offset: !0,
							gridLines: {
								offsetGridLines: !0
							}
						}]
					},
					elements: {
						rectangle: {
							borderSkipped: "left"
						}
					},
					tooltips: {
						mode: "index",
						axis: "y"
					}
				}), Y._set("global", {
					datasets: {
						horizontalBar: {
							categoryPercentage: .8,
							barPercentage: .9
						}
					}
				});
				var Et = Ot.extend({
						_getValueScaleId: function() {
							return this.getMeta().xAxisID
						},
						_getIndexScaleId: function() {
							return this.getMeta().yAxisID
						}
					}),
					zt = B.valueOrDefault,
					Vt = B.options.resolve,
					Bt = B.canvas._isPointInArea;

				function Ht(t, e) {
					var n = t && t.options.ticks || {},
						i = n.reverse,
						r = void 0 === n.min ? e : 0,
						a = void 0 === n.max ? e : 0;
					return {
						start: i ? a : r,
						end: i ? r : a
					}
				}

				function jt(t, e, n) {
					var i = n / 2,
						r = Ht(t, i),
						a = Ht(e, i);
					return {
						top: a.end,
						right: r.end,
						bottom: a.start,
						left: r.start
					}
				}

				function Ut(t) {
					var e, n, i, r;
					return B.isObject(t) ? (e = t.top, n = t.right, i = t.bottom, r = t.left) : e = n = i = r = t, {
						top: e,
						right: n,
						bottom: i,
						left: r
					}
				}
				Y._set("line", {
					showLines: !0,
					spanGaps: !1,
					hover: {
						mode: "label"
					},
					scales: {
						xAxes: [{
							type: "category",
							id: "x-axis-0"
						}],
						yAxes: [{
							type: "linear",
							id: "y-axis-0"
						}]
					}
				});
				var Gt = it.extend({
						datasetElementType: wt.Line,
						dataElementType: wt.Point,
						_datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth", "cubicInterpolationMode", "fill"],
						_dataElementOptions: {
							backgroundColor: "pointBackgroundColor",
							borderColor: "pointBorderColor",
							borderWidth: "pointBorderWidth",
							hitRadius: "pointHitRadius",
							hoverBackgroundColor: "pointHoverBackgroundColor",
							hoverBorderColor: "pointHoverBorderColor",
							hoverBorderWidth: "pointHoverBorderWidth",
							hoverRadius: "pointHoverRadius",
							pointStyle: "pointStyle",
							radius: "pointRadius",
							rotation: "pointRotation"
						},
						update: function(t) {
							var e, n, i = this,
								r = i.getMeta(),
								a = r.dataset,
								o = r.data || [],
								s = i.chart.options,
								l = i._config,
								u = i._showLine = zt(l.showLine, s.showLines);
							for (i._xScale = i.getScaleForId(r.xAxisID), i._yScale = i.getScaleForId(r.yAxisID), u && (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), a._scale = i._yScale, a._datasetIndex = i.index, a._children = o, a._model = i._resolveDatasetElementOptions(a), a.pivot()), e = 0, n = o.length; e < n; ++e) i.updateElement(o[e], e, t);
							for (u && 0 !== a._model.tension && i.updateBezierControlPoints(), e = 0, n = o.length; e < n; ++e) o[e].pivot()
						},
						updateElement: function(t, e, n) {
							var i, r, a = this,
								o = a.getMeta(),
								s = t.custom || {},
								l = a.getDataset(),
								u = a.index,
								d = l.data[e],
								h = a._xScale,
								c = a._yScale,
								f = o.dataset._model,
								g = a._resolveDataElementOptions(t, e);
							i = h.getPixelForValue("object" === typeof d ? d : NaN, e, u), r = n ? c.getBasePixel() : a.calculatePointY(d, e, u), t._xScale = h, t._yScale = c, t._options = g, t._datasetIndex = u, t._index = e, t._model = {
								x: i,
								y: r,
								skip: s.skip || isNaN(i) || isNaN(r),
								radius: g.radius,
								pointStyle: g.pointStyle,
								rotation: g.rotation,
								backgroundColor: g.backgroundColor,
								borderColor: g.borderColor,
								borderWidth: g.borderWidth,
								tension: zt(s.tension, f ? f.tension : 0),
								steppedLine: !!f && f.steppedLine,
								hitRadius: g.hitRadius
							}
						},
						_resolveDatasetElementOptions: function(t) {
							var e = this,
								n = e._config,
								i = t.custom || {},
								r = e.chart.options,
								a = r.elements.line,
								o = it.prototype._resolveDatasetElementOptions.apply(e, arguments);
							return o.spanGaps = zt(n.spanGaps, r.spanGaps), o.tension = zt(n.lineTension, a.tension), o.steppedLine = Vt([i.steppedLine, n.steppedLine, a.stepped]), o.clip = Ut(zt(n.clip, jt(e._xScale, e._yScale, o.borderWidth))), o
						},
						calculatePointY: function(t, e, n) {
							var i, r, a, o, s, l, u, d = this.chart,
								h = this._yScale,
								c = 0,
								f = 0;
							if (h.options.stacked) {
								for (s = +h.getRightValue(t), u = (l = d._getSortedVisibleDatasetMetas()).length, i = 0; i < u && (a = l[i]).index !== n; ++i) r = d.data.datasets[a.index], "line" === a.type && a.yAxisID === h.id && ((o = +h.getRightValue(r.data[e])) < 0 ? f += o || 0 : c += o || 0);
								return s < 0 ? h.getPixelForValue(f + s) : h.getPixelForValue(c + s)
							}
							return h.getPixelForValue(t)
						},
						updateBezierControlPoints: function() {
							var t, e, n, i, r = this.chart,
								a = this.getMeta(),
								o = a.dataset._model,
								s = r.chartArea,
								l = a.data || [];

							function u(t, e, n) {
								return Math.max(Math.min(t, n), e)
							}
							if (o.spanGaps && (l = l.filter((function(t) {
									return !t._model.skip
								}))), "monotone" === o.cubicInterpolationMode) B.splineCurveMonotone(l);
							else
								for (t = 0, e = l.length; t < e; ++t) n = l[t]._model, i = B.splineCurve(B.previousItem(l, t)._model, n, B.nextItem(l, t)._model, o.tension), n.controlPointPreviousX = i.previous.x, n.controlPointPreviousY = i.previous.y, n.controlPointNextX = i.next.x, n.controlPointNextY = i.next.y;
							if (r.options.elements.line.capBezierPoints)
								for (t = 0, e = l.length; t < e; ++t) n = l[t]._model, Bt(n, s) && (t > 0 && Bt(l[t - 1]._model, s) && (n.controlPointPreviousX = u(n.controlPointPreviousX, s.left, s.right), n.controlPointPreviousY = u(n.controlPointPreviousY, s.top, s.bottom)), t < l.length - 1 && Bt(l[t + 1]._model, s) && (n.controlPointNextX = u(n.controlPointNextX, s.left, s.right), n.controlPointNextY = u(n.controlPointNextY, s.top, s.bottom)))
						},
						draw: function() {
							var t, e = this.chart,
								n = this.getMeta(),
								i = n.data || [],
								r = e.chartArea,
								a = e.canvas,
								o = 0,
								s = i.length;
							for (this._showLine && (t = n.dataset._model.clip, B.canvas.clipArea(e.ctx, {
									left: !1 === t.left ? 0 : r.left - t.left,
									right: !1 === t.right ? a.width : r.right + t.right,
									top: !1 === t.top ? 0 : r.top - t.top,
									bottom: !1 === t.bottom ? a.height : r.bottom + t.bottom
								}), n.dataset.draw(), B.canvas.unclipArea(e.ctx)); o < s; ++o) i[o].draw(r)
						},
						setHoverStyle: function(t) {
							var e = t._model,
								n = t._options,
								i = B.getHoverColor;
							t.$previousStyle = {
								backgroundColor: e.backgroundColor,
								borderColor: e.borderColor,
								borderWidth: e.borderWidth,
								radius: e.radius
							}, e.backgroundColor = zt(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = zt(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = zt(n.hoverBorderWidth, n.borderWidth), e.radius = zt(n.hoverRadius, n.radius)
						}
					}),
					qt = B.options.resolve;
				Y._set("polarArea", {
					scale: {
						type: "radialLinear",
						angleLines: {
							display: !1
						},
						gridLines: {
							circular: !0
						},
						pointLabels: {
							display: !1
						},
						ticks: {
							beginAtZero: !0
						}
					},
					animation: {
						animateRotate: !0,
						animateScale: !0
					},
					startAngle: -.5 * Math.PI,
					legendCallback: function(t) {
						var e, n, i, r = document.createElement("ul"),
							a = t.data,
							o = a.datasets,
							s = a.labels;
						if (r.setAttribute("class", t.id + "-legend"), o.length)
							for (e = 0, n = o[0].data.length; e < n; ++e)(i = r.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = o[0].backgroundColor[e], s[e] && i.appendChild(document.createTextNode(s[e]));
						return r.outerHTML
					},
					legend: {
						labels: {
							generateLabels: function(t) {
								var e = t.data;
								return e.labels.length && e.datasets.length ? e.labels.map((function(n, i) {
									var r = t.getDatasetMeta(0),
										a = r.controller.getStyle(i);
									return {
										text: n,
										fillStyle: a.backgroundColor,
										strokeStyle: a.borderColor,
										lineWidth: a.borderWidth,
										hidden: isNaN(e.datasets[0].data[i]) || r.data[i].hidden,
										index: i
									}
								})) : []
							}
						},
						onClick: function(t, e) {
							var n, i, r, a = e.index,
								o = this.chart;
							for (n = 0, i = (o.data.datasets || []).length; n < i; ++n)(r = o.getDatasetMeta(n)).data[a].hidden = !r.data[a].hidden;
							o.update()
						}
					},
					tooltips: {
						callbacks: {
							title: function() {
								return ""
							},
							label: function(t, e) {
								return e.labels[t.index] + ": " + t.yLabel
							}
						}
					}
				});
				var Zt = it.extend({
					dataElementType: wt.Arc,
					linkScales: B.noop,
					_dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
					_getIndexScaleId: function() {
						return this.chart.scale.id
					},
					_getValueScaleId: function() {
						return this.chart.scale.id
					},
					update: function(t) {
						var e, n, i, r = this,
							a = r.getDataset(),
							o = r.getMeta(),
							s = r.chart.options.startAngle || 0,
							l = r._starts = [],
							u = r._angles = [],
							d = o.data;
						for (r._updateRadius(), o.count = r.countVisibleElements(), e = 0, n = a.data.length; e < n; e++) l[e] = s, i = r._computeAngle(e), u[e] = i, s += i;
						for (e = 0, n = d.length; e < n; ++e) d[e]._options = r._resolveDataElementOptions(d[e], e), r.updateElement(d[e], e, t)
					},
					_updateRadius: function() {
						var t = this,
							e = t.chart,
							n = e.chartArea,
							i = e.options,
							r = Math.min(n.right - n.left, n.bottom - n.top);
						e.outerRadius = Math.max(r / 2, 0), e.innerRadius = Math.max(i.cutoutPercentage ? e.outerRadius / 100 * i.cutoutPercentage : 1, 0), e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(), t.outerRadius = e.outerRadius - e.radiusLength * t.index, t.innerRadius = t.outerRadius - e.radiusLength
					},
					updateElement: function(t, e, n) {
						var i = this,
							r = i.chart,
							a = i.getDataset(),
							o = r.options,
							s = o.animation,
							l = r.scale,
							u = r.data.labels,
							d = l.xCenter,
							h = l.yCenter,
							c = o.startAngle,
							f = t.hidden ? 0 : l.getDistanceFromCenterForValue(a.data[e]),
							g = i._starts[e],
							m = g + (t.hidden ? 0 : i._angles[e]),
							p = s.animateScale ? 0 : l.getDistanceFromCenterForValue(a.data[e]),
							v = t._options || {};
						B.extend(t, {
							_datasetIndex: i.index,
							_index: e,
							_scale: l,
							_model: {
								backgroundColor: v.backgroundColor,
								borderColor: v.borderColor,
								borderWidth: v.borderWidth,
								borderAlign: v.borderAlign,
								x: d,
								y: h,
								innerRadius: 0,
								outerRadius: n ? p : f,
								startAngle: n && s.animateRotate ? c : g,
								endAngle: n && s.animateRotate ? c : m,
								label: B.valueAtIndexOrDefault(u, e, u[e])
							}
						}), t.pivot()
					},
					countVisibleElements: function() {
						var t = this.getDataset(),
							e = this.getMeta(),
							n = 0;
						return B.each(e.data, (function(e, i) {
							isNaN(t.data[i]) || e.hidden || n++
						})), n
					},
					setHoverStyle: function(t) {
						var e = t._model,
							n = t._options,
							i = B.getHoverColor,
							r = B.valueOrDefault;
						t.$previousStyle = {
							backgroundColor: e.backgroundColor,
							borderColor: e.borderColor,
							borderWidth: e.borderWidth
						}, e.backgroundColor = r(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = r(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = r(n.hoverBorderWidth, n.borderWidth)
					},
					_computeAngle: function(t) {
						var e = this,
							n = this.getMeta().count,
							i = e.getDataset(),
							r = e.getMeta();
						if (isNaN(i.data[t]) || r.data[t].hidden) return 0;
						var a = {
							chart: e.chart,
							dataIndex: t,
							dataset: i,
							datasetIndex: e.index
						};
						return qt([e.chart.options.elements.arc.angle, 2 * Math.PI / n], a, t)
					}
				});
				Y._set("pie", B.clone(Y.doughnut)), Y._set("pie", {
					cutoutPercentage: 0
				});
				var $t = Wt,
					Xt = B.valueOrDefault;
				Y._set("radar", {
					spanGaps: !1,
					scale: {
						type: "radialLinear"
					},
					elements: {
						line: {
							fill: "start",
							tension: 0
						}
					}
				});
				var Kt = it.extend({
					datasetElementType: wt.Line,
					dataElementType: wt.Point,
					linkScales: B.noop,
					_datasetElementOptions: ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"],
					_dataElementOptions: {
						backgroundColor: "pointBackgroundColor",
						borderColor: "pointBorderColor",
						borderWidth: "pointBorderWidth",
						hitRadius: "pointHitRadius",
						hoverBackgroundColor: "pointHoverBackgroundColor",
						hoverBorderColor: "pointHoverBorderColor",
						hoverBorderWidth: "pointHoverBorderWidth",
						hoverRadius: "pointHoverRadius",
						pointStyle: "pointStyle",
						radius: "pointRadius",
						rotation: "pointRotation"
					},
					_getIndexScaleId: function() {
						return this.chart.scale.id
					},
					_getValueScaleId: function() {
						return this.chart.scale.id
					},
					update: function(t) {
						var e, n, i = this,
							r = i.getMeta(),
							a = r.dataset,
							o = r.data || [],
							s = i.chart.scale,
							l = i._config;
						for (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), a._scale = s, a._datasetIndex = i.index, a._children = o, a._loop = !0, a._model = i._resolveDatasetElementOptions(a), a.pivot(), e = 0, n = o.length; e < n; ++e) i.updateElement(o[e], e, t);
						for (i.updateBezierControlPoints(), e = 0, n = o.length; e < n; ++e) o[e].pivot()
					},
					updateElement: function(t, e, n) {
						var i = this,
							r = t.custom || {},
							a = i.getDataset(),
							o = i.chart.scale,
							s = o.getPointPositionForValue(e, a.data[e]),
							l = i._resolveDataElementOptions(t, e),
							u = i.getMeta().dataset._model,
							d = n ? o.xCenter : s.x,
							h = n ? o.yCenter : s.y;
						t._scale = o, t._options = l, t._datasetIndex = i.index, t._index = e, t._model = {
							x: d,
							y: h,
							skip: r.skip || isNaN(d) || isNaN(h),
							radius: l.radius,
							pointStyle: l.pointStyle,
							rotation: l.rotation,
							backgroundColor: l.backgroundColor,
							borderColor: l.borderColor,
							borderWidth: l.borderWidth,
							tension: Xt(r.tension, u ? u.tension : 0),
							hitRadius: l.hitRadius
						}
					},
					_resolveDatasetElementOptions: function() {
						var t = this,
							e = t._config,
							n = t.chart.options,
							i = it.prototype._resolveDatasetElementOptions.apply(t, arguments);
						return i.spanGaps = Xt(e.spanGaps, n.spanGaps), i.tension = Xt(e.lineTension, n.elements.line.tension), i
					},
					updateBezierControlPoints: function() {
						var t, e, n, i, r = this.getMeta(),
							a = this.chart.chartArea,
							o = r.data || [];

						function s(t, e, n) {
							return Math.max(Math.min(t, n), e)
						}
						for (r.dataset._model.spanGaps && (o = o.filter((function(t) {
								return !t._model.skip
							}))), t = 0, e = o.length; t < e; ++t) n = o[t]._model, i = B.splineCurve(B.previousItem(o, t, !0)._model, n, B.nextItem(o, t, !0)._model, n.tension), n.controlPointPreviousX = s(i.previous.x, a.left, a.right), n.controlPointPreviousY = s(i.previous.y, a.top, a.bottom), n.controlPointNextX = s(i.next.x, a.left, a.right), n.controlPointNextY = s(i.next.y, a.top, a.bottom)
					},
					setHoverStyle: function(t) {
						var e = t._model,
							n = t._options,
							i = B.getHoverColor;
						t.$previousStyle = {
							backgroundColor: e.backgroundColor,
							borderColor: e.borderColor,
							borderWidth: e.borderWidth,
							radius: e.radius
						}, e.backgroundColor = Xt(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = Xt(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = Xt(n.hoverBorderWidth, n.borderWidth), e.radius = Xt(n.hoverRadius, n.radius)
					}
				});
				Y._set("scatter", {
					hover: {
						mode: "single"
					},
					scales: {
						xAxes: [{
							id: "x-axis-1",
							type: "linear",
							position: "bottom"
						}],
						yAxes: [{
							id: "y-axis-1",
							type: "linear",
							position: "left"
						}]
					},
					tooltips: {
						callbacks: {
							title: function() {
								return ""
							},
							label: function(t) {
								return "(" + t.xLabel + ", " + t.yLabel + ")"
							}
						}
					}
				}), Y._set("global", {
					datasets: {
						scatter: {
							showLine: !1
						}
					}
				});
				var Jt = {
					bar: Ot,
					bubble: It,
					doughnut: Wt,
					horizontalBar: Et,
					line: Gt,
					polarArea: Zt,
					pie: $t,
					radar: Kt,
					scatter: Gt
				};

				function Qt(t, e) {
					return t.native ? {
						x: t.x,
						y: t.y
					} : B.getRelativePosition(t, e)
				}

				function te(t, e) {
					var n, i, r, a, o, s, l = t._getSortedVisibleDatasetMetas();
					for (i = 0, a = l.length; i < a; ++i)
						for (r = 0, o = (n = l[i].data).length; r < o; ++r)(s = n[r])._view.skip || e(s)
				}

				function ee(t, e) {
					var n = [];
					return te(t, (function(t) {
						t.inRange(e.x, e.y) && n.push(t)
					})), n
				}

				function ne(t, e, n, i) {
					var r = Number.POSITIVE_INFINITY,
						a = [];
					return te(t, (function(t) {
						if (!n || t.inRange(e.x, e.y)) {
							var o = t.getCenterPoint(),
								s = i(e, o);
							s < r ? (a = [t], r = s) : s === r && a.push(t)
						}
					})), a
				}

				function ie(t) {
					var e = -1 !== t.indexOf("x"),
						n = -1 !== t.indexOf("y");
					return function(t, i) {
						var r = e ? Math.abs(t.x - i.x) : 0,
							a = n ? Math.abs(t.y - i.y) : 0;
						return Math.sqrt(Math.pow(r, 2) + Math.pow(a, 2))
					}
				}

				function re(t, e, n) {
					var i = Qt(e, t);
					n.axis = n.axis || "x";
					var r = ie(n.axis),
						a = n.intersect ? ee(t, i) : ne(t, i, !1, r),
						o = [];
					return a.length ? (t._getSortedVisibleDatasetMetas().forEach((function(t) {
						var e = t.data[a[0]._index];
						e && !e._view.skip && o.push(e)
					})), o) : []
				}
				var ae = {
						modes: {
							single: function(t, e) {
								var n = Qt(e, t),
									i = [];
								return te(t, (function(t) {
									if (t.inRange(n.x, n.y)) return i.push(t), i
								})), i.slice(0, 1)
							},
							label: re,
							index: re,
							dataset: function(t, e, n) {
								var i = Qt(e, t);
								n.axis = n.axis || "xy";
								var r = ie(n.axis),
									a = n.intersect ? ee(t, i) : ne(t, i, !1, r);
								return a.length > 0 && (a = t.getDatasetMeta(a[0]._datasetIndex).data), a
							},
							"x-axis": function(t, e) {
								return re(t, e, {
									intersect: !1
								})
							},
							point: function(t, e) {
								return ee(t, Qt(e, t))
							},
							nearest: function(t, e, n) {
								var i = Qt(e, t);
								n.axis = n.axis || "xy";
								var r = ie(n.axis);
								return ne(t, i, n.intersect, r)
							},
							x: function(t, e, n) {
								var i = Qt(e, t),
									r = [],
									a = !1;
								return te(t, (function(t) {
									t.inXRange(i.x) && r.push(t), t.inRange(i.x, i.y) && (a = !0)
								})), n.intersect && !a && (r = []), r
							},
							y: function(t, e, n) {
								var i = Qt(e, t),
									r = [],
									a = !1;
								return te(t, (function(t) {
									t.inYRange(i.y) && r.push(t), t.inRange(i.x, i.y) && (a = !0)
								})), n.intersect && !a && (r = []), r
							}
						}
					},
					oe = B.extend;

				function se(t, e) {
					return B.where(t, (function(t) {
						return t.pos === e
					}))
				}

				function le(t, e) {
					return t.sort((function(t, n) {
						var i = e ? n : t,
							r = e ? t : n;
						return i.weight === r.weight ? i.index - r.index : i.weight - r.weight
					}))
				}

				function ue(t, e, n, i) {
					return Math.max(t[n], e[n]) + Math.max(t[i], e[i])
				}

				function de(t, e, n) {
					var i, r, a = n.box,
						o = t.maxPadding;
					if (n.size && (t[n.pos] -= n.size), n.size = n.horizontal ? a.height : a.width, t[n.pos] += n.size, a.getPadding) {
						var s = a.getPadding();
						o.top = Math.max(o.top, s.top), o.left = Math.max(o.left, s.left), o.bottom = Math.max(o.bottom, s.bottom), o.right = Math.max(o.right, s.right)
					}
					if (i = e.outerWidth - ue(o, t, "left", "right"), r = e.outerHeight - ue(o, t, "top", "bottom"), i !== t.w || r !== t.h) {
						t.w = i, t.h = r;
						var l = n.horizontal ? [i, t.w] : [r, t.h];
						return l[0] !== l[1] && (!isNaN(l[0]) || !isNaN(l[1]))
					}
				}

				function he(t, e) {
					var n = e.maxPadding;

					function i(t) {
						var i = {
							left: 0,
							top: 0,
							right: 0,
							bottom: 0
						};
						return t.forEach((function(t) {
							i[t] = Math.max(e[t], n[t])
						})), i
					}
					return i(t ? ["left", "right"] : ["top", "bottom"])
				}

				function ce(t, e, n) {
					var i, r, a, o, s, l, u = [];
					for (i = 0, r = t.length; i < r; ++i)(o = (a = t[i]).box).update(a.width || e.w, a.height || e.h, he(a.horizontal, e)), de(e, n, a) && (l = !0, u.length && (s = !0)), o.fullWidth || u.push(a);
					return s && ce(u, e, n) || l
				}

				function fe(t, e, n) {
					var i, r, a, o, s = n.padding,
						l = e.x,
						u = e.y;
					for (i = 0, r = t.length; i < r; ++i) o = (a = t[i]).box, a.horizontal ? (o.left = o.fullWidth ? s.left : e.left, o.right = o.fullWidth ? n.outerWidth - s.right : e.left + e.w, o.top = u, o.bottom = u + o.height, o.width = o.right - o.left, u = o.bottom) : (o.left = l, o.right = l + o.width, o.top = e.top, o.bottom = e.top + e.h, o.height = o.bottom - o.top, l = o.right);
					e.x = l, e.y = u
				}
				Y._set("global", {
					layout: {
						padding: {
							top: 0,
							right: 0,
							bottom: 0,
							left: 0
						}
					}
				});
				var ge, me = {
						defaults: {},
						addBox: function(t, e) {
							t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function() {
								return [{
									z: 0,
									draw: function() {
										e.draw.apply(e, arguments)
									}
								}]
							}, t.boxes.push(e)
						},
						removeBox: function(t, e) {
							var n = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== n && t.boxes.splice(n, 1)
						},
						configure: function(t, e, n) {
							for (var i, r = ["fullWidth", "position", "weight"], a = r.length, o = 0; o < a; ++o) i = r[o], n.hasOwnProperty(i) && (e[i] = n[i])
						},
						update: function(t, e, n) {
							if (t) {
								var i = t.options.layout || {},
									r = B.options.toPadding(i.padding),
									a = e - r.width,
									o = n - r.height,
									s = function(t) {
										var e = function(t) {
												var e, n, i, r = [];
												for (e = 0, n = (t || []).length; e < n; ++e) i = t[e], r.push({
													index: e,
													box: i,
													pos: i.position,
													horizontal: i.isHorizontal(),
													weight: i.weight
												});
												return r
											}(t),
											n = le(se(e, "left"), !0),
											i = le(se(e, "right")),
											r = le(se(e, "top"), !0),
											a = le(se(e, "bottom"));
										return {
											leftAndTop: n.concat(r),
											rightAndBottom: i.concat(a),
											chartArea: se(e, "chartArea"),
											vertical: n.concat(i),
											horizontal: r.concat(a)
										}
									}(t.boxes),
									l = s.vertical,
									u = s.horizontal,
									d = Object.freeze({
										outerWidth: e,
										outerHeight: n,
										padding: r,
										availableWidth: a,
										vBoxMaxWidth: a / 2 / l.length,
										hBoxMaxHeight: o / 2
									}),
									h = oe({
										maxPadding: oe({}, r),
										w: a,
										h: o,
										x: r.left,
										y: r.top
									}, r);
								! function(t, e) {
									var n, i, r;
									for (n = 0, i = t.length; n < i; ++n)(r = t[n]).width = r.horizontal ? r.box.fullWidth && e.availableWidth : e.vBoxMaxWidth, r.height = r.horizontal && e.hBoxMaxHeight
								}(l.concat(u), d), ce(l, h, d), ce(u, h, d) && ce(l, h, d),
									function(t) {
										var e = t.maxPadding;

										function n(n) {
											var i = Math.max(e[n] - t[n], 0);
											return t[n] += i, i
										}
										t.y += n("top"), t.x += n("left"), n("right"), n("bottom")
									}(h), fe(s.leftAndTop, h, d), h.x += h.w, h.y += h.h, fe(s.rightAndBottom, h, d), t.chartArea = {
										left: h.left,
										top: h.top,
										right: h.left + h.w,
										bottom: h.top + h.h
									}, B.each(s.chartArea, (function(e) {
										var n = e.box;
										oe(n, t.chartArea), n.update(h.w, h.h)
									}))
							}
						}
					},
					pe = (ge = Object.freeze({
						__proto__: null,
						default: "/*\r\n * DOM element rendering detection\r\n * https://davidwalsh.name/detect-node-insertion\r\n */\r\n@keyframes chartjs-render-animation {\r\n\tfrom { opacity: 0.99; }\r\n\tto { opacity: 1; }\r\n}\r\n\r\n.chartjs-render-monitor {\r\n\tanimation: chartjs-render-animation 0.001s;\r\n}\r\n\r\n/*\r\n * DOM element resizing detection\r\n * https://github.com/marcj/css-element-queries\r\n */\r\n.chartjs-size-monitor,\r\n.chartjs-size-monitor-expand,\r\n.chartjs-size-monitor-shrink {\r\n\tposition: absolute;\r\n\tdirection: ltr;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\tvisibility: hidden;\r\n\tz-index: -1;\r\n}\r\n\r\n.chartjs-size-monitor-expand > div {\r\n\tposition: absolute;\r\n\twidth: 1000000px;\r\n\theight: 1000000px;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n\r\n.chartjs-size-monitor-shrink > div {\r\n\tposition: absolute;\r\n\twidth: 200%;\r\n\theight: 200%;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n"
					})) && ge.default || ge,
					ve = ["animationstart", "webkitAnimationStart"],
					ye = {
						touchstart: "mousedown",
						touchmove: "mousemove",
						touchend: "mouseup",
						pointerenter: "mouseenter",
						pointerdown: "mousedown",
						pointermove: "mousemove",
						pointerup: "mouseup",
						pointerleave: "mouseout",
						pointerout: "mouseout"
					};

				function be(t, e) {
					var n = B.getStyle(t, e),
						i = n && n.match(/^(\d+)(\.\d+)?px$/);
					return i ? Number(i[1]) : void 0
				}
				var xe = !! function() {
					var t = !1;
					try {
						var e = Object.defineProperty({}, "passive", {
							get: function() {
								t = !0
							}
						});
						window.addEventListener("e", null, e)
					} catch (n) {}
					return t
				}() && {
					passive: !0
				};

				function _e(t, e, n) {
					t.addEventListener(e, n, xe)
				}

				function we(t, e, n) {
					t.removeEventListener(e, n, xe)
				}

				function ke(t, e, n, i, r) {
					return {
						type: t,
						chart: e,
						native: r || null,
						x: void 0 !== n ? n : null,
						y: void 0 !== i ? i : null
					}
				}

				function Me(t) {
					var e = document.createElement("div");
					return e.className = t || "", e
				}

				function Se(t, e, n) {
					var i, r, a, o, s = t.$chartjs || (t.$chartjs = {}),
						l = s.resizer = function(t) {
							var e = Me("chartjs-size-monitor"),
								n = Me("chartjs-size-monitor-expand"),
								i = Me("chartjs-size-monitor-shrink");
							n.appendChild(Me()), i.appendChild(Me()), e.appendChild(n), e.appendChild(i), e._reset = function() {
								n.scrollLeft = 1e6, n.scrollTop = 1e6, i.scrollLeft = 1e6, i.scrollTop = 1e6
							};
							var r = function() {
								e._reset(), t()
							};
							return _e(n, "scroll", r.bind(n, "expand")), _e(i, "scroll", r.bind(i, "shrink")), e
						}((i = function() {
							if (s.resizer) {
								var i = n.options.maintainAspectRatio && t.parentNode,
									r = i ? i.clientWidth : 0;
								e(ke("resize", n)), i && i.clientWidth < r && n.canvas && e(ke("resize", n))
							}
						}, a = !1, o = [], function() {
							o = Array.prototype.slice.call(arguments), r = r || this, a || (a = !0, B.requestAnimFrame.call(window, (function() {
								a = !1, i.apply(r, o)
							})))
						}));
					! function(t, e) {
						var n = t.$chartjs || (t.$chartjs = {}),
							i = n.renderProxy = function(t) {
								"chartjs-render-animation" === t.animationName && e()
							};
						B.each(ve, (function(e) {
							_e(t, e, i)
						})), n.reflow = !!t.offsetParent, t.classList.add("chartjs-render-monitor")
					}(t, (function() {
						if (s.resizer) {
							var e = t.parentNode;
							e && e !== l.parentNode && e.insertBefore(l, e.firstChild), l._reset()
						}
					}))
				}

				function De(t) {
					var e = t.$chartjs || {},
						n = e.resizer;
					delete e.resizer,
						function(t) {
							var e = t.$chartjs || {},
								n = e.renderProxy;
							n && (B.each(ve, (function(e) {
								we(t, e, n)
							})), delete e.renderProxy), t.classList.remove("chartjs-render-monitor")
						}(t), n && n.parentNode && n.parentNode.removeChild(n)
				}
				var Ce = {
					disableCSSInjection: !1,
					_enabled: "undefined" !== typeof window && "undefined" !== typeof document,
					_ensureLoaded: function(t) {
						if (!this.disableCSSInjection) {
							var e = t.getRootNode ? t.getRootNode() : document;
							! function(t, e) {
								var n = t.$chartjs || (t.$chartjs = {});
								if (!n.containsStyles) {
									n.containsStyles = !0, e = "/* Chart.js */\n" + e;
									var i = document.createElement("style");
									i.setAttribute("type", "text/css"), i.appendChild(document.createTextNode(e)), t.appendChild(i)
								}
							}(e.host ? e : document.head, pe)
						}
					},
					acquireContext: function(t, e) {
						"string" === typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
						var n = t && t.getContext && t.getContext("2d");
						return n && n.canvas === t ? (this._ensureLoaded(t), function(t, e) {
							var n = t.style,
								i = t.getAttribute("height"),
								r = t.getAttribute("width");
							if (t.$chartjs = {
									initial: {
										height: i,
										width: r,
										style: {
											display: n.display,
											height: n.height,
											width: n.width
										}
									}
								}, n.display = n.display || "block", null === r || "" === r) {
								var a = be(t, "width");
								void 0 !== a && (t.width = a)
							}
							if (null === i || "" === i)
								if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
								else {
									var o = be(t, "height");
									void 0 !== a && (t.height = o)
								}
						}(t, e), n) : null
					},
					releaseContext: function(t) {
						var e = t.canvas;
						if (e.$chartjs) {
							var n = e.$chartjs.initial;
							["height", "width"].forEach((function(t) {
								var i = n[t];
								B.isNullOrUndef(i) ? e.removeAttribute(t) : e.setAttribute(t, i)
							})), B.each(n.style || {}, (function(t, n) {
								e.style[n] = t
							})), e.width = e.width, delete e.$chartjs
						}
					},
					addEventListener: function(t, e, n) {
						var i = t.canvas;
						if ("resize" !== e) {
							var r = n.$chartjs || (n.$chartjs = {});
							_e(i, e, (r.proxies || (r.proxies = {}))[t.id + "_" + e] = function(e) {
								n(function(t, e) {
									var n = ye[t.type] || t.type,
										i = B.getRelativePosition(t, e);
									return ke(n, e, i.x, i.y, t)
								}(e, t))
							})
						} else Se(i, n, t)
					},
					removeEventListener: function(t, e, n) {
						var i = t.canvas;
						if ("resize" !== e) {
							var r = ((n.$chartjs || {}).proxies || {})[t.id + "_" + e];
							r && we(i, e, r)
						} else De(i)
					}
				};
				B.addEvent = _e, B.removeEvent = we;
				var Pe = Ce._enabled ? Ce : {
						acquireContext: function(t) {
							return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null
						}
					},
					Te = B.extend({
						initialize: function() {},
						acquireContext: function() {},
						releaseContext: function() {},
						addEventListener: function() {},
						removeEventListener: function() {}
					}, Pe);
				Y._set("global", {
					plugins: {}
				});
				var Oe = {
						_plugins: [],
						_cacheId: 0,
						register: function(t) {
							var e = this._plugins;
							[].concat(t).forEach((function(t) {
								-1 === e.indexOf(t) && e.push(t)
							})), this._cacheId++
						},
						unregister: function(t) {
							var e = this._plugins;
							[].concat(t).forEach((function(t) {
								var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
							})), this._cacheId++
						},
						clear: function() {
							this._plugins = [], this._cacheId++
						},
						count: function() {
							return this._plugins.length
						},
						getAll: function() {
							return this._plugins
						},
						notify: function(t, e, n) {
							var i, r, a, o, s, l = this.descriptors(t),
								u = l.length;
							for (i = 0; i < u; ++i)
								if ("function" === typeof(s = (a = (r = l[i]).plugin)[e]) && ((o = [t].concat(n || [])).push(r.options), !1 === s.apply(a, o))) return !1;
							return !0
						},
						descriptors: function(t) {
							var e = t.$plugins || (t.$plugins = {});
							if (e.id === this._cacheId) return e.descriptors;
							var n = [],
								i = [],
								r = t && t.config || {},
								a = r.options && r.options.plugins || {};
							return this._plugins.concat(r.plugins || []).forEach((function(t) {
								if (-1 === n.indexOf(t)) {
									var e = t.id,
										r = a[e];
									!1 !== r && (!0 === r && (r = B.clone(Y.global.plugins[e])), n.push(t), i.push({
										plugin: t,
										options: r || {}
									}))
								}
							})), e.descriptors = i, e.id = this._cacheId, i
						},
						_invalidate: function(t) {
							delete t.$plugins
						}
					},
					Ae = {
						constructors: {},
						defaults: {},
						registerScaleType: function(t, e, n) {
							this.constructors[t] = e, this.defaults[t] = B.clone(n)
						},
						getScaleConstructor: function(t) {
							return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
						},
						getScaleDefaults: function(t) {
							return this.defaults.hasOwnProperty(t) ? B.merge(Object.create(null), [Y.scale, this.defaults[t]]) : {}
						},
						updateScaleDefaults: function(t, e) {
							this.defaults.hasOwnProperty(t) && (this.defaults[t] = B.extend(this.defaults[t], e))
						},
						addScalesToLayout: function(t) {
							B.each(t.scales, (function(e) {
								e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, me.addBox(t, e)
							}))
						}
					},
					Fe = B.valueOrDefault,
					Ie = B.rtl.getRtlAdapter;
				Y._set("global", {
					tooltips: {
						enabled: !0,
						custom: null,
						mode: "nearest",
						position: "average",
						intersect: !0,
						backgroundColor: "rgba(0,0,0,0.8)",
						titleFontStyle: "bold",
						titleSpacing: 2,
						titleMarginBottom: 6,
						titleFontColor: "#fff",
						titleAlign: "left",
						bodySpacing: 2,
						bodyFontColor: "#fff",
						bodyAlign: "left",
						footerFontStyle: "bold",
						footerSpacing: 2,
						footerMarginTop: 6,
						footerFontColor: "#fff",
						footerAlign: "left",
						yPadding: 6,
						xPadding: 6,
						caretPadding: 2,
						caretSize: 5,
						cornerRadius: 6,
						multiKeyBackground: "#fff",
						displayColors: !0,
						borderColor: "rgba(0,0,0,0)",
						borderWidth: 0,
						callbacks: {
							beforeTitle: B.noop,
							title: function(t, e) {
								var n = "",
									i = e.labels,
									r = i ? i.length : 0;
								if (t.length > 0) {
									var a = t[0];
									a.label ? n = a.label : a.xLabel ? n = a.xLabel : r > 0 && a.index < r && (n = i[a.index])
								}
								return n
							},
							afterTitle: B.noop,
							beforeBody: B.noop,
							beforeLabel: B.noop,
							label: function(t, e) {
								var n = e.datasets[t.datasetIndex].label || "";
								return n && (n += ": "), B.isNullOrUndef(t.value) ? n += t.yLabel : n += t.value, n
							},
							labelColor: function(t, e) {
								var n = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
								return {
									borderColor: n.borderColor,
									backgroundColor: n.backgroundColor
								}
							},
							labelTextColor: function() {
								return this._options.bodyFontColor
							},
							afterLabel: B.noop,
							afterBody: B.noop,
							beforeFooter: B.noop,
							footer: B.noop,
							afterFooter: B.noop
						}
					}
				});
				var Ne = {
					average: function(t) {
						if (!t.length) return !1;
						var e, n, i = 0,
							r = 0,
							a = 0;
						for (e = 0, n = t.length; e < n; ++e) {
							var o = t[e];
							if (o && o.hasValue()) {
								var s = o.tooltipPosition();
								i += s.x, r += s.y, ++a
							}
						}
						return {
							x: i / a,
							y: r / a
						}
					},
					nearest: function(t, e) {
						var n, i, r, a = e.x,
							o = e.y,
							s = Number.POSITIVE_INFINITY;
						for (n = 0, i = t.length; n < i; ++n) {
							var l = t[n];
							if (l && l.hasValue()) {
								var u = l.getCenterPoint(),
									d = B.distanceBetweenPoints(e, u);
								d < s && (s = d, r = l)
							}
						}
						if (r) {
							var h = r.tooltipPosition();
							a = h.x, o = h.y
						}
						return {
							x: a,
							y: o
						}
					}
				};

				function Re(t, e) {
					return e && (B.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
				}

				function Le(t) {
					return ("string" === typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t
				}

				function Ye(t) {
					var e = Y.global;
					return {
						xPadding: t.xPadding,
						yPadding: t.yPadding,
						xAlign: t.xAlign,
						yAlign: t.yAlign,
						rtl: t.rtl,
						textDirection: t.textDirection,
						bodyFontColor: t.bodyFontColor,
						_bodyFontFamily: Fe(t.bodyFontFamily, e.defaultFontFamily),
						_bodyFontStyle: Fe(t.bodyFontStyle, e.defaultFontStyle),
						_bodyAlign: t.bodyAlign,
						bodyFontSize: Fe(t.bodyFontSize, e.defaultFontSize),
						bodySpacing: t.bodySpacing,
						titleFontColor: t.titleFontColor,
						_titleFontFamily: Fe(t.titleFontFamily, e.defaultFontFamily),
						_titleFontStyle: Fe(t.titleFontStyle, e.defaultFontStyle),
						titleFontSize: Fe(t.titleFontSize, e.defaultFontSize),
						_titleAlign: t.titleAlign,
						titleSpacing: t.titleSpacing,
						titleMarginBottom: t.titleMarginBottom,
						footerFontColor: t.footerFontColor,
						_footerFontFamily: Fe(t.footerFontFamily, e.defaultFontFamily),
						_footerFontStyle: Fe(t.footerFontStyle, e.defaultFontStyle),
						footerFontSize: Fe(t.footerFontSize, e.defaultFontSize),
						_footerAlign: t.footerAlign,
						footerSpacing: t.footerSpacing,
						footerMarginTop: t.footerMarginTop,
						caretSize: t.caretSize,
						cornerRadius: t.cornerRadius,
						backgroundColor: t.backgroundColor,
						opacity: 0,
						legendColorBackground: t.multiKeyBackground,
						displayColors: t.displayColors,
						borderColor: t.borderColor,
						borderWidth: t.borderWidth
					}
				}

				function We(t, e) {
					return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - t.xPadding : t.x + t.xPadding
				}

				function Ee(t) {
					return Re([], Le(t))
				}
				var ze = $.extend({
						initialize: function() {
							this._model = Ye(this._options), this._lastActive = []
						},
						getTitle: function() {
							var t = this,
								e = t._options,
								n = e.callbacks,
								i = n.beforeTitle.apply(t, arguments),
								r = n.title.apply(t, arguments),
								a = n.afterTitle.apply(t, arguments),
								o = [];
							return o = Re(o, Le(i)), o = Re(o, Le(r)), o = Re(o, Le(a))
						},
						getBeforeBody: function() {
							return Ee(this._options.callbacks.beforeBody.apply(this, arguments))
						},
						getBody: function(t, e) {
							var n = this,
								i = n._options.callbacks,
								r = [];
							return B.each(t, (function(t) {
								var a = {
									before: [],
									lines: [],
									after: []
								};
								Re(a.before, Le(i.beforeLabel.call(n, t, e))), Re(a.lines, i.label.call(n, t, e)), Re(a.after, Le(i.afterLabel.call(n, t, e))), r.push(a)
							})), r
						},
						getAfterBody: function() {
							return Ee(this._options.callbacks.afterBody.apply(this, arguments))
						},
						getFooter: function() {
							var t = this,
								e = t._options.callbacks,
								n = e.beforeFooter.apply(t, arguments),
								i = e.footer.apply(t, arguments),
								r = e.afterFooter.apply(t, arguments),
								a = [];
							return a = Re(a, Le(n)), a = Re(a, Le(i)), a = Re(a, Le(r))
						},
						update: function(t) {
							var e, n, i, r, a, o, s, l, u, d, h = this,
								c = h._options,
								f = h._model,
								g = h._model = Ye(c),
								m = h._active,
								p = h._data,
								v = {
									xAlign: f.xAlign,
									yAlign: f.yAlign
								},
								y = {
									x: f.x,
									y: f.y
								},
								b = {
									width: f.width,
									height: f.height
								},
								x = {
									x: f.caretX,
									y: f.caretY
								};
							if (m.length) {
								g.opacity = 1;
								var _ = [],
									w = [];
								x = Ne[c.position].call(h, m, h._eventPosition);
								var k = [];
								for (e = 0, n = m.length; e < n; ++e) k.push((i = m[e], r = void 0, a = void 0, o = void 0, s = void 0, l = void 0, u = void 0, d = void 0, r = i._xScale, a = i._yScale || i._scale, o = i._index, s = i._datasetIndex, l = i._chart.getDatasetMeta(s).controller, u = l._getIndexScale(), d = l._getValueScale(), {
									xLabel: r ? r.getLabelForIndex(o, s) : "",
									yLabel: a ? a.getLabelForIndex(o, s) : "",
									label: u ? "" + u.getLabelForIndex(o, s) : "",
									value: d ? "" + d.getLabelForIndex(o, s) : "",
									index: o,
									datasetIndex: s,
									x: i._model.x,
									y: i._model.y
								}));
								c.filter && (k = k.filter((function(t) {
									return c.filter(t, p)
								}))), c.itemSort && (k = k.sort((function(t, e) {
									return c.itemSort(t, e, p)
								}))), B.each(k, (function(t) {
									_.push(c.callbacks.labelColor.call(h, t, h._chart)), w.push(c.callbacks.labelTextColor.call(h, t, h._chart))
								})), g.title = h.getTitle(k, p), g.beforeBody = h.getBeforeBody(k, p), g.body = h.getBody(k, p), g.afterBody = h.getAfterBody(k, p), g.footer = h.getFooter(k, p), g.x = x.x, g.y = x.y, g.caretPadding = c.caretPadding, g.labelColors = _, g.labelTextColors = w, g.dataPoints = k, b = function(t, e) {
									var n = t._chart.ctx,
										i = 2 * e.yPadding,
										r = 0,
										a = e.body,
										o = a.reduce((function(t, e) {
											return t + e.before.length + e.lines.length + e.after.length
										}), 0);
									o += e.beforeBody.length + e.afterBody.length;
									var s = e.title.length,
										l = e.footer.length,
										u = e.titleFontSize,
										d = e.bodyFontSize,
										h = e.footerFontSize;
									i += s * u, i += s ? (s - 1) * e.titleSpacing : 0, i += s ? e.titleMarginBottom : 0, i += o * d, i += o ? (o - 1) * e.bodySpacing : 0, i += l ? e.footerMarginTop : 0, i += l * h, i += l ? (l - 1) * e.footerSpacing : 0;
									var c = 0,
										f = function(t) {
											r = Math.max(r, n.measureText(t).width + c)
										};
									return n.font = B.fontString(u, e._titleFontStyle, e._titleFontFamily), B.each(e.title, f), n.font = B.fontString(d, e._bodyFontStyle, e._bodyFontFamily), B.each(e.beforeBody.concat(e.afterBody), f), c = e.displayColors ? d + 2 : 0, B.each(a, (function(t) {
										B.each(t.before, f), B.each(t.lines, f), B.each(t.after, f)
									})), c = 0, n.font = B.fontString(h, e._footerFontStyle, e._footerFontFamily), B.each(e.footer, f), {
										width: r += 2 * e.xPadding,
										height: i
									}
								}(this, g), y = function(t, e, n, i) {
									var r = t.x,
										a = t.y,
										o = t.caretSize,
										s = t.caretPadding,
										l = t.cornerRadius,
										u = n.xAlign,
										d = n.yAlign,
										h = o + s,
										c = l + s;
									return "right" === u ? r -= e.width : "center" === u && ((r -= e.width / 2) + e.width > i.width && (r = i.width - e.width), r < 0 && (r = 0)), "top" === d ? a += h : a -= "bottom" === d ? e.height + h : e.height / 2, "center" === d ? "left" === u ? r += h : "right" === u && (r -= h) : "left" === u ? r -= c : "right" === u && (r += c), {
										x: r,
										y: a
									}
								}(g, b, v = function(t, e) {
									var n, i, r, a, o, s = t._model,
										l = t._chart,
										u = t._chart.chartArea,
										d = "center",
										h = "center";
									s.y < e.height ? h = "top" : s.y > l.height - e.height && (h = "bottom");
									var c = (u.left + u.right) / 2,
										f = (u.top + u.bottom) / 2;
									"center" === h ? (n = function(t) {
										return t <= c
									}, i = function(t) {
										return t > c
									}) : (n = function(t) {
										return t <= e.width / 2
									}, i = function(t) {
										return t >= l.width - e.width / 2
									}), r = function(t) {
										return t + e.width + s.caretSize + s.caretPadding > l.width
									}, a = function(t) {
										return t - e.width - s.caretSize - s.caretPadding < 0
									}, o = function(t) {
										return t <= f ? "top" : "bottom"
									}, n(s.x) ? (d = "left", r(s.x) && (d = "center", h = o(s.y))) : i(s.x) && (d = "right", a(s.x) && (d = "center", h = o(s.y)));
									var g = t._options;
									return {
										xAlign: g.xAlign ? g.xAlign : d,
										yAlign: g.yAlign ? g.yAlign : h
									}
								}(this, b), h._chart)
							} else g.opacity = 0;
							return g.xAlign = v.xAlign, g.yAlign = v.yAlign, g.x = y.x, g.y = y.y, g.width = b.width, g.height = b.height, g.caretX = x.x, g.caretY = x.y, h._model = g, t && c.custom && c.custom.call(h, g), h
						},
						drawCaret: function(t, e) {
							var n = this._chart.ctx,
								i = this._view,
								r = this.getCaretPosition(t, e, i);
							n.lineTo(r.x1, r.y1), n.lineTo(r.x2, r.y2), n.lineTo(r.x3, r.y3)
						},
						getCaretPosition: function(t, e, n) {
							var i, r, a, o, s, l, u = n.caretSize,
								d = n.cornerRadius,
								h = n.xAlign,
								c = n.yAlign,
								f = t.x,
								g = t.y,
								m = e.width,
								p = e.height;
							if ("center" === c) s = g + p / 2, "left" === h ? (r = (i = f) - u, a = i, o = s + u, l = s - u) : (r = (i = f + m) + u, a = i, o = s - u, l = s + u);
							else if ("left" === h ? (i = (r = f + d + u) - u, a = r + u) : "right" === h ? (i = (r = f + m - d - u) - u, a = r + u) : (i = (r = n.caretX) - u, a = r + u), "top" === c) s = (o = g) - u, l = o;
							else {
								s = (o = g + p) + u, l = o;
								var v = a;
								a = i, i = v
							}
							return {
								x1: i,
								x2: r,
								x3: a,
								y1: o,
								y2: s,
								y3: l
							}
						},
						drawTitle: function(t, e, n) {
							var i, r, a, o = e.title,
								s = o.length;
							if (s) {
								var l = Ie(e.rtl, e.x, e.width);
								for (t.x = We(e, e._titleAlign), n.textAlign = l.textAlign(e._titleAlign), n.textBaseline = "middle", i = e.titleFontSize, r = e.titleSpacing, n.fillStyle = e.titleFontColor, n.font = B.fontString(i, e._titleFontStyle, e._titleFontFamily), a = 0; a < s; ++a) n.fillText(o[a], l.x(t.x), t.y + i / 2), t.y += i + r, a + 1 === s && (t.y += e.titleMarginBottom - r)
							}
						},
						drawBody: function(t, e, n) {
							var i, r, a, o, s, l, u, d, h = e.bodyFontSize,
								c = e.bodySpacing,
								f = e._bodyAlign,
								g = e.body,
								m = e.displayColors,
								p = 0,
								v = m ? We(e, "left") : 0,
								y = Ie(e.rtl, e.x, e.width),
								b = function(e) {
									n.fillText(e, y.x(t.x + p), t.y + h / 2), t.y += h + c
								},
								x = y.textAlign(f);
							for (n.textAlign = f, n.textBaseline = "middle", n.font = B.fontString(h, e._bodyFontStyle, e._bodyFontFamily), t.x = We(e, x), n.fillStyle = e.bodyFontColor, B.each(e.beforeBody, b), p = m && "right" !== x ? "center" === f ? h / 2 + 1 : h + 2 : 0, s = 0, u = g.length; s < u; ++s) {
								for (i = g[s], r = e.labelTextColors[s], a = e.labelColors[s], n.fillStyle = r, B.each(i.before, b), l = 0, d = (o = i.lines).length; l < d; ++l) {
									if (m) {
										var _ = y.x(v);
										n.fillStyle = e.legendColorBackground, n.fillRect(y.leftForLtr(_, h), t.y, h, h), n.lineWidth = 1, n.strokeStyle = a.borderColor, n.strokeRect(y.leftForLtr(_, h), t.y, h, h), n.fillStyle = a.backgroundColor, n.fillRect(y.leftForLtr(y.xPlus(_, 1), h - 2), t.y + 1, h - 2, h - 2), n.fillStyle = r
									}
									b(o[l])
								}
								B.each(i.after, b)
							}
							p = 0, B.each(e.afterBody, b), t.y -= c
						},
						drawFooter: function(t, e, n) {
							var i, r, a = e.footer,
								o = a.length;
							if (o) {
								var s = Ie(e.rtl, e.x, e.width);
								for (t.x = We(e, e._footerAlign), t.y += e.footerMarginTop, n.textAlign = s.textAlign(e._footerAlign), n.textBaseline = "middle", i = e.footerFontSize, n.fillStyle = e.footerFontColor, n.font = B.fontString(i, e._footerFontStyle, e._footerFontFamily), r = 0; r < o; ++r) n.fillText(a[r], s.x(t.x), t.y + i / 2), t.y += i + e.footerSpacing
							}
						},
						drawBackground: function(t, e, n, i) {
							n.fillStyle = e.backgroundColor, n.strokeStyle = e.borderColor, n.lineWidth = e.borderWidth;
							var r = e.xAlign,
								a = e.yAlign,
								o = t.x,
								s = t.y,
								l = i.width,
								u = i.height,
								d = e.cornerRadius;
							n.beginPath(), n.moveTo(o + d, s), "top" === a && this.drawCaret(t, i), n.lineTo(o + l - d, s), n.quadraticCurveTo(o + l, s, o + l, s + d), "center" === a && "right" === r && this.drawCaret(t, i), n.lineTo(o + l, s + u - d), n.quadraticCurveTo(o + l, s + u, o + l - d, s + u), "bottom" === a && this.drawCaret(t, i), n.lineTo(o + d, s + u), n.quadraticCurveTo(o, s + u, o, s + u - d), "center" === a && "left" === r && this.drawCaret(t, i), n.lineTo(o, s + d), n.quadraticCurveTo(o, s, o + d, s), n.closePath(), n.fill(), e.borderWidth > 0 && n.stroke()
						},
						draw: function() {
							var t = this._chart.ctx,
								e = this._view;
							if (0 !== e.opacity) {
								var n = {
										width: e.width,
										height: e.height
									},
									i = {
										x: e.x,
										y: e.y
									},
									r = Math.abs(e.opacity < .001) ? 0 : e.opacity,
									a = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
								this._options.enabled && a && (t.save(), t.globalAlpha = r, this.drawBackground(i, e, t, n), i.y += e.yPadding, B.rtl.overrideTextDirection(t, e.textDirection), this.drawTitle(i, e, t), this.drawBody(i, e, t), this.drawFooter(i, e, t), B.rtl.restoreTextDirection(t, e.textDirection), t.restore())
							}
						},
						handleEvent: function(t) {
							var e, n = this,
								i = n._options;
							return n._lastActive = n._lastActive || [], "mouseout" === t.type ? n._active = [] : (n._active = n._chart.getElementsAtEventForMode(t, i.mode, i), i.reverse && n._active.reverse()), (e = !B.arrayEquals(n._active, n._lastActive)) && (n._lastActive = n._active, (i.enabled || i.custom) && (n._eventPosition = {
								x: t.x,
								y: t.y
							}, n.update(!0), n.pivot())), e
						}
					}),
					Ve = Ne,
					Be = ze;
				Be.positioners = Ve;
				var He = B.valueOrDefault;

				function je() {
					return B.merge(Object.create(null), [].slice.call(arguments), {
						merger: function(t, e, n, i) {
							if ("xAxes" === t || "yAxes" === t) {
								var r, a, o, s = n[t].length;
								for (e[t] || (e[t] = []), r = 0; r < s; ++r) o = n[t][r], a = He(o.type, "xAxes" === t ? "category" : "linear"), r >= e[t].length && e[t].push({}), !e[t][r].type || o.type && o.type !== e[t][r].type ? B.merge(e[t][r], [Ae.getScaleDefaults(a), o]) : B.merge(e[t][r], o)
							} else B._merger(t, e, n, i)
						}
					})
				}

				function Ue() {
					return B.merge(Object.create(null), [].slice.call(arguments), {
						merger: function(t, e, n, i) {
							var r = e[t] || Object.create(null),
								a = n[t];
							"scales" === t ? e[t] = je(r, a) : "scale" === t ? e[t] = B.merge(r, [Ae.getScaleDefaults(a.type), a]) : B._merger(t, e, n, i)
						}
					})
				}

				function Ge(t) {
					var e = t.options;
					B.each(t.scales, (function(e) {
						me.removeBox(t, e)
					})), e = Ue(Y.global, Y[t.config.type], e), t.options = t.config.options = e, t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.tooltip._options = e.tooltips, t.tooltip.initialize()
				}

				function qe(t, e, n) {
					var i, r = function(t) {
						return t.id === i
					};
					do {
						i = e + n++
					} while (B.findIndex(t, r) >= 0);
					return i
				}

				function Ze(t) {
					return "top" === t || "bottom" === t
				}

				function $e(t, e) {
					return function(n, i) {
						return n[t] === i[t] ? n[e] - i[e] : n[t] - i[t]
					}
				}
				Y._set("global", {
					elements: {},
					events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
					hover: {
						onHover: null,
						mode: "nearest",
						intersect: !0,
						animationDuration: 400
					},
					onClick: null,
					maintainAspectRatio: !0,
					responsive: !0,
					responsiveAnimationDuration: 0
				});
				var Xe = function(t, e) {
					return this.construct(t, e), this
				};
				B.extend(Xe.prototype, {
					construct: function(t, e) {
						var n = this;
						e = function(t) {
							var e = (t = t || Object.create(null)).data = t.data || {};
							return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = Ue(Y.global, Y[t.type], t.options || {}), t
						}(e);
						var i = Te.acquireContext(t, e),
							r = i && i.canvas,
							a = r && r.height,
							o = r && r.width;
						n.id = B.uid(), n.ctx = i, n.canvas = r, n.config = e, n.width = o, n.height = a, n.aspectRatio = a ? o / a : null, n.options = e.options, n._bufferedRender = !1, n._layers = [], n.chart = n, n.controller = n, Xe.instances[n.id] = n, Object.defineProperty(n, "data", {
							get: function() {
								return n.config.data
							},
							set: function(t) {
								n.config.data = t
							}
						}), i && r ? (n.initialize(), n.update()) : console.error("Failed to create chart: can't acquire context from the given item")
					},
					initialize: function() {
						var t = this;
						return Oe.notify(t, "beforeInit"), B.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.initToolTip(), Oe.notify(t, "afterInit"), t
					},
					clear: function() {
						return B.canvas.clear(this), this
					},
					stop: function() {
						return J.cancelAnimation(this), this
					},
					resize: function(t) {
						var e = this,
							n = e.options,
							i = e.canvas,
							r = n.maintainAspectRatio && e.aspectRatio || null,
							a = Math.max(0, Math.floor(B.getMaximumWidth(i))),
							o = Math.max(0, Math.floor(r ? a / r : B.getMaximumHeight(i)));
						if ((e.width !== a || e.height !== o) && (i.width = e.width = a, i.height = e.height = o, i.style.width = a + "px", i.style.height = o + "px", B.retinaScale(e, n.devicePixelRatio), !t)) {
							var s = {
								width: a,
								height: o
							};
							Oe.notify(e, "resize", [s]), n.onResize && n.onResize(e, s), e.stop(), e.update({
								duration: n.responsiveAnimationDuration
							})
						}
					},
					ensureScalesHaveIDs: function() {
						var t = this.options,
							e = t.scales || {},
							n = t.scale;
						B.each(e.xAxes, (function(t, n) {
							t.id || (t.id = qe(e.xAxes, "x-axis-", n))
						})), B.each(e.yAxes, (function(t, n) {
							t.id || (t.id = qe(e.yAxes, "y-axis-", n))
						})), n && (n.id = n.id || "scale")
					},
					buildOrUpdateScales: function() {
						var t = this,
							e = t.options,
							n = t.scales || {},
							i = [],
							r = Object.keys(n).reduce((function(t, e) {
								return t[e] = !1, t
							}), {});
						e.scales && (i = i.concat((e.scales.xAxes || []).map((function(t) {
							return {
								options: t,
								dtype: "category",
								dposition: "bottom"
							}
						})), (e.scales.yAxes || []).map((function(t) {
							return {
								options: t,
								dtype: "linear",
								dposition: "left"
							}
						})))), e.scale && i.push({
							options: e.scale,
							dtype: "radialLinear",
							isDefault: !0,
							dposition: "chartArea"
						}), B.each(i, (function(e) {
							var i = e.options,
								a = i.id,
								o = He(i.type, e.dtype);
							Ze(i.position) !== Ze(e.dposition) && (i.position = e.dposition), r[a] = !0;
							var s = null;
							if (a in n && n[a].type === o)(s = n[a]).options = i, s.ctx = t.ctx, s.chart = t;
							else {
								var l = Ae.getScaleConstructor(o);
								if (!l) return;
								s = new l({
									id: a,
									type: o,
									options: i,
									ctx: t.ctx,
									chart: t
								}), n[s.id] = s
							}
							s.mergeTicksOptions(), e.isDefault && (t.scale = s)
						})), B.each(r, (function(t, e) {
							t || delete n[e]
						})), t.scales = n, Ae.addScalesToLayout(this)
					},
					buildOrUpdateControllers: function() {
						var t, e, n = this,
							i = [],
							r = n.data.datasets;
						for (t = 0, e = r.length; t < e; t++) {
							var a = r[t],
								o = n.getDatasetMeta(t),
								s = a.type || n.config.type;
							if (o.type && o.type !== s && (n.destroyDatasetMeta(t), o = n.getDatasetMeta(t)), o.type = s, o.order = a.order || 0, o.index = t, o.controller) o.controller.updateIndex(t), o.controller.linkScales();
							else {
								var l = Jt[o.type];
								if (void 0 === l) throw new Error('"' + o.type + '" is not a chart type.');
								o.controller = new l(n, t), i.push(o.controller)
							}
						}
						return i
					},
					resetElements: function() {
						var t = this;
						B.each(t.data.datasets, (function(e, n) {
							t.getDatasetMeta(n).controller.reset()
						}), t)
					},
					reset: function() {
						this.resetElements(), this.tooltip.initialize()
					},
					update: function(t) {
						var e, n, i = this;
						if (t && "object" === typeof t || (t = {
								duration: t,
								lazy: arguments[1]
							}), Ge(i), Oe._invalidate(i), !1 !== Oe.notify(i, "beforeUpdate")) {
							i.tooltip._data = i.data;
							var r = i.buildOrUpdateControllers();
							for (e = 0, n = i.data.datasets.length; e < n; e++) i.getDatasetMeta(e).controller.buildOrUpdateElements();
							i.updateLayout(), i.options.animation && i.options.animation.duration && B.each(r, (function(t) {
								t.reset()
							})), i.updateDatasets(), i.tooltip.initialize(), i.lastActive = [], Oe.notify(i, "afterUpdate"), i._layers.sort($e("z", "_idx")), i._bufferedRender ? i._bufferedRequest = {
								duration: t.duration,
								easing: t.easing,
								lazy: t.lazy
							} : i.render(t)
						}
					},
					updateLayout: function() {
						var t = this;
						!1 !== Oe.notify(t, "beforeLayout") && (me.update(this, this.width, this.height), t._layers = [], B.each(t.boxes, (function(e) {
							e._configure && e._configure(), t._layers.push.apply(t._layers, e._layers())
						}), t), t._layers.forEach((function(t, e) {
							t._idx = e
						})), Oe.notify(t, "afterScaleUpdate"), Oe.notify(t, "afterLayout"))
					},
					updateDatasets: function() {
						if (!1 !== Oe.notify(this, "beforeDatasetsUpdate")) {
							for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
							Oe.notify(this, "afterDatasetsUpdate")
						}
					},
					updateDataset: function(t) {
						var e = this.getDatasetMeta(t),
							n = {
								meta: e,
								index: t
							};
						!1 !== Oe.notify(this, "beforeDatasetUpdate", [n]) && (e.controller._update(), Oe.notify(this, "afterDatasetUpdate", [n]))
					},
					render: function(t) {
						var e = this;
						t && "object" === typeof t || (t = {
							duration: t,
							lazy: arguments[1]
						});
						var n = e.options.animation,
							i = He(t.duration, n && n.duration),
							r = t.lazy;
						if (!1 !== Oe.notify(e, "beforeRender")) {
							var a = function(t) {
								Oe.notify(e, "afterRender"), B.callback(n && n.onComplete, [t], e)
							};
							if (n && i) {
								var o = new K({
									numSteps: i / 16.66,
									easing: t.easing || n.easing,
									render: function(t, e) {
										var n = B.easing.effects[e.easing],
											i = e.currentStep,
											r = i / e.numSteps;
										t.draw(n(r), r, i)
									},
									onAnimationProgress: n.onProgress,
									onAnimationComplete: a
								});
								J.addAnimation(e, o, i, r)
							} else e.draw(), a(new K({
								numSteps: 0,
								chart: e
							}));
							return e
						}
					},
					draw: function(t) {
						var e, n, i = this;
						if (i.clear(), B.isNullOrUndef(t) && (t = 1), i.transition(t), !(i.width <= 0 || i.height <= 0) && !1 !== Oe.notify(i, "beforeDraw", [t])) {
							for (n = i._layers, e = 0; e < n.length && n[e].z <= 0; ++e) n[e].draw(i.chartArea);
							for (i.drawDatasets(t); e < n.length; ++e) n[e].draw(i.chartArea);
							i._drawTooltip(t), Oe.notify(i, "afterDraw", [t])
						}
					},
					transition: function(t) {
						for (var e = 0, n = (this.data.datasets || []).length; e < n; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
						this.tooltip.transition(t)
					},
					_getSortedDatasetMetas: function(t) {
						var e, n, i = [];
						for (e = 0, n = (this.data.datasets || []).length; e < n; ++e) t && !this.isDatasetVisible(e) || i.push(this.getDatasetMeta(e));
						return i.sort($e("order", "index")), i
					},
					_getSortedVisibleDatasetMetas: function() {
						return this._getSortedDatasetMetas(!0)
					},
					drawDatasets: function(t) {
						var e, n;
						if (!1 !== Oe.notify(this, "beforeDatasetsDraw", [t])) {
							for (n = (e = this._getSortedVisibleDatasetMetas()).length - 1; n >= 0; --n) this.drawDataset(e[n], t);
							Oe.notify(this, "afterDatasetsDraw", [t])
						}
					},
					drawDataset: function(t, e) {
						var n = {
							meta: t,
							index: t.index,
							easingValue: e
						};
						!1 !== Oe.notify(this, "beforeDatasetDraw", [n]) && (t.controller.draw(e), Oe.notify(this, "afterDatasetDraw", [n]))
					},
					_drawTooltip: function(t) {
						var e = this.tooltip,
							n = {
								tooltip: e,
								easingValue: t
							};
						!1 !== Oe.notify(this, "beforeTooltipDraw", [n]) && (e.draw(), Oe.notify(this, "afterTooltipDraw", [n]))
					},
					getElementAtEvent: function(t) {
						return ae.modes.single(this, t)
					},
					getElementsAtEvent: function(t) {
						return ae.modes.label(this, t, {
							intersect: !0
						})
					},
					getElementsAtXAxis: function(t) {
						return ae.modes["x-axis"](this, t, {
							intersect: !0
						})
					},
					getElementsAtEventForMode: function(t, e, n) {
						var i = ae.modes[e];
						return "function" === typeof i ? i(this, t, n) : []
					},
					getDatasetAtEvent: function(t) {
						return ae.modes.dataset(this, t, {
							intersect: !0
						})
					},
					getDatasetMeta: function(t) {
						var e = this.data.datasets[t];
						e._meta || (e._meta = {});
						var n = e._meta[this.id];
						return n || (n = e._meta[this.id] = {
							type: null,
							data: [],
							dataset: null,
							controller: null,
							hidden: null,
							xAxisID: null,
							yAxisID: null,
							order: e.order || 0,
							index: t
						}), n
					},
					getVisibleDatasetCount: function() {
						for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e) this.isDatasetVisible(e) && t++;
						return t
					},
					isDatasetVisible: function(t) {
						var e = this.getDatasetMeta(t);
						return "boolean" === typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
					},
					generateLegend: function() {
						return this.options.legendCallback(this)
					},
					destroyDatasetMeta: function(t) {
						var e = this.id,
							n = this.data.datasets[t],
							i = n._meta && n._meta[e];
						i && (i.controller.destroy(), delete n._meta[e])
					},
					destroy: function() {
						var t, e, n = this,
							i = n.canvas;
						for (n.stop(), t = 0, e = n.data.datasets.length; t < e; ++t) n.destroyDatasetMeta(t);
						i && (n.unbindEvents(), B.canvas.clear(n), Te.releaseContext(n.ctx), n.canvas = null, n.ctx = null), Oe.notify(n, "destroy"), delete Xe.instances[n.id]
					},
					toBase64Image: function() {
						return this.canvas.toDataURL.apply(this.canvas, arguments)
					},
					initToolTip: function() {
						var t = this;
						t.tooltip = new Be({
							_chart: t,
							_chartInstance: t,
							_data: t.data,
							_options: t.options.tooltips
						}, t)
					},
					bindEvents: function() {
						var t = this,
							e = t._listeners = {},
							n = function() {
								t.eventHandler.apply(t, arguments)
							};
						B.each(t.options.events, (function(i) {
							Te.addEventListener(t, i, n), e[i] = n
						})), t.options.responsive && (n = function() {
							t.resize()
						}, Te.addEventListener(t, "resize", n), e.resize = n)
					},
					unbindEvents: function() {
						var t = this,
							e = t._listeners;
						e && (delete t._listeners, B.each(e, (function(e, n) {
							Te.removeEventListener(t, n, e)
						})))
					},
					updateHoverStyle: function(t, e, n) {
						var i, r, a, o = n ? "set" : "remove";
						for (r = 0, a = t.length; r < a; ++r)(i = t[r]) && this.getDatasetMeta(i._datasetIndex).controller[o + "HoverStyle"](i);
						"dataset" === e && this.getDatasetMeta(t[0]._datasetIndex).controller["_" + o + "DatasetHoverStyle"]()
					},
					eventHandler: function(t) {
						var e = this,
							n = e.tooltip;
						if (!1 !== Oe.notify(e, "beforeEvent", [t])) {
							e._bufferedRender = !0, e._bufferedRequest = null;
							var i = e.handleEvent(t);
							n && (i = n._start ? n.handleEvent(t) : i | n.handleEvent(t)), Oe.notify(e, "afterEvent", [t]);
							var r = e._bufferedRequest;
							return r ? e.render(r) : i && !e.animating && (e.stop(), e.render({
								duration: e.options.hover.animationDuration,
								lazy: !0
							})), e._bufferedRender = !1, e._bufferedRequest = null, e
						}
					},
					handleEvent: function(t) {
						var e, n = this,
							i = n.options || {},
							r = i.hover;
						return n.lastActive = n.lastActive || [], "mouseout" === t.type ? n.active = [] : n.active = n.getElementsAtEventForMode(t, r.mode, r), B.callback(i.onHover || i.hover.onHover, [t.native, n.active], n), "mouseup" !== t.type && "click" !== t.type || i.onClick && i.onClick.call(n, t.native, n.active), n.lastActive.length && n.updateHoverStyle(n.lastActive, r.mode, !1), n.active.length && r.mode && n.updateHoverStyle(n.active, r.mode, !0), e = !B.arrayEquals(n.active, n.lastActive), n.lastActive = n.active, e
					}
				}), Xe.instances = {};
				var Ke = Xe;

				function Je() {
					throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.")
				}

				function Qe(t) {
					this.options = t || {}
				}
				Xe.Controller = Xe, Xe.types = {}, B.configMerge = Ue, B.scaleMerge = je, B.extend(Qe.prototype, {
					formats: Je,
					parse: Je,
					format: Je,
					add: Je,
					diff: Je,
					startOf: Je,
					endOf: Je,
					_create: function(t) {
						return t
					}
				}), Qe.override = function(t) {
					B.extend(Qe.prototype, t)
				};
				var tn = {
						_date: Qe
					},
					en = {
						formatters: {
							values: function(t) {
								return B.isArray(t) ? t : "" + t
							},
							linear: function(t, e, n) {
								var i = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
								Math.abs(i) > 1 && t !== Math.floor(t) && (i = t - Math.floor(t));
								var r = B.log10(Math.abs(i)),
									a = "";
								if (0 !== t)
									if (Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4) {
										var o = B.log10(Math.abs(t)),
											s = Math.floor(o) - Math.floor(r);
										s = Math.max(Math.min(s, 20), 0), a = t.toExponential(s)
									} else {
										var l = -1 * Math.floor(r);
										l = Math.max(Math.min(l, 20), 0), a = t.toFixed(l)
									}
								else a = "0";
								return a
							},
							logarithmic: function(t, e, n) {
								var i = t / Math.pow(10, Math.floor(B.log10(t)));
								return 0 === t ? "0" : 1 === i || 2 === i || 5 === i || 0 === e || e === n.length - 1 ? t.toExponential() : ""
							}
						}
					},
					nn = B.isArray,
					rn = B.isNullOrUndef,
					an = B.valueOrDefault,
					on = B.valueAtIndexOrDefault;

				function sn(t, e, n) {
					var i, r = t.getTicks().length,
						a = Math.min(e, r - 1),
						o = t.getPixelForTick(a),
						s = t._startPixel,
						l = t._endPixel;
					if (!(n && (i = 1 === r ? Math.max(o - s, l - o) : 0 === e ? (t.getPixelForTick(1) - o) / 2 : (o - t.getPixelForTick(a - 1)) / 2, (o += a < e ? i : -i) < s - 1e-6 || o > l + 1e-6))) return o
				}

				function ln(t, e, n, i) {
					var r, a, o, s, l, u, d, h, c, f, g, m, p, v = n.length,
						y = [],
						b = [],
						x = [],
						_ = 0,
						w = 0;
					for (r = 0; r < v; ++r) {
						if (s = n[r].label, l = n[r].major ? e.major : e.minor, t.font = u = l.string, d = i[u] = i[u] || {
								data: {},
								gc: []
							}, h = l.lineHeight, c = f = 0, rn(s) || nn(s)) {
							if (nn(s))
								for (a = 0, o = s.length; a < o; ++a) g = s[a], rn(g) || nn(g) || (c = B.measureText(t, d.data, d.gc, c, g), f += h)
						} else c = B.measureText(t, d.data, d.gc, c, s), f = h;
						y.push(c), b.push(f), x.push(h / 2), _ = Math.max(c, _), w = Math.max(f, w)
					}

					function k(t) {
						return {
							width: y[t] || 0,
							height: b[t] || 0,
							offset: x[t] || 0
						}
					}
					return function(t, e) {
						B.each(t, (function(t) {
							var n, i = t.gc,
								r = i.length / 2;
							if (r > e) {
								for (n = 0; n < r; ++n) delete t.data[i[n]];
								i.splice(0, r)
							}
						}))
					}(i, v), m = y.indexOf(_), p = b.indexOf(w), {
						first: k(0),
						last: k(v - 1),
						widest: k(m),
						highest: k(p)
					}
				}

				function un(t) {
					return t.drawTicks ? t.tickMarkLength : 0
				}

				function dn(t) {
					var e, n;
					return t.display ? (e = B.options._parseFont(t), n = B.options.toPadding(t.padding), e.lineHeight + n.height) : 0
				}

				function hn(t, e) {
					return B.extend(B.options._parseFont({
						fontFamily: an(e.fontFamily, t.fontFamily),
						fontSize: an(e.fontSize, t.fontSize),
						fontStyle: an(e.fontStyle, t.fontStyle),
						lineHeight: an(e.lineHeight, t.lineHeight)
					}), {
						color: B.options.resolve([e.fontColor, t.fontColor, Y.global.defaultFontColor])
					})
				}

				function cn(t) {
					var e = hn(t, t.minor);
					return {
						minor: e,
						major: t.major.enabled ? hn(t, t.major) : e
					}
				}

				function fn(t) {
					var e, n, i, r = [];
					for (n = 0, i = t.length; n < i; ++n) "undefined" !== typeof(e = t[n])._index && r.push(e);
					return r
				}

				function gn(t, e, n, i) {
					var r, a, o, s, l = an(n, 0),
						u = Math.min(an(i, t.length), t.length),
						d = 0;
					for (e = Math.ceil(e), i && (e = (r = i - n) / Math.floor(r / e)), s = l; s < 0;) d++, s = Math.round(l + d * e);
					for (a = Math.max(l, 0); a < u; a++) o = t[a], a === s ? (o._index = a, d++, s = Math.round(l + d * e)) : delete o.label
				}
				Y._set("scale", {
					display: !0,
					position: "left",
					offset: !1,
					gridLines: {
						display: !0,
						color: "rgba(0,0,0,0.1)",
						lineWidth: 1,
						drawBorder: !0,
						drawOnChartArea: !0,
						drawTicks: !0,
						tickMarkLength: 10,
						zeroLineWidth: 1,
						zeroLineColor: "rgba(0,0,0,0.25)",
						zeroLineBorderDash: [],
						zeroLineBorderDashOffset: 0,
						offsetGridLines: !1,
						borderDash: [],
						borderDashOffset: 0
					},
					scaleLabel: {
						display: !1,
						labelString: "",
						padding: {
							top: 4,
							bottom: 4
						}
					},
					ticks: {
						beginAtZero: !1,
						minRotation: 0,
						maxRotation: 50,
						mirror: !1,
						padding: 0,
						reverse: !1,
						display: !0,
						autoSkip: !0,
						autoSkipPadding: 0,
						labelOffset: 0,
						callback: en.formatters.values,
						minor: {},
						major: {}
					}
				});
				var mn = $.extend({
					zeroLineIndex: 0,
					getPadding: function() {
						return {
							left: this.paddingLeft || 0,
							top: this.paddingTop || 0,
							right: this.paddingRight || 0,
							bottom: this.paddingBottom || 0
						}
					},
					getTicks: function() {
						return this._ticks
					},
					_getLabels: function() {
						var t = this.chart.data;
						return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
					},
					mergeTicksOptions: function() {},
					beforeUpdate: function() {
						B.callback(this.options.beforeUpdate, [this])
					},
					update: function(t, e, n) {
						var i, r, a, o, s, l = this,
							u = l.options.ticks,
							d = u.sampleSize;
						if (l.beforeUpdate(), l.maxWidth = t, l.maxHeight = e, l.margins = B.extend({
								left: 0,
								right: 0,
								top: 0,
								bottom: 0
							}, n), l._ticks = null, l.ticks = null, l._labelSizes = null, l._maxLabelLines = 0, l.longestLabelWidth = 0, l.longestTextCache = l.longestTextCache || {}, l._gridLineItems = null, l._labelItems = null, l.beforeSetDimensions(), l.setDimensions(), l.afterSetDimensions(), l.beforeDataLimits(), l.determineDataLimits(), l.afterDataLimits(), l.beforeBuildTicks(), o = l.buildTicks() || [], (!(o = l.afterBuildTicks(o) || o) || !o.length) && l.ticks)
							for (o = [], i = 0, r = l.ticks.length; i < r; ++i) o.push({
								value: l.ticks[i],
								major: !1
							});
						return l._ticks = o, s = d < o.length, a = l._convertTicksToLabels(s ? function(t, e) {
							for (var n = [], i = t.length / e, r = 0, a = t.length; r < a; r += i) n.push(t[Math.floor(r)]);
							return n
						}(o, d) : o), l._configure(), l.beforeCalculateTickRotation(), l.calculateTickRotation(), l.afterCalculateTickRotation(), l.beforeFit(), l.fit(), l.afterFit(), l._ticksToDraw = u.display && (u.autoSkip || "auto" === u.source) ? l._autoSkip(o) : o, s && (a = l._convertTicksToLabels(l._ticksToDraw)), l.ticks = a, l.afterUpdate(), l.minSize
					},
					_configure: function() {
						var t, e, n = this,
							i = n.options.ticks.reverse;
						n.isHorizontal() ? (t = n.left, e = n.right) : (t = n.top, e = n.bottom, i = !i), n._startPixel = t, n._endPixel = e, n._reversePixels = i, n._length = e - t
					},
					afterUpdate: function() {
						B.callback(this.options.afterUpdate, [this])
					},
					beforeSetDimensions: function() {
						B.callback(this.options.beforeSetDimensions, [this])
					},
					setDimensions: function() {
						var t = this;
						t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
					},
					afterSetDimensions: function() {
						B.callback(this.options.afterSetDimensions, [this])
					},
					beforeDataLimits: function() {
						B.callback(this.options.beforeDataLimits, [this])
					},
					determineDataLimits: B.noop,
					afterDataLimits: function() {
						B.callback(this.options.afterDataLimits, [this])
					},
					beforeBuildTicks: function() {
						B.callback(this.options.beforeBuildTicks, [this])
					},
					buildTicks: B.noop,
					afterBuildTicks: function(t) {
						var e = this;
						return nn(t) && t.length ? B.callback(e.options.afterBuildTicks, [e, t]) : (e.ticks = B.callback(e.options.afterBuildTicks, [e, e.ticks]) || e.ticks, t)
					},
					beforeTickToLabelConversion: function() {
						B.callback(this.options.beforeTickToLabelConversion, [this])
					},
					convertTicksToLabels: function() {
						var t = this.options.ticks;
						this.ticks = this.ticks.map(t.userCallback || t.callback, this)
					},
					afterTickToLabelConversion: function() {
						B.callback(this.options.afterTickToLabelConversion, [this])
					},
					beforeCalculateTickRotation: function() {
						B.callback(this.options.beforeCalculateTickRotation, [this])
					},
					calculateTickRotation: function() {
						var t, e, n, i, r, a, o, s = this,
							l = s.options,
							u = l.ticks,
							d = s.getTicks().length,
							h = u.minRotation || 0,
							c = u.maxRotation,
							f = h;
						!s._isVisible() || !u.display || h >= c || d <= 1 || !s.isHorizontal() ? s.labelRotation = h : (e = (t = s._getLabelSizes()).widest.width, n = t.highest.height - t.highest.offset, i = Math.min(s.maxWidth, s.chart.width - e), e + 6 > (r = l.offset ? s.maxWidth / d : i / (d - 1)) && (r = i / (d - (l.offset ? .5 : 1)), a = s.maxHeight - un(l.gridLines) - u.padding - dn(l.scaleLabel), o = Math.sqrt(e * e + n * n), f = B.toDegrees(Math.min(Math.asin(Math.min((t.highest.height + 6) / r, 1)), Math.asin(Math.min(a / o, 1)) - Math.asin(n / o))), f = Math.max(h, Math.min(c, f))), s.labelRotation = f)
					},
					afterCalculateTickRotation: function() {
						B.callback(this.options.afterCalculateTickRotation, [this])
					},
					beforeFit: function() {
						B.callback(this.options.beforeFit, [this])
					},
					fit: function() {
						var t = this,
							e = t.minSize = {
								width: 0,
								height: 0
							},
							n = t.chart,
							i = t.options,
							r = i.ticks,
							a = i.scaleLabel,
							o = i.gridLines,
							s = t._isVisible(),
							l = "bottom" === i.position,
							u = t.isHorizontal();
						if (u ? e.width = t.maxWidth : s && (e.width = un(o) + dn(a)), u ? s && (e.height = un(o) + dn(a)) : e.height = t.maxHeight, r.display && s) {
							var d = cn(r),
								h = t._getLabelSizes(),
								c = h.first,
								f = h.last,
								g = h.widest,
								m = h.highest,
								p = .4 * d.minor.lineHeight,
								v = r.padding;
							if (u) {
								var y = 0 !== t.labelRotation,
									b = B.toRadians(t.labelRotation),
									x = Math.cos(b),
									_ = Math.sin(b),
									w = _ * g.width + x * (m.height - (y ? m.offset : 0)) + (y ? 0 : p);
								e.height = Math.min(t.maxHeight, e.height + w + v);
								var k, M, S = t.getPixelForTick(0) - t.left,
									D = t.right - t.getPixelForTick(t.getTicks().length - 1);
								y ? (k = l ? x * c.width + _ * c.offset : _ * (c.height - c.offset), M = l ? _ * (f.height - f.offset) : x * f.width + _ * f.offset) : (k = c.width / 2, M = f.width / 2), t.paddingLeft = Math.max((k - S) * t.width / (t.width - S), 0) + 3, t.paddingRight = Math.max((M - D) * t.width / (t.width - D), 0) + 3
							} else {
								var C = r.mirror ? 0 : g.width + v + p;
								e.width = Math.min(t.maxWidth, e.width + C), t.paddingTop = c.height / 2, t.paddingBottom = f.height / 2
							}
						}
						t.handleMargins(), u ? (t.width = t._length = n.width - t.margins.left - t.margins.right, t.height = e.height) : (t.width = e.width, t.height = t._length = n.height - t.margins.top - t.margins.bottom)
					},
					handleMargins: function() {
						var t = this;
						t.margins && (t.margins.left = Math.max(t.paddingLeft, t.margins.left), t.margins.top = Math.max(t.paddingTop, t.margins.top), t.margins.right = Math.max(t.paddingRight, t.margins.right), t.margins.bottom = Math.max(t.paddingBottom, t.margins.bottom))
					},
					afterFit: function() {
						B.callback(this.options.afterFit, [this])
					},
					isHorizontal: function() {
						var t = this.options.position;
						return "top" === t || "bottom" === t
					},
					isFullWidth: function() {
						return this.options.fullWidth
					},
					getRightValue: function(t) {
						if (rn(t)) return NaN;
						if (("number" === typeof t || t instanceof Number) && !isFinite(t)) return NaN;
						if (t)
							if (this.isHorizontal()) {
								if (void 0 !== t.x) return this.getRightValue(t.x)
							} else if (void 0 !== t.y) return this.getRightValue(t.y);
						return t
					},
					_convertTicksToLabels: function(t) {
						var e, n, i, r = this;
						for (r.ticks = t.map((function(t) {
								return t.value
							})), r.beforeTickToLabelConversion(), e = r.convertTicksToLabels(t) || r.ticks, r.afterTickToLabelConversion(), n = 0, i = t.length; n < i; ++n) t[n].label = e[n];
						return e
					},
					_getLabelSizes: function() {
						var t = this,
							e = t._labelSizes;
						return e || (t._labelSizes = e = ln(t.ctx, cn(t.options.ticks), t.getTicks(), t.longestTextCache), t.longestLabelWidth = e.widest.width), e
					},
					_parseValue: function(t) {
						var e, n, i, r;
						return nn(t) ? (e = +this.getRightValue(t[0]), n = +this.getRightValue(t[1]), i = Math.min(e, n), r = Math.max(e, n)) : (e = void 0, n = t = +this.getRightValue(t), i = t, r = t), {
							min: i,
							max: r,
							start: e,
							end: n
						}
					},
					_getScaleLabel: function(t) {
						var e = this._parseValue(t);
						return void 0 !== e.start ? "[" + e.start + ", " + e.end + "]" : +this.getRightValue(t)
					},
					getLabelForIndex: B.noop,
					getPixelForValue: B.noop,
					getValueForPixel: B.noop,
					getPixelForTick: function(t) {
						var e = this.options.offset,
							n = this._ticks.length,
							i = 1 / Math.max(n - (e ? 0 : 1), 1);
						return t < 0 || t > n - 1 ? null : this.getPixelForDecimal(t * i + (e ? i / 2 : 0))
					},
					getPixelForDecimal: function(t) {
						return this._reversePixels && (t = 1 - t), this._startPixel + t * this._length
					},
					getDecimalForPixel: function(t) {
						var e = (t - this._startPixel) / this._length;
						return this._reversePixels ? 1 - e : e
					},
					getBasePixel: function() {
						return this.getPixelForValue(this.getBaseValue())
					},
					getBaseValue: function() {
						var t = this.min,
							e = this.max;
						return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
					},
					_autoSkip: function(t) {
						var e, n, i, r, a = this.options.ticks,
							o = this._length,
							s = a.maxTicksLimit || o / this._tickSize() + 1,
							l = a.major.enabled ? function(t) {
								var e, n, i = [];
								for (e = 0, n = t.length; e < n; e++) t[e].major && i.push(e);
								return i
							}(t) : [],
							u = l.length,
							d = l[0],
							h = l[u - 1];
						if (u > s) return function(t, e, n) {
							var i, r, a = 0,
								o = e[0];
							for (n = Math.ceil(n), i = 0; i < t.length; i++) r = t[i], i === o ? (r._index = i, o = e[++a * n]) : delete r.label
						}(t, l, u / s), fn(t);
						if (i = function(t, e, n, i) {
								var r, a, o, s, l = function(t) {
										var e, n, i = t.length;
										if (i < 2) return !1;
										for (n = t[0], e = 1; e < i; ++e)
											if (t[e] - t[e - 1] !== n) return !1;
										return n
									}(t),
									u = (e.length - 1) / i;
								if (!l) return Math.max(u, 1);
								for (o = 0, s = (r = B.math._factorize(l)).length - 1; o < s; o++)
									if ((a = r[o]) > u) return a;
								return Math.max(u, 1)
							}(l, t, 0, s), u > 0) {
							for (e = 0, n = u - 1; e < n; e++) gn(t, i, l[e], l[e + 1]);
							return r = u > 1 ? (h - d) / (u - 1) : null, gn(t, i, B.isNullOrUndef(r) ? 0 : d - r, d), gn(t, i, h, B.isNullOrUndef(r) ? t.length : h + r), fn(t)
						}
						return gn(t, i), fn(t)
					},
					_tickSize: function() {
						var t = this.options.ticks,
							e = B.toRadians(this.labelRotation),
							n = Math.abs(Math.cos(e)),
							i = Math.abs(Math.sin(e)),
							r = this._getLabelSizes(),
							a = t.autoSkipPadding || 0,
							o = r ? r.widest.width + a : 0,
							s = r ? r.highest.height + a : 0;
						return this.isHorizontal() ? s * n > o * i ? o / n : s / i : s * i < o * n ? s / n : o / i
					},
					_isVisible: function() {
						var t, e, n, i = this.chart,
							r = this.options.display;
						if ("auto" !== r) return !!r;
						for (t = 0, e = i.data.datasets.length; t < e; ++t)
							if (i.isDatasetVisible(t) && ((n = i.getDatasetMeta(t)).xAxisID === this.id || n.yAxisID === this.id)) return !0;
						return !1
					},
					_computeGridLineItems: function(t) {
						var e, n, i, r, a, o, s, l, u, d, h, c, f, g, m, p, v, y = this,
							b = y.chart,
							x = y.options,
							_ = x.gridLines,
							w = x.position,
							k = _.offsetGridLines,
							M = y.isHorizontal(),
							S = y._ticksToDraw,
							D = S.length + (k ? 1 : 0),
							C = un(_),
							P = [],
							T = _.drawBorder ? on(_.lineWidth, 0, 0) : 0,
							O = T / 2,
							A = B._alignPixel,
							F = function(t) {
								return A(b, t, T)
							};
						for ("top" === w ? (e = F(y.bottom), s = y.bottom - C, u = e - O, h = F(t.top) + O, f = t.bottom) : "bottom" === w ? (e = F(y.top), h = t.top, f = F(t.bottom) - O, s = e + O, u = y.top + C) : "left" === w ? (e = F(y.right), o = y.right - C, l = e - O, d = F(t.left) + O, c = t.right) : (e = F(y.left), d = t.left, c = F(t.right) - O, o = e + O, l = y.left + C), n = 0; n < D; ++n) i = S[n] || {}, rn(i.label) && n < S.length || (n === y.zeroLineIndex && x.offset === k ? (g = _.zeroLineWidth, m = _.zeroLineColor, p = _.zeroLineBorderDash || [], v = _.zeroLineBorderDashOffset || 0) : (g = on(_.lineWidth, n, 1), m = on(_.color, n, "rgba(0,0,0,0.1)"), p = _.borderDash || [], v = _.borderDashOffset || 0), void 0 !== (r = sn(y, i._index || n, k)) && (a = A(b, r, g), M ? o = l = d = c = a : s = u = h = f = a, P.push({
							tx1: o,
							ty1: s,
							tx2: l,
							ty2: u,
							x1: d,
							y1: h,
							x2: c,
							y2: f,
							width: g,
							color: m,
							borderDash: p,
							borderDashOffset: v
						})));
						return P.ticksLength = D, P.borderValue = e, P
					},
					_computeLabelItems: function() {
						var t, e, n, i, r, a, o, s, l, u, d, h, c = this,
							f = c.options,
							g = f.ticks,
							m = f.position,
							p = g.mirror,
							v = c.isHorizontal(),
							y = c._ticksToDraw,
							b = cn(g),
							x = g.padding,
							_ = un(f.gridLines),
							w = -B.toRadians(c.labelRotation),
							k = [];
						for ("top" === m ? (a = c.bottom - _ - x, o = w ? "left" : "center") : "bottom" === m ? (a = c.top + _ + x, o = w ? "right" : "center") : "left" === m ? (r = c.right - (p ? 0 : _) - x, o = p ? "left" : "right") : (r = c.left + (p ? 0 : _) + x, o = p ? "right" : "left"), t = 0, e = y.length; t < e; ++t) i = (n = y[t]).label, rn(i) || (s = c.getPixelForTick(n._index || t) + g.labelOffset, u = (l = n.major ? b.major : b.minor).lineHeight, d = nn(i) ? i.length : 1, v ? (r = s, h = "top" === m ? ((w ? 1 : .5) - d) * u : (w ? 0 : .5) * u) : (a = s, h = (1 - d) * u / 2), k.push({
							x: r,
							y: a,
							rotation: w,
							label: i,
							font: l,
							textOffset: h,
							textAlign: o
						}));
						return k
					},
					_drawGrid: function(t) {
						var e = this,
							n = e.options.gridLines;
						if (n.display) {
							var i, r, a, o, s, l = e.ctx,
								u = e.chart,
								d = B._alignPixel,
								h = n.drawBorder ? on(n.lineWidth, 0, 0) : 0,
								c = e._gridLineItems || (e._gridLineItems = e._computeGridLineItems(t));
							for (a = 0, o = c.length; a < o; ++a) i = (s = c[a]).width, r = s.color, i && r && (l.save(), l.lineWidth = i, l.strokeStyle = r, l.setLineDash && (l.setLineDash(s.borderDash), l.lineDashOffset = s.borderDashOffset), l.beginPath(), n.drawTicks && (l.moveTo(s.tx1, s.ty1), l.lineTo(s.tx2, s.ty2)), n.drawOnChartArea && (l.moveTo(s.x1, s.y1), l.lineTo(s.x2, s.y2)), l.stroke(), l.restore());
							if (h) {
								var f, g, m, p, v = h,
									y = on(n.lineWidth, c.ticksLength - 1, 1),
									b = c.borderValue;
								e.isHorizontal() ? (f = d(u, e.left, v) - v / 2, g = d(u, e.right, y) + y / 2, m = p = b) : (m = d(u, e.top, v) - v / 2, p = d(u, e.bottom, y) + y / 2, f = g = b), l.lineWidth = h, l.strokeStyle = on(n.color, 0), l.beginPath(), l.moveTo(f, m), l.lineTo(g, p), l.stroke()
							}
						}
					},
					_drawLabels: function() {
						var t = this;
						if (t.options.ticks.display) {
							var e, n, i, r, a, o, s, l, u = t.ctx,
								d = t._labelItems || (t._labelItems = t._computeLabelItems());
							for (e = 0, i = d.length; e < i; ++e) {
								if (o = (a = d[e]).font, u.save(), u.translate(a.x, a.y), u.rotate(a.rotation), u.font = o.string, u.fillStyle = o.color, u.textBaseline = "middle", u.textAlign = a.textAlign, s = a.label, l = a.textOffset, nn(s))
									for (n = 0, r = s.length; n < r; ++n) u.fillText("" + s[n], 0, l), l += o.lineHeight;
								else u.fillText(s, 0, l);
								u.restore()
							}
						}
					},
					_drawTitle: function() {
						var t = this,
							e = t.ctx,
							n = t.options,
							i = n.scaleLabel;
						if (i.display) {
							var r, a, o = an(i.fontColor, Y.global.defaultFontColor),
								s = B.options._parseFont(i),
								l = B.options.toPadding(i.padding),
								u = s.lineHeight / 2,
								d = n.position,
								h = 0;
							if (t.isHorizontal()) r = t.left + t.width / 2, a = "bottom" === d ? t.bottom - u - l.bottom : t.top + u + l.top;
							else {
								var c = "left" === d;
								r = c ? t.left + u + l.top : t.right - u - l.top, a = t.top + t.height / 2, h = c ? -.5 * Math.PI : .5 * Math.PI
							}
							e.save(), e.translate(r, a), e.rotate(h), e.textAlign = "center", e.textBaseline = "middle", e.fillStyle = o, e.font = s.string, e.fillText(i.labelString, 0, 0), e.restore()
						}
					},
					draw: function(t) {
						this._isVisible() && (this._drawGrid(t), this._drawTitle(), this._drawLabels())
					},
					_layers: function() {
						var t = this,
							e = t.options,
							n = e.ticks && e.ticks.z || 0,
							i = e.gridLines && e.gridLines.z || 0;
						return t._isVisible() && n !== i && t.draw === t._draw ? [{
							z: i,
							draw: function() {
								t._drawGrid.apply(t, arguments), t._drawTitle.apply(t, arguments)
							}
						}, {
							z: n,
							draw: function() {
								t._drawLabels.apply(t, arguments)
							}
						}] : [{
							z: n,
							draw: function() {
								t.draw.apply(t, arguments)
							}
						}]
					},
					_getMatchingVisibleMetas: function(t) {
						var e = this,
							n = e.isHorizontal();
						return e.chart._getSortedVisibleDatasetMetas().filter((function(i) {
							return (!t || i.type === t) && (n ? i.xAxisID === e.id : i.yAxisID === e.id)
						}))
					}
				});
				mn.prototype._draw = mn.prototype.draw;
				var pn = mn,
					vn = B.isNullOrUndef,
					yn = pn.extend({
						determineDataLimits: function() {
							var t, e = this,
								n = e._getLabels(),
								i = e.options.ticks,
								r = i.min,
								a = i.max,
								o = 0,
								s = n.length - 1;
							void 0 !== r && (t = n.indexOf(r)) >= 0 && (o = t), void 0 !== a && (t = n.indexOf(a)) >= 0 && (s = t), e.minIndex = o, e.maxIndex = s, e.min = n[o], e.max = n[s]
						},
						buildTicks: function() {
							var t = this._getLabels(),
								e = this.minIndex,
								n = this.maxIndex;
							this.ticks = 0 === e && n === t.length - 1 ? t : t.slice(e, n + 1)
						},
						getLabelForIndex: function(t, e) {
							var n = this.chart;
							return n.getDatasetMeta(e).controller._getValueScaleId() === this.id ? this.getRightValue(n.data.datasets[e].data[t]) : this._getLabels()[t]
						},
						_configure: function() {
							var t = this,
								e = t.options.offset,
								n = t.ticks;
							pn.prototype._configure.call(t), t.isHorizontal() || (t._reversePixels = !t._reversePixels), n && (t._startValue = t.minIndex - (e ? .5 : 0), t._valueRange = Math.max(n.length - (e ? 0 : 1), 1))
						},
						getPixelForValue: function(t, e, n) {
							var i, r, a, o = this;
							return vn(e) || vn(n) || (t = o.chart.data.datasets[n].data[e]), vn(t) || (i = o.isHorizontal() ? t.x : t.y), (void 0 !== i || void 0 !== t && isNaN(e)) && (r = o._getLabels(), t = B.valueOrDefault(i, t), e = -1 !== (a = r.indexOf(t)) ? a : e, isNaN(e) && (e = t)), o.getPixelForDecimal((e - o._startValue) / o._valueRange)
						},
						getPixelForTick: function(t) {
							var e = this.ticks;
							return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t], t + this.minIndex)
						},
						getValueForPixel: function(t) {
							var e = Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
							return Math.min(Math.max(e, 0), this.ticks.length - 1)
						},
						getBasePixel: function() {
							return this.bottom
						}
					}),
					bn = {
						position: "bottom"
					};
				yn._defaults = bn;
				var xn = B.noop,
					_n = B.isNullOrUndef,
					wn = pn.extend({
						getRightValue: function(t) {
							return "string" === typeof t ? +t : pn.prototype.getRightValue.call(this, t)
						},
						handleTickRangeOptions: function() {
							var t = this,
								e = t.options.ticks;
							if (e.beginAtZero) {
								var n = B.sign(t.min),
									i = B.sign(t.max);
								n < 0 && i < 0 ? t.max = 0 : n > 0 && i > 0 && (t.min = 0)
							}
							var r = void 0 !== e.min || void 0 !== e.suggestedMin,
								a = void 0 !== e.max || void 0 !== e.suggestedMax;
							void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), r !== a && t.min >= t.max && (r ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--)
						},
						getTickLimit: function() {
							var t, e = this.options.ticks,
								n = e.stepSize,
								i = e.maxTicksLimit;
							return n ? t = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1 : (t = this._computeTickLimit(), i = i || 11), i && (t = Math.min(i, t)), t
						},
						_computeTickLimit: function() {
							return Number.POSITIVE_INFINITY
						},
						handleDirectionalChanges: xn,
						buildTicks: function() {
							var t = this,
								e = t.options.ticks,
								n = t.getTickLimit(),
								i = {
									maxTicks: n = Math.max(2, n),
									min: e.min,
									max: e.max,
									precision: e.precision,
									stepSize: B.valueOrDefault(e.fixedStepSize, e.stepSize)
								},
								r = t.ticks = function(t, e) {
									var n, i, r, a, o = [],
										s = t.stepSize,
										l = s || 1,
										u = t.maxTicks - 1,
										d = t.min,
										h = t.max,
										c = t.precision,
										f = e.min,
										g = e.max,
										m = B.niceNum((g - f) / u / l) * l;
									if (m < 1e-14 && _n(d) && _n(h)) return [f, g];
									(a = Math.ceil(g / m) - Math.floor(f / m)) > u && (m = B.niceNum(a * m / u / l) * l), s || _n(c) ? n = Math.pow(10, B._decimalPlaces(m)) : (n = Math.pow(10, c), m = Math.ceil(m * n) / n), i = Math.floor(f / m) * m, r = Math.ceil(g / m) * m, s && (!_n(d) && B.almostWhole(d / m, m / 1e3) && (i = d), !_n(h) && B.almostWhole(h / m, m / 1e3) && (r = h)), a = (r - i) / m, a = B.almostEquals(a, Math.round(a), m / 1e3) ? Math.round(a) : Math.ceil(a), i = Math.round(i * n) / n, r = Math.round(r * n) / n, o.push(_n(d) ? i : d);
									for (var p = 1; p < a; ++p) o.push(Math.round((i + p * m) * n) / n);
									return o.push(_n(h) ? r : h), o
								}(i, t);
							t.handleDirectionalChanges(), t.max = B.max(r), t.min = B.min(r), e.reverse ? (r.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
						},
						convertTicksToLabels: function() {
							var t = this;
							t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), pn.prototype.convertTicksToLabels.call(t)
						},
						_configure: function() {
							var t, e = this,
								n = e.getTicks(),
								i = e.min,
								r = e.max;
							pn.prototype._configure.call(e), e.options.offset && n.length && (i -= t = (r - i) / Math.max(n.length - 1, 1) / 2, r += t), e._startValue = i, e._endValue = r, e._valueRange = r - i
						}
					}),
					kn = {
						position: "left",
						ticks: {
							callback: en.formatters.linear
						}
					};

				function Mn(t, e, n, i) {
					var r, a, o = t.options,
						s = function(t, e, n) {
							var i = [n.type, void 0 === e && void 0 === n.stack ? n.index : "", n.stack].join(".");
							return void 0 === t[i] && (t[i] = {
								pos: [],
								neg: []
							}), t[i]
						}(e, o.stacked, n),
						l = s.pos,
						u = s.neg,
						d = i.length;
					for (r = 0; r < d; ++r) a = t._parseValue(i[r]), isNaN(a.min) || isNaN(a.max) || n.data[r].hidden || (l[r] = l[r] || 0, u[r] = u[r] || 0, o.relativePoints ? l[r] = 100 : a.min < 0 || a.max < 0 ? u[r] += a.min : l[r] += a.max)
				}

				function Sn(t, e, n) {
					var i, r, a = n.length;
					for (i = 0; i < a; ++i) r = t._parseValue(n[i]), isNaN(r.min) || isNaN(r.max) || e.data[i].hidden || (t.min = Math.min(t.min, r.min), t.max = Math.max(t.max, r.max))
				}
				var Dn = wn.extend({
						determineDataLimits: function() {
							var t, e, n, i, r = this,
								a = r.options,
								o = r.chart.data.datasets,
								s = r._getMatchingVisibleMetas(),
								l = a.stacked,
								u = {},
								d = s.length;
							if (r.min = Number.POSITIVE_INFINITY, r.max = Number.NEGATIVE_INFINITY, void 0 === l)
								for (t = 0; !l && t < d; ++t) l = void 0 !== (e = s[t]).stack;
							for (t = 0; t < d; ++t) n = o[(e = s[t]).index].data, l ? Mn(r, u, e, n) : Sn(r, e, n);
							B.each(u, (function(t) {
								i = t.pos.concat(t.neg), r.min = Math.min(r.min, B.min(i)), r.max = Math.max(r.max, B.max(i))
							})), r.min = B.isFinite(r.min) && !isNaN(r.min) ? r.min : 0, r.max = B.isFinite(r.max) && !isNaN(r.max) ? r.max : 1, r.handleTickRangeOptions()
						},
						_computeTickLimit: function() {
							var t;
							return this.isHorizontal() ? Math.ceil(this.width / 40) : (t = B.options._parseFont(this.options.ticks), Math.ceil(this.height / t.lineHeight))
						},
						handleDirectionalChanges: function() {
							this.isHorizontal() || this.ticks.reverse()
						},
						getLabelForIndex: function(t, e) {
							return this._getScaleLabel(this.chart.data.datasets[e].data[t])
						},
						getPixelForValue: function(t) {
							return this.getPixelForDecimal((+this.getRightValue(t) - this._startValue) / this._valueRange)
						},
						getValueForPixel: function(t) {
							return this._startValue + this.getDecimalForPixel(t) * this._valueRange
						},
						getPixelForTick: function(t) {
							var e = this.ticksAsNumbers;
							return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t])
						}
					}),
					Cn = kn;
				Dn._defaults = Cn;
				var Pn = B.valueOrDefault,
					Tn = B.math.log10,
					On = {
						position: "left",
						ticks: {
							callback: en.formatters.logarithmic
						}
					};

				function An(t, e) {
					return B.isFinite(t) && t >= 0 ? t : e
				}
				var Fn = pn.extend({
						determineDataLimits: function() {
							var t, e, n, i, r, a, o = this,
								s = o.options,
								l = o.chart,
								u = l.data.datasets,
								d = o.isHorizontal();

							function h(t) {
								return d ? t.xAxisID === o.id : t.yAxisID === o.id
							}
							o.min = Number.POSITIVE_INFINITY, o.max = Number.NEGATIVE_INFINITY, o.minNotZero = Number.POSITIVE_INFINITY;
							var c = s.stacked;
							if (void 0 === c)
								for (t = 0; t < u.length; t++)
									if (e = l.getDatasetMeta(t), l.isDatasetVisible(t) && h(e) && void 0 !== e.stack) {
										c = !0;
										break
									} if (s.stacked || c) {
								var f = {};
								for (t = 0; t < u.length; t++) {
									var g = [(e = l.getDatasetMeta(t)).type, void 0 === s.stacked && void 0 === e.stack ? t : "", e.stack].join(".");
									if (l.isDatasetVisible(t) && h(e))
										for (void 0 === f[g] && (f[g] = []), r = 0, a = (i = u[t].data).length; r < a; r++) {
											var m = f[g];
											n = o._parseValue(i[r]), isNaN(n.min) || isNaN(n.max) || e.data[r].hidden || n.min < 0 || n.max < 0 || (m[r] = m[r] || 0, m[r] += n.max)
										}
								}
								B.each(f, (function(t) {
									if (t.length > 0) {
										var e = B.min(t),
											n = B.max(t);
										o.min = Math.min(o.min, e), o.max = Math.max(o.max, n)
									}
								}))
							} else
								for (t = 0; t < u.length; t++)
									if (e = l.getDatasetMeta(t), l.isDatasetVisible(t) && h(e))
										for (r = 0, a = (i = u[t].data).length; r < a; r++) n = o._parseValue(i[r]), isNaN(n.min) || isNaN(n.max) || e.data[r].hidden || n.min < 0 || n.max < 0 || (o.min = Math.min(n.min, o.min), o.max = Math.max(n.max, o.max), 0 !== n.min && (o.minNotZero = Math.min(n.min, o.minNotZero)));
							o.min = B.isFinite(o.min) ? o.min : null, o.max = B.isFinite(o.max) ? o.max : null, o.minNotZero = B.isFinite(o.minNotZero) ? o.minNotZero : null, this.handleTickRangeOptions()
						},
						handleTickRangeOptions: function() {
							var t = this,
								e = t.options.ticks;
							t.min = An(e.min, t.min), t.max = An(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(Tn(t.min)) - 1), t.max = Math.pow(10, Math.floor(Tn(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(Tn(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(Tn(t.min)) + 1) : 10), null === t.minNotZero && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(Tn(t.max))) : t.minNotZero = 1)
						},
						buildTicks: function() {
							var t = this,
								e = t.options.ticks,
								n = !t.isHorizontal(),
								i = {
									min: An(e.min),
									max: An(e.max)
								},
								r = t.ticks = function(t, e) {
									var n, i, r = [],
										a = Pn(t.min, Math.pow(10, Math.floor(Tn(e.min)))),
										o = Math.floor(Tn(e.max)),
										s = Math.ceil(e.max / Math.pow(10, o));
									0 === a ? (n = Math.floor(Tn(e.minNotZero)), i = Math.floor(e.minNotZero / Math.pow(10, n)), r.push(a), a = i * Math.pow(10, n)) : (n = Math.floor(Tn(a)), i = Math.floor(a / Math.pow(10, n)));
									var l = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
									do {
										r.push(a), 10 === ++i && (i = 1, l = ++n >= 0 ? 1 : l), a = Math.round(i * Math.pow(10, n) * l) / l
									} while (n < o || n === o && i < s);
									var u = Pn(t.max, a);
									return r.push(u), r
								}(i, t);
							t.max = B.max(r), t.min = B.min(r), e.reverse ? (n = !n, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), n && r.reverse()
						},
						convertTicksToLabels: function() {
							this.tickValues = this.ticks.slice(), pn.prototype.convertTicksToLabels.call(this)
						},
						getLabelForIndex: function(t, e) {
							return this._getScaleLabel(this.chart.data.datasets[e].data[t])
						},
						getPixelForTick: function(t) {
							var e = this.tickValues;
							return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t])
						},
						_getFirstTickValue: function(t) {
							var e = Math.floor(Tn(t));
							return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e)
						},
						_configure: function() {
							var t = this,
								e = t.min,
								n = 0;
							pn.prototype._configure.call(t), 0 === e && (e = t._getFirstTickValue(t.minNotZero), n = Pn(t.options.ticks.fontSize, Y.global.defaultFontSize) / t._length), t._startValue = Tn(e), t._valueOffset = n, t._valueRange = (Tn(t.max) - Tn(e)) / (1 - n)
						},
						getPixelForValue: function(t) {
							var e = this,
								n = 0;
							return (t = +e.getRightValue(t)) > e.min && t > 0 && (n = (Tn(t) - e._startValue) / e._valueRange + e._valueOffset), e.getPixelForDecimal(n)
						},
						getValueForPixel: function(t) {
							var e = this,
								n = e.getDecimalForPixel(t);
							return 0 === n && 0 === e.min ? 0 : Math.pow(10, e._startValue + (n - e._valueOffset) * e._valueRange)
						}
					}),
					In = On;
				Fn._defaults = In;
				var Nn = B.valueOrDefault,
					Rn = B.valueAtIndexOrDefault,
					Ln = B.options.resolve,
					Yn = {
						display: !0,
						animate: !0,
						position: "chartArea",
						angleLines: {
							display: !0,
							color: "rgba(0,0,0,0.1)",
							lineWidth: 1,
							borderDash: [],
							borderDashOffset: 0
						},
						gridLines: {
							circular: !1
						},
						ticks: {
							showLabelBackdrop: !0,
							backdropColor: "rgba(255,255,255,0.75)",
							backdropPaddingY: 2,
							backdropPaddingX: 2,
							callback: en.formatters.linear
						},
						pointLabels: {
							display: !0,
							fontSize: 10,
							callback: function(t) {
								return t
							}
						}
					};

				function Wn(t) {
					var e = t.ticks;
					return e.display && t.display ? Nn(e.fontSize, Y.global.defaultFontSize) + 2 * e.backdropPaddingY : 0
				}

				function En(t, e, n, i, r) {
					return t === i || t === r ? {
						start: e - n / 2,
						end: e + n / 2
					} : t < i || t > r ? {
						start: e - n,
						end: e
					} : {
						start: e,
						end: e + n
					}
				}

				function zn(t) {
					return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
				}

				function Vn(t, e, n, i) {
					var r, a, o = n.y + i / 2;
					if (B.isArray(e))
						for (r = 0, a = e.length; r < a; ++r) t.fillText(e[r], n.x, o), o += i;
					else t.fillText(e, n.x, o)
				}

				function Bn(t, e, n) {
					90 === t || 270 === t ? n.y -= e.h / 2 : (t > 270 || t < 90) && (n.y -= e.h)
				}

				function Hn(t) {
					return B.isNumber(t) ? t : 0
				}
				var jn = wn.extend({
						setDimensions: function() {
							var t = this;
							t.width = t.maxWidth, t.height = t.maxHeight, t.paddingTop = Wn(t.options) / 2, t.xCenter = Math.floor(t.width / 2), t.yCenter = Math.floor((t.height - t.paddingTop) / 2), t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2
						},
						determineDataLimits: function() {
							var t = this,
								e = t.chart,
								n = Number.POSITIVE_INFINITY,
								i = Number.NEGATIVE_INFINITY;
							B.each(e.data.datasets, (function(r, a) {
								if (e.isDatasetVisible(a)) {
									var o = e.getDatasetMeta(a);
									B.each(r.data, (function(e, r) {
										var a = +t.getRightValue(e);
										isNaN(a) || o.data[r].hidden || (n = Math.min(a, n), i = Math.max(a, i))
									}))
								}
							})), t.min = n === Number.POSITIVE_INFINITY ? 0 : n, t.max = i === Number.NEGATIVE_INFINITY ? 0 : i, t.handleTickRangeOptions()
						},
						_computeTickLimit: function() {
							return Math.ceil(this.drawingArea / Wn(this.options))
						},
						convertTicksToLabels: function() {
							var t = this;
							wn.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map((function() {
								var e = B.callback(t.options.pointLabels.callback, arguments, t);
								return e || 0 === e ? e : ""
							}))
						},
						getLabelForIndex: function(t, e) {
							return +this.getRightValue(this.chart.data.datasets[e].data[t])
						},
						fit: function() {
							var t = this.options;
							t.display && t.pointLabels.display ? function(t) {
								var e, n, i, r = B.options._parseFont(t.options.pointLabels),
									a = {
										l: 0,
										r: t.width,
										t: 0,
										b: t.height - t.paddingTop
									},
									o = {};
								t.ctx.font = r.string, t._pointLabelSizes = [];
								var s, l, u, d = t.chart.data.labels.length;
								for (e = 0; e < d; e++) {
									i = t.getPointPosition(e, t.drawingArea + 5), s = t.ctx, l = r.lineHeight, u = t.pointLabels[e], n = B.isArray(u) ? {
										w: B.longestText(s, s.font, u),
										h: u.length * l
									} : {
										w: s.measureText(u).width,
										h: l
									}, t._pointLabelSizes[e] = n;
									var h = t.getIndexAngle(e),
										c = B.toDegrees(h) % 360,
										f = En(c, i.x, n.w, 0, 180),
										g = En(c, i.y, n.h, 90, 270);
									f.start < a.l && (a.l = f.start, o.l = h), f.end > a.r && (a.r = f.end, o.r = h), g.start < a.t && (a.t = g.start, o.t = h), g.end > a.b && (a.b = g.end, o.b = h)
								}
								t.setReductions(t.drawingArea, a, o)
							}(this) : this.setCenterPoint(0, 0, 0, 0)
						},
						setReductions: function(t, e, n) {
							var i = this,
								r = e.l / Math.sin(n.l),
								a = Math.max(e.r - i.width, 0) / Math.sin(n.r),
								o = -e.t / Math.cos(n.t),
								s = -Math.max(e.b - (i.height - i.paddingTop), 0) / Math.cos(n.b);
							r = Hn(r), a = Hn(a), o = Hn(o), s = Hn(s), i.drawingArea = Math.min(Math.floor(t - (r + a) / 2), Math.floor(t - (o + s) / 2)), i.setCenterPoint(r, a, o, s)
						},
						setCenterPoint: function(t, e, n, i) {
							var r = this,
								a = r.width - e - r.drawingArea,
								o = t + r.drawingArea,
								s = n + r.drawingArea,
								l = r.height - r.paddingTop - i - r.drawingArea;
							r.xCenter = Math.floor((o + a) / 2 + r.left), r.yCenter = Math.floor((s + l) / 2 + r.top + r.paddingTop)
						},
						getIndexAngle: function(t) {
							var e = this.chart,
								n = (t * (360 / e.data.labels.length) + ((e.options || {}).startAngle || 0)) % 360;
							return (n < 0 ? n + 360 : n) * Math.PI * 2 / 360
						},
						getDistanceFromCenterForValue: function(t) {
							var e = this;
							if (B.isNullOrUndef(t)) return NaN;
							var n = e.drawingArea / (e.max - e.min);
							return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n
						},
						getPointPosition: function(t, e) {
							var n = this.getIndexAngle(t) - Math.PI / 2;
							return {
								x: Math.cos(n) * e + this.xCenter,
								y: Math.sin(n) * e + this.yCenter
							}
						},
						getPointPositionForValue: function(t, e) {
							return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
						},
						getBasePosition: function(t) {
							var e = this.min,
								n = this.max;
							return this.getPointPositionForValue(t || 0, this.beginAtZero ? 0 : e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0)
						},
						_drawGrid: function() {
							var t, e, n, i = this,
								r = i.ctx,
								a = i.options,
								o = a.gridLines,
								s = a.angleLines,
								l = Nn(s.lineWidth, o.lineWidth),
								u = Nn(s.color, o.color);
							if (a.pointLabels.display && function(t) {
									var e = t.ctx,
										n = t.options,
										i = n.pointLabels,
										r = Wn(n),
										a = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max),
										o = B.options._parseFont(i);
									e.save(), e.font = o.string, e.textBaseline = "middle";
									for (var s = t.chart.data.labels.length - 1; s >= 0; s--) {
										var l = 0 === s ? r / 2 : 0,
											u = t.getPointPosition(s, a + l + 5),
											d = Rn(i.fontColor, s, Y.global.defaultFontColor);
										e.fillStyle = d;
										var h = t.getIndexAngle(s),
											c = B.toDegrees(h);
										e.textAlign = zn(c), Bn(c, t._pointLabelSizes[s], u), Vn(e, t.pointLabels[s], u, o.lineHeight)
									}
									e.restore()
								}(i), o.display && B.each(i.ticks, (function(t, n) {
									0 !== n && (e = i.getDistanceFromCenterForValue(i.ticksAsNumbers[n]), function(t, e, n, i) {
										var r, a = t.ctx,
											o = e.circular,
											s = t.chart.data.labels.length,
											l = Rn(e.color, i - 1),
											u = Rn(e.lineWidth, i - 1);
										if ((o || s) && l && u) {
											if (a.save(), a.strokeStyle = l, a.lineWidth = u, a.setLineDash && (a.setLineDash(e.borderDash || []), a.lineDashOffset = e.borderDashOffset || 0), a.beginPath(), o) a.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI);
											else {
												r = t.getPointPosition(0, n), a.moveTo(r.x, r.y);
												for (var d = 1; d < s; d++) r = t.getPointPosition(d, n), a.lineTo(r.x, r.y)
											}
											a.closePath(), a.stroke(), a.restore()
										}
									}(i, o, e, n))
								})), s.display && l && u) {
								for (r.save(), r.lineWidth = l, r.strokeStyle = u, r.setLineDash && (r.setLineDash(Ln([s.borderDash, o.borderDash, []])), r.lineDashOffset = Ln([s.borderDashOffset, o.borderDashOffset, 0])), t = i.chart.data.labels.length - 1; t >= 0; t--) e = i.getDistanceFromCenterForValue(a.ticks.reverse ? i.min : i.max), n = i.getPointPosition(t, e), r.beginPath(), r.moveTo(i.xCenter, i.yCenter), r.lineTo(n.x, n.y), r.stroke();
								r.restore()
							}
						},
						_drawLabels: function() {
							var t = this,
								e = t.ctx,
								n = t.options.ticks;
							if (n.display) {
								var i, r, a = t.getIndexAngle(0),
									o = B.options._parseFont(n),
									s = Nn(n.fontColor, Y.global.defaultFontColor);
								e.save(), e.font = o.string, e.translate(t.xCenter, t.yCenter), e.rotate(a), e.textAlign = "center", e.textBaseline = "middle", B.each(t.ticks, (function(a, l) {
									(0 !== l || n.reverse) && (i = t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]), n.showLabelBackdrop && (r = e.measureText(a).width, e.fillStyle = n.backdropColor, e.fillRect(-r / 2 - n.backdropPaddingX, -i - o.size / 2 - n.backdropPaddingY, r + 2 * n.backdropPaddingX, o.size + 2 * n.backdropPaddingY)), e.fillStyle = s, e.fillText(a, 0, -i))
								})), e.restore()
							}
						},
						_drawTitle: B.noop
					}),
					Un = Yn;
				jn._defaults = Un;
				var Gn = B._deprecated,
					qn = B.options.resolve,
					Zn = B.valueOrDefault,
					$n = Number.MIN_SAFE_INTEGER || -9007199254740991,
					Xn = Number.MAX_SAFE_INTEGER || 9007199254740991,
					Kn = {
						millisecond: {
							common: !0,
							size: 1,
							steps: 1e3
						},
						second: {
							common: !0,
							size: 1e3,
							steps: 60
						},
						minute: {
							common: !0,
							size: 6e4,
							steps: 60
						},
						hour: {
							common: !0,
							size: 36e5,
							steps: 24
						},
						day: {
							common: !0,
							size: 864e5,
							steps: 30
						},
						week: {
							common: !1,
							size: 6048e5,
							steps: 4
						},
						month: {
							common: !0,
							size: 2628e6,
							steps: 12
						},
						quarter: {
							common: !1,
							size: 7884e6,
							steps: 4
						},
						year: {
							common: !0,
							size: 3154e7
						}
					},
					Jn = Object.keys(Kn);

				function Qn(t, e) {
					return t - e
				}

				function ti(t) {
					return B.valueOrDefault(t.time.min, t.ticks.min)
				}

				function ei(t) {
					return B.valueOrDefault(t.time.max, t.ticks.max)
				}

				function ni(t, e, n, i) {
					var r = function(t, e, n) {
							for (var i, r, a, o = 0, s = t.length - 1; o >= 0 && o <= s;) {
								if (r = t[(i = o + s >> 1) - 1] || null, a = t[i], !r) return {
									lo: null,
									hi: a
								};
								if (a[e] < n) o = i + 1;
								else {
									if (!(r[e] > n)) return {
										lo: r,
										hi: a
									};
									s = i - 1
								}
							}
							return {
								lo: a,
								hi: null
							}
						}(t, e, n),
						a = r.lo ? r.hi ? r.lo : t[t.length - 2] : t[0],
						o = r.lo ? r.hi ? r.hi : t[t.length - 1] : t[1],
						s = o[e] - a[e],
						l = s ? (n - a[e]) / s : 0,
						u = (o[i] - a[i]) * l;
					return a[i] + u
				}

				function ii(t, e) {
					var n = t._adapter,
						i = t.options.time,
						r = i.parser,
						a = r || i.format,
						o = e;
					return "function" === typeof r && (o = r(o)), B.isFinite(o) || (o = "string" === typeof a ? n.parse(o, a) : n.parse(o)), null !== o ? +o : (r || "function" !== typeof a || (o = a(e), B.isFinite(o) || (o = n.parse(o))), o)
				}

				function ri(t, e) {
					if (B.isNullOrUndef(e)) return null;
					var n = t.options.time,
						i = ii(t, t.getRightValue(e));
					return null === i || n.round && (i = +t._adapter.startOf(i, n.round)), i
				}

				function ai(t, e, n, i) {
					var r, a, o, s = Jn.length;
					for (r = Jn.indexOf(t); r < s - 1; ++r)
						if (o = (a = Kn[Jn[r]]).steps ? a.steps : Xn, a.common && Math.ceil((n - e) / (o * a.size)) <= i) return Jn[r];
					return Jn[s - 1]
				}

				function oi(t, e, n) {
					var i, r, a = [],
						o = {},
						s = e.length;
					for (i = 0; i < s; ++i) o[r = e[i]] = i, a.push({
						value: r,
						major: !1
					});
					return 0 !== s && n ? function(t, e, n, i) {
						var r, a, o = t._adapter,
							s = +o.startOf(e[0].value, i),
							l = e[e.length - 1].value;
						for (r = s; r <= l; r = +o.add(r, 1, i))(a = n[r]) >= 0 && (e[a].major = !0);
						return e
					}(t, a, o, n) : a
				}
				var si = pn.extend({
						initialize: function() {
							this.mergeTicksOptions(), pn.prototype.initialize.call(this)
						},
						update: function() {
							var t = this,
								e = t.options,
								n = e.time || (e.time = {}),
								i = t._adapter = new tn._date(e.adapters.date);
							return Gn("time scale", n.format, "time.format", "time.parser"), Gn("time scale", n.min, "time.min", "ticks.min"), Gn("time scale", n.max, "time.max", "ticks.max"), B.mergeIf(n.displayFormats, i.formats()), pn.prototype.update.apply(t, arguments)
						},
						getRightValue: function(t) {
							return t && void 0 !== t.t && (t = t.t), pn.prototype.getRightValue.call(this, t)
						},
						determineDataLimits: function() {
							var t, e, n, i, r, a, o, s = this,
								l = s.chart,
								u = s._adapter,
								d = s.options,
								h = d.time.unit || "day",
								c = Xn,
								f = $n,
								g = [],
								m = [],
								p = [],
								v = s._getLabels();
							for (t = 0, n = v.length; t < n; ++t) p.push(ri(s, v[t]));
							for (t = 0, n = (l.data.datasets || []).length; t < n; ++t)
								if (l.isDatasetVisible(t))
									if (r = l.data.datasets[t].data, B.isObject(r[0]))
										for (m[t] = [], e = 0, i = r.length; e < i; ++e) a = ri(s, r[e]), g.push(a), m[t][e] = a;
									else m[t] = p.slice(0), o || (g = g.concat(p), o = !0);
							else m[t] = [];
							p.length && (c = Math.min(c, p[0]), f = Math.max(f, p[p.length - 1])), g.length && (g = n > 1 ? function(t) {
								var e, n, i, r = {},
									a = [];
								for (e = 0, n = t.length; e < n; ++e) r[i = t[e]] || (r[i] = !0, a.push(i));
								return a
							}(g).sort(Qn) : g.sort(Qn), c = Math.min(c, g[0]), f = Math.max(f, g[g.length - 1])), c = ri(s, ti(d)) || c, f = ri(s, ei(d)) || f, c = c === Xn ? +u.startOf(Date.now(), h) : c, f = f === $n ? +u.endOf(Date.now(), h) + 1 : f, s.min = Math.min(c, f), s.max = Math.max(c + 1, f), s._table = [], s._timestamps = {
								data: g,
								datasets: m,
								labels: p
							}
						},
						buildTicks: function() {
							var t, e, n, i = this,
								r = i.min,
								a = i.max,
								o = i.options,
								s = o.ticks,
								l = o.time,
								u = i._timestamps,
								d = [],
								h = i.getLabelCapacity(r),
								c = s.source,
								f = o.distribution;
							for (u = "data" === c || "auto" === c && "series" === f ? u.data : "labels" === c ? u.labels : function(t, e, n, i) {
									var r, a = t._adapter,
										o = t.options,
										s = o.time,
										l = s.unit || ai(s.minUnit, e, n, i),
										u = qn([s.stepSize, s.unitStepSize, 1]),
										d = "week" === l && s.isoWeekday,
										h = e,
										c = [];
									if (d && (h = +a.startOf(h, "isoWeek", d)), h = +a.startOf(h, d ? "day" : l), a.diff(n, e, l) > 1e5 * u) throw e + " and " + n + " are too far apart with stepSize of " + u + " " + l;
									for (r = h; r < n; r = +a.add(r, u, l)) c.push(r);
									return r !== n && "ticks" !== o.bounds || c.push(r), c
								}(i, r, a, h), "ticks" === o.bounds && u.length && (r = u[0], a = u[u.length - 1]), r = ri(i, ti(o)) || r, a = ri(i, ei(o)) || a, t = 0, e = u.length; t < e; ++t)(n = u[t]) >= r && n <= a && d.push(n);
							return i.min = r, i.max = a, i._unit = l.unit || (s.autoSkip ? ai(l.minUnit, i.min, i.max, h) : function(t, e, n, i, r) {
								var a, o;
								for (a = Jn.length - 1; a >= Jn.indexOf(n); a--)
									if (o = Jn[a], Kn[o].common && t._adapter.diff(r, i, o) >= e - 1) return o;
								return Jn[n ? Jn.indexOf(n) : 0]
							}(i, d.length, l.minUnit, i.min, i.max)), i._majorUnit = s.major.enabled && "year" !== i._unit ? function(t) {
								for (var e = Jn.indexOf(t) + 1, n = Jn.length; e < n; ++e)
									if (Kn[Jn[e]].common) return Jn[e]
							}(i._unit) : void 0, i._table = function(t, e, n, i) {
								if ("linear" === i || !t.length) return [{
									time: e,
									pos: 0
								}, {
									time: n,
									pos: 1
								}];
								var r, a, o, s, l, u = [],
									d = [e];
								for (r = 0, a = t.length; r < a; ++r)(s = t[r]) > e && s < n && d.push(s);
								for (d.push(n), r = 0, a = d.length; r < a; ++r) l = d[r + 1], o = d[r - 1], s = d[r], void 0 !== o && void 0 !== l && Math.round((l + o) / 2) === s || u.push({
									time: s,
									pos: r / (a - 1)
								});
								return u
							}(i._timestamps.data, r, a, f), i._offsets = function(t, e, n, i, r) {
								var a, o, s = 0,
									l = 0;
								return r.offset && e.length && (a = ni(t, "time", e[0], "pos"), s = 1 === e.length ? 1 - a : (ni(t, "time", e[1], "pos") - a) / 2, o = ni(t, "time", e[e.length - 1], "pos"), l = 1 === e.length ? o : (o - ni(t, "time", e[e.length - 2], "pos")) / 2), {
									start: s,
									end: l,
									factor: 1 / (s + 1 + l)
								}
							}(i._table, d, 0, 0, o), s.reverse && d.reverse(), oi(i, d, i._majorUnit)
						},
						getLabelForIndex: function(t, e) {
							var n = this,
								i = n._adapter,
								r = n.chart.data,
								a = n.options.time,
								o = r.labels && t < r.labels.length ? r.labels[t] : "",
								s = r.datasets[e].data[t];
							return B.isObject(s) && (o = n.getRightValue(s)), a.tooltipFormat ? i.format(ii(n, o), a.tooltipFormat) : "string" === typeof o ? o : i.format(ii(n, o), a.displayFormats.datetime)
						},
						tickFormatFunction: function(t, e, n, i) {
							var r = this._adapter,
								a = this.options,
								o = a.time.displayFormats,
								s = o[this._unit],
								l = this._majorUnit,
								u = o[l],
								d = n[e],
								h = a.ticks,
								c = l && u && d && d.major,
								f = r.format(t, i || (c ? u : s)),
								g = c ? h.major : h.minor,
								m = qn([g.callback, g.userCallback, h.callback, h.userCallback]);
							return m ? m(f, e, n) : f
						},
						convertTicksToLabels: function(t) {
							var e, n, i = [];
							for (e = 0, n = t.length; e < n; ++e) i.push(this.tickFormatFunction(t[e].value, e, t));
							return i
						},
						getPixelForOffset: function(t) {
							var e = this._offsets,
								n = ni(this._table, "time", t, "pos");
							return this.getPixelForDecimal((e.start + n) * e.factor)
						},
						getPixelForValue: function(t, e, n) {
							var i = null;
							if (void 0 !== e && void 0 !== n && (i = this._timestamps.datasets[n][e]), null === i && (i = ri(this, t)), null !== i) return this.getPixelForOffset(i)
						},
						getPixelForTick: function(t) {
							var e = this.getTicks();
							return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null
						},
						getValueForPixel: function(t) {
							var e = this._offsets,
								n = this.getDecimalForPixel(t) / e.factor - e.end,
								i = ni(this._table, "pos", n, "time");
							return this._adapter._create(i)
						},
						_getLabelSize: function(t) {
							var e = this.options.ticks,
								n = this.ctx.measureText(t).width,
								i = B.toRadians(this.isHorizontal() ? e.maxRotation : e.minRotation),
								r = Math.cos(i),
								a = Math.sin(i),
								o = Zn(e.fontSize, Y.global.defaultFontSize);
							return {
								w: n * r + o * a,
								h: n * a + o * r
							}
						},
						getLabelWidth: function(t) {
							return this._getLabelSize(t).w
						},
						getLabelCapacity: function(t) {
							var e = this,
								n = e.options.time,
								i = n.displayFormats,
								r = i[n.unit] || i.millisecond,
								a = e.tickFormatFunction(t, 0, oi(e, [t], e._majorUnit), r),
								o = e._getLabelSize(a),
								s = Math.floor(e.isHorizontal() ? e.width / o.w : e.height / o.h);
							return e.options.offset && s--, s > 0 ? s : 1
						}
					}),
					li = {
						position: "bottom",
						distribution: "linear",
						bounds: "data",
						adapters: {},
						time: {
							parser: !1,
							unit: !1,
							round: !1,
							displayFormat: !1,
							isoWeekday: !1,
							minUnit: "millisecond",
							displayFormats: {}
						},
						ticks: {
							autoSkip: !1,
							source: "auto",
							major: {
								enabled: !1
							}
						}
					};
				si._defaults = li;
				var ui = {
						category: yn,
						linear: Dn,
						logarithmic: Fn,
						radialLinear: jn,
						time: si
					},
					di = {
						datetime: "MMM D, YYYY, h:mm:ss a",
						millisecond: "h:mm:ss.SSS a",
						second: "h:mm:ss a",
						minute: "h:mm a",
						hour: "hA",
						day: "MMM D",
						week: "ll",
						month: "MMM YYYY",
						quarter: "[Q]Q - YYYY",
						year: "YYYY"
					};
				tn._date.override("function" === typeof t ? {
					_id: "moment",
					formats: function() {
						return di
					},
					parse: function(e, n) {
						return "string" === typeof e && "string" === typeof n ? e = t(e, n) : e instanceof t || (e = t(e)), e.isValid() ? e.valueOf() : null
					},
					format: function(e, n) {
						return t(e).format(n)
					},
					add: function(e, n, i) {
						return t(e).add(n, i).valueOf()
					},
					diff: function(e, n, i) {
						return t(e).diff(t(n), i)
					},
					startOf: function(e, n, i) {
						return e = t(e), "isoWeek" === n ? e.isoWeekday(i).valueOf() : e.startOf(n).valueOf()
					},
					endOf: function(e, n) {
						return t(e).endOf(n).valueOf()
					},
					_create: function(e) {
						return t(e)
					}
				} : {}), Y._set("global", {
					plugins: {
						filler: {
							propagate: !0
						}
					}
				});
				var hi = {
					dataset: function(t) {
						var e = t.fill,
							n = t.chart,
							i = n.getDatasetMeta(e),
							r = i && n.isDatasetVisible(e) && i.dataset._children || [],
							a = r.length || 0;
						return a ? function(t, e) {
							return e < a && r[e]._view || null
						} : null
					},
					boundary: function(t) {
						var e = t.boundary,
							n = e ? e.x : null,
							i = e ? e.y : null;
						return B.isArray(e) ? function(t, n) {
							return e[n]
						} : function(t) {
							return {
								x: null === n ? t.x : n,
								y: null === i ? t.y : i
							}
						}
					}
				};

				function ci(t, e, n) {
					var i, r = t._model || {},
						a = r.fill;
					if (void 0 === a && (a = !!r.backgroundColor), !1 === a || null === a) return !1;
					if (!0 === a) return "origin";
					if (i = parseFloat(a, 10), isFinite(i) && Math.floor(i) === i) return "-" !== a[0] && "+" !== a[0] || (i = e + i), !(i === e || i < 0 || i >= n) && i;
					switch (a) {
						case "bottom":
							return "start";
						case "top":
							return "end";
						case "zero":
							return "origin";
						case "origin":
						case "start":
						case "end":
							return a;
						default:
							return !1
					}
				}

				function fi(t) {
					return (t.el._scale || {}).getPointPositionForValue ? function(t) {
						var e, n, i, r, a, o = t.el._scale,
							s = o.options,
							l = o.chart.data.labels.length,
							u = t.fill,
							d = [];
						if (!l) return null;
						for (e = s.ticks.reverse ? o.max : o.min, n = s.ticks.reverse ? o.min : o.max, i = o.getPointPositionForValue(0, e), r = 0; r < l; ++r) a = "start" === u || "end" === u ? o.getPointPositionForValue(r, "start" === u ? e : n) : o.getBasePosition(r), s.gridLines.circular && (a.cx = i.x, a.cy = i.y, a.angle = o.getIndexAngle(r) - Math.PI / 2), d.push(a);
						return d
					}(t) : function(t) {
						var e, n = t.el._model || {},
							i = t.el._scale || {},
							r = t.fill,
							a = null;
						if (isFinite(r)) return null;
						if ("start" === r ? a = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom : "end" === r ? a = void 0 === n.scaleTop ? i.top : n.scaleTop : void 0 !== n.scaleZero ? a = n.scaleZero : i.getBasePixel && (a = i.getBasePixel()), void 0 !== a && null !== a) {
							if (void 0 !== a.x && void 0 !== a.y) return a;
							if (B.isFinite(a)) return {
								x: (e = i.isHorizontal()) ? a : null,
								y: e ? null : a
							}
						}
						return null
					}(t)
				}

				function gi(t, e, n) {
					var i, r = t[e].fill,
						a = [e];
					if (!n) return r;
					for (; !1 !== r && -1 === a.indexOf(r);) {
						if (!isFinite(r)) return r;
						if (!(i = t[r])) return !1;
						if (i.visible) return r;
						a.push(r), r = i.fill
					}
					return !1
				}

				function mi(t) {
					var e = t.fill,
						n = "dataset";
					return !1 === e ? null : (isFinite(e) || (n = "boundary"), hi[n](t))
				}

				function pi(t) {
					return t && !t.skip
				}

				function vi(t, e, n, i, r) {
					var a, o, s, l;
					if (i && r) {
						for (t.moveTo(e[0].x, e[0].y), a = 1; a < i; ++a) B.canvas.lineTo(t, e[a - 1], e[a]);
						if (void 0 === n[0].angle)
							for (t.lineTo(n[r - 1].x, n[r - 1].y), a = r - 1; a > 0; --a) B.canvas.lineTo(t, n[a], n[a - 1], !0);
						else
							for (o = n[0].cx, s = n[0].cy, l = Math.sqrt(Math.pow(n[0].x - o, 2) + Math.pow(n[0].y - s, 2)), a = r - 1; a > 0; --a) t.arc(o, s, l, n[a].angle, n[a - 1].angle, !0)
					}
				}

				function yi(t, e, n, i, r, a) {
					var o, s, l, u, d, h, c, f, g = e.length,
						m = i.spanGaps,
						p = [],
						v = [],
						y = 0,
						b = 0;
					for (t.beginPath(), o = 0, s = g; o < s; ++o) d = n(u = e[l = o % g]._view, l, i), h = pi(u), c = pi(d), a && void 0 === f && h && (s = g + (f = o + 1)), h && c ? (y = p.push(u), b = v.push(d)) : y && b && (m ? (h && p.push(u), c && v.push(d)) : (vi(t, p, v, y, b), y = b = 0, p = [], v = []));
					vi(t, p, v, y, b), t.closePath(), t.fillStyle = r, t.fill()
				}
				var bi = {
						id: "filler",
						afterDatasetsUpdate: function(t, e) {
							var n, i, r, a, o = (t.data.datasets || []).length,
								s = e.propagate,
								l = [];
							for (i = 0; i < o; ++i) a = null, (r = (n = t.getDatasetMeta(i)).dataset) && r._model && r instanceof wt.Line && (a = {
								visible: t.isDatasetVisible(i),
								fill: ci(r, i, o),
								chart: t,
								el: r
							}), n.$filler = a, l.push(a);
							for (i = 0; i < o; ++i)(a = l[i]) && (a.fill = gi(l, i, s), a.boundary = fi(a), a.mapper = mi(a))
						},
						beforeDatasetsDraw: function(t) {
							var e, n, i, r, a, o, s, l = t._getSortedVisibleDatasetMetas(),
								u = t.ctx;
							for (n = l.length - 1; n >= 0; --n)(e = l[n].$filler) && e.visible && (r = (i = e.el)._view, a = i._children || [], o = e.mapper, s = r.backgroundColor || Y.global.defaultColor, o && s && a.length && (B.canvas.clipArea(u, t.chartArea), yi(u, a, o, r, s, i._loop), B.canvas.unclipArea(u)))
						}
					},
					xi = B.rtl.getRtlAdapter,
					_i = B.noop,
					wi = B.valueOrDefault;

				function ki(t, e) {
					return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth
				}
				Y._set("global", {
					legend: {
						display: !0,
						position: "top",
						align: "center",
						fullWidth: !0,
						reverse: !1,
						weight: 1e3,
						onClick: function(t, e) {
							var n = e.datasetIndex,
								i = this.chart,
								r = i.getDatasetMeta(n);
							r.hidden = null === r.hidden ? !i.data.datasets[n].hidden : null, i.update()
						},
						onHover: null,
						onLeave: null,
						labels: {
							boxWidth: 40,
							padding: 10,
							generateLabels: function(t) {
								var e = t.data.datasets,
									n = t.options.legend || {},
									i = n.labels && n.labels.usePointStyle;
								return t._getSortedDatasetMetas().map((function(n) {
									var r = n.controller.getStyle(i ? 0 : void 0);
									return {
										text: e[n.index].label,
										fillStyle: r.backgroundColor,
										hidden: !t.isDatasetVisible(n.index),
										lineCap: r.borderCapStyle,
										lineDash: r.borderDash,
										lineDashOffset: r.borderDashOffset,
										lineJoin: r.borderJoinStyle,
										lineWidth: r.borderWidth,
										strokeStyle: r.borderColor,
										pointStyle: r.pointStyle,
										rotation: r.rotation,
										datasetIndex: n.index
									}
								}), this)
							}
						}
					},
					legendCallback: function(t) {
						var e, n, i, r = document.createElement("ul"),
							a = t.data.datasets;
						for (r.setAttribute("class", t.id + "-legend"), e = 0, n = a.length; e < n; e++)(i = r.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = a[e].backgroundColor, a[e].label && i.appendChild(document.createTextNode(a[e].label));
						return r.outerHTML
					}
				});
				var Mi = $.extend({
					initialize: function(t) {
						B.extend(this, t), this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1
					},
					beforeUpdate: _i,
					update: function(t, e, n) {
						var i = this;
						return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
					},
					afterUpdate: _i,
					beforeSetDimensions: _i,
					setDimensions: function() {
						var t = this;
						t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
							width: 0,
							height: 0
						}
					},
					afterSetDimensions: _i,
					beforeBuildLabels: _i,
					buildLabels: function() {
						var t = this,
							e = t.options.labels || {},
							n = B.callback(e.generateLabels, [t.chart], t) || [];
						e.filter && (n = n.filter((function(n) {
							return e.filter(n, t.chart.data)
						}))), t.options.reverse && n.reverse(), t.legendItems = n
					},
					afterBuildLabels: _i,
					beforeFit: _i,
					fit: function() {
						var t = this,
							e = t.options,
							n = e.labels,
							i = e.display,
							r = t.ctx,
							a = B.options._parseFont(n),
							o = a.size,
							s = t.legendHitBoxes = [],
							l = t.minSize,
							u = t.isHorizontal();
						if (u ? (l.width = t.maxWidth, l.height = i ? 10 : 0) : (l.width = i ? 10 : 0, l.height = t.maxHeight), i) {
							if (r.font = a.string, u) {
								var d = t.lineWidths = [0],
									h = 0;
								r.textAlign = "left", r.textBaseline = "middle", B.each(t.legendItems, (function(t, e) {
									var i = ki(n, o) + o / 2 + r.measureText(t.text).width;
									(0 === e || d[d.length - 1] + i + 2 * n.padding > l.width) && (h += o + n.padding, d[d.length - (e > 0 ? 0 : 1)] = 0), s[e] = {
										left: 0,
										top: 0,
										width: i,
										height: o
									}, d[d.length - 1] += i + n.padding
								})), l.height += h
							} else {
								var c = n.padding,
									f = t.columnWidths = [],
									g = t.columnHeights = [],
									m = n.padding,
									p = 0,
									v = 0;
								B.each(t.legendItems, (function(t, e) {
									var i = ki(n, o) + o / 2 + r.measureText(t.text).width;
									e > 0 && v + o + 2 * c > l.height && (m += p + n.padding, f.push(p), g.push(v), p = 0, v = 0), p = Math.max(p, i), v += o + c, s[e] = {
										left: 0,
										top: 0,
										width: i,
										height: o
									}
								})), m += p, f.push(p), g.push(v), l.width += m
							}
							t.width = l.width, t.height = l.height
						} else t.width = l.width = t.height = l.height = 0
					},
					afterFit: _i,
					isHorizontal: function() {
						return "top" === this.options.position || "bottom" === this.options.position
					},
					draw: function() {
						var t = this,
							e = t.options,
							n = e.labels,
							i = Y.global,
							r = i.defaultColor,
							a = i.elements.line,
							o = t.height,
							s = t.columnHeights,
							l = t.width,
							u = t.lineWidths;
						if (e.display) {
							var d, h = xi(e.rtl, t.left, t.minSize.width),
								c = t.ctx,
								f = wi(n.fontColor, i.defaultFontColor),
								g = B.options._parseFont(n),
								m = g.size;
							c.textAlign = h.textAlign("left"), c.textBaseline = "middle", c.lineWidth = .5, c.strokeStyle = f, c.fillStyle = f, c.font = g.string;
							var p = ki(n, m),
								v = t.legendHitBoxes,
								y = function(t, i) {
									switch (e.align) {
										case "start":
											return n.padding;
										case "end":
											return t - i;
										default:
											return (t - i + n.padding) / 2
									}
								},
								b = t.isHorizontal();
							d = b ? {
								x: t.left + y(l, u[0]),
								y: t.top + n.padding,
								line: 0
							} : {
								x: t.left + n.padding,
								y: t.top + y(o, s[0]),
								line: 0
							}, B.rtl.overrideTextDirection(t.ctx, e.textDirection);
							var x = m + n.padding;
							B.each(t.legendItems, (function(e, i) {
								var f = c.measureText(e.text).width,
									g = p + m / 2 + f,
									_ = d.x,
									w = d.y;
								h.setWidth(t.minSize.width), b ? i > 0 && _ + g + n.padding > t.left + t.minSize.width && (w = d.y += x, d.line++, _ = d.x = t.left + y(l, u[d.line])) : i > 0 && w + x > t.top + t.minSize.height && (_ = d.x = _ + t.columnWidths[d.line] + n.padding, d.line++, w = d.y = t.top + y(o, s[d.line]));
								var k = h.x(_);
								! function(t, e, i) {
									if (!(isNaN(p) || p <= 0)) {
										c.save();
										var o = wi(i.lineWidth, a.borderWidth);
										if (c.fillStyle = wi(i.fillStyle, r), c.lineCap = wi(i.lineCap, a.borderCapStyle), c.lineDashOffset = wi(i.lineDashOffset, a.borderDashOffset), c.lineJoin = wi(i.lineJoin, a.borderJoinStyle), c.lineWidth = o, c.strokeStyle = wi(i.strokeStyle, r), c.setLineDash && c.setLineDash(wi(i.lineDash, a.borderDash)), n && n.usePointStyle) {
											var s = p * Math.SQRT2 / 2,
												l = h.xPlus(t, p / 2),
												u = e + m / 2;
											B.canvas.drawPoint(c, i.pointStyle, s, l, u, i.rotation)
										} else c.fillRect(h.leftForLtr(t, p), e, p, m), 0 !== o && c.strokeRect(h.leftForLtr(t, p), e, p, m);
										c.restore()
									}
								}(k, w, e), v[i].left = h.leftForLtr(k, v[i].width), v[i].top = w,
									function(t, e, n, i) {
										var r = m / 2,
											a = h.xPlus(t, p + r),
											o = e + r;
										c.fillText(n.text, a, o), n.hidden && (c.beginPath(), c.lineWidth = 2, c.moveTo(a, o), c.lineTo(h.xPlus(a, i), o), c.stroke())
									}(k, w, e, f), b ? d.x += g + n.padding : d.y += x
							})), B.rtl.restoreTextDirection(t.ctx, e.textDirection)
						}
					},
					_getLegendItemAt: function(t, e) {
						var n, i, r, a = this;
						if (t >= a.left && t <= a.right && e >= a.top && e <= a.bottom)
							for (r = a.legendHitBoxes, n = 0; n < r.length; ++n)
								if (t >= (i = r[n]).left && t <= i.left + i.width && e >= i.top && e <= i.top + i.height) return a.legendItems[n];
						return null
					},
					handleEvent: function(t) {
						var e, n = this,
							i = n.options,
							r = "mouseup" === t.type ? "click" : t.type;
						if ("mousemove" === r) {
							if (!i.onHover && !i.onLeave) return
						} else {
							if ("click" !== r) return;
							if (!i.onClick) return
						}
						e = n._getLegendItemAt(t.x, t.y), "click" === r ? e && i.onClick && i.onClick.call(n, t.native, e) : (i.onLeave && e !== n._hoveredItem && (n._hoveredItem && i.onLeave.call(n, t.native, n._hoveredItem), n._hoveredItem = e), i.onHover && e && i.onHover.call(n, t.native, e))
					}
				});

				function Si(t, e) {
					var n = new Mi({
						ctx: t.ctx,
						options: e,
						chart: t
					});
					me.configure(t, n, e), me.addBox(t, n), t.legend = n
				}
				var Di = {
						id: "legend",
						_element: Mi,
						beforeInit: function(t) {
							var e = t.options.legend;
							e && Si(t, e)
						},
						beforeUpdate: function(t) {
							var e = t.options.legend,
								n = t.legend;
							e ? (B.mergeIf(e, Y.global.legend), n ? (me.configure(t, n, e), n.options = e) : Si(t, e)) : n && (me.removeBox(t, n), delete t.legend)
						},
						afterEvent: function(t, e) {
							var n = t.legend;
							n && n.handleEvent(e)
						}
					},
					Ci = B.noop;
				Y._set("global", {
					title: {
						display: !1,
						fontStyle: "bold",
						fullWidth: !0,
						padding: 10,
						position: "top",
						text: "",
						weight: 2e3
					}
				});
				var Pi = $.extend({
					initialize: function(t) {
						B.extend(this, t), this.legendHitBoxes = []
					},
					beforeUpdate: Ci,
					update: function(t, e, n) {
						var i = this;
						return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
					},
					afterUpdate: Ci,
					beforeSetDimensions: Ci,
					setDimensions: function() {
						var t = this;
						t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
							width: 0,
							height: 0
						}
					},
					afterSetDimensions: Ci,
					beforeBuildLabels: Ci,
					buildLabels: Ci,
					afterBuildLabels: Ci,
					beforeFit: Ci,
					fit: function() {
						var t, e = this,
							n = e.options,
							i = e.minSize = {},
							r = e.isHorizontal();
						n.display ? (t = (B.isArray(n.text) ? n.text.length : 1) * B.options._parseFont(n).lineHeight + 2 * n.padding, e.width = i.width = r ? e.maxWidth : t, e.height = i.height = r ? t : e.maxHeight) : e.width = i.width = e.height = i.height = 0
					},
					afterFit: Ci,
					isHorizontal: function() {
						var t = this.options.position;
						return "top" === t || "bottom" === t
					},
					draw: function() {
						var t = this,
							e = t.ctx,
							n = t.options;
						if (n.display) {
							var i, r, a, o = B.options._parseFont(n),
								s = o.lineHeight,
								l = s / 2 + n.padding,
								u = 0,
								d = t.top,
								h = t.left,
								c = t.bottom,
								f = t.right;
							e.fillStyle = B.valueOrDefault(n.fontColor, Y.global.defaultFontColor), e.font = o.string, t.isHorizontal() ? (r = h + (f - h) / 2, a = d + l, i = f - h) : (r = "left" === n.position ? h + l : f - l, a = d + (c - d) / 2, i = c - d, u = Math.PI * ("left" === n.position ? -.5 : .5)), e.save(), e.translate(r, a), e.rotate(u), e.textAlign = "center", e.textBaseline = "middle";
							var g = n.text;
							if (B.isArray(g))
								for (var m = 0, p = 0; p < g.length; ++p) e.fillText(g[p], 0, m, i), m += s;
							else e.fillText(g, 0, 0, i);
							e.restore()
						}
					}
				});

				function Ti(t, e) {
					var n = new Pi({
						ctx: t.ctx,
						options: e,
						chart: t
					});
					me.configure(t, n, e), me.addBox(t, n), t.titleBlock = n
				}
				var Oi = {},
					Ai = bi,
					Fi = Di,
					Ii = {
						id: "title",
						_element: Pi,
						beforeInit: function(t) {
							var e = t.options.title;
							e && Ti(t, e)
						},
						beforeUpdate: function(t) {
							var e = t.options.title,
								n = t.titleBlock;
							e ? (B.mergeIf(e, Y.global.title), n ? (me.configure(t, n, e), n.options = e) : Ti(t, e)) : n && (me.removeBox(t, n), delete t.titleBlock)
						}
					};
				for (var Ni in Oi.filler = Ai, Oi.legend = Fi, Oi.title = Ii, Ke.helpers = B,
						function() {
							function t(t, e, n) {
								var i;
								return "string" === typeof t ? (i = parseInt(t, 10), -1 !== t.indexOf("%") && (i = i / 100 * e.parentNode[n])) : i = t, i
							}

							function e(t) {
								return void 0 !== t && null !== t && "none" !== t
							}

							function n(n, i, r) {
								var a = document.defaultView,
									o = B._getParentNode(n),
									s = a.getComputedStyle(n)[i],
									l = a.getComputedStyle(o)[i],
									u = e(s),
									d = e(l),
									h = Number.POSITIVE_INFINITY;
								return u || d ? Math.min(u ? t(s, n, r) : h, d ? t(l, o, r) : h) : "none"
							}
							B.where = function(t, e) {
								if (B.isArray(t) && Array.prototype.filter) return t.filter(e);
								var n = [];
								return B.each(t, (function(t) {
									e(t) && n.push(t)
								})), n
							}, B.findIndex = Array.prototype.findIndex ? function(t, e, n) {
								return t.findIndex(e, n)
							} : function(t, e, n) {
								n = void 0 === n ? t : n;
								for (var i = 0, r = t.length; i < r; ++i)
									if (e.call(n, t[i], i, t)) return i;
								return -1
							}, B.findNextWhere = function(t, e, n) {
								B.isNullOrUndef(n) && (n = -1);
								for (var i = n + 1; i < t.length; i++) {
									var r = t[i];
									if (e(r)) return r
								}
							}, B.findPreviousWhere = function(t, e, n) {
								B.isNullOrUndef(n) && (n = t.length);
								for (var i = n - 1; i >= 0; i--) {
									var r = t[i];
									if (e(r)) return r
								}
							}, B.isNumber = function(t) {
								return !isNaN(parseFloat(t)) && isFinite(t)
							}, B.almostEquals = function(t, e, n) {
								return Math.abs(t - e) < n
							}, B.almostWhole = function(t, e) {
								var n = Math.round(t);
								return n - e <= t && n + e >= t
							}, B.max = function(t) {
								return t.reduce((function(t, e) {
									return isNaN(e) ? t : Math.max(t, e)
								}), Number.NEGATIVE_INFINITY)
							}, B.min = function(t) {
								return t.reduce((function(t, e) {
									return isNaN(e) ? t : Math.min(t, e)
								}), Number.POSITIVE_INFINITY)
							}, B.sign = Math.sign ? function(t) {
								return Math.sign(t)
							} : function(t) {
								return 0 === (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1
							}, B.toRadians = function(t) {
								return t * (Math.PI / 180)
							}, B.toDegrees = function(t) {
								return t * (180 / Math.PI)
							}, B._decimalPlaces = function(t) {
								if (B.isFinite(t)) {
									for (var e = 1, n = 0; Math.round(t * e) / e !== t;) e *= 10, n++;
									return n
								}
							}, B.getAngleFromPoint = function(t, e) {
								var n = e.x - t.x,
									i = e.y - t.y,
									r = Math.sqrt(n * n + i * i),
									a = Math.atan2(i, n);
								return a < -.5 * Math.PI && (a += 2 * Math.PI), {
									angle: a,
									distance: r
								}
							}, B.distanceBetweenPoints = function(t, e) {
								return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
							}, B.aliasPixel = function(t) {
								return t % 2 === 0 ? 0 : .5
							}, B._alignPixel = function(t, e, n) {
								var i = t.currentDevicePixelRatio,
									r = n / 2;
								return Math.round((e - r) * i) / i + r
							}, B.splineCurve = function(t, e, n, i) {
								var r = t.skip ? e : t,
									a = e,
									o = n.skip ? e : n,
									s = Math.sqrt(Math.pow(a.x - r.x, 2) + Math.pow(a.y - r.y, 2)),
									l = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)),
									u = s / (s + l),
									d = l / (s + l),
									h = i * (u = isNaN(u) ? 0 : u),
									c = i * (d = isNaN(d) ? 0 : d);
								return {
									previous: {
										x: a.x - h * (o.x - r.x),
										y: a.y - h * (o.y - r.y)
									},
									next: {
										x: a.x + c * (o.x - r.x),
										y: a.y + c * (o.y - r.y)
									}
								}
							}, B.EPSILON = Number.EPSILON || 1e-14, B.splineCurveMonotone = function(t) {
								var e, n, i, r, a, o, s, l, u, d = (t || []).map((function(t) {
										return {
											model: t._model,
											deltaK: 0,
											mK: 0
										}
									})),
									h = d.length;
								for (e = 0; e < h; ++e)
									if (!(i = d[e]).model.skip) {
										if (n = e > 0 ? d[e - 1] : null, (r = e < h - 1 ? d[e + 1] : null) && !r.model.skip) {
											var c = r.model.x - i.model.x;
											i.deltaK = 0 !== c ? (r.model.y - i.model.y) / c : 0
										}!n || n.model.skip ? i.mK = i.deltaK : !r || r.model.skip ? i.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(i.deltaK) ? i.mK = 0 : i.mK = (n.deltaK + i.deltaK) / 2
									} for (e = 0; e < h - 1; ++e) i = d[e], r = d[e + 1], i.model.skip || r.model.skip || (B.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = r.mK = 0 : (a = i.mK / i.deltaK, o = r.mK / i.deltaK, (l = Math.pow(a, 2) + Math.pow(o, 2)) <= 9 || (s = 3 / Math.sqrt(l), i.mK = a * s * i.deltaK, r.mK = o * s * i.deltaK)));
								for (e = 0; e < h; ++e)(i = d[e]).model.skip || (n = e > 0 ? d[e - 1] : null, r = e < h - 1 ? d[e + 1] : null, n && !n.model.skip && (u = (i.model.x - n.model.x) / 3, i.model.controlPointPreviousX = i.model.x - u, i.model.controlPointPreviousY = i.model.y - u * i.mK), r && !r.model.skip && (u = (r.model.x - i.model.x) / 3, i.model.controlPointNextX = i.model.x + u, i.model.controlPointNextY = i.model.y + u * i.mK))
							}, B.nextItem = function(t, e, n) {
								return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
							}, B.previousItem = function(t, e, n) {
								return n ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
							}, B.niceNum = function(t, e) {
								var n = Math.floor(B.log10(t)),
									i = t / Math.pow(10, n);
								return (e ? i < 1.5 ? 1 : i < 3 ? 2 : i < 7 ? 5 : 10 : i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * Math.pow(10, n)
							}, B.requestAnimFrame = "undefined" === typeof window ? function(t) {
								t()
							} : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
								return window.setTimeout(t, 1e3 / 60)
							}, B.getRelativePosition = function(t, e) {
								var n, i, r = t.originalEvent || t,
									a = t.target || t.srcElement,
									o = a.getBoundingClientRect(),
									s = r.touches;
								s && s.length > 0 ? (n = s[0].clientX, i = s[0].clientY) : (n = r.clientX, i = r.clientY);
								var l = parseFloat(B.getStyle(a, "padding-left")),
									u = parseFloat(B.getStyle(a, "padding-top")),
									d = parseFloat(B.getStyle(a, "padding-right")),
									h = parseFloat(B.getStyle(a, "padding-bottom")),
									c = o.right - o.left - l - d,
									f = o.bottom - o.top - u - h;
								return {
									x: n = Math.round((n - o.left - l) / c * a.width / e.currentDevicePixelRatio),
									y: i = Math.round((i - o.top - u) / f * a.height / e.currentDevicePixelRatio)
								}
							}, B.getConstraintWidth = function(t) {
								return n(t, "max-width", "clientWidth")
							}, B.getConstraintHeight = function(t) {
								return n(t, "max-height", "clientHeight")
							}, B._calculatePadding = function(t, e, n) {
								return (e = B.getStyle(t, e)).indexOf("%") > -1 ? n * parseInt(e, 10) / 100 : parseInt(e, 10)
							}, B._getParentNode = function(t) {
								var e = t.parentNode;
								return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e
							}, B.getMaximumWidth = function(t) {
								var e = B._getParentNode(t);
								if (!e) return t.clientWidth;
								var n = e.clientWidth,
									i = n - B._calculatePadding(e, "padding-left", n) - B._calculatePadding(e, "padding-right", n),
									r = B.getConstraintWidth(t);
								return isNaN(r) ? i : Math.min(i, r)
							}, B.getMaximumHeight = function(t) {
								var e = B._getParentNode(t);
								if (!e) return t.clientHeight;
								var n = e.clientHeight,
									i = n - B._calculatePadding(e, "padding-top", n) - B._calculatePadding(e, "padding-bottom", n),
									r = B.getConstraintHeight(t);
								return isNaN(r) ? i : Math.min(i, r)
							}, B.getStyle = function(t, e) {
								return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
							}, B.retinaScale = function(t, e) {
								var n = t.currentDevicePixelRatio = e || "undefined" !== typeof window && window.devicePixelRatio || 1;
								if (1 !== n) {
									var i = t.canvas,
										r = t.height,
										a = t.width;
									i.height = r * n, i.width = a * n, t.ctx.scale(n, n), i.style.height || i.style.width || (i.style.height = r + "px", i.style.width = a + "px")
								}
							}, B.fontString = function(t, e, n) {
								return e + " " + t + "px " + n
							}, B.longestText = function(t, e, n, i) {
								var r = (i = i || {}).data = i.data || {},
									a = i.garbageCollect = i.garbageCollect || [];
								i.font !== e && (r = i.data = {}, a = i.garbageCollect = [], i.font = e), t.font = e;
								var o, s, l, u, d, h = 0,
									c = n.length;
								for (o = 0; o < c; o++)
									if (void 0 !== (u = n[o]) && null !== u && !0 !== B.isArray(u)) h = B.measureText(t, r, a, h, u);
									else if (B.isArray(u))
									for (s = 0, l = u.length; s < l; s++) void 0 === (d = u[s]) || null === d || B.isArray(d) || (h = B.measureText(t, r, a, h, d));
								var f = a.length / 2;
								if (f > n.length) {
									for (o = 0; o < f; o++) delete r[a[o]];
									a.splice(0, f)
								}
								return h
							}, B.measureText = function(t, e, n, i, r) {
								var a = e[r];
								return a || (a = e[r] = t.measureText(r).width, n.push(r)), a > i && (i = a), i
							}, B.numberOfLabelLines = function(t) {
								var e = 1;
								return B.each(t, (function(t) {
									B.isArray(t) && t.length > e && (e = t.length)
								})), e
							}, B.color = _ ? function(t) {
								return t instanceof CanvasGradient && (t = Y.global.defaultColor), _(t)
							} : function(t) {
								return console.error("Color.js not found!"), t
							}, B.getHoverColor = function(t) {
								return t instanceof CanvasPattern || t instanceof CanvasGradient ? t : B.color(t).saturate(.5).darken(.1).rgbString()
							}
						}(), Ke._adapters = tn, Ke.Animation = K, Ke.animationService = J, Ke.controllers = Jt, Ke.DatasetController = it, Ke.defaults = Y, Ke.Element = $, Ke.elements = wt, Ke.Interaction = ae, Ke.layouts = me, Ke.platform = Te, Ke.plugins = Oe, Ke.Scale = pn, Ke.scaleService = Ae, Ke.Ticks = en, Ke.Tooltip = Be, Ke.helpers.each(ui, (function(t, e) {
							Ke.scaleService.registerScaleType(e, t, t._defaults)
						})), Oi) Oi.hasOwnProperty(Ni) && Ke.plugins.register(Oi[Ni]);
				Ke.platform.initialize();
				var Ri = Ke;
				return "undefined" !== typeof window && (window.Chart = Ke), Ke.Chart = Ke, Ke.Legend = Oi.legend._element, Ke.Title = Oi.title._element, Ke.pluginService = Ke.plugins, Ke.PluginBase = Ke.Element.extend({}), Ke.canvasHelpers = Ke.helpers.canvas, Ke.layoutService = Ke.layouts, Ke.LinearScaleBase = wn, Ke.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], (function(t) {
					Ke[t] = function(e, n) {
						return new Ke(e, Ke.helpers.merge(n || {}, {
							type: t.charAt(0).toLowerCase() + t.slice(1)
						}))
					}
				})), Ri
			}(function() {
				try {
					return n(589)
				} catch (t) {}
			}())
		},
		9: function(t, e, n) {
			"use strict";
			n.r(e), n.d(e, "FadeInSection", (function() {
				return s
			}));
			var i = n(0),
				r = n.n(i);

			function a(t, e) {
				return function(t) {
					if (Array.isArray(t)) return t
				}(t) || function(t, e) {
					var n = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
					if (null == n) return;
					var i, r, a = [],
						o = !0,
						s = !1;
					try {
						for (n = n.call(t); !(o = (i = n.next()).done) && (a.push(i.value), !e || a.length !== e); o = !0);
					} catch (l) {
						s = !0, r = l
					} finally {
						try {
							o || null == n.return || n.return()
						} finally {
							if (s) throw r
						}
					}
					return a
				}(t, e) || function(t, e) {
					if (!t) return;
					if ("string" === typeof t) return o(t, e);
					var n = Object.prototype.toString.call(t).slice(8, -1);
					"Object" === n && t.constructor && (n = t.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(t);
					if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(t, e)
				}(t, e) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function o(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
				return i
			}
			var s = function(t) {
				var e = t.children,
					n = Object(i.useRef)(),
					o = a(Object(i.useState)(!1), 2),
					s = o[0],
					l = o[1],
					u = {
						root: null,
						rootMargin: "0px",
						threshold: [0, 1]
					};
				return Object(i.useEffect)((function() {
					var t = new IntersectionObserver((function(e) {
						e.forEach((function(e) {
							e.isIntersecting && (l(!0), t.disconnect())
						}))
					}), u);
					return t.observe(n.current),
						function() {
							return t.disconnect()
						}
				}), []), r.a.createElement("div", {
					ref: n,
					className: s ? "fade-in" : "before-fade-in"
				}, e)
			}
		}
	}
]);