var a = (y => (y[y.Today = 0] = "Today", y[y.Yesterday = 1] = "Yesterday", y[y.LastSevenDay = 7] = "LastSevenDay", y[y.LastFifteenDay = 15] = "LastFifteenDay", y[y.LastThirtyDay = 30] = "LastThirtyDay", y[y.LastSixtyDay = 60] = "LastSixtyDay", y))(a || {}),
    D = (y => (y[y.All = 0] = "All", y[y.Received = 2] = "Received", y[y.Expired = 3] = "Expired", y[y.Distributed = 4] = "Distributed", y[y.Cancelled = 5] = "Cancelled", y[y.Rejected = 8] = "Rejected", y[y.Progress = 9] = "Progress", y))(D || {});
export {
    D as E, a
};
//# sourceMappingURL=records.Bhm8aRMj.js.map