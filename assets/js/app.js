/*
 * @author chan
 * @date 2021.02.09
 * @version 1.0
 */
"use strict";
const _FILTER = "win16|win32|win64|mac|macintel";
const _USERAGENT = navigator.userAgent.toLowerCase();
const _DEVICE = divisionDevice();
const _DEVICE_SYSTEM = _USERAGENT.indexOf("iphone") > -1 ? "iOS" : "Android";

function divisionDevice() {
    if (navigator.platform) {
        if (_FILTER.indexOf(navigator.platform.toLowerCase()) < 0) {
            return "Mobile";
        } else {
            return "PC";
        }
    }
}
