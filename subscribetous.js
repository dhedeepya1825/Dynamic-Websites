let subscribeBtn = document.getElementById("subscribeBtn");
let subscribeForm = document.getElementById("subscribeForm");

let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let errorName = document.getElementById("nameErrMsg");
let errorEmail = document.getElementById("emailErrMsg");
nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        errorName.textContent = "Required*";
        errorName.style.color = "red";
    } else {
        errorName.textContent = "";
    }
})

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        errorEmail.textContent = "Required*";
        errorEmail.style.color = "red";
    } else {
        errorEmail.textContent = "";
    }
})
subscribeForm.addEventListener("submit", function(event) {
    event.preventDefault();
})