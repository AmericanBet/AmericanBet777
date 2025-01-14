const __vite__fileDeps = ["assets/theme-2/Style0Index.BGehspSV.js", "assets/theme-2/main.async.-NbSL2aO.js", "assets/theme-2/main.Dmn05Mj-.js", "assets/vendors/vendor-default.p-wnugzB.js", "assets/vendors/vendor-bignumber.BRr1dcww.js", "assets/vendors/vendor-@vue.CBvhRkQp.js", "assets/vendors/vendor-stable.Cg92BvZJ.js", "assets/vendors/vendor-@intlify.BmUtFfVu.js", "assets/vendors/vendor-lodash.CYk3mlCa.js", "assets/vendors/vendor-@sentry.EjpkRnd3.js", "assets/vendors/vendor-swiper.BzK1hN__.js", "assets/vendors/vendor-swiper.BXGtF0w8.css", "assets/theme-2/main.BfZHN-pr.css", "assets/theme-2/Style1Index.DCDesNmp.js", "assets/theme-2/Style1Index.Dck0ccDa.css", "assets/theme-2/Style2Index.Cc1NvyD2.js", "assets/theme-2/Style2Index.CPjjT7IO.css", "assets/theme-2/Style3Index.CCdnn8fz.js", "assets/theme-2/Style4Index.vV26OvLF.js", "assets/theme-2/Style4Index.CZ1L-HU7.css", "assets/theme-2/Style5Index.DB6ClzCM.js", "assets/theme-2/Style5Index.CR2EKB86.css", "assets/theme-2/Style6Index.C5vRMR78.js", "assets/theme-2/Style6Index.CK4fTaJr.css"],
    __vite__mapDeps = i => i.map(i => __vite__fileDeps[i]);
import {
    _ as i
} from "./main.Dmn05Mj-.js";
import {
    gJ as v,
    hI as _,
    d1 as g,
    gb as c,
    x as y
} from "./main.async.-NbSL2aO.js";
import {
    P as E,
    E as I
} from "./PersistCheckboxIndex.DjDtyJCh.js";
import {
    S as D
} from "./SignIndex.xUa4-35n.js";
import {
    k as T,
    c as r,
    a7 as P,
    a5 as t,
    F as f
} from "../vendors/vendor-@vue.CBvhRkQp.js";
import "../vendors/vendor-default.p-wnugzB.js";
import "../vendors/vendor-bignumber.BRr1dcww.js";
import "../vendors/vendor-stable.Cg92BvZJ.js";
import "../vendors/vendor-@intlify.BmUtFfVu.js";
import "../vendors/vendor-lodash.CYk3mlCa.js";
import "../vendors/vendor-@sentry.EjpkRnd3.js";
import "../vendors/vendor-swiper.BzK1hN__.js";
const O = "_common_bganimation_1gt5l_1",
    m = {
        "sign-dialog": "_sign-dialog_1gt5l_25",
        "sign-style0": "_sign-style0_1gt5l_64",
        "sign-style1": "_sign-style1_1gt5l_80",
        "sign-style2": "_sign-style2_1gt5l_91",
        "sign-style3": "_sign-style3_1gt5l_102",
        "sign-style4": "_sign-style4_1gt5l_105",
        "sign-style5": "_sign-style5_1gt5l_121",
        "sign-style6": "_sign-style6_1gt5l_161",
        common_bganimation: O
    },
    [b] = y("pages-dialogs-event-sign"),
    F = T({
        name: b,
        setup() {
            const {
                onDialogOpen: p,
                openOptions: s,
                visible: o
            } = v("eventSign"), d = {
                0: () => i(() =>
                    import ("./Style0Index.BGehspSV.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])),
                1: () => i(() =>
                    import ("./Style1Index.DCDesNmp.js"), __vite__mapDeps([13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14])),
                2: () => i(() =>
                    import ("./Style2Index.Cc1NvyD2.js"), __vite__mapDeps([15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 16])),
                3: () => i(() =>
                    import ("./Style3Index.CCdnn8fz.js"), __vite__mapDeps([17, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])),
                4: () => i(() =>
                    import ("./Style4Index.vV26OvLF.js"), __vite__mapDeps([18, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 19])),
                5: () => i(() =>
                    import ("./Style5Index.DB6ClzCM.js"), __vite__mapDeps([20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 21])),
                6: () => i(() =>
                    import ("./Style6Index.C5vRMR78.js"), __vite__mapDeps([22, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 23]))
            }, a = r(() => _().signDisplayType), u = r(() => P(d[a.value]));
            return p(() => {
                var e, n, l;
                (e = s.value) != null && e.activeId && ((n = s.value) == null ? void 0 : n.pageType) !== g.HomeModal && _().getEventItemDetail(Number((l = s.value) == null ? void 0 : l.activeId))
            }), () => {
                const e = s.value;
                return t(c, {
                    show: o.value,
                    "onUpdate:show": n => o.value = n,
                    class: [m["sign-dialog"], m["sign-style".concat(a.value)]]
                }, {
                    title: () => t("div", {
                        class: "sign-header"
                    }, [a.value !== void 0 && t(u.value, null, null)]),
                    default: () => t(f, null, [(e == null ? void 0 : e.activeId) && t(D, {
                        activeId: +(e == null ? void 0 : e.activeId),
                        pageType: e.pageType
                    }, null), (e == null ? void 0 : e.pageType) === g.HomeModal && t("div", {
                        class: "persist-box"
                    }, [t(E, {
                        name: I.eventSign
                    }, null), t("div", null, null)])])
                })
            }
        }
    });
export {
    F as
    default
};
//# sourceMappingURL=EventSignIndex.DiyFGlQm.js.map