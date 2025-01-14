import {
    a as A,
    cd as N,
    a0 as M,
    cB as T,
    a6 as Y,
    I as q,
    q as D,
    cU as b,
    ap as F,
    c_ as v,
    cJ as z,
    bA as V,
    b1 as $,
    c$ as Q,
    d0 as X,
    $ as Z
} from "./main.async.-NbSL2aO.js";
import {
    k as P,
    bd as G,
    c as p,
    a5 as o,
    r as w,
    w as ee,
    o as te,
    n as ne
} from "../vendors/vendor-@vue.CBvhRkQp.js";
import {
    a as E,
    t as U,
    E as oe
} from "./const.kNgtypBJ.js";
const se = "_common_bganimation_1fv4o_1",
    g = {
        "description-tips-popover": "_description-tips-popover_1fv4o_25",
        "tip-box": "_tip-box_1fv4o_37",
        "description-tips": "_description-tips_1fv4o_25",
        "icon-box": "_icon-box_1fv4o_42",
        common_bganimation: se
    },
    [ie] = D("pages-task-desc-tips"),
    ge = P({
        name: ie,
        props: {
            minAmount: {
                type: Number,
                default: 0
            },
            maxAmount: {
                type: Number,
                default: 0
            }
        },
        setup(n) {
            const {
                t: s
            } = A(), {
                minAmount: t,
                maxAmount: e
            } = G(n), i = p(() => !t.value || !e.value ? "" : t.value - e.value !== 0 ? "".concat(N(t.value), "-").concat(N(e.value)) : String(N(e.value)));
            return () => o("div", {
                class: g["description-tips"]
            }, [o("span", null, [s("lobby.modal.task.finishTreeDay")]), o(M, {
                overlayClass: g["description-tips-popover"],
                placement: "top",
                destroyOnClose: !0,
                show: T().isPoverShow,
                onClosed: () => T().isPoverShow = !1,
                trigger: "manual"
            }, {
                default: () => [o(Y, {
                    class: g["tip-box"],
                    html: s("lobby.modal.task.threeDaysTips", {
                        x: i.value
                    })
                }, null)],
                reference: () => o("span", {
                    class: g["icon-box"],
                    onClick: () => T().isPoverShow = !0
                }, [o(q, {
                    src: "/lobby_asset/common/web/profile/icon_grzx_gywm.svg"
                }, null), o("span", {
                    class: g["icon-click-area"]
                }, null)])
            })])
        }
    }),
    ae = (n, s) => {
        let t = s,
            e = n;
        return e === b.taskWeekly && (e = 2, t === 3 && (t = 2)), typeof s > "u" || e === 4 ? "" : e + "_" + t
    },
    le = (n, s) => {
        var m, c;
        if (n !== b.newBenefits) return;
        const t = F(),
            e = ae(n, s);
        let i;
        const l = "icon_".concat(e, "_").concat((c = (m = t.userInfos) == null ? void 0 : m.currency) == null ? void 0 : c.toLowerCase());
        return l in E ? i = E[l] : i = E["icon_" + e], i
    },
    j = n => {
        const s = [b.taskDaily, b.taskWeekly, b.taskMystery],
            t = T().curCategory;
        let e = "";
        return t != null && t.template && s.includes(t == null ? void 0 : t.template) ? e = "task_czdm_" + n.icon : e = "task_" + (t == null ? void 0 : t.template) + "_" + n.icon, e
    },
    we = n => !(j(n) === U.saveUrl && n.status === z.Goto),
    ke = n => {
        var s, t, e, i, l, m, c;
        if (j(n) === U.downloadAndLogin && n.status === z.Goto) {
            let r = [];
            try {
                const a = JSON.parse(n.cfg);
                !(a != null && a.bindTypes) || ((s = a == null ? void 0 : a.bindTypes) == null ? void 0 : s.length) === 0 ? r = [1, 2, 3, 4] : r = (a == null ? void 0 : a.bindTypes) || []
            } catch (a) {}
            const d = V();
            return ((e = (t = $) == null ? void 0 : t.package) == null ? void 0 : e.isVest) && r.includes(1) || ((l = (i = $) == null ? void 0 : i.package) == null ? void 0 : l.isLite) && r.includes(2) || d.isP2a && d.isAndroid && r.includes(3) || ((c = (m = $) == null ? void 0 : m.package) == null ? void 0 : c.isWebClip) && r.includes(4)
        }
        return !0
    },
    I = w(null),
    y = w(null),
    ce = (n, s, t) => {
        const {
            t: e
        } = A();
        I.value || (I.value = {
            [v.Nothing]: () => e("lobby.common.tips.title"),
            [v.Recharge]: () => e("lobby.modal.task.onlyRecharge"),
            [v.BettingTotal]: () => e("lobby.modal.task.onlyGame"),
            [v.ProfitTotal]: () => e("lobby.modal.task.onlyGame"),
            [v.ProfitOne]: () => e("lobby.modal.task.onlyGame"),
            [v.LossOne]: () => e("lobby.modal.task.onlyGame"),
            [v.LossTotal]: () => e("lobby.modal.task.onlyGame"),
            [v.BettingOne]: () => e("lobby.modal.task.onlyGame")
        }), y.value || (y.value = {
            ["".concat(b.newBenefits, "_27")]: () => e("lobby.modal.task.contact")
        });
        const i = "".concat(n, "_").concat(t);
        return y != null && y[i] ? y == null ? void 0 : y[i] : I.value[s] ? I.value[s] : () => e("lobby.common.tips.title")
    },
    Se = n => {
        if (!n || !(n != null && n.length)) return !1;
        const {
            PendingReceive: s,
            Finish: t,
            Expired: e,
            HasSend: i,
            PendingApprove: l,
            ServerCancel: m,
            ServerReject: c
        } = z, r = [s, t, e, i, l, m, c];
        return n.slice(0, 3).reduce((a, h) => (r.includes(h.status) || (a = !1), a), !0)
    },
    re = "_yellow_hn6zy_48",
    ue = "_green_hn6zy_51",
    me = "_finished_hn6zy_54",
    de = "_common_bganimation_hn6zy_1",
    f = {
        "one-item": "_one-item_hn6zy_25",
        "one-item-box": "_one-item-box_hn6zy_29",
        "prefix-text": "_prefix-text_hn6zy_33",
        "icon-text": "_icon-text_hn6zy_36",
        "suffix-num": "_suffix-num_hn6zy_42",
        yellow: re,
        green: ue,
        finished: me,
        common_bganimation: de
    },
    [ve] = D("pages-task-one-item"),
    W = P({
        name: ve,
        props: {
            type: {
                type: String,
                default: "amount"
            },
            isActive: {
                type: Boolean,
                default: !1
            },
            isShowName: {
                type: Boolean,
                default: !0
            },
            isShowIcon: {
                type: Boolean,
                default: !0
            },
            text: {
                type: [Number, String],
                default: ""
            },
            btnKey: {
                type: Number,
                default: 0
            }
        },
        setup(n) {
            const s = F(),
                {
                    type: t,
                    isActive: e,
                    isShowName: i,
                    isShowIcon: l,
                    text: m
                } = G(n),
                {
                    t: c
                } = A(),
                r = p(() => e.value ? "textLighten" : t.value === "amount" ? "yellow" : "green"),
                d = p(() => {
                    var k, x;
                    return (x = Q[((k = s.userInfos) == null ? void 0 : k.currency) || "CNY"]) == null ? void 0 : x.PAY_JB
                }),
                a = p(() => t.value === "amount" ? d.value : "/lobby_asset/common/web/common/comm_icon_shy.svg"),
                h = p(() => t.value === "amount" ? c("lobby.modal.task.amount") : c("lobby.modal.task.activity"));
            return () => o("div", {
                class: {
                    [f["one-item"]]: !0
                }
            }, [o("div", {
                class: {
                    [f["one-item-box"]]: !0,
                    [f[r.value]]: !0,
                    [f.finished]: n.btnKey === oe.Finish
                }
            }, [i.value && o("span", {
                class: f["prefix-text"]
            }, [h.value]), l.value && o(q, {
                class: [f["icon-text"]],
                src: a.value
            }, null), o("span", {
                class: f["suffix-num"]
            }, [m.value])])])
        }
    }),
    ye = "_description_1vi7q_44",
    pe = "_text_1vi7q_57",
    _e = "_common_bganimation_1vi7q_1",
    u = {
        "instruction-info": "_instruction-info_1vi7q_25",
        "instruction-icon": "_instruction-icon_1vi7q_30",
        "instruction-base-info": "_instruction-base-info_1vi7q_39",
        description: ye,
        "description-primary": "_description-primary_1vi7q_44",
        "more-limit": "_more-limit_1vi7q_50",
        text: pe,
        "text-inner": "_text-inner_1vi7q_60",
        "btn-more": "_btn-more_1vi7q_65",
        "is-hide-btn-more": "_is-hide-btn-more_1vi7q_71",
        "bottom-slot": "_bottom-slot_1vi7q_75",
        "is-shallow-text": "_is-shallow-text_1vi7q_84",
        common_bganimation: _e
    },
    [fe] = D("pages-task-rule-info"),
    Ie = P({
        name: fe,
        props: {
            template: {
                type: Number,
                default: b.newBenefits
            },
            ruleId: {
                type: Number,
                default: 0
            },
            ruleIcon: {
                type: Number,
                default: 0
            },
            isShallowText: {
                type: Boolean,
                default: !1
            },
            isHideBottom: {
                type: Boolean,
                default: !1
            },
            isActive: {
                type: Boolean,
                default: !1
            },
            amount: {
                type: Number,
                default: 0
            },
            activity: {
                type: Number,
                default: 0
            },
            nameExt: {
                type: String,
                default: ""
            },
            btnKey: {
                type: Number,
                default: 0
            }
        },
        setup(n, {
            slots: s
        }) {
            const {
                t
            } = A(), e = w(null), i = w(null), l = w(!1), {
                width: m,
                height: c
            } = X(), {
                ruleId: r,
                ruleIcon: d,
                template: a,
                isShallowText: h,
                isHideBottom: k,
                isActive: x,
                nameExt: B,
                amount: K,
                activity: O
            } = G(n);
            ee([m, c], () => {
                H()
            }), te(() => {
                ne(() => {
                    H()
                })
            });
            const H = () => {
                    if (!e.value || !i.value) return;
                    const _ = e.value.clientWidth + 3 < i.value.scrollWidth,
                        S = e.value.clientHeight + 5 < i.value.scrollHeight;
                    _ || S ? l.value = !0 : l.value = !1
                },
                R = p(() => le(a.value, d.value)),
                C = p(() => ce(a.value, d.value, r.value)),
                J = p(() => "".concat(t("lobby.modal.task.only")).concat(B.value)),
                L = () => {
                    var _, S;
                    Z.showDialog({
                        title: (S = (_ = C.value) == null ? void 0 : _.call(C)) != null ? S : t("lobby.common.tips.title"),
                        type: "info",
                        message: B.value,
                        closeOnClickOverlay: !1,
                        showCloseButton: !0,
                        showConfirmButton: !1
                    })
                };
            return () => {
                var _;
                return o("div", {
                    class: {
                        [u["instruction-info"]]: !0,
                        [u["is-shallow-text"]]: h.value
                    }
                }, [o("div", {
                    class: {
                        [u["instruction-base-info"]]: !0
                    }
                }, [R.value && o(q, {
                    class: u["instruction-icon"],
                    src: R.value
                }, null), o("div", {
                    class: u.description
                }, [o("div", {
                    class: u["description-primary"]
                }, [(_ = s.desc) == null ? void 0 : _.call(s)]), B.value && o("div", {
                    class: u["more-limit"]
                }, [o("p", {
                    ref: e,
                    class: u.text
                }, [o("span", {
                    ref: i,
                    class: u["text-inner"]
                }, [J.value])]), o("p", {
                    class: {
                        [u["btn-more"]]: !0,
                        [u["is-hide-btn-more"]]: !l.value
                    },
                    onClick: L
                }, [t("lobby.system.more")])])])]), !k.value && o("div", {
                    class: u["bottom-slot"]
                }, [K.value > 0 && o(W, {
                    type: "amount",
                    isShowIcon: !1,
                    isActive: x.value,
                    text: N(K.value),
                    btnKey: n.btnKey
                }, null), O.value > 0 && o(W, {
                    type: "active",
                    isActive: x.value,
                    text: O.value,
                    btnKey: n.btnKey
                }, null)])])
            }
        }
    });
export {
    ge as D, Ie as R, ke as a, j as g, Se as j, we as s
};
//# sourceMappingURL=RuleInfoIndex.wDtUI-O_.js.map