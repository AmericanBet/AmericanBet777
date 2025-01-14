import {
    d1 as Ye,
    a as P,
    cd as x,
    q as V,
    i2 as L,
    hK as _,
    hL as ge,
    cx as ce,
    x as ue,
    m as Fe,
    as as Ue,
    E as Je,
    b as Ze,
    hM as Ke,
    co as Xe,
    hN as we,
    i3 as De,
    cE as Ce,
    cX as Z,
    hP as Ge,
    cN as he,
    a6 as se,
    M as xe,
    ap as Ie,
    X as Le,
    hQ as ye,
    d8 as ze,
    hR as ve,
    i4 as Ee,
    _ as Qe,
    bC as et,
    hS as G,
    i5 as tt,
    gb as nt,
    cF as at,
    i6 as je,
    I as N,
    cA as D,
    aP as ot,
    u as Me,
    h$ as oe,
    $ as Te,
    i7 as ee,
    cT as st,
    cR as lt,
    i8 as rt,
    n as it,
    cM as ct,
    R as Re,
    aH as ut,
    hZ as be,
    h_ as Ne,
    hY as dt
} from "./main.async.-NbSL2aO.js";
import {
    s as H
} from "../vendors/vendor-stable.Cg92BvZJ.js";
import {
    R as mt,
    E as Pe
} from "./ReceiveCountdownIndex.CrNog2Lx.js";
import {
    P as _t
} from "./index.BCftLJjj.js";
import {
    k as j,
    bd as ke,
    c as b,
    a5 as e,
    r as k,
    ax as We,
    aB as vt,
    w as Se,
    o as bt,
    b as qe,
    n as pt,
    bz as Oe,
    br as Be
} from "../vendors/vendor-@vue.CBvhRkQp.js";
import {
    d as re,
    e as yt
} from "../vendors/vendor-default.p-wnugzB.js";
import {
    a as gt
} from "./activeReceiveOne.DSlNTkxg.js";
import {
    e as Ve
} from "../vendors/vendor-lodash.CYk3mlCa.js";
import {
    A as wt,
    S as ft,
    a as ht
} from "../vendors/vendor-swiper.BzK1hN__.js";
import {
    L as xt
} from "./index.D6ayqpk3.js";
import {
    P as Tt
} from "./PublicIntroductionIndex.CbEX-jAB.js";
import {
    a as St
} from "./props.BOsWQ7Qa.js";
import {
    B as Ct
} from "../vendors/vendor-bignumber.BRr1dcww.js";
import {
    T as It
} from "./index.D8AEoeVh.js";
import {
    c as kt
} from "./ShareModule.BQ4SzjDQ.js";
import "./main.Dmn05Mj-.js";
import "../vendors/vendor-@sentry.EjpkRnd3.js";
import "../vendors/vendor-@intlify.BmUtFfVu.js";
import "./Progress.CAeh84El.js";
import "./List.BPt-sskq.js";
import "./Table.BpjJGp6F.js";
import "./index.JcARDJEC.js";
import "./CopyIndex.C4IXAgq0.js";
const Ot = {
        pageType: {
            type: Number,
            require: !1,
            default: Ye.Normal
        },
        activeId: {
            type: Number,
            require: !0
        }
    },
    Bt = "_progressBox_5nfsa_25",
    At = "_progresBoxContent_5nfsa_30",
    $t = "_common_bganimation_5nfsa_1",
    te = {
        progressBox: Bt,
        progresBoxContent: At,
        "has-progress": "_has-progress_5nfsa_34",
        common_bganimation: $t
    },
    [Dt] = V("event-item-new-cut-once-progress"),
    Et = j({
        name: Dt,
        props: {
            currentAward: {
                type: Number,
                default: 0
            },
            totalAward: {
                type: Number,
                default: 0
            },
            canShowAward: {
                type: Boolean,
                default: !1
            }
        },
        setup(t) {
            const {
                t: a
            } = P(), {
                currentAward: u,
                totalAward: r
            } = ke(t), n = b(() => {
                const o = +(u.value / r.value * 100) || 0;
                return o > 0 && o < 5 ? 5 : o > 95 && o < 100 ? 95 : o
            }), s = b(() => (r.value * 100 - u.value * 100) / 100);
            return () => e("div", {
                class: te.progressBox
            }, [e("div", {
                class: {
                    [te.progresBoxContent]: t.canShowAward
                }
            }, [e("div", {
                class: {
                    [te.text]: !0,
                    [te["no-undone-amount"]]: s.value === r.value
                }
            }, [e(_t, {
                class: te.progress,
                percent: n.value,
                text: t.canShowAward ? a("lobby.event.newCutOnce.progressingpProgress1", {
                    totalAward: x(r.value || 0)
                }) : a("lobby.event.newCutOnce.progressingpProgress2", {
                    undoneAmount: x(s.value || 0)
                })
            }, null)])]), !t.canShowAward && e("div", {
                class: te["has-progress"]
            }, [a("lobby.event.newCutOnce.notStartProgress", {
                totalAward: x(r.value)
            })])])
        }
    }),
    jt = "_receiveBottom_3jiqn_25",
    Mt = "_showAward_3jiqn_40",
    Rt = "_bigMargin_3jiqn_47",
    Nt = "_showProgress_3jiqn_51",
    Pt = "_countdown_3jiqn_34",
    Lt = "_showRecord_3jiqn_62",
    zt = "_expiredTips_3jiqn_65",
    Wt = "_progress_3jiqn_68",
    qt = "_common_bganimation_3jiqn_1",
    U = {
        receiveBottom: jt,
        "refresh-countdown-box": "_refresh-countdown-box_3jiqn_33",
        "countdown-reset": "_countdown-reset_3jiqn_34",
        showAward: Mt,
        bigMargin: Rt,
        showProgress: Nt,
        countdown: Pt,
        showRecord: Lt,
        expiredTips: zt,
        progress: Wt,
        common_bganimation: qt
    },
    [Vt] = ue("event-item-modes-new-cut-once-receive-bottom"),
    fe = ({
        type: t,
        timestamp: a = Ue().getServerTime() * 1e3,
        endTime: u,
        startTime: r
    }) => {
        var c, v, l, m;
        const {
            siteInfos: n
        } = Fe(), s = re(a).utcOffset((c = n == null ? void 0 : n.timeZone) != null ? c : "");
        let o;
        switch (t) {
            case "day":
                o = re(a).utcOffset((v = n == null ? void 0 : n.timeZone) != null ? v : "").endOf("day");
                break;
            case "week":
                o = re(a).utcOffset((l = n == null ? void 0 : n.timeZone) != null ? l : "").day(7).endOf("day");
                break;
            case "month":
                o = re(a).utcOffset((m = n == null ? void 0 : n.timeZone) != null ? m : "").endOf("month").endOf("day");
                break;
            default:
                throw new Error("Invalid type")
        }
        if (o && o.valueOf() / 1e3 > u) o = re(u);
        else if (s && s.valueOf() / 1e3 < r) return 0;
        return o.diff(s, "seconds")
    },
    Ht = j({
        name: Vt,
        setup() {
            const {
                t
            } = P(), a = Ze(), u = L(), {
                newCutOnceData: r,
                subTaskData: n
            } = H(u), s = b(() => {
                var d;
                return ((d = n.value) == null ? void 0 : d.receiveStatus) || _.Processing
            }), o = () => {
                a.push({
                    name: Je.RECORDS
                })
            }, c = b(() => [_.CanReceive, _.Expired, _.HasReceive, _.Distributed, _.PendingCheck].includes(s.value)), v = b(() => ![_.CanReceive, _.Distributed, _.HasReceive, _.PendingCheck, _.PendingApply, _.Cancel, _.Expired].includes(s.value)), l = b(() => {
                var d;
                return Date.now() / 1e3 < ((d = r.value) == null ? void 0 : d.startTime)
            }), m = b(() => {
                var d;
                return Date.now() / 1e3 > ((d = r.value) == null ? void 0 : d.endTime)
            }), p = b(() => {
                var w, h;
                const d = (h = (w = n.value) == null ? void 0 : w.receivePeriodTime) != null ? h : 0;
                return [_.PendingCheck, _.CanReceive].includes(s.value) && d > 0
            }), f = b(() => !(s.value === _.CanReceive || s.value === _.PendingCheck)), y = b(() => {
                var M, E, R, z, Y, K;
                const d = (E = (M = n.value) == null ? void 0 : M.receivePeriodTime) != null ? E : 0;
                let w = 0;
                const h = (R = r.value) == null ? void 0 : R.endTime,
                    C = (z = r.value) == null ? void 0 : z.startTime;
                switch ((K = (Y = r.value) == null ? void 0 : Y.activeData) == null ? void 0 : K.cycle_type) {
                    case ge.Day:
                        w = fe({
                            type: "day",
                            endTime: h,
                            startTime: C
                        });
                        break;
                    case ge.Week:
                        w = fe({
                            type: "week",
                            endTime: h,
                            startTime: C
                        });
                        break;
                    case ge.Month:
                        w = fe({
                            type: "month",
                            endTime: h,
                            startTime: C
                        });
                        break
                }
                return f.value ? w : Math.abs(new Date().getTime() / 1e3 - d)
            }), g = b(() => !!y.value && ([_.PendingCheck, _.CanReceive, _.Processing].includes(s.value) || !l.value && !m.value && p.value)), i = b(() => {
                const {
                    currentAwardValue: d = 0,
                    canReceive: w
                } = n.value || {};
                return !!(d && w)
            });
            return () => {
                var d, w, h, C, M, E, R, z;
                return e("div", {
                    class: {
                        [U.receiveBottom]: !0,
                        [U.showAward]: c.value,
                        [U.showProgress]: v.value,
                        [U.bigMargin]: c.value && !g.value
                    }
                }, [g.value && e("span", {
                    class: U.countdown
                }, [e(mt, {
                    textFormatType: i.value ? Pe.Expired2 : Pe.Reset,
                    duration: y.value,
                    onComplete: u.refreshNewCutOnceData
                }, null)]), !g.value && [_.HasReceive, _.Distributed, _.Cancel].includes(s.value) && e("span", {
                    class: U.showRecord,
                    onClick: o
                }, [t("lobby.event.newCutOnce.gotoRecord")]), !g.value && s.value === _.Expired && e("span", {
                    class: U.expiredTips
                }, [t("lobby.event.expiredTip", [ce((w = (d = n.value) == null ? void 0 : d.receivePeriodTime) != null ? w : 0)])]), v.value && e(Et, {
                    currentAward: (h = n.value) == null ? void 0 : h.currentAwardValue,
                    totalAward: (E = (M = (C = r.value) == null ? void 0 : C.activeData) == null ? void 0 : M.award) != null ? E : 0,
                    canShowAward: ((z = (R = r.value) == null ? void 0 : R.activeData) == null ? void 0 : z.chop_one_knife_id) === 0,
                    class: U.progress
                }, null)])
            }
        }
    }),
    Yt = "_receiveTop_1rguv_25",
    Ft = "_flexBox_1rguv_30",
    Ut = "_text_1rguv_35",
    Jt = "_againBtn_1rguv_56",
    Zt = "_receiveBtn_1rguv_62",
    Kt = "_disabled_1rguv_71",
    Xt = "_expired_1rguv_75",
    Gt = "_forbidContent_1rguv_80",
    Qt = "_common_bganimation_1rguv_1",
    ne = {
        receiveTop: Yt,
        flexBox: Ft,
        text: Ut,
        againBtn: Jt,
        receiveBtn: Zt,
        disabled: Kt,
        expired: Xt,
        forbidContent: Gt,
        common_bganimation: Qt
    };

function en(t) {
    return typeof t == "function" || Object.prototype.toString.call(t) === "[object Object]" && !We(t)
}
const [tn] = ue("event-item-modes-new-cut-once-top-content"), nn = j({
    name: tn,
    setup() {
        const {
            t
        } = P(), a = L(), {
            newCutOnceData: u,
            againLoading: r,
            activeData: n,
            subTaskData: s
        } = H(a), o = k(!1), c = b(() => {
            var y;
            return ((y = s.value) == null ? void 0 : y.receiveStatus) || _.Processing
        }), v = b(() => !(c.value === _.CanReceive || c.value === _.PendingCheck)), l = b(() => {
            const y = c.value ? Ke(c.value) : t("lobby.event.cutOnce.receive");
            return Xe(y)
        }), m = b(() => [_.CanReceive, _.Expired, _.HasReceive, _.Distributed, _.PendingCheck].includes(c.value)), p = b(() => {
            var i, d, w, h, C, M, E, R, z, Y, K, le, de, me, _e;
            if (m.value) return t("lobby.event.cutOnce.awardText", {
                x: x(n.value.award)
            });
            if ((i = s.value) != null && i.currentAwardValue && !((d = s.value) != null && d.canReceive)) return ((w = n.value) == null ? void 0 : w.isShowTotalAWard) === we.Hide ? t("lobby.event.newCutOnce.awardText2", ["<span>".concat(x((h = s.value) == null ? void 0 : h.currentAwardValue), "</span>")]) : t("lobby.event.newCutOnce.awardText1", ["<span>".concat(x((C = s.value) == null ? void 0 : C.currentAwardValue), "</span>"), '<span class="max">'.concat(x(n.value.showMaxAWard), "</span>")]);
            if (((M = n.value) == null ? void 0 : M.isShowTotalAWard) === we.Hide && ((E = n.value) == null ? void 0 : E.award_type) === De.Hide) return t("lobby.event.cutOnce.awardText1", {
                x: x(n.value.award)
            });
            let y = (z = (R = n.value) == null ? void 0 : R.showMinAWard) != null ? z : 0,
                g = (K = (Y = n.value) == null ? void 0 : Y.showMaxAWard) != null ? K : 0;
            return ((le = n.value) == null ? void 0 : le.isShowTotalAWard) === we.Hide && ((de = n.value) == null ? void 0 : de.award_type) === De.Show && (y = (me = n.value) == null ? void 0 : me.rand_award_min, g = (_e = n.value) == null ? void 0 : _e.rand_award_max), t("lobby.event.cutOnce.bonus", {
                x: x(y),
                y: x(g)
            })
        }), f = Ve(async () => {
            var g, i, d, w, h, C;
            if (o.value || !s.value || c.value === _.Expired) return;
            if (o.value = !0, await Ce.check({
                    eventData: { ...u.value,
                        receiveStatus: (d = (i = (g = u.value) == null ? void 0 : g.activeData) == null ? void 0 : i.SubTaskData) == null ? void 0 : d.receiveStatus
                    },
                    checkOptions: {
                        [Z.forbidReceive]: !0,
                        [Z.receiveType]: !0,
                        [Z.task]: !0,
                        [Z.pendingCheck]: !0
                    }
                })) {
                o.value = !1;
                return
            }
            const y = Ge(n.value);
            if ((w = s.value) != null && w.receiveDuration && y) {
                he({
                    message: () => y
                }), o.value = !1;
                return
            }
            await gt({
                params: {
                    activeId: (h = u.value) == null ? void 0 : h.id,
                    receiveId: String((C = s.value) == null ? void 0 : C.receiveId)
                },
                judgeResBefore: () => {
                    o.value = !1, a.refreshNewCutOnceData()
                }
            })
        }, 300);
        return () => {
            var g;
            let y;
            return e("div", {
                class: ne.receiveTop
            }, [e(se, {
                class: ne.text,
                html: p.value
            }, null), (g = s.value) != null && g.isCanAgain ? e(xe, {
                loading: r.value,
                size: "small",
                type: "primary",
                class: {
                    [ne.againBtn]: !0
                },
                onClick: a.handleNewCutOnceAgain
            }, en(y = t("lobby.event.newCutOnce.again")) ? y : {
                default: () => [y]
            }) : e(xe, {
                class: {
                    [ne.receiveBtn]: !0,
                    [ne.disabled]: v.value,
                    [ne.expired]: c.value === _.Expired
                },
                disabled: v.value || c.value === _.Expired,
                size: "small",
                type: "primary",
                onClick: f,
                loading: o.value
            }, {
                default: () => [l.value]
            })])
        }
    }
}), an = "_winning_1nd5j_25", on = "_swipperBox_1nd5j_29", sn = "_swiperSlide_1nd5j_32", ln = "_announceItem_1nd5j_42", rn = "_name_1nd5j_49", cn = "_content_1nd5j_55", un = "_common_bganimation_1nd5j_1", ae = {
    winning: an,
    swipperBox: on,
    swiperSlide: sn,
    announceItem: ln,
    name: rn,
    content: cn,
    common_bganimation: un
}, [dn] = V("event-item-new-cut-once-announce"), mn = j({
    name: dn,
    setup() {
        const {
            t
        } = P(), a = L(), u = b(() => {
            var o, c, v;
            const n = (o = a.newCutOnceData) == null ? void 0 : o.startTime;
            if (n && Date.now() / 1e3 < n) return [];
            const s = String(((c = Ie().userInfos) == null ? void 0 : c.username) || "");
            return ((v = a.newCutOnceAnnounce.find(l => l.username === s && a.activeId === l.activeId)) == null ? void 0 : v.list) || []
        }), r = k({
            autoplay: {
                delay: 2e3,
                disableOnInteraction: !1,
                stopOnLastSlide: !0
            },
            direction: "vertical",
            loop: !1,
            roundLengths: !0,
            initialSlide: 0,
            spaceBetween: 0,
            slidesPerView: "auto",
            modules: [wt]
        });
        return () => e(ze, {
            class: ae.winning,
            scrollbarTrigger: "none"
        }, {
            default: () => {
                var n;
                return [e(Le, {
                    type: (n = u.value) != null && n.length ? null : "empty",
                    empty: {
                        text: t("lobby.event.luckyWheel.tabs.noData")
                    }
                }, {
                    default: () => [a.curTab === ye.Announce && e(ft, vt({
                        class: ae.swipperBox
                    }, r.value), {
                        default: () => {
                            var s;
                            return [(s = u.value) == null ? void 0 : s.map(o => e(ht, {
                                class: ae.swiperSlide,
                                key: o.nickname + o.prize + o.dateTime
                            }, {
                                default: () => {
                                    var c;
                                    return [e("div", {
                                        class: ae.announceItem
                                    }, [e("span", {
                                        class: ae.name
                                    }, [o.nickname]), e("div", {
                                        class: ae.content
                                    }, [e(se, {
                                        html: t("lobby.event.cutOnce.announcement", {
                                            time: ce(o.dateTime, "ymd"),
                                            prize: x((c = o == null ? void 0 : o.prize) != null ? c : 0)
                                        })
                                    }, null)])])]
                                }
                            }))]
                        }
                    })]
                })]
            }
        })
    }
}), _n = "_list_178h9_25", vn = "_row_178h9_29", bn = "_time_178h9_43", pn = "_content_178h9_47", yn = "_text_178h9_50", gn = "_common_bganimation_178h9_1", ie = {
    list: _n,
    row: vn,
    time: bn,
    content: pn,
    text: yn,
    common_bganimation: gn
}, [wn] = V("event-item-new-cut-once-records"), fn = j({
    name: wn,
    setup() {
        const {
            t
        } = P(), a = L(), u = ({
            AmountType: r,
            Amount: n,
            Remark: s
        }) => {
            var c, v;
            const o = {
                [ve.FirstAward]: () => {
                    var p;
                    let l = [];
                    s && Ee(s) && (l = JSON.parse(s));
                    const m = (p = l[1]) != null ? p : 0;
                    return m ? t("lobby.event.newCutOnce.firstAward", [l[0], "<span>".concat(x(m), "</span>")]) : t("lobby.event.newCutOnce.firstAward1", [l[0]])
                },
                [ve.SecondAward]: () => {
                    let l = [];
                    return s && Ee(s) && (l = JSON.parse(s)), t("lobby.event.newCutOnce.secondAward", [l[0]])
                },
                [ve.FinishTask]: () => t("lobby.event.newCutOnce.finishTask", ["<span>".concat(x(n || 0), "</span>")]),
                [ve.GetAward]: () => t("lobby.event.newCutOnce.getAward", ["<span>".concat(x(n || 0), "</span>")])
            };
            return (v = (c = o[r]) == null ? void 0 : c.call(o)) != null ? v : ""
        };
        return () => e(xt, {
            class: ie.list,
            emptyText: t("lobby.event.luckyWheel.tabs.noData")
        }, {
            default: () => {
                var r;
                return [(r = a.newCutOnceRecordList) == null ? void 0 : r.map(n => e("div", {
                    class: ie.row,
                    key: n.userIdx + n.CreatedTime
                }, [e("span", {
                    class: ie.time
                }, [ce(n.CreatedTime)]), e("span", {
                    class: ie.content
                }, [e(se, {
                    class: ie.text,
                    html: u(n)
                }, null)])]))]
            }
        })
    }
}), hn = "_rule_1mhbu_25", xn = "_common_bganimation_1mhbu_1", Tn = {
    rule: hn,
    common_bganimation: xn
}, [Sn] = V("event-item-new-cut-once-rule"), Cn = j({
    name: Sn,
    setup() {
        const t = L();
        return () => e("div", {
            class: Tn.rule
        }, [e(Tt, {
            eventData: t.newCutOnceData
        }, null)])
    }
}), In = "_tabs_cyzrm_25", kn = "_common_bganimation_cyzrm_1", On = {
    tabs: In,
    common_bganimation: kn
};

function Bn(t) {
    return typeof t == "function" || Object.prototype.toString.call(t) === "[object Object]" && !We(t)
}
const [An] = V("event-item-new-cut-once-tab-list"), $n = j({
    name: An,
    setup() {
        const {
            t
        } = P(), a = L(), {
            newCutOnceData: u,
            curTab: r
        } = H(a);
        Se(r, s => {
            a.updateCurTab(s)
        });
        const n = b(() => {
            var s, o, c;
            return [{
                label: () => t("lobby.event.cutOnce.rule"),
                value: ye.Rule,
                display: !0,
                component: () => e(Cn, null, null)
            }, {
                label: () => t("lobby.event.cutOnce.winningAnnouncement"),
                value: ye.Announce,
                display: (c = (o = (s = u.value) == null ? void 0 : s.activeData) == null ? void 0 : o.isShowAnnouncement) != null ? c : !1,
                component: () => e(mn, null, null)
            }, {
                label: () => t("lobby.event.cutOnce.myRecord"),
                value: ye.Record,
                display: !0,
                component: () => e(fn, null, null)
            }].filter(v => v.display)
        });
        return () => {
            let s;
            return e(et, {
                shrink: !0,
                active: r.value,
                "onUpdate:active": o => r.value = o,
                animated: !0,
                class: [On.tabs]
            }, Bn(s = n.value.map(o => e(Qe, {
                key: o.value,
                name: o.value,
                title: () => {
                    var c;
                    return e("span", {
                        style: {
                            fontSize: ".24rem"
                        }
                    }, [(c = o.label) == null ? void 0 : c.call(o)])
                }
            }, {
                default: o.component
            }))) ? s : {
                default: () => [s]
            })
        }
    }
}), Dn = () => {
    const t = L(),
        a = k(!1),
        {
            activeData: u,
            turntableAwardList: r,
            activeId: n,
            rotateIdxs: s
        } = H(t),
        o = k(void 0),
        c = k(0),
        v = 360 * 5,
        l = k(!1),
        m = k(0),
        p = k(!1),
        f = k(!1),
        y = k(0),
        g = k(null),
        i = k(G.Default),
        d = k(null),
        w = k(null),
        h = k(null),
        C = k(!1),
        M = 300,
        E = 6,
        R = (I = !1) => {
            a.value = I
        },
        z = (I, A) => {
            let O;
            try {
                const $ = new Uint32Array(1);
                window.crypto.getRandomValues($), O = $[0] / 4294967296
            } catch ($) {
                O = Ct.random()
            }
            return O * (A - I) + I
        },
        Y = I => {
            if (I.length === 0) {
                h.value && (clearTimeout(h.value), f.value = !1), f.value = !0, h.value = setTimeout(() => {
                    K()
                }, 680);
                return
            }
            const A = I.shift();
            y.value = A, w.value = setTimeout(() => {
                Y(I)
            }, M / E)
        },
        K = async () => {
            await t.refreshNewCutOnceData(), p.value = !1, f.value = !1
        };
    Se(p, I => {
        var A, O;
        if (I) {
            const $ = [(A = u.value) == null ? void 0 : A.award, m.value];
            for (; $.length <= E;) {
                const W = z(m.value, (O = u.value) == null ? void 0 : O.award);
                $.find(Q => Q === W) || $.push(W)
            }
            w.value && clearTimeout(w.value);
            const F = $.sort((W, Q) => Q - W);
            Y(F)
        }
    });
    const le = I => {
            var W, Q, $e;
            const A = (W = r.value) == null ? void 0 : W.findIndex(He => +He.index == +I),
                O = ($e = (Q = r.value) == null ? void 0 : Q.length) != null ? $e : 0,
                $ = O ? 360 / O : 0,
                F = A * $;
            return o.value = A, 360 - F
        },
        de = () => {
            d.value && clearTimeout(d.value)
        },
        me = () => {
            i.value = G.Spining, d.value = setTimeout(() => {
                l.value = !0, i.value = G.Winning, p.value = !0, t.updateJinBiSpinning(!0), d.value = setTimeout(() => {
                    a.value = !1, i.value = G.Default
                }, 1e3)
            }, 5e3)
        },
        _e = async I => {
            de(), a.value = !0;
            const [A, O] = await yt(tt(n.value));
            if (A) {
                await Ce.checkRes({
                    config: {
                        err: A,
                        userRestrictCallback: () => nt.closeDialog(I)
                    },
                    checkOptions: {
                        [at.userRestrict]: !0
                    }
                }), t.refreshNewCutOnceData(), a.value = !1;
                return
            }
            const $ = le(O.SubTaskData.index),
                F = Math.floor(c.value / v);
            l.value = !1, c.value = (F + 1) * v + $, m.value = O.amount, g.value = O.SubTaskData.NextTaskListItemInfo, t.updateRotateIdxs(O.SubTaskData.index), me()
        },
        Ae = () => {
            var $;
            if (!n.value) return;
            let I = 0;
            const A = ($ = s.value) == null ? void 0 : $.find(F => {
                var W;
                return String(F.username) === String((W = Ie().userInfos) == null ? void 0 : W.username) && n.value === F.activeId
            });
            s.value && A && (I = A.rotateDegIdx);
            const O = le(I);
            c.value = O, pt(() => {
                C.value = !0
            })
        };
    return Se(n, () => {
        Ae()
    }), bt(() => {
        Ae()
    }), qe(() => {
        d.value && clearTimeout(d.value), w.value && clearTimeout(w.value), h.value && clearTimeout(h.value)
    }), {
        spinning: a,
        amountScale: f,
        showAmount: y,
        borderType: i,
        nextTaskListItemInfo: g,
        rotatePosition: c,
        winningIndex: o,
        amountAnimate: p,
        turntableBgTransition: C,
        setSpinning: R,
        runLottery: _e
    }
}, En = "_awardItem_1np9l_25", jn = "_firstAward_1np9l_37", Mn = "_center_1np9l_46", Rn = "_text_1np9l_53", Nn = "_icon_1np9l_66", Pn = "_turntableStyle1_1np9l_73", Ln = "_turntableStyle2_1np9l_77", zn = "_turntableStyle3_1np9l_81", Wn = "_turntableStyle4_1np9l_85", qn = "_turntableStyle5_1np9l_89", Vn = "_turntableStyle6_1np9l_93", Hn = "_turntablePointer_1np9l_101", Yn = "_winningAnimation_1np9l_112", Fn = "_winning_1np9l_112", Un = "_common_bganimation_1np9l_1", J = {
    awardItem: En,
    firstAward: jn,
    center: Mn,
    text: Rn,
    icon: Nn,
    turntableStyle1: Pn,
    turntableStyle2: Ln,
    turntableStyle3: zn,
    turntableStyle4: Wn,
    turntableStyle5: qn,
    turntableStyle6: Vn,
    turntablePointer: Hn,
    winningAnimation: Yn,
    winning: Fn,
    common_bganimation: Un
}, [Jn] = V("event-item-new-cut-once-award-item"), Zn = j({
    name: Jn,
    props: {
        awardItem: {
            type: Object,
            default: null
        },
        awardIndex: {
            type: Number,
            default: 0
        },
        awardLen: {
            type: Number,
            default: 0
        },
        winning: {
            type: Boolean,
            default: !1
        },
        winningIndex: {
            type: Number,
            default: 0
        },
        pointerWidth: {
            type: Number,
            default: 0
        },
        pointerHeight: {
            type: Number,
            default: 0
        },
        styleType: {
            type: Number,
            default: 1
        }
    },
    setup(t) {
        const {
            t: a
        } = P(), {
            awardItem: u,
            awardIndex: r,
            awardLen: n,
            winning: s,
            winningIndex: o,
            pointerWidth: c,
            pointerHeight: v,
            styleType: l
        } = ke(t), m = b(() => {
            var f, y, g;
            let p = "";
            return ((f = u.value) == null ? void 0 : f.awardType) === je.EAwardTypeConst ? p = x((y = u.value) == null ? void 0 : y.awardValue) : ((g = u.value) == null ? void 0 : g.awardType) === je.EAwardTypeRand ? p = "?" : p = a("lobby.event.bet.unintendedPrize"), p
        });
        return () => {
            var p, f;
            return e("div", {
                class: [J.awardItem, J["turntableStyle".concat(l.value)], "turntable-style".concat(n.value)],
                "data-key": r.value,
                style: {
                    transform: "rotate(".concat(r.value * (360 / n.value), "deg)")
                }
            }, [e("div", {
                class: J.firstAward
            }, [e("div", {
                class: J.center
            }, [e("span", {
                class: [J.text, "award-item-text"]
            }, [m.value])]), ((p = u.value) == null ? void 0 : p.awardIcon) && e(N, {
                class: J.icon,
                src: (f = u.value) == null ? void 0 : f.awardIcon
            }, null)]), s.value && o.value === r.value && e(N, {
                class: {
                    [J.turntablePointer]: !0,
                    [J.winningAnimation]: s
                },
                style: {
                    transform: "translateX(50%) translateY(-100%) rotate(180deg)"
                },
                src: "/lobby_asset/common/common/event/kyd_style_".concat(l.value, "_zp_x").concat(n.value, ".png"),
                width: D(c.value),
                height: D(v.value),
                tag: "div"
            }, null)])
        }
    }
}), Kn = "_turntableBtn_m56rp_25", Xn = "_amountWrapper_m56rp_34", Gn = "_amountScale_m56rp_40", Qn = "_drawsWrapper_m56rp_43", ea = "_text1_m56rp_51", ta = "_text2_m56rp_54", na = "_turntableStyle1_m56rp_69", aa = "_turntableStyle2_m56rp_76", oa = "_turntableStyle3_m56rp_86", sa = "_turntableStyle4_m56rp_93", la = "_turntableStyle5_m56rp_100", ra = "_turntableStyle6_m56rp_107", ia = "_common_bganimation_m56rp_1", X = {
    turntableBtn: Kn,
    amountWrapper: Xn,
    amountScale: Gn,
    drawsWrapper: Qn,
    text1: ea,
    text2: ta,
    turntableStyle1: na,
    turntableStyle2: aa,
    turntableStyle3: oa,
    turntableStyle4: sa,
    turntableStyle5: la,
    turntableStyle6: ra,
    common_bganimation: ia
}, [ca] = ue("event-item-modes-new-cut-once-lottery"), ua = j({
    name: ca,
    props: {
        options: {
            type: Object,
            default: () => {}
        },
        styleType: {
            type: Number,
            default: 1
        },
        lottery: {
            type: Object,
            default: () => {}
        }
    },
    setup(t) {
        const {
            t: a
        } = P(), u = L(), {
            newCutOnceData: r,
            cutOnceTurnCount: n
        } = H(u), s = b(() => t.lottery.spinning.value || !n.value), o = b(() => {
            var l;
            return Date.now() / 1e3 < ((l = r.value) == null ? void 0 : l.startTime)
        }), c = b(() => {
            var l;
            return Date.now() / 1e3 > ((l = r.value) == null ? void 0 : l.endTime)
        }), v = Ve(async () => {
            if (!Ie().hasLogined) {
                await ot().openLoginRegister({
                    openType: "insert"
                }), Me().close("newCutOnce");
                return
            }
            if (!(t.lottery.spinning.value || !n.value)) {
                if (t.lottery.setSpinning(!0), await Ce.check({
                        eventData: { ...r.value,
                            taskCallback: async () => await Me().close("newCutOnce")
                        },
                        checkOptions: {
                            [Z.isDemoLogin]: !0,
                            [Z.forbidReceive]: !0,
                            [Z.receiveType]: !0,
                            [Z.task]: !0
                        }
                    })) {
                    t.lottery.setSpinning();
                    return
                }
                if (o.value) {
                    he({
                        message: a("lobby.event.discountCode.activityNotStarted")
                    }), t.lottery.setSpinning();
                    return
                }
                if (c.value) {
                    he({
                        message: a("lobby.event.discountCode.activityHasEnded")
                    }), t.lottery.setSpinning();
                    return
                }
                t.lottery.runLottery()
            }
        }, 300);
        return () => e(N, {
            class: [X.turntableBtn, X["turntableStyle".concat(t.styleType)]],
            src: oe[t.styleType].btn,
            width: D(t.options.btnSize),
            height: D(t.options.btnSize),
            tag: "div",
            style: {
                cursor: s.value ? "not-allowed" : "pointer"
            }
        }, {
            default: () => {
                var l;
                return [t.lottery.amountAnimate.value ? e("div", {
                    class: {
                        [X.amountWrapper]: !0,
                        [X.amountScale]: t.lottery.amountScale.value
                    }
                }, [x(t.lottery.showAmount.value)]) : e("div", {
                    class: X.drawsWrapper,
                    onClick: v
                }, [e("span", {
                    class: X.text1
                }, [a("lobby.event.cutOnce.lottery")]), e(se, {
                    class: X.text2,
                    html: (l = a("lobby.event.cutOnce.drawsNumber")) == null ? void 0 : l.replace("<span></span>", " <span>".concat(n.value || 0, "</span> "))
                }, null)])]
            }
        })
    }
}), da = "_detailInfo_1q92i_25", ma = "_row_1q92i_25", _a = "_label_1q92i_28", va = "_value_1q92i_34", ba = "_isEfficientYes_1q92i_39", pa = "_isEfficientNo_1q92i_42", ya = "_common_bganimation_1q92i_1", B = {
    detailInfo: da,
    row: ma,
    label: _a,
    value: va,
    isEfficientYes: ba,
    isEfficientNo: pa,
    common_bganimation: ya
}, [ga] = V("event-item-cut-once-detail-modal"), wa = j({
    name: ga,
    props: {
        nextTaskListItemInfo: {
            type: Object,
            default: null
        },
        record: {
            type: Object,
            default: null
        }
    },
    setup(t) {
        const {
            t: a
        } = P(), u = b(() => {
            const r = [];
            if (!t.nextTaskListItemInfo) return r;
            const {
                reChargeValue: n,
                daMaValue: s,
                promotionCount: o
            } = t.nextTaskListItemInfo;
            return +n != 0 && r.push(t.record ? a("lobby.event.cutOnce.detailInfoText4", {
                x: x(t.record.rechargeCount || 0)
            }) : a("lobby.event.newCutOnce.nextTaskRechargeCountTip", [x(n || 0)])), +s != 0 && r.push(t.record ? a("lobby.event.cutOnce.detailInfoText7", {
                n: x(t.record.daMaCount || 0)
            }) : a("lobby.event.newCutOnce.nextTaskBetCountTip", [x(s || 0)])), +o != 0 && r.length == 0 && r.push(t.record ? a("lobby.event.cutOnce.detailText4") : a("lobby.event.newCutOnce.nextTaskRechargeCountTip1")), r
        });
        return () => {
            var r, n, s, o, c, v;
            return e("div", {
                class: B.detailInfo
            }, [e("div", {
                class: B.row
            }, [e("span", {
                class: B.label
            }, [a("lobby.event.cutOnce.userAccount"), ":"]), e("span", {
                class: B.value
            }, [(r = t.record) == null ? void 0 : r.userName])]), e("div", {
                class: B.row
            }, [e("span", {
                class: B.label
            }, [a("lobby.event.cutOnce.createTime"), ":"]), e("span", {
                class: B.value
            }, [ce((n = t.record) == null ? void 0 : n.registerTime, "ymdhms")])]), e("div", {
                class: B.row
            }, [e("span", {
                class: B.label
            }, [a("lobby.event.promote.isItEffective"), ":"]), e("span", {
                class: [B.value, (s = t.record) != null && s.isEfficient ? B.isEfficientYes : B.isEfficientNo]
            }, [(o = t.record) != null && o.isEfficient ? a("lobby.event.promote.yes") : a("lobby.event.promote.no")])]), e("div", {
                class: B.row
            }, [e("span", {
                class: B.label
            }, [a("lobby.event.cutOnce.detailInfo"), ":"]), e("span", {
                class: [B.value, (c = t.record) != null && c.isEfficient ? B.isEfficientYes : ""]
            }, [(v = u.value) == null ? void 0 : v.map((l, m) => [l, m < u.value.length - 1 ? " , " : ""])])])])
        }
    }
}), fa = "_detailModal_3pdui_25", ha = "_section_3pdui_29", xa = "_title_3pdui_35", Ta = "_text_3pdui_43", Sa = "_detailText_3pdui_48", Ca = "_wrap_3pdui_51", Ia = "_table_3pdui_55", ka = "_lookoverText_3pdui_69", Oa = "_isEfficientYes_3pdui_75", Ba = "_isEfficientNo_3pdui_79", Aa = "_guiding_3pdui_94", $a = "_isPutAway_3pdui_100", Da = "_icon2_3pdui_107", Ea = "_common_bganimation_3pdui_1", S = {
    detailModal: fa,
    section: ha,
    title: xa,
    text: Ta,
    detailText: Sa,
    wrap: Ca,
    table: Ia,
    "table-more": "_table-more_3pdui_65",
    lookoverText: ka,
    isEfficientYes: Oa,
    isEfficientNo: Ba,
    "detail-btn": "_detail-btn_3pdui_83",
    guiding: Aa,
    isPutAway: $a,
    icon2: Da,
    common_bganimation: Ea
}, [ja] = V("event-item-cut-once-detail-modal"), Ma = j({
    name: ja,
    props: {
        nextTaskListItemInfo: {
            type: Object,
            default: null
        }
    },
    setup(t) {
        const {
            t: a
        } = P(), u = L(), {
            subTaskData: r
        } = H(u), n = k(!1), s = l => {
            Te.showDialog({
                title: () => a("lobby.event.cutOnce.detail"),
                showCloseButton: !0,
                showConfirmButton: !1,
                message: () => e(wa, {
                    record: l,
                    nextTaskListItemInfo: t.nextTaskListItemInfo
                }, null)
            })
        }, o = b(() => [{
            title: a("lobby.event.cutOnce.userAccount"),
            dataIndex: "userName",
            key: "userName",
            align: "center",
            width: 150,
            customRender: l => e("span", {
                class: S.wrap
            }, [l])
        }, {
            title: a("lobby.event.cutOnce.createTime"),
            dataIndex: "registerTime",
            key: "registerTime",
            align: "center",
            width: 150,
            customRender: l => e("span", {
                class: S.wrap
            }, [ce(Number(l), "ymdhms")])
        }, {
            title: a("lobby.event.promote.isItEffective"),
            dataIndex: "isEfficient",
            key: "isEfficient",
            align: "center",
            customRender: l => e("span", {
                class: l ? S.isEfficientYes : S.isEfficientNo
            }, [a(l ? "lobby.event.promote.yes" : "lobby.event.promote.no")])
        }, {
            title: a("lobby.event.cutOnce.detail"),
            dataIndex: "detail",
            key: "detail",
            align: "center",
            customRender: (l, m) => e("span", {
                class: S.lookoverText,
                onClick: () => s(m)
            }, [a("lobby.event.cutOnce.lookover")])
        }]), c = () => {
            n.value = !n.value
        }, v = () => {
            var m;
            const l = (m = r.value) == null ? void 0 : m.Data;
            return e("section", {
                class: S.section
            }, [e("h3", {
                class: S.title
            }, ["2、", a("lobby.event.cutOnce.detailTitle3")]), e(It, {
                class: [S.table, n.value ? S["table-more"] : ""],
                columns: o.value,
                uniqueKey: "useridx",
                data: l != null ? l : [],
                list: {
                    emptyText: a("lobby.event.luckyWheel.tabs.noData")
                }
            }, null), Oe(e("div", {
                class: S["detail-btn"],
                onClick: c
            }, [n.value ? a("lobby.modal.pay.putAway") : a("lobby.event.cutOnce.more"), e("div", {
                class: {
                    [S.guiding]: !0,
                    [S.isPutAway]: n.value
                }
            }, [e(N, {
                class: S.icon1,
                src: "/lobby_asset/common/web/common/img_scroll_jt.svg"
            }, null), e(N, {
                class: S.icon2,
                src: "/lobby_asset/common/web/common/img_scroll_jt.svg"
            }, null)])]), [
                [Be, (l == null ? void 0 : l.length) > 6]
            ])])
        };
        return () => {
            var l, m, p, f;
            return e("div", {
                class: S.detailModal
            }, [e("section", {
                class: S.section
            }, [e("h3", {
                class: S.title
            }, ["1、", a("lobby.event.cutOnce.detailTitle2")]), e("p", {
                class: S.text
            }, [+((l = t.nextTaskListItemInfo) == null ? void 0 : l.reChargeValue) == 0 && +((m = t.nextTaskListItemInfo) == null ? void 0 : m.daMaValue) == 0 ? a("lobby.event.cutOnce.detailText4") : ""]), e("p", {
                class: S.text
            }, [+((p = t.nextTaskListItemInfo) == null ? void 0 : p.reChargeValue) != 0 ? a("lobby.event.newCutOnce.nextTaskRechargeCountTip", [x(t.nextTaskListItemInfo.reChargeValue || 0)]) : ""]), e("p", {
                class: S.text
            }, [+((f = t.nextTaskListItemInfo) == null ? void 0 : f.daMaValue) != 0 ? a("lobby.event.newCutOnce.nextTaskBetCountTip", [x(t.nextTaskListItemInfo.daMaValue || 0)]) : ""])]), v()])
        }
    }
}), Ra = "_cardBox_a99jg_25", Na = "_card_a99jg_25", Pa = "_content_a99jg_35", La = "_top_a99jg_25", za = "_title_a99jg_44", Wa = "_text_a99jg_51", qa = "_shareBtn_a99jg_57", Va = "_shareIcon_a99jg_73", Ha = "_shareText_a99jg_76", Ya = "_bottom_a99jg_89", Fa = "_subText_a99jg_96", Ua = "_refreshIcon_a99jg_107", Ja = "_promoteSharingModal_a99jg_127", Za = "_promoteSharingModalContent_a99jg_136", Ka = "_subModal_a99jg_148", Xa = "_section_a99jg_151", Ga = "_isEfficientYes_a99jg_172", Qa = "_isEfficientNo_a99jg_175", eo = "_detailTable_a99jg_178", to = "_wrap_a99jg_181", no = "_lookoverText_a99jg_184", ao = "_subInfoDedailModal_a99jg_188", oo = "_detailInfo_a99jg_188", so = "_row_a99jg_188", lo = "_label_a99jg_192", ro = "_value_a99jg_198", io = "_promoteShareBox_a99jg_210", co = "_promoteShareModalContent_a99jg_223", uo = "_detailModal_a99jg_235", mo = "_promoteBox_a99jg_239", _o = "_common_bganimation_a99jg_1", T = {
    cardBox: Ra,
    "top-bg": "_top-bg_a99jg_25",
    card: Na,
    content: Pa,
    top: La,
    title: za,
    text: Wa,
    shareBtn: qa,
    shareIcon: Va,
    shareText: Ha,
    bottom: Ya,
    "bottom-text": "_bottom-text_a99jg_93",
    subText: Fa,
    refreshIcon: Ua,
    "bottom-bg": "_bottom-bg_a99jg_120",
    promoteSharingModal: Ja,
    promoteSharingModalContent: Za,
    subModal: Ka,
    section: Xa,
    isEfficientYes: Ga,
    isEfficientNo: Qa,
    detailTable: eo,
    wrap: to,
    lookoverText: no,
    subInfoDedailModal: ao,
    detailInfo: oo,
    row: so,
    label: lo,
    value: ro,
    promoteShareBox: io,
    promoteShareModalContent: co,
    detailModal: uo,
    promoteBox: mo,
    common_bganimation: _o
}, [vo] = V("event-item-new-cut-once-tips-card"), bo = j({
    name: vo,
    props: {
        nextTaskListItemInfo: {
            type: Object,
            default: null
        }
    },
    setup(t) {
        const {
            t: a
        } = P(), u = L(), {
            activeData: r,
            subTaskData: n
        } = H(u), {
            nextTaskListItemInfo: s
        } = ke(t), o = b(() => {
            var i, d;
            return s.value || ((d = (i = r.value) == null ? void 0 : i.SubTaskData) == null ? void 0 : d.NextTaskListItemInfo)
        }), c = b(() => {
            var i, d;
            return ((i = n.value) == null ? void 0 : i.receiveStatus) !== _.Processing || !!((d = n.value) != null && d.isCanAgain)
        }), v = b(() => {
            var i;
            return ((i = o.value) == null ? void 0 : i.conditionType) === ee.SubUser
        }), l = b(() => {
            const i = o.value;
            return {
                subLogin: +(i == null ? void 0 : i.reChargeValue) == 0 && +(i == null ? void 0 : i.daMaValue) == 0,
                subDeposit: +(i == null ? void 0 : i.reChargeValue) != 0,
                subBet: +(i == null ? void 0 : i.daMaValue) != 0
            }
        }), m = () => {
            Te.showDialog({
                width: D(690),
                className: T.detailModal,
                showCloseButton: !0,
                showConfirmButton: !1,
                message: () => e(Ma, {
                    nextTaskListItemInfo: o.value
                }, null)
            })
        }, p = () => {
            u.refreshNewCutOnceData()
        }, f = () => {
            Te.showDialog({
                className: T.promoteShareBox,
                width: D(690),
                message: () => e("div", {
                    class: T.promoteShareModalContent
                }, [e("h3", null, [a("lobby.event.cutOnce.detailTitle4")]), e(kt, {
                    class: T.promoteBox
                }, null)]),
                showConfirmButton: !1,
                showCloseButton: !0
            })
        }, y = b(() => {
            var d;
            return {
                [ee.SubUser]: {
                    text: () => {
                        var w;
                        return a("lobby.event.newCutOnce.cardTipsTitle", [((w = o.value) == null ? void 0 : w.promotionCount) || 0, 1])
                    },
                    callback: f
                },
                [ee.OnceLoginApp]: {
                    text: () => a("lobby.event.newCutOnce.downloadApp", {
                        n: 1
                    }),
                    callback: st
                },
                [ee.OnceBindPhone]: {
                    text: () => a("lobby.event.newCutOnce.bindMobile", {
                        n: 1
                    }),
                    callback: lt
                },
                [ee.OnceBindEmail]: {
                    text: () => a("lobby.event.newCutOnce.bindMail", {
                        n: 1
                    }),
                    callback: rt
                },
                [ee.OnceBindWithdraw]: {
                    text: () => a("lobby.event.newCutOnce.bindWithdrawType", {
                        n: 1
                    }),
                    callback: () => it(ct.ACCOUNT_MANAGEMENT)
                }
            }[(d = o.value) == null ? void 0 : d.conditionType]
        }), g = i => {
            const {
                language: d
            } = ut();
            return ["zh", "zh_hk"].includes(d) ? i : (i == null ? void 0 : i.charAt(i.length - 1)) !== "," ? i + " ," : (i == null ? void 0 : i.charAt(i.length - 1)) === "," ? i.slice(0, -1) + " ," : i
        };
        return () => e("div", {
            class: T.cardBox
        }, [e(N, {
            class: T["top-bg"],
            src: "/lobby_asset/common/common/event/kyd_common_qp_1.png",
            width: D(538)
        }, null), e(N, {
            class: T.card,
            src: "/lobby_asset/common/common/event/kyd_common_qp_2.png",
            width: D(538),
            tag: "div"
        }, {
            default: () => {
                var i, d, w, h, C, M, E, R;
                return [e("div", {
                    class: T.content
                }, [e("div", {
                    class: T.top
                }, [e("div", {
                    class: T.title
                }, [e(se, {
                    class: T.text,
                    tag: "span",
                    html: ((d = (i = y.value) == null ? void 0 : i.text) == null ? void 0 : d.call(i)) || ""
                }, null), !v.value && e(Re, {
                    type: "icon",
                    icon: "/lobby_asset/{layout}-{bg}-common/web/common/comm_icon_sx.svg",
                    loading: u.isItemLoading,
                    class: T.refreshIcon,
                    onRetry: p
                }, null)]), e(xe, {
                    class: {
                        [T.shareBtn]: !0,
                        [T["share-btn-primary"]]: c.value
                    },
                    type: "primary",
                    onClick: y.value.callback,
                    disabled: c.value
                }, {
                    default: () => [Oe(e("span", {
                        class: T.shareIcon
                    }, [e(N, {
                        src: "/lobby_asset/common/web/promotion/icon_tg_share.svg"
                    }, null)]), [
                        [Be, v.value]
                    ]), v.value ? a("lobby.event.newCutOnce.shareText") : a("lobby.event.newCutOnce.go")]
                })]), v.value && e("div", {
                    class: T.bottom
                }, [e("div", {
                    class: T["bottom-text"]
                }, [e("span", {
                    class: T.subText
                }, [((w = l.value) == null ? void 0 : w.subLogin) && g(a("lobby.event.newCutOnce.subLogin")), ((h = l.value) == null ? void 0 : h.subDeposit) && g(a("lobby.event.newCutOnce.subDeposit", {
                    a: (C = o.value) == null ? void 0 : C.reChargeValue
                })), ((M = l.value) == null ? void 0 : M.subBet) && g(a("lobby.event.newCutOnce.subBet", {
                    a: (E = o.value) == null ? void 0 : E.daMaValue
                }))]), e(se, {
                    class: T.subText,
                    tag: "span",
                    html: a("lobby.event.newCutOnce.currentValid", {
                        p: "<span>".concat((R = n.value) == null ? void 0 : R.subNumber, "</span>")
                    }),
                    onClick: m
                }, null), e(Re, {
                    type: "icon",
                    icon: "/lobby_asset/common/web/common/comm_icon_sx2.svg",
                    loading: u.isItemLoading,
                    class: T.refreshIcon,
                    onRetry: p
                }, null)])])])]
            }
        }), e(N, {
            class: T["bottom-bg"],
            src: "/lobby_asset/common/common/event/kyd_common_qp_2.png",
            width: D(538),
            tag: "div"
        }, null)])
    }
}), po = "_turntableBox_1nnyw_25", yo = "_isShowTipsCard_1nnyw_36", go = "_turntableBoxStyle4_1nnyw_40", wo = "_turntableBoxStyle3_1nnyw_47", fo = "_turntable_1nnyw_25", ho = "_turntableBorder_1nnyw_47", xo = "_baseBottom_1nnyw_64", To = "_turntableBg_1nnyw_71", So = "_turntableBgTransition_1nnyw_77", Co = "_tipsCard_1nnyw_80", Io = "_common_bganimation_1nnyw_1", q = {
    turntableBox: po,
    isShowTipsCard: yo,
    turntableBoxStyle4: go,
    "turntable-style-4": "_turntable-style-4_1nnyw_44",
    "award-portfolio-list-10": "_award-portfolio-list-10_1nnyw_44",
    "turntable-pointer": "_turntable-pointer_1nnyw_44",
    turntableBoxStyle3: wo,
    turntable: fo,
    turntableBorder: ho,
    baseBottom: xo,
    turntableBg: To,
    turntableBgTransition: So,
    tipsCard: Co,
    common_bganimation: Io
}, [ko] = ue("event-item-modes-new-cut-once-turntable"), Oo = j({
    name: ko,
    props: St,
    setup() {
        const t = L(),
            {
                newCutOnceData: a,
                isShowTipsCard: u,
                turntableAwardList: r
            } = H(t),
            n = Dn(),
            s = b(() => {
                var m;
                const l = (m = a.value) == null ? void 0 : m.activeData;
                return Number(l == null ? void 0 : l.display_type)
            }),
            o = b(() => {
                var l;
                return (l = r.value) == null ? void 0 : l.length
            }),
            c = b(() => {
                let l = 0,
                    m = 0;
                s.value && (l = oe[s.value].bgSize, m = oe[s.value].btnSize);
                let p, f;
                try {
                    p = be[o.value].width, f = be[o.value].height
                } catch (y) {
                    console.warn(y), p = be[Ne.equal0].width, f = be[Ne.equal0].height
                }
                return {
                    bgSize: l,
                    btnSize: m,
                    pointerWidth: p,
                    pointerHeight: f
                }
            }),
            v = b(() => {
                if (!oe[s.value]) return [];
                const {
                    borderAnim1: l,
                    borderAnim2: m,
                    borderAnim3: p
                } = oe[s.value];
                return [{
                    borderAnim: l,
                    borderType: G.Default
                }, {
                    borderAnim: m,
                    borderType: G.Spining
                }, {
                    borderAnim: p,
                    borderType: G.Winning
                }]
            });
        return () => {
            var f, y;
            const {
                bgSize: l,
                pointerWidth: m,
                pointerHeight: p
            } = c.value;
            return e("div", {
                class: [q.turntableBox, q["turntableBoxStyle".concat(s.value)], u.value ? q.isShowTipsCard : "", "turntableBoxStyle".concat(s.value)]
            }, [!!o.value && e("div", {
                class: [q.turntable, "turntable-style-".concat(s.value, " award-portfolio-list-").concat(o.value)]
            }, [(f = v.value) == null ? void 0 : f.map(g => Oe(e(N, {
                class: q.turntableBorder,
                lazy: !1,
                width: D(l),
                height: D(l),
                key: g.borderAnim,
                src: g.borderAnim
            }, null), [
                [Be, n.borderType.value === g.borderType]
            ])), s.value === dt.Style4 && e(N, {
                class: q.baseBottom,
                src: oe[s.value].baseBottom,
                width: D(199),
                height: D(68)
            }, null), e(N, {
                class: {
                    [q.turntableBg]: !0,
                    [q.turntableBgTransition]: n.turntableBgTransition.value
                },
                style: {
                    transform: "rotate(".concat(n.rotatePosition.value, "deg)")
                },
                src: "/lobby_asset/common/common/event/kyd_style_".concat(s.value, "_zp_").concat(o.value, ".png"),
                width: D(l),
                height: D(l),
                "data-rotate-index": ((y = n.winningIndex) == null ? void 0 : y.value) || 0,
                tag: "div"
            }, {
                default: () => {
                    var g;
                    return [(g = r.value) == null ? void 0 : g.map((i, d) => e(Zn, {
                        pointerWidth: m,
                        pointerHeight: p,
                        awardItem: i,
                        awardIndex: d,
                        styleType: s.value,
                        awardLen: o.value
                    }, null))]
                }
            }), e(ua, {
                options: c.value,
                styleType: s.value,
                lottery: n
            }, null), u.value && e(bo, {
                class: q.tipsCard,
                nextTaskListItemInfo: n.nextTaskListItemInfo.value
            }, null)])])
        }
    }
}), Bo = "_turntableMain_zfczk_31", Ao = "_receiveBox_zfczk_36", $o = "_common_bganimation_zfczk_1", pe = {
    "new-cut-once-placeholder": "_new-cut-once-placeholder_zfczk_25",
    turntableMain: Bo,
    receiveBox: Ao,
    "spine-event-kyd": "_spine-event-kyd_zfczk_60",
    common_bganimation: $o
}, [Do] = ue("event-item-modes-new-cut-once"), ns = j({
    name: Do,
    props: Ot,
    setup(t) {
        const {
            t: a
        } = P(), u = L(), {
            eventItemData: r,
            isItemLoading: n,
            itemErr: s
        } = H(u), o = b(() => n.value && !r.value ? "loading" : s.value ? "retry" : null), c = async () => {
            u.refreshEventItemDetail(t.activeId)
        };
        return qe(() => {
            u.resetEventItemData(), u.resetNewCutOnceData()
        }), () => e(Le, {
            class: [pe["new-cut-once-placeholder"]],
            type: o.value,
            empty: {
                text: a("lobby.event.luckyWheel.tabs.noData")
            },
            onRetry: c
        }, {
            default: () => [e("div", {
                class: pe.turntableMain
            }, [e("div", {
                class: pe.receiveBox
            }, [e(nn, null, null), e(Ht, null, null)]), e(ze, null, {
                default: () => [e(Oo, null, null), e($n, null, null)]
            }), u.jinBiSpinning && e(N, {
                class: pe["spine-event-kyd"],
                src: "/lobby_asset/common/web/animated/apng_event_kyd_spine_event_kyd_JinBiFei.png",
                ref: "jinBiFeiRef",
                canvasMode: {
                    numPlays: 1,
                    onEnd: () => {
                        u.updateJinBiSpinning(!1)
                    }
                }
            }, null)])]
        })
    }
});
export {
    ns as
    default
};
//# sourceMappingURL=NewCutOnceIndex.C-A0ovLy.js.map