
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
for (i = 0; i < quantity.length; i++)
{
    data.push({
      Deal: i + 1,
      quantity: Number(quantity[i]),
      price: Number(price[i])
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
  };

exports.cheapestDeal = function(singlePriceAvo)
{
  for (var i=0; i<1; i++){
      singlePriceAvo.sort();
  }
  console.log(singlePriceAvo[0]);
  return singlePriceAvo[0];
};

 exports.expensiveDeal = function(singlePriceAvo){
   var largest = 0;

for (i = 0; i < singlePriceAvo.length; i++) {
    if (singlePriceAvo[i] > largest) {
        largest = singlePriceAvo[i];
    }
}
console.log(largest);
return largest;
};

 exports.averagePrice = function(singlePriceAvo){
   var sum = eval(singlePriceAvo.join('+'));  //The eval() function evaluates JavaScript code represented as a string.
   console.log("Total :" + sum.toFixed(2));
   var avg = sum / singlePriceAvo.length;
   console.log("Average :" + avg.toFixed(2));
   return avg;
 };
