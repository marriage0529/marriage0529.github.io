// dev JS
"use strict";
const userAgent = navigator.userAgent.toLowerCase();
let isKakao = checkKakao() ? "Y" : "N";

function checkKakao() {
    if (userAgent.indexOf("kakao") != -1) return true;
    else return false;
}

alert(isKakao);
