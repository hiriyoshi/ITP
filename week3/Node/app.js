console.log("Hello World, I'm Chrone. I am free from the isolated world of AI.");
const products = require('./product');
const cart = require('./cart');
const calculateTotal = require('./order');

//Add product to Cart

cart.addToCart(products[0]);
cart.addToCart(products[1]);
cart.addToCart(products[2]);

//Display Cart Items
console.log(`Cart Items:`, cart.getCartItems());

// Remove Cart Item
cart.removeFromCart(products[1]);

// Display the updated Cart Item
console.log(`Cart Items:`, cart.getCartItems());

const totalAmount = calculateTotal(cart.getCartItems());
console.log(`Total order amount:`,totalAmount);