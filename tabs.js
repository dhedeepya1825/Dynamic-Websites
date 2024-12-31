let aboutTabContainer = document.getElementById("aboutTab");
let timeToVisitTabContainer= document.getElementById("timeToVisitTab");
let attractionsTabContainer = document.getElementById("attractionsTab");
let aboutButtonElement = document.getElementById("aboutButton");
let timeToVisitButtonElement = document.getElementById("timeToVisitButton");
let attractionsButtonElement = document.getElementById("attractionsButton");
timeToVisitTabContainer.classList.add("d-none");
attractionsTabContainer.classList.add("d-none");
function aboutButton() {
    aboutTabContainer.classList.remove("d-none");
    timeToVisitTabContainer.classList.add("d-none");
    attractionsTabContainer.classList.add("d-none");
    aboutButtonElement.classList.add("selected-button");
    timeToVisitButtonElement.classList.remove("selected-button");
    attractionsButtonElement.classList.remove("selected-button");
    
}
function timeToVisitButton(){
    aboutTabContainer.classList.add("d-none");
    timeToVisitTabContainer.classList.remove("d-none");
    attractionsTabContainer.classList.add("d-none");
    aboutButtonElement.classList.remove("selected-button");
    timeToVisitButtonElement.classList.add("selected-button");
    attractionsButtonElement.classList.remove("selected-button");
   
}
function attractionsButton(){
    aboutTabContainer.classList.add("d-none");
    timeToVisitTabContainer.classList.add("d-none");
    attractionsTabContainer.classList.remove("d-none");
    aboutButtonElement.classList.remove("selected-button");
    timeToVisitButtonElement.classList.remove("selected-button");
    attractionsButtonElement.classList.add("selected-button");
   
}