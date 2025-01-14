import {
    E as u
} from "./PersistCheckboxIndex.DjDtyJCh.js";
import {
    a as f,
    gJ as c,
    cB as k,
    cU as a,
    q as d
} from "./main.async.-NbSL2aO.js";
import {
    s as w
} from "../vendors/vendor-stable.Cg92BvZJ.js";
import {
    C as g,
    D as B
} from "./DialogLayoutIndex.mb8HKFsE.js";
import {
    k as I,
    c as y,
    a5 as r
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
const [C] = d("pages-dialogs-task-new-benefits"), M = I({
    name: C,
    setup() {
        const {
            t: i
        } = f(), {
            visible: o,
            onDialogOpen: m
        } = c("taskNewBenefits"), n = k(), {
            constantTaskDataMapper: p
        } = w(n);
        m(() => {
            n.getTaskCategoryConstant(a.newBenefits)
        });
        const l = y(() => {
            var e, t, s;
            return (s = (t = (e = p.value) == null ? void 0 : e[a.newBenefits]) == null ? void 0 : t.rules) != null ? s : []
        });
        return () => r(B, {
            show: o.value,
            "onUpdate:show": e => o.value = e,
            title: i("lobby.modal.task.newbieBenefit"),
            name: u.taskNewBenefits
        }, {
            default: () => {
                var e;
                return [(e = l.value) == null ? void 0 : e.map((t, s) => r(g, {
                    template: a.newBenefits,
                    key: t.ruleId,
                    taskRule: t,
                    taskIndex: s
                }, null))]
            }
        })
    }
});
export {
    M as
    default
};
//# sourceMappingURL=TaskNewBenefitsIndex.BwVSKiVp.js.map