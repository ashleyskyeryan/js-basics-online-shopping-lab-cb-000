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
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`);
  }
  else {
    var print = `In your cart, you have `
    for (var i = 0; i < cart.length; i++)
  }
   ${cart[0].name}`)
  }


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
