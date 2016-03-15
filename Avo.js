
exports.converting = function(str){
   var step1 = str.split(', ').join(",").replace(/for /g, '');
   var step2 = step1.split(' ').join('');
   var step3 = step2.replace(/R/g, " ").split(" ").join(",").split(",");
    amountIndex = step3;
console.log(amountIndex);
  return amountIndex;
};

exports.indexMap=function(amountIndex){
  var data = [];
  var quantity = [];
  var price = [];

  for (var i = 0; i < amountIndex.length; i++) {
    if(i % 2 === 0) { // index is even
        quantity.push(amountIndex[i]);
    }
    else if(i % 2 != 0) { //index is odd
      {
        price.push(amountIndex[i]);
      }
    }
}
console.log("----------------------")
console.log(quantity)
console.log(price)
console.log("----------------------")


for ( i = 0; i < quantity.length; i++)
{
    data.push({
      quantity: Number(quantity[i]),
      price: Number(price[i]),
    })
}
console.log(data);
return data;
};

  exports.perAvoPrice = function(data){ // amountIndex
    var singlePriceAvo =[];

    for (var x = 0; x < data.length; x++){
      var singleP = data[x].price / data[x].quantity;
      var dec = singleP.toFixed(2);
      var number = Number(dec);
      singlePriceAvo.push(number);
    }

    singlePriceAvo.join(",").split(",");
    console.log(singlePriceAvo);
    return singlePriceAvo;
/*
  var quantityArray = [amountIndex[0],amountIndex[2],amountIndex[4],amountIndex[6]];
  var amountArray = [amountIndex[1],amountIndex[3],amountIndex[5],amountIndex[7]];

  var dealOne = amountArray[0] / quantityArray[0];
  var dl1 = dealOne.toFixed(2);
  var dealTwo = amountArray[1] / quantityArray[1];
  var dl2 = dealTwo.toFixed(2);
  var dealThree = amountArray[2] / quantityArray[2];
  var dl3 = dealThree.toFixed(2);
  var dealFour = amountArray[3] / quantityArray[3];
  var dl4 = dealFour.toFixed(2);

  array =[];
  array.push(dl1);
  array.push(dl2);
  array.push(dl3);
  array.push(dl4);
  console.log(array);
  return array;*/

};

exports.cheapestDeal = function(singlePriceAvo) {
  var min = Math.min.apply(Math, singlePriceAvo).toFixed(2);
    for (y = 0; y < singlePriceAvo.length; y++) {
      if (singlePriceAvo[y] == min) {
        console.log(quantity[y] + " for R" + price[y]);
        return quantity[y] + " for R" + price[y];
      }
    }
  };

    // var min = Math.min.apply( Math, singlePriceAvo );
    // min.toFixed(2);
    // var min1 = Number(min);
    // console.log( min1)S;
    // return min1;


 exports.expensiveDeal = function(singlePriceAvo){
   var max = Math.max.apply(Math, singlePriceAvo );
   console.log(max.toFixed(2));
   return max;
 };

 exports.averagePrice = function(array){
   var sum = eval(array.join('+'));  //The eval() function evaluates JavaScript code represented as a string.
   console.log("Total :" + sum.toFixed(2));
   var avg = sum / array.length;
   console.log("Average :" + avg.toFixed(2));
   return avg;
 };
