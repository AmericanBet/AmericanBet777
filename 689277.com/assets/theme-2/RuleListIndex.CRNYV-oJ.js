import {
    a as R,
    cd as r,
    ia as y,
    x as L
} from "./main.async.-NbSL2aO.js";
import {
    T as f
} from "./index.D8AEoeVh.js";
import {
    k as x,
    c as p,
    a5 as s,
    a4 as w
} from "../vendors/vendor-@vue.CBvhRkQp.js";
const v = "_tableList_dmw6c_25",
    k = "_ratio_dmw6c_32",
    h = "_max_dmw6c_35",
    S = "_common_bganimation_dmw6c_1",
    i = {
        tableList: v,
        ratio: k,
        max: h,
        "rule-amount": "_rule-amount_dmw6c_67",
        common_bganimation: S
    },
    [E] = L("event-item-modes-listed-rewards-components-rule-list"),
    A = x({
        name: E,
        props: {
            ruleListFirstTitle: {
                type: String,
                default: ""
            },
            tableList: {
                type: Array,
                default: () => []
            }
        },
        setup(t) {
            const {
                t: n
            } = R(), g = p(() => {
                var m, u;
                const o = (m = t.tableList) != null ? m : [],
                    l = o.length && ((u = o[0]) == null ? void 0 : u.signType),
                    T = {
                        signType0: [{
                            title: () => n("lobby.event.listedRewards.ruleTabe.awardAmount"),
                            key: "reward",
                            customRender: e => s("span", {
                                class: "reward-finance"
                            }, [e ? r(e) : 0])
                        }],
                        signType1: [{
                            title: () => n("lobby.event.listedRewards.ruleTabe.rewardRatio"),
                            dataIndex: "ratio",
                            key: "ratio",
                            customRender: e => s("span", {
                                class: i.ratio
                            }, [e, w("%")])
                        }, {
                            title: () => n("lobby.event.listedRewards.ruleTabe.awarMaxLimit"),
                            key: "limitReward",
                            customRender: e => s("span", {
                                class: i.max
                            }, [r(e || 0, 0) || n("lobby.event.discountCode.notProfitLimit")])
                        }],
                        signType2: [{
                            title: () => n("lobby.event.listedRewards.ruleTabe.awardAmount"),
                            key: "reward",
                            customRender: e => {
                                const d = String(e),
                                    b = /[-,]/.exec(d);
                                let a;
                                return b ? a = d.split(b[0]) : a = [], s("span", {
                                    class: "reward-finance"
                                }, [a != null && a.length ? "".concat(r(a[0]), "-").concat(r(a[1])) : 0])
                            }
                        }]
                    },
                    _ = [{
                        title: (t == null ? void 0 : t.ruleListFirstTitle) || (() => n("lobby.event.listedRewards.firstRecharge")),
                        key: "amount",
                        customRender: e => s("span", {
                            class: i["rule-amount"]
                        }, [w("≥"), r(e, 0)])
                    }];
                let c = 0;
                return (y.Interregional === l || y.Proportion === l) && (c = l), [..._, ...T["signType".concat(c)]]
            });
            return () => s(f, {
                class: i.tableList,
                columns: g.value,
                data: (t == null ? void 0 : t.tableList) || [],
                uniqueKey: "ruleListTable"
            }, null)
        }
    });
export {
    A as R
};
//# sourceMappingURL=RuleListIndex.CRNYV-oJ.js.map