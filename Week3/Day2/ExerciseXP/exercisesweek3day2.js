// ###Exercise 1

// const displayNumbersDivisible = () => {

//     let totalDivisibleBy23 = 0;

//     for (let i = 0; i <= 500; i++) {

//         if (i % 23 === 0) {
//             console.log(i);
//             totalDivisibleBy23 += i;
//         }
//     }

//     console.log(totalDivisibleBy23);
// };

// displayNumbersDivisible();



// ###Exercise 2

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 


// const shoppingList = ["banana", "orange", "apple"];

// const myBill = () => {
//     let total = 0;

//     for (let i = 0; i < shoppingList.length; i++) {
//         const item = shoppingList[i];

//         if (stock[item] > 0) {
//             total += prices[item];
//         }
//     }

//     return total;
// };

// console.log(myBill());

// const changeEnough = (itemPrice, amountOfChange) => {
//     const totalChange =
//         amountOfChange[0] * 0.25 +
//         amountOfChange[1] * 0.10 +
//         amountOfChange[2] * 0.05 +
//         amountOfChange[3] * 0.01;

//     if (totalChange >= itemPrice) {
//         return true;
//     } else {
//         return false;
//     }
// };

// console.log(changeEnough(4.25, [25, 20, 5, 0]));

// const hotelNightCost = 140; 
// const hotelCost = () => { 
//   let userInput = prompt("How many nights are you planning to stay?"); 
//   while (userInput === null || userInput.trim() === "" || isNaN(userInput)) { 
//     alert("Enter a number please"); 
//     userInput = prompt("How many nights are you planning to stay?"); 
//   } 
//   return hotelNightCost * Number(userInput); 
// }; 

// const planeRideCost = () => { 
//   let userInput = prompt("What is your destination?"); 
//   while (userInput === null || userInput.trim() === "") { 
//     alert("Enter a destination please"); 
//     userInput = prompt("What is your destination?"); 
//   } 
//   if (userInput === "Paris") { 
//     return 220; 
//   } else if (userInput === "London") { 
//     return 183; 
//   } else { 
//     return 300; 
//   } 
// }; 

// const dailyCarCost = 40; 
// const rentalCarCost = () => { 
//   let userInput = prompt("How many days do you want the car for?"); 
//   while (userInput === null || userInput.trim() === "" || isNaN(userInput)) { 
//     alert("Enter a number please"); 
//     userInput = prompt("How many days do you want the car for?"); 
//   } 
//   const days = Number(userInput); 
//   const total = dailyCarCost * days; 
//   if (days > 10) { 
//     return total * 0.95; 
//   } 
//   return total; 
// }; 

// const totalVacationCost = () => { 
//   const hotel = hotelCost(); 
//   const plane = planeRideCost(); 
//   const car = rentalCarCost(); 
//   return hotel + plane + car; 
// }; 

// console.log("Total vacation cost: $" + totalVacationCost());



// const myDiv = document.querySelector("#container");
// console.log(myDiv);

// const lists = document.querySelectorAll(".list");

// const pete = lists[0].children[1];
// pete.textContent = "Richard";

// lists[1].children[1].remove();



### exercise 6 
const navbar = document.querySelector("#navBar");

navbar.setAttribute("id", "socialNetworkNavigation");

const list = navbar.querySelector("ul");

const newTag = document.createElement("li");
const logoutText = document.createTextNode("Logout");

newTag.appendChild(logoutText);
list.appendChild(newTag);
const firstItem = list.firstElementChild; 
const lastitem = list.lastElementChild; 
console.log(firstItem.textContent);
console.log(lastitem.textContent);