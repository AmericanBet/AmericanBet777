import {
    aq as _,
    ap as p,
    a as d,
    c$ as v,
    I as o,
    cd as y,
    cx as h,
    q as x
} from "./main.async.-NbSL2aO.js";
import {
    E as r
} from "./records.Bhm8aRMj.js";
import {
    g as S
} from "./ModalContentIndex.LdmGwKc5.js";
import {
    S as E
} from "./SourceTextIndex.CVAEoUbG.js";
import {
    k as f,
    bd as z,
    c as b,
    a5 as t
} from "../vendors/vendor-@vue.CBvhRkQp.js";
const I = "/active/receivedAwardList",
    V = async i => {
        var c;
        const a = await _.request({
            url: I,
            method: "POST",
            timeout: 3e4,
            data: { ...i
            }
        }, {
            cache: {
                useCache: !1
            },
            token: {
                type: "loginOnly"
            },
            oss: {
                enable: !1
            }
        });
        return (c = a == null ? void 0 : a.data) == null ? void 0 : c.data
    },
    g = "_listItem_1huzt_25",
    C = "_itemContent_1huzt_46",
    T = "_name_1huzt_52",
    A = "_amountWrapper_1huzt_64",
    w = "_currency_1huzt_68",
    P = "_currencyExpiredStatus_1huzt_77",
    R = "_h5ActivityCol_1huzt_80",
    D = "_h5ActivityExpiredStatus_1huzt_89",
    N = "_time_1huzt_92",
    L = "_source_1huzt_97",
    O = "_rewardTimeTips_1huzt_111",
    W = "_receiveStatus_1huzt_119",
    k = "_statusProgress_1huzt_124",
    q = "_statusDistributed_1huzt_127",
    U = "_statusExpired_1huzt_130",
    Y = "_common_bganimation_1huzt_1",
    e = {
        listItem: g,
        itemContent: C,
        name: T,
        amountWrapper: A,
        currency: w,
        currencyExpiredStatus: P,
        h5ActivityCol: R,
        h5ActivityExpiredStatus: D,
        time: N,
        source: L,
        "active-type-name": "_active-type-name_1huzt_107",
        rewardTimeTips: O,
        receiveStatus: W,
        statusProgress: k,
        statusDistributed: q,
        statusExpired: U,
        common_bganimation: Y
    },
    [B] = x("pages-records-list-item"),
    G = f({
        name: B,
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
        setup(i, {
            slots: a
        }) {
            const c = p(),
                {
                    t: m
                } = d(),
                {
                    listItem: s
                } = z(i),
                l = b(() => {
                    var u, n;
                    return (n = v[((u = c.userInfos) == null ? void 0 : u.currency) || "CNY"]) == null ? void 0 : n.PAY_JB
                });
            return () => {
                var u;
                return t("div", {
                    class: e.listItem
                }, [t("div", {
                    class: e.itemContent
                }, [t("div", {
                    class: e.name
                }, [(u = a == null ? void 0 : a.namePrefix) == null ? void 0 : u.call(a), t("span", null, [s.value.activeName])]), t("div", {
                    class: e.amountWrapper
                }, [s.value.reward ? t("span", {
                    class: {
                        [e.currency]: !0,
                        [e.currencyExpiredStatus]: s.value.status === r.Expired
                    }
                }, [t(o, {
                    src: l.value
                }, null), t("span", null, [y(s.value.reward)])]) : null, s.value.activity ? t("span", {
                    class: {
                        [e.h5ActivityCol]: !0,
                        [e.h5ActivityExpiredStatus]: s.value.status === r.Expired
                    }
                }, [t(o, {
                    src: "/lobby_asset/common/web/common/comm_icon_shy.svg"
                }, null), t("span", null, [s.value.activity])]) : null, t("span", {
                    class: e.time
                }, [h(s.value.receiveTime, "ymd")]), t("span", {
                    class: e.source
                }, [t("span", {
                    class: e["active-type-name"]
                }, [m("lobby.records.activeTypeName"), ":"]), t(E, {
                    rewardData: s.value,
                    isRecords: !0
                }, null)])])]), t("span", {
                    class: {
                        [e.receiveStatus]: !0,
                        [e.statusProgress]: s.value.status === r.Progress,
                        [e.statusDistributed]: s.value.status === r.Distributed || s.value.status === r.Received,
                        [e.statusExpired]: s.value.status === r.Expired
                    }
                }, [S(s.value.status)])])
            }
        }
    });
export {
    G as L, V as a
};
//# sourceMappingURL=ListItemIndex.BHnFGxZ1.js.map