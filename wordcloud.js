let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];
let wordsContainer=document.getElementById("wordsContainer");
let userInput=document.getElementById("userInput");
let errorMsg=document.getElementById("errorMsg");
let addBtn=document.getElementById("addBtn");

function createAndAddWordToCloud(word){
    let randomSize=Math.ceil(Math.random()*40)+"px";
    let wordEl=document.createElement("span");
    wordEl.classList.add("m-3");
    wordEl.style.fontSize=randomSize;
    wordEl.textContent=word;
    wordsContainer.appendChild(wordEl);
}
for (let word of wordCloud){
    createAndAddWordToCloud(word);
}
function onAddWordToWordCloud(){
    let userInputText=userInput.value;
    if(userInputText!==""){
        userInput.value="";
        errorMsg.textContent="";
        createAndAddWordToCloud(userInputText);
    }
    else{
        errorMsg.textContent="error";
    }
}