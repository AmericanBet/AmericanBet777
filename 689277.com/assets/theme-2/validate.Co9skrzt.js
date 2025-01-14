import {
    a as n,
    bq as i,
    br as s,
    bs as l,
    bt as u,
    bu as c,
    bv as g,
    bw as b
} from "./main.async.-NbSL2aO.js";

function f(t, e = [4, 16]) {
    const {
        t: r
    } = n();
    if (!i(t, e)) return r("lobby.modal.loginRegister.accountErrorMessage", {
        range: s(...e)
    })
}

function m(t, e, r = [4, 16]) {
    const a = t.indexOf("-") >= 0 ? t.split("-")[1] : t,
        {
            t: o
        } = n();
    if (!l(a, r)) return o("lobby.modal.loginRegister.phoneErrorMessage2", {
        segment: e,
        range: s(...r)
    })
}

function v(t) {
    const {
        t: e
    } = n();
    if (!u(t)) return e("lobby.modal.loginRegister.emailErrorMessage")
}

function p(t, e, r) {
    const {
        regex: a,
        message: o
    } = c({
        level: e,
        range: r
    });
    return a.test(t) ? void 0 : o
}

function R(t, e = [4, 16]) {
    const {
        t: r
    } = n();
    return new RegExp("^(?!0+$)\\d{".concat(e[0], ",").concat(e[1], "}$"), "i").test(t) ? void 0 : r("lobby.modal.loginRegister.rangeNumber", {
        range: s(...e)
    })
}

function w(t) {
    const {
        t: e
    } = n();
    if (!g(t)) return e("lobby.finance.withdraw.warning.cpf")
}

function y(t) {
    const {
        t: e
    } = n();
    if (!b(t)) return e("lobby.center.setting.error6")
}
export {
    R as a, y as b, p as c, v as d, m as e, f, w as v
};
//# sourceMappingURL=validate.Co9skrzt.js.map