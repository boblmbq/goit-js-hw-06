// Напиши скрипт для створення галереї зображень
// на підставі масиву даних.HTML містить список ul.gallery.

// Усі елементи галереї повинні додаватися в DOM
// за одну операцію додавання.
//! Додай мінімальне оформлення галереї
//! флексбоксами або грідами через CSS класи.

// Використовуй масив об'єктів images для створення
// елементів < img >, вкладених в < li >.
// Для створення розмітки використовуй шаблонні рядки
// і метод insertAdjacentHTML().

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ul = document.querySelector(".gallery");

const newArr = images.map((atributes) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.setAttribute("url", atributes.url);
  img.setAttribute("alt", atributes.alt);
  li.insertAdjacentElement("beforeend", img);
  return li;
});
ul.classList.add("newListForUl");
ul.append(...newArr);
