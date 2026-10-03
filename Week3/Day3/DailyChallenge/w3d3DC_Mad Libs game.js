const MyForm = document.querySelector("#libform");
const MyNoun = document.querySelector("#noun");
const MyAdjective = document.querySelector("#adjective");
const MyPerson = document.querySelector("#person");
const MyVerb = document.querySelector("#verb");
const MyPlace = document.querySelector("#place");
const MyStory = document.querySelector("#story");

MyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const noun = MyNoun.value;
const adjective = MyAdjective.value;
const person = MyPerson.value;
const verb = MyVerb.value;
const place = MyPlace.value;

if (
  noun.trim() === "" ||
  adjective.trim() === "" ||
  person.trim() === "" ||
  verb.trim() === "" ||
  place.trim() === ""
) {
  alert("Please fill in all fields");
  return;
}  

const story = `${person} decided to ${verb} with a ${adjective} ${noun} in ${place}.`;
MyStory.textContent = story;
}); 

