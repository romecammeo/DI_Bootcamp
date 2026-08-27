// const myobject = {
//     name: 'John',
//     lastname: 'Doe'

// };

// console.log(Object.keys(myobject));
// console.log(Object.values(myobject));

// console.log(Object.entries(myobject));



// const myArray = [
//  ['Student','Joe']
//  ['Teacher','Rose']

// ] 

// console.log(Object.fromEntries(myArray));


// ###Exercise 
// // Use the methods above to :
// // Count how many keys and values are in the object below
// // Display : "The x# key is : --- The x# value is : ---".

let myObj = {
    name : "John",
    lastName : "Doe",
    age : 25,
    friends : ["Mark", "Lucie", "Ana"]
}

// ###My draft -
// // const myObj2 = Object.entries(myObj);
// // total = 0;
// //  for (let i = 0; i < length; i++)
// //     total = total + 1

// // console.log("The key is Object.keys(myObj2)) + The  value is (Object.values(myObj2))");


// ### Instructor's
const Myobjkeys = Object.keys(myObj);
const Myobjvalues = Object.values(myObj)

console.log('We have ${Myobjkeys.length} keys and $ {Myobjvalues.length} values');

// ### Or
console.log(Myobjkeys.map((e , i) => 'The ' + (i + 1) + ' Key is ' + e));
console.log(Myobjvalues.map((e , i) => 'The ' + (i + 1) + ' Value is ' + e));