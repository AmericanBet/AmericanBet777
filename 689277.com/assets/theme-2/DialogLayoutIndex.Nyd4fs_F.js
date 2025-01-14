import {
    k as b,
    a5 as t,
    bz as r,
    br as d,
    ax as y
} from "../vendors/vendor-@vue.CBvhRkQp.js";
import {
    P as l,
    E as m
} from "./PersistCheckboxIndex.DjDtyJCh.js";
import {
    a as x,
    d8 as w,
    M as u,
    gb as N,
    q as S,
    cy as B,
    E as C,
    b as z
} from "./main.async.-NbSL2aO.js";
const E = "_dialogBox_rps1n_25",
    I = "_scrollBox_rps1n_38",
    R = "_common_bganimation_rps1n_1",
    i = {
        dialogBox: E,
        scrollBox: I,
        "persist-horizontal": "_persist-horizontal_rps1n_46",
        "persist-vertical": "_persist-vertical_rps1n_50",
        common_bganimation: R
    };

function p(e) {
    return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !y(e)
}
const [k] = S("pages-dialogs-can-receive"), P = b({
    name: k,
    props: {
        show: {
            type: Boolean,
            default: !1
        },
        title: {
            type: String,
            default: ""
        },
        persistName: {
            type: String,
            default: null
        },
        direction: {
            type: String,
            default: "horizontal"
        },
        data: {
            type: Object,
            default: () => {}
        }
    },
    emits: ["update:show"],
    setup(e, {
        slots: n,
        emit: g
    }) {
        const h = z(),
            {
                t: c
            } = x(),
            v = a => g("update:show", a),
            _ = () => {
                var a, o;
                B({
                    jumpMethod: "push",
                    template: String((a = e.data) == null ? void 0 : a.template),
                    activeId: String((o = e.data) == null ? void 0 : o.activeId)
                })
            },
            f = () => {
                h.push({
                    name: C.CANRECEIVE
                })
            };
        return () => {
            let a, o;
            return t(N, {
                class: i.dialogBox,
                closeControl: {
                    shouldOccupySpace: !0
                },
                show: e.show,
                "onUpdate:show": [s => e.show = s, v],
                title: e.title
            }, {
                default: () => [t(w, {
                    class: i.scrollBox
                }, {
                    default: () => {
                        var s;
                        return [(s = n.default) == null ? void 0 : s.call(n)]
                    }
                }), r(t("div", {
                    class: i["persist-horizontal"]
                }, [t(l, {
                    name: e.persistName
                }, null)]), [
                    [d, e.direction === "horizontal"]
                ]), e.persistName === m.canReceive && t("div", {
                    class: i["persist-vertical"]
                }, [t(l, {
                    checkRules: ["today"],
                    direction: "vertical",
                    name: e.persistName
                }, null), t(u, {
                    size: "small",
                    onClick: f
                }, p(a = c("lobby.game.nav.waitingCollect")) ? a : {
                    default: () => [a]
                })]), e.persistName !== m.canReceive && r(t("div", {
                    class: i["persist-vertical"]
                }, [t(l, {
                    direction: "vertical",
                    name: e.persistName
                }, null), t(u, {
                    size: "small",
                    onClick: _
                }, p(o = c("lobby.modal.task.forward")) ? o : {
                    default: () => [o]
                })]), [
                    [d, e.direction === "vertical"]
                ])]
            })
        }
    }
});
export {
    P as D
};
//# sourceMappingURL=DialogLayoutIndex.Nyd4fs_F.js.map