const people = ["Greg", "Mary", "Devon", "James"];
people[3] = "Jason";
people.push ("Rome");
console.log(people.indexOf[1]);
people[4] = "Yourname";
const copy = (people.slice(1, 4));

let last = people[people.length - 1];


for (let i = 0; i < people.length; i++) {

    if (people[i] === "Devon") {
        break;
    }

    console.log(people[i]);
}



const colors = ["Yellow", "Red", "Blue", "Green", "Pink"];

for (let i = 0; i < colors.length; i++) {
    console.log(`My favorite color is ${colors[i]}`);
}


let userInput = Number(prompt("Please enter a number:"));

while (userInput < 10) {
    userInput = Number(prompt("Please enter a new number:"));
}


const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
};


// 1. Console.log the number of floors
console.log(building.numberOfFloors);


// 2. Console.log apartments on floors 1 and 3
console.log(
    building.numberOfAptByFloor.firstFloor +
    building.numberOfAptByFloor.thirdFloor
);


// 3. Console.log second tenant and number of rooms
console.log(
    building.nameOfTenants[1],
    building.numberOfRoomsAndRent.dan[0]
);


// 4. Compare rents and update Dan's rent
if (
    building.numberOfRoomsAndRent.sarah[1] +
    building.numberOfRoomsAndRent.david[1]
    >
    building.numberOfRoomsAndRent.dan[1]
) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}



const family = {
    members: 4,
    kingOfTheCastle: "Rome"
};

for (let key in family) {
    console.log(key);
}

for (let key in family) {
    console.log(family[key]);
}


const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}

for (let key in details) {
    console.log(details[key]);           

let sentence = "";

for (let key in details) {
    sentence += key + " " + details[key] + " ";
}

console.log(sentence);




const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let letters = "";

for (let i = 0; i < names.length; i++) {
    letters += names[i][0];
}

console.log(letters.split("").sort().join(""));