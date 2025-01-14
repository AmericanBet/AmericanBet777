import {
    dv as a,
    dw as W,
    cK as X,
    df as Y,
    a as x,
    cx as v,
    cd as U,
    I as Z,
    a6 as $,
    q as w
} from "./main.async.-NbSL2aO.js";
import {
    E as n
} from "./records.Bhm8aRMj.js";
import {
    d as D
} from "./index.C77qB8kj.js";
import {
    r as ee
} from "./index.DSLviaDb.js";
import {
    k as se,
    bd as le,
    c as te,
    a5 as s
} from "../vendors/vendor-@vue.CBvhRkQp.js";
var d = (t => (t.Template40 = "13001", t.Template20 = "13002", t.Template30 = "13003", t.Template10 = "13004", t))(d || {}),
    r = (t => (t[t.Pending = 0] = "Pending", t[t.Received = 1] = "Received", t[t.Dispatched = 2] = "Dispatched", t[t.ExpiredDispatched = 4] = "ExpiredDispatched", t))(r || {});
const ce = t => {
        const {
            t: c
        } = x();
        return new Map([
            [r.Pending, c("lobby.event.listedRewards.pending")],
            [r.Received, c("lobby.event.listedRewards.received")],
            [r.Dispatched, c("lobby.event.listedRewards.dispatched")],
            [r.ExpiredDispatched, c("lobby.event.listedRewards.expiredDispatched")]
        ]).get(t)
    },
    ne = t => {
        const {
            t: c
        } = x();
        return new Map([
            [n.Received, c("lobby.modal.task.collected")],
            [n.Distributed, c("lobby.modal.task.distributed")],
            [n.Expired, c("lobby.modal.task.expired")],
            [n.Cancelled, c("lobby.records.cancelled")],
            [n.Rejected, c("lobby.records.rejected")],
            [n.Progress, c("lobby.records.progress")]
        ]).get(t)
    },
    _e = new Map([
        [a.Events, W],
        [a.Task, X],
        [a.Rebate, D],
        [a.Vip, Y],
        [a.RechargeFund, ee]
    ]),
    Re = new Map([
        [10, d.Template10],
        [20, d.Template20],
        [30, d.Template30],
        [40, d.Template40]
    ]),
    oe = "_yellow_1whlr_25",
    ie = "_green_1whlr_29",
    ae = "_statusExpired_1whlr_33",
    ue = "_text_1whlr_46",
    pe = "_value_1whlr_65",
    me = "_common_bganimation_1whlr_1",
    l = {
        yellow: oe,
        green: ie,
        statusExpired: ae,
        "modal-content": "_modal-content_1whlr_37",
        text: ue,
        value: pe,
        common_bganimation: me
    },
    [ve] = w("pages-components-source-text"),
    ge = se({
        name: ve,
        props: {
            rewardData: {
                type: Object,
                default: null
            },
            isRecords: {
                type: Boolean,
                default: !1
            },
            hiddenStatus: {
                type: Boolean,
                default: !1
            },
            rewardText: {
                type: String,
                default: ""
            }
        },
        setup(t) {
            const {
                t: c
            } = x(), {
                rewardData: e
            } = le(t), _ = te(() => {
                var p, m;
                let i = {},
                    u = [];
                try {
                    i = JSON.parse((p = e == null ? void 0 : e.value) == null ? void 0 : p.receiveRemarkJsonFormat)
                } catch (b) {}
                try {
                    u = JSON.parse((m = e == null ? void 0 : e.value) == null ? void 0 : m.receiveRemark)
                } catch (b) {}
                return {
                    detailsData: (i == null ? void 0 : i.platform_reward_detail) || [],
                    remarkData: u
                }
            });
            return () => {
                var i, u, p, m, b, R, y, g, h, T, f, k, M, I, O, P, N, S, F, j, A, E, J, B, C, V, q, z, G, H, K, L, Q;
                return s("div", {
                    class: l["modal-content"]
                }, [s("p", null, [s("span", {
                    class: l.text
                }, [c("lobby.records.activeId")]), s("span", {
                    class: l.value
                }, [((i = e == null ? void 0 : e.value) == null ? void 0 : i.activeType) === a.Task ? ((u = e == null ? void 0 : e.value) == null ? void 0 : u.ruleId) || "-" : ((p = e == null ? void 0 : e.value) == null ? void 0 : p.activeId) || "-"])]), s("p", null, [s("span", {
                    class: l.text
                }, [c("lobby.records.rewardName")]), s("span", {
                    class: l.value
                }, [((m = e == null ? void 0 : e.value) == null ? void 0 : m.activeName) || "-"])]), s("p", null, [s("span", {
                    class: l.text
                }, [c("lobby.records.rewardTime")]), s("span", {
                    class: l.value
                }, [v((b = e == null ? void 0 : e.value) == null ? void 0 : b.logCreateTime, "ymd")])]), (g = (y = (R = _.value) == null ? void 0 : R.remarkData) == null ? void 0 : y.map) == null ? void 0 : g.call(y, o => s("p", null, [s("span", {
                    class: l.text
                }, [o.key]), s("span", {
                    class: l.value
                }, [o.val])])), ((h = e == null ? void 0 : e.value) == null ? void 0 : h.activeType) === a.Rebate && ((f = (T = _.value) == null ? void 0 : T.detailsData) == null ? void 0 : f.map(o => s("p", {
                    key: o.game_category_id
                }, [s("span", {
                    class: l.text
                }, [o.game_category_platform_name]), s("span", {
                    class: l.value
                }, [c("lobby.records.platformRewardDetail", {
                    betCode: U(o.delta_bet_code),
                    rate: o.rate,
                    gold: o.return_gold
                })])]))), s("p", null, [s("span", {
                    class: l.text
                }, [t.rewardText || c("lobby.reward.base.awardAmount")]), s("span", {
                    class: [l.value, l.yellow]
                }, [U((k = e == null ? void 0 : e.value) == null ? void 0 : k.reward, 2)])]), !!((M = e == null ? void 0 : e.value) != null && M.activity) && s("p", null, [s("span", {
                    class: l.text
                }, [c("lobby.records.activity")]), s("span", {
                    class: [l.value, l.green]
                }, [s(Z, {
                    src: "/lobby_asset/common/web/common/comm_icon_shy.svg"
                }, null), s("span", null, [(I = e == null ? void 0 : e.value) == null ? void 0 : I.activity])])]), !t.isRecords && !t.hiddenStatus ? s("p", null, [s("span", {
                    class: l.text
                }, [c("lobby.records.checkStatus")]), s("span", {
                    class: {
                        [l.value]: !0,
                        [l.yellow]: !0
                    }
                }, [ce((O = e == null ? void 0 : e.value) == null ? void 0 : O.status)])]) : null, t.isRecords && !t.hiddenStatus ? s("p", null, [s("span", {
                    class: l.text
                }, [c("lobby.records.checkStatus")]), s("span", {
                    class: {
                        [l.value]: !0,
                        [l.yellow]: ((P = e == null ? void 0 : e.value) == null ? void 0 : P.status) === n.Progress,
                        [l.green]: ((N = e == null ? void 0 : e.value) == null ? void 0 : N.status) === n.Distributed || ((S = e == null ? void 0 : e.value) == null ? void 0 : S.status) === n.Received,
                        [l.statusExpired]: ((F = e == null ? void 0 : e.value) == null ? void 0 : F.status) === n.Expired
                    }
                }, [ne((j = e == null ? void 0 : e.value) == null ? void 0 : j.status)])]) : null, !t.isRecords && !!((A = e == null ? void 0 : e.value) != null && A.receiveTime) && s("p", null, [s("span", {
                    class: l.text
                }, [c("lobby.records.arrivalTime")]), s("span", {
                    class: l.value
                }, [v((E = e == null ? void 0 : e.value) == null ? void 0 : E.receiveTime, "ymdhms")])]), t.isRecords && ((J = e == null ? void 0 : e.value) == null ? void 0 : J.status) !== n.Progress ? s("p", null, [s("span", {
                    class: l.text
                }, [c("lobby.records.arrivalTime")]), s("span", {
                    class: l.value
                }, [v((B = e == null ? void 0 : e.value) == null ? void 0 : B.receiveTime, "ymdhms")])]) : null, !t.isRecords && !!((C = e == null ? void 0 : e.value) != null && C.canReceiveTime) && !((V = e == null ? void 0 : e.value) != null && V.activity) && s("p", null, [s("span", {
                    class: l.text
                }, [c("lobby.event.listedRewards.availableTime")]), s("span", {
                    class: l.value
                }, [(q = e == null ? void 0 : e.value) != null && q.canReceiveTime ? v((z = e == null ? void 0 : e.value) == null ? void 0 : z.canReceiveTime, "ymdhms") : "-"])]), !!((G = e == null ? void 0 : e.value) != null && G.periodTime) && s("p", null, [s("span", {
                    class: l.text
                }, [c("lobby.event.listedRewards.validityTime")]), s("span", {
                    class: l.value
                }, [(H = e == null ? void 0 : e.value) != null && H.periodTime ? v((K = e == null ? void 0 : e.value) == null ? void 0 : K.periodTime, "ymdhms") : "-"])]), (L = e == null ? void 0 : e.value) != null && L.frontRemark ? s("p", null, [s("span", {
                    class: l.text
                }, [c("lobby.event.listedRewards.remark")]), s($, {
                    class: l.value,
                    html: ((Q = e == null ? void 0 : e.value) == null ? void 0 : Q.frontRemark) || "-"
                }, null)]) : null])
            }
        }
    });
export {
    ge as M, _e as R, Re as V, ne as g
};
//# sourceMappingURL=ModalContentIndex.LdmGwKc5.js.map