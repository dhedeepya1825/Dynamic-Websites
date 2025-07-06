let userInput = document.getElementById("userInput");
let factEl = document.getElementById("fact");
function knowFact(fact){
   factEl.textContent=fact;
   factEl.style.color="black";
  
}
function getFact(event){
    if(event.key==="Enter"){
    let userVal=parseInt(userInput.value);
    let options={
        method:"GET"
    }
    fetch("https://apis.ccbp.in/numbers-fact?number="+userVal,options)
    .then(function(response){
       return response.json();
    })
    .then(function(jsondata){
      let {fact}=jsondata;
        knowFact(fact);
       console.log(jsondata);
    })
    }
}
userInput.addEventListener("keydown",getFact);