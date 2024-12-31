let imageElement = document.getElementById("image");
let imageWidth=document.getElementById("imageWidth");
let warningMessage=document.getElementById("warningMessage");

let originalImageWidth=200;
let maxImageWidth=300;
let minImageWidth=100;
imageElement.style.width = originalImageWidth+"px";
imageWidth.textContent=originalImageWidth+"px";
function onInc(){
   if(originalImageWidth>=maxImageWidth){
       warningMessage.textContent="too big ";
   }
   else{
      originalImageWidth=originalImageWidth+5;
      let updatedImageWidth=originalImageWidth+"px";
      warningMessage.textContent="";
      imageElement.style.width=updatedImageWidth;
      imageWidth.textContent=updatedImageWidth;
   }
}
function onDec(){
     if(originalImageWidth<=minImageWidth){
         warningMessage.textContent="cant visible";
     }
     else{
         originalImageWidth=originalImageWidth-5;
         let updatedImageWidth=originalImageWidth+"px";
              warningMessage.textContent="";
         imageElement.style.width=updatedImageWidth;
         imageWidth.textContent=updatedImageWidth;
     }
}