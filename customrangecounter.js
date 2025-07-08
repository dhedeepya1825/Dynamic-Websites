let fromUserInputEl = document.getElementById("fromUserInput");
let toUserInputEl = document.getElementById("toUserInput");
let startBtnEl = document.getElementById("startBtn");
let counterTextEl = document.getElementById("counterText");
 let s;
startBtnEl.addEventListener("click", function() {
    let fromVal=parseInt(fromUserInputEl.value);
     let toVal = parseInt(toUserInputEl.value);
     if(fromUserInputEl.value===""){
         alert("Enter the from value");
     }
     else if(toUserInputEl.value===""){
        alert("Enter the to value");
     }else{
         clearInterval(s);
         counterTextEl.textContent = fromVal;
setInterval(function(){
    if(fromVal<toVal){
     fromVal++;
    counterTextEl.textContent = fromVal;
    }
    else{
        clearInterval(s);
    }
},1000);
    
     }
})