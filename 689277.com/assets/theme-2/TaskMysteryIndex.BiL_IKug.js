import {
    a as v,
    gJ as D,
    cB as I,
    cU as i,
    q as T,
    cJ as h,
    c_ as E
} from "./main.async.-NbSL2aO.js";
import {
    E as M
} from "./PersistCheckboxIndex.DjDtyJCh.js";
import {
    s as b
} from "../vendors/vendor-stable.Cg92BvZJ.js";
import {
    C,
    D as A
} from "./DialogLayoutIndex.mb8HKFsE.js";
import {
    k as L,
    c as N,
    a5 as g
} from "../vendors/vendor-@vue.CBvhRkQp.js";
import "./main.Dmn05Mj-.js";
import "../vendors/vendor-default.p-wnugzB.js";
import "../vendors/vendor-bignumber.BRr1dcww.js";
import "../vendors/vendor-lodash.CYk3mlCa.js";
import "../vendors/vendor-@sentry.EjpkRnd3.js";
import "../vendors/vendor-swiper.BzK1hN__.js";
import "../vendors/vendor-@intlify.BmUtFfVu.js";
import "./RuleInfoIndex.wDtUI-O_.js";
import "./const.kNgtypBJ.js";
import "./index.CNRfc5ss.js";
const [U] = T("pages-dialogs-task-mystery"), H = L({
    name: U,
    setup() {
        const {
            t: l
        } = v(), {
            visible: u,
            onDialogOpen: f
        } = D("taskMystery"), p = I(), {
            constantTaskDataMapper: x
        } = b(p);
        f(() => {
            p.getTaskCategoryConstant(i.taskMystery)
        });
        const r = () => ({
                status: h.UnOpen,
                name: l("lobby.modal.task.taskUnstart"),
                ruleId: 0,
                icon: E.Nothing,
                nameExt: "",
                reward: 0,
                activity: 0
            }),
            m = N(() => {
                var n, s, o;
                const t = (n = x.value) == null ? void 0 : n[i.taskMystery],
                    e = (s = t == null ? void 0 : t.rules) != null ? s : [];
                let a = [];
                return e.length === 1 ? a = [...e, r(), r()] : e.length === 2 && (a = [...e, r()]), a.length === 3 && !((o = t == null ? void 0 : t.taskData) != null && o.disableLastProfit) && a.push(r()), {
                    ruleList: a,
                    constantData: t
                }
            });
        return () => g(A, {
            show: u.value,
            "onUpdate:show": t => u.value = t,
            title: l("lobby.modal.task.arcane"),
            name: M.taskMystery
        }, {
            default: () => {
                var t, e;
                return [(e = (t = m.value) == null ? void 0 : t.ruleList) == null ? void 0 : e.map((a, n) => {
                    var s, o, y, c, k, d;
                    return g(C, {
                        template: i.taskMystery,
                        taskRule: a,
                        key: a.ruleId,
                        taskIndex: n,
                        minAmount: (y = (o = (s = m.value) == null ? void 0 : s.constantData) == null ? void 0 : o.taskData) == null ? void 0 : y.minAmount,
                        maxAmount: (d = (k = (c = m.value) == null ? void 0 : c.constantData) == null ? void 0 : k.taskData) == null ? void 0 : d.maxAmount
                    }, null)
                })]
            }
        })
    }
});
export {
    H as
    default
};
//# sourceMappingURL=TaskMysteryIndex.BiL_IKug.js.map