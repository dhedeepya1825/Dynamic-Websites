let timer = document.getElementById("timer");
let submitBtn = document.getElementById("submitBtn");
let quoteDisplay = document.getElementById("quoteDisplay");
let quoteInput = document.getElementById("quoteInput");
let resetBtn = document.getElementById("resetBtn");
let result = document.getElementById("result");
let spinner = document.getElementById("spinner");
let s;
function setTimer() {
    let prev = timer.textContent;
    let updated = parseInt(prev) + 1;
    timer.textContent = updated;
}
s = setInterval(setTimer, 1000);

function displayQuote(content) {
    spinner.classList.add("d-none");
    quoteDisplay.textContent = content;
    let randomQuotes = content;
    timer.textContent="0";
    result.textContent ="";
    quoteInput.value="";

}

function randomQuote() {
    spinner.classList.remove("d-none");
    let options = {
        method: "GET"
    }
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsondata) {
            let {
                content
            } = jsondata;
            displayQuote(content);
        })
}
resetBtn.addEventListener("click", randomQuote);

function checkTest(event) {
    if (quoteInput.value === quoteDisplay.textContent) {
        result.textContent = "you typed in " + timer.textContent + " seconds";
        clearInterval(s);
    } else {
        result.textContent = "you typed incorrect sentence";
    }
}
submitBtn.addEventListener("click", checkTest);
randomQuote();