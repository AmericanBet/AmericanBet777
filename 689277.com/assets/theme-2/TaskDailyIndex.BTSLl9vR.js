import {
    E as u
} from "./PersistCheckboxIndex.DjDtyJCh.js";
import {
    a as k,
    gJ as c,
    cB as d,
    cU as e,
    q as y
} from "./main.async.-NbSL2aO.js";
import {
    s as D
} from "../vendors/vendor-stable.Cg92BvZJ.js";
import {
    C as f,
    D as g
} from "./DialogLayoutIndex.mb8HKFsE.js";
import {
    k as I,
    c as C,
    a5 as i
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
const [T] = y("pages-dialogs-task-daily"), M = I({
    name: T,
    setup() {
        const {
            t: n
        } = k(), {
            visible: o,
            onDialogOpen: l
        } = c("taskDaily"), r = d(), {
            constantTaskDataMapper: m
        } = D(r);
        l(() => {
            r.getTaskCategoryConstant(e.taskDaily)
        });
        const p = C(() => {
            var a, t, s;
            return (s = (t = (a = m.value) == null ? void 0 : a[e.taskDaily]) == null ? void 0 : t.rules) != null ? s : []
        });
        return () => i(g, {
            show: o.value,
            "onUpdate:show": a => o.value = a,
            title: n("lobby.modal.task.daily"),
            name: u.taskDaily
        }, {
            default: () => {
                var a;
                return [(a = p.value) == null ? void 0 : a.map((t, s) => i(f, {
                    template: e.taskDaily,
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
//# sourceMappingURL=TaskDailyIndex.BTSLl9vR.js.map