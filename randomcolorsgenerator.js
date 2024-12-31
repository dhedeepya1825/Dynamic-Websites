let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let bgContainerElement=document.getElementById("bgContainer");
function colorGenerator(){
    let noOfColors=bgColorsArray.length;
    let randomColors=Math.ceil(Math.random()*8);
    if(noOfColors===randomColors){
        randomColors=noOfColors-1;
    }
    let bgColorIndex=bgColorsArray[randomColors];
    bgContainerElement.style.backgroundColor=bgColorIndex;
}