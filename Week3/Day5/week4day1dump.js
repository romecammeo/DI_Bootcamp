// // const myArray = ["Hello%, "Goodbye", "Hi", "Bye"];
// // const name = "john";
// // for (let i = 0; i < myArray.length; i++){
// //       console.log(myArray[i],name); 
// // }

// // myArray.forEach(item => {
// //     console.log(item);
// // })

// // const myCallback = item => console.log(item);
// // myArray.forEach(myCallback);

// // const numbers = [10, 11, 12, 15, 20];
// // // numbers.forEach(item;
// // //  if (item ===odd)
// // //     console.log(item)
// // // })

// // // const numbers =;

// // const numbers = [10, 11, 12, 15, 20];
// // numbers.forEach(item => {
// //   if (item % 2 == 0) {
// //     console.log(item);
// //   }
// // });


// // const numbers = [10, 11, 12, 15, 20];
// // const myExerciseFunction = item => {
// //     if (item % 2 === 0) {
// //         console.log(item);
// //     }
// // }
// // numbers.forEach(myExerciseFunction);





// // total = 0;

// // const numbers = [10, 11, 12, 15, 20];
// // for numbers.forEach(item => {
// //   if (item % 2 == 1) {
// //       total += item;
// // }
// //     { console.log(item);
// //   }
// // })


// // ### corrected draft:

// let total = 0; 
// const numbers = [10, 11, 12, 15, 20];

// numbers.forEach(item => { 
//     if (item % 2 === 1) { 
//         total += item; 
//     } 
//     console.log(item); 
// });

// console.log("Total of odd numbers:", total);

// ### Instructor draft 
// const numbers = [10, 11, 12, 15, 20];
// let result = 0;
// const mySumFunction = item => {
//     if (item % 2 === 1) {
//          result += item; 
//     }
// }

// numbers.forEach(mySumFunction);
// console.log(result);

// #### Ternary operator 
// result += item % 2 === 1 ? item : 0;

// const numbers = [10, 11, 12, 15, 20];
// let result = 0;
// const mySumFunction = item => result += item % 2 === 1 ? item : 0;
// numbers.forEach(mySumFunction);
// console.log(result);

// ### more methods

// const numbers = [10, 11, 12, 15, 20];
// const myCondition = (item) =>  item % 2 === 1? 
// console.log(numbers.some(myCondition));
// console.log(numbers.every(myCondition));

// const b = numbers.map(myCondition)
// console.log(b);


// ### Small exercise 


// const numbers = [10, 11, 12, 15, 20];
// const mymappingfunction = (item) => item % 2 === 0 ?  "Even" : "Odd";
// const c = numbers.map(mymappingfunction);
// console.log(c);


// ### Another method
// const numbers = [10, 11, 12, 15, 20];
// const myfilterfunction = (item) => item % 2 === 1 ?  "Odd" : "Even";
// const d = numbers.filter(myfilterfunction);
// console.log(d);


// ###Small exercise

// const numbers = [10, 11, 12, 15, 20];
// const myfilterfunction2 = (item) => item > 12;
// const e = numbers.filter(myfilterfunction2);
// console.log(e);


// ## Another exercicse 
// const numbers = [10, 11, 12, 15, 20];
// const myfilterfunction3 = (item) => item > 12 || item < 11;
// const e = numbers.filter(myfilterfunction3);
// console.log(e);


// ### Reduce method 
// const numbers = [10, 11, 12, 15, 20];
// const mySumFunction = (accumulator, item) => accumulator += item % 2 === 1 ? item : 0;
// console.log(numbers.reduce(mySumFunction, 0));

### Small exercicse

const numbers = [10, 11, 12, 15, 20];
const mySumFunction2 = (accumulator, item) => accumulator *= item % 2 === 1 ? item : 1; 
console.log(numbers.reduce(mySumFunction2, 1));
