// Importing module
// import { check, add, bigExpenses } from './clean.js';

// import { check } from './clean';
// import { add } from './clean';
// import { bigExpenses } from './clean';
console.log('Importing module');
// import * as ShoppigCart2 from './shoppingCart.js';

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

import add, { cart } from './shoppingCart.js';
/*
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

// Top Level await
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);
// Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/

/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return { addToCart, cart, totalPrice, totalQuantity, orderStock };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
ShoppingCart2.orderStock('mosleu', 5);
ShoppingCart2.orderStock('avocado', 3);
*/

/////////////////////////////////////////////////
// CommonJS

// Export
// export.addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
// };

// Import
// const { addToCart } = require('./shoppingCart.js');
