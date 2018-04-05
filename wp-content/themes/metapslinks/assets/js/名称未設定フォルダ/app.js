"use strict";

function _classCallCheck(e, t) {
	if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
	if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
	if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
	if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
	return typeof e
} : function(e) {
	return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
! function(e, t) {
	"object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && "object" === _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function(e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : void 0, function(e, t) {
	function n(e) {
		var t = !!e && "length" in e && e.length,
			n = oe.type(e);
		return "function" !== n && !oe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
	}

	function i(e, t, n) {
		if (oe.isFunction(t)) return oe.grep(e, function(e, i) {
			return !!t.call(e, i, e) !== n
		});
		if (t.nodeType) return oe.grep(e, function(e) {
			return e === t !== n
		});
		if ("string" == typeof t) {
			if (ge.test(t)) return oe.filter(t, e, n);
			t = oe.filter(t, e)
		}
		return oe.grep(e, function(e) {
			return Z.call(t, e) > -1 !== n
		})
	}

	function r(e, t) {
		for (;
			(e = e[t]) && 1 !== e.nodeType;);
		return e
	}

	function o(e) {
		var t = {};
		return oe.each(e.match(xe) || [], function(e, n) {
			t[n] = !0
		}), t
	}

	function a() {
		G.removeEventListener("DOMContentLoaded", a), e.removeEventListener("load", a), oe.ready()
	}

	function s() {
		this.expando = oe.expando + s.uid++
	}

	function u(e, t, n) {
		var i;
		if (void 0 === n && 1 === e.nodeType)
			if (i = "data-" + t.replace(De, "-$&").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
				try {
					n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ae.test(n) ? oe.parseJSON(n) : n)
				} catch (r) {}
				Se.set(e, t, n)
			} else n = void 0;
		return n
	}

	function l(e, t, n, i) {
		var r, o = 1,
			a = 20,
			s = i ? function() {
				return i.cur()
			} : function() {
				return oe.css(e, t, "")
			},
			u = s(),
			l = n && n[3] || (oe.cssNumber[t] ? "" : "px"),
			c = (oe.cssNumber[t] || "px" !== l && +u) && Ne.exec(oe.css(e, t));
		if (c && c[3] !== l) {
			l = l || c[3], n = n || [], c = +u || 1;
			do o = o || ".5", c /= o, oe.style(e, t, c + l); while (o !== (o = s() / u) && 1 !== o && --a)
		}
		return n && (c = +c || +u || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = l, i.start = c, i.end = r)), r
	}

	function c(e, t) {
		var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
		return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], n) : n
	}

	function f(e, t) {
		for (var n = 0, i = e.length; n < i; n++) Ee.set(e[n], "globalEval", !t || Ee.get(t[n], "globalEval"))
	}

	function d(e, t, n, i, r) {
		for (var o, a, s, u, l, d, p = t.createDocumentFragment(), h = [], g = 0, m = e.length; g < m; g++)
			if (o = e[g], o || 0 === o)
				if ("object" === oe.type(o)) oe.merge(h, o.nodeType ? [o] : o);
				else if ($e.test(o)) {
			for (a = a || p.appendChild(t.createElement("div")), s = (Le.exec(o) || ["", ""])[1].toLowerCase(), u = Fe[s] || Fe._default, a.innerHTML = u[1] + oe.htmlPrefilter(o) + u[2], d = u[0]; d--;) a = a.lastChild;
			oe.merge(h, a.childNodes), a = p.firstChild, a.textContent = ""
		} else h.push(t.createTextNode(o));
		for (p.textContent = "", g = 0; o = h[g++];)
			if (i && oe.inArray(o, i) > -1) r && r.push(o);
			else if (l = oe.contains(o.ownerDocument, o), a = c(p.appendChild(o), "script"), l && f(a), n)
			for (d = 0; o = a[d++];) Oe.test(o.type || "") && n.push(o);
		return p
	}

	function p() {
		return !0
	}

	function h() {
		return !1
	}

	function g() {
		try {
			return G.activeElement
		} catch (e) {}
	}

	function m(e, t, n, i, r, o) {
		var a, s;
		if ("object" === ("undefined" == typeof t ? "undefined" : _typeof(t))) {
			"string" != typeof n && (i = i || n, n = void 0);
			for (s in t) m(e, s, n, i, t[s], o);
			return e
		}
		if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = h;
		else if (!r) return e;
		return 1 === o && (a = r, r = function(e) {
			return oe().off(e), a.apply(this, arguments)
		}, r.guid = a.guid || (a.guid = oe.guid++)), e.each(function() {
			oe.event.add(this, t, r, i, n)
		})
	}

	function v(e, t) {
		return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function y(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function w(e) {
		var t = We.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function b(e, t) {
		var n, i, r, o, a, s, u, l;
		if (1 === t.nodeType) {
			if (Ee.hasData(e) && (o = Ee.access(e), a = Ee.set(t, o), l = o.events)) {
				delete a.handle, a.events = {};
				for (r in l)
					for (n = 0, i = l[r].length; n < i; n++) oe.event.add(t, r, l[r][n])
			}
			Se.hasData(e) && (s = Se.access(e), u = oe.extend({}, s), Se.set(t, u))
		}
	}

	function x(e, t) {
		var n = t.nodeName.toLowerCase();
		"input" === n && ze.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
	}

	function C(e, t, n, i) {
		t = K.apply([], t);
		var r, o, a, s, u, l, f = 0,
			p = e.length,
			h = p - 1,
			g = t[0],
			m = oe.isFunction(g);
		if (m || p > 1 && "string" == typeof g && !ie.checkClone && Be.test(g)) return e.each(function(r) {
			var o = e.eq(r);
			m && (t[0] = g.call(this, r, o.html())), C(o, t, n, i)
		});
		if (p && (r = d(t, e[0].ownerDocument, !1, e, i), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
			for (a = oe.map(c(r, "script"), y), s = a.length; f < p; f++) u = r, f !== h && (u = oe.clone(u, !0, !0), s && oe.merge(a, c(u, "script"))), n.call(e[f], u, f);
			if (s)
				for (l = a[a.length - 1].ownerDocument, oe.map(a, w), f = 0; f < s; f++) u = a[f], Oe.test(u.type || "") && !Ee.access(u, "globalEval") && oe.contains(l, u) && (u.src ? oe._evalUrl && oe._evalUrl(u.src) : oe.globalEval(u.textContent.replace(Qe, "")))
		}
		return e
	}

	function T(e, t, n) {
		for (var i, r = t ? oe.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || oe.cleanData(c(i)), i.parentNode && (n && oe.contains(i.ownerDocument, i) && f(c(i, "script")), i.parentNode.removeChild(i));
		return e
	}

	function k(e, t) {
		var n = oe(t.createElement(e)).appendTo(t.body),
			i = oe.css(n[0], "display");
		return n.detach(), i
	}

	function E(e) {
		var t = G,
			n = Ye[e];
		return n || (n = k(e, t), "none" !== n && n || (Xe = (Xe || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Xe[0].contentDocument, t.write(), t.close(), n = k(e, t), Xe.detach()), Ye[e] = n), n
	}

	function S(e, t, n) {
		var i, r, o, a, s = e.style;
		return n = n || Ve(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== a && void 0 !== a || oe.contains(e.ownerDocument, e) || (a = oe.style(e, t)), n && !ie.pixelMarginRight() && Ge.test(a) && Ue.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o), void 0 !== a ? a + "" : a
	}

	function A(e, t) {
		return {
			get: function() {
				return e() ? void delete this.get : (this.get = t).apply(this, arguments)
			}
		}
	}

	function D(e) {
		if (e in it) return e;
		for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--;)
			if (e = nt[n] + t, e in it) return e
	}

	function q(e, t, n) {
		var i = Ne.exec(t);
		return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
	}

	function N(e, t, n, i, r) {
		for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += oe.css(e, n + je[o], !0, r)), i ? ("content" === n && (a -= oe.css(e, "padding" + je[o], !0, r)), "margin" !== n && (a -= oe.css(e, "border" + je[o] + "Width", !0, r))) : (a += oe.css(e, "padding" + je[o], !0, r), "padding" !== n && (a += oe.css(e, "border" + je[o] + "Width", !0, r)));
		return a
	}

	function j(e, t, n) {
		var i = !0,
			r = "width" === t ? e.offsetWidth : e.offsetHeight,
			o = Ve(e),
			a = "border-box" === oe.css(e, "boxSizing", !1, o);
		if (r <= 0 || null == r) {
			if (r = S(e, t, o), (r < 0 || null == r) && (r = e.style[t]), Ge.test(r)) return r;
			i = a && (ie.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
		}
		return r + N(e, t, n || (a ? "border" : "content"), i, o) + "px"
	}

	function _(e, t) {
		for (var n, i, r, o = [], a = 0, s = e.length; a < s; a++) i = e[a], i.style && (o[a] = Ee.get(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && _e(i) && (o[a] = Ee.access(i, "olddisplay", E(i.nodeName)))) : (r = _e(i), "none" === n && r || Ee.set(i, "olddisplay", r ? n : oe.css(i, "display"))));
		for (a = 0; a < s; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
		return e
	}

	function z(e, t, n, i, r) {
		return new z.prototype.init(e, t, n, i, r)
	}

	function L() {
		return e.setTimeout(function() {
			rt = void 0
		}), rt = oe.now()
	}

	function O(e, t) {
		var n, i = 0,
			r = {
				height: e
			};
		for (t = t ? 1 : 0; i < 4; i += 2 - t) n = je[i], r["margin" + n] = r["padding" + n] = e;
		return t && (r.opacity = r.width = e), r
	}

	function F(e, t, n) {
		for (var i, r = (P.tweeners[t] || []).concat(P.tweeners["*"]), o = 0, a = r.length; o < a; o++)
			if (i = r[o].call(n, t, e)) return i
	}

	function $(e, t, n) {
		var i, r, o, a, s, u, l, c, f = this,
			d = {},
			p = e.style,
			h = e.nodeType && _e(e),
			g = Ee.get(e, "fxshow");
		n.queue || (s = oe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
			s.unqueued || u()
		}), s.unqueued++, f.always(function() {
			f.always(function() {
				s.unqueued--, oe.queue(e, "fx").length || s.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = oe.css(e, "display"), c = "none" === l ? Ee.get(e, "olddisplay") || E(e.nodeName) : l, "inline" === c && "none" === oe.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function() {
			p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
		}));
		for (i in t)
			if (r = t[i], at.exec(r)) {
				if (delete t[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
					if ("show" !== r || !g || void 0 === g[i]) continue;
					h = !0
				}
				d[i] = g && g[i] || oe.style(e, i)
			} else l = void 0;
		if (oe.isEmptyObject(d)) "inline" === ("none" === l ? E(e.nodeName) : l) && (p.display = l);
		else {
			g ? "hidden" in g && (h = g.hidden) : g = Ee.access(e, "fxshow", {}), o && (g.hidden = !h), h ? oe(e).show() : f.done(function() {
				oe(e).hide()
			}), f.done(function() {
				var t;
				Ee.remove(e, "fxshow");
				for (t in d) oe.style(e, t, d[t])
			});
			for (i in d) a = F(h ? g[i] : 0, i, f), i in g || (g[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
		}
	}

	function H(e, t) {
		var n, i, r, o, a;
		for (n in e)
			if (i = oe.camelCase(n), r = t[i], o = e[n], oe.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = oe.cssHooks[i], a && "expand" in a) {
				o = a.expand(o), delete e[i];
				for (n in o) n in e || (e[n] = o[n], t[n] = r)
			} else t[i] = r
	}

	function P(e, t, n) {
		var i, r, o = 0,
			a = P.prefilters.length,
			s = oe.Deferred().always(function() {
				delete u.elem
			}),
			u = function() {
				if (r) return !1;
				for (var t = rt || L(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, o = 1 - i, a = 0, u = l.tweens.length; a < u; a++) l.tweens[a].run(o);
				return s.notifyWith(e, [l, o, n]), o < 1 && u ? n : (s.resolveWith(e, [l]), !1)
			},
			l = s.promise({
				elem: e,
				props: oe.extend({}, t),
				opts: oe.extend(!0, {
					specialEasing: {},
					easing: oe.easing._default
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: rt || L(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var i = oe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
					return l.tweens.push(i), i
				},
				stop: function(t) {
					var n = 0,
						i = t ? l.tweens.length : 0;
					if (r) return this;
					for (r = !0; n < i; n++) l.tweens[n].run(1);
					return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
				}
			}),
			c = l.props;
		for (H(c, l.opts.specialEasing); o < a; o++)
			if (i = P.prefilters[o].call(l, e, c, l.opts)) return oe.isFunction(i.stop) && (oe._queueHooks(l.elem, l.opts.queue).stop = oe.proxy(i.stop, i)), i;
		return oe.map(c, F, l), oe.isFunction(l.opts.start) && l.opts.start.call(e, l), oe.fx.timer(oe.extend(u, {
			elem: e,
			anim: l,
			queue: l.opts.queue
		})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
	}

	function M(e) {
		return e.getAttribute && e.getAttribute("class") || ""
	}

	function R(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var i, r = 0,
				o = t.toLowerCase().match(xe) || [];
			if (oe.isFunction(n))
				for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
		}
	}

	function I(e, t, n, i) {
		function r(s) {
			var u;
			return o[s] = !0, oe.each(e[s] || [], function(e, s) {
				var l = s(t, n, i);
				return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), r(l), !1)
			}), u
		}
		var o = {},
			a = e === St;
		return r(t.dataTypes[0]) || !o["*"] && r("*")
	}

	function B(e, t) {
		var n, i, r = oe.ajaxSettings.flatOptions || {};
		for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
		return i && oe.extend(!0, e, i), e
	}

	function W(e, t, n) {
		for (var i, r, o, a, s = e.contents, u = e.dataTypes;
			"*" === u[0];) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
		if (i)
			for (r in s)
				if (s[r] && s[r].test(i)) {
					u.unshift(r);
					break
				}
		if (u[0] in n) o = u[0];
		else {
			for (r in n) {
				if (!u[0] || e.converters[r + " " + u[0]]) {
					o = r;
					break
				}
				a || (a = r)
			}
			o = o || a
		}
		if (o) return o !== u[0] && u.unshift(o), n[o]
	}

	function Q(e, t, n, i) {
		var r, o, a, s, u, l = {},
			c = e.dataTypes.slice();
		if (c[1])
			for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
		for (o = c.shift(); o;)
			if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
				if ("*" === o) o = u;
				else if ("*" !== u && u !== o) {
			if (a = l[u + " " + o] || l["* " + o], !a)
				for (r in l)
					if (s = r.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
						a === !0 ? a = l[r] : l[r] !== !0 && (o = s[0], c.unshift(s[1]));
						break
					}
			if (a !== !0)
				if (a && e["throws"]) t = a(t);
				else try {
					t = a(t)
				} catch (f) {
					return {
						state: "parsererror",
						error: a ? f : "No conversion from " + u + " to " + o
					}
				}
		}
		return {
			state: "success",
			data: t
		}
	}

	function X(e, t, n, i) {
		var r;
		if (oe.isArray(t)) oe.each(t, function(t, r) {
			n || Nt.test(e) ? i(e, r) : X(e + "[" + ("object" === ("undefined" == typeof r ? "undefined" : _typeof(r)) && null != r ? t : "") + "]", r, n, i)
		});
		else if (n || "object" !== oe.type(t)) i(e, t);
		else
			for (r in t) X(e + "[" + r + "]", t[r], n, i)
	}

	function Y(e) {
		return oe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
	}
	var U = [],
		G = e.document,
		V = U.slice,
		K = U.concat,
		J = U.push,
		Z = U.indexOf,
		ee = {},
		te = ee.toString,
		ne = ee.hasOwnProperty,
		ie = {},
		re = "2.2.4",
		oe = function Rt(e, t) {
			return new Rt.fn.init(e, t)
		},
		ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		se = /^-ms-/,
		ue = /-([\da-z])/gi,
		le = function(e, t) {
			return t.toUpperCase()
		};
	oe.fn = oe.prototype = {
		jquery: re,
		constructor: oe,
		selector: "",
		length: 0,
		toArray: function() {
			return V.call(this)
		},
		get: function(e) {
			return null != e ? e < 0 ? this[e + this.length] : this[e] : V.call(this)
		},
		pushStack: function(e) {
			var t = oe.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function(e) {
			return oe.each(this, e)
		},
		map: function(e) {
			return this.pushStack(oe.map(this, function(t, n) {
				return e.call(t, n, t)
			}))
		},
		slice: function() {
			return this.pushStack(V.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (e < 0 ? t : 0);
			return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: J,
		sort: U.sort,
		splice: U.splice
	}, oe.extend = oe.fn.extend = function() {
		var e, t, n, i, r, o, a = arguments[0] || {},
			s = 1,
			u = arguments.length,
			l = !1;
		for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" === ("undefined" == typeof a ? "undefined" : _typeof(a)) || oe.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
			if (null != (e = arguments[s]))
				for (t in e) n = a[t], i = e[t], a !== i && (l && i && (oe.isPlainObject(i) || (r = oe.isArray(i))) ? (r ? (r = !1, o = n && oe.isArray(n) ? n : []) : o = n && oe.isPlainObject(n) ? n : {}, a[t] = oe.extend(l, o, i)) : void 0 !== i && (a[t] = i));
		return a
	}, oe.extend({
		expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isFunction: function(e) {
			return "function" === oe.type(e)
		},
		isArray: Array.isArray,
		isWindow: function(e) {
			return null != e && e === e.window
		},
		isNumeric: function(e) {
			var t = e && e.toString();
			return !oe.isArray(e) && t - parseFloat(t) + 1 >= 0
		},
		isPlainObject: function(e) {
			var t;
			if ("object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
			if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
			for (t in e);
			return void 0 === t || ne.call(e, t)
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		type: function(e) {
			return null == e ? e + "" : "object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) || "function" == typeof e ? ee[te.call(e)] || "object" : "undefined" == typeof e ? "undefined" : _typeof(e)
		},
		globalEval: function(e) {
			var t, n = eval;
			e = oe.trim(e), e && (1 === e.indexOf("use strict") ? (t = G.createElement("script"), t.text = e, G.head.appendChild(t).parentNode.removeChild(t)) : n(e))
		},
		camelCase: function(e) {
			return e.replace(se, "ms-").replace(ue, le)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t) {
			var i, r = 0;
			if (n(e))
				for (i = e.length; r < i && t.call(e[r], r, e[r]) !== !1; r++);
			else
				for (r in e)
					if (t.call(e[r], r, e[r]) === !1) break;
			return e
		},
		trim: function(e) {
			return null == e ? "" : (e + "").replace(ae, "")
		},
		makeArray: function(e, t) {
			var i = t || [];
			return null != e && (n(Object(e)) ? oe.merge(i, "string" == typeof e ? [e] : e) : J.call(i, e)), i
		},
		inArray: function(e, t, n) {
			return null == t ? -1 : Z.call(t, e, n)
		},
		merge: function(e, t) {
			for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
			return e.length = r, e
		},
		grep: function(e, t, n) {
			for (var i, r = [], o = 0, a = e.length, s = !n; o < a; o++) i = !t(e[o], o), i !== s && r.push(e[o]);
			return r
		},
		map: function(e, t, i) {
			var r, o, a = 0,
				s = [];
			if (n(e))
				for (r = e.length; a < r; a++) o = t(e[a], a, i), null != o && s.push(o);
			else
				for (a in e) o = t(e[a], a, i), null != o && s.push(o);
			return K.apply([], s)
		},
		guid: 1,
		proxy: function It(e, t) {
			var n, i, It;
			if ("string" == typeof t && (n = e[t], t = e, e = n), oe.isFunction(e)) return i = V.call(arguments, 2), It = function() {
				return e.apply(t || this, i.concat(V.call(arguments)))
			}, It.guid = e.guid = e.guid || oe.guid++, It
		},
		now: Date.now,
		support: ie
	}), "function" == typeof Symbol && (oe.fn[Symbol.iterator] = U[Symbol.iterator]), oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
		ee["[object " + t + "]"] = t.toLowerCase()
	});
	var ce = function(e) {
		function t(e, t, n, i) {
			var r, o, a, s, u, l, f, p, h = t && t.ownerDocument,
				g = t ? t.nodeType : 9;
			if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
			if (!i && ((t ? t.ownerDocument || t : M) !== _ && j(t), t = t || _, L)) {
				if (11 !== g && (l = ve.exec(e)))
					if (r = l[1]) {
						if (9 === g) {
							if (!(a = t.getElementById(r))) return n;
							if (a.id === r) return n.push(a), n
						} else if (h && (a = h.getElementById(r)) && H(t, a) && a.id === r) return n.push(a), n
					} else {
						if (l[2]) return J.apply(n, t.getElementsByTagName(e)), n;
						if ((r = l[3]) && x.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(r)), n
					}
				if (x.qsa && !Q[e + " "] && (!O || !O.test(e))) {
					if (1 !== g) h = t, p = e;
					else if ("object" !== t.nodeName.toLowerCase()) {
						for ((s = t.getAttribute("id")) ? s = s.replace(we, "\\$&") : t.setAttribute("id", s = P), f = E(e), o = f.length, u = de.test(s) ? "#" + s : "[id='" + s + "']"; o--;) f[o] = u + " " + d(f[o]);
						p = f.join(","), h = ye.test(e) && c(t.parentNode) || t
					}
					if (p) try {
						return J.apply(n, h.querySelectorAll(p)), n
					} catch (m) {} finally {
						s === P && t.removeAttribute("id")
					}
				}
			}
			return A(e.replace(se, "$1"), t, n, i)
		}

		function n() {
			function e(n, i) {
				return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
			}
			var t = [];
			return e
		}

		function i(e) {
			return e[P] = !0, e
		}

		function r(e) {
			var t = _.createElement("div");
			try {
				return !!e(t)
			} catch (n) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function o(e, t) {
			for (var n = e.split("|"), i = n.length; i--;) C.attrHandle[n[i]] = t
		}

		function a(e, t) {
			var n = t && e,
				i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
			if (i) return i;
			if (n)
				for (; n = n.nextSibling;)
					if (n === t) return -1;
			return e ? 1 : -1
		}

		function s(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return "input" === n && t.type === e
			}
		}

		function u(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && t.type === e
			}
		}

		function l(e) {
			return i(function(t) {
				return t = +t, i(function(n, i) {
					for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
				})
			})
		}

		function c(e) {
			return e && "undefined" != typeof e.getElementsByTagName && e
		}

		function f() {}

		function d(e) {
			for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
			return i
		}

		function p(e, t, n) {
			var i = t.dir,
				r = n && "parentNode" === i,
				o = I++;
			return t.first ? function(t, n, o) {
				for (; t = t[i];)
					if (1 === t.nodeType || r) return e(t, n, o)
			} : function(t, n, a) {
				var s, u, l, c = [R, o];
				if (a) {
					for (; t = t[i];)
						if ((1 === t.nodeType || r) && e(t, n, a)) return !0
				} else
					for (; t = t[i];)
						if (1 === t.nodeType || r) {
							if (l = t[P] || (t[P] = {}), u = l[t.uniqueID] || (l[t.uniqueID] = {}), (s = u[i]) && s[0] === R && s[1] === o) return c[2] = s[2];
							if (u[i] = c, c[2] = e(t, n, a)) return !0
						}
			}
		}

		function h(e) {
			return e.length > 1 ? function(t, n, i) {
				for (var r = e.length; r--;)
					if (!e[r](t, n, i)) return !1;
				return !0
			} : e[0]
		}

		function g(e, n, i) {
			for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
			return i
		}

		function m(e, t, n, i, r) {
			for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), l && t.push(s)));
			return a
		}

		function v(e, t, n, r, o, a) {
			return r && !r[P] && (r = v(r)), o && !o[P] && (o = v(o, a)), i(function(i, a, s, u) {
				var l, c, f, d = [],
					p = [],
					h = a.length,
					v = i || g(t || "*", s.nodeType ? [s] : s, []),
					y = !e || !i && t ? v : m(v, d, e, s, u),
					w = n ? o || (i ? e : h || r) ? [] : a : y;
				if (n && n(y, w, s, u), r)
					for (l = m(w, p), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (w[p[c]] = !(y[p[c]] = f));
				if (i) {
					if (o || e) {
						if (o) {
							for (l = [], c = w.length; c--;)(f = w[c]) && l.push(y[c] = f);
							o(null, w = [], l, u)
						}
						for (c = w.length; c--;)(f = w[c]) && (l = o ? ee(i, f) : d[c]) > -1 && (i[l] = !(a[l] = f))
					}
				} else w = m(w === a ? w.splice(h, w.length) : w), o ? o(null, a, w, u) : J.apply(a, w)
			})
		}

		function y(e) {
			for (var t, n, i, r = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, u = p(function(e) {
					return e === t
				}, a, !0), l = p(function(e) {
					return ee(t, e) > -1
				}, a, !0), c = [function(e, n, i) {
					var r = !o && (i || n !== D) || ((t = n).nodeType ? u(e, n, i) : l(e, n, i));
					return t = null, r
				}]; s < r; s++)
				if (n = C.relative[e[s].type]) c = [p(h(c), n)];
				else {
					if (n = C.filter[e[s].type].apply(null, e[s].matches), n[P]) {
						for (i = ++s; i < r && !C.relative[e[i].type]; i++);
						return v(s > 1 && h(c), s > 1 && d(e.slice(0, s - 1).concat({
							value: " " === e[s - 2].type ? "*" : ""
						})).replace(se, "$1"), n, s < i && y(e.slice(s, i)), i < r && y(e = e.slice(i)), i < r && d(e))
					}
					c.push(n)
				}
			return h(c)
		}

		function w(e, n) {
			var r = n.length > 0,
				o = e.length > 0,
				a = function(i, a, s, u, l) {
					var c, f, d, p = 0,
						h = "0",
						g = i && [],
						v = [],
						y = D,
						w = i || o && C.find.TAG("*", l),
						b = R += null == y ? 1 : Math.random() || .1,
						x = w.length;
					for (l && (D = a === _ || a || l); h !== x && null != (c = w[h]); h++) {
						if (o && c) {
							for (f = 0, a || c.ownerDocument === _ || (j(c), s = !L); d = e[f++];)
								if (d(c, a || _, s)) {
									u.push(c);
									break
								}
							l && (R = b)
						}
						r && ((c = !d && c) && p--, i && g.push(c))
					}
					if (p += h, r && h !== p) {
						for (f = 0; d = n[f++];) d(g, v, a, s);
						if (i) {
							if (p > 0)
								for (; h--;) g[h] || v[h] || (v[h] = V.call(u));
							v = m(v)
						}
						J.apply(u, v), l && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(u)
					}
					return l && (R = b, D = y), g
				};
			return r ? i(a) : a
		}
		var b, x, C, T, k, E, S, A, D, q, N, j, _, z, L, O, F, $, H, P = "sizzle" + 1 * new Date,
			M = e.document,
			R = 0,
			I = 0,
			B = n(),
			W = n(),
			Q = n(),
			X = function(e, t) {
				return e === t && (N = !0), 0
			},
			Y = 1 << 31,
			U = {}.hasOwnProperty,
			G = [],
			V = G.pop,
			K = G.push,
			J = G.push,
			Z = G.slice,
			ee = function(e, t) {
				for (var n = 0, i = e.length; n < i; n++)
					if (e[n] === t) return n;
				return -1
			},
			te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			ne = "[\\x20\\t\\r\\n\\f]",
			ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
			oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
			ae = new RegExp(ne + "+", "g"),
			se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
			ue = new RegExp("^" + ne + "*," + ne + "*"),
			le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
			ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
			fe = new RegExp(oe),
			de = new RegExp("^" + ie + "$"),
			pe = {
				ID: new RegExp("^#(" + ie + ")"),
				CLASS: new RegExp("^\\.(" + ie + ")"),
				TAG: new RegExp("^(" + ie + "|[*])"),
				ATTR: new RegExp("^" + re),
				PSEUDO: new RegExp("^" + oe),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + te + ")$", "i"),
				needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
			},
			he = /^(?:input|select|textarea|button)$/i,
			ge = /^h\d$/i,
			me = /^[^{]+\{\s*\[native \w/,
			ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			ye = /[+~]/,
			we = /'|\\/g,
			be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
			xe = function(e, t, n) {
				var i = "0x" + t - 65536;
				return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
			},
			Ce = function() {
				j()
			};
		try {
			J.apply(G = Z.call(M.childNodes), M.childNodes), G[M.childNodes.length].nodeType
		} catch (Te) {
			J = {
				apply: G.length ? function(e, t) {
					K.apply(e, Z.call(t))
				} : function(e, t) {
					for (var n = e.length, i = 0; e[n++] = t[i++];);
					e.length = n - 1
				}
			}
		}
		x = t.support = {}, k = t.isXML = function(e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return !!t && "HTML" !== t.nodeName
		}, j = t.setDocument = function(e) {
			var t, n, i = e ? e.ownerDocument || e : M;
			return i !== _ && 9 === i.nodeType && i.documentElement ? (_ = i, z = _.documentElement, L = !k(_), (n = _.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), x.attributes = r(function(e) {
				return e.className = "i", !e.getAttribute("className")
			}), x.getElementsByTagName = r(function(e) {
				return e.appendChild(_.createComment("")), !e.getElementsByTagName("*").length
			}), x.getElementsByClassName = me.test(_.getElementsByClassName), x.getById = r(function(e) {
				return z.appendChild(e).id = P, !_.getElementsByName || !_.getElementsByName(P).length
			}), x.getById ? (C.find.ID = function(e, t) {
				if ("undefined" != typeof t.getElementById && L) {
					var n = t.getElementById(e);
					return n ? [n] : []
				}
			}, C.filter.ID = function(e) {
				var t = e.replace(be, xe);
				return function(e) {
					return e.getAttribute("id") === t
				}
			}) : (delete C.find.ID, C.filter.ID = function(e) {
				var t = e.replace(be, xe);
				return function(e) {
					var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
					return n && n.value === t
				}
			}), C.find.TAG = x.getElementsByTagName ? function(e, t) {
				return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
			} : function(e, t) {
				var n, i = [],
					r = 0,
					o = t.getElementsByTagName(e);
				if ("*" === e) {
					for (; n = o[r++];) 1 === n.nodeType && i.push(n);
					return i
				}
				return o
			}, C.find.CLASS = x.getElementsByClassName && function(e, t) {
				if ("undefined" != typeof t.getElementsByClassName && L) return t.getElementsByClassName(e)
			}, F = [], O = [], (x.qsa = me.test(_.querySelectorAll)) && (r(function(e) {
				z.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + P + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + P + "+*").length || O.push(".#.+[+~]")
			}), r(function(e) {
				var t = _.createElement("input");
				t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
			})), (x.matchesSelector = me.test($ = z.matches || z.webkitMatchesSelector || z.mozMatchesSelector || z.oMatchesSelector || z.msMatchesSelector)) && r(function(e) {
				x.disconnectedMatch = $.call(e, "div"), $.call(e, "[s!='']:x"), F.push("!=", oe)
			}), O = O.length && new RegExp(O.join("|")), F = F.length && new RegExp(F.join("|")), t = me.test(z.compareDocumentPosition), H = t || me.test(z.contains) ? function(e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e,
					i = t && t.parentNode;
				return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
			} : function(e, t) {
				if (t)
					for (; t = t.parentNode;)
						if (t === e) return !0;
				return !1
			}, X = t ? function(e, t) {
				if (e === t) return N = !0, 0;
				var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === _ || e.ownerDocument === M && H(M, e) ? -1 : t === _ || t.ownerDocument === M && H(M, t) ? 1 : q ? ee(q, e) - ee(q, t) : 0 : 4 & n ? -1 : 1)
			} : function(e, t) {
				if (e === t) return N = !0, 0;
				var n, i = 0,
					r = e.parentNode,
					o = t.parentNode,
					s = [e],
					u = [t];
				if (!r || !o) return e === _ ? -1 : t === _ ? 1 : r ? -1 : o ? 1 : q ? ee(q, e) - ee(q, t) : 0;
				if (r === o) return a(e, t);
				for (n = e; n = n.parentNode;) s.unshift(n);
				for (n = t; n = n.parentNode;) u.unshift(n);
				for (; s[i] === u[i];) i++;
				return i ? a(s[i], u[i]) : s[i] === M ? -1 : u[i] === M ? 1 : 0
			}, _) : _
		}, t.matches = function(e, n) {
			return t(e, null, null, n)
		}, t.matchesSelector = function(e, n) {
			if ((e.ownerDocument || e) !== _ && j(e), n = n.replace(ce, "='$1']"), x.matchesSelector && L && !Q[n + " "] && (!F || !F.test(n)) && (!O || !O.test(n))) try {
				var i = $.call(e, n);
				if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
			} catch (r) {}
			return t(n, _, null, [e]).length > 0
		}, t.contains = function(e, t) {
			return (e.ownerDocument || e) !== _ && j(e), H(e, t)
		}, t.attr = function(e, t) {
			(e.ownerDocument || e) !== _ && j(e);
			var n = C.attrHandle[t.toLowerCase()],
				i = n && U.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
			return void 0 !== i ? i : x.attributes || !L ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
		}, t.error = function(e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		}, t.uniqueSort = function(e) {
			var t, n = [],
				i = 0,
				r = 0;
			if (N = !x.detectDuplicates, q = !x.sortStable && e.slice(0), e.sort(X), N) {
				for (; t = e[r++];) t === e[r] && (i = n.push(r));
				for (; i--;) e.splice(n[i], 1)
			}
			return q = null, e
		}, T = t.getText = function(e) {
			var t, n = "",
				i = 0,
				r = e.nodeType;
			if (r) {
				if (1 === r || 9 === r || 11 === r) {
					if ("string" == typeof e.textContent) return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
				} else if (3 === r || 4 === r) return e.nodeValue
			} else
				for (; t = e[i++];) n += T(t);
			return n
		}, C = t.selectors = {
			cacheLength: 50,
			createPseudo: i,
			match: pe,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(e) {
					return e[1] = e[1].replace(be, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function(e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
				},
				PSEUDO: function(e) {
					var t, n = !e[6] && e[2];
					return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function(e) {
					var t = e.replace(be, xe).toLowerCase();
					return "*" === e ? function() {
						return !0
					} : function(e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS: function(e) {
					var t = B[e + " "];
					return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && B(e, function(e) {
						return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
					})
				},
				ATTR: function(e, n, i) {
					return function(r) {
						var o = t.attr(r, e);
						return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
					}
				},
				CHILD: function(e, t, n, i, r) {
					var o = "nth" !== e.slice(0, 3),
						a = "last" !== e.slice(-4),
						s = "of-type" === t;
					return 1 === i && 0 === r ? function(e) {
						return !!e.parentNode
					} : function(t, n, u) {
						var l, c, f, d, p, h, g = o !== a ? "nextSibling" : "previousSibling",
							m = t.parentNode,
							v = s && t.nodeName.toLowerCase(),
							y = !u && !s,
							w = !1;
						if (m) {
							if (o) {
								for (; g;) {
									for (d = t; d = d[g];)
										if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
									h = g = "only" === e && !h && "nextSibling"
								}
								return !0
							}
							if (h = [a ? m.firstChild : m.lastChild], a && y) {
								for (d = m, f = d[P] || (d[P] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === R && l[1], w = p && l[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (w = p = 0) || h.pop();)
									if (1 === d.nodeType && ++w && d === t) {
										c[e] = [R, p, w];
										break
									}
							} else if (y && (d = t, f = d[P] || (d[P] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === R && l[1], w = p), w === !1)
								for (;
									(d = ++p && d && d[g] || (w = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++w || (y && (f = d[P] || (d[P] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[e] = [R, w]), d !== t)););
							return w -= r, w === i || w % i === 0 && w / i >= 0
						}
					}
				},
				PSEUDO: function(e, n) {
					var r, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
					return o[P] ? o(n) : o.length > 1 ? (r = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
						for (var i, r = o(e, n), a = r.length; a--;) i = ee(e, r[a]), e[i] = !(t[i] = r[a])
					}) : function(e) {
						return o(e, 0, r)
					}) : o
				}
			},
			pseudos: {
				not: i(function(e) {
					var t = [],
						n = [],
						r = S(e.replace(se, "$1"));
					return r[P] ? i(function(e, t, n, i) {
						for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
					}) : function(e, i, o) {
						return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
					}
				}),
				has: i(function(e) {
					return function(n) {
						return t(e, n).length > 0
					}
				}),
				contains: i(function(e) {
					return e = e.replace(be, xe),
						function(t) {
							return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
						}
				}),
				lang: i(function(e) {
					return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, xe).toLowerCase(),
						function(t) {
							var n;
							do
								if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
							return !1
						}
				}),
				target: function(t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				},
				root: function(e) {
					return e === z
				},
				focus: function(e) {
					return e === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				},
				enabled: function(e) {
					return e.disabled === !1
				},
				disabled: function(e) {
					return e.disabled === !0
				},
				checked: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !!e.checked || "option" === t && !!e.selected
				},
				selected: function(e) {
					return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
				},
				empty: function(e) {
					for (e = e.firstChild; e; e = e.nextSibling)
						if (e.nodeType < 6) return !1;
					return !0
				},
				parent: function(e) {
					return !C.pseudos.empty(e)
				},
				header: function(e) {
					return ge.test(e.nodeName)
				},
				input: function(e) {
					return he.test(e.nodeName)
				},
				button: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text: function(e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
				},
				first: l(function() {
					return [0]
				}),
				last: l(function(e, t) {
					return [t - 1]
				}),
				eq: l(function(e, t, n) {
					return [n < 0 ? n + t : n]
				}),
				even: l(function(e, t) {
					for (var n = 0; n < t; n += 2) e.push(n);
					return e
				}),
				odd: l(function(e, t) {
					for (var n = 1; n < t; n += 2) e.push(n);
					return e
				}),
				lt: l(function(e, t, n) {
					for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
					return e
				}),
				gt: l(function(e, t, n) {
					for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
					return e
				})
			}
		}, C.pseudos.nth = C.pseudos.eq;
		for (b in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) C.pseudos[b] = s(b);
		for (b in {
				submit: !0,
				reset: !0
			}) C.pseudos[b] = u(b);
		return f.prototype = C.filters = C.pseudos, C.setFilters = new f, E = t.tokenize = function(e, n) {
			var i, r, o, a, s, u, l, c = W[e + " "];
			if (c) return n ? 0 : c.slice(0);
			for (s = e, u = [], l = C.preFilter; s;) {
				i && !(r = ue.exec(s)) || (r && (s = s.slice(r[0].length) || s), u.push(o = [])), i = !1, (r = le.exec(s)) && (i = r.shift(), o.push({
					value: i,
					type: r[0].replace(se, " ")
				}), s = s.slice(i.length));
				for (a in C.filter) !(r = pe[a].exec(s)) || l[a] && !(r = l[a](r)) || (i = r.shift(), o.push({
					value: i,
					type: a,
					matches: r
				}), s = s.slice(i.length));
				if (!i) break
			}
			return n ? s.length : s ? t.error(e) : W(e, u).slice(0)
		}, S = t.compile = function(e, t) {
			var n, i = [],
				r = [],
				o = Q[e + " "];
			if (!o) {
				for (t || (t = E(e)), n = t.length; n--;) o = y(t[n]), o[P] ? i.push(o) : r.push(o);
				o = Q(e, w(r, i)), o.selector = e
			}
			return o
		}, A = t.select = function(e, t, n, i) {
			var r, o, a, s, u, l = "function" == typeof e && e,
				f = !i && E(e = l.selector || e);
			if (n = n || [], 1 === f.length) {
				if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && x.getById && 9 === t.nodeType && L && C.relative[o[1].type]) {
					if (t = (C.find.ID(a.matches[0].replace(be, xe), t) || [])[0], !t) return n;
					l && (t = t.parentNode), e = e.slice(o.shift().value.length)
				}
				for (r = pe.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !C.relative[s = a.type]);)
					if ((u = C.find[s]) && (i = u(a.matches[0].replace(be, xe), ye.test(o[0].type) && c(t.parentNode) || t))) {
						if (o.splice(r, 1), e = i.length && d(o), !e) return J.apply(n, i), n;
						break
					}
			}
			return (l || S(e, f))(i, t, !L, n, !t || ye.test(e) && c(t.parentNode) || t), n
		}, x.sortStable = P.split("").sort(X).join("") === P, x.detectDuplicates = !!N, j(), x.sortDetached = r(function(e) {
			return 1 & e.compareDocumentPosition(_.createElement("div"))
		}), r(function(e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || o("type|href|height|width", function(e, t, n) {
			if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), x.attributes && r(function(e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || o("value", function(e, t, n) {
			if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
		}), r(function(e) {
			return null == e.getAttribute("disabled")
		}) || o(te, function(e, t, n) {
			var i;
			if (!n) return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
		}), t
	}(e);
	oe.find = ce, oe.expr = ce.selectors, oe.expr[":"] = oe.expr.pseudos, oe.uniqueSort = oe.unique = ce.uniqueSort, oe.text = ce.getText, oe.isXMLDoc = ce.isXML, oe.contains = ce.contains;
	var fe = function(e, t, n) {
			for (var i = [], r = void 0 !== n;
				(e = e[t]) && 9 !== e.nodeType;)
				if (1 === e.nodeType) {
					if (r && oe(e).is(n)) break;
					i.push(e)
				}
			return i
		},
		de = function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		},
		pe = oe.expr.match.needsContext,
		he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
		ge = /^.[^:#\[\.,]*$/;
	oe.filter = function(e, t, n) {
		var i = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? oe.find.matchesSelector(i, e) ? [i] : [] : oe.find.matches(e, oe.grep(t, function(e) {
			return 1 === e.nodeType
		}))
	}, oe.fn.extend({
		find: function(e) {
			var t, n = this.length,
				i = [],
				r = this;
			if ("string" != typeof e) return this.pushStack(oe(e).filter(function() {
				for (t = 0; t < n; t++)
					if (oe.contains(r[t], this)) return !0
			}));
			for (t = 0; t < n; t++) oe.find(e, r[t], i);
			return i = this.pushStack(n > 1 ? oe.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
		},
		filter: function(e) {
			return this.pushStack(i(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(i(this, e || [], !0))
		},
		is: function(e) {
			return !!i(this, "string" == typeof e && pe.test(e) ? oe(e) : e || [], !1).length
		}
	});
	var me, ve = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		ye = oe.fn.init = function(e, t, n) {
			var i, r;
			if (!e) return this;
			if (n = n || me, "string" == typeof e) {
				if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ve.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
				if (i[1]) {
					if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : G, !0)), he.test(i[1]) && oe.isPlainObject(t))
						for (i in t) oe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
					return this
				}
				return r = G.getElementById(i[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = G, this.selector = e, this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
		};
	ye.prototype = oe.fn, me = oe(G);
	var we = /^(?:parents|prev(?:Until|All))/,
		be = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	oe.fn.extend({
		has: function(e) {
			var t = oe(e, this),
				n = t.length;
			return this.filter(function() {
				for (var e = 0; e < n; e++)
					if (oe.contains(this, t[e])) return !0
			})
		},
		closest: function(e, t) {
			for (var n, i = 0, r = this.length, o = [], a = pe.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; i < r; i++)
				for (n = this[i]; n && n !== t; n = n.parentNode)
					if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
						o.push(n);
						break
					}
			return this.pushStack(o.length > 1 ? oe.uniqueSort(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? Z.call(oe(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(oe.uniqueSort(oe.merge(this.get(), oe(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), oe.each({
		parent: function Bt(e) {
			var Bt = e.parentNode;
			return Bt && 11 !== Bt.nodeType ? Bt : null
		},
		parents: function(e) {
			return fe(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return fe(e, "parentNode", n)
		},
		next: function(e) {
			return r(e, "nextSibling")
		},
		prev: function(e) {
			return r(e, "previousSibling")
		},
		nextAll: function(e) {
			return fe(e, "nextSibling")
		},
		prevAll: function(e) {
			return fe(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return fe(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return fe(e, "previousSibling", n)
		},
		siblings: function(e) {
			return de((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return de(e.firstChild)
		},
		contents: function(e) {
			return e.contentDocument || oe.merge([], e.childNodes)
		}
	}, function(e, t) {
		oe.fn[e] = function(n, i) {
			var r = oe.map(this, t, n);
			return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = oe.filter(i, r)), this.length > 1 && (be[e] || oe.uniqueSort(r), we.test(e) && r.reverse()), this.pushStack(r)
		}
	});
	var xe = /\S+/g;
	oe.Callbacks = function(e) {
		e = "string" == typeof e ? o(e) : oe.extend({}, e);
		var t, n, i, r, a = [],
			s = [],
			u = -1,
			l = function() {
				for (r = e.once, i = t = !0; s.length; u = -1)
					for (n = s.shift(); ++u < a.length;) a[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = a.length, n = !1);
				e.memory || (n = !1), t = !1, r && (a = n ? [] : "")
			},
			c = {
				add: function() {
					return a && (n && !t && (u = a.length - 1, s.push(n)), function i(t) {
						oe.each(t, function(t, n) {
							oe.isFunction(n) ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== oe.type(n) && i(n)
						})
					}(arguments), n && !t && l()), this
				},
				remove: function() {
					return oe.each(arguments, function(e, t) {
						for (var n;
							(n = oe.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= u && u--
					}), this
				},
				has: function(e) {
					return e ? oe.inArray(e, a) > -1 : a.length > 0
				},
				empty: function() {
					return a && (a = []), this
				},
				disable: function() {
					return r = s = [], a = n = "", this
				},
				disabled: function() {
					return !a
				},
				lock: function() {
					return r = s = [], n || (a = n = ""), this
				},
				locked: function() {
					return !!r
				},
				fireWith: function(e, n) {
					return r || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || l()), this
				},
				fire: function() {
					return c.fireWith(this, arguments), this
				},
				fired: function() {
					return !!i
				}
			};
		return c
	}, oe.extend({
		Deferred: function(e) {
			var t = [
					["resolve", "done", oe.Callbacks("once memory"), "resolved"],
					["reject", "fail", oe.Callbacks("once memory"), "rejected"],
					["notify", "progress", oe.Callbacks("memory")]
				],
				n = "pending",
				i = {
					state: function() {
						return n
					},
					always: function() {
						return r.done(arguments).fail(arguments), this
					},
					then: function() {
						var e = arguments;
						return oe.Deferred(function(n) {
							oe.each(t, function(t, o) {
								var a = oe.isFunction(e[t]) && e[t];
								r[o[1]](function() {
									var e = a && a.apply(this, arguments);
									e && oe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? oe.extend(e, i) : i
					}
				},
				r = {};
			return i.pipe = i.then, oe.each(t, function(e, o) {
				var a = o[2],
					s = o[3];
				i[o[1]] = a.add, s && a.add(function() {
					n = s
				}, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
					return r[o[0] + "With"](this === r ? i : this, arguments), this
				}, r[o[0] + "With"] = a.fireWith
			}), i.promise(r), e && e.call(r, r), r
		},
		when: function(e) {
			var t, n, i, r = 0,
				o = V.call(arguments),
				a = o.length,
				s = 1 !== a || e && oe.isFunction(e.promise) ? a : 0,
				u = 1 === s ? e : oe.Deferred(),
				l = function(e, n, i) {
					return function(r) {
						n[e] = this, i[e] = arguments.length > 1 ? V.call(arguments) : r, i === t ? u.notifyWith(n, i) : --s || u.resolveWith(n, i)
					}
				};
			if (a > 1)
				for (t = new Array(a), n = new Array(a), i = new Array(a); r < a; r++) o[r] && oe.isFunction(o[r].promise) ? o[r].promise().progress(l(r, n, t)).done(l(r, i, o)).fail(u.reject) : --s;
			return s || u.resolveWith(i, o), u.promise()
		}
	});
	var Ce;
	oe.fn.ready = function(e) {
		return oe.ready.promise().done(e), this
	}, oe.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? oe.readyWait++ : oe.ready(!0)
		},
		ready: function(e) {
			(e === !0 ? --oe.readyWait : oe.isReady) || (oe.isReady = !0, e !== !0 && --oe.readyWait > 0 || (Ce.resolveWith(G, [oe]), oe.fn.triggerHandler && (oe(G).triggerHandler("ready"), oe(G).off("ready"))))
		}
	}), oe.ready.promise = function(t) {
		return Ce || (Ce = oe.Deferred(), "complete" === G.readyState || "loading" !== G.readyState && !G.documentElement.doScroll ? e.setTimeout(oe.ready) : (G.addEventListener("DOMContentLoaded", a), e.addEventListener("load", a))), Ce.promise(t)
	}, oe.ready.promise();
	var Te = function Wt(e, t, n, i, r, o, a) {
			var s = 0,
				u = e.length,
				l = null == n;
			if ("object" === oe.type(n)) {
				r = !0;
				for (s in n) Wt(e, t, s, n[s], !0, o, a)
			} else if (void 0 !== i && (r = !0, oe.isFunction(i) || (a = !0), l && (a ? (t.call(e, i), t = null) : (l = t, t = function(e, t, n) {
					return l.call(oe(e), n)
				})), t))
				for (; s < u; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
			return r ? e : l ? t.call(e) : u ? t(e[0], n) : o
		},
		ke = function(e) {
			return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
		};
	s.uid = 1, s.prototype = {
		register: function(e, t) {
			var n = t || {};
			return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
				value: n,
				writable: !0,
				configurable: !0
			}), e[this.expando]
		},
		cache: function(e) {
			if (!ke(e)) return {};
			var t = e[this.expando];
			return t || (t = {}, ke(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
				value: t,
				configurable: !0
			}))), t
		},
		set: function(e, t, n) {
			var i, r = this.cache(e);
			if ("string" == typeof t) r[t] = n;
			else
				for (i in t) r[i] = t[i];
			return r
		},
		get: function(e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
		},
		access: function(e, t, n) {
			var i;
			return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, oe.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
		},
		remove: function(e, t) {
			var n, i, r, o = e[this.expando];
			if (void 0 !== o) {
				if (void 0 === t) this.register(e);
				else {
					oe.isArray(t) ? i = t.concat(t.map(oe.camelCase)) : (r = oe.camelCase(t), t in o ? i = [t, r] : (i = r, i = i in o ? [i] : i.match(xe) || [])), n = i.length;
					for (; n--;) delete o[i[n]]
				}(void 0 === t || oe.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
			}
		},
		hasData: function(e) {
			var t = e[this.expando];
			return void 0 !== t && !oe.isEmptyObject(t)
		}
	};
	var Ee = new s,
		Se = new s,
		Ae = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		De = /[A-Z]/g;
	oe.extend({
		hasData: function(e) {
			return Se.hasData(e) || Ee.hasData(e)
		},
		data: function(e, t, n) {
			return Se.access(e, t, n)
		},
		removeData: function(e, t) {
			Se.remove(e, t)
		},
		_data: function(e, t, n) {
			return Ee.access(e, t, n)
		},
		_removeData: function(e, t) {
			Ee.remove(e, t)
		}
	}), oe.fn.extend({
		data: function Qt(e, t) {
			var n, i, Qt, r = this[0],
				o = r && r.attributes;
			if (void 0 === e) {
				if (this.length && (Qt = Se.get(r), 1 === r.nodeType && !Ee.get(r, "hasDataAttrs"))) {
					for (n = o.length; n--;) o[n] && (i = o[n].name, 0 === i.indexOf("data-") && (i = oe.camelCase(i.slice(5)), u(r, i, Qt[i])));
					Ee.set(r, "hasDataAttrs", !0)
				}
				return Qt
			}
			return "object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) ? this.each(function() {
				Se.set(this, e)
			}) : Te(this, function(t) {
				var n, i;
				if (r && void 0 === t) {
					if (n = Se.get(r, e) || Se.get(r, e.replace(De, "-$&").toLowerCase()), void 0 !== n) return n;
					if (i = oe.camelCase(e), n = Se.get(r, i), void 0 !== n) return n;
					if (n = u(r, i, void 0), void 0 !== n) return n
				} else i = oe.camelCase(e), this.each(function() {
					var n = Se.get(this, i);
					Se.set(this, i, t), e.indexOf("-") > -1 && void 0 !== n && Se.set(this, e, t)
				})
			}, null, t, arguments.length > 1, null, !0)
		},
		removeData: function(e) {
			return this.each(function() {
				Se.remove(this, e)
			})
		}
	}), oe.extend({
		queue: function Xt(e, t, n) {
			var Xt;
			if (e) return t = (t || "fx") + "queue", Xt = Ee.get(e, t), n && (!Xt || oe.isArray(n) ? Xt = Ee.access(e, t, oe.makeArray(n)) : Xt.push(n)), Xt || []
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = oe.queue(e, t),
				i = n.length,
				r = n.shift(),
				o = oe._queueHooks(e, t),
				a = function() {
					oe.dequeue(e, t)
				};
			"inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return Ee.get(e, n) || Ee.access(e, n, {
				empty: oe.Callbacks("once memory").add(function() {
					Ee.remove(e, [t + "queue", n])
				})
			})
		}
	}), oe.fn.extend({
		queue: function(e, t) {
			var n = 2;
			return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
				var n = oe.queue(this, e, t);
				oe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				oe.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, i = 1,
				r = oe.Deferred(),
				o = this,
				a = this.length,
				s = function() {
					--i || r.resolveWith(o, [o])
				};
			for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = Ee.get(o[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
			return s(), r.promise(t)
		}
	});
	var qe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		Ne = new RegExp("^(?:([+-])=|)(" + qe + ")([a-z%]*)$", "i"),
		je = ["Top", "Right", "Bottom", "Left"],
		_e = function(e, t) {
			return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
		},
		ze = /^(?:checkbox|radio)$/i,
		Le = /<([\w:-]+)/,
		Oe = /^$|\/(?:java|ecma)script/i,
		Fe = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	Fe.optgroup = Fe.option, Fe.tbody = Fe.tfoot = Fe.colgroup = Fe.caption = Fe.thead, Fe.th = Fe.td;
	var $e = /<|&#?\w+;/;
	! function() {
		var e = G.createDocumentFragment(),
			t = e.appendChild(G.createElement("div")),
			n = G.createElement("input");
		n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
	}();
	var He = /^key/,
		Pe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		Me = /^([^.]*)(?:\.(.+)|)/;
	oe.event = {
		global: {},
		add: function(e, t, n, i, r) {
			var o, a, s, u, l, c, f, d, p, h, g, m = Ee.get(e);
			if (m)
				for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = oe.guid++), (u = m.events) || (u = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
						return "undefined" != typeof oe && oe.event.triggered !== t.type ? oe.event.dispatch.apply(e, arguments) : void 0
					}), t = (t || "").match(xe) || [""], l = t.length; l--;) s = Me.exec(t[l]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p && (f = oe.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, f = oe.event.special[p] || {}, c = oe.extend({
					type: p,
					origType: g,
					data: i,
					handler: n,
					guid: n.guid,
					selector: r,
					needsContext: r && oe.expr.match.needsContext.test(r),
					namespace: h.join(".")
				}, o), (d = u[p]) || (d = u[p] = [], d.delegateCount = 0, f.setup && f.setup.call(e, i, h, a) !== !1 || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), oe.event.global[p] = !0)
		},
		remove: function(e, t, n, i, r) {
			var o, a, s, u, l, c, f, d, p, h, g, m = Ee.hasData(e) && Ee.get(e);
			if (m && (u = m.events)) {
				for (t = (t || "").match(xe) || [""], l = t.length; l--;)
					if (s = Me.exec(t[l]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
						for (f = oe.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, d = u[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !r && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
						a && !d.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || oe.removeEvent(e, p, m.handle), delete u[p])
					} else
						for (p in u) oe.event.remove(e, p + t[l], n, i, !0);
				oe.isEmptyObject(u) && Ee.remove(e, "handle events")
			}
		},
		dispatch: function(e) {
			e = oe.event.fix(e);
			var t, n, i, r, o, a = [],
				s = V.call(arguments),
				u = (Ee.get(this, "events") || {})[e.type] || [],
				l = oe.event.special[e.type] || {};
			if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
				for (a = oe.event.handlers.call(this, e, u), t = 0;
					(r = a[t++]) && !e.isPropagationStopped();)
					for (e.currentTarget = r.elem, n = 0;
						(o = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, i = ((oe.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
				return l.postDispatch && l.postDispatch.call(this, e), e.result
			}
		},
		handlers: function(e, t) {
			var n, i, r, o, a = [],
				s = t.delegateCount,
				u = e.target;
			if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
				for (; u !== this; u = u.parentNode || this)
					if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
						for (i = [], n = 0; n < s; n++) o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? oe(r, this).index(u) > -1 : oe.find(r, this, null, [u]).length), i[r] && i.push(o);
						i.length && a.push({
							elem: u,
							handlers: i
						})
					}
			return s < t.length && a.push({
				elem: this,
				handlers: t.slice(s)
			}), a
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, t) {
				var n, i, r, o = t.button;
				return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || G, i = n.documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
			}
		},
		fix: function(e) {
			if (e[oe.expando]) return e;
			var t, n, i, r = e.type,
				o = e,
				a = this.fixHooks[r];
			for (a || (this.fixHooks[r] = a = Pe.test(r) ? this.mouseHooks : He.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new oe.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
			return e.target || (e.target = G), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== g() && this.focus) return this.focus(), !1
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if (this === g() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					if ("checkbox" === this.type && this.click && oe.nodeName(this, "input")) return this.click(), !1
				},
				_default: function(e) {
					return oe.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
	}, oe.removeEvent = function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n)
	}, oe.Event = function(e, t) {
		return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : h) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(e, t)
	}, oe.Event.prototype = {
		constructor: oe.Event,
		isDefaultPrevented: h,
		isPropagationStopped: h,
		isImmediatePropagationStopped: h,
		isSimulated: !1,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = p, e && !this.isSimulated && e.preventDefault()
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = p, e && !this.isSimulated && e.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = p, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, oe.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, t) {
		oe.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, i = this,
					r = e.relatedTarget,
					o = e.handleObj;
				return r && (r === i || oe.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), oe.fn.extend({
		on: function(e, t, n, i) {
			return m(this, e, t, n, i)
		},
		one: function(e, t, n, i) {
			return m(this, e, t, n, i, 1)
		},
		off: function(e, t, n) {
			var i, r;
			if (e && e.preventDefault && e.handleObj) return i = e.handleObj, oe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" === ("undefined" == typeof e ? "undefined" : _typeof(e))) {
				for (r in e) this.off(r, t, e[r]);
				return this
			}
			return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = h), this.each(function() {
				oe.event.remove(this, e, n, t)
			})
		}
	});
	var Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
		Ie = /<script|<style|<link/i,
		Be = /checked\s*(?:[^=]|=\s*.checked.)/i,
		We = /^true\/(.*)/,
		Qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	oe.extend({
		htmlPrefilter: function(e) {
			return e.replace(Re, "<$1></$2>")
		},
		clone: function Yt(e, t, n) {
			var i, r, o, a, Yt = e.cloneNode(!0),
				s = oe.contains(e.ownerDocument, e);
			if (!(ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
				for (a = c(Yt), o = c(e), i = 0, r = o.length; i < r; i++) x(o[i], a[i]);
			if (t)
				if (n)
					for (o = o || c(e), a = a || c(Yt), i = 0, r = o.length; i < r; i++) b(o[i], a[i]);
				else b(e, Yt);
			return a = c(Yt, "script"), a.length > 0 && f(a, !s && c(e, "script")), Yt
		},
		cleanData: function(e) {
			for (var t, n, i, r = oe.event.special, o = 0; void 0 !== (n = e[o]); o++)
				if (ke(n)) {
					if (t = n[Ee.expando]) {
						if (t.events)
							for (i in t.events) r[i] ? oe.event.remove(n, i) : oe.removeEvent(n, i, t.handle);
						n[Ee.expando] = void 0
					}
					n[Se.expando] && (n[Se.expando] = void 0)
				}
		}
	}), oe.fn.extend({
		domManip: C,
		detach: function(e) {
			return T(this, e, !0)
		},
		remove: function(e) {
			return T(this, e)
		},
		text: function(e) {
			return Te(this, function(e) {
				return void 0 === e ? oe.text(this) : this.empty().each(function() {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function() {
			return C(this, arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = v(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function() {
			return C(this, arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = v(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return C(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return C(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (oe.cleanData(c(e, !1)), e.textContent = "");
			return this
		},
		clone: function(e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function() {
				return oe.clone(this, e, t)
			})
		},
		html: function(e) {
			return Te(this, function(e) {
				var t = this[0] || {},
					n = 0,
					i = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !Ie.test(e) && !Fe[(Le.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = oe.htmlPrefilter(e);
					try {
						for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (oe.cleanData(c(t, !1)), t.innerHTML = e);
						t = 0
					} catch (r) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = [];
			return C(this, arguments, function(t) {
				var n = this.parentNode;
				oe.inArray(this, e) < 0 && (oe.cleanData(c(this)), n && n.replaceChild(t, this))
			}, e)
		}
	}), oe.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		oe.fn[e] = function(e) {
			for (var n, i = [], r = oe(e), o = r.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), oe(r[a])[t](n), J.apply(i, n.get());
			return this.pushStack(i)
		}
	});
	var Xe, Ye = {
			HTML: "block",
			BODY: "block"
		},
		Ue = /^margin/,
		Ge = new RegExp("^(" + qe + ")(?!px)[a-z%]+$", "i"),
		Ve = function(t) {
			var n = t.ownerDocument.defaultView;
			return n && n.opener || (n = e), n.getComputedStyle(t)
		},
		Ke = function(e, t, n, i) {
			var r, o, a = {};
			for (o in t) a[o] = e.style[o], e.style[o] = t[o];
			r = n.apply(e, i || []);
			for (o in t) e.style[o] = a[o];
			return r
		},
		Je = G.documentElement;
	! function() {
		function t() {
			s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Je.appendChild(a);
			var t = e.getComputedStyle(s);
			n = "1%" !== t.top, o = "2px" === t.marginLeft, i = "4px" === t.width, s.style.marginRight = "50%", r = "4px" === t.marginRight, Je.removeChild(a)
		}
		var n, i, r, o, a = G.createElement("div"),
			s = G.createElement("div");
		s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), oe.extend(ie, {
			pixelPosition: function() {
				return t(), n
			},
			boxSizingReliable: function() {
				return null == i && t(), i
			},
			pixelMarginRight: function() {
				return null == i && t(), r
			},
			reliableMarginLeft: function() {
				return null == i && t(), o
			},
			reliableMarginRight: function() {
				var t, n = s.appendChild(G.createElement("div"));
				return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", Je.appendChild(a), t = !parseFloat(e.getComputedStyle(n).marginRight), Je.removeChild(a), s.removeChild(n), t
			}
		}))
	}();
	var Ze = /^(none|table(?!-c[ea]).+)/,
		et = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		tt = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		nt = ["Webkit", "O", "Moz", "ms"],
		it = G.createElement("div").style;
	oe.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = S(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": "cssFloat"
		},
		style: function Ut(e, t, n, i) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var r, o, a, s = oe.camelCase(t),
					Ut = e.style;
				return t = oe.cssProps[s] || (oe.cssProps[s] = D(s) || s), a = oe.cssHooks[t] || oe.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : Ut[t] : (o = "undefined" == typeof n ? "undefined" : _typeof(n), "string" === o && (r = Ne.exec(n)) && r[1] && (n = l(e, t, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (oe.cssNumber[s] ? "" : "px")), ie.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (Ut[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (Ut[t] = n)), void 0)
			}
		},
		css: function(e, t, n, i) {
			var r, o, a, s = oe.camelCase(t);
			return t = oe.cssProps[s] || (oe.cssProps[s] = D(s) || s), a = oe.cssHooks[t] || oe.cssHooks[s], a && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = S(e, t, i)), "normal" === r && t in tt && (r = tt[t]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r
		}
	}), oe.each(["height", "width"], function(e, t) {
		oe.cssHooks[t] = {
			get: function(e, n, i) {
				if (n) return Ze.test(oe.css(e, "display")) && 0 === e.offsetWidth ? Ke(e, et, function() {
					return j(e, t, i)
				}) : j(e, t, i)
			},
			set: function(e, n, i) {
				var r, o = i && Ve(e),
					a = i && N(e, t, i, "border-box" === oe.css(e, "boxSizing", !1, o), o);
				return a && (r = Ne.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = oe.css(e, t)), q(e, n, a)
			}
		}
	}), oe.cssHooks.marginLeft = A(ie.reliableMarginLeft, function(e, t) {
		if (t) return (parseFloat(S(e, "marginLeft")) || e.getBoundingClientRect().left - Ke(e, {
			marginLeft: 0
		}, function() {
			return e.getBoundingClientRect().left
		})) + "px"
	}), oe.cssHooks.marginRight = A(ie.reliableMarginRight, function(e, t) {
		if (t) return Ke(e, {
			display: "inline-block"
		}, S, [e, "marginRight"])
	}), oe.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		oe.cssHooks[e + t] = {
			expand: function(n) {
				for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + je[i] + t] = o[i] || o[i - 2] || o[0];
				return r
			}
		}, Ue.test(e) || (oe.cssHooks[e + t].set = q)
	}), oe.fn.extend({
		css: function(e, t) {
			return Te(this, function(e, t, n) {
				var i, r, o = {},
					a = 0;
				if (oe.isArray(t)) {
					for (i = Ve(e), r = t.length; a < r; a++) o[t[a]] = oe.css(e, t[a], !1, i);
					return o
				}
				return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
			}, e, t, arguments.length > 1)
		},
		show: function() {
			return _(this, !0)
		},
		hide: function() {
			return _(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				_e(this) ? oe(this).show() : oe(this).hide()
			})
		}
	}), oe.Tween = z, z.prototype = {
		constructor: z,
		init: function(e, t, n, i, r, o) {
			this.elem = e, this.prop = n, this.easing = r || oe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (oe.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = z.propHooks[this.prop];
			return e && e.get ? e.get(this) : z.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = z.propHooks[this.prop];
			return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : z.propHooks._default.set(this), this
		}
	}, z.prototype.init.prototype = z.prototype, z.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
			},
			set: function(e) {
				oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[oe.cssProps[e.prop]] && !oe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : oe.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}, z.propHooks.scrollTop = z.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, oe.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		},
		_default: "swing"
	}, oe.fx = z.prototype.init, oe.fx.step = {};
	var rt, ot, at = /^(?:toggle|show|hide)$/,
		st = /queueHooks$/;
	oe.Animation = oe.extend(P, {
			tweeners: {
				"*": [function(e, t) {
					var n = this.createTween(e, t);
					return l(n.elem, e, Ne.exec(t), n), n
				}]
			},
			tweener: function(e, t) {
				oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(xe);
				for (var n, i = 0, r = e.length; i < r; i++) n = e[i], P.tweeners[n] = P.tweeners[n] || [], P.tweeners[n].unshift(t)
			},
			prefilters: [$],
			prefilter: function(e, t) {
				t ? P.prefilters.unshift(e) : P.prefilters.push(e)
			}
		}), oe.speed = function(e, t, n) {
			var i = e && "object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) ? oe.extend({}, e) : {
				complete: n || !n && t || oe.isFunction(e) && e,
				duration: e,
				easing: n && t || t && !oe.isFunction(t) && t
			};
			return i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
				oe.isFunction(i.old) && i.old.call(this), i.queue && oe.dequeue(this, i.queue)
			}, i
		}, oe.fn.extend({
			fadeTo: function(e, t, n, i) {
				return this.filter(_e).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, i)
			},
			animate: function(e, t, n, i) {
				var r = oe.isEmptyObject(e),
					o = oe.speed(t, n, i),
					a = function() {
						var t = P(this, oe.extend({}, e), o);
						(r || Ee.get(this, "finish")) && t.stop(!0)
					};
				return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
			},
			stop: function(e, t, n) {
				var i = function(e) {
					var t = e.stop;
					delete e.stop, t(n)
				};
				return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
					var t = !0,
						r = null != e && e + "queueHooks",
						o = oe.timers,
						a = Ee.get(this);
					if (r) a[r] && a[r].stop && i(a[r]);
					else
						for (r in a) a[r] && a[r].stop && st.test(r) && i(a[r]);
					for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
					!t && n || oe.dequeue(this, e)
				})
			},
			finish: function(e) {
				return e !== !1 && (e = e || "fx"), this.each(function() {
					var t, n = Ee.get(this),
						i = n[e + "queue"],
						r = n[e + "queueHooks"],
						o = oe.timers,
						a = i ? i.length : 0;
					for (n.finish = !0, oe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
					for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
					delete n.finish
				})
			}
		}), oe.each(["toggle", "show", "hide"], function(e, t) {
			var n = oe.fn[t];
			oe.fn[t] = function(e, i, r) {
				return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(O(t, !0), e, i, r)
			}
		}), oe.each({
			slideDown: O("show"),
			slideUp: O("hide"),
			slideToggle: O("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(e, t) {
			oe.fn[e] = function(e, n, i) {
				return this.animate(t, e, n, i)
			}
		}), oe.timers = [], oe.fx.tick = function() {
			var e, t = 0,
				n = oe.timers;
			for (rt = oe.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
			n.length || oe.fx.stop(), rt = void 0
		}, oe.fx.timer = function(e) {
			oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
		}, oe.fx.interval = 13, oe.fx.start = function() {
			ot || (ot = e.setInterval(oe.fx.tick, oe.fx.interval))
		}, oe.fx.stop = function() {
			e.clearInterval(ot), ot = null
		}, oe.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, oe.fn.delay = function(t, n) {
			return t = oe.fx ? oe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
				var r = e.setTimeout(n, t);
				i.stop = function() {
					e.clearTimeout(r)
				}
			})
		},
		function() {
			var e = G.createElement("input"),
				t = G.createElement("select"),
				n = t.appendChild(G.createElement("option"));
			e.type = "checkbox", ie.checkOn = "" !== e.value, ie.optSelected = n.selected, t.disabled = !0, ie.optDisabled = !n.disabled, e = G.createElement("input"), e.value = "t", e.type = "radio", ie.radioValue = "t" === e.value
		}();
	var ut, lt = oe.expr.attrHandle;
	oe.fn.extend({
		attr: function(e, t) {
			return Te(this, oe.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				oe.removeAttr(this, e)
			})
		}
	}), oe.extend({
		attr: function(e, t, n) {
			var i, r, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? oe.prop(e, t, n) : (1 === o && oe.isXMLDoc(e) || (t = t.toLowerCase(), r = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? ut : void 0)), void 0 !== n ? null === n ? void oe.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = oe.find.attr(e, t), null == i ? void 0 : i))
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!ie.radioValue && "radio" === t && oe.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		removeAttr: function(e, t) {
			var n, i, r = 0,
				o = t && t.match(xe);
			if (o && 1 === e.nodeType)
				for (; n = o[r++];) i = oe.propFix[n] || n, oe.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
		}
	}), ut = {
		set: function(e, t, n) {
			return t === !1 ? oe.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, oe.each(oe.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var n = lt[t] || oe.find.attr;
		lt[t] = function(e, t, i) {
			var r, o;
			return i || (o = lt[t], lt[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, lt[t] = o), r
		}
	});
	var ct = /^(?:input|select|textarea|button)$/i,
		ft = /^(?:a|area)$/i;
	oe.fn.extend({
		prop: function(e, t) {
			return Te(this, oe.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return this.each(function() {
				delete this[oe.propFix[e] || e]
			})
		}
	}), oe.extend({
		prop: function(e, t, n) {
			var i, r, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return 1 === o && oe.isXMLDoc(e) || (t = oe.propFix[t] || t, r = oe.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = oe.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : ct.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	}), ie.optSelected || (oe.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		},
		set: function(e) {
			var t = e.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	}), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		oe.propFix[this.toLowerCase()] = this
	});
	var dt = /[\t\r\n\f]/g;
	oe.fn.extend({
		addClass: function(e) {
			var t, n, i, r, o, a, s, u = 0;
			if (oe.isFunction(e)) return this.each(function(t) {
				oe(this).addClass(e.call(this, t, M(this)))
			});
			if ("string" == typeof e && e)
				for (t = e.match(xe) || []; n = this[u++];)
					if (r = M(n), i = 1 === n.nodeType && (" " + r + " ").replace(dt, " ")) {
						for (a = 0; o = t[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
						s = oe.trim(i), r !== s && n.setAttribute("class", s)
					}
			return this
		},
		removeClass: function(e) {
			var t, n, i, r, o, a, s, u = 0;
			if (oe.isFunction(e)) return this.each(function(t) {
				oe(this).removeClass(e.call(this, t, M(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ("string" == typeof e && e)
				for (t = e.match(xe) || []; n = this[u++];)
					if (r = M(n), i = 1 === n.nodeType && (" " + r + " ").replace(dt, " ")) {
						for (a = 0; o = t[a++];)
							for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
						s = oe.trim(i), r !== s && n.setAttribute("class", s)
					}
			return this
		},
		toggleClass: function(e, t) {
			var n = "undefined" == typeof e ? "undefined" : _typeof(e);
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : oe.isFunction(e) ? this.each(function(n) {
				oe(this).toggleClass(e.call(this, n, M(this), t), t)
			}) : this.each(function() {
				var t, i, r, o;
				if ("string" === n)
					for (i = 0, r = oe(this), o = e.match(xe) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
				else void 0 !== e && "boolean" !== n || (t = M(this), t && Ee.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Ee.get(this, "__className__") || ""))
			})
		},
		hasClass: function(e) {
			var t, n, i = 0;
			for (t = " " + e + " "; n = this[i++];)
				if (1 === n.nodeType && (" " + M(n) + " ").replace(dt, " ").indexOf(t) > -1) return !0;
			return !1
		}
	});
	var pt = /\r/g,
		ht = /[\x20\t\r\n\f]+/g;
	oe.fn.extend({
		val: function(e) {
			var t, n, i, r = this[0]; {
				if (arguments.length) return i = oe.isFunction(e), this.each(function(n) {
					var r;
					1 === this.nodeType && (r = i ? e.call(this, n, oe(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : oe.isArray(r) && (r = oe.map(r, function(e) {
						return null == e ? "" : e + ""
					})), t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
				});
				if (r) return t = oe.valHooks[r.type] || oe.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(pt, "") : null == n ? "" : n)
			}
		}
	}), oe.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = oe.find.attr(e, "value");
					return null != t ? t : oe.trim(oe.text(e)).replace(ht, " ")
				}
			},
			select: {
				get: function(e) {
					for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, a = o ? null : [], s = o ? r + 1 : i.length, u = r < 0 ? s : o ? r : 0; u < s; u++)
						if (n = i[u], (n.selected || u === r) && (ie.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !oe.nodeName(n.parentNode, "optgroup"))) {
							if (t = oe(n).val(), o) return t;
							a.push(t)
						}
					return a
				},
				set: function(e, t) {
					for (var n, i, r = e.options, o = oe.makeArray(t), a = r.length; a--;) i = r[a], (i.selected = oe.inArray(oe.valHooks.option.get(i), o) > -1) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		}
	}), oe.each(["radio", "checkbox"], function() {
		oe.valHooks[this] = {
			set: function(e, t) {
				if (oe.isArray(t)) return e.checked = oe.inArray(oe(e).val(), t) > -1
			}
		}, ie.checkOn || (oe.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var gt = /^(?:focusinfocus|focusoutblur)$/;
	oe.extend(oe.event, {
		trigger: function(t, n, i, r) {
			var o, a, s, u, l, c, f, d = [i || G],
				p = ne.call(t, "type") ? t.type : t,
				h = ne.call(t, "namespace") ? t.namespace.split(".") : [];
			if (a = s = i = i || G, 3 !== i.nodeType && 8 !== i.nodeType && !gt.test(p + oe.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), l = p.indexOf(":") < 0 && "on" + p, t = t[oe.expando] ? t : new oe.Event(p, "object" === ("undefined" == typeof t ? "undefined" : _typeof(t)) && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : oe.makeArray(n, [t]), f = oe.event.special[p] || {}, r || !f.trigger || f.trigger.apply(i, n) !== !1)) {
				if (!r && !f.noBubble && !oe.isWindow(i)) {
					for (u = f.delegateType || p, gt.test(u + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), s = a;
					s === (i.ownerDocument || G) && d.push(s.defaultView || s.parentWindow || e)
				}
				for (o = 0;
					(a = d[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || p, c = (Ee.get(a, "events") || {})[t.type] && Ee.get(a, "handle"), c && c.apply(a, n), c = l && a[l], c && c.apply && ke(a) && (t.result = c.apply(a, n), t.result === !1 && t.preventDefault());
				return t.type = p, r || t.isDefaultPrevented() || f._default && f._default.apply(d.pop(), n) !== !1 || !ke(i) || l && oe.isFunction(i[p]) && !oe.isWindow(i) && (s = i[l], s && (i[l] = null), oe.event.triggered = p, i[p](), oe.event.triggered = void 0, s && (i[l] = s)), t.result
			}
		},
		simulate: function(e, t, n) {
			var i = oe.extend(new oe.Event, n, {
				type: e,
				isSimulated: !0
			});
			oe.event.trigger(i, null, t)
		}
	}), oe.fn.extend({
		trigger: function(e, t) {
			return this.each(function() {
				oe.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			if (n) return oe.event.trigger(e, t, n, !0)
		}
	}), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		oe.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), oe.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	}), ie.focusin = "onfocusin" in e, ie.focusin || oe.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = function(e) {
			oe.event.simulate(t, e.target, oe.event.fix(e))
		};
		oe.event.special[t] = {
			setup: function() {
				var i = this.ownerDocument || this,
					r = Ee.access(i, t);
				r || i.addEventListener(e, n, !0), Ee.access(i, t, (r || 0) + 1)
			},
			teardown: function() {
				var i = this.ownerDocument || this,
					r = Ee.access(i, t) - 1;
				r ? Ee.access(i, t, r) : (i.removeEventListener(e, n, !0), Ee.remove(i, t))
			}
		}
	});
	var mt = e.location,
		vt = oe.now(),
		yt = /\?/;
	oe.parseJSON = function(e) {
		return JSON.parse(e + "")
	}, oe.parseXML = function(t) {
		var n;
		if (!t || "string" != typeof t) return null;
		try {
			n = (new e.DOMParser).parseFromString(t, "text/xml")
		} catch (i) {
			n = void 0
		}
		return n && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t), n
	};
	var wt = /#.*$/,
		bt = /([?&])_=[^&]*/,
		xt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Ct = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Tt = /^(?:GET|HEAD)$/,
		kt = /^\/\//,
		Et = {},
		St = {},
		At = "*/".concat("*"),
		Dt = G.createElement("a");
	Dt.href = mt.href, oe.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: mt.href,
			type: "GET",
			isLocal: Ct.test(mt.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": At,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": oe.parseJSON,
				"text xml": oe.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? B(B(e, oe.ajaxSettings), t) : B(oe.ajaxSettings, e)
		},
		ajaxPrefilter: R(Et),
		ajaxTransport: R(St),
		ajax: function(t, n) {
			function i(t, n, i, s) {
				var l, f, y, w, x, T = n;
				2 !== b && (b = 2, u && e.clearTimeout(u), r = void 0, a = s || "", C.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, i && (w = W(d, C, i)), w = Q(d, w, C, l), l ? (d.ifModified && (x = C.getResponseHeader("Last-Modified"), x && (oe.lastModified[o] = x), x = C.getResponseHeader("etag"), x && (oe.etag[o] = x)), 204 === t || "HEAD" === d.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = w.state, f = w.data, y = w.error, l = !y)) : (y = T, !t && T || (T = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || T) + "", l ? g.resolveWith(p, [f, T, C]) : g.rejectWith(p, [C, T, y]), C.statusCode(v), v = void 0, c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [C, d, l ? f : y]), m.fireWith(p, [C, T]), c && (h.trigger("ajaxComplete", [C, d]), --oe.active || oe.event.trigger("ajaxStop")))
			}
			"object" === ("undefined" == typeof t ? "undefined" : _typeof(t)) && (n = t, t = void 0), n = n || {};
			var r, o, a, s, u, l, c, f, d = oe.ajaxSetup({}, n),
				p = d.context || d,
				h = d.context && (p.nodeType || p.jquery) ? oe(p) : oe.event,
				g = oe.Deferred(),
				m = oe.Callbacks("once memory"),
				v = d.statusCode || {},
				y = {},
				w = {},
				b = 0,
				x = "canceled",
				C = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (2 === b) {
							if (!s)
								for (s = {}; t = xt.exec(a);) s[t[1].toLowerCase()] = t[2];
							t = s[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === b ? a : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return b || (e = w[n] = w[n] || e, y[e] = t), this
					},
					overrideMimeType: function(e) {
						return b || (d.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e)
							if (b < 2)
								for (t in e) v[t] = [v[t], e[t]];
							else C.always(e[C.status]);
						return this
					},
					abort: function(e) {
						var t = e || x;
						return r && r.abort(t), i(0, t), this
					}
				};
			if (g.promise(C).complete = m.add, C.success = C.done, C.error = C.fail, d.url = ((t || d.url || mt.href) + "").replace(wt, "").replace(kt, mt.protocol + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = oe.trim(d.dataType || "*").toLowerCase().match(xe) || [""], null == d.crossDomain) {
				l = G.createElement("a");
				try {
					l.href = d.url, l.href = l.href, d.crossDomain = Dt.protocol + "//" + Dt.host != l.protocol + "//" + l.host
				} catch (T) {
					d.crossDomain = !0
				}
			}
			if (d.data && d.processData && "string" != typeof d.data && (d.data = oe.param(d.data, d.traditional)), I(Et, d, n, C), 2 === b) return C;
			c = oe.event && d.global, c && 0 === oe.active++ && oe.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Tt.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (yt.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = bt.test(o) ? o.replace(bt, "$1_=" + vt++) : o + (yt.test(o) ? "&" : "?") + "_=" + vt++)), d.ifModified && (oe.lastModified[o] && C.setRequestHeader("If-Modified-Since", oe.lastModified[o]), oe.etag[o] && C.setRequestHeader("If-None-Match", oe.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", d.contentType), C.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + At + "; q=0.01" : "") : d.accepts["*"]);
			for (f in d.headers) C.setRequestHeader(f, d.headers[f]);
			if (d.beforeSend && (d.beforeSend.call(p, C, d) === !1 || 2 === b)) return C.abort();
			x = "abort";
			for (f in {
					success: 1,
					error: 1,
					complete: 1
				}) C[f](d[f]);
			if (r = I(St, d, n, C)) {
				if (C.readyState = 1, c && h.trigger("ajaxSend", [C, d]), 2 === b) return C;
				d.async && d.timeout > 0 && (u = e.setTimeout(function() {
					C.abort("timeout")
				}, d.timeout));
				try {
					b = 1, r.send(y, i)
				} catch (T) {
					if (!(b < 2)) throw T;
					i(-1, T)
				}
			} else i(-1, "No Transport");
			return C
		},
		getJSON: function(e, t, n) {
			return oe.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return oe.get(e, void 0, t, "script")
		}
	}), oe.each(["get", "post"], function(e, t) {
		oe[t] = function(e, n, i, r) {
			return oe.isFunction(n) && (r = r || i, i = n, n = void 0), oe.ajax(oe.extend({
				url: e,
				type: t,
				dataType: r,
				data: n,
				success: i
			}, oe.isPlainObject(e) && e))
		}
	}), oe._evalUrl = function(e) {
		return oe.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	}, oe.fn.extend({
		wrapAll: function(e) {
			var t;
			return oe.isFunction(e) ? this.each(function(t) {
				oe(this).wrapAll(e.call(this, t))
			}) : (this[0] && (t = oe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
				for (var e = this; e.firstElementChild;) e = e.firstElementChild;
				return e
			}).append(this)), this)
		},
		wrapInner: function(e) {
			return oe.isFunction(e) ? this.each(function(t) {
				oe(this).wrapInner(e.call(this, t))
			}) : this.each(function() {
				var t = oe(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = oe.isFunction(e);
			return this.each(function(n) {
				oe(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
			}).end()
		}
	}), oe.expr.filters.hidden = function(e) {
		return !oe.expr.filters.visible(e)
	}, oe.expr.filters.visible = function(e) {
		return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
	};
	var qt = /%20/g,
		Nt = /\[\]$/,
		jt = /\r?\n/g,
		_t = /^(?:submit|button|image|reset|file)$/i,
		zt = /^(?:input|select|textarea|keygen)/i;
	oe.param = function(e, t) {
		var n, i = [],
			r = function(e, t) {
				t = oe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function() {
			r(this.name, this.value)
		});
		else
			for (n in e) X(n, e[n], t, r);
		return i.join("&").replace(qt, "+")
	}, oe.fn.extend({
		serialize: function() {
			return oe.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = oe.prop(this, "elements");
				return e ? oe.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !oe(this).is(":disabled") && zt.test(this.nodeName) && !_t.test(e) && (this.checked || !ze.test(e))
			}).map(function(e, t) {
				var n = oe(this).val();
				return null == n ? null : oe.isArray(n) ? oe.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(jt, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(jt, "\r\n")
				}
			}).get()
		}
	}), oe.ajaxSettings.xhr = function() {
		try {
			return new e.XMLHttpRequest
		} catch (t) {}
	};
	var Lt = {
			0: 200,
			1223: 204
		},
		Ot = oe.ajaxSettings.xhr();
	ie.cors = !!Ot && "withCredentials" in Ot, ie.ajax = Ot = !!Ot, oe.ajaxTransport(function(t) {
		var n, i;
		if (ie.cors || Ot && !t.crossDomain) return {
			send: function(r, o) {
				var a, s = t.xhr();
				if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
					for (a in t.xhrFields) s[a] = t.xhrFields[a];
				t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
				for (a in r) s.setRequestHeader(a, r[a]);
				n = function(e) {
					return function() {
						n && (n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Lt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
							binary: s.response
						} : {
							text: s.responseText
						}, s.getAllResponseHeaders()))
					}
				}, s.onload = n(), i = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
					4 === s.readyState && e.setTimeout(function() {
						n && i()
					})
				}, n = n("abort");
				try {
					s.send(t.hasContent && t.data || null)
				} catch (u) {
					if (n) throw u
				}
			},
			abort: function() {
				n && n()
			}
		}
	}), oe.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(e) {
				return oe.globalEval(e), e
			}
		}
	}), oe.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), oe.ajaxTransport("script", function(e) {
		if (e.crossDomain) {
			var t, n;
			return {
				send: function(i, r) {
					t = oe("<script>").prop({
						charset: e.scriptCharset,
						src: e.url
					}).on("load error", n = function(e) {
						t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
					}), G.head.appendChild(t[0])
				},
				abort: function() {
					n && n()
				}
			}
		}
	});
	var Ft = [],
		$t = /(=)\?(?=&|$)|\?\?/;
	oe.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = Ft.pop() || oe.expando + "_" + vt++;
			return this[e] = !0, e
		}
	}), oe.ajaxPrefilter("json jsonp", function(t, n, i) {
		var r, o, a, s = t.jsonp !== !1 && ($t.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && $t.test(t.data) && "data");
		if (s || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace($t, "$1" + r) : t.jsonp !== !1 && (t.url += (yt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
			return a || oe.error(r + " was not called"), a[0]
		}, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
			a = arguments
		}, i.always(function() {
			void 0 === o ? oe(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Ft.push(r)), a && oe.isFunction(o) && o(a[0]), a = o = void 0
		}), "script"
	}), oe.parseHTML = function(e, t, n) {
		if (!e || "string" != typeof e) return null;
		"boolean" == typeof t && (n = t, t = !1), t = t || G;
		var i = he.exec(e),
			r = !n && [];
		return i ? [t.createElement(i[1])] : (i = d([e], t, r), r && r.length && oe(r).remove(), oe.merge([], i.childNodes))
	};
	var Ht = oe.fn.load;
	oe.fn.load = function(e, t, n) {
		if ("string" != typeof e && Ht) return Ht.apply(this, arguments);
		var i, r, o, a = this,
			s = e.indexOf(" ");
		return s > -1 && (i = oe.trim(e.slice(s)), e = e.slice(0, s)), oe.isFunction(t) ? (n = t, t = void 0) : t && "object" === ("undefined" == typeof t ? "undefined" : _typeof(t)) && (r = "POST"), a.length > 0 && oe.ajax({
			url: e,
			type: r || "GET",
			dataType: "html",
			data: t
		}).done(function(e) {
			o = arguments, a.html(i ? oe("<div>").append(oe.parseHTML(e)).find(i) : e)
		}).always(n && function(e, t) {
			a.each(function() {
				n.apply(this, o || [e.responseText, t, e])
			})
		}), this
	}, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		oe.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), oe.expr.filters.animated = function(e) {
		return oe.grep(oe.timers, function(t) {
			return e === t.elem
		}).length
	}, oe.offset = {
		setOffset: function(e, t, n) {
			var i, r, o, a, s, u, l, c = oe.css(e, "position"),
				f = oe(e),
				d = {};
			"static" === c && (e.style.position = "relative"), s = f.offset(), o = oe.css(e, "top"), u = oe.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (i = f.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(u) || 0), oe.isFunction(t) && (t = t.call(e, n, oe.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + r), "using" in t ? t.using.call(e, d) : f.css(d)
		}
	}, oe.fn.extend({
		offset: function(e) {
			if (arguments.length) return void 0 === e ? this : this.each(function(t) {
				oe.offset.setOffset(this, e, t)
			});
			var t, n, i = this[0],
				r = {
					top: 0,
					left: 0
				},
				o = i && i.ownerDocument;
			if (o) return t = o.documentElement, oe.contains(t, i) ? (r = i.getBoundingClientRect(), n = Y(o), {
				top: r.top + n.pageYOffset - t.clientTop,
				left: r.left + n.pageXOffset - t.clientLeft
			}) : r
		},
		position: function() {
			if (this[0]) {
				var e, t, n = this[0],
					i = {
						top: 0,
						left: 0
					};
				return "fixed" === oe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (i = e.offset()), i.top += oe.css(e[0], "borderTopWidth", !0), i.left += oe.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - i.top - oe.css(n, "marginTop", !0),
					left: t.left - i.left - oe.css(n, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var e = this.offsetParent; e && "static" === oe.css(e, "position");) e = e.offsetParent;
				return e || Je
			})
		}
	}), oe.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, t) {
		var n = "pageYOffset" === t;
		oe.fn[e] = function(i) {
			return Te(this, function(e, i, r) {
				var o = Y(e);
				return void 0 === r ? o ? o[t] : e[i] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r)
			}, e, i, arguments.length)
		}
	}), oe.each(["top", "left"], function(e, t) {
		oe.cssHooks[t] = A(ie.pixelPosition, function(e, n) {
			if (n) return n = S(e, t), Ge.test(n) ? oe(e).position()[t] + "px" : n
		})
	}), oe.each({
		Height: "height",
		Width: "width"
	}, function(e, t) {
		oe.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, function(n, i) {
			oe.fn[i] = function(i, r) {
				var o = arguments.length && (n || "boolean" != typeof i),
					a = n || (i === !0 || r === !0 ? "margin" : "border");
				return Te(this, function(t, n, i) {
					var r;
					return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? oe.css(t, n, a) : oe.style(t, n, i, a)
				}, t, o ? i : void 0, o, null)
			}
		})
	}), oe.fn.extend({
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, i) {
			return this.on(t, e, n, i)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		},
		size: function() {
			return this.length
		}
	}), oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
		return oe
	});
	var Pt = e.jQuery,
		Mt = e.$;
	return oe.noConflict = function(t) {
		return e.$ === oe && (e.$ = Mt), t && e.jQuery === oe && (e.jQuery = Pt), oe
	}, t || (e.jQuery = e.$ = oe), oe
}), window.whatInput = function() {
	function e() {
		i(), r(event), g = !0, x = window.setTimeout(function() {
			g = !1
		}, 650)
	}

	function t(e) {
		g || r(e)
	}

	function n(e) {
		i(), r(e)
	}

	function i() {
		window.clearTimeout(x)
	}

	function r(e) {
		var t = a(e),
			n = b[e.type];
		if ("pointer" === n && (n = u(e)), m !== n) {
			var i = s(e),
				r = i.nodeName.toLowerCase(),
				c = "input" === r ? i.getAttribute("type") : null;
			!p.hasAttribute("data-whatinput-formtyping") && m && "keyboard" === n && "tab" !== T[t] && ("textarea" === r || "select" === r || "input" === r && v.indexOf(c) < 0) || w.indexOf(t) > -1 || o(n)
		}
		"keyboard" === n && l(t)
	}

	function o(e) {
		m = e, p.setAttribute("data-whatinput", m), C.indexOf(m) === -1 && C.push(m)
	}

	function a(e) {
		return e.keyCode ? e.keyCode : e.which
	}

	function s(e) {
		return e.target || e.srcElement
	}

	function u(e) {
		return "number" == typeof e.pointerType ? k[e.pointerType] : "pen" === e.pointerType ? "touch" : e.pointerType
	}

	function l(e) {
		h.indexOf(T[e]) === -1 && T[e] && h.push(T[e])
	}

	function c(e) {
		var t = a(e),
			n = h.indexOf(T[t]);
		n !== -1 && h.splice(n, 1)
	}

	function f() {
		p = document.body, window.PointerEvent ? (p.addEventListener("pointerdown", t), p.addEventListener("pointermove", t)) : window.MSPointerEvent ? (p.addEventListener("MSPointerDown", t), p.addEventListener("MSPointerMove", t)) : (p.addEventListener("mousedown", t), p.addEventListener("mousemove", t), "ontouchstart" in window && p.addEventListener("touchstart", e)), p.addEventListener(y, t), p.addEventListener("keydown", n), p.addEventListener("keyup", n), document.addEventListener("keyup", c)
	}

	function d() {
		return y = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll"
	}
	var p, h = [],
		g = !1,
		m = null,
		v = ["button", "checkbox", "file", "image", "radio", "reset", "submit"],
		y = d(),
		w = [16, 17, 18, 91, 93],
		b = {
			keydown: "keyboard",
			keyup: "keyboard",
			mousedown: "mouse",
			mousemove: "mouse",
			MSPointerDown: "pointer",
			MSPointerMove: "pointer",
			pointerdown: "pointer",
			pointermove: "pointer",
			touchstart: "touch"
		};
	b[d()] = "mouse";
	var x, C = [],
		T = {
			9: "tab",
			13: "enter",
			16: "shift",
			27: "esc",
			32: "space",
			37: "left",
			38: "up",
			39: "right",
			40: "down"
		},
		k = {
			2: "touch",
			3: "touch",
			4: "mouse"
		};
	return "addEventListener" in window && Array.prototype.indexOf && (document.body ? f() : document.addEventListener("DOMContentLoaded", f)), {
		ask: function() {
			return m
		},
		keys: function() {
			return h
		},
		types: function() {
			return C
		},
		set: o
	}
}();
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
	return typeof e
} : function(e) {
	return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
! function(e) {
	function t(e) {
		if (void 0 === Function.prototype.name) {
			var t = /function\s([^(]{1,})\(/,
				n = t.exec(e.toString());
			return n && n.length > 1 ? n[1].trim() : ""
		}
		return void 0 === e.prototype ? e.constructor.name : e.prototype.constructor.name
	}

	function n(e) {
		return !!/true/.test(e) || !/false/.test(e) && (isNaN(1 * e) ? e : parseFloat(e))
	}

	function i(e) {
		return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
	}
	var r = "6.2.4",
		o = {
			version: r,
			_plugins: {},
			_uuids: [],
			rtl: function() {
				return "rtl" === e("html").attr("dir")
			},
			plugin: function(e, n) {
				var r = n || t(e),
					o = i(r);
				this._plugins[o] = this[r] = e
			},
			registerPlugin: function(e, n) {
				var r = n ? i(n) : t(e.constructor).toLowerCase();
				e.uuid = this.GetYoDigits(6, r), e.$element.attr("data-" + r) || e.$element.attr("data-" + r, e.uuid), e.$element.data("zfPlugin") || e.$element.data("zfPlugin", e), e.$element.trigger("init.zf." + r), this._uuids.push(e.uuid)
			},
			unregisterPlugin: function(e) {
				var n = i(t(e.$element.data("zfPlugin").constructor));
				this._uuids.splice(this._uuids.indexOf(e.uuid), 1), e.$element.removeAttr("data-" + n).removeData("zfPlugin").trigger("destroyed.zf." + n);
				for (var r in e) e[r] = null
			},
			reInit: function(t) {
				var n = t instanceof e;
				try {
					if (n) t.each(function() {
						e(this).data("zfPlugin")._init()
					});
					else {
						var r = "undefined" == typeof t ? "undefined" : _typeof(t),
							o = this,
							a = {
								object: function(t) {
									t.forEach(function(t) {
										t = i(t), e("[data-" + t + "]").foundation("_init")
									})
								},
								string: function() {
									t = i(t), e("[data-" + t + "]").foundation("_init")
								},
								undefined: function() {
									this.object(Object.keys(o._plugins))
								}
							};
						a[r](t)
					}
				} catch (s) {
					console.error(s)
				} finally {
					return t
				}
			},
			GetYoDigits: function(e, t) {
				return e = e || 6, Math.round(Math.pow(36, e + 1) - Math.random() * Math.pow(36, e)).toString(36).slice(1) + (t ? "-" + t : "")
			},
			reflow: function(t, i) {
				"undefined" == typeof i ? i = Object.keys(this._plugins) : "string" == typeof i && (i = [i]);
				var r = this;
				e.each(i, function(i, o) {
					var a = r._plugins[o],
						s = e(t).find("[data-" + o + "]").addBack("[data-" + o + "]");
					s.each(function() {
						var t = e(this),
							i = {};
						if (t.data("zfPlugin")) return void console.warn("Tried to initialize " + o + " on an element that already has a Foundation plugin.");
						if (t.attr("data-options")) {
							t.attr("data-options").split(";").forEach(function(e, t) {
								var r = e.split(":").map(function(e) {
									return e.trim()
								});
								r[0] && (i[r[0]] = n(r[1]))
							})
						}
						try {
							t.data("zfPlugin", new a(e(this), i))
						} catch (r) {
							console.error(r)
						} finally {
							return
						}
					})
				})
			},
			getFnName: t,
			transitionend: function(e) {
				var t, n = {
						transition: "transitionend",
						WebkitTransition: "webkitTransitionEnd",
						MozTransition: "transitionend",
						OTransition: "otransitionend"
					},
					i = document.createElement("div");
				for (var r in n) "undefined" != typeof i.style[r] && (t = n[r]);
				return t ? t : (t = setTimeout(function() {
					e.triggerHandler("transitionend", [e])
				}, 1), "transitionend")
			}
		};
	o.util = {
		throttle: function(e, t) {
			var n = null;
			return function() {
				var i = this,
					r = arguments;
				null === n && (n = setTimeout(function() {
					e.apply(i, r), n = null
				}, t))
			}
		}
	};
	var a = function(n) {
		var i = "undefined" == typeof n ? "undefined" : _typeof(n),
			r = e("meta.foundation-mq"),
			a = e(".no-js");
		if (r.length || e('<meta class="foundation-mq">').appendTo(document.head), a.length && a.removeClass("no-js"), "undefined" === i) o.MediaQuery._init(), o.reflow(this);
		else {
			if ("string" !== i) throw new TypeError("We're sorry, " + i + " is not a valid parameter. You must use a string representing the method you wish to invoke.");
			var s = Array.prototype.slice.call(arguments, 1),
				u = this.data("zfPlugin");
			if (void 0 === u || void 0 === u[n]) throw new ReferenceError("We're sorry, '" + n + "' is not an available method for " + (u ? t(u) : "this element") + ".");
			1 === this.length ? u[n].apply(u, s) : this.each(function(t, i) {
				u[n].apply(e(i).data("zfPlugin"), s)
			})
		}
		return this
	};
	window.Foundation = o, e.fn.foundation = a,
		function() {
			Date.now && window.Date.now || (window.Date.now = Date.now = function() {
				return (new Date).getTime()
			});
			for (var e = ["webkit", "moz"], t = 0; t < e.length && !window.requestAnimationFrame; ++t) {
				var n = e[t];
				window.requestAnimationFrame = window[n + "RequestAnimationFrame"], window.cancelAnimationFrame = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"]
			}
			if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
				var i = 0;
				window.requestAnimationFrame = function(e) {
					var t = Date.now(),
						n = Math.max(i + 16, t);
					return setTimeout(function() {
						e(i = n)
					}, n - t)
				}, window.cancelAnimationFrame = clearTimeout
			}
			window.performance && window.performance.now || (window.performance = {
				start: Date.now(),
				now: function() {
					return Date.now() - this.start
				}
			})
		}(), Function.prototype.bind || (Function.prototype.bind = function(e) {
			if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
			var t = Array.prototype.slice.call(arguments, 1),
				n = this,
				i = function() {},
				r = function() {
					return n.apply(this instanceof i ? this : e, t.concat(Array.prototype.slice.call(arguments)))
				};
			return this.prototype && (i.prototype = this.prototype), r.prototype = new i, r
		})
}(jQuery), ! function(e) {
	function t(e, t, i, r) {
		var o, a, s, u, l = n(e);
		if (t) {
			var c = n(t);
			a = l.offset.top + l.height <= c.height + c.offset.top, o = l.offset.top >= c.offset.top, s = l.offset.left >= c.offset.left, u = l.offset.left + l.width <= c.width + c.offset.left
		} else a = l.offset.top + l.height <= l.windowDims.height + l.windowDims.offset.top, o = l.offset.top >= l.windowDims.offset.top, s = l.offset.left >= l.windowDims.offset.left, u = l.offset.left + l.width <= l.windowDims.width;
		var f = [a, o, s, u];
		return i ? s === u == !0 : r ? o === a == !0 : f.indexOf(!1) === -1
	}

	function n(e, t) {
		if (e = e.length ? e[0] : e, e === window || e === document) throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
		var n = e.getBoundingClientRect(),
			i = e.parentNode.getBoundingClientRect(),
			r = document.body.getBoundingClientRect(),
			o = window.pageYOffset,
			a = window.pageXOffset;
		return {
			width: n.width,
			height: n.height,
			offset: {
				top: n.top + o,
				left: n.left + a
			},
			parentDims: {
				width: i.width,
				height: i.height,
				offset: {
					top: i.top + o,
					left: i.left + a
				}
			},
			windowDims: {
				width: r.width,
				height: r.height,
				offset: {
					top: o,
					left: a
				}
			}
		}
	}

	function i(e, t, i, r, o, a) {
		var s = n(e),
			u = t ? n(t) : null;
		switch (i) {
			case "top":
				return {
					left: Foundation.rtl() ? u.offset.left - s.width + u.width : u.offset.left,
					top: u.offset.top - (s.height + r)
				};
			case "left":
				return {
					left: u.offset.left - (s.width + o),
					top: u.offset.top
				};
			case "right":
				return {
					left: u.offset.left + u.width + o,
					top: u.offset.top
				};
			case "center top":
				return {
					left: u.offset.left + u.width / 2 - s.width / 2,
					top: u.offset.top - (s.height + r)
				};
			case "center bottom":
				return {
					left: a ? o : u.offset.left + u.width / 2 - s.width / 2,
					top: u.offset.top + u.height + r
				};
			case "center left":
				return {
					left: u.offset.left - (s.width + o),
					top: u.offset.top + u.height / 2 - s.height / 2
				};
			case "center right":
				return {
					left: u.offset.left + u.width + o + 1,
					top: u.offset.top + u.height / 2 - s.height / 2
				};
			case "center":
				return {
					left: s.windowDims.offset.left + s.windowDims.width / 2 - s.width / 2,
					top: s.windowDims.offset.top + s.windowDims.height / 2 - s.height / 2
				};
			case "reveal":
				return {
					left: (s.windowDims.width - s.width) / 2,
					top: s.windowDims.offset.top + r
				};
			case "reveal full":
				return {
					left: s.windowDims.offset.left,
					top: s.windowDims.offset.top
				};
			case "left bottom":
				return {
					left: u.offset.left,
					top: u.offset.top + u.height
				};
			case "right bottom":
				return {
					left: u.offset.left + u.width + o - s.width,
					top: u.offset.top + u.height
				};
			default:
				return {
					left: Foundation.rtl() ? u.offset.left - s.width + u.width : u.offset.left + o,
					top: u.offset.top + u.height + r
				}
		}
	}
	Foundation.Box = {
		ImNotTouchingYou: t,
		GetDimensions: n,
		GetOffsets: i
	}
}(jQuery), ! function(e) {
	function t(e) {
		var t = {};
		for (var n in e) t[e[n]] = e[n];
		return t
	}
	var n = {
			9: "TAB",
			13: "ENTER",
			27: "ESCAPE",
			32: "SPACE",
			37: "ARROW_LEFT",
			38: "ARROW_UP",
			39: "ARROW_RIGHT",
			40: "ARROW_DOWN"
		},
		i = {},
		r = {
			keys: t(n),
			parseKey: function(e) {
				var t = n[e.which || e.keyCode] || String.fromCharCode(e.which).toUpperCase();
				return e.shiftKey && (t = "SHIFT_" + t), e.ctrlKey && (t = "CTRL_" + t), e.altKey && (t = "ALT_" + t), t
			},
			handleKey: function(t, n, r) {
				var o, a, s, u = i[n],
					l = this.parseKey(t);
				if (!u) return console.warn("Component not defined!");
				if (o = "undefined" == typeof u.ltr ? u : Foundation.rtl() ? e.extend({}, u.ltr, u.rtl) : e.extend({}, u.rtl, u.ltr), a = o[l], s = r[a], s && "function" == typeof s) {
					var c = s.apply();
					(r.handled || "function" == typeof r.handled) && r.handled(c)
				} else(r.unhandled || "function" == typeof r.unhandled) && r.unhandled()
			},
			findFocusable: function(t) {
				return t.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function() {
					return !(!e(this).is(":visible") || e(this).attr("tabindex") < 0)
				})
			},
			register: function(e, t) {
				i[e] = t
			}
		};
	Foundation.Keyboard = r
}(jQuery);
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
	return typeof e
} : function(e) {
	return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
! function(e) {
	function t(e) {
		var t = {};
		return "string" != typeof e ? t : (e = e.trim().slice(1, -1)) ? t = e.split("&").reduce(function(e, t) {
			var n = t.replace(/\+/g, " ").split("="),
				i = n[0],
				r = n[1];
			return i = decodeURIComponent(i), r = void 0 === r ? null : decodeURIComponent(r), e.hasOwnProperty(i) ? Array.isArray(e[i]) ? e[i].push(r) : e[i] = [e[i], r] : e[i] = r, e
		}, {}) : t
	}
	var n = {
		queries: [],
		current: "",
		_init: function() {
			var n, i = this,
				r = e(".foundation-mq").css("font-family");
			n = t(r);
			for (var o in n) n.hasOwnProperty(o) && i.queries.push({
				name: o,
				value: "only screen and (min-width: " + n[o] + ")"
			});
			this.current = this._getCurrentSize(), this._watcher()
		},
		atLeast: function(e) {
			var t = this.get(e);
			return !!t && window.matchMedia(t).matches
		},
		get: function(e) {
			for (var t in this.queries)
				if (this.queries.hasOwnProperty(t)) {
					var n = this.queries[t];
					if (e === n.name) return n.value
				}
			return null
		},
		_getCurrentSize: function() {
			for (var e, t = 0; t < this.queries.length; t++) {
				var n = this.queries[t];
				window.matchMedia(n.value).matches && (e = n)
			}
			return "object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) ? e.name : e
		},
		_watcher: function() {
			var t = this;
			e(window).on("resize.zf.mediaquery", function() {
				var n = t._getCurrentSize(),
					i = t.current;
				n !== i && (t.current = n, e(window).trigger("changed.zf.mediaquery", [n, i]))
			})
		}
	};
	Foundation.MediaQuery = n, window.matchMedia || (window.matchMedia = function() {
		var e = window.styleMedia || window.media;
		if (!e) {
			var t = document.createElement("style"),
				n = document.getElementsByTagName("script")[0],
				i = null;
			t.type = "text/css", t.id = "matchmediajs-test", n && n.parentNode && n.parentNode.insertBefore(t, n), i = "getComputedStyle" in window && window.getComputedStyle(t, null) || t.currentStyle, e = {
				matchMedium: function(e) {
					var n = "@media " + e + "{ #matchmediajs-test { width: 1px; } }";
					return t.styleSheet ? t.styleSheet.cssText = n : t.textContent = n, "1px" === i.width
				}
			}
		}
		return function(t) {
			return {
				matches: e.matchMedium(t || "all"),
				media: t || "all"
			}
		}
	}()), Foundation.MediaQuery = n
}(jQuery), ! function(e) {
	function t(e, t, n) {
		function i(s) {
			a || (a = window.performance.now()), o = s - a, n.apply(t), o < e ? r = window.requestAnimationFrame(i, t) : (window.cancelAnimationFrame(r), t.trigger("finished.zf.animate", [t]).triggerHandler("finished.zf.animate", [t]))
		}
		var r, o, a = null;
		r = window.requestAnimationFrame(i)
	}

	function n(t, n, o, a) {
		function s() {
			t || n.hide(), u(), a && a.apply(n)
		}

		function u() {
			n[0].style.transitionDuration = 0, n.removeClass(l + " " + c + " " + o)
		}
		if (n = e(n).eq(0), n.length) {
			var l = t ? i[0] : i[1],
				c = t ? r[0] : r[1];
			u(), n.addClass(o).css("transition", "none"), requestAnimationFrame(function() {
				n.addClass(l), t && n.show()
			}), requestAnimationFrame(function() {
				n[0].offsetWidth, n.css("transition", "").addClass(c)
			}), n.one(Foundation.transitionend(n), s)
		}
	}
	var i = ["mui-enter", "mui-leave"],
		r = ["mui-enter-active", "mui-leave-active"],
		o = {
			animateIn: function(e, t, i) {
				n(!0, e, t, i)
			},
			animateOut: function(e, t, i) {
				n(!1, e, t, i)
			}
		};
	Foundation.Move = t, Foundation.Motion = o
}(jQuery), ! function(e) {
	var t = {
		Feather: function(t) {
			var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "zf";
			t.attr("role", "menubar");
			var i = t.find("li").attr({
					role: "menuitem"
				}),
				r = "is-" + n + "-submenu",
				o = r + "-item",
				a = "is-" + n + "-submenu-parent";
			t.find("a:first").attr("tabindex", 0), i.each(function() {
				var t = e(this),
					n = t.children("ul");
				n.length && (t.addClass(a).attr({
					"aria-haspopup": !0,
					"aria-expanded": !1,
					"aria-label": t.children("a:first").text()
				}), n.addClass("submenu " + r).attr({
					"data-submenu": "",
					"aria-hidden": !0,
					role: "menu"
				})), t.parent("[data-submenu]").length && t.addClass("is-submenu-item " + o)
			})
		},
		Burn: function(e, t) {
			var n = (e.find("li").removeAttr("tabindex"), "is-" + t + "-submenu"),
				i = n + "-item",
				r = "is-" + t + "-submenu-parent";
			e.find(">li, .menu, .menu > li").removeClass(n + " " + i + " " + r + " is-submenu-item submenu is-active").removeAttr("data-submenu").css("display", "")
		}
	};
	Foundation.Nest = t
}(jQuery), ! function(e) {
	function t(e, t, n) {
		var i, r, o = this,
			a = t.duration,
			s = Object.keys(e.data())[0] || "timer",
			u = -1;
		this.isPaused = !1, this.restart = function() {
			u = -1, clearTimeout(r), this.start()
		}, this.start = function() {
			this.isPaused = !1, clearTimeout(r), u = u <= 0 ? a : u, e.data("paused", !1), i = Date.now(), r = setTimeout(function() {
				t.infinite && o.restart(), n && "function" == typeof n && n()
			}, u), e.trigger("timerstart.zf." + s)
		}, this.pause = function() {
			this.isPaused = !0, clearTimeout(r), e.data("paused", !0);
			var t = Date.now();
			u -= t - i, e.trigger("timerpaused.zf." + s)
		}
	}

	function n(t, n) {
		function i() {
			r--, 0 === r && n()
		}
		var r = t.length;
		0 === r && n(), t.each(function() {
			this.complete ? i() : "undefined" != typeof this.naturalWidth && this.naturalWidth > 0 ? i() : e(this).one("load", function() {
				i()
			})
		})
	}
	Foundation.Timer = t, Foundation.onImagesLoaded = n
}(jQuery),
function(e) {
	function t() {
		this.removeEventListener("touchmove", n), this.removeEventListener("touchend", t), l = !1
	}

	function n(n) {
		if (e.spotSwipe.preventDefault && n.preventDefault(), l) {
			var i, r = n.touches[0].pageX,
				a = (n.touches[0].pageY, o - r);
			u = (new Date).getTime() - s, Math.abs(a) >= e.spotSwipe.moveThreshold && u <= e.spotSwipe.timeThreshold && (i = a > 0 ? "left" : "right"), i && (n.preventDefault(), t.call(this), e(this).trigger("swipe", i).trigger("swipe" + i))
		}
	}

	function i(e) {
		1 == e.touches.length && (o = e.touches[0].pageX, a = e.touches[0].pageY, l = !0, s = (new Date).getTime(), this.addEventListener("touchmove", n, !1), this.addEventListener("touchend", t, !1))
	}

	function r() {
		this.addEventListener && this.addEventListener("touchstart", i, !1)
	}
	e.spotSwipe = {
		version: "1.0.0",
		enabled: "ontouchstart" in document.documentElement,
		preventDefault: !1,
		moveThreshold: 75,
		timeThreshold: 200
	};
	var o, a, s, u, l = !1;
	e.event.special.swipe = {
		setup: r
	}, e.each(["left", "up", "down", "right"], function() {
		e.event.special["swipe" + this] = {
			setup: function() {
				e(this).on("swipe", e.noop)
			}
		}
	})
}(jQuery), ! function(e) {
	e.fn.addTouch = function() {
		this.each(function(n, i) {
			e(i).bind("touchstart touchmove touchend touchcancel", function() {
				t(event)
			})
		});
		var t = function(e) {
			var t, n = e.changedTouches,
				i = n[0],
				r = {
					touchstart: "mousedown",
					touchmove: "mousemove",
					touchend: "mouseup"
				},
				o = r[e.type];
			"MouseEvent" in window && "function" == typeof window.MouseEvent ? t = new window.MouseEvent(o, {
				bubbles: !0,
				cancelable: !0,
				screenX: i.screenX,
				screenY: i.screenY,
				clientX: i.clientX,
				clientY: i.clientY
			}) : (t = document.createEvent("MouseEvent"), t.initMouseEvent(o, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null)), i.target.dispatchEvent(t)
		}
	}
}(jQuery);
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
	return typeof e
} : function(e) {
	return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
! function(e) {
	function t() {
		o(), i(), r(), n()
	}

	function n(t) {
		var n = e("[data-yeti-box]"),
			i = ["dropdown", "tooltip", "reveal"];
		if (t && ("string" == typeof t ? i.push(t) : "object" === ("undefined" == typeof t ? "undefined" : _typeof(t)) && "string" == typeof t[0] ? i.concat(t) : console.error("Plugin names must be strings")), n.length) {
			var r = i.map(function(e) {
				return "closeme.zf." + e
			}).join(" ");
			e(window).off(r).on(r, function(t, n) {
				var i = t.namespace.split(".")[0],
					r = e("[data-" + i + "]").not('[data-yeti-box="' + n + '"]');
				r.each(function() {
					var t = e(this);
					t.triggerHandler("close.zf.trigger", [t])
				})
			})
		}
	}

	function i(t) {
		var n = void 0,
			i = e("[data-resize]");
		i.length && e(window).off("resize.zf.trigger").on("resize.zf.trigger", function(r) {
			n && clearTimeout(n), n = setTimeout(function() {
				a || i.each(function() {
					e(this).triggerHandler("resizeme.zf.trigger")
				}), i.attr("data-events", "resize")
			}, t || 10)
		})
	}

	function r(t) {
		var n = void 0,
			i = e("[data-scroll]");
		i.length && e(window).off("scroll.zf.trigger").on("scroll.zf.trigger", function(r) {
			n && clearTimeout(n), n = setTimeout(function() {
				a || i.each(function() {
					e(this).triggerHandler("scrollme.zf.trigger")
				}), i.attr("data-events", "scroll")
			}, t || 10)
		})
	}

	function o() {
		if (!a) return !1;
		var t = document.querySelectorAll("[data-resize], [data-scroll], [data-mutate]"),
			n = function(t) {
				var n = e(t[0].target);
				switch (n.attr("data-events")) {
					case "resize":
						n.triggerHandler("resizeme.zf.trigger", [n]);
						break;
					case "scroll":
						n.triggerHandler("scrollme.zf.trigger", [n, window.pageYOffset]);
						break;
					default:
						return !1
				}
			};
		if (t.length)
			for (var i = 0; i <= t.length - 1; i++) {
				var r = new a(n);
				r.observe(t[i], {
					attributes: !0,
					childList: !1,
					characterData: !1,
					subtree: !1,
					attributeFilter: ["data-events"]
				})
			}
	}
	var a = function() {
			for (var e = ["WebKit", "Moz", "O", "Ms", ""], t = 0; t < e.length; t++)
				if (e[t] + "MutationObserver" in window) return window[e[t] + "MutationObserver"];
			return !1
		}(),
		s = function(t, n) {
			t.data(n).split(" ").forEach(function(i) {
				e("#" + i)["close" === n ? "trigger" : "triggerHandler"](n + ".zf.trigger", [t])
			})
		};
	e(document).on("click.zf.trigger", "[data-open]", function() {
		s(e(this), "open")
	}), e(document).on("click.zf.trigger", "[data-close]", function() {
		var t = e(this).data("close");
		t ? s(e(this), "close") : e(this).trigger("close.zf.trigger")
	}), e(document).on("click.zf.trigger", "[data-toggle]", function() {
		s(e(this), "toggle")
	}), e(document).on("close.zf.trigger", "[data-closable]", function(t) {
		t.stopPropagation();
		var n = e(this).data("closable");
		"" !== n ? Foundation.Motion.animateOut(e(this), n, function() {
			e(this).trigger("closed.zf")
		}) : e(this).fadeOut().trigger("closed.zf")
	}), e(document).on("focus.zf.trigger blur.zf.trigger", "[data-toggle-focus]", function() {
		var t = e(this).data("toggle-focus");
		e("#" + t).triggerHandler("toggle.zf.trigger", [e(this)])
	}), e(window).on("load", function() {
		t()
	}), Foundation.IHearYou = t
}(jQuery);
var _createClass = function() {
	function e(e, t) {
		for (var n = 0; n < t.length; n++) {
			var i = t[n];
			i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
		}
	}
	return function(t, n, i) {
		return n && e(t.prototype, n), i && e(t, i), t
	}
}();
! function(e) {
	var t = function() {
		function t(n, i) {
			_classCallCheck(this, t), this.$element = n, this.options = e.extend({}, t.defaults, this.$element.data(), i), this._init(), Foundation.registerPlugin(this, "Equalizer")
		}
		return _createClass(t, [{
			key: "_init",
			value: function() {
				var t = this.$element.attr("data-equalizer") || "",
					n = this.$element.find('[data-equalizer-watch="' + t + '"]');
				this.$watched = n.length ? n : this.$element.find("[data-equalizer-watch]"), this.$element.attr("data-resize", t || Foundation.GetYoDigits(6, "eq")), this.hasNested = this.$element.find("[data-equalizer]").length > 0, this.isNested = this.$element.parentsUntil(document.body, "[data-equalizer]").length > 0, this.isOn = !1, this._bindHandler = {
					onResizeMeBound: this._onResizeMe.bind(this),
					onPostEqualizedBound: this._onPostEqualized.bind(this)
				};
				var i, r = this.$element.find("img");
				this.options.equalizeOn ? (i = this._checkMQ(), e(window).on("changed.zf.mediaquery", this._checkMQ.bind(this))) : this._events(), (void 0 !== i && i === !1 || void 0 === i) && (r.length ? Foundation.onImagesLoaded(r, this._reflow.bind(this)) : this._reflow())
			}
		}, {
			key: "_pauseEvents",
			value: function() {
				this.isOn = !1, this.$element.off({
					".zf.equalizer": this._bindHandler.onPostEqualizedBound,
					"resizeme.zf.trigger": this._bindHandler.onResizeMeBound
				})
			}
		}, {
			key: "_onResizeMe",
			value: function(e) {
				this._reflow()
			}
		}, {
			key: "_onPostEqualized",
			value: function(e) {
				e.target !== this.$element[0] && this._reflow()
			}
		}, {
			key: "_events",
			value: function() {
				this._pauseEvents(), this.hasNested ? this.$element.on("postequalized.zf.equalizer", this._bindHandler.onPostEqualizedBound) : this.$element.on("resizeme.zf.trigger", this._bindHandler.onResizeMeBound), this.isOn = !0
			}
		}, {
			key: "_checkMQ",
			value: function() {
				var e = !Foundation.MediaQuery.atLeast(this.options.equalizeOn);
				return e ? this.isOn && (this._pauseEvents(), this.$watched.css("height", "auto")) : this.isOn || this._events(), e
			}
		}, {
			key: "_killswitch",
			value: function() {}
		}, {
			key: "_reflow",
			value: function() {
				return !this.options.equalizeOnStack && this._isStacked() ? (this.$watched.css("height", "auto"), !1) : void(this.options.equalizeByRow ? this.getHeightsByRow(this.applyHeightByRow.bind(this)) : this.getHeights(this.applyHeight.bind(this)))
			}
		}, {
			key: "_isStacked",
			value: function() {
				return this.$watched[0].getBoundingClientRect().top !== this.$watched[1].getBoundingClientRect().top
			}
		}, {
			key: "getHeights",
			value: function(e) {
				for (var t = [], n = 0, i = this.$watched.length; n < i; n++) this.$watched[n].style.height = "auto", t.push(this.$watched[n].offsetHeight);
				e(t)
			}
		}, {
			key: "getHeightsByRow",
			value: function(t) {
				var n = this.$watched.length ? this.$watched.first().offset().top : 0,
					i = [],
					r = 0;
				i[r] = [];
				for (var o = 0, a = this.$watched.length; o < a; o++) {
					this.$watched[o].style.height = "auto";
					var s = e(this.$watched[o]).offset().top;
					s != n && (r++, i[r] = [], n = s), i[r].push([this.$watched[o], this.$watched[o].offsetHeight])
				}
				for (var u = 0, l = i.length; u < l; u++) {
					var c = e(i[u]).map(function() {
							return this[1]
						}).get(),
						f = Math.max.apply(null, c);
					i[u].push(f)
				}
				t(i)
			}
		}, {
			key: "applyHeight",
			value: function(e) {
				var t = Math.max.apply(null, e);
				this.$element.trigger("preequalized.zf.equalizer"), this.$watched.css("height", t), this.$element.trigger("postequalized.zf.equalizer")
			}
		}, {
			key: "applyHeightByRow",
			value: function(t) {
				this.$element.trigger("preequalized.zf.equalizer");
				for (var n = 0, i = t.length; n < i; n++) {
					var r = t[n].length,
						o = t[n][r - 1];
					if (r <= 2) e(t[n][0][0]).css({
						height: "auto"
					});
					else {
						this.$element.trigger("preequalizedrow.zf.equalizer");
						for (var a = 0, s = r - 1; a < s; a++) e(t[n][a][0]).css({
							height: o
						});
						this.$element.trigger("postequalizedrow.zf.equalizer")
					}
				}
				this.$element.trigger("postequalized.zf.equalizer")
			}
		}, {
			key: "destroy",
			value: function() {
				this._pauseEvents(), this.$watched.css("height", "auto"), Foundation.unregisterPlugin(this)
			}
		}]), t
	}();
	t.defaults = {
		equalizeOnStack: !1,
		equalizeByRow: !1,
		equalizeOn: ""
	}, Foundation.plugin(t, "Equalizer")
}(jQuery);
var _createClass = function() {
	function e(e, t) {
		for (var n = 0; n < t.length; n++) {
			var i = t[n];
			i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
		}
	}
	return function(t, n, i) {
		return n && e(t.prototype, n), i && e(t, i), t
	}
}();
! function(e) {
	var t = function() {
		function t(n, i) {
			_classCallCheck(this, t), this.$element = n, this.options = e.extend({}, t.defaults, i), this.rules = [], this.currentPath = "", this._init(), this._events(), Foundation.registerPlugin(this, "Interchange")
		}
		return _createClass(t, [{
			key: "_init",
			value: function() {
				this._addBreakpoints(), this._generateRules(), this._reflow()
			}
		}, {
			key: "_events",
			value: function() {
				e(window).on("resize.zf.interchange", Foundation.util.throttle(this._reflow.bind(this), 50))
			}
		}, {
			key: "_reflow",
			value: function() {
				var e;
				for (var t in this.rules)
					if (this.rules.hasOwnProperty(t)) {
						var n = this.rules[t];
						window.matchMedia(n.query).matches && (e = n)
					}
				e && this.replace(e.path)
			}
		}, {
			key: "_addBreakpoints",
			value: function() {
				for (var e in Foundation.MediaQuery.queries)
					if (Foundation.MediaQuery.queries.hasOwnProperty(e)) {
						var n = Foundation.MediaQuery.queries[e];
						t.SPECIAL_QUERIES[n.name] = n.value
					}
			}
		}, {
			key: "_generateRules",
			value: function(e) {
				var n, i = [];
				n = this.options.rules ? this.options.rules : this.$element.data("interchange").match(/\[.*?\]/g);
				for (var r in n)
					if (n.hasOwnProperty(r)) {
						var o = n[r].slice(1, -1).split(", "),
							a = o.slice(0, -1).join(""),
							s = o[o.length - 1];
						t.SPECIAL_QUERIES[s] && (s = t.SPECIAL_QUERIES[s]), i.push({
							path: a,
							query: s
						})
					}
				this.rules = i
			}
		}, {
			key: "replace",
			value: function(t) {
				if (this.currentPath !== t) {
					var n = this,
						i = "replaced.zf.interchange";
					"IMG" === this.$element[0].nodeName ? this.$element.attr("src", t).on("load", function() {
						n.currentPath = t
					}).trigger(i) : t.match(/\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i) ? this.$element.css({
						"background-image": "url(" + t + ")"
					}).trigger(i) : e.get(t, function(r) {
						n.$element.html(r).trigger(i), e(r).foundation(), n.currentPath = t
					})
				}
			}
		}, {
			key: "destroy",
			value: function() {}
		}]), t
	}();
	t.defaults = {
		rules: null
	}, t.SPECIAL_QUERIES = {
		landscape: "screen and (orientation: landscape)",
		portrait: "screen and (orientation: portrait)",
		retina: "only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"
	}, Foundation.plugin(t, "Interchange")
}(jQuery);
var _createClass = function() {
	function e(e, t) {
		for (var n = 0; n < t.length; n++) {
			var i = t[n];
			i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
		}
	}
	return function(t, n, i) {
		return n && e(t.prototype, n), i && e(t, i), t
	}
}();
! function(e) {
	var t = function() {
		function t(n, i) {
			_classCallCheck(this, t), this.$element = n, this.options = e.extend({}, t.defaults, this.$element.data(), i), this._init(), Foundation.registerPlugin(this, "Magellan")
		}
		return _createClass(t, [{
			key: "_init",
			value: function() {
				var t = this.$element[0].id || Foundation.GetYoDigits(6, "magellan");
				this.$targets = e("[data-magellan-target]"), this.$links = this.$element.find("a"), this.$element.attr({
					"data-resize": t,
					"data-scroll": t,
					id: t
				}), this.$active = e(), this.scrollPos = parseInt(window.pageYOffset, 10), this._events()
			}
		}, {
			key: "calcPoints",
			value: function() {
				var t = this,
					n = document.body,
					i = document.documentElement;
				this.points = [], this.winHeight = Math.round(Math.max(window.innerHeight, i.clientHeight)), this.docHeight = Math.round(Math.max(n.scrollHeight, n.offsetHeight, i.clientHeight, i.scrollHeight, i.offsetHeight)), this.$targets.each(function() {
					var n = e(this),
						i = Math.round(n.offset().top - t.options.threshold);
					n.targetPoint = i, t.points.push(i)
				})
			}
		}, {
			key: "_events",
			value: function() {
				var t = this;
				e("html, body"), {
					duration: t.options.animationDuration,
					easing: t.options.animationEasing
				};
				e(window).one("load", function() {
					t.options.deepLinking && location.hash && t.scrollToLoc(location.hash), t.calcPoints(), t._updateActive()
				}), this.$element.on({
					"resizeme.zf.trigger": this.reflow.bind(this),
					"scrollme.zf.trigger": this._updateActive.bind(this)
				}).on("click.zf.magellan", 'a[href^="#"]', function(e) {
					e.preventDefault();
					var n = this.getAttribute("href");
					t.scrollToLoc(n)
				})
			}
		}, {
			key: "scrollToLoc",
			value: function(t) {
				if (!e(t).length) return !1;
				var n = Math.round(e(t).offset().top - this.options.threshold / 2 - this.options.barOffset);
				e("html, body").stop(!0).animate({
					scrollTop: n
				}, this.options.animationDuration, this.options.animationEasing)
			}
		}, {
			key: "reflow",
			value: function() {
				this.calcPoints(), this._updateActive()
			}
		}, {
			key: "_updateActive",
			value: function() {
				var e, t = parseInt(window.pageYOffset, 10);
				if (t + this.winHeight === this.docHeight) e = this.points.length - 1;
				else if (t < this.points[0]) e = 0;
				else {
					var n = this.scrollPos < t,
						i = this,
						r = this.points.filter(function(e, r) {
							return n ? e - i.options.barOffset <= t : e - i.options.barOffset - i.options.threshold <= t
						});
					e = r.length ? r.length - 1 : 0
				}
				if (this.$active.removeClass(this.options.activeClass), this.$active = this.$links.filter('[href="#' + this.$targets.eq(e).data("magellan-target") + '"]').addClass(this.options.activeClass), this.options.deepLinking) {
					var o = this.$active[0].getAttribute("href");
					window.history.pushState ? window.history.pushState(null, null, o) : window.location.hash = o
				}
				this.scrollPos = t, this.$element.trigger("update.zf.magellan", [this.$active])
			}
		}, {
			key: "destroy",
			value: function() {
				if (this.$element.off(".zf.trigger .zf.magellan").find("." + this.options.activeClass).removeClass(this.options.activeClass), this.options.deepLinking) {
					var e = this.$active[0].getAttribute("href");
					window.location.hash.replace(e, "")
				}
				Foundation.unregisterPlugin(this)
			}
		}]), t
	}();
	t.defaults = {
		animationDuration: 500,
		animationEasing: "linear",
		threshold: 50,
		activeClass: "active",
		deepLinking: !1,
		barOffset: 0
	}, Foundation.plugin(t, "Magellan")
}(jQuery);
var _createClass = function() {
	function e(e, t) {
		for (var n = 0; n < t.length; n++) {
			var i = t[n];
			i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
		}
	}
	return function(t, n, i) {
		return n && e(t.prototype, n), i && e(t, i), t
	}
}();
! function(e) {
	var t = function() {
		function t(n, i) {
			_classCallCheck(this, t), this.$element = n, this.options = e.extend({}, t.defaults, n.data(), i), this.className = "", this._init(), this._events(), Foundation.registerPlugin(this, "Toggler")
		}
		return _createClass(t, [{
			key: "_init",
			value: function() {
				var t;
				this.options.animate ? (t = this.options.animate.split(" "), this.animationIn = t[0], this.animationOut = t[1] || null) : (t = this.$element.data("toggler"), this.className = "." === t[0] ? t.slice(1) : t);
				var n = this.$element[0].id;
				e('[data-open="' + n + '"], [data-close="' + n + '"], [data-toggle="' + n + '"]').attr("aria-controls", n), this.$element.attr("aria-expanded", !this.$element.is(":hidden"))
			}
		}, {
			key: "_events",
			value: function() {
				this.$element.off("toggle.zf.trigger").on("toggle.zf.trigger", this.toggle.bind(this))
			}
		}, {
			key: "toggle",
			value: function() {
				this[this.options.animate ? "_toggleAnimate" : "_toggleClass"]()
			}
		}, {
			key: "_toggleClass",
			value: function() {
				this.$element.toggleClass(this.className);
				var e = this.$element.hasClass(this.className);
				e ? this.$element.trigger("on.zf.toggler") : this.$element.trigger("off.zf.toggler"), this._updateARIA(e)
			}
		}, {
			key: "_toggleAnimate",
			value: function() {
				var e = this;
				this.$element.is(":hidden") ? Foundation.Motion.animateIn(this.$element, this.animationIn, function() {
					e._updateARIA(!0), this.trigger("on.zf.toggler")
				}) : Foundation.Motion.animateOut(this.$element, this.animationOut, function() {
					e._updateARIA(!1), this.trigger("off.zf.toggler")
				})
			}
		}, {
			key: "_updateARIA",
			value: function(e) {
				this.$element.attr("aria-expanded", !!e)
			}
		}, {
			key: "destroy",
			value: function() {
				this.$element.off(".zf.toggler"), Foundation.unregisterPlugin(this)
			}
		}]), t
	}();
	t.defaults = {
		animate: !1
	}, Foundation.plugin(t, "Toggler")
}(jQuery);
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
	return typeof e
} : function(e) {
	return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
! function(e) {
	"function" == typeof define && define.amd ? define(["jquery"], e) : "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
	function t() {
		var t, n, i = {
			height: l.innerHeight,
			width: l.innerWidth
		};
		return i.height || (t = u.compatMode, !t && e.support.boxModel || (n = "CSS1Compat" === t ? c : u.body, i = {
			height: n.clientHeight,
			width: n.clientWidth
		})), i
	}

	function n() {
		return {
			top: l.pageYOffset || c.scrollTop || u.body.scrollTop,
			left: l.pageXOffset || c.scrollLeft || u.body.scrollLeft
		}
	}

	function i() {
		if (s.length) {
			var i = 0,
				a = e.map(s, function(e) {
					var t = e.data.selector,
						n = e.$element;
					return t ? n.find(t) : n
				});
			for (r = r || t(), o = o || n(); i < s.length; i++)
				if (e.contains(c, a[i][0])) {
					var u = e(a[i]),
						l = {
							height: u[0].offsetHeight,
							width: u[0].offsetWidth
						},
						f = u.offset(),
						d = u.data("inview");
					if (!o || !r) return;
					f.top + l.height > o.top && f.top < o.top + r.height && f.left + l.width > o.left && f.left < o.left + r.width ? d || u.data("inview", !0).trigger("inview", [!0]) : d && u.data("inview", !1).trigger("inview", [!1])
				}
		}
	}
	var r, o, a, s = [],
		u = document,
		l = window,
		c = u.documentElement;
	e.event.special.inview = {
		add: function(t) {
			s.push({
				data: t,
				$element: e(this),
				element: this
			}), !a && s.length && (a = setInterval(i, 250))
		},
		remove: function(e) {
			for (var t = 0; t < s.length; t++) {
				var n = s[t];
				if (n.element === this && n.data.guid === e.guid) {
					s.splice(t, 1);
					break
				}
			}
			s.length || (clearInterval(a), a = null)
		}
	}, e(l).on("scroll resize scrollstop", function() {
		r = o = null
	}), !c.addEventListener && c.attachEvent && c.attachEvent("onfocusin", function() {
		o = null
	})
	}), $(document).ready(function() {
	$(document).foundation(), SitePlugins.scrollTopTriggerInit(), SitePlugins.topNavigationInit(), SitePlugins.html5VideoEventListenersInit()
	});
	var SitePlugins = function(e) {

	function t() {
		var t = e("#top-section"),
			n = e("#header-video"),
			i = {
				background: 'url("/wp-content/themes/metapslinks/assets/img/backgrounds/hero.jpg") no-repeat center center',
				"background-size": "cover"
			};
		return !(n.length < 1) && void setTimeout(function() {
			var e = n[0] || n[0].paused || isNaN(n[0].duration);
			e && t.css(i)
		}, 1e3)
	}

	function n() {
		var t = e(window),
			n = e("body"),
			i = e("#topBar"),
			r = (i.find(".menu-icon"), 640);
		t.on("resize", function() {
			var e = t.width();
			e > r && i.removeClass("expanded")
		}).resize(), n.on("click touchstart", function(e) {
			i.is(e.target) || 0 !== i.has(e.target).length || i.removeClass("expanded")
		}), e(".top-bar-right").on("click.zf.magellan", function(e) {
			i.removeClass("expanded")
		}), t.on("load scroll", function() {
			t.scrollTop() > 100 ? n.addClass("scrolling") : n.removeClass("scrolling")
		})
	}

	function i() {
		var t = e(".scroll-top-trigger");
		t.length > 0 && (e(window).on("load scroll", function() {
			var n = e(this).scrollTop() > 100;
			n ? t.fadeIn("fast") : t.fadeOut("fast")
		}), t.click(function() {
			return e("html, body").animate({
				scrollTop: 0
			}, 600), !1
		}))
	}
	return {
		scrollTopTriggerInit: i,
		topNavigationInit: n,
		html5VideoEventListenersInit: t
	}

	}(jQuery);
