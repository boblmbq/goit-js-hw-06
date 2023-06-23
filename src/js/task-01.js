// Порахує і виведе в консоль кількість категорій
// в ul#categories, тобто елементів li.item.

// Для кожного элемента li.item
// у списку ul#categories, знайде і виведе
// в консоль текст заголовку елемента(тегу < h2 >)
// і кількість елементів в категорії(усіх < li >, вкладених в нього).

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const ul = document.querySelector("#categories");
console.log(ul);

const childFromUl = ul.querySelectorAll(".item");
console.log(childFromUl);

const numOfEL = childFromUl.length;
console.log(`Number of categories: ${numOfEL}`);
