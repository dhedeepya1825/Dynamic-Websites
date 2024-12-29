let firstNumberElement=document.getElementById("firstNumber");
let secondNumberElement=document.getElementById("secondNumber");
let userInputValue=document.getElementById("userInput");
 let randFirstNumber=Math.ceil(Math.random()*100);
let randSecondNumber=Math.ceil(Math.random()*100);
firstNumberElement.textContent=randFirstNumber;
secondNumberElement.textContent=randSecondNumber;
   
let gameResultElement=document.getElementById("gameResult");
function checkButton(){
    
         let userGuessInput=parseInt(userInputValue.value);
    let sumOfTwoNumbers=randFirstNumber+randSecondNumber
    if (sumOfTwoNumbers===userGuessInput){
        gameResultElement.textContent="Congratulations! You got it right";
        gameResultElement.classList.add("game-result");
        gameResultElement.style.backgroundColor="#028a0f";
    }
    else {
        gameResultElement.textContent="Please try again!";
        gameResultElement.classList.add("game-result");
        gameResultElement.style.backgroundColor="#1e217c";
    
    }
}

function restartButton(){
    randFirstNumber=Math.ceil(Math.random()*100);
    firstNumberElement.textContent=randFirstNumber;
    randSecondNumber=Math.ceil(Math.random()*100);
    secondNumberElement.textContent=randSecondNumber;
    gameResultElement.textContent="";
    
    
}
restartButton();