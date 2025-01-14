var c = Object.defineProperty;
var h = (n, t, e) => t in n ? c(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e;
var s = (n, t, e) => h(n, typeof t != "symbol" ? t + "" : t, e);
class a {
    constructor(t, e, i, r = 0, o = 0) {
        s(this, "identifier");
        s(this, "target");
        s(this, "clientX");
        s(this, "clientY");
        s(this, "screenX");
        s(this, "screenY");
        s(this, "pageX");
        s(this, "pageY");
        this.identifier = e, this.target = t, this.clientX = i.clientX + r, this.clientY = i.clientY + o, this.screenX = i.screenX + r, this.screenY = i.screenY + o, this.pageX = i.pageX + r, this.pageY = i.pageY + o
    }
}

function u() {
    const n = [];
    return n.item = function(t) {
        return this[t] || null
    }, n.identifiedTouch = function(t) {
        return this[t + 1] || null
    }, n
}
class d {
    constructor(t = window) {
        s(this, "eventTarget");
        s(this, "initiated", !1);
        s(this, "destoryCallback");
        if ("ontouchstart" in window) return;
        this.eventTarget = null, this.initiated = !1;
        const i = this.onMouse("touchstart"),
            r = this.onMouse("touchmove"),
            o = this.onMouse("touchend");
        t.addEventListener("mousedown", i, !0), t.addEventListener("mousemove", r, !0), t.addEventListener("mouseup", o, !0), this.destoryCallback = () => {
            t.removeEventListener("mousedown", i, !0), t.removeEventListener("mousemove", r, !0), t.removeEventListener("mouseup", o, !0)
        }
    }
    destory() {
        this.destoryCallback && this.destoryCallback()
    }
    onMouse(t) {
        return e => {
            e.type === "mousedown" && (this.initiated = !0), e.type === "mouseup" && (this.initiated = !1), !(e.type === "mousemove" && !this.initiated) && ((e.type === "mousedown" || !this.eventTarget || this.eventTarget && !this.eventTarget.dispatchEvent) && (this.eventTarget = e.target), this.eventTarget.closest("[data-no-touch-simulate]") == null && this.triggerTouch(t, e), e.type === "mouseup" && (this.eventTarget = null))
        }
    }
    getActiveTouches(t) {
        return t.type === "mouseup" ? u() : this.createTouchList(t)
    }
    triggerTouch(t, e) {
        const i = document.createEvent("Event");
        i.initEvent(t, !0, !0), i.altKey = e.altKey, i.ctrlKey = e.ctrlKey, i.metaKey = e.metaKey, i.shiftKey = e.shiftKey, i.touches = this.getActiveTouches(e), i.targetTouches = this.getActiveTouches(e), i.changedTouches = this.createTouchList(e), this.eventTarget.dispatchEvent(i)
    }
    createTouchList(t) {
        const e = u();
        return e.push(new a(this.eventTarget, 1, t, 0, 0)), e
    }
}
s(d, "multiTouchOffset", 75);
export {
    d as
    default
};
//# sourceMappingURL=index.BFcOs8oT.js.map