import {
    ja as O,
    du as m,
    a as I,
    d6 as F,
    ap as k,
    v as z,
    cA as S,
    X as U,
    I as f,
    q as T,
    E as V,
    b as Y,
    c$ as W,
    a6 as C,
    cd as G,
    cx as $,
    j8 as B,
    x as H,
    dx as J,
    dy as X,
    $ as K
} from "./main.async.-NbSL2aO.js";
import {
    E as Q
} from "../vendors/vendor-swiper.BzK1hN__.js";
import {
    a as N,
    E
} from "./records.Bhm8aRMj.js";
import {
    a as Z,
    L as ee
} from "./ListItemIndex.BHnFGxZ1.js";
import "./main.Dmn05Mj-.js";
import "../vendors/vendor-default.p-wnugzB.js";
import "../vendors/vendor-bignumber.BRr1dcww.js";
import {
    L as te
} from "./index.D6ayqpk3.js";
import {
    k as R,
    w as ae,
    o as j,
    c as p,
    a5 as e,
    r as q,
    bz as L,
    br as D,
    i as A,
    F as ne,
    a4 as ce
} from "../vendors/vendor-@vue.CBvhRkQp.js";
import {
    S as se
} from "./SourceTextIndex.CVAEoUbG.js";
import {
    M as oe
} from "./ModalContentIndex.LdmGwKc5.js";
import {
    R as P,
    E as M
} from "./ReceiveCountdownIndex.CrNog2Lx.js";
import {
    u as re
} from "./useReceiveOne.DfDljiQ3.js";
const Je = () => ({
        getSwiperConfig: (u, o) => {
            const r = O();
            let l = u === m.Treasure ? r * 2.2 : r * 1.55;
            return o && (l = u === m.Treasure ? r * 2.55 : r * 1.9), {
                centeredSlides: !0,
                slidesPerView: "auto",
                loop: !1,
                loopedSlides: 3,
                spaceBetween: 0,
                slidesPerGroup: 1,
                grabCursor: !0,
                effect: "coverflow",
                coverflowEffect: {
                    rotate: 0,
                    stretch: l,
                    depth: 300,
                    modifier: 1,
                    slideShadows: !1
                },
                modules: [Q]
            }
        }
    }),
    Xe = 3,
    ie = "_recordItem_boo9x_49",
    le = "_recordMain_boo9x_60",
    de = "_showLast_boo9x_64",
    me = "_treasure_boo9x_69",
    ue = "_common_bganimation_boo9x_1",
    g = {
        "canreceive-record-box": "_canreceive-record-box_boo9x_25",
        "canreceive-record-tab": "_canreceive-record-tab_boo9x_28",
        "canreceive-record-title": "_canreceive-record-title_boo9x_35",
        "canreceive-record-more-btn": "_canreceive-record-more-btn_boo9x_40",
        "record-placeholder": "_record-placeholder_boo9x_45",
        recordItem: ie,
        recordMain: le,
        showLast: de,
        "red-pocket": "_red-pocket_boo9x_68",
        treasure: me,
        common_bganimation: ue
    },
    [_e] = T("pages-home-discount-can-receive-components-receive-records"),
    Ke = R({
        name: _e,
        props: {
            canReceiveStyle: {
                type: Number,
                default: m.Normal
            }
        },
        setup(t) {
            const {
                t: u
            } = I(), o = F(Z, {
                immediate: !1,
                transformFn: a => ({
                    data: a.list,
                    total: a.count
                }),
                defaultPageSize: 10
            });
            ae(() => k().hasLogined, (a, c) => {
                a !== c && (o.payload.value = { ...o.payload.value,
                    timeDay: N.LastSixtyDay,
                    status: E.All
                }, o.loadData(!0))
            }), j(() => {
                k().hasLogined && (o.payload.value = { ...o.payload.value,
                    timeDay: N.LastSixtyDay,
                    status: E.All
                }, o.loadData(!0))
            });
            const r = async () => {
                    k().hasLogined && o.loadData(!0)
                },
                l = Y(),
                b = () => {
                    l.push({
                        name: V.RECORDS
                    })
                };
            z({
                initRecordData: r
            });
            const h = p(() => {
                    var a;
                    return o.loading.value ? "nested-loading" : o.listError.value ? "retry" : (a = o.list.value) != null && a.length ? null : "empty"
                }),
                y = p(() => t.canReceiveStyle === m.RedPocket ? {
                    width: S(29),
                    height: S(39),
                    src: "/lobby_asset/common/common/event/hongbao_icon_s.png",
                    class: g["red-pocket"]
                } : {
                    width: S(39),
                    height: S(27),
                    src: "/lobby_asset/common/common/event/baoxiang_icon_s.png",
                    class: g.treasure
                });
            return () => e("div", null, [e("div", {
                class: g["canreceive-record-box"]
            }, [e("div", {
                class: g["canreceive-record-tab"]
            }, [e("div", {
                class: g["canreceive-record-title"]
            }, [e("span", null, [u("lobby.cashback.pageTitle.pickUpRecord")])]), e("div", {
                onClick: b,
                class: g["canreceive-record-more-btn"]
            }, [u("lobby.promote.promote.more")])])]), e(U, {
                empty: {
                    text: u("lobby.event.luckyWheel.tabs.noData")
                },
                class: g["record-placeholder"],
                type: h.value,
                onRetry: r
            }, {
                default: () => {
                    var a, c;
                    return [e(te, {
                        finished: !0,
                        finishedText: ((a = o.list.value) == null ? void 0 : a.length) >= 10 ? u("lobby.reward.base.onlyShow10LimitTip") : "",
                        class: {
                            [g.recordMain]: !0,
                            [g.showLast]: ((c = o.list.value) == null ? void 0 : c.length) >= 10
                        }
                    }, {
                        default: () => {
                            var d, _;
                            return [(_ = (d = o.list.value) == null ? void 0 : d.slice(0, 10)) == null ? void 0 : _.map(i => e(ee, {
                                listItem: i,
                                key: i.id,
                                class: g.recordItem
                            }, {
                                namePrefix: () => e(f, y.value, null)
                            }))]
                        }
                    })]
                }
            })])
        }
    }),
    ve = "_congrats_1h1tq_44",
    be = "_currency_1h1tq_64",
    ge = "_activity_1h1tq_80",
    pe = "_canreceiveAnimationShape1_1h1tq_1",
    he = "_canreceiveAnimationShape2_1h1tq_1",
    ye = "_common_bganimation_1h1tq_1",
    n = {
        "receive-success-box": "_receive-success-box_1h1tq_25",
        "receive-success-info": "_receive-success-info_1h1tq_34",
        "success-info-item": "_success-info-item_1h1tq_39",
        congrats: ve,
        "currency-activity": "_currency-activity_1h1tq_64",
        currency: be,
        activity: ge,
        "canreceive-card-logtime": "_canreceive-card-logtime_1h1tq_84",
        "canreceive-card-typename": "_canreceive-card-typename_1h1tq_85",
        "canreceive-card-value": "_canreceive-card-value_1h1tq_103",
        "redpack-mode": "_redpack-mode_1h1tq_121",
        "finally-images": "_finally-images_1h1tq_121",
        canreceiveAnimationShape1: pe,
        "hongbao-img-hbbggy": "_hongbao-img-hbbggy_1h1tq_124",
        "hongbao-img-hbddk": "_hongbao-img-hbddk_1h1tq_130",
        "hongbao-reward-apng": "_hongbao-reward-apng_1h1tq_135",
        "hongbao-reward-coin": "_hongbao-reward-coin_1h1tq_140",
        "hongbao-reward-n": "_hongbao-reward-n_1h1tq_146",
        "treasure-mode": "_treasure-mode_1h1tq_152",
        canreceiveAnimationShape2: he,
        "treasure-reward-box": "_treasure-reward-box_1h1tq_158",
        "treasure-reward-apng-box": "_treasure-reward-apng-box_1h1tq_163",
        common_bganimation: ye
    },
    [we] = T("pages-can-receive-record-info"),
    Qe = R({
        name: we,
        props: {
            canReceiveStyle: {
                type: Number,
                default: m.Normal
            },
            targetItem: {
                type: Object,
                default: null
            }
        },
        emits: ["animatedEnd", "imageShowEnd"],
        setup(t, {
            emit: u
        }) {
            const {
                t: o
            } = I(), r = q(!1), l = q([]), b = p(() => {
                var a;
                return t.canReceiveStyle === m.RedPocket ? [{
                    class: n["hongbao-img-hbbggy"],
                    src: "/lobby_asset/common/common/event/hongbao_img_hbbggy_s.png",
                    isBg: !0
                }, {
                    class: n["hongbao-img-hbddk"],
                    src: "/lobby_asset/common/common/event/hongbao_img_hbddk_s.png"
                }, {
                    class: n["hongbao-reward-apng"],
                    isApng: !0,
                    src: "/lobby_asset/common/web/animated/apng_reward_hb_1_alpha.png"
                }, {
                    class: n["hongbao-reward-coin"],
                    isApng: !0,
                    src: "/lobby_asset/common/web/animated/apng_reward_hb_coin_alpha.png"
                }, {
                    class: n["hongbao-reward-n"],
                    isApng: !0,
                    src: "/lobby_asset/common/web/animated/apng_reward_hb_N_alpha.png",
                    hidden: !((a = t.targetItem) != null && a.activity)
                }].filter(c => c.hidden !== !0) : [{
                    class: n["treasure-reward-box"],
                    isApng: !0,
                    src: "/lobby_asset/common/web/animated/apng_reward_bx_2_alpha.png",
                    isBg: !0
                }, {
                    class: n["treasure-reward-apng-box"],
                    isApng: !0,
                    src: "/lobby_asset/common/web/animated/apng_reward_bx_1_alpha.png"
                }]
            });
            j(() => {
                setTimeout(() => {
                    !b.value.every(a => l.value.includes(a.class)) && !r.value && u("animatedEnd")
                }, 10 * 1e3)
            });
            const h = p(() => {
                    var a, c;
                    return (c = W[((a = k().userInfos) == null ? void 0 : a.currency) || "CNY"]) == null ? void 0 : c.PAY_JB
                }),
                y = (a, c) => {
                    l.value.includes(a) || (c && u("imageShowEnd"), l.value.push(a), b.value.every(d => l.value.includes(d.class)) && setTimeout(() => {
                        r.value = !0, setTimeout(() => {
                            u("animatedEnd")
                        }, .5 * 1e3)
                    }, 1.5 * 1e3))
                };
            return () => {
                var a, c, d, _, i;
                return e("div", {
                    class: {
                        [n["receive-success-box"]]: !0,
                        [n["redpack-mode"]]: t.canReceiveStyle === m.RedPocket,
                        [n["treasure-mode"]]: t.canReceiveStyle === m.Treasure
                    }
                }, [e("div", {
                    class: {
                        [n["receive-success-info"]]: !0,
                        [n["finally-images"]]: r.value
                    }
                }, [(a = b.value) == null ? void 0 : a.map(s => s.isApng ? L(e(f, {
                    class: [n["success-info-item"], s.class],
                    "data-src": s.src,
                    src: s.src,
                    isApng: !0,
                    onLoad: () => {
                        y(s.class, s.isBg)
                    },
                    canvasMode: {
                        numPlays: 1
                    }
                }, null), [
                    [D, !s.hidden]
                ]) : L(e(f, {
                    class: [n["success-info-item"], s.class],
                    "data-src": s.src,
                    src: s.src,
                    onLoad: () => {
                        y(s.class, s.isBg)
                    }
                }, null), [
                    [D, !s.hidden]
                ])), e("div", {
                    class: [n["success-info-item"], n.congrats]
                }, [e(C, {
                    html: o("lobby.event.collectWords.congrats")
                }, null)]), e("div", {
                    class: [n["success-info-item"], n["currency-activity"]]
                }, [e("div", {
                    class: n.currency
                }, [e(f, {
                    class: [n["icon-text"]],
                    src: h.value
                }, null), e("span", {
                    class: n["canreceive-info-value"]
                }, [G((c = t.targetItem) == null ? void 0 : c.reward)])]), !!((d = t.targetItem) != null && d.activity) && e("div", {
                    class: n.activity
                }, [e(f, {
                    src: "/lobby_asset/common/web/common/comm_icon_shy.svg"
                }, null), e("span", {
                    class: n["canreceive-info-value"]
                }, [(_ = t.targetItem) == null ? void 0 : _.activity])])]), e("div", {
                    class: n["canreceive-card-logtime"]
                }, [$((i = t.targetItem) == null ? void 0 : i.logCreateTime, "ymd")]), e("div", {
                    class: n["canreceive-card-typename"]
                }, [e("span", {
                    class: n["canreceive-card-key"]
                }, [o("lobby.records.activeTypeName")]), e("span", {
                    class: n["canreceive-card-value"]
                }, [e(se, {
                    rewardData: t.targetItem
                }, null)])])])])
            }
        }
    }),
    fe = 3,
    xe = "_collect_u2fu3_25",
    ke = "_shake_u2fu3_110",
    Se = "_rewardTimeTips_u2fu3_113",
    Ie = "_animated_u2fu3_120",
    Re = "_common_bganimation_u2fu3_1",
    w = {
        "receive-btn-box": "_receive-btn-box_u2fu3_25",
        collect: xe,
        "receive-btn": "_receive-btn_u2fu3_25",
        "reset-countdown": "_reset-countdown_u2fu3_55",
        "treasure-mode": "_treasure-mode_u2fu3_72",
        shake: ke,
        rewardTimeTips: Se,
        animated: Ie,
        common_bganimation: Re
    },
    [Te] = T("pages-can-receive-open-btn"),
    Ce = R({
        name: Te,
        props: {
            receiveItem: {
                type: Object,
                default: null
            },
            imageSrc: {
                type: String,
                default: ""
            },
            canReceiveStyle: {
                type: Number,
                default: m.Normal
            }
        },
        setup(t) {
            const {
                t: u
            } = I(), o = k(), r = re(), l = A("refreshData"), b = A("receiveSuccess"), h = B(), y = p(() => {
                var i, s, x;
                return (s = h.receivedList) != null && s.includes((i = t.receiveItem) == null ? void 0 : i.id) ? !1 : ((x = t.receiveItem) == null ? void 0 : x.receiveDuration) < 0
            }), a = p(() => {
                var i, s, x;
                return (s = h.receivedList) != null && s.includes((i = t.receiveItem) == null ? void 0 : i.id) ? !1 : ((x = t.receiveItem) == null ? void 0 : x.receiveDuration) > 0
            }), c = i => {
                if (i) return b == null ? void 0 : b(t.receiveItem);
                l == null || l()
            }, d = i => {
                i.stopPropagation(), r.handleReceive(t.receiveItem, c)
            }, _ = () => {
                l == null || l()
            };
            return () => {
                if (!o.hasLogined) return e("div", null, null);
                const {
                    id: i,
                    receiveDuration: s
                } = t.receiveItem;
                return e("div", {
                    class: {
                        [w["receive-btn-box"]]: !0,
                        "receive-btn-box": !0,
                        [w.shake]: r.shakeId.value === i,
                        [w["redpack-mode"]]: t.canReceiveStyle === m.RedPocket,
                        [w["treasure-mode"]]: t.canReceiveStyle === m.Treasure,
                        "treasure-mode": t.canReceiveStyle === m.Treasure
                    }
                }, [e("div", {
                    class: w.collect,
                    onClick: d
                }, [e(f, {
                    onClick: d,
                    tag: "div",
                    src: t.imageSrc,
                    class: [w["receive-btn"], "receive-btn"]
                }, {
                    default: () => [e(C, {
                        html: u("lobby.event.redPocket.open")
                    }, null)]
                }), y.value && e(P, {
                    class: w["reset-countdown"],
                    textFormatType: M.Expired1,
                    duration: s,
                    onComplete: _
                }, null), a.value && e(P, {
                    class: w["reset-countdown"],
                    textFormatType: M.CanReceive,
                    duration: s,
                    onComplete: _
                }, null)])])
            }
        }
    }),
    Ne = "_countText_1k64e_40",
    Ee = "_countSpan_1k64e_40",
    qe = "_congrats_1k64e_56",
    Le = "_currency_1k64e_67",
    De = "_activity_1k64e_76",
    Ae = "_common_bganimation_1k64e_1",
    v = {
        "swiper-slide-item": "_swiper-slide-item_1k64e_25",
        "redpack-mode": "_redpack-mode_1k64e_28",
        "swiper-slide-bg": "_swiper-slide-bg_1k64e_32",
        "time-down-top-box": "_time-down-top-box_1k64e_37",
        countText: Ne,
        countSpan: Ee,
        "receive-countdown-time": "_receive-countdown-time_1k64e_49",
        "expired-countdown": "_expired-countdown_1k64e_50",
        "swiper-slide-success-info": "_swiper-slide-success-info_1k64e_53",
        congrats: qe,
        "currency-activity": "_currency-activity_1k64e_67",
        currency: Le,
        activity: De,
        "swiper-slide-receive-bg": "_swiper-slide-receive-bg_1k64e_88",
        "swiper-slide-title": "_swiper-slide-title_1k64e_95",
        "swiper-slide-receive-box": "_swiper-slide-receive-box_1k64e_116",
        "swiper-slide-btn": "_swiper-slide-btn_1k64e_125",
        "swiper-slide-logtime": "_swiper-slide-logtime_1k64e_155",
        "swiper-slide-typename": "_swiper-slide-typename_1k64e_156",
        "swiper-slide-value": "_swiper-slide-value_1k64e_175",
        "swiper-slide-not-click": "_swiper-slide-not-click_1k64e_192",
        "source-text": "_source-text_1k64e_179",
        "treasure-mode": "_treasure-mode_1k64e_214",
        "modal-content-box": "_modal-content-box_1k64e_255",
        common_bganimation: Ae
    },
    [Pe] = H("pages-home-discount-can-receive-modes-swiper-slide-item"),
    Ze = R({
        name: Pe,
        props: {
            slideItem: {
                type: Object,
                default: null
            },
            canReceiveStyle: {
                type: Number,
                default: m.Normal
            },
            totolLength: {
                type: Number,
                default: 0
            },
            idx: {
                type: Number,
                default: 0
            },
            swiperNowIdx: {
                type: Number,
                default: 0
            }
        },
        setup(t) {
            const {
                t: u
            } = I(), o = B(), r = p(() => {
                var c, d, _;
                return (d = o.receivedList) != null && d.includes((c = t.slideItem) == null ? void 0 : c.id) ? !1 : ((_ = t.slideItem) == null ? void 0 : _.receiveDuration) <= 0
            }), l = p(() => t.canReceiveStyle === m.Treasure ? r.value ? "/lobby_asset/common/common/event/baoxiang_img_bxbj2_s.png" : "/lobby_asset/common/common/event/baoxiang_img_bxzh_s.png" : r.value ? "/lobby_asset/common/common/event/hongbao_img_hbbj2_s.png" : "/lobby_asset/common/common/event/hongbao_img_hbzh_s.png"), b = p(() => t.canReceiveStyle === m.Treasure ? "" : r.value ? "/lobby_asset/common/common/event/hongbao_img_btn_kai_s.png" : "/lobby_asset/common/common/event/hongbao_img_btn_kaizh_s.png"), h = p(() => Math.abs(t.idx - t.swiperNowIdx) < fe), y = () => {
                K.showDialog({
                    title: u("lobby.reward.base.templateTitle"),
                    className: v["modal-content-box"],
                    message: () => e(oe, {
                        rewardData: t.slideItem,
                        isRecords: !1,
                        hiddenStatus: !0
                    }, null),
                    showConfirmButton: !1,
                    showCloseButton: !0
                })
            }, a = async () => {
                const {
                    activeType: c,
                    template: d,
                    activeId: _,
                    ruleId: i
                } = t.slideItem;
                await J(c, d, _, Number(i)) ? X(t.slideItem) : y()
            };
            return () => e("div", {
                class: {
                    [v["swiper-slide-item"]]: !0,
                    [v["redpack-mode"]]: t.canReceiveStyle === m.RedPocket,
                    [v["treasure-mode"]]: t.canReceiveStyle === m.Treasure,
                    "swiper-slide-item": !0
                }
            }, [e(f, {
                class: [v["swiper-slide-bg"], r.value ? "" : v["swiper-slide-not-click"]],
                src: l.value,
                tag: "div",
                lazy: !1
            }, {
                default: () => {
                    var c, d;
                    return [h.value && e(ne, null, [e("div", {
                        class: v["swiper-slide-title"]
                    }, [e(C, {
                        html: (c = t.slideItem) == null ? void 0 : c.activeName
                    }, null)]), e(Ce, {
                        canReceiveStyle: t.canReceiveStyle,
                        receiveItem: t.slideItem,
                        imageSrc: b.value
                    }, null), e("div", {
                        class: v["swiper-slide-logtime"]
                    }, [$(t.slideItem.logCreateTime, "ymd")]), e("div", {
                        class: v["swiper-slide-typename"],
                        onClick: a
                    }, [e("span", {
                        class: v["swiper-slide-key"]
                    }, [u("lobby.records.activeTypeName"), ce(":")]), e("span", {
                        class: v["swiper-slide-value"]
                    }, [e("span", {
                        class: [v["source-text"], "source-text"]
                    }, [(d = t.slideItem) == null ? void 0 : d.activeTypeText])])])])]
                }
            })])
        }
    });
export {
    Xe as M, Ke as R, Ze as S, Qe as a, Je as u
};
//# sourceMappingURL=SlideItemIndex.B3lw-Stf.js.map