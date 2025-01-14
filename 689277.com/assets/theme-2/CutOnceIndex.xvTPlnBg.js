import {
    d1 as Ce,
    a as z,
    hJ as R,
    ap as te,
    cd as S,
    hK as U,
    q as j,
    hL as Ve,
    a6 as K,
    x as ce,
    hM as Fe,
    co as Ue,
    hN as je,
    hO as F,
    cE as we,
    cX as J,
    hP as He,
    cN as re,
    M as ge,
    X as Ie,
    hQ as ve,
    cx as be,
    d8 as De,
    hR as ue,
    _ as Ye,
    bC as Je,
    hS as Q,
    hT as Xe,
    $ as le,
    cF as Ke,
    ae as ke,
    I as W,
    hU as X,
    cA as L,
    aP as Qe,
    u as fe,
    hV as u,
    cT as Ze,
    o as Te,
    E as Se,
    b as Ge,
    hW as et,
    hX as $e,
    hY as Ne,
    hZ as ie,
    h_ as he,
    h$ as Oe
} from "./main.async.-NbSL2aO.js";
import {
    s as E
} from "../vendors/vendor-stable.Cg92BvZJ.js";
import {
    R as Re,
    E as Ae
} from "./ReceiveCountdownIndex.CrNog2Lx.js";
import {
    P as xe
} from "./index.BCftLJjj.js";
import {
    k as M,
    c as y,
    a5 as t,
    r as I,
    aB as tt,
    w as ze,
    ax as nt,
    o as at,
    b as Me,
    n as ot,
    bd as st,
    a4 as rt,
    l as lt,
    bz as Ee,
    br as Pe
} from "../vendors/vendor-@vue.CBvhRkQp.js";
import {
    B as de
} from "../vendors/vendor-bignumber.BRr1dcww.js";
import {
    a as ct
} from "./activeReceiveOne.DSlNTkxg.js";
import {
    e as Le
} from "../vendors/vendor-lodash.CYk3mlCa.js";
import {
    A as ut,
    S as it,
    a as dt
} from "../vendors/vendor-swiper.BzK1hN__.js";
import {
    L as _t
} from "./index.D6ayqpk3.js";
import {
    P as vt
} from "./PublicIntroductionIndex.CbEX-jAB.js";
import {
    a as qe
} from "./props.BOsWQ7Qa.js";
import {
    e as We,
    E as bt
} from "../vendors/vendor-default.p-wnugzB.js";
import {
    c as mt
} from "./ShareModule.BQ4SzjDQ.js";
import {
    T as yt
} from "./index.D8AEoeVh.js";
import "./main.Dmn05Mj-.js";
import "../vendors/vendor-@sentry.EjpkRnd3.js";
import "../vendors/vendor-@intlify.BmUtFfVu.js";
import "./Progress.CAeh84El.js";
import "./List.BPt-sskq.js";
import "./index.JcARDJEC.js";
import "./CopyIndex.C4IXAgq0.js";
import "./Table.BpjJGp6F.js";
const pt = {
        pageType: {
            type: Number,
            require: !1,
            default: Ce.Normal
        },
        activeId: {
            type: Number,
            require: !0
        }
    },
    gt = "_progressBox_1kfts_25",
    ft = "_progress_1kfts_25",
    wt = "_common_bganimation_1kfts_1",
    Be = {
        progressBox: gt,
        progress: ft,
        common_bganimation: wt
    },
    [xt] = j("event-item-cut-once-progress"),
    Tt = M({
        name: xt,
        props: {
            receiveStatus: {
                type: Number,
                default: 0
            },
            currProgress: {
                type: Number,
                default: 0
            }
        },
        setup(e) {
            const {
                t: n
            } = z(), a = R(), {
                activeData: c
            } = E(a), r = i => {
                const v = String(i).replace(/(\.\d{2})\d+/, "$1");
                return Number(v)
            }, l = y(() => {
                const {
                    chop_one_knife_id: i = 0
                } = c.value || {};
                if (i === 0 || !te().hasLogined) return n("lobby.event.cutOnce.progressText2", {
                    x: S(0)
                });
                if (i && e.receiveStatus !== U.Processing) return n("lobby.event.cutOnce.progressText2", {
                    x: S(100)
                });
                const v = r(e.currProgress);
                return n("lobby.event.cutOnce.progressText1", {
                    x: S(v == null ? void 0 : v.toFixed(2)),
                    n: S((100 - Number(v)).toFixed(2))
                })
            }), o = y(() => {
                const i = e.currProgress;
                return i > 0 && i < 2 ? 2 : i > 98 && i < 100 ? 98 : e.currProgress
            });
            return () => t("div", {
                class: Be.progressBox
            }, [t(xe, {
                class: Be.progress,
                percent: o.value,
                text: l.value
            }, null)])
        }
    }),
    St = "_receiveBottom_c0oms_25",
    ht = "_bottom_c0oms_29",
    Ot = "_dsicText_c0oms_34",
    Bt = "_countdown_c0oms_44",
    Ct = "_common_bganimation_c0oms_1",
    ae = {
        receiveBottom: St,
        bottom: ht,
        dsicText: Ot,
        countdown: Bt,
        common_bganimation: Ct
    },
    [It] = ce("item-modes-cut-once-receive-bottom"),
    Dt = M({
        name: It,
        setup() {
            const {
                t: e
            } = z(), n = R(), {
                cutOnceData: a,
                activeData: c,
                subTaskData: r
            } = E(n), l = y(() => {
                var s;
                return ((s = r.value) == null ? void 0 : s.receiveStatus) || U.Processing
            }), o = y(() => {
                var _, d, m;
                return (_ = c.value) != null && _.chop_one_knife_id ? (m = (d = c.value) == null ? void 0 : d.award_portfolios) == null ? void 0 : m.find(T => {
                    var f;
                    return T.index === ((f = c.value) == null ? void 0 : f.award_portfolio_index)
                }) : void 0
            }), i = y(() => {
                var s;
                return Date.now() / 1e3 < ((s = a.value) == null ? void 0 : s.startTime)
            }), v = y(() => {
                var s;
                return Date.now() / 1e3 > ((s = a.value) == null ? void 0 : s.endTime)
            }), g = y(() => {
                var s, _;
                return (_ = (s = c.value) == null ? void 0 : s.period_time) != null ? _ : 0
            }), b = y(() => {
                var s;
                return !!g.value && l.value !== U.HasReceive && ((s = c.value) == null ? void 0 : s.cycle_type) !== Ve.Once && !i.value && !v.value
            }), w = y(() => {
                var f, k;
                const {
                    award: s = 0,
                    chop_one_knife_id: _ = 0
                } = c.value || {};
                if (_ === 0 || !te().hasLogined) return 0;
                if (_ && l.value !== U.Processing) return 100;
                let m = ((k = (f = o.value) == null ? void 0 : f.first_award_value) != null ? k : 0) / s * 100;
                m = Math.round(m * 1e4) / 1e4;
                const T = String(m).replace(/(\.\d{4})\d+/, "$1");
                return Number(T)
            }), p = y(() => {
                var d, m;
                const {
                    chop_one_knife_id: s,
                    award: _
                } = c.value || {};
                if (!s || !te().hasLogined) return 0;
                if (w.value < 100) {
                    const T = (m = (d = o.value) == null ? void 0 : d.first_award_value) != null ? m : 0;
                    return Number(T)
                } else return Number(_)
            });
            return () => {
                var s, _;
                return t("div", {
                    class: ae.receiveBottom
                }, [t(Tt, {
                    receiveStatus: l.value,
                    currProgress: w.value
                }, null), t("div", {
                    class: ae.bottom
                }, [t("span", {
                    class: ae.dsicText
                }, [t(K, {
                    class: ae.awardText,
                    html: e("lobby.event.cutOnce.tips", {
                        x: S((_ = (s = c.value) == null ? void 0 : s.award) != null ? _ : 0),
                        y: S(p.value || 0)
                    })
                }, null)]), b.value && t("span", {
                    class: ae.countdown
                }, [t(Re, {
                    textFormatType: Ae.Reset,
                    duration: g.value,
                    onComplete: n.refreshCutOnceData
                }, null)])])])
            }
        }
    }),
    kt = "_receiveTop_1r1zz_25",
    $t = "_flexBox_1r1zz_30",
    Nt = "_text_1r1zz_35",
    Rt = "_receiveBtn_1r1zz_56",
    At = "_disabled_1r1zz_72",
    zt = "_forbidContent_1r1zz_80",
    Mt = "_common_bganimation_1r1zz_1",
    _e = {
        receiveTop: kt,
        flexBox: $t,
        text: Nt,
        receiveBtn: Rt,
        disabled: At,
        forbidContent: zt,
        common_bganimation: Mt
    },
    [Et] = ce("event-item-modes-cut-once-top-content"),
    Pt = M({
        name: Et,
        setup() {
            const {
                t: e
            } = z(), n = R(), {
                cutOnceData: a,
                cutOnceTurnCount: c,
                activeData: r,
                subTaskData: l
            } = E(n), o = I(!1), i = I(!1), v = y(() => {
                var d;
                return i.value ? U.HasReceive : ((d = l.value) == null ? void 0 : d.receiveStatus) || U.Processing
            }), g = y(() => !(v.value === U.CanReceive || v.value === U.PendingCheck)), b = y(() => {
                const d = v.value ? Fe(v.value) : e("lobby.event.cutOnce.receive");
                return Ue(d)
            }), w = y(() => {
                var m, T, f;
                return (m = r.value) != null && m.chop_one_knife_id ? (f = (T = r.value) == null ? void 0 : T.award_portfolios) == null ? void 0 : f.find(k => {
                    var x;
                    return k.index === ((x = r.value) == null ? void 0 : x.award_portfolio_index)
                }) : void 0
            }), p = y(() => {
                var P, B, $, O, C, H, V, ne;
                const d = (B = (P = r.value) == null ? void 0 : P.award) != null ? B : 0,
                    m = (O = ($ = r.value) == null ? void 0 : $.super_award_value) != null ? O : 0,
                    f = [...(H = (C = r.value) == null ? void 0 : C.award_portfolios) != null ? H : []];
                f == null || f.sort((Z, me) => (me == null ? void 0 : me.first_award_value) - (Z == null ? void 0 : Z.first_award_value));
                const k = (f == null ? void 0 : f.length) && ((V = f[0]) == null ? void 0 : V.first_award_value) || 0,
                    x = (f == null ? void 0 : f.length) && ((ne = f[1]) == null ? void 0 : ne.first_award_value) || 0,
                    D = m > k ? new de(m).plus(new de(k)) : new de(k).plus(new de(x));
                return {
                    minBounus: d,
                    maxBounus: D
                }
            }), s = y(() => {
                var d, m;
                if (((d = r.value) == null ? void 0 : d.is_show_total_award) === je.Hide && c.value === F.Count2) return e("lobby.event.cutOnce.awardText1", {
                    x: S((m = r.value) == null ? void 0 : m.award)
                });
                if (c.value < F.Count2) {
                    const {
                        first_award_value: T = 0,
                        second_award_value: f = 0
                    } = w.value || {}, x = !c.value && v.value !== U.Processing ? Number(T) + Number(f) : T;
                    return e("lobby.event.cutOnce.awardText", {
                        x: S(x)
                    })
                }
                return e("lobby.event.cutOnce.bonus", {
                    x: S(p.value.minBounus),
                    y: S(p.value.maxBounus)
                })
            }), _ = Le(async () => {
                var m, T, f, k, x, D;
                if (o.value || !l.value || v.value === U.Expired) return;
                if (o.value = !0, await we.check({
                        eventData: { ...a.value,
                            receiveStatus: (f = (T = (m = a.value) == null ? void 0 : m.activeData) == null ? void 0 : T.SubTaskData) == null ? void 0 : f.receiveStatus
                        },
                        checkOptions: {
                            [J.forbidReceive]: !0,
                            [J.receiveType]: !0,
                            [J.task]: !0,
                            [J.pendingCheck]: !0
                        }
                    })) {
                    o.value = !1;
                    return
                }
                const d = He(r.value);
                if ((k = l.value) != null && k.receiveDuration && d) {
                    re({
                        message: () => d
                    }), o.value = !1;
                    return
                }
                ct({
                    params: {
                        activeId: (x = a.value) == null ? void 0 : x.id,
                        receiveId: String((D = l.value) == null ? void 0 : D.receiveId)
                    },
                    onSuccess: () => {
                        i.value = !0
                    },
                    judgeResBefore: () => {
                        n.refreshCutOnceData(), o.value = !1
                    }
                })
            }, 300);
            return () => t("div", {
                class: _e.receiveTop
            }, [t(K, {
                class: _e.text,
                html: s.value
            }, null), t(ge, {
                class: {
                    [_e.receiveBtn]: !0,
                    [_e.disabled]: g.value
                },
                loading: o.value,
                disabled: g.value,
                onClick: _
            }, {
                default: () => [b.value]
            })])
        }
    }),
    Lt = "_winning_1vudw_25",
    qt = "_swipperBox_1vudw_28",
    Wt = "_swiperSlide_1vudw_31",
    Vt = "_announceItem_1vudw_41",
    Ft = "_name_1vudw_48",
    Ut = "_content_1vudw_54",
    jt = "_common_bganimation_1vudw_1",
    G = {
        winning: Lt,
        swipperBox: qt,
        swiperSlide: Wt,
        announceItem: Vt,
        name: Ft,
        content: Ut,
        common_bganimation: jt
    },
    [Ht] = j("event-item-cut-once-announce"),
    Yt = M({
        name: Ht,
        setup() {
            const {
                t: e
            } = z(), n = R(), a = I({
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
                modules: [ut]
            }), c = y(() => {
                var l, o;
                const r = String(((l = te().userInfos) == null ? void 0 : l.username) || "");
                return ((o = n.cutOnceAnnounce.find(i => i.username === r && n.activeId === i.activeId)) == null ? void 0 : o.list) || []
            });
            return () => t(De, {
                class: G.winning,
                scrollbarTrigger: "none"
            }, {
                default: () => {
                    var r;
                    return [t(Ie, {
                        type: (r = c.value) != null && r.length ? null : "empty",
                        empty: {
                            text: e("lobby.event.luckyWheel.tabs.noData")
                        }
                    }, {
                        default: () => [n.curTab === ve.Announce && t(it, tt({
                            class: G.swipperBox
                        }, a.value), {
                            default: () => {
                                var l;
                                return [(l = c.value) == null ? void 0 : l.map(o => t(dt, {
                                    class: G.swiperSlide,
                                    key: o.nickname + o.prize + o.dateTime
                                }, {
                                    default: () => {
                                        var i;
                                        return [t("div", {
                                            class: G.announceItem
                                        }, [t("span", {
                                            class: G.name
                                        }, [o.nickname]), t("div", {
                                            class: G.content
                                        }, [t(K, {
                                            html: e("lobby.event.cutOnce.announcement", {
                                                time: be(o.dateTime, "ymd"),
                                                prize: S((i = o == null ? void 0 : o.prize) != null ? i : 0)
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
    }),
    Jt = "_list_178h9_25",
    Xt = "_row_178h9_29",
    Kt = "_time_178h9_43",
    Qt = "_content_178h9_47",
    Zt = "_text_178h9_50",
    Gt = "_common_bganimation_178h9_1",
    oe = {
        list: Jt,
        row: Xt,
        time: Kt,
        content: Qt,
        text: Zt,
        common_bganimation: Gt
    },
    [en] = j("event-item-cut-once-records"),
    tn = M({
        name: en,
        setup() {
            const {
                t: e
            } = z(), n = R(), {
                cutOnceRecordList: a
            } = E(n), c = ({
                AmountType: r,
                Amount: l
            }) => {
                var i, v;
                const o = {
                    [ue.FirstAward]: () => e("lobby.event.cutOnce.firstAward", {
                        prize: S(l || 0)
                    }),
                    [ue.SecondAward]: () => e("lobby.event.cutOnce.secondAward", {
                        prize: S(l || 0)
                    }),
                    [ue.FinishTask]: () => e("lobby.event.cutOnce.finishTask"),
                    [ue.GetAward]: () => e("lobby.event.cutOnce.getAward", {
                        prize: S(l || 0)
                    })
                };
                return (v = (i = o[r]) == null ? void 0 : i.call(o)) != null ? v : ""
            };
            return () => t(_t, {
                class: oe.list,
                emptyText: e("lobby.event.luckyWheel.tabs.noData")
            }, {
                default: () => {
                    var r;
                    return [(r = a.value) == null ? void 0 : r.map(l => t("div", {
                        class: oe.row,
                        key: l.userIdx + l.CreatedTime
                    }, [t("span", {
                        class: oe.time
                    }, [be(l.CreatedTime)]), t("span", {
                        class: oe.content
                    }, [t(K, {
                        class: oe.text,
                        html: c(l)
                    }, null)])]))]
                }
            })
        }
    }),
    nn = "_rule_1mhbu_25",
    an = "_common_bganimation_1mhbu_1",
    on = {
        rule: nn,
        common_bganimation: an
    },
    [sn] = j("event-item-cut-once-rule"),
    rn = M({
        name: sn,
        setup() {
            const e = R(),
                {
                    cutOnceData: n
                } = E(e);
            return () => t("div", {
                class: on.rule
            }, [t(vt, {
                eventData: n.value
            }, null)])
        }
    }),
    ln = "_tabs_cyzrm_25",
    cn = "_common_bganimation_cyzrm_1",
    un = {
        tabs: ln,
        common_bganimation: cn
    };

function dn(e) {
    return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !nt(e)
}
const [_n] = j("event-item-cut-once-tab-list"), vn = M({
    name: _n,
    setup() {
        const {
            t: e
        } = z(), n = R(), {
            curTab: a
        } = E(n);
        ze(a, r => {
            n.updateCurTab(r)
        });
        const c = y(() => [{
            label: () => e("lobby.event.cutOnce.rule"),
            value: ve.Rule,
            component: () => t(rn, null, null)
        }, {
            label: () => e("lobby.event.cutOnce.winningAnnouncement"),
            value: ve.Announce,
            component: () => t(Yt, null, null)
        }, {
            label: () => e("lobby.event.cutOnce.myRecord"),
            value: ve.Record,
            component: () => t(tn, null, null)
        }]);
        return () => {
            let r;
            return t(Je, {
                shrink: !0,
                active: a.value,
                "onUpdate:active": l => a.value = l,
                animated: !0,
                class: [un.tabs]
            }, dn(r = c.value.map(l => t(Ye, {
                key: l.value,
                name: l.value,
                title: () => {
                    var o;
                    return t("span", {
                        style: {
                            fontSize: ".24rem"
                        }
                    }, [(o = l.label) == null ? void 0 : o.call(l)])
                }
            }, {
                default: l.component
            }))) ? r : {
                default: () => [r]
            })
        }
    }
}), bn = () => {
    const e = R(),
        n = I(!1),
        {
            turntableAwardList: a,
            activeId: c,
            cutOnceTurnCount: r
        } = E(e),
        l = I(void 0),
        o = I(0),
        i = 360 * 5,
        v = I(!1),
        g = I(!1),
        b = I(null),
        w = I(Q.Default),
        p = I(null),
        s = I(null),
        _ = I(null),
        d = I(!1),
        m = I(!1),
        T = (B = !1) => {
            n.value = B
        },
        f = (B, $) => {
            var ne, Z;
            let O;
            $ === F.Count1 ? O = B * 2 : O = B ? B * 2 + 1 : 1;
            const H = 360 / ((Z = (ne = a.value) == null ? void 0 : ne.length) != null ? Z : 0),
                V = O * H;
            return l.value = O, 180 - V >= 0 ? 180 - V : 360 + (180 - V)
        },
        k = () => {
            p.value && clearTimeout(p.value)
        },
        x = B => {
            w.value = Q.Spining, p.value = setTimeout(() => {
                v.value = !0, w.value = Q.Winning;
                const $ = B.current_lottery_count === F.Count1;
                g.value = !0, p.value = setTimeout(() => {
                    n.value = !1, w.value = Q.Default, m.value = $, $ && (ke.Receive(), e.updateJinBiSpinning(!0)), e.refreshCutOnceData()
                }, 1e3)
            }, 5e3)
        },
        D = async B => {
            k(), n.value = !0;
            const $ = r.value === F.Count2 ? F.Count0 : F.Count1,
                [O, C] = await We(Xe({
                    activeId: c.value,
                    CurrentLotteryCount: $
                }));
            if (O) {
                await we.checkRes({
                    config: {
                        err: O,
                        userRestrictCallback: () => le.closeDialog(B)
                    },
                    checkOptions: {
                        [Ke.userRestrict]: !0
                    }
                }), e.refreshCutOnceData(), n.value = !1;
                return
            }
            if (C != null && C.msg && (C == null ? void 0 : C.current_lottery_count) === F.Count2) {
                re({
                    message: C == null ? void 0 : C.msg
                }), n.value = !1, e.refreshCutOnceData();
                return
            }
            const H = f(C.index, C.current_lottery_count),
                V = C.current_lottery_count === F.Count1 ? F.Count1 : F.Count2;
            v.value = !1, o.value = V * i + H, e.updateRotateIdxs(C.index, C.current_lottery_count), x(C)
        },
        P = () => {
            if (!c.value) return;
            let B = 0;
            const {
                rotateIdxs: $
            } = R(), O = $ == null ? void 0 : $.find(H => {
                var V;
                return String(H.username) === String((V = te().userInfos) == null ? void 0 : V.username) && c.value === H.activeId
            });
            O && (B = O.rotateDegIdx);
            const C = O ? f(B, O == null ? void 0 : O.count) : f(0);
            o.value = C, ot(() => {
                d.value = !0
            })
        };
    return ze(c, () => {
        P()
    }), at(() => {
        P()
    }), Me(() => {
        p.value && clearTimeout(p.value), s.value && clearTimeout(s.value), _.value && clearTimeout(_.value)
    }), {
        spinning: n,
        borderType: w,
        nextTaskListItemInfo: b,
        rotatePosition: o,
        winningIndex: l,
        amountAnimate: g,
        turntableBgTransition: d,
        setSpinning: T,
        runLottery: D
    }
}, mn = "_awardItem_1cvmr_25", yn = "_firstAward_1cvmr_37", pn = "_secondItem_1cvmr_46", gn = "_center_1cvmr_57", fn = "_text_1cvmr_64", wn = "_icon_1cvmr_77", xn = "_turntableStyle1_1cvmr_84", Tn = "_turntableStyle2_1cvmr_88", Sn = "_turntableStyle3_1cvmr_92", hn = "_turntableStyle4_1cvmr_96", On = "_turntableStyle5_1cvmr_100", Bn = "_turntableStyle6_1cvmr_104", Cn = "_turntablePointer_1cvmr_112", In = "_winningAnimation_1cvmr_123", Dn = "_winning_1cvmr_123", kn = "_common_bganimation_1cvmr_1", q = {
    awardItem: mn,
    firstAward: yn,
    secondItem: pn,
    center: gn,
    text: fn,
    icon: wn,
    turntableStyle1: xn,
    turntableStyle2: Tn,
    turntableStyle3: Sn,
    turntableStyle4: hn,
    turntableStyle5: On,
    turntableStyle6: Bn,
    turntablePointer: Cn,
    winningAnimation: In,
    winning: Dn,
    common_bganimation: kn
}, [$n] = j("event-item-cut-once-award-item"), Nn = M({
    name: $n,
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
    setup(e) {
        const n = R(),
            {
                awardItem: a,
                awardIndex: c,
                awardLen: r,
                winning: l,
                winningIndex: o,
                pointerWidth: i,
                pointerHeight: v,
                styleType: g
            } = st(e),
            b = y(() => {
                var p, s, _, d, m;
                return (p = a.value) != null && p.nullAward ? (s = a.value) == null ? void 0 : s.null_award_value : S(((_ = n.activeData) == null ? void 0 : _.is_show_super_award) && ((d = a.value) == null ? void 0 : d.super_award_value) || ((m = a.value) == null ? void 0 : m.first_award_value) || 0)
            }),
            w = y(() => {
                var p, s;
                return ((p = a.value) == null ? void 0 : p.first_award_icon) || ((s = a.value) == null ? void 0 : s.icon) || "/lobby_asset/common/common/event/kyd_style_".concat(g.value, "_jl_1.png")
            });
        return () => {
            var p;
            return t("div", {
                class: [q.awardItem, q["turntableStyle".concat(g.value)], "turntable-style".concat(r.value)],
                "data-key": c.value,
                style: {
                    transform: "rotate(".concat(c.value * (360 / r.value), "deg)")
                }
            }, [a.value.isSecond ? t("div", {
                class: q.secondItem
            }, [t("div", {
                class: q.center
            }, [t("span", {
                class: [q.text, "award-item-text"]
            }, [rt("?")])]), t(W, {
                class: q.icon,
                src: ((p = a.value) == null ? void 0 : p.second_award_icon) || X[g.value].secondAwardIcon
            }, null)]) : t("div", {
                class: q.firstAward
            }, [t("div", {
                class: q.center
            }, [t("span", {
                class: [q.text, "award-item-text"]
            }, [b.value])]), t(W, {
                class: q.icon,
                src: w.value
            }, null)]), l.value && o.value === c.value && t(W, {
                class: {
                    [q.turntablePointer]: !0,
                    [q.winningAnimation]: l
                },
                style: {
                    transform: "translateX(50%) translateY(-100%) rotate(180deg)"
                },
                src: "/lobby_asset/common/common/event/kyd_style_".concat(g.value, "_zp_x").concat(r.value, ".png"),
                width: L(i.value),
                height: L(v.value),
                tag: "div"
            }, null)])
        }
    }
}), Rn = "_turntableBtn_9ertg_25", An = "_amountWrapper_9ertg_34", zn = "_amountScale_9ertg_40", Mn = "_drawsWrapper_9ertg_43", En = "_text1_9ertg_51", Pn = "_text2_9ertg_54", Ln = "_turntableStyle1_9ertg_69", qn = "_turntableStyle2_9ertg_76", Wn = "_turntableStyle3_9ertg_86", Vn = "_turntableStyle4_9ertg_93", Fn = "_turntableStyle5_9ertg_100", Un = "_turntableStyle6_9ertg_107", jn = "_common_bganimation_9ertg_1", se = {
    turntableBtn: Rn,
    amountWrapper: An,
    amountScale: zn,
    drawsWrapper: Mn,
    text1: En,
    text2: Pn,
    turntableStyle1: Ln,
    turntableStyle2: qn,
    turntableStyle3: Wn,
    turntableStyle4: Vn,
    turntableStyle5: Fn,
    turntableStyle6: Un,
    common_bganimation: jn
}, [Hn] = ce("event-item-modes-cut-once-lottery"), Yn = M({
    name: Hn,
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
    setup(e) {
        const {
            t: n
        } = z(), a = R(), c = te(), {
            cutOnceData: r,
            cutOnceTurnCount: l
        } = E(a), o = y(() => e.lottery.spinning.value || !l.value), i = y(() => {
            var b;
            return Date.now() / 1e3 < ((b = r.value) == null ? void 0 : b.startTime)
        }), v = y(() => {
            var b;
            return Date.now() / 1e3 > ((b = r.value) == null ? void 0 : b.endTime)
        }), g = Le(async () => {
            if (!c.hasLogined) {
                await Qe().openLoginRegister({
                    openType: "insert"
                }), fe().close("cutOnce");
                return
            }
            if (!(e.lottery.spinning.value || !l.value)) {
                if (e.lottery.setSpinning(!0), await we.check({
                        eventData: { ...r.value,
                            taskCallback: async () => await fe().close("cutOnce")
                        },
                        checkOptions: {
                            [J.isDemoLogin]: !0,
                            [J.forbidReceive]: !0,
                            [J.receiveType]: !0,
                            [J.task]: !0
                        }
                    })) {
                    e.lottery.setSpinning();
                    return
                }
                if (i.value) {
                    re({
                        message: n("lobby.event.discountCode.activityNotStarted")
                    });
                    return
                }
                if (v.value) {
                    re({
                        message: n("lobby.event.discountCode.activityHasEnded")
                    });
                    return
                }
                e.lottery.runLottery()
            }
        }, 300);
        return () => t(W, {
            class: [se.turntableBtn, se["turntableStyle".concat(e.styleType)]],
            src: X[e.styleType].btn,
            width: L(e.options.btnSize),
            height: L(e.options.btnSize),
            tag: "div",
            style: {
                cursor: o.value ? "not-allowed" : "pointer"
            }
        }, {
            default: () => {
                var b;
                return [t("div", {
                    class: se.drawsWrapper,
                    onClick: g
                }, [t("span", {
                    class: se.text1
                }, [n("lobby.event.cutOnce.lottery")]), t(K, {
                    class: se.text2,
                    html: (b = n("lobby.event.cutOnce.drawsNumber")) == null ? void 0 : b.replace("<span></span>", " <span>".concat(l.value || 0, "</span> "))
                }, null)])]
            }
        })
    }
}), Jn = (e, n) => {
    var c, r, l, o;
    const {
        t: a
    } = z();
    return {
        [u.InvitedNumber]: a("lobby.event.cutOnce.cardInvitedNumber", {
            x: e
        }),
        [u.DownloadAppNumberAndLogin]: a("lobby.event.cutOnce.taskText8"),
        [u.SubordinateDaMaNumber]: a("lobby.event.cutOnce.cardInvitedNumber", {
            x: e
        }),
        [u.SubordinateFirstRechargeNumber]: a("lobby.event.cutOnce.cardInvitedNumber", {
            x: e
        }),
        [u.SubordinateRechargeCount]: a("lobby.event.cutOnce.cardInvitedNumber", {
            x: e
        }),
        [u.SubordinateTotalRechargeValue]: a("lobby.event.cutOnce.cardInvitedNumber", {
            x: e
        }),
        [u.SubordinateTotalDaMaValue]: a("lobby.event.cutOnce.cardInvitedNumber", {
            x: e
        }),
        [u.SubordinateTotalWithdrawValue]: a("lobby.event.cutOnce.cardInvitedNumber", {
            x: e
        }),
        [u.SubordinateWithdrawCount]: a("lobby.event.cutOnce.cardInvitedNumber", {
            x: e
        }),
        [u.MySelfOneRechargeValue]: a("lobby.event.cutOnce.taskText9", {
            x: (c = n == null ? void 0 : n.second_award_count) != null ? c : 0
        }),
        [u.MySelfOneDaNaValue]: a("lobby.event.cutOnce.taskText10", {
            x: (r = n == null ? void 0 : n.second_award_count) != null ? r : 0
        }),
        [u.MySelfTotalRechargeValue]: a("lobby.event.cutOnce.taskText11", {
            x: (l = n == null ? void 0 : n.second_award_count) != null ? l : 0
        }),
        [u.ConditionTypeMySelfTotalDaNaValue]: a("lobby.event.cutOnce.taskText12", {
            x: (o = n == null ? void 0 : n.second_award_count) != null ? o : 0
        })
    }
}, Xn = e => {
    var c;
    const n = Ge(),
        a = {
            [u.DownloadAppNumberAndLogin]: Ze,
            [u.MySelfOneRechargeValue]: Te,
            [u.MySelfOneDaNaValue]: () => n.push({
                name: Se.ROOT
            }),
            [u.MySelfTotalRechargeValue]: Te,
            [u.ConditionTypeMySelfTotalDaNaValue]: () => n.push({
                name: Se.ROOT
            })
        };
    return e && a[e] && fe().close("cutOnce"), e && ((c = a[e]) == null ? void 0 : c.call(a))
}, Kn = "_turntableMain_z42ln_31", Qn = "_receiveBox_z42ln_36", Zn = "_animateDialog_z42ln_70", Gn = "_animatePopup_z42ln_83", ea = "_common_bganimation_z42ln_1", ee = {
    "cut-once-placeholder": "_cut-once-placeholder_z42ln_25",
    turntableMain: Kn,
    receiveBox: Qn,
    "spine-event-kyd": "_spine-event-kyd_z42ln_62",
    animateDialog: Zn,
    animatePopup: Gn,
    common_bganimation: ea
}, ta = () => {
    const {
        t: e
    } = z(), n = I(!1), a = R(), {
        activeData: c
    } = E(a);
    return {
        isLoading: n,
        handleReceiveTask: async () => {
            var v, g, b, w;
            if (n.value) return;
            n.value = !0;
            const [l, o] = await We(et((v = c.value) == null ? void 0 : v.chop_one_knife_id));
            if (n.value = !1, a.refreshCutOnceData(), l) {
                const p = l,
                    s = (b = (g = p == null ? void 0 : p.data) == null ? void 0 : g.msg) != null ? b : e("lobby.reward.base.receivedError");
                re({
                    message: s
                });
                return
            }
            const i = le.showDialog({
                className: ee.animateDialog,
                overlayClass: ee.animatePopup,
                message: () => lt(W, {
                    src: "/lobby_asset/common/web/animated/apng_event_kyd_spine_event_kyd_JinBiFei.png",
                    width: "100%",
                    canvasMode: {
                        numPlays: 1,
                        onEnd: () => le.closeDialog(i == null ? void 0 : i.instance)
                    }
                }),
                closeOnClickOverlay: !1,
                showCloseButton: !1,
                showConfirmButton: !1
            });
            ke.Receive(), a.updateCutOnceSubTaskUserOptType($e.ReceiveSecondAward), a.updateReceiveId((w = o == null ? void 0 : o.receiveId) != null ? w : 0)
        }
    }
}, na = (e, n, a) => {
    const {
        t: c
    } = z(), r = {
        [u.InvitedNumber]: c("lobby.event.cutOnce.progressTextInvitedNumber", {
            x: e,
            n
        }),
        [u.SubordinateDaMaNumber]: c("lobby.event.cutOnce.progressTextDaMaNumber", {
            x: e,
            n
        }),
        [u.SubordinateFirstRechargeNumber]: c("lobby.event.cutOnce.progressTextFirstRechargeNumber", {
            x: e,
            n
        }),
        [u.SubordinateRechargeCount]: c("lobby.event.cutOnce.progressTextRechargeCount", {
            x: e,
            n
        }),
        [u.SubordinateTotalRechargeValue]: c("lobby.event.cutOnce.progressTextTotalRechargeValue", {
            x: S(e),
            n: S(n)
        }),
        [u.SubordinateTotalDaMaValue]: c("lobby.event.cutOnce.progressTextTotalDaMaValue", {
            x: S(e),
            n: S(n)
        }),
        [u.SubordinateTotalWithdrawValue]: c("lobby.event.cutOnce.progressTextTotalWithdrawValue", {
            x: S(e),
            n: S(n)
        }),
        [u.SubordinateWithdrawCount]: c("lobby.event.cutOnce.progressTextWithdrawCount", {
            x: e,
            n
        })
    };
    return a && r[a] || ""
}, ye = [u.InvitedNumber, u.SubordinateDaMaNumber, u.SubordinateFirstRechargeNumber, u.SubordinateRechargeCount, u.SubordinateTotalRechargeValue, u.SubordinateTotalDaMaValue, u.SubordinateTotalWithdrawValue, u.SubordinateWithdrawCount], aa = "_detailInfo_1q92i_25", oa = "_row_1q92i_25", sa = "_label_1q92i_28", ra = "_value_1q92i_34", la = "_isEfficientYes_1q92i_39", ca = "_isEfficientNo_1q92i_42", ua = "_common_bganimation_1q92i_1", A = {
    detailInfo: aa,
    row: oa,
    label: sa,
    value: ra,
    isEfficientYes: la,
    isEfficientNo: ca,
    common_bganimation: ua
}, [ia] = j("event-item-cut-once-detail-modal"), da = M({
    name: ia,
    props: {
        record: {
            type: Object,
            default: null
        }
    },
    setup(e) {
        const {
            t: n
        } = z(), a = (c, r) => {
            const l = {
                [u.InvitedNumber]: n("lobby.event.cutOnce.detailText4"),
                [u.SubordinateDaMaNumber]: n("lobby.event.cutOnce.detailInfoText1"),
                [u.SubordinateFirstRechargeNumber]: n("lobby.event.cutOnce.detailInfoText2"),
                [u.SubordinateRechargeCount]: n("lobby.event.cutOnce.detailInfoText3", {
                    n: r
                }),
                [u.SubordinateTotalRechargeValue]: n("lobby.event.cutOnce.detailInfoText4", {
                    x: S(r)
                }),
                [u.SubordinateTotalDaMaValue]: n("lobby.event.cutOnce.detailInfoText7", {
                    x: S(r)
                }),
                [u.SubordinateTotalWithdrawValue]: n("lobby.event.cutOnce.detailInfoText5", {
                    x: S(r)
                }),
                [u.SubordinateWithdrawCount]: n("lobby.event.cutOnce.detailInfoText6", {
                    n: r
                })
            };
            return c ? l[c] : ""
        };
        return () => {
            var c, r, l, o, i, v, g;
            return t("div", {
                class: A.detailInfo
            }, [t("div", {
                class: A.row
            }, [t("span", {
                class: A.label
            }, [n("lobby.event.cutOnce.userAccount"), ":"]), t("span", {
                class: A.value
            }, [(c = e.record) == null ? void 0 : c.username])]), t("div", {
                class: A.row
            }, [t("span", {
                class: A.label
            }, [n("lobby.event.cutOnce.createTime"), ":"]), t("span", {
                class: A.value
            }, [be((r = e.record) == null ? void 0 : r.register_time, "ymdhms")])]), t("div", {
                class: A.row
            }, [t("span", {
                class: A.label
            }, [n("lobby.event.promote.isItEffective"), ":"]), t("span", {
                class: [A.value, (l = e.record) != null && l.is_efficient ? A.isEfficientYes : A.isEfficientNo]
            }, [(o = e.record) != null && o.is_efficient ? n("lobby.event.promote.yes") : n("lobby.event.promote.no")])]), t("div", {
                class: A.row
            }, [t("span", {
                class: A.label
            }, [n("lobby.event.cutOnce.detailInfo"), ":"]), t("span", {
                class: {
                    [A.value]: !0,
                    [A.isEfficientYes]: (i = e.record) == null ? void 0 : i.is_efficient
                }
            }, [a((v = e.record) == null ? void 0 : v.second_award_condition_type, (g = e.record) == null ? void 0 : g.second_award_value)])])])
        }
    }
}), _a = "_detailModal_180rp_25", va = "_section_180rp_29", ba = "_title_180rp_35", ma = "_text_180rp_43", ya = "_detailText_180rp_48", pa = "_progressBox_180rp_55", ga = "_promoteBox_180rp_59", fa = "_table_180rp_66", wa = "_lookoverText_180rp_74", xa = "_isEfficientYes_180rp_80", Ta = "_isEfficientNo_180rp_84", Sa = "_guiding_180rp_99", ha = "_isPutAway_180rp_105", Oa = "_icon2_180rp_112", Ba = "_common_bganimation_180rp_1", h = {
    detailModal: _a,
    section: va,
    title: ba,
    text: ma,
    detailText: ya,
    progressBox: pa,
    promoteBox: ga,
    table: fa,
    "table-more": "_table-more_180rp_70",
    lookoverText: wa,
    isEfficientYes: xa,
    isEfficientNo: Ta,
    "detail-btn": "_detail-btn_180rp_88",
    guiding: Sa,
    isPutAway: ha,
    icon2: Oa,
    common_bganimation: Ba
}, [Ca] = j("event-item-cut-once-detail-modal"), Ia = M({
    name: Ca,
    setup() {
        const {
            t: e
        } = z(), n = R(), {
            subTaskData: a
        } = E(n), c = I(["1、", "2、", "3、", "4、"]), r = I(!1), l = y(() => {
            var _, d;
            const s = (d = (_ = a.value) == null ? void 0 : _.award_value) != null ? d : 0;
            return e("lobby.event.cutOnce.secondConditionInvitedNumber", {
                prize: S(s)
            }).replace("100.00%", " ".concat(S(100), "%"))
        }), o = y(() => {
            if (!a.value) return {
                progress: 0,
                progressText: e("lobby.event.cutOnce.completedValue", {
                    x: " ".concat(S(0))
                })
            };
            const {
                second_award_condition_type: s,
                current_award_value: _ = 0,
                second_award_count: d = 0,
                ProgressBarValue: m = 0
            } = a.value || {}, T = d - _, f = T >= 0 ? T : 0, k = na(_, f, s), x = Number((_ / d).toFixed(2)) * 100;
            return ye != null && ye.includes(s) ? {
                progress: m || 0,
                progressText: e("lobby.event.cutOnce.completedValue", {
                    x: " ".concat(S(m))
                })
            } : {
                progress: x,
                progressText: k
            }
        }), i = y(() => {
            var d;
            const s = (d = a.value) == null ? void 0 : d.second_award_condition_type,
                _ = {
                    [u.InvitedNumber]: e("lobby.event.cutOnce.detailText1"),
                    [u.SubordinateDaMaNumber]: e("lobby.event.cutOnce.detailText2"),
                    [u.SubordinateFirstRechargeNumber]: e("lobby.event.cutOnce.detailText3")
                };
            return s && _[s] || ""
        }), v = s => {
            le.showDialog({
                title: () => e("lobby.event.cutOnce.detail"),
                showCloseButton: !0,
                showConfirmButton: !1,
                message: () => t(da, {
                    record: s
                }, null)
            })
        }, g = y(() => [{
            title: e("lobby.event.cutOnce.userAccount"),
            dataIndex: "username",
            key: "username",
            align: "center",
            width: 150,
            customRender: s => t("span", {
                class: h.wrap
            }, [s])
        }, {
            title: e("lobby.event.cutOnce.createTime"),
            dataIndex: "register_time",
            key: "register_time",
            align: "center",
            width: 150,
            customRender: s => t("span", {
                class: h.wrap
            }, [be(Number(s), "ymdhms")])
        }, {
            title: e("lobby.event.promote.isItEffective"),
            dataIndex: "is_efficient",
            key: "is_efficient",
            align: "center",
            customRender: s => t("span", {
                class: s ? h.isEfficientYes : h.isEfficientNo
            }, [e(s ? "lobby.event.promote.yes" : "lobby.event.promote.no")])
        }, {
            title: e("lobby.event.cutOnce.detail"),
            dataIndex: "detail",
            key: "detail",
            align: "center",
            customRender: (s, _) => t("span", {
                class: h.lookoverText,
                onClick: () => v(_)
            }, [e("lobby.event.cutOnce.lookover")])
        }]), b = () => {
            r.value = !r.value
        }, w = () => {
            var d, m, T;
            if (!((m = (d = a.value) == null ? void 0 : d.Data) != null && m.length)) return null;
            const s = i.value ? 2 : 1,
                _ = (T = a.value) == null ? void 0 : T.Data;
            return t("section", {
                class: h.section
            }, [t("h3", {
                class: h.title
            }, [c.value[s], e("lobby.event.cutOnce.detailTitle3")]), t(yt, {
                class: [h.table, r.value ? h["table-more"] : ""],
                columns: g.value,
                uniqueKey: "useridx",
                data: _
            }, null), Ee(t("div", {
                class: h["detail-btn"],
                onClick: b
            }, [r.value ? e("lobby.modal.pay.putAway") : e("lobby.event.cutOnce.more"), t("div", {
                class: {
                    [h.guiding]: !0,
                    [h.isPutAway]: r.value
                }
            }, [t(W, {
                class: h.icon1,
                src: "/lobby_asset/common/web/common/img_scroll_jt.svg"
            }, null), t(W, {
                class: h.icon2,
                src: "/lobby_asset/common/web/common/img_scroll_jt.svg"
            }, null)])]), [
                [Pe, (_ == null ? void 0 : _.length) > 6]
            ])])
        }, p = () => {
            var _, d, m, T;
            let s = 2;
            return i.value && ((d = (_ = a.value) == null ? void 0 : _.Data) != null && d.length) ? s = 3 : !i.value && !((T = (m = a.value) == null ? void 0 : m.Data) != null && T.length) && (s = 1), t("section", {
                class: h.section
            }, [t("h3", {
                class: h.title
            }, [c.value[s], e("lobby.event.cutOnce.detailTitle4")]), t(mt, {
                class: h.promoteBox
            }, null)])
        };
        return () => t("div", {
            class: h.detailModal
        }, [t("section", {
            class: h.section
        }, [t("h3", {
            class: h.title
        }, [c.value[0], e("lobby.event.cutOnce.detailTitle1")]), t("p", {
            class: h.text
        }, [t(K, {
            class: h.detailText,
            html: l.value
        }, null)]), t(xe, {
            class: h.progressBox,
            percent: o.value.progress,
            text: o.value.progressText
        }, null)]), i.value && t("section", {
            class: h.section
        }, [t("h3", {
            class: h.title
        }, [c.value[1], e("lobby.event.cutOnce.detailTitle2")]), t("p", {
            class: h.text
        }, [i.value])]), w(), p()])
    }
}), Da = "_progressBox_vibt5_25", ka = "_progress_vibt5_25", $a = "_progressStyle1_vibt5_45", Na = "_progressStyle2_vibt5_48", Ra = "_progressStyle3_vibt5_51", Aa = "_progressStyle4_vibt5_54", za = "_progressStyle5_vibt5_57", Ma = "_progressStyle6_vibt5_60", Ea = "_common_bganimation_vibt5_1", pe = {
    progressBox: Da,
    progress: ka,
    progressStyle1: $a,
    progressStyle2: Na,
    progressStyle3: Ra,
    progressStyle4: Aa,
    progressStyle5: za,
    progressStyle6: Ma,
    common_bganimation: Ea
}, [Pa] = j("event-item-cut-once-tips-progress"), La = M({
    name: Pa,
    props: {
        styleType: {
            type: Number,
            default: 1
        },
        currentGroup: {
            type: Object,
            default: () => {}
        }
    },
    setup(e) {
        const {
            t: n
        } = z(), a = R(), {
            activeData: c
        } = E(a), r = y(() => [u.InvitedNumber, u.SubordinateDaMaNumber, u.SubordinateFirstRechargeNumber, u.SubordinateRechargeCount, u.SubordinateTotalRechargeValue, u.SubordinateTotalDaMaValue, u.SubordinateTotalWithdrawValue, u.SubordinateWithdrawCount]), l = y(() => {
            var i, v, g, b, w;
            const o = (i = c.value) == null ? void 0 : i.SubTaskData;
            if (o) {
                const {
                    current_award_value: p,
                    second_award_count: s,
                    second_award_condition_type: _,
                    ProgressBarValue: d = 0
                } = o, m = p < s ? p : s;
                return r.value.includes(_) ? {
                    progress: d || 0,
                    text: n("lobby.event.cutOnce.completedValue", {
                        x: S(d != null ? d : 0)
                    })
                } : {
                    progress: Number((p / s).toFixed(2)) * 100,
                    text: "".concat(m, " / ").concat(s)
                }
            } else return {
                progress: 0,
                text: "".concat((g = (v = e.currentGroup) == null ? void 0 : v.second_current_count) != null ? g : 0, " / ").concat((w = (b = e.currentGroup) == null ? void 0 : b.second_award_count) != null ? w : 0)
            }
        });
        return () => {
            let o = l.value.progress;
            return o > 0 && o < 5 ? o = 5 : o > 95 && o < 100 && (o = 95), t("div", {
                class: pe.progressBox
            }, [t(xe, {
                class: {
                    [pe.progress]: !0,
                    [pe["progressStyle".concat(e.styleType)]]: !0
                },
                percent: o,
                text: l.value.text
            }, null)])
        }
    }
}), qa = "_cardBox_uqy77_25", Wa = "_card_uqy77_25", Va = "_content_uqy77_32", Fa = "_title_uqy77_36", Ua = "_text_uqy77_45", ja = "_titleStyle4_uqy77_57", Ha = "_detail_uqy77_61", Ya = "_detailText_uqy77_67", Ja = "_detailBtn_uqy77_78", Xa = "_receivedBtn_uqy77_96", Ka = "_disabled_uqy77_101", Qa = "_countdown_uqy77_108", Za = "_manualUpdate_uqy77_116", Ga = "_manualUpdateDisable_uqy77_124", eo = "_countdown2_uqy77_128", to = "_countdown4_uqy77_131", no = "_contentStyle1_uqy77_134", ao = "_resetCountdown_uqy77_138", oo = "_contentStyle2_uqy77_141", so = "_contentStyle3_uqy77_148", ro = "_contentStyle4_uqy77_158", lo = "_contentStyle5_uqy77_168", co = "_contentStyle6_uqy77_175", uo = "_detailModal_uqy77_183", io = "_common_bganimation_uqy77_1", N = {
    cardBox: qa,
    card: Wa,
    content: Va,
    title: Fa,
    text: Ua,
    titleStyle4: ja,
    detail: Ha,
    detailText: Ya,
    detailBtn: Ja,
    receivedBtn: Xa,
    disabled: Ka,
    countdown: Qa,
    manualUpdate: Za,
    manualUpdateDisable: Ga,
    countdown2: eo,
    countdown4: to,
    contentStyle1: no,
    resetCountdown: ao,
    contentStyle2: oo,
    contentStyle3: so,
    contentStyle4: ro,
    contentStyle5: lo,
    contentStyle6: co,
    detailModal: uo,
    common_bganimation: io
}, [_o] = j("event-item-cut-once-tips-card"), vo = M({
    name: _o,
    props: {
        styleType: {
            type: Number,
            default: 1
        },
        pageType: qe.pageType
    },
    setup(e) {
        const {
            t: a
        } = z(), c = R(), {
            activeData: r
        } = E(c), l = ta(), o = I(601), i = I(0), v = I(e.pageType !== Ce.HomeModal), g = y(() => {
            const {
                award_portfolio_index: x,
                award_portfolios: D = []
            } = r.value;
            return D.find(P => P.index === x)
        }), b = y(() => {
            var x, D;
            return S((D = (x = g.value) == null ? void 0 : x.second_award_value) != null ? D : 0) || ""
        }), w = y(() => ({
            width: L(X[e.styleType].tipsCardWidth),
            height: L(X[e.styleType].tipsCardHeight)
        })), p = y(() => {
            var P, B, $, O;
            const x = (P = g.value) == null ? void 0 : P.second_award_condition_type,
                D = (O = ($ = (B = r.value) == null ? void 0 : B.SubTaskData) == null ? void 0 : $.SubNumber) != null ? O : 0;
            return x && Jn(D, g.value)[x] || ""
        }), s = y(() => {
            const x = r.value.SubTaskData;
            return x && x.user_opt_type !== 0
        }), _ = y(() => {
            const x = r.value.SubTaskData;
            if (!x) return !1;
            const {
                user_opt_type: D,
                current_award_value: P,
                second_award_count: B,
                second_award_condition_type: $
            } = x, O = bt(P).minus(B);
            return D === $e.NoOpt && O.number.toNumber() >= 0 || $ === u.DownloadAppNumberAndLogin && P >= B
        }), d = y(() => {
            var D;
            return [u.DownloadAppNumberAndLogin, u.MySelfOneRechargeValue, u.MySelfOneDaNaValue, u.MySelfTotalRechargeValue, u.ConditionTypeMySelfTotalDaNaValue].includes((D = g.value) == null ? void 0 : D.second_award_condition_type)
        }), m = async () => {
            l.handleReceiveTask()
        }, T = () => {
            var x;
            if (d.value) {
                const D = (x = g.value) == null ? void 0 : x.second_award_condition_type;
                return Xn(D)
            }
            le.showDialog({
                width: L(690),
                className: N.detailModal,
                showCloseButton: !0,
                showConfirmButton: !1,
                message: () => t(Ia, null, null)
            })
        }, f = () => {
            o.value = 0, v.value = !1
        }, k = () => {
            v.value || (i.value += 1, c.refreshCutOnceData(), setTimeout(() => {
                o.value = 601, v.value = !0
            }, 500))
        };
        return () => t("div", {
            class: N.cardBox
        }, [t(W, {
            class: N.card,
            src: X[e.styleType].tipsCard,
            width: w.value.width,
            height: w.value.height,
            tag: "div"
        }, {
            default: () => [t("div", {
                class: [N.content, N["contentStyle".concat(e.styleType)]]
            }, [t("div", {
                class: {
                    [N.title]: !0,
                    [N.titleStyle4]: e.styleType === Ne.Style4
                }
            }, [t(K, {
                class: N.text,
                html: a("lobby.event.cutOnce.cardTitle", {
                    prize: b.value
                })
            }, null)]), t("div", {
                class: N.detail
            }, [t("span", {
                class: N.detailText
            }, [p.value]), t("div", null, [_.value || s.value ? t(ge, {
                class: {
                    [N.detailBtn]: !0,
                    [N.receivedBtn]: !s.value,
                    [N.disabled]: s.value
                },
                loading: l.isLoading.value,
                disabled: s.value,
                type: "primary",
                onClick: m
            }, {
                default: () => [s.value ? a("lobby.reward.base.hasReceive") : a("lobby.event.cutOnce.receive")]
            }) : t(ge, {
                class: N.detailBtn,
                type: "primary",
                onClick: T
            }, {
                default: () => [d.value ? a("lobby.event.cutOnce.forward") : a("lobby.event.cutOnce.detail")]
            })])]), t(La, {
                styleType: e.styleType,
                currentGroup: g.value
            }, null), t("div", {
                class: N.countdown
            }, [t(Re, {
                class: N.resetCountdown,
                textFormatType: Ae.Update,
                duration: o.value,
                onComplete: f,
                key: i.value
            }, null), t("div", {
                class: {
                    [N.manualUpdate]: !0,
                    [N.manualUpdateDisable]: v.value
                },
                onClick: k
            }, [t(K, {
                html: a("lobby.event.cutOnce.manualUpdate")
            }, null)])])])]
        })])
    }
}), bo = "_turntableBox_1dzw0_25", mo = "_turntableBoxStyle4_1dzw0_35", yo = "_turntableBoxStyle3_1dzw0_41", po = "_turntable_1dzw0_25", go = "_turntableBorder_1dzw0_41", fo = "_turntableBoxStyle5_1dzw0_45", wo = "_baseBottom_1dzw0_62", xo = "_turntableBg_1dzw0_69", To = "_turntableBgTransition_1dzw0_75", So = "_tipsCard_1dzw0_78", ho = "_turntableOutBox_1dzw0_98", Oo = "_common_bganimation_1dzw0_1", Y = {
    turntableBox: bo,
    turntableBoxStyle4: mo,
    "turntable-style-4": "_turntable-style-4_1dzw0_38",
    "award-portfolio-list-10": "_award-portfolio-list-10_1dzw0_38",
    "turntable-pointer": "_turntable-pointer_1dzw0_38",
    turntableBoxStyle3: yo,
    turntable: po,
    turntableBorder: go,
    turntableBoxStyle5: fo,
    baseBottom: wo,
    turntableBg: xo,
    turntableBgTransition: To,
    tipsCard: So,
    turntableOutBox: ho,
    common_bganimation: Oo
}, [Bo] = ce("event-item-modes-cut-once-turntable"), Co = M({
    name: Bo,
    props: qe,
    setup(e) {
        const n = R(),
            {
                cutOnceData: a,
                isShowTipsCard: c,
                turntableAwardList: r
            } = E(n),
            l = bn(),
            o = y(() => {
                var w;
                const b = (w = a.value) == null ? void 0 : w.activeData;
                return Number(b == null ? void 0 : b.display_type)
            }),
            i = y(() => {
                var b;
                return (b = r.value) == null ? void 0 : b.length
            }),
            v = y(() => {
                let b = 0,
                    w = 0;
                o.value && (b = X[o.value].bgSize, w = X[o.value].btnSize);
                let p, s;
                try {
                    p = ie[i.value].width, s = ie[i.value].height
                } catch (_) {
                    console.warn(_), p = ie[he.equal0].width, s = ie[he.equal0].height
                }
                return {
                    bgSize: b,
                    btnSize: w,
                    pointerWidth: p,
                    pointerHeight: s
                }
            }),
            g = y(() => {
                if (!Oe[o.value]) return [];
                const {
                    borderAnim1: b,
                    borderAnim2: w,
                    borderAnim3: p
                } = Oe[o.value];
                return [{
                    borderAnim: b,
                    borderType: Q.Default
                }, {
                    borderAnim: w,
                    borderType: Q.Spining
                }, {
                    borderAnim: p,
                    borderType: Q.Winning
                }]
            });
        return () => {
            var s, _;
            const {
                bgSize: b,
                pointerWidth: w,
                pointerHeight: p
            } = v.value;
            return t("div", {
                class: [Y.turntableBox, Y["turntableBoxStyle".concat(o.value)], c.value && Y.turntableOutBox]
            }, [!!i.value && t("div", {
                class: [Y.turntable, "turntable-style-".concat(o.value, " award-portfolio-list-").concat(i.value)]
            }, [(s = g.value) == null ? void 0 : s.map(d => Ee(t(W, {
                class: Y.turntableBorder,
                lazy: !1,
                width: L(b),
                height: L(b),
                key: d.borderAnim,
                src: d.borderAnim
            }, null), [
                [Pe, l.borderType.value === d.borderType]
            ])), o.value === Ne.Style4 && t(W, {
                class: Y.baseBottom,
                src: X[o.value].baseBottom,
                width: L(199),
                height: L(68)
            }, null), t(W, {
                class: {
                    [Y.turntableBg]: !0,
                    [Y.turntableBgTransition]: l.turntableBgTransition.value
                },
                style: {
                    transform: "rotate(".concat(l.rotatePosition.value, "deg)")
                },
                src: "/lobby_asset/common/common/event/kyd_style_".concat(o.value, "_zp_").concat(i.value, ".png"),
                width: L(b),
                height: L(b),
                "data-rotate-index": ((_ = l.winningIndex) == null ? void 0 : _.value) || 0,
                tag: "div"
            }, {
                default: () => {
                    var d;
                    return [(d = r.value) == null ? void 0 : d.map((m, T) => t(Nn, {
                        pointerWidth: w,
                        pointerHeight: p,
                        awardItem: m,
                        awardIndex: T,
                        styleType: o.value,
                        awardLen: i.value
                    }, null))]
                }
            }), t(Yn, {
                options: v.value,
                styleType: o.value,
                lottery: l
            }, null), c.value && t(vo, {
                class: Y.tipsCard,
                styleType: o.value,
                pageType: e.pageType
            }, null)])])
        }
    }
}), [Io] = ce("event-item-modes-cut-once"), Zo = M({
    name: Io,
    props: pt,
    setup(e) {
        const {
            t: n
        } = z(), a = R(), {
            eventItemData: c,
            isItemLoading: r,
            itemErr: l
        } = E(a), o = y(() => r.value ? c.value ? "nested-loading" : "loading" : l.value ? "retry" : null), i = async () => {
            a.refreshEventItemDetail(e.activeId)
        };
        return Me(() => {
            a.resetCutOnceData()
        }), () => t(Ie, {
            class: [ee["cut-once-placeholder"]],
            type: o.value,
            empty: {
                text: n("lobby.event.luckyWheel.tabs.noData")
            },
            onRetry: i
        }, {
            default: () => [t("div", {
                class: ee.turntableMain
            }, [t("div", {
                class: ee.receiveBox
            }, [t(Pt, null, null), t(Dt, null, null)]), t(De, null, {
                default: () => [t(Co, {
                    pageType: e.pageType
                }, null), t(vn, null, null)]
            }), a.jinBiSpinning && t(W, {
                class: ee["spine-event-kyd"],
                src: "/lobby_asset/common/web/animated/apng_event_kyd_spine_event_kyd_JinBiFei.png",
                ref: "jinBiFeiRef",
                canvasMode: {
                    numPlays: 1,
                    onEnd: () => {
                        a.updateJinBiSpinning(!1)
                    }
                }
            }, null)])]
        })
    }
});
export {
    Zo as
    default
};
//# sourceMappingURL=CutOnceIndex.xvTPlnBg.js.map