const __vite__fileDeps = ["assets/theme-2/main.async.-NbSL2aO.js", "assets/vendors/vendor-stable.Cg92BvZJ.js", "assets/vendors/vendor-bignumber.BRr1dcww.js", "assets/vendors/vendor-@vue.CBvhRkQp.js", "assets/vendors/vendor-@intlify.BmUtFfVu.js", "assets/vendors/vendor-default.p-wnugzB.js", "assets/vendors/vendor-lodash.CYk3mlCa.js", "assets/vendors/vendor-@sentry.EjpkRnd3.js", "assets/vendors/vendor-swiper.BzK1hN__.js", "assets/vendors/vendor-swiper.BXGtF0w8.css", "assets/theme-2/main.BfZHN-pr.css"],
    __vite__mapDeps = i => i.map(i => __vite__fileDeps[i]);
var ae = Object.defineProperty;
var ie = (e, t, s) => t in e ? ae(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : e[t] = s;
var R = (e, t, s) => ie(e, typeof t != "symbol" ? t + "" : t, s);
import {
    v as U,
    a as ce,
    b as le
} from "../vendors/vendor-default.p-wnugzB.js";
import {
    D as ue
} from "../vendors/vendor-stable.Cg92BvZJ.js";
import {
    m as ee,
    s as te,
    g as se,
    i as de
} from "../vendors/vendor-lodash.CYk3mlCa.js";
const _ = {
        info: (...e) => {
            console.log(...e)
        },
        error: (...e) => {
            console.error(...e)
        },
        warn: (...e) => {
            console.warn(...e)
        },
        trace: (...e) => {
            console.trace(...e)
        }
    },
    L = {
        reset: "color: inherit;",
        black: "color: black;",
        red: "color: red;",
        green: "color: green;",
        yellow: "color: yellow;",
        blue: "color: blue;",
        magenta: "color: magenta;",
        cyan: "color: cyan;",
        white: "color: white;"
    },
    Ee = (e, t) => {
        const s = L[t] || L.reset;
        return {
            text: "%c".concat(e),
            style: s
        }
    },
    rt = Object.keys(L).filter(e => e !== "reset").reduce((e, t) => (e[t] = s => {
        const {
            text: n,
            style: r
        } = Ee(s, t);
        return [n, r]
    }, e), {});
var re = (e => (e.appSetup = "appSetup", e.appAsyncStart = "appAsyncStart", e.appMounted = "appMounted", e))(re || {});
const w = class w {
    static start(t) {
        this.recordTimer[t] = Date.now()
    }
    static end(t, s) {
        var n, r;
        _.info("[PerfRec] ".concat(t, " ===> ").concat(s, " （").concat(Date.now() - ((n = w.recordTimer[t]) != null ? n : 0), "ms）")), this.recordData.push({
            target: t,
            eventName: s,
            cost: Date.now() - ((r = w.recordTimer[t]) != null ? r : 0)
        })
    }
    static clear(t) {
        if (t) {
            delete this.recordTimer[t], this.recordData = this.recordData.filter(s => s.target !== t);
            return
        }
        this.recordTimer = {}, this.recordData = []
    }
    static report() {
        console.group("[PerfRec] Report"), this.recordData.forEach(t => {
            _.info("".concat(t.target, " ===> ").concat(t.eventName, " （").concat(t.cost, "ms）"))
        }), console.groupEnd()
    }
};
R(w, "target", re), R(w, "recordTimer", {}), R(w, "recordData", []);
let H = w;
const Re = "modulepreload",
    he = function(e) {
        return "/" + e
    },
    k = {},
    ge = function(t, s, n) {
        let r = Promise.resolve();
        if (s && s.length > 0) {
            document.getElementsByTagName("link");
            const o = document.querySelector("meta[property=csp-nonce]"),
                u = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute("nonce"));
            r = Promise.all(s.map(l => {
                if (l = he(l), l in k) return;
                k[l] = !0;
                const a = l.endsWith(".css"),
                    i = a ? '[rel="stylesheet"]' : "";
                if (document.querySelector('link[href="'.concat(l, '"]').concat(i))) return;
                const c = document.createElement("link");
                if (c.rel = a ? "stylesheet" : Re, a || (c.as = "script", c.crossOrigin = ""), c.href = l, u && c.setAttribute("nonce", u), document.head.appendChild(c), a) return new Promise((d, h) => {
                    c.addEventListener("load", d), c.addEventListener("error", () => h(new Error("Unable to preload CSS for ".concat(l))))
                })
            }))
        }
        return r.then(() => t()).catch(o => {
            const u = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (u.payload = o, window.dispatchEvent(u), !u.defaultPrevented) throw o
        })
    },
    Se = e => window.__GlobalVars[e],
    fe = (e, t) => {
        window.__GlobalVars[e] = t
    },
    pe = () => {
        window.__GlobalVars = window.__GlobalVars || {
            idbStore: {
                httpRequests: [],
                httpResponses: [],
                i18n: []
            }
        }
    },
    y = {
        get: Se,
        set: fe,
        initialize: pe
    };

function G(e) {
    return new Promise(t => setTimeout(t, e))
}

function Y(e) {
    return e == null
}
class me {
    constructor({
        storageType: t = "memory",
        serialize: s = JSON.stringify,
        deserialize: n = JSON.parse,
        serializationStrategy: r = "auto",
        manageExpiry: o = !0
    } = {}) {
        R(this, "serialize");
        R(this, "deserialize");
        R(this, "storageType");
        R(this, "manageExpiry");
        R(this, "initialized", Promise.resolve());
        this.initialized = this.initializeStorage(), this.manageExpiry = o, this.storageType = t;
        const u = ["local", "session", "cookie"].includes(t),
            l = u && this.manageExpiry ? !0 : r === "auto" ? u : r;
        this.serialize = l ? a => {
            try {
                return s(a)
            } catch (i) {
                throw new Error("Serialization error: ".concat(i))
            }
        } : null, this.deserialize = l ? a => {
            try {
                return n(a)
            } catch (i) {
                return a
            }
        } : null
    }
    async ready() {
        await this.initialized
    }
    isAfter(t) {
        return t !== null && Date.now() > t
    }
    beforeSetItem(t, s = {}) {
        if (!this.manageExpiry) return this.serialize ? this.serialize(t) : t;
        const {
            updatedAt: n,
            expiresAt: r,
            removeAt: o
        } = this.calculateTimestamps(s), u = {
            updatedAt: n,
            expiresAt: r,
            removeAt: o,
            data: t
        };
        return this.serialize ? this.serialize(u) : u
    }
    afterGetItem(t, s, n) {
        if (s = s || {}, Y(t)) return null;
        const r = this.deserialize && typeof t == "string" ? this.deserialize(t) : t;
        return Y(r) ? null : this.manageExpiry ? this.isAfter(r.removeAt) ? (n == null || n(), null) : !s.allowExpired && this.isAfter(r.expiresAt) ? null : r.data : r
    }
    calculateTimestamps(t = {}) {
        var l, a;
        const s = Date.now(),
            n = (l = t.expires) != null ? l : null,
            r = n ? s + n * 1e3 : null,
            o = (a = t.delayRemove) != null ? a : 0,
            u = r ? r + o * 1e3 : null;
        return {
            expiresAt: r,
            removeAt: u,
            updatedAt: s
        }
    }
    async initializeStorage() {}
}
class _e extends me {
    constructor(s, n) {
        super({
            storageType: "memory",
            ...n
        });
        R(this, "storage", new Map);
        R(this, "hydrateFunc");
        R(this, "persistFunc");
        this.hydrateFunc = s == null ? void 0 : s.hydrate, this.persistFunc = s == null ? void 0 : s.persist, this.initialized = this.initializeStorage()
    }
    async initializeStorage() {
        return this.hydrate()
    }
    async hydrate() {
        if (this.hydrateFunc) {
            const s = await this.hydrateFunc();
            s && (this.storage = s)
        }
    }
    async persist() {
        this.persistFunc && await this.persistFunc(this.storage)
    }
    get(s, n) {
        const r = this.storage.get(s);
        return this.afterGetItem(r, n, () => this.delete(s, n))
    }
    set(s, n, r) {
        const o = this.beforeSetItem(n, r);
        this.storage.set(s, o), r != null && r.skipPersist || this.persist()
    }
    delete(s, n) {
        this.storage.delete(s), n != null && n.skipPersist || this.persist()
    }
    clear(s) {
        if (this.manageExpiry && (s != null && s.onlyExpired))
            for (const [n] of this.storage.entries()) this.get(n, {
                skipPersist: !0
            });
        else this.storage.clear();
        s != null && s.skipPersist || this.persist()
    }
}
const M = (e, t) => "".concat(e, ":").concat(t),
    ye = e => new Promise(t => setTimeout(t, e)),
    Ae = (e = new _e) => async (t, s, n = {}) => {
        const {
            merge: r = !0,
            cacheTime: o = 0
        } = n, l = r || !!o ? e.get(t) : null;
        if (l) return l;
        const a = typeof r == "number" && r > 0 ? r : void 0,
            i = (o || a || 0) / 1e3,
            c = s().then(d => (!o && !a ? e.delete(t) : e.set(t, d, {
                expires: i
            }), d), d => {
                throw e.delete(t), d
            });
        return e.set(t, c, {
            expires: i
        }), c
    },
    Oe = 60 * 1e3,
    we = 0;

function Ie(e) {
    const t = new Map,
        s = Ae(),
        n = {},
        r = (i, c) => {
            const d = t.get(i);
            if (d) {
                const {
                    resolve: h,
                    reject: S
                } = d;
                return c.status === 1 ? h(c) : S(c), t.delete(i), !0
            }
            return !1
        },
        o = i => {
            try {
                const {
                    uuid: c,
                    type: d,
                    payload: h,
                    status: S = 1
                } = typeof i == "string" ? JSON.parse(i) : i;
                console.log(["[BRIDGE GET]: <<<<<< ".concat(d), "[OTHER2SELF MESSAGE ".concat(c, "]"), JSON.stringify({
                    status: S,
                    payload: h
                })].join("\n"));
                const p = M(d, c);
                r(p, {
                    uuid: c,
                    type: d,
                    payload: h,
                    status: S
                }) || n[d] && n[d].forEach(f => f({
                    uuid: c,
                    type: d,
                    payload: h,
                    status: S
                }))
            } catch (c) {
                console.error("Error processing received event:", c)
            }
        },
        u = new Map;
    let l = e.registerMessage(o);
    return Object.assign(i => {
        if (u.has(i)) return u.get(i);
        const c = {
            send: async (d, {
                merge: h = !0,
                timeout: S = Oe,
                cache: p = we
            } = {}) => {
                const f = U(JSON.stringify(d || {}), U.URL),
                    I = M(i, f);
                return s(I, async () => new Promise((A, D) => {
                    const E = !!h || !!p ? f : ce(),
                        m = M(i, E);
                    t.set(m, {
                        resolve: A,
                        reject: D
                    }), ye(S).finally(() => {
                        console.log(["[BRIDGE SEND]: >>>>>> ".concat(i), "[SELF2OTHER MESSAGE ".concat(E, "]"), "bridge timeout"].join("\n")), r(m, {
                            uuid: E,
                            type: i,
                            payload: {
                                message: "bridge timeout"
                            },
                            status: 0
                        })
                    }), console.log(["[BRIDGE SEND]: >>>>>> ".concat(i), "[SELF2OTHER MESSAGE ".concat(E, "]"), JSON.stringify(d)].join("\n")), e.sendMessage({
                        type: i,
                        uuid: E,
                        payload: d
                    })
                }), {
                    merge: h,
                    cacheTime: p
                })
            },
            on: d => (n[i] || (n[i] = []), n[i].push(d), c),
            off: d => (n[i] && (n[i] = n[i].filter(h => d ? h !== d : !1)), c),
            once: d => {
                const h = S => {
                    d(S), c.off(h)
                };
                return c.on(h), c
            }
        };
        return u.set(i, c), c
    }, {
        update: (i = e) => {
            l && l(), l = i.registerMessage(o)
        },
        destroy: () => {
            l && (l(), l = void 0);
            for (const i in n) n[i] = [];
            u.clear()
        }
    })
}

function De(e) {
    return new Worker("/assets/workers-qy9Jwbtu.js", {
        name: e == null ? void 0 : e.name
    })
}
const x = new De,
    ne = Ie({
        sendMessage(e) {
            x.postMessage(e)
        },
        registerMessage(e) {
            return x.onmessage = t => {
                e(t.data)
            }, () => x.terminate()
        }
    }),
    C = class C {
        static getInstance(t, s) {
            const n = C.instances[t];
            if (n) return n;
            const r = new s;
            return C.instances[t] = r, r
        }
    };
R(C, "instances", {});
let N = C;
const Ce = (e, t) => {
        const s = {};
        if (e === null || t === null) return s;
        const n = new Set([...Object.keys(e), ...Object.keys(t)]);
        for (const r of n) {
            const o = e[r],
                u = t[r];
            if (!t.hasOwnProperty(r)) s[r] = o;
            else if (!e.hasOwnProperty(r)) s[r] = u;
            else if (typeof o == "object" && typeof u == "object") {
                const l = Ce(o, u);
                Object.keys(l).length > 0 && (s[r] = l)
            } else o !== u && (s[r] = o)
        }
        return s
    },
    Te = 1.1,
    be = {
        httpRequests: "++id, requestId, path, removeAt",
        httpResponses: "key, originUrl, requestId, removeAt",
        i18n: "transId, lang, transName",
        store: "key"
    },
    ve = null,
    Ne = {
        version: Te,
        stores: be,
        upgrade: ve
    },
    Pe = {
        name: "main-db"
    },
    Me = [],
    xe = [],
    nt = JSON.parse(JSON.stringify(self.LOBBY_SITE_CONFIG || null)),
    Le = Object.assign({
        "./migrations/version1_initial.ts": Ne
    }),
    Ge = Pe.name,
    W = {
        versions: Le,
        name: Ge
    };
class Fe extends ue {
    constructor() {
        super(W.name);
        R(this, "httpRequests");
        R(this, "httpResponses");
        R(this, "i18n");
        R(this, "store");
        for (const {
                version: s,
                stores: n,
                upgrade: r
            } of Object.values(W.versions)) {
            const o = this.version(s).stores(n);
            r && o.upgrade(r)
        }
        this.httpRequests = this.table("httpRequests"), this.httpResponses = this.table("httpResponses"), this.i18n = this.table("i18n"), this.store = this.table("store")
    }
}
const g = N.getInstance("MainDataBase", Fe),
    B = (e, t = "INDEXEDDB-ONLY") => ({
        set: async a => {
            await g[e].put(a)
        },
        bulkPut: async a => {
            await g[e].bulkPut(a)
        },
        get: async a => await g[e].get(a),
        remove: async a => {
            await g[e].delete(a)
        },
        clear: async () => {
            await g[e].clear()
        },
        sync: async (a = t) => {
            if (a === "INDEXEDDB-ONLY") {
                y.set("idbStore", { ...y.get("idbStore"),
                    [e]: []
                });
                return
            }
            const i = await g[e].toArray();
            y.set("idbStore", { ...y.get("idbStore"),
                [e]: i
            })
        },
        table: g[e]
    }),
    $ = {
        defaultExpires: 5 * 60,
        delayRemove: 3600 * 24 * 7,
        defaultDependencies: ["currency", "language", "uid", "platformType"]
    },
    oe = {
        baseURL: "/hall",
        timeout: 60 * 1e3,
        timeoutByRetry: 10 * 1e3,
        maxRetryCount: 10,
        maxApiErrorCount: 2
    },
    Be = {
        merge: !0,
        addCommonParams: e => !/\.json(\?(\S)*)?$/.test(e.url || ""),
        maxRetryCount: oe.maxRetryCount,
        cache: {
            time: $.defaultExpires,
            useCache: !1,
            setCache: "auto",
            useCacheOnError: e => !!(e && e !== "dataError"),
            expireOnloaded: !0
        },
        oss: {
            enable: !1
        },
        crypto: {
            enable: !0
        },
        token: {
            type: "tryLogined"
        },
        error: {
            action: "normal",
            report: !0,
            checkResCode: !0
        },
        requestControl: {
            allowDuringLogout: !1
        }
    },
    ot = {
        SUCCESSCODE: 0,
        SUCCESS: 1,
        UPAY_SUCCESS_CODE: "C2",
        TOKEN_EXPIRED: -1,
        SERVER_MAINTAIN: -1,
        RESTRICTED_ACCESS: 9110,
        FORCE_GEETEST: 1119,
        PHONE_CODE_ERROR: 1101,
        LOGIN_ERROR: 1011,
        TOW_VERYFI: 1012,
        GEETEST_ILLEGAL_REQUEST: 1130,
        EMAIL_SECURITY_CONFIG_EXPIRED: 1044,
        PHONE_SECURITY_CONFIG_EXPIRED: 1248,
        VERIFY_USERNAME_PHONE_ERROR: 1216,
        VERIFY_USERNAME_EMAIL_ERROR: 1105,
        REGISTER_USERNAME_EXISTED_ERROR: 1013,
        REGISTER_USERNAME_PASSWORD_SAME_ERR: 4040,
        REGISTER_PASSWORD_FORMAT_ERR: 4024,
        CONFIG_CHANGE_PASSWORD_FORMAT_ERR: 4042,
        REGISTER_USERNAME_FORMAT_ERR: 1323,
        REGISTER_FAILED_ERROR: 2005,
        EMAIL_CAPTCHA_EMPTY: 1326,
        PHONE_CAPTCHA_EMPTY: 1325,
        PHONE_CAPTCHA_EXPIRED: 1333,
        EMAIL_CAPTCHA_EXPIRED: 1332,
        SECURITY_CONFIG_EXPIRED: 1044,
        SECURITY_PASSWORD_EQUAL: 1002,
        SWIPER_PUZZLE_GEETEST: 1124,
        GRAPHIC_CLICK_GEETEST: 1125,
        NINE_SQUARE_GEETEST: 1126,
        SMS_CODE_GEETEST: 1127,
        PHONE_ERROR: 1216,
        ACCOUNT_FREEZE: 1025,
        CONFIG_CHANGE_ERR: 1128,
        CONFIG_CHANGE_ERR_1: 1247,
        ACCOUNT_ERROR: 1107,
        SYSTEM_NOT_ABNORMAL: 41e3,
        ACCOUNT_ERROR_EXTREME: 1129,
        ACCOUNT_WARING: 4025,
        SMS_CODE_GAME: 3002,
        BIND_WITHDRAW: 3003,
        TEST_REGISTER_GAME: 3004,
        FIRST_RECHARGE: 3006,
        DOWNLOAD_APP: 3007,
        FORCE_DOWNLOAD_APP: 3012,
        DOWNLOAD_APP_CHANNEL_BY_CALL_GAMEAPI: 3010,
        PAGE_OVERDUE: 4020,
        CENTER_WALLET_NOT_BALANCE: 9527,
        DEMO_GAME_LINE_DISABLED: 210103,
        DEMO_GAME_DISABLED: 41020,
        SITE_FREEZE_ERROR: 9111,
        SITE_MAINTAIN_ERROR: -3,
        SITE_FREEZE_AND_MAINTAIN_ERROR: -4,
        NAME_EXISTED_ERROR: 1013,
        VERSION_ERROR: 999,
        OTHER_CLIENT_GAME_LOGIN: 1401,
        USER_RESTRICT_ERROR: 1334,
        NO_WALLET_MERCH_NO_CONFIG: 41050
    },
    at = ee({}, Be, {
        addCommonParams: () => !1,
        maxRetryCount: () => $e.maxRetryCount,
        oss: {
            enable: !1
        },
        crypto: {
            enable: !1
        },
        token: {
            type: "loginOnly"
        }
    }),
    it = {
        Success: 200,
        RequestFalied: 400,
        NetworkError: 500,
        AuthFalied: 401
    },
    $e = ee({}, oe, {
        baseURL: "/",
        maxRetryCount: 0
    }),
    ct = {
        Unauthorized: "A001",
        IPUnAccess: "A003",
        SabaMaintenance: "UM99"
    },
    lt = {
        Maintenance: 410098,
        Error: 41023009,
        SabaError: 41020,
        CurrencyError: 41e3
    },
    ze = () => ({ ...B("httpRequests"),
        set: r => {
            const o = { ...r,
                sendAt: Date.now(),
                removeAt: Date.now() + (r.remove || $.delayRemove) * 1e3
            };
            g.httpRequests.put(o)
        },
        get: async r => {
            const o = await g.httpRequests.get(r);
            return o || null
        },
        removeExpiredData: async () => {
            const r = Date.now();
            await g.httpRequests.where("removeAt").below(r).delete()
        }
    }),
    Ue = () => {
        let e = typeof Worker < "u" ? "INDEXEDDB-WITH-WORKER-ONLY" : "MEMORY-FIRST";
        ["MEMORY-FIRST", "MEMORY-ONLY", "INDEXEDDB-WITH-WORKER-ONLY"].includes(e) && G(1e3 * 20).then(() => {
            s("INDEXEDDB-ONLY"), n()
        });
        const t = B("httpResponses", e),
            s = a => {
                e = a
            },
            n = () => t.sync(e),
            r = async (a, i = {}, c = !0) => {
                const d = i.normal || ((D, {
                        expiresAt: T,
                        removeAt: E
                    }) => {
                        _.info("[".concat(D, "]"), "expiresAt@".concat(T), "removeAt@".concat(E))
                    }),
                    h = await g.httpRequests.get(a.requestId),
                    {
                        defaultExpires: S,
                        delayRemove: p
                    } = $,
                    f = a.expires || S;
                if (f < 0) {
                    console.error("expires 参数不能小于 0 ->", a.key);
                    return
                }
                const I = a.delayRemove || p;
                if (I < 0) {
                    console.error("remove 参数不能小于 0 ->", a.key);
                    return
                }
                const A = { ...a,
                    updatedAt: Date.now(),
                    expiresAt: Date.now() + f * 1e3,
                    removeAt: Date.now() + (f + I) * 1e3,
                    duration: h ? Date.now() - h.sendAt : -1
                };
                await g.httpResponses.put(A), d(a.key, {
                    expiresAt: A.expiresAt,
                    removeAt: A.removeAt
                }), c && await n()
            };
        return { ...t,
            set: r,
            get: async (a, i = !1, c = {}) => {
                const d = Date.now(),
                    h = c.timeout || (E => {
                        _.info("查询超时(remove)", E)
                    }),
                    S = c.normal || ((E, {
                        expiresAt: m,
                        removeAt: O
                    }) => {
                        _.info("[".concat(E, "]"), "expiresAt@".concat(m), "removeAt@".concat(O))
                    }),
                    p = () => y.get("idbStore").httpResponses.find(E => E.key === a),
                    f = () => g.httpResponses.get(a),
                    I = async () => {
                        const E = await ne("DB_GET_BY_KEY").send({
                            key: a
                        });
                        return E == null ? void 0 : E.payload
                    },
                    A = async () => {
                        switch (e) {
                            case "MEMORY-FIRST":
                                return y.get("idbStore").httpResponses.length ? p() || await f() : await f();
                            case "MEMORY-ONLY":
                                return p();
                            case "INDEXEDDB-WITH-WORKER-ONLY":
                                return await I();
                            default:
                                return await f()
                        }
                    },
                    D = async () => (await G(500), "timeout"),
                    T = async () => {
                        const E = await A();
                        if (!E) return null;
                        const m = Date.now() - d;
                        if (E.removeAt < Date.now()) return _.info("[".concat(a, "]"), "接口缓存数据需要删除(remove)"), g.httpResponses.delete(a).then(() => {
                            n()
                        }), null;
                        const O = E.expiresAt < Date.now();
                        return te(E.data, "data.__isExpired__", O), O && _.info("[".concat(a, "]"), "接口缓存数据已过期(expired),allowExpiredCache:".concat(i)), !i && O ? null : (S(a, {
                            elapsedTime: m,
                            strategyName: e,
                            ...E
                        }), E.data)
                    };
                return Promise.race([T(), D()]).then(E => {
                    const m = E === "timeout",
                        O = Date.now() - d;
                    return m && h(a, {
                        strategyName: e,
                        elapsedTime: O
                    }), m ? null : E
                })
            },
            removeExpiredData: async (a = !0) => {
                const i = Date.now();
                await g.httpResponses.where("removeAt").below(i).delete(), a && await n()
            },
            setDataExpired: async a => {
                const i = await g.httpResponses.where(a).toArray();
                return Promise.all(i.map(c => r({ ...c,
                    expires: .001,
                    delayRemove: (c.removeAt - c.expiresAt) / 1e3
                }, {}, !1))).then(async c => (await n(), c))
            }
        }
    },
    z = e => {
        const [t, ...s] = e.split(".");
        return {
            isPathKey: s.length > 0,
            topKey: t,
            restKey: s.join(".")
        }
    },
    P = e => {
        if (!localStorage) return null;
        const {
            topKey: t,
            isPathKey: s,
            restKey: n
        } = z(e), r = localStorage.getItem(t);
        if (!r) return null;
        const o = JSON.parse(r);
        return Date.now() > Number(o.expires) ? (_.info("Cache ".concat(t, " expired!")), localStorage.removeItem(t), null) : s ? se(o.data, n) : o.data
    };

function F(e, t, s) {
    if (!localStorage) return;
    const {
        isPathKey: n,
        topKey: r,
        restKey: o
    } = z(e), u = Date.now() + (s || 3600 * 24 * 30 * 12 * 999) * 1e3;
    let l = t;
    n && (l = P(r), de(l) || (l = {}), te(l, o, t)), localStorage.setItem(r, JSON.stringify({
        data: l,
        expires: u
    }))
}
const q = e => {
        if (!localStorage) return;
        const {
            isPathKey: t,
            topKey: s,
            restKey: n
        } = z(e);
        if (t) {
            const r = P(s),
                o = n.split("."),
                u = o.pop(),
                l = o.length ? se(r, o.join(".")) : r;
            l && l[u] && (delete l[u], F(s, r))
        } else localStorage.removeItem(e)
    },
    He = () => {
        localStorage && localStorage.clear()
    },
    ke = () => {
        if (localStorage)
            for (let e = 0; e < localStorage.length; e++) {
                const t = localStorage.key(e);
                t && Me.includes(t) && localStorage.removeItem(t)
            }
    },
    Ye = () => {},
    We = {
        get: e => P(e),
        getAny: P,
        set: (e, t, s) => F(e, t, s),
        setAny: F,
        remove: e => q(e),
        removeAny: q,
        clearAll: He,
        clear: ke,
        initialize: Ye
    },
    K = e => {
        var n;
        if (!sessionStorage) return null;
        const t = sessionStorage.getItem(e);
        if (!t) return null;
        const s = JSON.parse(t);
        return (n = s == null ? void 0 : s.data) != null ? n : s
    };

function V(e, t) {
    sessionStorage && sessionStorage.setItem(e, JSON.stringify({
        data: t
    }))
}
const j = e => {
        sessionStorage && sessionStorage.removeItem(e)
    },
    qe = () => {
        sessionStorage && sessionStorage.clear()
    },
    Ke = () => {
        if (sessionStorage)
            for (let e = 0; e < sessionStorage.length; e++) {
                const t = sessionStorage.key(e);
                t && xe.includes(t) && sessionStorage.removeItem(t)
            }
    },
    Ve = () => {},
    je = {
        get: e => K(e),
        getAny: K,
        set: (e, t) => V(e, t),
        setAny: V,
        remove: e => j(e),
        removeAny: j,
        clearAll: qe,
        clear: Ke,
        initialize: Ve
    };
class Xe {
    constructor() {
        R(this, "isSupportLocalStorage", !!window.localStorage);
        R(this, "isSupportSessionStorage", !!window.sessionStorage);
        R(this, "isSupportCookie", !!navigator.cookieEnabled);
        R(this, "isSupportIndexedDB", !!window.indexedDB);
        R(this, "cookie", le);
        R(this, "localStorage", We);
        R(this, "sessionStorage", je);
        R(this, "createDBManager", B);
        R(this, "httpResDataRecord", Ue());
        R(this, "httpReqRecord", ze())
    }
    async initialize() {
        this.localStorage.initialize(), this.sessionStorage.initialize(), console.time("cache db initialize"), await Promise.race([Promise.all([this.httpResDataRecord.removeExpiredData(!1).then(() => this.httpResDataRecord.sync()), this.httpReqRecord.removeExpiredData()]).finally(() => {
            ne("DB_READY").send({
                messages: "ping"
            })
        }), G(1500).then(() => "timeout")]).then(t => {
            console.timeEnd("cache db initialize"), console.log("cache db initialize", y.get("idbStore")), console.log(t === "timeout" ? "cache db initialize timeout!" : "cache db initialize success!")
        })
    }
    setConfig() {}
}
const Je = N.getInstance("cacheService", Xe);
y.initialize();
const Qe = e => {
        try {
            (() => {
                const s = window.location.search,
                    n = /[?&]mock\.abcdefg_open=([^&]*)/,
                    r = s.match(n),
                    o = r ? decodeURIComponent(r[1]) : sessionStorage.getItem("abcdefg_open");
                (o === "true" || o === "eruda" || o === "vconsole") && (window.abcdefg_open = o === "true" ? !0 : o)
            })();
            const t = window.abcdefg_open;
            if (t) {
                const n = {
                    eruda: {
                        gloablVar: "eruda",
                        url: "/libs/eruda/eruda.js",
                        setup: () => {
                            window.eruda.init()
                        }
                    },
                    vconsole: {
                        gloablVar: "VConsole",
                        url: "/libs/vconsole@3.15.1/dist/vconsole.min.js",
                        setup: () => {
                            try {
                                new window.VConsole
                            } catch (r) {}
                        }
                    }
                }[t === !0 ? "eruda" : t];
                if (!window[n.gloablVar]) {
                    const r = document.createElement("script"),
                        o = document.querySelector("body");
                    r.setAttribute("src", n.url), o == null || o.appendChild(r), r.onload = () => {
                        n.setup(), e()
                    }, r.onerror = () => {
                        e()
                    }
                }
            } else e()
        } catch (t) {
            e()
        }
    },
    b = () => {
        Qe(async () => {
            console.time("cache initialize"), Je.initialize(), console.timeEnd("cache initialize"), ge(() =>
                import ("./main.async.-NbSL2aO.js").then(e => e.km), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
        })
    };
var X, J, Q, v, Z;
if (window.LOBBY_SITE_CONFIG.humanVerify > -1 && !localStorage.getItem("wg.visited")) try {
    const e = {
        zh: '<div class="wg antiban"><div class="antiban-box"><p class="antiban-message">当前网站访问量较大，请点击按钮继续访问</p><a class="antiban-forward">进入网站</a></div></div>',
        en: '<div class="wg antiban"><div class="antiban-box"><p class="antiban-message">The current website has a large number of visits, please click the button to continue visiting.</p><a class="antiban-forward">Enter the website</a></div></div>'
    };
    document.body.insertAdjacentHTML("beforeend", (J = (X = window.LOBBY_SITE_CONFIG) == null ? void 0 : X.languageCode) != null && J.includes("zh") ? e.zh : e.en);
    const t = window.setTimeout(() => {
        var s;
        b(), (s = document.querySelector(".antiban")) == null || s.remove()
    }, window.LOBBY_SITE_CONFIG.humanVerify * 1e3);
    (Q = document.querySelector(".antiban .antiban-forward")) == null || Q.addEventListener("click", () => {
        var s;
        clearTimeout(t), localStorage.setItem("wg.visited", "1"), b(), (s = document.querySelector(".antiban")) == null || s.remove()
    }), (Z = (v = window.jsBridge) == null ? void 0 : v.getWGConfigInfo) == null || Z.call(v)
} catch (e) {
    b()
} else b();
export {
    me as B, Be as D, y as G, _ as L, _e as M, H as P, ot as R, N as S, ge as _, Ce as a, nt as b, Je as c, G as d, $ as e, Ie as f, oe as g, rt as h, lt as i, ct as j, $e as k, We as l, it as m, at as n
};
//# sourceMappingURL=main.Dmn05Mj-.js.map