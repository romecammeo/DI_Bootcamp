### Challenge 1


let sentence = "The movie is not that bad, I like it";
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");
let newText1 = ""; 

if (wordBad > wordNot) {
    newText1 = sentence.replace("not that bad", "good");
}

console.log(newText1);


### Challenge 2

