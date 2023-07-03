const ul = document.querySelectorAll(".item");
console.log("Number of categories:", ul.length);

ul.forEach((elem) => {
  console.log(
    "Category:", elem.firstElementChild.textContent);
  console.log("Elements:", elem.lastElementChild.children.length);
});