
// // Exercise 1
// console.log("Exercise 1\n" + '—'.repeat(10));
// let x = 0;
// console.log(x++);
// console.log(++x);


// // Exercise 2
// console.log("\nExercise 2\n" + '—'.repeat(10));
// const arr = [1, 2, 3];
// arr[10] = 99;
// console.log(arr.length);


// // Exercise 3
// console.log("\nExercise 3\n" + '—'.repeat(10));
// const comp = 5 === 5 && 5 == '5';
// console.log(comp * 2);


// Exercise 4
console.log("\nExercise 4\n" + '—'.repeat(10));
const fns = [];
for (let i = 0; i < 3; i++) { ///instructor's then tried to use let instead of var
    fns.push(() => i);
}
console.log(fns.map(f => f()));


// // Exercise 5
// console.log("\nExercise 5\n" + '—'.repeat(10));
// const a = { n: 1 };
// const b = a;
// b.n = 2;
// const c = { ...a };
// c.n = 3;
// console.log(a.n, b.n, c.n);


// // Exercise 6
// console.log("\nExercise 6\n" + '—'.repeat(10));
// console.log(greet());
// console.log(typeof sayBye);
// function greet() {
//     return "hi";
// }
// var sayBye = () => "bye";


// ///hosisting


// // Exercise 7
// console.log("\nExercise 7\n" + '—'.repeat(10));
// const myFunFunc = (async () => {
//     console.log(await new Promise((resolve, _) => {
//         setTimeout(() => {
//             resolve(true)
//         }, 10);
//     }));
// })()
// console.log(myFunFunc);

// ///() => {}
// ///(() => {})()
// ///function myFun() {}
// ///myFun()
// ///const a = () => {};
// ///a()
// ///() => {}
// ///(() => {})()

//     ///self invoking functions 

// // Exercise 8
// console.log("\nExercise 8\n" + '—'.repeat(10));
// const time1 = setTimeout(() => {
//     console.log('A');
// }, 100);
// const time2 = setInterval(() => {
//     console.log('B');
// }, 100);
// const time3 = new Promise((resolve, _) => {
//     setTimeout(() => {
//         resolve(true)
//     }, 250)
// });
// time3.then(() => {
//     console.log('C');
//     clearInterval(time2);
// })



// var a = 5;

// for (let i = 0; i < 5; i++) {
//     let a = 10 * 1;
//     console.log(a);
// }

// console.log(a);
// ///errors? if no, what's in the console

// ///the instructor's output shows 0 10 20 30 40 5 which I didn't understand at first


// for (i = 0; i < 10; i++) {
//     console.log(i)
// }


// while (true) {
//     console.log("oh no")
// }

// let x = 0


// while (true) {
//     console.log("oh no");
//     x++;
//     if {x > 10} break;
// }

// do {
//     x++;
//     console.log("Remember do-while too");

// } while( x < 17);


// console.log(5 === 5);
// console.log(5 === '5');
// console.log(5 == '5');

// console.log(false > -10);

// console.log('1' + 1);
// console.log(+'1' + 1);
// console.log(1 + "");
// console.log(5 || 5);
// console.log(5 || 10);
// console.log(undefined || 5);
// console.log(null|| 5); ///very practical appearantly 

// let x = 10;
// let y = x || 6;
// console.log(y)


// let x = 1;
// let y = x || 6;
// console.log(y)


// console.log(4 && 5);

// console.log(0 && 5);

// console.log(10 && 5);

// console.log("b" && "c");
// console.log("b" || "c");


// console.log(10 > 5 ? "Hello" : "Goodbye");


// console.log(!5);
// console.log(!0);
// console.log(!-10);

// let a = 10;
// let b = 50; 

// b += a ; /// b = b + a

// b -= 1; ///b equals b -1 

// b *= 2;

// ///b = b * 2

// b /= 2; 

// console.log(typeof b);

// b /= 3; 

// console.log(b);

// ///39.3333333


// b ||= a;  /// b = b || a; 

// b &&= a; 
// //// b = b && a;


// /// 010 

// /// 00000000

// /// 00000001

// /// 00000010

// /// 00000011

// /// 00000100

// /// 00000101


// const myObj = {
//     name: "John",
//     age: 18
// }

// myObj.lastname = "Doe";

// ///Typescript wouldn't like it 


// myObj.lastname ?? = "Doe";
// myObj.name ?? = "Doe";

// console.log(myObj);