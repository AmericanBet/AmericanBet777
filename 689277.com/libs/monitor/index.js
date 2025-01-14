var SENOR_ENV_VARS = [{
    address: "https://apiup-cf.cbfes.com/sa?project=default",
    allowSites: ["025", "2558", "032"]
}, {
    address: "https://apiup-cf.cbfes.com/sa?project=production",
    allowSites: ["230", "250", "296", "702", "326", "722", "500", "5033", "6275", "6276", "1071", "1056", "663", "5228", "5073", "5021", "5091", "5050", "5235", "602", "5012", "5119", "6332", "373", "6822"]
}];
window.LOBBY_SITE_CONFIG && window.LOBBY_SITE_CONFIG.INJECT_DATA && window.LOBBY_SITE_CONFIG.INJECT_DATA.apiGetSiteInfo && window.LOBBY_SITE_CONFIG.INJECT_DATA.apiGetSiteInfo.data && window.LOBBY_SITE_CONFIG.INJECT_DATA.apiGetSiteInfo.data.data && window.LOBBY_SITE_CONFIG.INJECT_DATA.apiGetSiteInfo.data.data.vestBagJumpConfig && window.LOBBY_SITE_CONFIG.INJECT_DATA.apiGetSiteInfo.data.data.vestBagJumpConfig.find((function(e) {
    return "wg.sensors.on" == e.packageName
})) && SENOR_ENV_VARS[1].allowSites.push(window.LOBBY_SITE_CONFIG.INJECT_DATA.apiGetSiteInfo.data.data.siteCode);
var currentSensors = SENOR_ENV_VARS.find((function(e) {
    return e.allowSites.includes(window.LOBBY_SITE_CONFIG.INJECT_DATA.apiGetSiteInfo.data.data.siteCode)
}));

function importSensorScript() {
    console.log("Sensors:");
    var e = document.createElement("script");
    e.id = "script-Sensors", e.defer = !0, e.onload = function() {
        onSensorsloaded()
    }, e.src = "/libs/monitor/sensorsdata.min.js", document.head.appendChild(e)
}

function onSensorsloaded() {
    var e = window.sensorsDataAnalytic201505;
    e.init({
        server_url: currentSensors ? currentSensors.address : "",
        is_track_single_page: !0,
        use_client_time: !0,
        send_type: "beacon",
        heatmap: {
            clickmap: "default",
            scroll_notice_map: "not_collect"
        }
    }), e.track("htmlStart")
}
currentSensors && importSensorScript();