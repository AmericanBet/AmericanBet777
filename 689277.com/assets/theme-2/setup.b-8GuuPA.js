import {
    P as p,
    L as l
} from "./main.Dmn05Mj-.js";
import {
    S as u
} from "../vendors/vendor-default.p-wnugzB.js";
var _ = {
    env: "prod",
    staticToken: "b2e3d672-9d88-47a7-81b4-9d7ffc62054f",
    dsn: "https://f5e83138ea78f244ab8adf5d23ca9374@e34rsfds.cbfes.com/4"
};
const S = (s = ["log", "trace", "table", "group", "groupEnd", "groupCollapsed", "time", "timeEnd", "timeLog", "debug"]) => {
        const a = r => (...c) => {
                var f;
                const o = (f = new Error().stack) == null ? void 0 : f.split("\n");
                let n = 3;
                o && o[3] && o[3].includes("Object.") && (n = 4);
                let e = o && o[n] ? o[n].trim() : "unknown location";
                e = e.replace("at ", ""), e = e.replace("(", ""), e = e.replace(")", ""), e = e.split("webpack-internal://")[1] || e;
                let i = "";
                e.includes(" ") && (i = e.split(" ")[0], e = e.split(" ")[1]), r("%c📜 ".concat(e, " ").concat(i ? " Trace Function: " + i : "", "\n"), "color: blue; font-weight: bold"), r(...c)
            },
            t = r => (...c) => {
                if (!window.abcdefg_open) return () => {};
                a(r)(...c)
            };
        ["try", "prod"].includes(_.env) && s.push("warn", "error"), s.forEach(r => {
            console[r] = t(console[r])
        })
    },
    d = {
        perfRec: p
    };
var g = {
    showConsole: !1,
    registerSW: !0,
    sentryOn: !0
};
(function() {
    if (d.perfRec.start(d.perfRec.target.appSetup), localStorage && localStorage.getItem("__FEATURE_SWITCHES__")) try {
        g = { ...g,
            ...JSON.parse(localStorage.getItem("__FEATURE_SWITCHES__") || "{}")
        }
    } catch (t) {
        console.error("parse localStorage __FEATURE_SWITCHES__ error")
    }
    S();
    const s = t => () => {
            "serviceWorker" in navigator && t().then(() => {
                l.info("ServiceWorker registration successful!")
            }).catch(r => {
                l.error("ServiceWorker registration failed: ", r)
            })
        },
        a = t => {
            const r = s(() => navigator.serviceWorker.register("/assets/sw-precache-".concat(1736753944851, "-2-").concat(window.__vite_is_modern_browser ? "modern" : "legacy", ".js")));
            setTimeout(r, t * 15)
        };
    s(() => navigator.serviceWorker.register("/sw-runtime-".concat(1736753944851, ".js")))(), u(t => {
        l.info("FCP:", t.value), a(t.value)
    }), console.log("%c ## Welcome To Visit SaaS Lobby Next ###", "color: #409EFF; font-size: 16px; font-weight: bold;")
})();
//# sourceMappingURL=setup.b-8GuuPA.js.map