document.addEventListener("DOMContentLoaded", function () {
    var hoursEl = document.getElementById("hours");
    var minutesEl = document.getElementById("minutes");
    var secondsEl = document.getElementById("seconds");

    var startBtn = document.getElementById("start");
    var stopBtn = document.getElementById("stop");
    var resetBtn = document.getElementById("reset");

    if (!hoursEl || !minutesEl || !secondsEl || !startBtn || !stopBtn || !resetBtn) {
        return;
    }

    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    var timerId = null;

    function updateDisplay() {
        hoursEl.textContent = String(hours).padStart(2, "0");
        minutesEl.textContent = String(minutes).padStart(2, "0");
        secondsEl.textContent = String(seconds).padStart(2, "0");
    }

    function tick() {
        seconds = seconds + 1;

        if (seconds === 60) {
            seconds = 0;
            minutes = minutes + 1;
        }

        if (minutes === 60) {
            minutes = 0;
            hours = hours + 1;
        }

        updateDisplay();
    }

    function startTimer() {
        if (timerId !== null) {
            return;
        }
        timerId = window.setInterval(tick, 1000);
    }

    function stopTimer() {
        if (timerId === null) {
            return;
        }
        window.clearInterval(timerId);
        timerId = null;
    }

    function resetTimer() {
        stopTimer();
        hours = 0;
        minutes = 0;
        seconds = 0;
        updateDisplay();
    }

    startBtn.addEventListener("click", startTimer);
    stopBtn.addEventListener("click", stopTimer);
    resetBtn.addEventListener("click", resetTimer);

    updateDisplay();
});