function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        const allStrings = words.every(
            word => typeof word === "string"
        );

        if (allStrings) {
            const upperwords = words.map(
                word => word.toUpperCase()
            );

            resolve(upperwords);
        } else {
            reject("sorry bruh");
        }
    });
}


function sortWords(words) {
    return new Promise((resolve, reject) => {
        if (words.length > 4) {
            resolve(words.sort());
        } else {
            reject("no bueno");
         }
    });
}

const words = ["apple", "banana", "orange", "pear", "kiwi"];

makeAllCaps(words)
    .then(result => {
        return sortWords(result);
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });