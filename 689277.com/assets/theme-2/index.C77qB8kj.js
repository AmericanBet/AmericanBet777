import {
    aq as s,
    ce as c,
    cf as r
} from "./main.async.-NbSL2aO.js";
const l = async e => {
        var t;
        const a = await s.request({
            url: "/returngold/summary",
            method: "POST",
            data: { ...e
            }
        }, {
            error: {
                action: "noMessage",
                actionExcludes: ["networkError"]
            },
            cache: {
                useCache: !1
            },
            oss: {
                enable: !1
            }
        });
        return (t = a == null ? void 0 : a.data) == null ? void 0 : t.data
    },
    n = async e => {
        var t;
        const a = await s.request({
            url: "/returngold/ratiotable",
            method: "POST",
            data: { ...e
            }
        }, {
            cache: {
                useCache: !1
            },
            oss: {
                enable: !1
            }
        });
        return (t = a == null ? void 0 : a.data) == null ? void 0 : t.data
    },
    d = async () => {
        var a;
        const e = await s.request({
            url: "/returngold/recv",
            method: "POST"
        }, {
            cache: {
                useCache: !1
            },
            oss: {
                enable: !1
            }
        });
        return (a = e == null ? void 0 : e.data) == null ? void 0 : a.data
    },
    u = async e => {
        var t;
        const a = await s.request({
            url: "/returngold/recvOne",
            method: "POST",
            data: { ...e
            },
            headers: {
                deviceModel: c(),
                devicetype: r()
            }
        }, {
            cache: {
                useCache: !1
            },
            oss: {
                enable: !1
            }
        });
        return (t = a == null ? void 0 : a.data) == null ? void 0 : t.data
    };
export {
    d as a, l as b, n as c, u as d
};
//# sourceMappingURL=index.C77qB8kj.js.map