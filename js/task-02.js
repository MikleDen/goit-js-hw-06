
const ingr = document.querySelector("#ingredients");
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];


const element = ingredients.map(option =>{
  const ingredient = document.createElement("li");
    ingredient.classList.add("item");
    ingredient.textContent = option;
    
   return ingredient
});

ingr.append(... element);

// for (let i = 0; i < ingredients.length; i++) {
//   const ingredient = document.createElement("li");
//   ingredient.classList.add("item");
//   ingredient.textContent = ingredients[i];
  
//   ingr.appendChild(ingredient);
 
// };


