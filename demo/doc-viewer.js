//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), s = (e, n) => {
	let r = {};
	for (var i in e) t(r, i, {
		get: e[i],
		enumerable: !0
	});
	return n || t(r, Symbol.toStringTag, { value: "Module" }), r;
}, c = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, l = (n, r, o) => (o = n == null ? {} : e(i(n)), c(r || !n || !n.__esModule || !a.call(n, "default") ? t(o, "default", {
	value: n,
	enumerable: !0
}) : o, n)), u, d, f, p, m, h, g, _, v, y, b, x, S, C, ee, w = {}, T = [], E = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, D = Array.isArray;
function te(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}
function ne(e) {
	e && e.parentNode && e.parentNode.removeChild(e);
}
function O(e, t, n) {
	var r, i, a, o = {};
	for (a in t) a == "key" ? r = t[a] : a == "ref" ? i = t[a] : o[a] = t[a];
	if (arguments.length > 2 && (o.children = arguments.length > 3 ? u.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (a in e.defaultProps) o[a] === void 0 && (o[a] = e.defaultProps[a]);
	return k(e, o, r, i, null);
}
function k(e, t, n, r, i) {
	var a = {
		type: e,
		props: t,
		key: n,
		ref: r,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__c: null,
		constructor: void 0,
		__v: i ?? ++f,
		__i: -1,
		__u: 0
	};
	return i == null && d.vnode != null && d.vnode(a), a;
}
function A(e) {
	return e.children;
}
function re(e, t) {
	this.props = e, this.context = t;
}
function j(e, t) {
	if (t == null) return e.__ ? j(e.__, e.__i + 1) : null;
	for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
	return typeof e.type == "function" ? j(e) : null;
}
function ie(e) {
	if (e.__P && e.__d) {
		var t = e.__v, n = t.__e, r = [], i = [], a = te({}, t);
		a.__v = t.__v + 1, d.vnode && d.vnode(a), ge(e.__P, a, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, r, n ?? j(t), !!(32 & t.__u), i), a.__v = t.__v, a.__.__k[a.__i] = a, ve(r, a, i), t.__e = t.__ = null, a.__e != n && ae(a);
	}
}
function ae(e) {
	if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
		if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
	}), ae(e);
}
function oe(e) {
	(!e.__d && (e.__d = !0) && p.push(e) && !se.__r++ || m != d.debounceRendering) && ((m = d.debounceRendering) || h)(se);
}
function se() {
	try {
		for (var e, t = 1; p.length;) p.length > t && p.sort(g), e = p.shift(), t = p.length, ie(e);
	} finally {
		p.length = se.__r = 0;
	}
}
function ce(e, t, n, r, i, a, o, s, c, l, u) {
	var d, f, p, m, h, g, _ = r && r.__k || T, v = t.length;
	for (c = le(n, t, _, c, v), d = 0; d < v; d++) (p = n.__k[d]) != null && (f = p.__i != -1 && _[p.__i] || w, p.__i = d, g = ge(e, p, f, i, a, o, s, c, l, u), m = p.__e, p.ref && f.ref != p.ref && (f.ref && xe(f.ref, null, p), u.push(p.ref, p.__c || m, p)), h == null && m != null && (h = m), 4 & p.__u ? (c = ue(p, c, e), f.__e && (f.__e = null)) : typeof p.type == "function" && g !== void 0 ? c = g : m && (c = m.nextSibling), p.__u &= -7);
	return n.__e = h, c;
}
function le(e, t, n, r, i) {
	var a, o, s, c, l, u = n.length, d = u, f = 0;
	for (e.__k = Array(i), a = 0; a < i; a++) (o = t[a]) != null && typeof o != "boolean" && typeof o != "function" ? (typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? o = e.__k[a] = k(null, o, null, null, null) : D(o) ? o = e.__k[a] = k(A, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? o = e.__k[a] = k(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : e.__k[a] = o, c = a + f, o.__ = e, o.__b = e.__b + 1, s = null, (l = o.__i = fe(o, n, c, d)) != -1 && (d--, (s = n[l]) && (s.__u |= 2)), s == null || s.__v == null ? (l == -1 && (i > u ? f-- : i < u && f++), typeof o.type != "function" && (o.__u |= 4)) : l != c && (l == c - 1 ? f-- : l == c + 1 ? f++ : (l > c ? f-- : f++, o.__u |= 4))) : e.__k[a] = null;
	if (d) for (a = 0; a < u; a++) (s = n[a]) != null && !(2 & s.__u) && (s.__e == r && (r = j(s)), Se(s, s));
	return r;
}
function ue(e, t, n) {
	var r, i;
	if (typeof e.type == "function") {
		for (r = e.__k, i = 0; r && i < r.length; i++) r[i] && (r[i].__ = e, t = ue(r[i], t, n));
		return t;
	}
	e.__e != t && (t && e.type && !t.parentNode && (t = j(e)), t = n.insertBefore(e.__e, t || null));
	do
		t &&= t.nextSibling;
	while (t != null && t.nodeType == 8);
	return t;
}
function de(e, t) {
	return t ||= [], e == null || typeof e == "boolean" || (D(e) ? e.some(function(e) {
		de(e, t);
	}) : t.push(e)), t;
}
function fe(e, t, n, r) {
	var i, a, o, s = e.key, c = e.type, l = t[n], u = l != null && !(2 & l.__u);
	if (l === null && s == null || u && s == l.key && c == l.type) return n;
	if (r > +!!u) {
		for (i = n - 1, a = n + 1; i >= 0 || a < t.length;) if ((l = t[o = i >= 0 ? i-- : a++]) != null && !(2 & l.__u) && s == l.key && c == l.type) return o;
	}
	return -1;
}
function pe(e, t, n) {
	t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || E.test(t) ? n : n + "px";
}
function me(e, t, n, r, i) {
	var a, o;
	n: if (t == "style") {
		if (typeof n == "string") e.style.cssText = n;
		else {
			if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || pe(e.style, t, "");
			if (n) for (t in n) r && n[t] == r[t] || pe(e.style, t, n[t]);
		}
	} else if (t[0] == "o" && t[1] == "n") a = t != (t = t.replace(b, "$1")), o = t.toLowerCase(), t = o in e || t == "onFocusOut" || t == "onFocusIn" ? o.slice(2) : t.slice(2), e.l ||= {}, e.l[t + a] = n, n ? r ? n[y] = r[y] : (n[y] = x, e.addEventListener(t, a ? C : S, a)) : e.removeEventListener(t, a ? C : S, a);
	else {
		if (i == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
		else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
			e[t] = n ?? "";
			break n;
		} catch {}
		typeof n == "function" || (n == null || !1 === n && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
	}
}
function he(e) {
	return function(t) {
		if (this.l) {
			var n = this.l[t.type + e];
			if (t[v] == null) t[v] = x++;
			else if (t[v] < n[y]) return;
			return n(d.event ? d.event(t) : t);
		}
	};
}
function ge(e, t, n, r, i, a, o, s, c, l) {
	var u, f, p, m, h, g, _, v, y, b, x, S, C, ee, w, E, O = t.type;
	if (t.constructor !== void 0) return null;
	128 & n.__u && (c = !!(32 & n.__u), a = [s = t.__e = n.__e]), (u = d.__b) && u(t);
	n: if (typeof O == "function") {
		f = o.length;
		try {
			if (y = t.props, b = O.prototype && O.prototype.render, x = (u = O.contextType) && r[u.__c], S = u ? x ? x.props.value : u.__ : r, n.__c ? v = (p = t.__c = n.__c).__ = p.__E : (b ? t.__c = p = new O(y, S) : (t.__c = p = new re(y, S), p.constructor = O, p.render = Ce), x && x.sub(p), p.state || (p.state = {}), p.__n = r, m = p.__d = !0, p.__h = [], p._sb = []), b && p.__s == null && (p.__s = p.state), b && O.getDerivedStateFromProps != null && (p.__s == p.state && (p.__s = te({}, p.__s)), te(p.__s, O.getDerivedStateFromProps(y, p.__s))), h = p.props, g = p.state, p.__v = t, m) b && O.getDerivedStateFromProps == null && p.componentWillMount != null && p.componentWillMount(), b && p.componentDidMount != null && p.__h.push(p.componentDidMount);
			else {
				if (b && O.getDerivedStateFromProps == null && y !== h && p.componentWillReceiveProps != null && p.componentWillReceiveProps(y, S), t.__v == n.__v || !p.__e && p.shouldComponentUpdate != null && !1 === p.shouldComponentUpdate(y, p.__s, S)) {
					t.__v != n.__v && (p.props = y, p.state = p.__s, p.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(e) {
						e && (e.__ = t);
					}), T.push.apply(p.__h, p._sb), p._sb = [], p.__h.length && o.push(p), s = j(n);
					break n;
				}
				p.componentWillUpdate != null && p.componentWillUpdate(y, p.__s, S), b && p.componentDidUpdate != null && p.__h.push(function() {
					p.componentDidUpdate(h, g, _);
				});
			}
			if (p.context = S, p.props = y, p.__P = e, p.__e = !1, C = d.__r, ee = 0, b) p.state = p.__s, p.__d = !1, C && C(t), u = p.render(p.props, p.state, p.context), T.push.apply(p.__h, p._sb), p._sb = [];
			else do
				p.__d = !1, C && C(t), u = p.render(p.props, p.state, p.context), p.state = p.__s;
			while (p.__d && ++ee < 25);
			p.state = p.__s, p.getChildContext != null && (r = te(te({}, r), p.getChildContext())), b && !m && p.getSnapshotBeforeUpdate != null && (_ = p.getSnapshotBeforeUpdate(h, g)), w = u != null && u.type === A && u.key == null ? ye(u.props.children) : u, s = ce(e, D(w) ? w : [w], t, n, r, i, a, o, s, c, l), p.base = t.__e, t.__u &= -161, p.__h.length && o.push(p), v && (p.__E = p.__ = null);
		} catch (e) {
			if (o.length = f, t.__v = null, c || a != null) {
				if (e.then) {
					for (t.__u |= c ? 160 : 128; s && s.nodeType == 8 && s.nextSibling;) s = s.nextSibling;
					a != null && (a[a.indexOf(s)] = null), t.__e = s;
				} else if (a != null) for (E = a.length; E--;) ne(a[E]);
			} else t.__e = n.__e;
			t.__k ??= n.__k || [], e.then || _e(t), d.__e(e, t, n);
		}
	} else a == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : s = t.__e = be(n.__e, t, n, r, i, a, o, c, l);
	return (u = d.diffed) && u(t), 128 & t.__u ? void 0 : s;
}
function _e(e) {
	e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(_e));
}
function ve(e, t, n) {
	for (var r = 0; r < n.length; r++) xe(n[r], n[++r], n[++r]);
	d.__c && d.__c(t, e), e.some(function(t) {
		try {
			e = t.__h, t.__h = [], e.some(function(e) {
				e.call(t);
			});
		} catch (e) {
			d.__e(e, t.__v);
		}
	});
}
function ye(e) {
	return typeof e != "object" || !e || e.__b > 0 ? e : D(e) ? e.map(ye) : e.constructor === void 0 ? te({}, e) : null;
}
function be(e, t, n, r, i, a, o, s, c) {
	var l, f, p, m, h, g, _, v = n.props || w, y = t.props, b = t.type;
	if (b == "svg" ? i = "http://www.w3.org/2000/svg" : b == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i ||= "http://www.w3.org/1999/xhtml", a != null) {
		for (l = 0; l < a.length; l++) if ((h = a[l]) && "setAttribute" in h == !!b && (b ? h.localName == b : h.nodeType == 3)) {
			e = h, a[l] = null;
			break;
		}
	}
	if (e == null) {
		if (b == null) return document.createTextNode(y);
		e = document.createElementNS(i, b, y.is && y), s &&= (d.__m && d.__m(t, a), !1), a = null;
	}
	if (b == null) v === y || s && e.data == y || (e.data = y);
	else {
		if (a = b == "textarea" && y.defaultValue != null ? null : a && u.call(e.childNodes), !s && a != null) for (v = {}, l = 0; l < e.attributes.length; l++) v[(h = e.attributes[l]).name] = h.value;
		for (l in v) h = v[l], l == "dangerouslySetInnerHTML" ? p = h : l == "children" || l in y || l == "value" && "defaultValue" in y || l == "checked" && "defaultChecked" in y || me(e, l, null, h, i);
		for (l in y) h = y[l], l == "children" ? m = h : l == "dangerouslySetInnerHTML" ? f = h : l == "value" ? g = h : l == "checked" ? _ = h : s && typeof h != "function" || v[l] === h || me(e, l, h, v[l], i);
		if (f) s || p && (f.__html == p.__html || f.__html == e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
		else if (p && (e.innerHTML = ""), ce(t.type == "template" ? e.content : e, D(m) ? m : [m], t, n, r, b == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, a, o, a ? a[0] : n.__k && j(n, 0), s, c), a != null) for (l = a.length; l--;) ne(a[l]);
		s && b != "textarea" || (l = "value", b == "progress" && g == null ? e.removeAttribute("value") : g != null && (g !== e[l] || b == "progress" && !g || b == "option" && g != v[l]) && me(e, l, g, v[l], i), l = "checked", _ != null && _ != e[l] && me(e, l, _, v[l], i));
	}
	return e;
}
function xe(e, t, n) {
	try {
		if (typeof e == "function") {
			var r = typeof e.__u == "function";
			r && e.__u(), r && t == null || (e.__u = e(t));
		} else e.current = t;
	} catch (e) {
		d.__e(e, n);
	}
}
function Se(e, t, n) {
	var r, i;
	if (d.unmount && d.unmount(e), (r = e.ref) && (r.current && r.current != e.__e || xe(r, null, t)), (r = e.__c) != null) {
		if (r.componentWillUnmount) try {
			r.componentWillUnmount();
		} catch (e) {
			d.__e(e, t);
		}
		r.base = r.__P = r.__n = null;
	}
	if (r = e.__k) for (i = 0; i < r.length; i++) r[i] && Se(r[i], t, n || typeof e.type != "function");
	n || ne(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Ce(e, t, n) {
	return this.constructor(e, n);
}
function we(e, t, n) {
	var r, i, a, o;
	t == document && (t = document.documentElement), d.__ && d.__(e, t), i = (r = typeof n == "function") ? null : n && n.__k || t.__k, a = [], o = [], ge(t, e = (!r && n || t).__k = O(A, null, [e]), i || w, w, t.namespaceURI, !r && n ? [n] : i ? null : t.firstChild ? u.call(t.childNodes) : null, a, !r && n ? n : i ? i.__e : t.firstChild, r, o), ve(a, e, o), e.props.children = null;
}
function Te(e) {
	function t(e) {
		var n, r;
		return this.getChildContext || (n = /* @__PURE__ */ new Set(), (r = {})[t.__c] = this, this.getChildContext = function() {
			return r;
		}, this.componentWillUnmount = function() {
			n = null;
		}, this.shouldComponentUpdate = function(e) {
			this.props.value != e.value && n.forEach(function(e) {
				e.__e = !0, oe(e);
			});
		}, this.sub = function(e) {
			n.add(e);
			var t = e.componentWillUnmount;
			e.componentWillUnmount = function() {
				n && n.delete(e), t && t.call(e);
			};
		}), e.children;
	}
	return t.__c = "__cC" + ee++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(e, t) {
		return e.children(t);
	}).contextType = t, t;
}
u = T.slice, d = { __e: function(e, t, n, r) {
	for (var i, a, o; t = t.__;) if ((i = t.__c) && !i.__) try {
		if ((a = i.constructor) && a.getDerivedStateFromError != null && (i.setState(a.getDerivedStateFromError(e)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, r || {}), o = i.__d), o) return i.__E = i;
	} catch (t) {
		e = t;
	}
	throw e;
} }, f = 0, re.prototype.setState = function(e, t) {
	var n = this.__s != null && this.__s != this.state ? this.__s : this.__s = te({}, this.state);
	typeof e == "function" && (e = e(te({}, n), this.props)), e && te(n, e), e != null && this.__v && (t && this._sb.push(t), oe(this));
}, re.prototype.forceUpdate = function(e) {
	this.__v && (this.__e = !0, e && this.__h.push(e), oe(this));
}, re.prototype.render = A, p = [], h = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g = function(e, t) {
	return e.__v.__b - t.__v.__b;
}, se.__r = 0, _ = Math.random().toString(8), v = "__d" + _, y = "__a" + _, b = /(PointerCapture)$|Capture$/i, x = 0, S = he(!1), C = he(!0), ee = 0;
//#endregion
//#region node_modules/fflate/esm/browser.js
var Ee = Uint8Array, De = Uint16Array, Oe = Int32Array, ke = new Ee([
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	1,
	1,
	1,
	1,
	2,
	2,
	2,
	2,
	3,
	3,
	3,
	3,
	4,
	4,
	4,
	4,
	5,
	5,
	5,
	5,
	0,
	0,
	0,
	0
]), Ae = new Ee([
	0,
	0,
	0,
	0,
	1,
	1,
	2,
	2,
	3,
	3,
	4,
	4,
	5,
	5,
	6,
	6,
	7,
	7,
	8,
	8,
	9,
	9,
	10,
	10,
	11,
	11,
	12,
	12,
	13,
	13,
	0,
	0
]), je = new Ee([
	16,
	17,
	18,
	0,
	8,
	7,
	9,
	6,
	10,
	5,
	11,
	4,
	12,
	3,
	13,
	2,
	14,
	1,
	15
]), Me = function(e, t) {
	for (var n = new De(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1];
	for (var i = new Oe(n[30]), r = 1; r < 30; ++r) for (var a = n[r]; a < n[r + 1]; ++a) i[a] = a - n[r] << 5 | r;
	return {
		b: n,
		r: i
	};
}, Ne = Me(ke, 2), Pe = Ne.b, Fe = Ne.r;
Pe[28] = 258, Fe[258] = 28;
var Ie = Me(Ae, 0), Le = Ie.b;
Ie.r;
for (var Re = new De(32768), M = 0; M < 32768; ++M) {
	var ze = (M & 43690) >> 1 | (M & 21845) << 1;
	ze = (ze & 52428) >> 2 | (ze & 13107) << 2, ze = (ze & 61680) >> 4 | (ze & 3855) << 4, Re[M] = ((ze & 65280) >> 8 | (ze & 255) << 8) >> 1;
}
for (var Be = (function(e, t, n) {
	for (var r = e.length, i = 0, a = new De(t); i < r; ++i) e[i] && ++a[e[i] - 1];
	var o = new De(t);
	for (i = 1; i < t; ++i) o[i] = o[i - 1] + a[i - 1] << 1;
	var s;
	if (n) {
		s = new De(1 << t);
		var c = 15 - t;
		for (i = 0; i < r; ++i) if (e[i]) for (var l = i << 4 | e[i], u = t - e[i], d = o[e[i] - 1]++ << u, f = d | (1 << u) - 1; d <= f; ++d) s[Re[d] >> c] = l;
	} else for (s = new De(r), i = 0; i < r; ++i) e[i] && (s[i] = Re[o[e[i] - 1]++] >> 15 - e[i]);
	return s;
}), Ve = new Ee(288), M = 0; M < 144; ++M) Ve[M] = 8;
for (var M = 144; M < 256; ++M) Ve[M] = 9;
for (var M = 256; M < 280; ++M) Ve[M] = 7;
for (var M = 280; M < 288; ++M) Ve[M] = 8;
for (var He = new Ee(32), M = 0; M < 32; ++M) He[M] = 5;
var Ue = /*#__PURE__*/ Be(Ve, 9, 1), We = /*#__PURE__*/ Be(He, 5, 1), Ge = function(e) {
	for (var t = e[0], n = 1; n < e.length; ++n) e[n] > t && (t = e[n]);
	return t;
}, Ke = function(e, t, n) {
	var r = t / 8 | 0;
	return (e[r] | e[r + 1] << 8) >> (t & 7) & n;
}, qe = function(e, t) {
	var n = t / 8 | 0;
	return (e[n] | e[n + 1] << 8 | e[n + 2] << 16) >> (t & 7);
}, Je = function(e) {
	return (e + 7) / 8 | 0;
}, Ye = function(e, t, n) {
	return (t == null || t < 0) && (t = 0), (n == null || n > e.length) && (n = e.length), new Ee(e.subarray(t, n));
}, Xe = [
	"unexpected EOF",
	"invalid block type",
	"invalid length/literal",
	"invalid distance",
	"stream finished",
	"no stream handler",
	,
	"no callback",
	"invalid UTF-8 data",
	"extra field too long",
	"date not in range 1980-2099",
	"filename too long",
	"stream finishing",
	"invalid zip data"
], Ze = function(e, t, n) {
	var r = Error(t || Xe[e]);
	if (r.code = e, Error.captureStackTrace && Error.captureStackTrace(r, Ze), !n) throw r;
	return r;
}, Qe = function(e, t, n, r) {
	var i = e.length, a = r ? r.length : 0;
	if (!i || t.f && !t.l) return n || new Ee(0);
	var o = !n, s = o || t.i != 2, c = t.i;
	o && (n = new Ee(i * 3));
	var l = function(e) {
		var t = n.length;
		if (e > t) {
			var r = new Ee(Math.max(t * 2, e));
			r.set(n), n = r;
		}
	}, u = t.f || 0, d = t.p || 0, f = t.b || 0, p = t.l, m = t.d, h = t.m, g = t.n, _ = i * 8;
	do {
		if (!p) {
			u = Ke(e, d, 1);
			var v = Ke(e, d + 1, 3);
			if (d += 3, !v) {
				var y = Je(d) + 4, b = e[y - 4] | e[y - 3] << 8, x = y + b;
				if (x > i) {
					c && Ze(0);
					break;
				}
				s && l(f + b), n.set(e.subarray(y, x), f), t.b = f += b, t.p = d = x * 8, t.f = u;
				continue;
			}
			if (v == 1) p = Ue, m = We, h = 9, g = 5;
			else if (v == 2) {
				var S = Ke(e, d, 31) + 257, C = Ke(e, d + 10, 15) + 4, ee = S + Ke(e, d + 5, 31) + 1;
				d += 14;
				for (var w = new Ee(ee), T = new Ee(19), E = 0; E < C; ++E) T[je[E]] = Ke(e, d + E * 3, 7);
				d += C * 3;
				for (var D = Ge(T), te = (1 << D) - 1, ne = Be(T, D, 1), E = 0; E < ee;) {
					var O = ne[Ke(e, d, te)];
					d += O & 15;
					var y = O >> 4;
					if (y < 16) w[E++] = y;
					else {
						var k = 0, A = 0;
						for (y == 16 ? (A = 3 + Ke(e, d, 3), d += 2, k = w[E - 1]) : y == 17 ? (A = 3 + Ke(e, d, 7), d += 3) : y == 18 && (A = 11 + Ke(e, d, 127), d += 7); A--;) w[E++] = k;
					}
				}
				var re = w.subarray(0, S), j = w.subarray(S);
				h = Ge(re), g = Ge(j), p = Be(re, h, 1), m = Be(j, g, 1);
			} else Ze(1);
			if (d > _) {
				c && Ze(0);
				break;
			}
		}
		s && l(f + 131072);
		for (var ie = (1 << h) - 1, ae = (1 << g) - 1, oe = d;; oe = d) {
			var k = p[qe(e, d) & ie], se = k >> 4;
			if (d += k & 15, d > _) {
				c && Ze(0);
				break;
			}
			if (k || Ze(2), se < 256) n[f++] = se;
			else if (se == 256) {
				oe = d, p = null;
				break;
			} else {
				var ce = se - 254;
				if (se > 264) {
					var E = se - 257, le = ke[E];
					ce = Ke(e, d, (1 << le) - 1) + Pe[E], d += le;
				}
				var ue = m[qe(e, d) & ae], de = ue >> 4;
				ue || Ze(3), d += ue & 15;
				var j = Le[de];
				if (de > 3) {
					var le = Ae[de];
					j += qe(e, d) & (1 << le) - 1, d += le;
				}
				if (d > _) {
					c && Ze(0);
					break;
				}
				s && l(f + 131072);
				var fe = f + ce;
				if (f < j) {
					var pe = a - j, me = Math.min(j, fe);
					for (pe + f < 0 && Ze(3); f < me; ++f) n[f] = r[pe + f];
				}
				for (; f < fe; ++f) n[f] = n[f - j];
			}
		}
		t.l = p, t.p = oe, t.b = f, t.f = u, p && (u = 1, t.m = h, t.d = m, t.n = g);
	} while (!u);
	return f != n.length && o ? Ye(n, 0, f) : n.subarray(0, f);
}, $e = /*#__PURE__*/ new Ee(0), et = function(e, t) {
	return e[t] | e[t + 1] << 8;
}, tt = function(e, t) {
	return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0;
}, nt = function(e, t) {
	return tt(e, t) + tt(e, t + 4) * 4294967296;
};
function rt(e, t) {
	return Qe(e, { i: 2 }, t && t.out, t && t.dictionary);
}
var it = typeof TextDecoder < "u" && /*#__PURE__*/ new TextDecoder();
try {
	it.decode($e, { stream: !0 });
} catch {}
var at = function(e) {
	for (var t = "", n = 0;;) {
		var r = e[n++], i = (r > 127) + (r > 223) + (r > 239);
		if (n + i > e.length) return {
			s: t,
			r: Ye(e, n - 1)
		};
		i ? i == 3 ? (r = ((r & 15) << 18 | (e[n++] & 63) << 12 | (e[n++] & 63) << 6 | e[n++] & 63) - 65536, t += String.fromCharCode(55296 | r >> 10, 56320 | r & 1023)) : i & 1 ? t += String.fromCharCode((r & 31) << 6 | e[n++] & 63) : t += String.fromCharCode((r & 15) << 12 | (e[n++] & 63) << 6 | e[n++] & 63) : t += String.fromCharCode(r);
	}
};
function ot(e, t) {
	if (t) {
		for (var n = "", r = 0; r < e.length; r += 16384) n += String.fromCharCode.apply(null, e.subarray(r, r + 16384));
		return n;
	}
	if (it) return it.decode(e);
	var i = at(e), a = i.s, n = i.r;
	return n.length && Ze(8), a;
}
var st = function(e, t) {
	return t + 30 + et(e, t + 26) + et(e, t + 28);
}, ct = function(e, t, n) {
	var r = et(e, t + 28), i = et(e, t + 30), a = ot(e.subarray(t + 46, t + 46 + r), !(et(e, t + 8) & 2048)), o = t + 46 + r, s = lt(e, o, i, n, tt(e, t + 20), tt(e, t + 24), tt(e, t + 42)), c = s[0], l = s[1], u = s[2];
	return [
		et(e, t + 10),
		c,
		l,
		a,
		o + i + et(e, t + 32),
		u
	];
}, lt = function(e, t, n, r, i, a, o) {
	var s = i == 4294967295, c = a == 4294967295, l = o == 4294967295, u = t + n, d = s + c + l;
	if (r && d) {
		for (; t + 4 < u; t += 4 + et(e, t + 2)) if (et(e, t) == 1) return [
			s ? nt(e, t + 4 + 8 * c) : i,
			c ? nt(e, t + 4) : a,
			l ? nt(e, t + 4 + 8 * (c + s)) : o,
			1
		];
		r < 2 && Ze(13);
	}
	return [
		i,
		a,
		o,
		0
	];
};
function ut(e, t) {
	for (var n = {}, r = e.length - 22; tt(e, r) != 101010256; --r) (!r || e.length - r > 65558) && Ze(13);
	var i = et(e, r + 8);
	if (!i) return {};
	var a = tt(e, r + 16), o = tt(e, r - 20) == 117853008;
	if (o) {
		var s = tt(e, r - 12);
		o = tt(e, s) == 101075792, o && (i = tt(e, s + 32), a = tt(e, s + 48));
	}
	for (var c = t && t.filter, l = 0; l < i; ++l) {
		var u = ct(e, a, o), d = u[0], f = u[1], p = u[2], m = u[3], h = u[4], g = u[5], _ = st(e, g);
		a = h, (!c || c({
			name: m,
			size: f,
			originalSize: p,
			compression: d
		})) && (d ? d == 8 ? n[m] = rt(e.subarray(_, _ + f), { out: new Ee(p) }) : Ze(14, "unknown compression type " + d) : n[m] = Ye(e, _, _ + f));
	}
	return n;
}
//#endregion
//#region src/lib/unzip.ts
var dt = {
	maxFileBytes: 524288,
	maxTotalBytes: 2097152,
	maxFiles: 100
};
function ft(e) {
	return /\.(md|markdown)$/i.test(e) ? "markdown" : "text";
}
function pt(e) {
	return !e || e.startsWith("/") || e.includes("\\") || e.includes("\0") ? !1 : e.split("/").every((e) => e !== "" && e !== ".." && e !== ".");
}
function mt(e) {
	return e.startsWith("__MACOSX/") || (e.split("/").pop() ?? "").startsWith("._");
}
function ht(e) {
	let t = (e) => {
		let t = e.path.toLowerCase().split("/").pop(), n = e.path.split("/").length;
		return t === "skill.md" ? n : t === "readme.md" ? 100 + n : 1e3;
	};
	return [...e].sort((e, n) => t(e) - t(n) || e.path.localeCompare(n.path));
}
function gt(e) {
	let t = [], n = ut(e, { filter: (e) => e.name.endsWith("/") ? !1 : mt(e.name) ? (t.push({
		reason: "junk",
		path: e.name
	}), !1) : pt(e.name) ? e.originalSize > dt.maxFileBytes ? (t.push({
		reason: "too-large",
		path: e.name
	}), !1) : !0 : (t.push({
		reason: "unsafe-path",
		path: e.name
	}), !1) }), r = [], i = 0;
	for (let [e, a] of Object.entries(n)) {
		if (a.byteLength > dt.maxFileBytes) {
			t.push({
				reason: "too-large",
				path: e
			});
			continue;
		}
		if (a.includes(0)) {
			t.push({
				reason: "binary",
				path: e
			});
			continue;
		}
		if (i += a.byteLength, r.length >= dt.maxFiles || i > dt.maxTotalBytes) {
			t.push({
				reason: "limit",
				path: e
			});
			break;
		}
		r.push({
			path: e,
			kind: ft(e),
			source: ot(a)
		});
	}
	return {
		files: ht(r),
		warnings: t
	};
}
//#endregion
//#region src/lib/loader.ts
function _t(e) {
	return e.length >= 4 && e[0] === 80 && e[1] === 75 && (e[2] === 3 || e[2] === 5 || e[2] === 7);
}
async function vt(e) {
	return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(await e.arrayBuffer());
}
function yt(e) {
	try {
		let t = new URL(e, "http://localhost/").pathname.split("/").pop() ?? "", n = decodeURIComponent(t);
		return /\.[A-Za-z0-9]+$/.test(n) ? n : "document.md";
	} catch {
		return "document.md";
	}
}
async function bt(e, t) {
	let n = await t(e);
	if (!n.ok) throw Error(`HTTP ${n.status}`);
	let r = new Uint8Array(await n.arrayBuffer()), i = n.headers.get("content-type") ?? "", a = yt(e);
	if (/\.zip$/i.test(a) || /zip/i.test(i) || _t(r)) return gt(r);
	let o = new TextDecoder("utf-8").decode(r).slice(0, dt.maxFileBytes);
	return {
		files: [{
			path: a,
			kind: ft(a),
			source: o
		}],
		warnings: []
	};
}
async function xt(e, t = fetch) {
	if (e.files) return {
		files: e.files,
		warnings: []
	};
	if (e.zip) return gt(await vt(e.zip));
	if (e.fetcher) {
		let t = await e.fetcher();
		return Array.isArray(t) ? {
			files: t,
			warnings: []
		} : gt(await vt(t));
	}
	return e.src ? bt(e.src, t) : {
		files: [],
		warnings: []
	};
}
//#endregion
//#region src/styles/viewer.css?inline
var St = "/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */\n@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-content:\"\"}}}@layer theme{:root,:host{--font-sans:var(--docviewer-font);--font-mono:var(--docviewer-mono);--spacing:.25rem;--container-md:28rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-surface-2:var(--docviewer-bg-subtle);--color-surface:var(--docviewer-bg);--color-border:var(--docviewer-border);--color-ink:var(--docviewer-fg);--color-ink-secondary:var(--docviewer-fg-secondary);--color-ink-muted:var(--docviewer-fg-muted);--color-signal:var(--docviewer-accent);--color-signal-ring:var(--docviewer-accent-ring);--color-danger:var(--docviewer-danger);--font-display:var(--docviewer-font)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)){outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}*,:after,:before,::backdrop{border-color:var(--color-border)}::file-selector-button{border-color:var(--color-border)}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.sticky{position:sticky}.inset-x-0{inset-inline:0}.inset-x-3{inset-inline:calc(var(--spacing) * 3)}.top-1\\/2{top:50%}.top-4{top:calc(var(--spacing) * 4)}.top-12{top:calc(var(--spacing) * 12)}.bottom-0{bottom:0}.left-3{left:calc(var(--spacing) * 3)}.z-20{z-index:20}.m-0{margin:0}.prose{color:var(--tw-prose-body);max-width:65ch}.prose :where(p):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em;margin-bottom:1.25em}.prose :where([class~=lead]):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-lead);margin-top:1.2em;margin-bottom:1.2em;font-size:1.25em;line-height:1.6}.prose :where(a):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-links);font-weight:500;text-decoration:underline}.prose :where(strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-bold);font-weight:600}.prose :where(a strong):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(blockquote strong):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(thead th strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(ol):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em;margin-bottom:1.25em;padding-inline-start:1.625em;list-style-type:decimal}.prose :where(ol[type=A]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:upper-alpha}.prose :where(ol[type=a]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:lower-alpha}.prose :where(ol[type=A s]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:upper-alpha}.prose :where(ol[type=a s]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:lower-alpha}.prose :where(ol[type=I]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:upper-roman}.prose :where(ol[type=i]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:lower-roman}.prose :where(ol[type=I s]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:upper-roman}.prose :where(ol[type=i s]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:lower-roman}.prose :where(ol[type=\"1\"]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:decimal}.prose :where(ul):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em;margin-bottom:1.25em;padding-inline-start:1.625em;list-style-type:disc}.prose :where(ol>li):not(:where([class~=not-prose],[class~=not-prose] *))::marker{color:var(--tw-prose-counters);font-weight:400}.prose :where(ul>li):not(:where([class~=not-prose],[class~=not-prose] *))::marker{color:var(--tw-prose-bullets)}.prose :where(dt):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);margin-top:1.25em;font-weight:600}.prose :where(hr):not(:where([class~=not-prose],[class~=not-prose] *)){border-color:var(--tw-prose-hr);border-top-width:1px;margin-top:3em;margin-bottom:3em}.prose :where(blockquote):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-quotes);border-inline-start-width:.25rem;border-inline-start-color:var(--tw-prose-quote-borders);quotes:\"“\"\"”\"\"‘\"\"’\";margin-top:1.6em;margin-bottom:1.6em;padding-inline-start:1em;font-style:italic;font-weight:500}.prose :where(blockquote p:first-of-type):not(:where([class~=not-prose],[class~=not-prose] *)):before{content:open-quote}.prose :where(blockquote p:last-of-type):not(:where([class~=not-prose],[class~=not-prose] *)):after{content:close-quote}.prose :where(h1):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);margin-top:0;margin-bottom:.888889em;font-size:2.25em;font-weight:800;line-height:1.11111}.prose :where(h1 strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-weight:900}.prose :where(h2):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);margin-top:2em;margin-bottom:1em;font-size:1.5em;font-weight:700;line-height:1.33333}.prose :where(h2 strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-weight:800}.prose :where(h3):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);margin-top:1.6em;margin-bottom:.6em;font-size:1.25em;font-weight:600;line-height:1.6}.prose :where(h3 strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-weight:700}.prose :where(h4):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);margin-top:1.5em;margin-bottom:.5em;font-weight:600;line-height:1.5}.prose :where(h4 strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-weight:700}.prose :where(img):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2em;margin-bottom:2em}.prose :where(picture):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2em;margin-bottom:2em;display:block}.prose :where(video):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2em;margin-bottom:2em}.prose :where(kbd):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-kbd);box-shadow:0 0 0 1px var(--tw-prose-kbd-shadows), 0 3px 0 var(--tw-prose-kbd-shadows);padding-top:.1875em;padding-inline-end:.375em;padding-bottom:.1875em;border-radius:.3125rem;padding-inline-start:.375em;font-family:inherit;font-size:.875em;font-weight:500}.prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-code);font-size:.875em;font-weight:600}.prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)):before,.prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)):after{content:\"`\"}.prose :where(a code):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(h1 code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(h2 code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-size:.875em}.prose :where(h3 code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-size:.9em}.prose :where(h4 code):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(blockquote code):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(thead th code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(pre):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-pre-code);background-color:var(--tw-prose-pre-bg);padding-top:.857143em;padding-inline-end:1.14286em;padding-bottom:.857143em;border-radius:.375rem;margin-top:1.71429em;margin-bottom:1.71429em;padding-inline-start:1.14286em;font-size:.875em;font-weight:400;line-height:1.71429;overflow-x:auto}.prose :where(pre code):not(:where([class~=not-prose],[class~=not-prose] *)){font-weight:inherit;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit;background-color:#0000;border-width:0;border-radius:0;padding:0}.prose :where(pre code):not(:where([class~=not-prose],[class~=not-prose] *)):before,.prose :where(pre code):not(:where([class~=not-prose],[class~=not-prose] *)):after{content:none}.prose :where(table):not(:where([class~=not-prose],[class~=not-prose] *)){table-layout:auto;width:100%;margin-top:2em;margin-bottom:2em;font-size:.875em;line-height:1.71429}.prose :where(thead):not(:where([class~=not-prose],[class~=not-prose] *)){border-bottom-width:1px;border-bottom-color:var(--tw-prose-th-borders)}.prose :where(thead th):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);vertical-align:bottom;padding-inline-end:.571429em;padding-bottom:.571429em;padding-inline-start:.571429em;font-weight:600}.prose :where(tbody tr):not(:where([class~=not-prose],[class~=not-prose] *)){border-bottom-width:1px;border-bottom-color:var(--tw-prose-td-borders)}.prose :where(tbody tr:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){border-bottom-width:0}.prose :where(tbody td):not(:where([class~=not-prose],[class~=not-prose] *)){vertical-align:baseline}.prose :where(tfoot):not(:where([class~=not-prose],[class~=not-prose] *)){border-top-width:1px;border-top-color:var(--tw-prose-th-borders)}.prose :where(tfoot td):not(:where([class~=not-prose],[class~=not-prose] *)){vertical-align:top}.prose :where(th,td):not(:where([class~=not-prose],[class~=not-prose] *)){text-align:start}.prose :where(figure>*):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0;margin-bottom:0}.prose :where(figcaption):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-captions);margin-top:.857143em;font-size:.875em;line-height:1.42857}.prose{--tw-prose-body:oklch(37.3% .034 259.733);--tw-prose-headings:oklch(21% .034 264.665);--tw-prose-lead:oklch(44.6% .03 256.802);--tw-prose-links:oklch(21% .034 264.665);--tw-prose-bold:oklch(21% .034 264.665);--tw-prose-counters:oklch(55.1% .027 264.364);--tw-prose-bullets:oklch(87.2% .01 258.338);--tw-prose-hr:oklch(92.8% .006 264.531);--tw-prose-quotes:oklch(21% .034 264.665);--tw-prose-quote-borders:oklch(92.8% .006 264.531);--tw-prose-captions:oklch(55.1% .027 264.364);--tw-prose-kbd:oklch(21% .034 264.665);--tw-prose-kbd-shadows:oklab(21% -.00316127 -.0338527/.1);--tw-prose-code:oklch(21% .034 264.665);--tw-prose-pre-code:oklch(92.8% .006 264.531);--tw-prose-pre-bg:oklch(27.8% .033 256.848);--tw-prose-th-borders:oklch(87.2% .01 258.338);--tw-prose-td-borders:oklch(92.8% .006 264.531);--tw-prose-invert-body:oklch(87.2% .01 258.338);--tw-prose-invert-headings:#fff;--tw-prose-invert-lead:oklch(70.7% .022 261.325);--tw-prose-invert-links:#fff;--tw-prose-invert-bold:#fff;--tw-prose-invert-counters:oklch(70.7% .022 261.325);--tw-prose-invert-bullets:oklch(44.6% .03 256.802);--tw-prose-invert-hr:oklch(37.3% .034 259.733);--tw-prose-invert-quotes:oklch(96.7% .003 264.542);--tw-prose-invert-quote-borders:oklch(37.3% .034 259.733);--tw-prose-invert-captions:oklch(70.7% .022 261.325);--tw-prose-invert-kbd:#fff;--tw-prose-invert-kbd-shadows:#ffffff1a;--tw-prose-invert-code:#fff;--tw-prose-invert-pre-code:oklch(87.2% .01 258.338);--tw-prose-invert-pre-bg:#00000080;--tw-prose-invert-th-borders:oklch(44.6% .03 256.802);--tw-prose-invert-td-borders:oklch(37.3% .034 259.733);font-size:1rem;line-height:1.75}.prose :where(picture>img):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0;margin-bottom:0}.prose :where(li):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.5em;margin-bottom:.5em}.prose :where(ol>li):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(ul>li):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:.375em}.prose :where(.prose>ul>li p):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.75em;margin-bottom:.75em}.prose :where(.prose>ul>li>p:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em}.prose :where(.prose>ul>li>p:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:1.25em}.prose :where(.prose>ol>li>p:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em}.prose :where(.prose>ol>li>p:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:1.25em}.prose :where(ul ul,ul ol,ol ul,ol ol):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.75em;margin-bottom:.75em}.prose :where(dl):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em;margin-bottom:1.25em}.prose :where(dd):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.5em;padding-inline-start:1.625em}.prose :where(hr+*):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(h2+*):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(h3+*):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(h4+*):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.prose :where(thead th:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:0}.prose :where(thead th:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-end:0}.prose :where(tbody td,tfoot td):not(:where([class~=not-prose],[class~=not-prose] *)){padding-top:.571429em;padding-inline-end:.571429em;padding-bottom:.571429em;padding-inline-start:.571429em}.prose :where(tbody td:first-child,tfoot td:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:0}.prose :where(tbody td:last-child,tfoot td:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-end:0}.prose :where(figure):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2em;margin-bottom:2em}.prose :where(.prose>:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.prose :where(.prose>:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:0}.prose-sm{font-size:.875rem;line-height:1.71429}.prose-sm :where(p):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.14286em;margin-bottom:1.14286em}.prose-sm :where([class~=lead]):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.888889em;margin-bottom:.888889em;font-size:1.28571em;line-height:1.55556}.prose-sm :where(blockquote):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.33333em;margin-bottom:1.33333em;padding-inline-start:1.11111em}.prose-sm :where(h1):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0;margin-bottom:.8em;font-size:2.14286em;line-height:1.2}.prose-sm :where(h2):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.6em;margin-bottom:.8em;font-size:1.42857em;line-height:1.4}.prose-sm :where(h3):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.55556em;margin-bottom:.444444em;font-size:1.28571em;line-height:1.55556}.prose-sm :where(h4):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.42857em;margin-bottom:.571429em;line-height:1.42857}.prose-sm :where(img):not(:where([class~=not-prose],[class~=not-prose] *)),.prose-sm :where(picture):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.71429em;margin-bottom:1.71429em}.prose-sm :where(picture>img):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0;margin-bottom:0}.prose-sm :where(video):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.71429em;margin-bottom:1.71429em}.prose-sm :where(kbd):not(:where([class~=not-prose],[class~=not-prose] *)){padding-top:.142857em;padding-inline-end:.357143em;padding-bottom:.142857em;border-radius:.3125rem;padding-inline-start:.357143em;font-size:.857143em}.prose-sm :where(code):not(:where([class~=not-prose],[class~=not-prose] *)){font-size:.857143em}.prose-sm :where(h2 code):not(:where([class~=not-prose],[class~=not-prose] *)){font-size:.9em}.prose-sm :where(h3 code):not(:where([class~=not-prose],[class~=not-prose] *)){font-size:.888889em}.prose-sm :where(pre):not(:where([class~=not-prose],[class~=not-prose] *)){padding-top:.666667em;padding-inline-end:1em;padding-bottom:.666667em;border-radius:.25rem;margin-top:1.66667em;margin-bottom:1.66667em;padding-inline-start:1em;font-size:.857143em;line-height:1.66667}.prose-sm :where(ol):not(:where([class~=not-prose],[class~=not-prose] *)),.prose-sm :where(ul):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.14286em;margin-bottom:1.14286em;padding-inline-start:1.57143em}.prose-sm :where(li):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.285714em;margin-bottom:.285714em}.prose-sm :where(ol>li):not(:where([class~=not-prose],[class~=not-prose] *)),.prose-sm :where(ul>li):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:.428571em}.prose-sm :where(.prose-sm>ul>li p):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.571429em;margin-bottom:.571429em}.prose-sm :where(.prose-sm>ul>li>p:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.14286em}.prose-sm :where(.prose-sm>ul>li>p:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:1.14286em}.prose-sm :where(.prose-sm>ol>li>p:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.14286em}.prose-sm :where(.prose-sm>ol>li>p:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:1.14286em}.prose-sm :where(ul ul,ul ol,ol ul,ol ol):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.571429em;margin-bottom:.571429em}.prose-sm :where(dl):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.14286em;margin-bottom:1.14286em}.prose-sm :where(dt):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.14286em}.prose-sm :where(dd):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.285714em;padding-inline-start:1.57143em}.prose-sm :where(hr):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2.85714em;margin-bottom:2.85714em}.prose-sm :where(hr+*):not(:where([class~=not-prose],[class~=not-prose] *)),.prose-sm :where(h2+*):not(:where([class~=not-prose],[class~=not-prose] *)),.prose-sm :where(h3+*):not(:where([class~=not-prose],[class~=not-prose] *)),.prose-sm :where(h4+*):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.prose-sm :where(table):not(:where([class~=not-prose],[class~=not-prose] *)){font-size:.857143em;line-height:1.5}.prose-sm :where(thead th):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-end:1em;padding-bottom:.666667em;padding-inline-start:1em}.prose-sm :where(thead th:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:0}.prose-sm :where(thead th:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-end:0}.prose-sm :where(tbody td,tfoot td):not(:where([class~=not-prose],[class~=not-prose] *)){padding-top:.666667em;padding-inline-end:1em;padding-bottom:.666667em;padding-inline-start:1em}.prose-sm :where(tbody td:first-child,tfoot td:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:0}.prose-sm :where(tbody td:last-child,tfoot td:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-end:0}.prose-sm :where(figure):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.71429em;margin-bottom:1.71429em}.prose-sm :where(figure>*):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0;margin-bottom:0}.prose-sm :where(figcaption):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.666667em;font-size:.857143em;line-height:1.33333}.prose-sm :where(.prose-sm>:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.prose-sm :where(.prose-sm>:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:0}.mt-2{margin-top:calc(var(--spacing) * 2)}.mr-4{margin-right:calc(var(--spacing) * 4)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.ml-1{margin-left:var(--spacing)}.ml-auto{margin-left:auto}.block{display:block}.flex{display:flex}.hidden{display:none}.inline-flex{display:inline-flex}.h-2{height:calc(var(--spacing) * 2)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-4{height:calc(var(--spacing) * 4)}.h-24{height:calc(var(--spacing) * 24)}.h-\\[420px\\]{height:420px}.h-full{height:100%}.h-screen{height:100vh}.max-h-72{max-height:calc(var(--spacing) * 72)}.max-h-\\[60vh\\]{max-height:60vh}.w-2{width:calc(var(--spacing) * 2)}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-4{width:calc(var(--spacing) * 4)}.w-6{width:calc(var(--spacing) * 6)}.w-52{width:calc(var(--spacing) * 52)}.w-full{width:100%}.max-w-none{max-width:none}.max-w-prose{max-width:65ch}.min-w-0{min-width:0}.flex-1{flex:1}.shrink-0{flex-shrink:0}.-translate-y-1\\/2{--tw-translate-y:calc(calc(1 / 2 * 100%) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.cursor-pointer{cursor:pointer}.scroll-mt-4{scroll-margin-top:calc(var(--spacing) * 4)}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-end{align-items:flex-end}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-6{gap:calc(var(--spacing) * 6)}.gap-x-3{column-gap:calc(var(--spacing) * 3)}.gap-x-6{column-gap:calc(var(--spacing) * 6)}.gap-y-1{row-gap:var(--spacing)}.gap-y-2{row-gap:calc(var(--spacing) * 2)}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded-full{border-radius:2147483647px}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.border{border-style:var(--tw-border-style);border-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}.border-border{border-color:var(--color-border)}.border-ink{border-color:var(--color-ink)}.border-transparent{border-color:#0000}.bg-border{background-color:var(--color-border)}.bg-ink{background-color:var(--color-ink)}.bg-surface{background-color:var(--color-surface)}.bg-surface-2{background-color:var(--color-surface-2)}.bg-transparent{background-color:#0000}.bg-linear-to-t{--tw-gradient-position:to top}@supports (background-image:linear-gradient(in lab, red, red)){.bg-linear-to-t{--tw-gradient-position:to top in oklab}}.bg-linear-to-t{background-image:linear-gradient(var(--tw-gradient-stops))}.from-surface{--tw-gradient-from:var(--color-surface);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.p-1{padding:var(--spacing)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.px-1{padding-inline:var(--spacing)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-\\[8vw\\]{padding-inline:8vw}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:var(--spacing)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-4{padding-block:calc(var(--spacing) * 4)}.py-6{padding-block:calc(var(--spacing) * 6)}.py-10{padding-block:calc(var(--spacing) * 10)}.pr-3{padding-right:calc(var(--spacing) * 3)}.pb-3{padding-bottom:calc(var(--spacing) * 3)}.pl-3{padding-left:calc(var(--spacing) * 3)}.pl-6{padding-left:calc(var(--spacing) * 6)}.pl-8{padding-left:calc(var(--spacing) * 8)}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.font-display{font-family:var(--font-display)}.font-mono{font-family:var(--font-mono)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[13px\\]{font-size:13px}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.wrap-break-word{overflow-wrap:break-word}.whitespace-pre-wrap{white-space:pre-wrap}.text-danger{color:var(--color-danger)}.text-ink{color:var(--color-ink)}.text-ink-muted{color:var(--color-ink-muted)}.text-ink-secondary{color:var(--color-ink-secondary)}.uppercase{text-transform:uppercase}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.underline{text-decoration-line:underline}.underline-offset-2{text-underline-offset:2px}.shadow-card{--tw-shadow:0 4px 16px var(--tw-shadow-color,#00000024);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.select-none{-webkit-user-select:none;user-select:none}.placeholder\\:text-ink-muted::placeholder{color:var(--color-ink-muted)}@media (hover:hover){.hover\\:bg-ink-muted:hover{background-color:var(--color-ink-muted)}.hover\\:bg-surface-2:hover{background-color:var(--color-surface-2)}.hover\\:text-ink:hover{color:var(--color-ink)}}.focus\\:outline-hidden:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.focus\\:outline-hidden:focus{outline-offset:2px;outline:2px solid #0000}}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.focus-visible\\:ring-signal-ring:focus-visible{--tw-ring-color:var(--color-signal-ring)}.focus-visible\\:outline-hidden:focus-visible{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.focus-visible\\:outline-hidden:focus-visible{outline-offset:2px;outline:2px solid #0000}}.focus-visible\\:ring-inset:focus-visible{--tw-ring-inset:inset}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-40:disabled{opacity:.4}@media (hover:hover){.disabled\\:hover\\:bg-transparent:disabled:hover{background-color:#0000}}@media not all and (width>=40rem){.max-sm\\:absolute{position:absolute}.max-sm\\:inset-0{inset:0}.max-sm\\:z-10{z-index:10}}@media (width>=40rem){.sm\\:left-auto{left:auto}.sm\\:inline{display:inline}.sm\\:w-60{width:calc(var(--spacing) * 60)}.sm\\:w-md{width:var(--container-md)}.sm\\:shrink-0{flex-shrink:0}.sm\\:border-r{border-right-style:var(--tw-border-style);border-right-width:1px}}@media (width>=64rem){.lg\\:block{display:block}.lg\\:p-6{padding:calc(var(--spacing) * 6)}}.prose-headings\\:font-display :where(h1,h2,h3,h4,h5,h6,th):not(:where([class~=not-prose],[class~=not-prose] *)){font-family:var(--font-display)}.prose-headings\\:font-semibold :where(h1,h2,h3,h4,h5,h6,th):not(:where([class~=not-prose],[class~=not-prose] *)){--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.prose-headings\\:text-ink :where(h1,h2,h3,h4,h5,h6,th):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--color-ink)}.prose-p\\:text-ink-secondary :where(p):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--color-ink-secondary)}.prose-a\\:text-ink :where(a):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--color-ink)}.prose-a\\:decoration-signal :where(a):not(:where([class~=not-prose],[class~=not-prose] *)){-webkit-text-decoration-color:var(--color-signal);-webkit-text-decoration-color:var(--color-signal);-webkit-text-decoration-color:var(--color-signal);text-decoration-color:var(--color-signal)}.prose-a\\:decoration-2 :where(a):not(:where([class~=not-prose],[class~=not-prose] *)){text-decoration-thickness:2px}.prose-a\\:underline-offset-2 :where(a):not(:where([class~=not-prose],[class~=not-prose] *)){text-underline-offset:2px}.prose-blockquote\\:border-border :where(blockquote):not(:where([class~=not-prose],[class~=not-prose] *)){border-color:var(--color-border)}.prose-blockquote\\:text-ink-secondary :where(blockquote):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--color-ink-secondary)}.prose-strong\\:text-ink :where(strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--color-ink)}.prose-code\\:rounded-sm :where(code):not(:where([class~=not-prose],[class~=not-prose] *)){border-radius:var(--radius-sm)}.prose-code\\:bg-surface-2 :where(code):not(:where([class~=not-prose],[class~=not-prose] *)){background-color:var(--color-surface-2)}.prose-code\\:px-1 :where(code):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline:var(--spacing)}.prose-code\\:py-0\\.5 :where(code):not(:where([class~=not-prose],[class~=not-prose] *)){padding-block:calc(var(--spacing) * .5)}.prose-code\\:text-\\[0\\.85em\\] :where(code):not(:where([class~=not-prose],[class~=not-prose] *)){font-size:.85em}.prose-code\\:font-normal :where(code):not(:where([class~=not-prose],[class~=not-prose] *)){--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.prose-code\\:text-ink :where(code):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--color-ink)}.prose-code\\:before\\:content-none :where(code):not(:where([class~=not-prose],[class~=not-prose] *)):before,.prose-code\\:after\\:content-none :where(code):not(:where([class~=not-prose],[class~=not-prose] *)):after{content:var(--tw-content);--tw-content:none;content:none}.prose-pre\\:border :where(pre):not(:where([class~=not-prose],[class~=not-prose] *)){border-style:var(--tw-border-style);border-width:1px}.prose-pre\\:border-border :where(pre):not(:where([class~=not-prose],[class~=not-prose] *)){border-color:var(--color-border)}.prose-pre\\:bg-surface-2 :where(pre):not(:where([class~=not-prose],[class~=not-prose] *)){background-color:var(--color-surface-2)}.prose-li\\:text-ink-secondary :where(li):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--color-ink-secondary)}.prose-th\\:text-ink :where(th):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--color-ink)}.prose-td\\:text-ink-secondary :where(td):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--color-ink-secondary)}.prose-img\\:rounded-lg :where(img):not(:where([class~=not-prose],[class~=not-prose] *)){border-radius:var(--radius-lg)}.prose-hr\\:border-border :where(hr):not(:where([class~=not-prose],[class~=not-prose] *)){border-color:var(--color-border)}.\\[\\&_pre_code\\]\\:bg-transparent pre code{background-color:#0000}.\\[\\&_pre_code\\]\\:p-0 pre code{padding:0}.\\[\\&_pre_code\\]\\:text-ink pre code{color:var(--color-ink)}}:host{--docviewer-bg:#fff;--docviewer-bg-subtle:#f4f4f5;--docviewer-border:#d4d4d8;--docviewer-fg:#18181b;--docviewer-fg-secondary:#3f3f46;--docviewer-fg-muted:#71717a;--docviewer-accent:#84cc16;--docviewer-accent-ring:#65a30d;--docviewer-danger:#dc2626;--docviewer-font:system-ui, -apple-system, \"Segoe UI\", \"Hiragino Sans\", \"Yu Gothic UI\", sans-serif;--docviewer-mono:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;color:var(--docviewer-fg);font-family:var(--docviewer-font);display:block}@media (prefers-color-scheme:dark){:host{--docviewer-bg:#18181b;--docviewer-bg-subtle:#27272a;--docviewer-border:#3f3f46;--docviewer-fg:#fafafa;--docviewer-fg-secondary:#d4d4d8;--docviewer-fg-muted:#a1a1aa;--docviewer-accent:#a3e635;--docviewer-accent-ring:#bef264;--docviewer-danger:#f87171}}::highlight(doc-viewer-search){background-color:var(--docviewer-accent)}@supports (color:color-mix(in lab, red, red)){::highlight(doc-viewer-search){background-color:color-mix(in srgb, var(--docviewer-accent) 50%, transparent)}}::highlight(doc-viewer-search){color:inherit;text-decoration:underline}.doc-mark{background-color:var(--docviewer-accent)}@supports (color:color-mix(in lab, red, red)){.doc-mark{background-color:color-mix(in srgb, var(--docviewer-accent) 50%, transparent)}}.doc-mark{color:inherit;text-underline-offset:2px;text-decoration:underline;text-decoration-thickness:1px}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:\"*\";inherits:false}@property --tw-gradient-from{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:\"*\";inherits:false}@property --tw-gradient-via-stops{syntax:\"*\";inherits:false}@property --tw-gradient-from-position{syntax:\"<length-percentage>\";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:\"<length-percentage>\";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:\"<length-percentage>\";inherits:false;initial-value:100%}@property --tw-leading{syntax:\"*\";inherits:false}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-tracking{syntax:\"*\";inherits:false}@property --tw-ordinal{syntax:\"*\";inherits:false}@property --tw-slashed-zero{syntax:\"*\";inherits:false}@property --tw-numeric-figure{syntax:\"*\";inherits:false}@property --tw-numeric-spacing{syntax:\"*\";inherits:false}@property --tw-numeric-fraction{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-content{syntax:\"*\";inherits:false;initial-value:\"\"}", Ct, N, wt, Tt, Et = 0, Dt = [], P = d, Ot = P.__b, kt = P.__r, At = P.diffed, jt = P.__c, Mt = P.unmount, Nt = P.__;
function Pt(e, t) {
	P.__h && P.__h(N, e, Et || t), Et = 0;
	var n = N.__H || (N.__H = {
		__: [],
		__h: []
	});
	return e >= n.__.length && n.__.push({}), n.__[e];
}
function Ft(e) {
	return Et = 1, It(Xt, e);
}
function It(e, t, n) {
	var r = Pt(Ct++, 2);
	if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Xt(void 0, t), function(e) {
		var t = r.__N ? r.__N[0] : r.__[0], n = r.t(t, e);
		t !== n && (r.__N = [n, r.__[1]], r.__c.setState({}));
	}], r.__c = N, !N.__f)) {
		var i = function(e, t, n) {
			if (!r.__c.__H) return !0;
			var i = !1, o = r.__c.props !== e;
			if (r.__c.__H.__.some(function(e) {
				if (e.__N) {
					i = !0;
					var t = e.__[0];
					e.__ = e.__N, e.__N = void 0, t !== e.__[0] && (o = !0);
				}
			}), a) {
				var s = a.call(this, e, t, n);
				return i ? s || o : s;
			}
			return !i || o;
		};
		N.__f = !0;
		var a = N.shouldComponentUpdate, o = N.componentWillUpdate;
		N.componentWillUpdate = function(e, t, n) {
			if (this.__e) {
				var r = a;
				a = void 0, i(e, t, n), a = r;
			}
			o && o.call(this, e, t, n);
		}, N.shouldComponentUpdate = i;
	}
	return r.__N || r.__;
}
function Lt(e, t) {
	var n = Pt(Ct++, 3);
	!P.__s && Yt(n.__H, t) && (n.__ = e, n.u = t, N.__H.__h.push(n));
}
function Rt(e, t) {
	var n = Pt(Ct++, 4);
	!P.__s && Yt(n.__H, t) && (n.__ = e, n.u = t, N.__h.push(n));
}
function zt(e) {
	return Et = 5, Bt(function() {
		return { current: e };
	}, []);
}
function Bt(e, t) {
	var n = Pt(Ct++, 7);
	return Yt(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function Vt(e, t) {
	return Et = 8, Bt(function() {
		return e;
	}, t);
}
function Ht(e) {
	var t = N.context[e.__c], n = Pt(Ct++, 9);
	return n.c = e, t ? (n.__ ?? (n.__ = !0, t.sub(N)), t.props.value) : e.__;
}
function Ut() {
	var e = Pt(Ct++, 11);
	if (!e.__) {
		for (var t = N.__v; t !== null && !t.__m && t.__ !== null;) t = t.__;
		var n = t.__m || (t.__m = [0, 0]);
		e.__ = "P" + n[0] + "-" + n[1]++;
	}
	return e.__;
}
function Wt() {
	for (var e; e = Dt.shift();) {
		var t = e.__H;
		if (e.__P && t) try {
			t.__h.some(qt), t.__h.some(Jt), t.__h = [];
		} catch (n) {
			t.__h = [], P.__e(n, e.__v);
		}
	}
}
P.__b = function(e) {
	N = null, Ot && Ot(e);
}, P.__ = function(e, t) {
	e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Nt && Nt(e, t);
}, P.__r = function(e) {
	kt && kt(e), Ct = 0;
	var t = (N = e.__c).__H;
	t && (wt === N ? (t.__h = [], N.__h = [], t.__.some(function(e) {
		e.__N && (e.__ = e.__N), e.u = e.__N = void 0;
	})) : (t.__h.some(qt), t.__h.some(Jt), t.__h = [], Ct = 0)), wt = N;
}, P.diffed = function(e) {
	At && At(e);
	var t = e.__c;
	t && t.__H && (t.__H.__h.length && (Dt.push(t) !== 1 && Tt === P.requestAnimationFrame || ((Tt = P.requestAnimationFrame) || Kt)(Wt)), t.__H.__.some(function(e) {
		e.u &&= (e.__H = e.u, void 0);
	})), wt = N = null;
}, P.__c = function(e, t) {
	t.some(function(e) {
		try {
			e.__h.some(qt), e.__h = e.__h.filter(function(e) {
				return !e.__ || Jt(e);
			});
		} catch (n) {
			t.some(function(e) {
				e.__h &&= [];
			}), t = [], P.__e(n, e.__v);
		}
	}), jt && jt(e, t);
}, P.unmount = function(e) {
	Mt && Mt(e);
	var t, n = e.__c;
	n && n.__H && (n.__H.__.some(function(e) {
		try {
			qt(e);
		} catch (e) {
			t = e;
		}
	}), n.__H = void 0, t && P.__e(t, n.__v));
};
var Gt = typeof requestAnimationFrame == "function";
function Kt(e) {
	var t, n = function() {
		clearTimeout(r), Gt && cancelAnimationFrame(t), setTimeout(e);
	}, r = setTimeout(n, 35);
	Gt && (t = requestAnimationFrame(n));
}
function qt(e) {
	var t = N, n = e.__c;
	typeof n == "function" && (e.__c = void 0, n()), N = t;
}
function Jt(e) {
	var t = N;
	e.__c = e.__(), N = t;
}
function Yt(e, t) {
	return !e || e.length !== t.length || t.some(function(t, n) {
		return t !== e[n];
	});
}
function Xt(e, t) {
	return typeof t == "function" ? t(e) : t;
}
//#endregion
//#region src/lib/tokens.ts
function Zt(e) {
	let t = 0, n = 0;
	for (let r of e) r.charCodeAt(0) < 128 ? t++ : n++;
	return Math.ceil(t / 4) + n;
}
//#endregion
//#region src/lib/parseDoc.ts
var Qt = /^ {0,3}(`{3,}|~{3,})/, $t = /^ {0,3}(#{1,6})[ \t]+(.+?)[ \t]*#*[ \t]*$/;
function en(e) {
	if (e[0]?.trim() !== "---") return {
		data: {},
		endLine: 0
	};
	let t = -1;
	for (let n = 1; n < e.length; n++) if (e[n].trim() === "---") {
		t = n;
		break;
	}
	if (t === -1) return {
		data: {},
		endLine: 0
	};
	let n = {};
	for (let r = 1; r < t; r++) {
		let i = e[r].match(/^([A-Za-z0-9_-]+):[ \t]*(.*)$/);
		if (!i) continue;
		let a = i[1], o = i[2].trim();
		if (/^[>|][+-]?$/.test(o)) {
			let n = [];
			for (; r + 1 < t && /^[ \t]+\S|^\s*$/.test(e[r + 1]);) n.push(e[++r].trim());
			o = n.filter(Boolean).join(" ");
		} else o = o.replace(/^["'](.*)["']$/, "$1");
		n[a] = o;
	}
	return {
		data: n,
		endLine: t + 1
	};
}
function tn(e) {
	return e.replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/[`*_~]/g, "").replace(/<[^>]+>/g, "").trim();
}
function nn(e, t) {
	let n = [], r = null;
	for (let i = t; i < e.length; i++) {
		let t = e[i].match(Qt);
		if (t) {
			r === null ? r = t[1] : t[1][0] === r[0] && t[1].length >= r.length && (r = null);
			continue;
		}
		if (r !== null) continue;
		let a = e[i].match($t);
		a && n.push({
			index: i,
			level: a[1].length,
			text: tn(a[2])
		});
	}
	return n;
}
function rn(e) {
	return `section-${e + 1}`;
}
function an(e) {
	let t = e.source.replace(/\r\n?/g, "\n");
	if (e.kind === "text") {
		let n = Zt(t);
		return {
			file: e,
			frontmatter: {},
			headings: [],
			sections: [],
			coverTokenCount: n,
			totalTokenCount: n,
			renderSource: t
		};
	}
	let n = t.split("\n"), { data: r, endLine: i } = en(n), a = nn(n, i), o = [];
	a.forEach((e) => {
		e.level <= 3 && o.push({
			id: rn(o.length),
			level: e.level,
			text: e.text,
			line: e.index + 1
		});
	});
	let s = a.filter((e) => e.level === 2), c = s.length > 0 ? s[0].index : n.length, l = n.slice(i, c), u = a.find((e) => e.level === 1 && e.index >= i && e.index < c)?.index, d = l.filter((e, t) => i + t !== u).join("\n").trim(), f = Zt(n.slice(0, i).join("\n")), p = [];
	d ? p.push({
		id: "intro",
		title: "Introduction",
		level: 1,
		startLine: i + 1,
		body: d,
		tokenCount: Zt(l.join("\n"))
	}) : f += Zt(l.join("\n")), s.forEach((e, t) => {
		let r = t + 1 < s.length ? s[t + 1].index : n.length, i = o.find((t) => t.line === e.index + 1);
		p.push({
			id: i.id,
			title: e.text,
			level: 2,
			startLine: e.index + 1,
			body: n.slice(e.index + 1, r).join("\n").trim(),
			tokenCount: Zt(n.slice(e.index, r).join("\n"))
		});
	});
	let m = f + p.reduce((e, t) => e + t.tokenCount, 0), h = [...Array(i).fill(""), ...n.slice(i)].join("\n");
	return {
		file: e,
		frontmatter: r,
		headings: o,
		sections: p,
		coverTokenCount: f,
		totalTokenCount: m,
		renderSource: h
	};
}
//#endregion
//#region node_modules/preact/compat/dist/compat.module.js
function on(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}
function sn(e, t) {
	for (var n in e) if (n !== "__source" && !(n in t)) return !0;
	for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
	return !1;
}
function cn(e, t) {
	this.props = e, this.context = t;
}
(cn.prototype = new re()).isPureReactComponent = !0, cn.prototype.shouldComponentUpdate = function(e, t) {
	return sn(this.props, e) || sn(this.state, t);
};
var ln = d.__b;
d.__b = function(e) {
	e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), ln && ln(e);
};
var un = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function dn(e) {
	function t(t) {
		var n = on({}, t);
		return delete n.ref, e(n, t.ref || null);
	}
	return t.$$typeof = un, t.render = e, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var fn = d.__e;
d.__e = function(e, t, n, r) {
	if (e.then) {
		for (var i, a = t; a = a.__;) if ((i = a.__c) && i.__c) return t.__e ?? (t.__e = n.__e, t.__k = n.__k || []), i.__c(e, t);
	}
	fn(e, t, n, r);
};
var pn = d.unmount;
function mn(e, t, n) {
	return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(e) {
		typeof e.__c == "function" && e.__c();
	}), e.__c.__H = null), (e = on({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(e) {
		return mn(e, t, n);
	})), e;
}
function hn(e, t, n) {
	return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(e) {
		return hn(e, t, n);
	}), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function gn() {
	this.__u = 0, this.o = null, this.__b = null;
}
function _n(e) {
	var t = e.__ && e.__.__c;
	return t && t.__a && t.__a(e);
}
function vn() {
	this.i = null, this.l = null;
}
d.unmount = function(e) {
	var t = e.__c;
	t && (t.__z = !0), t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), pn && pn(e);
}, (gn.prototype = new re()).__c = function(e, t) {
	var n = t.__c, r = this;
	r.o ??= [], r.o.push(n);
	var i = _n(r.__v), a = !1, o = function() {
		a || r.__z || (a = !0, n.__R = null, i ? i(c) : c());
	};
	n.__R = o;
	var s = n.__P;
	n.__P = null;
	var c = function() {
		if (!--r.__u) {
			if (r.state.__a) {
				var e = r.state.__a;
				r.__v.__k[0] = hn(e, e.__c.__P, e.__c.__O);
			}
			var t;
			for (r.setState({ __a: r.__b = null }); t = r.o.pop();) t.__P = s, t.forceUpdate();
		}
	};
	r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(o, o);
}, gn.prototype.componentWillUnmount = function() {
	this.o = [];
}, gn.prototype.render = function(e, t) {
	if (this.__b) {
		if (this.__v.__k) {
			var n = document.createElement("div"), r = this.__v.__k[0].__c;
			this.__v.__k[0] = mn(this.__b, n, r.__O = r.__P);
		}
		this.__b = null;
	}
	var i = t.__a && O(A, null, e.fallback);
	return i && (i.__u &= -33), [O(A, null, t.__a ? null : e.children), i];
};
var yn = function(e, t, n) {
	if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (n = e.i; n;) {
		for (; n.length > 3;) n.pop()();
		if (n[1] < n[0]) break;
		e.i = n = n[2];
	}
};
(vn.prototype = new re()).__a = function(e) {
	var t = this, n = _n(t.__v), r = t.l.get(e);
	return r[0]++, function(i) {
		var a = function() {
			t.props.revealOrder ? (r.push(i), yn(t, e, r)) : i();
		};
		n ? n(a) : a();
	};
}, vn.prototype.render = function(e) {
	this.i = null, this.l = /* @__PURE__ */ new Map();
	var t = de(e.children);
	e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
	for (var n = t.length; n--;) this.l.set(t[n], this.i = [
		1,
		0,
		this.i
	]);
	return e.children;
}, vn.prototype.componentDidUpdate = vn.prototype.componentDidMount = function() {
	var e = this;
	this.l.forEach(function(t, n) {
		yn(e, n, t);
	});
};
var bn = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, xn = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Sn = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Cn = /[A-Z0-9]/g, wn = typeof document < "u", Tn = function(e) {
	return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
re.prototype.isReactComponent = !0, [
	"componentWillMount",
	"componentWillReceiveProps",
	"componentWillUpdate"
].forEach(function(e) {
	Object.defineProperty(re.prototype, e, {
		configurable: !0,
		get: function() {
			return this["UNSAFE_" + e];
		},
		set: function(t) {
			Object.defineProperty(this, e, {
				configurable: !0,
				writable: !0,
				value: t
			});
		}
	});
});
var En = d.event;
d.event = function(e) {
	return En && (e = En(e)), e.persist = function() {}, e.isPropagationStopped = function() {
		return this.cancelBubble;
	}, e.isDefaultPrevented = function() {
		return this.defaultPrevented;
	}, e.nativeEvent = e;
};
var Dn = {
	configurable: !0,
	get: function() {
		return this.class;
	}
}, On = d.vnode;
d.vnode = function(e) {
	typeof e.type == "string" && function(e) {
		var t = e.props, n = e.type, r = {}, i = n.indexOf("-") == -1;
		for (var a in t) {
			var o = t[a];
			if (!(a === "value" && "defaultValue" in t && o == null || wn && a === "children" && n === "noscript" || a === "class" || a === "className")) {
				var s = a.toLowerCase();
				a === "defaultValue" && "value" in t && t.value == null ? a = "value" : a === "download" && !0 === o ? o = "" : s === "translate" && o === "no" ? o = !1 : s[0] === "o" && s[1] === "n" ? s === "ondoubleclick" ? a = "ondblclick" : s !== "onchange" || n !== "input" && n !== "textarea" || Tn(t.type) ? s === "onfocus" ? a = "onfocusin" : s === "onblur" ? a = "onfocusout" : Sn.test(a) && (a = s) : s = a = "oninput" : i && xn.test(a) ? a = a.replace(Cn, "-$&").toLowerCase() : o === null && (o = void 0), s === "oninput" && r[a = s] && (a = "oninputCapture"), r[a] = o;
			}
		}
		n == "select" && (r.multiple && Array.isArray(r.value) && (r.value = de(t.children).forEach(function(e) {
			e.props.selected = r.value.indexOf(e.props.value) != -1;
		})), r.defaultValue != null && (r.value = de(t.children).forEach(function(e) {
			e.props.selected = r.multiple ? r.defaultValue.indexOf(e.props.value) != -1 : r.defaultValue == e.props.value;
		}))), t.class && !t.className ? (r.class = t.class, Object.defineProperty(r, "className", Dn)) : t.className && (r.class = r.className = t.className), e.props = r;
	}(e), e.$$typeof = bn, On && On(e);
};
var kn = d.__r;
d.__r = function(e) {
	kn && kn(e), e.__c;
};
var An = d.diffed;
d.diffed = function(e) {
	An && An(e);
	var t = e.props, n = e.__e;
	n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value);
};
//#endregion
//#region src/lib/search.ts
var jn = 40;
function Mn(e) {
	let t = "", n = [], r = 0;
	for (let i of e) {
		let e = i.normalize("NFKC").toLowerCase();
		for (let t = 0; t < e.length; t++) n.push(r);
		t += e, r += i.length;
	}
	return n.push(r), {
		folded: t,
		map: n
	};
}
function Nn(e, t) {
	let n = Mn(t.trim()).folded;
	if (!n) return [];
	let { folded: r, map: i } = Mn(e), a = [], o = 0;
	for (;;) {
		let e = r.indexOf(n, o);
		if (e === -1) break;
		a.push([i[e], i[e + n.length]]), o = e + n.length;
	}
	return a;
}
function Pn(e, t) {
	let n = Math.max(0, t[0][0] - jn), r = Math.min(e.length, t[0][1] + jn), i = n > 0 ? "…" : "", a = r < e.length ? "…" : "", o = i.length - n;
	return {
		snippet: i + e.slice(n, r) + a,
		ranges: t.filter(([e, t]) => e >= n && t <= r).map(([e, t]) => [e + o, t + o])
	};
}
function Fn(e, t) {
	if (!t.trim()) return [];
	let n = e.file.source.replace(/\r\n?/g, "\n").split("\n");
	if (e.file.kind === "text") {
		let e = [];
		return n.forEach((n, r) => {
			let i = Nn(n, t);
			if (i.length === 0) return;
			let { snippet: a, ranges: o } = Pn(n, i);
			e.push({
				sectionId: "file",
				kind: "body",
				snippet: a,
				ranges: o,
				line: r + 1
			});
		}), e;
	}
	if (e.sections.length === 0) return [];
	let r = [], i = [];
	for (let n of e.sections) {
		if (n.id === "intro") continue;
		let e = Nn(n.title, t);
		e.length > 0 && r.push({
			sectionId: n.id,
			kind: "heading",
			snippet: n.title,
			ranges: e,
			line: n.startLine
		});
	}
	let a = -1;
	for (let r = 0; r < n.length; r++) {
		for (; a + 1 < e.sections.length && e.sections[a + 1].startLine <= r + 1;) a++;
		if (a === -1) continue;
		let o = e.sections[a];
		if (o.id !== "intro" && o.startLine === r + 1) continue;
		let s = Nn(n[r], t);
		if (s.length === 0) continue;
		let { snippet: c, ranges: l } = Pn(n[r], s);
		i.push({
			sectionId: o.id,
			kind: "body",
			snippet: c,
			ranges: l,
			line: r + 1
		});
	}
	return [...r, ...i];
}
//#endregion
//#region node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var In = 0;
Array.isArray;
function F(e, t, n, r, i, a) {
	t ||= {};
	var o, s, c = t;
	if ("ref" in c) for (s in c = {}, t) s == "ref" ? o = t[s] : c[s] = t[s];
	var l = {
		type: e,
		props: c,
		key: n,
		ref: o,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__c: null,
		constructor: void 0,
		__v: --In,
		__i: -1,
		__u: 0,
		__source: i,
		__self: a
	};
	if (typeof e == "function" && (o = e.defaultProps)) for (s in o) c[s] === void 0 && (c[s] = o[s]);
	return d.vnode && d.vnode(l), l;
}
//#endregion
//#region src/ui/Highlight.tsx
function Ln({ text: e, ranges: t }) {
	if (t.length === 0) return /* @__PURE__ */ F(A, { children: e });
	let n = [], r = 0;
	return t.forEach(([t, i], a) => {
		t > r && n.push(/* @__PURE__ */ F(A, { children: e.slice(r, t) }, `t${a}`)), n.push(/* @__PURE__ */ F("mark", {
			className: "doc-mark",
			children: e.slice(t, i)
		}, `m${a}`)), r = i;
	}), r < e.length && n.push(/* @__PURE__ */ F(A, { children: e.slice(r) }, "tail")), /* @__PURE__ */ F(A, { children: n });
}
//#endregion
//#region src/ui/labels.ts
var Rn = {
	tablist: "View mode",
	tabCode: "Code",
	tabPreview: "Preview",
	tabSlides: "Slides",
	search: "Search",
	searchAria: "Search in document",
	searchPlaceholder: "Search...",
	closeSearch: "Close search",
	searchResults: "Search results",
	matches: "{n} matches",
	moreResults: "{n} more",
	noMatch: "No matches",
	copy: "Copy",
	copied: "Copied",
	copyDone: "Copied to clipboard",
	copyFailed: "Copy failed. Select the source text and copy it manually.",
	browseFiles: "Browse files",
	closeFileList: "Close file list",
	fileCount: "{n} files",
	filterFiles: "Filter files",
	filterPlaceholder: "Filter files...",
	sourceView: "Source",
	showFullDocument: "Show full document",
	onThisPage: "On this page",
	cover: "Cover",
	prev: "Prev",
	next: "Next",
	fullscreen: "Fullscreen",
	exit: "Exit",
	slide: "Slide {n}: {title}",
	slideGroup: "Select slide",
	slideTokens: "{current} / {total} tokens",
	totalTokens: "{n} tokens",
	slideTokensTitle: "Current slide / total (estimated tokens)",
	hintMove: "move",
	hintFullscreen: "fullscreen",
	hintExit: "exit",
	license: "License",
	total: "Total",
	loading: "Loading…",
	empty: "No documents to show.",
	error: "Failed to load the document."
};
function zn(e) {
	return {
		...Rn,
		...e ?? {}
	};
}
function Bn(e, t) {
	return e.replace(/\{(\w+)\}/g, (e, n) => n in t ? String(t[n]) : e);
}
var Vn = Te(Rn), Hn = () => Ht(Vn), Un = dn(function({ source: e, query: t }, n) {
	let r = Hn(), i = Bt(() => e.replace(/\r\n?/g, "\n").split("\n"), [e]), a = String(i.length).length;
	return /* @__PURE__ */ F("pre", {
		ref: n,
		tabIndex: 0,
		"aria-label": r.sourceView,
		className: "m-0 overflow-x-hidden whitespace-pre-wrap wrap-break-word p-4 font-mono text-[13px] leading-relaxed text-ink focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-signal-ring",
		children: i.map((e, n) => /* @__PURE__ */ F("div", {
			id: `L${n + 1}`,
			className: "flex scroll-mt-4",
			children: [/* @__PURE__ */ F("span", {
				"aria-hidden": !0,
				className: "mr-4 shrink-0 select-none text-right text-ink-muted",
				style: { minWidth: `${a}ch` },
				children: n + 1
			}), /* @__PURE__ */ F("span", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ F(Ln, {
					text: e,
					ranges: t ? Nn(e, t) : []
				}), e === "" && "​"]
			})]
		}, n))
	});
});
//#endregion
//#region src/ui/icons.tsx
function Wn(e) {
	return {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": 1.6,
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"aria-hidden": !0,
		...e
	};
}
function Gn(e) {
	return /* @__PURE__ */ F("svg", {
		...Wn(e),
		children: [/* @__PURE__ */ F("circle", {
			cx: "11",
			cy: "11",
			r: "7"
		}), /* @__PURE__ */ F("path", { d: "m20 20-3.2-3.2" })]
	});
}
function Kn(e) {
	return /* @__PURE__ */ F("svg", {
		...Wn(e),
		children: [/* @__PURE__ */ F("rect", {
			x: "9",
			y: "9",
			width: "11",
			height: "11",
			rx: "2"
		}), /* @__PURE__ */ F("path", { d: "M5.5 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v.5" })]
	});
}
function qn(e) {
	return /* @__PURE__ */ F("svg", {
		...Wn(e),
		children: [/* @__PURE__ */ F("path", { d: "M19 12H6" }), /* @__PURE__ */ F("path", { d: "m11 6-6 6 6 6" })]
	});
}
function Jn(e) {
	return /* @__PURE__ */ F("svg", {
		...Wn(e),
		children: /* @__PURE__ */ F("path", { d: "m5 12.5 4.5 4.5L19 7" })
	});
}
function Yn(e) {
	return /* @__PURE__ */ F("svg", {
		...Wn(e),
		children: [/* @__PURE__ */ F("path", { d: "M6 6l12 12" }), /* @__PURE__ */ F("path", { d: "M18 6L6 18" })]
	});
}
function Xn(e) {
	return /* @__PURE__ */ F("svg", {
		...Wn(e),
		children: [/* @__PURE__ */ F("path", { d: "M7 3.5h7l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" }), /* @__PURE__ */ F("path", { d: "M14 3.5V8h4" })]
	});
}
//#endregion
//#region src/ui/CopyButton.tsx
function Zn(e) {
	let t = document.createElement("textarea");
	t.value = e, t.setAttribute("readonly", ""), t.style.position = "fixed", t.style.opacity = "0", document.body.appendChild(t), t.select();
	try {
		return document.execCommand("copy");
	} catch {
		return !1;
	} finally {
		document.body.removeChild(t);
	}
}
function Qn({ text: e, onFailure: t }) {
	let n = Hn(), [r, i] = Ft("idle"), a = zt(void 0);
	Lt(() => () => window.clearTimeout(a.current), []);
	async function o() {
		let n = !1;
		try {
			await navigator.clipboard.writeText(e), n = !0;
		} catch {
			n = Zn(e);
		}
		window.clearTimeout(a.current), i(n ? "copied" : "failed"), n || t?.(), a.current = window.setTimeout(() => i("idle"), n ? 1800 : 4e3);
	}
	return /* @__PURE__ */ F(A, { children: [/* @__PURE__ */ F("button", {
		type: "button",
		onClick: () => void o(),
		className: "inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs font-medium text-ink-secondary hover:bg-surface-2 hover:text-ink",
		children: [F(r === "copied" ? Jn : Kn, { className: "h-3.5 w-3.5" }), r === "copied" ? n.copied : n.copy]
	}), /* @__PURE__ */ F("span", {
		role: "status",
		"aria-live": "polite",
		className: r === "failed" ? "text-xs text-danger" : "sr-only",
		children: r === "copied" ? n.copyDone : r === "failed" ? n.copyFailed : ""
	})] });
}
//#endregion
//#region src/ui/FilePanel.tsx
function $n({ folderName: e, paths: t, selected: n, onSelect: r, onClose: i }) {
	let a = Hn(), [o, s] = Ft(""), c = zt(null), l = Bt(() => {
		let e = o.trim().toLowerCase();
		return e ? t.filter((t) => t.toLowerCase().includes(e)) : t;
	}, [t, o]);
	function u(e) {
		let t = Array.from(c.current?.querySelectorAll("button") ?? []), n = c.current?.getRootNode(), r = t.indexOf(n?.activeElement);
		t[Math.min(t.length - 1, Math.max(0, r + e))]?.focus();
	}
	return /* @__PURE__ */ F("div", {
		className: "flex w-full flex-col border-border bg-surface max-sm:absolute max-sm:inset-0 max-sm:z-10 sm:w-60 sm:shrink-0 sm:border-r",
		children: [
			/* @__PURE__ */ F("div", {
				className: "flex items-center gap-2 border-b border-border px-2 py-2",
				children: [
					/* @__PURE__ */ F("button", {
						type: "button",
						onClick: i,
						"aria-label": a.closeFileList,
						className: "rounded-sm p-1 text-ink-secondary hover:bg-surface-2 hover:text-ink",
						children: /* @__PURE__ */ F(qn, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ F("span", {
						className: "min-w-0 flex-1 truncate font-mono text-xs font-semibold text-ink",
						title: e,
						children: e
					}),
					/* @__PURE__ */ F("span", {
						className: "rounded-full bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-ink-secondary",
						"aria-label": Bn(a.fileCount, { n: t.length }),
						children: t.length
					})
				]
			}),
			/* @__PURE__ */ F("label", {
				className: "relative block border-b border-border",
				children: [
					/* @__PURE__ */ F("span", {
						className: "sr-only",
						children: a.filterFiles
					}),
					/* @__PURE__ */ F(Gn, { className: "pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink-muted" }),
					/* @__PURE__ */ F("input", {
						type: "text",
						value: o,
						onInput: (e) => s(e.currentTarget.value),
						onKeyDown: (e) => {
							e.key === "ArrowDown" && (e.preventDefault(), c.current?.querySelector("button")?.focus());
						},
						placeholder: a.filterPlaceholder,
						className: "w-full bg-transparent py-2 pl-8 pr-3 text-xs text-ink placeholder:text-ink-muted focus:outline-hidden focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-signal-ring"
					})
				]
			}),
			l.length === 0 ? /* @__PURE__ */ F("p", {
				className: "px-3 py-4 text-xs text-ink-secondary",
				children: a.noMatch
			}) : /* @__PURE__ */ F("ul", {
				ref: c,
				className: "max-h-72 overflow-y-auto py-1",
				onKeyDown: (e) => {
					e.key === "ArrowDown" ? (e.preventDefault(), u(1)) : e.key === "ArrowUp" && (e.preventDefault(), u(-1));
				},
				children: l.map((e) => {
					let t = e === n;
					return /* @__PURE__ */ F("li", { children: /* @__PURE__ */ F("button", {
						type: "button",
						onClick: () => r(e),
						"aria-current": t ? "true" : void 0,
						title: e,
						className: `flex w-full items-center gap-2 border-l-2 px-3 py-1.5 text-left font-mono text-xs ${t ? "border-ink bg-surface-2 font-semibold text-ink" : "border-transparent text-ink-secondary hover:bg-surface-2 hover:text-ink"}`,
						children: [/* @__PURE__ */ F(Xn, { className: "h-3.5 w-3.5 shrink-0" }), /* @__PURE__ */ F("span", {
							className: "truncate",
							children: e
						})]
					}) }, e);
				})
			})
		]
	});
}
//#endregion
//#region node_modules/comma-separated-tokens/index.js
function er(e) {
	let t = [], n = String(e || ""), r = n.indexOf(","), i = 0, a = !1;
	for (; !a;) {
		r === -1 && (r = n.length, a = !0);
		let e = n.slice(i, r).trim();
		(e || !a) && t.push(e), i = r + 1, r = n.indexOf(",", i);
	}
	return t;
}
function tr(e, t) {
	let n = t || {};
	return (e[e.length - 1] === "" ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")).trim();
}
//#endregion
//#region node_modules/estree-util-is-identifier-name/lib/index.js
var nr = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, rr = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, ir = {};
function ar(e, t) {
	return ((t || ir).jsx ? rr : nr).test(e);
}
//#endregion
//#region node_modules/hast-util-whitespace/lib/index.js
var or = /[ \t\n\f\r]/g;
function sr(e) {
	return typeof e == "object" ? e.type === "text" && cr(e.value) : cr(e);
}
function cr(e) {
	return e.replace(or, "") === "";
}
//#endregion
//#region node_modules/property-information/lib/util/schema.js
var lr = class {
	constructor(e, t, n) {
		this.normal = t, this.property = e, n && (this.space = n);
	}
};
lr.prototype.normal = {}, lr.prototype.property = {}, lr.prototype.space = void 0;
//#endregion
//#region node_modules/property-information/lib/util/merge.js
function ur(e, t) {
	let n = {}, r = {};
	for (let t of e) Object.assign(n, t.property), Object.assign(r, t.normal);
	return new lr(n, r, t);
}
//#endregion
//#region node_modules/property-information/lib/normalize.js
function dr(e) {
	return e.toLowerCase();
}
//#endregion
//#region node_modules/property-information/lib/util/info.js
var fr = class {
	constructor(e, t) {
		this.attribute = t, this.property = e;
	}
};
fr.prototype.attribute = "", fr.prototype.booleanish = !1, fr.prototype.boolean = !1, fr.prototype.commaOrSpaceSeparated = !1, fr.prototype.commaSeparated = !1, fr.prototype.defined = !1, fr.prototype.mustUseProperty = !1, fr.prototype.number = !1, fr.prototype.overloadedBoolean = !1, fr.prototype.property = "", fr.prototype.spaceSeparated = !1, fr.prototype.space = void 0;
//#endregion
//#region node_modules/property-information/lib/util/types.js
var pr = /* @__PURE__ */ s({
	boolean: () => I,
	booleanish: () => L,
	commaOrSpaceSeparated: () => _r,
	commaSeparated: () => gr,
	number: () => R,
	overloadedBoolean: () => hr,
	spaceSeparated: () => z
}), mr = 0, I = vr(), L = vr(), hr = vr(), R = vr(), z = vr(), gr = vr(), _r = vr();
function vr() {
	return 2 ** ++mr;
}
//#endregion
//#region node_modules/property-information/lib/util/defined-info.js
var yr = Object.keys(pr), br = class extends fr {
	constructor(e, t, n, r) {
		let i = -1;
		if (super(e, t), xr(this, "space", r), typeof n == "number") for (; ++i < yr.length;) {
			let e = yr[i];
			xr(this, yr[i], (n & pr[e]) === pr[e]);
		}
	}
};
br.prototype.defined = !0;
function xr(e, t, n) {
	n && (e[t] = n);
}
//#endregion
//#region node_modules/property-information/lib/util/create.js
function Sr(e) {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e.properties)) {
		let a = new br(r, e.transform(e.attributes || {}, r), i, e.space);
		e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0), t[r] = a, n[dr(r)] = r, n[dr(a.attribute)] = r;
	}
	return new lr(t, n, e.space);
}
//#endregion
//#region node_modules/property-information/lib/aria.js
var Cr = Sr({
	properties: {
		ariaActiveDescendant: null,
		ariaAtomic: L,
		ariaAutoComplete: null,
		ariaBusy: L,
		ariaChecked: L,
		ariaColCount: R,
		ariaColIndex: R,
		ariaColSpan: R,
		ariaControls: z,
		ariaCurrent: null,
		ariaDescribedBy: z,
		ariaDetails: null,
		ariaDisabled: L,
		ariaDropEffect: z,
		ariaErrorMessage: null,
		ariaExpanded: L,
		ariaFlowTo: z,
		ariaGrabbed: L,
		ariaHasPopup: null,
		ariaHidden: L,
		ariaInvalid: null,
		ariaKeyShortcuts: null,
		ariaLabel: null,
		ariaLabelledBy: z,
		ariaLevel: R,
		ariaLive: null,
		ariaModal: L,
		ariaMultiLine: L,
		ariaMultiSelectable: L,
		ariaOrientation: null,
		ariaOwns: z,
		ariaPlaceholder: null,
		ariaPosInSet: R,
		ariaPressed: L,
		ariaReadOnly: L,
		ariaRelevant: null,
		ariaRequired: L,
		ariaRoleDescription: z,
		ariaRowCount: R,
		ariaRowIndex: R,
		ariaRowSpan: R,
		ariaSelected: L,
		ariaSetSize: R,
		ariaSort: null,
		ariaValueMax: R,
		ariaValueMin: R,
		ariaValueNow: R,
		ariaValueText: null,
		role: null
	},
	transform(e, t) {
		return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
	}
});
//#endregion
//#region node_modules/property-information/lib/util/case-sensitive-transform.js
function wr(e, t) {
	return t in e ? e[t] : t;
}
//#endregion
//#region node_modules/property-information/lib/util/case-insensitive-transform.js
function Tr(e, t) {
	return wr(e, t.toLowerCase());
}
//#endregion
//#region node_modules/property-information/lib/html.js
var Er = Sr({
	attributes: {
		acceptcharset: "accept-charset",
		classname: "class",
		htmlfor: "for",
		httpequiv: "http-equiv"
	},
	mustUseProperty: [
		"checked",
		"multiple",
		"muted",
		"selected"
	],
	properties: {
		abbr: null,
		accept: gr,
		acceptCharset: z,
		accessKey: z,
		action: null,
		allow: null,
		allowFullScreen: I,
		allowPaymentRequest: I,
		allowUserMedia: I,
		alpha: I,
		alt: null,
		as: null,
		async: I,
		autoCapitalize: null,
		autoComplete: z,
		autoFocus: I,
		autoPlay: I,
		blocking: z,
		capture: null,
		charSet: null,
		checked: I,
		cite: null,
		className: z,
		closedBy: null,
		colorSpace: null,
		cols: R,
		colSpan: R,
		command: null,
		commandFor: null,
		content: null,
		contentEditable: L,
		controls: I,
		controlsList: z,
		coords: R | gr,
		crossOrigin: null,
		data: null,
		dateTime: null,
		decoding: null,
		default: I,
		defer: I,
		dir: null,
		dirName: null,
		disabled: I,
		download: hr,
		draggable: L,
		encType: null,
		enterKeyHint: null,
		fetchPriority: null,
		form: null,
		formAction: null,
		formEncType: null,
		formMethod: null,
		formNoValidate: I,
		formTarget: null,
		headers: z,
		height: R,
		hidden: hr,
		high: R,
		href: null,
		hrefLang: null,
		htmlFor: z,
		httpEquiv: z,
		id: null,
		imageSizes: null,
		imageSrcSet: null,
		inert: I,
		inputMode: null,
		integrity: null,
		is: null,
		isMap: I,
		itemId: null,
		itemProp: z,
		itemRef: z,
		itemScope: I,
		itemType: z,
		kind: null,
		label: null,
		lang: null,
		language: null,
		list: null,
		loading: null,
		loop: I,
		low: R,
		manifest: null,
		max: null,
		maxLength: R,
		media: null,
		method: null,
		min: null,
		minLength: R,
		multiple: I,
		muted: I,
		name: null,
		nonce: null,
		noModule: I,
		noValidate: I,
		onAbort: null,
		onAfterPrint: null,
		onAuxClick: null,
		onBeforeMatch: null,
		onBeforePrint: null,
		onBeforeToggle: null,
		onBeforeUnload: null,
		onBlur: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onContextLost: null,
		onContextMenu: null,
		onContextRestored: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFormData: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLanguageChange: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadEnd: null,
		onLoadStart: null,
		onMessage: null,
		onMessageError: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRejectionHandled: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onScrollEnd: null,
		onSecurityPolicyViolation: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onSlotChange: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnhandledRejection: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onWheel: null,
		open: I,
		optimum: R,
		pattern: null,
		ping: z,
		placeholder: null,
		playsInline: I,
		popover: null,
		popoverTarget: null,
		popoverTargetAction: null,
		poster: null,
		preload: null,
		readOnly: I,
		referrerPolicy: null,
		rel: z,
		required: I,
		reversed: I,
		rows: R,
		rowSpan: R,
		sandbox: z,
		scope: null,
		scoped: I,
		seamless: I,
		selected: I,
		shadowRootClonable: I,
		shadowRootCustomElementRegistry: I,
		shadowRootDelegatesFocus: I,
		shadowRootMode: null,
		shadowRootSerializable: I,
		shape: null,
		size: R,
		sizes: null,
		slot: null,
		span: R,
		spellCheck: L,
		src: null,
		srcDoc: null,
		srcLang: null,
		srcSet: null,
		start: R,
		step: null,
		style: null,
		tabIndex: R,
		target: null,
		title: null,
		translate: null,
		type: null,
		typeMustMatch: I,
		useMap: null,
		value: L,
		width: R,
		wrap: null,
		writingSuggestions: null,
		align: null,
		aLink: null,
		archive: z,
		axis: null,
		background: null,
		bgColor: null,
		border: R,
		borderColor: null,
		bottomMargin: R,
		cellPadding: null,
		cellSpacing: null,
		char: null,
		charOff: null,
		classId: null,
		clear: null,
		code: null,
		codeBase: null,
		codeType: null,
		color: null,
		compact: I,
		declare: I,
		event: null,
		face: null,
		frame: null,
		frameBorder: null,
		hSpace: R,
		leftMargin: R,
		link: null,
		longDesc: null,
		lowSrc: null,
		marginHeight: R,
		marginWidth: R,
		noResize: I,
		noHref: I,
		noShade: I,
		noWrap: I,
		object: null,
		profile: null,
		prompt: null,
		rev: null,
		rightMargin: R,
		rules: null,
		scheme: null,
		scrolling: L,
		standby: null,
		summary: null,
		text: null,
		topMargin: R,
		valueType: null,
		version: null,
		vAlign: null,
		vLink: null,
		vSpace: R,
		allowTransparency: null,
		autoCorrect: null,
		autoSave: null,
		credentialless: I,
		disablePictureInPicture: I,
		disableRemotePlayback: I,
		exportParts: gr,
		part: z,
		prefix: null,
		property: null,
		results: R,
		security: null,
		unselectable: null
	},
	space: "html",
	transform: Tr
}), Dr = Sr({
	attributes: {
		accentHeight: "accent-height",
		alignmentBaseline: "alignment-baseline",
		arabicForm: "arabic-form",
		baselineShift: "baseline-shift",
		capHeight: "cap-height",
		className: "class",
		clipPath: "clip-path",
		clipRule: "clip-rule",
		colorInterpolation: "color-interpolation",
		colorInterpolationFilters: "color-interpolation-filters",
		colorProfile: "color-profile",
		colorRendering: "color-rendering",
		crossOrigin: "crossorigin",
		dataType: "datatype",
		dominantBaseline: "dominant-baseline",
		enableBackground: "enable-background",
		fillOpacity: "fill-opacity",
		fillRule: "fill-rule",
		floodColor: "flood-color",
		floodOpacity: "flood-opacity",
		fontFamily: "font-family",
		fontSize: "font-size",
		fontSizeAdjust: "font-size-adjust",
		fontStretch: "font-stretch",
		fontStyle: "font-style",
		fontVariant: "font-variant",
		fontWeight: "font-weight",
		glyphName: "glyph-name",
		glyphOrientationHorizontal: "glyph-orientation-horizontal",
		glyphOrientationVertical: "glyph-orientation-vertical",
		hrefLang: "hreflang",
		horizAdvX: "horiz-adv-x",
		horizOriginX: "horiz-origin-x",
		horizOriginY: "horiz-origin-y",
		imageRendering: "image-rendering",
		letterSpacing: "letter-spacing",
		lightingColor: "lighting-color",
		markerEnd: "marker-end",
		markerMid: "marker-mid",
		markerStart: "marker-start",
		maskType: "mask-type",
		navDown: "nav-down",
		navDownLeft: "nav-down-left",
		navDownRight: "nav-down-right",
		navLeft: "nav-left",
		navNext: "nav-next",
		navPrev: "nav-prev",
		navRight: "nav-right",
		navUp: "nav-up",
		navUpLeft: "nav-up-left",
		navUpRight: "nav-up-right",
		onAbort: "onabort",
		onActivate: "onactivate",
		onAfterPrint: "onafterprint",
		onBeforePrint: "onbeforeprint",
		onBegin: "onbegin",
		onCancel: "oncancel",
		onCanPlay: "oncanplay",
		onCanPlayThrough: "oncanplaythrough",
		onChange: "onchange",
		onClick: "onclick",
		onClose: "onclose",
		onCopy: "oncopy",
		onCueChange: "oncuechange",
		onCut: "oncut",
		onDblClick: "ondblclick",
		onDrag: "ondrag",
		onDragEnd: "ondragend",
		onDragEnter: "ondragenter",
		onDragExit: "ondragexit",
		onDragLeave: "ondragleave",
		onDragOver: "ondragover",
		onDragStart: "ondragstart",
		onDrop: "ondrop",
		onDurationChange: "ondurationchange",
		onEmptied: "onemptied",
		onEnd: "onend",
		onEnded: "onended",
		onError: "onerror",
		onFocus: "onfocus",
		onFocusIn: "onfocusin",
		onFocusOut: "onfocusout",
		onHashChange: "onhashchange",
		onInput: "oninput",
		onInvalid: "oninvalid",
		onKeyDown: "onkeydown",
		onKeyPress: "onkeypress",
		onKeyUp: "onkeyup",
		onLoad: "onload",
		onLoadedData: "onloadeddata",
		onLoadedMetadata: "onloadedmetadata",
		onLoadStart: "onloadstart",
		onMessage: "onmessage",
		onMouseDown: "onmousedown",
		onMouseEnter: "onmouseenter",
		onMouseLeave: "onmouseleave",
		onMouseMove: "onmousemove",
		onMouseOut: "onmouseout",
		onMouseOver: "onmouseover",
		onMouseUp: "onmouseup",
		onMouseWheel: "onmousewheel",
		onOffline: "onoffline",
		onOnline: "ononline",
		onPageHide: "onpagehide",
		onPageShow: "onpageshow",
		onPaste: "onpaste",
		onPause: "onpause",
		onPlay: "onplay",
		onPlaying: "onplaying",
		onPopState: "onpopstate",
		onProgress: "onprogress",
		onRateChange: "onratechange",
		onRepeat: "onrepeat",
		onReset: "onreset",
		onResize: "onresize",
		onScroll: "onscroll",
		onSeeked: "onseeked",
		onSeeking: "onseeking",
		onSelect: "onselect",
		onShow: "onshow",
		onStalled: "onstalled",
		onStorage: "onstorage",
		onSubmit: "onsubmit",
		onSuspend: "onsuspend",
		onTimeUpdate: "ontimeupdate",
		onToggle: "ontoggle",
		onUnload: "onunload",
		onVolumeChange: "onvolumechange",
		onWaiting: "onwaiting",
		onZoom: "onzoom",
		overlinePosition: "overline-position",
		overlineThickness: "overline-thickness",
		paintOrder: "paint-order",
		panose1: "panose-1",
		pointerEvents: "pointer-events",
		referrerPolicy: "referrerpolicy",
		renderingIntent: "rendering-intent",
		shapeRendering: "shape-rendering",
		stopColor: "stop-color",
		stopOpacity: "stop-opacity",
		strikethroughPosition: "strikethrough-position",
		strikethroughThickness: "strikethrough-thickness",
		strokeDashArray: "stroke-dasharray",
		strokeDashOffset: "stroke-dashoffset",
		strokeLineCap: "stroke-linecap",
		strokeLineJoin: "stroke-linejoin",
		strokeMiterLimit: "stroke-miterlimit",
		strokeOpacity: "stroke-opacity",
		strokeWidth: "stroke-width",
		tabIndex: "tabindex",
		textAnchor: "text-anchor",
		textDecoration: "text-decoration",
		textRendering: "text-rendering",
		transformOrigin: "transform-origin",
		typeOf: "typeof",
		underlinePosition: "underline-position",
		underlineThickness: "underline-thickness",
		unicodeBidi: "unicode-bidi",
		unicodeRange: "unicode-range",
		unitsPerEm: "units-per-em",
		vAlphabetic: "v-alphabetic",
		vHanging: "v-hanging",
		vIdeographic: "v-ideographic",
		vMathematical: "v-mathematical",
		vectorEffect: "vector-effect",
		vertAdvY: "vert-adv-y",
		vertOriginX: "vert-origin-x",
		vertOriginY: "vert-origin-y",
		wordSpacing: "word-spacing",
		writingMode: "writing-mode",
		xHeight: "x-height",
		playbackOrder: "playbackorder",
		timelineBegin: "timelinebegin"
	},
	properties: {
		about: _r,
		accentHeight: R,
		accumulate: null,
		additive: null,
		alignmentBaseline: null,
		alphabetic: R,
		amplitude: R,
		arabicForm: null,
		ascent: R,
		attributeName: null,
		attributeType: null,
		azimuth: R,
		bandwidth: null,
		baselineShift: null,
		baseFrequency: null,
		baseProfile: null,
		bbox: null,
		begin: null,
		bias: R,
		by: null,
		calcMode: null,
		capHeight: R,
		className: z,
		clip: null,
		clipPath: null,
		clipPathUnits: null,
		clipRule: null,
		color: null,
		colorInterpolation: null,
		colorInterpolationFilters: null,
		colorProfile: null,
		colorRendering: null,
		content: null,
		contentScriptType: null,
		contentStyleType: null,
		crossOrigin: null,
		cursor: null,
		cx: null,
		cy: null,
		d: null,
		dataType: null,
		defaultAction: null,
		descent: R,
		diffuseConstant: R,
		direction: null,
		display: null,
		dur: null,
		divisor: R,
		dominantBaseline: null,
		download: I,
		dx: null,
		dy: null,
		edgeMode: null,
		editable: null,
		elevation: R,
		enableBackground: null,
		end: null,
		event: null,
		exponent: R,
		externalResourcesRequired: null,
		fill: null,
		fillOpacity: R,
		fillRule: null,
		filter: null,
		filterRes: null,
		filterUnits: null,
		floodColor: null,
		floodOpacity: null,
		focusable: null,
		focusHighlight: null,
		fontFamily: null,
		fontSize: null,
		fontSizeAdjust: null,
		fontStretch: null,
		fontStyle: null,
		fontVariant: null,
		fontWeight: null,
		format: null,
		fr: null,
		from: null,
		fx: null,
		fy: null,
		g1: gr,
		g2: gr,
		glyphName: gr,
		glyphOrientationHorizontal: null,
		glyphOrientationVertical: null,
		glyphRef: null,
		gradientTransform: null,
		gradientUnits: null,
		handler: null,
		hanging: R,
		hatchContentUnits: null,
		hatchUnits: null,
		height: null,
		href: null,
		hrefLang: null,
		horizAdvX: R,
		horizOriginX: R,
		horizOriginY: R,
		id: null,
		ideographic: R,
		imageRendering: null,
		initialVisibility: null,
		in: null,
		in2: null,
		intercept: R,
		k: R,
		k1: R,
		k2: R,
		k3: R,
		k4: R,
		kernelMatrix: _r,
		kernelUnitLength: null,
		keyPoints: null,
		keySplines: null,
		keyTimes: null,
		kerning: null,
		lang: null,
		lengthAdjust: null,
		letterSpacing: null,
		lightingColor: null,
		limitingConeAngle: R,
		local: null,
		markerEnd: null,
		markerMid: null,
		markerStart: null,
		markerHeight: null,
		markerUnits: null,
		markerWidth: null,
		mask: null,
		maskContentUnits: null,
		maskType: null,
		maskUnits: null,
		mathematical: null,
		max: null,
		media: null,
		mediaCharacterEncoding: null,
		mediaContentEncodings: null,
		mediaSize: R,
		mediaTime: null,
		method: null,
		min: null,
		mode: null,
		name: null,
		navDown: null,
		navDownLeft: null,
		navDownRight: null,
		navLeft: null,
		navNext: null,
		navPrev: null,
		navRight: null,
		navUp: null,
		navUpLeft: null,
		navUpRight: null,
		numOctaves: null,
		observer: null,
		offset: null,
		onAbort: null,
		onActivate: null,
		onAfterPrint: null,
		onBeforePrint: null,
		onBegin: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnd: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFocusIn: null,
		onFocusOut: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadStart: null,
		onMessage: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onMouseWheel: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRepeat: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onShow: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onZoom: null,
		opacity: null,
		operator: null,
		order: null,
		orient: null,
		orientation: null,
		origin: null,
		overflow: null,
		overlay: null,
		overlinePosition: R,
		overlineThickness: R,
		paintOrder: null,
		panose1: null,
		path: null,
		pathLength: R,
		patternContentUnits: null,
		patternTransform: null,
		patternUnits: null,
		phase: null,
		ping: z,
		pitch: null,
		playbackOrder: null,
		pointerEvents: null,
		points: null,
		pointsAtX: R,
		pointsAtY: R,
		pointsAtZ: R,
		preserveAlpha: null,
		preserveAspectRatio: null,
		primitiveUnits: null,
		propagate: null,
		property: _r,
		r: null,
		radius: null,
		referrerPolicy: null,
		refX: null,
		refY: null,
		rel: _r,
		rev: _r,
		renderingIntent: null,
		repeatCount: null,
		repeatDur: null,
		requiredExtensions: _r,
		requiredFeatures: _r,
		requiredFonts: _r,
		requiredFormats: _r,
		resource: null,
		restart: null,
		result: null,
		rotate: null,
		rx: null,
		ry: null,
		scale: null,
		seed: null,
		shapeRendering: null,
		side: null,
		slope: null,
		snapshotTime: null,
		specularConstant: R,
		specularExponent: R,
		spreadMethod: null,
		spacing: null,
		startOffset: null,
		stdDeviation: null,
		stemh: null,
		stemv: null,
		stitchTiles: null,
		stopColor: null,
		stopOpacity: null,
		strikethroughPosition: R,
		strikethroughThickness: R,
		string: null,
		stroke: null,
		strokeDashArray: _r,
		strokeDashOffset: null,
		strokeLineCap: null,
		strokeLineJoin: null,
		strokeMiterLimit: R,
		strokeOpacity: R,
		strokeWidth: null,
		style: null,
		surfaceScale: R,
		syncBehavior: null,
		syncBehaviorDefault: null,
		syncMaster: null,
		syncTolerance: null,
		syncToleranceDefault: null,
		systemLanguage: _r,
		tabIndex: R,
		tableValues: null,
		target: null,
		targetX: R,
		targetY: R,
		textAnchor: null,
		textDecoration: null,
		textRendering: null,
		textLength: null,
		timelineBegin: null,
		title: null,
		transformBehavior: null,
		type: null,
		typeOf: _r,
		to: null,
		transform: null,
		transformOrigin: null,
		u1: null,
		u2: null,
		underlinePosition: R,
		underlineThickness: R,
		unicode: null,
		unicodeBidi: null,
		unicodeRange: null,
		unitsPerEm: R,
		values: null,
		vAlphabetic: R,
		vMathematical: R,
		vectorEffect: null,
		vHanging: R,
		vIdeographic: R,
		version: null,
		vertAdvY: R,
		vertOriginX: R,
		vertOriginY: R,
		viewBox: null,
		viewTarget: null,
		visibility: null,
		width: null,
		widths: null,
		wordSpacing: null,
		writingMode: null,
		x: null,
		x1: null,
		x2: null,
		xChannelSelector: null,
		xHeight: R,
		y: null,
		y1: null,
		y2: null,
		yChannelSelector: null,
		z: null,
		zoomAndPan: null
	},
	space: "svg",
	transform: wr
}), Or = Sr({
	properties: {
		xLinkActuate: null,
		xLinkArcRole: null,
		xLinkHref: null,
		xLinkRole: null,
		xLinkShow: null,
		xLinkTitle: null,
		xLinkType: null
	},
	space: "xlink",
	transform(e, t) {
		return "xlink:" + t.slice(5).toLowerCase();
	}
}), kr = Sr({
	attributes: { xmlnsxlink: "xmlns:xlink" },
	properties: {
		xmlnsXLink: null,
		xmlns: null
	},
	space: "xmlns",
	transform: Tr
}), Ar = Sr({
	properties: {
		xmlBase: null,
		xmlLang: null,
		xmlSpace: null
	},
	space: "xml",
	transform(e, t) {
		return "xml:" + t.slice(3).toLowerCase();
	}
}), jr = {
	classId: "classID",
	dataType: "datatype",
	itemId: "itemID",
	strokeDashArray: "strokeDasharray",
	strokeDashOffset: "strokeDashoffset",
	strokeLineCap: "strokeLinecap",
	strokeLineJoin: "strokeLinejoin",
	strokeMiterLimit: "strokeMiterlimit",
	typeOf: "typeof",
	xLinkActuate: "xlinkActuate",
	xLinkArcRole: "xlinkArcrole",
	xLinkHref: "xlinkHref",
	xLinkRole: "xlinkRole",
	xLinkShow: "xlinkShow",
	xLinkTitle: "xlinkTitle",
	xLinkType: "xlinkType",
	xmlnsXLink: "xmlnsXlink"
}, Mr = /[A-Z]/g, Nr = /-[a-z]/g, Pr = /^data[-\w.:]+$/i;
function Fr(e, t) {
	let n = dr(t), r = t, i = fr;
	if (n in e.normal) return e.property[e.normal[n]];
	if (n.length > 4 && n.slice(0, 4) === "data" && Pr.test(t)) {
		if (t.charAt(4) === "-") {
			let e = t.slice(5).replace(Nr, Lr);
			r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
		} else {
			let e = t.slice(4);
			if (!Nr.test(e)) {
				let n = e.replace(Mr, Ir);
				n.charAt(0) !== "-" && (n = "-" + n), t = "data" + n;
			}
		}
		i = br;
	}
	return new i(r, t);
}
function Ir(e) {
	return "-" + e.toLowerCase();
}
function Lr(e) {
	return e.charAt(1).toUpperCase();
}
//#endregion
//#region node_modules/property-information/index.js
var Rr = ur([
	Cr,
	Er,
	Or,
	kr,
	Ar
], "html"), zr = ur([
	Cr,
	Dr,
	Or,
	kr,
	Ar
], "svg");
//#endregion
//#region node_modules/space-separated-tokens/index.js
function Br(e) {
	let t = String(e || "").trim();
	return t ? t.split(/[ \t\n\r\f]+/g) : [];
}
function Vr(e) {
	return e.join(" ").trim();
}
//#endregion
//#region node_modules/inline-style-parser/cjs/index.js
var Hr = /* @__PURE__ */ o(((e, t) => {
	var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, r = /\n/g, i = /^\s*/, a = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, o = /^:\s*/, s = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, c = /^[;\s]*/, l = /^\s+|\s+$/g;
	function u(e, t) {
		if (typeof e != "string") throw TypeError("First argument must be a string");
		if (!e) return [];
		t ||= {};
		var l = 1, u = 1;
		function f(e) {
			var t = e.match(r);
			t && (l += t.length);
			var n = e.lastIndexOf("\n");
			u = ~n ? e.length - n : u + e.length;
		}
		function p() {
			var e = {
				line: l,
				column: u
			};
			return function(t) {
				return t.position = new m(e), _(), t;
			};
		}
		function m(e) {
			this.start = e, this.end = {
				line: l,
				column: u
			}, this.source = t.source;
		}
		m.prototype.content = e;
		function h(n) {
			var r = /* @__PURE__ */ Error(t.source + ":" + l + ":" + u + ": " + n);
			if (r.reason = n, r.filename = t.source, r.line = l, r.column = u, r.source = e, !t.silent) throw r;
		}
		function g(t) {
			var n = t.exec(e);
			if (n) {
				var r = n[0];
				return f(r), e = e.slice(r.length), n;
			}
		}
		function _() {
			g(i);
		}
		function v(e) {
			var t;
			for (e ||= []; t = y();) t !== !1 && e.push(t);
			return e;
		}
		function y() {
			var t = p();
			if (e.charAt(0) == "/" && e.charAt(1) == "*") {
				for (var n = 2; e.charAt(n) != "" && (e.charAt(n) != "*" || e.charAt(n + 1) != "/");) ++n;
				if (n += 2, e.charAt(n - 1) === "") return h("End of comment missing");
				var r = e.slice(2, n - 2);
				return u += 2, f(r), e = e.slice(n), u += 2, t({
					type: "comment",
					comment: r
				});
			}
		}
		function b() {
			var e = p(), t = g(a);
			if (t) {
				if (y(), !g(o)) return h("property missing ':'");
				var r = g(s), i = e({
					type: "declaration",
					property: d(t[0].replace(n, "")),
					value: r ? d(r[0].replace(n, "")) : ""
				});
				return g(c), i;
			}
		}
		function x() {
			var e = [];
			v(e);
			for (var t; t = b();) t !== !1 && (e.push(t), v(e));
			return e;
		}
		return _(), x();
	}
	function d(e) {
		return e ? e.replace(l, "") : "";
	}
	t.exports = u;
})), Ur = /* @__PURE__ */ o(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = r;
	var n = t(Hr());
	function r(e, t) {
		let r = null;
		if (!e || typeof e != "string") return r;
		let i = (0, n.default)(e), a = typeof t == "function";
		return i.forEach((e) => {
			if (e.type !== "declaration") return;
			let { property: n, value: i } = e;
			a ? t(n, i, e) : i && (r ||= {}, r[n] = i);
		}), r;
	}
})), Wr = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.camelCase = void 0;
	var t = /^--[a-zA-Z0-9_-]+$/, n = /-([a-z])/g, r = /^[^-]+$/, i = /^-(webkit|moz|ms|o|khtml)-/, a = /^-(ms)-/, o = function(e) {
		return !e || r.test(e) || t.test(e);
	}, s = function(e, t) {
		return t.toUpperCase();
	}, c = function(e, t) {
		return `${t}-`;
	};
	e.camelCase = function(e, t) {
		return t === void 0 && (t = {}), o(e) ? e : (e = e.toLowerCase(), e = t.reactCompat ? e.replace(a, c) : e.replace(i, c), e.replace(n, s));
	};
})), Gr = /* @__PURE__ */ o(((e, t) => {
	var n = (e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	})(Ur()), r = Wr();
	function i(e, t) {
		var i = {};
		return !e || typeof e != "string" || (0, n.default)(e, function(e, n) {
			e && n && (i[(0, r.camelCase)(e, t)] = n);
		}), i;
	}
	i.default = i, t.exports = i;
})), Kr = Jr("end"), qr = Jr("start");
function Jr(e) {
	return t;
	function t(t) {
		let n = t && t.position && t.position[e] || {};
		if (typeof n.line == "number" && n.line > 0 && typeof n.column == "number" && n.column > 0) return {
			line: n.line,
			column: n.column,
			offset: typeof n.offset == "number" && n.offset > -1 ? n.offset : void 0
		};
	}
}
function Yr(e) {
	let t = qr(e), n = Kr(e);
	if (t && n) return {
		start: t,
		end: n
	};
}
//#endregion
//#region node_modules/unist-util-stringify-position/lib/index.js
function Xr(e) {
	return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Qr(e.position) : "start" in e || "end" in e ? Qr(e) : "line" in e || "column" in e ? Zr(e) : "";
}
function Zr(e) {
	return $r(e && e.line) + ":" + $r(e && e.column);
}
function Qr(e) {
	return Zr(e && e.start) + "-" + Zr(e && e.end);
}
function $r(e) {
	return e && typeof e == "number" ? e : 1;
}
//#endregion
//#region node_modules/vfile-message/lib/index.js
var ei = class extends Error {
	constructor(e, t, n) {
		super(), typeof t == "string" && (n = t, t = void 0);
		let r = "", i = {}, a = !1;
		if (t && (i = "line" in t && "column" in t || "start" in t && "end" in t ? { place: t } : "type" in t ? {
			ancestors: [t],
			place: t.position
		} : { ...t }), typeof e == "string" ? r = e : !i.cause && e && (a = !0, r = e.message, i.cause = e), !i.ruleId && !i.source && typeof n == "string") {
			let e = n.indexOf(":");
			e === -1 ? i.ruleId = n : (i.source = n.slice(0, e), i.ruleId = n.slice(e + 1));
		}
		if (!i.place && i.ancestors && i.ancestors) {
			let e = i.ancestors[i.ancestors.length - 1];
			e && (i.place = e.position);
		}
		let o = i.place && "start" in i.place ? i.place.start : i.place;
		this.ancestors = i.ancestors || void 0, this.cause = i.cause || void 0, this.column = o ? o.column : void 0, this.fatal = void 0, this.file = "", this.message = r, this.line = o ? o.line : void 0, this.name = Xr(i.place) || "1:1", this.place = i.place || void 0, this.reason = this.message, this.ruleId = i.ruleId || void 0, this.source = i.source || void 0, this.stack = a && i.cause && typeof i.cause.stack == "string" ? i.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
	}
};
ei.prototype.file = "", ei.prototype.name = "", ei.prototype.reason = "", ei.prototype.message = "", ei.prototype.stack = "", ei.prototype.column = void 0, ei.prototype.line = void 0, ei.prototype.ancestors = void 0, ei.prototype.cause = void 0, ei.prototype.fatal = void 0, ei.prototype.place = void 0, ei.prototype.ruleId = void 0, ei.prototype.source = void 0;
//#endregion
//#region node_modules/hast-util-to-jsx-runtime/lib/index.js
var ti = /* @__PURE__ */ l(Gr(), 1), ni = {}.hasOwnProperty, ri = /* @__PURE__ */ new Map(), ii = /[A-Z]/g, ai = /* @__PURE__ */ new Set([
	"table",
	"tbody",
	"thead",
	"tfoot",
	"tr"
]), oi = /* @__PURE__ */ new Set(["td", "th"]), si = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function ci(e, t) {
	if (!t || t.Fragment === void 0) throw TypeError("Expected `Fragment` in options");
	let n = t.filePath || void 0, r;
	if (t.development) {
		if (typeof t.jsxDEV != "function") throw TypeError("Expected `jsxDEV` in options when `development: true`");
		r = yi(n, t.jsxDEV);
	} else {
		if (typeof t.jsx != "function") throw TypeError("Expected `jsx` in production options");
		if (typeof t.jsxs != "function") throw TypeError("Expected `jsxs` in production options");
		r = vi(n, t.jsx, t.jsxs);
	}
	let i = {
		Fragment: t.Fragment,
		ancestors: [],
		components: t.components || {},
		create: r,
		elementAttributeNameCase: t.elementAttributeNameCase || "react",
		evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
		filePath: n,
		ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
		passKeys: t.passKeys !== !1,
		passNode: t.passNode || !1,
		schema: t.space === "svg" ? zr : Rr,
		stylePropertyNameCase: t.stylePropertyNameCase || "dom",
		tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
	}, a = li(i, e, void 0);
	return a && typeof a != "string" ? a : i.create(e, i.Fragment, { children: a || void 0 }, void 0);
}
function li(e, t, n) {
	if (t.type === "element") return ui(e, t, n);
	if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression") return di(e, t);
	if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement") return pi(e, t, n);
	if (t.type === "mdxjsEsm") return fi(e, t);
	if (t.type === "root") return mi(e, t, n);
	if (t.type === "text") return hi(e, t);
}
function ui(e, t, n) {
	let r = e.schema, i = r;
	t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = zr, e.schema = i), e.ancestors.push(t);
	let a = Ti(e, t.tagName, !1), o = bi(e, t), s = Si(e, t);
	return ai.has(t.tagName) && (s = s.filter(function(e) {
		return typeof e != "string" || !sr(e);
	})), gi(e, o, a, t), _i(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function di(e, t) {
	if (t.data && t.data.estree && e.evaluater) {
		let n = t.data.estree.body[0];
		return n.type, e.evaluater.evaluateExpression(n.expression);
	}
	Ei(e, t.position);
}
function fi(e, t) {
	if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
	Ei(e, t.position);
}
function pi(e, t, n) {
	let r = e.schema, i = r;
	t.name === "svg" && r.space === "html" && (i = zr, e.schema = i), e.ancestors.push(t);
	let a = t.name === null ? e.Fragment : Ti(e, t.name, !0), o = xi(e, t), s = Si(e, t);
	return gi(e, o, a, t), _i(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function mi(e, t, n) {
	let r = {};
	return _i(r, Si(e, t)), e.create(t, e.Fragment, r, n);
}
function hi(e, t) {
	return t.value;
}
function gi(e, t, n, r) {
	typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function _i(e, t) {
	if (t.length > 0) {
		let n = t.length > 1 ? t : t[0];
		n && (e.children = n);
	}
}
function vi(e, t, n) {
	return r;
	function r(e, r, i, a) {
		let o = Array.isArray(i.children) ? n : t;
		return a ? o(r, i, a) : o(r, i);
	}
}
function yi(e, t) {
	return n;
	function n(n, r, i, a) {
		let o = Array.isArray(i.children), s = qr(n);
		return t(r, i, a, o, {
			columnNumber: s ? s.column - 1 : void 0,
			fileName: e,
			lineNumber: s ? s.line : void 0
		}, void 0);
	}
}
function bi(e, t) {
	let n = {}, r, i;
	for (i in t.properties) if (i !== "children" && ni.call(t.properties, i)) {
		let a = Ci(e, i, t.properties[i]);
		if (a) {
			let [i, o] = a;
			e.tableCellAlignToStyle && i === "align" && typeof o == "string" && oi.has(t.tagName) ? r = o : n[i] = o;
		}
	}
	if (r) {
		let t = n.style ||= {};
		t[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
	}
	return n;
}
function xi(e, t) {
	let n = {};
	for (let r of t.attributes) if (r.type === "mdxJsxExpressionAttribute") {
		if (r.data && r.data.estree && e.evaluater) {
			let t = r.data.estree.body[0];
			t.type;
			let i = t.expression;
			i.type;
			let a = i.properties[0];
			a.type, Object.assign(n, e.evaluater.evaluateExpression(a.argument));
		} else Ei(e, t.position);
	} else {
		let i = r.name, a;
		if (r.value && typeof r.value == "object") {
			if (r.value.data && r.value.data.estree && e.evaluater) {
				let t = r.value.data.estree.body[0];
				t.type, a = e.evaluater.evaluateExpression(t.expression);
			} else Ei(e, t.position);
		} else a = r.value === null || r.value;
		n[i] = a;
	}
	return n;
}
function Si(e, t) {
	let n = [], r = -1, i = e.passKeys ? /* @__PURE__ */ new Map() : ri;
	for (; ++r < t.children.length;) {
		let a = t.children[r], o;
		if (e.passKeys) {
			let e = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
			if (e) {
				let t = i.get(e) || 0;
				o = e + "-" + t, i.set(e, t + 1);
			}
		}
		let s = li(e, a, o);
		s !== void 0 && n.push(s);
	}
	return n;
}
function Ci(e, t, n) {
	let r = Fr(e.schema, t);
	if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
		if (Array.isArray(n) && (n = r.commaSeparated ? tr(n) : Vr(n)), r.property === "style") {
			let t = typeof n == "object" ? n : wi(e, String(n));
			return e.stylePropertyNameCase === "css" && (t = Di(t)), ["style", t];
		}
		return [e.elementAttributeNameCase === "react" && r.space ? jr[r.property] || r.property : r.attribute, n];
	}
}
function wi(e, t) {
	try {
		return (0, ti.default)(t, { reactCompat: !0 });
	} catch (t) {
		if (e.ignoreInvalidStyle) return {};
		let n = t, r = new ei("Cannot parse `style` attribute", {
			ancestors: e.ancestors,
			cause: n,
			ruleId: "style",
			source: "hast-util-to-jsx-runtime"
		});
		throw r.file = e.filePath || void 0, r.url = si + "#cannot-parse-style-attribute", r;
	}
}
function Ti(e, t, n) {
	let r;
	if (!n) r = {
		type: "Literal",
		value: t
	};
	else if (t.includes(".")) {
		let e = t.split("."), n = -1, i;
		for (; ++n < e.length;) {
			let t = ar(e[n]) ? {
				type: "Identifier",
				name: e[n]
			} : {
				type: "Literal",
				value: e[n]
			};
			i = i ? {
				type: "MemberExpression",
				object: i,
				property: t,
				computed: !!(n && t.type === "Literal"),
				optional: !1
			} : t;
		}
		r = i;
	} else r = ar(t) && !/^[a-z]/.test(t) ? {
		type: "Identifier",
		name: t
	} : {
		type: "Literal",
		value: t
	};
	if (r.type === "Literal") {
		let t = r.value;
		return ni.call(e.components, t) ? e.components[t] : t;
	}
	if (e.evaluater) return e.evaluater.evaluateExpression(r);
	Ei(e);
}
function Ei(e, t) {
	let n = new ei("Cannot handle MDX estrees without `createEvaluater`", {
		ancestors: e.ancestors,
		place: t,
		ruleId: "mdx-estree",
		source: "hast-util-to-jsx-runtime"
	});
	throw n.file = e.filePath || void 0, n.url = si + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function Di(e) {
	let t = {}, n;
	for (n in e) ni.call(e, n) && (t[Oi(n)] = e[n]);
	return t;
}
function Oi(e) {
	let t = e.replace(ii, ki);
	return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function ki(e) {
	return "-" + e.toLowerCase();
}
//#endregion
//#region node_modules/html-url-attributes/lib/index.js
var Ai = {
	action: ["form"],
	cite: [
		"blockquote",
		"del",
		"ins",
		"q"
	],
	data: ["object"],
	formAction: ["button", "input"],
	href: [
		"a",
		"area",
		"base",
		"link"
	],
	icon: ["menuitem"],
	itemId: null,
	manifest: ["html"],
	ping: ["a", "area"],
	poster: ["video"],
	src: [
		"audio",
		"embed",
		"iframe",
		"img",
		"input",
		"script",
		"source",
		"track",
		"video"
	]
}, ji = {};
function Mi(e, t) {
	let n = t || ji;
	return Ni(e, typeof n.includeImageAlt != "boolean" || n.includeImageAlt, typeof n.includeHtml != "boolean" || n.includeHtml);
}
function Ni(e, t, n) {
	if (Fi(e)) {
		if ("value" in e) return e.type === "html" && !n ? "" : e.value;
		if (t && "alt" in e && e.alt) return e.alt;
		if ("children" in e) return Pi(e.children, t, n);
	}
	return Array.isArray(e) ? Pi(e, t, n) : "";
}
function Pi(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) r[i] = Ni(e[i], t, n);
	return r.join("");
}
function Fi(e) {
	return !!(e && typeof e == "object");
}
//#endregion
//#region node_modules/decode-named-character-reference/index.dom.js
var Ii = document.createElement("i");
function Li(e) {
	let t = "&" + e + ";";
	Ii.innerHTML = t;
	let n = Ii.textContent;
	return n.charCodeAt(n.length - 1) === 59 && e !== "semi" ? !1 : n !== t && n;
}
//#endregion
//#region node_modules/micromark-util-chunked/index.js
function Ri(e, t, n, r) {
	let i = e.length, a = 0, o;
	if (t = t < 0 ? -t > i ? 0 : i + t : t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) o = Array.from(r), o.unshift(t, n), e.splice(...o);
	else for (n && e.splice(t, n); a < r.length;) o = r.slice(a, a + 1e4), o.unshift(t, 0), e.splice(...o), a += 1e4, t += 1e4;
}
function zi(e, t) {
	return e.length > 0 ? (Ri(e, e.length, 0, t), e) : t;
}
//#endregion
//#region node_modules/micromark-util-combine-extensions/index.js
var Bi = {}.hasOwnProperty;
function Vi(e) {
	let t = {}, n = -1;
	for (; ++n < e.length;) Hi(t, e[n]);
	return t;
}
function Hi(e, t) {
	let n;
	for (n in t) {
		let r = (Bi.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n], a;
		if (i) for (a in i) {
			Bi.call(r, a) || (r[a] = []);
			let e = i[a];
			Ui(r[a], Array.isArray(e) ? e : e ? [e] : []);
		}
	}
}
function Ui(e, t) {
	let n = -1, r = [];
	for (; ++n < t.length;) (t[n].add === "after" ? e : r).push(t[n]);
	Ri(e, 0, 0, r);
}
//#endregion
//#region node_modules/micromark-util-decode-numeric-character-reference/index.js
function Wi(e, t) {
	let n = Number.parseInt(e, t);
	return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) == 65535 || (n & 65535) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n);
}
//#endregion
//#region node_modules/micromark-util-normalize-identifier/index.js
function Gi(e) {
	return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
//#endregion
//#region node_modules/micromark-util-character/index.js
var Ki = ta(/[A-Za-z]/), qi = ta(/[\dA-Za-z]/), Ji = ta(/[#-'*+\--9=?A-Z^-~]/);
function Yi(e) {
	return e !== null && (e < 32 || e === 127);
}
var Xi = ta(/\d/), Zi = ta(/[\dA-Fa-f]/), Qi = ta(/[!-/:-@[-`{-~]/);
function B(e) {
	return e !== null && e < -2;
}
function V(e) {
	return e !== null && (e < 0 || e === 32);
}
function H(e) {
	return e === -2 || e === -1 || e === 32;
}
var $i = ta(/\p{P}|\p{S}/u), ea = ta(/\s/);
function ta(e) {
	return t;
	function t(t) {
		return t !== null && t > -1 && e.test(String.fromCharCode(t));
	}
}
//#endregion
//#region node_modules/micromark-util-sanitize-uri/index.js
function na(e) {
	let t = [], n = -1, r = 0, i = 0;
	for (; ++n < e.length;) {
		let a = e.charCodeAt(n), o = "";
		if (a === 37 && qi(e.charCodeAt(n + 1)) && qi(e.charCodeAt(n + 2))) i = 2;
		else if (a < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (o = String.fromCharCode(a));
		else if (a > 55295 && a < 57344) {
			let t = e.charCodeAt(n + 1);
			a < 56320 && t > 56319 && t < 57344 ? (o = String.fromCharCode(a, t), i = 1) : o = "�";
		} else o = String.fromCharCode(a);
		o &&= (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, ""), i &&= (n += i, 0);
	}
	return t.join("") + e.slice(r);
}
//#endregion
//#region node_modules/micromark-factory-space/index.js
function U(e, t, n, r) {
	let i = r ? r - 1 : Infinity, a = 0;
	return o;
	function o(r) {
		return H(r) ? (e.enter(n), s(r)) : t(r);
	}
	function s(r) {
		return H(r) && a++ < i ? (e.consume(r), s) : (e.exit(n), t(r));
	}
}
function ra(e, t, n, r, i, a) {
	let o = 0;
	return s;
	function s(t) {
		return a > 0 && H(t) ? (e.enter(r), c(t)) : l(t);
	}
	function c(t) {
		return H(t) && o < a ? (e.consume(t), o++, c) : (e.exit(r), l(t));
	}
	function l(e) {
		return o >= i ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/content.js
var ia = { tokenize: aa };
function aa(e) {
	let t = e.attempt(this.parser.constructs.contentInitial, r, i), n;
	return t;
	function r(n) {
		if (n === null) {
			e.consume(n);
			return;
		}
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), U(e, t, "linePrefix");
	}
	function i(t) {
		return e.enter("paragraph"), a(t);
	}
	function a(t) {
		let r = e.enter("chunkText", {
			contentType: "text",
			previous: n
		});
		return n && (n.next = r), n = r, o(t);
	}
	function o(t) {
		if (t === null) {
			e.exit("chunkText"), e.exit("paragraph"), e.consume(t);
			return;
		}
		return B(t) ? (e.consume(t), e.exit("chunkText"), a) : (e.consume(t), o);
	}
}
//#endregion
//#region node_modules/micromark-util-edit-map/index.js
var oa = class {
	constructor() {
		this.index = /* @__PURE__ */ new Map(), this.map = [];
	}
	add(e, t, n) {
		sa(this, e, t, n, !1);
	}
	addBefore(e, t, n) {
		sa(this, e, t, n, !0);
	}
	consume(e) {
		if (this.map.sort(function(e, t) {
			return e[0] - t[0];
		}), this.map.length === 0) return;
		let t = this.map.length, n = [];
		for (; t > 0;) --t, n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]), e.length = this.map[t][0];
		n.push(e.slice()), e.length = 0;
		let r = n.pop();
		for (; r;) {
			for (let t of r) e.push(t);
			r = n.pop();
		}
		this.map.length = 0, this.index.clear();
	}
};
function sa(e, t, n, r, i) {
	if (n === 0 && r.length === 0) return;
	let a = e.index.get(t);
	if (a) {
		a[1] += n, i ? (r.push(...a[2]), a[2] = r) : a[2].push(...r);
		return;
	}
	let o = [
		t,
		n,
		r
	];
	e.map.push(o), e.index.set(t, o);
}
//#endregion
//#region node_modules/micromark/lib/initialize/document.js
var ca = { tokenize: ua }, la = { tokenize: da };
function ua(e) {
	let t = this, n = [], r = 0, i, a, o;
	return s;
	function s(i) {
		if (r < n.length) {
			let a = n[r];
			return t.containerState = a[1], e.attempt(a[0].continuation, c, l)(i);
		}
		return l(i);
	}
	function c(e) {
		if (r++, t.containerState._closeFlow) {
			t.containerState._closeFlow = void 0, i && v();
			let n = t.events.length, a = n, o;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				o = t.events[a][1].end;
				break;
			}
			_(r);
			let s = n;
			for (; s < t.events.length;) t.events[s][1].end = { ...o }, s++;
			let c = new oa();
			return c.add(a + 1, 0, t.events.slice(n)), c.add(n, s - n, []), c.consume(t.events), l(e);
		}
		return s(e);
	}
	function l(a) {
		if (r === n.length) {
			if (!i) return f(a);
			if (i.currentConstruct && i.currentConstruct.concrete) return m(a);
			t.interrupt = !(!i.currentConstruct || i._gfmTableDynamicInterruptHack);
		}
		return t.containerState = {}, e.check(la, u, d)(a);
	}
	function u(e) {
		return i && v(), _(r), f(e);
	}
	function d(e) {
		return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, m(e);
	}
	function f(n) {
		return t.containerState = {}, e.attempt(la, p, m)(n);
	}
	function p(e) {
		return r++, n.push([t.currentConstruct, t.containerState]), f(e);
	}
	function m(n) {
		if (n === null) {
			i && v(), _(0), e.consume(n);
			return;
		}
		return i ||= t.parser.flow(t.now()), e.enter("chunkFlow", {
			_tokenizer: i,
			contentType: "flow",
			previous: a
		}), h(n);
	}
	function h(n) {
		if (n === null) {
			g(e.exit("chunkFlow"), !0), _(0), e.consume(n);
			return;
		}
		return B(n) ? (e.consume(n), g(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, s) : (e.consume(n), h);
	}
	function g(e, n) {
		let s = t.sliceStream(e);
		if (n && s.push(null), e.previous = a, a && (a.next = e), a = e, i.defineSkip(e.start), i.write(s), t.parser.lazy[e.start.line]) {
			let e = i.events.length;
			for (; e--;) if (i.events[e][1].start.offset < o && (!i.events[e][1].end || i.events[e][1].end.offset > o)) return;
			let n = t.events.length, a = n, s, c;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				if (s) {
					c = t.events[a][1].end;
					break;
				}
				s = !0;
			}
			for (_(r), e = n; e < t.events.length;) t.events[e][1].end = { ...c }, e++;
			let l = new oa();
			l.add(a + 1, 0, t.events.slice(n)), l.add(n, e - n, []), l.consume(t.events);
		}
	}
	function _(r) {
		let i = n.length;
		for (; i-- > r;) {
			let r = n[i];
			t.containerState = r[1], r[0].exit.call(t, e);
		}
		n.length = r;
	}
	function v() {
		i.write([null]), a = void 0, i = void 0, t.containerState._closeFlow = void 0;
	}
}
function da(e, t, n) {
	return U(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
//#endregion
//#region node_modules/micromark-util-classify-character/index.js
function fa(e) {
	if (e === null || V(e) || ea(e)) return 1;
	if ($i(e)) return 2;
}
//#endregion
//#region node_modules/micromark-util-resolve-all/index.js
function pa(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) {
		let a = e[i].resolveAll;
		a && !r.includes(a) && (t = a(t, n), r.push(a));
	}
	return t;
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/attention.js
var ma = {
	name: "attention",
	resolveAll: ha,
	tokenize: ga
};
function ha(e, t) {
	let n = -1, r;
	for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
		let i = n;
		for (; i--;) if (e[i][0] === "exit" && e[i][1].type === "attentionSequence" && e[i][1]._open && t.sliceSerialize(e[i][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
			if ((e[i][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[i][1].end.offset - e[i][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
			let a = e[i][1].end.offset - e[i][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1, o = { ...e[i][1].end }, s = { ...e[n][1].start };
			_a(o, -a), _a(s, a);
			let c = {
				type: a > 1 ? "strongSequence" : "emphasisSequence",
				start: o,
				end: { ...e[i][1].end }
			}, l = {
				type: a > 1 ? "strongSequence" : "emphasisSequence",
				start: { ...e[n][1].start },
				end: s
			}, u = {
				type: a > 1 ? "strongText" : "emphasisText",
				start: { ...e[i][1].end },
				end: { ...e[n][1].start }
			}, d = {
				type: a > 1 ? "strong" : "emphasis",
				start: { ...c.start },
				end: { ...l.end }
			};
			e[i][1].end = { ...c.start }, e[n][1].start = { ...l.end }, r = [], e[i][1].end.offset - e[i][1].start.offset && (r = zi(r, [[
				"enter",
				e[i][1],
				t
			], [
				"exit",
				e[i][1],
				t
			]])), r = zi(r, [
				[
					"enter",
					d,
					t
				],
				[
					"enter",
					c,
					t
				],
				[
					"exit",
					c,
					t
				],
				[
					"enter",
					u,
					t
				]
			]), r = zi(r, pa(t.parser.constructs.insideSpan.null, e.slice(i + 1, n), t)), r = zi(r, [
				[
					"exit",
					u,
					t
				],
				[
					"enter",
					l,
					t
				],
				[
					"exit",
					l,
					t
				],
				[
					"exit",
					d,
					t
				]
			]);
			let f = 0;
			e[n][1].end.offset - e[n][1].start.offset && (f = 2, r = zi(r, [[
				"enter",
				e[n][1],
				t
			], [
				"exit",
				e[n][1],
				t
			]])), Ri(e, i - 1, n - i + 3, r), n = i + r.length - f - 2;
			break;
		}
	}
	for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
	return e;
}
function ga(e, t) {
	let n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = fa(r), a;
	return o;
	function o(t) {
		return a = t, e.enter("attentionSequence"), s(t);
	}
	function s(o) {
		if (o === a) return e.consume(o), s;
		let c = e.exit("attentionSequence"), l = fa(o), u = !l || l === 2 && i || n.includes(o) && o !== 42 && o !== 95, d = !i || i === 2 && l || n.includes(r) && r !== 42 && r !== 95;
		return c._open = !!(a === 42 ? u : u && (i || !d)), c._close = !!(a === 42 ? d : d && (l || !u)), t(o);
	}
}
function _a(e, t) {
	e.column += t, e.offset += t, e._bufferIndex += t;
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/autolink.js
var va = {
	name: "autolink",
	tokenize: ya
};
function ya(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
	}
	function a(t) {
		return Ki(t) ? (e.consume(t), o) : t === 64 ? n(t) : l(t);
	}
	function o(e) {
		return e === 43 || e === 45 || e === 46 || qi(e) ? (r = 1, s(e)) : l(e);
	}
	function s(t) {
		return t === 58 ? (e.consume(t), r = 0, c) : (t === 43 || t === 45 || t === 46 || qi(t)) && r++ < 32 ? (e.consume(t), s) : (r = 0, l(t));
	}
	function c(r) {
		return r === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), t) : r === null || r === 32 || r === 60 || Yi(r) ? n(r) : (e.consume(r), c);
	}
	function l(t) {
		return t === 64 ? (e.consume(t), u) : Ji(t) ? (e.consume(t), l) : n(t);
	}
	function u(e) {
		return qi(e) ? d(e) : n(e);
	}
	function d(n) {
		return n === 46 ? (e.consume(n), r = 0, u) : n === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t) : f(n);
	}
	function f(t) {
		if ((t === 45 || qi(t)) && r++ < 63) {
			let n = t === 45 ? f : d;
			return e.consume(t), n;
		}
		return n(t);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/blank-line.js
var ba = {
	partial: !0,
	tokenize: xa
};
function xa(e, t, n) {
	return r;
	function r(t) {
		return H(t) ? U(e, i, "linePrefix")(t) : i(t);
	}
	function i(e) {
		return e === null || B(e) ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/block-quote.js
var Sa = {
	continuation: { tokenize: wa },
	exit: Ta,
	name: "blockQuote",
	tokenize: Ca
};
function Ca(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		if (t === 62) {
			let n = r.containerState;
			return n.open ||= (e.enter("blockQuote", { _container: !0 }), !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), a;
		}
		return n(t);
	}
	function a(n) {
		return H(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n));
	}
}
function wa(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return H(t) ? U(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : a(t);
	}
	function a(r) {
		return e.attempt(Sa, t, n)(r);
	}
}
function Ta(e) {
	e.exit("blockQuote");
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/character-escape.js
var Ea = {
	name: "characterEscape",
	tokenize: Da
};
function Da(e, t, n) {
	return r;
	function r(t) {
		return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), i;
	}
	function i(r) {
		return Qi(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/character-reference.js
var Oa = {
	name: "characterReference",
	tokenize: ka
};
function ka(e, t, n) {
	let r = this, i = 0, a, o;
	return s;
	function s(t) {
		return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), c;
	}
	function c(t) {
		return t === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), l) : (e.enter("characterReferenceValue"), a = 31, o = qi, u(t));
	}
	function l(t) {
		return t === 88 || t === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, o = Zi, u) : (e.enter("characterReferenceValue"), a = 7, o = Xi, u(t));
	}
	function u(s) {
		if (s === 59 && i) {
			let i = e.exit("characterReferenceValue");
			return o === qi && !Li(r.sliceSerialize(i)) ? n(s) : (e.enter("characterReferenceMarker"), e.consume(s), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
		}
		return o(s) && i++ < a ? (e.consume(s), u) : n(s);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/partial-non-lazy-continuation.js
var Aa = {
	partial: !0,
	tokenize: ja
};
function ja(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return t === null ? n(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-fenced.js
var Ma = {
	concrete: !0,
	name: "codeFenced",
	tokenize: Na
};
function Na(e, t, n) {
	let r = this, i = {
		partial: !0,
		tokenize: x
	}, a = 0, o = 0, s;
	return c;
	function c(e) {
		return l(e);
	}
	function l(t) {
		let n = r.events[r.events.length - 1];
		return a = n && n[1].type === "linePrefix" ? n[2].sliceSerialize(n[1], !0).length : 0, s = t, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), u(t);
	}
	function u(t) {
		return t === s ? (o++, e.consume(t), u) : o < 3 ? n(t) : (e.exit("codeFencedFenceSequence"), H(t) ? U(e, d, "whitespace")(t) : d(t));
	}
	function d(n) {
		return n === null || B(n) ? (e.exit("codeFencedFence"), r.interrupt ? t(n) : e.check(Aa, h, b)(n)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), f(n));
	}
	function f(t) {
		return t === null || B(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), d(t)) : H(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), U(e, p, "whitespace")(t)) : t === 96 && t === s ? n(t) : (e.consume(t), f);
	}
	function p(t) {
		return t === null || B(t) ? d(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), m(t));
	}
	function m(t) {
		return t === null || B(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), d(t)) : t === 96 && t === s ? n(t) : (e.consume(t), m);
	}
	function h(t) {
		return e.attempt(i, b, g)(t);
	}
	function g(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), _;
	}
	function _(t) {
		return a > 0 && H(t) ? U(e, v, "linePrefix", a + 1)(t) : v(t);
	}
	function v(t) {
		return t === null || B(t) ? e.check(Aa, h, b)(t) : (e.enter("codeFlowValue"), y(t));
	}
	function y(t) {
		return t === null || B(t) ? (e.exit("codeFlowValue"), v(t)) : (e.consume(t), y);
	}
	function b(n) {
		return e.exit("codeFenced"), t(n);
	}
	function x(e, t, n) {
		let i = 0;
		return a;
		function a(t) {
			return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c;
		}
		function c(t) {
			return e.enter("codeFencedFence"), H(t) ? U(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : l(t);
		}
		function l(t) {
			return t === s ? (e.enter("codeFencedFenceSequence"), u(t)) : n(t);
		}
		function u(t) {
			return t === s ? (i++, e.consume(t), u) : i >= o ? (e.exit("codeFencedFenceSequence"), H(t) ? U(e, d, "whitespace")(t) : d(t)) : n(t);
		}
		function d(r) {
			return r === null || B(r) ? (e.exit("codeFencedFence"), t(r)) : n(r);
		}
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-indented.js
var Pa = {
	name: "codeIndented",
	tokenize: Ia
}, Fa = {
	partial: !0,
	tokenize: La
};
function Ia(e, t, n) {
	return r;
	function r(t) {
		return e.enter("codeIndented"), ra(e, i, n, "linePrefix", 4, 4)(t);
	}
	function i(t) {
		return t === null ? o(t) : B(t) ? e.attempt(Fa, i, o)(t) : (e.enter("codeFlowValue"), a(t));
	}
	function a(t) {
		return t === null || B(t) ? (e.exit("codeFlowValue"), i(t)) : (e.consume(t), a);
	}
	function o(n) {
		return e.exit("codeIndented"), t(n);
	}
}
function La(e, t, n) {
	let r = this;
	return i;
	function i(o) {
		return r.parser.lazy[r.now().line] ? n(o) : B(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), i) : ra(e, t, a, "linePrefix", 4, 4)(o);
	}
	function a(e) {
		return B(e) ? i(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-text.js
var Ra = {
	name: "codeText",
	previous: Ba,
	resolve: za,
	tokenize: Va
};
function za(e) {
	let t = e.length - 4, n = 3, r, i;
	if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
		for (r = n; ++r < t;) if (e[r][1].type === "codeTextData") {
			e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
			break;
		}
	}
	for (r = n - 1, t++; ++r <= t;) i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
	return e;
}
function Ba(e) {
	return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Va(e, t, n) {
	let r = 0, i, a;
	return o;
	function o(t) {
		return e.enter("codeText"), e.enter("codeTextSequence"), s(t);
	}
	function s(t) {
		return t === 96 ? (e.consume(t), r++, s) : (e.exit("codeTextSequence"), c(t));
	}
	function c(t) {
		return t === null ? n(t) : t === 32 ? (e.enter("space"), e.consume(t), e.exit("space"), c) : t === 96 ? (a = e.enter("codeTextSequence"), i = 0, u(t)) : B(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c) : (e.enter("codeTextData"), l(t));
	}
	function l(t) {
		return t === null || t === 32 || t === 96 || B(t) ? (e.exit("codeTextData"), c(t)) : (e.consume(t), l);
	}
	function u(n) {
		return n === 96 ? (e.consume(n), i++, u) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n)) : (a.type = "codeTextData", l(n));
	}
}
//#endregion
//#region node_modules/micromark-util-subtokenize/lib/splice-buffer.js
var Ha = class {
	constructor(e) {
		this.left = e ? [...e] : [], this.right = [];
	}
	get(e) {
		if (e < 0 || e >= this.left.length + this.right.length) throw RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
		return e < this.left.length ? this.left[e] : this.right[this.right.length - e + this.left.length - 1];
	}
	get length() {
		return this.left.length + this.right.length;
	}
	shift() {
		return this.setCursor(0), this.right.pop();
	}
	slice(e, t) {
		let n = t ?? Infinity;
		return n < this.left.length ? this.left.slice(e, n) : e > this.left.length ? this.right.slice(this.right.length - n + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - n + this.left.length).reverse());
	}
	splice(e, t, n) {
		let r = t || 0;
		this.setCursor(Math.trunc(e));
		let i = this.right.splice(this.right.length - r, Infinity);
		return n && Ua(this.left, n), i.reverse();
	}
	pop() {
		return this.setCursor(Infinity), this.left.pop();
	}
	push(e) {
		this.setCursor(Infinity), this.left.push(e);
	}
	pushMany(e) {
		this.setCursor(Infinity), Ua(this.left, e);
	}
	unshift(e) {
		this.setCursor(0), this.right.push(e);
	}
	unshiftMany(e) {
		this.setCursor(0), Ua(this.right, e.reverse());
	}
	setCursor(e) {
		if (!(e === this.left.length || e > this.left.length && this.right.length === 0 || e < 0 && this.left.length === 0)) {
			if (e < this.left.length) {
				let t = this.left.splice(e, Infinity);
				Ua(this.right, t.reverse());
			} else {
				let t = this.right.splice(this.left.length + this.right.length - e, Infinity);
				Ua(this.left, t.reverse());
			}
		}
	}
};
function Ua(e, t) {
	let n = 0;
	if (t.length < 1e4) e.push(...t);
	else for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
//#endregion
//#region node_modules/micromark-util-subtokenize/index.js
function Wa(e) {
	let t = {}, n = -1, r, i, a, o, s, c, l, u = new Ha(e);
	for (; ++n < u.length;) {
		for (; n in t;) n = t[n];
		if (r = u.get(n), n && r[1].type === "chunkFlow" && u.get(n - 1)[1].type === "listItemPrefix" && (c = r[1]._tokenizer.events, a = 0, a < c.length && c[a][1].type === "lineEndingBlank" && (a += 2), a < c.length && c[a][1].type === "content")) for (; ++a < c.length && c[a][1].type !== "content";) c[a][1].type === "chunkText" && (c[a][1]._isInFirstContentOfListItem = !0, a++);
		if (r[0] === "enter") r[1].contentType && (Object.assign(t, Ga(u, n)), n = t[n], l = !0);
		else if (r[1]._container) {
			for (a = n, i = void 0; a--;) if (o = u.get(a), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank") o[0] === "enter" && (i && (u.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = a);
			else if (o[1].type !== "linePrefix" && o[1].type !== "listItemIndent") break;
			i && (r[1].end = { ...u.get(i)[1].start }, s = u.slice(i, n), s.unshift(r), u.splice(i, n - i + 1, s));
		}
	}
	return Ri(e, 0, Infinity, u.slice(0)), !l;
}
function Ga(e, t) {
	let n = e.get(t)[1], r = e.get(t)[2], i = t - 1, a = [], o = n._tokenizer;
	o || (o = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
	let s = o.events, c = [], l = {}, u, d, f = -1, p = n, m = 0, h = 0, g = [h];
	for (; p;) {
		for (; e.get(++i)[1] !== p;);
		a.push(i), p._tokenizer || (u = r.sliceStream(p), p.next || u.push(null), d && o.defineSkip(p.start), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(u), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), d = p, p = p.next;
	}
	for (p = n; ++f < s.length;) s[f][0] === "exit" && s[f - 1][0] === "enter" && s[f][1].type === s[f - 1][1].type && s[f][1].start.line !== s[f][1].end.line && (h = f + 1, g.push(h), p._tokenizer = void 0, p.previous = void 0, p = p.next);
	for (o.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : g.pop(), f = g.length; f--;) {
		let t = s.slice(g[f], g[f + 1]), n = a.pop();
		c.push([n, n + t.length - 1]), e.splice(n, 2, t);
	}
	for (c.reverse(), f = -1; ++f < c.length;) l[m + c[f][0]] = m + c[f][1], m += c[f][1] - c[f][0] - 1;
	return l;
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/content.js
var Ka = {
	resolve: Ja,
	tokenize: Ya
}, qa = {
	partial: !0,
	tokenize: Xa
};
function Ja(e) {
	return Wa(e), e;
}
function Ya(e, t) {
	let n;
	return r;
	function r(t) {
		return e.enter("content"), n = e.enter("chunkContent", { contentType: "content" }), i(t);
	}
	function i(t) {
		return t === null ? a(t) : B(t) ? e.check(qa, o, a)(t) : (e.consume(t), i);
	}
	function a(n) {
		return e.exit("chunkContent"), e.exit("content"), t(n);
	}
	function o(t) {
		return e.consume(t), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
			contentType: "content",
			previous: n
		}), n = n.next, i;
	}
}
function Xa(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), U(e, a, "linePrefix");
	}
	function a(i) {
		if (i === null || B(i)) return n(i);
		let a = r.events[r.events.length - 1];
		return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i);
	}
}
//#endregion
//#region node_modules/micromark-factory-destination/index.js
function Za(e, t, n, r, i, a, o, s, c) {
	let l = c || Infinity, u = 0;
	return d;
	function d(t) {
		return t === 60 ? (e.enter(r), e.enter(i), e.enter(a), e.consume(t), e.exit(a), f) : t === null || t === 32 || t === 41 || Yi(t) ? n(t) : (e.enter(r), e.enter(o), e.enter(s), e.enter("chunkString", { contentType: "string" }), h(t));
	}
	function f(n) {
		return n === 62 ? (e.enter(a), e.consume(n), e.exit(a), e.exit(i), e.exit(r), t) : (e.enter(s), e.enter("chunkString", { contentType: "string" }), p(n));
	}
	function p(t) {
		return t === 62 ? (e.exit("chunkString"), e.exit(s), f(t)) : t === null || t === 60 || B(t) ? n(t) : (e.consume(t), t === 92 ? m : p);
	}
	function m(t) {
		return t === 60 || t === 62 || t === 92 ? (e.consume(t), p) : p(t);
	}
	function h(i) {
		return !u && (i === null || i === 41 || V(i)) ? (e.exit("chunkString"), e.exit(s), e.exit(o), e.exit(r), t(i)) : u < l && i === 40 ? (e.consume(i), u++, h) : i === 41 ? (e.consume(i), u--, h) : i === null || i === 32 || i === 40 || Yi(i) ? n(i) : (e.consume(i), i === 92 ? g : h);
	}
	function g(t) {
		return t === 40 || t === 41 || t === 92 ? (e.consume(t), h) : h(t);
	}
}
//#endregion
//#region node_modules/micromark-factory-label/index.js
function Qa(e, t, n, r, i, a) {
	let o = this, s = 0, c;
	return l;
	function l(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(a), u;
	}
	function u(l) {
		return s > 999 || l === null || l === 91 || l === 93 && !c || 
		/* c8 ignore next 3 */
		l === 94 && !s && "_hiddenFootnoteSupport" in o.parser.constructs ? n(l) : l === 93 ? (e.exit(a), e.enter(i), e.consume(l), e.exit(i), e.exit(r), t) : B(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), u) : (e.enter("chunkString", { contentType: "string" }), d(l));
	}
	function d(t) {
		return t === null || t === 91 || t === 93 || B(t) || s++ > 999 ? (e.exit("chunkString"), u(t)) : (e.consume(t), c ||= !H(t), t === 92 ? f : d);
	}
	function f(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), s++, d) : d(t);
	}
}
//#endregion
//#region node_modules/micromark-factory-title/index.js
function $a(e, t, n, r, i, a) {
	let o;
	return s;
	function s(t) {
		return t === 34 || t === 39 || t === 40 ? (e.enter(r), e.enter(i), e.consume(t), e.exit(i), o = t === 40 ? 41 : t, c) : n(t);
	}
	function c(n) {
		return n === o ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(a), l(n));
	}
	function l(t) {
		return t === o ? (e.exit(a), c(o)) : t === null ? n(t) : B(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), U(e, l, "linePrefix")) : (e.enter("chunkString", { contentType: "string" }), u(t));
	}
	function u(t) {
		return t === o || t === null || B(t) ? (e.exit("chunkString"), l(t)) : (e.consume(t), t === 92 ? d : u);
	}
	function d(t) {
		return t === o || t === 92 ? (e.consume(t), u) : u(t);
	}
}
//#endregion
//#region node_modules/micromark-factory-whitespace/index.js
function eo(e, t) {
	let n;
	return r;
	function r(i) {
		return B(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : H(i) ? U(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/definition.js
var to = {
	name: "definition",
	tokenize: ro
}, no = {
	partial: !0,
	tokenize: io
};
function ro(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		return e.enter("definition"), o(t);
	}
	function o(t) {
		return Qa.call(r, e, s, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t);
	}
	function s(t) {
		return i = Gi(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), c) : n(t);
	}
	function c(t) {
		return V(t) ? eo(e, l)(t) : l(t);
	}
	function l(t) {
		return Za(e, u, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t);
	}
	function u(t) {
		return e.attempt(no, d, d)(t);
	}
	function d(t) {
		return H(t) ? U(e, f, "whitespace")(t) : f(t);
	}
	function f(a) {
		return a === null || B(a) ? (e.exit("definition"), r.parser.defined.push(i), t(a)) : n(a);
	}
}
function io(e, t, n) {
	return r;
	function r(t) {
		return V(t) ? eo(e, i)(t) : n(t);
	}
	function i(t) {
		return $a(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t);
	}
	function a(t) {
		return H(t) ? U(e, o, "whitespace")(t) : o(t);
	}
	function o(e) {
		return e === null || B(e) ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/hard-break-escape.js
var ao = {
	name: "hardBreakEscape",
	tokenize: oo
};
function oo(e, t, n) {
	return r;
	function r(t) {
		return e.enter("hardBreakEscape"), e.consume(t), i;
	}
	function i(r) {
		return B(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/heading-atx.js
var so = {
	name: "headingAtx",
	resolve: co,
	tokenize: lo
};
function co(e, t) {
	let n = e.length - 2, r = 3;
	if (e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r) {
		let i = {
			type: "atxHeadingText",
			start: e[r][1].start,
			end: e[n][1].end
		}, a = {
			type: "chunkText",
			start: e[r][1].start,
			end: e[n][1].end,
			contentType: "text"
		};
		Ri(e, r, n - r + 1, [
			[
				"enter",
				i,
				t
			],
			[
				"enter",
				a,
				t
			],
			[
				"exit",
				a,
				t
			],
			[
				"exit",
				i,
				t
			]
		]);
	}
	return e;
}
function lo(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("atxHeading"), a(t);
	}
	function a(t) {
		return e.enter("atxHeadingSequence"), o(t);
	}
	function o(t) {
		return t === 35 && r++ < 6 ? (e.consume(t), o) : t === null || V(t) ? (e.exit("atxHeadingSequence"), s(t)) : n(t);
	}
	function s(n) {
		return n === 35 ? (e.enter("atxHeadingSequence"), c(n)) : n === null || B(n) ? (e.exit("atxHeading"), t(n)) : H(n) ? U(e, s, "whitespace")(n) : (e.enter("atxHeadingText"), l(n));
	}
	function c(t) {
		return t === 35 ? (e.consume(t), c) : (e.exit("atxHeadingSequence"), s(t));
	}
	function l(t) {
		return t === null || t === 35 || V(t) ? (e.exit("atxHeadingText"), s(t)) : (e.consume(t), l);
	}
}
//#endregion
//#region node_modules/micromark-util-html-tag-name/index.js
var uo = /* @__PURE__ */ "address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul".split("."), fo = [
	"pre",
	"script",
	"style",
	"textarea"
], po = {
	concrete: !0,
	name: "htmlFlow",
	resolveTo: ho,
	tokenize: go
}, mo = {
	partial: !0,
	tokenize: _o
};
function ho(e) {
	let t = e.length;
	for (; t-- && (e[t][0] !== "enter" || e[t][1].type !== "htmlFlow"););
	return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function go(e, t, n) {
	let r = this, i, a, o, s, c;
	return l;
	function l(e) {
		return u(e);
	}
	function u(t) {
		return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), d;
	}
	function d(s) {
		return s === 33 ? (e.consume(s), f) : s === 47 ? (e.consume(s), a = !0, h) : s === 63 ? (e.consume(s), i = 3, r.interrupt ? t : ie) : Ki(s) ? (e.consume(s), o = String.fromCharCode(s), g) : n(s);
	}
	function f(a) {
		return a === 45 ? (e.consume(a), i = 2, p) : a === 91 ? (e.consume(a), i = 5, s = 0, m) : Ki(a) ? (e.consume(a), i = 4, r.interrupt ? t : ie) : n(a);
	}
	function p(i) {
		return i === 45 ? (e.consume(i), r.interrupt ? t : ie) : n(i);
	}
	function m(i) {
		return i === "CDATA[".charCodeAt(s++) ? (e.consume(i), s === 6 ? r.interrupt ? t : D : m) : n(i);
	}
	function h(t) {
		return Ki(t) ? (e.consume(t), o = String.fromCharCode(t), g) : n(t);
	}
	function g(s) {
		if (s === null || s === 47 || s === 62 || V(s)) {
			let c = s === 47, l = o.toLowerCase();
			return !c && !a && fo.includes(l) ? (i = 1, r.interrupt ? t(s) : D(s)) : uo.includes(o.toLowerCase()) ? (i = 6, c ? (e.consume(s), _) : r.interrupt ? t(s) : D(s)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(s) : a ? v(s) : y(s));
		}
		return s === 45 || qi(s) ? (e.consume(s), o += String.fromCharCode(s), g) : n(s);
	}
	function _(i) {
		return i === 62 ? (e.consume(i), r.interrupt ? t : D) : n(i);
	}
	function v(t) {
		return H(t) ? (e.consume(t), v) : T(t);
	}
	function y(t) {
		return t === 47 ? (e.consume(t), T) : t === 58 || t === 95 || Ki(t) ? (e.consume(t), b) : H(t) ? (e.consume(t), y) : T(t);
	}
	function b(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || qi(t) ? (e.consume(t), b) : x(t);
	}
	function x(t) {
		return t === 61 ? (e.consume(t), S) : H(t) ? (e.consume(t), x) : y(t);
	}
	function S(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), c = t, C) : H(t) ? (e.consume(t), S) : ee(t);
	}
	function C(t) {
		return t === c ? (e.consume(t), c = null, w) : t === null || B(t) ? n(t) : (e.consume(t), C);
	}
	function ee(t) {
		return t === null || t === 34 || t === 39 || t === 47 || t === 60 || t === 61 || t === 62 || t === 96 || V(t) ? x(t) : (e.consume(t), ee);
	}
	function w(e) {
		return e === 47 || e === 62 || H(e) ? y(e) : n(e);
	}
	function T(t) {
		return t === 62 ? (e.consume(t), E) : n(t);
	}
	function E(t) {
		return t === null || B(t) ? D(t) : H(t) ? (e.consume(t), E) : n(t);
	}
	function D(t) {
		return t === 45 && i === 2 ? (e.consume(t), k) : t === 60 && i === 1 ? (e.consume(t), A) : t === 62 && i === 4 ? (e.consume(t), ae) : t === 63 && i === 3 ? (e.consume(t), ie) : t === 93 && i === 5 ? (e.consume(t), j) : B(t) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(mo, oe, te)(t)) : t === null || B(t) ? (e.exit("htmlFlowData"), te(t)) : (e.consume(t), D);
	}
	function te(t) {
		return e.check(Aa, ne, oe)(t);
	}
	function ne(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), O;
	}
	function O(t) {
		return t === null || B(t) ? te(t) : (e.enter("htmlFlowData"), D(t));
	}
	function k(t) {
		return t === 45 ? (e.consume(t), ie) : D(t);
	}
	function A(t) {
		return t === 47 ? (e.consume(t), o = "", re) : D(t);
	}
	function re(t) {
		if (t === 62) {
			let n = o.toLowerCase();
			return fo.includes(n) ? (e.consume(t), ae) : D(t);
		}
		return Ki(t) && o.length < 8 ? (e.consume(t), o += String.fromCharCode(t), re) : D(t);
	}
	function j(t) {
		return t === 93 ? (e.consume(t), ie) : D(t);
	}
	function ie(t) {
		return t === 62 ? (e.consume(t), ae) : t === 45 && i === 2 ? (e.consume(t), ie) : D(t);
	}
	function ae(t) {
		return t === null || B(t) ? (e.exit("htmlFlowData"), oe(t)) : (e.consume(t), ae);
	}
	function oe(n) {
		return e.exit("htmlFlow"), t(n);
	}
}
function _o(e, t, n) {
	return r;
	function r(r) {
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(ba, t, n);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/html-text.js
var vo = {
	name: "htmlText",
	tokenize: yo
};
function yo(e, t, n) {
	let r = this, i, a, o;
	return s;
	function s(t) {
		return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), c;
	}
	function c(t) {
		return t === 33 ? (e.consume(t), l) : t === 47 ? (e.consume(t), x) : t === 63 ? (e.consume(t), y) : Ki(t) ? (e.consume(t), ee) : n(t);
	}
	function l(t) {
		return t === 45 ? (e.consume(t), u) : t === 91 ? (e.consume(t), a = 0, m) : Ki(t) ? (e.consume(t), v) : n(t);
	}
	function u(t) {
		return t === 45 ? (e.consume(t), p) : n(t);
	}
	function d(t) {
		return t === null ? n(t) : t === 45 ? (e.consume(t), f) : B(t) ? (o = d, A(t)) : (e.consume(t), d);
	}
	function f(t) {
		return t === 45 ? (e.consume(t), p) : d(t);
	}
	function p(e) {
		return e === 62 ? k(e) : e === 45 ? f(e) : d(e);
	}
	function m(t) {
		return t === "CDATA[".charCodeAt(a++) ? (e.consume(t), a === 6 ? h : m) : n(t);
	}
	function h(t) {
		return t === null ? n(t) : t === 93 ? (e.consume(t), g) : B(t) ? (o = h, A(t)) : (e.consume(t), h);
	}
	function g(t) {
		return t === 93 ? (e.consume(t), _) : h(t);
	}
	function _(t) {
		return t === 62 ? k(t) : t === 93 ? (e.consume(t), _) : h(t);
	}
	function v(t) {
		return t === null || t === 62 ? k(t) : B(t) ? (o = v, A(t)) : (e.consume(t), v);
	}
	function y(t) {
		return t === null ? n(t) : t === 63 ? (e.consume(t), b) : B(t) ? (o = y, A(t)) : (e.consume(t), y);
	}
	function b(e) {
		return e === 62 ? k(e) : y(e);
	}
	function x(t) {
		return Ki(t) ? (e.consume(t), S) : n(t);
	}
	function S(t) {
		return t === 45 || qi(t) ? (e.consume(t), S) : C(t);
	}
	function C(t) {
		return B(t) ? (o = C, A(t)) : H(t) ? (e.consume(t), C) : k(t);
	}
	function ee(t) {
		return t === 45 || qi(t) ? (e.consume(t), ee) : t === 47 || t === 62 || V(t) ? w(t) : n(t);
	}
	function w(t) {
		return t === 47 ? (e.consume(t), k) : t === 58 || t === 95 || Ki(t) ? (e.consume(t), T) : B(t) ? (o = w, A(t)) : H(t) ? (e.consume(t), w) : k(t);
	}
	function T(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || qi(t) ? (e.consume(t), T) : E(t);
	}
	function E(t) {
		return t === 61 ? (e.consume(t), D) : B(t) ? (o = E, A(t)) : H(t) ? (e.consume(t), E) : w(t);
	}
	function D(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), i = t, te) : B(t) ? (o = D, A(t)) : H(t) ? (e.consume(t), D) : (e.consume(t), ne);
	}
	function te(t) {
		return t === i ? (e.consume(t), i = void 0, O) : t === null ? n(t) : B(t) ? (o = te, A(t)) : (e.consume(t), te);
	}
	function ne(t) {
		return t === null || t === 34 || t === 39 || t === 60 || t === 61 || t === 96 ? n(t) : t === 47 || t === 62 || V(t) ? w(t) : (e.consume(t), ne);
	}
	function O(e) {
		return e === 47 || e === 62 || V(e) ? w(e) : n(e);
	}
	function k(r) {
		return r === 62 ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r);
	}
	function A(t) {
		return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), re;
	}
	function re(t) {
		return H(t) ? U(e, j, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : j(t);
	}
	function j(t) {
		return e.enter("htmlTextData"), o(t);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/label-end.js
var bo = {
	name: "labelEnd",
	resolveAll: wo,
	resolveTo: To,
	tokenize: Eo
}, xo = { tokenize: Do }, So = { tokenize: Oo }, Co = { tokenize: ko };
function wo(e) {
	let t = -1, n = [];
	for (; ++t < e.length;) {
		let r = e[t][1];
		if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
			let e = r.type === "labelImage" ? 4 : 2;
			r.type = "data", t += e;
		}
	}
	return e.length !== n.length && Ri(e, 0, e.length, n), e;
}
function To(e, t) {
	let n = e.length, r = 0, i, a, o;
	for (; n--;) {
		let t = e[n][1];
		if (i) {
			if (t.type === "link" || t.type === "labelLink" && t._inactive) break;
			e[n][0] === "enter" && t.type === "labelLink" && (t._inactive = !0);
		} else if (a) {
			if (e[n][0] === "enter" && (t.type === "labelImage" || t.type === "labelLink") && !t._balanced && (i = n, t.type !== "labelLink")) {
				r = 2;
				break;
			}
		} else t.type === "labelEnd" && (a = n);
	}
	let s = {
		type: e[i][1].type === "labelLink" ? "link" : "image",
		start: { ...e[i][1].start },
		end: { ...e[e.length - 1][1].end }
	}, c = {
		type: "label",
		start: { ...e[i][1].start },
		end: { ...e[a][1].end }
	}, l = {
		type: "labelText",
		start: { ...e[i + r + 2][1].end },
		end: { ...e[a - 2][1].start }
	};
	return o = [[
		"enter",
		s,
		t
	], [
		"enter",
		c,
		t
	]], o = zi(o, e.slice(i + 1, i + r + 3)), o = zi(o, [[
		"enter",
		l,
		t
	]]), o = zi(o, pa(t.parser.constructs.insideSpan.null, e.slice(i + r + 4, a - 3), t)), o = zi(o, [
		[
			"exit",
			l,
			t
		],
		e[a - 2],
		e[a - 1],
		[
			"exit",
			c,
			t
		]
	]), o = zi(o, e.slice(a + 1)), o = zi(o, [[
		"exit",
		s,
		t
	]]), Ri(e, i, e.length, o), e;
}
function Eo(e, t, n) {
	let r = this, i = r._labelStarts, a, o;
	if (i) {
		for (; i.length > 0 && i[i.length - 1]._balanced;) i.pop();
		a = i[i.length - 1];
	}
	return s;
	function s(t) {
		return a ? a._inactive ? d(t) : (o = r.parser.defined.includes(Gi(r.sliceSerialize({
			start: a.end,
			end: r.now()
		}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), c) : n(t);
	}
	function c(t) {
		return t === 40 ? e.attempt(xo, u, o ? u : d)(t) : t === 91 ? e.attempt(So, u, o ? l : d)(t) : o ? u(t) : d(t);
	}
	function l(t) {
		return e.attempt(Co, u, d)(t);
	}
	function u(e) {
		return i.pop(), t(e);
	}
	function d(e) {
		return a._balanced = !0, n(e);
	}
}
function Do(e, t, n) {
	return r;
	function r(t) {
		return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), i;
	}
	function i(t) {
		return V(t) ? eo(e, a)(t) : a(t);
	}
	function a(t) {
		return t === 41 ? u(t) : Za(e, o, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
	}
	function o(t) {
		return V(t) ? eo(e, c)(t) : u(t);
	}
	function s(e) {
		return n(e);
	}
	function c(t) {
		return t === 34 || t === 39 || t === 40 ? $a(e, l, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : u(t);
	}
	function l(t) {
		return V(t) ? eo(e, u)(t) : u(t);
	}
	function u(r) {
		return r === 41 ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r);
	}
}
function Oo(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return Qa.call(r, e, a, o, "reference", "referenceMarker", "referenceString")(t);
	}
	function a(e) {
		return r.parser.defined.includes(Gi(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e);
	}
	function o(e) {
		return n(e);
	}
}
function ko(e, t, n) {
	return r;
	function r(t) {
		return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), i;
	}
	function i(r) {
		return r === 93 ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/label-start-image.js
var Ao = {
	name: "labelStartImage",
	resolveAll: bo.resolveAll,
	tokenize: jo
};
function jo(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), o;
	}
	function o(t) {
		return t === 91 ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), i = e.exit("labelImage"), s) : n(t);
	}
	function s(e) {
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : (r._labelStarts = r._labelStarts || [], r._labelStarts.push(i), t(e));
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/label-start-link.js
var Mo = {
	name: "labelStartLink",
	resolveAll: bo.resolveAll,
	tokenize: No
};
function No(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), i = e.exit("labelLink"), o;
	}
	function o(e) {
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : (r._labelStarts = r._labelStarts || [], r._labelStarts.push(i), t(e));
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/line-ending.js
var Po = {
	name: "lineEnding",
	tokenize: Fo
};
function Fo(e, t) {
	return n;
	function n(n) {
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), U(e, t, "linePrefix");
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/thematic-break.js
var Io = {
	name: "thematicBreak",
	tokenize: Lo
};
function Lo(e, t, n) {
	let r = 0, i;
	return a;
	function a(t) {
		return e.enter("thematicBreak"), o(t);
	}
	function o(e) {
		return i = e, s(e);
	}
	function s(a) {
		return a === i ? (e.enter("thematicBreakSequence"), c(a)) : r >= 3 && (a === null || B(a)) ? (e.exit("thematicBreak"), t(a)) : n(a);
	}
	function c(t) {
		return t === i ? (e.consume(t), r++, c) : (e.exit("thematicBreakSequence"), H(t) ? U(e, s, "whitespace")(t) : s(t));
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/list.js
var Ro = {
	continuation: { tokenize: Ho },
	exit: Wo,
	name: "list",
	tokenize: Vo
}, zo = {
	partial: !0,
	tokenize: Go
}, Bo = {
	partial: !0,
	tokenize: Uo
};
function Vo(e, t, n) {
	let r = this, i = r.events[r.events.length - 1], a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
	return s;
	function s(t) {
		let i = r.containerState.type || (t === 42 || t === 43 || t === 45 ? "listUnordered" : "listOrdered");
		if (i === "listUnordered" ? !r.containerState.marker || t === r.containerState.marker : Xi(t)) {
			if (r.containerState.type || (r.containerState.type = i, e.enter(i, { _container: !0 })), i === "listUnordered") return e.enter("listItemPrefix"), t === 42 || t === 45 ? e.check(Io, n, l)(t) : l(t);
			if (!r.interrupt || t === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), c(t);
		}
		return n(t);
	}
	function c(t) {
		return Xi(t) && ++o < 10 ? (e.consume(t), c) : (!r.interrupt || o < 2) && (r.containerState.marker ? t === r.containerState.marker : t === 41 || t === 46) ? (e.exit("listItemValue"), l(t)) : n(t);
	}
	function l(t) {
		return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(ba, r.interrupt ? n : u, e.attempt(zo, f, d));
	}
	function u(e) {
		return r.containerState.initialBlankLine = !0, a++, f(e);
	}
	function d(t) {
		return H(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), f) : n(t);
	}
	function f(n) {
		return r.containerState.size = a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n);
	}
}
function Ho(e, t, n) {
	let r = this;
	return r.containerState._closeFlow = void 0, e.check(ba, i, a);
	function i(n) {
		return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, U(e, t, "listItemIndent", r.containerState.size + 1)(n);
	}
	function a(n) {
		return r.containerState.furtherBlankLines || !H(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Bo, t, o)(n));
	}
	function o(i) {
		return r.containerState._closeFlow = !0, r.interrupt = void 0, U(e, e.attempt(Ro, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i);
	}
}
function Uo(e, t, n) {
	let r = this;
	return U(e, i, "listItemIndent", r.containerState.size + 1);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "listItemIndent" && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e);
	}
}
function Wo(e) {
	e.exit(this.containerState.type);
}
function Go(e, t, n) {
	let r = this;
	return U(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return !H(e) && i && i[1].type === "listItemPrefixWhitespace" ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/setext-underline.js
var Ko = {
	name: "setextUnderline",
	resolveTo: qo,
	tokenize: Jo
};
function qo(e, t) {
	let n = new oa(), r = e.length, i, a, o;
	for (; r--;) if (e[r][0] === "enter") {
		if (e[r][1].type === "content") {
			i = r;
			break;
		}
		e[r][1].type === "paragraph" && (a = r);
	} else e[r][1].type === "content" && n.add(r, 1, []), !o && e[r][1].type === "definition" && (o = r);
	let s = {
		type: "setextHeading",
		start: { ...e[i][1].start },
		end: { ...e[e.length - 1][1].end }
	};
	return e[a][1].type = "setextHeadingText", o ? (n.add(a, 0, [[
		"enter",
		s,
		t
	]]), n.add(o + 1, 0, [[
		"exit",
		e[i][1],
		t
	]]), e[i][1].end = { ...e[o][1].end }) : e[i][1] = s, n.add(e.length, 0, [[
		"exit",
		s,
		t
	]]), n.consume(e), e;
}
function Jo(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		let a = r.events.length, s;
		for (; a--;) if (r.events[a][1].type !== "lineEnding" && r.events[a][1].type !== "linePrefix" && r.events[a][1].type !== "content") {
			s = r.events[a][1].type === "paragraph";
			break;
		}
		return !r.parser.lazy[r.now().line] && (r.interrupt || s) ? (e.enter("setextHeadingLine"), i = t, o(t)) : n(t);
	}
	function o(t) {
		return e.enter("setextHeadingLineSequence"), s(t);
	}
	function s(t) {
		return t === i ? (e.consume(t), s) : (e.exit("setextHeadingLineSequence"), H(t) ? U(e, c, "lineSuffix")(t) : c(t));
	}
	function c(r) {
		return r === null || B(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r);
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/flow.js
var Yo = { tokenize: Xo };
function Xo(e) {
	let t = this, n = e.attempt(ba, r, e.attempt(this.parser.constructs.flowInitial, i, U(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Ka, i)), "linePrefix")));
	return n;
	function r(r) {
		if (r === null) {
			e.consume(r);
			return;
		}
		return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
	}
	function i(r) {
		if (r === null) {
			e.consume(r);
			return;
		}
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n;
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/text.js
var Zo = { resolveAll: ts() }, Qo = es("string"), $o = es("text");
function es(e) {
	return {
		resolveAll: ts(e === "text" ? ns : void 0),
		tokenize: t
	};
	function t(t) {
		let n = this, r = this.parser.constructs[e], i = t.attempt(r, a, o);
		return a;
		function a(e) {
			return c(e) ? i(e) : o(e);
		}
		function o(e) {
			if (e === null) {
				t.consume(e);
				return;
			}
			return t.enter("data"), t.consume(e), s;
		}
		function s(e) {
			return c(e) ? (t.exit("data"), i(e)) : (t.consume(e), s);
		}
		function c(e) {
			if (e === null) return !0;
			let t = r[e], i = -1;
			if (t) for (; ++i < t.length;) {
				let e = t[i];
				if (!e.previous || e.previous.call(n, n.previous)) return !0;
			}
			return !1;
		}
	}
}
function ts(e) {
	return t;
	function t(t, n) {
		let r = -1, i;
		for (; ++r <= t.length;) i === void 0 ? t[r] && t[r][1].type === "data" && (i = r, r++) : (!t[r] || t[r][1].type !== "data") && (r !== i + 2 && (t[i][1].end = t[r - 1][1].end, t.splice(i + 2, r - i - 2), r = i + 2), i = void 0);
		return e ? e(t, n) : t;
	}
}
function ns(e, t) {
	let n = new oa(), r = 0;
	for (; ++r <= e.length;) if ((r === e.length || e[r][1].type === "lineEnding") && e[r - 1][1].type === "data") {
		let i = e[r - 1][1], a = t.sliceStream(i), o = a.length, s = -1, c = 0, l;
		for (; o--;) {
			let e = a[o];
			if (typeof e == "string") {
				for (s = e.length; e.charCodeAt(s - 1) === 32;) c++, s--;
				if (s) break;
				s = -1;
			} else if (e === -2) l = !0, c++;
			else if (e !== -1) {
				o++;
				break;
			}
		}
		if (t._contentTypeTextTrailing && r === e.length && (c = 0), c) {
			let a = {
				type: r === e.length || l || c < 2 ? "lineSuffix" : "hardBreakTrailing",
				start: {
					_bufferIndex: o ? s : i.start._bufferIndex + s,
					_index: i.start._index + o,
					line: i.end.line,
					column: i.end.column - c,
					offset: i.end.offset - c
				},
				end: { ...i.end }
			};
			i.end = { ...a.start }, i.start.offset === i.end.offset ? Object.assign(i, a) : n.add(r, 0, [[
				"enter",
				a,
				t
			], [
				"exit",
				a,
				t
			]]);
		}
		r++;
	}
	return n.consume(e), e;
}
//#endregion
//#region node_modules/micromark/lib/constructs.js
var rs = /* @__PURE__ */ s({
	attentionMarkers: () => ds,
	contentInitial: () => as,
	disable: () => fs,
	document: () => is,
	flow: () => ss,
	flowInitial: () => os,
	insideSpan: () => us,
	string: () => cs,
	text: () => ls
}), is = {
	42: Ro,
	43: Ro,
	45: Ro,
	48: Ro,
	49: Ro,
	50: Ro,
	51: Ro,
	52: Ro,
	53: Ro,
	54: Ro,
	55: Ro,
	56: Ro,
	57: Ro,
	62: Sa
}, as = { 91: to }, os = {
	[-2]: Pa,
	[-1]: Pa,
	32: Pa
}, ss = {
	35: so,
	42: Io,
	45: [Ko, Io],
	60: po,
	61: Ko,
	95: Io,
	96: Ma,
	126: Ma
}, cs = {
	38: Oa,
	92: Ea
}, ls = {
	[-5]: Po,
	[-4]: Po,
	[-3]: Po,
	33: Ao,
	38: Oa,
	42: ma,
	60: [va, vo],
	91: Mo,
	92: [ao, Ea],
	93: bo,
	95: ma,
	96: Ra
}, us = { null: [ma, Zo] }, ds = { null: [42, 95] }, fs = { null: [] };
//#endregion
//#region node_modules/micromark/lib/create-tokenizer.js
function ps(e, t, n) {
	let r = {
		_bufferIndex: -1,
		_index: 0,
		line: n && n.line || 1,
		column: n && n.column || 1,
		offset: n && n.offset || 0
	}, i = {}, a = [], o = [], s = [], c = {
		attempt: C(x),
		check: C(S),
		consume: v,
		enter: y,
		exit: b,
		interrupt: C(S, { interrupt: !0 })
	}, l = {
		code: null,
		containerState: {},
		defineSkip: h,
		events: [],
		now: m,
		parser: e,
		previous: null,
		sliceSerialize: f,
		sliceStream: p,
		write: d
	}, u = t.tokenize.call(l, c);
	return t.resolveAll && a.push(t), l;
	function d(e) {
		return o = zi(o, e), g(), o[o.length - 1] === null ? (ee(t, 0), l.events = pa(a, l.events, l), l.events) : [];
	}
	function f(e, t) {
		return hs(p(e), t);
	}
	function p(e) {
		return ms(o, e);
	}
	function m() {
		let { _bufferIndex: e, _index: t, line: n, column: i, offset: a } = r;
		return {
			_bufferIndex: e,
			_index: t,
			line: n,
			column: i,
			offset: a
		};
	}
	function h(e) {
		i[e.line] = e.column, T();
	}
	function g() {
		for (; r._index < o.length;) {
			let e = o[r._index];
			if (typeof e == "string") {
				let t = r._index;
				for (r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === t && r._bufferIndex < e.length;) _(e.charCodeAt(r._bufferIndex));
			} else _(e);
		}
	}
	function _(e) {
		u = u(e);
	}
	function v(e) {
		B(e) ? (r.line++, r.column = 1, r.offset += e === -3 ? 2 : 1, T()) : e !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), l.previous = e;
	}
	function y(e, t) {
		let n = t || {};
		return n.type = e, n.start = m(), l.events.push([
			"enter",
			n,
			l
		]), s.push(n), n;
	}
	function b(e) {
		let t = s.pop();
		return t.end = m(), l.events.push([
			"exit",
			t,
			l
		]), t;
	}
	function x(e, t) {
		ee(e, t.from);
	}
	function S(e, t) {
		t.restore();
	}
	function C(e, t) {
		return n;
		function n(n, r, i) {
			let a, o, s, u;
			return Array.isArray(n) ? f(n) : "tokenize" in n ? f([n]) : d(n);
			function d(e) {
				return t;
				function t(t) {
					let n = t !== null && e[t], r = t !== null && e.null;
					return f([...Array.isArray(n) ? n : n ? [n] : [], ...Array.isArray(r) ? r : r ? [r] : []])(t);
				}
			}
			function f(e) {
				return a = e, o = 0, e.length === 0 ? i : p(e[o]);
			}
			function p(e) {
				return n;
				function n(n) {
					return u = w(), s = e, e.partial || (l.currentConstruct = e), e.name && l.parser.constructs.disable.null.includes(e.name) ? h(n) : e.tokenize.call(t ? Object.assign(Object.create(l), t) : l, c, m, h)(n);
				}
			}
			function m(t) {
				return e(s, u), r;
			}
			function h(e) {
				return u.restore(), ++o < a.length ? p(a[o]) : i;
			}
		}
	}
	function ee(e, t) {
		e.resolveAll && !a.includes(e) && a.push(e), e.resolve && Ri(l.events, t, l.events.length - t, e.resolve(l.events.slice(t), l)), e.resolveTo && (l.events = e.resolveTo(l.events, l));
	}
	function w() {
		let e = m(), t = l.previous, n = l.currentConstruct, i = l.events.length, a = Array.from(s);
		return {
			from: i,
			restore: o
		};
		function o() {
			r = e, l.previous = t, l.currentConstruct = n, l.events.length = i, s = a, T();
		}
	}
	function T() {
		r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
	}
}
function ms(e, t) {
	let n = t.start._index, r = t.start._bufferIndex, i = t.end._index, a = t.end._bufferIndex, o;
	if (n === i) o = [e[n].slice(r, a)];
	else {
		if (o = e.slice(n, i), r > -1) {
			let e = o[0];
			typeof e == "string" ? o[0] = e.slice(r) : o.shift();
		}
		a > 0 && o.push(e[i].slice(0, a));
	}
	return o;
}
function hs(e, t) {
	let n = -1, r = [], i;
	for (; ++n < e.length;) {
		let a = e[n], o;
		if (typeof a == "string") o = a;
		else switch (a) {
			case -5:
				o = "\r";
				break;
			case -4:
				o = "\n";
				break;
			case -3:
				o = "\r\n";
				break;
			case -2:
				o = t ? " " : "	";
				break;
			case -1:
				if (!t && i) continue;
				o = " ";
				break;
			default: o = String.fromCharCode(a);
		}
		i = a === -2, r.push(o);
	}
	return r.join("");
}
//#endregion
//#region node_modules/micromark/lib/parse.js
function gs(e) {
	let t = {
		constructs: Vi([rs, ...(e || {}).extensions || []]),
		content: n(ia),
		defined: [],
		document: n(ca),
		flow: n(Yo),
		lazy: {},
		string: n(Qo),
		text: n($o)
	};
	return t;
	function n(e) {
		return n;
		function n(n) {
			return ps(t, e, n);
		}
	}
}
//#endregion
//#region node_modules/micromark/lib/postprocess.js
function _s(e) {
	for (; !Wa(e););
	return e;
}
//#endregion
//#region node_modules/micromark/lib/preprocess.js
var vs = /[\0\t\n\r]/g;
function ys() {
	let e = 1, t = "", n = !0, r;
	return i;
	function i(i, a, o) {
		i = t + (typeof i == "string" ? i.toString() : new TextDecoder(a || void 0).decode(i));
		let s = [], c = 0;
		for (t = "", n &&= (i.charCodeAt(0) === 65279 && c++, void 0); c < i.length;) {
			vs.lastIndex = c;
			let n = vs.exec(i), a = n && n.index !== void 0 ? n.index : i.length, o = i.charCodeAt(a);
			if (!n) {
				t = i.slice(c);
				break;
			}
			if (o === 10 && c === a && r) s.push(-3), r = void 0;
			else switch (r &&= (s.push(-5), void 0), c < a && (s.push(i.slice(c, a)), e += a - c), o) {
				case 0:
					s.push(65533), e++;
					break;
				case 9: {
					let t = Math.ceil(e / 4) * 4;
					for (s.push(-2); e++ < t;) s.push(-1);
					break;
				}
				case 10:
					s.push(-4), e = 1;
					break;
				default: r = !0, e = 1;
			}
			c = a + 1;
		}
		return o && (r && s.push(-5), t && s.push(t), s.push(null)), s;
	}
}
//#endregion
//#region node_modules/micromark-util-decode-string/index.js
var bs = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function xs(e) {
	return e.replace(bs, Ss);
}
function Ss(e, t, n) {
	if (t) return t;
	if (n.charCodeAt(0) === 35) {
		let e = n.charCodeAt(1), t = e === 120 || e === 88;
		return Wi(n.slice(t ? 2 : 1), t ? 16 : 10);
	}
	return Li(n) || e;
}
//#endregion
//#region node_modules/mdast-util-from-markdown/lib/index.js
var Cs = {}.hasOwnProperty;
function ws(e, t, n) {
	return t && typeof t == "object" && (n = t, t = void 0), Ts(n)(_s(gs(n).document().write(ys()(e, t, !0))));
}
function Ts(e) {
	let t = {
		transforms: [],
		canContainEols: [
			"emphasis",
			"fragment",
			"heading",
			"paragraph",
			"strong"
		],
		enter: {
			autolink: a(Ce),
			autolinkProtocol: w,
			autolinkEmail: w,
			atxHeading: a(ye),
			blockQuote: a(me),
			characterEscape: w,
			characterReference: w,
			codeFenced: a(he),
			codeFencedFenceInfo: o,
			codeFencedFenceMeta: o,
			codeIndented: a(he, o),
			codeText: a(ge, o),
			codeTextData: w,
			data: w,
			codeFlowValue: w,
			definition: a(_e),
			definitionDestinationString: o,
			definitionLabelString: o,
			definitionTitleString: o,
			emphasis: a(ve),
			hardBreakEscape: a(be),
			hardBreakTrailing: a(be),
			htmlFlow: a(xe, o),
			htmlFlowData: w,
			htmlText: a(xe, o),
			htmlTextData: w,
			image: a(Se),
			label: o,
			link: a(Ce),
			listItem: a(Te),
			listItemValue: f,
			listOrdered: a(we, d),
			listUnordered: a(we),
			paragraph: a(Ee),
			reference: se,
			referenceString: o,
			resourceDestinationString: o,
			resourceTitleString: o,
			setextHeading: a(ye),
			strong: a(De),
			thematicBreak: a(ke)
		},
		exit: {
			atxHeading: c(),
			atxHeadingSequence: x,
			autolink: c(),
			autolinkEmail: pe,
			autolinkProtocol: fe,
			blockQuote: c(),
			characterEscapeValue: T,
			characterReferenceMarkerHexadecimal: le,
			characterReferenceMarkerNumeric: le,
			characterReferenceValue: ue,
			characterReference: de,
			codeFenced: c(g),
			codeFencedFence: h,
			codeFencedFenceInfo: p,
			codeFencedFenceMeta: m,
			codeFlowValue: T,
			codeIndented: c(_),
			codeText: c(O),
			codeTextData: T,
			data: T,
			definition: c(),
			definitionDestinationString: b,
			definitionLabelString: v,
			definitionTitleString: y,
			emphasis: c(),
			hardBreakEscape: c(D),
			hardBreakTrailing: c(D),
			htmlFlow: c(te),
			htmlFlowData: T,
			htmlText: c(ne),
			htmlTextData: T,
			image: c(A),
			label: j,
			labelText: re,
			lineEnding: E,
			link: c(k),
			listItem: c(),
			listOrdered: c(),
			listUnordered: c(),
			paragraph: c(),
			referenceString: ce,
			resourceDestinationString: ie,
			resourceTitleString: ae,
			resource: oe,
			setextHeading: c(ee),
			setextHeadingLineSequence: C,
			setextHeadingText: S,
			strong: c(),
			thematicBreak: c()
		}
	};
	Ds(t, (e || {}).mdastExtensions || []);
	let n = {};
	return r;
	function r(e) {
		let r = {
			type: "root",
			children: []
		}, a = {
			stack: [r],
			tokenStack: [],
			config: t,
			enter: s,
			exit: l,
			buffer: o,
			resume: u,
			data: n
		}, c = [], d = -1;
		for (; ++d < e.length;) (e[d][1].type === "listOrdered" || e[d][1].type === "listUnordered") && (e[d][0] === "enter" ? c.push(d) : d = i(e, c.pop(), d));
		for (d = -1; ++d < e.length;) {
			let n = t[e[d][0]];
			Cs.call(n, e[d][1].type) && n[e[d][1].type].call(Object.assign({ sliceSerialize: e[d][2].sliceSerialize }, a), e[d][1]);
		}
		if (a.tokenStack.length > 0) {
			let e = a.tokenStack[a.tokenStack.length - 1];
			(e[1] || ks).call(a, void 0, e[0]);
		}
		for (r.position = {
			start: Es(e.length > 0 ? e[0][1].start : {
				line: 1,
				column: 1,
				offset: 0
			}),
			end: Es(e.length > 0 ? e[e.length - 2][1].end : {
				line: 1,
				column: 1,
				offset: 0
			})
		}, d = -1; ++d < t.transforms.length;) r = t.transforms[d](r) || r;
		return r;
	}
	function i(e, t, n) {
		let r = t - 1, i = -1, a = !1, o, s, c, l;
		for (; ++r <= n;) {
			let t = e[r];
			switch (t[1].type) {
				case "listUnordered":
				case "listOrdered":
				case "blockQuote":
					t[0] === "enter" ? i++ : i--, l = void 0;
					break;
				case "lineEndingBlank":
					t[0] === "enter" && (o && !l && !i && !c && (c = r), l = void 0);
					break;
				case "linePrefix":
				case "listItemValue":
				case "listItemMarker":
				case "listItemPrefix":
				case "listItemPrefixWhitespace": break;
				default: l = void 0;
			}
			if (!i && t[0] === "enter" && t[1].type === "listItemPrefix" || i === -1 && t[0] === "exit" && (t[1].type === "listUnordered" || t[1].type === "listOrdered")) {
				if (o) {
					let i = r;
					for (s = void 0; i--;) {
						let t = e[i];
						if (t[1].type === "lineEnding" || t[1].type === "lineEndingBlank") {
							if (t[0] === "exit") continue;
							s && (e[s][1].type = "lineEndingBlank", a = !0), t[1].type = "lineEnding", s = i;
						} else if (t[1].type !== "linePrefix" && t[1].type !== "blockQuotePrefix" && t[1].type !== "blockQuotePrefixWhitespace" && t[1].type !== "blockQuoteMarker" && t[1].type !== "listItemIndent") break;
					}
					c && (!s || c < s) && (o._spread = !0), o.end = Object.assign({}, s ? e[s][1].start : t[1].end), e.splice(s || r, 0, [
						"exit",
						o,
						t[2]
					]), r++, n++;
				}
				if (t[1].type === "listItemPrefix") {
					let i = {
						type: "listItem",
						_spread: !1,
						start: Object.assign({}, t[1].start),
						end: void 0
					};
					o = i, e.splice(r, 0, [
						"enter",
						i,
						t[2]
					]), r++, n++, c = void 0, l = !0;
				}
			}
		}
		return e[t][1]._spread = a, n;
	}
	function a(e, t) {
		return n;
		function n(n) {
			s.call(this, e(n), n), t && t.call(this, n);
		}
	}
	function o() {
		this.stack.push({
			type: "fragment",
			children: []
		});
	}
	function s(e, t, n) {
		this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([t, n || void 0]), e.position = {
			start: Es(t.start),
			end: void 0
		};
	}
	function c(e) {
		return t;
		function t(t) {
			e && e.call(this, t), l.call(this, t);
		}
	}
	function l(e, t) {
		let n = this.stack.pop(), r = this.tokenStack.pop();
		if (r) r[0].type !== e.type && (t ? t.call(this, e, r[0]) : (r[1] || ks).call(this, e, r[0]));
		else throw Error("Cannot close `" + e.type + "` (" + Xr({
			start: e.start,
			end: e.end
		}) + "): it’s not open");
		n.position.end = Es(e.end);
	}
	function u() {
		return Mi(this.stack.pop());
	}
	function d() {
		this.data.expectingFirstListItemValue = !0;
	}
	function f(e) {
		if (this.data.expectingFirstListItemValue) {
			let t = this.stack[this.stack.length - 2];
			t.start = Number.parseInt(this.sliceSerialize(e), 10), this.data.expectingFirstListItemValue = void 0;
		}
	}
	function p() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.lang = e;
	}
	function m() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.meta = e;
	}
	function h() {
		this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
	}
	function g() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
	}
	function _() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e.replace(/(\r?\n|\r)$/g, "");
	}
	function v(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.label = t, n.identifier = Gi(this.sliceSerialize(e)).toLowerCase();
	}
	function y() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.title = e;
	}
	function b() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function x(e) {
		let t = this.stack[this.stack.length - 1];
		t.depth ||= this.sliceSerialize(e).length;
	}
	function S() {
		this.data.setextHeadingSlurpLineEnding = !0;
	}
	function C(e) {
		let t = this.stack[this.stack.length - 1];
		t.depth = this.sliceSerialize(e).codePointAt(0) === 61 ? 1 : 2;
	}
	function ee() {
		this.data.setextHeadingSlurpLineEnding = void 0;
	}
	function w(e) {
		let t = this.stack[this.stack.length - 1].children, n = t[t.length - 1];
		(!n || n.type !== "text") && (n = Oe(), n.position = {
			start: Es(e.start),
			end: void 0
		}, t.push(n)), this.stack.push(n);
	}
	function T(e) {
		let t = this.stack.pop();
		t.value += this.sliceSerialize(e), t.position.end = Es(e.end);
	}
	function E(e) {
		let n = this.stack[this.stack.length - 1];
		if (this.data.atHardBreak) {
			let t = n.children[n.children.length - 1];
			t.position.end = Es(e.end), this.data.atHardBreak = void 0;
			return;
		}
		!this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(n.type) && (w.call(this, e), T.call(this, e));
	}
	function D() {
		this.data.atHardBreak = !0;
	}
	function te() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function ne() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function O() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function k() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function A() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function re(e) {
		let t = this.sliceSerialize(e), n = this.stack[this.stack.length - 2];
		n.label = xs(t), n.identifier = Gi(t).toLowerCase();
	}
	function j() {
		let e = this.stack[this.stack.length - 1], t = this.resume(), n = this.stack[this.stack.length - 1];
		this.data.inReference = !0, n.type === "link" ? n.children = e.children : n.alt = t;
	}
	function ie() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function ae() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.title = e;
	}
	function oe() {
		this.data.inReference = void 0;
	}
	function se() {
		this.data.referenceType = "collapsed";
	}
	function ce(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.label = t, n.identifier = Gi(this.sliceSerialize(e)).toLowerCase(), this.data.referenceType = "full";
	}
	function le(e) {
		this.data.characterReferenceType = e.type;
	}
	function ue(e) {
		let t = this.sliceSerialize(e), n = this.data.characterReferenceType, r;
		n ? (r = Wi(t, n === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : r = Li(t);
		let i = this.stack[this.stack.length - 1];
		i.value += r;
	}
	function de(e) {
		let t = this.stack.pop();
		t.position.end = Es(e.end);
	}
	function fe(e) {
		T.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = this.sliceSerialize(e);
	}
	function pe(e) {
		T.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = "mailto:" + this.sliceSerialize(e);
	}
	function me() {
		return {
			type: "blockquote",
			children: []
		};
	}
	function he() {
		return {
			type: "code",
			lang: null,
			meta: null,
			value: ""
		};
	}
	function ge() {
		return {
			type: "inlineCode",
			value: ""
		};
	}
	function _e() {
		return {
			type: "definition",
			identifier: "",
			label: null,
			title: null,
			url: ""
		};
	}
	function ve() {
		return {
			type: "emphasis",
			children: []
		};
	}
	function ye() {
		return {
			type: "heading",
			depth: 0,
			children: []
		};
	}
	function be() {
		return { type: "break" };
	}
	function xe() {
		return {
			type: "html",
			value: ""
		};
	}
	function Se() {
		return {
			type: "image",
			title: null,
			url: "",
			alt: null
		};
	}
	function Ce() {
		return {
			type: "link",
			title: null,
			url: "",
			children: []
		};
	}
	function we(e) {
		return {
			type: "list",
			ordered: e.type === "listOrdered",
			start: null,
			spread: e._spread,
			children: []
		};
	}
	function Te(e) {
		return {
			type: "listItem",
			spread: e._spread,
			checked: null,
			children: []
		};
	}
	function Ee() {
		return {
			type: "paragraph",
			children: []
		};
	}
	function De() {
		return {
			type: "strong",
			children: []
		};
	}
	function Oe() {
		return {
			type: "text",
			value: ""
		};
	}
	function ke() {
		return { type: "thematicBreak" };
	}
}
function Es(e) {
	return {
		line: e.line,
		column: e.column,
		offset: e.offset
	};
}
function Ds(e, t) {
	let n = -1;
	for (; ++n < t.length;) {
		let r = t[n];
		Array.isArray(r) ? Ds(e, r) : Os(e, r);
	}
}
function Os(e, t) {
	let n;
	for (n in t) if (Cs.call(t, n)) switch (n) {
		case "canContainEols": {
			let r = t[n];
			r && e[n].push(...r);
			break;
		}
		case "transforms": {
			let r = t[n];
			r && e[n].push(...r);
			break;
		}
		case "enter":
		case "exit": {
			let r = t[n];
			r && Object.assign(e[n], r);
			break;
		}
	}
}
function ks(e, t) {
	throw Error(e ? "Cannot close `" + e.type + "` (" + Xr({
		start: e.start,
		end: e.end
	}) + "): a different token (`" + t.type + "`, " + Xr({
		start: t.start,
		end: t.end
	}) + ") is open" : "Cannot close document, a token (`" + t.type + "`, " + Xr({
		start: t.start,
		end: t.end
	}) + ") is still open");
}
//#endregion
//#region node_modules/remark-parse/lib/index.js
function As(e) {
	let t = this;
	t.parser = n;
	function n(n) {
		return ws(n, {
			...t.data("settings"),
			...e,
			extensions: t.data("micromarkExtensions") || [],
			mdastExtensions: t.data("fromMarkdownExtensions") || []
		});
	}
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
function js(e, t) {
	let n = {
		type: "element",
		tagName: "blockquote",
		properties: {},
		children: e.wrap(e.all(t), !0)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/break.js
function Ms(e, t) {
	let n = {
		type: "element",
		tagName: "br",
		properties: {},
		children: []
	};
	return e.patch(t, n), [e.applyData(t, n), {
		type: "text",
		value: "\n"
	}];
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/code.js
function Ns(e, t) {
	let n = t.value ? t.value + "\n" : "", r = {}, i = t.lang ? t.lang.split(/\s+/) : [];
	i.length > 0 && (r.className = ["language-" + i[0]]);
	let a = {
		type: "element",
		tagName: "code",
		properties: r,
		children: [{
			type: "text",
			value: n
		}]
	};
	return t.meta && (a.data = { meta: t.meta }), e.patch(t, a), a = e.applyData(t, a), a = {
		type: "element",
		tagName: "pre",
		properties: {},
		children: [a]
	}, e.patch(t, a), a;
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/delete.js
function Ps(e, t) {
	let n = {
		type: "element",
		tagName: "del",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/emphasis.js
function Fs(e, t) {
	let n = {
		type: "element",
		tagName: "em",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js
function Is(e, t) {
	let n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = na(r.toLowerCase()), a = e.footnoteOrder.indexOf(r), o, s = e.footnoteCounts.get(r);
	s === void 0 ? (s = 0, e.footnoteOrder.push(r), o = e.footnoteOrder.length) : o = a + 1, s += 1, e.footnoteCounts.set(r, s);
	let c = {
		type: "element",
		tagName: "a",
		properties: {
			href: "#" + n + "fn-" + i,
			id: n + "fnref-" + i + (s > 1 ? "-" + s : ""),
			dataFootnoteRef: !0,
			ariaDescribedBy: ["footnote-label"]
		},
		children: [{
			type: "text",
			value: String(o)
		}]
	};
	e.patch(t, c);
	let l = {
		type: "element",
		tagName: "sup",
		properties: {},
		children: [c]
	};
	return e.patch(t, l), e.applyData(t, l);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/heading.js
function Ls(e, t) {
	let n = {
		type: "element",
		tagName: "h" + t.depth,
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/html.js
function Rs(e, t) {
	if (e.options.allowDangerousHtml) {
		let n = {
			type: "raw",
			value: t.value
		};
		return e.patch(t, n), e.applyData(t, n);
	}
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/revert.js
function zs(e, t) {
	let n = t.referenceType, r = "]";
	if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference") return [{
		type: "text",
		value: "![" + t.alt + r
	}];
	let i = e.all(t), a = i[0];
	a && a.type === "text" ? a.value = "[" + a.value : i.unshift({
		type: "text",
		value: "["
	});
	let o = i[i.length - 1];
	return o && o.type === "text" ? o.value += r : i.push({
		type: "text",
		value: r
	}), i;
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
function Bs(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return zs(e, t);
	let i = {
		src: na(r.url || ""),
		alt: t.alt
	};
	r.title !== null && r.title !== void 0 && (i.title = r.title);
	let a = {
		type: "element",
		tagName: "img",
		properties: i,
		children: []
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/image.js
function Vs(e, t) {
	let n = { src: na(t.url) };
	t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
	let r = {
		type: "element",
		tagName: "img",
		properties: n,
		children: []
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/inline-code.js
function Hs(e, t) {
	let n = {
		type: "text",
		value: t.value.replace(/\r?\n|\r/g, " ")
	};
	e.patch(t, n);
	let r = {
		type: "element",
		tagName: "code",
		properties: {},
		children: [n]
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/link-reference.js
function Us(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return zs(e, t);
	let i = { href: na(r.url || "") };
	r.title !== null && r.title !== void 0 && (i.title = r.title);
	let a = {
		type: "element",
		tagName: "a",
		properties: i,
		children: e.all(t)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/link.js
function Ws(e, t) {
	let n = { href: na(t.url) };
	t.title !== null && t.title !== void 0 && (n.title = t.title);
	let r = {
		type: "element",
		tagName: "a",
		properties: n,
		children: e.all(t)
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/list-item.js
function Gs(e, t, n) {
	let r = e.all(t), i = n ? Ks(n) : qs(t), a = {}, o = [];
	if (typeof t.checked == "boolean") {
		let e = r[0], n;
		e && e.type === "element" && e.tagName === "p" ? n = e : (n = {
			type: "element",
			tagName: "p",
			properties: {},
			children: []
		}, r.unshift(n)), n.children.length > 0 && n.children.unshift({
			type: "text",
			value: " "
		}), n.children.unshift({
			type: "element",
			tagName: "input",
			properties: {
				type: "checkbox",
				checked: t.checked,
				disabled: !0
			},
			children: []
		}), a.className = ["task-list-item"];
	}
	let s = -1;
	for (; ++s < r.length;) {
		let e = r[s];
		(i || s !== 0 || e.type !== "element" || e.tagName !== "p") && o.push({
			type: "text",
			value: "\n"
		}), e.type === "element" && e.tagName === "p" && !i ? o.push(...e.children) : o.push(e);
	}
	let c = r[r.length - 1];
	c && (i || c.type !== "element" || c.tagName !== "p") && o.push({
		type: "text",
		value: "\n"
	});
	let l = {
		type: "element",
		tagName: "li",
		properties: a,
		children: o
	};
	return e.patch(t, l), e.applyData(t, l);
}
function Ks(e) {
	let t = !1;
	if (e.type === "list") {
		t = e.spread || !1;
		let n = e.children, r = -1;
		for (; !t && ++r < n.length;) t = qs(n[r]);
	}
	return t;
}
function qs(e) {
	return e.spread ?? e.children.length > 1;
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/list.js
function Js(e, t) {
	let n = {}, r = e.all(t), i = -1;
	for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length;) {
		let e = r[i];
		if (e.type === "element" && e.tagName === "li" && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes("task-list-item")) {
			n.className = ["contains-task-list"];
			break;
		}
	}
	let a = {
		type: "element",
		tagName: t.ordered ? "ol" : "ul",
		properties: n,
		children: e.wrap(r, !0)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/paragraph.js
function Ys(e, t) {
	let n = {
		type: "element",
		tagName: "p",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/root.js
function Xs(e, t) {
	let n = {
		type: "root",
		children: e.wrap(e.all(t))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/strong.js
function Zs(e, t) {
	let n = {
		type: "element",
		tagName: "strong",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/table.js
function Qs(e, t) {
	let n = e.all(t), r = n.shift(), i = [];
	if (r) {
		let n = {
			type: "element",
			tagName: "thead",
			properties: {},
			children: e.wrap([r], !0)
		};
		e.patch(t.children[0], n), i.push(n);
	}
	if (n.length > 0) {
		let r = {
			type: "element",
			tagName: "tbody",
			properties: {},
			children: e.wrap(n, !0)
		}, a = qr(t.children[1]), o = Kr(t.children[t.children.length - 1]);
		a && o && (r.position = {
			start: a,
			end: o
		}), i.push(r);
	}
	let a = {
		type: "element",
		tagName: "table",
		properties: {},
		children: e.wrap(i, !0)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/table-row.js
function $s(e, t, n) {
	let r = n ? n.children : void 0, i = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", a = n && n.type === "table" ? n.align : void 0, o = a ? a.length : t.children.length, s = -1, c = [];
	for (; ++s < o;) {
		let n = t.children[s], r = {}, o = a ? a[s] : void 0;
		o && (r.align = o);
		let l = {
			type: "element",
			tagName: i,
			properties: r,
			children: []
		};
		n && (l.children = e.all(n), e.patch(n, l), l = e.applyData(n, l)), c.push(l);
	}
	let l = {
		type: "element",
		tagName: "tr",
		properties: {},
		children: e.wrap(c, !0)
	};
	return e.patch(t, l), e.applyData(t, l);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/table-cell.js
function ec(e, t) {
	let n = {
		type: "element",
		tagName: "td",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/trim-lines/index.js
var tc = 9, nc = 32;
function rc(e) {
	let t = String(e), n = /\r?\n|\r/g, r = n.exec(t), i = 0, a = [];
	for (; r;) a.push(ic(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
	return a.push(ic(t.slice(i), i > 0, !1)), a.join("");
}
function ic(e, t, n) {
	let r = 0, i = e.length;
	if (t) {
		let t = e.codePointAt(r);
		for (; t === tc || t === nc;) r++, t = e.codePointAt(r);
	}
	if (n) {
		let t = e.codePointAt(i - 1);
		for (; t === tc || t === nc;) i--, t = e.codePointAt(i - 1);
	}
	return i > r ? e.slice(r, i) : "";
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/text.js
function ac(e, t) {
	let n = {
		type: "text",
		value: rc(String(t.value))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
function oc(e, t) {
	let n = {
		type: "element",
		tagName: "hr",
		properties: {},
		children: []
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/index.js
var sc = {
	blockquote: js,
	break: Ms,
	code: Ns,
	delete: Ps,
	emphasis: Fs,
	footnoteReference: Is,
	heading: Ls,
	html: Rs,
	imageReference: Bs,
	image: Vs,
	inlineCode: Hs,
	linkReference: Us,
	link: Ws,
	listItem: Gs,
	list: Js,
	paragraph: Ys,
	root: Xs,
	strong: Zs,
	table: Qs,
	tableCell: ec,
	tableRow: $s,
	text: ac,
	thematicBreak: oc,
	toml: cc,
	yaml: cc,
	definition: cc,
	footnoteDefinition: cc
};
function cc() {}
//#endregion
//#region node_modules/@ungap/structured-clone/esm/deserialize.js
var { defineProperty: lc } = Object, uc = typeof self == "object" ? self : globalThis, dc = (e, t) => {
	switch (e) {
		case "Function":
		case "SharedWorker":
		case "Worker":
		case "eval":
		case "setInterval":
		case "setTimeout": throw TypeError("unable to deserialize " + e);
	}
	return new uc[e](t);
}, fc = (e, t) => {
	let n = (t, n) => (e.set(n, t), t), r = (i) => {
		if (e.has(i)) return e.get(i);
		let [a, o] = t[i];
		switch (a) {
			case 0:
			case -1: return n(o, i);
			case 1: {
				let e = n([], i);
				for (let t of o) e.push(r(t));
				return e;
			}
			case 2: {
				let e = n({}, i);
				for (let [t, n] of o) {
					let i = r(t), a = r(n);
					i === "__proto__" ? lc(e, i, {
						value: a,
						configurable: !0,
						enumerable: !0,
						writable: !0
					}) : e[i] = a;
				}
				return e;
			}
			case 3: return n(new Date(o), i);
			case 4: {
				let { source: e, flags: t } = o;
				return n(new RegExp(e, t), i);
			}
			case 5: {
				let e = n(/* @__PURE__ */ new Map(), i);
				for (let [t, n] of o) e.set(r(t), r(n));
				return e;
			}
			case 6: {
				let e = n(/* @__PURE__ */ new Set(), i);
				for (let t of o) e.add(r(t));
				return e;
			}
			case 7: {
				let { name: e, message: t } = o;
				return n(typeof uc[e] == "function" ? dc(e, t) : Error(t), i);
			}
			case 8: return n(BigInt(o), i);
			case "BigInt": return n(Object(BigInt(o)), i);
			case "ArrayBuffer": return n(new Uint8Array(o).buffer, o);
			case "DataView": {
				let { buffer: e } = new Uint8Array(o);
				return n(new DataView(e), o);
			}
			case "-0": return -0;
		}
		return n(dc(a, o), i);
	};
	return r;
}, pc = (e) => fc(/* @__PURE__ */ new Map(), e)(0), mc = "", { toString: hc } = {}, { keys: gc, is: _c } = Object, vc = (e) => {
	let t = typeof e;
	if (t !== "object" || !e) return [0, t];
	let n = hc.call(e).slice(8, -1);
	switch (n) {
		case "Array": return [1, mc];
		case "Object": return [2, mc];
		case "Date": return [3, mc];
		case "RegExp": return [4, mc];
		case "Map": return [5, mc];
		case "Set": return [6, mc];
		case "DataView": return [1, n];
	}
	return n.includes("Array") ? [1, n] : e instanceof Error ? [7, e.name || "Error"] : [2, n];
}, yc = ([e, t]) => e === 0 && (t === "function" || t === "symbol"), bc = (e, t, n, r) => {
	let i = (e, t) => {
		let i = r.push(e) - 1;
		return n.set(t, i), i;
	}, a = (o) => {
		if (n.has(o)) return n.get(o);
		let [s, c] = vc(o);
		switch (s) {
			case 0: {
				let t = o;
				switch (c) {
					case "bigint":
						s = 8, t = o.toString();
						break;
					case "number":
						if (!o && _c(o, -0)) return r.push(["-0"]) - 1;
						break;
					case "function":
					case "symbol":
						if (e) throw TypeError("unable to serialize " + c);
						t = null;
						break;
					case "undefined": return i([-1], o);
				}
				return i([s, t], o);
			}
			case 1: {
				if (c) {
					let e = o;
					return c === "DataView" ? e = new Uint8Array(o.buffer) : c === "ArrayBuffer" && (e = new Uint8Array(o)), i([c, [...e]], o);
				}
				let e = [], t = i([s, e], o);
				for (let t of o) e.push(a(t));
				return t;
			}
			case 2: {
				if (c) switch (c) {
					case "BigInt": return i([c, o.toString()], o);
					case "Boolean":
					case "Number":
					case "String": return i([c, o.valueOf()], o);
				}
				if (t && "toJSON" in o) return a(o.toJSON());
				let n = [], r = i([s, n], o);
				for (let t of gc(o)) (e || !yc(vc(o[t]))) && n.push([a(t), a(o[t])]);
				return r;
			}
			case 3: return i([s, isNaN(o.getTime()) ? mc : o.toISOString()], o);
			case 4: {
				let { source: e, flags: t } = o;
				return i([s, {
					source: e,
					flags: t
				}], o);
			}
			case 5: {
				let t = [], n = i([s, t], o);
				for (let [n, r] of o) (e || !(yc(vc(n)) || yc(vc(r)))) && t.push([a(n), a(r)]);
				return n;
			}
			case 6: {
				let t = [], n = i([s, t], o);
				for (let n of o) (e || !yc(vc(n))) && t.push(a(n));
				return n;
			}
		}
		let { message: l } = o;
		return i([s, {
			name: c,
			message: l
		}], o);
	};
	return a;
}, xc = (e, { json: t, lossy: n } = {}) => {
	let r = [];
	return bc(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Sc = typeof structuredClone == "function" ? 
/* c8 ignore start */
(e, t) => t && ("json" in t || "lossy" in t) ? pc(xc(e, t)) : structuredClone(e) : (e, t) => pc(xc(e, t));
//#endregion
//#region node_modules/mdast-util-to-hast/lib/footer.js
function Cc(e, t) {
	let n = [{
		type: "text",
		value: "↩"
	}];
	return t > 1 && n.push({
		type: "element",
		tagName: "sup",
		properties: {},
		children: [{
			type: "text",
			value: String(t)
		}]
	}), n;
}
function wc(e, t) {
	return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Tc(e) {
	let t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || Cc, r = e.options.footnoteBackLabel || wc, i = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || { className: ["sr-only"] }, s = [], c = -1;
	for (; ++c < e.footnoteOrder.length;) {
		let i = e.footnoteById.get(e.footnoteOrder[c]);
		if (!i) continue;
		let a = e.all(i), o = String(i.identifier).toUpperCase(), l = na(o.toLowerCase()), u = 0, d = [], f = e.footnoteCounts.get(o);
		for (; f !== void 0 && ++u <= f;) {
			d.length > 0 && d.push({
				type: "text",
				value: " "
			});
			let e = typeof n == "string" ? n : n(c, u);
			typeof e == "string" && (e = {
				type: "text",
				value: e
			}), d.push({
				type: "element",
				tagName: "a",
				properties: {
					href: "#" + t + "fnref-" + l + (u > 1 ? "-" + u : ""),
					dataFootnoteBackref: "",
					ariaLabel: typeof r == "string" ? r : r(c, u),
					className: ["data-footnote-backref"]
				},
				children: Array.isArray(e) ? e : [e]
			});
		}
		let p = a[a.length - 1];
		if (p && p.type === "element" && p.tagName === "p") {
			let e = p.children[p.children.length - 1];
			e && e.type === "text" ? e.value += " " : p.children.push({
				type: "text",
				value: " "
			}), p.children.push(...d);
		} else a.push(...d);
		let m = {
			type: "element",
			tagName: "li",
			properties: { id: t + "fn-" + l },
			children: e.wrap(a, !0)
		};
		e.patch(i, m), s.push(m);
	}
	if (s.length !== 0) return {
		type: "element",
		tagName: "section",
		properties: {
			dataFootnotes: !0,
			className: ["footnotes"]
		},
		children: [
			{
				type: "element",
				tagName: a,
				properties: {
					...Sc(o),
					id: "footnote-label"
				},
				children: [{
					type: "text",
					value: i
				}]
			},
			{
				type: "text",
				value: "\n"
			},
			{
				type: "element",
				tagName: "ol",
				properties: {},
				children: e.wrap(s, !0)
			},
			{
				type: "text",
				value: "\n"
			}
		]
	};
}
//#endregion
//#region node_modules/unist-util-is/lib/index.js
var Ec = (function(e) {
	if (e == null) return jc;
	if (typeof e == "function") return Ac(e);
	if (typeof e == "object") return Array.isArray(e) ? Dc(e) : Oc(e);
	if (typeof e == "string") return kc(e);
	throw Error("Expected function, string, or object as test");
});
function Dc(e) {
	let t = [], n = -1;
	for (; ++n < e.length;) t[n] = Ec(e[n]);
	return Ac(r);
	function r(...e) {
		let n = -1;
		for (; ++n < t.length;) if (t[n].apply(this, e)) return !0;
		return !1;
	}
}
function Oc(e) {
	let t = e;
	return Ac(n);
	function n(n) {
		let r = n, i;
		for (i in e) if (r[i] !== t[i]) return !1;
		return !0;
	}
}
function kc(e) {
	return Ac(t);
	function t(t) {
		return t && t.type === e;
	}
}
function Ac(e) {
	return t;
	function t(t, n, r) {
		return !!(Mc(t) && e.call(this, t, typeof n == "number" ? n : void 0, r || void 0));
	}
}
function jc() {
	return !0;
}
function Mc(e) {
	return typeof e == "object" && !!e && "type" in e;
}
//#endregion
//#region node_modules/unist-util-visit-parents/lib/color.js
function Nc(e) {
	return e;
}
//#endregion
//#region node_modules/unist-util-visit-parents/lib/index.js
var Pc = [];
function Fc(e, t, n, r) {
	let i;
	typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
	let a = Ec(i), o = r ? -1 : 1;
	s(e, void 0, [])();
	function s(e, i, c) {
		let l = e && typeof e == "object" ? e : {};
		if (typeof l.type == "string") {
			let t = typeof l.tagName == "string" ? l.tagName : typeof l.name == "string" ? l.name : void 0;
			Object.defineProperty(u, "name", { value: "node (" + Nc(e.type + (t ? "<" + t + ">" : "")) + ")" });
		}
		return u;
		function u() {
			let l = Pc, u, d, f;
			if ((!t || a(e, i, c[c.length - 1] || void 0)) && (l = Ic(n(e, c)), l[0] === !1)) return l;
			if ("children" in e && e.children) {
				let t = e;
				if (t.children && l[0] !== "skip") for (d = (r ? t.children.length : -1) + o, f = c.concat(t); d > -1 && d < t.children.length;) {
					let e = t.children[d];
					if (u = s(e, d, f)(), u[0] === !1) return u;
					d = typeof u[1] == "number" ? u[1] : d + o;
				}
			}
			return l;
		}
	}
}
function Ic(e) {
	return Array.isArray(e) ? e : typeof e == "number" ? [!0, e] : e == null ? Pc : [e];
}
//#endregion
//#region node_modules/unist-util-visit/lib/index.js
function Lc(e, t, n, r) {
	let i, a, o;
	typeof t == "function" && typeof n != "function" ? (a = void 0, o = t, i = n) : (a = t, o = n, i = r), Fc(e, a, s, i);
	function s(e, t) {
		let n = t[t.length - 1], r = n ? n.children.indexOf(e) : void 0;
		return o(e, r, n);
	}
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/state.js
var Rc = {}.hasOwnProperty, zc = {};
function Bc(e, t) {
	let n = t || zc, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = {
		all: s,
		applyData: Hc,
		definitionById: r,
		footnoteById: i,
		footnoteCounts: /* @__PURE__ */ new Map(),
		footnoteOrder: [],
		handlers: {
			...sc,
			...n.handlers
		},
		one: o,
		options: n,
		patch: Vc,
		wrap: Wc
	};
	return Lc(e, function(e) {
		if (e.type === "definition" || e.type === "footnoteDefinition") {
			let t = e.type === "definition" ? r : i, n = String(e.identifier).toUpperCase();
			t.has(n) || t.set(n, e);
		}
	}), a;
	function o(e, t) {
		let n = e.type, r = a.handlers[n];
		if (Rc.call(a.handlers, n) && r) return r(a, e, t);
		if (a.options.passThrough && a.options.passThrough.includes(n)) {
			if ("children" in e) {
				let { children: t, ...n } = e, r = Sc(n);
				return r.children = a.all(e), r;
			}
			return Sc(e);
		}
		return (a.options.unknownHandler || Uc)(a, e, t);
	}
	function s(e) {
		let t = [];
		if ("children" in e) {
			let n = e.children, r = -1;
			for (; ++r < n.length;) {
				let i = a.one(n[r], e);
				if (i) {
					if (r && n[r - 1].type === "break" && (!Array.isArray(i) && i.type === "text" && (i.value = Gc(i.value)), !Array.isArray(i) && i.type === "element")) {
						let e = i.children[0];
						e && e.type === "text" && (e.value = Gc(e.value));
					}
					Array.isArray(i) ? t.push(...i) : t.push(i);
				}
			}
		}
		return t;
	}
}
function Vc(e, t) {
	e.position && (t.position = Yr(e));
}
function Hc(e, t) {
	let n = t;
	if (e && e.data) {
		let t = e.data.hName, r = e.data.hChildren, i = e.data.hProperties;
		typeof t == "string" && (n.type === "element" ? n.tagName = t : n = {
			type: "element",
			tagName: t,
			properties: {},
			children: "children" in n ? n.children : [n]
		}), n.type === "element" && i && Object.assign(n.properties, Sc(i)), "children" in n && n.children && r != null && (n.children = r);
	}
	return n;
}
function Uc(e, t) {
	let n = t.data || {}, r = "value" in t && !(Rc.call(n, "hProperties") || Rc.call(n, "hChildren")) ? {
		type: "text",
		value: t.value
	} : {
		type: "element",
		tagName: "div",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, r), e.applyData(t, r);
}
function Wc(e, t) {
	let n = [], r = -1;
	for (t && n.push({
		type: "text",
		value: "\n"
	}); ++r < e.length;) r && n.push({
		type: "text",
		value: "\n"
	}), n.push(e[r]);
	return t && e.length > 0 && n.push({
		type: "text",
		value: "\n"
	}), n;
}
function Gc(e) {
	let t = 0, n = e.charCodeAt(t);
	for (; n === 9 || n === 32;) t++, n = e.charCodeAt(t);
	return e.slice(t);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/index.js
function Kc(e, t) {
	let n = Bc(e, t), r = n.one(e, void 0), i = Tc(n), a = Array.isArray(r) ? {
		type: "root",
		children: r
	} : r || {
		type: "root",
		children: []
	};
	return i && ("children" in a, a.children.push({
		type: "text",
		value: "\n"
	}, i)), a;
}
//#endregion
//#region node_modules/remark-rehype/lib/index.js
function qc(e, t) {
	return e && "run" in e ? async function(n, r) {
		let i = Kc(n, {
			file: r,
			...t
		});
		await e.run(i, r);
	} : function(n, r) {
		return Kc(n, {
			file: r,
			...e || t
		});
	};
}
//#endregion
//#region node_modules/bail/index.js
function Jc(e) {
	if (e) throw e;
}
//#endregion
//#region node_modules/extend/index.js
var Yc = /* @__PURE__ */ o(((e, t) => {
	var n = Object.prototype.hasOwnProperty, r = Object.prototype.toString, i = Object.defineProperty, a = Object.getOwnPropertyDescriptor, o = function(e) {
		return typeof Array.isArray == "function" ? Array.isArray(e) : r.call(e) === "[object Array]";
	}, s = function(e) {
		if (!e || r.call(e) !== "[object Object]") return !1;
		var t = n.call(e, "constructor"), i = e.constructor && e.constructor.prototype && n.call(e.constructor.prototype, "isPrototypeOf");
		if (e.constructor && !t && !i) return !1;
		for (var a in e);
		return a === void 0 || n.call(e, a);
	}, c = function(e, t) {
		i && t.name === "__proto__" ? i(e, t.name, {
			enumerable: !0,
			configurable: !0,
			value: t.newValue,
			writable: !0
		}) : e[t.name] = t.newValue;
	}, l = function(e, t) {
		if (t === "__proto__") {
			if (!n.call(e, t)) return;
			if (a) return a(e, t).value;
		}
		return e[t];
	};
	t.exports = function e() {
		var t, n, r, i, a, u, d = arguments[0], f = 1, p = arguments.length, m = !1;
		for (typeof d == "boolean" && (m = d, d = arguments[1] || {}, f = 2), (d == null || typeof d != "object" && typeof d != "function") && (d = {}); f < p; ++f) if (t = arguments[f], t != null) for (n in t) r = l(d, n), i = l(t, n), d !== i && (m && i && (s(i) || (a = o(i))) ? (a ? (a = !1, u = r && o(r) ? r : []) : u = r && s(r) ? r : {}, c(d, {
			name: n,
			newValue: e(m, u, i)
		})) : i !== void 0 && c(d, {
			name: n,
			newValue: i
		}));
		return d;
	};
}));
//#endregion
//#region node_modules/is-plain-obj/index.js
function Xc(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
//#endregion
//#region node_modules/trough/lib/index.js
function Zc() {
	let e = [], t = {
		run: n,
		use: r
	};
	return t;
	function n(...t) {
		let n = -1, r = t.pop();
		if (typeof r != "function") throw TypeError("Expected function as last argument, not " + r);
		i(null, ...t);
		function i(a, ...o) {
			let s = e[++n], c = -1;
			if (a) {
				r(a);
				return;
			}
			for (; ++c < t.length;) (o[c] === null || o[c] === void 0) && (o[c] = t[c]);
			t = o, s ? Qc(s, i)(...o) : r(null, ...o);
		}
	}
	function r(n) {
		if (typeof n != "function") throw TypeError("Expected `middelware` to be a function, not " + n);
		return e.push(n), t;
	}
}
function Qc(e, t) {
	let n;
	return r;
	function r(...t) {
		let r = e.length > t.length, o;
		r && t.push(i);
		try {
			o = e.apply(this, t);
		} catch (e) {
			let t = e;
			if (r && n) throw t;
			return i(t);
		}
		r || (o && o.then && typeof o.then == "function" ? o.then(a, i) : o instanceof Error ? i(o) : a(o));
	}
	function i(e, ...r) {
		n || (n = !0, t(e, ...r));
	}
	function a(e) {
		i(null, e);
	}
}
//#endregion
//#region node_modules/vfile/lib/minpath.browser.js
var $c = {
	basename: el,
	dirname: tl,
	extname: nl,
	join: rl,
	sep: "/"
};
function el(e, t) {
	if (t !== void 0 && typeof t != "string") throw TypeError("\"ext\" argument must be a string");
	ol(e);
	let n = 0, r = -1, i = e.length, a;
	if (t === void 0 || t.length === 0 || t.length > e.length) {
		for (; i--;) if (e.codePointAt(i) === 47) {
			if (a) {
				n = i + 1;
				break;
			}
		} else r < 0 && (a = !0, r = i + 1);
		return r < 0 ? "" : e.slice(n, r);
	}
	if (t === e) return "";
	let o = -1, s = t.length - 1;
	for (; i--;) if (e.codePointAt(i) === 47) {
		if (a) {
			n = i + 1;
			break;
		}
	} else o < 0 && (a = !0, o = i + 1), s > -1 && (e.codePointAt(i) === t.codePointAt(s--) ? s < 0 && (r = i) : (s = -1, r = o));
	return n === r ? r = o : r < 0 && (r = e.length), e.slice(n, r);
}
function tl(e) {
	if (ol(e), e.length === 0) return ".";
	let t = -1, n = e.length, r;
	for (; --n;) if (e.codePointAt(n) === 47) {
		if (r) {
			t = n;
			break;
		}
	} else r ||= !0;
	return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function nl(e) {
	ol(e);
	let t = e.length, n = -1, r = 0, i = -1, a = 0, o;
	for (; t--;) {
		let s = e.codePointAt(t);
		if (s === 47) {
			if (o) {
				r = t + 1;
				break;
			}
			continue;
		}
		n < 0 && (o = !0, n = t + 1), s === 46 ? i < 0 ? i = t : a !== 1 && (a = 1) : i > -1 && (a = -1);
	}
	return i < 0 || n < 0 || a === 0 || a === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function rl(...e) {
	let t = -1, n;
	for (; ++t < e.length;) ol(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
	return n === void 0 ? "." : il(n);
}
function il(e) {
	ol(e);
	let t = e.codePointAt(0) === 47, n = al(e, !t);
	return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function al(e, t) {
	let n = "", r = 0, i = -1, a = 0, o = -1, s, c;
	for (; ++o <= e.length;) {
		if (o < e.length) s = e.codePointAt(o);
		else if (s === 47) break;
		else s = 47;
		if (s === 47) {
			if (i !== o - 1 && a !== 1) {
				if (i !== o - 1 && a === 2) {
					if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
						if (n.length > 2) {
							if (c = n.lastIndexOf("/"), c !== n.length - 1) {
								c < 0 ? (n = "", r = 0) : (n = n.slice(0, c), r = n.length - 1 - n.lastIndexOf("/")), i = o, a = 0;
								continue;
							}
						} else if (n.length > 0) {
							n = "", r = 0, i = o, a = 0;
							continue;
						}
					}
					t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
				} else n.length > 0 ? n += "/" + e.slice(i + 1, o) : n = e.slice(i + 1, o), r = o - i - 1;
			}
			i = o, a = 0;
		} else s === 46 && a > -1 ? a++ : a = -1;
	}
	return n;
}
function ol(e) {
	if (typeof e != "string") throw TypeError("Path must be a string. Received " + JSON.stringify(e));
}
//#endregion
//#region node_modules/vfile/lib/minproc.browser.js
var sl = { cwd: cl };
function cl() {
	return "/";
}
//#endregion
//#region node_modules/vfile/lib/minurl.shared.js
function ll(e) {
	return !!(typeof e == "object" && e && "href" in e && e.href && "protocol" in e && e.protocol && e.auth === void 0);
}
//#endregion
//#region node_modules/vfile/lib/minurl.browser.js
function ul(e) {
	if (typeof e == "string") e = new URL(e);
	else if (!ll(e)) {
		let t = /* @__PURE__ */ TypeError("The \"path\" argument must be of type string or an instance of URL. Received `" + e + "`");
		throw t.code = "ERR_INVALID_ARG_TYPE", t;
	}
	if (e.protocol !== "file:") {
		let e = /* @__PURE__ */ TypeError("The URL must be of scheme file");
		throw e.code = "ERR_INVALID_URL_SCHEME", e;
	}
	return dl(e);
}
function dl(e) {
	if (e.hostname !== "") {
		let e = /* @__PURE__ */ TypeError("File URL host must be \"localhost\" or empty on darwin");
		throw e.code = "ERR_INVALID_FILE_URL_HOST", e;
	}
	let t = e.pathname, n = -1;
	for (; ++n < t.length;) if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
		let e = t.codePointAt(n + 2);
		if (e === 70 || e === 102) {
			let e = /* @__PURE__ */ TypeError("File URL path must not include encoded / characters");
			throw e.code = "ERR_INVALID_FILE_URL_PATH", e;
		}
	}
	return decodeURIComponent(t);
}
//#endregion
//#region node_modules/vfile/lib/index.js
var fl = [
	"history",
	"path",
	"basename",
	"stem",
	"extname",
	"dirname"
], pl = class {
	constructor(e) {
		let t;
		t = e ? ll(e) ? { path: e } : typeof e == "string" || _l(e) ? { value: e } : e : {}, this.cwd = "cwd" in t ? "" : sl.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
		let n = -1;
		for (; ++n < fl.length;) {
			let e = fl[n];
			e in t && t[e] !== void 0 && t[e] !== null && (this[e] = e === "history" ? [...t[e]] : t[e]);
		}
		let r;
		for (r in t) fl.includes(r) || (this[r] = t[r]);
	}
	get basename() {
		return typeof this.path == "string" ? $c.basename(this.path) : void 0;
	}
	set basename(e) {
		hl(e, "basename"), ml(e, "basename"), this.path = $c.join(this.dirname || "", e);
	}
	get dirname() {
		return typeof this.path == "string" ? $c.dirname(this.path) : void 0;
	}
	set dirname(e) {
		gl(this.basename, "dirname"), this.path = $c.join(e || "", this.basename);
	}
	get extname() {
		return typeof this.path == "string" ? $c.extname(this.path) : void 0;
	}
	set extname(e) {
		if (ml(e, "extname"), gl(this.dirname, "extname"), e) {
			if (e.codePointAt(0) !== 46) throw Error("`extname` must start with `.`");
			if (e.includes(".", 1)) throw Error("`extname` cannot contain multiple dots");
		}
		this.path = $c.join(this.dirname, this.stem + (e || ""));
	}
	get path() {
		return this.history[this.history.length - 1];
	}
	set path(e) {
		ll(e) && (e = ul(e)), hl(e, "path"), this.path !== e && this.history.push(e);
	}
	get stem() {
		return typeof this.path == "string" ? $c.basename(this.path, this.extname) : void 0;
	}
	set stem(e) {
		hl(e, "stem"), ml(e, "stem"), this.path = $c.join(this.dirname || "", e + (this.extname || ""));
	}
	fail(e, t, n) {
		let r = this.message(e, t, n);
		throw r.fatal = !0, r;
	}
	info(e, t, n) {
		let r = this.message(e, t, n);
		return r.fatal = void 0, r;
	}
	message(e, t, n) {
		let r = new ei(e, t, n);
		return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = !1, this.messages.push(r), r;
	}
	toString(e) {
		return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(e || void 0).decode(this.value);
	}
};
function ml(e, t) {
	if (e && e.includes($c.sep)) throw Error("`" + t + "` cannot be a path: did not expect `" + $c.sep + "`");
}
function hl(e, t) {
	if (!e) throw Error("`" + t + "` cannot be empty");
}
function gl(e, t) {
	if (!e) throw Error("Setting `" + t + "` requires `path` to be set too");
}
function _l(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region node_modules/unified/lib/callable-instance.js
var vl = (function(e) {
	let t = this.constructor.prototype, n = t[e], r = function() {
		return n.apply(r, arguments);
	};
	return Object.setPrototypeOf(r, t), r;
}), yl = /* @__PURE__ */ l(Yc(), 1), bl = {}.hasOwnProperty, xl = new class e extends vl {
	constructor() {
		super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = Zc();
	}
	copy() {
		let t = new e(), n = -1;
		for (; ++n < this.attachers.length;) {
			let e = this.attachers[n];
			t.use(...e);
		}
		return t.data((0, yl.default)(!0, {}, this.namespace)), t;
	}
	data(e, t) {
		return typeof e == "string" ? arguments.length === 2 ? (wl("data", this.frozen), this.namespace[e] = t, this) : bl.call(this.namespace, e) && this.namespace[e] || void 0 : e ? (wl("data", this.frozen), this.namespace = e, this) : this.namespace;
	}
	freeze() {
		if (this.frozen) return this;
		let e = this;
		for (; ++this.freezeIndex < this.attachers.length;) {
			let [t, ...n] = this.attachers[this.freezeIndex];
			if (n[0] === !1) continue;
			n[0] === !0 && (n[0] = void 0);
			let r = t.call(e, ...n);
			typeof r == "function" && this.transformers.use(r);
		}
		return this.frozen = !0, this.freezeIndex = Infinity, this;
	}
	parse(e) {
		this.freeze();
		let t = Dl(e), n = this.parser || this.Parser;
		return Sl("parse", n), n(String(t), t);
	}
	process(e, t) {
		let n = this;
		return this.freeze(), Sl("process", this.parser || this.Parser), Cl("process", this.compiler || this.Compiler), t ? r(void 0, t) : new Promise(r);
		function r(r, i) {
			let a = Dl(e), o = n.parse(a);
			n.run(o, a, function(e, t, r) {
				if (e || !t || !r) return s(e);
				let i = t, a = n.stringify(i, r);
				kl(a) ? r.value = a : r.result = a, s(e, r);
			});
			function s(e, n) {
				e || !n ? i(e) : r ? r(n) : t(void 0, n);
			}
		}
	}
	processSync(e) {
		let t = !1, n;
		return this.freeze(), Sl("processSync", this.parser || this.Parser), Cl("processSync", this.compiler || this.Compiler), this.process(e, r), El("processSync", "process", t), n;
		function r(e, r) {
			t = !0, Jc(e), n = r;
		}
	}
	run(e, t, n) {
		Tl(e), this.freeze();
		let r = this.transformers;
		return !n && typeof t == "function" && (n = t, t = void 0), n ? i(void 0, n) : new Promise(i);
		function i(i, a) {
			let o = Dl(t);
			r.run(e, o, s);
			function s(t, r, o) {
				let s = r || e;
				t ? a(t) : i ? i(s) : n(void 0, s, o);
			}
		}
	}
	runSync(e, t) {
		let n = !1, r;
		return this.run(e, t, i), El("runSync", "run", n), r;
		function i(e, t) {
			Jc(e), r = t, n = !0;
		}
	}
	stringify(e, t) {
		this.freeze();
		let n = Dl(t), r = this.compiler || this.Compiler;
		return Cl("stringify", r), Tl(e), r(e, n);
	}
	use(e, ...t) {
		let n = this.attachers, r = this.namespace;
		if (wl("use", this.frozen), e != null) {
			if (typeof e == "function") s(e, t);
			else if (typeof e == "object") Array.isArray(e) ? o(e) : a(e);
			else throw TypeError("Expected usable value, not `" + e + "`");
		}
		return this;
		function i(e) {
			if (typeof e == "function") s(e, []);
			else if (typeof e == "object") {
				if (Array.isArray(e)) {
					let [t, ...n] = e;
					s(t, n);
				} else a(e);
			} else throw TypeError("Expected usable value, not `" + e + "`");
		}
		function a(e) {
			if (!("plugins" in e) && !("settings" in e)) throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
			o(e.plugins), e.settings && (r.settings = (0, yl.default)(!0, r.settings, e.settings));
		}
		function o(e) {
			let t = -1;
			if (e != null) {
				if (Array.isArray(e)) for (; ++t < e.length;) {
					let n = e[t];
					i(n);
				}
				else throw TypeError("Expected a list of plugins, not `" + e + "`");
			}
		}
		function s(e, t) {
			let r = -1, i = -1;
			for (; ++r < n.length;) if (n[r][0] === e) {
				i = r;
				break;
			}
			if (i === -1) n.push([e, ...t]);
			else if (t.length > 0) {
				let [r, ...a] = t, o = n[i][1];
				Xc(o) && Xc(r) && (r = (0, yl.default)(!0, o, r)), n[i] = [
					e,
					r,
					...a
				];
			}
		}
	}
}().freeze();
function Sl(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `parser`");
}
function Cl(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `compiler`");
}
function wl(e, t) {
	if (t) throw Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
}
function Tl(e) {
	if (!Xc(e) || typeof e.type != "string") throw TypeError("Expected node, got `" + e + "`");
}
function El(e, t, n) {
	if (!n) throw Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function Dl(e) {
	return Ol(e) ? e : new pl(e);
}
function Ol(e) {
	return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function kl(e) {
	return typeof e == "string" || Al(e);
}
function Al(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region node_modules/react-markdown/lib/index.js
var jl = [], Ml = { allowDangerousHtml: !0 }, Nl = /^(https?|ircs?|mailto|xmpp)$/i, Pl = [
	{
		from: "astPlugins",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "allowDangerousHtml",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "allowNode",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "allowElement"
	},
	{
		from: "allowedTypes",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "allowedElements"
	},
	{
		from: "className",
		id: "remove-classname"
	},
	{
		from: "disallowedTypes",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "disallowedElements"
	},
	{
		from: "escapeHtml",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "includeElementIndex",
		id: "#remove-includeelementindex"
	},
	{
		from: "includeNodeIndex",
		id: "change-includenodeindex-to-includeelementindex"
	},
	{
		from: "linkTarget",
		id: "remove-linktarget"
	},
	{
		from: "plugins",
		id: "change-plugins-to-remarkplugins",
		to: "remarkPlugins"
	},
	{
		from: "rawSourcePos",
		id: "#remove-rawsourcepos"
	},
	{
		from: "renderers",
		id: "change-renderers-to-components",
		to: "components"
	},
	{
		from: "source",
		id: "change-source-to-children",
		to: "children"
	},
	{
		from: "sourcePos",
		id: "#remove-sourcepos"
	},
	{
		from: "transformImageUri",
		id: "#add-urltransform",
		to: "urlTransform"
	},
	{
		from: "transformLinkUri",
		id: "#add-urltransform",
		to: "urlTransform"
	}
];
function Fl(e) {
	let t = Il(e), n = Ll(e);
	return Rl(t.runSync(t.parse(n), n), e);
}
function Il(e) {
	let t = e.rehypePlugins || jl, n = e.remarkPlugins || jl, r = e.remarkRehypeOptions ? {
		...e.remarkRehypeOptions,
		...Ml
	} : Ml;
	return xl().use(As).use(n).use(qc, r).use(t);
}
function Ll(e) {
	let t = e.children || "", n = new pl();
	return typeof t == "string" ? n.value = t : "" + t, n;
}
function Rl(e, t) {
	let n = t.allowedElements, r = t.allowElement, i = t.components, a = t.disallowedElements, o = t.skipHtml, s = t.unwrapDisallowed, c = t.urlTransform || zl;
	for (let e of Pl) Object.hasOwn(t, e.from) && "" + e.from + (e.to ? "use `" + e.to + "` instead" : "remove it") + e.id;
	return Lc(e, l), ci(e, {
		Fragment: A,
		components: i,
		ignoreInvalidStyle: !0,
		jsx: F,
		jsxs: F,
		passKeys: !0,
		passNode: !0
	});
	function l(e, t, i) {
		if (e.type === "raw" && i && typeof t == "number") return o ? i.children.splice(t, 1) : i.children[t] = {
			type: "text",
			value: e.value
		}, t;
		if (e.type === "element") {
			let t;
			for (t in Ai) if (Object.hasOwn(Ai, t) && Object.hasOwn(e.properties, t)) {
				let n = e.properties[t], r = Ai[t];
				(r === null || r.includes(e.tagName)) && (e.properties[t] = c(String(n || ""), t, e));
			}
		}
		if (e.type === "element") {
			let o = n ? !n.includes(e.tagName) : a ? a.includes(e.tagName) : !1;
			if (!o && r && typeof t == "number" && (o = !r(e, t, i)), o && i && typeof t == "number") return s && e.children ? i.children.splice(t, 1, ...e.children) : i.children.splice(t, 1), t;
		}
	}
}
function zl(e) {
	let t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
	return t === -1 || i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || Nl.test(e.slice(0, t)) ? e : "";
}
//#endregion
//#region node_modules/hast-util-parse-selector/lib/index.js
var Bl = /[#.]/g;
function Vl(e, t) {
	let n = e || "", r = {}, i = 0, a, o;
	for (; i < n.length;) {
		Bl.lastIndex = i;
		let e = Bl.exec(n), t = n.slice(i, e ? e.index : n.length);
		t && (a ? a === "#" ? r.id = t : Array.isArray(r.className) ? r.className.push(t) : r.className = [t] : o = t, i += t.length), e && (a = e[0], i++);
	}
	return {
		type: "element",
		tagName: o || t || "div",
		properties: r,
		children: []
	};
}
//#endregion
//#region node_modules/hastscript/lib/create-h.js
function Hl(e, t, n) {
	let r = n ? Jl(n) : void 0;
	function i(n, i, ...a) {
		let o;
		if (n == null) {
			o = {
				type: "root",
				children: []
			};
			let e = i;
			a.unshift(e);
		} else {
			o = Vl(n, t);
			let s = o.tagName.toLowerCase(), c = r ? r.get(s) : void 0;
			if (o.tagName = c || s, Ul(i)) a.unshift(i);
			else for (let [t, n] of Object.entries(i)) Wl(e, o.properties, t, n);
		}
		for (let e of a) Gl(o.children, e);
		return o.type === "element" && o.tagName === "template" && (o.content = {
			type: "root",
			children: o.children
		}, o.children = []), o;
	}
	return i;
}
function Ul(e) {
	if (typeof e != "object" || !e || Array.isArray(e)) return !0;
	if (typeof e.type != "string") return !1;
	let t = e, n = Object.keys(e);
	for (let e of n) {
		let n = t[e];
		if (n && typeof n == "object") {
			if (!Array.isArray(n)) return !0;
			let e = n;
			for (let t of e) if (typeof t != "number" && typeof t != "string") return !0;
		}
	}
	return !!("children" in e && Array.isArray(e.children));
}
function Wl(e, t, n, r) {
	let i = Fr(e, n), a;
	if (r != null) {
		if (typeof r == "number") {
			if (Number.isNaN(r)) return;
			a = r;
		} else a = typeof r == "boolean" ? r : typeof r == "string" ? i.spaceSeparated ? Br(r) : i.commaSeparated ? er(r) : i.commaOrSpaceSeparated ? Br(er(r).join(" ")) : Kl(i, i.property, r) : Array.isArray(r) ? [...r] : i.property === "style" ? ql(r) : String(r);
		if (Array.isArray(a)) {
			let e = [];
			for (let t of a) e.push(Kl(i, i.property, t));
			a = e;
		}
		i.property === "className" && Array.isArray(t.className) && (a = t.className.concat(a)), t[i.property] = a;
	}
}
function Gl(e, t) {
	if (t != null) {
		if (typeof t == "number" || typeof t == "string") e.push({
			type: "text",
			value: String(t)
		});
		else if (Array.isArray(t)) for (let n of t) Gl(e, n);
		else if (typeof t == "object" && "type" in t) t.type === "root" ? Gl(e, t.children) : e.push(t);
		else throw Error("Expected node, nodes, or string, got `" + t + "`");
	}
}
function Kl(e, t, n) {
	if (typeof n == "string") {
		if (e.number && n && !Number.isNaN(Number(n))) return Number(n);
		if ((e.boolean || e.overloadedBoolean) && (n === "" || dr(n) === dr(t))) return !0;
	}
	return n;
}
function ql(e) {
	let t = [];
	for (let [n, r] of Object.entries(e)) t.push([n, r].join(": "));
	return t.join("; ");
}
function Jl(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) t.set(n.toLowerCase(), n);
	return t;
}
//#endregion
//#region node_modules/hastscript/lib/svg-case-sensitive-tag-names.js
var Yl = /* @__PURE__ */ "altGlyph.altGlyphDef.altGlyphItem.animateColor.animateMotion.animateTransform.clipPath.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.foreignObject.glyphRef.linearGradient.radialGradient.solidColor.textArea.textPath".split("."), Xl = Hl(Rr, "div"), Zl = Hl(zr, "g", Yl);
//#endregion
//#region node_modules/vfile-location/lib/index.js
function Ql(e) {
	let t = String(e), n = [];
	return {
		toOffset: i,
		toPoint: r
	};
	function r(e) {
		if (typeof e == "number" && e > -1 && e <= t.length) {
			let r = 0;
			for (;;) {
				let i = n[r];
				if (i === void 0) {
					let e = $l(t, n[r - 1]);
					i = e === -1 ? t.length + 1 : e + 1, n[r] = i;
				}
				if (i > e) return {
					line: r + 1,
					column: e - (r > 0 ? n[r - 1] : 0) + 1,
					offset: e
				};
				r++;
			}
		}
	}
	function i(e) {
		if (e && typeof e.line == "number" && typeof e.column == "number" && !Number.isNaN(e.line) && !Number.isNaN(e.column)) {
			for (; n.length < e.line;) {
				let e = n[n.length - 1], r = $l(t, e), i = r === -1 ? t.length + 1 : r + 1;
				if (e === i) break;
				n.push(i);
			}
			let r = (e.line > 1 ? n[e.line - 2] : 0) + e.column - 1;
			if (r < n[e.line - 1]) return r;
		}
	}
}
function $l(e, t) {
	let n = e.indexOf("\r", t), r = e.indexOf("\n", t);
	return r === -1 ? n : n === -1 || n + 1 === r ? r : n < r ? n : r;
}
//#endregion
//#region node_modules/web-namespaces/index.js
var eu = {
	html: "http://www.w3.org/1999/xhtml",
	mathml: "http://www.w3.org/1998/Math/MathML",
	svg: "http://www.w3.org/2000/svg",
	xlink: "http://www.w3.org/1999/xlink",
	xml: "http://www.w3.org/XML/1998/namespace",
	xmlns: "http://www.w3.org/2000/xmlns/"
}, tu = {}.hasOwnProperty, nu = Object.prototype;
function ru(e, t) {
	let n = t || {};
	return iu({
		file: n.file || void 0,
		location: !1,
		schema: n.space === "svg" ? zr : Rr,
		verbose: n.verbose || !1
	}, e);
}
function iu(e, t) {
	let n;
	switch (t.nodeName) {
		case "#comment": {
			let r = t;
			return n = {
				type: "comment",
				value: r.data
			}, su(e, r, n), n;
		}
		case "#document":
		case "#document-fragment": {
			let r = t, i = "mode" in r ? r.mode === "quirks" || r.mode === "limited-quirks" : !1;
			if (n = {
				type: "root",
				children: au(e, t.childNodes),
				data: { quirksMode: i }
			}, e.file && e.location) {
				let t = String(e.file), r = Ql(t), i = r.toPoint(0), a = r.toPoint(t.length);
				n.position = {
					start: i,
					end: a
				};
			}
			return n;
		}
		case "#documentType": {
			let r = t;
			return n = { type: "doctype" }, su(e, r, n), n;
		}
		case "#text": {
			let r = t;
			return n = {
				type: "text",
				value: r.value
			}, su(e, r, n), n;
		}
		default: return n = ou(e, t), n;
	}
}
function au(e, t) {
	let n = -1, r = [];
	for (; ++n < t.length;) {
		let i = iu(e, t[n]);
		r.push(i);
	}
	return r;
}
function ou(e, t) {
	let n = e.schema;
	e.schema = t.namespaceURI === eu.svg ? zr : Rr;
	let r = -1, i = {};
	for (; ++r < t.attrs.length;) {
		let e = t.attrs[r], n = (e.prefix ? e.prefix + ":" : "") + e.name;
		tu.call(nu, n) || (i[n] = e.value);
	}
	let a = (e.schema.space === "svg" ? Zl : Xl)(t.tagName, i, au(e, t.childNodes));
	if (su(e, t, a), a.tagName === "template") {
		let n = t, r = n.sourceCodeLocation, i = r && r.startTag && lu(r.startTag), o = r && r.endTag && lu(r.endTag), s = iu(e, n.content);
		i && o && e.file && (s.position = {
			start: i.end,
			end: o.start
		}), a.content = s;
	}
	return e.schema = n, a;
}
function su(e, t, n) {
	if ("sourceCodeLocation" in t && t.sourceCodeLocation && e.file) {
		let r = cu(e, n, t.sourceCodeLocation);
		r && (e.location = !0, n.position = r);
	}
}
function cu(e, t, n) {
	let r = lu(n);
	if (t.type === "element") {
		let i = t.children[t.children.length - 1];
		if (r && !n.endTag && i && i.position && i.position.end && (r.end = Object.assign({}, i.position.end)), e.verbose) {
			let r = {}, i;
			if (n.attrs) for (i in n.attrs) tu.call(n.attrs, i) && (r[Fr(e.schema, i).property] = lu(n.attrs[i]));
			n.startTag;
			let a = lu(n.startTag), o = n.endTag ? lu(n.endTag) : void 0, s = { opening: a };
			o && (s.closing = o), s.properties = r, t.data = { position: s };
		}
	}
	return r;
}
function lu(e) {
	let t = uu({
		line: e.startLine,
		column: e.startCol,
		offset: e.startOffset
	}), n = uu({
		line: e.endLine,
		column: e.endCol,
		offset: e.endOffset
	});
	return t || n ? {
		start: t,
		end: n
	} : void 0;
}
function uu(e) {
	return e.line && e.column ? e : void 0;
}
//#endregion
//#region node_modules/zwitch/index.js
var du = {}.hasOwnProperty;
function fu(e, t) {
	let n = t || {};
	function r(t, ...n) {
		let i = r.invalid, a = r.handlers;
		if (t && du.call(t, e)) {
			let n = String(t[e]);
			i = du.call(a, n) ? a[n] : r.unknown;
		}
		if (i) return i.call(this, t, ...n);
	}
	return r.handlers = n.handlers || {}, r.invalid = n.invalid, r.unknown = n.unknown, r;
}
//#endregion
//#region node_modules/hast-util-to-parse5/lib/index.js
var pu = {}, mu = {}.hasOwnProperty, hu = fu("type", { handlers: {
	root: _u,
	element: Su,
	text: bu,
	comment: xu,
	doctype: yu
} });
function gu(e, t) {
	let n = (t || pu).space;
	return hu(e, n === "svg" ? zr : Rr);
}
function _u(e, t) {
	let n = {
		nodeName: "#document",
		mode: (e.data || {}).quirksMode ? "quirks" : "no-quirks",
		childNodes: []
	};
	return n.childNodes = wu(e.children, n, t), Tu(e, n), n;
}
function vu(e, t) {
	let n = {
		nodeName: "#document-fragment",
		childNodes: []
	};
	return n.childNodes = wu(e.children, n, t), Tu(e, n), n;
}
function yu(e) {
	let t = {
		nodeName: "#documentType",
		name: "html",
		publicId: "",
		systemId: "",
		parentNode: null
	};
	return Tu(e, t), t;
}
function bu(e) {
	let t = {
		nodeName: "#text",
		value: e.value,
		parentNode: null
	};
	return Tu(e, t), t;
}
function xu(e) {
	let t = {
		nodeName: "#comment",
		data: e.value,
		parentNode: null
	};
	return Tu(e, t), t;
}
function Su(e, t) {
	let n = t, r = n;
	e.type === "element" && e.tagName.toLowerCase() === "svg" && n.space === "html" && (r = zr);
	let i = [], a;
	if (e.properties) {
		for (a in e.properties) if (a !== "children" && mu.call(e.properties, a)) {
			let t = Cu(r, a, e.properties[a]);
			t && i.push(t);
		}
	}
	let o = r.space, s = {
		nodeName: e.tagName,
		tagName: e.tagName,
		attrs: i,
		namespaceURI: eu[o],
		childNodes: [],
		parentNode: null
	};
	return s.childNodes = wu(e.children, s, r), Tu(e, s), e.tagName === "template" && e.content && (s.content = vu(e.content, r)), s;
}
function Cu(e, t, n) {
	let r = Fr(e, t);
	if (n === !1 || n == null || typeof n == "number" && Number.isNaN(n) || !n && r.boolean) return;
	Array.isArray(n) && (n = r.commaSeparated ? tr(n) : Vr(n));
	let i = {
		name: r.attribute,
		value: n === !0 ? "" : String(n)
	};
	if (r.space && r.space !== "html" && r.space !== "svg") {
		let e = i.name.indexOf(":");
		e < 0 ? i.prefix = "" : (i.name = i.name.slice(e + 1), i.prefix = r.attribute.slice(0, e)), i.namespace = eu[r.space];
	}
	return i;
}
function wu(e, t, n) {
	let r = -1, i = [];
	if (e) for (; ++r < e.length;) {
		let a = hu(e[r], n);
		a.parentNode = t, i.push(a);
	}
	return i;
}
function Tu(e, t) {
	let n = e.position;
	n && n.start && n.end && (n.start.offset, n.end.offset, t.sourceCodeLocation = {
		startLine: n.start.line,
		startCol: n.start.column,
		startOffset: n.start.offset,
		endLine: n.end.line,
		endCol: n.end.column,
		endOffset: n.end.offset
	});
}
//#endregion
//#region node_modules/html-void-elements/index.js
var Eu = [
	"area",
	"base",
	"basefont",
	"bgsound",
	"br",
	"col",
	"command",
	"embed",
	"frame",
	"hr",
	"image",
	"img",
	"input",
	"keygen",
	"link",
	"meta",
	"param",
	"source",
	"track",
	"wbr"
], Du = /* @__PURE__ */ new Set([
	65534,
	65535,
	131070,
	131071,
	196606,
	196607,
	262142,
	262143,
	327678,
	327679,
	393214,
	393215,
	458750,
	458751,
	524286,
	524287,
	589822,
	589823,
	655358,
	655359,
	720894,
	720895,
	786430,
	786431,
	851966,
	851967,
	917502,
	917503,
	983038,
	983039,
	1048574,
	1048575,
	1114110,
	1114111
]), W;
(function(e) {
	e[e.EOF = -1] = "EOF", e[e.NULL = 0] = "NULL", e[e.TABULATION = 9] = "TABULATION", e[e.CARRIAGE_RETURN = 13] = "CARRIAGE_RETURN", e[e.LINE_FEED = 10] = "LINE_FEED", e[e.FORM_FEED = 12] = "FORM_FEED", e[e.SPACE = 32] = "SPACE", e[e.EXCLAMATION_MARK = 33] = "EXCLAMATION_MARK", e[e.QUOTATION_MARK = 34] = "QUOTATION_MARK", e[e.AMPERSAND = 38] = "AMPERSAND", e[e.APOSTROPHE = 39] = "APOSTROPHE", e[e.HYPHEN_MINUS = 45] = "HYPHEN_MINUS", e[e.SOLIDUS = 47] = "SOLIDUS", e[e.DIGIT_0 = 48] = "DIGIT_0", e[e.DIGIT_9 = 57] = "DIGIT_9", e[e.SEMICOLON = 59] = "SEMICOLON", e[e.LESS_THAN_SIGN = 60] = "LESS_THAN_SIGN", e[e.EQUALS_SIGN = 61] = "EQUALS_SIGN", e[e.GREATER_THAN_SIGN = 62] = "GREATER_THAN_SIGN", e[e.QUESTION_MARK = 63] = "QUESTION_MARK", e[e.LATIN_CAPITAL_A = 65] = "LATIN_CAPITAL_A", e[e.LATIN_CAPITAL_Z = 90] = "LATIN_CAPITAL_Z", e[e.RIGHT_SQUARE_BRACKET = 93] = "RIGHT_SQUARE_BRACKET", e[e.GRAVE_ACCENT = 96] = "GRAVE_ACCENT", e[e.LATIN_SMALL_A = 97] = "LATIN_SMALL_A", e[e.LATIN_SMALL_Z = 122] = "LATIN_SMALL_Z";
})(W ||= {});
var Ou = {
	DASH_DASH: "--",
	CDATA_START: "[CDATA[",
	DOCTYPE: "doctype",
	SCRIPT: "script",
	PUBLIC: "public",
	SYSTEM: "system"
};
function ku(e) {
	return e >= 55296 && e <= 57343;
}
function Au(e) {
	return e >= 56320 && e <= 57343;
}
function ju(e, t) {
	return (e - 55296) * 1024 + 9216 + t;
}
function Mu(e) {
	return e !== 32 && e !== 10 && e !== 13 && e !== 9 && e !== 12 && e >= 1 && e <= 31 || e >= 127 && e <= 159;
}
function Nu(e) {
	return e >= 64976 && e <= 65007 || Du.has(e);
}
//#endregion
//#region node_modules/parse5/dist/common/error-codes.js
var G;
(function(e) {
	e.controlCharacterInInputStream = "control-character-in-input-stream", e.noncharacterInInputStream = "noncharacter-in-input-stream", e.surrogateInInputStream = "surrogate-in-input-stream", e.nonVoidHtmlElementStartTagWithTrailingSolidus = "non-void-html-element-start-tag-with-trailing-solidus", e.endTagWithAttributes = "end-tag-with-attributes", e.endTagWithTrailingSolidus = "end-tag-with-trailing-solidus", e.unexpectedSolidusInTag = "unexpected-solidus-in-tag", e.unexpectedNullCharacter = "unexpected-null-character", e.unexpectedQuestionMarkInsteadOfTagName = "unexpected-question-mark-instead-of-tag-name", e.invalidFirstCharacterOfTagName = "invalid-first-character-of-tag-name", e.unexpectedEqualsSignBeforeAttributeName = "unexpected-equals-sign-before-attribute-name", e.missingEndTagName = "missing-end-tag-name", e.unexpectedCharacterInAttributeName = "unexpected-character-in-attribute-name", e.unknownNamedCharacterReference = "unknown-named-character-reference", e.missingSemicolonAfterCharacterReference = "missing-semicolon-after-character-reference", e.unexpectedCharacterAfterDoctypeSystemIdentifier = "unexpected-character-after-doctype-system-identifier", e.unexpectedCharacterInUnquotedAttributeValue = "unexpected-character-in-unquoted-attribute-value", e.eofBeforeTagName = "eof-before-tag-name", e.eofInTag = "eof-in-tag", e.missingAttributeValue = "missing-attribute-value", e.missingWhitespaceBetweenAttributes = "missing-whitespace-between-attributes", e.missingWhitespaceAfterDoctypePublicKeyword = "missing-whitespace-after-doctype-public-keyword", e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers = "missing-whitespace-between-doctype-public-and-system-identifiers", e.missingWhitespaceAfterDoctypeSystemKeyword = "missing-whitespace-after-doctype-system-keyword", e.missingQuoteBeforeDoctypePublicIdentifier = "missing-quote-before-doctype-public-identifier", e.missingQuoteBeforeDoctypeSystemIdentifier = "missing-quote-before-doctype-system-identifier", e.missingDoctypePublicIdentifier = "missing-doctype-public-identifier", e.missingDoctypeSystemIdentifier = "missing-doctype-system-identifier", e.abruptDoctypePublicIdentifier = "abrupt-doctype-public-identifier", e.abruptDoctypeSystemIdentifier = "abrupt-doctype-system-identifier", e.cdataInHtmlContent = "cdata-in-html-content", e.incorrectlyOpenedComment = "incorrectly-opened-comment", e.eofInScriptHtmlCommentLikeText = "eof-in-script-html-comment-like-text", e.eofInDoctype = "eof-in-doctype", e.nestedComment = "nested-comment", e.abruptClosingOfEmptyComment = "abrupt-closing-of-empty-comment", e.eofInComment = "eof-in-comment", e.incorrectlyClosedComment = "incorrectly-closed-comment", e.eofInCdata = "eof-in-cdata", e.absenceOfDigitsInNumericCharacterReference = "absence-of-digits-in-numeric-character-reference", e.nullCharacterReference = "null-character-reference", e.surrogateCharacterReference = "surrogate-character-reference", e.characterReferenceOutsideUnicodeRange = "character-reference-outside-unicode-range", e.controlCharacterReference = "control-character-reference", e.noncharacterCharacterReference = "noncharacter-character-reference", e.missingWhitespaceBeforeDoctypeName = "missing-whitespace-before-doctype-name", e.missingDoctypeName = "missing-doctype-name", e.invalidCharacterSequenceAfterDoctypeName = "invalid-character-sequence-after-doctype-name", e.duplicateAttribute = "duplicate-attribute", e.nonConformingDoctype = "non-conforming-doctype", e.missingDoctype = "missing-doctype", e.misplacedDoctype = "misplaced-doctype", e.endTagWithoutMatchingOpenElement = "end-tag-without-matching-open-element", e.closingOfElementWithOpenChildElements = "closing-of-element-with-open-child-elements", e.disallowedContentInNoscriptInHead = "disallowed-content-in-noscript-in-head", e.openElementsLeftAfterEof = "open-elements-left-after-eof", e.abandonedHeadElementChild = "abandoned-head-element-child", e.misplacedStartTagForHeadElement = "misplaced-start-tag-for-head-element", e.nestedNoscriptInHead = "nested-noscript-in-head", e.eofInElementThatCanContainOnlyText = "eof-in-element-that-can-contain-only-text";
})(G ||= {});
//#endregion
//#region node_modules/parse5/dist/tokenizer/preprocessor.js
var Pu = 65536, Fu = class {
	constructor(e) {
		this.handler = e, this.html = "", this.pos = -1, this.lastGapPos = -2, this.gapStack = [], this.skipNextNewLine = !1, this.lastChunkWritten = !1, this.endOfChunkHit = !1, this.bufferWaterline = Pu, this.isEol = !1, this.lineStartPos = 0, this.droppedBufferSize = 0, this.line = 1, this.lastErrOffset = -1;
	}
	get col() {
		return this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos);
	}
	get offset() {
		return this.droppedBufferSize + this.pos;
	}
	getError(e, t) {
		let { line: n, col: r, offset: i } = this, a = r + t, o = i + t;
		return {
			code: e,
			startLine: n,
			endLine: n,
			startCol: a,
			endCol: a,
			startOffset: o,
			endOffset: o
		};
	}
	_err(e) {
		this.handler.onParseError && this.lastErrOffset !== this.offset && (this.lastErrOffset = this.offset, this.handler.onParseError(this.getError(e, 0)));
	}
	_addGap() {
		this.gapStack.push(this.lastGapPos), this.lastGapPos = this.pos;
	}
	_processSurrogate(e) {
		if (this.pos !== this.html.length - 1) {
			let t = this.html.charCodeAt(this.pos + 1);
			if (Au(t)) return this.pos++, this._addGap(), ju(e, t);
		} else if (!this.lastChunkWritten) return this.endOfChunkHit = !0, W.EOF;
		return this._err(G.surrogateInInputStream), e;
	}
	willDropParsedChunk() {
		return this.pos > this.bufferWaterline;
	}
	dropParsedChunk() {
		this.willDropParsedChunk() && (this.html = this.html.substring(this.pos), this.lineStartPos -= this.pos, this.droppedBufferSize += this.pos, this.pos = 0, this.lastGapPos = -2, this.gapStack.length = 0);
	}
	write(e, t) {
		this.html.length > 0 ? this.html += e : this.html = e, this.endOfChunkHit = !1, this.lastChunkWritten = t;
	}
	insertHtmlAtCurrentPos(e) {
		this.html = this.html.substring(0, this.pos + 1) + e + this.html.substring(this.pos + 1), this.endOfChunkHit = !1;
	}
	startsWith(e, t) {
		if (this.pos + e.length > this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, !1;
		if (t) return this.html.startsWith(e, this.pos);
		for (let t = 0; t < e.length; t++) if ((this.html.charCodeAt(this.pos + t) | 32) !== e.charCodeAt(t)) return !1;
		return !0;
	}
	peek(e) {
		let t = this.pos + e;
		if (t >= this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, W.EOF;
		let n = this.html.charCodeAt(t);
		return n === W.CARRIAGE_RETURN ? W.LINE_FEED : n;
	}
	advance() {
		if (this.pos++, this.isEol && (this.isEol = !1, this.line++, this.lineStartPos = this.pos), this.pos >= this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, W.EOF;
		let e = this.html.charCodeAt(this.pos);
		return e === W.CARRIAGE_RETURN ? (this.isEol = !0, this.skipNextNewLine = !0, W.LINE_FEED) : e === W.LINE_FEED && (this.isEol = !0, this.skipNextNewLine) ? (this.line--, this.skipNextNewLine = !1, this._addGap(), this.advance()) : (this.skipNextNewLine = !1, ku(e) && (e = this._processSurrogate(e)), this.handler.onParseError === null || e > 31 && e < 127 || e === W.LINE_FEED || e === W.CARRIAGE_RETURN || e > 159 && e < 64976 || this._checkForProblematicCharacters(e), e);
	}
	_checkForProblematicCharacters(e) {
		Mu(e) ? this._err(G.controlCharacterInInputStream) : Nu(e) && this._err(G.noncharacterInInputStream);
	}
	retreat(e) {
		for (this.pos -= e; this.pos < this.lastGapPos;) this.lastGapPos = this.gapStack.pop(), this.pos--;
		this.isEol = !1;
	}
}, K;
(function(e) {
	e[e.CHARACTER = 0] = "CHARACTER", e[e.NULL_CHARACTER = 1] = "NULL_CHARACTER", e[e.WHITESPACE_CHARACTER = 2] = "WHITESPACE_CHARACTER", e[e.START_TAG = 3] = "START_TAG", e[e.END_TAG = 4] = "END_TAG", e[e.COMMENT = 5] = "COMMENT", e[e.DOCTYPE = 6] = "DOCTYPE", e[e.EOF = 7] = "EOF", e[e.HIBERNATION = 8] = "HIBERNATION";
})(K ||= {});
function Iu(e, t) {
	for (let n = e.attrs.length - 1; n >= 0; n--) if (e.attrs[n].name === t) return e.attrs[n].value;
	return null;
}
//#endregion
//#region node_modules/entities/dist/esm/generated/decode-data-html.js
var Lu = /* #__PURE__ */ new Uint16Array(/* #__PURE__ */ "ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻\"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻\xA0ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌".split("").map((e) => e.charCodeAt(0))), Ru = /* @__PURE__ */ new Map([
	[0, 65533],
	[128, 8364],
	[130, 8218],
	[131, 402],
	[132, 8222],
	[133, 8230],
	[134, 8224],
	[135, 8225],
	[136, 710],
	[137, 8240],
	[138, 352],
	[139, 8249],
	[140, 338],
	[142, 381],
	[145, 8216],
	[146, 8217],
	[147, 8220],
	[148, 8221],
	[149, 8226],
	[150, 8211],
	[151, 8212],
	[152, 732],
	[153, 8482],
	[154, 353],
	[155, 8250],
	[156, 339],
	[158, 382],
	[159, 376]
]);
String.fromCodePoint;
function zu(e) {
	return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : Ru.get(e) ?? e;
}
//#endregion
//#region node_modules/entities/dist/esm/decode.js
var Bu;
(function(e) {
	e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(Bu ||= {});
var Vu = 32, Hu;
(function(e) {
	e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
})(Hu ||= {});
function Uu(e) {
	return e >= Bu.ZERO && e <= Bu.NINE;
}
function Wu(e) {
	return e >= Bu.UPPER_A && e <= Bu.UPPER_F || e >= Bu.LOWER_A && e <= Bu.LOWER_F;
}
function Gu(e) {
	return e >= Bu.UPPER_A && e <= Bu.UPPER_Z || e >= Bu.LOWER_A && e <= Bu.LOWER_Z || Uu(e);
}
function Ku(e) {
	return e === Bu.EQUALS || Gu(e);
}
var qu;
(function(e) {
	e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(qu ||= {});
var Ju;
(function(e) {
	e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(Ju ||= {});
var Yu = class {
	constructor(e, t, n) {
		this.decodeTree = e, this.emitCodePoint = t, this.errors = n, this.state = qu.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = Ju.Strict;
	}
	startEntity(e) {
		this.decodeMode = e, this.state = qu.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
	}
	write(e, t) {
		switch (this.state) {
			case qu.EntityStart: return e.charCodeAt(t) === Bu.NUM ? (this.state = qu.NumericStart, this.consumed += 1, this.stateNumericStart(e, t + 1)) : (this.state = qu.NamedEntity, this.stateNamedEntity(e, t));
			case qu.NumericStart: return this.stateNumericStart(e, t);
			case qu.NumericDecimal: return this.stateNumericDecimal(e, t);
			case qu.NumericHex: return this.stateNumericHex(e, t);
			case qu.NamedEntity: return this.stateNamedEntity(e, t);
		}
	}
	stateNumericStart(e, t) {
		return t >= e.length ? -1 : (e.charCodeAt(t) | Vu) === Bu.LOWER_X ? (this.state = qu.NumericHex, this.consumed += 1, this.stateNumericHex(e, t + 1)) : (this.state = qu.NumericDecimal, this.stateNumericDecimal(e, t));
	}
	addToNumericResult(e, t, n, r) {
		if (t !== n) {
			let i = n - t;
			this.result = this.result * r ** +i + Number.parseInt(e.substr(t, i), r), this.consumed += i;
		}
	}
	stateNumericHex(e, t) {
		let n = t;
		for (; t < e.length;) {
			let r = e.charCodeAt(t);
			if (Uu(r) || Wu(r)) t += 1;
			else return this.addToNumericResult(e, n, t, 16), this.emitNumericEntity(r, 3);
		}
		return this.addToNumericResult(e, n, t, 16), -1;
	}
	stateNumericDecimal(e, t) {
		let n = t;
		for (; t < e.length;) {
			let r = e.charCodeAt(t);
			if (Uu(r)) t += 1;
			else return this.addToNumericResult(e, n, t, 10), this.emitNumericEntity(r, 2);
		}
		return this.addToNumericResult(e, n, t, 10), -1;
	}
	emitNumericEntity(e, t) {
		var n;
		if (this.consumed <= t) return (n = this.errors) == null || n.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
		if (e === Bu.SEMI) this.consumed += 1;
		else if (this.decodeMode === Ju.Strict) return 0;
		return this.emitCodePoint(zu(this.result), this.consumed), this.errors && (e !== Bu.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
	}
	stateNamedEntity(e, t) {
		let { decodeTree: n } = this, r = n[this.treeIndex], i = (r & Hu.VALUE_LENGTH) >> 14;
		for (; t < e.length; t++, this.excess++) {
			let a = e.charCodeAt(t);
			if (this.treeIndex = Xu(n, r, this.treeIndex + Math.max(1, i), a), this.treeIndex < 0) return this.result === 0 || this.decodeMode === Ju.Attribute && (i === 0 || Ku(a)) ? 0 : this.emitNotTerminatedNamedEntity();
			if (r = n[this.treeIndex], i = (r & Hu.VALUE_LENGTH) >> 14, i !== 0) {
				if (a === Bu.SEMI) return this.emitNamedEntityData(this.treeIndex, i, this.consumed + this.excess);
				this.decodeMode !== Ju.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
			}
		}
		return -1;
	}
	emitNotTerminatedNamedEntity() {
		var e;
		let { result: t, decodeTree: n } = this, r = (n[t] & Hu.VALUE_LENGTH) >> 14;
		return this.emitNamedEntityData(t, r, this.consumed), (e = this.errors) == null || e.missingSemicolonAfterCharacterReference(), this.consumed;
	}
	emitNamedEntityData(e, t, n) {
		let { decodeTree: r } = this;
		return this.emitCodePoint(t === 1 ? r[e] & ~Hu.VALUE_LENGTH : r[e + 1], n), t === 3 && this.emitCodePoint(r[e + 2], n), n;
	}
	end() {
		var e;
		switch (this.state) {
			case qu.NamedEntity: return this.result !== 0 && (this.decodeMode !== Ju.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
			case qu.NumericDecimal: return this.emitNumericEntity(0, 2);
			case qu.NumericHex: return this.emitNumericEntity(0, 3);
			case qu.NumericStart: return (e = this.errors) == null || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
			case qu.EntityStart: return 0;
		}
	}
};
function Xu(e, t, n, r) {
	let i = (t & Hu.BRANCH_LENGTH) >> 7, a = t & Hu.JUMP_TABLE;
	if (i === 0) return a !== 0 && r === a ? n : -1;
	if (a) {
		let t = r - a;
		return t < 0 || t >= i ? -1 : e[n + t] - 1;
	}
	let o = n, s = o + i - 1;
	for (; o <= s;) {
		let t = o + s >>> 1, n = e[t];
		if (n < r) o = t + 1;
		else if (n > r) s = t - 1;
		else return e[t + i];
	}
	return -1;
}
//#endregion
//#region node_modules/parse5/dist/common/html.js
var q;
(function(e) {
	e.HTML = "http://www.w3.org/1999/xhtml", e.MATHML = "http://www.w3.org/1998/Math/MathML", e.SVG = "http://www.w3.org/2000/svg", e.XLINK = "http://www.w3.org/1999/xlink", e.XML = "http://www.w3.org/XML/1998/namespace", e.XMLNS = "http://www.w3.org/2000/xmlns/";
})(q ||= {});
var Zu;
(function(e) {
	e.TYPE = "type", e.ACTION = "action", e.ENCODING = "encoding", e.PROMPT = "prompt", e.NAME = "name", e.COLOR = "color", e.FACE = "face", e.SIZE = "size";
})(Zu ||= {});
var Qu;
(function(e) {
	e.NO_QUIRKS = "no-quirks", e.QUIRKS = "quirks", e.LIMITED_QUIRKS = "limited-quirks";
})(Qu ||= {});
var J;
(function(e) {
	e.A = "a", e.ADDRESS = "address", e.ANNOTATION_XML = "annotation-xml", e.APPLET = "applet", e.AREA = "area", e.ARTICLE = "article", e.ASIDE = "aside", e.B = "b", e.BASE = "base", e.BASEFONT = "basefont", e.BGSOUND = "bgsound", e.BIG = "big", e.BLOCKQUOTE = "blockquote", e.BODY = "body", e.BR = "br", e.BUTTON = "button", e.CAPTION = "caption", e.CENTER = "center", e.CODE = "code", e.COL = "col", e.COLGROUP = "colgroup", e.DD = "dd", e.DESC = "desc", e.DETAILS = "details", e.DIALOG = "dialog", e.DIR = "dir", e.DIV = "div", e.DL = "dl", e.DT = "dt", e.EM = "em", e.EMBED = "embed", e.FIELDSET = "fieldset", e.FIGCAPTION = "figcaption", e.FIGURE = "figure", e.FONT = "font", e.FOOTER = "footer", e.FOREIGN_OBJECT = "foreignObject", e.FORM = "form", e.FRAME = "frame", e.FRAMESET = "frameset", e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e.HEAD = "head", e.HEADER = "header", e.HGROUP = "hgroup", e.HR = "hr", e.HTML = "html", e.I = "i", e.IMG = "img", e.IMAGE = "image", e.INPUT = "input", e.IFRAME = "iframe", e.KEYGEN = "keygen", e.LABEL = "label", e.LI = "li", e.LINK = "link", e.LISTING = "listing", e.MAIN = "main", e.MALIGNMARK = "malignmark", e.MARQUEE = "marquee", e.MATH = "math", e.MENU = "menu", e.META = "meta", e.MGLYPH = "mglyph", e.MI = "mi", e.MO = "mo", e.MN = "mn", e.MS = "ms", e.MTEXT = "mtext", e.NAV = "nav", e.NOBR = "nobr", e.NOFRAMES = "noframes", e.NOEMBED = "noembed", e.NOSCRIPT = "noscript", e.OBJECT = "object", e.OL = "ol", e.OPTGROUP = "optgroup", e.OPTION = "option", e.P = "p", e.PARAM = "param", e.PLAINTEXT = "plaintext", e.PRE = "pre", e.RB = "rb", e.RP = "rp", e.RT = "rt", e.RTC = "rtc", e.RUBY = "ruby", e.S = "s", e.SCRIPT = "script", e.SEARCH = "search", e.SECTION = "section", e.SELECT = "select", e.SOURCE = "source", e.SMALL = "small", e.SPAN = "span", e.STRIKE = "strike", e.STRONG = "strong", e.STYLE = "style", e.SUB = "sub", e.SUMMARY = "summary", e.SUP = "sup", e.TABLE = "table", e.TBODY = "tbody", e.TEMPLATE = "template", e.TEXTAREA = "textarea", e.TFOOT = "tfoot", e.TD = "td", e.TH = "th", e.THEAD = "thead", e.TITLE = "title", e.TR = "tr", e.TRACK = "track", e.TT = "tt", e.U = "u", e.UL = "ul", e.SVG = "svg", e.VAR = "var", e.WBR = "wbr", e.XMP = "xmp";
})(J ||= {});
var Y;
(function(e) {
	e[e.UNKNOWN = 0] = "UNKNOWN", e[e.A = 1] = "A", e[e.ADDRESS = 2] = "ADDRESS", e[e.ANNOTATION_XML = 3] = "ANNOTATION_XML", e[e.APPLET = 4] = "APPLET", e[e.AREA = 5] = "AREA", e[e.ARTICLE = 6] = "ARTICLE", e[e.ASIDE = 7] = "ASIDE", e[e.B = 8] = "B", e[e.BASE = 9] = "BASE", e[e.BASEFONT = 10] = "BASEFONT", e[e.BGSOUND = 11] = "BGSOUND", e[e.BIG = 12] = "BIG", e[e.BLOCKQUOTE = 13] = "BLOCKQUOTE", e[e.BODY = 14] = "BODY", e[e.BR = 15] = "BR", e[e.BUTTON = 16] = "BUTTON", e[e.CAPTION = 17] = "CAPTION", e[e.CENTER = 18] = "CENTER", e[e.CODE = 19] = "CODE", e[e.COL = 20] = "COL", e[e.COLGROUP = 21] = "COLGROUP", e[e.DD = 22] = "DD", e[e.DESC = 23] = "DESC", e[e.DETAILS = 24] = "DETAILS", e[e.DIALOG = 25] = "DIALOG", e[e.DIR = 26] = "DIR", e[e.DIV = 27] = "DIV", e[e.DL = 28] = "DL", e[e.DT = 29] = "DT", e[e.EM = 30] = "EM", e[e.EMBED = 31] = "EMBED", e[e.FIELDSET = 32] = "FIELDSET", e[e.FIGCAPTION = 33] = "FIGCAPTION", e[e.FIGURE = 34] = "FIGURE", e[e.FONT = 35] = "FONT", e[e.FOOTER = 36] = "FOOTER", e[e.FOREIGN_OBJECT = 37] = "FOREIGN_OBJECT", e[e.FORM = 38] = "FORM", e[e.FRAME = 39] = "FRAME", e[e.FRAMESET = 40] = "FRAMESET", e[e.H1 = 41] = "H1", e[e.H2 = 42] = "H2", e[e.H3 = 43] = "H3", e[e.H4 = 44] = "H4", e[e.H5 = 45] = "H5", e[e.H6 = 46] = "H6", e[e.HEAD = 47] = "HEAD", e[e.HEADER = 48] = "HEADER", e[e.HGROUP = 49] = "HGROUP", e[e.HR = 50] = "HR", e[e.HTML = 51] = "HTML", e[e.I = 52] = "I", e[e.IMG = 53] = "IMG", e[e.IMAGE = 54] = "IMAGE", e[e.INPUT = 55] = "INPUT", e[e.IFRAME = 56] = "IFRAME", e[e.KEYGEN = 57] = "KEYGEN", e[e.LABEL = 58] = "LABEL", e[e.LI = 59] = "LI", e[e.LINK = 60] = "LINK", e[e.LISTING = 61] = "LISTING", e[e.MAIN = 62] = "MAIN", e[e.MALIGNMARK = 63] = "MALIGNMARK", e[e.MARQUEE = 64] = "MARQUEE", e[e.MATH = 65] = "MATH", e[e.MENU = 66] = "MENU", e[e.META = 67] = "META", e[e.MGLYPH = 68] = "MGLYPH", e[e.MI = 69] = "MI", e[e.MO = 70] = "MO", e[e.MN = 71] = "MN", e[e.MS = 72] = "MS", e[e.MTEXT = 73] = "MTEXT", e[e.NAV = 74] = "NAV", e[e.NOBR = 75] = "NOBR", e[e.NOFRAMES = 76] = "NOFRAMES", e[e.NOEMBED = 77] = "NOEMBED", e[e.NOSCRIPT = 78] = "NOSCRIPT", e[e.OBJECT = 79] = "OBJECT", e[e.OL = 80] = "OL", e[e.OPTGROUP = 81] = "OPTGROUP", e[e.OPTION = 82] = "OPTION", e[e.P = 83] = "P", e[e.PARAM = 84] = "PARAM", e[e.PLAINTEXT = 85] = "PLAINTEXT", e[e.PRE = 86] = "PRE", e[e.RB = 87] = "RB", e[e.RP = 88] = "RP", e[e.RT = 89] = "RT", e[e.RTC = 90] = "RTC", e[e.RUBY = 91] = "RUBY", e[e.S = 92] = "S", e[e.SCRIPT = 93] = "SCRIPT", e[e.SEARCH = 94] = "SEARCH", e[e.SECTION = 95] = "SECTION", e[e.SELECT = 96] = "SELECT", e[e.SOURCE = 97] = "SOURCE", e[e.SMALL = 98] = "SMALL", e[e.SPAN = 99] = "SPAN", e[e.STRIKE = 100] = "STRIKE", e[e.STRONG = 101] = "STRONG", e[e.STYLE = 102] = "STYLE", e[e.SUB = 103] = "SUB", e[e.SUMMARY = 104] = "SUMMARY", e[e.SUP = 105] = "SUP", e[e.TABLE = 106] = "TABLE", e[e.TBODY = 107] = "TBODY", e[e.TEMPLATE = 108] = "TEMPLATE", e[e.TEXTAREA = 109] = "TEXTAREA", e[e.TFOOT = 110] = "TFOOT", e[e.TD = 111] = "TD", e[e.TH = 112] = "TH", e[e.THEAD = 113] = "THEAD", e[e.TITLE = 114] = "TITLE", e[e.TR = 115] = "TR", e[e.TRACK = 116] = "TRACK", e[e.TT = 117] = "TT", e[e.U = 118] = "U", e[e.UL = 119] = "UL", e[e.SVG = 120] = "SVG", e[e.VAR = 121] = "VAR", e[e.WBR = 122] = "WBR", e[e.XMP = 123] = "XMP";
})(Y ||= {});
var $u = /* @__PURE__ */ new Map([
	[J.A, Y.A],
	[J.ADDRESS, Y.ADDRESS],
	[J.ANNOTATION_XML, Y.ANNOTATION_XML],
	[J.APPLET, Y.APPLET],
	[J.AREA, Y.AREA],
	[J.ARTICLE, Y.ARTICLE],
	[J.ASIDE, Y.ASIDE],
	[J.B, Y.B],
	[J.BASE, Y.BASE],
	[J.BASEFONT, Y.BASEFONT],
	[J.BGSOUND, Y.BGSOUND],
	[J.BIG, Y.BIG],
	[J.BLOCKQUOTE, Y.BLOCKQUOTE],
	[J.BODY, Y.BODY],
	[J.BR, Y.BR],
	[J.BUTTON, Y.BUTTON],
	[J.CAPTION, Y.CAPTION],
	[J.CENTER, Y.CENTER],
	[J.CODE, Y.CODE],
	[J.COL, Y.COL],
	[J.COLGROUP, Y.COLGROUP],
	[J.DD, Y.DD],
	[J.DESC, Y.DESC],
	[J.DETAILS, Y.DETAILS],
	[J.DIALOG, Y.DIALOG],
	[J.DIR, Y.DIR],
	[J.DIV, Y.DIV],
	[J.DL, Y.DL],
	[J.DT, Y.DT],
	[J.EM, Y.EM],
	[J.EMBED, Y.EMBED],
	[J.FIELDSET, Y.FIELDSET],
	[J.FIGCAPTION, Y.FIGCAPTION],
	[J.FIGURE, Y.FIGURE],
	[J.FONT, Y.FONT],
	[J.FOOTER, Y.FOOTER],
	[J.FOREIGN_OBJECT, Y.FOREIGN_OBJECT],
	[J.FORM, Y.FORM],
	[J.FRAME, Y.FRAME],
	[J.FRAMESET, Y.FRAMESET],
	[J.H1, Y.H1],
	[J.H2, Y.H2],
	[J.H3, Y.H3],
	[J.H4, Y.H4],
	[J.H5, Y.H5],
	[J.H6, Y.H6],
	[J.HEAD, Y.HEAD],
	[J.HEADER, Y.HEADER],
	[J.HGROUP, Y.HGROUP],
	[J.HR, Y.HR],
	[J.HTML, Y.HTML],
	[J.I, Y.I],
	[J.IMG, Y.IMG],
	[J.IMAGE, Y.IMAGE],
	[J.INPUT, Y.INPUT],
	[J.IFRAME, Y.IFRAME],
	[J.KEYGEN, Y.KEYGEN],
	[J.LABEL, Y.LABEL],
	[J.LI, Y.LI],
	[J.LINK, Y.LINK],
	[J.LISTING, Y.LISTING],
	[J.MAIN, Y.MAIN],
	[J.MALIGNMARK, Y.MALIGNMARK],
	[J.MARQUEE, Y.MARQUEE],
	[J.MATH, Y.MATH],
	[J.MENU, Y.MENU],
	[J.META, Y.META],
	[J.MGLYPH, Y.MGLYPH],
	[J.MI, Y.MI],
	[J.MO, Y.MO],
	[J.MN, Y.MN],
	[J.MS, Y.MS],
	[J.MTEXT, Y.MTEXT],
	[J.NAV, Y.NAV],
	[J.NOBR, Y.NOBR],
	[J.NOFRAMES, Y.NOFRAMES],
	[J.NOEMBED, Y.NOEMBED],
	[J.NOSCRIPT, Y.NOSCRIPT],
	[J.OBJECT, Y.OBJECT],
	[J.OL, Y.OL],
	[J.OPTGROUP, Y.OPTGROUP],
	[J.OPTION, Y.OPTION],
	[J.P, Y.P],
	[J.PARAM, Y.PARAM],
	[J.PLAINTEXT, Y.PLAINTEXT],
	[J.PRE, Y.PRE],
	[J.RB, Y.RB],
	[J.RP, Y.RP],
	[J.RT, Y.RT],
	[J.RTC, Y.RTC],
	[J.RUBY, Y.RUBY],
	[J.S, Y.S],
	[J.SCRIPT, Y.SCRIPT],
	[J.SEARCH, Y.SEARCH],
	[J.SECTION, Y.SECTION],
	[J.SELECT, Y.SELECT],
	[J.SOURCE, Y.SOURCE],
	[J.SMALL, Y.SMALL],
	[J.SPAN, Y.SPAN],
	[J.STRIKE, Y.STRIKE],
	[J.STRONG, Y.STRONG],
	[J.STYLE, Y.STYLE],
	[J.SUB, Y.SUB],
	[J.SUMMARY, Y.SUMMARY],
	[J.SUP, Y.SUP],
	[J.TABLE, Y.TABLE],
	[J.TBODY, Y.TBODY],
	[J.TEMPLATE, Y.TEMPLATE],
	[J.TEXTAREA, Y.TEXTAREA],
	[J.TFOOT, Y.TFOOT],
	[J.TD, Y.TD],
	[J.TH, Y.TH],
	[J.THEAD, Y.THEAD],
	[J.TITLE, Y.TITLE],
	[J.TR, Y.TR],
	[J.TRACK, Y.TRACK],
	[J.TT, Y.TT],
	[J.U, Y.U],
	[J.UL, Y.UL],
	[J.SVG, Y.SVG],
	[J.VAR, Y.VAR],
	[J.WBR, Y.WBR],
	[J.XMP, Y.XMP]
]);
function ed(e) {
	return $u.get(e) ?? Y.UNKNOWN;
}
var X = Y, td = {
	[q.HTML]: /* @__PURE__ */ new Set([
		X.ADDRESS,
		X.APPLET,
		X.AREA,
		X.ARTICLE,
		X.ASIDE,
		X.BASE,
		X.BASEFONT,
		X.BGSOUND,
		X.BLOCKQUOTE,
		X.BODY,
		X.BR,
		X.BUTTON,
		X.CAPTION,
		X.CENTER,
		X.COL,
		X.COLGROUP,
		X.DD,
		X.DETAILS,
		X.DIR,
		X.DIV,
		X.DL,
		X.DT,
		X.EMBED,
		X.FIELDSET,
		X.FIGCAPTION,
		X.FIGURE,
		X.FOOTER,
		X.FORM,
		X.FRAME,
		X.FRAMESET,
		X.H1,
		X.H2,
		X.H3,
		X.H4,
		X.H5,
		X.H6,
		X.HEAD,
		X.HEADER,
		X.HGROUP,
		X.HR,
		X.HTML,
		X.IFRAME,
		X.IMG,
		X.INPUT,
		X.LI,
		X.LINK,
		X.LISTING,
		X.MAIN,
		X.MARQUEE,
		X.MENU,
		X.META,
		X.NAV,
		X.NOEMBED,
		X.NOFRAMES,
		X.NOSCRIPT,
		X.OBJECT,
		X.OL,
		X.P,
		X.PARAM,
		X.PLAINTEXT,
		X.PRE,
		X.SCRIPT,
		X.SECTION,
		X.SELECT,
		X.SOURCE,
		X.STYLE,
		X.SUMMARY,
		X.TABLE,
		X.TBODY,
		X.TD,
		X.TEMPLATE,
		X.TEXTAREA,
		X.TFOOT,
		X.TH,
		X.THEAD,
		X.TITLE,
		X.TR,
		X.TRACK,
		X.UL,
		X.WBR,
		X.XMP
	]),
	[q.MATHML]: /* @__PURE__ */ new Set([
		X.MI,
		X.MO,
		X.MN,
		X.MS,
		X.MTEXT,
		X.ANNOTATION_XML
	]),
	[q.SVG]: /* @__PURE__ */ new Set([
		X.TITLE,
		X.FOREIGN_OBJECT,
		X.DESC
	]),
	[q.XLINK]: /* @__PURE__ */ new Set(),
	[q.XML]: /* @__PURE__ */ new Set(),
	[q.XMLNS]: /* @__PURE__ */ new Set()
}, nd = /* @__PURE__ */ new Set([
	X.H1,
	X.H2,
	X.H3,
	X.H4,
	X.H5,
	X.H6
]);
J.STYLE, J.SCRIPT, J.XMP, J.IFRAME, J.NOEMBED, J.NOFRAMES, J.PLAINTEXT;
//#endregion
//#region node_modules/parse5/dist/tokenizer/index.js
var Z;
(function(e) {
	e[e.DATA = 0] = "DATA", e[e.RCDATA = 1] = "RCDATA", e[e.RAWTEXT = 2] = "RAWTEXT", e[e.SCRIPT_DATA = 3] = "SCRIPT_DATA", e[e.PLAINTEXT = 4] = "PLAINTEXT", e[e.TAG_OPEN = 5] = "TAG_OPEN", e[e.END_TAG_OPEN = 6] = "END_TAG_OPEN", e[e.TAG_NAME = 7] = "TAG_NAME", e[e.RCDATA_LESS_THAN_SIGN = 8] = "RCDATA_LESS_THAN_SIGN", e[e.RCDATA_END_TAG_OPEN = 9] = "RCDATA_END_TAG_OPEN", e[e.RCDATA_END_TAG_NAME = 10] = "RCDATA_END_TAG_NAME", e[e.RAWTEXT_LESS_THAN_SIGN = 11] = "RAWTEXT_LESS_THAN_SIGN", e[e.RAWTEXT_END_TAG_OPEN = 12] = "RAWTEXT_END_TAG_OPEN", e[e.RAWTEXT_END_TAG_NAME = 13] = "RAWTEXT_END_TAG_NAME", e[e.SCRIPT_DATA_LESS_THAN_SIGN = 14] = "SCRIPT_DATA_LESS_THAN_SIGN", e[e.SCRIPT_DATA_END_TAG_OPEN = 15] = "SCRIPT_DATA_END_TAG_OPEN", e[e.SCRIPT_DATA_END_TAG_NAME = 16] = "SCRIPT_DATA_END_TAG_NAME", e[e.SCRIPT_DATA_ESCAPE_START = 17] = "SCRIPT_DATA_ESCAPE_START", e[e.SCRIPT_DATA_ESCAPE_START_DASH = 18] = "SCRIPT_DATA_ESCAPE_START_DASH", e[e.SCRIPT_DATA_ESCAPED = 19] = "SCRIPT_DATA_ESCAPED", e[e.SCRIPT_DATA_ESCAPED_DASH = 20] = "SCRIPT_DATA_ESCAPED_DASH", e[e.SCRIPT_DATA_ESCAPED_DASH_DASH = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START", e[e.SCRIPT_DATA_DOUBLE_ESCAPED = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END", e[e.BEFORE_ATTRIBUTE_NAME = 31] = "BEFORE_ATTRIBUTE_NAME", e[e.ATTRIBUTE_NAME = 32] = "ATTRIBUTE_NAME", e[e.AFTER_ATTRIBUTE_NAME = 33] = "AFTER_ATTRIBUTE_NAME", e[e.BEFORE_ATTRIBUTE_VALUE = 34] = "BEFORE_ATTRIBUTE_VALUE", e[e.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED", e[e.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED", e[e.ATTRIBUTE_VALUE_UNQUOTED = 37] = "ATTRIBUTE_VALUE_UNQUOTED", e[e.AFTER_ATTRIBUTE_VALUE_QUOTED = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED", e[e.SELF_CLOSING_START_TAG = 39] = "SELF_CLOSING_START_TAG", e[e.BOGUS_COMMENT = 40] = "BOGUS_COMMENT", e[e.MARKUP_DECLARATION_OPEN = 41] = "MARKUP_DECLARATION_OPEN", e[e.COMMENT_START = 42] = "COMMENT_START", e[e.COMMENT_START_DASH = 43] = "COMMENT_START_DASH", e[e.COMMENT = 44] = "COMMENT", e[e.COMMENT_LESS_THAN_SIGN = 45] = "COMMENT_LESS_THAN_SIGN", e[e.COMMENT_LESS_THAN_SIGN_BANG = 46] = "COMMENT_LESS_THAN_SIGN_BANG", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH", e[e.COMMENT_END_DASH = 49] = "COMMENT_END_DASH", e[e.COMMENT_END = 50] = "COMMENT_END", e[e.COMMENT_END_BANG = 51] = "COMMENT_END_BANG", e[e.DOCTYPE = 52] = "DOCTYPE", e[e.BEFORE_DOCTYPE_NAME = 53] = "BEFORE_DOCTYPE_NAME", e[e.DOCTYPE_NAME = 54] = "DOCTYPE_NAME", e[e.AFTER_DOCTYPE_NAME = 55] = "AFTER_DOCTYPE_NAME", e[e.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD", e[e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER", e[e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER", e[e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS", e[e.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD", e[e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER", e[e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER", e[e.BOGUS_DOCTYPE = 67] = "BOGUS_DOCTYPE", e[e.CDATA_SECTION = 68] = "CDATA_SECTION", e[e.CDATA_SECTION_BRACKET = 69] = "CDATA_SECTION_BRACKET", e[e.CDATA_SECTION_END = 70] = "CDATA_SECTION_END", e[e.CHARACTER_REFERENCE = 71] = "CHARACTER_REFERENCE", e[e.AMBIGUOUS_AMPERSAND = 72] = "AMBIGUOUS_AMPERSAND";
})(Z ||= {});
var Q = {
	DATA: Z.DATA,
	RCDATA: Z.RCDATA,
	RAWTEXT: Z.RAWTEXT,
	SCRIPT_DATA: Z.SCRIPT_DATA,
	PLAINTEXT: Z.PLAINTEXT,
	CDATA_SECTION: Z.CDATA_SECTION
};
function rd(e) {
	return e >= W.DIGIT_0 && e <= W.DIGIT_9;
}
function id(e) {
	return e >= W.LATIN_CAPITAL_A && e <= W.LATIN_CAPITAL_Z;
}
function ad(e) {
	return e >= W.LATIN_SMALL_A && e <= W.LATIN_SMALL_Z;
}
function od(e) {
	return ad(e) || id(e);
}
function sd(e) {
	return od(e) || rd(e);
}
function cd(e) {
	return e + 32;
}
function ld(e) {
	return e === W.SPACE || e === W.LINE_FEED || e === W.TABULATION || e === W.FORM_FEED;
}
function ud(e) {
	return ld(e) || e === W.SOLIDUS || e === W.GREATER_THAN_SIGN;
}
function dd(e) {
	return e === W.NULL ? G.nullCharacterReference : e > 1114111 ? G.characterReferenceOutsideUnicodeRange : ku(e) ? G.surrogateCharacterReference : Nu(e) ? G.noncharacterCharacterReference : Mu(e) || e === W.CARRIAGE_RETURN ? G.controlCharacterReference : null;
}
var fd = class {
	constructor(e, t) {
		this.options = e, this.handler = t, this.paused = !1, this.inLoop = !1, this.inForeignNode = !1, this.lastStartTagName = "", this.active = !1, this.state = Z.DATA, this.returnState = Z.DATA, this.entityStartPos = 0, this.consumedAfterSnapshot = -1, this.currentCharacterToken = null, this.currentToken = null, this.currentAttr = {
			name: "",
			value: ""
		}, this.preprocessor = new Fu(t), this.currentLocation = this.getCurrentLocation(-1), this.entityDecoder = new Yu(Lu, (e, t) => {
			this.preprocessor.pos = this.entityStartPos + t - 1, this._flushCodePointConsumedAsCharacterReference(e);
		}, t.onParseError ? {
			missingSemicolonAfterCharacterReference: () => {
				this._err(G.missingSemicolonAfterCharacterReference, 1);
			},
			absenceOfDigitsInNumericCharacterReference: (e) => {
				this._err(G.absenceOfDigitsInNumericCharacterReference, this.entityStartPos - this.preprocessor.pos + e);
			},
			validateNumericCharacterReference: (e) => {
				let t = dd(e);
				t && this._err(t, 1);
			}
		} : void 0);
	}
	_err(e, t = 0) {
		var n, r;
		(r = (n = this.handler).onParseError) == null || r.call(n, this.preprocessor.getError(e, t));
	}
	getCurrentLocation(e) {
		return this.options.sourceCodeLocationInfo ? {
			startLine: this.preprocessor.line,
			startCol: this.preprocessor.col - e,
			startOffset: this.preprocessor.offset - e,
			endLine: -1,
			endCol: -1,
			endOffset: -1
		} : null;
	}
	_runParsingLoop() {
		if (!this.inLoop) {
			for (this.inLoop = !0; this.active && !this.paused;) {
				this.consumedAfterSnapshot = 0;
				let e = this._consume();
				this._ensureHibernation() || this._callState(e);
			}
			this.inLoop = !1;
		}
	}
	pause() {
		this.paused = !0;
	}
	resume(e) {
		if (!this.paused) throw Error("Parser was already resumed");
		this.paused = !1, !this.inLoop && (this._runParsingLoop(), this.paused || e?.());
	}
	write(e, t, n) {
		this.active = !0, this.preprocessor.write(e, t), this._runParsingLoop(), this.paused || n?.();
	}
	insertHtmlAtCurrentPos(e) {
		this.active = !0, this.preprocessor.insertHtmlAtCurrentPos(e), this._runParsingLoop();
	}
	_ensureHibernation() {
		return this.preprocessor.endOfChunkHit ? (this.preprocessor.retreat(this.consumedAfterSnapshot), this.consumedAfterSnapshot = 0, this.active = !1, !0) : !1;
	}
	_consume() {
		return this.consumedAfterSnapshot++, this.preprocessor.advance();
	}
	_advanceBy(e) {
		this.consumedAfterSnapshot += e;
		for (let t = 0; t < e; t++) this.preprocessor.advance();
	}
	_consumeSequenceIfMatch(e, t) {
		return this.preprocessor.startsWith(e, t) ? (this._advanceBy(e.length - 1), !0) : !1;
	}
	_createStartTagToken() {
		this.currentToken = {
			type: K.START_TAG,
			tagName: "",
			tagID: Y.UNKNOWN,
			selfClosing: !1,
			ackSelfClosing: !1,
			attrs: [],
			location: this.getCurrentLocation(1)
		};
	}
	_createEndTagToken() {
		this.currentToken = {
			type: K.END_TAG,
			tagName: "",
			tagID: Y.UNKNOWN,
			selfClosing: !1,
			ackSelfClosing: !1,
			attrs: [],
			location: this.getCurrentLocation(2)
		};
	}
	_createCommentToken(e) {
		this.currentToken = {
			type: K.COMMENT,
			data: "",
			location: this.getCurrentLocation(e)
		};
	}
	_createDoctypeToken(e) {
		this.currentToken = {
			type: K.DOCTYPE,
			name: e,
			forceQuirks: !1,
			publicId: null,
			systemId: null,
			location: this.currentLocation
		};
	}
	_createCharacterToken(e, t) {
		this.currentCharacterToken = {
			type: e,
			chars: t,
			location: this.currentLocation
		};
	}
	_createAttr(e) {
		this.currentAttr = {
			name: e,
			value: ""
		}, this.currentLocation = this.getCurrentLocation(0);
	}
	_leaveAttrName() {
		var e;
		let t = this.currentToken;
		if (Iu(t, this.currentAttr.name) === null) {
			if (t.attrs.push(this.currentAttr), t.location && this.currentLocation) {
				let n = (e = t.location).attrs ?? (e.attrs = Object.create(null));
				n[this.currentAttr.name] = this.currentLocation, this._leaveAttrValue();
			}
		} else this._err(G.duplicateAttribute);
	}
	_leaveAttrValue() {
		this.currentLocation && (this.currentLocation.endLine = this.preprocessor.line, this.currentLocation.endCol = this.preprocessor.col, this.currentLocation.endOffset = this.preprocessor.offset);
	}
	prepareToken(e) {
		this._emitCurrentCharacterToken(e.location), this.currentToken = null, e.location && (e.location.endLine = this.preprocessor.line, e.location.endCol = this.preprocessor.col + 1, e.location.endOffset = this.preprocessor.offset + 1), this.currentLocation = this.getCurrentLocation(-1);
	}
	emitCurrentTagToken() {
		let e = this.currentToken;
		this.prepareToken(e), e.tagID = ed(e.tagName), e.type === K.START_TAG ? (this.lastStartTagName = e.tagName, this.handler.onStartTag(e)) : (e.attrs.length > 0 && this._err(G.endTagWithAttributes), e.selfClosing && this._err(G.endTagWithTrailingSolidus), this.handler.onEndTag(e)), this.preprocessor.dropParsedChunk();
	}
	emitCurrentComment(e) {
		this.prepareToken(e), this.handler.onComment(e), this.preprocessor.dropParsedChunk();
	}
	emitCurrentDoctype(e) {
		this.prepareToken(e), this.handler.onDoctype(e), this.preprocessor.dropParsedChunk();
	}
	_emitCurrentCharacterToken(e) {
		if (this.currentCharacterToken) {
			switch (e && this.currentCharacterToken.location && (this.currentCharacterToken.location.endLine = e.startLine, this.currentCharacterToken.location.endCol = e.startCol, this.currentCharacterToken.location.endOffset = e.startOffset), this.currentCharacterToken.type) {
				case K.CHARACTER:
					this.handler.onCharacter(this.currentCharacterToken);
					break;
				case K.NULL_CHARACTER:
					this.handler.onNullCharacter(this.currentCharacterToken);
					break;
				case K.WHITESPACE_CHARACTER: this.handler.onWhitespaceCharacter(this.currentCharacterToken);
			}
			this.currentCharacterToken = null;
		}
	}
	_emitEOFToken() {
		let e = this.getCurrentLocation(0);
		e && (e.endLine = e.startLine, e.endCol = e.startCol, e.endOffset = e.startOffset), this._emitCurrentCharacterToken(e), this.handler.onEof({
			type: K.EOF,
			location: e
		}), this.active = !1;
	}
	_appendCharToCurrentCharacterToken(e, t) {
		if (this.currentCharacterToken) {
			if (this.currentCharacterToken.type === e) {
				this.currentCharacterToken.chars += t;
				return;
			}
			this.currentLocation = this.getCurrentLocation(0), this._emitCurrentCharacterToken(this.currentLocation), this.preprocessor.dropParsedChunk();
		}
		this._createCharacterToken(e, t);
	}
	_emitCodePoint(e) {
		let t = ld(e) ? K.WHITESPACE_CHARACTER : e === W.NULL ? K.NULL_CHARACTER : K.CHARACTER;
		this._appendCharToCurrentCharacterToken(t, String.fromCodePoint(e));
	}
	_emitChars(e) {
		this._appendCharToCurrentCharacterToken(K.CHARACTER, e);
	}
	_startCharacterReference() {
		this.returnState = this.state, this.state = Z.CHARACTER_REFERENCE, this.entityStartPos = this.preprocessor.pos, this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute() ? Ju.Attribute : Ju.Legacy);
	}
	_isCharacterReferenceInAttribute() {
		return this.returnState === Z.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === Z.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === Z.ATTRIBUTE_VALUE_UNQUOTED;
	}
	_flushCodePointConsumedAsCharacterReference(e) {
		this._isCharacterReferenceInAttribute() ? this.currentAttr.value += String.fromCodePoint(e) : this._emitCodePoint(e);
	}
	_callState(e) {
		switch (this.state) {
			case Z.DATA:
				this._stateData(e);
				break;
			case Z.RCDATA:
				this._stateRcdata(e);
				break;
			case Z.RAWTEXT:
				this._stateRawtext(e);
				break;
			case Z.SCRIPT_DATA:
				this._stateScriptData(e);
				break;
			case Z.PLAINTEXT:
				this._statePlaintext(e);
				break;
			case Z.TAG_OPEN:
				this._stateTagOpen(e);
				break;
			case Z.END_TAG_OPEN:
				this._stateEndTagOpen(e);
				break;
			case Z.TAG_NAME:
				this._stateTagName(e);
				break;
			case Z.RCDATA_LESS_THAN_SIGN:
				this._stateRcdataLessThanSign(e);
				break;
			case Z.RCDATA_END_TAG_OPEN:
				this._stateRcdataEndTagOpen(e);
				break;
			case Z.RCDATA_END_TAG_NAME:
				this._stateRcdataEndTagName(e);
				break;
			case Z.RAWTEXT_LESS_THAN_SIGN:
				this._stateRawtextLessThanSign(e);
				break;
			case Z.RAWTEXT_END_TAG_OPEN:
				this._stateRawtextEndTagOpen(e);
				break;
			case Z.RAWTEXT_END_TAG_NAME:
				this._stateRawtextEndTagName(e);
				break;
			case Z.SCRIPT_DATA_LESS_THAN_SIGN:
				this._stateScriptDataLessThanSign(e);
				break;
			case Z.SCRIPT_DATA_END_TAG_OPEN:
				this._stateScriptDataEndTagOpen(e);
				break;
			case Z.SCRIPT_DATA_END_TAG_NAME:
				this._stateScriptDataEndTagName(e);
				break;
			case Z.SCRIPT_DATA_ESCAPE_START:
				this._stateScriptDataEscapeStart(e);
				break;
			case Z.SCRIPT_DATA_ESCAPE_START_DASH:
				this._stateScriptDataEscapeStartDash(e);
				break;
			case Z.SCRIPT_DATA_ESCAPED:
				this._stateScriptDataEscaped(e);
				break;
			case Z.SCRIPT_DATA_ESCAPED_DASH:
				this._stateScriptDataEscapedDash(e);
				break;
			case Z.SCRIPT_DATA_ESCAPED_DASH_DASH:
				this._stateScriptDataEscapedDashDash(e);
				break;
			case Z.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:
				this._stateScriptDataEscapedLessThanSign(e);
				break;
			case Z.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:
				this._stateScriptDataEscapedEndTagOpen(e);
				break;
			case Z.SCRIPT_DATA_ESCAPED_END_TAG_NAME:
				this._stateScriptDataEscapedEndTagName(e);
				break;
			case Z.SCRIPT_DATA_DOUBLE_ESCAPE_START:
				this._stateScriptDataDoubleEscapeStart(e);
				break;
			case Z.SCRIPT_DATA_DOUBLE_ESCAPED:
				this._stateScriptDataDoubleEscaped(e);
				break;
			case Z.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:
				this._stateScriptDataDoubleEscapedDash(e);
				break;
			case Z.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:
				this._stateScriptDataDoubleEscapedDashDash(e);
				break;
			case Z.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:
				this._stateScriptDataDoubleEscapedLessThanSign(e);
				break;
			case Z.SCRIPT_DATA_DOUBLE_ESCAPE_END:
				this._stateScriptDataDoubleEscapeEnd(e);
				break;
			case Z.BEFORE_ATTRIBUTE_NAME:
				this._stateBeforeAttributeName(e);
				break;
			case Z.ATTRIBUTE_NAME:
				this._stateAttributeName(e);
				break;
			case Z.AFTER_ATTRIBUTE_NAME:
				this._stateAfterAttributeName(e);
				break;
			case Z.BEFORE_ATTRIBUTE_VALUE:
				this._stateBeforeAttributeValue(e);
				break;
			case Z.ATTRIBUTE_VALUE_DOUBLE_QUOTED:
				this._stateAttributeValueDoubleQuoted(e);
				break;
			case Z.ATTRIBUTE_VALUE_SINGLE_QUOTED:
				this._stateAttributeValueSingleQuoted(e);
				break;
			case Z.ATTRIBUTE_VALUE_UNQUOTED:
				this._stateAttributeValueUnquoted(e);
				break;
			case Z.AFTER_ATTRIBUTE_VALUE_QUOTED:
				this._stateAfterAttributeValueQuoted(e);
				break;
			case Z.SELF_CLOSING_START_TAG:
				this._stateSelfClosingStartTag(e);
				break;
			case Z.BOGUS_COMMENT:
				this._stateBogusComment(e);
				break;
			case Z.MARKUP_DECLARATION_OPEN:
				this._stateMarkupDeclarationOpen(e);
				break;
			case Z.COMMENT_START:
				this._stateCommentStart(e);
				break;
			case Z.COMMENT_START_DASH:
				this._stateCommentStartDash(e);
				break;
			case Z.COMMENT:
				this._stateComment(e);
				break;
			case Z.COMMENT_LESS_THAN_SIGN:
				this._stateCommentLessThanSign(e);
				break;
			case Z.COMMENT_LESS_THAN_SIGN_BANG:
				this._stateCommentLessThanSignBang(e);
				break;
			case Z.COMMENT_LESS_THAN_SIGN_BANG_DASH:
				this._stateCommentLessThanSignBangDash(e);
				break;
			case Z.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:
				this._stateCommentLessThanSignBangDashDash(e);
				break;
			case Z.COMMENT_END_DASH:
				this._stateCommentEndDash(e);
				break;
			case Z.COMMENT_END:
				this._stateCommentEnd(e);
				break;
			case Z.COMMENT_END_BANG:
				this._stateCommentEndBang(e);
				break;
			case Z.DOCTYPE:
				this._stateDoctype(e);
				break;
			case Z.BEFORE_DOCTYPE_NAME:
				this._stateBeforeDoctypeName(e);
				break;
			case Z.DOCTYPE_NAME:
				this._stateDoctypeName(e);
				break;
			case Z.AFTER_DOCTYPE_NAME:
				this._stateAfterDoctypeName(e);
				break;
			case Z.AFTER_DOCTYPE_PUBLIC_KEYWORD:
				this._stateAfterDoctypePublicKeyword(e);
				break;
			case Z.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:
				this._stateBeforeDoctypePublicIdentifier(e);
				break;
			case Z.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:
				this._stateDoctypePublicIdentifierDoubleQuoted(e);
				break;
			case Z.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:
				this._stateDoctypePublicIdentifierSingleQuoted(e);
				break;
			case Z.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:
				this._stateAfterDoctypePublicIdentifier(e);
				break;
			case Z.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:
				this._stateBetweenDoctypePublicAndSystemIdentifiers(e);
				break;
			case Z.AFTER_DOCTYPE_SYSTEM_KEYWORD:
				this._stateAfterDoctypeSystemKeyword(e);
				break;
			case Z.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:
				this._stateBeforeDoctypeSystemIdentifier(e);
				break;
			case Z.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:
				this._stateDoctypeSystemIdentifierDoubleQuoted(e);
				break;
			case Z.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:
				this._stateDoctypeSystemIdentifierSingleQuoted(e);
				break;
			case Z.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:
				this._stateAfterDoctypeSystemIdentifier(e);
				break;
			case Z.BOGUS_DOCTYPE:
				this._stateBogusDoctype(e);
				break;
			case Z.CDATA_SECTION:
				this._stateCdataSection(e);
				break;
			case Z.CDATA_SECTION_BRACKET:
				this._stateCdataSectionBracket(e);
				break;
			case Z.CDATA_SECTION_END:
				this._stateCdataSectionEnd(e);
				break;
			case Z.CHARACTER_REFERENCE:
				this._stateCharacterReference();
				break;
			case Z.AMBIGUOUS_AMPERSAND:
				this._stateAmbiguousAmpersand(e);
				break;
			default: throw Error("Unknown state");
		}
	}
	_stateData(e) {
		switch (e) {
			case W.LESS_THAN_SIGN:
				this.state = Z.TAG_OPEN;
				break;
			case W.AMPERSAND:
				this._startCharacterReference();
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), this._emitCodePoint(e);
				break;
			case W.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateRcdata(e) {
		switch (e) {
			case W.AMPERSAND:
				this._startCharacterReference();
				break;
			case W.LESS_THAN_SIGN:
				this.state = Z.RCDATA_LESS_THAN_SIGN;
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), this._emitChars("�");
				break;
			case W.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateRawtext(e) {
		switch (e) {
			case W.LESS_THAN_SIGN:
				this.state = Z.RAWTEXT_LESS_THAN_SIGN;
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), this._emitChars("�");
				break;
			case W.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateScriptData(e) {
		switch (e) {
			case W.LESS_THAN_SIGN:
				this.state = Z.SCRIPT_DATA_LESS_THAN_SIGN;
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), this._emitChars("�");
				break;
			case W.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_statePlaintext(e) {
		switch (e) {
			case W.NULL:
				this._err(G.unexpectedNullCharacter), this._emitChars("�");
				break;
			case W.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateTagOpen(e) {
		if (od(e)) this._createStartTagToken(), this.state = Z.TAG_NAME, this._stateTagName(e);
		else switch (e) {
			case W.EXCLAMATION_MARK:
				this.state = Z.MARKUP_DECLARATION_OPEN;
				break;
			case W.SOLIDUS:
				this.state = Z.END_TAG_OPEN;
				break;
			case W.QUESTION_MARK:
				this._err(G.unexpectedQuestionMarkInsteadOfTagName), this._createCommentToken(1), this.state = Z.BOGUS_COMMENT, this._stateBogusComment(e);
				break;
			case W.EOF:
				this._err(G.eofBeforeTagName), this._emitChars("<"), this._emitEOFToken();
				break;
			default: this._err(G.invalidFirstCharacterOfTagName), this._emitChars("<"), this.state = Z.DATA, this._stateData(e);
		}
	}
	_stateEndTagOpen(e) {
		if (od(e)) this._createEndTagToken(), this.state = Z.TAG_NAME, this._stateTagName(e);
		else switch (e) {
			case W.GREATER_THAN_SIGN:
				this._err(G.missingEndTagName), this.state = Z.DATA;
				break;
			case W.EOF:
				this._err(G.eofBeforeTagName), this._emitChars("</"), this._emitEOFToken();
				break;
			default: this._err(G.invalidFirstCharacterOfTagName), this._createCommentToken(2), this.state = Z.BOGUS_COMMENT, this._stateBogusComment(e);
		}
	}
	_stateTagName(e) {
		let t = this.currentToken;
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED:
				this.state = Z.BEFORE_ATTRIBUTE_NAME;
				break;
			case W.SOLIDUS:
				this.state = Z.SELF_CLOSING_START_TAG;
				break;
			case W.GREATER_THAN_SIGN:
				this.state = Z.DATA, this.emitCurrentTagToken();
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), t.tagName += "�";
				break;
			case W.EOF:
				this._err(G.eofInTag), this._emitEOFToken();
				break;
			default: t.tagName += String.fromCodePoint(id(e) ? cd(e) : e);
		}
	}
	_stateRcdataLessThanSign(e) {
		e === W.SOLIDUS ? this.state = Z.RCDATA_END_TAG_OPEN : (this._emitChars("<"), this.state = Z.RCDATA, this._stateRcdata(e));
	}
	_stateRcdataEndTagOpen(e) {
		od(e) ? (this.state = Z.RCDATA_END_TAG_NAME, this._stateRcdataEndTagName(e)) : (this._emitChars("</"), this.state = Z.RCDATA, this._stateRcdata(e));
	}
	handleSpecialEndTag(e) {
		if (!this.preprocessor.startsWith(this.lastStartTagName, !1)) return !this._ensureHibernation();
		this._createEndTagToken();
		let t = this.currentToken;
		switch (t.tagName = this.lastStartTagName, this.preprocessor.peek(this.lastStartTagName.length)) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED: return this._advanceBy(this.lastStartTagName.length), this.state = Z.BEFORE_ATTRIBUTE_NAME, !1;
			case W.SOLIDUS: return this._advanceBy(this.lastStartTagName.length), this.state = Z.SELF_CLOSING_START_TAG, !1;
			case W.GREATER_THAN_SIGN: return this._advanceBy(this.lastStartTagName.length), this.emitCurrentTagToken(), this.state = Z.DATA, !1;
			default: return !this._ensureHibernation();
		}
	}
	_stateRcdataEndTagName(e) {
		this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = Z.RCDATA, this._stateRcdata(e));
	}
	_stateRawtextLessThanSign(e) {
		e === W.SOLIDUS ? this.state = Z.RAWTEXT_END_TAG_OPEN : (this._emitChars("<"), this.state = Z.RAWTEXT, this._stateRawtext(e));
	}
	_stateRawtextEndTagOpen(e) {
		od(e) ? (this.state = Z.RAWTEXT_END_TAG_NAME, this._stateRawtextEndTagName(e)) : (this._emitChars("</"), this.state = Z.RAWTEXT, this._stateRawtext(e));
	}
	_stateRawtextEndTagName(e) {
		this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = Z.RAWTEXT, this._stateRawtext(e));
	}
	_stateScriptDataLessThanSign(e) {
		switch (e) {
			case W.SOLIDUS:
				this.state = Z.SCRIPT_DATA_END_TAG_OPEN;
				break;
			case W.EXCLAMATION_MARK:
				this.state = Z.SCRIPT_DATA_ESCAPE_START, this._emitChars("<!");
				break;
			default: this._emitChars("<"), this.state = Z.SCRIPT_DATA, this._stateScriptData(e);
		}
	}
	_stateScriptDataEndTagOpen(e) {
		od(e) ? (this.state = Z.SCRIPT_DATA_END_TAG_NAME, this._stateScriptDataEndTagName(e)) : (this._emitChars("</"), this.state = Z.SCRIPT_DATA, this._stateScriptData(e));
	}
	_stateScriptDataEndTagName(e) {
		this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = Z.SCRIPT_DATA, this._stateScriptData(e));
	}
	_stateScriptDataEscapeStart(e) {
		e === W.HYPHEN_MINUS ? (this.state = Z.SCRIPT_DATA_ESCAPE_START_DASH, this._emitChars("-")) : (this.state = Z.SCRIPT_DATA, this._stateScriptData(e));
	}
	_stateScriptDataEscapeStartDash(e) {
		e === W.HYPHEN_MINUS ? (this.state = Z.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-")) : (this.state = Z.SCRIPT_DATA, this._stateScriptData(e));
	}
	_stateScriptDataEscaped(e) {
		switch (e) {
			case W.HYPHEN_MINUS:
				this.state = Z.SCRIPT_DATA_ESCAPED_DASH, this._emitChars("-");
				break;
			case W.LESS_THAN_SIGN:
				this.state = Z.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), this._emitChars("�");
				break;
			case W.EOF:
				this._err(G.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateScriptDataEscapedDash(e) {
		switch (e) {
			case W.HYPHEN_MINUS:
				this.state = Z.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-");
				break;
			case W.LESS_THAN_SIGN:
				this.state = Z.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), this.state = Z.SCRIPT_DATA_ESCAPED, this._emitChars("�");
				break;
			case W.EOF:
				this._err(G.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this.state = Z.SCRIPT_DATA_ESCAPED, this._emitCodePoint(e);
		}
	}
	_stateScriptDataEscapedDashDash(e) {
		switch (e) {
			case W.HYPHEN_MINUS:
				this._emitChars("-");
				break;
			case W.LESS_THAN_SIGN:
				this.state = Z.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
				break;
			case W.GREATER_THAN_SIGN:
				this.state = Z.SCRIPT_DATA, this._emitChars(">");
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), this.state = Z.SCRIPT_DATA_ESCAPED, this._emitChars("�");
				break;
			case W.EOF:
				this._err(G.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this.state = Z.SCRIPT_DATA_ESCAPED, this._emitCodePoint(e);
		}
	}
	_stateScriptDataEscapedLessThanSign(e) {
		e === W.SOLIDUS ? this.state = Z.SCRIPT_DATA_ESCAPED_END_TAG_OPEN : od(e) ? (this._emitChars("<"), this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPE_START, this._stateScriptDataDoubleEscapeStart(e)) : (this._emitChars("<"), this.state = Z.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
	}
	_stateScriptDataEscapedEndTagOpen(e) {
		od(e) ? (this.state = Z.SCRIPT_DATA_ESCAPED_END_TAG_NAME, this._stateScriptDataEscapedEndTagName(e)) : (this._emitChars("</"), this.state = Z.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
	}
	_stateScriptDataEscapedEndTagName(e) {
		this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = Z.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
	}
	_stateScriptDataDoubleEscapeStart(e) {
		if (this.preprocessor.startsWith(Ou.SCRIPT, !1) && ud(this.preprocessor.peek(Ou.SCRIPT.length))) {
			this._emitCodePoint(e);
			for (let e = 0; e < Ou.SCRIPT.length; e++) this._emitCodePoint(this._consume());
			this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED;
		} else this._ensureHibernation() || (this.state = Z.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
	}
	_stateScriptDataDoubleEscaped(e) {
		switch (e) {
			case W.HYPHEN_MINUS:
				this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED_DASH, this._emitChars("-");
				break;
			case W.LESS_THAN_SIGN:
				this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), this._emitChars("�");
				break;
			case W.EOF:
				this._err(G.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateScriptDataDoubleEscapedDash(e) {
		switch (e) {
			case W.HYPHEN_MINUS:
				this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH, this._emitChars("-");
				break;
			case W.LESS_THAN_SIGN:
				this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars("�");
				break;
			case W.EOF:
				this._err(G.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(e);
		}
	}
	_stateScriptDataDoubleEscapedDashDash(e) {
		switch (e) {
			case W.HYPHEN_MINUS:
				this._emitChars("-");
				break;
			case W.LESS_THAN_SIGN:
				this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
				break;
			case W.GREATER_THAN_SIGN:
				this.state = Z.SCRIPT_DATA, this._emitChars(">");
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars("�");
				break;
			case W.EOF:
				this._err(G.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(e);
		}
	}
	_stateScriptDataDoubleEscapedLessThanSign(e) {
		e === W.SOLIDUS ? (this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPE_END, this._emitChars("/")) : (this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(e));
	}
	_stateScriptDataDoubleEscapeEnd(e) {
		if (this.preprocessor.startsWith(Ou.SCRIPT, !1) && ud(this.preprocessor.peek(Ou.SCRIPT.length))) {
			this._emitCodePoint(e);
			for (let e = 0; e < Ou.SCRIPT.length; e++) this._emitCodePoint(this._consume());
			this.state = Z.SCRIPT_DATA_ESCAPED;
		} else this._ensureHibernation() || (this.state = Z.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(e));
	}
	_stateBeforeAttributeName(e) {
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED: break;
			case W.SOLIDUS:
			case W.GREATER_THAN_SIGN:
			case W.EOF:
				this.state = Z.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(e);
				break;
			case W.EQUALS_SIGN:
				this._err(G.unexpectedEqualsSignBeforeAttributeName), this._createAttr("="), this.state = Z.ATTRIBUTE_NAME;
				break;
			default: this._createAttr(""), this.state = Z.ATTRIBUTE_NAME, this._stateAttributeName(e);
		}
	}
	_stateAttributeName(e) {
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED:
			case W.SOLIDUS:
			case W.GREATER_THAN_SIGN:
			case W.EOF:
				this._leaveAttrName(), this.state = Z.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(e);
				break;
			case W.EQUALS_SIGN:
				this._leaveAttrName(), this.state = Z.BEFORE_ATTRIBUTE_VALUE;
				break;
			case W.QUOTATION_MARK:
			case W.APOSTROPHE:
			case W.LESS_THAN_SIGN:
				this._err(G.unexpectedCharacterInAttributeName), this.currentAttr.name += String.fromCodePoint(e);
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), this.currentAttr.name += "�";
				break;
			default: this.currentAttr.name += String.fromCodePoint(id(e) ? cd(e) : e);
		}
	}
	_stateAfterAttributeName(e) {
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED: break;
			case W.SOLIDUS:
				this.state = Z.SELF_CLOSING_START_TAG;
				break;
			case W.EQUALS_SIGN:
				this.state = Z.BEFORE_ATTRIBUTE_VALUE;
				break;
			case W.GREATER_THAN_SIGN:
				this.state = Z.DATA, this.emitCurrentTagToken();
				break;
			case W.EOF:
				this._err(G.eofInTag), this._emitEOFToken();
				break;
			default: this._createAttr(""), this.state = Z.ATTRIBUTE_NAME, this._stateAttributeName(e);
		}
	}
	_stateBeforeAttributeValue(e) {
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED: break;
			case W.QUOTATION_MARK:
				this.state = Z.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
				break;
			case W.APOSTROPHE:
				this.state = Z.ATTRIBUTE_VALUE_SINGLE_QUOTED;
				break;
			case W.GREATER_THAN_SIGN:
				this._err(G.missingAttributeValue), this.state = Z.DATA, this.emitCurrentTagToken();
				break;
			default: this.state = Z.ATTRIBUTE_VALUE_UNQUOTED, this._stateAttributeValueUnquoted(e);
		}
	}
	_stateAttributeValueDoubleQuoted(e) {
		switch (e) {
			case W.QUOTATION_MARK:
				this.state = Z.AFTER_ATTRIBUTE_VALUE_QUOTED;
				break;
			case W.AMPERSAND:
				this._startCharacterReference();
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), this.currentAttr.value += "�";
				break;
			case W.EOF:
				this._err(G.eofInTag), this._emitEOFToken();
				break;
			default: this.currentAttr.value += String.fromCodePoint(e);
		}
	}
	_stateAttributeValueSingleQuoted(e) {
		switch (e) {
			case W.APOSTROPHE:
				this.state = Z.AFTER_ATTRIBUTE_VALUE_QUOTED;
				break;
			case W.AMPERSAND:
				this._startCharacterReference();
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), this.currentAttr.value += "�";
				break;
			case W.EOF:
				this._err(G.eofInTag), this._emitEOFToken();
				break;
			default: this.currentAttr.value += String.fromCodePoint(e);
		}
	}
	_stateAttributeValueUnquoted(e) {
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED:
				this._leaveAttrValue(), this.state = Z.BEFORE_ATTRIBUTE_NAME;
				break;
			case W.AMPERSAND:
				this._startCharacterReference();
				break;
			case W.GREATER_THAN_SIGN:
				this._leaveAttrValue(), this.state = Z.DATA, this.emitCurrentTagToken();
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), this.currentAttr.value += "�";
				break;
			case W.QUOTATION_MARK:
			case W.APOSTROPHE:
			case W.LESS_THAN_SIGN:
			case W.EQUALS_SIGN:
			case W.GRAVE_ACCENT:
				this._err(G.unexpectedCharacterInUnquotedAttributeValue), this.currentAttr.value += String.fromCodePoint(e);
				break;
			case W.EOF:
				this._err(G.eofInTag), this._emitEOFToken();
				break;
			default: this.currentAttr.value += String.fromCodePoint(e);
		}
	}
	_stateAfterAttributeValueQuoted(e) {
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED:
				this._leaveAttrValue(), this.state = Z.BEFORE_ATTRIBUTE_NAME;
				break;
			case W.SOLIDUS:
				this._leaveAttrValue(), this.state = Z.SELF_CLOSING_START_TAG;
				break;
			case W.GREATER_THAN_SIGN:
				this._leaveAttrValue(), this.state = Z.DATA, this.emitCurrentTagToken();
				break;
			case W.EOF:
				this._err(G.eofInTag), this._emitEOFToken();
				break;
			default: this._err(G.missingWhitespaceBetweenAttributes), this.state = Z.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(e);
		}
	}
	_stateSelfClosingStartTag(e) {
		switch (e) {
			case W.GREATER_THAN_SIGN: {
				let e = this.currentToken;
				e.selfClosing = !0, this.state = Z.DATA, this.emitCurrentTagToken();
				break;
			}
			case W.EOF:
				this._err(G.eofInTag), this._emitEOFToken();
				break;
			default: this._err(G.unexpectedSolidusInTag), this.state = Z.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(e);
		}
	}
	_stateBogusComment(e) {
		let t = this.currentToken;
		switch (e) {
			case W.GREATER_THAN_SIGN:
				this.state = Z.DATA, this.emitCurrentComment(t);
				break;
			case W.EOF:
				this.emitCurrentComment(t), this._emitEOFToken();
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), t.data += "�";
				break;
			default: t.data += String.fromCodePoint(e);
		}
	}
	_stateMarkupDeclarationOpen(e) {
		this._consumeSequenceIfMatch(Ou.DASH_DASH, !0) ? (this._createCommentToken(Ou.DASH_DASH.length + 1), this.state = Z.COMMENT_START) : this._consumeSequenceIfMatch(Ou.DOCTYPE, !1) ? (this.currentLocation = this.getCurrentLocation(Ou.DOCTYPE.length + 1), this.state = Z.DOCTYPE) : this._consumeSequenceIfMatch(Ou.CDATA_START, !0) ? this.inForeignNode ? this.state = Z.CDATA_SECTION : (this._err(G.cdataInHtmlContent), this._createCommentToken(Ou.CDATA_START.length + 1), this.currentToken.data = "[CDATA[", this.state = Z.BOGUS_COMMENT) : this._ensureHibernation() || (this._err(G.incorrectlyOpenedComment), this._createCommentToken(2), this.state = Z.BOGUS_COMMENT, this._stateBogusComment(e));
	}
	_stateCommentStart(e) {
		switch (e) {
			case W.HYPHEN_MINUS:
				this.state = Z.COMMENT_START_DASH;
				break;
			case W.GREATER_THAN_SIGN: {
				this._err(G.abruptClosingOfEmptyComment), this.state = Z.DATA;
				let e = this.currentToken;
				this.emitCurrentComment(e);
				break;
			}
			default: this.state = Z.COMMENT, this._stateComment(e);
		}
	}
	_stateCommentStartDash(e) {
		let t = this.currentToken;
		switch (e) {
			case W.HYPHEN_MINUS:
				this.state = Z.COMMENT_END;
				break;
			case W.GREATER_THAN_SIGN:
				this._err(G.abruptClosingOfEmptyComment), this.state = Z.DATA, this.emitCurrentComment(t);
				break;
			case W.EOF:
				this._err(G.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += "-", this.state = Z.COMMENT, this._stateComment(e);
		}
	}
	_stateComment(e) {
		let t = this.currentToken;
		switch (e) {
			case W.HYPHEN_MINUS:
				this.state = Z.COMMENT_END_DASH;
				break;
			case W.LESS_THAN_SIGN:
				t.data += "<", this.state = Z.COMMENT_LESS_THAN_SIGN;
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), t.data += "�";
				break;
			case W.EOF:
				this._err(G.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += String.fromCodePoint(e);
		}
	}
	_stateCommentLessThanSign(e) {
		let t = this.currentToken;
		switch (e) {
			case W.EXCLAMATION_MARK:
				t.data += "!", this.state = Z.COMMENT_LESS_THAN_SIGN_BANG;
				break;
			case W.LESS_THAN_SIGN:
				t.data += "<";
				break;
			default: this.state = Z.COMMENT, this._stateComment(e);
		}
	}
	_stateCommentLessThanSignBang(e) {
		e === W.HYPHEN_MINUS ? this.state = Z.COMMENT_LESS_THAN_SIGN_BANG_DASH : (this.state = Z.COMMENT, this._stateComment(e));
	}
	_stateCommentLessThanSignBangDash(e) {
		e === W.HYPHEN_MINUS ? this.state = Z.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH : (this.state = Z.COMMENT_END_DASH, this._stateCommentEndDash(e));
	}
	_stateCommentLessThanSignBangDashDash(e) {
		e !== W.GREATER_THAN_SIGN && e !== W.EOF && this._err(G.nestedComment), this.state = Z.COMMENT_END, this._stateCommentEnd(e);
	}
	_stateCommentEndDash(e) {
		let t = this.currentToken;
		switch (e) {
			case W.HYPHEN_MINUS:
				this.state = Z.COMMENT_END;
				break;
			case W.EOF:
				this._err(G.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += "-", this.state = Z.COMMENT, this._stateComment(e);
		}
	}
	_stateCommentEnd(e) {
		let t = this.currentToken;
		switch (e) {
			case W.GREATER_THAN_SIGN:
				this.state = Z.DATA, this.emitCurrentComment(t);
				break;
			case W.EXCLAMATION_MARK:
				this.state = Z.COMMENT_END_BANG;
				break;
			case W.HYPHEN_MINUS:
				t.data += "-";
				break;
			case W.EOF:
				this._err(G.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += "--", this.state = Z.COMMENT, this._stateComment(e);
		}
	}
	_stateCommentEndBang(e) {
		let t = this.currentToken;
		switch (e) {
			case W.HYPHEN_MINUS:
				t.data += "--!", this.state = Z.COMMENT_END_DASH;
				break;
			case W.GREATER_THAN_SIGN:
				this._err(G.incorrectlyClosedComment), this.state = Z.DATA, this.emitCurrentComment(t);
				break;
			case W.EOF:
				this._err(G.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += "--!", this.state = Z.COMMENT, this._stateComment(e);
		}
	}
	_stateDoctype(e) {
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED:
				this.state = Z.BEFORE_DOCTYPE_NAME;
				break;
			case W.GREATER_THAN_SIGN:
				this.state = Z.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(e);
				break;
			case W.EOF: {
				this._err(G.eofInDoctype), this._createDoctypeToken(null);
				let e = this.currentToken;
				e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
				break;
			}
			default: this._err(G.missingWhitespaceBeforeDoctypeName), this.state = Z.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(e);
		}
	}
	_stateBeforeDoctypeName(e) {
		if (id(e)) this._createDoctypeToken(String.fromCharCode(cd(e))), this.state = Z.DOCTYPE_NAME;
		else switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED: break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), this._createDoctypeToken("�"), this.state = Z.DOCTYPE_NAME;
				break;
			case W.GREATER_THAN_SIGN: {
				this._err(G.missingDoctypeName), this._createDoctypeToken(null);
				let e = this.currentToken;
				e.forceQuirks = !0, this.emitCurrentDoctype(e), this.state = Z.DATA;
				break;
			}
			case W.EOF: {
				this._err(G.eofInDoctype), this._createDoctypeToken(null);
				let e = this.currentToken;
				e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
				break;
			}
			default: this._createDoctypeToken(String.fromCodePoint(e)), this.state = Z.DOCTYPE_NAME;
		}
	}
	_stateDoctypeName(e) {
		let t = this.currentToken;
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED:
				this.state = Z.AFTER_DOCTYPE_NAME;
				break;
			case W.GREATER_THAN_SIGN:
				this.state = Z.DATA, this.emitCurrentDoctype(t);
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), t.name += "�";
				break;
			case W.EOF:
				this._err(G.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.name += String.fromCodePoint(id(e) ? cd(e) : e);
		}
	}
	_stateAfterDoctypeName(e) {
		let t = this.currentToken;
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED: break;
			case W.GREATER_THAN_SIGN:
				this.state = Z.DATA, this.emitCurrentDoctype(t);
				break;
			case W.EOF:
				this._err(G.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._consumeSequenceIfMatch(Ou.PUBLIC, !1) ? this.state = Z.AFTER_DOCTYPE_PUBLIC_KEYWORD : this._consumeSequenceIfMatch(Ou.SYSTEM, !1) ? this.state = Z.AFTER_DOCTYPE_SYSTEM_KEYWORD : this._ensureHibernation() || (this._err(G.invalidCharacterSequenceAfterDoctypeName), t.forceQuirks = !0, this.state = Z.BOGUS_DOCTYPE, this._stateBogusDoctype(e));
		}
	}
	_stateAfterDoctypePublicKeyword(e) {
		let t = this.currentToken;
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED:
				this.state = Z.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
				break;
			case W.QUOTATION_MARK:
				this._err(G.missingWhitespaceAfterDoctypePublicKeyword), t.publicId = "", this.state = Z.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case W.APOSTROPHE:
				this._err(G.missingWhitespaceAfterDoctypePublicKeyword), t.publicId = "", this.state = Z.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
				break;
			case W.GREATER_THAN_SIGN:
				this._err(G.missingDoctypePublicIdentifier), t.forceQuirks = !0, this.state = Z.DATA, this.emitCurrentDoctype(t);
				break;
			case W.EOF:
				this._err(G.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(G.missingQuoteBeforeDoctypePublicIdentifier), t.forceQuirks = !0, this.state = Z.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateBeforeDoctypePublicIdentifier(e) {
		let t = this.currentToken;
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED: break;
			case W.QUOTATION_MARK:
				t.publicId = "", this.state = Z.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case W.APOSTROPHE:
				t.publicId = "", this.state = Z.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
				break;
			case W.GREATER_THAN_SIGN:
				this._err(G.missingDoctypePublicIdentifier), t.forceQuirks = !0, this.state = Z.DATA, this.emitCurrentDoctype(t);
				break;
			case W.EOF:
				this._err(G.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(G.missingQuoteBeforeDoctypePublicIdentifier), t.forceQuirks = !0, this.state = Z.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateDoctypePublicIdentifierDoubleQuoted(e) {
		let t = this.currentToken;
		switch (e) {
			case W.QUOTATION_MARK:
				this.state = Z.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), t.publicId += "�";
				break;
			case W.GREATER_THAN_SIGN:
				this._err(G.abruptDoctypePublicIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = Z.DATA;
				break;
			case W.EOF:
				this._err(G.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.publicId += String.fromCodePoint(e);
		}
	}
	_stateDoctypePublicIdentifierSingleQuoted(e) {
		let t = this.currentToken;
		switch (e) {
			case W.APOSTROPHE:
				this.state = Z.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), t.publicId += "�";
				break;
			case W.GREATER_THAN_SIGN:
				this._err(G.abruptDoctypePublicIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = Z.DATA;
				break;
			case W.EOF:
				this._err(G.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.publicId += String.fromCodePoint(e);
		}
	}
	_stateAfterDoctypePublicIdentifier(e) {
		let t = this.currentToken;
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED:
				this.state = Z.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
				break;
			case W.GREATER_THAN_SIGN:
				this.state = Z.DATA, this.emitCurrentDoctype(t);
				break;
			case W.QUOTATION_MARK:
				this._err(G.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), t.systemId = "", this.state = Z.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case W.APOSTROPHE:
				this._err(G.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), t.systemId = "", this.state = Z.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case W.EOF:
				this._err(G.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(G.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = Z.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateBetweenDoctypePublicAndSystemIdentifiers(e) {
		let t = this.currentToken;
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED: break;
			case W.GREATER_THAN_SIGN:
				this.emitCurrentDoctype(t), this.state = Z.DATA;
				break;
			case W.QUOTATION_MARK:
				t.systemId = "", this.state = Z.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case W.APOSTROPHE:
				t.systemId = "", this.state = Z.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case W.EOF:
				this._err(G.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(G.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = Z.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateAfterDoctypeSystemKeyword(e) {
		let t = this.currentToken;
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED:
				this.state = Z.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
				break;
			case W.QUOTATION_MARK:
				this._err(G.missingWhitespaceAfterDoctypeSystemKeyword), t.systemId = "", this.state = Z.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case W.APOSTROPHE:
				this._err(G.missingWhitespaceAfterDoctypeSystemKeyword), t.systemId = "", this.state = Z.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case W.GREATER_THAN_SIGN:
				this._err(G.missingDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = Z.DATA, this.emitCurrentDoctype(t);
				break;
			case W.EOF:
				this._err(G.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(G.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = Z.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateBeforeDoctypeSystemIdentifier(e) {
		let t = this.currentToken;
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED: break;
			case W.QUOTATION_MARK:
				t.systemId = "", this.state = Z.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case W.APOSTROPHE:
				t.systemId = "", this.state = Z.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case W.GREATER_THAN_SIGN:
				this._err(G.missingDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = Z.DATA, this.emitCurrentDoctype(t);
				break;
			case W.EOF:
				this._err(G.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(G.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = Z.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateDoctypeSystemIdentifierDoubleQuoted(e) {
		let t = this.currentToken;
		switch (e) {
			case W.QUOTATION_MARK:
				this.state = Z.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), t.systemId += "�";
				break;
			case W.GREATER_THAN_SIGN:
				this._err(G.abruptDoctypeSystemIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = Z.DATA;
				break;
			case W.EOF:
				this._err(G.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.systemId += String.fromCodePoint(e);
		}
	}
	_stateDoctypeSystemIdentifierSingleQuoted(e) {
		let t = this.currentToken;
		switch (e) {
			case W.APOSTROPHE:
				this.state = Z.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter), t.systemId += "�";
				break;
			case W.GREATER_THAN_SIGN:
				this._err(G.abruptDoctypeSystemIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = Z.DATA;
				break;
			case W.EOF:
				this._err(G.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.systemId += String.fromCodePoint(e);
		}
	}
	_stateAfterDoctypeSystemIdentifier(e) {
		let t = this.currentToken;
		switch (e) {
			case W.SPACE:
			case W.LINE_FEED:
			case W.TABULATION:
			case W.FORM_FEED: break;
			case W.GREATER_THAN_SIGN:
				this.emitCurrentDoctype(t), this.state = Z.DATA;
				break;
			case W.EOF:
				this._err(G.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(G.unexpectedCharacterAfterDoctypeSystemIdentifier), this.state = Z.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateBogusDoctype(e) {
		let t = this.currentToken;
		switch (e) {
			case W.GREATER_THAN_SIGN:
				this.emitCurrentDoctype(t), this.state = Z.DATA;
				break;
			case W.NULL:
				this._err(G.unexpectedNullCharacter);
				break;
			case W.EOF: this.emitCurrentDoctype(t), this._emitEOFToken();
		}
	}
	_stateCdataSection(e) {
		switch (e) {
			case W.RIGHT_SQUARE_BRACKET:
				this.state = Z.CDATA_SECTION_BRACKET;
				break;
			case W.EOF:
				this._err(G.eofInCdata), this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateCdataSectionBracket(e) {
		e === W.RIGHT_SQUARE_BRACKET ? this.state = Z.CDATA_SECTION_END : (this._emitChars("]"), this.state = Z.CDATA_SECTION, this._stateCdataSection(e));
	}
	_stateCdataSectionEnd(e) {
		switch (e) {
			case W.GREATER_THAN_SIGN:
				this.state = Z.DATA;
				break;
			case W.RIGHT_SQUARE_BRACKET:
				this._emitChars("]");
				break;
			default: this._emitChars("]]"), this.state = Z.CDATA_SECTION, this._stateCdataSection(e);
		}
	}
	_stateCharacterReference() {
		let e = this.entityDecoder.write(this.preprocessor.html, this.preprocessor.pos);
		if (e < 0) {
			if (this.preprocessor.lastChunkWritten) e = this.entityDecoder.end();
			else {
				this.active = !1, this.preprocessor.pos = this.preprocessor.html.length - 1, this.consumedAfterSnapshot = 0, this.preprocessor.endOfChunkHit = !0;
				return;
			}
		}
		e === 0 ? (this.preprocessor.pos = this.entityStartPos, this._flushCodePointConsumedAsCharacterReference(W.AMPERSAND), this.state = !this._isCharacterReferenceInAttribute() && sd(this.preprocessor.peek(1)) ? Z.AMBIGUOUS_AMPERSAND : this.returnState) : this.state = this.returnState;
	}
	_stateAmbiguousAmpersand(e) {
		sd(e) ? this._flushCodePointConsumedAsCharacterReference(e) : (e === W.SEMICOLON && this._err(G.unknownNamedCharacterReference), this.state = this.returnState, this._callState(e));
	}
}, pd = /* @__PURE__ */ new Set([
	Y.DD,
	Y.DT,
	Y.LI,
	Y.OPTGROUP,
	Y.OPTION,
	Y.P,
	Y.RB,
	Y.RP,
	Y.RT,
	Y.RTC
]), md = /* @__PURE__ */ new Set([
	...pd,
	Y.CAPTION,
	Y.COLGROUP,
	Y.TBODY,
	Y.TD,
	Y.TFOOT,
	Y.TH,
	Y.THEAD,
	Y.TR
]), hd = /* @__PURE__ */ new Set([
	Y.APPLET,
	Y.CAPTION,
	Y.HTML,
	Y.MARQUEE,
	Y.OBJECT,
	Y.TABLE,
	Y.TD,
	Y.TEMPLATE,
	Y.TH
]), gd = /* @__PURE__ */ new Set([
	...hd,
	Y.OL,
	Y.UL
]), _d = /* @__PURE__ */ new Set([...hd, Y.BUTTON]), vd = /* @__PURE__ */ new Set([
	Y.ANNOTATION_XML,
	Y.MI,
	Y.MN,
	Y.MO,
	Y.MS,
	Y.MTEXT
]), yd = /* @__PURE__ */ new Set([
	Y.DESC,
	Y.FOREIGN_OBJECT,
	Y.TITLE
]), bd = /* @__PURE__ */ new Set([
	Y.TR,
	Y.TEMPLATE,
	Y.HTML
]), xd = /* @__PURE__ */ new Set([
	Y.TBODY,
	Y.TFOOT,
	Y.THEAD,
	Y.TEMPLATE,
	Y.HTML
]), Sd = /* @__PURE__ */ new Set([
	Y.TABLE,
	Y.TEMPLATE,
	Y.HTML
]), Cd = /* @__PURE__ */ new Set([Y.TD, Y.TH]), wd = class {
	get currentTmplContentOrNode() {
		return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
	}
	constructor(e, t, n) {
		this.treeAdapter = t, this.handler = n, this.items = [], this.tagIDs = [], this.stackTop = -1, this.tmplCount = 0, this.currentTagId = Y.UNKNOWN, this.current = e;
	}
	_indexOf(e) {
		return this.items.lastIndexOf(e, this.stackTop);
	}
	_isInTemplate() {
		return this.currentTagId === Y.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === q.HTML;
	}
	_updateCurrentElement() {
		this.current = this.items[this.stackTop], this.currentTagId = this.tagIDs[this.stackTop];
	}
	push(e, t) {
		this.stackTop++, this.items[this.stackTop] = e, this.current = e, this.tagIDs[this.stackTop] = t, this.currentTagId = t, this._isInTemplate() && this.tmplCount++, this.handler.onItemPush(e, t, !0);
	}
	pop() {
		let e = this.current;
		this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--, this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(e, !0);
	}
	replace(e, t) {
		let n = this._indexOf(e);
		this.items[n] = t, n === this.stackTop && (this.current = t);
	}
	insertAfter(e, t, n) {
		let r = this._indexOf(e) + 1;
		this.items.splice(r, 0, t), this.tagIDs.splice(r, 0, n), this.stackTop++, r === this.stackTop && this._updateCurrentElement(), this.current && this.currentTagId !== void 0 && this.handler.onItemPush(this.current, this.currentTagId, r === this.stackTop);
	}
	popUntilTagNamePopped(e) {
		let t = this.stackTop + 1;
		do
			t = this.tagIDs.lastIndexOf(e, t - 1);
		while (t > 0 && this.treeAdapter.getNamespaceURI(this.items[t]) !== q.HTML);
		this.shortenToLength(Math.max(t, 0));
	}
	shortenToLength(e) {
		for (; this.stackTop >= e;) {
			let t = this.current;
			this.tmplCount > 0 && this._isInTemplate() && --this.tmplCount, this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(t, this.stackTop < e);
		}
	}
	popUntilElementPopped(e) {
		let t = this._indexOf(e);
		this.shortenToLength(Math.max(t, 0));
	}
	popUntilPopped(e, t) {
		let n = this._indexOfTagNames(e, t);
		this.shortenToLength(Math.max(n, 0));
	}
	popUntilNumberedHeaderPopped() {
		this.popUntilPopped(nd, q.HTML);
	}
	popUntilTableCellPopped() {
		this.popUntilPopped(Cd, q.HTML);
	}
	popAllUpToHtmlElement() {
		this.tmplCount = 0, this.shortenToLength(1);
	}
	_indexOfTagNames(e, t) {
		for (let n = this.stackTop; n >= 0; n--) if (e.has(this.tagIDs[n]) && this.treeAdapter.getNamespaceURI(this.items[n]) === t) return n;
		return -1;
	}
	clearBackTo(e, t) {
		let n = this._indexOfTagNames(e, t);
		this.shortenToLength(n + 1);
	}
	clearBackToTableContext() {
		this.clearBackTo(Sd, q.HTML);
	}
	clearBackToTableBodyContext() {
		this.clearBackTo(xd, q.HTML);
	}
	clearBackToTableRowContext() {
		this.clearBackTo(bd, q.HTML);
	}
	remove(e) {
		let t = this._indexOf(e);
		t >= 0 && (t === this.stackTop ? this.pop() : (this.items.splice(t, 1), this.tagIDs.splice(t, 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(e, !1)));
	}
	tryPeekProperlyNestedBodyElement() {
		return this.stackTop >= 1 && this.tagIDs[1] === Y.BODY ? this.items[1] : null;
	}
	contains(e) {
		return this._indexOf(e) > -1;
	}
	getCommonAncestor(e) {
		let t = this._indexOf(e) - 1;
		return t >= 0 ? this.items[t] : null;
	}
	isRootHtmlElementCurrent() {
		return this.stackTop === 0 && this.tagIDs[0] === Y.HTML;
	}
	hasInDynamicScope(e, t) {
		for (let n = this.stackTop; n >= 0; n--) {
			let r = this.tagIDs[n];
			switch (this.treeAdapter.getNamespaceURI(this.items[n])) {
				case q.HTML:
					if (r === e) return !0;
					if (t.has(r)) return !1;
					break;
				case q.SVG:
					if (yd.has(r)) return !1;
					break;
				case q.MATHML: if (vd.has(r)) return !1;
			}
		}
		return !0;
	}
	hasInScope(e) {
		return this.hasInDynamicScope(e, hd);
	}
	hasInListItemScope(e) {
		return this.hasInDynamicScope(e, gd);
	}
	hasInButtonScope(e) {
		return this.hasInDynamicScope(e, _d);
	}
	hasNumberedHeaderInScope() {
		for (let e = this.stackTop; e >= 0; e--) {
			let t = this.tagIDs[e];
			switch (this.treeAdapter.getNamespaceURI(this.items[e])) {
				case q.HTML:
					if (nd.has(t)) return !0;
					if (hd.has(t)) return !1;
					break;
				case q.SVG:
					if (yd.has(t)) return !1;
					break;
				case q.MATHML: if (vd.has(t)) return !1;
			}
		}
		return !0;
	}
	hasInTableScope(e) {
		for (let t = this.stackTop; t >= 0; t--) if (this.treeAdapter.getNamespaceURI(this.items[t]) === q.HTML) switch (this.tagIDs[t]) {
			case e: return !0;
			case Y.TABLE:
			case Y.HTML: return !1;
		}
		return !0;
	}
	hasTableBodyContextInTableScope() {
		for (let e = this.stackTop; e >= 0; e--) if (this.treeAdapter.getNamespaceURI(this.items[e]) === q.HTML) switch (this.tagIDs[e]) {
			case Y.TBODY:
			case Y.THEAD:
			case Y.TFOOT: return !0;
			case Y.TABLE:
			case Y.HTML: return !1;
		}
		return !0;
	}
	hasInSelectScope(e) {
		for (let t = this.stackTop; t >= 0; t--) if (this.treeAdapter.getNamespaceURI(this.items[t]) === q.HTML) switch (this.tagIDs[t]) {
			case e: return !0;
			case Y.OPTION:
			case Y.OPTGROUP: break;
			default: return !1;
		}
		return !0;
	}
	generateImpliedEndTags() {
		for (; this.currentTagId !== void 0 && pd.has(this.currentTagId);) this.pop();
	}
	generateImpliedEndTagsThoroughly() {
		for (; this.currentTagId !== void 0 && md.has(this.currentTagId);) this.pop();
	}
	generateImpliedEndTagsWithExclusion(e) {
		for (; this.currentTagId !== void 0 && this.currentTagId !== e && md.has(this.currentTagId);) this.pop();
	}
}, Td = 3, Ed;
(function(e) {
	e[e.Marker = 0] = "Marker", e[e.Element = 1] = "Element";
})(Ed ||= {});
var Dd = { type: Ed.Marker }, Od = class {
	constructor(e) {
		this.treeAdapter = e, this.entries = [], this.bookmark = null;
	}
	_getNoahArkConditionCandidates(e, t) {
		let n = [], r = t.length, i = this.treeAdapter.getTagName(e), a = this.treeAdapter.getNamespaceURI(e);
		for (let e = 0; e < this.entries.length; e++) {
			let t = this.entries[e];
			if (t.type === Ed.Marker) break;
			let { element: o } = t;
			if (this.treeAdapter.getTagName(o) === i && this.treeAdapter.getNamespaceURI(o) === a) {
				let t = this.treeAdapter.getAttrList(o);
				t.length === r && n.push({
					idx: e,
					attrs: t
				});
			}
		}
		return n;
	}
	_ensureNoahArkCondition(e) {
		if (this.entries.length < Td) return;
		let t = this.treeAdapter.getAttrList(e), n = this._getNoahArkConditionCandidates(e, t);
		if (n.length < Td) return;
		let r = new Map(t.map((e) => [e.name, e.value])), i = 0;
		for (let e = 0; e < n.length; e++) {
			let t = n[e];
			t.attrs.every((e) => r.get(e.name) === e.value) && (i += 1, i >= Td && this.entries.splice(t.idx, 1));
		}
	}
	insertMarker() {
		this.entries.unshift(Dd);
	}
	pushElement(e, t) {
		this._ensureNoahArkCondition(e), this.entries.unshift({
			type: Ed.Element,
			element: e,
			token: t
		});
	}
	insertElementAfterBookmark(e, t) {
		let n = this.entries.indexOf(this.bookmark);
		this.entries.splice(n, 0, {
			type: Ed.Element,
			element: e,
			token: t
		});
	}
	removeEntry(e) {
		let t = this.entries.indexOf(e);
		t !== -1 && this.entries.splice(t, 1);
	}
	clearToLastMarker() {
		let e = this.entries.indexOf(Dd);
		e === -1 ? this.entries.length = 0 : this.entries.splice(0, e + 1);
	}
	getElementEntryInScopeWithTagName(e) {
		let t = this.entries.find((t) => t.type === Ed.Marker || this.treeAdapter.getTagName(t.element) === e);
		return t && t.type === Ed.Element ? t : null;
	}
	getElementEntry(e) {
		return this.entries.find((t) => t.type === Ed.Element && t.element === e);
	}
}, kd = {
	createDocument() {
		return {
			nodeName: "#document",
			mode: Qu.NO_QUIRKS,
			childNodes: []
		};
	},
	createDocumentFragment() {
		return {
			nodeName: "#document-fragment",
			childNodes: []
		};
	},
	createElement(e, t, n) {
		return {
			nodeName: e,
			tagName: e,
			attrs: n,
			namespaceURI: t,
			childNodes: [],
			parentNode: null
		};
	},
	createCommentNode(e) {
		return {
			nodeName: "#comment",
			data: e,
			parentNode: null
		};
	},
	createTextNode(e) {
		return {
			nodeName: "#text",
			value: e,
			parentNode: null
		};
	},
	appendChild(e, t) {
		e.childNodes.push(t), t.parentNode = e;
	},
	insertBefore(e, t, n) {
		let r = e.childNodes.indexOf(n);
		e.childNodes.splice(r, 0, t), t.parentNode = e;
	},
	setTemplateContent(e, t) {
		e.content = t;
	},
	getTemplateContent(e) {
		return e.content;
	},
	setDocumentType(e, t, n, r) {
		let i = e.childNodes.find((e) => e.nodeName === "#documentType");
		if (i) i.name = t, i.publicId = n, i.systemId = r;
		else {
			let i = {
				nodeName: "#documentType",
				name: t,
				publicId: n,
				systemId: r,
				parentNode: null
			};
			kd.appendChild(e, i);
		}
	},
	setDocumentMode(e, t) {
		e.mode = t;
	},
	getDocumentMode(e) {
		return e.mode;
	},
	detachNode(e) {
		if (e.parentNode) {
			let t = e.parentNode.childNodes.indexOf(e);
			e.parentNode.childNodes.splice(t, 1), e.parentNode = null;
		}
	},
	insertText(e, t) {
		if (e.childNodes.length > 0) {
			let n = e.childNodes[e.childNodes.length - 1];
			if (kd.isTextNode(n)) {
				n.value += t;
				return;
			}
		}
		kd.appendChild(e, kd.createTextNode(t));
	},
	insertTextBefore(e, t, n) {
		let r = e.childNodes[e.childNodes.indexOf(n) - 1];
		r && kd.isTextNode(r) ? r.value += t : kd.insertBefore(e, kd.createTextNode(t), n);
	},
	adoptAttributes(e, t) {
		let n = new Set(e.attrs.map((e) => e.name));
		for (let r = 0; r < t.length; r++) n.has(t[r].name) || e.attrs.push(t[r]);
	},
	getFirstChild(e) {
		return e.childNodes[0];
	},
	getChildNodes(e) {
		return e.childNodes;
	},
	getParentNode(e) {
		return e.parentNode;
	},
	getAttrList(e) {
		return e.attrs;
	},
	getTagName(e) {
		return e.tagName;
	},
	getNamespaceURI(e) {
		return e.namespaceURI;
	},
	getTextNodeContent(e) {
		return e.value;
	},
	getCommentNodeContent(e) {
		return e.data;
	},
	getDocumentTypeNodeName(e) {
		return e.name;
	},
	getDocumentTypeNodePublicId(e) {
		return e.publicId;
	},
	getDocumentTypeNodeSystemId(e) {
		return e.systemId;
	},
	isTextNode(e) {
		return e.nodeName === "#text";
	},
	isCommentNode(e) {
		return e.nodeName === "#comment";
	},
	isDocumentTypeNode(e) {
		return e.nodeName === "#documentType";
	},
	isElementNode(e) {
		return Object.prototype.hasOwnProperty.call(e, "tagName");
	},
	setNodeSourceCodeLocation(e, t) {
		e.sourceCodeLocation = t;
	},
	getNodeSourceCodeLocation(e) {
		return e.sourceCodeLocation;
	},
	updateNodeSourceCodeLocation(e, t) {
		e.sourceCodeLocation = {
			...e.sourceCodeLocation,
			...t
		};
	}
}, Ad = "html", jd = "about:legacy-compat", Md = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd", Nd = /* @__PURE__ */ "+//silmaril//dtd html pro v0r11 19970101//,-//as//dtd html 3.0 aswedit + extensions//,-//advasoft ltd//dtd html 3.0 aswedit + extensions//,-//ietf//dtd html 2.0 level 1//,-//ietf//dtd html 2.0 level 2//,-//ietf//dtd html 2.0 strict level 1//,-//ietf//dtd html 2.0 strict level 2//,-//ietf//dtd html 2.0 strict//,-//ietf//dtd html 2.0//,-//ietf//dtd html 2.1e//,-//ietf//dtd html 3.0//,-//ietf//dtd html 3.2 final//,-//ietf//dtd html 3.2//,-//ietf//dtd html 3//,-//ietf//dtd html level 0//,-//ietf//dtd html level 1//,-//ietf//dtd html level 2//,-//ietf//dtd html level 3//,-//ietf//dtd html strict level 0//,-//ietf//dtd html strict level 1//,-//ietf//dtd html strict level 2//,-//ietf//dtd html strict level 3//,-//ietf//dtd html strict//,-//ietf//dtd html//,-//metrius//dtd metrius presentational//,-//microsoft//dtd internet explorer 2.0 html strict//,-//microsoft//dtd internet explorer 2.0 html//,-//microsoft//dtd internet explorer 2.0 tables//,-//microsoft//dtd internet explorer 3.0 html strict//,-//microsoft//dtd internet explorer 3.0 html//,-//microsoft//dtd internet explorer 3.0 tables//,-//netscape comm. corp.//dtd html//,-//netscape comm. corp.//dtd strict html//,-//o'reilly and associates//dtd html 2.0//,-//o'reilly and associates//dtd html extended 1.0//,-//o'reilly and associates//dtd html extended relaxed 1.0//,-//sq//dtd html 2.0 hotmetal + extensions//,-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//,-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//,-//spyglass//dtd html 2.0 extended//,-//sun microsystems corp.//dtd hotjava html//,-//sun microsystems corp.//dtd hotjava strict html//,-//w3c//dtd html 3 1995-03-24//,-//w3c//dtd html 3.2 draft//,-//w3c//dtd html 3.2 final//,-//w3c//dtd html 3.2//,-//w3c//dtd html 3.2s draft//,-//w3c//dtd html 4.0 frameset//,-//w3c//dtd html 4.0 transitional//,-//w3c//dtd html experimental 19960712//,-//w3c//dtd html experimental 970421//,-//w3c//dtd w3 html//,-//w3o//dtd w3 html 3.0//,-//webtechs//dtd mozilla html 2.0//,-//webtechs//dtd mozilla html//".split(","), Pd = [
	...Nd,
	"-//w3c//dtd html 4.01 frameset//",
	"-//w3c//dtd html 4.01 transitional//"
], Fd = /* @__PURE__ */ new Set([
	"-//w3o//dtd w3 html strict 3.0//en//",
	"-/w3c/dtd html 4.0 transitional/en",
	"html"
]), Id = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"], Ld = [
	...Id,
	"-//w3c//dtd html 4.01 frameset//",
	"-//w3c//dtd html 4.01 transitional//"
];
function Rd(e, t) {
	return t.some((t) => e.startsWith(t));
}
function zd(e) {
	return e.name === Ad && e.publicId === null && (e.systemId === null || e.systemId === jd);
}
function Bd(e) {
	if (e.name !== Ad) return Qu.QUIRKS;
	let { systemId: t } = e;
	if (t && t.toLowerCase() === Md) return Qu.QUIRKS;
	let { publicId: n } = e;
	if (n !== null) {
		if (n = n.toLowerCase(), Fd.has(n)) return Qu.QUIRKS;
		let e = t === null ? Pd : Nd;
		if (Rd(n, e)) return Qu.QUIRKS;
		if (e = t === null ? Id : Ld, Rd(n, e)) return Qu.LIMITED_QUIRKS;
	}
	return Qu.NO_QUIRKS;
}
//#endregion
//#region node_modules/parse5/dist/common/foreign-content.js
var Vd = {
	TEXT_HTML: "text/html",
	APPLICATION_XML: "application/xhtml+xml"
}, Hd = "definitionurl", Ud = "definitionURL", Wd = new Map((/* @__PURE__ */ "attributeName.attributeType.baseFrequency.baseProfile.calcMode.clipPathUnits.diffuseConstant.edgeMode.filterUnits.glyphRef.gradientTransform.gradientUnits.kernelMatrix.kernelUnitLength.keyPoints.keySplines.keyTimes.lengthAdjust.limitingConeAngle.markerHeight.markerUnits.markerWidth.maskContentUnits.maskUnits.numOctaves.pathLength.patternContentUnits.patternTransform.patternUnits.pointsAtX.pointsAtY.pointsAtZ.preserveAlpha.preserveAspectRatio.primitiveUnits.refX.refY.repeatCount.repeatDur.requiredExtensions.requiredFeatures.specularConstant.specularExponent.spreadMethod.startOffset.stdDeviation.stitchTiles.surfaceScale.systemLanguage.tableValues.targetX.targetY.textLength.viewBox.viewTarget.xChannelSelector.yChannelSelector.zoomAndPan".split(".")).map((e) => [e.toLowerCase(), e])), Gd = /* @__PURE__ */ new Map([
	["xlink:actuate", {
		prefix: "xlink",
		name: "actuate",
		namespace: q.XLINK
	}],
	["xlink:arcrole", {
		prefix: "xlink",
		name: "arcrole",
		namespace: q.XLINK
	}],
	["xlink:href", {
		prefix: "xlink",
		name: "href",
		namespace: q.XLINK
	}],
	["xlink:role", {
		prefix: "xlink",
		name: "role",
		namespace: q.XLINK
	}],
	["xlink:show", {
		prefix: "xlink",
		name: "show",
		namespace: q.XLINK
	}],
	["xlink:title", {
		prefix: "xlink",
		name: "title",
		namespace: q.XLINK
	}],
	["xlink:type", {
		prefix: "xlink",
		name: "type",
		namespace: q.XLINK
	}],
	["xml:lang", {
		prefix: "xml",
		name: "lang",
		namespace: q.XML
	}],
	["xml:space", {
		prefix: "xml",
		name: "space",
		namespace: q.XML
	}],
	["xmlns", {
		prefix: "",
		name: "xmlns",
		namespace: q.XMLNS
	}],
	["xmlns:xlink", {
		prefix: "xmlns",
		name: "xlink",
		namespace: q.XMLNS
	}]
]), Kd = new Map((/* @__PURE__ */ "altGlyph.altGlyphDef.altGlyphItem.animateColor.animateMotion.animateTransform.clipPath.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.foreignObject.glyphRef.linearGradient.radialGradient.textPath".split(".")).map((e) => [e.toLowerCase(), e])), qd = /* @__PURE__ */ new Set([
	Y.B,
	Y.BIG,
	Y.BLOCKQUOTE,
	Y.BODY,
	Y.BR,
	Y.CENTER,
	Y.CODE,
	Y.DD,
	Y.DIV,
	Y.DL,
	Y.DT,
	Y.EM,
	Y.EMBED,
	Y.H1,
	Y.H2,
	Y.H3,
	Y.H4,
	Y.H5,
	Y.H6,
	Y.HEAD,
	Y.HR,
	Y.I,
	Y.IMG,
	Y.LI,
	Y.LISTING,
	Y.MENU,
	Y.META,
	Y.NOBR,
	Y.OL,
	Y.P,
	Y.PRE,
	Y.RUBY,
	Y.S,
	Y.SMALL,
	Y.SPAN,
	Y.STRONG,
	Y.STRIKE,
	Y.SUB,
	Y.SUP,
	Y.TABLE,
	Y.TT,
	Y.U,
	Y.UL,
	Y.VAR
]);
function Jd(e) {
	let t = e.tagID;
	return t === Y.FONT && e.attrs.some(({ name: e }) => e === Zu.COLOR || e === Zu.SIZE || e === Zu.FACE) || qd.has(t);
}
function Yd(e) {
	for (let t = 0; t < e.attrs.length; t++) if (e.attrs[t].name === Hd) {
		e.attrs[t].name = Ud;
		break;
	}
}
function Xd(e) {
	for (let t = 0; t < e.attrs.length; t++) {
		let n = Wd.get(e.attrs[t].name);
		n != null && (e.attrs[t].name = n);
	}
}
function Zd(e) {
	for (let t = 0; t < e.attrs.length; t++) {
		let n = Gd.get(e.attrs[t].name);
		n && (e.attrs[t].prefix = n.prefix, e.attrs[t].name = n.name, e.attrs[t].namespace = n.namespace);
	}
}
function Qd(e) {
	let t = Kd.get(e.tagName);
	t != null && (e.tagName = t, e.tagID = ed(e.tagName));
}
function $d(e, t) {
	return t === q.MATHML && (e === Y.MI || e === Y.MO || e === Y.MN || e === Y.MS || e === Y.MTEXT);
}
function ef(e, t, n) {
	if (t === q.MATHML && e === Y.ANNOTATION_XML) {
		for (let e = 0; e < n.length; e++) if (n[e].name === Zu.ENCODING) {
			let t = n[e].value.toLowerCase();
			return t === Vd.TEXT_HTML || t === Vd.APPLICATION_XML;
		}
	}
	return t === q.SVG && (e === Y.FOREIGN_OBJECT || e === Y.DESC || e === Y.TITLE);
}
function tf(e, t, n, r) {
	return (!r || r === q.HTML) && ef(e, t, n) || (!r || r === q.MATHML) && $d(e, t);
}
//#endregion
//#region node_modules/parse5/dist/parser/index.js
var nf = "hidden", rf = 8, af = 3, $;
(function(e) {
	e[e.INITIAL = 0] = "INITIAL", e[e.BEFORE_HTML = 1] = "BEFORE_HTML", e[e.BEFORE_HEAD = 2] = "BEFORE_HEAD", e[e.IN_HEAD = 3] = "IN_HEAD", e[e.IN_HEAD_NO_SCRIPT = 4] = "IN_HEAD_NO_SCRIPT", e[e.AFTER_HEAD = 5] = "AFTER_HEAD", e[e.IN_BODY = 6] = "IN_BODY", e[e.TEXT = 7] = "TEXT", e[e.IN_TABLE = 8] = "IN_TABLE", e[e.IN_TABLE_TEXT = 9] = "IN_TABLE_TEXT", e[e.IN_CAPTION = 10] = "IN_CAPTION", e[e.IN_COLUMN_GROUP = 11] = "IN_COLUMN_GROUP", e[e.IN_TABLE_BODY = 12] = "IN_TABLE_BODY", e[e.IN_ROW = 13] = "IN_ROW", e[e.IN_CELL = 14] = "IN_CELL", e[e.IN_SELECT = 15] = "IN_SELECT", e[e.IN_SELECT_IN_TABLE = 16] = "IN_SELECT_IN_TABLE", e[e.IN_TEMPLATE = 17] = "IN_TEMPLATE", e[e.AFTER_BODY = 18] = "AFTER_BODY", e[e.IN_FRAMESET = 19] = "IN_FRAMESET", e[e.AFTER_FRAMESET = 20] = "AFTER_FRAMESET", e[e.AFTER_AFTER_BODY = 21] = "AFTER_AFTER_BODY", e[e.AFTER_AFTER_FRAMESET = 22] = "AFTER_AFTER_FRAMESET";
})($ ||= {});
var of = {
	startLine: -1,
	startCol: -1,
	startOffset: -1,
	endLine: -1,
	endCol: -1,
	endOffset: -1
}, sf = /* @__PURE__ */ new Set([
	Y.TABLE,
	Y.TBODY,
	Y.TFOOT,
	Y.THEAD,
	Y.TR
]), cf = {
	scriptingEnabled: !0,
	sourceCodeLocationInfo: !1,
	treeAdapter: kd,
	onParseError: null
}, lf = class {
	constructor(e, t, n = null, r = null) {
		this.fragmentContext = n, this.scriptHandler = r, this.currentToken = null, this.stopped = !1, this.insertionMode = $.INITIAL, this.originalInsertionMode = $.INITIAL, this.headElement = null, this.formElement = null, this.currentNotInHTML = !1, this.tmplInsertionModeStack = [], this.pendingCharacterTokens = [], this.hasNonWhitespacePendingCharacterToken = !1, this.framesetOk = !0, this.skipNextNewLine = !1, this.fosterParentingEnabled = !1, this.options = {
			...cf,
			...e
		}, this.treeAdapter = this.options.treeAdapter, this.onParseError = this.options.onParseError, this.onParseError && (this.options.sourceCodeLocationInfo = !0), this.document = t ?? this.treeAdapter.createDocument(), this.tokenizer = new fd(this.options, this), this.activeFormattingElements = new Od(this.treeAdapter), this.fragmentContextID = n ? ed(this.treeAdapter.getTagName(n)) : Y.UNKNOWN, this._setContextModes(n ?? this.document, this.fragmentContextID), this.openElements = new wd(this.document, this.treeAdapter, this);
	}
	static parse(e, t) {
		let n = new this(t);
		return n.tokenizer.write(e, !0), n.document;
	}
	static getFragmentParser(e, t) {
		let n = {
			...cf,
			...t
		};
		e ??= n.treeAdapter.createElement(J.TEMPLATE, q.HTML, []);
		let r = n.treeAdapter.createElement("documentmock", q.HTML, []), i = new this(n, r, e);
		return i.fragmentContextID === Y.TEMPLATE && i.tmplInsertionModeStack.unshift($.IN_TEMPLATE), i._initTokenizerForFragmentParsing(), i._insertFakeRootElement(), i._resetInsertionMode(), i._findFormInFragmentContext(), i;
	}
	getFragment() {
		let e = this.treeAdapter.getFirstChild(this.document), t = this.treeAdapter.createDocumentFragment();
		return this._adoptNodes(e, t), t;
	}
	_err(e, t, n) {
		if (!this.onParseError) return;
		let r = e.location ?? of, i = {
			code: t,
			startLine: r.startLine,
			startCol: r.startCol,
			startOffset: r.startOffset,
			endLine: n ? r.startLine : r.endLine,
			endCol: n ? r.startCol : r.endCol,
			endOffset: n ? r.startOffset : r.endOffset
		};
		this.onParseError(i);
	}
	onItemPush(e, t, n) {
		var r, i;
		(i = (r = this.treeAdapter).onItemPush) == null || i.call(r, e), n && this.openElements.stackTop > 0 && this._setContextModes(e, t);
	}
	onItemPop(e, t) {
		var n, r;
		if (this.options.sourceCodeLocationInfo && this._setEndLocation(e, this.currentToken), (r = (n = this.treeAdapter).onItemPop) == null || r.call(n, e, this.openElements.current), t) {
			let e, t;
			this.openElements.stackTop === 0 && this.fragmentContext ? (e = this.fragmentContext, t = this.fragmentContextID) : {current: e, currentTagId: t} = this.openElements, this._setContextModes(e, t);
		}
	}
	_setContextModes(e, t) {
		let n = e === this.document || e && this.treeAdapter.getNamespaceURI(e) === q.HTML;
		this.currentNotInHTML = !n, this.tokenizer.inForeignNode = !n && e !== void 0 && t !== void 0 && !this._isIntegrationPoint(t, e);
	}
	_switchToTextParsing(e, t) {
		this._insertElement(e, q.HTML), this.tokenizer.state = t, this.originalInsertionMode = this.insertionMode, this.insertionMode = $.TEXT;
	}
	switchToPlaintextParsing() {
		this.insertionMode = $.TEXT, this.originalInsertionMode = $.IN_BODY, this.tokenizer.state = Q.PLAINTEXT;
	}
	_getAdjustedCurrentElement() {
		return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
	}
	_findFormInFragmentContext() {
		let e = this.fragmentContext;
		for (; e;) {
			if (this.treeAdapter.getTagName(e) === J.FORM) {
				this.formElement = e;
				break;
			}
			e = this.treeAdapter.getParentNode(e);
		}
	}
	_initTokenizerForFragmentParsing() {
		if (this.fragmentContext && this.treeAdapter.getNamespaceURI(this.fragmentContext) === q.HTML) switch (this.fragmentContextID) {
			case Y.TITLE:
			case Y.TEXTAREA:
				this.tokenizer.state = Q.RCDATA;
				break;
			case Y.STYLE:
			case Y.XMP:
			case Y.IFRAME:
			case Y.NOEMBED:
			case Y.NOFRAMES:
			case Y.NOSCRIPT:
				this.tokenizer.state = Q.RAWTEXT;
				break;
			case Y.SCRIPT:
				this.tokenizer.state = Q.SCRIPT_DATA;
				break;
			case Y.PLAINTEXT: this.tokenizer.state = Q.PLAINTEXT;
		}
	}
	_setDocumentType(e) {
		let t = e.name || "", n = e.publicId || "", r = e.systemId || "";
		if (this.treeAdapter.setDocumentType(this.document, t, n, r), e.location) {
			let t = this.treeAdapter.getChildNodes(this.document).find((e) => this.treeAdapter.isDocumentTypeNode(e));
			t && this.treeAdapter.setNodeSourceCodeLocation(t, e.location);
		}
	}
	_attachElementToTree(e, t) {
		if (this.options.sourceCodeLocationInfo) {
			let n = t && {
				...t,
				startTag: t
			};
			this.treeAdapter.setNodeSourceCodeLocation(e, n);
		}
		if (this._shouldFosterParentOnInsertion()) this._fosterParentElement(e);
		else {
			let t = this.openElements.currentTmplContentOrNode;
			this.treeAdapter.appendChild(t ?? this.document, e);
		}
	}
	_appendElement(e, t) {
		let n = this.treeAdapter.createElement(e.tagName, t, e.attrs);
		this._attachElementToTree(n, e.location);
	}
	_insertElement(e, t) {
		let n = this.treeAdapter.createElement(e.tagName, t, e.attrs);
		this._attachElementToTree(n, e.location), this.openElements.push(n, e.tagID);
	}
	_insertFakeElement(e, t) {
		let n = this.treeAdapter.createElement(e, q.HTML, []);
		this._attachElementToTree(n, null), this.openElements.push(n, t);
	}
	_insertTemplate(e) {
		let t = this.treeAdapter.createElement(e.tagName, q.HTML, e.attrs), n = this.treeAdapter.createDocumentFragment();
		this.treeAdapter.setTemplateContent(t, n), this._attachElementToTree(t, e.location), this.openElements.push(t, e.tagID), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(n, null);
	}
	_insertFakeRootElement() {
		let e = this.treeAdapter.createElement(J.HTML, q.HTML, []);
		this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(e, null), this.treeAdapter.appendChild(this.openElements.current, e), this.openElements.push(e, Y.HTML);
	}
	_appendCommentNode(e, t) {
		let n = this.treeAdapter.createCommentNode(e.data);
		this.treeAdapter.appendChild(t, n), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(n, e.location);
	}
	_insertCharacters(e) {
		let t, n;
		if (this._shouldFosterParentOnInsertion() ? ({parent: t, beforeElement: n} = this._findFosterParentingLocation(), n ? this.treeAdapter.insertTextBefore(t, e.chars, n) : this.treeAdapter.insertText(t, e.chars)) : (t = this.openElements.currentTmplContentOrNode, this.treeAdapter.insertText(t, e.chars)), !e.location) return;
		let r = this.treeAdapter.getChildNodes(t), i = r[(n ? r.lastIndexOf(n) : r.length) - 1];
		if (this.treeAdapter.getNodeSourceCodeLocation(i)) {
			let { endLine: t, endCol: n, endOffset: r } = e.location;
			this.treeAdapter.updateNodeSourceCodeLocation(i, {
				endLine: t,
				endCol: n,
				endOffset: r
			});
		} else this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(i, e.location);
	}
	_adoptNodes(e, t) {
		for (let n = this.treeAdapter.getFirstChild(e); n; n = this.treeAdapter.getFirstChild(e)) this.treeAdapter.detachNode(n), this.treeAdapter.appendChild(t, n);
	}
	_setEndLocation(e, t) {
		if (this.treeAdapter.getNodeSourceCodeLocation(e) && t.location) {
			let n = t.location, r = this.treeAdapter.getTagName(e), i = t.type === K.END_TAG && r === t.tagName ? {
				endTag: { ...n },
				endLine: n.endLine,
				endCol: n.endCol,
				endOffset: n.endOffset
			} : {
				endLine: n.startLine,
				endCol: n.startCol,
				endOffset: n.startOffset
			};
			this.treeAdapter.updateNodeSourceCodeLocation(e, i);
		}
	}
	shouldProcessStartTagTokenInForeignContent(e) {
		if (!this.currentNotInHTML) return !1;
		let t, n;
		return this.openElements.stackTop === 0 && this.fragmentContext ? (t = this.fragmentContext, n = this.fragmentContextID) : {current: t, currentTagId: n} = this.openElements, e.tagID === Y.SVG && this.treeAdapter.getTagName(t) === J.ANNOTATION_XML && this.treeAdapter.getNamespaceURI(t) === q.MATHML ? !1 : this.tokenizer.inForeignNode || (e.tagID === Y.MGLYPH || e.tagID === Y.MALIGNMARK) && n !== void 0 && !this._isIntegrationPoint(n, t, q.HTML);
	}
	_processToken(e) {
		switch (e.type) {
			case K.CHARACTER:
				this.onCharacter(e);
				break;
			case K.NULL_CHARACTER:
				this.onNullCharacter(e);
				break;
			case K.COMMENT:
				this.onComment(e);
				break;
			case K.DOCTYPE:
				this.onDoctype(e);
				break;
			case K.START_TAG:
				this._processStartTag(e);
				break;
			case K.END_TAG:
				this.onEndTag(e);
				break;
			case K.EOF:
				this.onEof(e);
				break;
			case K.WHITESPACE_CHARACTER: this.onWhitespaceCharacter(e);
		}
	}
	_isIntegrationPoint(e, t, n) {
		return tf(e, this.treeAdapter.getNamespaceURI(t), this.treeAdapter.getAttrList(t), n);
	}
	_reconstructActiveFormattingElements() {
		let e = this.activeFormattingElements.entries.length;
		if (e) {
			let t = this.activeFormattingElements.entries.findIndex((e) => e.type === Ed.Marker || this.openElements.contains(e.element)), n = t === -1 ? e - 1 : t - 1;
			for (let e = n; e >= 0; e--) {
				let t = this.activeFormattingElements.entries[e];
				this._insertElement(t.token, this.treeAdapter.getNamespaceURI(t.element)), t.element = this.openElements.current;
			}
		}
	}
	_closeTableCell() {
		this.openElements.generateImpliedEndTags(), this.openElements.popUntilTableCellPopped(), this.activeFormattingElements.clearToLastMarker(), this.insertionMode = $.IN_ROW;
	}
	_closePElement() {
		this.openElements.generateImpliedEndTagsWithExclusion(Y.P), this.openElements.popUntilTagNamePopped(Y.P);
	}
	_resetInsertionMode() {
		for (let e = this.openElements.stackTop; e >= 0; e--) switch (e === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[e]) {
			case Y.TR:
				this.insertionMode = $.IN_ROW;
				return;
			case Y.TBODY:
			case Y.THEAD:
			case Y.TFOOT:
				this.insertionMode = $.IN_TABLE_BODY;
				return;
			case Y.CAPTION:
				this.insertionMode = $.IN_CAPTION;
				return;
			case Y.COLGROUP:
				this.insertionMode = $.IN_COLUMN_GROUP;
				return;
			case Y.TABLE:
				this.insertionMode = $.IN_TABLE;
				return;
			case Y.BODY:
				this.insertionMode = $.IN_BODY;
				return;
			case Y.FRAMESET:
				this.insertionMode = $.IN_FRAMESET;
				return;
			case Y.SELECT:
				this._resetInsertionModeForSelect(e);
				return;
			case Y.TEMPLATE:
				this.insertionMode = this.tmplInsertionModeStack[0];
				return;
			case Y.HTML:
				this.insertionMode = this.headElement ? $.AFTER_HEAD : $.BEFORE_HEAD;
				return;
			case Y.TD:
			case Y.TH:
				if (e > 0) {
					this.insertionMode = $.IN_CELL;
					return;
				}
				break;
			case Y.HEAD: if (e > 0) {
				this.insertionMode = $.IN_HEAD;
				return;
			}
		}
		this.insertionMode = $.IN_BODY;
	}
	_resetInsertionModeForSelect(e) {
		if (e > 0) for (let t = e - 1; t > 0; t--) {
			let e = this.openElements.tagIDs[t];
			if (e === Y.TEMPLATE) break;
			if (e === Y.TABLE) {
				this.insertionMode = $.IN_SELECT_IN_TABLE;
				return;
			}
		}
		this.insertionMode = $.IN_SELECT;
	}
	_isElementCausesFosterParenting(e) {
		return sf.has(e);
	}
	_shouldFosterParentOnInsertion() {
		return this.fosterParentingEnabled && this.openElements.currentTagId !== void 0 && this._isElementCausesFosterParenting(this.openElements.currentTagId);
	}
	_findFosterParentingLocation() {
		for (let e = this.openElements.stackTop; e >= 0; e--) {
			let t = this.openElements.items[e];
			switch (this.openElements.tagIDs[e]) {
				case Y.TEMPLATE:
					if (this.treeAdapter.getNamespaceURI(t) === q.HTML) return {
						parent: this.treeAdapter.getTemplateContent(t),
						beforeElement: null
					};
					break;
				case Y.TABLE: {
					let n = this.treeAdapter.getParentNode(t);
					return n ? {
						parent: n,
						beforeElement: t
					} : {
						parent: this.openElements.items[e - 1],
						beforeElement: null
					};
				}
			}
		}
		return {
			parent: this.openElements.items[0],
			beforeElement: null
		};
	}
	_fosterParentElement(e) {
		let t = this._findFosterParentingLocation();
		t.beforeElement ? this.treeAdapter.insertBefore(t.parent, e, t.beforeElement) : this.treeAdapter.appendChild(t.parent, e);
	}
	_isSpecialElement(e, t) {
		return td[this.treeAdapter.getNamespaceURI(e)].has(t);
	}
	onCharacter(e) {
		if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
			Dm(this, e);
			return;
		}
		switch (this.insertionMode) {
			case $.INITIAL:
				Sf(this, e);
				break;
			case $.BEFORE_HTML:
				Tf(this, e);
				break;
			case $.BEFORE_HEAD:
				Of(this, e);
				break;
			case $.IN_HEAD:
				Mf(this, e);
				break;
			case $.IN_HEAD_NO_SCRIPT:
				Ff(this, e);
				break;
			case $.AFTER_HEAD:
				Rf(this, e);
				break;
			case $.IN_BODY:
			case $.IN_CAPTION:
			case $.IN_CELL:
			case $.IN_TEMPLATE:
				Vf(this, e);
				break;
			case $.TEXT:
			case $.IN_SELECT:
			case $.IN_SELECT_IN_TABLE:
				this._insertCharacters(e);
				break;
			case $.IN_TABLE:
			case $.IN_TABLE_BODY:
			case $.IN_ROW:
				Ip(this, e);
				break;
			case $.IN_TABLE_TEXT:
				Yp(this, e);
				break;
			case $.IN_COLUMN_GROUP:
				nm(this, e);
				break;
			case $.AFTER_BODY:
				vm(this, e);
				break;
			case $.AFTER_AFTER_BODY: wm(this, e);
		}
	}
	onNullCharacter(e) {
		if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
			Em(this, e);
			return;
		}
		switch (this.insertionMode) {
			case $.INITIAL:
				Sf(this, e);
				break;
			case $.BEFORE_HTML:
				Tf(this, e);
				break;
			case $.BEFORE_HEAD:
				Of(this, e);
				break;
			case $.IN_HEAD:
				Mf(this, e);
				break;
			case $.IN_HEAD_NO_SCRIPT:
				Ff(this, e);
				break;
			case $.AFTER_HEAD:
				Rf(this, e);
				break;
			case $.TEXT:
				this._insertCharacters(e);
				break;
			case $.IN_TABLE:
			case $.IN_TABLE_BODY:
			case $.IN_ROW:
				Ip(this, e);
				break;
			case $.IN_COLUMN_GROUP:
				nm(this, e);
				break;
			case $.AFTER_BODY:
				vm(this, e);
				break;
			case $.AFTER_AFTER_BODY: wm(this, e);
		}
	}
	onComment(e) {
		if (this.skipNextNewLine = !1, this.currentNotInHTML) {
			_f(this, e);
			return;
		}
		switch (this.insertionMode) {
			case $.INITIAL:
			case $.BEFORE_HTML:
			case $.BEFORE_HEAD:
			case $.IN_HEAD:
			case $.IN_HEAD_NO_SCRIPT:
			case $.AFTER_HEAD:
			case $.IN_BODY:
			case $.IN_TABLE:
			case $.IN_CAPTION:
			case $.IN_COLUMN_GROUP:
			case $.IN_TABLE_BODY:
			case $.IN_ROW:
			case $.IN_CELL:
			case $.IN_SELECT:
			case $.IN_SELECT_IN_TABLE:
			case $.IN_TEMPLATE:
			case $.IN_FRAMESET:
			case $.AFTER_FRAMESET:
				_f(this, e);
				break;
			case $.IN_TABLE_TEXT:
				Xp(this, e);
				break;
			case $.AFTER_BODY:
				vf(this, e);
				break;
			case $.AFTER_AFTER_BODY:
			case $.AFTER_AFTER_FRAMESET: yf(this, e);
		}
	}
	onDoctype(e) {
		switch (this.skipNextNewLine = !1, this.insertionMode) {
			case $.INITIAL:
				xf(this, e);
				break;
			case $.BEFORE_HEAD:
			case $.IN_HEAD:
			case $.IN_HEAD_NO_SCRIPT:
			case $.AFTER_HEAD:
				this._err(e, G.misplacedDoctype);
				break;
			case $.IN_TABLE_TEXT: Xp(this, e);
		}
	}
	onStartTag(e) {
		this.skipNextNewLine = !1, this.currentToken = e, this._processStartTag(e), e.selfClosing && !e.ackSelfClosing && this._err(e, G.nonVoidHtmlElementStartTagWithTrailingSolidus);
	}
	_processStartTag(e) {
		this.shouldProcessStartTagTokenInForeignContent(e) ? km(this, e) : this._startTagOutsideForeignContent(e);
	}
	_startTagOutsideForeignContent(e) {
		switch (this.insertionMode) {
			case $.INITIAL:
				Sf(this, e);
				break;
			case $.BEFORE_HTML:
				Cf(this, e);
				break;
			case $.BEFORE_HEAD:
				Ef(this, e);
				break;
			case $.IN_HEAD:
				kf(this, e);
				break;
			case $.IN_HEAD_NO_SCRIPT:
				Nf(this, e);
				break;
			case $.AFTER_HEAD:
				If(this, e);
				break;
			case $.IN_BODY:
				bp(this, e);
				break;
			case $.IN_TABLE:
				Gp(this, e);
				break;
			case $.IN_TABLE_TEXT:
				Xp(this, e);
				break;
			case $.IN_CAPTION:
				Qp(this, e);
				break;
			case $.IN_COLUMN_GROUP:
				em(this, e);
				break;
			case $.IN_TABLE_BODY:
				rm(this, e);
				break;
			case $.IN_ROW:
				am(this, e);
				break;
			case $.IN_CELL:
				sm(this, e);
				break;
			case $.IN_SELECT:
				lm(this, e);
				break;
			case $.IN_SELECT_IN_TABLE:
				dm(this, e);
				break;
			case $.IN_TEMPLATE:
				pm(this, e);
				break;
			case $.AFTER_BODY:
				gm(this, e);
				break;
			case $.IN_FRAMESET:
				ym(this, e);
				break;
			case $.AFTER_FRAMESET:
				xm(this, e);
				break;
			case $.AFTER_AFTER_BODY:
				Cm(this, e);
				break;
			case $.AFTER_AFTER_FRAMESET: Tm(this, e);
		}
	}
	onEndTag(e) {
		this.skipNextNewLine = !1, this.currentToken = e, this.currentNotInHTML ? Am(this, e) : this._endTagOutsideForeignContent(e);
	}
	_endTagOutsideForeignContent(e) {
		switch (this.insertionMode) {
			case $.INITIAL:
				Sf(this, e);
				break;
			case $.BEFORE_HTML:
				wf(this, e);
				break;
			case $.BEFORE_HEAD:
				Df(this, e);
				break;
			case $.IN_HEAD:
				Af(this, e);
				break;
			case $.IN_HEAD_NO_SCRIPT:
				Pf(this, e);
				break;
			case $.AFTER_HEAD:
				Lf(this, e);
				break;
			case $.IN_BODY:
				Mp(this, e);
				break;
			case $.TEXT:
				Pp(this, e);
				break;
			case $.IN_TABLE:
				Kp(this, e);
				break;
			case $.IN_TABLE_TEXT:
				Xp(this, e);
				break;
			case $.IN_CAPTION:
				$p(this, e);
				break;
			case $.IN_COLUMN_GROUP:
				tm(this, e);
				break;
			case $.IN_TABLE_BODY:
				im(this, e);
				break;
			case $.IN_ROW:
				om(this, e);
				break;
			case $.IN_CELL:
				cm(this, e);
				break;
			case $.IN_SELECT:
				um(this, e);
				break;
			case $.IN_SELECT_IN_TABLE:
				fm(this, e);
				break;
			case $.IN_TEMPLATE:
				mm(this, e);
				break;
			case $.AFTER_BODY:
				_m(this, e);
				break;
			case $.IN_FRAMESET:
				bm(this, e);
				break;
			case $.AFTER_FRAMESET:
				Sm(this, e);
				break;
			case $.AFTER_AFTER_BODY: wm(this, e);
		}
	}
	onEof(e) {
		switch (this.insertionMode) {
			case $.INITIAL:
				Sf(this, e);
				break;
			case $.BEFORE_HTML:
				Tf(this, e);
				break;
			case $.BEFORE_HEAD:
				Of(this, e);
				break;
			case $.IN_HEAD:
				Mf(this, e);
				break;
			case $.IN_HEAD_NO_SCRIPT:
				Ff(this, e);
				break;
			case $.AFTER_HEAD:
				Rf(this, e);
				break;
			case $.IN_BODY:
			case $.IN_TABLE:
			case $.IN_CAPTION:
			case $.IN_COLUMN_GROUP:
			case $.IN_TABLE_BODY:
			case $.IN_ROW:
			case $.IN_CELL:
			case $.IN_SELECT:
			case $.IN_SELECT_IN_TABLE:
				Np(this, e);
				break;
			case $.TEXT:
				Fp(this, e);
				break;
			case $.IN_TABLE_TEXT:
				Xp(this, e);
				break;
			case $.IN_TEMPLATE:
				hm(this, e);
				break;
			case $.AFTER_BODY:
			case $.IN_FRAMESET:
			case $.AFTER_FRAMESET:
			case $.AFTER_AFTER_BODY:
			case $.AFTER_AFTER_FRAMESET: bf(this, e);
		}
	}
	onWhitespaceCharacter(e) {
		if (this.skipNextNewLine && (this.skipNextNewLine = !1, e.chars.charCodeAt(0) === W.LINE_FEED)) {
			if (e.chars.length === 1) return;
			e.chars = e.chars.substr(1);
		}
		if (this.tokenizer.inForeignNode) {
			this._insertCharacters(e);
			return;
		}
		switch (this.insertionMode) {
			case $.IN_HEAD:
			case $.IN_HEAD_NO_SCRIPT:
			case $.AFTER_HEAD:
			case $.TEXT:
			case $.IN_COLUMN_GROUP:
			case $.IN_SELECT:
			case $.IN_SELECT_IN_TABLE:
			case $.IN_FRAMESET:
			case $.AFTER_FRAMESET:
				this._insertCharacters(e);
				break;
			case $.IN_BODY:
			case $.IN_CAPTION:
			case $.IN_CELL:
			case $.IN_TEMPLATE:
			case $.AFTER_BODY:
			case $.AFTER_AFTER_BODY:
			case $.AFTER_AFTER_FRAMESET:
				Bf(this, e);
				break;
			case $.IN_TABLE:
			case $.IN_TABLE_BODY:
			case $.IN_ROW:
				Ip(this, e);
				break;
			case $.IN_TABLE_TEXT: Jp(this, e);
		}
	}
};
function uf(e, t) {
	let n = e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);
	return n ? e.openElements.contains(n.element) ? e.openElements.hasInScope(t.tagID) || (n = null) : (e.activeFormattingElements.removeEntry(n), n = null) : jp(e, t), n;
}
function df(e, t) {
	let n = null, r = e.openElements.stackTop;
	for (; r >= 0; r--) {
		let i = e.openElements.items[r];
		if (i === t.element) break;
		e._isSpecialElement(i, e.openElements.tagIDs[r]) && (n = i);
	}
	return n || (e.openElements.shortenToLength(Math.max(r, 0)), e.activeFormattingElements.removeEntry(t)), n;
}
function ff(e, t, n) {
	let r = t, i = e.openElements.getCommonAncestor(t);
	for (let a = 0, o = i; o !== n; a++, o = i) {
		i = e.openElements.getCommonAncestor(o);
		let n = e.activeFormattingElements.getElementEntry(o), s = n && a >= af;
		!n || s ? (s && e.activeFormattingElements.removeEntry(n), e.openElements.remove(o)) : (o = pf(e, n), r === t && (e.activeFormattingElements.bookmark = n), e.treeAdapter.detachNode(r), e.treeAdapter.appendChild(o, r), r = o);
	}
	return r;
}
function pf(e, t) {
	let n = e.treeAdapter.getNamespaceURI(t.element), r = e.treeAdapter.createElement(t.token.tagName, n, t.token.attrs);
	return e.openElements.replace(t.element, r), t.element = r, r;
}
function mf(e, t, n) {
	let r = ed(e.treeAdapter.getTagName(t));
	if (e._isElementCausesFosterParenting(r)) e._fosterParentElement(n);
	else {
		let i = e.treeAdapter.getNamespaceURI(t);
		r === Y.TEMPLATE && i === q.HTML && (t = e.treeAdapter.getTemplateContent(t)), e.treeAdapter.appendChild(t, n);
	}
}
function hf(e, t, n) {
	let r = e.treeAdapter.getNamespaceURI(n.element), { token: i } = n, a = e.treeAdapter.createElement(i.tagName, r, i.attrs);
	e._adoptNodes(t, a), e.treeAdapter.appendChild(t, a), e.activeFormattingElements.insertElementAfterBookmark(a, i), e.activeFormattingElements.removeEntry(n), e.openElements.remove(n.element), e.openElements.insertAfter(t, a, i.tagID);
}
function gf(e, t) {
	for (let n = 0; n < rf; n++) {
		let n = uf(e, t);
		if (!n) break;
		let r = df(e, n);
		if (!r) break;
		e.activeFormattingElements.bookmark = n;
		let i = ff(e, r, n.element), a = e.openElements.getCommonAncestor(n.element);
		e.treeAdapter.detachNode(i), a && mf(e, a, i), hf(e, r, n);
	}
}
function _f(e, t) {
	e._appendCommentNode(t, e.openElements.currentTmplContentOrNode);
}
function vf(e, t) {
	e._appendCommentNode(t, e.openElements.items[0]);
}
function yf(e, t) {
	e._appendCommentNode(t, e.document);
}
function bf(e, t) {
	if (e.stopped = !0, t.location) {
		let n = e.fragmentContext ? 0 : 2;
		for (let r = e.openElements.stackTop; r >= n; r--) e._setEndLocation(e.openElements.items[r], t);
		if (!e.fragmentContext && e.openElements.stackTop >= 0) {
			let n = e.openElements.items[0], r = e.treeAdapter.getNodeSourceCodeLocation(n);
			if (r && !r.endTag && (e._setEndLocation(n, t), e.openElements.stackTop >= 1)) {
				let n = e.openElements.items[1], r = e.treeAdapter.getNodeSourceCodeLocation(n);
				r && !r.endTag && e._setEndLocation(n, t);
			}
		}
	}
}
function xf(e, t) {
	e._setDocumentType(t);
	let n = t.forceQuirks ? Qu.QUIRKS : Bd(t);
	zd(t) || e._err(t, G.nonConformingDoctype), e.treeAdapter.setDocumentMode(e.document, n), e.insertionMode = $.BEFORE_HTML;
}
function Sf(e, t) {
	e._err(t, G.missingDoctype, !0), e.treeAdapter.setDocumentMode(e.document, Qu.QUIRKS), e.insertionMode = $.BEFORE_HTML, e._processToken(t);
}
function Cf(e, t) {
	t.tagID === Y.HTML ? (e._insertElement(t, q.HTML), e.insertionMode = $.BEFORE_HEAD) : Tf(e, t);
}
function wf(e, t) {
	let n = t.tagID;
	(n === Y.HTML || n === Y.HEAD || n === Y.BODY || n === Y.BR) && Tf(e, t);
}
function Tf(e, t) {
	e._insertFakeRootElement(), e.insertionMode = $.BEFORE_HEAD, e._processToken(t);
}
function Ef(e, t) {
	switch (t.tagID) {
		case Y.HTML:
			bp(e, t);
			break;
		case Y.HEAD:
			e._insertElement(t, q.HTML), e.headElement = e.openElements.current, e.insertionMode = $.IN_HEAD;
			break;
		default: Of(e, t);
	}
}
function Df(e, t) {
	let n = t.tagID;
	n === Y.HEAD || n === Y.BODY || n === Y.HTML || n === Y.BR ? Of(e, t) : e._err(t, G.endTagWithoutMatchingOpenElement);
}
function Of(e, t) {
	e._insertFakeElement(J.HEAD, Y.HEAD), e.headElement = e.openElements.current, e.insertionMode = $.IN_HEAD, e._processToken(t);
}
function kf(e, t) {
	switch (t.tagID) {
		case Y.HTML:
			bp(e, t);
			break;
		case Y.BASE:
		case Y.BASEFONT:
		case Y.BGSOUND:
		case Y.LINK:
		case Y.META:
			e._appendElement(t, q.HTML), t.ackSelfClosing = !0;
			break;
		case Y.TITLE:
			e._switchToTextParsing(t, Q.RCDATA);
			break;
		case Y.NOSCRIPT:
			e.options.scriptingEnabled ? e._switchToTextParsing(t, Q.RAWTEXT) : (e._insertElement(t, q.HTML), e.insertionMode = $.IN_HEAD_NO_SCRIPT);
			break;
		case Y.NOFRAMES:
		case Y.STYLE:
			e._switchToTextParsing(t, Q.RAWTEXT);
			break;
		case Y.SCRIPT:
			e._switchToTextParsing(t, Q.SCRIPT_DATA);
			break;
		case Y.TEMPLATE:
			e._insertTemplate(t), e.activeFormattingElements.insertMarker(), e.framesetOk = !1, e.insertionMode = $.IN_TEMPLATE, e.tmplInsertionModeStack.unshift($.IN_TEMPLATE);
			break;
		case Y.HEAD:
			e._err(t, G.misplacedStartTagForHeadElement);
			break;
		default: Mf(e, t);
	}
}
function Af(e, t) {
	switch (t.tagID) {
		case Y.HEAD:
			e.openElements.pop(), e.insertionMode = $.AFTER_HEAD;
			break;
		case Y.BODY:
		case Y.BR:
		case Y.HTML:
			Mf(e, t);
			break;
		case Y.TEMPLATE:
			jf(e, t);
			break;
		default: e._err(t, G.endTagWithoutMatchingOpenElement);
	}
}
function jf(e, t) {
	e.openElements.tmplCount > 0 ? (e.openElements.generateImpliedEndTagsThoroughly(), e.openElements.currentTagId !== Y.TEMPLATE && e._err(t, G.closingOfElementWithOpenChildElements), e.openElements.popUntilTagNamePopped(Y.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode()) : e._err(t, G.endTagWithoutMatchingOpenElement);
}
function Mf(e, t) {
	e.openElements.pop(), e.insertionMode = $.AFTER_HEAD, e._processToken(t);
}
function Nf(e, t) {
	switch (t.tagID) {
		case Y.HTML:
			bp(e, t);
			break;
		case Y.BASEFONT:
		case Y.BGSOUND:
		case Y.HEAD:
		case Y.LINK:
		case Y.META:
		case Y.NOFRAMES:
		case Y.STYLE:
			kf(e, t);
			break;
		case Y.NOSCRIPT:
			e._err(t, G.nestedNoscriptInHead);
			break;
		default: Ff(e, t);
	}
}
function Pf(e, t) {
	switch (t.tagID) {
		case Y.NOSCRIPT:
			e.openElements.pop(), e.insertionMode = $.IN_HEAD;
			break;
		case Y.BR:
			Ff(e, t);
			break;
		default: e._err(t, G.endTagWithoutMatchingOpenElement);
	}
}
function Ff(e, t) {
	let n = t.type === K.EOF ? G.openElementsLeftAfterEof : G.disallowedContentInNoscriptInHead;
	e._err(t, n), e.openElements.pop(), e.insertionMode = $.IN_HEAD, e._processToken(t);
}
function If(e, t) {
	switch (t.tagID) {
		case Y.HTML:
			bp(e, t);
			break;
		case Y.BODY:
			e._insertElement(t, q.HTML), e.framesetOk = !1, e.insertionMode = $.IN_BODY;
			break;
		case Y.FRAMESET:
			e._insertElement(t, q.HTML), e.insertionMode = $.IN_FRAMESET;
			break;
		case Y.BASE:
		case Y.BASEFONT:
		case Y.BGSOUND:
		case Y.LINK:
		case Y.META:
		case Y.NOFRAMES:
		case Y.SCRIPT:
		case Y.STYLE:
		case Y.TEMPLATE:
		case Y.TITLE:
			e._err(t, G.abandonedHeadElementChild), e.openElements.push(e.headElement, Y.HEAD), kf(e, t), e.openElements.remove(e.headElement);
			break;
		case Y.HEAD:
			e._err(t, G.misplacedStartTagForHeadElement);
			break;
		default: Rf(e, t);
	}
}
function Lf(e, t) {
	switch (t.tagID) {
		case Y.BODY:
		case Y.HTML:
		case Y.BR:
			Rf(e, t);
			break;
		case Y.TEMPLATE:
			jf(e, t);
			break;
		default: e._err(t, G.endTagWithoutMatchingOpenElement);
	}
}
function Rf(e, t) {
	e._insertFakeElement(J.BODY, Y.BODY), e.insertionMode = $.IN_BODY, zf(e, t);
}
function zf(e, t) {
	switch (t.type) {
		case K.CHARACTER:
			Vf(e, t);
			break;
		case K.WHITESPACE_CHARACTER:
			Bf(e, t);
			break;
		case K.COMMENT:
			_f(e, t);
			break;
		case K.START_TAG:
			bp(e, t);
			break;
		case K.END_TAG:
			Mp(e, t);
			break;
		case K.EOF: Np(e, t);
	}
}
function Bf(e, t) {
	e._reconstructActiveFormattingElements(), e._insertCharacters(t);
}
function Vf(e, t) {
	e._reconstructActiveFormattingElements(), e._insertCharacters(t), e.framesetOk = !1;
}
function Hf(e, t) {
	e.openElements.tmplCount === 0 && e.treeAdapter.adoptAttributes(e.openElements.items[0], t.attrs);
}
function Uf(e, t) {
	let n = e.openElements.tryPeekProperlyNestedBodyElement();
	n && e.openElements.tmplCount === 0 && (e.framesetOk = !1, e.treeAdapter.adoptAttributes(n, t.attrs));
}
function Wf(e, t) {
	let n = e.openElements.tryPeekProperlyNestedBodyElement();
	e.framesetOk && n && (e.treeAdapter.detachNode(n), e.openElements.popAllUpToHtmlElement(), e._insertElement(t, q.HTML), e.insertionMode = $.IN_FRAMESET);
}
function Gf(e, t) {
	e.openElements.hasInButtonScope(Y.P) && e._closePElement(), e._insertElement(t, q.HTML);
}
function Kf(e, t) {
	e.openElements.hasInButtonScope(Y.P) && e._closePElement(), e.openElements.currentTagId !== void 0 && nd.has(e.openElements.currentTagId) && e.openElements.pop(), e._insertElement(t, q.HTML);
}
function qf(e, t) {
	e.openElements.hasInButtonScope(Y.P) && e._closePElement(), e._insertElement(t, q.HTML), e.skipNextNewLine = !0, e.framesetOk = !1;
}
function Jf(e, t) {
	let n = e.openElements.tmplCount > 0;
	(!e.formElement || n) && (e.openElements.hasInButtonScope(Y.P) && e._closePElement(), e._insertElement(t, q.HTML), n || (e.formElement = e.openElements.current));
}
function Yf(e, t) {
	e.framesetOk = !1;
	let n = t.tagID;
	for (let t = e.openElements.stackTop; t >= 0; t--) {
		let r = e.openElements.tagIDs[t];
		if (n === Y.LI && r === Y.LI || (n === Y.DD || n === Y.DT) && (r === Y.DD || r === Y.DT)) {
			e.openElements.generateImpliedEndTagsWithExclusion(r), e.openElements.popUntilTagNamePopped(r);
			break;
		}
		if (r !== Y.ADDRESS && r !== Y.DIV && r !== Y.P && e._isSpecialElement(e.openElements.items[t], r)) break;
	}
	e.openElements.hasInButtonScope(Y.P) && e._closePElement(), e._insertElement(t, q.HTML);
}
function Xf(e, t) {
	e.openElements.hasInButtonScope(Y.P) && e._closePElement(), e._insertElement(t, q.HTML), e.tokenizer.state = Q.PLAINTEXT;
}
function Zf(e, t) {
	e.openElements.hasInScope(Y.BUTTON) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(Y.BUTTON)), e._reconstructActiveFormattingElements(), e._insertElement(t, q.HTML), e.framesetOk = !1;
}
function Qf(e, t) {
	let n = e.activeFormattingElements.getElementEntryInScopeWithTagName(J.A);
	n && (gf(e, t), e.openElements.remove(n.element), e.activeFormattingElements.removeEntry(n)), e._reconstructActiveFormattingElements(), e._insertElement(t, q.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function $f(e, t) {
	e._reconstructActiveFormattingElements(), e._insertElement(t, q.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function ep(e, t) {
	e._reconstructActiveFormattingElements(), e.openElements.hasInScope(Y.NOBR) && (gf(e, t), e._reconstructActiveFormattingElements()), e._insertElement(t, q.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function tp(e, t) {
	e._reconstructActiveFormattingElements(), e._insertElement(t, q.HTML), e.activeFormattingElements.insertMarker(), e.framesetOk = !1;
}
function np(e, t) {
	e.treeAdapter.getDocumentMode(e.document) !== Qu.QUIRKS && e.openElements.hasInButtonScope(Y.P) && e._closePElement(), e._insertElement(t, q.HTML), e.framesetOk = !1, e.insertionMode = $.IN_TABLE;
}
function rp(e, t) {
	e._reconstructActiveFormattingElements(), e._appendElement(t, q.HTML), e.framesetOk = !1, t.ackSelfClosing = !0;
}
function ip(e) {
	let t = Iu(e, Zu.TYPE);
	return t != null && t.toLowerCase() === nf;
}
function ap(e, t) {
	e._reconstructActiveFormattingElements(), e._appendElement(t, q.HTML), ip(t) || (e.framesetOk = !1), t.ackSelfClosing = !0;
}
function op(e, t) {
	e._appendElement(t, q.HTML), t.ackSelfClosing = !0;
}
function sp(e, t) {
	e.openElements.hasInButtonScope(Y.P) && e._closePElement(), e._appendElement(t, q.HTML), e.framesetOk = !1, t.ackSelfClosing = !0;
}
function cp(e, t) {
	t.tagName = J.IMG, t.tagID = Y.IMG, rp(e, t);
}
function lp(e, t) {
	e._insertElement(t, q.HTML), e.skipNextNewLine = !0, e.tokenizer.state = Q.RCDATA, e.originalInsertionMode = e.insertionMode, e.framesetOk = !1, e.insertionMode = $.TEXT;
}
function up(e, t) {
	e.openElements.hasInButtonScope(Y.P) && e._closePElement(), e._reconstructActiveFormattingElements(), e.framesetOk = !1, e._switchToTextParsing(t, Q.RAWTEXT);
}
function dp(e, t) {
	e.framesetOk = !1, e._switchToTextParsing(t, Q.RAWTEXT);
}
function fp(e, t) {
	e._switchToTextParsing(t, Q.RAWTEXT);
}
function pp(e, t) {
	e._reconstructActiveFormattingElements(), e._insertElement(t, q.HTML), e.framesetOk = !1, e.insertionMode = e.insertionMode === $.IN_TABLE || e.insertionMode === $.IN_CAPTION || e.insertionMode === $.IN_TABLE_BODY || e.insertionMode === $.IN_ROW || e.insertionMode === $.IN_CELL ? $.IN_SELECT_IN_TABLE : $.IN_SELECT;
}
function mp(e, t) {
	e.openElements.currentTagId === Y.OPTION && e.openElements.pop(), e._reconstructActiveFormattingElements(), e._insertElement(t, q.HTML);
}
function hp(e, t) {
	e.openElements.hasInScope(Y.RUBY) && e.openElements.generateImpliedEndTags(), e._insertElement(t, q.HTML);
}
function gp(e, t) {
	e.openElements.hasInScope(Y.RUBY) && e.openElements.generateImpliedEndTagsWithExclusion(Y.RTC), e._insertElement(t, q.HTML);
}
function _p(e, t) {
	e._reconstructActiveFormattingElements(), Yd(t), Zd(t), t.selfClosing ? e._appendElement(t, q.MATHML) : e._insertElement(t, q.MATHML), t.ackSelfClosing = !0;
}
function vp(e, t) {
	e._reconstructActiveFormattingElements(), Xd(t), Zd(t), t.selfClosing ? e._appendElement(t, q.SVG) : e._insertElement(t, q.SVG), t.ackSelfClosing = !0;
}
function yp(e, t) {
	e._reconstructActiveFormattingElements(), e._insertElement(t, q.HTML);
}
function bp(e, t) {
	switch (t.tagID) {
		case Y.I:
		case Y.S:
		case Y.B:
		case Y.U:
		case Y.EM:
		case Y.TT:
		case Y.BIG:
		case Y.CODE:
		case Y.FONT:
		case Y.SMALL:
		case Y.STRIKE:
		case Y.STRONG:
			$f(e, t);
			break;
		case Y.A:
			Qf(e, t);
			break;
		case Y.H1:
		case Y.H2:
		case Y.H3:
		case Y.H4:
		case Y.H5:
		case Y.H6:
			Kf(e, t);
			break;
		case Y.P:
		case Y.DL:
		case Y.OL:
		case Y.UL:
		case Y.DIV:
		case Y.DIR:
		case Y.NAV:
		case Y.MAIN:
		case Y.MENU:
		case Y.ASIDE:
		case Y.CENTER:
		case Y.FIGURE:
		case Y.FOOTER:
		case Y.HEADER:
		case Y.HGROUP:
		case Y.DIALOG:
		case Y.DETAILS:
		case Y.ADDRESS:
		case Y.ARTICLE:
		case Y.SEARCH:
		case Y.SECTION:
		case Y.SUMMARY:
		case Y.FIELDSET:
		case Y.BLOCKQUOTE:
		case Y.FIGCAPTION:
			Gf(e, t);
			break;
		case Y.LI:
		case Y.DD:
		case Y.DT:
			Yf(e, t);
			break;
		case Y.BR:
		case Y.IMG:
		case Y.WBR:
		case Y.AREA:
		case Y.EMBED:
		case Y.KEYGEN:
			rp(e, t);
			break;
		case Y.HR:
			sp(e, t);
			break;
		case Y.RB:
		case Y.RTC:
			hp(e, t);
			break;
		case Y.RT:
		case Y.RP:
			gp(e, t);
			break;
		case Y.PRE:
		case Y.LISTING:
			qf(e, t);
			break;
		case Y.XMP:
			up(e, t);
			break;
		case Y.SVG:
			vp(e, t);
			break;
		case Y.HTML:
			Hf(e, t);
			break;
		case Y.BASE:
		case Y.LINK:
		case Y.META:
		case Y.STYLE:
		case Y.TITLE:
		case Y.SCRIPT:
		case Y.BGSOUND:
		case Y.BASEFONT:
		case Y.TEMPLATE:
			kf(e, t);
			break;
		case Y.BODY:
			Uf(e, t);
			break;
		case Y.FORM:
			Jf(e, t);
			break;
		case Y.NOBR:
			ep(e, t);
			break;
		case Y.MATH:
			_p(e, t);
			break;
		case Y.TABLE:
			np(e, t);
			break;
		case Y.INPUT:
			ap(e, t);
			break;
		case Y.PARAM:
		case Y.TRACK:
		case Y.SOURCE:
			op(e, t);
			break;
		case Y.IMAGE:
			cp(e, t);
			break;
		case Y.BUTTON:
			Zf(e, t);
			break;
		case Y.APPLET:
		case Y.OBJECT:
		case Y.MARQUEE:
			tp(e, t);
			break;
		case Y.IFRAME:
			dp(e, t);
			break;
		case Y.SELECT:
			pp(e, t);
			break;
		case Y.OPTION:
		case Y.OPTGROUP:
			mp(e, t);
			break;
		case Y.NOEMBED:
		case Y.NOFRAMES:
			fp(e, t);
			break;
		case Y.FRAMESET:
			Wf(e, t);
			break;
		case Y.TEXTAREA:
			lp(e, t);
			break;
		case Y.NOSCRIPT:
			e.options.scriptingEnabled ? fp(e, t) : yp(e, t);
			break;
		case Y.PLAINTEXT:
			Xf(e, t);
			break;
		case Y.COL:
		case Y.TH:
		case Y.TD:
		case Y.TR:
		case Y.HEAD:
		case Y.FRAME:
		case Y.TBODY:
		case Y.TFOOT:
		case Y.THEAD:
		case Y.CAPTION:
		case Y.COLGROUP: break;
		default: yp(e, t);
	}
}
function xp(e, t) {
	if (e.openElements.hasInScope(Y.BODY) && (e.insertionMode = $.AFTER_BODY, e.options.sourceCodeLocationInfo)) {
		let n = e.openElements.tryPeekProperlyNestedBodyElement();
		n && e._setEndLocation(n, t);
	}
}
function Sp(e, t) {
	e.openElements.hasInScope(Y.BODY) && (e.insertionMode = $.AFTER_BODY, _m(e, t));
}
function Cp(e, t) {
	let n = t.tagID;
	e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n));
}
function wp(e) {
	let t = e.openElements.tmplCount > 0, { formElement: n } = e;
	t || (e.formElement = null), (n || t) && e.openElements.hasInScope(Y.FORM) && (e.openElements.generateImpliedEndTags(), t ? e.openElements.popUntilTagNamePopped(Y.FORM) : n && e.openElements.remove(n));
}
function Tp(e) {
	e.openElements.hasInButtonScope(Y.P) || e._insertFakeElement(J.P, Y.P), e._closePElement();
}
function Ep(e) {
	e.openElements.hasInListItemScope(Y.LI) && (e.openElements.generateImpliedEndTagsWithExclusion(Y.LI), e.openElements.popUntilTagNamePopped(Y.LI));
}
function Dp(e, t) {
	let n = t.tagID;
	e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTagsWithExclusion(n), e.openElements.popUntilTagNamePopped(n));
}
function Op(e) {
	e.openElements.hasNumberedHeaderInScope() && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilNumberedHeaderPopped());
}
function kp(e, t) {
	let n = t.tagID;
	e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n), e.activeFormattingElements.clearToLastMarker());
}
function Ap(e) {
	e._reconstructActiveFormattingElements(), e._insertFakeElement(J.BR, Y.BR), e.openElements.pop(), e.framesetOk = !1;
}
function jp(e, t) {
	let n = t.tagName, r = t.tagID;
	for (let t = e.openElements.stackTop; t > 0; t--) {
		let i = e.openElements.items[t], a = e.openElements.tagIDs[t];
		if (r === a && (r !== Y.UNKNOWN || e.treeAdapter.getTagName(i) === n)) {
			e.openElements.generateImpliedEndTagsWithExclusion(r), e.openElements.stackTop >= t && e.openElements.shortenToLength(t);
			break;
		}
		if (e._isSpecialElement(i, a)) break;
	}
}
function Mp(e, t) {
	switch (t.tagID) {
		case Y.A:
		case Y.B:
		case Y.I:
		case Y.S:
		case Y.U:
		case Y.EM:
		case Y.TT:
		case Y.BIG:
		case Y.CODE:
		case Y.FONT:
		case Y.NOBR:
		case Y.SMALL:
		case Y.STRIKE:
		case Y.STRONG:
			gf(e, t);
			break;
		case Y.P:
			Tp(e);
			break;
		case Y.DL:
		case Y.UL:
		case Y.OL:
		case Y.DIR:
		case Y.DIV:
		case Y.NAV:
		case Y.PRE:
		case Y.MAIN:
		case Y.MENU:
		case Y.ASIDE:
		case Y.BUTTON:
		case Y.CENTER:
		case Y.FIGURE:
		case Y.FOOTER:
		case Y.HEADER:
		case Y.HGROUP:
		case Y.DIALOG:
		case Y.ADDRESS:
		case Y.ARTICLE:
		case Y.DETAILS:
		case Y.SEARCH:
		case Y.SECTION:
		case Y.SUMMARY:
		case Y.LISTING:
		case Y.FIELDSET:
		case Y.BLOCKQUOTE:
		case Y.FIGCAPTION:
			Cp(e, t);
			break;
		case Y.LI:
			Ep(e);
			break;
		case Y.DD:
		case Y.DT:
			Dp(e, t);
			break;
		case Y.H1:
		case Y.H2:
		case Y.H3:
		case Y.H4:
		case Y.H5:
		case Y.H6:
			Op(e);
			break;
		case Y.BR:
			Ap(e);
			break;
		case Y.BODY:
			xp(e, t);
			break;
		case Y.HTML:
			Sp(e, t);
			break;
		case Y.FORM:
			wp(e);
			break;
		case Y.APPLET:
		case Y.OBJECT:
		case Y.MARQUEE:
			kp(e, t);
			break;
		case Y.TEMPLATE:
			jf(e, t);
			break;
		default: jp(e, t);
	}
}
function Np(e, t) {
	e.tmplInsertionModeStack.length > 0 ? hm(e, t) : bf(e, t);
}
function Pp(e, t) {
	var n;
	t.tagID === Y.SCRIPT && ((n = e.scriptHandler) == null || n.call(e, e.openElements.current)), e.openElements.pop(), e.insertionMode = e.originalInsertionMode;
}
function Fp(e, t) {
	e._err(t, G.eofInElementThatCanContainOnlyText), e.openElements.pop(), e.insertionMode = e.originalInsertionMode, e.onEof(t);
}
function Ip(e, t) {
	if (e.openElements.currentTagId !== void 0 && sf.has(e.openElements.currentTagId)) switch (e.pendingCharacterTokens.length = 0, e.hasNonWhitespacePendingCharacterToken = !1, e.originalInsertionMode = e.insertionMode, e.insertionMode = $.IN_TABLE_TEXT, t.type) {
		case K.CHARACTER:
			Yp(e, t);
			break;
		case K.WHITESPACE_CHARACTER: Jp(e, t);
	}
	else qp(e, t);
}
function Lp(e, t) {
	e.openElements.clearBackToTableContext(), e.activeFormattingElements.insertMarker(), e._insertElement(t, q.HTML), e.insertionMode = $.IN_CAPTION;
}
function Rp(e, t) {
	e.openElements.clearBackToTableContext(), e._insertElement(t, q.HTML), e.insertionMode = $.IN_COLUMN_GROUP;
}
function zp(e, t) {
	e.openElements.clearBackToTableContext(), e._insertFakeElement(J.COLGROUP, Y.COLGROUP), e.insertionMode = $.IN_COLUMN_GROUP, em(e, t);
}
function Bp(e, t) {
	e.openElements.clearBackToTableContext(), e._insertElement(t, q.HTML), e.insertionMode = $.IN_TABLE_BODY;
}
function Vp(e, t) {
	e.openElements.clearBackToTableContext(), e._insertFakeElement(J.TBODY, Y.TBODY), e.insertionMode = $.IN_TABLE_BODY, rm(e, t);
}
function Hp(e, t) {
	e.openElements.hasInTableScope(Y.TABLE) && (e.openElements.popUntilTagNamePopped(Y.TABLE), e._resetInsertionMode(), e._processStartTag(t));
}
function Up(e, t) {
	ip(t) ? e._appendElement(t, q.HTML) : qp(e, t), t.ackSelfClosing = !0;
}
function Wp(e, t) {
	!e.formElement && e.openElements.tmplCount === 0 && (e._insertElement(t, q.HTML), e.formElement = e.openElements.current, e.openElements.pop());
}
function Gp(e, t) {
	switch (t.tagID) {
		case Y.TD:
		case Y.TH:
		case Y.TR:
			Vp(e, t);
			break;
		case Y.STYLE:
		case Y.SCRIPT:
		case Y.TEMPLATE:
			kf(e, t);
			break;
		case Y.COL:
			zp(e, t);
			break;
		case Y.FORM:
			Wp(e, t);
			break;
		case Y.TABLE:
			Hp(e, t);
			break;
		case Y.TBODY:
		case Y.TFOOT:
		case Y.THEAD:
			Bp(e, t);
			break;
		case Y.INPUT:
			Up(e, t);
			break;
		case Y.CAPTION:
			Lp(e, t);
			break;
		case Y.COLGROUP:
			Rp(e, t);
			break;
		default: qp(e, t);
	}
}
function Kp(e, t) {
	switch (t.tagID) {
		case Y.TABLE:
			e.openElements.hasInTableScope(Y.TABLE) && (e.openElements.popUntilTagNamePopped(Y.TABLE), e._resetInsertionMode());
			break;
		case Y.TEMPLATE:
			jf(e, t);
			break;
		case Y.BODY:
		case Y.CAPTION:
		case Y.COL:
		case Y.COLGROUP:
		case Y.HTML:
		case Y.TBODY:
		case Y.TD:
		case Y.TFOOT:
		case Y.TH:
		case Y.THEAD:
		case Y.TR: break;
		default: qp(e, t);
	}
}
function qp(e, t) {
	let n = e.fosterParentingEnabled;
	e.fosterParentingEnabled = !0, zf(e, t), e.fosterParentingEnabled = n;
}
function Jp(e, t) {
	e.pendingCharacterTokens.push(t);
}
function Yp(e, t) {
	e.pendingCharacterTokens.push(t), e.hasNonWhitespacePendingCharacterToken = !0;
}
function Xp(e, t) {
	let n = 0;
	if (e.hasNonWhitespacePendingCharacterToken) for (; n < e.pendingCharacterTokens.length; n++) qp(e, e.pendingCharacterTokens[n]);
	else for (; n < e.pendingCharacterTokens.length; n++) e._insertCharacters(e.pendingCharacterTokens[n]);
	e.insertionMode = e.originalInsertionMode, e._processToken(t);
}
var Zp = /* @__PURE__ */ new Set([
	Y.CAPTION,
	Y.COL,
	Y.COLGROUP,
	Y.TBODY,
	Y.TD,
	Y.TFOOT,
	Y.TH,
	Y.THEAD,
	Y.TR
]);
function Qp(e, t) {
	let n = t.tagID;
	Zp.has(n) ? e.openElements.hasInTableScope(Y.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(Y.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = $.IN_TABLE, Gp(e, t)) : bp(e, t);
}
function $p(e, t) {
	let n = t.tagID;
	switch (n) {
		case Y.CAPTION:
		case Y.TABLE:
			e.openElements.hasInTableScope(Y.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(Y.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = $.IN_TABLE, n === Y.TABLE && Kp(e, t));
			break;
		case Y.BODY:
		case Y.COL:
		case Y.COLGROUP:
		case Y.HTML:
		case Y.TBODY:
		case Y.TD:
		case Y.TFOOT:
		case Y.TH:
		case Y.THEAD:
		case Y.TR: break;
		default: Mp(e, t);
	}
}
function em(e, t) {
	switch (t.tagID) {
		case Y.HTML:
			bp(e, t);
			break;
		case Y.COL:
			e._appendElement(t, q.HTML), t.ackSelfClosing = !0;
			break;
		case Y.TEMPLATE:
			kf(e, t);
			break;
		default: nm(e, t);
	}
}
function tm(e, t) {
	switch (t.tagID) {
		case Y.COLGROUP:
			e.openElements.currentTagId === Y.COLGROUP && (e.openElements.pop(), e.insertionMode = $.IN_TABLE);
			break;
		case Y.TEMPLATE:
			jf(e, t);
			break;
		case Y.COL: break;
		default: nm(e, t);
	}
}
function nm(e, t) {
	e.openElements.currentTagId === Y.COLGROUP && (e.openElements.pop(), e.insertionMode = $.IN_TABLE, e._processToken(t));
}
function rm(e, t) {
	switch (t.tagID) {
		case Y.TR:
			e.openElements.clearBackToTableBodyContext(), e._insertElement(t, q.HTML), e.insertionMode = $.IN_ROW;
			break;
		case Y.TH:
		case Y.TD:
			e.openElements.clearBackToTableBodyContext(), e._insertFakeElement(J.TR, Y.TR), e.insertionMode = $.IN_ROW, am(e, t);
			break;
		case Y.CAPTION:
		case Y.COL:
		case Y.COLGROUP:
		case Y.TBODY:
		case Y.TFOOT:
		case Y.THEAD:
			e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = $.IN_TABLE, Gp(e, t));
			break;
		default: Gp(e, t);
	}
}
function im(e, t) {
	let n = t.tagID;
	switch (t.tagID) {
		case Y.TBODY:
		case Y.TFOOT:
		case Y.THEAD:
			e.openElements.hasInTableScope(n) && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = $.IN_TABLE);
			break;
		case Y.TABLE:
			e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = $.IN_TABLE, Kp(e, t));
			break;
		case Y.BODY:
		case Y.CAPTION:
		case Y.COL:
		case Y.COLGROUP:
		case Y.HTML:
		case Y.TD:
		case Y.TH:
		case Y.TR: break;
		default: Kp(e, t);
	}
}
function am(e, t) {
	switch (t.tagID) {
		case Y.TH:
		case Y.TD:
			e.openElements.clearBackToTableRowContext(), e._insertElement(t, q.HTML), e.insertionMode = $.IN_CELL, e.activeFormattingElements.insertMarker();
			break;
		case Y.CAPTION:
		case Y.COL:
		case Y.COLGROUP:
		case Y.TBODY:
		case Y.TFOOT:
		case Y.THEAD:
		case Y.TR:
			e.openElements.hasInTableScope(Y.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = $.IN_TABLE_BODY, rm(e, t));
			break;
		default: Gp(e, t);
	}
}
function om(e, t) {
	switch (t.tagID) {
		case Y.TR:
			e.openElements.hasInTableScope(Y.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = $.IN_TABLE_BODY);
			break;
		case Y.TABLE:
			e.openElements.hasInTableScope(Y.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = $.IN_TABLE_BODY, im(e, t));
			break;
		case Y.TBODY:
		case Y.TFOOT:
		case Y.THEAD:
			(e.openElements.hasInTableScope(t.tagID) || e.openElements.hasInTableScope(Y.TR)) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = $.IN_TABLE_BODY, im(e, t));
			break;
		case Y.BODY:
		case Y.CAPTION:
		case Y.COL:
		case Y.COLGROUP:
		case Y.HTML:
		case Y.TD:
		case Y.TH: break;
		default: Kp(e, t);
	}
}
function sm(e, t) {
	let n = t.tagID;
	Zp.has(n) ? (e.openElements.hasInTableScope(Y.TD) || e.openElements.hasInTableScope(Y.TH)) && (e._closeTableCell(), am(e, t)) : bp(e, t);
}
function cm(e, t) {
	let n = t.tagID;
	switch (n) {
		case Y.TD:
		case Y.TH:
			e.openElements.hasInTableScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = $.IN_ROW);
			break;
		case Y.TABLE:
		case Y.TBODY:
		case Y.TFOOT:
		case Y.THEAD:
		case Y.TR:
			e.openElements.hasInTableScope(n) && (e._closeTableCell(), om(e, t));
			break;
		case Y.BODY:
		case Y.CAPTION:
		case Y.COL:
		case Y.COLGROUP:
		case Y.HTML: break;
		default: Mp(e, t);
	}
}
function lm(e, t) {
	switch (t.tagID) {
		case Y.HTML:
			bp(e, t);
			break;
		case Y.OPTION:
			e.openElements.currentTagId === Y.OPTION && e.openElements.pop(), e._insertElement(t, q.HTML);
			break;
		case Y.OPTGROUP:
			e.openElements.currentTagId === Y.OPTION && e.openElements.pop(), e.openElements.currentTagId === Y.OPTGROUP && e.openElements.pop(), e._insertElement(t, q.HTML);
			break;
		case Y.HR:
			e.openElements.currentTagId === Y.OPTION && e.openElements.pop(), e.openElements.currentTagId === Y.OPTGROUP && e.openElements.pop(), e._appendElement(t, q.HTML), t.ackSelfClosing = !0;
			break;
		case Y.INPUT:
		case Y.KEYGEN:
		case Y.TEXTAREA:
		case Y.SELECT:
			e.openElements.hasInSelectScope(Y.SELECT) && (e.openElements.popUntilTagNamePopped(Y.SELECT), e._resetInsertionMode(), t.tagID !== Y.SELECT && e._processStartTag(t));
			break;
		case Y.SCRIPT:
		case Y.TEMPLATE: kf(e, t);
	}
}
function um(e, t) {
	switch (t.tagID) {
		case Y.OPTGROUP:
			e.openElements.stackTop > 0 && e.openElements.currentTagId === Y.OPTION && e.openElements.tagIDs[e.openElements.stackTop - 1] === Y.OPTGROUP && e.openElements.pop(), e.openElements.currentTagId === Y.OPTGROUP && e.openElements.pop();
			break;
		case Y.OPTION:
			e.openElements.currentTagId === Y.OPTION && e.openElements.pop();
			break;
		case Y.SELECT:
			e.openElements.hasInSelectScope(Y.SELECT) && (e.openElements.popUntilTagNamePopped(Y.SELECT), e._resetInsertionMode());
			break;
		case Y.TEMPLATE: jf(e, t);
	}
}
function dm(e, t) {
	let n = t.tagID;
	n === Y.CAPTION || n === Y.TABLE || n === Y.TBODY || n === Y.TFOOT || n === Y.THEAD || n === Y.TR || n === Y.TD || n === Y.TH ? (e.openElements.popUntilTagNamePopped(Y.SELECT), e._resetInsertionMode(), e._processStartTag(t)) : lm(e, t);
}
function fm(e, t) {
	let n = t.tagID;
	n === Y.CAPTION || n === Y.TABLE || n === Y.TBODY || n === Y.TFOOT || n === Y.THEAD || n === Y.TR || n === Y.TD || n === Y.TH ? e.openElements.hasInTableScope(n) && (e.openElements.popUntilTagNamePopped(Y.SELECT), e._resetInsertionMode(), e.onEndTag(t)) : um(e, t);
}
function pm(e, t) {
	switch (t.tagID) {
		case Y.BASE:
		case Y.BASEFONT:
		case Y.BGSOUND:
		case Y.LINK:
		case Y.META:
		case Y.NOFRAMES:
		case Y.SCRIPT:
		case Y.STYLE:
		case Y.TEMPLATE:
		case Y.TITLE:
			kf(e, t);
			break;
		case Y.CAPTION:
		case Y.COLGROUP:
		case Y.TBODY:
		case Y.TFOOT:
		case Y.THEAD:
			e.tmplInsertionModeStack[0] = $.IN_TABLE, e.insertionMode = $.IN_TABLE, Gp(e, t);
			break;
		case Y.COL:
			e.tmplInsertionModeStack[0] = $.IN_COLUMN_GROUP, e.insertionMode = $.IN_COLUMN_GROUP, em(e, t);
			break;
		case Y.TR:
			e.tmplInsertionModeStack[0] = $.IN_TABLE_BODY, e.insertionMode = $.IN_TABLE_BODY, rm(e, t);
			break;
		case Y.TD:
		case Y.TH:
			e.tmplInsertionModeStack[0] = $.IN_ROW, e.insertionMode = $.IN_ROW, am(e, t);
			break;
		default: e.tmplInsertionModeStack[0] = $.IN_BODY, e.insertionMode = $.IN_BODY, bp(e, t);
	}
}
function mm(e, t) {
	t.tagID === Y.TEMPLATE && jf(e, t);
}
function hm(e, t) {
	e.openElements.tmplCount > 0 ? (e.openElements.popUntilTagNamePopped(Y.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode(), e.onEof(t)) : bf(e, t);
}
function gm(e, t) {
	t.tagID === Y.HTML ? bp(e, t) : vm(e, t);
}
function _m(e, t) {
	if (t.tagID === Y.HTML) {
		if (e.fragmentContext || (e.insertionMode = $.AFTER_AFTER_BODY), e.options.sourceCodeLocationInfo && e.openElements.tagIDs[0] === Y.HTML) {
			e._setEndLocation(e.openElements.items[0], t);
			let n = e.openElements.items[1];
			n && !e.treeAdapter.getNodeSourceCodeLocation(n)?.endTag && e._setEndLocation(n, t);
		}
	} else vm(e, t);
}
function vm(e, t) {
	e.insertionMode = $.IN_BODY, zf(e, t);
}
function ym(e, t) {
	switch (t.tagID) {
		case Y.HTML:
			bp(e, t);
			break;
		case Y.FRAMESET:
			e._insertElement(t, q.HTML);
			break;
		case Y.FRAME:
			e._appendElement(t, q.HTML), t.ackSelfClosing = !0;
			break;
		case Y.NOFRAMES: kf(e, t);
	}
}
function bm(e, t) {
	t.tagID === Y.FRAMESET && !e.openElements.isRootHtmlElementCurrent() && (e.openElements.pop(), !e.fragmentContext && e.openElements.currentTagId !== Y.FRAMESET && (e.insertionMode = $.AFTER_FRAMESET));
}
function xm(e, t) {
	switch (t.tagID) {
		case Y.HTML:
			bp(e, t);
			break;
		case Y.NOFRAMES: kf(e, t);
	}
}
function Sm(e, t) {
	t.tagID === Y.HTML && (e.insertionMode = $.AFTER_AFTER_FRAMESET);
}
function Cm(e, t) {
	t.tagID === Y.HTML ? bp(e, t) : wm(e, t);
}
function wm(e, t) {
	e.insertionMode = $.IN_BODY, zf(e, t);
}
function Tm(e, t) {
	switch (t.tagID) {
		case Y.HTML:
			bp(e, t);
			break;
		case Y.NOFRAMES: kf(e, t);
	}
}
function Em(e, t) {
	t.chars = "�", e._insertCharacters(t);
}
function Dm(e, t) {
	e._insertCharacters(t), e.framesetOk = !1;
}
function Om(e) {
	for (; e.treeAdapter.getNamespaceURI(e.openElements.current) !== q.HTML && e.openElements.currentTagId !== void 0 && !e._isIntegrationPoint(e.openElements.currentTagId, e.openElements.current);) e.openElements.pop();
}
function km(e, t) {
	if (Jd(t)) Om(e), e._startTagOutsideForeignContent(t);
	else {
		let n = e._getAdjustedCurrentElement(), r = e.treeAdapter.getNamespaceURI(n);
		r === q.MATHML ? Yd(t) : r === q.SVG && (Qd(t), Xd(t)), Zd(t), t.selfClosing ? e._appendElement(t, r) : e._insertElement(t, r), t.ackSelfClosing = !0;
	}
}
function Am(e, t) {
	if (t.tagID === Y.P || t.tagID === Y.BR) {
		Om(e), e._endTagOutsideForeignContent(t);
		return;
	}
	for (let n = e.openElements.stackTop; n > 0; n--) {
		let r = e.openElements.items[n];
		if (e.treeAdapter.getNamespaceURI(r) === q.HTML) {
			e._endTagOutsideForeignContent(t);
			break;
		}
		let i = e.treeAdapter.getTagName(r);
		if (i.toLowerCase() === t.tagName) {
			t.tagName = i, e.openElements.shortenToLength(n);
			break;
		}
	}
}
J.AREA, J.BASE, J.BASEFONT, J.BGSOUND, J.BR, J.COL, J.EMBED, J.FRAME, J.HR, J.IMG, J.INPUT, J.KEYGEN, J.LINK, J.META, J.PARAM, J.SOURCE, J.TRACK, J.WBR;
//#endregion
//#region node_modules/hast-util-raw/lib/index.js
var jm = /<(\/?)(iframe|noembed|noframes|plaintext|script|style|textarea|title|xmp)(?=[\t\n\f\r />])/gi, Mm = /* @__PURE__ */ new Set([
	"mdxFlowExpression",
	"mdxJsxFlowElement",
	"mdxJsxTextElement",
	"mdxTextExpression",
	"mdxjsEsm"
]), Nm = {
	sourceCodeLocationInfo: !0,
	scriptingEnabled: !1
};
function Pm(e, t) {
	let n = Jm(e), r = fu("type", {
		handlers: {
			root: Im,
			element: Lm,
			text: Rm,
			comment: Vm,
			doctype: zm,
			raw: Hm
		},
		unknown: Um
	}), i = {
		parser: n ? new lf(Nm) : lf.getFragmentParser(void 0, Nm),
		handle(e) {
			r(e, i);
		},
		stitches: !1,
		options: t || {}
	};
	r(e, i), Wm(i, qr());
	let a = ru(n ? i.parser.document : i.parser.getFragment(), { file: i.options.file });
	return i.stitches && Lc(a, "comment", function(e, t, n) {
		let r = e;
		if (r.value.stitch && n && t !== void 0) {
			let e = n.children;
			return e[t] = r.value.stitch, t;
		}
	}), a.type === "root" && a.children.length === 1 && a.children[0].type === e.type ? a.children[0] : a;
}
function Fm(e, t) {
	let n = -1;
	/* istanbul ignore else - invalid nodes, see rehypejs/rehype-raw#7. */
	if (e) for (; ++n < e.length;) t.handle(e[n]);
}
function Im(e, t) {
	Fm(e.children, t);
}
function Lm(e, t) {
	Km(e, t), Fm(e.children, t), qm(e, t);
}
function Rm(e, t) {
	t.parser.tokenizer.state > 4 && (t.parser.tokenizer.state = 0);
	let n = {
		type: K.CHARACTER,
		chars: e.value,
		location: Ym(e)
	};
	Wm(t, qr(e)), t.parser.currentToken = n, t.parser._processToken(t.parser.currentToken);
}
function zm(e, t) {
	let n = {
		type: K.DOCTYPE,
		name: "html",
		forceQuirks: !1,
		publicId: "",
		systemId: "",
		location: Ym(e)
	};
	Wm(t, qr(e)), t.parser.currentToken = n, t.parser._processToken(t.parser.currentToken);
}
function Bm(e, t) {
	t.stitches = !0;
	let n = Xm(e);
	"children" in e && "children" in n && (n.children = Pm({
		type: "root",
		children: e.children
	}, t.options).children), Vm({
		type: "comment",
		value: { stitch: n }
	}, t);
}
function Vm(e, t) {
	let n = e.value, r = {
		type: K.COMMENT,
		data: n,
		location: Ym(e)
	};
	Wm(t, qr(e)), t.parser.currentToken = r, t.parser._processToken(t.parser.currentToken);
}
function Hm(e, t) {
	/* c8 ignore next 12 -- removed in <https://github.com/inikulin/parse5/pull/897> */
	if (t.parser.tokenizer.preprocessor.html = "", t.parser.tokenizer.preprocessor.pos = -1, t.parser.tokenizer.preprocessor.lastGapPos = -2, t.parser.tokenizer.preprocessor.gapStack = [], t.parser.tokenizer.preprocessor.skipNextNewLine = !1, t.parser.tokenizer.preprocessor.lastChunkWritten = !1, t.parser.tokenizer.preprocessor.endOfChunkHit = !1, t.parser.tokenizer.preprocessor.isEol = !1, Gm(t, qr(e)), t.parser.tokenizer.write(t.options.tagfilter ? e.value.replace(jm, "&lt;$1$2") : e.value, !1), t.parser.tokenizer._runParsingLoop(), t.parser.tokenizer.state === 72 || t.parser.tokenizer.state === 78) {
		t.parser.tokenizer.preprocessor.lastChunkWritten = !0;
		let e = t.parser.tokenizer._consume();
		t.parser.tokenizer._callState(e);
	}
}
function Um(e, t) {
	let n = e;
	if (t.options.passThrough && t.options.passThrough.includes(n.type)) Bm(n, t);
	else {
		let e = "";
		throw Mm.has(n.type) && (e = ". It looks like you are using MDX nodes with `hast-util-raw` (or `rehype-raw`). If you use this because you are using remark or rehype plugins that inject `'html'` nodes, then please raise an issue with that plugin, as its a bad and slow idea. If you use this because you are using markdown syntax, then you have to configure this utility (or plugin) to pass through these nodes (see `passThrough` in docs), but you can also migrate to use the MDX syntax"), Error("Cannot compile `" + n.type + "` node" + e);
	}
}
function Wm(e, t) {
	Gm(e, t);
	let n = e.parser.tokenizer.currentCharacterToken;
	n && n.location && (n.location.endLine = e.parser.tokenizer.preprocessor.line, n.location.endCol = e.parser.tokenizer.preprocessor.col + 1, n.location.endOffset = e.parser.tokenizer.preprocessor.offset + 1, e.parser.currentToken = n, e.parser._processToken(e.parser.currentToken)), e.parser.tokenizer.paused = !1, e.parser.tokenizer.inLoop = !1, e.parser.tokenizer.active = !1, e.parser.tokenizer.returnState = Q.DATA, e.parser.tokenizer.charRefCode = -1, e.parser.tokenizer.consumedAfterSnapshot = -1, e.parser.tokenizer.currentLocation = null, e.parser.tokenizer.currentCharacterToken = null, e.parser.tokenizer.currentToken = null, e.parser.tokenizer.currentAttr = {
		name: "",
		value: ""
	};
}
function Gm(e, t) {
	if (t && t.offset !== void 0) {
		let n = {
			startLine: t.line,
			startCol: t.column,
			startOffset: t.offset,
			endLine: -1,
			endCol: -1,
			endOffset: -1
		};
		e.parser.tokenizer.preprocessor.lineStartPos = -t.column + 1, e.parser.tokenizer.preprocessor.droppedBufferSize = t.offset, e.parser.tokenizer.preprocessor.line = t.line, e.parser.tokenizer.currentLocation = n;
	}
}
function Km(e, t) {
	let n = e.tagName.toLowerCase();
	if (t.parser.tokenizer.state === Q.PLAINTEXT) return;
	Wm(t, qr(e));
	let r = t.parser.openElements.current, i = "namespaceURI" in r ? r.namespaceURI : eu.html;
	i === eu.html && n === "svg" && (i = eu.svg);
	let a = gu({
		...e,
		children: []
	}, { space: i === eu.svg ? "svg" : "html" }), o = {
		type: K.START_TAG,
		tagName: n,
		tagID: ed(n),
		selfClosing: !1,
		ackSelfClosing: !1,
		/* c8 ignore next */
		attrs: "attrs" in a ? a.attrs : [],
		location: Ym(e)
	};
	t.parser.currentToken = o, t.parser._processToken(t.parser.currentToken), t.parser.tokenizer.lastStartTagName = n;
}
function qm(e, t) {
	let n = e.tagName.toLowerCase();
	if (!t.parser.tokenizer.inForeignNode && Eu.includes(n) || t.parser.tokenizer.state === Q.PLAINTEXT) return;
	Wm(t, Kr(e));
	let r = {
		type: K.END_TAG,
		tagName: n,
		tagID: ed(n),
		selfClosing: !1,
		ackSelfClosing: !1,
		attrs: [],
		location: Ym(e)
	};
	t.parser.currentToken = r, t.parser._processToken(t.parser.currentToken), n === t.parser.tokenizer.lastStartTagName && (t.parser.tokenizer.state === Q.RCDATA || t.parser.tokenizer.state === Q.RAWTEXT || t.parser.tokenizer.state === Q.SCRIPT_DATA) && (t.parser.tokenizer.state = Q.DATA);
}
function Jm(e) {
	let t = e.type === "root" ? e.children[0] : e;
	return !!(t && (t.type === "doctype" || t.type === "element" && t.tagName.toLowerCase() === "html"));
}
function Ym(e) {
	let t = qr(e) || {
		line: void 0,
		column: void 0,
		offset: void 0
	}, n = Kr(e) || {
		line: void 0,
		column: void 0,
		offset: void 0
	};
	return {
		startLine: t.line,
		startCol: t.column,
		startOffset: t.offset,
		endLine: n.line,
		endCol: n.column,
		endOffset: n.offset
	};
}
function Xm(e) {
	return "children" in e ? Sc({
		...e,
		children: []
	}) : Sc(e);
}
//#endregion
//#region node_modules/rehype-raw/lib/index.js
function Zm(e) {
	return function(t, n) {
		return Pm(t, {
			...e,
			file: n
		});
	};
}
//#endregion
//#region node_modules/hast-util-sanitize/lib/schema.js
var Qm = [
	"ariaDescribedBy",
	"ariaLabel",
	"ariaLabelledBy"
], $m = {
	ancestors: {
		tbody: ["table"],
		td: ["table"],
		th: ["table"],
		thead: ["table"],
		tfoot: ["table"],
		tr: ["table"]
	},
	attributes: {
		a: [
			...Qm,
			"dataFootnoteBackref",
			"dataFootnoteRef",
			["className", "data-footnote-backref"],
			"href"
		],
		blockquote: ["cite"],
		code: [["className", /^language-./]],
		del: ["cite"],
		div: ["itemScope", "itemType"],
		dl: [...Qm],
		h2: [["className", "sr-only"]],
		img: [
			...Qm,
			"longDesc",
			"src"
		],
		input: [["disabled", !0], ["type", "checkbox"]],
		ins: ["cite"],
		li: [["className", "task-list-item"]],
		ol: [...Qm, ["className", "contains-task-list"]],
		q: ["cite"],
		section: ["dataFootnotes", ["className", "footnotes"]],
		source: ["srcSet"],
		summary: [...Qm],
		table: [...Qm],
		ul: [...Qm, ["className", "contains-task-list"]],
		"*": /* @__PURE__ */ "abbr.accept.acceptCharset.accessKey.action.align.alt.axis.border.cellPadding.cellSpacing.char.charOff.charSet.checked.clear.colSpan.color.cols.compact.coords.dateTime.dir.encType.frame.hSpace.headers.height.hrefLang.htmlFor.id.isMap.itemProp.label.lang.maxLength.media.method.multiple.name.noHref.noShade.noWrap.open.prompt.readOnly.rev.rowSpan.rows.rules.scope.selected.shape.size.span.start.summary.tabIndex.title.useMap.vAlign.value.width".split(".")
	},
	clobber: [
		"ariaDescribedBy",
		"ariaLabelledBy",
		"id",
		"name"
	],
	clobberPrefix: "user-content-",
	protocols: {
		cite: ["http", "https"],
		href: [
			"http",
			"https",
			"irc",
			"ircs",
			"mailto",
			"xmpp"
		],
		longDesc: ["http", "https"],
		src: ["http", "https"]
	},
	required: { input: {
		disabled: !0,
		type: "checkbox"
	} },
	strip: ["script"],
	tagNames: /* @__PURE__ */ "a.b.blockquote.br.code.dd.del.details.div.dl.dt.em.h1.h2.h3.h4.h5.h6.hr.i.img.input.ins.kbd.li.ol.p.picture.pre.q.rp.rt.ruby.s.samp.section.source.span.strike.strong.sub.summary.sup.table.tbody.td.tfoot.th.thead.tr.tt.ul.var".split(".")
}, eh = {}.hasOwnProperty;
function th(e, t) {
	let n = {
		type: "root",
		children: []
	}, r = nh({
		schema: t ? {
			...$m,
			...t
		} : $m,
		stack: []
	}, e);
	return r && (Array.isArray(r) ? r.length === 1 ? n = r[0] : n.children = r : n = r), n;
}
function nh(e, t) {
	if (t && typeof t == "object") {
		let n = t;
		switch (typeof n.type == "string" ? n.type : "") {
			case "comment": return rh(e, n);
			case "doctype": return ih(e, n);
			case "element": return ah(e, n);
			case "root": return oh(e, n);
			case "text": return sh(e, n);
		}
	}
}
function rh(e, t) {
	if (e.schema.allowComments) {
		let e = typeof t.value == "string" ? t.value : "", n = e.indexOf("-->"), r = {
			type: "comment",
			value: n < 0 ? e : e.slice(0, n)
		};
		return mh(r, t), r;
	}
}
function ih(e, t) {
	if (e.schema.allowDoctypes) {
		let e = { type: "doctype" };
		return mh(e, t), e;
	}
}
function ah(e, t) {
	let n = typeof t.tagName == "string" ? t.tagName : "";
	e.stack.push(n);
	let r = ch(e, t.children), i = lh(e, t.properties);
	e.stack.pop();
	let a = !1;
	if (n && n !== "*" && (!e.schema.tagNames || e.schema.tagNames.includes(n)) && (a = !0, e.schema.ancestors && eh.call(e.schema.ancestors, n))) {
		let t = e.schema.ancestors[n], r = -1;
		for (a = !1; ++r < t.length;) e.stack.includes(t[r]) && (a = !0);
	}
	if (!a) return e.schema.strip && !e.schema.strip.includes(n) ? r : void 0;
	let o = {
		type: "element",
		tagName: n,
		properties: i,
		children: r
	};
	return mh(o, t), o;
}
function oh(e, t) {
	let n = {
		type: "root",
		children: ch(e, t.children)
	};
	return mh(n, t), n;
}
function sh(e, t) {
	let n = {
		type: "text",
		value: typeof t.value == "string" ? t.value : ""
	};
	return mh(n, t), n;
}
function ch(e, t) {
	let n = [];
	if (Array.isArray(t)) {
		let r = t, i = -1;
		for (; ++i < r.length;) {
			let t = nh(e, r[i]);
			t && (Array.isArray(t) ? n.push(...t) : n.push(t));
		}
	}
	return n;
}
function lh(e, t) {
	let n = e.stack[e.stack.length - 1], r = e.schema.attributes, i = e.schema.required, a = r && eh.call(r, n) ? r[n] : void 0, o = r && eh.call(r, "*") ? r["*"] : void 0, s = t && typeof t == "object" ? t : {}, c = {}, l;
	for (l in s) if (eh.call(s, l)) {
		let t = s[l], n = uh(e, hh(a, l), l, t);
		n ??= uh(e, hh(o, l), l, t), n != null && (c[l] = n);
	}
	if (i && eh.call(i, n)) {
		let e = i[n];
		for (l in e) eh.call(e, l) && !eh.call(c, l) && (c[l] = e[l]);
	}
	return c;
}
function uh(e, t, n, r) {
	return t ? Array.isArray(r) ? dh(e, t, n, r) : fh(e, t, n, r) : void 0;
}
function dh(e, t, n, r) {
	let i = -1, a = [];
	for (; ++i < r.length;) {
		let o = fh(e, t, n, r[i]);
		(typeof o == "number" || typeof o == "string") && a.push(o);
	}
	return a;
}
function fh(e, t, n, r) {
	if ((typeof r == "boolean" || typeof r == "number" || typeof r == "string") && ph(e, n, r)) {
		if (typeof t == "object" && t.length > 1) {
			let e = !1, n = 0;
			for (; ++n < t.length;) {
				let i = t[n];
				if (i && typeof i == "object" && "flags" in i) {
					if (i.test(String(r))) {
						e = !0;
						break;
					}
				} else if (i === r) {
					e = !0;
					break;
				}
			}
			if (!e) return;
		}
		return e.schema.clobber && e.schema.clobberPrefix && e.schema.clobber.includes(n) ? e.schema.clobberPrefix + r : r;
	}
}
function ph(e, t, n) {
	let r = e.schema.protocols && eh.call(e.schema.protocols, t) ? e.schema.protocols[t] : void 0;
	if (!r || r.length === 0) return !0;
	let i = String(n), a = i.indexOf(":"), o = i.indexOf("?"), s = i.indexOf("#"), c = i.indexOf("/");
	if (a < 0 || c > -1 && a > c || o > -1 && a > o || s > -1 && a > s) return !0;
	let l = -1;
	for (; ++l < r.length;) {
		let e = r[l];
		if (a === e.length && i.slice(0, e.length) === e) return !0;
	}
	return !1;
}
function mh(e, t) {
	let n = Yr(t);
	t.data && (e.data = Sc(t.data)), n && (e.position = n);
}
function hh(e, t) {
	let n, r = -1;
	if (e) for (; ++r < e.length;) {
		let i = e[r], a = typeof i == "string" ? i : i[0];
		if (a === t) return i;
		a === "data*" && (n = i);
	}
	if (t.length > 4 && t.slice(0, 4).toLowerCase() === "data") return n;
}
//#endregion
//#region node_modules/rehype-sanitize/lib/index.js
function gh(e) {
	return function(t) {
		return th(t, e);
	};
}
//#endregion
//#region node_modules/ccount/index.js
function _h(e, t) {
	let n = String(e);
	if (typeof t != "string") throw TypeError("Expected character");
	let r = 0, i = n.indexOf(t);
	for (; i !== -1;) r++, i = n.indexOf(t, i + t.length);
	return r;
}
//#endregion
//#region node_modules/escape-string-regexp/index.js
function vh(e) {
	if (typeof e != "string") throw TypeError("Expected a string");
	return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
//#endregion
//#region node_modules/mdast-util-find-and-replace/lib/index.js
function yh(e, t, n) {
	let r = Ec((n || {}).ignore || []), i = bh(t), a = -1;
	for (; ++a < i.length;) Fc(e, "text", o);
	function o(e, t) {
		let n = -1, i;
		for (; ++n < t.length;) {
			let e = t[n], a = i ? i.children : void 0;
			if (r(e, a ? a.indexOf(e) : void 0, i)) return;
			i = e;
		}
		if (i) return s(e, t);
	}
	function s(e, t) {
		let n = t[t.length - 1], r = i[a][0], o = i[a][1], s = 0, c = n.children.indexOf(e), l = !1, u = [];
		r.lastIndex = 0;
		let d = r.exec(e.value);
		for (; d;) {
			let n = d.index, i = {
				index: d.index,
				input: d.input,
				stack: [...t, e]
			}, a = o(...d, i);
			if (typeof a == "string" && (a = a.length > 0 ? {
				type: "text",
				value: a
			} : void 0), a === !1 ? r.lastIndex = n + 1 : (s !== n && u.push({
				type: "text",
				value: e.value.slice(s, n)
			}), Array.isArray(a) ? u.push(...a) : a && u.push(a), s = n + d[0].length, l = !0), !r.global) break;
			d = r.exec(e.value);
		}
		return l ? (s < e.value.length && u.push({
			type: "text",
			value: e.value.slice(s)
		}), n.children.splice(c, 1, ...u)) : u = [e], c + u.length;
	}
}
function bh(e) {
	let t = [];
	if (!Array.isArray(e)) throw TypeError("Expected find and replace tuple or list of tuples");
	let n = !e[0] || Array.isArray(e[0]) ? e : [e], r = -1;
	for (; ++r < n.length;) {
		let e = n[r];
		t.push([xh(e[0]), Sh(e[1])]);
	}
	return t;
}
function xh(e) {
	return typeof e == "string" ? new RegExp(vh(e), "g") : e;
}
function Sh(e) {
	return typeof e == "function" ? e : function() {
		return e;
	};
}
//#endregion
//#region node_modules/mdast-util-gfm-autolink-literal/lib/index.js
var Ch = "phrasing", wh = [
	"autolink",
	"link",
	"image",
	"label"
];
function Th() {
	return {
		transforms: [Nh],
		enter: {
			literalAutolink: Dh,
			literalAutolinkEmail: Oh,
			literalAutolinkHttp: Oh,
			literalAutolinkWww: Oh
		},
		exit: {
			literalAutolink: Mh,
			literalAutolinkEmail: jh,
			literalAutolinkHttp: kh,
			literalAutolinkWww: Ah
		}
	};
}
function Eh() {
	return { unsafe: [
		{
			character: "@",
			before: "[+\\-.\\w]",
			after: "[\\-.\\w]",
			inConstruct: Ch,
			notInConstruct: wh
		},
		{
			character: ".",
			before: "[Ww]",
			after: "[\\-.\\w]",
			inConstruct: Ch,
			notInConstruct: wh
		},
		{
			character: ":",
			before: "[ps]",
			after: "\\/",
			inConstruct: Ch,
			notInConstruct: wh
		}
	] };
}
function Dh(e) {
	this.enter({
		type: "link",
		title: null,
		url: "",
		children: []
	}, e);
}
function Oh(e) {
	this.config.enter.autolinkProtocol.call(this, e);
}
function kh(e) {
	this.config.exit.autolinkProtocol.call(this, e);
}
function Ah(e) {
	this.config.exit.data.call(this, e);
	let t = this.stack[this.stack.length - 1];
	t.type, t.url = "http://" + this.sliceSerialize(e);
}
function jh(e) {
	this.config.exit.autolinkEmail.call(this, e);
}
function Mh(e) {
	this.exit(e);
}
function Nh(e) {
	yh(e, [[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, Ph], [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, Fh]], { ignore: ["link", "linkReference"] });
}
function Ph(e, t, n, r, i) {
	let a = "";
	if (!Rh(i) || (/^w/i.test(t) && (n = t + n, t = "", a = "http://"), !Ih(n))) return !1;
	let o = Lh(n + r);
	if (!o[0]) return !1;
	let s = {
		type: "link",
		title: null,
		url: a + t + o[0],
		children: [{
			type: "text",
			value: t + o[0]
		}]
	};
	return o[1] ? [s, {
		type: "text",
		value: o[1]
	}] : s;
}
function Fh(e, t, n, r) {
	return !Rh(r, !0) || /[-\d_]$/.test(n) ? !1 : {
		type: "link",
		title: null,
		url: "mailto:" + t + "@" + n,
		children: [{
			type: "text",
			value: t + "@" + n
		}]
	};
}
function Ih(e) {
	let t = e.split(".");
	return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function Lh(e) {
	let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
	if (!t) return [e, void 0];
	e = e.slice(0, t.index);
	let n = t[0], r = n.indexOf(")"), i = _h(e, "("), a = _h(e, ")");
	for (; r !== -1 && i > a;) e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), a++;
	return [e, n];
}
function Rh(e, t) {
	let n = e.input.charCodeAt(e.index - 1);
	return (e.index === 0 || ea(n) || $i(n)) && (!t || n !== 47);
}
//#endregion
//#region node_modules/mdast-util-gfm-footnote/lib/index.js
Jh.peek = qh;
function zh() {
	this.buffer();
}
function Bh(e) {
	this.enter({
		type: "footnoteReference",
		identifier: "",
		label: ""
	}, e);
}
function Vh() {
	this.buffer();
}
function Hh(e) {
	this.enter({
		type: "footnoteDefinition",
		identifier: "",
		label: "",
		children: []
	}, e);
}
function Uh(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = Gi(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function Wh(e) {
	this.exit(e);
}
function Gh(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = Gi(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function Kh(e) {
	this.exit(e);
}
function qh() {
	return "[";
}
function Jh(e, t, n, r) {
	let i = n.createTracker(r), a = i.move("[^"), o = n.enter("footnoteReference"), s = n.enter("reference");
	return a += i.move(n.safe(n.associationId(e), {
		after: "]",
		before: a
	})), s(), o(), a += i.move("]"), a;
}
function Yh() {
	return {
		enter: {
			gfmFootnoteCallString: zh,
			gfmFootnoteCall: Bh,
			gfmFootnoteDefinitionLabelString: Vh,
			gfmFootnoteDefinition: Hh
		},
		exit: {
			gfmFootnoteCallString: Uh,
			gfmFootnoteCall: Wh,
			gfmFootnoteDefinitionLabelString: Gh,
			gfmFootnoteDefinition: Kh
		}
	};
}
function Xh(e) {
	let t = !1;
	return e && e.firstLineBlank && (t = !0), {
		handlers: {
			footnoteDefinition: n,
			footnoteReference: Jh
		},
		unsafe: [{
			character: "[",
			inConstruct: [
				"label",
				"phrasing",
				"reference"
			]
		}]
	};
	function n(e, n, r, i) {
		let a = r.createTracker(i), o = a.move("[^"), s = r.enter("footnoteDefinition"), c = r.enter("label");
		return o += a.move(r.safe(r.associationId(e), {
			before: o,
			after: "]"
		})), c(), o += a.move("]:"), e.children && e.children.length > 0 && (a.shift(4), o += a.move((t ? "\n" : " ") + r.indentLines(r.containerFlow(e, a.current()), t ? Qh : Zh))), s(), o;
	}
}
function Zh(e, t, n) {
	return t === 0 ? e : Qh(e, t, n);
}
function Qh(e, t, n) {
	return (n ? "" : "    ") + e;
}
//#endregion
//#region node_modules/mdast-util-gfm-strikethrough/lib/index.js
var $h = [
	"autolink",
	"destinationLiteral",
	"destinationRaw",
	"reference",
	"titleQuote",
	"titleApostrophe"
];
ig.attention = ag, ig.peek = og;
function eg() {
	return {
		canContainEols: ["delete"],
		enter: { strikethrough: ng },
		exit: { strikethrough: rg }
	};
}
function tg() {
	return {
		handlers: { delete: ig },
		unsafe: [{
			character: "~",
			inConstruct: "phrasing",
			notInConstruct: $h
		}]
	};
}
function ng(e) {
	this.enter({
		type: "delete",
		children: [],
		position: void 0
	}, e);
}
function rg(e) {
	this.exit(e);
}
function ig(e, t, n, r) {
	let i = n.createTracker(r), a = n.stack.includes("strikethrough") ? "~" : "~~", o = n.enter("strikethrough"), s = i.move(a);
	return s += n.containerPhrasing(e, {
		...i.current(),
		before: s,
		after: "~"
	}), s += i.move(a), o(), s;
}
function ag() {
	return {
		construct: "strikethrough",
		markers: ["~"],
		sizes: [2, 1]
	};
}
function og() {
	return "~";
}
//#endregion
//#region node_modules/markdown-table/index.js
function sg(e) {
	return e.length;
}
function cg(e, t) {
	let n = t || {}, r = (n.align || []).concat(), i = n.stringLength || sg, a = [], o = [], s = [], c = [], l = 0, u = -1;
	for (; ++u < e.length;) {
		let t = [], r = [], a = -1;
		for (e[u].length > l && (l = e[u].length); ++a < e[u].length;) {
			let o = lg(e[u][a]);
			if (n.alignDelimiters !== !1) {
				let e = i(o);
				r[a] = e, (c[a] === void 0 || e > c[a]) && (c[a] = e);
			}
			t.push(o);
		}
		o[u] = t, s[u] = r;
	}
	let d = -1;
	if (typeof r == "object" && "length" in r) for (; ++d < l;) a[d] = ug(r[d]);
	else {
		let e = ug(r);
		for (; ++d < l;) a[d] = e;
	}
	d = -1;
	let f = [], p = [];
	for (; ++d < l;) {
		let e = a[d], t = "", r = "";
		e === 99 ? (t = ":", r = ":") : e === 108 ? t = ":" : e === 114 && (r = ":");
		let i = n.alignDelimiters === !1 ? 1 : Math.max(1, c[d] - t.length - r.length), o = t + "-".repeat(i) + r;
		n.alignDelimiters !== !1 && (i = t.length + i + r.length, i > c[d] && (c[d] = i), p[d] = i), f[d] = o;
	}
	o.splice(1, 0, f), s.splice(1, 0, p), u = -1;
	let m = [];
	for (; ++u < o.length;) {
		let e = o[u], t = s[u];
		d = -1;
		let r = [];
		for (; ++d < l;) {
			let i = e[d] || "", o = "", s = "";
			if (n.alignDelimiters !== !1) {
				let e = c[d] - (t[d] || 0), n = a[d];
				n === 114 ? o = " ".repeat(e) : n === 99 ? e % 2 ? (o = " ".repeat(e / 2 + .5), s = " ".repeat(e / 2 - .5)) : (o = " ".repeat(e / 2), s = o) : s = " ".repeat(e);
			}
			n.delimiterStart !== !1 && !d && r.push("|"), n.padding !== !1 && (n.alignDelimiters !== !1 || i !== "") && (n.delimiterStart !== !1 || d) && r.push(" "), n.alignDelimiters !== !1 && r.push(o), r.push(i), n.alignDelimiters !== !1 && r.push(s), n.padding !== !1 && r.push(" "), (n.delimiterEnd !== !1 || d !== l - 1) && r.push("|");
		}
		m.push(n.delimiterEnd === !1 ? r.join("").replace(/ +$/, "") : r.join(""));
	}
	return m.join("\n");
}
function lg(e) {
	return e == null ? "" : String(e);
}
function ug(e) {
	let t = typeof e == "string" ? e.codePointAt(0) : 0;
	return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
//#endregion
//#region node_modules/mdast-util-phrasing/lib/index.js
var dg = Ec([
	"break",
	"delete",
	"emphasis",
	"footnote",
	"footnoteReference",
	"image",
	"imageReference",
	"inlineCode",
	"inlineMath",
	"link",
	"linkReference",
	"mdxJsxTextElement",
	"mdxTextExpression",
	"strong",
	"text",
	"textDirective"
]);
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/blockquote.js
function fg(e, t, n, r) {
	let i = n.enter("blockquote"), a = n.createTracker(r);
	a.move("> "), a.shift(2);
	let o = n.indentLines(n.containerFlow(e, a.current()), pg);
	return i(), o;
}
function pg(e, t, n) {
	return ">" + (n ? "" : " ") + e;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/pattern-in-scope.js
function mg(e, t) {
	return hg(e, t.inConstruct, !0) && !hg(e, t.notInConstruct, !1);
}
function hg(e, t, n) {
	if (typeof t == "string" && (t = [t]), !t || t.length === 0) return n;
	let r = -1;
	for (; ++r < t.length;) if (e.includes(t[r])) return !0;
	return !1;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/break.js
function gg(e, t, n, r) {
	let i = -1;
	for (; ++i < n.unsafe.length;) {
		let e = n.unsafe[i];
		if (e.character === "\n" && !e.before && !e.after && mg(n.stack, e)) return /[\t ]/.test(r.before) ? "" : " ";
	}
	return "\\\n";
}
//#endregion
//#region node_modules/longest-streak/index.js
function _g(e, t) {
	let n = String(e), r = n.indexOf(t), i = r, a = 0, o = 0;
	if (typeof t != "string") throw TypeError("Expected substring");
	for (; r !== -1;) r === i ? ++a > o && (o = a) : a = 1, i = r + t.length, r = n.indexOf(t, i);
	return o;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js
function vg(e, t) {
	return !(t.options.fences !== !1 || !e.value || e.lang || !/[^\n\r ]/.test(e.value) || /^[\t ]*(?:[\n\r]|$)|(?:^|[\n\r])[\t ]*$/.test(e.value));
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-fence.js
function yg(e) {
	let t = e.options.fence || "`";
	if (t !== "`" && t !== "~") throw Error("Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/code.js
function bg(e, t, n, r) {
	let i = yg(n), a = e.value || "";
	if (vg(e, n)) {
		let e = n.enter("codeIndented"), t = n.indentLines(a, xg);
		return e(), t;
	}
	let o = n.createTracker(r), s = i.repeat(Math.max(_g(a, i) + 1, 3)), c = n.enter("codeFenced"), l = i === "`" ? "GraveAccent" : "Tilde", u = o.move(s);
	if (e.lang) {
		let t = n.enter(`codeFencedLang${l}`);
		u += o.move(n.safe(e.lang, {
			before: u,
			after: " ",
			encode: ["`"],
			...o.current()
		})), t();
	}
	if (e.lang && e.meta) {
		let t = n.enter(`codeFencedMeta${l}`);
		u += o.move(" "), u += o.move(n.safe(e.meta, {
			before: u,
			after: "\n",
			encode: ["`"],
			...o.current()
		})), t();
	}
	return u += o.move("\n"), a && (u += o.move(a + "\n")), u += o.move(s), c(), u;
}
function xg(e, t, n) {
	return (n ? "" : "    ") + e;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-quote.js
function Sg(e) {
	let t = e.options.quote || "\"";
	if (t !== "\"" && t !== "'") throw Error("Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/definition.js
function Cg(e, t, n, r) {
	let i = Sg(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.enter("definition"), s = n.enter("label"), c = n.createTracker(r), l = c.move("[");
	return l += c.move(n.safe(n.associationId(e), {
		before: l,
		after: "]",
		...c.current()
	})), l += c.move("]: "), s(), !e.url || /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), l += c.move("<"), l += c.move(n.safe(e.url, {
		before: l,
		after: ">",
		...c.current()
	})), l += c.move(">")) : (s = n.enter("destinationRaw"), l += c.move(n.safe(e.url, {
		before: l,
		after: e.title ? " " : "\n",
		...c.current()
	}))), s(), e.title && (s = n.enter(`title${a}`), l += c.move(" " + i), l += c.move(n.safe(e.title, {
		before: l,
		after: i,
		...c.current()
	})), l += c.move(i), s()), o(), l;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-emphasis.js
function wg(e) {
	let t = e.options.emphasis || "*";
	if (t !== "*" && t !== "_") throw Error("Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`");
	return t;
}
Tg.attention = Eg, Tg.peek = Dg;
function Tg(e, t, n, r) {
	let i = n.enter("phrasing"), a = n.containerPhrasing({
		type: "root",
		children: [e]
	}, r);
	return i(), a;
}
function Eg(e, t) {
	return {
		construct: "emphasis",
		markers: wg(t) === "*" ? ["*", "_"] : ["_", "*"],
		sizes: [1]
	};
}
function Dg(e, t, n) {
	return n.options.emphasis || "*";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/encode-character-reference.js
function Og(e) {
	return "&#x" + e.toString(16).toUpperCase() + ";";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js
function kg(e, t) {
	let n = !1;
	return Lc(e, function(e) {
		if ("value" in e && /\r?\n|\r/.test(e.value) || e.type === "break") return n = !0, !1;
	}), !!((!e.depth || e.depth < 3) && Mi(e) && (t.options.setext || n));
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/heading.js
function Ag(e, t, n, r) {
	let i = Math.max(Math.min(6, e.depth || 1), 1), a = n.createTracker(r);
	if (kg(e, n)) {
		let t = n.enter("headingSetext"), r = n.enter("phrasing"), o = n.containerPhrasing(e, {
			...a.current(),
			before: "\n",
			after: "\n"
		});
		return r(), t(), o + "\n" + (i === 1 ? "=" : "-").repeat(o.length - (Math.max(o.lastIndexOf("\r"), o.lastIndexOf("\n")) + 1));
	}
	let o = "#".repeat(i), s = n.enter("headingAtx"), c = n.enter("phrasing");
	a.move(o + " ");
	let l = n.containerPhrasing(e, {
		before: "# ",
		after: "\n",
		...a.current()
	}), u = l.charCodeAt(0);
	return (u === 9 || u === 32) && (l = Og(u) + l.slice(1)), l = l ? o + " " + l : o, n.options.closeAtx && (l += " " + o), c(), s(), l;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/html.js
jg.peek = Mg;
function jg(e) {
	return e.value || "";
}
function Mg() {
	return "<";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/image.js
Ng.peek = Pg;
function Ng(e, t, n, r) {
	let i = Sg(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.enter("image"), s = n.enter("label"), c = n.createTracker(r), l = c.move("![");
	return l += c.move(n.safe(e.alt, {
		before: l,
		after: "]",
		...c.current()
	})), l += c.move("]("), s(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), l += c.move("<"), l += c.move(n.safe(e.url, {
		before: l,
		after: ">",
		...c.current()
	})), l += c.move(">")) : (s = n.enter("destinationRaw"), l += c.move(n.safe(e.url, {
		before: l,
		after: e.title ? " " : ")",
		...c.current()
	}))), s(), e.title && (s = n.enter(`title${a}`), l += c.move(" " + i), l += c.move(n.safe(e.title, {
		before: l,
		after: i,
		...c.current()
	})), l += c.move(i), s()), l += c.move(")"), o(), l;
}
function Pg() {
	return "!";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/image-reference.js
Fg.peek = Ig;
function Fg(e, t, n, r) {
	let i = e.referenceType, a = n.enter("imageReference"), o = n.enter("label"), s = n.createTracker(r), c = s.move("!["), l = n.safe(e.alt, {
		before: c,
		after: "]",
		...s.current()
	});
	c += s.move(l + "]["), o();
	let u = n.stack;
	n.stack = u.filter(function(e) {
		return e !== "phrasing";
	}), o = n.enter("reference");
	let d = n.safe(n.associationId(e), {
		before: c,
		after: "]",
		...s.current()
	});
	return o(), n.stack = u, a(), i === "full" || !l || l !== d ? c += s.move(d + "]") : i === "shortcut" ? c = c.slice(0, -1) : c += s.move("]"), c;
}
function Ig() {
	return "!";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/inline-code.js
Lg.peek = Rg;
function Lg(e, t, n) {
	let r = e.value || "", i = "`", a = -1;
	for (; RegExp("(^|[^`])" + i + "([^`]|$)").test(r);) i += "`";
	for (/[^\n\r ]/.test(r) && (/^[\n\r ]/.test(r) && /[\n\r ]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++a < n.unsafe.length;) {
		let e = n.unsafe[a], t = n.compilePattern(e);
		if (!e.atBreak) continue;
		let i;
		for (; i = t.exec(r);) {
			let e = i.index;
			r.charCodeAt(e) === 10 && r.charCodeAt(e - 1) === 13 && e--, r = r.slice(0, e) + " " + r.slice(i.index + 1);
		}
	}
	return i + r + i;
}
function Rg() {
	return "`";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/format-link-as-autolink.js
function zg(e, t) {
	let n = Mi(e);
	return !(t.options.resourceLink || !e.url || e.title || !e.children || e.children.length !== 1 || e.children[0].type !== "text" || n !== e.url && "mailto:" + n !== e.url || !/^[a-z][+\-.a-z]+:/i.test(e.url) || /[\0- <>\u007F]/.test(e.url));
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/link.js
Bg.peek = Vg;
function Bg(e, t, n, r) {
	let i = Sg(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.createTracker(r);
	if (zg(e, n)) {
		let t = n.stack;
		n.stack = t.filter(function(e) {
			return e !== "phrasing";
		});
		let r = n.enter("autolink"), i = o.move("<");
		return i += o.move(n.containerPhrasing(e, {
			before: i,
			after: ">",
			...o.current()
		})), i += o.move(">"), r(), n.stack = t, i;
	}
	let s = n.enter("link"), c = n.enter("label"), l = o.move("[");
	return l += o.move(n.containerPhrasing(e, {
		before: l,
		after: "](",
		...o.current()
	})), l += o.move("]("), c(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (c = n.enter("destinationLiteral"), l += o.move("<"), l += o.move(n.safe(e.url, {
		before: l,
		after: ">",
		...o.current()
	})), l += o.move(">")) : (c = n.enter("destinationRaw"), l += o.move(n.safe(e.url, {
		before: l,
		after: e.title ? " " : ")",
		...o.current()
	}))), c(), e.title && (c = n.enter(`title${a}`), l += o.move(" " + i), l += o.move(n.safe(e.title, {
		before: l,
		after: i,
		...o.current()
	})), l += o.move(i), c()), l += o.move(")"), s(), l;
}
function Vg(e, t, n) {
	return zg(e, n) ? "<" : "[";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/link-reference.js
Hg.peek = Ug;
function Hg(e, t, n, r) {
	let i = e.referenceType, a = n.enter("linkReference"), o = n.enter("label"), s = n.createTracker(r), c = s.move("["), l = n.containerPhrasing(e, {
		before: c,
		after: "]",
		...s.current()
	});
	c += s.move(l + "]["), o();
	let u = n.stack;
	n.stack = u.filter(function(e) {
		return e !== "phrasing";
	}), o = n.enter("reference");
	let d = n.safe(n.associationId(e), {
		before: c,
		after: "]",
		...s.current()
	});
	return o(), n.stack = u, a(), i === "full" || !l || l !== d ? c += s.move(d + "]") : i === "shortcut" ? c = c.slice(0, -1) : c += s.move("]"), c;
}
function Ug() {
	return "[";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-bullet.js
function Wg(e) {
	let t = e.options.bullet || "*";
	if (t !== "*" && t !== "+" && t !== "-") throw Error("Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-bullet-other.js
function Gg(e) {
	let t = Wg(e), n = e.options.bulletOther;
	if (!n) return t === "*" ? "-" : "*";
	if (n !== "*" && n !== "+" && n !== "-") throw Error("Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
	if (n === t) throw Error("Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different");
	return n;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-bullet-ordered.js
function Kg(e) {
	let t = e.options.bulletOrdered || ".";
	if (t !== "." && t !== ")") throw Error("Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-rule.js
function qg(e) {
	let t = e.options.rule || "*";
	if (t !== "*" && t !== "-" && t !== "_") throw Error("Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/list.js
function Jg(e, t, n, r) {
	let i = n.enter("list"), a = n.bulletCurrent, o = e.ordered ? Kg(n) : Wg(n), s = e.ordered ? o === "." ? ")" : "." : Gg(n), c = t && n.bulletLastUsed ? o === n.bulletLastUsed : !1;
	if (!e.ordered) {
		let t = e.children ? e.children[0] : void 0;
		if ((o === "*" || o === "-") && t && (!t.children || !t.children[0]) && n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (c = !0), qg(n) === o && t) {
			let t = -1;
			for (; ++t < e.children.length;) {
				let n = e.children[t];
				if (n && n.type === "listItem" && n.children && n.children[0] && n.children[0].type === "thematicBreak") {
					c = !0;
					break;
				}
			}
		}
	}
	c && (o = s), n.bulletCurrent = o;
	let l = n.containerFlow(e, r);
	return n.bulletLastUsed = o, n.bulletCurrent = a, i(), l;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js
function Yg(e) {
	let t = e.options.listItemIndent || "one";
	if (t !== "tab" && t !== "one" && t !== "mixed") throw Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/list-item.js
function Xg(e, t, n, r) {
	let i = Yg(n), a = n.bulletCurrent || Wg(n);
	t && t.type === "list" && t.ordered && (a = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + a);
	let o = a.length + 1;
	(i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (o = Math.ceil(o / 4) * 4);
	let s = n.createTracker(r);
	s.move(a + " ".repeat(o - a.length)), s.shift(o);
	let c = n.enter("listItem"), l = n.indentLines(n.containerFlow(e, s.current()), u);
	return c(), l;
	function u(e, t, n) {
		return t ? (n ? "" : " ".repeat(o)) + e : (n ? a : a + " ".repeat(o - a.length)) + e;
	}
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/paragraph.js
function Zg(e, t, n, r) {
	let i = n.enter("paragraph"), a = n.enter("phrasing"), o = n.containerPhrasing(e, r);
	return a(), i(), o;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/root.js
function Qg(e, t, n, r) {
	if (!e.children.some(function(e) {
		return dg(e);
	})) return n.containerFlow(e, r);
	let i = n.enter("phrasing"), a = n.containerPhrasing(e, r);
	return i(), a;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-strong.js
function $g(e) {
	let t = e.options.strong || "*";
	if (t !== "*" && t !== "_") throw Error("Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`");
	return t;
}
e_.attention = t_, e_.peek = n_;
function e_(e, t, n, r) {
	let i = n.enter("phrasing"), a = n.containerPhrasing({
		type: "root",
		children: [e]
	}, r);
	return i(), a;
}
function t_(e, t) {
	return {
		construct: "strong",
		markers: $g(t) === "*" ? ["*", "_"] : ["_", "*"],
		sizes: [2]
	};
}
function n_(e, t, n) {
	return n.options.strong || "*";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/text.js
function r_(e, t, n, r) {
	return n.safe(e.value, r);
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/check-rule-repetition.js
function i_(e) {
	let t = e.options.ruleRepetition || 3;
	if (t < 3) throw Error("Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more");
	return t;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/thematic-break.js
function a_(e, t, n) {
	let r = (qg(n) + (n.options.ruleSpaces ? " " : "")).repeat(i_(n));
	return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/handle/index.js
var o_ = {
	blockquote: fg,
	break: gg,
	code: bg,
	definition: Cg,
	emphasis: Tg,
	hardBreak: gg,
	heading: Ag,
	html: jg,
	image: Ng,
	imageReference: Fg,
	inlineCode: Lg,
	link: Bg,
	linkReference: Hg,
	list: Jg,
	listItem: Xg,
	paragraph: Zg,
	root: Qg,
	strong: e_,
	text: r_,
	thematicBreak: a_
};
//#endregion
//#region node_modules/mdast-util-gfm-table/lib/index.js
function s_() {
	return {
		enter: {
			table: c_,
			tableData: f_,
			tableHeader: f_,
			tableRow: u_
		},
		exit: {
			codeText: p_,
			table: l_,
			tableData: d_,
			tableHeader: d_,
			tableRow: d_
		}
	};
}
function c_(e) {
	let t = e._align;
	this.enter({
		type: "table",
		align: t.map(function(e) {
			return e === "none" ? null : e;
		}),
		children: []
	}, e), this.data.inTable = !0;
}
function l_(e) {
	this.exit(e), this.data.inTable = void 0;
}
function u_(e) {
	this.enter({
		type: "tableRow",
		children: []
	}, e);
}
function d_(e) {
	this.exit(e);
}
function f_(e) {
	this.enter({
		type: "tableCell",
		children: []
	}, e);
}
function p_(e) {
	let t = this.resume();
	this.data.inTable && (t = t.replace(/\\([\\|])/g, m_));
	let n = this.stack[this.stack.length - 1];
	n.type, n.value = t, this.exit(e);
}
function m_(e, t) {
	return t === "|" ? t : e;
}
function h_(e) {
	let t = e || {}, n = t.tableCellPadding, r = t.tablePipeAlign, i = t.stringLength, a = n ? " " : "|";
	return {
		unsafe: [
			{
				character: "\r",
				inConstruct: "tableCell"
			},
			{
				character: "\n",
				inConstruct: "tableCell"
			},
			{
				atBreak: !0,
				character: "|",
				after: "[	 :-]"
			},
			{
				character: "|",
				inConstruct: "tableCell"
			},
			{
				atBreak: !0,
				character: ":",
				after: "-"
			},
			{
				atBreak: !0,
				character: "-",
				after: "[:|-]"
			}
		],
		handlers: {
			inlineCode: f,
			table: o,
			tableCell: c,
			tableRow: s
		}
	};
	function o(e, t, n, r) {
		return l(u(e, n, r), e.align);
	}
	function s(e, t, n, r) {
		let i = l([d(e, n, r)]);
		return i.slice(0, i.indexOf("\n"));
	}
	function c(e, t, n, r) {
		let i = n.enter("tableCell"), o = n.enter("phrasing"), s = n.containerPhrasing(e, {
			...r,
			before: a,
			after: a
		});
		return o(), i(), s;
	}
	function l(e, t) {
		return cg(e, {
			align: t,
			alignDelimiters: r,
			padding: n,
			stringLength: i
		});
	}
	function u(e, t, n) {
		let r = e.children, i = -1, a = [], o = t.enter("table");
		for (; ++i < r.length;) a[i] = d(r[i], t, n);
		return o(), a;
	}
	function d(e, t, n) {
		let r = e.children, i = -1, a = [], o = t.enter("tableRow");
		for (; ++i < r.length;) a[i] = c(r[i], e, t, n);
		return o(), a;
	}
	function f(e, t, n) {
		let r = o_.inlineCode(e, t, n);
		return n.stack.includes("tableCell") && (r = r.replace(/\|/g, "\\$&")), r;
	}
}
//#endregion
//#region node_modules/mdast-util-gfm-task-list-item/lib/index.js
function g_() {
	return { exit: {
		taskListCheckValueChecked: v_,
		taskListCheckValueUnchecked: v_,
		paragraph: y_
	} };
}
function __() {
	return {
		unsafe: [{
			atBreak: !0,
			character: "-",
			after: "[:|-]"
		}],
		handlers: { listItem: b_ }
	};
}
function v_(e) {
	let t = this.stack[this.stack.length - 2];
	t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function y_(e) {
	let t = this.stack[this.stack.length - 2];
	if (t && t.type === "listItem" && typeof t.checked == "boolean") {
		let e = this.stack[this.stack.length - 1];
		e.type;
		let n = e.children[0];
		if (n && n.type === "text") {
			let r = t.children, i = -1, a;
			for (; ++i < r.length;) {
				let e = r[i];
				if (e.type === "paragraph") {
					a = e;
					break;
				}
			}
			a === e && (n.value = n.value.slice(1), n.value.length === 0 ? e.children.shift() : e.position && n.position && typeof n.position.start.offset == "number" && (n.position.start.column++, n.position.start.offset++, e.position.start = Object.assign({}, n.position.start)));
		}
	}
	this.exit(e);
}
function b_(e, t, n, r) {
	let i = e.children[0], a = typeof e.checked == "boolean" && i && i.type === "paragraph", o = "[" + (e.checked ? "x" : " ") + "] ", s = n.createTracker(r);
	a && s.move(o);
	let c = o_.listItem(e, t, n, {
		...r,
		...s.current()
	});
	return a && (c = c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, l)), c;
	function l(e) {
		return e + o;
	}
}
//#endregion
//#region node_modules/mdast-util-gfm/lib/index.js
function x_() {
	return [
		Th(),
		Yh(),
		eg(),
		s_(),
		g_()
	];
}
function S_(e) {
	return { extensions: [
		Eh(),
		Xh(e),
		tg(),
		h_(e),
		__()
	] };
}
//#endregion
//#region node_modules/micromark-extension-gfm-autolink-literal/lib/syntax.js
var C_ = {
	tokenize: L_,
	partial: !0
}, w_ = {
	tokenize: R_,
	partial: !0
}, T_ = {
	tokenize: z_,
	partial: !0
}, E_ = {
	tokenize: B_,
	partial: !0
}, D_ = {
	tokenize: V_,
	partial: !0
}, O_ = {
	name: "wwwAutolink",
	tokenize: F_,
	previous: H_
}, k_ = {
	name: "protocolAutolink",
	tokenize: I_,
	previous: U_
}, A_ = {
	name: "emailAutolink",
	tokenize: P_,
	previous: W_
}, j_ = {};
function M_() {
	return { text: j_ };
}
for (var N_ = 48; N_ < 123;) j_[N_] = A_, N_++, N_ === 58 ? N_ = 65 : N_ === 91 && (N_ = 97);
j_[43] = A_, j_[45] = A_, j_[46] = A_, j_[95] = A_, j_[72] = [A_, k_], j_[104] = [A_, k_], j_[87] = [A_, O_], j_[119] = [A_, O_];
function P_(e, t, n) {
	let r = this, i, a;
	return o;
	function o(t) {
		return !G_(t) || !W_.call(r, r.previous) || K_(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), s(t));
	}
	function s(t) {
		return G_(t) ? (e.consume(t), s) : t === 64 ? (e.consume(t), c) : n(t);
	}
	function c(t) {
		return t === 46 ? e.check(D_, u, l)(t) : t === 45 || t === 95 || qi(t) ? (a = !0, e.consume(t), c) : u(t);
	}
	function l(t) {
		return e.consume(t), i = !0, c;
	}
	function u(o) {
		return a && i && Ki(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(o)) : n(o);
	}
}
function F_(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return t !== 87 && t !== 119 || !H_.call(r, r.previous) || K_(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(C_, e.attempt(w_, e.attempt(T_, a), n), n)(t));
	}
	function a(n) {
		return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n);
	}
}
function I_(e, t, n) {
	let r = this, i = "", a = !1;
	return o;
	function o(t) {
		return (t === 72 || t === 104) && U_.call(r, r.previous) && !K_(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(t), e.consume(t), s) : n(t);
	}
	function s(t) {
		if (Ki(t) && i.length < 5) return i += String.fromCodePoint(t), e.consume(t), s;
		if (t === 58) {
			let n = i.toLowerCase();
			if (n === "http" || n === "https") return e.consume(t), c;
		}
		return n(t);
	}
	function c(t) {
		return t === 47 ? (e.consume(t), a ? l : (a = !0, c)) : n(t);
	}
	function l(t) {
		return t === null || Yi(t) || V(t) || ea(t) || $i(t) ? n(t) : e.attempt(w_, e.attempt(T_, u), n)(t);
	}
	function u(n) {
		return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n);
	}
}
function L_(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return (t === 87 || t === 119) && r < 3 ? (r++, e.consume(t), i) : t === 46 && r === 3 ? (e.consume(t), a) : n(t);
	}
	function a(e) {
		return e === null ? n(e) : t(e);
	}
}
function R_(e, t, n) {
	let r, i, a;
	return o;
	function o(t) {
		return t === 46 || t === 95 ? e.check(E_, c, s)(t) : t === null || V(t) || ea(t) || t !== 45 && $i(t) ? c(t) : (a = !0, e.consume(t), o);
	}
	function s(t) {
		return t === 95 ? r = !0 : (i = r, r = void 0), e.consume(t), o;
	}
	function c(e) {
		return i || r || !a ? n(e) : t(e);
	}
}
function z_(e, t) {
	let n = 0, r = 0;
	return i;
	function i(o) {
		return o === 40 ? (n++, e.consume(o), i) : o === 41 && r < n ? a(o) : o === 33 || o === 34 || o === 38 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 60 || o === 63 || o === 93 || o === 95 || o === 126 ? e.check(E_, t, a)(o) : o === null || V(o) || ea(o) ? t(o) : (e.consume(o), i);
	}
	function a(t) {
		return t === 41 && r++, e.consume(t), i;
	}
}
function B_(e, t, n) {
	return r;
	function r(o) {
		return o === 33 || o === 34 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 63 || o === 95 || o === 126 ? (e.consume(o), r) : o === 38 ? (e.consume(o), a) : o === 93 ? (e.consume(o), i) : o === 60 || o === null || V(o) || ea(o) ? t(o) : n(o);
	}
	function i(e) {
		return e === null || e === 40 || e === 91 || V(e) || ea(e) ? t(e) : r(e);
	}
	function a(e) {
		return Ki(e) ? o(e) : n(e);
	}
	function o(t) {
		return t === 59 ? (e.consume(t), r) : Ki(t) ? (e.consume(t), o) : n(t);
	}
}
function V_(e, t, n) {
	return r;
	function r(t) {
		return e.consume(t), i;
	}
	function i(e) {
		return qi(e) ? n(e) : t(e);
	}
}
function H_(e) {
	return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || V(e);
}
function U_(e) {
	return !Ki(e);
}
function W_(e) {
	return !(e === 47 || G_(e));
}
function G_(e) {
	return e === 43 || e === 45 || e === 46 || e === 95 || qi(e);
}
function K_(e) {
	let t = e.length, n = !1;
	for (; t--;) {
		let r = e[t][1];
		if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
			n = !0;
			break;
		}
		if (r._gfmAutolinkLiteralWalkedInto) {
			n = !1;
			break;
		}
	}
	return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
//#endregion
//#region node_modules/micromark-extension-gfm-footnote/lib/syntax.js
var q_ = {
	tokenize: tv,
	partial: !0
};
function J_() {
	return {
		document: { 91: {
			name: "gfmFootnoteDefinition",
			tokenize: Q_,
			continuation: { tokenize: $_ },
			exit: ev
		} },
		text: {
			91: {
				name: "gfmFootnoteCall",
				tokenize: Z_
			},
			93: {
				name: "gfmPotentialFootnoteCall",
				add: "after",
				tokenize: Y_,
				resolveTo: X_
			}
		}
	};
}
function Y_(e, t, n) {
	let r = this, i = r.events.length, a = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), o;
	for (; i--;) {
		let e = r.events[i][1];
		if (e.type === "labelImage") {
			o = e;
			break;
		}
		if (e.type === "gfmFootnoteCall" || e.type === "labelLink" || e.type === "label" || e.type === "image" || e.type === "link") break;
	}
	return s;
	function s(i) {
		if (!o || !o._balanced) return n(i);
		let s = Gi(r.sliceSerialize({
			start: o.end,
			end: r.now()
		}));
		return s.codePointAt(0) !== 94 || !a.includes(s.slice(1)) ? n(i) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(i), e.exit("gfmFootnoteCallLabelMarker"), t(i));
	}
}
function X_(e, t) {
	let n = e.length;
	for (; n--;) if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
		e[n][1];
		break;
	}
	e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
	let r = {
		type: "gfmFootnoteCall",
		start: Object.assign({}, e[n + 3][1].start),
		end: Object.assign({}, e[e.length - 1][1].end)
	}, i = {
		type: "gfmFootnoteCallMarker",
		start: Object.assign({}, e[n + 3][1].end),
		end: Object.assign({}, e[n + 3][1].end)
	};
	i.end.column++, i.end.offset++, i.end._bufferIndex++;
	let a = {
		type: "gfmFootnoteCallString",
		start: Object.assign({}, i.end),
		end: Object.assign({}, e[e.length - 1][1].start)
	}, o = {
		type: "chunkString",
		contentType: "string",
		start: Object.assign({}, a.start),
		end: Object.assign({}, a.end)
	}, s = [
		e[n + 1],
		e[n + 2],
		[
			"enter",
			r,
			t
		],
		e[n + 3],
		e[n + 4],
		[
			"enter",
			i,
			t
		],
		[
			"exit",
			i,
			t
		],
		[
			"enter",
			a,
			t
		],
		[
			"enter",
			o,
			t
		],
		[
			"exit",
			o,
			t
		],
		[
			"exit",
			a,
			t
		],
		e[e.length - 2],
		e[e.length - 1],
		[
			"exit",
			r,
			t
		]
	];
	return e.splice(n, e.length - n + 1, ...s), e;
}
function Z_(e, t, n) {
	let r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), a = 0, o;
	return s;
	function s(t) {
		return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(t), e.exit("gfmFootnoteCallLabelMarker"), c;
	}
	function c(t) {
		return t === 94 ? (e.enter("gfmFootnoteCallMarker"), e.consume(t), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", l) : n(t);
	}
	function l(s) {
		if (a > 999 || s === 93 && !o || s === null || s === 91 || V(s)) return n(s);
		if (s === 93) {
			e.exit("chunkString");
			let a = e.exit("gfmFootnoteCallString");
			return i.includes(Gi(r.sliceSerialize(a))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(s);
		}
		return V(s) || (o = !0), a++, e.consume(s), s === 92 ? u : l;
	}
	function u(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), a++, l) : l(t);
	}
}
function Q_(e, t, n) {
	let r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), a, o = 0, s;
	return c;
	function c(t) {
		return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), l;
	}
	function l(t) {
		return t === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", u) : n(t);
	}
	function u(t) {
		if (o > 999 || t === 93 && !s || t === null || t === 91 || V(t)) return n(t);
		if (t === 93) {
			e.exit("chunkString");
			let n = e.exit("gfmFootnoteDefinitionLabelString");
			return a = Gi(r.sliceSerialize(n)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), f;
		}
		return V(t) || (s = !0), o++, e.consume(t), t === 92 ? d : u;
	}
	function d(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), o++, u) : u(t);
	}
	function f(t) {
		return t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), i.includes(a) || i.push(a), U(e, p, "gfmFootnoteDefinitionWhitespace")) : n(t);
	}
	function p(e) {
		return t(e);
	}
}
function $_(e, t, n) {
	return e.check(ba, t, e.attempt(q_, t, n));
}
function ev(e) {
	e.exit("gfmFootnoteDefinition");
}
function tv(e, t, n) {
	let r = this;
	return U(e, i, "gfmFootnoteDefinitionIndent", 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "gfmFootnoteDefinitionIndent" && i[2].sliceSerialize(i[1], !0).length === 4 ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-extension-gfm-strikethrough/lib/syntax.js
function nv(e) {
	let t = (e || {}).singleTilde, n = {
		name: "strikethrough",
		tokenize: i,
		resolveAll: r
	};
	return t ??= !0, {
		text: { 126: n },
		insideSpan: { null: [n] },
		attentionMarkers: { null: [126] }
	};
	function r(e, t) {
		let n = -1;
		for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "strikethroughSequenceTemporary" && e[n][1]._close) {
			let r = n;
			for (; r--;) if (e[r][0] === "exit" && e[r][1].type === "strikethroughSequenceTemporary" && e[r][1]._open && e[n][1].end.offset - e[n][1].start.offset === e[r][1].end.offset - e[r][1].start.offset) {
				e[n][1].type = "strikethroughSequence", e[r][1].type = "strikethroughSequence";
				let i = {
					type: "strikethrough",
					start: Object.assign({}, e[r][1].start),
					end: Object.assign({}, e[n][1].end)
				}, a = {
					type: "strikethroughText",
					start: Object.assign({}, e[r][1].end),
					end: Object.assign({}, e[n][1].start)
				}, o = [
					[
						"enter",
						i,
						t
					],
					[
						"enter",
						e[r][1],
						t
					],
					[
						"exit",
						e[r][1],
						t
					],
					[
						"enter",
						a,
						t
					]
				], s = t.parser.constructs.insideSpan.null;
				s && Ri(o, o.length, 0, pa(s, e.slice(r + 1, n), t)), Ri(o, o.length, 0, [
					[
						"exit",
						a,
						t
					],
					[
						"enter",
						e[n][1],
						t
					],
					[
						"exit",
						e[n][1],
						t
					],
					[
						"exit",
						i,
						t
					]
				]), Ri(e, r - 1, n - r + 3, o), n = r + o.length - 2;
				break;
			}
		}
		for (n = -1; ++n < e.length;) e[n][1].type === "strikethroughSequenceTemporary" && (e[n][1].type = "data");
		return e;
	}
	function i(e, n, r) {
		let i = this.previous, a = this.events, o = 0;
		return s;
		function s(t) {
			return i === 126 && a[a.length - 1][1].type !== "characterEscape" ? r(t) : (e.enter("strikethroughSequenceTemporary"), c(t));
		}
		function c(a) {
			let s = fa(i);
			if (a === 126) return o > 1 ? r(a) : (e.consume(a), o++, c);
			if (o < 2 && !t) return r(a);
			let l = e.exit("strikethroughSequenceTemporary"), u = fa(a);
			return l._open = !u || u === 2 && !!s, l._close = !s || s === 2 && !!u, n(a);
		}
	}
}
//#endregion
//#region node_modules/micromark-extension-gfm-table/lib/edit-map.js
var rv = class {
	constructor() {
		this.map = [], this.index = /* @__PURE__ */ new Map();
	}
	add(e, t, n) {
		iv(this, e, t, n);
	}
	consume(e) {
		/* c8 ignore next 3 -- `resolve` is never called without tables, so without edits. */
		if (this.map.sort(function(e, t) {
			return e[0] - t[0];
		}), this.map.length === 0) return;
		let t = this.map.length, n = [];
		for (; t > 0;) --t, n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]), e.length = this.map[t][0];
		n.push(e.slice()), e.length = 0;
		let r = n.pop();
		for (; r;) {
			for (let t of r) e.push(t);
			r = n.pop();
		}
		this.map.length = 0, this.index.clear();
	}
};
function iv(e, t, n, r) {
	/* c8 ignore next 3 -- `resolve` is never called without tables, so without edits. */
	if (n === 0 && r.length === 0) return;
	let i = e.index.get(t);
	if (i) {
		i[1] += n, i[2].push(...r);
		return;
	}
	let a = [
		t,
		n,
		r
	];
	e.map.push(a), e.index.set(t, a);
}
//#endregion
//#region node_modules/micromark-extension-gfm-table/lib/infer.js
function av(e, t) {
	let n = !1, r = [];
	for (; t < e.length;) {
		let i = e[t];
		if (n) {
			if (i[0] === "enter") i[1].type === "tableContent" && r.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
			else if (i[1].type === "tableContent") {
				if (e[t - 1][1].type === "tableDelimiterMarker") {
					let e = r.length - 1;
					r[e] = r[e] === "left" ? "center" : "right";
				}
			} else if (i[1].type === "tableDelimiterRow") break;
		} else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (n = !0);
		t += 1;
	}
	return r;
}
//#endregion
//#region node_modules/micromark-extension-gfm-table/lib/syntax.js
function ov() {
	return { flow: { null: {
		name: "table",
		tokenize: sv,
		resolveAll: cv
	} } };
}
function sv(e, t, n) {
	let r = this, i = 0, a = 0, o;
	return s;
	function s(e) {
		let t = r.events.length - 1;
		for (; t > -1;) {
			let { type: e } = r.events[t][1];
			if (e === "lineEnding" || e === "linePrefix") t--;
			else break;
		}
		let i = t > -1 ? r.events[t][1].type : null, a = i === "tableHead" || i === "tableRow" ? S : c;
		return a === S && r.parser.lazy[r.now().line] ? n(e) : a(e);
	}
	function c(t) {
		return e.enter("tableHead"), e.enter("tableRow"), l(t);
	}
	function l(e) {
		return e === 124 ? u(e) : (o = !0, a += 1, u(e));
	}
	function u(t) {
		return t === null ? n(t) : B(t) ? a > 1 ? (a = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), p) : n(t) : H(t) ? U(e, u, "whitespace")(t) : (a += 1, o && (o = !1, i += 1), t === 124 ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), o = !0, u) : (e.enter("data"), d(t)));
	}
	function d(t) {
		return t === null || t === 124 || V(t) ? (e.exit("data"), u(t)) : (e.consume(t), t === 92 ? f : d);
	}
	function f(t) {
		return t === 92 || t === 124 ? (e.consume(t), d) : d(t);
	}
	function p(t) {
		return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(t) : (e.enter("tableDelimiterRow"), o = !1, H(t) ? U(e, m, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : m(t));
	}
	function m(t) {
		return t === 45 || t === 58 ? g(t) : t === 124 ? (o = !0, e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), h) : x(t);
	}
	function h(t) {
		return H(t) ? U(e, g, "whitespace")(t) : g(t);
	}
	function g(t) {
		return t === 58 ? (a += 1, o = !0, e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), _) : t === 45 ? (a += 1, _(t)) : t === null || B(t) ? b(t) : x(t);
	}
	function _(t) {
		return t === 45 ? (e.enter("tableDelimiterFiller"), v(t)) : x(t);
	}
	function v(t) {
		return t === 45 ? (e.consume(t), v) : t === 58 ? (o = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), y) : (e.exit("tableDelimiterFiller"), y(t));
	}
	function y(t) {
		return H(t) ? U(e, b, "whitespace")(t) : b(t);
	}
	function b(n) {
		return n === 124 ? m(n) : n === null || B(n) ? !o || i !== a ? x(n) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(n)) : x(n);
	}
	function x(e) {
		return n(e);
	}
	function S(t) {
		return e.enter("tableRow"), C(t);
	}
	function C(n) {
		return n === 124 ? (e.enter("tableCellDivider"), e.consume(n), e.exit("tableCellDivider"), C) : n === null || B(n) ? (e.exit("tableRow"), t(n)) : H(n) ? U(e, C, "whitespace")(n) : (e.enter("data"), ee(n));
	}
	function ee(t) {
		return t === null || t === 124 || V(t) ? (e.exit("data"), C(t)) : (e.consume(t), t === 92 ? w : ee);
	}
	function w(t) {
		return t === 92 || t === 124 ? (e.consume(t), ee) : ee(t);
	}
}
function cv(e, t) {
	let n = -1, r = !0, i = 0, a = [
		0,
		0,
		0,
		0
	], o = [
		0,
		0,
		0,
		0
	], s = !1, c = 0, l, u, d, f = new rv();
	for (; ++n < e.length;) {
		let p = e[n], m = p[1];
		p[0] === "enter" ? m.type === "tableHead" ? (s = !1, c !== 0 && (uv(f, t, c, l, u), u = void 0, c = 0), l = {
			type: "table",
			start: Object.assign({}, m.start),
			end: Object.assign({}, m.end)
		}, f.add(n, 0, [[
			"enter",
			l,
			t
		]])) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (r = !0, d = void 0, a = [
			0,
			0,
			0,
			0
		], o = [
			0,
			n + 1,
			0,
			0
		], s && (s = !1, u = {
			type: "tableBody",
			start: Object.assign({}, m.start),
			end: Object.assign({}, m.end)
		}, f.add(n, 0, [[
			"enter",
			u,
			t
		]])), i = m.type === "tableDelimiterRow" ? 2 : u ? 3 : 1) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") ? (r = !1, o[2] === 0 && (a[1] !== 0 && (o[0] = o[1], d = lv(f, t, a, i, void 0, d), a = [
			0,
			0,
			0,
			0
		]), o[2] = n)) : m.type === "tableCellDivider" && (r ? r = !1 : (a[1] !== 0 && (o[0] = o[1], d = lv(f, t, a, i, void 0, d)), a = o, o = [
			a[1],
			n,
			0,
			0
		])) : m.type === "tableHead" ? (s = !0, c = n) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (c = n, a[1] === 0 ? o[1] !== 0 && (d = lv(f, t, o, i, n, d)) : (o[0] = o[1], d = lv(f, t, a, i, n, d)), i = 0) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") && (o[3] = n);
	}
	for (c !== 0 && uv(f, t, c, l, u), f.consume(t.events), n = -1; ++n < t.events.length;) {
		let e = t.events[n];
		e[0] === "enter" && e[1].type === "table" && (e[1]._align = av(t.events, n));
	}
	return e;
}
function lv(e, t, n, r, i, a) {
	let o = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData";
	n[0] !== 0 && (a.end = Object.assign({}, dv(t.events, n[0])), e.add(n[0], 0, [[
		"exit",
		a,
		t
	]]));
	let s = dv(t.events, n[1]);
	if (a = {
		type: o,
		start: Object.assign({}, s),
		end: Object.assign({}, s)
	}, e.add(n[1], 0, [[
		"enter",
		a,
		t
	]]), n[2] !== 0) {
		let i = dv(t.events, n[2]), a = dv(t.events, n[3]), o = {
			type: "tableContent",
			start: Object.assign({}, i),
			end: Object.assign({}, a)
		};
		if (e.add(n[2], 0, [[
			"enter",
			o,
			t
		]]), r !== 2) {
			let r = t.events[n[2]], i = t.events[n[3]];
			if (r[1].end = Object.assign({}, i[1].end), r[1].type = "chunkText", r[1].contentType = "text", n[3] > n[2] + 1) {
				let t = n[2] + 1, r = n[3] - n[2] - 1;
				e.add(t, r, []);
			}
		}
		e.add(n[3] + 1, 0, [[
			"exit",
			o,
			t
		]]);
	}
	return i !== void 0 && (a.end = Object.assign({}, dv(t.events, i)), e.add(i, 0, [[
		"exit",
		a,
		t
	]]), a = void 0), a;
}
function uv(e, t, n, r, i) {
	let a = [], o = dv(t.events, n);
	i && (i.end = Object.assign({}, o), a.push([
		"exit",
		i,
		t
	])), r.end = Object.assign({}, o), a.push([
		"exit",
		r,
		t
	]), e.add(n + 1, 0, a);
}
function dv(e, t) {
	let n = e[t], r = n[0] === "enter" ? "start" : "end";
	return n[1][r];
}
//#endregion
//#region node_modules/micromark-extension-gfm-task-list-item/lib/syntax.js
var fv = {
	name: "tasklistCheck",
	tokenize: mv
};
function pv() {
	return { text: { 91: fv } };
}
function mv(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return r.previous !== null || !r._gfmTasklistFirstContentOfListItem ? n(t) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), a);
	}
	function a(t) {
		return V(t) ? (e.enter("taskListCheckValueUnchecked"), e.consume(t), e.exit("taskListCheckValueUnchecked"), o) : t === 88 || t === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(t), e.exit("taskListCheckValueChecked"), o) : n(t);
	}
	function o(t) {
		return t === 93 ? (e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), s) : n(t);
	}
	function s(r) {
		return B(r) ? t(r) : H(r) ? e.check({ tokenize: hv }, t, n)(r) : n(r);
	}
}
function hv(e, t, n) {
	return U(e, r, "whitespace");
	function r(e) {
		return e === null ? n(e) : t(e);
	}
}
//#endregion
//#region node_modules/micromark-extension-gfm/index.js
function gv(e) {
	return Vi([
		M_(),
		J_(),
		nv(e),
		ov(),
		pv()
	]);
}
//#endregion
//#region node_modules/remark-gfm/lib/index.js
var _v = {};
function vv(e) {
	let t = this, n = e || _v, r = t.data(), i = r.micromarkExtensions ||= [], a = r.fromMarkdownExtensions ||= [], o = r.toMarkdownExtensions ||= [];
	i.push(gv(n)), a.push(x_()), o.push(S_(n));
}
//#endregion
//#region src/ui/MarkdownContent.tsx
function yv({ content: e, className: t = "", headingIds: n }) {
	let r = {
		...n ? Object.fromEntries([
			"h1",
			"h2",
			"h3"
		].map((e) => [e, ({ node: t, children: r }) => /* @__PURE__ */ F(e, {
			id: n[t?.position?.start.line ?? -1],
			tabIndex: -1,
			className: "scroll-mt-4 focus:outline-hidden",
			children: r
		})])) : {},
		a: ({ node: e, ...t }) => /* @__PURE__ */ F("a", {
			...t,
			rel: "noopener noreferrer"
		})
	};
	return /* @__PURE__ */ F("div", {
		className: `prose prose-sm max-w-none prose-headings:font-display prose-headings:font-semibold prose-headings:text-ink prose-p:text-ink-secondary prose-strong:text-ink prose-a:text-ink prose-a:decoration-signal prose-a:decoration-2 prose-a:underline-offset-2 prose-code:before:content-none prose-code:after:content-none prose-code:rounded-sm prose-code:bg-surface-2 prose-code:px-1 prose-code:py-0.5 prose-code:text-[0.85em] prose-code:font-normal prose-code:text-ink prose-pre:border prose-pre:border-border prose-pre:bg-surface-2 prose-blockquote:border-border prose-blockquote:text-ink-secondary prose-hr:border-border prose-th:text-ink prose-td:text-ink-secondary prose-li:text-ink-secondary prose-img:rounded-lg [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-ink ${t}`,
		children: /* @__PURE__ */ F(Fl, {
			remarkPlugins: [vv],
			rehypePlugins: [Zm, gh],
			components: r,
			children: e
		})
	});
}
//#endregion
//#region src/ui/TocPanel.tsx
function bv({ headings: e, activeId: t, onSelect: n }) {
	let r = Hn();
	return /* @__PURE__ */ F("nav", {
		"aria-label": r.onThisPage,
		className: "max-h-[60vh] overflow-y-auto",
		children: [/* @__PURE__ */ F("p", {
			className: "mb-2 text-[11px] font-semibold uppercase tracking-wide text-ink-muted",
			children: r.onThisPage
		}), /* @__PURE__ */ F("ul", { children: e.map((e) => {
			let r = e.id === t;
			return /* @__PURE__ */ F("li", { children: /* @__PURE__ */ F("a", {
				href: `#${e.id}`,
				title: e.text,
				"aria-current": r ? "location" : void 0,
				onClick: (t) => {
					t.preventDefault(), n(e.id);
				},
				className: `block truncate border-l-2 py-1 text-xs ${e.level === 1 ? "pl-3" : "pl-6"} ${r ? "border-ink font-semibold text-ink" : "border-border text-ink-secondary hover:text-ink"}`,
				children: e.text
			}) }, e.id);
		}) })]
	});
}
//#endregion
//#region src/ui/useDomHighlight.ts
var xv = "doc-viewer-search";
function Sv(e, t, n) {
	Lt(() => {
		let n = CSS.highlights, r = window.Highlight;
		if (!n || !r) return;
		n.delete(xv);
		let i = e.current;
		if (!i || !t.trim()) return;
		let a = [], o = document.createTreeWalker(i, NodeFilter.SHOW_TEXT);
		for (let e = o.nextNode(); e; e = o.nextNode()) {
			let n = e.nodeValue ?? "";
			for (let [r, i] of Nn(n, t)) {
				let t = new Range();
				t.setStart(e, r), t.setEnd(e, i), a.push(t);
			}
		}
		return a.length > 0 && n.set(xv, new r(...a)), () => {
			n.delete(xv);
		};
	}, [t, ...n]);
}
//#endregion
//#region src/ui/PreviewPane.tsx
function Cv() {
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function wv(e, t) {
	let n = e?.querySelector(`#${CSS.escape(t)}`);
	n && (n.scrollIntoView({
		behavior: Cv() ? "auto" : "smooth",
		block: "start"
	}), n.focus({ preventScroll: !0 }));
}
function Tv({ doc: e, query: t, onRequestExpand: n }) {
	let r = zt(null), [i, a] = Ft(null), o = Bt(() => Object.fromEntries(e.headings.map((e) => [e.line, e.id])), [e]), s = Bt(() => e.headings.filter((e) => e.level <= 2), [e]);
	return Sv(r, t, [e]), Lt(() => {
		a(s[0]?.id ?? null);
		let e = r.current;
		if (!e || s.length === 0 || typeof IntersectionObserver > "u") return;
		let t = /* @__PURE__ */ new Set(), n = s.map((e) => e.id), i = new IntersectionObserver((e) => {
			for (let n of e) n.isIntersecting ? t.add(n.target.id) : t.delete(n.target.id);
			let r = n.find((e) => t.has(e));
			r && a(r);
		}, { rootMargin: "0px 0px -70% 0px" });
		for (let t of n) {
			let n = e.querySelector(`#${CSS.escape(t)}`);
			n && i.observe(n);
		}
		return () => i.disconnect();
	}, [s, e]), e.file.kind === "text" ? /* @__PURE__ */ F("pre", {
		className: "m-0 whitespace-pre-wrap wrap-break-word p-4 font-mono text-[13px] leading-relaxed text-ink",
		children: e.file.source
	}) : /* @__PURE__ */ F("div", {
		className: "flex min-w-0 gap-6 p-4 lg:p-6",
		children: [/* @__PURE__ */ F("div", {
			ref: r,
			className: "min-w-0 flex-1",
			children: /* @__PURE__ */ F(yv, {
				content: e.renderSource,
				headingIds: o
			})
		}), s.length > 0 && /* @__PURE__ */ F("aside", {
			className: "hidden w-52 shrink-0 lg:block",
			children: /* @__PURE__ */ F("div", {
				className: "sticky top-4",
				children: /* @__PURE__ */ F(bv, {
					headings: s,
					activeId: i,
					onSelect: (e) => {
						n(), a(e), requestAnimationFrame(() => wv(r.current, e));
					}
				})
			})
		})]
	});
}
//#endregion
//#region src/ui/SearchPalette.tsx
var Ev = 50;
function Dv({ doc: e, initialQuery: t, onQueryChange: n, onSelect: r, onClose: i }) {
	let a = Hn(), [o, s] = Ft(t), [c, l] = Ft(t), [u, d] = Ft(0), f = zt(null), p = zt(null), m = zt(null), h = Ut();
	Lt(() => {
		p.current?.focus(), p.current?.select();
	}, []), Lt(() => {
		let e = window.setTimeout(() => {
			l(o), n(o), d(0);
		}, 120);
		return () => window.clearTimeout(e);
	}, [o]), Lt(() => {
		function e(e) {
			f.current && !e.composedPath().includes(f.current) && i();
		}
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [i]);
	let g = Bt(() => Fn(e, c), [e, c]), _ = g.slice(0, Ev), v = c.trim() !== "";
	Lt(() => {
		m.current?.querySelector(`#${CSS.escape(`${h}-${u}`)}`)?.scrollIntoView({ block: "nearest" });
	}, [u, h]);
	function y(e) {
		e.key === "Escape" ? (e.preventDefault(), i()) : e.key === "ArrowDown" && _.length > 0 ? (e.preventDefault(), d((e) => (e + 1) % _.length)) : e.key === "ArrowUp" && _.length > 0 ? (e.preventDefault(), d((e) => (e - 1 + _.length) % _.length)) : e.key === "Enter" && _[u] && (e.preventDefault(), r(_[u]));
	}
	let b = (t) => e.sections.find((e) => e.id === t)?.title ?? e.file.path;
	return /* @__PURE__ */ F("div", {
		ref: f,
		className: "absolute inset-x-3 top-12 z-20 border border-border bg-surface shadow-card sm:left-auto sm:w-md",
		children: [/* @__PURE__ */ F("div", {
			className: "flex items-center gap-2 border-b border-border px-3",
			children: [
				/* @__PURE__ */ F(Gn, { className: "h-4 w-4 shrink-0 text-ink-muted" }),
				/* @__PURE__ */ F("input", {
					ref: p,
					role: "combobox",
					"aria-expanded": _.length > 0,
					"aria-controls": h,
					"aria-activedescendant": _.length > 0 ? `${h}-${u}` : void 0,
					"aria-label": a.searchAria,
					"aria-autocomplete": "list",
					value: o,
					onInput: (e) => s(e.currentTarget.value),
					onKeyDown: y,
					placeholder: a.searchPlaceholder,
					className: "min-w-0 flex-1 bg-transparent py-2.5 text-sm text-ink placeholder:text-ink-muted focus:outline-hidden"
				}),
				v && /* @__PURE__ */ F("span", {
					className: "shrink-0 font-mono text-[11px] text-ink-secondary",
					"aria-live": "polite",
					children: g.length === 0 ? a.noMatch : Bn(a.matches, { n: g.length })
				}),
				/* @__PURE__ */ F("button", {
					type: "button",
					onClick: i,
					"aria-label": a.closeSearch,
					className: "rounded-sm p-1 text-ink-secondary hover:bg-surface-2 hover:text-ink",
					children: /* @__PURE__ */ F(Yn, { className: "h-4 w-4" })
				})
			]
		}), /* @__PURE__ */ F("ul", {
			ref: m,
			id: h,
			role: "listbox",
			"aria-label": a.searchResults,
			className: "max-h-72 overflow-y-auto",
			children: [_.map((e, t) => /* @__PURE__ */ F("li", {
				id: `${h}-${t}`,
				role: "option",
				"aria-selected": t === u,
				onMouseEnter: () => d(t),
				onMouseDown: (e) => e.preventDefault(),
				onClick: () => r(e),
				className: `cursor-pointer border-l-2 px-3 py-2 ${t === u ? "border-ink bg-surface-2" : "border-transparent"}`,
				children: e.kind === "heading" ? /* @__PURE__ */ F("p", {
					className: "truncate text-sm font-semibold text-ink",
					children: /* @__PURE__ */ F(Ln, {
						text: e.snippet,
						ranges: e.ranges
					})
				}) : /* @__PURE__ */ F(A, { children: [/* @__PURE__ */ F("p", {
					className: "truncate text-[11px] font-semibold uppercase tracking-wide text-ink-muted",
					children: b(e.sectionId)
				}), /* @__PURE__ */ F("p", {
					className: "truncate text-xs text-ink-secondary",
					children: /* @__PURE__ */ F(Ln, {
						text: e.snippet,
						ranges: e.ranges
					})
				})] })
			}, `${e.kind}-${e.line}-${t}`)), g.length > Ev && /* @__PURE__ */ F("li", {
				className: "px-3 py-2 text-xs text-ink-muted",
				children: Bn(a.moreResults, { n: g.length - Ev })
			})]
		})]
	});
}
//#endregion
//#region src/ui/SlidesPane.tsx
function Ov(e) {
	return e instanceof HTMLElement ? e.isContentEditable || [
		"INPUT",
		"TEXTAREA",
		"SELECT"
	].includes(e.tagName) : !1;
}
function kv({ doc: e, index: t, onIndexChange: n, query: r, keysEnabled: i, onShowFull: a }) {
	let o = Hn(), s = zt(null), c = zt(null), [l, u] = Ft(!1), d = e.sections.length + 1, f = d - 1, p = [o.cover, ...e.sections.map((e) => e.title)], m = t > 0 ? e.sections[t - 1] : null, h = m ? m.tokenCount : e.coverTokenCount, g = (e) => Bn(o.slide, {
		n: e + 1,
		title: p[e]
	});
	Sv(c, r, [e, t]), Lt(() => {
		c.current?.scrollTo({ top: 0 });
	}, [e, t]), Lt(() => {
		(s.current?.getRootNode())?.activeElement?.getAttribute("role") === "tab" && c.current?.focus({ preventScroll: !0 });
	}, []), Lt(() => {
		let e = () => {
			let e = s.current?.getRootNode();
			u(e?.fullscreenElement === s.current);
		};
		return document.addEventListener("fullscreenchange", e), () => document.removeEventListener("fullscreenchange", e);
	}, []);
	function _() {
		document.fullscreenElement ? document.exitFullscreen() : s.current?.requestFullscreen?.();
	}
	Lt(() => {
		if (!i) return;
		let e = s.current?.getRootNode(), r = e instanceof ShadowRoot ? e.host : window;
		function a(e) {
			let r = e;
			if (r.ctrlKey || r.metaKey || r.altKey || Ov(r.composedPath()[0])) return;
			let i = null;
			switch (r.key) {
				case "ArrowRight":
				case "PageDown":
					i = Math.min(f, t + 1);
					break;
				case "ArrowLeft":
				case "PageUp":
					i = Math.max(0, t - 1);
					break;
				case "Home":
					i = 0;
					break;
				case "End":
					i = f;
					break;
				case "f":
				case "F":
					r.preventDefault(), _();
					return;
				default: return;
			}
			r.preventDefault(), i !== t && n(i);
		}
		return r.addEventListener("keydown", a), () => r.removeEventListener("keydown", a);
	}, [
		i,
		t,
		f,
		n
	]);
	let v = "rounded-md border border-border px-3 py-1.5 text-xs font-medium text-ink-secondary hover:bg-surface-2 hover:text-ink disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent";
	return /* @__PURE__ */ F("div", {
		ref: s,
		className: `flex flex-col bg-surface ${l ? "h-screen" : ""}`,
		children: [
			/* @__PURE__ */ F("div", {
				ref: c,
				tabIndex: 0,
				"aria-label": g(t),
				className: `overflow-y-auto p-6 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-signal-ring ${l ? "flex-1 px-[8vw] py-10" : "h-[420px]"}`,
				children: m ? /* @__PURE__ */ F(A, { children: [/* @__PURE__ */ F("h3", {
					className: "mb-4 font-display text-xl font-semibold text-ink",
					children: m.title
				}), /* @__PURE__ */ F(yv, { content: m.body })] }) : /* @__PURE__ */ F("div", {
					className: "flex h-full flex-col justify-center gap-3",
					children: [
						/* @__PURE__ */ F("p", {
							className: "font-mono text-xs uppercase tracking-wide text-ink-muted",
							children: e.file.path
						}),
						/* @__PURE__ */ F("h3", {
							className: "font-display text-2xl font-bold text-ink",
							children: e.frontmatter.name || e.file.path
						}),
						e.frontmatter.description && /* @__PURE__ */ F("p", {
							className: "max-w-prose text-sm leading-relaxed text-ink-secondary",
							children: e.frontmatter.description
						}),
						/* @__PURE__ */ F("dl", {
							className: "mt-2 flex flex-wrap gap-x-6 gap-y-1 text-xs text-ink-secondary",
							children: [e.frontmatter.license && /* @__PURE__ */ F("div", {
								className: "flex gap-1.5",
								children: [/* @__PURE__ */ F("dt", { children: o.license }), /* @__PURE__ */ F("dd", {
									className: "font-mono text-ink",
									children: e.frontmatter.license
								})]
							}), /* @__PURE__ */ F("div", {
								className: "flex gap-1.5",
								children: [/* @__PURE__ */ F("dt", { children: o.total }), /* @__PURE__ */ F("dd", {
									className: "font-mono text-ink",
									children: Bn(o.totalTokens, { n: e.totalTokenCount.toLocaleString() })
								})]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ F("div", {
				className: "flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-border px-3 py-2",
				children: [
					/* @__PURE__ */ F("button", {
						type: "button",
						className: v,
						disabled: t === 0,
						onClick: () => n(t - 1),
						children: o.prev
					}),
					/* @__PURE__ */ F("span", {
						className: "rounded-full bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-ink-secondary",
						title: o.slideTokensTitle,
						children: Bn(o.slideTokens, {
							current: h.toLocaleString(),
							total: e.totalTokenCount.toLocaleString()
						})
					}),
					/* @__PURE__ */ F("div", {
						className: "flex min-w-0 flex-1 items-center justify-center gap-1.5",
						role: "group",
						"aria-label": o.slideGroup,
						children: p.map((e, r) => /* @__PURE__ */ F("button", {
							type: "button",
							title: g(r),
							"aria-label": g(r),
							"aria-current": r === t ? "true" : void 0,
							onClick: () => n(r),
							className: `h-2 rounded-full ${r === t ? "w-6 bg-ink" : "w-2 bg-border hover:bg-ink-muted"}`
						}, r))
					}),
					/* @__PURE__ */ F("span", {
						className: "font-mono text-xs tabular-nums text-ink-secondary",
						"aria-live": "polite",
						children: [
							t + 1,
							" / ",
							d
						]
					}),
					/* @__PURE__ */ F("button", {
						type: "button",
						className: v,
						disabled: t === f,
						onClick: () => n(t + 1),
						children: o.next
					}),
					/* @__PURE__ */ F("button", {
						type: "button",
						className: v,
						onClick: _,
						"aria-pressed": l,
						children: l ? o.exit : o.fullscreen
					})
				]
			}),
			/* @__PURE__ */ F("div", {
				className: "flex items-center justify-between gap-3 border-t border-border bg-surface-2 px-3 py-1.5 text-[11px] text-ink-muted",
				children: [/* @__PURE__ */ F("span", { children: [
					/* @__PURE__ */ F("kbd", {
						className: "font-mono",
						children: "←"
					}),
					" ",
					/* @__PURE__ */ F("kbd", {
						className: "font-mono",
						children: "→"
					}),
					" ",
					o.hintMove,
					" · ",
					/* @__PURE__ */ F("kbd", {
						className: "font-mono",
						children: "Home"
					}),
					" /",
					" ",
					/* @__PURE__ */ F("kbd", {
						className: "font-mono",
						children: "End"
					}),
					" · ",
					/* @__PURE__ */ F("kbd", {
						className: "font-mono",
						children: "F"
					}),
					" ",
					o.hintFullscreen,
					" · ",
					/* @__PURE__ */ F("kbd", {
						className: "font-mono",
						children: "Esc"
					}),
					" ",
					o.hintExit
				] }), /* @__PURE__ */ F("button", {
					type: "button",
					onClick: a,
					className: "font-medium text-ink-secondary underline underline-offset-2 hover:text-ink",
					children: o.showFullDocument
				})]
			})
		]
	});
}
//#endregion
//#region src/ui/ViewerToolbar.tsx
var Av = [
	"code",
	"preview",
	"slides"
], jv = (e, t) => `${e}-tab-${t}`;
function Mv({ uid: e, tab: t, onTabChange: n, onOpenSearch: r, actions: i }) {
	let a = Hn(), o = zt({}), s = typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform), c = {
		code: a.tabCode,
		preview: a.tabPreview,
		slides: a.tabSlides
	};
	function l(e) {
		let r = Av.indexOf(t), i = -1;
		e.key === "ArrowRight" ? i = (r + 1) % Av.length : e.key === "ArrowLeft" ? i = (r - 1 + Av.length) % Av.length : e.key === "Home" ? i = 0 : e.key === "End" && (i = Av.length - 1), i !== -1 && (e.preventDefault(), e.stopPropagation(), n(Av[i]), requestAnimationFrame(() => o.current[Av[i]]?.focus()));
	}
	return /* @__PURE__ */ F("div", {
		className: "flex flex-wrap items-center gap-2 border-b border-border px-2 py-1.5",
		children: [
			/* @__PURE__ */ F("div", {
				role: "tablist",
				"aria-label": a.tablist,
				className: "flex",
				onKeyDown: l,
				children: Av.map((r) => /* @__PURE__ */ F("button", {
					ref: (e) => {
						o.current[r] = e;
					},
					id: jv(e, r),
					role: "tab",
					type: "button",
					"aria-selected": t === r,
					"aria-controls": `${e}-panel`,
					tabIndex: t === r ? 0 : -1,
					onClick: () => n(r),
					className: `px-3 py-1.5 text-xs font-semibold uppercase tracking-wide ${t === r ? "border-b-2 border-ink text-ink" : "border-b-2 border-transparent text-ink-secondary hover:text-ink"}`,
					children: c[r]
				}, r))
			}),
			/* @__PURE__ */ F("button", {
				type: "button",
				onClick: r,
				className: "inline-flex items-center gap-2 rounded-md border border-border px-2.5 py-1.5 text-xs text-ink-secondary hover:bg-surface-2 hover:text-ink",
				children: [
					/* @__PURE__ */ F(Gn, { className: "h-3.5 w-3.5" }),
					a.search,
					/* @__PURE__ */ F("kbd", {
						className: "hidden rounded-sm border border-border px-1 font-mono text-[10px] text-ink-muted sm:inline",
						children: s ? "⌘F" : "Ctrl+F"
					})
				]
			}),
			/* @__PURE__ */ F("div", {
				className: "ml-auto flex items-center gap-2",
				children: i
			})
		]
	});
}
//#endregion
//#region src/ui/DocViewer.tsx
var Nv = 560;
function Pv({ files: e, folderName: t = "files", initialTab: n = "preview" }) {
	let r = Hn(), i = Ut(), a = Bt(() => new Map(e.map((e) => [e.path, an(e)])), [e]), o = e[0].path, [s, c] = Ft(n), [l, u] = Ft(o), [d, f] = Ft(0), [p, m] = Ft(!1), [h, g] = Ft(!1), [_, v] = Ft(!1), [y, b] = Ft(""), [x, S] = Ft(null), [C, ee] = Ft(!0), w = zt(null), T = zt(null), E = zt(null), D = a.get(l) ?? a.get(o), te = e.length > 1;
	function ne(e) {
		u(e), f(0), T.current?.scrollTo({ top: 0 });
	}
	Rt(() => {
		let e = T.current;
		if (!e) return;
		let t = () => ee(e.scrollHeight > 568);
		t();
		let n = new ResizeObserver(t);
		return n.observe(e), () => n.disconnect();
	}, [
		s,
		l,
		h
	]);
	function O(e) {
		if (v(!1), s === "slides") {
			let t = D.sections.findIndex((t) => t.id === e.sectionId);
			f(t === -1 ? 0 : t + 1);
			return;
		}
		g(!0), S(e);
	}
	Lt(() => {
		if (!x) return;
		let e = x;
		S(null), requestAnimationFrame(() => {
			s === "code" ? (E.current?.querySelector(`#L${e.line}`))?.scrollIntoView({ block: "center" }) : e.sectionId !== "intro" && e.sectionId !== "file" ? wv(T.current, e.sectionId) : T.current?.scrollIntoView({ block: "start" });
		});
	}, [x, s]);
	function k(e) {
		(e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "f" && (e.preventDefault(), v(!0));
	}
	let A = Vt(() => {
		c("code"), g(!0), requestAnimationFrame(() => {
			let e = E.current;
			if (!e) return;
			let t = document.createRange();
			t.selectNodeContents(e);
			let n = e.getRootNode().getSelection?.() ?? window.getSelection();
			n?.removeAllRanges(), n?.addRange(t);
		});
	}, []), re = _ ? y : "", j = te && (s === "code" || s === "preview"), ie = s !== "slides" && !h && C;
	return /* @__PURE__ */ F("div", {
		ref: w,
		tabIndex: -1,
		onKeyDown: k,
		className: "relative border border-border bg-surface focus:outline-hidden",
		children: [
			/* @__PURE__ */ F(Mv, {
				uid: i,
				tab: s,
				onTabChange: c,
				onOpenSearch: () => v(!0),
				actions: /* @__PURE__ */ F(Qn, {
					text: D.file.source,
					onFailure: A
				})
			}),
			_ && /* @__PURE__ */ F(Dv, {
				doc: D,
				initialQuery: y,
				onQueryChange: b,
				onSelect: O,
				onClose: () => v(!1)
			}),
			te && j && !p && /* @__PURE__ */ F("div", {
				className: "border-b border-border px-2 py-1.5",
				children: /* @__PURE__ */ F("button", {
					type: "button",
					onClick: () => m(!0),
					className: "inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-xs text-ink-secondary hover:bg-surface-2 hover:text-ink",
					children: [
						/* @__PURE__ */ F(Xn, { className: "h-3.5 w-3.5" }),
						r.browseFiles,
						" (",
						e.length,
						")",
						/* @__PURE__ */ F("span", {
							className: "ml-1 font-mono text-ink",
							children: D.file.path
						})
					]
				})
			}),
			/* @__PURE__ */ F("div", {
				id: `${i}-panel`,
				role: "tabpanel",
				"aria-labelledby": jv(i, s),
				className: "relative flex min-w-0",
				children: [j && p && /* @__PURE__ */ F($n, {
					folderName: t,
					paths: e.map((e) => e.path),
					selected: D.file.path,
					onSelect: ne,
					onClose: () => m(!1)
				}), /* @__PURE__ */ F("div", {
					className: "relative min-w-0 flex-1",
					children: [/* @__PURE__ */ F("div", {
						ref: T,
						style: ie ? { maxHeight: Nv } : void 0,
						className: ie ? "overflow-hidden" : "",
						children: [
							s === "code" && /* @__PURE__ */ F(Un, {
								ref: E,
								source: D.file.source,
								query: re
							}),
							s === "preview" && /* @__PURE__ */ F(Tv, {
								doc: D,
								query: re,
								onRequestExpand: () => g(!0)
							}),
							s === "slides" && /* @__PURE__ */ F(kv, {
								doc: D,
								index: Math.min(d, D.sections.length),
								onIndexChange: f,
								query: re,
								keysEnabled: !_,
								onShowFull: () => {
									c("preview"), g(!0);
								}
							})
						]
					}), ie && /* @__PURE__ */ F("div", {
						className: "pointer-events-none absolute inset-x-0 bottom-0 flex h-24 items-end justify-center bg-linear-to-t from-surface to-transparent pb-3",
						children: /* @__PURE__ */ F("button", {
							type: "button",
							onClick: () => g(!0),
							className: "pointer-events-auto border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-ink hover:bg-surface-2",
							children: r.showFullDocument
						})
					})]
				})]
			})
		]
	});
}
//#endregion
//#region src/ui/App.tsx
function Fv({ role: e, text: t }) {
	return /* @__PURE__ */ F("div", {
		role: e,
		className: "border border-border bg-surface px-4 py-6 text-center text-sm text-ink-secondary",
		children: t
	});
}
function Iv({ state: e, initialTab: t }) {
	let n = Hn();
	return e.status === "loading" ? /* @__PURE__ */ F(Fv, {
		role: "status",
		text: n.loading
	}) : e.status === "empty" ? /* @__PURE__ */ F(Fv, {
		role: "status",
		text: n.empty
	}) : e.status === "error" ? /* @__PURE__ */ F(Fv, {
		role: "alert",
		text: n.error
	}) : /* @__PURE__ */ F(Pv, {
		files: e.files,
		initialTab: t
	});
}
function Lv({ state: e, labels: t, initialTab: n }) {
	return /* @__PURE__ */ F(Vn.Provider, {
		value: t,
		children: /* @__PURE__ */ F(Iv, {
			state: e,
			initialTab: n
		})
	});
}
//#endregion
//#region src/element.ts
var Rv = "/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */\n@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-content:\"\"}}}@layer theme{:root,:host{--font-sans:var(--docviewer-font);--font-mono:var(--docviewer-mono);--spacing:.25rem;--container-md:28rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-surface-2:var(--docviewer-bg-subtle);--color-surface:var(--docviewer-bg);--color-border:var(--docviewer-border);--color-ink:var(--docviewer-fg);--color-ink-secondary:var(--docviewer-fg-secondary);--color-ink-muted:var(--docviewer-fg-muted);--color-signal:var(--docviewer-accent);--color-signal-ring:var(--docviewer-accent-ring);--color-danger:var(--docviewer-danger);--font-display:var(--docviewer-font)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)){outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}*,:after,:before,::backdrop{border-color:var(--color-border)}::file-selector-button{border-color:var(--color-border)}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.sticky{position:sticky}.inset-x-0{inset-inline:0}.inset-x-3{inset-inline:calc(var(--spacing) * 3)}.top-1\\/2{top:50%}.top-4{top:calc(var(--spacing) * 4)}.top-12{top:calc(var(--spacing) * 12)}.bottom-0{bottom:0}.left-3{left:calc(var(--spacing) * 3)}.z-20{z-index:20}.m-0{margin:0}.prose{color:var(--tw-prose-body);max-width:65ch}.prose :where(p):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em;margin-bottom:1.25em}.prose :where([class~=lead]):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-lead);margin-top:1.2em;margin-bottom:1.2em;font-size:1.25em;line-height:1.6}.prose :where(a):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-links);font-weight:500;text-decoration:underline}.prose :where(strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-bold);font-weight:600}.prose :where(a strong):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(blockquote strong):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(thead th strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(ol):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em;margin-bottom:1.25em;padding-inline-start:1.625em;list-style-type:decimal}.prose :where(ol[type=A]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:upper-alpha}.prose :where(ol[type=a]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:lower-alpha}.prose :where(ol[type=A s]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:upper-alpha}.prose :where(ol[type=a s]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:lower-alpha}.prose :where(ol[type=I]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:upper-roman}.prose :where(ol[type=i]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:lower-roman}.prose :where(ol[type=I s]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:upper-roman}.prose :where(ol[type=i s]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:lower-roman}.prose :where(ol[type=\"1\"]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:decimal}.prose :where(ul):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em;margin-bottom:1.25em;padding-inline-start:1.625em;list-style-type:disc}.prose :where(ol>li):not(:where([class~=not-prose],[class~=not-prose] *))::marker{color:var(--tw-prose-counters);font-weight:400}.prose :where(ul>li):not(:where([class~=not-prose],[class~=not-prose] *))::marker{color:var(--tw-prose-bullets)}.prose :where(dt):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);margin-top:1.25em;font-weight:600}.prose :where(hr):not(:where([class~=not-prose],[class~=not-prose] *)){border-color:var(--tw-prose-hr);border-top-width:1px;margin-top:3em;margin-bottom:3em}.prose :where(blockquote):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-quotes);border-inline-start-width:.25rem;border-inline-start-color:var(--tw-prose-quote-borders);quotes:\"“\"\"”\"\"‘\"\"’\";margin-top:1.6em;margin-bottom:1.6em;padding-inline-start:1em;font-style:italic;font-weight:500}.prose :where(blockquote p:first-of-type):not(:where([class~=not-prose],[class~=not-prose] *)):before{content:open-quote}.prose :where(blockquote p:last-of-type):not(:where([class~=not-prose],[class~=not-prose] *)):after{content:close-quote}.prose :where(h1):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);margin-top:0;margin-bottom:.888889em;font-size:2.25em;font-weight:800;line-height:1.11111}.prose :where(h1 strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-weight:900}.prose :where(h2):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);margin-top:2em;margin-bottom:1em;font-size:1.5em;font-weight:700;line-height:1.33333}.prose :where(h2 strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-weight:800}.prose :where(h3):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);margin-top:1.6em;margin-bottom:.6em;font-size:1.25em;font-weight:600;line-height:1.6}.prose :where(h3 strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-weight:700}.prose :where(h4):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);margin-top:1.5em;margin-bottom:.5em;font-weight:600;line-height:1.5}.prose :where(h4 strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-weight:700}.prose :where(img):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2em;margin-bottom:2em}.prose :where(picture):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2em;margin-bottom:2em;display:block}.prose :where(video):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2em;margin-bottom:2em}.prose :where(kbd):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-kbd);box-shadow:0 0 0 1px var(--tw-prose-kbd-shadows), 0 3px 0 var(--tw-prose-kbd-shadows);padding-top:.1875em;padding-inline-end:.375em;padding-bottom:.1875em;border-radius:.3125rem;padding-inline-start:.375em;font-family:inherit;font-size:.875em;font-weight:500}.prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-code);font-size:.875em;font-weight:600}.prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)):before,.prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)):after{content:\"`\"}.prose :where(a code):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(h1 code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(h2 code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-size:.875em}.prose :where(h3 code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-size:.9em}.prose :where(h4 code):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(blockquote code):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(thead th code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(pre):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-pre-code);background-color:var(--tw-prose-pre-bg);padding-top:.857143em;padding-inline-end:1.14286em;padding-bottom:.857143em;border-radius:.375rem;margin-top:1.71429em;margin-bottom:1.71429em;padding-inline-start:1.14286em;font-size:.875em;font-weight:400;line-height:1.71429;overflow-x:auto}.prose :where(pre code):not(:where([class~=not-prose],[class~=not-prose] *)){font-weight:inherit;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit;background-color:#0000;border-width:0;border-radius:0;padding:0}.prose :where(pre code):not(:where([class~=not-prose],[class~=not-prose] *)):before,.prose :where(pre code):not(:where([class~=not-prose],[class~=not-prose] *)):after{content:none}.prose :where(table):not(:where([class~=not-prose],[class~=not-prose] *)){table-layout:auto;width:100%;margin-top:2em;margin-bottom:2em;font-size:.875em;line-height:1.71429}.prose :where(thead):not(:where([class~=not-prose],[class~=not-prose] *)){border-bottom-width:1px;border-bottom-color:var(--tw-prose-th-borders)}.prose :where(thead th):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);vertical-align:bottom;padding-inline-end:.571429em;padding-bottom:.571429em;padding-inline-start:.571429em;font-weight:600}.prose :where(tbody tr):not(:where([class~=not-prose],[class~=not-prose] *)){border-bottom-width:1px;border-bottom-color:var(--tw-prose-td-borders)}.prose :where(tbody tr:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){border-bottom-width:0}.prose :where(tbody td):not(:where([class~=not-prose],[class~=not-prose] *)){vertical-align:baseline}.prose :where(tfoot):not(:where([class~=not-prose],[class~=not-prose] *)){border-top-width:1px;border-top-color:var(--tw-prose-th-borders)}.prose :where(tfoot td):not(:where([class~=not-prose],[class~=not-prose] *)){vertical-align:top}.prose :where(th,td):not(:where([class~=not-prose],[class~=not-prose] *)){text-align:start}.prose :where(figure>*):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0;margin-bottom:0}.prose :where(figcaption):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-captions);margin-top:.857143em;font-size:.875em;line-height:1.42857}.prose{--tw-prose-body:oklch(37.3% .034 259.733);--tw-prose-headings:oklch(21% .034 264.665);--tw-prose-lead:oklch(44.6% .03 256.802);--tw-prose-links:oklch(21% .034 264.665);--tw-prose-bold:oklch(21% .034 264.665);--tw-prose-counters:oklch(55.1% .027 264.364);--tw-prose-bullets:oklch(87.2% .01 258.338);--tw-prose-hr:oklch(92.8% .006 264.531);--tw-prose-quotes:oklch(21% .034 264.665);--tw-prose-quote-borders:oklch(92.8% .006 264.531);--tw-prose-captions:oklch(55.1% .027 264.364);--tw-prose-kbd:oklch(21% .034 264.665);--tw-prose-kbd-shadows:oklab(21% -.00316127 -.0338527/.1);--tw-prose-code:oklch(21% .034 264.665);--tw-prose-pre-code:oklch(92.8% .006 264.531);--tw-prose-pre-bg:oklch(27.8% .033 256.848);--tw-prose-th-borders:oklch(87.2% .01 258.338);--tw-prose-td-borders:oklch(92.8% .006 264.531);--tw-prose-invert-body:oklch(87.2% .01 258.338);--tw-prose-invert-headings:#fff;--tw-prose-invert-lead:oklch(70.7% .022 261.325);--tw-prose-invert-links:#fff;--tw-prose-invert-bold:#fff;--tw-prose-invert-counters:oklch(70.7% .022 261.325);--tw-prose-invert-bullets:oklch(44.6% .03 256.802);--tw-prose-invert-hr:oklch(37.3% .034 259.733);--tw-prose-invert-quotes:oklch(96.7% .003 264.542);--tw-prose-invert-quote-borders:oklch(37.3% .034 259.733);--tw-prose-invert-captions:oklch(70.7% .022 261.325);--tw-prose-invert-kbd:#fff;--tw-prose-invert-kbd-shadows:#ffffff1a;--tw-prose-invert-code:#fff;--tw-prose-invert-pre-code:oklch(87.2% .01 258.338);--tw-prose-invert-pre-bg:#00000080;--tw-prose-invert-th-borders:oklch(44.6% .03 256.802);--tw-prose-invert-td-borders:oklch(37.3% .034 259.733);font-size:1rem;line-height:1.75}.prose :where(picture>img):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0;margin-bottom:0}.prose :where(li):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.5em;margin-bottom:.5em}.prose :where(ol>li):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(ul>li):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:.375em}.prose :where(.prose>ul>li p):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.75em;margin-bottom:.75em}.prose :where(.prose>ul>li>p:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em}.prose :where(.prose>ul>li>p:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:1.25em}.prose :where(.prose>ol>li>p:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em}.prose :where(.prose>ol>li>p:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:1.25em}.prose :where(ul ul,ul ol,ol ul,ol ol):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.75em;margin-bottom:.75em}.prose :where(dl):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em;margin-bottom:1.25em}.prose :where(dd):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.5em;padding-inline-start:1.625em}.prose :where(hr+*):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(h2+*):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(h3+*):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(h4+*):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.prose :where(thead th:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:0}.prose :where(thead th:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-end:0}.prose :where(tbody td,tfoot td):not(:where([class~=not-prose],[class~=not-prose] *)){padding-top:.571429em;padding-inline-end:.571429em;padding-bottom:.571429em;padding-inline-start:.571429em}.prose :where(tbody td:first-child,tfoot td:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:0}.prose :where(tbody td:last-child,tfoot td:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-end:0}.prose :where(figure):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2em;margin-bottom:2em}.prose :where(.prose>:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.prose :where(.prose>:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:0}.prose-sm{font-size:.875rem;line-height:1.71429}.prose-sm :where(p):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.14286em;margin-bottom:1.14286em}.prose-sm :where([class~=lead]):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.888889em;margin-bottom:.888889em;font-size:1.28571em;line-height:1.55556}.prose-sm :where(blockquote):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.33333em;margin-bottom:1.33333em;padding-inline-start:1.11111em}.prose-sm :where(h1):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0;margin-bottom:.8em;font-size:2.14286em;line-height:1.2}.prose-sm :where(h2):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.6em;margin-bottom:.8em;font-size:1.42857em;line-height:1.4}.prose-sm :where(h3):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.55556em;margin-bottom:.444444em;font-size:1.28571em;line-height:1.55556}.prose-sm :where(h4):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.42857em;margin-bottom:.571429em;line-height:1.42857}.prose-sm :where(img):not(:where([class~=not-prose],[class~=not-prose] *)),.prose-sm :where(picture):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.71429em;margin-bottom:1.71429em}.prose-sm :where(picture>img):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0;margin-bottom:0}.prose-sm :where(video):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.71429em;margin-bottom:1.71429em}.prose-sm :where(kbd):not(:where([class~=not-prose],[class~=not-prose] *)){padding-top:.142857em;padding-inline-end:.357143em;padding-bottom:.142857em;border-radius:.3125rem;padding-inline-start:.357143em;font-size:.857143em}.prose-sm :where(code):not(:where([class~=not-prose],[class~=not-prose] *)){font-size:.857143em}.prose-sm :where(h2 code):not(:where([class~=not-prose],[class~=not-prose] *)){font-size:.9em}.prose-sm :where(h3 code):not(:where([class~=not-prose],[class~=not-prose] *)){font-size:.888889em}.prose-sm :where(pre):not(:where([class~=not-prose],[class~=not-prose] *)){padding-top:.666667em;padding-inline-end:1em;padding-bottom:.666667em;border-radius:.25rem;margin-top:1.66667em;margin-bottom:1.66667em;padding-inline-start:1em;font-size:.857143em;line-height:1.66667}.prose-sm :where(ol):not(:where([class~=not-prose],[class~=not-prose] *)),.prose-sm :where(ul):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.14286em;margin-bottom:1.14286em;padding-inline-start:1.57143em}.prose-sm :where(li):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.285714em;margin-bottom:.285714em}.prose-sm :where(ol>li):not(:where([class~=not-prose],[class~=not-prose] *)),.prose-sm :where(ul>li):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:.428571em}.prose-sm :where(.prose-sm>ul>li p):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.571429em;margin-bottom:.571429em}.prose-sm :where(.prose-sm>ul>li>p:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.14286em}.prose-sm :where(.prose-sm>ul>li>p:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:1.14286em}.prose-sm :where(.prose-sm>ol>li>p:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.14286em}.prose-sm :where(.prose-sm>ol>li>p:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:1.14286em}.prose-sm :where(ul ul,ul ol,ol ul,ol ol):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.571429em;margin-bottom:.571429em}.prose-sm :where(dl):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.14286em;margin-bottom:1.14286em}.prose-sm :where(dt):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.14286em}.prose-sm :where(dd):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.285714em;padding-inline-start:1.57143em}.prose-sm :where(hr):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2.85714em;margin-bottom:2.85714em}.prose-sm :where(hr+*):not(:where([class~=not-prose],[class~=not-prose] *)),.prose-sm :where(h2+*):not(:where([class~=not-prose],[class~=not-prose] *)),.prose-sm :where(h3+*):not(:where([class~=not-prose],[class~=not-prose] *)),.prose-sm :where(h4+*):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.prose-sm :where(table):not(:where([class~=not-prose],[class~=not-prose] *)){font-size:.857143em;line-height:1.5}.prose-sm :where(thead th):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-end:1em;padding-bottom:.666667em;padding-inline-start:1em}.prose-sm :where(thead th:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:0}.prose-sm :where(thead th:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-end:0}.prose-sm :where(tbody td,tfoot td):not(:where([class~=not-prose],[class~=not-prose] *)){padding-top:.666667em;padding-inline-end:1em;padding-bottom:.666667em;padding-inline-start:1em}.prose-sm :where(tbody td:first-child,tfoot td:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:0}.prose-sm :where(tbody td:last-child,tfoot td:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-end:0}.prose-sm :where(figure):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.71429em;margin-bottom:1.71429em}.prose-sm :where(figure>*):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0;margin-bottom:0}.prose-sm :where(figcaption):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.666667em;font-size:.857143em;line-height:1.33333}.prose-sm :where(.prose-sm>:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.prose-sm :where(.prose-sm>:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:0}.mt-2{margin-top:calc(var(--spacing) * 2)}.mr-4{margin-right:calc(var(--spacing) * 4)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.ml-1{margin-left:var(--spacing)}.ml-auto{margin-left:auto}.block{display:block}.flex{display:flex}.hidden{display:none}.inline-flex{display:inline-flex}.h-2{height:calc(var(--spacing) * 2)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-4{height:calc(var(--spacing) * 4)}.h-24{height:calc(var(--spacing) * 24)}.h-\\[420px\\]{height:420px}.h-full{height:100%}.h-screen{height:100vh}.max-h-72{max-height:calc(var(--spacing) * 72)}.max-h-\\[60vh\\]{max-height:60vh}.w-2{width:calc(var(--spacing) * 2)}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-4{width:calc(var(--spacing) * 4)}.w-6{width:calc(var(--spacing) * 6)}.w-52{width:calc(var(--spacing) * 52)}.w-full{width:100%}.max-w-none{max-width:none}.max-w-prose{max-width:65ch}.min-w-0{min-width:0}.flex-1{flex:1}.shrink-0{flex-shrink:0}.-translate-y-1\\/2{--tw-translate-y:calc(calc(1 / 2 * 100%) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.cursor-pointer{cursor:pointer}.scroll-mt-4{scroll-margin-top:calc(var(--spacing) * 4)}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-end{align-items:flex-end}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-6{gap:calc(var(--spacing) * 6)}.gap-x-3{column-gap:calc(var(--spacing) * 3)}.gap-x-6{column-gap:calc(var(--spacing) * 6)}.gap-y-1{row-gap:var(--spacing)}.gap-y-2{row-gap:calc(var(--spacing) * 2)}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded-full{border-radius:2147483647px}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.border{border-style:var(--tw-border-style);border-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}.border-border{border-color:var(--color-border)}.border-ink{border-color:var(--color-ink)}.border-transparent{border-color:#0000}.bg-border{background-color:var(--color-border)}.bg-ink{background-color:var(--color-ink)}.bg-surface{background-color:var(--color-surface)}.bg-surface-2{background-color:var(--color-surface-2)}.bg-transparent{background-color:#0000}.bg-linear-to-t{--tw-gradient-position:to top}@supports (background-image:linear-gradient(in lab, red, red)){.bg-linear-to-t{--tw-gradient-position:to top in oklab}}.bg-linear-to-t{background-image:linear-gradient(var(--tw-gradient-stops))}.from-surface{--tw-gradient-from:var(--color-surface);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.p-1{padding:var(--spacing)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.px-1{padding-inline:var(--spacing)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-\\[8vw\\]{padding-inline:8vw}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:var(--spacing)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-4{padding-block:calc(var(--spacing) * 4)}.py-6{padding-block:calc(var(--spacing) * 6)}.py-10{padding-block:calc(var(--spacing) * 10)}.pr-3{padding-right:calc(var(--spacing) * 3)}.pb-3{padding-bottom:calc(var(--spacing) * 3)}.pl-3{padding-left:calc(var(--spacing) * 3)}.pl-6{padding-left:calc(var(--spacing) * 6)}.pl-8{padding-left:calc(var(--spacing) * 8)}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.font-display{font-family:var(--font-display)}.font-mono{font-family:var(--font-mono)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[13px\\]{font-size:13px}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.wrap-break-word{overflow-wrap:break-word}.whitespace-pre-wrap{white-space:pre-wrap}.text-danger{color:var(--color-danger)}.text-ink{color:var(--color-ink)}.text-ink-muted{color:var(--color-ink-muted)}.text-ink-secondary{color:var(--color-ink-secondary)}.uppercase{text-transform:uppercase}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.underline{text-decoration-line:underline}.underline-offset-2{text-underline-offset:2px}.shadow-card{--tw-shadow:0 4px 16px var(--tw-shadow-color,#00000024);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.select-none{-webkit-user-select:none;user-select:none}.placeholder\\:text-ink-muted::placeholder{color:var(--color-ink-muted)}@media (hover:hover){.hover\\:bg-ink-muted:hover{background-color:var(--color-ink-muted)}.hover\\:bg-surface-2:hover{background-color:var(--color-surface-2)}.hover\\:text-ink:hover{color:var(--color-ink)}}.focus\\:outline-hidden:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.focus\\:outline-hidden:focus{outline-offset:2px;outline:2px solid #0000}}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.focus-visible\\:ring-signal-ring:focus-visible{--tw-ring-color:var(--color-signal-ring)}.focus-visible\\:outline-hidden:focus-visible{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.focus-visible\\:outline-hidden:focus-visible{outline-offset:2px;outline:2px solid #0000}}.focus-visible\\:ring-inset:focus-visible{--tw-ring-inset:inset}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-40:disabled{opacity:.4}@media (hover:hover){.disabled\\:hover\\:bg-transparent:disabled:hover{background-color:#0000}}@media not all and (width>=40rem){.max-sm\\:absolute{position:absolute}.max-sm\\:inset-0{inset:0}.max-sm\\:z-10{z-index:10}}@media (width>=40rem){.sm\\:left-auto{left:auto}.sm\\:inline{display:inline}.sm\\:w-60{width:calc(var(--spacing) * 60)}.sm\\:w-md{width:var(--container-md)}.sm\\:shrink-0{flex-shrink:0}.sm\\:border-r{border-right-style:var(--tw-border-style);border-right-width:1px}}@media (width>=64rem){.lg\\:block{display:block}.lg\\:p-6{padding:calc(var(--spacing) * 6)}}.prose-headings\\:font-display :where(h1,h2,h3,h4,h5,h6,th):not(:where([class~=not-prose],[class~=not-prose] *)){font-family:var(--font-display)}.prose-headings\\:font-semibold :where(h1,h2,h3,h4,h5,h6,th):not(:where([class~=not-prose],[class~=not-prose] *)){--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.prose-headings\\:text-ink :where(h1,h2,h3,h4,h5,h6,th):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--color-ink)}.prose-p\\:text-ink-secondary :where(p):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--color-ink-secondary)}.prose-a\\:text-ink :where(a):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--color-ink)}.prose-a\\:decoration-signal :where(a):not(:where([class~=not-prose],[class~=not-prose] *)){-webkit-text-decoration-color:var(--color-signal);-webkit-text-decoration-color:var(--color-signal);-webkit-text-decoration-color:var(--color-signal);text-decoration-color:var(--color-signal)}.prose-a\\:decoration-2 :where(a):not(:where([class~=not-prose],[class~=not-prose] *)){text-decoration-thickness:2px}.prose-a\\:underline-offset-2 :where(a):not(:where([class~=not-prose],[class~=not-prose] *)){text-underline-offset:2px}.prose-blockquote\\:border-border :where(blockquote):not(:where([class~=not-prose],[class~=not-prose] *)){border-color:var(--color-border)}.prose-blockquote\\:text-ink-secondary :where(blockquote):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--color-ink-secondary)}.prose-strong\\:text-ink :where(strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--color-ink)}.prose-code\\:rounded-sm :where(code):not(:where([class~=not-prose],[class~=not-prose] *)){border-radius:var(--radius-sm)}.prose-code\\:bg-surface-2 :where(code):not(:where([class~=not-prose],[class~=not-prose] *)){background-color:var(--color-surface-2)}.prose-code\\:px-1 :where(code):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline:var(--spacing)}.prose-code\\:py-0\\.5 :where(code):not(:where([class~=not-prose],[class~=not-prose] *)){padding-block:calc(var(--spacing) * .5)}.prose-code\\:text-\\[0\\.85em\\] :where(code):not(:where([class~=not-prose],[class~=not-prose] *)){font-size:.85em}.prose-code\\:font-normal :where(code):not(:where([class~=not-prose],[class~=not-prose] *)){--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.prose-code\\:text-ink :where(code):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--color-ink)}.prose-code\\:before\\:content-none :where(code):not(:where([class~=not-prose],[class~=not-prose] *)):before,.prose-code\\:after\\:content-none :where(code):not(:where([class~=not-prose],[class~=not-prose] *)):after{content:var(--tw-content);--tw-content:none;content:none}.prose-pre\\:border :where(pre):not(:where([class~=not-prose],[class~=not-prose] *)){border-style:var(--tw-border-style);border-width:1px}.prose-pre\\:border-border :where(pre):not(:where([class~=not-prose],[class~=not-prose] *)){border-color:var(--color-border)}.prose-pre\\:bg-surface-2 :where(pre):not(:where([class~=not-prose],[class~=not-prose] *)){background-color:var(--color-surface-2)}.prose-li\\:text-ink-secondary :where(li):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--color-ink-secondary)}.prose-th\\:text-ink :where(th):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--color-ink)}.prose-td\\:text-ink-secondary :where(td):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--color-ink-secondary)}.prose-img\\:rounded-lg :where(img):not(:where([class~=not-prose],[class~=not-prose] *)){border-radius:var(--radius-lg)}.prose-hr\\:border-border :where(hr):not(:where([class~=not-prose],[class~=not-prose] *)){border-color:var(--color-border)}.\\[\\&_pre_code\\]\\:bg-transparent pre code{background-color:#0000}.\\[\\&_pre_code\\]\\:p-0 pre code{padding:0}.\\[\\&_pre_code\\]\\:text-ink pre code{color:var(--color-ink)}}:host{--docviewer-bg:#fff;--docviewer-bg-subtle:#f4f4f5;--docviewer-border:#d4d4d8;--docviewer-fg:#18181b;--docviewer-fg-secondary:#3f3f46;--docviewer-fg-muted:#71717a;--docviewer-accent:#84cc16;--docviewer-accent-ring:#65a30d;--docviewer-danger:#dc2626;--docviewer-font:system-ui, -apple-system, \"Segoe UI\", \"Hiragino Sans\", \"Yu Gothic UI\", sans-serif;--docviewer-mono:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;color:var(--docviewer-fg);font-family:var(--docviewer-font);display:block}@media (prefers-color-scheme:dark){:host{--docviewer-bg:#18181b;--docviewer-bg-subtle:#27272a;--docviewer-border:#3f3f46;--docviewer-fg:#fafafa;--docviewer-fg-secondary:#d4d4d8;--docviewer-fg-muted:#a1a1aa;--docviewer-accent:#a3e635;--docviewer-accent-ring:#bef264;--docviewer-danger:#f87171}}::highlight(doc-viewer-search){background-color:var(--docviewer-accent)}@supports (color:color-mix(in lab, red, red)){::highlight(doc-viewer-search){background-color:color-mix(in srgb, var(--docviewer-accent) 50%, transparent)}}::highlight(doc-viewer-search){color:inherit;text-decoration:underline}.doc-mark{background-color:var(--docviewer-accent)}@supports (color:color-mix(in lab, red, red)){.doc-mark{background-color:color-mix(in srgb, var(--docviewer-accent) 50%, transparent)}}.doc-mark{color:inherit;text-underline-offset:2px;text-decoration:underline;text-decoration-thickness:1px}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:\"*\";inherits:false}@property --tw-gradient-from{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:\"*\";inherits:false}@property --tw-gradient-via-stops{syntax:\"*\";inherits:false}@property --tw-gradient-from-position{syntax:\"<length-percentage>\";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:\"<length-percentage>\";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:\"<length-percentage>\";inherits:false;initial-value:100%}@property --tw-leading{syntax:\"*\";inherits:false}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-tracking{syntax:\"*\";inherits:false}@property --tw-ordinal{syntax:\"*\";inherits:false}@property --tw-slashed-zero{syntax:\"*\";inherits:false}@property --tw-numeric-figure{syntax:\"*\";inherits:false}@property --tw-numeric-spacing{syntax:\"*\";inherits:false}@property --tw-numeric-fraction{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-content{syntax:\"*\";inherits:false;initial-value:\"\"}".match(/@property\s+--[\w-]+\s*\{[^}]*\}/g)?.join("") ?? "", zv = !1;
function Bv() {
	if (!zv && Rv) {
		zv = !0;
		try {
			let e = new CSSStyleSheet();
			e.replaceSync(Rv), document.adoptedStyleSheets = [...document.adoptedStyleSheets, e];
		} catch {
			let e = document.createElement("style");
			e.textContent = Rv, document.head.append(e);
		}
	}
}
var Vv = class extends HTMLElement {
	static observedAttributes = ["src", "initial-tab"];
	#e;
	#t;
	#n = {};
	#r = zn();
	#i = { status: "loading" };
	#a = 0;
	#o = !1;
	constructor() {
		super(), Bv(), this.#e = this.attachShadow({ mode: "open" });
		try {
			let e = new CSSStyleSheet();
			e.replaceSync(St), this.#e.adoptedStyleSheets = [e];
		} catch {
			let e = document.createElement("style");
			e.textContent = St, this.#e.append(e);
		}
		this.#t = document.createElement("div"), this.#e.append(this.#t);
		for (let e of [
			"files",
			"zip",
			"fetcher",
			"labels"
		]) if (Object.prototype.hasOwnProperty.call(this, e)) {
			let t = this[e];
			delete this[e], this[e] = t;
		}
	}
	get files() {
		return this.#n.files ?? null;
	}
	set files(e) {
		this.#n.files = e, this.#s();
	}
	get zip() {
		return this.#n.zip ?? null;
	}
	set zip(e) {
		this.#n.zip = e, this.#s();
	}
	get fetcher() {
		return this.#n.fetcher ?? null;
	}
	set fetcher(e) {
		this.#n.fetcher = e, this.#s();
	}
	get labels() {
		return this.#r;
	}
	set labels(e) {
		this.#r = zn(e), this.#l();
	}
	connectedCallback() {
		this.#s();
	}
	disconnectedCallback() {
		this.#a++, we(null, this.#t);
	}
	attributeChangedCallback(e) {
		e === "src" ? this.#s() : this.#l();
	}
	#s() {
		!this.isConnected || this.#o || (this.#o = !0, queueMicrotask(async () => {
			this.#o = !1;
			let e = ++this.#a;
			this.#i = { status: "loading" }, this.#l();
			try {
				let { files: t, warnings: n } = await xt({
					...this.#n,
					src: this.getAttribute("src")
				});
				if (e !== this.#a) return;
				this.#i = t.length ? {
					status: "ready",
					files: t
				} : { status: "empty" }, this.#l(), n.length && this.#c("doc-viewer-warning", { warnings: n }), t.length && this.#c("doc-viewer-ready", { count: t.length });
			} catch (t) {
				if (e !== this.#a) return;
				let n = t instanceof Error ? t.message : String(t);
				this.#i = {
					status: "error",
					message: n
				}, this.#l(), this.#c("doc-viewer-error", { message: n });
			}
		}));
	}
	#c(e, t) {
		this.dispatchEvent(new CustomEvent(e, {
			detail: t,
			bubbles: !0,
			composed: !0
		}));
	}
	#l() {
		let e = this.getAttribute("initial-tab"), t = e === "code" || e === "slides" ? e : "preview";
		we(O(Lv, {
			state: this.#i,
			labels: this.#r,
			initialTab: t
		}), this.#t);
	}
};
//#endregion
//#region src/index.ts
customElements.get("doc-viewer") || customElements.define("doc-viewer", Vv);
//#endregion
export { Vv as DocViewerElement };
