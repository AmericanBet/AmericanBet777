import {
    c as d,
    ap as P,
    bd as S,
    be as L,
    a$ as g,
    bf as j,
    bg as u,
    bh as k,
    aT as a,
    bi as f,
    bj as v
} from "./main.async.-NbSL2aO.js";
import "./main.Dmn05Mj-.js";
import {
    e as c
} from "../vendors/vendor-default.p-wnugzB.js";
import "../vendors/vendor-bignumber.BRr1dcww.js";
import "../vendors/vendor-swiper.BzK1hN__.js";

function w(o) {
    return u.hasAbort(o) ? Promise.reject() : (f().onRegisterError(o), a().reportRegisterError(o), Promise.reject(o))
}

function x() {
    const o = d(),
        h = P(),
        {
            registerRemember: R
        } = S(),
        p = L();
    return {
        checkRegister: async e => {
            const n = await g.withRequestConfig({
                    data: e
                }),
                [t, s] = await c(j(n));
            if (t) return w(t);
            const i = u.getSymbol(s),
                r = s.data.data;
            return !e.platformId && (r != null && r.username) && (e.platformId = r == null ? void 0 : r.username), !e.passwd && (r != null && r.password) && (e.passwd = r == null ? void 0 : r.password), i && (e.validatePassed = 1), Promise.resolve({ ...e
            })
        },
        register: async e => {
            var m, b;
            const n = await g.withRequestConfig({
                    data: e
                }),
                [t, s] = await c(k(n)),
                i = (m = s == null ? void 0 : s.data.data) == null ? void 0 : m.userkey,
                r = (b = s == null ? void 0 : s.data.data) == null ? void 0 : b.deviceFingerprint;
            if (t || !i) return w(t);
            R(e), r && h.setFingerId(r), a().reportRegisterSuccess(!1, e), await c(o.fastLogin({
                userkey: i
            })), f().onRegisterSuccess(e)
        },
        thirdPartyRegister: async e => {
            const n = await g.withRequestConfig({
                    data: e
                }),
                [t, s] = await c(v(n));
            if (u.hasAbort(t)) return Promise.reject();
            const i = s == null ? void 0 : s.data.data;
            if (t || !i) return a().reportRegisterError(t), Promise.reject(t);
            p(i, "thirdLogin"), R(e), f().onRegisterSuccess(e), a().reportRegisterSuccess(!0, e)
        }
    }
}
export {
    x as u
};
//# sourceMappingURL=useRegister.wA9mtb-g.js.map