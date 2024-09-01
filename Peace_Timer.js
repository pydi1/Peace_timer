let timerText1 = document.getElementById("timerText");
let twentySecondsBtn1 = document.getElementById("twentySecondsBtn");
let thirtySecondsBtn1 = document.getElementById("thirtySecondsBtn");
let fortySecondsBtn1 = document.getElementById("fortySecondsBtn");
let oneMinuteBtn1 = document.getElementById("oneMinuteBtn");
let count = 0;
let index;

function prevousclearInterval() {
    clearInterval(index);
}
twentySecondsBtn1.onclick = function() {
    prevousclearInterval();
    count = 20;
    timerText1.textContent = count + " seconds left";
    index = setInterval(function() {
        if (count === 0) {
            timerText1.textContent = "Your moment is complete";
            clearInterval(index);

        }

        count = count - 1;
        timerText1.textContent = count + " seconds left";

    }, 1000);

}
thirtySecondsBtn1.onclick = function() {
    prevousclearInterval();
    count = 30;
    timerText1.textContent = count + " seconds left";
    index = setInterval(function() {
        if (count === 0) {
            timerText1.textContent = "Your moment is complete";
            clearInterval(index);
        }

        count = count - 1;
        timerText1.textContent = count + " seconds left";
    }, 1000);



}
fortySecondsBtn1.onclick = function() {
    prevousclearInterval();
    count = 40;
    timerText1.textContent = count + " seconds left";
    index = setInterval(function() {
        if (count === 0) {
            timerText1.textContent = "Your moment is complete";
            clearInterval(index);
        }

        count = count - 1;
        timerText1.textContent = count + " seconds left";
    }, 1000);

}
oneMinuteBtn1.onclick = function() {
    prevousclearInterval();
    count = 60;
    timerText1.textContent = count + " seconds left";
    index = setInterval(function() {
        if (count === 0) {
            timerText1.textContent = "Your moment is complete";
            clearInterval(index);
        }

        count = count - 1;
        timerText1.textContent = count + " seconds left";
    }, 1000);

}