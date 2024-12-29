let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];
let groceryListContainer=document.getElementById("groceryListContainer");
// document.body.appendChild(groceryListContainer); we have to remove this line.
let bgContainerEl=document.createElement('div');
bgContainerEl.classList.add("grocery-bg-container");
groceryListContainer.appendChild(bgContainerEl);
let headEl=document.createElement('h1');
headEl.classList.add("grocery-head");
headEl.textContent="Grocery List"
bgContainerEl.appendChild(headEl);
let uolistEl=document.createElement('ul');
uolistEl.classList.add("grocery-unoderedlist");
bgContainerEl.appendChild(uolistEl);
for (let eachItem of groceryList){
  let listElement=document.createElement('li');
    listElement.textContent=eachItem;
    uolistEl.appendChild(listElement);
}