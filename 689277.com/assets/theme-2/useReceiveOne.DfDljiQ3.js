import {
    a as f,
    j8 as L,
    jb as b,
    cN as O,
    cE as v,
    cX as p,
    jc as m,
    cF as w,
    a7 as E,
    jd as j,
    cH as h,
    ae as A,
    cG as G,
    an as N,
    dv as r
} from "./main.async.-NbSL2aO.js";
import {
    R as P,
    V
} from "./ModalContentIndex.LdmGwKc5.js";
import {
    e as R
} from "../vendors/vendor-default.p-wnugzB.js";
import {
    r as y
} from "../vendors/vendor-@vue.CBvhRkQp.js";
const B = () => {
    const {
        t: i
    } = f(), l = y(null), g = y(null), a = y(!1), k = s => {
        l.value = s, setTimeout(() => {
            l.value = null
        }, 500)
    }, T = async (s, e) => {
        var u;
        if (a.value) return;
        const {
            id: c,
            receiveDuration: o,
            oldRewardId: n,
            logsCategory: t
        } = s;
        if ((u = L().receivedList) != null && u.includes(c)) return;
        if (o > 0) return k(c);
        if (t === b.Large) {
            O({
                message: i("lobby.event.verifyTips")
            });
            return
        }
        if (a.value = !0, await v.check({
                checkOptions: {
                    [p.task]: !0,
                    [p.forbidReceive]: !0,
                    [p.receiveType]: !0
                },
                eventData: {
                    receiveDeviceType: s == null ? void 0 : s.receiveDeviceType,
                    taskCondition: s == null ? void 0 : s.receiveCondition
                }
            })) {
            a.value = !1;
            return
        }
        g.value = c, n > 0 ? C(n, e) : M(s, e)
    }, S = s => {
        const {
            activeType: e,
            activeId: c,
            ruleId: o,
            template: n,
            id: t
        } = s;
        switch (e) {
            case r.Events:
                return {
                    activeId: c,
                    receiveId: "".concat(t)
                };
            case r.Task:
                return {
                    template: n,
                    ruleid: +o,
                    taskid: c,
                    receiveLogId: t
                };
            case r.Rebate:
                return {
                    receiveId: t
                };
            case r.Vip:
                return {
                    types: V.get(n),
                    logId: t
                };
            case r.RechargeFund:
                return t;
            default:
                return
        }
    }, C = async (s, e) => {
        const [c] = await R(m({
            id: s
        }));
        if (a.value = !1, c) {
            await v.checkRes({
                config: {
                    err: c,
                    backupErrMsg: i("lobby.reward.base.receivedError")
                },
                checkOptions: {
                    [w.userRestrict]: !0
                }
            }), e == null || e(!1);
            return
        }
        E.success(i("lobby.event.invest.receiveSuccess")), e == null || e(!0)
    }, M = async (s, e) => {
        a.value = !0;
        const {
            activeType: c,
            logsCategory: o,
            reward: n
        } = s, t = o === b.Manual ? j : P.get(c), d = S(s), [u] = d ? await R(t(d)) : await R(t());
        if (a.value = !1, u) {
            await v.checkRes({
                config: {
                    err: u,
                    backupErrMsg: i("lobby.reward.base.receivedError")
                },
                checkOptions: {
                    [w.userRestrict]: !0
                }
            }), e == null || e(!1);
            return
        }
        E.success(i("lobby.event.invest.receiveSuccess")), h(n), A.Receive(), G().updatePrize(), N().freshDiscountRedDot(), e == null || e(!0)
    };
    return {
        shakeId: l,
        receiveId: g,
        isReceiveLoading: a,
        handleBtnShake: k,
        handleReceive: T
    }
};
export {
    B as u
};
//# sourceMappingURL=useReceiveOne.DfDljiQ3.js.map