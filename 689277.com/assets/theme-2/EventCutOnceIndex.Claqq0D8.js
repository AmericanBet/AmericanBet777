import {
    gJ as m,
    hJ as c,
    d1 as l,
    gb as u,
    q as d
} from "./main.async.-NbSL2aO.js";
import {
    P as g,
    E as v
} from "./PersistCheckboxIndex.DjDtyJCh.js";
import x from "./CutOnceIndex.xvTPlnBg.js";
import {
    k as _,
    a5 as i
} from "../vendors/vendor-@vue.CBvhRkQp.js";
import "./main.Dmn05Mj-.js";
import "../vendors/vendor-default.p-wnugzB.js";
import "../vendors/vendor-bignumber.BRr1dcww.js";
import "../vendors/vendor-stable.Cg92BvZJ.js";
import "../vendors/vendor-@intlify.BmUtFfVu.js";
import "../vendors/vendor-lodash.CYk3mlCa.js";
import "../vendors/vendor-@sentry.EjpkRnd3.js";
import "../vendors/vendor-swiper.BzK1hN__.js";
import "./ReceiveCountdownIndex.CrNog2Lx.js";
import "./index.BCftLJjj.js";
import "./Progress.CAeh84El.js";
import "./activeReceiveOne.DSlNTkxg.js";
import "./index.D6ayqpk3.js";
import "./List.BPt-sskq.js";
import "./PublicIntroductionIndex.CbEX-jAB.js";
import "./props.BOsWQ7Qa.js";
import "./ShareModule.BQ4SzjDQ.js";
import "./index.JcARDJEC.js";
import "./CopyIndex.C4IXAgq0.js";
import "./index.D8AEoeVh.js";
import "./Table.BpjJGp6F.js";
const b = "_dialogBox_1g77b_25",
    I = "_persistBox_1g77b_41",
    O = "_common_bganimation_1g77b_1",
    r = {
        dialogBox: b,
        persistBox: I,
        common_bganimation: O
    },
    [f] = d("pages-dialogs-cut-once"),
    Q = _({
        name: f,
        setup() {
            const {
                onDialogOpen: n,
                openOptions: e,
                visible: s
            } = m("cutOnce"), t = c();
            return n(async () => {
                var o, a;
                if ((o = e.value) != null && o.activeId) {
                    t.setActiveId(e.value.activeId);
                    const p = await t.getEventItemDetail(Number((a = e.value) == null ? void 0 : a.activeId));
                    p && t.updateCutOnceCacheData(p)
                }
            }), () => i(u, {
                closeControl: {
                    shouldOccupySpace: !0
                },
                class: r.dialogBox,
                show: s.value,
                "onUpdate:show": o => s.value = o,
                title: ""
            }, {
                default: () => {
                    var o, a;
                    return [i(x, {
                        activeId: Number(t == null ? void 0 : t.activeId),
                        pageType: (o = e.value) == null ? void 0 : o.pageType
                    }, null), ((a = e.value) == null ? void 0 : a.pageType) === l.HomeModal && i("div", {
                        class: r.persistBox
                    }, [i(g, {
                        name: v.cutOnce
                    }, null)])]
                }
            })
        }
    });
export {
    Q as
    default
};
//# sourceMappingURL=EventCutOnceIndex.Claqq0D8.js.map