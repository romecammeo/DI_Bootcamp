// // What You will learn :
// // Functions
// // Array methods


// // Instructions
// // Create a function that:

// // takes in two strings as two parameters
// // and returns a boolean that indicates whether or not the first string is an anagram of the second string.
// // Some Help

// // What is an anagram?
// // An anagram is another word or phrase formed by rearranging letters of the first word or phrase.


// /* 

// Anagram Groups

// An anagram is a word or phrase formed by rearranging the letters of another word or phrase.

// For example, "secure" is an anagram of "rescue".

// Write a function called findAnagrams that:

// Accepts an array of words.

// Returns an array of arrays.

// Groups together words that are anagrams of one another.

// Example:

// const words = ['name', 'mean', 'man'];

// const result = findAnagrams(words);

// console.log(result);

// Expected output:

// [
//   ['name', 'mean'],
//   ['man']
// ]

// The order of the groups and the words within them does not matter.

// */

// const findAnagrams = (words) => {
//     const wordGroups = {};
//     for (const word of words) {
//         const wordKey = word.toLowerCase().split("").sort().join("");
//       q
//         wordGroups[wordKey].push(word);
//     }

//     return Object.values(wordGroups);
// }

// // const words = [];
// // const words = ['name', 'mean', 'man'];
// // const words = ['Name', 'Take', 'secure', 'mean', 'RESCUE'];
// const words = ['tea', 'eat', 'mace', 'ate', 'came', 'ear', 'hear', 'are'];
// const result = findAnagrams(words);
// console.log(result);

const myAnagram = (string1, string2) => {
    const normalized1 = string1
      .toLowerCase()
      .split("")
      .filter(char => char !== "")
      .sort()
      .join()

const normalized2 = string2
      .toLowerCase()
      .split("")
      .filter(char => char !== "")
      .sort()
      .join()

return normalized1 === normalized2

};


const results = myAnagram("secure","rescue")
console.log(results)




