import {
    bK as d,
    bI as m,
    c6 as $,
    a as N,
    bZ as p,
    v as B,
    x as C,
    R as E,
    W as j,
    X as A,
    w as T
} from "./main.async.-NbSL2aO.js";
import {
    L as D
} from "./List.BPt-sskq.js";
import "./main.Dmn05Mj-.js";
import {
    N as F
} from "../vendors/vendor-default.p-wnugzB.js";
import "../vendors/vendor-bignumber.BRr1dcww.js";
import "../vendors/vendor-swiper.BzK1hN__.js";
import {
    k as K,
    r as W,
    c as a,
    a5 as r
} from "../vendors/vendor-@vue.CBvhRkQp.js";
const X = {
        error: d,
        loading: d,
        finished: d,
        errorText: m(""),
        emptyText: m(""),
        finishedText: m(""),
        virtualOptions: {
            type: Object,
            default: () => {}
        }
    },
    [Y, n] = C("virtual-list"),
    Z = K({
        name: Y,
        props: X,
        emits: ["load", "retry"],
        setup(e, {
            emit: z,
            slots: i
        }) {
            const s = $(),
                v = W(),
                {
                    t: S
                } = N(),
                o = a(() => e.virtualOptions.total || 0),
                k = a(() => {
                    var t;
                    return {
                        count: o.value,
                        getScrollElement: () => v.value,
                        estimateSize: () => p(e.virtualOptions.estimateSize),
                        overscan: (t = e.virtualOptions.overscan) != null ? t : 5
                    }
                }),
                l = F(k),
                f = a(() => l.value.getVirtualItems()),
                O = a(() => l.value.getTotalSize()),
                V = t => {
                    !t || e.virtualOptions.dynamicSize === !1 || (s == null ? void 0 : s.value) === !1 || l.value.measureElement(t)
                },
                y = a(() => !o.value && !e.error && !e.loading),
                x = a(() => !o.value && e.error && !e.loading && !e.finished),
                u = () => {
                    z("retry")
                },
                P = () => {
                    if (e.finished) {
                        const t = i.finished ? i.finished() : e.finishedText;
                        if (t) return r("div", {
                            class: n("finished-text")
                        }, [t])
                    }
                },
                R = () => {
                    if (x.value) return r(E, {
                        type: "block",
                        onRetry: u
                    }, null);
                    if (e.error && !e.loading && !e.finished) {
                        if (i.error || e.errorText) {
                            const t = i.error ? i.error() : e.errorText;
                            return r("div", {
                                class: n("inline-error"),
                                onClick: u
                            }, [t])
                        }
                        return r(E, {
                            class: n("inline-error"),
                            type: "inline",
                            onRetry: u
                        }, null)
                    }
                },
                w = () => {
                    if (e.loading && !e.finished) return r("div", {
                        class: n("loading")
                    }, [i.loading ? i.loading() : r(j, null, null)])
                },
                I = () => y.value ? r(A, {
                    type: "empty",
                    empty: {
                        text: e.emptyText || S("lobby.modal.noData")
                    }
                }, null) : null;
            return B({
                virtualizer: l.value
            }), () => {
                var t, h, g, b;
                return r("div", {
                    ref: v,
                    class: [n(), y.value || x.value ? n("center") : ""]
                }, [r("div", {
                    class: n("itemsbox"),
                    style: {
                        height: "".concat(O.value, "px")
                    }
                }, [r("div", {
                    class: n("items"),
                    style: {
                        transform: "translateY(".concat((g = (h = (t = f.value) == null ? void 0 : t[0]) == null ? void 0 : h.start) != null ? g : 0, "px)")
                    }
                }, [(b = f.value) == null ? void 0 : b.map(c => {
                    var L;
                    return r("div", {
                        class: n("item"),
                        key: c.key,
                        "data-index": c.index,
                        ref: V
                    }, [(L = i.default) == null ? void 0 : L.call(i, c)])
                })])]), w(), P(), R(), I()])
            }
        }
    }),
    _ = T(D),
    ee = T(Z);
export {
    _ as L, ee as V
};
//# sourceMappingURL=index.D6ayqpk3.js.map