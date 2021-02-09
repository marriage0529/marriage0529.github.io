$(function () {
    motionFn();
});

function motionFn() {
    var wheelTime = 0,
        flag = 0;
    var $All = $(".wrapper"),
        $scroll = $(".box");

    // 휠
    function wheelEvt() {
        $("body").on("mousewheel DOMMouseScroll", function (e) {
            if (flag) return;

            var evt = e.originalEvent,
                wheel = evt.deltaY;
            evt.detail ? (wheel = evt.detail) : (wheel = evt.deltaY); // detail == 파이어폭스
            // 1 == 아래 / 0 == 위
            wheel > 0 ? pageMove(1) : pageMove(0);
        });
    }
    wheelEvt();

    // 터치
    function touchFn() {
        var touchS, touchE;

        $scroll
            .off("touchstart mousedown")
            .on("touchstart mousedown", function (e) {
                e.type == "touchstart"
                    ? (touchS = e.originalEvent.targetTouches[0].clientY)
                    : (touchS = e.clientY);
            })
            .off("touchend mouseup")
            .on("touchend mouseup", function (e) {
                e.type == "touchend"
                    ? (touchE = e.originalEvent.changedTouches[0].clientY)
                    : (touchE = e.clientY);

                if (flag) return;
                if (touchS - touchE > 100) {
                    pageMove(1);
                } else if (touchS - touchE < -100) {
                    pageMove(0);
                } else {
                    return;
                }
            });
    }
    touchFn();

    function pageMove(m) {
        if (m) {
            wheelTime++;
            if (wheelTime >= $scroll.length - 1) {
                wheelTime = $scroll.length - 1;
            }
        } else {
            wheelTime--;
            if (wheelTime < 0) {
                wheelTime = 0;
            }
        }

        var bHeight;
        $(window)
            .resize(function () {
                bHeight = $(".box").outerHeight();
            })
            .resize();

        flag = 1;
        $(".wrapper").animate(
            { top: -(bHeight * wheelTime) },
            1000,
            "easeInOutCubic",
            function () {
                flag = 0;
            }
        );
    }
}
