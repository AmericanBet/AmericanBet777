const Ur = Object.prototype.toString;

function bn(t) {
    switch (Ur.call(t)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
            return !0;
        default:
            return ut(t, Error)
    }
}

function Bt(t, e) {
    return Ur.call(t) === "[object ".concat(e, "]")
}

function Br(t) {
    return Bt(t, "ErrorEvent")
}

function jn(t) {
    return Bt(t, "DOMError")
}

function Js(t) {
    return Bt(t, "DOMException")
}

function at(t) {
    return Bt(t, "String")
}

function Tn(t) {
    return typeof t == "object" && t !== null && "__sentry_template_string__" in t && "__sentry_template_values__" in t
}

function In(t) {
    return t === null || Tn(t) || typeof t != "object" && typeof t != "function"
}

function Mt(t) {
    return Bt(t, "Object")
}

function De(t) {
    return typeof Event < "u" && ut(t, Event)
}

function Zs(t) {
    return typeof Element < "u" && ut(t, Element)
}

function Qs(t) {
    return Bt(t, "RegExp")
}

function $e(t) {
    return !!(t && t.then && typeof t.then == "function")
}

function to(t) {
    return Mt(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
}

function ut(t, e) {
    try {
        return t instanceof e
    } catch (n) {
        return !1
    }
}

function jr(t) {
    return !!(typeof t == "object" && t !== null && (t.__isVue || t._isVue))
}

function Dt(t, e = 0) {
    return typeof t != "string" || e === 0 || t.length <= e ? t : "".concat(t.slice(0, e), "...")
}

function qn(t, e) {
    if (!Array.isArray(t)) return "";
    const n = [];
    for (let r = 0; r < t.length; r++) {
        const s = t[r];
        try {
            jr(s) ? n.push("[VueViewModel]") : n.push(String(s))
        } catch (o) {
            n.push("[value cannot be serialized]")
        }
    }
    return n.join(e)
}

function eo(t, e, n = !1) {
    return at(t) ? Qs(e) ? e.test(t) : at(e) ? n ? t === e : t.includes(e) : !1 : !1
}

function Et(t, e = [], n = !1) {
    return e.some(r => eo(t, r, n))
}

function no(t, e, n = 250, r, s, o, i) {
    if (!o.exception || !o.exception.values || !i || !ut(i.originalException, Error)) return;
    const a = o.exception.values.length > 0 ? o.exception.values[o.exception.values.length - 1] : void 0;
    a && (o.exception.values = ro(Ke(t, e, s, i.originalException, r, o.exception.values, a, 0), n))
}

function Ke(t, e, n, r, s, o, i, a) {
    if (o.length >= n + 1) return o;
    let c = [...o];
    if (ut(r[s], Error)) {
        Gn(i, a);
        const u = t(e, r[s]),
            d = c.length;
        Wn(u, s, d, a), c = Ke(t, e, n, r[s], s, [u, ...c], u, d)
    }
    return Array.isArray(r.errors) && r.errors.forEach((u, d) => {
        if (ut(u, Error)) {
            Gn(i, a);
            const f = t(e, u),
                l = c.length;
            Wn(f, "errors[".concat(d, "]"), l, a), c = Ke(t, e, n, u, s, [f, ...c], f, l)
        }
    }), c
}

function Gn(t, e) {
    t.mechanism = t.mechanism || {
        type: "generic",
        handled: !0
    }, t.mechanism = { ...t.mechanism,
        ...t.type === "AggregateError" && {
            is_exception_group: !0
        },
        exception_id: e
    }
}

function Wn(t, e, n, r) {
    t.mechanism = t.mechanism || {
        type: "generic",
        handled: !0
    }, t.mechanism = { ...t.mechanism,
        type: "chained",
        source: e,
        exception_id: n,
        parent_id: r
    }
}

function ro(t, e) {
    return t.map(n => (n.value && (n.value = Dt(n.value, e)), n))
}
const ct = "8.28.0",
    b = globalThis;

function vn(t, e, n) {
    const r = b,
        s = r.__SENTRY__ = r.__SENTRY__ || {},
        o = s[ct] = s[ct] || {};
    return o[t] || (o[t] = e())
}
const $t = b,
    so = 80;

function vt(t, e = {}) {
    if (!t) return "<unknown>";
    try {
        let n = t;
        const r = 5,
            s = [];
        let o = 0,
            i = 0;
        const a = " > ",
            c = a.length;
        let u;
        const d = Array.isArray(e) ? e : e.keyAttrs,
            f = !Array.isArray(e) && e.maxStringLength || so;
        for (; n && o++ < r && (u = oo(n, d), !(u === "html" || o > 1 && i + s.length * c + u.length >= f));) s.push(u), i += u.length, n = n.parentNode;
        return s.reverse().join(a)
    } catch (n) {
        return "<unknown>"
    }
}

function oo(t, e) {
    const n = t,
        r = [];
    if (!n || !n.tagName) return "";
    if ($t.HTMLElement && n instanceof HTMLElement && n.dataset) {
        if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
        if (n.dataset.sentryElement) return n.dataset.sentryElement
    }
    r.push(n.tagName.toLowerCase());
    const s = e && e.length ? e.filter(i => n.getAttribute(i)).map(i => [i, n.getAttribute(i)]) : null;
    if (s && s.length) s.forEach(i => {
        r.push("[".concat(i[0], '="').concat(i[1], '"]'))
    });
    else {
        n.id && r.push("#".concat(n.id));
        const i = n.className;
        if (i && at(i)) {
            const a = i.split(/\s+/);
            for (const c of a) r.push(".".concat(c))
        }
    }
    const o = ["aria-label", "type", "name", "title", "alt"];
    for (const i of o) {
        const a = n.getAttribute(i);
        a && r.push("[".concat(i, '="').concat(a, '"]'))
    }
    return r.join("")
}

function io() {
    try {
        return $t.document.location.href
    } catch (t) {
        return ""
    }
}

function ao(t) {
    return $t.document && $t.document.querySelector ? $t.document.querySelector(t) : null
}

function qr(t) {
    if (!$t.HTMLElement) return null;
    let e = t;
    const n = 5;
    for (let r = 0; r < n; r++) {
        if (!e) return null;
        if (e instanceof HTMLElement) {
            if (e.dataset.sentryComponent) return e.dataset.sentryComponent;
            if (e.dataset.sentryElement) return e.dataset.sentryElement
        }
        e = e.parentNode
    }
    return null
}
const jt = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
    co = "Sentry Logger ",
    Je = ["debug", "info", "warn", "error", "log", "assert", "trace"],
    Ne = {};

function gt(t) {
    if (!("console" in b)) return t();
    const e = b.console,
        n = {},
        r = Object.keys(Ne);
    r.forEach(s => {
        const o = Ne[s];
        n[s] = e[s], e[s] = o
    });
    try {
        return t()
    } finally {
        r.forEach(s => {
            e[s] = n[s]
        })
    }
}

function uo() {
    let t = !1;
    const e = {
        enable: () => {
            t = !0
        },
        disable: () => {
            t = !1
        },
        isEnabled: () => t
    };
    return jt ? Je.forEach(n => {
        e[n] = (...r) => {
            t && gt(() => {
                b.console[n]("".concat(co, "[").concat(n, "]:"), ...r)
            })
        }
    }) : Je.forEach(n => {
        e[n] = () => {}
    }), e
}
const p = uo(),
    fo = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

function lo(t) {
    return t === "http" || t === "https"
}

function re(t, e = !1) {
    const {
        host: n,
        path: r,
        pass: s,
        port: o,
        projectId: i,
        protocol: a,
        publicKey: c
    } = t;
    return "".concat(a, "://").concat(c).concat(e && s ? ":".concat(s) : "") + "@".concat(n).concat(o ? ":".concat(o) : "", "/").concat(r && "".concat(r, "/")).concat(i)
}

function po(t) {
    const e = fo.exec(t);
    if (!e) {
        gt(() => {
            console.error("Invalid Sentry Dsn: ".concat(t))
        });
        return
    }
    const [n, r, s = "", o = "", i = "", a = ""] = e.slice(1);
    let c = "",
        u = a;
    const d = u.split("/");
    if (d.length > 1 && (c = d.slice(0, -1).join("/"), u = d.pop()), u) {
        const f = u.match(/^\d+/);
        f && (u = f[0])
    }
    return Gr({
        host: o,
        pass: s,
        path: c,
        projectId: u,
        port: i,
        protocol: n,
        publicKey: r
    })
}

function Gr(t) {
    return {
        protocol: t.protocol,
        publicKey: t.publicKey || "",
        pass: t.pass || "",
        host: t.host,
        port: t.port || "",
        path: t.path || "",
        projectId: t.projectId
    }
}

function mo(t) {
    if (!jt) return !0;
    const {
        port: e,
        projectId: n,
        protocol: r
    } = t;
    return ["protocol", "publicKey", "host", "projectId"].find(i => t[i] ? !1 : (p.error("Invalid Sentry Dsn: ".concat(i, " missing")), !0)) ? !1 : n.match(/^\d+$/) ? lo(r) ? e && isNaN(parseInt(e, 10)) ? (p.error("Invalid Sentry Dsn: Invalid port ".concat(e)), !1) : !0 : (p.error("Invalid Sentry Dsn: Invalid protocol ".concat(r)), !1) : (p.error("Invalid Sentry Dsn: Invalid projectId ".concat(n)), !1)
}

function ho(t) {
    const e = typeof t == "string" ? po(t) : Gr(t);
    if (!(!e || !mo(e))) return e
}
class et extends Error {
    constructor(e, n = "warn") {
        super(e), this.message = e, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = n
    }
}

function j(t, e, n) {
    if (!(e in t)) return;
    const r = t[e],
        s = n(r);
    typeof s == "function" && Wr(s, r), t[e] = s
}

function Y(t, e, n) {
    try {
        Object.defineProperty(t, e, {
            value: n,
            writable: !0,
            configurable: !0
        })
    } catch (r) {
        jt && p.log('Failed to add non-enumerable property "'.concat(e, '" to object'), t)
    }
}

function Wr(t, e) {
    try {
        const n = e.prototype || {};
        t.prototype = e.prototype = n, Y(t, "__sentry_original__", e)
    } catch (n) {}
}

function kn(t) {
    return t.__sentry_original__
}

function go(t) {
    return Object.keys(t).map(e => "".concat(encodeURIComponent(e), "=").concat(encodeURIComponent(t[e]))).join("&")
}

function Yr(t) {
    if (bn(t)) return {
        message: t.message,
        name: t.name,
        stack: t.stack,
        ...Vn(t)
    };
    if (De(t)) {
        const e = {
            type: t.type,
            target: Yn(t.target),
            currentTarget: Yn(t.currentTarget),
            ...Vn(t)
        };
        return typeof CustomEvent < "u" && ut(t, CustomEvent) && (e.detail = t.detail), e
    } else return t
}

function Yn(t) {
    try {
        return Zs(t) ? vt(t) : Object.prototype.toString.call(t)
    } catch (e) {
        return "<unknown>"
    }
}

function Vn(t) {
    if (typeof t == "object" && t !== null) {
        const e = {};
        for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e
    } else return {}
}

function _o(t, e = 40) {
    const n = Object.keys(Yr(t));
    n.sort();
    const r = n[0];
    if (!r) return "[object has no keys]";
    if (r.length >= e) return Dt(r, e);
    for (let s = n.length; s > 0; s--) {
        const o = n.slice(0, s).join(", ");
        if (!(o.length > e)) return s === n.length ? o : Dt(o, e)
    }
    return ""
}

function D(t) {
    return Ze(t, new Map)
}

function Ze(t, e) {
    if (So(t)) {
        const n = e.get(t);
        if (n !== void 0) return n;
        const r = {};
        e.set(t, r);
        for (const s of Object.keys(t)) typeof t[s] < "u" && (r[s] = Ze(t[s], e));
        return r
    }
    if (Array.isArray(t)) {
        const n = e.get(t);
        if (n !== void 0) return n;
        const r = [];
        return e.set(t, r), t.forEach(s => {
            r.push(Ze(s, e))
        }), r
    }
    return t
}

function So(t) {
    if (!Mt(t)) return !1;
    try {
        const e = Object.getPrototypeOf(t).constructor.name;
        return !e || e === "Object"
    } catch (e) {
        return !0
    }
}
const Vr = 50,
    kt = "?",
    zn = /\(error: (.*)\)/,
    Xn = /captureMessage|captureException/;

function zr(...t) {
    const e = t.sort((n, r) => n[0] - r[0]).map(n => n[1]);
    return (n, r = 0, s = 0) => {
        const o = [],
            i = n.split("\n");
        for (let a = r; a < i.length; a++) {
            const c = i[a];
            if (c.length > 1024) continue;
            const u = zn.test(c) ? c.replace(zn, "$1") : c;
            if (!u.match(/\S*Error: /)) {
                for (const d of e) {
                    const f = d(u);
                    if (f) {
                        o.push(f);
                        break
                    }
                }
                if (o.length >= Vr + s) break
            }
        }
        return Eo(o.slice(s))
    }
}

function yo(t) {
    return Array.isArray(t) ? zr(...t) : t
}

function Eo(t) {
    if (!t.length) return [];
    const e = Array.from(t);
    return /sentryWrapped/.test(me(e).function || "") && e.pop(), e.reverse(), Xn.test(me(e).function || "") && (e.pop(), Xn.test(me(e).function || "") && e.pop()), e.slice(0, Vr).map(n => ({ ...n,
        filename: n.filename || me(e).filename,
        function: n.function || kt
    }))
}

function me(t) {
    return t[t.length - 1] || {}
}
const Be = "<anonymous>";

function dt(t) {
    try {
        return !t || typeof t != "function" ? Be : t.name || Be
    } catch (e) {
        return Be
    }
}

function Kn(t) {
    const e = t.exception;
    if (e) {
        const n = [];
        try {
            return e.values.forEach(r => {
                r.stacktrace.frames && n.push(...r.stacktrace.frames)
            }), n
        } catch (r) {
            return
        }
    }
}
const Te = {},
    Jn = {};

function _t(t, e) {
    Te[t] = Te[t] || [], Te[t].push(e)
}

function St(t, e) {
    Jn[t] || (e(), Jn[t] = !0)
}

function W(t, e) {
    const n = t && Te[t];
    if (n)
        for (const r of n) try {
            r(e)
        } catch (s) {
            jt && p.error("Error while triggering instrumentation handler.\nType: ".concat(t, "\nName: ").concat(dt(r), "\nError:"), s)
        }
}

function bo(t) {
    const e = "console";
    _t(e, t), St(e, To)
}

function To() {
    "console" in b && Je.forEach(function(t) {
        t in b.console && j(b.console, t, function(e) {
            return Ne[t] = e,
                function(...n) {
                    W("console", {
                        args: n,
                        level: t
                    });
                    const s = Ne[t];
                    s && s.apply(b.console, n)
                }
        })
    })
}
const Qe = b;

function Xr() {
    if (!("fetch" in Qe)) return !1;
    try {
        return new Headers, new Request("http://www.example.com"), new Response, !0
    } catch (t) {
        return !1
    }
}

function tn(t) {
    return t && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
}

function Io() {
    if (typeof EdgeRuntime == "string") return !0;
    if (!Xr()) return !1;
    if (tn(Qe.fetch)) return !0;
    let t = !1;
    const e = Qe.document;
    if (e && typeof e.createElement == "function") try {
        const n = e.createElement("iframe");
        n.hidden = !0, e.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = tn(n.contentWindow.fetch)), e.head.removeChild(n)
    } catch (n) {
        jt && p.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n)
    }
    return t
}
const Kr = 1e3;

function se() {
    return Date.now() / Kr
}

function vo() {
    const {
        performance: t
    } = b;
    if (!t || !t.now) return se;
    const e = Date.now() - t.now(),
        n = t.timeOrigin == null ? e : t.timeOrigin;
    return () => (n + t.now()) / Kr
}
const L = vo(),
    B = (() => {
        const {
            performance: t
        } = b;
        if (!t || !t.now) return;
        const e = 3600 * 1e3,
            n = t.now(),
            r = Date.now(),
            s = t.timeOrigin ? Math.abs(t.timeOrigin + n - r) : e,
            o = s < e,
            i = t.timing && t.timing.navigationStart,
            c = typeof i == "number" ? Math.abs(i + n - r) : e,
            u = c < e;
        return o || u ? s <= c ? t.timeOrigin : i : r
    })();

function Jr(t, e) {
    const n = "fetch";
    _t(n, t), St(n, () => Zr(void 0, e))
}

function ko(t) {
    const e = "fetch-body-resolved";
    _t(e, t), St(e, () => Zr(No))
}

function Zr(t, e = !1) {
    e && !Io() || j(b, "fetch", function(n) {
        return function(...r) {
            const {
                method: s,
                url: o
            } = Ro(r), i = {
                args: r,
                fetchData: {
                    method: s,
                    url: o
                },
                startTimestamp: L() * 1e3
            };
            t || W("fetch", { ...i
            });
            const a = new Error().stack;
            return n.apply(b, r).then(async c => (t ? t(c) : W("fetch", { ...i,
                endTimestamp: L() * 1e3,
                response: c
            }), c), c => {
                throw W("fetch", { ...i,
                    endTimestamp: L() * 1e3,
                    error: c
                }), bn(c) && c.stack === void 0 && (c.stack = a, Y(c, "framesToPop", 1)), c
            })
        }
    })
}
async function wo(t, e) {
    if (t && t.body && t.body.getReader) {
        const n = t.body.getReader();
        async function r({
            done: s
        }) {
            if (s) return Promise.resolve();
            try {
                const o = await Promise.race([n.read(), new Promise(i => {
                    setTimeout(() => {
                        i({
                            done: !0
                        })
                    }, 5e3)
                })]);
                await r(o)
            } catch (o) {}
        }
        return n.read().then(r).then(e).catch(() => {})
    }
}
async function No(t) {
    let e;
    try {
        e = t.clone()
    } catch (n) {
        return
    }
    await wo(e, () => {
        W("fetch-body-resolved", {
            endTimestamp: L() * 1e3,
            response: t
        })
    })
}

function en(t, e) {
    return !!t && typeof t == "object" && !!t[e]
}

function Zn(t) {
    return typeof t == "string" ? t : t ? en(t, "url") ? t.url : t.toString ? t.toString() : "" : ""
}

function Ro(t) {
    if (t.length === 0) return {
        method: "GET",
        url: ""
    };
    if (t.length === 2) {
        const [n, r] = t;
        return {
            url: Zn(n),
            method: en(r, "method") ? String(r.method).toUpperCase() : "GET"
        }
    }
    const e = t[0];
    return {
        url: Zn(e),
        method: en(e, "method") ? String(e.method).toUpperCase() : "GET"
    }
}
let he = null;

function Qr(t) {
    const e = "error";
    _t(e, t), St(e, Ao)
}

function Ao() {
    he = b.onerror, b.onerror = function(t, e, n, r, s) {
        return W("error", {
            column: r,
            error: s,
            line: n,
            msg: t,
            url: e
        }), he && !he.__SENTRY_LOADER__ ? he.apply(this, arguments) : !1
    }, b.onerror.__SENTRY_INSTRUMENTED__ = !0
}
let ge = null;

function ts(t) {
    const e = "unhandledrejection";
    _t(e, t), St(e, Co)
}

function Co() {
    ge = b.onunhandledrejection, b.onunhandledrejection = function(t) {
        return W("unhandledrejection", t), ge && !ge.__SENTRY_LOADER__ ? ge.apply(this, arguments) : !0
    }, b.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
}

function Oo() {
    return "npm"
}

function xo() {
    const t = typeof WeakSet == "function",
        e = t ? new WeakSet : [];

    function n(s) {
        if (t) return e.has(s) ? !0 : (e.add(s), !1);
        for (let o = 0; o < e.length; o++)
            if (e[o] === s) return !0;
        return e.push(s), !1
    }

    function r(s) {
        if (t) e.delete(s);
        else
            for (let o = 0; o < e.length; o++)
                if (e[o] === s) {
                    e.splice(o, 1);
                    break
                }
    }
    return [n, r]
}

function w() {
    const t = b,
        e = t.crypto || t.msCrypto;
    let n = () => Math.random() * 16;
    try {
        if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
        e && e.getRandomValues && (n = () => {
            const r = new Uint8Array(1);
            return e.getRandomValues(r), r[0]
        })
    } catch (r) {}
    return ("10000000100040008000" + 1e11).replace(/[018]/g, r => (r ^ (n() & 15) >> r / 4).toString(16))
}

function es(t) {
    return t.exception && t.exception.values ? t.exception.values[0] : void 0
}

function pt(t) {
    const {
        message: e,
        event_id: n
    } = t;
    if (e) return e;
    const r = es(t);
    return r ? r.type && r.value ? "".concat(r.type, ": ").concat(r.value) : r.type || r.value || n || "<unknown>" : n || "<unknown>"
}

function nn(t, e, n) {
    const r = t.exception = t.exception || {},
        s = r.values = r.values || [],
        o = s[0] = s[0] || {};
    o.value || (o.value = e || ""), o.type || (o.type = "Error")
}

function Qt(t, e) {
    const n = es(t);
    if (!n) return;
    const r = {
            type: "generic",
            handled: !0
        },
        s = n.mechanism;
    if (n.mechanism = { ...r,
            ...s,
            ...e
        }, e && "data" in e) {
        const o = { ...s && s.data,
            ...e.data
        };
        n.mechanism.data = o
    }
}

function Qn(t) {
    if (t && t.__sentry_captured__) return !0;
    try {
        Y(t, "__sentry_captured__", !0)
    } catch (e) {}
    return !1
}

function wn(t) {
    return Array.isArray(t) ? t : [t]
}

function mt(t, e = 100, n = 1 / 0) {
    try {
        return rn("", t, e, n)
    } catch (r) {
        return {
            ERROR: "**non-serializable** (".concat(r, ")")
        }
    }
}

function ns(t, e = 3, n = 100 * 1024) {
    const r = mt(t, e);
    return Mo(r) > n ? ns(t, e - 1, n) : r
}

function rn(t, e, n = 1 / 0, r = 1 / 0, s = xo()) {
    const [o, i] = s;
    if (e == null || ["number", "boolean", "string"].includes(typeof e) && !Number.isNaN(e)) return e;
    const a = Po(t, e);
    if (!a.startsWith("[object ")) return a;
    if (e.__sentry_skip_normalization__) return e;
    const c = typeof e.__sentry_override_normalization_depth__ == "number" ? e.__sentry_override_normalization_depth__ : n;
    if (c === 0) return a.replace("object ", "");
    if (o(e)) return "[Circular ~]";
    const u = e;
    if (u && typeof u.toJSON == "function") try {
        const m = u.toJSON();
        return rn("", m, c - 1, r, s)
    } catch (m) {}
    const d = Array.isArray(e) ? [] : {};
    let f = 0;
    const l = Yr(e);
    for (const m in l) {
        if (!Object.prototype.hasOwnProperty.call(l, m)) continue;
        if (f >= r) {
            d[m] = "[MaxProperties ~]";
            break
        }
        const h = l[m];
        d[m] = rn(m, h, c - 1, r, s), f++
    }
    return i(e), d
}

function Po(t, e) {
    try {
        if (t === "domain" && e && typeof e == "object" && e._events) return "[Domain]";
        if (t === "domainEmitter") return "[DomainEmitter]";
        if (typeof global < "u" && e === global) return "[Global]";
        if (typeof window < "u" && e === window) return "[Window]";
        if (typeof document < "u" && e === document) return "[Document]";
        if (jr(e)) return "[VueViewModel]";
        if (to(e)) return "[SyntheticEvent]";
        if (typeof e == "number" && e !== e) return "[NaN]";
        if (typeof e == "function") return "[Function: ".concat(dt(e), "]");
        if (typeof e == "symbol") return "[".concat(String(e), "]");
        if (typeof e == "bigint") return "[BigInt: ".concat(String(e), "]");
        const n = Do(e);
        return /^HTML(\w*)Element$/.test(n) ? "[HTMLElement: ".concat(n, "]") : "[object ".concat(n, "]")
    } catch (n) {
        return "**non-serializable** (".concat(n, ")")
    }
}

function Do(t) {
    const e = Object.getPrototypeOf(t);
    return e ? e.constructor.name : "null prototype"
}

function $o(t) {
    return ~-encodeURI(t).split(/%..|./).length
}

function Mo(t) {
    return $o(JSON.stringify(t))
}
var ot;
(function(t) {
    t[t.PENDING = 0] = "PENDING";
    const n = 1;
    t[t.RESOLVED = n] = "RESOLVED";
    const r = 2;
    t[t.REJECTED = r] = "REJECTED"
})(ot || (ot = {}));

function wt(t) {
    return new G(e => {
        e(t)
    })
}

function Re(t) {
    return new G((e, n) => {
        n(t)
    })
}
class G {
    constructor(e) {
        G.prototype.__init.call(this), G.prototype.__init2.call(this), G.prototype.__init3.call(this), G.prototype.__init4.call(this), this._state = ot.PENDING, this._handlers = [];
        try {
            e(this._resolve, this._reject)
        } catch (n) {
            this._reject(n)
        }
    }
    then(e, n) {
        return new G((r, s) => {
            this._handlers.push([!1, o => {
                if (!e) r(o);
                else try {
                    r(e(o))
                } catch (i) {
                    s(i)
                }
            }, o => {
                if (!n) s(o);
                else try {
                    r(n(o))
                } catch (i) {
                    s(i)
                }
            }]), this._executeHandlers()
        })
    } catch (e) {
        return this.then(n => n, e)
    } finally(e) {
        return new G((n, r) => {
            let s, o;
            return this.then(i => {
                o = !1, s = i, e && e()
            }, i => {
                o = !0, s = i, e && e()
            }).then(() => {
                if (o) {
                    r(s);
                    return
                }
                n(s)
            })
        })
    }
    __init() {
        this._resolve = e => {
            this._setResult(ot.RESOLVED, e)
        }
    }
    __init2() {
        this._reject = e => {
            this._setResult(ot.REJECTED, e)
        }
    }
    __init3() {
        this._setResult = (e, n) => {
            if (this._state === ot.PENDING) {
                if ($e(n)) {
                    n.then(this._resolve, this._reject);
                    return
                }
                this._state = e, this._value = n, this._executeHandlers()
            }
        }
    }
    __init4() {
        this._executeHandlers = () => {
            if (this._state === ot.PENDING) return;
            const e = this._handlers.slice();
            this._handlers = [], e.forEach(n => {
                n[0] || (this._state === ot.RESOLVED && n[1](this._value), this._state === ot.REJECTED && n[2](this._value), n[0] = !0)
            })
        }
    }
}

function Lo(t) {
    const e = [];

    function n() {
        return t === void 0 || e.length < t
    }

    function r(i) {
        return e.splice(e.indexOf(i), 1)[0] || Promise.resolve(void 0)
    }

    function s(i) {
        if (!n()) return Re(new et("Not adding Promise because buffer limit was reached."));
        const a = i();
        return e.indexOf(a) === -1 && e.push(a), a.then(() => r(a)).then(null, () => r(a).then(null, () => {})), a
    }

    function o(i) {
        return new G((a, c) => {
            let u = e.length;
            if (!u) return a(!0);
            const d = setTimeout(() => {
                i && i > 0 && a(!1)
            }, i);
            e.forEach(f => {
                wt(f).then(() => {
                    --u || (clearTimeout(d), a(!0))
                }, c)
            })
        })
    }
    return {
        $: e,
        add: s,
        drain: o
    }
}

function bt(t) {
    if (!t) return {};
    const e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!e) return {};
    const n = e[6] || "",
        r = e[8] || "";
    return {
        host: e[4],
        path: e[5],
        protocol: e[2],
        search: n,
        hash: r,
        relative: e[5] + n + r
    }
}
const Fo = ["fatal", "error", "warning", "log", "info", "debug"];

function Ho(t) {
    return t === "warn" ? "warning" : Fo.includes(t) ? t : "log"
}
const sn = "baggage",
    rs = "sentry-",
    Uo = /^sentry-/,
    Bo = 8192;

function ss(t) {
    const e = jo(t);
    if (!e) return;
    const n = Object.entries(e).reduce((r, [s, o]) => {
        if (s.match(Uo)) {
            const i = s.slice(rs.length);
            r[i] = o
        }
        return r
    }, {});
    if (Object.keys(n).length > 0) return n
}

function os(t) {
    if (!t) return;
    const e = Object.entries(t).reduce((n, [r, s]) => (s && (n["".concat(rs).concat(r)] = s), n), {});
    return qo(e)
}

function jo(t) {
    if (!(!t || !at(t) && !Array.isArray(t))) return Array.isArray(t) ? t.reduce((e, n) => {
        const r = tr(n);
        return Object.entries(r).forEach(([s, o]) => {
            e[s] = o
        }), e
    }, {}) : tr(t)
}

function tr(t) {
    return t.split(",").map(e => e.split("=").map(n => decodeURIComponent(n.trim()))).reduce((e, [n, r]) => (n && r && (e[n] = r), e), {})
}

function qo(t) {
    if (Object.keys(t).length !== 0) return Object.entries(t).reduce((e, [n, r], s) => {
        const o = "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(r)),
            i = s === 0 ? o : "".concat(e, ",").concat(o);
        return i.length > Bo ? (jt && p.warn("Not adding key: ".concat(n, " with val: ").concat(r, " to baggage header due to exceeding baggage size limits.")), e) : i
    }, "")
}
const Go = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

function Wo(t) {
    if (!t) return;
    const e = t.match(Go);
    if (!e) return;
    let n;
    return e[3] === "1" ? n = !0 : e[3] === "0" && (n = !1), {
        traceId: e[1],
        parentSampled: n,
        parentSpanId: e[2]
    }
}

function Yo(t, e) {
    const n = Wo(t),
        r = ss(e),
        {
            traceId: s,
            parentSpanId: o,
            parentSampled: i
        } = n || {};
    return n ? {
        traceId: s || w(),
        parentSpanId: o || w().substring(16),
        spanId: w().substring(16),
        sampled: i,
        dsc: r || {}
    } : {
        traceId: s || w(),
        spanId: w().substring(16)
    }
}

function Nn(t = w(), e = w().substring(16), n) {
    let r = "";
    return n !== void 0 && (r = n ? "-1" : "-0"), "".concat(t, "-").concat(e).concat(r)
}

function qt(t, e = []) {
    return [t, e]
}

function Vo(t, e) {
    const [n, r] = t;
    return [n, [...r, e]]
}

function er(t, e) {
    const n = t[1];
    for (const r of n) {
        const s = r[0].type;
        if (e(r, s)) return !0
    }
    return !1
}

function on(t) {
    return b.__SENTRY__ && b.__SENTRY__.encodePolyfill ? b.__SENTRY__.encodePolyfill(t) : new TextEncoder().encode(t)
}

function zo(t) {
    const [e, n] = t;
    let r = JSON.stringify(e);

    function s(o) {
        typeof r == "string" ? r = typeof o == "string" ? r + o : [on(r), o] : r.push(typeof o == "string" ? on(o) : o)
    }
    for (const o of n) {
        const [i, a] = o;
        if (s("\n".concat(JSON.stringify(i), "\n")), typeof a == "string" || a instanceof Uint8Array) s(a);
        else {
            let c;
            try {
                c = JSON.stringify(a)
            } catch (u) {
                c = JSON.stringify(mt(a))
            }
            s(c)
        }
    }
    return typeof r == "string" ? r : Xo(r)
}

function Xo(t) {
    const e = t.reduce((s, o) => s + o.length, 0),
        n = new Uint8Array(e);
    let r = 0;
    for (const s of t) n.set(s, r), r += s.length;
    return n
}

function Ko(t) {
    return [{
        type: "span"
    }, t]
}

function Jo(t) {
    const e = typeof t.data == "string" ? on(t.data) : t.data;
    return [D({
        type: "attachment",
        length: e.length,
        filename: t.filename,
        content_type: t.contentType,
        attachment_type: t.attachmentType
    }), e]
}
const Zo = {
    session: "session",
    sessions: "session",
    attachment: "attachment",
    transaction: "transaction",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile: "profile",
    profile_chunk: "profile",
    replay_event: "replay",
    replay_recording: "replay",
    check_in: "monitor",
    feedback: "feedback",
    span: "span",
    statsd: "metric_bucket"
};

function nr(t) {
    return Zo[t]
}

function is(t) {
    if (!t || !t.sdk) return;
    const {
        name: e,
        version: n
    } = t.sdk;
    return {
        name: e,
        version: n
    }
}

function Qo(t, e, n, r) {
    const s = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
    return {
        event_id: t.event_id,
        sent_at: new Date().toISOString(),
        ...e && {
            sdk: e
        },
        ...!!n && r && {
            dsn: re(r)
        },
        ...s && {
            trace: D({ ...s
            })
        }
    }
}

function ti(t, e, n) {
    const r = [{
        type: "client_report"
    }, {
        timestamp: se(),
        discarded_events: t
    }];
    return qt(e ? {
        dsn: e
    } : {}, [r])
}
const ei = 60 * 1e3;

function ni(t, e = Date.now()) {
    const n = parseInt("".concat(t), 10);
    if (!isNaN(n)) return n * 1e3;
    const r = Date.parse("".concat(t));
    return isNaN(r) ? ei : r - e
}

function ri(t, e) {
    return t[e] || t.all || 0
}

function si(t, e, n = Date.now()) {
    return ri(t, e) > n
}

function oi(t, {
    statusCode: e,
    headers: n
}, r = Date.now()) {
    const s = { ...t
        },
        o = n && n["x-sentry-rate-limits"],
        i = n && n["retry-after"];
    if (o)
        for (const a of o.trim().split(",")) {
            const [c, u, , , d] = a.split(":", 5), f = parseInt(c, 10), l = (isNaN(f) ? 60 : f) * 1e3;
            if (!u) s.all = r + l;
            else
                for (const m of u.split(";")) m === "metric_bucket" ? (!d || d.split(";").includes("custom")) && (s[m] = r + l) : s[m] = r + l
        } else i ? s.all = r + ni(i, r) : e === 429 && (s.all = r + 60 * 1e3);
    return s
}

function tt(t) {
    let e, n = t[0],
        r = 1;
    for (; r < t.length;) {
        const s = t[r],
            o = t[r + 1];
        if (r += 2, (s === "optionalAccess" || s === "optionalCall") && n == null) return;
        s === "access" || s === "optionalAccess" ? (e = n, n = o(n)) : (s === "call" || s === "optionalCall") && (n = o((...i) => n.call(e, ...i)), e = void 0)
    }
    return n
}

function Ae() {
    return {
        traceId: w(),
        spanId: w().substring(16)
    }
}
const _e = b;

function ii() {
    const t = _e.chrome,
        e = t && t.app && t.app.runtime,
        n = "history" in _e && !!_e.history.pushState && !!_e.history.replaceState;
    return !e && n
}
const S = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;

function Gt() {
    return Rn(b), b
}

function Rn(t) {
    const e = t.__SENTRY__ = t.__SENTRY__ || {};
    return e.version = e.version || ct, e[ct] = e[ct] || {}
}

function ai(t) {
    const e = L(),
        n = {
            sid: w(),
            init: !0,
            timestamp: e,
            started: e,
            duration: 0,
            status: "ok",
            errors: 0,
            ignoreDuration: !1,
            toJSON: () => ui(n)
        };
    return t && Lt(n, t), n
}

function Lt(t, e = {}) {
    if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), !t.did && !e.did && (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || L(), e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = e.sid.length === 32 ? e.sid : w()), e.init !== void 0 && (t.init = e.init), !t.did && e.did && (t.did = "".concat(e.did)), typeof e.started == "number" && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
    else if (typeof e.duration == "number") t.duration = e.duration;
    else {
        const n = t.timestamp - t.started;
        t.duration = n >= 0 ? n : 0
    }
    e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), typeof e.errors == "number" && (t.errors = e.errors), e.status && (t.status = e.status)
}

function ci(t, e) {
    let n = {};
    t.status === "ok" && (n = {
        status: "exited"
    }), Lt(t, n)
}

function ui(t) {
    return D({
        sid: "".concat(t.sid),
        init: t.init,
        started: new Date(t.started * 1e3).toISOString(),
        timestamp: new Date(t.timestamp * 1e3).toISOString(),
        status: t.status,
        errors: t.errors,
        did: typeof t.did == "number" || typeof t.did == "string" ? "".concat(t.did) : void 0,
        duration: t.duration,
        abnormal_mechanism: t.abnormal_mechanism,
        attrs: {
            release: t.release,
            environment: t.environment,
            ip_address: t.ipAddress,
            user_agent: t.userAgent
        }
    })
}
const an = "_sentrySpan";

function te(t, e) {
    e ? Y(t, an, e) : delete t[an]
}

function Ce(t) {
    return t[an]
}
const di = 100;
class An {
    constructor() {
        this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = Ae()
    }
    clone() {
        const e = new An;
        return e._breadcrumbs = [...this._breadcrumbs], e._tags = { ...this._tags
        }, e._extra = { ...this._extra
        }, e._contexts = { ...this._contexts
        }, e._user = this._user, e._level = this._level, e._session = this._session, e._transactionName = this._transactionName, e._fingerprint = this._fingerprint, e._eventProcessors = [...this._eventProcessors], e._requestSession = this._requestSession, e._attachments = [...this._attachments], e._sdkProcessingMetadata = { ...this._sdkProcessingMetadata
        }, e._propagationContext = { ...this._propagationContext
        }, e._client = this._client, e._lastEventId = this._lastEventId, te(e, Ce(this)), e
    }
    setClient(e) {
        this._client = e
    }
    setLastEventId(e) {
        this._lastEventId = e
    }
    getClient() {
        return this._client
    }
    lastEventId() {
        return this._lastEventId
    }
    addScopeListener(e) {
        this._scopeListeners.push(e)
    }
    addEventProcessor(e) {
        return this._eventProcessors.push(e), this
    }
    setUser(e) {
        return this._user = e || {
            email: void 0,
            id: void 0,
            ip_address: void 0,
            username: void 0
        }, this._session && Lt(this._session, {
            user: e
        }), this._notifyScopeListeners(), this
    }
    getUser() {
        return this._user
    }
    getRequestSession() {
        return this._requestSession
    }
    setRequestSession(e) {
        return this._requestSession = e, this
    }
    setTags(e) {
        return this._tags = { ...this._tags,
            ...e
        }, this._notifyScopeListeners(), this
    }
    setTag(e, n) {
        return this._tags = { ...this._tags,
            [e]: n
        }, this._notifyScopeListeners(), this
    }
    setExtras(e) {
        return this._extra = { ...this._extra,
            ...e
        }, this._notifyScopeListeners(), this
    }
    setExtra(e, n) {
        return this._extra = { ...this._extra,
            [e]: n
        }, this._notifyScopeListeners(), this
    }
    setFingerprint(e) {
        return this._fingerprint = e, this._notifyScopeListeners(), this
    }
    setLevel(e) {
        return this._level = e, this._notifyScopeListeners(), this
    }
    setTransactionName(e) {
        return this._transactionName = e, this._notifyScopeListeners(), this
    }
    setContext(e, n) {
        return n === null ? delete this._contexts[e] : this._contexts[e] = n, this._notifyScopeListeners(), this
    }
    setSession(e) {
        return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this
    }
    getSession() {
        return this._session
    }
    update(e) {
        if (!e) return this;
        const n = typeof e == "function" ? e(this) : e,
            [r, s] = n instanceof ht ? [n.getScopeData(), n.getRequestSession()] : Mt(n) ? [e, e.requestSession] : [],
            {
                tags: o,
                extra: i,
                user: a,
                contexts: c,
                level: u,
                fingerprint: d = [],
                propagationContext: f
            } = r || {};
        return this._tags = { ...this._tags,
            ...o
        }, this._extra = { ...this._extra,
            ...i
        }, this._contexts = { ...this._contexts,
            ...c
        }, a && Object.keys(a).length && (this._user = a), u && (this._level = u), d.length && (this._fingerprint = d), f && (this._propagationContext = f), s && (this._requestSession = s), this
    }
    clear() {
        return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._session = void 0, te(this, void 0), this._attachments = [], this._propagationContext = Ae(), this._notifyScopeListeners(), this
    }
    addBreadcrumb(e, n) {
        const r = typeof n == "number" ? n : di;
        if (r <= 0) return this;
        const s = {
                timestamp: se(),
                ...e
            },
            o = this._breadcrumbs;
        return o.push(s), this._breadcrumbs = o.length > r ? o.slice(-r) : o, this._notifyScopeListeners(), this
    }
    getLastBreadcrumb() {
        return this._breadcrumbs[this._breadcrumbs.length - 1]
    }
    clearBreadcrumbs() {
        return this._breadcrumbs = [], this._notifyScopeListeners(), this
    }
    addAttachment(e) {
        return this._attachments.push(e), this
    }
    clearAttachments() {
        return this._attachments = [], this
    }
    getScopeData() {
        return {
            breadcrumbs: this._breadcrumbs,
            attachments: this._attachments,
            contexts: this._contexts,
            tags: this._tags,
            extra: this._extra,
            user: this._user,
            level: this._level,
            fingerprint: this._fingerprint || [],
            eventProcessors: this._eventProcessors,
            propagationContext: this._propagationContext,
            sdkProcessingMetadata: this._sdkProcessingMetadata,
            transactionName: this._transactionName,
            span: Ce(this)
        }
    }
    setSDKProcessingMetadata(e) {
        return this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata,
            ...e
        }, this
    }
    setPropagationContext(e) {
        return this._propagationContext = e, this
    }
    getPropagationContext() {
        return this._propagationContext
    }
    captureException(e, n) {
        const r = n && n.event_id ? n.event_id : w();
        if (!this._client) return p.warn("No client configured on scope - will not capture exception!"), r;
        const s = new Error("Sentry syntheticException");
        return this._client.captureException(e, {
            originalException: e,
            syntheticException: s,
            ...n,
            event_id: r
        }, this), r
    }
    captureMessage(e, n, r) {
        const s = r && r.event_id ? r.event_id : w();
        if (!this._client) return p.warn("No client configured on scope - will not capture message!"), s;
        const o = new Error(e);
        return this._client.captureMessage(e, n, {
            originalException: e,
            syntheticException: o,
            ...r,
            event_id: s
        }, this), s
    }
    captureEvent(e, n) {
        const r = n && n.event_id ? n.event_id : w();
        return this._client ? (this._client.captureEvent(e, { ...n,
            event_id: r
        }, this), r) : (p.warn("No client configured on scope - will not capture event!"), r)
    }
    _notifyScopeListeners() {
        this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(e => {
            e(this)
        }), this._notifyingListeners = !1)
    }
}
const ht = An;

function fi() {
    return vn("defaultCurrentScope", () => new ht)
}

function li() {
    return vn("defaultIsolationScope", () => new ht)
}
class pi {
    constructor(e, n) {
        let r;
        e ? r = e : r = new ht;
        let s;
        n ? s = n : s = new ht, this._stack = [{
            scope: r
        }], this._isolationScope = s
    }
    withScope(e) {
        const n = this._pushScope();
        let r;
        try {
            r = e(n)
        } catch (s) {
            throw this._popScope(), s
        }
        return $e(r) ? r.then(s => (this._popScope(), s), s => {
            throw this._popScope(), s
        }) : (this._popScope(), r)
    }
    getClient() {
        return this.getStackTop().client
    }
    getScope() {
        return this.getStackTop().scope
    }
    getIsolationScope() {
        return this._isolationScope
    }
    getStackTop() {
        return this._stack[this._stack.length - 1]
    }
    _pushScope() {
        const e = this.getScope().clone();
        return this._stack.push({
            client: this.getClient(),
            scope: e
        }), e
    }
    _popScope() {
        return this._stack.length <= 1 ? !1 : !!this._stack.pop()
    }
}

function Ft() {
    const t = Gt(),
        e = Rn(t);
    return e.stack = e.stack || new pi(fi(), li())
}

function mi(t) {
    return Ft().withScope(t)
}

function hi(t, e) {
    const n = Ft();
    return n.withScope(() => (n.getStackTop().scope = t, e(t)))
}

function rr(t) {
    return Ft().withScope(() => t(Ft().getIsolationScope()))
}

function gi() {
    return {
        withIsolationScope: rr,
        withScope: mi,
        withSetScope: hi,
        withSetIsolationScope: (t, e) => rr(e),
        getCurrentScope: () => Ft().getScope(),
        getIsolationScope: () => Ft().getIsolationScope()
    }
}

function oe(t) {
    const e = Rn(t);
    return e.acs ? e.acs : gi()
}

function k() {
    const t = Gt();
    return oe(t).getCurrentScope()
}

function rt() {
    const t = Gt();
    return oe(t).getIsolationScope()
}

function _i() {
    return vn("globalScope", () => new ht)
}

function Cn(...t) {
    const e = Gt(),
        n = oe(e);
    if (t.length === 2) {
        const [r, s] = t;
        return r ? n.withSetScope(r, s) : n.withScope(s)
    }
    return n.withScope(t[0])
}

function v() {
    return k().getClient()
}
const Si = "_sentryMetrics";

function cn(t) {
    const e = t[Si];
    if (!e) return;
    const n = {};
    for (const [, [r, s]] of e)(n[r] || (n[r] = [])).push(D(s));
    return n
}
const V = "sentry.source",
    as = "sentry.sample_rate",
    Nt = "sentry.op",
    N = "sentry.origin",
    un = "sentry.idle_span_finish_reason",
    Me = "sentry.measurement_unit",
    Le = "sentry.measurement_value",
    yi = "sentry.profile_id",
    On = "sentry.exclusive_time",
    Ei = 0,
    cs = 1,
    O = 2;

function bi(t) {
    if (t < 400 && t >= 100) return {
        code: cs
    };
    if (t >= 400 && t < 500) switch (t) {
        case 401:
            return {
                code: O,
                message: "unauthenticated"
            };
        case 403:
            return {
                code: O,
                message: "permission_denied"
            };
        case 404:
            return {
                code: O,
                message: "not_found"
            };
        case 409:
            return {
                code: O,
                message: "already_exists"
            };
        case 413:
            return {
                code: O,
                message: "failed_precondition"
            };
        case 429:
            return {
                code: O,
                message: "resource_exhausted"
            };
        case 499:
            return {
                code: O,
                message: "cancelled"
            };
        default:
            return {
                code: O,
                message: "invalid_argument"
            }
    }
    if (t >= 500 && t < 600) switch (t) {
        case 501:
            return {
                code: O,
                message: "unimplemented"
            };
        case 503:
            return {
                code: O,
                message: "unavailable"
            };
        case 504:
            return {
                code: O,
                message: "deadline_exceeded"
            };
        default:
            return {
                code: O,
                message: "internal_error"
            }
    }
    return {
        code: O,
        message: "unknown_error"
    }
}

function us(t, e) {
    t.setAttribute("http.response.status_code", e);
    const n = bi(e);
    n.message !== "unknown_error" && t.setStatus(n)
}
const ds = 0,
    fs = 1;

function Ti(t) {
    const {
        spanId: e,
        traceId: n
    } = t.spanContext(), {
        data: r,
        op: s,
        parent_span_id: o,
        status: i,
        origin: a
    } = E(t);
    return D({
        parent_span_id: o,
        span_id: e,
        trace_id: n,
        data: r,
        op: s,
        status: i,
        origin: a
    })
}

function Ii(t) {
    const {
        spanId: e,
        traceId: n
    } = t.spanContext(), {
        parent_span_id: r
    } = E(t);
    return D({
        parent_span_id: r,
        span_id: e,
        trace_id: n
    })
}

function ls(t) {
    const {
        traceId: e,
        spanId: n
    } = t.spanContext(), r = At(t);
    return Nn(e, n, r)
}

function Tt(t) {
    return typeof t == "number" ? sr(t) : Array.isArray(t) ? t[0] + t[1] / 1e9 : t instanceof Date ? sr(t.getTime()) : L()
}

function sr(t) {
    return t > 9999999999 ? t / 1e3 : t
}

function E(t) {
    if (ki(t)) return t.getSpanJSON();
    try {
        const {
            spanId: e,
            traceId: n
        } = t.spanContext();
        if (vi(t)) {
            const {
                attributes: r,
                startTime: s,
                name: o,
                endTime: i,
                parentSpanId: a,
                status: c
            } = t;
            return D({
                span_id: e,
                trace_id: n,
                data: r,
                description: o,
                parent_span_id: a,
                start_timestamp: Tt(s),
                timestamp: Tt(i) || void 0,
                status: ps(c),
                op: r[Nt],
                origin: r[N],
                _metrics_summary: cn(t)
            })
        }
        return {
            span_id: e,
            trace_id: n
        }
    } catch (e) {
        return {}
    }
}

function vi(t) {
    const e = t;
    return !!e.attributes && !!e.startTime && !!e.name && !!e.endTime && !!e.status
}

function ki(t) {
    return typeof t.getSpanJSON == "function"
}

function At(t) {
    const {
        traceFlags: e
    } = t.spanContext();
    return e === fs
}

function ps(t) {
    if (!(!t || t.code === Ei)) return t.code === cs ? "ok" : t.message || "unknown_error"
}
const It = "_sentryChildSpans",
    dn = "_sentryRootSpan";

function ms(t, e) {
    const n = t[dn] || t;
    Y(e, dn, n), t[It] ? t[It].add(e) : Y(t, It, new Set([e]))
}

function wi(t, e) {
    t[It] && t[It].delete(e)
}

function Ie(t) {
    const e = new Set;

    function n(r) {
        if (!e.has(r) && At(r)) {
            e.add(r);
            const s = r[It] ? Array.from(r[It]) : [];
            for (const o of s) n(o)
        }
    }
    return n(t), Array.from(e)
}

function $(t) {
    return t[dn] || t
}

function x() {
    const t = Gt(),
        e = oe(t);
    return e.getActiveSpan ? e.getActiveSpan() : Ce(k())
}
let or = !1;

function Ni() {
    or || (or = !0, Qr(fn), ts(fn))
}

function fn() {
    const t = x(),
        e = t && $(t);
    if (e) {
        const n = "internal_error";
        S && p.log("[Tracing] Root span: ".concat(n, " -> Global error occured")), e.setStatus({
            code: O,
            message: n
        })
    }
}
fn.tag = "sentry_tracingErrorCallback";
const hs = "_sentryScope",
    gs = "_sentryIsolationScope";

function Ri(t, e, n) {
    t && (Y(t, gs, n), Y(t, hs, e))
}

function ir(t) {
    return {
        scope: t[hs],
        isolationScope: t[gs]
    }
}

function ft(t) {
    if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) return !1;
    const e = v(),
        n = t || e && e.getOptions();
    return !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
}
class Wt {
    constructor(e = {}) {
        this._traceId = e.traceId || w(), this._spanId = e.spanId || w().substring(16)
    }
    spanContext() {
        return {
            spanId: this._spanId,
            traceId: this._traceId,
            traceFlags: ds
        }
    }
    end(e) {}
    setAttribute(e, n) {
        return this
    }
    setAttributes(e) {
        return this
    }
    setStatus(e) {
        return this
    }
    updateName(e) {
        return this
    }
    isRecording() {
        return !1
    }
    addEvent(e, n, r) {
        return this
    }
    addLink(e) {
        return this
    }
    addLinks(e) {
        return this
    }
    recordException(e, n) {}
}
const xn = "production",
    _s = "_frozenDsc";

function ar(t, e) {
    Y(t, _s, e)
}

function Fe(t, e) {
    const n = e.getOptions(),
        {
            publicKey: r
        } = e.getDsn() || {},
        s = D({
            environment: n.environment || xn,
            release: n.release,
            public_key: r,
            trace_id: t
        });
    return e.emit("createDsc", s), s
}

function Ct(t) {
    const e = v();
    if (!e) return {};
    const n = Fe(E(t).trace_id || "", e),
        r = $(t),
        s = r[_s];
    if (s) return s;
    const o = r.spanContext().traceState,
        i = o && o.get("sentry.dsc"),
        a = i && ss(i);
    if (a) return a;
    const c = E(r),
        u = c.data || {},
        d = u[as];
    d != null && (n.sample_rate = "".concat(d));
    const f = u[V],
        l = c.description;
    return f !== "url" && l && (n.transaction = l), n.sampled = String(At(r)), e.emit("createDsc", n, r), n
}

function Ai(t) {
    if (!S) return;
    const {
        description: e = "< unknown name >",
        op: n = "< unknown op >",
        parent_span_id: r
    } = E(t), {
        spanId: s
    } = t.spanContext(), o = At(t), i = $(t), a = i === t, c = "[Tracing] Starting ".concat(o ? "sampled" : "unsampled", " ").concat(a ? "root " : "", "span"), u = ["op: ".concat(n), "name: ".concat(e), "ID: ".concat(s)];
    if (r && u.push("parent ID: ".concat(r)), !a) {
        const {
            op: d,
            description: f
        } = E(i);
        u.push("root ID: ".concat(i.spanContext().spanId)), d && u.push("root op: ".concat(d)), f && u.push("root description: ".concat(f))
    }
    p.log("".concat(c, "\n  ").concat(u.join("\n  ")))
}

function Ci(t) {
    if (!S) return;
    const {
        description: e = "< unknown name >",
        op: n = "< unknown op >"
    } = E(t), {
        spanId: r
    } = t.spanContext(), o = $(t) === t, i = '[Tracing] Finishing "'.concat(n, '" ').concat(o ? "root " : "", 'span "').concat(e, '" with ID ').concat(r);
    p.log(i)
}

function Ss(t) {
    if (typeof t == "boolean") return Number(t);
    const e = typeof t == "string" ? parseFloat(t) : t;
    if (typeof e != "number" || isNaN(e) || e < 0 || e > 1) {
        S && p.warn("[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ".concat(JSON.stringify(t), " of type ").concat(JSON.stringify(typeof t), "."));
        return
    }
    return e
}

function Oi(t, e) {
    if (!ft(t)) return [!1];
    let n;
    typeof t.tracesSampler == "function" ? n = t.tracesSampler(e) : e.parentSampled !== void 0 ? n = e.parentSampled : typeof t.tracesSampleRate < "u" ? n = t.tracesSampleRate : n = 1;
    const r = Ss(n);
    return r === void 0 ? (S && p.warn("[Tracing] Discarding transaction because of invalid sample rate."), [!1]) : r ? Math.random() < r ? [!0, r] : (S && p.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ".concat(Number(n), ")")), [!1, r]) : (S && p.log("[Tracing] Discarding transaction because ".concat(typeof t.tracesSampler == "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")), [!1, r])
}

function xi(t, e) {
    return e && (t.sdk = t.sdk || {}, t.sdk.name = t.sdk.name || e.name, t.sdk.version = t.sdk.version || e.version, t.sdk.integrations = [...t.sdk.integrations || [], ...e.integrations || []], t.sdk.packages = [...t.sdk.packages || [], ...e.packages || []]), t
}

function Pi(t, e, n, r) {
    const s = is(n),
        o = {
            sent_at: new Date().toISOString(),
            ...s && {
                sdk: s
            },
            ...!!r && e && {
                dsn: re(e)
            }
        },
        i = "aggregates" in t ? [{
            type: "sessions"
        }, t] : [{
            type: "session"
        }, t.toJSON()];
    return qt(o, [i])
}

function Di(t, e, n, r) {
    const s = is(n),
        o = t.type && t.type !== "replay_event" ? t.type : "event";
    xi(t, n && n.sdk);
    const i = Qo(t, s, r, e);
    return delete t.sdkProcessingMetadata, qt(i, [
        [{
            type: o
        }, t]
    ])
}

function $i(t, e) {
    function n(d) {
        return !!d.trace_id && !!d.public_key
    }
    const r = Ct(t[0]),
        s = e && e.getDsn(),
        o = e && e.getOptions().tunnel,
        i = {
            sent_at: new Date().toISOString(),
            ...n(r) && {
                trace: r
            },
            ...!!o && s && {
                dsn: re(s)
            }
        },
        a = e && e.getOptions().beforeSendSpan,
        c = a ? d => a(E(d)) : d => E(d),
        u = [];
    for (const d of t) {
        const f = c(d);
        f && u.push(Ko(f))
    }
    return qt(i, u)
}

function Mi(t, e, n) {
    const r = x(),
        s = r && $(r);
    s && s.addEvent(t, {
        [Le]: e,
        [Me]: n
    })
}

function cr(t) {
    if (!t || t.length === 0) return;
    const e = {};
    return t.forEach(n => {
        const r = n.attributes || {},
            s = r[Me],
            o = r[Le];
        typeof s == "string" && typeof o == "number" && (e[n.name] = {
            value: o,
            unit: s
        })
    }), e
}
const ur = 1e3;
class Pn {
    constructor(e = {}) {
        this._traceId = e.traceId || w(), this._spanId = e.spanId || w().substring(16), this._startTime = e.startTimestamp || L(), this._attributes = {}, this.setAttributes({
            [N]: "manual",
            [Nt]: e.op,
            ...e.attributes
        }), this._name = e.name, e.parentSpanId && (this._parentSpanId = e.parentSpanId), "sampled" in e && (this._sampled = e.sampled), e.endTimestamp && (this._endTime = e.endTimestamp), this._events = [], this._isStandaloneSpan = e.isStandalone, this._endTime && this._onSpanEnded()
    }
    addLink(e) {
        return this
    }
    addLinks(e) {
        return this
    }
    recordException(e, n) {}
    spanContext() {
        const {
            _spanId: e,
            _traceId: n,
            _sampled: r
        } = this;
        return {
            spanId: e,
            traceId: n,
            traceFlags: r ? fs : ds
        }
    }
    setAttribute(e, n) {
        return n === void 0 ? delete this._attributes[e] : this._attributes[e] = n, this
    }
    setAttributes(e) {
        return Object.keys(e).forEach(n => this.setAttribute(n, e[n])), this
    }
    updateStartTime(e) {
        this._startTime = Tt(e)
    }
    setStatus(e) {
        return this._status = e, this
    }
    updateName(e) {
        return this._name = e, this
    }
    end(e) {
        this._endTime || (this._endTime = Tt(e), Ci(this), this._onSpanEnded())
    }
    getSpanJSON() {
        return D({
            data: this._attributes,
            description: this._name,
            op: this._attributes[Nt],
            parent_span_id: this._parentSpanId,
            span_id: this._spanId,
            start_timestamp: this._startTime,
            status: ps(this._status),
            timestamp: this._endTime,
            trace_id: this._traceId,
            origin: this._attributes[N],
            _metrics_summary: cn(this),
            profile_id: this._attributes[yi],
            exclusive_time: this._attributes[On],
            measurements: cr(this._events),
            is_segment: this._isStandaloneSpan && $(this) === this || void 0,
            segment_id: this._isStandaloneSpan ? $(this).spanContext().spanId : void 0
        })
    }
    isRecording() {
        return !this._endTime && !!this._sampled
    }
    addEvent(e, n, r) {
        S && p.log("[Tracing] Adding an event to span:", e);
        const s = dr(n) ? n : r || L(),
            o = dr(n) ? {} : n || {},
            i = {
                name: e,
                time: Tt(s),
                attributes: o
            };
        return this._events.push(i), this
    }
    isStandaloneSpan() {
        return !!this._isStandaloneSpan
    }
    _onSpanEnded() {
        const e = v();
        if (e && e.emit("spanEnd", this), !(this._isStandaloneSpan || this === $(this))) return;
        if (this._isStandaloneSpan) {
            this._sampled ? Fi($i([this], e)) : (S && p.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."), e && e.recordDroppedEvent("sample_rate", "span"));
            return
        }
        const r = this._convertSpanToTransaction();
        r && (ir(this).scope || k()).captureEvent(r)
    }
    _convertSpanToTransaction() {
        if (!fr(E(this))) return;
        this._name || (S && p.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>");
        const {
            scope: e,
            isolationScope: n
        } = ir(this), s = (e || k()).getClient() || v();
        if (this._sampled !== !0) {
            S && p.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."), s && s.recordDroppedEvent("sample_rate", "transaction");
            return
        }
        const i = Ie(this).filter(f => f !== this && !Li(f)).map(f => E(f)).filter(fr),
            a = this._attributes[V],
            c = {
                contexts: {
                    trace: Ti(this)
                },
                spans: i.length > ur ? i.sort((f, l) => f.start_timestamp - l.start_timestamp).slice(0, ur) : i,
                start_timestamp: this._startTime,
                timestamp: this._endTime,
                transaction: this._name,
                type: "transaction",
                sdkProcessingMetadata: {
                    capturedSpanScope: e,
                    capturedSpanIsolationScope: n,
                    ...D({
                        dynamicSamplingContext: Ct(this)
                    })
                },
                _metrics_summary: cn(this),
                ...a && {
                    transaction_info: {
                        source: a
                    }
                }
            },
            u = cr(this._events);
        return u && Object.keys(u).length && (S && p.log("[Measurements] Adding measurements to transaction event", JSON.stringify(u, void 0, 2)), c.measurements = u), c
    }
}

function dr(t) {
    return t && typeof t == "number" || t instanceof Date || Array.isArray(t)
}

function fr(t) {
    return !!t.start_timestamp && !!t.timestamp && !!t.span_id && !!t.trace_id
}

function Li(t) {
    return t instanceof Pn && t.isStandaloneSpan()
}

function Fi(t) {
    const e = v();
    if (!e) return;
    const n = t[1];
    if (!n || n.length === 0) {
        e.recordDroppedEvent("before_send", "span");
        return
    }
    const r = e.getTransport();
    r && r.send(t).then(null, s => {
        S && p.error("Error while sending span:", s)
    })
}
const ys = "__SENTRY_SUPPRESS_TRACING__";

function nt(t) {
    const e = bs();
    if (e.startInactiveSpan) return e.startInactiveSpan(t);
    const n = Ui(t),
        {
            forceTransaction: r,
            parentSpan: s
        } = t;
    return (t.scope ? i => Cn(t.scope, i) : s !== void 0 ? i => Es(s, i) : i => i())(() => {
        const i = k(),
            a = ji(i);
        return t.onlyIfParent && !a ? new Wt : Hi({
            parentSpan: a,
            spanArguments: n,
            forceTransaction: r,
            scope: i
        })
    })
}

function Es(t, e) {
    const n = bs();
    return n.withActiveSpan ? n.withActiveSpan(t, e) : Cn(r => (te(r, t || void 0), e(r)))
}

function Hi({
    parentSpan: t,
    spanArguments: e,
    forceTransaction: n,
    scope: r
}) {
    if (!ft()) return new Wt;
    const s = rt();
    let o;
    if (t && !n) o = Bi(t, r, e), ms(t, o);
    else if (t) {
        const i = Ct(t),
            {
                traceId: a,
                spanId: c
            } = t.spanContext(),
            u = At(t);
        o = lr({
            traceId: a,
            parentSpanId: c,
            ...e
        }, r, u), ar(o, i)
    } else {
        const {
            traceId: i,
            dsc: a,
            parentSpanId: c,
            sampled: u
        } = { ...s.getPropagationContext(),
            ...r.getPropagationContext()
        };
        o = lr({
            traceId: i,
            parentSpanId: c,
            ...e
        }, r, u), a && ar(o, a)
    }
    return Ai(o), Ri(o, r, s), o
}

function Ui(t) {
    const n = {
        isStandalone: (t.experimental || {}).standalone,
        ...t
    };
    if (t.startTime) {
        const r = { ...n
        };
        return r.startTimestamp = Tt(t.startTime), delete r.startTime, r
    }
    return n
}

function bs() {
    const t = Gt();
    return oe(t)
}

function lr(t, e, n) {
    const r = v(),
        s = r && r.getOptions() || {},
        {
            name: o = "",
            attributes: i
        } = t,
        [a, c] = e.getScopeData().sdkProcessingMetadata[ys] ? [!1] : Oi(s, {
            name: o,
            parentSampled: n,
            attributes: i,
            transactionContext: {
                name: o,
                parentSampled: n
            }
        }),
        u = new Pn({ ...t,
            attributes: {
                [V]: "custom",
                ...t.attributes
            },
            sampled: a
        });
    return c !== void 0 && u.setAttribute(as, c), r && r.emit("spanStart", u), u
}

function Bi(t, e, n) {
    const {
        spanId: r,
        traceId: s
    } = t.spanContext(), o = e.getScopeData().sdkProcessingMetadata[ys] ? !1 : At(t), i = o ? new Pn({ ...n,
        parentSpanId: r,
        traceId: s,
        sampled: o
    }) : new Wt({
        traceId: s
    });
    ms(t, i);
    const a = v();
    return a && (a.emit("spanStart", i), n.endTimestamp && a.emit("spanEnd", i)), i
}

function ji(t) {
    const e = Ce(t);
    if (!e) return;
    const n = v();
    return (n ? n.getOptions() : {}).parentSpanIsAlwaysRootSpan ? $(e) : e
}
const ve = {
        idleTimeout: 1e3,
        finalTimeout: 3e4,
        childSpanTimeout: 15e3
    },
    qi = "heartbeatFailed",
    Gi = "idleTimeout",
    Wi = "finalTimeout",
    Yi = "externalFinish";

function Ts(t, e = {}) {
    const n = new Map;
    let r = !1,
        s, o = Yi,
        i = !e.disableAutoFinish;
    const a = [],
        {
            idleTimeout: c = ve.idleTimeout,
            finalTimeout: u = ve.finalTimeout,
            childSpanTimeout: d = ve.childSpanTimeout,
            beforeSpanEnd: f
        } = e,
        l = v();
    if (!l || !ft()) return new Wt;
    const m = k(),
        h = x(),
        y = Vi(t);
    y.end = new Proxy(y.end, {
        apply(T, I, M) {
            f && f(y);
            const [J, ...U] = M, st = J || L(), H = Tt(st), de = Ie(y).filter(lt => lt !== y);
            if (!de.length) return C(H), Reflect.apply(T, I, [H, ...U]);
            const fe = de.map(lt => E(lt).timestamp).filter(lt => !!lt),
                le = fe.length ? Math.max(...fe) : void 0,
                xt = E(y).start_timestamp,
                pe = Math.min(xt ? xt + u / 1e3 : 1 / 0, Math.max(xt || -1 / 0, Math.min(H, le || 1 / 0)));
            return C(pe), Reflect.apply(T, I, [pe, ...U])
        }
    });

    function A() {
        s && (clearTimeout(s), s = void 0)
    }

    function X(T) {
        A(), s = setTimeout(() => {
            !r && n.size === 0 && i && (o = Gi, y.end(T))
        }, c)
    }

    function K(T) {
        s = setTimeout(() => {
            !r && i && (o = qi, y.end(T))
        }, d)
    }

    function yt(T) {
        A(), n.set(T, !0);
        const I = L();
        K(I + d / 1e3)
    }

    function F(T) {
        if (n.has(T) && n.delete(T), n.size === 0) {
            const I = L();
            X(I + c / 1e3)
        }
    }

    function C(T) {
        r = !0, n.clear(), a.forEach(H => H()), te(m, h);
        const I = E(y),
            {
                start_timestamp: M
            } = I;
        if (!M) return;
        (I.data || {})[un] || y.setAttribute(un, o), p.log('[Tracing] Idle span "'.concat(I.op, '" finished'));
        const U = Ie(y).filter(H => H !== y);
        let st = 0;
        U.forEach(H => {
            H.isRecording() && (H.setStatus({
                code: O,
                message: "cancelled"
            }), H.end(T), S && p.log("[Tracing] Cancelling span since span ended early", JSON.stringify(H, void 0, 2)));
            const de = E(H),
                {
                    timestamp: fe = 0,
                    start_timestamp: le = 0
                } = de,
                xt = le <= T,
                pe = (u + c) / 1e3,
                lt = fe - le <= pe;
            if (S) {
                const Bn = JSON.stringify(H, void 0, 2);
                xt ? lt || p.log("[Tracing] Discarding span since it finished after idle span final timeout", Bn) : p.log("[Tracing] Discarding span since it happened after idle span was finished", Bn)
            }(!lt || !xt) && (wi(y, H), st++)
        }), st > 0 && y.setAttribute("sentry.idle_span_discarded_spans", st)
    }
    return a.push(l.on("spanStart", T => {
        if (r || T === y || E(T).timestamp) return;
        Ie(y).includes(T) && yt(T.spanContext().spanId)
    })), a.push(l.on("spanEnd", T => {
        r || F(T.spanContext().spanId)
    })), a.push(l.on("idleSpanEnableAutoFinish", T => {
        T === y && (i = !0, X(), n.size && K())
    })), e.disableAutoFinish || X(), setTimeout(() => {
        r || (y.setStatus({
            code: O,
            message: "deadline_exceeded"
        }), o = Wi, y.end())
    }, u), y
}

function Vi(t) {
    const e = nt(t);
    return te(k(), e), S && p.log("[Tracing] Started span is an idle span"), e
}

function ln(t, e, n, r = 0) {
    return new G((s, o) => {
        const i = t[r];
        if (e === null || typeof i != "function") s(e);
        else {
            const a = i({ ...e
            }, n);
            S && i.id && a === null && p.log('Event processor "'.concat(i.id, '" dropped event')), $e(a) ? a.then(c => ln(t, c, n, r + 1).then(s)).then(null, o) : ln(t, a, n, r + 1).then(s).then(null, o)
        }
    })
}

function zi(t, e) {
    const {
        fingerprint: n,
        span: r,
        breadcrumbs: s,
        sdkProcessingMetadata: o
    } = e;
    Xi(t, e), r && Zi(t, r), Qi(t, n), Ki(t, s), Ji(t, o)
}

function pr(t, e) {
    const {
        extra: n,
        tags: r,
        user: s,
        contexts: o,
        level: i,
        sdkProcessingMetadata: a,
        breadcrumbs: c,
        fingerprint: u,
        eventProcessors: d,
        attachments: f,
        propagationContext: l,
        transactionName: m,
        span: h
    } = e;
    Xt(t, "extra", n), Xt(t, "tags", r), Xt(t, "user", s), Xt(t, "contexts", o), Xt(t, "sdkProcessingMetadata", a), i && (t.level = i), m && (t.transactionName = m), h && (t.span = h), c.length && (t.breadcrumbs = [...t.breadcrumbs, ...c]), u.length && (t.fingerprint = [...t.fingerprint, ...u]), d.length && (t.eventProcessors = [...t.eventProcessors, ...d]), f.length && (t.attachments = [...t.attachments, ...f]), t.propagationContext = { ...t.propagationContext,
        ...l
    }
}

function Xt(t, e, n) {
    if (n && Object.keys(n).length) {
        t[e] = { ...t[e]
        };
        for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[e][r] = n[r])
    }
}

function Xi(t, e) {
    const {
        extra: n,
        tags: r,
        user: s,
        contexts: o,
        level: i,
        transactionName: a
    } = e, c = D(n);
    c && Object.keys(c).length && (t.extra = { ...c,
        ...t.extra
    });
    const u = D(r);
    u && Object.keys(u).length && (t.tags = { ...u,
        ...t.tags
    });
    const d = D(s);
    d && Object.keys(d).length && (t.user = { ...d,
        ...t.user
    });
    const f = D(o);
    f && Object.keys(f).length && (t.contexts = { ...f,
        ...t.contexts
    }), i && (t.level = i), a && t.type !== "transaction" && (t.transaction = a)
}

function Ki(t, e) {
    const n = [...t.breadcrumbs || [], ...e];
    t.breadcrumbs = n.length ? n : void 0
}

function Ji(t, e) {
    t.sdkProcessingMetadata = { ...t.sdkProcessingMetadata,
        ...e
    }
}

function Zi(t, e) {
    t.contexts = {
        trace: Ii(e),
        ...t.contexts
    }, t.sdkProcessingMetadata = {
        dynamicSamplingContext: Ct(e),
        ...t.sdkProcessingMetadata
    };
    const n = $(e),
        r = E(n).description;
    r && !t.transaction && t.type === "transaction" && (t.transaction = r)
}

function Qi(t, e) {
    t.fingerprint = t.fingerprint ? wn(t.fingerprint) : [], e && (t.fingerprint = t.fingerprint.concat(e)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint
}

function ta(t, e, n, r, s, o) {
    const {
        normalizeDepth: i = 3,
        normalizeMaxBreadth: a = 1e3
    } = t, c = { ...e,
        event_id: e.event_id || n.event_id || w(),
        timestamp: e.timestamp || se()
    }, u = n.integrations || t.integrations.map(A => A.name);
    ea(c, t), sa(c, u), s && s.emit("applyFrameMetadata", e), e.type === void 0 && na(c, t.stackParser);
    const d = ia(r, n.captureContext);
    n.mechanism && Qt(c, n.mechanism);
    const f = s ? s.getEventProcessors() : [],
        l = _i().getScopeData();
    if (o) {
        const A = o.getScopeData();
        pr(l, A)
    }
    if (d) {
        const A = d.getScopeData();
        pr(l, A)
    }
    const m = [...n.attachments || [], ...l.attachments];
    m.length && (n.attachments = m), zi(c, l);
    const h = [...f, ...l.eventProcessors];
    return ln(h, c, n).then(A => (A && ra(A), typeof i == "number" && i > 0 ? oa(A, i, a) : A))
}

function ea(t, e) {
    const {
        environment: n,
        release: r,
        dist: s,
        maxValueLength: o = 250
    } = e;
    "environment" in t || (t.environment = "environment" in e ? n : xn), t.release === void 0 && r !== void 0 && (t.release = r), t.dist === void 0 && s !== void 0 && (t.dist = s), t.message && (t.message = Dt(t.message, o));
    const i = t.exception && t.exception.values && t.exception.values[0];
    i && i.value && (i.value = Dt(i.value, o));
    const a = t.request;
    a && a.url && (a.url = Dt(a.url, o))
}
const mr = new WeakMap;

function na(t, e) {
    const n = b._sentryDebugIds;
    if (!n) return;
    let r;
    const s = mr.get(e);
    s ? r = s : (r = new Map, mr.set(e, r));
    const o = Object.entries(n).reduce((i, [a, c]) => {
        let u;
        const d = r.get(a);
        d ? u = d : (u = e(a), r.set(a, u));
        for (let f = u.length - 1; f >= 0; f--) {
            const l = u[f];
            if (l.filename) {
                i[l.filename] = c;
                break
            }
        }
        return i
    }, {});
    try {
        t.exception.values.forEach(i => {
            i.stacktrace.frames.forEach(a => {
                a.filename && (a.debug_id = o[a.filename])
            })
        })
    } catch (i) {}
}

function ra(t) {
    const e = {};
    try {
        t.exception.values.forEach(r => {
            r.stacktrace.frames.forEach(s => {
                s.debug_id && (s.abs_path ? e[s.abs_path] = s.debug_id : s.filename && (e[s.filename] = s.debug_id), delete s.debug_id)
            })
        })
    } catch (r) {}
    if (Object.keys(e).length === 0) return;
    t.debug_meta = t.debug_meta || {}, t.debug_meta.images = t.debug_meta.images || [];
    const n = t.debug_meta.images;
    Object.entries(e).forEach(([r, s]) => {
        n.push({
            type: "sourcemap",
            code_file: r,
            debug_id: s
        })
    })
}

function sa(t, e) {
    e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = [...t.sdk.integrations || [], ...e])
}

function oa(t, e, n) {
    if (!t) return null;
    const r = { ...t,
        ...t.breadcrumbs && {
            breadcrumbs: t.breadcrumbs.map(s => ({ ...s,
                ...s.data && {
                    data: mt(s.data, e, n)
                }
            }))
        },
        ...t.user && {
            user: mt(t.user, e, n)
        },
        ...t.contexts && {
            contexts: mt(t.contexts, e, n)
        },
        ...t.extra && {
            extra: mt(t.extra, e, n)
        }
    };
    return t.contexts && t.contexts.trace && r.contexts && (r.contexts.trace = t.contexts.trace, t.contexts.trace.data && (r.contexts.trace.data = mt(t.contexts.trace.data, e, n))), t.spans && (r.spans = t.spans.map(s => ({ ...s,
        ...s.data && {
            data: mt(s.data, e, n)
        }
    }))), r
}

function ia(t, e) {
    if (!e) return t;
    const n = t ? t.clone() : new ht;
    return n.update(e), n
}

function aa(t) {
    if (t) return ca(t) ? {
        captureContext: t
    } : da(t) ? {
        captureContext: t
    } : t
}

function ca(t) {
    return t instanceof ht || typeof t == "function"
}
const ua = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"];

function da(t) {
    return Object.keys(t).some(e => ua.includes(e))
}

function Dn(t, e) {
    return k().captureException(t, aa(e))
}

function Is(t, e) {
    return k().captureEvent(t, e)
}

function Jd(t) {
    rt().setUser(t)
}

function hr(t) {
    const e = v(),
        n = rt(),
        r = k(),
        {
            release: s,
            environment: o = xn
        } = e && e.getOptions() || {},
        {
            userAgent: i
        } = b.navigator || {},
        a = ai({
            release: s,
            environment: o,
            user: r.getUser() || n.getUser(),
            ...i && {
                userAgent: i
            },
            ...t
        }),
        c = n.getSession();
    return c && c.status === "ok" && Lt(c, {
        status: "exited"
    }), vs(), n.setSession(a), r.setSession(a), a
}

function vs() {
    const t = rt(),
        e = k(),
        n = e.getSession() || t.getSession();
    n && ci(n), ks(), t.setSession(), e.setSession()
}

function ks() {
    const t = rt(),
        e = k(),
        n = v(),
        r = e.getSession() || t.getSession();
    r && n && n.captureSession(r)
}

function gr(t = !1) {
    if (t) {
        vs();
        return
    }
    ks()
}
const fa = "7";

function la(t) {
    const e = t.protocol ? "".concat(t.protocol, ":") : "",
        n = t.port ? ":".concat(t.port) : "";
    return "".concat(e, "//").concat(t.host).concat(n).concat(t.path ? "/".concat(t.path) : "", "/api/")
}

function pa(t) {
    return "".concat(la(t)).concat(t.projectId, "/envelope/")
}

function ma(t, e) {
    return go({
        sentry_key: t.publicKey,
        sentry_version: fa,
        ...e && {
            sentry_client: "".concat(e.name, "/").concat(e.version)
        }
    })
}

function ha(t, e, n) {
    return e || "".concat(pa(t), "?").concat(ma(t, n))
}
const _r = [];

function ga(t) {
    const e = {};
    return t.forEach(n => {
        const {
            name: r
        } = n, s = e[r];
        s && !s.isDefaultInstance && n.isDefaultInstance || (e[r] = n)
    }), Object.values(e)
}

function _a(t) {
    const e = t.defaultIntegrations || [],
        n = t.integrations;
    e.forEach(i => {
        i.isDefaultInstance = !0
    });
    let r;
    Array.isArray(n) ? r = [...e, ...n] : typeof n == "function" ? r = wn(n(e)) : r = e;
    const s = ga(r),
        o = s.findIndex(i => i.name === "Debug");
    if (o > -1) {
        const [i] = s.splice(o, 1);
        s.push(i)
    }
    return s
}

function Sa(t, e) {
    const n = {};
    return e.forEach(r => {
        r && ws(t, r, n)
    }), n
}

function Sr(t, e) {
    for (const n of e) n && n.afterAllSetup && n.afterAllSetup(t)
}

function ws(t, e, n) {
    if (n[e.name]) {
        S && p.log("Integration skipped because it was already installed: ".concat(e.name));
        return
    }
    if (n[e.name] = e, _r.indexOf(e.name) === -1 && typeof e.setupOnce == "function" && (e.setupOnce(), _r.push(e.name)), e.setup && typeof e.setup == "function" && e.setup(t), typeof e.preprocessEvent == "function") {
        const r = e.preprocessEvent.bind(e);
        t.on("preprocessEvent", (s, o) => r(s, o, t))
    }
    if (typeof e.processEvent == "function") {
        const r = e.processEvent.bind(e),
            s = Object.assign((o, i) => r(o, i, t), {
                id: e.name
            });
        t.addEventProcessor(s)
    }
    S && p.log("Integration installed: ".concat(e.name))
}
const yr = "Not capturing exception because it's already been captured.";
class ya {
    constructor(e) {
        if (this._options = e, this._integrations = {}, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], e.dsn ? this._dsn = ho(e.dsn) : S && p.warn("No DSN provided, client will not send events."), this._dsn) {
            const n = ha(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
            this._transport = e.transport({
                tunnel: this._options.tunnel,
                recordDroppedEvent: this.recordDroppedEvent.bind(this),
                ...e.transportOptions,
                url: n
            })
        }
    }
    captureException(e, n, r) {
        const s = w();
        if (Qn(e)) return S && p.log(yr), s;
        const o = {
            event_id: s,
            ...n
        };
        return this._process(this.eventFromException(e, o).then(i => this._captureEvent(i, o, r))), o.event_id
    }
    captureMessage(e, n, r, s) {
        const o = {
                event_id: w(),
                ...r
            },
            i = Tn(e) ? e : String(e),
            a = In(e) ? this.eventFromMessage(i, n, o) : this.eventFromException(e, o);
        return this._process(a.then(c => this._captureEvent(c, o, s))), o.event_id
    }
    captureEvent(e, n, r) {
        const s = w();
        if (n && n.originalException && Qn(n.originalException)) return S && p.log(yr), s;
        const o = {
                event_id: s,
                ...n
            },
            a = (e.sdkProcessingMetadata || {}).capturedSpanScope;
        return this._process(this._captureEvent(e, o, a || r)), o.event_id
    }
    captureSession(e) {
        typeof e.release != "string" ? S && p.warn("Discarded session because of missing or non-string release") : (this.sendSession(e), Lt(e, {
            init: !1
        }))
    }
    getDsn() {
        return this._dsn
    }
    getOptions() {
        return this._options
    }
    getSdkMetadata() {
        return this._options._metadata
    }
    getTransport() {
        return this._transport
    }
    flush(e) {
        const n = this._transport;
        return n ? (this.emit("flush"), this._isClientDoneProcessing(e).then(r => n.flush(e).then(s => r && s))) : wt(!0)
    }
    close(e) {
        return this.flush(e).then(n => (this.getOptions().enabled = !1, this.emit("close"), n))
    }
    getEventProcessors() {
        return this._eventProcessors
    }
    addEventProcessor(e) {
        this._eventProcessors.push(e)
    }
    init() {
        (this._isEnabled() || this._options.integrations.some(({
            name: e
        }) => e.startsWith("Spotlight"))) && this._setupIntegrations()
    }
    getIntegrationByName(e) {
        return this._integrations[e]
    }
    addIntegration(e) {
        const n = this._integrations[e.name];
        ws(this, e, this._integrations), n || Sr(this, [e])
    }
    sendEvent(e, n = {}) {
        this.emit("beforeSendEvent", e, n);
        let r = Di(e, this._dsn, this._options._metadata, this._options.tunnel);
        for (const o of n.attachments || []) r = Vo(r, Jo(o));
        const s = this.sendEnvelope(r);
        s && s.then(o => this.emit("afterSendEvent", e, o), null)
    }
    sendSession(e) {
        const n = Pi(e, this._dsn, this._options._metadata, this._options.tunnel);
        this.sendEnvelope(n)
    }
    recordDroppedEvent(e, n, r) {
        if (this._options.sendClientReports) {
            const s = typeof r == "number" ? r : 1,
                o = "".concat(e, ":").concat(n);
            S && p.log('Recording outcome: "'.concat(o, '"').concat(s > 1 ? " (".concat(s, " times)") : "")), this._outcomes[o] = (this._outcomes[o] || 0) + s
        }
    }
    on(e, n) {
        const r = this._hooks[e] = this._hooks[e] || [];
        return r.push(n), () => {
            const s = r.indexOf(n);
            s > -1 && r.splice(s, 1)
        }
    }
    emit(e, ...n) {
        const r = this._hooks[e];
        r && r.forEach(s => s(...n))
    }
    sendEnvelope(e) {
        return this.emit("beforeEnvelope", e), this._isEnabled() && this._transport ? this._transport.send(e).then(null, n => (S && p.error("Error while sending event:", n), n)) : (S && p.error("Transport disabled"), wt({}))
    }
    _setupIntegrations() {
        const {
            integrations: e
        } = this._options;
        this._integrations = Sa(this, e), Sr(this, e)
    }
    _updateSessionFromEvent(e, n) {
        let r = !1,
            s = !1;
        const o = n.exception && n.exception.values;
        if (o) {
            s = !0;
            for (const c of o) {
                const u = c.mechanism;
                if (u && u.handled === !1) {
                    r = !0;
                    break
                }
            }
        }
        const i = e.status === "ok";
        (i && e.errors === 0 || i && r) && (Lt(e, { ...r && {
                status: "crashed"
            },
            errors: e.errors || Number(s || r)
        }), this.captureSession(e))
    }
    _isClientDoneProcessing(e) {
        return new G(n => {
            let r = 0;
            const s = 1,
                o = setInterval(() => {
                    this._numProcessing == 0 ? (clearInterval(o), n(!0)) : (r += s, e && r >= e && (clearInterval(o), n(!1)))
                }, s)
        })
    }
    _isEnabled() {
        return this.getOptions().enabled !== !1 && this._transport !== void 0
    }
    _prepareEvent(e, n, r, s = rt()) {
        const o = this.getOptions(),
            i = Object.keys(this._integrations);
        return !n.integrations && i.length > 0 && (n.integrations = i), this.emit("preprocessEvent", e, n), e.type || s.setLastEventId(e.event_id || n.event_id), ta(o, e, n, r, this, s).then(a => {
            if (a === null) return a;
            const c = { ...s.getPropagationContext(),
                ...r ? r.getPropagationContext() : void 0
            };
            if (!(a.contexts && a.contexts.trace) && c) {
                const {
                    traceId: d,
                    spanId: f,
                    parentSpanId: l,
                    dsc: m
                } = c;
                a.contexts = {
                    trace: D({
                        trace_id: d,
                        span_id: f,
                        parent_span_id: l
                    }),
                    ...a.contexts
                };
                const h = m || Fe(d, this);
                a.sdkProcessingMetadata = {
                    dynamicSamplingContext: h,
                    ...a.sdkProcessingMetadata
                }
            }
            return a
        })
    }
    _captureEvent(e, n = {}, r) {
        return this._processEvent(e, n, r).then(s => s.event_id, s => {
            if (S) {
                const o = s;
                o.logLevel === "log" ? p.log(o.message) : p.warn(o)
            }
        })
    }
    _processEvent(e, n, r) {
        const s = this.getOptions(),
            {
                sampleRate: o
            } = s,
            i = Rs(e),
            a = Ns(e),
            c = e.type || "error",
            u = "before send for type `".concat(c, "`"),
            d = typeof o > "u" ? void 0 : Ss(o);
        if (a && typeof d == "number" && Math.random() > d) return this.recordDroppedEvent("sample_rate", "error", e), Re(new et("Discarding event because it's not included in the random sample (sampling rate = ".concat(o, ")"), "log"));
        const f = c === "replay_event" ? "replay" : c,
            m = (e.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
        return this._prepareEvent(e, n, r, m).then(h => {
            if (h === null) throw this.recordDroppedEvent("event_processor", f, e), new et("An event processor returned `null`, will not send event.", "log");
            if (n.data && n.data.__sentry__ === !0) return h;
            const A = ba(this, s, h, n);
            return Ea(A, u)
        }).then(h => {
            if (h === null) {
                if (this.recordDroppedEvent("before_send", f, e), i) {
                    const K = 1 + (e.spans || []).length;
                    this.recordDroppedEvent("before_send", "span", K)
                }
                throw new et("".concat(u, " returned `null`, will not send event."), "log")
            }
            const y = r && r.getSession();
            if (!i && y && this._updateSessionFromEvent(y, h), i) {
                const X = h.sdkProcessingMetadata && h.sdkProcessingMetadata.spanCountBeforeProcessing || 0,
                    K = h.spans ? h.spans.length : 0,
                    yt = X - K;
                yt > 0 && this.recordDroppedEvent("before_send", "span", yt)
            }
            const A = h.transaction_info;
            if (i && A && h.transaction !== e.transaction) {
                const X = "custom";
                h.transaction_info = { ...A,
                    source: X
                }
            }
            return this.sendEvent(h, n), h
        }).then(null, h => {
            throw h instanceof et ? h : (this.captureException(h, {
                data: {
                    __sentry__: !0
                },
                originalException: h
            }), new et("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ".concat(h)))
        })
    }
    _process(e) {
        this._numProcessing++, e.then(n => (this._numProcessing--, n), n => (this._numProcessing--, n))
    }
    _clearOutcomes() {
        const e = this._outcomes;
        return this._outcomes = {}, Object.entries(e).map(([n, r]) => {
            const [s, o] = n.split(":");
            return {
                reason: s,
                category: o,
                quantity: r
            }
        })
    }
    _flushOutcomes() {
        S && p.log("Flushing outcomes...");
        const e = this._clearOutcomes();
        if (e.length === 0) {
            S && p.log("No outcomes to send");
            return
        }
        if (!this._dsn) {
            S && p.log("No dsn provided, will not send outcomes");
            return
        }
        S && p.log("Sending outcomes:", e);
        const n = ti(e, this._options.tunnel && re(this._dsn));
        this.sendEnvelope(n)
    }
}

function Ea(t, e) {
    const n = "".concat(e, " must return `null` or a valid event.");
    if ($e(t)) return t.then(r => {
        if (!Mt(r) && r !== null) throw new et(n);
        return r
    }, r => {
        throw new et("".concat(e, " rejected with ").concat(r))
    });
    if (!Mt(t) && t !== null) throw new et(n);
    return t
}

function ba(t, e, n, r) {
    const {
        beforeSend: s,
        beforeSendTransaction: o,
        beforeSendSpan: i
    } = e;
    if (Ns(n) && s) return s(n, r);
    if (Rs(n)) {
        if (n.spans && i) {
            const a = [];
            for (const c of n.spans) {
                const u = i(c);
                u ? a.push(u) : t.recordDroppedEvent("before_send", "span")
            }
            n.spans = a
        }
        if (o) {
            if (n.spans) {
                const a = n.spans.length;
                n.sdkProcessingMetadata = { ...n.sdkProcessingMetadata,
                    spanCountBeforeProcessing: a
                }
            }
            return o(n, r)
        }
    }
    return n
}

function Ns(t) {
    return t.type === void 0
}

function Rs(t) {
    return t.type === "transaction"
}

function Ta(t, e) {
    e.debug === !0 && (S ? p.enable() : gt(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
    })), k().update(e.initialScope);
    const r = new t(e);
    return Ia(r), r.init(), r
}

function Ia(t) {
    k().setClient(t)
}
const va = 64;

function ka(t, e, n = Lo(t.bufferSize || va)) {
    let r = {};
    const s = i => n.drain(i);

    function o(i) {
        const a = [];
        if (er(i, (f, l) => {
                const m = nr(l);
                if (si(r, m)) {
                    const h = Er(f, l);
                    t.recordDroppedEvent("ratelimit_backoff", m, h)
                } else a.push(f)
            }), a.length === 0) return wt({});
        const c = qt(i[0], a),
            u = f => {
                er(c, (l, m) => {
                    const h = Er(l, m);
                    t.recordDroppedEvent(f, nr(m), h)
                })
            },
            d = () => e({
                body: zo(c)
            }).then(f => (f.statusCode !== void 0 && (f.statusCode < 200 || f.statusCode >= 300) && S && p.warn("Sentry responded with status code ".concat(f.statusCode, " to sent event.")), r = oi(r, f), f), f => {
                throw u("network_error"), f
            });
        return n.add(d).then(f => f, f => {
            if (f instanceof et) return S && p.error("Skipped sending event because buffer is full."), u("queue_overflow"), wt({});
            throw f
        })
    }
    return {
        send: o,
        flush: s
    }
}

function Er(t, e) {
    if (!(e !== "event" && e !== "transaction")) return Array.isArray(t) ? t[1] : void 0
}

function wa(t, e, n = [e], r = "npm") {
    const s = t._metadata || {};
    s.sdk || (s.sdk = {
        name: "sentry.javascript.".concat(e),
        packages: n.map(o => ({
            name: "".concat(r, ":@sentry/").concat(o),
            version: ct
        })),
        version: ct
    }), t._metadata = s
}
const Na = 100;

function Rt(t, e) {
    const n = v(),
        r = rt();
    if (!n) return;
    const {
        beforeBreadcrumb: s = null,
        maxBreadcrumbs: o = Na
    } = n.getOptions();
    if (o <= 0) return;
    const a = {
            timestamp: se(),
            ...t
        },
        c = s ? gt(() => s(a, e)) : a;
    c !== null && (n.emit && n.emit("beforeAddBreadcrumb", c, e), r.addBreadcrumb(c, o))
}
let br;
const Ra = "FunctionToString",
    Tr = new WeakMap,
    Aa = () => ({
        name: Ra,
        setupOnce() {
            br = Function.prototype.toString;
            try {
                Function.prototype.toString = function(...t) {
                    const e = kn(this),
                        n = Tr.has(v()) && e !== void 0 ? e : this;
                    return br.apply(n, t)
                }
            } catch (t) {}
        },
        setup(t) {
            Tr.set(t, !0)
        }
    }),
    Ca = Aa,
    Oa = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, "undefined is not an object (evaluating 'a.L')", 'can\'t redefine non-configurable property "solana"', "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler"],
    xa = "InboundFilters",
    Pa = (t = {}) => ({
        name: xa,
        processEvent(e, n, r) {
            const s = r.getOptions(),
                o = $a(t, s);
            return Ma(e, o) ? null : e
        }
    }),
    Da = Pa;

function $a(t = {}, e = {}) {
    return {
        allowUrls: [...t.allowUrls || [], ...e.allowUrls || []],
        denyUrls: [...t.denyUrls || [], ...e.denyUrls || []],
        ignoreErrors: [...t.ignoreErrors || [], ...e.ignoreErrors || [], ...t.disableErrorDefaults ? [] : Oa],
        ignoreTransactions: [...t.ignoreTransactions || [], ...e.ignoreTransactions || []],
        ignoreInternal: t.ignoreInternal !== void 0 ? t.ignoreInternal : !0
    }
}

function Ma(t, e) {
    return e.ignoreInternal && ja(t) ? (S && p.warn("Event dropped due to being internal Sentry Error.\nEvent: ".concat(pt(t))), !0) : La(t, e.ignoreErrors) ? (S && p.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: ".concat(pt(t))), !0) : Ga(t) ? (S && p.warn("Event dropped due to not having an error message, error type or stacktrace.\nEvent: ".concat(pt(t))), !0) : Fa(t, e.ignoreTransactions) ? (S && p.warn("Event dropped due to being matched by `ignoreTransactions` option.\nEvent: ".concat(pt(t))), !0) : Ha(t, e.denyUrls) ? (S && p.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: ".concat(pt(t), ".\nUrl: ").concat(Oe(t))), !0) : Ua(t, e.allowUrls) ? !1 : (S && p.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: ".concat(pt(t), ".\nUrl: ").concat(Oe(t))), !0)
}

function La(t, e) {
    return t.type || !e || !e.length ? !1 : Ba(t).some(n => Et(n, e))
}

function Fa(t, e) {
    if (t.type !== "transaction" || !e || !e.length) return !1;
    const n = t.transaction;
    return n ? Et(n, e) : !1
}

function Ha(t, e) {
    if (!e || !e.length) return !1;
    const n = Oe(t);
    return n ? Et(n, e) : !1
}

function Ua(t, e) {
    if (!e || !e.length) return !0;
    const n = Oe(t);
    return n ? Et(n, e) : !0
}

function Ba(t) {
    const e = [];
    t.message && e.push(t.message);
    let n;
    try {
        n = t.exception.values[t.exception.values.length - 1]
    } catch (r) {}
    return n && n.value && (e.push(n.value), n.type && e.push("".concat(n.type, ": ").concat(n.value))), e
}

function ja(t) {
    try {
        return t.exception.values[0].type === "SentryError"
    } catch (e) {}
    return !1
}

function qa(t = []) {
    for (let e = t.length - 1; e >= 0; e--) {
        const n = t[e];
        if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]") return n.filename || null
    }
    return null
}

function Oe(t) {
    try {
        let e;
        try {
            e = t.exception.values[0].stacktrace.frames
        } catch (n) {}
        return e ? qa(e) : null
    } catch (e) {
        return S && p.error("Cannot extract url for event ".concat(pt(t))), null
    }
}

function Ga(t) {
    return t.type || !t.exception || !t.exception.values || t.exception.values.length === 0 ? !1 : !t.message && !t.exception.values.some(e => e.stacktrace || e.type && e.type !== "Error" || e.value)
}
const Wa = "Dedupe",
    Ya = () => {
        let t;
        return {
            name: Wa,
            processEvent(e) {
                if (e.type) return e;
                try {
                    if (za(e, t)) return S && p.warn("Event dropped due to being a duplicate of previously captured event."), null
                } catch (n) {}
                return t = e
            }
        }
    },
    Va = Ya;

function za(t, e) {
    return e ? !!(Xa(t, e) || Ka(t, e)) : !1
}

function Xa(t, e) {
    const n = t.message,
        r = e.message;
    return !(!n && !r || n && !r || !n && r || n !== r || !Cs(t, e) || !As(t, e))
}

function Ka(t, e) {
    const n = Ir(e),
        r = Ir(t);
    return !(!n || !r || n.type !== r.type || n.value !== r.value || !Cs(t, e) || !As(t, e))
}

function As(t, e) {
    let n = Kn(t),
        r = Kn(e);
    if (!n && !r) return !0;
    if (n && !r || !n && r || (n = n, r = r, r.length !== n.length)) return !1;
    for (let s = 0; s < r.length; s++) {
        const o = r[s],
            i = n[s];
        if (o.filename !== i.filename || o.lineno !== i.lineno || o.colno !== i.colno || o.function !== i.function) return !1
    }
    return !0
}

function Cs(t, e) {
    let n = t.fingerprint,
        r = e.fingerprint;
    if (!n && !r) return !0;
    if (n && !r || !n && r) return !1;
    n = n, r = r;
    try {
        return n.join("") === r.join("")
    } catch (s) {
        return !1
    }
}

function Ir(t) {
    return t.exception && t.exception.values && t.exception.values[0]
}

function Ja(t, e, n, r, s = "auto.http.browser") {
    if (!t.fetchData) return;
    const o = ft() && e(t.fetchData.url);
    if (t.endTimestamp && o) {
        const h = t.fetchData.__span;
        if (!h) return;
        const y = r[h];
        y && (tc(y, t), delete r[h]);
        return
    }
    const i = k(),
        a = v(),
        {
            method: c,
            url: u
        } = t.fetchData,
        d = Qa(u),
        f = d ? bt(d).host : void 0,
        l = !!x(),
        m = o && l ? nt({
            name: "".concat(c, " ").concat(u),
            attributes: {
                url: u,
                type: "fetch",
                "http.method": c,
                "http.url": d,
                "server.address": f,
                [N]: s,
                [Nt]: "http.client"
            }
        }) : new Wt;
    if (t.fetchData.__span = m.spanContext().spanId, r[m.spanContext().spanId] = m, n(t.fetchData.url) && a) {
        const h = t.args[0];
        t.args[1] = t.args[1] || {};
        const y = t.args[1];
        y.headers = Za(h, a, i, y, ft() && l ? m : void 0)
    }
    return m
}

function Za(t, e, n, r, s) {
    const o = rt(),
        {
            traceId: i,
            spanId: a,
            sampled: c,
            dsc: u
        } = { ...o.getPropagationContext(),
            ...n.getPropagationContext()
        },
        d = s ? ls(s) : Nn(i, a, c),
        f = os(u || (s ? Ct(s) : Fe(i, e))),
        l = r.headers || (typeof Request < "u" && ut(t, Request) ? t.headers : void 0);
    if (l)
        if (typeof Headers < "u" && ut(l, Headers)) {
            const m = new Headers(l);
            return m.append("sentry-trace", d), f && m.append(sn, f), m
        } else if (Array.isArray(l)) {
        const m = [...l, ["sentry-trace", d]];
        return f && m.push([sn, f]), m
    } else {
        const m = "baggage" in l ? l.baggage : void 0,
            h = [];
        return Array.isArray(m) ? h.push(...m) : m && h.push(m), f && h.push(f), { ...l,
            "sentry-trace": d,
            baggage: h.length > 0 ? h.join(",") : void 0
        }
    } else return {
        "sentry-trace": d,
        baggage: f
    }
}

function Qa(t) {
    try {
        return new URL(t).href
    } catch (e) {
        return
    }
}

function tc(t, e) {
    if (e.response) {
        us(t, e.response.status);
        const n = e.response && e.response.headers && e.response.headers.get("content-length");
        if (n) {
            const r = parseInt(n);
            r > 0 && t.setAttribute("http.response_content_length", r)
        }
    } else e.error && t.setStatus({
        code: O,
        message: "internal_error"
    });
    t.end()
}
const _ = b;
let pn = 0;

function Os() {
    return pn > 0
}

function ec() {
    pn++, setTimeout(() => {
        pn--
    })
}

function Ht(t, e = {}, n) {
    if (typeof t != "function") return t;
    try {
        const s = t.__sentry_wrapped__;
        if (s) return s;
        if (kn(t)) return t
    } catch (s) {
        return t
    }
    const r = function() {
        const s = Array.prototype.slice.call(arguments);
        try {
            const o = s.map(i => Ht(i, e));
            return t.apply(this, o)
        } catch (o) {
            throw ec(), Cn(i => {
                i.addEventProcessor(a => (e.mechanism && (nn(a, void 0), Qt(a, e.mechanism)), a.extra = { ...a.extra,
                    arguments: s
                }, a)), Dn(o)
            }), o
        }
    };
    try {
        for (const s in t) Object.prototype.hasOwnProperty.call(t, s) && (r[s] = t[s])
    } catch (s) {}
    Wr(r, t), Y(t, "__sentry_wrapped__", r);
    try {
        Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
            get() {
                return t.name
            }
        })
    } catch (s) {}
    return r
}
const z = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;

function $n(t, e) {
    const n = Mn(t, e),
        r = {
            type: e && e.name,
            value: ic(e)
        };
    return n.length && (r.stacktrace = {
        frames: n
    }), r.type === void 0 && r.value === "" && (r.value = "Unrecoverable error caught"), r
}

function nc(t, e, n, r) {
    const s = v(),
        o = s && s.getOptions().normalizeDepth,
        i = fc(e),
        a = {
            __serialized__: ns(e, o)
        };
    if (i) return {
        exception: {
            values: [$n(t, i)]
        },
        extra: a
    };
    const c = {
        exception: {
            values: [{
                type: De(e) ? e.constructor.name : r ? "UnhandledRejection" : "Error",
                value: uc(e, {
                    isUnhandledRejection: r
                })
            }]
        },
        extra: a
    };
    if (n) {
        const u = Mn(t, n);
        u.length && (c.exception.values[0].stacktrace = {
            frames: u
        })
    }
    return c
}

function je(t, e) {
    return {
        exception: {
            values: [$n(t, e)]
        }
    }
}

function Mn(t, e) {
    const n = e.stacktrace || e.stack || "",
        r = sc(e),
        s = oc(e);
    try {
        return t(n, r, s)
    } catch (o) {}
    return []
}
const rc = /Minified React error #\d+;/i;

function sc(t) {
    return t && rc.test(t.message) ? 1 : 0
}

function oc(t) {
    return typeof t.framesToPop == "number" ? t.framesToPop : 0
}

function ic(t) {
    const e = t && t.message;
    return e ? e.error && typeof e.error.message == "string" ? e.error.message : e : "No error message"
}

function ac(t, e, n, r) {
    const s = n && n.syntheticException || void 0,
        o = Ln(t, e, s, r);
    return Qt(o), o.level = "error", n && n.event_id && (o.event_id = n.event_id), wt(o)
}

function cc(t, e, n = "info", r, s) {
    const o = r && r.syntheticException || void 0,
        i = mn(t, e, o, s);
    return i.level = n, r && r.event_id && (i.event_id = r.event_id), wt(i)
}

function Ln(t, e, n, r, s) {
    let o;
    if (Br(e) && e.error) return je(t, e.error);
    if (jn(e) || Js(e)) {
        const i = e;
        if ("stack" in e) o = je(t, e);
        else {
            const a = i.name || (jn(i) ? "DOMError" : "DOMException"),
                c = i.message ? "".concat(a, ": ").concat(i.message) : a;
            o = mn(t, c, n, r), nn(o, c)
        }
        return "code" in i && (o.tags = { ...o.tags,
            "DOMException.code": "".concat(i.code)
        }), o
    }
    return bn(e) ? je(t, e) : Mt(e) || De(e) ? (o = nc(t, e, n, s), Qt(o, {
        synthetic: !0
    }), o) : (o = mn(t, e, n, r), nn(o, "".concat(e)), Qt(o, {
        synthetic: !0
    }), o)
}

function mn(t, e, n, r) {
    const s = {};
    if (r && n) {
        const o = Mn(t, n);
        o.length && (s.exception = {
            values: [{
                value: e,
                stacktrace: {
                    frames: o
                }
            }]
        })
    }
    if (Tn(e)) {
        const {
            __sentry_template_string__: o,
            __sentry_template_values__: i
        } = e;
        return s.logentry = {
            message: o,
            params: i
        }, s
    }
    return s.message = e, s
}

function uc(t, {
    isUnhandledRejection: e
}) {
    const n = _o(t),
        r = e ? "promise rejection" : "exception";
    if (Br(t)) return "Event `ErrorEvent` captured as ".concat(r, " with message `").concat(t.message, "`");
    if (De(t)) {
        const s = dc(t);
        return "Event `".concat(s, "` (type=").concat(t.type, ") captured as ").concat(r)
    }
    return "Object captured as ".concat(r, " with keys: ").concat(n)
}

function dc(t) {
    try {
        const e = Object.getPrototypeOf(t);
        return e ? e.constructor.name : void 0
    } catch (e) {}
}

function fc(t) {
    for (const e in t)
        if (Object.prototype.hasOwnProperty.call(t, e)) {
            const n = t[e];
            if (n instanceof Error) return n
        }
}

function lc(t, {
    metadata: e,
    tunnel: n,
    dsn: r
}) {
    const s = {
            event_id: t.event_id,
            sent_at: new Date().toISOString(),
            ...e && e.sdk && {
                sdk: {
                    name: e.sdk.name,
                    version: e.sdk.version
                }
            },
            ...!!n && !!r && {
                dsn: re(r)
            }
        },
        o = pc(t);
    return qt(s, [o])
}

function pc(t) {
    return [{
        type: "user_report"
    }, t]
}
class mc extends ya {
    constructor(e) {
        const n = {
                parentSpanIsAlwaysRootSpan: !0,
                ...e
            },
            r = _.SENTRY_SDK_SOURCE || Oo();
        wa(n, "browser", ["browser"], r), super(n), n.sendClientReports && _.document && _.document.addEventListener("visibilitychange", () => {
            _.document.visibilityState === "hidden" && this._flushOutcomes()
        })
    }
    eventFromException(e, n) {
        return ac(this._options.stackParser, e, n, this._options.attachStacktrace)
    }
    eventFromMessage(e, n = "info", r) {
        return cc(this._options.stackParser, e, n, r, this._options.attachStacktrace)
    }
    captureUserFeedback(e) {
        if (!this._isEnabled()) {
            z && p.warn("SDK not enabled, will not capture user feedback.");
            return
        }
        const n = lc(e, {
            metadata: this.getSdkMetadata(),
            dsn: this.getDsn(),
            tunnel: this.getOptions().tunnel
        });
        this.sendEnvelope(n)
    }
    _prepareEvent(e, n, r) {
        return e.platform = e.platform || "javascript", super._prepareEvent(e, n, r)
    }
}
const q = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
    hc = (t, e) => t > e[1] ? "poor" : t > e[0] ? "needs-improvement" : "good",
    Yt = (t, e, n, r) => {
        let s, o;
        return i => {
            e.value >= 0 && (i || r) && (o = e.value - (s || 0), (o || s === void 0) && (s = e.value, e.delta = o, e.rating = hc(e.value, n), t(e)))
        }
    },
    g = b,
    gc = () => "v3-".concat(Date.now(), "-").concat(Math.floor(Math.random() * (9e12 - 1)) + 1e12),
    ie = () => g.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0],
    He = () => {
        const t = ie();
        return t && t.activationStart || 0
    },
    Vt = (t, e) => {
        const n = ie();
        let r = "navigate";
        return n && (g.document && g.document.prerendering || He() > 0 ? r = "prerender" : g.document && g.document.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))), {
            name: t,
            value: typeof e > "u" ? -1 : e,
            rating: "good",
            delta: 0,
            entries: [],
            id: gc(),
            navigationType: r
        }
    },
    Ot = (t, e, n) => {
        try {
            if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                const r = new PerformanceObserver(s => {
                    Promise.resolve().then(() => {
                        e(s.getEntries())
                    })
                });
                return r.observe(Object.assign({
                    type: t,
                    buffered: !0
                }, n || {})), r
            }
        } catch (r) {}
    },
    ae = t => {
        const e = n => {
            (n.type === "pagehide" || g.document && g.document.visibilityState === "hidden") && t(n)
        };
        g.document && (addEventListener("visibilitychange", e, !0), addEventListener("pagehide", e, !0))
    },
    Fn = t => {
        let e = !1;
        return n => {
            e || (t(n), e = !0)
        }
    };
let ee = -1;
const _c = () => {
        ee = g.document.visibilityState === "hidden" && !g.document.prerendering ? 0 : 1 / 0
    },
    xe = t => {
        g.document.visibilityState === "hidden" && ee > -1 && (ee = t.type === "visibilitychange" ? t.timeStamp : 0, removeEventListener("visibilitychange", xe, !0), removeEventListener("prerenderingchange", xe, !0))
    },
    Sc = () => {
        addEventListener("visibilitychange", xe, !0), addEventListener("prerenderingchange", xe, !0)
    },
    Ue = () => (g.document && ee < 0 && (_c(), Sc()), {
        get firstHiddenTime() {
            return ee
        }
    }),
    ce = t => {
        g.document && g.document.prerendering ? addEventListener("prerenderingchange", () => t(), !0) : t()
    },
    yc = [1800, 3e3],
    Ec = (t, e = {}) => {
        ce(() => {
            const n = Ue(),
                r = Vt("FCP");
            let s;
            const i = Ot("paint", a => {
                a.forEach(c => {
                    c.name === "first-contentful-paint" && (i.disconnect(), c.startTime < n.firstHiddenTime && (r.value = Math.max(c.startTime - He(), 0), r.entries.push(c), s(!0)))
                })
            });
            i && (s = Yt(t, r, yc, e.reportAllChanges))
        })
    },
    bc = [.1, .25],
    Tc = (t, e = {}) => {
        Ec(Fn(() => {
            const n = Vt("CLS", 0);
            let r, s = 0,
                o = [];
            const i = c => {
                    c.forEach(u => {
                        if (!u.hadRecentInput) {
                            const d = o[0],
                                f = o[o.length - 1];
                            s && d && f && u.startTime - f.startTime < 1e3 && u.startTime - d.startTime < 5e3 ? (s += u.value, o.push(u)) : (s = u.value, o = [u])
                        }
                    }), s > n.value && (n.value = s, n.entries = o, r())
                },
                a = Ot("layout-shift", i);
            a && (r = Yt(t, n, bc, e.reportAllChanges), ae(() => {
                i(a.takeRecords()), r(!0)
            }), setTimeout(r, 0))
        }))
    },
    Ic = [100, 300],
    vc = (t, e = {}) => {
        ce(() => {
            const n = Ue(),
                r = Vt("FID");
            let s;
            const o = c => {
                    c.startTime < n.firstHiddenTime && (r.value = c.processingStart - c.startTime, r.entries.push(c), s(!0))
                },
                i = c => {
                    c.forEach(o)
                },
                a = Ot("first-input", i);
            s = Yt(t, r, Ic, e.reportAllChanges), a && ae(Fn(() => {
                i(a.takeRecords()), a.disconnect()
            }))
        })
    };
let xs = 0,
    qe = 1 / 0,
    Se = 0;
const kc = t => {
    t.forEach(e => {
        e.interactionId && (qe = Math.min(qe, e.interactionId), Se = Math.max(Se, e.interactionId), xs = Se ? (Se - qe) / 7 + 1 : 0)
    })
};
let hn;
const wc = () => hn ? xs : performance.interactionCount || 0,
    Nc = () => {
        "interactionCount" in performance || hn || (hn = Ot("event", kc, {
            type: "event",
            buffered: !0,
            durationThreshold: 0
        }))
    },
    Rc = [200, 500],
    Ac = 0,
    Ps = () => wc() - Ac,
    vr = 10,
    it = [],
    Ge = {},
    kr = t => {
        const e = it[it.length - 1],
            n = Ge[t.interactionId];
        if (n || it.length < vr || e && t.duration > e.latency) {
            if (n) n.entries.push(t), n.latency = Math.max(n.latency, t.duration);
            else {
                const r = {
                    id: t.interactionId,
                    latency: t.duration,
                    entries: [t]
                };
                Ge[r.id] = r, it.push(r)
            }
            it.sort((r, s) => s.latency - r.latency), it.splice(vr).forEach(r => {
                delete Ge[r.id]
            })
        }
    },
    Cc = () => {
        const t = Math.min(it.length - 1, Math.floor(Ps() / 50));
        return it[t]
    },
    Oc = (t, e = {}) => {
        ce(() => {
            Nc();
            const n = Vt("INP");
            let r;
            const s = i => {
                    i.forEach(c => {
                        c.interactionId && kr(c), c.entryType === "first-input" && !it.some(d => d.entries.some(f => c.duration === f.duration && c.startTime === f.startTime)) && kr(c)
                    });
                    const a = Cc();
                    a && a.latency !== n.value && (n.value = a.latency, n.entries = a.entries, r())
                },
                o = Ot("event", s, {
                    durationThreshold: e.durationThreshold != null ? e.durationThreshold : 40
                });
            r = Yt(t, n, Rc, e.reportAllChanges), o && ("PerformanceEventTiming" in g && "interactionId" in PerformanceEventTiming.prototype && o.observe({
                type: "first-input",
                buffered: !0
            }), ae(() => {
                s(o.takeRecords()), n.value < 0 && Ps() > 0 && (n.value = 0, n.entries = []), r(!0)
            }))
        })
    },
    xc = [2500, 4e3],
    wr = {},
    Pc = (t, e = {}) => {
        ce(() => {
            const n = Ue(),
                r = Vt("LCP");
            let s;
            const o = a => {
                    const c = a[a.length - 1];
                    c && c.startTime < n.firstHiddenTime && (r.value = Math.max(c.startTime - He(), 0), r.entries = [c], s())
                },
                i = Ot("largest-contentful-paint", o);
            if (i) {
                s = Yt(t, r, xc, e.reportAllChanges);
                const a = Fn(() => {
                    wr[r.id] || (o(i.takeRecords()), i.disconnect(), wr[r.id] = !0, s(!0))
                });
                ["keydown", "click"].forEach(c => {
                    g.document && addEventListener(c, () => setTimeout(a, 0), !0)
                }), ae(a)
            }
        })
    },
    Dc = [800, 1800],
    gn = t => {
        g.document && g.document.prerendering ? ce(() => gn(t)) : g.document && g.document.readyState !== "complete" ? addEventListener("load", () => gn(t), !0) : setTimeout(t, 0)
    },
    $c = (t, e = {}) => {
        const n = Vt("TTFB"),
            r = Yt(t, n, Dc, e.reportAllChanges);
        gn(() => {
            const s = ie();
            if (s) {
                const o = s.responseStart;
                if (o <= 0 || o > performance.now()) return;
                n.value = Math.max(o - He(), 0), n.entries = [s], r(!0)
            }
        })
    },
    Kt = {},
    Pe = {};
let Ds, $s, Ms, Ls, Fs;

function Hs(t, e = !1) {
    return ue("cls", t, Uc, Ds, e)
}

function Mc(t, e = !1) {
    return ue("lcp", t, jc, Ms, e)
}

function Lc(t) {
    return ue("fid", t, Bc, $s)
}

function Fc(t) {
    return ue("ttfb", t, qc, Ls)
}

function Hc(t) {
    return ue("inp", t, Gc, Fs)
}

function ne(t, e) {
    return Us(t, e), Pe[t] || (Wc(t), Pe[t] = !0), Bs(t, e)
}

function zt(t, e) {
    const n = Kt[t];
    if (!(!n || !n.length))
        for (const r of n) try {
            r(e)
        } catch (s) {
            q && p.error("Error while triggering instrumentation handler.\nType: ".concat(t, "\nName: ").concat(dt(r), "\nError:"), s)
        }
}

function Uc() {
    return Tc(t => {
        zt("cls", {
            metric: t
        }), Ds = t
    }, {
        reportAllChanges: !0
    })
}

function Bc() {
    return vc(t => {
        zt("fid", {
            metric: t
        }), $s = t
    })
}

function jc() {
    return Pc(t => {
        zt("lcp", {
            metric: t
        }), Ms = t
    }, {
        reportAllChanges: !0
    })
}

function qc() {
    return $c(t => {
        zt("ttfb", {
            metric: t
        }), Ls = t
    })
}

function Gc() {
    return Oc(t => {
        zt("inp", {
            metric: t
        }), Fs = t
    })
}

function ue(t, e, n, r, s = !1) {
    Us(t, e);
    let o;
    return Pe[t] || (o = n(), Pe[t] = !0), r && e({
        metric: r
    }), Bs(t, e, s ? o : void 0)
}

function Wc(t) {
    const e = {};
    t === "event" && (e.durationThreshold = 0), Ot(t, n => {
        zt(t, {
            entries: n
        })
    }, e)
}

function Us(t, e) {
    Kt[t] = Kt[t] || [], Kt[t].push(e)
}

function Bs(t, e, n) {
    return () => {
        n && n();
        const r = Kt[t];
        if (!r) return;
        const s = r.indexOf(e);
        s !== -1 && r.splice(s, 1)
    }
}

function Yc(t) {
    return "duration" in t
}

function We(t) {
    return typeof t == "number" && isFinite(t)
}

function Ut(t, e, n, { ...r
}) {
    const s = E(t).start_timestamp;
    return s && s > e && typeof t.updateStartTime == "function" && t.updateStartTime(e), Es(t, () => {
        const o = nt({
            startTime: e,
            ...r
        });
        return o && o.end(n), o
    })
}

function js(t) {
    const e = v();
    if (!e) return;
    const {
        name: n,
        transaction: r,
        attributes: s,
        startTime: o
    } = t, {
        release: i,
        environment: a
    } = e.getOptions(), c = e.getIntegrationByName("Replay"), u = c && c.getReplayId(), d = k(), f = d.getUser(), l = f !== void 0 ? f.email || f.id || f.ip_address : void 0;
    let m;
    try {
        m = d.getScopeData().contexts.profile.profile_id
    } catch (y) {}
    const h = {
        release: i,
        environment: a,
        user: l || void 0,
        profile_id: m || void 0,
        replay_id: u || void 0,
        transaction: r,
        "user_agent.original": g.navigator && g.navigator.userAgent,
        ...s
    };
    return nt({
        name: n,
        attributes: h,
        startTime: o,
        experimental: {
            standalone: !0
        }
    })
}

function Hn() {
    return g && g.addEventListener && g.performance
}

function R(t) {
    return t / 1e3
}

function Vc() {
    let t = 0,
        e, n;
    if (!Xc()) return;
    let r = !1;

    function s() {
        r || (r = !0, n && zc(t, e, n), o())
    }
    const o = Hs(({
        metric: i
    }) => {
        const a = i.entries[i.entries.length - 1];
        a && (t = i.value, e = a)
    }, !0);
    ae(() => {
        s()
    }), setTimeout(() => {
        const i = v(),
            a = tt([i, "optionalAccess", f => f.on, "call", f => f("startNavigationSpan", () => {
                s(), a && a()
            })]),
            c = x(),
            u = c && $(c),
            d = u && E(u);
        d && d.op === "pageload" && (n = u.spanContext().spanId)
    }, 0)
}

function zc(t, e, n) {
    q && p.log("Sending CLS span (".concat(t, ")"));
    const r = R(B) + (tt([e, "optionalAccess", u => u.startTime]) || 0),
        s = R(tt([e, "optionalAccess", u => u.duration]) || 0),
        o = k().getScopeData().transactionName,
        i = e ? vt(tt([e, "access", u => u.sources, "access", u => u[0], "optionalAccess", u => u.node])) : "Layout shift",
        a = D({
            [N]: "auto.http.browser.cls",
            [Nt]: "ui.webvital.cls",
            [On]: tt([e, "optionalAccess", u => u.duration]) || 0,
            "sentry.pageload.span_id": n
        }),
        c = js({
            name: i,
            transaction: o,
            attributes: a,
            startTime: r
        });
    tt([c, "optionalAccess", u => u.addEvent, "call", u => u("cls", {
        [Me]: "",
        [Le]: t
    })]), tt([c, "optionalAccess", u => u.end, "call", u => u(r + s)])
}

function Xc() {
    try {
        return tt([PerformanceObserver, "access", t => t.supportedEntryTypes, "optionalAccess", t => t.includes, "call", t => t("layout-shift")])
    } catch (t) {
        return !1
    }
}
const Kc = 2147483647;
let Nr = 0,
    P = {},
    Q, Jt;

function Jc({
    recordClsStandaloneSpans: t
}) {
    const e = Hn();
    if (e && B) {
        e.mark && g.performance.mark("sentry-tracing-init");
        const n = ru(),
            r = nu(),
            s = su(),
            o = t ? Vc() : eu();
        return () => {
            n(), r(), s(), o && o()
        }
    }
    return () => {}
}

function Zc() {
    ne("longtask", ({
        entries: t
    }) => {
        if (x())
            for (const e of t) {
                const n = R(B + e.startTime),
                    r = R(e.duration),
                    s = nt({
                        name: "Main UI thread blocked",
                        op: "ui.long-task",
                        startTime: n,
                        attributes: {
                            [N]: "auto.ui.browser.metrics"
                        }
                    });
                s && s.end(n + r)
            }
    })
}

function Qc() {
    new PerformanceObserver(e => {
        if (x())
            for (const n of e.getEntries()) {
                if (!n.scripts[0]) continue;
                const r = R(B + n.startTime),
                    s = R(n.duration),
                    o = {
                        [N]: "auto.ui.browser.metrics"
                    },
                    i = n.scripts[0],
                    {
                        invoker: a,
                        invokerType: c,
                        sourceURL: u,
                        sourceFunctionName: d,
                        sourceCharPosition: f
                    } = i;
                o["browser.script.invoker"] = a, o["browser.script.invoker_type"] = c, u && (o["code.filepath"] = u), d && (o["code.function"] = d), f !== -1 && (o["browser.script.source_char_position"] = f);
                const l = nt({
                    name: "Main UI thread blocked",
                    op: "ui.long-animation-frame",
                    startTime: r,
                    attributes: o
                });
                l && l.end(r + s)
            }
    }).observe({
        type: "long-animation-frame",
        buffered: !0
    })
}

function tu() {
    ne("event", ({
        entries: t
    }) => {
        if (x()) {
            for (const e of t)
                if (e.name === "click") {
                    const n = R(B + e.startTime),
                        r = R(e.duration),
                        s = {
                            name: vt(e.target),
                            op: "ui.interaction.".concat(e.name),
                            startTime: n,
                            attributes: {
                                [N]: "auto.ui.browser.metrics"
                            }
                        },
                        o = qr(e.target);
                    o && (s.attributes["ui.component_name"] = o);
                    const i = nt(s);
                    i && i.end(n + r)
                }
        }
    })
}

function eu() {
    return Hs(({
        metric: t
    }) => {
        const e = t.entries[t.entries.length - 1];
        e && (q && p.log("[Measurements] Adding CLS ".concat(t.value)), P.cls = {
            value: t.value,
            unit: ""
        }, Jt = e)
    }, !0)
}

function nu() {
    return Mc(({
        metric: t
    }) => {
        const e = t.entries[t.entries.length - 1];
        e && (q && p.log("[Measurements] Adding LCP"), P.lcp = {
            value: t.value,
            unit: "millisecond"
        }, Q = e)
    }, !0)
}

function ru() {
    return Lc(({
        metric: t
    }) => {
        const e = t.entries[t.entries.length - 1];
        if (!e) return;
        const n = R(B),
            r = R(e.startTime);
        q && p.log("[Measurements] Adding FID"), P.fid = {
            value: t.value,
            unit: "millisecond"
        }, P["mark.fid"] = {
            value: n + r,
            unit: "second"
        }
    })
}

function su() {
    return Fc(({
        metric: t
    }) => {
        t.entries[t.entries.length - 1] && (q && p.log("[Measurements] Adding TTFB"), P.ttfb = {
            value: t.value,
            unit: "millisecond"
        })
    })
}

function ou(t, e) {
    const n = Hn();
    if (!n || !g.performance.getEntries || !B) return;
    q && p.log("[Tracing] Adding & adjusting spans using Performance API");
    const r = R(B),
        s = n.getEntries(),
        {
            op: o,
            start_timestamp: i
        } = E(t);
    if (s.slice(Nr).forEach(a => {
            const c = R(a.startTime),
                u = R(Math.max(0, a.duration));
            if (!(o === "navigation" && i && r + c < i)) switch (a.entryType) {
                case "navigation":
                    {
                        au(t, a, r);
                        break
                    }
                case "mark":
                case "paint":
                case "measure":
                    {
                        iu(t, a, c, u, r);
                        const d = Ue(),
                            f = a.startTime < d.firstHiddenTime;a.name === "first-paint" && f && (q && p.log("[Measurements] Adding FP"), P.fp = {
                            value: a.startTime,
                            unit: "millisecond"
                        }),
                        a.name === "first-contentful-paint" && f && (q && p.log("[Measurements] Adding FCP"), P.fcp = {
                            value: a.startTime,
                            unit: "millisecond"
                        });
                        break
                    }
                case "resource":
                    {
                        uu(t, a, a.name, c, u, r);
                        break
                    }
            }
        }), Nr = Math.max(s.length - 1, 0), du(t), o === "pageload") {
        lu(P);
        const a = P["mark.fid"];
        a && P.fid && (Ut(t, a.value, a.value + R(P.fid.value), {
            name: "first input delay",
            op: "ui.action",
            attributes: {
                [N]: "auto.ui.browser.metrics"
            }
        }), delete P["mark.fid"]), (!("fcp" in P) || !e.recordClsOnPageloadSpan) && delete P.cls, Object.entries(P).forEach(([c, u]) => {
            Mi(c, u.value, u.unit)
        }), t.setAttribute("performance.timeOrigin", r), fu(t)
    }
    Q = void 0, Jt = void 0, P = {}
}

function iu(t, e, n, r, s) {
    const o = ie(),
        i = R(o ? o.requestStart : 0),
        a = s + Math.max(n, i),
        c = s + n,
        u = c + r,
        d = {
            [N]: "auto.resource.browser.metrics"
        };
    return a !== c && (d["sentry.browser.measure_happened_before_request"] = !0, d["sentry.browser.measure_start_time"] = a), Ut(t, a, u, {
        name: e.name,
        op: e.entryType,
        attributes: d
    }), a
}

function au(t, e, n) {
    ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(r => {
        ye(t, e, r, n)
    }), ye(t, e, "secureConnection", n, "TLS/SSL", "connectEnd"), ye(t, e, "fetch", n, "cache", "domainLookupStart"), ye(t, e, "domainLookup", n, "DNS"), cu(t, e, n)
}

function ye(t, e, n, r, s, o) {
    const i = o ? e[o] : e["".concat(n, "End")],
        a = e["".concat(n, "Start")];
    !a || !i || Ut(t, r + R(a), r + R(i), {
        op: "browser",
        name: s || n,
        attributes: {
            [N]: "auto.ui.browser.metrics"
        }
    })
}

function cu(t, e, n) {
    const r = n + R(e.requestStart),
        s = n + R(e.responseEnd),
        o = n + R(e.responseStart);
    e.responseEnd && (Ut(t, r, s, {
        op: "browser",
        name: "request",
        attributes: {
            [N]: "auto.ui.browser.metrics"
        }
    }), Ut(t, o, s, {
        op: "browser",
        name: "response",
        attributes: {
            [N]: "auto.ui.browser.metrics"
        }
    }))
}

function uu(t, e, n, r, s, o) {
    if (e.initiatorType === "xmlhttprequest" || e.initiatorType === "fetch") return;
    const i = bt(n),
        a = {
            [N]: "auto.resource.browser.metrics"
        };
    Ye(a, e, "transferSize", "http.response_transfer_size"), Ye(a, e, "encodedBodySize", "http.response_content_length"), Ye(a, e, "decodedBodySize", "http.decoded_response_content_length"), "renderBlockingStatus" in e && (a["resource.render_blocking_status"] = e.renderBlockingStatus), i.protocol && (a["url.scheme"] = i.protocol.split(":").pop()), i.host && (a["server.address"] = i.host), a["url.same_origin"] = n.includes(g.location.origin);
    const c = o + r,
        u = c + s;
    Ut(t, c, u, {
        name: n.replace(g.location.origin, ""),
        op: e.initiatorType ? "resource.".concat(e.initiatorType) : "resource.other",
        attributes: a
    })
}

function du(t) {
    const e = g.navigator;
    if (!e) return;
    const n = e.connection;
    n && (n.effectiveType && t.setAttribute("effectiveConnectionType", n.effectiveType), n.type && t.setAttribute("connectionType", n.type), We(n.rtt) && (P["connection.rtt"] = {
        value: n.rtt,
        unit: "millisecond"
    })), We(e.deviceMemory) && t.setAttribute("deviceMemory", "".concat(e.deviceMemory, " GB")), We(e.hardwareConcurrency) && t.setAttribute("hardwareConcurrency", String(e.hardwareConcurrency))
}

function fu(t) {
    Q && (q && p.log("[Measurements] Adding LCP Data"), Q.element && t.setAttribute("lcp.element", vt(Q.element)), Q.id && t.setAttribute("lcp.id", Q.id), Q.url && t.setAttribute("lcp.url", Q.url.trim().slice(0, 200)), t.setAttribute("lcp.size", Q.size)), Jt && Jt.sources && (q && p.log("[Measurements] Adding CLS Data"), Jt.sources.forEach((e, n) => t.setAttribute("cls.source.".concat(n + 1), vt(e.node))))
}

function Ye(t, e, n, r) {
    const s = e[n];
    s != null && s < Kc && (t[r] = s)
}

function lu(t) {
    const e = ie();
    if (!e) return;
    const {
        responseStart: n,
        requestStart: r
    } = e;
    r <= n && (q && p.log("[Measurements] Adding TTFB Request Time"), t["ttfb.requestTime"] = {
        value: n - r,
        unit: "millisecond"
    })
}
const pu = 1e3;
let Rr, _n, Sn;

function mu(t) {
    const e = "dom";
    _t(e, t), St(e, hu)
}

function hu() {
    if (!g.document) return;
    const t = W.bind(null, "dom"),
        e = Ar(t, !0);
    g.document.addEventListener("click", e, !1), g.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach(n => {
        const r = g[n] && g[n].prototype;
        !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (j(r, "addEventListener", function(s) {
            return function(o, i, a) {
                if (o === "click" || o == "keypress") try {
                    const c = this,
                        u = c.__sentry_instrumentation_handlers__ = c.__sentry_instrumentation_handlers__ || {},
                        d = u[o] = u[o] || {
                            refCount: 0
                        };
                    if (!d.handler) {
                        const f = Ar(t);
                        d.handler = f, s.call(this, o, f, a)
                    }
                    d.refCount++
                } catch (c) {}
                return s.call(this, o, i, a)
            }
        }), j(r, "removeEventListener", function(s) {
            return function(o, i, a) {
                if (o === "click" || o == "keypress") try {
                    const c = this,
                        u = c.__sentry_instrumentation_handlers__ || {},
                        d = u[o];
                    d && (d.refCount--, d.refCount <= 0 && (s.call(this, o, d.handler, a), d.handler = void 0, delete u[o]), Object.keys(u).length === 0 && delete c.__sentry_instrumentation_handlers__)
                } catch (c) {}
                return s.call(this, o, i, a)
            }
        }))
    })
}

function gu(t) {
    if (t.type !== _n) return !1;
    try {
        if (!t.target || t.target._sentryId !== Sn) return !1
    } catch (e) {}
    return !0
}

function _u(t, e) {
    return t !== "keypress" ? !1 : !e || !e.tagName ? !0 : !(e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable)
}

function Ar(t, e = !1) {
    return n => {
        if (!n || n._sentryCaptured) return;
        const r = Su(n);
        if (_u(n.type, r)) return;
        Y(n, "_sentryCaptured", !0), r && !r._sentryId && Y(r, "_sentryId", w());
        const s = n.type === "keypress" ? "input" : n.type;
        gu(n) || (t({
            event: n,
            name: s,
            global: e
        }), _n = n.type, Sn = r ? r._sentryId : void 0), clearTimeout(Rr), Rr = g.setTimeout(() => {
            Sn = void 0, _n = void 0
        }, pu)
    }
}

function Su(t) {
    try {
        return t.target
    } catch (e) {
        return null
    }
}
let Ee;

function Un(t) {
    const e = "history";
    _t(e, t), St(e, yu)
}

function yu() {
    if (!ii()) return;
    const t = g.onpopstate;
    g.onpopstate = function(...n) {
        const r = g.location.href,
            s = Ee;
        if (Ee = r, W("history", {
                from: s,
                to: r
            }), t) try {
            return t.apply(this, n)
        } catch (i) {}
    };

    function e(n) {
        return function(...r) {
            const s = r.length > 2 ? r[2] : void 0;
            if (s) {
                const o = Ee,
                    i = String(s);
                Ee = i, W("history", {
                    from: o,
                    to: i
                })
            }
            return n.apply(this, r)
        }
    }
    j(g.history, "pushState", e), j(g.history, "replaceState", e)
}
const ke = {};

function Eu(t) {
    const e = ke[t];
    if (e) return e;
    let n = g[t];
    if (tn(n)) return ke[t] = n.bind(g);
    const r = g.document;
    if (r && typeof r.createElement == "function") try {
        const s = r.createElement("iframe");
        s.hidden = !0, r.head.appendChild(s);
        const o = s.contentWindow;
        o && o[t] && (n = o[t]), r.head.removeChild(s)
    } catch (s) {
        q && p.warn("Could not create sandbox iframe for ".concat(t, " check, bailing to window.").concat(t, ": "), s)
    }
    return n && (ke[t] = n.bind(g))
}

function Cr(t) {
    ke[t] = void 0
}
const Pt = "__sentry_xhr_v3__";

function qs(t) {
    const e = "xhr";
    _t(e, t), St(e, bu)
}

function bu() {
    if (!g.XMLHttpRequest) return;
    const t = XMLHttpRequest.prototype;
    t.open = new Proxy(t.open, {
        apply(e, n, r) {
            const s = L() * 1e3,
                o = at(r[0]) ? r[0].toUpperCase() : void 0,
                i = Tu(r[1]);
            if (!o || !i) return e.apply(n, r);
            n[Pt] = {
                method: o,
                url: i,
                request_headers: {}
            }, o === "POST" && i.match(/sentry_key/) && (n.__sentry_own_request__ = !0);
            const a = () => {
                const c = n[Pt];
                if (c && n.readyState === 4) {
                    try {
                        c.status_code = n.status
                    } catch (d) {}
                    const u = {
                        endTimestamp: L() * 1e3,
                        startTimestamp: s,
                        xhr: n
                    };
                    W("xhr", u)
                }
            };
            return "onreadystatechange" in n && typeof n.onreadystatechange == "function" ? n.onreadystatechange = new Proxy(n.onreadystatechange, {
                apply(c, u, d) {
                    return a(), c.apply(u, d)
                }
            }) : n.addEventListener("readystatechange", a), n.setRequestHeader = new Proxy(n.setRequestHeader, {
                apply(c, u, d) {
                    const [f, l] = d, m = u[Pt];
                    return m && at(f) && at(l) && (m.request_headers[f.toLowerCase()] = l), c.apply(u, d)
                }
            }), e.apply(n, r)
        }
    }), t.send = new Proxy(t.send, {
        apply(e, n, r) {
            const s = n[Pt];
            if (!s) return e.apply(n, r);
            r[0] !== void 0 && (s.body = r[0]);
            const o = {
                startTimestamp: L() * 1e3,
                xhr: n
            };
            return W("xhr", o), e.apply(n, r)
        }
    })
}

function Tu(t) {
    if (at(t)) return t;
    try {
        return t.toString()
    } catch (e) {}
}
const Ve = [],
    we = new Map;

function Iu() {
    if (Hn() && B) {
        const e = vu();
        return () => {
            e()
        }
    }
    return () => {}
}
const Or = {
    click: "click",
    pointerdown: "click",
    pointerup: "click",
    mousedown: "click",
    mouseup: "click",
    touchstart: "click",
    touchend: "click",
    mouseover: "hover",
    mouseout: "hover",
    mouseenter: "hover",
    mouseleave: "hover",
    pointerover: "hover",
    pointerout: "hover",
    pointerenter: "hover",
    pointerleave: "hover",
    dragstart: "drag",
    dragend: "drag",
    drag: "drag",
    dragenter: "drag",
    dragleave: "drag",
    dragover: "drag",
    drop: "drag",
    keydown: "press",
    keyup: "press",
    keypress: "press",
    input: "press"
};

function vu() {
    return Hc(({
        metric: t
    }) => {
        if (t.value == null) return;
        const e = t.entries.find(h => h.duration === t.value && Or[h.name]);
        if (!e) return;
        const {
            interactionId: n
        } = e, r = Or[e.name], s = R(B + e.startTime), o = R(t.value), i = x(), a = i ? $(i) : void 0, u = (n != null ? we.get(n) : void 0) || a, d = u ? E(u).description : k().getScopeData().transactionName, f = vt(e.target), l = D({
            [N]: "auto.http.browser.inp",
            [Nt]: "ui.interaction.".concat(r),
            [On]: e.duration
        }), m = js({
            name: f,
            transaction: d,
            attributes: l,
            startTime: s
        });
        tt([m, "optionalAccess", h => h.addEvent, "call", h => h("inp", {
            [Me]: "millisecond",
            [Le]: t.value
        })]), tt([m, "optionalAccess", h => h.end, "call", h => h(s + o)])
    })
}

function ku(t) {
    const e = ({
        entries: n
    }) => {
        const r = x(),
            s = r && $(r);
        n.forEach(o => {
            if (!Yc(o) || !s) return;
            const i = o.interactionId;
            if (i != null && !we.has(i)) {
                if (Ve.length > 10) {
                    const a = Ve.shift();
                    we.delete(a)
                }
                Ve.push(i), we.set(i, s)
            }
        })
    };
    ne("event", e), ne("first-input", e)
}

function wu(t, e = Eu("fetch")) {
    let n = 0,
        r = 0;

    function s(o) {
        const i = o.body.length;
        n += i, r++;
        const a = {
            body: o.body,
            method: "POST",
            referrerPolicy: "origin",
            headers: t.headers,
            keepalive: n <= 6e4 && r < 15,
            ...t.fetchOptions
        };
        if (!e) return Cr("fetch"), Re("No fetch implementation available");
        try {
            return e(t.url, a).then(c => (n -= i, r--, {
                statusCode: c.status,
                headers: {
                    "x-sentry-rate-limits": c.headers.get("X-Sentry-Rate-Limits"),
                    "retry-after": c.headers.get("Retry-After")
                }
            }))
        } catch (c) {
            return Cr("fetch"), n -= i, r--, Re(c)
        }
    }
    return ka(t, s)
}
const Nu = 30,
    Ru = 50;

function yn(t, e, n, r) {
    const s = {
        filename: t,
        function: e === "<anonymous>" ? kt : e,
        in_app: !0
    };
    return n !== void 0 && (s.lineno = n), r !== void 0 && (s.colno = r), s
}
const Au = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
    Cu = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    Ou = /\((\S*)(?::(\d+))(?::(\d+))\)/,
    xu = t => {
        const e = Au.exec(t);
        if (e) {
            const [, r, s, o] = e;
            return yn(r, kt, +s, +o)
        }
        const n = Cu.exec(t);
        if (n) {
            if (n[2] && n[2].indexOf("eval") === 0) {
                const i = Ou.exec(n[2]);
                i && (n[2] = i[1], n[3] = i[2], n[4] = i[3])
            }
            const [s, o] = Gs(n[1] || kt, n[2]);
            return yn(o, s, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0)
        }
    },
    Pu = [Nu, xu],
    Du = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
    $u = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
    Mu = t => {
        const e = Du.exec(t);
        if (e) {
            if (e[3] && e[3].indexOf(" > eval") > -1) {
                const o = $u.exec(e[3]);
                o && (e[1] = e[1] || "eval", e[3] = o[1], e[4] = o[2], e[5] = "")
            }
            let r = e[3],
                s = e[1] || kt;
            return [s, r] = Gs(s, r), yn(r, s, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
        }
    },
    Lu = [Ru, Mu],
    Fu = [Pu, Lu],
    Hu = zr(...Fu),
    Gs = (t, e) => {
        const n = t.indexOf("safari-extension") !== -1,
            r = t.indexOf("safari-web-extension") !== -1;
        return n || r ? [t.indexOf("@") !== -1 ? t.split("@")[0] : kt, n ? "safari-extension:".concat(e) : "safari-web-extension:".concat(e)] : [t, e]
    },
    be = 1024,
    Uu = "Breadcrumbs",
    Bu = (t = {}) => {
        const e = {
            console: !0,
            dom: !0,
            fetch: !0,
            history: !0,
            sentry: !0,
            xhr: !0,
            ...t
        };
        return {
            name: Uu,
            setup(n) {
                e.console && bo(Wu(n)), e.dom && mu(Gu(n, e.dom)), e.xhr && qs(Yu(n)), e.fetch && Jr(Vu(n)), e.history && Un(zu(n)), e.sentry && n.on("beforeSendEvent", qu(n))
            }
        }
    },
    ju = Bu;

function qu(t) {
    return function(n) {
        v() === t && Rt({
            category: "sentry.".concat(n.type === "transaction" ? "transaction" : "event"),
            event_id: n.event_id,
            level: n.level,
            message: pt(n)
        }, {
            event: n
        })
    }
}

function Gu(t, e) {
    return function(r) {
        if (v() !== t) return;
        let s, o, i = typeof e == "object" ? e.serializeAttribute : void 0,
            a = typeof e == "object" && typeof e.maxStringLength == "number" ? e.maxStringLength : void 0;
        a && a > be && (z && p.warn("`dom.maxStringLength` cannot exceed ".concat(be, ", but a value of ").concat(a, " was configured. Sentry will use ").concat(be, " instead.")), a = be), typeof i == "string" && (i = [i]);
        try {
            const u = r.event,
                d = Xu(u) ? u.target : u;
            s = vt(d, {
                keyAttrs: i,
                maxStringLength: a
            }), o = qr(d)
        } catch (u) {
            s = "<unknown>"
        }
        if (s.length === 0) return;
        const c = {
            category: "ui.".concat(r.name),
            message: s
        };
        o && (c.data = {
            "ui.component_name": o
        }), Rt(c, {
            event: r.event,
            name: r.name,
            global: r.global
        })
    }
}

function Wu(t) {
    return function(n) {
        if (v() !== t) return;
        const r = {
            category: "console",
            data: {
                arguments: n.args,
                logger: "console"
            },
            level: Ho(n.level),
            message: qn(n.args, " ")
        };
        if (n.level === "assert")
            if (n.args[0] === !1) r.message = "Assertion failed: ".concat(qn(n.args.slice(1), " ") || "console.assert"), r.data.arguments = n.args.slice(1);
            else return;
        Rt(r, {
            input: n.args,
            level: n.level
        })
    }
}

function Yu(t) {
    return function(n) {
        if (v() !== t) return;
        const {
            startTimestamp: r,
            endTimestamp: s
        } = n, o = n.xhr[Pt];
        if (!r || !s || !o) return;
        const {
            method: i,
            url: a,
            status_code: c,
            body: u
        } = o, d = {
            method: i,
            url: a,
            status_code: c
        }, f = {
            xhr: n.xhr,
            input: u,
            startTimestamp: r,
            endTimestamp: s
        };
        Rt({
            category: "xhr",
            data: d,
            type: "http"
        }, f)
    }
}

function Vu(t) {
    return function(n) {
        if (v() !== t) return;
        const {
            startTimestamp: r,
            endTimestamp: s
        } = n;
        if (s && !(n.fetchData.url.match(/sentry_key/) && n.fetchData.method === "POST"))
            if (n.error) {
                const o = n.fetchData,
                    i = {
                        data: n.error,
                        input: n.args,
                        startTimestamp: r,
                        endTimestamp: s
                    };
                Rt({
                    category: "fetch",
                    data: o,
                    level: "error",
                    type: "http"
                }, i)
            } else {
                const o = n.response,
                    i = { ...n.fetchData,
                        status_code: o && o.status
                    },
                    a = {
                        input: n.args,
                        response: o,
                        startTimestamp: r,
                        endTimestamp: s
                    };
                Rt({
                    category: "fetch",
                    data: i,
                    type: "http"
                }, a)
            }
    }
}

function zu(t) {
    return function(n) {
        if (v() !== t) return;
        let r = n.from,
            s = n.to;
        const o = bt(_.location.href);
        let i = r ? bt(r) : void 0;
        const a = bt(s);
        (!i || !i.path) && (i = o), o.protocol === a.protocol && o.host === a.host && (s = a.relative), o.protocol === i.protocol && o.host === i.host && (r = i.relative), Rt({
            category: "navigation",
            data: {
                from: r,
                to: s
            }
        })
    }
}

function Xu(t) {
    return !!t && !!t.target
}
const Ku = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
    Ju = "BrowserApiErrors",
    Zu = (t = {}) => {
        const e = {
            XMLHttpRequest: !0,
            eventTarget: !0,
            requestAnimationFrame: !0,
            setInterval: !0,
            setTimeout: !0,
            ...t
        };
        return {
            name: Ju,
            setupOnce() {
                e.setTimeout && j(_, "setTimeout", xr), e.setInterval && j(_, "setInterval", xr), e.requestAnimationFrame && j(_, "requestAnimationFrame", td), e.XMLHttpRequest && "XMLHttpRequest" in _ && j(XMLHttpRequest.prototype, "send", ed);
                const n = e.eventTarget;
                n && (Array.isArray(n) ? n : Ku).forEach(nd)
            }
        }
    },
    Qu = Zu;

function xr(t) {
    return function(...e) {
        const n = e[0];
        return e[0] = Ht(n, {
            mechanism: {
                data: {
                    function: dt(t)
                },
                handled: !1,
                type: "instrument"
            }
        }), t.apply(this, e)
    }
}

function td(t) {
    return function(e) {
        return t.apply(this, [Ht(e, {
            mechanism: {
                data: {
                    function: "requestAnimationFrame",
                    handler: dt(t)
                },
                handled: !1,
                type: "instrument"
            }
        })])
    }
}

function ed(t) {
    return function(...e) {
        const n = this;
        return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(s => {
            s in n && typeof n[s] == "function" && j(n, s, function(o) {
                const i = {
                        mechanism: {
                            data: {
                                function: s,
                                handler: dt(o)
                            },
                            handled: !1,
                            type: "instrument"
                        }
                    },
                    a = kn(o);
                return a && (i.mechanism.data.handler = dt(a)), Ht(o, i)
            })
        }), t.apply(this, e)
    }
}

function nd(t) {
    const e = _,
        n = e[t] && e[t].prototype;
    !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (j(n, "addEventListener", function(r) {
        return function(s, o, i) {
            try {
                typeof o.handleEvent == "function" && (o.handleEvent = Ht(o.handleEvent, {
                    mechanism: {
                        data: {
                            function: "handleEvent",
                            handler: dt(o),
                            target: t
                        },
                        handled: !1,
                        type: "instrument"
                    }
                }))
            } catch (a) {}
            return r.apply(this, [s, Ht(o, {
                mechanism: {
                    data: {
                        function: "addEventListener",
                        handler: dt(o),
                        target: t
                    },
                    handled: !1,
                    type: "instrument"
                }
            }), i])
        }
    }), j(n, "removeEventListener", function(r) {
        return function(s, o, i) {
            const a = o;
            try {
                const c = a && a.__sentry_wrapped__;
                c && r.call(this, s, c, i)
            } catch (c) {}
            return r.call(this, s, a, i)
        }
    }))
}
const rd = "GlobalHandlers",
    sd = (t = {}) => {
        const e = {
            onerror: !0,
            onunhandledrejection: !0,
            ...t
        };
        return {
            name: rd,
            setupOnce() {
                Error.stackTraceLimit = 50
            },
            setup(n) {
                e.onerror && (id(n), Pr("onerror")), e.onunhandledrejection && (ad(n), Pr("onunhandledrejection"))
            }
        }
    },
    od = sd;

function id(t) {
    Qr(e => {
        const {
            stackParser: n,
            attachStacktrace: r
        } = Ws();
        if (v() !== t || Os()) return;
        const {
            msg: s,
            url: o,
            line: i,
            column: a,
            error: c
        } = e, u = dd(Ln(n, c || s, void 0, r, !1), o, i, a);
        u.level = "error", Is(u, {
            originalException: c,
            mechanism: {
                handled: !1,
                type: "onerror"
            }
        })
    })
}

function ad(t) {
    ts(e => {
        const {
            stackParser: n,
            attachStacktrace: r
        } = Ws();
        if (v() !== t || Os()) return;
        const s = cd(e),
            o = In(s) ? ud(s) : Ln(n, s, void 0, r, !0);
        o.level = "error", Is(o, {
            originalException: s,
            mechanism: {
                handled: !1,
                type: "onunhandledrejection"
            }
        })
    })
}

function cd(t) {
    if (In(t)) return t;
    try {
        if ("reason" in t) return t.reason;
        if ("detail" in t && "reason" in t.detail) return t.detail.reason
    } catch (e) {}
    return t
}

function ud(t) {
    return {
        exception: {
            values: [{
                type: "UnhandledRejection",
                value: "Non-Error promise rejection captured with value: ".concat(String(t))
            }]
        }
    }
}

function dd(t, e, n, r) {
    const s = t.exception = t.exception || {},
        o = s.values = s.values || [],
        i = o[0] = o[0] || {},
        a = i.stacktrace = i.stacktrace || {},
        c = a.frames = a.frames || [],
        u = isNaN(parseInt(r, 10)) ? void 0 : r,
        d = isNaN(parseInt(n, 10)) ? void 0 : n,
        f = at(e) && e.length > 0 ? e : io();
    return c.length === 0 && c.push({
        colno: u,
        filename: f,
        function: kt,
        in_app: !0,
        lineno: d
    }), t
}

function Pr(t) {
    z && p.log("Global Handler attached: ".concat(t))
}

function Ws() {
    const t = v();
    return t && t.getOptions() || {
        stackParser: () => [],
        attachStacktrace: !1
    }
}
const fd = () => ({
        name: "HttpContext",
        preprocessEvent(t) {
            if (!_.navigator && !_.location && !_.document) return;
            const e = t.request && t.request.url || _.location && _.location.href,
                {
                    referrer: n
                } = _.document || {},
                {
                    userAgent: r
                } = _.navigator || {},
                s = { ...t.request && t.request.headers,
                    ...n && {
                        Referer: n
                    },
                    ...r && {
                        "User-Agent": r
                    }
                },
                o = { ...t.request,
                    ...e && {
                        url: e
                    },
                    headers: s
                };
            t.request = o
        }
    }),
    ld = "cause",
    pd = 5,
    md = "LinkedErrors",
    hd = (t = {}) => {
        const e = t.limit || pd,
            n = t.key || ld;
        return {
            name: md,
            preprocessEvent(r, s, o) {
                const i = o.getOptions();
                no($n, i.stackParser, i.maxValueLength, n, e, r, s)
            }
        }
    },
    gd = hd;

function Ys(t) {
    return [Da(), Ca(), Qu(), ju(), od(), gd(), Va(), fd()]
}

function _d(t = {}) {
    const e = {
        defaultIntegrations: Ys(),
        release: typeof __SENTRY_RELEASE__ == "string" ? __SENTRY_RELEASE__ : _.SENTRY_RELEASE && _.SENTRY_RELEASE.id ? _.SENTRY_RELEASE.id : void 0,
        autoSessionTracking: !0,
        sendClientReports: !0
    };
    return t.defaultIntegrations == null && delete t.defaultIntegrations, { ...e,
        ...t
    }
}

function Sd() {
    const t = typeof _.window < "u" && _;
    if (!t) return !1;
    const e = t.chrome ? "chrome" : "browser",
        n = t[e],
        r = n && n.runtime && n.runtime.id,
        s = _.location && _.location.href || "",
        o = ["chrome-extension:", "moz-extension:", "ms-browser-extension:", "safari-web-extension:"],
        i = !!r && _ === _.top && o.some(c => s.startsWith("".concat(c, "//"))),
        a = typeof t.nw < "u";
    return !!r && !i && !a
}

function yd(t = {}) {
    const e = _d(t);
    if (Sd()) {
        gt(() => {
            console.error("[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/")
        });
        return
    }
    z && (Xr() || p.warn("No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill."));
    const n = { ...e,
            stackParser: yo(e.stackParser || Hu),
            integrations: _a(e),
            transport: e.transport || wu
        },
        r = Ta(mc, n);
    return e.autoSessionTracking && Ed(), r
}

function Ed() {
    if (typeof _.document > "u") {
        z && p.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
        return
    }
    hr({
        ignoreDuration: !0
    }), gr(), Un(({
        from: t,
        to: e
    }) => {
        t !== void 0 && t !== e && (hr({
            ignoreDuration: !0
        }), gr())
    })
}
const Dr = new WeakMap,
    ze = new Map,
    En = {
        traceFetch: !0,
        traceXHR: !0,
        enableHTTPTimings: !0
    };

function bd(t, e) {
    const {
        traceFetch: n,
        traceXHR: r,
        shouldCreateSpanForRequest: s,
        enableHTTPTimings: o,
        tracePropagationTargets: i
    } = {
        traceFetch: En.traceFetch,
        traceXHR: En.traceXHR,
        ...e
    }, a = typeof s == "function" ? s : d => !0, c = d => kd(d, i), u = {};
    n && (t.addEventProcessor(d => (d.type === "transaction" && d.spans && d.spans.forEach(f => {
        if (f.op === "http.client") {
            const l = ze.get(f.span_id);
            l && (f.timestamp = l / 1e3, ze.delete(f.span_id))
        }
    }), d)), ko(d => {
        if (d.response) {
            const f = Dr.get(d.response);
            f && d.endTimestamp && ze.set(f, d.endTimestamp)
        }
    }), Jr(d => {
        const f = Ja(d, a, c, u);
        if (d.response && d.fetchData.__span && Dr.set(d.response, d.fetchData.__span), f) {
            const l = Vs(d.fetchData.url),
                m = l ? bt(l).host : void 0;
            f.setAttributes({
                "http.url": l,
                "server.address": m
            })
        }
        o && f && $r(f)
    })), r && qs(d => {
        const f = wd(d, a, c, u);
        o && f && $r(f)
    })
}

function Td(t) {
    return t.entryType === "resource" && "initiatorType" in t && typeof t.nextHopProtocol == "string" && (t.initiatorType === "fetch" || t.initiatorType === "xmlhttprequest")
}

function $r(t) {
    const {
        url: e
    } = E(t).data || {};
    if (!e || typeof e != "string") return;
    const n = ne("resource", ({
        entries: r
    }) => {
        r.forEach(s => {
            Td(s) && s.name.endsWith(e) && (vd(s).forEach(i => t.setAttribute(...i)), setTimeout(n))
        })
    })
}

function Id(t) {
    let e = "unknown",
        n = "unknown",
        r = "";
    for (const s of t) {
        if (s === "/") {
            [e, n] = t.split("/");
            break
        }
        if (!isNaN(Number(s))) {
            e = r === "h" ? "http" : r, n = t.split(r)[1];
            break
        }
        r += s
    }
    return r === t && (e = r), {
        name: e,
        version: n
    }
}

function Z(t = 0) {
    return ((B || performance.timeOrigin) + t) / 1e3
}

function vd(t) {
    const {
        name: e,
        version: n
    } = Id(t.nextHopProtocol), r = [];
    return r.push(["network.protocol.version", n], ["network.protocol.name", e]), B ? [...r, ["http.request.redirect_start", Z(t.redirectStart)],
        ["http.request.fetch_start", Z(t.fetchStart)],
        ["http.request.domain_lookup_start", Z(t.domainLookupStart)],
        ["http.request.domain_lookup_end", Z(t.domainLookupEnd)],
        ["http.request.connect_start", Z(t.connectStart)],
        ["http.request.secure_connection_start", Z(t.secureConnectionStart)],
        ["http.request.connection_end", Z(t.connectEnd)],
        ["http.request.request_start", Z(t.requestStart)],
        ["http.request.response_start", Z(t.responseStart)],
        ["http.request.response_end", Z(t.responseEnd)]
    ] : r
}

function kd(t, e) {
    const n = _.location && _.location.href;
    if (n) {
        let r, s;
        try {
            r = new URL(t, n), s = new URL(n).origin
        } catch (i) {
            return !1
        }
        const o = r.origin === s;
        return e ? Et(r.toString(), e) || o && Et(r.pathname, e) : o
    } else {
        const r = !!t.match(/^\/(?!\/)/);
        return e ? Et(t, e) : r
    }
}

function wd(t, e, n, r) {
    const s = t.xhr,
        o = s && s[Pt];
    if (!s || s.__sentry_own_request__ || !o) return;
    const i = ft() && e(o.url);
    if (t.endTimestamp && i) {
        const l = s.__sentry_xhr_span_id__;
        if (!l) return;
        const m = r[l];
        m && o.status_code !== void 0 && (us(m, o.status_code), m.end(), delete r[l]);
        return
    }
    const a = Vs(o.url),
        c = a ? bt(a).host : void 0,
        u = !!x(),
        d = i && u ? nt({
            name: "".concat(o.method, " ").concat(o.url),
            attributes: {
                type: "xhr",
                "http.method": o.method,
                "http.url": a,
                url: o.url,
                "server.address": c,
                [N]: "auto.http.browser",
                [Nt]: "http.client"
            }
        }) : new Wt;
    s.__sentry_xhr_span_id__ = d.spanContext().spanId, r[s.__sentry_xhr_span_id__] = d;
    const f = v();
    return s.setRequestHeader && n(o.url) && f && Nd(s, f, ft() && u ? d : void 0), d
}

function Nd(t, e, n) {
    const r = k(),
        s = rt(),
        {
            traceId: o,
            spanId: i,
            sampled: a,
            dsc: c
        } = { ...s.getPropagationContext(),
            ...r.getPropagationContext()
        },
        u = n && ft() ? ls(n) : Nn(o, i, a),
        d = os(c || (n ? Ct(n) : Fe(o, e)));
    Rd(t, u, d)
}

function Rd(t, e, n) {
    try {
        t.setRequestHeader("sentry-trace", e), n && t.setRequestHeader(sn, n)
    } catch (r) {}
}

function Vs(t) {
    try {
        return new URL(t, _.location.origin).href
    } catch (e) {
        return
    }
}

function Ad() {
    _ && _.document ? _.document.addEventListener("visibilitychange", () => {
        const t = x();
        if (!t) return;
        const e = $(t);
        if (_.document.hidden && e) {
            const n = "cancelled",
                {
                    op: r,
                    status: s
                } = E(e);
            z && p.log("[Tracing] Transaction: ".concat(n, " -> since tab moved to the background, op: ").concat(r)), s || e.setStatus({
                code: O,
                message: n
            }), e.setAttribute("sentry.cancellation_reason", "document.hidden"), e.end()
        }
    }) : z && p.warn("[Tracing] Could not set up background tab detection due to lack of global document")
}
const Cd = "BrowserTracing",
    Od = { ...ve,
        instrumentNavigation: !0,
        instrumentPageLoad: !0,
        markBackgroundSpan: !0,
        enableLongTask: !0,
        enableLongAnimationFrame: !0,
        enableInp: !0,
        _experiments: {},
        ...En
    },
    Mr = (t = {}) => {
        Ni();
        const {
            enableInp: e,
            enableLongTask: n,
            enableLongAnimationFrame: r,
            _experiments: {
                enableInteractions: s,
                enableStandaloneClsSpans: o
            },
            beforeStartSpan: i,
            idleTimeout: a,
            finalTimeout: c,
            childSpanTimeout: u,
            markBackgroundSpan: d,
            traceFetch: f,
            traceXHR: l,
            shouldCreateSpanForRequest: m,
            enableHTTPTimings: h,
            instrumentPageLoad: y,
            instrumentNavigation: A
        } = { ...Od,
            ...t
        }, X = Jc({
            recordClsStandaloneSpans: o || !1
        });
        e && Iu(), r && b.PerformanceObserver && PerformanceObserver.supportedEntryTypes.includes("long-animation-frame") ? Qc() : n && Zc(), s && tu();
        const K = {
            name: void 0,
            source: void 0
        };

        function yt(F, C) {
            const T = C.op === "pageload",
                I = i ? i(C) : C,
                M = I.attributes || {};
            C.name !== I.name && (M[V] = "custom", I.attributes = M), K.name = I.name, K.source = M[V];
            const J = Ts(I, {
                idleTimeout: a,
                finalTimeout: c,
                childSpanTimeout: u,
                disableAutoFinish: T,
                beforeSpanEnd: st => {
                    X(), ou(st, {
                        recordClsOnPageloadSpan: !o
                    })
                }
            });

            function U() {
                ["interactive", "complete"].includes(_.document.readyState) && F.emit("idleSpanEnableAutoFinish", J)
            }
            return T && _.document && (_.document.addEventListener("readystatechange", () => {
                U()
            }), U()), J
        }
        return {
            name: Cd,
            afterAllSetup(F) {
                let C, T = _.location && _.location.href;
                F.on("startNavigationSpan", I => {
                    v() === F && (C && !E(C).timestamp && (z && p.log("[Tracing] Finishing current root span with op: ".concat(E(C).op)), C.end()), C = yt(F, {
                        op: "navigation",
                        ...I
                    }))
                }), F.on("startPageLoadSpan", (I, M = {}) => {
                    if (v() !== F) return;
                    C && !E(C).timestamp && (z && p.log("[Tracing] Finishing current root span with op: ".concat(E(C).op)), C.end());
                    const J = M.sentryTrace || Lr("sentry-trace"),
                        U = M.baggage || Lr("baggage"),
                        st = Yo(J, U);
                    k().setPropagationContext(st), C = yt(F, {
                        op: "pageload",
                        ...I
                    })
                }), F.on("spanEnd", I => {
                    const M = E(I).op;
                    if (I !== $(I) || M !== "navigation" && M !== "pageload") return;
                    const J = k(),
                        U = J.getPropagationContext();
                    J.setPropagationContext({ ...U,
                        sampled: U.sampled !== void 0 ? U.sampled : At(I),
                        dsc: U.dsc || Ct(I)
                    })
                }), _.location && (y && xd(F, {
                    name: _.location.pathname,
                    startTime: B ? B / 1e3 : void 0,
                    attributes: {
                        [V]: "url",
                        [N]: "auto.pageload.browser"
                    }
                }), A && Un(({
                    to: I,
                    from: M
                }) => {
                    if (M === void 0 && T && T.indexOf(I) !== -1) {
                        T = void 0;
                        return
                    }
                    M !== I && (T = void 0, zs(F, {
                        name: _.location.pathname,
                        attributes: {
                            [V]: "url",
                            [N]: "auto.navigation.browser"
                        }
                    }))
                })), d && Ad(), s && Pd(a, c, u, K), e && ku(), bd(F, {
                    traceFetch: f,
                    traceXHR: l,
                    tracePropagationTargets: F.getOptions().tracePropagationTargets,
                    shouldCreateSpanForRequest: m,
                    enableHTTPTimings: h
                })
            }
        }
    };

function xd(t, e, n) {
    t.emit("startPageLoadSpan", e, n), k().setTransactionName(e.name);
    const r = x();
    return (r && E(r).op) === "pageload" ? r : void 0
}

function zs(t, e) {
    rt().setPropagationContext(Ae()), k().setPropagationContext(Ae()), t.emit("startNavigationSpan", e), k().setTransactionName(e.name);
    const n = x();
    return (n && E(n).op) === "navigation" ? n : void 0
}

function Lr(t) {
    const e = ao("meta[name=".concat(t, "]"));
    return e ? e.getAttribute("content") : void 0
}

function Pd(t, e, n, r) {
    let s;
    const o = () => {
        const i = "ui.action.click",
            a = x(),
            c = a && $(a);
        if (c) {
            const u = E(c).op;
            if (["navigation", "pageload"].includes(u)) {
                z && p.warn("[Tracing] Did not create ".concat(i, " span because a pageload or navigation span is in progress."));
                return
            }
        }
        if (s && (s.setAttribute(un, "interactionInterrupted"), s.end(), s = void 0), !r.name) {
            z && p.warn("[Tracing] Did not create ".concat(i, " transaction because _latestRouteName is missing."));
            return
        }
        s = Ts({
            name: r.name,
            op: i,
            attributes: {
                [V]: r.source || "url"
            }
        }, {
            idleTimeout: t,
            finalTimeout: e,
            childSpanTimeout: n
        })
    };
    _.document && addEventListener("click", o, {
        once: !1,
        capture: !0
    })
}
const Xs = ["activate", "mount", "update"],
    Ks = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
    Dd = /(?:^|[-_])(\w)/g,
    $d = t => t.replace(Dd, e => e.toUpperCase()).replace(/[-_]/g, ""),
    Md = "<Root>",
    Xe = "<Anonymous>",
    Ld = (t, e) => t.repeat(e),
    Zt = (t, e) => {
        if (!t) return Xe;
        if (t.$root === t) return Md;
        if (!t.$options) return Xe;
        const n = t.$options;
        let r = n.name || n._componentTag || n.__name;
        const s = n.__file;
        if (!r && s) {
            const o = s.match(/([^/\\]+)\.vue$/);
            o && (r = o[1])
        }
        return (r ? "<".concat($d(r), ">") : Xe) + (s && e !== !1 ? " at ".concat(s) : "")
    },
    Fd = t => {
        if (t && (t._isVue || t.__isVue) && t.$parent) {
            const e = [];
            let n = 0;
            for (; t;) {
                if (e.length > 0) {
                    const s = e[e.length - 1];
                    if (s.constructor === t.constructor) {
                        n++, t = t.$parent;
                        continue
                    } else n > 0 && (e[e.length - 1] = [s, n], n = 0)
                }
                e.push(t), t = t.$parent
            }
            const r = e.map((s, o) => "".concat((o === 0 ? "---> " : Ld(" ", 5 + o * 2)) + (Array.isArray(s) ? "".concat(Zt(s[0]), "... (").concat(s[1], " recursive calls)") : Zt(s)))).join("\n");
            return "\n\nfound in\n\n".concat(r)
        }
        return "\n\n(found in ".concat(Zt(t), ")")
    },
    Hd = (t, e) => {
        const {
            errorHandler: n,
            warnHandler: r,
            silent: s
        } = t.config;
        t.config.errorHandler = (o, i, a) => {
            const c = Zt(i, !1),
                u = i ? Fd(i) : "",
                d = {
                    componentName: c,
                    lifecycleHook: a,
                    trace: u
                };
            if (e.attachProps && i && (i.$options && i.$options.propsData ? d.propsData = i.$options.propsData : i.$props && (d.propsData = i.$props)), setTimeout(() => {
                    Dn(o, {
                        captureContext: {
                            contexts: {
                                vue: d
                            }
                        },
                        mechanism: {
                            handled: !1
                        }
                    })
                }), typeof n == "function" && n.call(t, o, i, a), e.logErrors) {
                const f = typeof console < "u",
                    l = "Error in ".concat(a, ': "').concat(o && o.toString(), '"');
                r ? r.call(null, l, i, u) : f && !s && gt(() => {
                    console.error("[Vue warn]: ".concat(l).concat(u))
                })
            }
        }
    },
    Fr = "ui.vue",
    Ud = {
        activate: ["activated", "deactivated"],
        create: ["beforeCreate", "created"],
        unmount: ["beforeUnmount", "unmounted"],
        destroy: ["beforeDestroy", "destroyed"],
        mount: ["beforeMount", "mounted"],
        update: ["beforeUpdate", "updated"]
    };

function Bd(t, e, n) {
    t.$_sentryRootSpanTimer && clearTimeout(t.$_sentryRootSpanTimer), t.$_sentryRootSpanTimer = setTimeout(() => {
        t.$root && t.$root.$_sentryRootSpan && (t.$root.$_sentryRootSpan.end(e), t.$root.$_sentryRootSpan = void 0)
    }, n)
}
const jd = t => {
        const e = (t.hooks || []).concat(Xs).filter((r, s, o) => o.indexOf(r) === s),
            n = {};
        for (const r of e) {
            const s = Ud[r];
            if (!s) {
                Ks && p.warn("Unknown hook: ".concat(r));
                continue
            }
            for (const o of s) n[o] = function() {
                const i = this.$root === this;
                i && x() && (this.$_sentryRootSpan = this.$_sentryRootSpan || nt({
                    name: "Application Render",
                    op: "".concat(Fr, ".render"),
                    attributes: {
                        [N]: "auto.ui.vue"
                    }
                }));
                const a = Zt(this, !1),
                    c = Array.isArray(t.trackComponents) ? t.trackComponents.indexOf(a) > -1 : t.trackComponents;
                if (!(!i && !c))
                    if (this.$_sentrySpans = this.$_sentrySpans || {}, o == s[0]) {
                        if (this.$root && this.$root.$_sentryRootSpan || x()) {
                            const d = this.$_sentrySpans[r];
                            d && d.end(), this.$_sentrySpans[r] = nt({
                                name: "Vue <".concat(a, ">"),
                                op: "".concat(Fr, ".").concat(r),
                                attributes: {
                                    [N]: "auto.ui.vue"
                                }
                            })
                        }
                    } else {
                        const u = this.$_sentrySpans[r];
                        if (!u) return;
                        u.end(), Bd(this, L(), t.timeout)
                    }
            }
        }
        return n
    },
    qd = b,
    Gd = {
        Vue: qd.Vue,
        attachProps: !0,
        logErrors: !0,
        hooks: Xs,
        timeout: 2e3,
        trackComponents: !1
    },
    Wd = "Vue",
    Yd = (t = {}) => ({
        name: Wd,
        setup(e) {
            zd(e, t)
        }
    }),
    Vd = Yd;

function zd(t, e) {
    const n = { ...Gd,
        ...t.getOptions(),
        ...e
    };
    if (!n.Vue && !n.app) {
        gt(() => {
            console.warn("[@sentry/vue]: Misconfigured SDK. Vue specific errors will not be captured.\nUpdate your `Sentry.init` call with an appropriate config option:\n`app` (Application Instance - Vue 3) or `Vue` (Vue Constructor - Vue 2).")
        });
        return
    }
    n.app ? wn(n.app).forEach(s => Hr(s, n)) : n.Vue && Hr(n.Vue, n)
}
const Hr = (t, e) => {
    if (Ks) {
        const n = t;
        (n._instance && n._instance.isMounted) === !0 && gt(() => {
            console.warn("[@sentry/vue]: Misconfigured SDK. Vue app is already mounted. Make sure to call `app.mount()` after `Sentry.init()`.")
        })
    }
    Hd(t, e), ft(e) && t.mixin(jd({ ...e,
        ...e.tracingOptions
    }))
};

function Zd(t = {}) {
    const e = {
        _metadata: {
            sdk: {
                name: "sentry.javascript.vue",
                packages: [{
                    name: "npm:@sentry/vue",
                    version: ct
                }],
                version: ct
            }
        },
        defaultIntegrations: [...Ys(), Vd()],
        ...t
    };
    return yd(e)
}

function Xd(t, e, n) {
    let r = !0;
    t.onError(s => Dn(s, {
        mechanism: {
            handled: !1
        }
    })), t.beforeEach((s, o, i) => {
        const a = o.name == null && o.matched.length === 0 || o.name === void 0 && r;
        r && (r = !1);
        const c = {
            [N]: "auto.navigation.vue"
        };
        for (const f of Object.keys(s.params)) c["params.".concat(f)] = s.params[f];
        for (const f of Object.keys(s.query)) {
            const l = s.query[f];
            l && (c["query.".concat(f)] = l)
        }
        let u = s.path,
            d = "url";
        if (s.name && e.routeLabel !== "path") u = s.name.toString(), d = "custom";
        else if (s.matched.length > 0) {
            const f = s.matched.length - 1;
            u = s.matched[f].path, d = "route"
        }
        if (k().setTransactionName(u), e.instrumentPageLoad && a) {
            const f = Kd();
            f && ((E(f).data || {})[V] !== "custom" && (f.updateName(u), f.setAttribute(V, d)), f.setAttributes({ ...c,
                [N]: "auto.pageload.vue"
            }))
        }
        e.instrumentNavigation && !a && (c[V] = d, c[N] = "auto.navigation.vue", n({
            name: u,
            op: "navigation",
            attributes: c
        })), i && i()
    })
}

function Kd() {
    const t = x(),
        e = t && $(t);
    if (!e) return;
    const n = E(e).op;
    return n === "navigation" || n === "pageload" ? e : void 0
}

function Qd(t = {}) {
    if (!t.router) return Mr(t);
    const e = Mr({ ...t,
            instrumentNavigation: !1
        }),
        {
            router: n,
            instrumentNavigation: r = !0,
            instrumentPageLoad: s = !0,
            routeLabel: o = "name"
        } = t;
    return { ...e,
        afterAllSetup(i) {
            e.afterAllSetup(i), Xd(n, {
                routeLabel: o,
                instrumentNavigation: r,
                instrumentPageLoad: s
            }, c => {
                zs(i, c)
            })
        }
    }
}
export {
    Qd as b, Zd as i, Jd as s
};
//# sourceMappingURL=vendor-@sentry.EjpkRnd3.js.map