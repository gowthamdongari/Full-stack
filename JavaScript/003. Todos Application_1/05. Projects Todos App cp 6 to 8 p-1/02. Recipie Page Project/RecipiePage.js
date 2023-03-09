let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

let ingredientList = recipeObj.ingredients;

let recipeTitleE1 = document.getElementById("recipeTitle");
let imgContainerE1 = document.getElementById("imgContainer");
let imgE1 = document.getElementById("img");
let ingredientListContainerE1 = document.getElementById("ingredientListContainer");

recipeTitleE1.textContent = recipeObj.title;

imgE1.setAttribute("src", recipeObj.imgSrc);
imgE1.classList.add("w-100");
imgContainerE1.appendChild(imgE1);

for (let ingredient of ingredientList) {
    let ingredientE1 = document.createElement("li");
    ingredientE1.textContent = ingredient;
    ingredientE1.classList.add("ingredient");
    ingredientListContainerE1.appendChild(ingredientE1);
}