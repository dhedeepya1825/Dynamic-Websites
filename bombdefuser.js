let defuserEl = document.getElementById("defuser");
let timerEl = document.getElementById("timer");
let counter = 10;
let s = setInterval(function() {
    timerEl.textContent = counter;
    counter = counter - 1;
    if (counter <= 0) {
        timerEl.textContent = "BOOM";
        clearInterval(s);
    }
}, 1000);
defuserEl.addEventListener("keydown", function(event) {
    let defusers = defuserEl.value;
    if (event.key === "Enter" && counter !== 0 && defusers === "defuse") {
        timerEl.textContent = "You did it!";
        clearInterval(s);
    }
})