import {
    b2 as c,
    af as u,
    I as m,
    q as d,
    b1 as g
} from "./main.async.-NbSL2aO.js";
import {
    k as f,
    r as y,
    c as l,
    f as h,
    b,
    a5 as t
} from "../vendors/vendor-@vue.CBvhRkQp.js";
const v = {
        show: {
            type: Boolean,
            default: !0
        },
        type: {
            type: String,
            required: !0
        },
        image: {
            type: Object,
            required: !0
        },
        title: {
            type: String
        },
        mode: {
            type: String,
            default: "col"
        }
    },
    [w, a] = d("third-party-button"),
    G = f({
        name: w,
        props: v,
        emits: ["click"],
        setup(e, {
            emit: r
        }) {
            const o = y(),
                s = c(),
                i = l(() => e.type === u.Google);
            h(() => {
                i.value && o.value && (g.package.isApp || s.button(o.value, e.mode === "row" ? "standard" : "icon"))
            }), b(() => {
                i.value && s.destroy()
            });
            const n = l(() => ({
                width: e.image.width,
                height: e.image.height
            }));
            return () => {
                if (e.show) return t("div", {
                    class: a({
                        [e.type.toLocaleLowerCase()]: !0
                    }),
                    onClick: () => r("click"),
                    "data-mode": e.mode
                }, [i.value && t("span", {
                    ref: o,
                    class: a("google_button")
                }, null), t(m, {
                    src: e.image.src,
                    class: a("image"),
                    style: { ...n.value
                    }
                }, null), e.title && t("span", {
                    class: a("title")
                }, [e.title])])
            }
        }
    });
export {
    G as T
};
//# sourceMappingURL=ThirdPartyButton.CRU5pzTA.js.map