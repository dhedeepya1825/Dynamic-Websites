let bgContainer = document.getElementById("bgContainer");
let heading = document.getElementById("heading");
let themeUserInput = document.getElementById("themeUserInput");

function changeTheme(event) {
    if (event.key === "Enter") {
        let themeUserInputVal = themeUserInput.value;
        if (themeUserInputVal === "Light") {
            bgContainer.style.backgroundImage = "url('https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
            themeUserInput.value = "";
            heading.style.color = "#014d40";
        } else if (themeUserInputVal === "Dark") {
            bgContainer.style.backgroundImage = "url('https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
            themeUserInput.value = "";
            // heading.style.color="#ffffff";
        } else {
            alert("Enter the Valid Theme");
            themeUserInput.value = "";
        }
    }
}
themeUserInput.addEventListener("keydown", changeTheme);