import {
    bF as u,
    bJ as a,
    x as g,
    bY as m
} from "./main.async.-NbSL2aO.js";
import {
    k as p,
    c as x,
    a5 as n
} from "../vendors/vendor-@vue.CBvhRkQp.js";
const f = {
        color: String,
        inactive: Boolean,
        text: String,
        showText: u,
        textColor: String,
        trackColor: String,
        strokeWidth: a,
        percent: {
            type: a,
            default: 0,
            validator: t => +t >= 0 && +t <= 100
        }
    },
    [h, o] = g("progress"),
    y = p({
        name: h,
        props: f,
        setup(t) {
            const i = x(() => t.inactive ? void 0 : t.color),
                c = () => {
                    const {
                        textColor: r,
                        text: e
                    } = t;
                    if (t.showText && e) return n("span", {
                        style: {
                            color: r,
                            left: "50%",
                            transform: "translate(-50% , 0)",
                            textOverflow: "ellipsis",
                            width: "100%",
                            overflow: "hidden"
                        },
                        class: o("text", {
                            inactive: t.inactive
                        })
                    }, [e])
                };
            return () => {
                const {
                    trackColor: r,
                    percent: e,
                    strokeWidth: s
                } = t, l = {
                    background: r,
                    height: m(s)
                }, d = {
                    width: "".concat(e, "%"),
                    background: i.value
                };
                return n("div", {
                    class: o(),
                    style: l
                }, [n("span", {
                    class: [o("portion"), t.inactive && o("portion-inactive")],
                    style: d
                }, null), c()])
            }
        }
    });
export {
    y as P
};
//# sourceMappingURL=Progress.CAeh84El.js.map