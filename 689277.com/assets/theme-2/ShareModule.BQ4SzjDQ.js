import {
    a as C,
    ca as A,
    ap as g,
    v as L,
    gf as N,
    d8 as O,
    I as x,
    q as $,
    gg as S,
    ff as j,
    a7 as k,
    cj as M,
    M as V,
    U as D,
    V as U,
    cx as q,
    b1 as B
} from "./main.async.-NbSL2aO.js";
import {
    i as E,
    u as R,
    j as F
} from "./index.JcARDJEC.js";
import {
    s as T
} from "../vendors/vendor-stable.Cg92BvZJ.js";
import "./main.Dmn05Mj-.js";
import {
    Q as G,
    P as Q
} from "../vendors/vendor-default.p-wnugzB.js";
import "../vendors/vendor-bignumber.BRr1dcww.js";
import "../vendors/vendor-swiper.BzK1hN__.js";
import {
    C as I
} from "./CopyIndex.C4IXAgq0.js";
import {
    k as P,
    r as y,
    c as h,
    a5 as a,
    F as z,
    w as H,
    ax as J
} from "../vendors/vendor-@vue.CBvhRkQp.js";
const K = "_socialmedia_vea5c_25",
    W = "_shareIcon_vea5c_40",
    X = "_shareText_vea5c_65",
    Y = "_common_bganimation_vea5c_1",
    u = {
        socialmedia: K,
        "media-item": "_media-item_vea5c_33",
        shareIcon: W,
        "media-item-icon": "_media-item-icon_vea5c_50",
        shareText: X,
        common_bganimation: Y
    },
    [Z] = $("socialmedia"),
    ee = P({
        name: Z,
        props: {
            currentLink: {
                type: String,
                default: location.origin
            }
        },
        setup(n) {
            const {
                t: p
            } = C(), r = A(), {
                userInfos: c,
                hasLogined: v
            } = T(g()), l = y();
            E().then(o => {
                l.value = o
            });
            const f = h(() => {
                    var t, s;
                    const o = v.value ? p("lobby.promote.promote.shareText", {
                        account: ((t = c == null ? void 0 : c.value) == null ? void 0 : t.platfromid) || ""
                    }) : "";
                    return ((s = l.value) == null ? void 0 : s.title) || o
                }),
                _ = o => {
                    let e = "";
                    S() ? e = o.iosAddr : e = o.andriodAddr;
                    const t = encodeURIComponent(n.currentLink),
                        s = f.value ? encodeURIComponent(f.value + "\n") : "";
                    switch (o.name.toLowerCase()) {
                        case "facebook":
                            S() ? e += "?link=".concat(t) : e += "?u=".concat(t);
                            break;
                        case "twitter":
                            e += "?text=".concat(s, "&url=").concat(t);
                            break;
                        case "x":
                            e += "?text=".concat(s, "&url=").concat(t);
                            break;
                        case "whatsapp":
                            e += "?text=".concat(s + t);
                            break;
                        case "line":
                            e += "?text=".concat(s + t);
                            break;
                        case "telegram":
                            e += "?text=".concat(s, "&url=").concat(t);
                            break;
                        case "threads":
                            e += "?text=".concat(s + t);
                            break
                    }
                    j(e)
                },
                b = () => {
                    var e, t;
                    const o = {
                        title: f.value,
                        text: ((e = l.value) == null ? void 0 : e.slogan) || "",
                        url: n.currentLink
                    };
                    if (navigator.share) navigator.share(o);
                    else if ((t = window.jsBridge) != null && t.share) try {
                        window.jsBridge.share(JSON.stringify(o))
                    } catch (s) {
                        k.error({
                            message: s
                        })
                    } else k.error({
                        message: p("lobby.promote.promote.notSupportShare")
                    })
                };
            L({
                navigatorShare: b
            });
            const w = h(() => {
                var o;
                return N.isActivated ? ((o = r.socialMediaList) == null ? void 0 : o.filter(e => e.name.toLowerCase() == "telegram")) || [] : r.socialMediaList || []
            });
            return () => a(z, null, [a(O, {
                direction: "x",
                scrollable: !0,
                draggable: !0
            }, {
                default: () => {
                    var o;
                    return [a("div", {
                        class: u.socialmedia
                    }, [a("div", {
                        class: u["media-item"],
                        onClick: b
                    }, [a("span", {
                        class: u.shareIcon
                    }, [a(x, {
                        width: "0.35rem",
                        src: "/lobby_asset/common/web/promotion/icon_tg_share.svg"
                    }, null)]), a("span", {
                        class: u.shareText
                    }, [p("lobby.promote.promote.downloadImageName")])]), (o = w.value) == null ? void 0 : o.map(e => a("div", {
                        class: u["media-item"],
                        onClick: () => _(e),
                        key: e.id
                    }, [a("span", {
                        class: u["media-item-icon"]
                    }, [a(x, {
                        src: e.icon,
                        draggable: !1
                    }, null)]), a("span", {
                        class: u.shareText
                    }, [e.name])]))])]
                }
            })])
        }
    }),
    oe = "_code_f5dei_40",
    ae = "_link_f5dei_60",
    te = "_copy_f5dei_96",
    se = "_members_f5dei_121",
    ne = "_common_bganimation_f5dei_1",
    i = {
        "share-module": "_share-module_f5dei_25",
        "share-info": "_share-info_f5dei_28",
        "qr-code": "_qr-code_f5dei_33",
        code: oe,
        "link-box": "_link-box_f5dei_60",
        "link-title": "_link-title_f5dei_63",
        link: ae,
        "link-select": "_link-select_f5dei_71",
        copy: te,
        "member-info": "_member-info_f5dei_104",
        members: se,
        "invite-code": "_invite-code_f5dei_124",
        "link-option": "_link-option_f5dei_135",
        common_bganimation: ne
    };

function ie(n) {
    return typeof n == "function" || Object.prototype.toString.call(n) === "[object Object]" && !J(n)
}
const [re] = $("share-module"), ve = P({
    name: re,
    setup() {
        const {
            t: n
        } = C(), p = y(), r = R();
        M(() => {
            g().hasLogined && r.getAgentPromotion()
        });
        const {
            userInfos: c
        } = T(g()), v = h(() => {
            var e;
            const {
                linkList: o
            } = (e = r.agentPromotion) != null ? e : {};
            return o != null ? o : [{
                url: window.location.origin,
                select: !0
            }]
        }), l = h(() => {
            var e, t;
            return (t = (e = v.value) == null ? void 0 : e.find(s => s.select)) == null ? void 0 : t.url
        });
        H(() => l.value, o => {
            g().hasLogined ? o != window.location.origin && r.getPromoteImage(o) : r.getPromoteImage(o)
        }, {
            immediate: !0
        });
        const f = o => {
                var t;
                const {
                    linkList: e
                } = (t = r.agentPromotion) != null ? t : {};
                e == null || e.forEach(s => {
                    s.select = !1, s.url == o.value && (s.select = !0)
                }), F({
                    domain: o.value
                })
            },
            _ = y(!1),
            b = async () => {
                var s, m, d;
                const o = r.promoteImageData.completeImg,
                    e = "".concat((s = c == null ? void 0 : c.value) == null ? void 0 : s.platfromid, "_").concat(q(new Date().getTime(), "md"), "_").concat(n("lobby.promote.promote.downloadImageName")),
                    t = o ? "data:image/png;base64,".concat(o) : "";
                _.value = !0, await Q(t, "".concat(e, ".png")), _.value = !1, !((d = (m = B) == null ? void 0 : m.package) != null && d.isLite) && k({
                    type: "success",
                    message: n("lobby.promote.promote.downloadSuccessTips")
                })
            };
        return L({
            navigatorShare: () => {
                var o, e;
                (e = (o = p.value) == null ? void 0 : o.navigatorShare) == null || e.call(o)
            }
        }), () => {
            var s;
            let o;
            const {
                inviteCode: e,
                directMember: t
            } = (s = r.agentPromotion) != null ? s : {};
            return a("div", {
                class: i["share-module"]
            }, [a("div", {
                class: i["share-info"]
            }, [a("div", {
                class: i["qr-code"]
            }, [a("div", {
                class: i.code
            }, [a(G, {
                value: l.value
            }, null)]), a(V, {
                type: "primary",
                disabled: _.value,
                loading: _.value,
                onClick: b
            }, ie(o = n("lobby.promote.promote.clickSave")) ? o : {
                default: () => [o]
            })]), a("div", {
                class: [i["link-box"], "link-box"]
            }, [a("div", {
                class: [i["link-title"], "link-title"]
            }, [a("span", null, [n("lobby.promote.promote.myLink")])]), a("div", {
                class: [i.link, "link"]
            }, [a(D, {
                size: "large",
                modelValue: l.value,
                "onUpdate:modelValue": m => l.value = m,
                wrapperClass: [i["link-select"], "link-select"],
                onSelected: f,
                showArrow: !1,
                suffixIcon: () => a("span", null, [n("lobby.promote.promote.myLinkChange")]),
                dropdownClassName: i["link-option"],
                fillMode: "neutral_1"
            }, {
                default: () => {
                    var m;
                    return [(m = v.value) == null ? void 0 : m.map(d => a(U, {
                        value: d.url,
                        key: d.url,
                        label: d.url
                    }, {
                        default: () => [d.url]
                    }))]
                }
            }), a(I, {
                class: i.copy,
                text: l.value
            }, null)]), a("div", {
                class: [i["member-info"], "member-info"]
            }, [a("div", {
                class: "direct-subordinate"
            }, [a("label", null, [n("lobby.promote.promote.directNum")]), a("span", {
                class: i.members
            }, [g().hasLogined && t != null ? t : " - ", n("lobby.promote.unitPeople")])]), e && a("div", null, [a("label", null, [n("lobby.promote.promote.inviteCode")]), a("span", {
                class: i["invite-code"]
            }, [e]), a(I, {
                class: [i.copy, "copy"],
                text: e
            }, null)])])])]), a(ee, {
                ref: p,
                currentLink: l.value
            }, null)])
        }
    }
});
export {
    ve as c
};
//# sourceMappingURL=ShareModule.BQ4SzjDQ.js.map