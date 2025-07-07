let jokeText = document.getElementById("jokeText");
let jokeBtn = document.getElementById("jokeBtn");

function displayjoke(value) {
    jokeText.textContent = value;
}
jokeBtn.addEventListener("click", function() {
    let options = {
        method: "GET"
    }
    fetch("https://apis.ccbp.in/jokes/random", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsondata) {
            let {
                value
            } = jsondata;
            displayjoke(value);

        })
})