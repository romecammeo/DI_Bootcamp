// function calculateSum (a: number, b: number): number { 
//     return a + b; 
// } 

// console.log(calculateSum(5, 10)); 
// console.log(calculateSum("100", 3)); 
// console.log(calculateSum(undefined, 1)); 

// const val1: string = "Hello";
// const val2: number = 11.2;
// const val3: boolean = true; 

// let val4: string;
// val4 = val1; 

// let greeting: string = "Hello"; 
// function subtract (a: number, b: number): number { 
//     return a - b; 
// } 

// greeting = 10; 


// let n: number = 0b100;
// console.log(n)



// let n: number = 0x10;
// console.log(n)

// let a = 0;
// let b = 10;
// if (a > b || !(b < 20)) {
//     console.log("success");
// } else {
//     console.log("oh no")
// }


// let myObject: {
//     name: string,
//     age: number,
//     isStudent: boolean
// } 

// myObject.weight = 100;

// let myObject: {
//     name: string,
//     age: number,
//     isStudent: boolean
// } = {
//     name: "John",
//     age: 25
//     isStudent: true
// }


// let myObject: {};
// myObject.weight = 60;


// let myArray: number[]
// myArray.push(3);
// myArray.push("Hello");

// console.log(typeof myArray[0])

// let myArray: (number | string)[] = []
// myArray.push(3);
// myArray.push("Hello");
// console.log(typeof myArray[1])

// let myArray: (number & string)[] = []
// myArray.push(3);
// myArray.push("Hello");
// console.log(typeof myArray[1])

// let myArray: any[] = []
// myArray.push(3);
// myArray.push("Hello");
// console.log(typeof myArray[1])

// let myTuple: [string, number, boolean] = ["John",10, true];
// myTuple[2] = 10;

// let myTuple: [string, number] = ["John",10];


// let point: [number, number, number];
// point = [3, 4, 12];

// function distanceFromOrigin([x,y,z]: [number, number, number]): number {
//     return Math.sqrt(x**2 + y**2 + z**2);
// }

// console.log(distanceFromOrigin(point)); 

// let b: ("Yes" | "No" | "Maybe");
// b = "Yes";
// b = "Rome";


// let c: ("Yes" | "No" | "Maybe");

// let d: ("Yes" | "No" | "Maybe");

// type MyPerfectType = ("Yes" | "No" | "Maybe" | "no chance");

// let c: MyPerfectType

// let d: MyPerfectType

// type MyOtherType = number | string | true;


// function addNums(a : number, b: number): number {
//     return a + b
// }
// console.log(addNums(1, 1));
// console.log(addNums("2",1));




// function addNums(a : number, b: number): void {
//     console.log(a, b);
// }
// console.log(addNums(1, 1));
// console.log(addNums("2",1));


// let add: (a: number, b: number) => number; 

// add = function (a: string , b:string): number {
//     console.log(a, b)
// }

// add = function (a, b) {
//     console.log(a, b)
// }



// function addNums(a : number, b: number, c?: number): void {
//     console.log(a, b);
//     if (c) console.log(c);
// }

// addNums(1, 2 , 3);



// function addNums(a : number, b: number = 10, c?: number): void {
//     console.log(a, b);
//     if (c) console.log(c);
// }
// addNums(1);
// addNums(1, 2 , 3);


// function addNums(...nums: number[]): void {
//     console.log(nums.reduce((a, b) => a + b, 0)); 
// }

// addNums(1);
// addNums(1, 2 , 3);




// function addNums(...nums: string[]): void {
//     console.log(nums.reduce((a, b) => a + b, "")); 
// }


// addNums("abc","def", "g","hi");

// function addNums(...nums: (string | number)[]): void { //failure mode 
//     console.log(nums.reduce((a, b) => a + b, "")); 
// }


// addNums("abc","def", "g","hi");




// function addNums(...nums: string[]): void ;
// function addNuns(...nums: number[]): void ;
// function addNums(...nums: any[]): void ;
// function addNums(...nums: any): void ; {
//  console.log(nums.reduce((a, b) => a + b, "")); 
// }   

// addNums(1, "a", "2");
// addNums (true, false);


// class Counter {
//   private current: number = 0;

//   count(): number;   //1st option. input: nothing, output: a number
//   count(target: number): number[]; //2nd option. input: a number. output: an array of numbers
//   count(target?: number): number | number[] { ///input : nothing or a number , output: a number or an array of numbers
//     if (typeof target !== "undefined") {
//       let values: number[] = [];
//       for (let i = this.current; i <= target; i++) {
//         values.push(i);
//       }
//       this.current = target;
//       return values;
//     }
//     return ++this.current; ///if you do this.current++ it increments after the return
//   }
// }

// const myCounter = new Counter();
// console.log(myCounter.count[])

// console.log(myCounter.count[5])

// let a = 3;
// console.log(++a);
// console.log(a++);

// a = a + 1;
// a = 1+ a;