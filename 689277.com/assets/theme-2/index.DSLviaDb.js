import {
    aq as r,
    ce as c,
    cf as s
} from "./main.async.-NbSL2aO.js";
const n = "/active/rechargeFund/recharge/list",
    i = "/active/rechargeFund/setting/get",
    o = "/active/rechargeFund/currentPeriodReward/get",
    u = async e => {
        var t;
        const a = await r.request({
            url: n,
            method: "POST",
            data: { ...e
            }
        }, {
            omitKey: ["platformType"],
            cache: {
                useCache: "fresh",
                time: 60
            },
            token: {
                type: "loginOnly"
            },
            oss: {
                enable: !1
            }
        });
        return (t = a == null ? void 0 : a.data) == null ? void 0 : t.data
    },
    h = async () => {
        var a;
        const e = await r.request({
            url: i,
            method: "GET"
        }, {
            omitKey: ["platformType"],
            cache: {
                useCache: "fresh",
                time: 60
            },
            token: {
                type: "staticOnly"
            },
            oss: {
                enable: !0
            }
        });
        return (a = e == null ? void 0 : e.data) == null ? void 0 : a.data
    },
    l = async () => {
        var a;
        const e = await r.request({
            url: o,
            method: "post"
        }, {
            cache: {
                useCache: "fresh",
                time: 60
            },
            token: {
                type: "loginOnly"
            },
            oss: {
                enable: !1
            }
        });
        return (a = e == null ? void 0 : e.data) == null ? void 0 : a.data
    },
    g = async (e, a = "normal") => {
        const t = await r.request({
            url: "/active/rechargeFund/receive",
            method: "post",
            data: {
                receive_log_id: e
            },
            headers: {
                deviceModel: c(),
                devicetype: s()
            }
        }, {
            cache: {
                useCache: !1
            },
            oss: {
                enable: !1
            },
            error: {
                action: a
            }
        });
        return t == null ? void 0 : t.data
    };
export {
    u as a, h as b, l as c, n as d, i as e, o as f, g as r
};
//# sourceMappingURL=index.DSLviaDb.js.map