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
 let obj = {[item]:Math.floor(Math.random()*100)}
 cart.push(obj)
 console.log(item + " has been added to your cart.")
 return cart
}

function viewCart() {
  // write your code here

  if (cart.length == 0){
    console.log("Your shopping cart is empty.")
  } else{



    let s = "In your cart, you have "
  for (let i=0; i<cart.length;i++){
    let item = cart[i]

    if (cart.length == 1){
      s += Object.keys(item)[0] + " at $" + item[Object.keys(item)[0]] +"."
    } else if (i== cart.length - 1){
      s += "and" + Object.keys(item)[0] + " at $" + item[Object.keys(item)[0]]  +"."
    } else {
        s += Object.keys(item)[0] + " at $" + item[Object.keys(item)[0]] +", "
    }

  }
console.log(s)
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
