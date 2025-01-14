import {
    ho as m,
    gJ as d,
    hq as r,
    I as p,
    a6 as u,
    fb as c,
    cA as g,
    $ as _,
    q as v
} from "./main.async.-NbSL2aO.js";
import {
    I as f
} from "./InstallAppButtonsIndex.CDAHHFm6.js";
import {
    k as w,
    a5 as a
} from "../vendors/vendor-@vue.CBvhRkQp.js";
import "./main.Dmn05Mj-.js";
import "../vendors/vendor-default.p-wnugzB.js";
import "../vendors/vendor-bignumber.BRr1dcww.js";
import "../vendors/vendor-stable.Cg92BvZJ.js";
import "../vendors/vendor-@intlify.BmUtFfVu.js";
import "../vendors/vendor-lodash.CYk3mlCa.js";
import "../vendors/vendor-@sentry.EjpkRnd3.js";
import "../vendors/vendor-swiper.BzK1hN__.js";
const h = "_download_181ha_25",
    I = "_info_181ha_31",
    D = "_title_181ha_42",
    b = "_common_bganimation_181ha_1",
    t = {
        download: h,
        info: I,
        title: D,
        common_bganimation: b
    },
    [x] = v("download-main-dialog"),
    J = w({
        name: x,
        setup() {
            const {
                downloadInfo: o
            } = m(), {
                visible: e,
                openOptions: l,
                onDialogOpen: i
            } = d("downloadMainDialog");
            return i(() => {
                r.setProps({
                    position: "Home",
                    dialogName: "downloadMainDialog"
                })
            }), () => a(_, {
                show: e.value,
                "onUpdate:show": n => e.value = n,
                class: t.download,
                width: g(690)
            }, {
                default: () => {
                    var n;
                    return [a("div", {
                        class: t.info
                    }, [o.value.logo ? a(p, {
                        src: o.value.logo
                    }, null) : null, (o.value.innerTitle || o.value.title) && a("div", {
                        class: t.title
                    }, [a("div", null, [o.value.innerTitle ? a(u, {
                        html: c(o.value.innerTitle),
                        format: s => s
                    }, null) : o.value.title])])]), a(f, {
                        type: (n = l.value) == null ? void 0 : n.type
                    }, null)]
                }
            })
        }
    });
export {
    J as
    default
};
//# sourceMappingURL=MainDialogIndex.BJkPeY3n.js.map