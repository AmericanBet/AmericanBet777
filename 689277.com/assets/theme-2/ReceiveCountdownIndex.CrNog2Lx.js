import {
    T as x
} from "../vendors/vendor-stable.Cg92BvZJ.js";
import {
    q as k,
    ac as b,
    cY as _,
    cZ as N
} from "./main.async.-NbSL2aO.js";
import {
    k as f,
    bd as h,
    r as g,
    w as R,
    aN as U,
    a5 as l,
    c as S
} from "../vendors/vendor-@vue.CBvhRkQp.js";
var n = (e => (e.Countdown = "Countdown", e.CanReceive = "CanReceive", e.Expired = "Expired", e.Expired1 = "Expired1", e.Expired2 = "Expired2", e.Reset = "Reset", e.Update = "Update", e.None = "None", e))(n || {});
const [z] = k("pages-components-countdown"), T = f({
    name: z,
    props: {
        duration: {
            type: Number,
            default: 0
        }
    },
    emits: ["update", "complete"],
    setup(e, {
        slots: d,
        emit: r
    }) {
        const {
            duration: s
        } = h(e), u = g(-1);
        let a = null;
        const p = _(1);
        return R(() => s.value, o => {
            o < 0 || (a && a.kill(), a = new b({
                value: o
            }, {
                raf: p
            }).to({
                value: 0
            }, {
                duration: o * 1e3,
                onUpdate({
                    target: c
                }) {
                    u.value = c.value, r("update")
                },
                onComplete() {
                    u.value = 0, r("complete")
                }
            }))
        }, {
            immediate: !0
        }), U(() => {
            a && a.kill()
        }), () => {
            var o;
            return l("span", null, [(o = d.default) == null ? void 0 : o.call(d, u.value)])
        }
    }
}), E = "_countdown_jznwl_25", M = "_inheritTextColor_jznwl_37", A = "_expiredCountdown_jznwl_44", I = "_receiveCountdown_jznwl_53", q = "_common_bganimation_jznwl_1", i = {
    countdown: E,
    inheritTextColor: M,
    expiredCountdown: A,
    receiveCountdown: I,
    common_bganimation: q
}, [B] = k("pages-receive-countdown"), Y = f({
    name: B,
    props: {
        duration: {
            type: Number,
            default: 0
        },
        inheritTextColor: {
            type: Boolean,
            default: !1
        },
        durationFormat: {
            type: Function,
            default: N
        },
        textFormatType: {
            type: String,
            default: n.Countdown
        },
        className: {
            type: String,
            default: ""
        },
        customStyle: {
            type: Object,
            default: () => {}
        }
    },
    emits: ["update", "complete"],
    setup(e, {
        emit: d
    }) {
        const {
            duration: r,
            textFormatType: s,
            className: u,
            customStyle: a
        } = h(e), p = S(() => ({
            [n.Countdown]: {
                keypath: "lobby.reward.vip.rewardMap.rewardTips0",
                keyword: "x"
            },
            [n.CanReceive]: {
                keypath: "lobby.reward.vip.rewardMap.rewardTimeTips",
                keyword: "x"
            },
            [n.Expired]: {
                keypath: "lobby.modal.task.timeNotArrived.expiryTime",
                keyword: "x"
            },
            [n.Expired2]: {
                keypath: "lobby.reward.base.expiredTime",
                keyword: "x"
            },
            [n.Expired1]: {
                keypath: "lobby.reward.base.expiredTime1",
                keyword: "0"
            },
            [n.Reset]: {
                keypath: "lobby.cpf.afterReset",
                keyword: "x"
            },
            [n.Update]: {
                keypath: "lobby.event.cutOnce.updateTime",
                keyword: "time"
            },
            [n.None]: {
                keypath: "",
                keyword: ""
            }
        })), w = () => {
            d("update")
        }, o = () => {
            d("complete")
        };
        return () => l(T, {
            duration: Math.abs(r.value),
            onUpdate: w,
            onComplete: o
        }, {
            default: c => {
                var y, v, C;
                const m = l("span", {
                        class: [i.countSpan]
                    }, [((y = e.durationFormat) == null ? void 0 : y.call(e, c)) || ""]),
                    t = (v = p.value) == null ? void 0 : v[s.value];
                return l("span", {
                    class: {
                        [i.countdown]: !0,
                        [i.receiveCountdown]: r.value > 0,
                        [i.expiredCountdown]: r.value < 0,
                        [u.value]: !!u.value,
                        countdown: !0,
                        [i.inheritTextColor]: e.inheritTextColor
                    },
                    style: a.value,
                    "data-text": ((C = e.durationFormat) == null ? void 0 : C.call(e, c)) || ""
                }, [t != null && t.keypath ? l(x, {
                    keypath: t == null ? void 0 : t.keypath,
                    tag: "span",
                    scope: "global"
                }, (t == null ? void 0 : t.keyword) === "0" ? {
                    default: () => m
                } : {
                    [t == null ? void 0 : t.keyword]: () => m
                }) : m])
            }
        })
    }
});
export {
    n as E, Y as R
};
//# sourceMappingURL=ReceiveCountdownIndex.CrNog2Lx.js.map