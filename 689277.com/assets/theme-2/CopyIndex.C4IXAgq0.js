import {
    a as m,
    I as i,
    q as p,
    a7 as r
} from "./main.async.-NbSL2aO.js";
import {
    F as u
} from "../vendors/vendor-default.p-wnugzB.js";
import {
    k as l,
    a5 as e
} from "../vendors/vendor-@vue.CBvhRkQp.js";
const y = "_copy_1qo0e_25",
    d = "_common_bganimation_1qo0e_1",
    f = {
        copy: y,
        common_bganimation: d
    },
    [_] = p("copy"),
    h = l({
        name: _,
        props: {
            icon: {
                type: String,
                default: "/lobby_asset/{layout}-{bg}-common/web/common/comm_icon_copy.svg",
                require: !1
            },
            text: {
                type: String,
                default: "",
                require: !0
            },
            showToast: {
                type: Boolean,
                default: !0
            }
        },
        emits: ["copied"],
        setup(o, {
            slots: t,
            emit: a
        }) {
            const {
                t: n
            } = m(), s = () => {
                u.copy(o.text), o.showToast && r.success(n("lobby.common.tips.copy"), "flush"), a("copied")
            };
            return () => e("span", {
                onClick: c => {
                    c.stopPropagation(), s()
                },
                class: f.copy
            }, [t.default ? t.default() : e(i, {
                src: o.icon,
                tag: "img"
            }, null)])
        }
    });
export {
    h as C
};
//# sourceMappingURL=CopyIndex.C4IXAgq0.js.map