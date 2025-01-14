import {
    a as G,
    M as A,
    q as C,
    dy as K,
    j8 as U,
    a6 as z,
    X as W,
    aq as Y,
    j9 as j,
    du as x,
    cg as H,
    gJ as J,
    an as V
} from "./main.async.-NbSL2aO.js";
import {
    E as X
} from "./PersistCheckboxIndex.DjDtyJCh.js";
import {
    D as Q
} from "./DialogLayoutIndex.Nyd4fs_F.js";
import {
    E
} from "./const.kNgtypBJ.js";
import {
    R as L,
    E as P
} from "./ReceiveCountdownIndex.CrNog2Lx.js";
import {
    u as Z
} from "./useBtnText.7SzFO64x.js";
import {
    u as ee
} from "./useReceiveOne.DfDljiQ3.js";
import {
    k,
    i as te,
    c as v,
    a5 as e,
    p as M,
    r as D,
    aB as ae,
    n as ne
} from "../vendors/vendor-@vue.CBvhRkQp.js";
import {
    L as q
} from "./ListItemIndex.DHztfRMs.js";
import {
    M as $,
    u as oe,
    S as ie,
    R as se,
    a as le
} from "./SlideItemIndex.B3lw-Stf.js";
import {
    S as re,
    a as ce
} from "../vendors/vendor-swiper.BzK1hN__.js";
import "./main.Dmn05Mj-.js";
import "../vendors/vendor-default.p-wnugzB.js";
import "../vendors/vendor-bignumber.BRr1dcww.js";
import "../vendors/vendor-stable.Cg92BvZJ.js";
import "../vendors/vendor-@intlify.BmUtFfVu.js";
import "../vendors/vendor-lodash.CYk3mlCa.js";
import "../vendors/vendor-@sentry.EjpkRnd3.js";
import "./ModalContentIndex.LdmGwKc5.js";
import "./records.Bhm8aRMj.js";
import "./index.C77qB8kj.js";
import "./index.DSLviaDb.js";
import "./index.CNRfc5ss.js";
import "./SourceTextIndex.CVAEoUbG.js";
import "./ListItemIndex.BHnFGxZ1.js";
import "./index.D6ayqpk3.js";
import "./List.BPt-sskq.js";
var I = (t => (t[t.TODAY = 0] = "TODAY", t[t.TOMORROW = 1] = "TOMORROW", t[t.DISTRIBUTED = 2] = "DISTRIBUTED", t))(I || {});
const de = "_btnBox_1foey_25",
    ue = "_btnText_1foey_30",
    me = "_resetCountdown_1foey_43",
    ve = "_common_bganimation_1foey_1",
    h = {
        btnBox: de,
        btnText: ue,
        resetCountdown: me,
        "distributed-btn": "_distributed-btn_1foey_47",
        common_bganimation: ve
    },
    [pe] = C("pages-dialogs-can-receive-pop-list-btn"),
    N = k({
        name: pe,
        props: {
            listItem: {
                type: Object,
                default: null
            },
            type: {
                type: Number,
                default: I.TODAY
            }
        },
        setup(t) {
            const {
                t: i
            } = G(), p = ee(), l = te("refreshData"), {
                textMapper: r
            } = Z(), f = v(() => {
                var n;
                return ((n = t.listItem) == null ? void 0 : n.receiveDuration) < 0
            }), R = v(() => {
                var n;
                return ((n = t.listItem) == null ? void 0 : n.receiveDuration) > 0
            }), S = async () => {
                var n;
                if ((n = t.listItem) != null && n.canGo) {
                    K(t.listItem);
                    return
                }
                l && p.handleReceive(t.listItem, l)
            }, o = () => {
                l == null || l()
            };
            return () => {
                const {
                    id: n,
                    receiveDuration: u,
                    canGo: c
                } = t.listItem;
                if (t.type === I.TODAY) {
                    const d = c ? E.Goto : E.PendingReceive;
                    return e("div", {
                        class: h.btnBox
                    }, [e(A, {
                        type: c ? "primary" : "success",
                        size: "small",
                        onClick: S
                    }, {
                        default: () => {
                            var s, g;
                            return [e("span", {
                                class: h.btnText
                            }, [(g = (s = r.value)[d]) == null ? void 0 : g.call(s)]), f.value && e(L, {
                                class: h.resetCountdown,
                                textFormatType: P.None,
                                duration: u,
                                onComplete: o
                            }, null), R.value && e(L, {
                                class: h.resetCountdown,
                                textFormatType: P.None,
                                duration: u,
                                onComplete: o
                            }, null)]
                        }
                    })])
                } else {
                    if (t.type === I.TOMORROW) return e("div", {
                        class: [h.btnBox, p.shakeId.value === n ? h.shake : ""]
                    }, [e(A, {
                        disabled: !0,
                        size: "small",
                        onClick: () => p.handleBtnShake(n)
                    }, {
                        default: () => {
                            var d, s, g;
                            return [(s = (d = r.value)[E.GrayPendingReceive]) == null ? void 0 : s.call(d), ((g = t.listItem) == null ? void 0 : g.receiveDuration) > 0 && R.value && e(L, {
                                class: h.resetCountdown,
                                textFormatType: P.None,
                                duration: u,
                                onComplete: o
                            }, null)]
                        }
                    })]);
                    if (t.type === I.DISTRIBUTED) return e("div", {
                        class: h["distributed-btn"]
                    }, [i("lobby.event.listedRewards.distributed")])
                }
            }
        }
    }),
    _e = "_placeholder_me4eh_25",
    ye = "_common_bganimation_me4eh_1",
    w = {
        placeholder: _e,
        "list-chunk": "_list-chunk_me4eh_30",
        "claim-title": "_claim-title_me4eh_35",
        common_bganimation: ye
    },
    [fe] = C("pages-dialogs-can-receive-pop-list"),
    Re = k({
        name: fe,
        setup() {
            const {
                t
            } = G(), i = U(), p = v(() => i.isLoading ? "nested-loading" : i.listErr ? "retry" : !r.value && !f.value && !R.value ? "empty" : null), l = v(() => {
                const {
                    pendingRewardList: o = []
                } = (i == null ? void 0 : i.receiveRewardPop) || {}, n = (o == null ? void 0 : o.filter(c => !c.canGo && c.receiveDuration <= 0)) || [], u = (o == null ? void 0 : o.filter(c => c.canGo || c.receiveDuration > 0)) || [];
                return [...n, ...u]
            }), r = v(() => {
                var o, n;
                return ((n = (o = i.receiveRewardPop) == null ? void 0 : o.pendingRewardList) == null ? void 0 : n.length) !== 0
            }), f = v(() => {
                var o, n;
                return ((n = (o = i.receiveRewardPop) == null ? void 0 : o.collectTomorrowList) == null ? void 0 : n.length) !== 0
            }), R = v(() => {
                var o, n;
                return ((n = (o = i.receiveRewardPop) == null ? void 0 : o.receivedTodayList) == null ? void 0 : n.length) !== 0
            });
            return M("refreshData", async () => {
                await Y.setCacheExpired([j]), i.getCanReceiveRewardPop()
            }), () => e(W, {
                class: w.placeholder,
                type: p.value
            }, {
                default: () => {
                    var o, n, u, c, d;
                    return [r.value && e("div", {
                        class: [w["claim-title"]]
                    }, [t("lobby.event.listedRewards.toBeCollectedToday")]), r.value && e("div", {
                        class: w["list-chunk"]
                    }, [(o = l.value) == null ? void 0 : o.map(s => e(q, {
                        listItem: s,
                        key: s.id
                    }, {
                        default: () => [e(N, {
                            listItem: s,
                            type: I.TODAY
                        }, null)]
                    }))]), f.value && e(z, {
                        html: t("lobby.event.listedRewards.collectTomorrow"),
                        class: [w["claim-title"]],
                        tag: "div"
                    }, null), f.value && e("div", {
                        class: w["list-chunk"]
                    }, [(u = (n = i.receiveRewardPop) == null ? void 0 : n.collectTomorrowList) == null ? void 0 : u.map(s => e(q, {
                        listItem: s,
                        key: s.id
                    }, {
                        default: () => [e(N, {
                            listItem: s,
                            type: I.TOMORROW
                        }, null)]
                    }))]), R.value && e("div", {
                        class: [w["claim-title"]]
                    }, [t("lobby.event.listedRewards.receivedToday")]), R.value && e("div", {
                        class: w["list-chunk"]
                    }, [(d = (c = i.receiveRewardPop) == null ? void 0 : c.receivedTodayList) == null ? void 0 : d.map(s => e(q, {
                        listItem: s,
                        key: s.id
                    }, {
                        default: () => [e(N, {
                            listItem: s,
                            type: I.DISTRIBUTED
                        }, null)]
                    }))])]
                }
            })
        }
    }),
    be = "_common_bganimation_ba7qo_1",
    b = {
        "canreceive-top-box": "_canreceive-top-box_ba7qo_25",
        "canreceive-header": "_canreceive-header_ba7qo_33",
        "canreceive-placeholder": "_canreceive-placeholder_ba7qo_40",
        "redpack-mode": "_redpack-mode_ba7qo_44",
        "swiper-container": "_swiper-container_ba7qo_44",
        "swiper-slide": "_swiper-slide_ba7qo_48",
        "treasure-mode": "_treasure-mode_ba7qo_54",
        "image-loaded": "_image-loaded_ba7qo_66",
        "claim-title": "_claim-title_ba7qo_79",
        "receive-records": "_receive-records_ba7qo_90",
        common_bganimation: be
    },
    [he] = C("pages-dialogs-can-receive-pop-swiper"),
    Ie = k({
        name: he,
        props: {
            canReceiveStyle: {
                type: Number,
                default: x.Normal
            }
        },
        setup(t) {
            const {
                t: i
            } = G(), p = D(), l = U(), r = D(null), f = D(!1), R = D(void 0), S = a => {
                r.value = a
            }, o = () => {
                f.value = !0
            }, n = () => {
                var _, m;
                const a = l.receivedList;
                (_ = r.value) != null && _.id && l.updateReceivedList([...a, (m = r.value) == null ? void 0 : m.id]), r.value = null, f.value = !1, u()
            }, u = async () => {
                var a;
                await Y.setCacheExpired([j]), l.getCanReceiveRewardPop(), (a = p.value) == null || a.initRecordData(!0)
            };
            M("refreshData", u), M("receiveSuccess", S);
            const c = v(() => {
                    var a;
                    return l.isLoading || H().isListLoading ? "nested-loading" : l.listErr ? "retry" : (a = d.value) != null && a.length ? null : "empty"
                }),
                d = v(() => {
                    const {
                        pendingRewardList: a = [],
                        collectTomorrowList: _ = []
                    } = (l == null ? void 0 : l.receiveRewardPop) || {}, m = (a == null ? void 0 : a.filter(T => !T.canGo && T.receiveDuration <= 0)) || [], O = (a == null ? void 0 : a.filter(T => T.canGo || T.receiveDuration > 0)) || [], y = [...m, ...O, ..._];
                    let B = [];
                    return (y == null ? void 0 : y.length) < $ ? B = y : B = [y[1], y[0], ...y.slice(2)], B
                }),
                s = a => {
                    ne(() => {
                        var _, m;
                        a && ((_ = d.value) == null ? void 0 : _.length) >= $ && ((m = a == null ? void 0 : a.slideTo) == null || m.call(a, 1, 0))
                    })
                },
                g = a => {
                    R.value = a.realIndex
                },
                F = v(() => oe().getSwiperConfig(t.canReceiveStyle, !0));
            return () => e("div", null, [e("div", {
                class: [b["claim-title"]]
            }, [i("lobby.event.listedRewards.toBeCollectedToday")]), e("div", {
                class: {
                    [b["canreceive-top-box"]]: !0,
                    [b["redpack-mode"]]: t.canReceiveStyle === x.RedPocket,
                    [b["treasure-mode"]]: t.canReceiveStyle === x.Treasure,
                    [b["image-loaded"]]: f.value
                }
            }, [e(W, {
                empty: {
                    text: i("lobby.event.luckyWheel.tabs.noData")
                },
                class: {
                    [b["canreceive-placeholder"]]: !0
                },
                type: c.value
            }, {
                default: () => {
                    var a;
                    return [!!((a = d.value) != null && a.length) && e(re, ae({
                        class: b["swiper-container"]
                    }, F.value, {
                        "data-touchmove-allowed": !0,
                        onInit: s,
                        onTransitionEnd: g
                    }), {
                        default: () => {
                            var _;
                            return [(_ = d.value) == null ? void 0 : _.map((m, O) => e(ce, {
                                class: b["swiper-slide"],
                                key: m.id
                            }, {
                                default: () => {
                                    var y;
                                    return [e(ie, {
                                        key: m.id,
                                        slideItem: m,
                                        totolLength: (y = d.value) == null ? void 0 : y.length,
                                        swiperNowIdx: R.value,
                                        idx: O,
                                        canReceiveStyle: t.canReceiveStyle
                                    }, null)]
                                }
                            }))]
                        }
                    })]
                }
            })]), e(se, {
                canReceiveStyle: t.canReceiveStyle,
                ref: p,
                class: b["receive-records"]
            }, null), !!r.value && e(le, {
                canReceiveStyle: t.canReceiveStyle,
                targetItem: r.value,
                onAnimatedEnd: n,
                onImageShowEnd: o
            }, null)])
        }
    }),
    [ge] = C("pages-dialogs-can-receive"),
    Ve = k({
        name: ge,
        setup() {
            const {
                visible: t
            } = J("canReceive"), i = V(), p = v(() => i.canReceiveStyle === x.RedPocket || i.canReceiveStyle === x.Treasure);
            return () => e(Q, {
                direction: "vertical",
                show: t.value,
                "onUpdate:show": l => t.value = l,
                persistName: X.canReceive
            }, {
                default: () => [p.value ? e(Ie, {
                    canReceiveStyle: i.canReceiveStyle
                }, null) : e(Re, null, null)]
            })
        }
    });
export {
    Ve as
    default
};
//# sourceMappingURL=CanReceiveIndex.Cj-Uv9xQ.js.map