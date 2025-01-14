import {
    gJ as r,
    gb as s,
    q as a
} from "./main.async.-NbSL2aO.js";
import "./main.Dmn05Mj-.js";
import "../vendors/vendor-default.p-wnugzB.js";
import "../vendors/vendor-bignumber.BRr1dcww.js";
import {
    u as m,
    L as n
} from "./Fragment.D5BqnI_q.js";
import "../vendors/vendor-swiper.BzK1hN__.js";
import {
    k as g,
    a5 as t
} from "../vendors/vendor-@vue.CBvhRkQp.js";
import "../vendors/vendor-stable.Cg92BvZJ.js";
import "../vendors/vendor-@intlify.BmUtFfVu.js";
import "../vendors/vendor-lodash.CYk3mlCa.js";
import "../vendors/vendor-@sentry.EjpkRnd3.js";
import "./usePlaceholder.C-9WdKmR.js";
import "./Password.BjkfIuVQ.js";
import "./validate.Co9skrzt.js";
import "./VerifyCode.BuOB841X.js";
import "./Email.DRREz_nV.js";
import "./Phone.CllSOksl.js";
import "./PasteIndex.pg7bLYHu.js";
import "./useRegister.wA9mtb-g.js";
import "./Realname.CXgW-xBI.js";
import "./PasswordConfirm.BtBO-0xi.js";
import "./ThirdPartyLoginBind.DoDfAqYd.js";
import "./ThirdPartyButton.CRU5pzTA.js";
const l = "_loginRegisterDialog_ndysr_25",
    p = "_common_bganimation_ndysr_1",
    c = {
        loginRegisterDialog: l,
        common_bganimation: p
    },
    [u] = a("pages-dialogs-login-register"),
    T = g({
        name: u,
        setup() {
            const {
                visible: o
            } = r("loginRegister"), e = m();
            return () => t(s, {
                show: o.value,
                "onUpdate:show": i => o.value = i,
                class: c.loginRegisterDialog,
                "data-theme": e.value.theme,
                closeControl: {
                    shouldOccupySpace: !0,
                    attrs: {
                        id: "loginRegisterModalCloseButton",
                        "data-sensors-click": "true"
                    }
                }
            }, {
                default: () => [t(n, null, null)]
            })
        }
    });
export {
    T as
    default
};
//# sourceMappingURL=LoginRegisterIndex.Cx2rLvRW.js.map