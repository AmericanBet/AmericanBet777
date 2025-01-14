import {
    r as S,
    bV as G,
    c as d,
    aN as H,
    k as z,
    w as X,
    a5 as s,
    aB as Q,
    bz as j,
    br as J
} from "../vendors/vendor-@vue.CBvhRkQp.js";
import {
    aq as r,
    b8 as K,
    a as W,
    au as Z,
    ap as $,
    O as p,
    aC as ee,
    aY as te,
    I as O,
    T as ae,
    q as ne,
    aO as L,
    a7 as oe,
    r as se,
    aV as re,
    aE as ie
} from "./main.async.-NbSL2aO.js";
import {
    D as ue
} from "../vendors/vendor-default.p-wnugzB.js";
import {
    R as g
} from "./main.Dmn05Mj-.js";
import "../vendors/vendor-bignumber.BRr1dcww.js";
import {
    m as E,
    e as le
} from "../vendors/vendor-lodash.CYk3mlCa.js";
import {
    d as ce,
    e as de
} from "./validate.Co9skrzt.js";
const me = (e, o) => r.request({ ...e,
        url: "/user/email/createmail",
        method: "post"
    }, E({
        oss: {
            enable: !1
        },
        token: {
            type: "staticOnly"
        }
    }, o)),
    fe = (e, o) => r.request({ ...e,
        url: "/user/security/createmail",
        method: "post"
    }, E({
        oss: {
            enable: !1
        }
    }, o)),
    xe = e => r.request({ ...e,
        url: "/user/security/verifyEmailCode",
        method: "post"
    }, {
        oss: {
            enable: !1
        }
    }),
    Fe = e => r.request({ ...e,
        url: "/user/security/bindEmail",
        method: "post"
    }, {
        oss: {
            enable: !1
        }
    }),
    ye = (e, o) => r.request({ ...e,
        url: "/shortmsg/create",
        method: "post"
    }, E({
        oss: {
            enable: !1
        },
        token: {
            type: "staticOnly"
        }
    }, o)),
    Ae = (e, o) => r.request({ ...e,
        url: "/shortmsg/validate",
        method: "post"
    }, E({
        oss: {
            enable: !1
        },
        token: {
            type: "staticOnly"
        },
        ...o
    })),
    he = (e, o) => r.request({ ...e,
        url: "/user/security/createsms",
        method: "post"
    }, E({
        oss: {
            enable: !1
        }
    }, o)),
    Ue = e => r.request({ ...e,
        url: "/user/security/verifyPhoneCode",
        method: "post"
    }, {
        oss: {
            enable: !1
        }
    }),
    Te = e => r.request({ ...e,
        url: "/user/security/modifyphone",
        method: "post"
    }, {
        oss: {
            enable: !1
        }
    }),
    Ye = e => r.request({
        url: "/user/captcha/getUserInfo",
        data: {
            username: e
        },
        method: "post"
    }, {
        oss: {
            enable: !1
        },
        token: {
            type: "staticOnly"
        }
    }),
    De = e => r.request({
        url: "/user/risk/verifyPhone",
        data: e,
        method: "post"
    }, {
        oss: {
            enable: !1
        }
    }),
    Ge = e => r.request({
        url: "/user/risk/bindPhone",
        data: e,
        method: "post"
    }, {
        oss: {
            enable: !1
        }
    });

function be(e = 60, o = 1e3) {
    const n = S(0),
        f = () => {
            const b = () => n.value -= 1;
            n.value <= 0 ? h() : b()
        },
        y = () => {
            n.value = e - 1, m.resume()
        },
        h = () => {
            n.value = 0, m.pause()
        },
        m = G(f, o),
        c = d(() => n.value > 0);
    return H(h), {
        start: y,
        stop: h,
        current: n,
        runing: c
    }
}
const _e = "_verifyCode_100d7_25",
    ge = "_send_100d7_29",
    ve = "_sendLoading_100d7_34",
    Ce = "_sendButton_100d7_37",
    Ee = "_disabled_100d7_52",
    Ve = "_quickVerify_100d7_55",
    Re = "_iconPhone_100d7_69",
    Se = "_iconSuccess_100d7_75",
    qe = "_quickVerifyText_100d7_88",
    Pe = "_common_bganimation_100d7_1",
    l = {
        verifyCode: _e,
        send: ge,
        sendLoading: ve,
        sendButton: Ce,
        disabled: Ee,
        quickVerify: Ve,
        iconPhone: Re,
        iconSuccess: Se,
        quickVerifyText: qe,
        common_bganimation: Pe
    },
    [ke] = ne("form-item-verify-code"),
    He = z({
        name: ke,
        props: K,
        emits: ["update:modelValue", "quickVerify"],
        setup(e, {
            emit: o
        }) {
            const {
                t: n
            } = W(), f = d({
                get: () => e.modelValue,
                set: t => o("update:modelValue", U(t))
            }), y = Z(), h = $(), m = S(!1), c = S(!1), b = S(!1), v = be(), w = ue(e.name), B = d(() => e.mode === "email" ? !ce(e.target) : !de(e.target, y.state.code, [y.range.min, y.range.max])), P = d(() => v.runing.value || e.disabled || !e.target || !B.value);
            X(() => e.target, () => {
                var t, a;
                m.value = !1, v.stop(), (t = e.setPhoneSuccess) == null || t.call(e), (a = e.setEmailSuccess) == null || a.call(e)
            });
            const M = t => {
                    var a, i;
                    e.mode == "phone" ? (t.phone.username || t.phone.email) && ((a = e.setPhoneSuccess) == null || a.call(e, n("lobby.common.components.auth.phone.success"))) : (t.email.username || t.email.phone) && ((i = e.setEmailSuccess) == null || i.call(e, n("lobby.common.components.auth.email.success")))
                },
                N = () => {
                    var C;
                    const {
                        type: t,
                        value: a
                    } = (C = e.createVerify) != null ? C : {}, i = e.createMode, u = i === L.Verify, V = y.format(e.target), R = e.target;
                    return {
                        phone: {
                            phone_number: V,
                            create_mode: i,
                            email: u && t === "email" ? a : void 0,
                            username: u && t === "account" ? a : void 0
                        },
                        email: {
                            email: R,
                            create_mode: i,
                            phone: u && t === "phone" ? a : void 0,
                            username: u && t === "account" ? a : void 0
                        }
                    }
                },
                x = le(async t => {
                    var V, R, C, k;
                    if (t.stopPropagation(), t.preventDefault(), P.value || c.value) return;
                    if (c.value = !0, m.value = !1, b.value = !1, e.onBeforeSendCode) try {
                        await e.onBeforeSendCode(e.target)
                    } catch (_) {
                        c.value = !1;
                        return
                    }
                    let a;
                    const i = {
                            error: {
                                action: "normal",
                                actionExcludes: [g.VERIFY_USERNAME_PHONE_ERROR, g.VERIFY_USERNAME_EMAIL_ERROR]
                            }
                        },
                        u = N();
                    e.sendCode ? a = e.sendCode(e.target) : e.mode === "phone" ? a = h.hasLogined ? he({
                        data: u.phone
                    }, i) : ye({
                        data: u.phone
                    }, i) : e.mode === "email" ? a = h.hasLogined ? fe({
                        data: u.email
                    }, i) : me({
                        data: u.email
                    }, i) : a = Promise.resolve();
                    try {
                        const _ = await a,
                            q = (R = (V = _ == null ? void 0 : _.data) == null ? void 0 : V.data) == null ? void 0 : R.quickVerify;
                        m.value = !0, q && e.createMode === L.RegisterIntegration ? (b.value = !0, f.value = "", o("quickVerify")) : (M(u), v.start(), c.value = !1, oe({
                            type: "success",
                            message: n("lobby.common.components.auth.phone.sendSuccess")
                        }), f.value && w())
                    } catch (_) {
                        const {
                            code: q,
                            msg: I
                        } = se(_);
                        switch (q) {
                            case g.VERIFY_USERNAME_PHONE_ERROR:
                                (C = e.setPhoneError) == null || C.call(e, I);
                                break;
                            case g.VERIFY_USERNAME_EMAIL_ERROR:
                                (k = e.setEmailError) == null || k.call(e, I);
                                break;
                            case g.EMAIL_SECURITY_CONFIG_EXPIRED:
                            case g.PHONE_SECURITY_CONFIG_EXPIRED:
                                re("CONFIG_CHANGE_ERR").emit();
                                break
                        }
                    }
                    setTimeout(() => {
                        c.value = !1
                    }, 1e3)
                }),
                F = d(() => e.mode === "phone" ? n("lobby.modal.login.form.smsCode.getCode") : e.mode === "email" ? n("lobby.modal.login.form.smsCode.emailCode") : n("lobby.modal.register.imageVerificationCode")),
                A = d(() => e.max ? e.max : e.mode === "phone" ? 4 : 5),
                U = t => t.replace(/[^\d]/g, "").slice(0, A.value),
                T = d(() => e.placeholder ? e.placeholder : e.mode === "phone" ? n("lobby.modal.login.placeholder.verificationCode") : e.mode === "email" ? n("lobby.modal.login.placeholder.emailCode") : n("lobby.center.security.verifyCode")),
                Y = (t = "") => !e.required && !t || b.value ? !0 : ie(t) ? m.value ? !0 : F.value : n("lobby.modal.login.form.smsCode.required"),
                D = d(() => {
                    if (!v.runing.value) return n("lobby.modal.login.form.smsCode.send");
                    const t = v.current.value;
                    return n("lobby.modal.login.form.smsCode.counting", {
                        seconds: t
                    })
                });
            return () => {
                var t;
                return s(ae, {
                    name: e.name,
                    class: l.verifyCode,
                    required: e.showRequired,
                    rules: (t = e.rules) != null ? t : Y
                }, {
                    default: () => [s(p, {
                        type: "tel",
                        value: f.value,
                        "onUpdate:value": a => f.value = a,
                        clearable: e.clearable,
                        "data-input-name": e.name,
                        placeholder: T.value,
                        autocomplete: "off",
                        onFocus: e.onFocus,
                        onBlur: e.onBlur
                    }, {
                        prefix: () => s(ee, {
                            icon: "/lobby_asset/common/web/common/input_icon_yz.svg"
                        }, null),
                        suffix: () => {
                            var a;
                            return s("span", {
                                class: l.send
                            }, [c.value && s(te, {
                                class: l.sendLoading,
                                iconColor: "currentColor"
                            }, null), s("span", Q(((a = e.sendButtonControl) == null ? void 0 : a.attrs) || {}, {
                                onClick: x,
                                class: [l.sendButton, {
                                    [l.disabled]: P.value
                                }]
                            }), [D.value])])
                        }
                    }), j(s("div", {
                        class: l.quickVerify
                    }, [s("span", {
                        class: l.iconPhone
                    }, [s(O, {
                        src: "/lobby_asset/common/web/common/input_icon_yz.svg"
                    }, null)]), s("span", {
                        class: l.iconSuccess
                    }, [s(O, {
                        src: "/lobby_asset/common/web/common/comm_icon_gou.svg"
                    }, null)]), s("span", {
                        class: l.quickVerifyText
                    }, [n("lobby.modal.loginRegister.quickVerifySuccess")])]), [
                        [J, b.value]
                    ])]
                })
            }
        }
    });
export {
    He as V, Ue as a, Te as b, xe as c, Fe as d, Ye as e, Ae as f, De as g, Ge as h
};
//# sourceMappingURL=VerifyCode.BuOB841X.js.map