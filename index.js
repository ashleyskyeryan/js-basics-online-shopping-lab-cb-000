var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here

 var newItems = { [item]: Math.floor(Math.random() * 100) };
 cart.push(newItems);
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  for (var cartItems = 0; cart.length > 0; cartItems ++1)
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
