const h1 = document.querySelector("h1")
console.log(h1)

const paragraphs = document.querySelectorAll("p");
const lastParagraph = paragraphs[paragraphs.length - 1];

lastParagraph.remove();
 last_paragraph.remove();
 console.log("last paragrah removed");


const h2 = document.querySelectorAll("h2")
  const h2color = (event) => {
   event.target.setAttribute("style","background-color:red");
  }

  for (let node of h2) {
    node.addEventListener("click",h2color)
  }
  

const h3 = document.querySelectorAll("h3")
  const h3hide = (event) => {
   event.target.setAttribute("style", "display: none;");
  }

  for (let node of h3) {
    node.addEventListener("click",h3hide)
  }
  

 const paragraphs = document.querySelectorAll("p");
 const button = document.querySelector("button");
   const bold = (event) => {
    for (let paragraph of paragraphs){
        paragraph.style.fontWeight = 'bold';
    }


button.addEventListener("click",bold)







const form = document.querySelector("form")
console.log(form)

const firstNameInput = document.querySelector("#fname");
const lastNameInput = document.querySelector("#lname");

console.log(firstNameInput);
console.log(lastNameInput);


const submit = document.querySelectorAll("form")
  const submitform = (event) => {
   if (firstName.trim() === "" || lastName.trim() === "") {
    alert("Names are empty");
} else {
    const row = firstNameInput.createElement("tr");
    const cell = lastNameInput.createElement("td")

  }