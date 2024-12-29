let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
 let randomNum=Math.ceil(Math.random()*100);
function checkGuess() {
 let userInputValue=parseInt(userInput.value);

 if (userInputValue>randomNum){
     gameResult.textContent="it is too high";
     gameResult.style.backgroundColor="blue";
 }
 else if (userInputValue<randomNum){
     gameResult.textContent="it is too low";
     gameResult.style.backgroundColor="blue";
 }
 else if (userInputValue===randomNum){
     gameResult.textContent="congrats you won";
     gameResult.style.backgroundColor="green";
 }
 else{
     gameResult.textContent="please provide valid input";
     gameResult.style.backgroundColor="red";
 }
}