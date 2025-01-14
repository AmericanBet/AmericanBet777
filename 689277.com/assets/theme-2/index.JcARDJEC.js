import {
    aq as r
} from "./main.async.-NbSL2aO.js";
import {
    d as x
} from "../vendors/vendor-stable.Cg92BvZJ.js";
import {
    d as L,
    r as c,
    c as g
} from "../vendors/vendor-@vue.CBvhRkQp.js";
const A = () => r.request({
        url: "/promote/config/agentMode",
        method: "GET"
    }, {
        oss: {
            enable: !1
        },
        omitKey: ["platformType", "currency"]
    }).then(t => {
        var a;
        return (a = t == null ? void 0 : t.data) == null ? void 0 : a.data
    }),
    K = () => r.request({
        url: "/promote/config/index",
        method: "GET"
    }, {
        token: {
            type: "staticOnly"
        },
        oss: {
            enable: !0
        },
        omitKey: ["platformType", "currency"]
    }).then(t => {
        var a;
        return (a = t == null ? void 0 : t.data) == null ? void 0 : a.data
    }),
    F = async () => {
        var a;
        const t = await r.request({
            url: "/api/agent/promote/report/agentInfo",
            method: "GET"
        }, {
            token: {
                type: "loginOnly"
            },
            oss: {
                enable: !1
            }
        });
        return (a = t == null ? void 0 : t.data) == null ? void 0 : a.data
    },
    j = async (t = {
        h5_addr: window.location.origin
    }) => {
        var e;
        const a = await r.request({
            url: "/api/agent/promote/report/agentPromotion",
            method: "POST",
            data: t
        }, {
            token: {
                type: "loginOnly"
            },
            oss: {
                enable: !1
            }
        });
        return (e = a == null ? void 0 : a.data) == null ? void 0 : e.data
    },
    Q = async t => {
        var e;
        const a = await r.request({
            url: "/promote/config/tutorial",
            method: "GET",
            params: {
                agentId: t
            }
        }, {
            token: {
                type: "staticOnly"
            },
            oss: {
                enable: !0
            },
            omitKey: ["platformType", "currency"]
        });
        return (e = a == null ? void 0 : a.data) == null ? void 0 : e.data
    },
    R = async () => {
        var a;
        const t = await r.request({
            url: "/promote/config/sensitiveData",
            method: "GET"
        }, {
            token: {
                type: "staticOnly"
            },
            oss: {
                enable: !0
            }
        });
        return (a = t == null ? void 0 : t.data) == null ? void 0 : a.data
    },
    U = t => r.request({
        url: "/api/agent/promote/report/myPeriodData",
        method: "POST",
        data: t
    }, {
        token: {
            type: "loginOnly"
        },
        oss: {
            enable: !1
        }
    }).then(a => {
        var e;
        return (e = a == null ? void 0 : a.data) == null ? void 0 : e.data
    }),
    W = () => r.request({
        url: "/api/agent/promote/report/myTotalData",
        method: "POST"
    }, {
        token: {
            type: "loginOnly"
        },
        oss: {
            enable: !1
        }
    }).then(t => {
        var a;
        return (a = t == null ? void 0 : t.data) == null ? void 0 : a.data
    }),
    X = t => r.request({
        url: "/promote/v2/report/teamData",
        method: "POST",
        data: t
    }, {
        token: {
            type: "loginOnly"
        }
    }).then(a => {
        var e;
        return (e = a == null ? void 0 : a.data) == null ? void 0 : e.data
    }),
    V = t => r.request({
        url: "/promote/config/introduce",
        method: "GET",
        params: t
    }, {
        token: {
            type: "staticOnly"
        },
        oss: {
            enable: !0
        },
        omitKey: ["platformType"]
    }).then(a => {
        var e;
        return (e = a == null ? void 0 : a.data) == null ? void 0 : e.data
    }),
    Y = () => r.request({
        url: "/promote/extract",
        method: "POST"
    }, {
        error: {
            action: "noMessage"
        }
    }).then(t => {
        var a;
        return (a = t == null ? void 0 : t.data) == null ? void 0 : a.data
    }),
    Z = () => r.request({
        url: "/promote/config/share",
        method: "GET"
    }, {
        token: {
            type: "staticOnly"
        },
        oss: {
            enable: !0
        },
        omitKey: ["platformType"]
    }).then(t => {
        var a;
        return (a = t == null ? void 0 : t.data) == null ? void 0 : a.data
    }),
    $ = t => r.request({
        url: "/promote/selectpromotelink",
        method: "POST",
        data: t
    }).then(a => {
        var e;
        return (e = a == null ? void 0 : a.data) == null ? void 0 : e.data
    }),
    z = t => r.request({
        url: "/promote/getPublicityV2",
        method: "POST",
        data: t
    }).then(a => {
        var e;
        return (e = a == null ? void 0 : a.data) == null ? void 0 : e.data
    }),
    M = () => r.request({
        url: "/promote/getCreateAccountConfig",
        method: "GET"
    }, {
        token: {
            type: "staticOnly"
        },
        oss: {
            enable: !0
        },
        omitKey: ["platformType"]
    }).then(t => {
        var a;
        return (a = t == null ? void 0 : t.data) == null ? void 0 : a.data
    }),
    tt = t => r.request({
        url: "/promote/v2/createaccount",
        method: "POST",
        data: t
    }).then(a => {
        var e;
        return (e = a == null ? void 0 : a.data) == null ? void 0 : e.data
    }),
    at = (t = {
        time: -1
    }) => r.request({
        url: "/promote/directMembers",
        method: "POST",
        data: t
    }).then(a => {
        var e;
        return (e = a == null ? void 0 : a.data) == null ? void 0 : e.data
    }),
    ot = t => r.request({
        url: "/promote/transferfund",
        method: "POST",
        data: t
    }).then(a => {
        var e;
        return (e = a == null ? void 0 : a.data) == null ? void 0 : e.data
    });
var m = (t => (t[t.Infinite = 0] = "Infinite", t[t.FirstLevel = 1] = "FirstLevel", t[t.NetProfit = 2] = "NetProfit", t[t.ThreeNetProfit = 10002] = "ThreeNetProfit", t[t.National = 10003] = "National", t))(m || {});
const et = x("promote", () => {
    const t = L({
            agentModeError: void 0,
            promoteConfigError: void 0,
            agentInfoError: void 0,
            agentPromotionError: void 0,
            publicityOptionsError: void 0
        }),
        a = c(),
        e = g(() => ({
            isInfinite: a.value.agent_id == m.Infinite,
            isFirstLevel: a.value.agent_id == m.FirstLevel,
            isNetProfit: a.value.agent_id == m.NetProfit,
            isThreeNetProfix: a.value.agent_id == m.ThreeNetProfit,
            isNational: a.value.agent_id == m.National
        })),
        G = async () => {
            y.value = !0, await A().then(o => {
                a.value = o, t.agentModeError = void 0
            }).catch(o => {
                o instanceof Error ? t.agentModeError = o.message : t.agentModeError = String(o)
            }).finally(() => {
                y.value = !1
            })
        },
        h = c(),
        P = c(),
        I = () => {
            F().then(o => {
                t.agentInfoError = void 0, h.value = o
            }).catch(o => {
                o instanceof Error ? t.agentInfoError = o.message : t.agentInfoError = String(o)
            })
        },
        q = () => {
            j().then(o => {
                t.agentPromotionError = void 0, P.value = o
            }).catch(o => {
                o instanceof Error ? t.agentPromotionError = o.message : t.agentPromotionError = String(o)
            })
        },
        D = g(() => {
            var o, i;
            return (i = (o = h.value) == null ? void 0 : o.isProAgent) != null ? i : !1
        }),
        T = c(),
        C = () => {
            K().then(o => {
                t.promoteConfigError = void 0, T.value = o
            }).catch(o => {
                o instanceof Error ? t.promoteConfigError = o.message : t.promoteConfigError = String(o)
            })
        },
        u = c(),
        N = g(() => {
            var o, i;
            return {
                showType: (o = u.value) == null ? void 0 : o.showType,
                showName: (i = u.value) == null ? void 0 : i.showName
            }
        }),
        k = async () => {
            R().then(o => {
                u.value = o
            })
        },
        w = g(() => {
            var s, f;
            const o = (f = (s = u.value) == null ? void 0 : s.dataList) == null ? void 0 : f.map(l => {
                    const n = {};
                    for (const d of l.data) {
                        const {
                            name: p,
                            value: v
                        } = d;
                        n[p] = Number(v)
                    }
                    return {
                        name: l.name,
                        result: n
                    }
                }),
                i = {};
            for (const l of o || []) {
                const {
                    name: n,
                    result: d
                } = l;
                i[n] = d
            }
            return i
        }),
        E = c(),
        O = c({}),
        b = () => {
            var o;
            (a == null ? void 0 : a.value) !== void 0 ? V({
                agentId: (o = a == null ? void 0 : a.value) == null ? void 0 : o.agent_id
            }).then(i => {
                if (i == null) return;
                const {
                    list: s,
                    ...f
                } = i;
                E.value = f;
                const l = {};
                s.forEach(n => {
                    if (n && Array.isArray(n) && n.length) {
                        const d = n[0].game_cateid;
                        l[d] = n.map((p, v) => ({ ...p,
                            index: v
                        }))
                    }
                }), O.value = l
            }) : setTimeout(() => {
                b()
            }, 500)
        },
        S = c(),
        _ = o => {
            z({
                link: o
            }).then(i => {
                t.publicityOptionsError = void 0, S.value = i
            }).catch(i => {
                i instanceof Error ? t.publicityOptionsError = i.message : t.publicityOptionsError = String(i)
            })
        },
        y = c(!1);
    return {
        agentModeData: a,
        computedIsProAgent: D,
        computedAgentMode: e,
        getPromoteAdvertise: G,
        agentInfo: h,
        agentPromotion: P,
        promoteConfig: T,
        getPromoteConfig: C,
        axiosError: t,
        getAgentInfo: I,
        getAgentPromotion: q,
        lowDisplay: N,
        sensitiveDataConfig: u,
        computedSensitiveConfig: w,
        getSensitiveData: k,
        initProportionData: b,
        proportionData: E,
        proportionTableData: O,
        promoteImageData: S,
        getPromoteImage: _,
        timeoutLoadingAgent: y
    }
}, {
    persist: {
        paths: ["agentPromotion", "sensitiveDataConfig", "promoteImageData", "proportionData", "proportionData"]
    }
});
export {
    M as a, tt as b, W as c, U as d, Y as e, Q as f, ot as g, at as h, Z as i, $ as j, X as k, et as u
};
//# sourceMappingURL=index.JcARDJEC.js.map