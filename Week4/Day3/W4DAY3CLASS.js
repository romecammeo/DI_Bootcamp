

// First of all, keep up the great work! Day 2's homework looks good.

// We’ll begin today with a warm-up exercise. This is a popular type of problem that companies use during the live-coding stage of job interviews.

// I encourage everyone to give it a try, we’ve already learned everything you need to solve it successfully!

// ## Warm-up: Anagram Groups

// An **anagram** is a word or phrase formed by rearranging the letters of another word or phrase. For example, `"secure"` is an anagram of `"rescue"`.

// Write a function called `findAnagrams` that:

// - Accepts an array of words.
// - Returns an array of arrays.
// - Groups together words that are anagrams of one another.

// ### Example

// ```js
// const words = ['name', 'mean', 'man'];

// const result = findAnagrams(words);

// console.log(result);
// ```

// Expected output:

// ```js
// [
//   ['name', 'mean'],
//   ['man']
// ]
// ```

// The order of the groups and the words within them does not matter.

// ---

// ⏱️ You’ll have **20 minutes** to complete the task.

// At **9:50**, we’ll start reviewing your solutions together.  
// At **10:00**, we’ll move on to today’s topics.

// Good luck! 🚀


// const words = ['name', 'mean', 'man'];

// const findAnagrams = (words) => {
//     const wordGroups ={}
//     for (const word of words) {
//         const wordkey = word.toLowerCase().split("").sort().join("");
//     if (!wordGroups[wordkey]) wordGroups[wordkey] = [];
//     wordGroups[wordkey].push(words)
// }
// return Object.values(wordGroups);

// }

// const results = findAnagrams(words)
// console.log(results);



// const myFunction = (a, b) => {

//     try {
//         if (b === 0) throw new Error("Oh no! You want to divide by zero!");
//         return a / b
//     } catch (e) {
//         console.log("ERROR " + e.name);
//         console.log(e.message);
//     }
// }

// console.log(myFunction(4, 2));
// console.log(myFunction(4, 0));
        


///Exercise 
//a+b
//- if-it's• odd•→>-it's an-error!-we throw an error and print a funny• phrase



###My draft
const myoddFunction = (a, b) => { 
  try { 
    if ((a + b) % 2 === 1) {
      throw new Error("Oh no! It's an odd resultant number!"); 
    }
  } catch (e) { 
    console.log("ERROR: " + e.name); 
    console.log(e.message); 
  } 
  return a + b; 
};


console.log(myoddFunction(4, 2));
console.log(myoddFunction(4, 0));
        


/// Instructor solution

const myFunction = (a, b) => {

    const result = a + b;
    try {        
        if (result % 2 === 1) throw new Error("Oh no! That is not quite riiiiiight!!!");        
    } catch (e) {
        console.log("ERROR " + e.name);
        console.log(e.message);
    }
    return result
}

let str = "Happy Birthday";
const patt = /birthday/ i;
const results = str.match(patt);
console.log(results);

if (results){
    console.log('Yes');

} else{
    console.log('No');
}


for (const i in results) {
    console.log(result[i]);
}

    console.log(result['index']);




let str = "Happy Birthday";
const patt = /da./ i;  // /da../ i;    /da/ i;  /\d/i; /[0-9]/i;  /[a-z]/;  /[A-z]/; [A-Za-z]/;  [A-Za-z]/; /[p-z]/g; /[D|y]/; /[D|y]/ig; /[^hap]/i;
const results2 = str.match(patt);
console.log(results2);