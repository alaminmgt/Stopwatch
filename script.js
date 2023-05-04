var h = 0 ;
var m = 0 ;
var s = 0 ;
var stopTime = true; 

function startTimer(){
    if (stopTime == true) {
        stopTime = false;
        startOn();
    };
};
function startOn() {
    if (stopTime == false) {
        h = parseInt(h);
        m = parseInt(m);
        s = parseInt(s);

        s = s + 1 ;
        if (s == 60) {
            m = m + 1 ;
            s = 0 ;
        };
        if (m == 60) {
            h = h + 1 ;
            s = 0 ;
            m = 0 ;
        };

        if (s < 10) {
            s = "0" + s ;
        };
        if (m < 10) {
            m = "0" + m ;
        };
        if (h < 10) {
            h = "0" + h ;
        };
        document.getElementById("stopWatch").innerText = h + ":" + m + ":" + s;
        

        setTimeout("startOn()", 1000);
    };

};
function stopTimer(){
    if (stopTime == false) {
        stopTime = true;
    };
};

function reserTimer(params) {
    document.getElementById("stopWatch").innerText = "00:00:00";
};


