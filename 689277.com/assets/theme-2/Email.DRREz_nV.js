import {
    b9 as E,
    a as O,
    ba as y,
    a0 as g,
    C as I,
    O as p,
    aC as q,
    T as k,
    q as R,
    aE as x
} from "./main.async.-NbSL2aO.js";
import "./main.Dmn05Mj-.js";
import "../vendors/vendor-default.p-wnugzB.js";
import "../vendors/vendor-bignumber.BRr1dcww.js";
import {
    k as A,
    c as m,
    r as i,
    bG as F,
    a5 as t
} from "../vendors/vendor-@vue.CBvhRkQp.js";
import {
    d as N
} from "./validate.Co9skrzt.js";
import "../vendors/vendor-swiper.BzK1hN__.js";
const T = "_dropdown_30o0l_25",
    V = "_list_30o0l_28",
    B = "_item_30o0l_69",
    L = "_active_30o0l_75",
    P = "_icon_30o0l_84",
    S = "_common_bganimation_30o0l_1",
    n = {
        dropdown: T,
        list: V,
        item: B,
        active: L,
        icon: P,
        common_bganimation: S
    },
    [D] = R("form-item-email"),
    J = A({
        name: D,
        props: E,
        emits: ["update:modelValue"],
        setup(o, {
            emit: d
        }) {
            const l = m({
                    get: () => o.modelValue,
                    set: e => d("update:modelValue", v(e))
                }),
                {
                    t: c
                } = O(),
                {
                    emialSelectOptions: u
                } = y(l, !0),
                s = i(!1),
                r = i(),
                f = i(),
                {
                    width: _
                } = F(r),
                v = e => (e = e.replace(/[\u4E00-\u9FA5\s]/g, ""), o.autoLowerCase && (e = e.toLocaleLowerCase()), e),
                b = m(() => o.placeholder ? o.placeholder : c("lobby.common.components.auth.email.inputTips")),
                w = (e = "") => {
                    if (!o.required && !e) return !0;
                    if (o.required && !x(e)) return c("lobby.modal.pay.personalEmailInfoRequired");
                    const a = N(e);
                    return a || !0
                },
                C = (...e) => {
                    var a;
                    s.value = !0, (a = o.onFocus) == null || a.call(o, ...e)
                },
                h = (...e) => {
                    var a;
                    s.value = !1, (a = o.onBlur) == null || a.call(o, ...e)
                };
            return () => {
                var e;
                return t(k, {
                    name: o.name,
                    rules: (e = o.rules) != null ? e : w,
                    required: o.showRequired
                }, {
                    default: () => [t(g, {
                        showArrow: !1,
                        destroyOnClose: !1,
                        closeOnClickAction: !1,
                        closeOnClickOverlay: !1,
                        closeOnClickOutside: !1,
                        placement: "bottom-start",
                        class: n.dropdown,
                        offset: [0, 0],
                        show: s.value && !!u.value.length && !!l.value,
                        transition: I.DropDown
                    }, {
                        reference: () => t("div", {
                            ref: r,
                            onClick: a => a.stopPropagation()
                        }, [t(p, {
                            ref: f,
                            clearable: o.clearable,
                            "data-input-name": o.name,
                            value: l.value,
                            "onUpdate:value": a => l.value = a,
                            autocomplete: "off",
                            placeholder: b.value,
                            onFocus: C,
                            onBlur: h
                        }, {
                            prefix: () => t(q, {
                                class: n.icon,
                                icon: "/lobby_asset/common/common/login/login_icon_yx02.png"
                            }, null)
                        })]),
                        default: () => t("ul", {
                            style: {
                                width: "".concat(_.value, "px")
                            },
                            class: n.list
                        }, [u.value.map(a => t("li", {
                            class: [n.item, {
                                [n.active]: l.value === a.value
                            }],
                            onClick: () => l.value = a.value
                        }, [a.label]))])
                    })]
                })
            }
        }
    });
export {
    J as E
};
//# sourceMappingURL=Email.DRREz_nV.js.map