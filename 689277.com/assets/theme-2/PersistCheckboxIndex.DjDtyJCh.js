import {
    a as y,
    hF as C,
    Q as i,
    q as _
} from "./main.async.-NbSL2aO.js";
import {
    k as f,
    bd as p,
    r as v,
    o as b,
    a5 as s
} from "../vendors/vendor-@vue.CBvhRkQp.js";
var x = (e => (e.cutOnce = "cutOnce", e.newCutOnce = "newCutOnce", e.taskNewBenefits = "taskNewBenefits", e.taskDaily = "taskDaily", e.taskWeekly = "taskWeekly", e.taskMystery = "taskMystery", e.canReceive = "canReceive", e.firstCharge = "firstCharge", e.eventSign = "eventSign", e.unlogin = "unlogin", e))(x || {});
const O = "_persistCheckbox_29y2d_25",
    U = "_horizontal_29y2d_35",
    R = "_vertical_29y2d_40",
    w = "_common_bganimation_29y2d_1",
    k = {
        persistCheckbox: O,
        horizontal: U,
        vertical: R,
        common_bganimation: w
    },
    [N] = _("pages-components-dialog-checkbox"),
    S = f({
        name: N,
        props: {
            name: {
                type: String,
                default: ""
            },
            taskUrlCategory: {
                type: Number,
                default: null
            },
            direction: {
                type: String,
                default: "horizontal"
            },
            checkRules: {
                type: Array,
                default: () => ["today", "ever"]
            }
        },
        setup(e) {
            const {
                t: d
            } = y(), {
                name: t,
                direction: h,
                taskUrlCategory: n
            } = p(e), o = C(), c = v(!1), l = v(!1);
            b(() => {
                o.setUserOpeningRecord(t.value, n.value);
                const a = o.getUserChecked(t.value, "today", n.value),
                    r = o.getUserChecked(t.value, "never", n.value);
                c.value = a, l.value = r
            });
            const m = a => {
                    c.value = a, o.setUserChecked(t.value, "today", a, n.value)
                },
                g = a => {
                    l.value = a, o.setUserChecked(t.value, "never", a, n.value)
                };
            return () => {
                var a, r;
                return s("div", {
                    class: [k.persistCheckbox, k[h.value]]
                }, [((a = e.checkRules) == null ? void 0 : a.includes("today")) && s(i, {
                    modelValue: c.value,
                    "onUpdate:modelValue": u => c.value = u,
                    onChange: m
                }, {
                    default: () => [s("span", null, [d("lobby.modal.force.main_not_show_again_today")])]
                }), ((r = e.checkRules) == null ? void 0 : r.includes("ever")) && s(i, {
                    modelValue: l.value,
                    "onUpdate:modelValue": u => l.value = u,
                    onChange: g
                }, {
                    default: () => [s("span", null, [d("lobby.modal.task.neverPop")])]
                })])
            }
        }
    }),
    I = S;
export {
    x as E, I as P
};
//# sourceMappingURL=PersistCheckboxIndex.DjDtyJCh.js.map