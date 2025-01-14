import {
    D as P
} from "../vendors/vendor-default.p-wnugzB.js";
import "./main.Dmn05Mj-.js";
import {
    bb as I,
    a as _,
    au as q,
    O as v,
    T as w,
    q as y,
    aE as g,
    bc as A
} from "./main.async.-NbSL2aO.js";
import "../vendors/vendor-bignumber.BRr1dcww.js";
import {
    e as C
} from "./validate.Co9skrzt.js";
import {
    P as x
} from "./PasteIndex.pg7bLYHu.js";
import "../vendors/vendor-swiper.BzK1hN__.js";
import {
    k as O,
    c as d,
    w as R,
    a5 as r
} from "../vendors/vendor-@vue.CBvhRkQp.js";

function c(e, l) {
    return (typeof e == "function" ? e() : e) ? l : void 0
}
const V = "_formItemsPhone_j01fo_25",
    D = "_common_bganimation_j01fo_1",
    F = {
        formItemsPhone: V,
        common_bganimation: D
    },
    [N] = y("form-item-phone"),
    H = O({
        name: N,
        props: I,
        emits: ["update:modelValue"],
        setup(e, {
            emit: l
        }) {
            const {
                t: m
            } = _(), n = d({
                get: () => e.modelValue,
                set: t => l("update:modelValue", i(t))
            }), a = q(), f = P(e.name);
            R([a.state.code], () => {
                n.value && f()
            });
            const i = t => t.replace(/\D/g, "").substring(0, a.range.max),
                h = d(() => e.placeholder ? e.placeholder : m("lobby.modal.login.placeholder.mobilePhoneNumber")),
                b = (t = "") => {
                    if (t = i(t), !e.required && !t) return !0;
                    if (e.required && !g(t)) return m("lobby.modal.login.placeholder.mobilePhoneNumber");
                    const o = C(t, a.state.code, [a.range.min, a.range.max]);
                    return o || !0
                };
            return () => {
                var t;
                return r(w, {
                    name: e.name,
                    rules: (t = e.rules) != null ? t : b,
                    required: e.showRequired,
                    class: F.formItemsPhone
                }, {
                    default: () => [r(v, {
                        type: "tel",
                        disabled: e.disabled,
                        value: n.value,
                        "onUpdate:value": o => n.value = o,
                        clearable: e.clearable,
                        "data-input-name": e.name,
                        placeholder: h.value,
                        onFocus: e.onFocus,
                        onBlur: e.onBlur
                    }, {
                        prefix: c(e.showPrefix, () => r(A, {
                            lockAreaCode: e.lockAreaCode,
                            hideArrowOnlyOne: e.hideArrowOnlyOne,
                            selectAttributes: e.selectAttributes,
                            showRequired: e.showRequired && !n.value,
                            autoInitData: e.autoInitData
                        }, null)),
                        suffix: c(!e.disabled && e.paste, () => r(x, {
                            onPaste: o => {
                                if (!o) return;
                                const {
                                    code: u,
                                    phone: s
                                } = a.parser(o);
                                u && s ? (a.includes(u) && a.initCode(u), n.value = s) : n.value = o
                            }
                        }, null))
                    })]
                })
            }
        }
    });
export {
    H as P
};
//# sourceMappingURL=Phone.CllSOksl.js.map