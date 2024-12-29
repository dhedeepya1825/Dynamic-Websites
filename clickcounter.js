let counterValueEl = document.getElementById("counterValue");
let incrementButton = document.getElementById("incrementBtn");
let clickCount = localStorage.getItem("countClick");
if (clickCount === null) {
    counterValueEl.textContent = 0; //If localStorage doesnot have a value in it, we are dispalying 0
} else {
    counterValueEl.textContent = clickCount; //If local storage has some value, we are displaying that value
}

incrementButton.onclick = function() {
    let previousCounterValue = counterValueEl.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    let clickCount = localStorage.setItem("clickCount", updatedCounterValue);
    counterValueEl.textContent = updatedCounterValue;
}