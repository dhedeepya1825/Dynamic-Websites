let hoursInput = document.getElementById("hoursInput");
let minutesInput = document.getElementById("minutesInput");
let convertBtn = document.getElementById("convertBtn");
let timeInSeconds = document.getElementById("timeInSeconds");
let errorMsg = document.getElementById("errorMsg");
convertBtn.addEventListener("click", function() {
    errorMsg.textContent = "";
    timeInSeconds.textContent = "";
    let hours = parseInt(hoursInput.value);
    let minutes = parseInt(minutesInput.value);


    if (isNaN(hours)) {
        errorMsg.textContent = "please enter valid no of hours";
    } else if (isNaN(minutes)) {

        errorMsg.textContent = "please enter valid no of mins";
    } else {
        let result = hours * 3600 + minutes * 60;
        timeInSeconds.textContent = result + "s";
    }
});