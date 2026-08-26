const grid = document.querySelector("#grid");
console.log(grid);

for (let i = 0; i < 324; i++) {
const square = document.createElement("div");
square.classList.add("square");
grid.append(square);
}

// let selectedColor =""
// const handleColorClick = (event) => {
//    selectedColor = event.target.style.backgroundColor;
//    colorBox.addEventListener("click", handleColorClick);
// }



// const leftpanel = document.querySelector("leftpanel");

// const colors = ["red","blue","green","yellow"]

// for (let color in colors) {
//     const colorbox = document.createElement("div");
//     colorbox.classList.add("colorbox");
//     colorbox.style.backgroundcolor = color;
//     leftpael.append(colorbox);

// }
