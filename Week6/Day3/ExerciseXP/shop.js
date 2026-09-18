const products = require("./products.js");

function findProduct(productName) {
  return products.find(product => product.name === productName);
}

console.log(findProduct("Book"));