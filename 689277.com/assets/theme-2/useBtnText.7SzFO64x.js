import {
    E as o
} from "./const.kNgtypBJ.js";
import {
    a as t
} from "./main.async.-NbSL2aO.js";
import {
    c as l
} from "../vendors/vendor-@vue.CBvhRkQp.js";
const s = () => {
    const {
        t: e
    } = t();
    return {
        textMapper: l(() => ({
            [o.Discount]: () => e("lobby.tabbar.discount"),
            [o.PendingReceive]: () => e("lobby.modal.task.collect"),
            [o.HasSend]: () => e("lobby.modal.task.distributed"),
            [o.Processing]: () => e("lobby.modal.task.processing"),
            [o.Goto]: () => e("lobby.modal.task.forward"),
            [o.UnOpen]: () => e("lobby.modal.task.invalid"),
            [o.Expired]: () => e("lobby.modal.task.expired"),
            [o.ServerCancel]: () => e("lobby.modal.task.cancel"),
            [o.Finish]: () => e("lobby.modal.task.collected"),
            [o.PendingApprove]: () => e("lobby.modal.task.collect"),
            [o.PendingApply]: () => e(""),
            [o.ServerReject]: () => e("lobby.records.rejected"),
            [o.ReceiveAll]: () => e("lobby.modal.task.collectAll"),
            [o.WaitingGet]: () => e("lobby.game.nav.waitingCollect"),
            [o.GrayPendingReceive]: () => e("lobby.modal.task.collect")
        }))
    }
};
export {
    s as u
};
//# sourceMappingURL=useBtnText.7SzFO64x.js.map