### rough draft 

// const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
// const listContainer = document.getElementById('listPlanets');


// const newdiv = document.createElement("list");
// for (let planet of planets) {
//   newdiv.append(planets);;
// }

// newdiv.classList.add('new-class');

// planets.style.color = "";
// planets.style.backgroundColor = "black";
// planets.style.fontSize = "24px";

const planets = [
    "Mercury", "Venus", "Earth", "Mars", 
    "Jupiter", "Saturn", "Uranus", "Neptune"
];

const planetColors = {
    "Mercury": "gray",
    "Venus": "gold",
    "Earth": "royalblue",
    "Mars": "crimson",
    "Jupiter": "peru",
    "Saturn": "khaki",
    "Uranus": "lightblue",
    "Neptune": "darkblue"
};

const listContainer = document.querySelector(".listPlanets");

for (let planet of planets) {
    const newDiv = document.createElement("div");
    newDiv.textContent = planet;
    newDiv.classList.add("planet");
    
    // This dynamically changes the background color for each planet!
    newDiv.style.backgroundColor = planetColors[planet]; 
    
    listContainer.appendChild(newDiv);
}
