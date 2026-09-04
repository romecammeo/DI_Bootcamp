// @channel 
// ## Good morning, everyone!

// First, thank you for your hard work on yesterday’s mini-projects!
// However, I noticed that some of you haven’t submitted all the mandatory exercises, especially the **Robo-Friends project**. Please submit them as soon as possible.

// If you have any questions, don’t hesitate to ask at any time!

// ## Warm-up exercise

// We’ll begin today with a warm-up exercise. Before you start, refresh your memory:

// - [`setTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout)
// - [`clearTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/clearTimeout)
// - [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval)
// - [`clearInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/clearInterval)

// ### Your task

// Complete the following code:

// ```javascript
// const loot = ["🗡️ Sword", "🛡️ Shield", "🧪 Potion", "💎 Diamond"];

// function getRandomItem() {
//   return loot[Math.floor(Math.random() * loot.length)];
// }

// function openLootBox(onOpen) {
//   // Start an animation that displays a random item every 300 ms.

//   // After 2 seconds:
//   // 1. Stop the animation.
//   // 2. Select the final prize.
//   // 3. Pass it to onOpen.
// }

// openLootBox((prize) => {
//   console.log(`You received: ${prize}`);
// });
// ```

// The output should look something like this:

// ```text
// Rolling: 🧪 Potion
// Rolling: 🗡️ Sword
// Rolling: 💎 Diamond
// Rolling: 🛡️ Shield
// You received: 💎 Diamond
// ```

// ⏱️ You’ll have **20 minutes** to complete the task.


///promise

let goodGrades = true;

let myPromise = new Promise((resolve, reject) => {
    if (goodGrades) {
        resolve("I will get a gift");
    } else {
        reject("I won't get the gift");
    }

})

console.log(myPromise)
//determunating factor