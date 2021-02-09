// dev JS
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

function exitBrowser() {
    let str = "";
    str += "userAgent 출력 " + _USERAGENT + "\n";
    str += "Device 출력 " + _DEVICE + "\n";
    str += "Device 운영체제 출력 " + _DEVICE_SYSTEM;
    alert(str);
    // if (userAgent.indexOf("kakao") != -1 || userAgent.indexOf("naver") != -1) {
    //     return true;
    // } else {
    //     return false;
    // }
}

exitBrowser();
