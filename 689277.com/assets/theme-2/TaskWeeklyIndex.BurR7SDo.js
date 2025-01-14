import {
    E as i
} from "./PersistCheckboxIndex.DjDtyJCh.js";
import {
    a as u,
    gJ as c,
    cB as y,
    cU as s,
    q as d
} from "./main.async.-NbSL2aO.js";
import {
    s as f
} from "../vendors/vendor-stable.Cg92BvZJ.js";
import {
    C as g,
    D as I
} from "./DialogLayoutIndex.mb8HKFsE.js";
import {
    k as C,
    c as T,
    a5 as n
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
const [W] = d("pages-dialogs-task-weekly"), K = C({
    name: W,
    setup() {
        const {
            t: l
        } = u(), {
            visible: o,
            onDialogOpen: m
        } = c("taskWeekly"), r = y(), {
            constantTaskDataMapper: p
        } = f(r);
        m(() => {
            r.getTaskCategoryConstant(s.taskWeekly)
        });
        const k = T(() => {
            var e, t, a;
            return (a = (t = (e = p.value) == null ? void 0 : e[s.taskWeekly]) == null ? void 0 : t.rules) != null ? a : []
        });
        return () => n(I, {
            show: o.value,
            "onUpdate:show": e => o.value = e,
            title: l("lobby.modal.task.weekly"),
            name: i.taskWeekly
        }, {
            default: () => {
                var e;
                return [(e = k.value) == null ? void 0 : e.map((t, a) => n(g, {
                    template: s.taskWeekly,
                    key: t.ruleId,
                    taskRule: t,
                    taskIndex: a
                }, null))]
            }
        })
    }
});
export {
    K as
    default
};
//# sourceMappingURL=TaskWeeklyIndex.BurR7SDo.js.map