var cart = [];

  function setCart(newCart) {
    cart = newCart;
  }

 function getCart() {
   return cart;
 }

 function addToCart(item) {
   const price = Math.floor(Math.random() * 100);
   cart.push({ [item]: price});

   console.log(`${item} has been added to your cart.`)

   return cart;
 }

 function viewCart() {
   const l = cart.length

   if (!l) {
     return console.log("Your shopping cart is empty.")
   }

   const itemsAndPrices = []

   for (let i = 0; i < l; i++) {
     let itemAndPrice = cart[i]
     let item = Object.keys(itemAndPrice)[0]
     let price = itemAndPrice[item]

     itemsAndPrices.push(`${item} at \$${price}`)
   }

   console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
 }

 function removeFromCart(item) {
   let itemInCart = false

   for (let i = 0, l = cart.length; i < l; i++) {
     if (cart[i].hasOwnProperty(item)) {
       itemInCart = true
       cart = cart.slice(0, i).concat(cart.slice(i + 1))
     }
   }

   if (!itemInCart) {
     console.log("That item is not in your cart.")
   }

   return cart
 }

 function placeOrder(cardNumber) {
   if (!cardNumber) {
     return console.log("We don't have a credit card on file for you to place your order.")
   }

   console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

   cart = []
 }

  function total() {
    let t = 0


    // var cart= [];
    // function getCart(){
    //   return cart;
    // }
    //
    // function setCart(newCart) {
    //   cart = newCart;
    //
    //   return t
    // }
    // function addToCart(item){
    //   var price = Math.floor(Math.random()* 100) +1;
    //   var item_object = {};
    //   item_object[item]=price;
    //   cart.push(item_object);
    //   console.log(item + ' has been added to your cart.');
    //
    //   return cart
    // }
    // function viewCart(){
    // if (cart.length === 0){
    //   console.log("Your shopping cart is empty.");
    // }
    // else{
    //   var items = [];
    //   for(var i = 0; i < cart.length; i++){
    //     for(var item in cart[i]){
    //       items.push(item + " at $" + cart[i][item])
    //     }
    //   }
    //   console.log("In your cart, you have " + items.join(", ") + ".");
    // }
    //
    // }
    //
    //
    // function total() {
    //   let t = 0
    //
    //   for (var i = 0, l = cart.length; i < l; i++) {
    //     for (var item in cart[i]) {
    //       t += cart[i][item]
    //     }
    //   }
    //
    //   return t
    // }
    //
