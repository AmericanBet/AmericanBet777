const __vite__fileDeps = ["assets/theme-2/Style0Index.CPCKAgMO.js", "assets/theme-2/main.async.-NbSL2aO.js", "assets/theme-2/main.Dmn05Mj-.js", "assets/vendors/vendor-default.p-wnugzB.js", "assets/vendors/vendor-bignumber.BRr1dcww.js", "assets/vendors/vendor-@vue.CBvhRkQp.js", "assets/vendors/vendor-stable.Cg92BvZJ.js", "assets/vendors/vendor-@intlify.BmUtFfVu.js", "assets/vendors/vendor-lodash.CYk3mlCa.js", "assets/vendors/vendor-@sentry.EjpkRnd3.js", "assets/vendors/vendor-swiper.BzK1hN__.js", "assets/vendors/vendor-swiper.BXGtF0w8.css", "assets/theme-2/main.BfZHN-pr.css", "assets/theme-2/SummaryInfoIndex.D1jJVlnQ.js", "assets/theme-2/SummaryInfoIndex.k5swougB.css", "assets/theme-2/PublicIntroductionIndex.CbEX-jAB.js", "assets/theme-2/PublicIntroductionIndex.Be0LbCOr.css", "assets/theme-2/SignItemIndex.D-HDQ9rq.js", "assets/theme-2/SignItemIndex.afwMyJvZ.css", "assets/theme-2/Style0Index.gL3ASBCE.css", "assets/theme-2/Style1Index.MLm9YzWe.js", "assets/theme-2/Style1Index.VRsU_P_O.css", "assets/theme-2/Style2Index.MQoH6PU0.js", "assets/theme-2/Style2Index.BthSgFvV.css", "assets/theme-2/Style3Index.CLs8K9qP.js", "assets/theme-2/SignItemIndex.DJpNfYmh.js", "assets/theme-2/SignItemIndex.BfTbWqeU.css", "assets/theme-2/Style3Index.DnFfrarO.css", "assets/theme-2/Style4Index.C-cHv33o.js", "assets/theme-2/Style4Index.qLh2HSGQ.css", "assets/theme-2/Style5Index.DJ9pAot2.js", "assets/theme-2/Style5Index.CXfZPYol.css", "assets/theme-2/Style6Index.C-RdG1m3.js", "assets/theme-2/Style6Index.I0YQZ82f.css"],
    __vite__mapDeps = i => i.map(i => __vite__fileDeps[i]);
import {
    _ as n
} from "./main.Dmn05Mj-.js";
import {
    d1 as g,
    hI as s,
    a as O,
    ap as R,
    aH as I,
    X as N,
    x as V,
    u as x,
    an as h,
    cg as q
} from "./main.async.-NbSL2aO.js";
import {
    s as S
} from "../vendors/vendor-stable.Cg92BvZJ.js";
import {
    k as M,
    r as w,
    c as T,
    a7 as j,
    o as k,
    w as _,
    aG as F,
    aN as H,
    a5 as m,
    F as U
} from "../vendors/vendor-@vue.CBvhRkQp.js";
const z = {
        pageType: {
            type: Number,
            require: !1,
            default: g.Normal
        },
        activeId: {
            type: Number,
            require: !0
        },
        eventId: {
            type: Number,
            require: !1
        },
        activeTabId: {
            type: Number,
            require: !1
        }
    },
    [B] = V("event-item-modes-sign"),
    G = M({
        name: B,
        props: z,
        setup(t) {
            const r = {
                    0: () => n(() =>
                        import ("./Style0Index.CPCKAgMO.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])),
                    1: () => n(() =>
                        import ("./Style1Index.MLm9YzWe.js"), __vite__mapDeps([20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 21])),
                    2: () => n(() =>
                        import ("./Style2Index.MQoH6PU0.js"), __vite__mapDeps([22, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 23])),
                    3: () => n(() =>
                        import ("./Style3Index.CLs8K9qP.js"), __vite__mapDeps([24, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 25, 26, 27])),
                    4: () => n(() =>
                        import ("./Style4Index.C-cHv33o.js"), __vite__mapDeps([28, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 25, 26, 29])),
                    5: () => n(() =>
                        import ("./Style5Index.DJ9pAot2.js"), __vite__mapDeps([30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 31])),
                    6: () => n(() =>
                        import ("./Style6Index.C-RdG1m3.js"), __vite__mapDeps([32, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 33]))
                },
                f = s(),
                {
                    itemErr: E,
                    signCacheData: p,
                    signData: b,
                    signDisplayType: u
                } = S(f),
                {
                    updateSignData: l,
                    updateSignCacheData: P
                } = f,
                {
                    t: A
                } = O(),
                {
                    userInfos: c
                } = S(R()),
                v = w(!1),
                L = T(() => j(r[u.value])),
                D = T(() => {
                    var a;
                    return !((a = b.value) != null && a.activeData) || !v.value || u.value === void 0 ? "nested-loading" : E.value ? "retry" : null
                }),
                y = async () => {
                    var a;
                    if (u.value !== void 0) try {
                        v.value = !1, await ((a = r[u.value]) == null ? void 0 : a.call(r)), v.value = !0
                    } catch (e) {
                        console.error("componentLoaded failed", e)
                    }
                };
            return k(() => {
                y()
            }), _(() => r[u.value], () => {
                y()
            }), _(() => s().eventItemData, a => {
                var o, i;
                if (!a.id || t.activeId !== a.id || t.activeTabId && t.activeTabId !== a.id) return;
                const e = p.value[0],
                    {
                        language: d
                    } = I();
                e && (e != null && e.username) && ((o = c.value) != null && o.username) && (e != null && e.lang) && e.id === a.id && (e == null ? void 0 : e.lang) === d && String(e == null ? void 0 : e.username) === String((i = c.value) == null ? void 0 : i.username) && P(a), l(a)
            }, {
                deep: !0
            }), _(() => s().itemErr, a => {
                s().updateErrorInfo(a), a && (l({}), x().close("eventSign"), h().freshDiscountRedDot(), q().getEventCategoriesAndEvents())
            }), F(() => {
                var d;
                if (t.activeTabId && t.activeTabId !== t.activeId) return;
                const {
                    language: a
                } = I(), e = (d = p.value) == null ? void 0 : d.find(o => {
                    var i;
                    return o.id === t.activeId && o.username === String((i = c.value) == null ? void 0 : i.username) && o.lang === a
                });
                (t.pageType === g.HomeModal || t.pageType === g.PayAfterModal) && (e ? l(e) : t.activeId && s().getEventItemDetail(t.activeId))
            }), H(() => {
                l({})
            }), () => m(U, null, [m(N, {
                empty: {
                    text: A("lobby.event.luckyWheel.tabs.noData")
                },
                class: "placeholder",
                type: D.value
            }, {
                default: () => [!E.value && !D.value && m(L.value, t, null)]
            })])
        }
    }),
    J = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: G
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    z as E, G as S, J as a
};
//# sourceMappingURL=SignIndex.xUa4-35n.js.map