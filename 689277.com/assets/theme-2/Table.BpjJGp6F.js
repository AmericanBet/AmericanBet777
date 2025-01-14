import {
    bI as R,
    c2 as P,
    c3 as c,
    bV as W,
    x as q,
    a0 as N
} from "./main.async.-NbSL2aO.js";
import "./main.Dmn05Mj-.js";
import "../vendors/vendor-default.p-wnugzB.js";
import "../vendors/vendor-bignumber.BRr1dcww.js";
import {
    L as S
} from "./index.D6ayqpk3.js";
import {
    k as $,
    r as m,
    o as B,
    w,
    c as u,
    a5 as i,
    aB as F,
    a4 as b
} from "../vendors/vendor-@vue.CBvhRkQp.js";
const O = {
        uniqueKey: {
            type: String,
            default: "id"
        },
        columns: {
            type: Array,
            required: !0
        },
        data: {
            type: Array,
            required: !0
        },
        list: {
            type: Object,
            default: () => ({})
        },
        onLoad: {
            type: Function,
            default: () => {}
        },
        onRetry: {
            type: Function,
            default: () => {}
        },
        reverse: {
            type: Boolean,
            default: !1
        },
        rowClassName: {
            type: Function,
            default: () => {}
        },
        popoverPlacement: R("top"),
        popoverOffset: {
            type: Array,
            default: () => [0, 6]
        }
    },
    [V, s] = q("table"),
    j = $({
        name: V,
        props: O,
        emits: ["clickTooltip"],
        setup(e, {
            emit: k
        }) {
            const y = m(),
                f = P(),
                v = m(c(750)),
                d = () => {
                    y.value && (v.value = y.value.clientWidth)
                };
            W("resize", d), B(() => {
                d()
            }), f && w(f, t => {
                t && d()
            }), w(() => e.data, () => {
                d()
            });
            const T = u(() => !Array.isArray(e.data) || !Array.isArray(e.columns)),
                C = u(() => {
                    var a, l;
                    const t = (l = (a = e.columns) == null ? void 0 : a.reduce((n, o) => n + ((o == null ? void 0 : o.width) || 0), 0)) != null ? l : 0;
                    return c(t)
                }),
                p = u(() => {
                    var l, n;
                    const t = v.value - C.value,
                        a = (n = (l = e.columns) == null ? void 0 : l.filter(o => !o.width).length) != null ? n : 0;
                    return a > 0 ? t / a : 0
                }),
                h = t => k("clickTooltip", t),
                A = t => typeof t.tooltip == "string" ? i(N, {
                    showArrow: !0,
                    placement: e.popoverPlacement,
                    offset: e.popoverOffset,
                    overlayStyle: {
                        zIndex: 2
                    },
                    overlayClass: s("tooltip-popover")
                }, {
                    reference: () => i("span", {
                        onClick: () => h(t),
                        class: s("tooltip")
                    }, [b("?")]),
                    default: i("span", {
                        class: s("tooltip-content"),
                        innerHTML: t.tooltip
                    }, null),
                    arrow: () => i("span", {
                        class: s("toltip-arrow")
                    }, null)
                }) : i("span", {
                    onClick: () => h(t),
                    class: s("tooltip")
                }, [b("?")]),
                g = t => {
                    const a = t.width ? "".concat(c(t.width), "px") : "".concat(p.value, "px");
                    return i("div", {
                        key: t.key,
                        class: s("thead-item"),
                        style: {
                            width: a
                        }
                    }, [i("span", {
                        class: [s("thead-cell"), t.tooltip && s("thead-cell-tooltip")]
                    }, [typeof t.title == "function" ? t.title(t) : t.title]), t.tooltip && A(t)])
                },
                x = () => {
                    var t;
                    return (t = e.data) == null ? void 0 : t.map((a, l) => {
                        var n, o;
                        return i("div", {
                            class: [s("cell"), (n = e == null ? void 0 : e.rowClassName) == null ? void 0 : n.call(e, a, l)],
                            key: a[e.uniqueKey]
                        }, [(o = e.columns) == null ? void 0 : o.map(r => {
                            const L = r.width ? "".concat(c(r.width), "px") : "".concat(p.value, "px");
                            return i("span", {
                                key: r.key,
                                class: s("cell-item"),
                                style: {
                                    width: L
                                }
                            }, [r.customRender ? r.customRender(a[r.key], a) : a[r.key]])
                        })])
                    })
                };
            return () => i("div", {
                ref: y,
                class: [s("table"), e.reverse && s("table-reverse")]
            }, [i("div", {
                class: s("thead")
            }, [Array.isArray(e.columns) && e.columns.map(g)]), i("div", {
                class: s("tbody")
            }, [i(S, F(e.list, {
                onLoad: e.onLoad,
                onRetry: e.onRetry
            }), {
                default: () => [!T.value && x()]
            })])])
        }
    });
export {
    j as T
};
//# sourceMappingURL=Table.BpjJGp6F.js.map