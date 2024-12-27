// -- 1 -- //
const sublists = document.querySelectorAll(".sublist");
console.log(`У списку ${sublists.length} категорії`);
const titles = document.querySelectorAll(".title");
titles.forEach((title, index) =>
  console.log(`Категорія: ${title.textContent}
Кількість елементів: ${sublists[index].children.length}`)
);

// -- 2 -- //
const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];
const items = [];
ingredients.forEach((ingredient, index) => {
  items.push(document.createElement("li"));
  items[index].textContent = ingredient;
});
const list = document.querySelector("#ingredients");
list.append(...items);

// -- 3 -- //
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

document.querySelector("#gallery").insertAdjacentHTML(
  "afterbegin",
  images
    .map(
      ({ url, alt }) => `<li class="gallery-item">
              <img class="gallery-image" src="${url}" alt="${alt}">
          </li>`
    )
    .join("")
);

// -- 4 -- //
const counter = document.querySelector("#value");
let counterValue = 0;
document
  .querySelector('button[data-action="decrement"]')
  .addEventListener("click", (event) => {
    counterValue -= 1;
    counter.textContent = counterValue;
  });
document
  .querySelector('button[data-action="increment"]')
  .addEventListener("click", (event) => {
    counterValue += 1;
    counter.textContent = counterValue;
  });
