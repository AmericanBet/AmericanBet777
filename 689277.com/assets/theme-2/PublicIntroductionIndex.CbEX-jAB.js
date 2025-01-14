import {
    a as _,
    aH as I,
    i0 as L,
    x as B,
    m as H,
    i1 as b,
    eY as r,
    a6 as O,
    cx as C
} from "./main.async.-NbSL2aO.js";
import {
    d as P
} from "../vendors/vendor-default.p-wnugzB.js";
import {
    k as w,
    c as $,
    a5 as e,
    F,
    a4 as c
} from "../vendors/vendor-@vue.CBvhRkQp.js";
var x = (n => (n[n.firstIndex = 0] = "firstIndex", n[n.secondIndex = 1] = "secondIndex", n[n.thirdIndex = 2] = "thirdIndex", n[n.fourIndex = 3] = "fourIndex", n))(x || {});
const N = {
        eventData: {
            type: Object,
            require: !0,
            default: {}
        },
        isShowBottom: {
            type: Boolean,
            require: !1,
            default: !1
        }
    },
    W = "_introduction_3rxtc_25",
    R = "_paddingBottom_3rxtc_28",
    j = "_common_bganimation_3rxtc_1",
    g = {
        introduction: W,
        paddingBottom: R,
        common_bganimation: j
    },
    [q] = B("event-item-components-public-introduction"),
    V = w({
        name: q,
        props: N,
        setup(n) {
            const {
                t: i
            } = _(), s = $(() => {
                const {
                    language: o
                } = I(), {
                    isDefaultLangRuleText: t,
                    translateRuleText: a
                } = n.eventData || {};
                return t ? o : a
            }), T = o => {
                var v;
                const t = n.eventData,
                    {
                        siteInfos: a
                    } = H(),
                    d = P().utcOffset((v = a == null ? void 0 : a.timeZone) != null ? v : "").utcOffset() / 60,
                    m = l => C(l);
                return e("div", null, [e("span", {
                    class: "text-darken"
                }, [o, i("lobby.event.time", s.value), c(" (UTC"), d >= 0 && "+", d, c("):")]), e("div", null, [e("span", null, [m(t.startTime), c(" - "), m(t.endTime)]), t.timingList && e("div", null, [e("span", null, [i("lobby.event.validDay.renPocketTime", s.value), c(": ")]), t.timingList.map((l, D) => {
                    const f = b(l.timing, "HH:mm", !1),
                        p = b(l.timing + l.duration, "HH:mm", !1);
                    return e("span", {
                        key: f + p
                    }, ["".concat(D > 0 ? "," : "").concat(f, " - ").concat(p)])
                })])])])
            }, h = o => {
                const t = n.eventData;
                return e("div", null, [e("span", {
                    class: "text-darken"
                }, [o, i("lobby.event.condition", s.value), c(":")]), e("div", null, [e("span", null, [t.activeCondition])])])
            }, y = o => {
                const t = n.eventData;
                let a;
                switch (t.template) {
                    case r.Deposit:
                        a = i("lobby.event.conditionDeposit", s.value);
                        break;
                    case r.Wager:
                    case r.Rescue:
                    case r.LuckyWheel:
                    case r.LuckyWheelNew:
                    case r.LuckyBet:
                        a = i("lobby.event.conditionPlatform", s.value);
                        break
                }
                return e("div", null, [e("span", {
                    class: "text-darken"
                }, [o, a, c(":")]), e("div", null, [e("span", null, [t.conditionText])])])
            }, k = o => {
                var a;
                let t = (a = n.eventData) == null ? void 0 : a.content;
                return t.endsWith("\n") && (t = t.slice(0, -1)), e("div", null, [e("span", {
                    class: "text-darken"
                }, [o, i("lobby.event.content", s.value), c(":")]), e(O, {
                    tag: "div",
                    html: t
                }, null)])
            };
            return () => {
                const o = n.eventData,
                    t = [];
                return (o == null ? void 0 : o.isShowDetailTime) !== L.Hide && t.push(T), o.activeCondition && t.push(h), o.conditionText && t.push(y), o.content && t.push(k), e(F, null, [e("div", {
                    class: {
                        "public-introduction": !0, [g.introduction]: !0, [g.paddingBottom]: n.isShowBottom
                    }
                }, [e("div", {
                    class: "introduction-inner"
                }, [t.map((a, u) => a(t.length > 1 ? i("lobby.event.".concat(x[u]), s.value) : ""))])])])
            }
        }
    }),
    Z = V;
export {
    Z as P
};
//# sourceMappingURL=PublicIntroductionIndex.CbEX-jAB.js.map