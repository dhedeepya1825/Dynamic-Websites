let questionsForm = document.getElementById("questionsForm");
let cityHyderabad = document.getElementById("cityHyderabad");
let cityChennai = document.getElementById("cityChennai");
let cityDelhi = document.getElementById("cityDelhi");
let cityMumbai = document.getElementById("cityMumbai");
let resultMsg = document.getElementById("resultMsg");
let capitalCity = "Delhi";
let selectedcity = null;
cityHyderabad.addEventListener("change", function(event) {
    selectedcity = event.target.value;
})
cityChennai.addEventListener("change", function(event) {
    selectedcity = event.target.value;
})
cityDelhi.addEventListener("change", function(event) {
    selectedcity = event.target.value;
})
cityMumbai.addEventListener("change", function(event) {
    selectedcity = event.target.value;
})
questionsForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if (selectedcity === null) {
        resultMsg.textContent = "Please select the Answer";
        resultMsg.style.color = "red";
    } else if (selectedcity === capitalCity) {
        resultMsg.textContent = "Correct Answer";
        resultMsg.style.color = "green";
    } else {
        resultMsg.textContent = "Wrong Answer";
        resultMsg.style.color = "red";
    }
})