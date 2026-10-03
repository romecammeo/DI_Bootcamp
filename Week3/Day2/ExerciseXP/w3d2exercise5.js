const div = document.querySelector("#container");
console.log(div);

const firstUL = document.querySelector("ul");
const secondLi = firstUL.children[1];
secondLi.textContent = "Richard";

const allUls = document.querySelectorAll("ul");

const secondUL = allUls[1];
const sarah = secondUL.children[1];
sarah.remove();

for (const ul of allUls) {
  ul.children[0].textContent = "Rome";
}

for (const ul of allUls) {
  ul.classList.add("student_list");
}

firstUL.classList.add("university", "attendance");

div.style.backgroundColor = "lightblue";
div.style.padding = "20px";

const dan = secondUL.children[1];
dan.style.display = "none";

secondLi.style.border = "2px solid red";

document.body.style.fontSize = "20px";
