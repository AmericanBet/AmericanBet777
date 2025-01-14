import {
    m as L,
    ap as R,
    a as v,
    b3 as C,
    I as b,
    b4 as y,
    b5 as x,
    b6 as E,
    b7 as p,
    T as I,
    O as k,
    aC as q,
    q as F
} from "./main.async.-NbSL2aO.js";
import {
    D as N
} from "../vendors/vendor-default.p-wnugzB.js";
import "./main.Dmn05Mj-.js";
import "../vendors/vendor-bignumber.BRr1dcww.js";
import {
    c as V
} from "./validate.Co9skrzt.js";
import {
    c as u,
    a5 as t,
    k as A,
    f as U,
    w as z,
    F as $
} from "../vendors/vendor-@vue.CBvhRkQp.js";
import "../vendors/vendor-swiper.BzK1hN__.js";
import {
    y as D
} from "../vendors/vendor-lodash.CYk3mlCa.js";
const O = "_passStrengthCheck_91gem_25",
    T = "_cryptographicStrength_91gem_25",
    B = "_strengthCheck_91gem_26",
    Z = "_icon_91gem_35",
    W = "_colorLump_91gem_48",
    j = "_large_91gem_56",
    G = "_colorLump1_91gem_59",
    H = "_colorLump2_91gem_62",
    J = "_colorLump3_91gem_65",
    K = "_colorLump4_91gem_68",
    M = "_digit_91gem_71",
    Q = "_digitError_91gem_77",
    X = "_satisfy_91gem_106",
    Y = "_common_bganimation_91gem_1",
    n = {
        passStrengthCheck: O,
        cryptographicStrength: T,
        strengthCheck: B,
        icon: Z,
        colorLump: W,
        default: "_default_91gem_53",
        large: j,
        colorLump1: G,
        colorLump2: H,
        colorLump3: J,
        colorLump4: K,
        digit: M,
        digitError: Q,
        satisfy: X,
        common_bganimation: Y
    };

function ee(e) {
    const r = L(),
        _ = R(),
        {
            t: l
        } = v(),
        c = u(() => {
            var s;
            return !!((s = r.systemInfos) != null && s.loginPasswdStrengthDetectSwitch)
        }),
        d = u(() => {
            var a, g;
            let s = (g = (a = _.userInfos) == null ? void 0 : a.platfromid) != null ? g : "";
            e.account && (s = e.account);
            let o = C(e.password, s);
            return o = o || (e.password ? 1 : 0), Array.from({
                length: 4
            }, (f, w) => w < o ? o : 0)
        }),
        h = u(() => {
            const {
                strongPasswdRequireUppercase: s,
                strongPasswdRequireLowercase: o,
                strongPasswdRequireNum: a,
                strongPasswdRequireSpecial: g
            } = r.systemInfos, f = /[A-Z]/, w = /[a-z]/, S = /\d/, P = new RegExp("[".concat(y, "]"));
            return [{
                lable: l("lobby.common.formRules.uppercase"),
                satisfy: f.test(e.password),
                isShow: s
            }, {
                lable: l("lobby.common.formRules.lowercase"),
                satisfy: w.test(e.password),
                isShow: o
            }, {
                lable: l("lobby.common.formRules.num"),
                satisfy: S.test(e.password),
                isShow: a
            }, {
                lable: l("lobby.common.formRules.special"),
                satisfy: P.test(e.password),
                isShow: g
            }]
        }),
        i = u(() => {
            const {
                strongPasswdLength: s,
                loginPasswdStrengthDetectSwitch: o
            } = r == null ? void 0 : r.systemInfos;
            return o ? s === 16 ? "16" : "".concat(s != null ? s : 6, "-16") : "6-16"
        }),
        m = u(() => {
            if (i.value.indexOf("-") >= 0) {
                const [s, o] = i.value.split("-").map(Number);
                return e.password.length >= s && e.password.length <= o
            } else return e.password.length === Number(i.value)
        });
    return t("div", {
        class: n.passStrengthCheck
    }, [t("div", {
        class: n.cryptographicStrength
    }, [t("span", null, [l("lobby.common.formRules.psswdstrength")]), d.value.map(s => t("span", {
        class: [n.colorLump, s ? n["colorLump".concat(s)] : "", n[e.size || "default"]]
    }, null)), c.value && t("span", {
        class: [n.digit, {
            [n.digitError]: !m.value
        }]
    }, [!m.value && t(b, {
        class: n.icon,
        src: "/lobby_asset/common/web/common/comm_icon_pay_2.png"
    }, null), i.value, l("lobby.common.formRules.digit")])]), c.value && t("div", {
        class: n.strengthCheck
    }, [h.value.map(s => s.isShow ? t("div", {
        class: s.satisfy ? n.satisfy : ""
    }, [t(b, {
        class: n.icon,
        src: "/lobby_asset/common/web/common/comm_icon_pay_".concat(s.satisfy ? "1" : "2", ".png")
    }, null), t("span", null, [s.lable])]) : null)])])
}
const [se] = F("form-item-password"), ie = A({
    name: se,
    props: x,
    emits: ["update:modelValue", "update:visiblePassword", "change"],
    setup(e, {
        emit: r
    }) {
        const _ = N(e.name),
            {
                t: l
            } = v(),
            c = u({
                get: () => e.modelValue,
                set: o => r("update:modelValue", h(o))
            });
        U(() => r("change", c.value)), z(() => e.account, () => c.value && _());
        const d = u({
                get: () => e.visiblePassword,
                set: o => r("update:visiblePassword", o)
            }),
            h = o => o.replace(new RegExp("[^a-zA-Z0-9".concat(y, "]"), "g"), ""),
            i = u(() => e.placeholder ? e.placeholder : l("lobby.center.security.loginPwd.placeholder")),
            m = u(() => e.useConfig ? E() : p.Simple),
            s = (o = "") => {
                if (!e.required && !o) return !0;
                if (e.account && D(e.account, o)) return l("lobby.modal.loginRegister.verifyAccountPasswordEqual");
                const a = V(o, m.value);
                return a || !0
            };
        return () => {
            var o;
            return t($, null, [t(I, {
                name: e.name,
                rules: (o = e.rules) != null ? o : s,
                required: e.showRequired
            }, {
                default: () => [t(k, {
                    showEye: !0,
                    maxlength: 16,
                    type: c.value ? "password" : "text",
                    clearable: e.clearable,
                    value: c.value,
                    "onUpdate:value": a => c.value = a,
                    autocomplete: "new-password",
                    "data-input-name": e.name,
                    visiblePassword: d.value,
                    "onUpdate:visiblePassword": a => d.value = a,
                    placeholder: i.value,
                    onFocus: e.onFocus,
                    onBlur: e.onBlur
                }, {
                    prefix: () => t(q, {
                        icon: "/lobby_asset/common/web/common/input_icon_mm.svg"
                    }, null)
                })]
            }), m.value !== p.Simple && t(ee, {
                size: e.strengthSize,
                password: c.value
            }, null)])
        }
    }
});
export {
    ie as P
};
//# sourceMappingURL=Password.BjkfIuVQ.js.map