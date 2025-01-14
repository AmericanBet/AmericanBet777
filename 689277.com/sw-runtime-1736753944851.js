try {
    self["workbox:core:7.0.0"] && _()
} catch (t) {}
const t = (t, ...e) => {
    let s = t;
    return e.length > 0 && (s += ` :: ${JSON.stringify(e)}`), s
};
class e extends Error {
    constructor(e, s) {
        super(t(e, s)), this.name = e, this.details = s
    }
}
try {
    self["workbox:routing:7.0.0"] && _()
} catch (t) {}
const s = t => t && "object" == typeof t ? t : {
    handle: t
};
class n {
    constructor(t, e, n = "GET") {
        this.handler = s(e), this.match = t, this.method = n
    }
    setCatchHandler(t) {
        this.catchHandler = s(t)
    }
}
class i extends n {
    constructor(t, e, s) {
        super((({
            url: e
        }) => {
            const s = t.exec(e.href);
            if (s && (e.origin === location.origin || 0 === s.index)) return s.slice(1)
        }), e, s)
    }
}
class r {
    constructor() {
        this.t = new Map, this.i = new Map
    }
    get routes() {
        return this.t
    }
    addFetchListener() {
        self.addEventListener("fetch", (t => {
            const {
                request: e
            } = t, s = this.handleRequest({
                request: e,
                event: t
            });
            s && t.respondWith(s)
        }))
    }
    addCacheListener() {
        self.addEventListener("message", (t => {
            if (t.data && "CACHE_URLS" === t.data.type) {
                const {
                    payload: e
                } = t.data, s = Promise.all(e.urlsToCache.map((e => {
                    "string" == typeof e && (e = [e]);
                    const s = new Request(...e);
                    return this.handleRequest({
                        request: s,
                        event: t
                    })
                })));
                t.waitUntil(s), t.ports && t.ports[0] && s.then((() => t.ports[0].postMessage(!0)))
            }
        }))
    }
    handleRequest({
        request: t,
        event: e
    }) {
        const s = new URL(t.url, location.href);
        if (!s.protocol.startsWith("http")) return;
        const n = s.origin === location.origin,
            {
                params: i,
                route: r
            } = this.findMatchingRoute({
                event: e,
                request: t,
                sameOrigin: n,
                url: s
            });
        let a = r && r.handler;
        const o = t.method;
        if (!a && this.i.has(o) && (a = this.i.get(o)), !a) return;
        let c;
        try {
            c = a.handle({
                url: s,
                request: t,
                event: e,
                params: i
            })
        } catch (t) {
            c = Promise.reject(t)
        }
        const h = r && r.catchHandler;
        return c instanceof Promise && (this.o || h) && (c = c.catch((async n => {
            if (h) try {
                return await h.handle({
                    url: s,
                    request: t,
                    event: e,
                    params: i
                })
            } catch (t) {
                t instanceof Error && (n = t)
            }
            if (this.o) return this.o.handle({
                url: s,
                request: t,
                event: e
            });
            throw n
        }))), c
    }
    findMatchingRoute({
        url: t,
        sameOrigin: e,
        request: s,
        event: n
    }) {
        const i = this.t.get(s.method) || [];
        for (const r of i) {
            let i;
            const a = r.match({
                url: t,
                sameOrigin: e,
                request: s,
                event: n
            });
            if (a) return i = a, (Array.isArray(i) && 0 === i.length || a.constructor === Object && 0 === Object.keys(a).length || "boolean" == typeof a) && (i = void 0), {
                route: r,
                params: i
            }
        }
        return {}
    }
    setDefaultHandler(t, e = "GET") {
        this.i.set(e, s(t))
    }
    setCatchHandler(t) {
        this.o = s(t)
    }
    registerRoute(t) {
        this.t.has(t.method) || this.t.set(t.method, []), this.t.get(t.method).push(t)
    }
    unregisterRoute(t) {
        if (!this.t.has(t.method)) throw new e("unregister-route-but-not-found-with-method", {
            method: t.method
        });
        const s = this.t.get(t.method).indexOf(t);
        if (!(s > -1)) throw new e("unregister-route-route-not-registered");
        this.t.get(t.method).splice(s, 1)
    }
}
let a;
const o = () => (a || (a = new r, a.addFetchListener(), a.addCacheListener()), a);

function c(t, s, r) {
    let a;
    if ("string" == typeof t) {
        const e = new URL(t, location.href);
        a = new n((({
            url: t
        }) => t.href === e.href), s, r)
    } else if (t instanceof RegExp) a = new i(t, s, r);
    else if ("function" == typeof t) a = new n(t, s, r);
    else {
        if (!(t instanceof n)) throw new e("unsupported-route-type", {
            moduleName: "workbox-routing",
            funcName: "registerRoute",
            paramName: "capture"
        });
        a = t
    }
    return o().registerRoute(a), a
}
const h = {
        googleAnalytics: "googleAnalytics",
        precache: "precache-v2",
        prefix: "workbox",
        runtime: "runtime",
        suffix: "undefined" != typeof registration ? registration.scope : ""
    },
    u = t => [h.prefix, t, h.suffix].filter((t => t && t.length > 0)).join("-"),
    l = t => {
        (t => {
            for (const e of Object.keys(h)) t(e)
        })((e => {
            "string" == typeof t[e] && (h[e] = t[e])
        }))
    },
    f = t => t || u(h.precache),
    w = t => t || u(h.runtime);

function d(t) {
    t.then((() => {}))
}
const p = new Set;

function y() {
    return y = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var s = arguments[e];
            for (var n in s)({}).hasOwnProperty.call(s, n) && (t[n] = s[n])
        }
        return t
    }, y.apply(null, arguments)
}
const m = (t, e) => e.some((e => t instanceof e));
let g, b;
const v = new WeakMap,
    R = new WeakMap,
    q = new WeakMap,
    x = new WeakMap,
    D = new WeakMap;
let U = {
    get(t, e, s) {
        if (t instanceof IDBTransaction) {
            if ("done" === e) return R.get(t);
            if ("objectStoreNames" === e) return t.objectStoreNames || q.get(t);
            if ("store" === e) return s.objectStoreNames[1] ? void 0 : s.objectStore(s.objectStoreNames[0])
        }
        return N(t[e])
    },
    set: (t, e, s) => (t[e] = s, !0),
    has: (t, e) => t instanceof IDBTransaction && ("done" === e || "store" === e) || e in t
};

function E(t) {
    return t !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (b || (b = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(t) ? function(...e) {
        return t.apply(I(this), e), N(v.get(this))
    } : function(...e) {
        return N(t.apply(I(this), e))
    } : function(e, ...s) {
        const n = t.call(I(this), e, ...s);
        return q.set(n, e.sort ? e.sort() : [e]), N(n)
    }
}

function L(t) {
    return "function" == typeof t ? E(t) : (t instanceof IDBTransaction && function(t) {
        if (R.has(t)) return;
        const e = new Promise(((e, s) => {
            const n = () => {
                    t.removeEventListener("complete", i), t.removeEventListener("error", r), t.removeEventListener("abort", r)
                },
                i = () => {
                    e(), n()
                },
                r = () => {
                    s(t.error || new DOMException("AbortError", "AbortError")), n()
                };
            t.addEventListener("complete", i), t.addEventListener("error", r), t.addEventListener("abort", r)
        }));
        R.set(t, e)
    }(t), m(t, g || (g = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])) ? new Proxy(t, U) : t)
}

function N(t) {
    if (t instanceof IDBRequest) return function(t) {
        const e = new Promise(((e, s) => {
            const n = () => {
                    t.removeEventListener("success", i), t.removeEventListener("error", r)
                },
                i = () => {
                    e(N(t.result)), n()
                },
                r = () => {
                    s(t.error), n()
                };
            t.addEventListener("success", i), t.addEventListener("error", r)
        }));
        return e.then((e => {
            e instanceof IDBCursor && v.set(e, t)
        })).catch((() => {})), D.set(e, t), e
    }(t);
    if (x.has(t)) return x.get(t);
    const e = L(t);
    return e !== t && (x.set(t, e), D.set(e, t)), e
}
const I = t => D.get(t);
const T = ["get", "getKey", "getAll", "getAllKeys", "count"],
    C = ["put", "add", "delete", "clear"],
    O = new Map;

function k(t, e) {
    if (!(t instanceof IDBDatabase) || e in t || "string" != typeof e) return;
    if (O.get(e)) return O.get(e);
    const s = e.replace(/FromIndex$/, ""),
        n = e !== s,
        i = C.includes(s);
    if (!(s in (n ? IDBIndex : IDBObjectStore).prototype) || !i && !T.includes(s)) return;
    const r = async function(t, ...e) {
        const r = this.transaction(t, i ? "readwrite" : "readonly");
        let a = r.store;
        return n && (a = a.index(e.shift())), (await Promise.all([a[s](...e), i && r.done]))[0]
    };
    return O.set(e, r), r
}
U = (t => y({}, t, {
    get: (e, s, n) => k(e, s) || t.get(e, s, n),
    has: (e, s) => !!k(e, s) || t.has(e, s)
}))(U);
try {
    self["workbox:expiration:7.0.0"] && _()
} catch (t) {}
const B = "cache-entries",
    S = t => {
        const e = new URL(t, location.href);
        return e.hash = "", e.href
    };
class j {
    constructor(t) {
        this.h = null, this.u = t
    }
    l(t) {
        const e = t.createObjectStore(B, {
            keyPath: "id"
        });
        e.createIndex("cacheName", "cacheName", {
            unique: !1
        }), e.createIndex("timestamp", "timestamp", {
            unique: !1
        })
    }
    p(t) {
        this.l(t), this.u && function(t, {
            blocked: e
        } = {}) {
            const s = indexedDB.deleteDatabase(t);
            e && s.addEventListener("blocked", (t => e(t.oldVersion, t))), N(s).then((() => {}))
        }(this.u)
    }
    async setTimestamp(t, e) {
        const s = {
                url: t = S(t),
                timestamp: e,
                cacheName: this.u,
                id: this.m(t)
            },
            n = (await this.getDb()).transaction(B, "readwrite", {
                durability: "relaxed"
            });
        await n.store.put(s), await n.done
    }
    async getTimestamp(t) {
        const e = await this.getDb(),
            s = await e.get(B, this.m(t));
        return null == s ? void 0 : s.timestamp
    }
    async expireEntries(t, e) {
        const s = await this.getDb();
        let n = await s.transaction(B).store.index("timestamp").openCursor(null, "prev");
        const i = [];
        let r = 0;
        for (; n;) {
            const s = n.value;
            s.cacheName === this.u && (t && s.timestamp < t || e && r >= e ? i.push(n.value) : r++), n = await n.continue()
        }
        const a = [];
        for (const t of i) await s.delete(B, t.id), a.push(t.url);
        return a
    }
    m(t) {
        return this.u + "|" + S(t)
    }
    async getDb() {
        return this.h || (this.h = await
            function(t, e, {
                blocked: s,
                upgrade: n,
                blocking: i,
                terminated: r
            } = {}) {
                const a = indexedDB.open(t, e),
                    o = N(a);
                return n && a.addEventListener("upgradeneeded", (t => {
                    n(N(a.result), t.oldVersion, t.newVersion, N(a.transaction), t)
                })), s && a.addEventListener("blocked", (t => s(t.oldVersion, t.newVersion, t))), o.then((t => {
                    r && t.addEventListener("close", (() => r())), i && t.addEventListener("versionchange", (t => i(t.oldVersion, t.newVersion, t)))
                })).catch((() => {})), o
            }("workbox-expiration", 1, {
                upgrade: this.p.bind(this)
            })), this.h
    }
}
class P {
    constructor(t, e = {}) {
        this.v = !1, this.R = !1, this.q = e.maxEntries, this.D = e.maxAgeSeconds, this.U = e.matchOptions, this.u = t, this._ = new j(t)
    }
    async expireEntries() {
        if (this.v) return void(this.R = !0);
        this.v = !0;
        const t = this.D ? Date.now() - 1e3 * this.D : 0,
            e = await this._.expireEntries(t, this.q),
            s = await self.caches.open(this.u);
        for (const t of e) await s.delete(t, this.U);
        this.v = !1, this.R && (this.R = !1, d(this.expireEntries()))
    }
    async updateTimestamp(t) {
        await this._.setTimestamp(t, Date.now())
    }
    async isURLExpired(t) {
        if (this.D) {
            const e = await this._.getTimestamp(t),
                s = Date.now() - 1e3 * this.D;
            return void 0 === e || e < s
        }
        return !1
    }
    async delete() {
        this.R = !1, await this._.expireEntries(1 / 0)
    }
}
class A {
    constructor(t = {}) {
        this.cachedResponseWillBeUsed = async ({
            event: t,
            request: e,
            cacheName: s,
            cachedResponse: n
        }) => {
            if (!n) return null;
            const i = this.L(n),
                r = this.N(s);
            d(r.expireEntries());
            const a = r.updateTimestamp(e.url);
            if (t) try {
                t.waitUntil(a)
            } catch (t) {}
            return i ? n : null
        }, this.cacheDidUpdate = async ({
            cacheName: t,
            request: e
        }) => {
            const s = this.N(t);
            await s.updateTimestamp(e.url), await s.expireEntries()
        }, this.I = t, this.D = t.maxAgeSeconds, this.T = new Map, t.purgeOnQuotaError && function(t) {
            p.add(t)
        }((() => this.deleteCacheAndMetadata()))
    }
    N(t) {
        if (t === w()) throw new e("expire-custom-caches-only");
        let s = this.T.get(t);
        return s || (s = new P(t, this.I), this.T.set(t, s)), s
    }
    L(t) {
        if (!this.D) return !0;
        const e = this.C(t);
        if (null === e) return !0;
        return e >= Date.now() - 1e3 * this.D
    }
    C(t) {
        if (!t.headers.has("date")) return null;
        const e = t.headers.get("date"),
            s = new Date(e).getTime();
        return isNaN(s) ? null : s
    }
    async deleteCacheAndMetadata() {
        for (const [t, e] of this.T) await self.caches.delete(t), await e.delete();
        this.T = new Map
    }
}
try {
    self["workbox:cacheable-response:7.0.0"] && _()
} catch (t) {}
class M {
    constructor(t = {}) {
        this.O = t.statuses, this.k = t.headers
    }
    isResponseCacheable(t) {
        let e = !0;
        return this.O && (e = this.O.includes(t.status)), this.k && e && (e = Object.keys(this.k).some((e => t.headers.get(e) === this.k[e]))), e
    }
}
class W {
    constructor(t) {
        this.cacheWillUpdate = async ({
            response: t
        }) => this.B.isResponseCacheable(t) ? t : null, this.B = new M(t)
    }
}

function K(t, e) {
    const s = new URL(t);
    for (const t of e) s.searchParams.delete(t);
    return s.href
}
class F {
    constructor() {
        this.promise = new Promise(((t, e) => {
            this.resolve = t, this.reject = e
        }))
    }
}
try {
    self["workbox:strategies:7.0.0"] && _()
} catch (t) {}

function $(t) {
    return "string" == typeof t ? new Request(t) : t
}
class G {
    constructor(t, e) {
        this.S = {}, Object.assign(this, e), this.event = e.event, this.j = t, this.P = new F, this.A = [], this.M = [...t.plugins], this.W = new Map;
        for (const t of this.M) this.W.set(t, {});
        this.event.waitUntil(this.P.promise)
    }
    async fetch(t) {
        const {
            event: s
        } = this;
        let n = $(t);
        if ("navigate" === n.mode && s instanceof FetchEvent && s.preloadResponse) {
            const t = await s.preloadResponse;
            if (t) return t
        }
        const i = this.hasCallback("fetchDidFail") ? n.clone() : null;
        try {
            for (const t of this.iterateCallbacks("requestWillFetch")) n = await t({
                request: n.clone(),
                event: s
            })
        } catch (t) {
            if (t instanceof Error) throw new e("plugin-error-request-will-fetch", {
                thrownErrorMessage: t.message
            })
        }
        const r = n.clone();
        try {
            let t;
            t = await fetch(n, "navigate" === n.mode ? void 0 : this.j.fetchOptions);
            for (const e of this.iterateCallbacks("fetchDidSucceed")) t = await e({
                event: s,
                request: r,
                response: t
            });
            return t
        } catch (t) {
            throw i && await this.runCallbacks("fetchDidFail", {
                error: t,
                event: s,
                originalRequest: i.clone(),
                request: r.clone()
            }), t
        }
    }
    async fetchAndCachePut(t) {
        const e = await this.fetch(t),
            s = e.clone();
        return this.waitUntil(this.cachePut(t, s)), e
    }
    async cacheMatch(t) {
        const e = $(t);
        let s;
        const {
            cacheName: n,
            matchOptions: i
        } = this.j, r = await this.getCacheKey(e, "read"), a = Object.assign(Object.assign({}, i), {
            cacheName: n
        });
        s = await caches.match(r, a);
        for (const t of this.iterateCallbacks("cachedResponseWillBeUsed")) s = await t({
            cacheName: n,
            matchOptions: i,
            cachedResponse: s,
            request: r,
            event: this.event
        }) || void 0;
        return s
    }
    async cachePut(t, s) {
        const n = $(t);
        var i;
        await (i = 0, new Promise((t => setTimeout(t, i))));
        const r = await this.getCacheKey(n, "write");
        if (!s) throw new e("cache-put-with-no-response", {
            url: (a = r.url, new URL(String(a), location.href).href.replace(new RegExp(`^${location.origin}`), ""))
        });
        var a;
        const o = await this.K(s);
        if (!o) return !1;
        const {
            cacheName: c,
            matchOptions: h
        } = this.j, u = await self.caches.open(c), l = this.hasCallback("cacheDidUpdate"), f = l ? await async function(t, e, s, n) {
            const i = K(e.url, s);
            if (e.url === i) return t.match(e, n);
            const r = Object.assign(Object.assign({}, n), {
                    ignoreSearch: !0
                }),
                a = await t.keys(e, r);
            for (const e of a)
                if (i === K(e.url, s)) return t.match(e, n)
        }(u, r.clone(), ["__WB_REVISION__"], h) : null;
        try {
            await u.put(r, l ? o.clone() : o)
        } catch (t) {
            if (t instanceof Error) throw "QuotaExceededError" === t.name && await async function() {
                for (const t of p) await t()
            }(), t
        }
        for (const t of this.iterateCallbacks("cacheDidUpdate")) await t({
            cacheName: c,
            oldResponse: f,
            newResponse: o.clone(),
            request: r,
            event: this.event
        });
        return !0
    }
    async getCacheKey(t, e) {
        const s = `${t.url} | ${e}`;
        if (!this.S[s]) {
            let n = t;
            for (const t of this.iterateCallbacks("cacheKeyWillBeUsed")) n = $(await t({
                mode: e,
                request: n,
                event: this.event,
                params: this.params
            }));
            this.S[s] = n
        }
        return this.S[s]
    }
    hasCallback(t) {
        for (const e of this.j.plugins)
            if (t in e) return !0;
        return !1
    }
    async runCallbacks(t, e) {
        for (const s of this.iterateCallbacks(t)) await s(e)
    }* iterateCallbacks(t) {
        for (const e of this.j.plugins)
            if ("function" == typeof e[t]) {
                const s = this.W.get(e),
                    n = n => {
                        const i = Object.assign(Object.assign({}, n), {
                            state: s
                        });
                        return e[t](i)
                    };
                yield n
            }
    }
    waitUntil(t) {
        return this.A.push(t), t
    }
    async doneWaiting() {
        let t;
        for (; t = this.A.shift();) await t
    }
    destroy() {
        this.P.resolve(null)
    }
    async K(t) {
        let e = t,
            s = !1;
        for (const t of this.iterateCallbacks("cacheWillUpdate"))
            if (e = await t({
                    request: this.request,
                    response: e,
                    event: this.event
                }) || void 0, s = !0, !e) break;
        return s || e && 200 !== e.status && (e = void 0), e
    }
}
class H {
    constructor(t = {}) {
        this.cacheName = w(t.cacheName), this.plugins = t.plugins || [], this.fetchOptions = t.fetchOptions, this.matchOptions = t.matchOptions
    }
    handle(t) {
        const [e] = this.handleAll(t);
        return e
    }
    handleAll(t) {
        t instanceof FetchEvent && (t = {
            event: t,
            request: t.request
        });
        const e = t.event,
            s = "string" == typeof t.request ? new Request(t.request) : t.request,
            n = "params" in t ? t.params : void 0,
            i = new G(this, {
                event: e,
                request: s,
                params: n
            }),
            r = this.F(i, s, e);
        return [r, this.$(r, i, s, e)]
    }
    async F(t, s, n) {
        let i;
        await t.runCallbacks("handlerWillStart", {
            event: n,
            request: s
        });
        try {
            if (i = await this.G(s, t), !i || "error" === i.type) throw new e("no-response", {
                url: s.url
            })
        } catch (e) {
            if (e instanceof Error)
                for (const r of t.iterateCallbacks("handlerDidError"))
                    if (i = await r({
                            error: e,
                            event: n,
                            request: s
                        }), i) break;
            if (!i) throw e
        }
        for (const e of t.iterateCallbacks("handlerWillRespond")) i = await e({
            event: n,
            request: s,
            response: i
        });
        return i
    }
    async $(t, e, s, n) {
        let i, r;
        try {
            i = await t
        } catch (r) {}
        try {
            await e.runCallbacks("handlerDidRespond", {
                event: n,
                request: s,
                response: i
            }), await e.doneWaiting()
        } catch (t) {
            t instanceof Error && (r = t)
        }
        if (await e.runCallbacks("handlerDidComplete", {
                event: n,
                request: s,
                response: i,
                error: r
            }), e.destroy(), r) throw r
    }
}
class z extends H {
    async G(t, s) {
        let n, i = await s.cacheMatch(t);
        if (!i) try {
            i = await s.fetchAndCachePut(t)
        } catch (t) {
            t instanceof Error && (n = t)
        }
        if (!i) throw new e("no-response", {
            url: t.url,
            error: n
        });
        return i
    }
}
const Z = {
    cacheWillUpdate: async ({
        response: t
    }) => 200 === t.status || 0 === t.status ? t : null
};

function V(t, e) {
    const s = e();
    return t.waitUntil(s), s
}
try {
    self["workbox:precaching:7.0.0"] && _()
} catch (t) {}

function J(t) {
    if (!t) throw new e("add-to-cache-list-unexpected-type", {
        entry: t
    });
    if ("string" == typeof t) {
        const e = new URL(t, location.href);
        return {
            cacheKey: e.href,
            url: e.href
        }
    }
    const {
        revision: s,
        url: n
    } = t;
    if (!n) throw new e("add-to-cache-list-unexpected-type", {
        entry: t
    });
    if (!s) {
        const t = new URL(n, location.href);
        return {
            cacheKey: t.href,
            url: t.href
        }
    }
    const i = new URL(n, location.href),
        r = new URL(n, location.href);
    return i.searchParams.set("__WB_REVISION__", s), {
        cacheKey: i.href,
        url: r.href
    }
}
class Q {
    constructor() {
        this.updatedURLs = [], this.notUpdatedURLs = [], this.handlerWillStart = async ({
            request: t,
            state: e
        }) => {
            e && (e.originalRequest = t)
        }, this.cachedResponseWillBeUsed = async ({
            event: t,
            state: e,
            cachedResponse: s
        }) => {
            if ("install" === t.type && e && e.originalRequest && e.originalRequest instanceof Request) {
                const t = e.originalRequest.url;
                s ? this.notUpdatedURLs.push(t) : this.updatedURLs.push(t)
            }
            return s
        }
    }
}
class Y {
    constructor({
        precacheController: t
    }) {
        this.cacheKeyWillBeUsed = async ({
            request: t,
            params: e
        }) => {
            const s = (null == e ? void 0 : e.cacheKey) || this.H.getCacheKeyForURL(t.url);
            return s ? new Request(s, {
                headers: t.headers
            }) : t
        }, this.H = t
    }
}
let X, tt;
async function et(t, s) {
    let n = null;
    if (t.url) {
        n = new URL(t.url).origin
    }
    if (n !== self.location.origin) throw new e("cross-origin-copy-response", {
        origin: n
    });
    const i = t.clone(),
        r = {
            headers: new Headers(i.headers),
            status: i.status,
            statusText: i.statusText
        },
        a = s ? s(r) : r,
        o = function() {
            if (void 0 === X) {
                const t = new Response("");
                if ("body" in t) try {
                    new Response(t.body), X = !0
                } catch (t) {
                    X = !1
                }
                X = !1
            }
            return X
        }() ? i.body : await i.blob();
    return new Response(o, a)
}
class st extends H {
    constructor(t = {}) {
        t.cacheName = f(t.cacheName), super(t), this.Z = !1 !== t.fallbackToNetwork, this.plugins.push(st.copyRedirectedCacheableResponsesPlugin)
    }
    async G(t, e) {
        const s = await e.cacheMatch(t);
        return s || (e.event && "install" === e.event.type ? await this.V(t, e) : await this.J(t, e))
    }
    async J(t, s) {
        let n;
        const i = s.params || {};
        if (!this.Z) throw new e("missing-precache-entry", {
            cacheName: this.cacheName,
            url: t.url
        }); {
            const e = i.integrity,
                r = t.integrity,
                a = !r || r === e;
            n = await s.fetch(new Request(t, {
                integrity: "no-cors" !== t.mode ? r || e : void 0
            })), e && a && "no-cors" !== t.mode && (this.Y(), await s.cachePut(t, n.clone()))
        }
        return n
    }
    async V(t, s) {
        this.Y();
        const n = await s.fetch(t);
        if (!await s.cachePut(t, n.clone())) throw new e("bad-precaching-response", {
            url: t.url,
            status: n.status
        });
        return n
    }
    Y() {
        let t = null,
            e = 0;
        for (const [s, n] of this.plugins.entries()) n !== st.copyRedirectedCacheableResponsesPlugin && (n === st.defaultPrecacheCacheabilityPlugin && (t = s), n.cacheWillUpdate && e++);
        0 === e ? this.plugins.push(st.defaultPrecacheCacheabilityPlugin) : e > 1 && null !== t && this.plugins.splice(t, 1)
    }
}
st.defaultPrecacheCacheabilityPlugin = {
    cacheWillUpdate: async ({
        response: t
    }) => !t || t.status >= 400 ? null : t
}, st.copyRedirectedCacheableResponsesPlugin = {
    cacheWillUpdate: async ({
        response: t
    }) => t.redirected ? await et(t) : t
};
class nt {
    constructor({
        cacheName: t,
        plugins: e = [],
        fallbackToNetwork: s = !0
    } = {}) {
        this.X = new Map, this.tt = new Map, this.et = new Map, this.j = new st({
            cacheName: f(t),
            plugins: [...e, new Y({
                precacheController: this
            })],
            fallbackToNetwork: s
        }), this.install = this.install.bind(this), this.activate = this.activate.bind(this)
    }
    get strategy() {
        return this.j
    }
    precache(t) {
        this.addToCacheList(t), this.st || (self.addEventListener("install", this.install), self.addEventListener("activate", this.activate), this.st = !0)
    }
    addToCacheList(t) {
        const s = [];
        for (const n of t) {
            "string" == typeof n ? s.push(n) : n && void 0 === n.revision && s.push(n.url);
            const {
                cacheKey: t,
                url: i
            } = J(n), r = "string" != typeof n && n.revision ? "reload" : "default";
            if (this.X.has(i) && this.X.get(i) !== t) throw new e("add-to-cache-list-conflicting-entries", {
                firstEntry: this.X.get(i),
                secondEntry: t
            });
            if ("string" != typeof n && n.integrity) {
                if (this.et.has(t) && this.et.get(t) !== n.integrity) throw new e("add-to-cache-list-conflicting-integrities", {
                    url: i
                });
                this.et.set(t, n.integrity)
            }
            if (this.X.set(i, t), this.tt.set(i, r), s.length > 0) {
                const t = `Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
                console.warn(t)
            }
        }
    }
    install(t) {
        return V(t, (async () => {
            const e = new Q;
            this.strategy.plugins.push(e);
            for (const [e, s] of this.X) {
                const n = this.et.get(s),
                    i = this.tt.get(e),
                    r = new Request(e, {
                        integrity: n,
                        cache: i,
                        credentials: "same-origin"
                    });
                await Promise.all(this.strategy.handleAll({
                    params: {
                        cacheKey: s
                    },
                    request: r,
                    event: t
                }))
            }
            const {
                updatedURLs: s,
                notUpdatedURLs: n
            } = e;
            return {
                updatedURLs: s,
                notUpdatedURLs: n
            }
        }))
    }
    activate(t) {
        return V(t, (async () => {
            const t = await self.caches.open(this.strategy.cacheName),
                e = await t.keys(),
                s = new Set(this.X.values()),
                n = [];
            for (const i of e) s.has(i.url) || (await t.delete(i), n.push(i.url));
            return {
                deletedURLs: n
            }
        }))
    }
    getURLsToCacheKeys() {
        return this.X
    }
    getCachedURLs() {
        return [...this.X.keys()]
    }
    getCacheKeyForURL(t) {
        const e = new URL(t, location.href);
        return this.X.get(e.href)
    }
    getIntegrityForCacheKey(t) {
        return this.et.get(t)
    }
    async matchPrecache(t) {
        const e = t instanceof Request ? t.url : t,
            s = this.getCacheKeyForURL(e);
        if (s) {
            return (await self.caches.open(this.strategy.cacheName)).match(s)
        }
    }
    createHandlerBoundToURL(t) {
        const s = this.getCacheKeyForURL(t);
        if (!s) throw new e("non-precached-url", {
            url: t
        });
        return e => (e.request = new Request(t), e.params = Object.assign({
            cacheKey: s
        }, e.params), this.strategy.handle(e))
    }
}
const it = () => (tt || (tt = new nt), tt);
class rt extends n {
    constructor(t, e) {
        super((({
            request: s
        }) => {
            const n = t.getURLsToCacheKeys();
            for (const i of function*(t, {
                    ignoreURLParametersMatching: e = [/^utm_/, /^fbclid$/],
                    directoryIndex: s = "index.html",
                    cleanURLs: n = !0,
                    urlManipulation: i
                } = {}) {
                    const r = new URL(t, location.href);
                    r.hash = "", yield r.href;
                    const a = function(t, e = []) {
                        for (const s of [...t.searchParams.keys()]) e.some((t => t.test(s))) && t.searchParams.delete(s);
                        return t
                    }(r, e);
                    if (yield a.href, s && a.pathname.endsWith("/")) {
                        const t = new URL(a.href);
                        t.pathname += s, yield t.href
                    }
                    if (n) {
                        const t = new URL(a.href);
                        t.pathname += ".html", yield t.href
                    }
                    if (i) {
                        const t = i({
                            url: r
                        });
                        for (const e of t) yield e.href
                    }
                }(s.url, e)) {
                const e = n.get(i);
                if (e) {
                    return {
                        cacheKey: e,
                        integrity: t.getIntegrityForCacheKey(e)
                    }
                }
            }
        }), t.strategy)
    }
}
var at;
importScripts("pages/pwa-sw.js"), l({
        prefix: "main-lobby-rumtime"
    }), self.skipWaiting(), self.addEventListener("activate", (() => self.clients.claim())), at = {},
    function(t) {
        it().precache(t)
    }([{
        url: "pages/pwa.html",
        revision: "76a6490ded12727ff00fd42b15398f4b"
    }, {
        url: "pages/403/index.html",
        revision: "5d1bae5d0019471b9fdc0ca08fd91fe2"
    }, {
        url: "pages/503/index.html",
        revision: "6a9bc7b7731c3c0d086abbec764ef642"
    }]),
    function(t) {
        const e = it();
        c(new rt(e, t))
    }(at), self.addEventListener("activate", (t => {
        const e = f();
        t.waitUntil((async (t, e = "-precache-") => {
            const s = (await self.caches.keys()).filter((s => s.includes(e) && s.includes(self.registration.scope) && s !== t));
            return await Promise.all(s.map((t => self.caches.delete(t)))), s
        })(e).then((t => {})))
    })), c((({
        request: t
    }) => {
        const e = t.url;
        return [/\.[a-zA-Z0-9-_]{8}\.(m4a|wav|mp3|ttf|eot|woff)$/].some((t => t.test(e)))
    }), new z({
        cacheName: "media",
        plugins: [new A({
            maxEntries: 50,
            maxAgeSeconds: 2592e3
        }), new W({
            statuses: [0, 200]
        })]
    }), "GET"), c((({
        request: t
    }) => {
        const e = t.url;
        return [/\.[a-zA-Z0-9-_]{8}\.(avif|svg|png|gif|jpe?g)$/].some((t => t.test(e)))
    }), new z({
        cacheName: "images",
        plugins: [new A({
            maxEntries: 500,
            maxAgeSeconds: 2592e3
        }), new W({
            statuses: [0, 200]
        })]
    }), "GET"), c((({
        request: t
    }) => {
        const e = t.url;
        return [/\.[a-zA-Z0-9-_]{8}\.(js)$/, /(libs)\/[\s\S]*\.(js)/].some((t => t.test(e)))
    }), new z({
        cacheName: "scripts",
        plugins: [new A({
            maxEntries: 50,
            maxAgeSeconds: 2592e3
        }), new W({
            statuses: [0, 200]
        })]
    }), "GET"), c((({
        request: t
    }) => {
        const e = t.url;
        return [/\.[a-zA-Z0-9-_]{8}\.(css)$/, /(libs)\/[\s\S]*\.(css)/].some((t => t.test(e)))
    }), new z({
        cacheName: "stylesheets",
        plugins: [new A({
            maxEntries: 50,
            maxAgeSeconds: 2592e3
        }), new W({
            statuses: [0, 200]
        })]
    }), "GET"), c(/(\/)/, new class extends H {
        constructor(t = {}) {
            super(t), this.plugins.some((t => "cacheWillUpdate" in t)) || this.plugins.unshift(Z), this.nt = t.networkTimeoutSeconds || 0
        }
        async G(t, s) {
            const n = [],
                i = [];
            let r;
            if (this.nt) {
                const {
                    id: e,
                    promise: a
                } = this.it({
                    request: t,
                    logs: n,
                    handler: s
                });
                r = e, i.push(a)
            }
            const a = this.rt({
                timeoutId: r,
                request: t,
                logs: n,
                handler: s
            });
            i.push(a);
            const o = await s.waitUntil((async () => await s.waitUntil(Promise.race(i)) || await a)());
            if (!o) throw new e("no-response", {
                url: t.url
            });
            return o
        }
        it({
            request: t,
            logs: e,
            handler: s
        }) {
            let n;
            return {
                promise: new Promise((e => {
                    n = setTimeout((async () => {
                        e(await s.cacheMatch(t))
                    }), 1e3 * this.nt)
                })),
                id: n
            }
        }
        async rt({
            timeoutId: t,
            request: e,
            logs: s,
            handler: n
        }) {
            let i, r;
            try {
                r = await n.fetchAndCachePut(e)
            } catch (t) {
                t instanceof Error && (i = t)
            }
            return t && clearTimeout(t), !i && r || (r = await n.cacheMatch(e)), r
        }
    }({
        cacheName: "html-cache",
        networkTimeoutSeconds: 10,
        plugins: [new A({
            maxEntries: 5,
            maxAgeSeconds: 2592e3
        }), new W({
            statuses: [0, 200, 404]
        }), {
            cacheWillUpdate: async ({
                response: t
            }) => {
                if (!t || !t.clone) return null;
                const e = t.clone(),
                    s = await e.text();
                return s.startsWith("<!DOCTYPE html>") || s.startsWith("<!doctype html>") || s.startsWith("<html>") ? t : null
            },
            cacheKeyWillBeUsed: async ({
                request: t
            }) => {
                if ("document" === t.destination) {
                    return new URL(t.url).origin
                }
                return t.url
            }
        }]
    }), "GET"), self.__WB_DISABLE_DEV_LOGS = !0;
//# sourceMappingURL=sw-runtime-1736753944851.js.map