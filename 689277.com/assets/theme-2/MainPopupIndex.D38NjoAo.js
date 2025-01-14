import {
    a as u,
    ho as _,
    u as d,
    I as g,
    a6 as b,
    M as m,
    P as w,
    q as h
} from "./main.async.-NbSL2aO.js";
import {
    k as f,
    a5 as o,
    ax as v
} from "../vendors/vendor-@vue.CBvhRkQp.js";
import "./main.Dmn05Mj-.js";
import "../vendors/vendor-default.p-wnugzB.js";
import "../vendors/vendor-bignumber.BRr1dcww.js";
import "../vendors/vendor-stable.Cg92BvZJ.js";
import "../vendors/vendor-@intlify.BmUtFfVu.js";
import "../vendors/vendor-lodash.CYk3mlCa.js";
import "../vendors/vendor-@sentry.EjpkRnd3.js";
import "../vendors/vendor-swiper.BzK1hN__.js";
const I = "_main_111em_25",
    M = "_logo_111em_30",
    P = "_title_111em_39",
    y = "_list_111em_51",
    x = "_item_111em_57",
    D = "_ghost_111em_82",
    N = "_bottom_111em_89",
    S = "_btns_111em_95",
    j = "_common_bganimation_111em_1",
    e = {
        main: I,
        logo: M,
        title: P,
        list: y,
        item: x,
        ghost: D,
        bottom: N,
        btns: S,
        common_bganimation: j
    };

function c(n) {
    return typeof n == "function" || Object.prototype.toString.call(n) === "[object Object]" && !v(n)
}
const [k] = h("download-main-popup"), E = f({
    name: k,
    setup() {
        const {
            t: n
        } = u(), {
            downloadInfo: t,
            openMiddleDownloadDialog: p
        } = _(), {
            dialogsStates: {
                downloadMainPopup: s
            },
            close: i
        } = d();
        return () => {
            let a, l;
            return o(w, {
                show: s.show,
                "onUpdate:show": r => s.show = r,
                position: "bottom"
            }, {
                default: () => [o("div", {
                    class: e.bottom
                }, [o("div", {
                    class: e.logo
                }, [t.value.logo ? o(g, {
                    src: t.value.logo
                }, null) : null, t.value.innerTitle || t.value.title ? o("div", {
                    class: e.title
                }, [t.value.innerTitle ? o(b, {
                    html: t.value.innerTitle
                }, null) : t.value.title]) : null]), o("div", {
                    class: e.btns
                }, [o(m, {
                    class: e.ghost,
                    onClick: () => {
                        i("downloadMainPopup")
                    }
                }, c(a = n("lobby.rightBar.cancel")) ? a : {
                    default: () => [a]
                }), o(m, {
                    onClick: () => {
                        i("downloadMainPopup"), p(!0)
                    }
                }, c(l = n("lobby.rightBar.downloadNowApp")) ? l : {
                    default: () => [l]
                })])])]
            })
        }
    }
});
export {
    E as
    default
};
//# sourceMappingURL=MainPopupIndex.D38NjoAo.js.map