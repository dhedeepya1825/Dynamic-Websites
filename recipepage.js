let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};
let recipeTitleContainer = document.getElementById("recipeTitle");
recipeTitleContainer.textContent = recipeObj.title;
recipeTitleContainer.classList.add("recipe-title");

let recipeImgContainer = document.getElementById("recipeImg");
let recipeImg=document.createElement('img');
recipeImg.setAttribute("src", recipeObj.imgSrc);
recipeImgContainer.appendChild(recipeImg);
for (let ingredients of recipeObj.ingredients){
    let unoListContainer = document.getElementById("unoList");
    let list = document.createElement('li');
    list.classList.add("text-white");
    list.textContent =ingredients ;
    unoListContainer.appendChild(list);
}
 
   