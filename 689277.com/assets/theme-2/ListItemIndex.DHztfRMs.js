import {
    ap as C,
    a as I,
    c$ as A,
    eY as i,
    I as p,
    cx as S,
    q as N,
    cd as m
} from "./main.async.-NbSL2aO.js";
import {
    L as b
} from "./index.CNRfc5ss.js";
import {
    S as h
} from "./SourceTextIndex.CVAEoUbG.js";
import {
    k as w,
    bd as E,
    c as _,
    a5 as e
} from "../vendors/vendor-@vue.CBvhRkQp.js";
const D = "_listItem_1agin_25",
    L = "_itemContent_1agin_41",
    R = "_name_1agin_47",
    T = "_amountWrapper_1agin_61",
    W = "_currency_1agin_66",
    Y = "_h5ActivityCol_1agin_77",
    $ = "_h5ActivityExpiredStatus_1agin_88",
    B = "_time_1agin_91",
    O = "_activeTypeName_1agin_102",
    P = "_template_1agin_106",
    k = "_common_bganimation_1agin_1",
    n = {
        listItem: D,
        itemContent: L,
        name: R,
        amountWrapper: T,
        currency: W,
        h5ActivityCol: Y,
        h5ActivityExpiredStatus: $,
        time: B,
        activeTypeName: O,
        template: P,
        common_bganimation: k
    },
    [x] = N("pages-can-receive-list-item"),
    q = w({
        name: x,
        props: {
            listItem: {
                type: Object,
                default: null
            },
            hiddenDuration: {
                type: Boolean,
                default: !1
            }
        },
        setup(v, {
            slots: r
        }) {
            const y = C(),
                {
                    t: d
                } = I(),
                {
                    listItem: s
                } = E(v),
                f = _(() => {
                    var t, c;
                    return (c = A[((t = y.userInfos) == null ? void 0 : t.currency) || "CNY"]) == null ? void 0 : c.PAY_JB
                }),
                l = _(() => {
                    var u;
                    let t = String((u = s.value) == null ? void 0 : u.reward);
                    const {
                        logText: c,
                        template: o
                    } = s.value || {};
                    if (c && [i.Deposit, i.Promote, i.Ranking, i.DailyBonus, i.DiscountCode].includes(o)) {
                        const a = JSON.parse(c);
                        a && (a != null && a.reward || a != null && a.rangeAmount) && (t = (a == null ? void 0 : a.reward) || (a == null ? void 0 : a.rangeAmount) || "")
                    }
                    return t
                }),
                g = t => {
                    if (t && t.includes(",")) {
                        const [c, o] = t.split(",");
                        return "".concat(m(c), "-").concat(m(o))
                    }
                    return m(t)
                };
            return () => e(b, {
                class: n.listItem
            }, {
                default: () => {
                    var t;
                    return [e("div", {
                        class: n.itemContent
                    }, [e("div", {
                        class: n.name
                    }, [s.value.activeName]), (t = r.default) == null ? void 0 : t.call(r)]), e("div", {
                        class: n.amountWrapper
                    }, [l.value ? e("span", {
                        class: {
                            [n.currency]: !0
                        }
                    }, [e(p, {
                        src: f.value
                    }, null), e("span", null, [g(l.value || "0")])]) : null, s.value.activity ? e("span", {
                        class: {
                            [n.h5ActivityCol]: !0
                        }
                    }, [e(p, {
                        src: "/lobby_asset/common/web/common/comm_icon_shy.svg"
                    }, null), e("span", null, [s.value.activity])]) : null, e("span", {
                        class: n.time
                    }, [S(s.value.logCreateTime, "ymd")]), e("span", {
                        class: n.template
                    }, [e("span", {
                        class: n.activeTypeName
                    }, [d("lobby.records.activeTypeName"), ":"]), e(h, {
                        rewardData: s.value
                    }, null)])])]
                }
            })
        }
    });
export {
    q as L
};
//# sourceMappingURL=ListItemIndex.DHztfRMs.js.map