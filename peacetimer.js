let twentySecondsBtn = document.getElementById("twentySecondsBtn");
let thirtySecondsBtn = document.getElementById("thirtySecondsBtn");
let fortySecondsBtn = document.getElementById("fortySecondsBtn");
let timerText = document.getElementById("timerText");
let oneMinuteBtn = document.getElementById("oneMinuteBtn");
let countdown;

function startTimer(seconds) {
    clearInterval(countdown);
    timerText.textContent = seconds + " seconds left";

    countdown = setInterval(function() {
        seconds--;
        if (seconds > 0) {
            timerText.textContent = seconds + " seconds left";
        } else {
            timerText.textContent = "Your moment is complete";
            clearInterval(countdown);
        }

    }, 1000);
}
twentySecondsBtn.addEventListener("click", function() {
    startTimer(20);
});
thirtySecondsBtn.addEventListener("click", function() {
    startTimer(30);
});
fortySecondsBtn.addEventListener("click", function() {
    startTimer(40);
});
oneMinuteBtn.addEventListener("click", function() {
    startTimer(60);
});