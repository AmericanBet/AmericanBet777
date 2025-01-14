import {
    c as h,
    d as Ve,
    w as te,
    k as E,
    a5 as e,
    r as w,
    F as A,
    n as fe,
    f as H,
    o as Ye,
    aN as Xe,
    bG as Ze,
    ax as Je,
    bz as ie,
    br as ce
} from "../vendors/vendor-@vue.CBvhRkQp.js";
import {
    ar as he,
    H as ea,
    ap as M,
    as as _e,
    at as qe,
    l as x,
    p as F,
    au as aa,
    av as W,
    aw as Q,
    m as oe,
    ax as ta,
    ay as Le,
    az as oa,
    aA as de,
    aB as na,
    a as V,
    O as Ce,
    aC as Pe,
    T as ne,
    q as S,
    aD as sa,
    aE as Fe,
    aF as la,
    aG as ra,
    U as ua,
    V as ia,
    I as X,
    aH as ca,
    e as me,
    aI as da,
    aJ as ma,
    al as ga,
    aK as pa,
    aL as G,
    aM as k,
    am as Ee,
    v as we,
    aN as Ae,
    aO as ee,
    c as va,
    aP as ba,
    aQ as fa,
    aR as ya,
    aS as Y,
    aT as xe,
    aU as ha,
    r as _a,
    aV as Se,
    aW as Ca,
    aX as Pa,
    Q as Ie,
    a6 as Ne,
    $ as wa,
    aY as Ra,
    aZ as Ea,
    an as Te,
    N as Sa,
    _ as Ia,
    a3 as $e,
    Z as Ta,
    a7 as ka,
    a_ as Va,
    a$ as qa,
    b0 as La,
    M as Fa
} from "./main.async.-NbSL2aO.js";
import {
    R as U
} from "./main.Dmn05Mj-.js";
import "../vendors/vendor-bignumber.BRr1dcww.js";
import {
    L as Aa,
    J as Oe,
    e as Ue
} from "../vendors/vendor-default.p-wnugzB.js";
import {
    u as xa
} from "../vendors/vendor-stable.Cg92BvZJ.js";
import {
    m as K,
    g as Na,
    v as $a,
    d as Oa
} from "../vendors/vendor-lodash.CYk3mlCa.js";
import {
    u as Be
} from "./usePlaceholder.C-9WdKmR.js";
import "../vendors/vendor-swiper.BzK1hN__.js";
import {
    P as je
} from "./Password.BjkfIuVQ.js";
import {
    V as ae
} from "./VerifyCode.BuOB841X.js";
import {
    v as Ua,
    a as Ba,
    b as ja
} from "./validate.Co9skrzt.js";
import {
    E as Ga
} from "./Email.DRREz_nV.js";
import {
    P as Da
} from "./Phone.CllSOksl.js";
import {
    P as za
} from "./PasteIndex.pg7bLYHu.js";
import {
    u as ge
} from "./useRegister.wA9mtb-g.js";
import {
    R as Ha
} from "./Realname.CXgW-xBI.js";
import {
    P as Ma
} from "./PasswordConfirm.BtBO-0xi.js";
import {
    T as Wa
} from "./ThirdPartyLoginBind.DoDfAqYd.js";

function Re() {
    const t = xa();
    return {
        query: h(() => {
            const {
                id: a,
                cid: u
            } = he().urlParams, {
                chtpf: o,
                chtjid: l,
                currency: v
            } = ea(t.query, ["chtpf", "chtjid", "currency"]);
            return {
                id: a,
                cid: u,
                chtpf: o,
                chtjid: l,
                currency: v
            }
        })
    }
}

function Ka() {
    const t = M(),
        d = _e(),
        a = qe(),
        {
            query: u
        } = Re();
    return {
        initDefaultCurrency: () => {
            var n, s;
            const l = a.siteCurrencyList;
            return l.length && [(n = t.ipBindInfo) == null ? void 0 : n.currency, u.value.currency, d.ipCheck.recommendCurrency, (s = a.currentTryCurrency) == null ? void 0 : s.currencyCode, l[0].currencyCode].filter(Boolean).find(p => l.find(m => m.currencyCode === p)) || ""
        }
    }
}

function Ge(t) {
    const d = x(),
        a = F(),
        {
            query: u
        } = Re(),
        o = Ve(t),
        l = Aa(),
        v = M(),
        n = aa(),
        s = W(),
        {
            defaultUrl: p
        } = he(),
        m = h(() => [d.state.mode, d.state.type, d.state.subType]);
    te([m.value], () => {
        s.value.phone.splitRender || (o.phoneCode = ""), s.value.email.splitRender || (o.emailCode = "")
    });
    const i = h(() => n.format(a.value.phone ? l.value.account : l.value.phone)),
        c = h(() => {
            var b;
            return (b = a.value.email ? l.value.account : l.value.email) != null ? b : ""
        }),
        f = b => {
            for (const r of Reflect.ownKeys(b)) {
                const P = Na(b, r);
                ($a(P) || P === "") && Reflect.deleteProperty(b, r)
            }
        };
    return {
        form: o,
        fmtPhone: i,
        fmtEmail: c,
        registerPayload: () => {
            var P;
            const b = l.value,
                r = {
                    realName: b.realName,
                    telegram: b.telegram,
                    cpfCode: b.cpfCode,
                    currency: b.currency || d.state.currency,
                    inviterId: "".concat(b.inviterId || ((P = v.ipBindInfo) == null ? void 0 : P.promoterUserIdx) || "")
                };
            switch (u.value.cid ? K(r, {
                agent_type: 1,
                agent_code: u.value.cid
            }) : u.value.id && K(r, {
                agent_type: 2,
                agent_code: u.value.id
            }), u.value.chtjid && u.value.chtpf && K(r, {
                chtpf: u.value.chtpf,
                chtjid: u.value.chtjid
            }), r.inviterId && K(r, {
                inviterId: +r.inviterId
            }), p && K(r, {
                registerLink: p
            }), !0) {
                case a.value.phoneCode:
                case a.value.phonePass:
                case a.value.phonePassCode:
                    switch (r.email = c.value, r.emailCode = b.emailCode, r.mobilePhoneNumber = i.value, r.registerType = Q.PhonePassCode, !0) {
                        case a.value.phoneCode:
                            r.verificationCode = b.phoneCode;
                            break;
                        case a.value.phonePass:
                            r.passwd = b.userpass;
                            break;
                        case a.value.phonePassCode:
                            r.verificationCode = b.phoneCode, r.passwd = b.userpass
                    }
                    break;
                case a.value.emailCode:
                case a.value.emailPass:
                case a.value.emailPassCode:
                    switch (r.mobilePhoneNumber = i.value, r.verificationCode = b.phoneCode, r.email = c.value, r.registerType = Q.EmailPassCode, !0) {
                        case a.value.emailCode:
                            r.emailCode = b.emailCode;
                            break;
                        case a.value.emailPass:
                            r.passwd = b.userpass;
                            break;
                        case a.value.emailPassCode:
                            r.emailCode = b.emailCode, r.passwd = b.userpass
                    }
                    break;
                default:
                    r.mobilePhoneNumber = i.value, r.verificationCode = b.phoneCode, r.email = c.value, r.emailCode = b.emailCode, r.platformId = b.account, r.passwd = b.userpass, r.registerType = 0, a.value.thirdParty && (r.platformId = o.account, r.passwd = o.userpass, r.access_token = d.state.openOptions.access_token, r.requester_type = d.state.openOptions.requester_type);
                    break
            }
            return f(r), r
        },
        loginPayload: () => {
            const b = l.value,
                r = {
                    loginType: d.state.subType
                };
            switch (!0) {
                case a.value.phoneCode:
                    r.phone = i.value, r.captcha = b.phoneCode;
                    break;
                case a.value.phonePass:
                    r.phone = i.value, r.userpass = b.userpass;
                    break;
                case a.value.emailCode:
                    r.email = c.value, r.captcha = b.emailCode;
                    break;
                case a.value.emailPass:
                    r.email = c.value, r.userpass = b.userpass;
                    break;
                default:
                    r.username = b.account, r.userpass = b.userpass;
                    break
            }
            return f(r), r
        }
    }
}

function Qa(t) {
    const d = M(),
        a = oe(),
        {
            Close: u,
            Open: o,
            OpenRequired: l,
            OpenRequiredVerify: v
        } = oa,
        n = s => {
            const p = Number(s),
                m = p >= o,
                i = p >= l,
                c = p >= v;
            return {
                visible: m,
                required: i,
                verify: c
            }
        };
    return h(() => {
        var i, c, f;
        const s = (i = a.systemInfos) == null ? void 0 : i.loginRegister,
            p = (c = a.systemInfos) == null ? void 0 : c.modifyPromoteCurrency;
        let m = n(s == null ? void 0 : s.inviteCodeUnchangeable);
        return (f = d.ipBindInfo) != null && f.promoterUserIdx || (m = n(u)), {
            realName: n(s == null ? void 0 : s.realName),
            telegram: n(s == null ? void 0 : s.telegram),
            cpf: n(t.value === "BRL" ? s == null ? void 0 : s.cpf : u),
            currency: n(s == null ? void 0 : s.currency),
            invite: n(s == null ? void 0 : s.inviteCode),
            inviteCodeUnchangeable: m,
            modifyPromoteCurrency: p === ta.OPEN,
            defuPasswordPlainText: (s == null ? void 0 : s.passwordDefaultPlainText) === Le.OPEN
        }
    })
}

function De() {
    const t = W();
    return h(() => {
        var v;
        const {
            homeLayoutInfos: d
        } = oe();
        let a = (v = d == null ? void 0 : d.commonConfig) == null ? void 0 : v.registerLogin;
        a || (a = "1");
        const u = Number(a),
            o = t.value.usePageing,
            l = d == null ? void 0 : d.loginSlogan;
        switch (u) {
            case de.Theme3:
                return {
                    logo: !0,
                    tabIcon: !0,
                    line: o,
                    slogan: l,
                    theme: u
                };
            case de.Theme2:
                return {
                    logo: !0,
                    tabIcon: !1,
                    line: !0,
                    slogan: void 0,
                    theme: u
                };
            case de.Theme1:
            default:
                return {
                    logo: !1,
                    tabIcon: !0,
                    line: o,
                    slogan: void 0,
                    theme: u
                }
        }
    })
}
const [Ya] = S("form-item-cpf"), Xa = E({
    name: Ya,
    props: na,
    emits: ["update:modelValue"],
    setup(t, {
        emit: d
    }) {
        const {
            t: a
        } = V(), u = h({
            get: () => t.modelValue,
            set: n => d("update:modelValue", l(n))
        }), o = h(() => t.placeholder ? t.placeholder : a("lobby.modal.login.placeholder.cpfCode")), l = n => n.replace(/\D/g, ""), v = (n = "") => {
            if (!t.required && !n) return !0;
            const s = Ua(n);
            return s || !0
        };
        return () => {
            var n;
            return e(ne, {
                name: t.name,
                rules: (n = t.rules) != null ? n : v,
                required: t.showRequired
            }, {
                default: () => [e(Ce, {
                    value: u.value,
                    "onUpdate:value": s => u.value = s,
                    clearable: t.clearable,
                    "data-input-name": t.name,
                    placeholder: o.value,
                    onFocus: t.onFocus,
                    onBlur: t.onBlur,
                    maxlength: 11,
                    type: "tel"
                }, {
                    prefix: () => e(Pe, {
                        icon: "/lobby_asset/common/web/common/input_icon_cpf.svg"
                    }, null)
                })]
            })
        }
    }
}), Za = "_invite_1t47z_25", Ja = "_common_bganimation_1t47z_1", et = {
    invite: Za,
    common_bganimation: Ja
}, [at] = S("form-item-invite"), tt = E({
    name: at,
    props: sa,
    emits: ["update:modelValue"],
    setup(t, {
        emit: d
    }) {
        const {
            t: a
        } = V(), u = h({
            get: () => t.modelValue,
            set: s => d("update:modelValue", o(s))
        }), o = s => s.replace(/\D/g, "").substring(0, 16), l = h(() => t.placeholder ? t.placeholder : a("lobby.modal.register.invitetAccountRequired")), v = (s = "") => {
            if (s = o(s), !t.required && !s) return !0;
            if (t.required && !Fe(s)) return a("lobby.modal.register.invitetAccountRequired");
            const p = Ba(s, [0, 16]);
            return p || !0
        }, n = h(() => {
            if (t.showHelp) return a("lobby.modal.register.selectCurrencyTips")
        });
        return () => {
            var s;
            return e(ne, {
                name: t.name,
                class: et.invite,
                rules: (s = t.rules) != null ? s : v,
                required: t.showRequired,
                help: n.value
            }, {
                default: () => [e(Ce, {
                    value: u.value,
                    "onUpdate:value": p => u.value = p,
                    disabled: t.disabled,
                    clearable: t.clearable,
                    "data-input-name": t.name,
                    maxlength: 16,
                    placeholder: l.value,
                    onFocus: t.onFocus,
                    onBlur: t.onBlur
                }, {
                    prefix: () => e(Pe, {
                        icon: "/lobby_asset/common/web/common/input_icon_yqm.svg"
                    }, null),
                    suffix: () => {
                        if (!t.disabled) return e(za, {
                            onPaste: p => {
                                p && (u.value = p)
                            }
                        }, null)
                    }
                })]
            })
        }
    }
}), [ot] = S("form-item-telegram"), nt = E({
    name: ot,
    props: la,
    emits: ["update:modelValue"],
    setup(t, {
        emit: d
    }) {
        const {
            t: a
        } = V(), u = h({
            get: () => t.modelValue,
            set: n => d("update:modelValue", o(n))
        }), o = n => n.replace(new RegExp("[^a-zA-Z0-9_]", "g"), ""), l = h(() => t.placeholder ? t.placeholder : a("lobby.center.setting.telegramPlaceholder", {
            c: a("lobby.center.setting.telegram")
        })), v = (n = "") => {
            if (!t.required && !n) return !0;
            const s = ja(n);
            return s || !0
        };
        return () => {
            var n;
            return e(ne, {
                name: t.name,
                required: t.showRequired,
                rules: (n = t.rules) != null ? n : v
            }, {
                default: () => [e(Ce, {
                    value: u.value,
                    "onUpdate:value": s => u.value = s,
                    clearable: t.clearable,
                    disabled: t.disabled,
                    "data-input-name": t.name,
                    placeholder: l.value,
                    onFocus: t.onFocus,
                    onBlur: t.onBlur
                }, {
                    prefix: () => e(Pe, {
                        icon: "/lobby_asset/common/web/common/input_icon_telegram.svg",
                        svgGo: !1
                    }, null)
                })]
            })
        }
    }
}), st = "_selectOptions_842vb_25", lt = "_selectOptionsIcon_842vb_29", rt = "_text_842vb_35", ut = "_activeIcon_842vb_41", it = "_common_bganimation_842vb_1", pe = {
    selectOptions: st,
    selectOptionsIcon: lt,
    text: rt,
    activeIcon: ut,
    common_bganimation: it
}, [ct] = S("form-item-currency"), dt = E({
    name: ct,
    props: ra,
    emits: ["update:modelValue"],
    setup(t, {
        emit: d
    }) {
        const {
            t: a
        } = V(), u = h({
            get: () => t.modelValue,
            set: i => d("update:modelValue", i)
        }), o = qe(), l = h(() => o.siteCurrencyList.find(i => i.currencyCode === u.value)), v = i => i.formatDisplayName, n = h(() => {
            if (l.value) return v(l.value)
        }), s = h(() => t.placeholder ? t.placeholder : a("lobby.modal.register.selectCountry")), p = (i = "") => !t.required && !i ? !0 : t.required && !Fe(i) ? s.value : !0, m = h(() => {
            if (t.showHelp) return a("lobby.modal.register.selectCountryError")
        });
        return () => {
            var i;
            return e(ne, {
                name: t.name,
                rules: (i = t.rules) != null ? i : p,
                required: t.showRequired,
                showHelpIcon: !1,
                help: m.value
            }, {
                default: () => [e(ua, {
                    size: "large",
                    key: n.value,
                    allowClear: !1,
                    modelValue: u.value,
                    "onUpdate:modelValue": c => u.value = c,
                    placeholder: t.placeholder,
                    readonly: t.disabled,
                    onFocus: t.onFocus,
                    onBlur: t.onBlur,
                    offset: [0, 0]
                }, {
                    default: () => [o.siteCurrencyList.map(c => e(ia, {
                        label: v(c),
                        value: c.currencyCode,
                        key: c.currencyCode
                    }, {
                        default: () => [e("div", {
                            class: pe.selectOptions
                        }, [e(X, {
                            useSkeleton: !0,
                            class: pe.selectOptionsIcon,
                            src: c.icon
                        }, null), v(c)])]
                    }))],
                    prefix: () => {
                        var c;
                        return (c = l.value) != null && c.icon ? e(X, {
                            useSkeleton: !0,
                            class: pe.activeIcon,
                            src: l.value.icon
                        }, null) : null
                    }
                })]
            })
        }
    }
}), mt = "_tabSubTitle_8e8uy_25", gt = "_thirdPartyTitle_8e8uy_32", pt = "_thirdPartyAccount_8e8uy_39", vt = "_common_bganimation_8e8uy_1", ve = {
    tabSubTitle: mt,
    thirdPartyTitle: gt,
    thirdPartyAccount: pt,
    common_bganimation: vt
}, [bt] = S("sub-title"), ye = E({
    name: bt,
    setup() {
        const t = x(),
            d = F(),
            a = ca(),
            u = W(d.value.mode),
            {
                t: o
            } = V(),
            l = h(() => {
                var n, s, p;
                switch (t.state.openOptions.requester_type) {
                    case me.FACEBOOK:
                        return {
                            text: o("lobby.modal.register.thirdAccountLabel", {
                                thirdWay: "Facebook"
                            }),
                            account: da((n = t.state.openOptions.id) != null ? n : "")
                        };
                    case me.GOOGLE:
                        return {
                            text: o("lobby.modal.register.thirdAccountLabel", {
                                thirdWay: "Google"
                            }),
                            account: (s = t.state.openOptions.email) != null ? s : ""
                        };
                    case me.LINE:
                        return {
                            text: o("lobby.modal.register.thirdAccountLabel", {
                                thirdWay: "Line"
                            }),
                            account: (p = t.state.openOptions.email) != null ? p : ""
                        };
                    default:
                        return {}
                }
            }),
            v = h(() => {
                const {
                    Account: n,
                    Phone: s,
                    Email: p
                } = ma, m = "".concat(o("lobby.modal.loginRegister.support")), i = "".concat(o("lobby.modal.loginRegister.onlySupport")), c = "".concat(o("lobby.modal.loginRegister.login")), f = "".concat(o("lobby.modal.loginRegister.register")), y = {
                    [n]: o("lobby.modal.loginRegister.account"),
                    [s]: o("lobby.modal.loginRegister.phoneNumber"),
                    [p]: o("lobby.modal.loginRegister.email")
                }, C = u.value.onlyOneEnable ? i : m, b = u.value.enables.map(R => y[R]).join("/"), r = d.value.login ? c : f, P = a.isCN ? "" : " ";
                return "".concat(C).concat(P).concat(b).concat(P).concat(r)
            });
        return () => e("div", {
            class: ve.tabSubTitle
        }, [t.state.openOptions.thirdParty ? [e("p", {
            class: ve.thirdPartyTitle
        }, [o("lobby.modal.register.thirdLabel")]), e("div", {
            class: ve.thirdPartyAccount
        }, [e("span", null, [l.value.text]), e("span", null, [l.value.account])])] : v.value])
    }
}), ft = "_switchSubtype_yssvz_25", yt = "_list_yssvz_25", ht = "_item_yssvz_40", _t = "_switchInner_yssvz_40", Ct = "_icon_yssvz_43", Pt = "_checked_yssvz_82", wt = "_common_bganimation_yssvz_1", D = {
    switchSubtype: ft,
    list: yt,
    item: ht,
    switchInner: _t,
    icon: Ct,
    checked: Pt,
    common_bganimation: wt
}, [Rt] = S("login-register-switch-subtype"), ze = E({
    name: Rt,
    props: {
        account: {
            type: String,
            required: !0
        }
    },
    setup(t) {
        const {
            t: d
        } = V(), a = F(), u = ga(), o = x(), l = W(o.state.mode), {
            confuse: v
        } = pa(h(() => t.account)), n = () => {
            const {
                login: p,
                account: m,
                phone: i,
                email: c,
                emailPass: f,
                phonePass: y,
                accountPass: C,
                phoneCode: b,
                emailCode: r
            } = a.value, P = l.value.phone, R = l.value.email, O = d("lobby.modal.loginRegister.passwdLogin"), B = d("lobby.modal.loginRegister.captchaLogin"), Z = d("lobby.modal.loginRegister.passwdRegister"), se = d("lobby.modal.loginRegister.captchaRegister"), le = Ee.EUROPEAN_AMERICAN === u.skinType, re = Ee.STAKE === u.skinType;
            return [{
                checked: f || y || C,
                icon: le || re ? "login_icon_mm02" : "login_icon_mm",
                text: p ? O : Z,
                onClick: () => {
                    if (i || m) {
                        const {
                            PhonePass: _
                        } = Q;
                        o.setSubType(_), o.state.userPhoneVerify = _
                    }
                    if (c || m) {
                        const {
                            EmailPass: _
                        } = Q;
                        o.setSubType(_), o.state.userEmailVerify = _
                    }
                }
            }, {
                checked: b || r,
                icon: "login_icon_yzm",
                text: p ? B : se,
                onClick: () => {
                    const {
                        Phone: _,
                        PhonePassCode: I,
                        Email: j,
                        EmailPassCode: g
                    } = Q;
                    if (m && P.enableCaptcha && !P.splitRender) {
                        o.setType(G.Phone), P.defuVerifyCodePass ? (o.setSubType(I), o.state.userPhoneVerify = I) : (o.setSubType(_), o.state.userPhoneVerify = _);
                        return
                    }
                    if (m && R.enableCaptcha && !R.splitRender) {
                        o.setType(G.Email), R.defuVerifyCodePass ? (o.setSubType(g), o.state.userEmailVerify = g) : (o.setSubType(j), o.state.userEmailVerify = j);
                        return
                    }
                    if (i) {
                        o.setSubType(_), o.state.userPhoneVerify = _;
                        return
                    }
                    if (c) {
                        o.setSubType(j), o.state.userEmailVerify = j;
                        return
                    }
                }
            }]
        }, s = h(() => {
            const {
                account: p
            } = a.value, m = l.value.phone, i = l.value.email, {
                enablePhone: c,
                enableEmail: f,
                onlyAccountEnable: y
            } = l.value;
            if (y || p && t.account) return !1;
            const C = m.enableCaptcha && m.enablePassword,
                b = i.enableCaptcha && i.enablePassword,
                r = !m.forceCaptcha && C,
                P = !i.forceCaptcha && b;
            return {
                [G.Phone]: {
                    [k.Login]: C,
                    [k.Register]: r
                },
                [G.Email]: {
                    [k.Login]: b,
                    [k.Register]: P
                },
                [G.Account]: {
                    [k.Login]: c && m.enableCaptcha || f && i.enableCaptcha,
                    [k.Register]: c && m.enableCaptcha || f && i.enableCaptcha
                },
                [G.ThirdParty]: {
                    [k.Login]: !1,
                    [k.Register]: !1
                }
            }[a.value.type][a.value.mode]
        });
        return () => e("div", {
            class: D.switchSubtype,
            "data-theme-indent": v.value
        }, [s.value && e("ul", {
            class: D.list
        }, [n().map(p => e("li", {
            class: [{
                [D.item]: !0,
                [D.checked]: p.checked
            }]
        }, [e("span", {
            class: D.switchInner,
            onClick: () => {
                p.checked || p.onClick()
            }
        }, [e("span", {
            class: D.icon
        }, [e(X, {
            src: "/lobby_asset/common/web/login/".concat(p.icon, ".svg")
        }, null)]), p.text])]))])])
    }
}), Et = "_loginRegisterForm_jggxe_25", St = "_common_bganimation_jggxe_1", He = {
    loginRegisterForm: Et,
    common_bganimation: St
}, [It] = S("pages-dialogs-form-login"), Tt = E({
    name: It,
    setup() {
        const t = F(),
            d = x(),
            a = Be(),
            u = w(""),
            o = w(!0),
            l = w(!1),
            {
                validate: v,
                validateField: n,
                setFieldError: s,
                resetField: p
            } = Oe(),
            {
                form: m,
                fmtEmail: i,
                fmtPhone: c,
                loginPayload: f
            } = Ge({
                account: "",
                username: "",
                userpass: "",
                phone: "",
                email: "",
                phoneCode: "",
                emailCode: ""
            });
        te(() => [m.account, m.userpass], () => {
            u.value = ""
        });
        const y = (r = 5e3) => {
            setTimeout(() => {
                u.value = ""
            }, r)
        };
        we({
            submit: async () => {
                if (t.value.loading) return;
                if (u.value) {
                    s("userpass", u.value);
                    return
                }
                const r = await v();
                if (!(r != null && r.valid)) return;
                d.setLoading();
                const P = f();
                try {
                    await va().login(P, {
                        async onUsernameOrUserpassError(R) {
                            u.value = R, l.value = !0, y(), fe(async () => {
                                s("userpass", u.value), d.delLoading()
                            })
                        }
                    }), ba().closeLoginRegister(), d.delLoading()
                } catch (R) {
                    d.delLoading()
                }
            }
        });
        const b = {
            Account: () => e(A, null, [e(ye, null, null), e(Ae, {
                name: "account",
                showRequired: !0,
                modelValue: m.account,
                "onUpdate:modelValue": r => m.account = r,
                onValidate: r => o.value = r,
                onFillUserpass: r => {
                    m.userpass = r, setTimeout(() => {
                        m.userpass ? n("userpass") : p("userpass"), m.account ? n("account") : p("account")
                    })
                }
            }, null), e(ze, {
                account: m.account
            }, null)]),
            Password: () => e(je, {
                required: !0,
                showRequired: !0,
                name: "userpass",
                modelValue: m.userpass,
                "onUpdate:modelValue": r => m.userpass = r,
                visiblePassword: l.value,
                "onUpdate:visiblePassword": r => l.value = r,
                placeholder: a.value.userpass
            }, null),
            PhoneCode: () => e(ae, {
                required: !0,
                showRequired: !0,
                mode: "phone",
                name: "phoneCode",
                modelValue: m.phoneCode,
                "onUpdate:modelValue": r => m.phoneCode = r,
                target: c.value,
                disabled: !o.value,
                placeholder: a.value.phoneCode,
                key: t.value.subType + t.value.type,
                createMode: ee.LoginIntegration
            }, null),
            EmailCode: () => e(ae, {
                required: !0,
                showRequired: !0,
                mode: "email",
                name: "emailCode",
                modelValue: m.emailCode,
                "onUpdate:modelValue": r => m.emailCode = r,
                target: i.value,
                disabled: !o.value,
                placeholder: a.value.emailCode,
                key: t.value.subType + t.value.type,
                createMode: ee.LoginIntegration
            }, null)
        };
        return () => {
            const {
                accountPass: r,
                phonePass: P,
                emailPass: R,
                phoneCode: O,
                emailCode: B
            } = t.value;
            return e("form", {
                class: He.loginRegisterForm
            }, [e(b.Account, null, null), (r || P || R) && e(b.Password, null, null), O && e(b.PhoneCode, null, null), B && e(b.EmailCode, null, null)])
        }
    }
});

function kt() {
    const t = M();
    return {
        getIPBindInfo: async () => {
            const {
                id: a = "",
                cid: u = "",
                currency: o = ""
            } = he().urlParams;
            if (t.ipBindInfo) return t.ipBindInfo;
            const [, l] = await Ue(fa({
                agentName: a,
                channelId: Number(u || 0),
                currency: o
            })), v = l == null ? void 0 : l.data.data;
            return v && t.setIPBindInfo(v), t.ipBindInfo
        }
    }
}

function Vt(t) {
    const d = o => {
            if (!t.value) return null;
            let l = ".lobby-form-item--has-error";
            return o && (l = ".lobby-form-item--".concat(o)), t.value.querySelector(l)
        },
        a = o => {
            fe(() => {
                var l;
                (l = d(o)) == null || l.scrollIntoView({
                    block: "center",
                    inline: "nearest"
                })
            })
        };
    return {
        intoView: a,
        intoViewFocus: o => {
            a(o), fe(() => {
                const l = d(o);
                let v = l == null ? void 0 : l.getAttribute("data-item-name");
                o && (v = o);
                const n = l == null ? void 0 : l.querySelector('[data-input-name="'.concat(v, '"]'));
                n == null || n.focus()
            })
        }
    }
}
const qt = "_suggestion_17z28_25",
    Lt = "_image_17z28_32",
    Ft = "_texts_17z28_46",
    At = "_title_17z28_52",
    xt = "_tips_17z28_55",
    Nt = "_item_17z28_58",
    $t = "_common_bganimation_17z28_1",
    z = {
        suggestion: qt,
        image: Lt,
        texts: Ft,
        title: At,
        tips: xt,
        item: Nt,
        common_bganimation: $t
    },
    [Ot] = S("login-register-suggestion"),
    Ut = E({
        name: Ot,
        props: {
            modelValue: {
                type: String,
                default: ""
            },
            validate: {
                type: Boolean,
                default: !0
            }
        },
        emits: ["update:modelValue", "update:validate"],
        setup(t, {
            emit: d
        }) {
            const {
                t: a
            } = V(), u = x(), o = w(), l = w(!0), v = h({
                get: () => t.modelValue,
                set: n => d("update:modelValue", n)
            });
            return H(() => {
                o.value = u.state.userSuggestions[v.value], l.value = typeof o.value > "u", d("update:validate", l.value)
            }), () => {
                var s, p, m;
                if (l.value) return;
                let n = "".concat(a("lobby.modal.loginRegister.accountExisted"));
                return (s = o.value) != null && s.length || (n = n.replace(/[，,]$/, "")), e("div", {
                    class: z.suggestion
                }, [e(X, {
                    class: z.image,
                    src: "/lobby_asset/common/web/common/comm_icon_tip1.png"
                }, null), e("div", {
                    class: z.texts
                }, [e("span", {
                    class: z.title
                }, [n]), (p = o.value) != null && p.length ? e("span", {
                    class: z.tips
                }, [a("lobby.modal.loginRegister.suggestion")]) : null, (m = o.value) == null ? void 0 : m.map(i => e("span", {
                    class: z.item,
                    onClick: () => v.value = i
                }, [i]))])])
            }
        }
    }),
    [Bt] = S("pages-dialogs-form-register"),
    jt = E({
        name: Bt,
        setup() {
            const {
                validate: t,
                validateField: d
            } = Oe(), {
                form: a,
                fmtPhone: u,
                fmtEmail: o,
                registerPayload: l
            } = Ge({
                account: "",
                username: "",
                confirmPassword: "",
                userpass: "",
                phone: "",
                phoneCode: "",
                email: "",
                emailCode: "",
                realName: "",
                telegram: "",
                cpfCode: "",
                currency: "",
                inviterId: ""
            }), v = w(), n = F(), {
                query: s
            } = Re(), {
                getIPBindInfo: p
            } = kt(), m = Be(), i = x(), c = W(n.value.mode), {
                initDefaultCurrency: f
            } = Ka(), y = Qa(h(() => a.currency)), {
                intoView: C,
                intoViewFocus: b
            } = Vt(v);
            ya("CONFIG_CHANGE_SUCCESS", () => t());
            const r = w(!0),
                P = w(!0),
                R = w(!1),
                O = w(!1),
                B = w(!1),
                Z = w(!1),
                se = h(() => !!a.inviterId && !s.value.id && !s.value.cid),
                le = () => {
                    var g, T;
                    if (n.value.thirdParty && (a.account = (g = i.state.openOptions.platformId) != null ? g : "", a.userpass = (T = i.state.openOptions.passwd) != null ? T : "", !Oa(I.value, !0))) {
                        i.state.currency = a.currency;
                        const N = l();
                        Y().toRegisterConfirm(N)
                    }
                };
            H(() => {
                _e().ipChecked && (a.currency = f())
            }), Ye(() => {
                p().then(g => {
                    a.currency = f(), Z.value = (!!s.value.id || !!s.value.cid) && !y.value.modifyPromoteCurrency && !!(g != null && g.currency), le();
                    const T = g == null ? void 0 : g.promoterUserIdx;
                    T && (a.inviterId = "".concat(T), y.value.inviteCodeUnchangeable.visible && (B.value = !0))
                }), R.value = y.value.defuPasswordPlainText
            }), H(() => O.value = R.value), H(() => i.state.currency = a.currency);
            const re = g => (Reflect.deleteProperty(g, "verificationCode"), Reflect.deleteProperty(g, "emailCode"), g);
            we({
                submit: async () => {
                    if (n.value.loading) return;
                    const g = await t();
                    if (xe().reportRegisterSubmit(g.errors), !(g != null && g.valid)) return b();
                    if (!r.value) return b("account");
                    const T = c.value.phone,
                        N = c.value.email;
                    i.setLoading(), await ha(500);
                    let L = l();
                    try {
                        if (n.value.account) await ge().register(L);
                        else switch (L = await ge().checkRegister(L), L = re(L), !0) {
                            case n.value.thirdParty:
                            case (n.value.phone && T.confirm):
                            case (n.value.email && N.confirm):
                                {
                                    Y().toRegisterConfirm(L);
                                    break
                                }
                            case (!T.confirm && n.value.phonePass):
                            case (!T.confirm && n.value.phonePassCode):
                            case (!N.confirm && n.value.emailPass):
                            case (!N.confirm && n.value.emailPassCode):
                                {
                                    await ge().register(L);
                                    break
                                }
                            case (!T.confirm && n.value.phoneCode):
                            case (!N.confirm && n.value.emailCode):
                                L.passwd = "", Y().toRegisterPassword(L)
                        }
                        i.delLoading()
                    } catch (Ke) {
                        i.delLoading();
                        const {
                            code: Qe
                        } = _a(Ke);
                        switch (Qe) {
                            case U.CONFIG_CHANGE_PASSWORD_FORMAT_ERR:
                                Se("CONFIG_CHANGE_ERR").emit();
                                break;
                            case U.PHONE_SECURITY_CONFIG_EXPIRED:
                            case U.EMAIL_SECURITY_CONFIG_EXPIRED:
                            case U.EMAIL_CAPTCHA_EMPTY:
                            case U.PHONE_CAPTCHA_EMPTY:
                            case U.CONFIG_CHANGE_ERR:
                                {
                                    a.phoneCode = "",
                                    a.emailCode = "",
                                    i.state.userPhoneVerify = null,
                                    i.state.userEmailVerify = null,
                                    Se("CONFIG_CHANGE_ERR").emit();
                                    break
                                }
                            case U.REGISTER_USERNAME_EXISTED_ERROR:
                                {
                                    b("account");
                                    break
                                }
                        }
                    }
                }
            });
            const ue = {
                    attrs: {
                        "data-sensors-click": !0,
                        id: "sendVerificationCodeButton"
                    }
                },
                _ = {
                    Account: () => e(A, null, [e(ye, null, null), e(Ae, {
                        required: !0,
                        name: "account",
                        showRequired: !0,
                        modelValue: a.account,
                        "onUpdate:modelValue": g => a.account = g,
                        onFocus: () => C("account"),
                        onValidate: g => {
                            P.value = g, g && a.userpass && d("userpass")
                        }
                    }, null), e(ze, {
                        account: a.account
                    }, null), P.value && e(Ut, {
                        modelValue: a.account,
                        "onUpdate:modelValue": g => a.account = g,
                        validate: r.value,
                        "onUpdate:validate": g => r.value = g
                    }, null)]),
                    Password: () => e(A, null, [e(je, {
                        required: !0,
                        useConfig: !0,
                        showRequired: !0,
                        name: "userpass",
                        account: a.account,
                        modelValue: a.userpass,
                        "onUpdate:modelValue": g => a.userpass = g,
                        visiblePassword: R.value,
                        "onUpdate:visiblePassword": g => R.value = g,
                        placeholder: m.value.userpass,
                        onFocus: () => C("userpass"),
                        onChange: g => {
                            g && a.confirmPassword && d("confirmPassword")
                        }
                    }, null), !R.value && e(Ma, {
                        required: !0,
                        showRequired: !0,
                        name: "confirmPassword",
                        password: a.userpass,
                        modelValue: a.confirmPassword,
                        "onUpdate:modelValue": g => a.confirmPassword = g,
                        placeholder: m.value.confirmPassword,
                        visiblePassword: O.value,
                        "onUpdate:visiblePassword": g => O.value = g,
                        onFocus: () => C("confirmPassword")
                    }, null)]),
                    Phone: () => e(Da, {
                        required: !0,
                        showRequired: !0,
                        name: "phone",
                        modelValue: a.phone,
                        "onUpdate:modelValue": g => a.phone = g,
                        placeholder: m.value.phone,
                        onFocus: () => C("phone")
                    }, null),
                    PhoneCode: () => e(ae, {
                        required: !0,
                        showRequired: !0,
                        mode: "phone",
                        name: "phoneCode",
                        sendButtonControl: ue,
                        modelValue: a.phoneCode,
                        "onUpdate:modelValue": g => a.phoneCode = g,
                        target: u.value,
                        placeholder: m.value.phoneCode,
                        key: n.value.subType + n.value.type,
                        createMode: ee.RegisterIntegration,
                        onFocus: () => C("phoneCode")
                    }, null),
                    Email: () => e(Ga, {
                        required: !0,
                        showRequired: !0,
                        name: "email",
                        modelValue: a.email,
                        "onUpdate:modelValue": g => a.email = g,
                        placeholder: m.value.email,
                        onFocus: () => C("email")
                    }, null),
                    EmailCode: () => e(ae, {
                        required: !0,
                        showRequired: !0,
                        mode: "email",
                        name: "emailCode",
                        sendButtonControl: ue,
                        modelValue: a.emailCode,
                        "onUpdate:modelValue": g => a.emailCode = g,
                        target: o.value,
                        placeholder: m.value.emailCode,
                        key: n.value.subType + n.value.type,
                        createMode: ee.RegisterIntegration,
                        onFocus: () => C("emailCode")
                    }, null),
                    RealName: () => e(Ha, {
                        name: "realName",
                        modelValue: a.realName,
                        "onUpdate:modelValue": g => a.realName = g,
                        placeholder: m.value.realName,
                        required: y.value.realName.required,
                        showRequired: y.value.realName.required,
                        onFocus: () => C("realName")
                    }, null),
                    Telegram: () => e(nt, {
                        name: "telegram",
                        modelValue: a.telegram,
                        "onUpdate:modelValue": g => a.telegram = g,
                        placeholder: m.value.telegram,
                        required: y.value.telegram.required,
                        showRequired: y.value.telegram.required,
                        onFocus: () => C("telegram")
                    }, null),
                    Cpf: () => e(Xa, {
                        name: "cpfCode",
                        modelValue: a.cpfCode,
                        "onUpdate:modelValue": g => a.cpfCode = g,
                        placeholder: m.value.cpfCode,
                        required: y.value.cpf.required,
                        showRequired: y.value.cpf.required,
                        onFocus: () => C("cpfCode")
                    }, null),
                    Currency: () => e(dt, {
                        name: "currency",
                        modelValue: a.currency,
                        "onUpdate:modelValue": g => a.currency = g,
                        disabled: Z.value,
                        placeholder: m.value.currency,
                        required: y.value.currency.required,
                        showRequired: y.value.currency.required,
                        showHelp: !!a.currency,
                        onFocus: () => C("currency")
                    }, null),
                    Invite: () => e(tt, {
                        name: "inviterId",
                        modelValue: a.inviterId,
                        "onUpdate:modelValue": g => a.inviterId = g,
                        placeholder: m.value.inviterId,
                        disabled: B.value,
                        required: y.value.invite.required,
                        showRequired: y.value.invite.required,
                        showHelp: se.value,
                        onFocus: () => C("inviterId")
                    }, null)
                },
                I = h(() => {
                    const g = c.value.phone.splitRender,
                        T = c.value.email.splitRender,
                        N = c.value.phone.forceCaptcha,
                        L = c.value.email.forceCaptcha;
                    return {
                        phone: g,
                        phoneCode: g && N,
                        email: T,
                        emailCode: T && L,
                        realName: y.value.realName.visible,
                        telegram: y.value.telegram.visible,
                        cpf: y.value.cpf.visible,
                        currency: y.value.currency.visible,
                        invite: y.value.invite.visible
                    }
                }),
                j = () => {
                    switch (!0) {
                        case n.value.phoneCode:
                            return e(A, null, [e(_.Account, null, null), e(_.PhoneCode, null, null)]);
                        case n.value.phonePassCode:
                            return e(A, null, [e(_.Account, null, null), e(_.PhoneCode, null, null), e(_.Password, null, null)]);
                        case n.value.emailCode:
                            return e(A, null, [e(_.Account, null, null), e(_.EmailCode, null, null)]);
                        case n.value.emailPassCode:
                            return e(A, null, [e(_.Account, null, null), e(_.EmailCode, null, null), e(_.Password, null, null)]);
                        case n.value.thirdParty:
                            return e(A, null, [e(ye, null, null)]);
                        case n.value.phonePass:
                        case n.value.emailPass:
                        case n.value.accountPass:
                        default:
                            return e(A, null, [e(_.Account, null, null), e(_.Password, null, null)])
                    }
                };
            return () => e("form", {
                ref: v,
                class: He.loginRegisterForm
            }, [e(j, null, null), I.value.phone && e(_.Phone, null, null), I.value.phoneCode && e(_.PhoneCode, null, null), I.value.email && e(_.Email, null, null), I.value.emailCode && e(_.EmailCode, null, null), I.value.realName && e(_.RealName, null, null), I.value.telegram && e(_.Telegram, null, null), I.value.cpf && e(_.Cpf, null, null), I.value.currency && e(_.Currency, null, null), I.value.invite && e(_.Invite, null, null)])
        }
    }),
    Gt = "_list_1c6vj_25",
    Dt = "_item_1c6vj_31",
    zt = "_inner_1c6vj_42",
    Ht = "_common_bganimation_1c6vj_1",
    be = {
        list: Gt,
        item: Dt,
        inner: zt,
        common_bganimation: Ht
    },
    [Mt] = S("quickentry"),
    Wt = E({
        name: Mt,
        setup() {
            const {
                t
            } = V(), d = Ca(), a = oe(), u = F(), {
                toCustomer: o,
                toForgetPass: l,
                toFreeTryit: v
            } = Y(), n = h(() => {
                var m;
                return (m = d.gameCategoriesInfoList.find(i => i.gameCategoryId === Pa.Demo)) == null ? void 0 : m.display
            }), s = h(() => {
                var c, f;
                const m = y => y === Le.OPEN,
                    i = (f = (c = a.systemInfos) == null ? void 0 : c.loginRegister) == null ? void 0 : f.quickEntry;
                return {
                    freeTryit: n.value && m(i == null ? void 0 : i.trial),
                    customer: m(i == null ? void 0 : i.customer),
                    forgetPass: u.value.login
                }
            }), p = h(() => [{
                show: s.value.customer,
                text: () => t("lobby.modal.loginRegister.contactCustomer"),
                onClick: o
            }, {
                show: s.value.freeTryit,
                text: () => t("lobby.modal.login.operate.tryItFree"),
                onClick: v
            }, {
                show: s.value.forgetPass,
                text: () => t("lobby.modal.forgotPassword.title"),
                onClick: l
            }].filter(m => m.show));
            return () => {
                if (p.value.length) return e("ul", {
                    class: be.list
                }, [p.value.filter(Boolean).map(({
                    onClick: m,
                    text: i
                }) => e("li", {
                    class: be.item
                }, [e("span", {
                    class: be.inner,
                    onClick: m
                }, [i()])]))])
            }
        }
    }),
    Kt = "_quickoperate_csnj3_25",
    Qt = "_agree_csnj3_31",
    Yt = "_remeber_csnj3_41",
    Xt = "_checkbox_csnj3_44",
    Zt = "_sendCodeError_csnj3_54",
    Jt = "_customer_csnj3_62",
    eo = "_agreenment_csnj3_66",
    ao = "_loading_csnj3_70",
    to = "_common_bganimation_csnj3_1",
    $ = {
        quickoperate: Kt,
        agree: Qt,
        remeber: Yt,
        checkbox: Xt,
        sendCodeError: Zt,
        customer: Jt,
        agreenment: eo,
        loading: ao,
        common_bganimation: to
    },
    [oo] = S("quickoperate"),
    no = E({
        name: oo,
        setup() {
            const {
                toCustomer: t
            } = Y(), d = M(), a = oe(), u = F(), {
                t: o
            } = V(), l = w(""), v = w(!1), n = w();
            Xe(() => {
                var c;
                (c = n.value) == null || c.close(n.value.instance)
            });
            const s = async () => {
                    var f;
                    v.value = !0;
                    const [, c] = await Ue(Ea());
                    l.value = ((f = c == null ? void 0 : c.data.data) == null ? void 0 : f.content) || "", v.value = !1
                },
                p = async () => {
                    l.value || s(), n.value = wa.showDialog({
                        allowHtml: !0,
                        className: $.agreenment,
                        closeOnClickOverlay: !1,
                        showCloseButton: !0,
                        closeControl: {
                            shouldOccupySpace: !0
                        },
                        confirmButtonText: o("lobby.modal.register.readed"),
                        beforeClose: () => (n.value = void 0, !0),
                        message: () => v.value ? e(Ra, {
                            class: $.loading
                        }, null) : l.value
                    })
                },
                m = h(() => {
                    var f, y, C;
                    const c = ((y = (f = a.homeLayoutInfos) == null ? void 0 : f.commonConfig) == null ? void 0 : y.ageLimit) || "18";
                    return (C = new Map([
                        ["16", "lobby.modal.register.userAgreement16"],
                        ["18", "lobby.modal.register.userAgreement"],
                        ["21", "lobby.modal.register.userAgreement21"],
                        ["-1", "lobby.modal.register.userAgreementNone"]
                    ]).get(c)) != null ? C : ""
                }),
                i = h(() => {
                    const c = u.value.login,
                        f = u.value.phoneCode,
                        y = u.value.phonePass,
                        C = u.value.emailCode,
                        b = u.value.emailPass,
                        r = u.value.accountPass,
                        P = c && (f || C);
                    let R = o("lobby.modal.loginRegister.rememberAcount");
                    return (r || y || b) && (R = o("lobby.modal.loginRegister.rememberAcountPassword")), {
                        showSendCodeError: P,
                        remember: R
                    }
                });
            return () => e("div", {
                class: $.quickoperate
            }, [e("div", {
                class: $.remeber
            }, [u.value.login && e(Ie, {
                modelValue: d.remember,
                "onUpdate:modelValue": c => d.remember = c,
                class: [$.checkbox]
            }, {
                default: () => [i.value.remember]
            }), i.value.showSendCodeError && e("div", {
                class: $.sendCodeError
            }, [e("span", null, [o("lobby.modal.loginRegister.unableCaptcha")]), e("span", {
                class: $.customer,
                onClick: t
            }, [o("lobby.modal.loginRegister.contactCustomer")])])]), u.value.register && e(Ie, {
                modelValue: d.agreed,
                "onUpdate:modelValue": c => d.agreed = c,
                class: [$.agree],
                onClick: c => {
                    if (c.target.getAttribute("data-user-agreement")) return c.preventDefault(), p(), !1
                }
            }, {
                default: () => [e(Ne, {
                    tag: "span",
                    xssProtection: !0,
                    innerHTML: o(m.value)
                }, null)]
            })])
        }
    }),
    [so] = S("Rect"),
    lo = E({
        name: so,
        emits: ["width"],
        setup(t, {
            emit: d,
            slots: a
        }) {
            const u = w(),
                o = Ze(u);
            return te([o.width], () => {
                d("width", o.width.value)
            }), () => {
                var l;
                return e("span", {
                    ref: u
                }, [(l = a == null ? void 0 : a.default) == null ? void 0 : l.call(a)])
            }
        }
    });

function Me() {
    const {
        t
    } = V(), d = F(), a = x(), u = w(), {
        getRegisterRedDot: o
    } = Te();
    Te().getNewComerBenefitBeforeLogin(), H(() => u.value = o(a.state.currency));
    const l = h(() => {
        var m;
        if (!((m = u.value) != null && m.isPop) || !u.value.reward) return;
        const s = t("lobby.modal.login.operate.registerGive"),
            p = Sa(u.value.reward, {
                code: a.state.currency
            }).toFixed({
                decimalPlaces: 2,
                tailZero: !0
            });
        return "".concat(s).concat(p)
    });
    return {
        tabBadge: s => {
            if (s && l.value && d.value.login) return l.value
        },
        btnBadge: () => {
            if (l.value && d.value.register) return l.value
        }
    }
}
const ro = "_tabs_1n98i_25",
    uo = "_tabsLabelWrap_1n98i_133",
    io = "_tabsLabel_1n98i_133",
    co = "_tabsLabelIcon_1n98i_145",
    mo = "_common_bganimation_1n98i_1",
    J = {
        tabs: ro,
        tabsLabelWrap: uo,
        tabsLabel: io,
        tabsLabelIcon: co,
        common_bganimation: mo
    };

function ke(t) {
    return typeof t == "function" || Object.prototype.toString.call(t) === "[object Object]" && !Je(t)
}
const [go] = S("login-register-tabs"), po = E({
    name: go,
    setup() {
        const {
            t
        } = V(), d = w(!0), a = x(), {
            tabBadge: u
        } = Me(), o = F(), l = De(), v = Ve({
            [k.Login]: "40px",
            [k.Register]: "40px"
        }), n = w(), s = w();
        we({
            submit: () => {
                o.value.login ? n.value.submit() : s.value.submit()
            }
        });
        const p = i => (i || 40) + 30 + "px",
            m = h(() => [{
                key: "registerTabButton",
                name: k.Register,
                icon: "/lobby_asset/common/web/login/login_icon_zj.svg",
                text: () => t("lobby.modal.register.label"),
                onWidth: i => v.register = p(i),
                form: o.value.register && e(jt, {
                    ref: s
                }, null)
            }, {
                key: "loginTabButton",
                name: k.Login,
                icon: "/lobby_asset/common/web/login/login_icon_dl.svg",
                text: () => t("lobby.modal.login.label"),
                onWidth: i => v.login = p(i),
                form: o.value.login && e(Tt, {
                    ref: n
                }, null)
            }]);
        return () => {
            let i;
            return e(Ta, {
                class: J.tabs,
                animated: d.value,
                lineWidth: v.login,
                active: a.state.mode,
                "onUpdate:active": c => a.state.mode = c,
                onRendered: () => d.value = !0,
                "data-third-party": o.value.thirdParty || null,
                "data-underline": l.value.line || null,
                "data-show-icon": l.value.tabIcon || null
            }, ke(i = m.value.map(c => e(Ia, {
                name: c.name,
                title: () => {
                    let f;
                    return e("span", {
                        class: J.tabsLabelWrap,
                        id: c.key,
                        "data-sensors-click": !0
                    }, [e(lo, {
                        class: J.tabsLabel,
                        onWidth: c.onWidth
                    }, {
                        default: () => [l.value.tabIcon && e(X, {
                            class: J.tabsLabelIcon,
                            src: c.icon,
                            replaceExtension: !1
                        }, null), e($e, {
                            mode: "yellow",
                            content: u(c.name === k.Register)
                        }, ke(f = c.text()) ? f : {
                            default: () => [f]
                        })]
                    })])
                },
                content: () => c.form
            }, null))) ? i : {
                default: () => [i]
            })
        }
    }
});

function vo() {
    const {
        t
    } = V(), d = F(), a = M(), u = w(), o = h(() => d.value.thirdParty ? t("lobby.notice.complete") : d.value.login ? t("lobby.modal.login.label") : d.value.register ? t("lobby.modal.register.label") : "");
    return {
        refTabs: u,
        submitInner: o,
        submit: async v => {
            if (document.body.focus(), v.stopPropagation(), d.value.register && !a.agreed) {
                ka({
                    type: "error",
                    message: () => t("lobby.modal.register.agreementRequiredTips")
                });
                return
            }
            u.value.submit()
        }
    }
}
const bo = "_loginRegister_kcij4_25",
    fo = "_logoSlogan_kcij4_34",
    yo = "_logo_kcij4_34",
    ho = "_slogan_kcij4_48",
    _o = "_topSpace_kcij4_54",
    Co = "_lrSpace_kcij4_57",
    Po = "_submits_kcij4_61",
    wo = "_common_bganimation_kcij4_1",
    q = {
        loginRegister: bo,
        logoSlogan: fo,
        logo: yo,
        slogan: ho,
        topSpace: _o,
        lrSpace: Co,
        submits: Po,
        common_bganimation: wo
    },
    [Ro] = S("pages-dialogs-login-register-fragment"),
    zo = E({
        name: Ro,
        setup() {
            const {
                refTabs: t,
                submit: d,
                submitInner: a
            } = vo(), {
                t: u
            } = V(), o = x(), l = _e(), {
                btnBadge: v
            } = Me(), n = F(), s = De(), p = W();
            xe().reportOpenLoginRegister(p.value.usePageing, o.state.mode), l.ipChecked || Va().then(y => l.updateIPCheck(y)), qa.preloadGeeGuardToken();
            const m = "".concat(window.innerHeight, "px");
            te(() => n.value.mode, o.initType);
            const i = h(() => JSON.stringify(o.state.openOptions)),
                c = h(() => n.value.login ? u("lobby.modal.loginRegister.quickLogin") : u("lobby.modal.loginRegister.bindRegister")),
                f = w(0);
            return setTimeout(() => f.value = 1, 2e3), H(() => {
                c.value && (f.value = 1)
            }), () => e("div", {
                key: i.value,
                class: [q.loginRegister, "loginRegisterFragment"],
                style: {
                    "--inner-height": m,
                    opacity: f.value
                }
            }, [e("div", {
                class: q.logoSlogan
            }, [s.value.logo && e("div", {
                class: q.lrSpace
            }, [e(La, {
                class: q.logo
            }, null)]), s.value.slogan && e("div", {
                class: q.lrSpace,
                "data-use-page": p.value.usePageing || null
            }, [e(Ne, {
                tag: "div",
                class: q.slogan,
                html: s.value.slogan
            }, null)])]), e(po, {
                ref: t
            }, null), e("div", {
                class: q.lrSpace
            }, [ie(e(no, {
                class: q.topSpace
            }, null), [
                [ce, !n.value.thirdParty]
            ]), e("div", {
                class: [q.submits, q.topSpace]
            }, [e($e, {
                mode: "yellow",
                content: v(),
                style: {
                    width: "100%"
                }
            }, {
                default: () => [e(Fa, {
                    type: "primary",
                    loading: n.value.loading,
                    block: !0,
                    onTap: d
                }, {
                    default: () => [a.value]
                })]
            })]), ie(e(Wt, {
                class: q.topSpace
            }, null), [
                [ce, !n.value.thirdParty]
            ]), ie(e(Wa, {
                align: "center",
                mode: "loginRegister",
                class: q.topSpace,
                title: c.value
            }, null), [
                [ce, !n.value.thirdParty]
            ])])])
        }
    });
export {
    zo as L, De as u
};
//# sourceMappingURL=Fragment.D5BqnI_q.js.map