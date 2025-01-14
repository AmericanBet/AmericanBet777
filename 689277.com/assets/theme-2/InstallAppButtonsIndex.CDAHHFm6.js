import {
    a as v,
    ho as y,
    hn as B,
    bA as I,
    a3 as A,
    x as N,
    hp as k,
    M as D,
    I as l
} from "./main.async.-NbSL2aO.js";
import {
    k as M,
    c,
    a5 as t,
    ax as F,
    F as d
} from "../vendors/vendor-@vue.CBvhRkQp.js";
const S = {
        type: {
            type: String,
            default: "Middle",
            required: !0
        },
        filter: {
            type: Function,
            default: a => a
        }
    },
    j = "_buttons_84r90_25",
    x = "_item_84r90_31",
    C = "_icon_84r90_43",
    O = "_appname_84r90_46",
    V = "_hotName_84r90_63",
    q = "_hot_84r90_63",
    R = "_redLiteral_84r90_78",
    T = "_wrapperAutoLogin_84r90_95",
    z = "_autoLogin_84r90_103",
    E = "_autoLoginLeteral_84r90_116",
    G = "_ghost_84r90_120",
    H = "_iosBtn_84r90_125",
    J = "_common_bganimation_84r90_1",
    n = {
        buttons: j,
        item: x,
        icon: C,
        appname: O,
        hotName: V,
        hot: q,
        redLiteral: R,
        wrapperAutoLogin: T,
        autoLogin: z,
        autoLoginLeteral: E,
        ghost: G,
        iosBtn: H,
        common_bganimation: J
    };

function g(a) {
    return typeof a == "function" || Object.prototype.toString.call(a) === "[object Object]" && !F(a)
}
const [K] = N("install-other-buttons"), U = M({
    name: K,
    props: S,
    setup(a) {
        const {
            t: i
        } = v(), {
            downloadDefaultList: p,
            downloadMiddleList: m
        } = y(), {
            download: h,
            downloadReport: b
        } = B(), u = c(() => {
            var o;
            return (o = m.value) == null ? void 0 : o.filter(e => a.filter(e))
        }), L = c(() => {
            var o;
            return (o = p.value) == null ? void 0 : o.filter(e => a.filter(e))
        }), r = c(() => {
            var e;
            const o = (e = u.value) == null ? void 0 : e.length;
            return a.type === "Middle" && o ? u.value : L.value
        }), {
            isIos: f
        } = I(), _ = o => {
            var e;
            return t(d, null, [o.icon && t(l, {
                class: n.icon,
                src: o.icon
            }, null), t("div", {
                class: n.appname
            }, [t("span", {
                class: [o.hot ? n.hotName : ""]
            }, [o.name]), o.hot ? t(d, null, [t("div", {
                class: n.hot
            }, [t("span", {
                class: n.redLiteral
            }, [i("lobby.rightBar.hot")]), t(l, {
                src: "/lobby_asset/common/web/common/comm_img_jb-2.svg"
            }, null)]), t("div", {
                class: [n.wrapperAutoLogin, ((e = r == null ? void 0 : r.value) == null ? void 0 : e.length) === 1 ? n.one : n.two]
            }, [t("span", {
                class: n.autoLogin
            }, [t(l, {
                src: "/lobby_asset/common/web/common/comm_icon_gou.svg"
            }, null)]), t("span", {
                class: n.autoLoginLeteral
            }, [i("lobby.rightBar.autoLogin")])])]) : null])])
        }, w = o => {
            const {
                type: e
            } = o;
            if (f && e !== k.DesktopShortcut) return t("a", {
                href: o.value,
                class: {
                    [n.iosBtn]: !0,
                    [n.ghost]: o.ghost
                },
                target: "_blank",
                onClick: () => b(o)
            }, [_(o)]); {
                let s;
                return t(D, {
                    onClick: () => {
                        h(o)
                    },
                    block: !0,
                    class: {
                        [n.ghost]: o.ghost
                    }
                }, g(s = _(o)) ? s : {
                    default: () => [s]
                })
            }
        };
        return () => {
            var o;
            return t("div", {
                class: n.buttons
            }, [(o = r.value) == null ? void 0 : o.map(e => {
                let s;
                return t(A, {
                    tag: "div",
                    content: e.reward || 0,
                    class: n.item
                }, g(s = w(e)) ? s : {
                    default: () => [s]
                })
            })])
        }
    }
});
export {
    U as I
};
//# sourceMappingURL=InstallAppButtonsIndex.CDAHHFm6.js.map