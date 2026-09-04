// function compareToTen(num) {
//     const randomPromise1234567890 = new Promise((resolve ,reject) => {
//         if (num <= 10) {
//             resolve("success");
//         } else {
//             reject("Too big bruh");
//         }
//     });
//     return randomPromise1234567890
// }


// compareToTen(9)
// .then(console.log("success"))
// .catch(console.log("number's too big bruh"))



 const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("success");
  } , 4000);
 });

console.log(promise3)
