let intervalId = null;

function test() {
    let hour = document.querySelector("#hour>p");
    let min = document.querySelector("#min>p");
    let sec = document.querySelector("#sec>p");
    let mili = document.querySelector("#mili>p");

    miliText = mili.innerHTML;
    secText = sec.innerHTML;
    minText = min.innerHTML;
    hourText = hour.innerHTML;

    miliText++;;

    if (miliText > 99) {
        secText++;
        miliText = 0;
    }
    if (secText > 59) {
        minText++;
        secText = 0;
    }
    if (minText > 59) {
        hourText++;
        minText = 0;
    }

    hour.innerHTML = hourText;
    min.innerHTML = minText;
    sec.innerHTML = secText;
    mili.innerHTML = miliText;
}

function run() {
    let btn = document.getElementById("toggle");

    if (intervalId == null) {
        btn.innerHTML = "Stop";
        intervalId = setInterval(test, 10);

    } else {
        btn.innerHTML = "Start";
        clearInterval(intervalId);
        intervalId = null;
    }

}

function reset() {
    document.querySelector("#hour>p").innerHTML = 0;
    document.querySelector("#min>p").innerHTML = 0;
    document.querySelector("#sec>p").innerHTML = 0;
    document.querySelector("#mili>p").innerHTML = 0;

    if (intervalId != null)
        run();
}