/*!
 * shared v9.13.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
const Bn = typeof window < "u",
    Jn = (e, t = !1) => t ? Symbol.for(e) : Symbol(e),
    St = (e, t, n) => yt({
        l: e,
        k: t,
        s: n
    }),
    yt = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
    $ = e => typeof e == "number" && isFinite(e),
    bt = e => Ve(e) === "[object Date]",
    Pe = e => Ve(e) === "[object RegExp]",
    he = e => U(e) && Object.keys(e).length === 0,
    ae = Object.assign;
let De;
const me = () => De || (De = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function ke(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
}
const Pt = Object.prototype.hasOwnProperty;

function Qn(e, t) {
    return Pt.call(e, t)
}
const V = Array.isArray,
    v = e => typeof e == "function",
    S = e => typeof e == "string",
    Y = e => typeof e == "boolean",
    w = e => e !== null && typeof e == "object",
    Dt = e => w(e) && v(e.then) && v(e.catch),
    He = Object.prototype.toString,
    Ve = e => He.call(e),
    U = e => {
        if (!w(e)) return !1;
        const t = Object.getPrototypeOf(e);
        return t === null || t.constructor === Object
    },
    kt = e => e == null ? "" : V(e) || U(e) && e.toString === He ? JSON.stringify(e, null, 2) : String(e);

function Mt(e, t = "") {
    return e.reduce((n, s, c) => c === 0 ? n + s : n + t + s, "")
}

function je(e) {
    let t = e;
    return () => ++t
}

function Rt(e, t) {
    typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack))
}
const ue = e => !w(e) || V(e);

function qn(e, t) {
    if (ue(e) || ue(t)) throw new Error("Invalid value");
    const n = [{
        src: e,
        des: t
    }];
    for (; n.length;) {
        const {
            src: s,
            des: c
        } = n.pop();
        Object.keys(s).forEach(l => {
            ue(s[l]) || ue(c[l]) ? c[l] = s[l] : n.push({
                src: s[l],
                des: c[l]
            })
        })
    }
}
/*!
 * message-compiler v9.13.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
function Ut(e, t, n) {
    return {
        line: e,
        column: t,
        offset: n
    }
}

function fe(e, t, n) {
    return {
        start: e,
        end: t
    }
}
const Ft = /\{([0-9a-zA-Z]+)\}/g;

function xe(e, ...t) {
    return t.length === 1 && wt(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Ft, (n, s) => t.hasOwnProperty(s) ? t[s] : "")
}
const Be = Object.assign,
    Me = e => typeof e == "string",
    wt = e => e !== null && typeof e == "object";

function Je(e, t = "") {
    return e.reduce((n, s, c) => c === 0 ? n + s : n + t + s, "")
}
const Ie = {
        USE_MODULO_SYNTAX: 1,
        __EXTEND_POINT__: 2
    },
    vt = {
        [Ie.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
    };

function Wt(e, t, ...n) {
    const s = xe(vt[e], ...n || []),
        c = {
            message: String(s),
            code: e
        };
    return t && (c.location = t), c
}
const A = {
        EXPECTED_TOKEN: 1,
        INVALID_TOKEN_IN_PLACEHOLDER: 2,
        UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
        UNKNOWN_ESCAPE_SEQUENCE: 4,
        INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
        UNBALANCED_CLOSING_BRACE: 6,
        UNTERMINATED_CLOSING_BRACE: 7,
        EMPTY_PLACEHOLDER: 8,
        NOT_ALLOW_NEST_PLACEHOLDER: 9,
        INVALID_LINKED_FORMAT: 10,
        MUST_HAVE_MESSAGES_IN_PLURAL: 11,
        UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
        UNEXPECTED_EMPTY_LINKED_KEY: 13,
        UNEXPECTED_LEXICAL_ANALYSIS: 14,
        UNHANDLED_CODEGEN_NODE_TYPE: 15,
        UNHANDLED_MINIFIER_NODE_TYPE: 16,
        __EXTEND_POINT__: 17
    },
    Kt = {
        [A.EXPECTED_TOKEN]: "Expected token: '{0}'",
        [A.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
        [A.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
        [A.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
        [A.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
        [A.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
        [A.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
        [A.EMPTY_PLACEHOLDER]: "Empty placeholder",
        [A.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
        [A.INVALID_LINKED_FORMAT]: "Invalid linked format",
        [A.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
        [A.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
        [A.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
        [A.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
        [A.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
        [A.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
    };

function ie(e, t, n = {}) {
    const {
        domain: s,
        messages: c,
        args: l
    } = n, _ = xe((c || Kt)[e] || "", ...l || []), E = new SyntaxError(String(_));
    return E.code = e, t && (E.location = t), E.domain = s, E
}

function Yt(e) {
    throw e
}
const J = " ",
    $t = "\r",
    K = "\n",
    Xt = "\u2028",
    Gt = "\u2029";

function Ht(e) {
    const t = e;
    let n = 0,
        s = 1,
        c = 1,
        l = 0;
    const _ = N => t[N] === $t && t[N + 1] === K,
        E = N => t[N] === K,
        f = N => t[N] === Gt,
        L = N => t[N] === Xt,
        g = N => _(N) || E(N) || f(N) || L(N),
        h = () => n,
        T = () => s,
        y = () => c,
        b = () => l,
        P = N => _(N) || f(N) || L(N) ? K : t[N],
        I = () => P(n),
        C = () => P(n + l);

    function D() {
        return l = 0, g(n) && (s++, c = 0), _(n) && n++, n++, c++, t[n]
    }

    function i() {
        return _(n + l) && l++, l++, t[n + l]
    }

    function o() {
        n = 0, s = 1, c = 1, l = 0
    }

    function m(N = 0) {
        l = N
    }

    function d() {
        const N = n + l;
        for (; N !== n;) D();
        l = 0
    }
    return {
        index: h,
        line: T,
        column: y,
        peekOffset: b,
        charAt: P,
        currentChar: I,
        currentPeek: C,
        next: D,
        peek: i,
        reset: o,
        resetPeek: m,
        skipToPeek: d
    }
}
const q = void 0,
    Vt = ".",
    Re = "'",
    jt = "tokenizer";

function xt(e, t = {}) {
    const n = t.location !== !1,
        s = Ht(e),
        c = () => s.index(),
        l = () => Ut(s.line(), s.column(), s.index()),
        _ = l(),
        E = c(),
        f = {
            currentType: 14,
            offset: E,
            startLoc: _,
            endLoc: _,
            lastType: 14,
            lastOffset: E,
            lastStartLoc: _,
            lastEndLoc: _,
            braceNest: 0,
            inLinked: !1,
            text: ""
        },
        L = () => f,
        {
            onError: g
        } = t;

    function h(r, a, u, ...p) {
        const F = L();
        if (a.column += u, a.offset += u, g) {
            const R = n ? fe(F.startLoc, a) : null,
                Q = ie(r, R, {
                    domain: jt,
                    args: p
                });
            g(Q)
        }
    }

    function T(r, a, u) {
        r.endLoc = l(), r.currentType = a;
        const p = {
            type: a
        };
        return n && (p.loc = fe(r.startLoc, r.endLoc)), u != null && (p.value = u), p
    }
    const y = r => T(r, 14);

    function b(r, a) {
        return r.currentChar() === a ? (r.next(), a) : (h(A.EXPECTED_TOKEN, l(), 0, a), "")
    }

    function P(r) {
        let a = "";
        for (; r.currentPeek() === J || r.currentPeek() === K;) a += r.currentPeek(), r.peek();
        return a
    }

    function I(r) {
        const a = P(r);
        return r.skipToPeek(), a
    }

    function C(r) {
        if (r === q) return !1;
        const a = r.charCodeAt(0);
        return a >= 97 && a <= 122 || a >= 65 && a <= 90 || a === 95
    }

    function D(r) {
        if (r === q) return !1;
        const a = r.charCodeAt(0);
        return a >= 48 && a <= 57
    }

    function i(r, a) {
        const {
            currentType: u
        } = a;
        if (u !== 2) return !1;
        P(r);
        const p = C(r.currentPeek());
        return r.resetPeek(), p
    }

    function o(r, a) {
        const {
            currentType: u
        } = a;
        if (u !== 2) return !1;
        P(r);
        const p = r.currentPeek() === "-" ? r.peek() : r.currentPeek(),
            F = D(p);
        return r.resetPeek(), F
    }

    function m(r, a) {
        const {
            currentType: u
        } = a;
        if (u !== 2) return !1;
        P(r);
        const p = r.currentPeek() === Re;
        return r.resetPeek(), p
    }

    function d(r, a) {
        const {
            currentType: u
        } = a;
        if (u !== 8) return !1;
        P(r);
        const p = r.currentPeek() === ".";
        return r.resetPeek(), p
    }

    function N(r, a) {
        const {
            currentType: u
        } = a;
        if (u !== 9) return !1;
        P(r);
        const p = C(r.currentPeek());
        return r.resetPeek(), p
    }

    function O(r, a) {
        const {
            currentType: u
        } = a;
        if (!(u === 8 || u === 12)) return !1;
        P(r);
        const p = r.currentPeek() === ":";
        return r.resetPeek(), p
    }

    function M(r, a) {
        const {
            currentType: u
        } = a;
        if (u !== 10) return !1;
        const p = () => {
                const R = r.currentPeek();
                return R === "{" ? C(r.peek()) : R === "@" || R === "%" || R === "|" || R === ":" || R === "." || R === J || !R ? !1 : R === K ? (r.peek(), p()) : k(r, !1)
            },
            F = p();
        return r.resetPeek(), F
    }

    function W(r) {
        P(r);
        const a = r.currentPeek() === "|";
        return r.resetPeek(), a
    }

    function B(r) {
        const a = P(r),
            u = r.currentPeek() === "%" && r.peek() === "{";
        return r.resetPeek(), {
            isModulo: u,
            hasSpace: a.length > 0
        }
    }

    function k(r, a = !0) {
        const u = (F = !1, R = "", Q = !1) => {
                const z = r.currentPeek();
                return z === "{" ? R === "%" ? !1 : F : z === "@" || !z ? R === "%" ? !0 : F : z === "%" ? (r.peek(), u(F, "%", !0)) : z === "|" ? R === "%" || Q ? !0 : !(R === J || R === K) : z === J ? (r.peek(), u(!0, J, Q)) : z === K ? (r.peek(), u(!0, K, Q)) : !0
            },
            p = u();
        return a && r.resetPeek(), p
    }

    function X(r, a) {
        const u = r.currentChar();
        return u === q ? q : a(u) ? (r.next(), u) : null
    }

    function lt(r) {
        const a = r.charCodeAt(0);
        return a >= 97 && a <= 122 || a >= 65 && a <= 90 || a >= 48 && a <= 57 || a === 95 || a === 36
    }

    function it(r) {
        return X(r, lt)
    }

    function ot(r) {
        const a = r.charCodeAt(0);
        return a >= 97 && a <= 122 || a >= 65 && a <= 90 || a >= 48 && a <= 57 || a === 95 || a === 36 || a === 45
    }

    function ut(r) {
        return X(r, ot)
    }

    function ft(r) {
        const a = r.charCodeAt(0);
        return a >= 48 && a <= 57
    }

    function _t(r) {
        return X(r, ft)
    }

    function dt(r) {
        const a = r.charCodeAt(0);
        return a >= 48 && a <= 57 || a >= 65 && a <= 70 || a >= 97 && a <= 102
    }

    function Et(r) {
        return X(r, dt)
    }

    function Se(r) {
        let a = "",
            u = "";
        for (; a = _t(r);) u += a;
        return u
    }

    function mt(r) {
        I(r);
        const a = r.currentChar();
        return a !== "%" && h(A.EXPECTED_TOKEN, l(), 0, a), r.next(), "%"
    }

    function ye(r) {
        let a = "";
        for (;;) {
            const u = r.currentChar();
            if (u === "{" || u === "}" || u === "@" || u === "|" || !u) break;
            if (u === "%")
                if (k(r)) a += u, r.next();
                else break;
            else if (u === J || u === K)
                if (k(r)) a += u, r.next();
                else {
                    if (W(r)) break;
                    a += u, r.next()
                }
            else a += u, r.next()
        }
        return a
    }

    function Nt(r) {
        I(r);
        let a = "",
            u = "";
        for (; a = ut(r);) u += a;
        return r.currentChar() === q && h(A.UNTERMINATED_CLOSING_BRACE, l(), 0), u
    }

    function Lt(r) {
        I(r);
        let a = "";
        return r.currentChar() === "-" ? (r.next(), a += "-".concat(Se(r))) : a += Se(r), r.currentChar() === q && h(A.UNTERMINATED_CLOSING_BRACE, l(), 0), a
    }

    function Tt(r) {
        return r !== Re && r !== K
    }

    function pt(r) {
        I(r), b(r, "'");
        let a = "",
            u = "";
        for (; a = X(r, Tt);) a === "\\" ? u += ht(r) : u += a;
        const p = r.currentChar();
        return p === K || p === q ? (h(A.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, l(), 0), p === K && (r.next(), b(r, "'")), u) : (b(r, "'"), u)
    }

    function ht(r) {
        const a = r.currentChar();
        switch (a) {
            case "\\":
            case "'":
                return r.next(), "\\".concat(a);
            case "u":
                return be(r, a, 4);
            case "U":
                return be(r, a, 6);
            default:
                return h(A.UNKNOWN_ESCAPE_SEQUENCE, l(), 0, a), ""
        }
    }

    function be(r, a, u) {
        b(r, a);
        let p = "";
        for (let F = 0; F < u; F++) {
            const R = Et(r);
            if (!R) {
                h(A.INVALID_UNICODE_ESCAPE_SEQUENCE, l(), 0, "\\".concat(a).concat(p).concat(r.currentChar()));
                break
            }
            p += R
        }
        return "\\".concat(a).concat(p)
    }

    function It(r) {
        return r !== "{" && r !== "}" && r !== J && r !== K
    }

    function Ot(r) {
        I(r);
        let a = "",
            u = "";
        for (; a = X(r, It);) u += a;
        return u
    }

    function Ct(r) {
        let a = "",
            u = "";
        for (; a = it(r);) u += a;
        return u
    }

    function At(r) {
        const a = u => {
            const p = r.currentChar();
            return p === "{" || p === "%" || p === "@" || p === "|" || p === "(" || p === ")" || !p || p === J ? u : (u += p, r.next(), a(u))
        };
        return a("")
    }

    function _e(r) {
        I(r);
        const a = b(r, "|");
        return I(r), a
    }

    function de(r, a) {
        let u = null;
        switch (r.currentChar()) {
            case "{":
                return a.braceNest >= 1 && h(A.NOT_ALLOW_NEST_PLACEHOLDER, l(), 0), r.next(), u = T(a, 2, "{"), I(r), a.braceNest++, u;
            case "}":
                return a.braceNest > 0 && a.currentType === 2 && h(A.EMPTY_PLACEHOLDER, l(), 0), r.next(), u = T(a, 3, "}"), a.braceNest--, a.braceNest > 0 && I(r), a.inLinked && a.braceNest === 0 && (a.inLinked = !1), u;
            case "@":
                return a.braceNest > 0 && h(A.UNTERMINATED_CLOSING_BRACE, l(), 0), u = oe(r, a) || y(a), a.braceNest = 0, u;
            default:
                {
                    let F = !0,
                        R = !0,
                        Q = !0;
                    if (W(r)) return a.braceNest > 0 && h(A.UNTERMINATED_CLOSING_BRACE, l(), 0), u = T(a, 1, _e(r)), a.braceNest = 0, a.inLinked = !1, u;
                    if (a.braceNest > 0 && (a.currentType === 5 || a.currentType === 6 || a.currentType === 7)) return h(A.UNTERMINATED_CLOSING_BRACE, l(), 0), a.braceNest = 0, Ee(r, a);
                    if (F = i(r, a)) return u = T(a, 5, Nt(r)), I(r), u;
                    if (R = o(r, a)) return u = T(a, 6, Lt(r)), I(r), u;
                    if (Q = m(r, a)) return u = T(a, 7, pt(r)), I(r), u;
                    if (!F && !R && !Q) return u = T(a, 13, Ot(r)), h(A.INVALID_TOKEN_IN_PLACEHOLDER, l(), 0, u.value), I(r), u;
                    break
                }
        }
        return u
    }

    function oe(r, a) {
        const {
            currentType: u
        } = a;
        let p = null;
        const F = r.currentChar();
        switch ((u === 8 || u === 9 || u === 12 || u === 10) && (F === K || F === J) && h(A.INVALID_LINKED_FORMAT, l(), 0), F) {
            case "@":
                return r.next(), p = T(a, 8, "@"), a.inLinked = !0, p;
            case ".":
                return I(r), r.next(), T(a, 9, ".");
            case ":":
                return I(r), r.next(), T(a, 10, ":");
            default:
                return W(r) ? (p = T(a, 1, _e(r)), a.braceNest = 0, a.inLinked = !1, p) : d(r, a) || O(r, a) ? (I(r), oe(r, a)) : N(r, a) ? (I(r), T(a, 12, Ct(r))) : M(r, a) ? (I(r), F === "{" ? de(r, a) || p : T(a, 11, At(r))) : (u === 8 && h(A.INVALID_LINKED_FORMAT, l(), 0), a.braceNest = 0, a.inLinked = !1, Ee(r, a))
        }
    }

    function Ee(r, a) {
        let u = {
            type: 14
        };
        if (a.braceNest > 0) return de(r, a) || y(a);
        if (a.inLinked) return oe(r, a) || y(a);
        switch (r.currentChar()) {
            case "{":
                return de(r, a) || y(a);
            case "}":
                return h(A.UNBALANCED_CLOSING_BRACE, l(), 0), r.next(), T(a, 3, "}");
            case "@":
                return oe(r, a) || y(a);
            default:
                {
                    if (W(r)) return u = T(a, 1, _e(r)), a.braceNest = 0, a.inLinked = !1, u;
                    const {
                        isModulo: F,
                        hasSpace: R
                    } = B(r);
                    if (F) return R ? T(a, 0, ye(r)) : T(a, 4, mt(r));
                    if (k(r)) return T(a, 0, ye(r));
                    break
                }
        }
        return u
    }

    function gt() {
        const {
            currentType: r,
            offset: a,
            startLoc: u,
            endLoc: p
        } = f;
        return f.lastType = r, f.lastOffset = a, f.lastStartLoc = u, f.lastEndLoc = p, f.offset = c(), f.startLoc = l(), s.currentChar() === q ? T(f, 14) : Ee(s, f)
    }
    return {
        nextToken: gt,
        currentOffset: c,
        currentPosition: l,
        context: L
    }
}
const Bt = "parser",
    Jt = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

function Qt(e, t, n) {
    switch (e) {
        case "\\\\":
            return "\\";
        case "\\'":
            return "'";
        default:
            {
                const s = parseInt(t || n, 16);
                return s <= 55295 || s >= 57344 ? String.fromCodePoint(s) : "�"
            }
    }
}

function qt(e = {}) {
    const t = e.location !== !1,
        {
            onError: n,
            onWarn: s
        } = e;

    function c(i, o, m, d, ...N) {
        const O = i.currentPosition();
        if (O.offset += d, O.column += d, n) {
            const M = t ? fe(m, O) : null,
                W = ie(o, M, {
                    domain: Bt,
                    args: N
                });
            n(W)
        }
    }

    function l(i, o, m, d, ...N) {
        const O = i.currentPosition();
        if (O.offset += d, O.column += d, s) {
            const M = t ? fe(m, O) : null;
            s(Wt(o, M, N))
        }
    }

    function _(i, o, m) {
        const d = {
            type: i
        };
        return t && (d.start = o, d.end = o, d.loc = {
            start: m,
            end: m
        }), d
    }

    function E(i, o, m, d) {
        t && (i.end = o, i.loc && (i.loc.end = m))
    }

    function f(i, o) {
        const m = i.context(),
            d = _(3, m.offset, m.startLoc);
        return d.value = o, E(d, i.currentOffset(), i.currentPosition()), d
    }

    function L(i, o) {
        const m = i.context(),
            {
                lastOffset: d,
                lastStartLoc: N
            } = m,
            O = _(5, d, N);
        return O.index = parseInt(o, 10), i.nextToken(), E(O, i.currentOffset(), i.currentPosition()), O
    }

    function g(i, o, m) {
        const d = i.context(),
            {
                lastOffset: N,
                lastStartLoc: O
            } = d,
            M = _(4, N, O);
        return M.key = o, m === !0 && (M.modulo = !0), i.nextToken(), E(M, i.currentOffset(), i.currentPosition()), M
    }

    function h(i, o) {
        const m = i.context(),
            {
                lastOffset: d,
                lastStartLoc: N
            } = m,
            O = _(9, d, N);
        return O.value = o.replace(Jt, Qt), i.nextToken(), E(O, i.currentOffset(), i.currentPosition()), O
    }

    function T(i) {
        const o = i.nextToken(),
            m = i.context(),
            {
                lastOffset: d,
                lastStartLoc: N
            } = m,
            O = _(8, d, N);
        return o.type !== 12 ? (c(i, A.UNEXPECTED_EMPTY_LINKED_MODIFIER, m.lastStartLoc, 0), O.value = "", E(O, d, N), {
            nextConsumeToken: o,
            node: O
        }) : (o.value == null && c(i, A.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, G(o)), O.value = o.value || "", E(O, i.currentOffset(), i.currentPosition()), {
            node: O
        })
    }

    function y(i, o) {
        const m = i.context(),
            d = _(7, m.offset, m.startLoc);
        return d.value = o, E(d, i.currentOffset(), i.currentPosition()), d
    }

    function b(i) {
        const o = i.context(),
            m = _(6, o.offset, o.startLoc);
        let d = i.nextToken();
        if (d.type === 9) {
            const N = T(i);
            m.modifier = N.node, d = N.nextConsumeToken || i.nextToken()
        }
        switch (d.type !== 10 && c(i, A.UNEXPECTED_LEXICAL_ANALYSIS, o.lastStartLoc, 0, G(d)), d = i.nextToken(), d.type === 2 && (d = i.nextToken()), d.type) {
            case 11:
                d.value == null && c(i, A.UNEXPECTED_LEXICAL_ANALYSIS, o.lastStartLoc, 0, G(d)), m.key = y(i, d.value || "");
                break;
            case 5:
                d.value == null && c(i, A.UNEXPECTED_LEXICAL_ANALYSIS, o.lastStartLoc, 0, G(d)), m.key = g(i, d.value || "");
                break;
            case 6:
                d.value == null && c(i, A.UNEXPECTED_LEXICAL_ANALYSIS, o.lastStartLoc, 0, G(d)), m.key = L(i, d.value || "");
                break;
            case 7:
                d.value == null && c(i, A.UNEXPECTED_LEXICAL_ANALYSIS, o.lastStartLoc, 0, G(d)), m.key = h(i, d.value || "");
                break;
            default:
                {
                    c(i, A.UNEXPECTED_EMPTY_LINKED_KEY, o.lastStartLoc, 0);
                    const N = i.context(),
                        O = _(7, N.offset, N.startLoc);
                    return O.value = "",
                    E(O, N.offset, N.startLoc),
                    m.key = O,
                    E(m, N.offset, N.startLoc),
                    {
                        nextConsumeToken: d,
                        node: m
                    }
                }
        }
        return E(m, i.currentOffset(), i.currentPosition()), {
            node: m
        }
    }

    function P(i) {
        const o = i.context(),
            m = o.currentType === 1 ? i.currentOffset() : o.offset,
            d = o.currentType === 1 ? o.endLoc : o.startLoc,
            N = _(2, m, d);
        N.items = [];
        let O = null,
            M = null;
        do {
            const k = O || i.nextToken();
            switch (O = null, k.type) {
                case 0:
                    k.value == null && c(i, A.UNEXPECTED_LEXICAL_ANALYSIS, o.lastStartLoc, 0, G(k)), N.items.push(f(i, k.value || ""));
                    break;
                case 6:
                    k.value == null && c(i, A.UNEXPECTED_LEXICAL_ANALYSIS, o.lastStartLoc, 0, G(k)), N.items.push(L(i, k.value || ""));
                    break;
                case 4:
                    M = !0;
                    break;
                case 5:
                    k.value == null && c(i, A.UNEXPECTED_LEXICAL_ANALYSIS, o.lastStartLoc, 0, G(k)), N.items.push(g(i, k.value || "", !!M)), M && (l(i, Ie.USE_MODULO_SYNTAX, o.lastStartLoc, 0, G(k)), M = null);
                    break;
                case 7:
                    k.value == null && c(i, A.UNEXPECTED_LEXICAL_ANALYSIS, o.lastStartLoc, 0, G(k)), N.items.push(h(i, k.value || ""));
                    break;
                case 8:
                    {
                        const X = b(i);N.items.push(X.node),
                        O = X.nextConsumeToken || null;
                        break
                    }
            }
        } while (o.currentType !== 14 && o.currentType !== 1);
        const W = o.currentType === 1 ? o.lastOffset : i.currentOffset(),
            B = o.currentType === 1 ? o.lastEndLoc : i.currentPosition();
        return E(N, W, B), N
    }

    function I(i, o, m, d) {
        const N = i.context();
        let O = d.items.length === 0;
        const M = _(1, o, m);
        M.cases = [], M.cases.push(d);
        do {
            const W = P(i);
            O || (O = W.items.length === 0), M.cases.push(W)
        } while (N.currentType !== 14);
        return O && c(i, A.MUST_HAVE_MESSAGES_IN_PLURAL, m, 0), E(M, i.currentOffset(), i.currentPosition()), M
    }

    function C(i) {
        const o = i.context(),
            {
                offset: m,
                startLoc: d
            } = o,
            N = P(i);
        return o.currentType === 14 ? N : I(i, m, d, N)
    }

    function D(i) {
        const o = xt(i, Be({}, e)),
            m = o.context(),
            d = _(0, m.offset, m.startLoc);
        return t && d.loc && (d.loc.source = i), d.body = C(o), e.onCacheKey && (d.cacheKey = e.onCacheKey(i)), m.currentType !== 14 && c(o, A.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, i[m.offset] || ""), E(d, o.currentOffset(), o.currentPosition()), d
    }
    return {
        parse: D
    }
}

function G(e) {
    if (e.type === 14) return "EOF";
    const t = (e.value || "").replace(/\r?\n/gu, "\\n");
    return t.length > 10 ? t.slice(0, 9) + "…" : t
}

function Zt(e, t = {}) {
    const n = {
        ast: e,
        helpers: new Set
    };
    return {
        context: () => n,
        helper: l => (n.helpers.add(l), l)
    }
}

function Ue(e, t) {
    for (let n = 0; n < e.length; n++) Oe(e[n], t)
}

function Oe(e, t) {
    switch (e.type) {
        case 1:
            Ue(e.cases, t), t.helper("plural");
            break;
        case 2:
            Ue(e.items, t);
            break;
        case 6:
            {
                Oe(e.key, t),
                t.helper("linked"),
                t.helper("type");
                break
            }
        case 5:
            t.helper("interpolate"), t.helper("list");
            break;
        case 4:
            t.helper("interpolate"), t.helper("named");
            break
    }
}

function zt(e, t = {}) {
    const n = Zt(e);
    n.helper("normalize"), e.body && Oe(e.body, n);
    const s = n.context();
    e.helpers = Array.from(s.helpers)
}

function en(e) {
    const t = e.body;
    return t.type === 2 ? Fe(t) : t.cases.forEach(n => Fe(n)), e
}

function Fe(e) {
    if (e.items.length === 1) {
        const t = e.items[0];
        (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value)
    } else {
        const t = [];
        for (let n = 0; n < e.items.length; n++) {
            const s = e.items[n];
            if (!(s.type === 3 || s.type === 9) || s.value == null) break;
            t.push(s.value)
        }
        if (t.length === e.items.length) {
            e.static = Je(t);
            for (let n = 0; n < e.items.length; n++) {
                const s = e.items[n];
                (s.type === 3 || s.type === 9) && delete s.value
            }
        }
    }
}
const tn = "minifier";

function ne(e) {
    switch (e.t = e.type, e.type) {
        case 0:
            {
                const t = e;ne(t.body),
                t.b = t.body,
                delete t.body;
                break
            }
        case 1:
            {
                const t = e,
                    n = t.cases;
                for (let s = 0; s < n.length; s++) ne(n[s]);t.c = n,
                delete t.cases;
                break
            }
        case 2:
            {
                const t = e,
                    n = t.items;
                for (let s = 0; s < n.length; s++) ne(n[s]);t.i = n,
                delete t.items,
                t.static && (t.s = t.static, delete t.static);
                break
            }
        case 3:
        case 9:
        case 8:
        case 7:
            {
                const t = e;t.value && (t.v = t.value, delete t.value);
                break
            }
        case 6:
            {
                const t = e;ne(t.key),
                t.k = t.key,
                delete t.key,
                t.modifier && (ne(t.modifier), t.m = t.modifier, delete t.modifier);
                break
            }
        case 5:
            {
                const t = e;t.i = t.index,
                delete t.index;
                break
            }
        case 4:
            {
                const t = e;t.k = t.key,
                delete t.key;
                break
            }
        default:
            throw ie(A.UNHANDLED_MINIFIER_NODE_TYPE, null, {
                domain: tn,
                args: [e.type]
            })
    }
    delete e.type
}
const nn = "parser";

function rn(e, t) {
    const {
        sourceMap: n,
        filename: s,
        breakLineCode: c,
        needIndent: l
    } = t, _ = t.location !== !1, E = {
        filename: s,
        code: "",
        column: 1,
        line: 1,
        offset: 0,
        map: void 0,
        breakLineCode: c,
        needIndent: l,
        indentLevel: 0
    };
    _ && e.loc && (E.source = e.loc.source);
    const f = () => E;

    function L(I, C) {
        E.code += I
    }

    function g(I, C = !0) {
        const D = C ? c : "";
        L(l ? D + "  ".repeat(I) : D)
    }

    function h(I = !0) {
        const C = ++E.indentLevel;
        I && g(C)
    }

    function T(I = !0) {
        const C = --E.indentLevel;
        I && g(C)
    }

    function y() {
        g(E.indentLevel)
    }
    return {
        context: f,
        push: L,
        indent: h,
        deindent: T,
        newline: y,
        helper: I => "_".concat(I),
        needIndent: () => E.needIndent
    }
}

function sn(e, t) {
    const {
        helper: n
    } = e;
    e.push("".concat(n("linked"), "(")), se(e, t.key), t.modifier ? (e.push(", "), se(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")")
}

function an(e, t) {
    const {
        helper: n,
        needIndent: s
    } = e;
    e.push("".concat(n("normalize"), "([")), e.indent(s());
    const c = t.items.length;
    for (let l = 0; l < c && (se(e, t.items[l]), l !== c - 1); l++) e.push(", ");
    e.deindent(s()), e.push("])")
}

function cn(e, t) {
    const {
        helper: n,
        needIndent: s
    } = e;
    if (t.cases.length > 1) {
        e.push("".concat(n("plural"), "([")), e.indent(s());
        const c = t.cases.length;
        for (let l = 0; l < c && (se(e, t.cases[l]), l !== c - 1); l++) e.push(", ");
        e.deindent(s()), e.push("])")
    }
}

function ln(e, t) {
    t.body ? se(e, t.body) : e.push("null")
}

function se(e, t) {
    const {
        helper: n
    } = e;
    switch (t.type) {
        case 0:
            ln(e, t);
            break;
        case 1:
            cn(e, t);
            break;
        case 2:
            an(e, t);
            break;
        case 6:
            sn(e, t);
            break;
        case 8:
            e.push(JSON.stringify(t.value), t);
            break;
        case 7:
            e.push(JSON.stringify(t.value), t);
            break;
        case 5:
            e.push("".concat(n("interpolate"), "(").concat(n("list"), "(").concat(t.index, "))"), t);
            break;
        case 4:
            e.push("".concat(n("interpolate"), "(").concat(n("named"), "(").concat(JSON.stringify(t.key), "))"), t);
            break;
        case 9:
            e.push(JSON.stringify(t.value), t);
            break;
        case 3:
            e.push(JSON.stringify(t.value), t);
            break;
        default:
            throw ie(A.UNHANDLED_CODEGEN_NODE_TYPE, null, {
                domain: nn,
                args: [t.type]
            })
    }
}
const on = (e, t = {}) => {
    const n = Me(t.mode) ? t.mode : "normal",
        s = Me(t.filename) ? t.filename : "message.intl",
        c = !!t.sourceMap,
        l = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : "\n",
        _ = t.needIndent ? t.needIndent : n !== "arrow",
        E = e.helpers || [],
        f = rn(e, {
            mode: n,
            filename: s,
            sourceMap: c,
            breakLineCode: l,
            needIndent: _
        });
    f.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), f.indent(_), E.length > 0 && (f.push("const { ".concat(Je(E.map(h => "".concat(h, ": _").concat(h)), ", "), " } = ctx")), f.newline()), f.push("return "), se(f, e), f.deindent(_), f.push("}"), delete e.helpers;
    const {
        code: L,
        map: g
    } = f.context();
    return {
        ast: e,
        code: L,
        map: g ? g.toJSON() : void 0
    }
};

function un(e, t = {}) {
    const n = Be({}, t),
        s = !!n.jit,
        c = !!n.minify,
        l = n.optimize == null ? !0 : n.optimize,
        E = qt(n).parse(e);
    return s ? (l && en(E), c && ne(E), {
        ast: E,
        code: ""
    }) : (zt(E, n), on(E, n))
}
/*!
 * core-base v9.13.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
function fn() {
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (me().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (me().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (me().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1)
}
const Z = [];
Z[0] = {
    w: [0],
    i: [3, 0],
    "[": [4],
    o: [7]
};
Z[1] = {
    w: [1],
    ".": [2],
    "[": [4],
    o: [7]
};
Z[2] = {
    w: [2],
    i: [3, 0],
    0: [3, 0]
};
Z[3] = {
    i: [3, 0],
    0: [3, 0],
    w: [1, 1],
    ".": [2, 1],
    "[": [4, 1],
    o: [7, 1]
};
Z[4] = {
    "'": [5, 0],
    '"': [6, 0],
    "[": [4, 2],
    "]": [1, 3],
    o: 8,
    l: [4, 0]
};
Z[5] = {
    "'": [4, 0],
    o: 8,
    l: [5, 0]
};
Z[6] = {
    '"': [4, 0],
    o: 8,
    l: [6, 0]
};
const _n = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

function dn(e) {
    return _n.test(e)
}

function En(e) {
    const t = e.charCodeAt(0),
        n = e.charCodeAt(e.length - 1);
    return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e
}

function mn(e) {
    if (e == null) return "o";
    switch (e.charCodeAt(0)) {
        case 91:
        case 93:
        case 46:
        case 34:
        case 39:
            return e;
        case 95:
        case 36:
        case 45:
            return "i";
        case 9:
        case 10:
        case 13:
        case 160:
        case 65279:
        case 8232:
        case 8233:
            return "w"
    }
    return "i"
}

function Nn(e) {
    const t = e.trim();
    return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : dn(t) ? En(t) : "*" + t
}

function Ln(e) {
    const t = [];
    let n = -1,
        s = 0,
        c = 0,
        l, _, E, f, L, g, h;
    const T = [];
    T[0] = () => {
        _ === void 0 ? _ = E : _ += E
    }, T[1] = () => {
        _ !== void 0 && (t.push(_), _ = void 0)
    }, T[2] = () => {
        T[0](), c++
    }, T[3] = () => {
        if (c > 0) c--, s = 4, T[0]();
        else {
            if (c = 0, _ === void 0 || (_ = Nn(_), _ === !1)) return !1;
            T[1]()
        }
    };

    function y() {
        const b = e[n + 1];
        if (s === 5 && b === "'" || s === 6 && b === '"') return n++, E = "\\" + b, T[0](), !0
    }
    for (; s !== null;)
        if (n++, l = e[n], !(l === "\\" && y())) {
            if (f = mn(l), h = Z[s], L = h[f] || h.l || 8, L === 8 || (s = L[0], L[1] !== void 0 && (g = T[L[1]], g && (E = l, g() === !1)))) return;
            if (s === 7) return t
        }
}
const we = new Map;

function Tn(e, t) {
    return w(e) ? e[t] : null
}

function Zn(e, t) {
    if (!w(e)) return null;
    let n = we.get(t);
    if (n || (n = Ln(t), n && we.set(t, n)), !n) return null;
    const s = n.length;
    let c = e,
        l = 0;
    for (; l < s;) {
        const _ = c[n[l]];
        if (_ === void 0 || v(c)) return null;
        c = _, l++
    }
    return c
}
const pn = e => e,
    hn = e => "",
    In = "text",
    On = e => e.length === 0 ? "" : Mt(e),
    Cn = kt;

function ve(e, t) {
    return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}

function An(e) {
    const t = $(e.pluralIndex) ? e.pluralIndex : -1;
    return e.named && ($(e.named.count) || $(e.named.n)) ? $(e.named.count) ? e.named.count : $(e.named.n) ? e.named.n : t : t
}

function gn(e, t) {
    t.count || (t.count = e), t.n || (t.n = e)
}

function Sn(e = {}) {
    const t = e.locale,
        n = An(e),
        s = w(e.pluralRules) && S(t) && v(e.pluralRules[t]) ? e.pluralRules[t] : ve,
        c = w(e.pluralRules) && S(t) && v(e.pluralRules[t]) ? ve : void 0,
        l = C => C[s(n, C.length, c)],
        _ = e.list || [],
        E = C => _[C],
        f = e.named || {};
    $(e.pluralIndex) && gn(n, f);
    const L = C => f[C];

    function g(C) {
        const D = v(e.messages) ? e.messages(C) : w(e.messages) ? e.messages[C] : !1;
        return D || (e.parent ? e.parent.message(C) : hn)
    }
    const h = C => e.modifiers ? e.modifiers[C] : pn,
        T = U(e.processor) && v(e.processor.normalize) ? e.processor.normalize : On,
        y = U(e.processor) && v(e.processor.interpolate) ? e.processor.interpolate : Cn,
        b = U(e.processor) && S(e.processor.type) ? e.processor.type : In,
        I = {
            list: E,
            named: L,
            plural: l,
            linked: (C, ...D) => {
                const [i, o] = D;
                let m = "text",
                    d = "";
                D.length === 1 ? w(i) ? (d = i.modifier || d, m = i.type || m) : S(i) && (d = i || d) : D.length === 2 && (S(i) && (d = i || d), S(o) && (m = o || m));
                const N = g(C)(I),
                    O = m === "vnode" && V(N) && d ? N[0] : N;
                return d ? h(d)(O, m) : O
            },
            message: g,
            type: b,
            interpolate: y,
            normalize: T,
            values: ae({}, _, f)
        };
    return I
}
let ce = null;

function zn(e) {
    ce = e
}

function yn(e, t, n) {
    ce && ce.emit("i18n:init", {
        timestamp: Date.now(),
        i18n: e,
        version: t,
        meta: n
    })
}
const bn = Pn("function:translate");

function Pn(e) {
    return t => ce && ce.emit(e, t)
}
const Qe = Ie.__EXTEND_POINT__,
    ee = je(Qe),
    er = {
        NOT_FOUND_KEY: Qe,
        FALLBACK_TO_TRANSLATE: ee(),
        CANNOT_FORMAT_NUMBER: ee(),
        FALLBACK_TO_NUMBER_FORMAT: ee(),
        CANNOT_FORMAT_DATE: ee(),
        FALLBACK_TO_DATE_FORMAT: ee(),
        EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: ee(),
        __EXTEND_POINT__: ee()
    },
    qe = A.__EXTEND_POINT__,
    te = je(qe),
    j = {
        INVALID_ARGUMENT: qe,
        INVALID_DATE_ARGUMENT: te(),
        INVALID_ISO_DATE_ARGUMENT: te(),
        NOT_SUPPORT_NON_STRING_MESSAGE: te(),
        NOT_SUPPORT_LOCALE_PROMISE_VALUE: te(),
        NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: te(),
        NOT_SUPPORT_LOCALE_TYPE: te(),
        __EXTEND_POINT__: te()
    };

function x(e) {
    return ie(e, null, void 0)
}

function Ce(e, t) {
    return t.locale != null ? We(t.locale) : We(e.locale)
}
let Ne;

function We(e) {
    if (S(e)) return e;
    if (v(e)) {
        if (e.resolvedOnce && Ne != null) return Ne;
        if (e.constructor.name === "Function") {
            const t = e();
            if (Dt(t)) throw x(j.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
            return Ne = t
        } else throw x(j.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)
    } else throw x(j.NOT_SUPPORT_LOCALE_TYPE)
}

function Dn(e, t, n) {
    return [...new Set([n, ...V(t) ? t : w(t) ? Object.keys(t) : S(t) ? [t] : [n]])]
}

function tr(e, t, n) {
    const s = S(n) ? n : Te,
        c = e;
    c.__localeChainCache || (c.__localeChainCache = new Map);
    let l = c.__localeChainCache.get(s);
    if (!l) {
        l = [];
        let _ = [n];
        for (; V(_);) _ = Ke(l, _, t);
        const E = V(t) || !U(t) ? t : t.default ? t.default : null;
        _ = S(E) ? [E] : E, V(_) && Ke(l, _, !1), c.__localeChainCache.set(s, l)
    }
    return l
}

function Ke(e, t, n) {
    let s = !0;
    for (let c = 0; c < t.length && Y(s); c++) {
        const l = t[c];
        S(l) && (s = kn(e, t[c], n))
    }
    return s
}

function kn(e, t, n) {
    let s;
    const c = t.split("-");
    do {
        const l = c.join("-");
        s = Mn(e, l, n), c.splice(-1, 1)
    } while (c.length && s === !0);
    return s
}

function Mn(e, t, n) {
    let s = !1;
    if (!e.includes(t) && (s = !0, t)) {
        s = t[t.length - 1] !== "!";
        const c = t.replace(/!/g, "");
        e.push(c), (V(n) || U(n)) && n[c] && (s = n[c])
    }
    return s
}
const Rn = "9.13.1",
    Ae = -1,
    Te = "en-US",
    nr = "",
    Ye = e => "".concat(e.charAt(0).toLocaleUpperCase()).concat(e.substr(1));

function Un() {
    return {
        upper: (e, t) => t === "text" && S(e) ? e.toUpperCase() : t === "vnode" && w(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
        lower: (e, t) => t === "text" && S(e) ? e.toLowerCase() : t === "vnode" && w(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
        capitalize: (e, t) => t === "text" && S(e) ? Ye(e) : t === "vnode" && w(e) && "__v_isVNode" in e ? Ye(e.children) : e
    }
}
let Ze;

function rr(e) {
    Ze = e
}
let ze;

function sr(e) {
    ze = e
}
let et;

function ar(e) {
    et = e
}
let tt = null;
const cr = e => {
        tt = e
    },
    Fn = () => tt;
let nt = null;
const lr = e => {
        nt = e
    },
    ir = () => nt;
let $e = 0;

function or(e = {}) {
    const t = v(e.onWarn) ? e.onWarn : Rt,
        n = S(e.version) ? e.version : Rn,
        s = S(e.locale) || v(e.locale) ? e.locale : Te,
        c = v(s) ? Te : s,
        l = V(e.fallbackLocale) || U(e.fallbackLocale) || S(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : c,
        _ = U(e.messages) ? e.messages : {
            [c]: {}
        },
        E = U(e.datetimeFormats) ? e.datetimeFormats : {
            [c]: {}
        },
        f = U(e.numberFormats) ? e.numberFormats : {
            [c]: {}
        },
        L = ae({}, e.modifiers || {}, Un()),
        g = e.pluralRules || {},
        h = v(e.missing) ? e.missing : null,
        T = Y(e.missingWarn) || Pe(e.missingWarn) ? e.missingWarn : !0,
        y = Y(e.fallbackWarn) || Pe(e.fallbackWarn) ? e.fallbackWarn : !0,
        b = !!e.fallbackFormat,
        P = !!e.unresolving,
        I = v(e.postTranslation) ? e.postTranslation : null,
        C = U(e.processor) ? e.processor : null,
        D = Y(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
        i = !!e.escapeParameter,
        o = v(e.messageCompiler) ? e.messageCompiler : Ze,
        m = v(e.messageResolver) ? e.messageResolver : ze || Tn,
        d = v(e.localeFallbacker) ? e.localeFallbacker : et || Dn,
        N = w(e.fallbackContext) ? e.fallbackContext : void 0,
        O = e,
        M = w(O.__datetimeFormatters) ? O.__datetimeFormatters : new Map,
        W = w(O.__numberFormatters) ? O.__numberFormatters : new Map,
        B = w(O.__meta) ? O.__meta : {};
    $e++;
    const k = {
        version: n,
        cid: $e,
        locale: s,
        fallbackLocale: l,
        messages: _,
        modifiers: L,
        pluralRules: g,
        missing: h,
        missingWarn: T,
        fallbackWarn: y,
        fallbackFormat: b,
        unresolving: P,
        postTranslation: I,
        processor: C,
        warnHtmlMessage: D,
        escapeParameter: i,
        messageCompiler: o,
        messageResolver: m,
        localeFallbacker: d,
        fallbackContext: N,
        onWarn: t,
        __meta: B
    };
    return k.datetimeFormats = E, k.numberFormats = f, k.__datetimeFormatters = M, k.__numberFormatters = W, __INTLIFY_PROD_DEVTOOLS__ && yn(k, n, B), k
}

function ge(e, t, n, s, c) {
    const {
        missing: l,
        onWarn: _
    } = e;
    if (l !== null) {
        const E = l(e, n, t, c);
        return S(E) ? E : t
    } else return t
}

function ur(e, t, n) {
    const s = e;
    s.__localeChainCache = new Map, e.localeFallbacker(e, n, t)
}

function wn(e, t) {
    return e === t ? !1 : e.split("-")[0] === t.split("-")[0]
}

function vn(e, t) {
    const n = t.indexOf(e);
    if (n === -1) return !1;
    for (let s = n + 1; s < t.length; s++)
        if (wn(e, t[s])) return !0;
    return !1
}

function Le(e) {
    return n => Wn(n, e)
}

function Wn(e, t) {
    const n = t.b || t.body;
    if ((n.t || n.type) === 1) {
        const s = n,
            c = s.c || s.cases;
        return e.plural(c.reduce((l, _) => [...l, Xe(e, _)], []))
    } else return Xe(e, n)
}

function Xe(e, t) {
    const n = t.s || t.static;
    if (n) return e.type === "text" ? n : e.normalize([n]); {
        const s = (t.i || t.items).reduce((c, l) => [...c, pe(e, l)], []);
        return e.normalize(s)
    }
}

function pe(e, t) {
    const n = t.t || t.type;
    switch (n) {
        case 3:
            {
                const s = t;
                return s.v || s.value
            }
        case 9:
            {
                const s = t;
                return s.v || s.value
            }
        case 4:
            {
                const s = t;
                return e.interpolate(e.named(s.k || s.key))
            }
        case 5:
            {
                const s = t;
                return e.interpolate(e.list(s.i != null ? s.i : s.index))
            }
        case 6:
            {
                const s = t,
                    c = s.m || s.modifier;
                return e.linked(pe(e, s.k || s.key), c ? pe(e, c) : void 0, e.type)
            }
        case 7:
            {
                const s = t;
                return s.v || s.value
            }
        case 8:
            {
                const s = t;
                return s.v || s.value
            }
        default:
            throw new Error("unhandled node type on format message part: ".concat(n))
    }
}
const rt = e => e;
let re = Object.create(null);
const le = e => w(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);

function st(e, t = {}) {
    let n = !1;
    const s = t.onError || Yt;
    return t.onError = c => {
        n = !0, s(c)
    }, { ...un(e, t),
        detectError: n
    }
}
const fr = (e, t) => {
    if (!S(e)) throw x(j.NOT_SUPPORT_NON_STRING_MESSAGE); {
        Y(t.warnHtmlMessage) && t.warnHtmlMessage;
        const s = (t.onCacheKey || rt)(e),
            c = re[s];
        if (c) return c;
        const {
            code: l,
            detectError: _
        } = st(e, t), E = new Function("return ".concat(l))();
        return _ ? E : re[s] = E
    }
};

function _r(e, t) {
    if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && S(e)) {
        Y(t.warnHtmlMessage) && t.warnHtmlMessage;
        const s = (t.onCacheKey || rt)(e),
            c = re[s];
        if (c) return c;
        const {
            ast: l,
            detectError: _
        } = st(e, { ...t,
            location: !1,
            jit: !0
        }), E = Le(l);
        return _ ? E : re[s] = E
    } else {
        const n = e.cacheKey;
        if (n) {
            const s = re[n];
            return s || (re[n] = Le(e))
        } else return Le(e)
    }
}
const Ge = () => "",
    H = e => v(e);

function dr(e, ...t) {
    const {
        fallbackFormat: n,
        postTranslation: s,
        unresolving: c,
        messageCompiler: l,
        fallbackLocale: _,
        messages: E
    } = e, [f, L] = $n(...t), g = Y(L.missingWarn) ? L.missingWarn : e.missingWarn, h = Y(L.fallbackWarn) ? L.fallbackWarn : e.fallbackWarn, T = Y(L.escapeParameter) ? L.escapeParameter : e.escapeParameter, y = !!L.resolvedMessage, b = S(L.default) || Y(L.default) ? Y(L.default) ? l ? f : () => f : L.default : n ? l ? f : () => f : "", P = n || b !== "", I = Ce(e, L);
    T && Kn(L);
    let [C, D, i] = y ? [f, I, E[I] || {}] : at(e, f, I, _, h, g), o = C, m = f;
    if (!y && !(S(o) || le(o) || H(o)) && P && (o = b, m = o), !y && (!(S(o) || le(o) || H(o)) || !S(D))) return c ? Ae : f;
    let d = !1;
    const N = () => {
            d = !0
        },
        O = H(o) ? o : ct(e, f, D, o, m, N);
    if (d) return o;
    const M = Gn(e, D, i, L),
        W = Sn(M),
        B = Yn(e, O, W),
        k = s ? s(B, f) : B;
    if (__INTLIFY_PROD_DEVTOOLS__) {
        const X = {
            timestamp: Date.now(),
            key: S(f) ? f : H(o) ? o.key : "",
            locale: D || (H(o) ? o.locale : ""),
            format: S(o) ? o : H(o) ? o.source : "",
            message: k
        };
        X.meta = ae({}, e.__meta, Fn() || {}), bn(X)
    }
    return k
}

function Kn(e) {
    V(e.list) ? e.list = e.list.map(t => S(t) ? ke(t) : t) : w(e.named) && Object.keys(e.named).forEach(t => {
        S(e.named[t]) && (e.named[t] = ke(e.named[t]))
    })
}

function at(e, t, n, s, c, l) {
    const {
        messages: _,
        onWarn: E,
        messageResolver: f,
        localeFallbacker: L
    } = e, g = L(e, s, n);
    let h = {},
        T, y = null;
    const b = "translate";
    for (let P = 0; P < g.length && (T = g[P], h = _[T] || {}, (y = f(h, t)) === null && (y = h[t]), !(S(y) || le(y) || H(y))); P++)
        if (!vn(T, g)) {
            const I = ge(e, t, T, l, b);
            I !== t && (y = I)
        }
    return [y, T, h]
}

function ct(e, t, n, s, c, l) {
    const {
        messageCompiler: _,
        warnHtmlMessage: E
    } = e;
    if (H(s)) {
        const L = s;
        return L.locale = L.locale || n, L.key = L.key || t, L
    }
    if (_ == null) {
        const L = () => s;
        return L.locale = n, L.key = t, L
    }
    const f = _(s, Xn(e, n, c, s, E, l));
    return f.locale = n, f.key = t, f.source = s, f
}

function Yn(e, t, n) {
    return t(n)
}

function $n(...e) {
    const [t, n, s] = e, c = {};
    if (!S(t) && !$(t) && !H(t) && !le(t)) throw x(j.INVALID_ARGUMENT);
    const l = $(t) ? String(t) : (H(t), t);
    return $(n) ? c.plural = n : S(n) ? c.default = n : U(n) && !he(n) ? c.named = n : V(n) && (c.list = n), $(s) ? c.plural = s : S(s) ? c.default = s : U(s) && ae(c, s), [l, c]
}

function Xn(e, t, n, s, c, l) {
    return {
        locale: t,
        key: n,
        warnHtmlMessage: c,
        onError: _ => {
            throw l && l(_), _
        },
        onCacheKey: _ => St(t, n, _)
    }
}

function Gn(e, t, n, s) {
    const {
        modifiers: c,
        pluralRules: l,
        messageResolver: _,
        fallbackLocale: E,
        fallbackWarn: f,
        missingWarn: L,
        fallbackContext: g
    } = e, T = {
        locale: t,
        modifiers: c,
        pluralRules: l,
        messages: y => {
            let b = _(n, y);
            if (b == null && g) {
                const [, , P] = at(g, y, t, E, f, L);
                b = _(P, y)
            }
            if (S(b) || le(b)) {
                let P = !1;
                const C = ct(e, y, t, b, y, () => {
                    P = !0
                });
                return P ? Ge : C
            } else return H(b) ? b : Ge
        }
    };
    return e.processor && (T.processor = e.processor), s.list && (T.list = s.list), s.named && (T.named = s.named), $(s.plural) && (T.pluralIndex = s.plural), T
}

function Er(e, ...t) {
    const {
        datetimeFormats: n,
        unresolving: s,
        fallbackLocale: c,
        onWarn: l,
        localeFallbacker: _
    } = e, {
        __datetimeFormatters: E
    } = e, [f, L, g, h] = Vn(...t), T = Y(g.missingWarn) ? g.missingWarn : e.missingWarn;
    Y(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn;
    const y = !!g.part,
        b = Ce(e, g),
        P = _(e, c, b);
    if (!S(f) || f === "") return new Intl.DateTimeFormat(b, h).format(L);
    let I = {},
        C, D = null;
    const i = "datetime format";
    for (let d = 0; d < P.length && (C = P[d], I = n[C] || {}, D = I[f], !U(D)); d++) ge(e, f, C, T, i);
    if (!U(D) || !S(C)) return s ? Ae : f;
    let o = "".concat(C, "__").concat(f);
    he(h) || (o = "".concat(o, "__").concat(JSON.stringify(h)));
    let m = E.get(o);
    return m || (m = new Intl.DateTimeFormat(C, ae({}, D, h)), E.set(o, m)), y ? m.formatToParts(L) : m.format(L)
}
const Hn = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

function Vn(...e) {
    const [t, n, s, c] = e, l = {};
    let _ = {},
        E;
    if (S(t)) {
        const f = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!f) throw x(j.INVALID_ISO_DATE_ARGUMENT);
        const L = f[3] ? f[3].trim().startsWith("T") ? "".concat(f[1].trim()).concat(f[3].trim()) : "".concat(f[1].trim(), "T").concat(f[3].trim()) : f[1].trim();
        E = new Date(L);
        try {
            E.toISOString()
        } catch (g) {
            throw x(j.INVALID_ISO_DATE_ARGUMENT)
        }
    } else if (bt(t)) {
        if (isNaN(t.getTime())) throw x(j.INVALID_DATE_ARGUMENT);
        E = t
    } else if ($(t)) E = t;
    else throw x(j.INVALID_ARGUMENT);
    return S(n) ? l.key = n : U(n) && Object.keys(n).forEach(f => {
        Hn.includes(f) ? _[f] = n[f] : l[f] = n[f]
    }), S(s) ? l.locale = s : U(s) && (_ = s), U(c) && (_ = c), [l.key || "", E, l, _]
}

function mr(e, t, n) {
    const s = e;
    for (const c in n) {
        const l = "".concat(t, "__").concat(c);
        s.__datetimeFormatters.has(l) && s.__datetimeFormatters.delete(l)
    }
}

function Nr(e, ...t) {
    const {
        numberFormats: n,
        unresolving: s,
        fallbackLocale: c,
        onWarn: l,
        localeFallbacker: _
    } = e, {
        __numberFormatters: E
    } = e, [f, L, g, h] = xn(...t), T = Y(g.missingWarn) ? g.missingWarn : e.missingWarn;
    Y(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn;
    const y = !!g.part,
        b = Ce(e, g),
        P = _(e, c, b);
    if (!S(f) || f === "") return new Intl.NumberFormat(b, h).format(L);
    let I = {},
        C, D = null;
    const i = "number format";
    for (let d = 0; d < P.length && (C = P[d], I = n[C] || {}, D = I[f], !U(D)); d++) ge(e, f, C, T, i);
    if (!U(D) || !S(C)) return s ? Ae : f;
    let o = "".concat(C, "__").concat(f);
    he(h) || (o = "".concat(o, "__").concat(JSON.stringify(h)));
    let m = E.get(o);
    return m || (m = new Intl.NumberFormat(C, ae({}, D, h)), E.set(o, m)), y ? m.formatToParts(L) : m.format(L)
}
const jn = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

function xn(...e) {
    const [t, n, s, c] = e, l = {};
    let _ = {};
    if (!$(t)) throw x(j.INVALID_ARGUMENT);
    const E = t;
    return S(n) ? l.key = n : U(n) && Object.keys(n).forEach(f => {
        jn.includes(f) ? _[f] = n[f] : l[f] = n[f]
    }), S(s) ? l.locale = s : U(s) && (_ = s), U(c) && (_ = c), [l.key || "", E, l, _]
}

function Lr(e, t, n) {
    const s = e;
    for (const c in n) {
        const l = "".concat(t, "__").concat(c);
        s.__numberFormatters.has(l) && s.__numberFormatters.delete(l)
    }
}
fn();
export {
    je as A, or as B, j as C, Te as D, mr as E, Lr as F, cr as G, ir as H, Ae as I, $n as J, dr as K, Vn as L, nr as M, jn as N, Er as O, xn as P, Nr as Q, le as R, H as S, er as T, lr as U, ae as a, S as b, w as c, Y as d, he as e, V as f, U as g, Pe as h, $ as i, v as j, sr as k, ar as l, me as m, ie as n, Jn as o, qn as p, Qn as q, rr as r, zn as s, Bn as t, ur as u, Hn as v, _r as w, fr as x, Zn as y, tr as z
};
//# sourceMappingURL=vendor-@intlify.BmUtFfVu.js.map