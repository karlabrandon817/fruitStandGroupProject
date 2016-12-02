var fruitArray = [];//end fruitArray
var appleArray = [];//end appleArray
var orangeArray = [];//end orangeArray
var bananaArray = [];//end bananaArray
var grapeArray = [];//end grapeArray

$(document).ready(function(){
    var apples = {
      marketPrice: 1.00,
      avgPrice: 0,
      quantity: 0,
      };// end apples
    var oranges= {
      marketPrice: 0.75,
      avgPrice: 0,
      quantity: 0,
    };//end oranges
    var bananas= {
      marketPrice: 0.50,
      avgPrice: 0,
      quantity: 0,
    };//end bananas
    var grapes= {
      marketPrice: 2.00,
      avgPrice: 0,
      quantity: 0,
    };// end grapes

    //add objects to fruitArray
    fruitArray.push(apples, oranges, bananas, grapes);

    console.log(fruitArray);

    //show MarketPrice on DOM
    var showMarketPrice = function(){
      //loop thru fruitArray and show each price
      $('#applesMP').html(fruitArray[0].marketPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
      $('#orangesMP').html(fruitArray[1].marketPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
      $('#bananasMP').html(fruitArray[2].marketPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
      $('#grapesMP').html(fruitArray[3].marketPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
    };//end showMarketPrice
var limitPrice = function(){
    if(fruitArray[i].marketPrice > 9.99){
      fruitArray[i].marketPrice == 9.99;
    }else{
      return fruitArray[i].marketPrice;
    }
};





//random price change function
    function getRandomNumber(min, max){
      return Math.random() * (0.50 - (-0.50)) + (-0.50);
    }//end random price change function
    console.log(getRandomNumber());

//add random price to marketprice
    var changePrice = function (){
      for (var i = 0; i < fruitArray.length; i++) {
      console.log( fruitArray[i].marketPrice = (Number(fruitArray[i].marketPrice))+getRandomNumber());

    if(fruitArray[i].martketPlace <= 0.50){
    return fruitArray[i].martketPlace === 0.50;
    }
    if(fruitArray[i].martketPlace >= 9.99 ){
      return fruitArray[i].martketPlace === 9.99;
    }
  }

      showMarketPrice();
    };// end changePrice

    setInterval(changePrice, 1000);
    changePrice();

var userCash = 100;
//display userCash to DOM
$("#myCash").html(userCash);

    $('#applesB').on('click', function(){
      console.log(fruitArray);
      fruitArray[0].quantity += 1;
      $('#applesQ').html(fruitArray[0].quantity);
      console.log(userCash -= fruitArray[0].marketPrice);
      $("#myCash").html(userCash);
      appleArray.push(fruitArray[0].marketPrice);
      var count = 0;
      for (var i = 0; i <appleArray.length; i++){
        count = count + appleArray[i];
      }
      console.log(count);
      $('#applesAP').html((count/appleArray.length).toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
    });

    $('#orangesB').on('click', function(){
      fruitArray[1].quantity += 1;
      $('#orangesQ').html(fruitArray[1].quantity);
      console.log(userCash -= fruitArray[1].marketPrice);
      $("#myCash").html(userCash);
      orangeArray.push(fruitArray[1].marketPrice);
      var count = 0;
      for (var i = 0; i <orangeArray.length; i++){
        count = count + orangeArray[i];
      }
      console.log(count);
      $('#orangesAP').html((count/orangeArray.length).toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
    });

    $('#bananasB').on('click', function(){
      fruitArray[2].quantity += 1;
      $('#bananasQ').html(fruitArray[2].quantity);
      console.log(userCash -= fruitArray[2].marketPrice);
      $("#myCash").html(userCash);
      bananaArray.push(fruitArray[2].marketPrice);
      var count = 0;
      for (var i = 0; i <bananaArray.length; i++){
        count = count + bananaArray[i];
      }
      console.log(count);
      $('#bananasAP').html((count/bananaArray.length).toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
    });

    $('#grapesB').on('click', function(){
      fruitArray[3].quantity += 1;
      $('#grapesQ').html(fruitArray[3].quantity);
      console.log(userCash -= fruitArray[3].marketPrice);
      $("#myCash").html(userCash);
      grapeArray.push(fruitArray[3].marketPrice);
      var count = 0;
      for (var i = 0; i <grapeArray.length; i++){
        count = count + grapeArray[i];
      }
      console.log(count);
      $('#grapesAP').html((count/grapeArray.length).toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
    });


    //alert userCash 0
    if(userCash <= 0){
      alert('You are broke');
    }//end alert


//calculate userCash




});//end of document ready function
