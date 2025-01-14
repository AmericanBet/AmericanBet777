import {
    a as u,
    dw as D,
    cE as O,
    cF as k,
    a7 as y,
    cH as A,
    ae as b,
    cG as H,
    an as I
} from "./main.async.-NbSL2aO.js";
import {
    e as P
} from "../vendors/vendor-default.p-wnugzB.js";
const l = async ({
    params: a,
    onError: c,
    onSuccess: e,
    judgeResBefore: i,
    showSuccessModal: n = !0,
    showAudio: v = !0,
    updatePrize: m = !0,
    updateGetredDot: p = !0,
    showAnimate: h = !0,
    animateType: w
}) => {
    const {
        t: r
    } = u(), [s, t] = await P(D(a));
    if (s) {
        await O.checkRes({
            config: {
                err: s
            },
            checkOptions: {
                [k.userRestrict]: !0
            }
        }), i == null || i(t != null ? t : {}), c == null || c();
        return
    }
    i == null || i(t != null ? t : {}), n && y.success({
        message: r("lobby.event.invest.receiveSuccess")
    }), e == null || e(t), h && A(t == null ? void 0 : t.reward, w), v && b.Receive(), m && H().updatePrize(), p && I().freshDiscountRedDot()
};
export {
    l as a
};
//# sourceMappingURL=activeReceiveOne.DSlNTkxg.js.map