var fruitArray = [];//end fruitArray

$(document).ready(function(){
    var apples = {
      marketPrice: 1.00,
      avgPrice: '',
      };// end apples
    var oranges= {
      marketPrice: 0.75,
      avgPrice: '',
    };//end oranges
    var bananas= {
      marketPrice: 0.50,
      avgPrice: '',
    };//end bananas
    var grapes= {
      marketPrice: 2.00,
      avgPrice: '',
    };// end grapes


    //add objects to fruitArray
    fruitArray.push(apples, oranges, bananas, grapes);

console.log(fruitArray);
changePrice();

});//end of document ready function

//take2 random number
// var minNumber = 0.50;
// var maxNumber = 9.99;
//
// randomPrice(minNumber,maxNumber);
// function randomPriceRange
//
// Math.floor(Math.random() * 6) + 1

//random price change function
var changePrice = function (){
  for (var i = 0; i < fruitArray.length; i++) {
    fruitArray[i].marketPrice += (Math.random()-0.5);
  }
};// end changePrice
