let billAmountElement=document.getElementById("billAmount");
let percentageTipElement=document.getElementById("percentageTip");
let tipAmountElement=document.getElementById("tipAmount");
let totalAmountElement=document.getElementById("totalAmount");
let errorMessageElement=document.getElementById("errorMessage");
let errorMsg="please enter valid input";
function calculateButton(){
    let bill=parseInt(billAmountElement.value);
   let percentageTip=parseInt(percentageTipElement.value);
    if (bill===""){
       errorMessageElement.textContent=errorMsg;

   }
   else if (percentageTip===""){
       errorMessageElement.textContent=errorMsg;

   }
   else{
       errorMessageElement.textContent="";
   let calculatedTip=(percentageTip/100)*bill;
   let total=bill+calculatedTip;
  tipAmountElement.value=calculatedTip;
   totalAmountElement.value=total;
   }
}
