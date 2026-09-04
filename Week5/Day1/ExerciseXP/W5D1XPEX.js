// const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// const url =
//     `https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=${apiKey}`; 

// async function getGifs() {
//     try {
//         const x =  await fetch(url);

//         if (x.ok ==! true) {
//             throw new Error ("error");
//         }

//         const data = await x.json();

//         console.log(data);

//     } catch (error) {
//         console.log(error);
//     }

//     }

// getGifs();






// const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// const url =
//        `https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&api_key=${apiKey}`;

// async function get10Gifts() {
//     try {
//         const x =  await fetch(url);

//         if (x.ok ==! true) {
//             throw new Error ("error");
//         }

//         const data = await x.json();

//         console.log(data);

//     } catch (error) {
//         console.log(error);
//     }

//     }

// get10Gifts();


// async function randomfunction() {
//     try {
//         const response = await fetch(
//             "https://www.swapi.tech/api/starships/9/"
//         );

//         if (!response.ok) {
//             throw new Error("Request failed");
//         }

//         const data = await response.json();

//         console.log(data.result);

//     } catch (error) {
//         console.log(error);
//     }
// }

// randomfunction();




// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();

// ///the output would be calling AND after 2 seconds resolved 