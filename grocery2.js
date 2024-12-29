let bgContainerEl=document.createElement('div');
bgContainerEl.classList.add("grocery-bg-container");

document.body.appendChild(bgContainerEl);
let headEl=document.createElement('h1');
headEl.classList.add("grocery-head");
headEl.textContent="Grocery List"
bgContainerEl.appendChild(headEl);
let uolistEl=document.createElement('ul');
uolistEl.classList.add("grocery-unoderedlist");
bgContainerEl.appendChild(uolistEl);
let groceryItems=["milk","peanut butter","choco chips","tomato sauce","cup cakes","noodles"];

for (let eachItem of groceryItems){
  let listElement=document.createElement('li');
    listElement.textContent=eachItem;
    uolistEl.appendChild(listElement);
}
let inputEl=document.createElement('input');
inputEl.id="myCheckBox";
inputEl.type="checkbox";
bgContainerEl.appendChild(inputEl);
let labelEl=document.createElement('labael');
labelEl.setAttribute("for","myCheckBox");
labelEl.textContent="Need home delivery";
labelEl.classList.add("grocery-checkbox-text");
bgContainerEl.appendChild(labelEl);
let btnContainer=document.createElement('div');
bgContainerEl.appendChild(btnContainer);
let btn=document.createElement('button');
btn.classList.add("btn","btn-primary","mt-3");
btn.textContent="proceed to pay";
btnContainer.appendChild(btn);