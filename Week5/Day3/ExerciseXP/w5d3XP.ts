// ///exercise 1

// // console.log("Hello, World!");

// ///exercise 2
// let age: number = 25;
// let name: string = "Rome";

// console.log(age);
// console.log(name);



// ///exercise 3

// let id: string | number;

// id = 123;
// id = "ABC123";


// ///exercise 4

// function checkNumber(value: number): string {
//     if (value > 0) {
//         return "Positive"
// } else if (value < 0) {
//         return "negative";
//     } else {
//         return "zero";
//     }
// }


// function getDetails(name: string,  age: number): [string, number, string]  
// {
//     const greeting =
//         `Hello, ${name}! You are ${age} years old.`;

//     return [name, age, greeting];
// }

// console.log(getDetails("Rome", 23.5));



let person : { name: string; age: number };
person = { name: "Jane", age: 20 }; // valid
function createPerson(name: string,  age: number) :  { name: string; age: number }
 { return {name, age};
 
}

console.log(createPerson("Rome",25))
