import {
    k as y,
    o as m,
    c as _,
    a5 as i,
    bz as s,
    br as o
} from "../vendors/vendor-@vue.CBvhRkQp.js";
import {
    ag as f,
    a as g,
    aR as b,
    b1 as v,
    q as h
} from "./main.async.-NbSL2aO.js";
import "./main.Dmn05Mj-.js";
import "../vendors/vendor-default.p-wnugzB.js";
import "../vendors/vendor-bignumber.BRr1dcww.js";
import "../vendors/vendor-swiper.BzK1hN__.js";
import {
    T
} from "./ThirdPartyButton.CRU5pzTA.js";
const q = {
        mode: {
            type: String,
            required: !0
        },
        title: {
            type: [String, Boolean],
            default: void 0
        },
        subTitle: {
            type: String,
            default: void 0
        },
        list: {
            type: Array
        },
        subName: {
            type: Boolean,
            default: !1
        },
        shadow: {
            type: Boolean,
            default: !0
        },
        binded: {
            type: Number,
            default: void 0
        },
        align: {
            type: String,
            default: "center"
        },
        onLoginSuccess: {
            type: Function,
            default: void 0
        },
        onBindSuccess: {
            type: Function,
            default: void 0
        }
    },
    P = "_thirdParty_fqvjy_25",
    j = "_title_fqvjy_32",
    S = "_titleCenter_fqvjy_36",
    C = "_titleWing_fqvjy_41",
    L = "_titleLeft_fqvjy_64",
    B = "_subTitle_fqvjy_73",
    N = "_list_fqvjy_78",
    W = "_item_fqvjy_89",
    k = "_common_bganimation_fqvjy_1",
    n = {
        thirdParty: P,
        title: j,
        titleCenter: S,
        titleWing: C,
        titleLeft: L,
        subTitle: B,
        list: N,
        item: W,
        common_bganimation: k
    },
    [A] = h("third-party-login-bind"),
    M = y({
        name: A,
        props: q,
        emits: ["success"],
        setup(t) {
            const {
                thirdPartyEnables: u
            } = f(), {
                t: r
            } = g();
            m(() => {
                b("THIRD_PARTY", ({
                    type: e,
                    name: a
                }) => {
                    var l, d;
                    e === "login" ? (l = t.onLoginSuccess) == null || l.call(t, a) : (d = t.onBindSuccess) == null || d.call(t, a)
                })
            });
            const c = _(() => u.value.map(e => ({ ...e,
                render: () => i(T, {
                    type: e.name,
                    image: {
                        src: e.icon
                    },
                    title: t.subName ? e.name : void 0,
                    onClick: () => e.hook()
                }, null)
            })));
            return () => {
                var e, a;
                if (c.value.length && !v.package.isVest) return i("div", {
                    class: n.thirdParty,
                    "data-mode": t.mode === "loginRegister"
                }, [s(i("div", {
                    class: n.title
                }, [s(i("div", {
                    class: n.titleCenter
                }, [i("span", {
                    class: n.titleWing
                }, [(e = t.title) != null ? e : r("lobby.modal.login.otherWayLogin")])]), [
                    [o, t.align === "center"]
                ]), s(i("div", {
                    class: n.titleLeft
                }, [(a = t.title) != null ? a : r("lobby.center.security.thirdWay.tab"), t.subTitle && i("span", {
                    class: n.subTitle
                }, [t.subTitle])]), [
                    [o, t.align === "left"]
                ])]), [
                    [o, t.title !== !1]
                ]), i("ul", {
                    class: n.list,
                    "data-align": t.align
                }, [c.value.map(l => i("li", {
                    class: n.item
                }, [l.render()]))])])
            }
        }
    });
export {
    M as T
};
//# sourceMappingURL=ThirdPartyLoginBind.DoDfAqYd.js.map