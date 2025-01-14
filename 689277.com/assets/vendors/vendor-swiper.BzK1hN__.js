import {
    r as _,
    m as Pe,
    p as Me,
    w as qe,
    o as Ie,
    b as Le,
    l as F,
    aH as We,
    c as Ye,
    n as Xe
} from "./vendor-@vue.CBvhRkQp.js";

function ye(t) {
    return t !== null && typeof t == "object" && "constructor" in t && t.constructor === Object
}

function we(t, e) {
    t === void 0 && (t = {}), e === void 0 && (e = {}), Object.keys(e).forEach(i => {
        typeof t[i] > "u" ? t[i] = e[i] : ye(e[i]) && ye(t[i]) && Object.keys(e[i]).length > 0 && we(t[i], e[i])
    })
}
const Oe = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() {}
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};

function H() {
    const t = typeof document < "u" ? document : {};
    return we(t, Oe), t
}
const Ue = {
    document: Oe,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
    },
    CustomEvent: function() {
        return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {}
    },
    requestAnimationFrame(t) {
        return typeof setTimeout > "u" ? (t(), null) : setTimeout(t, 0)
    },
    cancelAnimationFrame(t) {
        typeof setTimeout > "u" || clearTimeout(t)
    }
};

function N() {
    const t = typeof window < "u" ? window : {};
    return we(t, Ue), t
}

function Ke(t) {
    return t === void 0 && (t = ""), t.trim().split(" ").filter(e => !!e.trim())
}

function Ze(t) {
    const e = t;
    Object.keys(e).forEach(i => {
        try {
            e[i] = null
        } catch (s) {}
        try {
            delete e[i]
        } catch (s) {}
    })
}

function pe(t, e) {
    return e === void 0 && (e = 0), setTimeout(t, e)
}

function te() {
    return Date.now()
}

function Je(t) {
    const e = N();
    let i;
    return e.getComputedStyle && (i = e.getComputedStyle(t, null)), !i && t.currentStyle && (i = t.currentStyle), i || (i = t.style), i
}

function Qe(t, e) {
    e === void 0 && (e = "x");
    const i = N();
    let s, n, r;
    const o = Je(t);
    return i.WebKitCSSMatrix ? (n = o.transform || o.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map(l => l.replace(",", ".")).join(", ")), r = new i.WebKitCSSMatrix(n === "none" ? "" : n)) : (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = r.toString().split(",")), e === "x" && (i.WebKitCSSMatrix ? n = r.m41 : s.length === 16 ? n = parseFloat(s[12]) : n = parseFloat(s[4])), e === "y" && (i.WebKitCSSMatrix ? n = r.m42 : s.length === 16 ? n = parseFloat(s[13]) : n = parseFloat(s[5])), n || 0
}

function J(t) {
    return typeof t == "object" && t !== null && t.constructor && Object.prototype.toString.call(t).slice(8, -1) === "Object"
}

function et(t) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? t instanceof HTMLElement : t && (t.nodeType === 1 || t.nodeType === 11)
}

function G() {
    const t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        e = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < arguments.length; i += 1) {
        const s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
        if (s != null && !et(s)) {
            const n = Object.keys(Object(s)).filter(r => e.indexOf(r) < 0);
            for (let r = 0, o = n.length; r < o; r += 1) {
                const l = n[r],
                    a = Object.getOwnPropertyDescriptor(s, l);
                a !== void 0 && a.enumerable && (J(t[l]) && J(s[l]) ? s[l].__swiper__ ? t[l] = s[l] : G(t[l], s[l]) : !J(t[l]) && J(s[l]) ? (t[l] = {}, s[l].__swiper__ ? t[l] = s[l] : G(t[l], s[l])) : t[l] = s[l])
            }
        }
    }
    return t
}

function Q(t, e, i) {
    t.style.setProperty(e, i)
}

function ze(t) {
    let {
        swiper: e,
        targetPosition: i,
        side: s
    } = t;
    const n = N(),
        r = -e.translate;
    let o = null,
        l;
    const a = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(e.cssModeFrameID);
    const u = i > r ? "next" : "prev",
        d = (g, h) => u === "next" && g >= h || u === "prev" && g <= h,
        f = () => {
            l = new Date().getTime(), o === null && (o = l);
            const g = Math.max(Math.min((l - o) / a, 1), 0),
                h = .5 - Math.cos(g * Math.PI) / 2;
            let m = r + h * (i - r);
            if (d(m, i) && (m = i), e.wrapperEl.scrollTo({
                    [s]: m
                }), d(m, i)) {
                e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                    e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                        [s]: m
                    })
                }), n.cancelAnimationFrame(e.cssModeFrameID);
                return
            }
            e.cssModeFrameID = n.requestAnimationFrame(f)
        };
    f()
}

function ne(t) {
    return t.querySelector(".swiper-slide-transform") || t.shadowRoot && t.shadowRoot.querySelector(".swiper-slide-transform") || t
}

function k(t, e) {
    e === void 0 && (e = "");
    const i = [...t.children];
    return t instanceof HTMLSlotElement && i.push(...t.assignedElements()), e ? i.filter(s => s.matches(e)) : i
}

function tt(t, e) {
    const i = e.contains(t);
    return !i && e instanceof HTMLSlotElement ? [...e.assignedElements()].includes(t) : i
}

function ie(t) {
    try {
        console.warn(t);
        return
    } catch (e) {}
}

function K(t, e) {
    e === void 0 && (e = []);
    const i = document.createElement(t);
    return i.classList.add(...Array.isArray(e) ? e : Ke(e)), i
}

function it(t, e) {
    const i = [];
    for (; t.previousElementSibling;) {
        const s = t.previousElementSibling;
        e ? s.matches(e) && i.push(s) : i.push(s), t = s
    }
    return i
}

function st(t, e) {
    const i = [];
    for (; t.nextElementSibling;) {
        const s = t.nextElementSibling;
        e ? s.matches(e) && i.push(s) : i.push(s), t = s
    }
    return i
}

function q(t, e) {
    return N().getComputedStyle(t, null).getPropertyValue(e)
}

function se(t) {
    let e = t,
        i;
    if (e) {
        for (i = 0;
            (e = e.previousSibling) !== null;) e.nodeType === 1 && (i += 1);
        return i
    }
}

function Ae(t, e) {
    const i = [];
    let s = t.parentElement;
    for (; s;) e ? s.matches(e) && i.push(s) : i.push(s), s = s.parentElement;
    return i
}

function nt(t, e) {
    function i(s) {
        s.target === t && (e.call(t, s), t.removeEventListener("transitionend", i))
    }
    e && t.addEventListener("transitionend", i)
}

function me(t, e, i) {
    const s = N();
    return t[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(t, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(t, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom"))
}

function D(t) {
    return (Array.isArray(t) ? t : [t]).filter(e => !!e)
}

function rt(t) {
    return e => Math.abs(e) > 0 && t.browser && t.browser.need3dFix && Math.abs(e) % 90 === 0 ? e + .001 : e
}
let re;

function at() {
    const t = N(),
        e = H();
    return {
        smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
        touch: !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch)
    }
}

function Be() {
    return re || (re = at()), re
}
let ae;

function lt(t) {
    let {
        userAgent: e
    } = t === void 0 ? {} : t;
    const i = Be(),
        s = N(),
        n = s.navigator.platform,
        r = e || s.navigator.userAgent,
        o = {
            ios: !1,
            android: !1
        },
        l = s.screen.width,
        a = s.screen.height,
        u = r.match(/(Android);?[\s\/]+([\d.]+)?/);
    let d = r.match(/(iPad).*OS\s([\d_]+)/);
    const f = r.match(/(iPod)(.*OS\s([\d_]+))?/),
        g = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        h = n === "Win32";
    let m = n === "MacIntel";
    const v = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !d && m && i.touch && v.indexOf("".concat(l, "x").concat(a)) >= 0 && (d = r.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), m = !1), u && !h && (o.os = "android", o.android = !0), (d || g || f) && (o.os = "ios", o.ios = !0), o
}

function De(t) {
    return t === void 0 && (t = {}), ae || (ae = lt(t)), ae
}
let le;

function ot() {
    const t = N(),
        e = De();
    let i = !1;

    function s() {
        const l = t.navigator.userAgent.toLowerCase();
        return l.indexOf("safari") >= 0 && l.indexOf("chrome") < 0 && l.indexOf("android") < 0
    }
    if (s()) {
        const l = String(t.navigator.userAgent);
        if (l.includes("Version/")) {
            const [a, u] = l.split("Version/")[1].split(" ")[0].split(".").map(d => Number(d));
            i = a < 16 || a === 16 && u < 2
        }
    }
    const n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),
        r = s(),
        o = r || n && e.ios;
    return {
        isSafari: i || r,
        needPerspectiveFix: i,
        need3dFix: o,
        isWebView: n
    }
}

function dt() {
    return le || (le = ot()), le
}

function ft(t) {
    let {
        swiper: e,
        on: i,
        emit: s
    } = t;
    const n = N();
    let r = null,
        o = null;
    const l = () => {
            !e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"))
        },
        a = () => {
            !e || e.destroyed || !e.initialized || (r = new ResizeObserver(f => {
                o = n.requestAnimationFrame(() => {
                    const {
                        width: g,
                        height: h
                    } = e;
                    let m = g,
                        v = h;
                    f.forEach(b => {
                        let {
                            contentBoxSize: w,
                            contentRect: c,
                            target: p
                        } = b;
                        p && p !== e.el || (m = c ? c.width : (w[0] || w).inlineSize, v = c ? c.height : (w[0] || w).blockSize)
                    }), (m !== g || v !== h) && l()
                })
            }), r.observe(e.el))
        },
        u = () => {
            o && n.cancelAnimationFrame(o), r && r.unobserve && e.el && (r.unobserve(e.el), r = null)
        },
        d = () => {
            !e || e.destroyed || !e.initialized || s("orientationchange")
        };
    i("init", () => {
        if (e.params.resizeObserver && typeof n.ResizeObserver < "u") {
            a();
            return
        }
        n.addEventListener("resize", l), n.addEventListener("orientationchange", d)
    }), i("destroy", () => {
        u(), n.removeEventListener("resize", l), n.removeEventListener("orientationchange", d)
    })
}

function ut(t) {
    let {
        swiper: e,
        extendParams: i,
        on: s,
        emit: n
    } = t;
    const r = [],
        o = N(),
        l = function(d, f) {
            f === void 0 && (f = {});
            const g = o.MutationObserver || o.WebkitMutationObserver,
                h = new g(m => {
                    if (e.__preventObserver__) return;
                    if (m.length === 1) {
                        n("observerUpdate", m[0]);
                        return
                    }
                    const v = function() {
                        n("observerUpdate", m[0])
                    };
                    o.requestAnimationFrame ? o.requestAnimationFrame(v) : o.setTimeout(v, 0)
                });
            h.observe(d, {
                attributes: typeof f.attributes > "u" ? !0 : f.attributes,
                childList: e.isElement || (typeof f.childList > "u" ? !0 : f).childList,
                characterData: typeof f.characterData > "u" ? !0 : f.characterData
            }), r.push(h)
        },
        a = () => {
            if (e.params.observer) {
                if (e.params.observeParents) {
                    const d = Ae(e.hostEl);
                    for (let f = 0; f < d.length; f += 1) l(d[f])
                }
                l(e.hostEl, {
                    childList: e.params.observeSlideChildren
                }), l(e.wrapperEl, {
                    attributes: !1
                })
            }
        },
        u = () => {
            r.forEach(d => {
                d.disconnect()
            }), r.splice(0, r.length)
        };
    i({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }), s("init", a), s("destroy", u)
}
var ct = {
    on(t, e, i) {
        const s = this;
        if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
        const n = i ? "unshift" : "push";
        return t.split(" ").forEach(r => {
            s.eventsListeners[r] || (s.eventsListeners[r] = []), s.eventsListeners[r][n](e)
        }), s
    },
    once(t, e, i) {
        const s = this;
        if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;

        function n() {
            s.off(t, n), n.__emitterProxy && delete n.__emitterProxy;
            for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++) o[l] = arguments[l];
            e.apply(s, o)
        }
        return n.__emitterProxy = e, s.on(t, n, i)
    },
    onAny(t, e) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof t != "function") return i;
        const s = e ? "unshift" : "push";
        return i.eventsAnyListeners.indexOf(t) < 0 && i.eventsAnyListeners[s](t), i
    },
    offAny(t) {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
        const i = e.eventsAnyListeners.indexOf(t);
        return i >= 0 && e.eventsAnyListeners.splice(i, 1), e
    },
    off(t, e) {
        const i = this;
        return !i.eventsListeners || i.destroyed || !i.eventsListeners || t.split(" ").forEach(s => {
            typeof e > "u" ? i.eventsListeners[s] = [] : i.eventsListeners[s] && i.eventsListeners[s].forEach((n, r) => {
                (n === e || n.__emitterProxy && n.__emitterProxy === e) && i.eventsListeners[s].splice(r, 1)
            })
        }), i
    },
    emit() {
        const t = this;
        if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
        let e, i, s;
        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
        return typeof r[0] == "string" || Array.isArray(r[0]) ? (e = r[0], i = r.slice(1, r.length), s = t) : (e = r[0].events, i = r[0].data, s = r[0].context || t), i.unshift(s), (Array.isArray(e) ? e : e.split(" ")).forEach(a => {
            t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach(u => {
                u.apply(s, [a, ...i])
            }), t.eventsListeners && t.eventsListeners[a] && t.eventsListeners[a].forEach(u => {
                u.apply(s, i)
            })
        }), t
    }
};

function pt() {
    const t = this;
    let e, i;
    const s = t.el;
    typeof t.params.width < "u" && t.params.width !== null ? e = t.params.width : e = s.clientWidth, typeof t.params.height < "u" && t.params.height !== null ? i = t.params.height : i = s.clientHeight, !(e === 0 && t.isHorizontal() || i === 0 && t.isVertical()) && (e = e - parseInt(q(s, "padding-left") || 0, 10) - parseInt(q(s, "padding-right") || 0, 10), i = i - parseInt(q(s, "padding-top") || 0, 10) - parseInt(q(s, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(i) && (i = 0), Object.assign(t, {
        width: e,
        height: i,
        size: t.isHorizontal() ? e : i
    }))
}

function mt() {
    const t = this;

    function e(x, E) {
        return parseFloat(x.getPropertyValue(t.getDirectionLabel(E)) || 0)
    }
    const i = t.params,
        {
            wrapperEl: s,
            slidesEl: n,
            size: r,
            rtlTranslate: o,
            wrongRTL: l
        } = t,
        a = t.virtual && i.virtual.enabled,
        u = a ? t.virtual.slides.length : t.slides.length,
        d = k(n, ".".concat(t.params.slideClass, ", swiper-slide")),
        f = a ? t.virtual.slides.length : d.length;
    let g = [];
    const h = [],
        m = [];
    let v = i.slidesOffsetBefore;
    typeof v == "function" && (v = i.slidesOffsetBefore.call(t));
    let b = i.slidesOffsetAfter;
    typeof b == "function" && (b = i.slidesOffsetAfter.call(t));
    const w = t.snapGrid.length,
        c = t.slidesGrid.length;
    let p = i.spaceBetween,
        S = -v,
        y = 0,
        P = 0;
    if (typeof r > "u") return;
    typeof p == "string" && p.indexOf("%") >= 0 ? p = parseFloat(p.replace("%", "")) / 100 * r : typeof p == "string" && (p = parseFloat(p)), t.virtualSize = -p, d.forEach(x => {
        o ? x.style.marginLeft = "" : x.style.marginRight = "", x.style.marginBottom = "", x.style.marginTop = ""
    }), i.centeredSlides && i.cssMode && (Q(s, "--swiper-centered-offset-before", ""), Q(s, "--swiper-centered-offset-after", ""));
    const O = i.grid && i.grid.rows > 1 && t.grid;
    O ? t.grid.initSlides(d) : t.grid && t.grid.unsetSlides();
    let M;
    const T = i.slidesPerView === "auto" && i.breakpoints && Object.keys(i.breakpoints).filter(x => typeof i.breakpoints[x].slidesPerView < "u").length > 0;
    for (let x = 0; x < f; x += 1) {
        M = 0;
        let E;
        if (d[x] && (E = d[x]), O && t.grid.updateSlide(x, E, d), !(d[x] && q(E, "display") === "none")) {
            if (i.slidesPerView === "auto") {
                T && (d[x].style[t.getDirectionLabel("width")] = "");
                const L = getComputedStyle(E),
                    C = E.style.transform,
                    I = E.style.webkitTransform;
                if (C && (E.style.transform = "none"), I && (E.style.webkitTransform = "none"), i.roundLengths) M = t.isHorizontal() ? me(E, "width") : me(E, "height");
                else {
                    const A = e(L, "width"),
                        B = e(L, "padding-left"),
                        j = e(L, "padding-right"),
                        z = e(L, "margin-left"),
                        V = e(L, "margin-right"),
                        $ = L.getPropertyValue("box-sizing");
                    if ($ && $ === "border-box") M = A + z + V;
                    else {
                        const {
                            clientWidth: W,
                            offsetWidth: Z
                        } = E;
                        M = A + B + j + z + V + (Z - W)
                    }
                }
                C && (E.style.transform = C), I && (E.style.webkitTransform = I), i.roundLengths && (M = Math.floor(M))
            } else M = (r - (i.slidesPerView - 1) * p) / i.slidesPerView, i.roundLengths && (M = Math.floor(M)), d[x] && (d[x].style[t.getDirectionLabel("width")] = "".concat(M, "px"));
            d[x] && (d[x].swiperSlideSize = M), m.push(M), i.centeredSlides ? (S = S + M / 2 + y / 2 + p, y === 0 && x !== 0 && (S = S - r / 2 - p), x === 0 && (S = S - r / 2 - p), Math.abs(S) < 1 / 1e3 && (S = 0), i.roundLengths && (S = Math.floor(S)), P % i.slidesPerGroup === 0 && g.push(S), h.push(S)) : (i.roundLengths && (S = Math.floor(S)), (P - Math.min(t.params.slidesPerGroupSkip, P)) % t.params.slidesPerGroup === 0 && g.push(S), h.push(S), S = S + M + p), t.virtualSize += M + p, y = M, P += 1
        }
    }
    if (t.virtualSize = Math.max(t.virtualSize, r) + b, o && l && (i.effect === "slide" || i.effect === "coverflow") && (s.style.width = "".concat(t.virtualSize + p, "px")), i.setWrapperSize && (s.style[t.getDirectionLabel("width")] = "".concat(t.virtualSize + p, "px")), O && t.grid.updateWrapperSize(M, g), !i.centeredSlides) {
        const x = [];
        for (let E = 0; E < g.length; E += 1) {
            let L = g[E];
            i.roundLengths && (L = Math.floor(L)), g[E] <= t.virtualSize - r && x.push(L)
        }
        g = x, Math.floor(t.virtualSize - r) - Math.floor(g[g.length - 1]) > 1 && g.push(t.virtualSize - r)
    }
    if (a && i.loop) {
        const x = m[0] + p;
        if (i.slidesPerGroup > 1) {
            const E = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / i.slidesPerGroup),
                L = x * i.slidesPerGroup;
            for (let C = 0; C < E; C += 1) g.push(g[g.length - 1] + L)
        }
        for (let E = 0; E < t.virtual.slidesBefore + t.virtual.slidesAfter; E += 1) i.slidesPerGroup === 1 && g.push(g[g.length - 1] + x), h.push(h[h.length - 1] + x), t.virtualSize += x
    }
    if (g.length === 0 && (g = [0]), p !== 0) {
        const x = t.isHorizontal() && o ? "marginLeft" : t.getDirectionLabel("marginRight");
        d.filter((E, L) => !i.cssMode || i.loop ? !0 : L !== d.length - 1).forEach(E => {
            E.style[x] = "".concat(p, "px")
        })
    }
    if (i.centeredSlides && i.centeredSlidesBounds) {
        let x = 0;
        m.forEach(L => {
            x += L + (p || 0)
        }), x -= p;
        const E = x > r ? x - r : 0;
        g = g.map(L => L <= 0 ? -v : L > E ? E + b : L)
    }
    if (i.centerInsufficientSlides) {
        let x = 0;
        m.forEach(L => {
            x += L + (p || 0)
        }), x -= p;
        const E = (i.slidesOffsetBefore || 0) + (i.slidesOffsetAfter || 0);
        if (x + E < r) {
            const L = (r - x - E) / 2;
            g.forEach((C, I) => {
                g[I] = C - L
            }), h.forEach((C, I) => {
                h[I] = C + L
            })
        }
    }
    if (Object.assign(t, {
            slides: d,
            snapGrid: g,
            slidesGrid: h,
            slidesSizesGrid: m
        }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
        Q(s, "--swiper-centered-offset-before", "".concat(-g[0], "px")), Q(s, "--swiper-centered-offset-after", "".concat(t.size / 2 - m[m.length - 1] / 2, "px"));
        const x = -t.snapGrid[0],
            E = -t.slidesGrid[0];
        t.snapGrid = t.snapGrid.map(L => L + x), t.slidesGrid = t.slidesGrid.map(L => L + E)
    }
    if (f !== u && t.emit("slidesLengthChange"), g.length !== w && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), h.length !== c && t.emit("slidesGridLengthChange"), i.watchSlidesProgress && t.updateSlidesOffset(), t.emit("slidesUpdated"), !a && !i.cssMode && (i.effect === "slide" || i.effect === "fade")) {
        const x = "".concat(i.containerModifierClass, "backface-hidden"),
            E = t.el.classList.contains(x);
        f <= i.maxBackfaceHiddenSlides ? E || t.el.classList.add(x) : E && t.el.classList.remove(x)
    }
}

function ht(t) {
    const e = this,
        i = [],
        s = e.virtual && e.params.virtual.enabled;
    let n = 0,
        r;
    typeof t == "number" ? e.setTransition(t) : t === !0 && e.setTransition(e.params.speed);
    const o = l => s ? e.slides[e.getSlideIndexByData(l)] : e.slides[l];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
        if (e.params.centeredSlides)(e.visibleSlides || []).forEach(l => {
            i.push(l)
        });
        else
            for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
                const l = e.activeIndex + r;
                if (l > e.slides.length && !s) break;
                i.push(o(l))
            } else i.push(o(e.activeIndex));
    for (r = 0; r < i.length; r += 1)
        if (typeof i[r] < "u") {
            const l = i[r].offsetHeight;
            n = l > n ? l : n
        }(n || n === 0) && (e.wrapperEl.style.height = "".concat(n, "px"))
}

function gt() {
    const t = this,
        e = t.slides,
        i = t.isElement ? t.isHorizontal() ? t.wrapperEl.offsetLeft : t.wrapperEl.offsetTop : 0;
    for (let s = 0; s < e.length; s += 1) e[s].swiperSlideOffset = (t.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) - i - t.cssOverflowAdjustment()
}
const be = (t, e, i) => {
    e && !t.classList.contains(i) ? t.classList.add(i) : !e && t.classList.contains(i) && t.classList.remove(i)
};

function vt(t) {
    t === void 0 && (t = this && this.translate || 0);
    const e = this,
        i = e.params,
        {
            slides: s,
            rtlTranslate: n,
            snapGrid: r
        } = e;
    if (s.length === 0) return;
    typeof s[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let o = -t;
    n && (o = t), e.visibleSlidesIndexes = [], e.visibleSlides = [];
    let l = i.spaceBetween;
    typeof l == "string" && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * e.size : typeof l == "string" && (l = parseFloat(l));
    for (let a = 0; a < s.length; a += 1) {
        const u = s[a];
        let d = u.swiperSlideOffset;
        i.cssMode && i.centeredSlides && (d -= s[0].swiperSlideOffset);
        const f = (o + (i.centeredSlides ? e.minTranslate() : 0) - d) / (u.swiperSlideSize + l),
            g = (o - r[0] + (i.centeredSlides ? e.minTranslate() : 0) - d) / (u.swiperSlideSize + l),
            h = -(o - d),
            m = h + e.slidesSizesGrid[a],
            v = h >= 0 && h <= e.size - e.slidesSizesGrid[a],
            b = h >= 0 && h < e.size - 1 || m > 1 && m <= e.size || h <= 0 && m >= e.size;
        b && (e.visibleSlides.push(u), e.visibleSlidesIndexes.push(a)), be(u, b, i.slideVisibleClass), be(u, v, i.slideFullyVisibleClass), u.progress = n ? -f : f, u.originalProgress = n ? -g : g
    }
}

function wt(t) {
    const e = this;
    if (typeof t > "u") {
        const d = e.rtlTranslate ? -1 : 1;
        t = e && e.translate && e.translate * d || 0
    }
    const i = e.params,
        s = e.maxTranslate() - e.minTranslate();
    let {
        progress: n,
        isBeginning: r,
        isEnd: o,
        progressLoop: l
    } = e;
    const a = r,
        u = o;
    if (s === 0) n = 0, r = !0, o = !0;
    else {
        n = (t - e.minTranslate()) / s;
        const d = Math.abs(t - e.minTranslate()) < 1,
            f = Math.abs(t - e.maxTranslate()) < 1;
        r = d || n <= 0, o = f || n >= 1, d && (n = 0), f && (n = 1)
    }
    if (i.loop) {
        const d = e.getSlideIndexByData(0),
            f = e.getSlideIndexByData(e.slides.length - 1),
            g = e.slidesGrid[d],
            h = e.slidesGrid[f],
            m = e.slidesGrid[e.slidesGrid.length - 1],
            v = Math.abs(t);
        v >= g ? l = (v - g) / m : l = (v + m - h) / m, l > 1 && (l -= 1)
    }
    Object.assign(e, {
        progress: n,
        progressLoop: l,
        isBeginning: r,
        isEnd: o
    }), (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && e.updateSlidesProgress(t), r && !a && e.emit("reachBeginning toEdge"), o && !u && e.emit("reachEnd toEdge"), (a && !r || u && !o) && e.emit("fromEdge"), e.emit("progress", n)
}
const oe = (t, e, i) => {
    e && !t.classList.contains(i) ? t.classList.add(i) : !e && t.classList.contains(i) && t.classList.remove(i)
};

function St() {
    const t = this,
        {
            slides: e,
            params: i,
            slidesEl: s,
            activeIndex: n
        } = t,
        r = t.virtual && i.virtual.enabled,
        o = t.grid && i.grid && i.grid.rows > 1,
        l = f => k(s, ".".concat(i.slideClass).concat(f, ", swiper-slide").concat(f))[0];
    let a, u, d;
    if (r)
        if (i.loop) {
            let f = n - t.virtual.slidesBefore;
            f < 0 && (f = t.virtual.slides.length + f), f >= t.virtual.slides.length && (f -= t.virtual.slides.length), a = l('[data-swiper-slide-index="'.concat(f, '"]'))
        } else a = l('[data-swiper-slide-index="'.concat(n, '"]'));
    else o ? (a = e.filter(f => f.column === n)[0], d = e.filter(f => f.column === n + 1)[0], u = e.filter(f => f.column === n - 1)[0]) : a = e[n];
    a && (o || (d = st(a, ".".concat(i.slideClass, ", swiper-slide"))[0], i.loop && !d && (d = e[0]), u = it(a, ".".concat(i.slideClass, ", swiper-slide"))[0], i.loop && !u === 0 && (u = e[e.length - 1]))), e.forEach(f => {
        oe(f, f === a, i.slideActiveClass), oe(f, f === d, i.slideNextClass), oe(f, f === u, i.slidePrevClass)
    }), t.emitSlidesClasses()
}
const ee = (t, e) => {
        if (!t || t.destroyed || !t.params) return;
        const i = () => t.isElement ? "swiper-slide" : ".".concat(t.params.slideClass),
            s = e.closest(i());
        if (s) {
            let n = s.querySelector(".".concat(t.params.lazyPreloaderClass));
            !n && t.isElement && (s.shadowRoot ? n = s.shadowRoot.querySelector(".".concat(t.params.lazyPreloaderClass)) : requestAnimationFrame(() => {
                s.shadowRoot && (n = s.shadowRoot.querySelector(".".concat(t.params.lazyPreloaderClass)), n && n.remove())
            })), n && n.remove()
        }
    },
    de = (t, e) => {
        if (!t.slides[e]) return;
        const i = t.slides[e].querySelector('[loading="lazy"]');
        i && i.removeAttribute("loading")
    },
    he = t => {
        if (!t || t.destroyed || !t.params) return;
        let e = t.params.lazyPreloadPrevNext;
        const i = t.slides.length;
        if (!i || !e || e < 0) return;
        e = Math.min(e, i);
        const s = t.params.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(t.params.slidesPerView),
            n = t.activeIndex;
        if (t.params.grid && t.params.grid.rows > 1) {
            const o = n,
                l = [o - e];
            l.push(...Array.from({
                length: e
            }).map((a, u) => o + s + u)), t.slides.forEach((a, u) => {
                l.includes(a.column) && de(t, u)
            });
            return
        }
        const r = n + s - 1;
        if (t.params.rewind || t.params.loop)
            for (let o = n - e; o <= r + e; o += 1) {
                const l = (o % i + i) % i;
                (l < n || l > r) && de(t, l)
            } else
                for (let o = Math.max(n - e, 0); o <= Math.min(r + e, i - 1); o += 1) o !== n && (o > r || o < n) && de(t, o)
    };

function yt(t) {
    const {
        slidesGrid: e,
        params: i
    } = t, s = t.rtlTranslate ? t.translate : -t.translate;
    let n;
    for (let r = 0; r < e.length; r += 1) typeof e[r + 1] < "u" ? s >= e[r] && s < e[r + 1] - (e[r + 1] - e[r]) / 2 ? n = r : s >= e[r] && s < e[r + 1] && (n = r + 1) : s >= e[r] && (n = r);
    return i.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0), n
}

function bt(t) {
    const e = this,
        i = e.rtlTranslate ? e.translate : -e.translate,
        {
            snapGrid: s,
            params: n,
            activeIndex: r,
            realIndex: o,
            snapIndex: l
        } = e;
    let a = t,
        u;
    const d = h => {
        let m = h - e.virtual.slidesBefore;
        return m < 0 && (m = e.virtual.slides.length + m), m >= e.virtual.slides.length && (m -= e.virtual.slides.length), m
    };
    if (typeof a > "u" && (a = yt(e)), s.indexOf(i) >= 0) u = s.indexOf(i);
    else {
        const h = Math.min(n.slidesPerGroupSkip, a);
        u = h + Math.floor((a - h) / n.slidesPerGroup)
    }
    if (u >= s.length && (u = s.length - 1), a === r && !e.params.loop) {
        u !== l && (e.snapIndex = u, e.emit("snapIndexChange"));
        return
    }
    if (a === r && e.params.loop && e.virtual && e.params.virtual.enabled) {
        e.realIndex = d(a);
        return
    }
    const f = e.grid && n.grid && n.grid.rows > 1;
    let g;
    if (e.virtual && n.virtual.enabled && n.loop) g = d(a);
    else if (f) {
        const h = e.slides.filter(v => v.column === a)[0];
        let m = parseInt(h.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(m) && (m = Math.max(e.slides.indexOf(h), 0)), g = Math.floor(m / n.grid.rows)
    } else if (e.slides[a]) {
        const h = e.slides[a].getAttribute("data-swiper-slide-index");
        h ? g = parseInt(h, 10) : g = a
    } else g = a;
    Object.assign(e, {
        previousSnapIndex: l,
        snapIndex: u,
        previousRealIndex: o,
        realIndex: g,
        previousIndex: r,
        activeIndex: a
    }), e.initialized && he(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (o !== g && e.emit("realIndexChange"), e.emit("slideChange"))
}

function Tt(t, e) {
    const i = this,
        s = i.params;
    let n = t.closest(".".concat(s.slideClass, ", swiper-slide"));
    !n && i.isElement && e && e.length > 1 && e.includes(t) && [...e.slice(e.indexOf(t) + 1, e.length)].forEach(l => {
        !n && l.matches && l.matches(".".concat(s.slideClass, ", swiper-slide")) && (n = l)
    });
    let r = !1,
        o;
    if (n) {
        for (let l = 0; l < i.slides.length; l += 1)
            if (i.slides[l] === n) {
                r = !0, o = l;
                break
            }
    }
    if (n && r) i.clickedSlide = n, i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt(n.getAttribute("data-swiper-slide-index"), 10) : i.clickedIndex = o;
    else {
        i.clickedSlide = void 0, i.clickedIndex = void 0;
        return
    }
    s.slideToClickedSlide && i.clickedIndex !== void 0 && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide()
}
var xt = {
    updateSize: pt,
    updateSlides: mt,
    updateAutoHeight: ht,
    updateSlidesOffset: gt,
    updateSlidesProgress: vt,
    updateProgress: wt,
    updateSlidesClasses: St,
    updateActiveIndex: bt,
    updateClickedSlide: Tt
};

function Et(t) {
    t === void 0 && (t = this.isHorizontal() ? "x" : "y");
    const e = this,
        {
            params: i,
            rtlTranslate: s,
            translate: n,
            wrapperEl: r
        } = e;
    if (i.virtualTranslate) return s ? -n : n;
    if (i.cssMode) return n;
    let o = Qe(r, t);
    return o += e.cssOverflowAdjustment(), s && (o = -o), o || 0
}

function Ct(t, e) {
    const i = this,
        {
            rtlTranslate: s,
            params: n,
            wrapperEl: r,
            progress: o
        } = i;
    let l = 0,
        a = 0;
    const u = 0;
    i.isHorizontal() ? l = s ? -t : t : a = t, n.roundLengths && (l = Math.floor(l), a = Math.floor(a)), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? l : a, n.cssMode ? r[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -l : -a : n.virtualTranslate || (i.isHorizontal() ? l -= i.cssOverflowAdjustment() : a -= i.cssOverflowAdjustment(), r.style.transform = "translate3d(".concat(l, "px, ").concat(a, "px, ").concat(u, "px)"));
    let d;
    const f = i.maxTranslate() - i.minTranslate();
    f === 0 ? d = 0 : d = (t - i.minTranslate()) / f, d !== o && i.updateProgress(t), i.emit("setTranslate", i.translate, e)
}

function Pt() {
    return -this.snapGrid[0]
}

function Mt() {
    return -this.snapGrid[this.snapGrid.length - 1]
}

function It(t, e, i, s, n) {
    t === void 0 && (t = 0), e === void 0 && (e = this.params.speed), i === void 0 && (i = !0), s === void 0 && (s = !0);
    const r = this,
        {
            params: o,
            wrapperEl: l
        } = r;
    if (r.animating && o.preventInteractionOnTransition) return !1;
    const a = r.minTranslate(),
        u = r.maxTranslate();
    let d;
    if (s && t > a ? d = a : s && t < u ? d = u : d = t, r.updateProgress(d), o.cssMode) {
        const f = r.isHorizontal();
        if (e === 0) l[f ? "scrollLeft" : "scrollTop"] = -d;
        else {
            if (!r.support.smoothScroll) return ze({
                swiper: r,
                targetPosition: -d,
                side: f ? "left" : "top"
            }), !0;
            l.scrollTo({
                [f ? "left" : "top"]: -d,
                behavior: "smooth"
            })
        }
        return !0
    }
    return e === 0 ? (r.setTransition(0), r.setTranslate(d), i && (r.emit("beforeTransitionStart", e, n), r.emit("transitionEnd"))) : (r.setTransition(e), r.setTranslate(d), i && (r.emit("beforeTransitionStart", e, n), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(g) {
        !r || r.destroyed || g.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, r.animating = !1, i && r.emit("transitionEnd"))
    }), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), !0
}
var Lt = {
    getTranslate: Et,
    setTranslate: Ct,
    minTranslate: Pt,
    maxTranslate: Mt,
    translateTo: It
};

function Ot(t, e) {
    const i = this;
    i.params.cssMode || (i.wrapperEl.style.transitionDuration = "".concat(t, "ms"), i.wrapperEl.style.transitionDelay = t === 0 ? "0ms" : ""), i.emit("setTransition", t, e)
}

function $e(t) {
    let {
        swiper: e,
        runCallbacks: i,
        direction: s,
        step: n
    } = t;
    const {
        activeIndex: r,
        previousIndex: o
    } = e;
    let l = s;
    if (l || (r > o ? l = "next" : r < o ? l = "prev" : l = "reset"), e.emit("transition".concat(n)), i && r !== o) {
        if (l === "reset") {
            e.emit("slideResetTransition".concat(n));
            return
        }
        e.emit("slideChangeTransition".concat(n)), l === "next" ? e.emit("slideNextTransition".concat(n)) : e.emit("slidePrevTransition".concat(n))
    }
}

function zt(t, e) {
    t === void 0 && (t = !0);
    const i = this,
        {
            params: s
        } = i;
    s.cssMode || (s.autoHeight && i.updateAutoHeight(), $e({
        swiper: i,
        runCallbacks: t,
        direction: e,
        step: "Start"
    }))
}

function At(t, e) {
    t === void 0 && (t = !0);
    const i = this,
        {
            params: s
        } = i;
    i.animating = !1, !s.cssMode && (i.setTransition(0), $e({
        swiper: i,
        runCallbacks: t,
        direction: e,
        step: "End"
    }))
}
var Bt = {
    setTransition: Ot,
    transitionStart: zt,
    transitionEnd: At
};

function Dt(t, e, i, s, n) {
    t === void 0 && (t = 0), i === void 0 && (i = !0), typeof t == "string" && (t = parseInt(t, 10));
    const r = this;
    let o = t;
    o < 0 && (o = 0);
    const {
        params: l,
        snapGrid: a,
        slidesGrid: u,
        previousIndex: d,
        activeIndex: f,
        rtlTranslate: g,
        wrapperEl: h,
        enabled: m
    } = r;
    if (!m && !s && !n || r.destroyed || r.animating && l.preventInteractionOnTransition) return !1;
    typeof e > "u" && (e = r.params.speed);
    const v = Math.min(r.params.slidesPerGroupSkip, o);
    let b = v + Math.floor((o - v) / r.params.slidesPerGroup);
    b >= a.length && (b = a.length - 1);
    const w = -a[b];
    if (l.normalizeSlideIndex)
        for (let y = 0; y < u.length; y += 1) {
            const P = -Math.floor(w * 100),
                O = Math.floor(u[y] * 100),
                M = Math.floor(u[y + 1] * 100);
            typeof u[y + 1] < "u" ? P >= O && P < M - (M - O) / 2 ? o = y : P >= O && P < M && (o = y + 1) : P >= O && (o = y)
        }
    if (r.initialized && o !== f && (!r.allowSlideNext && (g ? w > r.translate && w > r.minTranslate() : w < r.translate && w < r.minTranslate()) || !r.allowSlidePrev && w > r.translate && w > r.maxTranslate() && (f || 0) !== o)) return !1;
    o !== (d || 0) && i && r.emit("beforeSlideChangeStart"), r.updateProgress(w);
    let c;
    o > f ? c = "next" : o < f ? c = "prev" : c = "reset";
    const p = r.virtual && r.params.virtual.enabled;
    if (!(p && n) && (g && -w === r.translate || !g && w === r.translate)) return r.updateActiveIndex(o), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), l.effect !== "slide" && r.setTranslate(w), c !== "reset" && (r.transitionStart(i, c), r.transitionEnd(i, c)), !1;
    if (l.cssMode) {
        const y = r.isHorizontal(),
            P = g ? w : -w;
        if (e === 0) p && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), p && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
            h[y ? "scrollLeft" : "scrollTop"] = P
        })) : h[y ? "scrollLeft" : "scrollTop"] = P, p && requestAnimationFrame(() => {
            r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1
        });
        else {
            if (!r.support.smoothScroll) return ze({
                swiper: r,
                targetPosition: P,
                side: y ? "left" : "top"
            }), !0;
            h.scrollTo({
                [y ? "left" : "top"]: P,
                behavior: "smooth"
            })
        }
        return !0
    }
    return r.setTransition(e), r.setTranslate(w), r.updateActiveIndex(o), r.updateSlidesClasses(), r.emit("beforeTransitionStart", e, s), r.transitionStart(i, c), e === 0 ? r.transitionEnd(i, c) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(P) {
        !r || r.destroyed || P.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, c))
    }), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), !0
}

function $t(t, e, i, s) {
    t === void 0 && (t = 0), i === void 0 && (i = !0), typeof t == "string" && (t = parseInt(t, 10));
    const n = this;
    if (n.destroyed) return;
    typeof e > "u" && (e = n.params.speed);
    const r = n.grid && n.params.grid && n.params.grid.rows > 1;
    let o = t;
    if (n.params.loop)
        if (n.virtual && n.params.virtual.enabled) o = o + n.virtual.slidesBefore;
        else {
            let l;
            if (r) {
                const g = o * n.params.grid.rows;
                l = n.slides.filter(h => h.getAttribute("data-swiper-slide-index") * 1 === g)[0].column
            } else l = n.getSlideIndexByData(o);
            const a = r ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length,
                {
                    centeredSlides: u
                } = n.params;
            let d = n.params.slidesPerView;
            d === "auto" ? d = n.slidesPerViewDynamic() : (d = Math.ceil(parseFloat(n.params.slidesPerView, 10)), u && d % 2 === 0 && (d = d + 1));
            let f = a - l < d;
            if (u && (f = f || l < Math.ceil(d / 2)), s && u && n.params.slidesPerView !== "auto" && !r && (f = !1), f) {
                const g = u ? l < n.activeIndex ? "prev" : "next" : l - n.activeIndex - 1 < n.params.slidesPerView ? "next" : "prev";
                n.loopFix({
                    direction: g,
                    slideTo: !0,
                    activeSlideIndex: g === "next" ? l + 1 : l - a + 1,
                    slideRealIndex: g === "next" ? n.realIndex : void 0
                })
            }
            if (r) {
                const g = o * n.params.grid.rows;
                o = n.slides.filter(h => h.getAttribute("data-swiper-slide-index") * 1 === g)[0].column
            } else o = n.getSlideIndexByData(o)
        }
    return requestAnimationFrame(() => {
        n.slideTo(o, e, i, s)
    }), n
}

function _t(t, e, i) {
    e === void 0 && (e = !0);
    const s = this,
        {
            enabled: n,
            params: r,
            animating: o
        } = s;
    if (!n || s.destroyed) return s;
    typeof t > "u" && (t = s.params.speed);
    let l = r.slidesPerGroup;
    r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (l = Math.max(s.slidesPerViewDynamic("current", !0), 1));
    const a = s.activeIndex < r.slidesPerGroupSkip ? 1 : l,
        u = s.virtual && r.virtual.enabled;
    if (r.loop) {
        if (o && !u && r.loopPreventsSliding) return !1;
        if (s.loopFix({
                direction: "next"
            }), s._clientLeft = s.wrapperEl.clientLeft, s.activeIndex === s.slides.length - 1 && r.cssMode) return requestAnimationFrame(() => {
            s.slideTo(s.activeIndex + a, t, e, i)
        }), !0
    }
    return r.rewind && s.isEnd ? s.slideTo(0, t, e, i) : s.slideTo(s.activeIndex + a, t, e, i)
}

function Gt(t, e, i) {
    e === void 0 && (e = !0);
    const s = this,
        {
            params: n,
            snapGrid: r,
            slidesGrid: o,
            rtlTranslate: l,
            enabled: a,
            animating: u
        } = s;
    if (!a || s.destroyed) return s;
    typeof t > "u" && (t = s.params.speed);
    const d = s.virtual && n.virtual.enabled;
    if (n.loop) {
        if (u && !d && n.loopPreventsSliding) return !1;
        s.loopFix({
            direction: "prev"
        }), s._clientLeft = s.wrapperEl.clientLeft
    }
    const f = l ? s.translate : -s.translate;

    function g(w) {
        return w < 0 ? -Math.floor(Math.abs(w)) : Math.floor(w)
    }
    const h = g(f),
        m = r.map(w => g(w));
    let v = r[m.indexOf(h) - 1];
    if (typeof v > "u" && n.cssMode) {
        let w;
        r.forEach((c, p) => {
            h >= c && (w = p)
        }), typeof w < "u" && (v = r[w > 0 ? w - 1 : w])
    }
    let b = 0;
    if (typeof v < "u" && (b = o.indexOf(v), b < 0 && (b = s.activeIndex - 1), n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (b = b - s.slidesPerViewDynamic("previous", !0) + 1, b = Math.max(b, 0))), n.rewind && s.isBeginning) {
        const w = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
        return s.slideTo(w, t, e, i)
    } else if (n.loop && s.activeIndex === 0 && n.cssMode) return requestAnimationFrame(() => {
        s.slideTo(b, t, e, i)
    }), !0;
    return s.slideTo(b, t, e, i)
}

function Nt(t, e, i) {
    e === void 0 && (e = !0);
    const s = this;
    if (!s.destroyed) return typeof t > "u" && (t = s.params.speed), s.slideTo(s.activeIndex, t, e, i)
}

function Vt(t, e, i, s) {
    e === void 0 && (e = !0), s === void 0 && (s = .5);
    const n = this;
    if (n.destroyed) return;
    typeof t > "u" && (t = n.params.speed);
    let r = n.activeIndex;
    const o = Math.min(n.params.slidesPerGroupSkip, r),
        l = o + Math.floor((r - o) / n.params.slidesPerGroup),
        a = n.rtlTranslate ? n.translate : -n.translate;
    if (a >= n.snapGrid[l]) {
        const u = n.snapGrid[l],
            d = n.snapGrid[l + 1];
        a - u > (d - u) * s && (r += n.params.slidesPerGroup)
    } else {
        const u = n.snapGrid[l - 1],
            d = n.snapGrid[l];
        a - u <= (d - u) * s && (r -= n.params.slidesPerGroup)
    }
    return r = Math.max(r, 0), r = Math.min(r, n.slidesGrid.length - 1), n.slideTo(r, t, e, i)
}

function Ft() {
    const t = this;
    if (t.destroyed) return;
    const {
        params: e,
        slidesEl: i
    } = t, s = e.slidesPerView === "auto" ? t.slidesPerViewDynamic() : e.slidesPerView;
    let n = t.clickedIndex,
        r;
    const o = t.isElement ? "swiper-slide" : ".".concat(e.slideClass);
    if (e.loop) {
        if (t.animating) return;
        r = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? n < t.loopedSlides - s / 2 || n > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), n = t.getSlideIndex(k(i, "".concat(o, '[data-swiper-slide-index="').concat(r, '"]'))[0]), pe(() => {
            t.slideTo(n)
        })) : t.slideTo(n) : n > t.slides.length - s ? (t.loopFix(), n = t.getSlideIndex(k(i, "".concat(o, '[data-swiper-slide-index="').concat(r, '"]'))[0]), pe(() => {
            t.slideTo(n)
        })) : t.slideTo(n)
    } else t.slideTo(n)
}
var kt = {
    slideTo: Dt,
    slideToLoop: $t,
    slideNext: _t,
    slidePrev: Gt,
    slideReset: Nt,
    slideToClosest: Vt,
    slideToClickedSlide: Ft
};

function Rt(t) {
    const e = this,
        {
            params: i,
            slidesEl: s
        } = e;
    if (!i.loop || e.virtual && e.params.virtual.enabled) return;
    const n = () => {
            k(s, ".".concat(i.slideClass, ", swiper-slide")).forEach((f, g) => {
                f.setAttribute("data-swiper-slide-index", g)
            })
        },
        r = e.grid && i.grid && i.grid.rows > 1,
        o = i.slidesPerGroup * (r ? i.grid.rows : 1),
        l = e.slides.length % o !== 0,
        a = r && e.slides.length % i.grid.rows !== 0,
        u = d => {
            for (let f = 0; f < d; f += 1) {
                const g = e.isElement ? K("swiper-slide", [i.slideBlankClass]) : K("div", [i.slideClass, i.slideBlankClass]);
                e.slidesEl.append(g)
            }
        };
    if (l) {
        if (i.loopAddBlankSlides) {
            const d = o - e.slides.length % o;
            u(d), e.recalcSlides(), e.updateSlides()
        } else ie("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        n()
    } else if (a) {
        if (i.loopAddBlankSlides) {
            const d = i.grid.rows - e.slides.length % i.grid.rows;
            u(d), e.recalcSlides(), e.updateSlides()
        } else ie("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        n()
    } else n();
    e.loopFix({
        slideRealIndex: t,
        direction: i.centeredSlides ? void 0 : "next"
    })
}

function Ht(t) {
    let {
        slideRealIndex: e,
        slideTo: i = !0,
        direction: s,
        setTranslate: n,
        activeSlideIndex: r,
        byController: o,
        byMousewheel: l
    } = t === void 0 ? {} : t;
    const a = this;
    if (!a.params.loop) return;
    a.emit("beforeLoopFix");
    const {
        slides: u,
        allowSlidePrev: d,
        allowSlideNext: f,
        slidesEl: g,
        params: h
    } = a, {
        centeredSlides: m
    } = h;
    if (a.allowSlidePrev = !0, a.allowSlideNext = !0, a.virtual && h.virtual.enabled) {
        i && (!h.centeredSlides && a.snapIndex === 0 ? a.slideTo(a.virtual.slides.length, 0, !1, !0) : h.centeredSlides && a.snapIndex < h.slidesPerView ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0) : a.snapIndex === a.snapGrid.length - 1 && a.slideTo(a.virtual.slidesBefore, 0, !1, !0)), a.allowSlidePrev = d, a.allowSlideNext = f, a.emit("loopFix");
        return
    }
    let v = h.slidesPerView;
    v === "auto" ? v = a.slidesPerViewDynamic() : (v = Math.ceil(parseFloat(h.slidesPerView, 10)), m && v % 2 === 0 && (v = v + 1));
    const b = h.slidesPerGroupAuto ? v : h.slidesPerGroup;
    let w = b;
    w % b !== 0 && (w += b - w % b), w += h.loopAdditionalSlides, a.loopedSlides = w;
    const c = a.grid && h.grid && h.grid.rows > 1;
    u.length < v + w ? ie("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : c && h.grid.fill === "row" && ie("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const p = [],
        S = [];
    let y = a.activeIndex;
    typeof r > "u" ? r = a.getSlideIndex(u.filter(C => C.classList.contains(h.slideActiveClass))[0]) : y = r;
    const P = s === "next" || !s,
        O = s === "prev" || !s;
    let M = 0,
        T = 0;
    const x = c ? Math.ceil(u.length / h.grid.rows) : u.length,
        L = (c ? u[r].column : r) + (m && typeof n > "u" ? -v / 2 + .5 : 0);
    if (L < w) {
        M = Math.max(w - L, b);
        for (let C = 0; C < w - L; C += 1) {
            const I = C - Math.floor(C / x) * x;
            if (c) {
                const A = x - I - 1;
                for (let B = u.length - 1; B >= 0; B -= 1) u[B].column === A && p.push(B)
            } else p.push(x - I - 1)
        }
    } else if (L + v > x - w) {
        T = Math.max(L - (x - w * 2), b);
        for (let C = 0; C < T; C += 1) {
            const I = C - Math.floor(C / x) * x;
            c ? u.forEach((A, B) => {
                A.column === I && S.push(B)
            }) : S.push(I)
        }
    }
    if (a.__preventObserver__ = !0, requestAnimationFrame(() => {
            a.__preventObserver__ = !1
        }), O && p.forEach(C => {
            u[C].swiperLoopMoveDOM = !0, g.prepend(u[C]), u[C].swiperLoopMoveDOM = !1
        }), P && S.forEach(C => {
            u[C].swiperLoopMoveDOM = !0, g.append(u[C]), u[C].swiperLoopMoveDOM = !1
        }), a.recalcSlides(), h.slidesPerView === "auto" ? a.updateSlides() : c && (p.length > 0 && O || S.length > 0 && P) && a.slides.forEach((C, I) => {
            a.grid.updateSlide(I, C, a.slides)
        }), h.watchSlidesProgress && a.updateSlidesOffset(), i) {
        if (p.length > 0 && O) {
            if (typeof e > "u") {
                const C = a.slidesGrid[y],
                    A = a.slidesGrid[y + M] - C;
                l ? a.setTranslate(a.translate - A) : (a.slideTo(y + Math.ceil(M), 0, !1, !0), n && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - A, a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - A))
            } else if (n) {
                const C = c ? p.length / h.grid.rows : p.length;
                a.slideTo(a.activeIndex + C, 0, !1, !0), a.touchEventsData.currentTranslate = a.translate
            }
        } else if (S.length > 0 && P)
            if (typeof e > "u") {
                const C = a.slidesGrid[y],
                    A = a.slidesGrid[y - T] - C;
                l ? a.setTranslate(a.translate - A) : (a.slideTo(y - T, 0, !1, !0), n && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - A, a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - A))
            } else {
                const C = c ? S.length / h.grid.rows : S.length;
                a.slideTo(a.activeIndex - C, 0, !1, !0)
            }
    }
    if (a.allowSlidePrev = d, a.allowSlideNext = f, a.controller && a.controller.control && !o) {
        const C = {
            slideRealIndex: e,
            direction: s,
            setTranslate: n,
            activeSlideIndex: r,
            byController: !0
        };
        Array.isArray(a.controller.control) ? a.controller.control.forEach(I => {
            !I.destroyed && I.params.loop && I.loopFix({ ...C,
                slideTo: I.params.slidesPerView === h.slidesPerView ? i : !1
            })
        }) : a.controller.control instanceof a.constructor && a.controller.control.params.loop && a.controller.control.loopFix({ ...C,
            slideTo: a.controller.control.params.slidesPerView === h.slidesPerView ? i : !1
        })
    }
    a.emit("loopFix")
}

function jt() {
    const t = this,
        {
            params: e,
            slidesEl: i
        } = t;
    if (!e.loop || t.virtual && t.params.virtual.enabled) return;
    t.recalcSlides();
    const s = [];
    t.slides.forEach(n => {
        const r = typeof n.swiperSlideIndex > "u" ? n.getAttribute("data-swiper-slide-index") * 1 : n.swiperSlideIndex;
        s[r] = n
    }), t.slides.forEach(n => {
        n.removeAttribute("data-swiper-slide-index")
    }), s.forEach(n => {
        i.append(n)
    }), t.recalcSlides(), t.slideTo(t.realIndex, 0)
}
var qt = {
    loopCreate: Rt,
    loopFix: Ht,
    loopDestroy: jt
};

function Wt(t) {
    const e = this;
    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
    const i = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0), i.style.cursor = "move", i.style.cursor = t ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
        e.__preventObserver__ = !1
    })
}

function Yt() {
    const t = this;
    t.params.watchOverflow && t.isLocked || t.params.cssMode || (t.isElement && (t.__preventObserver__ = !0), t[t.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", t.isElement && requestAnimationFrame(() => {
        t.__preventObserver__ = !1
    }))
}
var Xt = {
    setGrabCursor: Wt,
    unsetGrabCursor: Yt
};

function Ut(t, e) {
    e === void 0 && (e = this);

    function i(s) {
        if (!s || s === H() || s === N()) return null;
        s.assignedSlot && (s = s.assignedSlot);
        const n = s.closest(t);
        return !n && !s.getRootNode ? null : n || i(s.getRootNode().host)
    }
    return i(e)
}

function Te(t, e, i) {
    const s = N(),
        {
            params: n
        } = t,
        r = n.edgeSwipeDetection,
        o = n.edgeSwipeThreshold;
    return r && (i <= o || i >= s.innerWidth - o) ? r === "prevent" ? (e.preventDefault(), !0) : !1 : !0
}

function Kt(t) {
    const e = this,
        i = H();
    let s = t;
    s.originalEvent && (s = s.originalEvent);
    const n = e.touchEventsData;
    if (s.type === "pointerdown") {
        if (n.pointerId !== null && n.pointerId !== s.pointerId) return;
        n.pointerId = s.pointerId
    } else s.type === "touchstart" && s.targetTouches.length === 1 && (n.touchId = s.targetTouches[0].identifier);
    if (s.type === "touchstart") {
        Te(e, s, s.targetTouches[0].pageX);
        return
    }
    const {
        params: r,
        touches: o,
        enabled: l
    } = e;
    if (!l || !r.simulateTouch && s.pointerType === "mouse" || e.animating && r.preventInteractionOnTransition) return;
    !e.animating && r.cssMode && r.loop && e.loopFix();
    let a = s.target;
    if (r.touchEventsTarget === "wrapper" && !tt(a, e.wrapperEl) || "which" in s && s.which === 3 || "button" in s && s.button > 0 || n.isTouched && n.isMoved) return;
    const u = !!r.noSwipingClass && r.noSwipingClass !== "",
        d = s.composedPath ? s.composedPath() : s.path;
    u && s.target && s.target.shadowRoot && d && (a = d[0]);
    const f = r.noSwipingSelector ? r.noSwipingSelector : ".".concat(r.noSwipingClass),
        g = !!(s.target && s.target.shadowRoot);
    if (r.noSwiping && (g ? Ut(f, a) : a.closest(f))) {
        e.allowClick = !0;
        return
    }
    if (r.swipeHandler && !a.closest(r.swipeHandler)) return;
    o.currentX = s.pageX, o.currentY = s.pageY;
    const h = o.currentX,
        m = o.currentY;
    if (!Te(e, s, h)) return;
    Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }), o.startX = h, o.startY = m, n.touchStartTime = te(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, r.threshold > 0 && (n.allowThresholdMove = !1);
    let v = !0;
    a.matches(n.focusableElements) && (v = !1, a.nodeName === "SELECT" && (n.isTouched = !1)), i.activeElement && i.activeElement.matches(n.focusableElements) && i.activeElement !== a && (s.pointerType === "mouse" || s.pointerType !== "mouse" && !a.matches(n.focusableElements)) && i.activeElement.blur();
    const b = v && e.allowTouchMove && r.touchStartPreventDefault;
    (r.touchStartForcePreventDefault || b) && !a.isContentEditable && s.preventDefault(), r.freeMode && r.freeMode.enabled && e.freeMode && e.animating && !r.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", s)
}

function Zt(t) {
    const e = H(),
        i = this,
        s = i.touchEventsData,
        {
            params: n,
            touches: r,
            rtlTranslate: o,
            enabled: l
        } = i;
    if (!l || !n.simulateTouch && t.pointerType === "mouse") return;
    let a = t;
    if (a.originalEvent && (a = a.originalEvent), a.type === "pointermove" && (s.touchId !== null || a.pointerId !== s.pointerId)) return;
    let u;
    if (a.type === "touchmove") {
        if (u = [...a.changedTouches].filter(P => P.identifier === s.touchId)[0], !u || u.identifier !== s.touchId) return
    } else u = a;
    if (!s.isTouched) {
        s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", a);
        return
    }
    const d = u.pageX,
        f = u.pageY;
    if (a.preventedByNestedSwiper) {
        r.startX = d, r.startY = f;
        return
    }
    if (!i.allowTouchMove) {
        a.target.matches(s.focusableElements) || (i.allowClick = !1), s.isTouched && (Object.assign(r, {
            startX: d,
            startY: f,
            currentX: d,
            currentY: f
        }), s.touchStartTime = te());
        return
    }
    if (n.touchReleaseOnEdges && !n.loop) {
        if (i.isVertical()) {
            if (f < r.startY && i.translate <= i.maxTranslate() || f > r.startY && i.translate >= i.minTranslate()) {
                s.isTouched = !1, s.isMoved = !1;
                return
            }
        } else if (d < r.startX && i.translate <= i.maxTranslate() || d > r.startX && i.translate >= i.minTranslate()) return
    }
    if (e.activeElement && e.activeElement.matches(s.focusableElements) && e.activeElement !== a.target && a.pointerType !== "mouse" && e.activeElement.blur(), e.activeElement && a.target === e.activeElement && a.target.matches(s.focusableElements)) {
        s.isMoved = !0, i.allowClick = !1;
        return
    }
    s.allowTouchCallbacks && i.emit("touchMove", a), r.previousX = r.currentX, r.previousY = r.currentY, r.currentX = d, r.currentY = f;
    const g = r.currentX - r.startX,
        h = r.currentY - r.startY;
    if (i.params.threshold && Math.sqrt(g ** 2 + h ** 2) < i.params.threshold) return;
    if (typeof s.isScrolling > "u") {
        let P;
        i.isHorizontal() && r.currentY === r.startY || i.isVertical() && r.currentX === r.startX ? s.isScrolling = !1 : g * g + h * h >= 25 && (P = Math.atan2(Math.abs(h), Math.abs(g)) * 180 / Math.PI, s.isScrolling = i.isHorizontal() ? P > n.touchAngle : 90 - P > n.touchAngle)
    }
    if (s.isScrolling && i.emit("touchMoveOpposite", a), typeof s.startMoving > "u" && (r.currentX !== r.startX || r.currentY !== r.startY) && (s.startMoving = !0), s.isScrolling || a.type === "touchmove" && s.preventTouchMoveFromPointerMove) {
        s.isTouched = !1;
        return
    }
    if (!s.startMoving) return;
    i.allowClick = !1, !n.cssMode && a.cancelable && a.preventDefault(), n.touchMoveStopPropagation && !n.nested && a.stopPropagation();
    let m = i.isHorizontal() ? g : h,
        v = i.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
    n.oneWayMovement && (m = Math.abs(m) * (o ? 1 : -1), v = Math.abs(v) * (o ? 1 : -1)), r.diff = m, m *= n.touchRatio, o && (m = -m, v = -v);
    const b = i.touchesDirection;
    i.swipeDirection = m > 0 ? "prev" : "next", i.touchesDirection = v > 0 ? "prev" : "next";
    const w = i.params.loop && !n.cssMode,
        c = i.touchesDirection === "next" && i.allowSlideNext || i.touchesDirection === "prev" && i.allowSlidePrev;
    if (!s.isMoved) {
        if (w && c && i.loopFix({
                direction: i.swipeDirection
            }), s.startTranslate = i.getTranslate(), i.setTransition(0), i.animating) {
            const P = new window.CustomEvent("transitionend", {
                bubbles: !0,
                cancelable: !0,
                detail: {
                    bySwiperTouchMove: !0
                }
            });
            i.wrapperEl.dispatchEvent(P)
        }
        s.allowMomentumBounce = !1, n.grabCursor && (i.allowSlideNext === !0 || i.allowSlidePrev === !0) && i.setGrabCursor(!0), i.emit("sliderFirstMove", a)
    }
    let p;
    if (new Date().getTime(), s.isMoved && s.allowThresholdMove && b !== i.touchesDirection && w && c && Math.abs(m) >= 1) {
        Object.assign(r, {
            startX: d,
            startY: f,
            currentX: d,
            currentY: f,
            startTranslate: s.currentTranslate
        }), s.loopSwapReset = !0, s.startTranslate = s.currentTranslate;
        return
    }
    i.emit("sliderMove", a), s.isMoved = !0, s.currentTranslate = m + s.startTranslate;
    let S = !0,
        y = n.resistanceRatio;
    if (n.touchReleaseOnEdges && (y = 0), m > 0 ? (w && c && !p && s.allowThresholdMove && s.currentTranslate > (n.centeredSlides ? i.minTranslate() - i.slidesSizesGrid[i.activeIndex + 1] - (n.slidesPerView !== "auto" && i.slides.length - n.slidesPerView >= 2 ? i.slidesSizesGrid[i.activeIndex + 1] + i.params.spaceBetween : 0) - i.params.spaceBetween : i.minTranslate()) && i.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
        }), s.currentTranslate > i.minTranslate() && (S = !1, n.resistance && (s.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + s.startTranslate + m) ** y))) : m < 0 && (w && c && !p && s.allowThresholdMove && s.currentTranslate < (n.centeredSlides ? i.maxTranslate() + i.slidesSizesGrid[i.slidesSizesGrid.length - 1] + i.params.spaceBetween + (n.slidesPerView !== "auto" && i.slides.length - n.slidesPerView >= 2 ? i.slidesSizesGrid[i.slidesSizesGrid.length - 1] + i.params.spaceBetween : 0) : i.maxTranslate()) && i.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: i.slides.length - (n.slidesPerView === "auto" ? i.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10)))
        }), s.currentTranslate < i.maxTranslate() && (S = !1, n.resistance && (s.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - s.startTranslate - m) ** y))), S && (a.preventedByNestedSwiper = !0), !i.allowSlideNext && i.swipeDirection === "next" && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && i.swipeDirection === "prev" && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && !i.allowSlideNext && (s.currentTranslate = s.startTranslate), n.threshold > 0)
        if (Math.abs(m) > n.threshold || s.allowThresholdMove) {
            if (!s.allowThresholdMove) {
                s.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, s.currentTranslate = s.startTranslate, r.diff = i.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
                return
            }
        } else {
            s.currentTranslate = s.startTranslate;
            return
        }!n.followFinger || n.cssMode || ((n.freeMode && n.freeMode.enabled && i.freeMode || n.watchSlidesProgress) && (i.updateActiveIndex(), i.updateSlidesClasses()), n.freeMode && n.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(), i.updateProgress(s.currentTranslate), i.setTranslate(s.currentTranslate))
}

function Jt(t) {
    const e = this,
        i = e.touchEventsData;
    let s = t;
    s.originalEvent && (s = s.originalEvent);
    let n;
    if (s.type === "touchend" || s.type === "touchcancel") {
        if (n = [...s.changedTouches].filter(y => y.identifier === i.touchId)[0], !n || n.identifier !== i.touchId) return
    } else {
        if (i.touchId !== null || s.pointerId !== i.pointerId) return;
        n = s
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(s.type) && !(["pointercancel", "contextmenu"].includes(s.type) && (e.browser.isSafari || e.browser.isWebView))) return;
    i.pointerId = null, i.touchId = null;
    const {
        params: o,
        touches: l,
        rtlTranslate: a,
        slidesGrid: u,
        enabled: d
    } = e;
    if (!d || !o.simulateTouch && s.pointerType === "mouse") return;
    if (i.allowTouchCallbacks && e.emit("touchEnd", s), i.allowTouchCallbacks = !1, !i.isTouched) {
        i.isMoved && o.grabCursor && e.setGrabCursor(!1), i.isMoved = !1, i.startMoving = !1;
        return
    }
    o.grabCursor && i.isMoved && i.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
    const f = te(),
        g = f - i.touchStartTime;
    if (e.allowClick) {
        const y = s.path || s.composedPath && s.composedPath();
        e.updateClickedSlide(y && y[0] || s.target, y), e.emit("tap click", s), g < 300 && f - i.lastClickTime < 300 && e.emit("doubleTap doubleClick", s)
    }
    if (i.lastClickTime = te(), pe(() => {
            e.destroyed || (e.allowClick = !0)
        }), !i.isTouched || !i.isMoved || !e.swipeDirection || l.diff === 0 && !i.loopSwapReset || i.currentTranslate === i.startTranslate && !i.loopSwapReset) {
        i.isTouched = !1, i.isMoved = !1, i.startMoving = !1;
        return
    }
    i.isTouched = !1, i.isMoved = !1, i.startMoving = !1;
    let h;
    if (o.followFinger ? h = a ? e.translate : -e.translate : h = -i.currentTranslate, o.cssMode) return;
    if (o.freeMode && o.freeMode.enabled) {
        e.freeMode.onTouchEnd({
            currentPos: h
        });
        return
    }
    const m = h >= -e.maxTranslate() && !e.params.loop;
    let v = 0,
        b = e.slidesSizesGrid[0];
    for (let y = 0; y < u.length; y += y < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
        const P = y < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
        typeof u[y + P] < "u" ? (m || h >= u[y] && h < u[y + P]) && (v = y, b = u[y + P] - u[y]) : (m || h >= u[y]) && (v = y, b = u[u.length - 1] - u[u.length - 2])
    }
    let w = null,
        c = null;
    o.rewind && (e.isBeginning ? c = o.virtual && o.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (w = 0));
    const p = (h - u[v]) / b,
        S = v < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    if (g > o.longSwipesMs) {
        if (!o.longSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.swipeDirection === "next" && (p >= o.longSwipesRatio ? e.slideTo(o.rewind && e.isEnd ? w : v + S) : e.slideTo(v)), e.swipeDirection === "prev" && (p > 1 - o.longSwipesRatio ? e.slideTo(v + S) : c !== null && p < 0 && Math.abs(p) > o.longSwipesRatio ? e.slideTo(c) : e.slideTo(v))
    } else {
        if (!o.shortSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.navigation && (s.target === e.navigation.nextEl || s.target === e.navigation.prevEl) ? s.target === e.navigation.nextEl ? e.slideTo(v + S) : e.slideTo(v) : (e.swipeDirection === "next" && e.slideTo(w !== null ? w : v + S), e.swipeDirection === "prev" && e.slideTo(c !== null ? c : v))
    }
}

function xe() {
    const t = this,
        {
            params: e,
            el: i
        } = t;
    if (i && i.offsetWidth === 0) return;
    e.breakpoints && t.setBreakpoint();
    const {
        allowSlideNext: s,
        allowSlidePrev: n,
        snapGrid: r
    } = t, o = t.virtual && t.params.virtual.enabled;
    t.allowSlideNext = !0, t.allowSlidePrev = !0, t.updateSize(), t.updateSlides(), t.updateSlidesClasses();
    const l = o && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) && t.isEnd && !t.isBeginning && !t.params.centeredSlides && !l ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.params.loop && !o ? t.slideToLoop(t.realIndex, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0), t.autoplay && t.autoplay.running && t.autoplay.paused && (clearTimeout(t.autoplay.resizeTimeout), t.autoplay.resizeTimeout = setTimeout(() => {
        t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.resume()
    }, 500)), t.allowSlidePrev = n, t.allowSlideNext = s, t.params.watchOverflow && r !== t.snapGrid && t.checkOverflow()
}

function Qt(t) {
    const e = this;
    e.enabled && (e.allowClick || (e.params.preventClicks && t.preventDefault(), e.params.preventClicksPropagation && e.animating && (t.stopPropagation(), t.stopImmediatePropagation())))
}

function ei() {
    const t = this,
        {
            wrapperEl: e,
            rtlTranslate: i,
            enabled: s
        } = t;
    if (!s) return;
    t.previousTranslate = t.translate, t.isHorizontal() ? t.translate = -e.scrollLeft : t.translate = -e.scrollTop, t.translate === 0 && (t.translate = 0), t.updateActiveIndex(), t.updateSlidesClasses();
    let n;
    const r = t.maxTranslate() - t.minTranslate();
    r === 0 ? n = 0 : n = (t.translate - t.minTranslate()) / r, n !== t.progress && t.updateProgress(i ? -t.translate : t.translate), t.emit("setTranslate", t.translate, !1)
}

function ti(t) {
    const e = this;
    ee(e, t.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update()
}

function ii() {
    const t = this;
    t.documentTouchHandlerProceeded || (t.documentTouchHandlerProceeded = !0, t.params.touchReleaseOnEdges && (t.el.style.touchAction = "auto"))
}
const _e = (t, e) => {
    const i = H(),
        {
            params: s,
            el: n,
            wrapperEl: r,
            device: o
        } = t,
        l = !!s.nested,
        a = e === "on" ? "addEventListener" : "removeEventListener",
        u = e;
    !n || typeof n == "string" || (i[a]("touchstart", t.onDocumentTouchStart, {
        passive: !1,
        capture: l
    }), n[a]("touchstart", t.onTouchStart, {
        passive: !1
    }), n[a]("pointerdown", t.onTouchStart, {
        passive: !1
    }), i[a]("touchmove", t.onTouchMove, {
        passive: !1,
        capture: l
    }), i[a]("pointermove", t.onTouchMove, {
        passive: !1,
        capture: l
    }), i[a]("touchend", t.onTouchEnd, {
        passive: !0
    }), i[a]("pointerup", t.onTouchEnd, {
        passive: !0
    }), i[a]("pointercancel", t.onTouchEnd, {
        passive: !0
    }), i[a]("touchcancel", t.onTouchEnd, {
        passive: !0
    }), i[a]("pointerout", t.onTouchEnd, {
        passive: !0
    }), i[a]("pointerleave", t.onTouchEnd, {
        passive: !0
    }), i[a]("contextmenu", t.onTouchEnd, {
        passive: !0
    }), (s.preventClicks || s.preventClicksPropagation) && n[a]("click", t.onClick, !0), s.cssMode && r[a]("scroll", t.onScroll), s.updateOnWindowResize ? t[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", xe, !0) : t[u]("observerUpdate", xe, !0), n[a]("load", t.onLoad, {
        capture: !0
    }))
};

function si() {
    const t = this,
        {
            params: e
        } = t;
    t.onTouchStart = Kt.bind(t), t.onTouchMove = Zt.bind(t), t.onTouchEnd = Jt.bind(t), t.onDocumentTouchStart = ii.bind(t), e.cssMode && (t.onScroll = ei.bind(t)), t.onClick = Qt.bind(t), t.onLoad = ti.bind(t), _e(t, "on")
}

function ni() {
    _e(this, "off")
}
var ri = {
    attachEvents: si,
    detachEvents: ni
};
const Ee = (t, e) => t.grid && e.grid && e.grid.rows > 1;

function ai() {
    const t = this,
        {
            realIndex: e,
            initialized: i,
            params: s,
            el: n
        } = t,
        r = s.breakpoints;
    if (!r || r && Object.keys(r).length === 0) return;
    const o = t.getBreakpoint(r, t.params.breakpointsBase, t.el);
    if (!o || t.currentBreakpoint === o) return;
    const a = (o in r ? r[o] : void 0) || t.originalParams,
        u = Ee(t, s),
        d = Ee(t, a),
        f = t.params.grabCursor,
        g = a.grabCursor,
        h = s.enabled;
    u && !d ? (n.classList.remove("".concat(s.containerModifierClass, "grid"), "".concat(s.containerModifierClass, "grid-column")), t.emitContainerClasses()) : !u && d && (n.classList.add("".concat(s.containerModifierClass, "grid")), (a.grid.fill && a.grid.fill === "column" || !a.grid.fill && s.grid.fill === "column") && n.classList.add("".concat(s.containerModifierClass, "grid-column")), t.emitContainerClasses()), f && !g ? t.unsetGrabCursor() : !f && g && t.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach(p => {
        if (typeof a[p] > "u") return;
        const S = s[p] && s[p].enabled,
            y = a[p] && a[p].enabled;
        S && !y && t[p].disable(), !S && y && t[p].enable()
    });
    const m = a.direction && a.direction !== s.direction,
        v = s.loop && (a.slidesPerView !== s.slidesPerView || m),
        b = s.loop;
    m && i && t.changeDirection(), G(t.params, a);
    const w = t.params.enabled,
        c = t.params.loop;
    Object.assign(t, {
        allowTouchMove: t.params.allowTouchMove,
        allowSlideNext: t.params.allowSlideNext,
        allowSlidePrev: t.params.allowSlidePrev
    }), h && !w ? t.disable() : !h && w && t.enable(), t.currentBreakpoint = o, t.emit("_beforeBreakpoint", a), i && (v ? (t.loopDestroy(), t.loopCreate(e), t.updateSlides()) : !b && c ? (t.loopCreate(e), t.updateSlides()) : b && !c && t.loopDestroy()), t.emit("breakpoint", a)
}

function li(t, e, i) {
    if (e === void 0 && (e = "window"), !t || e === "container" && !i) return;
    let s = !1;
    const n = N(),
        r = e === "window" ? n.innerHeight : i.clientHeight,
        o = Object.keys(t).map(l => {
            if (typeof l == "string" && l.indexOf("@") === 0) {
                const a = parseFloat(l.substr(1));
                return {
                    value: r * a,
                    point: l
                }
            }
            return {
                value: l,
                point: l
            }
        });
    o.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10));
    for (let l = 0; l < o.length; l += 1) {
        const {
            point: a,
            value: u
        } = o[l];
        e === "window" ? n.matchMedia("(min-width: ".concat(u, "px)")).matches && (s = a) : u <= i.clientWidth && (s = a)
    }
    return s || "max"
}
var oi = {
    setBreakpoint: ai,
    getBreakpoint: li
};

function di(t, e) {
    const i = [];
    return t.forEach(s => {
        typeof s == "object" ? Object.keys(s).forEach(n => {
            s[n] && i.push(e + n)
        }) : typeof s == "string" && i.push(e + s)
    }), i
}

function fi() {
    const t = this,
        {
            classNames: e,
            params: i,
            rtl: s,
            el: n,
            device: r
        } = t,
        o = di(["initialized", i.direction, {
            "free-mode": t.params.freeMode && i.freeMode.enabled
        }, {
            autoheight: i.autoHeight
        }, {
            rtl: s
        }, {
            grid: i.grid && i.grid.rows > 1
        }, {
            "grid-column": i.grid && i.grid.rows > 1 && i.grid.fill === "column"
        }, {
            android: r.android
        }, {
            ios: r.ios
        }, {
            "css-mode": i.cssMode
        }, {
            centered: i.cssMode && i.centeredSlides
        }, {
            "watch-progress": i.watchSlidesProgress
        }], i.containerModifierClass);
    e.push(...o), n.classList.add(...e), t.emitContainerClasses()
}

function ui() {
    const t = this,
        {
            el: e,
            classNames: i
        } = t;
    !e || typeof e == "string" || (e.classList.remove(...i), t.emitContainerClasses())
}
var ci = {
    addClasses: fi,
    removeClasses: ui
};

function pi() {
    const t = this,
        {
            isLocked: e,
            params: i
        } = t,
        {
            slidesOffsetBefore: s
        } = i;
    if (s) {
        const n = t.slides.length - 1,
            r = t.slidesGrid[n] + t.slidesSizesGrid[n] + s * 2;
        t.isLocked = t.size > r
    } else t.isLocked = t.snapGrid.length === 1;
    i.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked), i.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked), e && e !== t.isLocked && (t.isEnd = !1), e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock")
}
var mi = {
        checkOverflow: pi
    },
    ge = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

function hi(t, e) {
    return function(s) {
        s === void 0 && (s = {});
        const n = Object.keys(s)[0],
            r = s[n];
        if (typeof r != "object" || r === null) {
            G(e, s);
            return
        }
        if (t[n] === !0 && (t[n] = {
                enabled: !0
            }), n === "navigation" && t[n] && t[n].enabled && !t[n].prevEl && !t[n].nextEl && (t[n].auto = !0), ["pagination", "scrollbar"].indexOf(n) >= 0 && t[n] && t[n].enabled && !t[n].el && (t[n].auto = !0), !(n in t && "enabled" in r)) {
            G(e, s);
            return
        }
        typeof t[n] == "object" && !("enabled" in t[n]) && (t[n].enabled = !0), t[n] || (t[n] = {
            enabled: !1
        }), G(e, s)
    }
}
const fe = {
        eventsEmitter: ct,
        update: xt,
        translate: Lt,
        transition: Bt,
        slide: kt,
        loop: qt,
        grabCursor: Xt,
        events: ri,
        breakpoints: oi,
        checkOverflow: mi,
        classes: ci
    },
    ue = {};
let Se = class R {
    constructor() {
        let e, i;
        for (var s = arguments.length, n = new Array(s), r = 0; r < s; r++) n[r] = arguments[r];
        n.length === 1 && n[0].constructor && Object.prototype.toString.call(n[0]).slice(8, -1) === "Object" ? i = n[0] : [e, i] = n, i || (i = {}), i = G({}, i), e && !i.el && (i.el = e);
        const o = H();
        if (i.el && typeof i.el == "string" && o.querySelectorAll(i.el).length > 1) {
            const d = [];
            return o.querySelectorAll(i.el).forEach(f => {
                const g = G({}, i, {
                    el: f
                });
                d.push(new R(g))
            }), d
        }
        const l = this;
        l.__swiper__ = !0, l.support = Be(), l.device = De({
            userAgent: i.userAgent
        }), l.browser = dt(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], i.modules && Array.isArray(i.modules) && l.modules.push(...i.modules);
        const a = {};
        l.modules.forEach(d => {
            d({
                params: i,
                swiper: l,
                extendParams: hi(i, a),
                on: l.on.bind(l),
                once: l.once.bind(l),
                off: l.off.bind(l),
                emit: l.emit.bind(l)
            })
        });
        const u = G({}, ge, a);
        return l.params = G({}, u, ue, i), l.originalParams = G({}, l.params), l.passedParams = G({}, i), l.params && l.params.on && Object.keys(l.params.on).forEach(d => {
            l.on(d, l.params.on[d])
        }), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
            enabled: l.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
                return l.params.direction === "horizontal"
            },
            isVertical() {
                return l.params.direction === "vertical"
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: l.params.allowSlideNext,
            allowSlidePrev: l.params.allowSlidePrev,
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: l.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null
            },
            allowClick: !0,
            allowTouchMove: l.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }), l.emit("_swiper"), l.params.init && l.init(), l
    }
    getDirectionLabel(e) {
        return this.isHorizontal() ? e : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[e]
    }
    getSlideIndex(e) {
        const {
            slidesEl: i,
            params: s
        } = this, n = k(i, ".".concat(s.slideClass, ", swiper-slide")), r = se(n[0]);
        return se(e) - r
    }
    getSlideIndexByData(e) {
        return this.getSlideIndex(this.slides.filter(i => i.getAttribute("data-swiper-slide-index") * 1 === e)[0])
    }
    recalcSlides() {
        const e = this,
            {
                slidesEl: i,
                params: s
            } = e;
        e.slides = k(i, ".".concat(s.slideClass, ", swiper-slide"))
    }
    enable() {
        const e = this;
        e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
    }
    disable() {
        const e = this;
        e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
    }
    setProgress(e, i) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const n = s.minTranslate(),
            o = (s.maxTranslate() - n) * e + n;
        s.translateTo(o, typeof i > "u" ? 0 : i), s.updateActiveIndex(), s.updateSlidesClasses()
    }
    emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const i = e.el.className.split(" ").filter(s => s.indexOf("swiper") === 0 || s.indexOf(e.params.containerModifierClass) === 0);
        e.emit("_containerClasses", i.join(" "))
    }
    getSlideClasses(e) {
        const i = this;
        return i.destroyed ? "" : e.className.split(" ").filter(s => s.indexOf("swiper-slide") === 0 || s.indexOf(i.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const i = [];
        e.slides.forEach(s => {
            const n = e.getSlideClasses(s);
            i.push({
                slideEl: s,
                classNames: n
            }), e.emit("_slideClass", s, n)
        }), e.emit("_slideClasses", i)
    }
    slidesPerViewDynamic(e, i) {
        e === void 0 && (e = "current"), i === void 0 && (i = !1);
        const s = this,
            {
                params: n,
                slides: r,
                slidesGrid: o,
                slidesSizesGrid: l,
                size: a,
                activeIndex: u
            } = s;
        let d = 1;
        if (typeof n.slidesPerView == "number") return n.slidesPerView;
        if (n.centeredSlides) {
            let f = r[u] ? Math.ceil(r[u].swiperSlideSize) : 0,
                g;
            for (let h = u + 1; h < r.length; h += 1) r[h] && !g && (f += Math.ceil(r[h].swiperSlideSize), d += 1, f > a && (g = !0));
            for (let h = u - 1; h >= 0; h -= 1) r[h] && !g && (f += r[h].swiperSlideSize, d += 1, f > a && (g = !0))
        } else if (e === "current")
            for (let f = u + 1; f < r.length; f += 1)(i ? o[f] + l[f] - o[u] < a : o[f] - o[u] < a) && (d += 1);
        else
            for (let f = u - 1; f >= 0; f -= 1) o[u] - o[f] < a && (d += 1);
        return d
    }
    update() {
        const e = this;
        if (!e || e.destroyed) return;
        const {
            snapGrid: i,
            params: s
        } = e;
        s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach(o => {
            o.complete && ee(e, o)
        }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();

        function n() {
            const o = e.rtlTranslate ? e.translate * -1 : e.translate,
                l = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
            e.setTranslate(l), e.updateActiveIndex(), e.updateSlidesClasses()
        }
        let r;
        if (s.freeMode && s.freeMode.enabled && !s.cssMode) n(), s.autoHeight && e.updateAutoHeight();
        else {
            if ((s.slidesPerView === "auto" || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
                const o = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
                r = e.slideTo(o.length - 1, 0, !1, !0)
            } else r = e.slideTo(e.activeIndex, 0, !1, !0);
            r || n()
        }
        s.watchOverflow && i !== e.snapGrid && e.checkOverflow(), e.emit("update")
    }
    changeDirection(e, i) {
        i === void 0 && (i = !0);
        const s = this,
            n = s.params.direction;
        return e || (e = n === "horizontal" ? "vertical" : "horizontal"), e === n || e !== "horizontal" && e !== "vertical" || (s.el.classList.remove("".concat(s.params.containerModifierClass).concat(n)), s.el.classList.add("".concat(s.params.containerModifierClass).concat(e)), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach(r => {
            e === "vertical" ? r.style.width = "" : r.style.height = ""
        }), s.emit("changeDirection"), i && s.update()), s
    }
    changeLanguageDirection(e) {
        const i = this;
        i.rtl && e === "rtl" || !i.rtl && e === "ltr" || (i.rtl = e === "rtl", i.rtlTranslate = i.params.direction === "horizontal" && i.rtl, i.rtl ? (i.el.classList.add("".concat(i.params.containerModifierClass, "rtl")), i.el.dir = "rtl") : (i.el.classList.remove("".concat(i.params.containerModifierClass, "rtl")), i.el.dir = "ltr"), i.update())
    }
    mount(e) {
        const i = this;
        if (i.mounted) return !0;
        let s = e || i.params.el;
        if (typeof s == "string" && (s = document.querySelector(s)), !s) return !1;
        s.swiper = i, s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === i.params.swiperElementNodeName.toUpperCase() && (i.isElement = !0);
        const n = () => ".".concat((i.params.wrapperClass || "").trim().split(" ").join("."));
        let o = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(n()) : k(s, n())[0];
        return !o && i.params.createElements && (o = K("div", i.params.wrapperClass), s.append(o), k(s, ".".concat(i.params.slideClass)).forEach(l => {
            o.append(l)
        })), Object.assign(i, {
            el: s,
            wrapperEl: o,
            slidesEl: i.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : o,
            hostEl: i.isElement ? s.parentNode.host : s,
            mounted: !0,
            rtl: s.dir.toLowerCase() === "rtl" || q(s, "direction") === "rtl",
            rtlTranslate: i.params.direction === "horizontal" && (s.dir.toLowerCase() === "rtl" || q(s, "direction") === "rtl"),
            wrongRTL: q(o, "display") === "-webkit-box"
        }), !0
    }
    init(e) {
        const i = this;
        if (i.initialized || i.mount(e) === !1) return i;
        i.emit("beforeInit"), i.params.breakpoints && i.setBreakpoint(), i.addClasses(), i.updateSize(), i.updateSlides(), i.params.watchOverflow && i.checkOverflow(), i.params.grabCursor && i.enabled && i.setGrabCursor(), i.params.loop && i.virtual && i.params.virtual.enabled ? i.slideTo(i.params.initialSlide + i.virtual.slidesBefore, 0, i.params.runCallbacksOnInit, !1, !0) : i.slideTo(i.params.initialSlide, 0, i.params.runCallbacksOnInit, !1, !0), i.params.loop && i.loopCreate(), i.attachEvents();
        const n = [...i.el.querySelectorAll('[loading="lazy"]')];
        return i.isElement && n.push(...i.hostEl.querySelectorAll('[loading="lazy"]')), n.forEach(r => {
            r.complete ? ee(i, r) : r.addEventListener("load", o => {
                ee(i, o.target)
            })
        }), he(i), i.initialized = !0, he(i), i.emit("init"), i.emit("afterInit"), i
    }
    destroy(e, i) {
        e === void 0 && (e = !0), i === void 0 && (i = !0);
        const s = this,
            {
                params: n,
                el: r,
                wrapperEl: o,
                slides: l
            } = s;
        return typeof s.params > "u" || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), n.loop && s.loopDestroy(), i && (s.removeClasses(), r && typeof r != "string" && r.removeAttribute("style"), o && o.removeAttribute("style"), l && l.length && l.forEach(a => {
            a.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), a.removeAttribute("style"), a.removeAttribute("data-swiper-slide-index")
        })), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(a => {
            s.off(a)
        }), e !== !1 && (s.el && typeof s.el != "string" && (s.el.swiper = null), Ze(s)), s.destroyed = !0), null
    }
    static extendDefaults(e) {
        G(ue, e)
    }
    static get extendedDefaults() {
        return ue
    }
    static get defaults() {
        return ge
    }
    static installModule(e) {
        R.prototype.__modules__ || (R.prototype.__modules__ = []);
        const i = R.prototype.__modules__;
        typeof e == "function" && i.indexOf(e) < 0 && i.push(e)
    }
    static use(e) {
        return Array.isArray(e) ? (e.forEach(i => R.installModule(i)), R) : (R.installModule(e), R)
    }
};
Object.keys(fe).forEach(t => {
    Object.keys(fe[t]).forEach(e => {
        Se.prototype[e] = fe[t][e]
    })
});
Se.use([ft, ut]);
const Ge = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

function Y(t) {
    return typeof t == "object" && t !== null && t.constructor && Object.prototype.toString.call(t).slice(8, -1) === "Object" && !t.__swiper__
}

function X(t, e) {
    const i = ["__proto__", "constructor", "prototype"];
    Object.keys(e).filter(s => i.indexOf(s) < 0).forEach(s => {
        typeof t[s] > "u" ? t[s] = e[s] : Y(e[s]) && Y(t[s]) && Object.keys(e[s]).length > 0 ? e[s].__swiper__ ? t[s] = e[s] : X(t[s], e[s]) : t[s] = e[s]
    })
}

function Ne(t) {
    return t === void 0 && (t = {}), t.navigation && typeof t.navigation.nextEl > "u" && typeof t.navigation.prevEl > "u"
}

function Ve(t) {
    return t === void 0 && (t = {}), t.pagination && typeof t.pagination.el > "u"
}

function Fe(t) {
    return t === void 0 && (t = {}), t.scrollbar && typeof t.scrollbar.el > "u"
}

function ke(t) {
    t === void 0 && (t = "");
    const e = t.split(" ").map(s => s.trim()).filter(s => !!s),
        i = [];
    return e.forEach(s => {
        i.indexOf(s) < 0 && i.push(s)
    }), i.join(" ")
}

function gi(t) {
    return t === void 0 && (t = ""), t ? t.includes("swiper-wrapper") ? t : "swiper-wrapper ".concat(t) : "swiper-wrapper"
}

function vi(t) {
    let {
        swiper: e,
        slides: i,
        passedParams: s,
        changedParams: n,
        nextEl: r,
        prevEl: o,
        scrollbarEl: l,
        paginationEl: a
    } = t;
    const u = n.filter(T => T !== "children" && T !== "direction" && T !== "wrapperClass"),
        {
            params: d,
            pagination: f,
            navigation: g,
            scrollbar: h,
            virtual: m,
            thumbs: v
        } = e;
    let b, w, c, p, S, y, P, O;
    n.includes("thumbs") && s.thumbs && s.thumbs.swiper && d.thumbs && !d.thumbs.swiper && (b = !0), n.includes("controller") && s.controller && s.controller.control && d.controller && !d.controller.control && (w = !0), n.includes("pagination") && s.pagination && (s.pagination.el || a) && (d.pagination || d.pagination === !1) && f && !f.el && (c = !0), n.includes("scrollbar") && s.scrollbar && (s.scrollbar.el || l) && (d.scrollbar || d.scrollbar === !1) && h && !h.el && (p = !0), n.includes("navigation") && s.navigation && (s.navigation.prevEl || o) && (s.navigation.nextEl || r) && (d.navigation || d.navigation === !1) && g && !g.prevEl && !g.nextEl && (S = !0);
    const M = T => {
        e[T] && (e[T].destroy(), T === "navigation" ? (e.isElement && (e[T].prevEl.remove(), e[T].nextEl.remove()), d[T].prevEl = void 0, d[T].nextEl = void 0, e[T].prevEl = void 0, e[T].nextEl = void 0) : (e.isElement && e[T].el.remove(), d[T].el = void 0, e[T].el = void 0))
    };
    n.includes("loop") && e.isElement && (d.loop && !s.loop ? y = !0 : !d.loop && s.loop ? P = !0 : O = !0), u.forEach(T => {
        if (Y(d[T]) && Y(s[T])) Object.assign(d[T], s[T]), (T === "navigation" || T === "pagination" || T === "scrollbar") && "enabled" in s[T] && !s[T].enabled && M(T);
        else {
            const x = s[T];
            (x === !0 || x === !1) && (T === "navigation" || T === "pagination" || T === "scrollbar") ? x === !1 && M(T): d[T] = s[T]
        }
    }), u.includes("controller") && !w && e.controller && e.controller.control && d.controller && d.controller.control && (e.controller.control = d.controller.control), n.includes("children") && i && m && d.virtual.enabled ? (m.slides = i, m.update(!0)) : n.includes("virtual") && m && d.virtual.enabled && (i && (m.slides = i), m.update(!0)), n.includes("children") && i && d.loop && (O = !0), b && v.init() && v.update(!0), w && (e.controller.control = d.controller.control), c && (e.isElement && (!a || typeof a == "string") && (a = document.createElement("div"), a.classList.add("swiper-pagination"), a.part.add("pagination"), e.el.appendChild(a)), a && (d.pagination.el = a), f.init(), f.render(), f.update()), p && (e.isElement && (!l || typeof l == "string") && (l = document.createElement("div"), l.classList.add("swiper-scrollbar"), l.part.add("scrollbar"), e.el.appendChild(l)), l && (d.scrollbar.el = l), h.init(), h.updateSize(), h.setTranslate()), S && (e.isElement && ((!r || typeof r == "string") && (r = document.createElement("div"), r.classList.add("swiper-button-next"), r.innerHTML = e.hostEl.constructor.nextButtonSvg, r.part.add("button-next"), e.el.appendChild(r)), (!o || typeof o == "string") && (o = document.createElement("div"), o.classList.add("swiper-button-prev"), o.innerHTML = e.hostEl.constructor.prevButtonSvg, o.part.add("button-prev"), e.el.appendChild(o))), r && (d.navigation.nextEl = r), o && (d.navigation.prevEl = o), g.init(), g.update()), n.includes("allowSlideNext") && (e.allowSlideNext = s.allowSlideNext), n.includes("allowSlidePrev") && (e.allowSlidePrev = s.allowSlidePrev), n.includes("direction") && e.changeDirection(s.direction, !1), (y || O) && e.loopDestroy(), (P || O) && e.loopCreate(), e.update()
}

function Ce(t, e) {
    t === void 0 && (t = {});
    const i = {
            on: {}
        },
        s = {},
        n = {};
    X(i, ge), i._emitClasses = !0, i.init = !1;
    const r = {},
        o = Ge.map(a => a.replace(/_/, "")),
        l = Object.assign({}, t);
    return Object.keys(l).forEach(a => {
        typeof t[a] > "u" || (o.indexOf(a) >= 0 ? Y(t[a]) ? (i[a] = {}, n[a] = {}, X(i[a], t[a]), X(n[a], t[a])) : (i[a] = t[a], n[a] = t[a]) : a.search(/on[A-Z]/) === 0 && typeof t[a] == "function" ? i.on["".concat(a[2].toLowerCase()).concat(a.substr(3))] = t[a] : r[a] = t[a])
    }), ["navigation", "pagination", "scrollbar"].forEach(a => {
        i[a] === !0 && (i[a] = {}), i[a] === !1 && delete i[a]
    }), {
        params: i,
        passedParams: n,
        rest: r,
        events: s
    }
}

function wi(t, e) {
    let {
        el: i,
        nextEl: s,
        prevEl: n,
        paginationEl: r,
        scrollbarEl: o,
        swiper: l
    } = t;
    Ne(e) && s && n && (l.params.navigation.nextEl = s, l.originalParams.navigation.nextEl = s, l.params.navigation.prevEl = n, l.originalParams.navigation.prevEl = n), Ve(e) && r && (l.params.pagination.el = r, l.originalParams.pagination.el = r), Fe(e) && o && (l.params.scrollbar.el = o, l.originalParams.scrollbar.el = o), l.init(i)
}

function Si(t, e, i, s, n) {
    const r = [];
    if (!e) return r;
    const o = a => {
        r.indexOf(a) < 0 && r.push(a)
    };
    if (i && s) {
        const a = s.map(n),
            u = i.map(n);
        a.join("") !== u.join("") && o("children"), s.length !== i.length && o("children")
    }
    return Ge.filter(a => a[0] === "_").map(a => a.replace(/_/, "")).forEach(a => {
        if (a in t && a in e)
            if (Y(t[a]) && Y(e[a])) {
                const u = Object.keys(t[a]),
                    d = Object.keys(e[a]);
                u.length !== d.length ? o(a) : (u.forEach(f => {
                    t[a][f] !== e[a][f] && o(a)
                }), d.forEach(f => {
                    t[a][f] !== e[a][f] && o(a)
                }))
            } else t[a] !== e[a] && o(a)
    }), r
}
const yi = t => {
    !t || t.destroyed || !t.params.virtual || t.params.virtual && !t.params.virtual.enabled || (t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.parallax && t.params.parallax && t.params.parallax.enabled && t.parallax.setTranslate())
};

function ce(t, e, i) {
    t === void 0 && (t = {});
    const s = [],
        n = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": []
        },
        r = (o, l) => {
            Array.isArray(o) && o.forEach(a => {
                const u = typeof a.type == "symbol";
                l === "default" && (l = "container-end"), u && a.children ? r(a.children, l) : a.type && (a.type.name === "SwiperSlide" || a.type.name === "AsyncComponentWrapper") || a.componentOptions && a.componentOptions.tag === "SwiperSlide" ? s.push(a) : n[l] && n[l].push(a)
            })
        };
    return Object.keys(t).forEach(o => {
        if (typeof t[o] != "function") return;
        const l = t[o]();
        r(l, o)
    }), i.value = e.value, e.value = s, {
        slides: s,
        slots: n
    }
}

function bi(t, e, i) {
    if (!i) return null;
    const s = d => {
            let f = d;
            return d < 0 ? f = e.length + d : f >= e.length && (f = f - e.length), f
        },
        n = t.value.isHorizontal() ? {
            [t.value.rtlTranslate ? "right" : "left"]: "".concat(i.offset, "px")
        } : {
            top: "".concat(i.offset, "px")
        },
        {
            from: r,
            to: o
        } = i,
        l = t.value.params.loop ? -e.length : 0,
        a = t.value.params.loop ? e.length * 2 : e.length,
        u = [];
    for (let d = l; d < a; d += 1) d >= r && d <= o && u.length < e.length && u.push(e[s(d)]);
    return u.map(d => {
        if (d.props || (d.props = {}), d.props.style || (d.props.style = {}), d.props.swiperRef = t, d.props.style = n, d.type) return F(d.type, { ...d.props
        }, d.children);
        if (d.componentOptions) return F(d.componentOptions.Ctor, { ...d.props
        }, d.componentOptions.children)
    })
}
const Ei = {
        name: "Swiper",
        props: {
            tag: {
                type: String,
                default: "div"
            },
            wrapperTag: {
                type: String,
                default: "div"
            },
            modules: {
                type: Array,
                default: void 0
            },
            init: {
                type: Boolean,
                default: void 0
            },
            direction: {
                type: String,
                default: void 0
            },
            oneWayMovement: {
                type: Boolean,
                default: void 0
            },
            swiperElementNodeName: {
                type: String,
                default: "SWIPER-CONTAINER"
            },
            touchEventsTarget: {
                type: String,
                default: void 0
            },
            initialSlide: {
                type: Number,
                default: void 0
            },
            speed: {
                type: Number,
                default: void 0
            },
            cssMode: {
                type: Boolean,
                default: void 0
            },
            updateOnWindowResize: {
                type: Boolean,
                default: void 0
            },
            resizeObserver: {
                type: Boolean,
                default: void 0
            },
            nested: {
                type: Boolean,
                default: void 0
            },
            focusableElements: {
                type: String,
                default: void 0
            },
            width: {
                type: Number,
                default: void 0
            },
            height: {
                type: Number,
                default: void 0
            },
            preventInteractionOnTransition: {
                type: Boolean,
                default: void 0
            },
            userAgent: {
                type: String,
                default: void 0
            },
            url: {
                type: String,
                default: void 0
            },
            edgeSwipeDetection: {
                type: [Boolean, String],
                default: void 0
            },
            edgeSwipeThreshold: {
                type: Number,
                default: void 0
            },
            autoHeight: {
                type: Boolean,
                default: void 0
            },
            setWrapperSize: {
                type: Boolean,
                default: void 0
            },
            virtualTranslate: {
                type: Boolean,
                default: void 0
            },
            effect: {
                type: String,
                default: void 0
            },
            breakpoints: {
                type: Object,
                default: void 0
            },
            breakpointsBase: {
                type: String,
                default: void 0
            },
            spaceBetween: {
                type: [Number, String],
                default: void 0
            },
            slidesPerView: {
                type: [Number, String],
                default: void 0
            },
            maxBackfaceHiddenSlides: {
                type: Number,
                default: void 0
            },
            slidesPerGroup: {
                type: Number,
                default: void 0
            },
            slidesPerGroupSkip: {
                type: Number,
                default: void 0
            },
            slidesPerGroupAuto: {
                type: Boolean,
                default: void 0
            },
            centeredSlides: {
                type: Boolean,
                default: void 0
            },
            centeredSlidesBounds: {
                type: Boolean,
                default: void 0
            },
            slidesOffsetBefore: {
                type: Number,
                default: void 0
            },
            slidesOffsetAfter: {
                type: Number,
                default: void 0
            },
            normalizeSlideIndex: {
                type: Boolean,
                default: void 0
            },
            centerInsufficientSlides: {
                type: Boolean,
                default: void 0
            },
            watchOverflow: {
                type: Boolean,
                default: void 0
            },
            roundLengths: {
                type: Boolean,
                default: void 0
            },
            touchRatio: {
                type: Number,
                default: void 0
            },
            touchAngle: {
                type: Number,
                default: void 0
            },
            simulateTouch: {
                type: Boolean,
                default: void 0
            },
            shortSwipes: {
                type: Boolean,
                default: void 0
            },
            longSwipes: {
                type: Boolean,
                default: void 0
            },
            longSwipesRatio: {
                type: Number,
                default: void 0
            },
            longSwipesMs: {
                type: Number,
                default: void 0
            },
            followFinger: {
                type: Boolean,
                default: void 0
            },
            allowTouchMove: {
                type: Boolean,
                default: void 0
            },
            threshold: {
                type: Number,
                default: void 0
            },
            touchMoveStopPropagation: {
                type: Boolean,
                default: void 0
            },
            touchStartPreventDefault: {
                type: Boolean,
                default: void 0
            },
            touchStartForcePreventDefault: {
                type: Boolean,
                default: void 0
            },
            touchReleaseOnEdges: {
                type: Boolean,
                default: void 0
            },
            uniqueNavElements: {
                type: Boolean,
                default: void 0
            },
            resistance: {
                type: Boolean,
                default: void 0
            },
            resistanceRatio: {
                type: Number,
                default: void 0
            },
            watchSlidesProgress: {
                type: Boolean,
                default: void 0
            },
            grabCursor: {
                type: Boolean,
                default: void 0
            },
            preventClicks: {
                type: Boolean,
                default: void 0
            },
            preventClicksPropagation: {
                type: Boolean,
                default: void 0
            },
            slideToClickedSlide: {
                type: Boolean,
                default: void 0
            },
            loop: {
                type: Boolean,
                default: void 0
            },
            loopedSlides: {
                type: Number,
                default: void 0
            },
            loopPreventsSliding: {
                type: Boolean,
                default: void 0
            },
            rewind: {
                type: Boolean,
                default: void 0
            },
            allowSlidePrev: {
                type: Boolean,
                default: void 0
            },
            allowSlideNext: {
                type: Boolean,
                default: void 0
            },
            swipeHandler: {
                type: Boolean,
                default: void 0
            },
            noSwiping: {
                type: Boolean,
                default: void 0
            },
            noSwipingClass: {
                type: String,
                default: void 0
            },
            noSwipingSelector: {
                type: String,
                default: void 0
            },
            passiveListeners: {
                type: Boolean,
                default: void 0
            },
            containerModifierClass: {
                type: String,
                default: void 0
            },
            slideClass: {
                type: String,
                default: void 0
            },
            slideActiveClass: {
                type: String,
                default: void 0
            },
            slideVisibleClass: {
                type: String,
                default: void 0
            },
            slideFullyVisibleClass: {
                type: String,
                default: void 0
            },
            slideBlankClass: {
                type: String,
                default: void 0
            },
            slideNextClass: {
                type: String,
                default: void 0
            },
            slidePrevClass: {
                type: String,
                default: void 0
            },
            wrapperClass: {
                type: String,
                default: void 0
            },
            lazyPreloaderClass: {
                type: String,
                default: void 0
            },
            lazyPreloadPrevNext: {
                type: Number,
                default: void 0
            },
            runCallbacksOnInit: {
                type: Boolean,
                default: void 0
            },
            observer: {
                type: Boolean,
                default: void 0
            },
            observeParents: {
                type: Boolean,
                default: void 0
            },
            observeSlideChildren: {
                type: Boolean,
                default: void 0
            },
            a11y: {
                type: [Boolean, Object],
                default: void 0
            },
            autoplay: {
                type: [Boolean, Object],
                default: void 0
            },
            controller: {
                type: Object,
                default: void 0
            },
            coverflowEffect: {
                type: Object,
                default: void 0
            },
            cubeEffect: {
                type: Object,
                default: void 0
            },
            fadeEffect: {
                type: Object,
                default: void 0
            },
            flipEffect: {
                type: Object,
                default: void 0
            },
            creativeEffect: {
                type: Object,
                default: void 0
            },
            cardsEffect: {
                type: Object,
                default: void 0
            },
            hashNavigation: {
                type: [Boolean, Object],
                default: void 0
            },
            history: {
                type: [Boolean, Object],
                default: void 0
            },
            keyboard: {
                type: [Boolean, Object],
                default: void 0
            },
            mousewheel: {
                type: [Boolean, Object],
                default: void 0
            },
            navigation: {
                type: [Boolean, Object],
                default: void 0
            },
            pagination: {
                type: [Boolean, Object],
                default: void 0
            },
            parallax: {
                type: [Boolean, Object],
                default: void 0
            },
            scrollbar: {
                type: [Boolean, Object],
                default: void 0
            },
            thumbs: {
                type: Object,
                default: void 0
            },
            virtual: {
                type: [Boolean, Object],
                default: void 0
            },
            zoom: {
                type: [Boolean, Object],
                default: void 0
            },
            grid: {
                type: [Object],
                default: void 0
            },
            freeMode: {
                type: [Boolean, Object],
                default: void 0
            },
            enabled: {
                type: Boolean,
                default: void 0
            }
        },
        emits: ["_beforeBreakpoint", "_containerClasses", "_slideClass", "_slideClasses", "_swiper", "_freeModeNoMomentumRelease", "activeIndexChange", "afterInit", "autoplay", "autoplayStart", "autoplayStop", "autoplayPause", "autoplayResume", "autoplayTimeLeft", "beforeDestroy", "beforeInit", "beforeLoopFix", "beforeResize", "beforeSlideChangeStart", "beforeTransitionStart", "breakpoint", "changeDirection", "click", "disable", "doubleTap", "doubleClick", "destroy", "enable", "fromEdge", "hashChange", "hashSet", "init", "keyPress", "lock", "loopFix", "momentumBounce", "navigationHide", "navigationShow", "navigationPrev", "navigationNext", "observerUpdate", "orientationchange", "paginationHide", "paginationRender", "paginationShow", "paginationUpdate", "progress", "reachBeginning", "reachEnd", "realIndexChange", "resize", "scroll", "scrollbarDragEnd", "scrollbarDragMove", "scrollbarDragStart", "setTransition", "setTranslate", "slidesUpdated", "slideChange", "slideChangeTransitionEnd", "slideChangeTransitionStart", "slideNextTransitionEnd", "slideNextTransitionStart", "slidePrevTransitionEnd", "slidePrevTransitionStart", "slideResetTransitionStart", "slideResetTransitionEnd", "sliderMove", "sliderFirstMove", "slidesLengthChange", "slidesGridLengthChange", "snapGridLengthChange", "snapIndexChange", "swiper", "tap", "toEdge", "touchEnd", "touchMove", "touchMoveOpposite", "touchStart", "transitionEnd", "transitionStart", "unlock", "update", "virtualUpdate", "zoomChange"],
        setup(t, e) {
            let {
                slots: i,
                emit: s
            } = e;
            const {
                tag: n,
                wrapperTag: r
            } = t, o = _("swiper"), l = _(null), a = _(!1), u = _(!1), d = _(null), f = _(null), g = _(null), h = {
                value: []
            }, m = {
                value: []
            }, v = _(null), b = _(null), w = _(null), c = _(null), {
                params: p,
                passedParams: S
            } = Ce(t);
            ce(i, h, m), g.value = S, m.value = h.value;
            const y = () => {
                ce(i, h, m), a.value = !0
            };
            p.onAny = function(M) {
                for (var T = arguments.length, x = new Array(T > 1 ? T - 1 : 0), E = 1; E < T; E++) x[E - 1] = arguments[E];
                s(M, ...x)
            }, Object.assign(p.on, {
                _beforeBreakpoint: y,
                _containerClasses(M, T) {
                    o.value = T
                }
            });
            const P = { ...p
            };
            if (delete P.wrapperClass, f.value = new Se(P), f.value.virtual && f.value.params.virtual.enabled) {
                f.value.virtual.slides = h.value;
                const M = {
                    cache: !1,
                    slides: h.value,
                    renderExternal: T => {
                        l.value = T
                    },
                    renderExternalUpdate: !1
                };
                X(f.value.params.virtual, M), X(f.value.originalParams.virtual, M)
            }
            Pe(() => {
                !u.value && f.value && (f.value.emitSlidesClasses(), u.value = !0);
                const {
                    passedParams: M
                } = Ce(t), T = Si(M, g.value, h.value, m.value, x => x.props && x.props.key);
                g.value = M, (T.length || a.value) && f.value && !f.value.destroyed && vi({
                    swiper: f.value,
                    slides: h.value,
                    passedParams: M,
                    changedParams: T,
                    nextEl: v.value,
                    prevEl: b.value,
                    scrollbarEl: c.value,
                    paginationEl: w.value
                }), a.value = !1
            }), Me("swiper", f), qe(l, () => {
                Xe(() => {
                    yi(f.value)
                })
            }), Ie(() => {
                d.value && (wi({
                    el: d.value,
                    nextEl: v.value,
                    prevEl: b.value,
                    paginationEl: w.value,
                    scrollbarEl: c.value,
                    swiper: f.value
                }, p), s("swiper", f.value))
            }), Le(() => {
                f.value && !f.value.destroyed && f.value.destroy(!0, !1)
            });

            function O(M) {
                return p.virtual ? bi(f, M, l.value) : (M.forEach((T, x) => {
                    T.props || (T.props = {}), T.props.swiperRef = f, T.props.swiperSlideIndex = x
                }), M)
            }
            return () => {
                const {
                    slides: M,
                    slots: T
                } = ce(i, h, m);
                return F(n, {
                    ref: d,
                    class: ke(o.value)
                }, [T["container-start"], F(r, {
                    class: gi(p.wrapperClass)
                }, [T["wrapper-start"], O(M), T["wrapper-end"]]), Ne(t) && [F("div", {
                    ref: b,
                    class: "swiper-button-prev"
                }), F("div", {
                    ref: v,
                    class: "swiper-button-next"
                })], Fe(t) && F("div", {
                    ref: c,
                    class: "swiper-scrollbar"
                }), Ve(t) && F("div", {
                    ref: w,
                    class: "swiper-pagination"
                }), T["container-end"]])
            }
        }
    },
    Ci = {
        name: "SwiperSlide",
        props: {
            tag: {
                type: String,
                default: "div"
            },
            swiperRef: {
                type: Object,
                required: !1
            },
            swiperSlideIndex: {
                type: Number,
                default: void 0,
                required: !1
            },
            zoom: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            lazy: {
                type: Boolean,
                default: !1,
                required: !1
            },
            virtualIndex: {
                type: [String, Number],
                default: void 0
            }
        },
        setup(t, e) {
            let {
                slots: i
            } = e, s = !1;
            const {
                swiperRef: n
            } = t, r = _(null), o = _("swiper-slide"), l = _(!1);

            function a(f, g, h) {
                g === r.value && (o.value = h)
            }
            Ie(() => {
                !n || !n.value || (n.value.on("_slideClass", a), s = !0)
            }), We(() => {
                s || !n || !n.value || (n.value.on("_slideClass", a), s = !0)
            }), Pe(() => {
                !r.value || !n || !n.value || (typeof t.swiperSlideIndex < "u" && (r.value.swiperSlideIndex = t.swiperSlideIndex), n.value.destroyed && o.value !== "swiper-slide" && (o.value = "swiper-slide"))
            }), Le(() => {
                !n || !n.value || n.value.off("_slideClass", a)
            });
            const u = Ye(() => ({
                isActive: o.value.indexOf("swiper-slide-active") >= 0,
                isVisible: o.value.indexOf("swiper-slide-visible") >= 0,
                isPrev: o.value.indexOf("swiper-slide-prev") >= 0,
                isNext: o.value.indexOf("swiper-slide-next") >= 0
            }));
            Me("swiperSlide", u);
            const d = () => {
                l.value = !0
            };
            return () => F(t.tag, {
                class: ke("".concat(o.value)),
                ref: r,
                "data-swiper-slide-index": typeof t.virtualIndex > "u" && n && n.value && n.value.params.loop ? t.swiperSlideIndex : t.virtualIndex,
                onLoadCapture: d
            }, t.zoom ? F("div", {
                class: "swiper-zoom-container",
                "data-swiper-zoom": typeof t.zoom == "number" ? t.zoom : void 0
            }, [i.default && i.default(u.value), t.lazy && !l.value && F("div", {
                class: "swiper-lazy-preloader"
            })]) : [i.default && i.default(u.value), t.lazy && !l.value && F("div", {
                class: "swiper-lazy-preloader"
            })])
        }
    };

function Re(t, e, i, s) {
    return t.params.createElements && Object.keys(s).forEach(n => {
        if (!i[n] && i.auto === !0) {
            let r = k(t.el, ".".concat(s[n]))[0];
            r || (r = K("div", s[n]), r.className = s[n], t.el.append(r)), i[n] = r, e[n] = r
        }
    }), i
}

function Pi(t) {
    let {
        swiper: e,
        extendParams: i,
        on: s,
        emit: n
    } = t;
    i({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
        }
    }), e.navigation = {
        nextEl: null,
        prevEl: null
    };

    function r(m) {
        let v;
        return m && typeof m == "string" && e.isElement && (v = e.el.querySelector(m) || e.hostEl.querySelector(m), v) ? v : (m && (typeof m == "string" && (v = [...document.querySelectorAll(m)]), e.params.uniqueNavElements && typeof m == "string" && v && v.length > 1 && e.el.querySelectorAll(m).length === 1 ? v = e.el.querySelector(m) : v && v.length === 1 && (v = v[0])), m && !v ? m : v)
    }

    function o(m, v) {
        const b = e.params.navigation;
        m = D(m), m.forEach(w => {
            w && (w.classList[v ? "add" : "remove"](...b.disabledClass.split(" ")), w.tagName === "BUTTON" && (w.disabled = v), e.params.watchOverflow && e.enabled && w.classList[e.isLocked ? "add" : "remove"](b.lockClass))
        })
    }

    function l() {
        const {
            nextEl: m,
            prevEl: v
        } = e.navigation;
        if (e.params.loop) {
            o(v, !1), o(m, !1);
            return
        }
        o(v, e.isBeginning && !e.params.rewind), o(m, e.isEnd && !e.params.rewind)
    }

    function a(m) {
        m.preventDefault(), !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), n("navigationPrev"))
    }

    function u(m) {
        m.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), n("navigationNext"))
    }

    function d() {
        const m = e.params.navigation;
        if (e.params.navigation = Re(e, e.originalParams.navigation, e.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }), !(m.nextEl || m.prevEl)) return;
        let v = r(m.nextEl),
            b = r(m.prevEl);
        Object.assign(e.navigation, {
            nextEl: v,
            prevEl: b
        }), v = D(v), b = D(b);
        const w = (c, p) => {
            c && c.addEventListener("click", p === "next" ? u : a), !e.enabled && c && c.classList.add(...m.lockClass.split(" "))
        };
        v.forEach(c => w(c, "next")), b.forEach(c => w(c, "prev"))
    }

    function f() {
        let {
            nextEl: m,
            prevEl: v
        } = e.navigation;
        m = D(m), v = D(v);
        const b = (w, c) => {
            w.removeEventListener("click", c === "next" ? u : a), w.classList.remove(...e.params.navigation.disabledClass.split(" "))
        };
        m.forEach(w => b(w, "next")), v.forEach(w => b(w, "prev"))
    }
    s("init", () => {
        e.params.navigation.enabled === !1 ? h() : (d(), l())
    }), s("toEdge fromEdge lock unlock", () => {
        l()
    }), s("destroy", () => {
        f()
    }), s("enable disable", () => {
        let {
            nextEl: m,
            prevEl: v
        } = e.navigation;
        if (m = D(m), v = D(v), e.enabled) {
            l();
            return
        }[...m, ...v].filter(b => !!b).forEach(b => b.classList.add(e.params.navigation.lockClass))
    }), s("click", (m, v) => {
        let {
            nextEl: b,
            prevEl: w
        } = e.navigation;
        b = D(b), w = D(w);
        const c = v.target;
        let p = w.includes(c) || b.includes(c);
        if (e.isElement && !p) {
            const S = v.path || v.composedPath && v.composedPath();
            S && (p = S.find(y => b.includes(y) || w.includes(y)))
        }
        if (e.params.navigation.hideOnClick && !p) {
            if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === c || e.pagination.el.contains(c))) return;
            let S;
            b.length ? S = b[0].classList.contains(e.params.navigation.hiddenClass) : w.length && (S = w[0].classList.contains(e.params.navigation.hiddenClass)), n(S === !0 ? "navigationShow" : "navigationHide"), [...b, ...w].filter(y => !!y).forEach(y => y.classList.toggle(e.params.navigation.hiddenClass))
        }
    });
    const g = () => {
            e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), d(), l()
        },
        h = () => {
            e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), f()
        };
    Object.assign(e.navigation, {
        enable: g,
        disable: h,
        update: l,
        init: d,
        destroy: f
    })
}

function U(t) {
    return t === void 0 && (t = ""), ".".concat(t.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, "."))
}

function Mi(t) {
    let {
        swiper: e,
        extendParams: i,
        on: s,
        emit: n
    } = t;
    const r = "swiper-pagination";
    i({
        pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: c => c,
            formatFractionTotal: c => c,
            bulletClass: "".concat(r, "-bullet"),
            bulletActiveClass: "".concat(r, "-bullet-active"),
            modifierClass: "".concat(r, "-"),
            currentClass: "".concat(r, "-current"),
            totalClass: "".concat(r, "-total"),
            hiddenClass: "".concat(r, "-hidden"),
            progressbarFillClass: "".concat(r, "-progressbar-fill"),
            progressbarOppositeClass: "".concat(r, "-progressbar-opposite"),
            clickableClass: "".concat(r, "-clickable"),
            lockClass: "".concat(r, "-lock"),
            horizontalClass: "".concat(r, "-horizontal"),
            verticalClass: "".concat(r, "-vertical"),
            paginationDisabledClass: "".concat(r, "-disabled")
        }
    }), e.pagination = {
        el: null,
        bullets: []
    };
    let o, l = 0;

    function a() {
        return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0
    }

    function u(c, p) {
        const {
            bulletActiveClass: S
        } = e.params.pagination;
        c && (c = c["".concat(p === "prev" ? "previous" : "next", "ElementSibling")], c && (c.classList.add("".concat(S, "-").concat(p)), c = c["".concat(p === "prev" ? "previous" : "next", "ElementSibling")], c && c.classList.add("".concat(S, "-").concat(p, "-").concat(p))))
    }

    function d(c, p, S) {
        if (c = c % S, p = p % S, p === c + 1) return "next";
        if (p === c - 1) return "previous"
    }

    function f(c) {
        const p = c.target.closest(U(e.params.pagination.bulletClass));
        if (!p) return;
        c.preventDefault();
        const S = se(p) * e.params.slidesPerGroup;
        if (e.params.loop) {
            if (e.realIndex === S) return;
            const y = d(e.realIndex, S, e.slides.length);
            y === "next" ? e.slideNext() : y === "previous" ? e.slidePrev() : e.slideToLoop(S)
        } else e.slideTo(S)
    }

    function g() {
        const c = e.rtl,
            p = e.params.pagination;
        if (a()) return;
        let S = e.pagination.el;
        S = D(S);
        let y, P;
        const O = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            M = e.params.loop ? Math.ceil(O / e.params.slidesPerGroup) : e.snapGrid.length;
        if (e.params.loop ? (P = e.previousRealIndex || 0, y = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex < "u" ? (y = e.snapIndex, P = e.previousSnapIndex) : (P = e.previousIndex || 0, y = e.activeIndex || 0), p.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
            const T = e.pagination.bullets;
            let x, E, L;
            if (p.dynamicBullets && (o = me(T[0], e.isHorizontal() ? "width" : "height"), S.forEach(C => {
                    C.style[e.isHorizontal() ? "width" : "height"] = "".concat(o * (p.dynamicMainBullets + 4), "px")
                }), p.dynamicMainBullets > 1 && P !== void 0 && (l += y - (P || 0), l > p.dynamicMainBullets - 1 ? l = p.dynamicMainBullets - 1 : l < 0 && (l = 0)), x = Math.max(y - l, 0), E = x + (Math.min(T.length, p.dynamicMainBullets) - 1), L = (E + x) / 2), T.forEach(C => {
                    const I = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(A => "".concat(p.bulletActiveClass).concat(A))].map(A => typeof A == "string" && A.includes(" ") ? A.split(" ") : A).flat();
                    C.classList.remove(...I)
                }), S.length > 1) T.forEach(C => {
                const I = se(C);
                I === y ? C.classList.add(...p.bulletActiveClass.split(" ")) : e.isElement && C.setAttribute("part", "bullet"), p.dynamicBullets && (I >= x && I <= E && C.classList.add(..."".concat(p.bulletActiveClass, "-main").split(" ")), I === x && u(C, "prev"), I === E && u(C, "next"))
            });
            else {
                const C = T[y];
                if (C && C.classList.add(...p.bulletActiveClass.split(" ")), e.isElement && T.forEach((I, A) => {
                        I.setAttribute("part", A === y ? "bullet-active" : "bullet")
                    }), p.dynamicBullets) {
                    const I = T[x],
                        A = T[E];
                    for (let B = x; B <= E; B += 1) T[B] && T[B].classList.add(..."".concat(p.bulletActiveClass, "-main").split(" "));
                    u(I, "prev"), u(A, "next")
                }
            }
            if (p.dynamicBullets) {
                const C = Math.min(T.length, p.dynamicMainBullets + 4),
                    I = (o * C - o) / 2 - L * o,
                    A = c ? "right" : "left";
                T.forEach(B => {
                    B.style[e.isHorizontal() ? A : "top"] = "".concat(I, "px")
                })
            }
        }
        S.forEach((T, x) => {
            if (p.type === "fraction" && (T.querySelectorAll(U(p.currentClass)).forEach(E => {
                    E.textContent = p.formatFractionCurrent(y + 1)
                }), T.querySelectorAll(U(p.totalClass)).forEach(E => {
                    E.textContent = p.formatFractionTotal(M)
                })), p.type === "progressbar") {
                let E;
                p.progressbarOpposite ? E = e.isHorizontal() ? "vertical" : "horizontal" : E = e.isHorizontal() ? "horizontal" : "vertical";
                const L = (y + 1) / M;
                let C = 1,
                    I = 1;
                E === "horizontal" ? C = L : I = L, T.querySelectorAll(U(p.progressbarFillClass)).forEach(A => {
                    A.style.transform = "translate3d(0,0,0) scaleX(".concat(C, ") scaleY(").concat(I, ")"), A.style.transitionDuration = "".concat(e.params.speed, "ms")
                })
            }
            p.type === "custom" && p.renderCustom ? (T.innerHTML = p.renderCustom(e, y + 1, M), x === 0 && n("paginationRender", T)) : (x === 0 && n("paginationRender", T), n("paginationUpdate", T)), e.params.watchOverflow && e.enabled && T.classList[e.isLocked ? "add" : "remove"](p.lockClass)
        })
    }

    function h() {
        const c = e.params.pagination;
        if (a()) return;
        const p = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
        let S = e.pagination.el;
        S = D(S);
        let y = "";
        if (c.type === "bullets") {
            let P = e.params.loop ? Math.ceil(p / e.params.slidesPerGroup) : e.snapGrid.length;
            e.params.freeMode && e.params.freeMode.enabled && P > p && (P = p);
            for (let O = 0; O < P; O += 1) c.renderBullet ? y += c.renderBullet.call(e, O, c.bulletClass) : y += "<".concat(c.bulletElement, " ").concat(e.isElement ? 'part="bullet"' : "", ' class="').concat(c.bulletClass, '"></').concat(c.bulletElement, ">")
        }
        c.type === "fraction" && (c.renderFraction ? y = c.renderFraction.call(e, c.currentClass, c.totalClass) : y = '<span class="'.concat(c.currentClass, '"></span>') + " / " + '<span class="'.concat(c.totalClass, '"></span>')), c.type === "progressbar" && (c.renderProgressbar ? y = c.renderProgressbar.call(e, c.progressbarFillClass) : y = '<span class="'.concat(c.progressbarFillClass, '"></span>')), e.pagination.bullets = [], S.forEach(P => {
            c.type !== "custom" && (P.innerHTML = y || ""), c.type === "bullets" && e.pagination.bullets.push(...P.querySelectorAll(U(c.bulletClass)))
        }), c.type !== "custom" && n("paginationRender", S[0])
    }

    function m() {
        e.params.pagination = Re(e, e.originalParams.pagination, e.params.pagination, {
            el: "swiper-pagination"
        });
        const c = e.params.pagination;
        if (!c.el) return;
        let p;
        typeof c.el == "string" && e.isElement && (p = e.el.querySelector(c.el)), !p && typeof c.el == "string" && (p = [...document.querySelectorAll(c.el)]), p || (p = c.el), !(!p || p.length === 0) && (e.params.uniqueNavElements && typeof c.el == "string" && Array.isArray(p) && p.length > 1 && (p = [...e.el.querySelectorAll(c.el)], p.length > 1 && (p = p.filter(S => Ae(S, ".swiper")[0] === e.el)[0])), Array.isArray(p) && p.length === 1 && (p = p[0]), Object.assign(e.pagination, {
            el: p
        }), p = D(p), p.forEach(S => {
            c.type === "bullets" && c.clickable && S.classList.add(...(c.clickableClass || "").split(" ")), S.classList.add(c.modifierClass + c.type), S.classList.add(e.isHorizontal() ? c.horizontalClass : c.verticalClass), c.type === "bullets" && c.dynamicBullets && (S.classList.add("".concat(c.modifierClass).concat(c.type, "-dynamic")), l = 0, c.dynamicMainBullets < 1 && (c.dynamicMainBullets = 1)), c.type === "progressbar" && c.progressbarOpposite && S.classList.add(c.progressbarOppositeClass), c.clickable && S.addEventListener("click", f), e.enabled || S.classList.add(c.lockClass)
        }))
    }

    function v() {
        const c = e.params.pagination;
        if (a()) return;
        let p = e.pagination.el;
        p && (p = D(p), p.forEach(S => {
            S.classList.remove(c.hiddenClass), S.classList.remove(c.modifierClass + c.type), S.classList.remove(e.isHorizontal() ? c.horizontalClass : c.verticalClass), c.clickable && (S.classList.remove(...(c.clickableClass || "").split(" ")), S.removeEventListener("click", f))
        })), e.pagination.bullets && e.pagination.bullets.forEach(S => S.classList.remove(...c.bulletActiveClass.split(" ")))
    }
    s("changeDirection", () => {
        if (!e.pagination || !e.pagination.el) return;
        const c = e.params.pagination;
        let {
            el: p
        } = e.pagination;
        p = D(p), p.forEach(S => {
            S.classList.remove(c.horizontalClass, c.verticalClass), S.classList.add(e.isHorizontal() ? c.horizontalClass : c.verticalClass)
        })
    }), s("init", () => {
        e.params.pagination.enabled === !1 ? w() : (m(), h(), g())
    }), s("activeIndexChange", () => {
        typeof e.snapIndex > "u" && g()
    }), s("snapIndexChange", () => {
        g()
    }), s("snapGridLengthChange", () => {
        h(), g()
    }), s("destroy", () => {
        v()
    }), s("enable disable", () => {
        let {
            el: c
        } = e.pagination;
        c && (c = D(c), c.forEach(p => p.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)))
    }), s("lock unlock", () => {
        g()
    }), s("click", (c, p) => {
        const S = p.target,
            y = D(e.pagination.el);
        if (e.params.pagination.el && e.params.pagination.hideOnClick && y && y.length > 0 && !S.classList.contains(e.params.pagination.bulletClass)) {
            if (e.navigation && (e.navigation.nextEl && S === e.navigation.nextEl || e.navigation.prevEl && S === e.navigation.prevEl)) return;
            const P = y[0].classList.contains(e.params.pagination.hiddenClass);
            n(P === !0 ? "paginationShow" : "paginationHide"), y.forEach(O => O.classList.toggle(e.params.pagination.hiddenClass))
        }
    });
    const b = () => {
            e.el.classList.remove(e.params.pagination.paginationDisabledClass);
            let {
                el: c
            } = e.pagination;
            c && (c = D(c), c.forEach(p => p.classList.remove(e.params.pagination.paginationDisabledClass))), m(), h(), g()
        },
        w = () => {
            e.el.classList.add(e.params.pagination.paginationDisabledClass);
            let {
                el: c
            } = e.pagination;
            c && (c = D(c), c.forEach(p => p.classList.add(e.params.pagination.paginationDisabledClass))), v()
        };
    Object.assign(e.pagination, {
        enable: b,
        disable: w,
        render: h,
        update: g,
        init: m,
        destroy: v
    })
}

function Ii(t) {
    let {
        swiper: e,
        extendParams: i,
        on: s,
        emit: n,
        params: r
    } = t;
    e.autoplay = {
        running: !1,
        paused: !1,
        timeLeft: 0
    }, i({
        autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !1,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1
        }
    });
    let o, l, a = r && r.autoplay ? r.autoplay.delay : 3e3,
        u = r && r.autoplay ? r.autoplay.delay : 3e3,
        d, f = new Date().getTime(),
        g, h, m, v, b, w, c;

    function p(z) {
        !e || e.destroyed || !e.wrapperEl || z.target === e.wrapperEl && (e.wrapperEl.removeEventListener("transitionend", p), !(c || z.detail && z.detail.bySwiperTouchMove) && x())
    }
    const S = () => {
            if (e.destroyed || !e.autoplay.running) return;
            e.autoplay.paused ? g = !0 : g && (u = d, g = !1);
            const z = e.autoplay.paused ? d : f + u - new Date().getTime();
            e.autoplay.timeLeft = z, n("autoplayTimeLeft", z, z / a), l = requestAnimationFrame(() => {
                S()
            })
        },
        y = () => {
            let z;
            return e.virtual && e.params.virtual.enabled ? z = e.slides.filter($ => $.classList.contains("swiper-slide-active"))[0] : z = e.slides[e.activeIndex], z ? parseInt(z.getAttribute("data-swiper-autoplay"), 10) : void 0
        },
        P = z => {
            if (e.destroyed || !e.autoplay.running) return;
            cancelAnimationFrame(l), S();
            let V = typeof z > "u" ? e.params.autoplay.delay : z;
            a = e.params.autoplay.delay, u = e.params.autoplay.delay;
            const $ = y();
            !Number.isNaN($) && $ > 0 && typeof z > "u" && (V = $, a = $, u = $), d = V;
            const W = e.params.speed,
                Z = () => {
                    !e || e.destroyed || (e.params.autoplay.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(W, !0, !0), n("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, W, !0, !0), n("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(W, !0, !0), n("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, W, !0, !0), n("autoplay")), e.params.cssMode && (f = new Date().getTime(), requestAnimationFrame(() => {
                        P()
                    })))
                };
            return V > 0 ? (clearTimeout(o), o = setTimeout(() => {
                Z()
            }, V)) : requestAnimationFrame(() => {
                Z()
            }), V
        },
        O = () => {
            f = new Date().getTime(), e.autoplay.running = !0, P(), n("autoplayStart")
        },
        M = () => {
            e.autoplay.running = !1, clearTimeout(o), cancelAnimationFrame(l), n("autoplayStop")
        },
        T = (z, V) => {
            if (e.destroyed || !e.autoplay.running) return;
            clearTimeout(o), z || (w = !0);
            const $ = () => {
                n("autoplayPause"), e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener("transitionend", p) : x()
            };
            if (e.autoplay.paused = !0, V) {
                b && (d = e.params.autoplay.delay), b = !1, $();
                return
            }
            d = (d || e.params.autoplay.delay) - (new Date().getTime() - f), !(e.isEnd && d < 0 && !e.params.loop) && (d < 0 && (d = 0), $())
        },
        x = () => {
            e.isEnd && d < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (f = new Date().getTime(), w ? (w = !1, P(d)) : P(), e.autoplay.paused = !1, n("autoplayResume"))
        },
        E = () => {
            if (e.destroyed || !e.autoplay.running) return;
            const z = H();
            z.visibilityState === "hidden" && (w = !0, T(!0)), z.visibilityState === "visible" && x()
        },
        L = z => {
            z.pointerType === "mouse" && (w = !0, c = !0, !(e.animating || e.autoplay.paused) && T(!0))
        },
        C = z => {
            z.pointerType === "mouse" && (c = !1, e.autoplay.paused && x())
        },
        I = () => {
            e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener("pointerenter", L), e.el.addEventListener("pointerleave", C))
        },
        A = () => {
            e.el && typeof e.el != "string" && (e.el.removeEventListener("pointerenter", L), e.el.removeEventListener("pointerleave", C))
        },
        B = () => {
            H().addEventListener("visibilitychange", E)
        },
        j = () => {
            H().removeEventListener("visibilitychange", E)
        };
    s("init", () => {
        e.params.autoplay.enabled && (I(), B(), O())
    }), s("destroy", () => {
        A(), j(), e.autoplay.running && M()
    }), s("_freeModeStaticRelease", () => {
        (m || w) && x()
    }), s("_freeModeNoMomentumRelease", () => {
        e.params.autoplay.disableOnInteraction ? M() : T(!0, !0)
    }), s("beforeTransitionStart", (z, V, $) => {
        e.destroyed || !e.autoplay.running || ($ || !e.params.autoplay.disableOnInteraction ? T(!0, !0) : M())
    }), s("sliderFirstMove", () => {
        if (!(e.destroyed || !e.autoplay.running)) {
            if (e.params.autoplay.disableOnInteraction) {
                M();
                return
            }
            h = !0, m = !1, w = !1, v = setTimeout(() => {
                w = !0, m = !0, T(!0)
            }, 200)
        }
    }), s("touchEnd", () => {
        if (!(e.destroyed || !e.autoplay.running || !h)) {
            if (clearTimeout(v), clearTimeout(o), e.params.autoplay.disableOnInteraction) {
                m = !1, h = !1;
                return
            }
            m && e.params.cssMode && x(), m = !1, h = !1
        }
    }), s("slideChange", () => {
        e.destroyed || !e.autoplay.running || (b = !0)
    }), Object.assign(e.autoplay, {
        start: O,
        stop: M,
        pause: T,
        resume: x
    })
}

function He(t) {
    const {
        effect: e,
        swiper: i,
        on: s,
        setTranslate: n,
        setTransition: r,
        overwriteParams: o,
        perspective: l,
        recreateShadows: a,
        getEffectParams: u
    } = t;
    s("beforeInit", () => {
        if (i.params.effect !== e) return;
        i.classNames.push("".concat(i.params.containerModifierClass).concat(e)), l && l() && i.classNames.push("".concat(i.params.containerModifierClass, "3d"));
        const f = o ? o() : {};
        Object.assign(i.params, f), Object.assign(i.originalParams, f)
    }), s("setTranslate", () => {
        i.params.effect === e && n()
    }), s("setTransition", (f, g) => {
        i.params.effect === e && r(g)
    }), s("transitionEnd", () => {
        if (i.params.effect === e && a) {
            if (!u || !u().slideShadows) return;
            i.slides.forEach(f => {
                f.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(g => g.remove())
            }), a()
        }
    });
    let d;
    s("virtualUpdate", () => {
        i.params.effect === e && (i.slides.length || (d = !0), requestAnimationFrame(() => {
            d && i.slides && i.slides.length && (n(), d = !1)
        }))
    })
}

function je(t, e) {
    const i = ne(e);
    return i !== e && (i.style.backfaceVisibility = "hidden", i.style["-webkit-backface-visibility"] = "hidden"), i
}

function Ti(t) {
    let {
        swiper: e,
        duration: i,
        transformElements: s,
        allSlides: n
    } = t;
    const {
        activeIndex: r
    } = e, o = l => l.parentElement ? l.parentElement : e.slides.filter(u => u.shadowRoot && u.shadowRoot === l.parentNode)[0];
    if (e.params.virtualTranslate && i !== 0) {
        let l = !1,
            a;
        n ? a = s : a = s.filter(u => {
            const d = u.classList.contains("swiper-slide-transform") ? o(u) : u;
            return e.getSlideIndex(d) === r
        }), a.forEach(u => {
            nt(u, () => {
                if (l || !e || e.destroyed) return;
                l = !0, e.animating = !1;
                const d = new window.CustomEvent("transitionend", {
                    bubbles: !0,
                    cancelable: !0
                });
                e.wrapperEl.dispatchEvent(d)
            })
        })
    }
}

function ve(t, e, i) {
    const s = "swiper-slide-shadow".concat(i ? "-".concat(i) : "").concat(t ? " swiper-slide-shadow-".concat(t) : ""),
        n = ne(e);
    let r = n.querySelector(".".concat(s.split(" ").join(".")));
    return r || (r = K("div", s.split(" ")), n.append(r)), r
}

function Li(t) {
    let {
        swiper: e,
        extendParams: i,
        on: s
    } = t;
    i({
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0
        }
    }), He({
        effect: "coverflow",
        swiper: e,
        on: s,
        setTranslate: () => {
            const {
                width: o,
                height: l,
                slides: a,
                slidesSizesGrid: u
            } = e, d = e.params.coverflowEffect, f = e.isHorizontal(), g = e.translate, h = f ? -g + o / 2 : -g + l / 2, m = f ? d.rotate : -d.rotate, v = d.depth, b = rt(e);
            for (let w = 0, c = a.length; w < c; w += 1) {
                const p = a[w],
                    S = u[w],
                    y = p.swiperSlideOffset,
                    P = (h - y - S / 2) / S,
                    O = typeof d.modifier == "function" ? d.modifier(P) : P * d.modifier;
                let M = f ? m * O : 0,
                    T = f ? 0 : m * O,
                    x = -v * Math.abs(O),
                    E = d.stretch;
                typeof E == "string" && E.indexOf("%") !== -1 && (E = parseFloat(d.stretch) / 100 * S);
                let L = f ? 0 : E * O,
                    C = f ? E * O : 0,
                    I = 1 - (1 - d.scale) * Math.abs(O);
                Math.abs(C) < .001 && (C = 0), Math.abs(L) < .001 && (L = 0), Math.abs(x) < .001 && (x = 0), Math.abs(M) < .001 && (M = 0), Math.abs(T) < .001 && (T = 0), Math.abs(I) < .001 && (I = 0);
                const A = "translate3d(".concat(C, "px,").concat(L, "px,").concat(x, "px)  rotateX(").concat(b(T), "deg) rotateY(").concat(b(M), "deg) scale(").concat(I, ")"),
                    B = je(d, p);
                if (B.style.transform = A, p.style.zIndex = -Math.abs(Math.round(O)) + 1, d.slideShadows) {
                    let j = f ? p.querySelector(".swiper-slide-shadow-left") : p.querySelector(".swiper-slide-shadow-top"),
                        z = f ? p.querySelector(".swiper-slide-shadow-right") : p.querySelector(".swiper-slide-shadow-bottom");
                    j || (j = ve("coverflow", p, f ? "left" : "top")), z || (z = ve("coverflow", p, f ? "right" : "bottom")), j && (j.style.opacity = O > 0 ? O : 0), z && (z.style.opacity = -O > 0 ? -O : 0)
                }
            }
        },
        setTransition: o => {
            e.slides.map(a => ne(a)).forEach(a => {
                a.style.transitionDuration = "".concat(o, "ms"), a.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(u => {
                    u.style.transitionDuration = "".concat(o, "ms")
                })
            })
        },
        perspective: () => !0,
        overwriteParams: () => ({
            watchSlidesProgress: !0
        })
    })
}

function Oi(t) {
    let {
        swiper: e,
        extendParams: i,
        on: s
    } = t;
    i({
        cardsEffect: {
            slideShadows: !0,
            rotate: !0,
            perSlideRotate: 2,
            perSlideOffset: 8
        }
    }), He({
        effect: "cards",
        swiper: e,
        on: s,
        setTranslate: () => {
            const {
                slides: o,
                activeIndex: l,
                rtlTranslate: a
            } = e, u = e.params.cardsEffect, {
                startTranslate: d,
                isTouched: f
            } = e.touchEventsData, g = a ? -e.translate : e.translate;
            for (let h = 0; h < o.length; h += 1) {
                const m = o[h],
                    v = m.progress,
                    b = Math.min(Math.max(v, -4), 4);
                let w = m.swiperSlideOffset;
                e.params.centeredSlides && !e.params.cssMode && (e.wrapperEl.style.transform = "translateX(".concat(e.minTranslate(), "px)")), e.params.centeredSlides && e.params.cssMode && (w -= o[0].swiperSlideOffset);
                let c = e.params.cssMode ? -w - e.translate : -w,
                    p = 0;
                const S = -100 * Math.abs(b);
                let y = 1,
                    P = -u.perSlideRotate * b,
                    O = u.perSlideOffset - Math.abs(b) * .75;
                const M = e.virtual && e.params.virtual.enabled ? e.virtual.from + h : h,
                    T = (M === l || M === l - 1) && b > 0 && b < 1 && (f || e.params.cssMode) && g < d,
                    x = (M === l || M === l + 1) && b < 0 && b > -1 && (f || e.params.cssMode) && g > d;
                if (T || x) {
                    const I = (1 - Math.abs((Math.abs(b) - .5) / .5)) ** .5;
                    P += -28 * b * I, y += -.5 * I, O += 96 * I, p = "".concat(-25 * I * Math.abs(b), "%")
                }
                if (b < 0 ? c = "calc(".concat(c, "px ").concat(a ? "-" : "+", " (").concat(O * Math.abs(b), "%))") : b > 0 ? c = "calc(".concat(c, "px ").concat(a ? "-" : "+", " (-").concat(O * Math.abs(b), "%))") : c = "".concat(c, "px"), !e.isHorizontal()) {
                    const I = p;
                    p = c, c = I
                }
                const E = b < 0 ? "".concat(1 + (1 - y) * b) : "".concat(1 - (1 - y) * b),
                    L = "\n        translate3d(".concat(c, ", ").concat(p, ", ").concat(S, "px)\n        rotateZ(").concat(u.rotate ? a ? -P : P : 0, "deg)\n        scale(").concat(E, ")\n      ");
                if (u.slideShadows) {
                    let I = m.querySelector(".swiper-slide-shadow");
                    I || (I = ve("cards", m)), I && (I.style.opacity = Math.min(Math.max((Math.abs(b) - .5) / .5, 0), 1))
                }
                m.style.zIndex = -Math.abs(Math.round(v)) + o.length;
                const C = je(u, m);
                C.style.transform = L
            }
        },
        setTransition: o => {
            const l = e.slides.map(a => ne(a));
            l.forEach(a => {
                a.style.transitionDuration = "".concat(o, "ms"), a.querySelectorAll(".swiper-slide-shadow").forEach(u => {
                    u.style.transitionDuration = "".concat(o, "ms")
                })
            }), Ti({
                swiper: e,
                duration: o,
                transformElements: l
            })
        },
        perspective: () => !0,
        overwriteParams: () => ({
            watchSlidesProgress: !0,
            virtualTranslate: !e.params.cssMode
        })
    })
}
export {
    Ii as A, Li as E, Pi as N, Mi as P, Ei as S, Ci as a, Oi as b
};
//# sourceMappingURL=vendor-swiper.BzK1hN__.js.map