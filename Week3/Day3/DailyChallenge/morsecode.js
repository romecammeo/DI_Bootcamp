

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

function toJs() {
  const morseJs = JSON.parse(morse);

  return new Promise((resolve, reject) => {
    if (Object.keys(morseJs).length !== 0) {
      resolve(morseJs);
    } else {
      reject("Error. Object is empty");
    }
  });
}


async function toMorse(morseJSValue) {
  let sentence = prompt("Type a sentence : ");

  const morseChars = Object.keys(morseJSValue);

  return new Promise((resolve, reject) => {
    let morseSentence = "";

    for (let char of sentence) {
      if (!morseChars .includes(char)) {
            return reject("Character is not in our morse code object");
      }
      const morseValue = morseJSValue[char];
      morseSentence += morseValue
    }

    resolve(morseSentence);
  });
}
toJs()
  .then((morseJSValue) => {
    return toMorse(morseJSValue);
  })
  .then((morseSentence) => {
    console.log(morseSentence);
  })
  .catch((err) => {
    console.log(err);
  });


  