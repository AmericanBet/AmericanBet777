import {
    ap as Y,
    iI as C,
    iJ as A,
    iK as O,
    fi as ne,
    fh as ae,
    as as oe,
    aV as se,
    iL as Q,
    m as ce,
    iM as D,
    I as N,
    iN as J,
    iO as W,
    bC as re,
    bD as le,
    Q as ie,
    x as q,
    d8 as de,
    fm as ue,
    iP as F,
    iQ as Z,
    iR as _e,
    u as V,
    gb as me
} from "./main.async.-NbSL2aO.js";
import {
    s as k,
    b as pe
} from "../vendors/vendor-stable.Cg92BvZJ.js";
import {
    c as x
} from "./main.Dmn05Mj-.js";
import {
    d as G
} from "../vendors/vendor-default.p-wnugzB.js";
import {
    r as j,
    k as ee,
    w as ge,
    aG as ye,
    c as H,
    a5 as a,
    F as fe,
    ax as be
} from "../vendors/vendor-@vue.CBvhRkQp.js";
import {
    u as he
} from "./useListDependencies.BDYlYl1T.js";
import {
    c as K
} from "../vendors/vendor-lodash.CYk3mlCa.js";
import "../vendors/vendor-@sentry.EjpkRnd3.js";
import "../vendors/vendor-bignumber.BRr1dcww.js";
import "../vendors/vendor-swiper.BzK1hN__.js";
import "../vendors/vendor-@intlify.BmUtFfVu.js";
const ve = () => {
        const y = Y(),
            {
                hasLogined: B,
                userInfos: v
            } = k(y),
            S = j(0),
            U = c => c.sort((d, r) => {
                if (d.forceType !== r.forceType) return d.forceType - r.forceType
            }),
            E = c => {
                var g, w;
                const d = C(),
                    {
                        frameBoxInfos: r
                    } = k(d),
                    n = r.value.find(i => i.id == c),
                    u = r.value.findIndex(i => i.id == c),
                    f = G().format("YYYY-MM-DD");
                if (n) {
                    if ([n.frameType, n.frame_type].includes(A.LOGIN) && d.setLoginNotRemindIds(n.id), [n.frameType, n.frame_type].includes(A.ONE)) {
                        const i = x.localStorage.get("onceNotRemindIds") || [];
                        let b = i.find(I => {
                            var T;
                            return I.platformId === ((T = v.value) == null ? void 0 : T.platfromid)
                        }) || {};
                        Array.isArray(b.ids) ? b.ids.includes(n.id) || b.ids.push(n.id) : b = {
                            ids: [n.id],
                            platformId: (g = v.value) == null ? void 0 : g.platfromid
                        }, x.localStorage.set("onceNotRemindIds", [...i, b])
                    }
                    if ([n.frameType, n.frame_type].includes(A.DAY)) {
                        const i = x.localStorage.get("dailyNotRemindIds") || [],
                            b = i.find(I => {
                                var T;
                                return I.id === n.id && I.platformId === ((T = v.value) == null ? void 0 : T.platfromid)
                            });
                        b ? b.recordTime = f : i.push({
                            id: n.id,
                            recordTime: f,
                            platformId: (w = v.value) == null ? void 0 : w.platfromid
                        }), x.localStorage.set("dailyNotRemindIds", i)
                    }
                    if (B.value) n.read_status = n.read_status ? n.read_status : O.Read, d.setFrameBoxInfos([...r.value.slice(0, u), n, ...r.value.slice(u + 1)]), n.read || ne({
                        id: n.id,
                        type: n.forceType
                    });
                    else if (!n.read) {
                        n.read = !0, d.setFrameBoxInfos([...r.value.slice(0, u), n, ...r.value.slice(u + 1)]);
                        const i = [];
                        r.value.forEach(I => {
                            I.read && i.push(I.id)
                        });
                        const b = {
                            ids: i,
                            date: f
                        };
                        x.localStorage.set("frameBoxReadState", b)
                    }
                }
            };
        return {
            activeKey: S,
            customSort: U,
            changeReadState: E,
            handlerTabsChange: c => {
                E(c);
                const {
                    frameBoxInfos: d
                } = C(), r = d.find(n => n.id == c);
                r && (S.value = r.id)
            },
            handleNotShowAction: c => {
                var w;
                const d = C(),
                    {
                        frameBoxInfos: r
                    } = k(d),
                    n = Y(),
                    {
                        userInfos: u
                    } = k(n),
                    f = r.value.find(i => i.id === S.value);
                f && (f.not_remind_again = !f.not_remind_again);
                let g = x.localStorage.get("notShowPopupInfos") || [];
                c ? g.push({
                    id: S.value,
                    recordTime: G().format("YYYY-MM-DD"),
                    platformId: (w = u.value) == null ? void 0 : w.platfromid
                }) : g.length > 0 && (g = g.filter(i => i.id !== S.value)), x.localStorage.set("notShowPopupInfos", g)
            },
            handleFrameBoxInfos: c => (c.content = ae(c.content, {
                allowRedirects: "true"
            }), c && c.is_maintenance && (c.content = (() => {
                const d = f => new RegExp("(<|&lt;)" + f + "\\/?(>|&gt;)", "g"),
                    {
                        updateMaintainTimeInfo: r
                    } = oe(),
                    n = {
                        start_time: c.maintenance_start,
                        end_time: c.maintenance_end
                    };
                r(n), se("MAINTAIN_MESSAGE").emit(n);
                const u = Q({
                    start_time: c.maintenance_start,
                    end_time: c.maintenance_end
                });
                return c.content.replace(d("t_start"), (u == null ? void 0 : u.start) || "").replace(d("t_end"), (u == null ? void 0 : u.end) || "").replace(d("t_duration"), String(u == null ? void 0 : u.duration) || "")
            })()), c)
        }
    },
    Ie = "_main_4w6dn_25",
    Se = "_content_4w6dn_25",
    we = "_scrollWrapper_4w6dn_33",
    Te = "_maintenanceTime_4w6dn_40",
    Ne = "_title_4w6dn_45",
    xe = "_text_4w6dn_55",
    Ce = "_popupContent_4w6dn_65",
    Be = "_layout1_4w6dn_88",
    ke = "_layout4_4w6dn_88",
    Ee = "_commonTabs_4w6dn_91",
    Re = "_noBackImg_4w6dn_119",
    Pe = "_backImg_4w6dn_120",
    Me = "_layout2_4w6dn_133",
    We = "_layout3_4w6dn_133",
    Le = "_buttomBtn_4w6dn_196",
    Oe = "_popupStyle1_4w6dn_199",
    Ue = "_popupStyle2_4w6dn_200",
    Ae = "_popupStyle3_4w6dn_201",
    De = "_popupStyle4_4w6dn_202",
    Fe = "_pageBtn_4w6dn_208",
    He = "_pagePre_4w6dn_226",
    Ye = "_pageNext_4w6dn_232",
    Ve = "_imgIconWrap_4w6dn_258",
    je = "_agreedWrap_4w6dn_271",
    $e = "_closeBtn_4w6dn_274",
    ze = "_imgIcon_4w6dn_258",
    Je = "_nonCustom_4w6dn_285",
    Ze = "_tabsItem_4w6dn_110",
    Ge = "_icon_4w6dn_110",
    Ke = "_noRead_4w6dn_310",
    Xe = "_tabsLabel_4w6dn_111",
    Qe = "_titleContent_4w6dn_329",
    qe = "_agreedBox_4w6dn_338",
    et = "_checkWrapper_4w6dn_359",
    tt = "_tips_4w6dn_380",
    nt = "_common_bganimation_4w6dn_1",
    o = {
        main: Ie,
        content: Se,
        scrollWrapper: we,
        maintenanceTime: Te,
        title: Ne,
        text: xe,
        popupContent: Ce,
        layout1: Be,
        layout4: ke,
        commonTabs: Ee,
        noBackImg: Re,
        backImg: Pe,
        layout2: Me,
        layout3: We,
        buttomBtn: Le,
        popupStyle1: Oe,
        popupStyle2: Ue,
        popupStyle3: Ae,
        popupStyle4: De,
        pageBtn: Fe,
        pagePre: He,
        pageNext: Ye,
        imgIconWrap: Ve,
        agreedWrap: je,
        closeBtn: $e,
        imgIcon: ze,
        nonCustom: Je,
        tabsItem: Ze,
        icon: Ge,
        noRead: Ke,
        tabsLabel: Xe,
        titleContent: Qe,
        agreedBox: qe,
        checkWrapper: et,
        tips: tt,
        common_bganimation: nt
    };

function at(y) {
    return typeof y == "function" || Object.prototype.toString.call(y) === "[object Object]" && !be(y)
}
const [ot] = q("forcePopup"), st = ee({
    name: ot,
    setup() {
        const {
            activeKey: y,
            handlerTabsChange: B,
            customSort: v,
            handleNotShowAction: S,
            changeReadState: U,
            handleFrameBoxInfos: E
        } = ve(), $ = C(), {
            frameBoxInfos: R
        } = k($), z = Y(), {
            hasLogined: c
        } = k(z), {
            homeLayoutInfos: d
        } = ce(), r = j({}), n = j(!1), u = () => {
            const t = R.value.find(e => e.id == y.value);
            t && (C().setItemStatus(t), U(t.id), r.value = E(K(t)), n.value = t == null ? void 0 : t.not_remind_again)
        };
        ge(() => y.value, t => {
            const e = R.value.find(s => s.id === t);
            e && (n.value = e == null ? void 0 : e.not_remind_again, r.value = E(K(e)))
        }, {
            immediate: !0
        }), ye(() => {
            u()
        });
        const {
            t: f
        } = pe(), g = H(() => {
            const t = R.value.map(e => {
                let s, l;
                return e.forceType === D.NOTICE && (l = "/lobby_asset/common/web/message/icon_message_tz.svg", s = a(N, {
                    src: l
                }, null)), e.forceType === D.ANNOUNCEMENT && (l = "/lobby_asset/common/web/message/icon_message_xx.svg", s = a(N, {
                    src: l
                }, null)), e.forceType === D.PUBLICIZE && (l = "/lobby_asset/common/web/message/icon_message_pmd.svg", s = a(N, {
                    src: l
                }, null)), {
                    read: e.read,
                    key: e.id,
                    id: e.id,
                    value: e.is_maintenance ? f("lobby.modal.force.serviceUpgrade").toString() : e.publicity_name || e.title,
                    icon: s,
                    forceType: e.forceType,
                    not_remind_again: e.not_remind_again,
                    read_status: e.read_status
                }
            });
            return v(t)
        }), w = he(g, t => t.key + (c.value ? t.read_status === O.Unread : !t.read).toString()), i = (t, e) => {
            t.stopPropagation(), t.stopImmediatePropagation();
            const s = v(R.value),
                l = s.findIndex(_ => {
                    var h;
                    return _.id == ((h = r.value) == null ? void 0 : h.id)
                });
            if (l !== -1) {
                let _ = e === F.PREVIEW ? l - 1 : l + 1;
                (_ < 0 || _ >= s.length) && (_ = 0);
                const h = s[_];
                B(h.id)
            }
        }, b = t => {
            const e = l => new RegExp("(<|&lt;)" + l + "\\/?(>|&gt;)", "g"),
                s = Q({
                    start_time: t.maintenance_start,
                    end_time: t.maintenance_end
                });
            return t.content.replace(e("t_start"), (s == null ? void 0 : s.start) || "").replace(e("t_end"), (s == null ? void 0 : s.end) || "").replace(e("t_duration"), String(s == null ? void 0 : s.duration) || "")
        }, I = t => {
            var _, h;
            const e = document.createElement("div");
            e.innerHTML = t, ((_ = e.childNodes) == null ? void 0 : _.length) === 1 && ((h = e.childNodes[0]) == null ? void 0 : h.nodeName) === "#text" && (e.style.whiteSpace = "break-spaces");
            const l = e.getElementsByTagName("table");
            if (l.length) {
                for (const m in l)
                    if (Object.prototype.hasOwnProperty.call(l, m)) {
                        const L = l[m],
                            P = L.style.width;
                        if (P.includes("px")) {
                            const M = Number(P.replace(/px/g, ""));
                            !isNaN(Number(M)) && M > 640 && (L.style.width = "100%")
                        }
                    }
            }
            return e.outerHTML
        }, T = t => {
            const e = H(() => {
                    const m = t.is_maintenance ? b(t) : t.content;
                    return I(m)
                }),
                s = t.img_style || W.TEXT_INTRODUCTION,
                l = t.img_color || s === W.CUSTOMIZE && t.img_url,
                _ = s === W.CUSTOMIZE,
                h = H(() => g.value.findIndex(m => m.id == y.value));
            return a(N, {
                src: _ ? t.img_url : t.img_color,
                tag: "div",
                class: {
                    [o["popupStyle".concat(s)]]: !0,
                    [o.backImg]: l,
                    [o.noBackImg]: !l,
                    [o.nonCustom]: !_
                },
                style: {
                    backgroundSize: "100% 100%",
                    backgroundPosition: "0px 0px",
                    cursor: t.location_type === void 0 || t.location_type === Z.NULL ? "defualt" : "pointer"
                },
                onClick: async () => {
                    await _e(t), t.location_type !== void 0 && t.location_type !== Z.NULL && V().close("messagePopup")
                }
            }, {
                default: () => [!_ && a("div", {
                    class: o.content
                }, [a(de, {
                    direction: "y",
                    scrollbarTrigger: "hover",
                    class: o.scrollWrapper
                }, {
                    default: () => [a("div", {
                        class: o.title
                    }, [a("span", null, [t.hidden !== 1 ? t.publicity_name || t.title : ""])]), a("div", {
                        class: o.text
                    }, [a(ue, {
                        class: o.popupContent,
                        unit: "rem",
                        remUnit: 33.3,
                        mode: "innerHTML",
                        needAddRootFontSize: !1,
                        html: e.value,
                        vestATagJump: !0
                    }, null)])]
                })]), !_ && a("div", {
                    class: o.imgIconWrap
                }, [a(N, {
                    src: t.img_icon,
                    class: o.imgIcon
                }, null)]), g.value.length > 1 && h.value > 0 && a("div", {
                    class: [o.pagePre, o.pageBtn],
                    onClick: m => i(m, F.PREVIEW)
                }, [a(N, {
                    src: "/lobby_asset/common/web/common/comm_icon_fh.svg"
                }, null)]), g.value.length > 1 && h.value < g.value.length - 1 && a("div", {
                    class: [o.pageNext, o.pageBtn],
                    onClick: m => i(m, F.NEXT)
                }, [a(N, {
                    src: "/lobby_asset/common/web/common/comm_icon_fh.svg"
                }, null)])]
            })
        };
        return () => {
            var P, M;
            let t;
            const e = r.value,
                s = (e == null ? void 0 : e.frame_switch) === J.SHOW || (e == null ? void 0 : e.frameSwitch) === J.SHOW,
                {
                    setHasTodayNoMorePopup: l
                } = C();
            l(s);
            const _ = (e == null ? void 0 : e.img_style) || W.TEXT_INTRODUCTION,
                h = (e == null ? void 0 : e.img_color) || _ === W.CUSTOMIZE && (e == null ? void 0 : e.img_url),
                m = Number((M = (P = d == null ? void 0 : d.commonConfig) == null ? void 0 : P.windowCss) != null ? M : 1),
                L = "layout".concat(m);
            return a("div", {
                class: {
                    [o.main]: !0,
                    [o[L]]: !0,
                    [o.buttomBtn]: s
                }
            }, [a(re, {
                class: [o.commonTabs, h ? o.backImg : o.noBackImg],
                navPosition: m === 1 || m === 4 ? "left" : "top",
                onChange: p => B(p),
                active: y.value,
                "onUpdate:active": p => y.value = p,
                shrink: m === 1 || m === 4,
                key: w.value,
                lineHeight: 0
            }, at(t = g.value.map((p, te) => a(le, {
                name: p.key,
                key: p.key + te + (c.value ? p.read_status === O.Unread : !p.read).toString(),
                title: () => a("div", {
                    class: [o.tabsItem, "tabsItem"]
                }, [a("span", {
                    class: [
                        [o.icon], (c.value ? p.read_status === O.Unread : !p.read) ? [o.noRead] : null, "icon"
                    ]
                }, [p.icon]), a("div", {
                    class: [o.tabsLabel, "tabsLabel"]
                }, [a("span", {
                    class: o.titleContent
                }, [p.value])])]),
                content: () => a(fe, null, [e && T(e)])
            }, null))) ? t : {
                default: () => [t]
            }), s && a("div", {
                class: o.agreedBox
            }, [a("div", {
                class: o.agreedWrap
            }, [a("div", {
                class: {
                    [o.checkWrapper]: !0
                }
            }, [a(ie, {
                modelValue: n.value,
                "onUpdate:modelValue": p => n.value = p,
                onChange: p => {
                    S(p)
                }
            }, null)]), a("span", {
                class: o.tips
            }, [f("lobby.modal.force.main_not_show_again_today")])])])])
        }
    }
}), ct = "_modal_a154y_25", rt = "_hasBtn_a154y_41", lt = "_common_bganimation_a154y_1", X = {
    modal: ct,
    hasBtn: rt,
    common_bganimation: lt
}, [it] = q("messagePopup"), It = ee({
    name: it,
    setup() {
        const {
            dialogsStates: {
                messagePopup: y
            }
        } = V();
        return () => {
            const {
                hasTodayNoMorePopup: B
            } = C();
            return a(me, {
                show: y.show,
                "onUpdate:show": v => y.show = v,
                class: [X.modal, B ? X.hasBtn : null],
                onClose: () => V().close("messagePopup")
            }, {
                title: () => null,
                default: () => a(st, null, null)
            })
        }
    }
});
export {
    It as
    default
};
//# sourceMappingURL=MessagePopupIndex.ClEcL59W.js.map