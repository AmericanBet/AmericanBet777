export function __vite_legacy_guard() {
    import.meta.url,
        import ("_").catch((() => 1)), async function*() {}().next()
}
var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
    r = function(t) {
        return t && t.Math === Math && t
    },
    e = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof t && t) || r("object" == typeof t && t) || function() {
        return this
    }() || Function("return this")(),
    n = {},
    o = function(t) {
        try {
            return !!t()
        } catch (r) {
            return !0
        }
    },
    i = !o((function() {
        return 7 !== Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1]
    })),
    a = !o((function() {
        var t = function() {}.bind();
        return "function" != typeof t || t.hasOwnProperty("prototype")
    })),
    u = a,
    c = Function.prototype.call,
    s = u ? c.bind(c) : function() {
        return c.apply(c, arguments)
    },
    f = {},
    h = {}.propertyIsEnumerable,
    l = Object.getOwnPropertyDescriptor,
    p = l && !h.call({
        1: 2
    }, 1);
f.f = p ? function(t) {
    var r = l(this, t);
    return !!r && r.enumerable
} : h;
var v, d, g = function(t, r) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: r
        }
    },
    y = a,
    m = Function.prototype,
    w = m.call,
    b = y && m.bind.bind(w, w),
    E = y ? b : function(t) {
        return function() {
            return w.apply(t, arguments)
        }
    },
    S = E,
    R = S({}.toString),
    A = S("".slice),
    O = function(t) {
        return A(R(t), 8, -1)
    },
    I = o,
    x = O,
    T = Object,
    P = E("".split),
    k = I((function() {
        return !T("z").propertyIsEnumerable(0)
    })) ? function(t) {
        return "String" === x(t) ? P(t, "") : T(t)
    } : T,
    L = function(t) {
        return null == t
    },
    U = L,
    C = TypeError,
    j = function(t) {
        if (U(t)) throw new C("Can't call method on " + t);
        return t
    },
    _ = k,
    N = j,
    D = function(t) {
        return _(N(t))
    },
    M = "object" == typeof document && document.all,
    B = void 0 === M && void 0 !== M ? function(t) {
        return "function" == typeof t || t === M
    } : function(t) {
        return "function" == typeof t
    },
    F = B,
    H = function(t) {
        return "object" == typeof t ? null !== t : F(t)
    },
    z = e,
    q = B,
    $ = function(t, r) {
        return arguments.length < 2 ? (e = z[t], q(e) ? e : void 0) : z[t] && z[t][r];
        var e
    },
    V = E({}.isPrototypeOf),
    W = e.navigator,
    G = W && W.userAgent,
    Y = G ? String(G) : "",
    J = e,
    K = Y,
    Q = J.process,
    X = J.Deno,
    Z = Q && Q.versions || X && X.version,
    tt = Z && Z.v8;
tt && (d = (v = tt.split("."))[0] > 0 && v[0] < 4 ? 1 : +(v[0] + v[1])), !d && K && (!(v = K.match(/Edge\/(\d+)/)) || v[1] >= 74) && (v = K.match(/Chrome\/(\d+)/)) && (d = +v[1]);
var rt = d,
    et = rt,
    nt = o,
    ot = e.String,
    it = !!Object.getOwnPropertySymbols && !nt((function() {
        var t = Symbol("symbol detection");
        return !ot(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && et && et < 41
    })),
    at = it && !Symbol.sham && "symbol" == typeof Symbol.iterator,
    ut = $,
    ct = B,
    st = V,
    ft = Object,
    ht = at ? function(t) {
        return "symbol" == typeof t
    } : function(t) {
        var r = ut("Symbol");
        return ct(r) && st(r.prototype, ft(t))
    },
    lt = String,
    pt = function(t) {
        try {
            return lt(t)
        } catch (r) {
            return "Object"
        }
    },
    vt = B,
    dt = pt,
    gt = TypeError,
    yt = function(t) {
        if (vt(t)) return t;
        throw new gt(dt(t) + " is not a function")
    },
    mt = yt,
    wt = L,
    bt = function(t, r) {
        var e = t[r];
        return wt(e) ? void 0 : mt(e)
    },
    Et = s,
    St = B,
    Rt = H,
    At = TypeError,
    Ot = {
        exports: {}
    },
    It = e,
    xt = Object.defineProperty,
    Tt = function(t, r) {
        try {
            xt(It, t, {
                value: r,
                configurable: !0,
                writable: !0
            })
        } catch (e) {
            It[t] = r
        }
        return r
    },
    Pt = e,
    kt = Tt,
    Lt = "__core-js_shared__",
    Ut = Ot.exports = Pt[Lt] || kt(Lt, {});
(Ut.versions || (Ut.versions = [])).push({
    version: "3.39.0",
    mode: "global",
    copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
});
var Ct = Ot.exports,
    jt = Ct,
    _t = function(t, r) {
        return jt[t] || (jt[t] = r || {})
    },
    Nt = j,
    Dt = Object,
    Mt = function(t) {
        return Dt(Nt(t))
    },
    Bt = Mt,
    Ft = E({}.hasOwnProperty),
    Ht = Object.hasOwn || function(t, r) {
        return Ft(Bt(t), r)
    },
    zt = E,
    qt = 0,
    $t = Math.random(),
    Vt = zt(1..toString),
    Wt = function(t) {
        return "Symbol(" + (void 0 === t ? "" : t) + ")_" + Vt(++qt + $t, 36)
    },
    Gt = _t,
    Yt = Ht,
    Jt = Wt,
    Kt = it,
    Qt = at,
    Xt = e.Symbol,
    Zt = Gt("wks"),
    tr = Qt ? Xt.for || Xt : Xt && Xt.withoutSetter || Jt,
    rr = function(t) {
        return Yt(Zt, t) || (Zt[t] = Kt && Yt(Xt, t) ? Xt[t] : tr("Symbol." + t)), Zt[t]
    },
    er = s,
    nr = H,
    or = ht,
    ir = bt,
    ar = function(t, r) {
        var e, n;
        if ("string" === r && St(e = t.toString) && !Rt(n = Et(e, t))) return n;
        if (St(e = t.valueOf) && !Rt(n = Et(e, t))) return n;
        if ("string" !== r && St(e = t.toString) && !Rt(n = Et(e, t))) return n;
        throw new At("Can't convert object to primitive value")
    },
    ur = TypeError,
    cr = rr("toPrimitive"),
    sr = function(t, r) {
        if (!nr(t) || or(t)) return t;
        var e, n = ir(t, cr);
        if (n) {
            if (void 0 === r && (r = "default"), e = er(n, t, r), !nr(e) || or(e)) return e;
            throw new ur("Can't convert object to primitive value")
        }
        return void 0 === r && (r = "number"), ar(t, r)
    },
    fr = sr,
    hr = ht,
    lr = function(t) {
        var r = fr(t, "string");
        return hr(r) ? r : r + ""
    },
    pr = H,
    vr = e.document,
    dr = pr(vr) && pr(vr.createElement),
    gr = function(t) {
        return dr ? vr.createElement(t) : {}
    },
    yr = gr,
    mr = !i && !o((function() {
        return 7 !== Object.defineProperty(yr("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })),
    wr = i,
    br = s,
    Er = f,
    Sr = g,
    Rr = D,
    Ar = lr,
    Or = Ht,
    Ir = mr,
    xr = Object.getOwnPropertyDescriptor;
n.f = wr ? xr : function(t, r) {
    if (t = Rr(t), r = Ar(r), Ir) try {
        return xr(t, r)
    } catch (e) {}
    if (Or(t, r)) return Sr(!br(Er.f, t, r), t[r])
};
var Tr = {},
    Pr = i && o((function() {
        return 42 !== Object.defineProperty((function() {}), "prototype", {
            value: 42,
            writable: !1
        }).prototype
    })),
    kr = H,
    Lr = String,
    Ur = TypeError,
    Cr = function(t) {
        if (kr(t)) return t;
        throw new Ur(Lr(t) + " is not an object")
    },
    jr = i,
    _r = mr,
    Nr = Pr,
    Dr = Cr,
    Mr = lr,
    Br = TypeError,
    Fr = Object.defineProperty,
    Hr = Object.getOwnPropertyDescriptor,
    zr = "enumerable",
    qr = "configurable",
    $r = "writable";
Tr.f = jr ? Nr ? function(t, r, e) {
    if (Dr(t), r = Mr(r), Dr(e), "function" == typeof t && "prototype" === r && "value" in e && $r in e && !e[$r]) {
        var n = Hr(t, r);
        n && n[$r] && (t[r] = e.value, e = {
            configurable: qr in e ? e[qr] : n[qr],
            enumerable: zr in e ? e[zr] : n[zr],
            writable: !1
        })
    }
    return Fr(t, r, e)
} : Fr : function(t, r, e) {
    if (Dr(t), r = Mr(r), Dr(e), _r) try {
        return Fr(t, r, e)
    } catch (n) {}
    if ("get" in e || "set" in e) throw new Br("Accessors not supported");
    return "value" in e && (t[r] = e.value), t
};
var Vr = Tr,
    Wr = g,
    Gr = i ? function(t, r, e) {
        return Vr.f(t, r, Wr(1, e))
    } : function(t, r, e) {
        return t[r] = e, t
    },
    Yr = {
        exports: {}
    },
    Jr = i,
    Kr = Ht,
    Qr = Function.prototype,
    Xr = Jr && Object.getOwnPropertyDescriptor,
    Zr = Kr(Qr, "name"),
    te = {
        EXISTS: Zr,
        PROPER: Zr && "something" === function() {}.name,
        CONFIGURABLE: Zr && (!Jr || Jr && Xr(Qr, "name").configurable)
    },
    re = B,
    ee = Ct,
    ne = E(Function.toString);
re(ee.inspectSource) || (ee.inspectSource = function(t) {
    return ne(t)
});
var oe, ie, ae, ue = ee.inspectSource,
    ce = B,
    se = e.WeakMap,
    fe = ce(se) && /native code/.test(String(se)),
    he = Wt,
    le = _t("keys"),
    pe = function(t) {
        return le[t] || (le[t] = he(t))
    },
    ve = {},
    de = fe,
    ge = e,
    ye = H,
    me = Gr,
    we = Ht,
    be = Ct,
    Ee = pe,
    Se = ve,
    Re = "Object already initialized",
    Ae = ge.TypeError,
    Oe = ge.WeakMap;
if (de || be.state) {
    var Ie = be.state || (be.state = new Oe);
    Ie.get = Ie.get, Ie.has = Ie.has, Ie.set = Ie.set, oe = function(t, r) {
        if (Ie.has(t)) throw new Ae(Re);
        return r.facade = t, Ie.set(t, r), r
    }, ie = function(t) {
        return Ie.get(t) || {}
    }, ae = function(t) {
        return Ie.has(t)
    }
} else {
    var xe = Ee("state");
    Se[xe] = !0, oe = function(t, r) {
        if (we(t, xe)) throw new Ae(Re);
        return r.facade = t, me(t, xe, r), r
    }, ie = function(t) {
        return we(t, xe) ? t[xe] : {}
    }, ae = function(t) {
        return we(t, xe)
    }
}
var Te = {
        set: oe,
        get: ie,
        has: ae,
        enforce: function(t) {
            return ae(t) ? ie(t) : oe(t, {})
        },
        getterFor: function(t) {
            return function(r) {
                var e;
                if (!ye(r) || (e = ie(r)).type !== t) throw new Ae("Incompatible receiver, " + t + " required");
                return e
            }
        }
    },
    Pe = E,
    ke = o,
    Le = B,
    Ue = Ht,
    Ce = i,
    je = te.CONFIGURABLE,
    _e = ue,
    Ne = Te.enforce,
    De = Te.get,
    Me = String,
    Be = Object.defineProperty,
    Fe = Pe("".slice),
    He = Pe("".replace),
    ze = Pe([].join),
    qe = Ce && !ke((function() {
        return 8 !== Be((function() {}), "length", {
            value: 8
        }).length
    })),
    $e = String(String).split("String"),
    Ve = Yr.exports = function(t, r, e) {
        "Symbol(" === Fe(Me(r), 0, 7) && (r = "[" + He(Me(r), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), e && e.getter && (r = "get " + r), e && e.setter && (r = "set " + r), (!Ue(t, "name") || je && t.name !== r) && (Ce ? Be(t, "name", {
            value: r,
            configurable: !0
        }) : t.name = r), qe && e && Ue(e, "arity") && t.length !== e.arity && Be(t, "length", {
            value: e.arity
        });
        try {
            e && Ue(e, "constructor") && e.constructor ? Ce && Be(t, "prototype", {
                writable: !1
            }) : t.prototype && (t.prototype = void 0)
        } catch (o) {}
        var n = Ne(t);
        return Ue(n, "source") || (n.source = ze($e, "string" == typeof r ? r : "")), t
    };
Function.prototype.toString = Ve((function() {
    return Le(this) && De(this).source || _e(this)
}), "toString");
var We = Yr.exports,
    Ge = B,
    Ye = Tr,
    Je = We,
    Ke = Tt,
    Qe = function(t, r, e, n) {
        n || (n = {});
        var o = n.enumerable,
            i = void 0 !== n.name ? n.name : r;
        if (Ge(e) && Je(e, i, n), n.global) o ? t[r] = e : Ke(r, e);
        else {
            try {
                n.unsafe ? t[r] && (o = !0) : delete t[r]
            } catch (a) {}
            o ? t[r] = e : Ye.f(t, r, {
                value: e,
                enumerable: !1,
                configurable: !n.nonConfigurable,
                writable: !n.nonWritable
            })
        }
        return t
    },
    Xe = {},
    Ze = Math.ceil,
    tn = Math.floor,
    rn = Math.trunc || function(t) {
        var r = +t;
        return (r > 0 ? tn : Ze)(r)
    },
    en = function(t) {
        var r = +t;
        return r != r || 0 === r ? 0 : rn(r)
    },
    nn = en,
    on = Math.max,
    an = Math.min,
    un = function(t, r) {
        var e = nn(t);
        return e < 0 ? on(e + r, 0) : an(e, r)
    },
    cn = en,
    sn = Math.min,
    fn = function(t) {
        var r = cn(t);
        return r > 0 ? sn(r, 9007199254740991) : 0
    },
    hn = fn,
    ln = function(t) {
        return hn(t.length)
    },
    pn = D,
    vn = un,
    dn = ln,
    gn = function(t) {
        return function(r, e, n) {
            var o = pn(r),
                i = dn(o);
            if (0 === i) return !t && -1;
            var a, u = vn(n, i);
            if (t && e != e) {
                for (; i > u;)
                    if ((a = o[u++]) != a) return !0
            } else
                for (; i > u; u++)
                    if ((t || u in o) && o[u] === e) return t || u || 0;
            return !t && -1
        }
    },
    yn = {
        includes: gn(!0),
        indexOf: gn(!1)
    },
    mn = Ht,
    wn = D,
    bn = yn.indexOf,
    En = ve,
    Sn = E([].push),
    Rn = function(t, r) {
        var e, n = wn(t),
            o = 0,
            i = [];
        for (e in n) !mn(En, e) && mn(n, e) && Sn(i, e);
        for (; r.length > o;) mn(n, e = r[o++]) && (~bn(i, e) || Sn(i, e));
        return i
    },
    An = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
    On = Rn,
    In = An.concat("length", "prototype");
Xe.f = Object.getOwnPropertyNames || function(t) {
    return On(t, In)
};
var xn = {};
xn.f = Object.getOwnPropertySymbols;
var Tn = $,
    Pn = Xe,
    kn = xn,
    Ln = Cr,
    Un = E([].concat),
    Cn = Tn("Reflect", "ownKeys") || function(t) {
        var r = Pn.f(Ln(t)),
            e = kn.f;
        return e ? Un(r, e(t)) : r
    },
    jn = Ht,
    _n = Cn,
    Nn = n,
    Dn = Tr,
    Mn = function(t, r, e) {
        for (var n = _n(r), o = Dn.f, i = Nn.f, a = 0; a < n.length; a++) {
            var u = n[a];
            jn(t, u) || e && jn(e, u) || o(t, u, i(r, u))
        }
    },
    Bn = o,
    Fn = B,
    Hn = /#|\.prototype\./,
    zn = function(t, r) {
        var e = $n[qn(t)];
        return e === Wn || e !== Vn && (Fn(r) ? Bn(r) : !!r)
    },
    qn = zn.normalize = function(t) {
        return String(t).replace(Hn, ".").toLowerCase()
    },
    $n = zn.data = {},
    Vn = zn.NATIVE = "N",
    Wn = zn.POLYFILL = "P",
    Gn = zn,
    Yn = e,
    Jn = n.f,
    Kn = Gr,
    Qn = Qe,
    Xn = Tt,
    Zn = Mn,
    to = Gn,
    ro = function(t, r) {
        var e, n, o, i, a, u = t.target,
            c = t.global,
            s = t.stat;
        if (e = c ? Yn : s ? Yn[u] || Xn(u, {}) : Yn[u] && Yn[u].prototype)
            for (n in r) {
                if (i = r[n], o = t.dontCallGetSet ? (a = Jn(e, n)) && a.value : e[n], !to(c ? n : u + (s ? "." : "#") + n, t.forced) && void 0 !== o) {
                    if (typeof i == typeof o) continue;
                    Zn(i, o)
                }(t.sham || o && o.sham) && Kn(i, "sham", !0), Qn(e, n, i, t)
            }
    },
    eo = e;
ro({
    global: !0,
    forced: eo.globalThis !== eo
}, {
    globalThis: eo
});
var no = a,
    oo = Function.prototype,
    io = oo.apply,
    ao = oo.call,
    uo = "object" == typeof Reflect && Reflect.apply || (no ? ao.bind(io) : function() {
        return ao.apply(io, arguments)
    }),
    co = E,
    so = yt,
    fo = function(t, r, e) {
        try {
            return co(so(Object.getOwnPropertyDescriptor(t, r)[e]))
        } catch (n) {}
    },
    ho = H,
    lo = function(t) {
        return ho(t) || null === t
    },
    po = String,
    vo = TypeError,
    go = fo,
    yo = H,
    mo = j,
    wo = function(t) {
        if (lo(t)) return t;
        throw new vo("Can't set " + po(t) + " as a prototype")
    },
    bo = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var t, r = !1,
            e = {};
        try {
            (t = go(Object.prototype, "__proto__", "set"))(e, []), r = e instanceof Array
        } catch (n) {}
        return function(e, n) {
            return mo(e), wo(n), yo(e) ? (r ? t(e, n) : e.__proto__ = n, e) : e
        }
    }() : void 0),
    Eo = Tr.f,
    So = function(t, r, e) {
        e in t || Eo(t, e, {
            configurable: !0,
            get: function() {
                return r[e]
            },
            set: function(t) {
                r[e] = t
            }
        })
    },
    Ro = B,
    Ao = H,
    Oo = bo,
    Io = function(t, r, e) {
        var n, o;
        return Oo && Ro(n = r.constructor) && n !== e && Ao(o = n.prototype) && o !== e.prototype && Oo(t, o), t
    },
    xo = {};
xo[rr("toStringTag")] = "z";
var To = "[object z]" === String(xo),
    Po = B,
    ko = O,
    Lo = rr("toStringTag"),
    Uo = Object,
    Co = "Arguments" === ko(function() {
        return arguments
    }()),
    jo = To ? ko : function(t) {
        var r, e, n;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(e = function(t, r) {
            try {
                return t[r]
            } catch (e) {}
        }(r = Uo(t), Lo)) ? e : Co ? ko(r) : "Object" === (n = ko(r)) && Po(r.callee) ? "Arguments" : n
    },
    _o = jo,
    No = String,
    Do = function(t) {
        if ("Symbol" === _o(t)) throw new TypeError("Cannot convert a Symbol value to a string");
        return No(t)
    },
    Mo = Do,
    Bo = function(t, r) {
        return void 0 === t ? arguments.length < 2 ? "" : r : Mo(t)
    },
    Fo = H,
    Ho = Gr,
    zo = function(t, r) {
        Fo(r) && "cause" in r && Ho(t, "cause", r.cause)
    },
    qo = Error,
    $o = E("".replace),
    Vo = String(new qo("zxcasd").stack),
    Wo = /\n\s*at [^:]*:[^\n]*/,
    Go = Wo.test(Vo),
    Yo = function(t, r) {
        if (Go && "string" == typeof t && !qo.prepareStackTrace)
            for (; r--;) t = $o(t, Wo, "");
        return t
    },
    Jo = g,
    Ko = !o((function() {
        var t = new Error("a");
        return !("stack" in t) || (Object.defineProperty(t, "stack", Jo(1, 7)), 7 !== t.stack)
    })),
    Qo = Gr,
    Xo = Yo,
    Zo = Ko,
    ti = Error.captureStackTrace,
    ri = function(t, r, e, n) {
        Zo && (ti ? ti(t, r) : Qo(t, "stack", Xo(e, n)))
    },
    ei = $,
    ni = Ht,
    oi = Gr,
    ii = V,
    ai = bo,
    ui = Mn,
    ci = So,
    si = Io,
    fi = Bo,
    hi = zo,
    li = ri,
    pi = i,
    vi = function(t, r, e, n) {
        var o = "stackTraceLimit",
            i = n ? 2 : 1,
            a = t.split("."),
            u = a[a.length - 1],
            c = ei.apply(null, a);
        if (c) {
            var s = c.prototype;
            if (ni(s, "cause") && delete s.cause, !e) return c;
            var f = ei("Error"),
                h = r((function(t, r) {
                    var e = fi(n ? r : t, void 0),
                        o = n ? new c(t) : new c;
                    return void 0 !== e && oi(o, "message", e), li(o, h, o.stack, 2), this && ii(s, this) && si(o, this, h), arguments.length > i && hi(o, arguments[i]), o
                }));
            h.prototype = s, "Error" !== u ? ai ? ai(h, f) : ui(h, f, {
                name: !0
            }) : pi && o in c && (ci(h, c, o), ci(h, c, "prepareStackTrace")), ui(h, c);
            try {
                s.name !== u && oi(s, "name", u), s.constructor = h
            } catch (l) {}
            return h
        }
    },
    di = ro,
    gi = uo,
    yi = vi,
    mi = "WebAssembly",
    wi = e[mi],
    bi = 7 !== new Error("e", {
        cause: 7
    }).cause,
    Ei = function(t, r) {
        var e = {};
        e[t] = yi(t, r, bi), di({
            global: !0,
            constructor: !0,
            arity: 1,
            forced: bi
        }, e)
    },
    Si = function(t, r) {
        if (wi && wi[t]) {
            var e = {};
            e[t] = yi(mi + "." + t, r, bi), di({
                target: mi,
                stat: !0,
                constructor: !0,
                arity: 1,
                forced: bi
            }, e)
        }
    };
Ei("Error", (function(t) {
    return function(r) {
        return gi(t, this, arguments)
    }
})), Ei("EvalError", (function(t) {
    return function(r) {
        return gi(t, this, arguments)
    }
})), Ei("RangeError", (function(t) {
    return function(r) {
        return gi(t, this, arguments)
    }
})), Ei("ReferenceError", (function(t) {
    return function(r) {
        return gi(t, this, arguments)
    }
})), Ei("SyntaxError", (function(t) {
    return function(r) {
        return gi(t, this, arguments)
    }
})), Ei("TypeError", (function(t) {
    return function(r) {
        return gi(t, this, arguments)
    }
})), Ei("URIError", (function(t) {
    return function(r) {
        return gi(t, this, arguments)
    }
})), Si("CompileError", (function(t) {
    return function(r) {
        return gi(t, this, arguments)
    }
})), Si("LinkError", (function(t) {
    return function(r) {
        return gi(t, this, arguments)
    }
})), Si("RuntimeError", (function(t) {
    return function(r) {
        return gi(t, this, arguments)
    }
}));
var Ri = {},
    Ai = Rn,
    Oi = An,
    Ii = Object.keys || function(t) {
        return Ai(t, Oi)
    },
    xi = i,
    Ti = Pr,
    Pi = Tr,
    ki = Cr,
    Li = D,
    Ui = Ii;
Ri.f = xi && !Ti ? Object.defineProperties : function(t, r) {
    ki(t);
    for (var e, n = Li(r), o = Ui(r), i = o.length, a = 0; i > a;) Pi.f(t, e = o[a++], n[e]);
    return t
};
var Ci, ji = $("document", "documentElement"),
    _i = Cr,
    Ni = Ri,
    Di = An,
    Mi = ve,
    Bi = ji,
    Fi = gr,
    Hi = "prototype",
    zi = "script",
    qi = pe("IE_PROTO"),
    $i = function() {},
    Vi = function(t) {
        return "<" + zi + ">" + t + "</" + zi + ">"
    },
    Wi = function(t) {
        t.write(Vi("")), t.close();
        var r = t.parentWindow.Object;
        return t = null, r
    },
    Gi = function() {
        try {
            Ci = new ActiveXObject("htmlfile")
        } catch (o) {}
        var t, r, e;
        Gi = "undefined" != typeof document ? document.domain && Ci ? Wi(Ci) : (r = Fi("iframe"), e = "java" + zi + ":", r.style.display = "none", Bi.appendChild(r), r.src = String(e), (t = r.contentWindow.document).open(), t.write(Vi("document.F=Object")), t.close(), t.F) : Wi(Ci);
        for (var n = Di.length; n--;) delete Gi[Hi][Di[n]];
        return Gi()
    };
Mi[qi] = !0;
var Yi = Object.create || function(t, r) {
        var e;
        return null !== t ? ($i[Hi] = _i(t), e = new $i, $i[Hi] = null, e[qi] = t) : e = Gi(), void 0 === r ? e : Ni.f(e, r)
    },
    Ji = rr,
    Ki = Yi,
    Qi = Tr.f,
    Xi = Ji("unscopables"),
    Zi = Array.prototype;
void 0 === Zi[Xi] && Qi(Zi, Xi, {
    configurable: !0,
    value: Ki(null)
});
var ta = function(t) {
        Zi[Xi][t] = !0
    },
    ra = yn.includes,
    ea = ta;
ro({
    target: "Array",
    proto: !0,
    forced: o((function() {
        return !Array(1).includes()
    }))
}, {
    includes: function(t) {
        return ra(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
}), ea("includes");
var na, oa, ia, aa = {},
    ua = !o((function() {
        function t() {}
        return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
    })),
    ca = Ht,
    sa = B,
    fa = Mt,
    ha = ua,
    la = pe("IE_PROTO"),
    pa = Object,
    va = pa.prototype,
    da = ha ? pa.getPrototypeOf : function(t) {
        var r = fa(t);
        if (ca(r, la)) return r[la];
        var e = r.constructor;
        return sa(e) && r instanceof e ? e.prototype : r instanceof pa ? va : null
    },
    ga = o,
    ya = B,
    ma = H,
    wa = da,
    ba = Qe,
    Ea = rr("iterator"),
    Sa = !1;
[].keys && ("next" in (ia = [].keys()) ? (oa = wa(wa(ia))) !== Object.prototype && (na = oa) : Sa = !0);
var Ra = !ma(na) || ga((function() {
    var t = {};
    return na[Ea].call(t) !== t
}));
Ra && (na = {}), ya(na[Ea]) || ba(na, Ea, (function() {
    return this
}));
var Aa = {
        IteratorPrototype: na,
        BUGGY_SAFARI_ITERATORS: Sa
    },
    Oa = Tr.f,
    Ia = Ht,
    xa = rr("toStringTag"),
    Ta = function(t, r, e) {
        t && !e && (t = t.prototype), t && !Ia(t, xa) && Oa(t, xa, {
            configurable: !0,
            value: r
        })
    },
    Pa = Aa.IteratorPrototype,
    ka = Yi,
    La = g,
    Ua = Ta,
    Ca = aa,
    ja = function() {
        return this
    },
    _a = function(t, r, e, n) {
        var o = r + " Iterator";
        return t.prototype = ka(Pa, {
            next: La(+!n, e)
        }), Ua(t, o, !1), Ca[o] = ja, t
    },
    Na = ro,
    Da = s,
    Ma = B,
    Ba = _a,
    Fa = da,
    Ha = bo,
    za = Ta,
    qa = Gr,
    $a = Qe,
    Va = aa,
    Wa = te.PROPER,
    Ga = te.CONFIGURABLE,
    Ya = Aa.IteratorPrototype,
    Ja = Aa.BUGGY_SAFARI_ITERATORS,
    Ka = rr("iterator"),
    Qa = "keys",
    Xa = "values",
    Za = "entries",
    tu = function() {
        return this
    },
    ru = function(t, r, e, n, o, i, a) {
        Ba(e, r, n);
        var u, c, s, f = function(t) {
                if (t === o && d) return d;
                if (!Ja && t && t in p) return p[t];
                switch (t) {
                    case Qa:
                    case Xa:
                    case Za:
                        return function() {
                            return new e(this, t)
                        }
                }
                return function() {
                    return new e(this)
                }
            },
            h = r + " Iterator",
            l = !1,
            p = t.prototype,
            v = p[Ka] || p["@@iterator"] || o && p[o],
            d = !Ja && v || f(o),
            g = "Array" === r && p.entries || v;
        if (g && (u = Fa(g.call(new t))) !== Object.prototype && u.next && (Fa(u) !== Ya && (Ha ? Ha(u, Ya) : Ma(u[Ka]) || $a(u, Ka, tu)), za(u, h, !0)), Wa && o === Xa && v && v.name !== Xa && (Ga ? qa(p, "name", Xa) : (l = !0, d = function() {
                return Da(v, this)
            })), o)
            if (c = {
                    values: f(Xa),
                    keys: i ? d : f(Qa),
                    entries: f(Za)
                }, a)
                for (s in c)(Ja || l || !(s in p)) && $a(p, s, c[s]);
            else Na({
                target: r,
                proto: !0,
                forced: Ja || l
            }, c);
        return p[Ka] !== d && $a(p, Ka, d, {
            name: o
        }), Va[r] = d, c
    },
    eu = function(t, r) {
        return {
            value: t,
            done: r
        }
    },
    nu = D,
    ou = ta,
    iu = aa,
    au = Te,
    uu = Tr.f,
    cu = ru,
    su = eu,
    fu = i,
    hu = "Array Iterator",
    lu = au.set,
    pu = au.getterFor(hu),
    vu = cu(Array, "Array", (function(t, r) {
        lu(this, {
            type: hu,
            target: nu(t),
            index: 0,
            kind: r
        })
    }), (function() {
        var t = pu(this),
            r = t.target,
            e = t.index++;
        if (!r || e >= r.length) return t.target = null, su(void 0, !0);
        switch (t.kind) {
            case "keys":
                return su(e, !1);
            case "values":
                return su(r[e], !1)
        }
        return su([e, r[e]], !1)
    }), "values"),
    du = iu.Arguments = iu.Array;
if (ou("keys"), ou("values"), ou("entries"), fu && "values" !== du.name) try {
    uu(du, "name", {
        value: "values"
    })
} catch (vD) {}
var gu = O,
    yu = Array.isArray || function(t) {
        return "Array" === gu(t)
    },
    mu = i,
    wu = yu,
    bu = TypeError,
    Eu = Object.getOwnPropertyDescriptor,
    Su = mu && ! function() {
        if (void 0 !== this) return !0;
        try {
            Object.defineProperty([], "length", {
                writable: !1
            }).length = 1
        } catch (vD) {
            return vD instanceof TypeError
        }
    }() ? function(t, r) {
        if (wu(t) && !Eu(t, "length").writable) throw new bu("Cannot set read only .length");
        return t.length = r
    } : function(t, r) {
        return t.length = r
    },
    Ru = TypeError,
    Au = function(t) {
        if (t > 9007199254740991) throw Ru("Maximum allowed index exceeded");
        return t
    },
    Ou = Mt,
    Iu = ln,
    xu = Su,
    Tu = Au;
ro({
    target: "Array",
    proto: !0,
    arity: 1,
    forced: o((function() {
        return 4294967297 !== [].push.call({
            length: 4294967296
        }, 1)
    })) || ! function() {
        try {
            Object.defineProperty([], "length", {
                writable: !1
            }).push()
        } catch (vD) {
            return vD instanceof TypeError
        }
    }()
}, {
    push: function(t) {
        var r = Ou(this),
            e = Iu(r),
            n = arguments.length;
        Tu(e + n);
        for (var o = 0; o < n; o++) r[e] = arguments[o], e++;
        return xu(r, e), e
    }
});
var Pu = yt,
    ku = Mt,
    Lu = k,
    Uu = ln,
    Cu = TypeError,
    ju = "Reduce of empty array with no initial value",
    _u = function(t) {
        return function(r, e, n, o) {
            var i = ku(r),
                a = Lu(i),
                u = Uu(i);
            if (Pu(e), 0 === u && n < 2) throw new Cu(ju);
            var c = t ? u - 1 : 0,
                s = t ? -1 : 1;
            if (n < 2)
                for (;;) {
                    if (c in a) {
                        o = a[c], c += s;
                        break
                    }
                    if (c += s, t ? c < 0 : u <= c) throw new Cu(ju)
                }
            for (; t ? c >= 0 : u > c; c += s) c in a && (o = e(o, a[c], c, i));
            return o
        }
    },
    Nu = {
        left: _u(!1),
        right: _u(!0)
    },
    Du = o,
    Mu = function(t, r) {
        var e = [][t];
        return !!e && Du((function() {
            e.call(null, r || function() {
                return 1
            }, 1)
        }))
    },
    Bu = e,
    Fu = Y,
    Hu = O,
    zu = function(t) {
        return Fu.slice(0, t.length) === t
    },
    qu = zu("Bun/") ? "BUN" : zu("Cloudflare-Workers") ? "CLOUDFLARE" : zu("Deno/") ? "DENO" : zu("Node.js/") ? "NODE" : Bu.Bun && "string" == typeof Bun.version ? "BUN" : Bu.Deno && "object" == typeof Deno.version ? "DENO" : "process" === Hu(Bu.process) ? "NODE" : Bu.window && Bu.document ? "BROWSER" : "REST",
    $u = "NODE" === qu,
    Vu = Nu.left;
ro({
    target: "Array",
    proto: !0,
    forced: !$u && rt > 79 && rt < 83 || !Mu("reduce")
}, {
    reduce: function(t) {
        var r = arguments.length;
        return Vu(this, t, r, r > 1 ? arguments[1] : void 0)
    }
});
var Wu = E([].slice),
    Gu = yu,
    Yu = B,
    Ju = O,
    Ku = Do,
    Qu = E([].push),
    Xu = ro,
    Zu = $,
    tc = uo,
    rc = s,
    ec = E,
    nc = o,
    oc = B,
    ic = ht,
    ac = Wu,
    uc = function(t) {
        if (Yu(t)) return t;
        if (Gu(t)) {
            for (var r = t.length, e = [], n = 0; n < r; n++) {
                var o = t[n];
                "string" == typeof o ? Qu(e, o) : "number" != typeof o && "Number" !== Ju(o) && "String" !== Ju(o) || Qu(e, Ku(o))
            }
            var i = e.length,
                a = !0;
            return function(t, r) {
                if (a) return a = !1, r;
                if (Gu(this)) return r;
                for (var n = 0; n < i; n++)
                    if (e[n] === t) return r
            }
        }
    },
    cc = it,
    sc = String,
    fc = Zu("JSON", "stringify"),
    hc = ec(/./.exec),
    lc = ec("".charAt),
    pc = ec("".charCodeAt),
    vc = ec("".replace),
    dc = ec(1..toString),
    gc = /[\uD800-\uDFFF]/g,
    yc = /^[\uD800-\uDBFF]$/,
    mc = /^[\uDC00-\uDFFF]$/,
    wc = !cc || nc((function() {
        var t = Zu("Symbol")("stringify detection");
        return "[null]" !== fc([t]) || "{}" !== fc({
            a: t
        }) || "{}" !== fc(Object(t))
    })),
    bc = nc((function() {
        return '"\\udf06\\ud834"' !== fc("\udf06\ud834") || '"\\udead"' !== fc("\udead")
    })),
    Ec = function(t, r) {
        var e = ac(arguments),
            n = uc(r);
        if (oc(n) || void 0 !== t && !ic(t)) return e[1] = function(t, r) {
            if (oc(n) && (r = rc(n, this, sc(t), r)), !ic(r)) return r
        }, tc(fc, null, e)
    },
    Sc = function(t, r, e) {
        var n = lc(e, r - 1),
            o = lc(e, r + 1);
        return hc(yc, t) && !hc(mc, o) || hc(mc, t) && !hc(yc, n) ? "\\u" + dc(pc(t, 0), 16) : t
    };
fc && Xu({
    target: "JSON",
    stat: !0,
    arity: 3,
    forced: wc || bc
}, {
    stringify: function(t, r, e) {
        var n = ac(arguments),
            o = tc(wc ? Ec : fc, null, n);
        return bc && "string" == typeof o ? vc(o, gc, Sc) : o
    }
});
var Rc = We,
    Ac = Tr,
    Oc = function(t, r, e) {
        return e.get && Rc(e.get, r, {
            getter: !0
        }), e.set && Rc(e.set, r, {
            setter: !0
        }), Ac.f(t, r, e)
    },
    Ic = $,
    xc = Oc,
    Tc = i,
    Pc = rr("species"),
    kc = function(t) {
        var r = Ic(t);
        Tc && r && !r[Pc] && xc(r, Pc, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    },
    Lc = V,
    Uc = TypeError,
    Cc = function(t, r) {
        if (Lc(r, t)) return t;
        throw new Uc("Incorrect invocation")
    },
    jc = E,
    _c = o,
    Nc = B,
    Dc = jo,
    Mc = ue,
    Bc = function() {},
    Fc = $("Reflect", "construct"),
    Hc = /^\s*(?:class|function)\b/,
    zc = jc(Hc.exec),
    qc = !Hc.test(Bc),
    $c = function(t) {
        if (!Nc(t)) return !1;
        try {
            return Fc(Bc, [], t), !0
        } catch (vD) {
            return !1
        }
    },
    Vc = function(t) {
        if (!Nc(t)) return !1;
        switch (Dc(t)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
                return !1
        }
        try {
            return qc || !!zc(Hc, Mc(t))
        } catch (vD) {
            return !0
        }
    };
Vc.sham = !0;
var Wc, Gc, Yc, Jc, Kc = !Fc || _c((function() {
        var t;
        return $c($c.call) || !$c(Object) || !$c((function() {
            t = !0
        })) || t
    })) ? Vc : $c,
    Qc = Kc,
    Xc = pt,
    Zc = TypeError,
    ts = function(t) {
        if (Qc(t)) return t;
        throw new Zc(Xc(t) + " is not a constructor")
    },
    rs = Cr,
    es = ts,
    ns = L,
    os = rr("species"),
    is = function(t, r) {
        var e, n = rs(t).constructor;
        return void 0 === n || ns(e = rs(n)[os]) ? r : es(e)
    },
    as = O,
    us = E,
    cs = function(t) {
        if ("Function" === as(t)) return us(t)
    },
    ss = yt,
    fs = a,
    hs = cs(cs.bind),
    ls = function(t, r) {
        return ss(t), void 0 === r ? t : fs ? hs(t, r) : function() {
            return t.apply(r, arguments)
        }
    },
    ps = TypeError,
    vs = function(t, r) {
        if (t < r) throw new ps("Not enough arguments");
        return t
    },
    ds = /(?:ipad|iphone|ipod).*applewebkit/i.test(Y),
    gs = e,
    ys = uo,
    ms = ls,
    ws = B,
    bs = Ht,
    Es = o,
    Ss = ji,
    Rs = Wu,
    As = gr,
    Os = vs,
    Is = ds,
    xs = $u,
    Ts = gs.setImmediate,
    Ps = gs.clearImmediate,
    ks = gs.process,
    Ls = gs.Dispatch,
    Us = gs.Function,
    Cs = gs.MessageChannel,
    js = gs.String,
    _s = 0,
    Ns = {},
    Ds = "onreadystatechange";
Es((function() {
    Wc = gs.location
}));
var Ms = function(t) {
        if (bs(Ns, t)) {
            var r = Ns[t];
            delete Ns[t], r()
        }
    },
    Bs = function(t) {
        return function() {
            Ms(t)
        }
    },
    Fs = function(t) {
        Ms(t.data)
    },
    Hs = function(t) {
        gs.postMessage(js(t), Wc.protocol + "//" + Wc.host)
    };
Ts && Ps || (Ts = function(t) {
    Os(arguments.length, 1);
    var r = ws(t) ? t : Us(t),
        e = Rs(arguments, 1);
    return Ns[++_s] = function() {
        ys(r, void 0, e)
    }, Gc(_s), _s
}, Ps = function(t) {
    delete Ns[t]
}, xs ? Gc = function(t) {
    ks.nextTick(Bs(t))
} : Ls && Ls.now ? Gc = function(t) {
    Ls.now(Bs(t))
} : Cs && !Is ? (Jc = (Yc = new Cs).port2, Yc.port1.onmessage = Fs, Gc = ms(Jc.postMessage, Jc)) : gs.addEventListener && ws(gs.postMessage) && !gs.importScripts && Wc && "file:" !== Wc.protocol && !Es(Hs) ? (Gc = Hs, gs.addEventListener("message", Fs, !1)) : Gc = Ds in As("script") ? function(t) {
    Ss.appendChild(As("script"))[Ds] = function() {
        Ss.removeChild(this), Ms(t)
    }
} : function(t) {
    setTimeout(Bs(t), 0)
});
var zs = {
        set: Ts,
        clear: Ps
    },
    qs = e,
    $s = i,
    Vs = Object.getOwnPropertyDescriptor,
    Ws = function(t) {
        if (!$s) return qs[t];
        var r = Vs(qs, t);
        return r && r.value
    },
    Gs = function() {
        this.head = null, this.tail = null
    };
Gs.prototype = {
    add: function(t) {
        var r = {
                item: t,
                next: null
            },
            e = this.tail;
        e ? e.next = r : this.head = r, this.tail = r
    },
    get: function() {
        var t = this.head;
        if (t) return null === (this.head = t.next) && (this.tail = null), t.item
    }
};
var Ys, Js, Ks, Qs, Xs, Zs = Gs,
    tf = /ipad|iphone|ipod/i.test(Y) && "undefined" != typeof Pebble,
    rf = /web0s(?!.*chrome)/i.test(Y),
    ef = e,
    nf = Ws,
    of = ls,
    af = zs.set,
    uf = Zs,
    cf = ds,
    sf = tf,
    ff = rf,
    hf = $u,
    lf = ef.MutationObserver || ef.WebKitMutationObserver,
    pf = ef.document,
    vf = ef.process,
    df = ef.Promise,
    gf = nf("queueMicrotask");
if (!gf) {
    var yf = new uf,
        mf = function() {
            var t, r;
            for (hf && (t = vf.domain) && t.exit(); r = yf.get();) try {
                r()
            } catch (vD) {
                throw yf.head && Ys(), vD
            }
            t && t.enter()
        };
    cf || hf || ff || !lf || !pf ? !sf && df && df.resolve ? ((Qs = df.resolve(void 0)).constructor = df, Xs = of (Qs.then, Qs), Ys = function() {
        Xs(mf)
    }) : hf ? Ys = function() {
        vf.nextTick(mf)
    } : (af = of (af, ef), Ys = function() {
        af(mf)
    }) : (Js = !0, Ks = pf.createTextNode(""), new lf(mf).observe(Ks, {
        characterData: !0
    }), Ys = function() {
        Ks.data = Js = !Js
    }), gf = function(t) {
        yf.head || Ys(), yf.add(t)
    }
}
var wf = gf,
    bf = function(t) {
        try {
            return {
                error: !1,
                value: t()
            }
        } catch (vD) {
            return {
                error: !0,
                value: vD
            }
        }
    },
    Ef = e.Promise,
    Sf = e,
    Rf = Ef,
    Af = B,
    Of = Gn,
    If = ue,
    xf = rr,
    Tf = qu,
    Pf = rt;
Rf && Rf.prototype;
var kf = xf("species"),
    Lf = !1,
    Uf = Af(Sf.PromiseRejectionEvent),
    Cf = Of("Promise", (function() {
        var t = If(Rf),
            r = t !== String(Rf);
        if (!r && 66 === Pf) return !0;
        if (!Pf || Pf < 51 || !/native code/.test(t)) {
            var e = new Rf((function(t) {
                    t(1)
                })),
                n = function(t) {
                    t((function() {}), (function() {}))
                };
            if ((e.constructor = {})[kf] = n, !(Lf = e.then((function() {})) instanceof n)) return !0
        }
        return !(r || "BROWSER" !== Tf && "DENO" !== Tf || Uf)
    })),
    jf = {
        CONSTRUCTOR: Cf,
        REJECTION_EVENT: Uf,
        SUBCLASSING: Lf
    },
    _f = {},
    Nf = yt,
    Df = TypeError,
    Mf = function(t) {
        var r, e;
        this.promise = new t((function(t, n) {
            if (void 0 !== r || void 0 !== e) throw new Df("Bad Promise constructor");
            r = t, e = n
        })), this.resolve = Nf(r), this.reject = Nf(e)
    };
_f.f = function(t) {
    return new Mf(t)
};
var Bf, Ff, Hf, zf = ro,
    qf = $u,
    $f = e,
    Vf = s,
    Wf = Qe,
    Gf = bo,
    Yf = Ta,
    Jf = kc,
    Kf = yt,
    Qf = B,
    Xf = H,
    Zf = Cc,
    th = is,
    rh = zs.set,
    eh = wf,
    nh = function(t, r) {
        try {
            1 === arguments.length ? console.error(t) : console.error(t, r)
        } catch (vD) {}
    },
    oh = bf,
    ih = Zs,
    ah = Te,
    uh = Ef,
    ch = _f,
    sh = "Promise",
    fh = jf.CONSTRUCTOR,
    hh = jf.REJECTION_EVENT,
    lh = jf.SUBCLASSING,
    ph = ah.getterFor(sh),
    vh = ah.set,
    dh = uh && uh.prototype,
    gh = uh,
    yh = dh,
    mh = $f.TypeError,
    wh = $f.document,
    bh = $f.process,
    Eh = ch.f,
    Sh = Eh,
    Rh = !!(wh && wh.createEvent && $f.dispatchEvent),
    Ah = "unhandledrejection",
    Oh = function(t) {
        var r;
        return !(!Xf(t) || !Qf(r = t.then)) && r
    },
    Ih = function(t, r) {
        var e, n, o, i = r.value,
            a = 1 === r.state,
            u = a ? t.ok : t.fail,
            c = t.resolve,
            s = t.reject,
            f = t.domain;
        try {
            u ? (a || (2 === r.rejection && Lh(r), r.rejection = 1), !0 === u ? e = i : (f && f.enter(), e = u(i), f && (f.exit(), o = !0)), e === t.promise ? s(new mh("Promise-chain cycle")) : (n = Oh(e)) ? Vf(n, e, c, s) : c(e)) : s(i)
        } catch (vD) {
            f && !o && f.exit(), s(vD)
        }
    },
    xh = function(t, r) {
        t.notified || (t.notified = !0, eh((function() {
            for (var e, n = t.reactions; e = n.get();) Ih(e, t);
            t.notified = !1, r && !t.rejection && Ph(t)
        })))
    },
    Th = function(t, r, e) {
        var n, o;
        Rh ? ((n = wh.createEvent("Event")).promise = r, n.reason = e, n.initEvent(t, !1, !0), $f.dispatchEvent(n)) : n = {
            promise: r,
            reason: e
        }, !hh && (o = $f["on" + t]) ? o(n) : t === Ah && nh("Unhandled promise rejection", e)
    },
    Ph = function(t) {
        Vf(rh, $f, (function() {
            var r, e = t.facade,
                n = t.value;
            if (kh(t) && (r = oh((function() {
                    qf ? bh.emit("unhandledRejection", n, e) : Th(Ah, e, n)
                })), t.rejection = qf || kh(t) ? 2 : 1, r.error)) throw r.value
        }))
    },
    kh = function(t) {
        return 1 !== t.rejection && !t.parent
    },
    Lh = function(t) {
        Vf(rh, $f, (function() {
            var r = t.facade;
            qf ? bh.emit("rejectionHandled", r) : Th("rejectionhandled", r, t.value)
        }))
    },
    Uh = function(t, r, e) {
        return function(n) {
            t(r, n, e)
        }
    },
    Ch = function(t, r, e) {
        t.done || (t.done = !0, e && (t = e), t.value = r, t.state = 2, xh(t, !0))
    },
    jh = function(t, r, e) {
        if (!t.done) {
            t.done = !0, e && (t = e);
            try {
                if (t.facade === r) throw new mh("Promise can't be resolved itself");
                var n = Oh(r);
                n ? eh((function() {
                    var e = {
                        done: !1
                    };
                    try {
                        Vf(n, r, Uh(jh, e, t), Uh(Ch, e, t))
                    } catch (vD) {
                        Ch(e, vD, t)
                    }
                })) : (t.value = r, t.state = 1, xh(t, !1))
            } catch (vD) {
                Ch({
                    done: !1
                }, vD, t)
            }
        }
    };
if (fh && (yh = (gh = function(t) {
        Zf(this, yh), Kf(t), Vf(Bf, this);
        var r = ph(this);
        try {
            t(Uh(jh, r), Uh(Ch, r))
        } catch (vD) {
            Ch(r, vD)
        }
    }).prototype, (Bf = function(t) {
        vh(this, {
            type: sh,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: new ih,
            rejection: !1,
            state: 0,
            value: null
        })
    }).prototype = Wf(yh, "then", (function(t, r) {
        var e = ph(this),
            n = Eh(th(this, gh));
        return e.parent = !0, n.ok = !Qf(t) || t, n.fail = Qf(r) && r, n.domain = qf ? bh.domain : void 0, 0 === e.state ? e.reactions.add(n) : eh((function() {
            Ih(n, e)
        })), n.promise
    })), Ff = function() {
        var t = new Bf,
            r = ph(t);
        this.promise = t, this.resolve = Uh(jh, r), this.reject = Uh(Ch, r)
    }, ch.f = Eh = function(t) {
        return t === gh || undefined === t ? new Ff(t) : Sh(t)
    }, Qf(uh) && dh !== Object.prototype)) {
    Hf = dh.then, lh || Wf(dh, "then", (function(t, r) {
        var e = this;
        return new gh((function(t, r) {
            Vf(Hf, e, t, r)
        })).then(t, r)
    }), {
        unsafe: !0
    });
    try {
        delete dh.constructor
    } catch (vD) {}
    Gf && Gf(dh, yh)
}
zf({
    global: !0,
    constructor: !0,
    wrap: !0,
    forced: fh
}, {
    Promise: gh
}), Yf(gh, sh, !1), Jf(sh);
var _h = aa,
    Nh = rr("iterator"),
    Dh = Array.prototype,
    Mh = function(t) {
        return void 0 !== t && (_h.Array === t || Dh[Nh] === t)
    },
    Bh = jo,
    Fh = bt,
    Hh = L,
    zh = aa,
    qh = rr("iterator"),
    $h = function(t) {
        if (!Hh(t)) return Fh(t, qh) || Fh(t, "@@iterator") || zh[Bh(t)]
    },
    Vh = s,
    Wh = yt,
    Gh = Cr,
    Yh = pt,
    Jh = $h,
    Kh = TypeError,
    Qh = function(t, r) {
        var e = arguments.length < 2 ? Jh(t) : r;
        if (Wh(e)) return Gh(Vh(e, t));
        throw new Kh(Yh(t) + " is not iterable")
    },
    Xh = s,
    Zh = Cr,
    tl = bt,
    rl = function(t, r, e) {
        var n, o;
        Zh(t);
        try {
            if (!(n = tl(t, "return"))) {
                if ("throw" === r) throw e;
                return e
            }
            n = Xh(n, t)
        } catch (vD) {
            o = !0, n = vD
        }
        if ("throw" === r) throw e;
        if (o) throw n;
        return Zh(n), e
    },
    el = ls,
    nl = s,
    ol = Cr,
    il = pt,
    al = Mh,
    ul = ln,
    cl = V,
    sl = Qh,
    fl = $h,
    hl = rl,
    ll = TypeError,
    pl = function(t, r) {
        this.stopped = t, this.result = r
    },
    vl = pl.prototype,
    dl = function(t, r, e) {
        var n, o, i, a, u, c, s, f = e && e.that,
            h = !(!e || !e.AS_ENTRIES),
            l = !(!e || !e.IS_RECORD),
            p = !(!e || !e.IS_ITERATOR),
            v = !(!e || !e.INTERRUPTED),
            d = el(r, f),
            g = function(t) {
                return n && hl(n, "normal", t), new pl(!0, t)
            },
            y = function(t) {
                return h ? (ol(t), v ? d(t[0], t[1], g) : d(t[0], t[1])) : v ? d(t, g) : d(t)
            };
        if (l) n = t.iterator;
        else if (p) n = t;
        else {
            if (!(o = fl(t))) throw new ll(il(t) + " is not iterable");
            if (al(o)) {
                for (i = 0, a = ul(t); a > i; i++)
                    if ((u = y(t[i])) && cl(vl, u)) return u;
                return new pl(!1)
            }
            n = sl(t, o)
        }
        for (c = l ? t.next : n.next; !(s = nl(c, n)).done;) {
            try {
                u = y(s.value)
            } catch (vD) {
                hl(n, "throw", vD)
            }
            if ("object" == typeof u && u && cl(vl, u)) return u
        }
        return new pl(!1)
    },
    gl = rr("iterator"),
    yl = !1;
try {
    var ml = 0,
        wl = {
            next: function() {
                return {
                    done: !!ml++
                }
            },
            return: function() {
                yl = !0
            }
        };
    wl[gl] = function() {
        return this
    }, Array.from(wl, (function() {
        throw 2
    }))
} catch (vD) {}
var bl = function(t, r) {
        try {
            if (!r && !yl) return !1
        } catch (vD) {
            return !1
        }
        var e = !1;
        try {
            var n = {};
            n[gl] = function() {
                return {
                    next: function() {
                        return {
                            done: e = !0
                        }
                    }
                }
            }, t(n)
        } catch (vD) {}
        return e
    },
    El = Ef,
    Sl = jf.CONSTRUCTOR || !bl((function(t) {
        El.all(t).then(void 0, (function() {}))
    })),
    Rl = s,
    Al = yt,
    Ol = _f,
    Il = bf,
    xl = dl;
ro({
    target: "Promise",
    stat: !0,
    forced: Sl
}, {
    all: function(t) {
        var r = this,
            e = Ol.f(r),
            n = e.resolve,
            o = e.reject,
            i = Il((function() {
                var e = Al(r.resolve),
                    i = [],
                    a = 0,
                    u = 1;
                xl(t, (function(t) {
                    var c = a++,
                        s = !1;
                    u++, Rl(e, r, t).then((function(t) {
                        s || (s = !0, i[c] = t, --u || n(i))
                    }), o)
                })), --u || n(i)
            }));
        return i.error && o(i.value), e.promise
    }
});
var Tl = ro,
    Pl = jf.CONSTRUCTOR,
    kl = Ef,
    Ll = $,
    Ul = B,
    Cl = Qe,
    jl = kl && kl.prototype;
if (Tl({
        target: "Promise",
        proto: !0,
        forced: Pl,
        real: !0
    }, {
        catch: function(t) {
            return this.then(void 0, t)
        }
    }), Ul(kl)) {
    var _l = Ll("Promise").prototype.catch;
    jl.catch !== _l && Cl(jl, "catch", _l, {
        unsafe: !0
    })
}
var Nl = s,
    Dl = yt,
    Ml = _f,
    Bl = bf,
    Fl = dl;
ro({
    target: "Promise",
    stat: !0,
    forced: Sl
}, {
    race: function(t) {
        var r = this,
            e = Ml.f(r),
            n = e.reject,
            o = Bl((function() {
                var o = Dl(r.resolve);
                Fl(t, (function(t) {
                    Nl(o, r, t).then(e.resolve, n)
                }))
            }));
        return o.error && n(o.value), e.promise
    }
});
var Hl = _f;
ro({
    target: "Promise",
    stat: !0,
    forced: jf.CONSTRUCTOR
}, {
    reject: function(t) {
        var r = Hl.f(this);
        return (0, r.reject)(t), r.promise
    }
});
var zl = Cr,
    ql = H,
    $l = _f,
    Vl = function(t, r) {
        if (zl(t), ql(r) && r.constructor === t) return r;
        var e = $l.f(t);
        return (0, e.resolve)(r), e.promise
    },
    Wl = ro,
    Gl = jf.CONSTRUCTOR,
    Yl = Vl;
$("Promise"), Wl({
    target: "Promise",
    stat: !0,
    forced: Gl
}, {
    resolve: function(t) {
        return Yl(this, t)
    }
});
var Jl = ro,
    Kl = Ef,
    Ql = o,
    Xl = $,
    Zl = B,
    tp = is,
    rp = Vl,
    ep = Qe,
    np = Kl && Kl.prototype;
if (Jl({
        target: "Promise",
        proto: !0,
        real: !0,
        forced: !!Kl && Ql((function() {
            np.finally.call({
                then: function() {}
            }, (function() {}))
        }))
    }, {
        finally: function(t) {
            var r = tp(this, Xl("Promise")),
                e = Zl(t);
            return this.then(e ? function(e) {
                return rp(r, t()).then((function() {
                    return e
                }))
            } : t, e ? function(e) {
                return rp(r, t()).then((function() {
                    throw e
                }))
            } : t)
        }
    }), Zl(Kl)) {
    var op = Xl("Promise").prototype.finally;
    np.finally !== op && ep(np, "finally", op, {
        unsafe: !0
    })
}
var ip = Cr,
    ap = function() {
        var t = ip(this),
            r = "";
        return t.hasIndices && (r += "d"), t.global && (r += "g"), t.ignoreCase && (r += "i"), t.multiline && (r += "m"), t.dotAll && (r += "s"), t.unicode && (r += "u"), t.unicodeSets && (r += "v"), t.sticky && (r += "y"), r
    },
    up = o,
    cp = e.RegExp,
    sp = up((function() {
        var t = cp("a", "y");
        return t.lastIndex = 2, null !== t.exec("abcd")
    })),
    fp = sp || up((function() {
        return !cp("a", "y").sticky
    })),
    hp = {
        BROKEN_CARET: sp || up((function() {
            var t = cp("^r", "gy");
            return t.lastIndex = 2, null !== t.exec("str")
        })),
        MISSED_STICKY: fp,
        UNSUPPORTED_Y: sp
    },
    lp = o,
    pp = e.RegExp,
    vp = lp((function() {
        var t = pp(".", "s");
        return !(t.dotAll && t.test("\n") && "s" === t.flags)
    })),
    dp = o,
    gp = e.RegExp,
    yp = dp((function() {
        var t = gp("(?<a>b)", "g");
        return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c")
    })),
    mp = s,
    wp = E,
    bp = Do,
    Ep = ap,
    Sp = hp,
    Rp = Yi,
    Ap = Te.get,
    Op = vp,
    Ip = yp,
    xp = _t("native-string-replace", String.prototype.replace),
    Tp = RegExp.prototype.exec,
    Pp = Tp,
    kp = wp("".charAt),
    Lp = wp("".indexOf),
    Up = wp("".replace),
    Cp = wp("".slice),
    jp = function() {
        var t = /a/,
            r = /b*/g;
        return mp(Tp, t, "a"), mp(Tp, r, "a"), 0 !== t.lastIndex || 0 !== r.lastIndex
    }(),
    _p = Sp.BROKEN_CARET,
    Np = void 0 !== /()??/.exec("")[1];
(jp || Np || _p || Op || Ip) && (Pp = function(t) {
    var r, e, n, o, i, a, u, c = this,
        s = Ap(c),
        f = bp(t),
        h = s.raw;
    if (h) return h.lastIndex = c.lastIndex, r = mp(Pp, h, f), c.lastIndex = h.lastIndex, r;
    var l = s.groups,
        p = _p && c.sticky,
        v = mp(Ep, c),
        d = c.source,
        g = 0,
        y = f;
    if (p && (v = Up(v, "y", ""), -1 === Lp(v, "g") && (v += "g"), y = Cp(f, c.lastIndex), c.lastIndex > 0 && (!c.multiline || c.multiline && "\n" !== kp(f, c.lastIndex - 1)) && (d = "(?: " + d + ")", y = " " + y, g++), e = new RegExp("^(?:" + d + ")", v)), Np && (e = new RegExp("^" + d + "$(?!\\s)", v)), jp && (n = c.lastIndex), o = mp(Tp, p ? e : c, y), p ? o ? (o.input = Cp(o.input, g), o[0] = Cp(o[0], g), o.index = c.lastIndex, c.lastIndex += o[0].length) : c.lastIndex = 0 : jp && o && (c.lastIndex = c.global ? o.index + o[0].length : n), Np && o && o.length > 1 && mp(xp, o[0], e, (function() {
            for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (o[i] = void 0)
        })), o && l)
        for (o.groups = a = Rp(null), i = 0; i < l.length; i++) a[(u = l[i])[0]] = o[u[1]];
    return o
});
var Dp = Pp;
ro({
    target: "RegExp",
    proto: !0,
    forced: /./.exec !== Dp
}, {
    exec: Dp
});
var Mp = E,
    Bp = Set.prototype,
    Fp = {
        Set: Set,
        add: Mp(Bp.add),
        has: Mp(Bp.has),
        remove: Mp(Bp.delete),
        proto: Bp
    },
    Hp = Fp.has,
    zp = function(t) {
        return Hp(t), t
    },
    qp = s,
    $p = function(t, r, e) {
        for (var n, o, i = e ? t : t.iterator, a = t.next; !(n = qp(a, i)).done;)
            if (void 0 !== (o = r(n.value))) return o
    },
    Vp = E,
    Wp = $p,
    Gp = Fp.Set,
    Yp = Fp.proto,
    Jp = Vp(Yp.forEach),
    Kp = Vp(Yp.keys),
    Qp = Kp(new Gp).next,
    Xp = function(t, r, e) {
        return e ? Wp({
            iterator: Kp(t),
            next: Qp
        }, r) : Jp(t, r)
    },
    Zp = Xp,
    tv = Fp.Set,
    rv = Fp.add,
    ev = function(t) {
        var r = new tv;
        return Zp(t, (function(t) {
            rv(r, t)
        })), r
    },
    nv = fo(Fp.proto, "size", "get") || function(t) {
        return t.size
    },
    ov = function(t) {
        return {
            iterator: t,
            next: t.next,
            done: !1
        }
    },
    iv = yt,
    av = Cr,
    uv = s,
    cv = en,
    sv = ov,
    fv = "Invalid size",
    hv = RangeError,
    lv = TypeError,
    pv = Math.max,
    vv = function(t, r) {
        this.set = t, this.size = pv(r, 0), this.has = iv(t.has), this.keys = iv(t.keys)
    };
vv.prototype = {
    getIterator: function() {
        return sv(av(uv(this.keys, this.set)))
    },
    includes: function(t) {
        return uv(this.has, this.set, t)
    }
};
var dv = function(t) {
        av(t);
        var r = +t.size;
        if (r != r) throw new lv(fv);
        var e = cv(r);
        if (e < 0) throw new hv(fv);
        return new vv(t, e)
    },
    gv = zp,
    yv = ev,
    mv = nv,
    wv = dv,
    bv = Xp,
    Ev = $p,
    Sv = Fp.has,
    Rv = Fp.remove,
    Av = $,
    Ov = function(t) {
        return {
            size: t,
            has: function() {
                return !1
            },
            keys: function() {
                return {
                    next: function() {
                        return {
                            done: !0
                        }
                    }
                }
            }
        }
    },
    Iv = function(t) {
        var r = Av("Set");
        try {
            (new r)[t](Ov(0));
            try {
                return (new r)[t](Ov(-1)), !1
            } catch (e) {
                return !0
            }
        } catch (vD) {
            return !1
        }
    },
    xv = function(t) {
        var r = gv(this),
            e = wv(t),
            n = yv(r);
        return mv(r) <= e.size ? bv(r, (function(t) {
            e.includes(t) && Rv(n, t)
        })) : Ev(e.getIterator(), (function(t) {
            Sv(r, t) && Rv(n, t)
        })), n
    };
ro({
    target: "Set",
    proto: !0,
    real: !0,
    forced: !Iv("difference")
}, {
    difference: xv
});
var Tv = zp,
    Pv = nv,
    kv = dv,
    Lv = Xp,
    Uv = $p,
    Cv = Fp.Set,
    jv = Fp.add,
    _v = Fp.has,
    Nv = o,
    Dv = function(t) {
        var r = Tv(this),
            e = kv(t),
            n = new Cv;
        return Pv(r) > e.size ? Uv(e.getIterator(), (function(t) {
            _v(r, t) && jv(n, t)
        })) : Lv(r, (function(t) {
            e.includes(t) && jv(n, t)
        })), n
    };
ro({
    target: "Set",
    proto: !0,
    real: !0,
    forced: !Iv("intersection") || Nv((function() {
        return "3,2" !== String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2]))))
    }))
}, {
    intersection: Dv
});
var Mv = zp,
    Bv = Fp.has,
    Fv = nv,
    Hv = dv,
    zv = Xp,
    qv = $p,
    $v = rl,
    Vv = function(t) {
        var r = Mv(this),
            e = Hv(t);
        if (Fv(r) <= e.size) return !1 !== zv(r, (function(t) {
            if (e.includes(t)) return !1
        }), !0);
        var n = e.getIterator();
        return !1 !== qv(n, (function(t) {
            if (Bv(r, t)) return $v(n, "normal", !1)
        }))
    };
ro({
    target: "Set",
    proto: !0,
    real: !0,
    forced: !Iv("isDisjointFrom")
}, {
    isDisjointFrom: Vv
});
var Wv = zp,
    Gv = nv,
    Yv = Xp,
    Jv = dv,
    Kv = function(t) {
        var r = Wv(this),
            e = Jv(t);
        return !(Gv(r) > e.size) && !1 !== Yv(r, (function(t) {
            if (!e.includes(t)) return !1
        }), !0)
    };
ro({
    target: "Set",
    proto: !0,
    real: !0,
    forced: !Iv("isSubsetOf")
}, {
    isSubsetOf: Kv
});
var Qv = zp,
    Xv = Fp.has,
    Zv = nv,
    td = dv,
    rd = $p,
    ed = rl,
    nd = function(t) {
        var r = Qv(this),
            e = td(t);
        if (Zv(r) < e.size) return !1;
        var n = e.getIterator();
        return !1 !== rd(n, (function(t) {
            if (!Xv(r, t)) return ed(n, "normal", !1)
        }))
    };
ro({
    target: "Set",
    proto: !0,
    real: !0,
    forced: !Iv("isSupersetOf")
}, {
    isSupersetOf: nd
});
var od = zp,
    id = ev,
    ad = dv,
    ud = $p,
    cd = Fp.add,
    sd = Fp.has,
    fd = Fp.remove,
    hd = function(t) {
        var r = od(this),
            e = ad(t).getIterator(),
            n = id(r);
        return ud(e, (function(t) {
            sd(r, t) ? fd(n, t) : cd(n, t)
        })), n
    };
ro({
    target: "Set",
    proto: !0,
    real: !0,
    forced: !Iv("symmetricDifference")
}, {
    symmetricDifference: hd
});
var ld = zp,
    pd = Fp.add,
    vd = ev,
    dd = dv,
    gd = $p,
    yd = function(t) {
        var r = ld(this),
            e = dd(t).getIterator(),
            n = vd(r);
        return gd(e, (function(t) {
            pd(n, t)
        })), n
    };
ro({
    target: "Set",
    proto: !0,
    real: !0,
    forced: !Iv("union")
}, {
    union: yd
});
var md = ln,
    wd = function(t, r, e) {
        for (var n = 0, o = arguments.length > 2 ? e : md(r), i = new t(o); o > n;) i[n] = r[n++];
        return i
    },
    bd = ls,
    Ed = k,
    Sd = Mt,
    Rd = lr,
    Ad = ln,
    Od = Yi,
    Id = wd,
    xd = Array,
    Td = E([].push),
    Pd = function(t, r, e, n) {
        for (var o, i, a, u = Sd(t), c = Ed(u), s = bd(r, e), f = Od(null), h = Ad(c), l = 0; h > l; l++) a = c[l], (i = Rd(s(a, l, u))) in f ? Td(f[i], a) : f[i] = [a];
        if (n && (o = n(u)) !== xd)
            for (i in f) f[i] = Id(o, f[i]);
        return f
    },
    kd = ta;
ro({
    target: "Array",
    proto: !0
}, {
    group: function(t) {
        return Pd(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
}), kd("group");
var Ld = i,
    Ud = Tr,
    Cd = g,
    jd = function(t, r, e) {
        Ld ? Ud.f(t, r, Cd(0, e)) : t[r] = e
    },
    _d = ro,
    Nd = e,
    Dd = Cc,
    Md = Cr,
    Bd = B,
    Fd = da,
    Hd = Oc,
    zd = jd,
    qd = o,
    $d = Ht,
    Vd = Aa.IteratorPrototype,
    Wd = i,
    Gd = "constructor",
    Yd = "Iterator",
    Jd = rr("toStringTag"),
    Kd = TypeError,
    Qd = Nd[Yd],
    Xd = !Bd(Qd) || Qd.prototype !== Vd || !qd((function() {
        Qd({})
    })),
    Zd = function() {
        if (Dd(this, Vd), Fd(this) === Vd) throw new Kd("Abstract class Iterator not directly constructable")
    },
    tg = function(t, r) {
        Wd ? Hd(Vd, t, {
            configurable: !0,
            get: function() {
                return r
            },
            set: function(r) {
                if (Md(this), this === Vd) throw new Kd("You can't redefine this property");
                $d(this, t) ? this[t] = r : zd(this, t, r)
            }
        }) : Vd[t] = r
    };
$d(Vd, Jd) || tg(Jd, Yd), !Xd && $d(Vd, Gd) && Vd[Gd] !== Object || tg(Gd, Zd), Zd.prototype = Vd, _d({
    global: !0,
    constructor: !0,
    forced: Xd
}, {
    Iterator: Zd
});
var rg = Qe,
    eg = function(t, r, e) {
        for (var n in r) rg(t, n, r[n], e);
        return t
    },
    ng = s,
    og = Yi,
    ig = Gr,
    ag = eg,
    ug = Te,
    cg = bt,
    sg = Aa.IteratorPrototype,
    fg = eu,
    hg = rl,
    lg = rr("toStringTag"),
    pg = "IteratorHelper",
    vg = "WrapForValidIterator",
    dg = ug.set,
    gg = function(t) {
        var r = ug.getterFor(t ? vg : pg);
        return ag(og(sg), {
            next: function() {
                var e = r(this);
                if (t) return e.nextHandler();
                try {
                    var n = e.done ? void 0 : e.nextHandler();
                    return fg(n, e.done)
                } catch (vD) {
                    throw e.done = !0, vD
                }
            },
            return: function() {
                var e = r(this),
                    n = e.iterator;
                if (e.done = !0, t) {
                    var o = cg(n, "return");
                    return o ? ng(o, n) : fg(void 0, !0)
                }
                if (e.inner) try {
                    hg(e.inner.iterator, "normal")
                } catch (vD) {
                    return hg(n, "throw", vD)
                }
                return n && hg(n, "normal"), fg(void 0, !0)
            }
        })
    },
    yg = gg(!0),
    mg = gg(!1);
ig(mg, lg, "Iterator Helper");
var wg = function(t, r) {
        var e = function(e, n) {
            n ? (n.iterator = e.iterator, n.next = e.next) : n = e, n.type = r ? vg : pg, n.nextHandler = t, n.counter = 0, n.done = !1, dg(this, n)
        };
        return e.prototype = r ? yg : mg, e
    },
    bg = Cr,
    Eg = rl,
    Sg = function(t, r, e, n) {
        try {
            return n ? r(bg(e)[0], e[1]) : r(e)
        } catch (vD) {
            Eg(t, "throw", vD)
        }
    },
    Rg = ro,
    Ag = s,
    Og = yt,
    Ig = Cr,
    xg = ov,
    Tg = Sg,
    Pg = wg((function() {
        for (var t, r, e = this.iterator, n = this.predicate, o = this.next;;) {
            if (t = Ig(Ag(o, e)), this.done = !!t.done) return;
            if (r = t.value, Tg(e, n, [r, this.counter++], !0)) return r
        }
    }));
Rg({
    target: "Iterator",
    proto: !0,
    real: !0,
    forced: false
}, {
    filter: function(t) {
        return Ig(this), Og(t), new Pg(xg(this), {
            predicate: t
        })
    }
});
var kg = dl,
    Lg = yt,
    Ug = Cr,
    Cg = ov;
ro({
    target: "Iterator",
    proto: !0,
    real: !0
}, {
    find: function(t) {
        Ug(this), Lg(t);
        var r = Cg(this),
            e = 0;
        return kg(r, (function(r, n) {
            if (t(r, e++)) return n(r)
        }), {
            IS_RECORD: !0,
            INTERRUPTED: !0
        }).result
    }
});
var jg = dl,
    _g = yt,
    Ng = Cr,
    Dg = ov;
ro({
    target: "Iterator",
    proto: !0,
    real: !0
}, {
    forEach: function(t) {
        Ng(this), _g(t);
        var r = Dg(this),
            e = 0;
        jg(r, (function(r) {
            t(r, e++)
        }), {
            IS_RECORD: !0
        })
    }
});
var Mg = s,
    Bg = yt,
    Fg = Cr,
    Hg = ov,
    zg = Sg,
    qg = wg((function() {
        var t = this.iterator,
            r = Fg(Mg(this.next, t));
        if (!(this.done = !!r.done)) return zg(t, this.mapper, [r.value, this.counter++], !0)
    }));
ro({
    target: "Iterator",
    proto: !0,
    real: !0,
    forced: false
}, {
    map: function(t) {
        return Fg(this), Bg(t), new qg(Hg(this), {
            mapper: t
        })
    }
});
var $g = dl,
    Vg = yt,
    Wg = Cr,
    Gg = ov,
    Yg = TypeError;
ro({
    target: "Iterator",
    proto: !0,
    real: !0
}, {
    reduce: function(t) {
        Wg(this), Vg(t);
        var r = Gg(this),
            e = arguments.length < 2,
            n = e ? void 0 : arguments[1],
            o = 0;
        if ($g(r, (function(r) {
                e ? (e = !1, n = r) : n = t(n, r, o), o++
            }), {
                IS_RECORD: !0
            }), e) throw new Yg("Reduce of empty iterator with no initial value");
        return n
    }
});
var Jg = Cr,
    Kg = dl,
    Qg = ov,
    Xg = [].push;
ro({
    target: "Iterator",
    proto: !0,
    real: !0
}, {
    toArray: function() {
        var t = [];
        return Kg(Qg(Jg(this)), Xg, {
            that: t,
            IS_RECORD: !0
        }), t
    }
});
var Zg = E,
    ty = Ht,
    ry = SyntaxError,
    ey = parseInt,
    ny = String.fromCharCode,
    oy = Zg("".charAt),
    iy = Zg("".slice),
    ay = Zg(/./.exec),
    uy = {
        '\\"': '"',
        "\\\\": "\\",
        "\\/": "/",
        "\\b": "\b",
        "\\f": "\f",
        "\\n": "\n",
        "\\r": "\r",
        "\\t": "\t"
    },
    cy = /^[\da-f]{4}$/i,
    sy = /^[\u0000-\u001F]$/,
    fy = ro,
    hy = i,
    ly = e,
    py = $,
    vy = E,
    dy = s,
    gy = B,
    yy = H,
    my = yu,
    wy = Ht,
    by = Do,
    Ey = ln,
    Sy = jd,
    Ry = o,
    Ay = function(t, r) {
        for (var e = !0, n = ""; r < t.length;) {
            var o = oy(t, r);
            if ("\\" === o) {
                var i = iy(t, r, r + 2);
                if (ty(uy, i)) n += uy[i], r += 2;
                else {
                    if ("\\u" !== i) throw new ry('Unknown escape sequence: "' + i + '"');
                    var a = iy(t, r += 2, r + 4);
                    if (!ay(cy, a)) throw new ry("Bad Unicode escape at: " + r);
                    n += ny(ey(a, 16)), r += 4
                }
            } else {
                if ('"' === o) {
                    e = !1, r++;
                    break
                }
                if (ay(sy, o)) throw new ry("Bad control character in string literal at: " + r);
                n += o, r++
            }
        }
        if (e) throw new ry("Unterminated string at: " + r);
        return {
            value: n,
            end: r
        }
    },
    Oy = it,
    Iy = ly.JSON,
    xy = ly.Number,
    Ty = ly.SyntaxError,
    Py = Iy && Iy.parse,
    ky = py("Object", "keys"),
    Ly = Object.getOwnPropertyDescriptor,
    Uy = vy("".charAt),
    Cy = vy("".slice),
    jy = vy(/./.exec),
    _y = vy([].push),
    Ny = /^\d$/,
    Dy = /^[1-9]$/,
    My = /^[\d-]$/,
    By = /^[\t\n\r ]$/,
    Fy = function(t, r, e, n) {
        var o, i, a, u, c, s = t[r],
            f = n && s === n.value,
            h = f && "string" == typeof n.source ? {
                source: n.source
            } : {};
        if (yy(s)) {
            var l = my(s),
                p = f ? n.nodes : l ? [] : {};
            if (l)
                for (o = p.length, a = Ey(s), u = 0; u < a; u++) Hy(s, u, Fy(s, "" + u, e, u < o ? p[u] : void 0));
            else
                for (i = ky(s), a = Ey(i), u = 0; u < a; u++) c = i[u], Hy(s, c, Fy(s, c, e, wy(p, c) ? p[c] : void 0))
        }
        return dy(e, t, r, s, h)
    },
    Hy = function(t, r, e) {
        if (hy) {
            var n = Ly(t, r);
            if (n && !n.configurable) return
        }
        void 0 === e ? delete t[r] : Sy(t, r, e)
    },
    zy = function(t, r, e, n) {
        this.value = t, this.end = r, this.source = e, this.nodes = n
    },
    qy = function(t, r) {
        this.source = t, this.index = r
    };
qy.prototype = {
    fork: function(t) {
        return new qy(this.source, t)
    },
    parse: function() {
        var t = this.source,
            r = this.skip(By, this.index),
            e = this.fork(r),
            n = Uy(t, r);
        if (jy(My, n)) return e.number();
        switch (n) {
            case "{":
                return e.object();
            case "[":
                return e.array();
            case '"':
                return e.string();
            case "t":
                return e.keyword(!0);
            case "f":
                return e.keyword(!1);
            case "n":
                return e.keyword(null)
        }
        throw new Ty('Unexpected character: "' + n + '" at: ' + r)
    },
    node: function(t, r, e, n, o) {
        return new zy(r, n, t ? null : Cy(this.source, e, n), o)
    },
    object: function() {
        for (var t = this.source, r = this.index + 1, e = !1, n = {}, o = {}; r < t.length;) {
            if (r = this.until(['"', "}"], r), "}" === Uy(t, r) && !e) {
                r++;
                break
            }
            var i = this.fork(r).string(),
                a = i.value;
            r = i.end, r = this.until([":"], r) + 1, r = this.skip(By, r), i = this.fork(r).parse(), Sy(o, a, i), Sy(n, a, i.value), r = this.until([",", "}"], i.end);
            var u = Uy(t, r);
            if ("," === u) e = !0, r++;
            else if ("}" === u) {
                r++;
                break
            }
        }
        return this.node(1, n, this.index, r, o)
    },
    array: function() {
        for (var t = this.source, r = this.index + 1, e = !1, n = [], o = []; r < t.length;) {
            if (r = this.skip(By, r), "]" === Uy(t, r) && !e) {
                r++;
                break
            }
            var i = this.fork(r).parse();
            if (_y(o, i), _y(n, i.value), r = this.until([",", "]"], i.end), "," === Uy(t, r)) e = !0, r++;
            else if ("]" === Uy(t, r)) {
                r++;
                break
            }
        }
        return this.node(1, n, this.index, r, o)
    },
    string: function() {
        var t = this.index,
            r = Ay(this.source, this.index + 1);
        return this.node(0, r.value, t, r.end)
    },
    number: function() {
        var t = this.source,
            r = this.index,
            e = r;
        if ("-" === Uy(t, e) && e++, "0" === Uy(t, e)) e++;
        else {
            if (!jy(Dy, Uy(t, e))) throw new Ty("Failed to parse number at: " + e);
            e = this.skip(Ny, e + 1)
        }
        if (("." === Uy(t, e) && (e = this.skip(Ny, e + 1)), "e" === Uy(t, e) || "E" === Uy(t, e)) && (e++, "+" !== Uy(t, e) && "-" !== Uy(t, e) || e++, e === (e = this.skip(Ny, e)))) throw new Ty("Failed to parse number's exponent value at: " + e);
        return this.node(0, xy(Cy(t, r, e)), r, e)
    },
    keyword: function(t) {
        var r = "" + t,
            e = this.index,
            n = e + r.length;
        if (Cy(this.source, e, n) !== r) throw new Ty("Failed to parse value at: " + e);
        return this.node(0, t, e, n)
    },
    skip: function(t, r) {
        for (var e = this.source; r < e.length && jy(t, Uy(e, r)); r++);
        return r
    },
    until: function(t, r) {
        r = this.skip(By, r);
        for (var e = Uy(this.source, r), n = 0; n < t.length; n++)
            if (t[n] === e) return r;
        throw new Ty('Unexpected character: "' + e + '" at: ' + r)
    }
};
var $y = Ry((function() {
        var t, r = "9007199254740993";
        return Py(r, (function(r, e, n) {
            t = n.source
        })), t !== r
    })),
    Vy = Oy && !Ry((function() {
        return 1 / Py("-0 \t") != -1 / 0
    }));
fy({
    target: "JSON",
    stat: !0,
    forced: $y
}, {
    parse: function(t, r) {
        return Vy && !gy(r) ? Py(t) : function(t, r) {
            t = by(t);
            var e = new qy(t, 0),
                n = e.parse(),
                o = n.value,
                i = e.skip(By, n.end);
            if (i < t.length) throw new Ty('Unexpected extra character: "' + Uy(t, i) + '" after the parsed data at: ' + i);
            return gy(r) ? Fy({
                "": o
            }, "", r, n) : o
        }(t, r)
    }
});
var Wy = gr("span").classList,
    Gy = Wy && Wy.constructor && Wy.constructor.prototype,
    Yy = Gy === Object.prototype ? void 0 : Gy,
    Jy = e,
    Ky = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    },
    Qy = Yy,
    Xy = vu,
    Zy = Gr,
    tm = Ta,
    rm = rr("iterator"),
    em = Xy.values,
    nm = function(t, r) {
        if (t) {
            if (t[rm] !== em) try {
                Zy(t, rm, em)
            } catch (vD) {
                t[rm] = em
            }
            if (tm(t, r, !0), Ky[r])
                for (var e in Xy)
                    if (t[e] !== Xy[e]) try {
                        Zy(t, e, Xy[e])
                    } catch (vD) {
                        t[e] = Xy[e]
                    }
        }
    };
for (var om in Ky) nm(Jy[om] && Jy[om].prototype, om);
nm(Qy, "DOMTokenList");
var im = ro,
    am = e,
    um = Oc,
    cm = i,
    sm = TypeError,
    fm = Object.defineProperty,
    hm = am.self !== am;
try {
    if (cm) {
        var lm = Object.getOwnPropertyDescriptor(am, "self");
        !hm && lm && lm.get && lm.enumerable || um(am, "self", {
            get: function() {
                return am
            },
            set: function(t) {
                if (this !== am) throw new sm("Illegal invocation");
                fm(am, "self", {
                    value: t,
                    writable: !0,
                    configurable: !0,
                    enumerable: !0
                })
            },
            configurable: !0,
            enumerable: !0
        })
    } else im({
        global: !0,
        simple: !0,
        forced: hm
    }, {
        self: am
    })
} catch (vD) {}
var pm = s,
    vm = Qe,
    dm = Dp,
    gm = o,
    ym = rr,
    mm = Gr,
    wm = ym("species"),
    bm = RegExp.prototype,
    Em = E,
    Sm = en,
    Rm = Do,
    Am = j,
    Om = Em("".charAt),
    Im = Em("".charCodeAt),
    xm = Em("".slice),
    Tm = function(t) {
        return function(r, e) {
            var n, o, i = Rm(Am(r)),
                a = Sm(e),
                u = i.length;
            return a < 0 || a >= u ? t ? "" : void 0 : (n = Im(i, a)) < 55296 || n > 56319 || a + 1 === u || (o = Im(i, a + 1)) < 56320 || o > 57343 ? t ? Om(i, a) : n : t ? xm(i, a, a + 2) : o - 56320 + (n - 55296 << 10) + 65536
        }
    },
    Pm = {
        codeAt: Tm(!1),
        charAt: Tm(!0)
    },
    km = Pm.charAt,
    Lm = function(t, r, e) {
        return r + (e ? km(t, r).length : 1)
    },
    Um = E,
    Cm = Mt,
    jm = Math.floor,
    _m = Um("".charAt),
    Nm = Um("".replace),
    Dm = Um("".slice),
    Mm = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
    Bm = /\$([$&'`]|\d{1,2})/g,
    Fm = s,
    Hm = Cr,
    zm = B,
    qm = O,
    $m = Dp,
    Vm = TypeError,
    Wm = function(t, r) {
        var e = t.exec;
        if (zm(e)) {
            var n = Fm(e, t, r);
            return null !== n && Hm(n), n
        }
        if ("RegExp" === qm(t)) return Fm($m, t, r);
        throw new Vm("RegExp#exec called on incompatible receiver")
    },
    Gm = uo,
    Ym = s,
    Jm = E,
    Km = function(t, r, e, n) {
        var o = ym(t),
            i = !gm((function() {
                var r = {};
                return r[o] = function() {
                    return 7
                }, 7 !== "" [t](r)
            })),
            a = i && !gm((function() {
                var r = !1,
                    e = /a/;
                return "split" === t && ((e = {}).constructor = {}, e.constructor[wm] = function() {
                    return e
                }, e.flags = "", e[o] = /./ [o]), e.exec = function() {
                    return r = !0, null
                }, e[o](""), !r
            }));
        if (!i || !a || e) {
            var u = /./ [o],
                c = r(o, "" [t], (function(t, r, e, n, o) {
                    var a = r.exec;
                    return a === dm || a === bm.exec ? i && !o ? {
                        done: !0,
                        value: pm(u, r, e, n)
                    } : {
                        done: !0,
                        value: pm(t, e, r, n)
                    } : {
                        done: !1
                    }
                }));
            vm(String.prototype, t, c[0]), vm(bm, o, c[1])
        }
        n && mm(bm[o], "sham", !0)
    },
    Qm = o,
    Xm = Cr,
    Zm = B,
    tw = L,
    rw = en,
    ew = fn,
    nw = Do,
    ow = j,
    iw = Lm,
    aw = bt,
    uw = function(t, r, e, n, o, i) {
        var a = e + t.length,
            u = n.length,
            c = Bm;
        return void 0 !== o && (o = Cm(o), c = Mm), Nm(i, c, (function(i, c) {
            var s;
            switch (_m(c, 0)) {
                case "$":
                    return "$";
                case "&":
                    return t;
                case "`":
                    return Dm(r, 0, e);
                case "'":
                    return Dm(r, a);
                case "<":
                    s = o[Dm(c, 1, -1)];
                    break;
                default:
                    var f = +c;
                    if (0 === f) return i;
                    if (f > u) {
                        var h = jm(f / 10);
                        return 0 === h ? i : h <= u ? void 0 === n[h - 1] ? _m(c, 1) : n[h - 1] + _m(c, 1) : i
                    }
                    s = n[f - 1]
            }
            return void 0 === s ? "" : s
        }))
    },
    cw = Wm,
    sw = rr("replace"),
    fw = Math.max,
    hw = Math.min,
    lw = Jm([].concat),
    pw = Jm([].push),
    vw = Jm("".indexOf),
    dw = Jm("".slice),
    gw = "$0" === "a".replace(/./, "$0"),
    yw = !!/./ [sw] && "" === /./ [sw]("a", "$0");
Km("replace", (function(t, r, e) {
    var n = yw ? "$" : "$0";
    return [function(t, e) {
        var n = ow(this),
            o = tw(t) ? void 0 : aw(t, sw);
        return o ? Ym(o, t, n, e) : Ym(r, nw(n), t, e)
    }, function(t, o) {
        var i = Xm(this),
            a = nw(t);
        if ("string" == typeof o && -1 === vw(o, n) && -1 === vw(o, "$<")) {
            var u = e(r, i, a, o);
            if (u.done) return u.value
        }
        var c = Zm(o);
        c || (o = nw(o));
        var s, f = i.global;
        f && (s = i.unicode, i.lastIndex = 0);
        for (var h, l = []; null !== (h = cw(i, a)) && (pw(l, h), f);) {
            "" === nw(h[0]) && (i.lastIndex = iw(a, ew(i.lastIndex), s))
        }
        for (var p, v = "", d = 0, g = 0; g < l.length; g++) {
            for (var y, m = nw((h = l[g])[0]), w = fw(hw(rw(h.index), a.length), 0), b = [], E = 1; E < h.length; E++) pw(b, void 0 === (p = h[E]) ? p : String(p));
            var S = h.groups;
            if (c) {
                var R = lw([m], b, w, a);
                void 0 !== S && pw(R, S), y = nw(Gm(o, void 0, R))
            } else y = uw(m, a, w, b, S, o);
            w >= d && (v += dw(a, d, w) + y, d = w + m.length)
        }
        return v + dw(a, d)
    }]
}), !!Qm((function() {
    var t = /./;
    return t.exec = function() {
        var t = [];
        return t.groups = {
            a: "7"
        }, t
    }, "7" !== "".replace(t, "$<a>")
})) || !gw || yw);
var mw = "\t\n\v\f\r                　\u2028\u2029\ufeff",
    ww = j,
    bw = Do,
    Ew = mw,
    Sw = E("".replace),
    Rw = RegExp("^[" + Ew + "]+"),
    Aw = RegExp("(^|[^" + Ew + "])[" + Ew + "]+$"),
    Ow = function(t) {
        return function(r) {
            var e = bw(ww(r));
            return 1 & t && (e = Sw(e, Rw, "")), 2 & t && (e = Sw(e, Aw, "$1")), e
        }
    },
    Iw = {
        start: Ow(1),
        end: Ow(2),
        trim: Ow(3)
    },
    xw = te.PROPER,
    Tw = o,
    Pw = mw,
    kw = function(t) {
        return Tw((function() {
            return !!Pw[t]() || "​᠎" !== "​᠎" [t]() || xw && Pw[t].name !== t
        }))
    },
    Lw = Iw.trim;
ro({
    target: "String",
    proto: !0,
    forced: kw("trim")
}, {
    trim: function() {
        return Lw(this)
    }
});
var Uw = ro,
    Cw = i,
    jw = E,
    _w = Ht,
    Nw = B,
    Dw = V,
    Mw = Do,
    Bw = Oc,
    Fw = Mn,
    Hw = e.Symbol,
    zw = Hw && Hw.prototype;
if (Cw && Nw(Hw) && (!("description" in zw) || void 0 !== Hw().description)) {
    var qw = {},
        $w = function() {
            var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : Mw(arguments[0]),
                r = Dw(zw, this) ? new Hw(t) : void 0 === t ? Hw() : Hw(t);
            return "" === t && (qw[r] = !0), r
        };
    Fw($w, Hw), $w.prototype = zw, zw.constructor = $w;
    var Vw = "Symbol(description detection)" === String(Hw("description detection")),
        Ww = jw(zw.valueOf),
        Gw = jw(zw.toString),
        Yw = /^Symbol\((.*)\)[^)]+$/,
        Jw = jw("".replace),
        Kw = jw("".slice);
    Bw(zw, "description", {
        configurable: !0,
        get: function() {
            var t = Ww(this);
            if (_w(qw, t)) return "";
            var r = Gw(t),
                e = Vw ? Kw(r, 7, -1) : Jw(r, Yw, "$1");
            return "" === e ? void 0 : e
        }
    }), Uw({
        global: !0,
        constructor: !0,
        forced: !0
    }, {
        Symbol: $w
    })
}
var Qw = ro,
    Xw = yu,
    Zw = E([].reverse),
    tb = [1, 2];
Qw({
    target: "Array",
    proto: !0,
    forced: String(tb) === String(tb.reverse())
}, {
    reverse: function() {
        return Xw(this) && (this.length = this.length), Zw(this)
    }
});
var rb = pt,
    eb = TypeError,
    nb = function(t, r) {
        if (!delete t[r]) throw new eb("Cannot delete property " + rb(r) + " of " + rb(t))
    },
    ob = Wu,
    ib = Math.floor,
    ab = function(t, r) {
        var e = t.length;
        if (e < 8)
            for (var n, o, i = 1; i < e;) {
                for (o = i, n = t[i]; o && r(t[o - 1], n) > 0;) t[o] = t[--o];
                o !== i++ && (t[o] = n)
            } else
                for (var a = ib(e / 2), u = ab(ob(t, 0, a), r), c = ab(ob(t, a), r), s = u.length, f = c.length, h = 0, l = 0; h < s || l < f;) t[h + l] = h < s && l < f ? r(u[h], c[l]) <= 0 ? u[h++] : c[l++] : h < s ? u[h++] : c[l++];
        return t
    },
    ub = ab,
    cb = Y.match(/firefox\/(\d+)/i),
    sb = !!cb && +cb[1],
    fb = /MSIE|Trident/.test(Y),
    hb = Y.match(/AppleWebKit\/(\d+)\./),
    lb = !!hb && +hb[1],
    pb = ro,
    vb = E,
    db = yt,
    gb = Mt,
    yb = ln,
    mb = nb,
    wb = Do,
    bb = o,
    Eb = ub,
    Sb = Mu,
    Rb = sb,
    Ab = fb,
    Ob = rt,
    Ib = lb,
    xb = [],
    Tb = vb(xb.sort),
    Pb = vb(xb.push),
    kb = bb((function() {
        xb.sort(void 0)
    })),
    Lb = bb((function() {
        xb.sort(null)
    })),
    Ub = Sb("sort"),
    Cb = !bb((function() {
        if (Ob) return Ob < 70;
        if (!(Rb && Rb > 3)) {
            if (Ab) return !0;
            if (Ib) return Ib < 603;
            var t, r, e, n, o = "";
            for (t = 65; t < 76; t++) {
                switch (r = String.fromCharCode(t), t) {
                    case 66:
                    case 69:
                    case 70:
                    case 72:
                        e = 3;
                        break;
                    case 68:
                    case 71:
                        e = 4;
                        break;
                    default:
                        e = 2
                }
                for (n = 0; n < 47; n++) xb.push({
                    k: r + n,
                    v: e
                })
            }
            for (xb.sort((function(t, r) {
                    return r.v - t.v
                })), n = 0; n < xb.length; n++) r = xb[n].k.charAt(0), o.charAt(o.length - 1) !== r && (o += r);
            return "DGBEFHACIJK" !== o
        }
    }));
pb({
    target: "Array",
    proto: !0,
    forced: kb || !Lb || !Ub || !Cb
}, {
    sort: function(t) {
        void 0 !== t && db(t);
        var r = gb(this);
        if (Cb) return void 0 === t ? Tb(r) : Tb(r, t);
        var e, n, o = [],
            i = yb(r);
        for (n = 0; n < i; n++) n in r && Pb(o, r[n]);
        for (Eb(o, function(t) {
                return function(r, e) {
                    return void 0 === e ? -1 : void 0 === r ? 1 : void 0 !== t ? +t(r, e) || 0 : wb(r) > wb(e) ? 1 : -1
                }
            }(t)), e = yb(o), n = 0; n < e;) r[n] = o[n++];
        for (; n < i;) mb(r, n++);
        return r
    }
});
var jb = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView,
    _b = en,
    Nb = fn,
    Db = RangeError,
    Mb = function(t) {
        if (void 0 === t) return 0;
        var r = _b(t),
            e = Nb(r);
        if (r !== e) throw new Db("Wrong length or index");
        return e
    },
    Bb = Math.sign || function(t) {
        var r = +t;
        return 0 === r || r != r ? r : r < 0 ? -1 : 1
    },
    Fb = Math.abs,
    Hb = 2220446049250313e-31,
    zb = 1 / Hb,
    qb = function(t, r, e, n) {
        var o = +t,
            i = Fb(o),
            a = Bb(o);
        if (i < n) return a * function(t) {
            return t + zb - zb
        }(i / n / r) * n * r;
        var u = (1 + r / Hb) * i,
            c = u - (u - i);
        return c > e || c != c ? a * (1 / 0) : a * c
    },
    $b = Math.fround || function(t) {
        return qb(t, 1.1920928955078125e-7, 34028234663852886e22, 11754943508222875e-54)
    },
    Vb = Array,
    Wb = Math.abs,
    Gb = Math.pow,
    Yb = Math.floor,
    Jb = Math.log,
    Kb = Math.LN2,
    Qb = {
        pack: function(t, r, e) {
            var n, o, i, a = Vb(e),
                u = 8 * e - r - 1,
                c = (1 << u) - 1,
                s = c >> 1,
                f = 23 === r ? Gb(2, -24) - Gb(2, -77) : 0,
                h = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0,
                l = 0;
            for ((t = Wb(t)) != t || t === 1 / 0 ? (o = t != t ? 1 : 0, n = c) : (n = Yb(Jb(t) / Kb), t * (i = Gb(2, -n)) < 1 && (n--, i *= 2), (t += n + s >= 1 ? f / i : f * Gb(2, 1 - s)) * i >= 2 && (n++, i /= 2), n + s >= c ? (o = 0, n = c) : n + s >= 1 ? (o = (t * i - 1) * Gb(2, r), n += s) : (o = t * Gb(2, s - 1) * Gb(2, r), n = 0)); r >= 8;) a[l++] = 255 & o, o /= 256, r -= 8;
            for (n = n << r | o, u += r; u > 0;) a[l++] = 255 & n, n /= 256, u -= 8;
            return a[l - 1] |= 128 * h, a
        },
        unpack: function(t, r) {
            var e, n = t.length,
                o = 8 * n - r - 1,
                i = (1 << o) - 1,
                a = i >> 1,
                u = o - 7,
                c = n - 1,
                s = t[c--],
                f = 127 & s;
            for (s >>= 7; u > 0;) f = 256 * f + t[c--], u -= 8;
            for (e = f & (1 << -u) - 1, f >>= -u, u += r; u > 0;) e = 256 * e + t[c--], u -= 8;
            if (0 === f) f = 1 - a;
            else {
                if (f === i) return e ? NaN : s ? -1 / 0 : 1 / 0;
                e += Gb(2, r), f -= a
            }
            return (s ? -1 : 1) * e * Gb(2, f - r)
        }
    },
    Xb = Mt,
    Zb = un,
    tE = ln,
    rE = function(t) {
        for (var r = Xb(this), e = tE(r), n = arguments.length, o = Zb(n > 1 ? arguments[1] : void 0, e), i = n > 2 ? arguments[2] : void 0, a = void 0 === i ? e : Zb(i, e); a > o;) r[o++] = t;
        return r
    },
    eE = e,
    nE = E,
    oE = i,
    iE = jb,
    aE = Gr,
    uE = Oc,
    cE = eg,
    sE = o,
    fE = Cc,
    hE = en,
    lE = fn,
    pE = Mb,
    vE = $b,
    dE = Qb,
    gE = da,
    yE = bo,
    mE = rE,
    wE = Wu,
    bE = Io,
    EE = Mn,
    SE = Ta,
    RE = Te,
    AE = te.PROPER,
    OE = te.CONFIGURABLE,
    IE = "ArrayBuffer",
    xE = "DataView",
    TE = "prototype",
    PE = "Wrong index",
    kE = RE.getterFor(IE),
    LE = RE.getterFor(xE),
    UE = RE.set,
    CE = eE[IE],
    jE = CE,
    _E = jE && jE[TE],
    NE = eE[xE],
    DE = NE && NE[TE],
    ME = Object.prototype,
    BE = eE.Array,
    FE = eE.RangeError,
    HE = nE(mE),
    zE = nE([].reverse),
    qE = dE.pack,
    $E = dE.unpack,
    VE = function(t) {
        return [255 & t]
    },
    WE = function(t) {
        return [255 & t, t >> 8 & 255]
    },
    GE = function(t) {
        return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
    },
    YE = function(t) {
        return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
    },
    JE = function(t) {
        return qE(vE(t), 23, 4)
    },
    KE = function(t) {
        return qE(t, 52, 8)
    },
    QE = function(t, r, e) {
        uE(t[TE], r, {
            configurable: !0,
            get: function() {
                return e(this)[r]
            }
        })
    },
    XE = function(t, r, e, n) {
        var o = LE(t),
            i = pE(e),
            a = !!n;
        if (i + r > o.byteLength) throw new FE(PE);
        var u = o.bytes,
            c = i + o.byteOffset,
            s = wE(u, c, c + r);
        return a ? s : zE(s)
    },
    ZE = function(t, r, e, n, o, i) {
        var a = LE(t),
            u = pE(e),
            c = n(+o),
            s = !!i;
        if (u + r > a.byteLength) throw new FE(PE);
        for (var f = a.bytes, h = u + a.byteOffset, l = 0; l < r; l++) f[h + l] = c[s ? l : r - l - 1]
    };
if (iE) {
    var tS = AE && CE.name !== IE;
    sE((function() {
        CE(1)
    })) && sE((function() {
        new CE(-1)
    })) && !sE((function() {
        return new CE, new CE(1.5), new CE(NaN), 1 !== CE.length || tS && !OE
    })) ? tS && OE && aE(CE, "name", IE) : ((jE = function(t) {
        return fE(this, _E), bE(new CE(pE(t)), this, jE)
    })[TE] = _E, _E.constructor = jE, EE(jE, CE)), yE && gE(DE) !== ME && yE(DE, ME);
    var rS = new NE(new jE(2)),
        eS = nE(DE.setInt8);
    rS.setInt8(0, 2147483648), rS.setInt8(1, 2147483649), !rS.getInt8(0) && rS.getInt8(1) || cE(DE, {
        setInt8: function(t, r) {
            eS(this, t, r << 24 >> 24)
        },
        setUint8: function(t, r) {
            eS(this, t, r << 24 >> 24)
        }
    }, {
        unsafe: !0
    })
} else _E = (jE = function(t) {
    fE(this, _E);
    var r = pE(t);
    UE(this, {
        type: IE,
        bytes: HE(BE(r), 0),
        byteLength: r
    }), oE || (this.byteLength = r, this.detached = !1)
})[TE], NE = function(t, r, e) {
    fE(this, DE), fE(t, _E);
    var n = kE(t),
        o = n.byteLength,
        i = hE(r);
    if (i < 0 || i > o) throw new FE("Wrong offset");
    if (i + (e = void 0 === e ? o - i : lE(e)) > o) throw new FE("Wrong length");
    UE(this, {
        type: xE,
        buffer: t,
        byteLength: e,
        byteOffset: i,
        bytes: n.bytes
    }), oE || (this.buffer = t, this.byteLength = e, this.byteOffset = i)
}, DE = NE[TE], oE && (QE(jE, "byteLength", kE), QE(NE, "buffer", LE), QE(NE, "byteLength", LE), QE(NE, "byteOffset", LE)), cE(DE, {
    getInt8: function(t) {
        return XE(this, 1, t)[0] << 24 >> 24
    },
    getUint8: function(t) {
        return XE(this, 1, t)[0]
    },
    getInt16: function(t) {
        var r = XE(this, 2, t, arguments.length > 1 && arguments[1]);
        return (r[1] << 8 | r[0]) << 16 >> 16
    },
    getUint16: function(t) {
        var r = XE(this, 2, t, arguments.length > 1 && arguments[1]);
        return r[1] << 8 | r[0]
    },
    getInt32: function(t) {
        return YE(XE(this, 4, t, arguments.length > 1 && arguments[1]))
    },
    getUint32: function(t) {
        return YE(XE(this, 4, t, arguments.length > 1 && arguments[1])) >>> 0
    },
    getFloat32: function(t) {
        return $E(XE(this, 4, t, arguments.length > 1 && arguments[1]), 23)
    },
    getFloat64: function(t) {
        return $E(XE(this, 8, t, arguments.length > 1 && arguments[1]), 52)
    },
    setInt8: function(t, r) {
        ZE(this, 1, t, VE, r)
    },
    setUint8: function(t, r) {
        ZE(this, 1, t, VE, r)
    },
    setInt16: function(t, r) {
        ZE(this, 2, t, WE, r, arguments.length > 2 && arguments[2])
    },
    setUint16: function(t, r) {
        ZE(this, 2, t, WE, r, arguments.length > 2 && arguments[2])
    },
    setInt32: function(t, r) {
        ZE(this, 4, t, GE, r, arguments.length > 2 && arguments[2])
    },
    setUint32: function(t, r) {
        ZE(this, 4, t, GE, r, arguments.length > 2 && arguments[2])
    },
    setFloat32: function(t, r) {
        ZE(this, 4, t, JE, r, arguments.length > 2 && arguments[2])
    },
    setFloat64: function(t, r) {
        ZE(this, 8, t, KE, r, arguments.length > 2 && arguments[2])
    }
});
SE(jE, IE), SE(NE, xE);
var nS = {
        ArrayBuffer: jE,
        DataView: NE
    },
    oS = ro,
    iS = cs,
    aS = o,
    uS = Cr,
    cS = un,
    sS = fn,
    fS = nS.ArrayBuffer,
    hS = nS.DataView,
    lS = hS.prototype,
    pS = iS(fS.prototype.slice),
    vS = iS(lS.getUint8),
    dS = iS(lS.setUint8);
oS({
    target: "ArrayBuffer",
    proto: !0,
    unsafe: !0,
    forced: aS((function() {
        return !new fS(2).slice(1, void 0).byteLength
    }))
}, {
    slice: function(t, r) {
        if (pS && void 0 === r) return pS(uS(this), t);
        for (var e = uS(this).byteLength, n = cS(t, e), o = cS(void 0 === r ? e : r, e), i = new fS(sS(o - n)), a = new hS(this), u = new hS(i), c = 0; n < o;) dS(u, c++, vS(a, n++));
        return i
    }
});
var gS = e,
    yS = fo,
    mS = O,
    wS = gS.ArrayBuffer,
    bS = gS.TypeError,
    ES = wS && yS(wS.prototype, "byteLength", "get") || function(t) {
        if ("ArrayBuffer" !== mS(t)) throw new bS("ArrayBuffer expected");
        return t.byteLength
    },
    SS = cs,
    RS = ES,
    AS = e.ArrayBuffer,
    OS = AS && AS.prototype,
    IS = OS && SS(OS.slice),
    xS = function(t) {
        if (0 !== RS(t)) return !1;
        if (!IS) return !1;
        try {
            return IS(t, 0, 0), !1
        } catch (vD) {
            return !0
        }
    },
    TS = i,
    PS = Oc,
    kS = xS,
    LS = ArrayBuffer.prototype;
TS && !("detached" in LS) && PS(LS, "detached", {
    configurable: !0,
    get: function() {
        return kS(this)
    }
});
var US, CS, jS, _S, NS = xS,
    DS = TypeError,
    MS = e,
    BS = $u,
    FS = o,
    HS = rt,
    zS = qu,
    qS = e.structuredClone,
    $S = !!qS && !FS((function() {
        if ("DENO" === zS && HS > 92 || "NODE" === zS && HS > 94 || "BROWSER" === zS && HS > 97) return !1;
        var t = new ArrayBuffer(8),
            r = qS(t, {
                transfer: [t]
            });
        return 0 !== t.byteLength || 8 !== r.byteLength
    })),
    VS = e,
    WS = function(t) {
        if (BS) {
            try {
                return MS.process.getBuiltinModule(t)
            } catch (vD) {}
            try {
                return Function('return require("' + t + '")')()
            } catch (vD) {}
        }
    },
    GS = $S,
    YS = VS.structuredClone,
    JS = VS.ArrayBuffer,
    KS = VS.MessageChannel,
    QS = !1;
if (GS) QS = function(t) {
    YS(t, {
        transfer: [t]
    })
};
else if (JS) try {
    KS || (US = WS("worker_threads")) && (KS = US.MessageChannel), KS && (CS = new KS, jS = new JS(2), _S = function(t) {
        CS.port1.postMessage(null, [t])
    }, 2 === jS.byteLength && (_S(jS), 0 === jS.byteLength && (QS = _S)))
} catch (vD) {}
var XS = e,
    ZS = E,
    tR = fo,
    rR = Mb,
    eR = function(t) {
        if (NS(t)) throw new DS("ArrayBuffer is detached");
        return t
    },
    nR = ES,
    oR = QS,
    iR = $S,
    aR = XS.structuredClone,
    uR = XS.ArrayBuffer,
    cR = XS.DataView,
    sR = Math.min,
    fR = uR.prototype,
    hR = cR.prototype,
    lR = ZS(fR.slice),
    pR = tR(fR, "resizable", "get"),
    vR = tR(fR, "maxByteLength", "get"),
    dR = ZS(hR.getInt8),
    gR = ZS(hR.setInt8),
    yR = (iR || oR) && function(t, r, e) {
        var n, o = nR(t),
            i = void 0 === r ? o : rR(r),
            a = !pR || !pR(t);
        if (eR(t), iR && (t = aR(t, {
                transfer: [t]
            }), o === i && (e || a))) return t;
        if (o >= i && (!e || a)) n = lR(t, 0, i);
        else {
            var u = e && !a && vR ? {
                maxByteLength: vR(t)
            } : void 0;
            n = new uR(i, u);
            for (var c = new cR(t), s = new cR(n), f = sR(i, o), h = 0; h < f; h++) gR(s, h, dR(c, h))
        }
        return iR || oR(t), n
    },
    mR = yR;
mR && ro({
    target: "ArrayBuffer",
    proto: !0
}, {
    transfer: function() {
        return mR(this, arguments.length ? arguments[0] : void 0, !0)
    }
});
var wR = yR;
wR && ro({
    target: "ArrayBuffer",
    proto: !0
}, {
    transferToFixedLength: function() {
        return wR(this, arguments.length ? arguments[0] : void 0, !1)
    }
});
var bR = H,
    ER = O,
    SR = rr("match"),
    RR = function(t) {
        var r;
        return bR(t) && (void 0 !== (r = t[SR]) ? !!r : "RegExp" === ER(t))
    },
    AR = s,
    OR = Ht,
    IR = V,
    xR = ap,
    TR = RegExp.prototype,
    PR = function(t) {
        var r = t.flags;
        return void 0 !== r || "flags" in TR || OR(t, "flags") || !IR(TR, t) ? r : AR(xR, t)
    },
    kR = i,
    LR = e,
    UR = E,
    CR = Gn,
    jR = Io,
    _R = Gr,
    NR = Yi,
    DR = Xe.f,
    MR = V,
    BR = RR,
    FR = Do,
    HR = PR,
    zR = hp,
    qR = So,
    $R = Qe,
    VR = o,
    WR = Ht,
    GR = Te.enforce,
    YR = kc,
    JR = vp,
    KR = yp,
    QR = rr("match"),
    XR = LR.RegExp,
    ZR = XR.prototype,
    tA = LR.SyntaxError,
    rA = UR(ZR.exec),
    eA = UR("".charAt),
    nA = UR("".replace),
    oA = UR("".indexOf),
    iA = UR("".slice),
    aA = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
    uA = /a/g,
    cA = /a/g,
    sA = new XR(uA) !== uA,
    fA = zR.MISSED_STICKY,
    hA = zR.UNSUPPORTED_Y,
    lA = kR && (!sA || fA || JR || KR || VR((function() {
        return cA[QR] = !1, XR(uA) !== uA || XR(cA) === cA || "/a/i" !== String(XR(uA, "i"))
    })));
if (CR("RegExp", lA)) {
    for (var pA = function(t, r) {
            var e, n, o, i, a, u, c = MR(ZR, this),
                s = BR(t),
                f = void 0 === r,
                h = [],
                l = t;
            if (!c && s && f && t.constructor === pA) return t;
            if ((s || MR(ZR, t)) && (t = t.source, f && (r = HR(l))), t = void 0 === t ? "" : FR(t), r = void 0 === r ? "" : FR(r), l = t, JR && "dotAll" in uA && (n = !!r && oA(r, "s") > -1) && (r = nA(r, /s/g, "")), e = r, fA && "sticky" in uA && (o = !!r && oA(r, "y") > -1) && hA && (r = nA(r, /y/g, "")), KR && (i = function(t) {
                    for (var r, e = t.length, n = 0, o = "", i = [], a = NR(null), u = !1, c = !1, s = 0, f = ""; n <= e; n++) {
                        if ("\\" === (r = eA(t, n))) r += eA(t, ++n);
                        else if ("]" === r) u = !1;
                        else if (!u) switch (!0) {
                            case "[" === r:
                                u = !0;
                                break;
                            case "(" === r:
                                if (o += r, "?:" === iA(t, n + 1, n + 3)) continue;
                                rA(aA, iA(t, n + 1)) && (n += 2, c = !0), s++;
                                continue;
                            case ">" === r && c:
                                if ("" === f || WR(a, f)) throw new tA("Invalid capture group name");
                                a[f] = !0, i[i.length] = [f, s], c = !1, f = "";
                                continue
                        }
                        c ? f += r : o += r
                    }
                    return [o, i]
                }(t), t = i[0], h = i[1]), a = jR(XR(t, r), c ? this : ZR, pA), (n || o || h.length) && (u = GR(a), n && (u.dotAll = !0, u.raw = pA(function(t) {
                    for (var r, e = t.length, n = 0, o = "", i = !1; n <= e; n++) "\\" !== (r = eA(t, n)) ? i || "." !== r ? ("[" === r ? i = !0 : "]" === r && (i = !1), o += r) : o += "[\\s\\S]" : o += r + eA(t, ++n);
                    return o
                }(t), e)), o && (u.sticky = !0), h.length && (u.groups = h)), t !== l) try {
                _R(a, "source", "" === l ? "(?:)" : l)
            } catch (vD) {}
            return a
        }, vA = DR(XR), dA = 0; vA.length > dA;) qR(pA, XR, vA[dA++]);
    ZR.constructor = pA, pA.prototype = ZR, $R(LR, "RegExp", pA, {
        constructor: !0
    })
}
YR("RegExp");
var gA = i,
    yA = vp,
    mA = O,
    wA = Oc,
    bA = Te.get,
    EA = RegExp.prototype,
    SA = TypeError;
gA && yA && wA(EA, "dotAll", {
    configurable: !0,
    get: function() {
        if (this !== EA) {
            if ("RegExp" === mA(this)) return !!bA(this).dotAll;
            throw new SA("Incompatible receiver, RegExp required")
        }
    }
});
var RA, AA, OA, IA = {
        exports: {}
    },
    xA = jb,
    TA = i,
    PA = e,
    kA = B,
    LA = H,
    UA = Ht,
    CA = jo,
    jA = pt,
    _A = Gr,
    NA = Qe,
    DA = Oc,
    MA = V,
    BA = da,
    FA = bo,
    HA = rr,
    zA = Wt,
    qA = Te.enforce,
    $A = Te.get,
    VA = PA.Int8Array,
    WA = VA && VA.prototype,
    GA = PA.Uint8ClampedArray,
    YA = GA && GA.prototype,
    JA = VA && BA(VA),
    KA = WA && BA(WA),
    QA = Object.prototype,
    XA = PA.TypeError,
    ZA = HA("toStringTag"),
    tO = zA("TYPED_ARRAY_TAG"),
    rO = "TypedArrayConstructor",
    eO = xA && !!FA && "Opera" !== CA(PA.opera),
    nO = !1,
    oO = {
        Int8Array: 1,
        Uint8Array: 1,
        Uint8ClampedArray: 1,
        Int16Array: 2,
        Uint16Array: 2,
        Int32Array: 4,
        Uint32Array: 4,
        Float32Array: 4,
        Float64Array: 8
    },
    iO = {
        BigInt64Array: 8,
        BigUint64Array: 8
    },
    aO = function(t) {
        var r = BA(t);
        if (LA(r)) {
            var e = $A(r);
            return e && UA(e, rO) ? e[rO] : aO(r)
        }
    },
    uO = function(t) {
        if (!LA(t)) return !1;
        var r = CA(t);
        return UA(oO, r) || UA(iO, r)
    };
for (RA in oO)(OA = (AA = PA[RA]) && AA.prototype) ? qA(OA)[rO] = AA : eO = !1;
for (RA in iO)(OA = (AA = PA[RA]) && AA.prototype) && (qA(OA)[rO] = AA);
if ((!eO || !kA(JA) || JA === Function.prototype) && (JA = function() {
        throw new XA("Incorrect invocation")
    }, eO))
    for (RA in oO) PA[RA] && FA(PA[RA], JA);
if ((!eO || !KA || KA === QA) && (KA = JA.prototype, eO))
    for (RA in oO) PA[RA] && FA(PA[RA].prototype, KA);
if (eO && BA(YA) !== KA && FA(YA, KA), TA && !UA(KA, ZA))
    for (RA in nO = !0, DA(KA, ZA, {
            configurable: !0,
            get: function() {
                return LA(this) ? this[tO] : void 0
            }
        }), oO) PA[RA] && _A(PA[RA], tO, RA);
var cO = {
        NATIVE_ARRAY_BUFFER_VIEWS: eO,
        TYPED_ARRAY_TAG: nO && tO,
        aTypedArray: function(t) {
            if (uO(t)) return t;
            throw new XA("Target is not a typed array")
        },
        aTypedArrayConstructor: function(t) {
            if (kA(t) && (!FA || MA(JA, t))) return t;
            throw new XA(jA(t) + " is not a typed array constructor")
        },
        exportTypedArrayMethod: function(t, r, e, n) {
            if (TA) {
                if (e)
                    for (var o in oO) {
                        var i = PA[o];
                        if (i && UA(i.prototype, t)) try {
                            delete i.prototype[t]
                        } catch (vD) {
                            try {
                                i.prototype[t] = r
                            } catch (a) {}
                        }
                    }
                KA[t] && !e || NA(KA, t, e ? r : eO && WA[t] || r, n)
            }
        },
        exportTypedArrayStaticMethod: function(t, r, e) {
            var n, o;
            if (TA) {
                if (FA) {
                    if (e)
                        for (n in oO)
                            if ((o = PA[n]) && UA(o, t)) try {
                                delete o[t]
                            } catch (vD) {}
                    if (JA[t] && !e) return;
                    try {
                        return NA(JA, t, e ? r : eO && JA[t] || r)
                    } catch (vD) {}
                }
                for (n in oO) !(o = PA[n]) || o[t] && !e || NA(o, t, r)
            }
        },
        getTypedArrayConstructor: aO,
        isView: function(t) {
            if (!LA(t)) return !1;
            var r = CA(t);
            return "DataView" === r || UA(oO, r) || UA(iO, r)
        },
        isTypedArray: uO,
        TypedArray: JA,
        TypedArrayPrototype: KA
    },
    sO = e,
    fO = o,
    hO = bl,
    lO = cO.NATIVE_ARRAY_BUFFER_VIEWS,
    pO = sO.ArrayBuffer,
    vO = sO.Int8Array,
    dO = !lO || !fO((function() {
        vO(1)
    })) || !fO((function() {
        new vO(-1)
    })) || !hO((function(t) {
        new vO, new vO(null), new vO(1.5), new vO(t)
    }), !0) || fO((function() {
        return 1 !== new vO(new pO(2), 1, void 0).length
    })),
    gO = H,
    yO = Math.floor,
    mO = Number.isInteger || function(t) {
        return !gO(t) && isFinite(t) && yO(t) === t
    },
    wO = en,
    bO = RangeError,
    EO = function(t) {
        var r = wO(t);
        if (r < 0) throw new bO("The argument can't be less than 0");
        return r
    },
    SO = EO,
    RO = RangeError,
    AO = function(t, r) {
        var e = SO(t);
        if (e % r) throw new RO("Wrong offset");
        return e
    },
    OO = Math.round,
    IO = jo,
    xO = function(t) {
        var r = IO(t);
        return "BigInt64Array" === r || "BigUint64Array" === r
    },
    TO = sr,
    PO = TypeError,
    kO = function(t) {
        var r = TO(t, "number");
        if ("number" == typeof r) throw new PO("Can't convert number to bigint");
        return BigInt(r)
    },
    LO = ls,
    UO = s,
    CO = ts,
    jO = Mt,
    _O = ln,
    NO = Qh,
    DO = $h,
    MO = Mh,
    BO = xO,
    FO = cO.aTypedArrayConstructor,
    HO = kO,
    zO = yu,
    qO = Kc,
    $O = H,
    VO = rr("species"),
    WO = Array,
    GO = function(t) {
        var r;
        return zO(t) && (r = t.constructor, (qO(r) && (r === WO || zO(r.prototype)) || $O(r) && null === (r = r[VO])) && (r = void 0)), void 0 === r ? WO : r
    },
    YO = function(t, r) {
        return new(GO(t))(0 === r ? 0 : r)
    },
    JO = ls,
    KO = k,
    QO = Mt,
    XO = ln,
    ZO = YO,
    tI = E([].push),
    rI = function(t) {
        var r = 1 === t,
            e = 2 === t,
            n = 3 === t,
            o = 4 === t,
            i = 6 === t,
            a = 7 === t,
            u = 5 === t || i;
        return function(c, s, f, h) {
            for (var l, p, v = QO(c), d = KO(v), g = XO(d), y = JO(s, f), m = 0, w = h || ZO, b = r ? w(c, g) : e || a ? w(c, 0) : void 0; g > m; m++)
                if ((u || m in d) && (p = y(l = d[m], m, v), t))
                    if (r) b[m] = p;
                    else if (p) switch (t) {
                case 3:
                    return !0;
                case 5:
                    return l;
                case 6:
                    return m;
                case 2:
                    tI(b, l)
            } else switch (t) {
                case 4:
                    return !1;
                case 7:
                    tI(b, l)
            }
            return i ? -1 : n || o ? o : b
        }
    },
    eI = {
        forEach: rI(0),
        map: rI(1),
        filter: rI(2),
        some: rI(3),
        every: rI(4),
        find: rI(5),
        findIndex: rI(6),
        filterReject: rI(7)
    },
    nI = ro,
    oI = e,
    iI = s,
    aI = i,
    uI = dO,
    cI = cO,
    sI = nS,
    fI = Cc,
    hI = g,
    lI = Gr,
    pI = mO,
    vI = fn,
    dI = Mb,
    gI = AO,
    yI = function(t) {
        var r = OO(t);
        return r < 0 ? 0 : r > 255 ? 255 : 255 & r
    },
    mI = lr,
    wI = Ht,
    bI = jo,
    EI = H,
    SI = ht,
    RI = Yi,
    AI = V,
    OI = bo,
    II = Xe.f,
    xI = function(t) {
        var r, e, n, o, i, a, u, c, s = CO(this),
            f = jO(t),
            h = arguments.length,
            l = h > 1 ? arguments[1] : void 0,
            p = void 0 !== l,
            v = DO(f);
        if (v && !MO(v))
            for (c = (u = NO(f, v)).next, f = []; !(a = UO(c, u)).done;) f.push(a.value);
        for (p && h > 2 && (l = LO(l, arguments[2])), e = _O(f), n = new(FO(s))(e), o = BO(n), r = 0; e > r; r++) i = p ? l(f[r], r) : f[r], n[r] = o ? HO(i) : +i;
        return n
    },
    TI = eI.forEach,
    PI = kc,
    kI = Oc,
    LI = Tr,
    UI = n,
    CI = wd,
    jI = Io,
    _I = Te.get,
    NI = Te.set,
    DI = Te.enforce,
    MI = LI.f,
    BI = UI.f,
    FI = oI.RangeError,
    HI = sI.ArrayBuffer,
    zI = HI.prototype,
    qI = sI.DataView,
    $I = cI.NATIVE_ARRAY_BUFFER_VIEWS,
    VI = cI.TYPED_ARRAY_TAG,
    WI = cI.TypedArray,
    GI = cI.TypedArrayPrototype,
    YI = cI.isTypedArray,
    JI = "BYTES_PER_ELEMENT",
    KI = "Wrong length",
    QI = function(t, r) {
        kI(t, r, {
            configurable: !0,
            get: function() {
                return _I(this)[r]
            }
        })
    },
    XI = function(t) {
        var r;
        return AI(zI, t) || "ArrayBuffer" === (r = bI(t)) || "SharedArrayBuffer" === r
    },
    ZI = function(t, r) {
        return YI(t) && !SI(r) && r in t && pI(+r) && r >= 0
    },
    tx = function(t, r) {
        return r = mI(r), ZI(t, r) ? hI(2, t[r]) : BI(t, r)
    },
    rx = function(t, r, e) {
        return r = mI(r), !(ZI(t, r) && EI(e) && wI(e, "value")) || wI(e, "get") || wI(e, "set") || e.configurable || wI(e, "writable") && !e.writable || wI(e, "enumerable") && !e.enumerable ? MI(t, r, e) : (t[r] = e.value, t)
    };
aI ? ($I || (UI.f = tx, LI.f = rx, QI(GI, "buffer"), QI(GI, "byteOffset"), QI(GI, "byteLength"), QI(GI, "length")), nI({
    target: "Object",
    stat: !0,
    forced: !$I
}, {
    getOwnPropertyDescriptor: tx,
    defineProperty: rx
}), IA.exports = function(t, r, e) {
    var n = t.match(/\d+/)[0] / 8,
        o = t + (e ? "Clamped" : "") + "Array",
        i = "get" + t,
        a = "set" + t,
        u = oI[o],
        c = u,
        s = c && c.prototype,
        f = {},
        h = function(t, r) {
            MI(t, r, {
                get: function() {
                    return function(t, r) {
                        var e = _I(t);
                        return e.view[i](r * n + e.byteOffset, !0)
                    }(this, r)
                },
                set: function(t) {
                    return function(t, r, o) {
                        var i = _I(t);
                        i.view[a](r * n + i.byteOffset, e ? yI(o) : o, !0)
                    }(this, r, t)
                },
                enumerable: !0
            })
        };
    $I ? uI && (c = r((function(t, r, e, o) {
        return fI(t, s), jI(EI(r) ? XI(r) ? void 0 !== o ? new u(r, gI(e, n), o) : void 0 !== e ? new u(r, gI(e, n)) : new u(r) : YI(r) ? CI(c, r) : iI(xI, c, r) : new u(dI(r)), t, c)
    })), OI && OI(c, WI), TI(II(u), (function(t) {
        t in c || lI(c, t, u[t])
    })), c.prototype = s) : (c = r((function(t, r, e, o) {
        fI(t, s);
        var i, a, u, f = 0,
            l = 0;
        if (EI(r)) {
            if (!XI(r)) return YI(r) ? CI(c, r) : iI(xI, c, r);
            i = r, l = gI(e, n);
            var p = r.byteLength;
            if (void 0 === o) {
                if (p % n) throw new FI(KI);
                if ((a = p - l) < 0) throw new FI(KI)
            } else if ((a = vI(o) * n) + l > p) throw new FI(KI);
            u = a / n
        } else u = dI(r), i = new HI(a = u * n);
        for (NI(t, {
                buffer: i,
                byteOffset: l,
                byteLength: a,
                length: u,
                view: new qI(i)
            }); f < u;) h(t, f++)
    })), OI && OI(c, WI), s = c.prototype = RI(GI)), s.constructor !== c && lI(s, "constructor", c), DI(s).TypedArrayConstructor = c, VI && lI(s, VI, o);
    var l = c !== u;
    f[o] = c, nI({
        global: !0,
        constructor: !0,
        forced: l,
        sham: !$I
    }, f), JI in c || lI(c, JI, n), JI in s || lI(s, JI, n), PI(o)
}) : IA.exports = function() {};
var ex = IA.exports;
ex("Uint8", (function(t) {
    return function(r, e, n) {
        return t(this, r, e, n)
    }
}));
var nx = ln,
    ox = en,
    ix = cO.aTypedArray;
(0, cO.exportTypedArrayMethod)("at", (function(t) {
    var r = ix(this),
        e = nx(r),
        n = ox(t),
        o = n >= 0 ? n : e + n;
    return o < 0 || o >= e ? void 0 : r[o]
}));
var ax = rE,
    ux = kO,
    cx = jo,
    sx = s,
    fx = o,
    hx = cO.aTypedArray,
    lx = cO.exportTypedArrayMethod,
    px = E("".slice);
lx("fill", (function(t) {
    var r = arguments.length;
    hx(this);
    var e = "Big" === px(cx(this), 0, 3) ? ux(t) : +t;
    return sx(ax, this, e, r > 1 ? arguments[1] : void 0, r > 2 ? arguments[2] : void 0)
}), fx((function() {
    var t = 0;
    return new Int8Array(2).fill({
        valueOf: function() {
            return t++
        }
    }), 1 !== t
})));
var vx = ls,
    dx = k,
    gx = Mt,
    yx = ln,
    mx = function(t) {
        var r = 1 === t;
        return function(e, n, o) {
            for (var i, a = gx(e), u = dx(a), c = yx(u), s = vx(n, o); c-- > 0;)
                if (s(i = u[c], c, a)) switch (t) {
                    case 0:
                        return i;
                    case 1:
                        return c
                }
            return r ? -1 : void 0
        }
    },
    wx = {
        findLast: mx(0),
        findLastIndex: mx(1)
    },
    bx = wx.findLast,
    Ex = cO.aTypedArray;
(0, cO.exportTypedArrayMethod)("findLast", (function(t) {
    return bx(Ex(this), t, arguments.length > 1 ? arguments[1] : void 0)
}));
var Sx = wx.findLastIndex,
    Rx = cO.aTypedArray;
(0, cO.exportTypedArrayMethod)("findLastIndex", (function(t) {
    return Sx(Rx(this), t, arguments.length > 1 ? arguments[1] : void 0)
}));
var Ax = e,
    Ox = s,
    Ix = cO,
    xx = ln,
    Tx = AO,
    Px = Mt,
    kx = o,
    Lx = Ax.RangeError,
    Ux = Ax.Int8Array,
    Cx = Ux && Ux.prototype,
    jx = Cx && Cx.set,
    _x = Ix.aTypedArray,
    Nx = Ix.exportTypedArrayMethod,
    Dx = !kx((function() {
        var t = new Uint8ClampedArray(2);
        return Ox(jx, t, {
            length: 1,
            0: 3
        }, 1), 3 !== t[1]
    })),
    Mx = Dx && Ix.NATIVE_ARRAY_BUFFER_VIEWS && kx((function() {
        var t = new Ux(2);
        return t.set(1), t.set("2", 1), 0 !== t[0] || 2 !== t[1]
    }));
Nx("set", (function(t) {
    _x(this);
    var r = Tx(arguments.length > 1 ? arguments[1] : void 0, 1),
        e = Px(t);
    if (Dx) return Ox(jx, this, e, r);
    var n = this.length,
        o = xx(e),
        i = 0;
    if (o + r > n) throw new Lx("Wrong length");
    for (; i < o;) this[r + i] = e[i++]
}), !Dx || Mx);
var Bx = cs,
    Fx = o,
    Hx = yt,
    zx = ub,
    qx = sb,
    $x = fb,
    Vx = rt,
    Wx = lb,
    Gx = cO.aTypedArray,
    Yx = cO.exportTypedArrayMethod,
    Jx = e.Uint16Array,
    Kx = Jx && Bx(Jx.prototype.sort),
    Qx = !(!Kx || Fx((function() {
        Kx(new Jx(2), null)
    })) && Fx((function() {
        Kx(new Jx(2), {})
    }))),
    Xx = !!Kx && !Fx((function() {
        if (Vx) return Vx < 74;
        if (qx) return qx < 67;
        if ($x) return !0;
        if (Wx) return Wx < 602;
        var t, r, e = new Jx(516),
            n = Array(516);
        for (t = 0; t < 516; t++) r = t % 4, e[t] = 515 - t, n[t] = t - 2 * r + 3;
        for (Kx(e, (function(t, r) {
                return (t / 4 | 0) - (r / 4 | 0)
            })), t = 0; t < 516; t++)
            if (e[t] !== n[t]) return !0
    }));
Yx("sort", (function(t) {
    return void 0 !== t && Hx(t), Xx ? Kx(this, t) : zx(Gx(this), function(t) {
        return function(r, e) {
            return void 0 !== t ? +t(r, e) || 0 : e != e ? -1 : r != r ? 1 : 0 === r && 0 === e ? 1 / r > 0 && 1 / e < 0 ? 1 : -1 : r > e
        }
    }(t))
}), !Xx || Qx);
var Zx = ln,
    tT = function(t, r) {
        for (var e = Zx(t), n = new r(e), o = 0; o < e; o++) n[o] = t[e - o - 1];
        return n
    },
    rT = cO.aTypedArray,
    eT = cO.getTypedArrayConstructor;
(0, cO.exportTypedArrayMethod)("toReversed", (function() {
    return tT(rT(this), eT(this))
}));
var nT = yt,
    oT = wd,
    iT = cO.aTypedArray,
    aT = cO.getTypedArrayConstructor,
    uT = cO.exportTypedArrayMethod,
    cT = E(cO.TypedArrayPrototype.sort);
uT("toSorted", (function(t) {
    void 0 !== t && nT(t);
    var r = iT(this),
        e = oT(aT(r), r);
    return cT(e, t)
}));
var sT = ln,
    fT = en,
    hT = RangeError,
    lT = function(t, r, e, n) {
        var o = sT(t),
            i = fT(e),
            a = i < 0 ? o + i : i;
        if (a >= o || a < 0) throw new hT("Incorrect index");
        for (var u = new r(o), c = 0; c < o; c++) u[c] = c === a ? n : t[c];
        return u
    },
    pT = xO,
    vT = en,
    dT = kO,
    gT = cO.aTypedArray,
    yT = cO.getTypedArrayConstructor,
    mT = cO.exportTypedArrayMethod,
    wT = !! function() {
        try {
            new Int8Array(1).with(2, {
                valueOf: function() {
                    throw 8
                }
            })
        } catch (vD) {
            return 8 === vD
        }
    }();
mT("with", {
    with: function(t, r) {
        var e = gT(this),
            n = vT(t),
            o = pT(e) ? dT(r) : +r;
        return lT(e, yT(e), n, o)
    }
}.with, !wT);
var bT = dl,
    ET = yt,
    ST = Cr,
    RT = ov;
ro({
    target: "Iterator",
    proto: !0,
    real: !0
}, {
    some: function(t) {
        ST(this), ET(t);
        var r = RT(this),
            e = 0;
        return bT(r, (function(r, n) {
            if (t(r, e++)) return n()
        }), {
            IS_RECORD: !0,
            INTERRUPTED: !0
        }).stopped
    }
});
var AT = Pm.charAt,
    OT = Do,
    IT = Te,
    xT = ru,
    TT = eu,
    PT = "String Iterator",
    kT = IT.set,
    LT = IT.getterFor(PT);
xT(String, "String", (function(t) {
    kT(this, {
        type: PT,
        string: OT(t),
        index: 0
    })
}), (function() {
    var t, r = LT(this),
        e = r.string,
        n = r.index;
    return n >= e.length ? TT(void 0, !0) : (t = AT(e, n), r.index += t.length, TT(t, !1))
}));
var UT = o,
    CT = i,
    jT = rr("iterator"),
    _T = !UT((function() {
        var t = new URL("b?a=1&b=2&c=3", "https://a"),
            r = t.searchParams,
            e = new URLSearchParams("a=1&a=2&b=3"),
            n = "";
        return t.pathname = "c%20d", r.forEach((function(t, e) {
            r.delete("b"), n += e + t
        })), e.delete("a", 2), e.delete("b", void 0), !r.size && !CT || !r.sort || "https://a/c%20d?a=1&c=3" !== t.href || "3" !== r.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !r[jT] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("https://тест").host || "#%D0%B1" !== new URL("https://a#б").hash || "a1c3" !== n || "x" !== new URL("https://x", void 0).host
    })),
    NT = i,
    DT = E,
    MT = s,
    BT = o,
    FT = Ii,
    HT = xn,
    zT = f,
    qT = Mt,
    $T = k,
    VT = Object.assign,
    WT = Object.defineProperty,
    GT = DT([].concat),
    YT = !VT || BT((function() {
        if (NT && 1 !== VT({
                b: 1
            }, VT(WT({}, "a", {
                enumerable: !0,
                get: function() {
                    WT(this, "b", {
                        value: 3,
                        enumerable: !1
                    })
                }
            }), {
                b: 2
            })).b) return !0;
        var t = {},
            r = {},
            e = Symbol("assign detection"),
            n = "abcdefghijklmnopqrst";
        return t[e] = 7, n.split("").forEach((function(t) {
            r[t] = t
        })), 7 !== VT({}, t)[e] || FT(VT({}, r)).join("") !== n
    })) ? function(t, r) {
        for (var e = qT(t), n = arguments.length, o = 1, i = HT.f, a = zT.f; n > o;)
            for (var u, c = $T(arguments[o++]), s = i ? GT(FT(c), i(c)) : FT(c), f = s.length, h = 0; f > h;) u = s[h++], NT && !MT(a, c, u) || (e[u] = c[u]);
        return e
    } : VT,
    JT = ls,
    KT = s,
    QT = Mt,
    XT = Sg,
    ZT = Mh,
    tP = Kc,
    rP = ln,
    eP = jd,
    nP = Qh,
    oP = $h,
    iP = Array,
    aP = E,
    uP = 2147483647,
    cP = /[^\0-\u007E]/,
    sP = /[.\u3002\uFF0E\uFF61]/g,
    fP = "Overflow: input needs wider integers to process",
    hP = RangeError,
    lP = aP(sP.exec),
    pP = Math.floor,
    vP = String.fromCharCode,
    dP = aP("".charCodeAt),
    gP = aP([].join),
    yP = aP([].push),
    mP = aP("".replace),
    wP = aP("".split),
    bP = aP("".toLowerCase),
    EP = function(t) {
        return t + 22 + 75 * (t < 26)
    },
    SP = function(t, r, e) {
        var n = 0;
        for (t = e ? pP(t / 700) : t >> 1, t += pP(t / r); t > 455;) t = pP(t / 35), n += 36;
        return pP(n + 36 * t / (t + 38))
    },
    RP = function(t) {
        var r = [];
        t = function(t) {
            for (var r = [], e = 0, n = t.length; e < n;) {
                var o = dP(t, e++);
                if (o >= 55296 && o <= 56319 && e < n) {
                    var i = dP(t, e++);
                    56320 == (64512 & i) ? yP(r, ((1023 & o) << 10) + (1023 & i) + 65536) : (yP(r, o), e--)
                } else yP(r, o)
            }
            return r
        }(t);
        var e, n, o = t.length,
            i = 128,
            a = 0,
            u = 72;
        for (e = 0; e < t.length; e++)(n = t[e]) < 128 && yP(r, vP(n));
        var c = r.length,
            s = c;
        for (c && yP(r, "-"); s < o;) {
            var f = uP;
            for (e = 0; e < t.length; e++)(n = t[e]) >= i && n < f && (f = n);
            var h = s + 1;
            if (f - i > pP((uP - a) / h)) throw new hP(fP);
            for (a += (f - i) * h, i = f, e = 0; e < t.length; e++) {
                if ((n = t[e]) < i && ++a > uP) throw new hP(fP);
                if (n === i) {
                    for (var l = a, p = 36;;) {
                        var v = p <= u ? 1 : p >= u + 26 ? 26 : p - u;
                        if (l < v) break;
                        var d = l - v,
                            g = 36 - v;
                        yP(r, vP(EP(v + d % g))), l = pP(d / g), p += 36
                    }
                    yP(r, vP(EP(l))), u = SP(a, h, s === c), a = 0, s++
                }
            }
            a++, i++
        }
        return gP(r, "")
    },
    AP = ro,
    OP = E,
    IP = un,
    xP = RangeError,
    TP = String.fromCharCode,
    PP = String.fromCodePoint,
    kP = OP([].join);
AP({
    target: "String",
    stat: !0,
    arity: 1,
    forced: !!PP && 1 !== PP.length
}, {
    fromCodePoint: function(t) {
        for (var r, e = [], n = arguments.length, o = 0; n > o;) {
            if (r = +arguments[o++], IP(r, 1114111) !== r) throw new xP(r + " is not a valid code point");
            e[o] = r < 65536 ? TP(r) : TP(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
        }
        return kP(e, "")
    }
});
var LP = ro,
    UP = e,
    CP = Ws,
    jP = $,
    _P = s,
    NP = E,
    DP = i,
    MP = _T,
    BP = Qe,
    FP = Oc,
    HP = eg,
    zP = Ta,
    qP = _a,
    $P = Te,
    VP = Cc,
    WP = B,
    GP = Ht,
    YP = ls,
    JP = jo,
    KP = Cr,
    QP = H,
    XP = Do,
    ZP = Yi,
    tk = g,
    rk = Qh,
    ek = $h,
    nk = eu,
    ok = vs,
    ik = ub,
    ak = rr("iterator"),
    uk = "URLSearchParams",
    ck = uk + "Iterator",
    sk = $P.set,
    fk = $P.getterFor(uk),
    hk = $P.getterFor(ck),
    lk = CP("fetch"),
    pk = CP("Request"),
    vk = CP("Headers"),
    dk = pk && pk.prototype,
    gk = vk && vk.prototype,
    yk = UP.TypeError,
    mk = UP.encodeURIComponent,
    wk = String.fromCharCode,
    bk = jP("String", "fromCodePoint"),
    Ek = parseInt,
    Sk = NP("".charAt),
    Rk = NP([].join),
    Ak = NP([].push),
    Ok = NP("".replace),
    Ik = NP([].shift),
    xk = NP([].splice),
    Tk = NP("".split),
    Pk = NP("".slice),
    kk = NP(/./.exec),
    Lk = /\+/g,
    Uk = /^[0-9a-f]+$/i,
    Ck = function(t, r) {
        var e = Pk(t, r, r + 2);
        return kk(Uk, e) ? Ek(e, 16) : NaN
    },
    jk = function(t) {
        for (var r = 0, e = 128; e > 0 && t & e; e >>= 1) r++;
        return r
    },
    _k = function(t) {
        var r = null;
        switch (t.length) {
            case 1:
                r = t[0];
                break;
            case 2:
                r = (31 & t[0]) << 6 | 63 & t[1];
                break;
            case 3:
                r = (15 & t[0]) << 12 | (63 & t[1]) << 6 | 63 & t[2];
                break;
            case 4:
                r = (7 & t[0]) << 18 | (63 & t[1]) << 12 | (63 & t[2]) << 6 | 63 & t[3]
        }
        return r > 1114111 ? null : r
    },
    Nk = function(t) {
        for (var r = (t = Ok(t, Lk, " ")).length, e = "", n = 0; n < r;) {
            var o = Sk(t, n);
            if ("%" === o) {
                if ("%" === Sk(t, n + 1) || n + 3 > r) {
                    e += "%", n++;
                    continue
                }
                var i = Ck(t, n + 1);
                if (i != i) {
                    e += o, n++;
                    continue
                }
                n += 2;
                var a = jk(i);
                if (0 === a) o = wk(i);
                else {
                    if (1 === a || a > 4) {
                        e += "�", n++;
                        continue
                    }
                    for (var u = [i], c = 1; c < a && !(++n + 3 > r || "%" !== Sk(t, n));) {
                        var s = Ck(t, n + 1);
                        if (s != s) {
                            n += 3;
                            break
                        }
                        if (s > 191 || s < 128) break;
                        Ak(u, s), n += 2, c++
                    }
                    if (u.length !== a) {
                        e += "�";
                        continue
                    }
                    var f = _k(u);
                    null === f ? e += "�" : o = bk(f)
                }
            }
            e += o, n++
        }
        return e
    },
    Dk = /[!'()~]|%20/g,
    Mk = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+"
    },
    Bk = function(t) {
        return Mk[t]
    },
    Fk = function(t) {
        return Ok(mk(t), Dk, Bk)
    },
    Hk = qP((function(t, r) {
        sk(this, {
            type: ck,
            target: fk(t).entries,
            index: 0,
            kind: r
        })
    }), uk, (function() {
        var t = hk(this),
            r = t.target,
            e = t.index++;
        if (!r || e >= r.length) return t.target = null, nk(void 0, !0);
        var n = r[e];
        switch (t.kind) {
            case "keys":
                return nk(n.key, !1);
            case "values":
                return nk(n.value, !1)
        }
        return nk([n.key, n.value], !1)
    }), !0),
    zk = function(t) {
        this.entries = [], this.url = null, void 0 !== t && (QP(t) ? this.parseObject(t) : this.parseQuery("string" == typeof t ? "?" === Sk(t, 0) ? Pk(t, 1) : t : XP(t)))
    };
zk.prototype = {
    type: uk,
    bindURL: function(t) {
        this.url = t, this.update()
    },
    parseObject: function(t) {
        var r, e, n, o, i, a, u, c = this.entries,
            s = ek(t);
        if (s)
            for (e = (r = rk(t, s)).next; !(n = _P(e, r)).done;) {
                if (i = (o = rk(KP(n.value))).next, (a = _P(i, o)).done || (u = _P(i, o)).done || !_P(i, o).done) throw new yk("Expected sequence with length 2");
                Ak(c, {
                    key: XP(a.value),
                    value: XP(u.value)
                })
            } else
                for (var f in t) GP(t, f) && Ak(c, {
                    key: f,
                    value: XP(t[f])
                })
    },
    parseQuery: function(t) {
        if (t)
            for (var r, e, n = this.entries, o = Tk(t, "&"), i = 0; i < o.length;)(r = o[i++]).length && (e = Tk(r, "="), Ak(n, {
                key: Nk(Ik(e)),
                value: Nk(Rk(e, "="))
            }))
    },
    serialize: function() {
        for (var t, r = this.entries, e = [], n = 0; n < r.length;) t = r[n++], Ak(e, Fk(t.key) + "=" + Fk(t.value));
        return Rk(e, "&")
    },
    update: function() {
        this.entries.length = 0, this.parseQuery(this.url.query)
    },
    updateURL: function() {
        this.url && this.url.update()
    }
};
var qk = function() {
        VP(this, $k);
        var t = sk(this, new zk(arguments.length > 0 ? arguments[0] : void 0));
        DP || (this.size = t.entries.length)
    },
    $k = qk.prototype;
if (HP($k, {
        append: function(t, r) {
            var e = fk(this);
            ok(arguments.length, 2), Ak(e.entries, {
                key: XP(t),
                value: XP(r)
            }), DP || this.length++, e.updateURL()
        },
        delete: function(t) {
            for (var r = fk(this), e = ok(arguments.length, 1), n = r.entries, o = XP(t), i = e < 2 ? void 0 : arguments[1], a = void 0 === i ? i : XP(i), u = 0; u < n.length;) {
                var c = n[u];
                if (c.key !== o || void 0 !== a && c.value !== a) u++;
                else if (xk(n, u, 1), void 0 !== a) break
            }
            DP || (this.size = n.length), r.updateURL()
        },
        get: function(t) {
            var r = fk(this).entries;
            ok(arguments.length, 1);
            for (var e = XP(t), n = 0; n < r.length; n++)
                if (r[n].key === e) return r[n].value;
            return null
        },
        getAll: function(t) {
            var r = fk(this).entries;
            ok(arguments.length, 1);
            for (var e = XP(t), n = [], o = 0; o < r.length; o++) r[o].key === e && Ak(n, r[o].value);
            return n
        },
        has: function(t) {
            for (var r = fk(this).entries, e = ok(arguments.length, 1), n = XP(t), o = e < 2 ? void 0 : arguments[1], i = void 0 === o ? o : XP(o), a = 0; a < r.length;) {
                var u = r[a++];
                if (u.key === n && (void 0 === i || u.value === i)) return !0
            }
            return !1
        },
        set: function(t, r) {
            var e = fk(this);
            ok(arguments.length, 1);
            for (var n, o = e.entries, i = !1, a = XP(t), u = XP(r), c = 0; c < o.length; c++)(n = o[c]).key === a && (i ? xk(o, c--, 1) : (i = !0, n.value = u));
            i || Ak(o, {
                key: a,
                value: u
            }), DP || (this.size = o.length), e.updateURL()
        },
        sort: function() {
            var t = fk(this);
            ik(t.entries, (function(t, r) {
                return t.key > r.key ? 1 : -1
            })), t.updateURL()
        },
        forEach: function(t) {
            for (var r, e = fk(this).entries, n = YP(t, arguments.length > 1 ? arguments[1] : void 0), o = 0; o < e.length;) n((r = e[o++]).value, r.key, this)
        },
        keys: function() {
            return new Hk(this, "keys")
        },
        values: function() {
            return new Hk(this, "values")
        },
        entries: function() {
            return new Hk(this, "entries")
        }
    }, {
        enumerable: !0
    }), BP($k, ak, $k.entries, {
        name: "entries"
    }), BP($k, "toString", (function() {
        return fk(this).serialize()
    }), {
        enumerable: !0
    }), DP && FP($k, "size", {
        get: function() {
            return fk(this).entries.length
        },
        configurable: !0,
        enumerable: !0
    }), zP(qk, uk), LP({
        global: !0,
        constructor: !0,
        forced: !MP
    }, {
        URLSearchParams: qk
    }), !MP && WP(vk)) {
    var Vk = NP(gk.has),
        Wk = NP(gk.set),
        Gk = function(t) {
            if (QP(t)) {
                var r, e = t.body;
                if (JP(e) === uk) return r = t.headers ? new vk(t.headers) : new vk, Vk(r, "content-type") || Wk(r, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), ZP(t, {
                    body: tk(0, XP(e)),
                    headers: tk(0, r)
                })
            }
            return t
        };
    if (WP(lk) && LP({
            global: !0,
            enumerable: !0,
            dontCallGetSet: !0,
            forced: !0
        }, {
            fetch: function(t) {
                return lk(t, arguments.length > 1 ? Gk(arguments[1]) : {})
            }
        }), WP(pk)) {
        var Yk = function(t) {
            return VP(this, dk), new pk(t, arguments.length > 1 ? Gk(arguments[1]) : {})
        };
        dk.constructor = Yk, Yk.prototype = dk, LP({
            global: !0,
            constructor: !0,
            dontCallGetSet: !0,
            forced: !0
        }, {
            Request: Yk
        })
    }
}
var Jk, Kk = ro,
    Qk = i,
    Xk = _T,
    Zk = e,
    tL = ls,
    rL = E,
    eL = Qe,
    nL = Oc,
    oL = Cc,
    iL = Ht,
    aL = YT,
    uL = function(t) {
        var r = QT(t),
            e = tP(this),
            n = arguments.length,
            o = n > 1 ? arguments[1] : void 0,
            i = void 0 !== o;
        i && (o = JT(o, n > 2 ? arguments[2] : void 0));
        var a, u, c, s, f, h, l = oP(r),
            p = 0;
        if (!l || this === iP && ZT(l))
            for (a = rP(r), u = e ? new this(a) : iP(a); a > p; p++) h = i ? o(r[p], p) : r[p], eP(u, p, h);
        else
            for (u = e ? new this : [], f = (s = nP(r, l)).next; !(c = KT(f, s)).done; p++) h = i ? XT(s, o, [c.value, p], !0) : c.value, eP(u, p, h);
        return u.length = p, u
    },
    cL = Wu,
    sL = Pm.codeAt,
    fL = function(t) {
        var r, e, n = [],
            o = wP(mP(bP(t), sP, "."), ".");
        for (r = 0; r < o.length; r++) e = o[r], yP(n, lP(cP, e) ? "xn--" + RP(e) : e);
        return gP(n, ".")
    },
    hL = Do,
    lL = Ta,
    pL = vs,
    vL = {
        URLSearchParams: qk,
        getState: fk
    },
    dL = Te,
    gL = dL.set,
    yL = dL.getterFor("URL"),
    mL = vL.URLSearchParams,
    wL = vL.getState,
    bL = Zk.URL,
    EL = Zk.TypeError,
    SL = Zk.parseInt,
    RL = Math.floor,
    AL = Math.pow,
    OL = rL("".charAt),
    IL = rL(/./.exec),
    xL = rL([].join),
    TL = rL(1..toString),
    PL = rL([].pop),
    kL = rL([].push),
    LL = rL("".replace),
    UL = rL([].shift),
    CL = rL("".split),
    jL = rL("".slice),
    _L = rL("".toLowerCase),
    NL = rL([].unshift),
    DL = "Invalid scheme",
    ML = "Invalid host",
    BL = "Invalid port",
    FL = /[a-z]/i,
    HL = /[\d+-.a-z]/i,
    zL = /\d/,
    qL = /^0x/i,
    $L = /^[0-7]+$/,
    VL = /^\d+$/,
    WL = /^[\da-f]+$/i,
    GL = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
    YL = /[\0\t\n\r #/:<>?@[\\\]^|]/,
    JL = /^[\u0000-\u0020]+/,
    KL = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,
    QL = /[\t\n\r]/g,
    XL = function(t) {
        var r, e, n, o;
        if ("number" == typeof t) {
            for (r = [], e = 0; e < 4; e++) NL(r, t % 256), t = RL(t / 256);
            return xL(r, ".")
        }
        if ("object" == typeof t) {
            for (r = "", n = function(t) {
                    for (var r = null, e = 1, n = null, o = 0, i = 0; i < 8; i++) 0 !== t[i] ? (o > e && (r = n, e = o), n = null, o = 0) : (null === n && (n = i), ++o);
                    return o > e ? n : r
                }(t), e = 0; e < 8; e++) o && 0 === t[e] || (o && (o = !1), n === e ? (r += e ? ":" : "::", o = !0) : (r += TL(t[e], 16), e < 7 && (r += ":")));
            return "[" + r + "]"
        }
        return t
    },
    ZL = {},
    tU = aL({}, ZL, {
        " ": 1,
        '"': 1,
        "<": 1,
        ">": 1,
        "`": 1
    }),
    rU = aL({}, tU, {
        "#": 1,
        "?": 1,
        "{": 1,
        "}": 1
    }),
    eU = aL({}, rU, {
        "/": 1,
        ":": 1,
        ";": 1,
        "=": 1,
        "@": 1,
        "[": 1,
        "\\": 1,
        "]": 1,
        "^": 1,
        "|": 1
    }),
    nU = function(t, r) {
        var e = sL(t, 0);
        return e > 32 && e < 127 && !iL(r, t) ? t : encodeURIComponent(t)
    },
    oU = {
        ftp: 21,
        file: null,
        http: 80,
        https: 443,
        ws: 80,
        wss: 443
    },
    iU = function(t, r) {
        var e;
        return 2 === t.length && IL(FL, OL(t, 0)) && (":" === (e = OL(t, 1)) || !r && "|" === e)
    },
    aU = function(t) {
        var r;
        return t.length > 1 && iU(jL(t, 0, 2)) && (2 === t.length || "/" === (r = OL(t, 2)) || "\\" === r || "?" === r || "#" === r)
    },
    uU = function(t) {
        return "." === t || "%2e" === _L(t)
    },
    cU = {},
    sU = {},
    fU = {},
    hU = {},
    lU = {},
    pU = {},
    vU = {},
    dU = {},
    gU = {},
    yU = {},
    mU = {},
    wU = {},
    bU = {},
    EU = {},
    SU = {},
    RU = {},
    AU = {},
    OU = {},
    IU = {},
    xU = {},
    TU = {},
    PU = function(t, r, e) {
        var n, o, i, a = hL(t);
        if (r) {
            if (o = this.parse(a)) throw new EL(o);
            this.searchParams = null
        } else {
            if (void 0 !== e && (n = new PU(e, !0)), o = this.parse(a, null, n)) throw new EL(o);
            (i = wL(new mL)).bindURL(this), this.searchParams = i
        }
    };
PU.prototype = {
    type: "URL",
    parse: function(t, r, e) {
        var n, o, i, a, u, c = this,
            s = r || cU,
            f = 0,
            h = "",
            l = !1,
            p = !1,
            v = !1;
        for (t = hL(t), r || (c.scheme = "", c.username = "", c.password = "", c.host = null, c.port = null, c.path = [], c.query = null, c.fragment = null, c.cannotBeABaseURL = !1, t = LL(t, JL, ""), t = LL(t, KL, "$1")), t = LL(t, QL, ""), n = uL(t); f <= n.length;) {
            switch (o = n[f], s) {
                case cU:
                    if (!o || !IL(FL, o)) {
                        if (r) return DL;
                        s = fU;
                        continue
                    }
                    h += _L(o), s = sU;
                    break;
                case sU:
                    if (o && (IL(HL, o) || "+" === o || "-" === o || "." === o)) h += _L(o);
                    else {
                        if (":" !== o) {
                            if (r) return DL;
                            h = "", s = fU, f = 0;
                            continue
                        }
                        if (r && (c.isSpecial() !== iL(oU, h) || "file" === h && (c.includesCredentials() || null !== c.port) || "file" === c.scheme && !c.host)) return;
                        if (c.scheme = h, r) return void(c.isSpecial() && oU[c.scheme] === c.port && (c.port = null));
                        h = "", "file" === c.scheme ? s = EU : c.isSpecial() && e && e.scheme === c.scheme ? s = hU : c.isSpecial() ? s = dU : "/" === n[f + 1] ? (s = lU, f++) : (c.cannotBeABaseURL = !0, kL(c.path, ""), s = IU)
                    }
                    break;
                case fU:
                    if (!e || e.cannotBeABaseURL && "#" !== o) return DL;
                    if (e.cannotBeABaseURL && "#" === o) {
                        c.scheme = e.scheme, c.path = cL(e.path), c.query = e.query, c.fragment = "", c.cannotBeABaseURL = !0, s = TU;
                        break
                    }
                    s = "file" === e.scheme ? EU : pU;
                    continue;
                case hU:
                    if ("/" !== o || "/" !== n[f + 1]) {
                        s = pU;
                        continue
                    }
                    s = gU, f++;
                    break;
                case lU:
                    if ("/" === o) {
                        s = yU;
                        break
                    }
                    s = OU;
                    continue;
                case pU:
                    if (c.scheme = e.scheme, o === Jk) c.username = e.username, c.password = e.password, c.host = e.host, c.port = e.port, c.path = cL(e.path), c.query = e.query;
                    else if ("/" === o || "\\" === o && c.isSpecial()) s = vU;
                    else if ("?" === o) c.username = e.username, c.password = e.password, c.host = e.host, c.port = e.port, c.path = cL(e.path), c.query = "", s = xU;
                    else {
                        if ("#" !== o) {
                            c.username = e.username, c.password = e.password, c.host = e.host, c.port = e.port, c.path = cL(e.path), c.path.length--, s = OU;
                            continue
                        }
                        c.username = e.username, c.password = e.password, c.host = e.host, c.port = e.port, c.path = cL(e.path), c.query = e.query, c.fragment = "", s = TU
                    }
                    break;
                case vU:
                    if (!c.isSpecial() || "/" !== o && "\\" !== o) {
                        if ("/" !== o) {
                            c.username = e.username, c.password = e.password, c.host = e.host, c.port = e.port, s = OU;
                            continue
                        }
                        s = yU
                    } else s = gU;
                    break;
                case dU:
                    if (s = gU, "/" !== o || "/" !== OL(h, f + 1)) continue;
                    f++;
                    break;
                case gU:
                    if ("/" !== o && "\\" !== o) {
                        s = yU;
                        continue
                    }
                    break;
                case yU:
                    if ("@" === o) {
                        l && (h = "%40" + h), l = !0, i = uL(h);
                        for (var d = 0; d < i.length; d++) {
                            var g = i[d];
                            if (":" !== g || v) {
                                var y = nU(g, eU);
                                v ? c.password += y : c.username += y
                            } else v = !0
                        }
                        h = ""
                    } else if (o === Jk || "/" === o || "?" === o || "#" === o || "\\" === o && c.isSpecial()) {
                        if (l && "" === h) return "Invalid authority";
                        f -= uL(h).length + 1, h = "", s = mU
                    } else h += o;
                    break;
                case mU:
                case wU:
                    if (r && "file" === c.scheme) {
                        s = RU;
                        continue
                    }
                    if (":" !== o || p) {
                        if (o === Jk || "/" === o || "?" === o || "#" === o || "\\" === o && c.isSpecial()) {
                            if (c.isSpecial() && "" === h) return ML;
                            if (r && "" === h && (c.includesCredentials() || null !== c.port)) return;
                            if (a = c.parseHost(h)) return a;
                            if (h = "", s = AU, r) return;
                            continue
                        }
                        "[" === o ? p = !0 : "]" === o && (p = !1), h += o
                    } else {
                        if ("" === h) return ML;
                        if (a = c.parseHost(h)) return a;
                        if (h = "", s = bU, r === wU) return
                    }
                    break;
                case bU:
                    if (!IL(zL, o)) {
                        if (o === Jk || "/" === o || "?" === o || "#" === o || "\\" === o && c.isSpecial() || r) {
                            if ("" !== h) {
                                var m = SL(h, 10);
                                if (m > 65535) return BL;
                                c.port = c.isSpecial() && m === oU[c.scheme] ? null : m, h = ""
                            }
                            if (r) return;
                            s = AU;
                            continue
                        }
                        return BL
                    }
                    h += o;
                    break;
                case EU:
                    if (c.scheme = "file", "/" === o || "\\" === o) s = SU;
                    else {
                        if (!e || "file" !== e.scheme) {
                            s = OU;
                            continue
                        }
                        switch (o) {
                            case Jk:
                                c.host = e.host, c.path = cL(e.path), c.query = e.query;
                                break;
                            case "?":
                                c.host = e.host, c.path = cL(e.path), c.query = "", s = xU;
                                break;
                            case "#":
                                c.host = e.host, c.path = cL(e.path), c.query = e.query, c.fragment = "", s = TU;
                                break;
                            default:
                                aU(xL(cL(n, f), "")) || (c.host = e.host, c.path = cL(e.path), c.shortenPath()), s = OU;
                                continue
                        }
                    }
                    break;
                case SU:
                    if ("/" === o || "\\" === o) {
                        s = RU;
                        break
                    }
                    e && "file" === e.scheme && !aU(xL(cL(n, f), "")) && (iU(e.path[0], !0) ? kL(c.path, e.path[0]) : c.host = e.host), s = OU;
                    continue;
                case RU:
                    if (o === Jk || "/" === o || "\\" === o || "?" === o || "#" === o) {
                        if (!r && iU(h)) s = OU;
                        else if ("" === h) {
                            if (c.host = "", r) return;
                            s = AU
                        } else {
                            if (a = c.parseHost(h)) return a;
                            if ("localhost" === c.host && (c.host = ""), r) return;
                            h = "", s = AU
                        }
                        continue
                    }
                    h += o;
                    break;
                case AU:
                    if (c.isSpecial()) {
                        if (s = OU, "/" !== o && "\\" !== o) continue
                    } else if (r || "?" !== o)
                        if (r || "#" !== o) {
                            if (o !== Jk && (s = OU, "/" !== o)) continue
                        } else c.fragment = "", s = TU;
                    else c.query = "", s = xU;
                    break;
                case OU:
                    if (o === Jk || "/" === o || "\\" === o && c.isSpecial() || !r && ("?" === o || "#" === o)) {
                        if (".." === (u = _L(u = h)) || "%2e." === u || ".%2e" === u || "%2e%2e" === u ? (c.shortenPath(), "/" === o || "\\" === o && c.isSpecial() || kL(c.path, "")) : uU(h) ? "/" === o || "\\" === o && c.isSpecial() || kL(c.path, "") : ("file" === c.scheme && !c.path.length && iU(h) && (c.host && (c.host = ""), h = OL(h, 0) + ":"), kL(c.path, h)), h = "", "file" === c.scheme && (o === Jk || "?" === o || "#" === o))
                            for (; c.path.length > 1 && "" === c.path[0];) UL(c.path);
                        "?" === o ? (c.query = "", s = xU) : "#" === o && (c.fragment = "", s = TU)
                    } else h += nU(o, rU);
                    break;
                case IU:
                    "?" === o ? (c.query = "", s = xU) : "#" === o ? (c.fragment = "", s = TU) : o !== Jk && (c.path[0] += nU(o, ZL));
                    break;
                case xU:
                    r || "#" !== o ? o !== Jk && ("'" === o && c.isSpecial() ? c.query += "%27" : c.query += "#" === o ? "%23" : nU(o, ZL)) : (c.fragment = "", s = TU);
                    break;
                case TU:
                    o !== Jk && (c.fragment += nU(o, tU))
            }
            f++
        }
    },
    parseHost: function(t) {
        var r, e, n;
        if ("[" === OL(t, 0)) {
            if ("]" !== OL(t, t.length - 1)) return ML;
            if (r = function(t) {
                    var r, e, n, o, i, a, u, c = [0, 0, 0, 0, 0, 0, 0, 0],
                        s = 0,
                        f = null,
                        h = 0,
                        l = function() {
                            return OL(t, h)
                        };
                    if (":" === l()) {
                        if (":" !== OL(t, 1)) return;
                        h += 2, f = ++s
                    }
                    for (; l();) {
                        if (8 === s) return;
                        if (":" !== l()) {
                            for (r = e = 0; e < 4 && IL(WL, l());) r = 16 * r + SL(l(), 16), h++, e++;
                            if ("." === l()) {
                                if (0 === e) return;
                                if (h -= e, s > 6) return;
                                for (n = 0; l();) {
                                    if (o = null, n > 0) {
                                        if (!("." === l() && n < 4)) return;
                                        h++
                                    }
                                    if (!IL(zL, l())) return;
                                    for (; IL(zL, l());) {
                                        if (i = SL(l(), 10), null === o) o = i;
                                        else {
                                            if (0 === o) return;
                                            o = 10 * o + i
                                        }
                                        if (o > 255) return;
                                        h++
                                    }
                                    c[s] = 256 * c[s] + o, 2 != ++n && 4 !== n || s++
                                }
                                if (4 !== n) return;
                                break
                            }
                            if (":" === l()) {
                                if (h++, !l()) return
                            } else if (l()) return;
                            c[s++] = r
                        } else {
                            if (null !== f) return;
                            h++, f = ++s
                        }
                    }
                    if (null !== f)
                        for (a = s - f, s = 7; 0 !== s && a > 0;) u = c[s], c[s--] = c[f + a - 1], c[f + --a] = u;
                    else if (8 !== s) return;
                    return c
                }(jL(t, 1, -1)), !r) return ML;
            this.host = r
        } else if (this.isSpecial()) {
            if (t = fL(t), IL(GL, t)) return ML;
            if (r = function(t) {
                    var r, e, n, o, i, a, u, c = CL(t, ".");
                    if (c.length && "" === c[c.length - 1] && c.length--, (r = c.length) > 4) return t;
                    for (e = [], n = 0; n < r; n++) {
                        if ("" === (o = c[n])) return t;
                        if (i = 10, o.length > 1 && "0" === OL(o, 0) && (i = IL(qL, o) ? 16 : 8, o = jL(o, 8 === i ? 1 : 2)), "" === o) a = 0;
                        else {
                            if (!IL(10 === i ? VL : 8 === i ? $L : WL, o)) return t;
                            a = SL(o, i)
                        }
                        kL(e, a)
                    }
                    for (n = 0; n < r; n++)
                        if (a = e[n], n === r - 1) {
                            if (a >= AL(256, 5 - r)) return null
                        } else if (a > 255) return null;
                    for (u = PL(e), n = 0; n < e.length; n++) u += e[n] * AL(256, 3 - n);
                    return u
                }(t), null === r) return ML;
            this.host = r
        } else {
            if (IL(YL, t)) return ML;
            for (r = "", e = uL(t), n = 0; n < e.length; n++) r += nU(e[n], ZL);
            this.host = r
        }
    },
    cannotHaveUsernamePasswordPort: function() {
        return !this.host || this.cannotBeABaseURL || "file" === this.scheme
    },
    includesCredentials: function() {
        return "" !== this.username || "" !== this.password
    },
    isSpecial: function() {
        return iL(oU, this.scheme)
    },
    shortenPath: function() {
        var t = this.path,
            r = t.length;
        !r || "file" === this.scheme && 1 === r && iU(t[0], !0) || t.length--
    },
    serialize: function() {
        var t = this,
            r = t.scheme,
            e = t.username,
            n = t.password,
            o = t.host,
            i = t.port,
            a = t.path,
            u = t.query,
            c = t.fragment,
            s = r + ":";
        return null !== o ? (s += "//", t.includesCredentials() && (s += e + (n ? ":" + n : "") + "@"), s += XL(o), null !== i && (s += ":" + i)) : "file" === r && (s += "//"), s += t.cannotBeABaseURL ? a[0] : a.length ? "/" + xL(a, "/") : "", null !== u && (s += "?" + u), null !== c && (s += "#" + c), s
    },
    setHref: function(t) {
        var r = this.parse(t);
        if (r) throw new EL(r);
        this.searchParams.update()
    },
    getOrigin: function() {
        var t = this.scheme,
            r = this.port;
        if ("blob" === t) try {
            return new kU(t.path[0]).origin
        } catch (vD) {
            return "null"
        }
        return "file" !== t && this.isSpecial() ? t + "://" + XL(this.host) + (null !== r ? ":" + r : "") : "null"
    },
    getProtocol: function() {
        return this.scheme + ":"
    },
    setProtocol: function(t) {
        this.parse(hL(t) + ":", cU)
    },
    getUsername: function() {
        return this.username
    },
    setUsername: function(t) {
        var r = uL(hL(t));
        if (!this.cannotHaveUsernamePasswordPort()) {
            this.username = "";
            for (var e = 0; e < r.length; e++) this.username += nU(r[e], eU)
        }
    },
    getPassword: function() {
        return this.password
    },
    setPassword: function(t) {
        var r = uL(hL(t));
        if (!this.cannotHaveUsernamePasswordPort()) {
            this.password = "";
            for (var e = 0; e < r.length; e++) this.password += nU(r[e], eU)
        }
    },
    getHost: function() {
        var t = this.host,
            r = this.port;
        return null === t ? "" : null === r ? XL(t) : XL(t) + ":" + r
    },
    setHost: function(t) {
        this.cannotBeABaseURL || this.parse(t, mU)
    },
    getHostname: function() {
        var t = this.host;
        return null === t ? "" : XL(t)
    },
    setHostname: function(t) {
        this.cannotBeABaseURL || this.parse(t, wU)
    },
    getPort: function() {
        var t = this.port;
        return null === t ? "" : hL(t)
    },
    setPort: function(t) {
        this.cannotHaveUsernamePasswordPort() || ("" === (t = hL(t)) ? this.port = null : this.parse(t, bU))
    },
    getPathname: function() {
        var t = this.path;
        return this.cannotBeABaseURL ? t[0] : t.length ? "/" + xL(t, "/") : ""
    },
    setPathname: function(t) {
        this.cannotBeABaseURL || (this.path = [], this.parse(t, AU))
    },
    getSearch: function() {
        var t = this.query;
        return t ? "?" + t : ""
    },
    setSearch: function(t) {
        "" === (t = hL(t)) ? this.query = null: ("?" === OL(t, 0) && (t = jL(t, 1)), this.query = "", this.parse(t, xU)), this.searchParams.update()
    },
    getSearchParams: function() {
        return this.searchParams.facade
    },
    getHash: function() {
        var t = this.fragment;
        return t ? "#" + t : ""
    },
    setHash: function(t) {
        "" !== (t = hL(t)) ? ("#" === OL(t, 0) && (t = jL(t, 1)), this.fragment = "", this.parse(t, TU)) : this.fragment = null
    },
    update: function() {
        this.query = this.searchParams.serialize() || null
    }
};
var kU = function(t) {
        var r = oL(this, LU),
            e = pL(arguments.length, 1) > 1 ? arguments[1] : void 0,
            n = gL(r, new PU(t, !1, e));
        Qk || (r.href = n.serialize(), r.origin = n.getOrigin(), r.protocol = n.getProtocol(), r.username = n.getUsername(), r.password = n.getPassword(), r.host = n.getHost(), r.hostname = n.getHostname(), r.port = n.getPort(), r.pathname = n.getPathname(), r.search = n.getSearch(), r.searchParams = n.getSearchParams(), r.hash = n.getHash())
    },
    LU = kU.prototype,
    UU = function(t, r) {
        return {
            get: function() {
                return yL(this)[t]()
            },
            set: r && function(t) {
                return yL(this)[r](t)
            },
            configurable: !0,
            enumerable: !0
        }
    };
if (Qk && (nL(LU, "href", UU("serialize", "setHref")), nL(LU, "origin", UU("getOrigin")), nL(LU, "protocol", UU("getProtocol", "setProtocol")), nL(LU, "username", UU("getUsername", "setUsername")), nL(LU, "password", UU("getPassword", "setPassword")), nL(LU, "host", UU("getHost", "setHost")), nL(LU, "hostname", UU("getHostname", "setHostname")), nL(LU, "port", UU("getPort", "setPort")), nL(LU, "pathname", UU("getPathname", "setPathname")), nL(LU, "search", UU("getSearch", "setSearch")), nL(LU, "searchParams", UU("getSearchParams")), nL(LU, "hash", UU("getHash", "setHash"))), eL(LU, "toJSON", (function() {
        return yL(this).serialize()
    }), {
        enumerable: !0
    }), eL(LU, "toString", (function() {
        return yL(this).serialize()
    }), {
        enumerable: !0
    }), bL) {
    var CU = bL.createObjectURL,
        jU = bL.revokeObjectURL;
    CU && eL(kU, "createObjectURL", tL(CU, bL)), jU && eL(kU, "revokeObjectURL", tL(jU, bL))
}
lL(kU, "URL"), Kk({
    global: !0,
    constructor: !0,
    forced: !Xk,
    sham: !Qk
}, {
    URL: kU
});
var _U = s;
ro({
    target: "URL",
    proto: !0,
    enumerable: !0
}, {
    toJSON: function() {
        return _U(URL.prototype.toString, this)
    }
});
var NU = Qe,
    DU = E,
    MU = Do,
    BU = vs,
    FU = URLSearchParams,
    HU = FU.prototype,
    zU = DU(HU.append),
    qU = DU(HU.delete),
    $U = DU(HU.forEach),
    VU = DU([].push),
    WU = new FU("a=1&a=2&b=3");
WU.delete("a", 1), WU.delete("b", void 0), WU + "" != "a=2" && NU(HU, "delete", (function(t) {
    var r = arguments.length,
        e = r < 2 ? void 0 : arguments[1];
    if (r && void 0 === e) return qU(this, t);
    var n = [];
    $U(this, (function(t, r) {
        VU(n, {
            key: r,
            value: t
        })
    })), BU(r, 1);
    for (var o, i = MU(t), a = MU(e), u = 0, c = 0, s = !1, f = n.length; u < f;) o = n[u++], s || o.key === i ? (s = !0, qU(this, o.key)) : c++;
    for (; c < f;)(o = n[c++]).key === i && o.value === a || zU(this, o.key, o.value)
}), {
    enumerable: !0,
    unsafe: !0
});
var GU = Qe,
    YU = E,
    JU = Do,
    KU = vs,
    QU = URLSearchParams,
    XU = QU.prototype,
    ZU = YU(XU.getAll),
    tC = YU(XU.has),
    rC = new QU("a=1");
!rC.has("a", 2) && rC.has("a", void 0) || GU(XU, "has", (function(t) {
    var r = arguments.length,
        e = r < 2 ? void 0 : arguments[1];
    if (r && void 0 === e) return tC(this, t);
    var n = ZU(this, t);
    KU(r, 1);
    for (var o = JU(e), i = 0; i < n.length;)
        if (n[i++] === o) return !0;
    return !1
}), {
    enumerable: !0,
    unsafe: !0
});
var eC = i,
    nC = E,
    oC = Oc,
    iC = URLSearchParams.prototype,
    aC = nC(iC.forEach);
eC && !("size" in iC) && oC(iC, "size", {
    get: function() {
        var t = 0;
        return aC(this, (function() {
            t++
        })), t
    },
    configurable: !0,
    enumerable: !0
});
var uC = yu,
    cC = ln,
    sC = Au,
    fC = ls,
    hC = function(t, r, e, n, o, i, a, u) {
        for (var c, s, f = o, h = 0, l = !!a && fC(a, u); h < n;) h in e && (c = l ? l(e[h], h, r) : e[h], i > 0 && uC(c) ? (s = cC(c), f = hC(t, r, c, s, f, i - 1) - 1) : (sC(f + 1), t[f] = c), f++), h++;
        return f
    },
    lC = hC,
    pC = lC,
    vC = yt,
    dC = Mt,
    gC = ln,
    yC = YO;
ro({
    target: "Array",
    proto: !0
}, {
    flatMap: function(t) {
        var r, e = dC(this),
            n = gC(e);
        return vC(t), (r = yC(e, 0)).length = pC(r, e, e, n, 0, 1, t, arguments.length > 1 ? arguments[1] : void 0), r
    }
}), ta("flatMap");
var mC = Mt,
    wC = ln,
    bC = Su,
    EC = nb,
    SC = Au;
ro({
    target: "Array",
    proto: !0,
    arity: 1,
    forced: 1 !== [].unshift(0) || ! function() {
        try {
            Object.defineProperty([], "length", {
                writable: !1
            }).unshift()
        } catch (vD) {
            return vD instanceof TypeError
        }
    }()
}, {
    unshift: function(t) {
        var r = mC(this),
            e = wC(r),
            n = arguments.length;
        if (n) {
            SC(e + n);
            for (var o = e; o--;) {
                var i = o + n;
                o in r ? r[i] = r[o] : EC(r, i)
            }
            for (var a = 0; a < n; a++) r[a] = arguments[a]
        }
        return bC(r, e + n)
    }
});
var RC = dl,
    AC = yt,
    OC = Cr,
    IC = ov;
ro({
    target: "Iterator",
    proto: !0,
    real: !0
}, {
    every: function(t) {
        OC(this), AC(t);
        var r = IC(this),
            e = 0;
        return !RC(r, (function(r, n) {
            if (!t(r, e++)) return n()
        }), {
            IS_RECORD: !0,
            INTERRUPTED: !0
        }).stopped
    }
});
var xC = s,
    TC = Cr,
    PC = ov,
    kC = $h,
    LC = ro,
    UC = s,
    CC = yt,
    jC = Cr,
    _C = ov,
    NC = function(t, r) {
        r && "string" == typeof t || TC(t);
        var e = kC(t);
        return PC(TC(void 0 !== e ? xC(e, t) : t))
    },
    DC = rl,
    MC = wg((function() {
        for (var t, r, e = this.iterator, n = this.mapper;;) {
            if (r = this.inner) try {
                if (!(t = jC(UC(r.next, r.iterator))).done) return t.value;
                this.inner = null
            } catch (vD) {
                DC(e, "throw", vD)
            }
            if (t = jC(UC(this.next, e)), this.done = !!t.done) return;
            try {
                this.inner = NC(n(t.value, this.counter++), !1)
            } catch (vD) {
                DC(e, "throw", vD)
            }
        }
    }));
LC({
    target: "Iterator",
    proto: !0,
    real: !0,
    forced: false
}, {
    flatMap: function(t) {
        return jC(this), CC(t), new MC(_C(this), {
            mapper: t,
            inner: null
        })
    }
});
var BC = E(1..valueOf),
    FC = en,
    HC = Do,
    zC = j,
    qC = RangeError,
    $C = Math.log,
    VC = Math.LOG10E,
    WC = Math.log10 || function(t) {
        return $C(t) * VC
    },
    GC = ro,
    YC = E,
    JC = en,
    KC = BC,
    QC = function(t) {
        var r = HC(zC(this)),
            e = "",
            n = FC(t);
        if (n < 0 || n === 1 / 0) throw new qC("Wrong number of repetitions");
        for (; n > 0;
            (n >>>= 1) && (r += r)) 1 & n && (e += r);
        return e
    },
    XC = WC,
    ZC = o,
    tj = RangeError,
    rj = String,
    ej = isFinite,
    nj = Math.abs,
    oj = Math.floor,
    ij = Math.pow,
    aj = Math.round,
    uj = YC(1..toExponential),
    cj = YC(QC),
    sj = YC("".slice),
    fj = "-6.9000e-11" === uj(-69e-12, 4) && "1.25e+0" === uj(1.255, 2) && "1.235e+4" === uj(12345, 3) && "3e+1" === uj(25, 0);
GC({
    target: "Number",
    proto: !0,
    forced: !fj || !(ZC((function() {
        uj(1, 1 / 0)
    })) && ZC((function() {
        uj(1, -1 / 0)
    }))) || !!ZC((function() {
        uj(1 / 0, 1 / 0), uj(NaN, 1 / 0)
    }))
}, {
    toExponential: function(t) {
        var r = KC(this);
        if (void 0 === t) return uj(r);
        var e = JC(t);
        if (!ej(r)) return String(r);
        if (e < 0 || e > 20) throw new tj("Incorrect fraction digits");
        if (fj) return uj(r, e);
        var n, o, i, a, u = "";
        if (r < 0 && (u = "-", r = -r), 0 === r) o = 0, n = cj("0", e + 1);
        else {
            var c = XC(r);
            o = oj(c);
            var s = ij(10, o - e),
                f = aj(r / s);
            2 * r >= (2 * f + 1) * s && (f += 1), f >= ij(10, e + 1) && (f /= 10, o += 1), n = rj(f)
        }
        return 0 !== e && (n = sj(n, 0, 1) + "." + sj(n, 1)), 0 === o ? (i = "+", a = "0") : (i = o > 0 ? "+" : "-", a = rj(nj(o))), u + (n += "e" + i + a)
    }
}), ex("Uint32", (function(t) {
    return function(r, e, n) {
        return t(this, r, e, n)
    }
}));
var hj = e,
    lj = Ta;
ro({
    global: !0
}, {
    Reflect: {}
}), lj(hj.Reflect, "Reflect", !0);
var pj = i,
    vj = Oc,
    dj = ap,
    gj = o,
    yj = e.RegExp,
    mj = yj.prototype,
    wj = pj && gj((function() {
        var t = !0;
        try {
            yj(".", "d")
        } catch (vD) {
            t = !1
        }
        var r = {},
            e = "",
            n = t ? "dgimsy" : "gimsy",
            o = function(t, n) {
                Object.defineProperty(r, t, {
                    get: function() {
                        return e += n, !0
                    }
                })
            },
            i = {
                dotAll: "s",
                global: "g",
                ignoreCase: "i",
                multiline: "m",
                sticky: "y"
            };
        for (var a in t && (i.hasIndices = "d"), i) o(a, i[a]);
        return Object.getOwnPropertyDescriptor(mj, "flags").get.call(r) !== n || e !== n
    }));
wj && vj(mj, "flags", {
    configurable: !0,
    get: dj
});
var bj = Iw.end,
    Ej = kw("trimEnd") ? function() {
        return bj(this)
    } : "".trimEnd;
ro({
    target: "String",
    proto: !0,
    name: "trimEnd",
    forced: "".trimRight !== Ej
}, {
    trimRight: Ej
});
ro({
    target: "String",
    proto: !0,
    name: "trimEnd",
    forced: "".trimEnd !== Ej
}, {
    trimEnd: Ej
}), ex("Float32", (function(t) {
    return function(r, e, n) {
        return t(this, r, e, n)
    }
})), ex("Float64", (function(t) {
    return function(r, e, n) {
        return t(this, r, e, n)
    }
})), ex("Int8", (function(t) {
    return function(r, e, n) {
        return t(this, r, e, n)
    }
})), ex("Int16", (function(t) {
    return function(r, e, n) {
        return t(this, r, e, n)
    }
})), ex("Int32", (function(t) {
    return function(r, e, n) {
        return t(this, r, e, n)
    }
})), ex("Uint8", (function(t) {
    return function(r, e, n) {
        return t(this, r, e, n)
    }
}), !0), ex("Uint16", (function(t) {
    return function(r, e, n) {
        return t(this, r, e, n)
    }
}));
var Sj = ro,
    Rj = V,
    Aj = da,
    Oj = bo,
    Ij = Mn,
    xj = Yi,
    Tj = Gr,
    Pj = g,
    kj = ri,
    Lj = Bo,
    Uj = rr,
    Cj = o,
    jj = e.SuppressedError,
    _j = Uj("toStringTag"),
    Nj = Error,
    Dj = !!jj && 3 !== jj.length,
    Mj = !!jj && Cj((function() {
        return 4 === new jj(1, 2, 3, {
            cause: 4
        }).cause
    })),
    Bj = Dj || Mj,
    Fj = function(t, r, e) {
        var n, o = Rj(Hj, this);
        return Oj ? n = !Bj || o && Aj(this) !== Hj ? Oj(new Nj, o ? Aj(this) : Hj) : new jj : (n = o ? this : xj(Hj), Tj(n, _j, "Error")), void 0 !== e && Tj(n, "message", Lj(e)), kj(n, Fj, n.stack, 1), Tj(n, "error", t), Tj(n, "suppressed", r), n
    };
Oj ? Oj(Fj, Nj) : Ij(Fj, Nj, {
    name: !0
});
var Hj = Fj.prototype = Bj ? jj.prototype : xj(Nj.prototype, {
    constructor: Pj(1, Fj),
    message: Pj(1, ""),
    name: Pj(1, "SuppressedError")
});
Bj && (Hj.constructor = Fj), Sj({
    global: !0,
    constructor: !0,
    arity: 3,
    forced: Bj
}, {
    SuppressedError: Fj
});
var zj = RangeError,
    qj = ro,
    $j = s,
    Vj = Cr,
    Wj = ov,
    Gj = function(t) {
        if (t == t) return t;
        throw new zj("NaN is not allowed")
    },
    Yj = EO,
    Jj = wg((function() {
        for (var t, r = this.iterator, e = this.next; this.remaining;)
            if (this.remaining--, t = Vj($j(e, r)), this.done = !!t.done) return;
        if (t = Vj($j(e, r)), !(this.done = !!t.done)) return t.value
    }));
qj({
    target: "Iterator",
    proto: !0,
    real: !0,
    forced: false
}, {
    drop: function(t) {
        Vj(this);
        var r = Yj(Gj(+t));
        return new Jj(Wj(this), {
            remaining: r
        })
    }
});
var Kj = ro,
    Qj = e,
    Xj = $,
    Zj = g,
    t_ = Tr.f,
    r_ = Ht,
    e_ = Cc,
    n_ = Io,
    o_ = Bo,
    i_ = {
        IndexSizeError: {
            s: "INDEX_SIZE_ERR",
            c: 1,
            m: 1
        },
        DOMStringSizeError: {
            s: "DOMSTRING_SIZE_ERR",
            c: 2,
            m: 0
        },
        HierarchyRequestError: {
            s: "HIERARCHY_REQUEST_ERR",
            c: 3,
            m: 1
        },
        WrongDocumentError: {
            s: "WRONG_DOCUMENT_ERR",
            c: 4,
            m: 1
        },
        InvalidCharacterError: {
            s: "INVALID_CHARACTER_ERR",
            c: 5,
            m: 1
        },
        NoDataAllowedError: {
            s: "NO_DATA_ALLOWED_ERR",
            c: 6,
            m: 0
        },
        NoModificationAllowedError: {
            s: "NO_MODIFICATION_ALLOWED_ERR",
            c: 7,
            m: 1
        },
        NotFoundError: {
            s: "NOT_FOUND_ERR",
            c: 8,
            m: 1
        },
        NotSupportedError: {
            s: "NOT_SUPPORTED_ERR",
            c: 9,
            m: 1
        },
        InUseAttributeError: {
            s: "INUSE_ATTRIBUTE_ERR",
            c: 10,
            m: 1
        },
        InvalidStateError: {
            s: "INVALID_STATE_ERR",
            c: 11,
            m: 1
        },
        SyntaxError: {
            s: "SYNTAX_ERR",
            c: 12,
            m: 1
        },
        InvalidModificationError: {
            s: "INVALID_MODIFICATION_ERR",
            c: 13,
            m: 1
        },
        NamespaceError: {
            s: "NAMESPACE_ERR",
            c: 14,
            m: 1
        },
        InvalidAccessError: {
            s: "INVALID_ACCESS_ERR",
            c: 15,
            m: 1
        },
        ValidationError: {
            s: "VALIDATION_ERR",
            c: 16,
            m: 0
        },
        TypeMismatchError: {
            s: "TYPE_MISMATCH_ERR",
            c: 17,
            m: 1
        },
        SecurityError: {
            s: "SECURITY_ERR",
            c: 18,
            m: 1
        },
        NetworkError: {
            s: "NETWORK_ERR",
            c: 19,
            m: 1
        },
        AbortError: {
            s: "ABORT_ERR",
            c: 20,
            m: 1
        },
        URLMismatchError: {
            s: "URL_MISMATCH_ERR",
            c: 21,
            m: 1
        },
        QuotaExceededError: {
            s: "QUOTA_EXCEEDED_ERR",
            c: 22,
            m: 1
        },
        TimeoutError: {
            s: "TIMEOUT_ERR",
            c: 23,
            m: 1
        },
        InvalidNodeTypeError: {
            s: "INVALID_NODE_TYPE_ERR",
            c: 24,
            m: 1
        },
        DataCloneError: {
            s: "DATA_CLONE_ERR",
            c: 25,
            m: 1
        }
    },
    a_ = Yo,
    u_ = i,
    c_ = "DOMException",
    s_ = Xj("Error"),
    f_ = Xj(c_),
    h_ = function() {
        e_(this, l_);
        var t = arguments.length,
            r = o_(t < 1 ? void 0 : arguments[0]),
            e = o_(t < 2 ? void 0 : arguments[1], "Error"),
            n = new f_(r, e),
            o = new s_(r);
        return o.name = c_, t_(n, "stack", Zj(1, a_(o.stack, 1))), n_(n, this, h_), n
    },
    l_ = h_.prototype = f_.prototype,
    p_ = "stack" in new s_(c_),
    v_ = "stack" in new f_(1, 2),
    d_ = f_ && u_ && Object.getOwnPropertyDescriptor(Qj, c_),
    g_ = !(!d_ || d_.writable && d_.configurable),
    y_ = p_ && !g_ && !v_;
Kj({
    global: !0,
    constructor: !0,
    forced: y_
}, {
    DOMException: y_ ? h_ : f_
});
var m_ = Xj(c_),
    w_ = m_.prototype;
if (w_.constructor !== m_)
    for (var b_ in t_(w_, "constructor", Zj(1, m_)), i_)
        if (r_(i_, b_)) {
            var E_ = i_[b_],
                S_ = E_.s;
            r_(m_, S_) || t_(m_, S_, Zj(6, E_.c))
        }
var R_ = ro,
    A_ = V,
    O_ = da,
    I_ = bo,
    x_ = Mn,
    T_ = Yi,
    P_ = Gr,
    k_ = g,
    L_ = zo,
    U_ = ri,
    C_ = dl,
    j_ = Bo,
    __ = rr("toStringTag"),
    N_ = Error,
    D_ = [].push,
    M_ = function(t, r) {
        var e, n = A_(B_, this);
        I_ ? e = I_(new N_, n ? O_(this) : B_) : (e = n ? this : T_(B_), P_(e, __, "Error")), void 0 !== r && P_(e, "message", j_(r)), U_(e, M_, e.stack, 1), arguments.length > 2 && L_(e, arguments[2]);
        var o = [];
        return C_(t, D_, {
            that: o
        }), P_(e, "errors", o), e
    };
I_ ? I_(M_, N_) : x_(M_, N_, {
    name: !0
});
var B_ = M_.prototype = T_(N_.prototype, {
    constructor: k_(1, M_),
    message: k_(1, ""),
    name: k_(1, "AggregateError")
});
R_({
    global: !0,
    constructor: !0,
    arity: 2
}, {
    AggregateError: M_
});
var F_ = ro,
    H_ = uo,
    z_ = o,
    q_ = vi,
    $_ = "AggregateError",
    V_ = $($_),
    W_ = !z_((function() {
        return 1 !== V_([1]).errors[0]
    })) && z_((function() {
        return 7 !== V_([1], $_, {
            cause: 7
        }).cause
    }));
F_({
    global: !0,
    constructor: !0,
    arity: 2,
    forced: W_
}, {
    AggregateError: q_($_, (function(t) {
        return function(r, e) {
            return H_(t, this, arguments)
        }
    }), W_, !0)
});
var G_ = ro,
    Y_ = s,
    J_ = cs,
    K_ = _a,
    Q_ = eu,
    X_ = j,
    Z_ = fn,
    tN = Do,
    rN = Cr,
    eN = L,
    nN = RR,
    oN = PR,
    iN = bt,
    aN = Qe,
    uN = o,
    cN = is,
    sN = Lm,
    fN = Wm,
    hN = Te,
    lN = rr("matchAll"),
    pN = "RegExp String",
    vN = pN + " Iterator",
    dN = hN.set,
    gN = hN.getterFor(vN),
    yN = RegExp.prototype,
    mN = TypeError,
    wN = J_("".indexOf),
    bN = J_("".matchAll),
    EN = !!bN && !uN((function() {
        bN("a", /./)
    })),
    SN = K_((function(t, r, e, n) {
        dN(this, {
            type: vN,
            regexp: t,
            string: r,
            global: e,
            unicode: n,
            done: !1
        })
    }), pN, (function() {
        var t = gN(this);
        if (t.done) return Q_(void 0, !0);
        var r = t.regexp,
            e = t.string,
            n = fN(r, e);
        return null === n ? (t.done = !0, Q_(void 0, !0)) : t.global ? ("" === tN(n[0]) && (r.lastIndex = sN(e, Z_(r.lastIndex), t.unicode)), Q_(n, !1)) : (t.done = !0, Q_(n, !1))
    })),
    RN = function(t) {
        var r, e, n, o = rN(this),
            i = tN(t),
            a = cN(o, RegExp),
            u = tN(oN(o));
        return r = new a(a === RegExp ? o.source : o, u), e = !!~wN(u, "g"), n = !!~wN(u, "u"), r.lastIndex = Z_(o.lastIndex), new SN(r, i, e, n)
    };
G_({
    target: "String",
    proto: !0,
    forced: EN
}, {
    matchAll: function(t) {
        var r, e, n, o = X_(this);
        if (eN(t)) {
            if (EN) return bN(o, t)
        } else {
            if (nN(t) && (r = tN(X_(oN(t))), !~wN(r, "g"))) throw new mN("`.matchAll` does not allow non-global regexes");
            if (EN) return bN(o, t);
            if (n = iN(t, lN)) return Y_(n, t, o)
        }
        return e = tN(o), new RegExp(t, "g")[lN](e)
    }
}), lN in yN || aN(yN, lN, RN);
var AN = zs.clear;
ro({
    global: !0,
    bind: !0,
    enumerable: !0,
    forced: e.clearImmediate !== AN
}, {
    clearImmediate: AN
});
var ON = e,
    IN = uo,
    xN = B,
    TN = qu,
    PN = Y,
    kN = Wu,
    LN = vs,
    UN = ON.Function,
    CN = /MSIE .\./.test(PN) || "BUN" === TN && function() {
        var t = ON.Bun.version.split(".");
        return t.length < 3 || "0" === t[0] && (t[1] < 3 || "3" === t[1] && "0" === t[2])
    }(),
    jN = ro,
    _N = e,
    NN = zs.set,
    DN = function(t, r) {
        var e = r ? 2 : 1;
        return CN ? function(n, o) {
            var i = LN(arguments.length, 1) > e,
                a = xN(n) ? n : UN(n),
                u = i ? kN(arguments, e) : [],
                c = i ? function() {
                    IN(a, this, u)
                } : a;
            return r ? t(c, o) : t(c)
        } : t
    },
    MN = _N.setImmediate ? DN(NN, !1) : NN;
jN({
    global: !0,
    bind: !0,
    enumerable: !0,
    forced: _N.setImmediate !== MN
}, {
    setImmediate: MN
});
var BN = e,
    FN = wf,
    HN = yt,
    zN = vs,
    qN = i;
ro({
    global: !0,
    enumerable: !0,
    dontCallGetSet: !0,
    forced: o((function() {
        return qN && 1 !== Object.getOwnPropertyDescriptor(BN, "queueMicrotask").value.length
    }))
}, {
    queueMicrotask: function(t) {
        zN(arguments.length, 1), FN(HN(t))
    }
});
var $N = lC,
    VN = Mt,
    WN = ln,
    GN = en,
    YN = YO;
ro({
    target: "Array",
    proto: !0
}, {
    flat: function() {
        var t = arguments.length ? arguments[0] : void 0,
            r = VN(this),
            e = WN(r),
            n = YN(r, 0);
        return n.length = $N(n, r, r, e, 0, void 0 === t ? 1 : GN(t)), n
    }
}), ta("flat");
var JN = dl,
    KN = jd;
ro({
    target: "Object",
    stat: !0
}, {
    fromEntries: function(t) {
        var r = {};
        return JN(t, (function(t, e) {
            KN(r, t, e)
        }), {
            AS_ENTRIES: !0
        }), r
    }
});
var QN = s,
    XN = yt,
    ZN = $,
    tD = _f,
    rD = bf,
    eD = dl,
    nD = "No one promise resolved";
ro({
    target: "Promise",
    stat: !0,
    forced: Sl
}, {
    any: function(t) {
        var r = this,
            e = ZN("AggregateError"),
            n = tD.f(r),
            o = n.resolve,
            i = n.reject,
            a = rD((function() {
                var n = XN(r.resolve),
                    a = [],
                    u = 0,
                    c = 1,
                    s = !1;
                eD(t, (function(t) {
                    var f = u++,
                        h = !1;
                    c++, QN(n, r, t).then((function(t) {
                        h || s || (s = !0, o(t))
                    }), (function(t) {
                        h || s || (h = !0, a[f] = t, --c || i(new e(a, nD)))
                    }))
                })), --c || i(new e(a, nD))
            }));
        return a.error && i(a.value), n.promise
    }
});
var oD = Mt,
    iD = ln,
    aD = en,
    uD = ta;
ro({
    target: "Array",
    proto: !0
}, {
    at: function(t) {
        var r = oD(this),
            e = iD(r),
            n = aD(t),
            o = n >= 0 ? n : e + n;
        return o < 0 || o >= e ? void 0 : r[o]
    }
}), uD("at");
var cD = ro,
    sD = j,
    fD = en,
    hD = Do,
    lD = o,
    pD = E("".charAt);
cD({
    target: "String",
    proto: !0,
    forced: lD((function() {
        return "\ud842" !== "𠮷".at(-2)
    }))
}, {
    at: function(t) {
        var r = hD(sD(this)),
            e = r.length,
            n = fD(t),
            o = n >= 0 ? n : e + n;
        return o < 0 || o >= e ? void 0 : pD(r, o)
    }
});
//# sourceMappingURL=polyfills.zx5u1_Vl.js.map