import "./main.Dmn05Mj-.js";
import {
    bp as c,
    a as f,
    b4 as p,
    O as w,
    aC as b,
    T as v,
    q as P,
    b6 as h
} from "./main.async.-NbSL2aO.js";
import "../vendors/vendor-default.p-wnugzB.js";
import "../vendors/vendor-bignumber.BRr1dcww.js";
import {
    c as g
} from "./validate.Co9skrzt.js";
import "../vendors/vendor-swiper.BzK1hN__.js";
import {
    y as C
} from "../vendors/vendor-lodash.CYk3mlCa.js";
import {
    k as x,
    c as t,
    a5 as s
} from "../vendors/vendor-@vue.CBvhRkQp.js";
const [y] = P("form-item-password-confirm"), A = x({
    name: y,
    props: c,
    emits: ["update:modelValue", "update:visiblePassword"],
    setup(e, {
        emit: l
    }) {
        const {
            t: n
        } = f(), r = t({
            get: () => e.modelValue,
            set: a => l("update:modelValue", i(a))
        }), u = t({
            get: () => e.visiblePassword,
            set: a => l("update:visiblePassword", a)
        }), i = a => a.replace(new RegExp("[^a-zA-Z0-9".concat(p, "]"), "g"), ""), d = t(() => e.placeholder ? e.placeholder : n("lobby.modal.login.placeholder.passwdConfirm")), m = (a = "") => {
            if (!e.required && !a) return !0;
            if (!C(e.password, a)) return n("lobby.modal.register.notMatch");
            const o = g(a, h());
            return o || !0
        };
        return () => {
            var a;
            return s(v, {
                name: e.name,
                rules: (a = e.rules) != null ? a : m,
                required: e.showRequired
            }, {
                default: () => [s(w, {
                    showEye: !0,
                    maxlength: 16,
                    type: r.value ? "password" : "text",
                    clearable: e.clearable,
                    value: r.value,
                    "onUpdate:value": o => r.value = o,
                    autocomplete: "new-password",
                    "data-input-name": e.name,
                    visiblePassword: u.value,
                    "onUpdate:visiblePassword": o => u.value = o,
                    placeholder: d.value,
                    onFocus: e.onFocus,
                    onBlur: e.onBlur
                }, {
                    prefix: () => s(b, {
                        icon: "/lobby_asset/common/web/common/input_icon_mm.svg"
                    }, null)
                })]
            })
        }
    }
});
export {
    A as P
};
//# sourceMappingURL=PasswordConfirm.BtBO-0xi.js.map