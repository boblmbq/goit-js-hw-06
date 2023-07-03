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
ul.classList.add("newListForUl");

const concArr = images
  .map(
    (atributes) => `<li>
        <img src="${atributes.url}" alt="${atributes.alt}" width="200" />
      </li>`
  )
  .join("");

const arr = [concArr]

console.log(concArr);
ul.insertAdjacentHTML("beforeend", ...arr);
