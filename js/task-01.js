const categories = document.querySelector("#categories");

console.log("Number of categories:", categories.children.length);

const ctg = categories.children;

for (let i = 0; i < ctg.length; i++) {
  
  console.log("Category:", ctg[i].firstElementChild.textContent);
  console.log("Elements:", ctg[i].lastElementChild.children.length);
}


