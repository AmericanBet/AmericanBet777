import {
    J as g
} from "../vendors/vendor-default.p-wnugzB.js";
import {
    gJ as _,
    a as C,
    bd as b,
    aR as w,
    M as h,
    gb as P,
    q as v,
    gP as y,
    a7 as R,
    r as U,
    aV as D
} from "./main.async.-NbSL2aO.js";
import {
    R as E
} from "./main.Dmn05Mj-.js";
import "../vendors/vendor-bignumber.BRr1dcww.js";
import "../vendors/vendor-swiper.BzK1hN__.js";
import {
    P as F
} from "./Password.BjkfIuVQ.js";
import {
    P as N
} from "./PasswordConfirm.BtBO-0xi.js";
import {
    k as O,
    r as S,
    d as V,
    a5 as a,
    ax as A
} from "../vendors/vendor-@vue.CBvhRkQp.js";
import "../vendors/vendor-stable.Cg92BvZJ.js";
import "../vendors/vendor-@intlify.BmUtFfVu.js";
import "../vendors/vendor-lodash.CYk3mlCa.js";
import "../vendors/vendor-@sentry.EjpkRnd3.js";
import "./validate.Co9skrzt.js";
const G = "_forceChangePasswordDialog_1lren_25",
    I = "_forceChangePassword_1lren_25",
    M = "_title_1lren_28",
    j = "_desc_1lren_35",
    k = "_submit_1lren_39",
    q = "_common_bganimation_1lren_1",
    r = {
        forceChangePasswordDialog: G,
        forceChangePassword: I,
        title: M,
        desc: j,
        submit: k,
        common_bganimation: q
    };

function x(o) {
    return typeof o == "function" || Object.prototype.toString.call(o) === "[object Object]" && !A(o)
}
const [H] = v("pages-dialogs-force-change-password"), es = O({
    name: H,
    setup() {
        const {
            visible: o,
            openOptions: c,
            closeDialog: u
        } = _("forceChangePassword"), {
            t
        } = C(), n = S(!1), {
            validate: m,
            validateField: d
        } = g(), {
            editFillArray: p
        } = b(), e = V({
            userpass: "",
            confirmUserpass: ""
        });
        w("CONFIG_CHANGE_SUCCESS", () => m());
        const f = async () => {
            if ((await m()).valid && !n.value && c.value) {
                n.value = !0;
                try {
                    await y(e.userpass), p({
                        userpass: e.userpass
                    }), R.success({
                        message: t("lobby.modal.forceChangePwd.successTips"),
                        onClose() {
                            var s, l;
                            u("forceChangePassword"), (l = (s = c.value) == null ? void 0 : s.onSuccess) == null || l.call(s)
                        }
                    })
                } catch (s) {
                    const {
                        code: l
                    } = U(s);
                    l === E.CONFIG_CHANGE_PASSWORD_FORMAT_ERR && D("CONFIG_CHANGE_ERR").emit()
                } finally {
                    n.value = !1
                }
            }
        };
        return () => {
            let i;
            return a(P, {
                show: o.value,
                "onUpdate:show": s => o.value = s,
                class: r.forceChangePasswordDialog
            }, {
                default: () => [a("div", {
                    class: r.forceChangePassword
                }, [a("h3", {
                    class: r.title
                }, [t("lobby.modal.forceChangePwd.title")]), a(F, {
                    name: "userpass",
                    useConfig: !0,
                    required: !0,
                    modelValue: e.userpass,
                    "onUpdate:modelValue": s => e.userpass = s,
                    onChange: s => {
                        s && e.confirmUserpass && d("confirmUserpass")
                    }
                }, null), a(N, {
                    required: !0,
                    name: "confirmUserpass",
                    password: e.userpass,
                    modelValue: e.confirmUserpass,
                    "onUpdate:modelValue": s => e.confirmUserpass = s
                }, null), a("div", {
                    class: r.desc
                }, [t("lobby.modal.forceChangePwd.tips")]), a("div", {
                    class: r.submit
                }, [a(h, {
                    block: !0,
                    type: "primary",
                    loading: n.value,
                    onClick: f
                }, x(i = t("lobby.common.tips.confirm")) ? i : {
                    default: () => [i]
                })])])]
            })
        }
    }
});
export {
    es as
    default
};
//# sourceMappingURL=ForceChangePasswordIndex.BkX-drq5.js.map