// type Person = {
//     name: string;
//     age: number;
// };

// type Address = {
//     street: string;
//     city: string;
// };

// type PersonWithAddress =
//     Person & Address;

//     const person1: PersonWithAddress = {
//     name: "Rome",
//     age: 25,
//     street: "Main Street",
//     city: "Jerusalem"
// };


// function describeValue( value: number | string): string {
//        if (typeof value === "number") {
//         return "This is a number";
//     }

//     return "This is a string";
// }



// let someValue: any = "hello";

// let stringValue = someValue as string; ///“Trust me, treat this as a string.”

// console.log(stringValue.toUpperCase()); 




function getFirstElement(
    arrayVariable: (number | string)[]
): string {
    return arrayVariable[0] as string;
}

console.log(getFirstElement(["2", "Rome"]));
console.log(getFirstElement(["Rome", "1"]));