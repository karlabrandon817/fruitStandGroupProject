var fruitArray = [];//end fruitArray

$(document).ready(function(){
    var apples = {
      marketPrice: 1.00,
      avgPrice: '',
      quantity: '',
      };// end apples
    var oranges= {
      marketPrice: 0.75,
      avgPrice: '',
      quantity: '',
    };//end oranges
    var bananas= {
      marketPrice: 0.50,
      avgPrice: '',
      quantity: '',
    };//end bananas
    var grapes= {
      marketPrice: 2.00,
      avgPrice: '',
      quantity: '',
    };// end grapes


    //add objects to fruitArray
    fruitArray.push(apples, oranges, bananas, grapes);

    console.log(fruitArray);

    //show MarketPrice on DOM
    var showMarketPrice = function(){
      //loop thru fruitArray and show each price
      $('#applesMP').html(fruitArray[0].marketPrice);
      $('#orangesMP').html(fruitArray[1].marketPrice);
      $('#bananasMP').html(fruitArray[2].marketPrice);
      $('#grapesMP').html(fruitArray[3].marketPrice);
    };//end showMarketPrice

    //random price change function
    var changePrice = function (){
      for (var i = 0; i < fruitArray.length; i++) {
        fruitArray[i].marketPrice = (Number(fruitArray[i].marketPrice) + (Math.random()-0.5)).toLocaleString('en-US', { style:'currency', currency: 'USD'});
      setInterval(changePrice, 15000);
      }
      showMarketPrice();
    };// end changePrice


    changePrice();


});//end of document ready function
