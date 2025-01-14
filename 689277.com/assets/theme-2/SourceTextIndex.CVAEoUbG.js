import {
    a as i,
    q as m,
    dx as u,
    dy as x,
    $ as w
} from "./main.async.-NbSL2aO.js";
import {
    M as _
} from "./ModalContentIndex.LdmGwKc5.js";
import {
    k as b,
    a5 as a
} from "../vendors/vendor-@vue.CBvhRkQp.js";
const y = "_common_bganimation_1jy2r_1",
    o = {
        "source-text": "_source-text_1jy2r_25",
        "modal-content-box": "_modal-content-box_1jy2r_30",
        common_bganimation: y
    },
    [f] = m("pages-components-source-text"),
    C = b({
        name: f,
        props: {
            rewardData: {
                type: Object,
                default: null
            },
            isRecords: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const {
                t: s
            } = i(), n = () => {
                w.showDialog({
                    title: s("lobby.reward.base.templateTitle"),
                    className: o["modal-content-box"],
                    message: () => a(_, {
                        rewardData: e.rewardData,
                        isRecords: e.isRecords,
                        hiddenStatus: !e.isRecords
                    }, null),
                    showConfirmButton: !1,
                    showCloseButton: !0
                })
            }, c = async () => {
                const {
                    activeType: t,
                    template: r,
                    activeId: l,
                    ruleId: d
                } = e.rewardData;
                await u(t, r, l, Number(d)) ? x(e.rewardData) : n()
            };
            return () => {
                var t;
                return a("span", {
                    onClick: c,
                    class: [o["source-text"], "source-text"]
                }, [(t = e.rewardData) == null ? void 0 : t.activeTypeText])
            }
        }
    });
export {
    C as S
};
//# sourceMappingURL=SourceTextIndex.CVAEoUbG.js.map