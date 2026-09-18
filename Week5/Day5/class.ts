// let a: number | string = 5;
// console.log(a.ToUpperCase())


// let a: number | string = 5;
// if (typeof a ==="string") {
//  console.log(a.ToUpperCase());
// } else {
//     console.log(a)
// }



// let a: number | string = 5;
// function myFunction(): never {
//     throw new Error("")
// }

// let b: "Hello" | "Goodbye" | Number = "Goodbye"
// let c: "Hello" & "Goodbye"
// let c: String[] = ["Hello", "Goodbye"] //rogario's guess 



// type MyUser = {
//     name: string,
//     lastname: string
// }

// type Identifiable = {
//     id: number
// }

// type UserWithId = MyUser & Identifiable;

// const myUser: UserWithId = {
//     name: "Joe",
//     lastname: "Doe",
//     id: 10
// }





// type OnlineClass = {
//     url: string;
// }

// type OnlineClassRoom = {
//     room: number;
// }

// function isOnline(lesson: OnlineClass | OnlineClassRoom): lesson is OnlineClass {
//     return "url" in lesson;
// }

// console.log(isOnline({url: "12.com"}))
// console.log(isOnline({room: 5}))



// type MyType = number | string;
// type myComplexType = {
//     name: string,
//     lastname: string
// } | {
//     id: number,
//     title: string.
//     description: string
// }

// function showTheContent(item: myComplexType): void {
//     console.log(Object.entries(item))
// }


// let a: any;
// a = [];
// a = 5;
// a = "Hello";


// let a: unknown;

// let b = a as string;
// console.log(typeof b); 

// let a: unknown = theirFunction() 

// let b = theirFunction() as string;




// function repeatString(i: string): string[] {
//     return (i, i, i);
// }

// function repeatNumber(i: Number): Number[] {
//     return (i, i, i);
// }

// function repeat<T>(i:T): T[] {
//     return [i, i, i];
// }

// console.log(repeat("Hello"))
// console.log(repeat(5))
// console.log(repeat(true))

// ///write a generic function identity that takes an argument of any type and returns that argument 

// function identity<T>(i: T): T {
//     return i

// }


// function identity<Y>(i: Y): Y {
//     return i

// }


// function makePair<A, B>(first: A: second: B): [A,B] {
//     return [first, second]

// }

// console.log(makePair({"Rome","Cammeo"}));


// function showName<T extends {name: string}>(obj: T): T {
//     console.log(obj.name);
//     return obj
// }

// const person1 = {
//     name: "Joe",
//     lastname:"Doe"
// }

// const person2 = {
//     name: "Mary"
//     age: 20, 
//     hobby: "Knitting"
// }

// showName(person1)


///Create a function that takes a object with at least 2 keys, name and age, and display "Joe is 25".

///draft

// function showName<T extends {name: string, age: Number}>(obj: T): T {
//     console.log(obj.name + obj.age);
//     return obj;
// }

// const person1 = {
//     name: "Joe",
//     age: 23,
// }

// const person2 = {
//     name: "Rome"
//     age: 23, 
// }

// showName(person1)
// showName(person2)



///

// type myObjectType = {
//     name: string,
//     age: number
// }

// function showInfo<T extends myObjectType>(obj: T): void {
//     console.log(`I'm ${obj.name} and I'm ${obj.age} years old.`)
// }

// const person1 = {
//     name: "Rome",
//     age: 23,
// }

// const person2 = {
//     name: "Mary",
//     age: 20,
//     hobby: "knitting"
// }

// showInfo(person1);
// showInfo(person2);




// let a: any = "Goodbye";
// let b: string = <string>a;
// let c: string = a as string;

// function myFunction(i: number | string): void {
//     if (typeof i === "number"){
//         console.log("that's a number")
//     } else if (typeof i ==="string") {
//         console.log("that's a string")
//     } else {
//         console.log("I don't know you")
//     }
// }

// myFunction(5);
// nyfunction("Hello");


function returnValue<T extends object , K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]

}

console.log(returnValue({
    name: "Joe",
     age: 25
}))
