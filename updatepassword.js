let newPassword = document.getElementById("newPassword");
let confirmPassword = document.getElementById("confirmPassword");
let updateBtn = document.getElementById("updateBtn");
let updatePasswordForm = document.getElementById("updatePasswordForm");
let newPasswordErrMsg = document.getElementById("newPasswordErrMsg");
let confirmPasswordErrMsg = document.getElementById("confirmPasswordErrMsg");
newPassword.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        newPasswordErrMsg.textContent = "Required*";
        newPasswordErrMsg.style.color = "red";
    } else {
        newPasswordErrMsg.textContent = "";
    }
})
confirmPassword.addEventListener("blur", function() {
    if (confirmPassword.value === "") {


    } else {
        confirmPasswordErrMsg.textContent = "";
    }

})
updatePasswordForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;
    if (newPassword.value === "") {
        newPasswordErrMsg.textContent = "Required*";
        newPasswordErrMsg.style.color = "red";
        isValid = false;

    } else {
        newPasswordErrMsg.textContent = "";
    }
    if (confirmPassword.value === "") {
        confirmPasswordErrMsg.textContent = "password must be same";
        confirmPasswordErrMsg.style.color = "red";
        isValid = false;

    } else {
        confirmPasswordErrMsg.textContent = "";
    }

    if (isValid) {
        if (newPassword.value === confirmPassword.value) {
            confirmPasswordErrMsg.textContent = "";
        } else {
            confirmPasswordErrMsg.textContent = "password must be same";
            confirmPasswordErrMsg.style.color = "red";
        }


    }
})