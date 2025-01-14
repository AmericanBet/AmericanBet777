import {
    gJ as m,
    i2 as c,
    d1 as l,
    gb as u,
    q as d
} from "./main.async.-NbSL2aO.js";
import {
    P as g,
    E as v
} from "./PersistCheckboxIndex.DjDtyJCh.js";
import x from "./NewCutOnceIndex.C-A0ovLy.js";
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
import "./index.D8AEoeVh.js";
import "./Table.BpjJGp6F.js";
import "./ShareModule.BQ4SzjDQ.js";
import "./index.JcARDJEC.js";
import "./CopyIndex.C4IXAgq0.js";
const b = "_dialogBox_1g77b_25",
    w = "_persistBox_1g77b_41",
    C = "_common_bganimation_1g77b_1",
    p = {
        dialogBox: b,
        persistBox: w,
        common_bganimation: C
    },
    [I] = d("pages-dialogs-new-cut-once"),
    Q = _({
        name: I,
        setup() {
            const {
                onDialogOpen: r,
                openOptions: t,
                visible: n
            } = m("newCutOnce"), o = c();
            return r(async () => {
                var e, a;
                if ((e = t.value) != null && e.activeId) {
                    o.setActiveId(t.value.activeId);
                    const s = await o.getEventItemDetail(Number((a = t.value) == null ? void 0 : a.activeId));
                    s && o.updateNewCutOnceCacheData(s)
                }
            }), () => i(u, {
                closeControl: {
                    shouldOccupySpace: !0
                },
                class: p.dialogBox,
                show: n.value,
                "onUpdate:show": e => n.value = e,
                title: ""
            }, {
                default: () => {
                    var e, a;
                    return [i(x, {
                        activeId: Number(o == null ? void 0 : o.activeId),
                        pageType: (e = t.value) == null ? void 0 : e.pageType
                    }, null), ((a = t.value) == null ? void 0 : a.pageType) === l.HomeModal && i("div", {
                        class: p.persistBox
                    }, [i(g, {
                        name: v.newCutOnce
                    }, null), i("div", null, null)])]
                }
            })
        }
    });
export {
    Q as
    default
};
//# sourceMappingURL=EventNewCutOnceIndex.VS9US_Jf.js.map