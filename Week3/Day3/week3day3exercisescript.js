const h1 = document.querySelector("h1");
console.log(h1);

const paragraphs = document.querySelectorAll("article p");
const lastParagraph = paragraphs[paragraphs.length - 1];
lastParagraph.remove();

const h2 = document.querySelector("h2");

h2.addEventListener("click", () => {
  h2.style.backgroundColor = "red";
});

const h3 = document.querySelector("h3");

h3.addEventListener("click", () => {
  h3.style.display = "none";
});

const button = document.querySelector("button");
const remainingParagraphs = document.querySelectorAll("article p");

const bold = () => {
  for (const paragraph of remainingParagraphs) {
    paragraph.style.fontWeight = "bold";
  }
};

button.addEventListener("click", bold);

h1.addEventListener("mouseover", () => {
  const randomSize = Math.floor(Math.random() * 101);
  h1.style.fontSize = `${randomSize}px`;
});

const secondParagraph = remainingParagraphs[1];

secondParagraph.addEventListener("mouseover", () => {
  secondParagraph.style.opacity = "0";
  secondParagraph.style.transition = "opacity 1s";
});




///exercise 2
const form = document.querySelector("form");
console.log(form);
const firstNameInput = document.querySelector("#fname");
const lastNameInput = document.querySelector("#lname");

console.log(firstNameInput);
console.log(lastNameInput);


const firstname = document.querySelector('[name="firstname"]');
const lastname = document.querySelector('[name="lastname"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
const firstName = firstNameInput.value;
const lastName = lastNameInput.value;
 if (firstName.trim() === "" || lastName.trim() === "" ) {
    alert("names are empty")
    return; 
 }

 const firstNameLi = document.createElement("li");
const lastNameLi = document.createElement("li");

firstNameLi.textContent = firstName;
lastNameLi.textContent = lastName;

const usersAnswer = document.querySelector(".usersAnswer");

usersAnswer.appendChild(firstNameLi);
usersAnswer.appendChild(lastNameLi);

});



//exercise 3

let allBoldItems ;

const strongitems = document.querySelectorAll("strong")


function getBoldItems() {
  allBoldItems = document.querySelectorAll("strong");
}

function highlight() {
  for (const item of allBoldItems) {
    item.style.color = "blue";
  }
}

function returnItemsToDefault() {
  for (const item of allBoldItems) {
    item.style.color = "black";
  }
}


function highlight() {
  for (const item of allBoldItems) {
    item.style.color = "blue";
  }
}

function returnItemsToDefault() {
  for (const item of allBoldItems) {
    item.style.color = "black";
  }
}

const paragraph = document.querySelector("p");
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnItemsToDefault);


///exercise 4
const myform = document.querySelector("#MyForm");
const radiusInput = document.querySelector("#radius");
const volumeInput = document.querySelector("#volume");


myform.addEventListener("submit", (event) => {
  event.preventDefault();
  const radius = Number(radiusInput.value);
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  volumeInput.textContent = volume
});

