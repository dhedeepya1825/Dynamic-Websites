// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let submitBtn = document.getElementById("submitBtn");
let siteNameInput = document.getElementById("siteNameInput");
let siteUrlInput = document.getElementById("siteUrlInput");
let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");
let bookmarksList = document.getElementById("bookmarksList");
let bookmarkForm = document.getElementById("bookmarkForm");
siteNameInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsg.textContent = "Required*";
        siteNameErrMsg.style.color = "#dc3545";
    } else {
        siteNameErrMsg.textContent = "";
    }
})
siteUrlInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsg.textContent = "Required*";
        siteUrlErrMsg.style.color = "#dc3545";
    } else {
        siteUrlErrMsg.textContent = "";
    }
})
bookmarkForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;
    if (siteNameInput.value === "") {
        siteNameErrMsg.textContent = "Required*";
        siteNameErrMsg.style.color = "#dc3545";
        isValid = false;
    } else {
        siteUrlErrMsg.textContent = "";
    }

    if (siteUrlInput.value === "") {
        siteUrlErrMsg.textContent = "Required*";
        siteUrlErrMsg.style.color = "#dc3545";
        isValid = false;
    } else {
        siteUrlErrMsg.textContent = "";
    }
    if (isValid) {
        let listitems = document.createElement('li');
        bookmarksList.appendChild(listitems);
        bookmarksList.classList.remove("d-none");
        let title = document.createElement('a');
        title.textContent = siteNameInput.value;
        title.classList.add("title-styles");
        listitems.appendChild(title);
        listitems.classList.add("list-type");
        let br = document.createElement('br');
        listitems.appendChild(br);
        let url = document.createElement('a');
        url.textContent = siteUrlInput.value;
        url.classList.add("url-styles");
        url.href = siteUrlInput.value;
        url.target = "_blank";
        listitems.appendChild(url)
    }
})