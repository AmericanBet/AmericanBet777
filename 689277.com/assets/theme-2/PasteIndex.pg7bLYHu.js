import {
    a as p,
    x as c
} from "./main.async.-NbSL2aO.js";
import {
    k as i,
    a5 as m,
    aB as d
} from "../vendors/vendor-@vue.CBvhRkQp.js";
const l = {
        tag: {
            type: String,
            default: "div"
        }
    },
    [u, f] = c("paste"),
    x = i({
        name: u,
        props: l,
        emits: ["paste"],
        setup(a, {
            emit: o,
            slots: t,
            attrs: s
        }) {
            const {
                t: r
            } = p(), n = async () => {
                try {
                    const e = await navigator.clipboard.readText();
                    o("paste", e)
                } catch (e) {
                    console.error(e)
                }
            };
            return () => m(a.tag, d({
                class: f("text"),
                onClick: n
            }, s), {
                default: () => [t.default ? t.default() : r("lobby.common.tips.paste")]
            })
        }
    });
export {
    x as P
};
//# sourceMappingURL=PasteIndex.pg7bLYHu.js.map