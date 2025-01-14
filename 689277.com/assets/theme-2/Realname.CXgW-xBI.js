import {
    bk as M,
    a as U,
    m as _,
    bl as f,
    bm as q,
    bn as E,
    bo as S,
    O as v,
    aC as w,
    T as x,
    q as V,
    aE as G
} from "./main.async.-NbSL2aO.js";
import "./main.Dmn05Mj-.js";
import "../vendors/vendor-default.p-wnugzB.js";
import "../vendors/vendor-bignumber.BRr1dcww.js";
import "../vendors/vendor-swiper.BzK1hN__.js";
import {
    k as P,
    c as o,
    a5 as m
} from "../vendors/vendor-@vue.CBvhRkQp.js";
const [B] = V("form-item-realname"), A = P({
    name: B,
    props: M,
    emits: ["update:modelValue"],
    setup(r, {
        emit: b
    }) {
        const {
            t
        } = U(), u = _(), c = o({
            get: () => r.modelValue,
            set: e => b("update:modelValue", N(e))
        }), n = o(() => {
            var e, a;
            return {
                realNameConsecutiveCharLimitTimes: (e = u.systemInfos) == null ? void 0 : e.realNameConsecutiveCharLimitTimes,
                realNameMustUppercase: !!((a = u.systemInfos) != null && a.realNameMustUppercase)
            }
        }), N = e => {
            if (e = e.replace(/\s+/gi, " "), n.value.realNameMustUppercase ? (e = e.split("").map(a => f[a] ? f[a] : a).join(""), e = e.replace(/[^a-zA-Z’‘'·,.\s]/g, "").toLocaleUpperCase()) : e = e.replace(q, "").replace(E, "").replace(S, ""), e && n.value.realNameConsecutiveCharLimitTimes) {
                const {
                    inputStr: a,
                    verify: s
                } = h(e);
                !s && a && (e = a)
            }
            return e
        }, h = e => {
            var d;
            const a = (d = n.value.realNameConsecutiveCharLimitTimes) != null ? d : 99;
            let s = !0;
            const L = t("lobby.finance.withdraw.add.inputMaxLengthExcessed", {
                leng: a
            });
            let i = e.split(" ");
            return i = i.map(p => (p.length > a && (s = !1), p.substring(0, a))), e = i.join(" "), {
                inputStr: e,
                verify: s,
                errStr: L
            }
        }, C = o(() => r.placeholder ? r.placeholder : t("lobby.modal.loginRegister.requiredRealName")), g = (e = "") => {
            const {
                realNameConsecutiveCharLimitTimes: a,
                realNameMustUppercase: s
            } = n.value;
            if (r.required) {
                if (!G(e)) return t("lobby.modal.loginRegister.requiredRealName");
                if (!a && (!e.trim() || e.trim().length === 1)) return t(s ? "lobby.modal.login.form.realName.realNameTips3" : "lobby.modal.login.form.realName.realNameTips2")
            }
            return !0
        }, I = o(() => {
            if (n.value.realNameMustUppercase && r.required && r.showHelp) return t("lobby.modal.register.realNameError")
        }), l = e => {
            n.value.realNameMustUppercase && e.preventDefault()
        }, y = l, R = l, T = l;
        return () => {
            var e;
            return m(x, {
                name: r.name,
                help: I.value,
                showHelpIcon: !1,
                required: r.showRequired,
                rules: (e = r.rules) != null ? e : g
            }, {
                default: () => [m(v, {
                    value: c.value,
                    "onUpdate:value": a => c.value = a,
                    clearable: r.clearable,
                    disabled: r.disabled,
                    "data-input-name": r.name,
                    placeholder: C.value,
                    onFocus: r.onFocus,
                    onBlur: r.onBlur,
                    onCut: y,
                    onCopy: R,
                    onPaste: T
                }, {
                    prefix: () => m(w, {
                        icon: "/lobby_asset/common/web/common/input_icon_zsxm.svg"
                    }, null)
                })]
            })
        }
    }
});
export {
    A as R
};
//# sourceMappingURL=Realname.CXgW-xBI.js.map