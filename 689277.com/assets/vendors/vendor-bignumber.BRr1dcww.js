var Fe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function $e(R) {
    return R && R.__esModule && Object.prototype.hasOwnProperty.call(R, "default") ? R.default : R
}

function ze(R) {
    if (R.__esModule) return R;
    var U = R.default;
    if (typeof U == "function") {
        var q = function V() {
            return this instanceof V ? Reflect.construct(U, arguments, this.constructor) : U.apply(this, arguments)
        };
        q.prototype = U.prototype
    } else q = {};
    return Object.defineProperty(q, "__esModule", {
        value: !0
    }), Object.keys(R).forEach(function(V) {
        var B = Object.getOwnPropertyDescriptor(R, V);
        Object.defineProperty(q, V, B.get ? B : {
            enumerable: !0,
            get: function() {
                return R[V]
            }
        })
    }), q
}
var qe = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
    Le = Math.ceil,
    we = Math.floor,
    ce = "[BigNumber Error] ",
    ke = ce + "Number primitive has more than 15 significant digits: ",
    me = 1e14,
    k = 14,
    Ce = 9007199254740991,
    Ue = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
    ve = 1e7,
    ne = 1e9;

function Ge(R) {
    var U, q, V, B = x.prototype = {
            constructor: x,
            toString: null,
            valueOf: null
        },
        z = new x(1),
        y = 20,
        Q = 4,
        Y = -7,
        T = 21,
        Ne = -1e7,
        se = 1e7,
        fe = !1,
        Z = 1,
        Oe = 0,
        le = {
            prefix: "",
            groupSize: 3,
            secondaryGroupSize: 0,
            groupSeparator: ",",
            decimalSeparator: ".",
            fractionGroupSize: 0,
            fractionGroupSeparator: " ",
            suffix: ""
        },
        ee = "0123456789abcdefghijklmnopqrstuvwxyz",
        de = !0;

    function x(e, n) {
        var i, p, l, c, O, o, h, N, E = this;
        if (!(E instanceof x)) return new x(e, n);
        if (n == null) {
            if (e && e._isBigNumber === !0) {
                E.s = e.s, !e.c || e.e > se ? E.c = E.e = null : e.e < Ne ? E.c = [E.e = 0] : (E.e = e.e, E.c = e.c.slice());
                return
            }
            if ((o = typeof e == "number") && e * 0 == 0) {
                if (E.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                    for (c = 0, O = e; O >= 10; O /= 10, c++);
                    c > se ? E.c = E.e = null : (E.e = c, E.c = [e]);
                    return
                }
                N = String(e)
            } else {
                if (!qe.test(N = String(e))) return V(E, N, o);
                E.s = N.charCodeAt(0) == 45 ? (N = N.slice(1), -1) : 1
            }(c = N.indexOf(".")) > -1 && (N = N.replace(".", "")), (O = N.search(/e/i)) > 0 ? (c < 0 && (c = O), c += +N.slice(O + 1), N = N.substring(0, O)) : c < 0 && (c = N.length)
        } else {
            if (K(n, 2, ee.length, "Base"), n == 10 && de) return E = new x(e), D(E, y + E.e + 1, Q);
            if (N = String(e), o = typeof e == "number") {
                if (e * 0 != 0) return V(E, N, o, n);
                if (E.s = 1 / e < 0 ? (N = N.slice(1), -1) : 1, x.DEBUG && N.replace(/^0\.0*|\./, "").length > 15) throw Error(ke + e)
            } else E.s = N.charCodeAt(0) === 45 ? (N = N.slice(1), -1) : 1;
            for (i = ee.slice(0, n), c = O = 0, h = N.length; O < h; O++)
                if (i.indexOf(p = N.charAt(O)) < 0) {
                    if (p == ".") {
                        if (O > c) {
                            c = h;
                            continue
                        }
                    } else if (!l && (N == N.toUpperCase() && (N = N.toLowerCase()) || N == N.toLowerCase() && (N = N.toUpperCase()))) {
                        l = !0, O = -1, c = 0;
                        continue
                    }
                    return V(E, String(e), o, n)
                }
            o = !1, N = q(N, n, 10, E.s), (c = N.indexOf(".")) > -1 ? N = N.replace(".", "") : c = N.length
        }
        for (O = 0; N.charCodeAt(O) === 48; O++);
        for (h = N.length; N.charCodeAt(--h) === 48;);
        if (N = N.slice(O, ++h)) {
            if (h -= O, o && x.DEBUG && h > 15 && (e > Ce || e !== we(e))) throw Error(ke + E.s * e);
            if ((c = c - O - 1) > se) E.c = E.e = null;
            else if (c < Ne) E.c = [E.e = 0];
            else {
                if (E.e = c, E.c = [], O = (c + 1) % k, c < 0 && (O += k), O < h) {
                    for (O && E.c.push(+N.slice(0, O)), h -= k; O < h;) E.c.push(+N.slice(O, O += k));
                    O = k - (N = N.slice(O)).length
                } else O -= h;
                for (; O--; N += "0");
                E.c.push(+N)
            }
        } else E.c = [E.e = 0]
    }
    x.clone = Ge, x.ROUND_UP = 0, x.ROUND_DOWN = 1, x.ROUND_CEIL = 2, x.ROUND_FLOOR = 3, x.ROUND_HALF_UP = 4, x.ROUND_HALF_DOWN = 5, x.ROUND_HALF_EVEN = 6, x.ROUND_HALF_CEIL = 7, x.ROUND_HALF_FLOOR = 8, x.EUCLID = 9, x.config = x.set = function(e) {
        var n, i;
        if (e != null)
            if (typeof e == "object") {
                if (e.hasOwnProperty(n = "DECIMAL_PLACES") && (i = e[n], K(i, 0, ne, n), y = i), e.hasOwnProperty(n = "ROUNDING_MODE") && (i = e[n], K(i, 0, 8, n), Q = i), e.hasOwnProperty(n = "EXPONENTIAL_AT") && (i = e[n], i && i.pop ? (K(i[0], -ne, 0, n), K(i[1], 0, ne, n), Y = i[0], T = i[1]) : (K(i, -ne, ne, n), Y = -(T = i < 0 ? -i : i))), e.hasOwnProperty(n = "RANGE"))
                    if (i = e[n], i && i.pop) K(i[0], -ne, -1, n), K(i[1], 1, ne, n), Ne = i[0], se = i[1];
                    else if (K(i, -ne, ne, n), i) Ne = -(se = i < 0 ? -i : i);
                else throw Error(ce + n + " cannot be zero: " + i);
                if (e.hasOwnProperty(n = "CRYPTO"))
                    if (i = e[n], i === !!i)
                        if (i)
                            if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) fe = i;
                            else throw fe = !i, Error(ce + "crypto unavailable");
                else fe = i;
                else throw Error(ce + n + " not true or false: " + i);
                if (e.hasOwnProperty(n = "MODULO_MODE") && (i = e[n], K(i, 0, 9, n), Z = i), e.hasOwnProperty(n = "POW_PRECISION") && (i = e[n], K(i, 0, ne, n), Oe = i), e.hasOwnProperty(n = "FORMAT"))
                    if (i = e[n], typeof i == "object") le = i;
                    else throw Error(ce + n + " not an object: " + i);
                if (e.hasOwnProperty(n = "ALPHABET"))
                    if (i = e[n], typeof i == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(i)) de = i.slice(0, 10) == "0123456789", ee = i;
                    else throw Error(ce + n + " invalid: " + i)
            } else throw Error(ce + "Object expected: " + e);
        return {
            DECIMAL_PLACES: y,
            ROUNDING_MODE: Q,
            EXPONENTIAL_AT: [Y, T],
            RANGE: [Ne, se],
            CRYPTO: fe,
            MODULO_MODE: Z,
            POW_PRECISION: Oe,
            FORMAT: le,
            ALPHABET: ee
        }
    }, x.isBigNumber = function(e) {
        if (!e || e._isBigNumber !== !0) return !1;
        if (!x.DEBUG) return !0;
        var n, i, p = e.c,
            l = e.e,
            c = e.s;
        e: if ({}.toString.call(p) == "[object Array]") {
            if ((c === 1 || c === -1) && l >= -ne && l <= ne && l === we(l)) {
                if (p[0] === 0) {
                    if (l === 0 && p.length === 1) return !0;
                    break e
                }
                if (n = (l + 1) % k, n < 1 && (n += k), String(p[0]).length == n) {
                    for (n = 0; n < p.length; n++)
                        if (i = p[n], i < 0 || i >= me || i !== we(i)) break e;
                    if (i !== 0) return !0
                }
            }
        } else
        if (p === null && l === null && (c === null || c === 1 || c === -1)) return !0;
        throw Error(ce + "Invalid BigNumber: " + e)
    }, x.maximum = x.max = function() {
        return Se(arguments, -1)
    }, x.minimum = x.min = function() {
        return Se(arguments, 1)
    }, x.random = function() {
        var e = 9007199254740992,
            n = Math.random() * e & 2097151 ? function() {
                return we(Math.random() * e)
            } : function() {
                return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0)
            };
        return function(i) {
            var p, l, c, O, o, h = 0,
                N = [],
                E = new x(z);
            if (i == null ? i = y : K(i, 0, ne), O = Le(i / k), fe)
                if (crypto.getRandomValues) {
                    for (p = crypto.getRandomValues(new Uint32Array(O *= 2)); h < O;) o = p[h] * 131072 + (p[h + 1] >>> 11), o >= 9e15 ? (l = crypto.getRandomValues(new Uint32Array(2)), p[h] = l[0], p[h + 1] = l[1]) : (N.push(o % 1e14), h += 2);
                    h = O / 2
                } else if (crypto.randomBytes) {
                for (p = crypto.randomBytes(O *= 7); h < O;) o = (p[h] & 31) * 281474976710656 + p[h + 1] * 1099511627776 + p[h + 2] * 4294967296 + p[h + 3] * 16777216 + (p[h + 4] << 16) + (p[h + 5] << 8) + p[h + 6], o >= 9e15 ? crypto.randomBytes(7).copy(p, h) : (N.push(o % 1e14), h += 7);
                h = O / 7
            } else throw fe = !1, Error(ce + "crypto unavailable");
            if (!fe)
                for (; h < O;) o = n(), o < 9e15 && (N[h++] = o % 1e14);
            for (O = N[--h], i %= k, O && i && (o = Ue[k - i], N[h] = we(O / o) * o); N[h] === 0; N.pop(), h--);
            if (h < 0) N = [c = 0];
            else {
                for (c = -1; N[0] === 0; N.splice(0, 1), c -= k);
                for (h = 1, o = N[0]; o >= 10; o /= 10, h++);
                h < k && (c -= k - h)
            }
            return E.e = c, E.c = N, E
        }
    }(), x.sum = function() {
        for (var e = 1, n = arguments, i = new x(n[0]); e < n.length;) i = i.plus(n[e++]);
        return i
    }, q = function() {
        var e = "0123456789";

        function n(i, p, l, c) {
            for (var O, o = [0], h, N = 0, E = i.length; N < E;) {
                for (h = o.length; h--; o[h] *= p);
                for (o[0] += c.indexOf(i.charAt(N++)), O = 0; O < o.length; O++) o[O] > l - 1 && (o[O + 1] == null && (o[O + 1] = 0), o[O + 1] += o[O] / l | 0, o[O] %= l)
            }
            return o.reverse()
        }
        return function(i, p, l, c, O) {
            var o, h, N, E, _, M, I, G, J = i.indexOf("."),
                v = y,
                F = Q;
            for (J >= 0 && (E = Oe, Oe = 0, i = i.replace(".", ""), G = new x(p), M = G.pow(i.length - J), Oe = E, G.c = n(_e(ge(M.c), M.e, "0"), 10, l, e), G.e = G.c.length), I = n(i, p, l, O ? (o = ee, e) : (o = e, ee)), N = E = I.length; I[--E] == 0; I.pop());
            if (!I[0]) return o.charAt(0);
            if (J < 0 ? --N : (M.c = I, M.e = N, M.s = c, M = U(M, G, v, F, l), I = M.c, _ = M.r, N = M.e), h = N + v + 1, J = I[h], E = l / 2, _ = _ || h < 0 || I[h + 1] != null, _ = F < 4 ? (J != null || _) && (F == 0 || F == (M.s < 0 ? 3 : 2)) : J > E || J == E && (F == 4 || _ || F == 6 && I[h - 1] & 1 || F == (M.s < 0 ? 8 : 7)), h < 1 || !I[0]) i = _ ? _e(o.charAt(1), -v, o.charAt(0)) : o.charAt(0);
            else {
                if (I.length = h, _)
                    for (--l; ++I[--h] > l;) I[h] = 0, h || (++N, I = [1].concat(I));
                for (E = I.length; !I[--E];);
                for (J = 0, i = ""; J <= E; i += o.charAt(I[J++]));
                i = _e(i, N, o.charAt(0))
            }
            return i
        }
    }(), U = function() {
        function e(p, l, c) {
            var O, o, h, N, E = 0,
                _ = p.length,
                M = l % ve,
                I = l / ve | 0;
            for (p = p.slice(); _--;) h = p[_] % ve, N = p[_] / ve | 0, O = I * h + N * M, o = M * h + O % ve * ve + E, E = (o / c | 0) + (O / ve | 0) + I * N, p[_] = o % c;
            return E && (p = [E].concat(p)), p
        }

        function n(p, l, c, O) {
            var o, h;
            if (c != O) h = c > O ? 1 : -1;
            else
                for (o = h = 0; o < c; o++)
                    if (p[o] != l[o]) {
                        h = p[o] > l[o] ? 1 : -1;
                        break
                    } return h
        }

        function i(p, l, c, O) {
            for (var o = 0; c--;) p[c] -= o, o = p[c] < l[c] ? 1 : 0, p[c] = o * O + p[c] - l[c];
            for (; !p[0] && p.length > 1; p.splice(0, 1));
        }
        return function(p, l, c, O, o) {
            var h, N, E, _, M, I, G, J, v, F, X, re, te, he, r, t, f, w = p.s == l.s ? 1 : -1,
                s = p.c,
                a = l.c;
            if (!s || !s[0] || !a || !a[0]) return new x(!p.s || !l.s || (s ? a && s[0] == a[0] : !a) ? NaN : s && s[0] == 0 || !a ? w * 0 : w / 0);
            for (J = new x(w), v = J.c = [], N = p.e - l.e, w = c + N + 1, o || (o = me, N = Ee(p.e / k) - Ee(l.e / k), w = w / k | 0), E = 0; a[E] == (s[E] || 0); E++);
            if (a[E] > (s[E] || 0) && N--, w < 0) v.push(1), _ = !0;
            else {
                for (he = s.length, t = a.length, E = 0, w += 2, M = we(o / (a[0] + 1)), M > 1 && (a = e(a, M, o), s = e(s, M, o), t = a.length, he = s.length), te = t, F = s.slice(0, t), X = F.length; X < t; F[X++] = 0);
                f = a.slice(), f = [0].concat(f), r = a[0], a[1] >= o / 2 && r++;
                do {
                    if (M = 0, h = n(a, F, t, X), h < 0) {
                        if (re = F[0], t != X && (re = re * o + (F[1] || 0)), M = we(re / r), M > 1)
                            for (M >= o && (M = o - 1), I = e(a, M, o), G = I.length, X = F.length; n(I, F, G, X) == 1;) M--, i(I, t < G ? f : a, G, o), G = I.length, h = 1;
                        else M == 0 && (h = M = 1), I = a.slice(), G = I.length;
                        if (G < X && (I = [0].concat(I)), i(F, I, X, o), X = F.length, h == -1)
                            for (; n(a, F, t, X) < 1;) M++, i(F, t < X ? f : a, X, o), X = F.length
                    } else h === 0 && (M++, F = [0]);
                    v[E++] = M, F[0] ? F[X++] = s[te] || 0 : (F = [s[te]], X = 1)
                } while ((te++ < he || F[0] != null) && w--);
                _ = F[0] != null, v[0] || v.splice(0, 1)
            }
            if (o == me) {
                for (E = 1, w = v[0]; w >= 10; w /= 10, E++);
                D(J, c + (J.e = E + N * k - 1) + 1, O, _)
            } else J.e = N, J.r = +_;
            return J
        }
    }();

    function xe(e, n, i, p) {
        var l, c, O, o, h;
        if (i == null ? i = Q : K(i, 0, 8), !e.c) return e.toString();
        if (l = e.c[0], O = e.e, n == null) h = ge(e.c), h = p == 1 || p == 2 && (O <= Y || O >= T) ? Ie(h, O) : _e(h, O, "0");
        else if (e = D(new x(e), n, i), c = e.e, h = ge(e.c), o = h.length, p == 1 || p == 2 && (n <= c || c <= Y)) {
            for (; o < n; h += "0", o++);
            h = Ie(h, c)
        } else if (n -= O, h = _e(h, c, "0"), c + 1 > o) {
            if (--n > 0)
                for (h += "."; n--; h += "0");
        } else if (n += c - o, n > 0)
            for (c + 1 == o && (h += "."); n--; h += "0");
        return e.s < 0 && l ? "-" + h : h
    }

    function Se(e, n) {
        for (var i, p, l = 1, c = new x(e[0]); l < e.length; l++) p = new x(e[l]), (!p.s || (i = Be(c, p)) === n || i === 0 && c.s === n) && (c = p);
        return c
    }

    function ae(e, n, i) {
        for (var p = 1, l = n.length; !n[--l]; n.pop());
        for (l = n[0]; l >= 10; l /= 10, p++);
        return (i = p + i * k - 1) > se ? e.c = e.e = null : i < Ne ? e.c = [e.e = 0] : (e.e = i, e.c = n), e
    }
    V = function() {
        var e = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
            n = /^([^.]+)\.$/,
            i = /^\.([^.]+)$/,
            p = /^-?(Infinity|NaN)$/,
            l = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
        return function(c, O, o, h) {
            var N, E = o ? O : O.replace(l, "");
            if (p.test(E)) c.s = isNaN(E) ? null : E < 0 ? -1 : 1;
            else {
                if (!o && (E = E.replace(e, function(_, M, I) {
                        return N = (I = I.toLowerCase()) == "x" ? 16 : I == "b" ? 2 : 8, !h || h == N ? M : _
                    }), h && (N = h, E = E.replace(n, "$1").replace(i, "0.$1")), O != E)) return new x(E, N);
                if (x.DEBUG) throw Error(ce + "Not a" + (h ? " base " + h : "") + " number: " + O);
                c.s = null
            }
            c.c = c.e = null
        }
    }();

    function D(e, n, i, p) {
        var l, c, O, o, h, N, E, _ = e.c,
            M = Ue;
        if (_) {
            e: {
                for (l = 1, o = _[0]; o >= 10; o /= 10, l++);
                if (c = n - l, c < 0) c += k,
                O = n,
                h = _[N = 0],
                E = we(h / M[l - O - 1] % 10);
                else if (N = Le((c + 1) / k), N >= _.length)
                    if (p) {
                        for (; _.length <= N; _.push(0));
                        h = E = 0, l = 1, c %= k, O = c - k + 1
                    } else break e;
                else {
                    for (h = o = _[N], l = 1; o >= 10; o /= 10, l++);
                    c %= k, O = c - k + l, E = O < 0 ? 0 : we(h / M[l - O - 1] % 10)
                }
                if (p = p || n < 0 || _[N + 1] != null || (O < 0 ? h : h % M[l - O - 1]), p = i < 4 ? (E || p) && (i == 0 || i == (e.s < 0 ? 3 : 2)) : E > 5 || E == 5 && (i == 4 || p || i == 6 && (c > 0 ? O > 0 ? h / M[l - O] : 0 : _[N - 1]) % 10 & 1 || i == (e.s < 0 ? 8 : 7)), n < 1 || !_[0]) return _.length = 0, p ? (n -= e.e + 1, _[0] = M[(k - n % k) % k], e.e = -n || 0) : _[0] = e.e = 0, e;
                if (c == 0 ? (_.length = N, o = 1, N--) : (_.length = N + 1, o = M[k - c], _[N] = O > 0 ? we(h / M[l - O] % M[O]) * o : 0), p)
                    for (;;)
                        if (N == 0) {
                            for (c = 1, O = _[0]; O >= 10; O /= 10, c++);
                            for (O = _[0] += o, o = 1; O >= 10; O /= 10, o++);
                            c != o && (e.e++, _[0] == me && (_[0] = 1));
                            break
                        } else {
                            if (_[N] += o, _[N] != me) break;
                            _[N--] = 0, o = 1
                        }
                for (c = _.length; _[--c] === 0; _.pop());
            }
            e.e > se ? e.c = e.e = null : e.e < Ne && (e.c = [e.e = 0])
        }
        return e
    }

    function L(e) {
        var n, i = e.e;
        return i === null ? e.toString() : (n = ge(e.c), n = i <= Y || i >= T ? Ie(n, i) : _e(n, i, "0"), e.s < 0 ? "-" + n : n)
    }
    return B.absoluteValue = B.abs = function() {
        var e = new x(this);
        return e.s < 0 && (e.s = 1), e
    }, B.comparedTo = function(e, n) {
        return Be(this, new x(e, n))
    }, B.decimalPlaces = B.dp = function(e, n) {
        var i, p, l, c = this;
        if (e != null) return K(e, 0, ne), n == null ? n = Q : K(n, 0, 8), D(new x(c), e + c.e + 1, n);
        if (!(i = c.c)) return null;
        if (p = ((l = i.length - 1) - Ee(this.e / k)) * k, l = i[l])
            for (; l % 10 == 0; l /= 10, p--);
        return p < 0 && (p = 0), p
    }, B.dividedBy = B.div = function(e, n) {
        return U(this, new x(e, n), y, Q)
    }, B.dividedToIntegerBy = B.idiv = function(e, n) {
        return U(this, new x(e, n), 0, 1)
    }, B.exponentiatedBy = B.pow = function(e, n) {
        var i, p, l, c, O, o, h, N, E, _ = this;
        if (e = new x(e), e.c && !e.isInteger()) throw Error(ce + "Exponent not an integer: " + L(e));
        if (n != null && (n = new x(n)), o = e.e > 14, !_.c || !_.c[0] || _.c[0] == 1 && !_.e && _.c.length == 1 || !e.c || !e.c[0]) return E = new x(Math.pow(+L(_), o ? e.s * (2 - Te(e)) : +L(e))), n ? E.mod(n) : E;
        if (h = e.s < 0, n) {
            if (n.c ? !n.c[0] : !n.s) return new x(NaN);
            p = !h && _.isInteger() && n.isInteger(), p && (_ = _.mod(n))
        } else {
            if (e.e > 9 && (_.e > 0 || _.e < -1 || (_.e == 0 ? _.c[0] > 1 || o && _.c[1] >= 24e7 : _.c[0] < 8e13 || o && _.c[0] <= 9999975e7))) return c = _.s < 0 && Te(e) ? -0 : 0, _.e > -1 && (c = 1 / c), new x(h ? 1 / c : c);
            Oe && (c = Le(Oe / k + 2))
        }
        for (o ? (i = new x(.5), h && (e.s = 1), N = Te(e)) : (l = Math.abs(+L(e)), N = l % 2), E = new x(z);;) {
            if (N) {
                if (E = E.times(_), !E.c) break;
                c ? E.c.length > c && (E.c.length = c) : p && (E = E.mod(n))
            }
            if (l) {
                if (l = we(l / 2), l === 0) break;
                N = l % 2
            } else if (e = e.times(i), D(e, e.e + 1, 1), e.e > 14) N = Te(e);
            else {
                if (l = +L(e), l === 0) break;
                N = l % 2
            }
            _ = _.times(_), c ? _.c && _.c.length > c && (_.c.length = c) : p && (_ = _.mod(n))
        }
        return p ? E : (h && (E = z.div(E)), n ? E.mod(n) : c ? D(E, Oe, Q, O) : E)
    }, B.integerValue = function(e) {
        var n = new x(this);
        return e == null ? e = Q : K(e, 0, 8), D(n, n.e + 1, e)
    }, B.isEqualTo = B.eq = function(e, n) {
        return Be(this, new x(e, n)) === 0
    }, B.isFinite = function() {
        return !!this.c
    }, B.isGreaterThan = B.gt = function(e, n) {
        return Be(this, new x(e, n)) > 0
    }, B.isGreaterThanOrEqualTo = B.gte = function(e, n) {
        return (n = Be(this, new x(e, n))) === 1 || n === 0
    }, B.isInteger = function() {
        return !!this.c && Ee(this.e / k) > this.c.length - 2
    }, B.isLessThan = B.lt = function(e, n) {
        return Be(this, new x(e, n)) < 0
    }, B.isLessThanOrEqualTo = B.lte = function(e, n) {
        return (n = Be(this, new x(e, n))) === -1 || n === 0
    }, B.isNaN = function() {
        return !this.s
    }, B.isNegative = function() {
        return this.s < 0
    }, B.isPositive = function() {
        return this.s > 0
    }, B.isZero = function() {
        return !!this.c && this.c[0] == 0
    }, B.minus = function(e, n) {
        var i, p, l, c, O = this,
            o = O.s;
        if (e = new x(e, n), n = e.s, !o || !n) return new x(NaN);
        if (o != n) return e.s = -n, O.plus(e);
        var h = O.e / k,
            N = e.e / k,
            E = O.c,
            _ = e.c;
        if (!h || !N) {
            if (!E || !_) return E ? (e.s = -n, e) : new x(_ ? O : NaN);
            if (!E[0] || !_[0]) return _[0] ? (e.s = -n, e) : new x(E[0] ? O : Q == 3 ? -0 : 0)
        }
        if (h = Ee(h), N = Ee(N), E = E.slice(), o = h - N) {
            for ((c = o < 0) ? (o = -o, l = E) : (N = h, l = _), l.reverse(), n = o; n--; l.push(0));
            l.reverse()
        } else
            for (p = (c = (o = E.length) < (n = _.length)) ? o : n, o = n = 0; n < p; n++)
                if (E[n] != _[n]) {
                    c = E[n] < _[n];
                    break
                } if (c && (l = E, E = _, _ = l, e.s = -e.s), n = (p = _.length) - (i = E.length), n > 0)
            for (; n--; E[i++] = 0);
        for (n = me - 1; p > o;) {
            if (E[--p] < _[p]) {
                for (i = p; i && !E[--i]; E[i] = n);
                --E[i], E[p] += me
            }
            E[p] -= _[p]
        }
        for (; E[0] == 0; E.splice(0, 1), --N);
        return E[0] ? ae(e, E, N) : (e.s = Q == 3 ? -1 : 1, e.c = [e.e = 0], e)
    }, B.modulo = B.mod = function(e, n) {
        var i, p, l = this;
        return e = new x(e, n), !l.c || !e.s || e.c && !e.c[0] ? new x(NaN) : !e.c || l.c && !l.c[0] ? new x(l) : (Z == 9 ? (p = e.s, e.s = 1, i = U(l, e, 0, 3), e.s = p, i.s *= p) : i = U(l, e, 0, Z), e = l.minus(i.times(e)), !e.c[0] && Z == 1 && (e.s = l.s), e)
    }, B.multipliedBy = B.times = function(e, n) {
        var i, p, l, c, O, o, h, N, E, _, M, I, G, J, v, F = this,
            X = F.c,
            re = (e = new x(e, n)).c;
        if (!X || !re || !X[0] || !re[0]) return !F.s || !e.s || X && !X[0] && !re || re && !re[0] && !X ? e.c = e.e = e.s = null : (e.s *= F.s, !X || !re ? e.c = e.e = null : (e.c = [0], e.e = 0)), e;
        for (p = Ee(F.e / k) + Ee(e.e / k), e.s *= F.s, h = X.length, _ = re.length, h < _ && (G = X, X = re, re = G, l = h, h = _, _ = l), l = h + _, G = []; l--; G.push(0));
        for (J = me, v = ve, l = _; --l >= 0;) {
            for (i = 0, M = re[l] % v, I = re[l] / v | 0, O = h, c = l + O; c > l;) N = X[--O] % v, E = X[O] / v | 0, o = I * N + E * M, N = M * N + o % v * v + G[c] + i, i = (N / J | 0) + (o / v | 0) + I * E, G[c--] = N % J;
            G[c] = i
        }
        return i ? ++p : G.splice(0, 1), ae(e, G, p)
    }, B.negated = function() {
        var e = new x(this);
        return e.s = -e.s || null, e
    }, B.plus = function(e, n) {
        var i, p = this,
            l = p.s;
        if (e = new x(e, n), n = e.s, !l || !n) return new x(NaN);
        if (l != n) return e.s = -n, p.minus(e);
        var c = p.e / k,
            O = e.e / k,
            o = p.c,
            h = e.c;
        if (!c || !O) {
            if (!o || !h) return new x(l / 0);
            if (!o[0] || !h[0]) return h[0] ? e : new x(o[0] ? p : l * 0)
        }
        if (c = Ee(c), O = Ee(O), o = o.slice(), l = c - O) {
            for (l > 0 ? (O = c, i = h) : (l = -l, i = o), i.reverse(); l--; i.push(0));
            i.reverse()
        }
        for (l = o.length, n = h.length, l - n < 0 && (i = h, h = o, o = i, n = l), l = 0; n;) l = (o[--n] = o[n] + h[n] + l) / me | 0, o[n] = me === o[n] ? 0 : o[n] % me;
        return l && (o = [l].concat(o), ++O), ae(e, o, O)
    }, B.precision = B.sd = function(e, n) {
        var i, p, l, c = this;
        if (e != null && e !== !!e) return K(e, 1, ne), n == null ? n = Q : K(n, 0, 8), D(new x(c), e, n);
        if (!(i = c.c)) return null;
        if (l = i.length - 1, p = l * k + 1, l = i[l]) {
            for (; l % 10 == 0; l /= 10, p--);
            for (l = i[0]; l >= 10; l /= 10, p++);
        }
        return e && c.e + 1 > p && (p = c.e + 1), p
    }, B.shiftedBy = function(e) {
        return K(e, -Ce, Ce), this.times("1e" + e)
    }, B.squareRoot = B.sqrt = function() {
        var e, n, i, p, l, c = this,
            O = c.c,
            o = c.s,
            h = c.e,
            N = y + 4,
            E = new x("0.5");
        if (o !== 1 || !O || !O[0]) return new x(!o || o < 0 && (!O || O[0]) ? NaN : O ? c : 1 / 0);
        if (o = Math.sqrt(+L(c)), o == 0 || o == 1 / 0 ? (n = ge(O), (n.length + h) % 2 == 0 && (n += "0"), o = Math.sqrt(+n), h = Ee((h + 1) / 2) - (h < 0 || h % 2), o == 1 / 0 ? n = "5e" + h : (n = o.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + h), i = new x(n)) : i = new x(o + ""), i.c[0]) {
            for (h = i.e, o = h + N, o < 3 && (o = 0);;)
                if (l = i, i = E.times(l.plus(U(c, l, N, 1))), ge(l.c).slice(0, o) === (n = ge(i.c)).slice(0, o))
                    if (i.e < h && --o, n = n.slice(o - 3, o + 1), n == "9999" || !p && n == "4999") {
                        if (!p && (D(l, l.e + y + 2, 0), l.times(l).eq(c))) {
                            i = l;
                            break
                        }
                        N += 4, o += 4, p = 1
                    } else {
                        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (D(i, i.e + y + 2, 1), e = !i.times(i).eq(c));
                        break
                    }
        }
        return D(i, i.e + y + 1, Q, e)
    }, B.toExponential = function(e, n) {
        return e != null && (K(e, 0, ne), e++), xe(this, e, n, 1)
    }, B.toFixed = function(e, n) {
        return e != null && (K(e, 0, ne), e = e + this.e + 1), xe(this, e, n)
    }, B.toFormat = function(e, n, i) {
        var p, l = this;
        if (i == null) e != null && n && typeof n == "object" ? (i = n, n = null) : e && typeof e == "object" ? (i = e, e = n = null) : i = le;
        else if (typeof i != "object") throw Error(ce + "Argument not an object: " + i);
        if (p = l.toFixed(e, n), l.c) {
            var c, O = p.split("."),
                o = +i.groupSize,
                h = +i.secondaryGroupSize,
                N = i.groupSeparator || "",
                E = O[0],
                _ = O[1],
                M = l.s < 0,
                I = M ? E.slice(1) : E,
                G = I.length;
            if (h && (c = o, o = h, h = c, G -= c), o > 0 && G > 0) {
                for (c = G % o || o, E = I.substr(0, c); c < G; c += o) E += N + I.substr(c, o);
                h > 0 && (E += N + I.slice(c)), M && (E = "-" + E)
            }
            p = _ ? E + (i.decimalSeparator || "") + ((h = +i.fractionGroupSize) ? _.replace(new RegExp("\\d{" + h + "}\\B", "g"), "$&" + (i.fractionGroupSeparator || "")) : _) : E
        }
        return (i.prefix || "") + p + (i.suffix || "")
    }, B.toFraction = function(e) {
        var n, i, p, l, c, O, o, h, N, E, _, M, I = this,
            G = I.c;
        if (e != null && (o = new x(e), !o.isInteger() && (o.c || o.s !== 1) || o.lt(z))) throw Error(ce + "Argument " + (o.isInteger() ? "out of range: " : "not an integer: ") + L(o));
        if (!G) return new x(I);
        for (n = new x(z), N = i = new x(z), p = h = new x(z), M = ge(G), c = n.e = M.length - I.e - 1, n.c[0] = Ue[(O = c % k) < 0 ? k + O : O], e = !e || o.comparedTo(n) > 0 ? c > 0 ? n : N : o, O = se, se = 1 / 0, o = new x(M), h.c[0] = 0; E = U(o, n, 0, 1), l = i.plus(E.times(p)), l.comparedTo(e) != 1;) i = p, p = l, N = h.plus(E.times(l = N)), h = l, n = o.minus(E.times(l = n)), o = l;
        return l = U(e.minus(i), p, 0, 1), h = h.plus(l.times(N)), i = i.plus(l.times(p)), h.s = N.s = I.s, c = c * 2, _ = U(N, p, c, Q).minus(I).abs().comparedTo(U(h, i, c, Q).minus(I).abs()) < 1 ? [N, p] : [h, i], se = O, _
    }, B.toNumber = function() {
        return +L(this)
    }, B.toPrecision = function(e, n) {
        return e != null && K(e, 1, ne), xe(this, e, n, 2)
    }, B.toString = function(e) {
        var n, i = this,
            p = i.s,
            l = i.e;
        return l === null ? p ? (n = "Infinity", p < 0 && (n = "-" + n)) : n = "NaN" : (e == null ? n = l <= Y || l >= T ? Ie(ge(i.c), l) : _e(ge(i.c), l, "0") : e === 10 && de ? (i = D(new x(i), y + l + 1, Q), n = _e(ge(i.c), i.e, "0")) : (K(e, 2, ee.length, "Base"), n = q(_e(ge(i.c), l, "0"), 10, e, p, !0)), p < 0 && i.c[0] && (n = "-" + n)), n
    }, B.valueOf = B.toJSON = function() {
        return L(this)
    }, B._isBigNumber = !0, B[Symbol.toStringTag] = "BigNumber", B[Symbol.for("nodejs.util.inspect.custom")] = B.valueOf, R != null && x.set(R), x
}

function Ee(R) {
    var U = R | 0;
    return R > 0 || R === U ? U : U - 1
}

function ge(R) {
    for (var U, q, V = 1, B = R.length, z = R[0] + ""; V < B;) {
        for (U = R[V++] + "", q = k - U.length; q--; U = "0" + U);
        z += U
    }
    for (B = z.length; z.charCodeAt(--B) === 48;);
    return z.slice(0, B + 1 || 1)
}

function Be(R, U) {
    var q, V, B = R.c,
        z = U.c,
        y = R.s,
        Q = U.s,
        Y = R.e,
        T = U.e;
    if (!y || !Q) return null;
    if (q = B && !B[0], V = z && !z[0], q || V) return q ? V ? 0 : -Q : y;
    if (y != Q) return y;
    if (q = y < 0, V = Y == T, !B || !z) return V ? 0 : !B ^ q ? 1 : -1;
    if (!V) return Y > T ^ q ? 1 : -1;
    for (Q = (Y = B.length) < (T = z.length) ? Y : T, y = 0; y < Q; y++)
        if (B[y] != z[y]) return B[y] > z[y] ^ q ? 1 : -1;
    return Y == T ? 0 : Y > T ^ q ? 1 : -1
}

function K(R, U, q, V) {
    if (R < U || R > q || R !== we(R)) throw Error(ce + (V || "Argument") + (typeof R == "number" ? R < U || R > q ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(R))
}

function Te(R) {
    var U = R.c.length - 1;
    return Ee(R.e / k) == U && R.c[U] % 2 != 0
}

function Ie(R, U) {
    return (R.length > 1 ? R.charAt(0) + "." + R.slice(1) : R) + (U < 0 ? "e" : "e+") + U
}

function _e(R, U, q) {
    var V, B;
    if (U < 0) {
        for (B = q + "."; ++U; B += q);
        R = B + R
    } else if (V = R.length, ++U > V) {
        for (B = q, U -= V; --U; B += q);
        R += B
    } else U < V && (R = R.slice(0, U) + "." + R.slice(U));
    return R
}
var He = Ge(),
    ye = {
        exports: {}
    };
(function(R) {
    (function(U) {
        var q, V = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
            B = Math.ceil,
            z = Math.floor,
            y = "[BigNumber Error] ",
            Q = y + "Number primitive has more than 15 significant digits: ",
            Y = 1e14,
            T = 14,
            Ne = 9007199254740991,
            se = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
            fe = 1e7,
            Z = 1e9;

        function Oe(D) {
            var L, e, n, i = v.prototype = {
                    constructor: v,
                    toString: null,
                    valueOf: null
                },
                p = new v(1),
                l = 20,
                c = 4,
                O = -7,
                o = 21,
                h = -1e7,
                N = 1e7,
                E = !1,
                _ = 1,
                M = 0,
                I = {
                    prefix: "",
                    groupSize: 3,
                    secondaryGroupSize: 0,
                    groupSeparator: ",",
                    decimalSeparator: ".",
                    fractionGroupSize: 0,
                    fractionGroupSeparator: " ",
                    suffix: ""
                },
                G = "0123456789abcdefghijklmnopqrstuvwxyz",
                J = !0;

            function v(r, t) {
                var f, w, s, a, A, u, g, m, d = this;
                if (!(d instanceof v)) return new v(r, t);
                if (t == null) {
                    if (r && r._isBigNumber === !0) {
                        d.s = r.s, !r.c || r.e > N ? d.c = d.e = null : r.e < h ? d.c = [d.e = 0] : (d.e = r.e, d.c = r.c.slice());
                        return
                    }
                    if ((u = typeof r == "number") && r * 0 == 0) {
                        if (d.s = 1 / r < 0 ? (r = -r, -1) : 1, r === ~~r) {
                            for (a = 0, A = r; A >= 10; A /= 10, a++);
                            a > N ? d.c = d.e = null : (d.e = a, d.c = [r]);
                            return
                        }
                        m = String(r)
                    } else {
                        if (!V.test(m = String(r))) return n(d, m, u);
                        d.s = m.charCodeAt(0) == 45 ? (m = m.slice(1), -1) : 1
                    }(a = m.indexOf(".")) > -1 && (m = m.replace(".", "")), (A = m.search(/e/i)) > 0 ? (a < 0 && (a = A), a += +m.slice(A + 1), m = m.substring(0, A)) : a < 0 && (a = m.length)
                } else {
                    if (x(t, 2, G.length, "Base"), t == 10 && J) return d = new v(r), te(d, l + d.e + 1, c);
                    if (m = String(r), u = typeof r == "number") {
                        if (r * 0 != 0) return n(d, m, u, t);
                        if (d.s = 1 / r < 0 ? (m = m.slice(1), -1) : 1, v.DEBUG && m.replace(/^0\.0*|\./, "").length > 15) throw Error(Q + r)
                    } else d.s = m.charCodeAt(0) === 45 ? (m = m.slice(1), -1) : 1;
                    for (f = G.slice(0, t), a = A = 0, g = m.length; A < g; A++)
                        if (f.indexOf(w = m.charAt(A)) < 0) {
                            if (w == ".") {
                                if (A > a) {
                                    a = g;
                                    continue
                                }
                            } else if (!s && (m == m.toUpperCase() && (m = m.toLowerCase()) || m == m.toLowerCase() && (m = m.toUpperCase()))) {
                                s = !0, A = -1, a = 0;
                                continue
                            }
                            return n(d, String(r), u, t)
                        }
                    u = !1, m = e(m, t, 10, d.s), (a = m.indexOf(".")) > -1 ? m = m.replace(".", "") : a = m.length
                }
                for (A = 0; m.charCodeAt(A) === 48; A++);
                for (g = m.length; m.charCodeAt(--g) === 48;);
                if (m = m.slice(A, ++g)) {
                    if (g -= A, u && v.DEBUG && g > 15 && (r > Ne || r !== z(r))) throw Error(Q + d.s * r);
                    if ((a = a - A - 1) > N) d.c = d.e = null;
                    else if (a < h) d.c = [d.e = 0];
                    else {
                        if (d.e = a, d.c = [], A = (a + 1) % T, a < 0 && (A += T), A < g) {
                            for (A && d.c.push(+m.slice(0, A)), g -= T; A < g;) d.c.push(+m.slice(A, A += T));
                            A = T - (m = m.slice(A)).length
                        } else A -= g;
                        for (; A--; m += "0");
                        d.c.push(+m)
                    }
                } else d.c = [d.e = 0]
            }
            v.clone = Oe, v.ROUND_UP = 0, v.ROUND_DOWN = 1, v.ROUND_CEIL = 2, v.ROUND_FLOOR = 3, v.ROUND_HALF_UP = 4, v.ROUND_HALF_DOWN = 5, v.ROUND_HALF_EVEN = 6, v.ROUND_HALF_CEIL = 7, v.ROUND_HALF_FLOOR = 8, v.EUCLID = 9, v.config = v.set = function(r) {
                var t, f;
                if (r != null)
                    if (typeof r == "object") {
                        if (r.hasOwnProperty(t = "DECIMAL_PLACES") && (f = r[t], x(f, 0, Z, t), l = f), r.hasOwnProperty(t = "ROUNDING_MODE") && (f = r[t], x(f, 0, 8, t), c = f), r.hasOwnProperty(t = "EXPONENTIAL_AT") && (f = r[t], f && f.pop ? (x(f[0], -Z, 0, t), x(f[1], 0, Z, t), O = f[0], o = f[1]) : (x(f, -Z, Z, t), O = -(o = f < 0 ? -f : f))), r.hasOwnProperty(t = "RANGE"))
                            if (f = r[t], f && f.pop) x(f[0], -Z, -1, t), x(f[1], 1, Z, t), h = f[0], N = f[1];
                            else if (x(f, -Z, Z, t), f) h = -(N = f < 0 ? -f : f);
                        else throw Error(y + t + " cannot be zero: " + f);
                        if (r.hasOwnProperty(t = "CRYPTO"))
                            if (f = r[t], f === !!f)
                                if (f)
                                    if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) E = f;
                                    else throw E = !f, Error(y + "crypto unavailable");
                        else E = f;
                        else throw Error(y + t + " not true or false: " + f);
                        if (r.hasOwnProperty(t = "MODULO_MODE") && (f = r[t], x(f, 0, 9, t), _ = f), r.hasOwnProperty(t = "POW_PRECISION") && (f = r[t], x(f, 0, Z, t), M = f), r.hasOwnProperty(t = "FORMAT"))
                            if (f = r[t], typeof f == "object") I = f;
                            else throw Error(y + t + " not an object: " + f);
                        if (r.hasOwnProperty(t = "ALPHABET"))
                            if (f = r[t], typeof f == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(f)) J = f.slice(0, 10) == "0123456789", G = f;
                            else throw Error(y + t + " invalid: " + f)
                    } else throw Error(y + "Object expected: " + r);
                return {
                    DECIMAL_PLACES: l,
                    ROUNDING_MODE: c,
                    EXPONENTIAL_AT: [O, o],
                    RANGE: [h, N],
                    CRYPTO: E,
                    MODULO_MODE: _,
                    POW_PRECISION: M,
                    FORMAT: I,
                    ALPHABET: G
                }
            }, v.isBigNumber = function(r) {
                if (!r || r._isBigNumber !== !0) return !1;
                if (!v.DEBUG) return !0;
                var t, f, w = r.c,
                    s = r.e,
                    a = r.s;
                e: if ({}.toString.call(w) == "[object Array]") {
                    if ((a === 1 || a === -1) && s >= -Z && s <= Z && s === z(s)) {
                        if (w[0] === 0) {
                            if (s === 0 && w.length === 1) return !0;
                            break e
                        }
                        if (t = (s + 1) % T, t < 1 && (t += T), String(w[0]).length == t) {
                            for (t = 0; t < w.length; t++)
                                if (f = w[t], f < 0 || f >= Y || f !== z(f)) break e;
                            if (f !== 0) return !0
                        }
                    }
                } else
                if (w === null && s === null && (a === null || a === 1 || a === -1)) return !0;
                throw Error(y + "Invalid BigNumber: " + r)
            }, v.maximum = v.max = function() {
                return X(arguments, -1)
            }, v.minimum = v.min = function() {
                return X(arguments, 1)
            }, v.random = function() {
                var r = 9007199254740992,
                    t = Math.random() * r & 2097151 ? function() {
                        return z(Math.random() * r)
                    } : function() {
                        return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0)
                    };
                return function(f) {
                    var w, s, a, A, u, g = 0,
                        m = [],
                        d = new v(p);
                    if (f == null ? f = l : x(f, 0, Z), A = B(f / T), E)
                        if (crypto.getRandomValues) {
                            for (w = crypto.getRandomValues(new Uint32Array(A *= 2)); g < A;) u = w[g] * 131072 + (w[g + 1] >>> 11), u >= 9e15 ? (s = crypto.getRandomValues(new Uint32Array(2)), w[g] = s[0], w[g + 1] = s[1]) : (m.push(u % 1e14), g += 2);
                            g = A / 2
                        } else if (crypto.randomBytes) {
                        for (w = crypto.randomBytes(A *= 7); g < A;) u = (w[g] & 31) * 281474976710656 + w[g + 1] * 1099511627776 + w[g + 2] * 4294967296 + w[g + 3] * 16777216 + (w[g + 4] << 16) + (w[g + 5] << 8) + w[g + 6], u >= 9e15 ? crypto.randomBytes(7).copy(w, g) : (m.push(u % 1e14), g += 7);
                        g = A / 7
                    } else throw E = !1, Error(y + "crypto unavailable");
                    if (!E)
                        for (; g < A;) u = t(), u < 9e15 && (m[g++] = u % 1e14);
                    for (A = m[--g], f %= T, A && f && (u = se[T - f], m[g] = z(A / u) * u); m[g] === 0; m.pop(), g--);
                    if (g < 0) m = [a = 0];
                    else {
                        for (a = -1; m[0] === 0; m.splice(0, 1), a -= T);
                        for (g = 1, u = m[0]; u >= 10; u /= 10, g++);
                        g < T && (a -= T - g)
                    }
                    return d.e = a, d.c = m, d
                }
            }(), v.sum = function() {
                for (var r = 1, t = arguments, f = new v(t[0]); r < t.length;) f = f.plus(t[r++]);
                return f
            }, e = function() {
                var r = "0123456789";

                function t(f, w, s, a) {
                    for (var A, u = [0], g, m = 0, d = f.length; m < d;) {
                        for (g = u.length; g--; u[g] *= w);
                        for (u[0] += a.indexOf(f.charAt(m++)), A = 0; A < u.length; A++) u[A] > s - 1 && (u[A + 1] == null && (u[A + 1] = 0), u[A + 1] += u[A] / s | 0, u[A] %= s)
                    }
                    return u.reverse()
                }
                return function(f, w, s, a, A) {
                    var u, g, m, d, S, P, C, H, j = f.indexOf("."),
                        ie = l,
                        $ = c;
                    for (j >= 0 && (d = M, M = 0, f = f.replace(".", ""), H = new v(w), P = H.pow(f.length - j), M = d, H.c = t(ae(ee(P.c), P.e, "0"), 10, s, r), H.e = H.c.length), C = t(f, w, s, A ? (u = G, r) : (u = r, G)), m = d = C.length; C[--d] == 0; C.pop());
                    if (!C[0]) return u.charAt(0);
                    if (j < 0 ? --m : (P.c = C, P.e = m, P.s = a, P = L(P, H, ie, $, s), C = P.c, S = P.r, m = P.e), g = m + ie + 1, j = C[g], d = s / 2, S = S || g < 0 || C[g + 1] != null, S = $ < 4 ? (j != null || S) && ($ == 0 || $ == (P.s < 0 ? 3 : 2)) : j > d || j == d && ($ == 4 || S || $ == 6 && C[g - 1] & 1 || $ == (P.s < 0 ? 8 : 7)), g < 1 || !C[0]) f = S ? ae(u.charAt(1), -ie, u.charAt(0)) : u.charAt(0);
                    else {
                        if (C.length = g, S)
                            for (--s; ++C[--g] > s;) C[g] = 0, g || (++m, C = [1].concat(C));
                        for (d = C.length; !C[--d];);
                        for (j = 0, f = ""; j <= d; f += u.charAt(C[j++]));
                        f = ae(f, m, u.charAt(0))
                    }
                    return f
                }
            }(), L = function() {
                function r(w, s, a) {
                    var A, u, g, m, d = 0,
                        S = w.length,
                        P = s % fe,
                        C = s / fe | 0;
                    for (w = w.slice(); S--;) g = w[S] % fe, m = w[S] / fe | 0, A = C * g + m * P, u = P * g + A % fe * fe + d, d = (u / a | 0) + (A / fe | 0) + C * m, w[S] = u % a;
                    return d && (w = [d].concat(w)), w
                }

                function t(w, s, a, A) {
                    var u, g;
                    if (a != A) g = a > A ? 1 : -1;
                    else
                        for (u = g = 0; u < a; u++)
                            if (w[u] != s[u]) {
                                g = w[u] > s[u] ? 1 : -1;
                                break
                            } return g
                }

                function f(w, s, a, A) {
                    for (var u = 0; a--;) w[a] -= u, u = w[a] < s[a] ? 1 : 0, w[a] = u * A + w[a] - s[a];
                    for (; !w[0] && w.length > 1; w.splice(0, 1));
                }
                return function(w, s, a, A, u) {
                    var g, m, d, S, P, C, H, j, ie, $, W, oe, Re, Pe, De, Ae, Me, pe = w.s == s.s ? 1 : -1,
                        ue = w.c,
                        b = s.c;
                    if (!ue || !ue[0] || !b || !b[0]) return new v(!w.s || !s.s || (ue ? b && ue[0] == b[0] : !b) ? NaN : ue && ue[0] == 0 || !b ? pe * 0 : pe / 0);
                    for (j = new v(pe), ie = j.c = [], m = w.e - s.e, pe = a + m + 1, u || (u = Y, m = le(w.e / T) - le(s.e / T), pe = pe / T | 0), d = 0; b[d] == (ue[d] || 0); d++);
                    if (b[d] > (ue[d] || 0) && m--, pe < 0) ie.push(1), S = !0;
                    else {
                        for (Pe = ue.length, Ae = b.length, d = 0, pe += 2, P = z(u / (b[0] + 1)), P > 1 && (b = r(b, P, u), ue = r(ue, P, u), Ae = b.length, Pe = ue.length), Re = Ae, $ = ue.slice(0, Ae), W = $.length; W < Ae; $[W++] = 0);
                        Me = b.slice(), Me = [0].concat(Me), De = b[0], b[1] >= u / 2 && De++;
                        do {
                            if (P = 0, g = t(b, $, Ae, W), g < 0) {
                                if (oe = $[0], Ae != W && (oe = oe * u + ($[1] || 0)), P = z(oe / De), P > 1)
                                    for (P >= u && (P = u - 1), C = r(b, P, u), H = C.length, W = $.length; t(C, $, H, W) == 1;) P--, f(C, Ae < H ? Me : b, H, u), H = C.length, g = 1;
                                else P == 0 && (g = P = 1), C = b.slice(), H = C.length;
                                if (H < W && (C = [0].concat(C)), f($, C, W, u), W = $.length, g == -1)
                                    for (; t(b, $, Ae, W) < 1;) P++, f($, Ae < W ? Me : b, W, u), W = $.length
                            } else g === 0 && (P++, $ = [0]);
                            ie[d++] = P, $[0] ? $[W++] = ue[Re] || 0 : ($ = [ue[Re]], W = 1)
                        } while ((Re++ < Pe || $[0] != null) && pe--);
                        S = $[0] != null, ie[0] || ie.splice(0, 1)
                    }
                    if (u == Y) {
                        for (d = 1, pe = ie[0]; pe >= 10; pe /= 10, d++);
                        te(j, a + (j.e = d + m * T - 1) + 1, A, S)
                    } else j.e = m, j.r = +S;
                    return j
                }
            }();

            function F(r, t, f, w) {
                var s, a, A, u, g;
                if (f == null ? f = c : x(f, 0, 8), !r.c) return r.toString();
                if (s = r.c[0], A = r.e, t == null) g = ee(r.c), g = w == 1 || w == 2 && (A <= O || A >= o) ? Se(g, A) : ae(g, A, "0");
                else if (r = te(new v(r), t, f), a = r.e, g = ee(r.c), u = g.length, w == 1 || w == 2 && (t <= a || a <= O)) {
                    for (; u < t; g += "0", u++);
                    g = Se(g, a)
                } else if (t -= A, g = ae(g, a, "0"), a + 1 > u) {
                    if (--t > 0)
                        for (g += "."; t--; g += "0");
                } else if (t += a - u, t > 0)
                    for (a + 1 == u && (g += "."); t--; g += "0");
                return r.s < 0 && s ? "-" + g : g
            }

            function X(r, t) {
                for (var f, w, s = 1, a = new v(r[0]); s < r.length; s++) w = new v(r[s]), (!w.s || (f = de(a, w)) === t || f === 0 && a.s === t) && (a = w);
                return a
            }

            function re(r, t, f) {
                for (var w = 1, s = t.length; !t[--s]; t.pop());
                for (s = t[0]; s >= 10; s /= 10, w++);
                return (f = w + f * T - 1) > N ? r.c = r.e = null : f < h ? r.c = [r.e = 0] : (r.e = f, r.c = t), r
            }
            n = function() {
                var r = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                    t = /^([^.]+)\.$/,
                    f = /^\.([^.]+)$/,
                    w = /^-?(Infinity|NaN)$/,
                    s = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
                return function(a, A, u, g) {
                    var m, d = u ? A : A.replace(s, "");
                    if (w.test(d)) a.s = isNaN(d) ? null : d < 0 ? -1 : 1;
                    else {
                        if (!u && (d = d.replace(r, function(S, P, C) {
                                return m = (C = C.toLowerCase()) == "x" ? 16 : C == "b" ? 2 : 8, !g || g == m ? P : S
                            }), g && (m = g, d = d.replace(t, "$1").replace(f, "0.$1")), A != d)) return new v(d, m);
                        if (v.DEBUG) throw Error(y + "Not a" + (g ? " base " + g : "") + " number: " + A);
                        a.s = null
                    }
                    a.c = a.e = null
                }
            }();

            function te(r, t, f, w) {
                var s, a, A, u, g, m, d, S = r.c,
                    P = se;
                if (S) {
                    e: {
                        for (s = 1, u = S[0]; u >= 10; u /= 10, s++);
                        if (a = t - s, a < 0) a += T,
                        A = t,
                        g = S[m = 0],
                        d = z(g / P[s - A - 1] % 10);
                        else if (m = B((a + 1) / T), m >= S.length)
                            if (w) {
                                for (; S.length <= m; S.push(0));
                                g = d = 0, s = 1, a %= T, A = a - T + 1
                            } else break e;
                        else {
                            for (g = u = S[m], s = 1; u >= 10; u /= 10, s++);
                            a %= T, A = a - T + s, d = A < 0 ? 0 : z(g / P[s - A - 1] % 10)
                        }
                        if (w = w || t < 0 || S[m + 1] != null || (A < 0 ? g : g % P[s - A - 1]), w = f < 4 ? (d || w) && (f == 0 || f == (r.s < 0 ? 3 : 2)) : d > 5 || d == 5 && (f == 4 || w || f == 6 && (a > 0 ? A > 0 ? g / P[s - A] : 0 : S[m - 1]) % 10 & 1 || f == (r.s < 0 ? 8 : 7)), t < 1 || !S[0]) return S.length = 0, w ? (t -= r.e + 1, S[0] = P[(T - t % T) % T], r.e = -t || 0) : S[0] = r.e = 0, r;
                        if (a == 0 ? (S.length = m, u = 1, m--) : (S.length = m + 1, u = P[T - a], S[m] = A > 0 ? z(g / P[s - A] % P[A]) * u : 0), w)
                            for (;;)
                                if (m == 0) {
                                    for (a = 1, A = S[0]; A >= 10; A /= 10, a++);
                                    for (A = S[0] += u, u = 1; A >= 10; A /= 10, u++);
                                    a != u && (r.e++, S[0] == Y && (S[0] = 1));
                                    break
                                } else {
                                    if (S[m] += u, S[m] != Y) break;
                                    S[m--] = 0, u = 1
                                }
                        for (a = S.length; S[--a] === 0; S.pop());
                    }
                    r.e > N ? r.c = r.e = null : r.e < h && (r.c = [r.e = 0])
                }
                return r
            }

            function he(r) {
                var t, f = r.e;
                return f === null ? r.toString() : (t = ee(r.c), t = f <= O || f >= o ? Se(t, f) : ae(t, f, "0"), r.s < 0 ? "-" + t : t)
            }
            return i.absoluteValue = i.abs = function() {
                var r = new v(this);
                return r.s < 0 && (r.s = 1), r
            }, i.comparedTo = function(r, t) {
                return de(this, new v(r, t))
            }, i.decimalPlaces = i.dp = function(r, t) {
                var f, w, s, a = this;
                if (r != null) return x(r, 0, Z), t == null ? t = c : x(t, 0, 8), te(new v(a), r + a.e + 1, t);
                if (!(f = a.c)) return null;
                if (w = ((s = f.length - 1) - le(this.e / T)) * T, s = f[s])
                    for (; s % 10 == 0; s /= 10, w--);
                return w < 0 && (w = 0), w
            }, i.dividedBy = i.div = function(r, t) {
                return L(this, new v(r, t), l, c)
            }, i.dividedToIntegerBy = i.idiv = function(r, t) {
                return L(this, new v(r, t), 0, 1)
            }, i.exponentiatedBy = i.pow = function(r, t) {
                var f, w, s, a, A, u, g, m, d, S = this;
                if (r = new v(r), r.c && !r.isInteger()) throw Error(y + "Exponent not an integer: " + he(r));
                if (t != null && (t = new v(t)), u = r.e > 14, !S.c || !S.c[0] || S.c[0] == 1 && !S.e && S.c.length == 1 || !r.c || !r.c[0]) return d = new v(Math.pow(+he(S), u ? r.s * (2 - xe(r)) : +he(r))), t ? d.mod(t) : d;
                if (g = r.s < 0, t) {
                    if (t.c ? !t.c[0] : !t.s) return new v(NaN);
                    w = !g && S.isInteger() && t.isInteger(), w && (S = S.mod(t))
                } else {
                    if (r.e > 9 && (S.e > 0 || S.e < -1 || (S.e == 0 ? S.c[0] > 1 || u && S.c[1] >= 24e7 : S.c[0] < 8e13 || u && S.c[0] <= 9999975e7))) return a = S.s < 0 && xe(r) ? -0 : 0, S.e > -1 && (a = 1 / a), new v(g ? 1 / a : a);
                    M && (a = B(M / T + 2))
                }
                for (u ? (f = new v(.5), g && (r.s = 1), m = xe(r)) : (s = Math.abs(+he(r)), m = s % 2), d = new v(p);;) {
                    if (m) {
                        if (d = d.times(S), !d.c) break;
                        a ? d.c.length > a && (d.c.length = a) : w && (d = d.mod(t))
                    }
                    if (s) {
                        if (s = z(s / 2), s === 0) break;
                        m = s % 2
                    } else if (r = r.times(f), te(r, r.e + 1, 1), r.e > 14) m = xe(r);
                    else {
                        if (s = +he(r), s === 0) break;
                        m = s % 2
                    }
                    S = S.times(S), a ? S.c && S.c.length > a && (S.c.length = a) : w && (S = S.mod(t))
                }
                return w ? d : (g && (d = p.div(d)), t ? d.mod(t) : a ? te(d, M, c, A) : d)
            }, i.integerValue = function(r) {
                var t = new v(this);
                return r == null ? r = c : x(r, 0, 8), te(t, t.e + 1, r)
            }, i.isEqualTo = i.eq = function(r, t) {
                return de(this, new v(r, t)) === 0
            }, i.isFinite = function() {
                return !!this.c
            }, i.isGreaterThan = i.gt = function(r, t) {
                return de(this, new v(r, t)) > 0
            }, i.isGreaterThanOrEqualTo = i.gte = function(r, t) {
                return (t = de(this, new v(r, t))) === 1 || t === 0
            }, i.isInteger = function() {
                return !!this.c && le(this.e / T) > this.c.length - 2
            }, i.isLessThan = i.lt = function(r, t) {
                return de(this, new v(r, t)) < 0
            }, i.isLessThanOrEqualTo = i.lte = function(r, t) {
                return (t = de(this, new v(r, t))) === -1 || t === 0
            }, i.isNaN = function() {
                return !this.s
            }, i.isNegative = function() {
                return this.s < 0
            }, i.isPositive = function() {
                return this.s > 0
            }, i.isZero = function() {
                return !!this.c && this.c[0] == 0
            }, i.minus = function(r, t) {
                var f, w, s, a, A = this,
                    u = A.s;
                if (r = new v(r, t), t = r.s, !u || !t) return new v(NaN);
                if (u != t) return r.s = -t, A.plus(r);
                var g = A.e / T,
                    m = r.e / T,
                    d = A.c,
                    S = r.c;
                if (!g || !m) {
                    if (!d || !S) return d ? (r.s = -t, r) : new v(S ? A : NaN);
                    if (!d[0] || !S[0]) return S[0] ? (r.s = -t, r) : new v(d[0] ? A : c == 3 ? -0 : 0)
                }
                if (g = le(g), m = le(m), d = d.slice(), u = g - m) {
                    for ((a = u < 0) ? (u = -u, s = d) : (m = g, s = S), s.reverse(), t = u; t--; s.push(0));
                    s.reverse()
                } else
                    for (w = (a = (u = d.length) < (t = S.length)) ? u : t, u = t = 0; t < w; t++)
                        if (d[t] != S[t]) {
                            a = d[t] < S[t];
                            break
                        } if (a && (s = d, d = S, S = s, r.s = -r.s), t = (w = S.length) - (f = d.length), t > 0)
                    for (; t--; d[f++] = 0);
                for (t = Y - 1; w > u;) {
                    if (d[--w] < S[w]) {
                        for (f = w; f && !d[--f]; d[f] = t);
                        --d[f], d[w] += Y
                    }
                    d[w] -= S[w]
                }
                for (; d[0] == 0; d.splice(0, 1), --m);
                return d[0] ? re(r, d, m) : (r.s = c == 3 ? -1 : 1, r.c = [r.e = 0], r)
            }, i.modulo = i.mod = function(r, t) {
                var f, w, s = this;
                return r = new v(r, t), !s.c || !r.s || r.c && !r.c[0] ? new v(NaN) : !r.c || s.c && !s.c[0] ? new v(s) : (_ == 9 ? (w = r.s, r.s = 1, f = L(s, r, 0, 3), r.s = w, f.s *= w) : f = L(s, r, 0, _), r = s.minus(f.times(r)), !r.c[0] && _ == 1 && (r.s = s.s), r)
            }, i.multipliedBy = i.times = function(r, t) {
                var f, w, s, a, A, u, g, m, d, S, P, C, H, j, ie, $ = this,
                    W = $.c,
                    oe = (r = new v(r, t)).c;
                if (!W || !oe || !W[0] || !oe[0]) return !$.s || !r.s || W && !W[0] && !oe || oe && !oe[0] && !W ? r.c = r.e = r.s = null : (r.s *= $.s, !W || !oe ? r.c = r.e = null : (r.c = [0], r.e = 0)), r;
                for (w = le($.e / T) + le(r.e / T), r.s *= $.s, g = W.length, S = oe.length, g < S && (H = W, W = oe, oe = H, s = g, g = S, S = s), s = g + S, H = []; s--; H.push(0));
                for (j = Y, ie = fe, s = S; --s >= 0;) {
                    for (f = 0, P = oe[s] % ie, C = oe[s] / ie | 0, A = g, a = s + A; a > s;) m = W[--A] % ie, d = W[A] / ie | 0, u = C * m + d * P, m = P * m + u % ie * ie + H[a] + f, f = (m / j | 0) + (u / ie | 0) + C * d, H[a--] = m % j;
                    H[a] = f
                }
                return f ? ++w : H.splice(0, 1), re(r, H, w)
            }, i.negated = function() {
                var r = new v(this);
                return r.s = -r.s || null, r
            }, i.plus = function(r, t) {
                var f, w = this,
                    s = w.s;
                if (r = new v(r, t), t = r.s, !s || !t) return new v(NaN);
                if (s != t) return r.s = -t, w.minus(r);
                var a = w.e / T,
                    A = r.e / T,
                    u = w.c,
                    g = r.c;
                if (!a || !A) {
                    if (!u || !g) return new v(s / 0);
                    if (!u[0] || !g[0]) return g[0] ? r : new v(u[0] ? w : s * 0)
                }
                if (a = le(a), A = le(A), u = u.slice(), s = a - A) {
                    for (s > 0 ? (A = a, f = g) : (s = -s, f = u), f.reverse(); s--; f.push(0));
                    f.reverse()
                }
                for (s = u.length, t = g.length, s - t < 0 && (f = g, g = u, u = f, t = s), s = 0; t;) s = (u[--t] = u[t] + g[t] + s) / Y | 0, u[t] = Y === u[t] ? 0 : u[t] % Y;
                return s && (u = [s].concat(u), ++A), re(r, u, A)
            }, i.precision = i.sd = function(r, t) {
                var f, w, s, a = this;
                if (r != null && r !== !!r) return x(r, 1, Z), t == null ? t = c : x(t, 0, 8), te(new v(a), r, t);
                if (!(f = a.c)) return null;
                if (s = f.length - 1, w = s * T + 1, s = f[s]) {
                    for (; s % 10 == 0; s /= 10, w--);
                    for (s = f[0]; s >= 10; s /= 10, w++);
                }
                return r && a.e + 1 > w && (w = a.e + 1), w
            }, i.shiftedBy = function(r) {
                return x(r, -Ne, Ne), this.times("1e" + r)
            }, i.squareRoot = i.sqrt = function() {
                var r, t, f, w, s, a = this,
                    A = a.c,
                    u = a.s,
                    g = a.e,
                    m = l + 4,
                    d = new v("0.5");
                if (u !== 1 || !A || !A[0]) return new v(!u || u < 0 && (!A || A[0]) ? NaN : A ? a : 1 / 0);
                if (u = Math.sqrt(+he(a)), u == 0 || u == 1 / 0 ? (t = ee(A), (t.length + g) % 2 == 0 && (t += "0"), u = Math.sqrt(+t), g = le((g + 1) / 2) - (g < 0 || g % 2), u == 1 / 0 ? t = "5e" + g : (t = u.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + g), f = new v(t)) : f = new v(u + ""), f.c[0]) {
                    for (g = f.e, u = g + m, u < 3 && (u = 0);;)
                        if (s = f, f = d.times(s.plus(L(a, s, m, 1))), ee(s.c).slice(0, u) === (t = ee(f.c)).slice(0, u))
                            if (f.e < g && --u, t = t.slice(u - 3, u + 1), t == "9999" || !w && t == "4999") {
                                if (!w && (te(s, s.e + l + 2, 0), s.times(s).eq(a))) {
                                    f = s;
                                    break
                                }
                                m += 4, u += 4, w = 1
                            } else {
                                (!+t || !+t.slice(1) && t.charAt(0) == "5") && (te(f, f.e + l + 2, 1), r = !f.times(f).eq(a));
                                break
                            }
                }
                return te(f, f.e + l + 1, c, r)
            }, i.toExponential = function(r, t) {
                return r != null && (x(r, 0, Z), r++), F(this, r, t, 1)
            }, i.toFixed = function(r, t) {
                return r != null && (x(r, 0, Z), r = r + this.e + 1), F(this, r, t)
            }, i.toFormat = function(r, t, f) {
                var w, s = this;
                if (f == null) r != null && t && typeof t == "object" ? (f = t, t = null) : r && typeof r == "object" ? (f = r, r = t = null) : f = I;
                else if (typeof f != "object") throw Error(y + "Argument not an object: " + f);
                if (w = s.toFixed(r, t), s.c) {
                    var a, A = w.split("."),
                        u = +f.groupSize,
                        g = +f.secondaryGroupSize,
                        m = f.groupSeparator || "",
                        d = A[0],
                        S = A[1],
                        P = s.s < 0,
                        C = P ? d.slice(1) : d,
                        H = C.length;
                    if (g && (a = u, u = g, g = a, H -= a), u > 0 && H > 0) {
                        for (a = H % u || u, d = C.substr(0, a); a < H; a += u) d += m + C.substr(a, u);
                        g > 0 && (d += m + C.slice(a)), P && (d = "-" + d)
                    }
                    w = S ? d + (f.decimalSeparator || "") + ((g = +f.fractionGroupSize) ? S.replace(new RegExp("\\d{" + g + "}\\B", "g"), "$&" + (f.fractionGroupSeparator || "")) : S) : d
                }
                return (f.prefix || "") + w + (f.suffix || "")
            }, i.toFraction = function(r) {
                var t, f, w, s, a, A, u, g, m, d, S, P, C = this,
                    H = C.c;
                if (r != null && (u = new v(r), !u.isInteger() && (u.c || u.s !== 1) || u.lt(p))) throw Error(y + "Argument " + (u.isInteger() ? "out of range: " : "not an integer: ") + he(u));
                if (!H) return new v(C);
                for (t = new v(p), m = f = new v(p), w = g = new v(p), P = ee(H), a = t.e = P.length - C.e - 1, t.c[0] = se[(A = a % T) < 0 ? T + A : A], r = !r || u.comparedTo(t) > 0 ? a > 0 ? t : m : u, A = N, N = 1 / 0, u = new v(P), g.c[0] = 0; d = L(u, t, 0, 1), s = f.plus(d.times(w)), s.comparedTo(r) != 1;) f = w, w = s, m = g.plus(d.times(s = m)), g = s, t = u.minus(d.times(s = t)), u = s;
                return s = L(r.minus(f), w, 0, 1), g = g.plus(s.times(m)), f = f.plus(s.times(w)), g.s = m.s = C.s, a = a * 2, S = L(m, w, a, c).minus(C).abs().comparedTo(L(g, f, a, c).minus(C).abs()) < 1 ? [m, w] : [g, f], N = A, S
            }, i.toNumber = function() {
                return +he(this)
            }, i.toPrecision = function(r, t) {
                return r != null && x(r, 1, Z), F(this, r, t, 2)
            }, i.toString = function(r) {
                var t, f = this,
                    w = f.s,
                    s = f.e;
                return s === null ? w ? (t = "Infinity", w < 0 && (t = "-" + t)) : t = "NaN" : (r == null ? t = s <= O || s >= o ? Se(ee(f.c), s) : ae(ee(f.c), s, "0") : r === 10 && J ? (f = te(new v(f), l + s + 1, c), t = ae(ee(f.c), f.e, "0")) : (x(r, 2, G.length, "Base"), t = e(ae(ee(f.c), s, "0"), 10, r, w, !0)), w < 0 && f.c[0] && (t = "-" + t)), t
            }, i.valueOf = i.toJSON = function() {
                return he(this)
            }, i._isBigNumber = !0, D != null && v.set(D), v
        }

        function le(D) {
            var L = D | 0;
            return D > 0 || D === L ? L : L - 1
        }

        function ee(D) {
            for (var L, e, n = 1, i = D.length, p = D[0] + ""; n < i;) {
                for (L = D[n++] + "", e = T - L.length; e--; L = "0" + L);
                p += L
            }
            for (i = p.length; p.charCodeAt(--i) === 48;);
            return p.slice(0, i + 1 || 1)
        }

        function de(D, L) {
            var e, n, i = D.c,
                p = L.c,
                l = D.s,
                c = L.s,
                O = D.e,
                o = L.e;
            if (!l || !c) return null;
            if (e = i && !i[0], n = p && !p[0], e || n) return e ? n ? 0 : -c : l;
            if (l != c) return l;
            if (e = l < 0, n = O == o, !i || !p) return n ? 0 : !i ^ e ? 1 : -1;
            if (!n) return O > o ^ e ? 1 : -1;
            for (c = (O = i.length) < (o = p.length) ? O : o, l = 0; l < c; l++)
                if (i[l] != p[l]) return i[l] > p[l] ^ e ? 1 : -1;
            return O == o ? 0 : O > o ^ e ? 1 : -1
        }

        function x(D, L, e, n) {
            if (D < L || D > e || D !== z(D)) throw Error(y + (n || "Argument") + (typeof D == "number" ? D < L || D > e ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(D))
        }

        function xe(D) {
            var L = D.c.length - 1;
            return le(D.e / T) == L && D.c[L] % 2 != 0
        }

        function Se(D, L) {
            return (D.length > 1 ? D.charAt(0) + "." + D.slice(1) : D) + (L < 0 ? "e" : "e+") + L
        }

        function ae(D, L, e) {
            var n, i;
            if (L < 0) {
                for (i = e + "."; ++L; i += e);
                D = i + D
            } else if (n = D.length, ++L > n) {
                for (i = e, L -= n; --L; i += e);
                D += i
            } else L < n && (D = D.slice(0, L) + "." + D.slice(L));
            return D
        }
        q = Oe(), q.default = q.BigNumber = q, R.exports ? R.exports = q : (U || (U = typeof self < "u" && self ? self : window), U.BigNumber = q)
    })(Fe)
})(ye);
var Xe = ye.exports;
export {
    He as B, $e as a, Xe as b, Fe as c, ze as g
};
//# sourceMappingURL=vendor-bignumber.BRr1dcww.js.map