import {
    bK as y,
    D as W,
    bI as L,
    bF as j,
    c2 as H,
    c7 as K,
    a as O,
    v as X,
    bV as q,
    x as z,
    c8 as T,
    c9 as A,
    R as I,
    W as P,
    X as G
} from "./main.async.-NbSL2aO.js";
import "./main.Dmn05Mj-.js";
import "../vendors/vendor-default.p-wnugzB.js";
import "../vendors/vendor-bignumber.BRr1dcww.js";
import {
    k as J,
    r as v,
    c as l,
    w as E,
    o as Q,
    a5 as t,
    n as U,
    a4 as Y
} from "../vendors/vendor-@vue.CBvhRkQp.js";
const Z = {
        error: y,
        loading: y,
        loadMode: {
            type: String,
            default: "auto"
        },
        finished: y,
        offset: W(300),
        errorText: L(""),
        finishedText: L(""),
        immediateCheck: j,
        emptyText: {
            type: [String, Object]
        },
        emptyImage: {
            type: String
        },
        retryImage: {
            type: String
        }
    },
    [_, a] = z("list"),
    te = J({
        name: _,
        props: Z,
        emits: ["load", "retry"],
        setup(e, {
            emit: s,
            slots: n
        }) {
            const x = v(),
                b = v(),
                d = H(),
                C = K(),
                u = l(() => C.value),
                {
                    t: f
                } = O(),
                m = v(!1),
                c = () => {
                    var r, i, h, M;
                    return (M = (h = (i = (r = n.default) == null ? void 0 : r.call(n)) == null ? void 0 : i[0]) == null ? void 0 : h.children) == null ? void 0 : M.length
                },
                k = l(() => !e.error && !e.loading),
                R = l(() => e.error && !e.loading && !e.finished),
                S = l(() => e.loadMode === "click" && m.value),
                o = () => {
                    U(() => {
                        if (e.loading || e.finished || e.error || (d == null ? void 0 : d.value) === !1) return;
                        const r = T(u);
                        if (!r.height || A(x)) return;
                        if (e.loadMode === "click") {
                            m.value = !0;
                            return
                        }
                        let i = !1;
                        i = T(b).bottom - r.bottom <= +e.offset, i && s("load")
                    })
                },
                g = () => {
                    s("retry"), o()
                },
                w = () => {
                    m.value = !1, s("load")
                },
                N = () => {
                    if (e.finished) {
                        const r = n.finished ? n.finished() : e.finishedText;
                        if (r) return t("div", {
                            class: a("finished-text")
                        }, [r])
                    }
                },
                V = () => {
                    if (R.value && !c()) return t(I, {
                        type: "block",
                        onRetry: g,
                        image: e.retryImage
                    }, null);
                    if (e.error && !e.loading && !e.finished) {
                        if (n.error || e.errorText) {
                            const r = n.error ? n.error() : e.errorText;
                            return t("div", {
                                class: a("inline-error"),
                                onClick: g
                            }, [r])
                        }
                        return t(I, {
                            class: a("inline-error"),
                            type: "block",
                            hideImage: !0,
                            onRetry: g
                        }, null)
                    }
                },
                B = () => {
                    if (S.value && c() > 0) return t("div", {
                        class: a("loadmore"),
                        onClick: w
                    }, [n.loadingMore ? n.loadingMore() : f("lobby.game.loadingMore")])
                },
                D = () => {
                    if (e.loading && !e.finished) return c() ? t("div", {
                        class: a("loading")
                    }, [t(P, null, {
                        indicator: n.loading
                    }), t("span", {
                        class: a("loading-text")
                    }, [f("lobby.game.loadinged"), Y("...")])]) : t(P, null, {
                        indicator: n.loading
                    })
                },
                F = () => k.value && !c() ? t(G, {
                    type: "empty",
                    empty: {
                        text: e.emptyText || f("lobby.event.luckyWheel.tabs.noData"),
                        image: e.emptyImage
                    }
                }, null) : null;
            return E(() => [e.loading, e.finished, e.error], o), d && E(d, r => {
                r && o()
            }), Q(() => {
                e.immediateCheck && o()
            }), X({
                check: o,
                scroller: u
            }), q("scroll", o, {
                target: u,
                passive: !0
            }), () => {
                var i;
                const r = !c() && (k.value || R.value || e.loading && !e.finished);
                return t("div", {
                    ref: x,
                    class: [a(), r ? a("center") : ""]
                }, [t("div", {
                    class: a("container")
                }, [(i = n.default) == null ? void 0 : i.call(n)]), B(), D(), N(), V(), F(), t("div", {
                    ref: b,
                    class: a("end")
                }, null)])
            }
        }
    });
export {
    te as L
};
//# sourceMappingURL=List.BPt-sskq.js.map