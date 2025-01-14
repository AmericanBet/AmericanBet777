import {
    a as M,
    cJ as S,
    cU as y,
    q as h,
    hG as p,
    d8 as D,
    M as T,
    gb as E,
    hH as O
} from "./main.async.-NbSL2aO.js";
import {
    R,
    D as j
} from "./RuleInfoIndex.wDtUI-O_.js";
import {
    L as z
} from "./index.CNRfc5ss.js";
import {
    k as I,
    bd as A,
    c as f,
    a5 as e,
    o as q,
    ax as L
} from "../vendors/vendor-@vue.CBvhRkQp.js";
import {
    E as _,
    P
} from "./PersistCheckboxIndex.DjDtyJCh.js";
import {
    b as $
} from "../vendors/vendor-stable.Cg92BvZJ.js";
const W = "_common_bganimation_124ua_1",
    n = {
        "card-layout": "_card-layout_124ua_25",
        "is-not-newBenefits": "_is-not-newBenefits_124ua_32",
        "card-layout-inner": "_card-layout-inner_124ua_38",
        "card-left": "_card-left_124ua_45",
        "card-layout-mystery": "_card-layout-mystery_124ua_49",
        "corner-day": "_corner-day_124ua_52",
        "un-open": "_un-open_124ua_86",
        "is-compact": "_is-compact_124ua_92",
        "compact-division": "_compact-division_124ua_107",
        common_bganimation: W
    },
    [H] = h("pages-task-list-item"),
    se = I({
        name: H,
        props: {
            template: {
                type: Number,
                default: 1
            },
            taskRule: {
                type: Object,
                default: null
            },
            taskIndex: {
                type: Number,
                default: 0
            },
            isCompleteMystery: {
                type: Boolean,
                default: !1
            },
            minAmount: {
                type: Number,
                default: 0
            },
            maxAmount: {
                type: Number,
                default: 0
            }
        },
        setup(a) {
            const {
                t: r
            } = M(), {
                taskRule: s,
                taskIndex: u,
                template: l,
                isCompleteMystery: i,
                minAmount: v,
                maxAmount: t
            } = A(a), o = f(() => u.value === 3), c = f(() => {
                var d;
                return ((d = s.value) == null ? void 0 : d.status) === S.UnOpen
            }), m = f(() => c.value || l.value === y.taskMystery && o.value && !i.value), N = () => {
                var d, g, x, b, B, w;
                return e("div", {
                    class: {
                        [n["card-layout-inner"]]: !0,
                        [n["card-layout-mystery"]]: l.value === y.taskMystery && !o.value,
                        "card-layout-inner": !0,
                        "theme-box-shadow": !0
                    }
                }, [e("div", {
                    class: {
                        [n["card-left"]]: !0
                    }
                }, [e(R, {
                    template: l.value,
                    ruleId: (d = s.value) == null ? void 0 : d.ruleId,
                    ruleIcon: (g = s.value) == null ? void 0 : g.icon,
                    nameExt: (x = s.value) == null ? void 0 : x.nameExt,
                    amount: (b = s.value) == null ? void 0 : b.reward,
                    activity: (B = s.value) == null ? void 0 : B.activity,
                    isShallowText: m.value,
                    isHideBottom: m.value,
                    btnKey: (w = s.value) == null ? void 0 : w.status
                }, {
                    desc: () => {
                        var C;
                        return l.value === y.taskMystery && o.value ? e(j, {
                            minAmount: v.value,
                            maxAmount: t.value
                        }, null) : (C = s.value) == null ? void 0 : C.name
                    }
                })])])
            }, U = () => l.value !== y.taskMystery || o.value ? null : e("div", {
                class: {
                    [n["corner-day"]]: !0,
                    [n["un-open"]]: c.value
                }
            }, [e("span", null, [r("lobby.modal.task.dayCount", {
                X: u.value + 1,
                x: u.value + 1
            })])]);
            return () => e(z, {
                class: {
                    [n["card-layout"]]: !0,
                    [n["is-compact"]]: !1,
                    [n["is-not-newBenefits"]]: l.value !== y.newBenefits
                }
            }, {
                default: () => [e("div", {
                    class: n["compact-division"]
                }, null), U(), N()]
            })
        }
    }),
    K = "_dialogBox_1qplz_25",
    V = "_scrollBox_1qplz_38",
    G = "_persistBox_1qplz_46",
    J = "_common_bganimation_1qplz_1",
    k = {
        dialogBox: K,
        scrollBox: V,
        persistBox: G,
        common_bganimation: J
    };

function X(a) {
    return typeof a == "function" || Object.prototype.toString.call(a) === "[object Object]" && !L(a)
}
const [F] = h("pages-dialogs-can-receive"), oe = I({
    name: F,
    props: {
        show: {
            type: Boolean,
            default: !1
        },
        title: {
            type: String,
            default: ""
        },
        name: {
            type: String,
            default: "taskNewBenefits"
        }
    },
    emits: ["update:show"],
    setup(a, {
        slots: r,
        emit: s
    }) {
        const {
            t: u
        } = $(), l = t => s("update:show", t), i = f(() => ({
            taskNewBenefits: {
                persistName: _.taskNewBenefits,
                taskUrlCategory: p.newBenefits
            },
            taskDaily: {
                persistName: _.taskDaily,
                taskUrlCategory: p.taskDaily
            },
            taskWeekly: {
                persistName: _.taskWeekly,
                taskUrlCategory: p.taskWeekly
            },
            taskMystery: {
                persistName: _.taskMystery,
                taskUrlCategory: p.taskMystery
            }
        })[a.name]);
        q(() => {});
        const v = () => {
            var t;
            O((t = i.value) == null ? void 0 : t.taskUrlCategory)
        };
        return () => {
            let t;
            return e(E, {
                class: k.dialogBox,
                closeControl: {
                    shouldOccupySpace: !0
                },
                show: a.show,
                "onUpdate:show": [o => a.show = o, l],
                title: a.title
            }, {
                default: () => {
                    var o, c;
                    return [e(D, {
                        class: k.scrollBox,
                        scrollbarTrigger: "none"
                    }, {
                        default: () => {
                            var m;
                            return [(m = r.default) == null ? void 0 : m.call(r)]
                        }
                    }), e("div", {
                        class: k.persistBox
                    }, [e(P, {
                        direction: "vertical",
                        name: (o = i.value) == null ? void 0 : o.persistName,
                        taskUrlCategory: (c = i.value) == null ? void 0 : c.taskUrlCategory
                    }, null), e(T, {
                        size: "small",
                        onClick: v
                    }, X(t = u("lobby.modal.task.forward")) ? t : {
                        default: () => [t]
                    })])]
                }
            })
        }
    }
});
export {
    se as C, oe as D
};
//# sourceMappingURL=DialogLayoutIndex.mb8HKFsE.js.map