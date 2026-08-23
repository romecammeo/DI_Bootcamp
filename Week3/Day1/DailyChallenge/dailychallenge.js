### Challange 1

// test sentences
let sentence = "The movie is NOT that bad, I like it";
// let sentence = "The movie is bad that not, I like it";
// let sentence = "The movie";
// let sentence = "The movie is bad";

let sentenceLower = sentence.toLowerCase();
const start = "not";
const end = "bad";
// The movie is + good + , I like it
let wordNot = sentenceLower.indexOf(start);
let wordBad = sentenceLower.indexOf(end);

// if we don't have bad and not -> we print the sentence
// if we have both and not is before bad -> we create a new sentence
// else we print the sentence
// wordNot > -1 and wordNot < wordBad

if (wordNot > -1 && wordNot < wordBad) {
    console.log(sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + end.length));
} else {
    console.log(sentence);
}


###Challange 2

for (let i = "*"; i.length <= 6; i += "*") {
    console.log(i);
}