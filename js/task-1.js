const categoriesListElem = document.querySelector("#categories");

const categoryItems = categoriesListElem.querySelectorAll(".item");

console.log("Number of categories:", categoryItems.length);

categoryItems.forEach((item) => {
const title = item.querySelector("h2").textContent;

const elementsCount = item.querySelectorAll("ul li").length;

console.log(`Category: ${title}`);
console.log(`Elements: ${elementsCount}`);
});
